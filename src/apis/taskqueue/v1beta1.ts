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

import {AxiosPromise} from 'axios';

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format

/**
 * TaskQueue API
 *
 * Accesses a Google App Engine Pull Task Queue over REST.
 *
 * @example
 * const google = require('googleapis');
 * const taskqueue = google.taskqueue('v1beta1');
 *
 * @namespace taskqueue
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Taskqueue
 */
export class Taskqueue {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  taskqueues: Resource$Taskqueues;
  tasks: Resource$Tasks;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.taskqueues = new Resource$Taskqueues(this);
    this.tasks = new Resource$Tasks(this);
  }

  getRoot() {
    return this.root;
  }
}

export interface Schema$Task {
  /**
   * Time (in seconds since the epoch) at which the task was enqueued.
   */
  enqueueTimestamp: string;
  /**
   * Name of the task.
   */
  id: string;
  /**
   * The kind of object returned, in this case set to task.
   */
  kind: string;
  /**
   * Time (in seconds since the epoch) at which the task lease will expire. This
   * value is 0 if the task isnt currently leased out to a worker.
   */
  leaseTimestamp: string;
  /**
   * A bag of bytes which is the task payload. The payload on the JSON side is
   * always Base64 encoded.
   */
  payloadBase64: string;
  /**
   * Name of the queue that the task is in.
   */
  queueName: string;
}
export interface Schema$TaskQueue {
  /**
   * ACLs that are applicable to this TaskQueue object.
   */
  acl: any;
  /**
   * Name of the taskqueue.
   */
  id: string;
  /**
   * The kind of REST object returned, in this case taskqueue.
   */
  kind: string;
  /**
   * The number of times we should lease out tasks before giving up on them. If
   * unset we lease them out forever until a worker deletes the task.
   */
  maxLeases: number;
  /**
   * Statistics for the TaskQueue object in question.
   */
  stats: any;
}
export interface Schema$Tasks {
  /**
   * The actual list of tasks returned as a result of the lease operation.
   */
  items: Schema$Task[];
  /**
   * The kind of object returned, a list of tasks.
   */
  kind: string;
}
export interface Schema$Tasks2 {
  /**
   * The actual list of tasks currently active in the TaskQueue.
   */
  items: Schema$Task[];
  /**
   * The kind of object returned, a list of tasks.
   */
  kind: string;
}

export class Resource$Taskqueues {
  root: Taskqueue;
  constructor(root: Taskqueue) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * taskqueue.taskqueues.get
   * @desc Get detailed information about a TaskQueue.
   * @alias taskqueue.taskqueues.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.getStats Whether to get stats. Optional.
   * @param {string} params.project The project under which the queue lies.
   * @param {string} params.taskqueue The id of the taskqueue to get the properties of.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$TaskQueue>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$TaskQueue>,
      callback?: BodyResponseCallback<Schema$TaskQueue>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$TaskQueue>,
      callback?: BodyResponseCallback<Schema$TaskQueue>):
      void|AxiosPromise<Schema$TaskQueue> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/taskqueue/v1beta1/projects/{project}/taskqueues/{taskqueue}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['project', 'taskqueue'],
      pathParams: ['project', 'taskqueue'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TaskQueue>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TaskQueue>(parameters);
    }
  }
}

export class Resource$Tasks {
  root: Taskqueue;
  constructor(root: Taskqueue) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * taskqueue.tasks.delete
   * @desc Delete a task from a TaskQueue.
   * @alias taskqueue.tasks.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.project The project under which the queue lies.
   * @param {string} params.task The id of the task to delete.
   * @param {string} params.taskqueue The taskqueue to delete a task from.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/taskqueue/v1beta1/projects/{project}/taskqueues/{taskqueue}/tasks/{task}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['project', 'taskqueue', 'task'],
      pathParams: ['project', 'task', 'taskqueue'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * taskqueue.tasks.get
   * @desc Get a particular task from a TaskQueue.
   * @alias taskqueue.tasks.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.project The project under which the queue lies.
   * @param {string} params.task The task to get properties of.
   * @param {string} params.taskqueue The taskqueue in which the task belongs.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Task>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Task>,
      callback?: BodyResponseCallback<Schema$Task>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Task>,
      callback?: BodyResponseCallback<Schema$Task>):
      void|AxiosPromise<Schema$Task> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/taskqueue/v1beta1/projects/{project}/taskqueues/{taskqueue}/tasks/{task}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['project', 'taskqueue', 'task'],
      pathParams: ['project', 'task', 'taskqueue'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Task>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Task>(parameters);
    }
  }


  /**
   * taskqueue.tasks.lease
   * @desc Lease 1 or more tasks from a TaskQueue.
   * @alias taskqueue.tasks.lease
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer} params.leaseSecs The lease in seconds.
   * @param {integer} params.numTasks The number of tasks to lease.
   * @param {string} params.project The project under which the queue lies.
   * @param {string} params.taskqueue The taskqueue to lease a task from.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  lease(params?: any, options?: MethodOptions): AxiosPromise<Schema$Tasks>;
  lease(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Tasks>,
      callback?: BodyResponseCallback<Schema$Tasks>): void;
  lease(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Tasks>,
      callback?: BodyResponseCallback<Schema$Tasks>):
      void|AxiosPromise<Schema$Tasks> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/taskqueue/v1beta1/projects/{project}/taskqueues/{taskqueue}/tasks/lease')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['project', 'taskqueue', 'numTasks', 'leaseSecs'],
      pathParams: ['project', 'taskqueue'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Tasks>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Tasks>(parameters);
    }
  }


  /**
   * taskqueue.tasks.list
   * @desc List Tasks in a TaskQueue
   * @alias taskqueue.tasks.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.project The project under which the queue lies.
   * @param {string} params.taskqueue The id of the taskqueue to list tasks from.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions): AxiosPromise<Schema$Tasks2>;
  list(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Tasks2>,
      callback?: BodyResponseCallback<Schema$Tasks2>): void;
  list(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Tasks2>,
      callback?: BodyResponseCallback<Schema$Tasks2>):
      void|AxiosPromise<Schema$Tasks2> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/taskqueue/v1beta1/projects/{project}/taskqueues/{taskqueue}/tasks')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['project', 'taskqueue'],
      pathParams: ['project', 'taskqueue'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Tasks2>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Tasks2>(parameters);
    }
  }
}
