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

import {createAPIRequest} from '../../lib/apirequest';

/**
 * Hangouts Chat API
 *
 *
 *
 * @example
 * const google = require('googleapis');
 * const chat = google.chat('v1');
 *
 * @namespace chat
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Chat
 */
function Chat(options) {
  const self = this;
  self._options = options || {};
  self.dms = {
    conversations: {
      messages: {
        /**
         * chat.dms.conversations.messages.create
         * @desc Creates a message.
         * @alias chat.dms.conversations.messages.create
         * @memberOf! chat(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent Required. Space resource name, in the form "spaces/x". Example: spaces/AAAAMpdlehY
         * @param {string=} params.threadKey Opaque thread identifier string that can be specified to group messages into a single thread. If this is the first message with a given thread identifier, a new thread is created. Subsequent messages with the same thread identifier will be posted into the same thread. This relieves bots and webhooks from having to store the Hangouts Chat thread ID of a thread (created earlier by them) to post further updates to it.  Has no effect if thread field, corresponding to an existing thread, is set in message.
         * @param {chat(v1).Message} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v1/{parent}/messages')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'POST'
                },
                options),
            params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }

      }
    },
    messages: {
      /**
       * chat.dms.messages.create
       * @desc Creates a message.
       * @alias chat.dms.messages.create
       * @memberOf! chat(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.parent Required. Space resource name, in the form "spaces/x". Example: spaces/AAAAMpdlehY
       * @param {string=} params.threadKey Opaque thread identifier string that can be specified to group messages into a single thread. If this is the first message with a given thread identifier, a new thread is created. Subsequent messages with the same thread identifier will be posted into the same thread. This relieves bots and webhooks from having to store the Hangouts Chat thread ID of a thread (created earlier by them) to post further updates to it.  Has no effect if thread field, corresponding to an existing thread, is set in message.
       * @param {chat(v1).Message} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{parent}/messages')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }

    }
  };
  self.rooms = {
    conversations: {
      messages: {
        /**
         * chat.rooms.conversations.messages.create
         * @desc Creates a message.
         * @alias chat.rooms.conversations.messages.create
         * @memberOf! chat(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent Required. Space resource name, in the form "spaces/x". Example: spaces/AAAAMpdlehY
         * @param {string=} params.threadKey Opaque thread identifier string that can be specified to group messages into a single thread. If this is the first message with a given thread identifier, a new thread is created. Subsequent messages with the same thread identifier will be posted into the same thread. This relieves bots and webhooks from having to store the Hangouts Chat thread ID of a thread (created earlier by them) to post further updates to it.  Has no effect if thread field, corresponding to an existing thread, is set in message.
         * @param {chat(v1).Message} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v1/{parent}/messages')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'POST'
                },
                options),
            params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }

      }
    },
    messages: {
      /**
       * chat.rooms.messages.create
       * @desc Creates a message.
       * @alias chat.rooms.messages.create
       * @memberOf! chat(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.parent Required. Space resource name, in the form "spaces/x". Example: spaces/AAAAMpdlehY
       * @param {string=} params.threadKey Opaque thread identifier string that can be specified to group messages into a single thread. If this is the first message with a given thread identifier, a new thread is created. Subsequent messages with the same thread identifier will be posted into the same thread. This relieves bots and webhooks from having to store the Hangouts Chat thread ID of a thread (created earlier by them) to post further updates to it.  Has no effect if thread field, corresponding to an existing thread, is set in message.
       * @param {chat(v1).Message} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{parent}/messages')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }

    }
  };
  self.spaces = {
    /**
     * chat.spaces.get
     * @desc Returns a space.
     * @alias chat.spaces.get
     * @memberOf! chat(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Resource name of the space, in the form "spaces/x".  Example: spaces/AAAAMpdlehY
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * chat.spaces.list
        * @desc Lists spaces the caller is a member of.
        * @alias chat.spaces.list
        * @memberOf! chat(v1)
        *
        * @param {object} params Parameters for request
        * @param {integer=} params.pageSize Requested page size. The value is capped at 1000. Server may return fewer results than requested. If unspecified, server will default to 100.
        * @param {string=} params.pageToken A token identifying a page of results the server should return.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    list(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/spaces').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: self
      };
      return createAPIRequest(parameters, callback);
    },
    members: {
      /**
       * chat.spaces.members.get
       * @desc Returns a membership.
       * @alias chat.spaces.members.get
       * @memberOf! chat(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Required. Resource name of the membership to be retrieved, in the form "spaces/x/members/x".  Example: spaces/AAAAMpdlehY/members/105115627578887013105
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * chat.spaces.members.list
          * @desc Lists human memberships in a space.
          * @alias chat.spaces.members.list
          * @memberOf! chat(v1)
          *
          * @param {object} params Parameters for request
          * @param {integer=} params.pageSize Requested page size. The value is capped at 1000. Server may return fewer results than requested. If unspecified, server will default to 100.
          * @param {string=} params.pageToken A token identifying a page of results the server should return.
          * @param {string} params.parent Required. The resource name of the space for which membership list is to be fetched, in the form "spaces/x".  Example: spaces/AAAAMpdlehY
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      list(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{parent}/members')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }

    },
    messages: {
      /**
       * chat.spaces.messages.create
       * @desc Creates a message.
       * @alias chat.spaces.messages.create
       * @memberOf! chat(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.parent Required. Space resource name, in the form "spaces/x". Example: spaces/AAAAMpdlehY
       * @param {string=} params.threadKey Opaque thread identifier string that can be specified to group messages into a single thread. If this is the first message with a given thread identifier, a new thread is created. Subsequent messages with the same thread identifier will be posted into the same thread. This relieves bots and webhooks from having to store the Hangouts Chat thread ID of a thread (created earlier by them) to post further updates to it.  Has no effect if thread field, corresponding to an existing thread, is set in message.
       * @param {chat(v1).Message} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{parent}/messages')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * chat.spaces.messages.delete
          * @desc Deletes a message.
          * @alias chat.spaces.messages.delete
          * @memberOf! chat(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name Required. Resource name of the message to be deleted, in the form "spaces/x/messages/x"  Example: spaces/AAAAMpdlehY/messages/UMxbHmzDlr4.UMxbHmzDlr4
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      delete (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * chat.spaces.messages.get
          * @desc Returns a message.
          * @alias chat.spaces.messages.get
          * @memberOf! chat(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name Required. Resource name of the message to be retrieved, in the form "spaces/x/messages/x".  Example: spaces/AAAAMpdlehY/messages/UMxbHmzDlr4.UMxbHmzDlr4
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      get(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * chat.spaces.messages.update
          * @desc Updates a message.
          * @alias chat.spaces.messages.update
          * @memberOf! chat(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name Resource name, in the form "spaces/x/messages/x".  Example: spaces/AAAAMpdlehY/messages/UMxbHmzDlr4.UMxbHmzDlr4
          * @param {string=} params.updateMask Required. The field paths to be updated.  Currently supported field paths: "text", "cards".
          * @param {chat(v1).Message} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      update(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'PUT'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }

    }
  };
}
/**
 * @typedef ActionParameter
 * @memberOf! chat(v1)
 * @type object
 * @property {string} key The name of the parameter for the action script.
 * @property {string} value The value of the parameter.
 */
/**
 * @typedef ActionResponse
 * @memberOf! chat(v1)
 * @type object
 * @property {string} type The type of bot response.
 * @property {string} url URL for users to auth or config. (Only for REQUEST_CONFIG response types.)
 */
/**
 * @typedef Annotation
 * @memberOf! chat(v1)
 * @type object
 * @property {integer} length Length of the substring in the plain-text message body this annotation corresponds to.
 * @property {integer} startIndex Start index (0-based, inclusive) in the plain-text message body this annotation corresponds to.
 * @property {string} type The type of this annotation.
 * @property {chat(v1).UserMentionMetadata} userMention The metadata of user mention.
 */
/**
 * @typedef Button
 * @memberOf! chat(v1)
 * @type object
 * @property {chat(v1).ImageButton} imageButton A button with image and onclick action.
 * @property {chat(v1).TextButton} textButton A button with text and onclick action.
 */
/**
 * @typedef Card
 * @memberOf! chat(v1)
 * @type object
 * @property {chat(v1).CardAction[]} cardActions The actions of this card.
 * @property {chat(v1).CardHeader} header The header of the card. A header usually contains a title and an image.
 * @property {string} name Name of the card.
 * @property {chat(v1).Section[]} sections Sections are separated by a line divider.
 */
/**
 * @typedef CardAction
 * @memberOf! chat(v1)
 * @type object
 * @property {string} actionLabel The label used to be displayed in the action menu item.
 * @property {chat(v1).OnClick} onClick The onclick action for this action item.
 */
/**
 * @typedef CardHeader
 * @memberOf! chat(v1)
 * @type object
 * @property {string} imageStyle The image&#39;s type (e.g. square border or circular border).
 * @property {string} imageUrl The URL of the image in the card header.
 * @property {string} subtitle The subtitle of the card header.
 * @property {string} title The title must be specified. The header has a fixed height: if both a title and subtitle is specified, each will take up 1 line. If only the title is specified, it will take up both lines.
 */
/**
 * @typedef Empty
 * @memberOf! chat(v1)
 * @type object
 */
/**
 * @typedef FormAction
 * @memberOf! chat(v1)
 * @type object
 * @property {string} actionMethodName Apps Script function to invoke when the containing element is clicked/activated.
 * @property {chat(v1).ActionParameter[]} parameters List of action parameters.
 */
/**
 * @typedef Image
 * @memberOf! chat(v1)
 * @type object
 * @property {number} aspectRatio The aspect ratio of this image (width/height).
 * @property {string} imageUrl The URL of the image.
 * @property {chat(v1).OnClick} onClick The onclick action.
 */
/**
 * @typedef ImageButton
 * @memberOf! chat(v1)
 * @type object
 * @property {string} icon The icon specified by an enum that indices to an icon provided by Chat API.
 * @property {string} iconUrl The icon specified by a URL.
 * @property {string} name The name of this image_button which will be used for accessibility. Default value will be provided if developers don&#39;t specify.
 * @property {chat(v1).OnClick} onClick The onclick action.
 */
/**
 * @typedef KeyValue
 * @memberOf! chat(v1)
 * @type object
 * @property {string} bottomLabel The text of the bottom label. Formatted text supported.
 * @property {chat(v1).Button} button A button that can be clicked to trigger an action.
 * @property {string} content The text of the content. Formatted text supported and always required.
 * @property {boolean} contentMultiline If the content should be multiline.
 * @property {string} icon An enum value that will be replaced by the Chat API with the corresponding icon image.
 * @property {string} iconUrl The icon specified by a URL.
 * @property {chat(v1).OnClick} onClick The onclick action. Only the top label, bottom label and content region are clickable.
 * @property {string} topLabel The text of the top label. Formatted text supported.
 */
/**
 * @typedef ListMembershipsResponse
 * @memberOf! chat(v1)
 * @type object
 * @property {chat(v1).Membership[]} memberships List of memberships in the requested (or first) page.
 * @property {string} nextPageToken Continuation token to retrieve the next page of results. It will be empty for the last page of results.
 */
/**
 * @typedef ListSpacesResponse
 * @memberOf! chat(v1)
 * @type object
 * @property {string} nextPageToken Continuation token to retrieve the next page of results. It will be empty for the last page of results. Tokens expire in an hour. An error is thrown if an expired token is passed.
 * @property {chat(v1).Space[]} spaces List of spaces in the requested (or first) page.
 */
/**
 * @typedef Membership
 * @memberOf! chat(v1)
 * @type object
 * @property {string} createTime The creation time of the membership a.k.a the time at which the member joined the space, if applicable.
 * @property {chat(v1).User} member Member details.
 * @property {string} name Resource name of the membership, in the form &quot;spaces/x/members/*&quot;.  Example: spaces/AAAAMpdlehY/members/105115627578887013105
 * @property {string} state State of the membership.
 */
/**
 * @typedef Message
 * @memberOf! chat(v1)
 * @type object
 * @property {chat(v1).ActionResponse} actionResponse Input only. Parameters that a bot can use to configure how its response is posted.
 * @property {chat(v1).Annotation[]} annotations Output only. Annotations associated with the text in this message.
 * @property {chat(v1).Card[]} cards Rich, formatted and interactive cards that can be used to display UI elements such as: formatted texts, buttons, clickable images. Cards are normally displayed below the plain-text body of the message.
 * @property {string} createTime Output only. The time at which the message was created in Hangouts Chat server.
 * @property {string} fallbackText A plain-text description of the message&#39;s cards, used when the actual cards cannot be displayed (e.g. mobile notifications).
 * @property {string} name Resource name, in the form &quot;spaces/x/messages/*&quot;.  Example: spaces/AAAAMpdlehY/messages/UMxbHmzDlr4.UMxbHmzDlr4
 * @property {string} previewText Text for generating preview chips. This text will not be displayed to the user, but any links to images, web pages, videos, etc. included here will generate preview chips.
 * @property {chat(v1).User} sender The user who created the message.
 * @property {chat(v1).Space} space The space the message belongs to.
 * @property {string} text Plain-text body of the message.
 * @property {chat(v1).Thread} thread The thread the message belongs to.
 */
/**
 * @typedef OnClick
 * @memberOf! chat(v1)
 * @type object
 * @property {chat(v1).FormAction} action A form action will be trigger by this onclick if specified.
 * @property {chat(v1).OpenLink} openLink This onclick triggers an open link action if specified.
 */
/**
 * @typedef OpenLink
 * @memberOf! chat(v1)
 * @type object
 * @property {string} url The URL to open.
 */
/**
 * @typedef Section
 * @memberOf! chat(v1)
 * @type object
 * @property {string} header The header of the section, text formatted supported.
 * @property {chat(v1).WidgetMarkup[]} widgets A section must contain at least 1 widget.
 */
/**
 * @typedef Space
 * @memberOf! chat(v1)
 * @type object
 * @property {string} displayName Output only. The display name (only if the space is a room).
 * @property {string} name Resource name of the space, in the form &quot;spaces/*&quot;.  Example: spaces/AAAAMpdlehYs
 * @property {string} type Output only. The type of a space.
 */
/**
 * @typedef TextButton
 * @memberOf! chat(v1)
 * @type object
 * @property {chat(v1).OnClick} onClick The onclick action of the button.
 * @property {string} text The text of the button.
 */
/**
 * @typedef TextParagraph
 * @memberOf! chat(v1)
 * @type object
 * @property {string} text
 */
/**
 * @typedef Thread
 * @memberOf! chat(v1)
 * @type object
 * @property {string} name Resource name, in the form &quot;spaces/x/threads/*&quot;.  Example: spaces/AAAAMpdlehY/threads/UMxbHmzDlr4
 */
/**
 * @typedef User
 * @memberOf! chat(v1)
 * @type object
 * @property {string} displayName The user&#39;s display name.
 * @property {string} name Resource name, in the format &quot;users/*&quot;.
 * @property {string} type User type.
 */
/**
 * @typedef UserMentionMetadata
 * @memberOf! chat(v1)
 * @type object
 * @property {string} type The type of user mention.
 * @property {chat(v1).User} user The user mentioned.
 */
/**
 * @typedef WidgetMarkup
 * @memberOf! chat(v1)
 * @type object
 * @property {chat(v1).Button[]} buttons A list of buttons. Buttons is also oneof data and only one of these fields should be set.
 * @property {chat(v1).Image} image Display an image in this widget.
 * @property {chat(v1).KeyValue} keyValue Display a key value item in this widget.
 * @property {chat(v1).TextParagraph} textParagraph Display a text paragraph in this widget.
 */

export = Chat;
