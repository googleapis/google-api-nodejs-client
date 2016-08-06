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
 * Google Service Control API
 *
 * The Service Control API
 *
 * @example
 * var google = require('googleapis');
 * var servicecontrol = google.servicecontrol('v1');
 *
 * @namespace servicecontrol
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Servicecontrol
 */
function Servicecontrol(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.services = {

    /**
     * servicecontrol.services.check
     *
     * @desc Checks an operation with Google Service Control to decide whether the given operation should proceed. It should be called before the operation is executed.  This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Google Cloud IAM](https://cloud.google.com/iam).
     *
     * @alias servicecontrol.services.check
     * @memberOf! servicecontrol(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.serviceName The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`.  See google.api.Service for the definition of a service name.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    check: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://servicecontrol.googleapis.com/v1/services/{serviceName}:check',
          method: 'POST'
        },
        params: params,
        requiredParams: ['serviceName'],
        pathParams: ['serviceName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * servicecontrol.services.report
     *
     * @desc Reports operations to Google Service Control. It should be called after the operation is completed.  This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Google Cloud IAM](https://cloud.google.com/iam).
     *
     * @alias servicecontrol.services.report
     * @memberOf! servicecontrol(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.serviceName The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`.  See google.api.Service for the definition of a service name.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    report: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://servicecontrol.googleapis.com/v1/services/{serviceName}:report',
          method: 'POST'
        },
        params: params,
        requiredParams: ['serviceName'],
        pathParams: ['serviceName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

module.exports = Servicecontrol;
