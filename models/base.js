"use strict";
var Config = require('../config.js');
Config.importFromFile();

class Base {

  constructor() {

  }

  static fields() {
    return {
      "id": "integer"
    }
  }

  static tableName() {
    return this.constructor.name;
  }

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

module.exports = Base;
