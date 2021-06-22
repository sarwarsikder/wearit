/* eslint no-param-reassign: 0 */
const _ = require('lodash');
const Joi = require('joi');

const validateSchema = Joi.object().keys({
  title: Joi.string().required(),
  content: Joi.string().allow([null, '']).optional(),
  ordering: Joi.number().allow([null, '']).optional(),
  position: Joi.string().allow([null, '']).optional(),
  mediaId: Joi.string().allow([null, '']).optional(),
  link: Joi.string().allow([null, '']).optional(),
  meta: Joi.object().allow([null, '']).optional()
});

exports.findOne = async (req, res, next) => {
  try {
    const offer = await DB.Offer.findOne({ _id: req.params.id })
      .populate('media');
    if (!offer) {
      return res.status(404).send(PopulateResponse.notFound());
    }

    req.offer = offer;
    res.locals.offer = offer;
    return next();
  } catch (e) {
    return next(e);
  }
};

/**
 * Create a new offer
 */
exports.create = async (req, res, next) => {
  try {
    const validate = Joi.validate(req.body, validateSchema);
    if (validate.error) {
      return next(PopulateResponse.validationError(validate.error));
    }

    const offer = new DB.Offer(validate.value);
    await offer.save();
    res.locals.offer = offer;
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
    const validate = Joi.validate(req.body, validateSchema);
    if (validate.error) {
      return next(PopulateResponse.validationError(validate.error));
    }

    _.assign(req.offer, validate.value);
    await req.offer.save();
    res.locals.update = req.offer;
    return next();
  } catch (e) {
    return next();
  }
};

exports.remove = async (req, res, next) => {
  try {
    await req.offer.remove();
    res.locals.remove = {
      message: 'Offer is deleted'
    };
    next();
  } catch (e) {
    next(e);
  }
};

/**
 * get list Offer
 */
exports.list = async (req, res, next) => {
  const page = Math.max(0, req.query.page - 1) || 0; // using a zero-based page index for use with skip()
  const take = parseInt(req.query.take, 10) || 10;

  try {
    const query = Helper.App.populateDbQuery(req.query, {
      text: ['title'],
      equal: ['position']
    });

    const sort = Helper.App.populateDBSort(req.query);
    const count = await DB.Offer.count(query);
    const items = await DB.Offer.find(query)
      .collation({ locale: 'en' })
      .sort(sort).skip(page * take)
      .limit(take)
      .populate('media')
      .exec();

    res.locals.offerList = {
      count,
      items
    };
    next();
  } catch (e) {
    next(e);
  }
};

exports.random = async (req, res, next) => {
  try {
    const take = parseInt(req.query.take, 10) || 10;
    const query = Helper.App.populateDbQuery(req.query, {
      text: ['title'],
      equal: ['position']
    });
    const data = await DB.Offer.aggregate([
      { $match: query },
      { $sample: { size: take } }
    ]).exec();

    if (!data || !data.length) {
      res.locals.offerList = [];
      return next();
    }

    const mediaIds = data.map(item => item.mediaId);
    if (mediaIds.length) {
      const media = await DB.Media.find({ _id: { $in: mediaIds } });
      data.forEach((offer) => {
        if (offer.mediaId) {
          offer.media = media.find(f => f._id.toString() === offer.mediaId.toString());
        }
      });
    }

    res.locals.offerList = data;
    return next();
  } catch (e) {
    return next(e);
  }
};
