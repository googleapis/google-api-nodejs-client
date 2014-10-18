/**
 * Copyright 2014 Google Inc. All Rights Reserved.
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
 * @version  v1beta
 * @variation v1beta
 * @this Genomics
 * @param {object=} options Options for Genomics
 */
function Genomics(options) {

  var self = this;
  this._options = options || {};

  this.beacons = {

    /**
     * genomics.beacons.get
     *
     * @desc This is an experimental API that provides a Global Alliance for Genomics and Health Beacon. It may change at any time.
     *
     * @alias genomics.beacons.get
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.allele - Required. The allele to look for ('A', 'C', 'G' or 'T').
     * @param  {string=} params.position - Required. The 0-based position to query.
     * @param  {string=} params.referenceName - Required. The reference to query over.
     * @param  {string} params.variantSetId - The ID of the variant set to query over. It must be public. Private variant sets will return an unauthorized exception.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/beacons/{variantSetId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['variantSetId'],
        pathParams: ['variantSetId'],
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
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    create: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/callsets',
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
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.callSetId - The ID of the callset to be deleted.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/callsets/{callSetId}',
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
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.callSetId - The ID of the callset.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/callsets/{callSetId}',
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
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.callSetId - The ID of the callset to be updated.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/callsets/{callSetId}',
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
     * @desc Gets a list of call sets matching the criteria.
     *
     * @alias genomics.callsets.search
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/callsets/search',
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
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.callSetId - The ID of the callset to be updated.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/callsets/{callSetId}',
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
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    create: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/datasets',
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
     * @desc Deletes a dataset.
     *
     * @alias genomics.datasets.delete
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.datasetId - The ID of the dataset to be deleted.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/datasets/{datasetId}',
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
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.datasetId - The ID of the dataset.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/datasets/{datasetId}',
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
     * @desc Lists all datasets.
     *
     * @alias genomics.datasets.list
     * @memberOf! genomics(v1beta)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.maxResults - The maximum number of results returned by this request.
     * @param  {string=} params.pageToken - The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
     * @param  {string=} params.projectId - Only return datasets which belong to this Google Developers Console project. Only accepts project numbers. Returns all public projects if no project number is specified.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/datasets',
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
     * @memberOf! genomics(v1beta)
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
          url: 'https://www.googleapis.com/genomics/v1beta/datasets/{datasetId}',
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
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.datasetId - The ID of the dataset to be undeleted.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    undelete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/datasets/{datasetId}/undelete',
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
     * @memberOf! genomics(v1beta)
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
          url: 'https://www.googleapis.com/genomics/v1beta/datasets/{datasetId}',
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
       * @memberOf! genomics(v1beta)
       *
       * @param  {object} params - Parameters for request
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      create: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/genomics/v1beta/experimental/jobs/create',
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
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.jobId - Required. The ID of the job.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    cancel: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/jobs/{jobId}/cancel',
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
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.jobId - Required. The ID of the job.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/jobs/{jobId}',
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
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/jobs/search',
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

  this.reads = {

    /**
     * genomics.reads.search
     *
     * @desc Gets a list of reads for one or more readsets. Reads search operates over a genomic coordinate space of reference sequence & position defined over the reference sequences to which the requested readsets are aligned. If a target positional range is specified, search returns all reads whose alignment to the reference genome overlap the range. A query which specifies only readset IDs yields all reads in those readsets, including unmapped reads. All reads returned (including reads on subsequent pages) are ordered by genomic coordinate (reference sequence & position). Reads with equivalent genomic coordinates are returned in a deterministic order.
     *
     * @alias genomics.reads.search
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/reads/search',
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

  this.readsets = {

    /**
     * genomics.readsets.delete
     *
     * @desc Deletes a readset.
     *
     * @alias genomics.readsets.delete
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.readsetId - The ID of the readset to be deleted. The caller must have WRITE permissions to the dataset associated with this readset.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/readsets/{readsetId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['readsetId'],
        pathParams: ['readsetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.readsets.export
     *
     * @desc Exports readsets to a BAM file in Google Cloud Storage. Note that currently there may be some differences between exported BAM files and the original BAM file at the time of import. In particular, comments in the input file header will not be preserved, and some custom tags will be converted to strings.
     *
     * @alias genomics.readsets.export
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    export: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/readsets/export',
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
     * genomics.readsets.get
     *
     * @desc Gets a readset by ID.
     *
     * @alias genomics.readsets.get
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.readsetId - The ID of the readset.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/readsets/{readsetId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['readsetId'],
        pathParams: ['readsetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.readsets.import
     *
     * @desc Creates readsets by asynchronously importing the provided information. Note that currently comments in the input file header are not imported and some custom tags will be converted to strings, rather than preserving tag types. The caller must have WRITE permissions to the dataset.
     *
     * @alias genomics.readsets.import
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    import: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/readsets/import',
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
     * genomics.readsets.patch
     *
     * @desc Updates a readset. This method supports patch semantics.
     *
     * @alias genomics.readsets.patch
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.readsetId - The ID of the readset to be updated. The caller must have WRITE permissions to the dataset associated with this readset.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/readsets/{readsetId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['readsetId'],
        pathParams: ['readsetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.readsets.search
     *
     * @desc Gets a list of readsets matching the criteria.
     *
     * @alias genomics.readsets.search
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/readsets/search',
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
     * genomics.readsets.update
     *
     * @desc Updates a readset.
     *
     * @alias genomics.readsets.update
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.readsetId - The ID of the readset to be updated. The caller must have WRITE permissions to the dataset associated with this readset.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/readsets/{readsetId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['readsetId'],
        pathParams: ['readsetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    coveragebuckets: {

      /**
       * genomics.readsets.coveragebuckets.list
       *
       * @desc Lists fixed width coverage buckets for a readset, each of which correspond to a range of a reference sequence. Each bucket summarizes coverage information across its corresponding genomic range. Coverage is defined as the number of reads which are aligned to a given base in the reference sequence. Coverage buckets are available at various bucket widths, enabling various coverage "zoom levels". The caller must have READ permissions for the target readset.
       *
       * @alias genomics.readsets.coveragebuckets.list
       * @memberOf! genomics(v1beta)
       *
       * @param  {object} params - Parameters for request
       * @param  {string=} params.maxResults - The maximum number of results to return in a single page. If unspecified, defaults to 1024. The maximum value is 2048.
       * @param  {string=} params.pageToken - The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
       * @param  {string=} params.range.sequenceEnd - The end position of the range on the reference, 1-based exclusive. If specified, sequenceName must also be specified.
       * @param  {string=} params.range.sequenceName - The reference sequence name, for example chr1, 1, or chrX.
       * @param  {string=} params.range.sequenceStart - The start position of the range on the reference, 1-based inclusive. If specified, sequenceName must also be specified.
       * @param  {string} params.readsetId - Required. The ID of the readset over which coverage is requested.
       * @param  {string=} params.targetBucketWidth - The desired width of each reported coverage bucket in base pairs. This will be rounded down to the nearest precomputed bucket width; the value of which is returned as bucketWidth in the response. Defaults to infinity (each bucket spans an entire reference sequence) or the length of the target range, if specified. The smallest precomputed bucketWidth is currently 2048 base pairs; this is subject to change.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/genomics/v1beta/readsets/{readsetId}/coveragebuckets',
            method: 'GET'
          },
          params: params,
          requiredParams: ['readsetId'],
          pathParams: ['readsetId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  this.variants = {

    /**
     * genomics.variants.create
     *
     * @desc Creates a new variant.
     *
     * @alias genomics.variants.create
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    create: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/variants',
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
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.variantId - The ID of the variant to be deleted.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/variants/{variantId}',
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
     * genomics.variants.export
     *
     * @desc Exports variant data to an external destination.
     *
     * @alias genomics.variants.export
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    export: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/variants/export',
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
     * genomics.variants.get
     *
     * @desc Gets a variant by ID.
     *
     * @alias genomics.variants.get
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.variantId - The ID of the variant.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/variants/{variantId}',
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
     * genomics.variants.import
     *
     * @desc Creates variant data by asynchronously importing the provided information. The variants for import will be merged with any existing data and each other according to the behavior of mergeVariants. In particular, this means for merged VCF variants that have conflicting INFO fields, some data will be arbitrarily discarded. As a special case, for single-sample VCF files, QUAL and FILTER fields will be moved to the call level; these are sometimes interpreted in a call-specific context. Imported VCF headers are appended to the metadata already in a VariantSet.
     *
     * @alias genomics.variants.import
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    import: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/variants/import',
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
     * genomics.variants.search
     *
     * @desc Gets a list of variants matching the criteria.
     *
     * @alias genomics.variants.search
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/variants/search',
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
     * @memberOf! genomics(v1beta)
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
          url: 'https://www.googleapis.com/genomics/v1beta/variants/{variantId}',
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
     * genomics.variantsets.delete
     *
     * @desc Deletes the contents of a variant set. The variant set object is not deleted.
     *
     * @alias genomics.variantsets.delete
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.variantSetId - The ID of the variant set to be deleted.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/variantsets/{variantSetId}',
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
     * genomics.variantsets.get
     *
     * @desc Gets a variant set by ID.
     *
     * @alias genomics.variantsets.get
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.variantSetId - Required. The ID of the variant set.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/variantsets/{variantSetId}',
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
     * genomics.variantsets.mergeVariants
     *
     * @desc Merges the given variants with existing variants. Each variant will be merged with an existing variant that matches its reference sequence, start, end, reference bases, and alternative bases. If no such variant exists, a new one will be created.  When variants are merged, the call information from the new variant is added to the existing variant, and other fields (such as key/value pairs) are discarded.
     *
     * @alias genomics.variantsets.mergeVariants
     * @memberOf! genomics(v1beta)
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
          url: 'https://www.googleapis.com/genomics/v1beta/variantsets/{variantSetId}/mergeVariants',
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
     * @desc Updates a variant set's metadata. All other modifications are silently ignored. Returns the modified variant set. This method supports patch semantics.
     *
     * @alias genomics.variantsets.patch
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.variantSetId - The ID of the variant to be updated.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/variantsets/{variantSetId}',
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
     * @desc Returns a list of all variant sets matching search criteria.
     *
     * @alias genomics.variantsets.search
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/variantsets/search',
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
     * @desc Updates a variant set's metadata. All other modifications are silently ignored. Returns the modified variant set.
     *
     * @alias genomics.variantsets.update
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.variantSetId - The ID of the variant to be updated.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/genomics/v1beta/variantsets/{variantSetId}',
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