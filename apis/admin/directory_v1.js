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
 * Admin Directory API
 *
 * The Admin SDK Directory API lets you view and manage enterprise resources such as users and groups, administrative notifications, security features, and more.
 *
 * @example
 * var google = require('googleapis');
 * var admin = google.admin('directory_v1');
 *
 * @namespace admin
 * @type {Function}
 * @version directory_v1
 * @variation directory_v1
 * @param {object=} options Options for Admin
 */
function Admin(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.asps = {

    /**
     * directory.asps.delete
     *
     * @desc Delete an ASP issued by a user.
     *
     * @alias directory.asps.delete
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {integer} params.codeId The unique ID of the ASP to be deleted.
     * @param {string} params.userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users/{userKey}/asps/{codeId}',
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
     * @param {object} params Parameters for request
     * @param {integer} params.codeId The unique ID of the ASP.
     * @param {string} params.userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users/{userKey}/asps/{codeId}',
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
     * @param {object} params Parameters for request
     * @param {string} params.userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users/{userKey}/asps',
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

  self.channels = {

    /**
     * admin.channels.stop
     *
     * @desc Stop watching resources through this channel
     *
     * @alias admin.channels.stop
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    stop: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/admin/directory_v1/channels/stop',
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

  self.chromeosdevices = {

    /**
     * directory.chromeosdevices.get
     *
     * @desc Retrieve Chrome OS Device
     *
     * @alias directory.chromeosdevices.get
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.customerId Immutable id of the Google Apps account
     * @param {string} params.deviceId Immutable id of Chrome OS Device
     * @param {string=} params.projection Restrict information returned to a set of selected fields.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}',
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
     * @param {object} params Parameters for request
     * @param {string} params.customerId Immutable id of the Google Apps account
     * @param {integer=} params.maxResults Maximum number of results to return. Default is 100
     * @param {string=} params.orderBy Column to use for sorting results
     * @param {string=} params.pageToken Token to specify next page in the list
     * @param {string=} params.projection Restrict information returned to a set of selected fields.
     * @param {string=} params.query Search string in the format given at http://support.google.com/chromeos/a/bin/answer.py?hl=en&answer=1698333
     * @param {string=} params.sortOrder Whether to return results in ascending or descending order. Only of use when orderBy is also used
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customerId}/devices/chromeos',
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
     * @param {object} params Parameters for request
     * @param {string} params.customerId Immutable id of the Google Apps account
     * @param {string} params.deviceId Immutable id of Chrome OS Device
     * @param {string=} params.projection Restrict information returned to a set of selected fields.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}',
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
     * @param {object} params Parameters for request
     * @param {string} params.customerId Immutable id of the Google Apps account
     * @param {string} params.deviceId Immutable id of Chrome OS Device
     * @param {string=} params.projection Restrict information returned to a set of selected fields.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}',
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

  self.customers = {

    /**
     * directory.customers.get
     *
     * @desc Retrives a customer.
     *
     * @alias directory.customers.get
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.customerKey Id of the customer to be retrieved
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customers/{customerKey}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['customerKey'],
        pathParams: ['customerKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.customers.patch
     *
     * @desc Updates a customer. This method supports patch semantics.
     *
     * @alias directory.customers.patch
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.customerKey Id of the customer to be updated
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customers/{customerKey}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['customerKey'],
        pathParams: ['customerKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.customers.update
     *
     * @desc Updates a customer.
     *
     * @alias directory.customers.update
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.customerKey Id of the customer to be updated
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customers/{customerKey}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['customerKey'],
        pathParams: ['customerKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.domainAliases = {

    /**
     * directory.domainAliases.delete
     *
     * @desc Deletes a Domain Alias of the customer.
     *
     * @alias directory.domainAliases.delete
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.customer Immutable id of the Google Apps account.
     * @param {string} params.domainAliasName Name of domain alias to be retrieved.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['customer', 'domainAliasName'],
        pathParams: ['customer', 'domainAliasName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.domainAliases.get
     *
     * @desc Retrieves a domain alias of the customer.
     *
     * @alias directory.domainAliases.get
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.customer Immutable id of the Google Apps account.
     * @param {string} params.domainAliasName Name of domain alias to be retrieved.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['customer', 'domainAliasName'],
        pathParams: ['customer', 'domainAliasName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.domainAliases.insert
     *
     * @desc Inserts a Domain alias of the customer.
     *
     * @alias directory.domainAliases.insert
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.customer Immutable id of the Google Apps account.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customer}/domainaliases',
          method: 'POST'
        },
        params: params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.domainAliases.list
     *
     * @desc Lists the domain aliases of the customer.
     *
     * @alias directory.domainAliases.list
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.customer Immutable id of the Google Apps account.
     * @param {string=} params.parentDomainName Name of the parent domain for which domain aliases are to be fetched.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customer}/domainaliases',
          method: 'GET'
        },
        params: params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.domains = {

    /**
     * directory.domains.delete
     *
     * @desc Deletes a domain of the customer.
     *
     * @alias directory.domains.delete
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.customer Immutable id of the Google Apps account.
     * @param {string} params.domainName Name of domain to be deleted
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customer}/domains/{domainName}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['customer', 'domainName'],
        pathParams: ['customer', 'domainName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.domains.get
     *
     * @desc Retrives a domain of the customer.
     *
     * @alias directory.domains.get
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.customer Immutable id of the Google Apps account.
     * @param {string} params.domainName Name of domain to be retrieved
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customer}/domains/{domainName}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['customer', 'domainName'],
        pathParams: ['customer', 'domainName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.domains.insert
     *
     * @desc Inserts a domain of the customer.
     *
     * @alias directory.domains.insert
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.customer Immutable id of the Google Apps account.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customer}/domains',
          method: 'POST'
        },
        params: params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.domains.list
     *
     * @desc Lists the domains of the customer.
     *
     * @alias directory.domains.list
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.customer Immutable id of the Google Apps account.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customer}/domains',
          method: 'GET'
        },
        params: params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.groups = {

    /**
     * directory.groups.delete
     *
     * @desc Delete Group
     *
     * @alias directory.groups.delete
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.groupKey Email or immutable Id of the group
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/groups/{groupKey}',
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
     * @param {object} params Parameters for request
     * @param {string} params.groupKey Email or immutable Id of the group
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/groups/{groupKey}',
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
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/groups',
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
     * directory.groups.list
     *
     * @desc Retrieve all groups in a domain (paginated)
     *
     * @alias directory.groups.list
     * @memberOf! admin(directory_v1)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.customer Immutable id of the Google Apps account. In case of multi-domain, to fetch all groups for a customer, fill this field instead of domain.
     * @param {string=} params.domain Name of the domain. Fill this field to get groups from only this domain. To return all groups in a multi-domain fill customer field instead.
     * @param {integer=} params.maxResults Maximum number of results to return. Default is 200
     * @param {string=} params.pageToken Token to specify next page in the list
     * @param {string=} params.userKey Email or immutable Id of the user if only those groups are to be listed, the given user is a member of. If Id, it should match with id of user object
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/groups',
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
     * directory.groups.patch
     *
     * @desc Update Group. This method supports patch semantics.
     *
     * @alias directory.groups.patch
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.groupKey Email or immutable Id of the group. If Id, it should match with id of group object
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/groups/{groupKey}',
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
     * @param {object} params Parameters for request
     * @param {string} params.groupKey Email or immutable Id of the group. If Id, it should match with id of group object
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/groups/{groupKey}',
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
       * @param {object} params Parameters for request
       * @param {string} params.alias The alias to be removed
       * @param {string} params.groupKey Email or immutable Id of the group
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      delete: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/admin/directory/v1/groups/{groupKey}/aliases/{alias}',
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
       * @param {object} params Parameters for request
       * @param {string} params.groupKey Email or immutable Id of the group
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      insert: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/admin/directory/v1/groups/{groupKey}/aliases',
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
       * @param {object} params Parameters for request
       * @param {string} params.groupKey Email or immutable Id of the group
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/admin/directory/v1/groups/{groupKey}/aliases',
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

  self.members = {

    /**
     * directory.members.delete
     *
     * @desc Remove membership.
     *
     * @alias directory.members.delete
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.groupKey Email or immutable Id of the group
     * @param {string} params.memberKey Email or immutable Id of the member
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/groups/{groupKey}/members/{memberKey}',
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
     * @param {object} params Parameters for request
     * @param {string} params.groupKey Email or immutable Id of the group
     * @param {string} params.memberKey Email or immutable Id of the member
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/groups/{groupKey}/members/{memberKey}',
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
     * @param {object} params Parameters for request
     * @param {string} params.groupKey Email or immutable Id of the group
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/groups/{groupKey}/members',
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
     * @param {object} params Parameters for request
     * @param {string} params.groupKey Email or immutable Id of the group
     * @param {integer=} params.maxResults Maximum number of results to return. Default is 200
     * @param {string=} params.pageToken Token to specify next page in the list
     * @param {string=} params.roles Comma separated role values to filter list results on.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/groups/{groupKey}/members',
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
     * @param {object} params Parameters for request
     * @param {string} params.groupKey Email or immutable Id of the group. If Id, it should match with id of group object
     * @param {string} params.memberKey Email or immutable Id of the user. If Id, it should match with id of member object
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/groups/{groupKey}/members/{memberKey}',
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
     * @param {object} params Parameters for request
     * @param {string} params.groupKey Email or immutable Id of the group. If Id, it should match with id of group object
     * @param {string} params.memberKey Email or immutable Id of the user. If Id, it should match with id of member object
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/groups/{groupKey}/members/{memberKey}',
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

  self.mobiledevices = {

    /**
     * directory.mobiledevices.action
     *
     * @desc Take action on Mobile Device
     *
     * @alias directory.mobiledevices.action
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.customerId Immutable id of the Google Apps account
     * @param {string} params.resourceId Immutable id of Mobile Device
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    action: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}/action',
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
     * @param {object} params Parameters for request
     * @param {string} params.customerId Immutable id of the Google Apps account
     * @param {string} params.resourceId Immutable id of Mobile Device
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}',
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
     * @param {object} params Parameters for request
     * @param {string} params.customerId Immutable id of the Google Apps account
     * @param {string=} params.projection Restrict information returned to a set of selected fields.
     * @param {string} params.resourceId Immutable id of Mobile Device
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}',
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
     * @param {object} params Parameters for request
     * @param {string} params.customerId Immutable id of the Google Apps account
     * @param {integer=} params.maxResults Maximum number of results to return. Default is 100
     * @param {string=} params.orderBy Column to use for sorting results
     * @param {string=} params.pageToken Token to specify next page in the list
     * @param {string=} params.projection Restrict information returned to a set of selected fields.
     * @param {string=} params.query Search string in the format given at http://support.google.com/a/bin/answer.py?hl=en&answer=1408863#search
     * @param {string=} params.sortOrder Whether to return results in ascending or descending order. Only of use when orderBy is also used
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customerId}/devices/mobile',
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

  self.notifications = {

    /**
     * directory.notifications.delete
     *
     * @desc Deletes a notification
     *
     * @alias directory.notifications.delete
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.customer The unique ID for the customer's Google account. The customerId is also returned as part of the Users resource.
     * @param {string} params.notificationId The unique ID of the notification.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customer}/notifications/{notificationId}',
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
     * @param {object} params Parameters for request
     * @param {string} params.customer The unique ID for the customer's Google account. The customerId is also returned as part of the Users resource.
     * @param {string} params.notificationId The unique ID of the notification.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customer}/notifications/{notificationId}',
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
     * @param {object} params Parameters for request
     * @param {string} params.customer The unique ID for the customer's Google account.
     * @param {string=} params.language The ISO 639-1 code of the language notifications are returned in. The default is English (en).
     * @param {integer=} params.maxResults Maximum number of notifications to return per page. The default is 100.
     * @param {string=} params.pageToken The token to specify the page of results to retrieve.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customer}/notifications',
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
     * @param {object} params Parameters for request
     * @param {string} params.customer The unique ID for the customer's Google account.
     * @param {string} params.notificationId The unique ID of the notification.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customer}/notifications/{notificationId}',
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
     * @param {object} params Parameters for request
     * @param {string} params.customer The unique ID for the customer's Google account.
     * @param {string} params.notificationId The unique ID of the notification.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customer}/notifications/{notificationId}',
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

  self.orgunits = {

    /**
     * directory.orgunits.delete
     *
     * @desc Remove Organization Unit
     *
     * @alias directory.orgunits.delete
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.customerId Immutable id of the Google Apps account
     * @param {string} params.orgUnitPath Full path of the organization unit or its Id
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath}',
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
     * @param {object} params Parameters for request
     * @param {string} params.customerId Immutable id of the Google Apps account
     * @param {string} params.orgUnitPath Full path of the organization unit or its Id
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath}',
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
     * @param {object} params Parameters for request
     * @param {string} params.customerId Immutable id of the Google Apps account
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customerId}/orgunits',
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
     * @param {object} params Parameters for request
     * @param {string} params.customerId Immutable id of the Google Apps account
     * @param {string=} params.orgUnitPath the URL-encoded organization unit's path or its Id
     * @param {string=} params.type Whether to return all sub-organizations or just immediate children
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customerId}/orgunits',
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
     * @param {object} params Parameters for request
     * @param {string} params.customerId Immutable id of the Google Apps account
     * @param {string} params.orgUnitPath Full path of the organization unit or its Id
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath}',
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
     * @param {object} params Parameters for request
     * @param {string} params.customerId Immutable id of the Google Apps account
     * @param {string} params.orgUnitPath Full path of the organization unit or its Id
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath}',
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

  self.privileges = {

    /**
     * directory.privileges.list
     *
     * @desc Retrieves a paginated list of all privileges for a customer.
     *
     * @alias directory.privileges.list
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.customer Immutable ID of the Google Apps account.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customer}/roles/ALL/privileges',
          method: 'GET'
        },
        params: params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.resources = {

    calendars: {

      /**
       * directory.resources.calendars.delete
       *
       * @desc Deletes a calendar resource.
       *
       * @alias directory.resources.calendars.delete
       * @memberOf! admin(directory_v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.calendarResourceId The unique ID of the calendar resource to delete.
       * @param {string} params.customer The unique ID for the customer's Google account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      delete: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}',
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['customer', 'calendarResourceId'],
          pathParams: ['calendarResourceId', 'customer'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * directory.resources.calendars.get
       *
       * @desc Retrieves a calendar resource.
       *
       * @alias directory.resources.calendars.get
       * @memberOf! admin(directory_v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.calendarResourceId The unique ID of the calendar resource to retrieve.
       * @param {string} params.customer The unique ID for the customer's Google account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['customer', 'calendarResourceId'],
          pathParams: ['calendarResourceId', 'customer'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * directory.resources.calendars.insert
       *
       * @desc Inserts a calendar resource.
       *
       * @alias directory.resources.calendars.insert
       * @memberOf! admin(directory_v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.customer The unique ID for the customer's Google account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      insert: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/admin/directory/v1/customer/{customer}/resources/calendars',
            method: 'POST'
          },
          params: params,
          requiredParams: ['customer'],
          pathParams: ['customer'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * directory.resources.calendars.list
       *
       * @desc Retrieves a list of calendar resources for an account.
       *
       * @alias directory.resources.calendars.list
       * @memberOf! admin(directory_v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.customer The unique ID for the customer's Google account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
       * @param {integer=} params.maxResults Maximum number of results to return.
       * @param {string=} params.pageToken Token to specify the next page in the list.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/admin/directory/v1/customer/{customer}/resources/calendars',
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
       * directory.resources.calendars.patch
       *
       * @desc Updates a calendar resource. This method supports patch semantics.
       *
       * @alias directory.resources.calendars.patch
       * @memberOf! admin(directory_v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.calendarResourceId The unique ID of the calendar resource to update.
       * @param {string} params.customer The unique ID for the customer's Google account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      patch: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}',
            method: 'PATCH'
          },
          params: params,
          requiredParams: ['customer', 'calendarResourceId'],
          pathParams: ['calendarResourceId', 'customer'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * directory.resources.calendars.update
       *
       * @desc Updates a calendar resource.
       *
       * @alias directory.resources.calendars.update
       * @memberOf! admin(directory_v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.calendarResourceId The unique ID of the calendar resource to update.
       * @param {string} params.customer The unique ID for the customer's Google account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      update: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}',
            method: 'PUT'
          },
          params: params,
          requiredParams: ['customer', 'calendarResourceId'],
          pathParams: ['calendarResourceId', 'customer'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  self.roleAssignments = {

    /**
     * directory.roleAssignments.delete
     *
     * @desc Deletes a role assignment.
     *
     * @alias directory.roleAssignments.delete
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.customer Immutable ID of the Google Apps account.
     * @param {string} params.roleAssignmentId Immutable ID of the role assignment.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['customer', 'roleAssignmentId'],
        pathParams: ['customer', 'roleAssignmentId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.roleAssignments.get
     *
     * @desc Retrieve a role assignment.
     *
     * @alias directory.roleAssignments.get
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.customer Immutable ID of the Google Apps account.
     * @param {string} params.roleAssignmentId Immutable ID of the role assignment.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['customer', 'roleAssignmentId'],
        pathParams: ['customer', 'roleAssignmentId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.roleAssignments.insert
     *
     * @desc Creates a role assignment.
     *
     * @alias directory.roleAssignments.insert
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.customer Immutable ID of the Google Apps account.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customer}/roleassignments',
          method: 'POST'
        },
        params: params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.roleAssignments.list
     *
     * @desc Retrieves a paginated list of all roleAssignments.
     *
     * @alias directory.roleAssignments.list
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.customer Immutable ID of the Google Apps account.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Token to specify the next page in the list.
     * @param {string=} params.roleId Immutable ID of a role. If included in the request, returns only role assignments containing this role ID.
     * @param {string=} params.userKey The user's primary email address, alias email address, or unique user ID. If included in the request, returns role assignments only for this user.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customer}/roleassignments',
          method: 'GET'
        },
        params: params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.roles = {

    /**
     * directory.roles.delete
     *
     * @desc Deletes a role.
     *
     * @alias directory.roles.delete
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.customer Immutable ID of the Google Apps account.
     * @param {string} params.roleId Immutable ID of the role.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customer}/roles/{roleId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['customer', 'roleId'],
        pathParams: ['customer', 'roleId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.roles.get
     *
     * @desc Retrieves a role.
     *
     * @alias directory.roles.get
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.customer Immutable ID of the Google Apps account.
     * @param {string} params.roleId Immutable ID of the role.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customer}/roles/{roleId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['customer', 'roleId'],
        pathParams: ['customer', 'roleId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.roles.insert
     *
     * @desc Creates a role.
     *
     * @alias directory.roles.insert
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.customer Immutable ID of the Google Apps account.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customer}/roles',
          method: 'POST'
        },
        params: params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.roles.list
     *
     * @desc Retrieves a paginated list of all the roles in a domain.
     *
     * @alias directory.roles.list
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.customer Immutable id of the Google Apps account.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Token to specify the next page in the list.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customer}/roles',
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
     * directory.roles.patch
     *
     * @desc Updates a role. This method supports patch semantics.
     *
     * @alias directory.roles.patch
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.customer Immutable ID of the Google Apps account.
     * @param {string} params.roleId Immutable ID of the role.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customer}/roles/{roleId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['customer', 'roleId'],
        pathParams: ['customer', 'roleId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.roles.update
     *
     * @desc Updates a role.
     *
     * @alias directory.roles.update
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.customer Immutable ID of the Google Apps account.
     * @param {string} params.roleId Immutable ID of the role.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customer}/roles/{roleId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['customer', 'roleId'],
        pathParams: ['customer', 'roleId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.schemas = {

    /**
     * directory.schemas.delete
     *
     * @desc Delete schema
     *
     * @alias directory.schemas.delete
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.customerId Immutable id of the Google Apps account
     * @param {string} params.schemaKey Name or immutable Id of the schema
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customerId}/schemas/{schemaKey}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['customerId', 'schemaKey'],
        pathParams: ['customerId', 'schemaKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.schemas.get
     *
     * @desc Retrieve schema
     *
     * @alias directory.schemas.get
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.customerId Immutable id of the Google Apps account
     * @param {string} params.schemaKey Name or immutable Id of the schema
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customerId}/schemas/{schemaKey}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['customerId', 'schemaKey'],
        pathParams: ['customerId', 'schemaKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.schemas.insert
     *
     * @desc Create schema.
     *
     * @alias directory.schemas.insert
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.customerId Immutable id of the Google Apps account
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customerId}/schemas',
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
     * directory.schemas.list
     *
     * @desc Retrieve all schemas for a customer
     *
     * @alias directory.schemas.list
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.customerId Immutable id of the Google Apps account
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customerId}/schemas',
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
     * directory.schemas.patch
     *
     * @desc Update schema. This method supports patch semantics.
     *
     * @alias directory.schemas.patch
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.customerId Immutable id of the Google Apps account
     * @param {string} params.schemaKey Name or immutable Id of the schema.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customerId}/schemas/{schemaKey}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['customerId', 'schemaKey'],
        pathParams: ['customerId', 'schemaKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * directory.schemas.update
     *
     * @desc Update schema
     *
     * @alias directory.schemas.update
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.customerId Immutable id of the Google Apps account
     * @param {string} params.schemaKey Name or immutable Id of the schema.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/customer/{customerId}/schemas/{schemaKey}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['customerId', 'schemaKey'],
        pathParams: ['customerId', 'schemaKey'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.tokens = {

    /**
     * directory.tokens.delete
     *
     * @desc Delete all access tokens issued by a user for an application.
     *
     * @alias directory.tokens.delete
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.clientId The Client ID of the application the token is issued to.
     * @param {string} params.userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users/{userKey}/tokens/{clientId}',
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
     * @param {object} params Parameters for request
     * @param {string} params.clientId The Client ID of the application the token is issued to.
     * @param {string} params.userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users/{userKey}/tokens/{clientId}',
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
     * @param {object} params Parameters for request
     * @param {string} params.userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users/{userKey}/tokens',
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

  self.users = {

    /**
     * directory.users.delete
     *
     * @desc Delete user
     *
     * @alias directory.users.delete
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.userKey Email or immutable Id of the user
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users/{userKey}',
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
     * @param {object} params Parameters for request
     * @param {string=} params.customFieldMask Comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when projection=custom.
     * @param {string=} params.projection What subset of fields to fetch for this user.
     * @param {string} params.userKey Email or immutable Id of the user
     * @param {string=} params.viewType Whether to fetch the ADMIN_VIEW or DOMAIN_PUBLIC view of the user.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users/{userKey}',
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
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users',
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
     * directory.users.list
     *
     * @desc Retrieve either deleted users or all users in a domain (paginated)
     *
     * @alias directory.users.list
     * @memberOf! admin(directory_v1)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.customFieldMask Comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when projection=custom.
     * @param {string=} params.customer Immutable id of the Google Apps account. In case of multi-domain, to fetch all users for a customer, fill this field instead of domain.
     * @param {string=} params.domain Name of the domain. Fill this field to get users from only this domain. To return all users in a multi-domain fill customer field instead.
     * @param {string=} params.event Event on which subscription is intended (if subscribing)
     * @param {integer=} params.maxResults Maximum number of results to return. Default is 100. Max allowed is 500
     * @param {string=} params.orderBy Column to use for sorting results
     * @param {string=} params.pageToken Token to specify next page in the list
     * @param {string=} params.projection What subset of fields to fetch for this user.
     * @param {string=} params.query Query string search. Should be of the form "". Complete documentation is at https://developers.google.com/admin-sdk/directory/v1/guides/search-users
     * @param {string=} params.showDeleted If set to true retrieves the list of deleted users. Default is false
     * @param {string=} params.sortOrder Whether to return results in ascending or descending order.
     * @param {string=} params.viewType Whether to fetch the ADMIN_VIEW or DOMAIN_PUBLIC view of the user.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users',
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
     * directory.users.makeAdmin
     *
     * @desc change admin status of a user
     *
     * @alias directory.users.makeAdmin
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.userKey Email or immutable Id of the user as admin
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    makeAdmin: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users/{userKey}/makeAdmin',
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
     * @param {object} params Parameters for request
     * @param {string} params.userKey Email or immutable Id of the user. If Id, it should match with id of user object
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users/{userKey}',
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
     * @param {object} params Parameters for request
     * @param {string} params.userKey The immutable id of the user
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    undelete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users/{userKey}/undelete',
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
     * @param {object} params Parameters for request
     * @param {string} params.userKey Email or immutable Id of the user. If Id, it should match with id of user object
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users/{userKey}',
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
     * @param {object} params Parameters for request
     * @param {string=} params.customFieldMask Comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when projection=custom.
     * @param {string=} params.customer Immutable id of the Google Apps account. In case of multi-domain, to fetch all users for a customer, fill this field instead of domain.
     * @param {string=} params.domain Name of the domain. Fill this field to get users from only this domain. To return all users in a multi-domain fill customer field instead.
     * @param {string=} params.event Event on which subscription is intended (if subscribing)
     * @param {integer=} params.maxResults Maximum number of results to return. Default is 100. Max allowed is 500
     * @param {string=} params.orderBy Column to use for sorting results
     * @param {string=} params.pageToken Token to specify next page in the list
     * @param {string=} params.projection What subset of fields to fetch for this user.
     * @param {string=} params.query Query string search. Should be of the form "". Complete documentation is at https://developers.google.com/admin-sdk/directory/v1/guides/search-users
     * @param {string=} params.showDeleted If set to true retrieves the list of deleted users. Default is false
     * @param {string=} params.sortOrder Whether to return results in ascending or descending order.
     * @param {string=} params.viewType Whether to fetch the ADMIN_VIEW or DOMAIN_PUBLIC view of the user.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    watch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users/watch',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
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
       * @param {object} params Parameters for request
       * @param {string} params.alias The alias to be removed
       * @param {string} params.userKey Email or immutable Id of the user
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      delete: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/admin/directory/v1/users/{userKey}/aliases/{alias}',
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
       * @param {object} params Parameters for request
       * @param {string} params.userKey Email or immutable Id of the user
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      insert: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/admin/directory/v1/users/{userKey}/aliases',
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
       * @param {object} params Parameters for request
       * @param {string=} params.event Event on which subscription is intended (if subscribing)
       * @param {string} params.userKey Email or immutable Id of the user
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/admin/directory/v1/users/{userKey}/aliases',
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
       * @param {object} params Parameters for request
       * @param {string=} params.event Event on which subscription is intended (if subscribing)
       * @param {string} params.userKey Email or immutable Id of the user
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      watch: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/admin/directory/v1/users/{userKey}/aliases/watch',
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
       * @param {object} params Parameters for request
       * @param {string} params.userKey Email or immutable Id of the user
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      delete: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/admin/directory/v1/users/{userKey}/photos/thumbnail',
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
       * @param {object} params Parameters for request
       * @param {string} params.userKey Email or immutable Id of the user
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/admin/directory/v1/users/{userKey}/photos/thumbnail',
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
       * @param {object} params Parameters for request
       * @param {string} params.userKey Email or immutable Id of the user
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      patch: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/admin/directory/v1/users/{userKey}/photos/thumbnail',
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
       * @param {object} params Parameters for request
       * @param {string} params.userKey Email or immutable Id of the user
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      update: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/admin/directory/v1/users/{userKey}/photos/thumbnail',
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

  self.verificationCodes = {

    /**
     * directory.verificationCodes.generate
     *
     * @desc Generate new backup verification codes for the user.
     *
     * @alias directory.verificationCodes.generate
     * @memberOf! admin(directory_v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.userKey Email or immutable Id of the user
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    generate: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users/{userKey}/verificationCodes/generate',
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
     * @param {object} params Parameters for request
     * @param {string} params.userKey Email or immutable Id of the user
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    invalidate: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users/{userKey}/verificationCodes/invalidate',
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
     * @param {object} params Parameters for request
     * @param {string} params.userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/admin/directory/v1/users/{userKey}/verificationCodes',
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

module.exports = Admin;
