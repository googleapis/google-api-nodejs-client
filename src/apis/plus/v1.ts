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

export namespace plus_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  /**
   * Google+ API
   *
   * Builds on top of the Google+ platform.
   *
   * @example
   * const {google} = require('googleapis');
   * const plus = google.plus('v1');
   *
   * @namespace plus
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Plus
   */
  export class Plus {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    activities: Resource$Activities;
    comments: Resource$Comments;
    people: Resource$People;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.activities = new Resource$Activities(this);
      this.comments = new Resource$Comments(this);
      this.people = new Resource$People(this);
    }

    getRoot() {
      return this.root;
    }
  }

  export interface Schema$Acl {
    /**
     * Description of the access granted, suitable for display.
     */
    description?: string;
    /**
     * The list of access entries.
     */
    items?: Schema$PlusAclentryResource[];
    /**
     * Identifies this resource as a collection of access controls. Value:
     * &quot;plus#acl&quot;.
     */
    kind?: string;
  }
  export interface Schema$Activity {
    /**
     * Identifies who has access to see this activity.
     */
    access?: Schema$Acl;
    /**
     * The person who performed this activity.
     */
    actor?: any;
    /**
     * Street address where this activity occurred.
     */
    address?: string;
    /**
     * Additional content added by the person who shared this activity,
     * applicable only when resharing an activity.
     */
    annotation?: string;
    /**
     * If this activity is a crosspost from another system, this property
     * specifies the ID of the original activity.
     */
    crosspostSource?: string;
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string;
    /**
     * Latitude and longitude where this activity occurred. Format is latitude
     * followed by longitude, space separated.
     */
    geocode?: string;
    /**
     * The ID of this activity.
     */
    id?: string;
    /**
     * Identifies this resource as an activity. Value:
     * &quot;plus#activity&quot;.
     */
    kind?: string;
    /**
     * The location where this activity occurred.
     */
    location?: Schema$Place;
    /**
     * The object of this activity.
     */
    object?: any;
    /**
     * ID of the place where this activity occurred.
     */
    placeId?: string;
    /**
     * Name of the place where this activity occurred.
     */
    placeName?: string;
    /**
     * The service provider that initially published this activity.
     */
    provider?: any;
    /**
     * The time at which this activity was initially published. Formatted as an
     * RFC 3339 timestamp.
     */
    published?: string;
    /**
     * Radius, in meters, of the region where this activity occurred, centered
     * at the latitude and longitude identified in geocode.
     */
    radius?: string;
    /**
     * Title of this activity.
     */
    title?: string;
    /**
     * The time at which this activity was last updated. Formatted as an RFC
     * 3339 timestamp.
     */
    updated?: string;
    /**
     * The link to this activity.
     */
    url?: string;
    /**
     * This activity&#39;s verb, which indicates the action that was performed.
     * Possible values include, but are not limited to, the following values: -
     * &quot;post&quot; - Publish content to the stream.  - &quot;share&quot; -
     * Reshare an activity.
     */
    verb?: string;
  }
  export interface Schema$ActivityFeed {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The ID of this collection of activities. Deprecated.
     */
    id?: string;
    /**
     * The activities in this page of results.
     */
    items?: Schema$Activity[];
    /**
     * Identifies this resource as a collection of activities. Value:
     * &quot;plus#activityFeed&quot;.
     */
    kind?: string;
    /**
     * Link to the next page of activities.
     */
    nextLink?: string;
    /**
     * The continuation token, which is used to page through large result sets.
     * Provide this value in a subsequent request to return the next page of
     * results.
     */
    nextPageToken?: string;
    /**
     * Link to this activity resource.
     */
    selfLink?: string;
    /**
     * The title of this collection of activities, which is a truncated portion
     * of the content.
     */
    title?: string;
    /**
     * The time at which this collection of activities was last updated.
     * Formatted as an RFC 3339 timestamp.
     */
    updated?: string;
  }
  export interface Schema$Comment {
    /**
     * The person who posted this comment.
     */
    actor?: any;
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The ID of this comment.
     */
    id?: string;
    /**
     * The activity this comment replied to.
     */
    inReplyTo?: any[];
    /**
     * Identifies this resource as a comment. Value: &quot;plus#comment&quot;.
     */
    kind?: string;
    /**
     * The object of this comment.
     */
    object?: any;
    /**
     * People who +1&#39;d this comment.
     */
    plusoners?: any;
    /**
     * The time at which this comment was initially published. Formatted as an
     * RFC 3339 timestamp.
     */
    published?: string;
    /**
     * Link to this comment resource.
     */
    selfLink?: string;
    /**
     * The time at which this comment was last updated. Formatted as an RFC 3339
     * timestamp.
     */
    updated?: string;
    /**
     * This comment&#39;s verb, indicating what action was performed. Possible
     * values are:   - &quot;post&quot; - Publish content to the stream.
     */
    verb?: string;
  }
  export interface Schema$CommentFeed {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The ID of this collection of comments.
     */
    id?: string;
    /**
     * The comments in this page of results.
     */
    items?: Schema$Comment[];
    /**
     * Identifies this resource as a collection of comments. Value:
     * &quot;plus#commentFeed&quot;.
     */
    kind?: string;
    /**
     * Link to the next page of activities.
     */
    nextLink?: string;
    /**
     * The continuation token, which is used to page through large result sets.
     * Provide this value in a subsequent request to return the next page of
     * results.
     */
    nextPageToken?: string;
    /**
     * The title of this collection of comments.
     */
    title?: string;
    /**
     * The time at which this collection of comments was last updated. Formatted
     * as an RFC 3339 timestamp.
     */
    updated?: string;
  }
  export interface Schema$PeopleFeed {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The people in this page of results. Each item includes the id,
     * displayName, image, and url for the person. To retrieve additional
     * profile data, see the people.get method.
     */
    items?: Schema$Person[];
    /**
     * Identifies this resource as a collection of people. Value:
     * &quot;plus#peopleFeed&quot;.
     */
    kind?: string;
    /**
     * The continuation token, which is used to page through large result sets.
     * Provide this value in a subsequent request to return the next page of
     * results.
     */
    nextPageToken?: string;
    /**
     * Link to this resource.
     */
    selfLink?: string;
    /**
     * The title of this collection of people.
     */
    title?: string;
    /**
     * The total number of people available in this list. The number of people
     * in a response might be smaller due to paging. This might not be set for
     * all collections.
     */
    totalItems?: number;
  }
  export interface Schema$Person {
    /**
     * A short biography for this person.
     */
    aboutMe?: string;
    /**
     * The age range of the person. Valid ranges are 17 or younger, 18 to 20,
     * and 21 or older. Age is determined from the user&#39;s birthday using
     * Western age reckoning.
     */
    ageRange?: any;
    /**
     * The person&#39;s date of birth, represented as YYYY-MM-DD.
     */
    birthday?: string;
    /**
     * The &quot;bragging rights&quot; line of this person.
     */
    braggingRights?: string;
    /**
     * For followers who are visible, the number of people who have added this
     * person or page to a circle.
     */
    circledByCount?: number;
    /**
     * The cover photo content.
     */
    cover?: any;
    /**
     * (this field is not currently used)
     */
    currentLocation?: string;
    /**
     * The name of this person, which is suitable for display.
     */
    displayName?: string;
    /**
     * The hosted domain name for the user&#39;s Google Apps account. For
     * instance, example.com. The plus.profile.emails.read or email scope is
     * needed to get this domain name.
     */
    domain?: string;
    /**
     * A list of email addresses that this person has, including their Google
     * account email address, and the public verified email addresses on their
     * Google+ profile. The plus.profile.emails.read scope is needed to retrieve
     * these email addresses, or the email scope can be used to retrieve just
     * the Google account email address.
     */
    emails?: any[];
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The person&#39;s gender. Possible values include, but are not limited to,
     * the following values:   - &quot;male&quot; - Male gender.  -
     * &quot;female&quot; - Female gender.  - &quot;other&quot; - Other.
     */
    gender?: string;
    /**
     * The ID of this person.
     */
    id?: string;
    /**
     * The representation of the person&#39;s profile photo.
     */
    image?: any;
    /**
     * Whether this user has signed up for Google+.
     */
    isPlusUser?: boolean;
    /**
     * Identifies this resource as a person. Value: &quot;plus#person&quot;.
     */
    kind?: string;
    /**
     * The user&#39;s preferred language for rendering.
     */
    language?: string;
    /**
     * An object representation of the individual components of a person&#39;s
     * name.
     */
    name?: any;
    /**
     * The nickname of this person.
     */
    nickname?: string;
    /**
     * Type of person within Google+. Possible values include, but are not
     * limited to, the following values:   - &quot;person&quot; - represents an
     * actual person.  - &quot;page&quot; - represents a page.
     */
    objectType?: string;
    /**
     * The occupation of this person.
     */
    occupation?: string;
    /**
     * A list of current or past organizations with which this person is
     * associated.
     */
    organizations?: any[];
    /**
     * A list of places where this person has lived.
     */
    placesLived?: any[];
    /**
     * If a Google+ Page, the number of people who have +1&#39;d this page.
     */
    plusOneCount?: number;
    /**
     * The person&#39;s relationship status. Possible values include, but are
     * not limited to, the following values:   - &quot;single&quot; - Person is
     * single.  - &quot;in_a_relationship&quot; - Person is in a relationship.
     * - &quot;engaged&quot; - Person is engaged.  - &quot;married&quot; -
     * Person is married.  - &quot;its_complicated&quot; - The relationship is
     * complicated.  - &quot;open_relationship&quot; - Person is in an open
     * relationship.  - &quot;widowed&quot; - Person is widowed.  -
     * &quot;in_domestic_partnership&quot; - Person is in a domestic
     * partnership.  - &quot;in_civil_union&quot; - Person is in a civil union.
     */
    relationshipStatus?: string;
    /**
     * The person&#39;s skills.
     */
    skills?: string;
    /**
     * The brief description (tagline) of this person.
     */
    tagline?: string;
    /**
     * The URL of this person&#39;s profile.
     */
    url?: string;
    /**
     * A list of URLs for this person.
     */
    urls?: any[];
    /**
     * Whether the person or Google+ Page has been verified.
     */
    verified?: boolean;
  }
  export interface Schema$Place {
    /**
     * The physical address of the place.
     */
    address?: any;
    /**
     * The display name of the place.
     */
    displayName?: string;
    /**
     * The id of the place.
     */
    id?: string;
    /**
     * Identifies this resource as a place. Value: &quot;plus#place&quot;.
     */
    kind?: string;
    /**
     * The position of the place.
     */
    position?: any;
  }
  export interface Schema$PlusAclentryResource {
    /**
     * A descriptive name for this entry. Suitable for display.
     */
    displayName?: string;
    /**
     * The ID of the entry. For entries of type &quot;person&quot; or
     * &quot;circle&quot;, this is the ID of the resource. For other types, this
     * property is not set.
     */
    id?: string;
    /**
     * The type of entry describing to whom access is granted. Possible values
     * are:   - &quot;person&quot; - Access to an individual.  -
     * &quot;circle&quot; - Access to members of a circle.  -
     * &quot;myCircles&quot; - Access to members of all the person&#39;s
     * circles.  - &quot;extendedCircles&quot; - Access to members of all the
     * person&#39;s circles, plus all of the people in their circles.  -
     * &quot;domain&quot; - Access to members of the person&#39;s Google Apps
     * domain.  - &quot;public&quot; - Access to anyone on the web.
     */
    type?: string;
  }


  export class Resource$Activities {
    root: Plus;
    constructor(root: Plus) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * plus.activities.get
     * @desc Get an activity.
     * @alias plus.activities.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.activityId The ID of the activity to get.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Activities$Get,
        options?: MethodOptions): AxiosPromise<Schema$Activity>;
    get(params: Params$Resource$Activities$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Activity>,
        callback: BodyResponseCallback<Schema$Activity>): void;
    get(params: Params$Resource$Activities$Get,
        callback: BodyResponseCallback<Schema$Activity>): void;
    get(callback: BodyResponseCallback<Schema$Activity>): void;
    get(paramsOrCallback?: Params$Resource$Activities$Get|
        BodyResponseCallback<Schema$Activity>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Activity>,
        callback?: BodyResponseCallback<Schema$Activity>):
        void|AxiosPromise<Schema$Activity> {
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
              url: (rootUrl + '/plus/v1/activities/{activityId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['activityId'],
        pathParams: ['activityId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Activity>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Activity>(parameters);
      }
    }


    /**
     * plus.activities.list
     * @desc List all of the activities in the specified collection for a
     * particular user.
     * @alias plus.activities.list
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
    list(params?: Params$Resource$Activities$List, options?: MethodOptions):
        AxiosPromise<Schema$ActivityFeed>;
    list(
        params: Params$Resource$Activities$List,
        options: MethodOptions|BodyResponseCallback<Schema$ActivityFeed>,
        callback: BodyResponseCallback<Schema$ActivityFeed>): void;
    list(
        params: Params$Resource$Activities$List,
        callback: BodyResponseCallback<Schema$ActivityFeed>): void;
    list(callback: BodyResponseCallback<Schema$ActivityFeed>): void;
    list(
        paramsOrCallback?: Params$Resource$Activities$List|
        BodyResponseCallback<Schema$ActivityFeed>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ActivityFeed>,
        callback?: BodyResponseCallback<Schema$ActivityFeed>):
        void|AxiosPromise<Schema$ActivityFeed> {
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
              url:
                  (rootUrl + '/plus/v1/people/{userId}/activities/{collection}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['userId', 'collection'],
        pathParams: ['collection', 'userId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ActivityFeed>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ActivityFeed>(parameters);
      }
    }


    /**
     * plus.activities.search
     * @desc Search public activities.
     * @alias plus.activities.search
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.language Specify the preferred language to search with. See search language codes for available values.
     * @param {integer=} params.maxResults The maximum number of activities to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     * @param {string=} params.orderBy Specifies how to order search results.
     * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response. This token can be of any length.
     * @param {string} params.query Full-text search query string.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search(params?: Params$Resource$Activities$Search, options?: MethodOptions):
        AxiosPromise<Schema$ActivityFeed>;
    search(
        params: Params$Resource$Activities$Search,
        options: MethodOptions|BodyResponseCallback<Schema$ActivityFeed>,
        callback: BodyResponseCallback<Schema$ActivityFeed>): void;
    search(
        params: Params$Resource$Activities$Search,
        callback: BodyResponseCallback<Schema$ActivityFeed>): void;
    search(callback: BodyResponseCallback<Schema$ActivityFeed>): void;
    search(
        paramsOrCallback?: Params$Resource$Activities$Search|
        BodyResponseCallback<Schema$ActivityFeed>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ActivityFeed>,
        callback?: BodyResponseCallback<Schema$ActivityFeed>):
        void|AxiosPromise<Schema$ActivityFeed> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Activities$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Activities$Search;
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
              url: (rootUrl + '/plus/v1/activities')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['query'],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ActivityFeed>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ActivityFeed>(parameters);
      }
    }
  }

  export interface Params$Resource$Activities$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the activity to get.
     */
    activityId?: string;
  }
  export interface Params$Resource$Activities$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The collection of activities to list.
     */
    collection?: string;
    /**
     * The maximum number of activities to include in the response, which is
     * used for paging. For any response, the actual number returned might be
     * less than the specified maxResults.
     */
    maxResults?: number;
    /**
     * The continuation token, which is used to page through large result sets.
     * To get the next page of results, set this parameter to the value of
     * "nextPageToken" from the previous response.
     */
    pageToken?: string;
    /**
     * The ID of the user to get activities for. The special value "me" can be
     * used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Activities$Search {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Specify the preferred language to search with. See search language codes
     * for available values.
     */
    language?: string;
    /**
     * The maximum number of activities to include in the response, which is
     * used for paging. For any response, the actual number returned might be
     * less than the specified maxResults.
     */
    maxResults?: number;
    /**
     * Specifies how to order search results.
     */
    orderBy?: string;
    /**
     * The continuation token, which is used to page through large result sets.
     * To get the next page of results, set this parameter to the value of
     * "nextPageToken" from the previous response. This token can be of any
     * length.
     */
    pageToken?: string;
    /**
     * Full-text search query string.
     */
    query?: string;
  }


  export class Resource$Comments {
    root: Plus;
    constructor(root: Plus) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * plus.comments.get
     * @desc Get a comment.
     * @alias plus.comments.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.commentId The ID of the comment to get.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Comments$Get,
        options?: MethodOptions): AxiosPromise<Schema$Comment>;
    get(params: Params$Resource$Comments$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Comment>,
        callback: BodyResponseCallback<Schema$Comment>): void;
    get(params: Params$Resource$Comments$Get,
        callback: BodyResponseCallback<Schema$Comment>): void;
    get(callback: BodyResponseCallback<Schema$Comment>): void;
    get(paramsOrCallback?: Params$Resource$Comments$Get|
        BodyResponseCallback<Schema$Comment>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Comment>,
        callback?: BodyResponseCallback<Schema$Comment>):
        void|AxiosPromise<Schema$Comment> {
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
              url: (rootUrl + '/plus/v1/comments/{commentId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['commentId'],
        pathParams: ['commentId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Comment>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Comment>(parameters);
      }
    }


    /**
     * plus.comments.list
     * @desc List all of the comments for an activity.
     * @alias plus.comments.list
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
    list(params?: Params$Resource$Comments$List, options?: MethodOptions):
        AxiosPromise<Schema$CommentFeed>;
    list(
        params: Params$Resource$Comments$List,
        options: MethodOptions|BodyResponseCallback<Schema$CommentFeed>,
        callback: BodyResponseCallback<Schema$CommentFeed>): void;
    list(
        params: Params$Resource$Comments$List,
        callback: BodyResponseCallback<Schema$CommentFeed>): void;
    list(callback: BodyResponseCallback<Schema$CommentFeed>): void;
    list(
        paramsOrCallback?: Params$Resource$Comments$List|
        BodyResponseCallback<Schema$CommentFeed>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$CommentFeed>,
        callback?: BodyResponseCallback<Schema$CommentFeed>):
        void|AxiosPromise<Schema$CommentFeed> {
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
              url: (rootUrl + '/plus/v1/activities/{activityId}/comments')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['activityId'],
        pathParams: ['activityId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$CommentFeed>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CommentFeed>(parameters);
      }
    }
  }

  export interface Params$Resource$Comments$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the comment to get.
     */
    commentId?: string;
  }
  export interface Params$Resource$Comments$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the activity to get comments for.
     */
    activityId?: string;
    /**
     * The maximum number of comments to include in the response, which is used
     * for paging. For any response, the actual number returned might be less
     * than the specified maxResults.
     */
    maxResults?: number;
    /**
     * The continuation token, which is used to page through large result sets.
     * To get the next page of results, set this parameter to the value of
     * "nextPageToken" from the previous response.
     */
    pageToken?: string;
    /**
     * The order in which to sort the list of comments.
     */
    sortOrder?: string;
  }


  export class Resource$People {
    root: Plus;
    constructor(root: Plus) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * plus.people.get
     * @desc Get a person's profile. If your app uses scope
     * https://www.googleapis.com/auth/plus.login, this method is guaranteed to
     * return ageRange and language.
     * @alias plus.people.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId The ID of the person to get the profile for. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$People$Get,
        options?: MethodOptions): AxiosPromise<Schema$Person>;
    get(params: Params$Resource$People$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Person>,
        callback: BodyResponseCallback<Schema$Person>): void;
    get(params: Params$Resource$People$Get,
        callback: BodyResponseCallback<Schema$Person>): void;
    get(callback: BodyResponseCallback<Schema$Person>): void;
    get(paramsOrCallback?: Params$Resource$People$Get|
        BodyResponseCallback<Schema$Person>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Person>,
        callback?: BodyResponseCallback<Schema$Person>):
        void|AxiosPromise<Schema$Person> {
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
              url: (rootUrl + '/plus/v1/people/{userId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Person>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Person>(parameters);
      }
    }


    /**
     * plus.people.list
     * @desc List all of the people in the specified collection.
     * @alias plus.people.list
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
    list(params?: Params$Resource$People$List, options?: MethodOptions):
        AxiosPromise<Schema$PeopleFeed>;
    list(
        params: Params$Resource$People$List,
        options: MethodOptions|BodyResponseCallback<Schema$PeopleFeed>,
        callback: BodyResponseCallback<Schema$PeopleFeed>): void;
    list(
        params: Params$Resource$People$List,
        callback: BodyResponseCallback<Schema$PeopleFeed>): void;
    list(callback: BodyResponseCallback<Schema$PeopleFeed>): void;
    list(
        paramsOrCallback?: Params$Resource$People$List|
        BodyResponseCallback<Schema$PeopleFeed>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$PeopleFeed>,
        callback?: BodyResponseCallback<Schema$PeopleFeed>):
        void|AxiosPromise<Schema$PeopleFeed> {
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
              url: (rootUrl + '/plus/v1/people/{userId}/people/{collection}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['userId', 'collection'],
        pathParams: ['collection', 'userId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$PeopleFeed>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PeopleFeed>(parameters);
      }
    }


    /**
     * plus.people.listByActivity
     * @desc List all of the people in the specified collection for a particular
     * activity.
     * @alias plus.people.listByActivity
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
        options?: MethodOptions): AxiosPromise<Schema$PeopleFeed>;
    listByActivity(
        params: Params$Resource$People$Listbyactivity,
        options: MethodOptions|BodyResponseCallback<Schema$PeopleFeed>,
        callback: BodyResponseCallback<Schema$PeopleFeed>): void;
    listByActivity(
        params: Params$Resource$People$Listbyactivity,
        callback: BodyResponseCallback<Schema$PeopleFeed>): void;
    listByActivity(callback: BodyResponseCallback<Schema$PeopleFeed>): void;
    listByActivity(
        paramsOrCallback?: Params$Resource$People$Listbyactivity|
        BodyResponseCallback<Schema$PeopleFeed>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$PeopleFeed>,
        callback?: BodyResponseCallback<Schema$PeopleFeed>):
        void|AxiosPromise<Schema$PeopleFeed> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$People$Listbyactivity;
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
              url: (rootUrl +
                    '/plus/v1/activities/{activityId}/people/{collection}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['activityId', 'collection'],
        pathParams: ['activityId', 'collection'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$PeopleFeed>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PeopleFeed>(parameters);
      }
    }


    /**
     * plus.people.search
     * @desc Search all public profiles.
     * @alias plus.people.search
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.language Specify the preferred language to search with. See search language codes for available values.
     * @param {integer=} params.maxResults The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
     * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response. This token can be of any length.
     * @param {string} params.query Specify a query string for full text search of public text in all profiles.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search(params?: Params$Resource$People$Search, options?: MethodOptions):
        AxiosPromise<Schema$PeopleFeed>;
    search(
        params: Params$Resource$People$Search,
        options: MethodOptions|BodyResponseCallback<Schema$PeopleFeed>,
        callback: BodyResponseCallback<Schema$PeopleFeed>): void;
    search(
        params: Params$Resource$People$Search,
        callback: BodyResponseCallback<Schema$PeopleFeed>): void;
    search(callback: BodyResponseCallback<Schema$PeopleFeed>): void;
    search(
        paramsOrCallback?: Params$Resource$People$Search|
        BodyResponseCallback<Schema$PeopleFeed>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$PeopleFeed>,
        callback?: BodyResponseCallback<Schema$PeopleFeed>):
        void|AxiosPromise<Schema$PeopleFeed> {
      let params = (paramsOrCallback || {}) as Params$Resource$People$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$People$Search;
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
              url: (rootUrl + '/plus/v1/people').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['query'],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$PeopleFeed>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PeopleFeed>(parameters);
      }
    }
  }

  export interface Params$Resource$People$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the person to get the profile for. The special value "me" can
     * be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$People$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The collection of people to list.
     */
    collection?: string;
    /**
     * The maximum number of people to include in the response, which is used
     * for paging. For any response, the actual number returned might be less
     * than the specified maxResults.
     */
    maxResults?: number;
    /**
     * The order to return people in.
     */
    orderBy?: string;
    /**
     * The continuation token, which is used to page through large result sets.
     * To get the next page of results, set this parameter to the value of
     * "nextPageToken" from the previous response.
     */
    pageToken?: string;
    /**
     * Get the collection of people for the person identified. Use "me" to
     * indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$People$Listbyactivity {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the activity to get the list of people for.
     */
    activityId?: string;
    /**
     * The collection of people to list.
     */
    collection?: string;
    /**
     * The maximum number of people to include in the response, which is used
     * for paging. For any response, the actual number returned might be less
     * than the specified maxResults.
     */
    maxResults?: number;
    /**
     * The continuation token, which is used to page through large result sets.
     * To get the next page of results, set this parameter to the value of
     * "nextPageToken" from the previous response.
     */
    pageToken?: string;
  }
  export interface Params$Resource$People$Search {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Specify the preferred language to search with. See search language codes
     * for available values.
     */
    language?: string;
    /**
     * The maximum number of people to include in the response, which is used
     * for paging. For any response, the actual number returned might be less
     * than the specified maxResults.
     */
    maxResults?: number;
    /**
     * The continuation token, which is used to page through large result sets.
     * To get the next page of results, set this parameter to the value of
     * "nextPageToken" from the previous response. This token can be of any
     * length.
     */
    pageToken?: string;
    /**
     * Specify a query string for full text search of public text in all
     * profiles.
     */
    query?: string;
  }
}
