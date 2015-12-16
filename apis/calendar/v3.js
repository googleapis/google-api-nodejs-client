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
 * Calendar API
 *
 * @classdesc Lets you manipulate events and other calendar data.
 * @namespace calendar
 * @version  v3
 * @variation v3
 * @this Calendar
 * @param {object=} options Options for Calendar
 */
function Calendar(options) {

  var self = this;
  this._options = options || {};

  this.acl = {

    /**
     * calendar.acl.delete
     *
     * @desc Deletes an access control rule.
     *
     * @alias calendar.acl.delete
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.calendarId - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param  {string} params.ruleId - ACL rule identifier.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/{ruleId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['calendarId', 'ruleId'],
        pathParams: ['calendarId', 'ruleId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * calendar.acl.get
     *
     * @desc Returns an access control rule.
     *
     * @alias calendar.acl.get
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.calendarId - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param  {string} params.ruleId - ACL rule identifier.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/{ruleId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['calendarId', 'ruleId'],
        pathParams: ['calendarId', 'ruleId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * calendar.acl.insert
     *
     * @desc Creates an access control rule.
     *
     * @alias calendar.acl.insert
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.calendarId - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl',
          method: 'POST'
        },
        params: params,
        requiredParams: ['calendarId'],
        pathParams: ['calendarId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * calendar.acl.list
     *
     * @desc Returns the rules in the access control list for the calendar.
     *
     * @alias calendar.acl.list
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.calendarId - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param  {integer=} params.maxResults - Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
     * @param  {string=} params.pageToken - Token specifying which result page to return. Optional.
     * @param  {boolean=} params.showDeleted - Whether to include deleted ACLs in the result. Deleted ACLs are represented by role equal to "none". Deleted ACLs will always be included if syncToken is provided. Optional. The default is False.
     * @param  {string=} params.syncToken - Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All entries deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False. If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken. Learn more about incremental synchronization. Optional. The default is to return all entries.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl',
          method: 'GET'
        },
        params: params,
        requiredParams: ['calendarId'],
        pathParams: ['calendarId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * calendar.acl.patch
     *
     * @desc Updates an access control rule. This method supports patch semantics.
     *
     * @alias calendar.acl.patch
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.calendarId - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param  {string} params.ruleId - ACL rule identifier.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/{ruleId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['calendarId', 'ruleId'],
        pathParams: ['calendarId', 'ruleId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * calendar.acl.update
     *
     * @desc Updates an access control rule.
     *
     * @alias calendar.acl.update
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.calendarId - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param  {string} params.ruleId - ACL rule identifier.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/{ruleId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['calendarId', 'ruleId'],
        pathParams: ['calendarId', 'ruleId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * calendar.acl.watch
     *
     * @desc Watch for changes to ACL resources.
     *
     * @alias calendar.acl.watch
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.calendarId - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param  {integer=} params.maxResults - Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
     * @param  {string=} params.pageToken - Token specifying which result page to return. Optional.
     * @param  {boolean=} params.showDeleted - Whether to include deleted ACLs in the result. Deleted ACLs are represented by role equal to "none". Deleted ACLs will always be included if syncToken is provided. Optional. The default is False.
     * @param  {string=} params.syncToken - Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All entries deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False. If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken. Learn more about incremental synchronization. Optional. The default is to return all entries.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    watch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/watch',
          method: 'POST'
        },
        params: params,
        requiredParams: ['calendarId'],
        pathParams: ['calendarId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.calendarList = {

    /**
     * calendar.calendarList.delete
     *
     * @desc Deletes an entry on the user's calendar list.
     *
     * @alias calendar.calendarList.delete
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.calendarId - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/users/me/calendarList/{calendarId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['calendarId'],
        pathParams: ['calendarId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * calendar.calendarList.get
     *
     * @desc Returns an entry on the user's calendar list.
     *
     * @alias calendar.calendarList.get
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.calendarId - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/users/me/calendarList/{calendarId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['calendarId'],
        pathParams: ['calendarId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * calendar.calendarList.insert
     *
     * @desc Adds an entry to the user's calendar list.
     *
     * @alias calendar.calendarList.insert
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.colorRgbFormat - Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/users/me/calendarList',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * calendar.calendarList.list
     *
     * @desc Returns entries on the user's calendar list.
     *
     * @alias calendar.calendarList.list
     * @memberOf! calendar(v3)
     *
     * @param  {object=} params - Parameters for request
     * @param  {integer=} params.maxResults - Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
     * @param  {string=} params.minAccessRole - The minimum access role for the user in the returned entries. Optional. The default is no restriction.
     * @param  {string=} params.pageToken - Token specifying which result page to return. Optional.
     * @param  {boolean=} params.showDeleted - Whether to include deleted calendar list entries in the result. Optional. The default is False.
     * @param  {boolean=} params.showHidden - Whether to show hidden entries. Optional. The default is False.
     * @param  {string=} params.syncToken - Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set showDeleted neither showHidden to False. To ensure client state consistency minAccessRole query parameter cannot be specified together with nextSyncToken. If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken. Learn more about incremental synchronization. Optional. The default is to return all entries.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/users/me/calendarList',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * calendar.calendarList.patch
     *
     * @desc Updates an entry on the user's calendar list. This method supports patch semantics.
     *
     * @alias calendar.calendarList.patch
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.calendarId - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param  {boolean=} params.colorRgbFormat - Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/users/me/calendarList/{calendarId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['calendarId'],
        pathParams: ['calendarId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * calendar.calendarList.update
     *
     * @desc Updates an entry on the user's calendar list.
     *
     * @alias calendar.calendarList.update
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.calendarId - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param  {boolean=} params.colorRgbFormat - Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/users/me/calendarList/{calendarId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['calendarId'],
        pathParams: ['calendarId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * calendar.calendarList.watch
     *
     * @desc Watch for changes to CalendarList resources.
     *
     * @alias calendar.calendarList.watch
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
     * @param  {string=} params.minAccessRole - The minimum access role for the user in the returned entries. Optional. The default is no restriction.
     * @param  {string=} params.pageToken - Token specifying which result page to return. Optional.
     * @param  {boolean=} params.showDeleted - Whether to include deleted calendar list entries in the result. Optional. The default is False.
     * @param  {boolean=} params.showHidden - Whether to show hidden entries. Optional. The default is False.
     * @param  {string=} params.syncToken - Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set showDeleted neither showHidden to False. To ensure client state consistency minAccessRole query parameter cannot be specified together with nextSyncToken. If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken. Learn more about incremental synchronization. Optional. The default is to return all entries.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    watch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/users/me/calendarList/watch',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.calendars = {

    /**
     * calendar.calendars.clear
     *
     * @desc Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.
     *
     * @alias calendar.calendars.clear
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.calendarId - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    clear: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/clear',
          method: 'POST'
        },
        params: params,
        requiredParams: ['calendarId'],
        pathParams: ['calendarId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * calendar.calendars.delete
     *
     * @desc Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.
     *
     * @alias calendar.calendars.delete
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.calendarId - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['calendarId'],
        pathParams: ['calendarId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * calendar.calendars.get
     *
     * @desc Returns metadata for a calendar.
     *
     * @alias calendar.calendars.get
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.calendarId - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['calendarId'],
        pathParams: ['calendarId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * calendar.calendars.insert
     *
     * @desc Creates a secondary calendar.
     *
     * @alias calendar.calendars.insert
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/calendars',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * calendar.calendars.patch
     *
     * @desc Updates metadata for a calendar. This method supports patch semantics.
     *
     * @alias calendar.calendars.patch
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.calendarId - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['calendarId'],
        pathParams: ['calendarId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * calendar.calendars.update
     *
     * @desc Updates metadata for a calendar.
     *
     * @alias calendar.calendars.update
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.calendarId - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['calendarId'],
        pathParams: ['calendarId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.channels = {

    /**
     * calendar.channels.stop
     *
     * @desc Stop watching resources through this channel
     *
     * @alias calendar.channels.stop
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    stop: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/channels/stop',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.colors = {

    /**
     * calendar.colors.get
     *
     * @desc Returns the color definitions for calendars and events.
     *
     * @alias calendar.colors.get
     * @memberOf! calendar(v3)
     *
     * @param  {object=} params - Parameters for request
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/colors',
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

  this.events = {

    /**
     * calendar.events.delete
     *
     * @desc Deletes an event.
     *
     * @alias calendar.events.delete
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.calendarId - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param  {string} params.eventId - Event identifier.
     * @param  {boolean=} params.sendNotifications - Whether to send notifications about the deletion of the event. Optional. The default is False.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['calendarId', 'eventId'],
        pathParams: ['calendarId', 'eventId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * calendar.events.get
     *
     * @desc Returns an event.
     *
     * @alias calendar.events.get
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.alwaysIncludeEmail - Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
     * @param  {string} params.calendarId - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param  {string} params.eventId - Event identifier.
     * @param  {integer=} params.maxAttendees - The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
     * @param  {string=} params.timeZone - Time zone used in the response. Optional. The default is the time zone of the calendar.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['calendarId', 'eventId'],
        pathParams: ['calendarId', 'eventId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * calendar.events.import
     *
     * @desc Imports an event. This operation is used to add a private copy of an existing event to a calendar.
     *
     * @alias calendar.events.import
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.calendarId - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param  {boolean=} params.supportsAttachments - Whether API client performing operation supports event attachments. Optional. The default is False.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    import: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/import',
          method: 'POST'
        },
        params: params,
        requiredParams: ['calendarId'],
        pathParams: ['calendarId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * calendar.events.insert
     *
     * @desc Creates an event.
     *
     * @alias calendar.events.insert
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.calendarId - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param  {integer=} params.maxAttendees - The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
     * @param  {boolean=} params.sendNotifications - Whether to send notifications about the creation of the new event. Optional. The default is False.
     * @param  {boolean=} params.supportsAttachments - Whether API client performing operation supports event attachments. Optional. The default is False.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events',
          method: 'POST'
        },
        params: params,
        requiredParams: ['calendarId'],
        pathParams: ['calendarId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * calendar.events.instances
     *
     * @desc Returns instances of the specified recurring event.
     *
     * @alias calendar.events.instances
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.alwaysIncludeEmail - Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
     * @param  {string} params.calendarId - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param  {string} params.eventId - Recurring event identifier.
     * @param  {integer=} params.maxAttendees - The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
     * @param  {integer=} params.maxResults - Maximum number of events returned on one result page. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
     * @param  {string=} params.originalStart - The original start time of the instance in the result. Optional.
     * @param  {string=} params.pageToken - Token specifying which result page to return. Optional.
     * @param  {boolean=} params.showDeleted - Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events will still be included if singleEvents is False. Optional. The default is False.
     * @param  {string=} params.timeMax - Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset.
     * @param  {string=} params.timeMin - Lower bound (inclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset.
     * @param  {string=} params.timeZone - Time zone used in the response. Optional. The default is the time zone of the calendar.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    instances: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}/instances',
          method: 'GET'
        },
        params: params,
        requiredParams: ['calendarId', 'eventId'],
        pathParams: ['calendarId', 'eventId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * calendar.events.list
     *
     * @desc Returns events on the specified calendar.
     *
     * @alias calendar.events.list
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.alwaysIncludeEmail - Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
     * @param  {string} params.calendarId - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param  {string=} params.iCalUID - Specifies event ID in the iCalendar format to be included in the response. Optional.
     * @param  {integer=} params.maxAttendees - The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
     * @param  {integer=} params.maxResults - Maximum number of events returned on one result page. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
     * @param  {string=} params.orderBy - The order of the events returned in the result. Optional. The default is an unspecified, stable order.
     * @param  {string=} params.pageToken - Token specifying which result page to return. Optional.
     * @param  {string=} params.privateExtendedProperty - Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints.
     * @param  {string=} params.q - Free text search terms to find events that match these terms in any field, except for extended properties. Optional.
     * @param  {string=} params.sharedExtendedProperty - Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints.
     * @param  {boolean=} params.showDeleted - Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False.
     * @param  {boolean=} params.showHiddenInvitations - Whether to include hidden invitations in the result. Optional. The default is False.
     * @param  {boolean=} params.singleEvents - Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False.
     * @param  {string=} params.syncToken - Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False. There are several query parameters that cannot be specified together with nextSyncToken to ensure consistency of the client state.  These are:  - iCalUID  - orderBy  - privateExtendedProperty  - q  - sharedExtendedProperty  - timeMin  - timeMax  - updatedMin If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken. Learn more about incremental synchronization. Optional. The default is to return all entries.
     * @param  {string=} params.timeMax - Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, e.g., 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but will be ignored.
     * @param  {string=} params.timeMin - Lower bound (inclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, e.g., 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but will be ignored.
     * @param  {string=} params.timeZone - Time zone used in the response. Optional. The default is the time zone of the calendar.
     * @param  {string=} params.updatedMin - Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events',
          method: 'GET'
        },
        params: params,
        requiredParams: ['calendarId'],
        pathParams: ['calendarId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * calendar.events.move
     *
     * @desc Moves an event to another calendar, i.e. changes an event's organizer.
     *
     * @alias calendar.events.move
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.calendarId - Calendar identifier of the source calendar where the event currently is on.
     * @param  {string} params.destination - Calendar identifier of the target calendar where the event is to be moved to.
     * @param  {string} params.eventId - Event identifier.
     * @param  {boolean=} params.sendNotifications - Whether to send notifications about the change of the event's organizer. Optional. The default is False.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    move: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}/move',
          method: 'POST'
        },
        params: params,
        requiredParams: ['calendarId', 'eventId', 'destination'],
        pathParams: ['calendarId', 'eventId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * calendar.events.patch
     *
     * @desc Updates an event. This method supports patch semantics.
     *
     * @alias calendar.events.patch
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.alwaysIncludeEmail - Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
     * @param  {string} params.calendarId - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param  {string} params.eventId - Event identifier.
     * @param  {integer=} params.maxAttendees - The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
     * @param  {boolean=} params.sendNotifications - Whether to send notifications about the event update (e.g. attendee's responses, title changes, etc.). Optional. The default is False.
     * @param  {boolean=} params.supportsAttachments - Whether API client performing operation supports event attachments. Optional. The default is False.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['calendarId', 'eventId'],
        pathParams: ['calendarId', 'eventId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * calendar.events.quickAdd
     *
     * @desc Creates an event based on a simple text string.
     *
     * @alias calendar.events.quickAdd
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.calendarId - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param  {boolean=} params.sendNotifications - Whether to send notifications about the creation of the event. Optional. The default is False.
     * @param  {string} params.text - The text describing the event to be created.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    quickAdd: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/quickAdd',
          method: 'POST'
        },
        params: params,
        requiredParams: ['calendarId', 'text'],
        pathParams: ['calendarId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * calendar.events.update
     *
     * @desc Updates an event.
     *
     * @alias calendar.events.update
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.alwaysIncludeEmail - Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
     * @param  {string} params.calendarId - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param  {string} params.eventId - Event identifier.
     * @param  {integer=} params.maxAttendees - The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
     * @param  {boolean=} params.sendNotifications - Whether to send notifications about the event update (e.g. attendee's responses, title changes, etc.). Optional. The default is False.
     * @param  {boolean=} params.supportsAttachments - Whether API client performing operation supports event attachments. Optional. The default is False.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['calendarId', 'eventId'],
        pathParams: ['calendarId', 'eventId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * calendar.events.watch
     *
     * @desc Watch for changes to Events resources.
     *
     * @alias calendar.events.watch
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.alwaysIncludeEmail - Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
     * @param  {string} params.calendarId - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param  {string=} params.iCalUID - Specifies event ID in the iCalendar format to be included in the response. Optional.
     * @param  {integer=} params.maxAttendees - The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
     * @param  {integer=} params.maxResults - Maximum number of events returned on one result page. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
     * @param  {string=} params.orderBy - The order of the events returned in the result. Optional. The default is an unspecified, stable order.
     * @param  {string=} params.pageToken - Token specifying which result page to return. Optional.
     * @param  {string=} params.privateExtendedProperty - Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints.
     * @param  {string=} params.q - Free text search terms to find events that match these terms in any field, except for extended properties. Optional.
     * @param  {string=} params.sharedExtendedProperty - Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints.
     * @param  {boolean=} params.showDeleted - Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False.
     * @param  {boolean=} params.showHiddenInvitations - Whether to include hidden invitations in the result. Optional. The default is False.
     * @param  {boolean=} params.singleEvents - Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False.
     * @param  {string=} params.syncToken - Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False. There are several query parameters that cannot be specified together with nextSyncToken to ensure consistency of the client state.  These are:  - iCalUID  - orderBy  - privateExtendedProperty  - q  - sharedExtendedProperty  - timeMin  - timeMax  - updatedMin If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken. Learn more about incremental synchronization. Optional. The default is to return all entries.
     * @param  {string=} params.timeMax - Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, e.g., 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but will be ignored.
     * @param  {string=} params.timeMin - Lower bound (inclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, e.g., 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but will be ignored.
     * @param  {string=} params.timeZone - Time zone used in the response. Optional. The default is the time zone of the calendar.
     * @param  {string=} params.updatedMin - Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    watch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/watch',
          method: 'POST'
        },
        params: params,
        requiredParams: ['calendarId'],
        pathParams: ['calendarId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.freebusy = {

    /**
     * calendar.freebusy.query
     *
     * @desc Returns free/busy information for a set of calendars.
     *
     * @alias calendar.freebusy.query
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    query: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/freeBusy',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.settings = {

    /**
     * calendar.settings.get
     *
     * @desc Returns a single user setting.
     *
     * @alias calendar.settings.get
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.setting - The id of the user setting.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/users/me/settings/{setting}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['setting'],
        pathParams: ['setting'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * calendar.settings.list
     *
     * @desc Returns all user settings for the authenticated user.
     *
     * @alias calendar.settings.list
     * @memberOf! calendar(v3)
     *
     * @param  {object=} params - Parameters for request
     * @param  {integer=} params.maxResults - Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
     * @param  {string=} params.pageToken - Token specifying which result page to return. Optional.
     * @param  {string=} params.syncToken - Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken. Learn more about incremental synchronization. Optional. The default is to return all entries.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/users/me/settings',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * calendar.settings.watch
     *
     * @desc Watch for changes to Settings resources.
     *
     * @alias calendar.settings.watch
     * @memberOf! calendar(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults - Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
     * @param  {string=} params.pageToken - Token specifying which result page to return. Optional.
     * @param  {string=} params.syncToken - Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken. Learn more about incremental synchronization. Optional. The default is to return all entries.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    watch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/calendar/v3/users/me/settings/watch',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Calendar object
 * @type Calendar
 */
module.exports = Calendar;