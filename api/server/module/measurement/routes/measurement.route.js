const formController = require("../controllers/form.controller");

module.exports = (router) => {
  router.get(
    "/v1/measurement",
    Middleware.loadUser,
    formController.get,
    Middleware.Response.success("forms")
  );

  router.post(
    "/v1/measurement",
    Middleware.loadUser,
    formController.create,
    Middleware.Response.success("forms")
  );

  router.get(
    "/v1/measurement/:id",
    Middleware.loadUser,
    formController.getOne,
    Middleware.Response.success("form")
  );
};
