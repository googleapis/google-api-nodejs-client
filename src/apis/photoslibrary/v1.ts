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
    google?: GoogleConfigurable;
    root = this;

    albums: Resource$Albums;
    mediaItems: Resource$Mediaitems;
    sharedAlbums: Resource$Sharedalbums;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
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
     * The position in the album where the enrichment is to be inserted.
     */
    albumPosition?: Schema$AlbumPosition;
    /**
     * The enrichment to be added.
     */
    newEnrichmentItem?: Schema$NewEnrichmentItem;
  }
  /**
   * The enrichment item that&#39;s created.
   */
  export interface Schema$AddEnrichmentToAlbumResponse {
    /**
     * [Output only] Enrichment which was added.
     */
    enrichmentItem?: Schema$EnrichmentItem;
  }
  /**
   * Representation of an album in Google Photos. Albums are containers for
   * media items. If an album has been shared by the application, it contains an
   * extra `shareInfo` property.
   */
  export interface Schema$Album {
    /**
     * [Output only] A URL to the cover photo&#39;s bytes. This shouldn&#39;t be
     * used as is. Parameters should be appended to this URL before use. For
     * example, `&#39;=w2048-h1024&#39;` sets the dimensions of the cover photo
     * to have a width of 2048 px and height of 1024 px.
     */
    coverPhotoBaseUrl?: string;
    /**
     * [Output only] Identifier for the media item associated with the cover
     * photo.
     */
    coverPhotoMediaItemId?: string;
    /**
     * [Ouput only] Identifier for the album. This is a persistent identifier
     * that can be used between sessions to identify this album.
     */
    id?: string;
    /**
     * [Output only] True if you can create media items in this album. This
     * field is based on the scopes granted and permissions of the album. If the
     * scopes are changed or permissions of the album are changed, this field is
     * updated.
     */
    isWriteable?: boolean;
    /**
     * [Output only] The number of media items in the album.
     */
    mediaItemsCount?: string;
    /**
     * [Output only] Google Photos URL for the album. The user needs to be
     * signed in to their Google Photos account to access this link.
     */
    productUrl?: string;
    /**
     * [Output only] Information related to shared albums. This field is only
     * populated if the album is a shared album, the developer created the album
     * and the user has granted the `photoslibrary.sharing` scope.
     */
    shareInfo?: Schema$ShareInfo;
    /**
     * Name of the album displayed to the user in their Google Photos account.
     * This string shouldn&#39;t be more than 500 characters.
     */
    title?: string;
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
   * library. If an `albumid` is specified, the media items are also added to
   * that album. `albumPosition` is optional and can only be specified if an
   * `albumId` is set.
   */
  export interface Schema$BatchCreateMediaItemsRequest {
    /**
     * Identifier of the album where the media items are added. The media items
     * are also added to the user&#39;s library. This is an optional field.
     */
    albumId?: string;
    /**
     * Position in the album where the media items are added. If not specified,
     * the media items are added to the end of the album (as per the default
     * value, that is, `LAST_IN_ALBUM`). The request fails if this field is set
     * and the `albumId` is not specified. The request will also fail if you set
     * the field and are not the owner of the shared album.
     */
    albumPosition?: Schema$AlbumPosition;
    /**
     * List of media items to be created.
     */
    newMediaItems?: Schema$NewMediaItem[];
  }
  /**
   * List of media items created.
   */
  export interface Schema$BatchCreateMediaItemsResponse {
    /**
     * [Output only] List of media items created.
     */
    newMediaItemResults?: Schema$NewMediaItemResult[];
  }
  /**
   * This filter allows you to return media items based on the content type.
   * It&#39;s possible to specify a list of categories to include, and/or a list
   * of categories to exclude. Within each list, the categories are combined
   * with an OR. &lt;p&gt; The content filter `includedContentCategories`: [c1,
   * c2, c3] would get media items that contain (c1 OR c2 OR c3). &lt;p&gt; The
   * content filter `excludedContentCategories`: [c1, c2, c3] would NOT get
   * media items that contain (c1 OR c2 OR c3). &lt;p&gt; You can also include
   * some categories while excluding others, as in this example:
   * `includedContentCategories`: [c1, c2], `excludedContentCategories`: [c3,
   * c4] &lt;p&gt; The previous example would get media items that contain (c1
   * OR c2) AND NOT (c3 OR c4). A category that appears in
   * `includedContentategories` must not appear in `excludedContentCategories`.
   */
  export interface Schema$ContentFilter {
    /**
     * The set of categories which are not to be included in the media item
     * search results. The items in the set are ORed. There&#39;s a maximum of
     * 10 `excludedContentCategories` per request.
     */
    excludedContentCategories?: string[];
    /**
     * The set of categories to be included in the media item search results.
     * The items in the set are ORed. There&#39;s a maximum of 10
     * `includedContentCategories` per request.
     */
    includedContentCategories?: string[];
  }
  /**
   * Information about the user who added the media item. Note that this
   * information is included only if the media item is within a shared album
   * created by your app and you have the sharing scope.
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
   * month where the day isn&#39;t significant, such as a whole calendar month.
   * The month may be 0 to represent a a day and a year where the month
   * isn&#39;t signficant, like when you want to specify the same day in every
   * month of a year or a specific year. The year may be 0 to represent a month
   * and day independent of year, like an anniversary date.
   */
  export interface Schema$Date {
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month, or 0
     * if specifying a year/month where the day isn&#39;t significant.
     */
    day?: number;
    /**
     * Month of year. Must be from 1 to 12, or 0 if specifying a year without a
     * month and day.
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
   * returned. It&#39;s possible to pick a set of specific dates and a set of
   * date ranges.
   */
  export interface Schema$DateFilter {
    /**
     * List of dates that match the media items&#39; creation date. A maximum of
     * 5 dates can be included per request.
     */
    dates?: Schema$Date[];
    /**
     * List of dates ranges that match the media items&#39; creation date. A
     * maximum of 5 dates ranges can be included per request.
     */
    ranges?: Schema$DateRange[];
  }
  /**
   * Defines a range of dates. Both dates must be of the same format. For more
   * information, see &lt;a href=&quot;#Date&quot;&gt;Date&lt;/a&gt;
   */
  export interface Schema$DateRange {
    /**
     * The end date (included as part of the range). It must be specified in the
     * same format as the start date.
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
   * options are specified, they&#39;re treated as AND with each other.
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
     * If set, the results exclude media items that were not created by this
     * app. Defaults to false (all media items are returned). This field is
     * ignored if the photoslibrary.readonly.appcreateddata scope is used.
     */
    excludeNonAppCreatedData?: boolean;
    /**
     * If set, the results include media items that the user has archived.
     * Defaults to false (archived media items aren&#39;t included).
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
     * Token to join the shared album on behalf of the user.
     */
    shareToken?: string;
  }
  /**
   * Response to successfully joining the shared album on behalf of the user.
   */
  export interface Schema$JoinSharedAlbumResponse {
    /**
     * Shared album that the user has joined.
     */
    album?: Schema$Album;
  }
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
  /**
   * List of albums requested.
   */
  export interface Schema$ListAlbumsResponse {
    /**
     * [Output only] List of albums shown in the Albums tab of the user&#39;s
     * Google Photos app.
     */
    albums?: Schema$Album[];
    /**
     * [Output only] Token to use to get the next set of albums. Populated if
     * there are more albums to retrieve for this request.
     */
    nextPageToken?: string;
  }
  /**
   * List of all media items from the user&#39;s Google Photos library.
   */
  export interface Schema$ListMediaItemsResponse {
    /**
     * [Output only] List of media items in the user&#39;s library.
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
   * List of shared albums requested.
   */
  export interface Schema$ListSharedAlbumsResponse {
    /**
     * [Output only] Token to use to get the next set of shared albums.
     * Populated if there are more shared albums to retrieve for this request.
     */
    nextPageToken?: string;
    /**
     * [Output only] List of shared albums.
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
   * Representation of a media item (such as a photo or video) in Google Photos.
   */
  export interface Schema$MediaItem {
    /**
     * A URL to the media item&#39;s bytes. This shouldn&#39;t be used directly
     * to access the media item. For example, `&#39;=w2048-h1024&#39;` will set
     * the dimensions of a media item of type photo to have a width of 2048 px
     * and height of 1024 px.
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
     * Filename of the media item. This is shown to the user in the item&#39;s
     * info section in the Google Photos app.
     */
    filename?: string;
    /**
     * Identifier for the media item. This is a persistent identifier that can
     * be used between sessions to identify this media item.
     */
    id?: string;
    /**
     * Metadata related to the media item, such as, height, width, or creation
     * time.
     */
    mediaMetadata?: Schema$MediaMetadata;
    /**
     * MIME type of the media item. For example, `image/jpeg`.
     */
    mimeType?: string;
    /**
     * Google Photos URL for the media item. This link is available to the user
     * only if they&#39;re signed in.
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
     * The attributes of the media item.
     */
    mediaAttributes?: string[];
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
   * This filter defines the type of media items to be returned, for example,
   * videos or photos. All the specified media types are treated as an OR when
   * used together.
   */
  export interface Schema$MediaTypeFilter {
    /**
     * The types of media items to be included. This field should be populated
     * with only one media type. If you specify multiple media types, it results
     * in an error.
     */
    mediaTypes?: string[];
  }
  /**
   * A new enrichment item to be added to an album, used by the
   * `albums.addEnrichment` call.
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
   * New media item that&#39;s created in a user&#39;s Google Photos account.
   */
  export interface Schema$NewMediaItem {
    /**
     * Description of the media item. This will be shown to the user in the
     * item&#39;s info section in the Google Photos app. This string
     * shouldn&#39;t be more than 1000 characters.
     */
    description?: string;
    /**
     * A new media item that has been uploaded via the included `uploadToken`.
     */
    simpleMediaItem?: Schema$SimpleMediaItem;
  }
  /**
   * Result of creating a new media item.
   */
  export interface Schema$NewMediaItemResult {
    /**
     * Media item created with the upload token. It&#39;s populated if no errors
     * occurred and the media item was created successfully.
     */
    mediaItem?: Schema$MediaItem;
    /**
     * If an error occurred during the creation of this media item, this field
     * is  populated with information related to the error. For details
     * regarding this field, see &lt;a
     * href=&quot;#Status&quot;&gt;Status&lt;/a&gt;.
     */
    status?: Schema$Status;
    /**
     * The upload token used to create this new media item.
     */
    uploadToken?: string;
  }
  /**
   * Metadata that is specific to a photo, such as, ISO, focal length and
   * exposure time. Some of these fields may be null or not included.
   */
  export interface Schema$Photo {
    /**
     * Aperture f number of the camera lens with which the photo was taken.
     */
    apertureFNumber?: number;
    /**
     * Brand of the camera with which the photo was taken.
     */
    cameraMake?: string;
    /**
     * Model of the camera with which the photo was taken.
     */
    cameraModel?: string;
    /**
     * Exposure time of the camera aperture when the photo was taken.
     */
    exposureTime?: string;
    /**
     * Focal length of the camera lens with which the photo was taken.
     */
    focalLength?: number;
    /**
     * ISO of the camera with which the photo was taken.
     */
    isoEquivalent?: number;
  }
  /**
   * Request to search for media items in a user&#39;s library.  If the album id
   * is specified, this call will return the list of media items in the album.
   * If neither filters nor album id are specified, this call will return all
   * media items in a user&#39;s Google Photos library.  If filters are
   * specified, this call will return all media items in the user&#39;s library
   * that fulfill the filter criteria.  Filters and album id must not both be
   * set, as this will result in an invalid request.
   */
  export interface Schema$SearchMediaItemsRequest {
    /**
     * Identifier of an album. If populated, lists all media items in specified
     * album. Can&#39;t set in conjunction with any filters.
     */
    albumId?: string;
    /**
     * Filters to apply to the request. Can&#39;t be set in conjunction with an
     * `albumId`.
     */
    filters?: Schema$Filters;
    /**
     * Maximum number of media items to return in the response. The default
     * number of media items to return at a time is 25. The maximum `pageSize`
     * is 100.
     */
    pageSize?: number;
    /**
     * A continuation token to get the next page of the results. Adding this to
     * the request returns the rows after the `pageToken`. The `pageToken`
     * should be the value returned in the `nextPageToken` parameter in the
     * response to the `searchMediaItems` request.
     */
    pageToken?: string;
  }
  /**
   * List of media items that match the search parameters.
   */
  export interface Schema$SearchMediaItemsResponse {
    /**
     * [Output only] List of media items that match the search parameters.
     */
    mediaItems?: Schema$MediaItem[];
    /**
     * [Output only] Use this token to get the next set of media items. Its
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
  /**
   * Response to successfully sharing an album.
   */
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
   * Information about albums that are shared. This information is only included
   * if you created the album, it is shared and you have the sharing scope.
   */
  export interface Schema$ShareInfo {
    /**
     * True if the user has joined the album. This is always true for the owner
     * of the shared album.
     */
    isJoined?: boolean;
    /**
     * A link to the album that&#39;s now shared on the Google Photos website
     * and app. Anyone with the link can access this shared album and see all of
     * the items present in the album.
     */
    shareableUrl?: string;
    /**
     * Options that control the sharing of an album.
     */
    sharedAlbumOptions?: Schema$SharedAlbumOptions;
    /**
     * A token that can be used by other users to join this shared album via the
     * API.
     */
    shareToken?: string;
  }
  /**
   * A simple media item to be created in Google Photos via an upload token.
   */
  export interface Schema$SimpleMediaItem {
    /**
     * Token identifying the media bytes that have been uploaded to Google.
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
     * Text for this enrichment item.
     */
    text?: string;
  }
  /**
   * Metadata that is specific to a video, for example, fps and processing
   * status. Some of these fields may be null or not included.
   */
  export interface Schema$Video {
    /**
     * Brand of the camera with which the video was taken.
     */
    cameraMake?: string;
    /**
     * Model of the camera with which the video was taken.
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
     * @desc Adds an enrichment at a specified position in a defined album.
     * @alias photoslibrary.albums.addEnrichment
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.albumId Identifier of the album where the enrichment is to be added.
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
     * @desc Returns the album based on the specified `albumId` or `shareToken`.
     * Exactly one of `albumId` and `shareToken` must be set. The `albumId`
     * should be the ID of an album owned by the user or a shared album that the
     * user has joined.
     * @alias photoslibrary.albums.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.albumId Identifier of the album to be requested. Must not be set if `shareToken` is set.
     * @param {string=} params.shareToken Share token of the album to be request. Must not be set if `albumId` is set.
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
     * @desc Lists all albums shown to a user in the Albums tab of the Google
     * Photos app.
     * @alias photoslibrary.albums.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.excludeNonAppCreatedData If set, the results exclude media items that were not created by this app. Defaults to false (all albums are returned). This field is ignored if the photoslibrary.readonly.appcreateddata scope is used.
     * @param {integer=} params.pageSize Maximum number of albums to return in the response. The default number of albums to return at a time is 20. The maximum `pageSize` is 50.
     * @param {string=} params.pageToken A continuation token to get the next page of the results. Adding this to the request returns the rows after the `pageToken`. The `pageToken` should be the value returned in the `nextPageToken` parameter in the response to the `listAlbums` request.
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
     * @desc Marks an album as shared and accessible to other users. This action
     * can only be performed on albums which were created by the developer via
     * the API.
     * @alias photoslibrary.albums.share
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.albumId Identifier of the album to be shared. This `albumId` must belong to an album created by the developer.
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
     * Identifier of the album where the enrichment is to be added.
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
     * Identifier of the album to be requested. Must not be set if `shareToken`
     * is set.
     */
    albumId?: string;
    /**
     * Share token of the album to be request. Must not be set if `albumId` is
     * set.
     */
    shareToken?: string;
  }
  export interface Params$Resource$Albums$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * If set, the results exclude media items that were not created by this
     * app. Defaults to false (all albums are returned). This field is ignored
     * if the photoslibrary.readonly.appcreateddata scope is used.
     */
    excludeNonAppCreatedData?: boolean;
    /**
     * Maximum number of albums to return in the response. The default number of
     * albums to return at a time is 20. The maximum `pageSize` is 50.
     */
    pageSize?: number;
    /**
     * A continuation token to get the next page of the results. Adding this to
     * the request returns the rows after the `pageToken`. The `pageToken`
     * should be the value returned in the `nextPageToken` parameter in the
     * response to the `listAlbums` request.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Albums$Share {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Identifier of the album to be shared. This `albumId` must belong to an
     * album created by the developer.
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
     * This is the second step for creating a media item. For details regarding
     * Step 1, uploading the raw bytes to a Google Server, see <a
     * href="/photos/library/guides/upload-media">Uploading media</a>.  This
     * call adds the media item to the library. If an album `id` is specified,
     * the call adds the media item to the album too. By default, the media item
     * will be added to the end of the library or album.  If an album `id` and
     * position are both defined, the media item is added to the album at the
     * specified position.  If the call contains multiple media items, they're
     * added at the specified position. If you are creating a media item in a
     * shared album where you are not the owner, you are not allowed to position
     * the media item. Doing so will result in a `BAD REQUEST` error.
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
     * @desc Returns the media item for the specified media item `id`.
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
     * photoslibrary.mediaItems.list
     * @desc List all media items from a user's Google Photos library.
     * @alias photoslibrary.mediaItems.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Maximum number of media items to return in the response. The default number of media items to return at a time is 25. The maximum `pageSize` is 100.
     * @param {string=} params.pageToken A continuation token to get the next page of the results. Adding this to the request returns the rows after the `pageToken`. The `pageToken` should be the value returned in the `nextPageToken` parameter in the response to the `listMediaItems` request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Mediaitems$List, options?: MethodOptions):
        AxiosPromise<Schema$ListMediaItemsResponse>;
    list(
        params: Params$Resource$Mediaitems$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListMediaItemsResponse>,
        callback: BodyResponseCallback<Schema$ListMediaItemsResponse>): void;
    list(
        params: Params$Resource$Mediaitems$List,
        callback: BodyResponseCallback<Schema$ListMediaItemsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListMediaItemsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Mediaitems$List|
        BodyResponseCallback<Schema$ListMediaItemsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListMediaItemsResponse>,
        callback?: BodyResponseCallback<Schema$ListMediaItemsResponse>):
        void|AxiosPromise<Schema$ListMediaItemsResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Mediaitems$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mediaitems$List;
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
              url: (rootUrl + '/v1/mediaItems').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListMediaItemsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListMediaItemsResponse>(parameters);
      }
    }


    /**
     * photoslibrary.mediaItems.search
     * @desc Searches for media items in a user's Google Photos library. If no
     * filters are set, then all media items in the user's library are returned.
     * If an album is set, all media items in the specified album are returned.
     * If filters are specified, media items that match the filters from the
     * user's library are listed. If you set both the album and the filters, the
     * request results in an error.
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
  export interface Params$Resource$Mediaitems$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Maximum number of media items to return in the response. The default
     * number of media items to return at a time is 25. The maximum `pageSize`
     * is 100.
     */
    pageSize?: number;
    /**
     * A continuation token to get the next page of the results. Adding this to
     * the request returns the rows after the `pageToken`. The `pageToken`
     * should be the value returned in the `nextPageToken` parameter in the
     * response to the `listMediaItems` request.
     */
    pageToken?: string;
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
     * photoslibrary.sharedAlbums.get
     * @desc Returns the album based on the specified `albumId` or `shareToken`.
     * Exactly one of `albumId` and `shareToken` must be set. The `albumId`
     * should be the ID of an album owned by the user or a shared album that the
     * user has joined.
     * @alias photoslibrary.sharedAlbums.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.albumId Identifier of the album to be requested. Must not be set if `shareToken` is set.
     * @param {string} params.shareToken Share token of the album to be request. Must not be set if `albumId` is set.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Sharedalbums$Get,
        options?: MethodOptions): AxiosPromise<Schema$Album>;
    get(params: Params$Resource$Sharedalbums$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Album>,
        callback: BodyResponseCallback<Schema$Album>): void;
    get(params: Params$Resource$Sharedalbums$Get,
        callback: BodyResponseCallback<Schema$Album>): void;
    get(callback: BodyResponseCallback<Schema$Album>): void;
    get(paramsOrCallback?: Params$Resource$Sharedalbums$Get|
        BodyResponseCallback<Schema$Album>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Album>,
        callback?: BodyResponseCallback<Schema$Album>):
        void|AxiosPromise<Schema$Album> {
      let params = (paramsOrCallback || {}) as Params$Resource$Sharedalbums$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sharedalbums$Get;
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
              url: (rootUrl + '/v1/sharedAlbums/{+shareToken}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['shareToken'],
        pathParams: ['shareToken'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Album>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Album>(parameters);
      }
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
     * @desc Lists all shared albums available in the Sharing tab of the user's
     * Google Photos app.
     * @alias photoslibrary.sharedAlbums.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.excludeNonAppCreatedData If set, the results exclude media items that were not created by this app. Defaults to false (all albums are returned). This field is ignored if the photoslibrary.readonly.appcreateddata scope is used.
     * @param {integer=} params.pageSize Maximum number of albums to return in the response. The default number of albums to return at a time is 20. The maximum `pageSize` is 50.
     * @param {string=} params.pageToken A continuation token to get the next page of the results. Adding this to the request returns the rows after the `pageToken`. The `pageToken` should be the value returned in the `nextPageToken` parameter in the response to the `listSharedAlbums` request.
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

  export interface Params$Resource$Sharedalbums$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Identifier of the album to be requested. Must not be set if `shareToken`
     * is set.
     */
    albumId?: string;
    /**
     * Share token of the album to be request. Must not be set if `albumId` is
     * set.
     */
    shareToken?: string;
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
     * If set, the results exclude media items that were not created by this
     * app. Defaults to false (all albums are returned). This field is ignored
     * if the photoslibrary.readonly.appcreateddata scope is used.
     */
    excludeNonAppCreatedData?: boolean;
    /**
     * Maximum number of albums to return in the response. The default number of
     * albums to return at a time is 20. The maximum `pageSize` is 50.
     */
    pageSize?: number;
    /**
     * A continuation token to get the next page of the results. Adding this to
     * the request returns the rows after the `pageToken`. The `pageToken`
     * should be the value returned in the `nextPageToken` parameter in the
     * response to the `listSharedAlbums` request.
     */
    pageToken?: string;
  }
}
