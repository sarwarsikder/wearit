/* eslint no-param-reassign: 0 */
const Joi = require('joi');
const _ = require('lodash');
const path = require('path');
const moment = require('moment');
const { connection } = require('mongoose');

exports.details = async (req, res, next) => {
  try {
    // const page = Math.max(0, req.query.page - 1) || 0; // using a zero-based page index for use with skip()
    // const take = parseInt(req.query.take, 10) || 10;

    //const courierId = req.user._id;

    // const orders = await DB.Order.find({ courierId: req.user._id });
    // const orderIds = orders.map(p => p._id);

    // const orderdetails = await DB.OrderDetail.find({ orderId: { $in: orderIds } });

    const orderdetails = await DB.OrderDetail.find({ orderId: req.params.orderId });

    const productIds = [];
    orderdetails.forEach(item => productIds.push(item.productId));
    if (productIds.length) {
      const products = await DB.Product.find({ _id: { $in: productIds } }).select('_id mainImage');
      const mediaIds = products.map(p => p.mainImage);
      if (mediaIds) {
        const media = await DB.Media.find({ _id: { $in: mediaIds } });
        orderdetails.forEach((item) => {
          const product = _.find(products, p => p._id.toString() === item.productId.toString());
          if (product && product.mainImage) {
            const image = _.find(media, m => m._id.toString() === product.mainImage.toString());
            if (image) {
              if (!item.productDetails) {
                item.productDetails = {};
              }

              item.productDetails.mainImage = image.toJSON();
            }
          }
        });
      }
    }

    if (orderdetails.length == 0) {
        return next(PopulateResponse.notFound());
      }

    res.locals.details = orderdetails;
    return next();
  } catch (e) {
    return next(PopulateResponse.notFound());
  }
};

exports.count = async (req, res, next) => {
  try {
    // const page = Math.max(0, req.query.page - 1) || 0; // using a zero-based page index for use with skip()
    // const take = parseInt(req.query.take, 10) || 10;
    
    const complete = await DB.OrderDetail.find({ status: "complete" });
    const shipped = await DB.OrderDetail.find({ status: "shipped" });
    const returned = await DB.OrderDetail.find({ status: "returned" });
    const cancel = await DB.OrderDetail.find({ status: "cancel" });

    // if (details.length == 0) {
    //     return next(PopulateResponse.notFound());
    //   }

    res.locals.count = {"complete": complete.length,
                        "shipped": shipped.length,
                        "returned": returned.length,
                        "cancel": cancel.length,};
    next();
  } catch (e) {
    return next(e);
  }
};

exports.detailsByStatus = async (req, res, next) => {
  try {
    const page = Math.max(0, req.params.page - 1) || 0; // using a zero-based page index for use with skip()
    const take = parseInt(req.params.limit, 10) || 10;

    // const orders = await DB.Order.find({ courierId: req.user._id });
    // const orderIds = orders.map(p => p._id);

    //, orderId: { $in: orderIds } 
    
    const alldetails = await DB.OrderDetail.find({ status: req.params.status});
    const details = await DB.OrderDetail.find({ status: req.params.status})
    .skip(page * take)
    .limit(take);

    const productIds = [];
    details.forEach(item => productIds.push(item.productId));
    if (productIds.length) {
      const products = await DB.Product.find({ _id: { $in: productIds } }).select('_id mainImage');
      const mediaIds = products.map(p => p.mainImage);
      if (mediaIds) {
        const media = await DB.Media.find({ _id: { $in: mediaIds } });
        details.forEach((item) => {
          const product = _.find(products, p => p._id.toString() === item.productId.toString());
          if (product && product.mainImage) {
            const image = _.find(media, m => m._id.toString() === product.mainImage.toString());
            if (image) {
              if (!item.productDetails) {
                item.productDetails = {};
              }

              item.productDetails.mainImage = image.toJSON();
            }
          }
        });
      }
    }

    // if (details.length == 0) {
    //     return next(PopulateResponse.notFound());
    //   }

    res.locals.details = {"pageNo": req.params.page,
                          "orders": details,
                          "totalCount": alldetails.length,
                          };
    next();
  } catch (e) {
    return next(e);
  }
};

exports.update = async (req, res, next) => {
  try {
    //const order = await DB.OrderDetail.findOne({ _id: req.params.orderId });
    let publicFields = [
      'status'
    ];

    const fields = _.pick(req.body, publicFields);

    await DB.OrderDetail.updateOne({ _id: req.params.orderId }, {
      $set: fields
    });
    
    const neworder = await DB.OrderDetail.findOne({ _id: req.params.orderId });
    res.locals.update = neworder;
    next();
  } catch (e) {
    next(e);
  }
};

exports.me = (req, res, next) => {
  res.locals.me = req.user;
  next();
};