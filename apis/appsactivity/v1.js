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
 * Google Apps Activity API
 *
 * Provides a historical view of activity.
 *
 * @example
 * var google = require('googleapis');
 * var appsactivity = google.appsactivity('v1');
 *
 * @namespace appsactivity
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Appsactivity
 */
function Appsactivity(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.activities = {

    /**
     * appsactivity.activities.list
     *
     * @desc Returns a list of activities visible to the current logged in user. Visible activities are determined by the visiblity settings of the object that was acted on, e.g. Drive files a user can see. An activity is a record of past events. Multiple events may be merged if they are similar. A request is scoped to activities from a given Google service using the source parameter.
     *
     * @alias appsactivity.activities.list
     * @memberOf! appsactivity(v1)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.drive.ancestorId Identifies the Drive folder containing the items for which to return activities.
     * @param {string=} params.drive.fileId Identifies the Drive item to return activities for.
     * @param {string=} params.groupingStrategy Indicates the strategy to use when grouping singleEvents items in the associated combinedEvent object.
     * @param {integer=} params.pageSize The maximum number of events to return on a page. The response includes a continuation token if there are more events.
     * @param {string=} params.pageToken A token to retrieve a specific page of results.
     * @param {string=} params.source The Google service from which to return activities. Possible values of source are:  - drive.google.com
     * @param {string=} params.userId Indicates the user to return activity for. Use the special value me to indicate the currently authenticated user.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/appsactivity/v1/activities',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

module.exports = Appsactivity;
