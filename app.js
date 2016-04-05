var express = require('express');
var app = express();
var renderer = require('./renderer');

renderer.register(app);

app.get('/*', function(req, res) {
  res.render('index', {request: req});
});

app.listen(8080);
