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
 * Compute Accounts API
 *
 * @classdesc API for the Google Compute Accounts service.
 * @namespace computeaccounts
 * @version  alpha
 * @variation alpha
 * @this Computeaccounts
 * @param {object=} options Options for Computeaccounts
 */
function Computeaccounts(options) {

  var self = this;
  this._options = options || {};

  this.globalAccountsOperations = {

    /**
     * computeaccounts.globalAccountsOperations.delete
     *
     * @desc Deletes the specified operation resource.
     *
     * @alias computeaccounts.globalAccountsOperations.delete
     * @memberOf! computeaccounts(alpha)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.operation - Name of the operation resource to delete.
     * @param  {string} params.project - Project ID for this request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/computeaccounts/alpha/projects/{project}/global/operations/{operation}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'operation'],
        pathParams: ['operation', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * computeaccounts.globalAccountsOperations.get
     *
     * @desc Retrieves the specified operation resource.
     *
     * @alias computeaccounts.globalAccountsOperations.get
     * @memberOf! computeaccounts(alpha)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.operation - Name of the operation resource to return.
     * @param  {string} params.project - Project ID for this request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/computeaccounts/alpha/projects/{project}/global/operations/{operation}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'operation'],
        pathParams: ['operation', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * computeaccounts.globalAccountsOperations.list
     *
     * @desc Retrieves the list of operation resources contained within the specified project.
     *
     * @alias computeaccounts.globalAccountsOperations.list
     * @memberOf! computeaccounts(alpha)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Project ID for this request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/computeaccounts/alpha/projects/{project}/global/operations',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.groups = {

    /**
     * computeaccounts.groups.addMember
     *
     * @desc Adds users to the specified group.
     *
     * @alias computeaccounts.groups.addMember
     * @memberOf! computeaccounts(alpha)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.groupName - Name of the group for this request.
     * @param  {string} params.project - Project ID for this request.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    addMember: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/computeaccounts/alpha/projects/{project}/global/groups/{groupName}/addMember',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'groupName'],
        pathParams: ['groupName', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * computeaccounts.groups.delete
     *
     * @desc Deletes the specified group resource.
     *
     * @alias computeaccounts.groups.delete
     * @memberOf! computeaccounts(alpha)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.groupName - Name of the group resource to delete.
     * @param  {string} params.project - Project ID for this request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/computeaccounts/alpha/projects/{project}/global/groups/{groupName}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'groupName'],
        pathParams: ['groupName', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * computeaccounts.groups.get
     *
     * @desc Returns the specified group resource.
     *
     * @alias computeaccounts.groups.get
     * @memberOf! computeaccounts(alpha)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.groupName - Name of the group resource to return.
     * @param  {string} params.project - Project ID for this request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/computeaccounts/alpha/projects/{project}/global/groups/{groupName}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'groupName'],
        pathParams: ['groupName', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * computeaccounts.groups.insert
     *
     * @desc Creates a group resource in the specified project using the data included in the request.
     *
     * @alias computeaccounts.groups.insert
     * @memberOf! computeaccounts(alpha)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Project ID for this request.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/computeaccounts/alpha/projects/{project}/global/groups',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * computeaccounts.groups.list
     *
     * @desc Retrieves the list of groups contained within the specified project.
     *
     * @alias computeaccounts.groups.list
     * @memberOf! computeaccounts(alpha)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Project ID for this request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/computeaccounts/alpha/projects/{project}/global/groups',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * computeaccounts.groups.removeMember
     *
     * @desc Removes users from the specified group.
     *
     * @alias computeaccounts.groups.removeMember
     * @memberOf! computeaccounts(alpha)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.groupName - Name of the group for this request.
     * @param  {string} params.project - Project ID for this request.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    removeMember: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/computeaccounts/alpha/projects/{project}/global/groups/{groupName}/removeMember',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'groupName'],
        pathParams: ['groupName', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.linux = {

    /**
     * computeaccounts.linux.getAuthorizedKeysView
     *
     * @desc Returns the AuthorizedKeysView of the specified user.
     *
     * @alias computeaccounts.linux.getAuthorizedKeysView
     * @memberOf! computeaccounts(alpha)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.instance - The fully-qualified URL of the instance requesting the view.
     * @param  {string} params.project - Project ID for this request.
     * @param  {string} params.user - Username of the AuthorizedKeysView to return.
     * @param  {string} params.zone - Name of the zone for this request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getAuthorizedKeysView: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/computeaccounts/alpha/projects/{project}/zones/{zone}/authorizedKeysView/{user}',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'user', 'instance'],
        pathParams: ['project', 'user', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * computeaccounts.linux.getLinuxAccountViews
     *
     * @desc Retrieves the Linux views for an instance contained within the specified project.
     *
     * @alias computeaccounts.linux.getLinuxAccountViews
     * @memberOf! computeaccounts(alpha)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {string} params.instance - The fully-qualified URL of the instance requesting the views.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Project ID for this request.
     * @param  {string=} params.user - If provided, the user whose login is triggering an immediate refresh of the views.
     * @param  {string} params.zone - Name of the zone for this request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getLinuxAccountViews: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/computeaccounts/alpha/projects/{project}/zones/{zone}/linuxAccountViews',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.users = {

    /**
     * computeaccounts.users.addPublicKey
     *
     * @desc Adds a public key to the specified user using the data included in the request.
     *
     * @alias computeaccounts.users.addPublicKey
     * @memberOf! computeaccounts(alpha)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Project ID for this request.
     * @param  {string} params.user - Name of the user for this request.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    addPublicKey: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/computeaccounts/alpha/projects/{project}/global/users/{user}/addPublicKey',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'user'],
        pathParams: ['project', 'user'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * computeaccounts.users.delete
     *
     * @desc Deletes the specified user resource.
     *
     * @alias computeaccounts.users.delete
     * @memberOf! computeaccounts(alpha)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Project ID for this request.
     * @param  {string} params.user - Name of the user resource to delete.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/computeaccounts/alpha/projects/{project}/global/users/{user}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'user'],
        pathParams: ['project', 'user'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * computeaccounts.users.get
     *
     * @desc Returns the specified user resource.
     *
     * @alias computeaccounts.users.get
     * @memberOf! computeaccounts(alpha)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Project ID for this request.
     * @param  {string} params.user - Name of the user resource to return.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/computeaccounts/alpha/projects/{project}/global/users/{user}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'user'],
        pathParams: ['project', 'user'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * computeaccounts.users.insert
     *
     * @desc Creates a user resource in the specified project using the data included in the request.
     *
     * @alias computeaccounts.users.insert
     * @memberOf! computeaccounts(alpha)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Project ID for this request.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/computeaccounts/alpha/projects/{project}/global/users',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * computeaccounts.users.list
     *
     * @desc Retrieves the list of users contained within the specified project.
     *
     * @alias computeaccounts.users.list
     * @memberOf! computeaccounts(alpha)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.filter - Optional. Filter expression for filtering listed resources.
     * @param  {integer=} params.maxResults - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param  {string=} params.pageToken - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param  {string} params.project - Project ID for this request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/computeaccounts/alpha/projects/{project}/global/users',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * computeaccounts.users.removePublicKey
     *
     * @desc Removes the specified public key from the user.
     *
     * @alias computeaccounts.users.removePublicKey
     * @memberOf! computeaccounts(alpha)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.fingerprint - The fingerprint of the public key to delete. Public keys are identified by their fingerprint, which is defined by RFC4716 to be the MD5 digest of the public key.
     * @param  {string} params.project - Project ID for this request.
     * @param  {string} params.user - Name of the user for this request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    removePublicKey: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/computeaccounts/alpha/projects/{project}/global/users/{user}/removePublicKey',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'user', 'fingerprint'],
        pathParams: ['project', 'user'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Computeaccounts object
 * @type Computeaccounts
 */
module.exports = Computeaccounts;