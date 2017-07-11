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
 * Google App Engine Admin API
 *
 * The App Engine Admin API enables developers to provision and manage their App Engine applications.
 *
 * @example
 * const google = require('googleapis');
 * const appengine = google.appengine('v1alpha');
 *
 * @namespace appengine
 * @type {Function}
 * @version v1alpha
 * @variation v1alpha
 * @param {object=} options Options for Appengine
 */
function Appengine(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.apps = {

    locations: {

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

        const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1alpha/apps/{appsId}/locations/{locationsId}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['appsId', 'locationsId'],
          pathParams: ['appsId', 'locationsId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * appengine.apps.locations.list
       *
       * @desc Lists information about the supported locations for this service.
       *
       * @alias appengine.apps.locations.list
       * @memberOf! appengine(v1alpha)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.pageToken The standard list page token.
       * @param {string} params.appsId Part of `name`. The resource that owns the locations collection, if applicable.
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

        const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1alpha/apps/{appsId}/locations').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['appsId'],
          pathParams: ['appsId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    domainMappings: {

      /**
       * appengine.apps.domainMappings.delete
       *
       * @desc Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.
       *
       * @alias appengine.apps.domainMappings.delete
       * @memberOf! appengine(v1alpha)
       *
       * @param {object} params Parameters for request
       * @param {string} params.domainMappingsId Part of `name`. See documentation of `appsId`.
       * @param {string} params.appsId Part of `name`. Name of the resource to delete. Example: apps/myapp/domainMappings/example.com.
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

        const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1alpha/apps/{appsId}/domainMappings/{domainMappingsId}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          }, options),
          params: params,
          requiredParams: ['appsId', 'domainMappingsId'],
          pathParams: ['domainMappingsId', 'appsId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * appengine.apps.domainMappings.patch
       *
       * @desc Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.
       *
       * @alias appengine.apps.domainMappings.patch
       * @memberOf! appengine(v1alpha)
       *
       * @param {object} params Parameters for request
       * @param {boolean=} params.noManagedCertificate Whether a managed certificate should be provided by App Engine. If true, a certificate ID must be manaually set in the DomainMapping resource to configure SSL for this domain. If false, a managed certificate will be provisioned and a certificate ID will be automatically populated. Only applicable if ssl_settings.certificate_id is specified in the update mask.
       * @param {string=} params.updateMask Standard field mask for the set of fields to be updated.
       * @param {string} params.appsId Part of `name`. Name of the resource to update. Example: apps/myapp/domainMappings/example.com.
       * @param {string} params.domainMappingsId Part of `name`. See documentation of `appsId`.
       * @param {appengine(v1alpha).DomainMapping} params.resource Request body data
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

        const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1alpha/apps/{appsId}/domainMappings/{domainMappingsId}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          }, options),
          params: params,
          requiredParams: ['appsId', 'domainMappingsId'],
          pathParams: ['appsId', 'domainMappingsId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * appengine.apps.domainMappings.get
       *
       * @desc Gets the specified domain mapping.
       *
       * @alias appengine.apps.domainMappings.get
       * @memberOf! appengine(v1alpha)
       *
       * @param {object} params Parameters for request
       * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/domainMappings/example.com.
       * @param {string} params.domainMappingsId Part of `name`. See documentation of `appsId`.
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

        const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1alpha/apps/{appsId}/domainMappings/{domainMappingsId}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['appsId', 'domainMappingsId'],
          pathParams: ['appsId', 'domainMappingsId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * appengine.apps.domainMappings.list
       *
       * @desc Lists the domain mappings on an application.
       *
       * @alias appengine.apps.domainMappings.list
       * @memberOf! appengine(v1alpha)
       *
       * @param {object} params Parameters for request
       * @param {integer=} params.pageSize Maximum results to return per page.
       * @param {string=} params.pageToken Continuation token for fetching the next page of results.
       * @param {string} params.appsId Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
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

        const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1alpha/apps/{appsId}/domainMappings').replace(/([^:]\/)\/+/g, '$1'),
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
       * appengine.apps.domainMappings.create
       *
       * @desc Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
       *
       * @alias appengine.apps.domainMappings.create
       * @memberOf! appengine(v1alpha)
       *
       * @param {object} params Parameters for request
       * @param {string} params.appsId Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
       * @param {boolean=} params.noManagedCertificate Whether a managed certificate should be provided by App Engine. If true, a certificate ID must be manaually set in the DomainMapping resource to configure SSL for this domain. If false, a managed certificate will be provisioned and a certificate ID will be automatically populated.
       * @param {appengine(v1alpha).DomainMapping} params.resource Request body data
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

        const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1alpha/apps/{appsId}/domainMappings').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['appsId'],
          pathParams: ['appsId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    authorizedCertificates: {

      /**
       * appengine.apps.authorizedCertificates.create
       *
       * @desc Uploads the specified SSL certificate.
       *
       * @alias appengine.apps.authorizedCertificates.create
       * @memberOf! appengine(v1alpha)
       *
       * @param {object} params Parameters for request
       * @param {string} params.appsId Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
       * @param {appengine(v1alpha).AuthorizedCertificate} params.resource Request body data
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

        const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1alpha/apps/{appsId}/authorizedCertificates').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['appsId'],
          pathParams: ['appsId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * appengine.apps.authorizedCertificates.delete
       *
       * @desc Deletes the specified SSL certificate.
       *
       * @alias appengine.apps.authorizedCertificates.delete
       * @memberOf! appengine(v1alpha)
       *
       * @param {object} params Parameters for request
       * @param {string} params.appsId Part of `name`. Name of the resource to delete. Example: apps/myapp/authorizedCertificates/12345.
       * @param {string} params.authorizedCertificatesId Part of `name`. See documentation of `appsId`.
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

        const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1alpha/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          }, options),
          params: params,
          requiredParams: ['appsId', 'authorizedCertificatesId'],
          pathParams: ['appsId', 'authorizedCertificatesId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * appengine.apps.authorizedCertificates.patch
       *
       * @desc Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.
       *
       * @alias appengine.apps.authorizedCertificates.patch
       * @memberOf! appengine(v1alpha)
       *
       * @param {object} params Parameters for request
       * @param {string} params.authorizedCertificatesId Part of `name`. See documentation of `appsId`.
       * @param {string=} params.updateMask Standard field mask for the set of fields to be updated. Updates are only supported on the certificate_raw_data and display_name fields.
       * @param {string} params.appsId Part of `name`. Name of the resource to update. Example: apps/myapp/authorizedCertificates/12345.
       * @param {appengine(v1alpha).AuthorizedCertificate} params.resource Request body data
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

        const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1alpha/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          }, options),
          params: params,
          requiredParams: ['appsId', 'authorizedCertificatesId'],
          pathParams: ['authorizedCertificatesId', 'appsId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * appengine.apps.authorizedCertificates.get
       *
       * @desc Gets the specified SSL certificate.
       *
       * @alias appengine.apps.authorizedCertificates.get
       * @memberOf! appengine(v1alpha)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.view Controls the set of fields returned in the GET response.
       * @param {string} params.authorizedCertificatesId Part of `name`. See documentation of `appsId`.
       * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/authorizedCertificates/12345.
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

        const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1alpha/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['appsId', 'authorizedCertificatesId'],
          pathParams: ['authorizedCertificatesId', 'appsId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * appengine.apps.authorizedCertificates.list
       *
       * @desc Lists all SSL certificates the user is authorized to administer.
       *
       * @alias appengine.apps.authorizedCertificates.list
       * @memberOf! appengine(v1alpha)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.pageToken Continuation token for fetching the next page of results.
       * @param {string} params.appsId Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
       * @param {integer=} params.pageSize Maximum results to return per page.
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

        const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1alpha/apps/{appsId}/authorizedCertificates').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['appsId'],
          pathParams: ['appsId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    authorizedDomains: {

      /**
       * appengine.apps.authorizedDomains.list
       *
       * @desc Lists all domains the user is authorized to administer.
       *
       * @alias appengine.apps.authorizedDomains.list
       * @memberOf! appengine(v1alpha)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.pageToken Continuation token for fetching the next page of results.
       * @param {string} params.appsId Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
       * @param {integer=} params.pageSize Maximum results to return per page.
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

        const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1alpha/apps/{appsId}/authorizedDomains').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['appsId'],
          pathParams: ['appsId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    operations: {

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

        const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1alpha/apps/{appsId}/operations/{operationsId}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['appsId', 'operationsId'],
          pathParams: ['appsId', 'operationsId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * appengine.apps.operations.list
       *
       * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/x/operations. To override the binding, API services can add a binding such as "/v1/{name=users/x}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
       *
       * @alias appengine.apps.operations.list
       * @memberOf! appengine(v1alpha)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.pageToken The standard list page token.
       * @param {string} params.appsId Part of `name`. The name of the operation's parent resource.
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

        const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1alpha/apps/{appsId}/operations').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['appsId'],
          pathParams: ['appsId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };
}

/**
 * @typedef Operation
 * @memberOf! appengine(v1alpha)
 * @type object
 * @property {object} response The normal response of the operation in case of success. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse.
 * @property {string} name The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should have the format of operations/some/unique/name.
 * @property {appengine(v1alpha).Status} error The error result of the operation in case of failure or cancellation.
 * @property {object} metadata Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
 * @property {boolean} done If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available.
 */
/**
 * @typedef ListDomainMappingsResponse
 * @memberOf! appengine(v1alpha)
 * @type object
 * @property {appengine(v1alpha).DomainMapping[]} domainMappings The domain mappings for the application.
 * @property {string} nextPageToken Continuation token for fetching the next page of results.
 */
/**
 * @typedef OperationMetadataExperimental
 * @memberOf! appengine(v1alpha)
 * @type object
 * @property {string} method API method that initiated this operation. Example: google.appengine.experimental.CustomDomains.CreateCustomDomain.@OutputOnly
 * @property {string} insertTime Time that this operation was created.@OutputOnly
 * @property {string} endTime Time that this operation completed.@OutputOnly
 * @property {string} target Name of the resource that this operation is acting on. Example: apps/myapp/customDomains/example.com.@OutputOnly
 * @property {string} user User who requested this operation.@OutputOnly
 */
/**
 * @typedef OperationMetadataV1Alpha
 * @memberOf! appengine(v1alpha)
 * @type object
 * @property {string} insertTime Time that this operation was created.@OutputOnly
 * @property {string[]} warning Durable messages that persist on every operation poll. @OutputOnly
 * @property {string} user User who requested this operation.@OutputOnly
 * @property {string} target Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly
 * @property {string} ephemeralMessage Ephemeral message that may change every time the operation is polled. @OutputOnly
 * @property {string} method API method that initiated this operation. Example: google.appengine.v1alpha.Versions.CreateVersion.@OutputOnly
 * @property {string} endTime Time that this operation completed.@OutputOnly
 */
/**
 * @typedef Status
 * @memberOf! appengine(v1alpha)
 * @type object
 * @property {integer} code The status code, which should be an enum value of google.rpc.Code.
 * @property {string} message A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
 * @property {object[]} details A list of messages that carry the error details. There will be a common set of message types for APIs to use.
 */
/**
 * @typedef ListAuthorizedDomainsResponse
 * @memberOf! appengine(v1alpha)
 * @type object
 * @property {string} nextPageToken Continuation token for fetching the next page of results.
 * @property {appengine(v1alpha).AuthorizedDomain[]} domains The authorized domains belonging to the user.
 */
/**
 * @typedef AuthorizedDomain
 * @memberOf! appengine(v1alpha)
 * @type object
 * @property {string} name Full path to the AuthorizedDomain resource in the API. Example: apps/myapp/authorizedDomains/example.com.@OutputOnly
 * @property {string} id Fully qualified domain name of the domain authorized for use. Example: example.com.
 */
/**
 * @typedef LocationMetadata
 * @memberOf! appengine(v1alpha)
 * @type object
 * @property {boolean} standardEnvironmentAvailable App Engine Standard Environment is available in the given location.@OutputOnly
 * @property {boolean} flexibleEnvironmentAvailable App Engine Flexible Environment is available in the given location.@OutputOnly
 */
/**
 * @typedef DomainMapping
 * @memberOf! appengine(v1alpha)
 * @type object
 * @property {appengine(v1alpha).SslSettings} sslSettings SSL configuration for this domain. If unconfigured, this domain will not serve with SSL.
 * @property {string} name Full path to the DomainMapping resource in the API. Example: apps/myapp/domainMapping/example.com.@OutputOnly
 * @property {appengine(v1alpha).ResourceRecord[]} resourceRecords The resource records required to configure this domain mapping. These records must be added to the domain&#39;s DNS configuration in order to serve the application via this domain mapping.@OutputOnly
 * @property {string} id Relative name of the domain serving the application. Example: example.com.
 */
/**
 * @typedef Empty
 * @memberOf! appengine(v1alpha)
 * @type object
 */
/**
 * @typedef OperationMetadataV1Beta
 * @memberOf! appengine(v1alpha)
 * @type object
 * @property {string} insertTime Time that this operation was created.@OutputOnly
 * @property {string[]} warning Durable messages that persist on every operation poll. @OutputOnly
 * @property {string} user User who requested this operation.@OutputOnly
 * @property {string} target Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly
 * @property {string} ephemeralMessage Ephemeral message that may change every time the operation is polled. @OutputOnly
 * @property {string} method API method that initiated this operation. Example: google.appengine.v1beta.Versions.CreateVersion.@OutputOnly
 * @property {string} endTime Time that this operation completed.@OutputOnly
 */
/**
 * @typedef Location
 * @memberOf! appengine(v1alpha)
 * @type object
* @property {object} metadata Service-specific metadata. For example the available capacity at the given location.
* @property {object} labels Cross-service attributes for the location. For example
{&quot;cloud.googleapis.com/region&quot;: &quot;us-east1&quot;}

* @property {string} name Resource name for the location, which may vary between implementations. For example: &quot;projects/example-project/locations/us-east1&quot;
* @property {string} locationId The canonical id for this location. For example: &quot;us-east1&quot;.
*/
/**
 * @typedef AuthorizedCertificate
 * @memberOf! appengine(v1alpha)
 * @type object
 * @property {string} displayName The user-specified display name of the certificate. This is not guaranteed to be unique. Example: My Certificate.
 * @property {appengine(v1alpha).CertificateRawData} certificateRawData The SSL certificate serving the AuthorizedCertificate resource. This must be obtained independently from a certificate authority.
 * @property {appengine(v1alpha).ManagedCertificate} managedCertificate Only applicable if this certificate is managed by App Engine. Managed certificates are tied to the lifecycle of a DomainMapping and cannot be updated or deleted via the AuthorizedCertificates API. If this certificate is manually administered by the user, this field will be empty.@OutputOnly
 * @property {string[]} visibleDomainMappings The full paths to user visible Domain Mapping resources that have this certificate mapped. Example: apps/myapp/domainMappings/example.com.This may not represent the full list of mapped domain mappings if the user does not have VIEWER permissions on all of the applications that have this certificate mapped. See domain_mappings_count for a complete count.Only returned by GET requests when specifically requested by the view=FULL option.@OutputOnly
 * @property {string} expireTime The time when this certificate expires. To update the renewal time on this certificate, upload an SSL certificate with a different expiration time using AuthorizedCertificates.UpdateAuthorizedCertificate.@OutputOnly
 * @property {string} name Full path to the AuthorizedCertificate resource in the API. Example: apps/myapp/authorizedCertificates/12345.@OutputOnly
 * @property {integer} domainMappingsCount Aggregate count of the domain mappings with this certificate mapped. This count includes domain mappings on applications for which the user does not have VIEWER permissions.Only returned by GET requests when specifically requested by the view=FULL option.@OutputOnly
 * @property {string[]} domainNames Topmost applicable domains of this certificate. This certificate applies to these domains and their subdomains. Example: example.com.@OutputOnly
 * @property {string} id Relative name of the certificate. This is a unique value autogenerated on AuthorizedCertificate resource creation. Example: 12345.@OutputOnly
 */
/**
 * @typedef ResourceRecord
 * @memberOf! appengine(v1alpha)
 * @type object
 * @property {string} type Resource record type. Example: AAAA.
 * @property {string} rrdata Data for this record. Values vary by record type, as defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1).
 * @property {string} name Relative name of the object affected by this record. Only applicable for CNAME records. Example: &#39;www&#39;.
 */
/**
 * @typedef ListOperationsResponse
 * @memberOf! appengine(v1alpha)
 * @type object
 * @property {appengine(v1alpha).Operation[]} operations A list of operations that matches the specified filter in the request.
 * @property {string} nextPageToken The standard List next-page token.
 */
/**
 * @typedef OperationMetadata
 * @memberOf! appengine(v1alpha)
 * @type object
 * @property {string} insertTime Timestamp that this operation was created.@OutputOnly
 * @property {string} user User who requested this operation.@OutputOnly
 * @property {string} target Name of the resource that this operation is acting on. Example: apps/myapp/modules/default.@OutputOnly
 * @property {string} method API method that initiated this operation. Example: google.appengine.v1beta4.Version.CreateVersion.@OutputOnly
 * @property {string} endTime Timestamp that this operation completed.@OutputOnly
 * @property {string} operationType Type of this operation. Deprecated, use method field instead. Example: &quot;create_version&quot;.@OutputOnly
 */
/**
 * @typedef ListAuthorizedCertificatesResponse
 * @memberOf! appengine(v1alpha)
 * @type object
 * @property {string} nextPageToken Continuation token for fetching the next page of results.
 * @property {appengine(v1alpha).AuthorizedCertificate[]} certificates The SSL certificates the user is authorized to administer.
 */
/**
 * @typedef OperationMetadataV1Beta5
 * @memberOf! appengine(v1alpha)
 * @type object
 * @property {string} target Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly
 * @property {string} user User who requested this operation.@OutputOnly
 * @property {string} method API method name that initiated this operation. Example: google.appengine.v1beta5.Version.CreateVersion.@OutputOnly
 * @property {string} insertTime Timestamp that this operation was created.@OutputOnly
 * @property {string} endTime Timestamp that this operation completed.@OutputOnly
 */
/**
 * @typedef ListLocationsResponse
 * @memberOf! appengine(v1alpha)
 * @type object
 * @property {string} nextPageToken The standard List next-page token.
 * @property {appengine(v1alpha).Location[]} locations A list of locations that matches the specified filter in the request.
 */
/**
 * @typedef ManagedCertificate
 * @memberOf! appengine(v1alpha)
 * @type object
 * @property {string} lastRenewalTime Time at which the certificate was last renewed. The renewal process is fully managed. Certificate renewal will automatically occur before the certificate expires. Renewal errors can be tracked via ManagementStatus.@OutputOnly
 * @property {string} status Status of certificate management. Refers to the most recent certificate acquisition or renewal attempt.@OutputOnly
 */
/**
 * @typedef OperationMetadataV1
 * @memberOf! appengine(v1alpha)
 * @type object
 * @property {string} user User who requested this operation.@OutputOnly
 * @property {string} target Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly
 * @property {string} ephemeralMessage Ephemeral message that may change every time the operation is polled. @OutputOnly
 * @property {string} method API method that initiated this operation. Example: google.appengine.v1.Versions.CreateVersion.@OutputOnly
 * @property {string} endTime Time that this operation completed.@OutputOnly
 * @property {string[]} warning Durable messages that persist on every operation poll. @OutputOnly
 * @property {string} insertTime Time that this operation was created.@OutputOnly
 */
/**
 * @typedef SslSettings
 * @memberOf! appengine(v1alpha)
 * @type object
 * @property {string} certificateId ID of the AuthorizedCertificate resource configuring SSL for the application. Clearing this field will remove SSL support.By default, a managed certificate is automatically created for every domain mapping. To omit SSL support or to configure SSL manually, specify no_managed_certificate on a CREATE or UPDATE request. You must be authorized to administer the AuthorizedCertificate resource to manually map it to a DomainMapping resource. Example: 12345.
 * @property {boolean} isManagedCertificate Whether the mapped certificate is an App Engine managed certificate. Managed certificates are created by default with a domain mapping. To opt out, specify no_managed_certificate on a CREATE or UPDATE request.@OutputOnly
 */
/**
 * @typedef CertificateRawData
 * @memberOf! appengine(v1alpha)
 * @type object
 * @property {string} privateKey Unencrypted PEM encoded RSA private key. This field is set once on certificate creation and then encrypted. The key size must be 2048 bits or fewer. Must include the header and footer. Example: &lt;pre&gt; -----BEGIN RSA PRIVATE KEY----- &lt;unencrypted_key_value&gt; -----END RSA PRIVATE KEY----- &lt;/pre&gt; @InputOnly
 * @property {string} publicCertificate PEM encoded x.509 public key certificate. This field is set once on certificate creation. Must include the header and footer. Example: &lt;pre&gt; -----BEGIN CERTIFICATE----- &lt;certificate_value&gt; -----END CERTIFICATE----- &lt;/pre&gt;
 */
export = Appengine;
