var exports = module.exports = {};
var fs = require("fs");
const vm = require('vm');

exports.register = function (app) {
  app.engine('ejs', function (filepath, options, callback) {
    var rendered = exports.render(filepath, options);
    callback(null, rendered);
  });

  app.set('views', './views');
  app.set('view engine', 'ejs');
}

exports.render = function (filename, options) {

  if (options == undefined) {
    options = {};
  }

  var templateFilename = 'default';
  if (options.template != undefined) {
    templateFilename = options.template;
  }

  var template = fs.readFileSync('template/' + templateFilename + '.ejs', "utf8");
  var view = fs.readFileSync(filename, "utf8");

  var render = template.replace("<% yield %>", view);

  if (!vm.isContext(options)) {
    vm.createContext(options);
  }

  while (render.indexOf('<%') != -1 && render.indexOf('%>') != -1) {
    var replacee = render.substring(render.indexOf('<%'), render.indexOf('%>') + 2);
    var code = replacee.replace("<%", "").replace("%>", "");
    var replacer = vm.runInContext(code, options);
    render = render.replace(replacee, replacer);
  }

  return render;
}
