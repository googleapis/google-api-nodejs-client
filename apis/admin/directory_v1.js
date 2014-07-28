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
 * Admin Directory API
 *
 * @classdesc The Admin SDK Directory API lets you view and manage enterprise resources such as users and groups, administrative notifications, security features, and more.
 * @namespace admin
 * @version  directory_v1
 * @variation directory_v1
 * @this Admin
 * @param {object=} options Options for Admin
 */
function Admin(options) {

  var self = this;
  this._options = options || {};

  this.asps = {

    /**
     * directory.asps.delete
     *
     * @desc Delete an ASP issued by a user.
     *
     * @alias directory.asps.delete
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.codeId - The unique ID of the ASP to be deleted.
     * @param  {string} params.userKey - Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users/' + params.userKey + '/asps/' + params.codeId,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['userKey', 'codeId'],
        pathParams: ['codeId', 'userKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.asps.get
     *
     * @desc Get information about an ASP issued by a user.
     *
     * @alias directory.asps.get
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.codeId - The unique ID of the ASP.
     * @param  {string} params.userKey - Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users/' + params.userKey + '/asps/' + params.codeId,
          method: 'GET'
        },
        params: params,
        requiredParams: ['userKey', 'codeId'],
        pathParams: ['codeId', 'userKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.asps.list
     *
     * @desc List the ASPs issued by a user.
     *
     * @alias directory.asps.list
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.userKey - Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users/' + params.userKey + '/asps',
          method: 'GET'
        },
        params: params,
        requiredParams: ['userKey'],
        pathParams: ['userKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.channels = {

    /**
     * admin.channels.stop
     *
     * @desc Stop watching resources through this channel
     *
     * @alias admin.channels.stop
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    stop: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1//admin/directory_v1/channels/stop',
          method: 'POST'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.chromeosdevices = {

    /**
     * directory.chromeosdevices.get
     *
     * @desc Retrieve Chrome OS Device
     *
     * @alias directory.chromeosdevices.get
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.customerId - Immutable id of the Google Apps account
     * @param  {string} params.deviceId - Immutable id of Chrome OS Device
     * @param  {string=} params.projection - Restrict information returned to a set of selected fields.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/' + params.customerId + '/devices/chromeos/' + params.deviceId,
          method: 'GET'
        },
        params: params,
        requiredParams: ['customerId', 'deviceId'],
        pathParams: ['customerId', 'deviceId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.chromeosdevices.list
     *
     * @desc Retrieve all Chrome OS Devices of a customer (paginated)
     *
     * @alias directory.chromeosdevices.list
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.customerId - Immutable id of the Google Apps account
     * @param  {integer=} params.maxResults - Maximum number of results to return. Default is 100
     * @param  {string=} params.orderBy - Column to use for sorting results
     * @param  {string=} params.pageToken - Token to specify next page in the list
     * @param  {string=} params.projection - Restrict information returned to a set of selected fields.
     * @param  {string=} params.query - Search string in the format given at http://support.google.com/chromeos/a/bin/answer.py?hl=en&answer=1698333
     * @param  {string=} params.sortOrder - Whether to return results in ascending or descending order. Only of use when orderBy is also used
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/' + params.customerId + '/devices/chromeos',
          method: 'GET'
        },
        params: params,
        requiredParams: ['customerId'],
        pathParams: ['customerId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.chromeosdevices.patch
     *
     * @desc Update Chrome OS Device. This method supports patch semantics.
     *
     * @alias directory.chromeosdevices.patch
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.customerId - Immutable id of the Google Apps account
     * @param  {string} params.deviceId - Immutable id of Chrome OS Device
     * @param  {string=} params.projection - Restrict information returned to a set of selected fields.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/' + params.customerId + '/devices/chromeos/' + params.deviceId,
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['customerId', 'deviceId'],
        pathParams: ['customerId', 'deviceId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.chromeosdevices.update
     *
     * @desc Update Chrome OS Device
     *
     * @alias directory.chromeosdevices.update
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.customerId - Immutable id of the Google Apps account
     * @param  {string} params.deviceId - Immutable id of Chrome OS Device
     * @param  {string=} params.projection - Restrict information returned to a set of selected fields.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/' + params.customerId + '/devices/chromeos/' + params.deviceId,
          method: 'PUT'
        },
        params: params,
        requiredParams: ['customerId', 'deviceId'],
        pathParams: ['customerId', 'deviceId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.groups = {

    /**
     * directory.groups.delete
     *
     * @desc Delete Group
     *
     * @alias directory.groups.delete
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.groupKey - Email or immutable Id of the group
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/groups/' + params.groupKey,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['groupKey'],
        pathParams: ['groupKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.groups.get
     *
     * @desc Retrieve Group
     *
     * @alias directory.groups.get
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.groupKey - Email or immutable Id of the group
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/groups/' + params.groupKey,
          method: 'GET'
        },
        params: params,
        requiredParams: ['groupKey'],
        pathParams: ['groupKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.groups.insert
     *
     * @desc Create Group
     *
     * @alias directory.groups.insert
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/groups',
          method: 'POST'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.groups.list
     *
     * @desc Retrieve all groups in a domain (paginated)
     *
     * @alias directory.groups.list
     * @memberOf! admin(directory_v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.customer - Immutable id of the Google Apps account. In case of multi-domain, to fetch all groups for a customer, fill this field instead of domain.
     * @param  {string=} params.domain - Name of the domain. Fill this field to get groups from only this domain. To return all groups in a multi-domain fill customer field instead.
     * @param  {integer=} params.maxResults - Maximum number of results to return. Default is 200
     * @param  {string=} params.pageToken - Token to specify next page in the list
     * @param  {string=} params.userKey - Email or immutable Id of the user if only those groups are to be listed, the given user is a member of. If Id, it should match with id of user object
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/groups',
          method: 'GET'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.groups.patch
     *
     * @desc Update Group. This method supports patch semantics.
     *
     * @alias directory.groups.patch
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.groupKey - Email or immutable Id of the group. If Id, it should match with id of group object
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/groups/' + params.groupKey,
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['groupKey'],
        pathParams: ['groupKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.groups.update
     *
     * @desc Update Group
     *
     * @alias directory.groups.update
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.groupKey - Email or immutable Id of the group. If Id, it should match with id of group object
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/groups/' + params.groupKey,
          method: 'PUT'
        },
        params: params,
        requiredParams: ['groupKey'],
        pathParams: ['groupKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    aliases: {

      /**
       * directory.groups.aliases.delete
       *
       * @desc Remove a alias for the group
       *
       * @alias directory.groups.aliases.delete
       * @memberOf! admin(directory_v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.alias - The alias to be removed
       * @param  {string} params.groupKey - Email or immutable Id of the group
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/admin/directory/v1/groups/' + params.groupKey + '/aliases/' + params.alias,
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['groupKey', 'alias'],
          pathParams: ['alias', 'groupKey'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * directory.groups.aliases.insert
       *
       * @desc Add a alias for the group
       *
       * @alias directory.groups.aliases.insert
       * @memberOf! admin(directory_v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.groupKey - Email or immutable Id of the group
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      insert: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/admin/directory/v1/groups/' + params.groupKey + '/aliases',
            method: 'POST'
          },
          params: params,
          requiredParams: ['groupKey'],
          pathParams: ['groupKey'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * directory.groups.aliases.list
       *
       * @desc List all aliases for a group
       *
       * @alias directory.groups.aliases.list
       * @memberOf! admin(directory_v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.groupKey - Email or immutable Id of the group
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/admin/directory/v1/groups/' + params.groupKey + '/aliases',
            method: 'GET'
          },
          params: params,
          requiredParams: ['groupKey'],
          pathParams: ['groupKey'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  this.members = {

    /**
     * directory.members.delete
     *
     * @desc Remove membership.
     *
     * @alias directory.members.delete
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.groupKey - Email or immutable Id of the group
     * @param  {string} params.memberKey - Email or immutable Id of the member
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/groups/' + params.groupKey + '/members/' + params.memberKey,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['groupKey', 'memberKey'],
        pathParams: ['groupKey', 'memberKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.members.get
     *
     * @desc Retrieve Group Member
     *
     * @alias directory.members.get
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.groupKey - Email or immutable Id of the group
     * @param  {string} params.memberKey - Email or immutable Id of the member
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/groups/' + params.groupKey + '/members/' + params.memberKey,
          method: 'GET'
        },
        params: params,
        requiredParams: ['groupKey', 'memberKey'],
        pathParams: ['groupKey', 'memberKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.members.insert
     *
     * @desc Add user to the specified group.
     *
     * @alias directory.members.insert
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.groupKey - Email or immutable Id of the group
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/groups/' + params.groupKey + '/members',
          method: 'POST'
        },
        params: params,
        requiredParams: ['groupKey'],
        pathParams: ['groupKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.members.list
     *
     * @desc Retrieve all members in a group (paginated)
     *
     * @alias directory.members.list
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.groupKey - Email or immutable Id of the group
     * @param  {integer=} params.maxResults - Maximum number of results to return. Default is 200
     * @param  {string=} params.pageToken - Token to specify next page in the list
     * @param  {string=} params.roles - Comma separated role values to filter list results on.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/groups/' + params.groupKey + '/members',
          method: 'GET'
        },
        params: params,
        requiredParams: ['groupKey'],
        pathParams: ['groupKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.members.patch
     *
     * @desc Update membership of a user in the specified group. This method supports patch semantics.
     *
     * @alias directory.members.patch
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.groupKey - Email or immutable Id of the group. If Id, it should match with id of group object
     * @param  {string} params.memberKey - Email or immutable Id of the user. If Id, it should match with id of member object
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/groups/' + params.groupKey + '/members/' + params.memberKey,
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['groupKey', 'memberKey'],
        pathParams: ['groupKey', 'memberKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.members.update
     *
     * @desc Update membership of a user in the specified group.
     *
     * @alias directory.members.update
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.groupKey - Email or immutable Id of the group. If Id, it should match with id of group object
     * @param  {string} params.memberKey - Email or immutable Id of the user. If Id, it should match with id of member object
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/groups/' + params.groupKey + '/members/' + params.memberKey,
          method: 'PUT'
        },
        params: params,
        requiredParams: ['groupKey', 'memberKey'],
        pathParams: ['groupKey', 'memberKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.mobiledevices = {

    /**
     * directory.mobiledevices.action
     *
     * @desc Take action on Mobile Device
     *
     * @alias directory.mobiledevices.action
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.customerId - Immutable id of the Google Apps account
     * @param  {string} params.resourceId - Immutable id of Mobile Device
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    action: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/' + params.customerId + '/devices/mobile/' + params.resourceId + '/action',
          method: 'POST'
        },
        params: params,
        requiredParams: ['customerId', 'resourceId'],
        pathParams: ['customerId', 'resourceId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.mobiledevices.delete
     *
     * @desc Delete Mobile Device
     *
     * @alias directory.mobiledevices.delete
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.customerId - Immutable id of the Google Apps account
     * @param  {string} params.resourceId - Immutable id of Mobile Device
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/' + params.customerId + '/devices/mobile/' + params.resourceId,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['customerId', 'resourceId'],
        pathParams: ['customerId', 'resourceId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.mobiledevices.get
     *
     * @desc Retrieve Mobile Device
     *
     * @alias directory.mobiledevices.get
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.customerId - Immutable id of the Google Apps account
     * @param  {string=} params.projection - Restrict information returned to a set of selected fields.
     * @param  {string} params.resourceId - Immutable id of Mobile Device
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/' + params.customerId + '/devices/mobile/' + params.resourceId,
          method: 'GET'
        },
        params: params,
        requiredParams: ['customerId', 'resourceId'],
        pathParams: ['customerId', 'resourceId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.mobiledevices.list
     *
     * @desc Retrieve all Mobile Devices of a customer (paginated)
     *
     * @alias directory.mobiledevices.list
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.customerId - Immutable id of the Google Apps account
     * @param  {integer=} params.maxResults - Maximum number of results to return. Default is 100
     * @param  {string=} params.orderBy - Column to use for sorting results
     * @param  {string=} params.pageToken - Token to specify next page in the list
     * @param  {string=} params.projection - Restrict information returned to a set of selected fields.
     * @param  {string=} params.query - Search string in the format given at http://support.google.com/a/bin/answer.py?hl=en&answer=1408863#search
     * @param  {string=} params.sortOrder - Whether to return results in ascending or descending order. Only of use when orderBy is also used
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/' + params.customerId + '/devices/mobile',
          method: 'GET'
        },
        params: params,
        requiredParams: ['customerId'],
        pathParams: ['customerId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.notifications = {

    /**
     * directory.notifications.delete
     *
     * @desc Deletes a notification
     *
     * @alias directory.notifications.delete
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.customer - The unique ID for the customer's Google account. The customerId is also returned as part of the Users resource.
     * @param  {string} params.notificationId - The unique ID of the notification.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/' + params.customer + '/notifications/' + params.notificationId,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['customer', 'notificationId'],
        pathParams: ['customer', 'notificationId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.notifications.get
     *
     * @desc Retrieves a notification.
     *
     * @alias directory.notifications.get
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.customer - The unique ID for the customer's Google account. The customerId is also returned as part of the Users resource.
     * @param  {string} params.notificationId - The unique ID of the notification.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/' + params.customer + '/notifications/' + params.notificationId,
          method: 'GET'
        },
        params: params,
        requiredParams: ['customer', 'notificationId'],
        pathParams: ['customer', 'notificationId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.notifications.list
     *
     * @desc Retrieves a list of notifications.
     *
     * @alias directory.notifications.list
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.customer - The unique ID for the customer's Google account.
     * @param  {string=} params.language - The ISO 639-1 code of the language notifications are returned in. The default is English (en).
     * @param  {integer=} params.maxResults - Maximum number of notifications to return per page. The default is 100.
     * @param  {string=} params.pageToken - The token to specify the page of results to retrieve.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/' + params.customer + '/notifications',
          method: 'GET'
        },
        params: params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.notifications.patch
     *
     * @desc Updates a notification. This method supports patch semantics.
     *
     * @alias directory.notifications.patch
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.customer - The unique ID for the customer's Google account.
     * @param  {string} params.notificationId - The unique ID of the notification.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/' + params.customer + '/notifications/' + params.notificationId,
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['customer', 'notificationId'],
        pathParams: ['customer', 'notificationId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.notifications.update
     *
     * @desc Updates a notification.
     *
     * @alias directory.notifications.update
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.customer - The unique ID for the customer's Google account.
     * @param  {string} params.notificationId - The unique ID of the notification.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/' + params.customer + '/notifications/' + params.notificationId,
          method: 'PUT'
        },
        params: params,
        requiredParams: ['customer', 'notificationId'],
        pathParams: ['customer', 'notificationId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.orgunits = {

    /**
     * directory.orgunits.delete
     *
     * @desc Remove Organization Unit
     *
     * @alias directory.orgunits.delete
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.customerId - Immutable id of the Google Apps account
     * @param  {string} params.orgUnitPath - Full path of the organization unit
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/' + params.customerId + '/orgunits' + params.orgUnitPath,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['customerId', 'orgUnitPath'],
        pathParams: ['customerId', 'orgUnitPath'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.orgunits.get
     *
     * @desc Retrieve Organization Unit
     *
     * @alias directory.orgunits.get
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.customerId - Immutable id of the Google Apps account
     * @param  {string} params.orgUnitPath - Full path of the organization unit
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/' + params.customerId + '/orgunits' + params.orgUnitPath,
          method: 'GET'
        },
        params: params,
        requiredParams: ['customerId', 'orgUnitPath'],
        pathParams: ['customerId', 'orgUnitPath'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.orgunits.insert
     *
     * @desc Add Organization Unit
     *
     * @alias directory.orgunits.insert
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.customerId - Immutable id of the Google Apps account
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/' + params.customerId + '/orgunits',
          method: 'POST'
        },
        params: params,
        requiredParams: ['customerId'],
        pathParams: ['customerId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.orgunits.list
     *
     * @desc Retrieve all Organization Units
     *
     * @alias directory.orgunits.list
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.customerId - Immutable id of the Google Apps account
     * @param  {string=} params.orgUnitPath - the URL-encoded organization unit
     * @param  {string=} params.type - Whether to return all sub-organizations or just immediate children
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/' + params.customerId + '/orgunits',
          method: 'GET'
        },
        params: params,
        requiredParams: ['customerId'],
        pathParams: ['customerId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.orgunits.patch
     *
     * @desc Update Organization Unit. This method supports patch semantics.
     *
     * @alias directory.orgunits.patch
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.customerId - Immutable id of the Google Apps account
     * @param  {string} params.orgUnitPath - Full path of the organization unit
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/' + params.customerId + '/orgunits' + params.orgUnitPath,
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['customerId', 'orgUnitPath'],
        pathParams: ['customerId', 'orgUnitPath'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.orgunits.update
     *
     * @desc Update Organization Unit
     *
     * @alias directory.orgunits.update
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.customerId - Immutable id of the Google Apps account
     * @param  {string} params.orgUnitPath - Full path of the organization unit
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/' + params.customerId + '/orgunits' + params.orgUnitPath,
          method: 'PUT'
        },
        params: params,
        requiredParams: ['customerId', 'orgUnitPath'],
        pathParams: ['customerId', 'orgUnitPath'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.tokens = {

    /**
     * directory.tokens.delete
     *
     * @desc Delete all access tokens issued by a user for an application.
     *
     * @alias directory.tokens.delete
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.clientId - The Client ID of the application the token is issued to.
     * @param  {string} params.userKey - Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users/' + params.userKey + '/tokens/' + params.clientId,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['userKey', 'clientId'],
        pathParams: ['clientId', 'userKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.tokens.get
     *
     * @desc Get information about an access token issued by a user.
     *
     * @alias directory.tokens.get
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.clientId - The Client ID of the application the token is issued to.
     * @param  {string} params.userKey - Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users/' + params.userKey + '/tokens/' + params.clientId,
          method: 'GET'
        },
        params: params,
        requiredParams: ['userKey', 'clientId'],
        pathParams: ['clientId', 'userKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.tokens.list
     *
     * @desc Returns the set of tokens specified user has issued to 3rd party applications.
     *
     * @alias directory.tokens.list
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.userKey - Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users/' + params.userKey + '/tokens',
          method: 'GET'
        },
        params: params,
        requiredParams: ['userKey'],
        pathParams: ['userKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.users = {

    /**
     * directory.users.delete
     *
     * @desc Delete user
     *
     * @alias directory.users.delete
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.userKey - Email or immutable Id of the user
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users/' + params.userKey,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['userKey'],
        pathParams: ['userKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.users.get
     *
     * @desc retrieve user
     *
     * @alias directory.users.get
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.userKey - Email or immutable Id of the user
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users/' + params.userKey,
          method: 'GET'
        },
        params: params,
        requiredParams: ['userKey'],
        pathParams: ['userKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.users.insert
     *
     * @desc create user.
     *
     * @alias directory.users.insert
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users',
          method: 'POST'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.users.list
     *
     * @desc Retrieve either deleted users or all users in a domain (paginated)
     *
     * @alias directory.users.list
     * @memberOf! admin(directory_v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.customer - Immutable id of the Google Apps account. In case of multi-domain, to fetch all users for a customer, fill this field instead of domain.
     * @param  {string=} params.domain - Name of the domain. Fill this field to get users from only this domain. To return all users in a multi-domain fill customer field instead.
     * @param  {string=} params.event - Event on which subscription is intended (if subscribing)
     * @param  {integer=} params.maxResults - Maximum number of results to return. Default is 100. Max allowed is 500
     * @param  {string=} params.orderBy - Column to use for sorting results
     * @param  {string=} params.pageToken - Token to specify next page in the list
     * @param  {string=} params.query - Query string search. Should be of the form "" where field can be any of supported fields, operators can be one of '=' for exact match or ':' for prefix match. For prefix match, the value should always be followed by a *.
     * @param  {string=} params.showDeleted - If set to true retrieves the list of deleted users. Default is false
     * @param  {string=} params.sortOrder - Whether to return results in ascending or descending order.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users',
          method: 'GET'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.users.makeAdmin
     *
     * @desc change admin status of a user
     *
     * @alias directory.users.makeAdmin
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.userKey - Email or immutable Id of the user as admin
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    makeAdmin: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users/' + params.userKey + '/makeAdmin',
          method: 'POST'
        },
        params: params,
        requiredParams: ['userKey'],
        pathParams: ['userKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.users.patch
     *
     * @desc update user. This method supports patch semantics.
     *
     * @alias directory.users.patch
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.userKey - Email or immutable Id of the user. If Id, it should match with id of user object
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users/' + params.userKey,
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['userKey'],
        pathParams: ['userKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.users.undelete
     *
     * @desc Undelete a deleted user
     *
     * @alias directory.users.undelete
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.userKey - The immutable id of the user
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    undelete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users/' + params.userKey + '/undelete',
          method: 'POST'
        },
        params: params,
        requiredParams: ['userKey'],
        pathParams: ['userKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.users.update
     *
     * @desc update user
     *
     * @alias directory.users.update
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.userKey - Email or immutable Id of the user. If Id, it should match with id of user object
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users/' + params.userKey,
          method: 'PUT'
        },
        params: params,
        requiredParams: ['userKey'],
        pathParams: ['userKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.users.watch
     *
     * @desc Watch for changes in users list
     *
     * @alias directory.users.watch
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.customer - Immutable id of the Google Apps account. In case of multi-domain, to fetch all users for a customer, fill this field instead of domain.
     * @param  {string=} params.domain - Name of the domain. Fill this field to get users from only this domain. To return all users in a multi-domain fill customer field instead.
     * @param  {string=} params.event - Event on which subscription is intended (if subscribing)
     * @param  {integer=} params.maxResults - Maximum number of results to return. Default is 100. Max allowed is 500
     * @param  {string=} params.orderBy - Column to use for sorting results
     * @param  {string=} params.pageToken - Token to specify next page in the list
     * @param  {string=} params.query - Query string search. Should be of the form "" where field can be any of supported fields, operators can be one of '=' for exact match or ':' for prefix match. For prefix match, the value should always be followed by a *.
     * @param  {string=} params.showDeleted - If set to true retrieves the list of deleted users. Default is false
     * @param  {string=} params.sortOrder - Whether to return results in ascending or descending order.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    watch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users/watch',
          method: 'POST'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    aliases: {

      /**
       * directory.users.aliases.delete
       *
       * @desc Remove a alias for the user
       *
       * @alias directory.users.aliases.delete
       * @memberOf! admin(directory_v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.alias - The alias to be removed
       * @param  {string} params.userKey - Email or immutable Id of the user
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/admin/directory/v1/users/' + params.userKey + '/aliases/' + params.alias,
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['userKey', 'alias'],
          pathParams: ['alias', 'userKey'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * directory.users.aliases.insert
       *
       * @desc Add a alias for the user
       *
       * @alias directory.users.aliases.insert
       * @memberOf! admin(directory_v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.userKey - Email or immutable Id of the user
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      insert: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/admin/directory/v1/users/' + params.userKey + '/aliases',
            method: 'POST'
          },
          params: params,
          requiredParams: ['userKey'],
          pathParams: ['userKey'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * directory.users.aliases.list
       *
       * @desc List all aliases for a user
       *
       * @alias directory.users.aliases.list
       * @memberOf! admin(directory_v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string=} params.event - Event on which subscription is intended (if subscribing)
       * @param  {string} params.userKey - Email or immutable Id of the user
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/admin/directory/v1/users/' + params.userKey + '/aliases',
            method: 'GET'
          },
          params: params,
          requiredParams: ['userKey'],
          pathParams: ['userKey'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * directory.users.aliases.watch
       *
       * @desc Watch for changes in user aliases list
       *
       * @alias directory.users.aliases.watch
       * @memberOf! admin(directory_v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string=} params.event - Event on which subscription is intended (if subscribing)
       * @param  {string} params.userKey - Email or immutable Id of the user
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      watch: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/admin/directory/v1/users/' + params.userKey + '/aliases/watch',
            method: 'POST'
          },
          params: params,
          requiredParams: ['userKey'],
          pathParams: ['userKey'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    photos: {

      /**
       * directory.users.photos.delete
       *
       * @desc Remove photos for the user
       *
       * @alias directory.users.photos.delete
       * @memberOf! admin(directory_v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.userKey - Email or immutable Id of the user
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/admin/directory/v1/users/' + params.userKey + '/photos/thumbnail',
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['userKey'],
          pathParams: ['userKey'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * directory.users.photos.get
       *
       * @desc Retrieve photo of a user
       *
       * @alias directory.users.photos.get
       * @memberOf! admin(directory_v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.userKey - Email or immutable Id of the user
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/admin/directory/v1/users/' + params.userKey + '/photos/thumbnail',
            method: 'GET'
          },
          params: params,
          requiredParams: ['userKey'],
          pathParams: ['userKey'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * directory.users.photos.patch
       *
       * @desc Add a photo for the user. This method supports patch semantics.
       *
       * @alias directory.users.photos.patch
       * @memberOf! admin(directory_v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.userKey - Email or immutable Id of the user
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      patch: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/admin/directory/v1/users/' + params.userKey + '/photos/thumbnail',
            method: 'PATCH'
          },
          params: params,
          requiredParams: ['userKey'],
          pathParams: ['userKey'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * directory.users.photos.update
       *
       * @desc Add a photo for the user
       *
       * @alias directory.users.photos.update
       * @memberOf! admin(directory_v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.userKey - Email or immutable Id of the user
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      update: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/admin/directory/v1/users/' + params.userKey + '/photos/thumbnail',
            method: 'PUT'
          },
          params: params,
          requiredParams: ['userKey'],
          pathParams: ['userKey'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  this.verificationCodes = {

    /**
     * directory.verificationCodes.generate
     *
     * @desc Generate new backup verification codes for the user.
     *
     * @alias directory.verificationCodes.generate
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.userKey - Email or immutable Id of the user
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    generate: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users/' + params.userKey + '/verificationCodes/generate',
          method: 'POST'
        },
        params: params,
        requiredParams: ['userKey'],
        pathParams: ['userKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.verificationCodes.invalidate
     *
     * @desc Invalidate the current backup verification codes for the user.
     *
     * @alias directory.verificationCodes.invalidate
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.userKey - Email or immutable Id of the user
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    invalidate: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users/' + params.userKey + '/verificationCodes/invalidate',
          method: 'POST'
        },
        params: params,
        requiredParams: ['userKey'],
        pathParams: ['userKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.verificationCodes.list
     *
     * @desc Returns the current set of valid backup verification codes for the specified user.
     *
     * @alias directory.verificationCodes.list
     * @memberOf! admin(directory_v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.userKey - Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users/' + params.userKey + '/verificationCodes',
          method: 'GET'
        },
        params: params,
        requiredParams: ['userKey'],
        pathParams: ['userKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Admin object
 * @type Admin
 */
module.exports = Admin;