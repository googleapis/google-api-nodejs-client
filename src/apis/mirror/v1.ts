/**
 * Copyright 2019 Google LLC
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

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
} from 'google-auth-library';
import {
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  GlobalOptions,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {GaxiosPromise} from 'gaxios';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace mirror_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * Data format for the response.
     */
    alt?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
  }

  /**
   * Google Mirror API
   *
   * Interacts with Glass users via the timeline.
   *
   * @example
   * const {google} = require('googleapis');
   * const mirror = google.mirror('v1');
   *
   * @namespace mirror
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Mirror
   */
  export class Mirror {
    context: APIRequestContext;
    accounts: Resource$Accounts;
    contacts: Resource$Contacts;
    locations: Resource$Locations;
    settings: Resource$Settings;
    subscriptions: Resource$Subscriptions;
    timeline: Resource$Timeline;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accounts = new Resource$Accounts(this.context);
      this.contacts = new Resource$Contacts(this.context);
      this.locations = new Resource$Locations(this.context);
      this.settings = new Resource$Settings(this.context);
      this.subscriptions = new Resource$Subscriptions(this.context);
      this.timeline = new Resource$Timeline(this.context);
    }
  }

  /**
   * Represents an account passed into the Account Manager on Glass.
   */
  export interface Schema$Account {
    authTokens?: Schema$AuthToken[];
    features?: string[] | null;
    password?: string | null;
    userData?: Schema$UserData[];
  }
  /**
   * Represents media content, such as a photo, that can be attached to a timeline item.
   */
  export interface Schema$Attachment {
    /**
     * The MIME type of the attachment.
     */
    contentType?: string | null;
    /**
     * The URL for the content.
     */
    contentUrl?: string | null;
    /**
     * The ID of the attachment.
     */
    id?: string | null;
    /**
     * Indicates that the contentUrl is not available because the attachment content is still being processed. If the caller wishes to retrieve the content, it should try again later.
     */
    isProcessingContent?: boolean | null;
  }
  /**
   * A list of Attachments. This is the response from the server to GET requests on the attachments collection.
   */
  export interface Schema$AttachmentsListResponse {
    /**
     * The list of attachments.
     */
    items?: Schema$Attachment[];
    /**
     * The type of resource. This is always mirror#attachmentsList.
     */
    kind?: string | null;
  }
  export interface Schema$AuthToken {
    authToken?: string | null;
    type?: string | null;
  }
  /**
   * A single menu command that is part of a Contact.
   */
  export interface Schema$Command {
    /**
     * The type of operation this command corresponds to. Allowed values are:   - TAKE_A_NOTE - Shares a timeline item with the transcription of user speech from the &quot;Take a note&quot; voice menu command.   - POST_AN_UPDATE - Shares a timeline item with the transcription of user speech from the &quot;Post an update&quot; voice menu command.
     */
    type?: string | null;
  }
  /**
   * A person or group that can be used as a creator or a contact.
   */
  export interface Schema$Contact {
    /**
     * A list of voice menu commands that a contact can handle. Glass shows up to three contacts for each voice menu command. If there are more than that, the three contacts with the highest priority are shown for that particular command.
     */
    acceptCommands?: Schema$Command[];
    /**
     * A list of MIME types that a contact supports. The contact will be shown to the user if any of its acceptTypes matches any of the types of the attachments on the item. If no acceptTypes are given, the contact will be shown for all items.
     */
    acceptTypes?: string[] | null;
    /**
     * The name to display for this contact.
     */
    displayName?: string | null;
    /**
     * An ID for this contact. This is generated by the application and is treated as an opaque token.
     */
    id?: string | null;
    /**
     * Set of image URLs to display for a contact. Most contacts will have a single image, but a &quot;group&quot; contact may include up to 8 image URLs and they will be resized and cropped into a mosaic on the client.
     */
    imageUrls?: string[] | null;
    /**
     * The type of resource. This is always mirror#contact.
     */
    kind?: string | null;
    /**
     * Primary phone number for the contact. This can be a fully-qualified number, with country calling code and area code, or a local number.
     */
    phoneNumber?: string | null;
    /**
     * Priority for the contact to determine ordering in a list of contacts. Contacts with higher priorities will be shown before ones with lower priorities.
     */
    priority?: number | null;
    /**
     * A list of sharing features that a contact can handle. Allowed values are:   - ADD_CAPTION
     */
    sharingFeatures?: string[] | null;
    /**
     * The ID of the application that created this contact. This is populated by the API
     */
    source?: string | null;
    /**
     * Name of this contact as it should be pronounced. If this contact&#39;s name must be spoken as part of a voice disambiguation menu, this name is used as the expected pronunciation. This is useful for contact names with unpronounceable characters or whose display spelling is otherwise not phonetic.
     */
    speakableName?: string | null;
    /**
     * The type for this contact. This is used for sorting in UIs. Allowed values are:   - INDIVIDUAL - Represents a single person. This is the default.  - GROUP - Represents more than a single person.
     */
    type?: string | null;
  }
  /**
   * A list of Contacts representing contacts. This is the response from the server to GET requests on the contacts collection.
   */
  export interface Schema$ContactsListResponse {
    /**
     * Contact list.
     */
    items?: Schema$Contact[];
    /**
     * The type of resource. This is always mirror#contacts.
     */
    kind?: string | null;
  }
  /**
   * A geographic location that can be associated with a timeline item.
   */
  export interface Schema$Location {
    /**
     * The accuracy of the location fix in meters.
     */
    accuracy?: number | null;
    /**
     * The full address of the location.
     */
    address?: string | null;
    /**
     * The name to be displayed. This may be a business name or a user-defined place, such as &quot;Home&quot;.
     */
    displayName?: string | null;
    /**
     * The ID of the location.
     */
    id?: string | null;
    /**
     * The type of resource. This is always mirror#location.
     */
    kind?: string | null;
    /**
     * The latitude, in degrees.
     */
    latitude?: number | null;
    /**
     * The longitude, in degrees.
     */
    longitude?: number | null;
    /**
     * The time at which this location was captured, formatted according to RFC 3339.
     */
    timestamp?: string | null;
  }
  /**
   * A list of Locations. This is the response from the server to GET requests on the locations collection.
   */
  export interface Schema$LocationsListResponse {
    /**
     * The list of locations.
     */
    items?: Schema$Location[];
    /**
     * The type of resource. This is always mirror#locationsList.
     */
    kind?: string | null;
  }
  /**
   * A custom menu item that can be presented to the user by a timeline item.
   */
  export interface Schema$MenuItem {
    /**
     * Controls the behavior when the user picks the menu option. Allowed values are:   - CUSTOM - Custom action set by the service. When the user selects this menuItem, the API triggers a notification to your callbackUrl with the userActions.type set to CUSTOM and the userActions.payload set to the ID of this menu item. This is the default value.  - Built-in actions:   - REPLY - Initiate a reply to the timeline item using the voice recording UI. The creator attribute must be set in the timeline item for this menu to be available.  - REPLY_ALL - Same behavior as REPLY. The original timeline item&#39;s recipients will be added to the reply item.  - DELETE - Delete the timeline item.  - SHARE - Share the timeline item with the available contacts.  - READ_ALOUD - Read the timeline item&#39;s speakableText aloud; if this field is not set, read the text field; if none of those fields are set, this menu item is ignored.  - GET_MEDIA_INPUT - Allow users to provide media payloads to Glassware from a menu item (currently, only transcribed text from voice input is supported). Subscribe to notifications when users invoke this menu item to receive the timeline item ID. Retrieve the media from the timeline item in the payload property.  - VOICE_CALL - Initiate a phone call using the timeline item&#39;s creator.phoneNumber attribute as recipient.  - NAVIGATE - Navigate to the timeline item&#39;s location.  - TOGGLE_PINNED - Toggle the isPinned state of the timeline item.  - OPEN_URI - Open the payload of the menu item in the browser.  - PLAY_VIDEO - Open the payload of the menu item in the Glass video player.  - SEND_MESSAGE - Initiate sending a message to the timeline item&#39;s creator:   - If the creator.phoneNumber is set and Glass is connected to an Android phone, the message is an SMS.  - Otherwise, if the creator.email is set, the message is an email.
     */
    action?: string | null;
    /**
     * The ContextualMenus.Command associated with this MenuItem (e.g. READ_ALOUD). The voice label for this command will be displayed in the voice menu and the touch label will be displayed in the touch menu. Note that the default menu value&#39;s display name will be overriden if you specify this property. Values that do not correspond to a ContextualMenus.Command name will be ignored.
     */
    contextual_command?: string | null;
    /**
     * The ID for this menu item. This is generated by the application and is treated as an opaque token.
     */
    id?: string | null;
    /**
     * A generic payload whose meaning changes depending on this MenuItem&#39;s action.   - When the action is OPEN_URI, the payload is the URL of the website to view.  - When the action is PLAY_VIDEO, the payload is the streaming URL of the video  - When the action is GET_MEDIA_INPUT, the payload is the text transcription of a user&#39;s speech input
     */
    payload?: string | null;
    /**
     * If set to true on a CUSTOM menu item, that item will be removed from the menu after it is selected.
     */
    removeWhenSelected?: boolean | null;
    /**
     * For CUSTOM items, a list of values controlling the appearance of the menu item in each of its states. A value for the DEFAULT state must be provided. If the PENDING or CONFIRMED states are missing, they will not be shown.
     */
    values?: Schema$MenuValue[];
  }
  /**
   * A single value that is part of a MenuItem.
   */
  export interface Schema$MenuValue {
    /**
     * The name to display for the menu item. If you specify this property for a built-in menu item, the default contextual voice command for that menu item is not shown.
     */
    displayName?: string | null;
    /**
     * URL of an icon to display with the menu item.
     */
    iconUrl?: string | null;
    /**
     * The state that this value applies to. Allowed values are:   - DEFAULT - Default value shown when displayed in the menuItems list.  - PENDING - Value shown when the menuItem has been selected by the user but can still be cancelled.  - CONFIRMED - Value shown when the menuItem has been selected by the user and can no longer be cancelled.
     */
    state?: string | null;
  }
  /**
   * A notification delivered by the API.
   */
  export interface Schema$Notification {
    /**
     * The collection that generated the notification.
     */
    collection?: string | null;
    /**
     * The ID of the item that generated the notification.
     */
    itemId?: string | null;
    /**
     * The type of operation that generated the notification.
     */
    operation?: string | null;
    /**
     * A list of actions taken by the user that triggered the notification.
     */
    userActions?: Schema$UserAction[];
    /**
     * The user token provided by the service when it subscribed for notifications.
     */
    userToken?: string | null;
    /**
     * The secret verify token provided by the service when it subscribed for notifications.
     */
    verifyToken?: string | null;
  }
  /**
   * Controls how notifications for a timeline item are presented to the user.
   */
  export interface Schema$NotificationConfig {
    /**
     * The time at which the notification should be delivered.
     */
    deliveryTime?: string | null;
    /**
     * Describes how important the notification is. Allowed values are:   - DEFAULT - Notifications of default importance. A chime will be played to alert users.
     */
    level?: string | null;
  }
  /**
   * A setting for Glass.
   */
  export interface Schema$Setting {
    /**
     * The setting&#39;s ID. The following IDs are valid:   - locale - The key to the user’s language/locale (BCP 47 identifier) that Glassware should use to render localized content.   - timezone - The key to the user’s current time zone region as defined in the tz database. Example: America/Los_Angeles.
     */
    id?: string | null;
    /**
     * The type of resource. This is always mirror#setting.
     */
    kind?: string | null;
    /**
     * The setting value, as a string.
     */
    value?: string | null;
  }
  /**
   * A subscription to events on a collection.
   */
  export interface Schema$Subscription {
    /**
     * The URL where notifications should be delivered (must start with https://).
     */
    callbackUrl?: string | null;
    /**
     * The collection to subscribe to. Allowed values are:   - timeline - Changes in the timeline including insertion, deletion, and updates.  - locations - Location updates.  - settings - Settings updates.
     */
    collection?: string | null;
    /**
     * The ID of the subscription.
     */
    id?: string | null;
    /**
     * The type of resource. This is always mirror#subscription.
     */
    kind?: string | null;
    /**
     * Container object for notifications. This is not populated in the Subscription resource.
     */
    notification?: Schema$Notification;
    /**
     * A list of operations that should be subscribed to. An empty list indicates that all operations on the collection should be subscribed to. Allowed values are:   - UPDATE - The item has been updated.  - INSERT - A new item has been inserted.  - DELETE - The item has been deleted.  - MENU_ACTION - A custom menu item has been triggered by the user.
     */
    operation?: string[] | null;
    /**
     * The time at which this subscription was last modified, formatted according to RFC 3339.
     */
    updated?: string | null;
    /**
     * An opaque token sent to the subscriber in notifications so that it can determine the ID of the user.
     */
    userToken?: string | null;
    /**
     * A secret token sent to the subscriber in notifications so that it can verify that the notification was generated by Google.
     */
    verifyToken?: string | null;
  }
  /**
   * A list of Subscriptions. This is the response from the server to GET requests on the subscription collection.
   */
  export interface Schema$SubscriptionsListResponse {
    /**
     * The list of subscriptions.
     */
    items?: Schema$Subscription[];
    /**
     * The type of resource. This is always mirror#subscriptionsList.
     */
    kind?: string | null;
  }
  /**
   * Each item in the user&#39;s timeline is represented as a TimelineItem JSON structure, described below.
   */
  export interface Schema$TimelineItem {
    /**
     * A list of media attachments associated with this item. As a convenience, you can refer to attachments in your HTML payloads with the attachment or cid scheme. For example:   - attachment: &lt;img src=&quot;attachment:attachment_index&quot;&gt; where attachment_index is the 0-based index of this array.  - cid: &lt;img src=&quot;cid:attachment_id&quot;&gt; where attachment_id is the ID of the attachment.
     */
    attachments?: Schema$Attachment[];
    /**
     * The bundle ID for this item. Services can specify a bundleId to group many items together. They appear under a single top-level item on the device.
     */
    bundleId?: string | null;
    /**
     * A canonical URL pointing to the canonical/high quality version of the data represented by the timeline item.
     */
    canonicalUrl?: string | null;
    /**
     * The time at which this item was created, formatted according to RFC 3339.
     */
    created?: string | null;
    /**
     * The user or group that created this item.
     */
    creator?: Schema$Contact;
    /**
     * The time that should be displayed when this item is viewed in the timeline, formatted according to RFC 3339. This user&#39;s timeline is sorted chronologically on display time, so this will also determine where the item is displayed in the timeline. If not set by the service, the display time defaults to the updated time.
     */
    displayTime?: string | null;
    /**
     * ETag for this item.
     */
    etag?: string | null;
    /**
     * HTML content for this item. If both text and html are provided for an item, the html will be rendered in the timeline. Allowed HTML elements - You can use these elements in your timeline cards.   - Headers: h1, h2, h3, h4, h5, h6  - Images: img  - Lists: li, ol, ul  - HTML5 semantics: article, aside, details, figure, figcaption, footer, header, nav, section, summary, time  - Structural: blockquote, br, div, hr, p, span  - Style: b, big, center, em, i, u, s, small, strike, strong, style, sub, sup  - Tables: table, tbody, td, tfoot, th, thead, tr   Blocked HTML elements: These elements and their contents are removed from HTML payloads.   - Document headers: head, title  - Embeds: audio, embed, object, source, video  - Frames: frame, frameset  - Scripting: applet, script   Other elements: Any elements that aren&#39;t listed are removed, but their contents are preserved.
     */
    html?: string | null;
    /**
     * The ID of the timeline item. This is unique within a user&#39;s timeline.
     */
    id?: string | null;
    /**
     * If this item was generated as a reply to another item, this field will be set to the ID of the item being replied to. This can be used to attach a reply to the appropriate conversation or post.
     */
    inReplyTo?: string | null;
    /**
     * Whether this item is a bundle cover.  If an item is marked as a bundle cover, it will be the entry point to the bundle of items that have the same bundleId as that item. It will be shown only on the main timeline — not within the opened bundle.  On the main timeline, items that are shown are:   - Items that have isBundleCover set to true   - Items that do not have a bundleId  In a bundle sub-timeline, items that are shown are:   - Items that have the bundleId in question AND isBundleCover set to false
     */
    isBundleCover?: boolean | null;
    /**
     * When true, indicates this item is deleted, and only the ID property is set.
     */
    isDeleted?: boolean | null;
    /**
     * When true, indicates this item is pinned, which means it&#39;s grouped alongside &quot;active&quot; items like navigation and hangouts, on the opposite side of the home screen from historical (non-pinned) timeline items. You can allow the user to toggle the value of this property with the TOGGLE_PINNED built-in menu item.
     */
    isPinned?: boolean | null;
    /**
     * The type of resource. This is always mirror#timelineItem.
     */
    kind?: string | null;
    /**
     * The geographic location associated with this item.
     */
    location?: Schema$Location;
    /**
     * A list of menu items that will be presented to the user when this item is selected in the timeline.
     */
    menuItems?: Schema$MenuItem[];
    /**
     * Controls how notifications for this item are presented on the device. If this is missing, no notification will be generated.
     */
    notification?: Schema$NotificationConfig;
    /**
     * For pinned items, this determines the order in which the item is displayed in the timeline, with a higher score appearing closer to the clock. Note: setting this field is currently not supported.
     */
    pinScore?: number | null;
    /**
     * A list of users or groups that this item has been shared with.
     */
    recipients?: Schema$Contact[];
    /**
     * A URL that can be used to retrieve this item.
     */
    selfLink?: string | null;
    /**
     * Opaque string you can use to map a timeline item to data in your own service.
     */
    sourceItemId?: string | null;
    /**
     * The speakable version of the content of this item. Along with the READ_ALOUD menu item, use this field to provide text that would be clearer when read aloud, or to provide extended information to what is displayed visually on Glass.  Glassware should also specify the speakableType field, which will be spoken before this text in cases where the additional context is useful, for example when the user requests that the item be read aloud following a notification.
     */
    speakableText?: string | null;
    /**
     * A speakable description of the type of this item. This will be announced to the user prior to reading the content of the item in cases where the additional context is useful, for example when the user requests that the item be read aloud following a notification.  This should be a short, simple noun phrase such as &quot;Email&quot;, &quot;Text message&quot;, or &quot;Daily Planet News Update&quot;.  Glassware are encouraged to populate this field for every timeline item, even if the item does not contain speakableText or text so that the user can learn the type of the item without looking at the screen.
     */
    speakableType?: string | null;
    /**
     * Text content of this item.
     */
    text?: string | null;
    /**
     * The title of this item.
     */
    title?: string | null;
    /**
     * The time at which this item was last modified, formatted according to RFC 3339.
     */
    updated?: string | null;
  }
  /**
   * A list of timeline items. This is the response from the server to GET requests on the timeline collection.
   */
  export interface Schema$TimelineListResponse {
    /**
     * Items in the timeline.
     */
    items?: Schema$TimelineItem[];
    /**
     * The type of resource. This is always mirror#timeline.
     */
    kind?: string | null;
    /**
     * The next page token. Provide this as the pageToken parameter in the request to retrieve the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Represents an action taken by the user that triggered a notification.
   */
  export interface Schema$UserAction {
    /**
     * An optional payload for the action.  For actions of type CUSTOM, this is the ID of the custom menu item that was selected.
     */
    payload?: string | null;
    /**
     * The type of action. The value of this can be:   - SHARE - the user shared an item.  - REPLY - the user replied to an item.  - REPLY_ALL - the user replied to all recipients of an item.  - CUSTOM - the user selected a custom menu item on the timeline item.  - DELETE - the user deleted the item.  - PIN - the user pinned the item.  - UNPIN - the user unpinned the item.  - LAUNCH - the user initiated a voice command.  In the future, additional types may be added. UserActions with unrecognized types should be ignored.
     */
    type?: string | null;
  }
  export interface Schema$UserData {
    key?: string | null;
    value?: string | null;
  }

  export class Resource$Accounts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * mirror.accounts.insert
     * @desc Inserts a new account for a user
     * @alias mirror.accounts.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountName The name of the account to be passed to the Android Account Manager.
     * @param {string} params.accountType Account type to be passed to Android Account Manager.
     * @param {string} params.userToken The ID for the user.
     * @param {().Account} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Accounts$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Account>;
    insert(
      params: Params$Resource$Accounts$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    insert(
      params: Params$Resource$Accounts$Insert,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Account>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Accounts$Insert
        | BodyResponseCallback<Schema$Account>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback?: BodyResponseCallback<Schema$Account>
    ): void | GaxiosPromise<Schema$Account> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/mirror/v1/accounts/{userToken}/{accountType}/{accountName}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userToken', 'accountType', 'accountName'],
        pathParams: ['accountName', 'accountType', 'userToken'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Account>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Account>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Insert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the account to be passed to the Android Account Manager.
     */
    accountName?: string;
    /**
     * Account type to be passed to Android Account Manager.
     */
    accountType?: string;
    /**
     * The ID for the user.
     */
    userToken?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Account;
  }

  export class Resource$Contacts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * mirror.contacts.delete
     * @desc Deletes a contact.
     * @alias mirror.contacts.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The ID of the contact.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Contacts$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Contacts$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Contacts$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Contacts$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Contacts$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Contacts$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/mirror/v1/contacts/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * mirror.contacts.get
     * @desc Gets a single contact by ID.
     * @alias mirror.contacts.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The ID of the contact.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Contacts$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Contact>;
    get(
      params: Params$Resource$Contacts$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Contact>,
      callback: BodyResponseCallback<Schema$Contact>
    ): void;
    get(
      params: Params$Resource$Contacts$Get,
      callback: BodyResponseCallback<Schema$Contact>
    ): void;
    get(callback: BodyResponseCallback<Schema$Contact>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Contacts$Get
        | BodyResponseCallback<Schema$Contact>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Contact>,
      callback?: BodyResponseCallback<Schema$Contact>
    ): void | GaxiosPromise<Schema$Contact> {
      let params = (paramsOrCallback || {}) as Params$Resource$Contacts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Contacts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/mirror/v1/contacts/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Contact>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Contact>(parameters);
      }
    }

    /**
     * mirror.contacts.insert
     * @desc Inserts a new contact.
     * @alias mirror.contacts.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().Contact} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Contacts$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Contact>;
    insert(
      params: Params$Resource$Contacts$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Contact>,
      callback: BodyResponseCallback<Schema$Contact>
    ): void;
    insert(
      params: Params$Resource$Contacts$Insert,
      callback: BodyResponseCallback<Schema$Contact>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Contact>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Contacts$Insert
        | BodyResponseCallback<Schema$Contact>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Contact>,
      callback?: BodyResponseCallback<Schema$Contact>
    ): void | GaxiosPromise<Schema$Contact> {
      let params = (paramsOrCallback || {}) as Params$Resource$Contacts$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Contacts$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/mirror/v1/contacts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Contact>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Contact>(parameters);
      }
    }

    /**
     * mirror.contacts.list
     * @desc Retrieves a list of contacts for the authenticated user.
     * @alias mirror.contacts.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Contacts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ContactsListResponse>;
    list(
      params: Params$Resource$Contacts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ContactsListResponse>,
      callback: BodyResponseCallback<Schema$ContactsListResponse>
    ): void;
    list(
      params: Params$Resource$Contacts$List,
      callback: BodyResponseCallback<Schema$ContactsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ContactsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Contacts$List
        | BodyResponseCallback<Schema$ContactsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ContactsListResponse>,
      callback?: BodyResponseCallback<Schema$ContactsListResponse>
    ): void | GaxiosPromise<Schema$ContactsListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Contacts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Contacts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/mirror/v1/contacts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ContactsListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ContactsListResponse>(parameters);
      }
    }

    /**
     * mirror.contacts.patch
     * @desc Updates a contact in place. This method supports patch semantics.
     * @alias mirror.contacts.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The ID of the contact.
     * @param {().Contact} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Contacts$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Contact>;
    patch(
      params: Params$Resource$Contacts$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Contact>,
      callback: BodyResponseCallback<Schema$Contact>
    ): void;
    patch(
      params: Params$Resource$Contacts$Patch,
      callback: BodyResponseCallback<Schema$Contact>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Contact>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Contacts$Patch
        | BodyResponseCallback<Schema$Contact>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Contact>,
      callback?: BodyResponseCallback<Schema$Contact>
    ): void | GaxiosPromise<Schema$Contact> {
      let params = (paramsOrCallback || {}) as Params$Resource$Contacts$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Contacts$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/mirror/v1/contacts/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Contact>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Contact>(parameters);
      }
    }

    /**
     * mirror.contacts.update
     * @desc Updates a contact in place.
     * @alias mirror.contacts.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The ID of the contact.
     * @param {().Contact} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Contacts$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Contact>;
    update(
      params: Params$Resource$Contacts$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Contact>,
      callback: BodyResponseCallback<Schema$Contact>
    ): void;
    update(
      params: Params$Resource$Contacts$Update,
      callback: BodyResponseCallback<Schema$Contact>
    ): void;
    update(callback: BodyResponseCallback<Schema$Contact>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Contacts$Update
        | BodyResponseCallback<Schema$Contact>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Contact>,
      callback?: BodyResponseCallback<Schema$Contact>
    ): void | GaxiosPromise<Schema$Contact> {
      let params = (paramsOrCallback || {}) as Params$Resource$Contacts$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Contacts$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/mirror/v1/contacts/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Contact>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Contact>(parameters);
      }
    }
  }

  export interface Params$Resource$Contacts$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the contact.
     */
    id?: string;
  }
  export interface Params$Resource$Contacts$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the contact.
     */
    id?: string;
  }
  export interface Params$Resource$Contacts$Insert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Contact;
  }
  export interface Params$Resource$Contacts$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
  }
  export interface Params$Resource$Contacts$Patch extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the contact.
     */
    id?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Contact;
  }
  export interface Params$Resource$Contacts$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the contact.
     */
    id?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Contact;
  }

  export class Resource$Locations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * mirror.locations.get
     * @desc Gets a single location by ID.
     * @alias mirror.locations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The ID of the location or latest for the last known location.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Locations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Location>;
    get(
      params: Params$Resource$Locations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(
      params: Params$Resource$Locations$Get,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(callback: BodyResponseCallback<Schema$Location>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Locations$Get
        | BodyResponseCallback<Schema$Location>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback?: BodyResponseCallback<Schema$Location>
    ): void | GaxiosPromise<Schema$Location> {
      let params = (paramsOrCallback || {}) as Params$Resource$Locations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/mirror/v1/locations/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Location>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Location>(parameters);
      }
    }

    /**
     * mirror.locations.list
     * @desc Retrieves a list of locations for the user.
     * @alias mirror.locations.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Locations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LocationsListResponse>;
    list(
      params: Params$Resource$Locations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LocationsListResponse>,
      callback: BodyResponseCallback<Schema$LocationsListResponse>
    ): void;
    list(
      params: Params$Resource$Locations$List,
      callback: BodyResponseCallback<Schema$LocationsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$LocationsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Locations$List
        | BodyResponseCallback<Schema$LocationsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LocationsListResponse>,
      callback?: BodyResponseCallback<Schema$LocationsListResponse>
    ): void | GaxiosPromise<Schema$LocationsListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Locations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/mirror/v1/locations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LocationsListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LocationsListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Locations$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the location or latest for the last known location.
     */
    id?: string;
  }
  export interface Params$Resource$Locations$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
  }

  export class Resource$Settings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * mirror.settings.get
     * @desc Gets a single setting by ID.
     * @alias mirror.settings.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The ID of the setting. The following IDs are valid:  - locale - The key to the user’s language/locale (BCP 47 identifier) that Glassware should use to render localized content.  - timezone - The key to the user’s current time zone region as defined in the tz database. Example: America/Los_Angeles.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Settings$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Setting>;
    get(
      params: Params$Resource$Settings$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Setting>,
      callback: BodyResponseCallback<Schema$Setting>
    ): void;
    get(
      params: Params$Resource$Settings$Get,
      callback: BodyResponseCallback<Schema$Setting>
    ): void;
    get(callback: BodyResponseCallback<Schema$Setting>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Settings$Get
        | BodyResponseCallback<Schema$Setting>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Setting>,
      callback?: BodyResponseCallback<Schema$Setting>
    ): void | GaxiosPromise<Schema$Setting> {
      let params = (paramsOrCallback || {}) as Params$Resource$Settings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Settings$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/mirror/v1/settings/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Setting>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Setting>(parameters);
      }
    }
  }

  export interface Params$Resource$Settings$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the setting. The following IDs are valid:  - locale - The key to the user’s language/locale (BCP 47 identifier) that Glassware should use to render localized content.  - timezone - The key to the user’s current time zone region as defined in the tz database. Example: America/Los_Angeles.
     */
    id?: string;
  }

  export class Resource$Subscriptions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * mirror.subscriptions.delete
     * @desc Deletes a subscription.
     * @alias mirror.subscriptions.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The ID of the subscription.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Subscriptions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Subscriptions$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Subscriptions$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Subscriptions$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Subscriptions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Subscriptions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/mirror/v1/subscriptions/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * mirror.subscriptions.insert
     * @desc Creates a new subscription.
     * @alias mirror.subscriptions.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().Subscription} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Subscriptions$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Subscription>;
    insert(
      params: Params$Resource$Subscriptions$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Subscription>,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    insert(
      params: Params$Resource$Subscriptions$Insert,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Subscription>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Subscriptions$Insert
        | BodyResponseCallback<Schema$Subscription>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Subscription>,
      callback?: BodyResponseCallback<Schema$Subscription>
    ): void | GaxiosPromise<Schema$Subscription> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Subscriptions$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Subscriptions$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/mirror/v1/subscriptions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Subscription>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Subscription>(parameters);
      }
    }

    /**
     * mirror.subscriptions.list
     * @desc Retrieves a list of subscriptions for the authenticated user and service.
     * @alias mirror.subscriptions.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Subscriptions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SubscriptionsListResponse>;
    list(
      params: Params$Resource$Subscriptions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SubscriptionsListResponse>,
      callback: BodyResponseCallback<Schema$SubscriptionsListResponse>
    ): void;
    list(
      params: Params$Resource$Subscriptions$List,
      callback: BodyResponseCallback<Schema$SubscriptionsListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$SubscriptionsListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Subscriptions$List
        | BodyResponseCallback<Schema$SubscriptionsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SubscriptionsListResponse>,
      callback?: BodyResponseCallback<Schema$SubscriptionsListResponse>
    ): void | GaxiosPromise<Schema$SubscriptionsListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Subscriptions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Subscriptions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/mirror/v1/subscriptions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SubscriptionsListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$SubscriptionsListResponse>(parameters);
      }
    }

    /**
     * mirror.subscriptions.update
     * @desc Updates an existing subscription in place.
     * @alias mirror.subscriptions.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The ID of the subscription.
     * @param {().Subscription} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Subscriptions$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Subscription>;
    update(
      params: Params$Resource$Subscriptions$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Subscription>,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    update(
      params: Params$Resource$Subscriptions$Update,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    update(callback: BodyResponseCallback<Schema$Subscription>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Subscriptions$Update
        | BodyResponseCallback<Schema$Subscription>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Subscription>,
      callback?: BodyResponseCallback<Schema$Subscription>
    ): void | GaxiosPromise<Schema$Subscription> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Subscriptions$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Subscriptions$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/mirror/v1/subscriptions/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Subscription>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Subscription>(parameters);
      }
    }
  }

  export interface Params$Resource$Subscriptions$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the subscription.
     */
    id?: string;
  }
  export interface Params$Resource$Subscriptions$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Subscription;
  }
  export interface Params$Resource$Subscriptions$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
  }
  export interface Params$Resource$Subscriptions$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the subscription.
     */
    id?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Subscription;
  }

  export class Resource$Timeline {
    context: APIRequestContext;
    attachments: Resource$Timeline$Attachments;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.attachments = new Resource$Timeline$Attachments(this.context);
    }

    /**
     * mirror.timeline.delete
     * @desc Deletes a timeline item.
     * @alias mirror.timeline.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The ID of the timeline item.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Timeline$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Timeline$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Timeline$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Timeline$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Timeline$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Timeline$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/mirror/v1/timeline/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * mirror.timeline.get
     * @desc Gets a single timeline item by ID.
     * @alias mirror.timeline.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The ID of the timeline item.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Timeline$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TimelineItem>;
    get(
      params: Params$Resource$Timeline$Get,
      options: MethodOptions | BodyResponseCallback<Schema$TimelineItem>,
      callback: BodyResponseCallback<Schema$TimelineItem>
    ): void;
    get(
      params: Params$Resource$Timeline$Get,
      callback: BodyResponseCallback<Schema$TimelineItem>
    ): void;
    get(callback: BodyResponseCallback<Schema$TimelineItem>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Timeline$Get
        | BodyResponseCallback<Schema$TimelineItem>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TimelineItem>,
      callback?: BodyResponseCallback<Schema$TimelineItem>
    ): void | GaxiosPromise<Schema$TimelineItem> {
      let params = (paramsOrCallback || {}) as Params$Resource$Timeline$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Timeline$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/mirror/v1/timeline/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TimelineItem>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TimelineItem>(parameters);
      }
    }

    /**
     * mirror.timeline.insert
     * @desc Inserts a new item into the timeline.
     * @alias mirror.timeline.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param  {object} params.resource Media resource metadata
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Timeline$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TimelineItem>;
    insert(
      params: Params$Resource$Timeline$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$TimelineItem>,
      callback: BodyResponseCallback<Schema$TimelineItem>
    ): void;
    insert(
      params: Params$Resource$Timeline$Insert,
      callback: BodyResponseCallback<Schema$TimelineItem>
    ): void;
    insert(callback: BodyResponseCallback<Schema$TimelineItem>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Timeline$Insert
        | BodyResponseCallback<Schema$TimelineItem>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TimelineItem>,
      callback?: BodyResponseCallback<Schema$TimelineItem>
    ): void | GaxiosPromise<Schema$TimelineItem> {
      let params = (paramsOrCallback || {}) as Params$Resource$Timeline$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Timeline$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/mirror/v1/timeline').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/mirror/v1/timeline').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TimelineItem>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TimelineItem>(parameters);
      }
    }

    /**
     * mirror.timeline.list
     * @desc Retrieves a list of timeline items for the authenticated user.
     * @alias mirror.timeline.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.bundleId If provided, only items with the given bundleId will be returned.
     * @param {boolean=} params.includeDeleted If true, tombstone records for deleted items will be returned.
     * @param {integer=} params.maxResults The maximum number of items to include in the response, used for paging.
     * @param {string=} params.orderBy Controls the order in which timeline items are returned.
     * @param {string=} params.pageToken Token for the page of results to return.
     * @param {boolean=} params.pinnedOnly If true, only pinned items will be returned.
     * @param {string=} params.sourceItemId If provided, only items with the given sourceItemId will be returned.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Timeline$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TimelineListResponse>;
    list(
      params: Params$Resource$Timeline$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TimelineListResponse>,
      callback: BodyResponseCallback<Schema$TimelineListResponse>
    ): void;
    list(
      params: Params$Resource$Timeline$List,
      callback: BodyResponseCallback<Schema$TimelineListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$TimelineListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Timeline$List
        | BodyResponseCallback<Schema$TimelineListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TimelineListResponse>,
      callback?: BodyResponseCallback<Schema$TimelineListResponse>
    ): void | GaxiosPromise<Schema$TimelineListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Timeline$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Timeline$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/mirror/v1/timeline').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TimelineListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TimelineListResponse>(parameters);
      }
    }

    /**
     * mirror.timeline.patch
     * @desc Updates a timeline item in place. This method supports patch semantics.
     * @alias mirror.timeline.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The ID of the timeline item.
     * @param {().TimelineItem} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Timeline$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TimelineItem>;
    patch(
      params: Params$Resource$Timeline$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$TimelineItem>,
      callback: BodyResponseCallback<Schema$TimelineItem>
    ): void;
    patch(
      params: Params$Resource$Timeline$Patch,
      callback: BodyResponseCallback<Schema$TimelineItem>
    ): void;
    patch(callback: BodyResponseCallback<Schema$TimelineItem>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Timeline$Patch
        | BodyResponseCallback<Schema$TimelineItem>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TimelineItem>,
      callback?: BodyResponseCallback<Schema$TimelineItem>
    ): void | GaxiosPromise<Schema$TimelineItem> {
      let params = (paramsOrCallback || {}) as Params$Resource$Timeline$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Timeline$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/mirror/v1/timeline/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TimelineItem>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TimelineItem>(parameters);
      }
    }

    /**
     * mirror.timeline.update
     * @desc Updates a timeline item in place.
     * @alias mirror.timeline.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The ID of the timeline item.
     * @param  {object} params.resource Media resource metadata
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Timeline$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TimelineItem>;
    update(
      params: Params$Resource$Timeline$Update,
      options: MethodOptions | BodyResponseCallback<Schema$TimelineItem>,
      callback: BodyResponseCallback<Schema$TimelineItem>
    ): void;
    update(
      params: Params$Resource$Timeline$Update,
      callback: BodyResponseCallback<Schema$TimelineItem>
    ): void;
    update(callback: BodyResponseCallback<Schema$TimelineItem>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Timeline$Update
        | BodyResponseCallback<Schema$TimelineItem>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TimelineItem>,
      callback?: BodyResponseCallback<Schema$TimelineItem>
    ): void | GaxiosPromise<Schema$TimelineItem> {
      let params = (paramsOrCallback || {}) as Params$Resource$Timeline$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Timeline$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/mirror/v1/timeline/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/mirror/v1/timeline/{id}').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TimelineItem>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TimelineItem>(parameters);
      }
    }
  }

  export interface Params$Resource$Timeline$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the timeline item.
     */
    id?: string;
  }
  export interface Params$Resource$Timeline$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the timeline item.
     */
    id?: string;
  }
  export interface Params$Resource$Timeline$Insert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TimelineItem;

    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mimeType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }
  export interface Params$Resource$Timeline$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * If provided, only items with the given bundleId will be returned.
     */
    bundleId?: string;
    /**
     * If true, tombstone records for deleted items will be returned.
     */
    includeDeleted?: boolean;
    /**
     * The maximum number of items to include in the response, used for paging.
     */
    maxResults?: number;
    /**
     * Controls the order in which timeline items are returned.
     */
    orderBy?: string;
    /**
     * Token for the page of results to return.
     */
    pageToken?: string;
    /**
     * If true, only pinned items will be returned.
     */
    pinnedOnly?: boolean;
    /**
     * If provided, only items with the given sourceItemId will be returned.
     */
    sourceItemId?: string;
  }
  export interface Params$Resource$Timeline$Patch extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the timeline item.
     */
    id?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TimelineItem;
  }
  export interface Params$Resource$Timeline$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the timeline item.
     */
    id?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TimelineItem;

    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mimeType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }

  export class Resource$Timeline$Attachments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * mirror.timeline.attachments.delete
     * @desc Deletes an attachment from a timeline item.
     * @alias mirror.timeline.attachments.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.attachmentId The ID of the attachment.
     * @param {string} params.itemId The ID of the timeline item the attachment belongs to.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Timeline$Attachments$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Timeline$Attachments$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Timeline$Attachments$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Timeline$Attachments$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Timeline$Attachments$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Timeline$Attachments$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/mirror/v1/timeline/{itemId}/attachments/{attachmentId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['itemId', 'attachmentId'],
        pathParams: ['attachmentId', 'itemId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * mirror.timeline.attachments.get
     * @desc Retrieves an attachment on a timeline item by item ID and attachment ID.
     * @alias mirror.timeline.attachments.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.attachmentId The ID of the attachment.
     * @param {string} params.itemId The ID of the timeline item the attachment belongs to.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Timeline$Attachments$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Attachment>;
    get(
      params: Params$Resource$Timeline$Attachments$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Attachment>,
      callback: BodyResponseCallback<Schema$Attachment>
    ): void;
    get(
      params: Params$Resource$Timeline$Attachments$Get,
      callback: BodyResponseCallback<Schema$Attachment>
    ): void;
    get(callback: BodyResponseCallback<Schema$Attachment>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Timeline$Attachments$Get
        | BodyResponseCallback<Schema$Attachment>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Attachment>,
      callback?: BodyResponseCallback<Schema$Attachment>
    ): void | GaxiosPromise<Schema$Attachment> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Timeline$Attachments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Timeline$Attachments$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/mirror/v1/timeline/{itemId}/attachments/{attachmentId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['itemId', 'attachmentId'],
        pathParams: ['attachmentId', 'itemId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Attachment>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Attachment>(parameters);
      }
    }

    /**
     * mirror.timeline.attachments.insert
     * @desc Adds a new attachment to a timeline item.
     * @alias mirror.timeline.attachments.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.itemId The ID of the timeline item the attachment belongs to.
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Timeline$Attachments$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Attachment>;
    insert(
      params: Params$Resource$Timeline$Attachments$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Attachment>,
      callback: BodyResponseCallback<Schema$Attachment>
    ): void;
    insert(
      params: Params$Resource$Timeline$Attachments$Insert,
      callback: BodyResponseCallback<Schema$Attachment>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Attachment>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Timeline$Attachments$Insert
        | BodyResponseCallback<Schema$Attachment>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Attachment>,
      callback?: BodyResponseCallback<Schema$Attachment>
    ): void | GaxiosPromise<Schema$Attachment> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Timeline$Attachments$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Timeline$Attachments$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/mirror/v1/timeline/{itemId}/attachments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (
          rootUrl + '/upload/mirror/v1/timeline/{itemId}/attachments'
        ).replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['itemId'],
        pathParams: ['itemId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Attachment>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Attachment>(parameters);
      }
    }

    /**
     * mirror.timeline.attachments.list
     * @desc Returns a list of attachments for a timeline item.
     * @alias mirror.timeline.attachments.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.itemId The ID of the timeline item whose attachments should be listed.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Timeline$Attachments$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AttachmentsListResponse>;
    list(
      params: Params$Resource$Timeline$Attachments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AttachmentsListResponse>,
      callback: BodyResponseCallback<Schema$AttachmentsListResponse>
    ): void;
    list(
      params: Params$Resource$Timeline$Attachments$List,
      callback: BodyResponseCallback<Schema$AttachmentsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$AttachmentsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Timeline$Attachments$List
        | BodyResponseCallback<Schema$AttachmentsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AttachmentsListResponse>,
      callback?: BodyResponseCallback<Schema$AttachmentsListResponse>
    ): void | GaxiosPromise<Schema$AttachmentsListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Timeline$Attachments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Timeline$Attachments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/mirror/v1/timeline/{itemId}/attachments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['itemId'],
        pathParams: ['itemId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AttachmentsListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AttachmentsListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Timeline$Attachments$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the attachment.
     */
    attachmentId?: string;
    /**
     * The ID of the timeline item the attachment belongs to.
     */
    itemId?: string;
  }
  export interface Params$Resource$Timeline$Attachments$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the attachment.
     */
    attachmentId?: string;
    /**
     * The ID of the timeline item the attachment belongs to.
     */
    itemId?: string;
  }
  export interface Params$Resource$Timeline$Attachments$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the timeline item the attachment belongs to.
     */
    itemId?: string;

    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mimeType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }
  export interface Params$Resource$Timeline$Attachments$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the timeline item whose attachments should be listed.
     */
    itemId?: string;
  }
}
