"use strict";
class Config {
  static importFromFile() {
    var file = require('./config.json');

    var properties = getConfigForEnvironment(file);

    for (var variable in properties) {
      if (properties.hasOwnProperty(variable)) {
        Config[variable] = properties[variable];
      }
    }
  }
}

function getConfigForEnvironment(file) {
  var environment = process.env.NODE_ENV;

  if (environment == null || environment == undefined) environment = "development";

  if (file[environment] != null) return file[environment];
  else return file['development'];
}

module.exports = Config;
