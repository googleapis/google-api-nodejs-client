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

import {createAPIRequest} from '../../lib/apirequest';

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
function Streetviewpublish(options) {
  const self = this;
  self._options = options || {};
  self.photo = {
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
     * @memberOf! streetviewpublish(v1)
     *
     * @param {object} params Parameters for request
     * @param {streetviewpublish(v1).Photo} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * streetviewpublish.photo.delete
        * @desc Deletes a Photo and its metadata.  This method returns the
        * following error codes:  * google.rpc.Code.PERMISSION_DENIED if the
        * requesting user did not create the requested photo. *
        * google.rpc.Code.NOT_FOUND if the photo ID does not exist.
        * @alias streetviewpublish.photo.delete
        * @memberOf! streetviewpublish(v1)
        *
        * @param {object} params Parameters for request
        * @param {string} params.photoId Required. ID of the Photo.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    delete (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl =
          options.rootUrl || 'https://streetviewpublish.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/photo/{photoId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['photoId'],
        pathParams: ['photoId'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * streetviewpublish.photo.get
        * @desc Gets the metadata of the specified Photo.  This method returns
        * the following error codes:  * google.rpc.Code.PERMISSION_DENIED if the
        * requesting user did not create the requested Photo. *
        * google.rpc.Code.NOT_FOUND if the requested Photo does not exist.
        * @alias streetviewpublish.photo.get
        * @memberOf! streetviewpublish(v1)
        *
        * @param {object} params Parameters for request
        * @param {string} params.photoId Required. ID of the Photo.
        * @param {string=} params.view Specifies if a download URL for the photo bytes should be returned in the Photo response.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    get(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl =
          options.rootUrl || 'https://streetviewpublish.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/photo/{photoId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['photoId'],
        pathParams: ['photoId'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * streetviewpublish.photo.startUpload
        * @desc Creates an upload session to start uploading photo bytes. The
        * upload URL of the returned UploadRef is used to upload the bytes for
        * the Photo.  In addition to the photo requirements shown in
        * https://support.google.com/maps/answer/7012050?hl=en&ref_topic=6275604,
        * the photo must also meet the following requirements:  * Photo Sphere
        * XMP metadata must be included in the photo medadata. See
        * https://developers.google.com/streetview/spherical-metadata for the
        * required fields. * The pixel size of the photo must meet the size
        * requirements listed in
        * https://support.google.com/maps/answer/7012050?hl=en&ref_topic=6275604,
        * and the photo must be a full 360 horizontally.  After the upload is
        * complete, the UploadRef is used with CreatePhoto to create the Photo
        * object entry.
        * @alias streetviewpublish.photo.startUpload
        * @memberOf! streetviewpublish(v1)
        *
        * @param {object} params Parameters for request
        * @param {streetviewpublish(v1).Empty} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    startUpload(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * streetviewpublish.photo.update
        * @desc Updates the metadata of a Photo, such as pose, place
        * association, connections, etc. Changing the pixels of a photo is not
        * supported.  Only the fields specified in the updateMask field are
        * used. If `updateMask` is not present, the update applies to all
        * fields.  <aside class="note"><b>Note:</b> To update Pose.altitude,
        * Pose.latLngPair has to be filled as well. Otherwise, the request will
        * fail.</aside>  This method returns the following error codes:  *
        * google.rpc.Code.PERMISSION_DENIED if the requesting user did not
        * create the requested photo. * google.rpc.Code.INVALID_ARGUMENT if the
        * request is malformed. * google.rpc.Code.NOT_FOUND if the requested
        * photo does not exist.
        * @alias streetviewpublish.photo.update
        * @memberOf! streetviewpublish(v1)
        *
        * @param {object} params Parameters for request
        * @param {string} params.id Required. A unique identifier for a photo.
        * @param {string=} params.updateMask Mask that identifies fields on the photo metadata to update. If not present, the old Photo metadata will be entirely replaced with the new Photo metadata in this request. The update fails if invalid fields are specified. Multiple fields can be specified in a comma-delimited list.  The following fields are valid:  * `pose.heading` * `pose.latLngPair` * `pose.pitch` * `pose.roll` * `pose.level` * `pose.altitude` * `connections` * `places`   <aside class="note"><b>Note:</b> Repeated fields in updateMask mean the entire set of repeated values will be replaced with the new contents. For example, if updateMask contains `connections` and `UpdatePhotoRequest.photo.connections` is empty, all connections will be removed.</aside>
        * @param {streetviewpublish(v1).Photo} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    update(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
  self.photos = {
    /**
     * streetviewpublish.photos.batchDelete
     * @desc Deletes a list of Photos and their metadata.  Note that if
     * BatchDeletePhotos fails, either critical fields are missing or there was
     * an authentication error. Even if BatchDeletePhotos succeeds, there may
     * have been failures for single photos in the batch. These failures will be
     * specified in each PhotoResponse.status in
     * BatchDeletePhotosResponse.results. See DeletePhoto for specific failures
     * that can occur per photo.
     * @alias streetviewpublish.photos.batchDelete
     * @memberOf! streetviewpublish(v1)
     *
     * @param {object} params Parameters for request
     * @param {streetviewpublish(v1).BatchDeletePhotosRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchDelete(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * streetviewpublish.photos.batchGet
        * @desc Gets the metadata of the specified Photo batch.  Note that if
        * BatchGetPhotos fails, either critical fields are missing or there was
        * an authentication error. Even if BatchGetPhotos succeeds, there may
        * have been failures for single photos in the batch. These failures will
        * be specified in each PhotoResponse.status in
        * BatchGetPhotosResponse.results. See GetPhoto for specific failures
        * that can occur per photo.
        * @alias streetviewpublish.photos.batchGet
        * @memberOf! streetviewpublish(v1)
        *
        * @param {object} params Parameters for request
        * @param {string=} params.photoIds Required. IDs of the Photos. For HTTP GET requests, the URL query parameter should be `photoIds=<id1>&photoIds=<id2>&...`.
        * @param {string=} params.view Specifies if a download URL for the photo bytes should be returned in the Photo response.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    batchGet(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl =
          options.rootUrl || 'https://streetviewpublish.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/photos:batchGet')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * streetviewpublish.photos.batchUpdate
        * @desc Updates the metadata of Photos, such as pose, place association,
        * connections, etc. Changing the pixels of photos is not supported.
        * Note that if BatchUpdatePhotos fails, either critical fields are
        * missing or there was an authentication error. Even if
        * BatchUpdatePhotos succeeds, there may have been failures for single
        * photos in the batch. These failures will be specified in each
        * PhotoResponse.status in BatchUpdatePhotosResponse.results. See
        * UpdatePhoto for specific failures that can occur per photo.  Only the
        * fields specified in updateMask field are used. If `updateMask` is not
        * present, the update applies to all fields.  <aside
        * class="note"><b>Note:</b> To update Pose.altitude, Pose.latLngPair has
        * to be filled as well. Otherwise, the request will fail.</aside>
        * @alias streetviewpublish.photos.batchUpdate
        * @memberOf! streetviewpublish(v1)
        *
        * @param {object} params Parameters for request
        * @param {streetviewpublish(v1).BatchUpdatePhotosRequest} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    batchUpdate(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * streetviewpublish.photos.list
        * @desc Lists all the Photos that belong to the user.
        * @alias streetviewpublish.photos.list
        * @memberOf! streetviewpublish(v1)
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
    list(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
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
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
}
/**
 * @typedef BatchDeletePhotosRequest
 * @memberOf! streetviewpublish(v1)
 * @type object
 * @property {string[]} photoIds Required. IDs of the Photos. For HTTP GET requests, the URL query parameter should be `photoIds=&lt;id1&gt;&amp;photoIds=&lt;id2&gt;&amp;...`.
 */
/**
 * @typedef BatchDeletePhotosResponse
 * @memberOf! streetviewpublish(v1)
 * @type object
 * @property {streetviewpublish(v1).Status[]} status The status for the operation to delete a single Photo in the batch request.
 */
/**
 * @typedef BatchGetPhotosResponse
 * @memberOf! streetviewpublish(v1)
 * @type object
 * @property {streetviewpublish(v1).PhotoResponse[]} results List of results for each individual Photo requested, in the same order as the requests in BatchGetPhotos.
 */
/**
 * @typedef BatchUpdatePhotosRequest
 * @memberOf! streetviewpublish(v1)
 * @type object
 * @property {streetviewpublish(v1).UpdatePhotoRequest[]} updatePhotoRequests Required. List of UpdatePhotoRequests.
 */
/**
 * @typedef BatchUpdatePhotosResponse
 * @memberOf! streetviewpublish(v1)
 * @type object
 * @property {streetviewpublish(v1).PhotoResponse[]} results List of results for each individual Photo updated, in the same order as the request.
 */
/**
 * @typedef Connection
 * @memberOf! streetviewpublish(v1)
 * @type object
 * @property {streetviewpublish(v1).PhotoId} target Required. The destination of the connection from the containing photo to another photo.
 */
/**
 * @typedef Empty
 * @memberOf! streetviewpublish(v1)
 * @type object
 */
/**
 * @typedef LatLng
 * @memberOf! streetviewpublish(v1)
 * @type object
 * @property {number} latitude The latitude in degrees. It must be in the range [-90.0, +90.0].
 * @property {number} longitude The longitude in degrees. It must be in the range [-180.0, +180.0].
 */
/**
 * @typedef Level
 * @memberOf! streetviewpublish(v1)
 * @type object
 * @property {string} name Required. A name assigned to this Level, restricted to 3 characters. Consider how the elevator buttons would be labeled for this level if there was an elevator.
 * @property {number} number Floor number, used for ordering. 0 indicates the ground level, 1 indicates the first level above ground level, -1 indicates the first level under ground level. Non-integer values are OK.
 */
/**
 * @typedef ListPhotosResponse
 * @memberOf! streetviewpublish(v1)
 * @type object
 * @property {string} nextPageToken Token to retrieve the next page of results, or empty if there are no more results in the list.
 * @property {streetviewpublish(v1).Photo[]} photos List of photos. The maximum number of items returned is based on the pageSize field in the request.
 */
/**
 * @typedef Operation
 * @memberOf! streetviewpublish(v1)
 * @type object
 * @property {boolean} done If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
 * @property {streetviewpublish(v1).Status} error The error result of the operation in case of failure or cancellation.
 * @property {object} metadata Service-specific metadata associated with the operation.  It typically contains progress information and common metadata such as create time. Some services might not provide such metadata.  Any method that returns a long-running operation should document the metadata type, if any.
 * @property {string} name The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should have the format of `operations/some/unique/name`.
 * @property {object} response The normal response of the operation in case of success.  If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`.  If the original method is standard `Get`/`Create`/`Update`, the response should be the resource.  For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name.  For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
 */
/**
 * @typedef Photo
 * @memberOf! streetviewpublish(v1)
 * @type object
 * @property {string} captureTime Absolute time when the photo was captured. When the photo has no exif timestamp, this is used to set a timestamp in the photo metadata.
 * @property {streetviewpublish(v1).Connection[]} connections Connections to other photos. A connection represents the link from this photo to another photo.
 * @property {string} downloadUrl Output only. The download URL for the photo bytes. This field is set only when GetPhotoRequest.view is set to PhotoView.INCLUDE_DOWNLOAD_URL.
 * @property {streetviewpublish(v1).PhotoId} photoId Required when updating a photo. Output only when creating a photo. Identifier for the photo, which is unique among all photos in Google.
 * @property {streetviewpublish(v1).Place[]} places Places where this photo belongs.
 * @property {streetviewpublish(v1).Pose} pose Pose of the photo.
 * @property {string} shareLink Output only. The share link for the photo.
 * @property {string} thumbnailUrl Output only. The thumbnail URL for showing a preview of the given photo.
 * @property {streetviewpublish(v1).UploadRef} uploadReference Required when creating a photo. Input only. The resource URL where the photo bytes are uploaded to.
 * @property {string} viewCount Output only. View count of the photo.
 */
/**
 * @typedef PhotoId
 * @memberOf! streetviewpublish(v1)
 * @type object
 * @property {string} id Required. A unique identifier for a photo.
 */
/**
 * @typedef PhotoResponse
 * @memberOf! streetviewpublish(v1)
 * @type object
 * @property {streetviewpublish(v1).Photo} photo The Photo resource, if the request was successful.
 * @property {streetviewpublish(v1).Status} status The status for the operation to get or update a single photo in the batch request.
 */
/**
 * @typedef Place
 * @memberOf! streetviewpublish(v1)
 * @type object
 * @property {string} placeId Place identifier, as described in https://developers.google.com/places/place-id.
 */
/**
 * @typedef Pose
 * @memberOf! streetviewpublish(v1)
 * @type object
 * @property {number} altitude Altitude of the pose in meters above WGS84 ellipsoid. NaN indicates an unmeasured quantity.
 * @property {number} heading Compass heading, measured at the center of the photo in degrees clockwise from North. Value must be &gt;=0 and &lt;360. NaN indicates an unmeasured quantity.
 * @property {streetviewpublish(v1).LatLng} latLngPair Latitude and longitude pair of the pose, as explained here: https://cloud.google.com/datastore/docs/reference/rest/Shared.Types/LatLng When creating a Photo, if the latitude and longitude pair are not provided here, the geolocation from the exif header will be used. If the latitude and longitude pair is not provided and cannot be found in the exif header, the create photo process will fail.
 * @property {streetviewpublish(v1).Level} level Level (the floor in a building) used to configure vertical navigation.
 * @property {number} pitch Pitch, measured at the center of the photo in degrees. Value must be &gt;=-90 and &lt;= 90. A value of -90 means looking directly down, and a value of 90 means looking directly up. NaN indicates an unmeasured quantity.
 * @property {number} roll Roll, measured in degrees. Value must be &gt;= 0 and &lt;360. A value of 0 means level with the horizon. NaN indicates an unmeasured quantity.
 */
/**
 * @typedef Status
 * @memberOf! streetviewpublish(v1)
 * @type object
 * @property {integer} code The status code, which should be an enum value of google.rpc.Code.
 * @property {object[]} details A list of messages that carry the error details.  There is a common set of message types for APIs to use.
 * @property {string} message A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
 */
/**
 * @typedef UpdatePhotoRequest
 * @memberOf! streetviewpublish(v1)
 * @type object
 * @property {streetviewpublish(v1).Photo} photo Required. Photo object containing the new metadata.
 * @property {string} updateMask Mask that identifies fields on the photo metadata to update. If not present, the old Photo metadata will be entirely replaced with the new Photo metadata in this request. The update fails if invalid fields are specified. Multiple fields can be specified in a comma-delimited list.  The following fields are valid:  * `pose.heading` * `pose.latLngPair` * `pose.pitch` * `pose.roll` * `pose.level` * `pose.altitude` * `connections` * `places`   &lt;aside class=&quot;note&quot;&gt;&lt;b&gt;Note:&lt;/b&gt; Repeated fields in updateMask mean the entire set of repeated values will be replaced with the new contents. For example, if updateMask contains `connections` and `UpdatePhotoRequest.photo.connections` is empty, all connections will be removed.&lt;/aside&gt;
 */
/**
 * @typedef UploadRef
 * @memberOf! streetviewpublish(v1)
 * @type object
 * @property {string} uploadUrl Required. An upload reference should be unique for each user. It follows the form: &quot;https://streetviewpublish.googleapis.com/media/user/{account_id}/photo/{upload_reference}&quot;
 */

export = Streetviewpublish;
