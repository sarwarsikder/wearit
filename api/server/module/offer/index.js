const offerController = require('./controllers/offer.controller');

exports.model = {
  Offer: require('./models/offer')
};

exports.router = (router) => {
  /**
   * @apiDefine offerRequest
   * @apiParam {String}   title       offer title
   * @apiParam {String}   [content]
   * @apiParam {Number}   [ordering]
   * @apiParam {String}   [position] Position of the offer. like `home`, `category`...
   * @apiParam {String}   [mediaId] File Id
   * @apiParam {String}   [link] Link of the offer
   * @apiParam {Object}   [meta] any custom meta data
   */

  /**
   * @apiGroup Offer
   * @apiVersion 1.0.0
   * @api {post} /v1/offers  Create new offer
   * @apiDescription Create new offer
   * @apiUse authRequest
   * @apiUse offerRequest
   * @apiPermission superadmin
   */
  router.post(
    '/v1/offers',
    Middleware.hasRole('admin'),
    offerController.create,
    Middleware.Response.success('offer')
  );

  /**
   * @apiGroup Offer
   * @apiVersion 1.0.0
   * @api {put} /v1/offer/:id  Update a offer
   * @apiDescription Update a offers
   * @apiUse authRequest
   * @apiParam {String}   id        offer id
   * @apiUse offerRequest
   * @apiPermission superadmin
   */
  router.put(
    '/v1/offers/:id',
    Middleware.hasRole('admin'),
    offerController.findOne,
    offerController.update,
    Middleware.Response.success('update')
  );

  /**
   * @apiGroup Offer
   * @apiVersion 1.0.0
   * @api {delete} /v1/offers/:id Remove a offer
   * @apiDescription Remove a offer
   * @apiUse offerRequest
   * @apiParam {String}   id        offer id
   * @apiPermission superadmin
   */
  router.delete(
    '/v1/offers/:id',
    Middleware.hasRole('admin'),
    offerController.findOne,
    offerController.remove,
    Middleware.Response.success('remove')
  );

  /**
   * @apiGroup Offer
   * @apiVersion 1.0.0
   * @api {get} /v1/offers?:title&:location&page&take  Get list Offers
   * @apiDescription Get list offers
   * @apiParam {String}   [title] title of offer
   * @apiParam {String}   [position] offer position
   * @apiPermission all
   */
  router.get(
    '/v1/offers',
    offerController.list,
    Middleware.Response.success('offerList')
  );

  /**
   * @apiGroup Offer
   * @apiVersion 1.0.0
   * @api {get} /v1/offers/random?:title&:locatione&take  Get random offers
   * @apiDescription Get random offer
   * @apiParam {String}   [title] title of offer
   * @apiParam {String}   [position] offer position
   * @apiParam {Number}   [take] num of item should return
   * @apiPermission all
   */
  router.get(
    '/v1/offers/random',
    offerController.random,
    Middleware.Response.success('offerList')
  );

  /**
   * @apiGroup Offer
   * @apiVersion 1.0.0
   * @api {get} /v1/offers/:id Get offer details
   * @apiDescription Get offer details
   * @apiParam {String}   id        Offer id
   * @apiPermission all
   */
  router.get(
    '/v1/offers/:id',
    offerController.findOne,
    Middleware.Response.success('offer')
  );
};
