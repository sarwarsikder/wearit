const passport = require('passport');

const signToken = require('../auth.service').signToken;

exports.login = async (req, res, next) => {
  passport.authenticate('local', async (err, user, info) => {
    try {
      const error = err || info;
      if (error) {
        return next(error);
      }
      if (!user) {
        return next(PopulateResponse.notFound());
      }

      // if shop is deactivated, disable login!
      if (req.headers.platform === 'seller') {
        if (!user.isShop || !user.shopId) {
          return next(PopulateResponse.error({
            message: "Your account hasn't regsistered for shop!"
          }));
        }
        // const allowShop = await DB.Shop.count({
        //   _id: user.shopId,
        //   activated: true
        // });
        // if (!allowShop) {
        //   return next(PopulateResponse.error({
        //     message: 'Shop is deactivated!'
        //   }));
        // }
      }
      if(user.type == 'delivery'){
        if(!(req.headers.platform && req.headers.platform=="delivery")){
          console.log("Your account hasn't regsistered for delivery!");
          return next(PopulateResponse.error({
            message: "Your account hasn't regsistered for delivery!"
          }));
        }
      }
      if(user.type !='delivery'){
        if((req.headers.platform && req.headers.platform=="delivery")){
          console.log("Your account hasn't regsistered for delivery!");
          return next(PopulateResponse.error({
            message: "Your account hasn't regsistered for delivery!"
          }));
        }
      }

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
  })(req, res, next);
};
