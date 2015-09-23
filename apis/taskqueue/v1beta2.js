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
 * @classdesc Lets you access a Google App Engine Pull Task Queue over REST.
 * @namespace taskqueue
 * @version  v1beta2
 * @variation v1beta2
 * @this Taskqueue
 * @param {object=} options Options for Taskqueue
 */
function Taskqueue(options) {

  var self = this;
  this._options = options || {};

  this.taskqueues = {

    /**
     * taskqueue.taskqueues.get
     *
     * @desc Get detailed information about a TaskQueue.
     *
     * @alias taskqueue.taskqueues.get
     * @memberOf! taskqueue(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.getStats - Whether to get stats. Optional.
     * @param  {string} params.project - The project under which the queue lies.
     * @param  {string} params.taskqueue - The id of the taskqueue to get the properties of.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/taskqueue/v1beta2/projects/{project}/taskqueues/{taskqueue}',
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

  this.tasks = {

    /**
     * taskqueue.tasks.delete
     *
     * @desc Delete a task from a TaskQueue.
     *
     * @alias taskqueue.tasks.delete
     * @memberOf! taskqueue(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - The project under which the queue lies.
     * @param  {string} params.task - The id of the task to delete.
     * @param  {string} params.taskqueue - The taskqueue to delete a task from.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/taskqueue/v1beta2/projects/{project}/taskqueues/{taskqueue}/tasks/{task}',
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
     * @memberOf! taskqueue(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - The project under which the queue lies.
     * @param  {string} params.task - The task to get properties of.
     * @param  {string} params.taskqueue - The taskqueue in which the task belongs.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/taskqueue/v1beta2/projects/{project}/taskqueues/{taskqueue}/tasks/{task}',
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
     * taskqueue.tasks.insert
     *
     * @desc Insert a new task in a TaskQueue
     *
     * @alias taskqueue.tasks.insert
     * @memberOf! taskqueue(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - The project under which the queue lies
     * @param  {string} params.taskqueue - The taskqueue to insert the task into
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/taskqueue/v1beta2/projects/{project}/taskqueues/{taskqueue}/tasks',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'taskqueue'],
        pathParams: ['project', 'taskqueue'],
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
     * @memberOf! taskqueue(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.groupByTag - When true, all returned tasks will have the same tag
     * @param  {integer} params.leaseSecs - The lease in seconds.
     * @param  {integer} params.numTasks - The number of tasks to lease.
     * @param  {string} params.project - The project under which the queue lies.
     * @param  {string=} params.tag - The tag allowed for tasks in the response. Must only be specified if group_by_tag is true. If group_by_tag is true and tag is not specified the tag will be that of the oldest task by eta, i.e. the first available tag
     * @param  {string} params.taskqueue - The taskqueue to lease a task from.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    lease: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/taskqueue/v1beta2/projects/{project}/taskqueues/{taskqueue}/tasks/lease',
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
     * @memberOf! taskqueue(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - The project under which the queue lies.
     * @param  {string} params.taskqueue - The id of the taskqueue to list tasks from.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/taskqueue/v1beta2/projects/{project}/taskqueues/{taskqueue}/tasks',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'taskqueue'],
        pathParams: ['project', 'taskqueue'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * taskqueue.tasks.patch
     *
     * @desc Update tasks that are leased out of a TaskQueue. This method supports patch semantics.
     *
     * @alias taskqueue.tasks.patch
     * @memberOf! taskqueue(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.newLeaseSeconds - The new lease in seconds.
     * @param  {string} params.project - The project under which the queue lies.
     * @param  {string} params.task - 
     * @param  {string} params.taskqueue - 
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/taskqueue/v1beta2/projects/{project}/taskqueues/{taskqueue}/tasks/{task}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['project', 'taskqueue', 'task', 'newLeaseSeconds'],
        pathParams: ['project', 'task', 'taskqueue'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * taskqueue.tasks.update
     *
     * @desc Update tasks that are leased out of a TaskQueue.
     *
     * @alias taskqueue.tasks.update
     * @memberOf! taskqueue(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.newLeaseSeconds - The new lease in seconds.
     * @param  {string} params.project - The project under which the queue lies.
     * @param  {string} params.task - 
     * @param  {string} params.taskqueue - 
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/taskqueue/v1beta2/projects/{project}/taskqueues/{taskqueue}/tasks/{task}',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'taskqueue', 'task', 'newLeaseSeconds'],
        pathParams: ['project', 'task', 'taskqueue'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Taskqueue object
 * @type Taskqueue
 */
module.exports = Taskqueue;