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
 * DLP API
 *
 * The Google Data Loss Prevention API provides methods for detection of privacy-sensitive fragments in text, images, and Google Cloud Platform storage repositories.
 *
 * @example
 * var google = require('googleapis');
 * var dlp = google.dlp('v2beta1');
 *
 * @namespace dlp
 * @type {Function}
 * @version v2beta1
 * @variation v2beta1
 * @param {object=} options Options for Dlp
 */
function Dlp(options) { // eslint-disable-line
  var self = this;
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
         * @param {string} params.name Identifier of the results set returned as metadata of the longrunning operation created by a call to CreateInspectOperation. Should be in the format of `inspect/results/{id}.
         * @param {string=} params.pageToken The value returned by the last `ListInspectFindingsResponse`; indicates that this is a continuation of a prior `ListInspectFindings` call, and that the system should return the next page of data.
         * @param {integer=} params.pageSize Maximum number of results to return. If 0, the implementation will select a reasonable value.
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
              url: 'https://dlp.googleapis.com/v2beta1/{name}/findings',
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
       * dlp.inspect.operations.create
       *
       * @desc Schedule a job scanning content in a Google Cloud Platform data repository.
       *
       * @alias dlp.inspect.operations.create
       * @memberOf! dlp(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {dlp(v2beta1).CreateInspectOperationRequest} params.resource Request body data
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
            url: 'https://dlp.googleapis.com/v2beta1/inspect/operations',
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
       * dlp.inspect.operations.cancel
       *
       * @desc Cancels an operation. Use the get method to check whether the cancellation succeeded or whether the operation completed despite cancellation.
       *
       * @alias dlp.inspect.operations.cancel
       * @memberOf! dlp(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The name of the operation resource to be cancelled.
       * @param {dlp(v2beta1).CancelOperationRequest} params.resource Request body data
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
            url: 'https://dlp.googleapis.com/v2beta1/{name}:cancel',
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

        var parameters = {
          options: utils.extend({
            url: 'https://dlp.googleapis.com/v2beta1/{name}',
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
       * dlp.inspect.operations.list
       *
       * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE: the `name` binding below allows API services to override the binding to use different resource name schemes, such as `users/x/operations`.
       *
       * @alias dlp.inspect.operations.list
       * @memberOf! dlp(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The name of the operation collection.
       * @param {string=} params.pageToken The list page token.
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

        var parameters = {
          options: utils.extend({
            url: 'https://dlp.googleapis.com/v2beta1/{name}',
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

        var parameters = {
          options: utils.extend({
            url: 'https://dlp.googleapis.com/v2beta1/{name}',
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

  self.content = {

    /**
     * dlp.content.inspect
     *
     * @desc Find potentially sensitive info in a list of strings. This method has limits on input size, processing time, and output size.
     *
     * @alias dlp.content.inspect
     * @memberOf! dlp(v2beta1)
     *
     * @param {object} params Parameters for request
     * @param {dlp(v2beta1).InspectContentRequest} params.resource Request body data
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

      var parameters = {
        options: utils.extend({
          url: 'https://dlp.googleapis.com/v2beta1/content:inspect',
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
     * @desc Redact potentially sensitive info from a list of strings. This method has limits on input size, processing time, and output size.
     *
     * @alias dlp.content.redact
     * @memberOf! dlp(v2beta1)
     *
     * @param {object} params Parameters for request
     * @param {dlp(v2beta1).RedactContentRequest} params.resource Request body data
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

      var parameters = {
        options: utils.extend({
          url: 'https://dlp.googleapis.com/v2beta1/content:redact',
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

      var parameters = {
        options: utils.extend({
          url: 'https://dlp.googleapis.com/v2beta1/rootCategories',
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

        var parameters = {
          options: utils.extend({
            url: 'https://dlp.googleapis.com/v2beta1/rootCategories/{category}/infoTypes',
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
 * @typedef InfoTypeDescription
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} name Internal name of the info type.
 * @property {string} displayName Human readable form of the info type name.
 * @property {dlp(v2beta1).CategoryDescription[]} categories List of categories this info type belongs to.
 */
/**
 * @typedef ImageLocation
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {integer} height Height of the bounding box in pixels.
 * @property {integer} top Top coordinate of the bounding box. (0,0) is upper left.
 * @property {integer} left Left coordinate of the bounding box. (0,0) is upper left.
 * @property {integer} width Width of the bounding box in pixels.
 */
/**
 * @typedef CloudStorageKey
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} filePath Path to the file.
 * @property {string} startOffset Byte offset of the referenced data in the file.
 */
/**
 * @typedef DatastoreOptions
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).KindExpression} kind The kind to process.
* @property {dlp(v2beta1).Projection[]} projection Properties to scan. If none are specified, all properties will be scanned
by default.
* @property {dlp(v2beta1).PartitionId} partitionId A partition ID identifies a grouping of entities. The grouping is always
by project and namespace, however the namespace ID may be empty.
*/
/**
 * @typedef Empty
 * @memberOf! dlp(v2beta1)
 * @type object
 */
/**
 * @typedef DatastoreKey
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).Key} entityKey Datastore entity key.
 */
/**
 * @typedef ListRootCategoriesResponse
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).CategoryDescription[]} categories List of all into type categories supported by the API.
 */
/**
 * @typedef Location
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).RecordKey} recordKey Key of the finding.
* @property {dlp(v2beta1).Range} codepointRange Character offsets within a content item, included when content type
is a text. Default charset assumed to be UTF-8.
* @property {dlp(v2beta1).FieldId} fieldId Field id of the field containing the finding.
* @property {dlp(v2beta1).ImageLocation[]} imageBoxes Location within an image&#39;s pixels.
* @property {dlp(v2beta1).Range} byteRange Zero-based byte offsets within a content item.
*/
/**
 * @typedef ListInspectFindingsResponse
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).InspectResult} result The results.
* @property {string} nextPageToken If not empty, indicates that there may be more results that match the
request; this value should be passed in a new `ListInspectFindingsRequest`.
*/
/**
 * @typedef RecordKey
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).CloudStorageKey} cloudStorageKey 
 * @property {dlp(v2beta1).DatastoreKey} datastoreKey 
 */
/**
 * @typedef ContentItem
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {string} value String data to inspect or redact.
* @property {string} data Content data to inspect or redact.
* @property {string} type Type of the content, as defined in Content-Type HTTP header.
Supported types are: all &quot;text&quot; types, octet streams, PNG images,
JPEG images.
*/
/**
 * @typedef InspectContentResponse
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).InspectResult[]} results Each content_item from the request will have a result in this list, in the
same order as the request.
*/
/**
 * @typedef CreateInspectOperationRequest
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).InspectConfig} inspectConfig Configuration for the inspector.
 * @property {dlp(v2beta1).StorageConfig} storageConfig Specification of the data set to process.
 */
/**
 * @typedef Finding
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} likelihood Estimate of how likely it is that the info_type is correct.
 * @property {dlp(v2beta1).InfoType} infoType The specific type of info the string might be.
 * @property {string} createTime Timestamp when finding was detected.
 * @property {string} quote The specific string that may be potentially sensitive info.
 * @property {dlp(v2beta1).Location} location Location of the info found.
 */
/**
 * @typedef FileSet
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {string} url The url, in the format gs://&lt;bucket&gt;/&lt;path&gt;. Trailing wildcard in the
path is allowed.
*/
/**
 * @typedef ReplaceConfig
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {string} replaceWith Content replacing sensitive information of given type. Max 256 chars.
* @property {dlp(v2beta1).InfoType} infoType Type of information to replace. Only one ReplaceConfig per info_type
should be provided. If ReplaceConfig does not have an info_type, we&#39;ll
match it against all info_types that are found but not specified in
another ReplaceConfig.
*/
/**
 * @typedef InfoType
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} name Name of the information type, provided by the API call ListInfoTypes.
 */
/**
 * @typedef InspectConfig
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {string} minLikelihood Only return findings equal or above this threshold.
* @property {integer} maxFindings Limit the number of findings per content item.
* @property {dlp(v2beta1).InfoType[]} infoTypes Restrict what info_types to look for. The values must correspond to
InfoType values returned by ListInfoTypes or found in documentation.
Empty info_types runs all enabled detectors.
* @property {boolean} excludeTypes When true, exclude type information of the findings.
* @property {boolean} includeQuote When true, a contextual quote from the data that triggered a finding will
be included in the response; see Finding.quote.
*/
/**
 * @typedef StorageConfig
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).CloudStorageOptions} cloudStorageOptions Google Cloud Storage options specification.
 * @property {dlp(v2beta1).DatastoreOptions} datastoreOptions Google Cloud Datastore options specification.
 */
/**
 * @typedef RedactContentRequest
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).ContentItem[]} items The list of items to inspect. Up to 100 are allowed per request.
 * @property {dlp(v2beta1).ReplaceConfig[]} replaceConfigs The strings to replace findings with. Must specify at least one.
 * @property {dlp(v2beta1).InspectConfig} inspectConfig Configuration for the inspector.
 */
/**
 * @typedef PartitionId
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {string} projectId The ID of the project to which the entities belong.
* @property {string} databaseId If not empty, the ID of the database to which the entities
belong.
* @property {string} namespaceId If not empty, the ID of the namespace to which the entities belong.
*/
/**
 * @typedef CategoryDescription
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} name Internal name of the category.
 * @property {string} displayName Human readable form of the category name.
 */
/**
 * @typedef CancelOperationRequest
 * @memberOf! dlp(v2beta1)
 * @type object
 */
/**
 * @typedef Operation
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {string} name The server-assigned name, The `name` should have the format of `inspect/operations/&lt;identifier&gt;`.
* @property {dlp(v2beta1).Status} error The error result of the operation in case of failure or cancellation.
* @property {object} metadata This field will contain an `InspectOperationMetdata` object.
* @property {boolean} done If the value is `false`, it means the operation is still in progress.
If true, the operation is completed, and either `error` or `response` is
available.
* @property {object} response This field will contain an `InspectOperationResult` object.
*/
/**
 * @typedef CloudStorageOptions
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).FileSet} fileSet 
 */
/**
 * @typedef PathElement
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
 * @typedef InspectResult
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {boolean} findingsTruncated If true, then this item might have more findings than were returned,
and the findings returned are an arbitrary subset of all findings.
The findings list might be truncated because the input items were too
large, or because the server reached the maximum amount of resources
allowed for a single API call. For best results, divide the input into
smaller batches.
* @property {dlp(v2beta1).Finding[]} findings List of findings for an item.
*/
/**
 * @typedef Status
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {string} message A developer-facing error message, which should be in English. Any
user-facing error message should be localized and sent in the
google.rpc.Status.details field, or localized by the client.
* @property {object[]} details A list of messages that carry the error details.  There will be a
common set of message types for APIs to use.
* @property {integer} code The status code, which should be an enum value of google.rpc.Code.
*/
/**
 * @typedef RedactContentResponse
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).ContentItem[]} items The redacted content.
 */
/**
 * @typedef Range
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} start Index of the first character of the range (inclusive).
 * @property {string} end Index of the last character of the range (exclusive).
 */
/**
 * @typedef FieldId
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} columnName Column name describing the field.
 */
/**
 * @typedef KindExpression
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} name The name of the kind.
 */
/**
 * @typedef ListInfoTypesResponse
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).InfoTypeDescription[]} infoTypes Set of sensitive info types belonging to a category.
 */
/**
 * @typedef InspectContentRequest
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).InspectConfig} inspectConfig Configuration for the inspector.
* @property {dlp(v2beta1).ContentItem[]} items The list of items to inspect. Items in a single request are
considered &quot;related&quot; unless inspect_config.independent_inputs is true.
Up to 100 are allowed per request.
*/
/**
 * @typedef ListOperationsResponse
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {string} nextPageToken The standard List next-page token.
 * @property {dlp(v2beta1).Operation[]} operations A list of operations that matches the specified filter in the request.
 */
/**
 * @typedef Key
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {dlp(v2beta1).PathElement[]} path The entity path.
An entity path consists of one or more elements composed of a kind and a
string or numerical identifier, which identify entities. The first
element identifies a _root entity_, the second element identifies
a _child_ of the root entity, the third element identifies a child of the
second entity, and so forth. The entities identified by all prefixes of
the path are called the element&#39;s _ancestors_.

A path can never be empty, and a path can have at most 100 elements.
* @property {dlp(v2beta1).PartitionId} partitionId Entities are partitioned into subsets, currently identified by a project
ID and namespace ID.
Queries are scoped to a single partition.
*/
/**
 * @typedef PropertyReference
 * @memberOf! dlp(v2beta1)
 * @type object
* @property {string} name The name of the property.
If name includes &quot;.&quot;s, it may be interpreted as a property name path.
*/
/**
 * @typedef Projection
 * @memberOf! dlp(v2beta1)
 * @type object
 * @property {dlp(v2beta1).PropertyReference} property The property to project.
 */
module.exports = Dlp;
