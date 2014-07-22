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
var checkRequired = apirequest.checkRequired;
var extend = require('../../lib/utils').extend;

/**
 * TaskQueue API
 *
 * @classdesc Lets you access a Google App Engine Pull Task Queue over REST.
 * @namespace taskqueue
 * @version  v1beta1
 * @variation v1beta1
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
     * @memberOf! taskqueue(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.getStats - Whether to get stats. Optional.
     * @param  {string} params.project - The project under which the queue lies.
     * @param  {string} params.taskqueue - The id of the taskqueue to get the properties of.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'taskqueue']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/taskqueue/v1beta1/projects/' + params.project + '/taskqueues/' + params.taskqueue,
        method: 'GET'
      };

      delete params.project;
      delete params.taskqueue;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.tasks = {

    /**
     * taskqueue.tasks.delete
     *
     * @desc Delete a task from a TaskQueue.
     *
     * @alias taskqueue.tasks.delete
     * @memberOf! taskqueue(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - The project under which the queue lies.
     * @param  {string} params.task - The id of the task to delete.
     * @param  {string} params.taskqueue - The taskqueue to delete a task from.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'taskqueue', 'task']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/taskqueue/v1beta1/projects/' + params.project + '/taskqueues/' + params.taskqueue + '/tasks/' + params.task,
        method: 'DELETE'
      };

      delete params.project;
      delete params.task;
      delete params.taskqueue;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * taskqueue.tasks.get
     *
     * @desc Get a particular task from a TaskQueue.
     *
     * @alias taskqueue.tasks.get
     * @memberOf! taskqueue(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - The project under which the queue lies.
     * @param  {string} params.task - The task to get properties of.
     * @param  {string} params.taskqueue - The taskqueue in which the task belongs.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'taskqueue', 'task']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/taskqueue/v1beta1/projects/' + params.project + '/taskqueues/' + params.taskqueue + '/tasks/' + params.task,
        method: 'GET'
      };

      delete params.project;
      delete params.task;
      delete params.taskqueue;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * taskqueue.tasks.lease
     *
     * @desc Lease 1 or more tasks from a TaskQueue.
     *
     * @alias taskqueue.tasks.lease
     * @memberOf! taskqueue(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.leaseSecs - The lease in seconds.
     * @param  {integer} params.numTasks - The number of tasks to lease.
     * @param  {string} params.project - The project under which the queue lies.
     * @param  {string} params.taskqueue - The taskqueue to lease a task from.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    lease: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'taskqueue', 'numTasks', 'leaseSecs']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/taskqueue/v1beta1/projects/' + params.project + '/taskqueues/' + params.taskqueue + '/tasks/lease',
        method: 'POST'
      };

      delete params.project;
      delete params.taskqueue;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * taskqueue.tasks.list
     *
     * @desc List Tasks in a TaskQueue
     *
     * @alias taskqueue.tasks.list
     * @memberOf! taskqueue(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - The project under which the queue lies.
     * @param  {string} params.taskqueue - The id of the taskqueue to list tasks from.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['project', 'taskqueue']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/taskqueue/v1beta1/projects/' + params.project + '/taskqueues/' + params.taskqueue + '/tasks',
        method: 'GET'
      };

      delete params.project;
      delete params.taskqueue;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Taskqueue object
 * @type Taskqueue
 */
module.exports = Taskqueue;