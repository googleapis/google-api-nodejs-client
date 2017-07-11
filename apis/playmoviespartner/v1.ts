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

/* jshint maxlen: false */

import createAPIRequest from '../../lib/apirequest';

/**
 * Google Play Movies Partner API
 *
 * Gets the delivery status of titles for Google Play Movies Partners.
 *
 * @example
 * const google = require('googleapis');
 * const playmoviespartner = google.playmoviespartner('v1');
 *
 * @namespace playmoviespartner
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Playmoviespartner
 */
function Playmoviespartner(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.accounts = {

    storeInfos: {

      /**
       * playmoviespartner.accounts.storeInfos.list
       *
       * @desc List StoreInfos owned or managed by the partner.  See _Authentication and Authorization rules_ and _List methods rules_ for more information about this method.
       *
       * @alias playmoviespartner.accounts.storeInfos.list
       * @memberOf! playmoviespartner(v1)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.mids Filter StoreInfos that match any of the given `mid`s.
       * @param {string=} params.pphNames See _List methods rules_ for info about this field.
       * @param {string=} params.countries Filter StoreInfos that match (case-insensitive) any of the given country codes, using the "ISO 3166-1 alpha-2" format (examples: "US", "us", "Us").
       * @param {string=} params.name Filter that matches StoreInfos with a `name` or `show_name` that contains the given case-insensitive name.
       * @param {string=} params.studioNames See _List methods rules_ for info about this field.
       * @param {string} params.accountId REQUIRED. See _General rules_ for more information about this field.
       * @param {string=} params.seasonIds Filter StoreInfos that match any of the given `season_id`s.
       * @param {string=} params.videoIds Filter StoreInfos that match any of the given `video_id`s.
       * @param {string=} params.videoId Filter StoreInfos that match a given `video_id`. NOTE: this field is deprecated and will be removed on V2; `video_ids` should be used instead.
       * @param {string=} params.pageToken See _List methods rules_ for info about this field.
       * @param {integer=} params.pageSize See _List methods rules_ for info about this field.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://playmoviespartner.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/accounts/{accountId}/storeInfos').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['accountId'],
          pathParams: ['accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      country: {

        /**
         * playmoviespartner.accounts.storeInfos.country.get
         *
         * @desc Get a StoreInfo given its video id and country.  See _Authentication and Authorization rules_ and _Get methods rules_ for more information about this method.
         *
         * @alias playmoviespartner.accounts.storeInfos.country.get
         * @memberOf! playmoviespartner(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.country REQUIRED. Edit country.
         * @param {string} params.videoId REQUIRED. Video ID.
         * @param {string} params.accountId REQUIRED. See _General rules_ for more information about this field.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://playmoviespartner.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/accounts/{accountId}/storeInfos/{videoId}/country/{country}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['accountId', 'videoId', 'country'],
            pathParams: ['country', 'videoId', 'accountId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    },

    orders: {

      /**
       * playmoviespartner.accounts.orders.list
       *
       * @desc List Orders owned or managed by the partner.  See _Authentication and Authorization rules_ and _List methods rules_ for more information about this method.
       *
       * @alias playmoviespartner.accounts.orders.list
       * @memberOf! playmoviespartner(v1)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.pageToken See _List methods rules_ for info about this field.
       * @param {string=} params.videoIds Filter Orders that match any of the given `video_id`s.
       * @param {string=} params.customId Filter Orders that match a case-insensitive, partner-specific custom id.
       * @param {integer=} params.pageSize See _List methods rules_ for info about this field.
       * @param {string=} params.pphNames See _List methods rules_ for info about this field.
       * @param {string=} params.status Filter Orders that match one of the given status.
       * @param {string=} params.studioNames See _List methods rules_ for info about this field.
       * @param {string=} params.name Filter that matches Orders with a `name`, `show`, `season` or `episode` that contains the given case-insensitive name.
       * @param {string} params.accountId REQUIRED. See _General rules_ for more information about this field.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://playmoviespartner.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/accounts/{accountId}/orders').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['accountId'],
          pathParams: ['accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * playmoviespartner.accounts.orders.get
       *
       * @desc Get an Order given its id.  See _Authentication and Authorization rules_ and _Get methods rules_ for more information about this method.
       *
       * @alias playmoviespartner.accounts.orders.get
       * @memberOf! playmoviespartner(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.orderId REQUIRED. Order ID.
       * @param {string} params.accountId REQUIRED. See _General rules_ for more information about this field.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://playmoviespartner.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/accounts/{accountId}/orders/{orderId}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['accountId', 'orderId'],
          pathParams: ['orderId', 'accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    avails: {

      /**
       * playmoviespartner.accounts.avails.list
       *
       * @desc List Avails owned or managed by the partner.  See _Authentication and Authorization rules_ and _List methods rules_ for more information about this method.
       *
       * @alias playmoviespartner.accounts.avails.list
       * @memberOf! playmoviespartner(v1)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.videoIds Filter Avails that match any of the given `video_id`s.
       * @param {string=} params.pageToken See _List methods rules_ for info about this field.
       * @param {integer=} params.pageSize See _List methods rules_ for info about this field.
       * @param {string=} params.altIds Filter Avails that match (case-insensitive) any of the given partner-specific custom ids.
       * @param {string=} params.pphNames See _List methods rules_ for info about this field.
       * @param {string=} params.altId Filter Avails that match a case-insensitive, partner-specific custom id. NOTE: this field is deprecated and will be removed on V2; `alt_ids` should be used instead.
       * @param {string=} params.studioNames See _List methods rules_ for info about this field.
       * @param {string} params.accountId REQUIRED. See _General rules_ for more information about this field.
       * @param {string=} params.territories Filter Avails that match (case-insensitive) any of the given country codes, using the "ISO 3166-1 alpha-2" format (examples: "US", "us", "Us").
       * @param {string=} params.title Filter that matches Avails with a `title_internal_alias`, `series_title_internal_alias`, `season_title_internal_alias`, or `episode_title_internal_alias` that contains the given case-insensitive title.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://playmoviespartner.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/accounts/{accountId}/avails').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['accountId'],
          pathParams: ['accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * playmoviespartner.accounts.avails.get
       *
       * @desc Get an Avail given its avail group id and avail id.
       *
       * @alias playmoviespartner.accounts.avails.get
       * @memberOf! playmoviespartner(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.availId REQUIRED. Avail ID.
       * @param {string} params.accountId REQUIRED. See _General rules_ for more information about this field.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://playmoviespartner.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/accounts/{accountId}/avails/{availId}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['accountId', 'availId'],
          pathParams: ['availId', 'accountId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };
}

/**
 * @typedef Order
 * @memberOf! playmoviespartner(v1)
 * @type object
* @property {string} normalizedPriority A simpler representation of the priority.
* @property {string} orderId ID internally generated by Google to uniquely identify an Order.
Example: &#39;abcde12_x&#39;
* @property {string} type Type of the Edit linked to the Order.
* @property {string} rejectionNote Field explaining why an Order has been rejected.
Example: &quot;Trailer audio is 2ch mono, please re-deliver in stereo&quot;.
* @property {string} channelId YouTube Channel ID that should be used to fulfill the Order.
Example: &quot;UCRG64darCZhb&quot;.
* @property {string} legacyPriority Legacy Order priority, as defined by Google.
Example: &#39;P0&#39;
* @property {string} pphName Name of the post-production house that manages the Edit ordered.
* @property {string} orderedTime Timestamp when the Order was created.
* @property {number} priority Order priority, as defined by Google.
The higher the value, the higher the priority.
Example: 90
* @property {string} videoId Google-generated ID identifying the video linked to this Order, once
delivered.
Example: &#39;gtry456_xc&#39;.
* @property {string} episodeName Default Episode name,
usually in the language of the country of origin.
Only available for TV Edits
Example: &quot;Googlers, The - Pilot&quot;.
* @property {string[]} countries Countries where the Order is available,
using the &quot;ISO 3166-1 alpha-2&quot; format (example: &quot;US&quot;).
* @property {string} statusDetail Detailed status of the order
* @property {string} status High-level status of the order.
* @property {string} earliestAvailStartTime Timestamp of the earliest start date of the Avails
linked to this Order.
* @property {string} name Default Edit name,
usually in the language of the country of origin.
Example: &quot;Googlers, The&quot;.
* @property {string} studioName Name of the studio that owns the Edit ordered.
* @property {string} receivedTime Timestamp when the Order was fulfilled.
* @property {string} seasonName Default Season name,
usually in the language of the country of origin.
Only available for TV Edits
Example: &quot;Googlers, The - A Brave New World&quot;.
* @property {string} customId ID that can be used to externally identify an Order.
This ID is provided by partners when submitting the Avails.
Example: &#39;GOOGLER_2006&#39;
* @property {string} channelName YouTube Channel Name that should be used to fulfill the Order.
Example: &quot;Google_channel&quot;.
* @property {string} approvedTime Timestamp when the Order was approved.
* @property {string} showName Default Show name,
usually in the language of the country of origin.
Only available for TV Edits
Example: &quot;Googlers, The&quot;.
*/
/**
 * @typedef ListStoreInfosResponse
 * @memberOf! playmoviespartner(v1)
 * @type object
 * @property {string} nextPageToken See &#39;List methods rules&#39; for info about this field.
 * @property {integer} totalSize See _List methods rules_ for more information about this field.
 * @property {playmoviespartner(v1).StoreInfo[]} storeInfos List of StoreInfos that match the request criteria.
 */
/**
 * @typedef ListAvailsResponse
 * @memberOf! playmoviespartner(v1)
 * @type object
 * @property {string} nextPageToken See _List methods rules_ for info about this field.
 * @property {integer} totalSize See _List methods rules_ for more information about this field.
 * @property {playmoviespartner(v1).Avail[]} avails List of Avails that match the request criteria.
 */
/**
 * @typedef ListOrdersResponse
 * @memberOf! playmoviespartner(v1)
 * @type object
 * @property {string} nextPageToken See _List methods rules_ for info about this field.
 * @property {integer} totalSize See _List methods rules_ for more information about this field.
 * @property {playmoviespartner(v1).Order[]} orders List of Orders that match the request criteria.
 */
/**
 * @typedef StoreInfo
 * @memberOf! playmoviespartner(v1)
 * @type object
* @property {string} liveTime Timestamp when the Edit went live on the Store.
* @property {string} videoId Google-generated ID identifying the video linked to the Edit.
Example: &#39;gtry456_xc&#39;
* @property {boolean} hasInfoCards Whether the Edit has info cards.
* @property {boolean} hasVodOffer Whether the Edit has a VOD offer.
* @property {string[]} pphNames Name of the post-production houses that manage the Edit.
* @property {string} episodeNumber The number assigned to the episode within a season.
Only available on TV Edits.
Example: &quot;1&quot;.
* @property {string} studioName Name of the studio that owns the Edit ordered.
* @property {string[]} subtitles Subtitles available for this Edit.
* @property {string[]} audioTracks Audio tracks available for this Edit.
* @property {string} showName Default Show name, usually in the language of the country of
origin.
Only available for TV Edits
Example: &quot;Googlers, The&quot;.
* @property {string} country Country where Edit is available in ISO 3166-1 alpha-2 country
code.
Example: &quot;US&quot;.
* @property {string} showId Google-generated ID identifying the show linked to the Edit.
Only available for TV Edits.
Example: &#39;et2hsue_x&#39;
* @property {string} type Edit type, like Movie, Episode or Season.
* @property {string} trailerId Google-generated ID identifying the trailer linked to the Edit.
Example: &#39;bhd_4e_cx&#39;
* @property {boolean} hasHdOffer Whether the Edit has a HD offer.
* @property {string} mid Knowledge Graph ID associated to this Edit, if available.
This ID links the Edit to its knowledge entity, externally accessible
at http://freebase.com.
In the absense of Title EIDR or Edit EIDR, this ID helps link together
multiple Edits across countries.
Example: &#39;/m/0ffx29&#39;
* @property {boolean} hasAudio51 Whether the Edit has a 5.1 channel audio track.
* @property {string} name Default Edit name, usually in the language of the country of
origin.
Example: &quot;Googlers, The&quot;.
* @property {string} seasonId Google-generated ID identifying the season linked to the Edit.
Only available for TV Edits.
Example: &#39;ster23ex&#39;
* @property {string} titleLevelEidr Title-level EIDR ID.
Example: &quot;10.5240/1489-49A2-3956-4B2D-FE16-5&quot;.
* @property {string} seasonName Default Season name, usually in the language of the country of
origin.
Only available for TV Edits
Example: &quot;Googlers, The - A Brave New World&quot;.
* @property {string} seasonNumber The number assigned to the season within a show.
Only available on TV Edits.
Example: &quot;1&quot;.
* @property {string} editLevelEidr Edit-level EIDR ID.
Example: &quot;10.5240/1489-49A2-3956-4B2D-FE16-6&quot;.
* @property {boolean} hasEstOffer Whether the Edit has a EST offer.
* @property {boolean} hasSdOffer Whether the Edit has a SD offer.
*/
/**
 * @typedef Avail
 * @memberOf! playmoviespartner(v1)
 * @type object
* @property {string} priceType Type of pricing that should be applied to this Avail
based on how the partner classify them.
Example: &quot;Tier&quot;, &quot;WSP&quot;, &quot;SRP&quot;, or &quot;Category&quot;.
* @property {boolean} captionIncluded Communicating if caption file will be delivered.
* @property {string} seasonNumber The number assigned to the season within a series.
Only available on TV Avails.
Example: &quot;1&quot;.
* @property {string} licenseType Type of transaction.
* @property {string} releaseDate Release date of the Title in earliest released territory.
Typically it is just the year, but it is free-form as per EMA spec.
Examples: &quot;1979&quot;, &quot;Oct 2014&quot;
* @property {string} end End of term in YYYY-MM-DD format in the timezone of the country
of the Avail.
&quot;Open&quot; if no end date is available.
Example: &quot;2019-02-17&quot;
* @property {string} videoId Google-generated ID identifying the video linked to this Avail, once
delivered.
Not part of EMA Specs.
Example: &#39;gtry456_xc&#39;
* @property {string} start Start of term in YYYY-MM-DD format in the timezone of the
country of the Avail.
Example: &quot;2013-05-14&quot;.
* @property {string[]} pphNames Name of the post-production houses that manage the Avail.
Not part of EMA Specs.
* @property {string} ratingSystem Rating system applied to the version of title within territory
of Avail.
Rating systems should be formatted as per
[EMA ratings spec](http://www.movielabs.com/md/ratings/)
Example: &quot;MPAA&quot;
* @property {string} seriesAltId Other identifier referring to the series, as defined by partner.
Only available on TV avails.
Example: &quot;rs_googlers&quot;.
* @property {string} altId Other identifier referring to the Edit, as defined by partner.
Example: &quot;GOOGLER_2006&quot;
* @property {string} episodeNumber The number assigned to the episode within a season.
Only available on TV Avails.
Example: &quot;3&quot;.
* @property {string} seriesTitleInternalAlias Title used by involved parties to refer to this series.
Only available on TV Avails.
Example: &quot;Googlers, The&quot;.
* @property {string} formatProfile Indicates the format profile covered by the transaction.
* @property {string} ratingValue Value representing the rating.
Ratings should be formatted as per http://www.movielabs.com/md/ratings/
Example: &quot;PG&quot;
* @property {string} titleInternalAlias Title used by involved parties to refer to this content.
Example: &quot;Googlers, The&quot;.
Only available on Movie Avails.
* @property {string} contentId Title Identifier. This should be the Title Level EIDR.
Example: &quot;10.5240/1489-49A2-3956-4B2D-FE16-5&quot;.
* @property {string} storeLanguage Spoken language of the intended audience.
Language shall be encoded in accordance with RFC 5646.
Example: &quot;fr&quot;.
* @property {string} captionExemption Communicating an exempt category as defined by FCC regulations.
It is not required for non-US Avails.
Example: &quot;1&quot;
* @property {string} displayName The name of the studio that owns the Edit referred in the Avail.
This is the equivalent of `studio_name` in other resources, but it follows
the EMA nomenclature.
Example: &quot;Google Films&quot;.
* @property {string} productId Edit Identifier. This should be the Edit Level EIDR.
Example: &quot;10.2340/1489-49A2-3956-4B2D-FE16-6&quot;
* @property {string} seasonTitleInternalAlias Title used by involved parties to refer to this season.
Only available on TV Avails.
Example: &quot;Googlers, The&quot;.
* @property {string} priceValue Value to be applied to the pricing type.
Example: &quot;4&quot; or &quot;2.99&quot;
* @property {string} episodeAltId Other identifier referring to the episode, as defined by partner.
Only available on TV avails.
Example: &quot;rs_googlers_s1_3&quot;.
* @property {string} territory ISO 3166-1 alpha-2 country code for the country or territory
of this Avail.
For Avails, we use Territory in lieu of Country to comply with
EMA specifications.
But please note that Territory and Country identify the same thing.
Example: &quot;US&quot;.
* @property {string} ratingReason Value representing the rating reason.
Rating reasons should be formatted as per
[EMA ratings spec](http://www.movielabs.com/md/ratings/)
and comma-separated for inclusion of multiple reasons.
Example: &quot;L, S, V&quot;
* @property {string} availId ID internally generated by Google to uniquely identify an Avail.
Not part of EMA Specs.
* @property {string} workType Work type as enumerated in EMA.
* @property {string} episodeTitleInternalAlias OPTIONAL.TV Only. Title used by involved parties to refer to this episode.
Only available on TV Avails.
Example: &quot;Coding at Google&quot;.
* @property {string} suppressionLiftDate First date an Edit could be publically announced as becoming
available at a specific future date in territory of Avail.
*Not* the Avail start date or pre-order start date.
Format is YYYY-MM-DD.
Only available for pre-orders.
Example: &quot;2012-12-10&quot;
* @property {string} seasonAltId Other identifier referring to the season, as defined by partner.
Only available on TV avails.
Example: &quot;rs_googlers_s1&quot;.
* @property {string} encodeId Manifestation Identifier. This should be the Manifestation
Level EIDR.
Example: &quot;10.2340/1489-49A2-3956-4B2D-FE16-7&quot;
*/
export = Playmoviespartner;
