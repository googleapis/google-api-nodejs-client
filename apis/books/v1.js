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
var checkRequired = apirequest.checkRequired;
var extend = require('../../lib/utils').extend;

/**
 * Books API
 *
 * @classdesc Lets you search for books and manage your Google Books library.
 * @namespace books
 * @version  v1
 * @variation v1
 * @this Books
 * @param {object=} options Options for Books
 */
function Books(options) {

  var self = this;
  this._options = options || {};

  this.bookshelves = {

    /**
     * books.bookshelves.get
     *
     * @desc Retrieves metadata for a specific bookshelf for the specified user.
     *
     * @alias books.bookshelves.get
     * @memberOf! books(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.shelf - ID of bookshelf to retrieve.
     * @param  {string=} params.source - String to identify the originator of this request.
     * @param  {string} params.userId - ID of user for whom to retrieve bookshelves.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['userId', 'shelf']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/books/v1/users/' + params.userId + '/bookshelves/' + params.shelf,
        method: 'GET'
      };

      delete params.shelf;

      delete params.userId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * books.bookshelves.list
     *
     * @desc Retrieves a list of public bookshelves for the specified user.
     *
     * @alias books.bookshelves.list
     * @memberOf! books(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.source - String to identify the originator of this request.
     * @param  {string} params.userId - ID of user for whom to retrieve bookshelves.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['userId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/books/v1/users/' + params.userId + '/bookshelves',
        method: 'GET'
      };

      delete params.userId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.cloudloading = {

    /**
     * books.cloudloading.addBook
     *
     *
     *
     * @alias books.cloudloading.addBook
     * @memberOf! books(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.drive_document_id - A drive document id. The upload_client_token must not be set.
     * @param  {string=} params.mime_type - The document MIME type. It can be set only if the drive_document_id is set.
     * @param  {string=} params.name - The document name. It can be set only if the drive_document_id is set.
     * @param  {string=} params.upload_client_token -
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    addBook: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/books/v1/cloudloading/addBook',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * books.cloudloading.deleteBook
     *
     * @desc Remove the book and its contents
     *
     * @alias books.cloudloading.deleteBook
     * @memberOf! books(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.volumeId - The id of the book to be removed.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    deleteBook: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['volumeId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/books/v1/cloudloading/deleteBook',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * books.cloudloading.updateBook
     *
     *
     *
     * @alias books.cloudloading.updateBook
     * @memberOf! books(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    updateBook: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/books/v1/cloudloading/updateBook',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.layers = {

    /**
     * books.layers.get
     *
     * @desc Gets the layer summary for a volume.
     *
     * @alias books.layers.get
     * @memberOf! books(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.contentVersion - The content version for the requested volume.
     * @param  {string=} params.source - String to identify the originator of this request.
     * @param  {string} params.summaryId - The ID for the layer to get the summary for.
     * @param  {string} params.volumeId - The volume to retrieve layers for.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['volumeId', 'summaryId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/books/v1/volumes/' + params.volumeId + '/layersummary/' + params.summaryId,
        method: 'GET'
      };

      delete params.summaryId;
      delete params.volumeId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * books.layers.list
     *
     * @desc List the layer summaries for a volume.
     *
     * @alias books.layers.list
     * @memberOf! books(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.contentVersion - The content version for the requested volume.
     * @param  {integer=} params.maxResults - Maximum number of results to return
     * @param  {string=} params.pageToken - The value of the nextToken from the previous page.
     * @param  {string=} params.source - String to identify the originator of this request.
     * @param  {string} params.volumeId - The volume to retrieve layers for.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['volumeId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/books/v1/volumes/' + params.volumeId + '/layersummary',
        method: 'GET'
      };

      delete params.volumeId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.myconfig = {

    /**
     * books.myconfig.releaseDownloadAccess
     *
     * @desc Release downloaded content access restriction.
     *
     * @alias books.myconfig.releaseDownloadAccess
     * @memberOf! books(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.cpksver - The device/version ID from which to release the restriction.
     * @param  {string=} params.locale - ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
     * @param  {string=} params.source - String to identify the originator of this request.
     * @param  {string} params.volumeIds - The volume(s) to release restrictions for.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    releaseDownloadAccess: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['volumeIds', 'cpksver']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/books/v1/myconfig/releaseDownloadAccess',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * books.myconfig.requestAccess
     *
     * @desc Request concurrent and download access restrictions.
     *
     * @alias books.myconfig.requestAccess
     * @memberOf! books(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.cpksver - The device/version ID from which to request the restrictions.
     * @param  {string=} params.licenseTypes - The type of access license to request. If not specified, the default is BOTH.
     * @param  {string=} params.locale - ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
     * @param  {string} params.nonce - The client nonce value.
     * @param  {string} params.source - String to identify the originator of this request.
     * @param  {string} params.volumeId - The volume to request concurrent/download restrictions for.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    requestAccess: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['source', 'volumeId', 'nonce', 'cpksver']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/books/v1/myconfig/requestAccess',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * books.myconfig.syncVolumeLicenses
     *
     * @desc Request downloaded content access for specified volumes on the My eBooks shelf.
     *
     * @alias books.myconfig.syncVolumeLicenses
     * @memberOf! books(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.cpksver - The device/version ID from which to release the restriction.
     * @param  {string=} params.features - List of features supported by the client, i.e., 'RENTALS'
     * @param  {string=} params.locale - ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
     * @param  {string} params.nonce - The client nonce value.
     * @param  {boolean=} params.showPreorders - Set to true to show pre-ordered books. Defaults to false.
     * @param  {string} params.source - String to identify the originator of this request.
     * @param  {string=} params.volumeIds - The volume(s) to request download restrictions for.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    syncVolumeLicenses: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['source', 'nonce', 'cpksver']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/books/v1/myconfig/syncVolumeLicenses',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.mylibrary = {

    annotations: {

      /**
       * books.mylibrary.annotations.delete
       *
       * @desc Deletes an annotation.
       *
       * @alias books.mylibrary.annotations.delete
       * @memberOf! books(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.annotationId - The ID for the annotation to delete.
       * @param  {string=} params.source - String to identify the originator of this request.
       * @throws {Error} If a required parameter is missing.
       * @param  {callback=} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var params = extend({}, params); // shallow copy
        checkRequired(params, ['annotationId']);
        var isMedia = false;
        var options = {
          url: 'https://www.googleapis.com/books/v1/mylibrary/annotations/' + params.annotationId,
          method: 'DELETE'
        };

        delete params.annotationId;

        return createAPIRequest(self, params, options, isMedia, callback);
      },

      /**
       * books.mylibrary.annotations.get
       *
       * @desc Gets an annotation by its ID.
       *
       * @alias books.mylibrary.annotations.get
       * @memberOf! books(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.annotationId - The ID for the annotation to retrieve.
       * @param  {string=} params.source - String to identify the originator of this request.
       * @throws {Error} If a required parameter is missing.
       * @param  {callback=} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var params = extend({}, params); // shallow copy
        checkRequired(params, ['annotationId']);
        var isMedia = false;
        var options = {
          url: 'https://www.googleapis.com/books/v1/mylibrary/annotations/' + params.annotationId,
          method: 'GET'
        };

        delete params.annotationId;

        return createAPIRequest(self, params, options, isMedia, callback);
      },

      /**
       * books.mylibrary.annotations.insert
       *
       * @desc Inserts a new annotation.
       *
       * @alias books.mylibrary.annotations.insert
       * @memberOf! books(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {boolean=} params.showOnlySummaryInResponse - Requests that only the summary of the specified layer be provided in the response.
       * @param  {string=} params.source - String to identify the originator of this request.
       * @param  {object} params.resource - Request body data
       * @param  {callback=} callback - The callback that handles the response.
       * @return {object} Request object
       */
      insert: function(params, callback) {
        var params = extend({}, params); // shallow copy
        var isMedia = false;
        var options = {
          url: 'https://www.googleapis.com/books/v1/mylibrary/annotations',
          method: 'POST'
        };

        return createAPIRequest(self, params, options, isMedia, callback);
      },

      /**
       * books.mylibrary.annotations.list
       *
       * @desc Retrieves a list of annotations, possibly filtered.
       *
       * @alias books.mylibrary.annotations.list
       * @memberOf! books(v1)
       *
       * @param  {object=} params - Parameters for request
       * @param  {string=} params.contentVersion - The content version for the requested volume.
       * @param  {string=} params.layerId - The layer ID to limit annotation by.
       * @param  {string=} params.layerIds - The layer ID(s) to limit annotation by.
       * @param  {integer=} params.maxResults - Maximum number of results to return
       * @param  {string=} params.pageIds - The page ID(s) for the volume that is being queried.
       * @param  {string=} params.pageToken - The value of the nextToken from the previous page.
       * @param  {boolean=} params.showDeleted - Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.
       * @param  {string=} params.source - String to identify the originator of this request.
       * @param  {string=} params.updatedMax - RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
       * @param  {string=} params.updatedMin - RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
       * @param  {string=} params.volumeId - The volume to restrict annotations to.
       * @param  {callback=} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var params = extend({}, params); // shallow copy
        var isMedia = false;
        var options = {
          url: 'https://www.googleapis.com/books/v1/mylibrary/annotations',
          method: 'GET'
        };

        return createAPIRequest(self, params, options, isMedia, callback);
      },

      /**
       * books.mylibrary.annotations.summary
       *
       * @desc Gets the summary of specified layers.
       *
       * @alias books.mylibrary.annotations.summary
       * @memberOf! books(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.layerIds - Array of layer IDs to get the summary for.
       * @param  {string} params.volumeId - Volume id to get the summary for.
       * @throws {Error} If a required parameter is missing.
       * @param  {callback=} callback - The callback that handles the response.
       * @return {object} Request object
       */
      summary: function(params, callback) {
        var params = extend({}, params); // shallow copy
        checkRequired(params, ['layerIds', 'volumeId']);
        var isMedia = false;
        var options = {
          url: 'https://www.googleapis.com/books/v1/mylibrary/annotations/summary',
          method: 'POST'
        };

        return createAPIRequest(self, params, options, isMedia, callback);
      },

      /**
       * books.mylibrary.annotations.update
       *
       * @desc Updates an existing annotation.
       *
       * @alias books.mylibrary.annotations.update
       * @memberOf! books(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.annotationId - The ID for the annotation to update.
       * @param  {string=} params.source - String to identify the originator of this request.
       * @param  {object} params.resource - Request body data
       * @throws {Error} If a required parameter is missing.
       * @param  {callback=} callback - The callback that handles the response.
       * @return {object} Request object
       */
      update: function(params, callback) {
        var params = extend({}, params); // shallow copy
        checkRequired(params, ['annotationId']);
        var isMedia = false;
        var options = {
          url: 'https://www.googleapis.com/books/v1/mylibrary/annotations/' + params.annotationId,
          method: 'PUT'
        };

        delete params.annotationId;

        return createAPIRequest(self, params, options, isMedia, callback);
      }

    },
    bookshelves: {

      /**
       * books.mylibrary.bookshelves.addVolume
       *
       * @desc Adds a volume to a bookshelf.
       *
       * @alias books.mylibrary.bookshelves.addVolume
       * @memberOf! books(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.shelf - ID of bookshelf to which to add a volume.
       * @param  {string=} params.source - String to identify the originator of this request.
       * @param  {string} params.volumeId - ID of volume to add.
       * @throws {Error} If a required parameter is missing.
       * @param  {callback=} callback - The callback that handles the response.
       * @return {object} Request object
       */
      addVolume: function(params, callback) {
        var params = extend({}, params); // shallow copy
        checkRequired(params, ['shelf', 'volumeId']);
        var isMedia = false;
        var options = {
          url: 'https://www.googleapis.com/books/v1/mylibrary/bookshelves/' + params.shelf + '/addVolume',
          method: 'POST'
        };

        delete params.shelf;

        return createAPIRequest(self, params, options, isMedia, callback);
      },

      /**
       * books.mylibrary.bookshelves.clearVolumes
       *
       * @desc Clears all volumes from a bookshelf.
       *
       * @alias books.mylibrary.bookshelves.clearVolumes
       * @memberOf! books(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.shelf - ID of bookshelf from which to remove a volume.
       * @param  {string=} params.source - String to identify the originator of this request.
       * @throws {Error} If a required parameter is missing.
       * @param  {callback=} callback - The callback that handles the response.
       * @return {object} Request object
       */
      clearVolumes: function(params, callback) {
        var params = extend({}, params); // shallow copy
        checkRequired(params, ['shelf']);
        var isMedia = false;
        var options = {
          url: 'https://www.googleapis.com/books/v1/mylibrary/bookshelves/' + params.shelf + '/clearVolumes',
          method: 'POST'
        };

        delete params.shelf;

        return createAPIRequest(self, params, options, isMedia, callback);
      },

      /**
       * books.mylibrary.bookshelves.get
       *
       * @desc Retrieves metadata for a specific bookshelf belonging to the authenticated user.
       *
       * @alias books.mylibrary.bookshelves.get
       * @memberOf! books(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.shelf - ID of bookshelf to retrieve.
       * @param  {string=} params.source - String to identify the originator of this request.
       * @throws {Error} If a required parameter is missing.
       * @param  {callback=} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var params = extend({}, params); // shallow copy
        checkRequired(params, ['shelf']);
        var isMedia = false;
        var options = {
          url: 'https://www.googleapis.com/books/v1/mylibrary/bookshelves/' + params.shelf,
          method: 'GET'
        };

        delete params.shelf;

        return createAPIRequest(self, params, options, isMedia, callback);
      },

      /**
       * books.mylibrary.bookshelves.list
       *
       * @desc Retrieves a list of bookshelves belonging to the authenticated user.
       *
       * @alias books.mylibrary.bookshelves.list
       * @memberOf! books(v1)
       *
       * @param  {object=} params - Parameters for request
       * @param  {string=} params.source - String to identify the originator of this request.
       * @param  {callback=} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var params = extend({}, params); // shallow copy
        var isMedia = false;
        var options = {
          url: 'https://www.googleapis.com/books/v1/mylibrary/bookshelves',
          method: 'GET'
        };

        return createAPIRequest(self, params, options, isMedia, callback);
      },

      /**
       * books.mylibrary.bookshelves.moveVolume
       *
       * @desc Moves a volume within a bookshelf.
       *
       * @alias books.mylibrary.bookshelves.moveVolume
       * @memberOf! books(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.shelf - ID of bookshelf with the volume.
       * @param  {string=} params.source - String to identify the originator of this request.
       * @param  {string} params.volumeId - ID of volume to move.
       * @param  {integer} params.volumePosition - Position on shelf to move the item (0 puts the item before the current first item, 1 puts it between the first and the second and so on.)
       * @throws {Error} If a required parameter is missing.
       * @param  {callback=} callback - The callback that handles the response.
       * @return {object} Request object
       */
      moveVolume: function(params, callback) {
        var params = extend({}, params); // shallow copy
        checkRequired(params, ['shelf', 'volumeId', 'volumePosition']);
        var isMedia = false;
        var options = {
          url: 'https://www.googleapis.com/books/v1/mylibrary/bookshelves/' + params.shelf + '/moveVolume',
          method: 'POST'
        };

        delete params.shelf;

        return createAPIRequest(self, params, options, isMedia, callback);
      },

      /**
       * books.mylibrary.bookshelves.removeVolume
       *
       * @desc Removes a volume from a bookshelf.
       *
       * @alias books.mylibrary.bookshelves.removeVolume
       * @memberOf! books(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.shelf - ID of bookshelf from which to remove a volume.
       * @param  {string=} params.source - String to identify the originator of this request.
       * @param  {string} params.volumeId - ID of volume to remove.
       * @throws {Error} If a required parameter is missing.
       * @param  {callback=} callback - The callback that handles the response.
       * @return {object} Request object
       */
      removeVolume: function(params, callback) {
        var params = extend({}, params); // shallow copy
        checkRequired(params, ['shelf', 'volumeId']);
        var isMedia = false;
        var options = {
          url: 'https://www.googleapis.com/books/v1/mylibrary/bookshelves/' + params.shelf + '/removeVolume',
          method: 'POST'
        };

        delete params.shelf;

        return createAPIRequest(self, params, options, isMedia, callback);
      }

    },
    readingpositions: {

      /**
       * books.mylibrary.readingpositions.get
       *
       * @desc Retrieves my reading position information for a volume.
       *
       * @alias books.mylibrary.readingpositions.get
       * @memberOf! books(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string=} params.contentVersion - Volume content version for which this reading position is requested.
       * @param  {string=} params.source - String to identify the originator of this request.
       * @param  {string} params.volumeId - ID of volume for which to retrieve a reading position.
       * @throws {Error} If a required parameter is missing.
       * @param  {callback=} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var params = extend({}, params); // shallow copy
        checkRequired(params, ['volumeId']);
        var isMedia = false;
        var options = {
          url: 'https://www.googleapis.com/books/v1/mylibrary/readingpositions/' + params.volumeId,
          method: 'GET'
        };

        delete params.volumeId;

        return createAPIRequest(self, params, options, isMedia, callback);
      },

      /**
       * books.mylibrary.readingpositions.setPosition
       *
       * @desc Sets my reading position information for a volume.
       *
       * @alias books.mylibrary.readingpositions.setPosition
       * @memberOf! books(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string=} params.action - Action that caused this reading position to be set.
       * @param  {string=} params.contentVersion - Volume content version for which this reading position applies.
       * @param  {string=} params.deviceCookie - Random persistent device cookie optional on set position.
       * @param  {string} params.position - Position string for the new volume reading position.
       * @param  {string=} params.source - String to identify the originator of this request.
       * @param  {string} params.timestamp - RFC 3339 UTC format timestamp associated with this reading position.
       * @param  {string} params.volumeId - ID of volume for which to update the reading position.
       * @throws {Error} If a required parameter is missing.
       * @param  {callback=} callback - The callback that handles the response.
       * @return {object} Request object
       */
      setPosition: function(params, callback) {
        var params = extend({}, params); // shallow copy
        checkRequired(params, ['volumeId', 'timestamp', 'position']);
        var isMedia = false;
        var options = {
          url: 'https://www.googleapis.com/books/v1/mylibrary/readingpositions/' + params.volumeId + '/setPosition',
          method: 'POST'
        };

        delete params.volumeId;

        return createAPIRequest(self, params, options, isMedia, callback);
      }

    }

  };

  this.promooffer = {

    /**
     * books.promooffer.accept
     *
     *
     *
     * @alias books.promooffer.accept
     * @memberOf! books(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.androidId - device android_id
     * @param  {string=} params.device - device device
     * @param  {string=} params.manufacturer - device manufacturer
     * @param  {string=} params.model - device model
     * @param  {string=} params.offerId -
     * @param  {string=} params.product - device product
     * @param  {string=} params.serial - device serial
     * @param  {string=} params.volumeId - Volume id to exercise the offer
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    accept: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/books/v1/promooffer/accept',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * books.promooffer.dismiss
     *
     *
     *
     * @alias books.promooffer.dismiss
     * @memberOf! books(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.androidId - device android_id
     * @param  {string=} params.device - device device
     * @param  {string=} params.manufacturer - device manufacturer
     * @param  {string=} params.model - device model
     * @param  {string=} params.offerId - Offer to dimiss
     * @param  {string=} params.product - device product
     * @param  {string=} params.serial - device serial
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    dismiss: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/books/v1/promooffer/dismiss',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * books.promooffer.get
     *
     * @desc Returns a list of promo offers available to the user
     *
     * @alias books.promooffer.get
     * @memberOf! books(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.androidId - device android_id
     * @param  {string=} params.device - device device
     * @param  {string=} params.manufacturer - device manufacturer
     * @param  {string=} params.model - device model
     * @param  {string=} params.product - device product
     * @param  {string=} params.serial - device serial
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/books/v1/promooffer/get',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.volumes = {

    /**
     * books.volumes.get
     *
     * @desc Gets volume information for a single volume.
     *
     * @alias books.volumes.get
     * @memberOf! books(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.country - ISO-3166-1 code to override the IP-based location.
     * @param  {string=} params.partner - Brand results for partner ID.
     * @param  {string=} params.projection - Restrict information returned to a set of selected fields.
     * @param  {string=} params.source - String to identify the originator of this request.
     * @param  {string} params.volumeId - ID of volume to retrieve.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['volumeId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/books/v1/volumes/' + params.volumeId,
        method: 'GET'
      };

      delete params.volumeId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * books.volumes.list
     *
     * @desc Performs a book search.
     *
     * @alias books.volumes.list
     * @memberOf! books(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.download - Restrict to volumes by download availability.
     * @param  {string=} params.filter - Filter search results.
     * @param  {string=} params.langRestrict - Restrict results to books with this language code.
     * @param  {string=} params.libraryRestrict - Restrict search to this user's library.
     * @param  {integer=} params.maxResults - Maximum number of results to return.
     * @param  {string=} params.orderBy - Sort search results.
     * @param  {string=} params.partner - Restrict and brand results for partner ID.
     * @param  {string=} params.printType - Restrict to books or magazines.
     * @param  {string=} params.projection - Restrict information returned to a set of selected fields.
     * @param  {string} params.q - Full-text search query string.
     * @param  {boolean=} params.showPreorders - Set to true to show books available for preorder. Defaults to false.
     * @param  {string=} params.source - String to identify the originator of this request.
     * @param  {integer=} params.startIndex - Index of the first result to return (starts at 0)
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['q']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/books/v1/volumes',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Books object
 * @type Books
 */
module.exports = Books;