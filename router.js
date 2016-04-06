var exports = module.exports = {};

exports.route = function (app) {
  app.get('/*', function(req, res) {
    res.render('sample', {request: req});
  });
}
