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
 * Genomics API
 *
 * Upload, process, query, and search Genomics data in the cloud.
 *
 * @example
 * const google = require('googleapis');
 * const genomics = google.genomics('v1');
 *
 * @namespace genomics
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Genomics
 */
function Genomics(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.annotations = {

    /**
     * genomics.annotations.batchCreate
     *
     * @desc Creates one or more new annotations atomically. All annotations must belong to the same annotation set. Caller must have WRITE permission for this annotation set. For optimal performance, batch positionally adjacent annotations together.  If the request has a systemic issue, such as an attempt to write to an inaccessible annotation set, the entire RPC will fail accordingly. For lesser data issues, when possible an error will be isolated to the corresponding batch entry in the response; the remaining well formed annotations will be created normally.  For details on the requirements for each individual annotation resource, see CreateAnnotation.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.annotations.batchCreate(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.annotations.batchCreate
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1).BatchCreateAnnotationsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchCreate: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/annotations:batchCreate').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.annotations.create
     *
     * @desc Creates a new annotation. Caller must have WRITE permission for the associated annotation set.  The following fields are required:  * annotationSetId * referenceName or   referenceId  ### Transcripts  For annotations of type TRANSCRIPT, the following fields of transcript must be provided:  * exons.start * exons.end  All other fields may be optionally specified, unless documented as being server-generated (for example, the `id` field). The annotated range must be no longer than 100Mbp (mega base pairs). See the Annotation resource for additional restrictions on each field.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.annotations.create(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.annotations.create
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1).Annotation} params.resource Request body data
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/annotations').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.annotations.delete
     *
     * @desc Deletes an annotation. Caller must have WRITE permission for the associated annotation set.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the annotation to be deleted.
     *     annotationId: 'my-annotation-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.annotations.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.annotations.delete
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.annotationId The ID of the annotation to be deleted.
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/annotations/{annotationId}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'DELETE'
        }, options),
        params: params,
        requiredParams: ['annotationId'],
        pathParams: ['annotationId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.annotations.get
     *
     * @desc Gets an annotation. Caller must have READ permission for the associated annotation set.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the annotation to be retrieved.
     *     annotationId: 'my-annotation-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.annotations.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.annotations.get
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.annotationId The ID of the annotation to be retrieved.
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/annotations/{annotationId}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['annotationId'],
        pathParams: ['annotationId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.annotations.search
     *
     * @desc Searches for annotations that match the given criteria. Results are ordered by genomic coordinate (by reference sequence, then position). Annotations with equivalent genomic coordinates are returned in an unspecified order. This order is consistent, such that two queries for the same content (regardless of page size) yield annotations in the same order across their respective streams of paginated responses. Caller must have READ permission for the queried annotation sets.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var annotationsPage = response['annotations'];
     *     if (!annotationsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < annotationsPage.length; i++) {
     *       // TODO: Change code below to process each resource in `annotationsPage`:
     *       console.log(JSON.stringify(annotationsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.resource.pageToken = response.nextPageToken;
     *       genomics.annotations.search(request, handlePage);
     *     }
     *   };
     *
     *   genomics.annotations.search(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.annotations.search
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1).SearchAnnotationsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/annotations/search').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.annotations.update
     *
     * @desc Updates an annotation. Caller must have WRITE permission for the associated dataset.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the annotation to be updated.
     *     annotationId: 'my-annotation-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. All existing properties
     *       // will be replaced.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.annotations.update(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.annotations.update
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.annotationId The ID of the annotation to be updated.
     * @param {string=} params.updateMask An optional mask specifying which fields to update. Mutable fields are name, variant, transcript, and info. If unspecified, all mutable fields will be updated.
     * @param {genomics(v1).Annotation} params.resource Request body data
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/annotations/{annotationId}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'PUT'
        }, options),
        params: params,
        requiredParams: ['annotationId'],
        pathParams: ['annotationId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.annotationsets = {

    /**
     * genomics.annotationsets.create
     *
     * @desc Creates a new annotation set. Caller must have WRITE permission for the associated dataset.  The following fields are required:    * datasetId   * referenceSetId  All other fields may be optionally specified, unless documented as being server-generated (for example, the `id` field).
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.annotationsets.create(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.annotationsets.create
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1).AnnotationSet} params.resource Request body data
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/annotationsets').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.annotationsets.delete
     *
     * @desc Deletes an annotation set. Caller must have WRITE permission for the associated annotation set.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the annotation set to be deleted.
     *     annotationSetId: 'my-annotation-set-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.annotationsets.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.annotationsets.delete
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.annotationSetId The ID of the annotation set to be deleted.
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/annotationsets/{annotationSetId}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'DELETE'
        }, options),
        params: params,
        requiredParams: ['annotationSetId'],
        pathParams: ['annotationSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.annotationsets.get
     *
     * @desc Gets an annotation set. Caller must have READ permission for the associated dataset.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the annotation set to be retrieved.
     *     annotationSetId: 'my-annotation-set-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.annotationsets.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.annotationsets.get
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.annotationSetId The ID of the annotation set to be retrieved.
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/annotationsets/{annotationSetId}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['annotationSetId'],
        pathParams: ['annotationSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.annotationsets.search
     *
     * @desc Searches for annotation sets that match the given criteria. Annotation sets are returned in an unspecified order. This order is consistent, such that two queries for the same content (regardless of page size) yield annotation sets in the same order across their respective streams of paginated responses. Caller must have READ permission for the queried datasets.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var annotationSetsPage = response['annotationSets'];
     *     if (!annotationSetsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < annotationSetsPage.length; i++) {
     *       // TODO: Change code below to process each resource in `annotationSetsPage`:
     *       console.log(JSON.stringify(annotationSetsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.resource.pageToken = response.nextPageToken;
     *       genomics.annotationsets.search(request, handlePage);
     *     }
     *   };
     *
     *   genomics.annotationsets.search(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.annotationsets.search
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1).SearchAnnotationSetsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/annotationsets/search').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.annotationsets.update
     *
     * @desc Updates an annotation set. The update must respect all mutability restrictions and other invariants described on the annotation set resource. Caller must have WRITE permission for the associated dataset.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the annotation set to be updated.
     *     annotationSetId: 'my-annotation-set-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. All existing properties
     *       // will be replaced.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.annotationsets.update(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.annotationsets.update
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.annotationSetId The ID of the annotation set to be updated.
     * @param {string=} params.updateMask An optional mask specifying which fields to update. Mutable fields are name, source_uri, and info. If unspecified, all mutable fields will be updated.
     * @param {genomics(v1).AnnotationSet} params.resource Request body data
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/annotationsets/{annotationSetId}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'PUT'
        }, options),
        params: params,
        requiredParams: ['annotationSetId'],
        pathParams: ['annotationSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.callsets = {

    /**
     * genomics.callsets.create
     *
     * @desc Creates a new call set.  For the definitions of call sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.callsets.create(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.callsets.create
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1).CallSet} params.resource Request body data
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/callsets').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.callsets.delete
     *
     * @desc Deletes a call set.  For the definitions of call sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the call set to be deleted.
     *     callSetId: 'my-call-set-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.callsets.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.callsets.delete
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.callSetId The ID of the call set to be deleted.
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/callsets/{callSetId}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'DELETE'
        }, options),
        params: params,
        requiredParams: ['callSetId'],
        pathParams: ['callSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.callsets.get
     *
     * @desc Gets a call set by ID.  For the definitions of call sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the call set.
     *     callSetId: 'my-call-set-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.callsets.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.callsets.get
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.callSetId The ID of the call set.
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/callsets/{callSetId}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['callSetId'],
        pathParams: ['callSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.callsets.patch
     *
     * @desc Updates a call set.  For the definitions of call sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  This method supports patch semantics.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the call set to be updated.
     *     callSetId: 'my-call-set-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. Only these properties
     *       // will be changed.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.callsets.patch(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.callsets.patch
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.callSetId The ID of the call set to be updated.
     * @param {string=} params.updateMask An optional mask specifying which fields to update. At this time, the only mutable field is name. The only acceptable value is "name". If unspecified, all mutable fields will be updated.
     * @param {genomics(v1).CallSet} params.resource Request body data
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/callsets/{callSetId}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'PATCH'
        }, options),
        params: params,
        requiredParams: ['callSetId'],
        pathParams: ['callSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.callsets.search
     *
     * @desc Gets a list of call sets matching the criteria.  For the definitions of call sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  Implements [GlobalAllianceApi.searchCallSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/variantmethods.avdl#L178).
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var callSetsPage = response['callSets'];
     *     if (!callSetsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < callSetsPage.length; i++) {
     *       // TODO: Change code below to process each resource in `callSetsPage`:
     *       console.log(JSON.stringify(callSetsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.resource.pageToken = response.nextPageToken;
     *       genomics.callsets.search(request, handlePage);
     *     }
     *   };
     *
     *   genomics.callsets.search(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.callsets.search
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1).SearchCallSetsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/callsets/search').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.datasets = {

    /**
     * genomics.datasets.create
     *
     * @desc Creates a new dataset.  For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.datasets.create(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.datasets.create
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1).Dataset} params.resource Request body data
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/datasets').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.datasets.delete
     *
     * @desc Deletes a dataset and all of its contents (all read group sets, reference sets, variant sets, call sets, annotation sets, etc.) This is reversible (up to one week after the deletion) via the datasets.undelete operation.  For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the dataset to be deleted.
     *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.datasets.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.datasets.delete
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId The ID of the dataset to be deleted.
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/datasets/{datasetId}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'DELETE'
        }, options),
        params: params,
        requiredParams: ['datasetId'],
        pathParams: ['datasetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.datasets.get
     *
     * @desc Gets a dataset by ID.  For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the dataset.
     *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.datasets.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.datasets.get
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId The ID of the dataset.
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/datasets/{datasetId}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['datasetId'],
        pathParams: ['datasetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.datasets.getIamPolicy
     *
     * @desc Gets the access control policy for the dataset. This is empty if the policy or resource does not exist.  See <a href="/iam/docs/managing-policies#getting_a_policy">Getting a Policy</a> for more information.  For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which policy is being specified. Format is
     *     // `datasets/<dataset ID>`.
     *     resource_: 'datasets/my-dataset',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.datasets.getIamPolicy(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.datasets.getIamPolicy
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which policy is being specified. Format is `datasets/<dataset ID>`.
     * @param {genomics(v1).GetIamPolicyRequest} params.resource Request body data
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{resource}:getIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
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
     * genomics.datasets.list
     *
     * @desc Lists datasets within a project.  For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var datasetsPage = response['datasets'];
     *     if (!datasetsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < datasetsPage.length; i++) {
     *       // TODO: Change code below to process each resource in `datasetsPage`:
     *       console.log(JSON.stringify(datasetsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       genomics.datasets.list(request, handlePage);
     *     }
     *   };
     *
     *   genomics.datasets.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.datasets.list
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of results to return in a single page. If unspecified, defaults to 50. The maximum value is 1024.
     * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of `nextPageToken` from the previous response.
     * @param {string=} params.projectId Required. The Google Cloud project ID to list datasets for.
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/datasets').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.datasets.patch
     *
     * @desc Updates a dataset.  For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  This method supports patch semantics.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the dataset to be updated.
     *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. Only these properties
     *       // will be changed.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.datasets.patch(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.datasets.patch
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId The ID of the dataset to be updated.
     * @param {string=} params.updateMask An optional mask specifying which fields to update. At this time, the only mutable field is name. The only acceptable value is "name". If unspecified, all mutable fields will be updated.
     * @param {genomics(v1).Dataset} params.resource Request body data
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/datasets/{datasetId}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'PATCH'
        }, options),
        params: params,
        requiredParams: ['datasetId'],
        pathParams: ['datasetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.datasets.setIamPolicy
     *
     * @desc Sets the access control policy on the specified dataset. Replaces any existing policy.  For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  See <a href="/iam/docs/managing-policies#setting_a_policy">Setting a Policy</a> for more information.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which policy is being specified. Format is
     *     // `datasets/<dataset ID>`.
     *     resource_: 'datasets/my-dataset',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.datasets.setIamPolicy(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.datasets.setIamPolicy
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which policy is being specified. Format is `datasets/<dataset ID>`.
     * @param {genomics(v1).SetIamPolicyRequest} params.resource Request body data
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

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
     * genomics.datasets.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource. See <a href="/iam/docs/managing-policies#testing_permissions">Testing Permissions</a> for more information.  For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which policy is being specified. Format is
     *     // `datasets/<dataset ID>`.
     *     resource_: 'datasets/my-dataset',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.datasets.testIamPermissions(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.datasets.testIamPermissions
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which policy is being specified. Format is `datasets/<dataset ID>`.
     * @param {genomics(v1).TestIamPermissionsRequest} params.resource Request body data
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

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
     * genomics.datasets.undelete
     *
     * @desc Undeletes a dataset by restoring a dataset which was deleted via this API.  For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  This operation is only possible for a week after the deletion occurred.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the dataset to be undeleted.
     *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.datasets.undelete(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.datasets.undelete
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId The ID of the dataset to be undeleted.
     * @param {genomics(v1).UndeleteDatasetRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    undelete: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/datasets/{datasetId}:undelete').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['datasetId'],
        pathParams: ['datasetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.operations = {

    /**
     * genomics.operations.cancel
     *
     * @desc Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the operation resource to be cancelled.
     *     name: 'operations/my-operation',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.operations.cancel(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.operations.cancel
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be cancelled.
     * @param {genomics(v1).CancelOperationRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
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
     * genomics.operations.get
     *
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the operation resource.
     *     name: 'operations/my-operation',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.operations.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.operations.get
     * @memberOf! genomics(v1)
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

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
     * genomics.operations.list
     *
     * @desc Lists operations that match the specified filter in the request.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the operation's parent resource.
     *     name: 'operations',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var operationsPage = response['operations'];
     *     if (!operationsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < operationsPage.length; i++) {
     *       // TODO: Change code below to process each resource in `operationsPage`:
     *       console.log(JSON.stringify(operationsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       genomics.operations.list(request, handlePage);
     *     }
     *   };
     *
     *   genomics.operations.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.operations.list
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter A string for filtering Operations. The following filter fields are supported&#58;  * projectId&#58; Required. Corresponds to   OperationMetadata.projectId. * createTime&#58; The time this job was created, in seconds from the   [epoch](http://en.wikipedia.org/wiki/Unix_time). Can use `>=` and/or `<=`   operators. * status&#58; Can be `RUNNING`, `SUCCESS`, `FAILURE`, or `CANCELED`. Only   one status may be specified. * labels.key where key is a label key.  Examples&#58;  * `projectId = my-project AND createTime >= 1432140000` * `projectId = my-project AND createTime >= 1432140000 AND createTime <= 1432150000 AND status = RUNNING` * `projectId = my-project AND labels.color = *` * `projectId = my-project AND labels.color = red`
     * @param {string} params.name The name of the operation's parent resource.
     * @param {integer=} params.pageSize The maximum number of results to return. If unspecified, defaults to 256. The maximum value is 2048.
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

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

  };

  self.readgroupsets = {

    /**
     * genomics.readgroupsets.delete
     *
     * @desc Deletes a read group set.  For the definitions of read group sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the read group set to be deleted. The caller must have WRITE
     *     // permissions to the dataset associated with this read group set.
     *     readGroupSetId: 'my-read-group-set-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.readgroupsets.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.readgroupsets.delete
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.readGroupSetId The ID of the read group set to be deleted. The caller must have WRITE permissions to the dataset associated with this read group set.
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/readgroupsets/{readGroupSetId}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'DELETE'
        }, options),
        params: params,
        requiredParams: ['readGroupSetId'],
        pathParams: ['readGroupSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.readgroupsets.export
     *
     * @desc Exports a read group set to a BAM file in Google Cloud Storage.  For the definitions of read group sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  Note that currently there may be some differences between exported BAM files and the original BAM file at the time of import. See ImportReadGroupSets for caveats.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Required. The ID of the read group set to export. The caller must have
     *     // READ access to this read group set.
     *     readGroupSetId: 'my-read-group-set-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.readgroupsets.export(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.readgroupsets.export
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.readGroupSetId Required. The ID of the read group set to export. The caller must have READ access to this read group set.
     * @param {genomics(v1).ExportReadGroupSetRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    export: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/readgroupsets/{readGroupSetId}:export').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['readGroupSetId'],
        pathParams: ['readGroupSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.readgroupsets.get
     *
     * @desc Gets a read group set by ID.  For the definitions of read group sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the read group set.
     *     readGroupSetId: 'my-read-group-set-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.readgroupsets.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.readgroupsets.get
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.readGroupSetId The ID of the read group set.
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/readgroupsets/{readGroupSetId}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['readGroupSetId'],
        pathParams: ['readGroupSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.readgroupsets.import
     *
     * @desc Creates read group sets by asynchronously importing the provided information.  For the definitions of read group sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  The caller must have WRITE permissions to the dataset.  ## Notes on [BAM](https://samtools.github.io/hts-specs/SAMv1.pdf) import  - Tags will be converted to strings - tag types are not preserved - Comments (`@CO`) in the input file header will not be preserved - Original header order of references (`@SQ`) will not be preserved - Any reverse stranded unmapped reads will be reverse complemented, and their qualities (also the "BQ" and "OQ" tags, if any) will be reversed - Unmapped reads will be stripped of positional information (reference name and position)
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.readgroupsets.import(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.readgroupsets.import
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1).ImportReadGroupSetsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    import: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/readgroupsets:import').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.readgroupsets.patch
     *
     * @desc Updates a read group set.  For the definitions of read group sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  This method supports patch semantics.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the read group set to be updated. The caller must have WRITE
     *     // permissions to the dataset associated with this read group set.
     *     readGroupSetId: 'my-read-group-set-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. Only these properties
     *       // will be changed.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.readgroupsets.patch(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.readgroupsets.patch
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.readGroupSetId The ID of the read group set to be updated. The caller must have WRITE permissions to the dataset associated with this read group set.
     * @param {string=} params.updateMask An optional mask specifying which fields to update. Supported fields:  * name. * referenceSetId.  Leaving `updateMask` unset is equivalent to specifying all mutable fields.
     * @param {genomics(v1).ReadGroupSet} params.resource Request body data
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/readgroupsets/{readGroupSetId}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'PATCH'
        }, options),
        params: params,
        requiredParams: ['readGroupSetId'],
        pathParams: ['readGroupSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.readgroupsets.search
     *
     * @desc Searches for read group sets matching the criteria.  For the definitions of read group sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  Implements [GlobalAllianceApi.searchReadGroupSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/readmethods.avdl#L135).
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var readGroupSetsPage = response['readGroupSets'];
     *     if (!readGroupSetsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < readGroupSetsPage.length; i++) {
     *       // TODO: Change code below to process each resource in `readGroupSetsPage`:
     *       console.log(JSON.stringify(readGroupSetsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.resource.pageToken = response.nextPageToken;
     *       genomics.readgroupsets.search(request, handlePage);
     *     }
     *   };
     *
     *   genomics.readgroupsets.search(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.readgroupsets.search
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1).SearchReadGroupSetsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/readgroupsets/search').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },
    coveragebuckets: {

      /**
       * genomics.readgroupsets.coveragebuckets.list
       *
       * @desc Lists fixed width coverage buckets for a read group set, each of which correspond to a range of a reference sequence. Each bucket summarizes coverage information across its corresponding genomic range.  For the definitions of read group sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  Coverage is defined as the number of reads which are aligned to a given base in the reference sequence. Coverage buckets are available at several precomputed bucket widths, enabling retrieval of various coverage 'zoom levels'. The caller must have READ permissions for the target read group set.
       *
       * @example
       * // BEFORE RUNNING:
       * // ---------------
       * // 1. If not already done, enable the Genomics API
       * //    and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/genomics
       * // 2. This sample uses Application Default Credentials for authentication.
       * //    If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk and run
       * //    `gcloud beta auth application-default login`.
       * //    For more information, see
       * //    https://developers.google.com/identity/protocols/application-default-credentials
       * // 3. Install the Node.js client library by running
       * //    `npm install googleapis --save`
       *
       * var google = require('googleapis');
       * var genomics = google.genomics('v1');
       *
       * authorize(function(authClient) {
       *   var request = {
       *     // Required. The ID of the read group set over which coverage is requested.
       *     readGroupSetId: 'my-read-group-set-id',  // TODO: Update placeholder value.
       *
       *     auth: authClient,
       *   };
       *
       *   var handlePage = function(err, response) {
       *     if (err) {
       *       console.error(err);
       *       return;
       *     }
       *
       *     var coverageBucketsPage = response['coverageBuckets'];
       *     if (!coverageBucketsPage) {
       *       return;
       *     }
       *     for (var i = 0; i < coverageBucketsPage.length; i++) {
       *       // TODO: Change code below to process each resource in `coverageBucketsPage`:
       *       console.log(JSON.stringify(coverageBucketsPage[i], null, 2));
       *     }
       *
       *     if (response.nextPageToken) {
       *       request.pageToken = response.nextPageToken;
       *       genomics.readgroupsets.coveragebuckets.list(request, handlePage);
       *     }
       *   };
       *
       *   genomics.readgroupsets.coveragebuckets.list(request, handlePage);
       * });
       *
       * function authorize(callback) {
       *   google.auth.getApplicationDefault(function(err, authClient) {
       *     if (err) {
       *       console.error('authentication failed: ', err);
       *       return;
       *     }
       *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
       *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
       *       authClient = authClient.createScoped(scopes);
       *     }
       *     callback(authClient);
       *   });
       * }
       *
       * @alias genomics.readgroupsets.coveragebuckets.list
       * @memberOf! genomics(v1)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.end The end position of the range on the reference, 0-based exclusive. If specified, `referenceName` must also be specified. If unset or 0, defaults to the length of the reference.
       * @param {integer=} params.pageSize The maximum number of results to return in a single page. If unspecified, defaults to 1024. The maximum value is 2048.
       * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of `nextPageToken` from the previous response.
       * @param {string} params.readGroupSetId Required. The ID of the read group set over which coverage is requested.
       * @param {string=} params.referenceName The name of the reference to query, within the reference set associated with this query. Optional.
       * @param {string=} params.start The start position of the range on the reference, 0-based inclusive. If specified, `referenceName` must also be specified. Defaults to 0.
       * @param {string=} params.targetBucketWidth The desired width of each reported coverage bucket in base pairs. This will be rounded down to the nearest precomputed bucket width; the value of which is returned as `bucketWidth` in the response. Defaults to infinity (each bucket spans an entire reference sequence) or the length of the target range, if specified. The smallest precomputed `bucketWidth` is currently 2048 base pairs; this is subject to change.
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

        const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/readgroupsets/{readGroupSetId}/coveragebuckets').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['readGroupSetId'],
          pathParams: ['readGroupSetId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  self.reads = {

    /**
     * genomics.reads.search
     *
     * @desc Gets a list of reads for one or more read group sets.  For the definitions of read group sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  Reads search operates over a genomic coordinate space of reference sequence & position defined over the reference sequences to which the requested read group sets are aligned.  If a target positional range is specified, search returns all reads whose alignment to the reference genome overlap the range. A query which specifies only read group set IDs yields all reads in those read group sets, including unmapped reads.  All reads returned (including reads on subsequent pages) are ordered by genomic coordinate (by reference sequence, then position). Reads with equivalent genomic coordinates are returned in an unspecified order. This order is consistent, such that two queries for the same content (regardless of page size) yield reads in the same order across their respective streams of paginated responses.  Implements [GlobalAllianceApi.searchReads](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/readmethods.avdl#L85).
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var alignmentsPage = response['alignments'];
     *     if (!alignmentsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < alignmentsPage.length; i++) {
     *       // TODO: Change code below to process each resource in `alignmentsPage`:
     *       console.log(JSON.stringify(alignmentsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.resource.pageToken = response.nextPageToken;
     *       genomics.reads.search(request, handlePage);
     *     }
     *   };
     *
     *   genomics.reads.search(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.reads.search
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1).SearchReadsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/reads/search').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.references = {

    /**
     * genomics.references.get
     *
     * @desc Gets a reference.  For the definitions of references and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  Implements [GlobalAllianceApi.getReference](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L158).
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the reference.
     *     referenceId: 'my-reference-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.references.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.references.get
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.referenceId The ID of the reference.
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/references/{referenceId}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['referenceId'],
        pathParams: ['referenceId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.references.search
     *
     * @desc Searches for references which match the given criteria.  For the definitions of references and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  Implements [GlobalAllianceApi.searchReferences](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L146).
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var referencesPage = response['references'];
     *     if (!referencesPage) {
     *       return;
     *     }
     *     for (var i = 0; i < referencesPage.length; i++) {
     *       // TODO: Change code below to process each resource in `referencesPage`:
     *       console.log(JSON.stringify(referencesPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.resource.pageToken = response.nextPageToken;
     *       genomics.references.search(request, handlePage);
     *     }
     *   };
     *
     *   genomics.references.search(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.references.search
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1).SearchReferencesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/references/search').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },
    bases: {

      /**
       * genomics.references.bases.list
       *
       * @desc Lists the bases in a reference, optionally restricted to a range.  For the definitions of references and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  Implements [GlobalAllianceApi.getReferenceBases](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L221).
       *
       * @example
       * // BEFORE RUNNING:
       * // ---------------
       * // 1. If not already done, enable the Genomics API
       * //    and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/genomics
       * // 2. This sample uses Application Default Credentials for authentication.
       * //    If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk and run
       * //    `gcloud beta auth application-default login`.
       * //    For more information, see
       * //    https://developers.google.com/identity/protocols/application-default-credentials
       * // 3. Install the Node.js client library by running
       * //    `npm install googleapis --save`
       *
       * var google = require('googleapis');
       * var genomics = google.genomics('v1');
       *
       * authorize(function(authClient) {
       *   var request = {
       *     // The ID of the reference.
       *     referenceId: 'my-reference-id',  // TODO: Update placeholder value.
       *
       *     auth: authClient,
       *   };
       *
       *   var handlePage = function(err, response) {
       *     if (err) {
       *       console.error(err);
       *       return;
       *     }
       *
       *     var nextPageTokenPage = response['nextPageToken'];
       *     if (!nextPageTokenPage) {
       *       return;
       *     }
       *     // TODO: Change code below to process each `nextPageTokenPage` resource:
       *     console.log(nextPageTokenPage);
       *
       *     if (response.nextPageToken) {
       *       request.pageToken = response.nextPageToken;
       *       genomics.references.bases.list(request, handlePage);
       *     }
       *   };
       *
       *   genomics.references.bases.list(request, handlePage);
       * });
       *
       * function authorize(callback) {
       *   google.auth.getApplicationDefault(function(err, authClient) {
       *     if (err) {
       *       console.error('authentication failed: ', err);
       *       return;
       *     }
       *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
       *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
       *       authClient = authClient.createScoped(scopes);
       *     }
       *     callback(authClient);
       *   });
       * }
       *
       * @alias genomics.references.bases.list
       * @memberOf! genomics(v1)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.end The end position (0-based, exclusive) of this query. Defaults to the length of this reference.
       * @param {integer=} params.pageSize The maximum number of bases to return in a single page. If unspecified, defaults to 200Kbp (kilo base pairs). The maximum value is 10Mbp (mega base pairs).
       * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of `nextPageToken` from the previous response.
       * @param {string} params.referenceId The ID of the reference.
       * @param {string=} params.start The start position (0-based) of this query. Defaults to 0.
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

        const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/references/{referenceId}/bases').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['referenceId'],
          pathParams: ['referenceId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  self.referencesets = {

    /**
     * genomics.referencesets.get
     *
     * @desc Gets a reference set.  For the definitions of references and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  Implements [GlobalAllianceApi.getReferenceSet](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L83).
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the reference set.
     *     referenceSetId: 'my-reference-set-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.referencesets.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.referencesets.get
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.referenceSetId The ID of the reference set.
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/referencesets/{referenceSetId}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['referenceSetId'],
        pathParams: ['referenceSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.referencesets.search
     *
     * @desc Searches for reference sets which match the given criteria.  For the definitions of references and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  Implements [GlobalAllianceApi.searchReferenceSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L71)
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var referenceSetsPage = response['referenceSets'];
     *     if (!referenceSetsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < referenceSetsPage.length; i++) {
     *       // TODO: Change code below to process each resource in `referenceSetsPage`:
     *       console.log(JSON.stringify(referenceSetsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.resource.pageToken = response.nextPageToken;
     *       genomics.referencesets.search(request, handlePage);
     *     }
     *   };
     *
     *   genomics.referencesets.search(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.referencesets.search
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1).SearchReferenceSetsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/referencesets/search').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.variants = {

    /**
     * genomics.variants.create
     *
     * @desc Creates a new variant.  For the definitions of variants and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.variants.create(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.variants.create
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1).Variant} params.resource Request body data
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/variants').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.variants.delete
     *
     * @desc Deletes a variant.  For the definitions of variants and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the variant to be deleted.
     *     variantId: 'my-variant-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.variants.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.variants.delete
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.variantId The ID of the variant to be deleted.
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/variants/{variantId}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'DELETE'
        }, options),
        params: params,
        requiredParams: ['variantId'],
        pathParams: ['variantId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.variants.get
     *
     * @desc Gets a variant by ID.  For the definitions of variants and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the variant.
     *     variantId: 'my-variant-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.variants.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.variants.get
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.variantId The ID of the variant.
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/variants/{variantId}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['variantId'],
        pathParams: ['variantId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.variants.import
     *
     * @desc Creates variant data by asynchronously importing the provided information.  For the definitions of variant sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  The variants for import will be merged with any existing variant that matches its reference sequence, start, end, reference bases, and alternative bases. If no such variant exists, a new one will be created.  When variants are merged, the call information from the new variant is added to the existing variant, and Variant info fields are merged as specified in infoMergeConfig. As a special case, for single-sample VCF files, QUAL and FILTER fields will be moved to the call level; these are sometimes interpreted in a call-specific context. Imported VCF headers are appended to the metadata already in a variant set.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.variants.import(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.variants.import
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1).ImportVariantsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    import: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/variants:import').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.variants.merge
     *
     * @desc Merges the given variants with existing variants.  For the definitions of variants and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  Each variant will be merged with an existing variant that matches its reference sequence, start, end, reference bases, and alternative bases. If no such variant exists, a new one will be created.  When variants are merged, the call information from the new variant is added to the existing variant. Variant info fields are merged as specified in the infoMergeConfig field of the MergeVariantsRequest.  Please exercise caution when using this method!  It is easy to introduce mistakes in existing variants and difficult to back out of them.  For example, suppose you were trying to merge a new variant with an existing one and both variants contain calls that belong to callsets with the same callset ID.      // Existing variant - irrelevant fields trimmed for clarity     {         "variantSetId": "10473108253681171589",         "referenceName": "1",         "start": "10582",         "referenceBases": "G",         "alternateBases": [             "A"         ],         "calls": [             {                 "callSetId": "10473108253681171589-0",                 "callSetName": "CALLSET0",                 "genotype": [                     0,                     1                 ],             }         ]     }      // New variant with conflicting call information     {         "variantSetId": "10473108253681171589",         "referenceName": "1",         "start": "10582",         "referenceBases": "G",         "alternateBases": [             "A"         ],         "calls": [             {                 "callSetId": "10473108253681171589-0",                 "callSetName": "CALLSET0",                 "genotype": [                     1,                     1                 ],             }         ]     }  The resulting merged variant would overwrite the existing calls with those from the new variant:      {         "variantSetId": "10473108253681171589",         "referenceName": "1",         "start": "10582",         "referenceBases": "G",         "alternateBases": [             "A"         ],         "calls": [             {                 "callSetId": "10473108253681171589-0",                 "callSetName": "CALLSET0",                 "genotype": [                     1,                     1                 ],             }         ]     }  This may be the desired outcome, but it is up to the user to determine if if that is indeed the case.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.variants.merge(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.variants.merge
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1).MergeVariantsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    merge: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/variants:merge').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.variants.patch
     *
     * @desc Updates a variant.  For the definitions of variants and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  This method supports patch semantics. Returns the modified variant without its calls.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the variant to be updated.
     *     variantId: 'my-variant-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. Only these properties
     *       // will be changed.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.variants.patch(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.variants.patch
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.updateMask An optional mask specifying which fields to update. At this time, mutable fields are names and info. Acceptable values are "names" and "info". If unspecified, all mutable fields will be updated.
     * @param {string} params.variantId The ID of the variant to be updated.
     * @param {genomics(v1).Variant} params.resource Request body data
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/variants/{variantId}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'PATCH'
        }, options),
        params: params,
        requiredParams: ['variantId'],
        pathParams: ['variantId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.variants.search
     *
     * @desc Gets a list of variants matching the criteria.  For the definitions of variants and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  Implements [GlobalAllianceApi.searchVariants](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/variantmethods.avdl#L126).
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var variantsPage = response['variants'];
     *     if (!variantsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < variantsPage.length; i++) {
     *       // TODO: Change code below to process each resource in `variantsPage`:
     *       console.log(JSON.stringify(variantsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.resource.pageToken = response.nextPageToken;
     *       genomics.variants.search(request, handlePage);
     *     }
     *   };
     *
     *   genomics.variants.search(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.variants.search
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1).SearchVariantsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/variants/search').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.variantsets = {

    /**
     * genomics.variantsets.create
     *
     * @desc Creates a new variant set.  For the definitions of variant sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  The provided variant set must have a valid `datasetId` set - all other fields are optional. Note that the `id` field will be ignored, as this is assigned by the server.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.variantsets.create(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.variantsets.create
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1).VariantSet} params.resource Request body data
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/variantsets').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.variantsets.delete
     *
     * @desc Deletes a variant set including all variants, call sets, and calls within. This is not reversible.  For the definitions of variant sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the variant set to be deleted.
     *     variantSetId: 'my-variant-set-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.variantsets.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.variantsets.delete
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.variantSetId The ID of the variant set to be deleted.
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/variantsets/{variantSetId}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'DELETE'
        }, options),
        params: params,
        requiredParams: ['variantSetId'],
        pathParams: ['variantSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.variantsets.export
     *
     * @desc Exports variant set data to an external destination.  For the definitions of variant sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Required. The ID of the variant set that contains variant data which
     *     // should be exported. The caller must have READ access to this variant set.
     *     variantSetId: 'my-variant-set-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.variantsets.export(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.variantsets.export
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.variantSetId Required. The ID of the variant set that contains variant data which should be exported. The caller must have READ access to this variant set.
     * @param {genomics(v1).ExportVariantSetRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    export: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/variantsets/{variantSetId}:export').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['variantSetId'],
        pathParams: ['variantSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.variantsets.get
     *
     * @desc Gets a variant set by ID.  For the definitions of variant sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Required. The ID of the variant set.
     *     variantSetId: 'my-variant-set-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.variantsets.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.variantsets.get
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.variantSetId Required. The ID of the variant set.
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/variantsets/{variantSetId}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['variantSetId'],
        pathParams: ['variantSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.variantsets.patch
     *
     * @desc Updates a variant set using patch semantics.  For the definitions of variant sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the variant to be updated (must already exist).
     *     variantSetId: 'my-variant-set-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. Only these properties
     *       // will be changed.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.variantsets.patch(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.variantsets.patch
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.updateMask An optional mask specifying which fields to update. Supported fields:  * metadata. * name. * description.  Leaving `updateMask` unset is equivalent to specifying all mutable fields.
     * @param {string} params.variantSetId The ID of the variant to be updated (must already exist).
     * @param {genomics(v1).VariantSet} params.resource Request body data
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

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/variantsets/{variantSetId}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'PATCH'
        }, options),
        params: params,
        requiredParams: ['variantSetId'],
        pathParams: ['variantSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.variantsets.search
     *
     * @desc Returns a list of all variant sets matching search criteria.  For the definitions of variant sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)  Implements [GlobalAllianceApi.searchVariantSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/variantmethods.avdl#L49).
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var variantSetsPage = response['variantSets'];
     *     if (!variantSetsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < variantSetsPage.length; i++) {
     *       // TODO: Change code below to process each resource in `variantSetsPage`:
     *       console.log(JSON.stringify(variantSetsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.resource.pageToken = response.nextPageToken;
     *       genomics.variantsets.search(request, handlePage);
     *     }
     *   };
     *
     *   genomics.variantsets.search(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias genomics.variantsets.search
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1).SearchVariantSetsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/variantsets/search').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * @typedef Annotation
 * @memberOf! genomics(v1)
 * @type object
* @property {string} annotationSetId The annotation set to which this annotation belongs.
* @property {string} end The end position of the range on the reference, 0-based exclusive.
* @property {string} id The server-generated annotation ID, unique across all annotations.
* @property {object} info A map of additional read alignment information. This must be of the form
map&lt;string, string[]&gt; (string key mapping to a list of string values).
* @property {string} name The display name of this annotation.
* @property {string} referenceId The ID of the Google Genomics reference associated with this range.
* @property {string} referenceName The display name corresponding to the reference specified by
`referenceId`, for example `chr1`, `1`, or `chrX`.
* @property {boolean} reverseStrand Whether this range refers to the reverse strand, as opposed to the forward
strand. Note that regardless of this field, the start/end position of the
range always refer to the forward strand.
* @property {string} start The start position of the range on the reference, 0-based inclusive.
* @property {genomics(v1).Transcript} transcript A transcript value represents the assertion that a particular region of
the reference genome may be transcribed as RNA. An alternative splicing
pattern would be represented as a separate transcript object. This field
is only set for annotations of type `TRANSCRIPT`.
* @property {string} type The data type for this annotation. Must match the containing annotation
set&#39;s type.
* @property {genomics(v1).VariantAnnotation} variant A variant annotation, which describes the effect of a variant on the
genome, the coding sequence, and/or higher level consequences at the
organism level e.g. pathogenicity. This field is only set for annotations
of type `VARIANT`.
*/

/**
 * @typedef AnnotationSet
 * @memberOf! genomics(v1)
 * @type object
* @property {string} datasetId The dataset to which this annotation set belongs.
* @property {string} id The server-generated annotation set ID, unique across all annotation sets.
* @property {object} info A map of additional read alignment information. This must be of the form
map&lt;string, string[]&gt; (string key mapping to a list of string values).
* @property {string} name The display name for this annotation set.
* @property {string} referenceSetId The ID of the reference set that defines the coordinate space for this
set&#39;s annotations.
* @property {string} sourceUri The source URI describing the file from which this annotation set was
generated, if any.
* @property {string} type The type of annotations contained within this set.
*/

/**
 * @typedef BatchCreateAnnotationsRequest
 * @memberOf! genomics(v1)
 * @type object
* @property {genomics(v1).Annotation[]} annotations The annotations to be created. At most 4096 can be specified in a single
request.
* @property {string} requestId A unique request ID which enables the server to detect duplicated requests.
If provided, duplicated requests will result in the same response; if not
provided, duplicated requests may result in duplicated data. For a given
annotation set, callers should not reuse `request_id`s when writing
different batches of annotations - behavior in this case is undefined.
A common approach is to use a UUID. For batch jobs where worker crashes are
a possibility, consider using some unique variant of a worker or run ID.
*/

/**
 * @typedef BatchCreateAnnotationsResponse
 * @memberOf! genomics(v1)
 * @type object
* @property {genomics(v1).Entry[]} entries The resulting per-annotation entries, ordered consistently with the
original request.
*/

/**
 * @typedef Binding
 * @memberOf! genomics(v1)
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
 * @typedef CallSet
 * @memberOf! genomics(v1)
 * @type object
* @property {string} created The date this call set was created in milliseconds from the epoch.
* @property {string} id The server-generated call set ID, unique across all call sets.
* @property {object} info A map of additional call set information. This must be of the form
map&lt;string, string[]&gt; (string key mapping to a list of string values).
* @property {string} name The call set name.
* @property {string} sampleId The sample ID this call set corresponds to.
* @property {string[]} variantSetIds The IDs of the variant sets this call set belongs to. This field must
have exactly length one, as a call set belongs to a single variant set.
This field is repeated for compatibility with the
[GA4GH 0.5.1
API](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/variants.avdl#L76).
*/

/**
 * @typedef CancelOperationRequest
 * @memberOf! genomics(v1)
 * @type object
 */

/**
 * @typedef CigarUnit
 * @memberOf! genomics(v1)
 * @type object
* @property {string} operation 
* @property {string} operationLength The number of genomic bases that the operation runs for. Required.
* @property {string} referenceSequence `referenceSequence` is only used at mismatches
(`SEQUENCE_MISMATCH`) and deletions (`DELETE`).
Filling this field replaces SAM&#39;s MD tag. If the relevant information is
not available, this field is unset.
*/

/**
 * @typedef ClinicalCondition
 * @memberOf! genomics(v1)
 * @type object
* @property {string} conceptId The MedGen concept id associated with this gene.
Search for these IDs at http://www.ncbi.nlm.nih.gov/medgen/
* @property {genomics(v1).ExternalId[]} externalIds The set of external IDs for this condition.
* @property {string[]} names A set of names for the condition.
* @property {string} omimId The OMIM id for this condition.
Search for these IDs at http://omim.org/
*/

/**
 * @typedef CodingSequence
 * @memberOf! genomics(v1)
 * @type object
* @property {string} end The end of the coding sequence on this annotation&#39;s reference sequence,
0-based exclusive. Note that this position is relative to the reference
start, and *not* the containing annotation start.
* @property {string} start The start of the coding sequence on this annotation&#39;s reference sequence,
0-based inclusive. Note that this position is relative to the reference
start, and *not* the containing annotation start.
*/

/**
 * @typedef ComputeEngine
 * @memberOf! genomics(v1)
 * @type object
 * @property {string[]} diskNames The names of the disks that were created for this pipeline.
 * @property {string} instanceName The instance on which the operation is running.
 * @property {string} machineType The machine type of the instance.
 * @property {string} zone The availability zone in which the instance resides.
 */

/**
 * @typedef CoverageBucket
 * @memberOf! genomics(v1)
 * @type object
* @property {number} meanCoverage The average number of reads which are aligned to each individual
reference base in this bucket.
* @property {genomics(v1).Range} range The genomic coordinate range spanned by this bucket.
*/

/**
 * @typedef Dataset
 * @memberOf! genomics(v1)
 * @type object
 * @property {string} createTime The time this dataset was created, in seconds from the epoch.
 * @property {string} id The server-generated dataset ID, unique across all datasets.
 * @property {string} name The dataset name.
 * @property {string} projectId The Google Cloud project ID that this dataset belongs to.
 */

/**
 * @typedef Empty
 * @memberOf! genomics(v1)
 * @type object
 */

/**
 * @typedef Entry
 * @memberOf! genomics(v1)
 * @type object
 * @property {genomics(v1).Annotation} annotation The created annotation, if creation was successful.
 * @property {genomics(v1).Status} status The creation status.
 */

/**
 * @typedef Exon
 * @memberOf! genomics(v1)
 * @type object
* @property {string} end The end position of the exon on this annotation&#39;s reference sequence,
0-based exclusive. Note that this is relative to the reference start, and
*not* the containing annotation start.
* @property {integer} frame The frame of this exon. Contains a value of 0, 1, or 2, which indicates
the offset of the first coding base of the exon within the reading frame
of the coding DNA sequence, if any. This field is dependent on the
strandedness of this annotation (see
Annotation.reverse_strand).
For forward stranded annotations, this offset is relative to the
exon.start. For reverse
strand annotations, this offset is relative to the
exon.end `- 1`.

Unset if this exon does not intersect the coding sequence. Upon creation
of a transcript, the frame must be populated for all or none of the
coding exons.
* @property {string} start The start position of the exon on this annotation&#39;s reference sequence,
0-based inclusive. Note that this is relative to the reference start, and
**not** the containing annotation start.
*/

/**
 * @typedef Experiment
 * @memberOf! genomics(v1)
 * @type object
* @property {string} instrumentModel The instrument model used as part of this experiment. This maps to
sequencing technology in the SAM spec.
* @property {string} libraryId A client-supplied library identifier; a library is a collection of DNA
fragments which have been prepared for sequencing from a sample. This
field is important for quality control as error or bias can be introduced
during sample preparation.
* @property {string} platformUnit The platform unit used as part of this experiment, for example
flowcell-barcode.lane for Illumina or slide for SOLiD. Corresponds to the
@RG PU field in the SAM spec.
* @property {string} sequencingCenter The sequencing center used as part of this experiment.
*/

/**
 * @typedef ExportReadGroupSetRequest
 * @memberOf! genomics(v1)
 * @type object
* @property {string} exportUri Required. A Google Cloud Storage URI for the exported BAM file.
The currently authenticated user must have write access to the new file.
An error will be returned if the URI already contains data.
* @property {string} projectId Required. The Google Cloud project ID that owns this
export. The caller must have WRITE access to this project.
* @property {string[]} referenceNames The reference names to export. If this is not specified, all reference
sequences, including unmapped reads, are exported.
Use `*` to export only unmapped reads.
*/

/**
 * @typedef ExportVariantSetRequest
 * @memberOf! genomics(v1)
 * @type object
* @property {string} bigqueryDataset Required. The BigQuery dataset to export data to. This dataset must already
exist. Note that this is distinct from the Genomics concept of &quot;dataset&quot;.
* @property {string} bigqueryTable Required. The BigQuery table to export data to.
If the table doesn&#39;t exist, it will be created. If it already exists, it
will be overwritten.
* @property {string[]} callSetIds If provided, only variant call information from the specified call sets
will be exported. By default all variant calls are exported.
* @property {string} format The format for the exported data.
* @property {string} projectId Required. The Google Cloud project ID that owns the destination
BigQuery dataset. The caller must have WRITE access to this project.  This
project will also own the resulting export job.
*/

/**
 * @typedef ExternalId
 * @memberOf! genomics(v1)
 * @type object
 * @property {string} id The id used by the source of this data.
 * @property {string} sourceName The name of the source of this data.
 */

/**
 * @typedef GetIamPolicyRequest
 * @memberOf! genomics(v1)
 * @type object
 */

/**
 * @typedef ImportReadGroupSetsRequest
 * @memberOf! genomics(v1)
 * @type object
* @property {string} datasetId Required. The ID of the dataset these read group sets will belong to. The
caller must have WRITE permissions to this dataset.
* @property {string} partitionStrategy The partition strategy describes how read groups are partitioned into read
group sets.
* @property {string} referenceSetId The reference set to which the imported read group sets are aligned to, if
any. The reference names of this reference set must be a superset of those
found in the imported file headers. If no reference set id is provided, a
best effort is made to associate with a matching reference set.
* @property {string[]} sourceUris A list of URIs pointing at [BAM
files](https://samtools.github.io/hts-specs/SAMv1.pdf)
in Google Cloud Storage.
Those URIs can include wildcards (*), but do not add or remove
matching files before import has completed.

Note that Google Cloud Storage object listing is only eventually
consistent: files added may be not be immediately visible to
everyone. Thus, if using a wildcard it is preferable not to start
the import immediately after the files are created.
*/

/**
 * @typedef ImportReadGroupSetsResponse
 * @memberOf! genomics(v1)
 * @type object
 * @property {string[]} readGroupSetIds IDs of the read group sets that were created.
 */

/**
 * @typedef ImportVariantsRequest
 * @memberOf! genomics(v1)
 * @type object
* @property {string} format The format of the variant data being imported. If unspecified, defaults to
to `VCF`.
* @property {object} infoMergeConfig A mapping between info field keys and the InfoMergeOperations to
be performed on them. This is plumbed down to the MergeVariantRequests
generated by the resulting import job.
* @property {boolean} normalizeReferenceNames Convert reference names to the canonical representation.
hg19 haploytypes (those reference names containing &quot;_hap&quot;)
are not modified in any way.
All other reference names are modified according to the following rules:
The reference name is capitalized.
The &quot;chr&quot; prefix is dropped for all autosomes and sex chromsomes.
For example &quot;chr17&quot; becomes &quot;17&quot; and &quot;chrX&quot; becomes &quot;X&quot;.
All mitochondrial chromosomes (&quot;chrM&quot;, &quot;chrMT&quot;, etc) become &quot;MT&quot;.
* @property {string[]} sourceUris A list of URIs referencing variant files in Google Cloud Storage. URIs can
include wildcards [as described
here](https://cloud.google.com/storage/docs/gsutil/addlhelp/WildcardNames).
Note that recursive wildcards (&#39;**&#39;) are not supported.
* @property {string} variantSetId Required. The variant set to which variant data should be imported.
*/

/**
 * @typedef ImportVariantsResponse
 * @memberOf! genomics(v1)
 * @type object
 * @property {string[]} callSetIds IDs of the call sets created during the import.
 */

/**
 * @typedef LinearAlignment
 * @memberOf! genomics(v1)
 * @type object
* @property {genomics(v1).CigarUnit[]} cigar Represents the local alignment of this sequence (alignment matches, indels,
etc) against the reference.
* @property {integer} mappingQuality The mapping quality of this alignment. Represents how likely
the read maps to this position as opposed to other locations.

Specifically, this is -10 log10 Pr(mapping position is wrong), rounded to
the nearest integer.
* @property {genomics(v1).Position} position The position of this alignment.
*/

/**
 * @typedef ListBasesResponse
 * @memberOf! genomics(v1)
 * @type object
* @property {string} nextPageToken The continuation token, which is used to page through large result sets.
Provide this value in a subsequent request to return the next page of
results. This field will be empty if there aren&#39;t any additional results.
* @property {string} offset The offset position (0-based) of the given `sequence` from the
start of this `Reference`. This value will differ for each page
in a paginated request.
* @property {string} sequence A substring of the bases that make up this reference.
*/

/**
 * @typedef ListCoverageBucketsResponse
 * @memberOf! genomics(v1)
 * @type object
* @property {string} bucketWidth The length of each coverage bucket in base pairs. Note that buckets at the
end of a reference sequence may be shorter. This value is omitted if the
bucket width is infinity (the default behaviour, with no range or
`targetBucketWidth`).
* @property {genomics(v1).CoverageBucket[]} coverageBuckets The coverage buckets. The list of buckets is sparse; a bucket with 0
overlapping reads is not returned. A bucket never crosses more than one
reference sequence. Each bucket has width `bucketWidth`, unless
its end is the end of the reference sequence.
* @property {string} nextPageToken The continuation token, which is used to page through large result sets.
Provide this value in a subsequent request to return the next page of
results. This field will be empty if there aren&#39;t any additional results.
*/

/**
 * @typedef ListDatasetsResponse
 * @memberOf! genomics(v1)
 * @type object
* @property {genomics(v1).Dataset[]} datasets The list of matching Datasets.
* @property {string} nextPageToken The continuation token, which is used to page through large result sets.
Provide this value in a subsequent request to return the next page of
results. This field will be empty if there aren&#39;t any additional results.
*/

/**
 * @typedef ListOperationsResponse
 * @memberOf! genomics(v1)
 * @type object
 * @property {string} nextPageToken The standard List next-page token.
 * @property {genomics(v1).Operation[]} operations A list of operations that matches the specified filter in the request.
 */

/**
 * @typedef MergeVariantsRequest
 * @memberOf! genomics(v1)
 * @type object
* @property {object} infoMergeConfig A mapping between info field keys and the InfoMergeOperations to
be performed on them.
* @property {string} variantSetId The destination variant set.
* @property {genomics(v1).Variant[]} variants The variants to be merged with existing variants.
*/

/**
 * @typedef Operation
 * @memberOf! genomics(v1)
 * @type object
* @property {boolean} done If the value is `false`, it means the operation is still in progress.
If `true`, the operation is completed, and either `error` or `response` is
available.
* @property {genomics(v1).Status} error The error result of the operation in case of failure or cancellation.
* @property {object} metadata An OperationMetadata object. This will always be returned with the Operation.
* @property {string} name The server-assigned name, which is only unique within the same service that originally returns it. For example&amp;#58; `operations/CJHU7Oi_ChDrveSpBRjfuL-qzoWAgEw`
* @property {object} response If importing ReadGroupSets, an ImportReadGroupSetsResponse is returned. If importing Variants, an ImportVariantsResponse is returned. For pipelines and exports, an Empty response is returned.
*/

/**
 * @typedef OperationEvent
 * @memberOf! genomics(v1)
 * @type object
* @property {string} description Required description of event.
* @property {string} endTime Optional time of when event finished. An event can have a start time and no
finish time. If an event has a finish time, there must be a start time.
* @property {string} startTime Optional time of when event started.
*/

/**
 * @typedef OperationMetadata
 * @memberOf! genomics(v1)
 * @type object
* @property {string} clientId This field is deprecated. Use `labels` instead. Optionally provided by the
caller when submitting the request that creates the operation.
* @property {string} createTime The time at which the job was submitted to the Genomics service.
* @property {string} endTime The time at which the job stopped running.
* @property {genomics(v1).OperationEvent[]} events Optional event messages that were generated during the job&#39;s execution.
This also contains any warnings that were generated during import
or export.
* @property {object} labels Optionally provided by the caller when submitting the request that creates
the operation.
* @property {string} projectId The Google Cloud Project in which the job is scoped.
* @property {object} request The original request that started the operation. Note that this will be in
current version of the API. If the operation was started with v1beta2 API
and a GetOperation is performed on v1 API, a v1 request will be returned.
* @property {object} runtimeMetadata Runtime metadata on this Operation.
* @property {string} startTime The time at which the job began to run.
*/

/**
 * @typedef Policy
 * @memberOf! genomics(v1)
 * @type object
* @property {genomics(v1).Binding[]} bindings Associates a list of `members` to a `role`.
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
* @property {integer} version Version of the `Policy`. The default version is 0.
*/

/**
 * @typedef Position
 * @memberOf! genomics(v1)
 * @type object
* @property {string} position The 0-based offset from the start of the forward strand for that reference.
* @property {string} referenceName The name of the reference in whatever reference set is being used.
* @property {boolean} reverseStrand Whether this position is on the reverse strand, as opposed to the forward
strand.
*/

/**
 * @typedef Program
 * @memberOf! genomics(v1)
 * @type object
* @property {string} commandLine The command line used to run this program.
* @property {string} id The user specified locally unique ID of the program. Used along with
`prevProgramId` to define an ordering between programs.
* @property {string} name The display name of the program. This is typically the colloquial name of
the tool used, for example &#39;bwa&#39; or &#39;picard&#39;.
* @property {string} prevProgramId The ID of the program run before this one.
* @property {string} version The version of the program run.
*/

/**
 * @typedef Range
 * @memberOf! genomics(v1)
 * @type object
* @property {string} end The end position of the range on the reference, 0-based exclusive.
* @property {string} referenceName The reference sequence name, for example `chr1`,
`1`, or `chrX`.
* @property {string} start The start position of the range on the reference, 0-based inclusive.
*/

/**
 * @typedef Read
 * @memberOf! genomics(v1)
 * @type object
* @property {integer[]} alignedQuality The quality of the read sequence contained in this alignment record
(equivalent to QUAL in SAM).
`alignedSequence` and `alignedQuality` may be shorter than the full read
sequence and quality. This will occur if the alignment is part of a
chimeric alignment, or if the read was trimmed. When this occurs, the CIGAR
for this read will begin/end with a hard clip operator that will indicate
the length of the excised sequence.
* @property {string} alignedSequence The bases of the read sequence contained in this alignment record,
**without CIGAR operations applied** (equivalent to SEQ in SAM).
`alignedSequence` and `alignedQuality` may be
shorter than the full read sequence and quality. This will occur if the
alignment is part of a chimeric alignment, or if the read was trimmed. When
this occurs, the CIGAR for this read will begin/end with a hard clip
operator that will indicate the length of the excised sequence.
* @property {genomics(v1).LinearAlignment} alignment The linear alignment for this alignment record. This field is null for
unmapped reads.
* @property {boolean} duplicateFragment The fragment is a PCR or optical duplicate (SAM flag 0x400).
* @property {boolean} failedVendorQualityChecks Whether this read did not pass filters, such as platform or vendor quality
controls (SAM flag 0x200).
* @property {integer} fragmentLength The observed length of the fragment, equivalent to TLEN in SAM.
* @property {string} fragmentName The fragment name. Equivalent to QNAME (query template name) in SAM.
* @property {string} id The server-generated read ID, unique across all reads. This is different
from the `fragmentName`.
* @property {object} info A map of additional read alignment information. This must be of the form
map&lt;string, string[]&gt; (string key mapping to a list of string values).
* @property {genomics(v1).Position} nextMatePosition The mapping of the primary alignment of the
`(readNumber+1)%numberReads` read in the fragment. It replaces
mate position and mate strand in SAM.
* @property {integer} numberReads The number of reads in the fragment (extension to SAM flag 0x1).
* @property {boolean} properPlacement The orientation and the distance between reads from the fragment are
consistent with the sequencing protocol (SAM flag 0x2).
* @property {string} readGroupId The ID of the read group this read belongs to. A read belongs to exactly
one read group. This is a server-generated ID which is distinct from SAM&#39;s
RG tag (for that value, see
ReadGroup.name).
* @property {string} readGroupSetId The ID of the read group set this read belongs to. A read belongs to
exactly one read group set.
* @property {integer} readNumber The read number in sequencing. 0-based and less than numberReads. This
field replaces SAM flag 0x40 and 0x80.
* @property {boolean} secondaryAlignment Whether this alignment is secondary. Equivalent to SAM flag 0x100.
A secondary alignment represents an alternative to the primary alignment
for this read. Aligners may return secondary alignments if a read can map
ambiguously to multiple coordinates in the genome. By convention, each read
has one and only one alignment where both `secondaryAlignment`
and `supplementaryAlignment` are false.
* @property {boolean} supplementaryAlignment Whether this alignment is supplementary. Equivalent to SAM flag 0x800.
Supplementary alignments are used in the representation of a chimeric
alignment. In a chimeric alignment, a read is split into multiple
linear alignments that map to different reference contigs. The first
linear alignment in the read will be designated as the representative
alignment; the remaining linear alignments will be designated as
supplementary alignments. These alignments may have different mapping
quality scores. In each linear alignment in a chimeric alignment, the read
will be hard clipped. The `alignedSequence` and
`alignedQuality` fields in the alignment record will only
represent the bases for its respective linear alignment.
*/

/**
 * @typedef ReadGroup
 * @memberOf! genomics(v1)
 * @type object
* @property {string} datasetId The dataset to which this read group belongs.
* @property {string} description A free-form text description of this read group.
* @property {genomics(v1).Experiment} experiment The experiment used to generate this read group.
* @property {string} id The server-generated read group ID, unique for all read groups.
Note: This is different than the @RG ID field in the SAM spec. For that
value, see name.
* @property {object} info A map of additional read group information. This must be of the form
map&lt;string, string[]&gt; (string key mapping to a list of string values).
* @property {string} name The read group name. This corresponds to the @RG ID field in the SAM spec.
* @property {integer} predictedInsertSize The predicted insert size of this read group. The insert size is the length
the sequenced DNA fragment from end-to-end, not including the adapters.
* @property {genomics(v1).Program[]} programs The programs used to generate this read group. Programs are always
identical for all read groups within a read group set. For this reason,
only the first read group in a returned set will have this field
populated.
* @property {string} referenceSetId The reference set the reads in this read group are aligned to.
* @property {string} sampleId A client-supplied sample identifier for the reads in this read group.
*/

/**
 * @typedef ReadGroupSet
 * @memberOf! genomics(v1)
 * @type object
* @property {string} datasetId The dataset to which this read group set belongs.
* @property {string} filename The filename of the original source file for this read group set, if any.
* @property {string} id The server-generated read group set ID, unique for all read group sets.
* @property {object} info A map of additional read group set information.
* @property {string} name The read group set name. By default this will be initialized to the sample
name of the sequenced data contained in this set.
* @property {genomics(v1).ReadGroup[]} readGroups The read groups in this set. There are typically 1-10 read groups in a read
group set.
* @property {string} referenceSetId The reference set to which the reads in this read group set are aligned.
*/

/**
 * @typedef Reference
 * @memberOf! genomics(v1)
 * @type object
* @property {string} id The server-generated reference ID, unique across all references.
* @property {string} length The length of this reference&#39;s sequence.
* @property {string} md5checksum MD5 of the upper-case sequence excluding all whitespace characters (this
is equivalent to SQ:M5 in SAM). This value is represented in lower case
hexadecimal format.
* @property {string} name The name of this reference, for example `22`.
* @property {integer} ncbiTaxonId ID from http://www.ncbi.nlm.nih.gov/taxonomy. For example, 9606 for human.
* @property {string[]} sourceAccessions All known corresponding accession IDs in INSDC (GenBank/ENA/DDBJ) ideally
with a version number, for example `GCF_000001405.26`.
* @property {string} sourceUri The URI from which the sequence was obtained. Typically specifies a FASTA
format file.
*/

/**
 * @typedef ReferenceBound
 * @memberOf! genomics(v1)
 * @type object
* @property {string} referenceName The name of the reference associated with this reference bound.
* @property {string} upperBound An upper bound (inclusive) on the starting coordinate of any
variant in the reference sequence.
*/

/**
 * @typedef ReferenceSet
 * @memberOf! genomics(v1)
 * @type object
* @property {string} assemblyId Public id of this reference set, such as `GRCh37`.
* @property {string} description Free text description of this reference set.
* @property {string} id The server-generated reference set ID, unique across all reference sets.
* @property {string} md5checksum Order-independent MD5 checksum which identifies this reference set. The
checksum is computed by sorting all lower case hexidecimal string
`reference.md5checksum` (for all reference in this set) in
ascending lexicographic order, concatenating, and taking the MD5 of that
value. The resulting value is represented in lower case hexadecimal format.
* @property {integer} ncbiTaxonId ID from http://www.ncbi.nlm.nih.gov/taxonomy (for example, 9606 for human)
indicating the species which this reference set is intended to model. Note
that contained references may specify a different `ncbiTaxonId`, as
assemblies may contain reference sequences which do not belong to the
modeled species, for example EBV in a human reference genome.
* @property {string[]} referenceIds The IDs of the reference objects that are part of this set.
`Reference.md5checksum` must be unique within this set.
* @property {string[]} sourceAccessions All known corresponding accession IDs in INSDC (GenBank/ENA/DDBJ) ideally
with a version number, for example `NC_000001.11`.
* @property {string} sourceUri The URI from which the references were obtained.
*/

/**
 * @typedef RuntimeMetadata
 * @memberOf! genomics(v1)
 * @type object
 * @property {genomics(v1).ComputeEngine} computeEngine Execution information specific to Google Compute Engine.
 */

/**
 * @typedef SearchAnnotationSetsRequest
 * @memberOf! genomics(v1)
 * @type object
* @property {string[]} datasetIds Required. The dataset IDs to search within. Caller must have `READ` access
to these datasets.
* @property {string} name Only return annotations sets for which a substring of the name matches this
string (case insensitive).
* @property {integer} pageSize The maximum number of results to return in a single page. If unspecified,
defaults to 128. The maximum value is 1024.
* @property {string} pageToken The continuation token, which is used to page through large result sets.
To get the next page of results, set this parameter to the value of
`nextPageToken` from the previous response.
* @property {string} referenceSetId If specified, only annotation sets associated with the given reference set
are returned.
* @property {string[]} types If specified, only annotation sets that have any of these types are
returned.
*/

/**
 * @typedef SearchAnnotationSetsResponse
 * @memberOf! genomics(v1)
 * @type object
* @property {genomics(v1).AnnotationSet[]} annotationSets The matching annotation sets.
* @property {string} nextPageToken The continuation token, which is used to page through large result sets.
Provide this value in a subsequent request to return the next page of
results. This field will be empty if there aren&#39;t any additional results.
*/

/**
 * @typedef SearchAnnotationsRequest
 * @memberOf! genomics(v1)
 * @type object
* @property {string[]} annotationSetIds Required. The annotation sets to search within. The caller must have
`READ` access to these annotation sets.
All queried annotation sets must have the same type.
* @property {string} end The end position of the range on the reference, 0-based exclusive. If
referenceId or
referenceName
must be specified, Defaults to the length of the reference.
* @property {integer} pageSize The maximum number of results to return in a single page. If unspecified,
defaults to 256. The maximum value is 2048.
* @property {string} pageToken The continuation token, which is used to page through large result sets.
To get the next page of results, set this parameter to the value of
`nextPageToken` from the previous response.
* @property {string} referenceId The ID of the reference to query.
* @property {string} referenceName The name of the reference to query, within the reference set associated
with this query.
* @property {string} start The start position of the range on the reference, 0-based inclusive. If
specified,
referenceId or
referenceName
must be specified. Defaults to 0.
*/

/**
 * @typedef SearchAnnotationsResponse
 * @memberOf! genomics(v1)
 * @type object
* @property {genomics(v1).Annotation[]} annotations The matching annotations.
* @property {string} nextPageToken The continuation token, which is used to page through large result sets.
Provide this value in a subsequent request to return the next page of
results. This field will be empty if there aren&#39;t any additional results.
*/

/**
 * @typedef SearchCallSetsRequest
 * @memberOf! genomics(v1)
 * @type object
* @property {string} name Only return call sets for which a substring of the name matches this
string.
* @property {integer} pageSize The maximum number of results to return in a single page. If unspecified,
defaults to 1024.
* @property {string} pageToken The continuation token, which is used to page through large result sets.
To get the next page of results, set this parameter to the value of
`nextPageToken` from the previous response.
* @property {string[]} variantSetIds Restrict the query to call sets within the given variant sets. At least one
ID must be provided.
*/

/**
 * @typedef SearchCallSetsResponse
 * @memberOf! genomics(v1)
 * @type object
* @property {genomics(v1).CallSet[]} callSets The list of matching call sets.
* @property {string} nextPageToken The continuation token, which is used to page through large result sets.
Provide this value in a subsequent request to return the next page of
results. This field will be empty if there aren&#39;t any additional results.
*/

/**
 * @typedef SearchReadGroupSetsRequest
 * @memberOf! genomics(v1)
 * @type object
* @property {string[]} datasetIds Restricts this query to read group sets within the given datasets. At least
one ID must be provided.
* @property {string} name Only return read group sets for which a substring of the name matches this
string.
* @property {integer} pageSize The maximum number of results to return in a single page. If unspecified,
defaults to 256. The maximum value is 1024.
* @property {string} pageToken The continuation token, which is used to page through large result sets.
To get the next page of results, set this parameter to the value of
`nextPageToken` from the previous response.
*/

/**
 * @typedef SearchReadGroupSetsResponse
 * @memberOf! genomics(v1)
 * @type object
* @property {string} nextPageToken The continuation token, which is used to page through large result sets.
Provide this value in a subsequent request to return the next page of
results. This field will be empty if there aren&#39;t any additional results.
* @property {genomics(v1).ReadGroupSet[]} readGroupSets The list of matching read group sets.
*/

/**
 * @typedef SearchReadsRequest
 * @memberOf! genomics(v1)
 * @type object
* @property {string} end The end position of the range on the reference, 0-based exclusive. If
specified, `referenceName` must also be specified.
* @property {integer} pageSize The maximum number of results to return in a single page. If unspecified,
defaults to 256. The maximum value is 2048.
* @property {string} pageToken The continuation token, which is used to page through large result sets.
To get the next page of results, set this parameter to the value of
`nextPageToken` from the previous response.
* @property {string[]} readGroupIds The IDs of the read groups within which to search for reads. All specified
read groups must belong to the same read group sets. Must specify one of
`readGroupSetIds` or `readGroupIds`.
* @property {string[]} readGroupSetIds The IDs of the read groups sets within which to search for reads. All
specified read group sets must be aligned against a common set of reference
sequences; this defines the genomic coordinates for the query. Must specify
one of `readGroupSetIds` or `readGroupIds`.
* @property {string} referenceName The reference sequence name, for example `chr1`, `1`, or `chrX`. If set to
`*`, only unmapped reads are returned. If unspecified, all reads (mapped
and unmapped) are returned.
* @property {string} start The start position of the range on the reference, 0-based inclusive. If
specified, `referenceName` must also be specified.
*/

/**
 * @typedef SearchReadsResponse
 * @memberOf! genomics(v1)
 * @type object
* @property {genomics(v1).Read[]} alignments The list of matching alignments sorted by mapped genomic coordinate,
if any, ascending in position within the same reference. Unmapped reads,
which have no position, are returned contiguously and are sorted in
ascending lexicographic order by fragment name.
* @property {string} nextPageToken The continuation token, which is used to page through large result sets.
Provide this value in a subsequent request to return the next page of
results. This field will be empty if there aren&#39;t any additional results.
*/

/**
 * @typedef SearchReferenceSetsRequest
 * @memberOf! genomics(v1)
 * @type object
* @property {string[]} accessions If present, return reference sets for which a prefix of any of
sourceAccessions
match any of these strings. Accession numbers typically have a main number
and a version, for example `NC_000001.11`.
* @property {string} assemblyId If present, return reference sets for which a substring of their
`assemblyId` matches this string (case insensitive).
* @property {string[]} md5checksums If present, return reference sets for which the
md5checksum matches exactly.
* @property {integer} pageSize The maximum number of results to return in a single page. If unspecified,
defaults to 1024. The maximum value is 4096.
* @property {string} pageToken The continuation token, which is used to page through large result sets.
To get the next page of results, set this parameter to the value of
`nextPageToken` from the previous response.
*/

/**
 * @typedef SearchReferenceSetsResponse
 * @memberOf! genomics(v1)
 * @type object
* @property {string} nextPageToken The continuation token, which is used to page through large result sets.
Provide this value in a subsequent request to return the next page of
results. This field will be empty if there aren&#39;t any additional results.
* @property {genomics(v1).ReferenceSet[]} referenceSets The matching references sets.
*/

/**
 * @typedef SearchReferencesRequest
 * @memberOf! genomics(v1)
 * @type object
* @property {string[]} accessions If present, return references for which a prefix of any of
sourceAccessions match
any of these strings. Accession numbers typically have a main number and a
version, for example `GCF_000001405.26`.
* @property {string[]} md5checksums If present, return references for which the
md5checksum matches exactly.
* @property {integer} pageSize The maximum number of results to return in a single page. If unspecified,
defaults to 1024. The maximum value is 4096.
* @property {string} pageToken The continuation token, which is used to page through large result sets.
To get the next page of results, set this parameter to the value of
`nextPageToken` from the previous response.
* @property {string} referenceSetId If present, return only references which belong to this reference set.
*/

/**
 * @typedef SearchReferencesResponse
 * @memberOf! genomics(v1)
 * @type object
* @property {string} nextPageToken The continuation token, which is used to page through large result sets.
Provide this value in a subsequent request to return the next page of
results. This field will be empty if there aren&#39;t any additional results.
* @property {genomics(v1).Reference[]} references The matching references.
*/

/**
 * @typedef SearchVariantSetsRequest
 * @memberOf! genomics(v1)
 * @type object
* @property {string[]} datasetIds Exactly one dataset ID must be provided here. Only variant sets which
belong to this dataset will be returned.
* @property {integer} pageSize The maximum number of results to return in a single page. If unspecified,
defaults to 1024.
* @property {string} pageToken The continuation token, which is used to page through large result sets.
To get the next page of results, set this parameter to the value of
`nextPageToken` from the previous response.
*/

/**
 * @typedef SearchVariantSetsResponse
 * @memberOf! genomics(v1)
 * @type object
* @property {string} nextPageToken The continuation token, which is used to page through large result sets.
Provide this value in a subsequent request to return the next page of
results. This field will be empty if there aren&#39;t any additional results.
* @property {genomics(v1).VariantSet[]} variantSets The variant sets belonging to the requested dataset.
*/

/**
 * @typedef SearchVariantsRequest
 * @memberOf! genomics(v1)
 * @type object
* @property {string[]} callSetIds Only return variant calls which belong to call sets with these ids.
Leaving this blank returns all variant calls. If a variant has no
calls belonging to any of these call sets, it won&#39;t be returned at all.
* @property {string} end The end of the window, 0-based exclusive. If unspecified or 0, defaults to
the length of the reference.
* @property {integer} maxCalls The maximum number of calls to return in a single page. Note that this
limit may be exceeded in the event that a matching variant contains more
calls than the requested maximum. If unspecified, defaults to 5000. The
maximum value is 10000.
* @property {integer} pageSize The maximum number of variants to return in a single page. If unspecified,
defaults to 5000. The maximum value is 10000.
* @property {string} pageToken The continuation token, which is used to page through large result sets.
To get the next page of results, set this parameter to the value of
`nextPageToken` from the previous response.
* @property {string} referenceName Required. Only return variants in this reference sequence.
* @property {string} start The beginning of the window (0-based, inclusive) for which
overlapping variants should be returned. If unspecified, defaults to 0.
* @property {string} variantName Only return variants which have exactly this name.
* @property {string[]} variantSetIds At most one variant set ID must be provided. Only variants from this
variant set will be returned. If omitted, a call set id must be included in
the request.
*/

/**
 * @typedef SearchVariantsResponse
 * @memberOf! genomics(v1)
 * @type object
* @property {string} nextPageToken The continuation token, which is used to page through large result sets.
Provide this value in a subsequent request to return the next page of
results. This field will be empty if there aren&#39;t any additional results.
* @property {genomics(v1).Variant[]} variants The list of matching Variants.
*/

/**
 * @typedef SetIamPolicyRequest
 * @memberOf! genomics(v1)
 * @type object
* @property {genomics(v1).Policy} policy REQUIRED: The complete policy to be applied to the `resource`. The size of
the policy is limited to a few 10s of KB. An empty policy is a
valid policy but certain Cloud Platform services (such as Projects)
might reject them.
*/

/**
 * @typedef Status
 * @memberOf! genomics(v1)
 * @type object
* @property {integer} code The status code, which should be an enum value of google.rpc.Code.
* @property {object[]} details A list of messages that carry the error details.  There is a common set of
message types for APIs to use.
* @property {string} message A developer-facing error message, which should be in English. Any
user-facing error message should be localized and sent in the
google.rpc.Status.details field, or localized by the client.
*/

/**
 * @typedef TestIamPermissionsRequest
 * @memberOf! genomics(v1)
 * @type object
* @property {string[]} permissions REQUIRED: The set of permissions to check for the &#39;resource&#39;.
Permissions with wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed.
Allowed permissions are&amp;#58;

* `genomics.datasets.create`
* `genomics.datasets.delete`
* `genomics.datasets.get`
* `genomics.datasets.list`
* `genomics.datasets.update`
* `genomics.datasets.getIamPolicy`
* `genomics.datasets.setIamPolicy`
*/

/**
 * @typedef TestIamPermissionsResponse
 * @memberOf! genomics(v1)
 * @type object
* @property {string[]} permissions A subset of `TestPermissionsRequest.permissions` that the caller is
allowed.
*/

/**
 * @typedef Transcript
 * @memberOf! genomics(v1)
 * @type object
* @property {genomics(v1).CodingSequence} codingSequence The range of the coding sequence for this transcript, if any. To determine
the exact ranges of coding sequence, intersect this range with those of the
exons, if any. If there are any
exons, the
codingSequence must start
and end within them.

Note that in some cases, the reference genome will not exactly match the
observed mRNA transcript e.g. due to variance in the source genome from
reference. In these cases,
exon.frame will not necessarily
match the expected reference reading frame and coding exon reference bases
cannot necessarily be concatenated to produce the original transcript mRNA.
* @property {genomics(v1).Exon[]} exons The &lt;a href=&quot;http://en.wikipedia.org/wiki/Exon&quot;&gt;exons&lt;/a&gt; that compose
this transcript. This field should be unset for genomes where transcript
splicing does not occur, for example prokaryotes.

Introns are regions of the transcript that are not included in the
spliced RNA product. Though not explicitly modeled here, intron ranges can
be deduced; all regions of this transcript that are not exons are introns.

Exonic sequences do not necessarily code for a translational product
(amino acids). Only the regions of exons bounded by the
codingSequence correspond
to coding DNA sequence.

Exons are ordered by start position and may not overlap.
* @property {string} geneId The annotation ID of the gene from which this transcript is transcribed.
*/

/**
 * @typedef UndeleteDatasetRequest
 * @memberOf! genomics(v1)
 * @type object
 */

/**
 * @typedef Variant
 * @memberOf! genomics(v1)
 * @type object
* @property {string[]} alternateBases The bases that appear instead of the reference bases.
* @property {genomics(v1).VariantCall[]} calls The variant calls for this particular variant. Each one represents the
determination of genotype with respect to this variant.
* @property {string} created The date this variant was created, in milliseconds from the epoch.
* @property {string} end The end position (0-based) of this variant. This corresponds to the first
base after the last base in the reference allele. So, the length of
the reference allele is (end - start). This is useful for variants
that don&#39;t explicitly give alternate bases, for example large deletions.
* @property {string[]} filter A list of filters (normally quality filters) this variant has failed.
`PASS` indicates this variant has passed all filters.
* @property {string} id The server-generated variant ID, unique across all variants.
* @property {object} info A map of additional variant information. This must be of the form
map&lt;string, string[]&gt; (string key mapping to a list of string values).
* @property {string[]} names Names for the variant, for example a RefSNP ID.
* @property {number} quality A measure of how likely this variant is to be real.
A higher value is better.
* @property {string} referenceBases The reference bases for this variant. They start at the given
position.
* @property {string} referenceName The reference on which this variant occurs.
(such as `chr20` or `X`)
* @property {string} start The position at which this variant occurs (0-based).
This corresponds to the first base of the string of reference bases.
* @property {string} variantSetId The ID of the variant set this variant belongs to.
*/

/**
 * @typedef VariantAnnotation
 * @memberOf! genomics(v1)
 * @type object
* @property {string} alternateBases The alternate allele for this variant. If multiple alternate alleles
exist at this location, create a separate variant for each one, as they
may represent distinct conditions.
* @property {string} clinicalSignificance Describes the clinical significance of a variant.
It is adapted from the ClinVar controlled vocabulary for clinical
significance described at:
http://www.ncbi.nlm.nih.gov/clinvar/docs/clinsig/
* @property {genomics(v1).ClinicalCondition[]} conditions The set of conditions associated with this variant.
A condition describes the way a variant influences human health.
* @property {string} effect Effect of the variant on the coding sequence.
* @property {string} geneId Google annotation ID of the gene affected by this variant. This should
be provided when the variant is created.
* @property {string[]} transcriptIds Google annotation IDs of the transcripts affected by this variant. These
should be provided when the variant is created.
* @property {string} type Type has been adapted from ClinVar&#39;s list of variant types.
*/

/**
 * @typedef VariantCall
 * @memberOf! genomics(v1)
 * @type object
* @property {string} callSetId The ID of the call set this variant call belongs to.
* @property {string} callSetName The name of the call set this variant call belongs to.
* @property {integer[]} genotype The genotype of this variant call. Each value represents either the value
of the `referenceBases` field or a 1-based index into
`alternateBases`. If a variant had a `referenceBases`
value of `T` and an `alternateBases`
value of `[&quot;A&quot;, &quot;C&quot;]`, and the `genotype` was
`[2, 1]`, that would mean the call
represented the heterozygous value `CA` for this variant.
If the `genotype` was instead `[0, 1]`, the
represented value would be `TA`. Ordering of the
genotype values is important if the `phaseset` is present.
If a genotype is not called (that is, a `.` is present in the
GT string) -1 is returned.
* @property {number[]} genotypeLikelihood The genotype likelihoods for this variant call. Each array entry
represents how likely a specific genotype is for this call. The value
ordering is defined by the GL tag in the VCF spec.
If Phred-scaled genotype likelihood scores (PL) are available and
log10(P) genotype likelihood scores (GL) are not, PL scores are converted
to GL scores.  If both are available, PL scores are stored in `info`.
* @property {object} info A map of additional variant call information. This must be of the form
map&lt;string, string[]&gt; (string key mapping to a list of string values).
* @property {string} phaseset If this field is present, this variant call&#39;s genotype ordering implies
the phase of the bases and is consistent with any other variant calls in
the same reference sequence which have the same phaseset value.
When importing data from VCF, if the genotype data was phased but no
phase set was specified this field will be set to `*`.
*/

/**
 * @typedef VariantSet
 * @memberOf! genomics(v1)
 * @type object
* @property {string} datasetId The dataset to which this variant set belongs.
* @property {string} description A textual description of this variant set.
* @property {string} id The server-generated variant set ID, unique across all variant sets.
* @property {genomics(v1).VariantSetMetadata[]} metadata The metadata associated with this variant set.
* @property {string} name User-specified, mutable name.
* @property {genomics(v1).ReferenceBound[]} referenceBounds A list of all references used by the variants in a variant set
with associated coordinate upper bounds for each one.
* @property {string} referenceSetId The reference set to which the variant set is mapped. The reference set
describes the alignment provenance of the variant set, while the
`referenceBounds` describe the shape of the actual variant data. The
reference set&#39;s reference names are a superset of those found in the
`referenceBounds`.

For example, given a variant set that is mapped to the GRCh38 reference set
and contains a single variant on reference &#39;X&#39;, `referenceBounds` would
contain only an entry for &#39;X&#39;, while the associated reference set
enumerates all possible references: &#39;1&#39;, &#39;2&#39;, &#39;X&#39;, &#39;Y&#39;, &#39;MT&#39;, etc.
*/

/**
 * @typedef VariantSetMetadata
 * @memberOf! genomics(v1)
 * @type object
* @property {string} description A textual description of this metadata.
* @property {string} id User-provided ID field, not enforced by this API.
Two or more pieces of structured metadata with identical
id and key fields are considered equivalent.
* @property {object} info Remaining structured metadata key-value pairs. This must be of the form
map&lt;string, string[]&gt; (string key mapping to a list of string values).
* @property {string} key The top-level key.
* @property {string} number The number of values that can be included in a field described by this
metadata.
* @property {string} type The type of data. Possible types include: Integer, Float,
Flag, Character, and String.
* @property {string} value The value field for simple metadata
*/
export = Genomics;
