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
 * Google Cloud Pub/Sub API
 *
 * @classdesc Provides reliable, many-to-many, asynchronous messaging between applications.
 * @namespace pubsub
 * @version  v1beta1a
 * @variation v1beta1a
 * @this Pubsub
 * @param {object=} options Options for Pubsub
 */
function Pubsub(options) {

  var self = this;
  this._options = options || {};

  this.subscriptions = {

    /**
     * pubsub.subscriptions.acknowledge
     *
     * @desc Acknowledges a particular received message: the Pub/Sub system can remove the given message from the subscription. Acknowledging a message whose Ack deadline has expired may succeed, but the message could have been already redelivered. Acknowledging a message more than once will not result in an error. This is only used for messages received via pull.
     *
     * @alias pubsub.subscriptions.acknowledge
     * @memberOf! pubsub(v1beta1a)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    acknowledge: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/v1beta1a/subscriptions/acknowledge',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * pubsub.subscriptions.create
     *
     * @desc Creates a subscription on a given topic for a given subscriber. If the subscription already exists, returns ALREADY_EXISTS. If the corresponding topic doesn't exist, returns NOT_FOUND. If the name is not provided in the request, the server will assign a random name for this subscription on the same project as the topic.
     *
     * @alias pubsub.subscriptions.create
     * @memberOf! pubsub(v1beta1a)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    create: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/v1beta1a/subscriptions',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * pubsub.subscriptions.delete
     *
     * @desc Deletes an existing subscription. All pending messages in the subscription are immediately dropped. Calls to Pull after deletion will return NOT_FOUND.
     *
     * @alias pubsub.subscriptions.delete
     * @memberOf! pubsub(v1beta1a)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.subscription -
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/v1beta1a/subscriptions/{+subscription}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['subscription'],
        pathParams: ['subscription'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * pubsub.subscriptions.get
     *
     * @desc Gets the configuration details of a subscription.
     *
     * @alias pubsub.subscriptions.get
     * @memberOf! pubsub(v1beta1a)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.subscription -
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/v1beta1a/subscriptions/{+subscription}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['subscription'],
        pathParams: ['subscription'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * pubsub.subscriptions.list
     *
     * @desc Lists matching subscriptions.
     *
     * @alias pubsub.subscriptions.list
     * @memberOf! pubsub(v1beta1a)
     *
     * @param  {object=} params - Parameters for request
     * @param  {integer=} params.maxResults -
     * @param  {string=} params.pageToken -
     * @param  {string=} params.query -
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/v1beta1a/subscriptions',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * pubsub.subscriptions.modifyAckDeadline
     *
     * @desc Modifies the Ack deadline for a message received from a pull request.
     *
     * @alias pubsub.subscriptions.modifyAckDeadline
     * @memberOf! pubsub(v1beta1a)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    modifyAckDeadline: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/v1beta1a/subscriptions/modifyAckDeadline',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * pubsub.subscriptions.modifyPushConfig
     *
     * @desc Modifies the 74code76PushConfig74/code76 for a specified subscription. This method can be used to suspend the flow of messages to an endpoint by clearing the 74code76PushConfig74/code76 field in the request. Messages will be accumulated for delivery even if no push configuration is defined or while the configuration is modified.
     *
     * @alias pubsub.subscriptions.modifyPushConfig
     * @memberOf! pubsub(v1beta1a)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    modifyPushConfig: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/v1beta1a/subscriptions/modifyPushConfig',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * pubsub.subscriptions.pull
     *
     * @desc Pulls a single message from the server. If return_immediately is true, and no messages are available in the subscription, this method returns FAILED_PRECONDITION. The system is free to return an UNAVAILABLE error if no messages are available in a reasonable amount of time (to reduce system load).
     *
     * @alias pubsub.subscriptions.pull
     * @memberOf! pubsub(v1beta1a)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    pull: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/v1beta1a/subscriptions/pull',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * pubsub.subscriptions.pullBatch
     *
     * @desc Pulls messages from the server. Returns an empty list if there are no messages available in the backlog. The system is free to return UNAVAILABLE if there are too many pull requests outstanding for the given subscription.
     *
     * @alias pubsub.subscriptions.pullBatch
     * @memberOf! pubsub(v1beta1a)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    pullBatch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/v1beta1a/subscriptions/pullBatch',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.topics = {

    /**
     * pubsub.topics.create
     *
     * @desc Creates the given topic with the given name.
     *
     * @alias pubsub.topics.create
     * @memberOf! pubsub(v1beta1a)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    create: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/v1beta1a/topics',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * pubsub.topics.delete
     *
     * @desc Deletes the topic with the given name. All subscriptions to this topic are also deleted. Returns NOT_FOUND if the topic does not exist. After a topic is deleted, a new topic may be created with the same name.
     *
     * @alias pubsub.topics.delete
     * @memberOf! pubsub(v1beta1a)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.topic -
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/v1beta1a/topics/{+topic}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['topic'],
        pathParams: ['topic'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * pubsub.topics.get
     *
     * @desc Gets the configuration of a topic. Since the topic only has the name attribute, this method is only useful to check the existence of a topic. If other attributes are added in the future, they will be returned here.
     *
     * @alias pubsub.topics.get
     * @memberOf! pubsub(v1beta1a)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.topic -
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/v1beta1a/topics/{+topic}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['topic'],
        pathParams: ['topic'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * pubsub.topics.list
     *
     * @desc Lists matching topics.
     *
     * @alias pubsub.topics.list
     * @memberOf! pubsub(v1beta1a)
     *
     * @param  {object=} params - Parameters for request
     * @param  {integer=} params.maxResults -
     * @param  {string=} params.pageToken -
     * @param  {string=} params.query -
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/v1beta1a/topics',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * pubsub.topics.publish
     *
     * @desc Adds a message to the topic. Returns NOT_FOUND if the topic does not exist.
     *
     * @alias pubsub.topics.publish
     * @memberOf! pubsub(v1beta1a)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    publish: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/v1beta1a/topics/publish',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * pubsub.topics.publishBatch
     *
     * @desc Adds one or more messages to the topic. Returns NOT_FOUND if the topic does not exist.
     *
     * @alias pubsub.topics.publishBatch
     * @memberOf! pubsub(v1beta1a)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    publishBatch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/v1beta1a/topics/publishBatch',
          method: 'POST'
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

/**
 * Exports Pubsub object
 * @type Pubsub
 */
module.exports = Pubsub;