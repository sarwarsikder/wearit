exports.stats = async (req, res, next) => {
  try {
    const queries = [{
      name: 'activated',
      query: { isActive: true }
    }, {
      name: 'deactivated',
      query: { isActive: false }
    }];

    const promises = queries.map(query => DB.User.count(query.query)
      .then(count => ({ count, name: query.name })));
    const data = await Promise.all(promises);
    const result = {};
    data.forEach((item) => {
      result[item.name] = item.count;
    });
    result.all = result.activated + result.deactivated;

    res.locals.stats = result;
    next();
  } catch (e) {
    next(e);
  }
};


exports.line_stats = async (req, res, next) => {
  const page = Math.max(0, req.query.page - 1) || 0; // using a zero-based page index for use with skip()
  const take = parseInt(req.query.take, 10) || 10;

  // var startDate = new Date(req.query.startDate);
  // var endDate = new Date(req.query.endDate);

  var startDate = new Date('2021-01-01');
  var date_ob = new Date();

  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();

  var endDate = new Date(year + "-" + month + "-" + date);

  console.log(startDate);
  console.log(endDate);

  try {

    var items = await DB.User.find()
      .collation({ locale: 'en' })
      .where('createddAt').gte('2021-01-0').lte('2021-03-23')
      .exec();

    var result = {};
    result = items;

    res.locals.stats = result;
    next();
  } catch (e) {
    next(e);
  }


};
