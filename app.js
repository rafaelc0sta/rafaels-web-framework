var express     = require('express');
var pg          = require('pg');
var app         = express();

app.use('/static', express.static('static'));

var renderer    = require('./renderer');
var logger      = require('./logger');
var router      = require('./router');

const Config      = require('./config');
Config.importFromFile();

// pg.connect(Config.database_url, (err, client, done) => {
//   if (err) {
//     return console.error('error fetching client from pool', err);
//   }
//   client.query('SELECT * FROM test', [], function (errQuery, result) {
//     done();
//     if (errQuery) {
//       return console.log('error running query ' + errQuery);
//     }
//     console.log(result.rows[0].name);
//   });
// });

renderer.register(app);

app.use(logger.requestLogger);

router.route(app);
app.listen(Config.port);
