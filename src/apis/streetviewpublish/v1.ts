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

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format

/**
 * Street View Publish API
 *
 * Publishes 360 photos to Google Maps, along with position, orientation, and
 * connectivity metadata. Apps can offer an interface for positioning,
 * connecting, and uploading user-generated Street View images.
 *
 * @example
 * const google = require('googleapis');
 * const streetviewpublish = google.streetviewpublish('v1');
 *
 * @namespace streetviewpublish
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Streetviewpublish
 */
export class Streetviewpublish {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  photo: Resource$Photo;
  photos: Resource$Photos;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.photo = new Resource$Photo(this);
    this.photos = new Resource$Photos(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * Request to delete multiple Photos.
 */
export interface Schema$BatchDeletePhotosRequest {
  /**
   * Required. IDs of the Photos. For HTTP GET requests, the URL query parameter
   * should be `photoIds=&lt;id1&gt;&amp;photoIds=&lt;id2&gt;&amp;...`.
   */
  photoIds: string[];
}
/**
 * Response to batch delete of one or more Photos.
 */
export interface Schema$BatchDeletePhotosResponse {
  /**
   * The status for the operation to delete a single Photo in the batch request.
   */
  status: Schema$Status[];
}
/**
 * Response to batch get of Photos.
 */
export interface Schema$BatchGetPhotosResponse {
  /**
   * List of results for each individual Photo requested, in the same order as
   * the requests in BatchGetPhotos.
   */
  results: Schema$PhotoResponse[];
}
/**
 * Request to update the metadata of photos. Updating the pixels of photos is
 * not supported.
 */
export interface Schema$BatchUpdatePhotosRequest {
  /**
   * Required. List of UpdatePhotoRequests.
   */
  updatePhotoRequests: Schema$UpdatePhotoRequest[];
}
/**
 * Response to batch update of metadata of one or more Photos.
 */
export interface Schema$BatchUpdatePhotosResponse {
  /**
   * List of results for each individual Photo updated, in the same order as the
   * request.
   */
  results: Schema$PhotoResponse[];
}
/**
 * A connection is the link from a source photo to a destination photo.
 */
export interface Schema$Connection {
  /**
   * Required. The destination of the connection from the containing photo to
   * another photo.
   */
  target: Schema$PhotoId;
}
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request or
 * the response type of an API method. For instance:      service Foo { rpc
 * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
 * representation for `Empty` is empty JSON object `{}`.
 */
export interface Schema$Empty {}
/**
 * An object representing a latitude/longitude pair. This is expressed as a pair
 * of doubles representing degrees latitude and degrees longitude. Unless
 * specified otherwise, this must conform to the &lt;a
 * href=&quot;http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf&quot;&gt;WGS84
 * standard&lt;/a&gt;. Values must be within normalized ranges.
 */
export interface Schema$LatLng {
  /**
   * The latitude in degrees. It must be in the range [-90.0, +90.0].
   */
  latitude: number;
  /**
   * The longitude in degrees. It must be in the range [-180.0, +180.0].
   */
  longitude: number;
}
/**
 * Level information containing level number and its corresponding name.
 */
export interface Schema$Level {
  /**
   * Required. A name assigned to this Level, restricted to 3 characters.
   * Consider how the elevator buttons would be labeled for this level if there
   * was an elevator.
   */
  name: string;
  /**
   * Floor number, used for ordering. 0 indicates the ground level, 1 indicates
   * the first level above ground level, -1 indicates the first level under
   * ground level. Non-integer values are OK.
   */
  number: number;
}
/**
 * Response to list all photos that belong to a user.
 */
export interface Schema$ListPhotosResponse {
  /**
   * Token to retrieve the next page of results, or empty if there are no more
   * results in the list.
   */
  nextPageToken: string;
  /**
   * List of photos. The maximum number of items returned is based on the
   * pageSize field in the request.
   */
  photos: Schema$Photo[];
}
/**
 * This resource represents a long-running operation that is the result of a
 * network API call.
 */
export interface Schema$Operation {
  /**
   * If the value is `false`, it means the operation is still in progress. If
   * `true`, the operation is completed, and either `error` or `response` is
   * available.
   */
  done: boolean;
  /**
   * The error result of the operation in case of failure or cancellation.
   */
  error: Schema$Status;
  /**
   * Service-specific metadata associated with the operation.  It typically
   * contains progress information and common metadata such as create time. Some
   * services might not provide such metadata.  Any method that returns a
   * long-running operation should document the metadata type, if any.
   */
  metadata: any;
  /**
   * The server-assigned name, which is only unique within the same service that
   * originally returns it. If you use the default HTTP mapping, the `name`
   * should have the format of `operations/some/unique/name`.
   */
  name: string;
  /**
   * The normal response of the operation in case of success.  If the original
   * method returns no data on success, such as `Delete`, the response is
   * `google.protobuf.Empty`.  If the original method is standard
   * `Get`/`Create`/`Update`, the response should be the resource.  For other
   * methods, the response should have the type `XxxResponse`, where `Xxx` is
   * the original method name.  For example, if the original method name is
   * `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
   */
  response: any;
}
/**
 * Photo is used to store 360 photos along with photo metadata.
 */
export interface Schema$Photo {
  /**
   * Absolute time when the photo was captured. When the photo has no exif
   * timestamp, this is used to set a timestamp in the photo metadata.
   */
  captureTime: string;
  /**
   * Connections to other photos. A connection represents the link from this
   * photo to another photo.
   */
  connections: Schema$Connection[];
  /**
   * Output only. The download URL for the photo bytes. This field is set only
   * when GetPhotoRequest.view is set to PhotoView.INCLUDE_DOWNLOAD_URL.
   */
  downloadUrl: string;
  /**
   * Required when updating a photo. Output only when creating a photo.
   * Identifier for the photo, which is unique among all photos in Google.
   */
  photoId: Schema$PhotoId;
  /**
   * Places where this photo belongs.
   */
  places: Schema$Place[];
  /**
   * Pose of the photo.
   */
  pose: Schema$Pose;
  /**
   * Output only. The share link for the photo.
   */
  shareLink: string;
  /**
   * Output only. The thumbnail URL for showing a preview of the given photo.
   */
  thumbnailUrl: string;
  /**
   * Required when creating a photo. Input only. The resource URL where the
   * photo bytes are uploaded to.
   */
  uploadReference: Schema$UploadRef;
  /**
   * Output only. View count of the photo.
   */
  viewCount: string;
}
/**
 * Identifier for a Photo.
 */
export interface Schema$PhotoId {
  /**
   * Required. A unique identifier for a photo.
   */
  id: string;
}
/**
 * Response payload for a single Photo in batch operations including
 * BatchGetPhotos and BatchUpdatePhotos.
 */
export interface Schema$PhotoResponse {
  /**
   * The Photo resource, if the request was successful.
   */
  photo: Schema$Photo;
  /**
   * The status for the operation to get or update a single photo in the batch
   * request.
   */
  status: Schema$Status;
}
/**
 * Place metadata for an entity.
 */
export interface Schema$Place {
  /**
   * Place identifier, as described in
   * https://developers.google.com/places/place-id.
   */
  placeId: string;
}
/**
 * Raw pose measurement for an entity.
 */
export interface Schema$Pose {
  /**
   * Altitude of the pose in meters above WGS84 ellipsoid. NaN indicates an
   * unmeasured quantity.
   */
  altitude: number;
  /**
   * Compass heading, measured at the center of the photo in degrees clockwise
   * from North. Value must be &gt;=0 and &lt;360. NaN indicates an unmeasured
   * quantity.
   */
  heading: number;
  /**
   * Latitude and longitude pair of the pose, as explained here:
   * https://cloud.google.com/datastore/docs/reference/rest/Shared.Types/LatLng
   * When creating a Photo, if the latitude and longitude pair are not provided
   * here, the geolocation from the exif header will be used. If the latitude
   * and longitude pair is not provided and cannot be found in the exif header,
   * the create photo process will fail.
   */
  latLngPair: Schema$LatLng;
  /**
   * Level (the floor in a building) used to configure vertical navigation.
   */
  level: Schema$Level;
  /**
   * Pitch, measured at the center of the photo in degrees. Value must be
   * &gt;=-90 and &lt;= 90. A value of -90 means looking directly down, and a
   * value of 90 means looking directly up. NaN indicates an unmeasured
   * quantity.
   */
  pitch: number;
  /**
   * Roll, measured in degrees. Value must be &gt;= 0 and &lt;360. A value of 0
   * means level with the horizon. NaN indicates an unmeasured quantity.
   */
  roll: number;
}
/**
 * The `Status` type defines a logical error model that is suitable for
 * different programming environments, including REST APIs and RPC APIs. It is
 * used by [gRPC](https://github.com/grpc). The error model is designed to be:
 * - Simple to use and understand for most users - Flexible enough to meet
 * unexpected needs  # Overview  The `Status` message contains three pieces of
 * data: error code, error message, and error details. The error code should be
 * an enum value of google.rpc.Code, but it may accept additional error codes if
 * needed.  The error message should be a developer-facing English message that
 * helps developers *understand* and *resolve* the error. If a localized
 * user-facing error message is needed, put the localized message in the error
 * details or localize it in the client. The optional error details may contain
 * arbitrary information about the error. There is a predefined set of error
 * detail types in the package `google.rpc` that can be used for common error
 * conditions.  # Language mapping  The `Status` message is the logical
 * representation of the error model, but it is not necessarily the actual wire
 * format. When the `Status` message is exposed in different client libraries
 * and different wire protocols, it can be mapped differently. For example, it
 * will likely be mapped to some exceptions in Java, but more likely mapped to
 * some error codes in C.  # Other uses  The error model and the `Status`
 * message can be used in a variety of environments, either with or without
 * APIs, to provide a consistent developer experience across different
 * environments.  Example uses of this error model include:  - Partial errors.
 * If a service needs to return partial errors to the client,     it may embed
 * the `Status` in the normal response to indicate the partial     errors.  -
 * Workflow errors. A typical workflow has multiple steps. Each step may have a
 * `Status` message for error reporting.  - Batch operations. If a client uses
 * batch request and batch response, the     `Status` message should be used
 * directly inside batch response, one for     each error sub-response.  -
 * Asynchronous operations. If an API call embeds asynchronous operation results
 * in its response, the status of those operations should be     represented
 * directly using the `Status` message.  - Logging. If some API errors are
 * stored in logs, the message `Status` could     be used directly after any
 * stripping needed for security/privacy reasons.
 */
export interface Schema$Status {
  /**
   * The status code, which should be an enum value of google.rpc.Code.
   */
  code: number;
  /**
   * A list of messages that carry the error details.  There is a common set of
   * message types for APIs to use.
   */
  details: any[];
  /**
   * A developer-facing error message, which should be in English. Any
   * user-facing error message should be localized and sent in the
   * google.rpc.Status.details field, or localized by the client.
   */
  message: string;
}
/**
 * Request to update the metadata of a Photo. Updating the pixels of a photo is
 * not supported.
 */
export interface Schema$UpdatePhotoRequest {
  /**
   * Required. Photo object containing the new metadata.
   */
  photo: Schema$Photo;
  /**
   * Mask that identifies fields on the photo metadata to update. If not
   * present, the old Photo metadata will be entirely replaced with the new
   * Photo metadata in this request. The update fails if invalid fields are
   * specified. Multiple fields can be specified in a comma-delimited list.  The
   * following fields are valid:  * `pose.heading` * `pose.latLngPair` *
   * `pose.pitch` * `pose.roll` * `pose.level` * `pose.altitude` * `connections`
   * * `places`   &lt;aside class=&quot;note&quot;&gt;&lt;b&gt;Note:&lt;/b&gt;
   * Repeated fields in updateMask mean the entire set of repeated values will
   * be replaced with the new contents. For example, if updateMask contains
   * `connections` and `UpdatePhotoRequest.photo.connections` is empty, all
   * connections will be removed.&lt;/aside&gt;
   */
  updateMask: string;
}
/**
 * Upload reference for media files.
 */
export interface Schema$UploadRef {
  /**
   * Required. An upload reference should be unique for each user. It follows
   * the form:
   * &quot;https://streetviewpublish.googleapis.com/media/user/{account_id}/photo/{upload_reference}&quot;
   */
  uploadUrl: string;
}

export class Resource$Photo {
  root: Streetviewpublish;
  constructor(root: Streetviewpublish) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * streetviewpublish.photo.create
   * @desc After the client finishes uploading the photo with the returned
   * UploadRef, CreatePhoto publishes the uploaded Photo to Street View on
   * Google Maps.  Currently, the only way to set heading, pitch, and roll in
   * CreatePhoto is through the [Photo Sphere XMP
   * metadata](https://developers.google.com/streetview/spherical-metadata) in
   * the photo bytes. The `pose.heading`, `pose.pitch`, `pose.roll`,
   * `pose.altitude`, and `pose.level` fields in Pose are ignored for
   * CreatePhoto.  This method returns the following error codes:  *
   * google.rpc.Code.INVALID_ARGUMENT if the request is malformed or if the
   * uploaded photo is not a 360 photo. * google.rpc.Code.NOT_FOUND if the
   * upload reference does not exist. * google.rpc.Code.RESOURCE_EXHAUSTED if
   * the account has reached the storage limit.
   * @alias streetviewpublish.photo.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().Photo} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Photo>;
  create(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Photo>,
      callback?: BodyResponseCallback<Schema$Photo>): void;
  create(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Photo>,
      callback?: BodyResponseCallback<Schema$Photo>):
      void|AxiosPromise<Schema$Photo> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://streetviewpublish.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/photo').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Photo>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Photo>(parameters);
    }
  }


  /**
   * streetviewpublish.photo.delete
   * @desc Deletes a Photo and its metadata.  This method returns the following
   * error codes:  * google.rpc.Code.PERMISSION_DENIED if the requesting user
   * did not create the requested photo. * google.rpc.Code.NOT_FOUND if the
   * photo ID does not exist.
   * @alias streetviewpublish.photo.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.photoId Required. ID of the Photo.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://streetviewpublish.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl + '/v1/photo/{photoId}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['photoId'],
      pathParams: ['photoId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * streetviewpublish.photo.get
   * @desc Gets the metadata of the specified Photo.  This method returns the
   * following error codes:  * google.rpc.Code.PERMISSION_DENIED if the
   * requesting user did not create the requested Photo. *
   * google.rpc.Code.NOT_FOUND if the requested Photo does not exist. *
   * google.rpc.Code.UNAVAILABLE if the requested Photo is still being indexed.
   * @alias streetviewpublish.photo.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.photoId Required. ID of the Photo.
   * @param {string=} params.view Specifies if a download URL for the photo bytes should be returned in the Photo response.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Photo>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Photo>,
      callback?: BodyResponseCallback<Schema$Photo>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Photo>,
      callback?: BodyResponseCallback<Schema$Photo>):
      void|AxiosPromise<Schema$Photo> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://streetviewpublish.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl + '/v1/photo/{photoId}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['photoId'],
      pathParams: ['photoId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Photo>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Photo>(parameters);
    }
  }


  /**
   * streetviewpublish.photo.startUpload
   * @desc Creates an upload session to start uploading photo bytes. The upload
   * URL of the returned UploadRef is used to upload the bytes for the Photo. In
   * addition to the photo requirements shown in
   * https://support.google.com/maps/answer/7012050?hl=en&ref_topic=6275604, the
   * photo must also meet the following requirements:  * Photo Sphere XMP
   * metadata must be included in the photo medadata. See
   * https://developers.google.com/streetview/spherical-metadata for the
   * required fields. * The pixel size of the photo must meet the size
   * requirements listed in
   * https://support.google.com/maps/answer/7012050?hl=en&ref_topic=6275604, and
   * the photo must be a full 360 horizontally.  After the upload is complete,
   * the UploadRef is used with CreatePhoto to create the Photo object entry.
   * @alias streetviewpublish.photo.startUpload
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().Empty} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  startUpload(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$UploadRef>;
  startUpload(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$UploadRef>,
      callback?: BodyResponseCallback<Schema$UploadRef>): void;
  startUpload(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$UploadRef>,
      callback?: BodyResponseCallback<Schema$UploadRef>):
      void|AxiosPromise<Schema$UploadRef> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://streetviewpublish.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/photo:startUpload')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$UploadRef>(parameters, callback);
    } else {
      return createAPIRequest<Schema$UploadRef>(parameters);
    }
  }


  /**
   * streetviewpublish.photo.update
   * @desc Updates the metadata of a Photo, such as pose, place association,
   * connections, etc. Changing the pixels of a photo is not supported.  Only
   * the fields specified in the updateMask field are used. If `updateMask` is
   * not present, the update applies to all fields.  <aside
   * class="note"><b>Note:</b> To update Pose.altitude, Pose.latLngPair has to
   * be filled as well. Otherwise, the request will fail.</aside>  This method
   * returns the following error codes:  * google.rpc.Code.PERMISSION_DENIED if
   * the requesting user did not create the requested photo. *
   * google.rpc.Code.INVALID_ARGUMENT if the request is malformed. *
   * google.rpc.Code.NOT_FOUND if the requested photo does not exist. *
   * google.rpc.Code.UNAVAILABLE if the requested Photo is still being indexed.
   * @alias streetviewpublish.photo.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.id Required. A unique identifier for a photo.
   * @param {string=} params.updateMask Mask that identifies fields on the photo metadata to update. If not present, the old Photo metadata will be entirely replaced with the new Photo metadata in this request. The update fails if invalid fields are specified. Multiple fields can be specified in a comma-delimited list.  The following fields are valid:  * `pose.heading` * `pose.latLngPair` * `pose.pitch` * `pose.roll` * `pose.level` * `pose.altitude` * `connections` * `places`   <aside class="note"><b>Note:</b> Repeated fields in updateMask mean the entire set of repeated values will be replaced with the new contents. For example, if updateMask contains `connections` and `UpdatePhotoRequest.photo.connections` is empty, all connections will be removed.</aside>
   * @param {().Photo} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Photo>;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Photo>,
      callback?: BodyResponseCallback<Schema$Photo>): void;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Photo>,
      callback?: BodyResponseCallback<Schema$Photo>):
      void|AxiosPromise<Schema$Photo> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://streetviewpublish.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/photo/{id}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['id'],
      pathParams: ['id'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Photo>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Photo>(parameters);
    }
  }
}

export class Resource$Photos {
  root: Streetviewpublish;
  constructor(root: Streetviewpublish) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * streetviewpublish.photos.batchDelete
   * @desc Deletes a list of Photos and their metadata.  Note that if
   * BatchDeletePhotos fails, either critical fields are missing or there was an
   * authentication error. Even if BatchDeletePhotos succeeds, there may have
   * been failures for single photos in the batch. These failures will be
   * specified in each PhotoResponse.status in
   * BatchDeletePhotosResponse.results. See DeletePhoto for specific failures
   * that can occur per photo.
   * @alias streetviewpublish.photos.batchDelete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().BatchDeletePhotosRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  batchDelete(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$BatchDeletePhotosResponse>;
  batchDelete(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$BatchDeletePhotosResponse>,
      callback?: BodyResponseCallback<Schema$BatchDeletePhotosResponse>): void;
  batchDelete(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$BatchDeletePhotosResponse>,
      callback?: BodyResponseCallback<Schema$BatchDeletePhotosResponse>):
      void|AxiosPromise<Schema$BatchDeletePhotosResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://streetviewpublish.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/photos:batchDelete')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$BatchDeletePhotosResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$BatchDeletePhotosResponse>(parameters);
    }
  }


  /**
   * streetviewpublish.photos.batchGet
   * @desc Gets the metadata of the specified Photo batch.  Note that if
   * BatchGetPhotos fails, either critical fields are missing or there was an
   * authentication error. Even if BatchGetPhotos succeeds, there may have been
   * failures for single photos in the batch. These failures will be specified
   * in each PhotoResponse.status in BatchGetPhotosResponse.results. See
   * GetPhoto for specific failures that can occur per photo.
   * @alias streetviewpublish.photos.batchGet
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.photoIds Required. IDs of the Photos. For HTTP GET requests, the URL query parameter should be `photoIds=<id1>&photoIds=<id2>&...`.
   * @param {string=} params.view Specifies if a download URL for the photo bytes should be returned in the Photo response.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  batchGet(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$BatchGetPhotosResponse>;
  batchGet(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$BatchGetPhotosResponse>,
      callback?: BodyResponseCallback<Schema$BatchGetPhotosResponse>): void;
  batchGet(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$BatchGetPhotosResponse>,
      callback?: BodyResponseCallback<Schema$BatchGetPhotosResponse>):
      void|AxiosPromise<Schema$BatchGetPhotosResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://streetviewpublish.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl + '/v1/photos:batchGet').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$BatchGetPhotosResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$BatchGetPhotosResponse>(parameters);
    }
  }


  /**
   * streetviewpublish.photos.batchUpdate
   * @desc Updates the metadata of Photos, such as pose, place association,
   * connections, etc. Changing the pixels of photos is not supported.  Note
   * that if BatchUpdatePhotos fails, either critical fields are missing or
   * there was an authentication error. Even if BatchUpdatePhotos succeeds,
   * there may have been failures for single photos in the batch. These failures
   * will be specified in each PhotoResponse.status in
   * BatchUpdatePhotosResponse.results. See UpdatePhoto for specific failures
   * that can occur per photo.  Only the fields specified in updateMask field
   * are used. If `updateMask` is not present, the update applies to all fields.
   * <aside class="note"><b>Note:</b> To update Pose.altitude, Pose.latLngPair
   * has to be filled as well. Otherwise, the request will fail.</aside>
   * @alias streetviewpublish.photos.batchUpdate
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().BatchUpdatePhotosRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  batchUpdate(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$BatchUpdatePhotosResponse>;
  batchUpdate(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$BatchUpdatePhotosResponse>,
      callback?: BodyResponseCallback<Schema$BatchUpdatePhotosResponse>): void;
  batchUpdate(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$BatchUpdatePhotosResponse>,
      callback?: BodyResponseCallback<Schema$BatchUpdatePhotosResponse>):
      void|AxiosPromise<Schema$BatchUpdatePhotosResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://streetviewpublish.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/photos:batchUpdate')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$BatchUpdatePhotosResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$BatchUpdatePhotosResponse>(parameters);
    }
  }


  /**
   * streetviewpublish.photos.list
   * @desc Lists all the Photos that belong to the user.  <aside
   * class="note"><b>Note:</b> Recently created photos that are still being
   * indexed are not returned in the response.</aside>
   * @alias streetviewpublish.photos.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.filter The filter expression. For example: `placeId=ChIJj61dQgK6j4AR4GeTYWZsKWw`.  The only filter supported at the moment is `placeId`.
   * @param {integer=} params.pageSize The maximum number of photos to return. `pageSize` must be non-negative. If `pageSize` is zero or is not provided, the default page size of 100 will be used. The number of photos returned in the response may be less than `pageSize` if the number of photos that belong to the user is less than `pageSize`.
   * @param {string=} params.pageToken The nextPageToken value returned from a previous ListPhotos request, if any.
   * @param {string=} params.view Specifies if a download URL for the photos bytes should be returned in the Photos response.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListPhotosResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListPhotosResponse>,
      callback?: BodyResponseCallback<Schema$ListPhotosResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListPhotosResponse>,
      callback?: BodyResponseCallback<Schema$ListPhotosResponse>):
      void|AxiosPromise<Schema$ListPhotosResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://streetviewpublish.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/photos').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListPhotosResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListPhotosResponse>(parameters);
    }
  }
}
