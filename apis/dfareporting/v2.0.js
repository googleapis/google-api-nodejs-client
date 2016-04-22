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

'use strict';

var createAPIRequest = require('../../lib/apirequest');

/**
 * DCM/DFA Reporting And Trafficking API
 *
 * Manages your DoubleClick Campaign Manager ad campaigns and reports.
 *
 * @example
 * var google = require('googleapis');
 * var dfareporting = google.dfareporting('v2.0');
 *
 * @namespace dfareporting
 * @type {Function}
 * @version v2.0
 * @variation v2.0
 * @param {object=} options Options for Dfareporting
 */
function Dfareporting(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.accountActiveAdSummaries = {

    /**
     * dfareporting.accountActiveAdSummaries.get
     *
     * @desc Gets the account's active ad summary by account ID.
     *
     * @alias dfareporting.accountActiveAdSummaries.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string} params.summaryAccountId Account ID.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/accountActiveAdSummaries/{summaryAccountId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'summaryAccountId'],
        pathParams: ['profileId', 'summaryAccountId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.accountPermissionGroups = {

    /**
     * dfareporting.accountPermissionGroups.get
     *
     * @desc Gets one account permission group by ID.
     *
     * @alias dfareporting.accountPermissionGroups.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Account permission group ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/accountPermissionGroups/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.accountPermissionGroups.list
     *
     * @desc Retrieves the list of account permission groups.
     *
     * @alias dfareporting.accountPermissionGroups.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/accountPermissionGroups',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.accountPermissions = {

    /**
     * dfareporting.accountPermissions.get
     *
     * @desc Gets one account permission by ID.
     *
     * @alias dfareporting.accountPermissions.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Account permission ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/accountPermissions/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.accountPermissions.list
     *
     * @desc Retrieves the list of account permissions.
     *
     * @alias dfareporting.accountPermissions.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/accountPermissions',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.accountUserProfiles = {

    /**
     * dfareporting.accountUserProfiles.get
     *
     * @desc Gets one account user profile by ID.
     *
     * @alias dfareporting.accountUserProfiles.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id User profile ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/accountUserProfiles/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.accountUserProfiles.list
     *
     * @desc Retrieves a list of account user profiles, possibly filtered.
     *
     * @alias dfareporting.accountUserProfiles.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.active Select only active user profiles.
     * @param {string=} params.ids Select only user profiles with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for objects by name, ID or email. Wildcards (*) are allowed. For example, "user profile*2015" will return objects with names like "user profile June 2015", "user profile April 2015", or simply "user profile 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "user profile" will match objects with name "my user profile", "user profile 2015", or simply "user profile".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results, default is ASCENDING.
     * @param {string=} params.subaccountId Select only user profiles with the specified subaccount ID.
     * @param {string=} params.userRoleId Select only user profiles with the specified user role ID.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/accountUserProfiles',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.accountUserProfiles.patch
     *
     * @desc Updates an existing account user profile. This method supports patch semantics.
     *
     * @alias dfareporting.accountUserProfiles.patch
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id User profile ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/accountUserProfiles',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.accountUserProfiles.update
     *
     * @desc Updates an existing account user profile.
     *
     * @alias dfareporting.accountUserProfiles.update
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/accountUserProfiles',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.accounts = {

    /**
     * dfareporting.accounts.get
     *
     * @desc Gets one account by ID.
     *
     * @alias dfareporting.accounts.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Account ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/accounts/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.accounts.list
     *
     * @desc Retrieves the list of accounts, possibly filtered.
     *
     * @alias dfareporting.accounts.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.active Select only active accounts. Don't set this field to select both active and non-active accounts.
     * @param {string=} params.ids Select only accounts with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "account*2015" will return objects with names like "account June 2015", "account April 2015", or simply "account 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "account" will match objects with name "my account", "account 2015", or simply "account".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results, default is ASCENDING.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/accounts',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.accounts.patch
     *
     * @desc Updates an existing account. This method supports patch semantics.
     *
     * @alias dfareporting.accounts.patch
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Account ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/accounts',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.accounts.update
     *
     * @desc Updates an existing account.
     *
     * @alias dfareporting.accounts.update
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/accounts',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.ads = {

    /**
     * dfareporting.ads.get
     *
     * @desc Gets one ad by ID.
     *
     * @alias dfareporting.ads.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Ad ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/ads/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.ads.insert
     *
     * @desc Inserts a new ad.
     *
     * @alias dfareporting.ads.insert
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/ads',
          method: 'POST'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.ads.list
     *
     * @desc Retrieves a list of ads, possibly filtered.
     *
     * @alias dfareporting.ads.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.active Select only active ads.
     * @param {string=} params.advertiserId Select only ads with this advertiser ID.
     * @param {boolean=} params.archived Select only archived ads.
     * @param {string=} params.audienceSegmentIds Select only ads with these audience segment IDs.
     * @param {string=} params.campaignIds Select only ads with these campaign IDs.
     * @param {string=} params.compatibility Select default ads with the specified compatibility. Applicable when type is AD_SERVING_DEFAULT_AD. WEB and WEB_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering an in-stream video ads developed with the VAST standard.
     * @param {string=} params.creativeIds Select only ads with these creative IDs assigned.
     * @param {string=} params.creativeOptimizationConfigurationIds Select only ads with these creative optimization configuration IDs.
     * @param {string=} params.creativeType Select only ads with the specified creativeType.
     * @param {boolean=} params.dynamicClickTracker Select only dynamic click trackers. Applicable when type is AD_SERVING_CLICK_TRACKER. If true, select dynamic click trackers. If false, select static click trackers. Leave unset to select both.
     * @param {string=} params.ids Select only ads with these IDs.
     * @param {string=} params.landingPageIds Select only ads with these landing page IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.overriddenEventTagId Select only ads with this event tag override ID.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string=} params.placementIds Select only ads with these placement IDs assigned.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.remarketingListIds Select only ads whose list targeting expression use these remarketing list IDs.
     * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "ad*2015" will return objects with names like "ad June 2015", "ad April 2015", or simply "ad 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "ad" will match objects with name "my ad", "ad 2015", or simply "ad".
     * @param {string=} params.sizeIds Select only ads with these size IDs.
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results, default is ASCENDING.
     * @param {boolean=} params.sslCompliant Select only ads that are SSL-compliant.
     * @param {boolean=} params.sslRequired Select only ads that require SSL.
     * @param {string=} params.type Select only ads with these types.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/ads',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.ads.patch
     *
     * @desc Updates an existing ad. This method supports patch semantics.
     *
     * @alias dfareporting.ads.patch
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Ad ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/ads',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.ads.update
     *
     * @desc Updates an existing ad.
     *
     * @alias dfareporting.ads.update
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/ads',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.advertiserGroups = {

    /**
     * dfareporting.advertiserGroups.delete
     *
     * @desc Deletes an existing advertiser group.
     *
     * @alias dfareporting.advertiserGroups.delete
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Advertiser group ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/advertiserGroups/{id}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.advertiserGroups.get
     *
     * @desc Gets one advertiser group by ID.
     *
     * @alias dfareporting.advertiserGroups.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Advertiser group ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/advertiserGroups/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.advertiserGroups.insert
     *
     * @desc Inserts a new advertiser group.
     *
     * @alias dfareporting.advertiserGroups.insert
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/advertiserGroups',
          method: 'POST'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.advertiserGroups.list
     *
     * @desc Retrieves a list of advertiser groups, possibly filtered.
     *
     * @alias dfareporting.advertiserGroups.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.ids Select only advertiser groups with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser group June 2015", "advertiser group April 2015", or simply "advertiser group 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertisergroup" will match objects with name "my advertisergroup", "advertisergroup 2015", or simply "advertisergroup".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results, default is ASCENDING.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/advertiserGroups',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.advertiserGroups.patch
     *
     * @desc Updates an existing advertiser group. This method supports patch semantics.
     *
     * @alias dfareporting.advertiserGroups.patch
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Advertiser group ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/advertiserGroups',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.advertiserGroups.update
     *
     * @desc Updates an existing advertiser group.
     *
     * @alias dfareporting.advertiserGroups.update
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/advertiserGroups',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.advertisers = {

    /**
     * dfareporting.advertisers.get
     *
     * @desc Gets one advertiser by ID.
     *
     * @alias dfareporting.advertisers.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Advertiser ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/advertisers/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.advertisers.insert
     *
     * @desc Inserts a new advertiser.
     *
     * @alias dfareporting.advertisers.insert
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/advertisers',
          method: 'POST'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.advertisers.list
     *
     * @desc Retrieves a list of advertisers, possibly filtered.
     *
     * @alias dfareporting.advertisers.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.advertiserGroupIds Select only advertisers with these advertiser group IDs.
     * @param {string=} params.floodlightConfigurationIds Select only advertisers with these floodlight configuration IDs.
     * @param {string=} params.ids Select only advertisers with these IDs.
     * @param {boolean=} params.includeAdvertisersWithoutGroupsOnly Select only advertisers which do not belong to any advertiser group.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {boolean=} params.onlyParent Select only advertisers which use another advertiser's floodlight configuration.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser June 2015", "advertiser April 2015", or simply "advertiser 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertiser" will match objects with name "my advertiser", "advertiser 2015", or simply "advertiser".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results, default is ASCENDING.
     * @param {string=} params.status Select only advertisers with the specified status.
     * @param {string=} params.subaccountId Select only advertisers with these subaccount IDs.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/advertisers',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.advertisers.patch
     *
     * @desc Updates an existing advertiser. This method supports patch semantics.
     *
     * @alias dfareporting.advertisers.patch
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Advertiser ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/advertisers',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.advertisers.update
     *
     * @desc Updates an existing advertiser.
     *
     * @alias dfareporting.advertisers.update
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/advertisers',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.browsers = {

    /**
     * dfareporting.browsers.list
     *
     * @desc Retrieves a list of browsers.
     *
     * @alias dfareporting.browsers.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/browsers',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.campaignCreativeAssociations = {

    /**
     * dfareporting.campaignCreativeAssociations.insert
     *
     * @desc Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.
     *
     * @alias dfareporting.campaignCreativeAssociations.insert
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.campaignId Campaign ID in this association.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/campaigns/{campaignId}/campaignCreativeAssociations',
          method: 'POST'
        },
        params: params,
        requiredParams: ['profileId', 'campaignId'],
        pathParams: ['campaignId', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.campaignCreativeAssociations.list
     *
     * @desc Retrieves the list of creative IDs associated with the specified campaign.
     *
     * @alias dfareporting.campaignCreativeAssociations.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.campaignId Campaign ID in this association.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.sortOrder Order of sorted results, default is ASCENDING.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/campaigns/{campaignId}/campaignCreativeAssociations',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'campaignId'],
        pathParams: ['campaignId', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.campaigns = {

    /**
     * dfareporting.campaigns.get
     *
     * @desc Gets one campaign by ID.
     *
     * @alias dfareporting.campaigns.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Campaign ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/campaigns/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.campaigns.insert
     *
     * @desc Inserts a new campaign.
     *
     * @alias dfareporting.campaigns.insert
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.defaultLandingPageName Default landing page name for this new campaign. Must be less than 256 characters long.
     * @param {string} params.defaultLandingPageUrl Default landing page URL for this new campaign.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/campaigns',
          method: 'POST'
        },
        params: params,
        requiredParams: ['profileId', 'defaultLandingPageName', 'defaultLandingPageUrl'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.campaigns.list
     *
     * @desc Retrieves a list of campaigns, possibly filtered.
     *
     * @alias dfareporting.campaigns.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.advertiserGroupIds Select only campaigns whose advertisers belong to these advertiser groups.
     * @param {string=} params.advertiserIds Select only campaigns that belong to these advertisers.
     * @param {boolean=} params.archived Select only archived campaigns. Don't set this field to select both archived and non-archived campaigns.
     * @param {boolean=} params.atLeastOneOptimizationActivity Select only campaigns that have at least one optimization activity.
     * @param {string=} params.excludedIds Exclude campaigns with these IDs.
     * @param {string=} params.ids Select only campaigns with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.overriddenEventTagId Select only campaigns that have overridden this event tag ID.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for campaigns by name or ID. Wildcards (*) are allowed. For example, "campaign*2015" will return campaigns with names like "campaign June 2015", "campaign April 2015", or simply "campaign 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "campaign" will match campaigns with name "my campaign", "campaign 2015", or simply "campaign".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results, default is ASCENDING.
     * @param {string=} params.subaccountId Select only campaigns that belong to this subaccount.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/campaigns',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.campaigns.patch
     *
     * @desc Updates an existing campaign. This method supports patch semantics.
     *
     * @alias dfareporting.campaigns.patch
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Campaign ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/campaigns',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.campaigns.update
     *
     * @desc Updates an existing campaign.
     *
     * @alias dfareporting.campaigns.update
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/campaigns',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.changeLogs = {

    /**
     * dfareporting.changeLogs.get
     *
     * @desc Gets one change log by ID.
     *
     * @alias dfareporting.changeLogs.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Change log ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/changeLogs/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.changeLogs.list
     *
     * @desc Retrieves a list of change logs.
     *
     * @alias dfareporting.changeLogs.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.action Select only change logs with the specified action.
     * @param {string=} params.ids Select only change logs with these IDs.
     * @param {string=} params.maxChangeTime Select only change logs whose change time is before the specified maxChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.minChangeTime Select only change logs whose change time is before the specified minChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset.
     * @param {string=} params.objectIds Select only change logs with these object IDs.
     * @param {string=} params.objectType Select only change logs with the specified object type.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Select only change logs whose object ID, user name, old or new values match the search string.
     * @param {string=} params.userProfileIds Select only change logs with these user profile IDs.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/changeLogs',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.cities = {

    /**
     * dfareporting.cities.list
     *
     * @desc Retrieves a list of cities, possibly filtered.
     *
     * @alias dfareporting.cities.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.countryDartIds Select only cities from these countries.
     * @param {string=} params.dartIds Select only cities with these DART IDs.
     * @param {string=} params.namePrefix Select only cities with names starting with this prefix.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.regionDartIds Select only cities from these regions.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/cities',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.connectionTypes = {

    /**
     * dfareporting.connectionTypes.list
     *
     * @desc Retrieves a list of connection types.
     *
     * @alias dfareporting.connectionTypes.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/connectionTypes',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.contentCategories = {

    /**
     * dfareporting.contentCategories.delete
     *
     * @desc Deletes an existing content category.
     *
     * @alias dfareporting.contentCategories.delete
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Content category ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/contentCategories/{id}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.contentCategories.get
     *
     * @desc Gets one content category by ID.
     *
     * @alias dfareporting.contentCategories.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Content category ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/contentCategories/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.contentCategories.insert
     *
     * @desc Inserts a new content category.
     *
     * @alias dfareporting.contentCategories.insert
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/contentCategories',
          method: 'POST'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.contentCategories.list
     *
     * @desc Retrieves a list of content categories, possibly filtered.
     *
     * @alias dfareporting.contentCategories.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.ids Select only content categories with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "contentcategory*2015" will return objects with names like "contentcategory June 2015", "contentcategory April 2015", or simply "contentcategory 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "contentcategory" will match objects with name "my contentcategory", "contentcategory 2015", or simply "contentcategory".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results, default is ASCENDING.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/contentCategories',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.contentCategories.patch
     *
     * @desc Updates an existing content category. This method supports patch semantics.
     *
     * @alias dfareporting.contentCategories.patch
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Content category ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/contentCategories',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.contentCategories.update
     *
     * @desc Updates an existing content category.
     *
     * @alias dfareporting.contentCategories.update
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/contentCategories',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.countries = {

    /**
     * dfareporting.countries.get
     *
     * @desc Gets one country by ID.
     *
     * @alias dfareporting.countries.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.dartId Country DART ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/countries/{dartId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'dartId'],
        pathParams: ['dartId', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.countries.list
     *
     * @desc Retrieves a list of countries.
     *
     * @alias dfareporting.countries.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/countries',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.creativeAssets = {

    /**
     * dfareporting.creativeAssets.insert
     *
     * @desc Inserts a new creative asset.
     *
     * @alias dfareporting.creativeAssets.insert
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.advertiserId Advertiser ID of this creative. This is a required field.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param  {object} params.resource Media resource metadata
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/creativeAssets/{advertiserId}/creativeAssets',
          method: 'POST'
        },
        params: params,
        mediaUrl: 'https://www.googleapis.com/upload/dfareporting/v2.0/userprofiles/{profileId}/creativeAssets/{advertiserId}/creativeAssets',
        requiredParams: ['profileId', 'advertiserId'],
        pathParams: ['advertiserId', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.creativeFieldValues = {

    /**
     * dfareporting.creativeFieldValues.delete
     *
     * @desc Deletes an existing creative field value.
     *
     * @alias dfareporting.creativeFieldValues.delete
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.creativeFieldId Creative field ID for this creative field value.
     * @param {string} params.id Creative Field Value ID
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues/{id}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['profileId', 'creativeFieldId', 'id'],
        pathParams: ['creativeFieldId', 'id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.creativeFieldValues.get
     *
     * @desc Gets one creative field value by ID.
     *
     * @alias dfareporting.creativeFieldValues.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.creativeFieldId Creative field ID for this creative field value.
     * @param {string} params.id Creative Field Value ID
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'creativeFieldId', 'id'],
        pathParams: ['creativeFieldId', 'id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.creativeFieldValues.insert
     *
     * @desc Inserts a new creative field value.
     *
     * @alias dfareporting.creativeFieldValues.insert
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.creativeFieldId Creative field ID for this creative field value.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues',
          method: 'POST'
        },
        params: params,
        requiredParams: ['profileId', 'creativeFieldId'],
        pathParams: ['creativeFieldId', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.creativeFieldValues.list
     *
     * @desc Retrieves a list of creative field values, possibly filtered.
     *
     * @alias dfareporting.creativeFieldValues.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.creativeFieldId Creative field ID for this creative field value.
     * @param {string=} params.ids Select only creative field values with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for creative field values by their values. Wildcards (e.g. *) are not allowed.
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results, default is ASCENDING.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'creativeFieldId'],
        pathParams: ['creativeFieldId', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.creativeFieldValues.patch
     *
     * @desc Updates an existing creative field value. This method supports patch semantics.
     *
     * @alias dfareporting.creativeFieldValues.patch
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.creativeFieldId Creative field ID for this creative field value.
     * @param {string} params.id Creative Field Value ID
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['profileId', 'creativeFieldId', 'id'],
        pathParams: ['creativeFieldId', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.creativeFieldValues.update
     *
     * @desc Updates an existing creative field value.
     *
     * @alias dfareporting.creativeFieldValues.update
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.creativeFieldId Creative field ID for this creative field value.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['profileId', 'creativeFieldId'],
        pathParams: ['creativeFieldId', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.creativeFields = {

    /**
     * dfareporting.creativeFields.delete
     *
     * @desc Deletes an existing creative field.
     *
     * @alias dfareporting.creativeFields.delete
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Creative Field ID
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/creativeFields/{id}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.creativeFields.get
     *
     * @desc Gets one creative field by ID.
     *
     * @alias dfareporting.creativeFields.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Creative Field ID
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/creativeFields/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.creativeFields.insert
     *
     * @desc Inserts a new creative field.
     *
     * @alias dfareporting.creativeFields.insert
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/creativeFields',
          method: 'POST'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.creativeFields.list
     *
     * @desc Retrieves a list of creative fields, possibly filtered.
     *
     * @alias dfareporting.creativeFields.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.advertiserIds Select only creative fields that belong to these advertisers.
     * @param {string=} params.ids Select only creative fields with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for creative fields by name or ID. Wildcards (*) are allowed. For example, "creativefield*2015" will return creative fields with names like "creativefield June 2015", "creativefield April 2015", or simply "creativefield 2015". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of "creativefield" will match creative fields with the name "my creativefield", "creativefield 2015", or simply "creativefield".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results, default is ASCENDING.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/creativeFields',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.creativeFields.patch
     *
     * @desc Updates an existing creative field. This method supports patch semantics.
     *
     * @alias dfareporting.creativeFields.patch
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Creative Field ID
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/creativeFields',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.creativeFields.update
     *
     * @desc Updates an existing creative field.
     *
     * @alias dfareporting.creativeFields.update
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/creativeFields',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.creativeGroups = {

    /**
     * dfareporting.creativeGroups.get
     *
     * @desc Gets one creative group by ID.
     *
     * @alias dfareporting.creativeGroups.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Creative group ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/creativeGroups/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.creativeGroups.insert
     *
     * @desc Inserts a new creative group.
     *
     * @alias dfareporting.creativeGroups.insert
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/creativeGroups',
          method: 'POST'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.creativeGroups.list
     *
     * @desc Retrieves a list of creative groups, possibly filtered.
     *
     * @alias dfareporting.creativeGroups.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.advertiserIds Select only creative groups that belong to these advertisers.
     * @param {integer=} params.groupNumber Select only creative groups that belong to this subgroup.
     * @param {string=} params.ids Select only creative groups with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for creative groups by name or ID. Wildcards (*) are allowed. For example, "creativegroup*2015" will return creative groups with names like "creativegroup June 2015", "creativegroup April 2015", or simply "creativegroup 2015". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of "creativegroup" will match creative groups with the name "my creativegroup", "creativegroup 2015", or simply "creativegroup".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results, default is ASCENDING.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/creativeGroups',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.creativeGroups.patch
     *
     * @desc Updates an existing creative group. This method supports patch semantics.
     *
     * @alias dfareporting.creativeGroups.patch
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Creative group ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/creativeGroups',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.creativeGroups.update
     *
     * @desc Updates an existing creative group.
     *
     * @alias dfareporting.creativeGroups.update
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/creativeGroups',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.creatives = {

    /**
     * dfareporting.creatives.get
     *
     * @desc Gets one creative by ID.
     *
     * @alias dfareporting.creatives.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Creative ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/creatives/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.creatives.insert
     *
     * @desc Inserts a new creative.
     *
     * @alias dfareporting.creatives.insert
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/creatives',
          method: 'POST'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.creatives.list
     *
     * @desc Retrieves a list of creatives, possibly filtered.
     *
     * @alias dfareporting.creatives.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.active Select only active creatives. Leave blank to select active and inactive creatives.
     * @param {string=} params.advertiserId Select only creatives with this advertiser ID.
     * @param {boolean=} params.archived Select only archived creatives. Leave blank to select archived and unarchived creatives.
     * @param {string=} params.campaignId Select only creatives with this campaign ID.
     * @param {string=} params.companionCreativeIds Select only in-stream video creatives with these companion IDs.
     * @param {string=} params.creativeFieldIds Select only creatives with these creative field IDs.
     * @param {string=} params.ids Select only creatives with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.renderingIds Select only creatives with these rendering IDs.
     * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "creative*2015" will return objects with names like "creative June 2015", "creative April 2015", or simply "creative 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "creative" will match objects with name "my creative", "creative 2015", or simply "creative".
     * @param {string=} params.sizeIds Select only creatives with these size IDs.
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results, default is ASCENDING.
     * @param {string=} params.studioCreativeId Select only creatives corresponding to this Studio creative ID.
     * @param {string=} params.types Select only creatives with these creative types.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/creatives',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.creatives.patch
     *
     * @desc Updates an existing creative. This method supports patch semantics.
     *
     * @alias dfareporting.creatives.patch
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Creative ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/creatives',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.creatives.update
     *
     * @desc Updates an existing creative.
     *
     * @alias dfareporting.creatives.update
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/creatives',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.dimensionValues = {

    /**
     * dfareporting.dimensionValues.query
     *
     * @desc Retrieves list of report dimension values for a list of filters.
     *
     * @alias dfareporting.dimensionValues.query
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken The value of the nextToken from the previous result page.
     * @param {string} params.profileId The DFA user profile ID.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    query: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/dimensionvalues/query',
          method: 'POST'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.directorySiteContacts = {

    /**
     * dfareporting.directorySiteContacts.get
     *
     * @desc Gets one directory site contact by ID.
     *
     * @alias dfareporting.directorySiteContacts.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Directory site contact ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/directorySiteContacts/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.directorySiteContacts.list
     *
     * @desc Retrieves a list of directory site contacts, possibly filtered.
     *
     * @alias dfareporting.directorySiteContacts.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.directorySiteIds Select only directory site contacts with these directory site IDs. This is a required field.
     * @param {string=} params.ids Select only directory site contacts with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for objects by name, ID or email. Wildcards (*) are allowed. For example, "directory site contact*2015" will return objects with names like "directory site contact June 2015", "directory site contact April 2015", or simply "directory site contact 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "directory site contact" will match objects with name "my directory site contact", "directory site contact 2015", or simply "directory site contact".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results, default is ASCENDING.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/directorySiteContacts',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.directorySites = {

    /**
     * dfareporting.directorySites.get
     *
     * @desc Gets one directory site by ID.
     *
     * @alias dfareporting.directorySites.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Directory site ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/directorySites/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.directorySites.list
     *
     * @desc Retrieves a list of directory sites, possibly filtered.
     *
     * @alias dfareporting.directorySites.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.acceptsInStreamVideoPlacements This search filter is no longer supported and will have no effect on the results returned.
     * @param {boolean=} params.acceptsInterstitialPlacements This search filter is no longer supported and will have no effect on the results returned.
     * @param {boolean=} params.acceptsPublisherPaidPlacements Select only directory sites that accept publisher paid placements. This field can be left blank.
     * @param {boolean=} params.active Select only active directory sites. Leave blank to retrieve both active and inactive directory sites.
     * @param {string=} params.countryId Select only directory sites with this country ID.
     * @param {string=} params.dfp_network_code Select only directory sites with this DFP network code.
     * @param {string=} params.ids Select only directory sites with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string=} params.parentId Select only directory sites with this parent ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for objects by name, ID or URL. Wildcards (*) are allowed. For example, "directory site*2015" will return objects with names like "directory site June 2015", "directory site April 2015", or simply "directory site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "directory site" will match objects with name "my directory site", "directory site 2015" or simply, "directory site".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results, default is ASCENDING.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/directorySites',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.eventTags = {

    /**
     * dfareporting.eventTags.delete
     *
     * @desc Deletes an existing event tag.
     *
     * @alias dfareporting.eventTags.delete
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Event tag ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/eventTags/{id}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.eventTags.get
     *
     * @desc Gets one event tag by ID.
     *
     * @alias dfareporting.eventTags.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Event tag ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/eventTags/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.eventTags.insert
     *
     * @desc Inserts a new event tag.
     *
     * @alias dfareporting.eventTags.insert
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/eventTags',
          method: 'POST'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.eventTags.list
     *
     * @desc Retrieves a list of event tags, possibly filtered.
     *
     * @alias dfareporting.eventTags.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.adId Select only event tags that belong to this ad.
     * @param {string=} params.advertiserId Select only event tags that belong to this advertiser.
     * @param {string=} params.campaignId Select only event tags that belong to this campaign.
     * @param {boolean=} params.definitionsOnly Examine only the specified campaign or advertiser's event tags for matching selector criteria. When set to false, the parent advertiser and parent campaign of the specified ad or campaign is examined as well. In addition, when set to false, the status field is examined as well, along with the enabledByDefault field. This parameter can not be set to true when adId is specified as ads do not define their own even tags.
     * @param {boolean=} params.enabled Select only enabled event tags. What is considered enabled or disabled depends on the definitionsOnly parameter. When definitionsOnly is set to true, only the specified advertiser or campaign's event tags' enabledByDefault field is examined. When definitionsOnly is set to false, the specified ad or specified campaign's parent advertiser's or parent campaign's event tags' enabledByDefault and status fields are examined as well.
     * @param {string=} params.eventTagTypes Select only event tags with the specified event tag types. Event tag types can be used to specify whether to use a third-party pixel, a third-party JavaScript URL, or a third-party click-through URL for either impression or click tracking.
     * @param {string=} params.ids Select only event tags with these IDs.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "eventtag*2015" will return objects with names like "eventtag June 2015", "eventtag April 2015", or simply "eventtag 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "eventtag" will match objects with name "my eventtag", "eventtag 2015", or simply "eventtag".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results, default is ASCENDING.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/eventTags',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.eventTags.patch
     *
     * @desc Updates an existing event tag. This method supports patch semantics.
     *
     * @alias dfareporting.eventTags.patch
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Event tag ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/eventTags',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.eventTags.update
     *
     * @desc Updates an existing event tag.
     *
     * @alias dfareporting.eventTags.update
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/eventTags',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.files = {

    /**
     * dfareporting.files.get
     *
     * @desc Retrieves a report file by its report ID and file ID.
     *
     * @alias dfareporting.files.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.fileId The ID of the report file.
     * @param {string} params.reportId The ID of the report.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/reports/{reportId}/files/{fileId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['reportId', 'fileId'],
        pathParams: ['fileId', 'reportId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.files.list
     *
     * @desc Lists files for a user profile.
     *
     * @alias dfareporting.files.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken The value of the nextToken from the previous result page.
     * @param {string} params.profileId The DFA profile ID.
     * @param {string=} params.scope The scope that defines which results are returned, default is 'MINE'.
     * @param {string=} params.sortField The field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results, default is 'DESCENDING'.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/files',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.floodlightActivities = {

    /**
     * dfareporting.floodlightActivities.delete
     *
     * @desc Deletes an existing floodlight activity.
     *
     * @alias dfareporting.floodlightActivities.delete
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Floodlight activity ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/floodlightActivities/{id}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.floodlightActivities.generatetag
     *
     * @desc Generates a tag for a floodlight activity.
     *
     * @alias dfareporting.floodlightActivities.generatetag
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.floodlightActivityId Floodlight activity ID for which we want to generate a tag.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    generatetag: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/floodlightActivities/generatetag',
          method: 'POST'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.floodlightActivities.get
     *
     * @desc Gets one floodlight activity by ID.
     *
     * @alias dfareporting.floodlightActivities.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Floodlight activity ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/floodlightActivities/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.floodlightActivities.insert
     *
     * @desc Inserts a new floodlight activity.
     *
     * @alias dfareporting.floodlightActivities.insert
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/floodlightActivities',
          method: 'POST'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.floodlightActivities.list
     *
     * @desc Retrieves a list of floodlight activities, possibly filtered.
     *
     * @alias dfareporting.floodlightActivities.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.advertiserId Select only floodlight activities for the specified advertiser ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
     * @param {string=} params.floodlightActivityGroupIds Select only floodlight activities with the specified floodlight activity group IDs.
     * @param {string=} params.floodlightActivityGroupName Select only floodlight activities with the specified floodlight activity group name.
     * @param {string=} params.floodlightActivityGroupTagString Select only floodlight activities with the specified floodlight activity group tag string.
     * @param {string=} params.floodlightActivityGroupType Select only floodlight activities with the specified floodlight activity group type.
     * @param {string=} params.floodlightConfigurationId Select only floodlight activities for the specified floodlight configuration ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
     * @param {string=} params.ids Select only floodlight activities with the specified IDs. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "floodlightactivity*2015" will return objects with names like "floodlightactivity June 2015", "floodlightactivity April 2015", or simply "floodlightactivity 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivity" will match objects with name "my floodlightactivity activity", "floodlightactivity 2015", or simply "floodlightactivity".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results, default is ASCENDING.
     * @param {string=} params.tagString Select only floodlight activities with the specified tag string.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/floodlightActivities',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.floodlightActivities.patch
     *
     * @desc Updates an existing floodlight activity. This method supports patch semantics.
     *
     * @alias dfareporting.floodlightActivities.patch
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Floodlight activity ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/floodlightActivities',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.floodlightActivities.update
     *
     * @desc Updates an existing floodlight activity.
     *
     * @alias dfareporting.floodlightActivities.update
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/floodlightActivities',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.floodlightActivityGroups = {

    /**
     * dfareporting.floodlightActivityGroups.delete
     *
     * @desc Deletes an existing floodlight activity group.
     *
     * @alias dfareporting.floodlightActivityGroups.delete
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Floodlight activity Group ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/floodlightActivityGroups/{id}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.floodlightActivityGroups.get
     *
     * @desc Gets one floodlight activity group by ID.
     *
     * @alias dfareporting.floodlightActivityGroups.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Floodlight activity Group ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/floodlightActivityGroups/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.floodlightActivityGroups.insert
     *
     * @desc Inserts a new floodlight activity group.
     *
     * @alias dfareporting.floodlightActivityGroups.insert
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/floodlightActivityGroups',
          method: 'POST'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.floodlightActivityGroups.list
     *
     * @desc Retrieves a list of floodlight activity groups, possibly filtered.
     *
     * @alias dfareporting.floodlightActivityGroups.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.advertiserId Select only floodlight activity groups with the specified advertiser ID. Must specify either advertiserId or floodlightConfigurationId for a non-empty result.
     * @param {string=} params.floodlightConfigurationId Select only floodlight activity groups with the specified floodlight configuration ID. Must specify either advertiserId, or floodlightConfigurationId for a non-empty result.
     * @param {string=} params.ids Select only floodlight activity groups with the specified IDs. Must specify either advertiserId or floodlightConfigurationId for a non-empty result.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "floodlightactivitygroup*2015" will return objects with names like "floodlightactivitygroup June 2015", "floodlightactivitygroup April 2015", or simply "floodlightactivitygroup 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivitygroup" will match objects with name "my floodlightactivitygroup activity", "floodlightactivitygroup 2015", or simply "floodlightactivitygroup".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results, default is ASCENDING.
     * @param {string=} params.type Select only floodlight activity groups with the specified floodlight activity group type.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/floodlightActivityGroups',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.floodlightActivityGroups.patch
     *
     * @desc Updates an existing floodlight activity group. This method supports patch semantics.
     *
     * @alias dfareporting.floodlightActivityGroups.patch
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Floodlight activity Group ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/floodlightActivityGroups',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.floodlightActivityGroups.update
     *
     * @desc Updates an existing floodlight activity group.
     *
     * @alias dfareporting.floodlightActivityGroups.update
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/floodlightActivityGroups',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.floodlightConfigurations = {

    /**
     * dfareporting.floodlightConfigurations.get
     *
     * @desc Gets one floodlight configuration by ID.
     *
     * @alias dfareporting.floodlightConfigurations.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Floodlight configuration ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/floodlightConfigurations/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.floodlightConfigurations.list
     *
     * @desc Retrieves a list of floodlight configurations, possibly filtered.
     *
     * @alias dfareporting.floodlightConfigurations.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.ids Set of IDs of floodlight configurations to retrieve. Required field; otherwise an empty list will be returned.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/floodlightConfigurations',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.floodlightConfigurations.patch
     *
     * @desc Updates an existing floodlight configuration. This method supports patch semantics.
     *
     * @alias dfareporting.floodlightConfigurations.patch
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Floodlight configuration ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/floodlightConfigurations',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.floodlightConfigurations.update
     *
     * @desc Updates an existing floodlight configuration.
     *
     * @alias dfareporting.floodlightConfigurations.update
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/floodlightConfigurations',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.landingPages = {

    /**
     * dfareporting.landingPages.delete
     *
     * @desc Deletes an existing campaign landing page.
     *
     * @alias dfareporting.landingPages.delete
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.campaignId Landing page campaign ID.
     * @param {string} params.id Landing page ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/campaigns/{campaignId}/landingPages/{id}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['profileId', 'campaignId', 'id'],
        pathParams: ['campaignId', 'id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.landingPages.get
     *
     * @desc Gets one campaign landing page by ID.
     *
     * @alias dfareporting.landingPages.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.campaignId Landing page campaign ID.
     * @param {string} params.id Landing page ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/campaigns/{campaignId}/landingPages/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'campaignId', 'id'],
        pathParams: ['campaignId', 'id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.landingPages.insert
     *
     * @desc Inserts a new landing page for the specified campaign.
     *
     * @alias dfareporting.landingPages.insert
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.campaignId Landing page campaign ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/campaigns/{campaignId}/landingPages',
          method: 'POST'
        },
        params: params,
        requiredParams: ['profileId', 'campaignId'],
        pathParams: ['campaignId', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.landingPages.list
     *
     * @desc Retrieves the list of landing pages for the specified campaign.
     *
     * @alias dfareporting.landingPages.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.campaignId Landing page campaign ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/campaigns/{campaignId}/landingPages',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'campaignId'],
        pathParams: ['campaignId', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.landingPages.patch
     *
     * @desc Updates an existing campaign landing page. This method supports patch semantics.
     *
     * @alias dfareporting.landingPages.patch
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.campaignId Landing page campaign ID.
     * @param {string} params.id Landing page ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/campaigns/{campaignId}/landingPages',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['profileId', 'campaignId', 'id'],
        pathParams: ['campaignId', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.landingPages.update
     *
     * @desc Updates an existing campaign landing page.
     *
     * @alias dfareporting.landingPages.update
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.campaignId Landing page campaign ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/campaigns/{campaignId}/landingPages',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['profileId', 'campaignId'],
        pathParams: ['campaignId', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.metros = {

    /**
     * dfareporting.metros.list
     *
     * @desc Retrieves a list of metros.
     *
     * @alias dfareporting.metros.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/metros',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.mobileCarriers = {

    /**
     * dfareporting.mobileCarriers.list
     *
     * @desc Retrieves a list of mobile carriers.
     *
     * @alias dfareporting.mobileCarriers.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/mobileCarriers',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.operatingSystemVersions = {

    /**
     * dfareporting.operatingSystemVersions.list
     *
     * @desc Retrieves a list of operating system versions.
     *
     * @alias dfareporting.operatingSystemVersions.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/operatingSystemVersions',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.operatingSystems = {

    /**
     * dfareporting.operatingSystems.list
     *
     * @desc Retrieves a list of operating systems.
     *
     * @alias dfareporting.operatingSystems.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/operatingSystems',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.placementGroups = {

    /**
     * dfareporting.placementGroups.get
     *
     * @desc Gets one placement group by ID.
     *
     * @alias dfareporting.placementGroups.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Placement group ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/placementGroups/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.placementGroups.insert
     *
     * @desc Inserts a new placement group.
     *
     * @alias dfareporting.placementGroups.insert
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/placementGroups',
          method: 'POST'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.placementGroups.list
     *
     * @desc Retrieves a list of placement groups, possibly filtered.
     *
     * @alias dfareporting.placementGroups.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.advertiserIds Select only placement groups that belong to these advertisers.
     * @param {boolean=} params.archived Select only archived placements. Don't set this field to select both archived and non-archived placements.
     * @param {string=} params.campaignIds Select only placement groups that belong to these campaigns.
     * @param {string=} params.contentCategoryIds Select only placement groups that are associated with these content categories.
     * @param {string=} params.directorySiteIds Select only placement groups that are associated with these directory sites.
     * @param {string=} params.ids Select only placement groups with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string=} params.placementGroupType Select only placement groups belonging with this group type. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting.
     * @param {string=} params.placementStrategyIds Select only placement groups that are associated with these placement strategies.
     * @param {string=} params.pricingTypes Select only placement groups with these pricing types.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for placement groups by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placement groups with names like "placement group June 2015", "placement group May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementgroup" will match placement groups with name "my placementgroup", "placementgroup 2015", or simply "placementgroup".
     * @param {string=} params.siteIds Select only placement groups that are associated with these sites.
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results, default is ASCENDING.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/placementGroups',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.placementGroups.patch
     *
     * @desc Updates an existing placement group. This method supports patch semantics.
     *
     * @alias dfareporting.placementGroups.patch
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Placement group ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/placementGroups',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.placementGroups.update
     *
     * @desc Updates an existing placement group.
     *
     * @alias dfareporting.placementGroups.update
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/placementGroups',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.placementStrategies = {

    /**
     * dfareporting.placementStrategies.delete
     *
     * @desc Deletes an existing placement strategy.
     *
     * @alias dfareporting.placementStrategies.delete
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Placement strategy ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/placementStrategies/{id}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.placementStrategies.get
     *
     * @desc Gets one placement strategy by ID.
     *
     * @alias dfareporting.placementStrategies.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Placement strategy ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/placementStrategies/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.placementStrategies.insert
     *
     * @desc Inserts a new placement strategy.
     *
     * @alias dfareporting.placementStrategies.insert
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/placementStrategies',
          method: 'POST'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.placementStrategies.list
     *
     * @desc Retrieves a list of placement strategies, possibly filtered.
     *
     * @alias dfareporting.placementStrategies.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.ids Select only placement strategies with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "placementstrategy*2015" will return objects with names like "placementstrategy June 2015", "placementstrategy April 2015", or simply "placementstrategy 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementstrategy" will match objects with name "my placementstrategy", "placementstrategy 2015", or simply "placementstrategy".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results, default is ASCENDING.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/placementStrategies',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.placementStrategies.patch
     *
     * @desc Updates an existing placement strategy. This method supports patch semantics.
     *
     * @alias dfareporting.placementStrategies.patch
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Placement strategy ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/placementStrategies',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.placementStrategies.update
     *
     * @desc Updates an existing placement strategy.
     *
     * @alias dfareporting.placementStrategies.update
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/placementStrategies',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.placements = {

    /**
     * dfareporting.placements.generatetags
     *
     * @desc Generates tags for a placement.
     *
     * @alias dfareporting.placements.generatetags
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.campaignId Generate placements belonging to this campaign. This is a required field.
     * @param {string=} params.placementIds Generate tags for these placements.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.tagFormats Tag formats to generate for these placements.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    generatetags: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/placements/generatetags',
          method: 'POST'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.placements.get
     *
     * @desc Gets one placement by ID.
     *
     * @alias dfareporting.placements.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Placement ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/placements/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.placements.insert
     *
     * @desc Inserts a new placement.
     *
     * @alias dfareporting.placements.insert
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/placements',
          method: 'POST'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.placements.list
     *
     * @desc Retrieves a list of placements, possibly filtered.
     *
     * @alias dfareporting.placements.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.advertiserIds Select only placements that belong to these advertisers.
     * @param {boolean=} params.archived Select only archived placements. Don't set this field to select both archived and non-archived placements.
     * @param {string=} params.campaignIds Select only placements that belong to these campaigns.
     * @param {string=} params.compatibilities Select only placements that are associated with these compatibilities. WEB and WEB_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard.
     * @param {string=} params.contentCategoryIds Select only placements that are associated with these content categories.
     * @param {string=} params.directorySiteIds Select only placements that are associated with these directory sites.
     * @param {string=} params.groupIds Select only placements that belong to these placement groups.
     * @param {string=} params.ids Select only placements with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string=} params.paymentSource Select only placements with this payment source.
     * @param {string=} params.placementStrategyIds Select only placements that are associated with these placement strategies.
     * @param {string=} params.pricingTypes Select only placements with these pricing types.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for placements by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placements with names like "placement June 2015", "placement May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placement" will match placements with name "my placement", "placement 2015", or simply "placement".
     * @param {string=} params.siteIds Select only placements that are associated with these sites.
     * @param {string=} params.sizeIds Select only placements that are associated with these sizes.
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results, default is ASCENDING.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/placements',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.placements.patch
     *
     * @desc Updates an existing placement. This method supports patch semantics.
     *
     * @alias dfareporting.placements.patch
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Placement ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/placements',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.placements.update
     *
     * @desc Updates an existing placement.
     *
     * @alias dfareporting.placements.update
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/placements',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.platformTypes = {

    /**
     * dfareporting.platformTypes.list
     *
     * @desc Retrieves a list of platform types.
     *
     * @alias dfareporting.platformTypes.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/platformTypes',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.postalCodes = {

    /**
     * dfareporting.postalCodes.list
     *
     * @desc Retrieves a list of postal codes.
     *
     * @alias dfareporting.postalCodes.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/postalCodes',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.regions = {

    /**
     * dfareporting.regions.list
     *
     * @desc Retrieves a list of regions.
     *
     * @alias dfareporting.regions.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/regions',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.reports = {

    /**
     * dfareporting.reports.delete
     *
     * @desc Deletes a report by its ID.
     *
     * @alias dfareporting.reports.delete
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId The DFA user profile ID.
     * @param {string} params.reportId The ID of the report.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/reports/{reportId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['profileId', 'reportId'],
        pathParams: ['profileId', 'reportId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.reports.get
     *
     * @desc Retrieves a report by its ID.
     *
     * @alias dfareporting.reports.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId The DFA user profile ID.
     * @param {string} params.reportId The ID of the report.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/reports/{reportId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'reportId'],
        pathParams: ['profileId', 'reportId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.reports.insert
     *
     * @desc Creates a report.
     *
     * @alias dfareporting.reports.insert
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId The DFA user profile ID.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/reports',
          method: 'POST'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.reports.list
     *
     * @desc Retrieves list of reports.
     *
     * @alias dfareporting.reports.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken The value of the nextToken from the previous result page.
     * @param {string} params.profileId The DFA user profile ID.
     * @param {string=} params.scope The scope that defines which results are returned, default is 'MINE'.
     * @param {string=} params.sortField The field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results, default is 'DESCENDING'.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/reports',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.reports.patch
     *
     * @desc Updates a report. This method supports patch semantics.
     *
     * @alias dfareporting.reports.patch
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId The DFA user profile ID.
     * @param {string} params.reportId The ID of the report.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/reports/{reportId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['profileId', 'reportId'],
        pathParams: ['profileId', 'reportId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.reports.run
     *
     * @desc Runs a report.
     *
     * @alias dfareporting.reports.run
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId The DFA profile ID.
     * @param {string} params.reportId The ID of the report.
     * @param {boolean=} params.synchronous If set and true, tries to run the report synchronously.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    run: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/reports/{reportId}/run',
          method: 'POST'
        },
        params: params,
        requiredParams: ['profileId', 'reportId'],
        pathParams: ['profileId', 'reportId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.reports.update
     *
     * @desc Updates a report.
     *
     * @alias dfareporting.reports.update
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId The DFA user profile ID.
     * @param {string} params.reportId The ID of the report.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/reports/{reportId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['profileId', 'reportId'],
        pathParams: ['profileId', 'reportId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    compatibleFields: {

      /**
       * dfareporting.reports.compatibleFields.query
       *
       * @desc Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.
       *
       * @alias dfareporting.reports.compatibleFields.query
       * @memberOf! dfareporting(v2.0)
       *
       * @param {object} params Parameters for request
       * @param {string} params.profileId The DFA user profile ID.
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      query: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/reports/compatiblefields/query',
            method: 'POST'
          },
          params: params,
          requiredParams: ['profileId'],
          pathParams: ['profileId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    files: {

      /**
       * dfareporting.reports.files.get
       *
       * @desc Retrieves a report file.
       *
       * @alias dfareporting.reports.files.get
       * @memberOf! dfareporting(v2.0)
       *
       * @param {object} params Parameters for request
       * @param {string} params.fileId The ID of the report file.
       * @param {string} params.profileId The DFA profile ID.
       * @param {string} params.reportId The ID of the report.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/reports/{reportId}/files/{fileId}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['profileId', 'reportId', 'fileId'],
          pathParams: ['fileId', 'profileId', 'reportId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * dfareporting.reports.files.list
       *
       * @desc Lists files for a report.
       *
       * @alias dfareporting.reports.files.list
       * @memberOf! dfareporting(v2.0)
       *
       * @param {object} params Parameters for request
       * @param {integer=} params.maxResults Maximum number of results to return.
       * @param {string=} params.pageToken The value of the nextToken from the previous result page.
       * @param {string} params.profileId The DFA profile ID.
       * @param {string} params.reportId The ID of the parent report.
       * @param {string=} params.sortField The field by which to sort the list.
       * @param {string=} params.sortOrder Order of sorted results, default is 'DESCENDING'.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/reports/{reportId}/files',
            method: 'GET'
          },
          params: params,
          requiredParams: ['profileId', 'reportId'],
          pathParams: ['profileId', 'reportId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  self.sites = {

    /**
     * dfareporting.sites.get
     *
     * @desc Gets one site by ID.
     *
     * @alias dfareporting.sites.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Site ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/sites/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.sites.insert
     *
     * @desc Inserts a new site.
     *
     * @alias dfareporting.sites.insert
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/sites',
          method: 'POST'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.sites.list
     *
     * @desc Retrieves a list of sites, possibly filtered.
     *
     * @alias dfareporting.sites.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.acceptsInStreamVideoPlacements This search filter is no longer supported and will have no effect on the results returned.
     * @param {boolean=} params.acceptsInterstitialPlacements This search filter is no longer supported and will have no effect on the results returned.
     * @param {boolean=} params.acceptsPublisherPaidPlacements Select only sites that accept publisher paid placements.
     * @param {boolean=} params.adWordsSite Select only AdWords sites.
     * @param {boolean=} params.approved Select only approved sites.
     * @param {string=} params.campaignIds Select only sites with these campaign IDs.
     * @param {string=} params.directorySiteIds Select only sites with these directory site IDs.
     * @param {string=} params.ids Select only sites with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for objects by name, ID or keyName. Wildcards (*) are allowed. For example, "site*2015" will return objects with names like "site June 2015", "site April 2015", or simply "site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "site" will match objects with name "my site", "site 2015", or simply "site".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results, default is ASCENDING.
     * @param {string=} params.subaccountId Select only sites with this subaccount ID.
     * @param {boolean=} params.unmappedSite Select only sites that have not been mapped to a directory site.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/sites',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.sites.patch
     *
     * @desc Updates an existing site. This method supports patch semantics.
     *
     * @alias dfareporting.sites.patch
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Site ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/sites',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.sites.update
     *
     * @desc Updates an existing site.
     *
     * @alias dfareporting.sites.update
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/sites',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.sizes = {

    /**
     * dfareporting.sizes.get
     *
     * @desc Gets one size by ID.
     *
     * @alias dfareporting.sizes.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Size ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/sizes/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.sizes.insert
     *
     * @desc Inserts a new size.
     *
     * @alias dfareporting.sizes.insert
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/sizes',
          method: 'POST'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.sizes.list
     *
     * @desc Retrieves a list of sizes, possibly filtered.
     *
     * @alias dfareporting.sizes.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.height Select only sizes with this height.
     * @param {boolean=} params.iabStandard Select only IAB standard sizes.
     * @param {string=} params.ids Select only sizes with these IDs.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {integer=} params.width Select only sizes with this width.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/sizes',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.subaccounts = {

    /**
     * dfareporting.subaccounts.get
     *
     * @desc Gets one subaccount by ID.
     *
     * @alias dfareporting.subaccounts.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Subaccount ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/subaccounts/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.subaccounts.insert
     *
     * @desc Inserts a new subaccount.
     *
     * @alias dfareporting.subaccounts.insert
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/subaccounts',
          method: 'POST'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.subaccounts.list
     *
     * @desc Gets a list of subaccounts, possibly filtered.
     *
     * @alias dfareporting.subaccounts.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.ids Select only subaccounts with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "subaccount*2015" will return objects with names like "subaccount June 2015", "subaccount April 2015", or simply "subaccount 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "subaccount" will match objects with name "my subaccount", "subaccount 2015", or simply "subaccount".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results, default is ASCENDING.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/subaccounts',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.subaccounts.patch
     *
     * @desc Updates an existing subaccount. This method supports patch semantics.
     *
     * @alias dfareporting.subaccounts.patch
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Subaccount ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/subaccounts',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.subaccounts.update
     *
     * @desc Updates an existing subaccount.
     *
     * @alias dfareporting.subaccounts.update
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/subaccounts',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.userProfiles = {

    /**
     * dfareporting.userProfiles.get
     *
     * @desc Gets one user profile by ID.
     *
     * @alias dfareporting.userProfiles.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId The user profile ID.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.userProfiles.list
     *
     * @desc Retrieves list of user profiles for a user.
     *
     * @alias dfareporting.userProfiles.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object=} params Parameters for request
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.userRolePermissionGroups = {

    /**
     * dfareporting.userRolePermissionGroups.get
     *
     * @desc Gets one user role permission group by ID.
     *
     * @alias dfareporting.userRolePermissionGroups.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id User role permission group ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/userRolePermissionGroups/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.userRolePermissionGroups.list
     *
     * @desc Gets a list of all supported user role permission groups.
     *
     * @alias dfareporting.userRolePermissionGroups.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/userRolePermissionGroups',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.userRolePermissions = {

    /**
     * dfareporting.userRolePermissions.get
     *
     * @desc Gets one user role permission by ID.
     *
     * @alias dfareporting.userRolePermissions.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id User role permission ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/userRolePermissions/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.userRolePermissions.list
     *
     * @desc Gets a list of user role permissions, possibly filtered.
     *
     * @alias dfareporting.userRolePermissions.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.ids Select only user role permissions with these IDs.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/userRolePermissions',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.userRoles = {

    /**
     * dfareporting.userRoles.delete
     *
     * @desc Deletes an existing user role.
     *
     * @alias dfareporting.userRoles.delete
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id User role ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/userRoles/{id}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.userRoles.get
     *
     * @desc Gets one user role by ID.
     *
     * @alias dfareporting.userRoles.get
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id User role ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/userRoles/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.userRoles.insert
     *
     * @desc Inserts a new user role.
     *
     * @alias dfareporting.userRoles.insert
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/userRoles',
          method: 'POST'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.userRoles.list
     *
     * @desc Retrieves a list of user roles, possibly filtered.
     *
     * @alias dfareporting.userRoles.list
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.accountUserRoleOnly Select only account level user roles not associated with any specific subaccount.
     * @param {string=} params.ids Select only user roles with the specified IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "userrole*2015" will return objects with names like "userrole June 2015", "userrole April 2015", or simply "userrole 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "userrole" will match objects with name "my userrole", "userrole 2015", or simply "userrole".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results, default is ASCENDING.
     * @param {string=} params.subaccountId Select only user roles that belong to this subaccount.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/userRoles',
          method: 'GET'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.userRoles.patch
     *
     * @desc Updates an existing user role. This method supports patch semantics.
     *
     * @alias dfareporting.userRoles.patch
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id User role ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/userRoles',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dfareporting.userRoles.update
     *
     * @desc Updates an existing user role.
     *
     * @alias dfareporting.userRoles.update
     * @memberOf! dfareporting(v2.0)
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dfareporting/v2.0/userprofiles/{profileId}/userRoles',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

module.exports = Dfareporting;
