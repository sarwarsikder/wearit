/* eslint no-param-reassign: 0 */
const _ = require('lodash');
const Joi = require('joi');
const jwt = require('jsonwebtoken');

const validateSchema = Joi.object().keys({
  question: Joi.string().allow([null, '']).optional(),
  answer: Joi.string().allow([null, '']).optional(),
  userId: Joi.string().allow([null, '']).optional(),
  productId: Joi.string().allow([null, '']).optional(),
  visibility: Joi.boolean().allow([null, '']).optional()
});

exports.findOne = async (req, res, next) => {
  try {
    const question = await DB.Question.findOne({ _id: req.params.id })
      .populate('user');
    if (!question) {
      return res.status(404).send(PopulateResponse.notFound());
    }

    req.question = question;
    res.locals.question = question;
    return next();
  } catch (e) {
    return next(e);
  }
};

/**
 * Create a new banner
 */
exports.create = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token) {
      const decoded = jwt.verify(token, process.env.SESSION_SECRET);
      req.body['userId'] = decoded._id;
    }
    console.log(req.body);

    const validate = Joi.validate(req.body, validateSchema);
    if (validate.error) {
      return next(PopulateResponse.validationError(validate.error));
    }

    const question = new DB.Question(validate.value);
    await question.save();
    res.locals.question = question;
    return next();
  } catch (e) {
    return next(e);
  }
};

/**
 * do update for banner
 */
exports.update = async (req, res, next) => {
  try {
    const validate = Joi.validate(req.body, validateSchema);
    if (validate.error) {
      return next(PopulateResponse.validationError(validate.error));
    }

    for (let updateKey in req.body) {
      if ((req.question[updateKey] && req.question[updateKey] !== req.body[updateKey]) || !req.question.hasOwnProperty(updateKey)) {
        req.question[updateKey] = req.body[updateKey];
      }
    }

    await req.question.save();
    res.locals.update = req.question;
    return next();

  } catch (e) {
    return next();
  }
};

exports.remove = async (req, res, next) => {
  try {
    await req.question.remove();
    res.locals.remove = {
      message: 'Question is deleted'
    };
    next();
  } catch (e) {
    next(e);
  }
};

/**
 * get list question
 */
exports.list = async (req, res, next) => {
  const page = Math.max(0, req.query.page - 1) || 0; // using a zero-based page index for use with skip()
  const take = parseInt(req.query.take, 10) || 10;

  const params = req.query;
  params['visibility'] = (params['visibility'] === 'true');

  try {
    const query = Helper.App.populateDbQuery(params, {
      text: ['question'],
      boolean: ['visibility'],
      equal: ['productId']
    });
    const sort = Helper.App.populateDBSort(params);
    const count = await DB.Question.count(query);
    const items = await DB.Question.find(query)
      .collation({ locale: 'en' })
      .populate('user')
      .sort(sort)
      .skip(page * take)
      .limit(take)
      .exec();

    res.locals.questionList = {
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
    });
    const data = await DB.Question.aggregate([
      { $match: query },
      { $sample: { size: take } }
    ]).exec();

    if (!data || !data.length) {
      res.locals.questionList = [];
      return next();
    }

    res.locals.questionList = data;
    return next();
  } catch (e) {
    return next(e);
  }
};
