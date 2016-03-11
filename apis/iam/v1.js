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
 * Google Identity and Access Management API
 *
 * @classdesc Manages identity and access control for Google Cloud Platform resources, including the creation of service accounts, which you can use to authenticate to Google and make API calls.
 * @namespace iam
 * @version  v1
 * @variation v1
 * @this Iam
 * @param {object=} options Options for Iam
 */
function Iam(options) {

  var self = this;
  this._options = options || {};

  this.projects = {

    serviceAccounts: {

      /**
       * iam.projects.serviceAccounts.list
       *
       * @desc Lists service accounts for a project.
       *
       * @alias iam.projects.serviceAccounts.list
       * @memberOf! iam(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.name - Required. The resource name of the project associated with the service accounts, such as "projects/123"
       * @param  {integer=} params.pageSize - Optional limit on the number of service accounts to include in the response. Further accounts can subsequently be obtained by including the [ListServiceAccountsResponse.next_page_token] in a subsequent request.
       * @param  {string=} params.pageToken - Optional pagination token returned in an earlier [ListServiceAccountsResponse.next_page_token].
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://iam.googleapis.com/v1/{name}/serviceAccounts',
            method: 'GET'
          },
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * iam.projects.serviceAccounts.get
       *
       * @desc Gets a ServiceAccount
       *
       * @alias iam.projects.serviceAccounts.get
       * @memberOf! iam(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.name - The resource name of the service account in the format "projects/{project}/serviceAccounts/{account}". Using '-' as a wildcard for the project, will infer the project from the account. The account value can be the email address or the unique_id of the service account.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://iam.googleapis.com/v1/{name}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * iam.projects.serviceAccounts.create
       *
       * @desc Creates a service account and returns it.
       *
       * @alias iam.projects.serviceAccounts.create
       * @memberOf! iam(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.name - Required. The resource name of the project associated with the service accounts, such as "projects/123"
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      create: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://iam.googleapis.com/v1/{name}/serviceAccounts',
            method: 'POST'
          },
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * iam.projects.serviceAccounts.update
       *
       * @desc Updates a service account. Currently, only the following fields are updatable: 'display_name' . The 'etag' is mandatory.
       *
       * @alias iam.projects.serviceAccounts.update
       * @memberOf! iam(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.name - The resource name of the service account in the format "projects/{project}/serviceAccounts/{account}". In requests using '-' as a wildcard for the project, will infer the project from the account and the account value can be the email address or the unique_id of the service account. In responses the resource name will always be in the format "projects/{project}/serviceAccounts/{email}".
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      update: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://iam.googleapis.com/v1/{name}',
            method: 'PUT'
          },
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * iam.projects.serviceAccounts.delete
       *
       * @desc Deletes a service acount.
       *
       * @alias iam.projects.serviceAccounts.delete
       * @memberOf! iam(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.name - The resource name of the service account in the format "projects/{project}/serviceAccounts/{account}". Using '-' as a wildcard for the project, will infer the project from the account. The account value can be the email address or the unique_id of the service account.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://iam.googleapis.com/v1/{name}',
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * iam.projects.serviceAccounts.signBlob
       *
       * @desc Signs a blob using a service account.
       *
       * @alias iam.projects.serviceAccounts.signBlob
       * @memberOf! iam(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.name - The resource name of the service account in the format "projects/{project}/serviceAccounts/{account}". Using '-' as a wildcard for the project, will infer the project from the account. The account value can be the email address or the unique_id of the service account.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      signBlob: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://iam.googleapis.com/v1/{name}:signBlob',
            method: 'POST'
          },
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * iam.projects.serviceAccounts.getIamPolicy
       *
       * @desc Returns the IAM access control policy for specified IAM resource.
       *
       * @alias iam.projects.serviceAccounts.getIamPolicy
       * @memberOf! iam(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.resource_ - REQUIRED: The resource for which the policy is being requested. `resource` is usually specified as a path, such as `projects/xprojectx/zones/xzonex/disks/xdisk*`. The format for the path specified in this value is resource specific and is specified in the `getIamPolicy` documentation.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      getIamPolicy: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://iam.googleapis.com/v1/{resource}:getIamPolicy',
            method: 'POST'
          },
          params: params,
          requiredParams: ['resource'],
          pathParams: ['resource'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * iam.projects.serviceAccounts.setIamPolicy
       *
       * @desc Sets the IAM access control policy for the specified IAM resource.
       *
       * @alias iam.projects.serviceAccounts.setIamPolicy
       * @memberOf! iam(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.resource_ - REQUIRED: The resource for which the policy is being specified. `resource` is usually specified as a path, such as `projects/xprojectx/zones/xzonex/disks/xdisk*`. The format for the path specified in this value is resource specific and is specified in the `setIamPolicy` documentation.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      setIamPolicy: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://iam.googleapis.com/v1/{resource}:setIamPolicy',
            method: 'POST'
          },
          params: params,
          requiredParams: ['resource'],
          pathParams: ['resource'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * iam.projects.serviceAccounts.testIamPermissions
       *
       * @desc Tests the specified permissions against the IAM access control policy for the specified IAM resource.
       *
       * @alias iam.projects.serviceAccounts.testIamPermissions
       * @memberOf! iam(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.resource_ - REQUIRED: The resource for which the policy detail is being requested. `resource` is usually specified as a path, such as `projects/xprojectx/zones/xzonex/disks/xdisk*`. The format for the path specified in this value is resource specific and is specified in the `testIamPermissions` documentation.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      testIamPermissions: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://iam.googleapis.com/v1/{resource}:testIamPermissions',
            method: 'POST'
          },
          params: params,
          requiredParams: ['resource'],
          pathParams: ['resource'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      keys: {

        /**
         * iam.projects.serviceAccounts.keys.list
         *
         * @desc Lists service account keys
         *
         * @alias iam.projects.serviceAccounts.keys.list
         * @memberOf! iam(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.name - The resource name of the service account in the format "projects/{project}/serviceAccounts/{account}". Using '-' as a wildcard for the project, will infer the project from the account. The account value can be the email address or the unique_id of the service account.
         * @param  {string=} params.keyTypes - The type of keys the user wants to list. If empty, all key types are included in the response. Duplicate key types are not allowed.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        list: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://iam.googleapis.com/v1/{name}/keys',
              method: 'GET'
            },
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * iam.projects.serviceAccounts.keys.get
         *
         * @desc Gets the ServiceAccountKey by key id.
         *
         * @alias iam.projects.serviceAccounts.keys.get
         * @memberOf! iam(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.name - The resource name of the service account key in the format "projects/{project}/serviceAccounts/{account}/keys/{key}". Using '-' as a wildcard for the project will infer the project from the account. The account value can be the email address or the unique_id of the service account.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        get: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://iam.googleapis.com/v1/{name}',
              method: 'GET'
            },
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * iam.projects.serviceAccounts.keys.create
         *
         * @desc Creates a service account key and returns it.
         *
         * @alias iam.projects.serviceAccounts.keys.create
         * @memberOf! iam(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.name - The resource name of the service account in the format "projects/{project}/serviceAccounts/{account}". Using '-' as a wildcard for the project, will infer the project from the account. The account value can be the email address or the unique_id of the service account.
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        create: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://iam.googleapis.com/v1/{name}/keys',
              method: 'POST'
            },
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * iam.projects.serviceAccounts.keys.delete
         *
         * @desc Deletes a service account key.
         *
         * @alias iam.projects.serviceAccounts.keys.delete
         * @memberOf! iam(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.name - The resource name of the service account key in the format "projects/{project}/serviceAccounts/{account}/keys/{key}". Using '-' as a wildcard for the project will infer the project from the account. The account value can be the email address or the unique_id of the service account.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        delete: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://iam.googleapis.com/v1/{name}',
              method: 'DELETE'
            },
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    }
  };
}

/**
 * Exports Iam object
 * @type Iam
 */
module.exports = Iam;