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

  /**
   * Cloud Firestore API
   *
   *
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


  export class Resource$Projects {
    root: Firestore;
    locations: Resource$Projects$Locations;
    constructor(root: Firestore) {
      this.root = root;
      this.getRoot.bind(this);
      this.locations = new Resource$Projects$Locations(root);
    }

    getRoot() {
      return this.root;
    }
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

  export interface Params$Resource$Projects$Locations$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List {
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
