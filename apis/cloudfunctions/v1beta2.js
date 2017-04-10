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
 * Google Cloud Functions API
 *
 * API for managing lightweight user-provided functions executed in response to events.
 *
 * @example
 * var google = require('googleapis');
 * var cloudfunctions = google.cloudfunctions('v1beta2');
 *
 * @namespace cloudfunctions
 * @type {Function}
 * @version v1beta2
 * @variation v1beta2
 * @param {object=} options Options for Cloudfunctions
 */
function Cloudfunctions(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.operations = {

    /**
     * cloudfunctions.operations.get
     *
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @alias cloudfunctions.operations.get
     * @memberOf! cloudfunctions(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
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
          url: 'https://cloudfunctions.googleapis.com/v1beta2/{name}',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.projects = {

    locations: {

      /**
       * cloudfunctions.projects.locations.list
       *
       * @desc Lists information about the supported locations for this service.
       *
       * @alias cloudfunctions.projects.locations.list
       * @memberOf! cloudfunctions(v1beta2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The resource that owns the locations collection, if applicable.
       * @param {string=} params.pageToken The standard list page token.
       * @param {integer=} params.pageSize The standard list page size.
       * @param {string=} params.filter The standard list filter.
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
            url: 'https://cloudfunctions.googleapis.com/v1beta2/{name}/locations',
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      functions: {

        /**
         * cloudfunctions.projects.locations.functions.get
         *
         * @desc Returns a function with the given name from the requested project.
         *
         * @alias cloudfunctions.projects.locations.functions.get
         * @memberOf! cloudfunctions(v1beta2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the function which details should be obtained.
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
              url: 'https://cloudfunctions.googleapis.com/v1beta2/{name}',
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
         * cloudfunctions.projects.locations.functions.update
         *
         * @desc Updates existing function.
         *
         * @alias cloudfunctions.projects.locations.functions.update
         * @memberOf! cloudfunctions(v1beta2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the function to be updated.
         * @param {cloudfunctions(v1beta2).CloudFunction} params.resource Request body data
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
              url: 'https://cloudfunctions.googleapis.com/v1beta2/{name}',
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
         * cloudfunctions.projects.locations.functions.delete
         *
         * @desc Deletes a function with the given name from the specified project. If the given function is used by some trigger, the trigger will be updated to remove this function.
         *
         * @alias cloudfunctions.projects.locations.functions.delete
         * @memberOf! cloudfunctions(v1beta2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the function which should be deleted.
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
              url: 'https://cloudfunctions.googleapis.com/v1beta2/{name}',
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
         * cloudfunctions.projects.locations.functions.list
         *
         * @desc Returns a list of functions that belong to the requested project.
         *
         * @alias cloudfunctions.projects.locations.functions.list
         * @memberOf! cloudfunctions(v1beta2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.location The project and location from which the function should be listed, specified in the format `projects/x/locations/x` If you want to list functions in all locations, use "-" in place of a location.
         * @param {string=} params.pageToken The value returned by the last `ListFunctionsResponse`; indicates that this is a continuation of a prior `ListFunctions` call, and that the system should return the next page of data.
         * @param {integer=} params.pageSize Maximum number of functions to return per call.
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
              url: 'https://cloudfunctions.googleapis.com/v1beta2/{location}/functions',
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['location'],
            pathParams: ['location'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * cloudfunctions.projects.locations.functions.call
         *
         * @desc Invokes synchronously deployed function. To be used for testing, very limited traffic allowed.
         *
         * @alias cloudfunctions.projects.locations.functions.call
         * @memberOf! cloudfunctions(v1beta2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the function to be called.
         * @param {cloudfunctions(v1beta2).CallFunctionRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        call: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          var parameters = {
            options: utils.extend({
              url: 'https://cloudfunctions.googleapis.com/v1beta2/{name}:call',
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
         * cloudfunctions.projects.locations.functions.create
         *
         * @desc Creates a new function. If a function with the given name already exists in the specified project, the long running operation will return `ALREADY_EXISTS` error.
         *
         * @alias cloudfunctions.projects.locations.functions.create
         * @memberOf! cloudfunctions(v1beta2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.location The project and location in which the function should be created, specified in the format `projects/x/locations/x`
         * @param {cloudfunctions(v1beta2).CloudFunction} params.resource Request body data
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
              url: 'https://cloudfunctions.googleapis.com/v1beta2/{location}/functions',
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['location'],
            pathParams: ['location'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    }
  };
}

/**
 * @typedef Operation
 * @memberOf! cloudfunctions(v1beta2)
 * @type object
* @property {object} response The normal response of the operation in case of success.  If the original
method returns no data on success, such as `Delete`, the response is
`google.protobuf.Empty`.  If the original method is standard
`Get`/`Create`/`Update`, the response should be the resource.  For other
methods, the response should have the type `XxxResponse`, where `Xxx`
is the original method name.  For example, if the original method name
is `TakeSnapshot()`, the inferred response type is
`TakeSnapshotResponse`.
* @property {string} name The server-assigned name, which is only unique within the same service that
originally returns it. If you use the default HTTP mapping, the
`name` should have the format of `operations/some/unique/name`.
* @property {cloudfunctions(v1beta2).Status} error The error result of the operation in case of failure or cancellation.
* @property {object} metadata Service-specific metadata associated with the operation.  It typically
contains progress information and common metadata such as create time.
Some services might not provide such metadata.  Any method that returns a
long-running operation should document the metadata type, if any.
* @property {boolean} done If the value is `false`, it means the operation is still in progress.
If true, the operation is completed, and either `error` or `response` is
available.
*/
/**
 * @typedef OperationMetadataV1Beta2
 * @memberOf! cloudfunctions(v1beta2)
 * @type object
* @property {string} target Target of the operation - for example
projects/project-1/locations/region-1/functions/function-1
* @property {object} request The original request that started the operation.
* @property {string} type Type of operation.
*/
/**
 * @typedef Status
 * @memberOf! cloudfunctions(v1beta2)
 * @type object
* @property {integer} code The status code, which should be an enum value of google.rpc.Code.
* @property {string} message A developer-facing error message, which should be in English. Any
user-facing error message should be localized and sent in the
google.rpc.Status.details field, or localized by the client.
* @property {object[]} details A list of messages that carry the error details.  There will be a
common set of message types for APIs to use.
*/
/**
 * @typedef CallFunctionRequest
 * @memberOf! cloudfunctions(v1beta2)
 * @type object
 * @property {string} data Input to be passed to the function.
 */
/**
 * @typedef SourceRepository
 * @memberOf! cloudfunctions(v1beta2)
 * @type object
* @property {string} repositoryUrl URL to the hosted repository where the function is defined. Only paths in
https://source.developers.google.com domain are supported. The path should
contain the name of the repository.
* @property {string} tag The name of the tag that captures the state of the repository from
which the function should be fetched.
* @property {string} branch The name of the branch from which the function should be fetched.
* @property {string} sourcePath The path within the repository where the function is defined. The path
should point to the directory where Cloud Functions files are located. Use
&quot;/&quot; if the function is defined directly in the root directory of a
repository.
* @property {string} deployedRevision Output only. The id of the revision that was resolved at the moment of
function creation or update. For example when a user deployed from a
branch, it will be the revision id of the latest change on this branch at
that time. If user deployed from revision then this value will be always
equal to the revision specified by the user.
* @property {string} revision The id of the revision that captures the state of the repository from
which the function should be fetched.
*/
/**
 * @typedef CloudFunction
 * @memberOf! cloudfunctions(v1beta2)
 * @type object
* @property {string} updateTime Output only. The last update timestamp of a Cloud Function.
* @property {string} latestOperation Output only. Name of the most recent operation modifying the function. If
the function status is `DEPLOYING` or `DELETING`, then it points to the
active operation.
* @property {cloudfunctions(v1beta2).HTTPSTrigger} httpsTrigger An HTTPS endpoint type of source that can be triggered via URL.
* @property {cloudfunctions(v1beta2).EventTrigger} eventTrigger A source that fires events in response to a condition in another service.
* @property {string} status Output only. Status of the function deployment.
* @property {string} timeout The function execution timeout. Execution is considered failed and
can be terminated if the function is not completed at the end of the
timeout period. Defaults to 60 seconds.
* @property {integer} availableMemoryMb The amount of memory in MB available for a function.
Defaults to 256MB.
* @property {string} name A user-defined name of the function. Function names must be unique
globally and match pattern `projects/x/locations/x/functions/x
* @property {string} serviceAccount Output only. The service account of the function.
* @property {string} sourceArchiveUrl The URL, starting with gs://, pointing to the zip archive which contains
the function.
* @property {cloudfunctions(v1beta2).SourceRepository} sourceRepository The hosted repository where the function is defined.
* @property {string} entryPoint The name of the function (as defined in source code) that will be
executed. Defaults to the resource name suffix, if not specified. For
backward compatibility, if function with given name is not found, then the
system will try to use function named &quot;function&quot;.
For Node.js this is name of a function exported by the module specified
in `source_location`.
*/
/**
 * @typedef Location
 * @memberOf! cloudfunctions(v1beta2)
 * @type object
* @property {object} metadata Service-specific metadata. For example the available capacity at the given
location.
* @property {object} labels Cross-service attributes for the location. For example

    {&quot;cloud.googleapis.com/region&quot;: &quot;us-east1&quot;}
* @property {string} name Resource name for the location, which may vary between implementations.
For example: `&quot;projects/example-project/locations/us-east1&quot;`
* @property {string} locationId The canonical id for this location. For example: `&quot;us-east1&quot;`.
*/
/**
 * @typedef ListFunctionsResponse
 * @memberOf! cloudfunctions(v1beta2)
 * @type object
* @property {string} nextPageToken If not empty, indicates that there may be more functions that match
the request; this value should be passed in a new
google.cloud.functions.v1beta2.ListFunctionsRequest
to get more functions.
* @property {cloudfunctions(v1beta2).CloudFunction[]} functions The functions that match the request.
*/
/**
 * @typedef CallFunctionResponse
 * @memberOf! cloudfunctions(v1beta2)
 * @type object
* @property {string} executionId Execution id of function invocation.
* @property {string} result Result populated for successful execution of synchronous function. Will
not be populated if function does not return a result through context.
* @property {string} error Either system or user-function generated error. Set if execution
was not successful.
*/
/**
 * @typedef ListLocationsResponse
 * @memberOf! cloudfunctions(v1beta2)
 * @type object
 * @property {string} nextPageToken The standard List next-page token.
 * @property {cloudfunctions(v1beta2).Location[]} locations A list of locations that matches the specified filter in the request.
 */
/**
 * @typedef EventTrigger
 * @memberOf! cloudfunctions(v1beta2)
 * @type object
* @property {string} resource Which instance of the source&#39;s service should send events. E.g. for Pub/Sub
this would be a Pub/Sub topic at `projects/x/topics/x. For Google Cloud
Storage this would be a bucket at `projects/x/buckets/x. For any source
that only supports one instance per-project, this should be the name of the
project (`projects/x)
* @property {string} eventType `event_type` names contain the service that is sending an event and the
kind of event that was fired. Must be of the form
`providers/x/eventTypes/x e.g. Directly handle a Message published to
Google Cloud Pub/Sub `providers/cloud.pubsub/eventTypes/topic.publish`

     Handle an object changing in Google Cloud Storage
     `providers/cloud.storage/eventTypes/object.change`

     Handle a write to the Firebase Realtime Database
     `providers/firebase.database/eventTypes/data.write`
*/
/**
 * @typedef HTTPSTrigger
 * @memberOf! cloudfunctions(v1beta2)
 * @type object
 * @property {string} url Output only. The deployed url for the function.
 */
module.exports = Cloudfunctions;
