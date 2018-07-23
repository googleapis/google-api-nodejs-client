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

import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from '../../shared/src';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace firestore_v1beta2 {
  export interface Options extends GlobalOptions {
    version: 'v1beta2';
  }

  /**
   * Cloud Firestore API
   *
   *
   *
   * @example
   * const {google} = require('googleapis');
   * const firestore = google.firestore('v1beta2');
   *
   * @namespace firestore
   * @type {Function}
   * @version v1beta2
   * @variation v1beta2
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
   * Metadata for ExportDocuments operations.
   */
  export interface Schema$GoogleFirestoreAdminV1beta1ExportDocumentsMetadata {
    /**
     * Which collection ids are being exported.
     */
    collectionIds?: string[];
    /**
     * The time the operation ended, either successfully or otherwise. Unset if
     * the operation is still active.
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
     * An estimate of the number of bytes processed.
     */
    progressBytes?: Schema$GoogleFirestoreAdminV1beta1Progress;
    /**
     * An estimate of the number of documents processed.
     */
    progressDocuments?: Schema$GoogleFirestoreAdminV1beta1Progress;
    /**
     * The time that work began on the operation.
     */
    startTime?: string;
  }
  /**
   * Returned in the google.longrunning.Operation response field.
   */
  export interface Schema$GoogleFirestoreAdminV1beta1ExportDocumentsResponse {
    /**
     * Location of the output files. This can be used to begin an import into
     * Cloud Firestore (this project or another project) after the operation
     * completes successfully.
     */
    outputUriPrefix?: string;
  }
  /**
   * Metadata for ImportDocuments operations.
   */
  export interface Schema$GoogleFirestoreAdminV1beta1ImportDocumentsMetadata {
    /**
     * Which collection ids are being imported.
     */
    collectionIds?: string[];
    /**
     * The time the operation ended, either successfully or otherwise. Unset if
     * the operation is still active.
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
     * An estimate of the number of bytes processed.
     */
    progressBytes?: Schema$GoogleFirestoreAdminV1beta1Progress;
    /**
     * An estimate of the number of documents processed.
     */
    progressDocuments?: Schema$GoogleFirestoreAdminV1beta1Progress;
    /**
     * The time that work began on the operation.
     */
    startTime?: string;
  }
  /**
   * Metadata for index operations. This metadata populates the metadata field
   * of google.longrunning.Operation.
   */
  export interface Schema$GoogleFirestoreAdminV1beta1IndexOperationMetadata {
    /**
     * True if the [google.longrunning.Operation] was cancelled. If the
     * cancellation is in progress, cancelled will be true but
     * google.longrunning.Operation.done will be false.
     */
    cancelled?: boolean;
    /**
     * Progress of the existing operation, measured in number of documents.
     */
    documentProgress?: Schema$GoogleFirestoreAdminV1beta1Progress;
    /**
     * The time the operation ended, either successfully or otherwise. Unset if
     * the operation is still active.
     */
    endTime?: string;
    /**
     * The index resource that this operation is acting on. For example:
     * `projects/{project_id}/databases/{database_id}/indexes/{index_id}`
     */
    index?: string;
    /**
     * The type of index operation.
     */
    operationType?: string;
    /**
     * The time that work began on the operation.
     */
    startTime?: string;
  }
  /**
   * The metadata message for google.cloud.location.Location.metadata.
   */
  export interface Schema$GoogleFirestoreAdminV1beta1LocationMetadata {}
  /**
   * Measures the progress of a particular metric.
   */
  export interface Schema$GoogleFirestoreAdminV1beta1Progress {
    /**
     * An estimate of how much work has been completed. Note that this may be
     * greater than `work_estimated`.
     */
    workCompleted?: string;
    /**
     * An estimate of how much work needs to be performed. Zero if the work
     * estimate is unavailable. May change as work progresses.
     */
    workEstimated?: string;
  }
  /**
   * Represents a single field in the database.  Fields are grouped by their
   * &quot;Collection Group&quot;, which represent all collections in the
   * database with the same id.
   */
  export interface Schema$GoogleFirestoreAdminV1beta2Field {
    /**
     * The index configuration for this field. If unset, field indexing will
     * revert to the configuration defined by the `ancestor_field`. To
     * explicitly remove all indexes for this field, specify an index config
     * with an empty list of indexes.
     */
    indexConfig?: Schema$GoogleFirestoreAdminV1beta2IndexConfig;
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
  export interface Schema$GoogleFirestoreAdminV1beta2FieldOperationMetadata {
    /**
     * The progress, in bytes, of this operation.
     */
    bytesProgress?: Schema$GoogleFirestoreAdminV1beta2Progress;
    /**
     * The progress, in documents, of this operation.
     */
    documentProgress?: Schema$GoogleFirestoreAdminV1beta2Progress;
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
    indexConfigDeltas?: Schema$GoogleFirestoreAdminV1beta2IndexConfigDelta[];
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
   * Cloud Firestore indexes enable simple and complex queries against documents
   * in a database.
   */
  export interface Schema$GoogleFirestoreAdminV1beta2Index {
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
    fields?: Schema$GoogleFirestoreAdminV1beta2IndexField[];
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
  export interface Schema$GoogleFirestoreAdminV1beta2IndexConfig {
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
    indexes?: Schema$GoogleFirestoreAdminV1beta2Index[];
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
  export interface Schema$GoogleFirestoreAdminV1beta2IndexConfigDelta {
    /**
     * Specifies how the index is changing.
     */
    changeType?: string;
    /**
     * The index being changed.
     */
    index?: Schema$GoogleFirestoreAdminV1beta2Index;
  }
  /**
   * A field in an index. The field_path describes which field is indexed, the
   * value_mode describes how the field value is indexed.
   */
  export interface Schema$GoogleFirestoreAdminV1beta2IndexField {
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
   * The response for FirestoreAdmin.ListFields.
   */
  export interface Schema$GoogleFirestoreAdminV1beta2ListFieldsResponse {
    /**
     * The requested fields.
     */
    fields?: Schema$GoogleFirestoreAdminV1beta2Field[];
    /**
     * A page token that may be used to request another page of results. If
     * blank, this is the last page.
     */
    nextPageToken?: string;
  }
  /**
   * Describes the progress of the operation. Unit of work is generic and must
   * be interpreted based on where Progress is used.
   */
  export interface Schema$GoogleFirestoreAdminV1beta2Progress {
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
    constructor(root: Firestore) {
      this.root = root;
      this.getRoot.bind(this);
      this.databases = new Resource$Projects$Databases(root);
    }

    getRoot() {
      return this.root;
    }
  }


  export class Resource$Projects$Databases {
    root: Firestore;
    collectionGroups: Resource$Projects$Databases$Collectiongroups;
    constructor(root: Firestore) {
      this.root = root;
      this.getRoot.bind(this);
      this.collectionGroups =
          new Resource$Projects$Databases$Collectiongroups(root);
    }

    getRoot() {
      return this.root;
    }
  }


  export class Resource$Projects$Databases$Collectiongroups {
    root: Firestore;
    fields: Resource$Projects$Databases$Collectiongroups$Fields;
    constructor(root: Firestore) {
      this.root = root;
      this.getRoot.bind(this);
      this.fields =
          new Resource$Projects$Databases$Collectiongroups$Fields(root);
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
     * @param {string} params.name A name of the form `/projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Databases$Collectiongroups$Fields$Get,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleFirestoreAdminV1beta2Field>;
    get(params: Params$Resource$Projects$Databases$Collectiongroups$Fields$Get,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta2Field>,
        callback:
            BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta2Field>):
        void;
    get(params: Params$Resource$Projects$Databases$Collectiongroups$Fields$Get,
        callback:
            BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta2Field>):
        void;
    get(callback:
            BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta2Field>):
        void;
    get(paramsOrCallback?:
            Params$Resource$Projects$Databases$Collectiongroups$Fields$Get|
        BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta2Field>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta2Field>,
        callback?:
            BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta2Field>):
        void|AxiosPromise<Schema$GoogleFirestoreAdminV1beta2Field> {
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
              url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirestoreAdminV1beta2Field>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleFirestoreAdminV1beta2Field>(
            parameters);
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
     * @param {string} params.parent A parent name of the form `/projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?:
            Params$Resource$Projects$Databases$Collectiongroups$Fields$List,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleFirestoreAdminV1beta2ListFieldsResponse>;
    list(
        params: Params$Resource$Projects$Databases$Collectiongroups$Fields$List,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleFirestoreAdminV1beta2ListFieldsResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleFirestoreAdminV1beta2ListFieldsResponse>): void;
    list(
        params: Params$Resource$Projects$Databases$Collectiongroups$Fields$List,
        callback: BodyResponseCallback<
            Schema$GoogleFirestoreAdminV1beta2ListFieldsResponse>): void;
    list(callback: BodyResponseCallback<
         Schema$GoogleFirestoreAdminV1beta2ListFieldsResponse>): void;
    list(
        paramsOrCallback?:
            Params$Resource$Projects$Databases$Collectiongroups$Fields$List|
        BodyResponseCallback<
            Schema$GoogleFirestoreAdminV1beta2ListFieldsResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleFirestoreAdminV1beta2ListFieldsResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleFirestoreAdminV1beta2ListFieldsResponse>): void|
        AxiosPromise<Schema$GoogleFirestoreAdminV1beta2ListFieldsResponse> {
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
              url: (rootUrl + '/v1beta2/{+parent}/fields')
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
        createAPIRequest<Schema$GoogleFirestoreAdminV1beta2ListFieldsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleFirestoreAdminV1beta2ListFieldsResponse>(parameters);
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
     * `/projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/x`.
     * @alias firestore.projects.databases.collectionGroups.fields.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name A field name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}`  A field path may be a simple field name, e.g. `address` or a path to fields within map_value , e.g. `address.city`, or a special field path. The only valid special field is `*`, which represents any field.  Field paths may be quoted using ` (backtick). The only character that needs to be escaped within a quoted field path is the backtick character itself, escaped using a backslash. Special characters in field paths that must be quoted include: `*`, `.`, ``` (backtick), `[`, `]`, as well as any ascii symbolic characters.  Examples: (Note: Comments here are written in markdown syntax, so there is an  additional layer of backticks to represent a code block) `\`address.city\`` represents a field named `address.city`, not the map key `city` in the field `address`. `\`*\`` represents a field named `*`, not any field.  A special `Field` contains the default indexing settings for all fields. This field's resource name is: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/x` Indexes defined on this `Field` will be applied to all fields which do not have their own `Field` index configuration.
     * @param {string=} params.updateMask A mask, relative to the field. If specified, only configuration specified by this field_mask will be updated in the field.
     * @param {().GoogleFirestoreAdminV1beta2Field} params.resource Request body data
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
              url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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

  export interface Params$Resource$Projects$Databases$Collectiongroups$Fields$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * A name of the form
     * `/projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_id}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Databases$Collectiongroups$Fields$List {
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
     * `/projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Databases$Collectiongroups$Fields$Patch {
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
    requestBody?: Schema$GoogleFirestoreAdminV1beta2Field;
  }
}
