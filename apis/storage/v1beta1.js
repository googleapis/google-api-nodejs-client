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
 * Cloud Storage API
 *
 * @classdesc Lets you store and retrieve potentially-large, immutable data objects.
 * @namespace storage
 * @version  v1beta1
 * @variation v1beta1
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
     * @desc Deletes the ACL entry for the specified entity on the specified bucket.
     *
     * @alias storage.bucketAccessControls.delete
     * @memberOf! storage(v1beta1)
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
          url: 'https://www.googleapis.com/storage/v1beta1/b/{bucket}/acl/{entity}',
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
     * @memberOf! storage(v1beta1)
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
          url: 'https://www.googleapis.com/storage/v1beta1/b/{bucket}/acl/{entity}',
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
     * @memberOf! storage(v1beta1)
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
          url: 'https://www.googleapis.com/storage/v1beta1/b/{bucket}/acl',
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
     * @memberOf! storage(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of a bucket.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1beta1/b/{bucket}/acl',
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
     * @memberOf! storage(v1beta1)
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
          url: 'https://www.googleapis.com/storage/v1beta1/b/{bucket}/acl/{entity}',
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
     * @memberOf! storage(v1beta1)
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
          url: 'https://www.googleapis.com/storage/v1beta1/b/{bucket}/acl/{entity}',
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
     * @desc Deletes an empty bucket.
     *
     * @alias storage.buckets.delete
     * @memberOf! storage(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of a bucket.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1beta1/b/{bucket}',
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
     * @memberOf! storage(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of a bucket.
     * @param  {string=} params.projection - Set of properties to return. Defaults to no_acl.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1beta1/b/{bucket}',
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
     * @memberOf! storage(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.projection - Set of properties to return. Defaults to no_acl, unless the bucket resource specifies acl or defaultObjectAcl properties, when it defaults to full.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1beta1/b',
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
     * storage.buckets.list
     *
     * @desc Retrieves a list of buckets for a given project.
     *
     * @alias storage.buckets.list
     * @memberOf! storage(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.max-results - Maximum number of buckets to return.
     * @param  {string=} params.pageToken - A previously-returned page token representing part of the larger set of results to view.
     * @param  {string} params.projectId - A valid API project identifier.
     * @param  {string=} params.projection - Set of properties to return. Defaults to no_acl.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1beta1/b',
          method: 'GET'
        },
        params: params,
        requiredParams: ['projectId'],
        pathParams: [],
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
     * @memberOf! storage(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of a bucket.
     * @param  {string=} params.projection - Set of properties to return. Defaults to full.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1beta1/b/{bucket}',
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
     * @memberOf! storage(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of a bucket.
     * @param  {string=} params.projection - Set of properties to return. Defaults to full.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1beta1/b/{bucket}',
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

  this.objectAccessControls = {

    /**
     * storage.objectAccessControls.delete
     *
     * @desc Deletes the ACL entry for the specified entity on the specified object.
     *
     * @alias storage.objectAccessControls.delete
     * @memberOf! storage(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of a bucket.
     * @param  {string} params.entity - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param  {string} params.object - Name of the object.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1beta1/b/{bucket}/o/{object}/acl/{entity}',
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
     * @memberOf! storage(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of a bucket.
     * @param  {string} params.entity - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param  {string} params.object - Name of the object.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1beta1/b/{bucket}/o/{object}/acl/{entity}',
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
     * @memberOf! storage(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of a bucket.
     * @param  {string} params.object - Name of the object.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1beta1/b/{bucket}/o/{object}/acl',
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
     * @memberOf! storage(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of a bucket.
     * @param  {string} params.object - Name of the object.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1beta1/b/{bucket}/o/{object}/acl',
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
     * @memberOf! storage(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of a bucket.
     * @param  {string} params.entity - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param  {string} params.object - Name of the object.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1beta1/b/{bucket}/o/{object}/acl/{entity}',
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
     * @memberOf! storage(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of a bucket.
     * @param  {string} params.entity - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     * @param  {string} params.object - Name of the object.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1beta1/b/{bucket}/o/{object}/acl/{entity}',
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
     * storage.objects.delete
     *
     * @desc Deletes data blobs and associated metadata.
     *
     * @alias storage.objects.delete
     * @memberOf! storage(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of the bucket in which the object resides.
     * @param  {string} params.object - Name of the object.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1beta1/b/{bucket}/o/{object}',
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
     * @desc Retrieves objects or their associated metadata.
     *
     * @alias storage.objects.get
     * @memberOf! storage(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of the bucket in which the object resides.
     * @param  {string} params.object - Name of the object.
     * @param  {string=} params.projection - Set of properties to return. Defaults to no_acl.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1beta1/b/{bucket}/o/{object}',
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
     * @desc Stores new data blobs and associated metadata.
     *
     * @alias storage.objects.insert
     * @memberOf! storage(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
     * @param  {string=} params.name - Name of the object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any.
     * @param  {string=} params.projection - Set of properties to return. Defaults to no_acl, unless the object resource specifies the acl property, when it defaults to full.
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
          url: 'https://www.googleapis.com/storage/v1beta1/b/{bucket}/o',
          method: 'POST'
        },
        params: params,
        mediaUrl: 'https://www.googleapis.com/upload/storage/v1beta1/b/{bucket}/o',
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
     * @memberOf! storage(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of the bucket in which to look for objects.
     * @param  {string=} params.delimiter - Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
     * @param  {integer=} params.max-results - Maximum number of items plus prefixes to return. As duplicate prefixes are omitted, fewer total results may be returned than requested.
     * @param  {string=} params.pageToken - A previously-returned page token representing part of the larger set of results to view.
     * @param  {string=} params.prefix - Filter results to objects whose names begin with this prefix.
     * @param  {string=} params.projection - Set of properties to return. Defaults to no_acl.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1beta1/b/{bucket}/o',
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
     * @desc Updates a data blob's associated metadata. This method supports patch semantics.
     *
     * @alias storage.objects.patch
     * @memberOf! storage(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of the bucket in which the object resides.
     * @param  {string} params.object - Name of the object.
     * @param  {string=} params.projection - Set of properties to return. Defaults to full.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1beta1/b/{bucket}/o/{object}',
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
     * @desc Updates a data blob's associated metadata.
     *
     * @alias storage.objects.update
     * @memberOf! storage(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.bucket - Name of the bucket in which the object resides.
     * @param  {string} params.object - Name of the object.
     * @param  {string=} params.projection - Set of properties to return. Defaults to full.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/storage/v1beta1/b/{bucket}/o/{object}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['bucket', 'object'],
        pathParams: ['bucket', 'object'],
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