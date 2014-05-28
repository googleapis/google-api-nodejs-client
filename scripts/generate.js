var DefaultTransporter = require('../lib/transporters');
var transporter = new DefaultTransporter();
var ejs = require('ejs');
var swig = require('swig');
var fs = require('fs');
var mkdirp = require('mkdirp');
var path = require('path');
var beautify = require('js-beautify').js_beautify;

var DISCOVERY_URL = 'https://www.googleapis.com/discovery/v1/apis/';
var DISCOVERY_TYPE = 'rest';
var API_TEMPLATE = './templates/api-endpoint.js';

fs.readFile(API_TEMPLATE, { encoding: 'utf8' }, function(err, template) {
  transporter.request({
    uri: 'https://www.googleapis.com/discovery/v1/apis/drive/v2/rest'
  }, function(err, resp) {
    var contents = swig.render(template, {locals: resp });

    var export_filename = './apis/' + resp.name + '/' + resp.version + '.js';

    mkdirp(path.dirname(export_filename), function(err) {
      if (err) throw err;
      fs.writeFile(export_filename, contents, function(err) {
        if (err) throw err;
        console.log('Wrote ' + export_filename);
      });
    });
  });
});
