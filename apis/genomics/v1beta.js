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

'use strict';

var apirequest = require('../../lib/apirequest');
var createAPIRequest = apirequest.createAPIRequest;
var checkRequired = apirequest.checkRequired;
var extend = require('../../lib/utils').extend;

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
     * @param  {string=} params.contig - Required. The contig to query over.
     * @param  {string} params.datasetId - The ID of the dataset to query over. It must be public. Private datasets will return an unauthorized exception.
     * @param  {string=} params.position - Required. The 1-based position to query at.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['datasetId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/genomics/v1beta/beacons/' + params.datasetId,
        method: 'GET'
      };

      delete params.datasetId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.callsets = {

    /**
     * genomics.callsets.create
     *
     * @desc Creates a new callset.
     *
     * @alias genomics.callsets.create
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    create: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/genomics/v1beta/callsets',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * genomics.callsets.delete
     *
     * @desc Deletes a callset.
     *
     * @alias genomics.callsets.delete
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.callsetId - The ID of the callset to be deleted.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['callsetId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/genomics/v1beta/callsets/' + params.callsetId,
        method: 'DELETE'
      };

      delete params.callsetId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * genomics.callsets.get
     *
     * @desc Gets a callset by ID.
     *
     * @alias genomics.callsets.get
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.callsetId - The ID of the callset.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['callsetId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/genomics/v1beta/callsets/' + params.callsetId,
        method: 'GET'
      };

      delete params.callsetId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * genomics.callsets.patch
     *
     * @desc Updates a callset. This method supports patch semantics.
     *
     * @alias genomics.callsets.patch
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.callsetId - The ID of the callset to be updated.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['callsetId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/genomics/v1beta/callsets/' + params.callsetId,
        method: 'PATCH'
      };

      delete params.callsetId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * genomics.callsets.search
     *
     * @desc Gets a list of callsets matching the criteria.
     *
     * @alias genomics.callsets.search
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/genomics/v1beta/callsets/search',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * genomics.callsets.update
     *
     * @desc Updates a callset.
     *
     * @alias genomics.callsets.update
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.callsetId - The ID of the callset to be updated.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['callsetId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/genomics/v1beta/callsets/' + params.callsetId,
        method: 'PUT'
      };

      delete params.callsetId;

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    create: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/genomics/v1beta/datasets',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['datasetId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/genomics/v1beta/datasets/' + params.datasetId,
        method: 'DELETE'
      };

      delete params.datasetId;

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['datasetId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/genomics/v1beta/datasets/' + params.datasetId,
        method: 'GET'
      };

      delete params.datasetId;

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @param  {string=} params.pageToken - The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     * @param  {string=} params.projectId - Only return datasets which belong to this Google Developers Console project. Only accepts project numbers.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/genomics/v1beta/datasets',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['datasetId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/genomics/v1beta/datasets/' + params.datasetId,
        method: 'PATCH'
      };

      delete params.datasetId;

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['datasetId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/genomics/v1beta/datasets/' + params.datasetId,
        method: 'PUT'
      };

      delete params.datasetId;

      return createAPIRequest(self, params, options, isMedia, callback);
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
       * @param  {callback=} callback - The callback that handles the response.
       * @return {object} Request object
       */
      create: function(params, callback) {
        var params = extend({}, params); // shallow copy
        var isMedia = false;
        var options = {
          url: 'https://www.googleapis.com/genomics/v1beta/experimental/jobs/create',
          method: 'POST'
        };

        return createAPIRequest(self, params, options, isMedia, callback);
      }

    }

  };

  this.jobs = {

    /**
     * genomics.jobs.get
     *
     * @desc Gets a job by ID.
     *
     * @alias genomics.jobs.get
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.jobId - The ID of the job.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['jobId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/genomics/v1beta/jobs/' + params.jobId,
        method: 'GET'
      };

      delete params.jobId;

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/genomics/v1beta/jobs/search',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/genomics/v1beta/reads/search',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['readsetId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/genomics/v1beta/readsets/' + params.readsetId,
        method: 'DELETE'
      };

      delete params.readsetId;

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    export: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/genomics/v1beta/readsets/export',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['readsetId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/genomics/v1beta/readsets/' + params.readsetId,
        method: 'GET'
      };

      delete params.readsetId;

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    import: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/genomics/v1beta/readsets/import',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['readsetId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/genomics/v1beta/readsets/' + params.readsetId,
        method: 'PATCH'
      };

      delete params.readsetId;

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/genomics/v1beta/readsets/search',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['readsetId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/genomics/v1beta/readsets/' + params.readsetId,
        method: 'PUT'
      };

      delete params.readsetId;

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    create: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/genomics/v1beta/variants',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['variantId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/genomics/v1beta/variants/' + params.variantId,
        method: 'DELETE'
      };

      delete params.variantId;

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    export: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/genomics/v1beta/variants/export',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['variantId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/genomics/v1beta/variants/' + params.variantId,
        method: 'GET'
      };

      delete params.variantId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * genomics.variants.getSummary
     *
     * @desc Gets a summary of all the variant data in a dataset.
     *
     * @alias genomics.variants.getSummary
     * @memberOf! genomics(v1beta)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.datasetId - Required. The ID of the dataset to get variant summary information for.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getSummary: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/genomics/v1beta/variants/summary',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * genomics.variants.import
     *
     * @desc Creates variant data by asynchronously importing the provided information.
     *
     * @alias genomics.variants.import
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    import: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/genomics/v1beta/variants/import',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * genomics.variants.patch
     *
     * @desc Updates a variant. This method supports patch semantics.
     *
     * @alias genomics.variants.patch
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.variantId - The ID of the variant to be updated..
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['variantId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/genomics/v1beta/variants/' + params.variantId,
        method: 'PATCH'
      };

      delete params.variantId;

      return createAPIRequest(self, params, options, isMedia, callback);
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
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    search: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/genomics/v1beta/variants/search',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * genomics.variants.update
     *
     * @desc Updates a variant.
     *
     * @alias genomics.variants.update
     * @memberOf! genomics(v1beta)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.variantId - The ID of the variant to be updated..
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['variantId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/genomics/v1beta/variants/' + params.variantId,
        method: 'PUT'
      };

      delete params.variantId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Genomics object
 * @type Genomics
 */
module.exports = Genomics;