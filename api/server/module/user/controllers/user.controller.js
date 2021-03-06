const _ = require('lodash');
const Joi = require('joi');
const fs = require('fs');
const path = require('path');
const Image = require('../../media/components/image');
const formidable = require('formidable');
const s3 = require("../../media/services/s3");
const ip = require('ip');

/**
 * Create a new user
 */
exports.create = async (req, res, next) => {
  console.log('new req',req)
  try {
    const schema = Joi.object().keys({
      email: Joi.string().email(),
      password: Joi.string().min(6).required()
    }).unknown();

    const validate = Joi.validate(req.body, schema);
    if (validate.error) {
      return next(PopulateResponse.validationError(validate.error));
    }

    const data = req.body;
    if (data.role !== 'admin') {
      data.role = 'user';
    }

    //Demo user verification

    data.isActive=true;
    data.emailVerified=true;

    const user = await Service.User.create(data);
    res.locals.user = user;
    return next();
  } catch (e) {
    return next(e);
  }
};


/**
 * do update for user profile or admin update
 */
exports.update = async (req, res, next) => {
  try {
    const user = req.params.id ? await DB.User.findOne({ _id: req.params.id }) : req.user;
    let publicFields = [
      'name', 'password', 'address', 'phoneNumber', 'photo', 'nid', 'wholeSeller'
    ];
    if (req.user.role === 'admin') {
      publicFields = publicFields.concat([
        'isActive', 'emailVerified', 'role', 'permission'
      ]);
    }
    const fields = _.pick(req.body, publicFields);
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
        try{
          const file = await s3.uploadFile(formfields.photo.path);
          if(file.url){
            formfields.avatar = file.url;
          }else{
            delete formfields.photo;
          }
        }
        catch(exc){ 
          console.log("Exception occoured while uploading avatar: ",exc);
          let oldPath = formfields.photo.path; 
          let avatarDir =  '/avatar/'+formfields.photo.name;
          let newPath = path.join(process.env.APP_ROOT_DIR, 'public')+avatarDir;
          let rawData = fs.readFileSync(oldPath);
          formfields.avatar = req.protocol+'://'+ip.address()+':'+process.env.PORT+avatarDir;
          fs.writeFile(newPath, rawData, function(err){ 
              if(err) {
                console.log("Exception occoured while uploading locally: ", err) 
              }
              delete formfields.photo;
          }) 
        }
      }
      if(formfields && formfields.nid){
        try{
          const file = await s3.uploadFile(formfields.nid.path);
          if(file.url){
            formfields.nid = file.url;
          }else{
            delete formfields.nid;
          }
        }
        catch(exc){
          console.log("Exception occoured while uploading nid: ",exc);
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
          // delete formfields.nid;
        }
      }
      _.merge(user, formfields);
    } else{
      _.merge(user, fields);
    }
    
    user.markModified('permission');
    await user.save();
    res.locals.update = user;
    next();
  } catch (e) {
    next(e);
  }
};

exports.me = (req, res, next) => {
  res.locals.me = req.user;
  next();
};

exports.findOne = async (req, res, next) => {
  try {
    const user = await DB.User.findOne({
      _id: req.params.id
    });

    res.locals.user = user;
    next();
  } catch (e) {
    next(e);
  }
};

/**
 * update user avatar
 */
exports.updateAvatar = async (req, res, next) => {
  try {
    const user = req.params.id ? await DB.User.findOne({ _id: req.params.id }) : req.user;
    if (!user) {
      return next(PopulateResponse.notFound());
    }

    // create thumb for the avatar
    const thumbPath = await Image.resize({
      input: req.file.path,
      width: process.env.AVATAR_SIZE_WIDTH || 250,
      height: process.env.AVATAR_SIZE_HEIGHT || 250,
      resizeOption: '^'
    });
    const update = {
      avatar: thumbPath
    };

    if (process.env.USE_S3 === 'true') {
      const s3Data = await Service.S3.uploadFile(thumbPath, {
        ACL: 'public-read',
        fileName: `avatars/${Helper.String.getFileName(thumbPath)}`
      });
      update.avatar = s3Data.url;
    }

    await DB.User.update({ _id: req.params.id || req.user._id }, {
      $set: update
    });

    // unlink old avatar
    if (user.avatar && !Helper.String.isUrl(user.avatar) && fs.existsSync(path.resolve(user.avatar))) {
      fs.unlinkSync(path.resolve(user.avatar));
    }
    // remove tmp file
    if (fs.existsSync(path.resolve(req.file.path))) {
      fs.unlinkSync(path.resolve(req.file.path));
    }

    // TODO - remove old avatar in S3?
    if (process.env.USE_S3 === 'true' && fs.existsSync(path.resolve(thumbPath))) {
      fs.unlinkSync(path.resolve(thumbPath));
    }

    res.locals.updateAvatar = {
      url: DB.User.getAvatarUrl(update.avatar)
    };

    return next();
  } catch (e) {
    return next(e);
  }
};

exports.search = async (req, res, next) => {
  const page = Math.max(0, req.query.page - 1) || 0; // using a zero-based page index for use with skip()
  const take = parseInt(req.query.take, 10) || 10;

  try {
    const query = Helper.App.populateDbQuery(req.query, {
      text: ['name', 'phoneNumber', 'email', 'username'],
      boolean: ['isActive', 'phoneVerified', 'emailVerified', 'isShop'],
      equal: ['role']
    });

    if (req.query.role === 'seller') {
      query.role = 'user';
      query.isShop = true;
    }

    if (req.query.role === 'user') {
      query.role = 'user';
      query.isShop = false;
    }

    const sort = Helper.App.populateDBSort(req.query);
    const count = await DB.User.count(query);
    const items = await DB.User.find(query)
      .collation({ locale: 'en' })
      .sort(sort)
      .skip(page * take)
      .limit(take)
      .exec();

    res.locals.search = {
      count,
      items
    };
    next();
  } catch (e) {
    next(e);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const user = DB.User.findOne({ _id: req.params.userId });
    if (!user) {
      return next(PopulateResponse.notFound());
    }

    if (user.role === 'admin') {
      return next(PopulateResponse.forbidden());
    }

    await user.remove();
    res.locals.remove = {
      success: true
    };
    return next();
  } catch (e) {
    return next(e);
  }
};
