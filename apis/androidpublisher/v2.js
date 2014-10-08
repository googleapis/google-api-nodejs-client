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
 * Google Play Android Developer API
 *
 * @classdesc Lets Android application developers access their Google Play accounts.
 * @namespace androidpublisher
 * @version  v2
 * @variation v2
 * @this Androidpublisher
 * @param {object=} options Options for Androidpublisher
 */
function Androidpublisher(options) {

  var self = this;
  this._options = options || {};

  this.edits = {

    /**
     * androidpublisher.edits.commit
     *
     * @desc Commits/applies the changes made in this edit back to the app.
     *
     * @alias androidpublisher.edits.commit
     * @memberOf! androidpublisher(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.editId - Unique identifier for this edit.
     * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    commit: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}:commit',
          method: 'POST'
        },
        params: params,
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidpublisher.edits.delete
     *
     * @desc Deletes an edit for an app. Creating a new edit will automatically delete any of your previous edits so this method need only be called if you want to preemptively abandon an edit.
     *
     * @alias androidpublisher.edits.delete
     * @memberOf! androidpublisher(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.editId - Unique identifier for this edit.
     * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidpublisher.edits.get
     *
     * @desc Returns information about the edit specified. Calls will fail if the edit is no long active (e.g. has been deleted, superseded or expired).
     *
     * @alias androidpublisher.edits.get
     * @memberOf! androidpublisher(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.editId - Unique identifier for this edit.
     * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidpublisher.edits.insert
     *
     * @desc Creates a new edit for an app, populated with the app's current state.
     *
     * @alias androidpublisher.edits.insert
     * @memberOf! androidpublisher(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits',
          method: 'POST'
        },
        params: params,
        requiredParams: ['packageName'],
        pathParams: ['packageName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidpublisher.edits.validate
     *
     * @desc Checks that the edit can be successfully committed. The edit's changes are not applied to the live app.
     *
     * @alias androidpublisher.edits.validate
     * @memberOf! androidpublisher(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.editId - Unique identifier for this edit.
     * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    validate: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}:validate',
          method: 'POST'
        },
        params: params,
        requiredParams: ['packageName', 'editId'],
        pathParams: ['editId', 'packageName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    apklistings: {

      /**
       * androidpublisher.edits.apklistings.delete
       *
       * @desc Deletes the APK-specific localized listing for a specified APK and language code.
       *
       * @alias androidpublisher.edits.apklistings.delete
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {integer} params.apkVersionCode - The APK version code whose APK-specific listings should be read or modified.
       * @param  {string} params.editId - Unique identifier for this edit.
       * @param  {string} params.language - The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
       * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/listings/{language}',
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['packageName', 'editId', 'apkVersionCode', 'language'],
          pathParams: ['apkVersionCode', 'editId', 'language', 'packageName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androidpublisher.edits.apklistings.deleteall
       *
       * @desc Deletes all the APK-specific localized listings for a specified APK.
       *
       * @alias androidpublisher.edits.apklistings.deleteall
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {integer} params.apkVersionCode - The APK version code whose APK-specific listings should be read or modified.
       * @param  {string} params.editId - Unique identifier for this edit.
       * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      deleteall: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/listings',
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['packageName', 'editId', 'apkVersionCode'],
          pathParams: ['apkVersionCode', 'editId', 'packageName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androidpublisher.edits.apklistings.get
       *
       * @desc Fetches the APK-specific localized listing for a specified APK and language code.
       *
       * @alias androidpublisher.edits.apklistings.get
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {integer} params.apkVersionCode - The APK version code whose APK-specific listings should be read or modified.
       * @param  {string} params.editId - Unique identifier for this edit.
       * @param  {string} params.language - The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
       * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/listings/{language}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['packageName', 'editId', 'apkVersionCode', 'language'],
          pathParams: ['apkVersionCode', 'editId', 'language', 'packageName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androidpublisher.edits.apklistings.list
       *
       * @desc Lists all the APK-specific localized listings for a specified APK.
       *
       * @alias androidpublisher.edits.apklistings.list
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {integer} params.apkVersionCode - The APK version code whose APK-specific listings should be read or modified.
       * @param  {string} params.editId - Unique identifier for this edit.
       * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/listings',
            method: 'GET'
          },
          params: params,
          requiredParams: ['packageName', 'editId', 'apkVersionCode'],
          pathParams: ['apkVersionCode', 'editId', 'packageName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androidpublisher.edits.apklistings.patch
       *
       * @desc Updates or creates the APK-specific localized listing for a specified APK and language code. This method supports patch semantics.
       *
       * @alias androidpublisher.edits.apklistings.patch
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {integer} params.apkVersionCode - The APK version code whose APK-specific listings should be read or modified.
       * @param  {string} params.editId - Unique identifier for this edit.
       * @param  {string} params.language - The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
       * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      patch: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/listings/{language}',
            method: 'PATCH'
          },
          params: params,
          requiredParams: ['packageName', 'editId', 'apkVersionCode', 'language'],
          pathParams: ['apkVersionCode', 'editId', 'language', 'packageName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androidpublisher.edits.apklistings.update
       *
       * @desc Updates or creates the APK-specific localized listing for a specified APK and language code.
       *
       * @alias androidpublisher.edits.apklistings.update
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {integer} params.apkVersionCode - The APK version code whose APK-specific listings should be read or modified.
       * @param  {string} params.editId - Unique identifier for this edit.
       * @param  {string} params.language - The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
       * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      update: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/listings/{language}',
            method: 'PUT'
          },
          params: params,
          requiredParams: ['packageName', 'editId', 'apkVersionCode', 'language'],
          pathParams: ['apkVersionCode', 'editId', 'language', 'packageName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    apks: {

      /**
       * androidpublisher.edits.apks.list
       *
       *
       *
       * @alias androidpublisher.edits.apks.list
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.editId - Unique identifier for this edit.
       * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks',
            method: 'GET'
          },
          params: params,
          requiredParams: ['packageName', 'editId'],
          pathParams: ['editId', 'packageName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androidpublisher.edits.apks.upload
       *
       *
       *
       * @alias androidpublisher.edits.apks.upload
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.editId - Unique identifier for this edit.
       * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
       * @param  {object} params.media - Media object
       * @param  {string} params.media.mimeType - Media mime-type
       * @param  {string|object} params.media.body - Media body contents
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      upload: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks',
            method: 'POST'
          },
          params: params,
          mediaUrl: 'https://www.googleapis.com/upload/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks',
          requiredParams: ['packageName', 'editId'],
          pathParams: ['editId', 'packageName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    details: {

      /**
       * androidpublisher.edits.details.get
       *
       * @desc Fetches app details for this edit. This includes the default language and developer support contact information.
       *
       * @alias androidpublisher.edits.details.get
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.editId - Unique identifier for this edit.
       * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/details',
            method: 'GET'
          },
          params: params,
          requiredParams: ['packageName', 'editId'],
          pathParams: ['editId', 'packageName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androidpublisher.edits.details.patch
       *
       * @desc Updates app details for this edit. This method supports patch semantics.
       *
       * @alias androidpublisher.edits.details.patch
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.editId - Unique identifier for this edit.
       * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      patch: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/details',
            method: 'PATCH'
          },
          params: params,
          requiredParams: ['packageName', 'editId'],
          pathParams: ['editId', 'packageName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androidpublisher.edits.details.update
       *
       * @desc Updates app details for this edit.
       *
       * @alias androidpublisher.edits.details.update
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.editId - Unique identifier for this edit.
       * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      update: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/details',
            method: 'PUT'
          },
          params: params,
          requiredParams: ['packageName', 'editId'],
          pathParams: ['editId', 'packageName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    expansionfiles: {

      /**
       * androidpublisher.edits.expansionfiles.get
       *
       * @desc Fetches the Expansion File configuration for the APK specified.
       *
       * @alias androidpublisher.edits.expansionfiles.get
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {integer} params.apkVersionCode - The version code of the APK whose Expansion File configuration is being read or modified.
       * @param  {string} params.editId - Unique identifier for this edit.
       * @param  {string} params.expansionFileType -
       * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['packageName', 'editId', 'apkVersionCode', 'expansionFileType'],
          pathParams: ['apkVersionCode', 'editId', 'expansionFileType', 'packageName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androidpublisher.edits.expansionfiles.patch
       *
       * @desc Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method. This method supports patch semantics.
       *
       * @alias androidpublisher.edits.expansionfiles.patch
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {integer} params.apkVersionCode - The version code of the APK whose Expansion File configuration is being read or modified.
       * @param  {string} params.editId - Unique identifier for this edit.
       * @param  {string} params.expansionFileType -
       * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      patch: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}',
            method: 'PATCH'
          },
          params: params,
          requiredParams: ['packageName', 'editId', 'apkVersionCode', 'expansionFileType'],
          pathParams: ['apkVersionCode', 'editId', 'expansionFileType', 'packageName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androidpublisher.edits.expansionfiles.update
       *
       * @desc Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method.
       *
       * @alias androidpublisher.edits.expansionfiles.update
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {integer} params.apkVersionCode - The version code of the APK whose Expansion File configuration is being read or modified.
       * @param  {string} params.editId - Unique identifier for this edit.
       * @param  {string} params.expansionFileType -
       * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      update: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}',
            method: 'PUT'
          },
          params: params,
          requiredParams: ['packageName', 'editId', 'apkVersionCode', 'expansionFileType'],
          pathParams: ['apkVersionCode', 'editId', 'expansionFileType', 'packageName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androidpublisher.edits.expansionfiles.upload
       *
       * @desc Uploads and attaches a new Expansion File to the APK specified.
       *
       * @alias androidpublisher.edits.expansionfiles.upload
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {integer} params.apkVersionCode - The version code of the APK whose Expansion File configuration is being read or modified.
       * @param  {string} params.editId - Unique identifier for this edit.
       * @param  {string} params.expansionFileType -
       * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
       * @param  {object} params.media - Media object
       * @param  {string} params.media.mimeType - Media mime-type
       * @param  {string|object} params.media.body - Media body contents
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      upload: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}',
            method: 'POST'
          },
          params: params,
          mediaUrl: 'https://www.googleapis.com/upload/androidpublisher/v2/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}',
          requiredParams: ['packageName', 'editId', 'apkVersionCode', 'expansionFileType'],
          pathParams: ['apkVersionCode', 'editId', 'expansionFileType', 'packageName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    images: {

      /**
       * androidpublisher.edits.images.delete
       *
       * @desc Deletes the image (specified by id) from the edit.
       *
       * @alias androidpublisher.edits.images.delete
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.editId - Unique identifier for this edit.
       * @param  {string} params.imageId - Unique identifier an image within the set of images attached to this edit.
       * @param  {string} params.imageType -
       * @param  {string} params.language - The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
       * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}/{imageId}',
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['packageName', 'editId', 'language', 'imageType', 'imageId'],
          pathParams: ['editId', 'imageId', 'imageType', 'language', 'packageName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androidpublisher.edits.images.deleteall
       *
       * @desc Deletes all images for the specified language and image type.
       *
       * @alias androidpublisher.edits.images.deleteall
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.editId - Unique identifier for this edit.
       * @param  {string} params.imageType -
       * @param  {string} params.language - The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
       * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      deleteall: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}',
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['packageName', 'editId', 'language', 'imageType'],
          pathParams: ['editId', 'imageType', 'language', 'packageName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androidpublisher.edits.images.list
       *
       * @desc Lists all images for the specified language and image type.
       *
       * @alias androidpublisher.edits.images.list
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.editId - Unique identifier for this edit.
       * @param  {string} params.imageType -
       * @param  {string} params.language - The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
       * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['packageName', 'editId', 'language', 'imageType'],
          pathParams: ['editId', 'imageType', 'language', 'packageName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androidpublisher.edits.images.upload
       *
       * @desc Uploads a new image and adds it to the list of images for the specified language and image type.
       *
       * @alias androidpublisher.edits.images.upload
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.editId - Unique identifier for this edit.
       * @param  {string} params.imageType -
       * @param  {string} params.language - The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
       * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
       * @param  {object} params.media - Media object
       * @param  {string} params.media.mimeType - Media mime-type
       * @param  {string|object} params.media.body - Media body contents
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      upload: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}',
            method: 'POST'
          },
          params: params,
          mediaUrl: 'https://www.googleapis.com/upload/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}',
          requiredParams: ['packageName', 'editId', 'language', 'imageType'],
          pathParams: ['editId', 'imageType', 'language', 'packageName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    listings: {

      /**
       * androidpublisher.edits.listings.delete
       *
       * @desc Deletes the specified localized store listing from an edit.
       *
       * @alias androidpublisher.edits.listings.delete
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.editId - Unique identifier for this edit.
       * @param  {string} params.language - The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
       * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}',
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['packageName', 'editId', 'language'],
          pathParams: ['editId', 'language', 'packageName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androidpublisher.edits.listings.deleteall
       *
       * @desc Deletes all localized listings from an edit.
       *
       * @alias androidpublisher.edits.listings.deleteall
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.editId - Unique identifier for this edit.
       * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      deleteall: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings',
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['packageName', 'editId'],
          pathParams: ['editId', 'packageName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androidpublisher.edits.listings.get
       *
       * @desc Fetches information about a localized store listing.
       *
       * @alias androidpublisher.edits.listings.get
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.editId - Unique identifier for this edit.
       * @param  {string} params.language - The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
       * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['packageName', 'editId', 'language'],
          pathParams: ['editId', 'language', 'packageName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androidpublisher.edits.listings.list
       *
       * @desc Returns all of the localized store listings attached to this edit.
       *
       * @alias androidpublisher.edits.listings.list
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.editId - Unique identifier for this edit.
       * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings',
            method: 'GET'
          },
          params: params,
          requiredParams: ['packageName', 'editId'],
          pathParams: ['editId', 'packageName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androidpublisher.edits.listings.patch
       *
       * @desc Creates or updates a localized store listing. This method supports patch semantics.
       *
       * @alias androidpublisher.edits.listings.patch
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.editId - Unique identifier for this edit.
       * @param  {string} params.language - The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
       * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      patch: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}',
            method: 'PATCH'
          },
          params: params,
          requiredParams: ['packageName', 'editId', 'language'],
          pathParams: ['editId', 'language', 'packageName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androidpublisher.edits.listings.update
       *
       * @desc Creates or updates a localized store listing.
       *
       * @alias androidpublisher.edits.listings.update
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.editId - Unique identifier for this edit.
       * @param  {string} params.language - The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
       * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      update: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/listings/{language}',
            method: 'PUT'
          },
          params: params,
          requiredParams: ['packageName', 'editId', 'language'],
          pathParams: ['editId', 'language', 'packageName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    testers: {

      /**
       * androidpublisher.edits.testers.get
       *
       *
       *
       * @alias androidpublisher.edits.testers.get
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.editId - Unique identifier for this edit.
       * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
       * @param  {string} params.track -
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/testers/{track}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['packageName', 'editId', 'track'],
          pathParams: ['editId', 'packageName', 'track'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androidpublisher.edits.testers.patch
       *
       *
       *
       * @alias androidpublisher.edits.testers.patch
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.editId - Unique identifier for this edit.
       * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
       * @param  {string} params.track -
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      patch: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/testers/{track}',
            method: 'PATCH'
          },
          params: params,
          requiredParams: ['packageName', 'editId', 'track'],
          pathParams: ['editId', 'packageName', 'track'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androidpublisher.edits.testers.update
       *
       *
       *
       * @alias androidpublisher.edits.testers.update
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.editId - Unique identifier for this edit.
       * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
       * @param  {string} params.track -
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      update: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/testers/{track}',
            method: 'PUT'
          },
          params: params,
          requiredParams: ['packageName', 'editId', 'track'],
          pathParams: ['editId', 'packageName', 'track'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    tracks: {

      /**
       * androidpublisher.edits.tracks.get
       *
       * @desc Fetches the track configuration for the specified track type. Includes the APK version codes that are in this track.
       *
       * @alias androidpublisher.edits.tracks.get
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.editId - Unique identifier for this edit.
       * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
       * @param  {string} params.track - The track type to read or modify.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/tracks/{track}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['packageName', 'editId', 'track'],
          pathParams: ['editId', 'packageName', 'track'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androidpublisher.edits.tracks.list
       *
       * @desc Lists all the track configurations for this edit.
       *
       * @alias androidpublisher.edits.tracks.list
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.editId - Unique identifier for this edit.
       * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/tracks',
            method: 'GET'
          },
          params: params,
          requiredParams: ['packageName', 'editId'],
          pathParams: ['editId', 'packageName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androidpublisher.edits.tracks.patch
       *
       * @desc Updates the track configuration for the specified track type. This method supports patch semantics.
       *
       * @alias androidpublisher.edits.tracks.patch
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.editId - Unique identifier for this edit.
       * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
       * @param  {string} params.track - The track type to read or modify.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      patch: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/tracks/{track}',
            method: 'PATCH'
          },
          params: params,
          requiredParams: ['packageName', 'editId', 'track'],
          pathParams: ['editId', 'packageName', 'track'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androidpublisher.edits.tracks.update
       *
       * @desc Updates the track configuration for the specified track type.
       *
       * @alias androidpublisher.edits.tracks.update
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.editId - Unique identifier for this edit.
       * @param  {string} params.packageName - Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
       * @param  {string} params.track - The track type to read or modify.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      update: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/edits/{editId}/tracks/{track}',
            method: 'PUT'
          },
          params: params,
          requiredParams: ['packageName', 'editId', 'track'],
          pathParams: ['editId', 'packageName', 'track'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  this.inappproducts = {

    /**
     * androidpublisher.inappproducts.batch
     *
     *
     *
     * @alias androidpublisher.inappproducts.batch
     * @memberOf! androidpublisher(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    batch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidpublisher/v2/applications/inappproducts/batch',
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
     * androidpublisher.inappproducts.delete
     *
     * @desc Delete an in-app product for an app.
     *
     * @alias androidpublisher.inappproducts.delete
     * @memberOf! androidpublisher(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.packageName - Unique identifier for the Android app with the in-app product; for example, "com.spiffygame".
     * @param  {string} params.sku - Unique identifier for the in-app product.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/inappproducts/{sku}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['packageName', 'sku'],
        pathParams: ['packageName', 'sku'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidpublisher.inappproducts.get
     *
     * @desc Returns information about the in-app product specified.
     *
     * @alias androidpublisher.inappproducts.get
     * @memberOf! androidpublisher(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.packageName -
     * @param  {string} params.sku - Unique identifier for the in-app product.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/inappproducts/{sku}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['packageName', 'sku'],
        pathParams: ['packageName', 'sku'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidpublisher.inappproducts.insert
     *
     * @desc Creates a new in-app product for an app.
     *
     * @alias androidpublisher.inappproducts.insert
     * @memberOf! androidpublisher(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.autoConvertMissingPrices - If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
     * @param  {string} params.packageName - Unique identifier for the Android app; for example, "com.spiffygame".
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/inappproducts',
          method: 'POST'
        },
        params: params,
        requiredParams: ['packageName'],
        pathParams: ['packageName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidpublisher.inappproducts.list
     *
     * @desc List all the in-app products for an Android app, both subscriptions and managed in-app products..
     *
     * @alias androidpublisher.inappproducts.list
     * @memberOf! androidpublisher(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer=} params.maxResults -
     * @param  {string} params.packageName - Unique identifier for the Android app with in-app products; for example, "com.spiffygame".
     * @param  {integer=} params.startIndex -
     * @param  {string=} params.token -
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/inappproducts',
          method: 'GET'
        },
        params: params,
        requiredParams: ['packageName'],
        pathParams: ['packageName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidpublisher.inappproducts.patch
     *
     * @desc Updates the details of an in-app product. This method supports patch semantics.
     *
     * @alias androidpublisher.inappproducts.patch
     * @memberOf! androidpublisher(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.autoConvertMissingPrices - If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
     * @param  {string} params.packageName - Unique identifier for the Android app with the in-app product; for example, "com.spiffygame".
     * @param  {string} params.sku - Unique identifier for the in-app product.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/inappproducts/{sku}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['packageName', 'sku'],
        pathParams: ['packageName', 'sku'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * androidpublisher.inappproducts.update
     *
     * @desc Updates the details of an in-app product.
     *
     * @alias androidpublisher.inappproducts.update
     * @memberOf! androidpublisher(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {boolean=} params.autoConvertMissingPrices - If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
     * @param  {string} params.packageName - Unique identifier for the Android app with the in-app product; for example, "com.spiffygame".
     * @param  {string} params.sku - Unique identifier for the in-app product.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/inappproducts/{sku}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['packageName', 'sku'],
        pathParams: ['packageName', 'sku'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.purchases = {

    products: {

      /**
       * androidpublisher.purchases.products.get
       *
       * @desc Checks the purchase and consumption status of an inapp item.
       *
       * @alias androidpublisher.purchases.products.get
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.packageName - The package name of the application the inapp product was sold in (for example, 'com.some.thing').
       * @param  {string} params.productId - The inapp product SKU (for example, 'com.some.thing.inapp1').
       * @param  {string} params.token - The token provided to the user's device when the inapp product was purchased.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/purchases/products/{productId}/tokens/{token}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['packageName', 'productId', 'token'],
          pathParams: ['packageName', 'productId', 'token'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    subscriptions: {

      /**
       * androidpublisher.purchases.subscriptions.cancel
       *
       * @desc Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
       *
       * @alias androidpublisher.purchases.subscriptions.cancel
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.packageName - The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
       * @param  {string} params.subscriptionId - The purchased subscription ID (for example, 'monthly001').
       * @param  {string} params.token - The token provided to the user's device when the subscription was purchased.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      cancel: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:cancel',
            method: 'POST'
          },
          params: params,
          requiredParams: ['packageName', 'subscriptionId', 'token'],
          pathParams: ['packageName', 'subscriptionId', 'token'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androidpublisher.purchases.subscriptions.defer
       *
       * @desc Defers a user's subscription purchase until a specified future expiration time.
       *
       * @alias androidpublisher.purchases.subscriptions.defer
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.packageName - The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
       * @param  {string} params.subscriptionId - The purchased subscription ID (for example, 'monthly001').
       * @param  {string} params.token - The token provided to the user's device when the subscription was purchased.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      defer: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:defer',
            method: 'POST'
          },
          params: params,
          requiredParams: ['packageName', 'subscriptionId', 'token'],
          pathParams: ['packageName', 'subscriptionId', 'token'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androidpublisher.purchases.subscriptions.get
       *
       * @desc Checks whether a user's subscription purchase is valid and returns its expiry time.
       *
       * @alias androidpublisher.purchases.subscriptions.get
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.packageName - The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
       * @param  {string} params.subscriptionId - The purchased subscription ID (for example, 'monthly001').
       * @param  {string} params.token - The token provided to the user's device when the subscription was purchased.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['packageName', 'subscriptionId', 'token'],
          pathParams: ['packageName', 'subscriptionId', 'token'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androidpublisher.purchases.subscriptions.refund
       *
       * @desc Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.
       *
       * @alias androidpublisher.purchases.subscriptions.refund
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.packageName - The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
       * @param  {string} params.subscriptionId - The purchased subscription ID (for example, 'monthly001').
       * @param  {string} params.token - The token provided to the user's device when the subscription was purchased.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      refund: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:refund',
            method: 'POST'
          },
          params: params,
          requiredParams: ['packageName', 'subscriptionId', 'token'],
          pathParams: ['packageName', 'subscriptionId', 'token'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androidpublisher.purchases.subscriptions.revoke
       *
       * @desc Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.
       *
       * @alias androidpublisher.purchases.subscriptions.revoke
       * @memberOf! androidpublisher(v2)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.packageName - The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
       * @param  {string} params.subscriptionId - The purchased subscription ID (for example, 'monthly001').
       * @param  {string} params.token - The token provided to the user's device when the subscription was purchased.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      revoke: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/androidpublisher/v2/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:revoke',
            method: 'POST'
          },
          params: params,
          requiredParams: ['packageName', 'subscriptionId', 'token'],
          pathParams: ['packageName', 'subscriptionId', 'token'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };
}

/**
 * Exports Androidpublisher object
 * @type Androidpublisher
 */
module.exports = Androidpublisher;