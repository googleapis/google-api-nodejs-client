var to_export = {};

var path = require('path');
var fs = require('fs');
var files = fs.readdirSync('./apis');

files.forEach(function(filename) {
  var stat = fs.statSync('./apis/' + filename);
  if (stat.isDirectory()) {
    Object.defineProperty(to_export, filename, {
      get: function() {
        return function(version) {
          var Endpoint = require('./' + filename + '/' + path.basename(version));
          return Object.freeze(new Endpoint()); // create a new one and freeze
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
