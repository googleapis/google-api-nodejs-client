var DefaultTransporter = require('../lib/transporters');
var transporter = new DefaultTransporter();
var swig = require('swig');

swig.setDefaults({ loader: swig.loaders.fs(__dirname + '/../templates')});

var BASE_URL = 'https://www.googleapis.com';

function buildurl(input) {
  return ('\'' + BASE_URL + input + '\'')
    .replace(/{/g, '\' + query.')
    .replace(new RegExp('}\'$', 'g'), '')
    .replace(new RegExp('}', 'g'), ' + \'');
}

/**
 * Disable auto-escaping its output
 * @type {Boolean}
 */
buildurl.safe = true;

swig.setFilter('buildurl', buildurl);

var fs = require('fs');
var mkdirp = require('mkdirp');
var path = require('path');
var beautify = require('js-beautify').js_beautify;

var DISCOVERY_URL = 'https://www.googleapis.com/discovery/v1/apis/';
var DISCOVERY_TYPE = 'rest';
var API_TEMPLATE = './templates/api-endpoint.js';
var API_INDEX_TEMPLATE = './templates/api-index.js';
var API_INDEX = './apis/index.js';

var BEAUTIFY_OPTIONS = {
  'indent_size': 2,
  'indent_char': ' ',
  'indent_level': 0,
  'indent_with_tabs': false,
  'preserve_newlines': true,
  'max_preserve_newlines': 2,
  'jslint_happy': false,
  'brace_style': 'collapse',
  'keep_array_indentation': false,
  'keep_function_indentation': false,
  'space_before_conditional': true,
  'break_chained_methods': false,
  'eval_code': false,
  'unescape_strings': false,
  'wrap_line_length': 0
};

function Generator() {

}

/**
 * Generate API file given template and discovery URL
 * @param  {String} template          file name of template file
 * @param  {String} api_discovery_url URL of discovery doc for API
 */
Generator.prototype.generateAPI = function(template, api_discovery_url) {
  transporter.request({
    uri: api_discovery_url,
    headers: {
      'X-User-Ip': '0.0.0.0'
    }
  }, function(err, resp) {
    var contents = beautify(swig.render(template, { locals: resp }),
      BEAUTIFY_OPTIONS);

    var export_filename = './apis/' + resp.name + '/' + resp.version + '.js';

    mkdirp(path.dirname(export_filename), function(err) {
      if (err) throw err;
      fs.writeFile(export_filename, contents, function(err) {
        if (err) throw err;
        console.log('Wrote ' + export_filename);
      });
    });
  });
};

/**
 * Generate index file
 */
Generator.prototype.generateIndex = function() {
  /**
   * Copy index template to apis
   */
  fs.createReadStream(API_INDEX_TEMPLATE).pipe(fs.createWriteStream(API_INDEX));
};

var gen = new Generator();

fs.readFile(API_TEMPLATE, { encoding: 'utf8' }, function(err, template) {
  transporter.request({
    uri: DISCOVERY_URL,
    headers: {
      'X-User-Ip': '0.0.0.0'
    }
  }, function(err, resp) {
    var apis = resp.items;
    for (var i in apis) {
      gen.generateAPI(template, apis[i].discoveryRestUrl);
    }
  });
});

gen.generateIndex();
