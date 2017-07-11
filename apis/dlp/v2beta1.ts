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

  self.inspect = {

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
         * @param {string=} params.pageToken The value returned by the last `ListInspectFindingsResponse`; indicates that this is a continuation of a prior `ListInspectFindings` call, and that the system should return the next page of data.
         * @param {string} params.name Identifier of the results set returned as metadata of the longrunning operation created by a call to CreateInspectOperation. Should be in the format of `inspect/results/{id}.
         * @param {integer=} params.pageSize Maximum number of results to return. If 0, the implementation selects a reasonable value.
         * @param {string=} params.filter Restricts findings to items that match. Supports info_type and likelihood. <p>Examples:<br/> <li>info_type=EMAIL_ADDRESS <li>info_type=PHONE_NUMBER,EMAIL_ADDRESS <li>likelihood=VERY_LIKELY <li>likelihood=VERY_LIKELY,LIKELY <li>info_type=EMAIL_ADDRESS,likelihood=VERY_LIKELY,LIKELY
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
    },

    operations: {

      /**
       * dlp.inspect.operations.cancel
       *
       * @desc Cancels an operation. Use the get method to check whether the cancellation succeeded or whether the operation completed despite cancellation.
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
       * @desc Fetch the list of long running operations.
       *
       * @alias dlp.inspect.operations.list
       * @memberOf! dlp(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.pageToken The standard list page token.
       * @param {string} params.name The name of the operation's parent resource.
       * @param {integer=} params.pageSize The list page size. The max allowed value is 256 and default is 100.
       * @param {string=} params.filter This parameter supports filtering by done, ie done=true or done=false.
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

  self.content = {

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
}

/**
 * @typedef GooglePrivacyDlpV2beta1Projection
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1PropertyReference} property The property to project.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1DatastoreKey
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Key} entityKey Datastore entity key.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1CreateInspectOperationRequest
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1InspectConfig} inspectConfig Configuration for the inspector.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1StorageConfig} storageConfig Specification of the data set to process.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1OutputStorageConfig} outputConfig Optional location to store findings. The bucket must already exist and
the Google APIs service account for DLP must have write permission to
write to the given bucket.
&lt;p&gt;Results are split over multiple csv files with each file name matching
the pattern &quot;[operation_id]_[count].csv&quot;, for example
`3094877188788974909_1.csv`. The `operation_id` matches the
identifier for the Operation, and the `count` is a counter used for
tracking the number of files written. &lt;p&gt;The CSV file(s) contain the
following columns regardless of storage type scanned: &lt;li&gt;id &lt;li&gt;info_type
&lt;li&gt;likelihood &lt;li&gt;byte size of finding &lt;li&gt;quote &lt;li&gt;time_stamp&lt;br/&gt;
&lt;p&gt;For Cloud Storage the next columns are: &lt;li&gt;file_path
&lt;li&gt;start_offset&lt;br/&gt;
&lt;p&gt;For Cloud Datastore the next columns are: &lt;li&gt;project_id
&lt;li&gt;namespace_id &lt;li&gt;path &lt;li&gt;column_name &lt;li&gt;offset
*/
/**
 * @typedef GooglePrivacyDlpV2beta1CloudStorageOptions
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1FileSet} fileSet 
 */
/**
 * @typedef GooglePrivacyDlpV2beta1RecordKey
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1CloudStorageKey} cloudStorageKey 
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1DatastoreKey} datastoreKey 
 */
/**
 * @typedef GooglePrivacyDlpV2beta1Key
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1PathElement[]} path The entity path.
An entity path consists of one or more elements composed of a kind and a
string or numerical identifier, which identify entities. The first
element identifies a _root entity_, the second element identifies
a _child_ of the root entity, the third element identifies a child of the
second entity, and so forth. The entities identified by all prefixes of
the path are called the element&#39;s _ancestors_.

A path can never be empty, and a path can have at most 100 elements.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1PartitionId} partitionId Entities are partitioned into subsets, currently identified by a project
ID and namespace ID.
Queries are scoped to a single partition.
*/
/**
 * @typedef GooglePrivacyDlpV2beta1CloudStoragePath
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} path The url, in the format of `gs://bucket/&lt;path&gt;`.
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
 * @typedef GooglePrivacyDlpV2beta1InspectOperationResult
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {string} name The server-assigned name, which is only unique within the same service that
originally returns it. If you use the default HTTP mapping, the
`name` should have the format of `inspect/results/{id}`.
*/
/**
 * @typedef GooglePrivacyDlpV2beta1InfoTypeStatistics
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1InfoType} infoType The type of finding this stat is for.
 * @property {string} count Number of findings for this info type.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1RedactContentResponse
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1ContentItem[]} items The redacted content.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1ImageRedactionConfig
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Color} redactionColor The color to use when redacting content from an image. If not specified,
the default is black.
* @property {boolean} redactAllText If true, all text found in the image, regardless if it matches an
info_type, is redacted.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1InfoType} infoType Only one per info_type should be provided per request. If not
specified, and redact_all_text is false, the DLP API will redacts all
text that it matches against all info_types that are found, but not
specified in another ImageRedactionConfig.
*/
/**
 * @typedef GooglePrivacyDlpV2beta1Range
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} start Index of the first character of the range (inclusive).
 * @property {string} end Index of the last character of the range (exclusive).
 */
/**
 * @typedef GooglePrivacyDlpV2beta1PropertyReference
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {string} name The name of the property.
If name includes &quot;.&quot;s, it may be interpreted as a property name path.
*/
/**
 * @typedef GooglePrivacyDlpV2beta1Location
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1RecordKey} recordKey Key of the finding.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Range} codepointRange Character offsets within a content item, included when content type
is a text. Default charset assumed to be UTF-8.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1FieldId} fieldId Field id of the field containing the finding.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1ImageLocation[]} imageBoxes Location within an image&#39;s pixels.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Range} byteRange Zero-based byte offsets within a content item.
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
 * @typedef GooglePrivacyDlpV2beta1ImageLocation
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {integer} top Top coordinate of the bounding box. (0,0) is upper left.
 * @property {integer} left Left coordinate of the bounding box. (0,0) is upper left.
 * @property {integer} width Width of the bounding box in pixels.
 * @property {integer} height Height of the bounding box in pixels.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1InfoTypeDescription
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1CategoryDescription[]} categories List of categories this info type belongs to.
 * @property {string} name Internal name of the info type.
 * @property {string} displayName Human readable form of the info type name.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1OutputStorageConfig
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1CloudStoragePath} storagePath The path to a Google Cloud Storage location to store output.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1StorageConfig
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1DatastoreOptions} datastoreOptions Google Cloud Datastore options specification.
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1CloudStorageOptions} cloudStorageOptions Google Cloud Storage options specification.
 */
/**
 * @typedef GoogleRpcStatus
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {string} message A developer-facing error message, which should be in English. Any
user-facing error message should be localized and sent in the
google.rpc.Status.details field, or localized by the client.
* @property {object[]} details A list of messages that carry the error details.  There is a common set of
message types for APIs to use.
* @property {integer} code The status code, which should be an enum value of google.rpc.Code.
*/
/**
 * @typedef GoogleLongrunningOperation
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {boolean} done If the value is `false`, it means the operation is still in progress.
If true, the operation is completed, and either `error` or `response` is
available.
* @property {object} response This field will contain an InspectOperationResult object.
* @property {string} name The server-assigned name, The `name` should have the format of `inspect/operations/&lt;identifier&gt;`.
* @property {dlp(v2beta1).GoogleRpcStatus} error The error result of the operation in case of failure or cancellation.
* @property {object} metadata This field will contain an InspectOperationMetadata object. This will always be returned with the Operation.
*/
/**
 * @typedef GooglePrivacyDlpV2beta1ContentItem
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {string} data Content data to inspect or redact.
* @property {string} type Type of the content, as defined in Content-Type HTTP header.
Supported types are: all &quot;text&quot; types, octet streams, PNG images,
JPEG images.
* @property {string} value String data to inspect or redact.
*/
/**
 * @typedef GooglePrivacyDlpV2beta1InspectOperationMetadata
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1OutputStorageConfig} requestOutputConfig Optional location to store findings.
 * @property {string} createTime The time which this request was started.
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1StorageConfig} requestStorageConfig The storage config used to create the Operation.
 * @property {string} processedBytes Total size in bytes that were processed.
 * @property {string} totalEstimatedBytes Estimate of the number of bytes to process.
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1InfoTypeStatistics[]} infoTypeStats 
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1InspectConfig} requestInspectConfig The inspect config used to create the Operation.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1InfoType
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {string} name Name of the information type. For built-in info types, this is provided by
the API call ListInfoTypes. For user-defined info types, this is
provided by the user. All user-defined info types must have unique names,
and cannot conflict with built-in info type names.
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
 * @typedef GooglePrivacyDlpV2beta1Color
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {number} red The amount of red in the color as a value in the interval [0, 1].
 * @property {number} blue The amount of blue in the color as a value in the interval [0, 1].
 * @property {number} green The amount of green in the color as a value in the interval [0, 1].
 */
/**
 * @typedef GooglePrivacyDlpV2beta1PathElement
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {string} name The name of the entity.
A name matching regex `__.*__` is reserved/read-only.
A name must not be more than 1500 bytes when UTF-8 encoded.
Cannot be `&quot;&quot;`.
* @property {string} kind The kind of the entity.
A kind matching regex `__.*__` is reserved/read-only.
A kind must not contain more than 1500 bytes when UTF-8 encoded.
Cannot be `&quot;&quot;`.
* @property {string} id The auto-allocated ID of the entity.
Never equal to zero. Values less than zero are discouraged and may not
be supported in the future.
*/
/**
 * @typedef GooglePrivacyDlpV2beta1CategoryDescription
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} name Internal name of the category.
 * @property {string} displayName Human readable form of the category name.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1ListInfoTypesResponse
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1InfoTypeDescription[]} infoTypes Set of sensitive info types belonging to a category.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1ListRootCategoriesResponse
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1CategoryDescription[]} categories List of all into type categories supported by the API.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1CloudStorageKey
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} startOffset Byte offset of the referenced data in the file.
 * @property {string} filePath Path to the file.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1Finding
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} createTime Timestamp when finding was detected.
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1InfoType} infoType The specific type of info the string might be.
 * @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Location} location Location of the info found.
 * @property {string} quote The specific string that may be potentially sensitive info.
 * @property {string} likelihood Estimate of how likely it is that the info_type is correct.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1PartitionId
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} projectId The ID of the project to which the entities belong.
 * @property {string} namespaceId If not empty, the ID of the namespace to which the entities belong.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1InspectContentResponse
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1InspectResult[]} results Each content_item from the request has a result in this list, in the
same order as the request.
*/
/**
 * @typedef GooglePrivacyDlpV2beta1KindExpression
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} name The name of the kind.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1RedactContentRequest
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1ReplaceConfig[]} replaceConfigs The strings to replace findings text findings with. Must specify at least
one of these or one ImageRedactionConfig if redacting images.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1ImageRedactionConfig[]} imageRedactionConfigs The configuration for specifying what content to redact from images.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1InspectConfig} inspectConfig Configuration for the inspector.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1ContentItem[]} items The list of items to inspect. Up to 100 are allowed per request.
*/
/**
 * @typedef GoogleLongrunningListOperationsResponse
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).GoogleLongrunningOperation[]} operations A list of operations that matches the specified filter in the request.
 * @property {string} nextPageToken The standard List next-page token.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1FieldId
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} columnName Column name describing the field.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1FileSet
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {string} url The url, in the format `gs://&lt;bucket&gt;/&lt;path&gt;`. Trailing wildcard in the
path is allowed.
*/
/**
 * @typedef GooglePrivacyDlpV2beta1DatastoreOptions
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1PartitionId} partitionId A partition ID identifies a grouping of entities. The grouping is always
by project and namespace, however the namespace ID may be empty.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1Projection[]} projection Properties to scan. If none are specified, all properties will be scanned
by default.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1KindExpression} kind The kind to process.
*/
/**
 * @typedef GoogleLongrunningCancelOperationRequest
 * @memberOf! dlp(v2beta1)
 * @type object
 */
/**
 * @typedef GoogleProtobufEmpty
 * @memberOf! dlp(v2beta1)
 * @type object
 */
/**
 * @typedef GooglePrivacyDlpV2beta1ListInspectFindingsResponse
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1InspectResult} result The results.
* @property {string} nextPageToken If not empty, indicates that there may be more results that match the
request; this value should be passed in a new `ListInspectFindingsRequest`.
*/
/**
 * @typedef GooglePrivacyDlpV2beta1InspectConfig
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {integer} maxFindings Limits the number of findings per content item or long running operation.
* @property {boolean} excludeTypes When true, excludes type information of the findings.
* @property {dlp(v2beta1).GooglePrivacyDlpV2beta1InfoType[]} infoTypes Restricts what info_types to look for. The values must correspond to
InfoType values returned by ListInfoTypes or found in documentation.
Empty info_types runs all enabled detectors.
* @property {boolean} includeQuote When true, a contextual quote from the data that triggered a finding is
included in the response; see Finding.quote.
* @property {string} minLikelihood Only returns findings equal or above this threshold.
*/
export = Dlp;
