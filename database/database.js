"use strict";

class Database {
  constructor(url) {
    this._connectionURL = url;
  }

  fetchClient(callback) {
    callback(new Error('Default implementation called'), null);
  }
}

module.exports = Database;
