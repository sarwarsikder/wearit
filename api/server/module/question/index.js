const questionController = require('./controllers/question.controller');

exports.model = {
  Question: require('./models/question')
};

exports.router = (router) => {
  /**
   * @apiDefine questionRequest
   * @apiParam {String}   question       question
   * @apiParam {String}   [answer]
   * @apiParam {Object}   [userId]
   * @apiParam {Object}   [productId]
   * @apiParam {String}   [replayedBy]
   */

  /**
   * @apiGroup Question
   * @apiVersion 1.0.0
   * @api {post} /v1/questions  Create new question
   * @apiDescription Create new question
   * @apiUse authRequest
   * @apiUse questionRequest
   * @apiPermission superadmin
   */
  router.post(
    '/v1/questions',
    Middleware.hasRole('admin'),
    questionController.create,
    Middleware.Response.success('question')
  );

  /**
   * @apiGroup Question
   * @apiVersion 1.0.0
   * @api {put} /v1/questions/:id  Update a question
   * @apiDescription Update a question
   * @apiUse authRequest
   * @apiParam {String}   id        question id
   * @apiUse questionRequest
   * @apiPermission superadmin
   */
  router.put(
    '/v1/questions/:id',
    Middleware.hasRole('admin'),
    questionController.findOne,
    questionController.update,
    Middleware.Response.success('update')
  );

  /**
   * @apiGroup Question
   * @apiVersion 1.0.0
   * @api {delete} /v1/questions/:id Remove a question
   * @apiDescription Remove a question
   * @apiUse questionRequest
   * @apiParam {String}   id        question id
   * @apiPermission superadmin
   */
  router.delete(
    '/v1/questions/:id',
    Middleware.hasRole('admin'),
    questionController.findOne,
    questionController.remove,
    Middleware.Response.success('remove')
  );

  /**
   * @apiGroup Question
   * @apiVersion 1.0.0
   * @api {get} /v1/questions?:title&:location&page&take  Get list questions
   * @apiDescription Get list questions
   * @apiParam {String}   [question] title of question
   * @apiPermission all
   */
  router.get(
    '/v1/questions',
    questionController.list,
    Middleware.Response.success('questionList')
  );

  /**
   * @apiGroup Question
   * @apiVersion 1.0.0
   * @api {get} /v1/questions/random?:title&:locatione&take  Get random question
   * @apiDescription Get random question
   * @apiParam {String}   [title] title of question
   * @apiParam {Number}   [take] num of item should return
   * @apiPermission all
   */
  router.get(
    '/v1/questions/random',
    questionController.random,
    Middleware.Response.success('questionList')
  );

  /**
   * @apiGroup Question
   * @apiVersion 1.0.0
   * @api {get} /v1/questions/:id Get question details
   * @apiDescription Get question details
   * @apiParam {String}   id        question id
   * @apiPermission all
   */
  router.get(
    '/v1/questions/:id',
    questionController.findOne,
    Middleware.Response.success('question')
  );
};
