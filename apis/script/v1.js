/**
 * Copyright 2015 Google Inc. All Rights Reserved.
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

/* jshint maxlen: false */

'use strict';

var createAPIRequest = require('../../lib/apirequest');

/**
 * Google Apps Script Execution API
 *
 * @classdesc An API for executing Google Apps Script projects.
 * @namespace script
 * @version  v1
 * @variation v1
 * @this Script
 * @param {object=} options Options for Script
 */
function Script(options) {

  var self = this;
  this._options = options || {};

  this.scripts = {

    /**
     * script.scripts.run
     *
     * @desc Runs a function in an Apps Script project that has been deployed for use with the Apps Script Execution API. This method requires authorization with an OAuth 2.0 token that includes at least one of the scopes listed in the [Authentication](#authentication) section; script projects that do not require authorization cannot be executed through this API. To find the correct scopes to include in the authentication token, open the project in the script editor, then select **File > Project properties** and click the **Scopes** tab.
     *
     * @alias script.scripts.run
     * @memberOf! script(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.scriptId - The project key of the script to be executed. To find the project key, open the project in the script editor, then select **File > Project properties**.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    run: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://script.googleapis.com/v1/scripts/{scriptId}:run',
          method: 'POST'
        },
        params: params,
        requiredParams: ['scriptId'],
        pathParams: ['scriptId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Script object
 * @type Script
 */
module.exports = Script;