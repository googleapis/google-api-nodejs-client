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
 * Google+ Domains API
 *
 * Builds on top of the Google+ platform for Google Apps Domains.
 *
 * @example
 * const google = require('googleapis');
 * const plusDomains = google.plusDomains('v1');
 *
 * @namespace plusDomains
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Plusdomains
 */
export class Plusdomains {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  activities: Resource$Activities;
  audiences: Resource$Audiences;
  circles: Resource$Circles;
  comments: Resource$Comments;
  media: Resource$Media;
  people: Resource$People;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;

    this.activities = new Resource$Activities(this);
    this.audiences = new Resource$Audiences(this);
    this.circles = new Resource$Circles(this);
    this.comments = new Resource$Comments(this);
    this.media = new Resource$Media(this);
    this.people = new Resource$People(this);
  }
}

export interface Schema$Acl {
  /**
   * Description of the access granted, suitable for display.
   */
  description: string;
  /**
   * Whether access is restricted to the domain.
   */
  domainRestricted: boolean;
  /**
   * The list of access entries.
   */
  items: Schema$PlusDomainsAclentryResource[];
  /**
   * Identifies this resource as a collection of access controls. Value:
   * &quot;plus#acl&quot;.
   */
  kind: string;
}
export interface Schema$Activity {
  /**
   * Identifies who has access to see this activity.
   */
  access: Schema$Acl;
  /**
   * The person who performed this activity.
   */
  actor: any;
  /**
   * Street address where this activity occurred.
   */
  address: string;
  /**
   * Additional content added by the person who shared this activity, applicable
   * only when resharing an activity.
   */
  annotation: string;
  /**
   * If this activity is a crosspost from another system, this property
   * specifies the ID of the original activity.
   */
  crosspostSource: string;
  /**
   * ETag of this response for caching purposes.
   */
  etag: string;
  /**
   * Latitude and longitude where this activity occurred. Format is latitude
   * followed by longitude, space separated.
   */
  geocode: string;
  /**
   * The ID of this activity.
   */
  id: string;
  /**
   * Identifies this resource as an activity. Value: &quot;plus#activity&quot;.
   */
  kind: string;
  /**
   * The location where this activity occurred.
   */
  location: Schema$Place;
  /**
   * The object of this activity.
   */
  object: any;
  /**
   * ID of the place where this activity occurred.
   */
  placeId: string;
  /**
   * Name of the place where this activity occurred.
   */
  placeName: string;
  /**
   * The service provider that initially published this activity.
   */
  provider: any;
  /**
   * The time at which this activity was initially published. Formatted as an
   * RFC 3339 timestamp.
   */
  published: string;
  /**
   * Radius, in meters, of the region where this activity occurred, centered at
   * the latitude and longitude identified in geocode.
   */
  radius: string;
  /**
   * Title of this activity.
   */
  title: string;
  /**
   * The time at which this activity was last updated. Formatted as an RFC 3339
   * timestamp.
   */
  updated: string;
  /**
   * The link to this activity.
   */
  url: string;
  /**
   * This activity&#39;s verb, which indicates the action that was performed.
   * Possible values include, but are not limited to, the following values:   -
   * &quot;post&quot; - Publish content to the stream.  - &quot;share&quot; -
   * Reshare an activity.
   */
  verb: string;
}
export interface Schema$ActivityFeed {
  /**
   * ETag of this response for caching purposes.
   */
  etag: string;
  /**
   * The ID of this collection of activities. Deprecated.
   */
  id: string;
  /**
   * The activities in this page of results.
   */
  items: Schema$Activity[];
  /**
   * Identifies this resource as a collection of activities. Value:
   * &quot;plus#activityFeed&quot;.
   */
  kind: string;
  /**
   * Link to the next page of activities.
   */
  nextLink: string;
  /**
   * The continuation token, which is used to page through large result sets.
   * Provide this value in a subsequent request to return the next page of
   * results.
   */
  nextPageToken: string;
  /**
   * Link to this activity resource.
   */
  selfLink: string;
  /**
   * The title of this collection of activities, which is a truncated portion of
   * the content.
   */
  title: string;
  /**
   * The time at which this collection of activities was last updated. Formatted
   * as an RFC 3339 timestamp.
   */
  updated: string;
}
export interface Schema$Audience {
  /**
   * ETag of this response for caching purposes.
   */
  etag: string;
  /**
   * The access control list entry.
   */
  item: Schema$PlusDomainsAclentryResource;
  /**
   * Identifies this resource as an audience. Value: &quot;plus#audience&quot;.
   */
  kind: string;
  /**
   * The number of people in this circle. This only applies if entity_type is
   * CIRCLE.
   */
  memberCount: number;
  /**
   * The circle members&#39; visibility as chosen by the owner of the circle.
   * This only applies for items with &quot;item.type&quot; equals
   * &quot;circle&quot;. Possible values are:   - &quot;public&quot; - Members
   * are visible to the public.  - &quot;limited&quot; - Members are visible to
   * a limited audience.  - &quot;private&quot; - Members are visible to the
   * owner only.
   */
  visibility: string;
}
export interface Schema$AudiencesFeed {
  /**
   * ETag of this response for caching purposes.
   */
  etag: string;
  /**
   * The audiences in this result.
   */
  items: Schema$Audience[];
  /**
   * Identifies this resource as a collection of audiences. Value:
   * &quot;plus#audienceFeed&quot;.
   */
  kind: string;
  /**
   * The continuation token, which is used to page through large result sets.
   * Provide this value in a subsequent request to return the next page of
   * results.
   */
  nextPageToken: string;
  /**
   * The total number of ACL entries. The number of entries in this response may
   * be smaller due to paging.
   */
  totalItems: number;
}
export interface Schema$Circle {
  /**
   * The description of this circle.
   */
  description: string;
  /**
   * The circle name.
   */
  displayName: string;
  /**
   * ETag of this response for caching purposes.
   */
  etag: string;
  /**
   * The ID of the circle.
   */
  id: string;
  /**
   * Identifies this resource as a circle. Value: &quot;plus#circle&quot;.
   */
  kind: string;
  /**
   * The people in this circle.
   */
  people: any;
  /**
   * Link to this circle resource
   */
  selfLink: string;
}
export interface Schema$CircleFeed {
  /**
   * ETag of this response for caching purposes.
   */
  etag: string;
  /**
   * The circles in this page of results.
   */
  items: Schema$Circle[];
  /**
   * Identifies this resource as a collection of circles. Value:
   * &quot;plus#circleFeed&quot;.
   */
  kind: string;
  /**
   * Link to the next page of circles.
   */
  nextLink: string;
  /**
   * The continuation token, which is used to page through large result sets.
   * Provide this value in a subsequent request to return the next page of
   * results.
   */
  nextPageToken: string;
  /**
   * Link to this page of circles.
   */
  selfLink: string;
  /**
   * The title of this list of resources.
   */
  title: string;
  /**
   * The total number of circles. The number of circles in this response may be
   * smaller due to paging.
   */
  totalItems: number;
}
export interface Schema$Comment {
  /**
   * The person who posted this comment.
   */
  actor: any;
  /**
   * ETag of this response for caching purposes.
   */
  etag: string;
  /**
   * The ID of this comment.
   */
  id: string;
  /**
   * The activity this comment replied to.
   */
  inReplyTo: any[];
  /**
   * Identifies this resource as a comment. Value: &quot;plus#comment&quot;.
   */
  kind: string;
  /**
   * The object of this comment.
   */
  object: any;
  /**
   * People who +1&#39;d this comment.
   */
  plusoners: any;
  /**
   * The time at which this comment was initially published. Formatted as an RFC
   * 3339 timestamp.
   */
  published: string;
  /**
   * Link to this comment resource.
   */
  selfLink: string;
  /**
   * The time at which this comment was last updated. Formatted as an RFC 3339
   * timestamp.
   */
  updated: string;
  /**
   * This comment&#39;s verb, indicating what action was performed. Possible
   * values are:   - &quot;post&quot; - Publish content to the stream.
   */
  verb: string;
}
export interface Schema$CommentFeed {
  /**
   * ETag of this response for caching purposes.
   */
  etag: string;
  /**
   * The ID of this collection of comments.
   */
  id: string;
  /**
   * The comments in this page of results.
   */
  items: Schema$Comment[];
  /**
   * Identifies this resource as a collection of comments. Value:
   * &quot;plus#commentFeed&quot;.
   */
  kind: string;
  /**
   * Link to the next page of activities.
   */
  nextLink: string;
  /**
   * The continuation token, which is used to page through large result sets.
   * Provide this value in a subsequent request to return the next page of
   * results.
   */
  nextPageToken: string;
  /**
   * The title of this collection of comments.
   */
  title: string;
  /**
   * The time at which this collection of comments was last updated. Formatted
   * as an RFC 3339 timestamp.
   */
  updated: string;
}
export interface Schema$Media {
  /**
   * The person who uploaded this media.
   */
  author: any;
  /**
   * The display name for this media.
   */
  displayName: string;
  /**
   * ETag of this response for caching purposes.
   */
  etag: string;
  /**
   * Exif information of the media item.
   */
  exif: any;
  /**
   * The height in pixels of the original image.
   */
  height: number;
  /**
   * ID of this media, which is generated by the API.
   */
  id: string;
  /**
   * The type of resource.
   */
  kind: string;
  /**
   * The time at which this media was originally created in UTC. Formatted as an
   * RFC 3339 timestamp that matches this example: 2010-11-25T14:30:27.655Z
   */
  mediaCreatedTime: string;
  /**
   * The URL of this photo or video&#39;s still image.
   */
  mediaUrl: string;
  /**
   * The time at which this media was uploaded. Formatted as an RFC 3339
   * timestamp.
   */
  published: string;
  /**
   * The size in bytes of this video.
   */
  sizeBytes: string;
  /**
   * The list of video streams for this video. There might be several different
   * streams available for a single video, either Flash or MPEG, of various
   * sizes
   */
  streams: Schema$Videostream[];
  /**
   * A description, or caption, for this media.
   */
  summary: string;
  /**
   * The time at which this media was last updated. This includes changes to
   * media metadata. Formatted as an RFC 3339 timestamp.
   */
  updated: string;
  /**
   * The URL for the page that hosts this media.
   */
  url: string;
  /**
   * The duration in milliseconds of this video.
   */
  videoDuration: string;
  /**
   * The encoding status of this video. Possible values are:   -
   * &quot;UPLOADING&quot; - Not all the video bytes have been received.  -
   * &quot;PENDING&quot; - Video not yet processed.  - &quot;FAILED&quot; -
   * Video processing failed.  - &quot;READY&quot; - A single video stream is
   * playable.  - &quot;FINAL&quot; - All video streams are playable.
   */
  videoStatus: string;
  /**
   * The width in pixels of the original image.
   */
  width: number;
}
export interface Schema$PeopleFeed {
  /**
   * ETag of this response for caching purposes.
   */
  etag: string;
  /**
   * The people in this page of results. Each item includes the id, displayName,
   * image, and url for the person. To retrieve additional profile data, see the
   * people.get method.
   */
  items: Schema$Person[];
  /**
   * Identifies this resource as a collection of people. Value:
   * &quot;plus#peopleFeed&quot;.
   */
  kind: string;
  /**
   * The continuation token, which is used to page through large result sets.
   * Provide this value in a subsequent request to return the next page of
   * results.
   */
  nextPageToken: string;
  /**
   * Link to this resource.
   */
  selfLink: string;
  /**
   * The title of this collection of people.
   */
  title: string;
  /**
   * The total number of people available in this list. The number of people in
   * a response might be smaller due to paging. This might not be set for all
   * collections.
   */
  totalItems: number;
}
export interface Schema$Person {
  /**
   * A short biography for this person.
   */
  aboutMe: string;
  /**
   * The person&#39;s date of birth, represented as YYYY-MM-DD.
   */
  birthday: string;
  /**
   * The &quot;bragging rights&quot; line of this person.
   */
  braggingRights: string;
  /**
   * For followers who are visible, the number of people who have added this
   * person or page to a circle.
   */
  circledByCount: number;
  /**
   * The cover photo content.
   */
  cover: any;
  /**
   * (this field is not currently used)
   */
  currentLocation: string;
  /**
   * The name of this person, which is suitable for display.
   */
  displayName: string;
  /**
   * The hosted domain name for the user&#39;s Google Apps account. For
   * instance, example.com. The plus.profile.emails.read or email scope is
   * needed to get this domain name.
   */
  domain: string;
  /**
   * A list of email addresses that this person has, including their Google
   * account email address, and the public verified email addresses on their
   * Google+ profile. The plus.profile.emails.read scope is needed to retrieve
   * these email addresses, or the email scope can be used to retrieve just the
   * Google account email address.
   */
  emails: any[];
  /**
   * ETag of this response for caching purposes.
   */
  etag: string;
  /**
   * The person&#39;s gender. Possible values include, but are not limited to,
   * the following values:   - &quot;male&quot; - Male gender.  -
   * &quot;female&quot; - Female gender.  - &quot;other&quot; - Other.
   */
  gender: string;
  /**
   * The ID of this person.
   */
  id: string;
  /**
   * The representation of the person&#39;s profile photo.
   */
  image: any;
  /**
   * Whether this user has signed up for Google+.
   */
  isPlusUser: boolean;
  /**
   * Identifies this resource as a person. Value: &quot;plus#person&quot;.
   */
  kind: string;
  /**
   * An object representation of the individual components of a person&#39;s
   * name.
   */
  name: any;
  /**
   * The nickname of this person.
   */
  nickname: string;
  /**
   * Type of person within Google+. Possible values include, but are not limited
   * to, the following values:   - &quot;person&quot; - represents an actual
   * person.  - &quot;page&quot; - represents a page.
   */
  objectType: string;
  /**
   * The occupation of this person.
   */
  occupation: string;
  /**
   * A list of current or past organizations with which this person is
   * associated.
   */
  organizations: any[];
  /**
   * A list of places where this person has lived.
   */
  placesLived: any[];
  /**
   * If a Google+ Page, the number of people who have +1&#39;d this page.
   */
  plusOneCount: number;
  /**
   * The person&#39;s relationship status. Possible values include, but are not
   * limited to, the following values:   - &quot;single&quot; - Person is
   * single.  - &quot;in_a_relationship&quot; - Person is in a relationship.  -
   * &quot;engaged&quot; - Person is engaged.  - &quot;married&quot; - Person is
   * married.  - &quot;its_complicated&quot; - The relationship is complicated.
   * - &quot;open_relationship&quot; - Person is in an open relationship.  -
   * &quot;widowed&quot; - Person is widowed.  -
   * &quot;in_domestic_partnership&quot; - Person is in a domestic partnership.
   * - &quot;in_civil_union&quot; - Person is in a civil union.
   */
  relationshipStatus: string;
  /**
   * The person&#39;s skills.
   */
  skills: string;
  /**
   * The brief description (tagline) of this person.
   */
  tagline: string;
  /**
   * The URL of this person&#39;s profile.
   */
  url: string;
  /**
   * A list of URLs for this person.
   */
  urls: any[];
  /**
   * Whether the person or Google+ Page has been verified.
   */
  verified: boolean;
}
export interface Schema$Place {
  /**
   * The physical address of the place.
   */
  address: any;
  /**
   * The display name of the place.
   */
  displayName: string;
  /**
   * The id of the place.
   */
  id: string;
  /**
   * Identifies this resource as a place. Value: &quot;plus#place&quot;.
   */
  kind: string;
  /**
   * The position of the place.
   */
  position: any;
}
export interface Schema$PlusDomainsAclentryResource {
  /**
   * A descriptive name for this entry. Suitable for display.
   */
  displayName: string;
  /**
   * The ID of the entry. For entries of type &quot;person&quot; or
   * &quot;circle&quot;, this is the ID of the resource. For other types, this
   * property is not set.
   */
  id: string;
  /**
   * The type of entry describing to whom access is granted. Possible values
   * are:   - &quot;person&quot; - Access to an individual.  -
   * &quot;circle&quot; - Access to members of a circle.  -
   * &quot;myCircles&quot; - Access to members of all the person&#39;s circles.
   * - &quot;extendedCircles&quot; - Access to members of all the person&#39;s
   * circles, plus all of the people in their circles.  - &quot;domain&quot; -
   * Access to members of the person&#39;s Google Apps domain.  -
   * &quot;public&quot; - Access to anyone on the web.
   */
  type: string;
}
export interface Schema$Videostream {
  /**
   * The height, in pixels, of the video resource.
   */
  height: number;
  /**
   * MIME type of the video stream.
   */
  type: string;
  /**
   * URL of the video stream.
   */
  url: string;
  /**
   * The width, in pixels, of the video resource.
   */
  width: number;
}

export class Resource$Activities {
  root: Plusdomains;
  constructor(root: Plusdomains) {
    this.root = root;
  }

  /**
   * plusDomains.activities.get
   * @desc Get an activity.
   * @alias plusDomains.activities.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.activityId The ID of the activity to get.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Activity>,
       callback?: BodyResponseCallback<Schema$Activity>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/plusDomains/v1/activities/{activityId}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['activityId'],
          pathParams: ['activityId'],
          context: this.root
        };
        createAPIRequest<Schema$Activity>(parameters, callback!);
      };


  /**
   * plusDomains.activities.insert
   * @desc Create a new activity for the authenticated user.
   * @alias plusDomains.activities.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.preview If "true", extract the potential media attachments for a URL. The response will include all possible attachments for a URL, including video, photos, and articles based on the content of the page.
   * @param {string} params.userId The ID of the user to create the activity on behalf of. Its value should be "me", to indicate the authenticated user.
   * @param {().Activity} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Activity>,
       callback?: BodyResponseCallback<Schema$Activity>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/plusDomains/v1/people/{userId}/activities')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['userId'],
          pathParams: ['userId'],
          context: this.root
        };
        createAPIRequest<Schema$Activity>(parameters, callback!);
      };


  /**
   * plusDomains.activities.list
   * @desc List all of the activities in the specified collection for a
   * particular user.
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
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$ActivityFeed>,
       callback?: BodyResponseCallback<Schema$ActivityFeed>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl +
                      '/plusDomains/v1/people/{userId}/activities/{collection}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['userId', 'collection'],
          pathParams: ['collection', 'userId'],
          context: this.root
        };
        createAPIRequest<Schema$ActivityFeed>(parameters, callback!);
      };
}

export class Resource$Audiences {
  root: Plusdomains;
  constructor(root: Plusdomains) {
    this.root = root;
  }

  /**
   * plusDomains.audiences.list
   * @desc List all of the audiences to which a user can share.
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
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$AudiencesFeed>,
       callback?: BodyResponseCallback<Schema$AudiencesFeed>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/plusDomains/v1/people/{userId}/audiences')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['userId'],
          pathParams: ['userId'],
          context: this.root
        };
        createAPIRequest<Schema$AudiencesFeed>(parameters, callback!);
      };
}

export class Resource$Circles {
  root: Plusdomains;
  constructor(root: Plusdomains) {
    this.root = root;
  }

  /**
   * plusDomains.circles.addPeople
   * @desc Add a person to a circle. Google+ limits certain circle operations,
   * including the number of circle adds. Learn More.
   * @alias plusDomains.circles.addPeople
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.circleId The ID of the circle to add the person to.
   * @param {string=} params.email Email of the people to add to the circle. Optional, can be repeated.
   * @param {string=} params.userId IDs of the people to add to the circle. Optional, can be repeated.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  addPeople =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Circle>,
       callback?: BodyResponseCallback<Schema$Circle>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/plusDomains/v1/circles/{circleId}/people')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'PUT'
              },
              options),
          params,
          requiredParams: ['circleId'],
          pathParams: ['circleId'],
          context: this.root
        };
        createAPIRequest<Schema$Circle>(parameters, callback!);
      };


  /**
   * plusDomains.circles.get
   * @desc Get a circle.
   * @alias plusDomains.circles.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.circleId The ID of the circle to get.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Circle>,
       callback?: BodyResponseCallback<Schema$Circle>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/plusDomains/v1/circles/{circleId}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['circleId'],
          pathParams: ['circleId'],
          context: this.root
        };
        createAPIRequest<Schema$Circle>(parameters, callback!);
      };


  /**
   * plusDomains.circles.insert
   * @desc Create a new circle for the authenticated user.
   * @alias plusDomains.circles.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.userId The ID of the user to create the circle on behalf of. The value "me" can be used to indicate the authenticated user.
   * @param {().Circle} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Circle>,
       callback?: BodyResponseCallback<Schema$Circle>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/plusDomains/v1/people/{userId}/circles')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['userId'],
          pathParams: ['userId'],
          context: this.root
        };
        createAPIRequest<Schema$Circle>(parameters, callback!);
      };


  /**
   * plusDomains.circles.list
   * @desc List all of the circles for a user.
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
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$CircleFeed>,
       callback?: BodyResponseCallback<Schema$CircleFeed>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/plusDomains/v1/people/{userId}/circles')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['userId'],
          pathParams: ['userId'],
          context: this.root
        };
        createAPIRequest<Schema$CircleFeed>(parameters, callback!);
      };


  /**
   * plusDomains.circles.patch
   * @desc Update a circle's description. This method supports patch semantics.
   * @alias plusDomains.circles.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.circleId The ID of the circle to update.
   * @param {().Circle} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Circle>,
       callback?: BodyResponseCallback<Schema$Circle>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/plusDomains/v1/circles/{circleId}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'PATCH'
              },
              options),
          params,
          requiredParams: ['circleId'],
          pathParams: ['circleId'],
          context: this.root
        };
        createAPIRequest<Schema$Circle>(parameters, callback!);
      };


  /**
   * plusDomains.circles.remove
   * @desc Delete a circle.
   * @alias plusDomains.circles.remove
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.circleId The ID of the circle to delete.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  remove =
      (params: any, options: MethodOptions|BodyResponseCallback<void>,
       callback?: BodyResponseCallback<void>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/plusDomains/v1/circles/{circleId}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['circleId'],
          pathParams: ['circleId'],
          context: this.root
        };
        createAPIRequest<void>(parameters, callback!);
      };


  /**
   * plusDomains.circles.removePeople
   * @desc Remove a person from a circle.
   * @alias plusDomains.circles.removePeople
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.circleId The ID of the circle to remove the person from.
   * @param {string=} params.email Email of the people to add to the circle. Optional, can be repeated.
   * @param {string=} params.userId IDs of the people to remove from the circle. Optional, can be repeated.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  removePeople =
      (params: any, options: MethodOptions|BodyResponseCallback<void>,
       callback?: BodyResponseCallback<void>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/plusDomains/v1/circles/{circleId}/people')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['circleId'],
          pathParams: ['circleId'],
          context: this.root
        };
        createAPIRequest<void>(parameters, callback!);
      };


  /**
   * plusDomains.circles.update
   * @desc Update a circle's description.
   * @alias plusDomains.circles.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.circleId The ID of the circle to update.
   * @param {().Circle} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Circle>,
       callback?: BodyResponseCallback<Schema$Circle>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/plusDomains/v1/circles/{circleId}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'PUT'
              },
              options),
          params,
          requiredParams: ['circleId'],
          pathParams: ['circleId'],
          context: this.root
        };
        createAPIRequest<Schema$Circle>(parameters, callback!);
      };
}

export class Resource$Comments {
  root: Plusdomains;
  constructor(root: Plusdomains) {
    this.root = root;
  }

  /**
   * plusDomains.comments.get
   * @desc Get a comment.
   * @alias plusDomains.comments.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.commentId The ID of the comment to get.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Comment>,
       callback?: BodyResponseCallback<Schema$Comment>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/plusDomains/v1/comments/{commentId}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['commentId'],
          pathParams: ['commentId'],
          context: this.root
        };
        createAPIRequest<Schema$Comment>(parameters, callback!);
      };


  /**
   * plusDomains.comments.insert
   * @desc Create a new comment in reply to an activity.
   * @alias plusDomains.comments.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.activityId The ID of the activity to reply to.
   * @param {().Comment} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Comment>,
       callback?: BodyResponseCallback<Schema$Comment>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl +
                      '/plusDomains/v1/activities/{activityId}/comments')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['activityId'],
          pathParams: ['activityId'],
          context: this.root
        };
        createAPIRequest<Schema$Comment>(parameters, callback!);
      };


  /**
   * plusDomains.comments.list
   * @desc List all of the comments for an activity.
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
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$CommentFeed>,
       callback?: BodyResponseCallback<Schema$CommentFeed>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl +
                      '/plusDomains/v1/activities/{activityId}/comments')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['activityId'],
          pathParams: ['activityId'],
          context: this.root
        };
        createAPIRequest<Schema$CommentFeed>(parameters, callback!);
      };
}

export class Resource$Media {
  root: Plusdomains;
  constructor(root: Plusdomains) {
    this.root = root;
  }

  /**
   * plusDomains.media.insert
   * @desc Add a new media item to an album. The current upload size limitations
   * are 36MB for a photo and 1GB for a video. Uploads do not count against
   * quota if photos are less than 2048 pixels on their longest side or videos
   * are less than 15 minutes in length.
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
  insert =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Media>,
       callback?: BodyResponseCallback<Schema$Media>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl +
                      '/plusDomains/v1/people/{userId}/media/{collection}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          mediaUrl:
              (rootUrl +
               '/upload/plusDomains/v1/people/{userId}/media/{collection}')
                  .replace(/([^:]\/)\/+/g, '$1'),
          requiredParams: ['userId', 'collection'],
          pathParams: ['collection', 'userId'],
          context: this.root
        };
        createAPIRequest<Schema$Media>(parameters, callback!);
      };
}

export class Resource$People {
  root: Plusdomains;
  constructor(root: Plusdomains) {
    this.root = root;
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
  get =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Person>,
       callback?: BodyResponseCallback<Schema$Person>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/plusDomains/v1/people/{userId}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['userId'],
          pathParams: ['userId'],
          context: this.root
        };
        createAPIRequest<Schema$Person>(parameters, callback!);
      };


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
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$PeopleFeed>,
       callback?: BodyResponseCallback<Schema$PeopleFeed>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl +
                      '/plusDomains/v1/people/{userId}/people/{collection}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['userId', 'collection'],
          pathParams: ['collection', 'userId'],
          context: this.root
        };
        createAPIRequest<Schema$PeopleFeed>(parameters, callback!);
      };


  /**
   * plusDomains.people.listByActivity
   * @desc List all of the people in the specified collection for a particular
   * activity.
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
  listByActivity =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$PeopleFeed>,
       callback?: BodyResponseCallback<Schema$PeopleFeed>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/plusDomains/v1/activities/{activityId}/people/{collection}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['activityId', 'collection'],
          pathParams: ['activityId', 'collection'],
          context: this.root
        };
        createAPIRequest<Schema$PeopleFeed>(parameters, callback!);
      };


  /**
   * plusDomains.people.listByCircle
   * @desc List all of the people who are members of a circle.
   * @alias plusDomains.people.listByCircle
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.circleId The ID of the circle to get the members of.
   * @param {integer=} params.maxResults The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
   * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  listByCircle =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$PeopleFeed>,
       callback?: BodyResponseCallback<Schema$PeopleFeed>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/plusDomains/v1/circles/{circleId}/people')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['circleId'],
          pathParams: ['circleId'],
          context: this.root
        };
        createAPIRequest<Schema$PeopleFeed>(parameters, callback!);
      };
}
