const Joi = require('joi');
const nconf = require('nconf');
const url = require('url');
const formidable = require('formidable');
const s3 = require("../media/services/s3");
const fs = require('fs'); 
const path = require('path');
const ip = require('ip');

exports.register = async (req, res, next) => {
  const schema = Joi.object()
    .keys({
      type: Joi.string()
        .allow(['user'])
        .default('user'),
      email: Joi.string()
        .email(),
      password: Joi.string()
        .min(6)
        .required(),
      phoneNumber: Joi.string()
        .allow(['', null])
        .optional(),
      username: Joi.string(),  
      name: Joi.string()
        .allow(['', null])
        .optional(),
      nid: Joi.string()
        .allow(['', null])
        .optional(),
      photo: Joi.string()
        .allow(['', null])
        .optional(),
      address: Joi.string()
        .allow(['', null])
        .optional(),
    });
  var validate;
  if (req.body && Object.keys(req.body).length === 0 && req.body.constructor === Object) {
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    const formfields = await new Promise(function (resolve, reject) {
      form.parse(req, function (err, fields, files) {
        if (err) {
          reject(err);
          return;
        }
        resolve({...fields,...files});
      }); // form.parse
    });
    if(formfields && formfields.photo){
      if(formfields.photo.path){
        try{
          const file = await s3.uploadFile(formfields.photo.path);
          if(file.url){
            formfields.avatar = file.url;
          }else{
            delete formfields.photo;
          }
        }
        catch(exc){
          console.log("exception occured while uploading photo:",exc);
          let oldPath = formfields.photo.path; 
          let avatarDir =  '/avatar/'+formfields.photo.name;
          let newPath = path.join(process.env.APP_ROOT_DIR, 'public')+avatarDir;
          let rawData = fs.readFileSync(oldPath);
          formfields.avatar = req.protocol+'://'+ip.address()+':'+process.env.PORT+avatarDir;
          fs.writeFile(newPath, rawData, function(err){ 
              if(err) {
                console.log("Exception occoured while uploading locally: ", err) 
              }
          }) 
          delete formfields.photo;
        }   
      }else{
        delete formfields.photo
      }
    }
    if(formfields && formfields.nid){
      if(formfields.nid.path){
        try{
          const file = await s3.uploadFile(formfields.nid.path);
          if(file.url){
            formfields.nid = file.url;
          }else{
            delete formfields.nid;
          }
        }
        catch(exc){
          console.log("exception occured while uploading nid:",exc);
          let oldPath = formfields.nid.path; 
          let nidDir =  '/files/'+formfields.nid.name;
          let newPath = path.join(process.env.APP_ROOT_DIR, 'public')+nidDir;
          let rawData = fs.readFileSync(oldPath) 
          formfields.nid = req.protocol+'://'+ip.address()+':'+process.env.PORT+nidDir;
          fs.writeFile(newPath, rawData, function(err){ 
              if(err) {
                console.log("Exception occoured while uploading locally: ", err) 
              }
          }); 
        }
      }else{
        delete formfields.nid;
      }
    }
    validate = Joi.validate(formfields, schema);
  } else {
    validate = Joi.validate(req.body, schema);
    if (validate.error) {
      return next(PopulateResponse.validationError(validate.error));
    }
  }

  try {
    const count = await DB.User.count({
      email: validate.value.email.toLowerCase()
    });
    if (count) {
      return next(PopulateResponse.error({
        message: 'This email has already taken'
      }, 'ERR_EMAIL_ALREADY_TAKEN'));
    }

    const user = new DB.User(validate.value);
    user.emailVerifiedToken = Helper.String.randomString(48);
    await user.save();

    // now send email verificaiton to user
    await Service.Mailer.send('verify-email.html', user.email, {
      subject: 'Verify email address',
      emailVerifyLink: url.resolve(nconf.get('baseUrl'), `v1/auth/verifyEmail/${user.emailVerifiedToken}`)
    });

    res.locals.register = PopulateResponse.success({
      message: 'Your account has been created, please verify your email address and get access.'
    }, 'USE_CREATED');
    return next();
  } catch (e) {
    return next(e);
  }
};

exports.verifyEmail = async (req, res, next) => {
  const schema = Joi.object()
    .keys({
      token: Joi.string()
        .required()
    });

  const validate = Joi.validate(req.body, schema);
  if (validate.error) {
    return next(PopulateResponse.validationError(validate.error));
  }

  try {
    const user = await DB.User.findOne({
      emailVerifiedToken: req.body.token
    });
    if (!user) {
      return next(PopulateResponse.error({
        message: 'This token is incorrect'
      }, 'ERR_INVALID_EMAIL_VERIFY_TOKEN'));
    }

    user.emailVerified = true;
    user.emailVerifiedToken = null;
    await user.save();

    res.locals.verifyEmail = PopulateResponse.success({
      message: 'Your email has been verified.'
    }, 'EMAIL_VERIFIED');
    return next();
  } catch (e) {
    return next(e);
  }
};

exports.verifyEmailView = async (req, res, next) => {
  try {
    const user = await DB.User.findOne({
      emailVerifiedToken: req.params.token
    });

    if (user) {
      user.emailVerified = true;
      user.emailVerifiedToken = null;
      await user.save();
    }

    return res.render('auth/verify-email.html', {
      verified: user !== null,
      siteName: nconf.get('SITE_NAME')
    });
  } catch (e) {
    return next(e);
  }
};

exports.forgot = async (req, res, next) => {
  const schema = Joi.object()
    .keys({
      email: Joi.string()
        .email()
        .required()
    });

  const validate = Joi.validate(req.body, schema);
  if (validate.error) {
    return next(PopulateResponse.validationError(validate.error));
  }

  try {
    const user = await DB.User.findOne({
      email: validate.value.email
    });
    if (!user) {
      return next(PopulateResponse.error({
        message: 'This email is not registered'
      }, 'ERR_INVALID_EMAIL_ADDRESS'));
    }

    const passwordResetToken = Helper.String.randomString(48);
    await DB.User.update({
      _id: user._id
    }, {
      $set: { passwordResetToken }
    });

    // now send email verificaiton to user
    await Service.Mailer.send('forgot-password.html', user.email, {
      subject: 'Forgot password',
      passwordResetLink: url.resolve(nconf.get('baseUrl'), `v1/auth/passwordReset/${passwordResetToken}`),
      user: user.toObject()
    });

    res.locals.forgot = PopulateResponse.success({
      message: 'Your password email has been sent.'
    }, 'FORGOT_PASSWORD_EMAIL_SENT');
    return next();
  } catch (e) {
    return next(e);
  }
};

exports.resetPasswordView = async (req, res, next) => {
  try {
    const user = await DB.User.findOne({
      passwordResetToken: req.params.token
    });

    if (!user) {
      return res.render('not-found.html');
    }

    if (req.method === 'GET') {
      return res.render('auth/change-password.html', {
        openForm: true
      });
    }

    if (!req.body.password) {
      return res.render('auth/change-password.html', {
        openForm: true,
        error: true,
        siteName: nconf.get('SITE_NAME')
      });
    }

    user.password = req.body.password;
    user.passwordResetToken = null;
    await user.save();

    return res.render('auth/change-password.html', {
      openForm: false,
      error: false,
      siteName: nconf.get('SITE_NAME')
    });
  } catch (e) {
    return next(e);
  }
};
