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
 * Cloud Storage API
 *
 * @classdesc Lets you store and retrieve potentially-large, immutable data objects.
 * @namespace storage
 * @version  v1
 * @variation v1
 * @this Storage
 * @param {object=} options Options for Storage
 */
function Storage(options) {

  var self = this;
  this._options = options || {};

  this.bucketAccessControls = {

    /**
     * storage.bucketAccessControls.delete
     *
     * @desc Permanently deletes the ACL entry for the specified entity on the specified bucket.
     *
     * @alias storage.bucketAccessControls.delete
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of a bucket.
     * @param  {string} params.entity - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/b/' + params.bucket + '/acl/' + params.entity,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['bucket', 'entity'],
        pathParams: ['bucket', 'entity'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * storage.bucketAccessControls.get
     *
     * @desc Returns the ACL entry for the specified entity on the specified bucket.
     *
     * @alias storage.bucketAccessControls.get
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of a bucket.
     * @param  {string} params.entity - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/b/' + params.bucket + '/acl/' + params.entity,
          method: 'GET'
        },
        params: params,
        requiredParams: ['bucket', 'entity'],
        pathParams: ['bucket', 'entity'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * storage.bucketAccessControls.insert
     *
     * @desc Creates a new ACL entry on the specified bucket.
     *
     * @alias storage.bucketAccessControls.insert
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of a bucket.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/b/' + params.bucket + '/acl',
          method: 'POST'
        },
        params: params,
        requiredParams: ['bucket'],
        pathParams: ['bucket'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * storage.bucketAccessControls.list
     *
     * @desc Retrieves ACL entries on the specified bucket.
     *
     * @alias storage.bucketAccessControls.list
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of a bucket.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/b/' + params.bucket + '/acl',
          method: 'GET'
        },
        params: params,
        requiredParams: ['bucket'],
        pathParams: ['bucket'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * storage.bucketAccessControls.patch
     *
     * @desc Updates an ACL entry on the specified bucket. This method supports patch semantics.
     *
     * @alias storage.bucketAccessControls.patch
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of a bucket.
     * @param  {string} params.entity - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/b/' + params.bucket + '/acl/' + params.entity,
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['bucket', 'entity'],
        pathParams: ['bucket', 'entity'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * storage.bucketAccessControls.update
     *
     * @desc Updates an ACL entry on the specified bucket.
     *
     * @alias storage.bucketAccessControls.update
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of a bucket.
     * @param  {string} params.entity - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/b/' + params.bucket + '/acl/' + params.entity,
          method: 'PUT'
        },
        params: params,
        requiredParams: ['bucket', 'entity'],
        pathParams: ['bucket', 'entity'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.buckets = {

    /**
     * storage.buckets.delete
     *
     * @desc Permanently deletes an empty bucket.
     *
     * @alias storage.buckets.delete
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of a bucket.
     * @param  {string=} params.ifMetagenerationMatch - If set, only deletes the bucket if its metageneration matches this value.
     * @param  {string=} params.ifMetagenerationNotMatch - If set, only deletes the bucket if its metageneration does not match this value.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/b/' + params.bucket,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['bucket'],
        pathParams: ['bucket'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * storage.buckets.get
     *
     * @desc Returns metadata for the specified bucket.
     *
     * @alias storage.buckets.get
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of a bucket.
     * @param  {string=} params.ifMetagenerationMatch - Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
     * @param  {string=} params.ifMetagenerationNotMatch - Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
     * @param  {string=} params.projection - Set of properties to return. Defaults to noAcl.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/b/' + params.bucket,
          method: 'GET'
        },
        params: params,
        requiredParams: ['bucket'],
        pathParams: ['bucket'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * storage.buckets.insert
     *
     * @desc Creates a new bucket.
     *
     * @alias storage.buckets.insert
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.predefinedAcl - Apply a predefined set of access controls to this bucket.
     * @param  {string} params.project - A valid API project identifier.
     * @param  {string=} params.projection - Set of properties to return. Defaults to noAcl, unless the bucket resource specifies acl or defaultObjectAcl properties, when it defaults to full.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/b',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * storage.buckets.list
     *
     * @desc Retrieves a list of buckets for a given project.
     *
     * @alias storage.buckets.list
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - Maximum number of buckets to return.
     * @param  {string=} params.pageToken - A previously-returned page token representing part of the larger set of results to view.
     * @param  {string} params.project - A valid API project identifier.
     * @param  {string=} params.projection - Set of properties to return. Defaults to noAcl.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/b',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * storage.buckets.patch
     *
     * @desc Updates a bucket. This method supports patch semantics.
     *
     * @alias storage.buckets.patch
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of a bucket.
     * @param  {string=} params.ifMetagenerationMatch - Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
     * @param  {string=} params.ifMetagenerationNotMatch - Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
     * @param  {string=} params.predefinedAcl - Apply a predefined set of access controls to this bucket.
     * @param  {string=} params.projection - Set of properties to return. Defaults to full.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/b/' + params.bucket,
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['bucket'],
        pathParams: ['bucket'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * storage.buckets.update
     *
     * @desc Updates a bucket.
     *
     * @alias storage.buckets.update
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of a bucket.
     * @param  {string=} params.ifMetagenerationMatch - Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
     * @param  {string=} params.ifMetagenerationNotMatch - Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
     * @param  {string=} params.predefinedAcl - Apply a predefined set of access controls to this bucket.
     * @param  {string=} params.projection - Set of properties to return. Defaults to full.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/b/' + params.bucket,
          method: 'PUT'
        },
        params: params,
        requiredParams: ['bucket'],
        pathParams: ['bucket'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.channels = {

    /**
     * storage.channels.stop
     *
     * @desc Stop watching resources through this channel
     *
     * @alias storage.channels.stop
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    stop: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/channels/stop',
          method: 'POST'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.defaultObjectAccessControls = {

    /**
     * storage.defaultObjectAccessControls.delete
     *
     * @desc Permanently deletes the default object ACL entry for the specified entity on the specified bucket.
     *
     * @alias storage.defaultObjectAccessControls.delete
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of a bucket.
     * @param  {string} params.entity - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/b/' + params.bucket + '/defaultObjectAcl/' + params.entity,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['bucket', 'entity'],
        pathParams: ['bucket', 'entity'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * storage.defaultObjectAccessControls.get
     *
     * @desc Returns the default object ACL entry for the specified entity on the specified bucket.
     *
     * @alias storage.defaultObjectAccessControls.get
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of a bucket.
     * @param  {string} params.entity - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/b/' + params.bucket + '/defaultObjectAcl/' + params.entity,
          method: 'GET'
        },
        params: params,
        requiredParams: ['bucket', 'entity'],
        pathParams: ['bucket', 'entity'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * storage.defaultObjectAccessControls.insert
     *
     * @desc Creates a new default object ACL entry on the specified bucket.
     *
     * @alias storage.defaultObjectAccessControls.insert
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of a bucket.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/b/' + params.bucket + '/defaultObjectAcl',
          method: 'POST'
        },
        params: params,
        requiredParams: ['bucket'],
        pathParams: ['bucket'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * storage.defaultObjectAccessControls.list
     *
     * @desc Retrieves default object ACL entries on the specified bucket.
     *
     * @alias storage.defaultObjectAccessControls.list
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of a bucket.
     * @param  {string=} params.ifMetagenerationMatch - If present, only return default ACL listing if the bucket's current metageneration matches this value.
     * @param  {string=} params.ifMetagenerationNotMatch - If present, only return default ACL listing if the bucket's current metageneration does not match the given value.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/b/' + params.bucket + '/defaultObjectAcl',
          method: 'GET'
        },
        params: params,
        requiredParams: ['bucket'],
        pathParams: ['bucket'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * storage.defaultObjectAccessControls.patch
     *
     * @desc Updates a default object ACL entry on the specified bucket. This method supports patch semantics.
     *
     * @alias storage.defaultObjectAccessControls.patch
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of a bucket.
     * @param  {string} params.entity - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/b/' + params.bucket + '/defaultObjectAcl/' + params.entity,
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['bucket', 'entity'],
        pathParams: ['bucket', 'entity'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * storage.defaultObjectAccessControls.update
     *
     * @desc Updates a default object ACL entry on the specified bucket.
     *
     * @alias storage.defaultObjectAccessControls.update
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of a bucket.
     * @param  {string} params.entity - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/b/' + params.bucket + '/defaultObjectAcl/' + params.entity,
          method: 'PUT'
        },
        params: params,
        requiredParams: ['bucket', 'entity'],
        pathParams: ['bucket', 'entity'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.objectAccessControls = {

    /**
     * storage.objectAccessControls.delete
     *
     * @desc Permanently deletes the ACL entry for the specified entity on the specified object.
     *
     * @alias storage.objectAccessControls.delete
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of a bucket.
     * @param  {string} params.entity - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param  {string=} params.generation - If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param  {string} params.object - Name of the object.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/b/' + params.bucket + '/o/' + params.object + '/acl/' + params.entity,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['bucket', 'object', 'entity'],
        pathParams: ['bucket', 'entity', 'object'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * storage.objectAccessControls.get
     *
     * @desc Returns the ACL entry for the specified entity on the specified object.
     *
     * @alias storage.objectAccessControls.get
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of a bucket.
     * @param  {string} params.entity - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param  {string=} params.generation - If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param  {string} params.object - Name of the object.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/b/' + params.bucket + '/o/' + params.object + '/acl/' + params.entity,
          method: 'GET'
        },
        params: params,
        requiredParams: ['bucket', 'object', 'entity'],
        pathParams: ['bucket', 'entity', 'object'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * storage.objectAccessControls.insert
     *
     * @desc Creates a new ACL entry on the specified object.
     *
     * @alias storage.objectAccessControls.insert
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of a bucket.
     * @param  {string=} params.generation - If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param  {string} params.object - Name of the object.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/b/' + params.bucket + '/o/' + params.object + '/acl',
          method: 'POST'
        },
        params: params,
        requiredParams: ['bucket', 'object'],
        pathParams: ['bucket', 'object'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * storage.objectAccessControls.list
     *
     * @desc Retrieves ACL entries on the specified object.
     *
     * @alias storage.objectAccessControls.list
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of a bucket.
     * @param  {string=} params.generation - If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param  {string} params.object - Name of the object.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/b/' + params.bucket + '/o/' + params.object + '/acl',
          method: 'GET'
        },
        params: params,
        requiredParams: ['bucket', 'object'],
        pathParams: ['bucket', 'object'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * storage.objectAccessControls.patch
     *
     * @desc Updates an ACL entry on the specified object. This method supports patch semantics.
     *
     * @alias storage.objectAccessControls.patch
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of a bucket.
     * @param  {string} params.entity - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param  {string=} params.generation - If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param  {string} params.object - Name of the object.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/b/' + params.bucket + '/o/' + params.object + '/acl/' + params.entity,
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['bucket', 'object', 'entity'],
        pathParams: ['bucket', 'entity', 'object'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * storage.objectAccessControls.update
     *
     * @desc Updates an ACL entry on the specified object.
     *
     * @alias storage.objectAccessControls.update
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of a bucket.
     * @param  {string} params.entity - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param  {string=} params.generation - If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param  {string} params.object - Name of the object.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/b/' + params.bucket + '/o/' + params.object + '/acl/' + params.entity,
          method: 'PUT'
        },
        params: params,
        requiredParams: ['bucket', 'object', 'entity'],
        pathParams: ['bucket', 'entity', 'object'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.objects = {

    /**
     * storage.objects.compose
     *
     * @desc Concatenates a list of existing objects into a new object in the same bucket.
     *
     * @alias storage.objects.compose
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.destinationBucket - Name of the bucket in which to store the new object.
     * @param  {string} params.destinationObject - Name of the new object.
     * @param  {string=} params.destinationPredefinedAcl - Apply a predefined set of access controls to the destination object.
     * @param  {string=} params.ifGenerationMatch - Makes the operation conditional on whether the object's current generation matches the given value.
     * @param  {string=} params.ifMetagenerationMatch - Makes the operation conditional on whether the object's current metageneration matches the given value.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    compose: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/b/' + params.destinationBucket + '/o/' + params.destinationObject + '/compose',
          method: 'POST'
        },
        params: params,
        requiredParams: ['destinationBucket', 'destinationObject'],
        pathParams: ['destinationBucket', 'destinationObject'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * storage.objects.copy
     *
     * @desc Copies an object to a specified location. Optionally overrides metadata.
     *
     * @alias storage.objects.copy
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.destinationBucket - Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
     * @param  {string} params.destinationObject - Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any.
     * @param  {string=} params.destinationPredefinedAcl - Apply a predefined set of access controls to the destination object.
     * @param  {string=} params.ifGenerationMatch - Makes the operation conditional on whether the destination object's current generation matches the given value.
     * @param  {string=} params.ifGenerationNotMatch - Makes the operation conditional on whether the destination object's current generation does not match the given value.
     * @param  {string=} params.ifMetagenerationMatch - Makes the operation conditional on whether the destination object's current metageneration matches the given value.
     * @param  {string=} params.ifMetagenerationNotMatch - Makes the operation conditional on whether the destination object's current metageneration does not match the given value.
     * @param  {string=} params.ifSourceGenerationMatch - Makes the operation conditional on whether the source object's generation matches the given value.
     * @param  {string=} params.ifSourceGenerationNotMatch - Makes the operation conditional on whether the source object's generation does not match the given value.
     * @param  {string=} params.ifSourceMetagenerationMatch - Makes the operation conditional on whether the source object's current metageneration matches the given value.
     * @param  {string=} params.ifSourceMetagenerationNotMatch - Makes the operation conditional on whether the source object's current metageneration does not match the given value.
     * @param  {string=} params.projection - Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
     * @param  {string} params.sourceBucket - Name of the bucket in which to find the source object.
     * @param  {string=} params.sourceGeneration - If present, selects a specific revision of the source object (as opposed to the latest version, the default).
     * @param  {string} params.sourceObject - Name of the source object.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    copy: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/b/' + params.sourceBucket + '/o/' + params.sourceObject + '/copyTo/b/' + params.destinationBucket + '/o/' + params.destinationObject,
          method: 'POST'
        },
        params: params,
        requiredParams: ['sourceBucket', 'sourceObject', 'destinationBucket', 'destinationObject'],
        pathParams: ['destinationBucket', 'destinationObject', 'sourceBucket', 'sourceObject'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * storage.objects.delete
     *
     * @desc Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
     *
     * @alias storage.objects.delete
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of the bucket in which the object resides.
     * @param  {string=} params.generation - If present, permanently deletes a specific revision of this object (as opposed to the latest version, the default).
     * @param  {string=} params.ifGenerationMatch - Makes the operation conditional on whether the object's current generation matches the given value.
     * @param  {string=} params.ifGenerationNotMatch - Makes the operation conditional on whether the object's current generation does not match the given value.
     * @param  {string=} params.ifMetagenerationMatch - Makes the operation conditional on whether the object's current metageneration matches the given value.
     * @param  {string=} params.ifMetagenerationNotMatch - Makes the operation conditional on whether the object's current metageneration does not match the given value.
     * @param  {string} params.object - Name of the object.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/b/' + params.bucket + '/o/' + params.object,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['bucket', 'object'],
        pathParams: ['bucket', 'object'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * storage.objects.get
     *
     * @desc Retrieves objects or their metadata.
     *
     * @alias storage.objects.get
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of the bucket in which the object resides.
     * @param  {string=} params.generation - If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param  {string=} params.ifGenerationMatch - Makes the operation conditional on whether the object's generation matches the given value.
     * @param  {string=} params.ifGenerationNotMatch - Makes the operation conditional on whether the object's generation does not match the given value.
     * @param  {string=} params.ifMetagenerationMatch - Makes the operation conditional on whether the object's current metageneration matches the given value.
     * @param  {string=} params.ifMetagenerationNotMatch - Makes the operation conditional on whether the object's current metageneration does not match the given value.
     * @param  {string} params.object - Name of the object.
     * @param  {string=} params.projection - Set of properties to return. Defaults to noAcl.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/b/' + params.bucket + '/o/' + params.object,
          method: 'GET'
        },
        params: params,
        requiredParams: ['bucket', 'object'],
        pathParams: ['bucket', 'object'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * storage.objects.insert
     *
     * @desc Stores a new object and metadata.
     *
     * @alias storage.objects.insert
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
     * @param  {string=} params.contentEncoding - If set, sets the contentEncoding property of the final object to this value. Setting this parameter is equivalent to setting the contentEncoding metadata property. This can be useful when uploading an object with uploadType=media to indicate the encoding of the content being uploaded.
     * @param  {string=} params.ifGenerationMatch - Makes the operation conditional on whether the object's current generation matches the given value.
     * @param  {string=} params.ifGenerationNotMatch - Makes the operation conditional on whether the object's current generation does not match the given value.
     * @param  {string=} params.ifMetagenerationMatch - Makes the operation conditional on whether the object's current metageneration matches the given value.
     * @param  {string=} params.ifMetagenerationNotMatch - Makes the operation conditional on whether the object's current metageneration does not match the given value.
     * @param  {string=} params.name - Name of the object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any.
     * @param  {string=} params.predefinedAcl - Apply a predefined set of access controls to this object.
     * @param  {string=} params.projection - Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
     * @param  {object} params.resource - Media resource metadata
     * @param  {object} params.media - Media object
     * @param  {string} params.media.mimeType - Media mime-type
     * @param  {string|object} params.media.body - Media body contents
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/b/' + params.bucket + '/o',
          method: 'POST'
        },
        params: params,
        mediaUrl: 'https://www.googleapis.com/upload/storage/v1/b/' + params.bucket + '/o',
        requiredParams: ['bucket'],
        pathParams: ['bucket'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * storage.objects.list
     *
     * @desc Retrieves a list of objects matching the criteria.
     *
     * @alias storage.objects.list
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of the bucket in which to look for objects.
     * @param  {string=} params.delimiter - Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
     * @param  {integer=} params.maxResults - Maximum number of items plus prefixes to return. As duplicate prefixes are omitted, fewer total results may be returned than requested.
     * @param  {string=} params.pageToken - A previously-returned page token representing part of the larger set of results to view.
     * @param  {string=} params.prefix - Filter results to objects whose names begin with this prefix.
     * @param  {string=} params.projection - Set of properties to return. Defaults to noAcl.
     * @param  {boolean=} params.versions - If true, lists all versions of a file as distinct results.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/b/' + params.bucket + '/o',
          method: 'GET'
        },
        params: params,
        requiredParams: ['bucket'],
        pathParams: ['bucket'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * storage.objects.patch
     *
     * @desc Updates an object's metadata. This method supports patch semantics.
     *
     * @alias storage.objects.patch
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of the bucket in which the object resides.
     * @param  {string=} params.generation - If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param  {string=} params.ifGenerationMatch - Makes the operation conditional on whether the object's current generation matches the given value.
     * @param  {string=} params.ifGenerationNotMatch - Makes the operation conditional on whether the object's current generation does not match the given value.
     * @param  {string=} params.ifMetagenerationMatch - Makes the operation conditional on whether the object's current metageneration matches the given value.
     * @param  {string=} params.ifMetagenerationNotMatch - Makes the operation conditional on whether the object's current metageneration does not match the given value.
     * @param  {string} params.object - Name of the object.
     * @param  {string=} params.predefinedAcl - Apply a predefined set of access controls to this object.
     * @param  {string=} params.projection - Set of properties to return. Defaults to full.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/b/' + params.bucket + '/o/' + params.object,
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['bucket', 'object'],
        pathParams: ['bucket', 'object'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * storage.objects.update
     *
     * @desc Updates an object's metadata.
     *
     * @alias storage.objects.update
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of the bucket in which the object resides.
     * @param  {string=} params.generation - If present, selects a specific revision of this object (as opposed to the latest version, the default).
     * @param  {string=} params.ifGenerationMatch - Makes the operation conditional on whether the object's current generation matches the given value.
     * @param  {string=} params.ifGenerationNotMatch - Makes the operation conditional on whether the object's current generation does not match the given value.
     * @param  {string=} params.ifMetagenerationMatch - Makes the operation conditional on whether the object's current metageneration matches the given value.
     * @param  {string=} params.ifMetagenerationNotMatch - Makes the operation conditional on whether the object's current metageneration does not match the given value.
     * @param  {string} params.object - Name of the object.
     * @param  {string=} params.predefinedAcl - Apply a predefined set of access controls to this object.
     * @param  {string=} params.projection - Set of properties to return. Defaults to full.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/b/' + params.bucket + '/o/' + params.object,
          method: 'PUT'
        },
        params: params,
        requiredParams: ['bucket', 'object'],
        pathParams: ['bucket', 'object'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * storage.objects.watchAll
     *
     * @desc Watch for changes on all objects in a bucket.
     *
     * @alias storage.objects.watchAll
     * @memberOf! storage(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of the bucket in which to look for objects.
     * @param  {string=} params.delimiter - Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
     * @param  {integer=} params.maxResults - Maximum number of items plus prefixes to return. As duplicate prefixes are omitted, fewer total results may be returned than requested.
     * @param  {string=} params.pageToken - A previously-returned page token representing part of the larger set of results to view.
     * @param  {string=} params.prefix - Filter results to objects whose names begin with this prefix.
     * @param  {string=} params.projection - Set of properties to return. Defaults to noAcl.
     * @param  {boolean=} params.versions - If true, lists all versions of a file as distinct results.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    watchAll: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1/b/' + params.bucket + '/o/watch',
          method: 'POST'
        },
        params: params,
        requiredParams: ['bucket'],
        pathParams: ['bucket'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Storage object
 * @type Storage
 */
module.exports = Storage;