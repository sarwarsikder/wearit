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
    
    const orders = await DB.OrderDetail.find({ _id: req.params.orderId });

    if (orders.length == 0) {
        return next(PopulateResponse.notFound());
      }

    res.locals.details = orders[0];
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
    
    const alldetails = await DB.OrderDetail.find({ status: req.params.status });
    const details = await DB.OrderDetail.find({ status: req.params.status })
    .skip(page * take)
    .limit(take);

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
    const order = await DB.OrderDetail.findOne({ _id: req.params.orderId });
    let publicFields = [
      'status'
    ];

    const fields = _.pick(req.body, publicFields);

    console.log(fields);

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