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
 * Google App Engine Admin API
 *
 * The App Engine Admin API enables developers to provision and manage their App Engine applications.
 *
 * @example
 * var google = require('googleapis');
 * var appengine = google.appengine('v1alpha');
 *
 * @namespace appengine
 * @type {Function}
 * @version v1alpha
 * @variation v1alpha
 * @param {object=} options Options for Appengine
 */
function Appengine(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.apps = {

    operations: {

      /**
       * appengine.apps.operations.list
       *
       * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding below allows API services to override the binding to use different resource name schemes, such as users/x/operations.
       *
       * @alias appengine.apps.operations.list
       * @memberOf! appengine(v1alpha)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.filter The standard list filter.
       * @param {string} params.appsId Part of `name`. The name of the operation collection.
       * @param {string=} params.pageToken The standard list page token.
       * @param {integer=} params.pageSize The standard list page size.
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
            url: 'https://appengine.googleapis.com/v1alpha/apps/{appsId}/operations',
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['appsId'],
          pathParams: ['appsId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * appengine.apps.operations.get
       *
       * @desc Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
       *
       * @alias appengine.apps.operations.get
       * @memberOf! appengine(v1alpha)
       *
       * @param {object} params Parameters for request
       * @param {string} params.appsId Part of `name`. The name of the operation resource.
       * @param {string} params.operationsId Part of `name`. See documentation of `appsId`.
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
            url: 'https://appengine.googleapis.com/v1alpha/apps/{appsId}/operations/{operationsId}',
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['appsId', 'operationsId'],
          pathParams: ['appsId', 'operationsId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    locations: {

      /**
       * appengine.apps.locations.list
       *
       * @desc Lists information about the supported locations for this service.
       *
       * @alias appengine.apps.locations.list
       * @memberOf! appengine(v1alpha)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.filter The standard list filter.
       * @param {string} params.appsId Part of `name`. The resource that owns the locations collection, if applicable.
       * @param {string=} params.pageToken The standard list page token.
       * @param {integer=} params.pageSize The standard list page size.
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
            url: 'https://appengine.googleapis.com/v1alpha/apps/{appsId}/locations',
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['appsId'],
          pathParams: ['appsId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * appengine.apps.locations.get
       *
       * @desc Get information about a location.
       *
       * @alias appengine.apps.locations.get
       * @memberOf! appengine(v1alpha)
       *
       * @param {object} params Parameters for request
       * @param {string} params.appsId Part of `name`. Resource name for the location.
       * @param {string} params.locationsId Part of `name`. See documentation of `appsId`.
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
            url: 'https://appengine.googleapis.com/v1alpha/apps/{appsId}/locations/{locationsId}',
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['appsId', 'locationsId'],
          pathParams: ['appsId', 'locationsId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };
}

/**
 * @typedef OperationMetadataV1
 * @memberOf! appengine(v1alpha)
 * @type object
 * @property {string} insertTime Time that this operation was created.@OutputOnly
 * @property {string[]} warning Durable messages that persist on every operation poll. @OutputOnly
 * @property {string} user User who requested this operation.@OutputOnly
 * @property {string} target Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly
 * @property {string} ephemeralMessage Ephemeral message that may change every time the operation is polled. @OutputOnly
 * @property {string} method API method that initiated this operation. Example: google.appengine.v1.Versions.CreateVersion.@OutputOnly
 * @property {string} endTime Time that this operation completed.@OutputOnly
 */
/**
 * @typedef Operation
 * @memberOf! appengine(v1alpha)
 * @type object
 * @property {boolean} done If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available.
 * @property {object} response The normal response of the operation in case of success. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse.
 * @property {string} name The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should have the format of operations/some/unique/name.
 * @property {appengine(v1alpha).Status} error The error result of the operation in case of failure or cancellation.
 * @property {object} metadata Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
 */
/**
 * @typedef ListOperationsResponse
 * @memberOf! appengine(v1alpha)
 * @type object
 * @property {string} nextPageToken The standard List next-page token.
 * @property {appengine(v1alpha).Operation[]} operations A list of operations that matches the specified filter in the request.
 */
/**
 * @typedef OperationMetadata
 * @memberOf! appengine(v1alpha)
 * @type object
 * @property {string} method API method that initiated this operation. Example: google.appengine.v1beta4.Version.CreateVersion.@OutputOnly
 * @property {string} endTime Timestamp that this operation completed.@OutputOnly
 * @property {string} operationType Type of this operation. Deprecated, use method field instead. Example: &quot;create_version&quot;.@OutputOnly
 * @property {string} insertTime Timestamp that this operation was created.@OutputOnly
 * @property {string} target Name of the resource that this operation is acting on. Example: apps/myapp/modules/default.@OutputOnly
 * @property {string} user User who requested this operation.@OutputOnly
 */
/**
 * @typedef OperationMetadataExperimental
 * @memberOf! appengine(v1alpha)
 * @type object
 * @property {string} user User who requested this operation.@OutputOnly
 * @property {string} target Name of the resource that this operation is acting on. Example: apps/myapp/customDomains/example.com.@OutputOnly
 * @property {string} method API method that initiated this operation. Example: google.appengine.experimental.CustomDomains.CreateCustomDomain.@OutputOnly
 * @property {string} insertTime Time that this operation was created.@OutputOnly
 * @property {string} endTime Time that this operation completed.@OutputOnly
 */
/**
 * @typedef OperationMetadataV1Beta5
 * @memberOf! appengine(v1alpha)
 * @type object
 * @property {string} insertTime Timestamp that this operation was created.@OutputOnly
 * @property {string} endTime Timestamp that this operation completed.@OutputOnly
 * @property {string} user User who requested this operation.@OutputOnly
 * @property {string} target Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly
 * @property {string} method API method name that initiated this operation. Example: google.appengine.v1beta5.Version.CreateVersion.@OutputOnly
 */
/**
 * @typedef Status
 * @memberOf! appengine(v1alpha)
 * @type object
 * @property {string} message A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
 * @property {object[]} details A list of messages that carry the error details. There will be a common set of message types for APIs to use.
 * @property {integer} code The status code, which should be an enum value of google.rpc.Code.
 */
/**
 * @typedef LocationMetadata
 * @memberOf! appengine(v1alpha)
 * @type object
 * @property {boolean} flexibleEnvironmentAvailable App Engine Flexible Environment is available in the given location.@OutputOnly
 * @property {boolean} standardEnvironmentAvailable App Engine Standard Environment is available in the given location.@OutputOnly
 */
/**
 * @typedef ListLocationsResponse
 * @memberOf! appengine(v1alpha)
 * @type object
 * @property {appengine(v1alpha).Location[]} locations A list of locations that matches the specified filter in the request.
 * @property {string} nextPageToken The standard List next-page token.
 */
/**
 * @typedef OperationMetadataV1Beta
 * @memberOf! appengine(v1alpha)
 * @type object
 * @property {string} method API method that initiated this operation. Example: google.appengine.v1beta.Versions.CreateVersion.@OutputOnly
 * @property {string} endTime Time that this operation completed.@OutputOnly
 * @property {string} insertTime Time that this operation was created.@OutputOnly
 * @property {string[]} warning Durable messages that persist on every operation poll. @OutputOnly
 * @property {string} user User who requested this operation.@OutputOnly
 * @property {string} target Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly
 * @property {string} ephemeralMessage Ephemeral message that may change every time the operation is polled. @OutputOnly
 */
/**
 * @typedef Location
 * @memberOf! appengine(v1alpha)
 * @type object
* @property {string} locationId The canonical id for this location. For example: &quot;us-east1&quot;.
* @property {object} metadata Service-specific metadata. For example the available capacity at the given location.
* @property {object} labels Cross-service attributes for the location. For example
{&quot;cloud.googleapis.com/region&quot;: &quot;us-east1&quot;}

* @property {string} name Resource name for the location, which may vary between implementations. For example: &quot;projects/example-project/locations/us-east1&quot;
*/
module.exports = Appengine;
