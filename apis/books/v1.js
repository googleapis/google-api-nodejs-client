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
 * Books API
 *
 * Lets you search for books and manage your Google Books library.
 *
 * @example
 * var google = require('googleapis');
 * var books = google.books('v1');
 *
 * @namespace books
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Books
 */
function Books(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.bookshelves = {

    /**
     * books.bookshelves.get
     *
     * @desc Retrieves metadata for a specific bookshelf for the specified user.
     *
     * @alias books.bookshelves.get
     * @memberOf! books(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.shelf ID of bookshelf to retrieve.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string} params.userId ID of user for whom to retrieve bookshelves.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/books/v1/users/{userId}/bookshelves/{shelf}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['userId', 'shelf'],
        pathParams: ['shelf', 'userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * books.bookshelves.list
     *
     * @desc Retrieves a list of public bookshelves for the specified user.
     *
     * @alias books.bookshelves.list
     * @memberOf! books(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string} params.userId ID of user for whom to retrieve bookshelves.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/books/v1/users/{userId}/bookshelves',
          method: 'GET'
        },
        params: params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    volumes: {

      /**
       * books.bookshelves.volumes.list
       *
       * @desc Retrieves volumes in a specific bookshelf for the specified user.
       *
       * @alias books.bookshelves.volumes.list
       * @memberOf! books(v1)
       *
       * @param {object} params Parameters for request
       * @param {integer=} params.maxResults Maximum number of results to return
       * @param {string} params.shelf ID of bookshelf to retrieve volumes.
       * @param {boolean=} params.showPreorders Set to true to show pre-ordered books. Defaults to false.
       * @param {string=} params.source String to identify the originator of this request.
       * @param {integer=} params.startIndex Index of the first element to return (starts at 0)
       * @param {string} params.userId ID of user for whom to retrieve bookshelf volumes.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/books/v1/users/{userId}/bookshelves/{shelf}/volumes',
            method: 'GET'
          },
          params: params,
          requiredParams: ['userId', 'shelf'],
          pathParams: ['shelf', 'userId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  self.cloudloading = {

    /**
     * books.cloudloading.addBook
     *
     * 
     *
     * @alias books.cloudloading.addBook
     * @memberOf! books(v1)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.drive_document_id A drive document id. The upload_client_token must not be set.
     * @param {string=} params.mime_type The document MIME type. It can be set only if the drive_document_id is set.
     * @param {string=} params.name The document name. It can be set only if the drive_document_id is set.
     * @param {string=} params.upload_client_token 
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    addBook: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/books/v1/cloudloading/addBook',
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
     * books.cloudloading.deleteBook
     *
     * @desc Remove the book and its contents
     *
     * @alias books.cloudloading.deleteBook
     * @memberOf! books(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.volumeId The id of the book to be removed.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    deleteBook: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/books/v1/cloudloading/deleteBook',
          method: 'POST'
        },
        params: params,
        requiredParams: ['volumeId'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * books.cloudloading.updateBook
     *
     * 
     *
     * @alias books.cloudloading.updateBook
     * @memberOf! books(v1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateBook: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/books/v1/cloudloading/updateBook',
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

  self.dictionary = {

    /**
     * books.dictionary.listOfflineMetadata
     *
     * @desc Returns a list of offline dictionary metadata available
     *
     * @alias books.dictionary.listOfflineMetadata
     * @memberOf! books(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.cpksver The device/version ID from which to request the data.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listOfflineMetadata: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/books/v1/dictionary/listOfflineMetadata',
          method: 'GET'
        },
        params: params,
        requiredParams: ['cpksver'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.layers = {

    /**
     * books.layers.get
     *
     * @desc Gets the layer summary for a volume.
     *
     * @alias books.layers.get
     * @memberOf! books(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.contentVersion The content version for the requested volume.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string} params.summaryId The ID for the layer to get the summary for.
     * @param {string} params.volumeId The volume to retrieve layers for.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/books/v1/volumes/{volumeId}/layersummary/{summaryId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['volumeId', 'summaryId'],
        pathParams: ['summaryId', 'volumeId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * books.layers.list
     *
     * @desc List the layer summaries for a volume.
     *
     * @alias books.layers.list
     * @memberOf! books(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.contentVersion The content version for the requested volume.
     * @param {integer=} params.maxResults Maximum number of results to return
     * @param {string=} params.pageToken The value of the nextToken from the previous page.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string} params.volumeId The volume to retrieve layers for.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/books/v1/volumes/{volumeId}/layersummary',
          method: 'GET'
        },
        params: params,
        requiredParams: ['volumeId'],
        pathParams: ['volumeId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    annotationData: {

      /**
       * books.layers.annotationData.get
       *
       * @desc Gets the annotation data.
       *
       * @alias books.layers.annotationData.get
       * @memberOf! books(v1)
       *
       * @param {object} params Parameters for request
       * @param {boolean=} params.allowWebDefinitions For the dictionary layer. Whether or not to allow web definitions.
       * @param {string} params.annotationDataId The ID of the annotation data to retrieve.
       * @param {string} params.contentVersion The content version for the volume you are trying to retrieve.
       * @param {integer=} params.h The requested pixel height for any images. If height is provided width must also be provided.
       * @param {string} params.layerId The ID for the layer to get the annotations.
       * @param {string=} params.locale The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
       * @param {integer=} params.scale The requested scale for the image.
       * @param {string=} params.source String to identify the originator of this request.
       * @param {string} params.volumeId The volume to retrieve annotations for.
       * @param {integer=} params.w The requested pixel width for any images. If width is provided height must also be provided.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/books/v1/volumes/{volumeId}/layers/{layerId}/data/{annotationDataId}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['volumeId', 'layerId', 'annotationDataId', 'contentVersion'],
          pathParams: ['annotationDataId', 'layerId', 'volumeId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * books.layers.annotationData.list
       *
       * @desc Gets the annotation data for a volume and layer.
       *
       * @alias books.layers.annotationData.list
       * @memberOf! books(v1)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.annotationDataId The list of Annotation Data Ids to retrieve. Pagination is ignored if this is set.
       * @param {string} params.contentVersion The content version for the requested volume.
       * @param {integer=} params.h The requested pixel height for any images. If height is provided width must also be provided.
       * @param {string} params.layerId The ID for the layer to get the annotation data.
       * @param {string=} params.locale The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
       * @param {integer=} params.maxResults Maximum number of results to return
       * @param {string=} params.pageToken The value of the nextToken from the previous page.
       * @param {integer=} params.scale The requested scale for the image.
       * @param {string=} params.source String to identify the originator of this request.
       * @param {string=} params.updatedMax RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
       * @param {string=} params.updatedMin RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
       * @param {string} params.volumeId The volume to retrieve annotation data for.
       * @param {integer=} params.w The requested pixel width for any images. If width is provided height must also be provided.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/books/v1/volumes/{volumeId}/layers/{layerId}/data',
            method: 'GET'
          },
          params: params,
          requiredParams: ['volumeId', 'layerId', 'contentVersion'],
          pathParams: ['layerId', 'volumeId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    volumeAnnotations: {

      /**
       * books.layers.volumeAnnotations.get
       *
       * @desc Gets the volume annotation.
       *
       * @alias books.layers.volumeAnnotations.get
       * @memberOf! books(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.annotationId The ID of the volume annotation to retrieve.
       * @param {string} params.layerId The ID for the layer to get the annotations.
       * @param {string=} params.locale The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
       * @param {string=} params.source String to identify the originator of this request.
       * @param {string} params.volumeId The volume to retrieve annotations for.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/books/v1/volumes/{volumeId}/layers/{layerId}/annotations/{annotationId}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['volumeId', 'layerId', 'annotationId'],
          pathParams: ['annotationId', 'layerId', 'volumeId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * books.layers.volumeAnnotations.list
       *
       * @desc Gets the volume annotations for a volume and layer.
       *
       * @alias books.layers.volumeAnnotations.list
       * @memberOf! books(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.contentVersion The content version for the requested volume.
       * @param {string=} params.endOffset The end offset to end retrieving data from.
       * @param {string=} params.endPosition The end position to end retrieving data from.
       * @param {string} params.layerId The ID for the layer to get the annotations.
       * @param {string=} params.locale The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
       * @param {integer=} params.maxResults Maximum number of results to return
       * @param {string=} params.pageToken The value of the nextToken from the previous page.
       * @param {boolean=} params.showDeleted Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.
       * @param {string=} params.source String to identify the originator of this request.
       * @param {string=} params.startOffset The start offset to start retrieving data from.
       * @param {string=} params.startPosition The start position to start retrieving data from.
       * @param {string=} params.updatedMax RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
       * @param {string=} params.updatedMin RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
       * @param {string=} params.volumeAnnotationsVersion The version of the volume annotations that you are requesting.
       * @param {string} params.volumeId The volume to retrieve annotations for.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/books/v1/volumes/{volumeId}/layers/{layerId}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['volumeId', 'layerId', 'contentVersion'],
          pathParams: ['layerId', 'volumeId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  self.myconfig = {

    /**
     * books.myconfig.getUserSettings
     *
     * @desc Gets the current settings for the user.
     *
     * @alias books.myconfig.getUserSettings
     * @memberOf! books(v1)
     *
     * @param {object=} params Parameters for request
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getUserSettings: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/books/v1/myconfig/getUserSettings',
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
     * books.myconfig.releaseDownloadAccess
     *
     * @desc Release downloaded content access restriction.
     *
     * @alias books.myconfig.releaseDownloadAccess
     * @memberOf! books(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.cpksver The device/version ID from which to release the restriction.
     * @param {string=} params.locale ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {string} params.volumeIds The volume(s) to release restrictions for.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    releaseDownloadAccess: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/books/v1/myconfig/releaseDownloadAccess',
          method: 'POST'
        },
        params: params,
        requiredParams: ['volumeIds', 'cpksver'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * books.myconfig.requestAccess
     *
     * @desc Request concurrent and download access restrictions.
     *
     * @alias books.myconfig.requestAccess
     * @memberOf! books(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.cpksver The device/version ID from which to request the restrictions.
     * @param {string=} params.licenseTypes The type of access license to request. If not specified, the default is BOTH.
     * @param {string=} params.locale ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
     * @param {string} params.nonce The client nonce value.
     * @param {string} params.source String to identify the originator of this request.
     * @param {string} params.volumeId The volume to request concurrent/download restrictions for.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    requestAccess: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/books/v1/myconfig/requestAccess',
          method: 'POST'
        },
        params: params,
        requiredParams: ['source', 'volumeId', 'nonce', 'cpksver'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * books.myconfig.syncVolumeLicenses
     *
     * @desc Request downloaded content access for specified volumes on the My eBooks shelf.
     *
     * @alias books.myconfig.syncVolumeLicenses
     * @memberOf! books(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.cpksver The device/version ID from which to release the restriction.
     * @param {string=} params.features List of features supported by the client, i.e., 'RENTALS'
     * @param {boolean=} params.includeNonComicsSeries Set to true to include non-comics series. Defaults to false.
     * @param {string=} params.locale ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
     * @param {string} params.nonce The client nonce value.
     * @param {boolean=} params.showPreorders Set to true to show pre-ordered books. Defaults to false.
     * @param {string} params.source String to identify the originator of this request.
     * @param {string=} params.volumeIds The volume(s) to request download restrictions for.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    syncVolumeLicenses: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/books/v1/myconfig/syncVolumeLicenses',
          method: 'POST'
        },
        params: params,
        requiredParams: ['source', 'nonce', 'cpksver'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * books.myconfig.updateUserSettings
     *
     * @desc Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.
     *
     * @alias books.myconfig.updateUserSettings
     * @memberOf! books(v1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateUserSettings: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/books/v1/myconfig/updateUserSettings',
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

  self.mylibrary = {

    annotations: {

      /**
       * books.mylibrary.annotations.delete
       *
       * @desc Deletes an annotation.
       *
       * @alias books.mylibrary.annotations.delete
       * @memberOf! books(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.annotationId The ID for the annotation to delete.
       * @param {string=} params.source String to identify the originator of this request.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      delete: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/books/v1/mylibrary/annotations/{annotationId}',
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['annotationId'],
          pathParams: ['annotationId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * books.mylibrary.annotations.insert
       *
       * @desc Inserts a new annotation.
       *
       * @alias books.mylibrary.annotations.insert
       * @memberOf! books(v1)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.country ISO-3166-1 code to override the IP-based location.
       * @param {boolean=} params.showOnlySummaryInResponse Requests that only the summary of the specified layer be provided in the response.
       * @param {string=} params.source String to identify the originator of this request.
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      insert: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/books/v1/mylibrary/annotations',
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
       * books.mylibrary.annotations.list
       *
       * @desc Retrieves a list of annotations, possibly filtered.
       *
       * @alias books.mylibrary.annotations.list
       * @memberOf! books(v1)
       *
       * @param {object=} params Parameters for request
       * @param {string=} params.contentVersion The content version for the requested volume.
       * @param {string=} params.layerId The layer ID to limit annotation by.
       * @param {string=} params.layerIds The layer ID(s) to limit annotation by.
       * @param {integer=} params.maxResults Maximum number of results to return
       * @param {string=} params.pageToken The value of the nextToken from the previous page.
       * @param {boolean=} params.showDeleted Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.
       * @param {string=} params.source String to identify the originator of this request.
       * @param {string=} params.updatedMax RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
       * @param {string=} params.updatedMin RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
       * @param {string=} params.volumeId The volume to restrict annotations to.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/books/v1/mylibrary/annotations',
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
       * books.mylibrary.annotations.summary
       *
       * @desc Gets the summary of specified layers.
       *
       * @alias books.mylibrary.annotations.summary
       * @memberOf! books(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.layerIds Array of layer IDs to get the summary for.
       * @param {string} params.volumeId Volume id to get the summary for.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      summary: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/books/v1/mylibrary/annotations/summary',
            method: 'POST'
          },
          params: params,
          requiredParams: ['layerIds', 'volumeId'],
          pathParams: [],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * books.mylibrary.annotations.update
       *
       * @desc Updates an existing annotation.
       *
       * @alias books.mylibrary.annotations.update
       * @memberOf! books(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.annotationId The ID for the annotation to update.
       * @param {string=} params.source String to identify the originator of this request.
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      update: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/books/v1/mylibrary/annotations/{annotationId}',
            method: 'PUT'
          },
          params: params,
          requiredParams: ['annotationId'],
          pathParams: ['annotationId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
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
       * @param {object} params Parameters for request
       * @param {string=} params.reason The reason for which the book is added to the library.
       * @param {string} params.shelf ID of bookshelf to which to add a volume.
       * @param {string=} params.source String to identify the originator of this request.
       * @param {string} params.volumeId ID of volume to add.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      addVolume: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/books/v1/mylibrary/bookshelves/{shelf}/addVolume',
            method: 'POST'
          },
          params: params,
          requiredParams: ['shelf', 'volumeId'],
          pathParams: ['shelf'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * books.mylibrary.bookshelves.clearVolumes
       *
       * @desc Clears all volumes from a bookshelf.
       *
       * @alias books.mylibrary.bookshelves.clearVolumes
       * @memberOf! books(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.shelf ID of bookshelf from which to remove a volume.
       * @param {string=} params.source String to identify the originator of this request.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      clearVolumes: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/books/v1/mylibrary/bookshelves/{shelf}/clearVolumes',
            method: 'POST'
          },
          params: params,
          requiredParams: ['shelf'],
          pathParams: ['shelf'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * books.mylibrary.bookshelves.get
       *
       * @desc Retrieves metadata for a specific bookshelf belonging to the authenticated user.
       *
       * @alias books.mylibrary.bookshelves.get
       * @memberOf! books(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.shelf ID of bookshelf to retrieve.
       * @param {string=} params.source String to identify the originator of this request.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/books/v1/mylibrary/bookshelves/{shelf}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['shelf'],
          pathParams: ['shelf'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * books.mylibrary.bookshelves.list
       *
       * @desc Retrieves a list of bookshelves belonging to the authenticated user.
       *
       * @alias books.mylibrary.bookshelves.list
       * @memberOf! books(v1)
       *
       * @param {object=} params Parameters for request
       * @param {string=} params.source String to identify the originator of this request.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/books/v1/mylibrary/bookshelves',
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
       * books.mylibrary.bookshelves.moveVolume
       *
       * @desc Moves a volume within a bookshelf.
       *
       * @alias books.mylibrary.bookshelves.moveVolume
       * @memberOf! books(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.shelf ID of bookshelf with the volume.
       * @param {string=} params.source String to identify the originator of this request.
       * @param {string} params.volumeId ID of volume to move.
       * @param {integer} params.volumePosition Position on shelf to move the item (0 puts the item before the current first item, 1 puts it between the first and the second and so on.)
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      moveVolume: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/books/v1/mylibrary/bookshelves/{shelf}/moveVolume',
            method: 'POST'
          },
          params: params,
          requiredParams: ['shelf', 'volumeId', 'volumePosition'],
          pathParams: ['shelf'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * books.mylibrary.bookshelves.removeVolume
       *
       * @desc Removes a volume from a bookshelf.
       *
       * @alias books.mylibrary.bookshelves.removeVolume
       * @memberOf! books(v1)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.reason The reason for which the book is removed from the library.
       * @param {string} params.shelf ID of bookshelf from which to remove a volume.
       * @param {string=} params.source String to identify the originator of this request.
       * @param {string} params.volumeId ID of volume to remove.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      removeVolume: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/books/v1/mylibrary/bookshelves/{shelf}/removeVolume',
            method: 'POST'
          },
          params: params,
          requiredParams: ['shelf', 'volumeId'],
          pathParams: ['shelf'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      volumes: {

        /**
         * books.mylibrary.bookshelves.volumes.list
         *
         * @desc Gets volume information for volumes on a bookshelf.
         *
         * @alias books.mylibrary.bookshelves.volumes.list
         * @memberOf! books(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.country ISO-3166-1 code to override the IP-based location.
         * @param {integer=} params.maxResults Maximum number of results to return
         * @param {string=} params.projection Restrict information returned to a set of selected fields.
         * @param {string=} params.q Full-text search query string in this bookshelf.
         * @param {string} params.shelf The bookshelf ID or name retrieve volumes for.
         * @param {boolean=} params.showPreorders Set to true to show pre-ordered books. Defaults to false.
         * @param {string=} params.source String to identify the originator of this request.
         * @param {integer=} params.startIndex Index of the first element to return (starts at 0)
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/books/v1/mylibrary/bookshelves/{shelf}/volumes',
              method: 'GET'
            },
            params: params,
            requiredParams: ['shelf'],
            pathParams: ['shelf'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
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
       * @param {object} params Parameters for request
       * @param {string=} params.contentVersion Volume content version for which this reading position is requested.
       * @param {string=} params.source String to identify the originator of this request.
       * @param {string} params.volumeId ID of volume for which to retrieve a reading position.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/books/v1/mylibrary/readingpositions/{volumeId}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['volumeId'],
          pathParams: ['volumeId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * books.mylibrary.readingpositions.setPosition
       *
       * @desc Sets my reading position information for a volume.
       *
       * @alias books.mylibrary.readingpositions.setPosition
       * @memberOf! books(v1)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.action Action that caused this reading position to be set.
       * @param {string=} params.contentVersion Volume content version for which this reading position applies.
       * @param {string=} params.deviceCookie Random persistent device cookie optional on set position.
       * @param {string} params.position Position string for the new volume reading position.
       * @param {string=} params.source String to identify the originator of this request.
       * @param {string} params.timestamp RFC 3339 UTC format timestamp associated with this reading position.
       * @param {string} params.volumeId ID of volume for which to update the reading position.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      setPosition: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/books/v1/mylibrary/readingpositions/{volumeId}/setPosition',
            method: 'POST'
          },
          params: params,
          requiredParams: ['volumeId', 'timestamp', 'position'],
          pathParams: ['volumeId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  self.notification = {

    /**
     * books.notification.get
     *
     * @desc Returns notification details for a given notification id.
     *
     * @alias books.notification.get
     * @memberOf! books(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating notification title and body.
     * @param {string} params.notification_id String to identify the notification.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/books/v1/notification/get',
          method: 'GET'
        },
        params: params,
        requiredParams: ['notification_id'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.onboarding = {

    /**
     * books.onboarding.listCategories
     *
     * @desc List categories for onboarding experience.
     *
     * @alias books.onboarding.listCategories
     * @memberOf! books(v1)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listCategories: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/books/v1/onboarding/listCategories',
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
     * books.onboarding.listCategoryVolumes
     *
     * @desc List available volumes under categories for onboarding experience.
     *
     * @alias books.onboarding.listCategoryVolumes
     * @memberOf! books(v1)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.categoryId List of category ids requested.
     * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
     * @param {string=} params.maxAllowedMaturityRating The maximum allowed maturity rating of returned volumes. Books with a higher maturity rating are filtered out.
     * @param {integer=} params.pageSize Number of maximum results per page to be included in the response.
     * @param {string=} params.pageToken The value of the nextToken from the previous page.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listCategoryVolumes: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/books/v1/onboarding/listCategoryVolumes',
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

  self.personalizedstream = {

    /**
     * books.personalizedstream.get
     *
     * @desc Returns a stream of personalized book clusters
     *
     * @alias books.personalizedstream.get
     * @memberOf! books(v1)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
     * @param {string=} params.maxAllowedMaturityRating The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/books/v1/personalizedstream/get',
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

  self.promooffer = {

    /**
     * books.promooffer.accept
     *
     * 
     *
     * @alias books.promooffer.accept
     * @memberOf! books(v1)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.androidId device android_id
     * @param {string=} params.device device device
     * @param {string=} params.manufacturer device manufacturer
     * @param {string=} params.model device model
     * @param {string=} params.offerId 
     * @param {string=} params.product device product
     * @param {string=} params.serial device serial
     * @param {string=} params.volumeId Volume id to exercise the offer
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    accept: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/books/v1/promooffer/accept',
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
     * books.promooffer.dismiss
     *
     * 
     *
     * @alias books.promooffer.dismiss
     * @memberOf! books(v1)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.androidId device android_id
     * @param {string=} params.device device device
     * @param {string=} params.manufacturer device manufacturer
     * @param {string=} params.model device model
     * @param {string=} params.offerId Offer to dimiss
     * @param {string=} params.product device product
     * @param {string=} params.serial device serial
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    dismiss: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/books/v1/promooffer/dismiss',
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
     * books.promooffer.get
     *
     * @desc Returns a list of promo offers available to the user
     *
     * @alias books.promooffer.get
     * @memberOf! books(v1)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.androidId device android_id
     * @param {string=} params.device device device
     * @param {string=} params.manufacturer device manufacturer
     * @param {string=} params.model device model
     * @param {string=} params.product device product
     * @param {string=} params.serial device serial
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/books/v1/promooffer/get',
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

  self.series = {

    /**
     * books.series.get
     *
     * @desc Returns Series metadata for the given series ids.
     *
     * @alias books.series.get
     * @memberOf! books(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.series_id String that identifies the series
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/books/v1/series/get',
          method: 'GET'
        },
        params: params,
        requiredParams: ['series_id'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    membership: {

      /**
       * books.series.membership.get
       *
       * @desc Returns Series membership data given the series id.
       *
       * @alias books.series.membership.get
       * @memberOf! books(v1)
       *
       * @param {object} params Parameters for request
       * @param {integer=} params.page_size Number of maximum results per page to be included in the response.
       * @param {string=} params.page_token The value of the nextToken from the previous page.
       * @param {string} params.series_id String that identifies the series
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/books/v1/series/membership/get',
            method: 'GET'
          },
          params: params,
          requiredParams: ['series_id'],
          pathParams: [],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  self.volumes = {

    /**
     * books.volumes.get
     *
     * @desc Gets volume information for a single volume.
     *
     * @alias books.volumes.get
     * @memberOf! books(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.country ISO-3166-1 code to override the IP-based location.
     * @param {boolean=} params.includeNonComicsSeries Set to true to include non-comics series. Defaults to false.
     * @param {string=} params.partner Brand results for partner ID.
     * @param {string=} params.projection Restrict information returned to a set of selected fields.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {boolean=} params.user_library_consistent_read 
     * @param {string} params.volumeId ID of volume to retrieve.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/books/v1/volumes/{volumeId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['volumeId'],
        pathParams: ['volumeId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * books.volumes.list
     *
     * @desc Performs a book search.
     *
     * @alias books.volumes.list
     * @memberOf! books(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.download Restrict to volumes by download availability.
     * @param {string=} params.filter Filter search results.
     * @param {string=} params.langRestrict Restrict results to books with this language code.
     * @param {string=} params.libraryRestrict Restrict search to this user's library.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.orderBy Sort search results.
     * @param {string=} params.partner Restrict and brand results for partner ID.
     * @param {string=} params.printType Restrict to books or magazines.
     * @param {string=} params.projection Restrict information returned to a set of selected fields.
     * @param {string} params.q Full-text search query string.
     * @param {boolean=} params.showPreorders Set to true to show books available for preorder. Defaults to false.
     * @param {string=} params.source String to identify the originator of this request.
     * @param {integer=} params.startIndex Index of the first result to return (starts at 0)
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/books/v1/volumes',
          method: 'GET'
        },
        params: params,
        requiredParams: ['q'],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    associated: {

      /**
       * books.volumes.associated.list
       *
       * @desc Return a list of associated books.
       *
       * @alias books.volumes.associated.list
       * @memberOf! books(v1)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.association Association type.
       * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
       * @param {string=} params.maxAllowedMaturityRating The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
       * @param {string=} params.source String to identify the originator of this request.
       * @param {string} params.volumeId ID of the source volume.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/books/v1/volumes/{volumeId}/associated',
            method: 'GET'
          },
          params: params,
          requiredParams: ['volumeId'],
          pathParams: ['volumeId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    mybooks: {

      /**
       * books.volumes.mybooks.list
       *
       * @desc Return a list of books in My Library.
       *
       * @alias books.volumes.mybooks.list
       * @memberOf! books(v1)
       *
       * @param {object=} params Parameters for request
       * @param {string=} params.acquireMethod How the book was aquired
       * @param {string=} params.country ISO-3166-1 code to override the IP-based location.
       * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex:'en_US'. Used for generating recommendations.
       * @param {integer=} params.maxResults Maximum number of results to return.
       * @param {string=} params.processingState The processing state of the user uploaded volumes to be returned. Applicable only if the UPLOADED is specified in the acquireMethod.
       * @param {string=} params.source String to identify the originator of this request.
       * @param {integer=} params.startIndex Index of the first result to return (starts at 0)
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/books/v1/volumes/mybooks',
            method: 'GET'
          },
          params: params,
          requiredParams: [],
          pathParams: [],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    recommended: {

      /**
       * books.volumes.recommended.list
       *
       * @desc Return a list of recommended books for the current user.
       *
       * @alias books.volumes.recommended.list
       * @memberOf! books(v1)
       *
       * @param {object=} params Parameters for request
       * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
       * @param {string=} params.maxAllowedMaturityRating The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
       * @param {string=} params.source String to identify the originator of this request.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/books/v1/volumes/recommended',
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
       * books.volumes.recommended.rate
       *
       * @desc Rate a recommended book for the current user.
       *
       * @alias books.volumes.recommended.rate
       * @memberOf! books(v1)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
       * @param {string} params.rating Rating to be given to the volume.
       * @param {string=} params.source String to identify the originator of this request.
       * @param {string} params.volumeId ID of the source volume.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      rate: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/books/v1/volumes/recommended/rate',
            method: 'POST'
          },
          params: params,
          requiredParams: ['rating', 'volumeId'],
          pathParams: [],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    useruploaded: {

      /**
       * books.volumes.useruploaded.list
       *
       * @desc Return a list of books uploaded by the current user.
       *
       * @alias books.volumes.useruploaded.list
       * @memberOf! books(v1)
       *
       * @param {object=} params Parameters for request
       * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
       * @param {integer=} params.maxResults Maximum number of results to return.
       * @param {string=} params.processingState The processing state of the user uploaded volumes to be returned.
       * @param {string=} params.source String to identify the originator of this request.
       * @param {integer=} params.startIndex Index of the first result to return (starts at 0)
       * @param {string=} params.volumeId The ids of the volumes to be returned. If not specified all that match the processingState are returned.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/books/v1/volumes/useruploaded',
            method: 'GET'
          },
          params: params,
          requiredParams: [],
          pathParams: [],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };
}

module.exports = Books;
