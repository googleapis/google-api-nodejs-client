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
 * Genomics API
 *
 * Provides access to Genomics data.
 *
 * @example
 * var google = require('googleapis');
 * var genomics = google.genomics('v1beta2');
 *
 * @namespace genomics
 * @type {Function}
 * @version v1beta2
 * @variation v1beta2
 * @param {object=} options Options for Genomics
 */
function Genomics(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.annotationSets = {

    /**
     * genomics.annotationSets.create
     *
     * @desc Creates a new annotation set. Caller must have WRITE permission for the associated dataset.  The following fields must be provided when creating an annotation set:   - datasetId  - referenceSetId   All other fields may be optionally specified, unless documented as being server-generated (for example, the id field).
     *
     * @alias genomics.annotationSets.create
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1beta2).AnnotationSet} params.resource Request body data
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
          url: 'https://www.googleapis.com/genomics/v1beta2/annotationSets',
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
     * genomics.annotationSets.delete
     *
     * @desc Deletes an annotation set. Caller must have WRITE permission for the associated annotation set.
     *
     * @alias genomics.annotationSets.delete
     * @memberOf! genomics(v1beta2)
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/annotationSets/{annotationSetId}',
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
     * genomics.annotationSets.get
     *
     * @desc Gets an annotation set. Caller must have READ permission for the associated dataset.
     *
     * @alias genomics.annotationSets.get
     * @memberOf! genomics(v1beta2)
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/annotationSets/{annotationSetId}',
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
     * genomics.annotationSets.patch
     *
     * @desc Updates an annotation set. The update must respect all mutability restrictions and other invariants described on the annotation set resource. Caller must have WRITE permission for the associated dataset. This method supports patch semantics.
     *
     * @alias genomics.annotationSets.patch
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.annotationSetId The ID of the annotation set to be updated.
     * @param {genomics(v1beta2).AnnotationSet} params.resource Request body data
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/annotationSets/{annotationSetId}',
          method: 'PATCH'
        }, options),
        params: params,
        requiredParams: ['annotationSetId'],
        pathParams: ['annotationSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.annotationSets.search
     *
     * @desc Searches for annotation sets that match the given criteria. Annotation sets are returned in an unspecified order. This order is consistent, such that two queries for the same content (regardless of page size) yield annotation sets in the same order across their respective streams of paginated responses. Caller must have READ permission for the queried datasets.
     *
     * @alias genomics.annotationSets.search
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1beta2).SearchAnnotationSetsRequest} params.resource Request body data
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/annotationSets/search',
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
     * genomics.annotationSets.update
     *
     * @desc Updates an annotation set. The update must respect all mutability restrictions and other invariants described on the annotation set resource. Caller must have WRITE permission for the associated dataset.
     *
     * @alias genomics.annotationSets.update
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.annotationSetId The ID of the annotation set to be updated.
     * @param {genomics(v1beta2).AnnotationSet} params.resource Request body data
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
          url: 'https://www.googleapis.com/genomics/v1beta2/annotationSets/{annotationSetId}',
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

  self.annotations = {

    /**
     * genomics.annotations.batchCreate
     *
     * @desc Creates one or more new annotations atomically. All annotations must belong to the same annotation set. Caller must have WRITE permission for this annotation set. For optimal performance, batch positionally adjacent annotations together.   If the request has a systemic issue, such as an attempt to write to an inaccessible annotation set, the entire RPC will fail accordingly. For lesser data issues, when possible an error will be isolated to the corresponding batch entry in the response; the remaining well formed annotations will be created normally.   For details on the requirements for each individual annotation resource, see annotations.create.
     *
     * @alias genomics.annotations.batchCreate
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1beta2).BatchCreateAnnotationsRequest} params.resource Request body data
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/annotations:batchCreate',
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
     * @desc Creates a new annotation. Caller must have WRITE permission for the associated annotation set.   The following fields must be provided when creating an annotation:   - annotationSetId  - position.referenceName or  position.referenceId  Transcripts  For annotations of type TRANSCRIPT, the following fields of annotation.transcript must be provided:   - exons.start  - exons.end   All other fields may be optionally specified, unless documented as being server-generated (for example, the id field). The annotated range must be no longer than 100Mbp (mega base pairs). See the annotation resource for additional restrictions on each field.
     *
     * @alias genomics.annotations.create
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1beta2).Annotation} params.resource Request body data
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
          url: 'https://www.googleapis.com/genomics/v1beta2/annotations',
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
     * @alias genomics.annotations.delete
     * @memberOf! genomics(v1beta2)
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/annotations/{annotationId}',
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
     * @alias genomics.annotations.get
     * @memberOf! genomics(v1beta2)
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/annotations/{annotationId}',
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
     * genomics.annotations.patch
     *
     * @desc Updates an annotation. The update must respect all mutability restrictions and other invariants described on the annotation resource. Caller must have WRITE permission for the associated dataset. This method supports patch semantics.
     *
     * @alias genomics.annotations.patch
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.annotationId The ID of the annotation to be updated.
     * @param {genomics(v1beta2).Annotation} params.resource Request body data
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/annotations/{annotationId}',
          method: 'PATCH'
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
     * @alias genomics.annotations.search
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1beta2).SearchAnnotationsRequest} params.resource Request body data
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/annotations/search',
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
     * @desc Updates an annotation. The update must respect all mutability restrictions and other invariants described on the annotation resource. Caller must have WRITE permission for the associated dataset.
     *
     * @alias genomics.annotations.update
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.annotationId The ID of the annotation to be updated.
     * @param {genomics(v1beta2).Annotation} params.resource Request body data
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
          url: 'https://www.googleapis.com/genomics/v1beta2/annotations/{annotationId}',
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

  self.callsets = {

    /**
     * genomics.callsets.create
     *
     * @desc Creates a new call set.
     *
     * @alias genomics.callsets.create
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1beta2).CallSet} params.resource Request body data
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
          url: 'https://www.googleapis.com/genomics/v1beta2/callsets',
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
     * @desc Deletes a call set.
     *
     * @alias genomics.callsets.delete
     * @memberOf! genomics(v1beta2)
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/callsets/{callSetId}',
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
     * @desc Gets a call set by ID.
     *
     * @alias genomics.callsets.get
     * @memberOf! genomics(v1beta2)
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/callsets/{callSetId}',
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
     * @desc Updates a call set. This method supports patch semantics.
     *
     * @alias genomics.callsets.patch
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.callSetId Required. The ID of the call set to be updated.
     * @param {genomics(v1beta2).CallSet} params.resource Request body data
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/callsets/{callSetId}',
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
     * @desc Gets a list of call sets matching the criteria.  Implements GlobalAllianceApi.searchCallSets.
     *
     * @alias genomics.callsets.search
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1beta2).SearchCallSetsRequest} params.resource Request body data
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/callsets/search',
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
     * genomics.callsets.update
     *
     * @desc Updates a call set.
     *
     * @alias genomics.callsets.update
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.callSetId Required. The ID of the call set to be updated.
     * @param {genomics(v1beta2).CallSet} params.resource Request body data
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
          url: 'https://www.googleapis.com/genomics/v1beta2/callsets/{callSetId}',
          method: 'PUT'
        }, options),
        params: params,
        requiredParams: ['callSetId'],
        pathParams: ['callSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.datasets = {

    /**
     * genomics.datasets.create
     *
     * @desc Creates a new dataset.
     *
     * @alias genomics.datasets.create
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1beta2).Dataset} params.resource Request body data
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
          url: 'https://www.googleapis.com/genomics/v1beta2/datasets',
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
     * @desc Deletes a dataset and all of its contents (all read group sets, reference sets, variant sets, call sets, annotation sets, etc.) This is reversible (up to one week after the deletion) via the UndeleteDataset operation.
     *
     * @alias genomics.datasets.delete
     * @memberOf! genomics(v1beta2)
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/datasets/{datasetId}',
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
     * @desc Gets a dataset by ID.
     *
     * @alias genomics.datasets.get
     * @memberOf! genomics(v1beta2)
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/datasets/{datasetId}',
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
     * genomics.datasets.list
     *
     * @desc Lists datasets within a project.
     *
     * @alias genomics.datasets.list
     * @memberOf! genomics(v1beta2)
     *
     * @param {object=} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of results to return in a single page. If unspecified, defaults to 50. The maximum value is 1024.
     * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
     * @param {string=} params.projectNumber Required. The project to list datasets for.
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
          url: 'https://www.googleapis.com/genomics/v1beta2/datasets',
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
     * @desc Updates a dataset. This method supports patch semantics.
     *
     * @alias genomics.datasets.patch
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId The ID of the dataset to be updated.
     * @param {genomics(v1beta2).Dataset} params.resource Request body data
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/datasets/{datasetId}',
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
     * genomics.datasets.undelete
     *
     * @desc Undeletes a dataset by restoring a dataset which was deleted via this API. This operation is only possible for a week after the deletion occurred.
     *
     * @alias genomics.datasets.undelete
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId The ID of the dataset to be undeleted.
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/datasets/{datasetId}/undelete',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['datasetId'],
        pathParams: ['datasetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.datasets.update
     *
     * @desc Updates a dataset.
     *
     * @alias genomics.datasets.update
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId The ID of the dataset to be updated.
     * @param {genomics(v1beta2).Dataset} params.resource Request body data
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
          url: 'https://www.googleapis.com/genomics/v1beta2/datasets/{datasetId}',
          method: 'PUT'
        }, options),
        params: params,
        requiredParams: ['datasetId'],
        pathParams: ['datasetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.experimental = {

    jobs: {

      /**
       * genomics.experimental.jobs.create
       *
       * @desc Creates and asynchronously runs an ad-hoc job. This is an experimental call and may be removed or changed at any time.
       *
       * @alias genomics.experimental.jobs.create
       * @memberOf! genomics(v1beta2)
       *
       * @param {object} params Parameters for request
       * @param {genomics(v1beta2).ExperimentalCreateJobRequest} params.resource Request body data
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
            url: 'https://www.googleapis.com/genomics/v1beta2/experimental/jobs/create',
            method: 'POST'
          }, options),
          params: params,
          requiredParams: [],
          pathParams: [],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  self.jobs = {

    /**
     * genomics.jobs.cancel
     *
     * @desc Cancels a job by ID. Note that it is possible for partial results to be generated and stored for cancelled jobs.
     *
     * @alias genomics.jobs.cancel
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.jobId Required. The ID of the job.
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/jobs/{jobId}/cancel',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['jobId'],
        pathParams: ['jobId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.jobs.get
     *
     * @desc Gets a job by ID.
     *
     * @alias genomics.jobs.get
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.jobId Required. The ID of the job.
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
          url: 'https://www.googleapis.com/genomics/v1beta2/jobs/{jobId}',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['jobId'],
        pathParams: ['jobId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.jobs.search
     *
     * @desc Gets a list of jobs matching the criteria.
     *
     * @alias genomics.jobs.search
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1beta2).SearchJobsRequest} params.resource Request body data
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/jobs/search',
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

  self.readgroupsets = {

    /**
     * genomics.readgroupsets.delete
     *
     * @desc Deletes a read group set.
     *
     * @alias genomics.readgroupsets.delete
     * @memberOf! genomics(v1beta2)
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/readgroupsets/{readGroupSetId}',
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
     * @desc Exports read group sets to a BAM file in Google Cloud Storage.  Note that currently there may be some differences between exported BAM files and the original BAM file at the time of import. See ImportReadGroupSets for details.
     *
     * @alias genomics.readgroupsets.export
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1beta2).ExportReadGroupSetsRequest} params.resource Request body data
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/readgroupsets/export',
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
     * genomics.readgroupsets.get
     *
     * @desc Gets a read group set by ID.
     *
     * @alias genomics.readgroupsets.get
     * @memberOf! genomics(v1beta2)
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/readgroupsets/{readGroupSetId}',
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
     * @desc Creates read group sets by asynchronously importing the provided information. The caller must have WRITE permissions to the dataset.  Notes on BAM import:   - Tags will be converted to strings - tag types are not preserved - Comments (@CO) in the input file header are not imported - Original order of reference headers is not preserved - Any reverse stranded unmapped reads will be reverse complemented, and their qualities (also the "BQ" and "OQ" tags, if any) will be reversed - Unmapped reads will be stripped of positional information (referenceName and position)
     *
     * @alias genomics.readgroupsets.import
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1beta2).ImportReadGroupSetsRequest} params.resource Request body data
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/readgroupsets/import',
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
     * @desc Updates a read group set. This method supports patch semantics.
     *
     * @alias genomics.readgroupsets.patch
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.readGroupSetId The ID of the read group set to be updated. The caller must have WRITE permissions to the dataset associated with this read group set.
     * @param {genomics(v1beta2).ReadGroupSet} params.resource Request body data
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/readgroupsets/{readGroupSetId}',
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
     * @desc Searches for read group sets matching the criteria.  Implements GlobalAllianceApi.searchReadGroupSets.
     *
     * @alias genomics.readgroupsets.search
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1beta2).SearchReadGroupSetsRequest} params.resource Request body data
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/readgroupsets/search',
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
     * genomics.readgroupsets.update
     *
     * @desc Updates a read group set.
     *
     * @alias genomics.readgroupsets.update
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.readGroupSetId The ID of the read group set to be updated. The caller must have WRITE permissions to the dataset associated with this read group set.
     * @param {genomics(v1beta2).ReadGroupSet} params.resource Request body data
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
          url: 'https://www.googleapis.com/genomics/v1beta2/readgroupsets/{readGroupSetId}',
          method: 'PUT'
        }, options),
        params: params,
        requiredParams: ['readGroupSetId'],
        pathParams: ['readGroupSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    coveragebuckets: {

      /**
       * genomics.readgroupsets.coveragebuckets.list
       *
       * @desc Lists fixed width coverage buckets for a read group set, each of which correspond to a range of a reference sequence. Each bucket summarizes coverage information across its corresponding genomic range.  Coverage is defined as the number of reads which are aligned to a given base in the reference sequence. Coverage buckets are available at several precomputed bucket widths, enabling retrieval of various coverage 'zoom levels'. The caller must have READ permissions for the target read group set.
       *
       * @alias genomics.readgroupsets.coveragebuckets.list
       * @memberOf! genomics(v1beta2)
       *
       * @param {object} params Parameters for request
       * @param {integer=} params.pageSize The maximum number of results to return in a single page. If unspecified, defaults to 1024. The maximum value is 2048.
       * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
       * @param {string=} params.range.end The end position of the range on the reference, 0-based exclusive. If specified, referenceName must also be specified.
       * @param {string=} params.range.referenceName The reference sequence name, for example chr1, 1, or chrX.
       * @param {string=} params.range.start The start position of the range on the reference, 0-based inclusive. If specified, referenceName must also be specified.
       * @param {string} params.readGroupSetId Required. The ID of the read group set over which coverage is requested.
       * @param {string=} params.targetBucketWidth The desired width of each reported coverage bucket in base pairs. This will be rounded down to the nearest precomputed bucket width; the value of which is returned as bucketWidth in the response. Defaults to infinity (each bucket spans an entire reference sequence) or the length of the target range, if specified. The smallest precomputed bucketWidth is currently 2048 base pairs; this is subject to change.
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
            url: 'https://www.googleapis.com/genomics/v1beta2/readgroupsets/{readGroupSetId}/coveragebuckets',
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
     * @desc Gets a list of reads for one or more read group sets. Reads search operates over a genomic coordinate space of reference sequence & position defined over the reference sequences to which the requested read group sets are aligned.  If a target positional range is specified, search returns all reads whose alignment to the reference genome overlap the range. A query which specifies only read group set IDs yields all reads in those read group sets, including unmapped reads.  All reads returned (including reads on subsequent pages) are ordered by genomic coordinate (by reference sequence, then position). Reads with equivalent genomic coordinates are returned in an unspecified order. This order is consistent, such that two queries for the same content (regardless of page size) yield reads in the same order across their respective streams of paginated responses.  Implements GlobalAllianceApi.searchReads.
     *
     * @alias genomics.reads.search
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1beta2).SearchReadsRequest} params.resource Request body data
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/reads/search',
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
     * @desc Gets a reference.  Implements GlobalAllianceApi.getReference.
     *
     * @alias genomics.references.get
     * @memberOf! genomics(v1beta2)
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/references/{referenceId}',
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
     * @desc Searches for references which match the given criteria.  Implements GlobalAllianceApi.searchReferences.
     *
     * @alias genomics.references.search
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1beta2).SearchReferencesRequest} params.resource Request body data
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/references/search',
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
       * @desc Lists the bases in a reference, optionally restricted to a range.  Implements GlobalAllianceApi.getReferenceBases.
       *
       * @alias genomics.references.bases.list
       * @memberOf! genomics(v1beta2)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.end The end position (0-based, exclusive) of this query. Defaults to the length of this reference.
       * @param {integer=} params.pageSize The maximum number of bases to return in a single page. If unspecified, defaults to 200Kbp (kilo base pairs). The maximum value is 10Mbp (mega base pairs).
       * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
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

        var parameters = {
          options: utils.extend({
            url: 'https://www.googleapis.com/genomics/v1beta2/references/{referenceId}/bases',
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
     * @desc Gets a reference set.  Implements GlobalAllianceApi.getReferenceSet.
     *
     * @alias genomics.referencesets.get
     * @memberOf! genomics(v1beta2)
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/referencesets/{referenceSetId}',
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
     * @desc Searches for reference sets which match the given criteria.  Implements GlobalAllianceApi.searchReferenceSets.
     *
     * @alias genomics.referencesets.search
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1beta2).SearchReferenceSetsRequest} params.resource Request body data
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/referencesets/search',
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
     * @desc Creates a new variant.
     *
     * @alias genomics.variants.create
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1beta2).Variant} params.resource Request body data
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
          url: 'https://www.googleapis.com/genomics/v1beta2/variants',
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
     * @desc Deletes a variant.
     *
     * @alias genomics.variants.delete
     * @memberOf! genomics(v1beta2)
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/variants/{variantId}',
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
     * @desc Gets a variant by ID.
     *
     * @alias genomics.variants.get
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.variantId Required.
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
          url: 'https://www.googleapis.com/genomics/v1beta2/variants/{variantId}',
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
     * genomics.variants.search
     *
     * @desc Gets a list of variants matching the criteria.  Implements GlobalAllianceApi.searchVariants.
     *
     * @alias genomics.variants.search
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1beta2).SearchVariantsRequest} params.resource Request body data
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/variants/search',
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
     * genomics.variants.update
     *
     * @desc Updates a variant's names and info fields. All other modifications are silently ignored. Returns the modified variant without its calls.
     *
     * @alias genomics.variants.update
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.variantId The ID of the variant to be updated.
     * @param {genomics(v1beta2).Variant} params.resource Request body data
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
          url: 'https://www.googleapis.com/genomics/v1beta2/variants/{variantId}',
          method: 'PUT'
        }, options),
        params: params,
        requiredParams: ['variantId'],
        pathParams: ['variantId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.variantsets = {

    /**
     * genomics.variantsets.create
     *
     * @desc Creates a new variant set (only necessary in v1).  The provided variant set must have a valid datasetId set - all other fields are optional. Note that the id field will be ignored, as this is assigned by the server.
     *
     * @alias genomics.variantsets.create
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1beta2).VariantSet} params.resource Request body data
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
          url: 'https://www.googleapis.com/genomics/v1beta2/variantsets',
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
     * @desc Deletes a variant set including all variants, call sets, and calls within. This is not reversible.
     *
     * @alias genomics.variantsets.delete
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.variantSetId The ID of the variant set to be deleted. Required.
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
          url: 'https://www.googleapis.com/genomics/v1beta2/variantsets/{variantSetId}',
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
     * @desc Exports variant set data to an external destination.
     *
     * @alias genomics.variantsets.export
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.variantSetId The ID of the variant set that contains variant data which should be exported. Required. The caller must have READ access to this variant set.
     * @param {genomics(v1beta2).ExportVariantSetRequest} params.resource Request body data
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/variantsets/{variantSetId}/export',
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
     * @desc Gets a variant set by ID.
     *
     * @alias genomics.variantsets.get
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.variantSetId The ID of the variant set. Required.
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
          url: 'https://www.googleapis.com/genomics/v1beta2/variantsets/{variantSetId}',
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
     * genomics.variantsets.importVariants
     *
     * @desc Creates variant data by asynchronously importing the provided information.  The variants for import will be merged with any existing data and each other according to the behavior of mergeVariants. In particular, this means for merged VCF variants that have conflicting info fields, some data will be arbitrarily discarded unless otherwise specified in the InfoMergeConfig field of ImportVariantsRequest. As a special case, for single-sample VCF files, QUAL and FILTER fields will be moved to the call level; these are sometimes interpreted in a call-specific context. Imported VCF headers are appended to the metadata already in a variant set.
     *
     * @alias genomics.variantsets.importVariants
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.variantSetId Required. The variant set to which variant data should be imported.
     * @param {genomics(v1beta2).ImportVariantsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    importVariants: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/variantsets/{variantSetId}/importVariants',
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
     * genomics.variantsets.mergeVariants
     *
     * @desc Merges the given variants with existing variants. Each variant will be merged with an existing variant that matches its reference sequence, start, end, reference bases, and alternative bases. If no such variant exists, a new one will be created.  When variants are merged, the call information from the new variant is added to the existing variant. Variant info fields are merged as specified in the InfoMergeConfig field of the MergeVariantsRequest.
     *
     * @alias genomics.variantsets.mergeVariants
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.variantSetId The destination variant set.
     * @param {genomics(v1beta2).MergeVariantsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    mergeVariants: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/variantsets/{variantSetId}/mergeVariants',
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
     * genomics.variantsets.patch
     *
     * @desc Updates a variant set's metadata. All other modifications are silently ignored. This method supports patch semantics.
     *
     * @alias genomics.variantsets.patch
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.variantSetId The ID of the variant set to be updated (must already exist).
     * @param {genomics(v1beta2).VariantSet} params.resource Request body data
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/variantsets/{variantSetId}',
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
     * @desc Returns a list of all variant sets matching search criteria.  Implements GlobalAllianceApi.searchVariantSets.
     *
     * @alias genomics.variantsets.search
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v1beta2).SearchVariantSetsRequest} params.resource Request body data
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

      var parameters = {
        options: utils.extend({
          url: 'https://www.googleapis.com/genomics/v1beta2/variantsets/search',
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
     * genomics.variantsets.update
     *
     * @desc Updates a variant set's metadata. All other modifications are silently ignored.
     *
     * @alias genomics.variantsets.update
     * @memberOf! genomics(v1beta2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.variantSetId The ID of the variant set to be updated (must already exist).
     * @param {genomics(v1beta2).VariantSet} params.resource Request body data
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
          url: 'https://www.googleapis.com/genomics/v1beta2/variantsets/{variantSetId}',
          method: 'PUT'
        }, options),
        params: params,
        requiredParams: ['variantSetId'],
        pathParams: ['variantSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * @typedef Annotation
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} annotationSetId The annotation set to which this annotation belongs.
 * @property {string} id The server-generated annotation ID, unique across all annotations.
 * @property {object} info A string which maps to an array of values.
 * @property {string} name The display name of this annotation.
 * @property {genomics(v1beta2).RangePosition} position The position of this annotation on the reference sequence.
 * @property {genomics(v1beta2).Transcript} transcript A transcript value represents the assertion that a particular region of the reference genome may be transcribed as RNA. An alternative splicing pattern would be represented as a separate transcript object. This field is only set for annotations of type TRANSCRIPT.
 * @property {string} type The data type for this annotation. Must match the containing annotation set&#39;s type.
 * @property {genomics(v1beta2).VariantAnnotation} variant A variant annotation, which describes the effect of a variant on the genome, the coding sequence, and/or higher level consequences at the organism level e.g. pathogenicity. This field is only set for annotations of type VARIANT.
 */
/**
 * @typedef AnnotationSet
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} datasetId The dataset to which this annotation set belongs.
 * @property {string} id The server-generated annotation set ID, unique across all annotation sets.
 * @property {object} info A string which maps to an array of values.
 * @property {string} name The display name for this annotation set.
 * @property {string} referenceSetId The ID of the reference set that defines the coordinate space for this set&#39;s annotations.
 * @property {string} sourceUri The source URI describing the file from which this annotation set was generated, if any.
 * @property {string} type The type of annotations contained within this set.
 */
/**
 * @typedef BatchAnnotationsResponse
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {genomics(v1beta2).BatchAnnotationsResponseEntry[]} entries The resulting per-annotation entries, ordered consistently with the original request.
 */
/**
 * @typedef BatchAnnotationsResponseEntry
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {genomics(v1beta2).Annotation} annotation The annotation, if any.
 * @property {genomics(v1beta2).BatchAnnotationsResponseEntryStatus} status The resulting status for this annotation operation.
 */
/**
 * @typedef BatchAnnotationsResponseEntryStatus
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {integer} code The HTTP status code for this operation.
 * @property {string} message Error message for this status, if any.
 */
/**
 * @typedef BatchCreateAnnotationsRequest
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {genomics(v1beta2).Annotation[]} annotations The annotations to be created. At most 4096 can be specified in a single request.
 */
/**
 * @typedef Call
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} callSetId The ID of the call set this variant call belongs to.
 * @property {string} callSetName The name of the call set this variant call belongs to.
 * @property {integer[]} genotype The genotype of this variant call. Each value represents either the value of the referenceBases field or a 1-based index into alternateBases. If a variant had a referenceBases value of T and an alternateBases value of [&quot;A&quot;, &quot;C&quot;], and the genotype was [2, 1], that would mean the call represented the heterozygous value CA for this variant. If the genotype was instead [0, 1], the represented value would be TA. Ordering of the genotype values is important if the phaseset is present. If a genotype is not called (that is, a . is present in the GT string) -1 is returned.
 * @property {number[]} genotypeLikelihood The genotype likelihoods for this variant call. Each array entry represents how likely a specific genotype is for this call. The value ordering is defined by the GL tag in the VCF spec. If Phred-scaled genotype likelihood scores (PL) are available and log10(P) genotype likelihood scores (GL) are not, PL scores are converted to GL scores. If both are available, PL scores are stored in info.
 * @property {object} info A string which maps to an array of values.
 * @property {string} phaseset If this field is present, this variant call&#39;s genotype ordering implies the phase of the bases and is consistent with any other variant calls in the same reference sequence which have the same phaseset value. When importing data from VCF, if the genotype data was phased but no phase set was specified this field will be set to *.
 */
/**
 * @typedef CallSet
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} created The date this call set was created in milliseconds from the epoch.
 * @property {string} id The Google generated ID of the call set, immutable.
 * @property {object} info A string which maps to an array of values.
 * @property {string} name The call set name.
 * @property {string} sampleId The sample ID this call set corresponds to.
 * @property {string[]} variantSetIds The IDs of the variant sets this call set belongs to.
 */
/**
 * @typedef CigarUnit
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} operation 
 * @property {string} operationLength The number of bases that the operation runs for. Required.
 * @property {string} referenceSequence referenceSequence is only used at mismatches (SEQUENCE_MISMATCH) and deletions (DELETE). Filling this field replaces SAM&#39;s MD tag. If the relevant information is not available, this field is unset.
 */
/**
 * @typedef CoverageBucket
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {number} meanCoverage The average number of reads which are aligned to each individual reference base in this bucket.
 * @property {genomics(v1beta2).Range} range The genomic coordinate range spanned by this bucket.
 */
/**
 * @typedef Dataset
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} createTime The time this dataset was created, in seconds from the epoch.
 * @property {string} id The Google generated ID of the dataset, immutable.
 * @property {boolean} isPublic Flag indicating whether or not a dataset is publicly viewable. If a dataset is not public, it inherits viewing permissions from its project.
 * @property {string} name The dataset name.
 * @property {string} projectNumber The Google Developers Console project number that this dataset belongs to.
 */
/**
 * @typedef ExperimentalCreateJobRequest
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {boolean} align Specifies whether or not to run the alignment pipeline. Either align or callVariants must be set.
 * @property {boolean} callVariants Specifies whether or not to run the variant calling pipeline. Either align or callVariants must be set.
 * @property {string} gcsOutputPath Specifies where to copy the results of certain pipelines. This should be in the form of gs://bucket/path.
 * @property {string[]} pairedSourceUris A list of Google Cloud Storage URIs of paired end .fastq files to operate upon. If specified, this represents the second file of each paired .fastq file. The first file of each pair should be specified in sourceUris.
 * @property {string} projectNumber Required. The Google Cloud Project ID with which to associate the request.
 * @property {string[]} sourceUris A list of Google Cloud Storage URIs of data files to operate upon. These can be .bam, interleaved .fastq, or paired .fastq. If specifying paired .fastq files, the first of each pair of files should be listed here, and the second of each pair should be listed in pairedSourceUris.
 */
/**
 * @typedef ExperimentalCreateJobResponse
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} jobId A job ID that can be used to get status information.
 */
/**
 * @typedef ExportReadGroupSetsRequest
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} exportUri Required. A Google Cloud Storage URI for the exported BAM file. The currently authenticated user must have write access to the new file. An error will be returned if the URI already contains data.
 * @property {string} projectNumber Required. The Google Developers Console project number that owns this export. The caller must have WRITE access to this project.
 * @property {string[]} readGroupSetIds Required. The IDs of the read group sets to export. The caller must have READ access to these read group sets.
 * @property {string[]} referenceNames The reference names to export. If this is not specified, all reference sequences, including unmapped reads, are exported. Use * to export only unmapped reads.
 */
/**
 * @typedef ExportReadGroupSetsResponse
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} jobId A job ID that can be used to get status information.
 */
/**
 * @typedef ExportVariantSetRequest
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} bigqueryDataset Required. The BigQuery dataset to export data to. This dataset must already exist. Note that this is distinct from the Genomics concept of &quot;dataset&quot;.
 * @property {string} bigqueryTable Required. The BigQuery table to export data to. If the table doesn&#39;t exist, it will be created. If it already exists, it will be overwritten.
 * @property {string[]} callSetIds If provided, only variant call information from the specified call sets will be exported. By default all variant calls are exported.
 * @property {string} format The format for the exported data.
 * @property {string} projectNumber Required. The Google Cloud project number that owns the destination BigQuery dataset. The caller must have WRITE access to this project. This project will also own the resulting export job.
 */
/**
 * @typedef ExportVariantSetResponse
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} jobId A job ID that can be used to get status information.
 */
/**
 * @typedef ExternalId
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} id The id used by the source of this data.
 * @property {string} sourceName The name of the source of this data.
 */
/**
 * @typedef ImportReadGroupSetsRequest
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} datasetId Required. The ID of the dataset these read group sets will belong to. The caller must have WRITE permissions to this dataset.
 * @property {string} partitionStrategy The partition strategy describes how read groups are partitioned into read group sets.
 * @property {string} referenceSetId The reference set to which the imported read group sets are aligned to, if any. The reference names of this reference set must be a superset of those found in the imported file headers. If no reference set id is provided, a best effort is made to associate with a matching reference set.
 * @property {string[]} sourceUris A list of URIs pointing at BAM files in Google Cloud Storage.
 */
/**
 * @typedef ImportReadGroupSetsResponse
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} jobId A job ID that can be used to get status information.
 */
/**
 * @typedef ImportVariantsRequest
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} format The format of the variant data being imported. If unspecified, defaults to &quot;VCF&quot;.
 * @property {boolean} normalizeReferenceNames Convert reference names to the canonical representation. hg19 haploytypes (those reference names containing &quot;_hap&quot;) are not modified in any way. All other reference names are modified according to the following rules: The reference name is capitalized. The &quot;chr&quot; prefix is dropped for all autosomes and sex chromsomes. For example &quot;chr17&quot; becomes &quot;17&quot; and &quot;chrX&quot; becomes &quot;X&quot;. All mitochondrial chromosomes (&quot;chrM&quot;, &quot;chrMT&quot;, etc) become &quot;MT&quot;.
 * @property {string[]} sourceUris A list of URIs referencing variant files in Google Cloud Storage. URIs can include wildcards as described here. Note that recursive wildcards (&#39;**&#39;) are not supported.
 */
/**
 * @typedef ImportVariantsResponse
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} jobId A job ID that can be used to get status information.
 */
/**
 * @typedef Int32Value
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {integer} value The int32 value.
 */
/**
 * @typedef Job
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} created The date this job was created, in milliseconds from the epoch.
 * @property {string} detailedStatus A more detailed description of this job&#39;s current status.
 * @property {string[]} errors Any errors that occurred during processing.
 * @property {string} id The job ID.
 * @property {string[]} importedIds If this Job represents an import, this field will contain the IDs of the objects that were successfully imported.
 * @property {string} projectNumber The Google Developers Console project number to which this job belongs.
 * @property {genomics(v1beta2).JobRequest} request A summarized representation of the original service request.
 * @property {string} status The status of this job.
 * @property {string[]} warnings Any warnings that occurred during processing.
 */
/**
 * @typedef JobRequest
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string[]} destination The data destination of the request, for example, a Google BigQuery Table or Dataset ID.
 * @property {string[]} source The data source of the request, for example, a Google Cloud Storage object path or Readset ID.
 * @property {string} type The original request type.
 */
/**
 * @typedef KeyValue
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} key A string which maps to an array of values.
 * @property {string[]} value The string values.
 */
/**
 * @typedef LinearAlignment
 * @memberOf! genomics(v1beta2)
 * @type object
* @property {genomics(v1beta2).CigarUnit[]} cigar Represents the local alignment of this sequence (alignment matches, indels, etc) against the reference.
* @property {integer} mappingQuality The mapping quality of this alignment. Represents how likely the read maps to this position as opposed to other locations.

Specifically, this is -10 log10 Pr(mapping position is wrong), rounded to the nearest integer.
* @property {genomics(v1beta2).Position} position The position of this alignment.
*/
/**
 * @typedef ListBasesResponse
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} nextPageToken The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren&#39;t any additional results.
 * @property {string} offset The offset position (0-based) of the given sequence from the start of this Reference. This value will differ for each page in a paginated request.
 * @property {string} sequence A substring of the bases that make up this reference.
 */
/**
 * @typedef ListCoverageBucketsResponse
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} bucketWidth The length of each coverage bucket in base pairs. Note that buckets at the end of a reference sequence may be shorter. This value is omitted if the bucket width is infinity (the default behaviour, with no range or targetBucketWidth).
 * @property {genomics(v1beta2).CoverageBucket[]} coverageBuckets The coverage buckets. The list of buckets is sparse; a bucket with 0 overlapping reads is not returned. A bucket never crosses more than one reference sequence. Each bucket has width bucketWidth, unless its end is the end of the reference sequence.
 * @property {string} nextPageToken The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren&#39;t any additional results.
 */
/**
 * @typedef ListDatasetsResponse
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {genomics(v1beta2).Dataset[]} datasets The list of matching Datasets.
 * @property {string} nextPageToken The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren&#39;t any additional results.
 */
/**
 * @typedef MergeVariantsRequest
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {genomics(v1beta2).Variant[]} variants The variants to be merged with existing variants.
 */
/**
 * @typedef Metadata
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} description A textual description of this metadata.
 * @property {string} id User-provided ID field, not enforced by this API. Two or more pieces of structured metadata with identical id and key fields are considered equivalent.
 * @property {object} info A string which maps to an array of values.
 * @property {string} key The top-level key.
 * @property {string} number The number of values that can be included in a field described by this metadata.
 * @property {string} type The type of data. Possible types include: Integer, Float, Flag, Character, and String.
 * @property {string} value The value field for simple metadata
 */
/**
 * @typedef Position
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} position The 0-based offset from the start of the forward strand for that reference.
 * @property {string} referenceName The name of the reference in whatever reference set is being used.
 * @property {boolean} reverseStrand Whether this position is on the reverse strand, as opposed to the forward strand.
 */
/**
 * @typedef QueryRange
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} end The end position of the range on the reference, 0-based exclusive. If specified, referenceId or referenceName must also be specified. If unset or 0, defaults to the length of the reference.
 * @property {string} referenceId The ID of the reference to query.
 * @property {string} referenceName The name of the reference to query, within the reference set associated with this query.
 * @property {string} start The start position of the range on the reference, 0-based inclusive. If specified, referenceId or referenceName must also be specified. Defaults to 0.
 */
/**
 * @typedef Range
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} end The end position of the range on the reference, 0-based exclusive. If specified, referenceName must also be specified.
 * @property {string} referenceName The reference sequence name, for example chr1, 1, or chrX.
 * @property {string} start The start position of the range on the reference, 0-based inclusive. If specified, referenceName must also be specified.
 */
/**
 * @typedef RangePosition
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} end The end position of the range on the reference, 0-based exclusive.
 * @property {string} referenceId The ID of the Google Genomics reference associated with this range.
 * @property {string} referenceName The display name corresponding to the reference specified by referenceId, for example chr1, 1, or chrX.
 * @property {boolean} reverseStrand Whether this range refers to the reverse strand, as opposed to the forward strand. Note that regardless of this field, the start/end position of the range always refer to the forward strand.
 * @property {string} start The start position of the range on the reference, 0-based inclusive.
 */
/**
 * @typedef Read
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {integer[]} alignedQuality The quality of the read sequence contained in this alignment record. (equivalent to QUAL in SAM). alignedSequence and alignedQuality may be shorter than the full read sequence and quality. This will occur if the alignment is part of a chimeric alignment, or if the read was trimmed. When this occurs, the CIGAR for this read will begin/end with a hard clip operator that will indicate the length of the excised sequence.
 * @property {string} alignedSequence The bases of the read sequence contained in this alignment record, without CIGAR operations applied (equivalent to SEQ in SAM). alignedSequence and alignedQuality may be shorter than the full read sequence and quality. This will occur if the alignment is part of a chimeric alignment, or if the read was trimmed. When this occurs, the CIGAR for this read will begin/end with a hard clip operator that will indicate the length of the excised sequence.
 * @property {genomics(v1beta2).LinearAlignment} alignment The linear alignment for this alignment record. This field is null for unmapped reads.
 * @property {boolean} duplicateFragment The fragment is a PCR or optical duplicate (SAM flag 0x400).
 * @property {boolean} failedVendorQualityChecks Whether this read did not pass filters, such as platform or vendor quality controls (SAM flag 0x200).
 * @property {integer} fragmentLength The observed length of the fragment, equivalent to TLEN in SAM.
 * @property {string} fragmentName The fragment name. Equivalent to QNAME (query template name) in SAM.
 * @property {string} id The unique ID for this read. This is a generated unique ID, not to be confused with fragmentName.
 * @property {object} info A string which maps to an array of values.
 * @property {genomics(v1beta2).Position} nextMatePosition The position of the primary alignment of the (readNumber+1)%numberReads read in the fragment. It replaces mate position and mate strand in SAM. This field will be unset if that read is unmapped or if the fragment only has a single read.
 * @property {integer} numberReads The number of reads in the fragment (extension to SAM flag 0x1).
 * @property {boolean} properPlacement The orientation and the distance between reads from the fragment are consistent with the sequencing protocol (SAM flag 0x2).
 * @property {string} readGroupId The ID of the read group this read belongs to. A read belongs to exactly one read group. This is a server-generated ID (not SAM&#39;s RG tag).
 * @property {string} readGroupSetId The ID of the read group set this read belongs to. A read belongs to exactly one read group set.
 * @property {integer} readNumber The read number in sequencing. 0-based and less than numberReads. This field replaces SAM flag 0x40 and 0x80.
 * @property {boolean} secondaryAlignment Whether this alignment is secondary. Equivalent to SAM flag 0x100. A secondary alignment represents an alternative to the primary alignment for this read. Aligners may return secondary alignments if a read can map ambiguously to multiple coordinates in the genome. By convention, each read has one and only one alignment where both secondaryAlignment and supplementaryAlignment are false.
 * @property {boolean} supplementaryAlignment Whether this alignment is supplementary. Equivalent to SAM flag 0x800. Supplementary alignments are used in the representation of a chimeric alignment. In a chimeric alignment, a read is split into multiple linear alignments that map to different reference contigs. The first linear alignment in the read will be designated as the representative alignment; the remaining linear alignments will be designated as supplementary alignments. These alignments may have different mapping quality scores. In each linear alignment in a chimeric alignment, the read will be hard clipped. The alignedSequence and alignedQuality fields in the alignment record will only represent the bases for its respective linear alignment.
 */
/**
 * @typedef ReadGroup
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} datasetId The ID of the dataset this read group belongs to.
 * @property {string} description A free-form text description of this read group.
 * @property {genomics(v1beta2).ReadGroupExperiment} experiment The experiment used to generate this read group.
 * @property {string} id The generated unique read group ID. Note: This is different than the @RG ID field in the SAM spec. For that value, see the name field.
 * @property {object} info A string which maps to an array of values.
 * @property {string} name The read group name. This corresponds to the @RG ID field in the SAM spec.
 * @property {integer} predictedInsertSize The predicted insert size of this read group. The insert size is the length the sequenced DNA fragment from end-to-end, not including the adapters.
 * @property {genomics(v1beta2).ReadGroupProgram[]} programs The programs used to generate this read group. Programs are always identical for all read groups within a read group set. For this reason, only the first read group in a returned set will have this field populated.
 * @property {string} referenceSetId The reference set to which the reads in this read group are aligned.
 * @property {string} sampleId The sample this read group&#39;s data was generated from. Note: This is not an actual ID within this repository, but rather an identifier for a sample which may be meaningful to some external system.
 */
/**
 * @typedef ReadGroupExperiment
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} instrumentModel The instrument model used as part of this experiment. This maps to sequencing technology in BAM.
 * @property {string} libraryId The library used as part of this experiment. Note: This is not an actual ID within this repository, but rather an identifier for a library which may be meaningful to some external system.
 * @property {string} platformUnit The platform unit used as part of this experiment e.g. flowcell-barcode.lane for Illumina or slide for SOLiD. Corresponds to the
 * @property {string} sequencingCenter The sequencing center used as part of this experiment.
 */
/**
 * @typedef ReadGroupProgram
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} commandLine The command line used to run this program.
 * @property {string} id The user specified locally unique ID of the program. Used along with prevProgramId to define an ordering between programs.
 * @property {string} name The display name of the program. This is typically the colloquial name of the tool used, for example &#39;bwa&#39; or &#39;picard&#39;.
 * @property {string} prevProgramId The ID of the program run before this one.
 * @property {string} version The version of the program run.
 */
/**
 * @typedef ReadGroupSet
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} datasetId The dataset ID.
 * @property {string} filename The filename of the original source file for this read group set, if any.
 * @property {string} id The read group set ID.
 * @property {object} info A string which maps to an array of values.
 * @property {string} name The read group set name. By default this will be initialized to the sample name of the sequenced data contained in this set.
 * @property {genomics(v1beta2).ReadGroup[]} readGroups The read groups in this set. There are typically 1-10 read groups in a read group set.
 * @property {string} referenceSetId The reference set the reads in this read group set are aligned to.
 */
/**
 * @typedef Reference
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} id The Google generated immutable ID of the reference.
 * @property {string} length The length of this reference&#39;s sequence.
 * @property {string} md5checksum MD5 of the upper-case sequence excluding all whitespace characters (this is equivalent to SQ:M5 in SAM). This value is represented in lower case hexadecimal format.
 * @property {string} name The name of this reference, for example 22.
 * @property {integer} ncbiTaxonId ID from http://www.ncbi.nlm.nih.gov/taxonomy. For example, 9606 for human.
 * @property {string[]} sourceAccessions All known corresponding accession IDs in INSDC (GenBank/ENA/DDBJ) ideally with a version number, for example GCF_000001405.26.
 * @property {string} sourceURI The URI from which the sequence was obtained. Typically specifies a FASTA format file.
 */
/**
 * @typedef ReferenceBound
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} referenceName The name of the reference associated with this reference bound.
 * @property {string} upperBound An upper bound (inclusive) on the starting coordinate of any variant in the reference sequence.
 */
/**
 * @typedef ReferenceSet
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} assemblyId Public id of this reference set, such as GRCh37.
 * @property {string} description Free text description of this reference set.
 * @property {string} id The Google generated immutable ID of the reference set.
 * @property {string} md5checksum Order-independent MD5 checksum which identifies this reference set. The checksum is computed by sorting all lower case hexidecimal string reference.md5checksum (for all reference in this set) in ascending lexicographic order, concatenating, and taking the MD5 of that value. The resulting value is represented in lower case hexadecimal format.
 * @property {integer} ncbiTaxonId ID from http://www.ncbi.nlm.nih.gov/taxonomy (for example, 9606 for human) indicating the species which this reference set is intended to model. Note that contained references may specify a different ncbiTaxonId, as assemblies may contain reference sequences which do not belong to the modeled species, for example EBV in a human reference genome.
 * @property {string[]} referenceIds The IDs of the reference objects that are part of this set. Reference.md5checksum must be unique within this set.
 * @property {string[]} sourceAccessions All known corresponding accession IDs in INSDC (GenBank/ENA/DDBJ) ideally with a version number, for example NC_000001.11.
 * @property {string} sourceURI The URI from which the references were obtained.
 */
/**
 * @typedef SearchAnnotationSetsRequest
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string[]} datasetIds The dataset IDs to search within. Caller must have READ access to these datasets.
 * @property {string} name Only return annotations sets for which a substring of the name matches this string (case insensitive).
 * @property {integer} pageSize The maximum number of results to return in a single page. If unspecified, defaults to 128. The maximum value is 1024.
 * @property {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
 * @property {string} referenceSetId If specified, only annotation sets associated with the given reference set are returned.
 * @property {string[]} types If specified, only annotation sets that have any of these types are returned.
 */
/**
 * @typedef SearchAnnotationSetsResponse
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {genomics(v1beta2).AnnotationSet[]} annotationSets The matching annotation sets.
 * @property {string} nextPageToken The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren&#39;t any additional results.
 */
/**
 * @typedef SearchAnnotationsRequest
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string[]} annotationSetIds The annotation sets to search within. The caller must have READ access to these annotation sets. Required. All queried annotation sets must have the same type.
 * @property {integer} pageSize The maximum number of results to return in a single page. If unspecified, defaults to 256. The maximum value is 2048.
 * @property {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
 * @property {genomics(v1beta2).QueryRange} range If specified, this query matches only annotations that overlap this range.
 */
/**
 * @typedef SearchAnnotationsResponse
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {genomics(v1beta2).Annotation[]} annotations The matching annotations.
 * @property {string} nextPageToken The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren&#39;t any additional results.
 */
/**
 * @typedef SearchCallSetsRequest
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} name Only return call sets for which a substring of the name matches this string.
 * @property {integer} pageSize The maximum number of results to return in a single page. If unspecified, defaults to 1024.
 * @property {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
 * @property {string[]} variantSetIds Restrict the query to call sets within the given variant sets. At least one ID must be provided.
 */
/**
 * @typedef SearchCallSetsResponse
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {genomics(v1beta2).CallSet[]} callSets The list of matching call sets.
 * @property {string} nextPageToken The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren&#39;t any additional results.
 */
/**
 * @typedef SearchJobsRequest
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} createdAfter If specified, only jobs created on or after this date, given in milliseconds since Unix epoch, will be returned.
 * @property {string} createdBefore If specified, only jobs created prior to this date, given in milliseconds since Unix epoch, will be returned.
 * @property {integer} pageSize The maximum number of results to return in a single page. If unspecified, defaults to 128. The maximum value is 256.
 * @property {string} pageToken The continuation token which is used to page through large result sets. To get the next page of results, set this parameter to the value of the nextPageToken from the previous response.
 * @property {string} projectNumber Required. Only return jobs which belong to this Google Developers Console project.
 * @property {string[]} status Only return jobs which have a matching status.
 */
/**
 * @typedef SearchJobsResponse
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {genomics(v1beta2).Job[]} jobs The list of jobs results, ordered newest to oldest.
 * @property {string} nextPageToken The continuation token which is used to page through large result sets. Provide this value is a subsequent request to return the next page of results. This field will be empty if there are no more results.
 */
/**
 * @typedef SearchReadGroupSetsRequest
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string[]} datasetIds Restricts this query to read group sets within the given datasets. At least one ID must be provided.
 * @property {string} name Only return read group sets for which a substring of the name matches this string.
 * @property {integer} pageSize The maximum number of results to return in a single page. If unspecified, defaults to 256. The maximum value is 1024.
 * @property {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
 */
/**
 * @typedef SearchReadGroupSetsResponse
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} nextPageToken The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren&#39;t any additional results.
 * @property {genomics(v1beta2).ReadGroupSet[]} readGroupSets The list of matching read group sets.
 */
/**
 * @typedef SearchReadsRequest
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} end The end position of the range on the reference, 0-based exclusive. If specified, referenceName must also be specified.
 * @property {integer} pageSize The maximum number of results to return in a single page. If unspecified, defaults to 256. The maximum value is 2048.
 * @property {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
 * @property {string[]} readGroupIds The IDs of the read groups within which to search for reads. All specified read groups must belong to the same read group sets. Must specify one of readGroupSetIds or readGroupIds.
 * @property {string[]} readGroupSetIds The IDs of the read groups sets within which to search for reads. All specified read group sets must be aligned against a common set of reference sequences; this defines the genomic coordinates for the query. Must specify one of readGroupSetIds or readGroupIds.
 * @property {string} referenceName The reference sequence name, for example chr1, 1, or chrX. If set to *, only unmapped reads are returned. If unspecified, all reads (mapped and unmapped) returned.
 * @property {string} start The start position of the range on the reference, 0-based inclusive. If specified, referenceName must also be specified.
 */
/**
 * @typedef SearchReadsResponse
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {genomics(v1beta2).Read[]} alignments The list of matching alignments sorted by mapped genomic coordinate, if any, ascending in position within the same reference. Unmapped reads, which have no position, are returned contiguously and are sorted in ascending lexicographic order by fragment name.
 * @property {string} nextPageToken The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren&#39;t any additional results.
 */
/**
 * @typedef SearchReferenceSetsRequest
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string[]} accessions If present, return references for which the accession matches any of these strings. Best to give a version number, for example GCF_000001405.26. If only the main accession number is given then all records with that main accession will be returned, whichever version. Note that different versions will have different sequences.
 * @property {string} assemblyId If present, return reference sets for which a substring of their assemblyId matches this string (case insensitive).
 * @property {string[]} md5checksums If present, return references for which the md5checksum matches. See ReferenceSet.md5checksum for details.
 * @property {integer} pageSize The maximum number of results to return in a single page. If unspecified, defaults to 1024. The maximum value is 4096.
 * @property {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
 */
/**
 * @typedef SearchReferenceSetsResponse
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} nextPageToken The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren&#39;t any additional results.
 * @property {genomics(v1beta2).ReferenceSet[]} referenceSets The matching references sets.
 */
/**
 * @typedef SearchReferencesRequest
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string[]} accessions If present, return references for which the accession matches this string. Best to give a version number, for example GCF_000001405.26. If only the main accession number is given then all records with that main accession will be returned, whichever version. Note that different versions will have different sequences.
 * @property {string[]} md5checksums If present, return references for which the md5checksum matches. See Reference.md5checksum for construction details.
 * @property {integer} pageSize The maximum number of results to return in a single page. If unspecified, defaults to 1024. The maximum value is 4096.
 * @property {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
 * @property {string} referenceSetId If present, return only references which belong to this reference set.
 */
/**
 * @typedef SearchReferencesResponse
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} nextPageToken The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren&#39;t any additional results.
 * @property {genomics(v1beta2).Reference[]} references The matching references.
 */
/**
 * @typedef SearchVariantSetsRequest
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string[]} datasetIds Exactly one dataset ID must be provided here. Only variant sets which belong to this dataset will be returned.
 * @property {integer} pageSize The maximum number of results to return in a single page. If unspecified, defaults to 1024.
 * @property {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
 */
/**
 * @typedef SearchVariantSetsResponse
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} nextPageToken The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren&#39;t any additional results.
 * @property {genomics(v1beta2).VariantSet[]} variantSets The variant sets belonging to the requested dataset.
 */
/**
 * @typedef SearchVariantsRequest
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string[]} callSetIds Only return variant calls which belong to call sets with these ids. Leaving this blank returns all variant calls. If a variant has no calls belonging to any of these call sets, it won&#39;t be returned at all.
 * @property {string} end The end of the window, 0-based exclusive. If unspecified or 0, defaults to the length of the reference.
 * @property {integer} maxCalls The maximum number of calls to return in a single page. Note that this limit may be exceeded in the event that a matching variant contains more calls than the requested maximum. If unspecified, defaults to 5000. The maximum value is 10000.
 * @property {integer} pageSize The maximum number of variants to return in a single page. If unspecified, defaults to 5000. The maximum value is 10000.
 * @property {string} pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
 * @property {string} referenceName Required. Only return variants in this reference sequence.
 * @property {string} start The beginning of the window (0-based, inclusive) for which overlapping variants should be returned. If unspecified, defaults to 0.
 * @property {string} variantName Only return variants which have exactly this name.
 * @property {string[]} variantSetIds At most one variant set ID must be provided. Only variants from this variant set will be returned. If omitted, a call set id must be included in the request. Both this and call_set_ids may be set.
 */
/**
 * @typedef SearchVariantsResponse
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} nextPageToken The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren&#39;t any additional results.
 * @property {genomics(v1beta2).Variant[]} variants The list of matching Variants.
 */
/**
 * @typedef Transcript
 * @memberOf! genomics(v1beta2)
 * @type object
* @property {genomics(v1beta2).TranscriptCodingSequence} codingSequence The range of the coding sequence for this transcript, if any. To determine the exact ranges of coding sequence, intersect this range with those of the exons, if any. If there are any exons, the codingSequence must start and end within them.

Note that in some cases, the reference genome will not exactly match the observed mRNA transcript e.g. due to variance in the source genome from reference. In these cases, exon.frame will not necessarily match the expected reference reading frame and coding exon reference bases cannot necessarily be concatenated to produce the original transcript mRNA.
* @property {genomics(v1beta2).TranscriptExon[]} exons The exons that compose this transcript. This field should be unset for genomes where transcript splicing does not occur, for example prokaryotes.


Introns are regions of the transcript that are not included in the spliced RNA product. Though not explicitly modeled here, intron ranges can be deduced; all regions of this transcript that are not exons are introns.


Exonic sequences do not necessarily code for a translational product (amino acids). Only the regions of exons bounded by the codingSequence correspond to coding DNA sequence.


Exons are ordered by start position and may not overlap.
* @property {string} geneId The annotation ID of the gene from which this transcript is transcribed.
*/
/**
 * @typedef TranscriptCodingSequence
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} end The end of the coding sequence on this annotation&#39;s reference sequence, 0-based exclusive. Note that this position is relative to the reference start, and not the containing annotation start.
 * @property {string} start The start of the coding sequence on this annotation&#39;s reference sequence, 0-based inclusive. Note that this position is relative to the reference start, and not the containing annotation start.
 */
/**
 * @typedef TranscriptExon
 * @memberOf! genomics(v1beta2)
 * @type object
* @property {string} end The end position of the exon on this annotation&#39;s reference sequence, 0-based exclusive. Note that this is relative to the reference start, and not the containing annotation start.
* @property {genomics(v1beta2).Int32Value} frame The frame of this exon. Contains a value of 0, 1, or 2, which indicates the offset of the first coding base of the exon within the reading frame of the coding DNA sequence, if any. This field is dependent on the strandedness of this annotation (see Annotation.position.reverseStrand). For forward stranded annotations, this offset is relative to the exon.start. For reverse strand annotations, this offset is relative to the exon.end-1.

Unset if this exon does not intersect the coding sequence. Upon creation of a transcript, the frame must be populated for all or none of the coding exons.
* @property {string} start The start position of the exon on this annotation&#39;s reference sequence, 0-based inclusive. Note that this is relative to the reference start, and not the containing annotation start.
*/
/**
 * @typedef Variant
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string[]} alternateBases The bases that appear instead of the reference bases.
 * @property {genomics(v1beta2).Call[]} calls The variant calls for this particular variant. Each one represents the determination of genotype with respect to this variant.
 * @property {string} created The date this variant was created, in milliseconds from the epoch.
 * @property {string} end The end position (0-based) of this variant. This corresponds to the first base after the last base in the reference allele. So, the length of the reference allele is (end - start). This is useful for variants that don&#39;t explicitly give alternate bases, for example large deletions.
 * @property {string[]} filter A list of filters (normally quality filters) this variant has failed. PASS indicates this variant has passed all filters.
 * @property {string} id The Google generated ID of the variant, immutable.
 * @property {object} info A string which maps to an array of values.
 * @property {string[]} names Names for the variant, for example a RefSNP ID.
 * @property {number} quality A measure of how likely this variant is to be real. A higher value is better.
 * @property {string} referenceBases The reference bases for this variant. They start at the given position.
 * @property {string} referenceName The reference on which this variant occurs. (such as chr20 or X)
 * @property {string} start The position at which this variant occurs (0-based). This corresponds to the first base of the string of reference bases.
 * @property {string} variantSetId The ID of the variant set this variant belongs to.
 */
/**
 * @typedef VariantAnnotation
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} alternateBases The alternate allele for this variant. If multiple alternate alleles exist at this location, create a separate variant for each one, as they may represent distinct conditions.
 * @property {string} clinicalSignificance Describes the clinical significance of a variant. It is adapted from the ClinVar controlled vocabulary for clinical significance described at: http://www.ncbi.nlm.nih.gov/clinvar/docs/clinsig/
 * @property {genomics(v1beta2).VariantAnnotationCondition[]} conditions The set of conditions associated with this variant. A condition describes the way a variant influences human health.
 * @property {string} effect Effect of the variant on the coding sequence.
 * @property {string} geneId Google annotation ID of the gene affected by this variant. This should be provided when the variant is created.
 * @property {string[]} transcriptIds Google annotation IDs of the transcripts affected by this variant. These should be provided when the variant is created.
 * @property {string} type Type has been adapted from ClinVar&#39;s list of variant types.
 */
/**
 * @typedef VariantAnnotationCondition
 * @memberOf! genomics(v1beta2)
 * @type object
 * @property {string} conceptId The MedGen concept id associated with this gene. Search for these IDs at http://www.ncbi.nlm.nih.gov/medgen/
 * @property {genomics(v1beta2).ExternalId[]} externalIds The set of external IDs for this condition.
 * @property {string[]} names A set of names for the condition.
 * @property {string} omimId The OMIM id for this condition. Search for these IDs at http://omim.org/
 */
/**
 * @typedef VariantSet
 * @memberOf! genomics(v1beta2)
 * @type object
* @property {string} datasetId The dataset to which this variant set belongs. Immutable.
* @property {string} description A textual description of this variant set.
* @property {string} id The Google-generated ID of the variant set. Immutable.
* @property {genomics(v1beta2).Metadata[]} metadata The metadata associated with this variant set.
* @property {string} name User-specified, mutable name.
* @property {genomics(v1beta2).ReferenceBound[]} referenceBounds A list of all references used by the variants in a variant set with associated coordinate upper bounds for each one.
* @property {string} referenceSetId The reference set to which the variant set is mapped. The reference set describes the alignment provenance of the variant set, while the referenceBounds describe the shape of the actual variant data. The reference set&#39;s reference names are a superset of those found in the referenceBounds.

For example, given a variant set that is mapped to the GRCh38 reference set and contains a single variant on reference &#39;X&#39;, referenceBounds would contain only an entry for &#39;X&#39;, while the associated reference set enumerates all possible references: &#39;1&#39;, &#39;2&#39;, &#39;X&#39;, &#39;Y&#39;, &#39;MT&#39;, etc.
*/
module.exports = Genomics;
