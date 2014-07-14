'use strict';

var to_export = {};

var path = require('path');
var fs = require('fs');
var files = fs.readdirSync(__dirname);

files.forEach(function(filename) {
  var stat = fs.statSync(path.join(__dirname, filename));
  if (stat.isDirectory()) {
    Object.defineProperty(to_export, filename, {
      get: function() {
        return function(options) {
          var type = typeof options;
          var version;
          if (type === 'string') {
            version = options;
            options = {};
          }
          else if (type === 'object') {
            version = options.version;
            delete options.version;
          }
          else {
            throw new Error('Argument error: Accepts only string or object');
          }
          try {
            var Endpoint = require('./' + filename + '/' +
                path.basename(version));
            var ep = new Endpoint(options);
            ep.google = this; // for drive.google.transporter
            return Object.freeze(ep); // create new & freeze
          }
          catch (e) {
            throw new Error('Error: Version \"' + version + '\" not found.');
          }
        };
      },
      enumerable: true
    });
  }
});

/**
 * Export the apis
 * @type {Object}
 */
module.exports = to_export;
