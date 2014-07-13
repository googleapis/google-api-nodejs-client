var to_export = {};

var path = require('path');
var fs = require('fs');
var files = fs.readdirSync(__dirname);

var auth = function(authObject) {
  if (typeof authObject === 'string') {
    delete this.auth.authClient;
    this.auth.apiKey = authObject;
  }
  else if (authObject && typeof authObject === 'object') {
    delete this.auth.apiKey;
    this.auth.authClient = authObject;
  }
  else {
    delete this.auth.apiKey;
    delete this.auth.authClient;
  }
  return this;
};

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
            options = { version: version };
          }
          else if (type === 'object') {
            version = options.version;
          }
          else {
            throw new Error('Argument error: Accepts only string or object');
          }
          try {
            var Endpoint = require('./' + filename + '/' +
                path.basename(version));
            var ep = new Endpoint(options);
            ep.auth = auth.bind(ep);
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
