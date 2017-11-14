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

import {
  createAPIRequest
} from '../../lib/apirequest';

/**
 * Google Cloud Functions API
 *
 * API for managing lightweight user-provided functions executed in response to events.
 *
 * @example
 * const google = require('googleapis');
 * const cloudfunctions = google.cloudfunctions('v1');
 *
 * @namespace cloudfunctions
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Cloudfunctions
 */
function Cloudfunctions(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.operations = {

    /**
     * cloudfunctions.operations.get
     *
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @alias cloudfunctions.operations.get
     * @memberOf! cloudfunctions(v1)
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

      const rootUrl = options.rootUrl || 'https://cloudfunctions.googleapis.com/';

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
     * cloudfunctions.operations.list
     *
     * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     *
     * @alias cloudfunctions.operations.list
     * @memberOf! cloudfunctions(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The standard list filter.
     * @param {string=} params.name The name of the operation's parent resource.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
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

      const rootUrl = options.rootUrl || 'https://cloudfunctions.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/operations').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
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
       * @memberOf! cloudfunctions(v1)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.filter The standard list filter.
       * @param {string} params.name The resource that owns the locations collection, if applicable.
       * @param {integer=} params.pageSize The standard list page size.
       * @param {string=} params.pageToken The standard list page token.
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

        const rootUrl = options.rootUrl || 'https://cloudfunctions.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{name}/locations').replace(/([^:]\/)\/+/g, '$1'),
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
         * cloudfunctions.projects.locations.functions.call
         *
         * @desc Invokes synchronously deployed function. To be used for testing, very limited traffic allowed.
         *
         * @alias cloudfunctions.projects.locations.functions.call
         * @memberOf! cloudfunctions(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the function to be called.
         * @param {cloudfunctions(v1).CallFunctionRequest} params.resource Request body data
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

          const rootUrl = options.rootUrl || 'https://cloudfunctions.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/{name}:call').replace(/([^:]\/)\/+/g, '$1'),
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
         * @memberOf! cloudfunctions(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.location The project and location in which the function should be created, specified in the format `projects/x/locations/x`
         * @param {cloudfunctions(v1).CloudFunction} params.resource Request body data
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

          const rootUrl = options.rootUrl || 'https://cloudfunctions.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/{location}/functions').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['location'],
            pathParams: ['location'],
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
         * @memberOf! cloudfunctions(v1)
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

          const rootUrl = options.rootUrl || 'https://cloudfunctions.googleapis.com/';

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
         * cloudfunctions.projects.locations.functions.generateDownloadUrl
         *
         * @desc Returns a signed URL for downloading deployed function source code. The URL is only valid for a limited period and should be used within minutes after generation. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls
         *
         * @alias cloudfunctions.projects.locations.functions.generateDownloadUrl
         * @memberOf! cloudfunctions(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of function for which source code Google Cloud Storage signed URL should be generated.
         * @param {cloudfunctions(v1).GenerateDownloadUrlRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        generateDownloadUrl: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://cloudfunctions.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/{name}:generateDownloadUrl').replace(/([^:]\/)\/+/g, '$1'),
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
         * cloudfunctions.projects.locations.functions.generateUploadUrl
         *
         * @desc Returns a signed URL for uploading a function source code. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls Once the function source code upload is complete, the used signed URL should be provided in CreateFunction or UpdateFunction request as a reference to the function source code.
         *
         * @alias cloudfunctions.projects.locations.functions.generateUploadUrl
         * @memberOf! cloudfunctions(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent The project and location in which the Google Cloud Storage signed URL should be generated, specified in the format `projects/x/locations/x
         * @param {cloudfunctions(v1).GenerateUploadUrlRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        generateUploadUrl: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://cloudfunctions.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/{parent}/functions:generateUploadUrl').replace(/([^:]\/)\/+/g, '$1'),
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
         * cloudfunctions.projects.locations.functions.get
         *
         * @desc Returns a function with the given name from the requested project.
         *
         * @alias cloudfunctions.projects.locations.functions.get
         * @memberOf! cloudfunctions(v1)
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

          const rootUrl = options.rootUrl || 'https://cloudfunctions.googleapis.com/';

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
         * cloudfunctions.projects.locations.functions.list
         *
         * @desc Returns a list of functions that belong to the requested project.
         *
         * @alias cloudfunctions.projects.locations.functions.list
         * @memberOf! cloudfunctions(v1)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize Maximum number of functions to return per call.
         * @param {string=} params.pageToken The value returned by the last `ListFunctionsResponse`; indicates that this is a continuation of a prior `ListFunctions` call, and that the system should return the next page of data.
         * @param {string} params.parent The project and location from which the function should be listed, specified in the format `projects/x/locations/x` If you want to list functions in all locations, use "-" in place of a location.
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

          const rootUrl = options.rootUrl || 'https://cloudfunctions.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/{parent}/functions').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * cloudfunctions.projects.locations.functions.patch
         *
         * @desc Updates existing function.
         *
         * @alias cloudfunctions.projects.locations.functions.patch
         * @memberOf! cloudfunctions(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name A user-defined name of the function. Function names must be unique globally and match pattern `projects/x/locations/x/functions/x`
         * @param {string=} params.updateMask Required list of fields to be updated in this request.
         * @param {cloudfunctions(v1).CloudFunction} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://cloudfunctions.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
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
 * @typedef CallFunctionRequest
 * @memberOf! cloudfunctions(v1)
 * @type object
 * @property {string} data Input to be passed to the function.
 */

/**
 * @typedef CallFunctionResponse
 * @memberOf! cloudfunctions(v1)
 * @type object
* @property {string} error Either system or user-function generated error. Set if execution
was not successful.
* @property {string} executionId Execution id of function invocation.
* @property {string} result Result populated for successful execution of synchronous function. Will
not be populated if function does not return a result through context.
*/

/**
 * @typedef CloudFunction
 * @memberOf! cloudfunctions(v1)
 * @type object
* @property {integer} availableMemoryMb The amount of memory in MB available for a function.
Defaults to 256MB.
* @property {string} description User-provided description of a function.
* @property {string} entryPoint The name of the function (as defined in source code) that will be
executed. Defaults to the resource name suffix, if not specified. For
backward compatibility, if function with given name is not found, then the
system will try to use function named &quot;function&quot;.
For Node.js this is name of a function exported by the module specified
in `source_location`.
* @property {cloudfunctions(v1).EventTrigger} eventTrigger A source that fires events in response to a condition in another service.
* @property {cloudfunctions(v1).HttpsTrigger} httpsTrigger An HTTPS endpoint type of source that can be triggered via URL.
* @property {object} labels Labels associated with this Cloud Function.
* @property {string} name A user-defined name of the function. Function names must be unique
globally and match pattern `projects/x/locations/x/functions/x
* @property {string} serviceAccountEmail Output only. The email of the function&#39;s service account.
* @property {string} sourceArchiveUrl The Google Cloud Storage URL, starting with gs://, pointing to the zip
archive which contains the function.
* @property {cloudfunctions(v1).SourceRepository} sourceRepository **Beta Feature**

The source repository where a function is hosted.
* @property {string} sourceUploadUrl The Google Cloud Storage signed URL used for source uploading, generated
by google.cloud.functions.v1.GenerateUploadUrl
* @property {string} status Output only. Status of the function deployment.
* @property {string} timeout The function execution timeout. Execution is considered failed and
can be terminated if the function is not completed at the end of the
timeout period. Defaults to 60 seconds.
* @property {string} updateTime Output only. The last update timestamp of a Cloud Function.
* @property {string} versionId Output only.
The version identifier of the Cloud Function. Each deployment attempt
results in a new version of a function being created.
*/

/**
 * @typedef EventTrigger
 * @memberOf! cloudfunctions(v1)
 * @type object
* @property {string} eventType Required. The type of event to observe. For example:
`google.storage.object.finalized` and
`google.firebase.analytics.event.log`.

Event type consists of three parts:
 1. namespace: The domain name of the organization in reverse-domain
    notation (e.g. `acme.net` appears as `net.acme`) and any orginization
    specific subdivisions. If the organization&#39;s top-level domain is `com`,
    the top-level domain is ommited (e.g. `google.com` appears as
    `google`). For example, `google.storage` and
    `google.firebase.analytics`.
 2. resource type: The type of resource on which event ocurs. For
    example, the Google Cloud Storage API includes the type `object`.
 3. action: The action that generates the event. For example, actions for
    a Google Cloud Storage Object include &#39;finalize&#39; and &#39;delete&#39;.
These parts are lower case and joined by &#39;.&#39;.
* @property {cloudfunctions(v1).FailurePolicy} failurePolicy Specifies policy for failed executions.
* @property {string} resource Required. The resource(s) from which to observe events, for example,
`projects/_/buckets/myBucket`.

Not all syntactically correct values are accepted by all services. For
example:

1. The authorization model must support it. Google Cloud Functions
   only allows EventTriggers to be deployed that observe resources in the
   same project as the `CloudFunction`.
2. The resource type must match the pattern expected for an
   `event_type`. For example, an `EventTrigger` that has an
   `event_type` of &quot;google.pubsub.topic.publish&quot; should have a resource
   that matches Google Cloud Pub/Sub topics.

Additionally, some services may support short names when creating an
`EventTrigger`. These will always be returned in the normalized &quot;long&quot;
format.

See each *service&#39;s* documentation for supported formats.
* @property {string} service The hostname of the service that should be observed.

If no string is provided, the default service implementing the API will
be used. For example, `storage.googleapis.com` is the default for all
event types in the `google.storage` namespace.
*/

/**
 * @typedef FailurePolicy
 * @memberOf! cloudfunctions(v1)
 * @type object
 * @property {cloudfunctions(v1).Retry} retry If specified, then the function will be retried in case of a failure.
 */

/**
 * @typedef GenerateDownloadUrlRequest
 * @memberOf! cloudfunctions(v1)
 * @type object
* @property {string} versionId The optional version of function. If not set, default, current version
is used.
*/

/**
 * @typedef GenerateDownloadUrlResponse
 * @memberOf! cloudfunctions(v1)
 * @type object
* @property {string} downloadUrl The generated Google Cloud Storage signed URL that should be used for
function source code download.
*/

/**
 * @typedef GenerateUploadUrlRequest
 * @memberOf! cloudfunctions(v1)
 * @type object
 */

/**
 * @typedef GenerateUploadUrlResponse
 * @memberOf! cloudfunctions(v1)
 * @type object
* @property {string} uploadUrl The generated Google Cloud Storage signed URL that should be used for a
function source code upload. The uploaded file should be a zip archive
which contains a function.
*/

/**
 * @typedef HttpsTrigger
 * @memberOf! cloudfunctions(v1)
 * @type object
 * @property {string} url Output only. The deployed url for the function.
 */

/**
 * @typedef ListFunctionsResponse
 * @memberOf! cloudfunctions(v1)
 * @type object
* @property {cloudfunctions(v1).CloudFunction[]} functions The functions that match the request.
* @property {string} nextPageToken If not empty, indicates that there may be more functions that match
the request; this value should be passed in a new
google.cloud.functions.v1.ListFunctionsRequest
to get more functions.
*/

/**
 * @typedef ListLocationsResponse
 * @memberOf! cloudfunctions(v1)
 * @type object
 * @property {cloudfunctions(v1).Location[]} locations A list of locations that matches the specified filter in the request.
 * @property {string} nextPageToken The standard List next-page token.
 */

/**
 * @typedef ListOperationsResponse
 * @memberOf! cloudfunctions(v1)
 * @type object
 * @property {string} nextPageToken The standard List next-page token.
 * @property {cloudfunctions(v1).Operation[]} operations A list of operations that matches the specified filter in the request.
 */

/**
 * @typedef Location
 * @memberOf! cloudfunctions(v1)
 * @type object
* @property {object} labels Cross-service attributes for the location. For example

    {&quot;cloud.googleapis.com/region&quot;: &quot;us-east1&quot;}
* @property {string} locationId The canonical id for this location. For example: `&quot;us-east1&quot;`.
* @property {object} metadata Service-specific metadata. For example the available capacity at the given
location.
* @property {string} name Resource name for the location, which may vary between implementations.
For example: `&quot;projects/example-project/locations/us-east1&quot;`
*/

/**
 * @typedef Operation
 * @memberOf! cloudfunctions(v1)
 * @type object
* @property {boolean} done If the value is `false`, it means the operation is still in progress.
If `true`, the operation is completed, and either `error` or `response` is
available.
* @property {cloudfunctions(v1).Status} error The error result of the operation in case of failure or cancellation.
* @property {object} metadata Service-specific metadata associated with the operation.  It typically
contains progress information and common metadata such as create time.
Some services might not provide such metadata.  Any method that returns a
long-running operation should document the metadata type, if any.
* @property {string} name The server-assigned name, which is only unique within the same service that
originally returns it. If you use the default HTTP mapping, the
`name` should have the format of `operations/some/unique/name`.
* @property {object} response The normal response of the operation in case of success.  If the original
method returns no data on success, such as `Delete`, the response is
`google.protobuf.Empty`.  If the original method is standard
`Get`/`Create`/`Update`, the response should be the resource.  For other
methods, the response should have the type `XxxResponse`, where `Xxx`
is the original method name.  For example, if the original method name
is `TakeSnapshot()`, the inferred response type is
`TakeSnapshotResponse`.
*/

/**
 * @typedef OperationMetadataV1
 * @memberOf! cloudfunctions(v1)
 * @type object
* @property {object} request The original request that started the operation.
* @property {string} target Target of the operation - for example
projects/project-1/locations/region-1/functions/function-1
* @property {string} type Type of operation.
* @property {string} updateTime The last update timestamp of the operation.
* @property {string} versionId Version id of the function created or updated by an API call.
This field is only pupulated for Create and Update operations.
*/

/**
 * @typedef OperationMetadataV1Beta2
 * @memberOf! cloudfunctions(v1)
 * @type object
* @property {object} request The original request that started the operation.
* @property {string} target Target of the operation - for example
projects/project-1/locations/region-1/functions/function-1
* @property {string} type Type of operation.
* @property {string} updateTime The last update timestamp of the operation.
* @property {string} versionId Version id of the function created or updated by an API call.
This field is only pupulated for Create and Update operations.
*/

/**
 * @typedef Retry
 * @memberOf! cloudfunctions(v1)
 * @type object
 */

/**
 * @typedef SourceRepository
 * @memberOf! cloudfunctions(v1)
 * @type object
* @property {string} deployedUrl Output only. The URL pointing to the hosted repository where the function
were defined at the time of deployment. It always points to a specific
commit in the format described above.
* @property {string} url The URL pointing to the hosted repository where the function is defined.
There are supported Cloud Source Repository URLs in the following
formats:

To refer to a specific commit:
`https://source.developers.google.com/projects/x/repos/x/revisions/x/paths/x
To refer to a moveable alias (branch):
`https://source.developers.google.com/projects/x/repos/x/moveable-aliases/x/paths/x
In particular, to refer to HEAD use `master` moveable alias.
To refer to a specific fixed alias (tag):
`https://source.developers.google.com/projects/x/repos/x/fixed-aliases/x/paths/x

You may omit `paths/x if you want to use the main directory.
*/

/**
 * @typedef Status
 * @memberOf! cloudfunctions(v1)
 * @type object
* @property {integer} code The status code, which should be an enum value of google.rpc.Code.
* @property {object[]} details A list of messages that carry the error details.  There is a common set of
message types for APIs to use.
* @property {string} message A developer-facing error message, which should be in English. Any
user-facing error message should be localized and sent in the
google.rpc.Status.details field, or localized by the client.
*/
export = Cloudfunctions;
