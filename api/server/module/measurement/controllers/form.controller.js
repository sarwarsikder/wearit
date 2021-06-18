exports.create = async (req, res, next) => {
  try {
    const form = new DB.Form(req.body);
    await form.save();
    return next();
  } catch (error) {
    return next(error);
  }
};

exports.get = async (req, res, next) => {
  try {
    const forms = await DB.Form.find();
    res.locals.forms = forms;
    return next();
  } catch (error) {
    return next(error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const id = req.params.id;
    const form = await DB.Form.findById(id);
    req.form = form;
    res.locals.form = form;
    return next();
  } catch (error) {
    return next(error);
  }
};
