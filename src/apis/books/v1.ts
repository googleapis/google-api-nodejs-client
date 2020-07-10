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
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
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

export namespace books_v1 {
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
   * Books API
   *
   * The Google Books API allows clients to access the Google Books repository.
   *
   * @example
   * const {google} = require('googleapis');
   * const books = google.books('v1');
   *
   * @namespace books
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Books
   */
  export class Books {
    context: APIRequestContext;
    bookshelves: Resource$Bookshelves;
    cloudloading: Resource$Cloudloading;
    dictionary: Resource$Dictionary;
    familysharing: Resource$Familysharing;
    layers: Resource$Layers;
    myconfig: Resource$Myconfig;
    mylibrary: Resource$Mylibrary;
    notification: Resource$Notification;
    onboarding: Resource$Onboarding;
    personalizedstream: Resource$Personalizedstream;
    promooffer: Resource$Promooffer;
    series: Resource$Series;
    volumes: Resource$Volumes;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.bookshelves = new Resource$Bookshelves(this.context);
      this.cloudloading = new Resource$Cloudloading(this.context);
      this.dictionary = new Resource$Dictionary(this.context);
      this.familysharing = new Resource$Familysharing(this.context);
      this.layers = new Resource$Layers(this.context);
      this.myconfig = new Resource$Myconfig(this.context);
      this.mylibrary = new Resource$Mylibrary(this.context);
      this.notification = new Resource$Notification(this.context);
      this.onboarding = new Resource$Onboarding(this.context);
      this.personalizedstream = new Resource$Personalizedstream(this.context);
      this.promooffer = new Resource$Promooffer(this.context);
      this.series = new Resource$Series(this.context);
      this.volumes = new Resource$Volumes(this.context);
    }
  }

  export interface Schema$Annotation {
    /**
     * Anchor text after excerpt. For requests, if the user bookmarked a screen that has no flowing text on it, then this field should be empty.
     */
    afterSelectedText?: string | null;
    /**
     * Anchor text before excerpt. For requests, if the user bookmarked a screen that has no flowing text on it, then this field should be empty.
     */
    beforeSelectedText?: string | null;
    /**
     * Selection ranges sent from the client.
     */
    clientVersionRanges?: {
      cfiRange?: Schema$BooksAnnotationsRange;
      contentVersion?: string;
      gbImageRange?: Schema$BooksAnnotationsRange;
      gbTextRange?: Schema$BooksAnnotationsRange;
      imageCfiRange?: Schema$BooksAnnotationsRange;
    } | null;
    /**
     * Timestamp for the created time of this annotation.
     */
    created?: string | null;
    /**
     * Selection ranges for the most recent content version.
     */
    currentVersionRanges?: {
      cfiRange?: Schema$BooksAnnotationsRange;
      contentVersion?: string;
      gbImageRange?: Schema$BooksAnnotationsRange;
      gbTextRange?: Schema$BooksAnnotationsRange;
      imageCfiRange?: Schema$BooksAnnotationsRange;
    } | null;
    /**
     * User-created data for this annotation.
     */
    data?: string | null;
    /**
     * Indicates that this annotation is deleted.
     */
    deleted?: boolean | null;
    /**
     * The highlight style for this annotation.
     */
    highlightStyle?: string | null;
    /**
     * Id of this annotation, in the form of a GUID.
     */
    id?: string | null;
    /**
     * Resource type.
     */
    kind?: string | null;
    /**
     * The layer this annotation is for.
     */
    layerId?: string | null;
    layerSummary?: {
      allowedCharacterCount?: number;
      limitType?: string;
      remainingCharacterCount?: number;
    } | null;
    /**
     * Pages that this annotation spans.
     */
    pageIds?: string[] | null;
    /**
     * Excerpt from the volume.
     */
    selectedText?: string | null;
    /**
     * URL to this resource.
     */
    selfLink?: string | null;
    /**
     * Timestamp for the last time this annotation was modified.
     */
    updated?: string | null;
    /**
     * The volume that this annotation belongs to.
     */
    volumeId?: string | null;
  }
  export interface Schema$Annotations {
    /**
     * A list of annotations.
     */
    items?: Schema$Annotation[];
    /**
     * Resource type.
     */
    kind?: string | null;
    /**
     * Token to pass in for pagination for the next page. This will not be present if this request does not have more results.
     */
    nextPageToken?: string | null;
    /**
     * Total number of annotations found. This may be greater than the number of notes returned in this response if results have been paginated.
     */
    totalItems?: number | null;
  }
  export interface Schema$Annotationsdata {
    /**
     * A list of Annotation Data.
     */
    items?: Schema$GeoAnnotationdata[];
    /**
     * Resource type
     */
    kind?: string | null;
    /**
     * Token to pass in for pagination for the next page. This will not be present if this request does not have more results.
     */
    nextPageToken?: string | null;
    /**
     * The total number of volume annotations found.
     */
    totalItems?: number | null;
  }
  export interface Schema$AnnotationsSummary {
    kind?: string | null;
    layers?: Array<{
      allowedCharacterCount?: number;
      layerId?: string;
      limitType?: string;
      remainingCharacterCount?: number;
      updated?: string;
    }> | null;
  }
  export interface Schema$BooksAnnotationsRange {
    /**
     * The offset from the ending position.
     */
    endOffset?: string | null;
    /**
     * The ending position for the range.
     */
    endPosition?: string | null;
    /**
     * The offset from the starting position.
     */
    startOffset?: string | null;
    /**
     * The starting position for the range.
     */
    startPosition?: string | null;
  }
  export interface Schema$BooksCloudloadingResource {
    author?: string | null;
    processingState?: string | null;
    title?: string | null;
    volumeId?: string | null;
  }
  export interface Schema$Bookshelf {
    /**
     * Whether this bookshelf is PUBLIC or PRIVATE.
     */
    access?: string | null;
    /**
     * Created time for this bookshelf (formatted UTC timestamp with millisecond resolution).
     */
    created?: string | null;
    /**
     * Description of this bookshelf.
     */
    description?: string | null;
    /**
     * Id of this bookshelf, only unique by user.
     */
    id?: number | null;
    /**
     * Resource type for bookshelf metadata.
     */
    kind?: string | null;
    /**
     * URL to this resource.
     */
    selfLink?: string | null;
    /**
     * Title of this bookshelf.
     */
    title?: string | null;
    /**
     * Last modified time of this bookshelf (formatted UTC timestamp with millisecond resolution).
     */
    updated?: string | null;
    /**
     * Number of volumes in this bookshelf.
     */
    volumeCount?: number | null;
    /**
     * Last time a volume was added or removed from this bookshelf (formatted UTC timestamp with millisecond resolution).
     */
    volumesLastUpdated?: string | null;
  }
  export interface Schema$Bookshelves {
    /**
     * A list of bookshelves.
     */
    items?: Schema$Bookshelf[];
    /**
     * Resource type.
     */
    kind?: string | null;
  }
  export interface Schema$BooksVolumesRecommendedRateResponse {
    consistency_token?: string | null;
  }
  export interface Schema$Category {
    /**
     * A list of onboarding categories.
     */
    items?: Array<{
      badgeUrl?: string;
      categoryId?: string;
      name?: string;
    }> | null;
    /**
     * Resource type.
     */
    kind?: string | null;
  }
  export interface Schema$ConcurrentAccessRestriction {
    /**
     * Whether access is granted for this (user, device, volume).
     */
    deviceAllowed?: boolean | null;
    /**
     * Resource type.
     */
    kind?: string | null;
    /**
     * The maximum number of concurrent access licenses for this volume.
     */
    maxConcurrentDevices?: number | null;
    /**
     * Error/warning message.
     */
    message?: string | null;
    /**
     * Client nonce for verification. Download access and client-validation only.
     */
    nonce?: string | null;
    /**
     * Error/warning reason code.
     */
    reasonCode?: string | null;
    /**
     * Whether this volume has any concurrent access restrictions.
     */
    restricted?: boolean | null;
    /**
     * Response signature.
     */
    signature?: string | null;
    /**
     * Client app identifier for verification. Download access and client-validation only.
     */
    source?: string | null;
    /**
     * Time in seconds for license auto-expiration.
     */
    timeWindowSeconds?: number | null;
    /**
     * Identifies the volume for which this entry applies.
     */
    volumeId?: string | null;
  }
  export interface Schema$DictionaryAnnotationdata {
    /**
     * The type of annotation this data is for.
     */
    annotationType?: string | null;
    /**
     * JSON encoded data for this dictionary annotation data. Emitted with name &#39;data&#39; in JSON output. Either this or geo_data will be populated.
     */
    data?: Schema$Dictlayerdata;
    /**
     * Base64 encoded data for this annotation data.
     */
    encodedData?: string | null;
    /**
     * Unique id for this annotation data.
     */
    id?: string | null;
    /**
     * Resource Type
     */
    kind?: string | null;
    /**
     * The Layer id for this data. *
     */
    layerId?: string | null;
    /**
     * URL for this resource. *
     */
    selfLink?: string | null;
    /**
     * Timestamp for the last time this data was updated. (RFC 3339 UTC date-time format).
     */
    updated?: string | null;
    /**
     * The volume id for this data. *
     */
    volumeId?: string | null;
  }
  export interface Schema$Dictlayerdata {
    common?: {title?: string} | null;
    dict?: {
      source?: {attribution?: string; url?: string};
      words?: Array<{
        derivatives?: Array<{
          source?: {attribution?: string; url?: string};
          text?: string;
        }>;
        examples?: Array<{
          source?: {attribution?: string; url?: string};
          text?: string;
        }>;
        senses?: Array<{
          conjugations?: Array<{type?: string; value?: string}>;
          definitions?: Array<{
            definition?: string;
            examples?: Array<{
              source?: {attribution?: string; url?: string};
              text?: string;
            }>;
          }>;
          partOfSpeech?: string;
          pronunciation?: string;
          pronunciationUrl?: string;
          source?: {attribution?: string; url?: string};
          syllabification?: string;
          synonyms?: Array<{
            source?: {attribution?: string; url?: string};
            text?: string;
          }>;
        }>;
        source?: {attribution?: string; url?: string};
      }>;
    } | null;
    kind?: string | null;
  }
  export interface Schema$Discoveryclusters {
    clusters?: Array<{
      banner_with_content_container?: {
        fillColorArgb?: string;
        imageUrl?: string;
        maskColorArgb?: string;
        moreButtonText?: string;
        moreButtonUrl?: string;
        textColorArgb?: string;
      };
      subTitle?: string;
      title?: string;
      totalVolumes?: number;
      uid?: string;
      volumes?: Schema$Volume[];
    }> | null;
    /**
     * Resorce type.
     */
    kind?: string | null;
    totalClusters?: number | null;
  }
  export interface Schema$DownloadAccesses {
    /**
     * A list of download access responses.
     */
    downloadAccessList?: Schema$DownloadAccessRestriction[];
    /**
     * Resource type.
     */
    kind?: string | null;
  }
  export interface Schema$DownloadAccessRestriction {
    /**
     * If restricted, whether access is granted for this (user, device, volume).
     */
    deviceAllowed?: boolean | null;
    /**
     * If restricted, the number of content download licenses already acquired (including the requesting client, if licensed).
     */
    downloadsAcquired?: number | null;
    /**
     * If deviceAllowed, whether access was just acquired with this request.
     */
    justAcquired?: boolean | null;
    /**
     * Resource type.
     */
    kind?: string | null;
    /**
     * If restricted, the maximum number of content download licenses for this volume.
     */
    maxDownloadDevices?: number | null;
    /**
     * Error/warning message.
     */
    message?: string | null;
    /**
     * Client nonce for verification. Download access and client-validation only.
     */
    nonce?: string | null;
    /**
     * Error/warning reason code.  Additional codes may be added in the future. 0 OK 100   ACCESS_DENIED_PUBLISHER_LIMIT 101   ACCESS_DENIED_LIMIT 200 WARNING_USED_LAST_ACCESS
     */
    reasonCode?: string | null;
    /**
     * Whether this volume has any download access restrictions.
     */
    restricted?: boolean | null;
    /**
     * Response signature.
     */
    signature?: string | null;
    /**
     * Client app identifier for verification. Download access and client-validation only.
     */
    source?: string | null;
    /**
     * Identifies the volume for which this entry applies.
     */
    volumeId?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  export interface Schema$FamilyInfo {
    /**
     * Resource type.
     */
    kind?: string | null;
    /**
     * Family membership info of the user that made the request.
     */
    membership?: {
      acquirePermission?: string;
      ageGroup?: string;
      allowedMaturityRating?: string;
      isInFamily?: boolean;
      role?: string;
    } | null;
  }
  export interface Schema$GeoAnnotationdata {
    /**
     * The type of annotation this data is for.
     */
    annotationType?: string | null;
    /**
     * JSON encoded data for this geo annotation data. Emitted with name &#39;data&#39; in JSON output. Either this or dict_data will be populated.
     */
    data?: Schema$Geolayerdata;
    /**
     * Base64 encoded data for this annotation data.
     */
    encodedData?: string | null;
    /**
     * Unique id for this annotation data.
     */
    id?: string | null;
    /**
     * Resource Type
     */
    kind?: string | null;
    /**
     * The Layer id for this data. *
     */
    layerId?: string | null;
    /**
     * URL for this resource. *
     */
    selfLink?: string | null;
    /**
     * Timestamp for the last time this data was updated. (RFC 3339 UTC date-time format).
     */
    updated?: string | null;
    /**
     * The volume id for this data. *
     */
    volumeId?: string | null;
  }
  export interface Schema$Geolayerdata {
    common?: {
      lang?: string;
      previewImageUrl?: string;
      snippet?: string;
      snippetUrl?: string;
      title?: string;
    } | null;
    geo?: {
      boundary?: string[];
      cachePolicy?: string;
      countryCode?: string;
      latitude?: number;
      longitude?: number;
      mapType?: string;
      viewport?: {
        hi?: {latitude?: number; longitude?: number};
        lo?: {latitude?: number; longitude?: number};
      };
      zoom?: number;
    } | null;
    kind?: string | null;
  }
  export interface Schema$Layersummaries {
    /**
     * A list of layer summary items.
     */
    items?: Schema$Layersummary[];
    /**
     * Resource type.
     */
    kind?: string | null;
    /**
     * The total number of layer summaries found.
     */
    totalItems?: number | null;
  }
  export interface Schema$Layersummary {
    /**
     * The number of annotations for this layer.
     */
    annotationCount?: number | null;
    /**
     * Link to get data for this annotation.
     */
    annotationsDataLink?: string | null;
    /**
     * The link to get the annotations for this layer.
     */
    annotationsLink?: string | null;
    /**
     * The list of annotation types contained for this layer.
     */
    annotationTypes?: string[] | null;
    /**
     * The content version this resource is for.
     */
    contentVersion?: string | null;
    /**
     * The number of data items for this layer.
     */
    dataCount?: number | null;
    /**
     * Unique id of this layer summary.
     */
    id?: string | null;
    /**
     * Resource Type
     */
    kind?: string | null;
    /**
     * The layer id for this summary.
     */
    layerId?: string | null;
    /**
     * URL to this resource.
     */
    selfLink?: string | null;
    /**
     * Timestamp for the last time an item in this layer was updated. (RFC 3339 UTC date-time format).
     */
    updated?: string | null;
    /**
     * The current version of this layer&#39;s volume annotations. Note that this version applies only to the data in the books.layers.volumeAnnotations.* responses. The actual annotation data is versioned separately.
     */
    volumeAnnotationsVersion?: string | null;
    /**
     * The volume id this resource is for.
     */
    volumeId?: string | null;
  }
  export interface Schema$Metadata {
    /**
     * A list of offline dictionary metadata.
     */
    items?: Array<{
      download_url?: string;
      encrypted_key?: string;
      language?: string;
      size?: string;
      version?: string;
    }> | null;
    /**
     * Resource type.
     */
    kind?: string | null;
  }
  export interface Schema$Notification {
    body?: string | null;
    /**
     * The list of crm experiment ids.
     */
    crmExperimentIds?: string[] | null;
    doc_id?: string | null;
    doc_type?: string | null;
    dont_show_notification?: boolean | null;
    iconUrl?: string | null;
    is_document_mature?: boolean | null;
    /**
     * Resource type.
     */
    kind?: string | null;
    notificationGroup?: string | null;
    notification_type?: string | null;
    pcampaign_id?: string | null;
    reason?: string | null;
    show_notification_settings_action?: boolean | null;
    targetUrl?: string | null;
    timeToExpireMs?: string | null;
    title?: string | null;
  }
  export interface Schema$Offers {
    /**
     * A list of offers.
     */
    items?: Array<{
      artUrl?: string;
      gservicesKey?: string;
      id?: string;
      items?: Array<{
        author?: string;
        canonicalVolumeLink?: string;
        coverUrl?: string;
        description?: string;
        title?: string;
        volumeId?: string;
      }>;
    }> | null;
    /**
     * Resource type.
     */
    kind?: string | null;
  }
  export interface Schema$ReadingPosition {
    /**
     * Position in an EPUB as a CFI.
     */
    epubCfiPosition?: string | null;
    /**
     * Position in a volume for image-based content.
     */
    gbImagePosition?: string | null;
    /**
     * Position in a volume for text-based content.
     */
    gbTextPosition?: string | null;
    /**
     * Resource type for a reading position.
     */
    kind?: string | null;
    /**
     * Position in a PDF file.
     */
    pdfPosition?: string | null;
    /**
     * Timestamp when this reading position was last updated (formatted UTC timestamp with millisecond resolution).
     */
    updated?: string | null;
    /**
     * Volume id associated with this reading position.
     */
    volumeId?: string | null;
  }
  export interface Schema$RequestAccessData {
    /**
     * A concurrent access response.
     */
    concurrentAccess?: Schema$ConcurrentAccessRestriction;
    /**
     * A download access response.
     */
    downloadAccess?: Schema$DownloadAccessRestriction;
    /**
     * Resource type.
     */
    kind?: string | null;
  }
  export interface Schema$Review {
    /**
     * Author of this review.
     */
    author?: {displayName?: string} | null;
    /**
     * Review text.
     */
    content?: string | null;
    /**
     * Date of this review.
     */
    date?: string | null;
    /**
     * URL for the full review text, for reviews gathered from the web.
     */
    fullTextUrl?: string | null;
    /**
     * Resource type for a review.
     */
    kind?: string | null;
    /**
     * Star rating for this review. Possible values are ONE, TWO, THREE, FOUR, FIVE or NOT_RATED.
     */
    rating?: string | null;
    /**
     * Information regarding the source of this review, when the review is not from a Google Books user.
     */
    source?: {
      description?: string;
      extraDescription?: string;
      url?: string;
    } | null;
    /**
     * Title for this review.
     */
    title?: string | null;
    /**
     * Source type for this review. Possible values are EDITORIAL, WEB_USER or GOOGLE_USER.
     */
    type?: string | null;
    /**
     * Volume that this review is for.
     */
    volumeId?: string | null;
  }
  export interface Schema$Series {
    /**
     * Resource type.
     */
    kind?: string | null;
    series?: Array<{
      bannerImageUrl?: string;
      eligibleForSubscription?: boolean;
      imageUrl?: string;
      isComplete?: boolean;
      seriesFormatType?: string;
      seriesId?: string;
      seriesSubscriptionReleaseInfo?: {
        cancelTime?: string;
        currentReleaseInfo?: {
          amountInMicros?: number;
          currencyCode?: string;
          releaseNumber?: string;
          releaseTime?: string;
        };
        nextReleaseInfo?: {
          amountInMicros?: number;
          currencyCode?: string;
          releaseNumber?: string;
          releaseTime?: string;
        };
        seriesSubscriptionType?: string;
      };
      seriesType?: string;
      subscriptionId?: string;
      title?: string;
    }> | null;
  }
  export interface Schema$Seriesmembership {
    /**
     * Resorce type.
     */
    kind?: string | null;
    member?: Schema$Volume[];
    nextPageToken?: string | null;
  }
  export interface Schema$Usersettings {
    /**
     * Resource type.
     */
    kind?: string | null;
    /**
     * User settings in sub-objects, each for different purposes.
     */
    notesExport?: {folderName?: string; isEnabled?: boolean} | null;
    notification?: {
      matchMyInterests?: {opted_state?: string};
      moreFromAuthors?: {opted_state?: string};
      moreFromSeries?: {opted_state?: string};
      priceDrop?: {opted_state?: string};
      rewardExpirations?: {opted_state?: string};
    } | null;
  }
  export interface Schema$Volume {
    /**
     * Any information about a volume related to reading or obtaining that volume text. This information can depend on country (books may be public domain in one country but not in another, e.g.).
     */
    accessInfo?: {
      accessViewStatus?: string;
      country?: string;
      downloadAccess?: Schema$DownloadAccessRestriction;
      driveImportedContentLink?: string;
      embeddable?: boolean;
      epub?: {
        acsTokenLink?: string;
        downloadLink?: string;
        isAvailable?: boolean;
      };
      explicitOfflineLicenseManagement?: boolean;
      pdf?: {
        acsTokenLink?: string;
        downloadLink?: string;
        isAvailable?: boolean;
      };
      publicDomain?: boolean;
      quoteSharingAllowed?: boolean;
      textToSpeechPermission?: string;
      viewOrderUrl?: string;
      viewability?: string;
      webReaderLink?: string;
    } | null;
    /**
     * Opaque identifier for a specific version of a volume resource. (In LITE projection)
     */
    etag?: string | null;
    /**
     * Unique identifier for a volume. (In LITE projection.)
     */
    id?: string | null;
    /**
     * Resource type for a volume. (In LITE projection.)
     */
    kind?: string | null;
    /**
     * What layers exist in this volume and high level information about them.
     */
    layerInfo?: {
      layers?: Array<{layerId?: string; volumeAnnotationsVersion?: string}>;
    } | null;
    /**
     * Recommendation related information for this volume.
     */
    recommendedInfo?: {explanation?: string} | null;
    /**
     * Any information about a volume related to the eBookstore and/or purchaseability. This information can depend on the country where the request originates from (i.e. books may not be for sale in certain countries).
     */
    saleInfo?: {
      buyLink?: string;
      country?: string;
      isEbook?: boolean;
      listPrice?: {amount?: number; currencyCode?: string};
      offers?: Array<{
        finskyOfferType?: number;
        giftable?: boolean;
        listPrice?: {amountInMicros?: number; currencyCode?: string};
        rentalDuration?: {count?: number; unit?: string};
        retailPrice?: {amountInMicros?: number; currencyCode?: string};
      }>;
      onSaleDate?: string;
      retailPrice?: {amount?: number; currencyCode?: string};
      saleability?: string;
    } | null;
    /**
     * Search result information related to this volume.
     */
    searchInfo?: {textSnippet?: string} | null;
    /**
     * URL to this resource. (In LITE projection.)
     */
    selfLink?: string | null;
    /**
     * User specific information related to this volume. (e.g. page this user last read or whether they purchased this book)
     */
    userInfo?: {
      acquiredTime?: string;
      acquisitionType?: number;
      copy?: {
        allowedCharacterCount?: number;
        limitType?: string;
        remainingCharacterCount?: number;
        updated?: string;
      };
      entitlementType?: number;
      familySharing?: {
        familyRole?: string;
        isSharingAllowed?: boolean;
        isSharingDisabledByFop?: boolean;
      };
      isFamilySharedFromUser?: boolean;
      isFamilySharedToUser?: boolean;
      isFamilySharingAllowed?: boolean;
      isFamilySharingDisabledByFop?: boolean;
      isInMyBooks?: boolean;
      isPreordered?: boolean;
      isPurchased?: boolean;
      isUploaded?: boolean;
      readingPosition?: Schema$ReadingPosition;
      rentalPeriod?: {endUtcSec?: string; startUtcSec?: string};
      rentalState?: string;
      review?: Schema$Review;
      updated?: string;
      userUploadedVolumeInfo?: {processingState?: string};
    } | null;
    /**
     * General volume information.
     */
    volumeInfo?: {
      allowAnonLogging?: boolean;
      authors?: string[];
      averageRating?: number;
      canonicalVolumeLink?: string;
      categories?: string[];
      comicsContent?: boolean;
      contentVersion?: string;
      description?: string;
      dimensions?: {height?: string; thickness?: string; width?: string};
      imageLinks?: {
        extraLarge?: string;
        large?: string;
        medium?: string;
        small?: string;
        smallThumbnail?: string;
        thumbnail?: string;
      };
      industryIdentifiers?: Array<{identifier?: string; type?: string}>;
      infoLink?: string;
      language?: string;
      mainCategory?: string;
      maturityRating?: string;
      pageCount?: number;
      panelizationSummary?: {
        containsEpubBubbles?: boolean;
        containsImageBubbles?: boolean;
        epubBubbleVersion?: string;
        imageBubbleVersion?: string;
      };
      previewLink?: string;
      printType?: string;
      printedPageCount?: number;
      publishedDate?: string;
      publisher?: string;
      ratingsCount?: number;
      readingModes?: {image?: boolean; text?: boolean};
      samplePageCount?: number;
      seriesInfo?: Schema$Volumeseriesinfo;
      subtitle?: string;
      title?: string;
    } | null;
  }
  export interface Schema$Volume2 {
    /**
     * A list of volumes.
     */
    items?: Schema$Volume[];
    /**
     * Resource type.
     */
    kind?: string | null;
    nextPageToken?: string | null;
  }
  export interface Schema$Volumeannotation {
    /**
     * The annotation data id for this volume annotation.
     */
    annotationDataId?: string | null;
    /**
     * Link to get data for this annotation.
     */
    annotationDataLink?: string | null;
    /**
     * The type of annotation this is.
     */
    annotationType?: string | null;
    /**
     * The content ranges to identify the selected text.
     */
    contentRanges?: {
      cfiRange?: Schema$BooksAnnotationsRange;
      contentVersion?: string;
      gbImageRange?: Schema$BooksAnnotationsRange;
      gbTextRange?: Schema$BooksAnnotationsRange;
    } | null;
    /**
     * Data for this annotation.
     */
    data?: string | null;
    /**
     * Indicates that this annotation is deleted.
     */
    deleted?: boolean | null;
    /**
     * Unique id of this volume annotation.
     */
    id?: string | null;
    /**
     * Resource Type
     */
    kind?: string | null;
    /**
     * The Layer this annotation is for.
     */
    layerId?: string | null;
    /**
     * Pages the annotation spans.
     */
    pageIds?: string[] | null;
    /**
     * Excerpt from the volume.
     */
    selectedText?: string | null;
    /**
     * URL to this resource.
     */
    selfLink?: string | null;
    /**
     * Timestamp for the last time this anntoation was updated. (RFC 3339 UTC date-time format).
     */
    updated?: string | null;
    /**
     * The Volume this annotation is for.
     */
    volumeId?: string | null;
  }
  export interface Schema$Volumeannotations {
    /**
     * A list of volume annotations.
     */
    items?: Schema$Volumeannotation[];
    /**
     * Resource type
     */
    kind?: string | null;
    /**
     * Token to pass in for pagination for the next page. This will not be present if this request does not have more results.
     */
    nextPageToken?: string | null;
    /**
     * The total number of volume annotations found.
     */
    totalItems?: number | null;
    /**
     * The version string for all of the volume annotations in this layer (not just the ones in this response). Note: the version string doesn&#39;t apply to the annotation data, just the information in this response (e.g. the location of annotations in the book).
     */
    version?: string | null;
  }
  export interface Schema$Volumes {
    /**
     * A list of volumes.
     */
    items?: Schema$Volume[];
    /**
     * Resource type.
     */
    kind?: string | null;
    /**
     * Total number of volumes found. This might be greater than the number of volumes returned in this response if results have been paginated.
     */
    totalItems?: number | null;
  }
  export interface Schema$Volumeseriesinfo {
    /**
     * The display number string. This should be used only for display purposes and the actual sequence should be inferred from the below orderNumber.
     */
    bookDisplayNumber?: string | null;
    /**
     * Resource type.
     */
    kind?: string | null;
    /**
     * Short book title in the context of the series.
     */
    shortSeriesBookTitle?: string | null;
    volumeSeries?: Array<{
      issue?: Array<{issueDisplayNumber?: string; issueOrderNumber?: number}>;
      orderNumber?: number;
      seriesBookType?: string;
      seriesId?: string;
    }> | null;
  }

  export class Resource$Bookshelves {
    context: APIRequestContext;
    volumes: Resource$Bookshelves$Volumes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.volumes = new Resource$Bookshelves$Volumes(this.context);
    }

    /**
     * books.bookshelves.get
     * @desc Retrieves metadata for a specific bookshelf for the specified user.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.bookshelves.get({
     *     // ID of bookshelf to retrieve.
     *     shelf: 'placeholder-value',
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *     // ID of user for whom to retrieve bookshelves.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "access": "my_access",
     *   //   "created": "my_created",
     *   //   "description": "my_description",
     *   //   "id": 0,
     *   //   "kind": "my_kind",
     *   //   "selfLink": "my_selfLink",
     *   //   "title": "my_title",
     *   //   "updated": "my_updated",
     *   //   "volumeCount": 0,
     *   //   "volumesLastUpdated": "my_volumesLastUpdated"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.bookshelves.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.shelf ID of bookshelf to retrieve.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string} params.userId ID of user for whom to retrieve bookshelves.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Bookshelves$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Bookshelves$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Bookshelf>;
    get(
      params: Params$Resource$Bookshelves$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Bookshelves$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Bookshelf>,
      callback: BodyResponseCallback<Schema$Bookshelf>
    ): void;
    get(
      params: Params$Resource$Bookshelves$Get,
      callback: BodyResponseCallback<Schema$Bookshelf>
    ): void;
    get(callback: BodyResponseCallback<Schema$Bookshelf>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Bookshelves$Get
        | BodyResponseCallback<Schema$Bookshelf>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Bookshelf>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Bookshelf>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Bookshelf> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Bookshelves$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bookshelves$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/books/v1/users/{userId}/bookshelves/{shelf}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'shelf'],
        pathParams: ['shelf', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Bookshelf>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Bookshelf>(parameters);
      }
    }

    /**
     * books.bookshelves.list
     * @desc Retrieves a list of public bookshelves for the specified user.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.bookshelves.list({
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *     // ID of user for whom to retrieve bookshelves.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.bookshelves.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string} params.userId ID of user for whom to retrieve bookshelves.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Bookshelves$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Bookshelves$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Bookshelves>;
    list(
      params: Params$Resource$Bookshelves$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Bookshelves$List,
      options: MethodOptions | BodyResponseCallback<Schema$Bookshelves>,
      callback: BodyResponseCallback<Schema$Bookshelves>
    ): void;
    list(
      params: Params$Resource$Bookshelves$List,
      callback: BodyResponseCallback<Schema$Bookshelves>
    ): void;
    list(callback: BodyResponseCallback<Schema$Bookshelves>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Bookshelves$List
        | BodyResponseCallback<Schema$Bookshelves>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Bookshelves>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Bookshelves>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Bookshelves> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Bookshelves$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bookshelves$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/users/{userId}/bookshelves').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Bookshelves>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Bookshelves>(parameters);
      }
    }
  }

  export interface Params$Resource$Bookshelves$Get extends StandardParameters {
    /**
     * ID of bookshelf to retrieve.
     */
    shelf?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * ID of user for whom to retrieve bookshelves.
     */
    userId?: string;
  }
  export interface Params$Resource$Bookshelves$List extends StandardParameters {
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * ID of user for whom to retrieve bookshelves.
     */
    userId?: string;
  }

  export class Resource$Bookshelves$Volumes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * books.bookshelves.volumes.list
     * @desc Retrieves volumes in a specific bookshelf for the specified user.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.bookshelves.volumes.list({
     *     // Maximum number of results to return
     *     maxResults: 'placeholder-value',
     *     // ID of bookshelf to retrieve volumes.
     *     shelf: 'placeholder-value',
     *     // Set to true to show pre-ordered books. Defaults to false.
     *     showPreorders: 'placeholder-value',
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *     // Index of the first element to return (starts at 0)
     *     startIndex: 'placeholder-value',
     *     // ID of user for whom to retrieve bookshelf volumes.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "totalItems": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.bookshelves.volumes.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults Maximum number of results to return
     * @param {string} params.shelf ID of bookshelf to retrieve volumes.
     * @param {boolean=} params.showPreorders Set to true to show pre-ordered books. Defaults to false.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {integer=} params.startIndex Index of the first element to return (starts at 0)
     * @param {string} params.userId ID of user for whom to retrieve bookshelf volumes.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Bookshelves$Volumes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Bookshelves$Volumes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Volumes>;
    list(
      params: Params$Resource$Bookshelves$Volumes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Bookshelves$Volumes$List,
      options: MethodOptions | BodyResponseCallback<Schema$Volumes>,
      callback: BodyResponseCallback<Schema$Volumes>
    ): void;
    list(
      params: Params$Resource$Bookshelves$Volumes$List,
      callback: BodyResponseCallback<Schema$Volumes>
    ): void;
    list(callback: BodyResponseCallback<Schema$Volumes>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Bookshelves$Volumes$List
        | BodyResponseCallback<Schema$Volumes>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Volumes>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Volumes>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Volumes> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Bookshelves$Volumes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bookshelves$Volumes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/books/v1/users/{userId}/bookshelves/{shelf}/volumes'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'shelf'],
        pathParams: ['shelf', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Volumes>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Volumes>(parameters);
      }
    }
  }

  export interface Params$Resource$Bookshelves$Volumes$List
    extends StandardParameters {
    /**
     * Maximum number of results to return
     */
    maxResults?: number;
    /**
     * ID of bookshelf to retrieve volumes.
     */
    shelf?: string;
    /**
     * Set to true to show pre-ordered books. Defaults to false.
     */
    showPreorders?: boolean;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * Index of the first element to return (starts at 0)
     */
    startIndex?: number;
    /**
     * ID of user for whom to retrieve bookshelf volumes.
     */
    userId?: string;
  }

  export class Resource$Cloudloading {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * books.cloudloading.addBook
     * @desc Add a user-upload volume and triggers processing.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.cloudloading.addBook({
     *     // A drive document id. The upload_client_token must not be set.
     *     drive_document_id: 'placeholder-value',
     *     // The document MIME type. It can be set only if the drive_document_id is set.
     *     mime_type: 'placeholder-value',
     *     // The document name. It can be set only if the drive_document_id is set.
     *     name: 'placeholder-value',
     *     // Scotty upload token.
     *     upload_client_token: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "author": "my_author",
     *   //   "processingState": "my_processingState",
     *   //   "title": "my_title",
     *   //   "volumeId": "my_volumeId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.cloudloading.addBook
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.drive_document_id A drive document id. The upload_client_token must not be set.
     * @param {string=} params.mime_type The document MIME type. It can be set only if the drive_document_id is set.
     * @param {string=} params.name The document name. It can be set only if the drive_document_id is set.
     * @param {string=} params.upload_client_token Scotty upload token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    addBook(
      params: Params$Resource$Cloudloading$Addbook,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    addBook(
      params?: Params$Resource$Cloudloading$Addbook,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BooksCloudloadingResource>;
    addBook(
      params: Params$Resource$Cloudloading$Addbook,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    addBook(
      params: Params$Resource$Cloudloading$Addbook,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BooksCloudloadingResource>,
      callback: BodyResponseCallback<Schema$BooksCloudloadingResource>
    ): void;
    addBook(
      params: Params$Resource$Cloudloading$Addbook,
      callback: BodyResponseCallback<Schema$BooksCloudloadingResource>
    ): void;
    addBook(
      callback: BodyResponseCallback<Schema$BooksCloudloadingResource>
    ): void;
    addBook(
      paramsOrCallback?:
        | Params$Resource$Cloudloading$Addbook
        | BodyResponseCallback<Schema$BooksCloudloadingResource>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BooksCloudloadingResource>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BooksCloudloadingResource>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$BooksCloudloadingResource>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Cloudloading$Addbook;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Cloudloading$Addbook;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/cloudloading/addBook').replace(
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
        createAPIRequest<Schema$BooksCloudloadingResource>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$BooksCloudloadingResource>(parameters);
      }
    }

    /**
     * books.cloudloading.deleteBook
     * @desc Remove the book and its contents
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.cloudloading.deleteBook({
     *     // The id of the book to be removed.
     *     volumeId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.cloudloading.deleteBook
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.volumeId The id of the book to be removed.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    deleteBook(
      params: Params$Resource$Cloudloading$Deletebook,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    deleteBook(
      params?: Params$Resource$Cloudloading$Deletebook,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    deleteBook(
      params: Params$Resource$Cloudloading$Deletebook,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deleteBook(
      params: Params$Resource$Cloudloading$Deletebook,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    deleteBook(
      params: Params$Resource$Cloudloading$Deletebook,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    deleteBook(callback: BodyResponseCallback<Schema$Empty>): void;
    deleteBook(
      paramsOrCallback?:
        | Params$Resource$Cloudloading$Deletebook
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Cloudloading$Deletebook;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Cloudloading$Deletebook;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/cloudloading/deleteBook').replace(
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * books.cloudloading.updateBook
     * @desc Updates a user-upload volume.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.cloudloading.updateBook({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "author": "my_author",
     *       //   "processingState": "my_processingState",
     *       //   "title": "my_title",
     *       //   "volumeId": "my_volumeId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "author": "my_author",
     *   //   "processingState": "my_processingState",
     *   //   "title": "my_title",
     *   //   "volumeId": "my_volumeId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.cloudloading.updateBook
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().BooksCloudloadingResource} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateBook(
      params: Params$Resource$Cloudloading$Updatebook,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateBook(
      params?: Params$Resource$Cloudloading$Updatebook,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BooksCloudloadingResource>;
    updateBook(
      params: Params$Resource$Cloudloading$Updatebook,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateBook(
      params: Params$Resource$Cloudloading$Updatebook,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BooksCloudloadingResource>,
      callback: BodyResponseCallback<Schema$BooksCloudloadingResource>
    ): void;
    updateBook(
      params: Params$Resource$Cloudloading$Updatebook,
      callback: BodyResponseCallback<Schema$BooksCloudloadingResource>
    ): void;
    updateBook(
      callback: BodyResponseCallback<Schema$BooksCloudloadingResource>
    ): void;
    updateBook(
      paramsOrCallback?:
        | Params$Resource$Cloudloading$Updatebook
        | BodyResponseCallback<Schema$BooksCloudloadingResource>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BooksCloudloadingResource>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BooksCloudloadingResource>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$BooksCloudloadingResource>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Cloudloading$Updatebook;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Cloudloading$Updatebook;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/cloudloading/updateBook').replace(
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
        createAPIRequest<Schema$BooksCloudloadingResource>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$BooksCloudloadingResource>(parameters);
      }
    }
  }

  export interface Params$Resource$Cloudloading$Addbook
    extends StandardParameters {
    /**
     * A drive document id. The upload_client_token must not be set.
     */
    drive_document_id?: string;
    /**
     * The document MIME type. It can be set only if the drive_document_id is set.
     */
    mime_type?: string;
    /**
     * The document name. It can be set only if the drive_document_id is set.
     */
    name?: string;
    /**
     * Scotty upload token.
     */
    upload_client_token?: string;
  }
  export interface Params$Resource$Cloudloading$Deletebook
    extends StandardParameters {
    /**
     * The id of the book to be removed.
     */
    volumeId?: string;
  }
  export interface Params$Resource$Cloudloading$Updatebook
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$BooksCloudloadingResource;
  }

  export class Resource$Dictionary {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * books.dictionary.listOfflineMetadata
     * @desc Returns a list of offline dictionary metadata available
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.dictionary.listOfflineMetadata({
     *     // The device/version ID from which to request the data.
     *     cpksver: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.dictionary.listOfflineMetadata
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.cpksver The device/version ID from which to request the data.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listOfflineMetadata(
      params: Params$Resource$Dictionary$Listofflinemetadata,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listOfflineMetadata(
      params?: Params$Resource$Dictionary$Listofflinemetadata,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Metadata>;
    listOfflineMetadata(
      params: Params$Resource$Dictionary$Listofflinemetadata,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listOfflineMetadata(
      params: Params$Resource$Dictionary$Listofflinemetadata,
      options: MethodOptions | BodyResponseCallback<Schema$Metadata>,
      callback: BodyResponseCallback<Schema$Metadata>
    ): void;
    listOfflineMetadata(
      params: Params$Resource$Dictionary$Listofflinemetadata,
      callback: BodyResponseCallback<Schema$Metadata>
    ): void;
    listOfflineMetadata(callback: BodyResponseCallback<Schema$Metadata>): void;
    listOfflineMetadata(
      paramsOrCallback?:
        | Params$Resource$Dictionary$Listofflinemetadata
        | BodyResponseCallback<Schema$Metadata>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Metadata>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Metadata>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Metadata> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Dictionary$Listofflinemetadata;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Dictionary$Listofflinemetadata;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/dictionary/listOfflineMetadata').replace(
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
        createAPIRequest<Schema$Metadata>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Metadata>(parameters);
      }
    }
  }

  export interface Params$Resource$Dictionary$Listofflinemetadata
    extends StandardParameters {
    /**
     * The device/version ID from which to request the data.
     */
    cpksver?: string;
  }

  export class Resource$Familysharing {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * books.familysharing.getFamilyInfo
     * @desc Gets information regarding the family that the user is part of.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.familysharing.getFamilyInfo({
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "membership": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.familysharing.getFamilyInfo
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.source String to identify the originator of this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getFamilyInfo(
      params: Params$Resource$Familysharing$Getfamilyinfo,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getFamilyInfo(
      params?: Params$Resource$Familysharing$Getfamilyinfo,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FamilyInfo>;
    getFamilyInfo(
      params: Params$Resource$Familysharing$Getfamilyinfo,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getFamilyInfo(
      params: Params$Resource$Familysharing$Getfamilyinfo,
      options: MethodOptions | BodyResponseCallback<Schema$FamilyInfo>,
      callback: BodyResponseCallback<Schema$FamilyInfo>
    ): void;
    getFamilyInfo(
      params: Params$Resource$Familysharing$Getfamilyinfo,
      callback: BodyResponseCallback<Schema$FamilyInfo>
    ): void;
    getFamilyInfo(callback: BodyResponseCallback<Schema$FamilyInfo>): void;
    getFamilyInfo(
      paramsOrCallback?:
        | Params$Resource$Familysharing$Getfamilyinfo
        | BodyResponseCallback<Schema$FamilyInfo>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FamilyInfo>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FamilyInfo>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$FamilyInfo> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Familysharing$Getfamilyinfo;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Familysharing$Getfamilyinfo;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/familysharing/getFamilyInfo').replace(
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
        createAPIRequest<Schema$FamilyInfo>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$FamilyInfo>(parameters);
      }
    }

    /**
     * books.familysharing.share
     * @desc Initiates sharing of the content with the user's family. Empty response indicates success.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.familysharing.share({
     *     // The docid to share.
     *     docId: 'placeholder-value',
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *     // The volume to share.
     *     volumeId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.familysharing.share
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.docId The docid to share.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string=} params.volumeId The volume to share.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    share(
      params: Params$Resource$Familysharing$Share,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    share(
      params?: Params$Resource$Familysharing$Share,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    share(
      params: Params$Resource$Familysharing$Share,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    share(
      params: Params$Resource$Familysharing$Share,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    share(
      params: Params$Resource$Familysharing$Share,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    share(callback: BodyResponseCallback<Schema$Empty>): void;
    share(
      paramsOrCallback?:
        | Params$Resource$Familysharing$Share
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Familysharing$Share;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Familysharing$Share;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/familysharing/share').replace(
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * books.familysharing.unshare
     * @desc Initiates revoking content that has already been shared with the user's family. Empty response indicates success.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.familysharing.unshare({
     *     // The docid to unshare.
     *     docId: 'placeholder-value',
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *     // The volume to unshare.
     *     volumeId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.familysharing.unshare
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.docId The docid to unshare.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string=} params.volumeId The volume to unshare.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    unshare(
      params: Params$Resource$Familysharing$Unshare,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    unshare(
      params?: Params$Resource$Familysharing$Unshare,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    unshare(
      params: Params$Resource$Familysharing$Unshare,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    unshare(
      params: Params$Resource$Familysharing$Unshare,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    unshare(
      params: Params$Resource$Familysharing$Unshare,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    unshare(callback: BodyResponseCallback<Schema$Empty>): void;
    unshare(
      paramsOrCallback?:
        | Params$Resource$Familysharing$Unshare
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Familysharing$Unshare;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Familysharing$Unshare;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/familysharing/unshare').replace(
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }
  }

  export interface Params$Resource$Familysharing$Getfamilyinfo
    extends StandardParameters {
    /**
     * String to identify the originator of this request.
     */
    source?: string;
  }
  export interface Params$Resource$Familysharing$Share
    extends StandardParameters {
    /**
     * The docid to share.
     */
    docId?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * The volume to share.
     */
    volumeId?: string;
  }
  export interface Params$Resource$Familysharing$Unshare
    extends StandardParameters {
    /**
     * The docid to unshare.
     */
    docId?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * The volume to unshare.
     */
    volumeId?: string;
  }

  export class Resource$Layers {
    context: APIRequestContext;
    annotationData: Resource$Layers$Annotationdata;
    volumeAnnotations: Resource$Layers$Volumeannotations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.annotationData = new Resource$Layers$Annotationdata(this.context);
      this.volumeAnnotations = new Resource$Layers$Volumeannotations(
        this.context
      );
    }

    /**
     * books.layers.get
     * @desc Gets the layer summary for a volume.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.layers.get({
     *     // The content version for the requested volume.
     *     contentVersion: 'placeholder-value',
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *     // The ID for the layer to get the summary for.
     *     summaryId: 'placeholder-value',
     *     // The volume to retrieve layers for.
     *     volumeId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotationCount": 0,
     *   //   "annotationTypes": [],
     *   //   "annotationsDataLink": "my_annotationsDataLink",
     *   //   "annotationsLink": "my_annotationsLink",
     *   //   "contentVersion": "my_contentVersion",
     *   //   "dataCount": 0,
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "layerId": "my_layerId",
     *   //   "selfLink": "my_selfLink",
     *   //   "updated": "my_updated",
     *   //   "volumeAnnotationsVersion": "my_volumeAnnotationsVersion",
     *   //   "volumeId": "my_volumeId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.layers.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.contentVersion The content version for the requested volume.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string} params.summaryId The ID for the layer to get the summary for.
     * @param {string} params.volumeId The volume to retrieve layers for.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Layers$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Layers$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Layersummary>;
    get(
      params: Params$Resource$Layers$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Layers$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Layersummary>,
      callback: BodyResponseCallback<Schema$Layersummary>
    ): void;
    get(
      params: Params$Resource$Layers$Get,
      callback: BodyResponseCallback<Schema$Layersummary>
    ): void;
    get(callback: BodyResponseCallback<Schema$Layersummary>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Layers$Get
        | BodyResponseCallback<Schema$Layersummary>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Layersummary>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Layersummary>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Layersummary> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Layers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Layers$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/books/v1/volumes/{volumeId}/layersummary/{summaryId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['volumeId', 'summaryId'],
        pathParams: ['summaryId', 'volumeId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Layersummary>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Layersummary>(parameters);
      }
    }

    /**
     * books.layers.list
     * @desc List the layer summaries for a volume.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.layers.list({
     *     // The content version for the requested volume.
     *     contentVersion: 'placeholder-value',
     *     // Maximum number of results to return
     *     maxResults: 'placeholder-value',
     *     // The value of the nextToken from the previous page.
     *     pageToken: 'placeholder-value',
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *     // The volume to retrieve layers for.
     *     volumeId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "totalItems": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.layers.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.contentVersion The content version for the requested volume.
     * @param {integer=} params.maxResults Maximum number of results to return
     * @param {string=} params.pageToken The value of the nextToken from the previous page.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string} params.volumeId The volume to retrieve layers for.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Layers$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Layers$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Layersummaries>;
    list(
      params: Params$Resource$Layers$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Layers$List,
      options: MethodOptions | BodyResponseCallback<Schema$Layersummaries>,
      callback: BodyResponseCallback<Schema$Layersummaries>
    ): void;
    list(
      params: Params$Resource$Layers$List,
      callback: BodyResponseCallback<Schema$Layersummaries>
    ): void;
    list(callback: BodyResponseCallback<Schema$Layersummaries>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Layers$List
        | BodyResponseCallback<Schema$Layersummaries>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Layersummaries>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Layersummaries>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Layersummaries> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Layers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Layers$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/books/v1/volumes/{volumeId}/layersummary'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['volumeId'],
        pathParams: ['volumeId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Layersummaries>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Layersummaries>(parameters);
      }
    }
  }

  export interface Params$Resource$Layers$Get extends StandardParameters {
    /**
     * The content version for the requested volume.
     */
    contentVersion?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * The ID for the layer to get the summary for.
     */
    summaryId?: string;
    /**
     * The volume to retrieve layers for.
     */
    volumeId?: string;
  }
  export interface Params$Resource$Layers$List extends StandardParameters {
    /**
     * The content version for the requested volume.
     */
    contentVersion?: string;
    /**
     * Maximum number of results to return
     */
    maxResults?: number;
    /**
     * The value of the nextToken from the previous page.
     */
    pageToken?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * The volume to retrieve layers for.
     */
    volumeId?: string;
  }

  export class Resource$Layers$Annotationdata {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * books.layers.annotationData.get
     * @desc Gets the annotation data.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.layers.annotationData.get({
     *     // For the dictionary layer. Whether or not to allow web definitions.
     *     allowWebDefinitions: 'placeholder-value',
     *     // The ID of the annotation data to retrieve.
     *     annotationDataId: 'placeholder-value',
     *     // The content version for the volume you are trying to retrieve.
     *     contentVersion: 'placeholder-value',
     *     // The requested pixel height for any images. If height is provided width must
     *     // also be provided.
     *     h: 'placeholder-value',
     *     // The ID for the layer to get the annotations.
     *     layerId: 'placeholder-value',
     *     // The locale information for the data. ISO-639-1 language and ISO-3166-1
     *     // country code. Ex: 'en_US'.
     *     locale: 'placeholder-value',
     *     // The requested scale for the image.
     *     scale: 'placeholder-value',
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *     // The volume to retrieve annotations for.
     *     volumeId: 'placeholder-value',
     *     // The requested pixel width for any images. If width is provided height must
     *     // also be provided.
     *     w: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotationType": "my_annotationType",
     *   //   "data": {},
     *   //   "encodedData": "my_encodedData",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "layerId": "my_layerId",
     *   //   "selfLink": "my_selfLink",
     *   //   "updated": "my_updated",
     *   //   "volumeId": "my_volumeId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.layers.annotationData.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.allowWebDefinitions For the dictionary layer. Whether or not to allow web definitions.
     * @param {string} params.annotationDataId The ID of the annotation data to retrieve.
     * @param {string=} params.contentVersion The content version for the volume you are trying to retrieve.
     * @param {integer=} params.h The requested pixel height for any images. If height is provided width must also be provided.
     * @param {string} params.layerId The ID for the layer to get the annotations.
     * @param {string=} params.locale The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
     * @param {integer=} params.scale The requested scale for the image.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string} params.volumeId The volume to retrieve annotations for.
     * @param {integer=} params.w The requested pixel width for any images. If width is provided height must also be provided.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Layers$Annotationdata$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Layers$Annotationdata$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DictionaryAnnotationdata>;
    get(
      params: Params$Resource$Layers$Annotationdata$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Layers$Annotationdata$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DictionaryAnnotationdata>,
      callback: BodyResponseCallback<Schema$DictionaryAnnotationdata>
    ): void;
    get(
      params: Params$Resource$Layers$Annotationdata$Get,
      callback: BodyResponseCallback<Schema$DictionaryAnnotationdata>
    ): void;
    get(callback: BodyResponseCallback<Schema$DictionaryAnnotationdata>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Layers$Annotationdata$Get
        | BodyResponseCallback<Schema$DictionaryAnnotationdata>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DictionaryAnnotationdata>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DictionaryAnnotationdata>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$DictionaryAnnotationdata>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Layers$Annotationdata$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Layers$Annotationdata$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/books/v1/volumes/{volumeId}/layers/{layerId}/data/{annotationDataId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['volumeId', 'layerId', 'annotationDataId'],
        pathParams: ['annotationDataId', 'layerId', 'volumeId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DictionaryAnnotationdata>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$DictionaryAnnotationdata>(parameters);
      }
    }

    /**
     * books.layers.annotationData.list
     * @desc Gets the annotation data for a volume and layer.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.layers.annotationData.list({
     *     // The list of Annotation Data Ids to retrieve. Pagination is ignored if this
     *     // is set.
     *     annotationDataId: 'placeholder-value',
     *     // The content version for the requested volume.
     *     contentVersion: 'placeholder-value',
     *     // The requested pixel height for any images. If height is provided width must
     *     // also be provided.
     *     h: 'placeholder-value',
     *     // The ID for the layer to get the annotation data.
     *     layerId: 'placeholder-value',
     *     // The locale information for the data. ISO-639-1 language and ISO-3166-1
     *     // country code. Ex: 'en_US'.
     *     locale: 'placeholder-value',
     *     // Maximum number of results to return
     *     maxResults: 'placeholder-value',
     *     // The value of the nextToken from the previous page.
     *     pageToken: 'placeholder-value',
     *     // The requested scale for the image.
     *     scale: 'placeholder-value',
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *     // RFC 3339 timestamp to restrict to items updated prior to this timestamp
     *     // (exclusive).
     *     updatedMax: 'placeholder-value',
     *     // RFC 3339 timestamp to restrict to items updated since this timestamp
     *     // (inclusive).
     *     updatedMin: 'placeholder-value',
     *     // The volume to retrieve annotation data for.
     *     volumeId: 'placeholder-value',
     *     // The requested pixel width for any images. If width is provided height must
     *     // also be provided.
     *     w: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "totalItems": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.layers.annotationData.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.annotationDataId The list of Annotation Data Ids to retrieve. Pagination is ignored if this is set.
     * @param {string=} params.contentVersion The content version for the requested volume.
     * @param {integer=} params.h The requested pixel height for any images. If height is provided width must also be provided.
     * @param {string} params.layerId The ID for the layer to get the annotation data.
     * @param {string=} params.locale The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
     * @param {integer=} params.maxResults Maximum number of results to return
     * @param {string=} params.pageToken The value of the nextToken from the previous page.
     * @param {integer=} params.scale The requested scale for the image.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string=} params.updatedMax RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
     * @param {string=} params.updatedMin RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
     * @param {string} params.volumeId The volume to retrieve annotation data for.
     * @param {integer=} params.w The requested pixel width for any images. If width is provided height must also be provided.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Layers$Annotationdata$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Layers$Annotationdata$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Annotationsdata>;
    list(
      params: Params$Resource$Layers$Annotationdata$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Layers$Annotationdata$List,
      options: MethodOptions | BodyResponseCallback<Schema$Annotationsdata>,
      callback: BodyResponseCallback<Schema$Annotationsdata>
    ): void;
    list(
      params: Params$Resource$Layers$Annotationdata$List,
      callback: BodyResponseCallback<Schema$Annotationsdata>
    ): void;
    list(callback: BodyResponseCallback<Schema$Annotationsdata>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Layers$Annotationdata$List
        | BodyResponseCallback<Schema$Annotationsdata>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Annotationsdata>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Annotationsdata>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Annotationsdata> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Layers$Annotationdata$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Layers$Annotationdata$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/books/v1/volumes/{volumeId}/layers/{layerId}/data'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['volumeId', 'layerId'],
        pathParams: ['layerId', 'volumeId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Annotationsdata>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Annotationsdata>(parameters);
      }
    }
  }

  export interface Params$Resource$Layers$Annotationdata$Get
    extends StandardParameters {
    /**
     * For the dictionary layer. Whether or not to allow web definitions.
     */
    allowWebDefinitions?: boolean;
    /**
     * The ID of the annotation data to retrieve.
     */
    annotationDataId?: string;
    /**
     * The content version for the volume you are trying to retrieve.
     */
    contentVersion?: string;
    /**
     * The requested pixel height for any images. If height is provided width must also be provided.
     */
    h?: number;
    /**
     * The ID for the layer to get the annotations.
     */
    layerId?: string;
    /**
     * The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
     */
    locale?: string;
    /**
     * The requested scale for the image.
     */
    scale?: number;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * The volume to retrieve annotations for.
     */
    volumeId?: string;
    /**
     * The requested pixel width for any images. If width is provided height must also be provided.
     */
    w?: number;
  }
  export interface Params$Resource$Layers$Annotationdata$List
    extends StandardParameters {
    /**
     * The list of Annotation Data Ids to retrieve. Pagination is ignored if this is set.
     */
    annotationDataId?: string[];
    /**
     * The content version for the requested volume.
     */
    contentVersion?: string;
    /**
     * The requested pixel height for any images. If height is provided width must also be provided.
     */
    h?: number;
    /**
     * The ID for the layer to get the annotation data.
     */
    layerId?: string;
    /**
     * The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
     */
    locale?: string;
    /**
     * Maximum number of results to return
     */
    maxResults?: number;
    /**
     * The value of the nextToken from the previous page.
     */
    pageToken?: string;
    /**
     * The requested scale for the image.
     */
    scale?: number;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
     */
    updatedMax?: string;
    /**
     * RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
     */
    updatedMin?: string;
    /**
     * The volume to retrieve annotation data for.
     */
    volumeId?: string;
    /**
     * The requested pixel width for any images. If width is provided height must also be provided.
     */
    w?: number;
  }

  export class Resource$Layers$Volumeannotations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * books.layers.volumeAnnotations.get
     * @desc Gets the volume annotation.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.layers.volumeAnnotations.get({
     *     // The ID of the volume annotation to retrieve.
     *     annotationId: 'placeholder-value',
     *     // The ID for the layer to get the annotations.
     *     layerId: 'placeholder-value',
     *     // The locale information for the data. ISO-639-1 language and ISO-3166-1
     *     // country code. Ex: 'en_US'.
     *     locale: 'placeholder-value',
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *     // The volume to retrieve annotations for.
     *     volumeId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotationDataId": "my_annotationDataId",
     *   //   "annotationDataLink": "my_annotationDataLink",
     *   //   "annotationType": "my_annotationType",
     *   //   "contentRanges": {},
     *   //   "data": "my_data",
     *   //   "deleted": false,
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "layerId": "my_layerId",
     *   //   "pageIds": [],
     *   //   "selectedText": "my_selectedText",
     *   //   "selfLink": "my_selfLink",
     *   //   "updated": "my_updated",
     *   //   "volumeId": "my_volumeId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.layers.volumeAnnotations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.annotationId The ID of the volume annotation to retrieve.
     * @param {string} params.layerId The ID for the layer to get the annotations.
     * @param {string=} params.locale The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string} params.volumeId The volume to retrieve annotations for.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Layers$Volumeannotations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Layers$Volumeannotations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Volumeannotation>;
    get(
      params: Params$Resource$Layers$Volumeannotations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Layers$Volumeannotations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Volumeannotation>,
      callback: BodyResponseCallback<Schema$Volumeannotation>
    ): void;
    get(
      params: Params$Resource$Layers$Volumeannotations$Get,
      callback: BodyResponseCallback<Schema$Volumeannotation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Volumeannotation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Layers$Volumeannotations$Get
        | BodyResponseCallback<Schema$Volumeannotation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Volumeannotation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Volumeannotation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Volumeannotation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Layers$Volumeannotations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Layers$Volumeannotations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/books/v1/volumes/{volumeId}/layers/{layerId}/annotations/{annotationId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['volumeId', 'layerId', 'annotationId'],
        pathParams: ['annotationId', 'layerId', 'volumeId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Volumeannotation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Volumeannotation>(parameters);
      }
    }

    /**
     * books.layers.volumeAnnotations.list
     * @desc Gets the volume annotations for a volume and layer.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.layers.volumeAnnotations.list({
     *     // The content version for the requested volume.
     *     contentVersion: 'placeholder-value',
     *     // The end offset to end retrieving data from.
     *     endOffset: 'placeholder-value',
     *     // The end position to end retrieving data from.
     *     endPosition: 'placeholder-value',
     *     // The ID for the layer to get the annotations.
     *     layerId: 'placeholder-value',
     *     // The locale information for the data. ISO-639-1 language and ISO-3166-1
     *     // country code. Ex: 'en_US'.
     *     locale: 'placeholder-value',
     *     // Maximum number of results to return
     *     maxResults: 'placeholder-value',
     *     // The value of the nextToken from the previous page.
     *     pageToken: 'placeholder-value',
     *     // Set to true to return deleted annotations. updatedMin must be in the
     *     // request to use this. Defaults to false.
     *     showDeleted: 'placeholder-value',
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *     // The start offset to start retrieving data from.
     *     startOffset: 'placeholder-value',
     *     // The start position to start retrieving data from.
     *     startPosition: 'placeholder-value',
     *     // RFC 3339 timestamp to restrict to items updated prior to this timestamp
     *     // (exclusive).
     *     updatedMax: 'placeholder-value',
     *     // RFC 3339 timestamp to restrict to items updated since this timestamp
     *     // (inclusive).
     *     updatedMin: 'placeholder-value',
     *     // The version of the volume annotations that you are requesting.
     *     volumeAnnotationsVersion: 'placeholder-value',
     *     // The volume to retrieve annotations for.
     *     volumeId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "totalItems": 0,
     *   //   "version": "my_version"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.layers.volumeAnnotations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.contentVersion The content version for the requested volume.
     * @param {string=} params.endOffset The end offset to end retrieving data from.
     * @param {string=} params.endPosition The end position to end retrieving data from.
     * @param {string} params.layerId The ID for the layer to get the annotations.
     * @param {string=} params.locale The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
     * @param {integer=} params.maxResults Maximum number of results to return
     * @param {string=} params.pageToken The value of the nextToken from the previous page.
     * @param {boolean=} params.showDeleted Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string=} params.startOffset The start offset to start retrieving data from.
     * @param {string=} params.startPosition The start position to start retrieving data from.
     * @param {string=} params.updatedMax RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
     * @param {string=} params.updatedMin RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
     * @param {string=} params.volumeAnnotationsVersion The version of the volume annotations that you are requesting.
     * @param {string} params.volumeId The volume to retrieve annotations for.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Layers$Volumeannotations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Layers$Volumeannotations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Volumeannotations>;
    list(
      params: Params$Resource$Layers$Volumeannotations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Layers$Volumeannotations$List,
      options: MethodOptions | BodyResponseCallback<Schema$Volumeannotations>,
      callback: BodyResponseCallback<Schema$Volumeannotations>
    ): void;
    list(
      params: Params$Resource$Layers$Volumeannotations$List,
      callback: BodyResponseCallback<Schema$Volumeannotations>
    ): void;
    list(callback: BodyResponseCallback<Schema$Volumeannotations>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Layers$Volumeannotations$List
        | BodyResponseCallback<Schema$Volumeannotations>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Volumeannotations>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Volumeannotations>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$Volumeannotations>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Layers$Volumeannotations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Layers$Volumeannotations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/books/v1/volumes/{volumeId}/layers/{layerId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['volumeId', 'layerId'],
        pathParams: ['layerId', 'volumeId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Volumeannotations>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Volumeannotations>(parameters);
      }
    }
  }

  export interface Params$Resource$Layers$Volumeannotations$Get
    extends StandardParameters {
    /**
     * The ID of the volume annotation to retrieve.
     */
    annotationId?: string;
    /**
     * The ID for the layer to get the annotations.
     */
    layerId?: string;
    /**
     * The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
     */
    locale?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * The volume to retrieve annotations for.
     */
    volumeId?: string;
  }
  export interface Params$Resource$Layers$Volumeannotations$List
    extends StandardParameters {
    /**
     * The content version for the requested volume.
     */
    contentVersion?: string;
    /**
     * The end offset to end retrieving data from.
     */
    endOffset?: string;
    /**
     * The end position to end retrieving data from.
     */
    endPosition?: string;
    /**
     * The ID for the layer to get the annotations.
     */
    layerId?: string;
    /**
     * The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
     */
    locale?: string;
    /**
     * Maximum number of results to return
     */
    maxResults?: number;
    /**
     * The value of the nextToken from the previous page.
     */
    pageToken?: string;
    /**
     * Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.
     */
    showDeleted?: boolean;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * The start offset to start retrieving data from.
     */
    startOffset?: string;
    /**
     * The start position to start retrieving data from.
     */
    startPosition?: string;
    /**
     * RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
     */
    updatedMax?: string;
    /**
     * RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
     */
    updatedMin?: string;
    /**
     * The version of the volume annotations that you are requesting.
     */
    volumeAnnotationsVersion?: string;
    /**
     * The volume to retrieve annotations for.
     */
    volumeId?: string;
  }

  export class Resource$Myconfig {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * books.myconfig.getUserSettings
     * @desc Gets the current settings for the user.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.myconfig.getUserSettings({
     *     // Unused. Added only to workaround TEX mandatory request template requirement
     *     country: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "notesExport": {},
     *   //   "notification": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.myconfig.getUserSettings
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.country Unused. Added only to workaround TEX mandatory request template requirement
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getUserSettings(
      params: Params$Resource$Myconfig$Getusersettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getUserSettings(
      params?: Params$Resource$Myconfig$Getusersettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Usersettings>;
    getUserSettings(
      params: Params$Resource$Myconfig$Getusersettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getUserSettings(
      params: Params$Resource$Myconfig$Getusersettings,
      options: MethodOptions | BodyResponseCallback<Schema$Usersettings>,
      callback: BodyResponseCallback<Schema$Usersettings>
    ): void;
    getUserSettings(
      params: Params$Resource$Myconfig$Getusersettings,
      callback: BodyResponseCallback<Schema$Usersettings>
    ): void;
    getUserSettings(callback: BodyResponseCallback<Schema$Usersettings>): void;
    getUserSettings(
      paramsOrCallback?:
        | Params$Resource$Myconfig$Getusersettings
        | BodyResponseCallback<Schema$Usersettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Usersettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Usersettings>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Usersettings> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Myconfig$Getusersettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Myconfig$Getusersettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/myconfig/getUserSettings').replace(
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
        createAPIRequest<Schema$Usersettings>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Usersettings>(parameters);
      }
    }

    /**
     * books.myconfig.releaseDownloadAccess
     * @desc Release downloaded content access restriction.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.myconfig.releaseDownloadAccess({
     *     // The device/version ID from which to release the restriction.
     *     cpksver: 'placeholder-value',
     *     // ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
     *     locale: 'placeholder-value',
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *     // The volume(s) to release restrictions for.
     *     volumeIds: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "downloadAccessList": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.myconfig.releaseDownloadAccess
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.cpksver The device/version ID from which to release the restriction.
     * @param {string=} params.locale ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string=} params.volumeIds The volume(s) to release restrictions for.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    releaseDownloadAccess(
      params: Params$Resource$Myconfig$Releasedownloadaccess,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    releaseDownloadAccess(
      params?: Params$Resource$Myconfig$Releasedownloadaccess,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DownloadAccesses>;
    releaseDownloadAccess(
      params: Params$Resource$Myconfig$Releasedownloadaccess,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    releaseDownloadAccess(
      params: Params$Resource$Myconfig$Releasedownloadaccess,
      options: MethodOptions | BodyResponseCallback<Schema$DownloadAccesses>,
      callback: BodyResponseCallback<Schema$DownloadAccesses>
    ): void;
    releaseDownloadAccess(
      params: Params$Resource$Myconfig$Releasedownloadaccess,
      callback: BodyResponseCallback<Schema$DownloadAccesses>
    ): void;
    releaseDownloadAccess(
      callback: BodyResponseCallback<Schema$DownloadAccesses>
    ): void;
    releaseDownloadAccess(
      paramsOrCallback?:
        | Params$Resource$Myconfig$Releasedownloadaccess
        | BodyResponseCallback<Schema$DownloadAccesses>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DownloadAccesses>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DownloadAccesses>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DownloadAccesses> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Myconfig$Releasedownloadaccess;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Myconfig$Releasedownloadaccess;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/myconfig/releaseDownloadAccess').replace(
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
        createAPIRequest<Schema$DownloadAccesses>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$DownloadAccesses>(parameters);
      }
    }

    /**
     * books.myconfig.requestAccess
     * @desc Request concurrent and download access restrictions.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.myconfig.requestAccess({
     *     // The device/version ID from which to request the restrictions.
     *     cpksver: 'placeholder-value',
     *     // The type of access license to request. If not specified, the default is
     *     // BOTH.
     *     licenseTypes: 'placeholder-value',
     *     // ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
     *     locale: 'placeholder-value',
     *     // The client nonce value.
     *     nonce: 'placeholder-value',
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *     // The volume to request concurrent/download restrictions for.
     *     volumeId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "concurrentAccess": {},
     *   //   "downloadAccess": {},
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.myconfig.requestAccess
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.cpksver The device/version ID from which to request the restrictions.
     * @param {string=} params.licenseTypes The type of access license to request. If not specified, the default is BOTH.
     * @param {string=} params.locale ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
     * @param {string=} params.nonce The client nonce value.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string=} params.volumeId The volume to request concurrent/download restrictions for.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    requestAccess(
      params: Params$Resource$Myconfig$Requestaccess,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    requestAccess(
      params?: Params$Resource$Myconfig$Requestaccess,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RequestAccessData>;
    requestAccess(
      params: Params$Resource$Myconfig$Requestaccess,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    requestAccess(
      params: Params$Resource$Myconfig$Requestaccess,
      options: MethodOptions | BodyResponseCallback<Schema$RequestAccessData>,
      callback: BodyResponseCallback<Schema$RequestAccessData>
    ): void;
    requestAccess(
      params: Params$Resource$Myconfig$Requestaccess,
      callback: BodyResponseCallback<Schema$RequestAccessData>
    ): void;
    requestAccess(
      callback: BodyResponseCallback<Schema$RequestAccessData>
    ): void;
    requestAccess(
      paramsOrCallback?:
        | Params$Resource$Myconfig$Requestaccess
        | BodyResponseCallback<Schema$RequestAccessData>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RequestAccessData>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RequestAccessData>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$RequestAccessData>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Myconfig$Requestaccess;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Myconfig$Requestaccess;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/myconfig/requestAccess').replace(
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
        createAPIRequest<Schema$RequestAccessData>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$RequestAccessData>(parameters);
      }
    }

    /**
     * books.myconfig.syncVolumeLicenses
     * @desc Request downloaded content access for specified volumes on the My eBooks shelf.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.myconfig.syncVolumeLicenses({
     *     // The device/version ID from which to release the restriction.
     *     cpksver: 'placeholder-value',
     *     // List of features supported by the client, i.e., 'RENTALS'
     *     features: 'placeholder-value',
     *     // Set to true to include non-comics series. Defaults to false.
     *     includeNonComicsSeries: 'placeholder-value',
     *     // ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
     *     locale: 'placeholder-value',
     *     // The client nonce value.
     *     nonce: 'placeholder-value',
     *     // Set to true to show pre-ordered books. Defaults to false.
     *     showPreorders: 'placeholder-value',
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *     // The volume(s) to request download restrictions for.
     *     volumeIds: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "totalItems": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.myconfig.syncVolumeLicenses
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.cpksver The device/version ID from which to release the restriction.
     * @param {string=} params.features List of features supported by the client, i.e., 'RENTALS'
     * @param {boolean=} params.includeNonComicsSeries Set to true to include non-comics series. Defaults to false.
     * @param {string=} params.locale ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
     * @param {string=} params.nonce The client nonce value.
     * @param {boolean=} params.showPreorders Set to true to show pre-ordered books. Defaults to false.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string=} params.volumeIds The volume(s) to request download restrictions for.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    syncVolumeLicenses(
      params: Params$Resource$Myconfig$Syncvolumelicenses,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    syncVolumeLicenses(
      params?: Params$Resource$Myconfig$Syncvolumelicenses,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Volumes>;
    syncVolumeLicenses(
      params: Params$Resource$Myconfig$Syncvolumelicenses,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    syncVolumeLicenses(
      params: Params$Resource$Myconfig$Syncvolumelicenses,
      options: MethodOptions | BodyResponseCallback<Schema$Volumes>,
      callback: BodyResponseCallback<Schema$Volumes>
    ): void;
    syncVolumeLicenses(
      params: Params$Resource$Myconfig$Syncvolumelicenses,
      callback: BodyResponseCallback<Schema$Volumes>
    ): void;
    syncVolumeLicenses(callback: BodyResponseCallback<Schema$Volumes>): void;
    syncVolumeLicenses(
      paramsOrCallback?:
        | Params$Resource$Myconfig$Syncvolumelicenses
        | BodyResponseCallback<Schema$Volumes>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Volumes>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Volumes>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Volumes> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Myconfig$Syncvolumelicenses;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Myconfig$Syncvolumelicenses;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/myconfig/syncVolumeLicenses').replace(
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
        createAPIRequest<Schema$Volumes>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Volumes>(parameters);
      }
    }

    /**
     * books.myconfig.updateUserSettings
     * @desc Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.myconfig.updateUserSettings({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "kind": "my_kind",
     *       //   "notesExport": {},
     *       //   "notification": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "notesExport": {},
     *   //   "notification": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.myconfig.updateUserSettings
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().Usersettings} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateUserSettings(
      params: Params$Resource$Myconfig$Updateusersettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateUserSettings(
      params?: Params$Resource$Myconfig$Updateusersettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Usersettings>;
    updateUserSettings(
      params: Params$Resource$Myconfig$Updateusersettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateUserSettings(
      params: Params$Resource$Myconfig$Updateusersettings,
      options: MethodOptions | BodyResponseCallback<Schema$Usersettings>,
      callback: BodyResponseCallback<Schema$Usersettings>
    ): void;
    updateUserSettings(
      params: Params$Resource$Myconfig$Updateusersettings,
      callback: BodyResponseCallback<Schema$Usersettings>
    ): void;
    updateUserSettings(
      callback: BodyResponseCallback<Schema$Usersettings>
    ): void;
    updateUserSettings(
      paramsOrCallback?:
        | Params$Resource$Myconfig$Updateusersettings
        | BodyResponseCallback<Schema$Usersettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Usersettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Usersettings>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Usersettings> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Myconfig$Updateusersettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Myconfig$Updateusersettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/myconfig/updateUserSettings').replace(
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
        createAPIRequest<Schema$Usersettings>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Usersettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Myconfig$Getusersettings
    extends StandardParameters {
    /**
     * Unused. Added only to workaround TEX mandatory request template requirement
     */
    country?: string;
  }
  export interface Params$Resource$Myconfig$Releasedownloadaccess
    extends StandardParameters {
    /**
     * The device/version ID from which to release the restriction.
     */
    cpksver?: string;
    /**
     * ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
     */
    locale?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * The volume(s) to release restrictions for.
     */
    volumeIds?: string[];
  }
  export interface Params$Resource$Myconfig$Requestaccess
    extends StandardParameters {
    /**
     * The device/version ID from which to request the restrictions.
     */
    cpksver?: string;
    /**
     * The type of access license to request. If not specified, the default is BOTH.
     */
    licenseTypes?: string;
    /**
     * ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
     */
    locale?: string;
    /**
     * The client nonce value.
     */
    nonce?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * The volume to request concurrent/download restrictions for.
     */
    volumeId?: string;
  }
  export interface Params$Resource$Myconfig$Syncvolumelicenses
    extends StandardParameters {
    /**
     * The device/version ID from which to release the restriction.
     */
    cpksver?: string;
    /**
     * List of features supported by the client, i.e., 'RENTALS'
     */
    features?: string[];
    /**
     * Set to true to include non-comics series. Defaults to false.
     */
    includeNonComicsSeries?: boolean;
    /**
     * ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
     */
    locale?: string;
    /**
     * The client nonce value.
     */
    nonce?: string;
    /**
     * Set to true to show pre-ordered books. Defaults to false.
     */
    showPreorders?: boolean;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * The volume(s) to request download restrictions for.
     */
    volumeIds?: string[];
  }
  export interface Params$Resource$Myconfig$Updateusersettings
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$Usersettings;
  }

  export class Resource$Mylibrary {
    context: APIRequestContext;
    annotations: Resource$Mylibrary$Annotations;
    bookshelves: Resource$Mylibrary$Bookshelves;
    readingpositions: Resource$Mylibrary$Readingpositions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.annotations = new Resource$Mylibrary$Annotations(this.context);
      this.bookshelves = new Resource$Mylibrary$Bookshelves(this.context);
      this.readingpositions = new Resource$Mylibrary$Readingpositions(
        this.context
      );
    }
  }

  export class Resource$Mylibrary$Annotations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * books.mylibrary.annotations.delete
     * @desc Deletes an annotation.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.mylibrary.annotations.delete({
     *     // The ID for the annotation to delete.
     *     annotationId: 'placeholder-value',
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.mylibrary.annotations.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.annotationId The ID for the annotation to delete.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Mylibrary$Annotations$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Mylibrary$Annotations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Mylibrary$Annotations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Mylibrary$Annotations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Mylibrary$Annotations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Mylibrary$Annotations$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Mylibrary$Annotations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mylibrary$Annotations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/books/v1/mylibrary/annotations/{annotationId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['annotationId'],
        pathParams: ['annotationId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * books.mylibrary.annotations.insert
     * @desc Inserts a new annotation.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.mylibrary.annotations.insert({
     *     // The ID for the annotation to insert.
     *     annotationId: 'placeholder-value',
     *     // ISO-3166-1 code to override the IP-based location.
     *     country: 'placeholder-value',
     *     // Requests that only the summary of the specified layer be provided in the
     *     // response.
     *     showOnlySummaryInResponse: 'placeholder-value',
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "afterSelectedText": "my_afterSelectedText",
     *       //   "beforeSelectedText": "my_beforeSelectedText",
     *       //   "clientVersionRanges": {},
     *       //   "created": "my_created",
     *       //   "currentVersionRanges": {},
     *       //   "data": "my_data",
     *       //   "deleted": false,
     *       //   "highlightStyle": "my_highlightStyle",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "layerId": "my_layerId",
     *       //   "layerSummary": {},
     *       //   "pageIds": [],
     *       //   "selectedText": "my_selectedText",
     *       //   "selfLink": "my_selfLink",
     *       //   "updated": "my_updated",
     *       //   "volumeId": "my_volumeId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "afterSelectedText": "my_afterSelectedText",
     *   //   "beforeSelectedText": "my_beforeSelectedText",
     *   //   "clientVersionRanges": {},
     *   //   "created": "my_created",
     *   //   "currentVersionRanges": {},
     *   //   "data": "my_data",
     *   //   "deleted": false,
     *   //   "highlightStyle": "my_highlightStyle",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "layerId": "my_layerId",
     *   //   "layerSummary": {},
     *   //   "pageIds": [],
     *   //   "selectedText": "my_selectedText",
     *   //   "selfLink": "my_selfLink",
     *   //   "updated": "my_updated",
     *   //   "volumeId": "my_volumeId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.mylibrary.annotations.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.annotationId The ID for the annotation to insert.
     * @param {string=} params.country ISO-3166-1 code to override the IP-based location.
     * @param {boolean=} params.showOnlySummaryInResponse Requests that only the summary of the specified layer be provided in the response.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {().Annotation} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params: Params$Resource$Mylibrary$Annotations$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Mylibrary$Annotations$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Annotation>;
    insert(
      params: Params$Resource$Mylibrary$Annotations$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Mylibrary$Annotations$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Annotation>,
      callback: BodyResponseCallback<Schema$Annotation>
    ): void;
    insert(
      params: Params$Resource$Mylibrary$Annotations$Insert,
      callback: BodyResponseCallback<Schema$Annotation>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Annotation>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Mylibrary$Annotations$Insert
        | BodyResponseCallback<Schema$Annotation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Annotation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Annotation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Annotation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Mylibrary$Annotations$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mylibrary$Annotations$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/mylibrary/annotations').replace(
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
        createAPIRequest<Schema$Annotation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Annotation>(parameters);
      }
    }

    /**
     * books.mylibrary.annotations.list
     * @desc Retrieves a list of annotations, possibly filtered.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.mylibrary.annotations.list({
     *     // The content version for the requested volume.
     *     contentVersion: 'placeholder-value',
     *     // The layer ID to limit annotation by.
     *     layerId: 'placeholder-value',
     *     // The layer ID(s) to limit annotation by.
     *     layerIds: 'placeholder-value',
     *     // Maximum number of results to return
     *     maxResults: 'placeholder-value',
     *     // The value of the nextToken from the previous page.
     *     pageToken: 'placeholder-value',
     *     // Set to true to return deleted annotations. updatedMin must be in the
     *     // request to use this. Defaults to false.
     *     showDeleted: 'placeholder-value',
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *     // RFC 3339 timestamp to restrict to items updated prior to this timestamp
     *     // (exclusive).
     *     updatedMax: 'placeholder-value',
     *     // RFC 3339 timestamp to restrict to items updated since this timestamp
     *     // (inclusive).
     *     updatedMin: 'placeholder-value',
     *     // The volume to restrict annotations to.
     *     volumeId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "totalItems": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.mylibrary.annotations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.contentVersion The content version for the requested volume.
     * @param {string=} params.layerId The layer ID to limit annotation by.
     * @param {string=} params.layerIds The layer ID(s) to limit annotation by.
     * @param {integer=} params.maxResults Maximum number of results to return
     * @param {string=} params.pageToken The value of the nextToken from the previous page.
     * @param {boolean=} params.showDeleted Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string=} params.updatedMax RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
     * @param {string=} params.updatedMin RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
     * @param {string=} params.volumeId The volume to restrict annotations to.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Mylibrary$Annotations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Mylibrary$Annotations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Annotations>;
    list(
      params: Params$Resource$Mylibrary$Annotations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Mylibrary$Annotations$List,
      options: MethodOptions | BodyResponseCallback<Schema$Annotations>,
      callback: BodyResponseCallback<Schema$Annotations>
    ): void;
    list(
      params: Params$Resource$Mylibrary$Annotations$List,
      callback: BodyResponseCallback<Schema$Annotations>
    ): void;
    list(callback: BodyResponseCallback<Schema$Annotations>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Mylibrary$Annotations$List
        | BodyResponseCallback<Schema$Annotations>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Annotations>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Annotations>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Annotations> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Mylibrary$Annotations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mylibrary$Annotations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/mylibrary/annotations').replace(
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
        createAPIRequest<Schema$Annotations>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Annotations>(parameters);
      }
    }

    /**
     * books.mylibrary.annotations.summary
     * @desc Gets the summary of specified layers.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.mylibrary.annotations.summary({
     *     // Array of layer IDs to get the summary for.
     *     layerIds: 'placeholder-value',
     *     // Volume id to get the summary for.
     *     volumeId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "layers": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.mylibrary.annotations.summary
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.layerIds Array of layer IDs to get the summary for.
     * @param {string=} params.volumeId Volume id to get the summary for.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    summary(
      params: Params$Resource$Mylibrary$Annotations$Summary,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    summary(
      params?: Params$Resource$Mylibrary$Annotations$Summary,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AnnotationsSummary>;
    summary(
      params: Params$Resource$Mylibrary$Annotations$Summary,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    summary(
      params: Params$Resource$Mylibrary$Annotations$Summary,
      options: MethodOptions | BodyResponseCallback<Schema$AnnotationsSummary>,
      callback: BodyResponseCallback<Schema$AnnotationsSummary>
    ): void;
    summary(
      params: Params$Resource$Mylibrary$Annotations$Summary,
      callback: BodyResponseCallback<Schema$AnnotationsSummary>
    ): void;
    summary(callback: BodyResponseCallback<Schema$AnnotationsSummary>): void;
    summary(
      paramsOrCallback?:
        | Params$Resource$Mylibrary$Annotations$Summary
        | BodyResponseCallback<Schema$AnnotationsSummary>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AnnotationsSummary>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AnnotationsSummary>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AnnotationsSummary>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Mylibrary$Annotations$Summary;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mylibrary$Annotations$Summary;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/mylibrary/annotations/summary').replace(
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
        createAPIRequest<Schema$AnnotationsSummary>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$AnnotationsSummary>(parameters);
      }
    }

    /**
     * books.mylibrary.annotations.update
     * @desc Updates an existing annotation.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.mylibrary.annotations.update({
     *     // The ID for the annotation to update.
     *     annotationId: 'placeholder-value',
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "afterSelectedText": "my_afterSelectedText",
     *       //   "beforeSelectedText": "my_beforeSelectedText",
     *       //   "clientVersionRanges": {},
     *       //   "created": "my_created",
     *       //   "currentVersionRanges": {},
     *       //   "data": "my_data",
     *       //   "deleted": false,
     *       //   "highlightStyle": "my_highlightStyle",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "layerId": "my_layerId",
     *       //   "layerSummary": {},
     *       //   "pageIds": [],
     *       //   "selectedText": "my_selectedText",
     *       //   "selfLink": "my_selfLink",
     *       //   "updated": "my_updated",
     *       //   "volumeId": "my_volumeId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "afterSelectedText": "my_afterSelectedText",
     *   //   "beforeSelectedText": "my_beforeSelectedText",
     *   //   "clientVersionRanges": {},
     *   //   "created": "my_created",
     *   //   "currentVersionRanges": {},
     *   //   "data": "my_data",
     *   //   "deleted": false,
     *   //   "highlightStyle": "my_highlightStyle",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "layerId": "my_layerId",
     *   //   "layerSummary": {},
     *   //   "pageIds": [],
     *   //   "selectedText": "my_selectedText",
     *   //   "selfLink": "my_selfLink",
     *   //   "updated": "my_updated",
     *   //   "volumeId": "my_volumeId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.mylibrary.annotations.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.annotationId The ID for the annotation to update.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {().Annotation} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params: Params$Resource$Mylibrary$Annotations$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Mylibrary$Annotations$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Annotation>;
    update(
      params: Params$Resource$Mylibrary$Annotations$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Mylibrary$Annotations$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Annotation>,
      callback: BodyResponseCallback<Schema$Annotation>
    ): void;
    update(
      params: Params$Resource$Mylibrary$Annotations$Update,
      callback: BodyResponseCallback<Schema$Annotation>
    ): void;
    update(callback: BodyResponseCallback<Schema$Annotation>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Mylibrary$Annotations$Update
        | BodyResponseCallback<Schema$Annotation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Annotation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Annotation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Annotation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Mylibrary$Annotations$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mylibrary$Annotations$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/books/v1/mylibrary/annotations/{annotationId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['annotationId'],
        pathParams: ['annotationId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Annotation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Annotation>(parameters);
      }
    }
  }

  export interface Params$Resource$Mylibrary$Annotations$Delete
    extends StandardParameters {
    /**
     * The ID for the annotation to delete.
     */
    annotationId?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
  }
  export interface Params$Resource$Mylibrary$Annotations$Insert
    extends StandardParameters {
    /**
     * The ID for the annotation to insert.
     */
    annotationId?: string;
    /**
     * ISO-3166-1 code to override the IP-based location.
     */
    country?: string;
    /**
     * Requests that only the summary of the specified layer be provided in the response.
     */
    showOnlySummaryInResponse?: boolean;
    /**
     * String to identify the originator of this request.
     */
    source?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Annotation;
  }
  export interface Params$Resource$Mylibrary$Annotations$List
    extends StandardParameters {
    /**
     * The content version for the requested volume.
     */
    contentVersion?: string;
    /**
     * The layer ID to limit annotation by.
     */
    layerId?: string;
    /**
     * The layer ID(s) to limit annotation by.
     */
    layerIds?: string[];
    /**
     * Maximum number of results to return
     */
    maxResults?: number;
    /**
     * The value of the nextToken from the previous page.
     */
    pageToken?: string;
    /**
     * Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.
     */
    showDeleted?: boolean;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
     */
    updatedMax?: string;
    /**
     * RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
     */
    updatedMin?: string;
    /**
     * The volume to restrict annotations to.
     */
    volumeId?: string;
  }
  export interface Params$Resource$Mylibrary$Annotations$Summary
    extends StandardParameters {
    /**
     * Array of layer IDs to get the summary for.
     */
    layerIds?: string[];
    /**
     * Volume id to get the summary for.
     */
    volumeId?: string;
  }
  export interface Params$Resource$Mylibrary$Annotations$Update
    extends StandardParameters {
    /**
     * The ID for the annotation to update.
     */
    annotationId?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Annotation;
  }

  export class Resource$Mylibrary$Bookshelves {
    context: APIRequestContext;
    volumes: Resource$Mylibrary$Bookshelves$Volumes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.volumes = new Resource$Mylibrary$Bookshelves$Volumes(this.context);
    }

    /**
     * books.mylibrary.bookshelves.addVolume
     * @desc Adds a volume to a bookshelf.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.mylibrary.bookshelves.addVolume({
     *     // The reason for which the book is added to the library.
     *     reason: 'placeholder-value',
     *     // ID of bookshelf to which to add a volume.
     *     shelf: 'placeholder-value',
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *     // ID of volume to add.
     *     volumeId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.mylibrary.bookshelves.addVolume
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.reason The reason for which the book is added to the library.
     * @param {string} params.shelf ID of bookshelf to which to add a volume.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string=} params.volumeId ID of volume to add.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    addVolume(
      params: Params$Resource$Mylibrary$Bookshelves$Addvolume,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    addVolume(
      params?: Params$Resource$Mylibrary$Bookshelves$Addvolume,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    addVolume(
      params: Params$Resource$Mylibrary$Bookshelves$Addvolume,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    addVolume(
      params: Params$Resource$Mylibrary$Bookshelves$Addvolume,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    addVolume(
      params: Params$Resource$Mylibrary$Bookshelves$Addvolume,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    addVolume(callback: BodyResponseCallback<Schema$Empty>): void;
    addVolume(
      paramsOrCallback?:
        | Params$Resource$Mylibrary$Bookshelves$Addvolume
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Mylibrary$Bookshelves$Addvolume;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mylibrary$Bookshelves$Addvolume;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/books/v1/mylibrary/bookshelves/{shelf}/addVolume'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['shelf'],
        pathParams: ['shelf'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * books.mylibrary.bookshelves.clearVolumes
     * @desc Clears all volumes from a bookshelf.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.mylibrary.bookshelves.clearVolumes({
     *     // ID of bookshelf from which to remove a volume.
     *     shelf: 'placeholder-value',
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.mylibrary.bookshelves.clearVolumes
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.shelf ID of bookshelf from which to remove a volume.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    clearVolumes(
      params: Params$Resource$Mylibrary$Bookshelves$Clearvolumes,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    clearVolumes(
      params?: Params$Resource$Mylibrary$Bookshelves$Clearvolumes,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    clearVolumes(
      params: Params$Resource$Mylibrary$Bookshelves$Clearvolumes,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    clearVolumes(
      params: Params$Resource$Mylibrary$Bookshelves$Clearvolumes,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    clearVolumes(
      params: Params$Resource$Mylibrary$Bookshelves$Clearvolumes,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    clearVolumes(callback: BodyResponseCallback<Schema$Empty>): void;
    clearVolumes(
      paramsOrCallback?:
        | Params$Resource$Mylibrary$Bookshelves$Clearvolumes
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Mylibrary$Bookshelves$Clearvolumes;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mylibrary$Bookshelves$Clearvolumes;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/books/v1/mylibrary/bookshelves/{shelf}/clearVolumes'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['shelf'],
        pathParams: ['shelf'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * books.mylibrary.bookshelves.get
     * @desc Retrieves metadata for a specific bookshelf belonging to the authenticated user.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.mylibrary.bookshelves.get({
     *     // ID of bookshelf to retrieve.
     *     shelf: 'placeholder-value',
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "access": "my_access",
     *   //   "created": "my_created",
     *   //   "description": "my_description",
     *   //   "id": 0,
     *   //   "kind": "my_kind",
     *   //   "selfLink": "my_selfLink",
     *   //   "title": "my_title",
     *   //   "updated": "my_updated",
     *   //   "volumeCount": 0,
     *   //   "volumesLastUpdated": "my_volumesLastUpdated"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.mylibrary.bookshelves.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.shelf ID of bookshelf to retrieve.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Mylibrary$Bookshelves$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Mylibrary$Bookshelves$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Bookshelf>;
    get(
      params: Params$Resource$Mylibrary$Bookshelves$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Mylibrary$Bookshelves$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Bookshelf>,
      callback: BodyResponseCallback<Schema$Bookshelf>
    ): void;
    get(
      params: Params$Resource$Mylibrary$Bookshelves$Get,
      callback: BodyResponseCallback<Schema$Bookshelf>
    ): void;
    get(callback: BodyResponseCallback<Schema$Bookshelf>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Mylibrary$Bookshelves$Get
        | BodyResponseCallback<Schema$Bookshelf>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Bookshelf>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Bookshelf>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Bookshelf> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Mylibrary$Bookshelves$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mylibrary$Bookshelves$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/mylibrary/bookshelves/{shelf}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['shelf'],
        pathParams: ['shelf'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Bookshelf>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Bookshelf>(parameters);
      }
    }

    /**
     * books.mylibrary.bookshelves.list
     * @desc Retrieves a list of bookshelves belonging to the authenticated user.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.mylibrary.bookshelves.list({
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.mylibrary.bookshelves.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.source String to identify the originator of this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Mylibrary$Bookshelves$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Mylibrary$Bookshelves$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Bookshelves>;
    list(
      params: Params$Resource$Mylibrary$Bookshelves$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Mylibrary$Bookshelves$List,
      options: MethodOptions | BodyResponseCallback<Schema$Bookshelves>,
      callback: BodyResponseCallback<Schema$Bookshelves>
    ): void;
    list(
      params: Params$Resource$Mylibrary$Bookshelves$List,
      callback: BodyResponseCallback<Schema$Bookshelves>
    ): void;
    list(callback: BodyResponseCallback<Schema$Bookshelves>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Mylibrary$Bookshelves$List
        | BodyResponseCallback<Schema$Bookshelves>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Bookshelves>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Bookshelves>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Bookshelves> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Mylibrary$Bookshelves$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mylibrary$Bookshelves$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/mylibrary/bookshelves').replace(
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
        createAPIRequest<Schema$Bookshelves>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Bookshelves>(parameters);
      }
    }

    /**
     * books.mylibrary.bookshelves.moveVolume
     * @desc Moves a volume within a bookshelf.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.mylibrary.bookshelves.moveVolume({
     *     // ID of bookshelf with the volume.
     *     shelf: 'placeholder-value',
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *     // ID of volume to move.
     *     volumeId: 'placeholder-value',
     *     // Position on shelf to move the item (0 puts the item before the current
     *     // first item, 1 puts it between the first and the second and so on.)
     *     volumePosition: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.mylibrary.bookshelves.moveVolume
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.shelf ID of bookshelf with the volume.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string=} params.volumeId ID of volume to move.
     * @param {integer=} params.volumePosition Position on shelf to move the item (0 puts the item before the current first item, 1 puts it between the first and the second and so on.)
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    moveVolume(
      params: Params$Resource$Mylibrary$Bookshelves$Movevolume,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    moveVolume(
      params?: Params$Resource$Mylibrary$Bookshelves$Movevolume,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    moveVolume(
      params: Params$Resource$Mylibrary$Bookshelves$Movevolume,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    moveVolume(
      params: Params$Resource$Mylibrary$Bookshelves$Movevolume,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    moveVolume(
      params: Params$Resource$Mylibrary$Bookshelves$Movevolume,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    moveVolume(callback: BodyResponseCallback<Schema$Empty>): void;
    moveVolume(
      paramsOrCallback?:
        | Params$Resource$Mylibrary$Bookshelves$Movevolume
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Mylibrary$Bookshelves$Movevolume;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mylibrary$Bookshelves$Movevolume;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/books/v1/mylibrary/bookshelves/{shelf}/moveVolume'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['shelf'],
        pathParams: ['shelf'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * books.mylibrary.bookshelves.removeVolume
     * @desc Removes a volume from a bookshelf.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.mylibrary.bookshelves.removeVolume({
     *     // The reason for which the book is removed from the library.
     *     reason: 'placeholder-value',
     *     // ID of bookshelf from which to remove a volume.
     *     shelf: 'placeholder-value',
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *     // ID of volume to remove.
     *     volumeId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.mylibrary.bookshelves.removeVolume
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.reason The reason for which the book is removed from the library.
     * @param {string} params.shelf ID of bookshelf from which to remove a volume.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string=} params.volumeId ID of volume to remove.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    removeVolume(
      params: Params$Resource$Mylibrary$Bookshelves$Removevolume,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    removeVolume(
      params?: Params$Resource$Mylibrary$Bookshelves$Removevolume,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    removeVolume(
      params: Params$Resource$Mylibrary$Bookshelves$Removevolume,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    removeVolume(
      params: Params$Resource$Mylibrary$Bookshelves$Removevolume,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    removeVolume(
      params: Params$Resource$Mylibrary$Bookshelves$Removevolume,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    removeVolume(callback: BodyResponseCallback<Schema$Empty>): void;
    removeVolume(
      paramsOrCallback?:
        | Params$Resource$Mylibrary$Bookshelves$Removevolume
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Mylibrary$Bookshelves$Removevolume;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mylibrary$Bookshelves$Removevolume;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/books/v1/mylibrary/bookshelves/{shelf}/removeVolume'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['shelf'],
        pathParams: ['shelf'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }
  }

  export interface Params$Resource$Mylibrary$Bookshelves$Addvolume
    extends StandardParameters {
    /**
     * The reason for which the book is added to the library.
     */
    reason?: string;
    /**
     * ID of bookshelf to which to add a volume.
     */
    shelf?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * ID of volume to add.
     */
    volumeId?: string;
  }
  export interface Params$Resource$Mylibrary$Bookshelves$Clearvolumes
    extends StandardParameters {
    /**
     * ID of bookshelf from which to remove a volume.
     */
    shelf?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
  }
  export interface Params$Resource$Mylibrary$Bookshelves$Get
    extends StandardParameters {
    /**
     * ID of bookshelf to retrieve.
     */
    shelf?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
  }
  export interface Params$Resource$Mylibrary$Bookshelves$List
    extends StandardParameters {
    /**
     * String to identify the originator of this request.
     */
    source?: string;
  }
  export interface Params$Resource$Mylibrary$Bookshelves$Movevolume
    extends StandardParameters {
    /**
     * ID of bookshelf with the volume.
     */
    shelf?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * ID of volume to move.
     */
    volumeId?: string;
    /**
     * Position on shelf to move the item (0 puts the item before the current first item, 1 puts it between the first and the second and so on.)
     */
    volumePosition?: number;
  }
  export interface Params$Resource$Mylibrary$Bookshelves$Removevolume
    extends StandardParameters {
    /**
     * The reason for which the book is removed from the library.
     */
    reason?: string;
    /**
     * ID of bookshelf from which to remove a volume.
     */
    shelf?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * ID of volume to remove.
     */
    volumeId?: string;
  }

  export class Resource$Mylibrary$Bookshelves$Volumes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * books.mylibrary.bookshelves.volumes.list
     * @desc Gets volume information for volumes on a bookshelf.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.mylibrary.bookshelves.volumes.list({
     *     // ISO-3166-1 code to override the IP-based location.
     *     country: 'placeholder-value',
     *     // Maximum number of results to return
     *     maxResults: 'placeholder-value',
     *     // Restrict information returned to a set of selected fields.
     *     projection: 'placeholder-value',
     *     // Full-text search query string in this bookshelf.
     *     q: 'placeholder-value',
     *     // The bookshelf ID or name retrieve volumes for.
     *     shelf: 'placeholder-value',
     *     // Set to true to show pre-ordered books. Defaults to false.
     *     showPreorders: 'placeholder-value',
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *     // Index of the first element to return (starts at 0)
     *     startIndex: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "totalItems": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.mylibrary.bookshelves.volumes.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.country ISO-3166-1 code to override the IP-based location.
     * @param {integer=} params.maxResults Maximum number of results to return
     * @param {string=} params.projection Restrict information returned to a set of selected fields.
     * @param {string=} params.q Full-text search query string in this bookshelf.
     * @param {string} params.shelf The bookshelf ID or name retrieve volumes for.
     * @param {boolean=} params.showPreorders Set to true to show pre-ordered books. Defaults to false.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {integer=} params.startIndex Index of the first element to return (starts at 0)
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Mylibrary$Bookshelves$Volumes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Mylibrary$Bookshelves$Volumes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Volumes>;
    list(
      params: Params$Resource$Mylibrary$Bookshelves$Volumes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Mylibrary$Bookshelves$Volumes$List,
      options: MethodOptions | BodyResponseCallback<Schema$Volumes>,
      callback: BodyResponseCallback<Schema$Volumes>
    ): void;
    list(
      params: Params$Resource$Mylibrary$Bookshelves$Volumes$List,
      callback: BodyResponseCallback<Schema$Volumes>
    ): void;
    list(callback: BodyResponseCallback<Schema$Volumes>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Mylibrary$Bookshelves$Volumes$List
        | BodyResponseCallback<Schema$Volumes>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Volumes>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Volumes>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Volumes> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Mylibrary$Bookshelves$Volumes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mylibrary$Bookshelves$Volumes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/books/v1/mylibrary/bookshelves/{shelf}/volumes'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['shelf'],
        pathParams: ['shelf'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Volumes>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Volumes>(parameters);
      }
    }
  }

  export interface Params$Resource$Mylibrary$Bookshelves$Volumes$List
    extends StandardParameters {
    /**
     * ISO-3166-1 code to override the IP-based location.
     */
    country?: string;
    /**
     * Maximum number of results to return
     */
    maxResults?: number;
    /**
     * Restrict information returned to a set of selected fields.
     */
    projection?: string;
    /**
     * Full-text search query string in this bookshelf.
     */
    q?: string;
    /**
     * The bookshelf ID or name retrieve volumes for.
     */
    shelf?: string;
    /**
     * Set to true to show pre-ordered books. Defaults to false.
     */
    showPreorders?: boolean;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * Index of the first element to return (starts at 0)
     */
    startIndex?: number;
  }

  export class Resource$Mylibrary$Readingpositions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * books.mylibrary.readingpositions.get
     * @desc Retrieves my reading position information for a volume.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.mylibrary.readingpositions.get({
     *     // Volume content version for which this reading position is requested.
     *     contentVersion: 'placeholder-value',
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *     // ID of volume for which to retrieve a reading position.
     *     volumeId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "epubCfiPosition": "my_epubCfiPosition",
     *   //   "gbImagePosition": "my_gbImagePosition",
     *   //   "gbTextPosition": "my_gbTextPosition",
     *   //   "kind": "my_kind",
     *   //   "pdfPosition": "my_pdfPosition",
     *   //   "updated": "my_updated",
     *   //   "volumeId": "my_volumeId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.mylibrary.readingpositions.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.contentVersion Volume content version for which this reading position is requested.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string} params.volumeId ID of volume for which to retrieve a reading position.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Mylibrary$Readingpositions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Mylibrary$Readingpositions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReadingPosition>;
    get(
      params: Params$Resource$Mylibrary$Readingpositions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Mylibrary$Readingpositions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ReadingPosition>,
      callback: BodyResponseCallback<Schema$ReadingPosition>
    ): void;
    get(
      params: Params$Resource$Mylibrary$Readingpositions$Get,
      callback: BodyResponseCallback<Schema$ReadingPosition>
    ): void;
    get(callback: BodyResponseCallback<Schema$ReadingPosition>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Mylibrary$Readingpositions$Get
        | BodyResponseCallback<Schema$ReadingPosition>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReadingPosition>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReadingPosition>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ReadingPosition> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Mylibrary$Readingpositions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mylibrary$Readingpositions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/books/v1/mylibrary/readingpositions/{volumeId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['volumeId'],
        pathParams: ['volumeId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReadingPosition>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ReadingPosition>(parameters);
      }
    }

    /**
     * books.mylibrary.readingpositions.setPosition
     * @desc Sets my reading position information for a volume.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.mylibrary.readingpositions.setPosition({
     *     // Action that caused this reading position to be set.
     *     action: 'placeholder-value',
     *     // Volume content version for which this reading position applies.
     *     contentVersion: 'placeholder-value',
     *     // Random persistent device cookie optional on set position.
     *     deviceCookie: 'placeholder-value',
     *     // Position string for the new volume reading position.
     *     position: 'placeholder-value',
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *     // RFC 3339 UTC format timestamp associated with this reading position.
     *     timestamp: 'placeholder-value',
     *     // ID of volume for which to update the reading position.
     *     volumeId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.mylibrary.readingpositions.setPosition
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.action Action that caused this reading position to be set.
     * @param {string=} params.contentVersion Volume content version for which this reading position applies.
     * @param {string=} params.deviceCookie Random persistent device cookie optional on set position.
     * @param {string=} params.position Position string for the new volume reading position.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string=} params.timestamp RFC 3339 UTC format timestamp associated with this reading position.
     * @param {string} params.volumeId ID of volume for which to update the reading position.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setPosition(
      params: Params$Resource$Mylibrary$Readingpositions$Setposition,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setPosition(
      params?: Params$Resource$Mylibrary$Readingpositions$Setposition,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    setPosition(
      params: Params$Resource$Mylibrary$Readingpositions$Setposition,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setPosition(
      params: Params$Resource$Mylibrary$Readingpositions$Setposition,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    setPosition(
      params: Params$Resource$Mylibrary$Readingpositions$Setposition,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    setPosition(callback: BodyResponseCallback<Schema$Empty>): void;
    setPosition(
      paramsOrCallback?:
        | Params$Resource$Mylibrary$Readingpositions$Setposition
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Mylibrary$Readingpositions$Setposition;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mylibrary$Readingpositions$Setposition;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/books/v1/mylibrary/readingpositions/{volumeId}/setPosition'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['volumeId'],
        pathParams: ['volumeId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }
  }

  export interface Params$Resource$Mylibrary$Readingpositions$Get
    extends StandardParameters {
    /**
     * Volume content version for which this reading position is requested.
     */
    contentVersion?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * ID of volume for which to retrieve a reading position.
     */
    volumeId?: string;
  }
  export interface Params$Resource$Mylibrary$Readingpositions$Setposition
    extends StandardParameters {
    /**
     * Action that caused this reading position to be set.
     */
    action?: string;
    /**
     * Volume content version for which this reading position applies.
     */
    contentVersion?: string;
    /**
     * Random persistent device cookie optional on set position.
     */
    deviceCookie?: string;
    /**
     * Position string for the new volume reading position.
     */
    position?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * RFC 3339 UTC format timestamp associated with this reading position.
     */
    timestamp?: string;
    /**
     * ID of volume for which to update the reading position.
     */
    volumeId?: string;
  }

  export class Resource$Notification {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * books.notification.get
     * @desc Returns notification details for a given notification id.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.notification.get({
     *     // ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for
     *     // generating notification title and body.
     *     locale: 'placeholder-value',
     *     // String to identify the notification.
     *     notification_id: 'placeholder-value',
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "body": "my_body",
     *   //   "crmExperimentIds": [],
     *   //   "doc_id": "my_doc_id",
     *   //   "doc_type": "my_doc_type",
     *   //   "dont_show_notification": false,
     *   //   "iconUrl": "my_iconUrl",
     *   //   "is_document_mature": false,
     *   //   "kind": "my_kind",
     *   //   "notificationGroup": "my_notificationGroup",
     *   //   "notification_type": "my_notification_type",
     *   //   "pcampaign_id": "my_pcampaign_id",
     *   //   "reason": "my_reason",
     *   //   "show_notification_settings_action": false,
     *   //   "targetUrl": "my_targetUrl",
     *   //   "timeToExpireMs": "my_timeToExpireMs",
     *   //   "title": "my_title"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.notification.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating notification title and body.
     * @param {string=} params.notification_id String to identify the notification.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Notification$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Notification$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Notification>;
    get(
      params: Params$Resource$Notification$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Notification$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Notification>,
      callback: BodyResponseCallback<Schema$Notification>
    ): void;
    get(
      params: Params$Resource$Notification$Get,
      callback: BodyResponseCallback<Schema$Notification>
    ): void;
    get(callback: BodyResponseCallback<Schema$Notification>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Notification$Get
        | BodyResponseCallback<Schema$Notification>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Notification>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Notification>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Notification> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Notification$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Notification$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/notification/get').replace(
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
        createAPIRequest<Schema$Notification>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Notification>(parameters);
      }
    }
  }

  export interface Params$Resource$Notification$Get extends StandardParameters {
    /**
     * ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating notification title and body.
     */
    locale?: string;
    /**
     * String to identify the notification.
     */
    notification_id?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
  }

  export class Resource$Onboarding {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * books.onboarding.listCategories
     * @desc List categories for onboarding experience.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.onboarding.listCategories({
     *     // ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
     *     locale: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.onboarding.listCategories
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listCategories(
      params: Params$Resource$Onboarding$Listcategories,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listCategories(
      params?: Params$Resource$Onboarding$Listcategories,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Category>;
    listCategories(
      params: Params$Resource$Onboarding$Listcategories,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listCategories(
      params: Params$Resource$Onboarding$Listcategories,
      options: MethodOptions | BodyResponseCallback<Schema$Category>,
      callback: BodyResponseCallback<Schema$Category>
    ): void;
    listCategories(
      params: Params$Resource$Onboarding$Listcategories,
      callback: BodyResponseCallback<Schema$Category>
    ): void;
    listCategories(callback: BodyResponseCallback<Schema$Category>): void;
    listCategories(
      paramsOrCallback?:
        | Params$Resource$Onboarding$Listcategories
        | BodyResponseCallback<Schema$Category>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Category>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Category>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Category> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Onboarding$Listcategories;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Onboarding$Listcategories;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/onboarding/listCategories').replace(
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
        createAPIRequest<Schema$Category>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Category>(parameters);
      }
    }

    /**
     * books.onboarding.listCategoryVolumes
     * @desc List available volumes under categories for onboarding experience.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.onboarding.listCategoryVolumes({
     *     // List of category ids requested.
     *     categoryId: 'placeholder-value',
     *     // ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
     *     locale: 'placeholder-value',
     *     // The maximum allowed maturity rating of returned volumes. Books with a
     *     // higher maturity rating are filtered out.
     *     maxAllowedMaturityRating: 'placeholder-value',
     *     // Number of maximum results per page to be included in the response.
     *     pageSize: 'placeholder-value',
     *     // The value of the nextToken from the previous page.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.onboarding.listCategoryVolumes
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.categoryId List of category ids requested.
     * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
     * @param {string=} params.maxAllowedMaturityRating The maximum allowed maturity rating of returned volumes. Books with a higher maturity rating are filtered out.
     * @param {integer=} params.pageSize Number of maximum results per page to be included in the response.
     * @param {string=} params.pageToken The value of the nextToken from the previous page.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listCategoryVolumes(
      params: Params$Resource$Onboarding$Listcategoryvolumes,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listCategoryVolumes(
      params?: Params$Resource$Onboarding$Listcategoryvolumes,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Volume2>;
    listCategoryVolumes(
      params: Params$Resource$Onboarding$Listcategoryvolumes,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listCategoryVolumes(
      params: Params$Resource$Onboarding$Listcategoryvolumes,
      options: MethodOptions | BodyResponseCallback<Schema$Volume2>,
      callback: BodyResponseCallback<Schema$Volume2>
    ): void;
    listCategoryVolumes(
      params: Params$Resource$Onboarding$Listcategoryvolumes,
      callback: BodyResponseCallback<Schema$Volume2>
    ): void;
    listCategoryVolumes(callback: BodyResponseCallback<Schema$Volume2>): void;
    listCategoryVolumes(
      paramsOrCallback?:
        | Params$Resource$Onboarding$Listcategoryvolumes
        | BodyResponseCallback<Schema$Volume2>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Volume2>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Volume2>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Volume2> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Onboarding$Listcategoryvolumes;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Onboarding$Listcategoryvolumes;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/onboarding/listCategoryVolumes').replace(
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
        createAPIRequest<Schema$Volume2>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Volume2>(parameters);
      }
    }
  }

  export interface Params$Resource$Onboarding$Listcategories
    extends StandardParameters {
    /**
     * ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
     */
    locale?: string;
  }
  export interface Params$Resource$Onboarding$Listcategoryvolumes
    extends StandardParameters {
    /**
     * List of category ids requested.
     */
    categoryId?: string[];
    /**
     * ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
     */
    locale?: string;
    /**
     * The maximum allowed maturity rating of returned volumes. Books with a higher maturity rating are filtered out.
     */
    maxAllowedMaturityRating?: string;
    /**
     * Number of maximum results per page to be included in the response.
     */
    pageSize?: number;
    /**
     * The value of the nextToken from the previous page.
     */
    pageToken?: string;
  }

  export class Resource$Personalizedstream {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * books.personalizedstream.get
     * @desc Returns a stream of personalized book clusters
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.personalizedstream.get({
     *     // ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for
     *     // generating recommendations.
     *     locale: 'placeholder-value',
     *     // The maximum allowed maturity rating of returned recommendations. Books with
     *     // a higher maturity rating are filtered out.
     *     maxAllowedMaturityRating: 'placeholder-value',
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusters": [],
     *   //   "kind": "my_kind",
     *   //   "totalClusters": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.personalizedstream.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
     * @param {string=} params.maxAllowedMaturityRating The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Personalizedstream$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Personalizedstream$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Discoveryclusters>;
    get(
      params: Params$Resource$Personalizedstream$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Personalizedstream$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Discoveryclusters>,
      callback: BodyResponseCallback<Schema$Discoveryclusters>
    ): void;
    get(
      params: Params$Resource$Personalizedstream$Get,
      callback: BodyResponseCallback<Schema$Discoveryclusters>
    ): void;
    get(callback: BodyResponseCallback<Schema$Discoveryclusters>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Personalizedstream$Get
        | BodyResponseCallback<Schema$Discoveryclusters>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Discoveryclusters>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Discoveryclusters>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$Discoveryclusters>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Personalizedstream$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Personalizedstream$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/personalizedstream/get').replace(
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
        createAPIRequest<Schema$Discoveryclusters>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Discoveryclusters>(parameters);
      }
    }
  }

  export interface Params$Resource$Personalizedstream$Get
    extends StandardParameters {
    /**
     * ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
     */
    locale?: string;
    /**
     * The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
     */
    maxAllowedMaturityRating?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
  }

  export class Resource$Promooffer {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * books.promooffer.accept
     * @desc Accepts the promo offer.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.promooffer.accept({
     *     // device android_id
     *     androidId: 'placeholder-value',
     *     // device device
     *     device: 'placeholder-value',
     *     // device manufacturer
     *     manufacturer: 'placeholder-value',
     *     // device model
     *     model: 'placeholder-value',
     *
     *     offerId: 'placeholder-value',
     *     // device product
     *     product: 'placeholder-value',
     *     // device serial
     *     serial: 'placeholder-value',
     *     // Volume id to exercise the offer
     *     volumeId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.promooffer.accept
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.androidId device android_id
     * @param {string=} params.device device device
     * @param {string=} params.manufacturer device manufacturer
     * @param {string=} params.model device model
     * @param {string=} params.offerId
     * @param {string=} params.product device product
     * @param {string=} params.serial device serial
     * @param {string=} params.volumeId Volume id to exercise the offer
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    accept(
      params: Params$Resource$Promooffer$Accept,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    accept(
      params?: Params$Resource$Promooffer$Accept,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    accept(
      params: Params$Resource$Promooffer$Accept,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    accept(
      params: Params$Resource$Promooffer$Accept,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    accept(
      params: Params$Resource$Promooffer$Accept,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    accept(callback: BodyResponseCallback<Schema$Empty>): void;
    accept(
      paramsOrCallback?:
        | Params$Resource$Promooffer$Accept
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Promooffer$Accept;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Promooffer$Accept;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/promooffer/accept').replace(
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * books.promooffer.dismiss
     * @desc Marks the promo offer as dismissed.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.promooffer.dismiss({
     *     // device android_id
     *     androidId: 'placeholder-value',
     *     // device device
     *     device: 'placeholder-value',
     *     // device manufacturer
     *     manufacturer: 'placeholder-value',
     *     // device model
     *     model: 'placeholder-value',
     *     // Offer to dimiss
     *     offerId: 'placeholder-value',
     *     // device product
     *     product: 'placeholder-value',
     *     // device serial
     *     serial: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.promooffer.dismiss
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.androidId device android_id
     * @param {string=} params.device device device
     * @param {string=} params.manufacturer device manufacturer
     * @param {string=} params.model device model
     * @param {string=} params.offerId Offer to dimiss
     * @param {string=} params.product device product
     * @param {string=} params.serial device serial
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    dismiss(
      params: Params$Resource$Promooffer$Dismiss,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    dismiss(
      params?: Params$Resource$Promooffer$Dismiss,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    dismiss(
      params: Params$Resource$Promooffer$Dismiss,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    dismiss(
      params: Params$Resource$Promooffer$Dismiss,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    dismiss(
      params: Params$Resource$Promooffer$Dismiss,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    dismiss(callback: BodyResponseCallback<Schema$Empty>): void;
    dismiss(
      paramsOrCallback?:
        | Params$Resource$Promooffer$Dismiss
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Promooffer$Dismiss;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Promooffer$Dismiss;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/promooffer/dismiss').replace(
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * books.promooffer.get
     * @desc Returns a list of promo offers available to the user
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.promooffer.get({
     *     // device android_id
     *     androidId: 'placeholder-value',
     *     // device device
     *     device: 'placeholder-value',
     *     // device manufacturer
     *     manufacturer: 'placeholder-value',
     *     // device model
     *     model: 'placeholder-value',
     *     // device product
     *     product: 'placeholder-value',
     *     // device serial
     *     serial: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.promooffer.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.androidId device android_id
     * @param {string=} params.device device device
     * @param {string=} params.manufacturer device manufacturer
     * @param {string=} params.model device model
     * @param {string=} params.product device product
     * @param {string=} params.serial device serial
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Promooffer$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Promooffer$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Offers>;
    get(
      params: Params$Resource$Promooffer$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Promooffer$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Offers>,
      callback: BodyResponseCallback<Schema$Offers>
    ): void;
    get(
      params: Params$Resource$Promooffer$Get,
      callback: BodyResponseCallback<Schema$Offers>
    ): void;
    get(callback: BodyResponseCallback<Schema$Offers>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Promooffer$Get
        | BodyResponseCallback<Schema$Offers>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Offers>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Offers>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Offers> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Promooffer$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Promooffer$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/promooffer/get').replace(
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
        createAPIRequest<Schema$Offers>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Offers>(parameters);
      }
    }
  }

  export interface Params$Resource$Promooffer$Accept
    extends StandardParameters {
    /**
     * device android_id
     */
    androidId?: string;
    /**
     * device device
     */
    device?: string;
    /**
     * device manufacturer
     */
    manufacturer?: string;
    /**
     * device model
     */
    model?: string;
    /**
     *
     */
    offerId?: string;
    /**
     * device product
     */
    product?: string;
    /**
     * device serial
     */
    serial?: string;
    /**
     * Volume id to exercise the offer
     */
    volumeId?: string;
  }
  export interface Params$Resource$Promooffer$Dismiss
    extends StandardParameters {
    /**
     * device android_id
     */
    androidId?: string;
    /**
     * device device
     */
    device?: string;
    /**
     * device manufacturer
     */
    manufacturer?: string;
    /**
     * device model
     */
    model?: string;
    /**
     * Offer to dimiss
     */
    offerId?: string;
    /**
     * device product
     */
    product?: string;
    /**
     * device serial
     */
    serial?: string;
  }
  export interface Params$Resource$Promooffer$Get extends StandardParameters {
    /**
     * device android_id
     */
    androidId?: string;
    /**
     * device device
     */
    device?: string;
    /**
     * device manufacturer
     */
    manufacturer?: string;
    /**
     * device model
     */
    model?: string;
    /**
     * device product
     */
    product?: string;
    /**
     * device serial
     */
    serial?: string;
  }

  export class Resource$Series {
    context: APIRequestContext;
    membership: Resource$Series$Membership;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.membership = new Resource$Series$Membership(this.context);
    }

    /**
     * books.series.get
     * @desc Returns Series metadata for the given series ids.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.series.get({
     *     // String that identifies the series
     *     series_id: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "series": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.series.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.series_id String that identifies the series
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Series$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Series$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Series>;
    get(
      params: Params$Resource$Series$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Series$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Series>,
      callback: BodyResponseCallback<Schema$Series>
    ): void;
    get(
      params: Params$Resource$Series$Get,
      callback: BodyResponseCallback<Schema$Series>
    ): void;
    get(callback: BodyResponseCallback<Schema$Series>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Series$Get
        | BodyResponseCallback<Schema$Series>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Series>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Series>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Series> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Series$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Series$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/series/get').replace(
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
        createAPIRequest<Schema$Series>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Series>(parameters);
      }
    }
  }

  export interface Params$Resource$Series$Get extends StandardParameters {
    /**
     * String that identifies the series
     */
    series_id?: string[];
  }

  export class Resource$Series$Membership {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * books.series.membership.get
     * @desc Returns Series membership data given the series id.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.series.membership.get({
     *     // Number of maximum results per page to be included in the response.
     *     page_size: 'placeholder-value',
     *     // The value of the nextToken from the previous page.
     *     page_token: 'placeholder-value',
     *     // String that identifies the series
     *     series_id: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "member": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.series.membership.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.page_size Number of maximum results per page to be included in the response.
     * @param {string=} params.page_token The value of the nextToken from the previous page.
     * @param {string=} params.series_id String that identifies the series
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Series$Membership$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Series$Membership$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Seriesmembership>;
    get(
      params: Params$Resource$Series$Membership$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Series$Membership$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Seriesmembership>,
      callback: BodyResponseCallback<Schema$Seriesmembership>
    ): void;
    get(
      params: Params$Resource$Series$Membership$Get,
      callback: BodyResponseCallback<Schema$Seriesmembership>
    ): void;
    get(callback: BodyResponseCallback<Schema$Seriesmembership>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Series$Membership$Get
        | BodyResponseCallback<Schema$Seriesmembership>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Seriesmembership>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Seriesmembership>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Seriesmembership> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Series$Membership$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Series$Membership$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/series/membership/get').replace(
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
        createAPIRequest<Schema$Seriesmembership>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Seriesmembership>(parameters);
      }
    }
  }

  export interface Params$Resource$Series$Membership$Get
    extends StandardParameters {
    /**
     * Number of maximum results per page to be included in the response.
     */
    page_size?: number;
    /**
     * The value of the nextToken from the previous page.
     */
    page_token?: string;
    /**
     * String that identifies the series
     */
    series_id?: string;
  }

  export class Resource$Volumes {
    context: APIRequestContext;
    associated: Resource$Volumes$Associated;
    mybooks: Resource$Volumes$Mybooks;
    recommended: Resource$Volumes$Recommended;
    useruploaded: Resource$Volumes$Useruploaded;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.associated = new Resource$Volumes$Associated(this.context);
      this.mybooks = new Resource$Volumes$Mybooks(this.context);
      this.recommended = new Resource$Volumes$Recommended(this.context);
      this.useruploaded = new Resource$Volumes$Useruploaded(this.context);
    }

    /**
     * books.volumes.get
     * @desc Gets volume information for a single volume.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.volumes.get({
     *     // ISO-3166-1 code to override the IP-based location.
     *     country: 'placeholder-value',
     *     // Set to true to include non-comics series. Defaults to false.
     *     includeNonComicsSeries: 'placeholder-value',
     *     // Brand results for partner ID.
     *     partner: 'placeholder-value',
     *     // Restrict information returned to a set of selected fields.
     *     projection: 'placeholder-value',
     *     // string  to identify the originator of this request.
     *     source: 'placeholder-value',
     *
     *     user_library_consistent_read: 'placeholder-value',
     *     // ID of volume to retrieve.
     *     volumeId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessInfo": {},
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "layerInfo": {},
     *   //   "recommendedInfo": {},
     *   //   "saleInfo": {},
     *   //   "searchInfo": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "userInfo": {},
     *   //   "volumeInfo": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.volumes.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.country ISO-3166-1 code to override the IP-based location.
     * @param {boolean=} params.includeNonComicsSeries Set to true to include non-comics series. Defaults to false.
     * @param {string=} params.partner Brand results for partner ID.
     * @param {string=} params.projection Restrict information returned to a set of selected fields.
     * @param {string=} params.source string  to identify the originator of this request.
     * @param {boolean=} params.user_library_consistent_read
     * @param {string} params.volumeId ID of volume to retrieve.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Volumes$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Volumes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Volume>;
    get(
      params: Params$Resource$Volumes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Volumes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Volume>,
      callback: BodyResponseCallback<Schema$Volume>
    ): void;
    get(
      params: Params$Resource$Volumes$Get,
      callback: BodyResponseCallback<Schema$Volume>
    ): void;
    get(callback: BodyResponseCallback<Schema$Volume>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Volumes$Get
        | BodyResponseCallback<Schema$Volume>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Volume>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Volume>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Volume> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Volumes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Volumes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/volumes/{volumeId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['volumeId'],
        pathParams: ['volumeId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Volume>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Volume>(parameters);
      }
    }

    /**
     * books.volumes.list
     * @desc Performs a book search.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.volumes.list({
     *     // Restrict to volumes by download availability.
     *     download: 'placeholder-value',
     *     // Filter search results.
     *     filter: 'placeholder-value',
     *     // Restrict results to books with this language code.
     *     langRestrict: 'placeholder-value',
     *     // Restrict search to this user's library.
     *     libraryRestrict: 'placeholder-value',
     *     // The maximum allowed maturity rating of returned recommendations. Books with
     *     // a higher maturity rating are filtered out.
     *     maxAllowedMaturityRating: 'placeholder-value',
     *     // Maximum number of results to return.
     *     maxResults: 'placeholder-value',
     *     // Sort search results.
     *     orderBy: 'placeholder-value',
     *     // Restrict and brand results for partner ID.
     *     partner: 'placeholder-value',
     *     // Restrict to books or magazines.
     *     printType: 'placeholder-value',
     *     // Restrict information returned to a set of selected fields.
     *     projection: 'placeholder-value',
     *     // Full-text search query string.
     *     q: 'placeholder-value',
     *     // Set to true to show books available for preorder. Defaults to false.
     *     showPreorders: 'placeholder-value',
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *     // Index of the first result to return (starts at 0)
     *     startIndex: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "totalItems": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.volumes.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.download Restrict to volumes by download availability.
     * @param {string=} params.filter Filter search results.
     * @param {string=} params.langRestrict Restrict results to books with this language code.
     * @param {string=} params.libraryRestrict Restrict search to this user's library.
     * @param {string=} params.maxAllowedMaturityRating The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.orderBy Sort search results.
     * @param {string=} params.partner Restrict and brand results for partner ID.
     * @param {string=} params.printType Restrict to books or magazines.
     * @param {string=} params.projection Restrict information returned to a set of selected fields.
     * @param {string=} params.q Full-text search query string.
     * @param {boolean=} params.showPreorders Set to true to show books available for preorder. Defaults to false.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {integer=} params.startIndex Index of the first result to return (starts at 0)
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Volumes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Volumes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Volumes>;
    list(
      params: Params$Resource$Volumes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Volumes$List,
      options: MethodOptions | BodyResponseCallback<Schema$Volumes>,
      callback: BodyResponseCallback<Schema$Volumes>
    ): void;
    list(
      params: Params$Resource$Volumes$List,
      callback: BodyResponseCallback<Schema$Volumes>
    ): void;
    list(callback: BodyResponseCallback<Schema$Volumes>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Volumes$List
        | BodyResponseCallback<Schema$Volumes>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Volumes>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Volumes>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Volumes> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Volumes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Volumes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/volumes').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Volumes>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Volumes>(parameters);
      }
    }
  }

  export interface Params$Resource$Volumes$Get extends StandardParameters {
    /**
     * ISO-3166-1 code to override the IP-based location.
     */
    country?: string;
    /**
     * Set to true to include non-comics series. Defaults to false.
     */
    includeNonComicsSeries?: boolean;
    /**
     * Brand results for partner ID.
     */
    partner?: string;
    /**
     * Restrict information returned to a set of selected fields.
     */
    projection?: string;
    /**
     * string  to identify the originator of this request.
     */
    source?: string;
    /**
     *
     */
    user_library_consistent_read?: boolean;
    /**
     * ID of volume to retrieve.
     */
    volumeId?: string;
  }
  export interface Params$Resource$Volumes$List extends StandardParameters {
    /**
     * Restrict to volumes by download availability.
     */
    download?: string;
    /**
     * Filter search results.
     */
    filter?: string;
    /**
     * Restrict results to books with this language code.
     */
    langRestrict?: string;
    /**
     * Restrict search to this user's library.
     */
    libraryRestrict?: string;
    /**
     * The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
     */
    maxAllowedMaturityRating?: string;
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Sort search results.
     */
    orderBy?: string;
    /**
     * Restrict and brand results for partner ID.
     */
    partner?: string;
    /**
     * Restrict to books or magazines.
     */
    printType?: string;
    /**
     * Restrict information returned to a set of selected fields.
     */
    projection?: string;
    /**
     * Full-text search query string.
     */
    q?: string;
    /**
     * Set to true to show books available for preorder. Defaults to false.
     */
    showPreorders?: boolean;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * Index of the first result to return (starts at 0)
     */
    startIndex?: number;
  }

  export class Resource$Volumes$Associated {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * books.volumes.associated.list
     * @desc Return a list of associated books.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.volumes.associated.list({
     *     // Association type.
     *     association: 'placeholder-value',
     *     // ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for
     *     // generating recommendations.
     *     locale: 'placeholder-value',
     *     // The maximum allowed maturity rating of returned recommendations. Books with
     *     // a higher maturity rating are filtered out.
     *     maxAllowedMaturityRating: 'placeholder-value',
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *     // ID of the source volume.
     *     volumeId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "totalItems": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.volumes.associated.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.association Association type.
     * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
     * @param {string=} params.maxAllowedMaturityRating The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string} params.volumeId ID of the source volume.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Volumes$Associated$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Volumes$Associated$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Volumes>;
    list(
      params: Params$Resource$Volumes$Associated$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Volumes$Associated$List,
      options: MethodOptions | BodyResponseCallback<Schema$Volumes>,
      callback: BodyResponseCallback<Schema$Volumes>
    ): void;
    list(
      params: Params$Resource$Volumes$Associated$List,
      callback: BodyResponseCallback<Schema$Volumes>
    ): void;
    list(callback: BodyResponseCallback<Schema$Volumes>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Volumes$Associated$List
        | BodyResponseCallback<Schema$Volumes>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Volumes>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Volumes>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Volumes> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Volumes$Associated$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Volumes$Associated$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/volumes/{volumeId}/associated').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['volumeId'],
        pathParams: ['volumeId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Volumes>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Volumes>(parameters);
      }
    }
  }

  export interface Params$Resource$Volumes$Associated$List
    extends StandardParameters {
    /**
     * Association type.
     */
    association?: string;
    /**
     * ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
     */
    locale?: string;
    /**
     * The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
     */
    maxAllowedMaturityRating?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * ID of the source volume.
     */
    volumeId?: string;
  }

  export class Resource$Volumes$Mybooks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * books.volumes.mybooks.list
     * @desc Return a list of books in My Library.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.volumes.mybooks.list({
     *     // How the book was acquired
     *     acquireMethod: 'placeholder-value',
     *     // ISO-3166-1 code to override the IP-based location.
     *     country: 'placeholder-value',
     *     // ISO-639-1 language and ISO-3166-1 country code. Ex:'en_US'. Used for
     *     // generating recommendations.
     *     locale: 'placeholder-value',
     *     // Maximum number of results to return.
     *     maxResults: 'placeholder-value',
     *     // The processing state of the user uploaded volumes to be returned.
     *     // Applicable only if the UPLOADED is specified in the acquireMethod.
     *     processingState: 'placeholder-value',
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *     // Index of the first result to return (starts at 0)
     *     startIndex: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "totalItems": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.volumes.mybooks.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.acquireMethod How the book was acquired
     * @param {string=} params.country ISO-3166-1 code to override the IP-based location.
     * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex:'en_US'. Used for generating recommendations.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.processingState The processing state of the user uploaded volumes to be returned. Applicable only if the UPLOADED is specified in the acquireMethod.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {integer=} params.startIndex Index of the first result to return (starts at 0)
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Volumes$Mybooks$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Volumes$Mybooks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Volumes>;
    list(
      params: Params$Resource$Volumes$Mybooks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Volumes$Mybooks$List,
      options: MethodOptions | BodyResponseCallback<Schema$Volumes>,
      callback: BodyResponseCallback<Schema$Volumes>
    ): void;
    list(
      params: Params$Resource$Volumes$Mybooks$List,
      callback: BodyResponseCallback<Schema$Volumes>
    ): void;
    list(callback: BodyResponseCallback<Schema$Volumes>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Volumes$Mybooks$List
        | BodyResponseCallback<Schema$Volumes>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Volumes>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Volumes>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Volumes> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Volumes$Mybooks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Volumes$Mybooks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/volumes/mybooks').replace(
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
        createAPIRequest<Schema$Volumes>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Volumes>(parameters);
      }
    }
  }

  export interface Params$Resource$Volumes$Mybooks$List
    extends StandardParameters {
    /**
     * How the book was acquired
     */
    acquireMethod?: string[];
    /**
     * ISO-3166-1 code to override the IP-based location.
     */
    country?: string;
    /**
     * ISO-639-1 language and ISO-3166-1 country code. Ex:'en_US'. Used for generating recommendations.
     */
    locale?: string;
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * The processing state of the user uploaded volumes to be returned. Applicable only if the UPLOADED is specified in the acquireMethod.
     */
    processingState?: string[];
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * Index of the first result to return (starts at 0)
     */
    startIndex?: number;
  }

  export class Resource$Volumes$Recommended {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * books.volumes.recommended.list
     * @desc Return a list of recommended books for the current user.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.volumes.recommended.list({
     *     // ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for
     *     // generating recommendations.
     *     locale: 'placeholder-value',
     *     // The maximum allowed maturity rating of returned recommendations. Books with
     *     // a higher maturity rating are filtered out.
     *     maxAllowedMaturityRating: 'placeholder-value',
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "totalItems": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.volumes.recommended.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
     * @param {string=} params.maxAllowedMaturityRating The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Volumes$Recommended$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Volumes$Recommended$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Volumes>;
    list(
      params: Params$Resource$Volumes$Recommended$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Volumes$Recommended$List,
      options: MethodOptions | BodyResponseCallback<Schema$Volumes>,
      callback: BodyResponseCallback<Schema$Volumes>
    ): void;
    list(
      params: Params$Resource$Volumes$Recommended$List,
      callback: BodyResponseCallback<Schema$Volumes>
    ): void;
    list(callback: BodyResponseCallback<Schema$Volumes>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Volumes$Recommended$List
        | BodyResponseCallback<Schema$Volumes>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Volumes>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Volumes>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Volumes> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Volumes$Recommended$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Volumes$Recommended$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/volumes/recommended').replace(
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
        createAPIRequest<Schema$Volumes>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Volumes>(parameters);
      }
    }

    /**
     * books.volumes.recommended.rate
     * @desc Rate a recommended book for the current user.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.volumes.recommended.rate({
     *     // ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for
     *     // generating recommendations.
     *     locale: 'placeholder-value',
     *     // Rating to be given to the volume.
     *     rating: 'placeholder-value',
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *     // ID of the source volume.
     *     volumeId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "consistency_token": "my_consistency_token"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.volumes.recommended.rate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
     * @param {string=} params.rating Rating to be given to the volume.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string=} params.volumeId ID of the source volume.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    rate(
      params: Params$Resource$Volumes$Recommended$Rate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    rate(
      params?: Params$Resource$Volumes$Recommended$Rate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BooksVolumesRecommendedRateResponse>;
    rate(
      params: Params$Resource$Volumes$Recommended$Rate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    rate(
      params: Params$Resource$Volumes$Recommended$Rate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BooksVolumesRecommendedRateResponse>,
      callback: BodyResponseCallback<Schema$BooksVolumesRecommendedRateResponse>
    ): void;
    rate(
      params: Params$Resource$Volumes$Recommended$Rate,
      callback: BodyResponseCallback<Schema$BooksVolumesRecommendedRateResponse>
    ): void;
    rate(
      callback: BodyResponseCallback<Schema$BooksVolumesRecommendedRateResponse>
    ): void;
    rate(
      paramsOrCallback?:
        | Params$Resource$Volumes$Recommended$Rate
        | BodyResponseCallback<Schema$BooksVolumesRecommendedRateResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BooksVolumesRecommendedRateResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BooksVolumesRecommendedRateResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$BooksVolumesRecommendedRateResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Volumes$Recommended$Rate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Volumes$Recommended$Rate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/volumes/recommended/rate').replace(
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
        createAPIRequest<Schema$BooksVolumesRecommendedRateResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$BooksVolumesRecommendedRateResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Volumes$Recommended$List
    extends StandardParameters {
    /**
     * ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
     */
    locale?: string;
    /**
     * The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
     */
    maxAllowedMaturityRating?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
  }
  export interface Params$Resource$Volumes$Recommended$Rate
    extends StandardParameters {
    /**
     * ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
     */
    locale?: string;
    /**
     * Rating to be given to the volume.
     */
    rating?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * ID of the source volume.
     */
    volumeId?: string;
  }

  export class Resource$Volumes$Useruploaded {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * books.volumes.useruploaded.list
     * @desc Return a list of books uploaded by the current user.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/books.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const books = google.books('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/books'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await books.volumes.useruploaded.list({
     *     // ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for
     *     // generating recommendations.
     *     locale: 'placeholder-value',
     *     // Maximum number of results to return.
     *     maxResults: 'placeholder-value',
     *     // The processing state of the user uploaded volumes to be returned.
     *     processingState: 'placeholder-value',
     *     // String to identify the originator of this request.
     *     source: 'placeholder-value',
     *     // Index of the first result to return (starts at 0)
     *     startIndex: 'placeholder-value',
     *     // The ids of the volumes to be returned. If not specified all that match the
     *     // processingState are returned.
     *     volumeId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "totalItems": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias books.volumes.useruploaded.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.processingState The processing state of the user uploaded volumes to be returned.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {integer=} params.startIndex Index of the first result to return (starts at 0)
     * @param {string=} params.volumeId The ids of the volumes to be returned. If not specified all that match the processingState are returned.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Volumes$Useruploaded$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Volumes$Useruploaded$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Volumes>;
    list(
      params: Params$Resource$Volumes$Useruploaded$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Volumes$Useruploaded$List,
      options: MethodOptions | BodyResponseCallback<Schema$Volumes>,
      callback: BodyResponseCallback<Schema$Volumes>
    ): void;
    list(
      params: Params$Resource$Volumes$Useruploaded$List,
      callback: BodyResponseCallback<Schema$Volumes>
    ): void;
    list(callback: BodyResponseCallback<Schema$Volumes>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Volumes$Useruploaded$List
        | BodyResponseCallback<Schema$Volumes>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Volumes>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Volumes>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Volumes> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Volumes$Useruploaded$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Volumes$Useruploaded$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/books/v1/volumes/useruploaded').replace(
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
        createAPIRequest<Schema$Volumes>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Volumes>(parameters);
      }
    }
  }

  export interface Params$Resource$Volumes$Useruploaded$List
    extends StandardParameters {
    /**
     * ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
     */
    locale?: string;
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * The processing state of the user uploaded volumes to be returned.
     */
    processingState?: string[];
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * Index of the first result to return (starts at 0)
     */
    startIndex?: number;
    /**
     * The ids of the volumes to be returned. If not specified all that match the processingState are returned.
     */
    volumeId?: string[];
  }
}
