var migration = require('./migrations/00-base');

migration.executeMigration();


// var express     = require('express');
// var app         = express();
//
// app.use('/static', express.static('static'));
//
// var renderer    = require('./renderer');
// var logger      = require('./logger');
// var router      = require('./router');
//
// const Config      = require('./config');
// Config.importFromFile();
//
// const Base = require('./models/base');
//
// var base = new Base();
//
// renderer.register(app);
//
// app.use(logger.requestLogger);
//
// router.route(app);
// app.listen(Config.port);
