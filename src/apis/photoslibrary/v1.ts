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

export namespace photoslibrary_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  /**
   * Photos Library API
   *
   * Manage photos, videos, and albums in Google Photos
   *
   * @example
   * const {google} = require('googleapis');
   * const photoslibrary = google.photoslibrary('v1');
   *
   * @namespace photoslibrary
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Photoslibrary
   */
  export class Photoslibrary {
    _options: GlobalOptions;
    google: GoogleConfigurable;
    root = this;

    albums: Resource$Albums;
    mediaItems: Resource$Mediaitems;
    sharedAlbums: Resource$Sharedalbums;

    constructor(options: GlobalOptions, google: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.albums = new Resource$Albums(this);
      this.mediaItems = new Resource$Mediaitems(this);
      this.sharedAlbums = new Resource$Sharedalbums(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * Request to add an enrichment to a specific album at a specific position.
   */
  export interface Schema$AddEnrichmentToAlbumRequest {
    /**
     * The position where the enrichment will be inserted.
     */
    albumPosition?: Schema$AlbumPosition;
    /**
     * The enrichment to be added.
     */
    newEnrichmentItem?: Schema$NewEnrichmentItem;
  }
  export interface Schema$AddEnrichmentToAlbumResponse {
    /**
     * [Output only] Enrichment which was added.
     */
    enrichmentItem?: Schema$EnrichmentItem;
  }
  /**
   * Representation of an album in Google Photos. Albums are a container for
   * media items. They contain an additional shareInfo property if they have
   * been shared by the application.
   */
  export interface Schema$Album {
    /**
     * [Output only] A URL to the cover photo&#39;s bytes. This should not be
     * used as is. Parameters should be appended to this URL before use. For
     * example, &#39;=w2048-h1024&#39; will set the dimensions of the cover
     * photo to have a width of 2048 px and height of 1024 px.
     */
    coverPhotoBaseUrl?: string;
    /**
     * [Ouput only] Identifier for the album. This is a persistent identifier
     * that can be used between sessions to identify this album.
     */
    id?: string;
    /**
     * [Output only] True if media items can be created in the album. This field
     * is based on the scopes granted and permissions of the album. If the
     * scopes are changed or permissions of the album are changed, this field
     * will be updated.
     */
    isWriteable?: boolean;
    /**
     * [Output only] Google Photos URL for the album. The user needs to be
     * signed in to their Google Photos account to access this link.
     */
    productUrl?: string;
    /**
     * [Output only] Information related to shared albums. This field is only
     * populated if the album is a shared album, the developer created the album
     * and the user has granted photoslibrary.sharing scope.
     */
    shareInfo?: Schema$ShareInfo;
    /**
     * Name of the album displayed to the user in their Google Photos account.
     * This string should not be more than 500 characters.
     */
    title?: string;
    /**
     * [Output only] The number of media items in the album
     */
    totalMediaItems?: string;
  }
  /**
   * Specifies a position in an album.
   */
  export interface Schema$AlbumPosition {
    /**
     * Type of position, for a media or enrichment item.
     */
    position?: string;
    /**
     * The enrichment item to which the position is relative to. Only used when
     * position type is AFTER_ENRICHMENT_ITEM.
     */
    relativeEnrichmentItemId?: string;
    /**
     * The media item to which the position is relative to. Only used when
     * position type is AFTER_MEDIA_ITEM.
     */
    relativeMediaItemId?: string;
  }
  /**
   * Request to create one or more media items in a user&#39;s Google Photos
   * library. If an &lt;code&gt;albumid&lt;/code&gt; is specified, the media
   * items are also added to that album. &lt;code&gt;albumPosition&lt;/code&gt;
   * is optional and can only be specified if an
   * &lt;code&gt;albumId&lt;/code&gt; is set.
   */
  export interface Schema$BatchCreateMediaItemsRequest {
    /**
     * Identifier of the album where the media item(s) will be added. They will
     * also be added to the user&#39;s library. This is an optional field.
     */
    albumId?: string;
    /**
     * Position in the album where the media item(s) will be added. If not
     * specified, the media item(s) will be added to the end of the album (as
     * per the default value which is LAST_IN_ALBUM). The request will fail if
     * this field is present but no album_id is specified.
     */
    albumPosition?: Schema$AlbumPosition;
    /**
     * List of media items to be created.
     */
    newMediaItems?: Schema$NewMediaItem[];
  }
  export interface Schema$BatchCreateMediaItemsResponse {
    /**
     * [Output only] List of media items which were created.
     */
    newMediaItemResults?: Schema$NewMediaItemResult[];
  }
  /**
   * This filter is used to define which results to return based on the contents
   * of the media item.  It is possible to specify a list of categories to
   * include, and/or a list of categories to exclude. Within each list, the
   * categories are combined with an OR. For example, if the content filter
   * looks like:      included_content_categories: [c1, c2, c3]  It would get
   * media items that contain (c1 OR c2 OR c3).  And if the content filter looks
   * like:      excluded_content_categories: [c1, c2, c3]  It would get media
   * items that contain NOT (c1 OR c2 OR c3). You can also include some
   * categories while excluding others, as in this proto:
   * included_content_categories: [c1, c2],     excluded_content_category: [c3,
   * c4]  It would get media items that contain (c1 OR c2) AND NOT (c3 OR c4).
   * A category that appears in
   * &lt;code&gt;includedContentategories&lt;/code&gt; must not appear in
   * &lt;code&gt;excludedContentCategories&lt;/code&gt;.
   */
  export interface Schema$ContentFilter {
    /**
     * The set of categories that must NOT be present in the media items in the
     * result. The items in the set are ORed. There is a maximum of 10
     * excludedContentCategories per request.
     */
    excludedContentCategories?: string[];
    /**
     * The set of categories that must be present in the media items in the
     * result. The items in the set are ORed. There is a maximum of 10
     * includedContentCategories per request.
     */
    includedContentCategories?: string[];
  }
  /**
   * Information about a user who contributed the media item. Note that this
   * information is only included if the album containing the media item is
   * shared, was created by you and you have the sharing scope.
   */
  export interface Schema$ContributorInfo {
    /**
     * Display name of the contributor.
     */
    displayName?: string;
    /**
     * URL to the profile picture of the contributor.
     */
    profilePictureBaseUrl?: string;
  }
  /**
   * Request to create an album in Google Photos.
   */
  export interface Schema$CreateAlbumRequest {
    /**
     * The album to be created.
     */
    album?: Schema$Album;
  }
  /**
   * Represents a whole calendar date. The day may be 0 to represent a year and
   * month where the day is not significant, e.g. a whole calendar month. The
   * month may be 0 to represent a a day and a year where the month is not
   * signficant, e.g. when you want to specify the same day in every month of a
   * year or a specific year. The year may be 0 to represent a month and day
   * independent of year, e.g. anniversary date.
   */
  export interface Schema$Date {
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month, or 0
     * if specifying a year/month where the day is not significant.
     */
    day?: number;
    /**
     * Month of year. Must be from 1 to 12, or 0 if specifying a date without a
     * month.
     */
    month?: number;
    /**
     * Year of date. Must be from 1 to 9999, or 0 if specifying a date without a
     * year.
     */
    year?: number;
  }
  /**
   * This filter defines the allowed dates or date ranges for the media
   * returned. It is possible to pick a set of specific dates and a set of date
   * ranges.
   */
  export interface Schema$DateFilter {
    /**
     * List of dates that the media items must have been created on. There is a
     * maximum of 5 dates that can be included per request.
     */
    dates?: Schema$Date[];
    /**
     * List of dates ranges that the media items must have been created in.
     * There is a maximum of 5 dates ranges that can be included per request.
     */
    ranges?: Schema$DateRange[];
  }
  /**
   * Defines a range of dates. Both dates must be of the same format (see Date
   * definition for more).
   */
  export interface Schema$DateRange {
    /**
     * The end date (included as part of the range) in the same format as the
     * start date.
     */
    endDate?: Schema$Date;
    /**
     * The start date (included as part of the range) in one of the formats
     * described.
     */
    startDate?: Schema$Date;
  }
  /**
   * An enrichment item.
   */
  export interface Schema$EnrichmentItem {
    /**
     * Identifier of the enrichment item.
     */
    id?: string;
  }
  /**
   * Filters that can be applied to a media item search. If multiple filter
   * options are specified, they are treated as AND with each other.
   */
  export interface Schema$Filters {
    /**
     * Filters the media items based on their content.
     */
    contentFilter?: Schema$ContentFilter;
    /**
     * Filters the media items based on their creation date.
     */
    dateFilter?: Schema$DateFilter;
    /**
     * If set, the results will include media items that the user has archived.
     * Defaults to false (archived media items are not included).
     */
    includeArchivedMedia?: boolean;
    /**
     * Filters the media items based on the type of media.
     */
    mediaTypeFilter?: Schema$MediaTypeFilter;
  }
  /**
   * Request to join a shared album on behalf of the user. This uses a
   * shareToken which can be acquired via the shareAlbum or listSharedAlbums
   * calls.
   */
  export interface Schema$JoinSharedAlbumRequest {
    /**
     * Token indicating the shared album to join on behalf of the user.
     */
    shareToken?: string;
  }
  /**
   * Response to successfully joining the shared album on behalf of the user.
   */
  export interface Schema$JoinSharedAlbumResponse {}
  /**
   * An object representing a latitude/longitude pair. This is expressed as a
   * pair of doubles representing degrees latitude and degrees longitude. Unless
   * specified otherwise, this must conform to the &lt;a
   * href=&quot;http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf&quot;&gt;WGS84
   * standard&lt;/a&gt;. Values must be within normalized ranges.
   */
  export interface Schema$LatLng {
    /**
     * The latitude in degrees. It must be in the range [-90.0, +90.0].
     */
    latitude?: number;
    /**
     * The longitude in degrees. It must be in the range [-180.0, +180.0].
     */
    longitude?: number;
  }
  export interface Schema$ListAlbumsResponse {
    /**
     * [Output only] List of albums that were created by the user.
     */
    albums?: Schema$Album[];
    /**
     * [Output only] Token to use to get the next set of albums. Populated if
     * there are more albums to retrieve for this request.
     */
    nextPageToken?: string;
  }
  export interface Schema$ListSharedAlbumsResponse {
    /**
     * [Output only] Token to use to get the next set of shared albums.
     * Populated if there are more shared albums to retrieve for this request.
     */
    nextPageToken?: string;
    /**
     * [Output only] List of shared albums that were requested.
     */
    sharedAlbums?: Schema$Album[];
  }
  /**
   * Represents a physical location.
   */
  export interface Schema$Location {
    /**
     * Position of the location on the map.
     */
    latlng?: Schema$LatLng;
    /**
     * Name of the location to be displayed.
     */
    locationName?: string;
  }
  /**
   * An enrichment containing a single location.
   */
  export interface Schema$LocationEnrichment {
    /**
     * Location for this enrichment item.
     */
    location?: Schema$Location;
  }
  /**
   * An enrichment containing a map, showing origin and destination locations.
   */
  export interface Schema$MapEnrichment {
    /**
     * Destination location for this enrichemt item.
     */
    destination?: Schema$Location;
    /**
     * Origin location for this enrichment item.
     */
    origin?: Schema$Location;
  }
  /**
   * Representation of a media item (e.g. photo, video etc.) in Google Photos.
   */
  export interface Schema$MediaItem {
    /**
     * A URL to the media item&#39;s bytes. This should not be used as is. For
     * example, &#39;=w2048-h1024&#39; will set the dimensions of a media item
     * of type photo to have a width of 2048 px and height of 1024 px.
     */
    baseUrl?: string;
    /**
     * Information about the user who created this media item.
     */
    contributorInfo?: Schema$ContributorInfo;
    /**
     * Description of the media item. This is shown to the user in the
     * item&#39;s info section in the Google Photos app.
     */
    description?: string;
    /**
     * Identifier for the media item. This is a persistent identifier that can
     * be used between sessions to identify this media item.
     */
    id?: string;
    /**
     * Metadata related to the media item, for example the height, width or
     * creation time.
     */
    mediaMetadata?: Schema$MediaMetadata;
    /**
     * MIME type of the media item.
     */
    mimeType?: string;
    /**
     * Google Photos URL for the media item. This link will only be available to
     * the user if they&#39;re signed in.
     */
    productUrl?: string;
  }
  /**
   * Metadata for a media item.
   */
  export interface Schema$MediaMetadata {
    /**
     * Time when the media item was first created (not when it was uploaded to
     * Google Photos).
     */
    creationTime?: string;
    /**
     * Original height (in pixels) of the media item.
     */
    height?: string;
    /**
     * Metadata for a photo media type.
     */
    photo?: Schema$Photo;
    /**
     * Metadata for a video media type.
     */
    video?: Schema$Video;
    /**
     * Original width (in pixels) of the media item.
     */
    width?: string;
  }
  /**
   * This filter defines the type of media items to be returned, for example
   * videos or photos. All the specified media types are treated as an OR with
   * each other.
   */
  export interface Schema$MediaTypeFilter {
    /**
     * The types of media items to be included. This field should only be
     * populated with one media type, multiple media types will result in an
     * error response.
     */
    mediaTypes?: string[];
  }
  /**
   * A new enrichment item to be added to an album, used by the
   * AddEnrichmentToAlbum call.
   */
  export interface Schema$NewEnrichmentItem {
    /**
     * Location to be added to the album.
     */
    locationEnrichment?: Schema$LocationEnrichment;
    /**
     * Map to be added to the album.
     */
    mapEnrichment?: Schema$MapEnrichment;
    /**
     * Text to be added to the album.
     */
    textEnrichment?: Schema$TextEnrichment;
  }
  /**
   * New media item that will be created in a user&#39;s Google Photos account.
   */
  export interface Schema$NewMediaItem {
    /**
     * Description of the media item. This will be shown to the user in the
     * item&#39;s info section in the Google Photos app. This string should not
     * be more than 1000 characters.
     */
    description?: string;
    /**
     * A new media item that has been uploaded via the included uploadToken.
     */
    simpleMediaItem?: Schema$SimpleMediaItem;
  }
  /**
   * Result of creating a new media item.
   */
  export interface Schema$NewMediaItemResult {
    /**
     * Media item created with the upload token. It is populated if no errors
     * occurred and the media item was created successfully.
     */
    mediaItem?: Schema$MediaItem;
    /**
     * If an error occurred during the creation of this media item, this field
     * will be populated with information related to the error. Details of this
     * status can be found down below.
     */
    status?: Schema$Status;
    /**
     * The upload token used to create this new media item.
     */
    uploadToken?: string;
  }
  /**
   * Metadata that is specific to a photo, for example, ISO, focal length and
   * exposure time. Some of these fields may be null or not included.
   */
  export interface Schema$Photo {
    /**
     * Apeture f number of the photo.
     */
    apertureFNumber?: number;
    /**
     * Brand of the camera which took the photo.
     */
    cameraMake?: string;
    /**
     * Model of the camera which took the photo.
     */
    cameraModel?: string;
    /**
     * Exposure time of the photo.
     */
    exposureTime?: string;
    /**
     * Focal length of the photo.
     */
    focalLength?: number;
    /**
     * ISO of the photo.
     */
    isoEquivalent?: number;
  }
  /**
   * Request to search for media items in a user&#39;s library.  If the album id
   * is specified, this call will return the list of media items in the album.
   * If neither filters nor album id are specified, this call will return all
   * media items in a user&#39;s Google Photos library.  If filters are
   * specified, this call will return all media items in the user&#39;s library
   * which fulfills the criteria based upon the filters.  Filters and album id
   * must not both be set, as this will result in an invalid request.
   */
  export interface Schema$SearchMediaItemsRequest {
    /**
     * Identifier of an album. If populated will list all media items in
     * specified album. Cannot be set in conjunction with any filters.
     */
    albumId?: string;
    /**
     * Filters to apply to the request. Cannot be set in conjuction with an
     * albumId.
     */
    filters?: Schema$Filters;
    /**
     * Maximum number of media items to return in the response. The default
     * number of media items to return at a time is 100. The maximum page size
     * is 500.
     */
    pageSize?: number;
    /**
     * A continuation token to get the next page of the results. Adding this to
     * the request will return the rows after the pageToken. The pageToken
     * should be the value returned in the nextPageToken parameter in the
     * response to the searchMediaItems request.
     */
    pageToken?: string;
  }
  export interface Schema$SearchMediaItemsResponse {
    /**
     * [Output only] List of media items that match the search parameters.
     */
    mediaItems?: Schema$MediaItem[];
    /**
     * [Output only] Token to use to get the next set of media items. Its
     * presence is the only reliable indicator of more media items being
     * available in the next request.
     */
    nextPageToken?: string;
  }
  /**
   * Request to make an album shared in Google Photos.
   */
  export interface Schema$ShareAlbumRequest {
    /**
     * Options to be set when converting the album to a shared album.
     */
    sharedAlbumOptions?: Schema$SharedAlbumOptions;
  }
  export interface Schema$ShareAlbumResponse {
    /**
     * [Output only] Information about the shared album.
     */
    shareInfo?: Schema$ShareInfo;
  }
  /**
   * Options that control the sharing of an album.
   */
  export interface Schema$SharedAlbumOptions {
    /**
     * True if the shared album allows collaborators (users who have joined the
     * album) to add media items to it. Defaults to false.
     */
    isCollaborative?: boolean;
    /**
     * True if the shared album allows the owner and the collaborators (users
     * who have joined the album) to add comments to the album. Defaults to
     * false.
     */
    isCommentable?: boolean;
  }
  /**
   * Information about albums that are shared. Note that this information is
   * only included if the album was created by you and you have the sharing
   * scope.
   */
  export interface Schema$ShareInfo {
    /**
     * A link to the album that&#39;s now shared on the Google Photos website
     * and app. Anyone with the link can access this shared album and see all of
     * the items present in the album.
     */
    shareableUrl?: string;
    /**
     * Options set for the shared album.
     */
    sharedAlbumOptions?: Schema$SharedAlbumOptions;
    /**
     * A token which can be used to join this shared album on behalf of other
     * users via the API.
     */
    shareToken?: string;
  }
  /**
   * A simple media item to be created in Google Photos via an upload token.
   */
  export interface Schema$SimpleMediaItem {
    /**
     * Token identifying the media bytes which have been uploaded to Google.
     */
    uploadToken?: string;
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
  /**
   * An enrichment containing text.
   */
  export interface Schema$TextEnrichment {
    /**
     * Text for this text enrichment item.
     */
    text?: string;
  }
  /**
   * Metadata that is specific to a video, for example, fps and processing
   * status. Some of these fields may be null or not included.
   */
  export interface Schema$Video {
    /**
     * Brand of the camera which took the video.
     */
    cameraMake?: string;
    /**
     * Model of the camera which took the video.
     */
    cameraModel?: string;
    /**
     * Frame rate of the video.
     */
    fps?: number;
    /**
     * Processing status of the video.
     */
    status?: string;
  }


  export class Resource$Albums {
    root: Photoslibrary;
    constructor(root: Photoslibrary) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * photoslibrary.albums.addEnrichment
     * @desc Adds an enrichment to a specified position in a defined album.
     * @alias photoslibrary.albums.addEnrichment
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.albumId Identifier of the album where the enrichment will be added.
     * @param {().AddEnrichmentToAlbumRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    addEnrichment(
        params?: Params$Resource$Albums$Addenrichment, options?: MethodOptions):
        AxiosPromise<Schema$AddEnrichmentToAlbumResponse>;
    addEnrichment(
        params: Params$Resource$Albums$Addenrichment,
        options: MethodOptions|
        BodyResponseCallback<Schema$AddEnrichmentToAlbumResponse>,
        callback: BodyResponseCallback<Schema$AddEnrichmentToAlbumResponse>):
        void;
    addEnrichment(
        params: Params$Resource$Albums$Addenrichment,
        callback: BodyResponseCallback<Schema$AddEnrichmentToAlbumResponse>):
        void;
    addEnrichment(
        callback: BodyResponseCallback<Schema$AddEnrichmentToAlbumResponse>):
        void;
    addEnrichment(
        paramsOrCallback?: Params$Resource$Albums$Addenrichment|
        BodyResponseCallback<Schema$AddEnrichmentToAlbumResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$AddEnrichmentToAlbumResponse>,
        callback?: BodyResponseCallback<Schema$AddEnrichmentToAlbumResponse>):
        void|AxiosPromise<Schema$AddEnrichmentToAlbumResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Albums$Addenrichment;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Albums$Addenrichment;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://photoslibrary.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/albums/{+albumId}:addEnrichment')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['albumId'],
        pathParams: ['albumId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$AddEnrichmentToAlbumResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$AddEnrichmentToAlbumResponse>(
            parameters);
      }
    }


    /**
     * photoslibrary.albums.create
     * @desc Creates an album in a user's Google Photos library.
     * @alias photoslibrary.albums.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().CreateAlbumRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(params?: Params$Resource$Albums$Create, options?: MethodOptions):
        AxiosPromise<Schema$Album>;
    create(
        params: Params$Resource$Albums$Create,
        options: MethodOptions|BodyResponseCallback<Schema$Album>,
        callback: BodyResponseCallback<Schema$Album>): void;
    create(
        params: Params$Resource$Albums$Create,
        callback: BodyResponseCallback<Schema$Album>): void;
    create(callback: BodyResponseCallback<Schema$Album>): void;
    create(
        paramsOrCallback?: Params$Resource$Albums$Create|
        BodyResponseCallback<Schema$Album>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Album>,
        callback?: BodyResponseCallback<Schema$Album>):
        void|AxiosPromise<Schema$Album> {
      let params = (paramsOrCallback || {}) as Params$Resource$Albums$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Albums$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://photoslibrary.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/albums').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Album>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Album>(parameters);
      }
    }


    /**
     * photoslibrary.albums.get
     * @desc Returns the album specified by the given album id.
     * @alias photoslibrary.albums.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.albumId Identifier of the album to be requested.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Albums$Get,
        options?: MethodOptions): AxiosPromise<Schema$Album>;
    get(params: Params$Resource$Albums$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Album>,
        callback: BodyResponseCallback<Schema$Album>): void;
    get(params: Params$Resource$Albums$Get,
        callback: BodyResponseCallback<Schema$Album>): void;
    get(callback: BodyResponseCallback<Schema$Album>): void;
    get(paramsOrCallback?: Params$Resource$Albums$Get|
        BodyResponseCallback<Schema$Album>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Album>,
        callback?: BodyResponseCallback<Schema$Album>):
        void|AxiosPromise<Schema$Album> {
      let params = (paramsOrCallback || {}) as Params$Resource$Albums$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Albums$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://photoslibrary.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/albums/{+albumId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['albumId'],
        pathParams: ['albumId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Album>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Album>(parameters);
      }
    }


    /**
     * photoslibrary.albums.list
     * @desc Lists all albums shown to a user in the 'Albums' tab of the Google
     * Photos app.
     * @alias photoslibrary.albums.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Maximum number of albums to return in the response. The default number of albums to return at a time is 20. The maximum page size is 50.
     * @param {string=} params.pageToken A continuation token to get the next page of the results. Adding this to the request will return the rows after the pageToken. The pageToken should be the value returned in the nextPageToken parameter in the response to the listAlbums request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Albums$List, options?: MethodOptions):
        AxiosPromise<Schema$ListAlbumsResponse>;
    list(
        params: Params$Resource$Albums$List,
        options: MethodOptions|BodyResponseCallback<Schema$ListAlbumsResponse>,
        callback: BodyResponseCallback<Schema$ListAlbumsResponse>): void;
    list(
        params: Params$Resource$Albums$List,
        callback: BodyResponseCallback<Schema$ListAlbumsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListAlbumsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Albums$List|
        BodyResponseCallback<Schema$ListAlbumsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListAlbumsResponse>,
        callback?: BodyResponseCallback<Schema$ListAlbumsResponse>):
        void|AxiosPromise<Schema$ListAlbumsResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Albums$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Albums$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://photoslibrary.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/albums').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListAlbumsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListAlbumsResponse>(parameters);
      }
    }


    /**
     * photoslibrary.albums.share
     * @desc Marks an album as 'shared' and accessible to other users. This
     * action can only be performed on albums which were created by the
     * developer via the API.
     * @alias photoslibrary.albums.share
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.albumId Identifier of the album to be shared. This album id must belong to an album created by the developer. .
     * @param {().ShareAlbumRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    share(params?: Params$Resource$Albums$Share, options?: MethodOptions):
        AxiosPromise<Schema$ShareAlbumResponse>;
    share(
        params: Params$Resource$Albums$Share,
        options: MethodOptions|BodyResponseCallback<Schema$ShareAlbumResponse>,
        callback: BodyResponseCallback<Schema$ShareAlbumResponse>): void;
    share(
        params: Params$Resource$Albums$Share,
        callback: BodyResponseCallback<Schema$ShareAlbumResponse>): void;
    share(callback: BodyResponseCallback<Schema$ShareAlbumResponse>): void;
    share(
        paramsOrCallback?: Params$Resource$Albums$Share|
        BodyResponseCallback<Schema$ShareAlbumResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ShareAlbumResponse>,
        callback?: BodyResponseCallback<Schema$ShareAlbumResponse>):
        void|AxiosPromise<Schema$ShareAlbumResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Albums$Share;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Albums$Share;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://photoslibrary.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/albums/{+albumId}:share')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['albumId'],
        pathParams: ['albumId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ShareAlbumResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ShareAlbumResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Albums$Addenrichment {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Identifier of the album where the enrichment will be added.
     */
    albumId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddEnrichmentToAlbumRequest;
  }
  export interface Params$Resource$Albums$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateAlbumRequest;
  }
  export interface Params$Resource$Albums$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Identifier of the album to be requested.
     */
    albumId?: string;
  }
  export interface Params$Resource$Albums$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Maximum number of albums to return in the response. The default number of
     * albums to return at a time is 20. The maximum page size is 50.
     */
    pageSize?: number;
    /**
     * A continuation token to get the next page of the results. Adding this to
     * the request will return the rows after the pageToken. The pageToken
     * should be the value returned in the nextPageToken parameter in the
     * response to the listAlbums request.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Albums$Share {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Identifier of the album to be shared. This album id must belong to an
     * album created by the developer. .
     */
    albumId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ShareAlbumRequest;
  }


  export class Resource$Mediaitems {
    root: Photoslibrary;
    constructor(root: Photoslibrary) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * photoslibrary.mediaItems.batchCreate
     * @desc Creates one or more media items in a user's Google Photos library.
     * If an album id is specified, the media item(s) are also added to the
     * album. By default the media item(s) will be added to the end of the
     * library or album.  If an album id and position are both defined, then the
     * media items will be added to the album at the specified position.  If
     * multiple media items are given, they will be inserted at the specified
     * position.
     * @alias photoslibrary.mediaItems.batchCreate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().BatchCreateMediaItemsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchCreate(
        params?: Params$Resource$Mediaitems$Batchcreate,
        options?: MethodOptions):
        AxiosPromise<Schema$BatchCreateMediaItemsResponse>;
    batchCreate(
        params: Params$Resource$Mediaitems$Batchcreate,
        options: MethodOptions|
        BodyResponseCallback<Schema$BatchCreateMediaItemsResponse>,
        callback: BodyResponseCallback<Schema$BatchCreateMediaItemsResponse>):
        void;
    batchCreate(
        params: Params$Resource$Mediaitems$Batchcreate,
        callback: BodyResponseCallback<Schema$BatchCreateMediaItemsResponse>):
        void;
    batchCreate(callback:
                    BodyResponseCallback<Schema$BatchCreateMediaItemsResponse>):
        void;
    batchCreate(
        paramsOrCallback?: Params$Resource$Mediaitems$Batchcreate|
        BodyResponseCallback<Schema$BatchCreateMediaItemsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$BatchCreateMediaItemsResponse>,
        callback?: BodyResponseCallback<Schema$BatchCreateMediaItemsResponse>):
        void|AxiosPromise<Schema$BatchCreateMediaItemsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Mediaitems$Batchcreate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mediaitems$Batchcreate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://photoslibrary.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/mediaItems:batchCreate')
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
        createAPIRequest<Schema$BatchCreateMediaItemsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$BatchCreateMediaItemsResponse>(
            parameters);
      }
    }


    /**
     * photoslibrary.mediaItems.get
     * @desc Returns the media item specified based on a given media item id.
     * @alias photoslibrary.mediaItems.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.mediaItemId Identifier of media item to be requested.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Mediaitems$Get,
        options?: MethodOptions): AxiosPromise<Schema$MediaItem>;
    get(params: Params$Resource$Mediaitems$Get,
        options: MethodOptions|BodyResponseCallback<Schema$MediaItem>,
        callback: BodyResponseCallback<Schema$MediaItem>): void;
    get(params: Params$Resource$Mediaitems$Get,
        callback: BodyResponseCallback<Schema$MediaItem>): void;
    get(callback: BodyResponseCallback<Schema$MediaItem>): void;
    get(paramsOrCallback?: Params$Resource$Mediaitems$Get|
        BodyResponseCallback<Schema$MediaItem>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$MediaItem>,
        callback?: BodyResponseCallback<Schema$MediaItem>):
        void|AxiosPromise<Schema$MediaItem> {
      let params = (paramsOrCallback || {}) as Params$Resource$Mediaitems$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mediaitems$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://photoslibrary.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/mediaItems/{+mediaItemId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['mediaItemId'],
        pathParams: ['mediaItemId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$MediaItem>(parameters, callback);
      } else {
        return createAPIRequest<Schema$MediaItem>(parameters);
      }
    }


    /**
     * photoslibrary.mediaItems.search
     * @desc Searches for media items in a user's Google Photos library. If no
     * filters are set, then all media items in the user's library will be
     * returned.  If an album is set, all media items in the specified album
     * will be returned.  If filters are specified, anything that matches the
     * filters from the user's library will be listed.  If an album and filters
     * are set, then this will result in an error.
     * @alias photoslibrary.mediaItems.search
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().SearchMediaItemsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search(params?: Params$Resource$Mediaitems$Search, options?: MethodOptions):
        AxiosPromise<Schema$SearchMediaItemsResponse>;
    search(
        params: Params$Resource$Mediaitems$Search,
        options: MethodOptions|
        BodyResponseCallback<Schema$SearchMediaItemsResponse>,
        callback: BodyResponseCallback<Schema$SearchMediaItemsResponse>): void;
    search(
        params: Params$Resource$Mediaitems$Search,
        callback: BodyResponseCallback<Schema$SearchMediaItemsResponse>): void;
    search(callback: BodyResponseCallback<Schema$SearchMediaItemsResponse>):
        void;
    search(
        paramsOrCallback?: Params$Resource$Mediaitems$Search|
        BodyResponseCallback<Schema$SearchMediaItemsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$SearchMediaItemsResponse>,
        callback?: BodyResponseCallback<Schema$SearchMediaItemsResponse>):
        void|AxiosPromise<Schema$SearchMediaItemsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Mediaitems$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mediaitems$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://photoslibrary.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/mediaItems:search')
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
        createAPIRequest<Schema$SearchMediaItemsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SearchMediaItemsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Mediaitems$Batchcreate {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchCreateMediaItemsRequest;
  }
  export interface Params$Resource$Mediaitems$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Identifier of media item to be requested.
     */
    mediaItemId?: string;
  }
  export interface Params$Resource$Mediaitems$Search {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$SearchMediaItemsRequest;
  }


  export class Resource$Sharedalbums {
    root: Photoslibrary;
    constructor(root: Photoslibrary) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * photoslibrary.sharedAlbums.join
     * @desc Joins a shared album on behalf of the Google Photos user.
     * @alias photoslibrary.sharedAlbums.join
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().JoinSharedAlbumRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    join(params?: Params$Resource$Sharedalbums$Join, options?: MethodOptions):
        AxiosPromise<Schema$JoinSharedAlbumResponse>;
    join(
        params: Params$Resource$Sharedalbums$Join,
        options: MethodOptions|
        BodyResponseCallback<Schema$JoinSharedAlbumResponse>,
        callback: BodyResponseCallback<Schema$JoinSharedAlbumResponse>): void;
    join(
        params: Params$Resource$Sharedalbums$Join,
        callback: BodyResponseCallback<Schema$JoinSharedAlbumResponse>): void;
    join(callback: BodyResponseCallback<Schema$JoinSharedAlbumResponse>): void;
    join(
        paramsOrCallback?: Params$Resource$Sharedalbums$Join|
        BodyResponseCallback<Schema$JoinSharedAlbumResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$JoinSharedAlbumResponse>,
        callback?: BodyResponseCallback<Schema$JoinSharedAlbumResponse>):
        void|AxiosPromise<Schema$JoinSharedAlbumResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Sharedalbums$Join;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sharedalbums$Join;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://photoslibrary.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/sharedAlbums:join')
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
        createAPIRequest<Schema$JoinSharedAlbumResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$JoinSharedAlbumResponse>(parameters);
      }
    }


    /**
     * photoslibrary.sharedAlbums.list
     * @desc Lists all shared albums shown to a user in the 'Sharing' tab of the
     * Google Photos app.
     * @alias photoslibrary.sharedAlbums.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Maximum number of albums to return in the response. The default number of albums to return at a time is 20. The maximum page size is 50.
     * @param {string=} params.pageToken A continuation token to get the next page of the results. Adding this to the request will return the rows after the pageToken. The pageToken should be the value returned in the nextPageToken parameter in the response to the listSharedAlbums request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Sharedalbums$List, options?: MethodOptions):
        AxiosPromise<Schema$ListSharedAlbumsResponse>;
    list(
        params: Params$Resource$Sharedalbums$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListSharedAlbumsResponse>,
        callback: BodyResponseCallback<Schema$ListSharedAlbumsResponse>): void;
    list(
        params: Params$Resource$Sharedalbums$List,
        callback: BodyResponseCallback<Schema$ListSharedAlbumsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListSharedAlbumsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Sharedalbums$List|
        BodyResponseCallback<Schema$ListSharedAlbumsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListSharedAlbumsResponse>,
        callback?: BodyResponseCallback<Schema$ListSharedAlbumsResponse>):
        void|AxiosPromise<Schema$ListSharedAlbumsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Sharedalbums$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sharedalbums$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://photoslibrary.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/sharedAlbums').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListSharedAlbumsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListSharedAlbumsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Sharedalbums$Join {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$JoinSharedAlbumRequest;
  }
  export interface Params$Resource$Sharedalbums$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Maximum number of albums to return in the response. The default number of
     * albums to return at a time is 20. The maximum page size is 50.
     */
    pageSize?: number;
    /**
     * A continuation token to get the next page of the results. Adding this to
     * the request will return the rows after the pageToken. The pageToken
     * should be the value returned in the nextPageToken parameter in the
     * response to the listSharedAlbums request.
     */
    pageToken?: string;
  }
}
