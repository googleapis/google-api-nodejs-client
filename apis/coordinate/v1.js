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
 * Google Maps Coordinate API
 *
 * Lets you view and manage jobs in a Coordinate team.
 *
 * @example
 * var google = require('googleapis');
 * var coordinate = google.coordinate('v1');
 *
 * @namespace coordinate
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Coordinate
 */
function Coordinate(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.customFieldDef = {

    /**
     * coordinate.customFieldDef.list
     *
     * @desc Retrieves a list of custom field definitions for a team.
     *
     * @alias coordinate.customFieldDef.list
     * @memberOf! coordinate(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.teamId Team ID
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/coordinate/v1/teams/{teamId}/custom_fields',
          method: 'GET'
        },
        params: params,
        requiredParams: ['teamId'],
        pathParams: ['teamId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.jobs = {

    /**
     * coordinate.jobs.get
     *
     * @desc Retrieves a job, including all the changes made to the job.
     *
     * @alias coordinate.jobs.get
     * @memberOf! coordinate(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.jobId Job number
     * @param {string} params.teamId Team ID
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/coordinate/v1/teams/{teamId}/jobs/{jobId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['teamId', 'jobId'],
        pathParams: ['jobId', 'teamId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * coordinate.jobs.insert
     *
     * @desc Inserts a new job. Only the state field of the job should be set.
     *
     * @alias coordinate.jobs.insert
     * @memberOf! coordinate(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.address Job address as newline (Unix) separated string
     * @param {string=} params.assignee Assignee email address, or empty string to unassign.
     * @param {string=} params.customField Sets the value of custom fields. To set a custom field, pass the field id (from /team/teamId/custom_fields), a URL escaped '=' character, and the desired value as a parameter. For example, customField=12%3DAlice. Repeat the parameter for each custom field. Note that '=' cannot appear in the parameter value. Specifying an invalid, or inactive enum field will result in an error 500.
     * @param {string=} params.customerName Customer name
     * @param {string=} params.customerPhoneNumber Customer phone number
     * @param {number} params.lat The latitude coordinate of this job's location.
     * @param {number} params.lng The longitude coordinate of this job's location.
     * @param {string=} params.note Job note as newline (Unix) separated string
     * @param {string} params.teamId Team ID
     * @param {string} params.title Job title
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/coordinate/v1/teams/{teamId}/jobs',
          method: 'POST'
        },
        params: params,
        requiredParams: ['teamId', 'address', 'lat', 'lng', 'title'],
        pathParams: ['teamId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * coordinate.jobs.list
     *
     * @desc Retrieves jobs created or modified since the given timestamp.
     *
     * @alias coordinate.jobs.list
     * @memberOf! coordinate(v1)
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults Maximum number of results to return in one page.
     * @param {string=} params.minModifiedTimestampMs Minimum time a job was modified in milliseconds since epoch.
     * @param {boolean=} params.omitJobChanges Whether to omit detail job history information.
     * @param {string=} params.pageToken Continuation token
     * @param {string} params.teamId Team ID
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/coordinate/v1/teams/{teamId}/jobs',
          method: 'GET'
        },
        params: params,
        requiredParams: ['teamId'],
        pathParams: ['teamId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * coordinate.jobs.patch
     *
     * @desc Updates a job. Fields that are set in the job state will be updated. This method supports patch semantics.
     *
     * @alias coordinate.jobs.patch
     * @memberOf! coordinate(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.address Job address as newline (Unix) separated string
     * @param {string=} params.assignee Assignee email address, or empty string to unassign.
     * @param {string=} params.customField Sets the value of custom fields. To set a custom field, pass the field id (from /team/teamId/custom_fields), a URL escaped '=' character, and the desired value as a parameter. For example, customField=12%3DAlice. Repeat the parameter for each custom field. Note that '=' cannot appear in the parameter value. Specifying an invalid, or inactive enum field will result in an error 500.
     * @param {string=} params.customerName Customer name
     * @param {string=} params.customerPhoneNumber Customer phone number
     * @param {string} params.jobId Job number
     * @param {number=} params.lat The latitude coordinate of this job's location.
     * @param {number=} params.lng The longitude coordinate of this job's location.
     * @param {string=} params.note Job note as newline (Unix) separated string
     * @param {string=} params.progress Job progress
     * @param {string} params.teamId Team ID
     * @param {string=} params.title Job title
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/coordinate/v1/teams/{teamId}/jobs/{jobId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['teamId', 'jobId'],
        pathParams: ['jobId', 'teamId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * coordinate.jobs.update
     *
     * @desc Updates a job. Fields that are set in the job state will be updated.
     *
     * @alias coordinate.jobs.update
     * @memberOf! coordinate(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.address Job address as newline (Unix) separated string
     * @param {string=} params.assignee Assignee email address, or empty string to unassign.
     * @param {string=} params.customField Sets the value of custom fields. To set a custom field, pass the field id (from /team/teamId/custom_fields), a URL escaped '=' character, and the desired value as a parameter. For example, customField=12%3DAlice. Repeat the parameter for each custom field. Note that '=' cannot appear in the parameter value. Specifying an invalid, or inactive enum field will result in an error 500.
     * @param {string=} params.customerName Customer name
     * @param {string=} params.customerPhoneNumber Customer phone number
     * @param {string} params.jobId Job number
     * @param {number=} params.lat The latitude coordinate of this job's location.
     * @param {number=} params.lng The longitude coordinate of this job's location.
     * @param {string=} params.note Job note as newline (Unix) separated string
     * @param {string=} params.progress Job progress
     * @param {string} params.teamId Team ID
     * @param {string=} params.title Job title
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/coordinate/v1/teams/{teamId}/jobs/{jobId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['teamId', 'jobId'],
        pathParams: ['jobId', 'teamId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.location = {

    /**
     * coordinate.location.list
     *
     * @desc Retrieves a list of locations for a worker.
     *
     * @alias coordinate.location.list
     * @memberOf! coordinate(v1)
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults Maximum number of results to return in one page.
     * @param {string=} params.pageToken Continuation token
     * @param {string} params.startTimestampMs Start timestamp in milliseconds since the epoch.
     * @param {string} params.teamId Team ID
     * @param {string} params.workerEmail Worker email address.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/coordinate/v1/teams/{teamId}/workers/{workerEmail}/locations',
          method: 'GET'
        },
        params: params,
        requiredParams: ['teamId', 'workerEmail', 'startTimestampMs'],
        pathParams: ['teamId', 'workerEmail'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.schedule = {

    /**
     * coordinate.schedule.get
     *
     * @desc Retrieves the schedule for a job.
     *
     * @alias coordinate.schedule.get
     * @memberOf! coordinate(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.jobId Job number
     * @param {string} params.teamId Team ID
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/coordinate/v1/teams/{teamId}/jobs/{jobId}/schedule',
          method: 'GET'
        },
        params: params,
        requiredParams: ['teamId', 'jobId'],
        pathParams: ['jobId', 'teamId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * coordinate.schedule.patch
     *
     * @desc Replaces the schedule of a job with the provided schedule. This method supports patch semantics.
     *
     * @alias coordinate.schedule.patch
     * @memberOf! coordinate(v1)
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.allDay Whether the job is scheduled for the whole day. Time of day in start/end times is ignored if this is true.
     * @param {string=} params.duration Job duration in milliseconds.
     * @param {string=} params.endTime Scheduled end time in milliseconds since epoch.
     * @param {string} params.jobId Job number
     * @param {string=} params.startTime Scheduled start time in milliseconds since epoch.
     * @param {string} params.teamId Team ID
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/coordinate/v1/teams/{teamId}/jobs/{jobId}/schedule',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['teamId', 'jobId'],
        pathParams: ['jobId', 'teamId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * coordinate.schedule.update
     *
     * @desc Replaces the schedule of a job with the provided schedule.
     *
     * @alias coordinate.schedule.update
     * @memberOf! coordinate(v1)
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.allDay Whether the job is scheduled for the whole day. Time of day in start/end times is ignored if this is true.
     * @param {string=} params.duration Job duration in milliseconds.
     * @param {string=} params.endTime Scheduled end time in milliseconds since epoch.
     * @param {string} params.jobId Job number
     * @param {string=} params.startTime Scheduled start time in milliseconds since epoch.
     * @param {string} params.teamId Team ID
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/coordinate/v1/teams/{teamId}/jobs/{jobId}/schedule',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['teamId', 'jobId'],
        pathParams: ['jobId', 'teamId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.team = {

    /**
     * coordinate.team.list
     *
     * @desc Retrieves a list of teams for a user.
     *
     * @alias coordinate.team.list
     * @memberOf! coordinate(v1)
     *
     * @param {object=} params Parameters for request
     * @param {boolean=} params.admin Whether to include teams for which the user has the Admin role.
     * @param {boolean=} params.dispatcher Whether to include teams for which the user has the Dispatcher role.
     * @param {boolean=} params.worker Whether to include teams for which the user has the Worker role.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/coordinate/v1/teams',
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

  self.worker = {

    /**
     * coordinate.worker.list
     *
     * @desc Retrieves a list of workers in a team.
     *
     * @alias coordinate.worker.list
     * @memberOf! coordinate(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.teamId Team ID
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/coordinate/v1/teams/{teamId}/workers',
          method: 'GET'
        },
        params: params,
        requiredParams: ['teamId'],
        pathParams: ['teamId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

module.exports = Coordinate;
