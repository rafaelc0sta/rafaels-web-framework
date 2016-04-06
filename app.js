var express     = require('express');
var app         = express();
var renderer    = require('./renderer');
var logger      = require('./logger');

renderer.register(app);

app.use(logger.requestLogger);

app.get('/*', function(req, res) {
  res.render('index', {request: req});
});



app.listen(8080);
