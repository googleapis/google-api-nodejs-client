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
 * Google Cloud Datastore API
 *
 * Accesses the schemaless NoSQL database to provide fully managed, robust, scalable storage for your application.

 *
 * @example
 * const google = require('googleapis');
 * const datastore = google.datastore('v1beta1');
 *
 * @namespace datastore
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Datastore
 */
function Datastore(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.projects = {

    /**
     * datastore.projects.export
     *
     * @desc Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. Recent updates to entities may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
     *
     * @alias datastore.projects.export
     * @memberOf! datastore(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId Project ID against which to make the request.
     * @param {datastore(v1beta1).GoogleDatastoreAdminV1beta1ExportEntitiesRequest} params.resource Request body data
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

      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1beta1/projects/{projectId}:export').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * datastore.projects.import
     *
     * @desc Imports entities into Google Cloud Datastore. Existing entities with the same key are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportEntities operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Datastore.
     *
     * @alias datastore.projects.import
     * @memberOf! datastore(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId Project ID against which to make the request.
     * @param {datastore(v1beta1).GoogleDatastoreAdminV1beta1ImportEntitiesRequest} params.resource Request body data
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

      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1beta1/projects/{projectId}:import').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * @typedef GoogleDatastoreAdminV1beta1CommonMetadata
 * @memberOf! datastore(v1beta1)
 * @type object
* @property {string} endTime The time the operation ended, either successfully or otherwise.
* @property {object} labels The client-assigned labels which were provided when the operation was
created. May also include additional labels.
* @property {string} operationType The type of the operation. Can be used as a filter in
ListOperationsRequest.
* @property {string} startTime The time that work began on the operation.
* @property {string} state The current state of the Operation.
*/

/**
 * @typedef GoogleDatastoreAdminV1beta1EntityFilter
 * @memberOf! datastore(v1beta1)
 * @type object
* @property {string[]} kinds If empty, then this represents all kinds.
* @property {string[]} namespaceIds An empty list represents all namespaces. This is the preferred
usage for projects that don&#39;t use namespaces.

An empty string element represents the default namespace. This should be
used if the project has data in non-default namespaces, but doesn&#39;t want to
include them.
Each namespace in this list must be unique.
*/

/**
 * @typedef GoogleDatastoreAdminV1beta1ExportEntitiesMetadata
 * @memberOf! datastore(v1beta1)
 * @type object
* @property {datastore(v1beta1).GoogleDatastoreAdminV1beta1CommonMetadata} common Metadata common to all Datastore Admin operations.
* @property {datastore(v1beta1).GoogleDatastoreAdminV1beta1EntityFilter} entityFilter Description of which entities are being exported.
* @property {string} outputUrlPrefix Location for the export metadata and data files. This will be the same
value as the
google.datastore.admin.v1beta1.ExportEntitiesRequest.output_url_prefix
field. The final output location is provided in
google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url.
* @property {datastore(v1beta1).GoogleDatastoreAdminV1beta1Progress} progressBytes An estimate of the number of bytes processed.
* @property {datastore(v1beta1).GoogleDatastoreAdminV1beta1Progress} progressEntities An estimate of the number of entities processed.
*/

/**
 * @typedef GoogleDatastoreAdminV1beta1ExportEntitiesRequest
 * @memberOf! datastore(v1beta1)
 * @type object
* @property {datastore(v1beta1).GoogleDatastoreAdminV1beta1EntityFilter} entityFilter Description of what data from the project is included in the export.
* @property {object} labels Client-assigned labels.
* @property {string} outputUrlPrefix Location for the export metadata and data files.

The full resource URL of the external storage location. Currently, only
Google Cloud Storage is supported. So output_url_prefix should be of the
form: `gs://BUCKET_NAME[/NAMESPACE_PATH]`, where `BUCKET_NAME` is the
name of the Cloud Storage bucket and `NAMESPACE_PATH` is an optional Cloud
Storage namespace path (this is not a Cloud Datastore namespace). For more
information about Cloud Storage namespace paths, see
[Object name
considerations](https://cloud.google.com/storage/docs/naming#object-considerations).

The resulting files will be nested deeper than the specified URL prefix.
The final output URL will be provided in the
google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url
field. That value should be used for subsequent ImportEntities operations.

By nesting the data files deeper, the same Cloud Storage bucket can be used
in multiple ExportEntities operations without conflict.
*/

/**
 * @typedef GoogleDatastoreAdminV1beta1ExportEntitiesResponse
 * @memberOf! datastore(v1beta1)
 * @type object
* @property {string} outputUrl Location of the output metadata file. This can be used to begin an import
into Cloud Datastore (this project or another project). See
google.datastore.admin.v1beta1.ImportEntitiesRequest.input_url.
Only present if the operation completed successfully.
*/

/**
 * @typedef GoogleDatastoreAdminV1beta1ImportEntitiesMetadata
 * @memberOf! datastore(v1beta1)
 * @type object
* @property {datastore(v1beta1).GoogleDatastoreAdminV1beta1CommonMetadata} common Metadata common to all Datastore Admin operations.
* @property {datastore(v1beta1).GoogleDatastoreAdminV1beta1EntityFilter} entityFilter Description of which entities are being imported.
* @property {string} inputUrl The location of the import metadata file. This will be the same value as
the google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url
field.
* @property {datastore(v1beta1).GoogleDatastoreAdminV1beta1Progress} progressBytes An estimate of the number of bytes processed.
* @property {datastore(v1beta1).GoogleDatastoreAdminV1beta1Progress} progressEntities An estimate of the number of entities processed.
*/

/**
 * @typedef GoogleDatastoreAdminV1beta1ImportEntitiesRequest
 * @memberOf! datastore(v1beta1)
 * @type object
* @property {datastore(v1beta1).GoogleDatastoreAdminV1beta1EntityFilter} entityFilter Optionally specify which kinds/namespaces are to be imported. If provided,
the list must be a subset of the EntityFilter used in creating the export,
otherwise a FAILED_PRECONDITION error will be returned. If no filter is
specified then all entities from the export are imported.
* @property {string} inputUrl The full resource URL of the external storage location. Currently, only
Google Cloud Storage is supported. So input_url should be of the form:
`gs://BUCKET_NAME[/NAMESPACE_PATH]/OVERALL_EXPORT_METADATA_FILE`, where
`BUCKET_NAME` is the name of the Cloud Storage bucket, `NAMESPACE_PATH` is
an optional Cloud Storage namespace path (this is not a Cloud Datastore
namespace), and `OVERALL_EXPORT_METADATA_FILE` is the metadata file written
by the ExportEntities operation. For more information about Cloud Storage
namespace paths, see
[Object name
considerations](https://cloud.google.com/storage/docs/naming#object-considerations).

For more information, see
google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url.
* @property {object} labels Client-assigned labels.
*/

/**
 * @typedef GoogleDatastoreAdminV1beta1Progress
 * @memberOf! datastore(v1beta1)
 * @type object
* @property {string} workCompleted The amount of work that has been completed. Note that this may be greater
than work_estimated.
* @property {string} workEstimated An estimate of how much work needs to be performed. May be zero if the
work estimate is unavailable.
*/

/**
 * @typedef GoogleLongrunningOperation
 * @memberOf! datastore(v1beta1)
 * @type object
* @property {boolean} done If the value is `false`, it means the operation is still in progress.
If `true`, the operation is completed, and either `error` or `response` is
available.
* @property {datastore(v1beta1).Status} error The error result of the operation in case of failure or cancellation.
* @property {object} metadata Service-specific metadata associated with the operation.  It typically
contains progress information and common metadata such as create time.
Some services might not provide such metadata.  Any method that returns a
long-running operation should document the metadata type, if any.
* @property {string} name The server-assigned name, which is only unique within the same service that
originally returns it. If you use the default HTTP mapping, the
`name` should have the format of `operations/some/unique/name`.
* @property {object} response The normal response of the operation in case of success.  If the original
method returns no data on success, such as `Delete`, the response is
`google.protobuf.Empty`.  If the original method is standard
`Get`/`Create`/`Update`, the response should be the resource.  For other
methods, the response should have the type `XxxResponse`, where `Xxx`
is the original method name.  For example, if the original method name
is `TakeSnapshot()`, the inferred response type is
`TakeSnapshotResponse`.
*/

/**
 * @typedef Status
 * @memberOf! datastore(v1beta1)
 * @type object
* @property {integer} code The status code, which should be an enum value of google.rpc.Code.
* @property {object[]} details A list of messages that carry the error details.  There is a common set of
message types for APIs to use.
* @property {string} message A developer-facing error message, which should be in English. Any
user-facing error message should be localized and sent in the
google.rpc.Status.details field, or localized by the client.
*/
export = Datastore;
