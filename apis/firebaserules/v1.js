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
 * Firebase Rules API
 *
 * Creates and manages rules that determine when a Firebase Rules-enabled service should permit a request.

 *
 * @example
 * var google = require('googleapis');
 * var firebaserules = google.firebaserules('v1');
 *
 * @namespace firebaserules
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Firebaserules
 */
function Firebaserules(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.projects = {

    /**
     * firebaserules.projects.test
     *
     * @desc Test `Source` for syntactic and semantic correctness. Issues present in the rules, if any, will be returned to the caller with a description, severity, and source location.  The test method will typically be executed with a developer provided `Source`, but if regression testing is desired, this method may be executed against a `Ruleset` resource name and the `Source` will be retrieved from the persisted `Ruleset`.  The following is an example of `Source` that permits users to upload images to a bucket bearing their user id and matching the correct metadata:  _*Example*_      // Users are allowed to subscribe and unsubscribe to the blog.     service firebase.storage {       match /users/{userId}/images/{imageName} {           allow write: if userId == request.userId               && (imageName.endsWith('.png') || imageName.endsWith('.jpg'))               && resource.mimeType.startsWith('image/')       }     }
     *
     * @alias firebaserules.projects.test
     * @memberOf! firebaserules(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the project.  Format: `projects/{project_id}`
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    test: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://firebaserules.googleapis.com/v1/{name}:test',
          method: 'POST'
        },
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
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://firebaserules.googleapis.com/v1/{name}/rulesets',
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
       * firebaserules.projects.rulesets.get
       *
       * @desc Get a `Ruleset` by name including the full `Source` contents.
       *
       * @alias firebaserules.projects.rulesets.get
       * @memberOf! firebaserules(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Resource name for the ruleset to get.  Format: `projects/{project_id}/rulesets/{ruleset_id}`
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://firebaserules.googleapis.com/v1/{name}',
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
       * firebaserules.projects.rulesets.list
       *
       * @desc List `Ruleset` metadata only and optionally filter the results by Ruleset name.  The full `Source` contents of a `Ruleset` may be retrieved with GetRuleset.
       *
       * @alias firebaserules.projects.rulesets.list
       * @memberOf! firebaserules(v1)
       *
       * @param {object} params Parameters for request
       * @param {integer=} params.pageSize Page size to load. Maximum of 100. Defaults to 10. Note: `page_size` is just a hint and the service may choose to load less than `page_size` due to the size of the output. To traverse all of the releases, caller should iterate until the `page_token` is empty.
       * @param {string} params.name Resource name for the project.  Format: `projects/{project_id}`
       * @param {string=} params.pageToken Next page token for loading the next batch of `Ruleset` instances.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://firebaserules.googleapis.com/v1/{name}/rulesets',
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
       * firebaserules.projects.rulesets.delete
       *
       * @desc Delete a `Ruleset` by resource name.  If the `Ruleset` is referenced by a `Release` the operation will fail.
       *
       * @alias firebaserules.projects.rulesets.delete
       * @memberOf! firebaserules(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Resource name for the ruleset to delete.  Format: `projects/{project_id}/rulesets/{ruleset_id}`
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      delete: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://firebaserules.googleapis.com/v1/{name}',
            method: 'DELETE'
          },
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
       * firebaserules.projects.releases.update
       *
       * @desc Update a `Release`.  Only updates to the `ruleset_name` field will be honored. `Release` rename is not supported. To create a `Release` use the CreateRelease method instead.
       *
       * @alias firebaserules.projects.releases.update
       * @memberOf! firebaserules(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Resource name for the `Release`.  `Release` names may be structured `app1/prod/v2` or flat `app1_prod_v2` which affords developers a great deal of flexibility in mapping the name to the style that best fits their existing development practices. For example, a name could refer to an environment, an app, a version, or some combination of three.  In the table below, for the project name `projects/foo`, the following relative release paths show how flat and structured names might be chosen to match a desired development / deployment strategy.  Use Case     | Flat Name           | Structured Name -------------|---------------------|---------------- Environments | releases/qa         | releases/qa Apps         | releases/app1_qa    | releases/app1/qa Versions     | releases/app1_v2_qa | releases/app1/v2/qa  The delimiter between the release name path elements can be almost anything and it should work equally well with the release name list filter, but in many ways the structured paths provide a clearer picture of the relationship between `Release` instances.  Format: `projects/{project_id}/releases/{release_id}`
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      update: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://firebaserules.googleapis.com/v1/{name}',
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
       * firebaserules.projects.releases.create
       *
       * @desc Create a `Release`.  Release names should reflect the developer's deployment practices. For example, the release name may include the environment name, application name, application version, or any other name meaningful to the developer. Once a `Release` refers to a `Ruleset`, the rules can be enforced by Firebase Rules-enabled services.  More than one `Release` may be 'live' concurrently. Consider the following three `Release` names for `projects/foo` and the `Ruleset` to which they refer.  Release Name                    | Ruleset Name --------------------------------|------------- projects/foo/releases/prod      | projects/foo/rulesets/uuid123 projects/foo/releases/prod/beta | projects/foo/rulesets/uuid123 projects/foo/releases/prod/v23  | projects/foo/rulesets/uuid456  The table reflects the `Ruleset` rollout in progress. The `prod` and `prod/beta` releases refer to the same `Ruleset`. However, `prod/v23` refers to a new `Ruleset`. The `Ruleset` reference for a `Release` may be updated using the UpdateRelease method, and the custom `Release` name may be referenced by specifying the `X-Firebase-Rules-Release-Name` header.
       *
       * @alias firebaserules.projects.releases.create
       * @memberOf! firebaserules(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Resource name for the project which owns this `Release`.  Format: `projects/{project_id}`
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://firebaserules.googleapis.com/v1/{name}/releases',
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
       * firebaserules.projects.releases.get
       *
       * @desc Get a `Release` by name.
       *
       * @alias firebaserules.projects.releases.get
       * @memberOf! firebaserules(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Resource name of the `Release`.   Format: `projects/{project_id}/releases/{release_id}`
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://firebaserules.googleapis.com/v1/{name}',
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
       * firebaserules.projects.releases.list
       *
       * @desc List the `Release` values for a project. This list may optionally be filtered by `Release` name or `Ruleset` id or both.
       *
       * @alias firebaserules.projects.releases.list
       * @memberOf! firebaserules(v1)
       *
       * @param {object} params Parameters for request
       * @param {integer=} params.pageSize Page size to load. Maximum of 100. Defaults to 10. Note: `page_size` is just a hint and the service may choose to load less than `page_size` due to the size of the output. To traverse all of the releases, caller should iterate until the `page_token` is empty.
       * @param {string=} params.filter `Release` filter. The list method supports filters with restrictions on the `Release` `name` and also on the `Ruleset` `ruleset_name`.  Example 1) A filter of 'name=prod*' might return `Release`s with names within 'projects/foo' prefixed with 'prod':  Name                          | Ruleset Name ------------------------------|------------- projects/foo/releases/prod    | projects/foo/rulesets/uuid1234 projects/foo/releases/prod/v1 | projects/foo/rulesets/uuid1234 projects/foo/releases/prod/v2 | projects/foo/rulesets/uuid8888  Example 2) A filter of `name=prod* ruleset_name=uuid1234` would return only `Release` instances for 'projects/foo' with names prefixed with 'prod' referring to the same `Ruleset` name of 'uuid1234':  Name                          | Ruleset Name ------------------------------|------------- projects/foo/releases/prod    | projects/foo/rulesets/1234 projects/foo/releases/prod/v1 | projects/foo/rulesets/1234  In the examples, the filter parameters refer to the search filters for release and ruleset names are relative to the project releases and rulesets collections. Fully qualified prefixed may also be used. e.g. `name=projects/foo/releases/prod* ruleset_name=projects/foo/rulesets/uuid1`
       * @param {string} params.name Resource name for the project.  Format: `projects/{project_id}`
       * @param {string=} params.pageToken Next page token for the next batch of `Release` instances.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://firebaserules.googleapis.com/v1/{name}/releases',
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
       * firebaserules.projects.releases.delete
       *
       * @desc Delete a `Release` by resource name.
       *
       * @alias firebaserules.projects.releases.delete
       * @memberOf! firebaserules(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Resource name for the `Release` to delete.  Format: `projects/{project_id}/releases/{release_id}`
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      delete: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://firebaserules.googleapis.com/v1/{name}',
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
  };
}

module.exports = Firebaserules;
