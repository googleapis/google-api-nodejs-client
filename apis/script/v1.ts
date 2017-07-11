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

import createAPIRequest from '../../lib/apirequest';

/**
 * Google Apps Script Execution API
 *
 * Executes Google Apps Script projects.
 *
 * @example
 * const google = require('googleapis');
 * const script = google.script('v1');
 *
 * @namespace script
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Script
 */
function Script(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.scripts = {

    /**
     * script.scripts.run
     *
     * @desc Runs a function in an Apps Script project. The project must be deployed for use with the Apps Script Execution API.  This method requires authorization with an OAuth 2.0 token that includes at least one of the scopes listed in the [Authorization](#authorization) section; script projects that do not require authorization cannot be executed through this API. To find the correct scopes to include in the authentication token, open the project in the script editor, then select **File > Project properties** and click the **Scopes** tab.
     *
     * @alias script.scripts.run
     * @memberOf! script(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.scriptId The project key of the script to be executed. To find the project key, open the project in the script editor and select **File > Project properties**.
     * @param {script(v1).ExecutionRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    run: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://script.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/scripts/{scriptId}:run').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
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
 * @typedef JoinAsyncRequest
 * @memberOf! script(v1)
 * @type object
* @property {string} scriptId The script id which specifies the script which all processes in the names
field must be from.
* @property {string[]} names List of operation resource names that we want to join,
as returned from a call to RunAsync.
* @property {string} timeout Timeout for information retrieval in milliseconds.
*/
/**
 * @typedef ExecutionResponse
 * @memberOf! script(v1)
 * @type object
* @property {any} result The return value of the script function. The type matches the object type
returned in Apps Script. Functions called through the Execution API cannot
return Apps Script-specific objects (such as a `Document` or a `Calendar`);
they can only return primitive types such as a `string`, `number`, `array`,
`object`, or `boolean`.
*/
/**
 * @typedef Operation
 * @memberOf! script(v1)
 * @type object
 * @property {boolean} done This field is not used.
 * @property {object} response If the script function returns successfully, this field will contain an `ExecutionResponse` object with the function&#39;s return value as the object&#39;s `result` field.
 * @property {string} name This field is not used.
 * @property {script(v1).Status} error If a `run` call succeeds but the script function (or Apps Script itself) throws an exception, this field will contain a `Status` object. The `Status` object&#39;s `details` field will contain an array with a single `ExecutionError` object that provides information about the nature of the error.
 * @property {object} metadata This field is not used.
 */
/**
 * @typedef JoinAsyncResponse
 * @memberOf! script(v1)
 * @type object
* @property {object} results The return values for each script function, in a map of operation resource
names to the Operation containing the result of the process. The response
will contain either an error or the result of the script function.
*/
/**
 * @typedef ScriptStackTraceElement
 * @memberOf! script(v1)
 * @type object
 * @property {string} function The name of the function that failed.
 * @property {integer} lineNumber The line number where the script failed.
 */
/**
 * @typedef ExecutionError
 * @memberOf! script(v1)
 * @type object
* @property {script(v1).ScriptStackTraceElement[]} scriptStackTraceElements An array of objects that provide a stack trace through the script to show
where the execution failed, with the deepest call first.
* @property {string} errorType The error type, for example `TypeError` or `ReferenceError`. If the error
type is unavailable, this field is not included.
* @property {string} errorMessage The error message thrown by Apps Script, usually localized into the user&#39;s
language.
*/
/**
 * @typedef Status
 * @memberOf! script(v1)
 * @type object
 * @property {object[]} details An array that contains a single `ExecutionError` object that provides information about the nature of the error.
 * @property {integer} code The status code. For this API, this value will always be 3, corresponding to an INVALID_ARGUMENT error.
 * @property {string} message A developer-facing error message, which is in English. Any user-facing error message is localized and sent in the [`google.rpc.Status.details`](google.rpc.Status.details) field, or localized by the client.
 */
/**
 * @typedef ExecutionRequest
 * @memberOf! script(v1)
 * @type object
* @property {string} sessionState For Android add-ons only. An ID that represents the user&#39;s current session
in the Android app for Google Docs or Sheets, included as extra data in the
[`Intent`](https://developer.android.com/guide/components/intents-filters.html)
that launches the add-on. When an Android add-on is run with a session
state, it gains the privileges of a
[bound](https://developers.google.com/apps-script/guides/bound) script &amp;mdash;
that is, it can access information like the user&#39;s current cursor position
(in Docs) or selected cell (in Sheets). To retrieve the state, call
`Intent.getStringExtra(&quot;com.google.android.apps.docs.addons.SessionState&quot;)`.
Optional.
* @property {boolean} devMode If `true` and the user is an owner of the script, the script runs at the
most recently saved version rather than the version deployed for use with
the Execution API. Optional; default is `false`.
* @property {string} function The name of the function to execute in the given script. The name does not
include parentheses or parameters.
* @property {any[]} parameters The parameters to be passed to the function being executed. The object type
for each parameter should match the expected type in Apps Script.
Parameters cannot be Apps Script-specific object types (such as a
`Document` or a `Calendar`); they can only be primitive types such as
`string`, `number`, `array`, `object`, or `boolean`. Optional.
*/
export = Script;
