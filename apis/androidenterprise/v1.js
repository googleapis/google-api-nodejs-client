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
 * Google Play MDM API
 *
 * @classdesc Allows MDMs/EMMs and enterprises to manage the deployment of apps to Android for Work users.
 * @namespace androidenterprise
 * @version  v1
 * @variation v1
 * @this Androidenterprise
 * @param {object=} options Options for Androidenterprise
 */
function Androidenterprise(options) {

  var self = this;
  this._options = options || {};

  this.collections = {

    /**
     * androidenterprise.collections.delete
     *
     * @desc Deletes a collection.
     *
     * @alias androidenterprise.collections.delete
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.collectionId - The ID of the collection.
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/collections/{collectionId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['enterpriseId', 'collectionId'],
        pathParams: ['collectionId', 'enterpriseId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidenterprise.collections.get
     *
     * @desc Retrieves the details of a collection.
     *
     * @alias androidenterprise.collections.get
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.collectionId - The ID of the collection.
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/collections/{collectionId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['enterpriseId', 'collectionId'],
        pathParams: ['collectionId', 'enterpriseId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidenterprise.collections.insert
     *
     * @desc Creates a new collection.
     *
     * @alias androidenterprise.collections.insert
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/collections',
          method: 'POST'
        },
        params: params,
        requiredParams: ['enterpriseId'],
        pathParams: ['enterpriseId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidenterprise.collections.list
     *
     * @desc Retrieves the IDs of all the collections for an enterprise.
     *
     * @alias androidenterprise.collections.list
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/collections',
          method: 'GET'
        },
        params: params,
        requiredParams: ['enterpriseId'],
        pathParams: ['enterpriseId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidenterprise.collections.patch
     *
     * @desc Updates a collection. This method supports patch semantics.
     *
     * @alias androidenterprise.collections.patch
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.collectionId - The ID of the collection.
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/collections/{collectionId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['enterpriseId', 'collectionId'],
        pathParams: ['collectionId', 'enterpriseId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidenterprise.collections.update
     *
     * @desc Updates a collection.
     *
     * @alias androidenterprise.collections.update
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.collectionId - The ID of the collection.
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/collections/{collectionId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['enterpriseId', 'collectionId'],
        pathParams: ['collectionId', 'enterpriseId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.collectionviewers = {

    /**
     * androidenterprise.collectionviewers.delete
     *
     * @desc Removes the user from the list of those specifically allowed to see the collection. If the collection's visibility is set to viewersOnly then only such users will see the collection.
     *
     * @alias androidenterprise.collectionviewers.delete
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.collectionId - The ID of the collection.
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {string} params.userId - The ID of the user.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/collections/{collectionId}/users/{userId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['enterpriseId', 'collectionId', 'userId'],
        pathParams: ['collectionId', 'enterpriseId', 'userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidenterprise.collectionviewers.get
     *
     * @desc Retrieves the ID of the user if they have been specifically allowed to see the collection. If the collection's visibility is set to viewersOnly then only these users will see the collection.
     *
     * @alias androidenterprise.collectionviewers.get
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.collectionId - The ID of the collection.
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {string} params.userId - The ID of the user.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/collections/{collectionId}/users/{userId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['enterpriseId', 'collectionId', 'userId'],
        pathParams: ['collectionId', 'enterpriseId', 'userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidenterprise.collectionviewers.list
     *
     * @desc Retrieves the IDs of the users who have been specifically allowed to see the collection. If the collection's visibility is set to viewersOnly then only these users will see the collection.
     *
     * @alias androidenterprise.collectionviewers.list
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.collectionId - The ID of the collection.
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/collections/{collectionId}/users',
          method: 'GET'
        },
        params: params,
        requiredParams: ['enterpriseId', 'collectionId'],
        pathParams: ['collectionId', 'enterpriseId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidenterprise.collectionviewers.patch
     *
     * @desc Adds the user to the list of those specifically allowed to see the collection. If the collection's visibility is set to viewersOnly then only such users will see the collection. This method supports patch semantics.
     *
     * @alias androidenterprise.collectionviewers.patch
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.collectionId - The ID of the collection.
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {string} params.userId - The ID of the user.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/collections/{collectionId}/users/{userId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['enterpriseId', 'collectionId', 'userId'],
        pathParams: ['collectionId', 'enterpriseId', 'userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidenterprise.collectionviewers.update
     *
     * @desc Adds the user to the list of those specifically allowed to see the collection. If the collection's visibility is set to viewersOnly then only such users will see the collection.
     *
     * @alias androidenterprise.collectionviewers.update
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.collectionId - The ID of the collection.
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {string} params.userId - The ID of the user.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/collections/{collectionId}/users/{userId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['enterpriseId', 'collectionId', 'userId'],
        pathParams: ['collectionId', 'enterpriseId', 'userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.devices = {

    /**
     * androidenterprise.devices.get
     *
     * @desc Retrieves the details of a device.
     *
     * @alias androidenterprise.devices.get
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.deviceId - The ID of the device.
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {string} params.userId - The ID of the user.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['enterpriseId', 'userId', 'deviceId'],
        pathParams: ['deviceId', 'enterpriseId', 'userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidenterprise.devices.getState
     *
     * @desc Retrieves whether a device is enabled or disabled for access by the user to Google services. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services.
     *
     * @alias androidenterprise.devices.getState
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.deviceId - The ID of the device.
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {string} params.userId - The ID of the user.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getState: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/state',
          method: 'GET'
        },
        params: params,
        requiredParams: ['enterpriseId', 'userId', 'deviceId'],
        pathParams: ['deviceId', 'enterpriseId', 'userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidenterprise.devices.list
     *
     * @desc Retrieves the IDs of all of a user's devices.
     *
     * @alias androidenterprise.devices.list
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {string} params.userId - The ID of the user.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices',
          method: 'GET'
        },
        params: params,
        requiredParams: ['enterpriseId', 'userId'],
        pathParams: ['enterpriseId', 'userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidenterprise.devices.setState
     *
     * @desc Sets whether a device is enabled or disabled for access by the user to Google services. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services.
     *
     * @alias androidenterprise.devices.setState
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.deviceId - The ID of the device.
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {string} params.userId - The ID of the user.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    setState: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/state',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['enterpriseId', 'userId', 'deviceId'],
        pathParams: ['deviceId', 'enterpriseId', 'userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.enterprises = {

    /**
     * androidenterprise.enterprises.delete
     *
     * @desc Deletes the binding between the MDM and enterprise. This is now deprecated; use this to unenroll customers that were previously enrolled with the 'insert' call, then enroll them again with the 'enroll' call.
     *
     * @alias androidenterprise.enterprises.delete
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['enterpriseId'],
        pathParams: ['enterpriseId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidenterprise.enterprises.enroll
     *
     * @desc Enrolls an enterprise with the calling MDM.
     *
     * @alias androidenterprise.enterprises.enroll
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.token - The token provided by the enterprise to register the MDM.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    enroll: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/enroll',
          method: 'POST'
        },
        params: params,
        requiredParams: ['token'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidenterprise.enterprises.get
     *
     * @desc Retrieves the name and domain of an enterprise.
     *
     * @alias androidenterprise.enterprises.get
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['enterpriseId'],
        pathParams: ['enterpriseId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidenterprise.enterprises.insert
     *
     * @desc Establishes the binding between the MDM and an enterprise. This is now deprecated; use enroll instead.
     *
     * @alias androidenterprise.enterprises.insert
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.token - The token provided by the enterprise to register the MDM.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises',
          method: 'POST'
        },
        params: params,
        requiredParams: ['token'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidenterprise.enterprises.list
     *
     * @desc Looks up an enterprise by domain name.
     *
     * @alias androidenterprise.enterprises.list
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.domain - The exact primary domain name of the enterprise to look up.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises',
          method: 'GET'
        },
        params: params,
        requiredParams: ['domain'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidenterprise.enterprises.setAccount
     *
     * @desc Set the account that will be used to authenticate to the API as the enterprise.
     *
     * @alias androidenterprise.enterprises.setAccount
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    setAccount: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/account',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['enterpriseId'],
        pathParams: ['enterpriseId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidenterprise.enterprises.unenroll
     *
     * @desc Unenrolls an enterprise from the calling MDM.
     *
     * @alias androidenterprise.enterprises.unenroll
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    unenroll: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/unenroll',
          method: 'POST'
        },
        params: params,
        requiredParams: ['enterpriseId'],
        pathParams: ['enterpriseId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.entitlements = {

    /**
     * androidenterprise.entitlements.delete
     *
     * @desc Removes an entitlement to an app for a user and uninstalls it.
     *
     * @alias androidenterprise.entitlements.delete
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {string} params.entitlementId - The ID of the entitlement, e.g. "app:com.google.android.gm".
     * @param  {string} params.userId - The ID of the user.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['enterpriseId', 'userId', 'entitlementId'],
        pathParams: ['enterpriseId', 'entitlementId', 'userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidenterprise.entitlements.get
     *
     * @desc Retrieves details of an entitlement.
     *
     * @alias androidenterprise.entitlements.get
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {string} params.entitlementId - The ID of the entitlement, e.g. "app:com.google.android.gm".
     * @param  {string} params.userId - The ID of the user.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['enterpriseId', 'userId', 'entitlementId'],
        pathParams: ['enterpriseId', 'entitlementId', 'userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidenterprise.entitlements.list
     *
     * @desc List of all entitlements for the specified user. Only the ID is set.
     *
     * @alias androidenterprise.entitlements.list
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {string} params.userId - The ID of the user.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements',
          method: 'GET'
        },
        params: params,
        requiredParams: ['enterpriseId', 'userId'],
        pathParams: ['enterpriseId', 'userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidenterprise.entitlements.patch
     *
     * @desc Adds or updates an entitlement to an app for a user. This method supports patch semantics.
     *
     * @alias androidenterprise.entitlements.patch
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {string} params.entitlementId - The ID of the entitlement, e.g. "app:com.google.android.gm".
     * @param  {boolean=} params.install - Set to true to also install the product on all the user's devices where possible. Failure to install on one or more devices will not prevent this operation from returning successfully, as long as the entitlement was successfully assigned to the user.
     * @param  {string} params.userId - The ID of the user.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['enterpriseId', 'userId', 'entitlementId'],
        pathParams: ['enterpriseId', 'entitlementId', 'userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidenterprise.entitlements.update
     *
     * @desc Adds or updates an entitlement to an app for a user.
     *
     * @alias androidenterprise.entitlements.update
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {string} params.entitlementId - The ID of the entitlement, e.g. "app:com.google.android.gm".
     * @param  {boolean=} params.install - Set to true to also install the product on all the user's devices where possible. Failure to install on one or more devices will not prevent this operation from returning successfully, as long as the entitlement was successfully assigned to the user.
     * @param  {string} params.userId - The ID of the user.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['enterpriseId', 'userId', 'entitlementId'],
        pathParams: ['enterpriseId', 'entitlementId', 'userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.grouplicenses = {

    /**
     * androidenterprise.grouplicenses.get
     *
     * @desc Retrieves details of an enterprise's group license for a product.
     *
     * @alias androidenterprise.grouplicenses.get
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {string} params.groupLicenseId - The ID of the product the group license is for, e.g. "app:com.google.android.gm".
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses/{groupLicenseId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['enterpriseId', 'groupLicenseId'],
        pathParams: ['enterpriseId', 'groupLicenseId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidenterprise.grouplicenses.list
     *
     * @desc Retrieves IDs of all products for which the enterprise has a group license.
     *
     * @alias androidenterprise.grouplicenses.list
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses',
          method: 'GET'
        },
        params: params,
        requiredParams: ['enterpriseId'],
        pathParams: ['enterpriseId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.grouplicenseusers = {

    /**
     * androidenterprise.grouplicenseusers.list
     *
     * @desc Retrieves the IDs of the users who have been granted entitlements under the license.
     *
     * @alias androidenterprise.grouplicenseusers.list
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {string} params.groupLicenseId - The ID of the product the group license is for, e.g. "app:com.google.android.gm".
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses/{groupLicenseId}/users',
          method: 'GET'
        },
        params: params,
        requiredParams: ['enterpriseId', 'groupLicenseId'],
        pathParams: ['enterpriseId', 'groupLicenseId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.installs = {

    /**
     * androidenterprise.installs.delete
     *
     * @desc Requests to remove an app from a device. A call to get or list will still show the app as installed on the device until it is actually removed.
     *
     * @alias androidenterprise.installs.delete
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.deviceId - The Android ID of the device.
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {string} params.installId - The ID of the product represented by the install, e.g. "app:com.google.android.gm".
     * @param  {string} params.userId - The ID of the user.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['enterpriseId', 'userId', 'deviceId', 'installId'],
        pathParams: ['deviceId', 'enterpriseId', 'installId', 'userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidenterprise.installs.get
     *
     * @desc Retrieves details of an installation of an app on a device.
     *
     * @alias androidenterprise.installs.get
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.deviceId - The Android ID of the device.
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {string} params.installId - The ID of the product represented by the install, e.g. "app:com.google.android.gm".
     * @param  {string} params.userId - The ID of the user.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['enterpriseId', 'userId', 'deviceId', 'installId'],
        pathParams: ['deviceId', 'enterpriseId', 'installId', 'userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidenterprise.installs.list
     *
     * @desc Retrieves the details of all apps installed on the specified device.
     *
     * @alias androidenterprise.installs.list
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.deviceId - The Android ID of the device.
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {string} params.userId - The ID of the user.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs',
          method: 'GET'
        },
        params: params,
        requiredParams: ['enterpriseId', 'userId', 'deviceId'],
        pathParams: ['deviceId', 'enterpriseId', 'userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidenterprise.installs.patch
     *
     * @desc Requests to install the latest version of an app to a device. If the app is already installed then it is updated to the latest version if necessary. This method supports patch semantics.
     *
     * @alias androidenterprise.installs.patch
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.deviceId - The Android ID of the device.
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {string} params.installId - The ID of the product represented by the install, e.g. "app:com.google.android.gm".
     * @param  {string} params.userId - The ID of the user.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['enterpriseId', 'userId', 'deviceId', 'installId'],
        pathParams: ['deviceId', 'enterpriseId', 'installId', 'userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidenterprise.installs.update
     *
     * @desc Requests to install the latest version of an app to a device. If the app is already installed then it is updated to the latest version if necessary.
     *
     * @alias androidenterprise.installs.update
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.deviceId - The Android ID of the device.
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {string} params.installId - The ID of the product represented by the install, e.g. "app:com.google.android.gm".
     * @param  {string} params.userId - The ID of the user.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['enterpriseId', 'userId', 'deviceId', 'installId'],
        pathParams: ['deviceId', 'enterpriseId', 'installId', 'userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.permissions = {

    /**
     * androidenterprise.permissions.get
     *
     * @desc Retrieves details of an Android app permission for display to an enterprise admin.
     *
     * @alias androidenterprise.permissions.get
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.language - The BCP47 tag for the user's preferred language (e.g. "en-US", "de")
     * @param  {string} params.permissionId - The ID of the permission.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/permissions/{permissionId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['permissionId'],
        pathParams: ['permissionId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.products = {

    /**
     * androidenterprise.products.get
     *
     * @desc Retrieves details of a product for display to an enterprise admin.
     *
     * @alias androidenterprise.products.get
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {string=} params.language - The BCP47 tag for the user's preferred language (e.g. "en-US", "de").
     * @param  {string} params.productId - The ID of the product, e.g. "app:com.google.android.gm".
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['enterpriseId', 'productId'],
        pathParams: ['enterpriseId', 'productId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidenterprise.products.getAppRestrictionsSchema
     *
     * @desc Retrieves the schema defining app restrictions configurable for this product. All products have a schema, but this may be empty if no app restrictions are defined.
     *
     * @alias androidenterprise.products.getAppRestrictionsSchema
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {string=} params.language - The BCP47 tag for the user's preferred language (e.g. "en-US", "de").
     * @param  {string} params.productId - The ID of the product.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getAppRestrictionsSchema: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/appRestrictionsSchema',
          method: 'GET'
        },
        params: params,
        requiredParams: ['enterpriseId', 'productId'],
        pathParams: ['enterpriseId', 'productId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidenterprise.products.getPermissions
     *
     * @desc Retrieves the Android app permissions required by this app.
     *
     * @alias androidenterprise.products.getPermissions
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {string} params.productId - The ID of the product.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getPermissions: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/permissions',
          method: 'GET'
        },
        params: params,
        requiredParams: ['enterpriseId', 'productId'],
        pathParams: ['enterpriseId', 'productId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidenterprise.products.updatePermissions
     *
     * @desc Updates the set of Android app permissions for this app that have been accepted by the enterprise.
     *
     * @alias androidenterprise.products.updatePermissions
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {string} params.productId - The ID of the product.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    updatePermissions: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/permissions',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['enterpriseId', 'productId'],
        pathParams: ['enterpriseId', 'productId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.users = {

    /**
     * androidenterprise.users.generateToken
     *
     * @desc Generates a token (activation code) to allow this user to configure their work account in the Android Setup Wizard. Revokes any previously generated token.
     *
     * @alias androidenterprise.users.generateToken
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {string} params.userId - The ID of the user.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    generateToken: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/token',
          method: 'POST'
        },
        params: params,
        requiredParams: ['enterpriseId', 'userId'],
        pathParams: ['enterpriseId', 'userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidenterprise.users.get
     *
     * @desc Retrieves a user's details.
     *
     * @alias androidenterprise.users.get
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {string} params.userId - The ID of the user.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['enterpriseId', 'userId'],
        pathParams: ['enterpriseId', 'userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidenterprise.users.list
     *
     * @desc Looks up a user by email address.
     *
     * @alias androidenterprise.users.list
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.email - The exact primary email address of the user to look up.
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users',
          method: 'GET'
        },
        params: params,
        requiredParams: ['enterpriseId', 'email'],
        pathParams: ['enterpriseId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidenterprise.users.revokeToken
     *
     * @desc Revokes a previously generated token (activation code) for the user.
     *
     * @alias androidenterprise.users.revokeToken
     * @memberOf! androidenterprise(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.enterpriseId - The ID of the enterprise.
     * @param  {string} params.userId - The ID of the user.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    revokeToken: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/token',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['enterpriseId', 'userId'],
        pathParams: ['enterpriseId', 'userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Androidenterprise object
 * @type Androidenterprise
 */
module.exports = Androidenterprise;