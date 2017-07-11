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
 * Firebase Rules API
 *
 * Creates and manages rules that determine when a Firebase Rules-enabled service should permit a request.

 *
 * @example
 * const google = require('googleapis');
 * const firebaserules = google.firebaserules('v1');
 *
 * @namespace firebaserules
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Firebaserules
 */
function Firebaserules(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.projects = {

    /**
     * firebaserules.projects.test
     *
     * @desc Test `Source` for syntactic and semantic correctness. Issues present, if any, will be returned to the caller with a description, severity, and source location.  The test method may be executed with `Source` or a `Ruleset` name. Passing `Source` is useful for unit testing new rules. Passing a `Ruleset` name is useful for regression testing an existing rule.  The following is an example of `Source` that permits users to upload images to a bucket bearing their user id and matching the correct metadata:  _*Example*_      // Users are allowed to subscribe and unsubscribe to the blog.     service firebase.storage {       match /users/{userId}/images/{imageName} {           allow write: if userId == request.auth.uid               && (imageName.matches('*.png$')               || imageName.matches('*.jpg$'))               && resource.mimeType.matches('^image/')       }     }
     *
     * @alias firebaserules.projects.test
     * @memberOf! firebaserules(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Tests may either provide `source` or a `Ruleset` resource name.  For tests against `source`, the resource name must refer to the project: Format: `projects/{project_id}`  For tests against a `Ruleset`, this must be the `Ruleset` resource name: Format: `projects/{project_id}/rulesets/{ruleset_id}`
     * @param {firebaserules(v1).TestRulesetRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    test: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://firebaserules.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{name}:test').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    rulesets: {

      /**
       * firebaserules.projects.rulesets.create
       *
       * @desc Create a `Ruleset` from `Source`.  The `Ruleset` is given a unique generated name which is returned to the caller. `Source` containing syntactic or semantics errors will result in an error response indicating the first error encountered. For a detailed view of `Source` issues, use TestRuleset.
       *
       * @alias firebaserules.projects.rulesets.create
       * @memberOf! firebaserules(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Resource name for Project which owns this `Ruleset`.  Format: `projects/{project_id}`
       * @param {firebaserules(v1).Ruleset} params.resource Request body data
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

        const rootUrl = options.rootUrl || 'https://firebaserules.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{name}/rulesets').replace(/([^:]\/)\/+/g, '$1'),
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
       * firebaserules.projects.rulesets.delete
       *
       * @desc Delete a `Ruleset` by resource name.  If the `Ruleset` is referenced by a `Release` the operation will fail.
       *
       * @alias firebaserules.projects.rulesets.delete
       * @memberOf! firebaserules(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Resource name for the ruleset to delete.  Format: `projects/{project_id}/rulesets/{ruleset_id}`
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

        const rootUrl = options.rootUrl || 'https://firebaserules.googleapis.com/';

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
      },

      /**
       * firebaserules.projects.rulesets.list
       *
       * @desc List `Ruleset` metadata only and optionally filter the results by `Ruleset` name.  The full `Source` contents of a `Ruleset` may be retrieved with GetRuleset.
       *
       * @alias firebaserules.projects.rulesets.list
       * @memberOf! firebaserules(v1)
       *
       * @param {object} params Parameters for request
       * @param {integer=} params.pageSize Page size to load. Maximum of 100. Defaults to 10. Note: `page_size` is just a hint and the service may choose to load less than `page_size` due to the size of the output. To traverse all of the releases, caller should iterate until the `page_token` is empty.
       * @param {string=} params.filter `Ruleset` filter. The list method supports filters with restrictions on `Ruleset.name`.  Filters on `Ruleset.create_time` should use the `date` function which parses strings that conform to the RFC 3339 date/time specifications.  Example: `create_time > date("2017-01-01") AND name=UUID-*`
       * @param {string=} params.pageToken Next page token for loading the next batch of `Ruleset` instances.
       * @param {string} params.name Resource name for the project.  Format: `projects/{project_id}`
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

        const rootUrl = options.rootUrl || 'https://firebaserules.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{name}/rulesets').replace(/([^:]\/)\/+/g, '$1'),
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
       * firebaserules.projects.rulesets.get
       *
       * @desc Get a `Ruleset` by name including the full `Source` contents.
       *
       * @alias firebaserules.projects.rulesets.get
       * @memberOf! firebaserules(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Resource name for the ruleset to get.  Format: `projects/{project_id}/rulesets/{ruleset_id}`
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

        const rootUrl = options.rootUrl || 'https://firebaserules.googleapis.com/';

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
      }
    },

    releases: {

      /**
       * firebaserules.projects.releases.list
       *
       * @desc List the `Release` values for a project. This list may optionally be filtered by `Release` name, `Ruleset` name, `TestSuite` name, or any combination thereof.
       *
       * @alias firebaserules.projects.releases.list
       * @memberOf! firebaserules(v1)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.filter `Release` filter. The list method supports filters with restrictions on the `Release.name`, `Release.ruleset_name`, and `Release.test_suite_name`.  Example 1: A filter of 'name=prod*' might return `Release`s with names within 'projects/foo' prefixed with 'prod':  Name                          | Ruleset Name ------------------------------|------------- projects/foo/releases/prod    | projects/foo/rulesets/uuid1234 projects/foo/releases/prod/v1 | projects/foo/rulesets/uuid1234 projects/foo/releases/prod/v2 | projects/foo/rulesets/uuid8888  Example 2: A filter of `name=prod* ruleset_name=uuid1234` would return only `Release` instances for 'projects/foo' with names prefixed with 'prod' referring to the same `Ruleset` name of 'uuid1234':  Name                          | Ruleset Name ------------------------------|------------- projects/foo/releases/prod    | projects/foo/rulesets/1234 projects/foo/releases/prod/v1 | projects/foo/rulesets/1234  In the examples, the filter parameters refer to the search filters are relative to the project. Fully qualified prefixed may also be used. e.g. `test_suite_name=projects/foo/testsuites/uuid1`
       * @param {string=} params.pageToken Next page token for the next batch of `Release` instances.
       * @param {string} params.name Resource name for the project.  Format: `projects/{project_id}`
       * @param {integer=} params.pageSize Page size to load. Maximum of 100. Defaults to 10. Note: `page_size` is just a hint and the service may choose to load fewer than `page_size` results due to the size of the output. To traverse all of the releases, the caller should iterate until the `page_token` on the response is empty.
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

        const rootUrl = options.rootUrl || 'https://firebaserules.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{name}/releases').replace(/([^:]\/)\/+/g, '$1'),
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
       * firebaserules.projects.releases.get
       *
       * @desc Get a `Release` by name.
       *
       * @alias firebaserules.projects.releases.get
       * @memberOf! firebaserules(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Resource name of the `Release`.  Format: `projects/{project_id}/releases/{release_id}`
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

        const rootUrl = options.rootUrl || 'https://firebaserules.googleapis.com/';

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
       * firebaserules.projects.releases.update
       *
       * @desc Update a `Release`.  Only updates to the `ruleset_name` and `test_suite_name` fields will be honored. `Release` rename is not supported. To create a `Release` use the CreateRelease method.
       *
       * @alias firebaserules.projects.releases.update
       * @memberOf! firebaserules(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Resource name for the `Release`.  `Release` names may be structured `app1/prod/v2` or flat `app1_prod_v2` which affords developers a great deal of flexibility in mapping the name to the style that best fits their existing development practices. For example, a name could refer to an environment, an app, a version, or some combination of three.  In the table below, for the project name `projects/foo`, the following relative release paths show how flat and structured names might be chosen to match a desired development / deployment strategy.  Use Case     | Flat Name           | Structured Name -------------|---------------------|---------------- Environments | releases/qa         | releases/qa Apps         | releases/app1_qa    | releases/app1/qa Versions     | releases/app1_v2_qa | releases/app1/v2/qa  The delimiter between the release name path elements can be almost anything and it should work equally well with the release name list filter, but in many ways the structured paths provide a clearer picture of the relationship between `Release` instances.  Format: `projects/{project_id}/releases/{release_id}`
       * @param {firebaserules(v1).Release} params.resource Request body data
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

        const rootUrl = options.rootUrl || 'https://firebaserules.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
       * firebaserules.projects.releases.create
       *
       * @desc Create a `Release`.  Release names should reflect the developer's deployment practices. For example, the release name may include the environment name, application name, application version, or any other name meaningful to the developer. Once a `Release` refers to a `Ruleset`, the rules can be enforced by Firebase Rules-enabled services.  More than one `Release` may be 'live' concurrently. Consider the following three `Release` names for `projects/foo` and the `Ruleset` to which they refer.  Release Name                    | Ruleset Name --------------------------------|------------- projects/foo/releases/prod      | projects/foo/rulesets/uuid123 projects/foo/releases/prod/beta | projects/foo/rulesets/uuid123 projects/foo/releases/prod/v23  | projects/foo/rulesets/uuid456  The table reflects the `Ruleset` rollout in progress. The `prod` and `prod/beta` releases refer to the same `Ruleset`. However, `prod/v23` refers to a new `Ruleset`. The `Ruleset` reference for a `Release` may be updated using the UpdateRelease method.
       *
       * @alias firebaserules.projects.releases.create
       * @memberOf! firebaserules(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Resource name for the project which owns this `Release`.  Format: `projects/{project_id}`
       * @param {firebaserules(v1).Release} params.resource Request body data
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

        const rootUrl = options.rootUrl || 'https://firebaserules.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{name}/releases').replace(/([^:]\/)\/+/g, '$1'),
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
       * firebaserules.projects.releases.delete
       *
       * @desc Delete a `Release` by resource name.
       *
       * @alias firebaserules.projects.releases.delete
       * @memberOf! firebaserules(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Resource name for the `Release` to delete.  Format: `projects/{project_id}/releases/{release_id}`
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

        const rootUrl = options.rootUrl || 'https://firebaserules.googleapis.com/';

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
 * @typedef FunctionMock
 * @memberOf! firebaserules(v1)
 * @type object
* @property {firebaserules(v1).Arg[]} args The list of `Arg` values to match. The order in which the arguments are
provided is the order in which they must appear in the function
invocation.
* @property {string} function The name of the function.

The function name must match one provided by a service declaration.
* @property {firebaserules(v1).Result} result The mock result of the function call.
*/
/**
 * @typedef Source
 * @memberOf! firebaserules(v1)
 * @type object
 * @property {firebaserules(v1).File[]} files `File` set constituting the `Source` bundle.
 */
/**
 * @typedef Result
 * @memberOf! firebaserules(v1)
 * @type object
* @property {firebaserules(v1).Empty} undefined The result is undefined, meaning the result could not be computed.
* @property {any} value The result is an actual value. The type of the value must match that
of the type declared by the service.
*/
/**
 * @typedef SourcePosition
 * @memberOf! firebaserules(v1)
 * @type object
 * @property {integer} column First column on the source line associated with the source fragment.
 * @property {string} fileName Name of the `File`.
 * @property {integer} line Line number of the source fragment. 1-based.
 */
/**
 * @typedef TestCase
 * @memberOf! firebaserules(v1)
 * @type object
* @property {string} expectation Test expectation.
* @property {any} request Request context.

The exact format of the request context is service-dependent. See the
appropriate service documentation for information about the supported
fields and types on the request. Minimally, all services support the
following fields and types:

Request field  | Type
---------------|-----------------
auth.uid       | `string`
auth.token     | `map&lt;string, string&gt;`
headers        | `map&lt;string, string&gt;`
method         | `string`
params         | `map&lt;string, string&gt;`
path           | `string`
time           | `google.protobuf.Timestamp`

If the request value is not well-formed for the service, the request will
be rejected as an invalid argument.
* @property {firebaserules(v1).FunctionMock[]} functionMocks Optional function mocks for service-defined functions. If not set, any
service defined function is expected to return an error, which may or may
not influence the test outcome.
* @property {any} resource Optional resource value as it appears in persistent storage before the
request is fulfilled.

The resource type depends on the `request.path` value.
*/
/**
 * @typedef TestRulesetRequest
 * @memberOf! firebaserules(v1)
 * @type object
* @property {firebaserules(v1).TestSuite} testSuite Inline `TestSuite` to run.
* @property {firebaserules(v1).Source} source Optional `Source` to be checked for correctness.

This field must not be set when the resource name refers to a `Ruleset`.
*/
/**
 * @typedef Ruleset
 * @memberOf! firebaserules(v1)
 * @type object
* @property {string} createTime Time the `Ruleset` was created.
Output only.
* @property {string} name Name of the `Ruleset`. The ruleset_id is auto generated by the service.
Format: `projects/{project_id}/rulesets/{ruleset_id}`
Output only.
* @property {firebaserules(v1).Source} source `Source` for the `Ruleset`.
*/
/**
 * @typedef Issue
 * @memberOf! firebaserules(v1)
 * @type object
 * @property {string} severity The severity of the issue.
 * @property {string} description Short error description.
 * @property {firebaserules(v1).SourcePosition} sourcePosition Position of the issue in the `Source`.
 */
/**
 * @typedef File
 * @memberOf! firebaserules(v1)
 * @type object
 * @property {string} fingerprint Fingerprint (e.g. github sha) associated with the `File`.
 * @property {string} name File name.
 * @property {string} content Textual Content.
 */
/**
 * @typedef FunctionCall
 * @memberOf! firebaserules(v1)
 * @type object
 * @property {any[]} args The arguments that were provided to the function.
 * @property {string} function Name of the function invoked.
 */
/**
 * @typedef ListReleasesResponse
 * @memberOf! firebaserules(v1)
 * @type object
* @property {firebaserules(v1).Release[]} releases List of `Release` instances.
* @property {string} nextPageToken The pagination token to retrieve the next page of results. If the value is
empty, no further results remain.
*/
/**
 * @typedef Release
 * @memberOf! firebaserules(v1)
 * @type object
* @property {string} updateTime Time the release was updated.
Output only.
* @property {string} rulesetName Name of the `Ruleset` referred to by this `Release`. The `Ruleset` must
exist the `Release` to be created.
* @property {string} name Resource name for the `Release`.

`Release` names may be structured `app1/prod/v2` or flat `app1_prod_v2`
which affords developers a great deal of flexibility in mapping the name
to the style that best fits their existing development practices. For
example, a name could refer to an environment, an app, a version, or some
combination of three.

In the table below, for the project name `projects/foo`, the following
relative release paths show how flat and structured names might be chosen
to match a desired development / deployment strategy.

Use Case     | Flat Name           | Structured Name
-------------|---------------------|----------------
Environments | releases/qa         | releases/qa
Apps         | releases/app1_qa    | releases/app1/qa
Versions     | releases/app1_v2_qa | releases/app1/v2/qa

The delimiter between the release name path elements can be almost anything
and it should work equally well with the release name list filter, but in
many ways the structured paths provide a clearer picture of the
relationship between `Release` instances.

Format: `projects/{project_id}/releases/{release_id}`
* @property {string} createTime Time the release was created.
Output only.
*/
/**
 * @typedef TestRulesetResponse
 * @memberOf! firebaserules(v1)
 * @type object
* @property {firebaserules(v1).TestResult[]} testResults The set of test results given the test cases in the `TestSuite`.
The results will appear in the same order as the test cases appear in the
`TestSuite`.
* @property {firebaserules(v1).Issue[]} issues Syntactic and semantic `Source` issues of varying severity. Issues of
`ERROR` severity will prevent tests from executing.
*/
/**
 * @typedef ListRulesetsResponse
 * @memberOf! firebaserules(v1)
 * @type object
* @property {string} nextPageToken The pagination token to retrieve the next page of results. If the value is
empty, no further results remain.
* @property {firebaserules(v1).Ruleset[]} rulesets List of `Ruleset` instances.
*/
/**
 * @typedef TestResult
 * @memberOf! firebaserules(v1)
 * @type object
* @property {firebaserules(v1).FunctionCall[]} functionCalls The set of function calls made to service-defined methods.

Function calls are included in the order in which they are encountered
during evaluation, are provided for both mocked and unmocked functions,
and included on the response regardless of the test `state`.
* @property {string[]} debugMessages Debug messages related to test execution issues encountered during
evaluation.

Debug messages may be related to too many or too few invocations of
function mocks or to runtime errors that occur during evaluation.

For example: ```Unable to read variable [name: &quot;resource&quot;]```
* @property {string} state State of the test.
* @property {firebaserules(v1).SourcePosition} errorPosition Position in the `Source` or `Ruleset` where the principle runtime error
occurs.

Evaluation of an expression may result in an error. Rules are deny by
default, so a `DENY` expectation when an error is generated is valid.
When there is a `DENY` with an error, the `SourcePosition` is returned.

E.g. `error_position { line: 19 column: 37 }`
*/
/**
 * @typedef Arg
 * @memberOf! firebaserules(v1)
 * @type object
 * @property {firebaserules(v1).Empty} anyValue Argument matches any value provided.
 * @property {any} exactValue Argument exactly matches value provided.
 */
/**
 * @typedef TestSuite
 * @memberOf! firebaserules(v1)
 * @type object
 * @property {firebaserules(v1).TestCase[]} testCases Collection of test cases associated with the `TestSuite`.
 */
/**
 * @typedef Empty
 * @memberOf! firebaserules(v1)
 * @type object
 */
export = Firebaserules;
