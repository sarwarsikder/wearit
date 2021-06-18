const Joi = require('joi');
const signToken = require('../auth.service').signToken;
const oauth = require('axios-oauth-client')
const axios = require('axios')

exports.login = async (req, res, next) => {
  try {
    
    const code =  Object.keys(req.body)[0]

    const getAccessToken = oauth.client(axios.create(), {
      url: 'https://instagram.com/oauth/access_token',
      grant_type: 'authorization_code',
      client_id: '554933932170461',
      client_secret: '89586836c233ae35a2e2c6b2944e7dfd',
      redirect_uri: 'https://localhost:4200/',
      code: code,
    });
  
    const auth = await getAccessToken();
  
    const user_info = await axios.get(
      `https://graph.instagram.com/me?fields=id,username&access_token=${auth.access_token}`
    );
  
    const username = user_info.data.username;
    const userid = user_info.data.id;
    
    let user = await DB.User.findOne({
      username
    });

    let isNew = false
  
    if (!user) {
      user = new DB.User({
        username : username
      });
    
      await user.save();
      isNew = true;
    }

    let social;

    if(!isNew){
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
        username : username,
        accessToken : auth.access_token
      });
    }

    social.accessToken =  auth.access_token

    await social.save();

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
    return next(e)
  }
};
