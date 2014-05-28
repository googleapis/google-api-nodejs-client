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
var API_INDEX_TEMPLATE = './templates/api-index.js';

fs.readFile(API_TEMPLATE, { encoding: 'utf8' }, function(err, template) {
  transporter.request({
    uri: DISCOVERY_URL,
    headers: {
      'X-User-Ip': '0.0.0.0'
    }
  }, function(err, resp) {
    var apis = resp.items;
    for (var i in apis) {
      generateAPITemplate(template, apis[i].discoveryRestUrl);
    }
  });
});

fs.readFile(API_INDEX_TEMPLATE, { encoding: 'utf8' }, function(err, template) {
  var filename = './apis/index.js';
  mkdirp(path.dirname(filename), function(err) {
    if (err) throw err;
    var contents = swig.render(template, { locals: {} });
    fs.writeFile(filename, contents, function(err) {
      if (err) throw err;
      console.log('Wrote ' + filename);
    });
  });
});

function generateAPITemplate(template, api_discovery_url) {
  transporter.request({
    uri: api_discovery_url
  }, function(err, resp) {
    var contents = swig.render(template, { locals: resp });

    var export_filename = './apis/' + resp.name + '/' + resp.version + '.js';

    mkdirp(path.dirname(export_filename), function(err) {
      if (err) throw err;
      fs.writeFile(export_filename, contents, function(err) {
        if (err) throw err;
        console.log('Wrote ' + export_filename);
      });
    });
  });
}
