const mallController = require('./controllers/mall.controller');

exports.model = {
  Mall: require('./models/mall')
};

exports.router = (router) => {
  /**
   * @apiDefine mallRequest
   * @apiParam {String}   title       mall title
   * @apiParam {String}   [content]
   * @apiParam {Number}   [ordering]
   * @apiParam {String}   [position] Position of the mall. like `home`, `category`...
   * @apiParam {String}   [mediaId] File Id
   * @apiParam {String}   [link] Link of the mall
   * @apiParam {Object}   [meta] any custom meta data
   */
   router.get(
    '/v1/malls/search',
    Middleware.loadUser,
    mallController.search,
    Middleware.Response.success('search')
  );
  /**
   * @apiGroup Mall
   * @apiVersion 1.0.0
   * @api {post} /v1/malls  Create new mall
   * @apiDescription Create new mall
   * @apiUse authRequest
   * @apiUse mallRequest
   * @apiPermission superadmin
   */
  router.post(
    '/v1/malls',
    Middleware.hasRole('admin'),
    mallController.create,
    Middleware.Response.success('mall')
  );

  /**
   * @apiGroup Mall
   * @apiVersion 1.0.0
   * @api {put} /v1/malls/:id  Update a mall
   * @apiDescription Update a mall
   * @apiUse authRequest
   * @apiParam {String}   id        mall id
   * @apiUse mallRequest
   * @apiPermission superadmin
   */
  router.put(
    '/v1/malls/:id',
    Middleware.hasRole('admin'),
    mallController.findOne,
    mallController.update,
    Middleware.Response.success('update')
  );

  /**
   * @apiGroup Mall
   * @apiVersion 1.0.0
   * @api {delete} /v1/malls/:id Remove a mall
   * @apiDescription Remove a mall
   * @apiUse mallRequest
   * @apiParam {String}   id        mall id
   * @apiPermission superadmin
   */
  router.delete(
    '/v1/malls/:id',
    Middleware.hasRole('admin'),
    mallController.findOne,
    mallController.remove,
    Middleware.Response.success('remove')
  );

  /**
   * @apiGroup Mall
   * @apiVersion 1.0.0
   * @api {get} /v1/malls?:title&:location&page&take  Get list malls
   * @apiDescription Get list malls
   * @apiParam {String}   [title] title of mall
   * @apiParam {String}   [position] mall position
   * @apiPermission all
   */
  router.get(
    '/v1/malls',
    mallController.list,
    Middleware.Response.success('mallList')
  );

  /**
   * @apiGroup Mall
   * @apiVersion 1.0.0
   * @api {get} /v1/malls/random?:title&:locatione&take  Get random malls
   * @apiDescription Get random malls
   * @apiParam {String}   [title] title of mall
   * @apiParam {String}   [position] mall position
   * @apiParam {Number}   [take] num of item should return
   * @apiPermission all
   */
  router.get(
    '/v1/malls/random',
    mallController.random,
    Middleware.Response.success('mallList')
  );

  /**
   * @apiGroup Mall
   * @apiVersion 1.0.0
   * @api {get} /v1/malls/:id Get mall details
   * @apiDescription Get mall details
   * @apiParam {String}   id        mall id
   * @apiPermission all
   */
  router.get(
    '/v1/malls/:id',
    mallController.findOne,
    Middleware.Response.success('mall')
  );
};
