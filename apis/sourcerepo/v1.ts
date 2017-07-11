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

import createAPIRequest from '../../lib/apirequest';

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
function Sourcerepo(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.projects = {

    repos: {

      /**
       * sourcerepo.projects.repos.list
       *
       * @desc Returns all repos belonging to a project. The sizes of the repos are not set by ListRepos.  To get the size of a repo, use GetRepo.
       *
       * @alias sourcerepo.projects.repos.list
       * @memberOf! sourcerepo(v1)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.pageToken Resume listing repositories where a prior ListReposResponse left off. This is an opaque token that must be obtained from a recent, prior ListReposResponse's next_page_token field.
       * @param {string} params.name The project ID whose repos should be listed. Values are of the form `projects/<project>`.
       * @param {integer=} params.pageSize Maximum number of repositories to return; between 1 and 500. If not set or zero, defaults to 100 at the server.
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

        const rootUrl = options.rootUrl || 'https://sourcerepo.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{name}/repos').replace(/([^:]\/)\/+/g, '$1'),
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
       * sourcerepo.projects.repos.setIamPolicy
       *
       * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
       *
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
      setIamPolicy: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://sourcerepo.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{resource}:setIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
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
       * sourcerepo.projects.repos.create
       *
       * @desc Creates a repo in the given project with the given name.  If the named repository already exists, `CreateRepo` returns `ALREADY_EXISTS`.
       *
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
      create: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://sourcerepo.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{parent}/repos').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * sourcerepo.projects.repos.getIamPolicy
       *
       * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
       *
       * @alias sourcerepo.projects.repos.getIamPolicy
       * @memberOf! sourcerepo(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
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

        const rootUrl = options.rootUrl || 'https://sourcerepo.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{resource}:getIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['resource'],
          pathParams: ['resource'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * sourcerepo.projects.repos.get
       *
       * @desc Returns information about a repo.
       *
       * @alias sourcerepo.projects.repos.get
       * @memberOf! sourcerepo(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The name of the requested repository. Values are of the form `projects/<project>/repos/<repo>`.
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

        const rootUrl = options.rootUrl || 'https://sourcerepo.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
       * sourcerepo.projects.repos.testIamPermissions
       *
       * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.
       *
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
      testIamPermissions: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://sourcerepo.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{resource}:testIamPermissions').replace(/([^:]\/)\/+/g, '$1'),
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
       * sourcerepo.projects.repos.delete
       *
       * @desc Deletes a repo.
       *
       * @alias sourcerepo.projects.repos.delete
       * @memberOf! sourcerepo(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The name of the repo to delete. Values are of the form `projects/<project>/repos/<repo>`.
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

        const rootUrl = options.rootUrl || 'https://sourcerepo.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
  };
}

/**
 * @typedef TestIamPermissionsRequest
 * @memberOf! sourcerepo(v1)
 * @type object
* @property {string[]} permissions The set of permissions to check for the `resource`. Permissions with
wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed. For more
information see
[IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
*/
/**
 * @typedef Policy
 * @memberOf! sourcerepo(v1)
 * @type object
* @property {integer} version Version of the `Policy`. The default version is 0.
* @property {sourcerepo(v1).AuditConfig[]} auditConfigs Specifies cloud audit logging configuration for this policy.
* @property {sourcerepo(v1).Binding[]} bindings Associates a list of `members` to a `role`.
Multiple `bindings` must not be specified for the same `role`.
`bindings` with no members will result in an error.
* @property {string} etag `etag` is used for optimistic concurrency control as a way to help
prevent simultaneous updates of a policy from overwriting each other.
It is strongly suggested that systems make use of the `etag` in the
read-modify-write cycle to perform policy updates in order to avoid race
conditions: An `etag` is returned in the response to `getIamPolicy`, and
systems are expected to put that etag in the request to `setIamPolicy` to
ensure that their change will be applied to the same version of the policy.

If no `etag` is provided in the call to `setIamPolicy`, then the existing
policy is overwritten blindly.
* @property {boolean} iamOwned 
* @property {sourcerepo(v1).Rule[]} rules If more than one rule is specified, the rules are applied in the following
manner:
- All matching LOG rules are always applied.
- If any DENY/DENY_WITH_LOG rule matches, permission is denied.
  Logging will be applied if one or more matching rule requires logging.
- Otherwise, if any ALLOW/ALLOW_WITH_LOG rule matches, permission is
  granted.
  Logging will be applied if one or more matching rule requires logging.
- Otherwise, if no rule applies, permission is denied.
*/
/**
 * @typedef DataAccessOptions
 * @memberOf! sourcerepo(v1)
 * @type object
 */
/**
 * @typedef AuditConfig
 * @memberOf! sourcerepo(v1)
 * @type object
* @property {string[]} exemptedMembers 
* @property {string} service Specifies a service that will be enabled for audit logging.
For example, `storage.googleapis.com`, `cloudsql.googleapis.com`.
`allServices` is a special value that covers all services.
* @property {sourcerepo(v1).AuditLogConfig[]} auditLogConfigs The configuration for logging of each type of permission.
Next ID: 4
*/
/**
 * @typedef SetIamPolicyRequest
 * @memberOf! sourcerepo(v1)
 * @type object
* @property {string} updateMask OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only
the fields in the mask will be modified. If no mask is provided, the
following default mask is used:
paths: &quot;bindings, etag&quot;
This field is only used by Cloud IAM.
* @property {sourcerepo(v1).Policy} policy REQUIRED: The complete policy to be applied to the `resource`. The size of
the policy is limited to a few 10s of KB. An empty policy is a
valid policy but certain Cloud Platform services (such as Projects)
might reject them.
*/
/**
 * @typedef CloudAuditOptions
 * @memberOf! sourcerepo(v1)
 * @type object
 * @property {string} logName The log_name to populate in the Cloud Audit Record.
 */
/**
 * @typedef Binding
 * @memberOf! sourcerepo(v1)
 * @type object
* @property {string[]} members Specifies the identities requesting access for a Cloud Platform resource.
`members` can have the following values:

* `allUsers`: A special identifier that represents anyone who is
   on the internet; with or without a Google account.

* `allAuthenticatedUsers`: A special identifier that represents anyone
   who is authenticated with a Google account or a service account.

* `user:{emailid}`: An email address that represents a specific Google
   account. For example, `alice@gmail.com` or `joe@example.com`.


* `serviceAccount:{emailid}`: An email address that represents a service
   account. For example, `my-other-app@appspot.gserviceaccount.com`.

* `group:{emailid}`: An email address that represents a Google group.
   For example, `admins@example.com`.


* `domain:{domain}`: A Google Apps domain name that represents all the
   users of that domain. For example, `google.com` or `example.com`.


* @property {string} role Role that is assigned to `members`.
For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
Required
*/
/**
 * @typedef Empty
 * @memberOf! sourcerepo(v1)
 * @type object
 */
/**
 * @typedef MirrorConfig
 * @memberOf! sourcerepo(v1)
 * @type object
* @property {string} deployKeyId ID of the SSH deploy key at the other hosting service.
Removing this key from the other service would deauthorize
Google Cloud Source Repositories from mirroring.
* @property {string} url URL of the main repository at the other hosting service.
* @property {string} webhookId ID of the webhook listening to updates to trigger mirroring.
Removing this webook from the other hosting service will stop
Google Cloud Source Repositories from receiving notifications,
and thereby disabling mirroring.
*/
/**
 * @typedef Repo
 * @memberOf! sourcerepo(v1)
 * @type object
* @property {string} url URL to clone the repository from Google Cloud Source Repositories.
* @property {string} size The disk usage of the repo, in bytes.
Only returned by GetRepo.
* @property {string} name Resource name of the repository, of the form
`projects/&lt;project&gt;/repos/&lt;repo&gt;`.  The repo name may contain slashes.
eg, `projects/myproject/repos/name/with/slash`
* @property {sourcerepo(v1).MirrorConfig} mirrorConfig How this repository mirrors a repository managed by another service.
*/
/**
 * @typedef TestIamPermissionsResponse
 * @memberOf! sourcerepo(v1)
 * @type object
* @property {string[]} permissions A subset of `TestPermissionsRequest.permissions` that the caller is
allowed.
*/
/**
 * @typedef Condition
 * @memberOf! sourcerepo(v1)
 * @type object
* @property {string[]} values The objects of the condition. This is mutually exclusive with &#39;value&#39;.
* @property {string} iam Trusted attributes supplied by the IAM system.
* @property {string} op An operator to apply the subject with.
* @property {string} svc Trusted attributes discharged by the service.
* @property {string} value DEPRECATED. Use &#39;values&#39; instead.
* @property {string} sys Trusted attributes supplied by any service that owns resources and uses
the IAM system for access control.
*/
/**
 * @typedef ListReposResponse
 * @memberOf! sourcerepo(v1)
 * @type object
* @property {sourcerepo(v1).Repo[]} repos The listed repos.
* @property {string} nextPageToken If non-empty, additional repositories exist within the project. These
can be retrieved by including this value in the next ListReposRequest&#39;s
page_token field.
*/
/**
 * @typedef CounterOptions
 * @memberOf! sourcerepo(v1)
 * @type object
 * @property {string} field The field value to attribute.
 * @property {string} metric The metric to update.
 */
/**
 * @typedef AuditLogConfig
 * @memberOf! sourcerepo(v1)
 * @type object
* @property {string[]} exemptedMembers Specifies the identities that do not cause logging for this type of
permission.
Follows the same format of Binding.members.
* @property {string} logType The log type that this config enables.
*/
/**
 * @typedef Rule
 * @memberOf! sourcerepo(v1)
 * @type object
* @property {string} description Human-readable description of the rule.
* @property {sourcerepo(v1).Condition[]} conditions Additional restrictions that must be met
* @property {sourcerepo(v1).LogConfig[]} logConfig The config returned to callers of tech.iam.IAM.CheckPolicy for any entries
that match the LOG action.
* @property {string[]} in If one or more &#39;in&#39; clauses are specified, the rule matches if
the PRINCIPAL/AUTHORITY_SELECTOR is in at least one of these entries.
* @property {string[]} permissions A permission is a string of form &#39;&lt;service&gt;.&lt;resource type&gt;.&lt;verb&gt;&#39;
(e.g., &#39;storage.buckets.list&#39;). A value of &#39;*&#39; matches all permissions,
and a verb part of &#39;*&#39; (e.g., &#39;storage.buckets.*&#39;) matches all verbs.
* @property {string} action Required
* @property {string[]} notIn If one or more &#39;not_in&#39; clauses are specified, the rule matches
if the PRINCIPAL/AUTHORITY_SELECTOR is in none of the entries.
The format for in and not_in entries is the same as for members in a
Binding (see google/iam/v1/policy.proto).
*/
/**
 * @typedef LogConfig
 * @memberOf! sourcerepo(v1)
 * @type object
 * @property {sourcerepo(v1).CloudAuditOptions} cloudAudit Cloud audit options.
 * @property {sourcerepo(v1).CounterOptions} counter Counter options.
 * @property {sourcerepo(v1).DataAccessOptions} dataAccess Data access options.
 */
export = Sourcerepo;
