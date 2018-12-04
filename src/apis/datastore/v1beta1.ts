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

export namespace datastore_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
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
   * Cloud Datastore API
   *
   * Accesses the schemaless NoSQL database to provide fully managed, robust,
   * scalable storage for your application.
   *
   * @example
   * const {google} = require('googleapis');
   * const datastore = google.datastore('v1beta1');
   *
   * @namespace datastore
   * @type {Function}
   * @version v1beta1
   * @variation v1beta1
   * @param {object=} options Options for Datastore
   */
  export class Datastore {
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
   * Metadata common to all Datastore Admin operations.
   */
  export interface Schema$GoogleDatastoreAdminV1beta1CommonMetadata {
    /**
     * The time the operation ended, either successfully or otherwise.
     */
    endTime?: string;
    /**
     * The client-assigned labels which were provided when the operation was
     * created. May also include additional labels.
     */
    labels?: {[key: string]: string;};
    /**
     * The type of the operation. Can be used as a filter in
     * ListOperationsRequest.
     */
    operationType?: string;
    /**
     * The time that work began on the operation.
     */
    startTime?: string;
    /**
     * The current state of the Operation.
     */
    state?: string;
  }
  /**
   * Identifies a subset of entities in a project. This is specified as
   * combinations of kinds and namespaces (either or both of which may be all,
   * as described in the following examples). Example usage:  Entire project:
   * kinds=[], namespace_ids=[]  Kinds Foo and Bar in all namespaces:
   * kinds=[&#39;Foo&#39;, &#39;Bar&#39;], namespace_ids=[]  Kinds Foo and Bar
   * only in the default namespace:   kinds=[&#39;Foo&#39;, &#39;Bar&#39;],
   * namespace_ids=[&#39;&#39;]  Kinds Foo and Bar in both the default and Baz
   * namespaces:   kinds=[&#39;Foo&#39;, &#39;Bar&#39;],
   * namespace_ids=[&#39;&#39;, &#39;Baz&#39;]  The entire Baz namespace:
   * kinds=[], namespace_ids=[&#39;Baz&#39;]
   */
  export interface Schema$GoogleDatastoreAdminV1beta1EntityFilter {
    /**
     * If empty, then this represents all kinds.
     */
    kinds?: string[];
    /**
     * An empty list represents all namespaces. This is the preferred usage for
     * projects that don&#39;t use namespaces.  An empty string element
     * represents the default namespace. This should be used if the project has
     * data in non-default namespaces, but doesn&#39;t want to include them.
     * Each namespace in this list must be unique.
     */
    namespaceIds?: string[];
  }
  /**
   * Metadata for ExportEntities operations.
   */
  export interface Schema$GoogleDatastoreAdminV1beta1ExportEntitiesMetadata {
    /**
     * Metadata common to all Datastore Admin operations.
     */
    common?: Schema$GoogleDatastoreAdminV1beta1CommonMetadata;
    /**
     * Description of which entities are being exported.
     */
    entityFilter?: Schema$GoogleDatastoreAdminV1beta1EntityFilter;
    /**
     * Location for the export metadata and data files. This will be the same
     * value as the
     * google.datastore.admin.v1beta1.ExportEntitiesRequest.output_url_prefix
     * field. The final output location is provided in
     * google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url.
     */
    outputUrlPrefix?: string;
    /**
     * An estimate of the number of bytes processed.
     */
    progressBytes?: Schema$GoogleDatastoreAdminV1beta1Progress;
    /**
     * An estimate of the number of entities processed.
     */
    progressEntities?: Schema$GoogleDatastoreAdminV1beta1Progress;
  }
  /**
   * The request for
   * google.datastore.admin.v1beta1.DatastoreAdmin.ExportEntities.
   */
  export interface Schema$GoogleDatastoreAdminV1beta1ExportEntitiesRequest {
    /**
     * Description of what data from the project is included in the export.
     */
    entityFilter?: Schema$GoogleDatastoreAdminV1beta1EntityFilter;
    /**
     * Client-assigned labels.
     */
    labels?: {[key: string]: string;};
    /**
     * Location for the export metadata and data files.  The full resource URL
     * of the external storage location. Currently, only Google Cloud Storage is
     * supported. So output_url_prefix should be of the form:
     * `gs://BUCKET_NAME[/NAMESPACE_PATH]`, where `BUCKET_NAME` is the name of
     * the Cloud Storage bucket and `NAMESPACE_PATH` is an optional Cloud
     * Storage namespace path (this is not a Cloud Datastore namespace). For
     * more information about Cloud Storage namespace paths, see [Object name
     * considerations](https://cloud.google.com/storage/docs/naming#object-considerations).
     * The resulting files will be nested deeper than the specified URL prefix.
     * The final output URL will be provided in the
     * google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url field.
     * That value should be used for subsequent ImportEntities operations.  By
     * nesting the data files deeper, the same Cloud Storage bucket can be used
     * in multiple ExportEntities operations without conflict.
     */
    outputUrlPrefix?: string;
  }
  /**
   * The response for
   * google.datastore.admin.v1beta1.DatastoreAdmin.ExportEntities.
   */
  export interface Schema$GoogleDatastoreAdminV1beta1ExportEntitiesResponse {
    /**
     * Location of the output metadata file. This can be used to begin an import
     * into Cloud Datastore (this project or another project). See
     * google.datastore.admin.v1beta1.ImportEntitiesRequest.input_url. Only
     * present if the operation completed successfully.
     */
    outputUrl?: string;
  }
  /**
   * Metadata for ImportEntities operations.
   */
  export interface Schema$GoogleDatastoreAdminV1beta1ImportEntitiesMetadata {
    /**
     * Metadata common to all Datastore Admin operations.
     */
    common?: Schema$GoogleDatastoreAdminV1beta1CommonMetadata;
    /**
     * Description of which entities are being imported.
     */
    entityFilter?: Schema$GoogleDatastoreAdminV1beta1EntityFilter;
    /**
     * The location of the import metadata file. This will be the same value as
     * the google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url
     * field.
     */
    inputUrl?: string;
    /**
     * An estimate of the number of bytes processed.
     */
    progressBytes?: Schema$GoogleDatastoreAdminV1beta1Progress;
    /**
     * An estimate of the number of entities processed.
     */
    progressEntities?: Schema$GoogleDatastoreAdminV1beta1Progress;
  }
  /**
   * The request for
   * google.datastore.admin.v1beta1.DatastoreAdmin.ImportEntities.
   */
  export interface Schema$GoogleDatastoreAdminV1beta1ImportEntitiesRequest {
    /**
     * Optionally specify which kinds/namespaces are to be imported. If
     * provided, the list must be a subset of the EntityFilter used in creating
     * the export, otherwise a FAILED_PRECONDITION error will be returned. If no
     * filter is specified then all entities from the export are imported.
     */
    entityFilter?: Schema$GoogleDatastoreAdminV1beta1EntityFilter;
    /**
     * The full resource URL of the external storage location. Currently, only
     * Google Cloud Storage is supported. So input_url should be of the form:
     * `gs://BUCKET_NAME[/NAMESPACE_PATH]/OVERALL_EXPORT_METADATA_FILE`, where
     * `BUCKET_NAME` is the name of the Cloud Storage bucket, `NAMESPACE_PATH`
     * is an optional Cloud Storage namespace path (this is not a Cloud
     * Datastore namespace), and `OVERALL_EXPORT_METADATA_FILE` is the metadata
     * file written by the ExportEntities operation. For more information about
     * Cloud Storage namespace paths, see [Object name
     * considerations](https://cloud.google.com/storage/docs/naming#object-considerations).
     * For more information, see
     * google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url.
     */
    inputUrl?: string;
    /**
     * Client-assigned labels.
     */
    labels?: {[key: string]: string;};
  }
  /**
   * Measures the progress of a particular metric.
   */
  export interface Schema$GoogleDatastoreAdminV1beta1Progress {
    /**
     * The amount of work that has been completed. Note that this may be greater
     * than work_estimated.
     */
    workCompleted?: string;
    /**
     * An estimate of how much work needs to be performed. May be zero if the
     * work estimate is unavailable.
     */
    workEstimated?: string;
  }
  /**
   * Metadata common to all Datastore Admin operations.
   */
  export interface Schema$GoogleDatastoreAdminV1CommonMetadata {
    /**
     * The time the operation ended, either successfully or otherwise.
     */
    endTime?: string;
    /**
     * The client-assigned labels which were provided when the operation was
     * created. May also include additional labels.
     */
    labels?: {[key: string]: string;};
    /**
     * The type of the operation. Can be used as a filter in
     * ListOperationsRequest.
     */
    operationType?: string;
    /**
     * The time that work began on the operation.
     */
    startTime?: string;
    /**
     * The current state of the Operation.
     */
    state?: string;
  }
  /**
   * Identifies a subset of entities in a project. This is specified as
   * combinations of kinds and namespaces (either or both of which may be all,
   * as described in the following examples). Example usage:  Entire project:
   * kinds=[], namespace_ids=[]  Kinds Foo and Bar in all namespaces:
   * kinds=[&#39;Foo&#39;, &#39;Bar&#39;], namespace_ids=[]  Kinds Foo and Bar
   * only in the default namespace:   kinds=[&#39;Foo&#39;, &#39;Bar&#39;],
   * namespace_ids=[&#39;&#39;]  Kinds Foo and Bar in both the default and Baz
   * namespaces:   kinds=[&#39;Foo&#39;, &#39;Bar&#39;],
   * namespace_ids=[&#39;&#39;, &#39;Baz&#39;]  The entire Baz namespace:
   * kinds=[], namespace_ids=[&#39;Baz&#39;]
   */
  export interface Schema$GoogleDatastoreAdminV1EntityFilter {
    /**
     * If empty, then this represents all kinds.
     */
    kinds?: string[];
    /**
     * An empty list represents all namespaces. This is the preferred usage for
     * projects that don&#39;t use namespaces.  An empty string element
     * represents the default namespace. This should be used if the project has
     * data in non-default namespaces, but doesn&#39;t want to include them.
     * Each namespace in this list must be unique.
     */
    namespaceIds?: string[];
  }
  /**
   * Metadata for ExportEntities operations.
   */
  export interface Schema$GoogleDatastoreAdminV1ExportEntitiesMetadata {
    /**
     * Metadata common to all Datastore Admin operations.
     */
    common?: Schema$GoogleDatastoreAdminV1CommonMetadata;
    /**
     * Description of which entities are being exported.
     */
    entityFilter?: Schema$GoogleDatastoreAdminV1EntityFilter;
    /**
     * Location for the export metadata and data files. This will be the same
     * value as the
     * google.datastore.admin.v1.ExportEntitiesRequest.output_url_prefix field.
     * The final output location is provided in
     * google.datastore.admin.v1.ExportEntitiesResponse.output_url.
     */
    outputUrlPrefix?: string;
    /**
     * An estimate of the number of bytes processed.
     */
    progressBytes?: Schema$GoogleDatastoreAdminV1Progress;
    /**
     * An estimate of the number of entities processed.
     */
    progressEntities?: Schema$GoogleDatastoreAdminV1Progress;
  }
  /**
   * The response for google.datastore.admin.v1.DatastoreAdmin.ExportEntities.
   */
  export interface Schema$GoogleDatastoreAdminV1ExportEntitiesResponse {
    /**
     * Location of the output metadata file. This can be used to begin an import
     * into Cloud Datastore (this project or another project). See
     * google.datastore.admin.v1.ImportEntitiesRequest.input_url. Only present
     * if the operation completed successfully.
     */
    outputUrl?: string;
  }
  /**
   * Metadata for ImportEntities operations.
   */
  export interface Schema$GoogleDatastoreAdminV1ImportEntitiesMetadata {
    /**
     * Metadata common to all Datastore Admin operations.
     */
    common?: Schema$GoogleDatastoreAdminV1CommonMetadata;
    /**
     * Description of which entities are being imported.
     */
    entityFilter?: Schema$GoogleDatastoreAdminV1EntityFilter;
    /**
     * The location of the import metadata file. This will be the same value as
     * the google.datastore.admin.v1.ExportEntitiesResponse.output_url field.
     */
    inputUrl?: string;
    /**
     * An estimate of the number of bytes processed.
     */
    progressBytes?: Schema$GoogleDatastoreAdminV1Progress;
    /**
     * An estimate of the number of entities processed.
     */
    progressEntities?: Schema$GoogleDatastoreAdminV1Progress;
  }
  /**
   * Metadata for Index operations.
   */
  export interface Schema$GoogleDatastoreAdminV1IndexOperationMetadata {
    /**
     * Metadata common to all Datastore Admin operations.
     */
    common?: Schema$GoogleDatastoreAdminV1CommonMetadata;
    /**
     * The index resource ID that this operation is acting on.
     */
    indexId?: string;
    /**
     * An estimate of the number of entities processed.
     */
    progressEntities?: Schema$GoogleDatastoreAdminV1Progress;
  }
  /**
   * Measures the progress of a particular metric.
   */
  export interface Schema$GoogleDatastoreAdminV1Progress {
    /**
     * The amount of work that has been completed. Note that this may be greater
     * than work_estimated.
     */
    workCompleted?: string;
    /**
     * An estimate of how much work needs to be performed. May be zero if the
     * work estimate is unavailable.
     */
    workEstimated?: string;
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
    metadata?: {[key: string]: any;};
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
    response?: {[key: string]: any;};
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
    details?: Array<{[key: string]: any;}>;
    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  }


  export class Resource$Projects {
    root: Datastore;
    constructor(root: Datastore) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * datastore.projects.export
     * @desc Exports a copy of all or a subset of entities from Google Cloud
     * Datastore to another storage system, such as Google Cloud Storage. Recent
     * updates to entities may not be reflected in the export. The export occurs
     * in the background and its progress can be monitored and managed via the
     * Operation resource that is created. The output of an export may only be
     * used once the associated operation is done. If an export operation is
     * cancelled before completion it may leave partial data behind in Google
     * Cloud Storage.
     * @alias datastore.projects.export
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId Project ID against which to make the request.
     * @param {().GoogleDatastoreAdminV1beta1ExportEntitiesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    export(params?: Params$Resource$Projects$Export, options?: MethodOptions):
        AxiosPromise<Schema$GoogleLongrunningOperation>;
    export(
        params: Params$Resource$Projects$Export,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    export(
        params: Params$Resource$Projects$Export,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    export(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    export(
        paramsOrCallback?: Params$Resource$Projects$Export|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void|AxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback || {}) as Params$Resource$Projects$Export;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Export;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/projects/{projectId}:export')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
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
 * datastore.projects.import
 * @desc Imports entities into Google Cloud Datastore. Existing entities with
 * the same key are overwritten. The import occurs in the background and its
 * progress can be monitored and managed via the Operation resource that is
 * created. If an ImportEntities operation is cancelled, it is possible that a
 * subset of the data has already been imported to Cloud Datastore.
 * @alias datastore.projects.import
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.projectId Project ID against which to make the request.
 * @param {().GoogleDatastoreAdminV1beta1ImportEntitiesRequest} params.resource Request body data
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
import(params?: Params$Resource$Projects$Import, options?: MethodOptions): AxiosPromise<Schema$GoogleLongrunningOperation>;
import(params: Params$Resource$Projects$Import, options: MethodOptions|BodyResponseCallback<Schema$GoogleLongrunningOperation>, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
import(params: Params$Resource$Projects$Import, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
import(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
import(paramsOrCallback?: Params$Resource$Projects$Import|BodyResponseCallback<Schema$GoogleLongrunningOperation>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$GoogleLongrunningOperation>, callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void|AxiosPromise<Schema$GoogleLongrunningOperation> {
  let params = (paramsOrCallback || {}) as Params$Resource$Projects$Import;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
      callback = paramsOrCallback;
      params = {} as Params$Resource$Projects$Import;
      options = {};
  }

  if (typeof optionsOrCallback === 'function') {
      callback = optionsOrCallback;
      options = {};
  }

  const rootUrl = options.rootUrl || 'https://datastore.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/v1beta1/projects/{projectId}:import').replace(/([^:]\/)\/+/g, '$1'),
      method: 'POST'
    }, options),
    params,
        requiredParams: ['projectId'],
    pathParams: ['projectId'],
    context: this.getRoot()
  };
    if (callback) {
      createAPIRequest<Schema$GoogleLongrunningOperation>(parameters, callback);
  } else {
      return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
  }
}

                  }

                  export interface Params$Resource$Projects$Export extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * Project ID against which to make the request.
               */
              projectId?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$GoogleDatastoreAdminV1beta1ExportEntitiesRequest;
          
                  }
              export interface Params$Resource$Projects$Import extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * Project ID against which to make the request.
               */
              projectId?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$GoogleDatastoreAdminV1beta1ImportEntitiesRequest;
          
                  }
          
    
  

}
