/**
 * Copyright 2019 Google LLC
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

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
} from 'google-auth-library';
import {
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  GlobalOptions,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {GaxiosPromise} from 'gaxios';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace streetviewpublish_v1 {
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
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
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
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
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
   * Street View Publish API
   *
   * Publishes 360 photos to Google Maps, along with position, orientation, and connectivity metadata. Apps can offer an interface for positioning, connecting, and uploading user-generated Street View images.
   *
   * @example
   * const {google} = require('googleapis');
   * const streetviewpublish = google.streetviewpublish('v1');
   *
   * @namespace streetviewpublish
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Streetviewpublish
   */
  export class Streetviewpublish {
    context: APIRequestContext;
    photo: Resource$Photo;
    photos: Resource$Photos;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.photo = new Resource$Photo(this.context);
      this.photos = new Resource$Photos(this.context);
    }
  }

  /**
   * Request to delete multiple Photos.
   */
  export interface Schema$BatchDeletePhotosRequest {
    /**
     * Required. IDs of the Photos. HTTP GET requests require the following syntax for the URL query parameter: `photoIds=&lt;id1&gt;&amp;photoIds=&lt;id2&gt;&amp;...`.
     */
    photoIds?: string[] | null;
  }
  /**
   * Response to batch delete of one or more Photos.
   */
  export interface Schema$BatchDeletePhotosResponse {
    /**
     * The status for the operation to delete a single Photo in the batch request.
     */
    status?: Schema$Status[];
  }
  /**
   * Response to batch get of Photos.
   */
  export interface Schema$BatchGetPhotosResponse {
    /**
     * List of results for each individual Photo requested, in the same order as the requests in BatchGetPhotos.
     */
    results?: Schema$PhotoResponse[];
  }
  /**
   * Request to update the metadata of photos. Updating the pixels of photos is not supported.
   */
  export interface Schema$BatchUpdatePhotosRequest {
    /**
     * Required. List of UpdatePhotoRequests.
     */
    updatePhotoRequests?: Schema$UpdatePhotoRequest[];
  }
  /**
   * Response to batch update of metadata of one or more Photos.
   */
  export interface Schema$BatchUpdatePhotosResponse {
    /**
     * List of results for each individual Photo updated, in the same order as the request.
     */
    results?: Schema$PhotoResponse[];
  }
  /**
   * A connection is the link from a source photo to a destination photo.
   */
  export interface Schema$Connection {
    /**
     * Required. The destination of the connection from the containing photo to another photo.
     */
    target?: Schema$PhotoId;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * An object representing a latitude/longitude pair. This is expressed as a pair of doubles representing degrees latitude and degrees longitude. Unless specified otherwise, this must conform to the &lt;a href=&quot;http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf&quot;&gt;WGS84 standard&lt;/a&gt;. Values must be within normalized ranges.
   */
  export interface Schema$LatLng {
    /**
     * The latitude in degrees. It must be in the range [-90.0, +90.0].
     */
    latitude?: number | null;
    /**
     * The longitude in degrees. It must be in the range [-180.0, +180.0].
     */
    longitude?: number | null;
  }
  /**
   * Level information containing level number and its corresponding name.
   */
  export interface Schema$Level {
    /**
     * Required. A name assigned to this Level, restricted to 3 characters. Consider how the elevator buttons would be labeled for this level if there was an elevator.
     */
    name?: string | null;
    /**
     * Floor number, used for ordering. 0 indicates the ground level, 1 indicates the first level above ground level, -1 indicates the first level under ground level. Non-integer values are OK.
     */
    number?: number | null;
  }
  /**
   * Response to list all photos that belong to a user.
   */
  export interface Schema$ListPhotosResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * List of photos. The pageSize field in the request determines the number of items returned.
     */
    photos?: Schema$Photo[];
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
    /**
     * Service-specific metadata associated with the operation.  It typically contains progress information and common metadata such as create time. Some services might not provide such metadata.  Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
     */
    name?: string | null;
    /**
     * The normal response of the operation in case of success.  If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`.  If the original method is standard `Get`/`Create`/`Update`, the response should be the resource.  For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name.  For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * Photo is used to store 360 photos along with photo metadata.
   */
  export interface Schema$Photo {
    /**
     * Absolute time when the photo was captured. When the photo has no exif timestamp, this is used to set a timestamp in the photo metadata.
     */
    captureTime?: string | null;
    /**
     * Connections to other photos. A connection represents the link from this photo to another photo.
     */
    connections?: Schema$Connection[];
    /**
     * Output only. The download URL for the photo bytes. This field is set only when GetPhotoRequest.view is set to PhotoView.INCLUDE_DOWNLOAD_URL.
     */
    downloadUrl?: string | null;
    /**
     * Output only. Status in Google Maps, whether this photo was published or rejected.
     */
    mapsPublishStatus?: string | null;
    /**
     * Required when updating a photo. Output only when creating a photo. Identifier for the photo, which is unique among all photos in Google.
     */
    photoId?: Schema$PhotoId;
    /**
     * Places where this photo belongs.
     */
    places?: Schema$Place[];
    /**
     * Pose of the photo.
     */
    pose?: Schema$Pose;
    /**
     * Output only. The share link for the photo.
     */
    shareLink?: string | null;
    /**
     * Output only. The thumbnail URL for showing a preview of the given photo.
     */
    thumbnailUrl?: string | null;
    /**
     * Output only. Status of rights transfer on this photo.
     */
    transferStatus?: string | null;
    /**
     * Required when creating a photo. Input only. The resource URL where the photo bytes are uploaded to.
     */
    uploadReference?: Schema$UploadRef;
    /**
     * Output only. View count of the photo.
     */
    viewCount?: string | null;
  }
  /**
   * Identifier for a Photo.
   */
  export interface Schema$PhotoId {
    /**
     * Required. A unique identifier for a photo.
     */
    id?: string | null;
  }
  /**
   * Response payload for a single Photo in batch operations including BatchGetPhotos and BatchUpdatePhotos.
   */
  export interface Schema$PhotoResponse {
    /**
     * The Photo resource, if the request was successful.
     */
    photo?: Schema$Photo;
    /**
     * The status for the operation to get or update a single photo in the batch request.
     */
    status?: Schema$Status;
  }
  /**
   * Place metadata for an entity.
   */
  export interface Schema$Place {
    /**
     * Output-only. The language_code that the name is localized with. This should be the language_code specified in the request, but may be a fallback.
     */
    languageCode?: string | null;
    /**
     * Output-only. The name of the place, localized to the language_code.
     */
    name?: string | null;
    /**
     * Place identifier, as described in https://developers.google.com/places/place-id.
     */
    placeId?: string | null;
  }
  /**
   * Raw pose measurement for an entity.
   */
  export interface Schema$Pose {
    /**
     * The estimated horizontal accuracy of this pose in meters with 68% confidence (one standard deviation). For example, on Android, this value is available from this method: https://developer.android.com/reference/android/location/Location#getAccuracy(). Other platforms have different methods of obtaining similar accuracy estimations.
     */
    accuracyMeters?: number | null;
    /**
     * Altitude of the pose in meters above WGS84 ellipsoid. NaN indicates an unmeasured quantity.
     */
    altitude?: number | null;
    /**
     * Compass heading, measured at the center of the photo in degrees clockwise from North. Value must be &gt;=0 and &lt;360. NaN indicates an unmeasured quantity.
     */
    heading?: number | null;
    /**
     * Latitude and longitude pair of the pose, as explained here: https://cloud.google.com/datastore/docs/reference/rest/Shared.Types/LatLng When creating a Photo, if the latitude and longitude pair are not provided, the geolocation from the exif header is used. A latitude and longitude pair not provided in the photo or exif header causes the photo process to fail.
     */
    latLngPair?: Schema$LatLng;
    /**
     * Level (the floor in a building) used to configure vertical navigation.
     */
    level?: Schema$Level;
    /**
     * Pitch, measured at the center of the photo in degrees. Value must be &gt;=-90 and &lt;= 90. A value of -90 means looking directly down, and a value of 90 means looking directly up. NaN indicates an unmeasured quantity.
     */
    pitch?: number | null;
    /**
     * Roll, measured in degrees. Value must be &gt;= 0 and &lt;360. A value of 0 means level with the horizon. NaN indicates an unmeasured quantity.
     */
    roll?: number | null;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details.  You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details.  There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string | null;
  }
  /**
   * Request to update the metadata of a Photo. Updating the pixels of a photo is not supported.
   */
  export interface Schema$UpdatePhotoRequest {
    /**
     * Required. Photo object containing the new metadata.
     */
    photo?: Schema$Photo;
    /**
     * Mask that identifies fields on the photo metadata to update. If not present, the old Photo metadata is entirely replaced with the new Photo metadata in this request. The update fails if invalid fields are specified. Multiple fields can be specified in a comma-delimited list.  The following fields are valid:  * `pose.heading` * `pose.latLngPair` * `pose.pitch` * `pose.roll` * `pose.level` * `pose.altitude` * `connections` * `places`   &lt;aside class=&quot;note&quot;&gt;&lt;b&gt;Note:&lt;/b&gt; When updateMask contains repeated fields, the entire set of repeated values get replaced with the new contents. For example, if updateMask contains `connections` and `UpdatePhotoRequest.photo.connections` is empty, all connections are removed.&lt;/aside&gt;
     */
    updateMask?: string | null;
  }
  /**
   * Upload reference for media files.
   */
  export interface Schema$UploadRef {
    /**
     * Required. An upload reference should be unique for each user. It follows the form: &quot;https://streetviewpublish.googleapis.com/media/user/{account_id}/photo/{upload_reference}&quot;
     */
    uploadUrl?: string | null;
  }

  export class Resource$Photo {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * streetviewpublish.photo.create
     * @desc After the client finishes uploading the photo with the returned UploadRef, CreatePhoto publishes the uploaded Photo to Street View on Google Maps.  Currently, the only way to set heading, pitch, and roll in CreatePhoto is through the [Photo Sphere XMP metadata](https://developers.google.com/streetview/spherical-metadata) in the photo bytes. CreatePhoto ignores the  `pose.heading`, `pose.pitch`, `pose.roll`, `pose.altitude`, and `pose.level` fields in Pose.  This method returns the following error codes:  * google.rpc.Code.INVALID_ARGUMENT if the request is malformed or if the uploaded photo is not a 360 photo. * google.rpc.Code.NOT_FOUND if the upload reference does not exist. * google.rpc.Code.RESOURCE_EXHAUSTED if the account has reached the storage limit.
     * @alias streetviewpublish.photo.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().Photo} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Photo$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Photo>;
    create(
      params: Params$Resource$Photo$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Photo>,
      callback: BodyResponseCallback<Schema$Photo>
    ): void;
    create(
      params: Params$Resource$Photo$Create,
      callback: BodyResponseCallback<Schema$Photo>
    ): void;
    create(callback: BodyResponseCallback<Schema$Photo>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Photo$Create
        | BodyResponseCallback<Schema$Photo>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Photo>,
      callback?: BodyResponseCallback<Schema$Photo>
    ): void | GaxiosPromise<Schema$Photo> {
      let params = (paramsOrCallback || {}) as Params$Resource$Photo$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Photo$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://streetviewpublish.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/photo').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Photo>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Photo>(parameters);
      }
    }

    /**
     * streetviewpublish.photo.delete
     * @desc Deletes a Photo and its metadata.  This method returns the following error codes:  * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested photo. * google.rpc.Code.NOT_FOUND if the photo ID does not exist.
     * @alias streetviewpublish.photo.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.photoId Required. ID of the Photo.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Photo$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Photo$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Photo$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Photo$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as Params$Resource$Photo$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Photo$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://streetviewpublish.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/photo/{photoId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['photoId'],
        pathParams: ['photoId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * streetviewpublish.photo.get
     * @desc Gets the metadata of the specified Photo.  This method returns the following error codes:  * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested Photo. * google.rpc.Code.NOT_FOUND if the requested Photo does not exist. * google.rpc.Code.UNAVAILABLE if the requested Photo is still being indexed.
     * @alias streetviewpublish.photo.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.languageCode The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. If language_code is unspecified, the user's language preference for Google services is used.
     * @param {string} params.photoId Required. ID of the Photo.
     * @param {string=} params.view Specifies if a download URL for the photo bytes should be returned in the Photo response.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Photo$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Photo>;
    get(
      params: Params$Resource$Photo$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Photo>,
      callback: BodyResponseCallback<Schema$Photo>
    ): void;
    get(
      params: Params$Resource$Photo$Get,
      callback: BodyResponseCallback<Schema$Photo>
    ): void;
    get(callback: BodyResponseCallback<Schema$Photo>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Photo$Get
        | BodyResponseCallback<Schema$Photo>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Photo>,
      callback?: BodyResponseCallback<Schema$Photo>
    ): void | GaxiosPromise<Schema$Photo> {
      let params = (paramsOrCallback || {}) as Params$Resource$Photo$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Photo$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://streetviewpublish.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/photo/{photoId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['photoId'],
        pathParams: ['photoId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Photo>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Photo>(parameters);
      }
    }

    /**
     * streetviewpublish.photo.startUpload
     * @desc Creates an upload session to start uploading photo bytes.  The method uses the upload URL of the returned UploadRef to upload the bytes for the Photo.  In addition to the photo requirements shown in https://support.google.com/maps/answer/7012050?hl=en&ref_topic=6275604, the photo must meet the following requirements:  * Photo Sphere XMP metadata must be included in the photo medadata. See https://developers.google.com/streetview/spherical-metadata for the required fields. * The pixel size of the photo must meet the size requirements listed in https://support.google.com/maps/answer/7012050?hl=en&ref_topic=6275604, and the photo must be a full 360 horizontally.  After the upload completes, the method uses UploadRef with CreatePhoto to create the Photo object entry.
     * @alias streetviewpublish.photo.startUpload
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().Empty} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    startUpload(
      params?: Params$Resource$Photo$Startupload,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UploadRef>;
    startUpload(
      params: Params$Resource$Photo$Startupload,
      options: MethodOptions | BodyResponseCallback<Schema$UploadRef>,
      callback: BodyResponseCallback<Schema$UploadRef>
    ): void;
    startUpload(
      params: Params$Resource$Photo$Startupload,
      callback: BodyResponseCallback<Schema$UploadRef>
    ): void;
    startUpload(callback: BodyResponseCallback<Schema$UploadRef>): void;
    startUpload(
      paramsOrCallback?:
        | Params$Resource$Photo$Startupload
        | BodyResponseCallback<Schema$UploadRef>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$UploadRef>,
      callback?: BodyResponseCallback<Schema$UploadRef>
    ): void | GaxiosPromise<Schema$UploadRef> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Photo$Startupload;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Photo$Startupload;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://streetviewpublish.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/photo:startUpload').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UploadRef>(parameters, callback);
      } else {
        return createAPIRequest<Schema$UploadRef>(parameters);
      }
    }

    /**
     * streetviewpublish.photo.update
     * @desc Updates the metadata of a Photo, such as pose, place association, connections, etc. Changing the pixels of a photo is not supported.  Only the fields specified in the updateMask field are used. If `updateMask` is not present, the update applies to all fields.  This method returns the following error codes:  * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested photo. * google.rpc.Code.INVALID_ARGUMENT if the request is malformed. * google.rpc.Code.NOT_FOUND if the requested photo does not exist. * google.rpc.Code.UNAVAILABLE if the requested Photo is still being indexed.
     * @alias streetviewpublish.photo.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Required. A unique identifier for a photo.
     * @param {string=} params.updateMask Mask that identifies fields on the photo metadata to update. If not present, the old Photo metadata is entirely replaced with the new Photo metadata in this request. The update fails if invalid fields are specified. Multiple fields can be specified in a comma-delimited list.  The following fields are valid:  * `pose.heading` * `pose.latLngPair` * `pose.pitch` * `pose.roll` * `pose.level` * `pose.altitude` * `connections` * `places`   <aside class="note"><b>Note:</b> When updateMask contains repeated fields, the entire set of repeated values get replaced with the new contents. For example, if updateMask contains `connections` and `UpdatePhotoRequest.photo.connections` is empty, all connections are removed.</aside>
     * @param {().Photo} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Photo$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Photo>;
    update(
      params: Params$Resource$Photo$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Photo>,
      callback: BodyResponseCallback<Schema$Photo>
    ): void;
    update(
      params: Params$Resource$Photo$Update,
      callback: BodyResponseCallback<Schema$Photo>
    ): void;
    update(callback: BodyResponseCallback<Schema$Photo>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Photo$Update
        | BodyResponseCallback<Schema$Photo>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Photo>,
      callback?: BodyResponseCallback<Schema$Photo>
    ): void | GaxiosPromise<Schema$Photo> {
      let params = (paramsOrCallback || {}) as Params$Resource$Photo$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Photo$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://streetviewpublish.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/photo/{id}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Photo>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Photo>(parameters);
      }
    }
  }

  export interface Params$Resource$Photo$Create extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Photo;
  }
  export interface Params$Resource$Photo$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. ID of the Photo.
     */
    photoId?: string;
  }
  export interface Params$Resource$Photo$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. If language_code is unspecified, the user's language preference for Google services is used.
     */
    languageCode?: string;
    /**
     * Required. ID of the Photo.
     */
    photoId?: string;
    /**
     * Specifies if a download URL for the photo bytes should be returned in the Photo response.
     */
    view?: string;
  }
  export interface Params$Resource$Photo$Startupload
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Empty;
  }
  export interface Params$Resource$Photo$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. A unique identifier for a photo.
     */
    id?: string;
    /**
     * Mask that identifies fields on the photo metadata to update. If not present, the old Photo metadata is entirely replaced with the new Photo metadata in this request. The update fails if invalid fields are specified. Multiple fields can be specified in a comma-delimited list.  The following fields are valid:  * `pose.heading` * `pose.latLngPair` * `pose.pitch` * `pose.roll` * `pose.level` * `pose.altitude` * `connections` * `places`   <aside class="note"><b>Note:</b> When updateMask contains repeated fields, the entire set of repeated values get replaced with the new contents. For example, if updateMask contains `connections` and `UpdatePhotoRequest.photo.connections` is empty, all connections are removed.</aside>
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Photo;
  }

  export class Resource$Photos {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * streetviewpublish.photos.batchDelete
     * @desc Deletes a list of Photos and their metadata.  Note that if BatchDeletePhotos fails, either critical fields are missing or there is an authentication error. Even if BatchDeletePhotos succeeds, individual photos in the batch may have failures. These failures are specified in each PhotoResponse.status in BatchDeletePhotosResponse.results. See DeletePhoto for specific failures that can occur per photo.
     * @alias streetviewpublish.photos.batchDelete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().BatchDeletePhotosRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchDelete(
      params?: Params$Resource$Photos$Batchdelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BatchDeletePhotosResponse>;
    batchDelete(
      params: Params$Resource$Photos$Batchdelete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchDeletePhotosResponse>,
      callback: BodyResponseCallback<Schema$BatchDeletePhotosResponse>
    ): void;
    batchDelete(
      params: Params$Resource$Photos$Batchdelete,
      callback: BodyResponseCallback<Schema$BatchDeletePhotosResponse>
    ): void;
    batchDelete(
      callback: BodyResponseCallback<Schema$BatchDeletePhotosResponse>
    ): void;
    batchDelete(
      paramsOrCallback?:
        | Params$Resource$Photos$Batchdelete
        | BodyResponseCallback<Schema$BatchDeletePhotosResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchDeletePhotosResponse>,
      callback?: BodyResponseCallback<Schema$BatchDeletePhotosResponse>
    ): void | GaxiosPromise<Schema$BatchDeletePhotosResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Photos$Batchdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Photos$Batchdelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://streetviewpublish.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/photos:batchDelete').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BatchDeletePhotosResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$BatchDeletePhotosResponse>(parameters);
      }
    }

    /**
     * streetviewpublish.photos.batchGet
     * @desc Gets the metadata of the specified Photo batch.  Note that if BatchGetPhotos fails, either critical fields are missing or there is an authentication error. Even if BatchGetPhotos succeeds, individual photos in the batch may have failures. These failures are specified in each PhotoResponse.status in BatchGetPhotosResponse.results. See GetPhoto for specific failures that can occur per photo.
     * @alias streetviewpublish.photos.batchGet
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.languageCode The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. If language_code is unspecified, the user's language preference for Google services is used.
     * @param {string=} params.photoIds Required. IDs of the Photos. For HTTP GET requests, the URL query parameter should be `photoIds=<id1>&photoIds=<id2>&...`.
     * @param {string=} params.view Specifies if a download URL for the photo bytes should be returned in the Photo response.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchGet(
      params?: Params$Resource$Photos$Batchget,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BatchGetPhotosResponse>;
    batchGet(
      params: Params$Resource$Photos$Batchget,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchGetPhotosResponse>,
      callback: BodyResponseCallback<Schema$BatchGetPhotosResponse>
    ): void;
    batchGet(
      params: Params$Resource$Photos$Batchget,
      callback: BodyResponseCallback<Schema$BatchGetPhotosResponse>
    ): void;
    batchGet(
      callback: BodyResponseCallback<Schema$BatchGetPhotosResponse>
    ): void;
    batchGet(
      paramsOrCallback?:
        | Params$Resource$Photos$Batchget
        | BodyResponseCallback<Schema$BatchGetPhotosResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchGetPhotosResponse>,
      callback?: BodyResponseCallback<Schema$BatchGetPhotosResponse>
    ): void | GaxiosPromise<Schema$BatchGetPhotosResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Photos$Batchget;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Photos$Batchget;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://streetviewpublish.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/photos:batchGet').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BatchGetPhotosResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$BatchGetPhotosResponse>(parameters);
      }
    }

    /**
     * streetviewpublish.photos.batchUpdate
     * @desc Updates the metadata of Photos, such as pose, place association, connections, etc. Changing the pixels of photos is not supported.  Note that if BatchUpdatePhotos fails, either critical fields are missing or there is an authentication error. Even if BatchUpdatePhotos succeeds, individual photos in the batch may have failures. These failures are specified in each PhotoResponse.status in BatchUpdatePhotosResponse.results. See UpdatePhoto for specific failures that can occur per photo.  Only the fields specified in updateMask field are used. If `updateMask` is not present, the update applies to all fields.  The number of UpdatePhotoRequest messages in a BatchUpdatePhotosRequest must not exceed 20.  <aside class="note"><b>Note:</b> To update Pose.altitude, Pose.latLngPair has to be filled as well. Otherwise, the request will fail.</aside>
     * @alias streetviewpublish.photos.batchUpdate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().BatchUpdatePhotosRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchUpdate(
      params?: Params$Resource$Photos$Batchupdate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BatchUpdatePhotosResponse>;
    batchUpdate(
      params: Params$Resource$Photos$Batchupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchUpdatePhotosResponse>,
      callback: BodyResponseCallback<Schema$BatchUpdatePhotosResponse>
    ): void;
    batchUpdate(
      params: Params$Resource$Photos$Batchupdate,
      callback: BodyResponseCallback<Schema$BatchUpdatePhotosResponse>
    ): void;
    batchUpdate(
      callback: BodyResponseCallback<Schema$BatchUpdatePhotosResponse>
    ): void;
    batchUpdate(
      paramsOrCallback?:
        | Params$Resource$Photos$Batchupdate
        | BodyResponseCallback<Schema$BatchUpdatePhotosResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchUpdatePhotosResponse>,
      callback?: BodyResponseCallback<Schema$BatchUpdatePhotosResponse>
    ): void | GaxiosPromise<Schema$BatchUpdatePhotosResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Photos$Batchupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Photos$Batchupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://streetviewpublish.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/photos:batchUpdate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BatchUpdatePhotosResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$BatchUpdatePhotosResponse>(parameters);
      }
    }

    /**
     * streetviewpublish.photos.list
     * @desc Lists all the Photos that belong to the user.  <aside class="note"><b>Note:</b> Recently created photos that are still being indexed are not returned in the response.</aside>
     * @alias streetviewpublish.photos.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The filter expression. For example: `placeId=ChIJj61dQgK6j4AR4GeTYWZsKWw`.  The only filter supported at the moment is `placeId`.
     * @param {string=} params.languageCode The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. If language_code is unspecified, the user's language preference for Google services is used.
     * @param {integer=} params.pageSize The maximum number of photos to return. `pageSize` must be non-negative. If `pageSize` is zero or is not provided, the default page size of 100 is used. The number of photos returned in the response may be less than `pageSize` if the number of photos that belong to the user is less than `pageSize`.
     * @param {string=} params.pageToken The nextPageToken value returned from a previous ListPhotos request, if any.
     * @param {string=} params.view Specifies if a download URL for the photos bytes should be returned in the Photos response.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Photos$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListPhotosResponse>;
    list(
      params: Params$Resource$Photos$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListPhotosResponse>,
      callback: BodyResponseCallback<Schema$ListPhotosResponse>
    ): void;
    list(
      params: Params$Resource$Photos$List,
      callback: BodyResponseCallback<Schema$ListPhotosResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListPhotosResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Photos$List
        | BodyResponseCallback<Schema$ListPhotosResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPhotosResponse>,
      callback?: BodyResponseCallback<Schema$ListPhotosResponse>
    ): void | GaxiosPromise<Schema$ListPhotosResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Photos$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Photos$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://streetviewpublish.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/photos').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListPhotosResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListPhotosResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Photos$Batchdelete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchDeletePhotosRequest;
  }
  export interface Params$Resource$Photos$Batchget extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. If language_code is unspecified, the user's language preference for Google services is used.
     */
    languageCode?: string;
    /**
     * Required. IDs of the Photos. For HTTP GET requests, the URL query parameter should be `photoIds=<id1>&photoIds=<id2>&...`.
     */
    photoIds?: string[];
    /**
     * Specifies if a download URL for the photo bytes should be returned in the Photo response.
     */
    view?: string;
  }
  export interface Params$Resource$Photos$Batchupdate
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchUpdatePhotosRequest;
  }
  export interface Params$Resource$Photos$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The filter expression. For example: `placeId=ChIJj61dQgK6j4AR4GeTYWZsKWw`.  The only filter supported at the moment is `placeId`.
     */
    filter?: string;
    /**
     * The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. If language_code is unspecified, the user's language preference for Google services is used.
     */
    languageCode?: string;
    /**
     * The maximum number of photos to return. `pageSize` must be non-negative. If `pageSize` is zero or is not provided, the default page size of 100 is used. The number of photos returned in the response may be less than `pageSize` if the number of photos that belong to the user is less than `pageSize`.
     */
    pageSize?: number;
    /**
     * The nextPageToken value returned from a previous ListPhotos request, if any.
     */
    pageToken?: string;
    /**
     * Specifies if a download URL for the photos bytes should be returned in the Photos response.
     */
    view?: string;
  }
}
