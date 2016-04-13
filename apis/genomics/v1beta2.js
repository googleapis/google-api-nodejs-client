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
 * Genomics API
 *
 * @classdesc Provides access to Genomics data.
 * @namespace genomics
 * @version  v1beta2
 * @variation v1beta2
 * @this Genomics
 * @param {object=} options Options for Genomics
 */
function Genomics(options) {

  var self = this;
  this._options = options || {};

  this.annotationSets = {

    /**
     * genomics.annotationSets.create
     *
     * @desc Creates a new annotation set. Caller must have WRITE permission for the associated dataset.  The following fields must be provided when creating an annotation set:   - datasetId  - referenceSetId   All other fields may be optionally specified, unless documented as being server-generated (for example, the id field).
     *
     * @alias genomics.annotationSets.create
     * @memberOf! genomics(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    create: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/annotationSets',
          method: 'POST'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {string} params.annotationSetId - The ID of the annotation set to be deleted.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/annotationSets/{annotationSetId}',
          method: 'DELETE'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {string} params.annotationSetId - The ID of the annotation set to be retrieved.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/annotationSets/{annotationSetId}',
          method: 'GET'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {string} params.annotationSetId - The ID of the annotation set to be updated.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/annotationSets/{annotationSetId}',
          method: 'PATCH'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/annotationSets/search',
          method: 'POST'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {string} params.annotationSetId - The ID of the annotation set to be updated.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/annotationSets/{annotationSetId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['annotationSetId'],
        pathParams: ['annotationSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.annotations = {

    /**
     * genomics.annotations.batchCreate
     *
     * @desc Creates one or more new annotations atomically. All annotations must belong to the same annotation set. Caller must have WRITE permission for this annotation set. For optimal performance, batch positionally adjacent annotations together.   If the request has a systemic issue, such as an attempt to write to an inaccessible annotation set, the entire RPC will fail accordingly. For lesser data issues, when possible an error will be isolated to the corresponding batch entry in the response; the remaining well formed annotations will be created normally.   For details on the requirements for each individual annotation resource, see annotations.create.
     *
     * @alias genomics.annotations.batchCreate
     * @memberOf! genomics(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    batchCreate: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/annotations:batchCreate',
          method: 'POST'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    create: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/annotations',
          method: 'POST'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {string} params.annotationId - The ID of the annotation to be deleted.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/annotations/{annotationId}',
          method: 'DELETE'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {string} params.annotationId - The ID of the annotation to be retrieved.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/annotations/{annotationId}',
          method: 'GET'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {string} params.annotationId - The ID of the annotation to be updated.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/annotations/{annotationId}',
          method: 'PATCH'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/annotations/search',
          method: 'POST'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {string} params.annotationId - The ID of the annotation to be updated.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/annotations/{annotationId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['annotationId'],
        pathParams: ['annotationId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.callsets = {

    /**
     * genomics.callsets.create
     *
     * @desc Creates a new call set.
     *
     * @alias genomics.callsets.create
     * @memberOf! genomics(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    create: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/callsets',
          method: 'POST'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {string} params.callSetId - The ID of the call set to be deleted.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/callsets/{callSetId}',
          method: 'DELETE'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {string} params.callSetId - The ID of the call set.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/callsets/{callSetId}',
          method: 'GET'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {string} params.callSetId - The ID of the call set to be updated.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/callsets/{callSetId}',
          method: 'PATCH'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/callsets/search',
          method: 'POST'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {string} params.callSetId - The ID of the call set to be updated.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/callsets/{callSetId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['callSetId'],
        pathParams: ['callSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.datasets = {

    /**
     * genomics.datasets.create
     *
     * @desc Creates a new dataset.
     *
     * @alias genomics.datasets.create
     * @memberOf! genomics(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    create: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/datasets',
          method: 'POST'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {string} params.datasetId - The ID of the dataset to be deleted.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/datasets/{datasetId}',
          method: 'DELETE'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {string} params.datasetId - The ID of the dataset.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/datasets/{datasetId}',
          method: 'GET'
        },
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
     * @param  {object=} params - Parameters for request
     * @param  {integer=} params.pageSize - The maximum number of results to return in a single page. If unspecified, defaults to 50. The maximum value is 1024.
     * @param  {string=} params.pageToken - The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
     * @param  {string=} params.projectNumber - Required. The project to list datasets for.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/datasets',
          method: 'GET'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {string} params.datasetId - The ID of the dataset to be updated.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/datasets/{datasetId}',
          method: 'PATCH'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {string} params.datasetId - The ID of the dataset to be undeleted.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    undelete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/datasets/{datasetId}/undelete',
          method: 'POST'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {string} params.datasetId - The ID of the dataset to be updated.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/datasets/{datasetId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['datasetId'],
        pathParams: ['datasetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.experimental = {

    jobs: {

      /**
       * genomics.experimental.jobs.create
       *
       * @desc Creates and asynchronously runs an ad-hoc job. This is an experimental call and may be removed or changed at any time.
       *
       * @alias genomics.experimental.jobs.create
       * @memberOf! genomics(v1beta2)
       *
       * @param  {object} params - Parameters for request
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      create: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/genomics/v1beta2/experimental/jobs/create',
            method: 'POST'
          },
          params: params,
          requiredParams: [],
          pathParams: [],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  this.jobs = {

    /**
     * genomics.jobs.cancel
     *
     * @desc Cancels a job by ID. Note that it is possible for partial results to be generated and stored for cancelled jobs.
     *
     * @alias genomics.jobs.cancel
     * @memberOf! genomics(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.jobId - Required. The ID of the job.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    cancel: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/jobs/{jobId}/cancel',
          method: 'POST'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {string} params.jobId - Required. The ID of the job.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/jobs/{jobId}',
          method: 'GET'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/jobs/search',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.readgroupsets = {

    /**
     * genomics.readgroupsets.delete
     *
     * @desc Deletes a read group set.
     *
     * @alias genomics.readgroupsets.delete
     * @memberOf! genomics(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.readGroupSetId - The ID of the read group set to be deleted. The caller must have WRITE permissions to the dataset associated with this read group set.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/readgroupsets/{readGroupSetId}',
          method: 'DELETE'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    export: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/readgroupsets/export',
          method: 'POST'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {string} params.readGroupSetId - The ID of the read group set.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/readgroupsets/{readGroupSetId}',
          method: 'GET'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    import: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/readgroupsets/import',
          method: 'POST'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {string} params.readGroupSetId - The ID of the read group set to be updated. The caller must have WRITE permissions to the dataset associated with this read group set.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/readgroupsets/{readGroupSetId}',
          method: 'PATCH'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/readgroupsets/search',
          method: 'POST'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {string} params.readGroupSetId - The ID of the read group set to be updated. The caller must have WRITE permissions to the dataset associated with this read group set.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/readgroupsets/{readGroupSetId}',
          method: 'PUT'
        },
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
       * @param  {object} params - Parameters for request
       * @param  {integer=} params.pageSize - The maximum number of results to return in a single page. If unspecified, defaults to 1024. The maximum value is 2048.
       * @param  {string=} params.pageToken - The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
       * @param  {string=} params.range.end - The end position of the range on the reference, 0-based exclusive. If specified, referenceName must also be specified.
       * @param  {string=} params.range.referenceName - The reference sequence name, for example chr1, 1, or chrX.
       * @param  {string=} params.range.start - The start position of the range on the reference, 0-based inclusive. If specified, referenceName must also be specified.
       * @param  {string} params.readGroupSetId - Required. The ID of the read group set over which coverage is requested.
       * @param  {string=} params.targetBucketWidth - The desired width of each reported coverage bucket in base pairs. This will be rounded down to the nearest precomputed bucket width; the value of which is returned as bucketWidth in the response. Defaults to infinity (each bucket spans an entire reference sequence) or the length of the target range, if specified. The smallest precomputed bucketWidth is currently 2048 base pairs; this is subject to change.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/genomics/v1beta2/readgroupsets/{readGroupSetId}/coveragebuckets',
            method: 'GET'
          },
          params: params,
          requiredParams: ['readGroupSetId'],
          pathParams: ['readGroupSetId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  this.reads = {

    /**
     * genomics.reads.search
     *
     * @desc Gets a list of reads for one or more read group sets. Reads search operates over a genomic coordinate space of reference sequence & position defined over the reference sequences to which the requested read group sets are aligned.  If a target positional range is specified, search returns all reads whose alignment to the reference genome overlap the range. A query which specifies only read group set IDs yields all reads in those read group sets, including unmapped reads.  All reads returned (including reads on subsequent pages) are ordered by genomic coordinate (by reference sequence, then position). Reads with equivalent genomic coordinates are returned in an unspecified order. This order is consistent, such that two queries for the same content (regardless of page size) yield reads in the same order across their respective streams of paginated responses.  Implements GlobalAllianceApi.searchReads.
     *
     * @alias genomics.reads.search
     * @memberOf! genomics(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/reads/search',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.references = {

    /**
     * genomics.references.get
     *
     * @desc Gets a reference.  Implements GlobalAllianceApi.getReference.
     *
     * @alias genomics.references.get
     * @memberOf! genomics(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.referenceId - The ID of the reference.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/references/{referenceId}',
          method: 'GET'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/references/search',
          method: 'POST'
        },
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
       * @param  {object} params - Parameters for request
       * @param  {string=} params.end - The end position (0-based, exclusive) of this query. Defaults to the length of this reference.
       * @param  {integer=} params.pageSize - The maximum number of bases to return in a single page. If unspecified, defaults to 200Kbp (kilo base pairs). The maximum value is 10Mbp (mega base pairs).
       * @param  {string=} params.pageToken - The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
       * @param  {string} params.referenceId - The ID of the reference.
       * @param  {string=} params.start - The start position (0-based) of this query. Defaults to 0.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/genomics/v1beta2/references/{referenceId}/bases',
            method: 'GET'
          },
          params: params,
          requiredParams: ['referenceId'],
          pathParams: ['referenceId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  this.referencesets = {

    /**
     * genomics.referencesets.get
     *
     * @desc Gets a reference set.  Implements GlobalAllianceApi.getReferenceSet.
     *
     * @alias genomics.referencesets.get
     * @memberOf! genomics(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.referenceSetId - The ID of the reference set.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/referencesets/{referenceSetId}',
          method: 'GET'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/referencesets/search',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.variants = {

    /**
     * genomics.variants.create
     *
     * @desc Creates a new variant.
     *
     * @alias genomics.variants.create
     * @memberOf! genomics(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    create: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/variants',
          method: 'POST'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {string} params.variantId - The ID of the variant to be deleted.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/variants/{variantId}',
          method: 'DELETE'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {string} params.variantId - The ID of the variant.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/variants/{variantId}',
          method: 'GET'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/variants/search',
          method: 'POST'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {string} params.variantId - The ID of the variant to be updated.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/variants/{variantId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['variantId'],
        pathParams: ['variantId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.variantsets = {

    /**
     * genomics.variantsets.create
     *
     * @desc Creates a new variant set (only necessary in v1).  The provided variant set must have a valid datasetId set - all other fields are optional. Note that the id field will be ignored, as this is assigned by the server.
     *
     * @alias genomics.variantsets.create
     * @memberOf! genomics(v1beta2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    create: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/variantsets',
          method: 'POST'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {string} params.variantSetId - The ID of the variant set to be deleted.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/variantsets/{variantSetId}',
          method: 'DELETE'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {string} params.variantSetId - Required. The ID of the variant set that contains variant data which should be exported. The caller must have READ access to this variant set.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    export: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/variantsets/{variantSetId}/export',
          method: 'POST'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {string} params.variantSetId - The ID of the variant set.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/variantsets/{variantSetId}',
          method: 'GET'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {string} params.variantSetId - Required. The variant set to which variant data should be imported.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    importVariants: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/variantsets/{variantSetId}/importVariants',
          method: 'POST'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {string} params.variantSetId - The destination variant set.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    mergeVariants: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/variantsets/{variantSetId}/mergeVariants',
          method: 'POST'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {string} params.variantSetId - The ID of the variant set to be updated (must already exist).
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/variantsets/{variantSetId}',
          method: 'PATCH'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/variantsets/search',
          method: 'POST'
        },
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
     * @param  {object} params - Parameters for request
     * @param  {string} params.variantSetId - The ID of the variant set to be updated (must already exist).
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta2/variantsets/{variantSetId}',
          method: 'PUT'
        },
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
 * Exports Genomics object
 * @type Genomics
 */
module.exports = Genomics;