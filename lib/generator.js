// Copyright 2014-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var DefaultTransporter = require('../lib/transporters');
var async = require('async');
var swig = require('swig');
var beautify = require('js-beautify').js_beautify;
var path = require('path');
var mkdirp = require('mkdirp');
var fs = require('fs');
var url = require('url');
var util = require('util');
var createAPIRequest = require('./apirequest');
var argv = require('minimist')(process.argv.slice(2));
var args = argv._;

var DISCOVERY_URL = argv['discovery-url'] ? argv['discovery-url'] : (
  args.length ? args[0] : 'https://www.googleapis.com/discovery/v1/apis/'
);

var API_TEMPLATE = './templates/api-endpoint.js';
var BEAUTIFY_OPTIONS = {
  'indent_size': 2,
  'indent_char': ' ',
  'eol': '\n',
  'indent_level': 0,
  'indent_with_tabs': false,
  'preserve_newlines': true,
  'max_preserve_newlines': 2,
  'jslint_happy': false,
  'space_after_anon_function': true,
  'brace_style': 'collapse',
  'keep_array_indentation': false,
  'keep_function_indentation': true,
  'space_before_conditional': true,
  'break_chained_methods': false,
  'eval_code': false,
  'unescape_strings': false,
  'wrap_line_length': 0,
  'wrap_attributes': 'auto',
  'wrap_attributes_indent_size': 4,
  'end_with_newline': true
};
var RESERVED_PARAMS = ['resource', 'media', 'auth'];
var templateContents = fs.readFileSync(API_TEMPLATE, { encoding: 'utf8' });
var transporter = new DefaultTransporter();

/**
 * Build a string used to create a URL from the discovery doc provided URL.
 * @param  {String} input URL to build from
 * @return {String}       Resulting built URL
 */
function buildurl (input) {
  return ('\'' + input + '\'')
    // No * symbols
    .replace(/\*/g, '')
    // No + symbols
    .replace(/\+/g, '')
    // replace double slashes with single slash (except in https://)
    .replace(/([^:]\/)\/+/g, '$1')
    // No {/ symbols
    .replace(/\{\//g, '/{');
}

/**
 * A multi-line string is turned into one line
 * @param  {string} str String to process
 * @return {string}     Single line string processed
 */
function oneLine (str) {
  return str.replace(/\n/g, ' ');
}

/**
 * Clean a string of comment tags
 * @param  {string} str String to process
 * @return {string}     Single line string processed
 */
function cleanComments (str) {
  // Convert /* into /x and */ into x/
  return str.replace(/\*\//g, 'x/').replace(/\/\*/g, '\/x');
}

/**
 * Returns the list of names of APIS
 * @param  {object} items Object of api endpoints
 * @return {array}        Array of api names
 */
function getAPIs (items) {
  var apis = [];
  for (var i in items) {
    apis.push(items[i].name);
  }
  return apis;
}

function getPathParams (params) {
  var pathParams = [];
  if (typeof params !== 'object') {
    params = {};
  }
  Object.keys(params).forEach(function (key) {
    if (params[key].location === 'path') {
      pathParams.push(key);
    }
  });
  return pathParams;
}

function getSafeParamName (param) {
  if (RESERVED_PARAMS.indexOf(param) !== -1) {
    return param + '_';
  }
  return param;
}

/**
 * Disable auto-escaping its output
 * @type {Boolean}
 */
buildurl.safe = true;
swig.setFilter('buildurl', buildurl);
swig.setFilter('getAPIs', getAPIs);
swig.setFilter('oneLine', oneLine);
swig.setFilter('cleanComments', cleanComments);
swig.setFilter('getPathParams', getPathParams);
swig.setFilter('getSafeParamName', getSafeParamName);
swig.setDefaults({ loader: swig.loaders.fs(path.join(__dirname, '..', 'templates')) });

/**
 * Handle error object with callback
 * @param  {Error}   err      Error object to return in callback
 * @param  {Function=} callback Optional callback function
 */
function handleError (err, callback) {
  if (callback && typeof callback === 'function') {
    callback(err, null);
  }
}

/**
 * Given a method schema, add a method to a target.
 *
 * @param {object} target The target to which to add the method.
 * @param {object} schema The top-level schema that contains the rootUrl, etc.
 * @param {object} method The method schema from which to generate the method.
 * @param {object} context The context to add to the method.
 */
function makeMethod (schema, method, context) {
  return function (params, callback) {
    var url = buildurl(schema.rootUrl + schema.servicePath + method.path);

    var parameters = {
      options: {
        url: url.substring(1, url.length - 1),
        method: method.httpMethod
      },
      params: params,
      requiredParams: method.parameterOrder || [],
      pathParams: getPathParams(method.parameters),
      context: context
    };

    if (method.mediaUpload && method.mediaUpload.protocols &&
      method.mediaUpload.protocols.simple &&
      method.mediaUpload.protocols.simple.path) {
      var mediaUrl = buildurl(
        schema.rootUrl +
        method.mediaUpload.protocols.simple.path
      );
      parameters.mediaUrl = mediaUrl.substring(1, mediaUrl.length - 1);
    }

    return createAPIRequest(parameters, callback);
  };
}

/**
 * Given a schema, add methods to a target.
 *
 * @param {object} target The target to which to apply the methods.
 * @param {object} rootSchema The top-level schema, so we don't lose track of it
 * during recursion.
 * @param {object} schema The current schema from which to extract methods.
 * @param {object} context The context to add to each method.
 */
function applyMethodsFromSchema (target, rootSchema, schema, context) {
  if (schema.methods) {
    for (var name in schema.methods) {
      var method = schema.methods[name];
      target[name] = makeMethod(rootSchema, method, context);
    }
  }
}

/**
 * Given a schema, add methods and resources to a target.
 *
 * @param {object} target The target to which to apply the schema.
 * @param {object} rootSchema The top-level schema, so we don't lose track of it
 * during recursion.
 * @param {object} schema The current schema from which to extract methods and
 * resources.
 * @param {object} context The context to add to each method.
 */
function applySchema (target, rootSchema, schema, context) {
  applyMethodsFromSchema(target, rootSchema, schema, context);

  if (schema.resources) {
    for (var resourceName in schema.resources) {
      var resource = schema.resources[resourceName];
      if (!target[resourceName]) {
        target[resourceName] = {};
      }
      applySchema(target[resourceName], rootSchema, resource, context);
    }
  }
}

/**
 * Generate and Endpoint from an endpoint schema object.
 *
 * @param {object} schema The schema from which to generate the Endpoint.
 * @return Function The Endpoint.
 */
function makeEndpoint (schema) {
  var Endpoint = function (options) {
    var self = this;
    self._options = options || {};

    applySchema(self, schema, schema, self);
  };
  return Endpoint;
}

/**
 * Generator for generating API endpoints
 * @param {object} options Options for generation
 * @this {Generator}
 */
function Generator (options) {
  this.options = options || {};
}

/**
 * Log output of generator
 * Works just like console.log
 */
Generator.prototype.log = function () {
  if (this.options && this.options.debug) {
    console.log.apply(this, arguments);
  }
};

/**
 * Generate all APIs and write to files.
 *
 * @param {function} callback Callback when all APIs have been generated
 * @throws {Error} If there is an error generating any of the APIs
 */
Generator.prototype.generateAllAPIs = function (callback) {
  var that = this;
  var headers = this.options.includePrivate ? {} : { 'X-User-Ip': '0.0.0.0' };
  transporter.request({
    uri: DISCOVERY_URL,
    headers: headers
  }, function (err, resp) {
    if (err) {
      return handleError(err, callback);
    }
    var apis = resp.items;

    async.each(
      apis,
      function (api, next) {
        that.log('Generating API for %s...', api.id);
        that.generateAPI(api.discoveryRestUrl, next);
      },
      callback
    );
  });
};

/**
 * Generate API file given discovery URL
 * @param  {String} apiDiscoveryUrl URL or filename of discovery doc for API
 * @param {function} callback Callback when successful write of API
 * @throws {Error} If there is an error generating the API.
 */
Generator.prototype.generateAPI = function (apiDiscoveryUrl, callback) {
  function _generate (err, resp) {
    if (err) {
      return handleError(err, callback);
    }
    var result = swig.render(templateContents, { locals: resp });
    var contents = beautify(result, BEAUTIFY_OPTIONS);

    // e.g. apis/drive/v2.js
    var exportFilename = path.join('apis', resp.name, resp.version + '.js');
    mkdirp(path.dirname(exportFilename), function (err) {
      if (err) {
        return handleError(err, callback);
      }
      fs.writeFile(exportFilename, contents, function (err) {
        if (err) {
          return handleError(err, callback);
        } else if (callback && typeof callback === 'function') {
          callback(null, exportFilename);
          return;
        }
      });
    });
  }

  var parts = url.parse(apiDiscoveryUrl);

  if (apiDiscoveryUrl && !parts.protocol) {
    this.log('Reading from file ' + apiDiscoveryUrl);
    try {
      return _generate(null, JSON.parse(fs.readFileSync(apiDiscoveryUrl, {
        encoding: 'utf-8'
      })));
    } catch (err) {
      return handleError(err, callback);
    }
  } else {
    this.log('Requesting ' + apiDiscoveryUrl);
    transporter.request({
      uri: apiDiscoveryUrl
    }, _generate);
  }
};

/**
 * Generate all APIs and return as in-memory object.
 *
 * @param {function} callback Callback when all APIs have been generated
 * @throws {Error} If there is an error generating any of the APIs
 */
Generator.prototype.discoverAllAPIs = function (discoveryUrl, callback) {
  var self = this;
  var headers = this.options.includePrivate ? {} : { 'X-User-Ip': '0.0.0.0' };
  transporter.request({
    uri: discoveryUrl,
    headers: headers
  }, function (err, resp) {
    if (err) {
      return handleError(err, callback);
    }

    async.parallel(resp.items.map(function (api) {
      return function (cb) {
        self.discoverAPI(api.discoveryRestUrl, function (err, _api) {
          if (err) {
            return cb(err);
          }
          api.api = _api;
          cb(null, api);
        });
      };
    }), function (err, apis) {
      if (err) {
        return callback(err);
      }

      var versionIndex = {};
      var apisIndex = {};

      apis.forEach(function (api) {
        if (!apisIndex[api.name]) {
          versionIndex[api.name] = {};
          apisIndex[api.name] = function (options) {
            var type = typeof options;
            var version;
            if (type === 'string') {
              version = options;
              options = {};
            } else if (type === 'object') {
              version = options.version;
              delete options.version;
            } else {
              throw new Error('Argument error: Accepts only string or object');
            }
            try {
              var Endpoint = versionIndex[api.name][version];
              var ep = new Endpoint(options);
              ep.google = this; // for drive.google.transporter
              return Object.freeze(ep); // create new & freeze
            } catch (e) {
              throw new Error(util.format('Unable to load endpoint %s("%s"): %s',
                api.name, version, e.message));
            }
          };
        }
        versionIndex[api.name][api.version] = api.api;
      });

      return callback(null, apisIndex);
    });
  });
};

/**
 * Generate API file given discovery URL
 * @param  {String} apiDiscoveryUrl URL or filename of discovery doc for API
 * @param {function} callback Callback when successful write of API
 * @throws {Error} If there is an error generating the API.
 */
Generator.prototype.discoverAPI = function (apiDiscoveryUrl, callback) {
  function _generate (err, resp) {
    if (err) {
      return handleError(err, callback);
    }
    return callback(null, makeEndpoint(resp));
  }

  var parts = url.parse(apiDiscoveryUrl);

  if (apiDiscoveryUrl && !parts.protocol) {
    this.log('Reading from file ' + apiDiscoveryUrl);
    try {
      return fs.readFile(apiDiscoveryUrl, {
        encoding: 'utf8'
      }, function (err, file) {
        _generate(err, JSON.parse(file));
      });
    } catch (err) {
      return handleError(err, callback);
    }
  } else {
    this.log('Requesting ' + apiDiscoveryUrl);
    transporter.request({
      uri: apiDiscoveryUrl
    }, _generate);
  }
};

/**
 * Export the Generator object
 * @type {Generator}
 */
module.exports = Generator;
