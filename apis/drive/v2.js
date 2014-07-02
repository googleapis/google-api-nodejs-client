var DefaultTransporter = require('../../lib/transporters.js');
var transporter = new DefaultTransporter();
/**
 * Drive API
 *
 * The API to interact with Drive.
 *
 * @author Google
 * @this Drive
 */

function Drive() {

  var self = this;

  this.auth = function(authObject) {

    if (!authObject || typeof authObject !== 'object') {
      return self;
    } else {
      var newDrive = new Drive();
      if (authObject.authClient) {
        newDrive.authClient = authObject.authClient;
      }
      if (authObject.apiKey) {
        newDrive.apiKey = authObject.apiKey;
      }
      return Object.freeze(newDrive);
    }
  };

  this.about = {

    /**
     * drive.about.get
     *
     * Gets the information about the current user along with Drive API settings
     *
     * @param {boolean=} params.includeSubscribed When calculating the number of remaining change IDs, whether to include public files the user has opened and shared files. When set to false, this counts only change IDs for owned files and any shared or public files that the user has explicitly added to a folder they own.
     * @param {string=} params.maxChangeIdCount Maximum number of remaining change IDs to count
     * @param {string=} params.startChangeId Change ID to start counting from when calculating number of remaining change IDs
     * @param {object} params.resource Body of request
     */
    get: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/about';

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'GET',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    }

  };

  this.apps = {

    /**
     * drive.apps.get
     *
     * Gets a specific app.
     *
     * @param {string} params.appId The ID of the app.
     * @param {object} params.resource Body of request
     */
    get: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/apps/' + params.appId;

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'GET',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.apps.list
     *
     * Lists a user&#39;s installed apps.
     *
     * @param {string=} params.appFilterExtensions A comma-separated list of file extensions for open with filtering. All apps within the given app query scope which can open any of the given file extensions will be included in the response. If appFilterMimeTypes are provided as well, the result is a union of the two resulting app lists.
     * @param {string=} params.appFilterMimeTypes A comma-separated list of MIME types for open with filtering. All apps within the given app query scope which can open any of the given MIME types will be included in the response. If appFilterExtensions are provided as well, the result is a union of the two resulting app lists.
     * @param {string=} params.languageCode A language or locale code, as defined by BCP 47, with some extensions from Unicode&#39;s LDML format (http://www.unicode.org/reports/tr35/).
     * @param {object} params.resource Body of request
     */
    list: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/apps';

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'GET',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    }

  };

  this.changes = {

    /**
     * drive.changes.get
     *
     * Gets a specific change.
     *
     * @param {string} params.changeId The ID of the change.
     * @param {object} params.resource Body of request
     */
    get: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/changes/' + params.changeId;

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'GET',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.changes.list
     *
     * Lists the changes for a user.
     *
     * @param {boolean=} params.includeDeleted Whether to include deleted items.
     * @param {boolean=} params.includeSubscribed Whether to include public files the user has opened and shared files. When set to false, the list only includes owned files plus any shared or public files the user has explicitly added to a folder they own.
     * @param {integer=} params.maxResults Maximum number of changes to return.
     * @param {string=} params.pageToken Page token for changes.
     * @param {string=} params.startChangeId Change ID to start listing changes from.
     * @param {object} params.resource Body of request
     */
    list: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/changes';

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'GET',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.changes.watch
     *
     * Subscribe to changes for a user.
     *
     * @param {boolean=} params.includeDeleted Whether to include deleted items.
     * @param {boolean=} params.includeSubscribed Whether to include public files the user has opened and shared files. When set to false, the list only includes owned files plus any shared or public files the user has explicitly added to a folder they own.
     * @param {integer=} params.maxResults Maximum number of changes to return.
     * @param {string=} params.pageToken Page token for changes.
     * @param {string=} params.startChangeId Change ID to start listing changes from.
     * @param {object} params.resource Body of request
     */
    watch: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/changes/watch';

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'POST',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    }

  };

  this.channels = {

    /**
     * drive.channels.stop
     *
     * Stop watching resources through this channel
     *
     * @param {object} params.resource Body of request
     */
    stop: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/channels/stop';

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'POST',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    }

  };

  this.children = {

    /**
     * drive.children.delete
     *
     * Removes a child from a folder.
     *
     * @param {string} params.childId The ID of the child.
     * @param {string} params.folderId The ID of the folder.
     * @param {object} params.resource Body of request
     */
    delete: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.folderId + '/children/' + params.childId;

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'DELETE',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.children.get
     *
     * Gets a specific child reference.
     *
     * @param {string} params.childId The ID of the child.
     * @param {string} params.folderId The ID of the folder.
     * @param {object} params.resource Body of request
     */
    get: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.folderId + '/children/' + params.childId;

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'GET',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.children.insert
     *
     * Inserts a file into a folder.
     *
     * @param {string} params.folderId The ID of the folder.
     * @param {object} params.resource Body of request
     */
    insert: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.folderId + '/children';

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'POST',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.children.list
     *
     * Lists a folder&#39;s children.
     *
     * @param {string} params.folderId The ID of the folder.
     * @param {integer=} params.maxResults Maximum number of children to return.
     * @param {string=} params.pageToken Page token for children.
     * @param {string=} params.q Query string for searching children.
     * @param {object} params.resource Body of request
     */
    list: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.folderId + '/children';

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'GET',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    }

  };

  this.comments = {

    /**
     * drive.comments.delete
     *
     * Deletes a comment.
     *
     * @param {string} params.commentId The ID of the comment.
     * @param {string} params.fileId The ID of the file.
     * @param {object} params.resource Body of request
     */
    delete: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/comments/' + params.commentId;

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'DELETE',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.comments.get
     *
     * Gets a comment by ID.
     *
     * @param {string} params.commentId The ID of the comment.
     * @param {string} params.fileId The ID of the file.
     * @param {boolean=} params.includeDeleted If set, this will succeed when retrieving a deleted comment, and will include any deleted replies.
     * @param {object} params.resource Body of request
     */
    get: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/comments/' + params.commentId;

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'GET',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.comments.insert
     *
     * Creates a new comment on the given file.
     *
     * @param {string} params.fileId The ID of the file.
     * @param {object} params.resource Body of request
     */
    insert: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/comments';

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'POST',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.comments.list
     *
     * Lists a file&#39;s comments.
     *
     * @param {string} params.fileId The ID of the file.
     * @param {boolean=} params.includeDeleted If set, all comments and replies, including deleted comments and replies (with content stripped) will be returned.
     * @param {integer=} params.maxResults The maximum number of discussions to include in the response, used for paging.
     * @param {string=} params.pageToken The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of &quot;nextPageToken&quot; from the previous response.
     * @param {string=} params.updatedMin Only discussions that were updated after this timestamp will be returned. Formatted as an RFC 3339 timestamp.
     * @param {object} params.resource Body of request
     */
    list: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/comments';

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'GET',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.comments.patch
     *
     * Updates an existing comment. This method supports patch semantics.
     *
     * @param {string} params.commentId The ID of the comment.
     * @param {string} params.fileId The ID of the file.
     * @param {object} params.resource Body of request
     */
    patch: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/comments/' + params.commentId;

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'PATCH',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.comments.update
     *
     * Updates an existing comment.
     *
     * @param {string} params.commentId The ID of the comment.
     * @param {string} params.fileId The ID of the file.
     * @param {object} params.resource Body of request
     */
    update: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/comments/' + params.commentId;

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'PUT',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    }

  };

  this.files = {

    /**
     * drive.files.copy
     *
     * Creates a copy of the specified file.
     *
     * @param {boolean=} params.convert Whether to convert this file to the corresponding Google Docs format.
     * @param {string} params.fileId The ID of the file to copy.
     * @param {boolean=} params.ocr Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
     * @param {string=} params.ocrLanguage If ocr is true, hints at the language to use. Valid values are ISO 639-1 codes.
     * @param {boolean=} params.pinned Whether to pin the head revision of the new copy.
     * @param {string=} params.timedTextLanguage The language of the timed text.
     * @param {string=} params.timedTextTrackName The timed text track name.
     * @param {string=} params.visibility The visibility of the new file. This parameter is only relevant when the source is not a native Google Doc and convert=false.
     * @param {object} params.resource Body of request
     */
    copy: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/copy';

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'POST',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.files.delete
     *
     * Permanently deletes a file by ID. Skips the trash.
     *
     * @param {string} params.fileId The ID of the file to delete.
     * @param {object} params.resource Body of request
     */
    delete: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId;

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'DELETE',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.files.emptyTrash
     *
     * Permanently deletes all of the user&#39;s trashed files.
     *
     * @param {object} params.resource Body of request
     */
    emptyTrash: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/trash';

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'DELETE',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.files.get
     *
     * Gets a file&#39;s metadata by ID.
     *
     * @param {string} params.fileId The ID for the file in question.
     * @param {string=} params.projection This parameter is deprecated and has no function.
     * @param {boolean=} params.updateViewedDate Whether to update the view date after successfully retrieving the file.
     * @param {object} params.resource Body of request
     */
    get: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId;

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'GET',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.files.insert
     *
     * Insert a new file.
     *
     * @param {boolean=} params.convert Whether to convert this file to the corresponding Google Docs format.
     * @param {boolean=} params.ocr Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
     * @param {string=} params.ocrLanguage If ocr is true, hints at the language to use. Valid values are ISO 639-1 codes.
     * @param {boolean=} params.pinned Whether to pin the head revision of the uploaded file.
     * @param {string=} params.timedTextLanguage The language of the timed text.
     * @param {string=} params.timedTextTrackName The timed text track name.
     * @param {boolean=} params.useContentAsIndexableText Whether to use the content as indexable text.
     * @param {string=} params.visibility The visibility of the new file. This parameter is only relevant when convert=false.
     * @param {object} params.resource Body of request
     * @param {object} params.media Media object
     */
    insert: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/upload/drive/v2/files';

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      params.uploadType = 'multipart';
      var multipart = [{
        'Content-Type': 'application/json',
        body: JSON.stringify(media.metadata || {})
      }, {
        'Content-Type': media.mimeType || 'application/octet-stream',
        body: media.data || ''
      }];

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'POST',
        multipart: multipart
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.files.list
     *
     * Lists the user&#39;s files.
     *
     * @param {integer=} params.maxResults Maximum number of files to return.
     * @param {string=} params.pageToken Page token for files.
     * @param {string=} params.projection This parameter is deprecated and has no function.
     * @param {string=} params.q Query string for searching files.
     * @param {object} params.resource Body of request
     */
    list: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files';

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'GET',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.files.patch
     *
     * Updates file metadata and/or content. This method supports patch semantics.
     *
     * @param {string=} params.addParents Comma-separated list of parent IDs to add.
     * @param {boolean=} params.convert Whether to convert this file to the corresponding Google Docs format.
     * @param {string} params.fileId The ID of the file to update.
     * @param {boolean=} params.newRevision Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If not set or true, a new blob is created as head revision, and previous revisions are preserved (causing increased use of the user&#39;s data storage quota).
     * @param {boolean=} params.ocr Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
     * @param {string=} params.ocrLanguage If ocr is true, hints at the language to use. Valid values are ISO 639-1 codes.
     * @param {boolean=} params.pinned Whether to pin the new revision.
     * @param {string=} params.removeParents Comma-separated list of parent IDs to remove.
     * @param {boolean=} params.setModifiedDate Whether to set the modified date with the supplied modified date.
     * @param {string=} params.timedTextLanguage The language of the timed text.
     * @param {string=} params.timedTextTrackName The timed text track name.
     * @param {boolean=} params.updateViewedDate Whether to update the view date after successfully updating the file.
     * @param {boolean=} params.useContentAsIndexableText Whether to use the content as indexable text.
     * @param {object} params.resource Body of request
     */
    patch: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId;

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'PATCH',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.files.touch
     *
     * Set the file&#39;s updated time to the current server time.
     *
     * @param {string} params.fileId The ID of the file to update.
     * @param {object} params.resource Body of request
     */
    touch: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/touch';

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'POST',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.files.trash
     *
     * Moves a file to the trash.
     *
     * @param {string} params.fileId The ID of the file to trash.
     * @param {object} params.resource Body of request
     */
    trash: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/trash';

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'POST',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.files.untrash
     *
     * Restores a file from the trash.
     *
     * @param {string} params.fileId The ID of the file to untrash.
     * @param {object} params.resource Body of request
     */
    untrash: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/untrash';

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'POST',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.files.update
     *
     * Updates file metadata and/or content.
     *
     * @param {string=} params.addParents Comma-separated list of parent IDs to add.
     * @param {boolean=} params.convert Whether to convert this file to the corresponding Google Docs format.
     * @param {string} params.fileId The ID of the file to update.
     * @param {boolean=} params.newRevision Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If not set or true, a new blob is created as head revision, and previous revisions are preserved (causing increased use of the user&#39;s data storage quota).
     * @param {boolean=} params.ocr Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
     * @param {string=} params.ocrLanguage If ocr is true, hints at the language to use. Valid values are ISO 639-1 codes.
     * @param {boolean=} params.pinned Whether to pin the new revision.
     * @param {string=} params.removeParents Comma-separated list of parent IDs to remove.
     * @param {boolean=} params.setModifiedDate Whether to set the modified date with the supplied modified date.
     * @param {string=} params.timedTextLanguage The language of the timed text.
     * @param {string=} params.timedTextTrackName The timed text track name.
     * @param {boolean=} params.updateViewedDate Whether to update the view date after successfully updating the file.
     * @param {boolean=} params.useContentAsIndexableText Whether to use the content as indexable text.
     * @param {object} params.resource Body of request
     * @param {object} params.media Media object
     */
    update: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/upload/drive/v2/files/' + params.fileId;

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      params.uploadType = 'multipart';
      var multipart = [{
        'Content-Type': 'application/json',
        body: JSON.stringify(media.metadata || {})
      }, {
        'Content-Type': media.mimeType || 'application/octet-stream',
        body: media.data || ''
      }];

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'PUT',
        multipart: multipart
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.files.watch
     *
     * Subscribe to changes on a file
     *
     * @param {string} params.fileId The ID for the file in question.
     * @param {string=} params.projection This parameter is deprecated and has no function.
     * @param {boolean=} params.updateViewedDate Whether to update the view date after successfully retrieving the file.
     * @param {object} params.resource Body of request
     */
    watch: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/watch';

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'POST',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    }

  };

  this.parents = {

    /**
     * drive.parents.delete
     *
     * Removes a parent from a file.
     *
     * @param {string} params.fileId The ID of the file.
     * @param {string} params.parentId The ID of the parent.
     * @param {object} params.resource Body of request
     */
    delete: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/parents/' + params.parentId;

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'DELETE',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.parents.get
     *
     * Gets a specific parent reference.
     *
     * @param {string} params.fileId The ID of the file.
     * @param {string} params.parentId The ID of the parent.
     * @param {object} params.resource Body of request
     */
    get: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/parents/' + params.parentId;

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'GET',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.parents.insert
     *
     * Adds a parent folder for a file.
     *
     * @param {string} params.fileId The ID of the file.
     * @param {object} params.resource Body of request
     */
    insert: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/parents';

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'POST',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.parents.list
     *
     * Lists a file&#39;s parents.
     *
     * @param {string} params.fileId The ID of the file.
     * @param {object} params.resource Body of request
     */
    list: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/parents';

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'GET',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    }

  };

  this.permissions = {

    /**
     * drive.permissions.delete
     *
     * Deletes a permission from a file.
     *
     * @param {string} params.fileId The ID for the file.
     * @param {string} params.permissionId The ID for the permission.
     * @param {object} params.resource Body of request
     */
    delete: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/permissions/' + params.permissionId;

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'DELETE',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.permissions.get
     *
     * Gets a permission by ID.
     *
     * @param {string} params.fileId The ID for the file.
     * @param {string} params.permissionId The ID for the permission.
     * @param {object} params.resource Body of request
     */
    get: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/permissions/' + params.permissionId;

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'GET',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.permissions.getIdForEmail
     *
     * Returns the permission ID for an email address.
     *
     * @param {string} params.email The email address for which to return a permission ID
     * @param {object} params.resource Body of request
     */
    getIdForEmail: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/permissionIds/' + params.email;

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'GET',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.permissions.insert
     *
     * Inserts a permission for a file.
     *
     * @param {string=} params.emailMessage A custom message to include in notification emails.
     * @param {string} params.fileId The ID for the file.
     * @param {boolean=} params.sendNotificationEmails Whether to send notification emails when sharing to users or groups. This parameter is ignored and an email is sent if the role is owner.
     * @param {object} params.resource Body of request
     */
    insert: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/permissions';

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'POST',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.permissions.list
     *
     * Lists a file&#39;s permissions.
     *
     * @param {string} params.fileId The ID for the file.
     * @param {object} params.resource Body of request
     */
    list: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/permissions';

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'GET',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.permissions.patch
     *
     * Updates a permission. This method supports patch semantics.
     *
     * @param {string} params.fileId The ID for the file.
     * @param {string} params.permissionId The ID for the permission.
     * @param {boolean=} params.transferOwnership Whether changing a role to &#39;owner&#39; should also downgrade the current owners to writers.
     * @param {object} params.resource Body of request
     */
    patch: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/permissions/' + params.permissionId;

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'PATCH',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.permissions.update
     *
     * Updates a permission.
     *
     * @param {string} params.fileId The ID for the file.
     * @param {string} params.permissionId The ID for the permission.
     * @param {boolean=} params.transferOwnership Whether changing a role to &#39;owner&#39; should also downgrade the current owners to writers.
     * @param {object} params.resource Body of request
     */
    update: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/permissions/' + params.permissionId;

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'PUT',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    }

  };

  this.properties = {

    /**
     * drive.properties.delete
     *
     * Deletes a property.
     *
     * @param {string} params.fileId The ID of the file.
     * @param {string} params.propertyKey The key of the property.
     * @param {string=} params.visibility The visibility of the property.
     * @param {object} params.resource Body of request
     */
    delete: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/properties/' + params.propertyKey;

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'DELETE',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.properties.get
     *
     * Gets a property by its key.
     *
     * @param {string} params.fileId The ID of the file.
     * @param {string} params.propertyKey The key of the property.
     * @param {string=} params.visibility The visibility of the property.
     * @param {object} params.resource Body of request
     */
    get: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/properties/' + params.propertyKey;

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'GET',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.properties.insert
     *
     * Adds a property to a file.
     *
     * @param {string} params.fileId The ID of the file.
     * @param {object} params.resource Body of request
     */
    insert: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/properties';

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'POST',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.properties.list
     *
     * Lists a file&#39;s properties.
     *
     * @param {string} params.fileId The ID of the file.
     * @param {object} params.resource Body of request
     */
    list: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/properties';

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'GET',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.properties.patch
     *
     * Updates a property. This method supports patch semantics.
     *
     * @param {string} params.fileId The ID of the file.
     * @param {string} params.propertyKey The key of the property.
     * @param {string=} params.visibility The visibility of the property.
     * @param {object} params.resource Body of request
     */
    patch: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/properties/' + params.propertyKey;

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'PATCH',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.properties.update
     *
     * Updates a property.
     *
     * @param {string} params.fileId The ID of the file.
     * @param {string} params.propertyKey The key of the property.
     * @param {string=} params.visibility The visibility of the property.
     * @param {object} params.resource Body of request
     */
    update: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/properties/' + params.propertyKey;

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'PUT',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    }

  };

  this.realtime = {

    /**
     * drive.realtime.get
     *
     * Exports the contents of the Realtime API data model associated with this file as JSON.
     *
     * @param {string} params.fileId The ID of the file that the Realtime API data model is associated with.
     * @param {integer=} params.revision The revision of the Realtime API data model to export. Revisions start at 1 (the initial empty data model) and are incremented with each change. If this parameter is excluded, the most recent data model will be returned.
     * @param {object} params.resource Body of request
     */
    get: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/realtime';

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'GET',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.realtime.update
     *
     * Overwrites the Realtime API data model associated with this file with the provided JSON data model.
     *
     * @param {string=} params.baseRevision The revision of the model to diff the uploaded model against. If set, the uploaded model is diffed against the provided revision and those differences are merged with any changes made to the model after the provided revision. If not set, the uploaded model replaces the current model on the server.
     * @param {string} params.fileId The ID of the file that the Realtime API data model is associated with.
     * @param {object} params.resource Body of request
     * @param {object} params.media Media object
     */
    update: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/upload/drive/v2/files/' + params.fileId + '/realtime';

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      params.uploadType = 'multipart';
      var multipart = [{
        'Content-Type': 'application/json',
        body: JSON.stringify(media.metadata || {})
      }, {
        'Content-Type': media.mimeType || 'application/octet-stream',
        body: media.data || ''
      }];

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'PUT',
        multipart: multipart
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    }

  };

  this.replies = {

    /**
     * drive.replies.delete
     *
     * Deletes a reply.
     *
     * @param {string} params.commentId The ID of the comment.
     * @param {string} params.fileId The ID of the file.
     * @param {string} params.replyId The ID of the reply.
     * @param {object} params.resource Body of request
     */
    delete: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/comments/' + params.commentId + '/replies/' + params.replyId;

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'DELETE',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.replies.get
     *
     * Gets a reply.
     *
     * @param {string} params.commentId The ID of the comment.
     * @param {string} params.fileId The ID of the file.
     * @param {boolean=} params.includeDeleted If set, this will succeed when retrieving a deleted reply.
     * @param {string} params.replyId The ID of the reply.
     * @param {object} params.resource Body of request
     */
    get: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/comments/' + params.commentId + '/replies/' + params.replyId;

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'GET',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.replies.insert
     *
     * Creates a new reply to the given comment.
     *
     * @param {string} params.commentId The ID of the comment.
     * @param {string} params.fileId The ID of the file.
     * @param {object} params.resource Body of request
     */
    insert: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/comments/' + params.commentId + '/replies';

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'POST',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.replies.list
     *
     * Lists all of the replies to a comment.
     *
     * @param {string} params.commentId The ID of the comment.
     * @param {string} params.fileId The ID of the file.
     * @param {boolean=} params.includeDeleted If set, all replies, including deleted replies (with content stripped) will be returned.
     * @param {integer=} params.maxResults The maximum number of replies to include in the response, used for paging.
     * @param {string=} params.pageToken The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of &quot;nextPageToken&quot; from the previous response.
     * @param {object} params.resource Body of request
     */
    list: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/comments/' + params.commentId + '/replies';

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'GET',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.replies.patch
     *
     * Updates an existing reply. This method supports patch semantics.
     *
     * @param {string} params.commentId The ID of the comment.
     * @param {string} params.fileId The ID of the file.
     * @param {string} params.replyId The ID of the reply.
     * @param {object} params.resource Body of request
     */
    patch: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/comments/' + params.commentId + '/replies/' + params.replyId;

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'PATCH',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.replies.update
     *
     * Updates an existing reply.
     *
     * @param {string} params.commentId The ID of the comment.
     * @param {string} params.fileId The ID of the file.
     * @param {string} params.replyId The ID of the reply.
     * @param {object} params.resource Body of request
     */
    update: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/comments/' + params.commentId + '/replies/' + params.replyId;

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'PUT',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    }

  };

  this.revisions = {

    /**
     * drive.revisions.delete
     *
     * Removes a revision.
     *
     * @param {string} params.fileId The ID of the file.
     * @param {string} params.revisionId The ID of the revision.
     * @param {object} params.resource Body of request
     */
    delete: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/revisions/' + params.revisionId;

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'DELETE',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.revisions.get
     *
     * Gets a specific revision.
     *
     * @param {string} params.fileId The ID of the file.
     * @param {string} params.revisionId The ID of the revision.
     * @param {object} params.resource Body of request
     */
    get: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/revisions/' + params.revisionId;

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'GET',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.revisions.list
     *
     * Lists a file&#39;s revisions.
     *
     * @param {string} params.fileId The ID of the file.
     * @param {object} params.resource Body of request
     */
    list: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/revisions';

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'GET',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.revisions.patch
     *
     * Updates a revision. This method supports patch semantics.
     *
     * @param {string} params.fileId The ID for the file.
     * @param {string} params.revisionId The ID for the revision.
     * @param {object} params.resource Body of request
     */
    patch: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/revisions/' + params.revisionId;

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'PATCH',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * drive.revisions.update
     *
     * Updates a revision.
     *
     * @param {string} params.fileId The ID for the file.
     * @param {string} params.revisionId The ID for the revision.
     * @param {object} params.resource Body of request
     */
    update: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/drive/v2/files/' + params.fileId + '/revisions/' + params.revisionId;

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'PUT',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    }

  };
}

/**
 * Export Drive object
 * @type Drive
 */
module.exports = Drive;