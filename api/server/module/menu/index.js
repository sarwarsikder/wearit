exports.model = {
  Menu: require('./models/menu')
};

exports.router = (router) => {
  require('./routes/menu.route')(router);
};

exports.services = {
  Coupon: require('./services/menu')
};
