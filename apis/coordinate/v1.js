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

var apirequest = require('../../lib/apirequest');
var createAPIRequest = apirequest.createAPIRequest;

/**
 * Google Maps Coordinate API
 *
 * @classdesc Lets you view and manage jobs in a Coordinate team.
 * @namespace coordinate
 * @version  v1
 * @variation v1
 * @this Coordinate
 * @param {object=} options Options for Coordinate
 */
function Coordinate(options) {

  var self = this;
  this._options = options || {};

  this.customFieldDef = {

    /**
     * coordinate.customFieldDef.list
     *
     * @desc Retrieves a list of custom field definitions for a team.
     *
     * @alias coordinate.customFieldDef.list
     * @memberOf! coordinate(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.teamId - Team ID
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/coordinate/v1/teams/' + params.teamId + '/custom_fields',
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

  this.jobs = {

    /**
     * coordinate.jobs.get
     *
     * @desc Retrieves a job, including all the changes made to the job.
     *
     * @alias coordinate.jobs.get
     * @memberOf! coordinate(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.jobId - Job number
     * @param  {string} params.teamId - Team ID
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/coordinate/v1/teams/' + params.teamId + '/jobs/' + params.jobId,
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
     * @param  {object} params - Parameters for request
     * @param  {string} params.address - Job address as newline (Unix) separated string
     * @param  {string=} params.assignee - Assignee email address, or empty string to unassign.
     * @param  {string=} params.customField - Map from custom field id (from /team//custom_fields) to the field value. For example '123=Alice'
     * @param  {string=} params.customerName - Customer name
     * @param  {string=} params.customerPhoneNumber - Customer phone number
     * @param  {number} params.lat - The latitude coordinate of this job's location.
     * @param  {number} params.lng - The longitude coordinate of this job's location.
     * @param  {string=} params.note - Job note as newline (Unix) separated string
     * @param  {string} params.teamId - Team ID
     * @param  {string} params.title - Job title
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/coordinate/v1/teams/' + params.teamId + '/jobs',
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
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - Maximum number of results to return in one page.
     * @param  {string=} params.minModifiedTimestampMs - Minimum time a job was modified in milliseconds since epoch.
     * @param  {string=} params.pageToken - Continuation token
     * @param  {string} params.teamId - Team ID
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/coordinate/v1/teams/' + params.teamId + '/jobs',
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
     * @param  {object} params - Parameters for request
     * @param  {string=} params.address - Job address as newline (Unix) separated string
     * @param  {string=} params.assignee - Assignee email address, or empty string to unassign.
     * @param  {string=} params.customField - Map from custom field id (from /team//custom_fields) to the field value. For example '123=Alice'
     * @param  {string=} params.customerName - Customer name
     * @param  {string=} params.customerPhoneNumber - Customer phone number
     * @param  {string} params.jobId - Job number
     * @param  {number=} params.lat - The latitude coordinate of this job's location.
     * @param  {number=} params.lng - The longitude coordinate of this job's location.
     * @param  {string=} params.note - Job note as newline (Unix) separated string
     * @param  {string=} params.progress - Job progress
     * @param  {string} params.teamId - Team ID
     * @param  {string=} params.title - Job title
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/coordinate/v1/teams/' + params.teamId + '/jobs/' + params.jobId,
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
     * @param  {object} params - Parameters for request
     * @param  {string=} params.address - Job address as newline (Unix) separated string
     * @param  {string=} params.assignee - Assignee email address, or empty string to unassign.
     * @param  {string=} params.customField - Map from custom field id (from /team//custom_fields) to the field value. For example '123=Alice'
     * @param  {string=} params.customerName - Customer name
     * @param  {string=} params.customerPhoneNumber - Customer phone number
     * @param  {string} params.jobId - Job number
     * @param  {number=} params.lat - The latitude coordinate of this job's location.
     * @param  {number=} params.lng - The longitude coordinate of this job's location.
     * @param  {string=} params.note - Job note as newline (Unix) separated string
     * @param  {string=} params.progress - Job progress
     * @param  {string} params.teamId - Team ID
     * @param  {string=} params.title - Job title
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/coordinate/v1/teams/' + params.teamId + '/jobs/' + params.jobId,
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

  this.location = {

    /**
     * coordinate.location.list
     *
     * @desc Retrieves a list of locations for a worker.
     *
     * @alias coordinate.location.list
     * @memberOf! coordinate(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - Maximum number of results to return in one page.
     * @param  {string=} params.pageToken - Continuation token
     * @param  {string} params.startTimestampMs - Start timestamp in milliseconds since the epoch.
     * @param  {string} params.teamId - Team ID
     * @param  {string} params.workerEmail - Worker email address.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/coordinate/v1/teams/' + params.teamId + '/workers/' + params.workerEmail + '/locations',
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

  this.schedule = {

    /**
     * coordinate.schedule.get
     *
     * @desc Retrieves the schedule for a job.
     *
     * @alias coordinate.schedule.get
     * @memberOf! coordinate(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.jobId - Job number
     * @param  {string} params.teamId - Team ID
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/coordinate/v1/teams/' + params.teamId + '/jobs/' + params.jobId + '/schedule',
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
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.allDay - Whether the job is scheduled for the whole day. Time of day in start/end times is ignored if this is true.
     * @param  {string=} params.duration - Job duration in milliseconds.
     * @param  {string=} params.endTime - Scheduled end time in milliseconds since epoch.
     * @param  {string} params.jobId - Job number
     * @param  {string=} params.startTime - Scheduled start time in milliseconds since epoch.
     * @param  {string} params.teamId - Team ID
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/coordinate/v1/teams/' + params.teamId + '/jobs/' + params.jobId + '/schedule',
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
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.allDay - Whether the job is scheduled for the whole day. Time of day in start/end times is ignored if this is true.
     * @param  {string=} params.duration - Job duration in milliseconds.
     * @param  {string=} params.endTime - Scheduled end time in milliseconds since epoch.
     * @param  {string} params.jobId - Job number
     * @param  {string=} params.startTime - Scheduled start time in milliseconds since epoch.
     * @param  {string} params.teamId - Team ID
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/coordinate/v1/teams/' + params.teamId + '/jobs/' + params.jobId + '/schedule',
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

  this.worker = {

    /**
     * coordinate.worker.list
     *
     * @desc Retrieves a list of workers in a team.
     *
     * @alias coordinate.worker.list
     * @memberOf! coordinate(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.teamId - Team ID
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/coordinate/v1/teams/' + params.teamId + '/workers',
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

/**
 * Exports Coordinate object
 * @type Coordinate
 */
module.exports = Coordinate;