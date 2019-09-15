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

export namespace plusDomains_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * Data format for the response.
     */
    alt?: string;
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
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
  }

  /**
   * Google+ Domains API
   *
   * Builds on top of the Google+ platform for Google Apps Domains.
   *
   * @example
   * const {google} = require('googleapis');
   * const plusDomains = google.plusDomains('v1');
   *
   * @namespace plusDomains
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Plusdomains
   */
  export class Plusdomains {
    context: APIRequestContext;
    activities: Resource$Activities;
    audiences: Resource$Audiences;
    circles: Resource$Circles;
    comments: Resource$Comments;
    media: Resource$Media;
    people: Resource$People;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.activities = new Resource$Activities(this.context);
      this.audiences = new Resource$Audiences(this.context);
      this.circles = new Resource$Circles(this.context);
      this.comments = new Resource$Comments(this.context);
      this.media = new Resource$Media(this.context);
      this.people = new Resource$People(this.context);
    }
  }

  export interface Schema$Acl {
    /**
     * Description of the access granted, suitable for display.
     */
    description?: string | null;
    /**
     * Whether access is restricted to the domain.
     */
    domainRestricted?: boolean | null;
    /**
     * The list of access entries.
     */
    items?: Schema$PlusDomainsAclentryResource[];
    /**
     * Identifies this resource as a collection of access controls. Value: &quot;plus#acl&quot;.
     */
    kind?: string | null;
  }
  export interface Schema$Activity {
    /**
     * Identifies who has access to see this activity.
     */
    access?: Schema$Acl;
    /**
     * The person who performed this activity.
     */
    actor?: {
      clientSpecificActorInfo?: {youtubeActorInfo?: {channelId?: string}};
      displayName?: string;
      id?: string;
      image?: {url?: string};
      name?: {familyName?: string; givenName?: string};
      url?: string;
      verification?: {adHocVerified?: string};
    } | null;
    /**
     * Street address where this activity occurred.
     */
    address?: string | null;
    /**
     * Additional content added by the person who shared this activity, applicable only when resharing an activity.
     */
    annotation?: string | null;
    /**
     * If this activity is a crosspost from another system, this property specifies the ID of the original activity.
     */
    crosspostSource?: string | null;
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string | null;
    /**
     * Latitude and longitude where this activity occurred. Format is latitude followed by longitude, space separated.
     */
    geocode?: string | null;
    /**
     * The ID of this activity.
     */
    id?: string | null;
    /**
     * Identifies this resource as an activity. Value: &quot;plus#activity&quot;.
     */
    kind?: string | null;
    /**
     * The location where this activity occurred.
     */
    location?: Schema$Place;
    /**
     * The object of this activity.
     */
    object?: {
      actor?: {
        clientSpecificActorInfo?: {youtubeActorInfo?: {channelId?: string}};
        displayName?: string;
        id?: string;
        image?: {url?: string};
        url?: string;
        verification?: {adHocVerified?: string};
      };
      attachments?: Array<{
        content?: string;
        displayName?: string;
        embed?: {type?: string; url?: string};
        fullImage?: {
          height?: number;
          type?: string;
          url?: string;
          width?: number;
        };
        id?: string;
        image?: {height?: number; type?: string; url?: string; width?: number};
        objectType?: string;
        previewThumbnails?: Array<{url?: string}>;
        thumbnails?: Array<{
          description?: string;
          image?: {
            height?: number;
            type?: string;
            url?: string;
            width?: number;
          };
          url?: string;
        }>;
        url?: string;
      }>;
      content?: string;
      id?: string;
      objectType?: string;
      originalContent?: string;
      plusoners?: {selfLink?: string; totalItems?: number};
      replies?: {selfLink?: string; totalItems?: number};
      resharers?: {selfLink?: string; totalItems?: number};
      statusForViewer?: {
        canComment?: boolean;
        canPlusone?: boolean;
        canUpdate?: boolean;
        isPlusOned?: boolean;
        resharingDisabled?: boolean;
      };
      url?: string;
    } | null;
    /**
     * ID of the place where this activity occurred.
     */
    placeId?: string | null;
    /**
     * Name of the place where this activity occurred.
     */
    placeName?: string | null;
    /**
     * The service provider that initially published this activity.
     */
    provider?: {title?: string} | null;
    /**
     * The time at which this activity was initially published. Formatted as an RFC 3339 timestamp.
     */
    published?: string | null;
    /**
     * Radius, in meters, of the region where this activity occurred, centered at the latitude and longitude identified in geocode.
     */
    radius?: string | null;
    /**
     * Title of this activity.
     */
    title?: string | null;
    /**
     * The time at which this activity was last updated. Formatted as an RFC 3339 timestamp.
     */
    updated?: string | null;
    /**
     * The link to this activity.
     */
    url?: string | null;
    /**
     * This activity&#39;s verb, which indicates the action that was performed. Possible values include, but are not limited to, the following values:   - &quot;post&quot; - Publish content to the stream.  - &quot;share&quot; - Reshare an activity.
     */
    verb?: string | null;
  }
  export interface Schema$ActivityFeed {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string | null;
    /**
     * The ID of this collection of activities. Deprecated.
     */
    id?: string | null;
    /**
     * The activities in this page of results.
     */
    items?: Schema$Activity[];
    /**
     * Identifies this resource as a collection of activities. Value: &quot;plus#activityFeed&quot;.
     */
    kind?: string | null;
    /**
     * Link to the next page of activities.
     */
    nextLink?: string | null;
    /**
     * The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * Link to this activity resource.
     */
    selfLink?: string | null;
    /**
     * The title of this collection of activities, which is a truncated portion of the content.
     */
    title?: string | null;
    /**
     * The time at which this collection of activities was last updated. Formatted as an RFC 3339 timestamp.
     */
    updated?: string | null;
  }
  export interface Schema$Audience {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string | null;
    /**
     * The access control list entry.
     */
    item?: Schema$PlusDomainsAclentryResource;
    /**
     * Identifies this resource as an audience. Value: &quot;plus#audience&quot;.
     */
    kind?: string | null;
    /**
     * The number of people in this circle. This only applies if entity_type is CIRCLE.
     */
    memberCount?: number | null;
    /**
     * The circle members&#39; visibility as chosen by the owner of the circle. This only applies for items with &quot;item.type&quot; equals &quot;circle&quot;. Possible values are:   - &quot;public&quot; - Members are visible to the public.  - &quot;limited&quot; - Members are visible to a limited audience.  - &quot;private&quot; - Members are visible to the owner only.
     */
    visibility?: string | null;
  }
  export interface Schema$AudiencesFeed {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string | null;
    /**
     * The audiences in this result.
     */
    items?: Schema$Audience[];
    /**
     * Identifies this resource as a collection of audiences. Value: &quot;plus#audienceFeed&quot;.
     */
    kind?: string | null;
    /**
     * The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The total number of ACL entries. The number of entries in this response may be smaller due to paging.
     */
    totalItems?: number | null;
  }
  export interface Schema$Circle {
    /**
     * The description of this circle.
     */
    description?: string | null;
    /**
     * The circle name.
     */
    displayName?: string | null;
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string | null;
    /**
     * The ID of the circle.
     */
    id?: string | null;
    /**
     * Identifies this resource as a circle. Value: &quot;plus#circle&quot;.
     */
    kind?: string | null;
    /**
     * The people in this circle.
     */
    people?: {totalItems?: number} | null;
    /**
     * Link to this circle resource
     */
    selfLink?: string | null;
  }
  export interface Schema$CircleFeed {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string | null;
    /**
     * The circles in this page of results.
     */
    items?: Schema$Circle[];
    /**
     * Identifies this resource as a collection of circles. Value: &quot;plus#circleFeed&quot;.
     */
    kind?: string | null;
    /**
     * Link to the next page of circles.
     */
    nextLink?: string | null;
    /**
     * The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * Link to this page of circles.
     */
    selfLink?: string | null;
    /**
     * The title of this list of resources.
     */
    title?: string | null;
    /**
     * The total number of circles. The number of circles in this response may be smaller due to paging.
     */
    totalItems?: number | null;
  }
  export interface Schema$Comment {
    /**
     * The person who posted this comment.
     */
    actor?: {
      clientSpecificActorInfo?: {youtubeActorInfo?: {channelId?: string}};
      displayName?: string;
      id?: string;
      image?: {url?: string};
      url?: string;
      verification?: {adHocVerified?: string};
    } | null;
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string | null;
    /**
     * The ID of this comment.
     */
    id?: string | null;
    /**
     * The activity this comment replied to.
     */
    inReplyTo?: Array<{id?: string; url?: string}> | null;
    /**
     * Identifies this resource as a comment. Value: &quot;plus#comment&quot;.
     */
    kind?: string | null;
    /**
     * The object of this comment.
     */
    object?: {
      content?: string;
      objectType?: string;
      originalContent?: string;
    } | null;
    /**
     * People who +1&#39;d this comment.
     */
    plusoners?: {totalItems?: number} | null;
    /**
     * The time at which this comment was initially published. Formatted as an RFC 3339 timestamp.
     */
    published?: string | null;
    /**
     * Link to this comment resource.
     */
    selfLink?: string | null;
    /**
     * The time at which this comment was last updated. Formatted as an RFC 3339 timestamp.
     */
    updated?: string | null;
    /**
     * This comment&#39;s verb, indicating what action was performed. Possible values are:   - &quot;post&quot; - Publish content to the stream.
     */
    verb?: string | null;
  }
  export interface Schema$CommentFeed {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string | null;
    /**
     * The ID of this collection of comments.
     */
    id?: string | null;
    /**
     * The comments in this page of results.
     */
    items?: Schema$Comment[];
    /**
     * Identifies this resource as a collection of comments. Value: &quot;plus#commentFeed&quot;.
     */
    kind?: string | null;
    /**
     * Link to the next page of activities.
     */
    nextLink?: string | null;
    /**
     * The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The title of this collection of comments.
     */
    title?: string | null;
    /**
     * The time at which this collection of comments was last updated. Formatted as an RFC 3339 timestamp.
     */
    updated?: string | null;
  }
  export interface Schema$Media {
    /**
     * The person who uploaded this media.
     */
    author?: {
      displayName?: string;
      id?: string;
      image?: {url?: string};
      url?: string;
    } | null;
    /**
     * The display name for this media.
     */
    displayName?: string | null;
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string | null;
    /**
     * Exif information of the media item.
     */
    exif?: {time?: string} | null;
    /**
     * The height in pixels of the original image.
     */
    height?: number | null;
    /**
     * ID of this media, which is generated by the API.
     */
    id?: string | null;
    /**
     * The type of resource.
     */
    kind?: string | null;
    /**
     * The time at which this media was originally created in UTC. Formatted as an RFC 3339 timestamp that matches this example: 2010-11-25T14:30:27.655Z
     */
    mediaCreatedTime?: string | null;
    /**
     * The URL of this photo or video&#39;s still image.
     */
    mediaUrl?: string | null;
    /**
     * The time at which this media was uploaded. Formatted as an RFC 3339 timestamp.
     */
    published?: string | null;
    /**
     * The size in bytes of this video.
     */
    sizeBytes?: string | null;
    /**
     * The list of video streams for this video. There might be several different streams available for a single video, either Flash or MPEG, of various sizes
     */
    streams?: Schema$Videostream[];
    /**
     * A description, or caption, for this media.
     */
    summary?: string | null;
    /**
     * The time at which this media was last updated. This includes changes to media metadata. Formatted as an RFC 3339 timestamp.
     */
    updated?: string | null;
    /**
     * The URL for the page that hosts this media.
     */
    url?: string | null;
    /**
     * The duration in milliseconds of this video.
     */
    videoDuration?: string | null;
    /**
     * The encoding status of this video. Possible values are:   - &quot;UPLOADING&quot; - Not all the video bytes have been received.  - &quot;PENDING&quot; - Video not yet processed.  - &quot;FAILED&quot; - Video processing failed.  - &quot;READY&quot; - A single video stream is playable.  - &quot;FINAL&quot; - All video streams are playable.
     */
    videoStatus?: string | null;
    /**
     * The width in pixels of the original image.
     */
    width?: number | null;
  }
  export interface Schema$PeopleFeed {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string | null;
    /**
     * The people in this page of results. Each item includes the id, displayName, image, and url for the person. To retrieve additional profile data, see the people.get method.
     */
    items?: Schema$Person[];
    /**
     * Identifies this resource as a collection of people. Value: &quot;plus#peopleFeed&quot;.
     */
    kind?: string | null;
    /**
     * The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * Link to this resource.
     */
    selfLink?: string | null;
    /**
     * The title of this collection of people.
     */
    title?: string | null;
    /**
     * The total number of people available in this list. The number of people in a response might be smaller due to paging. This might not be set for all collections.
     */
    totalItems?: number | null;
  }
  export interface Schema$Person {
    /**
     * A short biography for this person.
     */
    aboutMe?: string | null;
    /**
     * The person&#39;s date of birth, represented as YYYY-MM-DD.
     */
    birthday?: string | null;
    /**
     * The &quot;bragging rights&quot; line of this person.
     */
    braggingRights?: string | null;
    /**
     * For followers who are visible, the number of people who have added this person or page to a circle.
     */
    circledByCount?: number | null;
    /**
     * The cover photo content.
     */
    cover?: {
      coverInfo?: {leftImageOffset?: number; topImageOffset?: number};
      coverPhoto?: {height?: number; url?: string; width?: number};
      layout?: string;
    } | null;
    /**
     * (this field is not currently used)
     */
    currentLocation?: string | null;
    /**
     * The name of this person, which is suitable for display.
     */
    displayName?: string | null;
    /**
     * The hosted domain name for the user&#39;s Google Apps account. For instance, example.com. The plus.profile.emails.read or email scope is needed to get this domain name.
     */
    domain?: string | null;
    /**
     * A list of email addresses that this person has, including their Google account email address, and the public verified email addresses on their Google+ profile. The plus.profile.emails.read scope is needed to retrieve these email addresses, or the email scope can be used to retrieve just the Google account email address.
     */
    emails?: Array<{type?: string; value?: string}> | null;
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string | null;
    /**
     * The person&#39;s gender. Possible values include, but are not limited to, the following values:   - &quot;male&quot; - Male gender.  - &quot;female&quot; - Female gender.  - &quot;other&quot; - Other.
     */
    gender?: string | null;
    /**
     * The ID of this person.
     */
    id?: string | null;
    /**
     * The representation of the person&#39;s profile photo.
     */
    image?: {isDefault?: boolean; url?: string} | null;
    /**
     * Whether this user has signed up for Google+.
     */
    isPlusUser?: boolean | null;
    /**
     * Identifies this resource as a person. Value: &quot;plus#person&quot;.
     */
    kind?: string | null;
    /**
     * An object representation of the individual components of a person&#39;s name.
     */
    name?: {
      familyName?: string;
      formatted?: string;
      givenName?: string;
      honorificPrefix?: string;
      honorificSuffix?: string;
      middleName?: string;
    } | null;
    /**
     * The nickname of this person.
     */
    nickname?: string | null;
    /**
     * Type of person within Google+. Possible values include, but are not limited to, the following values:   - &quot;person&quot; - represents an actual person.  - &quot;page&quot; - represents a page.
     */
    objectType?: string | null;
    /**
     * The occupation of this person.
     */
    occupation?: string | null;
    /**
     * A list of current or past organizations with which this person is associated.
     */
    organizations?: Array<{
      department?: string;
      description?: string;
      endDate?: string;
      location?: string;
      name?: string;
      primary?: boolean;
      startDate?: string;
      title?: string;
      type?: string;
    }> | null;
    /**
     * A list of places where this person has lived.
     */
    placesLived?: Array<{primary?: boolean; value?: string}> | null;
    /**
     * If a Google+ Page, the number of people who have +1&#39;d this page.
     */
    plusOneCount?: number | null;
    /**
     * The person&#39;s relationship status. Possible values include, but are not limited to, the following values:   - &quot;single&quot; - Person is single.  - &quot;in_a_relationship&quot; - Person is in a relationship.  - &quot;engaged&quot; - Person is engaged.  - &quot;married&quot; - Person is married.  - &quot;its_complicated&quot; - The relationship is complicated.  - &quot;open_relationship&quot; - Person is in an open relationship.  - &quot;widowed&quot; - Person is widowed.  - &quot;in_domestic_partnership&quot; - Person is in a domestic partnership.  - &quot;in_civil_union&quot; - Person is in a civil union.
     */
    relationshipStatus?: string | null;
    /**
     * The person&#39;s skills.
     */
    skills?: string | null;
    /**
     * The brief description (tagline) of this person.
     */
    tagline?: string | null;
    /**
     * The URL of this person&#39;s profile.
     */
    url?: string | null;
    /**
     * A list of URLs for this person.
     */
    urls?: Array<{label?: string; type?: string; value?: string}> | null;
    /**
     * Whether the person or Google+ Page has been verified.
     */
    verified?: boolean | null;
  }
  export interface Schema$Place {
    /**
     * The physical address of the place.
     */
    address?: {formatted?: string} | null;
    /**
     * The display name of the place.
     */
    displayName?: string | null;
    /**
     * The id of the place.
     */
    id?: string | null;
    /**
     * Identifies this resource as a place. Value: &quot;plus#place&quot;.
     */
    kind?: string | null;
    /**
     * The position of the place.
     */
    position?: {latitude?: number; longitude?: number} | null;
  }
  export interface Schema$PlusDomainsAclentryResource {
    /**
     * A descriptive name for this entry. Suitable for display.
     */
    displayName?: string | null;
    /**
     * The ID of the entry. For entries of type &quot;person&quot; or &quot;circle&quot;, this is the ID of the resource. For other types, this property is not set.
     */
    id?: string | null;
    /**
     * The type of entry describing to whom access is granted. Possible values are:   - &quot;person&quot; - Access to an individual.  - &quot;circle&quot; - Access to members of a circle.  - &quot;myCircles&quot; - Access to members of all the person&#39;s circles.  - &quot;extendedCircles&quot; - Access to members of all the person&#39;s circles, plus all of the people in their circles.  - &quot;domain&quot; - Access to members of the person&#39;s Google Apps domain.  - &quot;public&quot; - Access to anyone on the web.
     */
    type?: string | null;
  }
  export interface Schema$Videostream {
    /**
     * The height, in pixels, of the video resource.
     */
    height?: number | null;
    /**
     * MIME type of the video stream.
     */
    type?: string | null;
    /**
     * URL of the video stream.
     */
    url?: string | null;
    /**
     * The width, in pixels, of the video resource.
     */
    width?: number | null;
  }

  export class Resource$Activities {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * plusDomains.activities.get
     * @desc Shut down. See https://developers.google.com/+/api-shutdown for more details.
     * @alias plusDomains.activities.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.activityId The ID of the activity to get.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Activities$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Activity>;
    get(
      params: Params$Resource$Activities$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Activity>,
      callback: BodyResponseCallback<Schema$Activity>
    ): void;
    get(
      params: Params$Resource$Activities$Get,
      callback: BodyResponseCallback<Schema$Activity>
    ): void;
    get(callback: BodyResponseCallback<Schema$Activity>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Activities$Get
        | BodyResponseCallback<Schema$Activity>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Activity>,
      callback?: BodyResponseCallback<Schema$Activity>
    ): void | GaxiosPromise<Schema$Activity> {
      let params = (paramsOrCallback || {}) as Params$Resource$Activities$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Activities$Get;
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
            url: (rootUrl + '/plusDomains/v1/activities/{activityId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['activityId'],
        pathParams: ['activityId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Activity>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Activity>(parameters);
      }
    }

    /**
     * plusDomains.activities.list
     * @desc Shut down. See https://developers.google.com/+/api-shutdown for more details.
     * @alias plusDomains.activities.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.collection The collection of activities to list.
     * @param {integer=} params.maxResults The maximum number of activities to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     * @param {string} params.userId The ID of the user to get activities for. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Activities$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ActivityFeed>;
    list(
      params: Params$Resource$Activities$List,
      options: MethodOptions | BodyResponseCallback<Schema$ActivityFeed>,
      callback: BodyResponseCallback<Schema$ActivityFeed>
    ): void;
    list(
      params: Params$Resource$Activities$List,
      callback: BodyResponseCallback<Schema$ActivityFeed>
    ): void;
    list(callback: BodyResponseCallback<Schema$ActivityFeed>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Activities$List
        | BodyResponseCallback<Schema$ActivityFeed>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ActivityFeed>,
      callback?: BodyResponseCallback<Schema$ActivityFeed>
    ): void | GaxiosPromise<Schema$ActivityFeed> {
      let params = (paramsOrCallback || {}) as Params$Resource$Activities$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Activities$List;
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
              '/plusDomains/v1/people/{userId}/activities/{collection}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'collection'],
        pathParams: ['collection', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ActivityFeed>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ActivityFeed>(parameters);
      }
    }
  }

  export interface Params$Resource$Activities$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the activity to get.
     */
    activityId?: string;
  }
  export interface Params$Resource$Activities$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The collection of activities to list.
     */
    collection?: string;
    /**
     * The maximum number of activities to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     */
    maxResults?: number;
    /**
     * The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     */
    pageToken?: string;
    /**
     * The ID of the user to get activities for. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;
  }

  export class Resource$Audiences {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * plusDomains.audiences.list
     * @desc Shut down. See https://developers.google.com/+/api-shutdown for more details.
     * @alias plusDomains.audiences.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults The maximum number of circles to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     * @param {string} params.userId The ID of the user to get audiences for. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Audiences$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AudiencesFeed>;
    list(
      params: Params$Resource$Audiences$List,
      options: MethodOptions | BodyResponseCallback<Schema$AudiencesFeed>,
      callback: BodyResponseCallback<Schema$AudiencesFeed>
    ): void;
    list(
      params: Params$Resource$Audiences$List,
      callback: BodyResponseCallback<Schema$AudiencesFeed>
    ): void;
    list(callback: BodyResponseCallback<Schema$AudiencesFeed>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Audiences$List
        | BodyResponseCallback<Schema$AudiencesFeed>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AudiencesFeed>,
      callback?: BodyResponseCallback<Schema$AudiencesFeed>
    ): void | GaxiosPromise<Schema$AudiencesFeed> {
      let params = (paramsOrCallback || {}) as Params$Resource$Audiences$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Audiences$List;
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
              rootUrl + '/plusDomains/v1/people/{userId}/audiences'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$AudiencesFeed>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AudiencesFeed>(parameters);
      }
    }
  }

  export interface Params$Resource$Audiences$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The maximum number of circles to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     */
    maxResults?: number;
    /**
     * The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     */
    pageToken?: string;
    /**
     * The ID of the user to get audiences for. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;
  }

  export class Resource$Circles {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * plusDomains.circles.list
     * @desc Shut down. See https://developers.google.com/+/api-shutdown for more details.
     * @alias plusDomains.circles.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults The maximum number of circles to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     * @param {string} params.userId The ID of the user to get circles for. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Circles$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CircleFeed>;
    list(
      params: Params$Resource$Circles$List,
      options: MethodOptions | BodyResponseCallback<Schema$CircleFeed>,
      callback: BodyResponseCallback<Schema$CircleFeed>
    ): void;
    list(
      params: Params$Resource$Circles$List,
      callback: BodyResponseCallback<Schema$CircleFeed>
    ): void;
    list(callback: BodyResponseCallback<Schema$CircleFeed>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Circles$List
        | BodyResponseCallback<Schema$CircleFeed>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CircleFeed>,
      callback?: BodyResponseCallback<Schema$CircleFeed>
    ): void | GaxiosPromise<Schema$CircleFeed> {
      let params = (paramsOrCallback || {}) as Params$Resource$Circles$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Circles$List;
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
            url: (rootUrl + '/plusDomains/v1/people/{userId}/circles').replace(
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
        createAPIRequest<Schema$CircleFeed>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CircleFeed>(parameters);
      }
    }
  }

  export interface Params$Resource$Circles$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The maximum number of circles to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     */
    maxResults?: number;
    /**
     * The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     */
    pageToken?: string;
    /**
     * The ID of the user to get circles for. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;
  }

  export class Resource$Comments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * plusDomains.comments.get
     * @desc Shut down. See https://developers.google.com/+/api-shutdown for more details.
     * @alias plusDomains.comments.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.commentId The ID of the comment to get.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Comments$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Comment>;
    get(
      params: Params$Resource$Comments$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Comment>,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    get(
      params: Params$Resource$Comments$Get,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    get(callback: BodyResponseCallback<Schema$Comment>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Comments$Get
        | BodyResponseCallback<Schema$Comment>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Comment>,
      callback?: BodyResponseCallback<Schema$Comment>
    ): void | GaxiosPromise<Schema$Comment> {
      let params = (paramsOrCallback || {}) as Params$Resource$Comments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$Get;
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
            url: (rootUrl + '/plusDomains/v1/comments/{commentId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['commentId'],
        pathParams: ['commentId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Comment>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Comment>(parameters);
      }
    }

    /**
     * plusDomains.comments.list
     * @desc Shut down. See https://developers.google.com/+/api-shutdown for more details.
     * @alias plusDomains.comments.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.activityId The ID of the activity to get comments for.
     * @param {integer=} params.maxResults The maximum number of comments to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     * @param {string=} params.sortOrder The order in which to sort the list of comments.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Comments$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CommentFeed>;
    list(
      params: Params$Resource$Comments$List,
      options: MethodOptions | BodyResponseCallback<Schema$CommentFeed>,
      callback: BodyResponseCallback<Schema$CommentFeed>
    ): void;
    list(
      params: Params$Resource$Comments$List,
      callback: BodyResponseCallback<Schema$CommentFeed>
    ): void;
    list(callback: BodyResponseCallback<Schema$CommentFeed>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Comments$List
        | BodyResponseCallback<Schema$CommentFeed>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CommentFeed>,
      callback?: BodyResponseCallback<Schema$CommentFeed>
    ): void | GaxiosPromise<Schema$CommentFeed> {
      let params = (paramsOrCallback || {}) as Params$Resource$Comments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$List;
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
              rootUrl + '/plusDomains/v1/activities/{activityId}/comments'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['activityId'],
        pathParams: ['activityId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CommentFeed>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CommentFeed>(parameters);
      }
    }
  }

  export interface Params$Resource$Comments$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the comment to get.
     */
    commentId?: string;
  }
  export interface Params$Resource$Comments$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the activity to get comments for.
     */
    activityId?: string;
    /**
     * The maximum number of comments to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     */
    maxResults?: number;
    /**
     * The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     */
    pageToken?: string;
    /**
     * The order in which to sort the list of comments.
     */
    sortOrder?: string;
  }

  export class Resource$Media {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * plusDomains.media.insert
     * @desc Shut down. See https://developers.google.com/+/api-shutdown for more details.
     * @alias plusDomains.media.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.collection
     * @param {string} params.userId The ID of the user to create the activity on behalf of.
     * @param  {object} params.resource Media resource metadata
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Media$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Media>;
    insert(
      params: Params$Resource$Media$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Media>,
      callback: BodyResponseCallback<Schema$Media>
    ): void;
    insert(
      params: Params$Resource$Media$Insert,
      callback: BodyResponseCallback<Schema$Media>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Media>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Media$Insert
        | BodyResponseCallback<Schema$Media>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Media>,
      callback?: BodyResponseCallback<Schema$Media>
    ): void | GaxiosPromise<Schema$Media> {
      let params = (paramsOrCallback || {}) as Params$Resource$Media$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Media$Insert;
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
              rootUrl + '/plusDomains/v1/people/{userId}/media/{collection}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (
          rootUrl + '/upload/plusDomains/v1/people/{userId}/media/{collection}'
        ).replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['userId', 'collection'],
        pathParams: ['collection', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Media>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Media>(parameters);
      }
    }
  }

  export interface Params$Resource$Media$Insert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    collection?: string;
    /**
     * The ID of the user to create the activity on behalf of.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Media;

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

  export class Resource$People {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * plusDomains.people.get
     * @desc Get a person's profile.
     * @alias plusDomains.people.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId The ID of the person to get the profile for. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$People$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Person>;
    get(
      params: Params$Resource$People$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Person>,
      callback: BodyResponseCallback<Schema$Person>
    ): void;
    get(
      params: Params$Resource$People$Get,
      callback: BodyResponseCallback<Schema$Person>
    ): void;
    get(callback: BodyResponseCallback<Schema$Person>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$People$Get
        | BodyResponseCallback<Schema$Person>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Person>,
      callback?: BodyResponseCallback<Schema$Person>
    ): void | GaxiosPromise<Schema$Person> {
      let params = (paramsOrCallback || {}) as Params$Resource$People$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$People$Get;
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
            url: (rootUrl + '/plusDomains/v1/people/{userId}').replace(
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
        createAPIRequest<Schema$Person>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Person>(parameters);
      }
    }

    /**
     * plusDomains.people.list
     * @desc List all of the people in the specified collection.
     * @alias plusDomains.people.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.collection The collection of people to list.
     * @param {integer=} params.maxResults The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     * @param {string=} params.orderBy The order to return people in.
     * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     * @param {string} params.userId Get the collection of people for the person identified. Use "me" to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$People$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PeopleFeed>;
    list(
      params: Params$Resource$People$List,
      options: MethodOptions | BodyResponseCallback<Schema$PeopleFeed>,
      callback: BodyResponseCallback<Schema$PeopleFeed>
    ): void;
    list(
      params: Params$Resource$People$List,
      callback: BodyResponseCallback<Schema$PeopleFeed>
    ): void;
    list(callback: BodyResponseCallback<Schema$PeopleFeed>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$People$List
        | BodyResponseCallback<Schema$PeopleFeed>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PeopleFeed>,
      callback?: BodyResponseCallback<Schema$PeopleFeed>
    ): void | GaxiosPromise<Schema$PeopleFeed> {
      let params = (paramsOrCallback || {}) as Params$Resource$People$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$People$List;
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
              rootUrl + '/plusDomains/v1/people/{userId}/people/{collection}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'collection'],
        pathParams: ['collection', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PeopleFeed>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PeopleFeed>(parameters);
      }
    }

    /**
     * plusDomains.people.listByActivity
     * @desc Shut down. See https://developers.google.com/+/api-shutdown for more details.
     * @alias plusDomains.people.listByActivity
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.activityId The ID of the activity to get the list of people for.
     * @param {string} params.collection The collection of people to list.
     * @param {integer=} params.maxResults The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listByActivity(
      params?: Params$Resource$People$Listbyactivity,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PeopleFeed>;
    listByActivity(
      params: Params$Resource$People$Listbyactivity,
      options: MethodOptions | BodyResponseCallback<Schema$PeopleFeed>,
      callback: BodyResponseCallback<Schema$PeopleFeed>
    ): void;
    listByActivity(
      params: Params$Resource$People$Listbyactivity,
      callback: BodyResponseCallback<Schema$PeopleFeed>
    ): void;
    listByActivity(callback: BodyResponseCallback<Schema$PeopleFeed>): void;
    listByActivity(
      paramsOrCallback?:
        | Params$Resource$People$Listbyactivity
        | BodyResponseCallback<Schema$PeopleFeed>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PeopleFeed>,
      callback?: BodyResponseCallback<Schema$PeopleFeed>
    ): void | GaxiosPromise<Schema$PeopleFeed> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$People$Listbyactivity;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$People$Listbyactivity;
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
              '/plusDomains/v1/activities/{activityId}/people/{collection}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['activityId', 'collection'],
        pathParams: ['activityId', 'collection'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PeopleFeed>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PeopleFeed>(parameters);
      }
    }
  }

  export interface Params$Resource$People$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the person to get the profile for. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$People$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The collection of people to list.
     */
    collection?: string;
    /**
     * The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     */
    maxResults?: number;
    /**
     * The order to return people in.
     */
    orderBy?: string;
    /**
     * The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     */
    pageToken?: string;
    /**
     * Get the collection of people for the person identified. Use "me" to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$People$Listbyactivity
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the activity to get the list of people for.
     */
    activityId?: string;
    /**
     * The collection of people to list.
     */
    collection?: string;
    /**
     * The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     */
    maxResults?: number;
    /**
     * The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     */
    pageToken?: string;
  }
}
