const Joi = require('joi');
const signToken = require('../auth.service').signToken;
const oauth = require('axios-oauth-client');
const axios = require('axios');
const environment = process.env;

exports.login = async (req, res, next) => {
  try {
    const schema = Joi.object().keys({
      accessToken: Joi.string().required()
    });

    const validate = Joi.validate(req.body, schema);
    if (validate.error) {
      return next(PopulateResponse.validationError(validate.error));
    }


    const code = validate.value.accessToken;

    const getAccessToken = oauth.client(axios.create(), {
      url: 'https://instagram.com/oauth/access_token',
      grant_type: 'authorization_code',
      client_id: environment.INSTAGRAM_CLIENT_ID,
      client_secret: environment.INSTAGRAM_CLIENT_SECRET,
      redirect_uri: environment.INSTAGRAM_REDIRECT_URI,
      code,
    });

    const auth = await getAccessToken();

    const userInfo = await axios.get(`https://graph.instagram.com/me?fields=id,username&access_token=${auth.access_token}`);

    const userName = userInfo.data.username;
    const userid = userInfo.data.id;



    let user = await DB.User.findOne({
      userName
    });

    let isNew = false;

    if (!user) {
      user = new DB.User({
        userName
      });

      await user.save();
      isNew = true;
    }

    let social;

    if (!isNew) {
      social = await DB.UserSocial.findOne({
        userId: user._id,
        socialId: userid,
        social: 'instagram'
      });
    }

    if (!social) {
      social = await new DB.UserSocial({
        userId: user._id,
        social: 'instagram',
        socialId: userid,
        userName,
        accessToken: auth.access_token
      });
    }

    social.accessToken = auth.access_token


    const expireTokenDuration = 60 * 60 * 24 * 7; // 7 days
    const now = new Date();
    const expiredAt = new Date(now.getTime() + (expireTokenDuration * 1000));
    const token = signToken(user._id, user.role, expireTokenDuration);

    res.locals.login = {
      token,
      expiredAt
    };

    return next();
  } catch (e) {
    return next(e);
  }
};
