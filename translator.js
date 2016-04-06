var exports = module.exports = {};
var fs = require('fs');
var logger = require('./logger');
var config = require('./config');

var translationsCacheTTL = config.translationsCacheTTL;
var translationsCache = {};

exports.stringForRequest = function (key, req) {
  var lang = req.query.lang;

  if (lang == undefined || lang == null) {
    lang = 'default';
  }

  return exports.stringForLanguage(key, lang);
}

exports.stringForLanguage = function (key, lang) {
  var strings = parseStrings();

  var value = strings[lang][key];
  if (value == null || value == undefined) {
    logger.log(`Could not find value of string key '${key}' in language '${lang}'`, "WARNING");
    value = strings.default[key];
  }

  if (value == null || value == undefined) {
    logger.log(`Could not find value of string key '${key}'`, "ERROR");
    return "";
  }

  return value;
}

// Helper
exports.string = exports.stringForRequest;


// PRIVATE FUNCTIONS:

function parseStrings() {
  var now = (new Date).getTime();

  var cached = translationsCache.cached;
  var cacheLife = now - translationsCache.timestamp;

  var strings;

  if (cached == null || cached == undefined || cacheLife >= translationsCacheTTL) {
    strings = stringsFromFile();
    translationsCache.cached = strings;
    translationsCache.timestamp = now;
  } else {
    strings = cached;
  }

  return strings;
}

function stringsFromFile() {
  return JSON.parse(fs.readFileSync("./strings/strings.json"));
}
