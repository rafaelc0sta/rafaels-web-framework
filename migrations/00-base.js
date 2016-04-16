var pg      = require('pg');
var Model   = require('../models/base');
var Config  = require('../config.js');
Config.importFromFile();

var exports = module.exports = {};
var fields = {};

function getDBCurrentFields() {
  pg.connect(Config.database_url, (err, client, done) => {
    if (err) {
      return console.error('error fetching client from pool', err);
    }
    console.log("query");

    client.query('SELECT column_name, data_type FROM information_schema.columns WHERE TABLE_NAME = \'test\'', [], function (errQuery, result) {
      done();
      if (errQuery) {
        return console.log('error running query ' + errQuery);
      }

      for (entry of result.rows) {
        fields[entry.column_name] = entry.data_type;
      }
    });

  });
}

exports.executeMigration = function() {
  debugger;
  getDBCurrentFields();
}
