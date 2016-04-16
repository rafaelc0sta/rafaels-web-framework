"use strict";
var Config = require('../config.js');
Config.importFromFile();

class Item {

  constructor(tableName) {
    this._tableName = tableName;
  }

  save(callback) {
    if (this._tableName == null || this._tableName == undefined) {
      callback(new Error('No table name defined'), null);
    } else {
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
    }
  }
}

module.exports = Base;
