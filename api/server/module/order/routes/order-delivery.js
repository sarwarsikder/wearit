const orderDeliveryController = require('../controllers/order-delivery.controller');

module.exports = (router) => {

  /**
   * @apiGroup Shop Order
   * @apiVersion 1.0.0
   * @apiName Get download invoice
   * @api {get} /v1/orders/details/:orderDetailId/download/invoice
   * @apiDescription Download invoice content. Add access_token to query string
   * @apiUse authRequest
   * @apiPermission user
   */
  router.get(
    '/v1/orders/count/',
    Middleware.isAuthenticated,
    orderDeliveryController.count,
    Middleware.Response.success('count')
  );

  router.get(
    '/v1/delivery/orders/:orderId',
    Middleware.isAuthenticated,
    orderDeliveryController.details,
    Middleware.Response.success('details')
  );

  /**
   * @apiGroup Order
   * @apiVersion 1.0.0
   * @api {get} /v1/orders/:status Get details of the order byu status
   * @apiDescription Get details of the order
   * @apiUse authRequest
   * @apiPermission user
   */
   router.get(
    '/v1/orders/details/status/:status/:page/:limit',
    Middleware.isAuthenticated,
    orderDeliveryController.detailsByStatus,
    Middleware.Response.success('details')
  );
};
