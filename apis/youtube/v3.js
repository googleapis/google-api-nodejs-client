/**
 * Copyright 2014 Google Inc. All Rights Reserved.
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
 * YouTube Data API
 *
 * @classdesc Programmatic access to YouTube features.
 * @namespace youtube
 * @version  v3
 * @variation v3
 * @this Youtube
 * @param {object=} options Options for Youtube
 */
function Youtube(options) {

  var self = this;
  this._options = options || {};

  this.activities = {

    /**
     * youtube.activities.insert
     *
     * @desc Posts a bulletin for a specific channel. (The user submitting the request must be authorized to act on the channel's behalf.)  Note: Even though an activity resource can contain information about actions like a user rating a video or marking a video as a favorite, you need to use other API methods to generate those activity resources. For example, you would use the API's videos.rate() method to rate a video and the playlistItems.insert() method to mark a video as a favorite.
     *
     * @alias youtube.activities.insert
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.part - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  The part names that you can include in the parameter value are snippet and contentDetails.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/activities',
          method: 'POST'
        },
        params: params,
        requiredParams: ['part'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtube.activities.list
     *
     * @desc Returns a list of channel activity events that match the request criteria. For example, you can retrieve events associated with a particular channel, events associated with the user's subscriptions and Google+ friends, or the YouTube home page feed, which is customized for each user.
     *
     * @alias youtube.activities.list
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.channelId - The channelId parameter specifies a unique YouTube channel ID. The API will then return a list of that channel's activities.
     * @param  {boolean=} params.home - Set this parameter's value to true to retrieve the activity feed that displays on the YouTube home page for the currently authenticated user.
     * @param  {integer=} params.maxResults - The maxResults parameter specifies the maximum number of items that should be returned in the result set.
     * @param  {boolean=} params.mine - Set this parameter's value to true to retrieve a feed of the authenticated user's activities.
     * @param  {string=} params.pageToken - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param  {string} params.part - The part parameter specifies a comma-separated list of one or more activity resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, and contentDetails.  If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a activity resource, the snippet property contains other properties that identify the type of activity, a display title for the activity, and so forth. If you set part=snippet, the API response will also contain all of those nested properties.
     * @param  {string=} params.publishedAfter - The publishedAfter parameter specifies the earliest date and time that an activity could have occurred for that activity to be included in the API response. If the parameter value specifies a day, but not a time, then any activities that occurred that day will be included in the result set. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     * @param  {string=} params.publishedBefore - The publishedBefore parameter specifies the date and time before which an activity must have occurred for that activity to be included in the API response. If the parameter value specifies a day, but not a time, then any activities that occurred that day will be excluded from the result set. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     * @param  {string=} params.regionCode - The regionCode parameter instructs the API to return results for the specified country. The parameter value is an ISO 3166-1 alpha-2 country code. YouTube uses this value when the authorized user's previous activity on YouTube does not provide enough information to generate the activity feed.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/activities',
          method: 'GET'
        },
        params: params,
        requiredParams: ['part'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.channelBanners = {

    /**
     * youtube.channelBanners.insert
     *
     * @desc Uploads a channel banner image to YouTube. This method represents the first two steps in a three-step process to update the banner image for a channel:  - Call the channelBanners.insert method to upload the binary image data to YouTube. The image must have a 16:9 aspect ratio and be at least 2120x1192 pixels. - Extract the url property's value from the response that the API returns for step 1. - Call the channels.update method to update the channel's branding settings. Set the brandingSettings.image.bannerExternalUrl property's value to the URL obtained in step 2.
     *
     * @alias youtube.channelBanners.insert
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.onBehalfOfContentOwner - Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param  {object} params.resource - Media resource metadata
     * @param  {object} params.media - Media object
     * @param  {string} params.media.mimeType - Media mime-type
     * @param  {string|object} params.media.body - Media body contents
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/channelBanners/insert',
          method: 'POST'
        },
        params: params,
        mediaUrl: 'https://www.googleapis.com/upload/youtube/v3/channelBanners/insert',
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.channelSections = {

    /**
     * youtube.channelSections.delete
     *
     * @desc Deletes a channelSection.
     *
     * @alias youtube.channelSections.delete
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The id parameter specifies the YouTube channelSection ID for the resource that is being deleted. In a channelSection resource, the id property specifies the YouTube channelSection ID.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/channelSections',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtube.channelSections.insert
     *
     * @desc Adds a channelSection for the authenticated user's channel.
     *
     * @alias youtube.channelSections.insert
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.onBehalfOfContentOwner - Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param  {string=} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param  {string} params.part - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  The part names that you can include in the parameter value are snippet and contentDetails.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/channelSections',
          method: 'POST'
        },
        params: params,
        requiredParams: ['part'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtube.channelSections.list
     *
     * @desc Returns channelSection resources that match the API request criteria.
     *
     * @alias youtube.channelSections.list
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.channelId - The channelId parameter specifies a YouTube channel ID. The API will only return that channel's channelSections.
     * @param  {string=} params.id - The id parameter specifies a comma-separated list of the YouTube channelSection ID(s) for the resource(s) that are being retrieved. In a channelSection resource, the id property specifies the YouTube channelSection ID.
     * @param  {boolean=} params.mine - Set this parameter's value to true to retrieve a feed of the authenticated user's channelSections.
     * @param  {string=} params.onBehalfOfContentOwner - Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param  {string} params.part - The part parameter specifies a comma-separated list of one or more channelSection resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, and contentDetails.  If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channelSection resource, the snippet property contains other properties, such as a display title for the channelSection. If you set part=snippet, the API response will also contain all of those nested properties.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/channelSections',
          method: 'GET'
        },
        params: params,
        requiredParams: ['part'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtube.channelSections.update
     *
     * @desc Update a channelSection.
     *
     * @alias youtube.channelSections.update
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.part - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  The part names that you can include in the parameter value are snippet and contentDetails.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/channelSections',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['part'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.channels = {

    /**
     * youtube.channels.list
     *
     * @desc Returns a collection of zero or more channel resources that match the request criteria.
     *
     * @alias youtube.channels.list
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.categoryId - The categoryId parameter specifies a YouTube guide category, thereby requesting YouTube channels associated with that category.
     * @param  {string=} params.forUsername - The forUsername parameter specifies a YouTube username, thereby requesting the channel associated with that username.
     * @param  {string=} params.id - The id parameter specifies a comma-separated list of the YouTube channel ID(s) for the resource(s) that are being retrieved. In a channel resource, the id property specifies the channel's YouTube channel ID.
     * @param  {boolean=} params.managedByMe - Set this parameter's value to true to instruct the API to only return channels managed by the content owner that the onBehalfOfContentOwner parameter specifies. The user must be authenticated as a CMS account linked to the specified content owner and onBehalfOfContentOwner must be provided.
     * @param  {integer=} params.maxResults - The maxResults parameter specifies the maximum number of items that should be returned in the result set.
     * @param  {boolean=} params.mine - Set this parameter's value to true to instruct the API to only return channels owned by the authenticated user.
     * @param  {boolean=} params.mySubscribers - Set this parameter's value to true to retrieve a list of channels that subscribed to the authenticated user's channel.
     * @param  {string=} params.onBehalfOfContentOwner - The onBehalfOfContentOwner parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
     * @param  {string=} params.pageToken - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param  {string} params.part - The part parameter specifies a comma-separated list of one or more channel resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, statistics, topicDetails, and invideoPromotion.  If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channel resource, the contentDetails property contains other properties, such as the uploads properties. As such, if you set part=contentDetails, the API response will also contain all of those nested properties.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/channels',
          method: 'GET'
        },
        params: params,
        requiredParams: ['part'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtube.channels.update
     *
     * @desc Updates a channel's metadata.
     *
     * @alias youtube.channels.update
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.onBehalfOfContentOwner - The onBehalfOfContentOwner parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
     * @param  {string} params.part - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  The part names that you can include in the parameter value are id and invideoPromotion.  Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/channels',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['part'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.guideCategories = {

    /**
     * youtube.guideCategories.list
     *
     * @desc Returns a list of categories that can be associated with YouTube channels.
     *
     * @alias youtube.guideCategories.list
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.hl - The hl parameter specifies the language that will be used for text values in the API response.
     * @param  {string=} params.id - The id parameter specifies a comma-separated list of the YouTube channel category ID(s) for the resource(s) that are being retrieved. In a guideCategory resource, the id property specifies the YouTube channel category ID.
     * @param  {string} params.part - The part parameter specifies a comma-separated list of one or more guideCategory resource properties that the API response will include. The part names that you can include in the parameter value are id and snippet.  If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a guideCategory resource, the snippet property contains other properties, such as the category's title. If you set part=snippet, the API response will also contain all of those nested properties.
     * @param  {string=} params.regionCode - The regionCode parameter instructs the API to return the list of guide categories available in the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/guideCategories',
          method: 'GET'
        },
        params: params,
        requiredParams: ['part'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.i18nLanguages = {

    /**
     * youtube.i18nLanguages.list
     *
     * @desc Returns a list of supported languages.
     *
     * @alias youtube.i18nLanguages.list
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.hl - The hl parameter specifies the language that should be used for text values in the API response.
     * @param  {string} params.part - The part parameter specifies a comma-separated list of one or more i18nLanguage resource properties that the API response will include. The part names that you can include in the parameter value are id and snippet.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/i18nLanguages',
          method: 'GET'
        },
        params: params,
        requiredParams: ['part'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.i18nRegions = {

    /**
     * youtube.i18nRegions.list
     *
     * @desc Returns a list of supported regions.
     *
     * @alias youtube.i18nRegions.list
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.hl - The hl parameter specifies the language that should be used for text values in the API response.
     * @param  {string} params.part - The part parameter specifies a comma-separated list of one or more i18nRegion resource properties that the API response will include. The part names that you can include in the parameter value are id and snippet.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/i18nRegions',
          method: 'GET'
        },
        params: params,
        requiredParams: ['part'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.liveBroadcasts = {

    /**
     * youtube.liveBroadcasts.bind
     *
     * @desc Binds a YouTube broadcast to a stream or removes an existing binding between a broadcast and a stream. A broadcast can only be bound to one video stream.
     *
     * @alias youtube.liveBroadcasts.bind
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The id parameter specifies the unique ID of the broadcast that is being bound to a video stream.
     * @param  {string=} params.onBehalfOfContentOwner - Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param  {string=} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param  {string} params.part - The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
     * @param  {string=} params.streamId - The streamId parameter specifies the unique ID of the video stream that is being bound to a broadcast. If this parameter is omitted, the API will remove any existing binding between the broadcast and a video stream.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    bind: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/liveBroadcasts/bind',
          method: 'POST'
        },
        params: params,
        requiredParams: ['id', 'part'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtube.liveBroadcasts.control
     *
     * @desc Controls the settings for a slate that can be displayed in the broadcast stream.
     *
     * @alias youtube.liveBroadcasts.control
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.displaySlate - The displaySlate parameter specifies whether the slate is being enabled or disabled.
     * @param  {string} params.id - The id parameter specifies the YouTube live broadcast ID that uniquely identifies the broadcast in which the slate is being updated.
     * @param  {string=} params.offsetTimeMs - The offsetTimeMs parameter specifies a positive time offset when the specified slate change will occur. The value is measured in milliseconds from the beginning of the broadcast's monitor stream, which is the time that the testing phase for the broadcast began. Even though it is specified in milliseconds, the value is actually an approximation, and YouTube completes the requested action as closely as possible to that time.  If you do not specify a value for this parameter, then YouTube performs the action as soon as possible. See the Getting started guide for more details.  Important: You should only specify a value for this parameter if your broadcast stream is delayed.
     * @param  {string=} params.onBehalfOfContentOwner - Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param  {string=} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param  {string} params.part - The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
     * @param  {string=} params.walltime - The walltime parameter specifies the wall clock time at which the specified slate change will occur. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sssZ) format.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    control: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/liveBroadcasts/control',
          method: 'POST'
        },
        params: params,
        requiredParams: ['id', 'part'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtube.liveBroadcasts.delete
     *
     * @desc Deletes a broadcast.
     *
     * @alias youtube.liveBroadcasts.delete
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The id parameter specifies the YouTube live broadcast ID for the resource that is being deleted.
     * @param  {string=} params.onBehalfOfContentOwner - Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param  {string=} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/liveBroadcasts',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtube.liveBroadcasts.insert
     *
     * @desc Creates a broadcast.
     *
     * @alias youtube.liveBroadcasts.insert
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.onBehalfOfContentOwner - Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param  {string=} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param  {string} params.part - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  The part properties that you can include in the parameter value are id, snippet, contentDetails, and status.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/liveBroadcasts',
          method: 'POST'
        },
        params: params,
        requiredParams: ['part'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtube.liveBroadcasts.list
     *
     * @desc Returns a list of YouTube broadcasts that match the API request parameters.
     *
     * @alias youtube.liveBroadcasts.list
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.broadcastStatus - The broadcastStatus parameter filters the API response to only include broadcasts with the specified status.
     * @param  {string=} params.id - The id parameter specifies a comma-separated list of YouTube broadcast IDs that identify the broadcasts being retrieved. In a liveBroadcast resource, the id property specifies the broadcast's ID.
     * @param  {integer=} params.maxResults - The maxResults parameter specifies the maximum number of items that should be returned in the result set.
     * @param  {boolean=} params.mine - The mine parameter can be used to instruct the API to only return broadcasts owned by the authenticated user. Set the parameter value to true to only retrieve your own broadcasts.
     * @param  {string=} params.onBehalfOfContentOwner - Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param  {string=} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param  {string=} params.pageToken - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param  {string} params.part - The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/liveBroadcasts',
          method: 'GET'
        },
        params: params,
        requiredParams: ['part'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtube.liveBroadcasts.transition
     *
     * @desc Changes the status of a YouTube live broadcast and initiates any processes associated with the new status. For example, when you transition a broadcast's status to testing, YouTube starts to transmit video to that broadcast's monitor stream. Before calling this method, you should confirm that the value of the status.streamStatus property for the stream bound to your broadcast is active.
     *
     * @alias youtube.liveBroadcasts.transition
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.broadcastStatus - The broadcastStatus parameter identifies the state to which the broadcast is changing. Note that to transition a broadcast to either the testing or live state, the status.streamStatus must be active for the stream that the broadcast is bound to.
     * @param  {string} params.id - The id parameter specifies the unique ID of the broadcast that is transitioning to another status.
     * @param  {string=} params.onBehalfOfContentOwner - Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param  {string=} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param  {string} params.part - The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    transition: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/liveBroadcasts/transition',
          method: 'POST'
        },
        params: params,
        requiredParams: ['broadcastStatus', 'id', 'part'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtube.liveBroadcasts.update
     *
     * @desc Updates a broadcast. For example, you could modify the broadcast settings defined in the liveBroadcast resource's contentDetails object.
     *
     * @alias youtube.liveBroadcasts.update
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.onBehalfOfContentOwner - Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param  {string=} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param  {string} params.part - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  The part properties that you can include in the parameter value are id, snippet, contentDetails, and status.  Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a broadcast's privacy status is defined in the status part. As such, if your request is updating a private or unlisted broadcast, and the request's part parameter value includes the status part, the broadcast's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the broadcast will revert to the default privacy setting.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/liveBroadcasts',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['part'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.liveStreams = {

    /**
     * youtube.liveStreams.delete
     *
     * @desc Deletes a video stream.
     *
     * @alias youtube.liveStreams.delete
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The id parameter specifies the YouTube live stream ID for the resource that is being deleted.
     * @param  {string=} params.onBehalfOfContentOwner - Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param  {string=} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/liveStreams',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtube.liveStreams.insert
     *
     * @desc Creates a video stream. The stream enables you to send your video to YouTube, which can then broadcast the video to your audience.
     *
     * @alias youtube.liveStreams.insert
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.onBehalfOfContentOwner - Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param  {string=} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param  {string} params.part - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  The part properties that you can include in the parameter value are id, snippet, cdn, and status.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/liveStreams',
          method: 'POST'
        },
        params: params,
        requiredParams: ['part'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtube.liveStreams.list
     *
     * @desc Returns a list of video streams that match the API request parameters.
     *
     * @alias youtube.liveStreams.list
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.id - The id parameter specifies a comma-separated list of YouTube stream IDs that identify the streams being retrieved. In a liveStream resource, the id property specifies the stream's ID.
     * @param  {integer=} params.maxResults - The maxResults parameter specifies the maximum number of items that should be returned in the result set. Acceptable values are 0 to 50, inclusive. The default value is 5.
     * @param  {boolean=} params.mine - The mine parameter can be used to instruct the API to only return streams owned by the authenticated user. Set the parameter value to true to only retrieve your own streams.
     * @param  {string=} params.onBehalfOfContentOwner - Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param  {string=} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param  {string=} params.pageToken - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param  {string} params.part - The part parameter specifies a comma-separated list of one or more liveStream resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, cdn, and status.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/liveStreams',
          method: 'GET'
        },
        params: params,
        requiredParams: ['part'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtube.liveStreams.update
     *
     * @desc Updates a video stream. If the properties that you want to change cannot be updated, then you need to create a new stream with the proper settings.
     *
     * @alias youtube.liveStreams.update
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.onBehalfOfContentOwner - Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param  {string=} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param  {string} params.part - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  The part properties that you can include in the parameter value are id, snippet, cdn, and status.  Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. If the request body does not specify a value for a mutable property, the existing value for that property will be removed.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/liveStreams',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['part'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.playlistItems = {

    /**
     * youtube.playlistItems.delete
     *
     * @desc Deletes a playlist item.
     *
     * @alias youtube.playlistItems.delete
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The id parameter specifies the YouTube playlist item ID for the playlist item that is being deleted. In a playlistItem resource, the id property specifies the playlist item's ID.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/playlistItems',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtube.playlistItems.insert
     *
     * @desc Adds a resource to a playlist.
     *
     * @alias youtube.playlistItems.insert
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.onBehalfOfContentOwner - Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param  {string} params.part - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  The part names that you can include in the parameter value are snippet, contentDetails, and status.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/playlistItems',
          method: 'POST'
        },
        params: params,
        requiredParams: ['part'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtube.playlistItems.list
     *
     * @desc Returns a collection of playlist items that match the API request parameters. You can retrieve all of the playlist items in a specified playlist or retrieve one or more playlist items by their unique IDs.
     *
     * @alias youtube.playlistItems.list
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.id - The id parameter specifies a comma-separated list of one or more unique playlist item IDs.
     * @param  {integer=} params.maxResults - The maxResults parameter specifies the maximum number of items that should be returned in the result set.
     * @param  {string=} params.onBehalfOfContentOwner - Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param  {string=} params.pageToken - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param  {string} params.part - The part parameter specifies a comma-separated list of one or more playlistItem resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.  If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlistItem resource, the snippet property contains numerous fields, including the title, description, position, and resourceId properties. As such, if you set part=snippet, the API response will contain all of those properties.
     * @param  {string=} params.playlistId - The playlistId parameter specifies the unique ID of the playlist for which you want to retrieve playlist items. Note that even though this is an optional parameter, every request to retrieve playlist items must specify a value for either the id parameter or the playlistId parameter.
     * @param  {string=} params.videoId - The videoId parameter specifies that the request should return only the playlist items that contain the specified video.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/playlistItems',
          method: 'GET'
        },
        params: params,
        requiredParams: ['part'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtube.playlistItems.update
     *
     * @desc Modifies a playlist item. For example, you could update the item's position in the playlist.
     *
     * @alias youtube.playlistItems.update
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.part - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  The part names that you can include in the parameter value are snippet, contentDetails, and status.  Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a playlist item can specify a start time and end time, which identify the times portion of the video that should play when users watch the video in the playlist. If your request is updating a playlist item that sets these values, and the request's part parameter value includes the contentDetails part, the playlist item's start and end times will be updated to whatever value the request body specifies. If the request body does not specify values, the existing start and end times will be removed and replaced with the default settings.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/playlistItems',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['part'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.playlists = {

    /**
     * youtube.playlists.delete
     *
     * @desc Deletes a playlist.
     *
     * @alias youtube.playlists.delete
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The id parameter specifies the YouTube playlist ID for the playlist that is being deleted. In a playlist resource, the id property specifies the playlist's ID.
     * @param  {string=} params.onBehalfOfContentOwner - Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/playlists',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtube.playlists.insert
     *
     * @desc Creates a playlist.
     *
     * @alias youtube.playlists.insert
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.onBehalfOfContentOwner - Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param  {string=} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param  {string} params.part - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  The part names that you can include in the parameter value are snippet and status.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/playlists',
          method: 'POST'
        },
        params: params,
        requiredParams: ['part'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtube.playlists.list
     *
     * @desc Returns a collection of playlists that match the API request parameters. For example, you can retrieve all playlists that the authenticated user owns, or you can retrieve one or more playlists by their unique IDs.
     *
     * @alias youtube.playlists.list
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.channelId - This value indicates that the API should only return the specified channel's playlists.
     * @param  {string=} params.id - The id parameter specifies a comma-separated list of the YouTube playlist ID(s) for the resource(s) that are being retrieved. In a playlist resource, the id property specifies the playlist's YouTube playlist ID.
     * @param  {integer=} params.maxResults - The maxResults parameter specifies the maximum number of items that should be returned in the result set.
     * @param  {boolean=} params.mine - Set this parameter's value to true to instruct the API to only return playlists owned by the authenticated user.
     * @param  {string=} params.onBehalfOfContentOwner - Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param  {string=} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param  {string=} params.pageToken - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param  {string} params.part - The part parameter specifies a comma-separated list of one or more playlist resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, status, and contentDetails.  If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlist resource, the snippet property contains properties like author, title, description, tags, and timeCreated. As such, if you set part=snippet, the API response will contain all of those properties.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/playlists',
          method: 'GET'
        },
        params: params,
        requiredParams: ['part'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtube.playlists.update
     *
     * @desc Modifies a playlist. For example, you could change a playlist's title, description, or privacy status.
     *
     * @alias youtube.playlists.update
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.onBehalfOfContentOwner - Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param  {string} params.part - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  The part names that you can include in the parameter value are snippet and status.  Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a playlist's privacy setting is contained in the status part. As such, if your request is updating a private playlist, and the request's part parameter value includes the status part, the playlist's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the playlist will revert to the default privacy setting.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/playlists',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['part'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.search = {

    /**
     * youtube.search.list
     *
     * @desc Returns a collection of search results that match the query parameters specified in the API request. By default, a search result set identifies matching video, channel, and playlist resources, but you can also configure queries to only retrieve a specific type of resource.
     *
     * @alias youtube.search.list
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.channelId - The channelId parameter indicates that the API response should only contain resources created by the channel
     * @param  {string=} params.channelType - The channelType parameter lets you restrict a search to a particular type of channel.
     * @param  {string=} params.eventType - The eventType parameter restricts a search to broadcast events.
     * @param  {boolean=} params.forContentOwner - Note: This parameter is intended exclusively for YouTube content partners.  The forContentOwner parameter restricts the search to only retrieve resources owned by the content owner specified by the onBehalfOfContentOwner parameter. The user must be authenticated using a CMS account linked to the specified content owner and onBehalfOfContentOwner must be provided.
     * @param  {boolean=} params.forMine - The forMine parameter restricts the search to only retrieve videos owned by the authenticated user. If you set this parameter to true, then the type parameter's value must also be set to video.
     * @param  {string=} params.location - The location parameter restricts a search to videos that have a geographical location specified in their metadata. The value is a string that specifies geographic latitude/longitude coordinates e.g. (37.42307,-122.08427)
     * @param  {string=} params.locationRadius - The locationRadius, in conjunction with the location parameter, defines a geographic area. If the geographic coordinates associated with a video fall within that area, then the video may be included in search results. This parameter value must be a floating point number followed by a measurement unit. Valid measurement units are m, km, ft, and mi. For example, valid parameter values include 1500m, 5km, 10000ft, and 0.75mi. The API does not support locationRadius parameter values larger than 1000 kilometers.
     * @param  {integer=} params.maxResults - The maxResults parameter specifies the maximum number of items that should be returned in the result set.
     * @param  {string=} params.onBehalfOfContentOwner - Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param  {string=} params.order - The order parameter specifies the method that will be used to order resources in the API response.
     * @param  {string=} params.pageToken - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param  {string} params.part - The part parameter specifies a comma-separated list of one or more search resource properties that the API response will include. The part names that you can include in the parameter value are id and snippet.  If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a search result, the snippet property contains other properties that identify the result's title, description, and so forth. If you set part=snippet, the API response will also contain all of those nested properties.
     * @param  {string=} params.publishedAfter - The publishedAfter parameter indicates that the API response should only contain resources created after the specified time. The value is an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z).
     * @param  {string=} params.publishedBefore - The publishedBefore parameter indicates that the API response should only contain resources created before the specified time. The value is an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z).
     * @param  {string=} params.q - The q parameter specifies the query term to search for.
     * @param  {string=} params.regionCode - The regionCode parameter instructs the API to return search results for the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.
     * @param  {string=} params.relatedToVideoId - The relatedToVideoId parameter retrieves a list of videos that are related to the video that the parameter value identifies. The parameter value must be set to a YouTube video ID and, if you are using this parameter, the type parameter must be set to video.
     * @param  {string=} params.safeSearch - The safeSearch parameter indicates whether the search results should include restricted content as well as standard content.
     * @param  {string=} params.topicId - The topicId parameter indicates that the API response should only contain resources associated with the specified topic. The value identifies a Freebase topic ID.
     * @param  {string=} params.type - The type parameter restricts a search query to only retrieve a particular type of resource. The value is a comma-separated list of resource types.
     * @param  {string=} params.videoCaption - The videoCaption parameter indicates whether the API should filter video search results based on whether they have captions.
     * @param  {string=} params.videoCategoryId - The videoCategoryId parameter filters video search results based on their category.
     * @param  {string=} params.videoDefinition - The videoDefinition parameter lets you restrict a search to only include either high definition (HD) or standard definition (SD) videos. HD videos are available for playback in at least 720p, though higher resolutions, like 1080p, might also be available.
     * @param  {string=} params.videoDimension - The videoDimension parameter lets you restrict a search to only retrieve 2D or 3D videos.
     * @param  {string=} params.videoDuration - The videoDuration parameter filters video search results based on their duration.
     * @param  {string=} params.videoEmbeddable - The videoEmbeddable parameter lets you to restrict a search to only videos that can be embedded into a webpage.
     * @param  {string=} params.videoLicense - The videoLicense parameter filters search results to only include videos with a particular license. YouTube lets video uploaders choose to attach either the Creative Commons license or the standard YouTube license to each of their videos.
     * @param  {string=} params.videoSyndicated - The videoSyndicated parameter lets you to restrict a search to only videos that can be played outside youtube.com.
     * @param  {string=} params.videoType - The videoType parameter lets you restrict a search to a particular type of videos.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/search',
          method: 'GET'
        },
        params: params,
        requiredParams: ['part'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.subscriptions = {

    /**
     * youtube.subscriptions.delete
     *
     * @desc Deletes a subscription.
     *
     * @alias youtube.subscriptions.delete
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The id parameter specifies the YouTube subscription ID for the resource that is being deleted. In a subscription resource, the id property specifies the YouTube subscription ID.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/subscriptions',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtube.subscriptions.insert
     *
     * @desc Adds a subscription for the authenticated user's channel.
     *
     * @alias youtube.subscriptions.insert
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.part - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  The part names that you can include in the parameter value are snippet and contentDetails.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/subscriptions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['part'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtube.subscriptions.list
     *
     * @desc Returns subscription resources that match the API request criteria.
     *
     * @alias youtube.subscriptions.list
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.channelId - The channelId parameter specifies a YouTube channel ID. The API will only return that channel's subscriptions.
     * @param  {string=} params.forChannelId - The forChannelId parameter specifies a comma-separated list of channel IDs. The API response will then only contain subscriptions matching those channels.
     * @param  {string=} params.id - The id parameter specifies a comma-separated list of the YouTube subscription ID(s) for the resource(s) that are being retrieved. In a subscription resource, the id property specifies the YouTube subscription ID.
     * @param  {integer=} params.maxResults - The maxResults parameter specifies the maximum number of items that should be returned in the result set.
     * @param  {boolean=} params.mine - Set this parameter's value to true to retrieve a feed of the authenticated user's subscriptions.
     * @param  {boolean=} params.mySubscribers - Set this parameter's value to true to retrieve a feed of the subscribers of the authenticated user.
     * @param  {string=} params.onBehalfOfContentOwner - Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param  {string=} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param  {string=} params.order - The order parameter specifies the method that will be used to sort resources in the API response.
     * @param  {string=} params.pageToken - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param  {string} params.part - The part parameter specifies a comma-separated list of one or more subscription resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, and contentDetails.  If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a subscription resource, the snippet property contains other properties, such as a display title for the subscription. If you set part=snippet, the API response will also contain all of those nested properties.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/subscriptions',
          method: 'GET'
        },
        params: params,
        requiredParams: ['part'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.thumbnails = {

    /**
     * youtube.thumbnails.set
     *
     * @desc Uploads a custom video thumbnail to YouTube and sets it for a video.
     *
     * @alias youtube.thumbnails.set
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.onBehalfOfContentOwner - The onBehalfOfContentOwner parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
     * @param  {string} params.videoId - The videoId parameter specifies a YouTube video ID for which the custom video thumbnail is being provided.
     * @param  {object} params.media - Media object
     * @param  {string} params.media.mimeType - Media mime-type
     * @param  {string|object} params.media.body - Media body contents
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    set: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/thumbnails/set',
          method: 'POST'
        },
        params: params,
        mediaUrl: 'https://www.googleapis.com/upload/youtube/v3/thumbnails/set',
        requiredParams: ['videoId'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.videoCategories = {

    /**
     * youtube.videoCategories.list
     *
     * @desc Returns a list of categories that can be associated with YouTube videos.
     *
     * @alias youtube.videoCategories.list
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.hl - The hl parameter specifies the language that should be used for text values in the API response.
     * @param  {string=} params.id - The id parameter specifies a comma-separated list of video category IDs for the resources that you are retrieving.
     * @param  {string} params.part - The part parameter specifies the videoCategory resource parts that the API response will include. Supported values are id and snippet.
     * @param  {string=} params.regionCode - The regionCode parameter instructs the API to return the list of video categories available in the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/videoCategories',
          method: 'GET'
        },
        params: params,
        requiredParams: ['part'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.videos = {

    /**
     * youtube.videos.delete
     *
     * @desc Deletes a YouTube video.
     *
     * @alias youtube.videos.delete
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The id parameter specifies the YouTube video ID for the resource that is being deleted. In a video resource, the id property specifies the video's ID.
     * @param  {string=} params.onBehalfOfContentOwner - Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/videos',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtube.videos.getRating
     *
     * @desc Retrieves the ratings that the authorized user gave to a list of specified videos.
     *
     * @alias youtube.videos.getRating
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The id parameter specifies a comma-separated list of the YouTube video ID(s) for the resource(s) for which you are retrieving rating data. In a video resource, the id property specifies the video's ID.
     * @param  {string=} params.onBehalfOfContentOwner - Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getRating: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/videos/getRating',
          method: 'GET'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtube.videos.insert
     *
     * @desc Uploads a video to YouTube and optionally sets the video's metadata.
     *
     * @alias youtube.videos.insert
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.autoLevels - The autoLevels parameter indicates whether YouTube should automatically enhance the video's lighting and color.
     * @param  {boolean=} params.notifySubscribers - The notifySubscribers parameter indicates whether YouTube should send notification to subscribers about the inserted video.
     * @param  {string=} params.onBehalfOfContentOwner - Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param  {string=} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param  {string} params.part - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  The part names that you can include in the parameter value are snippet, contentDetails, fileDetails, liveStreamingDetails, player, processingDetails, recordingDetails, statistics, status, suggestions, and topicDetails. However, not all of those parts contain properties that can be set when setting or updating a video's metadata. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response.
     * @param  {boolean=} params.stabilize - The stabilize parameter indicates whether YouTube should adjust the video to remove shaky camera motions.
     * @param  {object} params.resource - Media resource metadata
     * @param  {object} params.media - Media object
     * @param  {string} params.media.mimeType - Media mime-type
     * @param  {string|object} params.media.body - Media body contents
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/videos',
          method: 'POST'
        },
        params: params,
        mediaUrl: 'https://www.googleapis.com/upload/youtube/v3/videos',
        requiredParams: ['part'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtube.videos.list
     *
     * @desc Returns a list of videos that match the API request parameters.
     *
     * @alias youtube.videos.list
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.chart - The chart parameter identifies the chart that you want to retrieve.
     * @param  {string=} params.id - The id parameter specifies a comma-separated list of the YouTube video ID(s) for the resource(s) that are being retrieved. In a video resource, the id property specifies the video's ID.
     * @param  {string=} params.locale - DEPRECATED
     * @param  {integer=} params.maxResults - The maxResults parameter specifies the maximum number of items that should be returned in the result set.  Note: This parameter is supported for use in conjunction with the myRating parameter, but it is not supported for use in conjunction with the id parameter.
     * @param  {string=} params.myRating - Set this parameter's value to like or dislike to instruct the API to only return videos liked or disliked by the authenticated user.
     * @param  {string=} params.onBehalfOfContentOwner - Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param  {string=} params.pageToken - The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.  Note: This parameter is supported for use in conjunction with the myRating parameter, but it is not supported for use in conjunction with the id parameter.
     * @param  {string} params.part - The part parameter specifies a comma-separated list of one or more video resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, fileDetails, liveStreamingDetails, player, processingDetails, recordingDetails, statistics, status, suggestions, and topicDetails.  If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a video resource, the snippet property contains the channelId, title, description, tags, and categoryId properties. As such, if you set part=snippet, the API response will contain all of those properties.
     * @param  {string=} params.regionCode - The regionCode parameter instructs the API to select a video chart available in the specified region. This parameter can only be used in conjunction with the chart parameter. The parameter value is an ISO 3166-1 alpha-2 country code.
     * @param  {string=} params.videoCategoryId - The videoCategoryId parameter identifies the video category for which the chart should be retrieved. This parameter can only be used in conjunction with the chart parameter. By default, charts are not restricted to a particular category.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/videos',
          method: 'GET'
        },
        params: params,
        requiredParams: ['part'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtube.videos.rate
     *
     * @desc Add a like or dislike rating to a video or remove a rating from a video.
     *
     * @alias youtube.videos.rate
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The id parameter specifies the YouTube video ID of the video that is being rated or having its rating removed.
     * @param  {string=} params.onBehalfOfContentOwner - Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param  {string} params.rating - Specifies the rating to record.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    rate: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/videos/rate',
          method: 'POST'
        },
        params: params,
        requiredParams: ['id', 'rating'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtube.videos.update
     *
     * @desc Updates a video's metadata.
     *
     * @alias youtube.videos.update
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.onBehalfOfContentOwner - Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param  {string} params.part - The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  The part names that you can include in the parameter value are snippet, contentDetails, fileDetails, liveStreamingDetails, player, processingDetails, recordingDetails, statistics, status, suggestions, and topicDetails.  Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a video's privacy setting is contained in the status part. As such, if your request is updating a private video, and the request's part parameter value includes the status part, the video's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the video will revert to the default privacy setting.  In addition, not all of those parts contain properties that can be set when setting or updating a video's metadata. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/videos',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['part'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.watermarks = {

    /**
     * youtube.watermarks.set
     *
     * @desc Uploads a watermark image to YouTube and sets it for a channel.
     *
     * @alias youtube.watermarks.set
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.channelId - The channelId parameter specifies a YouTube channel ID for which the watermark is being provided.
     * @param  {string=} params.onBehalfOfContentOwner - The onBehalfOfContentOwner parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
     * @param  {object} params.resource - Media resource metadata
     * @param  {object} params.media - Media object
     * @param  {string} params.media.mimeType - Media mime-type
     * @param  {string|object} params.media.body - Media body contents
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    set: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/watermarks/set',
          method: 'POST'
        },
        params: params,
        mediaUrl: 'https://www.googleapis.com/upload/youtube/v3/watermarks/set',
        requiredParams: ['channelId'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * youtube.watermarks.unset
     *
     * @desc Deletes a watermark.
     *
     * @alias youtube.watermarks.unset
     * @memberOf! youtube(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.channelId - The channelId parameter specifies a YouTube channel ID for which the watermark is being unset.
     * @param  {string=} params.onBehalfOfContentOwner - The onBehalfOfContentOwner parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    unset: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/youtube/v3/watermarks/unset',
          method: 'POST'
        },
        params: params,
        requiredParams: ['channelId'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Youtube object
 * @type Youtube
 */
module.exports = Youtube;