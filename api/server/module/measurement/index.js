exports.model = {
  Form: require("./models/form"),
};

exports.router = (router) => {
  require("./routes/measurement.route")(router);
};
