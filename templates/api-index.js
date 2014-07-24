/**
 * Copyright 2014 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

var path = require('path');

/**
 * Return a Function that requires an API from the disk
 * @param  {String} filename Filename of API
 * @return {function}        function used to require the API from disk
 * @private
 */
function requireAPI(filename) {
  return function(options) {
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
      var Endpoint = require(__dirname + '/' + filename + '/' + path.basename(version));
      var ep = new Endpoint(options);
      ep.google = this; // for drive.google.transporter
      return Object.freeze(ep); // create new & freeze
    }
    catch (e) {
      console.log(e);
      throw new Error('Error: Version \"' + version + '\" not found.');
    }
  }
}

{%- set apisNames = items|getAPIs|uniq -%}

/**
 * APIs to be exported
 * @type {Object}
 * @private
 */
var APIs = {
{% for api in apisNames -%}
  '{{api}}': requireAPI('{{api}}'){% if loop.last %}{% else %},{% endif %}
{% endfor -%}
};

/**
 * Exports the APIs
 * @type {Object}
 */
module.exports = APIs;

/**
 * @callback callback
 * @param {Error} err Error object if an error occurred.
 * @param {object} data Response data object.
 */
