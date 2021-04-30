/* eslint no-param-reassign: 0 */
const _ = require('lodash');
const Joi = require('joi');

const validateSchema = Joi.object().keys({
  title: Joi.string().required(),
  description: Joi.string().allow([null, '']).optional(),
  address: Joi.string().allow([null, '']).optional(),
  mediaId: Joi.string().allow([null, '']).optional(),
});

exports.findOne = async (req, res, next) => {
  try {
    const mall = await DB.Mall.findOne({ _id: req.params.id })
      .populate('media');
    if (!mall) {
      return res.status(404).send(PopulateResponse.notFound());
    }

    req.mall = mall;
    res.locals.mall = mall;
    return next();
  } catch (e) {
    return next(e);
  }
};

/**
 * Create a new mall
 */
exports.create = async (req, res, next) => {
  try {
    const validate = Joi.validate(req.body, validateSchema);
    if (validate.error) {
      return next(PopulateResponse.validationError(validate.error));
    }

    const mall = new DB.Mall(validate.value);
    await mall.save();
    res.locals.mall = mall;
    return next();
  } catch (e) {
    return next(e);
  }
};

/**
 * do update for mall
 */
exports.update = async (req, res, next) => {
  try {
    const validate = Joi.validate(req.body, validateSchema);
    if (validate.error) {
      return next(PopulateResponse.validationError(validate.error));
    }

    _.assign(req.mall, validate.value);
    await req.mall.save();
    res.locals.update = req.mall;
    return next();
  } catch (e) {
    return next();
  }
};

exports.remove = async (req, res, next) => {
  try {
    await req.mall.remove();
    res.locals.remove = {
      message: 'Mall is deleted'
    };
    next();
  } catch (e) {
    next(e);
  }
};

/**
 * get list mall
 */
exports.list = async (req, res, next) => {
  const page = Math.max(0, req.query.page - 1) || 0; // using a zero-based page index for use with skip()
  const take = parseInt(req.query.take, 10) || 10;

  try {
    const query = Helper.App.populateDbQuery(req.query, {
      text: ['title', 'address'],
    });

    const sort = Helper.App.populateDBSort(req.query);
    const count = await DB.Mall.count(query);
    const items = await DB.Mall.find(query)
      .collation({ locale: 'en' })
      .sort(sort).skip(page * take)
      .limit(take)
      .populate('media')
      .exec();

    res.locals.mallList = {
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
      text: ['title', 'address'],
    });
    const data = await DB.Mall.aggregate([
      { $match: query },
      { $sample: { size: take } }
    ]).exec();

    if (!data || !data.length) {
      res.locals.mallList = [];
      return next();
    }

    const mediaIds = data.map(item => item.mediaId);
    if (mediaIds.length) {
      const media = await DB.Media.find({ _id: { $in: mediaIds } });
      data.forEach((mall) => {
        if (mall.mediaId) {
          mall.media = media.find(f => f._id.toString() === mall.mediaId.toString());
        }
      });
    }

    res.locals.mallList = data;
    return next();
  } catch (e) {
    return next(e);
  }
};
