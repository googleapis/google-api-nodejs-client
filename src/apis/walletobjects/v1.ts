// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  BaseExternalAccountClient,
  GaxiosPromise,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  GoogleAuth,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace walletobjects_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?:
      | string
      | OAuth2Client
      | JWT
      | Compute
      | UserRefreshClient
      | BaseExternalAccountClient
      | GoogleAuth;

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
   * Google Wallet API
   *
   * API for issuers to save and manage Google Wallet Objects.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const walletobjects = google.walletobjects('v1');
   * ```
   */
  export class Walletobjects {
    context: APIRequestContext;
    eventticketclass: Resource$Eventticketclass;
    eventticketobject: Resource$Eventticketobject;
    flightclass: Resource$Flightclass;
    flightobject: Resource$Flightobject;
    genericclass: Resource$Genericclass;
    genericobject: Resource$Genericobject;
    giftcardclass: Resource$Giftcardclass;
    giftcardobject: Resource$Giftcardobject;
    issuer: Resource$Issuer;
    jwt: Resource$Jwt;
    loyaltyclass: Resource$Loyaltyclass;
    loyaltyobject: Resource$Loyaltyobject;
    media: Resource$Media;
    offerclass: Resource$Offerclass;
    offerobject: Resource$Offerobject;
    permissions: Resource$Permissions;
    smarttap: Resource$Smarttap;
    transitclass: Resource$Transitclass;
    transitobject: Resource$Transitobject;
    walletobjects: Resource$Walletobjects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.eventticketclass = new Resource$Eventticketclass(this.context);
      this.eventticketobject = new Resource$Eventticketobject(this.context);
      this.flightclass = new Resource$Flightclass(this.context);
      this.flightobject = new Resource$Flightobject(this.context);
      this.genericclass = new Resource$Genericclass(this.context);
      this.genericobject = new Resource$Genericobject(this.context);
      this.giftcardclass = new Resource$Giftcardclass(this.context);
      this.giftcardobject = new Resource$Giftcardobject(this.context);
      this.issuer = new Resource$Issuer(this.context);
      this.jwt = new Resource$Jwt(this.context);
      this.loyaltyclass = new Resource$Loyaltyclass(this.context);
      this.loyaltyobject = new Resource$Loyaltyobject(this.context);
      this.media = new Resource$Media(this.context);
      this.offerclass = new Resource$Offerclass(this.context);
      this.offerobject = new Resource$Offerobject(this.context);
      this.permissions = new Resource$Permissions(this.context);
      this.smarttap = new Resource$Smarttap(this.context);
      this.transitclass = new Resource$Transitclass(this.context);
      this.transitobject = new Resource$Transitobject(this.context);
      this.walletobjects = new Resource$Walletobjects(this.context);
    }
  }

  /**
   * ActivationOptions for the class
   */
  export interface Schema$ActivationOptions {
    /**
     * HTTPS URL that supports REST semantics. Would be used for requesting activation from partners for given valuable, triggered by the users.
     */
    activationUrl?: string | null;
    /**
     * Flag to allow users to make activation call from different device. This allows client to render the activation button enabled even if the activationStatus is ACTIVATED but the requested device is different than the current device.
     */
    allowReactivation?: boolean | null;
  }
  /**
   * The activation status of the object. This field includes activation status if valuable supports activation.
   */
  export interface Schema$ActivationStatus {
    state?: string | null;
  }
  /**
   * Resource used when the AddMessage endpoints are called.
   */
  export interface Schema$AddMessageRequest {
    message?: Schema$Message;
  }
  export interface Schema$AirportInfo {
    /**
     * Three character IATA airport code. This is a required field for `origin` and `destination`. Eg: "SFO"
     */
    airportIataCode?: string | null;
    /**
     * Optional field that overrides the airport city name defined by IATA. By default, Google takes the `airportIataCode` provided and maps it to the official airport city name defined by IATA. Official IATA airport city names can be found at IATA airport city names website. For example, for the airport IATA code "LTN", IATA website tells us that the corresponding airport city is "London". If this field is not populated, Google would display "London". However, populating this field with a custom name (eg: "London Luton") would override it.
     */
    airportNameOverride?: Schema$LocalizedString;
    /**
     * A name of the gate. Eg: "B59" or "59"
     */
    gate?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"walletobjects#airportInfo"`.
     */
    kind?: string | null;
    /**
     * Terminal name. Eg: "INTL" or "I"
     */
    terminal?: string | null;
  }
  export interface Schema$AppLinkData {
    /**
     * Optional information about the partner app link. If included, the app link link module will be rendered on the valuable details on the android client.
     */
    androidAppLinkInfo?: Schema$AppLinkDataAppLinkInfo;
    /**
     * Optional information about the partner app link. If included, the app link link module will be rendered on the valuable details on the ios client.
     */
    iosAppLinkInfo?: Schema$AppLinkDataAppLinkInfo;
    /**
     * Optional information about the partner app link. If included, the app link link module will be rendered on the valuable details on the web client.
     */
    webAppLinkInfo?: Schema$AppLinkDataAppLinkInfo;
  }
  export interface Schema$AppLinkDataAppLinkInfo {
    /**
     * Optional image to be displayed in the App Link Module
     */
    appLogoImage?: Schema$Image;
    /**
     * Url to follow when opening the App Link Module on clients. It will be used by partners to open their webpage or deeplink into their app.
     */
    appTarget?: Schema$AppLinkDataAppLinkInfoAppTarget;
    /**
     * String to be displayed in the description of the App Link Module Required
     */
    description?: Schema$LocalizedString;
    /**
     * String to be displayed in the title of the App Link Module Required
     */
    title?: Schema$LocalizedString;
  }
  export interface Schema$AppLinkDataAppLinkInfoAppTarget {
    targetUri?: Schema$Uri;
  }
  export interface Schema$AuthenticationKey {
    /**
     * Available only to Smart Tap enabled partners. Contact support for additional guidance.
     */
    id?: number | null;
    /**
     * Available only to Smart Tap enabled partners. Contact support for additional guidance.
     */
    publicKeyPem?: string | null;
  }
  export interface Schema$Barcode {
    /**
     * An optional text that will override the default text that shows under the barcode. This field is intended for a human readable equivalent of the barcode value, used when the barcode cannot be scanned.
     */
    alternateText?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"walletobjects#barcode"`.
     */
    kind?: string | null;
    /**
     * The render encoding for the barcode. When specified, barcode is rendered in the given encoding. Otherwise best known encoding is chosen by Google.
     */
    renderEncoding?: string | null;
    /**
     * Optional text that will be shown when the barcode is hidden behind a click action. This happens in cases where a pass has Smart Tap enabled. If not specified, a default is chosen by Google.
     */
    showCodeText?: Schema$LocalizedString;
    /**
     * The type of barcode.
     */
    type?: string | null;
    /**
     * The value encoded in the barcode.
     */
    value?: string | null;
  }
  export interface Schema$BarcodeSectionDetail {
    /**
     * A reference to an existing text-based or image field to display.
     */
    fieldSelector?: Schema$FieldSelector;
  }
  /**
   * Information to read/write to blobstore2.
   */
  export interface Schema$Blobstore2Info {
    /**
     * The blob generation id.
     */
    blobGeneration?: string | null;
    /**
     * The blob id, e.g., /blobstore/prod/playground/scotty
     */
    blobId?: string | null;
    /**
     * Read handle passed from Bigstore -\> Scotty for a GCS download. This is a signed, serialized blobstore2.ReadHandle proto which must never be set outside of Bigstore, and is not applicable to non-GCS media downloads.
     */
    downloadReadHandle?: string | null;
    /**
     * The blob read token. Needed to read blobs that have not been replicated. Might not be available until the final call.
     */
    readToken?: string | null;
    /**
     * Metadata passed from Blobstore -\> Scotty for a new GCS upload. This is a signed, serialized blobstore2.BlobMetadataContainer proto which must never be consumed outside of Bigstore, and is not applicable to non-GCS media uploads.
     */
    uploadMetadataContainer?: string | null;
  }
  export interface Schema$BoardingAndSeatingInfo {
    /**
     * Set this field only if this flight boards through more than one door or bridge and you want to explicitly print the door location on the boarding pass. Most airlines route their passengers to the right door or bridge by refering to doors/bridges by the `seatClass`. In those cases `boardingDoor` should not be set.
     */
    boardingDoor?: string | null;
    /**
     * The value of boarding group (or zone) this passenger shall board with. eg: "B" The label for this value will be determined by the `boardingPolicy` field in the `flightClass` referenced by this object.
     */
    boardingGroup?: string | null;
    /**
     * The value of boarding position. eg: "76"
     */
    boardingPosition?: string | null;
    /**
     * A small image shown above the boarding barcode. Airlines can use it to communicate any special boarding privileges. In the event the security program logo is also set, this image might be rendered alongside the logo for that security program.
     */
    boardingPrivilegeImage?: Schema$Image;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"walletobjects#boardingAndSeatingInfo"`.
     */
    kind?: string | null;
    /**
     * The passenger's seat assignment. To be used when there is no specific identifier to use in `seatNumber`. eg: "assigned at gate"
     */
    seatAssignment?: Schema$LocalizedString;
    /**
     * The value of the seat class. eg: "Economy" or "Economy Plus"
     */
    seatClass?: string | null;
    /**
     * The value of passenger seat. If there is no specific identifier, use `seatAssignment` instead. eg: "25A"
     */
    seatNumber?: string | null;
    /**
     * The sequence number on the boarding pass. This usually matches the sequence in which the passengers checked in. Airline might use the number for manual boarding and bag tags. eg: "49"
     */
    sequenceNumber?: string | null;
  }
  export interface Schema$BoardingAndSeatingPolicy {
    /**
     * Indicates the policy the airline uses for boarding. If unset, Google will default to `zoneBased`.
     */
    boardingPolicy?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"walletobjects#boardingAndSeatingPolicy"`.
     */
    kind?: string | null;
    /**
     * Seating policy which dictates how we display the seat class. If unset, Google will default to `cabinBased`.
     */
    seatClassPolicy?: string | null;
  }
  export interface Schema$CallbackOptions {
    /**
     * URL for the merchant endpoint that would be called to request updates. The URL should be hosted on HTTPS and robots.txt should allow the URL path to be accessible by UserAgent:Google-Valuables. Deprecated.
     */
    updateRequestUrl?: string | null;
    /**
     * The HTTPS url configured by the merchant. The URL should be hosted on HTTPS and robots.txt should allow the URL path to be accessible by UserAgent:Google-Valuables.
     */
    url?: string | null;
  }
  export interface Schema$CardBarcodeSectionDetails {
    /**
     * Optional information to display below the barcode.
     */
    firstBottomDetail?: Schema$BarcodeSectionDetail;
    /**
     * Optional information to display above the barcode. If `secondTopDetail` is defined, this will be displayed to the start side of this detail section.
     */
    firstTopDetail?: Schema$BarcodeSectionDetail;
    /**
     * Optional second piece of information to display above the barcode. If `firstTopDetail` is defined, this will be displayed to the end side of this detail section.
     */
    secondTopDetail?: Schema$BarcodeSectionDetail;
  }
  export interface Schema$CardRowOneItem {
    /**
     * The item to be displayed in the row. This item will be automatically centered.
     */
    item?: Schema$TemplateItem;
  }
  export interface Schema$CardRowTemplateInfo {
    /**
     * Template for a row containing one item. Exactly one of "one_item", "two_items", "three_items" must be set.
     */
    oneItem?: Schema$CardRowOneItem;
    /**
     * Template for a row containing three items. Exactly one of "one_item", "two_items", "three_items" must be set.
     */
    threeItems?: Schema$CardRowThreeItems;
    /**
     * Template for a row containing two items. Exactly one of "one_item", "two_items", "three_items" must be set.
     */
    twoItems?: Schema$CardRowTwoItems;
  }
  export interface Schema$CardRowThreeItems {
    /**
     * The item to be displayed at the end of the row. This item will be aligned to the right.
     */
    endItem?: Schema$TemplateItem;
    /**
     * The item to be displayed in the middle of the row. This item will be centered between the start and end items.
     */
    middleItem?: Schema$TemplateItem;
    /**
     * The item to be displayed at the start of the row. This item will be aligned to the left.
     */
    startItem?: Schema$TemplateItem;
  }
  export interface Schema$CardRowTwoItems {
    /**
     * The item to be displayed at the end of the row. This item will be aligned to the right.
     */
    endItem?: Schema$TemplateItem;
    /**
     * The item to be displayed at the start of the row. This item will be aligned to the left.
     */
    startItem?: Schema$TemplateItem;
  }
  export interface Schema$CardTemplateOverride {
    /**
     * Template information for rows in the card view. At most three rows are allowed to be specified.
     */
    cardRowTemplateInfos?: Schema$CardRowTemplateInfo[];
  }
  export interface Schema$ClassTemplateInfo {
    /**
     * Specifies extra information to be displayed above and below the barcode.
     */
    cardBarcodeSectionDetails?: Schema$CardBarcodeSectionDetails;
    /**
     * Override for the card view.
     */
    cardTemplateOverride?: Schema$CardTemplateOverride;
    /**
     * Override for the details view (beneath the card view).
     */
    detailsTemplateOverride?: Schema$DetailsTemplateOverride;
    /**
     * Override for the passes list view.
     */
    listTemplateOverride?: Schema$ListTemplateOverride;
  }
  /**
   * A sequence of media data references representing composite data. Introduced to support Bigstore composite objects. For details, visit http://go/bigstore-composites.
   */
  export interface Schema$CompositeMedia {
    /**
     * Blobstore v1 reference, set if reference_type is BLOBSTORE_REF This should be the byte representation of a blobstore.BlobRef. Since Blobstore is deprecating v1, use blobstore2_info instead. For now, any v2 blob will also be represented in this field as v1 BlobRef.
     */
    blobRef?: string | null;
    /**
     * Blobstore v2 info, set if reference_type is BLOBSTORE_REF and it refers to a v2 blob.
     */
    blobstore2Info?: Schema$Blobstore2Info;
    /**
     * A binary data reference for a media download. Serves as a technology-agnostic binary reference in some Google infrastructure. This value is a serialized storage_cosmo.BinaryReference proto. Storing it as bytes is a hack to get around the fact that the cosmo proto (as well as others it includes) doesn't support JavaScript. This prevents us from including the actual type of this field.
     */
    cosmoBinaryReference?: string | null;
    /**
     * crc32.c hash for the payload.
     */
    crc32cHash?: number | null;
    /**
     * Media data, set if reference_type is INLINE
     */
    inline?: string | null;
    /**
     * Size of the data, in bytes
     */
    length?: string | null;
    /**
     * MD5 hash for the payload.
     */
    md5Hash?: string | null;
    /**
     * Reference to a TI Blob, set if reference_type is BIGSTORE_REF.
     */
    objectId?: Schema$ObjectId;
    /**
     * Path to the data, set if reference_type is PATH
     */
    path?: string | null;
    /**
     * Describes what the field reference contains.
     */
    referenceType?: string | null;
    /**
     * SHA-1 hash for the payload.
     */
    sha1Hash?: string | null;
  }
  /**
   * Detailed Content-Type information from Scotty. The Content-Type of the media will typically be filled in by the header or Scotty's best_guess, but this extended information provides the backend with more information so that it can make a better decision if needed. This is only used on media upload requests from Scotty.
   */
  export interface Schema$ContentTypeInfo {
    /**
     * Scotty's best guess of what the content type of the file is.
     */
    bestGuess?: string | null;
    /**
     * The content type of the file derived by looking at specific bytes (i.e. "magic bytes") of the actual file.
     */
    fromBytes?: string | null;
    /**
     * The content type of the file derived from the file extension of the original file name used by the client.
     */
    fromFileName?: string | null;
    /**
     * The content type of the file as specified in the request headers, multipart headers, or RUPIO start request.
     */
    fromHeader?: string | null;
    /**
     * The content type of the file derived from the file extension of the URL path. The URL path is assumed to represent a file name (which is typically only true for agents that are providing a REST API).
     */
    fromUrlPath?: string | null;
  }
  export interface Schema$DateTime {
    /**
     * An ISO 8601 extended format date/time. Offset may or may not be required (refer to the parent field's documentation). Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the date/time is intended for a physical location in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. Providing an offset makes this an absolute instant in time around the world. The date/time will be adjusted based on the user's time zone. For example, a time of `2018-06-19T18:30:00-04:00` will be 18:30:00 for a user in New York and 15:30:00 for a user in Los Angeles. Omitting the offset makes this a local date/time, representing several instants in time around the world. The date/time will always be in the user's current time zone. For example, a time of `2018-06-19T18:30:00` will be 18:30:00 for a user in New York and also 18:30:00 for a user in Los Angeles. This is useful when the same local date/time should apply to many physical locations across several time zones.
     */
    date?: string | null;
  }
  export interface Schema$DetailsItemInfo {
    /**
     * The item to be displayed in the details list.
     */
    item?: Schema$TemplateItem;
  }
  export interface Schema$DetailsTemplateOverride {
    /**
     * Information for the "nth" item displayed in the details list.
     */
    detailsItemInfos?: Schema$DetailsItemInfo[];
  }
  /**
   * Device context associated with the object.
   */
  export interface Schema$DeviceContext {
    /**
     * If set, redemption information will only be returned to the given device upon activation of the object. This should not be used as a stable identifier to trace a user's device. It can change across different passes for the same device or even across different activations for the same device. When setting this, callers must also set has_linked_device on the object being activated.
     */
    deviceToken?: string | null;
  }
  /**
   * Backend response for a Diff get checksums response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.
   */
  export interface Schema$DiffChecksumsResponse {
    /**
     * Exactly one of these fields must be populated. If checksums_location is filled, the server will return the corresponding contents to the user. If object_location is filled, the server will calculate the checksums based on the content there and return that to the user. For details on the format of the checksums, see http://go/scotty-diff-protocol.
     */
    checksumsLocation?: Schema$CompositeMedia;
    /**
     * The chunk size of checksums. Must be a multiple of 256KB.
     */
    chunkSizeBytes?: string | null;
    /**
     * If set, calculate the checksums based on the contents and return them to the caller.
     */
    objectLocation?: Schema$CompositeMedia;
    /**
     * The total size of the server object.
     */
    objectSizeBytes?: string | null;
    /**
     * The object version of the object the checksums are being returned for.
     */
    objectVersion?: string | null;
  }
  /**
   * Backend response for a Diff download response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.
   */
  export interface Schema$DiffDownloadResponse {
    /**
     * The original object location.
     */
    objectLocation?: Schema$CompositeMedia;
  }
  /**
   * A Diff upload request. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.
   */
  export interface Schema$DiffUploadRequest {
    /**
     * The location of the checksums for the new object. Agents must clone the object located here, as the upload server will delete the contents once a response is received. For details on the format of the checksums, see http://go/scotty-diff-protocol.
     */
    checksumsInfo?: Schema$CompositeMedia;
    /**
     * The location of the new object. Agents must clone the object located here, as the upload server will delete the contents once a response is received.
     */
    objectInfo?: Schema$CompositeMedia;
    /**
     * The object version of the object that is the base version the incoming diff script will be applied to. This field will always be filled in.
     */
    objectVersion?: string | null;
  }
  /**
   * Backend response for a Diff upload request. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.
   */
  export interface Schema$DiffUploadResponse {
    /**
     * The object version of the object at the server. Must be included in the end notification response. The version in the end notification response must correspond to the new version of the object that is now stored at the server, after the upload.
     */
    objectVersion?: string | null;
    /**
     * The location of the original file for a diff upload request. Must be filled in if responding to an upload start notification.
     */
    originalObject?: Schema$CompositeMedia;
  }
  /**
   * Backend response for a Diff get version response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.
   */
  export interface Schema$DiffVersionResponse {
    /**
     * The total size of the server object.
     */
    objectSizeBytes?: string | null;
    /**
     * The version of the object stored at the server.
     */
    objectVersion?: string | null;
  }
  /**
   * Information about how a class may be discovered and instantiated from within the Android Pay app. This is done by searching for a loyalty or gift card program and scanning or manually entering.
   */
  export interface Schema$DiscoverableProgram {
    /**
     * Information about the ability to signin and add a valuable for this program through a merchant site. Used when MERCHANT_HOSTED_SIGNIN is enabled.
     */
    merchantSigninInfo?: Schema$DiscoverableProgramMerchantSigninInfo;
    /**
     * Information about the ability to signup and add a valuable for this program through a merchant site. Used when MERCHANT_HOSTED_SIGNUP is enabled.
     */
    merchantSignupInfo?: Schema$DiscoverableProgramMerchantSignupInfo;
    /**
     * Visibility state of the discoverable program.
     */
    state?: string | null;
  }
  /**
   * Information about the merchant hosted signin flow for a program.
   */
  export interface Schema$DiscoverableProgramMerchantSigninInfo {
    /**
     * The URL to direct the user to for the merchant's signin site.
     */
    signinWebsite?: Schema$Uri;
  }
  /**
   * Information about the merchant hosted signup flow for a program.
   */
  export interface Schema$DiscoverableProgramMerchantSignupInfo {
    /**
     *  User data that is sent in a POST request to the signup website URL. This information is encoded and then shared so that the merchant's website can prefill fields used to enroll the user for the discoverable program.
     */
    signupSharedDatas?: string[] | null;
    /**
     * The URL to direct the user to for the merchant's signup site.
     */
    signupWebsite?: Schema$Uri;
  }
  /**
   * Parameters specific to media downloads.
   */
  export interface Schema$DownloadParameters {
    /**
     * A boolean to be returned in the response to Scotty. Allows/disallows gzip encoding of the payload content when the server thinks it's advantageous (hence, does not guarantee compression) which allows Scotty to GZip the response to the client.
     */
    allowGzipCompression?: boolean | null;
    /**
     * Determining whether or not Apiary should skip the inclusion of any Content-Range header on its response to Scotty.
     */
    ignoreRange?: boolean | null;
  }
  export interface Schema$EventDateTime {
    /**
     * A custom label to use for the doors open value (`doorsOpen`) on the card detail view. This should only be used if the default "Doors Open" label or one of the `doorsOpenLabel` options is not sufficient. Both `doorsOpenLabel` and `customDoorsOpenLabel` may not be set. If neither is set, the label will default to "Doors Open", localized. If the doors open field is unset, this label will not be used.
     */
    customDoorsOpenLabel?: Schema$LocalizedString;
    /**
     * The date/time when the doors open at the venue. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the venue. For example, if the event occurs at the 20th hour of June 5th, 2018 at the venue, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the venue is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available.
     */
    doorsOpen?: string | null;
    /**
     * The label to use for the doors open value (`doorsOpen`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `doorsOpenLabel` and `customDoorsOpenLabel` may not be set. If neither is set, the label will default to "Doors Open", localized. If the doors open field is unset, this label will not be used.
     */
    doorsOpenLabel?: string | null;
    /**
     * The date/time when the event ends. If the event spans multiple days, it should be the end date/time on the last day. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the venue. For example, if the event occurs at the 20th hour of June 5th, 2018 at the venue, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the venue is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available.
     */
    end?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventDateTime"`.
     */
    kind?: string | null;
    /**
     * The date/time when the event starts. If the event spans multiple days, it should be the start date/time on the first day. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the venue. For example, if the event occurs at the 20th hour of June 5th, 2018 at the venue, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the venue is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available.
     */
    start?: string | null;
  }
  export interface Schema$EventReservationInfo {
    /**
     * The confirmation code of the event reservation. This may also take the form of an "order number", "confirmation number", "reservation number", or other equivalent.
     */
    confirmationCode?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventReservationInfo"`.
     */
    kind?: string | null;
  }
  export interface Schema$EventSeat {
    /**
     * The gate the ticket holder should enter to get to their seat, such as "A" or "West". This field is localizable so you may translate words or use different alphabets for the characters in an identifier.
     */
    gate?: Schema$LocalizedString;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventSeat"`.
     */
    kind?: string | null;
    /**
     * The row of the seat, such as "1", E", "BB", or "A5". This field is localizable so you may translate words or use different alphabets for the characters in an identifier.
     */
    row?: Schema$LocalizedString;
    /**
     * The seat number, such as "1", "2", "3", or any other seat identifier. This field is localizable so you may translate words or use different alphabets for the characters in an identifier.
     */
    seat?: Schema$LocalizedString;
    /**
     * The section of the seat, such as "121". This field is localizable so you may translate words or use different alphabets for the characters in an identifier.
     */
    section?: Schema$LocalizedString;
  }
  export interface Schema$EventTicketClass {
    /**
     * Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead.
     */
    allowMultipleUsersPerObject?: boolean | null;
    /**
     * Callback options to be used to call the issuer back for every save/delete of an object for this class by the end-user. All objects of this class are eligible for the callback.
     */
    callbackOptions?: Schema$CallbackOptions;
    /**
     * Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display.
     */
    classTemplateInfo?: Schema$ClassTemplateInfo;
    /**
     * The label to use for the confirmation code value (`eventTicketObject.reservationInfo.confirmationCode`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `confirmationCodeLabel` and `customConfirmationCodeLabel` may not be set. If neither is set, the label will default to "Confirmation Code", localized. If the confirmation code field is unset, this label will not be used.
     */
    confirmationCodeLabel?: string | null;
    /**
     * Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale.
     */
    countryCode?: string | null;
    /**
     * A custom label to use for the confirmation code value (`eventTicketObject.reservationInfo.confirmationCode`) on the card detail view. This should only be used if the default "Confirmation Code" label or one of the `confirmationCodeLabel` options is not sufficient. Both `confirmationCodeLabel` and `customConfirmationCodeLabel` may not be set. If neither is set, the label will default to "Confirmation Code", localized. If the confirmation code field is unset, this label will not be used.
     */
    customConfirmationCodeLabel?: Schema$LocalizedString;
    /**
     * A custom label to use for the gate value (`eventTicketObject.seatInfo.gate`) on the card detail view. This should only be used if the default "Gate" label or one of the `gateLabel` options is not sufficient. Both `gateLabel` and `customGateLabel` may not be set. If neither is set, the label will default to "Gate", localized. If the gate field is unset, this label will not be used.
     */
    customGateLabel?: Schema$LocalizedString;
    /**
     * A custom label to use for the row value (`eventTicketObject.seatInfo.row`) on the card detail view. This should only be used if the default "Row" label or one of the `rowLabel` options is not sufficient. Both `rowLabel` and `customRowLabel` may not be set. If neither is set, the label will default to "Row", localized. If the row field is unset, this label will not be used.
     */
    customRowLabel?: Schema$LocalizedString;
    /**
     * A custom label to use for the seat value (`eventTicketObject.seatInfo.seat`) on the card detail view. This should only be used if the default "Seat" label or one of the `seatLabel` options is not sufficient. Both `seatLabel` and `customSeatLabel` may not be set. If neither is set, the label will default to "Seat", localized. If the seat field is unset, this label will not be used.
     */
    customSeatLabel?: Schema$LocalizedString;
    /**
     * A custom label to use for the section value (`eventTicketObject.seatInfo.section`) on the card detail view. This should only be used if the default "Section" label or one of the `sectionLabel` options is not sufficient. Both `sectionLabel` and `customSectionLabel` may not be set. If neither is set, the label will default to "Section", localized. If the section field is unset, this label will not be used.
     */
    customSectionLabel?: Schema$LocalizedString;
    /**
     * The date & time information of the event.
     */
    dateTime?: Schema$EventDateTime;
    /**
     * Identifies whether this class supports Smart Tap. The `redemptionIssuers` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap.
     */
    enableSmartTap?: boolean | null;
    /**
     * The ID of the event. This ID should be unique for every event in an account. It is used to group tickets together if the user has saved multiple tickets for the same event. It can be at most 64 characters. If provided, the grouping will be stable. Be wary of unintentional collision to avoid grouping tickets that should not be grouped. If you use only one class per event, you can simply set this to the `classId` (with or without the issuer ID portion). If not provided, the platform will attempt to use other data to group tickets (potentially unstable).
     */
    eventId?: string | null;
    /**
     * Required. The name of the event, such as "LA Dodgers at SF Giants".
     */
    eventName?: Schema$LocalizedString;
    /**
     * The fine print, terms, or conditions of the ticket.
     */
    finePrint?: Schema$LocalizedString;
    /**
     * The label to use for the gate value (`eventTicketObject.seatInfo.gate`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `gateLabel` and `customGateLabel` may not be set. If neither is set, the label will default to "Gate", localized. If the gate field is unset, this label will not be used.
     */
    gateLabel?: string | null;
    /**
     * Optional banner image displayed on the front of the card. If none is present, nothing will be displayed. The image will display at 100% width.
     */
    heroImage?: Schema$Image;
    /**
     * The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`.
     */
    hexBackgroundColor?: string | null;
    /**
     * The URI of your application's home page. Populating the URI in this field results in the exact same behavior as populating an URI in linksModuleData (when an object is rendered, a link to the homepage is shown in what would usually be thought of as the linksModuleData section of the object).
     */
    homepageUri?: Schema$Uri;
    /**
     * Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    id?: string | null;
    /**
     * Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.
     */
    imageModulesData?: Schema$ImageModuleData[];
    /**
     * Deprecated. Use textModulesData instead.
     */
    infoModuleData?: Schema$InfoModuleData;
    /**
     * Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.
     */
    issuerName?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventTicketClass"`.
     */
    kind?: string | null;
    /**
     * Links module data. If links module data is also defined on the object, both will be displayed.
     */
    linksModuleData?: Schema$LinksModuleData;
    /**
     * Translated strings for the issuer_name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.
     */
    localizedIssuerName?: Schema$LocalizedString;
    /**
     * Note: This field is currently not supported to trigger geo notifications.
     */
    locations?: Schema$LatLongPoint[];
    /**
     * The logo image of the ticket. This image is displayed in the card detail view of the app.
     */
    logo?: Schema$Image;
    /**
     * An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.
     */
    messages?: Schema$Message[];
    /**
     * Identifies whether multiple users and devices will save the same object referencing this class.
     */
    multipleDevicesAndHoldersAllowedStatus?: string | null;
    /**
     * Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap.
     */
    redemptionIssuers?: string[] | null;
    /**
     * The review comments set by the platform when a class is marked `approved` or `rejected`.
     */
    review?: Schema$Review;
    /**
     * Required. The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`.
     */
    reviewStatus?: string | null;
    /**
     * The label to use for the row value (`eventTicketObject.seatInfo.row`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `rowLabel` and `customRowLabel` may not be set. If neither is set, the label will default to "Row", localized. If the row field is unset, this label will not be used.
     */
    rowLabel?: string | null;
    /**
     * The label to use for the seat value (`eventTicketObject.seatInfo.seat`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `seatLabel` and `customSeatLabel` may not be set. If neither is set, the label will default to "Seat", localized. If the seat field is unset, this label will not be used.
     */
    seatLabel?: string | null;
    /**
     * The label to use for the section value (`eventTicketObject.seatInfo.section`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `sectionLabel` and `customSectionLabel` may not be set. If neither is set, the label will default to "Section", localized. If the section field is unset, this label will not be used.
     */
    sectionLabel?: string | null;
    /**
     * Optional information about the security animation. If this is set a security animation will be rendered on pass details.
     */
    securityAnimation?: Schema$SecurityAnimation;
    /**
     * Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.
     */
    textModulesData?: Schema$TextModuleData[];
    /**
     * Event venue details.
     */
    venue?: Schema$EventVenue;
    /**
     * Deprecated
     */
    version?: string | null;
    /**
     * View Unlock Requirement options for the event ticket.
     */
    viewUnlockRequirement?: string | null;
    /**
     * The wide logo of the ticket. When provided, this will be used in place of the logo in the top left of the card view.
     */
    wideLogo?: Schema$Image;
    /**
     * Deprecated.
     */
    wordMark?: Schema$Image;
  }
  export interface Schema$EventTicketClassAddMessageResponse {
    /**
     * The updated EventTicketClass resource.
     */
    resource?: Schema$EventTicketClass;
  }
  export interface Schema$EventTicketClassListResponse {
    /**
     * Pagination of the response.
     */
    pagination?: Schema$Pagination;
    /**
     * Resources corresponding to the list request.
     */
    resources?: Schema$EventTicketClass[];
  }
  export interface Schema$EventTicketObject {
    /**
     * Optional information about the partner app link.
     */
    appLinkData?: Schema$AppLinkData;
    /**
     * The barcode type and value.
     */
    barcode?: Schema$Barcode;
    /**
     * Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you.
     */
    classId?: string | null;
    /**
     * A copy of the inherited fields of the parent class. These fields are retrieved during a GET.
     */
    classReference?: Schema$EventTicketClass;
    /**
     * Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers.
     */
    disableExpirationNotification?: boolean | null;
    /**
     * The face value of the ticket, matching what would be printed on a physical version of the ticket.
     */
    faceValue?: Schema$Money;
    /**
     * Information that controls how passes are grouped together.
     */
    groupingInfo?: Schema$GroupingInfo;
    /**
     * Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information.
     */
    hasLinkedDevice?: boolean | null;
    /**
     * Indicates if the object has users. This field is set by the platform.
     */
    hasUsers?: boolean | null;
    /**
     * Optional banner image displayed on the front of the card. If none is present, hero image of the class, if present, will be displayed. If hero image of the class is also not present, nothing will be displayed.
     */
    heroImage?: Schema$Image;
    /**
     * The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`.
     */
    hexBackgroundColor?: string | null;
    /**
     * Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    id?: string | null;
    /**
     * Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.
     */
    imageModulesData?: Schema$ImageModuleData[];
    /**
     * Deprecated. Use textModulesData instead.
     */
    infoModuleData?: Schema$InfoModuleData;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventTicketObject"`.
     */
    kind?: string | null;
    /**
     * A list of offer objects linked to this event ticket. The offer objects must already exist. Offer object IDs should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you.
     */
    linkedOfferIds?: string[] | null;
    /**
     * Links module data. If links module data is also defined on the class, both will be displayed.
     */
    linksModuleData?: Schema$LinksModuleData;
    /**
     * Note: This field is currently not supported to trigger geo notifications.
     */
    locations?: Schema$LatLongPoint[];
    /**
     * An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.
     */
    messages?: Schema$Message[];
    /**
     * Pass constraints for the object. Includes limiting NFC and screenshot behaviors.
     */
    passConstraints?: Schema$PassConstraints;
    /**
     * Reservation details for this ticket. This is expected to be shared amongst all tickets that were purchased in the same order.
     */
    reservationInfo?: Schema$EventReservationInfo;
    /**
     * The rotating barcode type and value.
     */
    rotatingBarcode?: Schema$RotatingBarcode;
    /**
     * Seating details for this ticket.
     */
    seatInfo?: Schema$EventSeat;
    /**
     * The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported.
     */
    smartTapRedemptionValue?: string | null;
    /**
     * Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section.
     */
    state?: string | null;
    /**
     * Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.
     */
    textModulesData?: Schema$TextModuleData[];
    /**
     * Name of the ticket holder, if the ticket is assigned to a person. E.g. "John Doe" or "Jane Doe".
     */
    ticketHolderName?: string | null;
    /**
     * The number of the ticket. This can be a unique identifier across all tickets in an issuer's system, all tickets for the event (e.g. XYZ1234512345), or all tickets in the order (1, 2, 3, etc.).
     */
    ticketNumber?: string | null;
    /**
     * The type of the ticket, such as "Adult" or "Child", or "VIP" or "Standard".
     */
    ticketType?: Schema$LocalizedString;
    /**
     * The time period this object will be `active` and object can be used. An object's state will be changed to `expired` when this time period has passed.
     */
    validTimeInterval?: Schema$TimeInterval;
    /**
     * Deprecated
     */
    version?: string | null;
  }
  export interface Schema$EventTicketObjectAddMessageResponse {
    /**
     * The updated EventTicketObject resource.
     */
    resource?: Schema$EventTicketObject;
  }
  export interface Schema$EventTicketObjectListResponse {
    /**
     * Pagination of the response.
     */
    pagination?: Schema$Pagination;
    /**
     * Resources corresponding to the list request.
     */
    resources?: Schema$EventTicketObject[];
  }
  export interface Schema$EventVenue {
    /**
     * The address of the venue, such as "24 Willie Mays Plaza\nSan Francisco, CA 94107". Address lines are separated by line feed (`\n`) characters. This is required.
     */
    address?: Schema$LocalizedString;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventVenue"`.
     */
    kind?: string | null;
    /**
     * The name of the venue, such as "AT&T Park". This is required.
     */
    name?: Schema$LocalizedString;
  }
  /**
   * Indicates that the issuer would like Google Wallet to send expiry notifications 2 days prior to the card expiration.
   */
  export interface Schema$ExpiryNotification {
    /**
     * Indicates if the object needs to have expiry notification enabled.
     */
    enableNotification?: boolean | null;
  }
  /**
   * Reference definition to use with field overrides.
   */
  export interface Schema$FieldReference {
    /**
     * Only valid if the `fieldPath` references a date field. Chooses how the date field will be formatted and displayed in the UI.
     */
    dateFormat?: string | null;
    /**
     * Path to the field being referenced, prefixed with "object" or "class" and separated with dots. For example, it may be the string "object.purchaseDetails.purchasePrice".
     */
    fieldPath?: string | null;
  }
  /**
   * Custom field selector to use with field overrides.
   */
  export interface Schema$FieldSelector {
    /**
     * If more than one reference is supplied, then the first one that references a non-empty field will be displayed.
     */
    fields?: Schema$FieldReference[];
  }
  export interface Schema$FirstRowOption {
    /**
     * A reference to the field to be displayed in the first row.
     */
    fieldOption?: Schema$FieldSelector;
    transitOption?: string | null;
  }
  export interface Schema$FlightCarrier {
    /**
     * A logo for the airline alliance, displayed below the QR code that the passenger scans to board.
     */
    airlineAllianceLogo?: Schema$Image;
    /**
     * A logo for the airline described by carrierIataCode and localizedAirlineName. This logo will be rendered at the top of the detailed card view.
     */
    airlineLogo?: Schema$Image;
    /**
     * A localized name of the airline specified by carrierIataCode. If unset, `issuer_name` or `localized_issuer_name` from `FlightClass` will be used for display purposes. eg: "Swiss Air" for "LX"
     */
    airlineName?: Schema$LocalizedString;
    /**
     * Two character IATA airline code of the marketing carrier (as opposed to operating carrier). Exactly one of this or `carrierIcaoCode` needs to be provided for `carrier` and `operatingCarrier`. eg: "LX" for Swiss Air
     */
    carrierIataCode?: string | null;
    /**
     * Three character ICAO airline code of the marketing carrier (as opposed to operating carrier). Exactly one of this or `carrierIataCode` needs to be provided for `carrier` and `operatingCarrier`. eg: "EZY" for Easy Jet
     */
    carrierIcaoCode?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"walletobjects#flightCarrier"`.
     */
    kind?: string | null;
    /**
     * The wide logo of the airline. When provided, this will be used in place of the airline logo in the top left of the card view.
     */
    wideAirlineLogo?: Schema$Image;
  }
  export interface Schema$FlightClass {
    /**
     * Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead.
     */
    allowMultipleUsersPerObject?: boolean | null;
    /**
     * Policies for boarding and seating. These will inform which labels will be shown to users.
     */
    boardingAndSeatingPolicy?: Schema$BoardingAndSeatingPolicy;
    /**
     * Callback options to be used to call the issuer back for every save/delete of an object for this class by the end-user. All objects of this class are eligible for the callback.
     */
    callbackOptions?: Schema$CallbackOptions;
    /**
     * Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display.
     */
    classTemplateInfo?: Schema$ClassTemplateInfo;
    /**
     * Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale.
     */
    countryCode?: string | null;
    /**
     * Required. Destination airport.
     */
    destination?: Schema$AirportInfo;
    /**
     * Identifies whether this class supports Smart Tap. The `redemptionIssuers` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap.
     */
    enableSmartTap?: boolean | null;
    /**
     * Required. Information about the flight carrier and number.
     */
    flightHeader?: Schema$FlightHeader;
    /**
     * Status of this flight. If unset, Google will compute status based on data from other sources, such as FlightStats, etc. Note: Google-computed status will not be returned in API responses.
     */
    flightStatus?: string | null;
    /**
     * Optional banner image displayed on the front of the card. If none is present, nothing will be displayed. The image will display at 100% width.
     */
    heroImage?: Schema$Image;
    /**
     * The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`.
     */
    hexBackgroundColor?: string | null;
    /**
     * The URI of your application's home page. Populating the URI in this field results in the exact same behavior as populating an URI in linksModuleData (when an object is rendered, a link to the homepage is shown in what would usually be thought of as the linksModuleData section of the object).
     */
    homepageUri?: Schema$Uri;
    /**
     * Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    id?: string | null;
    /**
     * Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.
     */
    imageModulesData?: Schema$ImageModuleData[];
    /**
     * Deprecated. Use textModulesData instead.
     */
    infoModuleData?: Schema$InfoModuleData;
    /**
     * Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.
     */
    issuerName?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"walletobjects#flightClass"`.
     */
    kind?: string | null;
    /**
     * If this field is present, boarding passes served to a user's device will always be in this language. Represents the BCP 47 language tag. Example values are "en-US", "en-GB", "de", or "de-AT".
     */
    languageOverride?: string | null;
    /**
     * Links module data. If links module data is also defined on the object, both will be displayed.
     */
    linksModuleData?: Schema$LinksModuleData;
    /**
     * The boarding time as it would be printed on the boarding pass. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport. If this is not set, Google will set it based on data from other sources.
     */
    localBoardingDateTime?: string | null;
    /**
     * The estimated time the aircraft plans to reach the destination gate (not the runway) or the actual time it reached the gate. This field should be set if at least one of the below is true: - It differs from the scheduled time. Google will use it to calculate the delay. - The aircraft already arrived at the gate. Google will use it to inform the user that the flight has arrived at the gate. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on arrival airport. If this is not set, Google will set it based on data from other sources.
     */
    localEstimatedOrActualArrivalDateTime?: string | null;
    /**
     * The estimated time the aircraft plans to pull from the gate or the actual time the aircraft already pulled from the gate. Note: This is not the runway time. This field should be set if at least one of the below is true: - It differs from the scheduled time. Google will use it to calculate the delay. - The aircraft already pulled from the gate. Google will use it to inform the user when the flight actually departed. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport. If this is not set, Google will set it based on data from other sources.
     */
    localEstimatedOrActualDepartureDateTime?: string | null;
    /**
     * The gate closing time as it would be printed on the boarding pass. Do not set this field if you do not want to print it in the boarding pass. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport.
     */
    localGateClosingDateTime?: string | null;
    /**
     * Translated strings for the issuer_name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.
     */
    localizedIssuerName?: Schema$LocalizedString;
    /**
     * The scheduled time the aircraft plans to reach the destination gate (not the runway). Note: This field should not change too close to the flight time. For updates to departure times (delays, etc), please set `localEstimatedOrActualArrivalDateTime`. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on arrival airport. If this is not set, Google will set it based on data from other sources.
     */
    localScheduledArrivalDateTime?: string | null;
    /**
     * Required. The scheduled date and time when the aircraft is expected to depart the gate (not the runway) Note: This field should not change too close to the departure time. For updates to departure times (delays, etc), please set `localEstimatedOrActualDepartureDateTime`. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport.
     */
    localScheduledDepartureDateTime?: string | null;
    /**
     * Note: This field is currently not supported to trigger geo notifications.
     */
    locations?: Schema$LatLongPoint[];
    /**
     * An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.
     */
    messages?: Schema$Message[];
    /**
     * Identifies whether multiple users and devices will save the same object referencing this class.
     */
    multipleDevicesAndHoldersAllowedStatus?: string | null;
    /**
     * Required. Origin airport.
     */
    origin?: Schema$AirportInfo;
    /**
     * Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap.
     */
    redemptionIssuers?: string[] | null;
    /**
     * The review comments set by the platform when a class is marked `approved` or `rejected`.
     */
    review?: Schema$Review;
    /**
     * Required. The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`.
     */
    reviewStatus?: string | null;
    /**
     * Optional information about the security animation. If this is set a security animation will be rendered on pass details.
     */
    securityAnimation?: Schema$SecurityAnimation;
    /**
     * Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.
     */
    textModulesData?: Schema$TextModuleData[];
    /**
     * Deprecated
     */
    version?: string | null;
    /**
     * View Unlock Requirement options for the boarding pass.
     */
    viewUnlockRequirement?: string | null;
    /**
     * Deprecated.
     */
    wordMark?: Schema$Image;
  }
  export interface Schema$FlightClassAddMessageResponse {
    /**
     * The updated FlightClass resource.
     */
    resource?: Schema$FlightClass;
  }
  export interface Schema$FlightClassListResponse {
    /**
     * Pagination of the response.
     */
    pagination?: Schema$Pagination;
    /**
     * Resources corresponding to the list request.
     */
    resources?: Schema$FlightClass[];
  }
  export interface Schema$FlightHeader {
    /**
     * Information about airline carrier. This is a required property of `flightHeader`.
     */
    carrier?: Schema$FlightCarrier;
    /**
     * The flight number without IATA carrier code. This field should contain only digits. This is a required property of `flightHeader`. eg: "123"
     */
    flightNumber?: string | null;
    /**
     * Override value to use for flight number. The default value used for display purposes is carrier + flight_number. If a different value needs to be shown to passengers, use this field to override the default behavior. eg: "XX1234 / YY576"
     */
    flightNumberDisplayOverride?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"walletobjects#flightHeader"`.
     */
    kind?: string | null;
    /**
     * Information about operating airline carrier.
     */
    operatingCarrier?: Schema$FlightCarrier;
    /**
     * The flight number used by the operating carrier without IATA carrier code. This field should contain only digits. eg: "234"
     */
    operatingFlightNumber?: string | null;
  }
  export interface Schema$FlightObject {
    /**
     * Optional information about the partner app link.
     */
    appLinkData?: Schema$AppLinkData;
    /**
     * The barcode type and value.
     */
    barcode?: Schema$Barcode;
    /**
     * Passenger specific information about boarding and seating.
     */
    boardingAndSeatingInfo?: Schema$BoardingAndSeatingInfo;
    /**
     * Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you.
     */
    classId?: string | null;
    /**
     * A copy of the inherited fields of the parent class. These fields are retrieved during a GET.
     */
    classReference?: Schema$FlightClass;
    /**
     * Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for Flights.
     */
    disableExpirationNotification?: boolean | null;
    /**
     * Information that controls how passes are grouped together.
     */
    groupingInfo?: Schema$GroupingInfo;
    /**
     * Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information.
     */
    hasLinkedDevice?: boolean | null;
    /**
     * Indicates if the object has users. This field is set by the platform.
     */
    hasUsers?: boolean | null;
    /**
     * Optional banner image displayed on the front of the card. If none is present, hero image of the class, if present, will be displayed. If hero image of the class is also not present, nothing will be displayed.
     */
    heroImage?: Schema$Image;
    /**
     * The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`.
     */
    hexBackgroundColor?: string | null;
    /**
     * Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    id?: string | null;
    /**
     * Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.
     */
    imageModulesData?: Schema$ImageModuleData[];
    /**
     * Deprecated. Use textModulesData instead.
     */
    infoModuleData?: Schema$InfoModuleData;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"walletobjects#flightObject"`.
     */
    kind?: string | null;
    /**
     * Links module data. If links module data is also defined on the class, both will be displayed.
     */
    linksModuleData?: Schema$LinksModuleData;
    /**
     * Note: This field is currently not supported to trigger geo notifications.
     */
    locations?: Schema$LatLongPoint[];
    /**
     * An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.
     */
    messages?: Schema$Message[];
    /**
     * Pass constraints for the object. Includes limiting NFC and screenshot behaviors.
     */
    passConstraints?: Schema$PassConstraints;
    /**
     * Required. Passenger name as it would appear on the boarding pass. eg: "Dave M Gahan" or "Gahan/Dave" or "GAHAN/DAVEM"
     */
    passengerName?: string | null;
    /**
     * Required. Information about flight reservation.
     */
    reservationInfo?: Schema$ReservationInfo;
    /**
     * The rotating barcode type and value.
     */
    rotatingBarcode?: Schema$RotatingBarcode;
    /**
     * An image for the security program that applies to the passenger.
     */
    securityProgramLogo?: Schema$Image;
    /**
     * The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported.
     */
    smartTapRedemptionValue?: string | null;
    /**
     * Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section.
     */
    state?: string | null;
    /**
     * Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.
     */
    textModulesData?: Schema$TextModuleData[];
    /**
     * The time period this object will be `active` and object can be used. An object's state will be changed to `expired` when this time period has passed.
     */
    validTimeInterval?: Schema$TimeInterval;
    /**
     * Deprecated
     */
    version?: string | null;
  }
  export interface Schema$FlightObjectAddMessageResponse {
    /**
     * The updated FlightObject resource.
     */
    resource?: Schema$FlightObject;
  }
  export interface Schema$FlightObjectListResponse {
    /**
     * Pagination of the response.
     */
    pagination?: Schema$Pagination;
    /**
     * Resources corresponding to the list request.
     */
    resources?: Schema$FlightObject[];
  }
  export interface Schema$FrequentFlyerInfo {
    /**
     * Frequent flyer number. Required for each nested object of kind `walletobjects#frequentFlyerInfo`.
     */
    frequentFlyerNumber?: string | null;
    /**
     * Frequent flyer program name. eg: "Lufthansa Miles & More"
     */
    frequentFlyerProgramName?: Schema$LocalizedString;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"walletobjects#frequentFlyerInfo"`.
     */
    kind?: string | null;
  }
  /**
   * Generic Class
   */
  export interface Schema$GenericClass {
    /**
     * Callback options to be used to call the issuer back for every save/delete of an object for this class by the end-user. All objects of this class are eligible for the callback.
     */
    callbackOptions?: Schema$CallbackOptions;
    /**
     * Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display.
     */
    classTemplateInfo?: Schema$ClassTemplateInfo;
    /**
     * Available only to Smart Tap enabled partners. Contact support for additional guidance.
     */
    enableSmartTap?: boolean | null;
    /**
     * Required. The unique identifier for the class. This ID must be unique across all from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.
     */
    id?: string | null;
    /**
     * Image module data. If `imageModulesData` is also defined on the object, both will be displayed. Only one of the image from class and one from object level will be rendered when both set.
     */
    imageModulesData?: Schema$ImageModuleData[];
    /**
     * Links module data. If `linksModuleData` is also defined on the object, both will be displayed. The maximum number of these fields displayed is 10 from class and 10 from object.
     */
    linksModuleData?: Schema$LinksModuleData;
    /**
     * Identifies whether multiple users and devices will save the same object referencing this class.
     */
    multipleDevicesAndHoldersAllowedStatus?: string | null;
    /**
     * Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap.
     */
    redemptionIssuers?: string[] | null;
    /**
     * Optional information about the security animation. If this is set a security animation will be rendered on pass details.
     */
    securityAnimation?: Schema$SecurityAnimation;
    /**
     * Text module data. If `textModulesData` is also defined on the object, both will be displayed. The maximum number of these fields displayed is 10 from class and 10 from object.
     */
    textModulesData?: Schema$TextModuleData[];
    /**
     * View Unlock Requirement options for the generic pass.
     */
    viewUnlockRequirement?: string | null;
  }
  /**
   * List response which contains the list of all generic classes for a given issuer ID.
   */
  export interface Schema$GenericClassListResponse {
    /**
     * Pagination of the response.
     */
    pagination?: Schema$Pagination;
    /**
     * Resources corresponding to the list request.
     */
    resources?: Schema$GenericClass[];
  }
  /**
   * Generic Object Next ID: 121
   */
  export interface Schema$GenericObject {
    /**
     * Information about the partner app link. The maximum number of these fields displayed is 10.
     */
    appLinkData?: Schema$AppLinkData;
    /**
     * The barcode type and value. If pass does not have a barcode, we can allow the issuer to set Barcode.alternate_text and display just that.
     */
    barcode?: Schema$Barcode;
    /**
     * Required. The header of the pass. This is usually the Business name such as "XXX Gym", "AAA Insurance". This field is required and appears in the header row at the very top of the pass.
     */
    cardTitle?: Schema$LocalizedString;
    /**
     * Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you.
     */
    classId?: string | null;
    /**
     * Specify which `GenericType` the card belongs to.
     */
    genericType?: string | null;
    /**
     * Information that controls how passes are grouped together.
     */
    groupingInfo?: Schema$GroupingInfo;
    /**
     * Indicates if the object has users. This field is set by the platform.
     */
    hasUsers?: boolean | null;
    /**
     * Required. The title of the pass, such as "50% off coupon" or "Library card" or "Voucher". This field is required and appears in the title row of the pass detail view.
     */
    header?: Schema$LocalizedString;
    /**
     * Banner image displayed on the front of the card if present. The image will be displayed at 100% width.
     */
    heroImage?: Schema$Image;
    /**
     * The background color for the card. If not set, the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used and if logo is not set, a color would be chosen by Google.
     */
    hexBackgroundColor?: string | null;
    /**
     * Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.
     */
    id?: string | null;
    /**
     * Image module data. Only one of the image from class and one from object level will be rendered when both set.
     */
    imageModulesData?: Schema$ImageModuleData[];
    /**
     * Links module data. If `linksModuleData` is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from class and 10 from object.
     */
    linksModuleData?: Schema$LinksModuleData;
    /**
     * The logo image of the pass. This image is displayed in the card detail view in upper left, and also on the list/thumbnail view. If the logo is not present, the first letter of `cardTitle` would be shown as logo.
     */
    logo?: Schema$Image;
    /**
     * The notification settings that are enabled for this object.
     */
    notifications?: Schema$Notifications;
    /**
     * Pass constraints for the object. Includes limiting NFC and screenshot behaviors.
     */
    passConstraints?: Schema$PassConstraints;
    /**
     * The rotating barcode settings/details.
     */
    rotatingBarcode?: Schema$RotatingBarcode;
    /**
     * The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported.
     */
    smartTapRedemptionValue?: string | null;
    /**
     * The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section. If this is not provided, the object would be considered `ACTIVE`.
     */
    state?: string | null;
    /**
     * The title label of the pass, such as location where this pass can be used. Appears right above the title in the title row in the pass detail view.
     */
    subheader?: Schema$LocalizedString;
    /**
     * Text module data. If `textModulesData` is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from class and 10 from object.
     */
    textModulesData?: Schema$TextModuleData[];
    /**
     * The time period this object will be considered valid or usable. When the time period is passed, the object will be considered expired, which will affect the rendering on user's devices.
     */
    validTimeInterval?: Schema$TimeInterval;
    /**
     * The wide logo of the pass. When provided, this will be used in place of the logo in the top left of the card view.
     */
    wideLogo?: Schema$Image;
  }
  /**
   * List response which contains the list of all generic objects for a given issuer ID.
   */
  export interface Schema$GenericObjectListResponse {
    /**
     * Pagination of the response.
     */
    pagination?: Schema$Pagination;
    /**
     * Resources corresponding to the list request.
     */
    resources?: Schema$GenericObject[];
  }
  export interface Schema$GiftCardClass {
    /**
     * Determines whether the merchant supports gift card redemption using barcode. If true, app displays a barcode for the gift card on the Gift card details screen. If false, a barcode is not displayed.
     */
    allowBarcodeRedemption?: boolean | null;
    /**
     * Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead.
     */
    allowMultipleUsersPerObject?: boolean | null;
    /**
     * Callback options to be used to call the issuer back for every save/delete of an object for this class by the end-user. All objects of this class are eligible for the callback.
     */
    callbackOptions?: Schema$CallbackOptions;
    /**
     * The label to display for the card number, such as "Card Number".
     */
    cardNumberLabel?: string | null;
    /**
     * Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display.
     */
    classTemplateInfo?: Schema$ClassTemplateInfo;
    /**
     * Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale.
     */
    countryCode?: string | null;
    /**
     * Identifies whether this class supports Smart Tap. The `redemptionIssuers` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap.
     */
    enableSmartTap?: boolean | null;
    /**
     * The label to display for event number, such as "Target Event #".
     */
    eventNumberLabel?: string | null;
    /**
     * Optional banner image displayed on the front of the card. If none is present, nothing will be displayed. The image will display at 100% width.
     */
    heroImage?: Schema$Image;
    /**
     * The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`.
     */
    hexBackgroundColor?: string | null;
    /**
     * The URI of your application's home page. Populating the URI in this field results in the exact same behavior as populating an URI in linksModuleData (when an object is rendered, a link to the homepage is shown in what would usually be thought of as the linksModuleData section of the object).
     */
    homepageUri?: Schema$Uri;
    /**
     * Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    id?: string | null;
    /**
     * Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.
     */
    imageModulesData?: Schema$ImageModuleData[];
    /**
     * Deprecated. Use textModulesData instead.
     */
    infoModuleData?: Schema$InfoModuleData;
    /**
     * Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.
     */
    issuerName?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"walletobjects#giftCardClass"`.
     */
    kind?: string | null;
    /**
     * Links module data. If links module data is also defined on the object, both will be displayed.
     */
    linksModuleData?: Schema$LinksModuleData;
    /**
     * Translated strings for the card_number_label.
     */
    localizedCardNumberLabel?: Schema$LocalizedString;
    /**
     * Translated strings for the event_number_label.
     */
    localizedEventNumberLabel?: Schema$LocalizedString;
    /**
     * Translated strings for the issuer_name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.
     */
    localizedIssuerName?: Schema$LocalizedString;
    /**
     * Translated strings for the merchant_name. The app may display an ellipsis after the first 20 characters to ensure full string is displayed on smaller screens.
     */
    localizedMerchantName?: Schema$LocalizedString;
    /**
     * Translated strings for the pin_label.
     */
    localizedPinLabel?: Schema$LocalizedString;
    /**
     * Note: This field is currently not supported to trigger geo notifications.
     */
    locations?: Schema$LatLongPoint[];
    /**
     * Merchant name, such as "Adam's Apparel". The app may display an ellipsis after the first 20 characters to ensure full string is displayed on smaller screens.
     */
    merchantName?: string | null;
    /**
     * An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.
     */
    messages?: Schema$Message[];
    /**
     * Identifies whether multiple users and devices will save the same object referencing this class.
     */
    multipleDevicesAndHoldersAllowedStatus?: string | null;
    /**
     * The label to display for the PIN, such as "4-digit PIN".
     */
    pinLabel?: string | null;
    /**
     * The logo of the gift card program or company. This logo is displayed in both the details and list views of the app.
     */
    programLogo?: Schema$Image;
    /**
     * Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap.
     */
    redemptionIssuers?: string[] | null;
    /**
     * The review comments set by the platform when a class is marked `approved` or `rejected`.
     */
    review?: Schema$Review;
    /**
     * Required. The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`.
     */
    reviewStatus?: string | null;
    /**
     * Optional information about the security animation. If this is set a security animation will be rendered on pass details.
     */
    securityAnimation?: Schema$SecurityAnimation;
    /**
     * Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.
     */
    textModulesData?: Schema$TextModuleData[];
    /**
     * Deprecated
     */
    version?: string | null;
    /**
     * View Unlock Requirement options for the gift card.
     */
    viewUnlockRequirement?: string | null;
    /**
     * The wide logo of the gift card program or company. When provided, this will be used in place of the program logo in the top left of the card view.
     */
    wideProgramLogo?: Schema$Image;
    /**
     * Deprecated.
     */
    wordMark?: Schema$Image;
  }
  export interface Schema$GiftCardClassAddMessageResponse {
    /**
     * The updated GiftCardClass resource.
     */
    resource?: Schema$GiftCardClass;
  }
  export interface Schema$GiftCardClassListResponse {
    /**
     * Pagination of the response.
     */
    pagination?: Schema$Pagination;
    /**
     * Resources corresponding to the list request.
     */
    resources?: Schema$GiftCardClass[];
  }
  export interface Schema$GiftCardObject {
    /**
     * Optional information about the partner app link.
     */
    appLinkData?: Schema$AppLinkData;
    /**
     * The card's monetary balance.
     */
    balance?: Schema$Money;
    /**
     * The date and time when the balance was last updated. Offset is required. If balance is updated and this property is not provided, system will default to the current time.
     */
    balanceUpdateTime?: Schema$DateTime;
    /**
     * The barcode type and value.
     */
    barcode?: Schema$Barcode;
    /**
     * Required. The card's number.
     */
    cardNumber?: string | null;
    /**
     * Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you.
     */
    classId?: string | null;
    /**
     * A copy of the inherited fields of the parent class. These fields are retrieved during a GET.
     */
    classReference?: Schema$GiftCardClass;
    /**
     * Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers.
     */
    disableExpirationNotification?: boolean | null;
    /**
     * The card's event number, an optional field used by some gift cards.
     */
    eventNumber?: string | null;
    /**
     * Information that controls how passes are grouped together.
     */
    groupingInfo?: Schema$GroupingInfo;
    /**
     * Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information.
     */
    hasLinkedDevice?: boolean | null;
    /**
     * Indicates if the object has users. This field is set by the platform.
     */
    hasUsers?: boolean | null;
    /**
     * Optional banner image displayed on the front of the card. If none is present, hero image of the class, if present, will be displayed. If hero image of the class is also not present, nothing will be displayed.
     */
    heroImage?: Schema$Image;
    /**
     * Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    id?: string | null;
    /**
     * Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.
     */
    imageModulesData?: Schema$ImageModuleData[];
    /**
     * Deprecated. Use textModulesData instead.
     */
    infoModuleData?: Schema$InfoModuleData;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"walletobjects#giftCardObject"`.
     */
    kind?: string | null;
    /**
     * Links module data. If links module data is also defined on the class, both will be displayed.
     */
    linksModuleData?: Schema$LinksModuleData;
    /**
     * Note: This field is currently not supported to trigger geo notifications.
     */
    locations?: Schema$LatLongPoint[];
    /**
     * An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.
     */
    messages?: Schema$Message[];
    /**
     * Pass constraints for the object. Includes limiting NFC and screenshot behaviors.
     */
    passConstraints?: Schema$PassConstraints;
    /**
     * The card's PIN.
     */
    pin?: string | null;
    /**
     * The rotating barcode type and value.
     */
    rotatingBarcode?: Schema$RotatingBarcode;
    /**
     * The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported.
     */
    smartTapRedemptionValue?: string | null;
    /**
     * Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section.
     */
    state?: string | null;
    /**
     * Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.
     */
    textModulesData?: Schema$TextModuleData[];
    /**
     * The time period this object will be `active` and object can be used. An object's state will be changed to `expired` when this time period has passed.
     */
    validTimeInterval?: Schema$TimeInterval;
    /**
     * Deprecated
     */
    version?: string | null;
  }
  export interface Schema$GiftCardObjectAddMessageResponse {
    /**
     * The updated GiftCardObject resource.
     */
    resource?: Schema$GiftCardObject;
  }
  export interface Schema$GiftCardObjectListResponse {
    /**
     * Pagination of the response.
     */
    pagination?: Schema$Pagination;
    /**
     * Resources corresponding to the list request.
     */
    resources?: Schema$GiftCardObject[];
  }
  export interface Schema$GroupingInfo {
    /**
     * Optional grouping ID for grouping the passes with the same ID visually together. Grouping with different types of passes is allowed.
     */
    groupingId?: string | null;
    /**
     * Optional index for sorting the passes when they are grouped with other passes. Passes with lower sort index are shown before passes with higher sort index. If unspecified, the value is assumed to be INT_MAX. For two passes with the same sort index, the sorting behavior is undefined.
     */
    sortIndex?: number | null;
  }
  /**
   * Wrapping type for Google hosted images. Next ID: 7
   */
  export interface Schema$Image {
    /**
     * Description of the image used for accessibility.
     */
    contentDescription?: Schema$LocalizedString;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"walletobjects#image"`.
     */
    kind?: string | null;
    /**
     * The URI for the image.
     */
    sourceUri?: Schema$ImageUri;
  }
  export interface Schema$ImageModuleData {
    /**
     * The ID associated with an image module. This field is here to enable ease of management of image modules.
     */
    id?: string | null;
    /**
     * A 100% width image.
     */
    mainImage?: Schema$Image;
  }
  export interface Schema$ImageUri {
    /**
     * Additional information about the image, which is unused and retained only for backward compatibility.
     */
    description?: string | null;
    /**
     * Translated strings for the description, which are unused and retained only for backward compatibility.
     */
    localizedDescription?: Schema$LocalizedString;
    /**
     * The location of the image. URIs must have a scheme.
     */
    uri?: string | null;
  }
  export interface Schema$InfoModuleData {
    /**
     * A list of collections of labels and values. These will be displayed one after the other in a singular column.
     */
    labelValueRows?: Schema$LabelValueRow[];
    showLastUpdateTime?: boolean | null;
  }
  export interface Schema$Issuer {
    /**
     * Allows the issuer to provide their callback settings.
     */
    callbackOptions?: Schema$CallbackOptions;
    /**
     * Issuer contact information.
     */
    contactInfo?: Schema$IssuerContactInfo;
    /**
     * URL for the issuer's home page.
     */
    homepageUrl?: string | null;
    /**
     * The unique identifier for an issuer account. This is automatically generated when the issuer is inserted.
     */
    issuerId?: string | null;
    /**
     * The account name of the issuer.
     */
    name?: string | null;
    /**
     * Available only to Smart Tap enabled partners. Contact support for additional guidance.
     */
    smartTapMerchantData?: Schema$SmartTapMerchantData;
  }
  export interface Schema$IssuerContactInfo {
    /**
     * Email addresses which will receive alerts.
     */
    alertsEmails?: string[] | null;
    /**
     * The primary contact email address.
     */
    email?: string | null;
    /**
     * The primary contact name.
     */
    name?: string | null;
    /**
     * The primary contact phone number.
     */
    phone?: string | null;
  }
  export interface Schema$IssuerListResponse {
    /**
     * Resources corresponding to the list request.
     */
    resources?: Schema$Issuer[];
  }
  export interface Schema$IssuerToUserInfo {
    action?: string | null;
    signUpInfo?: Schema$SignUpInfo;
    /**
     * Currently not used, consider deprecating.
     */
    url?: string | null;
    /**
     * JSON web token for action S2AP.
     */
    value?: string | null;
  }
  export interface Schema$JwtInsertResponse {
    /**
     * Data that corresponds to the ids of the provided classes and objects in the JWT. resources will only include the non-empty arrays (i.e. if the JWT only includes eventTicketObjects, then that is the only field that will be present in resources).
     */
    resources?: Schema$Resources;
    /**
     * A URI that, when opened, will allow the end user to save the object(s) identified in the JWT to their Google account.
     */
    saveUri?: string | null;
  }
  export interface Schema$JwtResource {
    /**
     * A string representing a JWT of the format described at https://developers.google.com/wallet/reference/rest/v1/Jwt
     */
    jwt?: string | null;
  }
  /**
   * A pair of text strings to be displayed in the details view. Note we no longer display LabelValue/LabelValueRow as a table, instead a list of items.
   */
  export interface Schema$LabelValue {
    /**
     * The label for a specific row and column. Recommended maximum is 15 characters for a two-column layout and 30 characters for a one-column layout.
     */
    label?: string | null;
    /**
     * Translated strings for the label. Recommended maximum is 15 characters for a two-column layout and 30 characters for a one-column layout.
     */
    localizedLabel?: Schema$LocalizedString;
    /**
     * Translated strings for the value. Recommended maximum is 15 characters for a two-column layout and 30 characters for a one-column layout.
     */
    localizedValue?: Schema$LocalizedString;
    /**
     * The value for a specific row and column. Recommended maximum is 15 characters for a two-column layout and 30 characters for a one-column layout.
     */
    value?: string | null;
  }
  export interface Schema$LabelValueRow {
    /**
     * A list of labels and values. These will be displayed in a singular column, one after the other, not in multiple columns, despite the field name.
     */
    columns?: Schema$LabelValue[];
  }
  export interface Schema$LatLongPoint {
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"walletobjects#latLongPoint"`.
     */
    kind?: string | null;
    /**
     * The latitude specified as any value in the range of -90.0 through +90.0, both inclusive. Values outside these bounds will be rejected.
     */
    latitude?: number | null;
    /**
     * The longitude specified in the range -180.0 through +180.0, both inclusive. Values outside these bounds will be rejected.
     */
    longitude?: number | null;
  }
  export interface Schema$LinksModuleData {
    /**
     * The list of URIs.
     */
    uris?: Schema$Uri[];
  }
  export interface Schema$ListTemplateOverride {
    /**
     * Specifies from a predefined set of options or from a reference to the field what will be displayed in the first row. To set this override, set the FirstRowOption.fieldOption to the FieldSelector of your choice.
     */
    firstRowOption?: Schema$FirstRowOption;
    /**
     * A reference to the field to be displayed in the second row. This option is only displayed if there are not multiple user objects in a group. If there is a group, the second row will always display a field shared by all objects. To set this override, please set secondRowOption to the FieldSelector of you choice.
     */
    secondRowOption?: Schema$FieldSelector;
    /**
     * An unused/deprecated field. Setting it will have no effect on what the user sees.
     */
    thirdRowOption?: Schema$FieldSelector;
  }
  export interface Schema$LocalizedString {
    /**
     * Contains the string to be displayed if no appropriate translation is available.
     */
    defaultValue?: Schema$TranslatedString;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"walletobjects#localizedString"`.
     */
    kind?: string | null;
    /**
     * Contains the translations for the string.
     */
    translatedValues?: Schema$TranslatedString[];
  }
  export interface Schema$LoyaltyClass {
    /**
     * The account ID label, such as "Member ID." Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens.
     */
    accountIdLabel?: string | null;
    /**
     * The account name label, such as "Member Name." Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens.
     */
    accountNameLabel?: string | null;
    /**
     * Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead.
     */
    allowMultipleUsersPerObject?: boolean | null;
    /**
     * Callback options to be used to call the issuer back for every save/delete of an object for this class by the end-user. All objects of this class are eligible for the callback.
     */
    callbackOptions?: Schema$CallbackOptions;
    /**
     * Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display.
     */
    classTemplateInfo?: Schema$ClassTemplateInfo;
    /**
     * Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale.
     */
    countryCode?: string | null;
    /**
     * Information about how the class may be discovered and instantiated from within the Google Pay app.
     */
    discoverableProgram?: Schema$DiscoverableProgram;
    /**
     * Identifies whether this class supports Smart Tap. The `redemptionIssuers` and one of object level `smartTapRedemptionLevel`, barcode.value`, or `accountId` fields must also be set up correctly in order for a pass to support Smart Tap.
     */
    enableSmartTap?: boolean | null;
    /**
     * Optional banner image displayed on the front of the card. If none is present, nothing will be displayed. The image will display at 100% width.
     */
    heroImage?: Schema$Image;
    /**
     * The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`.
     */
    hexBackgroundColor?: string | null;
    /**
     * The URI of your application's home page. Populating the URI in this field results in the exact same behavior as populating an URI in linksModuleData (when an object is rendered, a link to the homepage is shown in what would usually be thought of as the linksModuleData section of the object).
     */
    homepageUri?: Schema$Uri;
    /**
     * Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    id?: string | null;
    /**
     * Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.
     */
    imageModulesData?: Schema$ImageModuleData[];
    /**
     * Deprecated. Use textModulesData instead.
     */
    infoModuleData?: Schema$InfoModuleData;
    /**
     * Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.
     */
    issuerName?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"walletobjects#loyaltyClass"`.
     */
    kind?: string | null;
    /**
     * Links module data. If links module data is also defined on the object, both will be displayed.
     */
    linksModuleData?: Schema$LinksModuleData;
    /**
     * Translated strings for the account_id_label. Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens.
     */
    localizedAccountIdLabel?: Schema$LocalizedString;
    /**
     * Translated strings for the account_name_label. Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens.
     */
    localizedAccountNameLabel?: Schema$LocalizedString;
    /**
     * Translated strings for the issuer_name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.
     */
    localizedIssuerName?: Schema$LocalizedString;
    /**
     * Translated strings for the program_name. The app may display an ellipsis after the first 20 characters to ensure full string is displayed on smaller screens.
     */
    localizedProgramName?: Schema$LocalizedString;
    /**
     * Translated strings for the rewards_tier. Recommended maximum length is 7 characters to ensure full string is displayed on smaller screens.
     */
    localizedRewardsTier?: Schema$LocalizedString;
    /**
     * Translated strings for the rewards_tier_label. Recommended maximum length is 9 characters to ensure full string is displayed on smaller screens.
     */
    localizedRewardsTierLabel?: Schema$LocalizedString;
    /**
     * Translated strings for the secondary_rewards_tier.
     */
    localizedSecondaryRewardsTier?: Schema$LocalizedString;
    /**
     * Translated strings for the secondary_rewards_tier_label.
     */
    localizedSecondaryRewardsTierLabel?: Schema$LocalizedString;
    /**
     * Note: This field is currently not supported to trigger geo notifications.
     */
    locations?: Schema$LatLongPoint[];
    /**
     * An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.
     */
    messages?: Schema$Message[];
    /**
     * Identifies whether multiple users and devices will save the same object referencing this class.
     */
    multipleDevicesAndHoldersAllowedStatus?: string | null;
    /**
     * Required. The logo of the loyalty program or company. This logo is displayed in both the details and list views of the app.
     */
    programLogo?: Schema$Image;
    /**
     * Required. The program name, such as "Adam's Apparel". The app may display an ellipsis after the first 20 characters to ensure full string is displayed on smaller screens.
     */
    programName?: string | null;
    /**
     * Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and one of object level `smartTapRedemptionValue`, barcode.value`, or `accountId` fields must also be set up correctly in order for a pass to support Smart Tap.
     */
    redemptionIssuers?: string[] | null;
    /**
     * The review comments set by the platform when a class is marked `approved` or `rejected`.
     */
    review?: Schema$Review;
    /**
     * Required. The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`.
     */
    reviewStatus?: string | null;
    /**
     * The rewards tier, such as "Gold" or "Platinum." Recommended maximum length is 7 characters to ensure full string is displayed on smaller screens.
     */
    rewardsTier?: string | null;
    /**
     * The rewards tier label, such as "Rewards Tier." Recommended maximum length is 9 characters to ensure full string is displayed on smaller screens.
     */
    rewardsTierLabel?: string | null;
    /**
     * The secondary rewards tier, such as "Gold" or "Platinum."
     */
    secondaryRewardsTier?: string | null;
    /**
     * The secondary rewards tier label, such as "Rewards Tier."
     */
    secondaryRewardsTierLabel?: string | null;
    /**
     * Optional information about the security animation. If this is set a security animation will be rendered on pass details.
     */
    securityAnimation?: Schema$SecurityAnimation;
    /**
     * Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.
     */
    textModulesData?: Schema$TextModuleData[];
    /**
     * Deprecated
     */
    version?: string | null;
    /**
     * View Unlock Requirement options for the loyalty card.
     */
    viewUnlockRequirement?: string | null;
    /**
     * The wide logo of the loyalty program or company. When provided, this will be used in place of the program logo in the top left of the card view.
     */
    wideProgramLogo?: Schema$Image;
    /**
     * Deprecated.
     */
    wordMark?: Schema$Image;
  }
  export interface Schema$LoyaltyClassAddMessageResponse {
    /**
     * The updated LoyaltyClass resource.
     */
    resource?: Schema$LoyaltyClass;
  }
  export interface Schema$LoyaltyClassListResponse {
    /**
     * Pagination of the response.
     */
    pagination?: Schema$Pagination;
    /**
     * Resources corresponding to the list request.
     */
    resources?: Schema$LoyaltyClass[];
  }
  export interface Schema$LoyaltyObject {
    /**
     * The loyalty account identifier. Recommended maximum length is 20 characters.
     */
    accountId?: string | null;
    /**
     * The loyalty account holder name, such as "John Smith." Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.
     */
    accountName?: string | null;
    /**
     * Optional information about the partner app link.
     */
    appLinkData?: Schema$AppLinkData;
    /**
     * The barcode type and value.
     */
    barcode?: Schema$Barcode;
    /**
     * Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you.
     */
    classId?: string | null;
    /**
     * A copy of the inherited fields of the parent class. These fields are retrieved during a GET.
     */
    classReference?: Schema$LoyaltyClass;
    /**
     * Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers.
     */
    disableExpirationNotification?: boolean | null;
    /**
     * Information that controls how passes are grouped together.
     */
    groupingInfo?: Schema$GroupingInfo;
    /**
     * Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information.
     */
    hasLinkedDevice?: boolean | null;
    /**
     * Indicates if the object has users. This field is set by the platform.
     */
    hasUsers?: boolean | null;
    /**
     * Optional banner image displayed on the front of the card. If none is present, hero image of the class, if present, will be displayed. If hero image of the class is also not present, nothing will be displayed.
     */
    heroImage?: Schema$Image;
    /**
     * Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    id?: string | null;
    /**
     * Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.
     */
    imageModulesData?: Schema$ImageModuleData[];
    /**
     * Deprecated. Use textModulesData instead.
     */
    infoModuleData?: Schema$InfoModuleData;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"walletobjects#loyaltyObject"`.
     */
    kind?: string | null;
    /**
     * A list of offer objects linked to this loyalty card. The offer objects must already exist. Offer object IDs should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you.
     */
    linkedOfferIds?: string[] | null;
    /**
     * Links module data. If links module data is also defined on the class, both will be displayed.
     */
    linksModuleData?: Schema$LinksModuleData;
    /**
     * Note: This field is currently not supported to trigger geo notifications.
     */
    locations?: Schema$LatLongPoint[];
    /**
     * The loyalty reward points label, balance, and type.
     */
    loyaltyPoints?: Schema$LoyaltyPoints;
    /**
     * An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.
     */
    messages?: Schema$Message[];
    /**
     * Pass constraints for the object. Includes limiting NFC and screenshot behaviors.
     */
    passConstraints?: Schema$PassConstraints;
    /**
     * The rotating barcode type and value.
     */
    rotatingBarcode?: Schema$RotatingBarcode;
    /**
     * The secondary loyalty reward points label, balance, and type. Shown in addition to the primary loyalty points.
     */
    secondaryLoyaltyPoints?: Schema$LoyaltyPoints;
    /**
     * The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. If this value is not set but the class level fields `enableSmartTap` and `redemptionIssuers` are set up correctly, the `barcode.value` or the `accountId` fields are used as fallback if present.
     */
    smartTapRedemptionValue?: string | null;
    /**
     * Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section.
     */
    state?: string | null;
    /**
     * Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.
     */
    textModulesData?: Schema$TextModuleData[];
    /**
     * The time period this object will be `active` and object can be used. An object's state will be changed to `expired` when this time period has passed.
     */
    validTimeInterval?: Schema$TimeInterval;
    /**
     * Deprecated
     */
    version?: string | null;
  }
  export interface Schema$LoyaltyObjectAddMessageResponse {
    /**
     * The updated LoyaltyObject resource.
     */
    resource?: Schema$LoyaltyObject;
  }
  export interface Schema$LoyaltyObjectListResponse {
    /**
     * Pagination of the response.
     */
    pagination?: Schema$Pagination;
    /**
     * Resources corresponding to the list request.
     */
    resources?: Schema$LoyaltyObject[];
  }
  export interface Schema$LoyaltyPoints {
    /**
     * The account holder's loyalty point balance, such as "500" or "$10.00". Recommended maximum length is 7 characters. This is a required field of `loyaltyPoints` and `secondaryLoyaltyPoints`.
     */
    balance?: Schema$LoyaltyPointsBalance;
    /**
     * The loyalty points label, such as "Points". Recommended maximum length is 9 characters.
     */
    label?: string | null;
    /**
     * Translated strings for the label. Recommended maximum length is 9 characters.
     */
    localizedLabel?: Schema$LocalizedString;
  }
  export interface Schema$LoyaltyPointsBalance {
    /**
     * The double form of a balance. Only one of these subtypes (string, int, double, money) should be populated.
     */
    double?: number | null;
    /**
     * The integer form of a balance. Only one of these subtypes (string, int, double, money) should be populated.
     */
    int?: number | null;
    /**
     * The money form of a balance. Only one of these subtypes (string, int, double, money) should be populated.
     */
    money?: Schema$Money;
    /**
     * The string form of a balance. Only one of these subtypes (string, int, double, money) should be populated.
     */
    string?: string | null;
  }
  /**
   * A reference to data stored on the filesystem, on GFS or in blobstore.
   */
  export interface Schema$Media {
    /**
     * Deprecated, use one of explicit hash type fields instead. Algorithm used for calculating the hash. As of 2011/01/21, "MD5" is the only possible value for this field. New values may be added at any time.
     */
    algorithm?: string | null;
    /**
     * Use object_id instead.
     */
    bigstoreObjectRef?: string | null;
    /**
     * Blobstore v1 reference, set if reference_type is BLOBSTORE_REF This should be the byte representation of a blobstore.BlobRef. Since Blobstore is deprecating v1, use blobstore2_info instead. For now, any v2 blob will also be represented in this field as v1 BlobRef.
     */
    blobRef?: string | null;
    /**
     * Blobstore v2 info, set if reference_type is BLOBSTORE_REF and it refers to a v2 blob.
     */
    blobstore2Info?: Schema$Blobstore2Info;
    /**
     * A composite media composed of one or more media objects, set if reference_type is COMPOSITE_MEDIA. The media length field must be set to the sum of the lengths of all composite media objects. Note: All composite media must have length specified.
     */
    compositeMedia?: Schema$CompositeMedia[];
    /**
     * MIME type of the data
     */
    contentType?: string | null;
    /**
     * Extended content type information provided for Scotty uploads.
     */
    contentTypeInfo?: Schema$ContentTypeInfo;
    /**
     * A binary data reference for a media download. Serves as a technology-agnostic binary reference in some Google infrastructure. This value is a serialized storage_cosmo.BinaryReference proto. Storing it as bytes is a hack to get around the fact that the cosmo proto (as well as others it includes) doesn't support JavaScript. This prevents us from including the actual type of this field.
     */
    cosmoBinaryReference?: string | null;
    /**
     * For Scotty Uploads: Scotty-provided hashes for uploads For Scotty Downloads: (WARNING: DO NOT USE WITHOUT PERMISSION FROM THE SCOTTY TEAM.) A Hash provided by the agent to be used to verify the data being downloaded. Currently only supported for inline payloads. Further, only crc32c_hash is currently supported.
     */
    crc32cHash?: number | null;
    /**
     * Set if reference_type is DIFF_CHECKSUMS_RESPONSE.
     */
    diffChecksumsResponse?: Schema$DiffChecksumsResponse;
    /**
     * Set if reference_type is DIFF_DOWNLOAD_RESPONSE.
     */
    diffDownloadResponse?: Schema$DiffDownloadResponse;
    /**
     * Set if reference_type is DIFF_UPLOAD_REQUEST.
     */
    diffUploadRequest?: Schema$DiffUploadRequest;
    /**
     * Set if reference_type is DIFF_UPLOAD_RESPONSE.
     */
    diffUploadResponse?: Schema$DiffUploadResponse;
    /**
     * Set if reference_type is DIFF_VERSION_RESPONSE.
     */
    diffVersionResponse?: Schema$DiffVersionResponse;
    /**
     * Parameters for a media download.
     */
    downloadParameters?: Schema$DownloadParameters;
    /**
     * Original file name
     */
    filename?: string | null;
    /**
     * Deprecated, use one of explicit hash type fields instead. These two hash related fields will only be populated on Scotty based media uploads and will contain the content of the hash group in the NotificationRequest: http://cs/#google3/uploader/service/proto/upload_listener.proto&q=class:Hash Hex encoded hash value of the uploaded media.
     */
    hash?: string | null;
    /**
     * For Scotty uploads only. If a user sends a hash code and the backend has requested that Scotty verify the upload against the client hash, Scotty will perform the check on behalf of the backend and will reject it if the hashes don't match. This is set to true if Scotty performed this verification.
     */
    hashVerified?: boolean | null;
    /**
     * Media data, set if reference_type is INLINE
     */
    inline?: string | null;
    /**
     * |is_potential_retry| is set false only when Scotty is certain that it has not sent the request before. When a client resumes an upload, this field must be set true in agent calls, because Scotty cannot be certain that it has never sent the request before due to potential failure in the session state persistence.
     */
    isPotentialRetry?: boolean | null;
    /**
     * Size of the data, in bytes
     */
    length?: string | null;
    /**
     * Scotty-provided MD5 hash for an upload.
     */
    md5Hash?: string | null;
    /**
     * Media id to forward to the operation GetMedia. Can be set if reference_type is GET_MEDIA.
     */
    mediaId?: string | null;
    /**
     * Reference to a TI Blob, set if reference_type is BIGSTORE_REF.
     */
    objectId?: Schema$ObjectId;
    /**
     * Path to the data, set if reference_type is PATH
     */
    path?: string | null;
    /**
     * Describes what the field reference contains.
     */
    referenceType?: string | null;
    /**
     * Scotty-provided SHA1 hash for an upload.
     */
    sha1Hash?: string | null;
    /**
     * Scotty-provided SHA256 hash for an upload.
     */
    sha256Hash?: string | null;
    /**
     * Time at which the media data was last updated, in milliseconds since UNIX epoch
     */
    timestamp?: string | null;
    /**
     * A unique fingerprint/version id for the media data
     */
    token?: string | null;
  }
  /**
   * Extra information added to operations that support Scotty media requests.
   */
  export interface Schema$MediaRequestInfo {
    /**
     * The number of current bytes uploaded or downloaded.
     */
    currentBytes?: string | null;
    /**
     * Data to be copied to backend requests. Custom data is returned to Scotty in the agent_state field, which Scotty will then provide in subsequent upload notifications.
     */
    customData?: string | null;
    /**
     * Set if the http request info is diff encoded. The value of this field is the version number of the base revision. This is corresponding to Apiary's mediaDiffObjectVersion (//depot/google3/java/com/google/api/server/media/variable/DiffObjectVersionVariable.java). See go/esf-scotty-diff-upload for more information.
     */
    diffObjectVersion?: string | null;
    /**
     * The existence of the final_status field indicates that this is the last call to the agent for this request_id. http://google3/uploader/agent/scotty_agent.proto?l=737&rcl=347601929
     */
    finalStatus?: number | null;
    /**
     * The type of notification received from Scotty.
     */
    notificationType?: string | null;
    /**
     * The Scotty request ID.
     */
    requestId?: string | null;
    /**
     * The partition of the Scotty server handling this request. type is uploader_service.RequestReceivedParamsServingInfo LINT.IfChange(request_received_params_serving_info_annotations) LINT.ThenChange()
     */
    requestReceivedParamsServingInfo?: string | null;
    /**
     * The total size of the file.
     */
    totalBytes?: string | null;
    /**
     * Whether the total bytes field contains an estimated data.
     */
    totalBytesIsEstimated?: boolean | null;
  }
  /**
   * A message that will be displayed with a Valuable
   */
  export interface Schema$Message {
    /**
     * The message body.
     */
    body?: string | null;
    /**
     * The period of time that the message will be displayed to users. You can define both a `startTime` and `endTime` for each message. A message is displayed immediately after a Wallet Object is inserted unless a `startTime` is set. The message will appear in a list of messages indefinitely if `endTime` is not provided.
     */
    displayInterval?: Schema$TimeInterval;
    /**
     * The message header.
     */
    header?: string | null;
    /**
     * The ID associated with a message. This field is here to enable ease of management of messages. Notice ID values could possibly duplicate across multiple messages in the same class/instance, and care must be taken to select a reasonable ID for each message.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"walletobjects#walletObjectMessage"`.
     */
    kind?: string | null;
    /**
     * Translated strings for the message body.
     */
    localizedBody?: Schema$LocalizedString;
    /**
     * Translated strings for the message header.
     */
    localizedHeader?: Schema$LocalizedString;
    /**
     * The type of the message. Currently, this can only be set for offers.
     */
    messageType?: string | null;
  }
  export interface Schema$ModifyLinkedOfferObjects {
    /**
     * The linked offer object ids to add to the object.
     */
    addLinkedOfferObjectIds?: string[] | null;
    /**
     * The linked offer object ids to remove from the object.
     */
    removeLinkedOfferObjectIds?: string[] | null;
  }
  export interface Schema$ModifyLinkedOfferObjectsRequest {
    /**
     * The linked offer object ids to add or remove from the object.
     */
    linkedOfferObjectIds?: Schema$ModifyLinkedOfferObjects;
  }
  export interface Schema$Money {
    /**
     * The currency code, such as "USD" or "EUR."
     */
    currencyCode?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"walletobjects#money"`.
     */
    kind?: string | null;
    /**
     * The unit of money amount in micros. For example, $1 USD would be represented as 1000000 micros.
     */
    micros?: string | null;
  }
  /**
   * Indicates if the object needs to have notification enabled. We support only one of ExpiryNotification/UpcomingNotification. `expiryNotification` takes precedence over `upcomingNotification`. In other words if `expiryNotification` is set, we ignore the `upcomingNotification` field.
   */
  export interface Schema$Notifications {
    /**
     * A notification would be triggered at a specific time before the card expires.
     */
    expiryNotification?: Schema$ExpiryNotification;
    /**
     * A notification would be triggered at a specific time before the card becomes usable.
     */
    upcomingNotification?: Schema$UpcomingNotification;
  }
  /**
   * This is a copy of the tech.blob.ObjectId proto, which could not be used directly here due to transitive closure issues with JavaScript support; see http://b/8801763.
   */
  export interface Schema$ObjectId {
    /**
     * The name of the bucket to which this object belongs.
     */
    bucketName?: string | null;
    /**
     * Generation of the object. Generations are monotonically increasing across writes, allowing them to be be compared to determine which generation is newer. If this is omitted in a request, then you are requesting the live object. See http://go/bigstore-versions
     */
    generation?: string | null;
    /**
     * The name of the object.
     */
    objectName?: string | null;
  }
  export interface Schema$OfferClass {
    /**
     * Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead.
     */
    allowMultipleUsersPerObject?: boolean | null;
    /**
     * Callback options to be used to call the issuer back for every save/delete of an object for this class by the end-user. All objects of this class are eligible for the callback.
     */
    callbackOptions?: Schema$CallbackOptions;
    /**
     * Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display.
     */
    classTemplateInfo?: Schema$ClassTemplateInfo;
    /**
     * Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale.
     */
    countryCode?: string | null;
    /**
     * The details of the offer.
     */
    details?: string | null;
    /**
     * Identifies whether this class supports Smart Tap. The `redemptionIssuers` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap.
     */
    enableSmartTap?: boolean | null;
    /**
     * The fine print or terms of the offer, such as "20% off any t-shirt at Adam's Apparel."
     */
    finePrint?: string | null;
    /**
     * The help link for the offer, such as `http://myownpersonaldomain.com/help`
     */
    helpUri?: Schema$Uri;
    /**
     * Optional banner image displayed on the front of the card. If none is present, nothing will be displayed. The image will display at 100% width.
     */
    heroImage?: Schema$Image;
    /**
     * The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`.
     */
    hexBackgroundColor?: string | null;
    /**
     * The URI of your application's home page. Populating the URI in this field results in the exact same behavior as populating an URI in linksModuleData (when an object is rendered, a link to the homepage is shown in what would usually be thought of as the linksModuleData section of the object).
     */
    homepageUri?: Schema$Uri;
    /**
     * Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    id?: string | null;
    /**
     * Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.
     */
    imageModulesData?: Schema$ImageModuleData[];
    /**
     * Deprecated. Use textModulesData instead.
     */
    infoModuleData?: Schema$InfoModuleData;
    /**
     * Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.
     */
    issuerName?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"walletobjects#offerClass"`.
     */
    kind?: string | null;
    /**
     * Links module data. If links module data is also defined on the object, both will be displayed.
     */
    linksModuleData?: Schema$LinksModuleData;
    /**
     * Translated strings for the details.
     */
    localizedDetails?: Schema$LocalizedString;
    /**
     * Translated strings for the fine_print.
     */
    localizedFinePrint?: Schema$LocalizedString;
    /**
     * Translated strings for the issuer_name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.
     */
    localizedIssuerName?: Schema$LocalizedString;
    /**
     * Translated strings for the provider. Recommended maximum length is 12 characters to ensure full string is displayed on smaller screens.
     */
    localizedProvider?: Schema$LocalizedString;
    /**
     * Translated strings for the short title. Recommended maximum length is 20 characters.
     */
    localizedShortTitle?: Schema$LocalizedString;
    /**
     * Translated strings for the title. Recommended maximum length is 60 characters to ensure full string is displayed on smaller screens.
     */
    localizedTitle?: Schema$LocalizedString;
    /**
     * Note: This field is currently not supported to trigger geo notifications.
     */
    locations?: Schema$LatLongPoint[];
    /**
     * An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.
     */
    messages?: Schema$Message[];
    /**
     * Identifies whether multiple users and devices will save the same object referencing this class.
     */
    multipleDevicesAndHoldersAllowedStatus?: string | null;
    /**
     * Required. The offer provider (either the aggregator name or merchant name). Recommended maximum length is 12 characters to ensure full string is displayed on smaller screens.
     */
    provider?: string | null;
    /**
     * Required. The redemption channels applicable to this offer.
     */
    redemptionChannel?: string | null;
    /**
     * Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap.
     */
    redemptionIssuers?: string[] | null;
    /**
     * The review comments set by the platform when a class is marked `approved` or `rejected`.
     */
    review?: Schema$Review;
    /**
     * Required. The status of the class. This field can be set to `draft` or The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`.
     */
    reviewStatus?: string | null;
    /**
     * Optional information about the security animation. If this is set a security animation will be rendered on pass details.
     */
    securityAnimation?: Schema$SecurityAnimation;
    /**
     * A shortened version of the title of the offer, such as "20% off," shown to users as a quick reference to the offer contents. Recommended maximum length is 20 characters.
     */
    shortTitle?: string | null;
    /**
     * Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.
     */
    textModulesData?: Schema$TextModuleData[];
    /**
     * Required. The title of the offer, such as "20% off any t-shirt." Recommended maximum length is 60 characters to ensure full string is displayed on smaller screens.
     */
    title?: string | null;
    /**
     * The title image of the offer. This image is displayed in both the details and list views of the app.
     */
    titleImage?: Schema$Image;
    /**
     * Deprecated
     */
    version?: string | null;
    /**
     * View Unlock Requirement options for the offer.
     */
    viewUnlockRequirement?: string | null;
    /**
     * The wide title image of the offer. When provided, this will be used in place of the title image in the top left of the card view.
     */
    wideTitleImage?: Schema$Image;
    /**
     * Deprecated.
     */
    wordMark?: Schema$Image;
  }
  export interface Schema$OfferClassAddMessageResponse {
    /**
     * The updated OfferClass resource.
     */
    resource?: Schema$OfferClass;
  }
  export interface Schema$OfferClassListResponse {
    /**
     * Pagination of the response.
     */
    pagination?: Schema$Pagination;
    /**
     * Resources corresponding to the list request.
     */
    resources?: Schema$OfferClass[];
  }
  export interface Schema$OfferObject {
    /**
     * Optional information about the partner app link.
     */
    appLinkData?: Schema$AppLinkData;
    /**
     * The barcode type and value.
     */
    barcode?: Schema$Barcode;
    /**
     * Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you.
     */
    classId?: string | null;
    /**
     * A copy of the inherited fields of the parent class. These fields are retrieved during a GET.
     */
    classReference?: Schema$OfferClass;
    /**
     * Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers.
     */
    disableExpirationNotification?: boolean | null;
    /**
     * Information that controls how passes are grouped together.
     */
    groupingInfo?: Schema$GroupingInfo;
    /**
     * Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information.
     */
    hasLinkedDevice?: boolean | null;
    /**
     * Indicates if the object has users. This field is set by the platform.
     */
    hasUsers?: boolean | null;
    /**
     * Optional banner image displayed on the front of the card. If none is present, hero image of the class, if present, will be displayed. If hero image of the class is also not present, nothing will be displayed.
     */
    heroImage?: Schema$Image;
    /**
     * Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    id?: string | null;
    /**
     * Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.
     */
    imageModulesData?: Schema$ImageModuleData[];
    /**
     * Deprecated. Use textModulesData instead.
     */
    infoModuleData?: Schema$InfoModuleData;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"walletobjects#offerObject"`.
     */
    kind?: string | null;
    /**
     * Links module data. If links module data is also defined on the class, both will be displayed.
     */
    linksModuleData?: Schema$LinksModuleData;
    /**
     * Note: This field is currently not supported to trigger geo notifications.
     */
    locations?: Schema$LatLongPoint[];
    /**
     * An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.
     */
    messages?: Schema$Message[];
    /**
     * Pass constraints for the object. Includes limiting NFC and screenshot behaviors.
     */
    passConstraints?: Schema$PassConstraints;
    /**
     * The rotating barcode type and value.
     */
    rotatingBarcode?: Schema$RotatingBarcode;
    /**
     * The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported.
     */
    smartTapRedemptionValue?: string | null;
    /**
     * Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section.
     */
    state?: string | null;
    /**
     * Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.
     */
    textModulesData?: Schema$TextModuleData[];
    /**
     * The time period this object will be `active` and object can be used. An object's state will be changed to `expired` when this time period has passed.
     */
    validTimeInterval?: Schema$TimeInterval;
    /**
     * Deprecated
     */
    version?: string | null;
  }
  export interface Schema$OfferObjectAddMessageResponse {
    /**
     * The updated OfferObject resource.
     */
    resource?: Schema$OfferObject;
  }
  export interface Schema$OfferObjectListResponse {
    /**
     * Pagination of the response.
     */
    pagination?: Schema$Pagination;
    /**
     * Resources corresponding to the list request.
     */
    resources?: Schema$OfferObject[];
  }
  export interface Schema$Pagination {
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"walletobjects#pagination"`.
     */
    kind?: string | null;
    /**
     * Page token to send to fetch the next page.
     */
    nextPageToken?: string | null;
    /**
     * Number of results returned in this page.
     */
    resultsPerPage?: number | null;
  }
  /**
   * Container for any constraints that may be placed on passes.
   */
  export interface Schema$PassConstraints {
    /**
     * The NFC constraints for the pass.
     */
    nfcConstraint?: string[] | null;
    /**
     * The screenshot eligibility for the pass.
     */
    screenshotEligibility?: string | null;
  }
  export interface Schema$Permission {
    /**
     * The email address of the user, group, or service account to which this permission refers to.
     */
    emailAddress?: string | null;
    /**
     * The role granted by this permission.
     */
    role?: string | null;
  }
  export interface Schema$Permissions {
    /**
     * ID of the issuer the list of permissions refer to.
     */
    issuerId?: string | null;
    /**
     * The complete list of permissions for the issuer account.
     */
    permissions?: Schema$Permission[];
  }
  /**
   * Private data for TextModule. This data will be rendered as a TextModule for a pass.
   */
  export interface Schema$PrivateText {
    /**
     * Translated strings for the body.
     */
    body?: Schema$LocalizedString;
    /**
     * Translated strings for the header.
     */
    header?: Schema$LocalizedString;
  }
  /**
   * Private data for LinkModule. This data will be rendered as the LinkModule for a pass.
   */
  export interface Schema$PrivateUri {
    /**
     * The URI's title appearing in the app as text and its translated strings. Recommended maximum is 20 characters to ensure the full string is displayed on smaller screens.
     */
    description?: Schema$LocalizedString;
    /**
     * The location of a web page, image, or other resource. URIs in the `LinksModuleData` can have different prefixes indicating the type of URI (a link to a web page, a link to a map, a telephone number, or an email address).
     */
    uri?: string | null;
  }
  export interface Schema$PurchaseDetails {
    /**
     * ID of the account used to purchase the ticket.
     */
    accountId?: string | null;
    /**
     * The confirmation code for the purchase. This may be the same for multiple different tickets and is used to group tickets together.
     */
    confirmationCode?: string | null;
    /**
     * The purchase date/time of the ticket. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. Without offset information, some rich features may not be available.
     */
    purchaseDateTime?: string | null;
    /**
     * Receipt number/identifier for tracking the ticket purchase via the body that sold the ticket.
     */
    purchaseReceiptNumber?: string | null;
    /**
     * The cost of the ticket.
     */
    ticketCost?: Schema$TicketCost;
  }
  export interface Schema$ReservationInfo {
    /**
     * Confirmation code needed to check into this flight. This is the number that the passenger would enter into a kiosk at the airport to look up the flight and print a boarding pass.
     */
    confirmationCode?: string | null;
    /**
     * E-ticket number.
     */
    eticketNumber?: string | null;
    /**
     * Frequent flyer membership information.
     */
    frequentFlyerInfo?: Schema$FrequentFlyerInfo;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"walletobjects#reservationInfo"`.
     */
    kind?: string | null;
  }
  export interface Schema$Resources {
    eventTicketClasses?: Schema$EventTicketClass[];
    eventTicketObjects?: Schema$EventTicketObject[];
    flightClasses?: Schema$FlightClass[];
    flightObjects?: Schema$FlightObject[];
    giftCardClasses?: Schema$GiftCardClass[];
    giftCardObjects?: Schema$GiftCardObject[];
    loyaltyClasses?: Schema$LoyaltyClass[];
    loyaltyObjects?: Schema$LoyaltyObject[];
    offerClasses?: Schema$OfferClass[];
    offerObjects?: Schema$OfferObject[];
    transitClasses?: Schema$TransitClass[];
    transitObjects?: Schema$TransitObject[];
  }
  export interface Schema$Review {
    comments?: string | null;
  }
  export interface Schema$RotatingBarcode {
    /**
     * An optional text that will override the default text that shows under the barcode. This field is intended for a human readable equivalent of the barcode value, used when the barcode cannot be scanned.
     */
    alternateText?: string | null;
    /**
     * Input only. NOTE: This feature is only available for the transit vertical. Optional set of initial rotating barcode values. This allows a small subset of barcodes to be included with the object. Further rotating barcode values must be uploaded with the UploadRotatingBarcodeValues endpoint.
     */
    initialRotatingBarcodeValues?: Schema$RotatingBarcodeValues;
    /**
     * The render encoding for the barcode. When specified, barcode is rendered in the given encoding. Otherwise best known encoding is chosen by Google.
     */
    renderEncoding?: string | null;
    /**
     * Optional text that will be shown when the barcode is hidden behind a click action. This happens in cases where a pass has Smart Tap enabled. If not specified, a default is chosen by Google.
     */
    showCodeText?: Schema$LocalizedString;
    /**
     * Details used to evaluate the {totp_value_n\} substitutions.
     */
    totpDetails?: Schema$RotatingBarcodeTotpDetails;
    /**
     * The type of this barcode.
     */
    type?: string | null;
    /**
     * String encoded barcode value. This string supports the following substitutions: * {totp_value_n\}: Replaced with the TOTP value (see TotpDetails.parameters). * {totp_timestamp_millis\}: Replaced with the timestamp (millis since epoch) at which the barcode was generated. * {totp_timestamp_seconds\}: Replaced with the timestamp (seconds since epoch) at which the barcode was generated.
     */
    valuePattern?: string | null;
  }
  /**
   * Configuration for the time-based OTP substitutions. See https://tools.ietf.org/html/rfc6238
   */
  export interface Schema$RotatingBarcodeTotpDetails {
    /**
     * The TOTP algorithm used to generate the OTP.
     */
    algorithm?: string | null;
    /**
     * The TOTP parameters for each of the {totp_value_*\} substitutions. The TotpParameters at index n is used for the {totp_value_n\} substitution.
     */
    parameters?: Schema$RotatingBarcodeTotpDetailsTotpParameters[];
    /**
     * The time interval used for the TOTP value generation, in milliseconds.
     */
    periodMillis?: string | null;
  }
  /**
   * Configuration for the key and value length. See https://www.rfc-editor.org/rfc/rfc4226#section-5.3
   */
  export interface Schema$RotatingBarcodeTotpDetailsTotpParameters {
    /**
     * The secret key used for the TOTP value generation, encoded as a Base16 string.
     */
    key?: string | null;
    /**
     * The length of the TOTP value in decimal digits.
     */
    valueLength?: number | null;
  }
  /**
   * A payload containing many barcode values and start date/time.
   */
  export interface Schema$RotatingBarcodeValues {
    /**
     * Required. The amount of time each barcode is valid for.
     */
    periodMillis?: string | null;
    /**
     * Required. The date/time the first barcode is valid from. Barcodes will be rotated through using period_millis defined on the object's RotatingBarcodeValueInfo. This is an ISO 8601 extended format date/time, with an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year.
     */
    startDateTime?: string | null;
    /**
     * Required. The values to encode in the barcode. At least one value is required.
     */
    values?: string[] | null;
  }
  export interface Schema$SecurityAnimation {
    /**
     * Type of animation.
     */
    animationType?: string | null;
  }
  /**
   * Request to send a private pass update notice information to Google, so that devices can then fetch the notice prompting the user to update a pass.
   */
  export interface Schema$SetPassUpdateNoticeRequest {}
  /**
   * A response to a request to notify Google of an awaiting update to a private pass.
   */
  export interface Schema$SetPassUpdateNoticeResponse {}
  export interface Schema$SignUpInfo {
    /**
     * ID of the class the user can sign up for.
     */
    classId?: string | null;
  }
  export interface Schema$SmartTap {
    /**
     * The unique identifier for a smart tap. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is the Smart Tap id. The Smart Tap id is a Base64 encoded string which represents the id which was generated by the Google Pay app.
     */
    id?: string | null;
    /**
     * Communication from merchant to user.
     */
    infos?: Schema$IssuerToUserInfo[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"walletobjects#smartTap"`.
     */
    kind?: string | null;
    /**
     * Smart Tap merchant ID of who engaged in the Smart Tap interaction.
     */
    merchantId?: string | null;
  }
  export interface Schema$SmartTapMerchantData {
    /**
     * Available only to Smart Tap enabled partners. Contact support for additional guidance.
     */
    authenticationKeys?: Schema$AuthenticationKey[];
    /**
     * Available only to Smart Tap enabled partners. Contact support for additional guidance.
     */
    smartTapMerchantId?: string | null;
  }
  export interface Schema$TemplateItem {
    /**
     * A reference to a field to display. If both `firstValue` and `secondValue` are populated, they will both appear as one item with a slash between them. For example, values A and B would be shown as "A / B".
     */
    firstValue?: Schema$FieldSelector;
    /**
     * A predefined item to display. Only one of `firstValue` or `predefinedItem` may be set.
     */
    predefinedItem?: string | null;
    /**
     * A reference to a field to display. This may only be populated if the `firstValue` field is populated.
     */
    secondValue?: Schema$FieldSelector;
  }
  /**
   * Data for Text module. All fields are optional. Header will be displayed if available, different types of bodies will be concatenated if they are defined.
   */
  export interface Schema$TextModuleData {
    /**
     * The body of the Text Module, which is defined as an uninterrupted string. Recommended maximum length is 500 characters to ensure full string is displayed on smaller screens.
     */
    body?: string | null;
    /**
     * The header of the Text Module. Recommended maximum length is 35 characters to ensure full string is displayed on smaller screens.
     */
    header?: string | null;
    /**
     * The ID associated with a text module. This field is here to enable ease of management of text modules.
     */
    id?: string | null;
    /**
     * Translated strings for the body. Recommended maximum length is 500 characters to ensure full string is displayed on smaller screens.
     */
    localizedBody?: Schema$LocalizedString;
    /**
     * Translated strings for the header. Recommended maximum length is 35 characters to ensure full string is displayed on smaller screens.
     */
    localizedHeader?: Schema$LocalizedString;
  }
  export interface Schema$TicketCost {
    /**
     * A message describing any kind of discount that was applied.
     */
    discountMessage?: Schema$LocalizedString;
    /**
     * The face value of the ticket.
     */
    faceValue?: Schema$Money;
    /**
     * The actual purchase price of the ticket, after tax and/or discounts.
     */
    purchasePrice?: Schema$Money;
  }
  export interface Schema$TicketLeg {
    /**
     * The date/time of arrival. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the destination station. For example, if the event occurs at the 20th hour of June 5th, 2018 at the destination station, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the destination station is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available.
     */
    arrivalDateTime?: string | null;
    /**
     * The train or ship name/number that the passsenger needs to board.
     */
    carriage?: string | null;
    /**
     * The date/time of departure. This is required if there is no validity time interval set on the transit object. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the origin station. For example, if the departure occurs at the 20th hour of June 5th, 2018 at the origin station, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the origin station is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available.
     */
    departureDateTime?: string | null;
    /**
     * The destination name.
     */
    destinationName?: Schema$LocalizedString;
    /**
     * The destination station code.
     */
    destinationStationCode?: string | null;
    /**
     * Short description/name of the fare for this leg of travel. Eg "Anytime Single Use".
     */
    fareName?: Schema$LocalizedString;
    /**
     * The name of the origin station. This is required if `desinationName` is present or if `originStationCode` is not present.
     */
    originName?: Schema$LocalizedString;
    /**
     * The origin station code. This is required if `destinationStationCode` is present or if `originName` is not present.
     */
    originStationCode?: string | null;
    /**
     * The platform or gate where the passenger can board the carriage.
     */
    platform?: string | null;
    /**
     * The reserved seat for the passenger(s). If more than one seat is to be specified then use the `ticketSeats` field instead. Both `ticketSeat` and `ticketSeats` may not be set.
     */
    ticketSeat?: Schema$TicketSeat;
    /**
     * The reserved seat for the passenger(s). If only one seat is to be specified then use the `ticketSeat` field instead. Both `ticketSeat` and `ticketSeats` may not be set.
     */
    ticketSeats?: Schema$TicketSeat[];
    /**
     * The name of the transit operator that is operating this leg of a trip.
     */
    transitOperatorName?: Schema$LocalizedString;
    /**
     * Terminus station or destination of the train/bus/etc.
     */
    transitTerminusName?: Schema$LocalizedString;
    /**
     * The zone of boarding within the platform.
     */
    zone?: string | null;
  }
  export interface Schema$TicketRestrictions {
    /**
     * Extra restrictions that don't fall under the "route" or "time" categories.
     */
    otherRestrictions?: Schema$LocalizedString;
    /**
     * Restrictions about routes that may be taken. For example, this may be the string "Reserved CrossCountry trains only".
     */
    routeRestrictions?: Schema$LocalizedString;
    /**
     * More details about the above `routeRestrictions`.
     */
    routeRestrictionsDetails?: Schema$LocalizedString;
    /**
     * Restrictions about times this ticket may be used.
     */
    timeRestrictions?: Schema$LocalizedString;
  }
  export interface Schema$TicketSeat {
    /**
     * The identifier of the train car or coach in which the ticketed seat is located. Eg. "10"
     */
    coach?: string | null;
    /**
     * A custome fare class to be used if no `fareClass` applies. Both `fareClass` and `customFareClass` may not be set.
     */
    customFareClass?: Schema$LocalizedString;
    /**
     * The fare class of the ticketed seat.
     */
    fareClass?: string | null;
    /**
     * The identifier of where the ticketed seat is located. Eg. "42". If there is no specific identifier, use `seatAssigment` instead.
     */
    seat?: string | null;
    /**
     * The passenger's seat assignment. Eg. "no specific seat". To be used when there is no specific identifier to use in `seat`.
     */
    seatAssignment?: Schema$LocalizedString;
  }
  export interface Schema$TimeInterval {
    /**
     * End time of the interval. Offset is not required. If an offset is provided and `start` time is set, `start` must also include an offset.
     */
    end?: Schema$DateTime;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"walletobjects#timeInterval"`.
     */
    kind?: string | null;
    /**
     * Start time of the interval. Offset is not required. If an offset is provided and `end` time is set, `end` must also include an offset.
     */
    start?: Schema$DateTime;
  }
  export interface Schema$TransitClass {
    /**
     * Activation options for an activatable ticket.
     */
    activationOptions?: Schema$ActivationOptions;
    /**
     * Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead.
     */
    allowMultipleUsersPerObject?: boolean | null;
    /**
     * Callback options to be used to call the issuer back for every save/delete of an object for this class by the end-user. All objects of this class are eligible for the callback.
     */
    callbackOptions?: Schema$CallbackOptions;
    /**
     * Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display.
     */
    classTemplateInfo?: Schema$ClassTemplateInfo;
    /**
     * Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale.
     */
    countryCode?: string | null;
    /**
     * A custom label to use for the carriage value (`transitObject.ticketLeg.carriage`).
     */
    customCarriageLabel?: Schema$LocalizedString;
    /**
     * A custom label to use for the coach value (`transitObject.ticketLeg.ticketSeat.coach`).
     */
    customCoachLabel?: Schema$LocalizedString;
    /**
     * A custom label to use for the transit concession category value (`transitObject.concessionCategory`).
     */
    customConcessionCategoryLabel?: Schema$LocalizedString;
    /**
     * A custom label to use for the confirmation code value (`transitObject.purchaseDetails.confirmationCode`).
     */
    customConfirmationCodeLabel?: Schema$LocalizedString;
    /**
     * A custom label to use for the transit discount message value (`transitObject.purchaseDetails.ticketCost.discountMessage`).
     */
    customDiscountMessageLabel?: Schema$LocalizedString;
    /**
     * A custom label to use for the fare class value (`transitObject.ticketLeg.ticketSeat.fareClass`).
     */
    customFareClassLabel?: Schema$LocalizedString;
    /**
     * A custom label to use for the transit fare name value (`transitObject.ticketLeg.fareName`).
     */
    customFareNameLabel?: Schema$LocalizedString;
    /**
     * A custom label to use for the other restrictions value (`transitObject.ticketRestrictions.otherRestrictions`).
     */
    customOtherRestrictionsLabel?: Schema$LocalizedString;
    /**
     * A custom label to use for the boarding platform value (`transitObject.ticketLeg.platform`).
     */
    customPlatformLabel?: Schema$LocalizedString;
    /**
     * A custom label to use for the purchase face value (`transitObject.purchaseDetails.ticketCost.faceValue`).
     */
    customPurchaseFaceValueLabel?: Schema$LocalizedString;
    /**
     * A custom label to use for the purchase price value (`transitObject.purchaseDetails.ticketCost.purchasePrice`).
     */
    customPurchasePriceLabel?: Schema$LocalizedString;
    /**
     * A custom label to use for the purchase receipt number value (`transitObject.purchaseDetails.purchaseReceiptNumber`).
     */
    customPurchaseReceiptNumberLabel?: Schema$LocalizedString;
    /**
     * A custom label to use for the route restrictions details value (`transitObject.ticketRestrictions.routeRestrictionsDetails`).
     */
    customRouteRestrictionsDetailsLabel?: Schema$LocalizedString;
    /**
     * A custom label to use for the route restrictions value (`transitObject.ticketRestrictions.routeRestrictions`).
     */
    customRouteRestrictionsLabel?: Schema$LocalizedString;
    /**
     * A custom label to use for the seat location value (`transitObject.ticketLeg.ticketSeat.seat`).
     */
    customSeatLabel?: Schema$LocalizedString;
    /**
     * A custom label to use for the ticket number value (`transitObject.ticketNumber`).
     */
    customTicketNumberLabel?: Schema$LocalizedString;
    /**
     * A custom label to use for the time restrictions details value (`transitObject.ticketRestrictions.timeRestrictions`).
     */
    customTimeRestrictionsLabel?: Schema$LocalizedString;
    /**
     * A custom label to use for the transit terminus name value (`transitObject.ticketLeg.transitTerminusName`).
     */
    customTransitTerminusNameLabel?: Schema$LocalizedString;
    /**
     * A custom label to use for the boarding zone value (`transitObject.ticketLeg.zone`).
     */
    customZoneLabel?: Schema$LocalizedString;
    /**
     * Controls the display of the single-leg itinerary for this class. By default, an itinerary will only display for multi-leg trips.
     */
    enableSingleLegItinerary?: boolean | null;
    /**
     * Identifies whether this class supports Smart Tap. The `redemptionIssuers` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap.
     */
    enableSmartTap?: boolean | null;
    /**
     * Optional banner image displayed on the front of the card. If none is present, nothing will be displayed. The image will display at 100% width.
     */
    heroImage?: Schema$Image;
    /**
     * The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`.
     */
    hexBackgroundColor?: string | null;
    /**
     * The URI of your application's home page. Populating the URI in this field results in the exact same behavior as populating an URI in linksModuleData (when an object is rendered, a link to the homepage is shown in what would usually be thought of as the linksModuleData section of the object).
     */
    homepageUri?: Schema$Uri;
    /**
     * Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    id?: string | null;
    /**
     * Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.
     */
    imageModulesData?: Schema$ImageModuleData[];
    /**
     * Deprecated. Use textModulesData instead.
     */
    infoModuleData?: Schema$InfoModuleData;
    /**
     * Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.
     */
    issuerName?: string | null;
    /**
     * If this field is present, transit tickets served to a user's device will always be in this language. Represents the BCP 47 language tag. Example values are "en-US", "en-GB", "de", or "de-AT".
     */
    languageOverride?: string | null;
    /**
     * Links module data. If links module data is also defined on the object, both will be displayed.
     */
    linksModuleData?: Schema$LinksModuleData;
    /**
     * Translated strings for the issuer_name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.
     */
    localizedIssuerName?: Schema$LocalizedString;
    /**
     * Note: This field is currently not supported to trigger geo notifications.
     */
    locations?: Schema$LatLongPoint[];
    /**
     * Required. The logo image of the ticket. This image is displayed in the card detail view of the app.
     */
    logo?: Schema$Image;
    /**
     * An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.
     */
    messages?: Schema$Message[];
    /**
     * Identifies whether multiple users and devices will save the same object referencing this class.
     */
    multipleDevicesAndHoldersAllowedStatus?: string | null;
    /**
     * Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap.
     */
    redemptionIssuers?: string[] | null;
    /**
     * The review comments set by the platform when a class is marked `approved` or `rejected`.
     */
    review?: Schema$Review;
    /**
     * Required. The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`.
     */
    reviewStatus?: string | null;
    /**
     * Optional information about the security animation. If this is set a security animation will be rendered on pass details.
     */
    securityAnimation?: Schema$SecurityAnimation;
    /**
     * Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.
     */
    textModulesData?: Schema$TextModuleData[];
    /**
     * The name of the transit operator.
     */
    transitOperatorName?: Schema$LocalizedString;
    /**
     * Required. The type of transit this class represents, such as "bus".
     */
    transitType?: string | null;
    /**
     * Deprecated
     */
    version?: string | null;
    /**
     * View Unlock Requirement options for the transit ticket.
     */
    viewUnlockRequirement?: string | null;
    /**
     * Watermark image to display on the user's device.
     */
    watermark?: Schema$Image;
    /**
     * The wide logo of the ticket. When provided, this will be used in place of the logo in the top left of the card view.
     */
    wideLogo?: Schema$Image;
    /**
     * Deprecated.
     */
    wordMark?: Schema$Image;
  }
  export interface Schema$TransitClassAddMessageResponse {
    /**
     * The updated TransitClass resource.
     */
    resource?: Schema$TransitClass;
  }
  export interface Schema$TransitClassListResponse {
    /**
     * Pagination of the response.
     */
    pagination?: Schema$Pagination;
    /**
     * Resources corresponding to the list request.
     */
    resources?: Schema$TransitClass[];
  }
  export interface Schema$TransitObject {
    /**
     * The activation status for the object. Required if the class has `activationOptions` set.
     */
    activationStatus?: Schema$ActivationStatus;
    /**
     * Optional information about the partner app link.
     */
    appLinkData?: Schema$AppLinkData;
    /**
     * The barcode type and value.
     */
    barcode?: Schema$Barcode;
    /**
     * Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you.
     */
    classId?: string | null;
    /**
     * A copy of the inherited fields of the parent class. These fields are retrieved during a GET.
     */
    classReference?: Schema$TransitClass;
    /**
     * The concession category for the ticket.
     */
    concessionCategory?: string | null;
    /**
     * A custom concession category to use when `concessionCategory` does not provide the right option. Both `concessionCategory` and `customConcessionCategory` may not be set.
     */
    customConcessionCategory?: Schema$LocalizedString;
    /**
     * A custom status to use for the ticket status value when `ticketStatus` does not provide the right option. Both `ticketStatus` and `customTicketStatus` may not be set.
     */
    customTicketStatus?: Schema$LocalizedString;
    /**
     * Device context associated with the object.
     */
    deviceContext?: Schema$DeviceContext;
    /**
     * Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers.
     */
    disableExpirationNotification?: boolean | null;
    /**
     * Information that controls how passes are grouped together.
     */
    groupingInfo?: Schema$GroupingInfo;
    /**
     * Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information.
     */
    hasLinkedDevice?: boolean | null;
    /**
     * Indicates if the object has users. This field is set by the platform.
     */
    hasUsers?: boolean | null;
    /**
     * Optional banner image displayed on the front of the card. If none is present, hero image of the class, if present, will be displayed. If hero image of the class is also not present, nothing will be displayed.
     */
    heroImage?: Schema$Image;
    /**
     * The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`.
     */
    hexBackgroundColor?: string | null;
    /**
     * Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    id?: string | null;
    /**
     * Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.
     */
    imageModulesData?: Schema$ImageModuleData[];
    /**
     * Deprecated. Use textModulesData instead.
     */
    infoModuleData?: Schema$InfoModuleData;
    /**
     * Links module data. If links module data is also defined on the class, both will be displayed.
     */
    linksModuleData?: Schema$LinksModuleData;
    /**
     * Note: This field is currently not supported to trigger geo notifications.
     */
    locations?: Schema$LatLongPoint[];
    /**
     * An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.
     */
    messages?: Schema$Message[];
    /**
     * Pass constraints for the object. Includes limiting NFC and screenshot behaviors.
     */
    passConstraints?: Schema$PassConstraints;
    /**
     * The name(s) of the passengers the ticket is assigned to. The above `passengerType` field is meant to give Google context on this field.
     */
    passengerNames?: string | null;
    /**
     * The number of passengers.
     */
    passengerType?: string | null;
    /**
     * Purchase details for this ticket.
     */
    purchaseDetails?: Schema$PurchaseDetails;
    /**
     * The rotating barcode type and value.
     */
    rotatingBarcode?: Schema$RotatingBarcode;
    /**
     * The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported.
     */
    smartTapRedemptionValue?: string | null;
    /**
     * Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section.
     */
    state?: string | null;
    /**
     * Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.
     */
    textModulesData?: Schema$TextModuleData[];
    /**
     * A single ticket leg contains departure and arrival information along with boarding and seating information. If more than one leg is to be specified then use the `ticketLegs` field instead. Both `ticketLeg` and `ticketLegs` may not be set.
     */
    ticketLeg?: Schema$TicketLeg;
    /**
     * Each ticket may contain one or more legs. Each leg contains departure and arrival information along with boarding and seating information. If only one leg is to be specified then use the `ticketLeg` field instead. Both `ticketLeg` and `ticketLegs` may not be set.
     */
    ticketLegs?: Schema$TicketLeg[];
    /**
     * The number of the ticket. This is a unique identifier for the ticket in the transit operator's system.
     */
    ticketNumber?: string | null;
    /**
     * Information about what kind of restrictions there are on using this ticket. For example, which days of the week it must be used, or which routes are allowed to be taken.
     */
    ticketRestrictions?: Schema$TicketRestrictions;
    /**
     * The status of the ticket. For states which affect display, use the `state` field instead.
     */
    ticketStatus?: string | null;
    /**
     * This id is used to group tickets together if the user has saved multiple tickets for the same trip.
     */
    tripId?: string | null;
    /**
     * Required. The type of trip this transit object represents. Used to determine the pass title and/or which symbol to use between the origin and destination.
     */
    tripType?: string | null;
    /**
     * The time period this object will be `active` and object can be used. An object's state will be changed to `expired` when this time period has passed.
     */
    validTimeInterval?: Schema$TimeInterval;
    /**
     * Deprecated
     */
    version?: string | null;
  }
  export interface Schema$TransitObjectAddMessageResponse {
    /**
     * The updated TransitObject resource.
     */
    resource?: Schema$TransitObject;
  }
  export interface Schema$TransitObjectListResponse {
    /**
     * Pagination of the response.
     */
    pagination?: Schema$Pagination;
    /**
     * Resources corresponding to the list request.
     */
    resources?: Schema$TransitObject[];
  }
  /**
   * Request to upload rotating barcode values.
   */
  export interface Schema$TransitObjectUploadRotatingBarcodeValuesRequest {
    /**
     * A reference to the rotating barcode values payload that was uploaded.
     */
    blob?: Schema$Media;
    /**
     * Extra information about the uploaded media.
     */
    mediaRequestInfo?: Schema$MediaRequestInfo;
  }
  /**
   * Response for uploading rotating barcode values.
   */
  export interface Schema$TransitObjectUploadRotatingBarcodeValuesResponse {}
  export interface Schema$TranslatedString {
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"walletobjects#translatedString"`.
     */
    kind?: string | null;
    /**
     * Represents the BCP 47 language tag. Example values are "en-US", "en-GB", "de", or "de-AT".
     */
    language?: string | null;
    /**
     * The UTF-8 encoded translated string.
     */
    value?: string | null;
  }
  /**
   * Indicates that the issuer would like Google Wallet to send an upcoming card validity notification 1 day before card becomes valid/usable.
   */
  export interface Schema$UpcomingNotification {
    /**
     * Indicates if the object needs to have upcoming notification enabled.
     */
    enableNotification?: boolean | null;
  }
  /**
   * Request for sending user private Text or URI by the Issuer.
   */
  export interface Schema$UploadPrivateDataRequest {
    /**
     * The ID of the issuer sending the data.
     */
    issuerId?: string | null;
    /**
     * Private text data of the user.
     */
    text?: Schema$PrivateText;
    /**
     * Private URIs of the user.
     */
    uri?: Schema$PrivateUri;
  }
  /**
   * Response for uploading user private data (text or URIs)
   */
  export interface Schema$UploadPrivateDataResponse {
    /**
     * A 64-bit content id for the private data that was uploaded by the Issuer.
     */
    privateContentId?: string | null;
  }
  /**
   * Request to upload user's private images by Issuers to be used in passes.
   */
  export interface Schema$UploadPrivateImageRequest {
    /**
     * A reference to the image payload that was uploaded by Scotty.
     */
    blob?: Schema$Media;
    /**
     * Extra information about the uploaded media.
     */
    mediaRequestInfo?: Schema$MediaRequestInfo;
  }
  /**
   * Response for uploading the private image
   */
  export interface Schema$UploadPrivateImageResponse {
    /**
     * A 64-bit content id for the image that was uploaded by the Issuer.
     */
    privateContentId?: string | null;
  }
  export interface Schema$Uri {
    /**
     * The URI's title appearing in the app as text. Recommended maximum is 20 characters to ensure full string is displayed on smaller screens. Note that in some contexts this text is not used, such as when `description` is part of an image.
     */
    description?: string | null;
    /**
     * The ID associated with a uri. This field is here to enable ease of management of uris.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"walletobjects#uri"`.
     */
    kind?: string | null;
    /**
     * Translated strings for the description. Recommended maximum is 20 characters to ensure full string is displayed on smaller screens.
     */
    localizedDescription?: Schema$LocalizedString;
    /**
     * The location of a web page, image, or other resource. URIs in the `LinksModuleData` module can have different prefixes indicating the type of URI (a link to a web page, a link to a map, a telephone number, or an email address). URIs must have a scheme.
     */
    uri?: string | null;
  }

  export class Resource$Eventticketclass {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Adds a message to the event ticket class referenced by the given class ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    addmessage(
      params: Params$Resource$Eventticketclass$Addmessage,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    addmessage(
      params?: Params$Resource$Eventticketclass$Addmessage,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EventTicketClassAddMessageResponse>;
    addmessage(
      params: Params$Resource$Eventticketclass$Addmessage,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    addmessage(
      params: Params$Resource$Eventticketclass$Addmessage,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EventTicketClassAddMessageResponse>,
      callback: BodyResponseCallback<Schema$EventTicketClassAddMessageResponse>
    ): void;
    addmessage(
      params: Params$Resource$Eventticketclass$Addmessage,
      callback: BodyResponseCallback<Schema$EventTicketClassAddMessageResponse>
    ): void;
    addmessage(
      callback: BodyResponseCallback<Schema$EventTicketClassAddMessageResponse>
    ): void;
    addmessage(
      paramsOrCallback?:
        | Params$Resource$Eventticketclass$Addmessage
        | BodyResponseCallback<Schema$EventTicketClassAddMessageResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventTicketClassAddMessageResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventTicketClassAddMessageResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$EventTicketClassAddMessageResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Eventticketclass$Addmessage;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Eventticketclass$Addmessage;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/walletobjects/v1/eventTicketClass/{resourceId}/addMessage'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EventTicketClassAddMessageResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventTicketClassAddMessageResponse>(
          parameters
        );
      }
    }

    /**
     * Returns the event ticket class with the given class ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Eventticketclass$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Eventticketclass$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EventTicketClass>;
    get(
      params: Params$Resource$Eventticketclass$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Eventticketclass$Get,
      options: MethodOptions | BodyResponseCallback<Schema$EventTicketClass>,
      callback: BodyResponseCallback<Schema$EventTicketClass>
    ): void;
    get(
      params: Params$Resource$Eventticketclass$Get,
      callback: BodyResponseCallback<Schema$EventTicketClass>
    ): void;
    get(callback: BodyResponseCallback<Schema$EventTicketClass>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Eventticketclass$Get
        | BodyResponseCallback<Schema$EventTicketClass>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventTicketClass>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventTicketClass>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$EventTicketClass> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Eventticketclass$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Eventticketclass$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/eventTicketClass/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EventTicketClass>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventTicketClass>(parameters);
      }
    }

    /**
     * Inserts an event ticket class with the given ID and properties.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Eventticketclass$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Eventticketclass$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EventTicketClass>;
    insert(
      params: Params$Resource$Eventticketclass$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Eventticketclass$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$EventTicketClass>,
      callback: BodyResponseCallback<Schema$EventTicketClass>
    ): void;
    insert(
      params: Params$Resource$Eventticketclass$Insert,
      callback: BodyResponseCallback<Schema$EventTicketClass>
    ): void;
    insert(callback: BodyResponseCallback<Schema$EventTicketClass>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Eventticketclass$Insert
        | BodyResponseCallback<Schema$EventTicketClass>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventTicketClass>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventTicketClass>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$EventTicketClass> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Eventticketclass$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Eventticketclass$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/eventTicketClass').replace(
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
        createAPIRequest<Schema$EventTicketClass>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventTicketClass>(parameters);
      }
    }

    /**
     * Returns a list of all event ticket classes for a given issuer ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Eventticketclass$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Eventticketclass$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EventTicketClassListResponse>;
    list(
      params: Params$Resource$Eventticketclass$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Eventticketclass$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EventTicketClassListResponse>,
      callback: BodyResponseCallback<Schema$EventTicketClassListResponse>
    ): void;
    list(
      params: Params$Resource$Eventticketclass$List,
      callback: BodyResponseCallback<Schema$EventTicketClassListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$EventTicketClassListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Eventticketclass$List
        | BodyResponseCallback<Schema$EventTicketClassListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventTicketClassListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventTicketClassListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$EventTicketClassListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Eventticketclass$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Eventticketclass$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/eventTicketClass').replace(
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
        createAPIRequest<Schema$EventTicketClassListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventTicketClassListResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the event ticket class referenced by the given class ID. This method supports patch semantics.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Eventticketclass$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Eventticketclass$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EventTicketClass>;
    patch(
      params: Params$Resource$Eventticketclass$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Eventticketclass$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$EventTicketClass>,
      callback: BodyResponseCallback<Schema$EventTicketClass>
    ): void;
    patch(
      params: Params$Resource$Eventticketclass$Patch,
      callback: BodyResponseCallback<Schema$EventTicketClass>
    ): void;
    patch(callback: BodyResponseCallback<Schema$EventTicketClass>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Eventticketclass$Patch
        | BodyResponseCallback<Schema$EventTicketClass>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventTicketClass>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventTicketClass>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$EventTicketClass> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Eventticketclass$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Eventticketclass$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/eventTicketClass/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EventTicketClass>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventTicketClass>(parameters);
      }
    }

    /**
     * Updates the event ticket class referenced by the given class ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Eventticketclass$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Eventticketclass$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EventTicketClass>;
    update(
      params: Params$Resource$Eventticketclass$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Eventticketclass$Update,
      options: MethodOptions | BodyResponseCallback<Schema$EventTicketClass>,
      callback: BodyResponseCallback<Schema$EventTicketClass>
    ): void;
    update(
      params: Params$Resource$Eventticketclass$Update,
      callback: BodyResponseCallback<Schema$EventTicketClass>
    ): void;
    update(callback: BodyResponseCallback<Schema$EventTicketClass>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Eventticketclass$Update
        | BodyResponseCallback<Schema$EventTicketClass>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventTicketClass>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventTicketClass>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$EventTicketClass> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Eventticketclass$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Eventticketclass$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/eventTicketClass/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EventTicketClass>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventTicketClass>(parameters);
      }
    }
  }

  export interface Params$Resource$Eventticketclass$Addmessage
    extends StandardParameters {
    /**
     * The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddMessageRequest;
  }
  export interface Params$Resource$Eventticketclass$Get
    extends StandardParameters {
    /**
     * The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;
  }
  export interface Params$Resource$Eventticketclass$Insert
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$EventTicketClass;
  }
  export interface Params$Resource$Eventticketclass$List
    extends StandardParameters {
    /**
     * The ID of the issuer authorized to list classes.
     */
    issuerId?: string;
    /**
     * Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     */
    maxResults?: number;
    /**
     * Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
     */
    token?: string;
  }
  export interface Params$Resource$Eventticketclass$Patch
    extends StandardParameters {
    /**
     * The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EventTicketClass;
  }
  export interface Params$Resource$Eventticketclass$Update
    extends StandardParameters {
    /**
     * The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EventTicketClass;
  }

  export class Resource$Eventticketobject {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Adds a message to the event ticket object referenced by the given object ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    addmessage(
      params: Params$Resource$Eventticketobject$Addmessage,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    addmessage(
      params?: Params$Resource$Eventticketobject$Addmessage,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EventTicketObjectAddMessageResponse>;
    addmessage(
      params: Params$Resource$Eventticketobject$Addmessage,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    addmessage(
      params: Params$Resource$Eventticketobject$Addmessage,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EventTicketObjectAddMessageResponse>,
      callback: BodyResponseCallback<Schema$EventTicketObjectAddMessageResponse>
    ): void;
    addmessage(
      params: Params$Resource$Eventticketobject$Addmessage,
      callback: BodyResponseCallback<Schema$EventTicketObjectAddMessageResponse>
    ): void;
    addmessage(
      callback: BodyResponseCallback<Schema$EventTicketObjectAddMessageResponse>
    ): void;
    addmessage(
      paramsOrCallback?:
        | Params$Resource$Eventticketobject$Addmessage
        | BodyResponseCallback<Schema$EventTicketObjectAddMessageResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventTicketObjectAddMessageResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventTicketObjectAddMessageResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$EventTicketObjectAddMessageResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Eventticketobject$Addmessage;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Eventticketobject$Addmessage;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/walletobjects/v1/eventTicketObject/{resourceId}/addMessage'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EventTicketObjectAddMessageResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventTicketObjectAddMessageResponse>(
          parameters
        );
      }
    }

    /**
     * Returns the event ticket object with the given object ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Eventticketobject$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Eventticketobject$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EventTicketObject>;
    get(
      params: Params$Resource$Eventticketobject$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Eventticketobject$Get,
      options: MethodOptions | BodyResponseCallback<Schema$EventTicketObject>,
      callback: BodyResponseCallback<Schema$EventTicketObject>
    ): void;
    get(
      params: Params$Resource$Eventticketobject$Get,
      callback: BodyResponseCallback<Schema$EventTicketObject>
    ): void;
    get(callback: BodyResponseCallback<Schema$EventTicketObject>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Eventticketobject$Get
        | BodyResponseCallback<Schema$EventTicketObject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventTicketObject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventTicketObject>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$EventTicketObject>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Eventticketobject$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Eventticketobject$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/eventTicketObject/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EventTicketObject>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventTicketObject>(parameters);
      }
    }

    /**
     * Inserts an event ticket object with the given ID and properties.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Eventticketobject$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Eventticketobject$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EventTicketObject>;
    insert(
      params: Params$Resource$Eventticketobject$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Eventticketobject$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$EventTicketObject>,
      callback: BodyResponseCallback<Schema$EventTicketObject>
    ): void;
    insert(
      params: Params$Resource$Eventticketobject$Insert,
      callback: BodyResponseCallback<Schema$EventTicketObject>
    ): void;
    insert(callback: BodyResponseCallback<Schema$EventTicketObject>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Eventticketobject$Insert
        | BodyResponseCallback<Schema$EventTicketObject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventTicketObject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventTicketObject>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$EventTicketObject>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Eventticketobject$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Eventticketobject$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/eventTicketObject').replace(
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
        createAPIRequest<Schema$EventTicketObject>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventTicketObject>(parameters);
      }
    }

    /**
     * Returns a list of all event ticket objects for a given issuer ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Eventticketobject$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Eventticketobject$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EventTicketObjectListResponse>;
    list(
      params: Params$Resource$Eventticketobject$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Eventticketobject$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EventTicketObjectListResponse>,
      callback: BodyResponseCallback<Schema$EventTicketObjectListResponse>
    ): void;
    list(
      params: Params$Resource$Eventticketobject$List,
      callback: BodyResponseCallback<Schema$EventTicketObjectListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$EventTicketObjectListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Eventticketobject$List
        | BodyResponseCallback<Schema$EventTicketObjectListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventTicketObjectListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventTicketObjectListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$EventTicketObjectListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Eventticketobject$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Eventticketobject$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/eventTicketObject').replace(
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
        createAPIRequest<Schema$EventTicketObjectListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventTicketObjectListResponse>(
          parameters
        );
      }
    }

    /**
     * Modifies linked offer objects for the event ticket object with the given ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    modifylinkedofferobjects(
      params: Params$Resource$Eventticketobject$Modifylinkedofferobjects,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    modifylinkedofferobjects(
      params?: Params$Resource$Eventticketobject$Modifylinkedofferobjects,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EventTicketObject>;
    modifylinkedofferobjects(
      params: Params$Resource$Eventticketobject$Modifylinkedofferobjects,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    modifylinkedofferobjects(
      params: Params$Resource$Eventticketobject$Modifylinkedofferobjects,
      options: MethodOptions | BodyResponseCallback<Schema$EventTicketObject>,
      callback: BodyResponseCallback<Schema$EventTicketObject>
    ): void;
    modifylinkedofferobjects(
      params: Params$Resource$Eventticketobject$Modifylinkedofferobjects,
      callback: BodyResponseCallback<Schema$EventTicketObject>
    ): void;
    modifylinkedofferobjects(
      callback: BodyResponseCallback<Schema$EventTicketObject>
    ): void;
    modifylinkedofferobjects(
      paramsOrCallback?:
        | Params$Resource$Eventticketobject$Modifylinkedofferobjects
        | BodyResponseCallback<Schema$EventTicketObject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventTicketObject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventTicketObject>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$EventTicketObject>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Eventticketobject$Modifylinkedofferobjects;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Eventticketobject$Modifylinkedofferobjects;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/walletobjects/v1/eventTicketObject/{resourceId}/modifyLinkedOfferObjects'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EventTicketObject>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventTicketObject>(parameters);
      }
    }

    /**
     * Updates the event ticket object referenced by the given object ID. This method supports patch semantics.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Eventticketobject$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Eventticketobject$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EventTicketObject>;
    patch(
      params: Params$Resource$Eventticketobject$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Eventticketobject$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$EventTicketObject>,
      callback: BodyResponseCallback<Schema$EventTicketObject>
    ): void;
    patch(
      params: Params$Resource$Eventticketobject$Patch,
      callback: BodyResponseCallback<Schema$EventTicketObject>
    ): void;
    patch(callback: BodyResponseCallback<Schema$EventTicketObject>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Eventticketobject$Patch
        | BodyResponseCallback<Schema$EventTicketObject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventTicketObject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventTicketObject>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$EventTicketObject>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Eventticketobject$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Eventticketobject$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/eventTicketObject/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EventTicketObject>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventTicketObject>(parameters);
      }
    }

    /**
     * Updates the event ticket object referenced by the given object ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Eventticketobject$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Eventticketobject$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EventTicketObject>;
    update(
      params: Params$Resource$Eventticketobject$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Eventticketobject$Update,
      options: MethodOptions | BodyResponseCallback<Schema$EventTicketObject>,
      callback: BodyResponseCallback<Schema$EventTicketObject>
    ): void;
    update(
      params: Params$Resource$Eventticketobject$Update,
      callback: BodyResponseCallback<Schema$EventTicketObject>
    ): void;
    update(callback: BodyResponseCallback<Schema$EventTicketObject>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Eventticketobject$Update
        | BodyResponseCallback<Schema$EventTicketObject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventTicketObject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventTicketObject>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$EventTicketObject>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Eventticketobject$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Eventticketobject$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/eventTicketObject/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EventTicketObject>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventTicketObject>(parameters);
      }
    }
  }

  export interface Params$Resource$Eventticketobject$Addmessage
    extends StandardParameters {
    /**
     * The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddMessageRequest;
  }
  export interface Params$Resource$Eventticketobject$Get
    extends StandardParameters {
    /**
     * The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;
  }
  export interface Params$Resource$Eventticketobject$Insert
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$EventTicketObject;
  }
  export interface Params$Resource$Eventticketobject$List
    extends StandardParameters {
    /**
     * The ID of the class whose objects will be listed.
     */
    classId?: string;
    /**
     * Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     */
    maxResults?: number;
    /**
     * Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
     */
    token?: string;
  }
  export interface Params$Resource$Eventticketobject$Modifylinkedofferobjects
    extends StandardParameters {
    /**
     * The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ModifyLinkedOfferObjectsRequest;
  }
  export interface Params$Resource$Eventticketobject$Patch
    extends StandardParameters {
    /**
     * The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EventTicketObject;
  }
  export interface Params$Resource$Eventticketobject$Update
    extends StandardParameters {
    /**
     * The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EventTicketObject;
  }

  export class Resource$Flightclass {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Adds a message to the flight class referenced by the given class ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    addmessage(
      params: Params$Resource$Flightclass$Addmessage,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    addmessage(
      params?: Params$Resource$Flightclass$Addmessage,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FlightClassAddMessageResponse>;
    addmessage(
      params: Params$Resource$Flightclass$Addmessage,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    addmessage(
      params: Params$Resource$Flightclass$Addmessage,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FlightClassAddMessageResponse>,
      callback: BodyResponseCallback<Schema$FlightClassAddMessageResponse>
    ): void;
    addmessage(
      params: Params$Resource$Flightclass$Addmessage,
      callback: BodyResponseCallback<Schema$FlightClassAddMessageResponse>
    ): void;
    addmessage(
      callback: BodyResponseCallback<Schema$FlightClassAddMessageResponse>
    ): void;
    addmessage(
      paramsOrCallback?:
        | Params$Resource$Flightclass$Addmessage
        | BodyResponseCallback<Schema$FlightClassAddMessageResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FlightClassAddMessageResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FlightClassAddMessageResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$FlightClassAddMessageResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Flightclass$Addmessage;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Flightclass$Addmessage;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/flightClass/{resourceId}/addMessage'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FlightClassAddMessageResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FlightClassAddMessageResponse>(
          parameters
        );
      }
    }

    /**
     * Returns the flight class with the given class ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Flightclass$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Flightclass$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FlightClass>;
    get(
      params: Params$Resource$Flightclass$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Flightclass$Get,
      options: MethodOptions | BodyResponseCallback<Schema$FlightClass>,
      callback: BodyResponseCallback<Schema$FlightClass>
    ): void;
    get(
      params: Params$Resource$Flightclass$Get,
      callback: BodyResponseCallback<Schema$FlightClass>
    ): void;
    get(callback: BodyResponseCallback<Schema$FlightClass>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Flightclass$Get
        | BodyResponseCallback<Schema$FlightClass>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FlightClass>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FlightClass>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$FlightClass> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Flightclass$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Flightclass$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/flightClass/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FlightClass>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FlightClass>(parameters);
      }
    }

    /**
     * Inserts an flight class with the given ID and properties.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Flightclass$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Flightclass$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FlightClass>;
    insert(
      params: Params$Resource$Flightclass$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Flightclass$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$FlightClass>,
      callback: BodyResponseCallback<Schema$FlightClass>
    ): void;
    insert(
      params: Params$Resource$Flightclass$Insert,
      callback: BodyResponseCallback<Schema$FlightClass>
    ): void;
    insert(callback: BodyResponseCallback<Schema$FlightClass>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Flightclass$Insert
        | BodyResponseCallback<Schema$FlightClass>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FlightClass>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FlightClass>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$FlightClass> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Flightclass$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Flightclass$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/flightClass').replace(
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
        createAPIRequest<Schema$FlightClass>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FlightClass>(parameters);
      }
    }

    /**
     * Returns a list of all flight classes for a given issuer ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Flightclass$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Flightclass$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FlightClassListResponse>;
    list(
      params: Params$Resource$Flightclass$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Flightclass$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FlightClassListResponse>,
      callback: BodyResponseCallback<Schema$FlightClassListResponse>
    ): void;
    list(
      params: Params$Resource$Flightclass$List,
      callback: BodyResponseCallback<Schema$FlightClassListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$FlightClassListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Flightclass$List
        | BodyResponseCallback<Schema$FlightClassListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FlightClassListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FlightClassListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$FlightClassListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Flightclass$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Flightclass$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/flightClass').replace(
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
        createAPIRequest<Schema$FlightClassListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FlightClassListResponse>(parameters);
      }
    }

    /**
     * Updates the flight class referenced by the given class ID. This method supports patch semantics.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Flightclass$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Flightclass$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FlightClass>;
    patch(
      params: Params$Resource$Flightclass$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Flightclass$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$FlightClass>,
      callback: BodyResponseCallback<Schema$FlightClass>
    ): void;
    patch(
      params: Params$Resource$Flightclass$Patch,
      callback: BodyResponseCallback<Schema$FlightClass>
    ): void;
    patch(callback: BodyResponseCallback<Schema$FlightClass>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Flightclass$Patch
        | BodyResponseCallback<Schema$FlightClass>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FlightClass>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FlightClass>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$FlightClass> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Flightclass$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Flightclass$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/flightClass/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FlightClass>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FlightClass>(parameters);
      }
    }

    /**
     * Updates the flight class referenced by the given class ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Flightclass$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Flightclass$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FlightClass>;
    update(
      params: Params$Resource$Flightclass$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Flightclass$Update,
      options: MethodOptions | BodyResponseCallback<Schema$FlightClass>,
      callback: BodyResponseCallback<Schema$FlightClass>
    ): void;
    update(
      params: Params$Resource$Flightclass$Update,
      callback: BodyResponseCallback<Schema$FlightClass>
    ): void;
    update(callback: BodyResponseCallback<Schema$FlightClass>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Flightclass$Update
        | BodyResponseCallback<Schema$FlightClass>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FlightClass>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FlightClass>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$FlightClass> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Flightclass$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Flightclass$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/flightClass/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FlightClass>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FlightClass>(parameters);
      }
    }
  }

  export interface Params$Resource$Flightclass$Addmessage
    extends StandardParameters {
    /**
     * The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddMessageRequest;
  }
  export interface Params$Resource$Flightclass$Get extends StandardParameters {
    /**
     * The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;
  }
  export interface Params$Resource$Flightclass$Insert
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$FlightClass;
  }
  export interface Params$Resource$Flightclass$List extends StandardParameters {
    /**
     * The ID of the issuer authorized to list classes.
     */
    issuerId?: string;
    /**
     * Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     */
    maxResults?: number;
    /**
     * Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
     */
    token?: string;
  }
  export interface Params$Resource$Flightclass$Patch
    extends StandardParameters {
    /**
     * The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FlightClass;
  }
  export interface Params$Resource$Flightclass$Update
    extends StandardParameters {
    /**
     * The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FlightClass;
  }

  export class Resource$Flightobject {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Adds a message to the flight object referenced by the given object ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    addmessage(
      params: Params$Resource$Flightobject$Addmessage,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    addmessage(
      params?: Params$Resource$Flightobject$Addmessage,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FlightObjectAddMessageResponse>;
    addmessage(
      params: Params$Resource$Flightobject$Addmessage,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    addmessage(
      params: Params$Resource$Flightobject$Addmessage,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FlightObjectAddMessageResponse>,
      callback: BodyResponseCallback<Schema$FlightObjectAddMessageResponse>
    ): void;
    addmessage(
      params: Params$Resource$Flightobject$Addmessage,
      callback: BodyResponseCallback<Schema$FlightObjectAddMessageResponse>
    ): void;
    addmessage(
      callback: BodyResponseCallback<Schema$FlightObjectAddMessageResponse>
    ): void;
    addmessage(
      paramsOrCallback?:
        | Params$Resource$Flightobject$Addmessage
        | BodyResponseCallback<Schema$FlightObjectAddMessageResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FlightObjectAddMessageResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FlightObjectAddMessageResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$FlightObjectAddMessageResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Flightobject$Addmessage;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Flightobject$Addmessage;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/flightObject/{resourceId}/addMessage'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FlightObjectAddMessageResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FlightObjectAddMessageResponse>(
          parameters
        );
      }
    }

    /**
     * Returns the flight object with the given object ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Flightobject$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Flightobject$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FlightObject>;
    get(
      params: Params$Resource$Flightobject$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Flightobject$Get,
      options: MethodOptions | BodyResponseCallback<Schema$FlightObject>,
      callback: BodyResponseCallback<Schema$FlightObject>
    ): void;
    get(
      params: Params$Resource$Flightobject$Get,
      callback: BodyResponseCallback<Schema$FlightObject>
    ): void;
    get(callback: BodyResponseCallback<Schema$FlightObject>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Flightobject$Get
        | BodyResponseCallback<Schema$FlightObject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FlightObject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FlightObject>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$FlightObject> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Flightobject$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Flightobject$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/flightObject/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FlightObject>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FlightObject>(parameters);
      }
    }

    /**
     * Inserts an flight object with the given ID and properties.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Flightobject$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Flightobject$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FlightObject>;
    insert(
      params: Params$Resource$Flightobject$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Flightobject$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$FlightObject>,
      callback: BodyResponseCallback<Schema$FlightObject>
    ): void;
    insert(
      params: Params$Resource$Flightobject$Insert,
      callback: BodyResponseCallback<Schema$FlightObject>
    ): void;
    insert(callback: BodyResponseCallback<Schema$FlightObject>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Flightobject$Insert
        | BodyResponseCallback<Schema$FlightObject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FlightObject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FlightObject>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$FlightObject> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Flightobject$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Flightobject$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/flightObject').replace(
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
        createAPIRequest<Schema$FlightObject>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FlightObject>(parameters);
      }
    }

    /**
     * Returns a list of all flight objects for a given issuer ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Flightobject$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Flightobject$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FlightObjectListResponse>;
    list(
      params: Params$Resource$Flightobject$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Flightobject$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FlightObjectListResponse>,
      callback: BodyResponseCallback<Schema$FlightObjectListResponse>
    ): void;
    list(
      params: Params$Resource$Flightobject$List,
      callback: BodyResponseCallback<Schema$FlightObjectListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$FlightObjectListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Flightobject$List
        | BodyResponseCallback<Schema$FlightObjectListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FlightObjectListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FlightObjectListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$FlightObjectListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Flightobject$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Flightobject$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/flightObject').replace(
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
        createAPIRequest<Schema$FlightObjectListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FlightObjectListResponse>(parameters);
      }
    }

    /**
     * Updates the flight object referenced by the given object ID. This method supports patch semantics.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Flightobject$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Flightobject$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FlightObject>;
    patch(
      params: Params$Resource$Flightobject$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Flightobject$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$FlightObject>,
      callback: BodyResponseCallback<Schema$FlightObject>
    ): void;
    patch(
      params: Params$Resource$Flightobject$Patch,
      callback: BodyResponseCallback<Schema$FlightObject>
    ): void;
    patch(callback: BodyResponseCallback<Schema$FlightObject>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Flightobject$Patch
        | BodyResponseCallback<Schema$FlightObject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FlightObject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FlightObject>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$FlightObject> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Flightobject$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Flightobject$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/flightObject/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FlightObject>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FlightObject>(parameters);
      }
    }

    /**
     * Updates the flight object referenced by the given object ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Flightobject$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Flightobject$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FlightObject>;
    update(
      params: Params$Resource$Flightobject$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Flightobject$Update,
      options: MethodOptions | BodyResponseCallback<Schema$FlightObject>,
      callback: BodyResponseCallback<Schema$FlightObject>
    ): void;
    update(
      params: Params$Resource$Flightobject$Update,
      callback: BodyResponseCallback<Schema$FlightObject>
    ): void;
    update(callback: BodyResponseCallback<Schema$FlightObject>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Flightobject$Update
        | BodyResponseCallback<Schema$FlightObject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FlightObject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FlightObject>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$FlightObject> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Flightobject$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Flightobject$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/flightObject/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FlightObject>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FlightObject>(parameters);
      }
    }
  }

  export interface Params$Resource$Flightobject$Addmessage
    extends StandardParameters {
    /**
     * The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddMessageRequest;
  }
  export interface Params$Resource$Flightobject$Get extends StandardParameters {
    /**
     * The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;
  }
  export interface Params$Resource$Flightobject$Insert
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$FlightObject;
  }
  export interface Params$Resource$Flightobject$List
    extends StandardParameters {
    /**
     * The ID of the class whose objects will be listed.
     */
    classId?: string;
    /**
     * Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     */
    maxResults?: number;
    /**
     * Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
     */
    token?: string;
  }
  export interface Params$Resource$Flightobject$Patch
    extends StandardParameters {
    /**
     * The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FlightObject;
  }
  export interface Params$Resource$Flightobject$Update
    extends StandardParameters {
    /**
     * The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FlightObject;
  }

  export class Resource$Genericclass {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns the generic class with the given class ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Genericclass$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Genericclass$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GenericClass>;
    get(
      params: Params$Resource$Genericclass$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Genericclass$Get,
      options: MethodOptions | BodyResponseCallback<Schema$GenericClass>,
      callback: BodyResponseCallback<Schema$GenericClass>
    ): void;
    get(
      params: Params$Resource$Genericclass$Get,
      callback: BodyResponseCallback<Schema$GenericClass>
    ): void;
    get(callback: BodyResponseCallback<Schema$GenericClass>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Genericclass$Get
        | BodyResponseCallback<Schema$GenericClass>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GenericClass>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GenericClass>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$GenericClass> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Genericclass$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Genericclass$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/genericClass/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GenericClass>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GenericClass>(parameters);
      }
    }

    /**
     * Inserts a generic class with the given ID and properties.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Genericclass$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Genericclass$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GenericClass>;
    insert(
      params: Params$Resource$Genericclass$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Genericclass$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$GenericClass>,
      callback: BodyResponseCallback<Schema$GenericClass>
    ): void;
    insert(
      params: Params$Resource$Genericclass$Insert,
      callback: BodyResponseCallback<Schema$GenericClass>
    ): void;
    insert(callback: BodyResponseCallback<Schema$GenericClass>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Genericclass$Insert
        | BodyResponseCallback<Schema$GenericClass>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GenericClass>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GenericClass>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$GenericClass> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Genericclass$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Genericclass$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/genericClass').replace(
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
        createAPIRequest<Schema$GenericClass>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GenericClass>(parameters);
      }
    }

    /**
     * Returns a list of all generic classes for a given issuer ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Genericclass$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Genericclass$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GenericClassListResponse>;
    list(
      params: Params$Resource$Genericclass$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Genericclass$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GenericClassListResponse>,
      callback: BodyResponseCallback<Schema$GenericClassListResponse>
    ): void;
    list(
      params: Params$Resource$Genericclass$List,
      callback: BodyResponseCallback<Schema$GenericClassListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$GenericClassListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Genericclass$List
        | BodyResponseCallback<Schema$GenericClassListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GenericClassListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GenericClassListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GenericClassListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Genericclass$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Genericclass$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/genericClass').replace(
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
        createAPIRequest<Schema$GenericClassListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GenericClassListResponse>(parameters);
      }
    }

    /**
     * Updates the generic class referenced by the given class ID. This method supports patch semantics.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Genericclass$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Genericclass$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GenericClass>;
    patch(
      params: Params$Resource$Genericclass$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Genericclass$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$GenericClass>,
      callback: BodyResponseCallback<Schema$GenericClass>
    ): void;
    patch(
      params: Params$Resource$Genericclass$Patch,
      callback: BodyResponseCallback<Schema$GenericClass>
    ): void;
    patch(callback: BodyResponseCallback<Schema$GenericClass>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Genericclass$Patch
        | BodyResponseCallback<Schema$GenericClass>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GenericClass>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GenericClass>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$GenericClass> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Genericclass$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Genericclass$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/genericClass/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GenericClass>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GenericClass>(parameters);
      }
    }

    /**
     * Updates the Generic class referenced by the given class ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Genericclass$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Genericclass$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GenericClass>;
    update(
      params: Params$Resource$Genericclass$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Genericclass$Update,
      options: MethodOptions | BodyResponseCallback<Schema$GenericClass>,
      callback: BodyResponseCallback<Schema$GenericClass>
    ): void;
    update(
      params: Params$Resource$Genericclass$Update,
      callback: BodyResponseCallback<Schema$GenericClass>
    ): void;
    update(callback: BodyResponseCallback<Schema$GenericClass>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Genericclass$Update
        | BodyResponseCallback<Schema$GenericClass>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GenericClass>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GenericClass>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$GenericClass> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Genericclass$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Genericclass$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/genericClass/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GenericClass>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GenericClass>(parameters);
      }
    }
  }

  export interface Params$Resource$Genericclass$Get extends StandardParameters {
    /**
     * The unique identifier for a class. This ID must be unique across all classes from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.
     */
    resourceId?: string;
  }
  export interface Params$Resource$Genericclass$Insert
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GenericClass;
  }
  export interface Params$Resource$Genericclass$List
    extends StandardParameters {
    /**
     * The ID of the issuer authorized to list classes.
     */
    issuerId?: string;
    /**
     * Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     */
    maxResults?: number;
    /**
     * Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
     */
    token?: string;
  }
  export interface Params$Resource$Genericclass$Patch
    extends StandardParameters {
    /**
     * The unique identifier for a class. This ID must be unique across all classes from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GenericClass;
  }
  export interface Params$Resource$Genericclass$Update
    extends StandardParameters {
    /**
     * The unique identifier for a class. This ID must be unique across all classes from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GenericClass;
  }

  export class Resource$Genericobject {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns the generic object with the given object ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Genericobject$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Genericobject$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GenericObject>;
    get(
      params: Params$Resource$Genericobject$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Genericobject$Get,
      options: MethodOptions | BodyResponseCallback<Schema$GenericObject>,
      callback: BodyResponseCallback<Schema$GenericObject>
    ): void;
    get(
      params: Params$Resource$Genericobject$Get,
      callback: BodyResponseCallback<Schema$GenericObject>
    ): void;
    get(callback: BodyResponseCallback<Schema$GenericObject>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Genericobject$Get
        | BodyResponseCallback<Schema$GenericObject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GenericObject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GenericObject>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$GenericObject> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Genericobject$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Genericobject$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/genericObject/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GenericObject>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GenericObject>(parameters);
      }
    }

    /**
     * Inserts a generic object with the given ID and properties.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Genericobject$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Genericobject$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GenericObject>;
    insert(
      params: Params$Resource$Genericobject$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Genericobject$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$GenericObject>,
      callback: BodyResponseCallback<Schema$GenericObject>
    ): void;
    insert(
      params: Params$Resource$Genericobject$Insert,
      callback: BodyResponseCallback<Schema$GenericObject>
    ): void;
    insert(callback: BodyResponseCallback<Schema$GenericObject>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Genericobject$Insert
        | BodyResponseCallback<Schema$GenericObject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GenericObject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GenericObject>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$GenericObject> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Genericobject$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Genericobject$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/genericObject').replace(
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
        createAPIRequest<Schema$GenericObject>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GenericObject>(parameters);
      }
    }

    /**
     * Returns a list of all generic objects for a given issuer ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Genericobject$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Genericobject$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GenericObjectListResponse>;
    list(
      params: Params$Resource$Genericobject$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Genericobject$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GenericObjectListResponse>,
      callback: BodyResponseCallback<Schema$GenericObjectListResponse>
    ): void;
    list(
      params: Params$Resource$Genericobject$List,
      callback: BodyResponseCallback<Schema$GenericObjectListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GenericObjectListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Genericobject$List
        | BodyResponseCallback<Schema$GenericObjectListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GenericObjectListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GenericObjectListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GenericObjectListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Genericobject$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Genericobject$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/genericObject').replace(
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
        createAPIRequest<Schema$GenericObjectListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GenericObjectListResponse>(parameters);
      }
    }

    /**
     * Updates the generic object referenced by the given object ID. This method supports patch semantics.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Genericobject$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Genericobject$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GenericObject>;
    patch(
      params: Params$Resource$Genericobject$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Genericobject$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$GenericObject>,
      callback: BodyResponseCallback<Schema$GenericObject>
    ): void;
    patch(
      params: Params$Resource$Genericobject$Patch,
      callback: BodyResponseCallback<Schema$GenericObject>
    ): void;
    patch(callback: BodyResponseCallback<Schema$GenericObject>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Genericobject$Patch
        | BodyResponseCallback<Schema$GenericObject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GenericObject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GenericObject>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$GenericObject> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Genericobject$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Genericobject$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/genericObject/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GenericObject>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GenericObject>(parameters);
      }
    }

    /**
     * Updates the generic object referenced by the given object ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Genericobject$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Genericobject$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GenericObject>;
    update(
      params: Params$Resource$Genericobject$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Genericobject$Update,
      options: MethodOptions | BodyResponseCallback<Schema$GenericObject>,
      callback: BodyResponseCallback<Schema$GenericObject>
    ): void;
    update(
      params: Params$Resource$Genericobject$Update,
      callback: BodyResponseCallback<Schema$GenericObject>
    ): void;
    update(callback: BodyResponseCallback<Schema$GenericObject>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Genericobject$Update
        | BodyResponseCallback<Schema$GenericObject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GenericObject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GenericObject>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$GenericObject> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Genericobject$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Genericobject$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/genericObject/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GenericObject>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GenericObject>(parameters);
      }
    }
  }

  export interface Params$Resource$Genericobject$Get
    extends StandardParameters {
    /**
     * The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.
     */
    resourceId?: string;
  }
  export interface Params$Resource$Genericobject$Insert
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GenericObject;
  }
  export interface Params$Resource$Genericobject$List
    extends StandardParameters {
    /**
     * The ID of the class whose objects will be listed.
     */
    classId?: string;
    /**
     * Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     */
    maxResults?: number;
    /**
     * Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
     */
    token?: string;
  }
  export interface Params$Resource$Genericobject$Patch
    extends StandardParameters {
    /**
     * The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GenericObject;
  }
  export interface Params$Resource$Genericobject$Update
    extends StandardParameters {
    /**
     * The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GenericObject;
  }

  export class Resource$Giftcardclass {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Adds a message to the gift card class referenced by the given class ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    addmessage(
      params: Params$Resource$Giftcardclass$Addmessage,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    addmessage(
      params?: Params$Resource$Giftcardclass$Addmessage,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GiftCardClassAddMessageResponse>;
    addmessage(
      params: Params$Resource$Giftcardclass$Addmessage,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    addmessage(
      params: Params$Resource$Giftcardclass$Addmessage,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GiftCardClassAddMessageResponse>,
      callback: BodyResponseCallback<Schema$GiftCardClassAddMessageResponse>
    ): void;
    addmessage(
      params: Params$Resource$Giftcardclass$Addmessage,
      callback: BodyResponseCallback<Schema$GiftCardClassAddMessageResponse>
    ): void;
    addmessage(
      callback: BodyResponseCallback<Schema$GiftCardClassAddMessageResponse>
    ): void;
    addmessage(
      paramsOrCallback?:
        | Params$Resource$Giftcardclass$Addmessage
        | BodyResponseCallback<Schema$GiftCardClassAddMessageResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GiftCardClassAddMessageResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GiftCardClassAddMessageResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GiftCardClassAddMessageResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Giftcardclass$Addmessage;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Giftcardclass$Addmessage;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/walletobjects/v1/giftCardClass/{resourceId}/addMessage'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GiftCardClassAddMessageResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GiftCardClassAddMessageResponse>(
          parameters
        );
      }
    }

    /**
     * Returns the gift card class with the given class ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Giftcardclass$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Giftcardclass$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GiftCardClass>;
    get(
      params: Params$Resource$Giftcardclass$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Giftcardclass$Get,
      options: MethodOptions | BodyResponseCallback<Schema$GiftCardClass>,
      callback: BodyResponseCallback<Schema$GiftCardClass>
    ): void;
    get(
      params: Params$Resource$Giftcardclass$Get,
      callback: BodyResponseCallback<Schema$GiftCardClass>
    ): void;
    get(callback: BodyResponseCallback<Schema$GiftCardClass>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Giftcardclass$Get
        | BodyResponseCallback<Schema$GiftCardClass>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GiftCardClass>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GiftCardClass>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$GiftCardClass> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Giftcardclass$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Giftcardclass$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/giftCardClass/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GiftCardClass>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GiftCardClass>(parameters);
      }
    }

    /**
     * Inserts an gift card class with the given ID and properties.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Giftcardclass$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Giftcardclass$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GiftCardClass>;
    insert(
      params: Params$Resource$Giftcardclass$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Giftcardclass$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$GiftCardClass>,
      callback: BodyResponseCallback<Schema$GiftCardClass>
    ): void;
    insert(
      params: Params$Resource$Giftcardclass$Insert,
      callback: BodyResponseCallback<Schema$GiftCardClass>
    ): void;
    insert(callback: BodyResponseCallback<Schema$GiftCardClass>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Giftcardclass$Insert
        | BodyResponseCallback<Schema$GiftCardClass>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GiftCardClass>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GiftCardClass>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$GiftCardClass> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Giftcardclass$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Giftcardclass$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/giftCardClass').replace(
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
        createAPIRequest<Schema$GiftCardClass>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GiftCardClass>(parameters);
      }
    }

    /**
     * Returns a list of all gift card classes for a given issuer ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Giftcardclass$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Giftcardclass$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GiftCardClassListResponse>;
    list(
      params: Params$Resource$Giftcardclass$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Giftcardclass$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GiftCardClassListResponse>,
      callback: BodyResponseCallback<Schema$GiftCardClassListResponse>
    ): void;
    list(
      params: Params$Resource$Giftcardclass$List,
      callback: BodyResponseCallback<Schema$GiftCardClassListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GiftCardClassListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Giftcardclass$List
        | BodyResponseCallback<Schema$GiftCardClassListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GiftCardClassListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GiftCardClassListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GiftCardClassListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Giftcardclass$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Giftcardclass$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/giftCardClass').replace(
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
        createAPIRequest<Schema$GiftCardClassListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GiftCardClassListResponse>(parameters);
      }
    }

    /**
     * Updates the gift card class referenced by the given class ID. This method supports patch semantics.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Giftcardclass$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Giftcardclass$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GiftCardClass>;
    patch(
      params: Params$Resource$Giftcardclass$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Giftcardclass$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$GiftCardClass>,
      callback: BodyResponseCallback<Schema$GiftCardClass>
    ): void;
    patch(
      params: Params$Resource$Giftcardclass$Patch,
      callback: BodyResponseCallback<Schema$GiftCardClass>
    ): void;
    patch(callback: BodyResponseCallback<Schema$GiftCardClass>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Giftcardclass$Patch
        | BodyResponseCallback<Schema$GiftCardClass>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GiftCardClass>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GiftCardClass>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$GiftCardClass> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Giftcardclass$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Giftcardclass$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/giftCardClass/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GiftCardClass>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GiftCardClass>(parameters);
      }
    }

    /**
     * Updates the gift card class referenced by the given class ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Giftcardclass$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Giftcardclass$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GiftCardClass>;
    update(
      params: Params$Resource$Giftcardclass$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Giftcardclass$Update,
      options: MethodOptions | BodyResponseCallback<Schema$GiftCardClass>,
      callback: BodyResponseCallback<Schema$GiftCardClass>
    ): void;
    update(
      params: Params$Resource$Giftcardclass$Update,
      callback: BodyResponseCallback<Schema$GiftCardClass>
    ): void;
    update(callback: BodyResponseCallback<Schema$GiftCardClass>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Giftcardclass$Update
        | BodyResponseCallback<Schema$GiftCardClass>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GiftCardClass>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GiftCardClass>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$GiftCardClass> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Giftcardclass$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Giftcardclass$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/giftCardClass/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GiftCardClass>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GiftCardClass>(parameters);
      }
    }
  }

  export interface Params$Resource$Giftcardclass$Addmessage
    extends StandardParameters {
    /**
     * The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddMessageRequest;
  }
  export interface Params$Resource$Giftcardclass$Get
    extends StandardParameters {
    /**
     * The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;
  }
  export interface Params$Resource$Giftcardclass$Insert
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GiftCardClass;
  }
  export interface Params$Resource$Giftcardclass$List
    extends StandardParameters {
    /**
     * The ID of the issuer authorized to list classes.
     */
    issuerId?: string;
    /**
     * Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     */
    maxResults?: number;
    /**
     * Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
     */
    token?: string;
  }
  export interface Params$Resource$Giftcardclass$Patch
    extends StandardParameters {
    /**
     * The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GiftCardClass;
  }
  export interface Params$Resource$Giftcardclass$Update
    extends StandardParameters {
    /**
     * The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GiftCardClass;
  }

  export class Resource$Giftcardobject {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Adds a message to the gift card object referenced by the given object ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    addmessage(
      params: Params$Resource$Giftcardobject$Addmessage,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    addmessage(
      params?: Params$Resource$Giftcardobject$Addmessage,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GiftCardObjectAddMessageResponse>;
    addmessage(
      params: Params$Resource$Giftcardobject$Addmessage,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    addmessage(
      params: Params$Resource$Giftcardobject$Addmessage,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GiftCardObjectAddMessageResponse>,
      callback: BodyResponseCallback<Schema$GiftCardObjectAddMessageResponse>
    ): void;
    addmessage(
      params: Params$Resource$Giftcardobject$Addmessage,
      callback: BodyResponseCallback<Schema$GiftCardObjectAddMessageResponse>
    ): void;
    addmessage(
      callback: BodyResponseCallback<Schema$GiftCardObjectAddMessageResponse>
    ): void;
    addmessage(
      paramsOrCallback?:
        | Params$Resource$Giftcardobject$Addmessage
        | BodyResponseCallback<Schema$GiftCardObjectAddMessageResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GiftCardObjectAddMessageResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GiftCardObjectAddMessageResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GiftCardObjectAddMessageResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Giftcardobject$Addmessage;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Giftcardobject$Addmessage;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/walletobjects/v1/giftCardObject/{resourceId}/addMessage'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GiftCardObjectAddMessageResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GiftCardObjectAddMessageResponse>(
          parameters
        );
      }
    }

    /**
     * Returns the gift card object with the given object ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Giftcardobject$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Giftcardobject$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GiftCardObject>;
    get(
      params: Params$Resource$Giftcardobject$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Giftcardobject$Get,
      options: MethodOptions | BodyResponseCallback<Schema$GiftCardObject>,
      callback: BodyResponseCallback<Schema$GiftCardObject>
    ): void;
    get(
      params: Params$Resource$Giftcardobject$Get,
      callback: BodyResponseCallback<Schema$GiftCardObject>
    ): void;
    get(callback: BodyResponseCallback<Schema$GiftCardObject>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Giftcardobject$Get
        | BodyResponseCallback<Schema$GiftCardObject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GiftCardObject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GiftCardObject>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$GiftCardObject> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Giftcardobject$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Giftcardobject$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/giftCardObject/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GiftCardObject>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GiftCardObject>(parameters);
      }
    }

    /**
     * Inserts an gift card object with the given ID and properties.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Giftcardobject$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Giftcardobject$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GiftCardObject>;
    insert(
      params: Params$Resource$Giftcardobject$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Giftcardobject$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$GiftCardObject>,
      callback: BodyResponseCallback<Schema$GiftCardObject>
    ): void;
    insert(
      params: Params$Resource$Giftcardobject$Insert,
      callback: BodyResponseCallback<Schema$GiftCardObject>
    ): void;
    insert(callback: BodyResponseCallback<Schema$GiftCardObject>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Giftcardobject$Insert
        | BodyResponseCallback<Schema$GiftCardObject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GiftCardObject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GiftCardObject>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$GiftCardObject> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Giftcardobject$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Giftcardobject$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/giftCardObject').replace(
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
        createAPIRequest<Schema$GiftCardObject>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GiftCardObject>(parameters);
      }
    }

    /**
     * Returns a list of all gift card objects for a given issuer ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Giftcardobject$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Giftcardobject$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GiftCardObjectListResponse>;
    list(
      params: Params$Resource$Giftcardobject$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Giftcardobject$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GiftCardObjectListResponse>,
      callback: BodyResponseCallback<Schema$GiftCardObjectListResponse>
    ): void;
    list(
      params: Params$Resource$Giftcardobject$List,
      callback: BodyResponseCallback<Schema$GiftCardObjectListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GiftCardObjectListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Giftcardobject$List
        | BodyResponseCallback<Schema$GiftCardObjectListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GiftCardObjectListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GiftCardObjectListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GiftCardObjectListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Giftcardobject$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Giftcardobject$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/giftCardObject').replace(
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
        createAPIRequest<Schema$GiftCardObjectListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GiftCardObjectListResponse>(parameters);
      }
    }

    /**
     * Updates the gift card object referenced by the given object ID. This method supports patch semantics.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Giftcardobject$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Giftcardobject$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GiftCardObject>;
    patch(
      params: Params$Resource$Giftcardobject$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Giftcardobject$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$GiftCardObject>,
      callback: BodyResponseCallback<Schema$GiftCardObject>
    ): void;
    patch(
      params: Params$Resource$Giftcardobject$Patch,
      callback: BodyResponseCallback<Schema$GiftCardObject>
    ): void;
    patch(callback: BodyResponseCallback<Schema$GiftCardObject>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Giftcardobject$Patch
        | BodyResponseCallback<Schema$GiftCardObject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GiftCardObject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GiftCardObject>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$GiftCardObject> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Giftcardobject$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Giftcardobject$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/giftCardObject/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GiftCardObject>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GiftCardObject>(parameters);
      }
    }

    /**
     * Updates the gift card object referenced by the given object ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Giftcardobject$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Giftcardobject$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GiftCardObject>;
    update(
      params: Params$Resource$Giftcardobject$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Giftcardobject$Update,
      options: MethodOptions | BodyResponseCallback<Schema$GiftCardObject>,
      callback: BodyResponseCallback<Schema$GiftCardObject>
    ): void;
    update(
      params: Params$Resource$Giftcardobject$Update,
      callback: BodyResponseCallback<Schema$GiftCardObject>
    ): void;
    update(callback: BodyResponseCallback<Schema$GiftCardObject>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Giftcardobject$Update
        | BodyResponseCallback<Schema$GiftCardObject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GiftCardObject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GiftCardObject>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$GiftCardObject> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Giftcardobject$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Giftcardobject$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/giftCardObject/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GiftCardObject>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GiftCardObject>(parameters);
      }
    }
  }

  export interface Params$Resource$Giftcardobject$Addmessage
    extends StandardParameters {
    /**
     * The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddMessageRequest;
  }
  export interface Params$Resource$Giftcardobject$Get
    extends StandardParameters {
    /**
     * The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;
  }
  export interface Params$Resource$Giftcardobject$Insert
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GiftCardObject;
  }
  export interface Params$Resource$Giftcardobject$List
    extends StandardParameters {
    /**
     * The ID of the class whose objects will be listed.
     */
    classId?: string;
    /**
     * Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     */
    maxResults?: number;
    /**
     * Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
     */
    token?: string;
  }
  export interface Params$Resource$Giftcardobject$Patch
    extends StandardParameters {
    /**
     * The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GiftCardObject;
  }
  export interface Params$Resource$Giftcardobject$Update
    extends StandardParameters {
    /**
     * The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GiftCardObject;
  }

  export class Resource$Issuer {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns the issuer with the given issuer ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Issuer$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Issuer$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Issuer>;
    get(
      params: Params$Resource$Issuer$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Issuer$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Issuer>,
      callback: BodyResponseCallback<Schema$Issuer>
    ): void;
    get(
      params: Params$Resource$Issuer$Get,
      callback: BodyResponseCallback<Schema$Issuer>
    ): void;
    get(callback: BodyResponseCallback<Schema$Issuer>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Issuer$Get
        | BodyResponseCallback<Schema$Issuer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Issuer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Issuer>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Issuer> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Issuer$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Issuer$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/issuer/{resourceId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Issuer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Issuer>(parameters);
      }
    }

    /**
     * Inserts an issuer with the given ID and properties.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Issuer$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Issuer$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Issuer>;
    insert(
      params: Params$Resource$Issuer$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Issuer$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Issuer>,
      callback: BodyResponseCallback<Schema$Issuer>
    ): void;
    insert(
      params: Params$Resource$Issuer$Insert,
      callback: BodyResponseCallback<Schema$Issuer>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Issuer>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Issuer$Insert
        | BodyResponseCallback<Schema$Issuer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Issuer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Issuer>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Issuer> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Issuer$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Issuer$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/issuer').replace(
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
        createAPIRequest<Schema$Issuer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Issuer>(parameters);
      }
    }

    /**
     * Returns a list of all issuers shared to the caller.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Issuer$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Issuer$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$IssuerListResponse>;
    list(
      params: Params$Resource$Issuer$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Issuer$List,
      options: MethodOptions | BodyResponseCallback<Schema$IssuerListResponse>,
      callback: BodyResponseCallback<Schema$IssuerListResponse>
    ): void;
    list(
      params: Params$Resource$Issuer$List,
      callback: BodyResponseCallback<Schema$IssuerListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$IssuerListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Issuer$List
        | BodyResponseCallback<Schema$IssuerListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$IssuerListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$IssuerListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$IssuerListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Issuer$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Issuer$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/issuer').replace(
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
        createAPIRequest<Schema$IssuerListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$IssuerListResponse>(parameters);
      }
    }

    /**
     * Updates the issuer referenced by the given issuer ID. This method supports patch semantics.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Issuer$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Issuer$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Issuer>;
    patch(
      params: Params$Resource$Issuer$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Issuer$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Issuer>,
      callback: BodyResponseCallback<Schema$Issuer>
    ): void;
    patch(
      params: Params$Resource$Issuer$Patch,
      callback: BodyResponseCallback<Schema$Issuer>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Issuer>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Issuer$Patch
        | BodyResponseCallback<Schema$Issuer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Issuer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Issuer>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Issuer> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Issuer$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Issuer$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/issuer/{resourceId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Issuer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Issuer>(parameters);
      }
    }

    /**
     * Updates the issuer referenced by the given issuer ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Issuer$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Issuer$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Issuer>;
    update(
      params: Params$Resource$Issuer$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Issuer$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Issuer>,
      callback: BodyResponseCallback<Schema$Issuer>
    ): void;
    update(
      params: Params$Resource$Issuer$Update,
      callback: BodyResponseCallback<Schema$Issuer>
    ): void;
    update(callback: BodyResponseCallback<Schema$Issuer>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Issuer$Update
        | BodyResponseCallback<Schema$Issuer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Issuer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Issuer>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Issuer> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Issuer$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Issuer$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/issuer/{resourceId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Issuer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Issuer>(parameters);
      }
    }
  }

  export interface Params$Resource$Issuer$Get extends StandardParameters {
    /**
     * The unique identifier for an issuer.
     */
    resourceId?: string;
  }
  export interface Params$Resource$Issuer$Insert extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$Issuer;
  }
  export interface Params$Resource$Issuer$List extends StandardParameters {}
  export interface Params$Resource$Issuer$Patch extends StandardParameters {
    /**
     * The unique identifier for an issuer.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Issuer;
  }
  export interface Params$Resource$Issuer$Update extends StandardParameters {
    /**
     * The unique identifier for an issuer.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Issuer;
  }

  export class Resource$Jwt {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Inserts the resources in the JWT.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Jwt$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Jwt$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$JwtInsertResponse>;
    insert(
      params: Params$Resource$Jwt$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Jwt$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$JwtInsertResponse>,
      callback: BodyResponseCallback<Schema$JwtInsertResponse>
    ): void;
    insert(
      params: Params$Resource$Jwt$Insert,
      callback: BodyResponseCallback<Schema$JwtInsertResponse>
    ): void;
    insert(callback: BodyResponseCallback<Schema$JwtInsertResponse>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Jwt$Insert
        | BodyResponseCallback<Schema$JwtInsertResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$JwtInsertResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$JwtInsertResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$JwtInsertResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Jwt$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jwt$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/jwt').replace(
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
        createAPIRequest<Schema$JwtInsertResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$JwtInsertResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Jwt$Insert extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$JwtResource;
  }

  export class Resource$Loyaltyclass {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Adds a message to the loyalty class referenced by the given class ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    addmessage(
      params: Params$Resource$Loyaltyclass$Addmessage,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    addmessage(
      params?: Params$Resource$Loyaltyclass$Addmessage,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LoyaltyClassAddMessageResponse>;
    addmessage(
      params: Params$Resource$Loyaltyclass$Addmessage,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    addmessage(
      params: Params$Resource$Loyaltyclass$Addmessage,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LoyaltyClassAddMessageResponse>,
      callback: BodyResponseCallback<Schema$LoyaltyClassAddMessageResponse>
    ): void;
    addmessage(
      params: Params$Resource$Loyaltyclass$Addmessage,
      callback: BodyResponseCallback<Schema$LoyaltyClassAddMessageResponse>
    ): void;
    addmessage(
      callback: BodyResponseCallback<Schema$LoyaltyClassAddMessageResponse>
    ): void;
    addmessage(
      paramsOrCallback?:
        | Params$Resource$Loyaltyclass$Addmessage
        | BodyResponseCallback<Schema$LoyaltyClassAddMessageResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LoyaltyClassAddMessageResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LoyaltyClassAddMessageResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$LoyaltyClassAddMessageResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Loyaltyclass$Addmessage;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Loyaltyclass$Addmessage;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/loyaltyClass/{resourceId}/addMessage'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LoyaltyClassAddMessageResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LoyaltyClassAddMessageResponse>(
          parameters
        );
      }
    }

    /**
     * Returns the loyalty class with the given class ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Loyaltyclass$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Loyaltyclass$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LoyaltyClass>;
    get(
      params: Params$Resource$Loyaltyclass$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Loyaltyclass$Get,
      options: MethodOptions | BodyResponseCallback<Schema$LoyaltyClass>,
      callback: BodyResponseCallback<Schema$LoyaltyClass>
    ): void;
    get(
      params: Params$Resource$Loyaltyclass$Get,
      callback: BodyResponseCallback<Schema$LoyaltyClass>
    ): void;
    get(callback: BodyResponseCallback<Schema$LoyaltyClass>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Loyaltyclass$Get
        | BodyResponseCallback<Schema$LoyaltyClass>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LoyaltyClass>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LoyaltyClass>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$LoyaltyClass> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Loyaltyclass$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Loyaltyclass$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/loyaltyClass/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LoyaltyClass>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LoyaltyClass>(parameters);
      }
    }

    /**
     * Inserts an loyalty class with the given ID and properties.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Loyaltyclass$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Loyaltyclass$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LoyaltyClass>;
    insert(
      params: Params$Resource$Loyaltyclass$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Loyaltyclass$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$LoyaltyClass>,
      callback: BodyResponseCallback<Schema$LoyaltyClass>
    ): void;
    insert(
      params: Params$Resource$Loyaltyclass$Insert,
      callback: BodyResponseCallback<Schema$LoyaltyClass>
    ): void;
    insert(callback: BodyResponseCallback<Schema$LoyaltyClass>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Loyaltyclass$Insert
        | BodyResponseCallback<Schema$LoyaltyClass>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LoyaltyClass>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LoyaltyClass>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$LoyaltyClass> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Loyaltyclass$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Loyaltyclass$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/loyaltyClass').replace(
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
        createAPIRequest<Schema$LoyaltyClass>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LoyaltyClass>(parameters);
      }
    }

    /**
     * Returns a list of all loyalty classes for a given issuer ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Loyaltyclass$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Loyaltyclass$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LoyaltyClassListResponse>;
    list(
      params: Params$Resource$Loyaltyclass$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Loyaltyclass$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LoyaltyClassListResponse>,
      callback: BodyResponseCallback<Schema$LoyaltyClassListResponse>
    ): void;
    list(
      params: Params$Resource$Loyaltyclass$List,
      callback: BodyResponseCallback<Schema$LoyaltyClassListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$LoyaltyClassListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Loyaltyclass$List
        | BodyResponseCallback<Schema$LoyaltyClassListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LoyaltyClassListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LoyaltyClassListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$LoyaltyClassListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Loyaltyclass$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Loyaltyclass$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/loyaltyClass').replace(
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
        createAPIRequest<Schema$LoyaltyClassListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LoyaltyClassListResponse>(parameters);
      }
    }

    /**
     * Updates the loyalty class referenced by the given class ID. This method supports patch semantics.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Loyaltyclass$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Loyaltyclass$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LoyaltyClass>;
    patch(
      params: Params$Resource$Loyaltyclass$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Loyaltyclass$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$LoyaltyClass>,
      callback: BodyResponseCallback<Schema$LoyaltyClass>
    ): void;
    patch(
      params: Params$Resource$Loyaltyclass$Patch,
      callback: BodyResponseCallback<Schema$LoyaltyClass>
    ): void;
    patch(callback: BodyResponseCallback<Schema$LoyaltyClass>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Loyaltyclass$Patch
        | BodyResponseCallback<Schema$LoyaltyClass>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LoyaltyClass>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LoyaltyClass>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$LoyaltyClass> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Loyaltyclass$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Loyaltyclass$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/loyaltyClass/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LoyaltyClass>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LoyaltyClass>(parameters);
      }
    }

    /**
     * Updates the loyalty class referenced by the given class ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Loyaltyclass$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Loyaltyclass$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LoyaltyClass>;
    update(
      params: Params$Resource$Loyaltyclass$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Loyaltyclass$Update,
      options: MethodOptions | BodyResponseCallback<Schema$LoyaltyClass>,
      callback: BodyResponseCallback<Schema$LoyaltyClass>
    ): void;
    update(
      params: Params$Resource$Loyaltyclass$Update,
      callback: BodyResponseCallback<Schema$LoyaltyClass>
    ): void;
    update(callback: BodyResponseCallback<Schema$LoyaltyClass>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Loyaltyclass$Update
        | BodyResponseCallback<Schema$LoyaltyClass>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LoyaltyClass>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LoyaltyClass>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$LoyaltyClass> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Loyaltyclass$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Loyaltyclass$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/loyaltyClass/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LoyaltyClass>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LoyaltyClass>(parameters);
      }
    }
  }

  export interface Params$Resource$Loyaltyclass$Addmessage
    extends StandardParameters {
    /**
     * The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddMessageRequest;
  }
  export interface Params$Resource$Loyaltyclass$Get extends StandardParameters {
    /**
     * The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;
  }
  export interface Params$Resource$Loyaltyclass$Insert
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$LoyaltyClass;
  }
  export interface Params$Resource$Loyaltyclass$List
    extends StandardParameters {
    /**
     * The ID of the issuer authorized to list classes.
     */
    issuerId?: string;
    /**
     * Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     */
    maxResults?: number;
    /**
     * Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
     */
    token?: string;
  }
  export interface Params$Resource$Loyaltyclass$Patch
    extends StandardParameters {
    /**
     * The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LoyaltyClass;
  }
  export interface Params$Resource$Loyaltyclass$Update
    extends StandardParameters {
    /**
     * The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LoyaltyClass;
  }

  export class Resource$Loyaltyobject {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Adds a message to the loyalty object referenced by the given object ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    addmessage(
      params: Params$Resource$Loyaltyobject$Addmessage,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    addmessage(
      params?: Params$Resource$Loyaltyobject$Addmessage,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LoyaltyObjectAddMessageResponse>;
    addmessage(
      params: Params$Resource$Loyaltyobject$Addmessage,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    addmessage(
      params: Params$Resource$Loyaltyobject$Addmessage,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LoyaltyObjectAddMessageResponse>,
      callback: BodyResponseCallback<Schema$LoyaltyObjectAddMessageResponse>
    ): void;
    addmessage(
      params: Params$Resource$Loyaltyobject$Addmessage,
      callback: BodyResponseCallback<Schema$LoyaltyObjectAddMessageResponse>
    ): void;
    addmessage(
      callback: BodyResponseCallback<Schema$LoyaltyObjectAddMessageResponse>
    ): void;
    addmessage(
      paramsOrCallback?:
        | Params$Resource$Loyaltyobject$Addmessage
        | BodyResponseCallback<Schema$LoyaltyObjectAddMessageResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LoyaltyObjectAddMessageResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LoyaltyObjectAddMessageResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$LoyaltyObjectAddMessageResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Loyaltyobject$Addmessage;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Loyaltyobject$Addmessage;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/walletobjects/v1/loyaltyObject/{resourceId}/addMessage'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LoyaltyObjectAddMessageResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LoyaltyObjectAddMessageResponse>(
          parameters
        );
      }
    }

    /**
     * Returns the loyalty object with the given object ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Loyaltyobject$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Loyaltyobject$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LoyaltyObject>;
    get(
      params: Params$Resource$Loyaltyobject$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Loyaltyobject$Get,
      options: MethodOptions | BodyResponseCallback<Schema$LoyaltyObject>,
      callback: BodyResponseCallback<Schema$LoyaltyObject>
    ): void;
    get(
      params: Params$Resource$Loyaltyobject$Get,
      callback: BodyResponseCallback<Schema$LoyaltyObject>
    ): void;
    get(callback: BodyResponseCallback<Schema$LoyaltyObject>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Loyaltyobject$Get
        | BodyResponseCallback<Schema$LoyaltyObject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LoyaltyObject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LoyaltyObject>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$LoyaltyObject> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Loyaltyobject$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Loyaltyobject$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/loyaltyObject/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LoyaltyObject>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LoyaltyObject>(parameters);
      }
    }

    /**
     * Inserts an loyalty object with the given ID and properties.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Loyaltyobject$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Loyaltyobject$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LoyaltyObject>;
    insert(
      params: Params$Resource$Loyaltyobject$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Loyaltyobject$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$LoyaltyObject>,
      callback: BodyResponseCallback<Schema$LoyaltyObject>
    ): void;
    insert(
      params: Params$Resource$Loyaltyobject$Insert,
      callback: BodyResponseCallback<Schema$LoyaltyObject>
    ): void;
    insert(callback: BodyResponseCallback<Schema$LoyaltyObject>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Loyaltyobject$Insert
        | BodyResponseCallback<Schema$LoyaltyObject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LoyaltyObject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LoyaltyObject>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$LoyaltyObject> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Loyaltyobject$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Loyaltyobject$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/loyaltyObject').replace(
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
        createAPIRequest<Schema$LoyaltyObject>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LoyaltyObject>(parameters);
      }
    }

    /**
     * Returns a list of all loyalty objects for a given issuer ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Loyaltyobject$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Loyaltyobject$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LoyaltyObjectListResponse>;
    list(
      params: Params$Resource$Loyaltyobject$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Loyaltyobject$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LoyaltyObjectListResponse>,
      callback: BodyResponseCallback<Schema$LoyaltyObjectListResponse>
    ): void;
    list(
      params: Params$Resource$Loyaltyobject$List,
      callback: BodyResponseCallback<Schema$LoyaltyObjectListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$LoyaltyObjectListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Loyaltyobject$List
        | BodyResponseCallback<Schema$LoyaltyObjectListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LoyaltyObjectListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LoyaltyObjectListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$LoyaltyObjectListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Loyaltyobject$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Loyaltyobject$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/loyaltyObject').replace(
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
        createAPIRequest<Schema$LoyaltyObjectListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LoyaltyObjectListResponse>(parameters);
      }
    }

    /**
     * Modifies linked offer objects for the loyalty object with the given ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    modifylinkedofferobjects(
      params: Params$Resource$Loyaltyobject$Modifylinkedofferobjects,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    modifylinkedofferobjects(
      params?: Params$Resource$Loyaltyobject$Modifylinkedofferobjects,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LoyaltyObject>;
    modifylinkedofferobjects(
      params: Params$Resource$Loyaltyobject$Modifylinkedofferobjects,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    modifylinkedofferobjects(
      params: Params$Resource$Loyaltyobject$Modifylinkedofferobjects,
      options: MethodOptions | BodyResponseCallback<Schema$LoyaltyObject>,
      callback: BodyResponseCallback<Schema$LoyaltyObject>
    ): void;
    modifylinkedofferobjects(
      params: Params$Resource$Loyaltyobject$Modifylinkedofferobjects,
      callback: BodyResponseCallback<Schema$LoyaltyObject>
    ): void;
    modifylinkedofferobjects(
      callback: BodyResponseCallback<Schema$LoyaltyObject>
    ): void;
    modifylinkedofferobjects(
      paramsOrCallback?:
        | Params$Resource$Loyaltyobject$Modifylinkedofferobjects
        | BodyResponseCallback<Schema$LoyaltyObject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LoyaltyObject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LoyaltyObject>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$LoyaltyObject> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Loyaltyobject$Modifylinkedofferobjects;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Loyaltyobject$Modifylinkedofferobjects;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/walletobjects/v1/loyaltyObject/{resourceId}/modifyLinkedOfferObjects'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LoyaltyObject>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LoyaltyObject>(parameters);
      }
    }

    /**
     * Updates the loyalty object referenced by the given object ID. This method supports patch semantics.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Loyaltyobject$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Loyaltyobject$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LoyaltyObject>;
    patch(
      params: Params$Resource$Loyaltyobject$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Loyaltyobject$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$LoyaltyObject>,
      callback: BodyResponseCallback<Schema$LoyaltyObject>
    ): void;
    patch(
      params: Params$Resource$Loyaltyobject$Patch,
      callback: BodyResponseCallback<Schema$LoyaltyObject>
    ): void;
    patch(callback: BodyResponseCallback<Schema$LoyaltyObject>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Loyaltyobject$Patch
        | BodyResponseCallback<Schema$LoyaltyObject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LoyaltyObject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LoyaltyObject>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$LoyaltyObject> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Loyaltyobject$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Loyaltyobject$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/loyaltyObject/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LoyaltyObject>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LoyaltyObject>(parameters);
      }
    }

    /**
     * Updates the loyalty object referenced by the given object ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Loyaltyobject$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Loyaltyobject$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LoyaltyObject>;
    update(
      params: Params$Resource$Loyaltyobject$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Loyaltyobject$Update,
      options: MethodOptions | BodyResponseCallback<Schema$LoyaltyObject>,
      callback: BodyResponseCallback<Schema$LoyaltyObject>
    ): void;
    update(
      params: Params$Resource$Loyaltyobject$Update,
      callback: BodyResponseCallback<Schema$LoyaltyObject>
    ): void;
    update(callback: BodyResponseCallback<Schema$LoyaltyObject>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Loyaltyobject$Update
        | BodyResponseCallback<Schema$LoyaltyObject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LoyaltyObject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LoyaltyObject>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$LoyaltyObject> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Loyaltyobject$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Loyaltyobject$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/loyaltyObject/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LoyaltyObject>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LoyaltyObject>(parameters);
      }
    }
  }

  export interface Params$Resource$Loyaltyobject$Addmessage
    extends StandardParameters {
    /**
     * The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddMessageRequest;
  }
  export interface Params$Resource$Loyaltyobject$Get
    extends StandardParameters {
    /**
     * The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;
  }
  export interface Params$Resource$Loyaltyobject$Insert
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$LoyaltyObject;
  }
  export interface Params$Resource$Loyaltyobject$List
    extends StandardParameters {
    /**
     * The ID of the class whose objects will be listed.
     */
    classId?: string;
    /**
     * Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     */
    maxResults?: number;
    /**
     * Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
     */
    token?: string;
  }
  export interface Params$Resource$Loyaltyobject$Modifylinkedofferobjects
    extends StandardParameters {
    /**
     * The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ModifyLinkedOfferObjectsRequest;
  }
  export interface Params$Resource$Loyaltyobject$Patch
    extends StandardParameters {
    /**
     * The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LoyaltyObject;
  }
  export interface Params$Resource$Loyaltyobject$Update
    extends StandardParameters {
    /**
     * The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LoyaltyObject;
  }

  export class Resource$Media {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Downloads rotating barcode values for the transit object referenced by the given object ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    download(
      params: Params$Resource$Media$Download,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    download(
      params?: Params$Resource$Media$Download,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Media>;
    download(
      params: Params$Resource$Media$Download,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    download(
      params: Params$Resource$Media$Download,
      options: MethodOptions | BodyResponseCallback<Schema$Media>,
      callback: BodyResponseCallback<Schema$Media>
    ): void;
    download(
      params: Params$Resource$Media$Download,
      callback: BodyResponseCallback<Schema$Media>
    ): void;
    download(callback: BodyResponseCallback<Schema$Media>): void;
    download(
      paramsOrCallback?:
        | Params$Resource$Media$Download
        | BodyResponseCallback<Schema$Media>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Media>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Media>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Media> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Media$Download;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Media$Download;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/walletobjects/v1/transitObject/{resourceId}/downloadRotatingBarcodeValues'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Media>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Media>(parameters);
      }
    }

    /**
     * Uploads rotating barcode values for the transit object referenced by the given object ID. Note the max upload size is specified in google3/production/config/cdd/apps-upload/customers/payments-consumer-passes/config.gcl and enforced by Scotty.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    upload(
      params: Params$Resource$Media$Upload,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    upload(
      params?: Params$Resource$Media$Upload,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TransitObjectUploadRotatingBarcodeValuesResponse>;
    upload(
      params: Params$Resource$Media$Upload,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    upload(
      params: Params$Resource$Media$Upload,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TransitObjectUploadRotatingBarcodeValuesResponse>,
      callback: BodyResponseCallback<Schema$TransitObjectUploadRotatingBarcodeValuesResponse>
    ): void;
    upload(
      params: Params$Resource$Media$Upload,
      callback: BodyResponseCallback<Schema$TransitObjectUploadRotatingBarcodeValuesResponse>
    ): void;
    upload(
      callback: BodyResponseCallback<Schema$TransitObjectUploadRotatingBarcodeValuesResponse>
    ): void;
    upload(
      paramsOrCallback?:
        | Params$Resource$Media$Upload
        | BodyResponseCallback<Schema$TransitObjectUploadRotatingBarcodeValuesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TransitObjectUploadRotatingBarcodeValuesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TransitObjectUploadRotatingBarcodeValuesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$TransitObjectUploadRotatingBarcodeValuesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Media$Upload;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Media$Upload;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/walletobjects/v1/transitObject/{resourceId}/uploadRotatingBarcodeValues'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (
          rootUrl +
          '/upload/walletobjects/v1/transitObject/{resourceId}/uploadRotatingBarcodeValues'
        ).replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TransitObjectUploadRotatingBarcodeValuesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TransitObjectUploadRotatingBarcodeValuesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Media$Download extends StandardParameters {
    /**
     * The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;
  }
  export interface Params$Resource$Media$Upload extends StandardParameters {
    /**
     * The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TransitObjectUploadRotatingBarcodeValuesRequest;

    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mimeType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }

  export class Resource$Offerclass {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Adds a message to the offer class referenced by the given class ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    addmessage(
      params: Params$Resource$Offerclass$Addmessage,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    addmessage(
      params?: Params$Resource$Offerclass$Addmessage,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OfferClassAddMessageResponse>;
    addmessage(
      params: Params$Resource$Offerclass$Addmessage,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    addmessage(
      params: Params$Resource$Offerclass$Addmessage,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OfferClassAddMessageResponse>,
      callback: BodyResponseCallback<Schema$OfferClassAddMessageResponse>
    ): void;
    addmessage(
      params: Params$Resource$Offerclass$Addmessage,
      callback: BodyResponseCallback<Schema$OfferClassAddMessageResponse>
    ): void;
    addmessage(
      callback: BodyResponseCallback<Schema$OfferClassAddMessageResponse>
    ): void;
    addmessage(
      paramsOrCallback?:
        | Params$Resource$Offerclass$Addmessage
        | BodyResponseCallback<Schema$OfferClassAddMessageResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OfferClassAddMessageResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OfferClassAddMessageResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OfferClassAddMessageResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Offerclass$Addmessage;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Offerclass$Addmessage;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/offerClass/{resourceId}/addMessage'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OfferClassAddMessageResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OfferClassAddMessageResponse>(
          parameters
        );
      }
    }

    /**
     * Returns the offer class with the given class ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Offerclass$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Offerclass$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OfferClass>;
    get(
      params: Params$Resource$Offerclass$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Offerclass$Get,
      options: MethodOptions | BodyResponseCallback<Schema$OfferClass>,
      callback: BodyResponseCallback<Schema$OfferClass>
    ): void;
    get(
      params: Params$Resource$Offerclass$Get,
      callback: BodyResponseCallback<Schema$OfferClass>
    ): void;
    get(callback: BodyResponseCallback<Schema$OfferClass>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Offerclass$Get
        | BodyResponseCallback<Schema$OfferClass>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OfferClass>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OfferClass>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$OfferClass> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Offerclass$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Offerclass$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/offerClass/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OfferClass>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OfferClass>(parameters);
      }
    }

    /**
     * Inserts an offer class with the given ID and properties.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Offerclass$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Offerclass$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OfferClass>;
    insert(
      params: Params$Resource$Offerclass$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Offerclass$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$OfferClass>,
      callback: BodyResponseCallback<Schema$OfferClass>
    ): void;
    insert(
      params: Params$Resource$Offerclass$Insert,
      callback: BodyResponseCallback<Schema$OfferClass>
    ): void;
    insert(callback: BodyResponseCallback<Schema$OfferClass>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Offerclass$Insert
        | BodyResponseCallback<Schema$OfferClass>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OfferClass>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OfferClass>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$OfferClass> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Offerclass$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Offerclass$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/offerClass').replace(
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
        createAPIRequest<Schema$OfferClass>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OfferClass>(parameters);
      }
    }

    /**
     * Returns a list of all offer classes for a given issuer ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Offerclass$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Offerclass$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OfferClassListResponse>;
    list(
      params: Params$Resource$Offerclass$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Offerclass$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OfferClassListResponse>,
      callback: BodyResponseCallback<Schema$OfferClassListResponse>
    ): void;
    list(
      params: Params$Resource$Offerclass$List,
      callback: BodyResponseCallback<Schema$OfferClassListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$OfferClassListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Offerclass$List
        | BodyResponseCallback<Schema$OfferClassListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OfferClassListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OfferClassListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OfferClassListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Offerclass$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Offerclass$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/offerClass').replace(
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
        createAPIRequest<Schema$OfferClassListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OfferClassListResponse>(parameters);
      }
    }

    /**
     * Updates the offer class referenced by the given class ID. This method supports patch semantics.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Offerclass$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Offerclass$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OfferClass>;
    patch(
      params: Params$Resource$Offerclass$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Offerclass$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$OfferClass>,
      callback: BodyResponseCallback<Schema$OfferClass>
    ): void;
    patch(
      params: Params$Resource$Offerclass$Patch,
      callback: BodyResponseCallback<Schema$OfferClass>
    ): void;
    patch(callback: BodyResponseCallback<Schema$OfferClass>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Offerclass$Patch
        | BodyResponseCallback<Schema$OfferClass>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OfferClass>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OfferClass>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$OfferClass> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Offerclass$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Offerclass$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/offerClass/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OfferClass>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OfferClass>(parameters);
      }
    }

    /**
     * Updates the offer class referenced by the given class ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Offerclass$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Offerclass$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OfferClass>;
    update(
      params: Params$Resource$Offerclass$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Offerclass$Update,
      options: MethodOptions | BodyResponseCallback<Schema$OfferClass>,
      callback: BodyResponseCallback<Schema$OfferClass>
    ): void;
    update(
      params: Params$Resource$Offerclass$Update,
      callback: BodyResponseCallback<Schema$OfferClass>
    ): void;
    update(callback: BodyResponseCallback<Schema$OfferClass>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Offerclass$Update
        | BodyResponseCallback<Schema$OfferClass>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OfferClass>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OfferClass>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$OfferClass> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Offerclass$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Offerclass$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/offerClass/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OfferClass>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OfferClass>(parameters);
      }
    }
  }

  export interface Params$Resource$Offerclass$Addmessage
    extends StandardParameters {
    /**
     * The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddMessageRequest;
  }
  export interface Params$Resource$Offerclass$Get extends StandardParameters {
    /**
     * The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;
  }
  export interface Params$Resource$Offerclass$Insert
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$OfferClass;
  }
  export interface Params$Resource$Offerclass$List extends StandardParameters {
    /**
     * The ID of the issuer authorized to list classes.
     */
    issuerId?: string;
    /**
     * Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     */
    maxResults?: number;
    /**
     * Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
     */
    token?: string;
  }
  export interface Params$Resource$Offerclass$Patch extends StandardParameters {
    /**
     * The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OfferClass;
  }
  export interface Params$Resource$Offerclass$Update
    extends StandardParameters {
    /**
     * The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OfferClass;
  }

  export class Resource$Offerobject {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Adds a message to the offer object referenced by the given object ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    addmessage(
      params: Params$Resource$Offerobject$Addmessage,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    addmessage(
      params?: Params$Resource$Offerobject$Addmessage,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OfferObjectAddMessageResponse>;
    addmessage(
      params: Params$Resource$Offerobject$Addmessage,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    addmessage(
      params: Params$Resource$Offerobject$Addmessage,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OfferObjectAddMessageResponse>,
      callback: BodyResponseCallback<Schema$OfferObjectAddMessageResponse>
    ): void;
    addmessage(
      params: Params$Resource$Offerobject$Addmessage,
      callback: BodyResponseCallback<Schema$OfferObjectAddMessageResponse>
    ): void;
    addmessage(
      callback: BodyResponseCallback<Schema$OfferObjectAddMessageResponse>
    ): void;
    addmessage(
      paramsOrCallback?:
        | Params$Resource$Offerobject$Addmessage
        | BodyResponseCallback<Schema$OfferObjectAddMessageResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OfferObjectAddMessageResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OfferObjectAddMessageResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OfferObjectAddMessageResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Offerobject$Addmessage;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Offerobject$Addmessage;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/offerObject/{resourceId}/addMessage'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OfferObjectAddMessageResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OfferObjectAddMessageResponse>(
          parameters
        );
      }
    }

    /**
     * Returns the offer object with the given object ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Offerobject$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Offerobject$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OfferObject>;
    get(
      params: Params$Resource$Offerobject$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Offerobject$Get,
      options: MethodOptions | BodyResponseCallback<Schema$OfferObject>,
      callback: BodyResponseCallback<Schema$OfferObject>
    ): void;
    get(
      params: Params$Resource$Offerobject$Get,
      callback: BodyResponseCallback<Schema$OfferObject>
    ): void;
    get(callback: BodyResponseCallback<Schema$OfferObject>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Offerobject$Get
        | BodyResponseCallback<Schema$OfferObject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OfferObject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OfferObject>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$OfferObject> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Offerobject$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Offerobject$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/offerObject/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OfferObject>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OfferObject>(parameters);
      }
    }

    /**
     * Inserts an offer object with the given ID and properties.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Offerobject$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Offerobject$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OfferObject>;
    insert(
      params: Params$Resource$Offerobject$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Offerobject$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$OfferObject>,
      callback: BodyResponseCallback<Schema$OfferObject>
    ): void;
    insert(
      params: Params$Resource$Offerobject$Insert,
      callback: BodyResponseCallback<Schema$OfferObject>
    ): void;
    insert(callback: BodyResponseCallback<Schema$OfferObject>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Offerobject$Insert
        | BodyResponseCallback<Schema$OfferObject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OfferObject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OfferObject>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$OfferObject> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Offerobject$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Offerobject$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/offerObject').replace(
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
        createAPIRequest<Schema$OfferObject>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OfferObject>(parameters);
      }
    }

    /**
     * Returns a list of all offer objects for a given issuer ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Offerobject$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Offerobject$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OfferObjectListResponse>;
    list(
      params: Params$Resource$Offerobject$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Offerobject$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OfferObjectListResponse>,
      callback: BodyResponseCallback<Schema$OfferObjectListResponse>
    ): void;
    list(
      params: Params$Resource$Offerobject$List,
      callback: BodyResponseCallback<Schema$OfferObjectListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$OfferObjectListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Offerobject$List
        | BodyResponseCallback<Schema$OfferObjectListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OfferObjectListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OfferObjectListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OfferObjectListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Offerobject$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Offerobject$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/offerObject').replace(
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
        createAPIRequest<Schema$OfferObjectListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OfferObjectListResponse>(parameters);
      }
    }

    /**
     * Updates the offer object referenced by the given object ID. This method supports patch semantics.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Offerobject$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Offerobject$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OfferObject>;
    patch(
      params: Params$Resource$Offerobject$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Offerobject$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$OfferObject>,
      callback: BodyResponseCallback<Schema$OfferObject>
    ): void;
    patch(
      params: Params$Resource$Offerobject$Patch,
      callback: BodyResponseCallback<Schema$OfferObject>
    ): void;
    patch(callback: BodyResponseCallback<Schema$OfferObject>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Offerobject$Patch
        | BodyResponseCallback<Schema$OfferObject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OfferObject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OfferObject>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$OfferObject> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Offerobject$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Offerobject$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/offerObject/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OfferObject>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OfferObject>(parameters);
      }
    }

    /**
     * Updates the offer object referenced by the given object ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Offerobject$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Offerobject$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OfferObject>;
    update(
      params: Params$Resource$Offerobject$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Offerobject$Update,
      options: MethodOptions | BodyResponseCallback<Schema$OfferObject>,
      callback: BodyResponseCallback<Schema$OfferObject>
    ): void;
    update(
      params: Params$Resource$Offerobject$Update,
      callback: BodyResponseCallback<Schema$OfferObject>
    ): void;
    update(callback: BodyResponseCallback<Schema$OfferObject>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Offerobject$Update
        | BodyResponseCallback<Schema$OfferObject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OfferObject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OfferObject>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$OfferObject> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Offerobject$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Offerobject$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/offerObject/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OfferObject>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OfferObject>(parameters);
      }
    }
  }

  export interface Params$Resource$Offerobject$Addmessage
    extends StandardParameters {
    /**
     * The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddMessageRequest;
  }
  export interface Params$Resource$Offerobject$Get extends StandardParameters {
    /**
     * The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;
  }
  export interface Params$Resource$Offerobject$Insert
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$OfferObject;
  }
  export interface Params$Resource$Offerobject$List extends StandardParameters {
    /**
     * The ID of the class whose objects will be listed.
     */
    classId?: string;
    /**
     * Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     */
    maxResults?: number;
    /**
     * Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
     */
    token?: string;
  }
  export interface Params$Resource$Offerobject$Patch
    extends StandardParameters {
    /**
     * The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OfferObject;
  }
  export interface Params$Resource$Offerobject$Update
    extends StandardParameters {
    /**
     * The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OfferObject;
  }

  export class Resource$Permissions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns the permissions for the given issuer id.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Permissions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Permissions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Permissions>;
    get(
      params: Params$Resource$Permissions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Permissions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Permissions>,
      callback: BodyResponseCallback<Schema$Permissions>
    ): void;
    get(
      params: Params$Resource$Permissions$Get,
      callback: BodyResponseCallback<Schema$Permissions>
    ): void;
    get(callback: BodyResponseCallback<Schema$Permissions>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Permissions$Get
        | BodyResponseCallback<Schema$Permissions>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Permissions>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Permissions>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Permissions> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Permissions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Permissions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/permissions/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Permissions>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Permissions>(parameters);
      }
    }

    /**
     * Updates the permissions for the given issuer.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Permissions$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Permissions$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Permissions>;
    update(
      params: Params$Resource$Permissions$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Permissions$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Permissions>,
      callback: BodyResponseCallback<Schema$Permissions>
    ): void;
    update(
      params: Params$Resource$Permissions$Update,
      callback: BodyResponseCallback<Schema$Permissions>
    ): void;
    update(callback: BodyResponseCallback<Schema$Permissions>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Permissions$Update
        | BodyResponseCallback<Schema$Permissions>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Permissions>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Permissions>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Permissions> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Permissions$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Permissions$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/permissions/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Permissions>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Permissions>(parameters);
      }
    }
  }

  export interface Params$Resource$Permissions$Get extends StandardParameters {
    /**
     * The unique identifier for an issuer. This ID must be unique across all issuers.
     */
    resourceId?: string;
  }
  export interface Params$Resource$Permissions$Update
    extends StandardParameters {
    /**
     * The unique identifier for an issuer. This ID must be unique across all issuers.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Permissions;
  }

  export class Resource$Smarttap {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Inserts the smart tap.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Smarttap$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Smarttap$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SmartTap>;
    insert(
      params: Params$Resource$Smarttap$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Smarttap$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$SmartTap>,
      callback: BodyResponseCallback<Schema$SmartTap>
    ): void;
    insert(
      params: Params$Resource$Smarttap$Insert,
      callback: BodyResponseCallback<Schema$SmartTap>
    ): void;
    insert(callback: BodyResponseCallback<Schema$SmartTap>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Smarttap$Insert
        | BodyResponseCallback<Schema$SmartTap>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SmartTap>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SmartTap>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SmartTap> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Smarttap$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Smarttap$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/smartTap').replace(
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
        createAPIRequest<Schema$SmartTap>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SmartTap>(parameters);
      }
    }
  }

  export interface Params$Resource$Smarttap$Insert extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$SmartTap;
  }

  export class Resource$Transitclass {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Adds a message to the transit class referenced by the given class ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    addmessage(
      params: Params$Resource$Transitclass$Addmessage,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    addmessage(
      params?: Params$Resource$Transitclass$Addmessage,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TransitClassAddMessageResponse>;
    addmessage(
      params: Params$Resource$Transitclass$Addmessage,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    addmessage(
      params: Params$Resource$Transitclass$Addmessage,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TransitClassAddMessageResponse>,
      callback: BodyResponseCallback<Schema$TransitClassAddMessageResponse>
    ): void;
    addmessage(
      params: Params$Resource$Transitclass$Addmessage,
      callback: BodyResponseCallback<Schema$TransitClassAddMessageResponse>
    ): void;
    addmessage(
      callback: BodyResponseCallback<Schema$TransitClassAddMessageResponse>
    ): void;
    addmessage(
      paramsOrCallback?:
        | Params$Resource$Transitclass$Addmessage
        | BodyResponseCallback<Schema$TransitClassAddMessageResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TransitClassAddMessageResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TransitClassAddMessageResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$TransitClassAddMessageResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Transitclass$Addmessage;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Transitclass$Addmessage;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/transitClass/{resourceId}/addMessage'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TransitClassAddMessageResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TransitClassAddMessageResponse>(
          parameters
        );
      }
    }

    /**
     * Returns the transit class with the given class ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Transitclass$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Transitclass$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TransitClass>;
    get(
      params: Params$Resource$Transitclass$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Transitclass$Get,
      options: MethodOptions | BodyResponseCallback<Schema$TransitClass>,
      callback: BodyResponseCallback<Schema$TransitClass>
    ): void;
    get(
      params: Params$Resource$Transitclass$Get,
      callback: BodyResponseCallback<Schema$TransitClass>
    ): void;
    get(callback: BodyResponseCallback<Schema$TransitClass>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Transitclass$Get
        | BodyResponseCallback<Schema$TransitClass>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TransitClass>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TransitClass>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$TransitClass> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Transitclass$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Transitclass$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/transitClass/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TransitClass>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TransitClass>(parameters);
      }
    }

    /**
     * Inserts a transit class with the given ID and properties.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Transitclass$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Transitclass$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TransitClass>;
    insert(
      params: Params$Resource$Transitclass$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Transitclass$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$TransitClass>,
      callback: BodyResponseCallback<Schema$TransitClass>
    ): void;
    insert(
      params: Params$Resource$Transitclass$Insert,
      callback: BodyResponseCallback<Schema$TransitClass>
    ): void;
    insert(callback: BodyResponseCallback<Schema$TransitClass>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Transitclass$Insert
        | BodyResponseCallback<Schema$TransitClass>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TransitClass>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TransitClass>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$TransitClass> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Transitclass$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Transitclass$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/transitClass').replace(
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
        createAPIRequest<Schema$TransitClass>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TransitClass>(parameters);
      }
    }

    /**
     * Returns a list of all transit classes for a given issuer ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Transitclass$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Transitclass$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TransitClassListResponse>;
    list(
      params: Params$Resource$Transitclass$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Transitclass$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TransitClassListResponse>,
      callback: BodyResponseCallback<Schema$TransitClassListResponse>
    ): void;
    list(
      params: Params$Resource$Transitclass$List,
      callback: BodyResponseCallback<Schema$TransitClassListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$TransitClassListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Transitclass$List
        | BodyResponseCallback<Schema$TransitClassListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TransitClassListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TransitClassListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$TransitClassListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Transitclass$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Transitclass$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/transitClass').replace(
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
        createAPIRequest<Schema$TransitClassListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TransitClassListResponse>(parameters);
      }
    }

    /**
     * Updates the transit class referenced by the given class ID. This method supports patch semantics.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Transitclass$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Transitclass$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TransitClass>;
    patch(
      params: Params$Resource$Transitclass$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Transitclass$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$TransitClass>,
      callback: BodyResponseCallback<Schema$TransitClass>
    ): void;
    patch(
      params: Params$Resource$Transitclass$Patch,
      callback: BodyResponseCallback<Schema$TransitClass>
    ): void;
    patch(callback: BodyResponseCallback<Schema$TransitClass>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Transitclass$Patch
        | BodyResponseCallback<Schema$TransitClass>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TransitClass>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TransitClass>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$TransitClass> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Transitclass$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Transitclass$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/transitClass/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TransitClass>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TransitClass>(parameters);
      }
    }

    /**
     * Updates the transit class referenced by the given class ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Transitclass$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Transitclass$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TransitClass>;
    update(
      params: Params$Resource$Transitclass$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Transitclass$Update,
      options: MethodOptions | BodyResponseCallback<Schema$TransitClass>,
      callback: BodyResponseCallback<Schema$TransitClass>
    ): void;
    update(
      params: Params$Resource$Transitclass$Update,
      callback: BodyResponseCallback<Schema$TransitClass>
    ): void;
    update(callback: BodyResponseCallback<Schema$TransitClass>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Transitclass$Update
        | BodyResponseCallback<Schema$TransitClass>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TransitClass>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TransitClass>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$TransitClass> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Transitclass$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Transitclass$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/transitClass/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TransitClass>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TransitClass>(parameters);
      }
    }
  }

  export interface Params$Resource$Transitclass$Addmessage
    extends StandardParameters {
    /**
     * The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddMessageRequest;
  }
  export interface Params$Resource$Transitclass$Get extends StandardParameters {
    /**
     * The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;
  }
  export interface Params$Resource$Transitclass$Insert
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$TransitClass;
  }
  export interface Params$Resource$Transitclass$List
    extends StandardParameters {
    /**
     * The ID of the issuer authorized to list classes.
     */
    issuerId?: string;
    /**
     * Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     */
    maxResults?: number;
    /**
     * Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.
     */
    token?: string;
  }
  export interface Params$Resource$Transitclass$Patch
    extends StandardParameters {
    /**
     * The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TransitClass;
  }
  export interface Params$Resource$Transitclass$Update
    extends StandardParameters {
    /**
     * The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TransitClass;
  }

  export class Resource$Transitobject {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Adds a message to the transit object referenced by the given object ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    addmessage(
      params: Params$Resource$Transitobject$Addmessage,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    addmessage(
      params?: Params$Resource$Transitobject$Addmessage,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TransitObjectAddMessageResponse>;
    addmessage(
      params: Params$Resource$Transitobject$Addmessage,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    addmessage(
      params: Params$Resource$Transitobject$Addmessage,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TransitObjectAddMessageResponse>,
      callback: BodyResponseCallback<Schema$TransitObjectAddMessageResponse>
    ): void;
    addmessage(
      params: Params$Resource$Transitobject$Addmessage,
      callback: BodyResponseCallback<Schema$TransitObjectAddMessageResponse>
    ): void;
    addmessage(
      callback: BodyResponseCallback<Schema$TransitObjectAddMessageResponse>
    ): void;
    addmessage(
      paramsOrCallback?:
        | Params$Resource$Transitobject$Addmessage
        | BodyResponseCallback<Schema$TransitObjectAddMessageResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TransitObjectAddMessageResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TransitObjectAddMessageResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$TransitObjectAddMessageResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Transitobject$Addmessage;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Transitobject$Addmessage;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/walletobjects/v1/transitObject/{resourceId}/addMessage'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TransitObjectAddMessageResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TransitObjectAddMessageResponse>(
          parameters
        );
      }
    }

    /**
     * Returns the transit object with the given object ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Transitobject$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Transitobject$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TransitObject>;
    get(
      params: Params$Resource$Transitobject$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Transitobject$Get,
      options: MethodOptions | BodyResponseCallback<Schema$TransitObject>,
      callback: BodyResponseCallback<Schema$TransitObject>
    ): void;
    get(
      params: Params$Resource$Transitobject$Get,
      callback: BodyResponseCallback<Schema$TransitObject>
    ): void;
    get(callback: BodyResponseCallback<Schema$TransitObject>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Transitobject$Get
        | BodyResponseCallback<Schema$TransitObject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TransitObject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TransitObject>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$TransitObject> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Transitobject$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Transitobject$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/transitObject/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TransitObject>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TransitObject>(parameters);
      }
    }

    /**
     * Inserts an transit object with the given ID and properties.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Transitobject$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Transitobject$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TransitObject>;
    insert(
      params: Params$Resource$Transitobject$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Transitobject$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$TransitObject>,
      callback: BodyResponseCallback<Schema$TransitObject>
    ): void;
    insert(
      params: Params$Resource$Transitobject$Insert,
      callback: BodyResponseCallback<Schema$TransitObject>
    ): void;
    insert(callback: BodyResponseCallback<Schema$TransitObject>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Transitobject$Insert
        | BodyResponseCallback<Schema$TransitObject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TransitObject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TransitObject>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$TransitObject> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Transitobject$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Transitobject$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/transitObject').replace(
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
        createAPIRequest<Schema$TransitObject>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TransitObject>(parameters);
      }
    }

    /**
     * Returns a list of all transit objects for a given issuer ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Transitobject$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Transitobject$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TransitObjectListResponse>;
    list(
      params: Params$Resource$Transitobject$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Transitobject$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TransitObjectListResponse>,
      callback: BodyResponseCallback<Schema$TransitObjectListResponse>
    ): void;
    list(
      params: Params$Resource$Transitobject$List,
      callback: BodyResponseCallback<Schema$TransitObjectListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$TransitObjectListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Transitobject$List
        | BodyResponseCallback<Schema$TransitObjectListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TransitObjectListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TransitObjectListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$TransitObjectListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Transitobject$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Transitobject$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/walletobjects/v1/transitObject').replace(
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
        createAPIRequest<Schema$TransitObjectListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TransitObjectListResponse>(parameters);
      }
    }

    /**
     * Updates the transit object referenced by the given object ID. This method supports patch semantics.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Transitobject$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Transitobject$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TransitObject>;
    patch(
      params: Params$Resource$Transitobject$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Transitobject$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$TransitObject>,
      callback: BodyResponseCallback<Schema$TransitObject>
    ): void;
    patch(
      params: Params$Resource$Transitobject$Patch,
      callback: BodyResponseCallback<Schema$TransitObject>
    ): void;
    patch(callback: BodyResponseCallback<Schema$TransitObject>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Transitobject$Patch
        | BodyResponseCallback<Schema$TransitObject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TransitObject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TransitObject>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$TransitObject> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Transitobject$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Transitobject$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/transitObject/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TransitObject>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TransitObject>(parameters);
      }
    }

    /**
     * Updates the transit object referenced by the given object ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Transitobject$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Transitobject$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TransitObject>;
    update(
      params: Params$Resource$Transitobject$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Transitobject$Update,
      options: MethodOptions | BodyResponseCallback<Schema$TransitObject>,
      callback: BodyResponseCallback<Schema$TransitObject>
    ): void;
    update(
      params: Params$Resource$Transitobject$Update,
      callback: BodyResponseCallback<Schema$TransitObject>
    ): void;
    update(callback: BodyResponseCallback<Schema$TransitObject>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Transitobject$Update
        | BodyResponseCallback<Schema$TransitObject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TransitObject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TransitObject>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$TransitObject> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Transitobject$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Transitobject$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/transitObject/{resourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['resourceId'],
        pathParams: ['resourceId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TransitObject>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TransitObject>(parameters);
      }
    }
  }

  export interface Params$Resource$Transitobject$Addmessage
    extends StandardParameters {
    /**
     * The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddMessageRequest;
  }
  export interface Params$Resource$Transitobject$Get
    extends StandardParameters {
    /**
     * The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;
  }
  export interface Params$Resource$Transitobject$Insert
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$TransitObject;
  }
  export interface Params$Resource$Transitobject$List
    extends StandardParameters {
    /**
     * The ID of the class whose objects will be listed.
     */
    classId?: string;
    /**
     * Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.
     */
    maxResults?: number;
    /**
     * Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.
     */
    token?: string;
  }
  export interface Params$Resource$Transitobject$Patch
    extends StandardParameters {
    /**
     * The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TransitObject;
  }
  export interface Params$Resource$Transitobject$Update
    extends StandardParameters {
    /**
     * The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.
     */
    resourceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TransitObject;
  }

  export class Resource$Walletobjects {
    context: APIRequestContext;
    v1: Resource$Walletobjects$V1;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.v1 = new Resource$Walletobjects$V1(this.context);
    }
  }

  export class Resource$Walletobjects$V1 {
    context: APIRequestContext;
    privateContent: Resource$Walletobjects$V1$Privatecontent;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.privateContent = new Resource$Walletobjects$V1$Privatecontent(
        this.context
      );
    }
  }

  export class Resource$Walletobjects$V1$Privatecontent {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Provide Google with information about awaiting private pass update. This will allow Google to provide the update notification to the device that currently holds this pass.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setPassUpdateNotice(
      params: Params$Resource$Walletobjects$V1$Privatecontent$Setpassupdatenotice,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setPassUpdateNotice(
      params?: Params$Resource$Walletobjects$V1$Privatecontent$Setpassupdatenotice,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SetPassUpdateNoticeResponse>;
    setPassUpdateNotice(
      params: Params$Resource$Walletobjects$V1$Privatecontent$Setpassupdatenotice,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setPassUpdateNotice(
      params: Params$Resource$Walletobjects$V1$Privatecontent$Setpassupdatenotice,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SetPassUpdateNoticeResponse>,
      callback: BodyResponseCallback<Schema$SetPassUpdateNoticeResponse>
    ): void;
    setPassUpdateNotice(
      params: Params$Resource$Walletobjects$V1$Privatecontent$Setpassupdatenotice,
      callback: BodyResponseCallback<Schema$SetPassUpdateNoticeResponse>
    ): void;
    setPassUpdateNotice(
      callback: BodyResponseCallback<Schema$SetPassUpdateNoticeResponse>
    ): void;
    setPassUpdateNotice(
      paramsOrCallback?:
        | Params$Resource$Walletobjects$V1$Privatecontent$Setpassupdatenotice
        | BodyResponseCallback<Schema$SetPassUpdateNoticeResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SetPassUpdateNoticeResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SetPassUpdateNoticeResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SetPassUpdateNoticeResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Walletobjects$V1$Privatecontent$Setpassupdatenotice;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Walletobjects$V1$Privatecontent$Setpassupdatenotice;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/privateContent/setPassUpdateNotice'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SetPassUpdateNoticeResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SetPassUpdateNoticeResponse>(parameters);
      }
    }

    /**
     * Upload private data (text or URI) and returns an Id to be used in its place.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    uploadPrivateData(
      params: Params$Resource$Walletobjects$V1$Privatecontent$Uploadprivatedata,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    uploadPrivateData(
      params?: Params$Resource$Walletobjects$V1$Privatecontent$Uploadprivatedata,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UploadPrivateDataResponse>;
    uploadPrivateData(
      params: Params$Resource$Walletobjects$V1$Privatecontent$Uploadprivatedata,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    uploadPrivateData(
      params: Params$Resource$Walletobjects$V1$Privatecontent$Uploadprivatedata,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$UploadPrivateDataResponse>,
      callback: BodyResponseCallback<Schema$UploadPrivateDataResponse>
    ): void;
    uploadPrivateData(
      params: Params$Resource$Walletobjects$V1$Privatecontent$Uploadprivatedata,
      callback: BodyResponseCallback<Schema$UploadPrivateDataResponse>
    ): void;
    uploadPrivateData(
      callback: BodyResponseCallback<Schema$UploadPrivateDataResponse>
    ): void;
    uploadPrivateData(
      paramsOrCallback?:
        | Params$Resource$Walletobjects$V1$Privatecontent$Uploadprivatedata
        | BodyResponseCallback<Schema$UploadPrivateDataResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UploadPrivateDataResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UploadPrivateDataResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$UploadPrivateDataResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Walletobjects$V1$Privatecontent$Uploadprivatedata;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Walletobjects$V1$Privatecontent$Uploadprivatedata;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://walletobjects.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/walletobjects/v1/privateContent/uploadPrivateData'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$UploadPrivateDataResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UploadPrivateDataResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Walletobjects$V1$Privatecontent$Setpassupdatenotice
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$SetPassUpdateNoticeRequest;
  }
  export interface Params$Resource$Walletobjects$V1$Privatecontent$Uploadprivatedata
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$UploadPrivateDataRequest;
  }
}
