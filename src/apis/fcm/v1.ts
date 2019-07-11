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

export namespace fcm_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
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
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Firebase Cloud Messaging API
   *
   * FCM send API that provides a cross-platform messaging solution to reliably deliver messages at no cost.
   *
   * @example
   * const {google} = require('googleapis');
   * const fcm = google.fcm('v1');
   *
   * @namespace fcm
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Fcm
   */
  export class Fcm {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * Android specific options for messages sent through [FCM connection server](https://goo.gl/4GLdUl).
   */
  export interface Schema$AndroidConfig {
    /**
     * An identifier of a group of messages that can be collapsed, so that only the last message gets sent when delivery can be resumed. A maximum of 4 different collapse keys is allowed at any given time.
     */
    collapseKey?: string;
    /**
     * Arbitrary key/value payload. If present, it will override google.firebase.fcm.v1.Message.data.
     */
    data?: {[key: string]: string};
    /**
     * Options for features provided by the FCM SDK for Android.
     */
    fcmOptions?: Schema$AndroidFcmOptions;
    /**
     * Notification to send to android devices.
     */
    notification?: Schema$AndroidNotification;
    /**
     * Message priority. Can take &quot;normal&quot; and &quot;high&quot; values. For more information, see [Setting the priority of a message](https://goo.gl/GjONJv).
     */
    priority?: string;
    /**
     * Package name of the application where the registration token must match in order to receive the message.
     */
    restrictedPackageName?: string;
    /**
     * How long (in seconds) the message should be kept in FCM storage if the device is offline. The maximum time to live supported is 4 weeks, and the default value is 4 weeks if not set. Set it to 0 if want to send the message immediately. In JSON format, the Duration type is encoded as a string rather than an object, where the string ends in the suffix &quot;s&quot; (indicating seconds) and is preceded by the number of seconds, with nanoseconds expressed as fractional seconds. For example, 3 seconds with 0 nanoseconds should be encoded in JSON format as &quot;3s&quot;, while 3 seconds and 1 nanosecond should be expressed in JSON format as &quot;3.000000001s&quot;. The ttl will be rounded down to the nearest second.
     */
    ttl?: string;
  }
  /**
   * Options for features provided by the FCM SDK for Android.
   */
  export interface Schema$AndroidFcmOptions {
    /**
     * Label associated with the message&#39;s analytics data.
     */
    analyticsLabel?: string;
  }
  /**
   * Notification to send to android devices.
   */
  export interface Schema$AndroidNotification {
    /**
     * The notification&#39;s body text. If present, it will override google.firebase.fcm.v1.Notification.body.
     */
    body?: string;
    /**
     * Variable string values to be used in place of the format specifiers in body_loc_key to use to localize the body text to the user&#39;s current localization. See [Formatting and Styling](https://goo.gl/MalYE3) for more information.
     */
    bodyLocArgs?: string[];
    /**
     * The key to the body string in the app&#39;s string resources to use to localize the body text to the user&#39;s current localization. See [String Resources](https://goo.gl/NdFZGI) for more information.
     */
    bodyLocKey?: string;
    /**
     * The [notification&#39;s channel id](https://developer.android.com/guide/topics/ui/notifiers/notifications#ManageChannels) (new in Android O). The app must create a channel with this channel ID before any notification with this channel ID is received. If you don&#39;t send this channel ID in the request, or if the channel ID provided has not yet been created by the app, FCM uses the channel ID specified in the app manifest.
     */
    channelId?: string;
    /**
     * The action associated with a user click on the notification. If specified, an activity with a matching intent filter is launched when a user clicks on the notification.
     */
    clickAction?: string;
    /**
     * The notification&#39;s icon color, expressed in #rrggbb format.
     */
    color?: string;
    /**
     * The notification&#39;s icon. Sets the notification icon to myicon for drawable resource myicon. If you don&#39;t send this key in the request, FCM displays the launcher icon specified in your app manifest.
     */
    icon?: string;
    /**
     * Contains the URL of an image that is going to be displayed in a notification. If present, it will override google.firebase.fcm.v1.Notification.image.
     */
    image?: string;
    /**
     * The sound to play when the device receives the notification. Supports &quot;default&quot; or the filename of a sound resource bundled in the app. Sound files must reside in /res/raw/.
     */
    sound?: string;
    /**
     * Identifier used to replace existing notifications in the notification drawer. If not specified, each request creates a new notification. If specified and a notification with the same tag is already being shown, the new notification replaces the existing one in the notification drawer.
     */
    tag?: string;
    /**
     * The notification&#39;s title. If present, it will override google.firebase.fcm.v1.Notification.title.
     */
    title?: string;
    /**
     * Variable string values to be used in place of the format specifiers in title_loc_key to use to localize the title text to the user&#39;s current localization. See [Formatting and Styling](https://goo.gl/MalYE3) for more information.
     */
    titleLocArgs?: string[];
    /**
     * The key to the title string in the app&#39;s string resources to use to localize the title text to the user&#39;s current localization. See [String Resources](https://goo.gl/NdFZGI) for more information.
     */
    titleLocKey?: string;
  }
  /**
   * [Apple Push Notification Service](https://goo.gl/MXRTPa) specific options.
   */
  export interface Schema$ApnsConfig {
    /**
     * Options for features provided by the FCM SDK for iOS.
     */
    fcmOptions?: Schema$ApnsFcmOptions;
    /**
     * HTTP request headers defined in Apple Push Notification Service. Refer to [APNs request headers](https://goo.gl/C6Yhia) for supported headers, e.g. &quot;apns-priority&quot;: &quot;10&quot;.
     */
    headers?: {[key: string]: string};
    /**
     * APNs payload as a JSON object, including both `aps` dictionary and custom payload. See [Payload Key Reference](https://goo.gl/32Pl5W). If present, it overrides google.firebase.fcm.v1.Notification.title and google.firebase.fcm.v1.Notification.body.
     */
    payload?: {[key: string]: any};
  }
  /**
   * Options for features provided by the FCM SDK for iOS.
   */
  export interface Schema$ApnsFcmOptions {
    /**
     * Label associated with the message&#39;s analytics data.
     */
    analyticsLabel?: string;
    /**
     * Contains the URL of an image that is going to be displayed in a notification. If present, it will override google.firebase.fcm.v1.Notification.image.
     */
    image?: string;
  }
  /**
   * Platform independent options for features provided by the FCM SDKs.
   */
  export interface Schema$FcmOptions {
    /**
     * Label associated with the message&#39;s analytics data.
     */
    analyticsLabel?: string;
  }
  /**
   * Message to send by Firebase Cloud Messaging Service.
   */
  export interface Schema$Message {
    /**
     * Input only. Android specific options for messages sent through [FCM connection server](https://goo.gl/4GLdUl).
     */
    android?: Schema$AndroidConfig;
    /**
     * Input only. [Apple Push Notification Service](https://goo.gl/MXRTPa) specific options.
     */
    apns?: Schema$ApnsConfig;
    /**
     * Condition to send a message to, e.g. &quot;&#39;foo&#39; in topics &amp;&amp; &#39;bar&#39; in topics&quot;.
     */
    condition?: string;
    /**
     * Input only. Arbitrary key/value payload.
     */
    data?: {[key: string]: string};
    /**
     * Input only. Template for FCM SDK feature options to use across all platforms.
     */
    fcmOptions?: Schema$FcmOptions;
    /**
     * Output Only. The identifier of the message sent, in the format of `projects/x/messages/{message_id}`.
     */
    name?: string;
    /**
     * Input only. Basic notification template to use across all platforms.
     */
    notification?: Schema$Notification;
    /**
     * Registration token to send a message to.
     */
    token?: string;
    /**
     * Topic name to send a message to, e.g. &quot;weather&quot;. Note: &quot;/topics/&quot; prefix should not be provided.
     */
    topic?: string;
    /**
     * Input only. [Webpush protocol](https://tools.ietf.org/html/rfc8030) options.
     */
    webpush?: Schema$WebpushConfig;
  }
  /**
   * Basic notification template to use across all platforms.
   */
  export interface Schema$Notification {
    /**
     * The notification&#39;s body text.
     */
    body?: string;
    /**
     * Contains the URL of an image that is going to be downloaded on the device and displayed in a notification. JPEG, PNG, BMP have full support across platforms. Animated GIF and video only work on iOS. WebP and HEIF have varying levels of support across platforms and platform versions. Android has 1MB image size limit. Quota usage and implications/costs for hosting image on Firebase Storage: https://firebase.google.com/pricing
     */
    image?: string;
    /**
     * The notification&#39;s title.
     */
    title?: string;
  }
  /**
   * Request to send a message to specified target.
   */
  export interface Schema$SendMessageRequest {
    /**
     * Required. Message to send.
     */
    message?: Schema$Message;
    /**
     * Flag for testing the request without actually delivering the message.
     */
    validateOnly?: boolean;
  }
  /**
   * [Webpush protocol](https://tools.ietf.org/html/rfc8030) options.
   */
  export interface Schema$WebpushConfig {
    /**
     * Arbitrary key/value payload. If present, it will override google.firebase.fcm.v1.Message.data.
     */
    data?: {[key: string]: string};
    /**
     * Options for features provided by the FCM SDK for Web.
     */
    fcmOptions?: Schema$WebpushFcmOptions;
    /**
     * HTTP headers defined in webpush protocol. Refer to [Webpush protocol](https://tools.ietf.org/html/rfc8030#section-5) for supported headers, e.g. &quot;TTL&quot;: &quot;15&quot;.
     */
    headers?: {[key: string]: string};
    /**
     * Web Notification options as a JSON object. Supports Notification instance properties as defined in [Web Notification API](https://developer.mozilla.org/en-US/docs/Web/API/Notification). If present, &quot;title&quot; and &quot;body&quot; fields override [google.firebase.fcm.v1.Notification.title] and [google.firebase.fcm.v1.Notification.body].
     */
    notification?: {[key: string]: any};
  }
  /**
   * Options for features provided by the FCM SDK for Web.
   */
  export interface Schema$WebpushFcmOptions {
    /**
     * The link to open when the user clicks on the notification. For all URL values, HTTPS is required.
     */
    link?: string;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    messages: Resource$Projects$Messages;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.messages = new Resource$Projects$Messages(this.context);
    }
  }

  export class Resource$Projects$Messages {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * fcm.projects.messages.send
     * @desc Send a message to specified target (a registration token, topic or condition).
     * @alias fcm.projects.messages.send
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. It contains the Firebase project id (i.e. the unique identifier for your Firebase project), in the format of `projects/{project_id}`. For legacy support, the numeric project number with no padding is also supported in the format of `projects/{project_number}`.
     * @param {().SendMessageRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    send(
      params?: Params$Resource$Projects$Messages$Send,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
    send(
      params: Params$Resource$Projects$Messages$Send,
      options: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    send(
      params: Params$Resource$Projects$Messages$Send,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    send(callback: BodyResponseCallback<Schema$Message>): void;
    send(
      paramsOrCallback?:
        | Params$Resource$Projects$Messages$Send
        | BodyResponseCallback<Schema$Message>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback?: BodyResponseCallback<Schema$Message>
    ): void | GaxiosPromise<Schema$Message> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Messages$Send;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Messages$Send;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://fcm.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/messages:send').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Message>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Message>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Messages$Send
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. It contains the Firebase project id (i.e. the unique identifier for your Firebase project), in the format of `projects/{project_id}`. For legacy support, the numeric project number with no padding is also supported in the format of `projects/{project_number}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SendMessageRequest;
  }
}
