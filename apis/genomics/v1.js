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
 * Stores, processes, explores and shares genomic data.
 *
 * @example
 * var google = require('googleapis');
 * var genomics = google.genomics('v1');
 *
 * @namespace genomics
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Genomics
 */
function Genomics(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.annotationsets = {

    /**
     * genomics.annotationsets.create
     *
     * @desc Creates a new annotation set. Caller must have WRITE permission for the associated dataset. The following fields are required: * datasetId * referenceSetId All other fields may be optionally specified, unless documented as being server-generated (for example, the `id` field).
     *
     * @alias genomics.annotationsets.create
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/annotationsets',
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
     * genomics.annotationsets.get
     *
     * @desc Gets an annotation set. Caller must have READ permission for the associated dataset.
     *
     * @alias genomics.annotationsets.get
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.annotationSetId The ID of the annotation set to be retrieved.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/annotationsets/{annotationSetId}',
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
     * genomics.annotationsets.update
     *
     * @desc Updates an annotation set. The update must respect all mutability restrictions and other invariants described on the annotation set resource. Caller must have WRITE permission for the associated dataset.
     *
     * @alias genomics.annotationsets.update
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.annotationSetId The ID of the annotation set to be updated.
     * @param {string=} params.updateMask An optional mask specifying which fields to update. Mutable fields are name, source_uri, and info. If unspecified, all mutable fields will be updated.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/annotationsets/{annotationSetId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['annotationSetId'],
        pathParams: ['annotationSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.annotationsets.delete
     *
     * @desc Deletes an annotation set. Caller must have WRITE permission for the associated annotation set.
     *
     * @alias genomics.annotationsets.delete
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.annotationSetId The ID of the annotation set to be deleted.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/annotationsets/{annotationSetId}',
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
     * genomics.annotationsets.search
     *
     * @desc Searches for annotation sets that match the given criteria. Annotation sets are returned in an unspecified order. This order is consistent, such that two queries for the same content (regardless of page size) yield annotation sets in the same order across their respective streams of paginated responses. Caller must have READ permission for the queried datasets.
     *
     * @alias genomics.annotationsets.search
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/annotationsets/search',
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

  self.annotations = {

    /**
     * genomics.annotations.create
     *
     * @desc Creates a new annotation. Caller must have WRITE permission for the associated annotation set. The following fields are required: * annotationSetId * referenceName or referenceId ### Transcripts For annotations of type TRANSCRIPT, the following fields of transcript must be provided: * exons.start * exons.end All other fields may be optionally specified, unless documented as being server-generated (for example, the `id` field). The annotated range must be no longer than 100Mbp (mega base pairs). See the Annotation resource for additional restrictions on each field.
     *
     * @alias genomics.annotations.create
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/annotations',
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
     * genomics.annotations.batchCreate
     *
     * @desc Creates one or more new annotations atomically. All annotations must belong to the same annotation set. Caller must have WRITE permission for this annotation set. For optimal performance, batch positionally adjacent annotations together. If the request has a systemic issue, such as an attempt to write to an inaccessible annotation set, the entire RPC will fail accordingly. For lesser data issues, when possible an error will be isolated to the corresponding batch entry in the response; the remaining well formed annotations will be created normally. For details on the requirements for each individual annotation resource, see CreateAnnotation.
     *
     * @alias genomics.annotations.batchCreate
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchCreate: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/annotations:batchCreate',
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
     * genomics.annotations.get
     *
     * @desc Gets an annotation. Caller must have READ permission for the associated annotation set.
     *
     * @alias genomics.annotations.get
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.annotationId The ID of the annotation to be retrieved.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/annotations/{annotationId}',
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
     * genomics.annotations.update
     *
     * @desc Updates an annotation. Caller must have WRITE permission for the associated dataset.
     *
     * @alias genomics.annotations.update
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.annotationId The ID of the annotation to be updated.
     * @param {string=} params.updateMask An optional mask specifying which fields to update. Mutable fields are name, variant, transcript, and info. If unspecified, all mutable fields will be updated.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/annotations/{annotationId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['annotationId'],
        pathParams: ['annotationId'],
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
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.annotationId The ID of the annotation to be deleted.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/annotations/{annotationId}',
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
     * genomics.annotations.search
     *
     * @desc Searches for annotations that match the given criteria. Results are ordered by genomic coordinate (by reference sequence, then position). Annotations with equivalent genomic coordinates are returned in an unspecified order. This order is consistent, such that two queries for the same content (regardless of page size) yield annotations in the same order across their respective streams of paginated responses. Caller must have READ permission for the queried annotation sets.
     *
     * @alias genomics.annotations.search
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/annotations/search',
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

  self.datasets = {

    /**
     * genomics.datasets.list
     *
     * @desc Lists datasets within a project. For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @alias genomics.datasets.list
     * @memberOf! genomics(v1)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.projectId Required. The project to list datasets for.
     * @param {integer=} params.pageSize The maximum number of results to return in a single page. If unspecified, defaults to 50. The maximum value is 1024.
     * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of `nextPageToken` from the previous response.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/datasets',
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
     * genomics.datasets.create
     *
     * @desc Creates a new dataset. For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @alias genomics.datasets.create
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/datasets',
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
     * genomics.datasets.get
     *
     * @desc Gets a dataset by ID. For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @alias genomics.datasets.get
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId The ID of the dataset.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/datasets/{datasetId}',
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
     * genomics.datasets.patch
     *
     * @desc Updates a dataset. For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) This method supports patch semantics.
     *
     * @alias genomics.datasets.patch
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId The ID of the dataset to be updated.
     * @param {string=} params.updateMask An optional mask specifying which fields to update. At this time, the only mutable field is name. The only acceptable value is "name". If unspecified, all mutable fields will be updated.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/datasets/{datasetId}',
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
     * genomics.datasets.delete
     *
     * @desc Deletes a dataset and all of its contents (all read group sets, reference sets, variant sets, call sets, annotation sets, etc.) This is reversible (up to one week after the deletion) via the datasets.undelete operation. For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @alias genomics.datasets.delete
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId The ID of the dataset to be deleted.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/datasets/{datasetId}',
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
     * genomics.datasets.undelete
     *
     * @desc Undeletes a dataset by restoring a dataset which was deleted via this API. For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) This operation is only possible for a week after the deletion occurred.
     *
     * @alias genomics.datasets.undelete
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId The ID of the dataset to be undeleted.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    undelete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/datasets/{datasetId}:undelete',
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
     * genomics.datasets.setIamPolicy
     *
     * @desc Sets the access control policy on the specified dataset. Replaces any existing policy. For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) See Setting a Policy for more information.
     *
     * @alias genomics.datasets.setIamPolicy
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which policy is being specified. Format is `datasets/`.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/{resource}:setIamPolicy',
          method: 'POST'
        },
        params: params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.datasets.getIamPolicy
     *
     * @desc Gets the access control policy for the dataset. This is empty if the policy or resource does not exist. See Getting a Policy for more information. For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @alias genomics.datasets.getIamPolicy
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which policy is being specified. Format is `datasets/`.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/{resource}:getIamPolicy',
          method: 'POST'
        },
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
     * @desc Returns permissions that a caller has on the specified resource. See Testing Permissions for more information. For the definitions of datasets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @alias genomics.datasets.testIamPermissions
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which policy is being specified. Format is `datasets/`.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/{resource}:testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.operations = {

    /**
     * genomics.operations.get
     *
     * @desc Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @alias genomics.operations.get
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/{name}',
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
     * genomics.operations.list
     *
     * @desc Lists operations that match the specified filter in the request.
     *
     * @alias genomics.operations.list
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation collection.
     * @param {string=} params.filter A string for filtering Operations. The following filter fields are supported: * projectId: Required. Corresponds to OperationMetadata.projectId. * createTime: The time this job was created, in seconds from the [epoch](http://en.wikipedia.org/wiki/Unix_time). Can use `>=` and/or `= 1432140000` * `projectId = my-project AND createTime >= 1432140000 AND createTime <= 1432150000 AND status = RUNNING`
     * @param {integer=} params.pageSize The maximum number of results to return. If unspecified, defaults to 256. The maximum value is 2048.
     * @param {string=} params.pageToken The standard list page token.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/{name}',
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
     * genomics.operations.cancel
     *
     * @desc Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation.
     *
     * @alias genomics.operations.cancel
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be cancelled.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/{name}:cancel',
          method: 'POST'
        },
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
     * genomics.readgroupsets.import
     *
     * @desc Creates read group sets by asynchronously importing the provided information. For the definitions of read group sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) The caller must have WRITE permissions to the dataset. ## Notes on [BAM](https://samtools.github.io/hts-specs/SAMv1.pdf) import - Tags will be converted to strings - tag types are not preserved - Comments (`@CO`) in the input file header will not be preserved - Original header order of references (`@SQ`) will not be preserved - Any reverse stranded unmapped reads will be reverse complemented, and their qualities (also the "BQ" and "OQ" tags, if any) will be reversed - Unmapped reads will be stripped of positional information (reference name and position)
     *
     * @alias genomics.readgroupsets.import
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    import: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/readgroupsets:import',
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
     * genomics.readgroupsets.export
     *
     * @desc Exports a read group set to a BAM file in Google Cloud Storage. For the definitions of read group sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) Note that currently there may be some differences between exported BAM files and the original BAM file at the time of import. See [ImportReadGroupSets](google.genomics.v1.ReadServiceV1.ImportReadGroupSets) for caveats.
     *
     * @alias genomics.readgroupsets.export
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.readGroupSetId Required. The ID of the read group set to export. The caller must have READ access to this read group set.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    export: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/readgroupsets/{readGroupSetId}:export',
          method: 'POST'
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
     * @desc Searches for read group sets matching the criteria. For the definitions of read group sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) Implements [GlobalAllianceApi.searchReadGroupSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/readmethods.avdl#L135).
     *
     * @alias genomics.readgroupsets.search
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/readgroupsets/search',
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
     * @desc Updates a read group set. For the definitions of read group sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) This method supports patch semantics.
     *
     * @alias genomics.readgroupsets.patch
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.readGroupSetId The ID of the read group set to be updated. The caller must have WRITE permissions to the dataset associated with this read group set.
     * @param {string=} params.updateMask An optional mask specifying which fields to update. Supported fields: * name. * referenceSetId. Leaving `updateMask` unset is equivalent to specifying all mutable fields.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/readgroupsets/{readGroupSetId}',
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
     * genomics.readgroupsets.delete
     *
     * @desc Deletes a read group set. For the definitions of read group sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @alias genomics.readgroupsets.delete
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.readGroupSetId The ID of the read group set to be deleted. The caller must have WRITE permissions to the dataset associated with this read group set.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/readgroupsets/{readGroupSetId}',
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
     * genomics.readgroupsets.get
     *
     * @desc Gets a read group set by ID. For the definitions of read group sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @alias genomics.readgroupsets.get
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.readGroupSetId The ID of the read group set.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/readgroupsets/{readGroupSetId}',
          method: 'GET'
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
       * @desc Lists fixed width coverage buckets for a read group set, each of which correspond to a range of a reference sequence. Each bucket summarizes coverage information across its corresponding genomic range. For the definitions of read group sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) Coverage is defined as the number of reads which are aligned to a given base in the reference sequence. Coverage buckets are available at several precomputed bucket widths, enabling retrieval of various coverage 'zoom levels'. The caller must have READ permissions for the target read group set.
       *
       * @alias genomics.readgroupsets.coveragebuckets.list
       * @memberOf! genomics(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.readGroupSetId Required. The ID of the read group set over which coverage is requested.
       * @param {string=} params.referenceName The name of the reference to query, within the reference set associated with this query. Optional.
       * @param {string=} params.start The start position of the range on the reference, 0-based inclusive. If specified, `referenceName` must also be specified. Defaults to 0.
       * @param {string=} params.end The end position of the range on the reference, 0-based exclusive. If specified, `referenceName` must also be specified. If unset or 0, defaults to the length of the reference.
       * @param {string=} params.targetBucketWidth The desired width of each reported coverage bucket in base pairs. This will be rounded down to the nearest precomputed bucket width; the value of which is returned as `bucketWidth` in the response. Defaults to infinity (each bucket spans an entire reference sequence) or the length of the target range, if specified. The smallest precomputed `bucketWidth` is currently 2048 base pairs; this is subject to change.
       * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of `nextPageToken` from the previous response.
       * @param {integer=} params.pageSize The maximum number of results to return in a single page. If unspecified, defaults to 1024. The maximum value is 2048.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://genomics.googleapis.com/v1/readgroupsets/{readGroupSetId}/coveragebuckets',
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

  self.reads = {

    /**
     * genomics.reads.search
     *
     * @desc Gets a list of reads for one or more read group sets. For the definitions of read group sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) Reads search operates over a genomic coordinate space of reference sequence & position defined over the reference sequences to which the requested read group sets are aligned. If a target positional range is specified, search returns all reads whose alignment to the reference genome overlap the range. A query which specifies only read group set IDs yields all reads in those read group sets, including unmapped reads. All reads returned (including reads on subsequent pages) are ordered by genomic coordinate (by reference sequence, then position). Reads with equivalent genomic coordinates are returned in an unspecified order. This order is consistent, such that two queries for the same content (regardless of page size) yield reads in the same order across their respective streams of paginated responses. Implements [GlobalAllianceApi.searchReads](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/readmethods.avdl#L85).
     *
     * @alias genomics.reads.search
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/reads/search',
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
     * genomics.reads.stream
     *
     * @desc Returns a stream of all the reads matching the search request, ordered by reference name, position, and ID.
     *
     * @alias genomics.reads.stream
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    stream: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/reads:stream',
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

  self.referencesets = {

    /**
     * genomics.referencesets.search
     *
     * @desc Searches for reference sets which match the given criteria. For the definitions of references and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) Implements [GlobalAllianceApi.searchReferenceSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L71)
     *
     * @alias genomics.referencesets.search
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/referencesets/search',
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
     * genomics.referencesets.get
     *
     * @desc Gets a reference set. For the definitions of references and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) Implements [GlobalAllianceApi.getReferenceSet](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L83).
     *
     * @alias genomics.referencesets.get
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.referenceSetId The ID of the reference set.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/referencesets/{referenceSetId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['referenceSetId'],
        pathParams: ['referenceSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.references = {

    /**
     * genomics.references.search
     *
     * @desc Searches for references which match the given criteria. For the definitions of references and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) Implements [GlobalAllianceApi.searchReferences](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L146).
     *
     * @alias genomics.references.search
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/references/search',
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
     * genomics.references.get
     *
     * @desc Gets a reference. For the definitions of references and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) Implements [GlobalAllianceApi.getReference](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L158).
     *
     * @alias genomics.references.get
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.referenceId The ID of the reference.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/references/{referenceId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['referenceId'],
        pathParams: ['referenceId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    bases: {

      /**
       * genomics.references.bases.list
       *
       * @desc Lists the bases in a reference, optionally restricted to a range. For the definitions of references and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) Implements [GlobalAllianceApi.getReferenceBases](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L221).
       *
       * @alias genomics.references.bases.list
       * @memberOf! genomics(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.referenceId The ID of the reference.
       * @param {string=} params.start The start position (0-based) of this query. Defaults to 0.
       * @param {string=} params.end The end position (0-based, exclusive) of this query. Defaults to the length of this reference.
       * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of `nextPageToken` from the previous response.
       * @param {integer=} params.pageSize The maximum number of bases to return in a single page. If unspecified, defaults to 200Kbp (kilo base pairs). The maximum value is 10Mbp (mega base pairs).
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://genomics.googleapis.com/v1/references/{referenceId}/bases',
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

  self.variants = {

    /**
     * genomics.variants.import
     *
     * @desc Creates variant data by asynchronously importing the provided information. For the definitions of variant sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) The variants for import will be merged with any existing variant that matches its reference sequence, start, end, reference bases, and alternative bases. If no such variant exists, a new one will be created. When variants are merged, the call information from the new variant is added to the existing variant, and Variant info fields are merged as specified in infoMergeConfig. As a special case, for single-sample VCF files, QUAL and FILTER fields will be moved to the call level; these are sometimes interpreted in a call-specific context. Imported VCF headers are appended to the metadata already in a variant set.
     *
     * @alias genomics.variants.import
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    import: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/variants:import',
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
     * @desc Gets a list of variants matching the criteria. For the definitions of variants and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) Implements [GlobalAllianceApi.searchVariants](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/variantmethods.avdl#L126).
     *
     * @alias genomics.variants.search
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/variants/search',
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
     * genomics.variants.create
     *
     * @desc Creates a new variant. For the definitions of variants and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @alias genomics.variants.create
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/variants',
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
     * genomics.variants.patch
     *
     * @desc Updates a variant. For the definitions of variants and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) This method supports patch semantics. Returns the modified variant without its calls.
     *
     * @alias genomics.variants.patch
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.variantId The ID of the variant to be updated.
     * @param {string=} params.updateMask An optional mask specifying which fields to update. At this time, mutable fields are names and info. Acceptable values are "names" and "info". If unspecified, all mutable fields will be updated.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/variants/{variantId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['variantId'],
        pathParams: ['variantId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * genomics.variants.delete
     *
     * @desc Deletes a variant. For the definitions of variants and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @alias genomics.variants.delete
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.variantId The ID of the variant to be deleted.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/variants/{variantId}',
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
     * @desc Gets a variant by ID. For the definitions of variants and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @alias genomics.variants.get
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.variantId The ID of the variant.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/variants/{variantId}',
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
     * genomics.variants.merge
     *
     * @desc Merges the given variants with existing variants. For the definitions of variants and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) Each variant will be merged with an existing variant that matches its reference sequence, start, end, reference bases, and alternative bases. If no such variant exists, a new one will be created. When variants are merged, the call information from the new variant is added to the existing variant. Variant info fields are merged as specified in the infoMergeConfig field of the MergeVariantsRequest. Please exercise caution when using this method! It is easy to introduce mistakes in existing variants and difficult to back out of them. For example, suppose you were trying to merge a new variant with an existing one and both variants contain calls that belong to callsets with the same callset ID. // Existing variant - irrelevant fields trimmed for clarity { "variantSetId": "10473108253681171589", "referenceName": "1", "start": "10582", "referenceBases": "G", "alternateBases": [ "A" ], "calls": [ { "callSetId": "10473108253681171589-0", "callSetName": "CALLSET0", "genotype": [ 0, 1 ], } ] } // New variant with conflicting call information { "variantSetId": "10473108253681171589", "referenceName": "1", "start": "10582", "referenceBases": "G", "alternateBases": [ "A" ], "calls": [ { "callSetId": "10473108253681171589-0", "callSetName": "CALLSET0", "genotype": [ 1, 1 ], } ] } The resulting merged variant would overwrite the existing calls with those from the new variant: { "variantSetId": "10473108253681171589", "referenceName": "1", "start": "10582", "referenceBases": "G", "alternateBases": [ "A" ], "calls": [ { "callSetId": "10473108253681171589-0", "callSetName": "CALLSET0", "genotype": [ 1, 1 ], } ] } This may be the desired outcome, but it is up to the user to determine if if that is indeed the case.
     *
     * @alias genomics.variants.merge
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    merge: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/variants:merge',
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
     * genomics.variants.stream
     *
     * @desc Returns a stream of all the variants matching the search request, ordered by reference name, position, and ID.
     *
     * @alias genomics.variants.stream
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    stream: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/variants:stream',
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

  self.variantsets = {

    /**
     * genomics.variantsets.create
     *
     * @desc Creates a new variant set. For the definitions of variant sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) The provided variant set must have a valid `datasetId` set - all other fields are optional. Note that the `id` field will be ignored, as this is assigned by the server.
     *
     * @alias genomics.variantsets.create
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/variantsets',
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
     * genomics.variantsets.export
     *
     * @desc Exports variant set data to an external destination. For the definitions of variant sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @alias genomics.variantsets.export
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.variantSetId Required. The ID of the variant set that contains variant data which should be exported. The caller must have READ access to this variant set.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    export: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/variantsets/{variantSetId}:export',
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
     * @desc Gets a variant set by ID. For the definitions of variant sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @alias genomics.variantsets.get
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.variantSetId Required. The ID of the variant set.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/variantsets/{variantSetId}',
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
     * genomics.variantsets.search
     *
     * @desc Returns a list of all variant sets matching search criteria. For the definitions of variant sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) Implements [GlobalAllianceApi.searchVariantSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/variantmethods.avdl#L49).
     *
     * @alias genomics.variantsets.search
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/variantsets/search',
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
     * @desc Deletes a variant set including all variants, call sets, and calls within. This is not reversible. For the definitions of variant sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @alias genomics.variantsets.delete
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.variantSetId The ID of the variant set to be deleted.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/variantsets/{variantSetId}',
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
     * genomics.variantsets.patch
     *
     * @desc Updates a variant set using patch semantics. For the definitions of variant sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @alias genomics.variantsets.patch
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.variantSetId The ID of the variant to be updated (must already exist).
     * @param {string=} params.updateMask An optional mask specifying which fields to update. Supported fields: * metadata. * name. * description. Leaving `updateMask` unset is equivalent to specifying all mutable fields.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/variantsets/{variantSetId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['variantSetId'],
        pathParams: ['variantSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.callsets = {

    /**
     * genomics.callsets.search
     *
     * @desc Gets a list of call sets matching the criteria. For the definitions of call sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) Implements [GlobalAllianceApi.searchCallSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/variantmethods.avdl#L178).
     *
     * @alias genomics.callsets.search
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/callsets/search',
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
     * genomics.callsets.create
     *
     * @desc Creates a new call set. For the definitions of call sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @alias genomics.callsets.create
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/callsets',
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
     * genomics.callsets.patch
     *
     * @desc Updates a call set. For the definitions of call sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics) This method supports patch semantics.
     *
     * @alias genomics.callsets.patch
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.callSetId The ID of the call set to be updated.
     * @param {string=} params.updateMask An optional mask specifying which fields to update. At this time, the only mutable field is name. The only acceptable value is "name". If unspecified, all mutable fields will be updated.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/callsets/{callSetId}',
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
     * genomics.callsets.delete
     *
     * @desc Deletes a call set. For the definitions of call sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @alias genomics.callsets.delete
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.callSetId The ID of the call set to be deleted.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/callsets/{callSetId}',
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
     * @desc Gets a call set by ID. For the definitions of call sets and other genomics resources, see [Fundamentals of Google Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)
     *
     * @alias genomics.callsets.get
     * @memberOf! genomics(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.callSetId The ID of the call set.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://genomics.googleapis.com/v1/callsets/{callSetId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['callSetId'],
        pathParams: ['callSetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

module.exports = Genomics;
