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
 * DLP API
 *
 * The Google Data Loss Prevention API provides methods for detection of privacy-sensitive fragments in text, images, and Google Cloud Platform storage repositories.
 *
 * @example
 * const google = require('googleapis');
 * const dlp = google.dlp('v2beta1');
 *
 * @namespace dlp
 * @type {Function}
 * @version v2beta1
 * @variation v2beta1
 * @param {object=} options Options for Dlp
 */
function Dlp(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.content = {

    /**
     * dlp.content.deidentify
     *
     * @desc De-identifies potentially sensitive info from a list of strings. This method has limits on input size and output size.
     *
     * @alias dlp.content.deidentify
     * @memberOf! dlp(v2beta1)
     *
     * @param {object} params Parameters for request
     * @param {dlp(v2beta1).GooglePrivacyDlpV2beta1DeidentifyContentRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    deidentify: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v2beta1/content:deidentify').replace(/([^:]\/)\/+/g, '$1'),
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
     * dlp.content.inspect
     *
     * @desc Finds potentially sensitive info in a list of strings. This method has limits on input size, processing time, and output size.
     *
     * @alias dlp.content.inspect
     * @memberOf! dlp(v2beta1)
     *
     * @param {object} params Parameters for request
     * @param {dlp(v2beta1).GooglePrivacyDlpV2beta1InspectContentRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    inspect: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v2beta1/content:inspect').replace(/([^:]\/)\/+/g, '$1'),
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
     * dlp.content.redact
     *
     * @desc Redacts potentially sensitive info from a list of strings. This method has limits on input size, processing time, and output size.
     *
     * @alias dlp.content.redact
     * @memberOf! dlp(v2beta1)
     *
     * @param {object} params Parameters for request
     * @param {dlp(v2beta1).GooglePrivacyDlpV2beta1RedactContentRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    redact: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v2beta1/content:redact').replace(/([^:]\/)\/+/g, '$1'),
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

  self.dataSource = {

    /**
     * dlp.dataSource.analyze
     *
     * @desc Schedules a job to compute risk analysis metrics over content in a Google Cloud Platform repository.
     *
     * @alias dlp.dataSource.analyze
     * @memberOf! dlp(v2beta1)
     *
     * @param {object} params Parameters for request
     * @param {dlp(v2beta1).GooglePrivacyDlpV2beta1AnalyzeDataSourceRiskRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    analyze: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v2beta1/dataSource:analyze').replace(/([^:]\/)\/+/g, '$1'),
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

  self.inspect = {
    operations: {

      /**
       * dlp.inspect.operations.cancel
       *
       * @desc Cancels an operation. Use the `inspect.operations.get` to check whether the cancellation succeeded or the operation completed despite cancellation.
       *
       * @alias dlp.inspect.operations.cancel
       * @memberOf! dlp(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The name of the operation resource to be cancelled.
       * @param {dlp(v2beta1).GoogleLongrunningCancelOperationRequest} params.resource Request body data
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

        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v2beta1/{name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
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
       * dlp.inspect.operations.create
       *
       * @desc Schedules a job scanning content in a Google Cloud Platform data repository.
       *
       * @alias dlp.inspect.operations.create
       * @memberOf! dlp(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {dlp(v2beta1).GooglePrivacyDlpV2beta1CreateInspectOperationRequest} params.resource Request body data
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

        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v2beta1/inspect/operations').replace(/([^:]\/)\/+/g, '$1'),
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
       * dlp.inspect.operations.delete
       *
       * @desc This method is not supported and the server returns `UNIMPLEMENTED`.
       *
       * @alias dlp.inspect.operations.delete
       * @memberOf! dlp(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The name of the operation resource to be deleted.
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

        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
       * dlp.inspect.operations.get
       *
       * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
       *
       * @alias dlp.inspect.operations.get
       * @memberOf! dlp(v2beta1)
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

        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
       * dlp.inspect.operations.list
       *
       * @desc Fetches the list of long running operations.
       *
       * @alias dlp.inspect.operations.list
       * @memberOf! dlp(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.filter Filters by `done`. That is, `done=true` or `done=false`.
       * @param {string} params.name The name of the operation's parent resource.
       * @param {integer=} params.pageSize The list page size. The maximum allowed value is 256 and the default is 100.
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

        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },
    results: {
      findings: {

        /**
         * dlp.inspect.results.findings.list
         *
         * @desc Returns list of results for given inspect operation result set id.
         *
         * @alias dlp.inspect.results.findings.list
         * @memberOf! dlp(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Restricts findings to items that match. Supports info_type and likelihood.  Examples:  - info_type=EMAIL_ADDRESS - info_type=PHONE_NUMBER,EMAIL_ADDRESS - likelihood=VERY_LIKELY - likelihood=VERY_LIKELY,LIKELY - info_type=EMAIL_ADDRESS,likelihood=VERY_LIKELY,LIKELY
         * @param {string} params.name Identifier of the results set returned as metadata of the longrunning operation created by a call to InspectDataSource. Should be in the format of `inspect/results/{id}`.
         * @param {integer=} params.pageSize Maximum number of results to return. If 0, the implementation selects a reasonable value.
         * @param {string=} params.pageToken The value returned by the last `ListInspectFindingsResponse`; indicates that this is a continuation of a prior `ListInspectFindings` call, and that the system should return the next page of data.
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

          const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v2beta1/{name}/findings').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
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

  self.riskAnalysis = {
    operations: {

      /**
       * dlp.riskAnalysis.operations.cancel
       *
       * @desc Cancels an operation. Use the `inspect.operations.get` to check whether the cancellation succeeded or the operation completed despite cancellation.
       *
       * @alias dlp.riskAnalysis.operations.cancel
       * @memberOf! dlp(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The name of the operation resource to be cancelled.
       * @param {dlp(v2beta1).GoogleLongrunningCancelOperationRequest} params.resource Request body data
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

        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v2beta1/{name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
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
       * dlp.riskAnalysis.operations.delete
       *
       * @desc This method is not supported and the server returns `UNIMPLEMENTED`.
       *
       * @alias dlp.riskAnalysis.operations.delete
       * @memberOf! dlp(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The name of the operation resource to be deleted.
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

        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
       * dlp.riskAnalysis.operations.get
       *
       * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
       *
       * @alias dlp.riskAnalysis.operations.get
       * @memberOf! dlp(v2beta1)
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

        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
       * dlp.riskAnalysis.operations.list
       *
       * @desc Fetches the list of long running operations.
       *
       * @alias dlp.riskAnalysis.operations.list
       * @memberOf! dlp(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.filter Filters by `done`. That is, `done=true` or `done=false`.
       * @param {string} params.name The name of the operation's parent resource.
       * @param {integer=} params.pageSize The list page size. The maximum allowed value is 256 and the default is 100.
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

        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  self.rootCategories = {

    /**
     * dlp.rootCategories.list
     *
     * @desc Returns the list of root categories of sensitive information.
     *
     * @alias dlp.rootCategories.list
     * @memberOf! dlp(v2beta1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.languageCode Optional language code for localized friendly category names. If omitted or if localized strings are not available, en-US strings will be returned.
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

      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v2beta1/rootCategories').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },
    infoTypes: {

      /**
       * dlp.rootCategories.infoTypes.list
       *
       * @desc Returns sensitive information types for given category.
       *
       * @alias dlp.rootCategories.infoTypes.list
       * @memberOf! dlp(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.category Category name as returned by ListRootCategories.
       * @param {string=} params.languageCode Optional BCP-47 language code for localized info type friendly names. If omitted, or if localized strings are not available, en-US strings will be returned.
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

        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v2beta1/rootCategories/{category}/infoTypes').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['category'],
          pathParams: ['category'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };
}

/**
 * @typedef GoogleLongrunningCancelOperationRequest
 * @memberOf! dlp(v2beta1)
 * @type object
 */

/**
 * @typedef GoogleLongrunningListOperationsResponse
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} nextPageToken The standard List next-page token.
 * @property {dlp(v2beta1).GoogleLongrunningOperation[]} operations A list of operations that matches the specified filter in the request.
 */

/**
 * @typedef GoogleLongrunningOperation
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {boolean} done If the value is `false`, it means the operation is still in progress.
If `true`, the operation is completed, and either `error` or `response` is
available.
* @property {dlp(v2beta1).GoogleRpcStatus} error The error result of the operation in case of failure or cancellation.
* @property {object} metadata This field will contain an InspectOperationMetadata object for `inspect.operations.create` or a RiskAnalysisOperationMetadata object for `dataSource.analyze`.  This will always be returned with the Operation.
* @property {string} name The server-assigned name. The `name` should have the format of `inspect/operations/&lt;identifier&gt;`.
* @property {object} response This field will contain an InspectOperationResult object for `inspect.operations.create` or a RiskAnalysisOperationResult object for `dataSource.analyze`.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1AnalyzeDataSourceRiskRequest
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1PrivacyMetric} privacyMetric Privacy metric to compute.
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1BigQueryTable} sourceTable Input dataset to compute metrics over.
 */

/**
 * @typedef GooglePrivacyDlpV2beta1BigQueryOptions
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1FieldId[]} identifyingFields References to fields uniquely identifying rows within the table.
Nested fields in the format, like `person.birthdate.year`, are allowed.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1BigQueryTable} tableReference Complete BigQuery table reference.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1BigQueryTable
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {string} datasetId Dataset ID of the table.
* @property {string} projectId The Google Cloud Platform project ID of the project containing the table.
If omitted, project ID is inferred from the API call.
* @property {string} tableId Name of the table.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1Bucket
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Value} max Upper bound of the range, exclusive; type must match min.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Value} min Lower bound of the range, inclusive. Type should be the same as max if
used.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Value} replacementValue Replacement value for this bucket. If not provided
the default behavior will be to hyphenate the min-max range.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1BucketingConfig
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Bucket[]} buckets 
 */

/**
 * @typedef GooglePrivacyDlpV2beta1CategoricalStatsConfig
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1FieldId} field Field to compute categorical stats on. All column types are
supported except for arrays and structs. However, it may be more
informative to use NumericalStats when the field type is supported,
depending on the data.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1CategoricalStatsHistogramBucket
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {string} bucketSize Total number of records in this bucket.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1ValueFrequency[]} bucketValues Sample of value frequencies in this bucket. The total number of
values returned per bucket is capped at 20.
* @property {string} valueFrequencyLowerBound Lower bound on the value frequency of the values in this bucket.
* @property {string} valueFrequencyUpperBound Upper bound on the value frequency of the values in this bucket.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1CategoricalStatsResult
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1CategoricalStatsHistogramBucket[]} valueFrequencyHistogramBuckets Histogram of value frequencies in the column.
 */

/**
 * @typedef GooglePrivacyDlpV2beta1CategoryDescription
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} displayName Human readable form of the category name.
 * @property {string} name Internal name of the category.
 */

/**
 * @typedef GooglePrivacyDlpV2beta1CharacterMaskConfig
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1CharsToIgnore[]} charactersToIgnore When masking a string, items in this list will be skipped when replacing.
For example, if your string is 555-555-5555 and you ask us to skip `-` and
mask 5 chars with * we would produce ***-*55-5555.
* @property {string} maskingCharacter Character to mask the sensitive values&amp;mdash;for example, &quot;*&quot; for an
alphabetic string such as name, or &quot;0&quot; for a numeric string such as ZIP
code or credit card number. String must have length 1. If not supplied, we
will default to &quot;*&quot; for strings, 0 for digits.
* @property {integer} numberToMask Number of characters to mask. If not set, all matching chars will be
masked. Skipped characters do not count towards this tally.
* @property {boolean} reverseOrder Mask characters in reverse order. For example, if `masking_character` is
&#39;0&#39;, number_to_mask is 14, and `reverse_order` is false, then
1234-5678-9012-3456 -&gt; 00000000000000-3456
If `masking_character` is &#39;*&#39;, `number_to_mask` is 3, and `reverse_order`
is true, then 12345 -&gt; 12***
*/

/**
 * @typedef GooglePrivacyDlpV2beta1CharsToIgnore
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} charactersToSkip 
 * @property {string} commonCharactersToIgnore 
 */

/**
 * @typedef GooglePrivacyDlpV2beta1CloudStorageKey
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} filePath Path to the file.
 * @property {string} startOffset Byte offset of the referenced data in the file.
 */

/**
 * @typedef GooglePrivacyDlpV2beta1CloudStorageOptions
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1FileSet} fileSet 
 */

/**
 * @typedef GooglePrivacyDlpV2beta1CloudStoragePath
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} path The url, in the format of `gs://bucket/&lt;path&gt;`.
 */

/**
 * @typedef GooglePrivacyDlpV2beta1Color
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {number} blue The amount of blue in the color as a value in the interval [0, 1].
 * @property {number} green The amount of green in the color as a value in the interval [0, 1].
 * @property {number} red The amount of red in the color as a value in the interval [0, 1].
 */

/**
 * @typedef GooglePrivacyDlpV2beta1Condition
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1FieldId} field Field within the record this condition is evaluated against. [required]
 * @property {string} operator Operator used to compare the field or info type to the value. [required]
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Value} value Value to compare against. [Required, except for `EXISTS` tests.]
 */

/**
 * @typedef GooglePrivacyDlpV2beta1Conditions
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Condition[]} conditions 
 */

/**
 * @typedef GooglePrivacyDlpV2beta1ContentItem
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {string} data Content data to inspect or redact.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Table} table Structured content for inspection.
* @property {string} type Type of the content, as defined in Content-Type HTTP header.
Supported types are: all &quot;text&quot; types, octet streams, PNG images,
JPEG images.
* @property {string} value String data to inspect or redact.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1CreateInspectOperationRequest
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1InspectConfig} inspectConfig Configuration for the inspector.
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1OperationConfig} operationConfig Additional configuration settings for long running operations.
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1OutputStorageConfig} outputConfig Optional location to store findings.
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1StorageConfig} storageConfig Specification of the data set to process.
 */

/**
 * @typedef GooglePrivacyDlpV2beta1CryptoHashConfig
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1CryptoKey} cryptoKey The key used by the hash function.
 */

/**
 * @typedef GooglePrivacyDlpV2beta1CryptoKey
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1KmsWrappedCryptoKey} kmsWrapped 
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1TransientCryptoKey} transient 
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1UnwrappedCryptoKey} unwrapped 
 */

/**
 * @typedef GooglePrivacyDlpV2beta1CryptoReplaceFfxFpeConfig
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {string} commonAlphabet 
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1FieldId} context A context may be used for higher security since the same
identifier in two different contexts likely will be given a distinct
surrogate. The principle is that the likeliness is inversely related
to the ratio of the number of distinct identifiers per context over the
number of possible surrogates: As long as this ratio is small, the
likehood is large.

If the context is not set, a default tweak will be used.
If the context is set but:

1. there is no record present when transforming a given value or
1. the field is not present when transforming a given value,

a default tweak will be used.

Note that case (1) is expected when an `InfoTypeTransformation` is
applied to both structured and non-structured `ContentItem`s.
Currently, the referenced field may be of value type integer or string.

The tweak is constructed as a sequence of bytes in big endian byte order
such that:

- a 64 bit integer is encoded followed by a single byte of value 1
- a string is encoded in UTF-8 format followed by a single byte of value 2

This is also known as the &#39;tweak&#39;, as in tweakable encryption.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1CryptoKey} cryptoKey The key used by the encryption algorithm. [required]
* @property {string} customAlphabet This is supported by mapping these to the alphanumeric characters
that the FFX mode natively supports. This happens before/after
encryption/decryption.
Each character listed must appear only once.
Number of characters must be in the range [2, 62].
This must be encoded as ASCII.
The order of characters does not matter.
* @property {integer} radix The native way to select the alphabet. Must be in the range [2, 62].
*/

/**
 * @typedef GooglePrivacyDlpV2beta1CustomInfoType
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Dictionary} dictionary Dictionary-based custom info type.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1InfoType} infoType Info type configuration. All custom info types must have configurations
that do not conflict with built-in info types or other custom info types.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1DatastoreKey
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Key} entityKey Datastore entity key.
 */

/**
 * @typedef GooglePrivacyDlpV2beta1DatastoreOptions
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1KindExpression} kind The kind to process.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1PartitionId} partitionId A partition ID identifies a grouping of entities. The grouping is always
by project and namespace, however the namespace ID may be empty.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Projection[]} projection Properties to scan. If none are specified, all properties will be scanned
by default.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1DeidentificationSummary
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1TransformationSummary[]} transformationSummaries Transformations applied to the dataset.
 * @property {string} transformedBytes Total size in bytes that were transformed in some way.
 */

/**
 * @typedef GooglePrivacyDlpV2beta1DeidentifyConfig
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1InfoTypeTransformations} infoTypeTransformations Treat the dataset as free-form text and apply the same free text
transformation everywhere.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1RecordTransformations} recordTransformations Treat the dataset as structured. Transformations can be applied to
specific locations within structured datasets, such as transforming
a column within a table.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1DeidentifyContentRequest
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1DeidentifyConfig} deidentifyConfig Configuration for the de-identification of the list of content items.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1InspectConfig} inspectConfig Configuration for the inspector.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1ContentItem[]} items The list of items to inspect. Up to 100 are allowed per request.
All items will be treated as text/*.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1DeidentifyContentResponse
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1ContentItem[]} items 
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1DeidentificationSummary[]} summaries A review of the transformations that took place for each item.
 */

/**
 * @typedef GooglePrivacyDlpV2beta1Dictionary
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1WordList} wordList List of words or phrases to search for.
 */

/**
 * @typedef GooglePrivacyDlpV2beta1EntityId
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1FieldId} field Composite key indicating which field contains the entity identifier.
 */

/**
 * @typedef GooglePrivacyDlpV2beta1Expressions
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Conditions} conditions 
* @property {string} logicalOperator The operator to apply to the result of conditions. Default and currently
only supported value is `AND`.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1FieldId
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} columnName Name describing the field.
 */

/**
 * @typedef GooglePrivacyDlpV2beta1FieldTransformation
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1RecordCondition} condition Only apply the transformation if the condition evaluates to true for the
given `RecordCondition`. The conditions are allowed to reference fields
that are not used in the actual transformation. [optional]

Example Use Cases:

- Apply a different bucket transformation to an age column if the zip code
column for the same record is within a specific range.
- Redact a field if the date of birth field is greater than 85.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1FieldId[]} fields Input field(s) to apply the transformation to. [required]
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1InfoTypeTransformations} infoTypeTransformations Treat the contents of the field as free text, and selectively
transform content that matches an `InfoType`.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1PrimitiveTransformation} primitiveTransformation Apply the transformation to the entire field.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1FileSet
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {string} url The url, in the format `gs://&lt;bucket&gt;/&lt;path&gt;`. Trailing wildcard in the
path is allowed.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1Finding
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} createTime Timestamp when finding was detected.
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1InfoType} infoType The specific type of info the string might be.
 * @property {string} likelihood Estimate of how likely it is that the info_type is correct.
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Location} location Location of the info found.
 * @property {string} quote The specific string that may be potentially sensitive info.
 */

/**
 * @typedef GooglePrivacyDlpV2beta1FixedSizeBucketingConfig
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {number} bucketSize Size of each bucket (except for minimum and maximum buckets). So if
`lower_bound` = 10, `upper_bound` = 89, and `bucket_size` = 10, then the
following buckets would be used: -10, 10-20, 20-30, 30-40, 40-50, 50-60,
60-70, 70-80, 80-89, 89+. Precision up to 2 decimals works. [Required].
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Value} lowerBound Lower bound value of buckets. All values less than `lower_bound` are
grouped together into a single bucket; for example if `lower_bound` = 10,
then all values less than 10 are replaced with the value “-10”. [Required].
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Value} upperBound Upper bound value of buckets. All values greater than upper_bound are
grouped together into a single bucket; for example if `upper_bound` = 89,
then all values greater than 89 are replaced with the value “89+”.
[Required].
*/

/**
 * @typedef GooglePrivacyDlpV2beta1ImageLocation
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {integer} height Height of the bounding box in pixels.
 * @property {integer} left Left coordinate of the bounding box. (0,0) is upper left.
 * @property {integer} top Top coordinate of the bounding box. (0,0) is upper left.
 * @property {integer} width Width of the bounding box in pixels.
 */

/**
 * @typedef GooglePrivacyDlpV2beta1ImageRedactionConfig
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1InfoType} infoType Only one per info_type should be provided per request. If not
specified, and redact_all_text is false, the DLP API will redact all
text that it matches against all info_types that are found, but not
specified in another ImageRedactionConfig.
* @property {boolean} redactAllText If true, all text found in the image, regardless whether it matches an
info_type, is redacted.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Color} redactionColor The color to use when redacting content from an image. If not specified,
the default is black.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1InfoType
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} name Name of the information type.
 */

/**
 * @typedef GooglePrivacyDlpV2beta1InfoTypeDescription
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1CategoryDescription[]} categories List of categories this infoType belongs to.
 * @property {string} displayName Human readable form of the infoType name.
 * @property {string} name Internal name of the infoType.
 */

/**
 * @typedef GooglePrivacyDlpV2beta1InfoTypeLimit
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1InfoType} infoType Type of information the findings limit applies to. Only one limit per
info_type should be provided. If InfoTypeLimit does not have an
info_type, the DLP API applies the limit against all info_types that are
found but not specified in another InfoTypeLimit.
* @property {integer} maxFindings Max findings limit for the given infoType.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1InfoTypeStatistics
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} count Number of findings for this info type.
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1InfoType} infoType The type of finding this stat is for.
 */

/**
 * @typedef GooglePrivacyDlpV2beta1InfoTypeTransformation
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1InfoType[]} infoTypes Info types to apply the transformation to. Empty list will match all
available info types for this transformation.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1PrimitiveTransformation} primitiveTransformation Primitive transformation to apply to the info type. [required]
*/

/**
 * @typedef GooglePrivacyDlpV2beta1InfoTypeTransformations
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1InfoTypeTransformation[]} transformations Transformation for each info type. Cannot specify more than one
for a given info type. [required]
*/

/**
 * @typedef GooglePrivacyDlpV2beta1InspectConfig
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1CustomInfoType[]} customInfoTypes Custom info types provided by the user.
* @property {boolean} excludeTypes When true, excludes type information of the findings.
* @property {boolean} includeQuote When true, a contextual quote from the data that triggered a finding is
included in the response; see Finding.quote.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1InfoTypeLimit[]} infoTypeLimits Configuration of findings limit given for specified info types.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1InfoType[]} infoTypes Restricts what info_types to look for. The values must correspond to
InfoType values returned by ListInfoTypes or found in documentation.
Empty info_types runs all enabled detectors.
* @property {integer} maxFindings Limits the number of findings per content item or long running operation.
* @property {string} minLikelihood Only returns findings equal or above this threshold.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1InspectContentRequest
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1InspectConfig} inspectConfig Configuration for the inspector.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1ContentItem[]} items The list of items to inspect. Items in a single request are
considered &quot;related&quot; unless inspect_config.independent_inputs is true.
Up to 100 are allowed per request.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1InspectContentResponse
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1InspectResult[]} results Each content_item from the request has a result in this list, in the
same order as the request.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1InspectOperationMetadata
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} createTime The time which this request was started.
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1InfoTypeStatistics[]} infoTypeStats 
 * @property {string} processedBytes Total size in bytes that were processed.
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1InspectConfig} requestInspectConfig The inspect config used to create the Operation.
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1OutputStorageConfig} requestOutputConfig Optional location to store findings.
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1StorageConfig} requestStorageConfig The storage config used to create the Operation.
 * @property {string} totalEstimatedBytes Estimate of the number of bytes to process.
 */

/**
 * @typedef GooglePrivacyDlpV2beta1InspectOperationResult
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {string} name The server-assigned name, which is only unique within the same service that
originally returns it. If you use the default HTTP mapping, the
`name` should have the format of `inspect/results/{id}`.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1InspectResult
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Finding[]} findings List of findings for an item.
* @property {boolean} findingsTruncated If true, then this item might have more findings than were returned,
and the findings returned are an arbitrary subset of all findings.
The findings list might be truncated because the input items were too
large, or because the server reached the maximum amount of resources
allowed for a single API call. For best results, divide the input into
smaller batches.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1KAnonymityConfig
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1EntityId} entityId Optional message indicating that each distinct `EntityId` should not
contribute to the k-anonymity count more than once per equivalence class.
If an entity_id appears on several rows with different quasi-identifier
tuples, it will contribute to each count exactly once. This can lead to
unexpected results, consider for example the following table:
  entity_id | quasi_id
  --------------------
          1 |    &quot;foo&quot;
          2 |    &quot;bar&quot;
          3 |    &quot;foo&quot;
          3 |    &quot;bar&quot;
The anonymity value associated to entity_id 3 will be 2, even if it is
the only entity_id to be associated to both values &quot;foo&quot; and &quot;bar&quot;.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1FieldId[]} quasiIds Set of fields to compute k-anonymity over. When multiple fields are
specified, they are considered a single composite key. Structs and
repeated data types are not supported; however, nested fields are
supported so long as they are not structs themselves or nested within
a repeated field.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1KAnonymityEquivalenceClass
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {string} equivalenceClassSize Size of the equivalence class, for example number of rows with the
above set of values.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Value[]} quasiIdsValues Set of values defining the equivalence class. One value per
quasi-identifier column in the original KAnonymity metric message.
The order is always the same as the original request.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1KAnonymityHistogramBucket
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {string} bucketSize Total number of records in this bucket.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1KAnonymityEquivalenceClass[]} bucketValues Sample of equivalence classes in this bucket. The total number of
classes returned per bucket is capped at 20.
* @property {string} equivalenceClassSizeLowerBound Lower bound on the size of the equivalence classes in this bucket.
* @property {string} equivalenceClassSizeUpperBound Upper bound on the size of the equivalence classes in this bucket.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1KAnonymityResult
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1KAnonymityHistogramBucket[]} equivalenceClassHistogramBuckets Histogram of k-anonymity equivalence classes.
 */

/**
 * @typedef GooglePrivacyDlpV2beta1Key
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1PartitionId} partitionId Entities are partitioned into subsets, currently identified by a project
ID and namespace ID.
Queries are scoped to a single partition.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1PathElement[]} path The entity path.
An entity path consists of one or more elements composed of a kind and a
string or numerical identifier, which identify entities. The first
element identifies a _root entity_, the second element identifies
a _child_ of the root entity, the third element identifies a child of the
second entity, and so forth. The entities identified by all prefixes of
the path are called the element&#39;s _ancestors_.

A path can never be empty, and a path can have at most 100 elements.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1KindExpression
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} name The name of the kind.
 */

/**
 * @typedef GooglePrivacyDlpV2beta1KmsWrappedCryptoKey
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} cryptoKeyName The resource name of the KMS CryptoKey to use for unwrapping. [required]
 * @property {string} wrappedKey The wrapped data crypto key. [required]
 */

/**
 * @typedef GooglePrivacyDlpV2beta1LDiversityConfig
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1FieldId[]} quasiIds Set of quasi-identifiers indicating how equivalence classes are
defined for the l-diversity computation. When multiple fields are
specified, they are considered a single composite key.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1FieldId} sensitiveAttribute Sensitive field for computing the l-value.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1LDiversityEquivalenceClass
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {string} equivalenceClassSize Size of the k-anonymity equivalence class.
* @property {string} numDistinctSensitiveValues Number of distinct sensitive values in this equivalence class.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Value[]} quasiIdsValues Quasi-identifier values defining the k-anonymity equivalence
class. The order is always the same as the original request.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1ValueFrequency[]} topSensitiveValues Estimated frequencies of top sensitive values.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1LDiversityHistogramBucket
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {string} bucketSize Total number of records in this bucket.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1LDiversityEquivalenceClass[]} bucketValues Sample of equivalence classes in this bucket. The total number of
classes returned per bucket is capped at 20.
* @property {string} sensitiveValueFrequencyLowerBound Lower bound on the sensitive value frequencies of the equivalence
classes in this bucket.
* @property {string} sensitiveValueFrequencyUpperBound Upper bound on the sensitive value frequencies of the equivalence
classes in this bucket.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1LDiversityResult
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1LDiversityHistogramBucket[]} sensitiveValueFrequencyHistogramBuckets Histogram of l-diversity equivalence class sensitive value frequencies.
 */

/**
 * @typedef GooglePrivacyDlpV2beta1ListInfoTypesResponse
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1InfoTypeDescription[]} infoTypes Set of sensitive info types belonging to a category.
 */

/**
 * @typedef GooglePrivacyDlpV2beta1ListInspectFindingsResponse
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {string} nextPageToken If not empty, indicates that there may be more results that match the
request; this value should be passed in a new `ListInspectFindingsRequest`.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1InspectResult} result The results.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1ListRootCategoriesResponse
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1CategoryDescription[]} categories List of all into type categories supported by the API.
 */

/**
 * @typedef GooglePrivacyDlpV2beta1Location
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Range} byteRange Zero-based byte offsets within a content item.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Range} codepointRange Character offsets within a content item, included when content type
is a text. Default charset assumed to be UTF-8.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1FieldId} fieldId Field id of the field containing the finding.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1ImageLocation[]} imageBoxes Location within an image&#39;s pixels.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1RecordKey} recordKey Key of the finding.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1TableLocation} tableLocation Location within a `ContentItem.Table`.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1NumericalStatsConfig
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1FieldId} field Field to compute numerical stats on. Supported types are
integer, float, date, datetime, timestamp, time.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1NumericalStatsResult
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Value} maxValue Maximum value appearing in the column.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Value} minValue Minimum value appearing in the column.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Value[]} quantileValues List of 99 values that partition the set of field values into 100 equal
sized buckets.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1OperationConfig
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} maxItemFindings Max number of findings per file, Datastore entity, or database row.
 */

/**
 * @typedef GooglePrivacyDlpV2beta1OutputStorageConfig
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1CloudStoragePath} storagePath The path to a Google Cloud Storage location to store output.
The bucket must already exist and
the Google APIs service account for DLP must have write permission to
write to the given bucket.
Results are split over multiple csv files with each file name matching
the pattern &quot;[operation_id]_[count].csv&quot;, for example
`3094877188788974909_1.csv`. The `operation_id` matches the
identifier for the Operation, and the `count` is a counter used for
tracking the number of files written.

The CSV file(s) contain the following columns regardless of storage type
scanned:
- id
- info_type
- likelihood
- byte size of finding
- quote
- timestamp

For Cloud Storage the next columns are:

- file_path
- start_offset

For Cloud Datastore the next columns are:

- project_id
- namespace_id
- path
- column_name
- offset

For BigQuery the next columns are:

- row_number
- project_id
- dataset_id
- table_id
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1BigQueryTable} table Store findings in a new table in the dataset.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1PartitionId
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} namespaceId If not empty, the ID of the namespace to which the entities belong.
 * @property {string} projectId The ID of the project to which the entities belong.
 */

/**
 * @typedef GooglePrivacyDlpV2beta1PathElement
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {string} id The auto-allocated ID of the entity.
Never equal to zero. Values less than zero are discouraged and may not
be supported in the future.
* @property {string} kind The kind of the entity.
A kind matching regex `__.*__` is reserved/read-only.
A kind must not contain more than 1500 bytes when UTF-8 encoded.
Cannot be `&quot;&quot;`.
* @property {string} name The name of the entity.
A name matching regex `__.*__` is reserved/read-only.
A name must not be more than 1500 bytes when UTF-8 encoded.
Cannot be `&quot;&quot;`.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1PrimitiveTransformation
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1BucketingConfig} bucketingConfig 
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1CharacterMaskConfig} characterMaskConfig 
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1CryptoHashConfig} cryptoHashConfig 
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1CryptoReplaceFfxFpeConfig} cryptoReplaceFfxFpeConfig 
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1FixedSizeBucketingConfig} fixedSizeBucketingConfig 
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1RedactConfig} redactConfig 
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1ReplaceValueConfig} replaceConfig 
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1ReplaceWithInfoTypeConfig} replaceWithInfoTypeConfig 
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1TimePartConfig} timePartConfig 
 */

/**
 * @typedef GooglePrivacyDlpV2beta1PrivacyMetric
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1CategoricalStatsConfig} categoricalStatsConfig 
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1KAnonymityConfig} kAnonymityConfig 
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1LDiversityConfig} lDiversityConfig 
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1NumericalStatsConfig} numericalStatsConfig 
 */

/**
 * @typedef GooglePrivacyDlpV2beta1Projection
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1PropertyReference} property The property to project.
 */

/**
 * @typedef GooglePrivacyDlpV2beta1PropertyReference
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {string} name The name of the property.
If name includes &quot;.&quot;s, it may be interpreted as a property name path.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1Range
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} end Index of the last character of the range (exclusive).
 * @property {string} start Index of the first character of the range (inclusive).
 */

/**
 * @typedef GooglePrivacyDlpV2beta1RecordCondition
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Expressions} expressions 
 */

/**
 * @typedef GooglePrivacyDlpV2beta1RecordKey
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1CloudStorageKey} cloudStorageKey 
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1DatastoreKey} datastoreKey 
 */

/**
 * @typedef GooglePrivacyDlpV2beta1RecordSuppression
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1RecordCondition} condition 
 */

/**
 * @typedef GooglePrivacyDlpV2beta1RecordTransformations
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1FieldTransformation[]} fieldTransformations Transform the record by applying various field transformations.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1RecordSuppression[]} recordSuppressions Configuration defining which records get suppressed entirely. Records that
match any suppression rule are omitted from the output [optional].
*/

/**
 * @typedef GooglePrivacyDlpV2beta1RedactConfig
 * @memberOf! dlp(v2beta1)
 * @type object
 */

/**
 * @typedef GooglePrivacyDlpV2beta1RedactContentRequest
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1ImageRedactionConfig[]} imageRedactionConfigs The configuration for specifying what content to redact from images.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1InspectConfig} inspectConfig Configuration for the inspector.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1ContentItem[]} items The list of items to inspect. Up to 100 are allowed per request.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1ReplaceConfig[]} replaceConfigs The strings to replace findings text findings with. Must specify at least
one of these or one ImageRedactionConfig if redacting images.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1RedactContentResponse
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1ContentItem[]} items The redacted content.
 */

/**
 * @typedef GooglePrivacyDlpV2beta1ReplaceConfig
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1InfoType} infoType Type of information to replace. Only one ReplaceConfig per info_type
should be provided. If ReplaceConfig does not have an info_type, the DLP
API matches it against all info_types that are found but not specified in
another ReplaceConfig.
* @property {string} replaceWith Content replacing sensitive information of given type. Max 256 chars.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1ReplaceValueConfig
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Value} newValue Value to replace it with.
 */

/**
 * @typedef GooglePrivacyDlpV2beta1ReplaceWithInfoTypeConfig
 * @memberOf! dlp(v2beta1)
 * @type object
 */

/**
 * @typedef GooglePrivacyDlpV2beta1RiskAnalysisOperationMetadata
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} createTime The time which this request was started.
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1PrivacyMetric} requestedPrivacyMetric Privacy metric to compute.
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1BigQueryTable} requestedSourceTable Input dataset to compute metrics over.
 */

/**
 * @typedef GooglePrivacyDlpV2beta1RiskAnalysisOperationResult
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1CategoricalStatsResult} categoricalStatsResult 
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1KAnonymityResult} kAnonymityResult 
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1LDiversityResult} lDiversityResult 
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1NumericalStatsResult} numericalStatsResult 
 */

/**
 * @typedef GooglePrivacyDlpV2beta1Row
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Value[]} values 
 */

/**
 * @typedef GooglePrivacyDlpV2beta1StorageConfig
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1BigQueryOptions} bigQueryOptions BigQuery options specification.
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1CloudStorageOptions} cloudStorageOptions Google Cloud Storage options specification.
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1DatastoreOptions} datastoreOptions Google Cloud Datastore options specification.
 */

/**
 * @typedef GooglePrivacyDlpV2beta1SummaryResult
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {string} code 
* @property {string} count 
* @property {string} details A place for warnings or errors to show up if a transformation didn&#39;t
work as expected.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1Table
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1FieldId[]} headers 
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Row[]} rows 
 */

/**
 * @typedef GooglePrivacyDlpV2beta1TableLocation
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} rowIndex The zero-based index of the row where the finding is located.
 */

/**
 * @typedef GooglePrivacyDlpV2beta1TimePartConfig
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} partToExtract 
 */

/**
 * @typedef GooglePrivacyDlpV2beta1TransformationSummary
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1FieldId} field Set if the transformation was limited to a specific FieldId.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1FieldTransformation[]} fieldTransformations The field transformation that was applied. This list will contain
multiple only in the case of errors.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1InfoType} infoType Set if the transformation was limited to a specific info_type.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1RecordSuppression} recordSuppress The specific suppression option these stats apply to.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1SummaryResult[]} results 
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1PrimitiveTransformation} transformation The specific transformation these stats apply to.
*/

/**
 * @typedef GooglePrivacyDlpV2beta1TransientCryptoKey
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {string} name Name of the key. [required]
This is an arbitrary string used to differentiate different keys.
A unique key is generated per name: two separate `TransientCryptoKey`
protos share the same generated key if their names are the same.
When the data crypto key is generated, this name is not used in any way
(repeating the api call will result in a different key being generated).
*/

/**
 * @typedef GooglePrivacyDlpV2beta1UnwrappedCryptoKey
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} key The AES 128/192/256 bit key. [required]
 */

/**
 * @typedef GooglePrivacyDlpV2beta1Value
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {boolean} booleanValue 
 * @property {dlp(v2beta1).GoogleTypeDate} dateValue 
 * @property {number} floatValue 
 * @property {string} integerValue 
 * @property {string} stringValue 
 * @property {dlp(v2beta1).GoogleTypeTimeOfDay} timeValue 
 * @property {string} timestampValue 
 */

/**
 * @typedef GooglePrivacyDlpV2beta1ValueFrequency
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} count How many times the value is contained in the field.
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Value} value A value contained in the field in question.
 */

/**
 * @typedef GooglePrivacyDlpV2beta1WordList
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {string[]} words Words or phrases defining the dictionary. The dictionary must contain
at least one phrase and every phrase must contain at least 2 characters
that are letters or digits. [required]
*/

/**
 * @typedef GoogleProtobufEmpty
 * @memberOf! dlp(v2beta1)
 * @type object
 */

/**
 * @typedef GoogleRpcStatus
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {integer} code The status code, which should be an enum value of google.rpc.Code.
* @property {object[]} details A list of messages that carry the error details.  There is a common set of
message types for APIs to use.
* @property {string} message A developer-facing error message, which should be in English. Any
user-facing error message should be localized and sent in the
google.rpc.Status.details field, or localized by the client.
*/

/**
 * @typedef GoogleTypeDate
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {integer} day Day of month. Must be from 1 to 31 and valid for the year and month, or 0
if specifying a year/month where the day is not significant.
* @property {integer} month Month of year. Must be from 1 to 12.
* @property {integer} year Year of date. Must be from 1 to 9999, or 0 if specifying a date without
a year.
*/

/**
 * @typedef GoogleTypeTimeOfDay
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {integer} hours Hours of day in 24 hour format. Should be from 0 to 23. An API may choose
to allow the value &quot;24:00:00&quot; for scenarios like business closing time.
* @property {integer} minutes Minutes of hour of day. Must be from 0 to 59.
* @property {integer} nanos Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
* @property {integer} seconds Seconds of minutes of the time. Must normally be from 0 to 59. An API may
allow the value 60 if it allows leap-seconds.
*/
export = Dlp;
