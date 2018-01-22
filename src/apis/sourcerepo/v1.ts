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

import {createAPIRequest} from '../../lib/apirequest';

/**
 * Cloud Source Repositories API
 *
 * Access source code repositories hosted by Google.
 *
 * @example
 * const google = require('googleapis');
 * const sourcerepo = google.sourcerepo('v1');
 *
 * @namespace sourcerepo
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Sourcerepo
 */
function Sourcerepo(options) {
  const self = this;
  self._options = options || {};
  self.projects = {
    repos: {
      /**
       * sourcerepo.projects.repos.create
       * @desc Creates a repo in the given project with the given name.  If the
       * named repository already exists, `CreateRepo` returns `ALREADY_EXISTS`.
       * @alias sourcerepo.projects.repos.create
       * @memberOf! sourcerepo(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.parent The project in which to create the repo. Values are of the form `projects/<project>`.
       * @param {sourcerepo(v1).Repo} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://sourcerepo.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{parent}/repos')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * sourcerepo.projects.repos.delete
          * @desc Deletes a repo.
          * @alias sourcerepo.projects.repos.delete
          * @memberOf! sourcerepo(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name The name of the repo to delete. Values are of the form `projects/<project>/repos/<repo>`.
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      delete (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://sourcerepo.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * sourcerepo.projects.repos.get
          * @desc Returns information about a repo.
          * @alias sourcerepo.projects.repos.get
          * @memberOf! sourcerepo(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name The name of the requested repository. Values are of the form `projects/<project>/repos/<repo>`.
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      get(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://sourcerepo.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * sourcerepo.projects.repos.getIamPolicy
          * @desc Gets the access control policy for a resource. Returns an
          * empty policy if the resource exists and does not have a policy set.
          * @alias sourcerepo.projects.repos.getIamPolicy
          * @memberOf! sourcerepo(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      getIamPolicy(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://sourcerepo.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{resource}:getIamPolicy')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['resource'],
          pathParams: ['resource'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * sourcerepo.projects.repos.list
          * @desc Returns all repos belonging to a project. The sizes of the
          * repos are not set by ListRepos.  To get the size of a repo, use
          * GetRepo.
          * @alias sourcerepo.projects.repos.list
          * @memberOf! sourcerepo(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name The project ID whose repos should be listed. Values are of the form `projects/<project>`.
          * @param {integer=} params.pageSize Maximum number of repositories to return; between 1 and 500. If not set or zero, defaults to 100 at the server.
          * @param {string=} params.pageToken Resume listing repositories where a prior ListReposResponse left off. This is an opaque token that must be obtained from a recent, prior ListReposResponse's next_page_token field.
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      list(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://sourcerepo.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{name}/repos')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * sourcerepo.projects.repos.setIamPolicy
          * @desc Sets the access control policy on the specified resource.
          * Replaces any existing policy.
          * @alias sourcerepo.projects.repos.setIamPolicy
          * @memberOf! sourcerepo(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
          * @param {sourcerepo(v1).SetIamPolicyRequest} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      setIamPolicy(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://sourcerepo.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{resource}:setIamPolicy')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['resource'],
          pathParams: ['resource'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * sourcerepo.projects.repos.testIamPermissions
          * @desc Returns permissions that a caller has on the specified
          * resource. If the resource does not exist, this will return an empty
          * set of permissions, not a NOT_FOUND error.
          * @alias sourcerepo.projects.repos.testIamPermissions
          * @memberOf! sourcerepo(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
          * @param {sourcerepo(v1).TestIamPermissionsRequest} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      testIamPermissions(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://sourcerepo.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{resource}:testIamPermissions')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['resource'],
          pathParams: ['resource'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }

    }
  };
}
/**
 * @typedef AuditConfig
 * @memberOf! sourcerepo(v1)
 * @type object
 * @property {sourcerepo(v1).AuditLogConfig[]} auditLogConfigs The configuration for logging of each type of permission. Next ID: 4
 * @property {string[]} exemptedMembers
 * @property {string} service Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
 */
/**
 * @typedef AuditLogConfig
 * @memberOf! sourcerepo(v1)
 * @type object
 * @property {string[]} exemptedMembers Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
 * @property {string} logType The log type that this config enables.
 */
/**
 * @typedef Binding
 * @memberOf! sourcerepo(v1)
 * @type object
 * @property {sourcerepo(v1).Expr} condition The condition that is associated with this binding. NOTE: an unsatisfied condition will not allow user access via current binding. Different bindings, including their conditions, are examined independently. This field is GOOGLE_INTERNAL.
 * @property {string[]} members Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values:  * `allUsers`: A special identifier that represents anyone who is    on the internet; with or without a Google account.  * `allAuthenticatedUsers`: A special identifier that represents anyone    who is authenticated with a Google account or a service account.  * `user:{emailid}`: An email address that represents a specific Google    account. For example, `alice@gmail.com` or `joe@example.com`.   * `serviceAccount:{emailid}`: An email address that represents a service    account. For example, `my-other-app@appspot.gserviceaccount.com`.  * `group:{emailid}`: An email address that represents a Google group.    For example, `admins@example.com`.   * `domain:{domain}`: A Google Apps domain name that represents all the    users of that domain. For example, `google.com` or `example.com`.
 * @property {string} role Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. Required
 */
/**
 * @typedef Empty
 * @memberOf! sourcerepo(v1)
 * @type object
 */
/**
 * @typedef Expr
 * @memberOf! sourcerepo(v1)
 * @type object
 * @property {string} description An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
 * @property {string} expression Textual representation of an expression in Common Expression Language syntax.  The application context of the containing message determines which well-known feature set of CEL is supported.
 * @property {string} location An optional string indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
 * @property {string} title An optional title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
 */
/**
 * @typedef ListReposResponse
 * @memberOf! sourcerepo(v1)
 * @type object
 * @property {string} nextPageToken If non-empty, additional repositories exist within the project. These can be retrieved by including this value in the next ListReposRequest&#39;s page_token field.
 * @property {sourcerepo(v1).Repo[]} repos The listed repos.
 */
/**
 * @typedef MirrorConfig
 * @memberOf! sourcerepo(v1)
 * @type object
 * @property {string} deployKeyId ID of the SSH deploy key at the other hosting service. Removing this key from the other service would deauthorize Google Cloud Source Repositories from mirroring.
 * @property {string} url URL of the main repository at the other hosting service.
 * @property {string} webhookId ID of the webhook listening to updates to trigger mirroring. Removing this webhook from the other hosting service will stop Google Cloud Source Repositories from receiving notifications, and thereby disabling mirroring.
 */
/**
 * @typedef Policy
 * @memberOf! sourcerepo(v1)
 * @type object
 * @property {sourcerepo(v1).AuditConfig[]} auditConfigs Specifies cloud audit logging configuration for this policy.
 * @property {sourcerepo(v1).Binding[]} bindings Associates a list of `members` to a `role`. `bindings` with no members will result in an error.
 * @property {string} etag `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy.  If no `etag` is provided in the call to `setIamPolicy`, then the existing policy is overwritten blindly.
 * @property {boolean} iamOwned
 * @property {integer} version Version of the `Policy`. The default version is 0.
 */
/**
 * @typedef Repo
 * @memberOf! sourcerepo(v1)
 * @type object
 * @property {sourcerepo(v1).MirrorConfig} mirrorConfig How this repository mirrors a repository managed by another service. Read-only field.
 * @property {string} name Resource name of the repository, of the form `projects/&lt;project&gt;/repos/&lt;repo&gt;`.  The repo name may contain slashes. eg, `projects/myproject/repos/name/with/slash`
 * @property {string} size The disk usage of the repo, in bytes. Read-only field. Size is only returned by GetRepo.
 * @property {string} url URL to clone the repository from Google Cloud Source Repositories. Read-only field.
 */
/**
 * @typedef SetIamPolicyRequest
 * @memberOf! sourcerepo(v1)
 * @type object
 * @property {sourcerepo(v1).Policy} policy REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
 * @property {string} updateMask OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: paths: &quot;bindings, etag&quot; This field is only used by Cloud IAM.
 */
/**
 * @typedef TestIamPermissionsRequest
 * @memberOf! sourcerepo(v1)
 * @type object
 * @property {string[]} permissions The set of permissions to check for the `resource`. Permissions with wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
 */
/**
 * @typedef TestIamPermissionsResponse
 * @memberOf! sourcerepo(v1)
 * @type object
 * @property {string[]} permissions A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
 */

export = Sourcerepo;
