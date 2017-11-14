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

import {
  createAPIRequest
} from '../../lib/apirequest';

/**
 * Firebase Remote Config API
 *
 * Firebase Remote Config API allows the 3P clients to manage Remote Config conditions and parameters for Firebase applications.
 *
 * @example
 * const google = require('googleapis');
 * const firebaseremoteconfig = google.firebaseremoteconfig('v1');
 *
 * @namespace firebaseremoteconfig
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Firebaseremoteconfig
 */
function Firebaseremoteconfig(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.projects = {

    /**
     * firebaseremoteconfig.projects.getRemoteConfig
     *
     * @desc Get the latest version Remote Configuration for a project. Returns the RemoteConfig as the payload, and also the eTag as a response header.
     *
     * @alias firebaseremoteconfig.projects.getRemoteConfig
     * @memberOf! firebaseremoteconfig(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project The GMP project identifier. Required. See note at the beginning of this file regarding project ids.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getRemoteConfig: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://firebaseremoteconfig.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{project}/remoteConfig').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * firebaseremoteconfig.projects.updateRemoteConfig
     *
     * @desc Update a RemoteConfig. We treat this as an always-existing resource (when it is not found in our data store, we treat it as version 0, a template with zero conditions and zero parameters). Hence there are no Create or Delete operations. Returns the updated template when successful (and the updated eTag as a response header), or an error if things go wrong. Possible error messages: * VALIDATION_ERROR (HTTP status 400) with additional details if the template being passed in can not be validated. * AUTHENTICATION_ERROR (HTTP status 401) if the request can not be authenticate (e.g. no access token, or invalid access token). * AUTHORIZATION_ERROR (HTTP status 403) if the request can not be authorized (e.g. the user has no access to the specified project id). * VERSION_MISMATCH (HTTP status 412) when trying to update when the expected eTag (passed in via the "If-match" header) is not specified, or is specified but does does not match the current eTag. * Internal error (HTTP status 500) for Database problems or other internal errors.
     *
     * @alias firebaseremoteconfig.projects.updateRemoteConfig
     * @memberOf! firebaseremoteconfig(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project The GMP project identifier. Required. See note at the beginning of this file regarding project ids.
     * @param {boolean=} params.validateOnly Optional. Defaults to <code>false</code> (UpdateRemoteConfig call should update the backend if there are no validation/interal errors). May be set to <code>true</code> to indicate that, should no validation errors occur, the call should return a "200 OK" instead of performing the update. Note that other error messages (500 Internal Error, 412 Version Mismatch, etc) may still result after flipping to <code>false</code>, even if getting a "200 OK" when calling with <code>true</code>.
     * @param {firebaseremoteconfig(v1).RemoteConfig} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateRemoteConfig: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://firebaseremoteconfig.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{project}/remoteConfig').replace(/([^:]\/)\/+/g, '$1'),
          method: 'PUT'
        }, options),
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * @typedef RemoteConfig
 * @memberOf! firebaseremoteconfig(v1)
 * @type object
* @property {firebaseremoteconfig(v1).RemoteConfigCondition[]} conditions The list of named conditions. The order *does* affect the semantics.
The condition_name values of these entries must be unique.

The resolved value of a config parameter P is determined as follow:
* Let Y be the set of values from the submap of P that refer to conditions
  that evaluate to &lt;code&gt;true&lt;/code&gt;.
* If Y is non empty, the value is taken from the specific submap in Y whose
  condition_name is the earliest in this condition list.
* Else, if P has a default value option (condition_name is empty) then
  the value is taken from that option.
* Else, parameter P has no value and is omitted from the config result.

Example: parameter key &quot;p1&quot;, default value &quot;v1&quot;, submap specified as
{&quot;c1&quot;: v2, &quot;c2&quot;: v3} where &quot;c1&quot; and &quot;c2&quot; are names of conditions in the
condition list (where &quot;c1&quot; in this example appears before &quot;c2&quot;).  The
value of p1 would be v2 as long as c1 is true.  Otherwise, if c2 is true,
p1 would evaluate to v3, and if c1 and c2 are both false, p1 would evaluate
to v1.  If no default value was specified, and c1 and c2 were both false,
no value for p1 would be generated.
* @property {object} parameters Map of parameter keys to their optional default values and optional submap
of (condition name : value). Order doesn&#39;t affect semantics, and so is
sorted by the server. The &#39;key&#39; values of the params must be unique.
*/

/**
 * @typedef RemoteConfigCondition
 * @memberOf! firebaseremoteconfig(v1)
 * @type object
* @property {string} description Optional.
A description for this Condition. Length must be less than or equal to
100 characters (or more precisely, unicode code points, which is defined in
java/com/google/wireless/android/config/ConstsExporter.java).
A description may contain any Unicode characters
* @property {string} expression Required.
* @property {string} name Required.
A non empty and unique name of this condition.
* @property {string} tagColor Optional.
The display (tag) color of this condition. This serves as part of a tag
(in the future, we may add tag text as well as tag color, but that is not
yet implemented in the UI).
This value has no affect on the semantics of the delivered config and it
is ignored by the backend, except for passing it through write/read
requests.
Not having this value or having the &quot;CONDITION_DISPLAY_COLOR_UNSPECIFIED&quot;
value (0) have the same meaning:  Let the UI choose any valid color when
displaying the condition.
*/

/**
 * @typedef RemoteConfigParameter
 * @memberOf! firebaseremoteconfig(v1)
 * @type object
* @property {object} conditionalValues Optional - a map of (condition_name, value). The condition_name of the
highest priority (the one listed first in the conditions array) determines
the value of this parameter.
* @property {firebaseremoteconfig(v1).RemoteConfigParameterValue} defaultValue Optional - value to set the parameter to, when none of the named conditions
evaluate to &lt;code&gt;true&lt;/code&gt;.
* @property {string} description Optional.
A description for this Parameter. Length must be less than or equal to
100 characters (or more precisely, unicode code points, which is defined in
java/com/google/wireless/android/config/ConstsExporter.java).
A description may contain any Unicode characters
*/

/**
 * @typedef RemoteConfigParameterValue
 * @memberOf! firebaseremoteconfig(v1)
 * @type object
 * @property {boolean} useInAppDefault if true, omit the parameter from the map of fetched parameter values
 * @property {string} value the string to set the parameter to
 */
export = Firebaseremoteconfig;
