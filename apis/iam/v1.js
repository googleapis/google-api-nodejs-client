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
var utils = require('../../lib/utils');

/**
 * Google Identity and Access Management API
 *
 * Manages identity and access control for Google Cloud Platform resources, including the creation of service accounts, which you can use to authenticate to Google and make API calls.
 *
 * @example
 * var google = require('googleapis');
 * var iam = google.iam('v1');
 *
 * @namespace iam
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Iam
 */
function Iam(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.projects = {

    serviceAccounts: {

      /**
       * iam.projects.serviceAccounts.list
       *
       * @desc Lists service accounts for a project.
       *
       * @alias iam.projects.serviceAccounts.list
       * @memberOf! iam(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Required. The resource name of the project associated with the service accounts, such as "projects/123"
       * @param {integer=} params.pageSize Optional limit on the number of service accounts to include in the response. Further accounts can subsequently be obtained by including the [ListServiceAccountsResponse.next_page_token] in a subsequent request.
       * @param {string=} params.pageToken Optional pagination token returned in an earlier [ListServiceAccountsResponse.next_page_token].
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://iam.googleapis.com/v1/{name}/serviceAccounts',
            method: 'GET'
          }, options),
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
       * @param {object} params Parameters for request
       * @param {string} params.name The resource name of the service account in the format "projects/{project}/serviceAccounts/{account}". Using '-' as a wildcard for the project, will infer the project from the account. The account value can be the email address or the unique_id of the service account.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://iam.googleapis.com/v1/{name}',
            method: 'GET'
          }, options),
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
       * @param {object} params Parameters for request
       * @param {string} params.name Required. The resource name of the project associated with the service accounts, such as "projects/123"
       * @param {iam(v1).CreateServiceAccountRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://iam.googleapis.com/v1/{name}/serviceAccounts',
            method: 'POST'
          }, options),
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
       * @param {object} params Parameters for request
       * @param {string} params.name The resource name of the service account in the format "projects/{project}/serviceAccounts/{account}". In requests using '-' as a wildcard for the project, will infer the project from the account and the account value can be the email address or the unique_id of the service account. In responses the resource name will always be in the format "projects/{project}/serviceAccounts/{email}".
       * @param {iam(v1).ServiceAccount} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      update: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://iam.googleapis.com/v1/{name}',
            method: 'PUT'
          }, options),
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
       * @param {object} params Parameters for request
       * @param {string} params.name The resource name of the service account in the format "projects/{project}/serviceAccounts/{account}". Using '-' as a wildcard for the project, will infer the project from the account. The account value can be the email address or the unique_id of the service account.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      delete: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://iam.googleapis.com/v1/{name}',
            method: 'DELETE'
          }, options),
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
       * @param {object} params Parameters for request
       * @param {string} params.name The resource name of the service account in the format "projects/{project}/serviceAccounts/{account}". Using '-' as a wildcard for the project, will infer the project from the account. The account value can be the email address or the unique_id of the service account.
       * @param {iam(v1).SignBlobRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      signBlob: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://iam.googleapis.com/v1/{name}:signBlob',
            method: 'POST'
          }, options),
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
       * @param {object} params Parameters for request
       * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. `resource` is usually specified as a path, such as `projects/xprojectx/zones/xzonex/disks/xdisk*`. The format for the path specified in this value is resource specific and is specified in the `getIamPolicy` documentation.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      getIamPolicy: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://iam.googleapis.com/v1/{resource}:getIamPolicy',
            method: 'POST'
          }, options),
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
       * @param {object} params Parameters for request
       * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. `resource` is usually specified as a path, such as `projects/xprojectx/zones/xzonex/disks/xdisk*`. The format for the path specified in this value is resource specific and is specified in the `setIamPolicy` documentation.
       * @param {iam(v1).SetIamPolicyRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      setIamPolicy: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://iam.googleapis.com/v1/{resource}:setIamPolicy',
            method: 'POST'
          }, options),
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
       * @param {object} params Parameters for request
       * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. `resource` is usually specified as a path, such as `projects/xprojectx/zones/xzonex/disks/xdisk*`. The format for the path specified in this value is resource specific and is specified in the `testIamPermissions` documentation.
       * @param {iam(v1).TestIamPermissionsRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      testIamPermissions: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://iam.googleapis.com/v1/{resource}:testIamPermissions',
            method: 'POST'
          }, options),
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
         * @param {object} params Parameters for request
         * @param {string} params.name The resource name of the service account in the format "projects/{project}/serviceAccounts/{account}". Using '-' as a wildcard for the project, will infer the project from the account. The account value can be the email address or the unique_id of the service account.
         * @param {string=} params.keyTypes The type of keys the user wants to list. If empty, all key types are included in the response. Duplicate key types are not allowed.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          var parameters = {
            options: utils.extend({
              url: 'https://iam.googleapis.com/v1/{name}/keys',
              method: 'GET'
            }, options),
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
         * @param {object} params Parameters for request
         * @param {string} params.name The resource name of the service account key in the format "projects/{project}/serviceAccounts/{account}/keys/{key}". Using '-' as a wildcard for the project will infer the project from the account. The account value can be the email address or the unique_id of the service account.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          var parameters = {
            options: utils.extend({
              url: 'https://iam.googleapis.com/v1/{name}',
              method: 'GET'
            }, options),
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
         * @param {object} params Parameters for request
         * @param {string} params.name The resource name of the service account in the format "projects/{project}/serviceAccounts/{account}". Using '-' as a wildcard for the project, will infer the project from the account. The account value can be the email address or the unique_id of the service account.
         * @param {iam(v1).CreateServiceAccountKeyRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          var parameters = {
            options: utils.extend({
              url: 'https://iam.googleapis.com/v1/{name}/keys',
              method: 'POST'
            }, options),
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
         * @param {object} params Parameters for request
         * @param {string} params.name The resource name of the service account key in the format "projects/{project}/serviceAccounts/{account}/keys/{key}". Using '-' as a wildcard for the project will infer the project from the account. The account value can be the email address or the unique_id of the service account.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          var parameters = {
            options: utils.extend({
              url: 'https://iam.googleapis.com/v1/{name}',
              method: 'DELETE'
            }, options),
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
 * @typedef ListServiceAccountsResponse
 * @memberOf! iam(v1)
 * @type object
 * @property {iam(v1).ServiceAccount[]} accounts The list of matching service accounts.
 * @property {string} nextPageToken To retrieve the next page of results, set [ListServiceAccountsRequest.page_token] to this value.
 */
/**
 * @typedef ServiceAccount
 * @memberOf! iam(v1)
 * @type object
 * @property {string} name The resource name of the service account in the format &quot;projects/{project}/serviceAccounts/{account}&quot;. In requests using &#39;-&#39; as a wildcard for the project, will infer the project from the account and the account value can be the email address or the unique_id of the service account. In responses the resource name will always be in the format &quot;projects/{project}/serviceAccounts/{email}&quot;.
 * @property {string} projectId @OutputOnly The id of the project that owns the service account.
 * @property {string} uniqueId @OutputOnly unique and stable id of the service account.
 * @property {string} email @OutputOnly Email address of the service account.
 * @property {string} displayName Optional. A user-specified description of the service account. Must be fewer than 100 UTF-8 bytes.
 * @property {string} etag Used to perform a consistent read-modify-write.
 * @property {string} oauth2ClientId @OutputOnly. The OAuth2 client id for the service account. This is used in conjunction with the OAuth2 clientconfig API to make three legged OAuth2 (3LO) flows to access the data of Google users.
 */
/**
 * @typedef CreateServiceAccountRequest
 * @memberOf! iam(v1)
 * @type object
 * @property {string} accountId Required. The account id that is used to generate the service account email address and a stable unique id. It is unique within a project, must be 1-63 characters long, and match the regular expression [a-z]([-a-z0-9]*[a-z0-9]) to comply with RFC1035.
 * @property {iam(v1).ServiceAccount} serviceAccount The ServiceAccount resource to create. Currently, only the following values are user assignable: display_name .
 */
/**
 * @typedef Empty
 * @memberOf! iam(v1)
 * @type object
 */
/**
 * @typedef ListServiceAccountKeysResponse
 * @memberOf! iam(v1)
 * @type object
 * @property {iam(v1).ServiceAccountKey[]} keys The public keys for the service account.
 */
/**
 * @typedef ServiceAccountKey
 * @memberOf! iam(v1)
 * @type object
 * @property {string} name The resource name of the service account key in the format &quot;projects/{project}/serviceAccounts/{email}/keys/{key}&quot;.
 * @property {string} privateKeyType The type of the private key.
 * @property {string} privateKeyData The key data.
 * @property {string} validAfterTime The key can be used after this timestamp.
 * @property {string} validBeforeTime The key can be used before this timestamp.
 */
/**
 * @typedef CreateServiceAccountKeyRequest
 * @memberOf! iam(v1)
 * @type object
 * @property {string} privateKeyType The type of the key requested. GOOGLE_CREDENTIALS is the default key type.
 */
/**
 * @typedef SignBlobRequest
 * @memberOf! iam(v1)
 * @type object
 * @property {string} bytesToSign The bytes to sign
 */
/**
 * @typedef SignBlobResponse
 * @memberOf! iam(v1)
 * @type object
 * @property {string} keyId The id of the key used to sign the blob.
 * @property {string} signature The signed blob.
 */
/**
 * @typedef Policy
 * @memberOf! iam(v1)
 * @type object
 * @property {integer} version Version of the `Policy`. The default version is 0.
 * @property {iam(v1).Binding[]} bindings Associates a list of `members` to a `role`. Multiple `bindings` must not be specified for the same `role`. `bindings` with no members will result in an error.
 * @property {iam(v1).Rule[]} rules 
 * @property {string} etag `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. If no `etag` is provided in the call to `setIamPolicy`, then the existing policy is overwritten blindly.
 */
/**
 * @typedef Binding
 * @memberOf! iam(v1)
 * @type object
 * @property {string} role Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. Required
 * @property {string[]} members Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@gmail.com` or `joe@example.com`. * `serviceAccount:{emailid}`: An email address that represents a service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: A Google Apps domain name that represents all the users of that domain. For example, `google.com` or `example.com`.
 */
/**
 * @typedef Rule
 * @memberOf! iam(v1)
 * @type object
 * @property {string} description Human-readable description of the rule.
 * @property {string[]} permissions A permission is a string of form &#39;..&#39; (e.g., &#39;storage.buckets.list&#39;). A value of &#39;*&#39; matches all permissions, and a verb part of &#39;*&#39; (e.g., &#39;storage.buckets.*&#39;) matches all verbs.
 * @property {string} action Required
 * @property {string[]} in The rule matches if the PRINCIPAL/AUTHORITY_SELECTOR is in this set of entries.
 * @property {string[]} notIn The rule matches if the PRINCIPAL/AUTHORITY_SELECTOR is not in this set of entries. The format for in and not_in entries is the same as for members in a Binding (see google/iam/v1/policy.proto).
 * @property {iam(v1).Condition[]} conditions Additional restrictions that must be met
 * @property {iam(v1).LogConfig[]} logConfig The config returned to callers of tech.iam.IAM.CheckPolicy for any entries that match the LOG action.
 */
/**
 * @typedef Condition
 * @memberOf! iam(v1)
 * @type object
 * @property {string} iam Trusted attributes supplied by the IAM system.
 * @property {string} sys Trusted attributes supplied by any service that owns resources and uses the IAM system for access control.
 * @property {string} svc Trusted attributes discharged by the service.
 * @property {string} op An operator to apply the subject with.
 * @property {string} value The object of the condition. Exactly one of these must be set.
 * @property {string[]} values The objects of the condition. This is mutually exclusive with &#39;value&#39;.
 */
/**
 * @typedef LogConfig
 * @memberOf! iam(v1)
 * @type object
 * @property {iam(v1).CounterOptions} counter Counter options.
 * @property {iam(v1).DataAccessOptions} dataAccess Data access options.
 * @property {iam(v1).CloudAuditOptions} cloudAudit Cloud audit options.
 */
/**
 * @typedef CounterOptions
 * @memberOf! iam(v1)
 * @type object
 * @property {string} metric The metric to update.
 * @property {string} field The field value to attribute.
 */
/**
 * @typedef DataAccessOptions
 * @memberOf! iam(v1)
 * @type object
 */
/**
 * @typedef CloudAuditOptions
 * @memberOf! iam(v1)
 * @type object
 */
/**
 * @typedef SetIamPolicyRequest
 * @memberOf! iam(v1)
 * @type object
 * @property {iam(v1).Policy} policy REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
 */
/**
 * @typedef TestIamPermissionsRequest
 * @memberOf! iam(v1)
 * @type object
 * @property {string[]} permissions The set of permissions to check for the `resource`. Permissions with wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed. For more information see IAM Overview.
 */
/**
 * @typedef TestIamPermissionsResponse
 * @memberOf! iam(v1)
 * @type object
 * @property {string[]} permissions A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
 */
module.exports = Iam;
