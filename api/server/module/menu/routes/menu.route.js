const menuController = require('../controllers/menu.controller');

module.exports = (router) => {
  /**
   * @apiDefine menuRequest
   * @apiParam {String}   name
   * @apiParam {String}   code
   * @apiParam {Number}   discountPercentage 1 - 100
   * @apiParam {Number}   [limit] how many times the menu can be used. `0` means unlimited
   * @apiParam {Date} [expiredTime] Expired time fo this menu
   */

  /**
   * @apiGroup menu
   * @apiVersion 1.0.0
   * @apiName Create
   * @api {post} /v1/menu
   * @apiUse authRequest
   * @apiUse menuRequest
   * @apiPermission seller
   */
  router.post(
    '/v1/menu',
    Middleware.isAuthenticated,
    Middleware.isAdminOrSeller,
    menuController.create,
    Middleware.Response.success('menu')
  );

  /**
   * @apiGroup menu
   * @apiVersion 1.0.0
   * @apiName Update
   * @api {put} /v1/menu/:menuId
   * @apiUse authRequest
   * @apiParam {String}   menuId
   * @apiUse menuRequest
   * @apiPermission seller
   */
  router.put(
    '/v1/menu/:menuId',
    Middleware.isAuthenticated,
    Middleware.isAdminOrSeller,
    menuController.findOne,
    menuController.update,
    Middleware.Response.success('update')
  );

  /**
   * @apiGroup menu
   * @apiVersion 1.0.0
   * @apiName Delete
   * @api {delete} /v1/menu/:menuId
   * @apiDescription Remove a post
   * @apiUse menuRequest
   * @apiParam {String}   menuId
   * @apiPermission seller
   */
  router.delete(
    '/v1/menu/:menuId',
    Middleware.isAuthenticated,
    Middleware.isAdminOrSeller,
    menuController.findOne,
    menuController.remove,
    Middleware.Response.success('remove')
  );

  /**
   * @apiGroup menu
   * @apiVersion 1.0.0
   * @apiName Listing
   * @api {get} /v1/menu?:q
   * @apiDescription Get list menu
   * @apiParam {String}   [q]      search keywords
   * @apiPermission seller
   */
  router.get(
    '/v1/menu',
    Middleware.isAuthenticated,
    Middleware.isAdminOrSeller,
    menuController.list,
    Middleware.Response.success('list')
  );

  /**
   * @apiGroup menu
   * @apiVersion 1.0.0
   * @apiName Check by code
   * @api {post} /v1/menu/check
   * @apiDescription Get vailable by code. and return discount percentage if have
   * @apiParam {String} code
   * @apiParam {String} shopId
   * @apiPermission seller
   */
  router.post(
    '/v1/menu/check',
    menuController.check,
    Middleware.Response.success('check')
  );

  /**
   * @apiGroup menu
   * @apiVersion 1.0.0
   * @apiName Find One
   * @api {get} /v1/menu/check
   * @apiParam {String}   id  / menu id
   * @apiDescription Get menu detail
   * @apiPermission seller or admin
   */
  router.get(
    '/v1/menu/:menuId',
    Middleware.isAuthenticated,
    Middleware.isAdminOrSeller,
    menuController.findOne,
    Middleware.Response.success('menu')
  );
};
