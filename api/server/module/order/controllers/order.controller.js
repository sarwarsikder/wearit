/* eslint no-param-reassign: 0, no-await-in-loop: 0, no-restricted-syntax: 0, no-continue: 0 */
const Joi = require('joi');

const validateSchema = Joi.object().keys({
  products: Joi.array().items(Joi.object().keys({
    productId: Joi.string().required(),
    quantity: Joi.number().required().min(0),
    // shippingMethod: Joi.string().allow([null, '']).optional(),
    userNote: Joi.string().allow([null, '']).optional(),
    productVariantId: Joi.string().allow([null, '']).optional(),
    couponCode: Joi.string().allow(['', null]).optional()
  })).required(),
  // TODO - update me
  shippingMethod: Joi.string().allow(['cod']).optional().default('cod'),
  shippingAddress: Joi.string().allow([null, '']).optional(),
  paymentMethod: Joi.string().allow(['cod']).optional().default('cod'),
  phoneNumber: Joi.string().allow([null, '']).optional(),
  email: Joi.string().allow([null, '']).optional(),
  firstName: Joi.string().allow([null, '']).optional(),
  lastName: Joi.string().allow([null, '']).optional(),
  streetAddress: Joi.string().allow([null, '']).optional(),
  city: Joi.string().allow([null, '']).optional(),
  state: Joi.string().allow([null, '']).optional(),
  zipCode: Joi.string().allow([null, '']).optional(),
  country: Joi.string().allow([null, '']).optional(),
  userCurrency: Joi.string().optional(),
  userNote: Joi.string().allow([null, '']).optional(),
  // phoneVerifyCode: Joi.string().allow([null, '']).when('paymentMethod', {
  //   is: 'cod',
  //   then: Joi.required(),
  //   otherwise: Joi.optional()
  // })
});

const validateSchemaDelivery = Joi.object().keys({
  courierId: Joi.string().required()
    
});

/**
 * Create a new order
 */
exports.create = async (req, res, next) => {
  try {
    const validate = Joi.validate(req.body, validateSchema);
    // if (validate.error) {
    //   return next(PopulateResponse.validationError(validate.error));
    // }

    // // verify code
    // if (validate.value.paymentMethod === 'cod') {
    //   await Service.Order.verifyPhoneCheck({
    //     phoneNumber: validate.value.phoneNumber,
    //     userId: req.user ? req.user._id : null,
    //     // code: validate.value.phoneVerifyCode
    //   });
    // }

    // assign user agent and IP address here
    const userIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const userAgent = req.get('User-Agent');
    const data = Object.assign({ userIP, userAgent }, validate.value);
    const order = await Service.Order.create(data, req.user || {});
    // hide cod number on response
    order.codVerifyCode = '';
    res.locals.order = order;
    return next();
  } catch (e) {
    return next(e);
  }
};

exports.list = async (req, res, next) => {
  try {
    const page = Math.max(0, req.query.page - 1) || 0; // using a zero-based page index for use with skip()
    const take = parseInt(req.query.take, 10) || 10;

    const query = Helper.App.populateDbQuery(req.query, {
      equal: ['status'],
      text: ['_id', 'trackingCode']
    });
    const sort = Helper.App.populateDBSort(req.query);
    query.$or = [{
      paymentStatus: 'paid',
      paymentMethod: { $ne: 'cod' }
    }, {
      paymentMethod: 'cod'
    }];

    // TODO - if admin, we dont need to query by customer
    if (req.user.role !== 'admin') {
      query.customerId = req.user._id;
    }

    const count = await DB.Order.count(query);
    const items = await DB.Order.find(query)
      .populate('details')
      .populate('customer')
      .collation({ locale: 'en' })
      .sort(sort)
      .skip(page * take)
      .limit(take);

    res.locals.list = {
      count,
      items: items.map((item) => {
        const data = item.toObject();
        if (item.customer) {
          data.customer = item.customer.toJSON();
        }
        data.details = item.details || [];
        data.codVerifyCode = '';
        return data;
      })
    };
    return next();
  } catch (e) {
    return next(e);
  }
};

/**
 * do update for offer
 */
 exports.update = async (req, res, next) => {
  try {
    
    const validate = Joi.validate(req.body, validateSchemaDelivery);
    if (validate.error) {
      return next(PopulateResponse.validationError(validate.error));
    }

    const query = {
      _id: req.params.orderId
    };

    const item = await DB.Order.findOne(query).populate('details');
    if (!item) {
      return next(PopulateResponse.notFound());
    }
    var order = item;
    order.courierId =req.body.courierId;
    order.details.courierId =req.body.courierId;
    order.courierId
    console.log(order);

    await item.save();
    res.locals.update = req.order;
    return next();
  } catch (e) {
    return next();
  }
};

exports.details = async (req, res, next) => {
  try {
    // TODO - check admin role here
    // or if it is shop, we only sub order of shop here
    const query = {
      _id: req.params.orderId
    };

    if (req.user.role !== 'admin') {
      query.customerId = req.user._id;
    }

    const item = await DB.Order.findOne(query).populate('details').populate('customer').populate('courier');
    if (!item) {
      return next(PopulateResponse.notFound());
    }

    const data = item.toObject();
    if (data.customerId) {
      const customer = await DB.User.findOne({ _id: data.customerId });
      if (customer) {
        data.customer = customer.toJSON();
      }
    }


    if (data.courierId) {
      const courier = await DB.User.findOne({ _id: data.courierId });
      if (courier) {
        data.courier = courier.toJSON();
      }
    }

    console.log(data.courier);

    res.locals.order = data;
    return next();
  } catch (e) {
    return next(e);
  }
};
