// can be read from a file
var apis = {
  drive: {
    versions: ['v2.1', 'v2']
  }
};

/**
 * Create reader
 * @param  {String} api_name name of api
 * @param  {Array} versions possible version of API
 * @return {[type]}          [description]
 */
function createReader(api_name, versions) {
  return function(version) {
    if (versions.indexOf(version) !== -1) {
      var Endpoint = require('./' + api_name + '/' + version);
      return Object.freeze(new Endpoint()); // freeze it (makes it immutable)
    }
    else {
      throw new Error('Version not available');
    }
  }
}

var to_export = {};

Object.keys(apis).forEach(function(api_name) {
  Object.defineProperty(to_export, api_name, {
    get: function() {
      return createReader(api_name, apis[api_name].versions);
    },
    enumerable: true
  });
});

/**
 * Export the apis
 * @type {Object}
 */
module.exports = to_export;
