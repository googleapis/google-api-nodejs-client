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

/* jshint maxlen: false */

'use strict';

var createAPIRequest = require('../../lib/apirequest');

/**
 * Enterprise Audit API
 *
 * @classdesc Lets you access user activities in your enterprise made through various applications.
 * @namespace audit
 * @version  v1
 * @variation v1
 * @this Audit
 * @param {object=} options Options for Audit
 */
function Audit(options) {

  var self = this;
  this._options = options || {};

  this.activities = {

    /**
     * audit.activities.list
     *
     * @desc Retrieves a list of activities for a specific customer and application.
     *
     * @alias audit.activities.list
     * @memberOf! audit(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.actorApplicationId - Application ID of the application which interacted on behalf of the user while performing the event.
     * @param  {string=} params.actorEmail - Email address of the user who performed the action.
     * @param  {string=} params.actorIpAddress - IP Address of host where the event was performed. Supports both IPv4 and IPv6 addresses.
     * @param  {string} params.applicationId - Application ID of the application on which the event was performed.
     * @param  {string=} params.caller - Type of the caller.
     * @param  {string=} params.continuationToken - Next page URL.
     * @param  {string} params.customerId - Represents the customer who is the owner of target object on which action was performed.
     * @param  {string=} params.endTime - Return events which occured at or before this time.
     * @param  {string=} params.eventName - Name of the event being queried.
     * @param  {integer=} params.maxResults - Number of activity records to be shown in each page.
     * @param  {string=} params.startTime - Return events which occured at or after this time.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/apps/reporting/audit/v1/{customerId}/{applicationId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['customerId', 'applicationId'],
        pathParams: ['applicationId', 'customerId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Audit object
 * @type Audit
 */
module.exports = Audit;