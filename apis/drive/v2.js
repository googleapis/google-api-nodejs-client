/**
 * Drive API
 *
 * The API to interact with Drive.
 *
 * @author Google
 * @this Drive
 */

function Drive() {

  this.about = {

    /**
     * drive.about.get
     *
     * Gets the information about the current user along with Drive API settings
     ** @param {boolean} query.includeSubscribed When calculating the number of remaining change IDs, whether to include public files the user has opened and shared files. When set to false, this counts only change IDs for owned files and any shared or public files that the user has explicitly added to a folder they own.* @param {string} query.maxChangeIdCount Maximum number of remaining change IDs to count* @param {string} query.startChangeId Change ID to start counting from when calculating number of remaining change IDs*/
    get: function(query, body, callback) {
      /* STUB */
    }

  };

  this.apps = {

    /**
     * drive.apps.get
     *
     * Gets a specific app.
     ** @param {string} query.appId The ID of the app.*/
    get: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.apps.list
     *
     * Lists a user&#39;s installed apps.
     ** @param {string} query.appFilterExtensions A comma-separated list of file extensions for open with filtering. All apps within the given app query scope which can open any of the given file extensions will be included in the response. If appFilterMimeTypes are provided as well, the result is a union of the two resulting app lists.* @param {string} query.appFilterMimeTypes A comma-separated list of MIME types for open with filtering. All apps within the given app query scope which can open any of the given MIME types will be included in the response. If appFilterExtensions are provided as well, the result is a union of the two resulting app lists.* @param {string} query.languageCode A language or locale code, as defined by BCP 47, with some extensions from Unicode&#39;s LDML format (http://www.unicode.org/reports/tr35/).*/
    list: function(query, body, callback) {
      /* STUB */
    }

  };

  this.changes = {

    /**
     * drive.changes.get
     *
     * Gets a specific change.
     ** @param {string} query.changeId The ID of the change.*/
    get: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.changes.list
     *
     * Lists the changes for a user.
     ** @param {boolean} query.includeDeleted Whether to include deleted items.* @param {boolean} query.includeSubscribed Whether to include public files the user has opened and shared files. When set to false, the list only includes owned files plus any shared or public files the user has explicitly added to a folder they own.* @param {integer} query.maxResults Maximum number of changes to return.* @param {string} query.pageToken Page token for changes.* @param {string} query.startChangeId Change ID to start listing changes from.*/
    list: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.changes.watch
     *
     * Subscribe to changes for a user.
     ** @param {boolean} query.includeDeleted Whether to include deleted items.* @param {boolean} query.includeSubscribed Whether to include public files the user has opened and shared files. When set to false, the list only includes owned files plus any shared or public files the user has explicitly added to a folder they own.* @param {integer} query.maxResults Maximum number of changes to return.* @param {string} query.pageToken Page token for changes.* @param {string} query.startChangeId Change ID to start listing changes from.*/
    watch: function(query, body, callback) {
      /* STUB */
    }

  };

  this.channels = {

    /**
     * drive.channels.stop
     *
     * Stop watching resources through this channel
     **/
    stop: function(query, body, callback) {
      /* STUB */
    }

  };

  this.children = {

    /**
     * drive.children.delete
     *
     * Removes a child from a folder.
     ** @param {string} query.childId The ID of the child.* @param {string} query.folderId The ID of the folder.*/
    delete: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.children.get
     *
     * Gets a specific child reference.
     ** @param {string} query.childId The ID of the child.* @param {string} query.folderId The ID of the folder.*/
    get: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.children.insert
     *
     * Inserts a file into a folder.
     ** @param {string} query.folderId The ID of the folder.*/
    insert: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.children.list
     *
     * Lists a folder&#39;s children.
     ** @param {string} query.folderId The ID of the folder.* @param {integer} query.maxResults Maximum number of children to return.* @param {string} query.pageToken Page token for children.* @param {string} query.q Query string for searching children.*/
    list: function(query, body, callback) {
      /* STUB */
    }

  };

  this.comments = {

    /**
     * drive.comments.delete
     *
     * Deletes a comment.
     ** @param {string} query.commentId The ID of the comment.* @param {string} query.fileId The ID of the file.*/
    delete: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.comments.get
     *
     * Gets a comment by ID.
     ** @param {string} query.commentId The ID of the comment.* @param {string} query.fileId The ID of the file.* @param {boolean} query.includeDeleted If set, this will succeed when retrieving a deleted comment, and will include any deleted replies.*/
    get: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.comments.insert
     *
     * Creates a new comment on the given file.
     ** @param {string} query.fileId The ID of the file.*/
    insert: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.comments.list
     *
     * Lists a file&#39;s comments.
     ** @param {string} query.fileId The ID of the file.* @param {boolean} query.includeDeleted If set, all comments and replies, including deleted comments and replies (with content stripped) will be returned.* @param {integer} query.maxResults The maximum number of discussions to include in the response, used for paging.* @param {string} query.pageToken The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of &quot;nextPageToken&quot; from the previous response.* @param {string} query.updatedMin Only discussions that were updated after this timestamp will be returned. Formatted as an RFC 3339 timestamp.*/
    list: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.comments.patch
     *
     * Updates an existing comment. This method supports patch semantics.
     ** @param {string} query.commentId The ID of the comment.* @param {string} query.fileId The ID of the file.*/
    patch: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.comments.update
     *
     * Updates an existing comment.
     ** @param {string} query.commentId The ID of the comment.* @param {string} query.fileId The ID of the file.*/
    update: function(query, body, callback) {
      /* STUB */
    }

  };

  this.files = {

    /**
     * drive.files.copy
     *
     * Creates a copy of the specified file.
     ** @param {boolean} query.convert Whether to convert this file to the corresponding Google Docs format.* @param {string} query.fileId The ID of the file to copy.* @param {boolean} query.ocr Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.* @param {string} query.ocrLanguage If ocr is true, hints at the language to use. Valid values are ISO 639-1 codes.* @param {boolean} query.pinned Whether to pin the head revision of the new copy.* @param {string} query.timedTextLanguage The language of the timed text.* @param {string} query.timedTextTrackName The timed text track name.* @param {string} query.visibility The visibility of the new file. This parameter is only relevant when the source is not a native Google Doc and convert=false.*/
    copy: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.files.delete
     *
     * Permanently deletes a file by ID. Skips the trash.
     ** @param {string} query.fileId The ID of the file to delete.*/
    delete: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.files.emptyTrash
     *
     * Permanently deletes all of the user&#39;s trashed files.
     **/
    emptyTrash: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.files.get
     *
     * Gets a file&#39;s metadata by ID.
     ** @param {string} query.fileId The ID for the file in question.* @param {string} query.projection This parameter is deprecated and has no function.* @param {boolean} query.updateViewedDate Whether to update the view date after successfully retrieving the file.*/
    get: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.files.insert
     *
     * Insert a new file.
     ** @param {boolean} query.convert Whether to convert this file to the corresponding Google Docs format.* @param {boolean} query.ocr Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.* @param {string} query.ocrLanguage If ocr is true, hints at the language to use. Valid values are ISO 639-1 codes.* @param {boolean} query.pinned Whether to pin the head revision of the uploaded file.* @param {string} query.timedTextLanguage The language of the timed text.* @param {string} query.timedTextTrackName The timed text track name.* @param {boolean} query.useContentAsIndexableText Whether to use the content as indexable text.* @param {string} query.visibility The visibility of the new file. This parameter is only relevant when convert=false.*/
    insert: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.files.list
     *
     * Lists the user&#39;s files.
     ** @param {integer} query.maxResults Maximum number of files to return.* @param {string} query.pageToken Page token for files.* @param {string} query.projection This parameter is deprecated and has no function.* @param {string} query.q Query string for searching files.*/
    list: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.files.patch
     *
     * Updates file metadata and/or content. This method supports patch semantics.
     ** @param {string} query.addParents Comma-separated list of parent IDs to add.* @param {boolean} query.convert Whether to convert this file to the corresponding Google Docs format.* @param {string} query.fileId The ID of the file to update.* @param {boolean} query.newRevision Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If not set or true, a new blob is created as head revision, and previous revisions are preserved (causing increased use of the user&#39;s data storage quota).* @param {boolean} query.ocr Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.* @param {string} query.ocrLanguage If ocr is true, hints at the language to use. Valid values are ISO 639-1 codes.* @param {boolean} query.pinned Whether to pin the new revision.* @param {string} query.removeParents Comma-separated list of parent IDs to remove.* @param {boolean} query.setModifiedDate Whether to set the modified date with the supplied modified date.* @param {string} query.timedTextLanguage The language of the timed text.* @param {string} query.timedTextTrackName The timed text track name.* @param {boolean} query.updateViewedDate Whether to update the view date after successfully updating the file.* @param {boolean} query.useContentAsIndexableText Whether to use the content as indexable text.*/
    patch: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.files.touch
     *
     * Set the file&#39;s updated time to the current server time.
     ** @param {string} query.fileId The ID of the file to update.*/
    touch: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.files.trash
     *
     * Moves a file to the trash.
     ** @param {string} query.fileId The ID of the file to trash.*/
    trash: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.files.untrash
     *
     * Restores a file from the trash.
     ** @param {string} query.fileId The ID of the file to untrash.*/
    untrash: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.files.update
     *
     * Updates file metadata and/or content.
     ** @param {string} query.addParents Comma-separated list of parent IDs to add.* @param {boolean} query.convert Whether to convert this file to the corresponding Google Docs format.* @param {string} query.fileId The ID of the file to update.* @param {boolean} query.newRevision Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If not set or true, a new blob is created as head revision, and previous revisions are preserved (causing increased use of the user&#39;s data storage quota).* @param {boolean} query.ocr Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.* @param {string} query.ocrLanguage If ocr is true, hints at the language to use. Valid values are ISO 639-1 codes.* @param {boolean} query.pinned Whether to pin the new revision.* @param {string} query.removeParents Comma-separated list of parent IDs to remove.* @param {boolean} query.setModifiedDate Whether to set the modified date with the supplied modified date.* @param {string} query.timedTextLanguage The language of the timed text.* @param {string} query.timedTextTrackName The timed text track name.* @param {boolean} query.updateViewedDate Whether to update the view date after successfully updating the file.* @param {boolean} query.useContentAsIndexableText Whether to use the content as indexable text.*/
    update: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.files.watch
     *
     * Subscribe to changes on a file
     ** @param {string} query.fileId The ID for the file in question.* @param {string} query.projection This parameter is deprecated and has no function.* @param {boolean} query.updateViewedDate Whether to update the view date after successfully retrieving the file.*/
    watch: function(query, body, callback) {
      /* STUB */
    }

  };

  this.parents = {

    /**
     * drive.parents.delete
     *
     * Removes a parent from a file.
     ** @param {string} query.fileId The ID of the file.* @param {string} query.parentId The ID of the parent.*/
    delete: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.parents.get
     *
     * Gets a specific parent reference.
     ** @param {string} query.fileId The ID of the file.* @param {string} query.parentId The ID of the parent.*/
    get: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.parents.insert
     *
     * Adds a parent folder for a file.
     ** @param {string} query.fileId The ID of the file.*/
    insert: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.parents.list
     *
     * Lists a file&#39;s parents.
     ** @param {string} query.fileId The ID of the file.*/
    list: function(query, body, callback) {
      /* STUB */
    }

  };

  this.permissions = {

    /**
     * drive.permissions.delete
     *
     * Deletes a permission from a file.
     ** @param {string} query.fileId The ID for the file.* @param {string} query.permissionId The ID for the permission.*/
    delete: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.permissions.get
     *
     * Gets a permission by ID.
     ** @param {string} query.fileId The ID for the file.* @param {string} query.permissionId The ID for the permission.*/
    get: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.permissions.getIdForEmail
     *
     * Returns the permission ID for an email address.
     ** @param {string} query.email The email address for which to return a permission ID*/
    getIdForEmail: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.permissions.insert
     *
     * Inserts a permission for a file.
     ** @param {string} query.emailMessage A custom message to include in notification emails.* @param {string} query.fileId The ID for the file.* @param {boolean} query.sendNotificationEmails Whether to send notification emails when sharing to users or groups.*/
    insert: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.permissions.list
     *
     * Lists a file&#39;s permissions.
     ** @param {string} query.fileId The ID for the file.*/
    list: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.permissions.patch
     *
     * Updates a permission. This method supports patch semantics.
     ** @param {string} query.fileId The ID for the file.* @param {string} query.permissionId The ID for the permission.* @param {boolean} query.transferOwnership Whether changing a role to &#39;owner&#39; should also downgrade the current owners to writers.*/
    patch: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.permissions.update
     *
     * Updates a permission.
     ** @param {string} query.fileId The ID for the file.* @param {string} query.permissionId The ID for the permission.* @param {boolean} query.transferOwnership Whether changing a role to &#39;owner&#39; should also downgrade the current owners to writers.*/
    update: function(query, body, callback) {
      /* STUB */
    }

  };

  this.properties = {

    /**
     * drive.properties.delete
     *
     * Deletes a property.
     ** @param {string} query.fileId The ID of the file.* @param {string} query.propertyKey The key of the property.* @param {string} query.visibility The visibility of the property.*/
    delete: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.properties.get
     *
     * Gets a property by its key.
     ** @param {string} query.fileId The ID of the file.* @param {string} query.propertyKey The key of the property.* @param {string} query.visibility The visibility of the property.*/
    get: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.properties.insert
     *
     * Adds a property to a file.
     ** @param {string} query.fileId The ID of the file.*/
    insert: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.properties.list
     *
     * Lists a file&#39;s properties.
     ** @param {string} query.fileId The ID of the file.*/
    list: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.properties.patch
     *
     * Updates a property. This method supports patch semantics.
     ** @param {string} query.fileId The ID of the file.* @param {string} query.propertyKey The key of the property.* @param {string} query.visibility The visibility of the property.*/
    patch: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.properties.update
     *
     * Updates a property.
     ** @param {string} query.fileId The ID of the file.* @param {string} query.propertyKey The key of the property.* @param {string} query.visibility The visibility of the property.*/
    update: function(query, body, callback) {
      /* STUB */
    }

  };

  this.realtime = {

    /**
     * drive.realtime.get
     *
     * Exports the contents of the Realtime API data model associated with this file as JSON.
     ** @param {string} query.fileId The ID of the file that the Realtime API data model is associated with.* @param {integer} query.revision The revision of the Realtime API data model to export. Revisions start at 1 (the initial empty data model) and are incremented with each change. If this parameter is excluded, the most recent data model will be returned.*/
    get: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.realtime.update
     *
     * Overwrites the Realtime API data model associated with this file with the provided JSON data model.
     ** @param {string} query.baseRevision The revision of the model to diff the uploaded model against. If set, the uploaded model is diffed against the provided revision and those differences are merged with any changes made to the model after the provided revision. If not set, the uploaded model replaces the current model on the server.* @param {string} query.fileId The ID of the file that the Realtime API data model is associated with.*/
    update: function(query, body, callback) {
      /* STUB */
    }

  };

  this.replies = {

    /**
     * drive.replies.delete
     *
     * Deletes a reply.
     ** @param {string} query.commentId The ID of the comment.* @param {string} query.fileId The ID of the file.* @param {string} query.replyId The ID of the reply.*/
    delete: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.replies.get
     *
     * Gets a reply.
     ** @param {string} query.commentId The ID of the comment.* @param {string} query.fileId The ID of the file.* @param {boolean} query.includeDeleted If set, this will succeed when retrieving a deleted reply.* @param {string} query.replyId The ID of the reply.*/
    get: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.replies.insert
     *
     * Creates a new reply to the given comment.
     ** @param {string} query.commentId The ID of the comment.* @param {string} query.fileId The ID of the file.*/
    insert: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.replies.list
     *
     * Lists all of the replies to a comment.
     ** @param {string} query.commentId The ID of the comment.* @param {string} query.fileId The ID of the file.* @param {boolean} query.includeDeleted If set, all replies, including deleted replies (with content stripped) will be returned.* @param {integer} query.maxResults The maximum number of replies to include in the response, used for paging.* @param {string} query.pageToken The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of &quot;nextPageToken&quot; from the previous response.*/
    list: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.replies.patch
     *
     * Updates an existing reply. This method supports patch semantics.
     ** @param {string} query.commentId The ID of the comment.* @param {string} query.fileId The ID of the file.* @param {string} query.replyId The ID of the reply.*/
    patch: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.replies.update
     *
     * Updates an existing reply.
     ** @param {string} query.commentId The ID of the comment.* @param {string} query.fileId The ID of the file.* @param {string} query.replyId The ID of the reply.*/
    update: function(query, body, callback) {
      /* STUB */
    }

  };

  this.revisions = {

    /**
     * drive.revisions.delete
     *
     * Removes a revision.
     ** @param {string} query.fileId The ID of the file.* @param {string} query.revisionId The ID of the revision.*/
    delete: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.revisions.get
     *
     * Gets a specific revision.
     ** @param {string} query.fileId The ID of the file.* @param {string} query.revisionId The ID of the revision.*/
    get: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.revisions.list
     *
     * Lists a file&#39;s revisions.
     ** @param {string} query.fileId The ID of the file.*/
    list: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.revisions.patch
     *
     * Updates a revision. This method supports patch semantics.
     ** @param {string} query.fileId The ID for the file.* @param {string} query.revisionId The ID for the revision.*/
    patch: function(query, body, callback) {
      /* STUB */
    },

    /**
     * drive.revisions.update
     *
     * Updates a revision.
     ** @param {string} query.fileId The ID for the file.* @param {string} query.revisionId The ID for the revision.*/
    update: function(query, body, callback) {
      /* STUB */
    }

  };
}

/**
 * Export Drive object
 * @type Drive
 */
module.exports = Drive;