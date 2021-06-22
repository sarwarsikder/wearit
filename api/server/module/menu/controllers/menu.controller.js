const _= require('lodash');
const Joi = require('joi');

/**
 * Create a new menu
 */
exports.create = async (req, res, next) => {
  try {
    const validateSchema = Joi.object().keys({
      name: Joi.string().required(),
      shortName: Joi.string().required(),
      url: Joi.number().min(1).max(100).required(),
    });
    const validate = Joi.validate(req.body, validateSchema);
    if (validate.error) {
      return next(PopulateResponse.validationError(validate.error));
    }

    const count = await DB.Menu.count({
      shortName: req.body.shortName
    });
    if (count) {
      return next(PopulateResponse.error({
        message: `The sbort name ${validate.value.code.toUpperCase()} has already taken`
      }));
    }

    const menu = await Service.Menu.create(validate.value);
    res.locals.menu = menu;
    return next();
  } catch (e) {
    return next(e);
  }
};
