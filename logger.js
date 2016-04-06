var exports = module.exports = {};

exports.requestLogger = function (req, res, next) {
  if (req.originalUrl.indexOf("/static") != -1) return;
  exports.log(`Received request from '${req.ip}' to page '${req.originalUrl}'`, "INFO");
  next();
}

exports.log = function (message, level) {
  if (level == undefined) {
    level = "INFO";
  }
  console.log(`[${level}] ${message}`);
}
