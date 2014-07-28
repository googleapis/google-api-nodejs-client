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

'use strict';

var apirequest = require('../../lib/apirequest');
var createAPIRequest = apirequest.createAPIRequest;

/**
 * Google Mirror API
 *
 * @classdesc API for interacting with Glass users via the timeline.
 * @namespace mirror
 * @version  v1
 * @variation v1
 * @this Mirror
 * @param {object=} options Options for Mirror
 */
function Mirror(options) {

  var self = this;
  this._options = options || {};

  this.accounts = {

    /**
     * mirror.accounts.insert
     *
     * @desc Inserts a new account for a user
     *
     * @alias mirror.accounts.insert
     * @memberOf! mirror(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.accountName - The name of the account to be passed to the Android Account Manager.
     * @param  {string} params.accountType - Account type to be passed to Android Account Manager.
     * @param  {string} params.userToken - The ID for the user.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mirror/v1/accounts/' + params.userToken + '/' + params.accountType + '/' + params.accountName,
          method: 'POST'
        },
        params: params,
        requiredParams: ['userToken', 'accountType', 'accountName'],
        pathParams: ['accountName', 'accountType', 'userToken'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.contacts = {

    /**
     * mirror.contacts.delete
     *
     * @desc Deletes a contact.
     *
     * @alias mirror.contacts.delete
     * @memberOf! mirror(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the contact.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mirror/v1/contacts/' + params.id,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mirror.contacts.get
     *
     * @desc Gets a single contact by ID.
     *
     * @alias mirror.contacts.get
     * @memberOf! mirror(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the contact.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mirror/v1/contacts/' + params.id,
          method: 'GET'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mirror.contacts.insert
     *
     * @desc Inserts a new contact.
     *
     * @alias mirror.contacts.insert
     * @memberOf! mirror(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mirror/v1/contacts',
          method: 'POST'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mirror.contacts.list
     *
     * @desc Retrieves a list of contacts for the authenticated user.
     *
     * @alias mirror.contacts.list
     * @memberOf! mirror(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mirror/v1/contacts',
          method: 'GET'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mirror.contacts.patch
     *
     * @desc Updates a contact in place. This method supports patch semantics.
     *
     * @alias mirror.contacts.patch
     * @memberOf! mirror(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the contact.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mirror/v1/contacts/' + params.id,
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mirror.contacts.update
     *
     * @desc Updates a contact in place.
     *
     * @alias mirror.contacts.update
     * @memberOf! mirror(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the contact.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mirror/v1/contacts/' + params.id,
          method: 'PUT'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.locations = {

    /**
     * mirror.locations.get
     *
     * @desc Gets a single location by ID.
     *
     * @alias mirror.locations.get
     * @memberOf! mirror(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the location or latest for the last known location.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mirror/v1/locations/' + params.id,
          method: 'GET'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mirror.locations.list
     *
     * @desc Retrieves a list of locations for the user.
     *
     * @alias mirror.locations.list
     * @memberOf! mirror(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mirror/v1/locations',
          method: 'GET'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.settings = {

    /**
     * mirror.settings.get
     *
     * @desc Gets a single setting by ID.
     *
     * @alias mirror.settings.get
     * @memberOf! mirror(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the setting. The following IDs are valid:  - locale - The key to the user’s language/locale (BCP 47 identifier) that Glassware should use to render localized content.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mirror/v1/settings/' + params.id,
          method: 'GET'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.subscriptions = {

    /**
     * mirror.subscriptions.delete
     *
     * @desc Deletes a subscription.
     *
     * @alias mirror.subscriptions.delete
     * @memberOf! mirror(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the subscription.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mirror/v1/subscriptions/' + params.id,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mirror.subscriptions.insert
     *
     * @desc Creates a new subscription.
     *
     * @alias mirror.subscriptions.insert
     * @memberOf! mirror(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mirror/v1/subscriptions',
          method: 'POST'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mirror.subscriptions.list
     *
     * @desc Retrieves a list of subscriptions for the authenticated user and service.
     *
     * @alias mirror.subscriptions.list
     * @memberOf! mirror(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mirror/v1/subscriptions',
          method: 'GET'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mirror.subscriptions.update
     *
     * @desc Updates an existing subscription in place.
     *
     * @alias mirror.subscriptions.update
     * @memberOf! mirror(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the subscription.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mirror/v1/subscriptions/' + params.id,
          method: 'PUT'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.timeline = {

    /**
     * mirror.timeline.delete
     *
     * @desc Deletes a timeline item.
     *
     * @alias mirror.timeline.delete
     * @memberOf! mirror(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the timeline item.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mirror/v1/timeline/' + params.id,
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mirror.timeline.get
     *
     * @desc Gets a single timeline item by ID.
     *
     * @alias mirror.timeline.get
     * @memberOf! mirror(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the timeline item.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mirror/v1/timeline/' + params.id,
          method: 'GET'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mirror.timeline.insert
     *
     * @desc Inserts a new item into the timeline.
     *
     * @alias mirror.timeline.insert
     * @memberOf! mirror(v1)
     *
     * @param  {object} params - Parameters for request
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
          url: 'https://www.googleapis.com/mirror/v1/timeline',
          method: 'POST'
        },
        params: params,
        mediaUrl: 'https://www.googleapis.com/upload/mirror/v1/timeline',
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mirror.timeline.list
     *
     * @desc Retrieves a list of timeline items for the authenticated user.
     *
     * @alias mirror.timeline.list
     * @memberOf! mirror(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.bundleId - If provided, only items with the given bundleId will be returned.
     * @param  {boolean=} params.includeDeleted - If true, tombstone records for deleted items will be returned.
     * @param  {integer=} params.maxResults - The maximum number of items to include in the response, used for paging.
     * @param  {string=} params.orderBy - Controls the order in which timeline items are returned.
     * @param  {string=} params.pageToken - Token for the page of results to return.
     * @param  {boolean=} params.pinnedOnly - If true, only pinned items will be returned.
     * @param  {string=} params.sourceItemId - If provided, only items with the given sourceItemId will be returned.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mirror/v1/timeline',
          method: 'GET'
        },
        params: params,
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mirror.timeline.patch
     *
     * @desc Updates a timeline item in place. This method supports patch semantics.
     *
     * @alias mirror.timeline.patch
     * @memberOf! mirror(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the timeline item.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mirror/v1/timeline/' + params.id,
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * mirror.timeline.update
     *
     * @desc Updates a timeline item in place.
     *
     * @alias mirror.timeline.update
     * @memberOf! mirror(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - The ID of the timeline item.
     * @param  {object} params.resource - Media resource metadata
     * @param  {object} params.media - Media object
     * @param  {string} params.media.mimeType - Media mime-type
     * @param  {string|object} params.media.body - Media body contents
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/mirror/v1/timeline/' + params.id,
          method: 'PUT'
        },
        params: params,
        mediaUrl: 'https://www.googleapis.com/upload/mirror/v1/timeline/' + params.id,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    attachments: {

      /**
       * mirror.timeline.attachments.delete
       *
       * @desc Deletes an attachment from a timeline item.
       *
       * @alias mirror.timeline.attachments.delete
       * @memberOf! mirror(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.attachmentId - The ID of the attachment.
       * @param  {string} params.itemId - The ID of the timeline item the attachment belongs to.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mirror/v1/timeline/' + params.itemId + '/attachments/' + params.attachmentId,
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['itemId', 'attachmentId'],
          pathParams: ['attachmentId', 'itemId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * mirror.timeline.attachments.get
       *
       * @desc Retrieves an attachment on a timeline item by item ID and attachment ID.
       *
       * @alias mirror.timeline.attachments.get
       * @memberOf! mirror(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.attachmentId - The ID of the attachment.
       * @param  {string} params.itemId - The ID of the timeline item the attachment belongs to.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mirror/v1/timeline/' + params.itemId + '/attachments/' + params.attachmentId,
            method: 'GET'
          },
          params: params,
          requiredParams: ['itemId', 'attachmentId'],
          pathParams: ['attachmentId', 'itemId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * mirror.timeline.attachments.insert
       *
       * @desc Adds a new attachment to a timeline item.
       *
       * @alias mirror.timeline.attachments.insert
       * @memberOf! mirror(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.itemId - The ID of the timeline item the attachment belongs to.
       * @param  {object} params.media - Media object
       * @param  {string} params.media.mimeType - Media mime-type
       * @param  {string|object} params.media.body - Media body contents
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      insert: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mirror/v1/timeline/' + params.itemId + '/attachments',
            method: 'POST'
          },
          params: params,
          mediaUrl: 'https://www.googleapis.com/upload/mirror/v1/timeline/' + params.itemId + '/attachments',
          requiredParams: ['itemId'],
          pathParams: ['itemId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * mirror.timeline.attachments.list
       *
       * @desc Returns a list of attachments for a timeline item.
       *
       * @alias mirror.timeline.attachments.list
       * @memberOf! mirror(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.itemId - The ID of the timeline item whose attachments should be listed.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/mirror/v1/timeline/' + params.itemId + '/attachments',
            method: 'GET'
          },
          params: params,
          requiredParams: ['itemId'],
          pathParams: ['itemId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };
}

/**
 * Exports Mirror object
 * @type Mirror
 */
module.exports = Mirror;