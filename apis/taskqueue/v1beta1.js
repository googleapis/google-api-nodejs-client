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
 * TaskQueue API
 *
 * Accesses a Google App Engine Pull Task Queue over REST.
 *
 * @example
 * var google = require('googleapis');
 * var taskqueue = google.taskqueue('v1beta1');
 *
 * @namespace taskqueue
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Taskqueue
 */
function Taskqueue(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.taskqueues = {

    /**
     * taskqueue.taskqueues.get
     *
     * @desc Get detailed information about a TaskQueue.
     *
     * @alias taskqueue.taskqueues.get
     * @memberOf! taskqueue(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.getStats Whether to get stats. Optional.
     * @param {string} params.project The project under which the queue lies.
     * @param {string} params.taskqueue The id of the taskqueue to get the properties of.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/taskqueue/v1beta1/projects/{project}/taskqueues/{taskqueue}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'taskqueue'],
        pathParams: ['project', 'taskqueue'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.tasks = {

    /**
     * taskqueue.tasks.delete
     *
     * @desc Delete a task from a TaskQueue.
     *
     * @alias taskqueue.tasks.delete
     * @memberOf! taskqueue(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project The project under which the queue lies.
     * @param {string} params.task The id of the task to delete.
     * @param {string} params.taskqueue The taskqueue to delete a task from.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/taskqueue/v1beta1/projects/{project}/taskqueues/{taskqueue}/tasks/{task}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'taskqueue', 'task'],
        pathParams: ['project', 'task', 'taskqueue'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * taskqueue.tasks.get
     *
     * @desc Get a particular task from a TaskQueue.
     *
     * @alias taskqueue.tasks.get
     * @memberOf! taskqueue(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project The project under which the queue lies.
     * @param {string} params.task The task to get properties of.
     * @param {string} params.taskqueue The taskqueue in which the task belongs.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/taskqueue/v1beta1/projects/{project}/taskqueues/{taskqueue}/tasks/{task}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'taskqueue', 'task'],
        pathParams: ['project', 'task', 'taskqueue'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * taskqueue.tasks.lease
     *
     * @desc Lease 1 or more tasks from a TaskQueue.
     *
     * @alias taskqueue.tasks.lease
     * @memberOf! taskqueue(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {integer} params.leaseSecs The lease in seconds.
     * @param {integer} params.numTasks The number of tasks to lease.
     * @param {string} params.project The project under which the queue lies.
     * @param {string} params.taskqueue The taskqueue to lease a task from.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    lease: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/taskqueue/v1beta1/projects/{project}/taskqueues/{taskqueue}/tasks/lease',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'taskqueue', 'numTasks', 'leaseSecs'],
        pathParams: ['project', 'taskqueue'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * taskqueue.tasks.list
     *
     * @desc List Tasks in a TaskQueue
     *
     * @alias taskqueue.tasks.list
     * @memberOf! taskqueue(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project The project under which the queue lies.
     * @param {string} params.taskqueue The id of the taskqueue to list tasks from.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/taskqueue/v1beta1/projects/{project}/taskqueues/{taskqueue}/tasks',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'taskqueue'],
        pathParams: ['project', 'taskqueue'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

module.exports = Taskqueue;
