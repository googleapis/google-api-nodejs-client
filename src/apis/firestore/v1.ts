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

import {AxiosPromise} from 'axios';
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';
import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from 'googleapis-common';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace firestore_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API
     * access, quota, and reports. Required unless you provide an OAuth 2.0
     * token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be
     * any arbitrary string assigned to a user, but should not exceed 40
     * characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Cloud Firestore API
   *
   * Accesses the NoSQL document database built for automatic scaling, high
   * performance, and ease of application development.
   *
   * @example
   * const {google} = require('googleapis');
   * const firestore = google.firestore('v1');
   *
   * @namespace firestore
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Firestore
   */
  export class Firestore {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.projects = new Resource$Projects(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * A generic empty message that you can re-use to avoid defining duplicated
   * empty messages in your APIs. A typical example is to use it as the request
   * or the response type of an API method. For instance:      service Foo { rpc
   * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
   * representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * Metadata for google.longrunning.Operation results from
   * FirestoreAdmin.ExportDocuments.
   */
  export interface Schema$GoogleFirestoreAdminV1ExportDocumentsMetadata {
    /**
     * Which collection ids are being exported.
     */
    collectionIds?: string[];
    /**
     * The time this operation completed. Will be unset if operation still in
     * progress.
     */
    endTime?: string;
    /**
     * The state of the export operation.
     */
    operationState?: string;
    /**
     * Where the entities are being exported to.
     */
    outputUriPrefix?: string;
    /**
     * The progress, in bytes, of this operation.
     */
    progressBytes?: Schema$GoogleFirestoreAdminV1Progress;
    /**
     * The progress, in documents, of this operation.
     */
    progressDocuments?: Schema$GoogleFirestoreAdminV1Progress;
    /**
     * The time this operation started.
     */
    startTime?: string;
  }
  /**
   * The request for FirestoreAdmin.ExportDocuments.
   */
  export interface Schema$GoogleFirestoreAdminV1ExportDocumentsRequest {
    /**
     * Which collection ids to export. Unspecified means all collections.
     */
    collectionIds?: string[];
    /**
     * The output URI. Currently only supports Google Cloud Storage URIs of the
     * form: `gs://BUCKET_NAME[/NAMESPACE_PATH]`, where `BUCKET_NAME` is the
     * name of the Google Cloud Storage bucket and `NAMESPACE_PATH` is an
     * optional Google Cloud Storage namespace path. When choosing a name, be
     * sure to consider Google Cloud Storage naming guidelines:
     * https://cloud.google.com/storage/docs/naming. If the URI is a bucket
     * (without a namespace path), a prefix will be generated based on the start
     * time.
     */
    outputUriPrefix?: string;
  }
  /**
   * Returned in the google.longrunning.Operation response field.
   */
  export interface Schema$GoogleFirestoreAdminV1ExportDocumentsResponse {
    /**
     * Location of the output files. This can be used to begin an import into
     * Cloud Firestore (this project or another project) after the operation
     * completes successfully.
     */
    outputUriPrefix?: string;
  }
  /**
   * Represents a single field in the database.  Fields are grouped by their
   * &quot;Collection Group&quot;, which represent all collections in the
   * database with the same id.
   */
  export interface Schema$GoogleFirestoreAdminV1Field {
    /**
     * The index configuration for this field. If unset, field indexing will
     * revert to the configuration defined by the `ancestor_field`. To
     * explicitly remove all indexes for this field, specify an index config
     * with an empty list of indexes.
     */
    indexConfig?: Schema$GoogleFirestoreAdminV1IndexConfig;
    /**
     * A field name of the form
     * `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}`
     * A field path may be a simple field name, e.g. `address` or a path to
     * fields within map_value , e.g. `address.city`, or a special field path.
     * The only valid special field is `*`, which represents any field.  Field
     * paths may be quoted using ` (backtick). The only character that needs to
     * be escaped within a quoted field path is the backtick character itself,
     * escaped using a backslash. Special characters in field paths that must be
     * quoted include: `*`, `.`, ``` (backtick), `[`, `]`, as well as any ascii
     * symbolic characters.  Examples: (Note: Comments here are written in
     * markdown syntax, so there is an  additional layer of backticks to
     * represent a code block) `\`address.city\`` represents a field named
     * `address.city`, not the map key `city` in the field `address`. `\`*\``
     * represents a field named `*`, not any field.  A special `Field` contains
     * the default indexing settings for all fields. This field&#39;s resource
     * name is:
     * `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/x
     * Indexes defined on this `Field` will be applied to all fields which do
     * not have their own `Field` index configuration.
     */
    name?: string;
  }
  /**
   * Metadata for google.longrunning.Operation results from
   * FirestoreAdmin.UpdateField.
   */
  export interface Schema$GoogleFirestoreAdminV1FieldOperationMetadata {
    /**
     * The time this operation completed. Will be unset if operation still in
     * progress.
     */
    endTime?: string;
    /**
     * The field resource that this operation is acting on. For example:
     * `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}`
     */
    field?: string;
    /**
     * A list of IndexConfigDelta, which describe the intent of this operation.
     */
    indexConfigDeltas?: Schema$GoogleFirestoreAdminV1IndexConfigDelta[];
    /**
     * The progress, in bytes, of this operation.
     */
    progressBytes?: Schema$GoogleFirestoreAdminV1Progress;
    /**
     * The progress, in documents, of this operation.
     */
    progressDocuments?: Schema$GoogleFirestoreAdminV1Progress;
    /**
     * The time this operation started.
     */
    startTime?: string;
    /**
     * The state of the operation.
     */
    state?: string;
  }
  /**
   * Metadata for google.longrunning.Operation results from
   * FirestoreAdmin.ImportDocuments.
   */
  export interface Schema$GoogleFirestoreAdminV1ImportDocumentsMetadata {
    /**
     * Which collection ids are being imported.
     */
    collectionIds?: string[];
    /**
     * The time this operation completed. Will be unset if operation still in
     * progress.
     */
    endTime?: string;
    /**
     * The location of the documents being imported.
     */
    inputUriPrefix?: string;
    /**
     * The state of the import operation.
     */
    operationState?: string;
    /**
     * The progress, in bytes, of this operation.
     */
    progressBytes?: Schema$GoogleFirestoreAdminV1Progress;
    /**
     * The progress, in documents, of this operation.
     */
    progressDocuments?: Schema$GoogleFirestoreAdminV1Progress;
    /**
     * The time this operation started.
     */
    startTime?: string;
  }
  /**
   * The request for FirestoreAdmin.ImportDocuments.
   */
  export interface Schema$GoogleFirestoreAdminV1ImportDocumentsRequest {
    /**
     * Which collection ids to import. Unspecified means all collections
     * included in the import.
     */
    collectionIds?: string[];
    /**
     * Location of the exported files. This must match the output_uri_prefix of
     * an ExportDocumentsResponse from an export that has completed
     * successfully. See:
     * google.firestore.admin.v1.ExportDocumentsResponse.output_uri_prefix.
     */
    inputUriPrefix?: string;
  }
  /**
   * Cloud Firestore indexes enable simple and complex queries against documents
   * in a database.
   */
  export interface Schema$GoogleFirestoreAdminV1Index {
    /**
     * The fields supported by this index.  For composite indexes, this is
     * always 2 or more fields. The last field entry is always for the field
     * path `__name__`. If, on creation, `__name__` was not specified as the
     * last field, it will be added automatically with the same direction as
     * that of the last field defined. If the final field in a composite index
     * is not directional, the `__name__` will be ordered ASCENDING (unless
     * explicitly specified).  For single field indexes, this will always be
     * exactly one entry with a field path equal to the field path of the
     * associated field.
     */
    fields?: Schema$GoogleFirestoreAdminV1IndexField[];
    /**
     * Output only. A server defined name for this index. The form of this name
     * for composite indexes will be:
     * `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{composite_index_id}`
     * For single field indexes, this field will be empty.
     */
    name?: string;
    /**
     * Indexes with a collection query scope specified allow queries against a
     * collection that is the child of a specific document, specified at query
     * time, and that has the same collection id.  Indexes with a collection
     * group query scope specified allow queries against all collections
     * descended from a specific document, specified at query time, and that
     * have the same collection id as this index.
     */
    queryScope?: string;
    /**
     * Output only. The serving state of the index.
     */
    state?: string;
  }
  /**
   * The index configuration for this field.
   */
  export interface Schema$GoogleFirestoreAdminV1IndexConfig {
    /**
     * Output only. Specifies the resource name of the `Field` from which this
     * field&#39;s index configuration is set (when `uses_ancestor_config` is
     * true), or from which it *would* be set if this field had no index
     * configuration (when `uses_ancestor_config` is false).
     */
    ancestorField?: string;
    /**
     * The indexes supported for this field.
     */
    indexes?: Schema$GoogleFirestoreAdminV1Index[];
    /**
     * Output only When true, the `Field`&#39;s index configuration is in the
     * process of being reverted. Once complete, the index config will
     * transition to the same state as the field specified by `ancestor_field`,
     * at which point `uses_ancestor_config` will be `true` and `reverting` will
     * be `false`.
     */
    reverting?: boolean;
    /**
     * Output only. When true, the `Field`&#39;s index configuration is set from
     * the configuration specified by the `ancestor_field`. When false, the
     * `Field`&#39;s index configuration is defined explicitly.
     */
    usesAncestorConfig?: boolean;
  }
  /**
   * Information about an index configuration change.
   */
  export interface Schema$GoogleFirestoreAdminV1IndexConfigDelta {
    /**
     * Specifies how the index is changing.
     */
    changeType?: string;
    /**
     * The index being changed.
     */
    index?: Schema$GoogleFirestoreAdminV1Index;
  }
  /**
   * A field in an index. The field_path describes which field is indexed, the
   * value_mode describes how the field value is indexed.
   */
  export interface Schema$GoogleFirestoreAdminV1IndexField {
    /**
     * Indicates that this field supports operations on `array_value`s.
     */
    arrayConfig?: string;
    /**
     * Can be __name__. For single field indexes, this must match the name of
     * the field or may be omitted.
     */
    fieldPath?: string;
    /**
     * Indicates that this field supports ordering by the specified order or
     * comparing using =, &lt;, &lt;=, &gt;, &gt;=.
     */
    order?: string;
  }
  /**
   * Metadata for google.longrunning.Operation results from
   * FirestoreAdmin.CreateIndex.
   */
  export interface Schema$GoogleFirestoreAdminV1IndexOperationMetadata {
    /**
     * The time this operation completed. Will be unset if operation still in
     * progress.
     */
    endTime?: string;
    /**
     * The index resource that this operation is acting on. For example:
     * `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}`
     */
    index?: string;
    /**
     * The progress, in bytes, of this operation.
     */
    progressBytes?: Schema$GoogleFirestoreAdminV1Progress;
    /**
     * The progress, in documents, of this operation.
     */
    progressDocuments?: Schema$GoogleFirestoreAdminV1Progress;
    /**
     * The time this operation started.
     */
    startTime?: string;
    /**
     * The state of the operation.
     */
    state?: string;
  }
  /**
   * The response for FirestoreAdmin.ListFields.
   */
  export interface Schema$GoogleFirestoreAdminV1ListFieldsResponse {
    /**
     * The requested fields.
     */
    fields?: Schema$GoogleFirestoreAdminV1Field[];
    /**
     * A page token that may be used to request another page of results. If
     * blank, this is the last page.
     */
    nextPageToken?: string;
  }
  /**
   * The response for FirestoreAdmin.ListIndexes.
   */
  export interface Schema$GoogleFirestoreAdminV1ListIndexesResponse {
    /**
     * The requested indexes.
     */
    indexes?: Schema$GoogleFirestoreAdminV1Index[];
    /**
     * A page token that may be used to request another page of results. If
     * blank, this is the last page.
     */
    nextPageToken?: string;
  }
  /**
   * The metadata message for google.cloud.location.Location.metadata.
   */
  export interface Schema$GoogleFirestoreAdminV1LocationMetadata {}
  /**
   * Describes the progress of the operation. Unit of work is generic and must
   * be interpreted based on where Progress is used.
   */
  export interface Schema$GoogleFirestoreAdminV1Progress {
    /**
     * The amount of work completed.
     */
    completedWork?: string;
    /**
     * The amount of work estimated.
     */
    estimatedWork?: string;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$GoogleLongrunningCancelOperationRequest {}
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$GoogleLongrunningListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$GoogleLongrunningOperation[];
  }
  /**
   * This resource represents a long-running operation that is the result of a
   * network API call.
   */
  export interface Schema$GoogleLongrunningOperation {
    /**
     * If the value is `false`, it means the operation is still in progress. If
     * `true`, the operation is completed, and either `error` or `response` is
     * available.
     */
    done?: boolean;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
    /**
     * Service-specific metadata associated with the operation.  It typically
     * contains progress information and common metadata such as create time.
     * Some services might not provide such metadata.  Any method that returns a
     * long-running operation should document the metadata type, if any.
     */
    metadata?: any;
    /**
     * The server-assigned name, which is only unique within the same service
     * that originally returns it. If you use the default HTTP mapping, the
     * `name` should have the format of `operations/some/unique/name`.
     */
    name?: string;
    /**
     * The normal response of the operation in case of success.  If the original
     * method returns no data on success, such as `Delete`, the response is
     * `google.protobuf.Empty`.  If the original method is standard
     * `Get`/`Create`/`Update`, the response should be the resource.  For other
     * methods, the response should have the type `XxxResponse`, where `Xxx` is
     * the original method name.  For example, if the original method name is
     * `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: any;
  }
  /**
   * The response message for Locations.ListLocations.
   */
  export interface Schema$ListLocationsResponse {
    /**
     * A list of locations that matches the specified filter in the request.
     */
    locations?: Schema$Location[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
  }
  /**
   * A resource that represents Google Cloud Platform location.
   */
  export interface Schema$Location {
    /**
     * The friendly name for this location, typically a nearby city name. For
     * example, &quot;Tokyo&quot;.
     */
    displayName?: string;
    /**
     * Cross-service attributes for the location. For example
     * {&quot;cloud.googleapis.com/region&quot;: &quot;us-east1&quot;}
     */
    labels?: any;
    /**
     * The canonical id for this location. For example: `&quot;us-east1&quot;`.
     */
    locationId?: string;
    /**
     * Service-specific metadata. For example the available capacity at the
     * given location.
     */
    metadata?: any;
    /**
     * Resource name for the location, which may vary between implementations.
     * For example: `&quot;projects/example-project/locations/us-east1&quot;`
     */
    name?: string;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for
   * different programming environments, including REST APIs and RPC APIs. It is
   * used by [gRPC](https://github.com/grpc). The error model is designed to be:
   * - Simple to use and understand for most users - Flexible enough to meet
   * unexpected needs  # Overview  The `Status` message contains three pieces of
   * data: error code, error message, and error details. The error code should
   * be an enum value of google.rpc.Code, but it may accept additional error
   * codes if needed.  The error message should be a developer-facing English
   * message that helps developers *understand* and *resolve* the error. If a
   * localized user-facing error message is needed, put the localized message in
   * the error details or localize it in the client. The optional error details
   * may contain arbitrary information about the error. There is a predefined
   * set of error detail types in the package `google.rpc` that can be used for
   * common error conditions.  # Language mapping  The `Status` message is the
   * logical representation of the error model, but it is not necessarily the
   * actual wire format. When the `Status` message is exposed in different
   * client libraries and different wire protocols, it can be mapped
   * differently. For example, it will likely be mapped to some exceptions in
   * Java, but more likely mapped to some error codes in C.  # Other uses  The
   * error model and the `Status` message can be used in a variety of
   * environments, either with or without APIs, to provide a consistent
   * developer experience across different environments.  Example uses of this
   * error model include:  - Partial errors. If a service needs to return
   * partial errors to the client,     it may embed the `Status` in the normal
   * response to indicate the partial     errors.  - Workflow errors. A typical
   * workflow has multiple steps. Each step may     have a `Status` message for
   * error reporting.  - Batch operations. If a client uses batch request and
   * batch response, the     `Status` message should be used directly inside
   * batch response, one for     each error sub-response.  - Asynchronous
   * operations. If an API call embeds asynchronous operation     results in its
   * response, the status of those operations should be     represented directly
   * using the `Status` message.  - Logging. If some API errors are stored in
   * logs, the message `Status` could     be used directly after any stripping
   * needed for security/privacy reasons.
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number;
    /**
     * A list of messages that carry the error details.  There is a common set
     * of message types for APIs to use.
     */
    details?: any[];
    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  }


  export class Resource$Projects {
    root: Firestore;
    databases: Resource$Projects$Databases;
    locations: Resource$Projects$Locations;
    constructor(root: Firestore) {
      this.root = root;
      this.getRoot.bind(this);
      this.databases = new Resource$Projects$Databases(root);
      this.locations = new Resource$Projects$Locations(root);
    }

    getRoot() {
      return this.root;
    }
  }


  export class Resource$Projects$Databases {
    root: Firestore;
    collectionGroups: Resource$Projects$Databases$Collectiongroups;
    operations: Resource$Projects$Databases$Operations;
    constructor(root: Firestore) {
      this.root = root;
      this.getRoot.bind(this);
      this.collectionGroups =
          new Resource$Projects$Databases$Collectiongroups(root);
      this.operations = new Resource$Projects$Databases$Operations(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * firestore.projects.databases.exportDocuments
     * @desc Exports a copy of all or a subset of documents from Google Cloud
     * Firestore to another storage system, such as Google Cloud Storage. Recent
     * updates to documents may not be reflected in the export. The export
     * occurs in the background and its progress can be monitored and managed
     * via the Operation resource that is created. The output of an export may
     * only be used once the associated operation is done. If an export
     * operation is cancelled before completion it may leave partial data behind
     * in Google Cloud Storage.
     * @alias firestore.projects.databases.exportDocuments
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Database to export. Should be of the form: `projects/{project_id}/databases/{database_id}`.
     * @param {().GoogleFirestoreAdminV1ExportDocumentsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    exportDocuments(
        params?: Params$Resource$Projects$Databases$Exportdocuments,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleLongrunningOperation>;
    exportDocuments(
        params: Params$Resource$Projects$Databases$Exportdocuments,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    exportDocuments(
        params: Params$Resource$Projects$Databases$Exportdocuments,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    exportDocuments(
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    exportDocuments(
        paramsOrCallback?: Params$Resource$Projects$Databases$Exportdocuments|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void|AxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Databases$Exportdocuments;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Exportdocuments;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}:exportDocuments')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }


    /**
     * firestore.projects.databases.importDocuments
     * @desc Imports documents into Google Cloud Firestore. Existing documents
     * with the same name are overwritten. The import occurs in the background
     * and its progress can be monitored and managed via the Operation resource
     * that is created. If an ImportDocuments operation is cancelled, it is
     * possible that a subset of the data has already been imported to Cloud
     * Firestore.
     * @alias firestore.projects.databases.importDocuments
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Database to import into. Should be of the form: `projects/{project_id}/databases/{database_id}`.
     * @param {().GoogleFirestoreAdminV1ImportDocumentsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    importDocuments(
        params?: Params$Resource$Projects$Databases$Importdocuments,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleLongrunningOperation>;
    importDocuments(
        params: Params$Resource$Projects$Databases$Importdocuments,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    importDocuments(
        params: Params$Resource$Projects$Databases$Importdocuments,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    importDocuments(
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    importDocuments(
        paramsOrCallback?: Params$Resource$Projects$Databases$Importdocuments|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void|AxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Databases$Importdocuments;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Importdocuments;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}:importDocuments')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Databases$Exportdocuments extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Database to export. Should be of the form:
     * `projects/{project_id}/databases/{database_id}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirestoreAdminV1ExportDocumentsRequest;
  }
  export interface Params$Resource$Projects$Databases$Importdocuments extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Database to import into. Should be of the form:
     * `projects/{project_id}/databases/{database_id}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirestoreAdminV1ImportDocumentsRequest;
  }

  export class Resource$Projects$Databases$Collectiongroups {
    root: Firestore;
    fields: Resource$Projects$Databases$Collectiongroups$Fields;
    indexes: Resource$Projects$Databases$Collectiongroups$Indexes;
    constructor(root: Firestore) {
      this.root = root;
      this.getRoot.bind(this);
      this.fields =
          new Resource$Projects$Databases$Collectiongroups$Fields(root);
      this.indexes =
          new Resource$Projects$Databases$Collectiongroups$Indexes(root);
    }

    getRoot() {
      return this.root;
    }
  }


  export class Resource$Projects$Databases$Collectiongroups$Fields {
    root: Firestore;
    constructor(root: Firestore) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * firestore.projects.databases.collectionGroups.fields.get
     * @desc Gets the metadata and configuration for a Field.
     * @alias firestore.projects.databases.collectionGroups.fields.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name A name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Databases$Collectiongroups$Fields$Get,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleFirestoreAdminV1Field>;
    get(params: Params$Resource$Projects$Databases$Collectiongroups$Fields$Get,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleFirestoreAdminV1Field>,
        callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1Field>):
        void;
    get(params: Params$Resource$Projects$Databases$Collectiongroups$Fields$Get,
        callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1Field>):
        void;
    get(callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1Field>):
        void;
    get(paramsOrCallback?:
            Params$Resource$Projects$Databases$Collectiongroups$Fields$Get|
        BodyResponseCallback<Schema$GoogleFirestoreAdminV1Field>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleFirestoreAdminV1Field>,
        callback?: BodyResponseCallback<Schema$GoogleFirestoreAdminV1Field>):
        void|AxiosPromise<Schema$GoogleFirestoreAdminV1Field> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Databases$Collectiongroups$Fields$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Databases$Collectiongroups$Fields$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirestoreAdminV1Field>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleFirestoreAdminV1Field>(parameters);
      }
    }


    /**
     * firestore.projects.databases.collectionGroups.fields.list
     * @desc Lists the field configuration and metadata for this database.
     * Currently, FirestoreAdmin.ListFields only supports listing fields that
     * have been explicitly overridden. To issue this query, call
     * FirestoreAdmin.ListFields with the filter set to
     * `indexConfig.usesAncestorConfig:false`.
     * @alias firestore.projects.databases.collectionGroups.fields.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The filter to apply to list results. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false`.
     * @param {integer=} params.pageSize The number of results to return.
     * @param {string=} params.pageToken A page token, returned from a previous call to FirestoreAdmin.ListFields, that may be used to get the next page of results.
     * @param {string} params.parent A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?:
            Params$Resource$Projects$Databases$Collectiongroups$Fields$List,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleFirestoreAdminV1ListFieldsResponse>;
    list(
        params: Params$Resource$Projects$Databases$Collectiongroups$Fields$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListFieldsResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleFirestoreAdminV1ListFieldsResponse>): void;
    list(
        params: Params$Resource$Projects$Databases$Collectiongroups$Fields$List,
        callback: BodyResponseCallback<
            Schema$GoogleFirestoreAdminV1ListFieldsResponse>): void;
    list(callback: BodyResponseCallback<
         Schema$GoogleFirestoreAdminV1ListFieldsResponse>): void;
    list(
        paramsOrCallback?:
            Params$Resource$Projects$Databases$Collectiongroups$Fields$List|
        BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListFieldsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListFieldsResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleFirestoreAdminV1ListFieldsResponse>):
        void|AxiosPromise<Schema$GoogleFirestoreAdminV1ListFieldsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Databases$Collectiongroups$Fields$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Databases$Collectiongroups$Fields$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+parent}/fields')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirestoreAdminV1ListFieldsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleFirestoreAdminV1ListFieldsResponse>(parameters);
      }
    }


    /**
     * firestore.projects.databases.collectionGroups.fields.patch
     * @desc Updates a field configuration. Currently, field updates apply only
     * to single field index configuration. However, calls to
     * FirestoreAdmin.UpdateField should provide a field mask to avoid changing
     * any configuration that the caller isn't aware of. The field mask should
     * be specified as: `{ paths: "index_config" }`.  This call returns a
     * google.longrunning.Operation which may be used to track the status of the
     * field update. The metadata for the operation will be the type
     * FieldOperationMetadata.  To configure the default field settings for the
     * database, use the special `Field` with resource name:
     * `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/x`.
     * @alias firestore.projects.databases.collectionGroups.fields.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name A field name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}`  A field path may be a simple field name, e.g. `address` or a path to fields within map_value , e.g. `address.city`, or a special field path. The only valid special field is `*`, which represents any field.  Field paths may be quoted using ` (backtick). The only character that needs to be escaped within a quoted field path is the backtick character itself, escaped using a backslash. Special characters in field paths that must be quoted include: `*`, `.`, ``` (backtick), `[`, `]`, as well as any ascii symbolic characters.  Examples: (Note: Comments here are written in markdown syntax, so there is an  additional layer of backticks to represent a code block) `\`address.city\`` represents a field named `address.city`, not the map key `city` in the field `address`. `\`*\`` represents a field named `*`, not any field.  A special `Field` contains the default indexing settings for all fields. This field's resource name is: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/x` Indexes defined on this `Field` will be applied to all fields which do not have their own `Field` index configuration.
     * @param {string=} params.updateMask A mask, relative to the field. If specified, only configuration specified by this field_mask will be updated in the field.
     * @param {().GoogleFirestoreAdminV1Field} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?:
            Params$Resource$Projects$Databases$Collectiongroups$Fields$Patch,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleLongrunningOperation>;
    patch(
        params:
            Params$Resource$Projects$Databases$Collectiongroups$Fields$Patch,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    patch(
        params:
            Params$Resource$Projects$Databases$Collectiongroups$Fields$Patch,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    patch(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    patch(
        paramsOrCallback?:
            Params$Resource$Projects$Databases$Collectiongroups$Fields$Patch|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void|AxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Databases$Collectiongroups$Fields$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Databases$Collectiongroups$Fields$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Databases$Collectiongroups$Fields$Get
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * A name of the form
     * `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_id}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Databases$Collectiongroups$Fields$List
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The filter to apply to list results. Currently, FirestoreAdmin.ListFields
     * only supports listing fields that have been explicitly overridden. To
     * issue this query, call FirestoreAdmin.ListFields with the filter set to
     * `indexConfig.usesAncestorConfig:false`.
     */
    filter?: string;
    /**
     * The number of results to return.
     */
    pageSize?: number;
    /**
     * A page token, returned from a previous call to FirestoreAdmin.ListFields,
     * that may be used to get the next page of results.
     */
    pageToken?: string;
    /**
     * A parent name of the form
     * `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Databases$Collectiongroups$Fields$Patch
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * A field name of the form
     * `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}`
     * A field path may be a simple field name, e.g. `address` or a path to
     * fields within map_value , e.g. `address.city`, or a special field path.
     * The only valid special field is `*`, which represents any field.  Field
     * paths may be quoted using ` (backtick). The only character that needs to
     * be escaped within a quoted field path is the backtick character itself,
     * escaped using a backslash. Special characters in field paths that must be
     * quoted include: `*`, `.`, ``` (backtick), `[`, `]`, as well as any ascii
     * symbolic characters.  Examples: (Note: Comments here are written in
     * markdown syntax, so there is an  additional layer of backticks to
     * represent a code block) `\`address.city\`` represents a field named
     * `address.city`, not the map key `city` in the field `address`. `\`*\``
     * represents a field named `*`, not any field.  A special `Field` contains
     * the default indexing settings for all fields. This field's resource name
     * is:
     * `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/x`
     * Indexes defined on this `Field` will be applied to all fields which do
     * not have their own `Field` index configuration.
     */
    name?: string;
    /**
     * A mask, relative to the field. If specified, only configuration specified
     * by this field_mask will be updated in the field.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirestoreAdminV1Field;
  }


  export class Resource$Projects$Databases$Collectiongroups$Indexes {
    root: Firestore;
    constructor(root: Firestore) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * firestore.projects.databases.collectionGroups.indexes.create
     * @desc Creates a composite index. This returns a
     * google.longrunning.Operation which may be used to track the status of the
     * creation. The metadata for the operation will be the type
     * IndexOperationMetadata.
     * @alias firestore.projects.databases.collectionGroups.indexes.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
     * @param {().GoogleFirestoreAdminV1Index} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?:
            Params$Resource$Projects$Databases$Collectiongroups$Indexes$Create,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
        params:
            Params$Resource$Projects$Databases$Collectiongroups$Indexes$Create,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    create(
        params:
            Params$Resource$Projects$Databases$Collectiongroups$Indexes$Create,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    create(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    create(
        paramsOrCallback?:
            Params$Resource$Projects$Databases$Collectiongroups$Indexes$Create|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void|AxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Databases$Collectiongroups$Indexes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Databases$Collectiongroups$Indexes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+parent}/indexes')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }


    /**
     * firestore.projects.databases.collectionGroups.indexes.delete
     * @desc Deletes a composite index.
     * @alias firestore.projects.databases.collectionGroups.indexes.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name A name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?:
            Params$Resource$Projects$Databases$Collectiongroups$Indexes$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params:
            Params$Resource$Projects$Databases$Collectiongroups$Indexes$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params:
            Params$Resource$Projects$Databases$Collectiongroups$Indexes$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?:
            Params$Resource$Projects$Databases$Collectiongroups$Indexes$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Databases$Collectiongroups$Indexes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Databases$Collectiongroups$Indexes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * firestore.projects.databases.collectionGroups.indexes.get
     * @desc Gets a composite index.
     * @alias firestore.projects.databases.collectionGroups.indexes.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name A name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?:
            Params$Resource$Projects$Databases$Collectiongroups$Indexes$Get,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleFirestoreAdminV1Index>;
    get(params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$Get,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleFirestoreAdminV1Index>,
        callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1Index>):
        void;
    get(params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$Get,
        callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1Index>):
        void;
    get(callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1Index>):
        void;
    get(paramsOrCallback?:
            Params$Resource$Projects$Databases$Collectiongroups$Indexes$Get|
        BodyResponseCallback<Schema$GoogleFirestoreAdminV1Index>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleFirestoreAdminV1Index>,
        callback?: BodyResponseCallback<Schema$GoogleFirestoreAdminV1Index>):
        void|AxiosPromise<Schema$GoogleFirestoreAdminV1Index> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Databases$Collectiongroups$Indexes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Databases$Collectiongroups$Indexes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirestoreAdminV1Index>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleFirestoreAdminV1Index>(parameters);
      }
    }


    /**
     * firestore.projects.databases.collectionGroups.indexes.list
     * @desc Lists composite indexes.
     * @alias firestore.projects.databases.collectionGroups.indexes.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The filter to apply to list results.
     * @param {integer=} params.pageSize The number of results to return.
     * @param {string=} params.pageToken A page token, returned from a previous call to FirestoreAdmin.ListIndexes, that may be used to get the next page of results.
     * @param {string} params.parent A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?:
            Params$Resource$Projects$Databases$Collectiongroups$Indexes$List,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleFirestoreAdminV1ListIndexesResponse>;
    list(
        params:
            Params$Resource$Projects$Databases$Collectiongroups$Indexes$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListIndexesResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleFirestoreAdminV1ListIndexesResponse>): void;
    list(
        params:
            Params$Resource$Projects$Databases$Collectiongroups$Indexes$List,
        callback: BodyResponseCallback<
            Schema$GoogleFirestoreAdminV1ListIndexesResponse>): void;
    list(callback: BodyResponseCallback<
         Schema$GoogleFirestoreAdminV1ListIndexesResponse>): void;
    list(
        paramsOrCallback?:
            Params$Resource$Projects$Databases$Collectiongroups$Indexes$List|
        BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListIndexesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleFirestoreAdminV1ListIndexesResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleFirestoreAdminV1ListIndexesResponse>):
        void|AxiosPromise<Schema$GoogleFirestoreAdminV1ListIndexesResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Databases$Collectiongroups$Indexes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Databases$Collectiongroups$Indexes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+parent}/indexes')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirestoreAdminV1ListIndexesResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleFirestoreAdminV1ListIndexesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Databases$Collectiongroups$Indexes$Create
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * A parent name of the form
     * `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirestoreAdminV1Index;
  }
  export interface Params$Resource$Projects$Databases$Collectiongroups$Indexes$Delete
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * A name of the form
     * `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Databases$Collectiongroups$Indexes$Get
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * A name of the form
     * `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Databases$Collectiongroups$Indexes$List
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The filter to apply to list results.
     */
    filter?: string;
    /**
     * The number of results to return.
     */
    pageSize?: number;
    /**
     * A page token, returned from a previous call to
     * FirestoreAdmin.ListIndexes, that may be used to get the next page of
     * results.
     */
    pageToken?: string;
    /**
     * A parent name of the form
     * `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
     */
    parent?: string;
  }



  export class Resource$Projects$Databases$Operations {
    root: Firestore;
    constructor(root: Firestore) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * firestore.projects.databases.operations.cancel
     * @desc Starts asynchronous cancellation on a long-running operation.  The
     * server makes a best effort to cancel the operation, but success is not
     * guaranteed.  If the server doesn't support this method, it returns
     * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation
     * or other methods to check whether the cancellation succeeded or whether
     * the operation completed despite cancellation. On successful cancellation,
     * the operation is not deleted; instead, it becomes an operation with an
     * Operation.error value with a google.rpc.Status.code of 1, corresponding
     * to `Code.CANCELLED`.
     * @alias firestore.projects.databases.operations.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be cancelled.
     * @param {().GoogleLongrunningCancelOperationRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
        params?: Params$Resource$Projects$Databases$Operations$Cancel,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    cancel(
        params: Params$Resource$Projects$Databases$Operations$Cancel,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
        params: Params$Resource$Projects$Databases$Operations$Cancel,
        callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
        paramsOrCallback?: Params$Resource$Projects$Databases$Operations$Cancel|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Databases$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}:cancel')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * firestore.projects.databases.operations.delete
     * @desc Deletes a long-running operation. This method indicates that the
     * client is no longer interested in the operation result. It does not
     * cancel the operation. If the server doesn't support this method, it
     * returns `google.rpc.Code.UNIMPLEMENTED`.
     * @alias firestore.projects.databases.operations.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Projects$Databases$Operations$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Projects$Databases$Operations$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Projects$Databases$Operations$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Projects$Databases$Operations$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Databases$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * firestore.projects.databases.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use
     * this method to poll the operation result at intervals as recommended by
     * the API service.
     * @alias firestore.projects.databases.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Databases$Operations$Get,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleLongrunningOperation>;
    get(params: Params$Resource$Projects$Databases$Operations$Get,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    get(params: Params$Resource$Projects$Databases$Operations$Get,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    get(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    get(paramsOrCallback?: Params$Resource$Projects$Databases$Operations$Get|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void|AxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Databases$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }


    /**
     * firestore.projects.databases.operations.list
     * @desc Lists operations that match the specified filter in the request. If
     * the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE:
     * the `name` binding allows API services to override the binding to use
     * different resource name schemes, such as `users/x/operations`. To
     * override the binding, API services can add a binding such as
     * `"/v1/{name=users/x}/operations"` to their service configuration. For
     * backwards compatibility, the default name includes the operations
     * collection id, however overriding users must ensure the name binding is
     * the parent resource, without the operations collection id.
     * @alias firestore.projects.databases.operations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The standard list filter.
     * @param {string} params.name The name of the operation's parent resource.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Databases$Operations$List,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
        params: Params$Resource$Projects$Databases$Operations$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleLongrunningListOperationsResponse>): void;
    list(
        params: Params$Resource$Projects$Databases$Operations$List,
        callback: BodyResponseCallback<
            Schema$GoogleLongrunningListOperationsResponse>): void;
    list(callback: BodyResponseCallback<
         Schema$GoogleLongrunningListOperationsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Databases$Operations$List|
        BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleLongrunningListOperationsResponse>):
        void|AxiosPromise<Schema$GoogleLongrunningListOperationsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Databases$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}/operations')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Databases$Operations$Cancel extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleLongrunningCancelOperationRequest;
  }
  export interface Params$Resource$Projects$Databases$Operations$Delete extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Databases$Operations$Get extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Databases$Operations$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }



  export class Resource$Projects$Locations {
    root: Firestore;
    constructor(root: Firestore) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * firestore.projects.locations.get
     * @desc Gets information about a location.
     * @alias firestore.projects.locations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name for the location.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Locations$Get,
        options?: MethodOptions): AxiosPromise<Schema$Location>;
    get(params: Params$Resource$Projects$Locations$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Location>,
        callback: BodyResponseCallback<Schema$Location>): void;
    get(params: Params$Resource$Projects$Locations$Get,
        callback: BodyResponseCallback<Schema$Location>): void;
    get(callback: BodyResponseCallback<Schema$Location>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Locations$Get|
        BodyResponseCallback<Schema$Location>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Location>,
        callback?: BodyResponseCallback<Schema$Location>):
        void|AxiosPromise<Schema$Location> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Locations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Location>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Location>(parameters);
      }
    }


    /**
     * firestore.projects.locations.list
     * @desc Lists information about the supported locations for this service.
     * @alias firestore.projects.locations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The standard list filter.
     * @param {string} params.name The resource that owns the locations collection, if applicable.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Locations$List,
        options?: MethodOptions): AxiosPromise<Schema$ListLocationsResponse>;
    list(
        params: Params$Resource$Projects$Locations$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListLocationsResponse>,
        callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
        params: Params$Resource$Projects$Locations$List,
        callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Locations$List|
        BodyResponseCallback<Schema$ListLocationsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListLocationsResponse>,
        callback?: BodyResponseCallback<Schema$ListLocationsResponse>):
        void|AxiosPromise<Schema$ListLocationsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Locations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}/locations')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListLocationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Get extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The resource that owns the locations collection, if applicable.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }
}
