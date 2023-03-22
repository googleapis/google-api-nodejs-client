// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  BaseExternalAccountClient,
  GaxiosPromise,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  GoogleAuth,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace chat_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?:
      | string
      | OAuth2Client
      | JWT
      | Compute
      | UserRefreshClient
      | BaseExternalAccountClient
      | GoogleAuth;

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
   * Google Chat API
   *
   * Enables apps to fetch information and perform actions in Google Chat. Authentication is a prerequisite for using the Google Chat REST API.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const chat = google.chat('v1');
   * ```
   */
  export class Chat {
    context: APIRequestContext;
    media: Resource$Media;
    spaces: Resource$Spaces;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.media = new Resource$Media(this.context);
      this.spaces = new Resource$Spaces(this.context);
    }
  }

  /**
   * List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze 1 day, snooze next week. You might use action method = snooze(), passing the snooze type and snooze time in the list of string parameters.
   */
  export interface Schema$ActionParameter {
    /**
     * The name of the parameter for the action script.
     */
    key?: string | null;
    /**
     * The value of the parameter.
     */
    value?: string | null;
  }
  /**
   * Parameters that a Chat app can use to configure how its response is posted.
   */
  export interface Schema$ActionResponse {
    /**
     * Input only. A response to an event related to a [dialog](https://developers.google.com/chat/how-tos/dialogs). Must be accompanied by `ResponseType.Dialog`.
     */
    dialogAction?: Schema$DialogAction;
    /**
     * Input only. The type of Chat app response.
     */
    type?: string | null;
    /**
     * Input only. URL for users to auth or config. (Only for REQUEST_CONFIG response types.)
     */
    url?: string | null;
  }
  /**
   * Represents the status for a request to either invoke or submit a [dialog](https://developers.google.com/chat/how-tos/dialogs).
   */
  export interface Schema$ActionStatus {
    /**
     * The status code.
     */
    statusCode?: string | null;
    /**
     * The message to send users about the status of their request. If unset, a generic message based on the `status_code` is sent.
     */
    userFacingMessage?: string | null;
  }
  /**
   * Annotations associated with the plain-text body of the message. Example plain-text message body: ``` Hello @FooBot how are you!" ``` The corresponding annotations metadata: ``` "annotations":[{ "type":"USER_MENTION", "startIndex":6, "length":7, "userMention": { "user": { "name":"users/{user\}", "displayName":"FooBot", "avatarUrl":"https://goo.gl/aeDtrS", "type":"BOT" \}, "type":"MENTION" \} \}] ```
   */
  export interface Schema$Annotation {
    /**
     * Length of the substring in the plain-text message body this annotation corresponds to.
     */
    length?: number | null;
    /**
     * The metadata for a slash command.
     */
    slashCommand?: Schema$SlashCommandMetadata;
    /**
     * Start index (0-based, inclusive) in the plain-text message body this annotation corresponds to.
     */
    startIndex?: number | null;
    /**
     * The type of this annotation.
     */
    type?: string | null;
    /**
     * The metadata of user mention.
     */
    userMention?: Schema$UserMentionMetadata;
  }
  /**
   * An attachment in Google Chat.
   */
  export interface Schema$Attachment {
    /**
     * A reference to the attachment data. This is used with the media API to download the attachment data.
     */
    attachmentDataRef?: Schema$AttachmentDataRef;
    /**
     * The original file name for the content, not the full path.
     */
    contentName?: string | null;
    /**
     * The content type (MIME type) of the file.
     */
    contentType?: string | null;
    /**
     * Output only. The download URL which should be used to allow a human user to download the attachment. Chat apps should not use this URL to download attachment content.
     */
    downloadUri?: string | null;
    /**
     * A reference to the drive attachment. This is used with the Drive API.
     */
    driveDataRef?: Schema$DriveDataRef;
    /**
     * Resource name of the attachment, in the form "spaces/x/messages/x/attachments/x".
     */
    name?: string | null;
    /**
     * The source of the attachment.
     */
    source?: string | null;
    /**
     * Output only. The thumbnail URL which should be used to preview the attachment to a human user. Chat apps should not use this URL to download attachment content.
     */
    thumbnailUri?: string | null;
  }
  export interface Schema$AttachmentDataRef {
    /**
     * The resource name of the attachment data. This is used with the media API to download the attachment data.
     */
    resourceName?: string | null;
  }
  /**
   * A button. Can be a text button or an image button.
   */
  export interface Schema$Button {
    /**
     * A button with image and onclick action.
     */
    imageButton?: Schema$ImageButton;
    /**
     * A button with text and onclick action.
     */
    textButton?: Schema$TextButton;
  }
  /**
   * A card is a UI element that can contain UI widgets such as texts, images.
   */
  export interface Schema$Card {
    /**
     * The actions of this card.
     */
    cardActions?: Schema$CardAction[];
    /**
     * The header of the card. A header usually contains a title and an image.
     */
    header?: Schema$CardHeader;
    /**
     * Name of the card.
     */
    name?: string | null;
    /**
     * Sections are separated by a line divider.
     */
    sections?: Schema$Section[];
  }
  /**
   * A card action is the action associated with the card. For an invoice card, a typical action would be: delete invoice, email invoice or open the invoice in browser. Not supported by Google Chat apps.
   */
  export interface Schema$CardAction {
    /**
     * The label used to be displayed in the action menu item.
     */
    actionLabel?: string | null;
    /**
     * The onclick action for this action item.
     */
    onClick?: Schema$OnClick;
  }
  export interface Schema$CardHeader {
    /**
     * The image's type (e.g. square border or circular border).
     */
    imageStyle?: string | null;
    /**
     * The URL of the image in the card header.
     */
    imageUrl?: string | null;
    /**
     * The subtitle of the card header.
     */
    subtitle?: string | null;
    /**
     * The title must be specified. The header has a fixed height: if both a title and subtitle is specified, each will take up 1 line. If only the title is specified, it will take up both lines.
     */
    title?: string | null;
  }
  /**
   * Widgets for Chat apps to specify.
   */
  export interface Schema$CardWithId {
    /**
     * Cards support a defined layout, interactive UI elements like buttons, and rich media like images. Use this card to present detailed information, gather information from users, and guide users to take a next step.
     */
    card?: Schema$GoogleAppsCardV1Card;
    /**
     * Required for `cardsV2` messages. Chat app-specified identifier for this widget. Scoped within a message.
     */
    cardId?: string | null;
  }
  /**
   * JSON payload of error messages. If the Cloud Logging API is enabled, these error messages are logged to [Google Cloud Logging](https://cloud.google.com/logging/docs).
   */
  export interface Schema$ChatAppLogEntry {
    /**
     * The deployment that caused the error. For Chat apps built in Apps Script, this is the deployment ID defined by Apps Script.
     */
    deployment?: string | null;
    /**
     * The unencrypted `callback_method` name that was running when the error was encountered.
     */
    deploymentFunction?: string | null;
    /**
     * The error code and message.
     */
    error?: Schema$Status;
  }
  /**
   * Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to/from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't carry information about the absolute color space that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB, DCI-P3, BT.2020, etc.). By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most 1e-5. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); \} public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); \} return resultBuilder.build(); \} // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; \} return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; \} static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; \} Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; \} [result autorelease]; return result; \} // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); \} var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); \}; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); \} resultBuilder.push(hexString); return resultBuilder.join(''); \}; // ...
   */
  export interface Schema$Color {
    /**
     * The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0).
     */
    alpha?: number | null;
    /**
     * The amount of blue in the color as a value in the interval [0, 1].
     */
    blue?: number | null;
    /**
     * The amount of green in the color as a value in the interval [0, 1].
     */
    green?: number | null;
    /**
     * The amount of red in the color as a value in the interval [0, 1].
     */
    red?: number | null;
  }
  /**
   * Represents information about the user's client, such as locale, host app, and platform. For Chat apps, `CommonEventObject` includes data submitted by users interacting with cards, like data entered in [dialogs](https://developers.google.com/chat/how-tos/dialogs).
   */
  export interface Schema$CommonEventObject {
    /**
     * A map containing the current values of the widgets in a card. The map keys are the string IDs assigned to each widget, and the values represent inputs to the widget. Depending on the input data type, a different object represents each input: For single-value widgets, `StringInput`. For multi-value widgets, an array of `StringInput` objects. For a date-time picker, a `DateTimeInput`. For a date-only picker, a `DateInput`. For a time-only picker, a `TimeInput`. Corresponds with the data entered by a user on a card in a [dialog](https://developers.google.com/chat/how-tos/dialogs).
     */
    formInputs?: {[key: string]: Schema$Inputs} | null;
    /**
     * The hostApp enum which indicates the app the add-on is invoked from. Always `CHAT` for Chat apps.
     */
    hostApp?: string | null;
    /**
     * Name of the invoked function associated with the widget. Only set for Chat apps.
     */
    invokedFunction?: string | null;
    /**
     * Custom [parameters](/chat/api/reference/rest/v1/cards#ActionParameter) passed to the invoked function. Both keys and values must be strings.
     */
    parameters?: {[key: string]: string} | null;
    /**
     * The platform enum which indicates the platform where the event originates (`WEB`, `IOS`, or `ANDROID`). Not supported by Chat apps.
     */
    platform?: string | null;
    /**
     * The timezone ID and offset from Coordinated Universal Time (UTC).
     */
    timeZone?: Schema$TimeZone;
    /**
     * The full `locale.displayName` in the format of [ISO 639 language code]-[ISO 3166 country/region code] such as "en-US". Not supported by Chat apps.
     */
    userLocale?: string | null;
  }
  /**
   * Date input values. Not supported by Chat apps.
   */
  export interface Schema$DateInput {
    /**
     * Time since epoch time, in milliseconds.
     */
    msSinceEpoch?: string | null;
  }
  /**
   * Date and time input values. Not supported by Chat apps.
   */
  export interface Schema$DateTimeInput {
    /**
     * Whether the `datetime` input includes a calendar date.
     */
    hasDate?: boolean | null;
    /**
     * Whether the `datetime` input includes a timestamp.
     */
    hasTime?: boolean | null;
    /**
     * Time since epoch time, in milliseconds.
     */
    msSinceEpoch?: string | null;
  }
  /**
   * Google Chat events.
   */
  export interface Schema$DeprecatedEvent {
    /**
     * The form action data associated with an interactive card that was clicked. Only populated for CARD_CLICKED events. See the [Interactive Cards guide](/chat/how-tos/cards-onclick) for more information.
     */
    action?: Schema$FormAction;
    /**
     * Represents information about the user's client, such as locale, host app, and platform. For Chat apps, `CommonEventObject` includes information submitted by users interacting with [dialogs](https://developers.google.com/chat/how-tos/dialogs), like data entered on a card.
     */
    common?: Schema$CommonEventObject;
    /**
     * The URL the Chat app should redirect the user to after they have completed an authorization or configuration flow outside of Google Chat. For more information, see [Connect a Chat app with other services & tools](https://developers.google.com/chat/how-tos/connect-web-services-tools).
     */
    configCompleteRedirectUrl?: string | null;
    /**
     * The type of [dialog](https://developers.google.com/chat/how-tos/dialogs) event received.
     */
    dialogEventType?: string | null;
    /**
     * The timestamp indicating when the event occurred.
     */
    eventTime?: string | null;
    /**
     * True when the event is related to [dialogs](https://developers.google.com/chat/how-tos/dialogs).
     */
    isDialogEvent?: boolean | null;
    /**
     * The message that triggered the event, if applicable.
     */
    message?: Schema$Message;
    /**
     * The space in which the event occurred.
     */
    space?: Schema$Space;
    /**
     * The Chat app-defined key for the thread related to the event. See [`spaces.messages.thread.threadKey`](/chat/api/reference/rest/v1/spaces.messages#Thread.FIELDS.thread_key) for more information.
     */
    threadKey?: string | null;
    /**
     * A secret value that legacy Chat apps can use to verify if a request is from Google. Google randomly generates the token, and its value remains static. You can obtain, revoke, or regenerate the token from the [Chat API configuration page](https://console.cloud.google.com/apis/api/chat.googleapis.com/hangouts-chat) in the Google Cloud Console. Modern Chat apps don't use this field. It is absent from API responses and the [Chat API configuration page](https://console.cloud.google.com/apis/api/chat.googleapis.com/hangouts-chat).
     */
    token?: string | null;
    /**
     * The type of the event.
     */
    type?: string | null;
    /**
     * The user that triggered the event.
     */
    user?: Schema$User;
  }
  /**
   * Wrapper around the card body of the dialog.
   */
  export interface Schema$Dialog {
    /**
     * Input only. Body of the dialog, which is rendered in a modal. Google Chat apps do not support the following card entities: `DateTimePicker`, `OnChangeAction`.
     */
    body?: Schema$GoogleAppsCardV1Card;
  }
  /**
   * Contains a [dialog](https://developers.google.com/chat/how-tos/dialogs) and request status code.
   */
  export interface Schema$DialogAction {
    /**
     * Input only. Status for a request to either invoke or submit a [dialog](https://developers.google.com/chat/how-tos/dialogs). Displays a status and message to users, if necessary. For example, in case of an error or success.
     */
    actionStatus?: Schema$ActionStatus;
    /**
     * Input only. [Dialog](https://developers.google.com/chat/how-tos/dialogs) for the request.
     */
    dialog?: Schema$Dialog;
  }
  /**
   * A reference to the data of a drive attachment.
   */
  export interface Schema$DriveDataRef {
    /**
     * The id for the drive file, for use with the Drive API.
     */
    driveFileId?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * A form action describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form.
   */
  export interface Schema$FormAction {
    /**
     * The method name is used to identify which part of the form triggered the form submission. This information is echoed back to the Chat app as part of the card click event. The same method name can be used for several elements that trigger a common behavior if desired.
     */
    actionMethodName?: string | null;
    /**
     * List of action parameters.
     */
    parameters?: Schema$ActionParameter[];
  }
  /**
   * An action that describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form. If the action is triggered, the form values are sent to the server.
   */
  export interface Schema$GoogleAppsCardV1Action {
    /**
     * A custom function to invoke when the containing element is clicked or othrwise activated. For example usage, see [Create interactive cards](https://developers.google.com/chat/how-tos/cards-onclick).
     */
    function?: string | null;
    /**
     * Optional. Required when opening a [dialog](https://developers.google.com/chat/how-tos/dialogs). What to do in response to an interaction with a user, such as a user clicking button on a card message. If unspecified, the app responds by executing an `action` - like opening a link or running a function - as normal. By specifying an `interaction`, the app can respond in special interactive ways. For example, by setting `interaction` to `OPEN_DIALOG`, the app can open a [dialog](https://developers.google.com/chat/how-tos/dialogs). When specified, a loading indicator is not shown. Supported by Chat apps, but not Google Workspace Add-ons. If specified for an add-on, the entire card is stripped and nothing is shown in the client.
     */
    interaction?: string | null;
    /**
     * Specifies the loading indicator that the action displays while making the call to the action.
     */
    loadIndicator?: string | null;
    /**
     * List of action parameters.
     */
    parameters?: Schema$GoogleAppsCardV1ActionParameter[];
    /**
     * Indicates whether form values persist after the action. The default value is `false`. If `true`, form values remain after the action is triggered. To let the user make changes while the action is being processed, set [LoadIndicator](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1#loadindicator) to `NONE`. For [card messages](https://developers.google.com/chat/api/guides/message-formats/cards) in Chat apps, you must also set the action's [ResponseType](https://developers.google.com/chat/api/reference/rest/v1/spaces.messages#responsetype) to `UPDATE_MESSAGE` and use the same [`card_id`](https://developers.google.com/chat/api/reference/rest/v1/spaces.messages#CardWithId) from the card that contained the action. If `false`, the form values are cleared when the action is triggered. To prevent the user from making changes while the action is being processed, set [LoadIndicator](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1#loadindicator) to `SPINNER`.
     */
    persistValues?: boolean | null;
  }
  /**
   * List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze 1 day, snooze next week. You might use action method = snooze(), passing the snooze type and snooze time in the list of string parameters. To learn more, see [CommonEventObject](https://developers.google.com/chat/api/reference/rest/v1/Event#commoneventobject).
   */
  export interface Schema$GoogleAppsCardV1ActionParameter {
    /**
     * The name of the parameter for the action script.
     */
    key?: string | null;
    /**
     * The value of the parameter.
     */
    value?: string | null;
  }
  /**
   * Represents the complete border style applied to items in a widget.
   */
  export interface Schema$GoogleAppsCardV1BorderStyle {
    /**
     * The corner radius for the border.
     */
    cornerRadius?: number | null;
    /**
     * The colors to use when the type is `BORDER_TYPE_STROKE`.
     */
    strokeColor?: Schema$Color;
    /**
     * The border type.
     */
    type?: string | null;
  }
  /**
   * A text, icon, or text + icon button that users can click. To make an image a clickable button, specify an Image (not an ImageComponent) and set an `onClick` action. Currently supported in Chat apps (including [dialogs] (https://developers.google.com/chat/how-tos/dialogs) and [card messages] (https://developers.google.com/chat/api/guides/message-formats/cards)) and Google Workspace Add-ons.
   */
  export interface Schema$GoogleAppsCardV1Button {
    /**
     * The alternative text used for accessibility. Set descriptive text that lets users know what the button does. For example, if a button opens a hyperlink, you might write: "Opens a new browser tab and navigates to the Google Chat developer documentation at https://developers.google.com/chat".
     */
    altText?: string | null;
    /**
     * If set, the button is filled with a solid background color and the font color changes to maintain contrast with the background color. For example, setting a blue background will likely result in white text. If unset, the image background is white and the font color is blue. For red, green and blue, the value of each field is a `float` number that can be expressed in either of two ways: as a number between 0 and 255 divided by 255 (153/255) or as a value between 0 and 1 (0.6). 0 represents the absence of a color and 1 or 255/255 represent the full presence of that color on the RGB scale. Optionally set alpha, which sets a level of transparency using this equation: ``` pixel color = alpha * (this color) + (1.0 - alpha) * (background color) ``` For alpha, a value of 1 corresponds with a solid color, and a value of 0 corresponds with a completely transparent color. For example, the following color represents a half transparent red: ``` "color": { "red": 1, "green": 0, "blue": 0, "alpha": 0.5 \} ```
     */
    color?: Schema$Color;
    /**
     * If `true`, the button is displayed in an inactive state and doesn't respond to user actions.
     */
    disabled?: boolean | null;
    /**
     * The icon image. If both `icon` and `text` are set, then the icon appears before the text.
     */
    icon?: Schema$GoogleAppsCardV1Icon;
    /**
     * Required. The action to perform when the button is clicked, such as opening a hyperlink or running a custom function.
     */
    onClick?: Schema$GoogleAppsCardV1OnClick;
    /**
     * The text displayed inside the button.
     */
    text?: string | null;
  }
  /**
   * A list of buttons layed out horizontally.
   */
  export interface Schema$GoogleAppsCardV1ButtonList {
    /**
     * An array of buttons.
     */
    buttons?: Schema$GoogleAppsCardV1Button[];
  }
  /**
   * Cards support a defined layout, interactive UI elements like buttons, and rich media like images. Use cards to present detailed information, gather information from users, and guide users to take a next step. In Google Chat, cards appear in several places: - As stand-alone messages. - Accompanying a text message, just beneath the text message. - As a [dialog](https://developers.google.com/chat/how-tos/dialogs). The following example JSON creates a "contact card" that features: - A header with the contact's name, job title, avatar picture. - A section with the contact information, including formatted text. - Buttons that users can click to share the contact or see more or less info. ![Example contact card](https://developers.google.com/chat/images/card_api_reference.png) ``` { "cardsV2": [ { "cardId": "unique-card-id", "card": { "header": { "title": "Sasha", "subtitle": "Software Engineer", "imageUrl": "https://developers.google.com/chat/images/quickstart-app-avatar.png", "imageType": "CIRCLE", "imageAltText": "Avatar for Sasha", \}, "sections": [ { "header": "Contact Info", "collapsible": true, "uncollapsibleWidgetsCount": 1, "widgets": [ { "decoratedText": { "startIcon": { "knownIcon": "EMAIL", \}, "text": "sasha@example.com", \} \}, { "decoratedText": { "startIcon": { "knownIcon": "PERSON", \}, "text": "Online", \}, \}, { "decoratedText": { "startIcon": { "knownIcon": "PHONE", \}, "text": "+1 (555) 555-1234", \} \}, { "buttonList": { "buttons": [ { "text": "Share", "onClick": { "openLink": { "url": "https://example.com/share", \} \} \}, { "text": "Edit", "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT", \} ], \} \} \}, ], \} \}, ], \}, ], \}, \} ], \} ```
   */
  export interface Schema$GoogleAppsCardV1Card {
    /**
     * The card's actions. Actions are added to the card's toolbar menu. Because Chat app cards have no toolbar, `cardActions[]` is not supported by Chat apps. For example, the following JSON constructs a card action menu with Settings and Send Feedback options: ``` "card_actions": [ { "actionLabel": "Settings", "onClick": { "action": { "functionName": "goToView", "parameters": [ { "key": "viewType", "value": "SETTING" \} ], "loadIndicator": "LoadIndicator.SPINNER" \} \} \}, { "actionLabel": "Send Feedback", "onClick": { "openLink": { "url": "https://example.com/feedback" \} \} \} ] ```
     */
    cardActions?: Schema$GoogleAppsCardV1CardAction[];
    /**
     * In Google Workspace add-ons, sets the display properties of the `peekCardHeader`. Not supported by Chat apps.
     */
    displayStyle?: string | null;
    /**
     * The fixed footer shown at the bottom of this card. Setting `fixedFooter` without specifying a `primaryButton` or a `secondaryButton` causes an error. Chat apps support `fixedFooter` in [dialogs](https://developers.google.com/chat/how-tos/dialogs), but not in [card messages](https://developers.google.com/chat/api/guides/message-formats/cards).
     */
    fixedFooter?: Schema$GoogleAppsCardV1CardFixedFooter;
    /**
     * The header of the card. A header usually contains a leading image and a title. Headers always appear at the top of a card.
     */
    header?: Schema$GoogleAppsCardV1CardHeader;
    /**
     * Name of the card. Used as a card identifier in card navigation. Because Chat apps don't support card navigation, they ignore this field.
     */
    name?: string | null;
    /**
     * When displaying contextual content, the peek card header acts as a placeholder so that the user can navigate forward between the homepage cards and the contextual cards. Not supported by Chat apps.
     */
    peekCardHeader?: Schema$GoogleAppsCardV1CardHeader;
    /**
     * Contains a collection of widgets. Each section has its own, optional header. Sections are visually separated by a line divider.
     */
    sections?: Schema$GoogleAppsCardV1Section[];
  }
  /**
   * A card action is the action associated with the card. For example, an invoice card might include actions such as delete invoice, email invoice, or open the invoice in a browser. Not supported by Chat apps.
   */
  export interface Schema$GoogleAppsCardV1CardAction {
    /**
     * The label that displays as the action menu item.
     */
    actionLabel?: string | null;
    /**
     * The `onClick` action for this action item.
     */
    onClick?: Schema$GoogleAppsCardV1OnClick;
  }
  /**
   * A persistent (sticky) footer that that appears at the bottom of the card. Setting `fixedFooter` without specifying a `primaryButton` or a `secondaryButton` causes an error. Chat apps support `fixedFooter` in [dialogs](https://developers.google.com/chat/how-tos/dialogs), but not in [card messages](https://developers.google.com/chat/api/guides/message-formats/cards).
   */
  export interface Schema$GoogleAppsCardV1CardFixedFooter {
    /**
     * The primary button of the fixed footer. The button must be a text button with text and color set.
     */
    primaryButton?: Schema$GoogleAppsCardV1Button;
    /**
     * The secondary button of the fixed footer. The button must be a text button with text and color set. `primaryButton` must be set if `secondaryButton` is set.
     */
    secondaryButton?: Schema$GoogleAppsCardV1Button;
  }
  /**
   * Represents a card header.
   */
  export interface Schema$GoogleAppsCardV1CardHeader {
    /**
     * The alternative text of this image which is used for accessibility.
     */
    imageAltText?: string | null;
    /**
     * The shape used to crop the image.
     */
    imageType?: string | null;
    /**
     * The HTTPS URL of the image in the card header.
     */
    imageUrl?: string | null;
    /**
     * The subtitle of the card header. If specified, appears on its own line below the `title`.
     */
    subtitle?: string | null;
    /**
     * Required. The title of the card header. The header has a fixed height: if both a title and subtitle are specified, each takes up one line. If only the title is specified, it takes up both lines.
     */
    title?: string | null;
  }
  /**
   * Lets users specify a date, a time, or both a date and a time. Accepts text input from users, but features an interactive date and time selector that helps users enter correctly-formatted dates and times. If users enter a date or time incorrectly, the widget shows an error that prompts users to enter the correct format. Not supported by Chat apps. Support by Chat apps coming soon.
   */
  export interface Schema$GoogleAppsCardV1DateTimePicker {
    /**
     * The text that prompts users to enter a date, time, or datetime. Specify text that helps the user enter the information your app needs. For example, if users are setting an appointment, then a label like "Appointment date" or "Appointment date and time" might work well.
     */
    label?: string | null;
    /**
     * The name by which the datetime picker is identified in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs).
     */
    name?: string | null;
    /**
     * Triggered when the user clicks **Save** or **Clear** from the datetime picker interface.
     */
    onChangeAction?: Schema$GoogleAppsCardV1Action;
    /**
     * The number representing the time zone offset from UTC, in minutes. If set, the `value_ms_epoch` is displayed in the specified time zone. If not set, it uses the user's time zone setting on the client side.
     */
    timezoneOffsetDate?: number | null;
    /**
     * What kind of date and time input the datetime picker supports.
     */
    type?: string | null;
    /**
     * The value displayed as the default value before user input or previous user input, represented in milliseconds ([Epoch time](https://en.wikipedia.org/wiki/Unix_time)). For `DATE_AND_TIME` type, the full epoch value is used. For `DATE_ONLY` type, only date of the epoch time is used. For `TIME_ONLY` type, only time of the epoch time is used. For example, to represent 3:00 AM, set epoch time to `3 * 60 * 60 * 1000`.
     */
    valueMsEpoch?: string | null;
  }
  /**
   * A widget that displays text with optional decorations such as a label above or below the text, an icon in front of the text, a selection widget or a button after the text.
   */
  export interface Schema$GoogleAppsCardV1DecoratedText {
    /**
     * The text that appears below `text`. Always truncates.
     */
    bottomLabel?: string | null;
    /**
     * A button that can be clicked to trigger an action.
     */
    button?: Schema$GoogleAppsCardV1Button;
    /**
     * An icon displayed after the text. Supports [built-in](https://developers.google.com/chat/api/guides/message-formats/cards#builtinicons) and [custom](https://developers.google.com/chat/api/guides/message-formats/cards#customicons) icons.
     */
    endIcon?: Schema$GoogleAppsCardV1Icon;
    /**
     * Deprecated in favor of `startIcon`.
     */
    icon?: Schema$GoogleAppsCardV1Icon;
    /**
     * When users click on `topLabel` or `bottomLabel`, this action triggers.
     */
    onClick?: Schema$GoogleAppsCardV1OnClick;
    /**
     * The icon displayed in front of the text.
     */
    startIcon?: Schema$GoogleAppsCardV1Icon;
    /**
     * A switch widget can be clicked to change its state and trigger an action.
     */
    switchControl?: Schema$GoogleAppsCardV1SwitchControl;
    /**
     * Required. The primary text. Supports simple formatting. See Text formatting for formatting details.
     */
    text?: string | null;
    /**
     * The text that appears above `text`. Always truncates.
     */
    topLabel?: string | null;
    /**
     * The wrap text setting. If `true`, the text wraps and displays on multiple lines. Otherwise, the text is truncated. Only applies to `text`, not `topLabel` and `bottomLabel`.
     */
    wrapText?: boolean | null;
  }
  /**
   * Displays a divider between widgets, a horizontal line. For example, the following JSON creates a divider: ``` "divider": {\} ```
   */
  export interface Schema$GoogleAppsCardV1Divider {}
  /**
   * Displays a grid with a collection of items. A grid supports any number of columns and items. The number of rows is determined by items divided by columns. A grid with 10 items and 2 columns has 5 rows. A grid with 11 items and 2 columns has 6 rows. For example, the following JSON creates a 2 column grid with a single item: ``` "grid": { "title": "A fine collection of items", "columnCount": 2, "borderStyle": { "type": "STROKE", "cornerRadius": 4 \}, "items": [ { "image": { "imageUri": "https://www.example.com/image.png", "cropStyle": { "type": "SQUARE" \}, "borderStyle": { "type": "STROKE" \} \}, "title": "An item", "textAlignment": "CENTER" \} ], "onClick": { "openLink": { "url": "https://www.example.com" \} \} \} ```
   */
  export interface Schema$GoogleAppsCardV1Grid {
    /**
     * The border style to apply to each grid item.
     */
    borderStyle?: Schema$GoogleAppsCardV1BorderStyle;
    /**
     * The number of columns to display in the grid. A default value is used if this field isn't specified, and that default value is different depending on where the grid is shown (dialog versus companion).
     */
    columnCount?: number | null;
    /**
     * The items to display in the grid.
     */
    items?: Schema$GoogleAppsCardV1GridItem[];
    /**
     * This callback is reused by each individual grid item, but with the item's identifier and index in the items list added to the callback's parameters.
     */
    onClick?: Schema$GoogleAppsCardV1OnClick;
    /**
     * The text that displays in the grid header.
     */
    title?: string | null;
  }
  /**
   * Represents a single item in the grid layout.
   */
  export interface Schema$GoogleAppsCardV1GridItem {
    /**
     * A user-specified identifier for this grid item. This identifier is returned in the parent Grid's onClick callback parameters.
     */
    id?: string | null;
    /**
     * The image that displays in the grid item.
     */
    image?: Schema$GoogleAppsCardV1ImageComponent;
    /**
     * The layout to use for the grid item.
     */
    layout?: string | null;
    /**
     * The grid item's subtitle.
     */
    subtitle?: string | null;
    /**
     * The grid item's title.
     */
    title?: string | null;
  }
  /**
   * An icon displayed in a widget on a card. Supports [built-in](https://developers.google.com/chat/api/guides/message-formats/cards#builtinicons) and [custom](https://developers.google.com/chat/api/guides/message-formats/cards#customicons) icons.
   */
  export interface Schema$GoogleAppsCardV1Icon {
    /**
     * Optional. A description of the icon used for accessibility. If unspecified, the default value "Button" is provided. As a best practice, you should set a helpful description for what the icon displays, and if applicable, what it does. For example, `A user's account portrait`, or `Opens a new browser tab and navigates to the Google Chat developer documentation at https://developers.google.com/chat`. If the icon is set in a Button, the `altText` appears as helper text when the user hovers over the button. However, if the button also sets `text`, the icon's `altText` is ignored.
     */
    altText?: string | null;
    /**
     * Display a custom icon hosted at an HTTPS URL. For example: ``` "iconUrl": "https://developers.google.com/chat/images/quickstart-app-avatar.png" ``` Supported file types include `.png` and `.jpg`.
     */
    iconUrl?: string | null;
    /**
     * The crop style applied to the image. In some cases, applying a `CIRCLE` crop causes the image to be drawn larger than a built-in icon.
     */
    imageType?: string | null;
    /**
     * Display one of the built-in icons provided by Google Workspace. For example, to display an airplane icon, specify `AIRPLANE`. For a bus, specify `BUS`. For a full list of supported icons, see [built-in icons](https://developers.google.com/chat/api/guides/message-formats/cards#builtinicons).
     */
    knownIcon?: string | null;
  }
  /**
   * An image that is specified by a URL and can have an `onClick` action.
   */
  export interface Schema$GoogleAppsCardV1Image {
    /**
     * The alternative text of this image, used for accessibility.
     */
    altText?: string | null;
    /**
     * The `https` URL that hosts the image. For example: ``` https://developers.google.com/chat/images/quickstart-app-avatar.png ```
     */
    imageUrl?: string | null;
    /**
     * When a user clicks on the image, the click triggers this action.
     */
    onClick?: Schema$GoogleAppsCardV1OnClick;
  }
  /**
   * Represents an image.
   */
  export interface Schema$GoogleAppsCardV1ImageComponent {
    /**
     * The accessibility label for the image.
     */
    altText?: string | null;
    /**
     * The border style to apply to the image.
     */
    borderStyle?: Schema$GoogleAppsCardV1BorderStyle;
    /**
     * The crop style to apply to the image.
     */
    cropStyle?: Schema$GoogleAppsCardV1ImageCropStyle;
    /**
     * The image URL.
     */
    imageUri?: string | null;
  }
  /**
   * Represents the crop style applied to an image. For example, here's how to apply a 16 by 9 aspect ratio: ``` cropStyle { "type": "RECTANGLE_CUSTOM", "aspectRatio": 16/9 \} ```
   */
  export interface Schema$GoogleAppsCardV1ImageCropStyle {
    /**
     * The aspect ratio to use if the crop type is `RECTANGLE_CUSTOM`. For example, here's how to apply a 16 by 9 aspect ratio: ``` cropStyle { "type": "RECTANGLE_CUSTOM", "aspectRatio": 16/9 \} ```
     */
    aspectRatio?: number | null;
    /**
     * The crop type.
     */
    type?: string | null;
  }
  /**
   * Represents how to respond when users click an interactive element on a card, such as a button.
   */
  export interface Schema$GoogleAppsCardV1OnClick {
    /**
     * If specified, an action is triggered by this `onClick`.
     */
    action?: Schema$GoogleAppsCardV1Action;
    /**
     * A new card is pushed to the card stack after clicking if specified. Supported by Google Workspace Add-ons, but not Chat apps.
     */
    card?: Schema$GoogleAppsCardV1Card;
    /**
     * An add-on triggers this action when the action needs to open a link. This differs from the `open_link` above in that this needs to talk to server to get the link. Thus some preparation work is required for web client to do before the open link action response comes back.
     */
    openDynamicLinkAction?: Schema$GoogleAppsCardV1Action;
    /**
     * If specified, this `onClick` triggers an open link action.
     */
    openLink?: Schema$GoogleAppsCardV1OpenLink;
  }
  /**
   * Represents an `onClick` event that opens a hyperlink.
   */
  export interface Schema$GoogleAppsCardV1OpenLink {
    /**
     * Whether the client forgets about a link after opening it, or observes it until the window closes. Not supported by Chat apps.
     */
    onClose?: string | null;
    /**
     * How to open a link. Not supported by Chat apps.
     */
    openAs?: string | null;
    /**
     * The URL to open.
     */
    url?: string | null;
  }
  /**
   * A section contains a collection of widgets that are rendered vertically in the order that they are specified.
   */
  export interface Schema$GoogleAppsCardV1Section {
    /**
     * Indicates whether this section is collapsible. Collapsible sections hide some or all widgets, but users can expand the section to reveal the hidden widgets by clicking **Show more**. Users can hide the widgets again by clicking **Show less**. To determine which widgets are hidden, specify `uncollapsibleWidgetsCount`.
     */
    collapsible?: boolean | null;
    /**
     * Text that appears at the top of a section. Supports [simple HTML formatted text](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting).
     */
    header?: string | null;
    /**
     * The number of uncollapsible widgets which remain visible even when a section is collapsed. For example, when a section contains five widgets and the `uncollapsibleWidgetsCount` is set to `2`, the first two widgets are always shown and the last three are collapsed by default. The `uncollapsibleWidgetsCount` is taken into account only when `collapsible` is `true`.
     */
    uncollapsibleWidgetsCount?: number | null;
    /**
     * All the widgets in the section. Must contain at least 1 widget.
     */
    widgets?: Schema$GoogleAppsCardV1Widget[];
  }
  /**
   * A widget that creates a UI item with options for users to select. For example, a dropdown menu or check list. Chat apps receive and can process the value of entered text during form input events. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs). When you need to collect data from users that matches options you set, use a selection input. To collect abstract data from users, use the text input widget instead.
   */
  export interface Schema$GoogleAppsCardV1SelectionInput {
    /**
     * An array of the selected items. For example, all the selected check boxes.
     */
    items?: Schema$GoogleAppsCardV1SelectionItem[];
    /**
     * The text that appears above the selection input field in the user interface. Specify text that helps the user enter the information your app needs. For example, if users are selecting the urgency of a work ticket from a drop-down menu, the label might be "Urgency" or "Select urgency".
     */
    label?: string | null;
    /**
     * The name by which the selection input is identified in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs).
     */
    name?: string | null;
    /**
     * If specified, the form is submitted when the selection changes. If not specified, you must specify a separate button that submits the form. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs).
     */
    onChangeAction?: Schema$GoogleAppsCardV1Action;
    /**
     * The way that an option appears to users. Different options support different types of interactions. For example, users can enable multiple check boxes, but can only select one value from a dropdown menu. Each selection input supports one type of selection. Mixing check boxes and switches, for example, is not supported.
     */
    type?: string | null;
  }
  /**
   * A selectable item in a selection input, such as a check box or a switch.
   */
  export interface Schema$GoogleAppsCardV1SelectionItem {
    /**
     * When `true`, more than one item is selected. If more than one item is selected for radio buttons and dropdown menus, the first selected item is received and the ones after are ignored.
     */
    selected?: boolean | null;
    /**
     * The text displayed to users.
     */
    text?: string | null;
    /**
     * The value associated with this item. The client should use this as a form input value. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs).
     */
    value?: string | null;
  }
  /**
   * One suggested value that users can enter in a text input field.
   */
  export interface Schema$GoogleAppsCardV1SuggestionItem {
    /**
     * The value of a suggested input to a text input field. This is equivalent to what users would enter themselves.
     */
    text?: string | null;
  }
  /**
   * Suggested values that users can enter. These values appear when users click inside the text input field. As users type, the suggested values dynamically filter to match what the users have typed. For example, a text input field for programming language might suggest Java, JavaScript, Python, and C++. When users start typing "Jav", the list of suggestions filters to show just Java and JavaScript. Suggested values help guide users to enter values that your app can make sense of. When referring to JavaScript, some users might enter "javascript" and others "java script". Suggesting "JavaScript" can standardize how users interact with your app. When specified, `TextInput.type` is always `SINGLE_LINE`, even if it is set to `MULTIPLE_LINE`.
   */
  export interface Schema$GoogleAppsCardV1Suggestions {
    /**
     * A list of suggestions used for autocomplete recommendations in text input fields.
     */
    items?: Schema$GoogleAppsCardV1SuggestionItem[];
  }
  /**
   * Either a toggle-style switch or a checkbox inside a `decoratedText` widget. Only supported on the `decoratedText` widget.
   */
  export interface Schema$GoogleAppsCardV1SwitchControl {
    /**
     * How the switch appears in the user interface.
     */
    controlType?: string | null;
    /**
     * The name by which the switch widget is identified in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs).
     */
    name?: string | null;
    /**
     * The action to perform when the switch state is changed, such as what function to run.
     */
    onChangeAction?: Schema$GoogleAppsCardV1Action;
    /**
     * When `true`, the switch is selected.
     */
    selected?: boolean | null;
    /**
     * The value entered by a user, returned as part of a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs).
     */
    value?: string | null;
  }
  /**
   * A field in which users can enter text. Supports suggestions and on-change actions. Chat apps receive and can process the value of entered text during form input events. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs). When you need to collect abstract data from users, use a text input. To collect defined data from users, use the selection input widget instead.
   */
  export interface Schema$GoogleAppsCardV1TextInput {
    /**
     * Optional. Specify what action to take when the text input field provides suggestions to users who interact with it. If unspecified, the suggestions are set by `initialSuggestions` and are processed by the client. If specified, the app takes the action specified here, such as running a custom function. Supported by Google Workspace Add-ons, but not Chat apps. Support by Chat apps coming soon.
     */
    autoCompleteAction?: Schema$GoogleAppsCardV1Action;
    /**
     * Text that appears below the text input field meant to assist users by prompting them to enter a certain value. This text is always visible. Required if `label` is unspecified. Otherwise, optional.
     */
    hintText?: string | null;
    /**
     * Suggested values that users can enter. These values appear when users click inside the text input field. As users type, the suggested values dynamically filter to match what the users have typed. For example, a text input field for programming language might suggest Java, JavaScript, Python, and C++. When users start typing "Jav", the list of suggestions filters to show just Java and JavaScript. Suggested values help guide users to enter values that your app can make sense of. When referring to JavaScript, some users might enter "javascript" and others "java script". Suggesting "JavaScript" can standardize how users interact with your app. When specified, `TextInput.type` is always `SINGLE_LINE`, even if it is set to `MULTIPLE_LINE`.
     */
    initialSuggestions?: Schema$GoogleAppsCardV1Suggestions;
    /**
     * The text that appears above the text input field in the user interface. Specify text that helps the user enter the information your app needs. For example, if you are asking someone's name, but specifically need their surname, write "surname" instead of "name". Required if `hintText` is unspecified. Otherwise, optional.
     */
    label?: string | null;
    /**
     * The name by which the text input is identified in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs).
     */
    name?: string | null;
    /**
     * What to do when a change occurs in the text input field. Examples of changes include a user adding to the field, or deleting text. Examples of actions to take include running a custom function or opening a [dialog](https://developers.google.com/chat/how-tos/dialogs) in Google Chat.
     */
    onChangeAction?: Schema$GoogleAppsCardV1Action;
    /**
     * How a text input field appears in the user interface. For example, whether the field is single or multi-line.
     */
    type?: string | null;
    /**
     * The value entered by a user, returned as part of a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs).
     */
    value?: string | null;
  }
  /**
   * A paragraph of text that supports formatting. See [Text formatting](https://developers.google.com/workspace/add-ons/concepts/widgets#text_formatting) for details.
   */
  export interface Schema$GoogleAppsCardV1TextParagraph {
    /**
     * The text that's shown in the widget.
     */
    text?: string | null;
  }
  /**
   * Each card is made up of widgets. A widget is a composite object that can represent one of text, images, buttons, and other object types.
   */
  export interface Schema$GoogleAppsCardV1Widget {
    /**
     * A list of buttons. For example, the following JSON creates two buttons. The first is a blue text button and the second is an image button that opens a link: ``` "buttonList": { "buttons": [ { "text": "Edit", "color": { "red": 0, "green": 0, "blue": 1, "alpha": 1 \}, "disabled": true, \}, { "icon": { "knownIcon": "INVITE", "altText": "check calendar" \}, "onClick": { "openLink": { "url": "https://example.com/calendar" \} \} \} ] \} ```
     */
    buttonList?: Schema$GoogleAppsCardV1ButtonList;
    /**
     * Displays a selection/input widget for date, time, or date and time. Not supported by Chat apps. Support by Chat apps is coming soon. For example, the following JSON creates a datetime picker to schedule an appointment: ``` "dateTimePicker": { "name": "appointment_time", "label": "Book your appointment at:", "type": "DATE_AND_TIME", "valueMsEpoch": "796435200000" \} ```
     */
    dateTimePicker?: Schema$GoogleAppsCardV1DateTimePicker;
    /**
     * Displays a decorated text item. For example, the following JSON creates a decorated text widget showing email address: ``` "decoratedText": { "icon": { "knownIcon": "EMAIL" \}, "topLabel": "Email Address", "text": "sasha@example.com", "bottomLabel": "This is a new Email address!", "switchControl": { "name": "has_send_welcome_email_to_sasha", "selected": false, "controlType": "CHECKBOX" \} \} ```
     */
    decoratedText?: Schema$GoogleAppsCardV1DecoratedText;
    /**
     * Displays a horizontal line divider between widgets. For example, the following JSON creates a divider: ``` "divider": { \} ```
     */
    divider?: Schema$GoogleAppsCardV1Divider;
    /**
     * Displays a grid with a collection of items. A grid supports any number of columns and items. The number of rows is determined by the upper bounds of the number items divided by the number of columns. A grid with 10 items and 2 columns has 5 rows. A grid with 11 items and 2 columns has 6 rows. For example, the following JSON creates a 2 column grid with a single item: ``` "grid": { "title": "A fine collection of items", "columnCount": 2, "borderStyle": { "type": "STROKE", "cornerRadius": 4 \}, "items": [ { "image": { "imageUri": "https://www.example.com/image.png", "cropStyle": { "type": "SQUARE" \}, "borderStyle": { "type": "STROKE" \} \}, "title": "An item", "textAlignment": "CENTER" \} ], "onClick": { "openLink": { "url": "https://www.example.com" \} \} \} ```
     */
    grid?: Schema$GoogleAppsCardV1Grid;
    /**
     * Displays an image. For example, the following JSON creates an image with alternative text: ``` "image": { "imageUrl": "https://developers.google.com/chat/images/quickstart-app-avatar.png", "altText": "Chat app avatar" \} ```
     */
    image?: Schema$GoogleAppsCardV1Image;
    /**
     * Displays a selection control that lets users select items. Selection controls can be check boxes, radio buttons, switches, or dropdown menus. For example, the following JSON creates a dropdown menu that lets users choose a size: ``` "selectionInput": { "name": "size", "label": "Size" "type": "DROPDOWN", "items": [ { "text": "S", "value": "small", "selected": false \}, { "text": "M", "value": "medium", "selected": true \}, { "text": "L", "value": "large", "selected": false \}, { "text": "XL", "value": "extra_large", "selected": false \} ] \} ```
     */
    selectionInput?: Schema$GoogleAppsCardV1SelectionInput;
    /**
     * Displays a text box that users can type into. For example, the following JSON creates a text input for an email address: ``` "textInput": { "name": "mailing_address", "label": "Mailing Address" \} ``` As another example, the following JSON creates a text input for a programming language with static suggestions: ``` "textInput": { "name": "preferred_programing_language", "label": "Preferred Language", "initialSuggestions": { "items": [ { "text": "C++" \}, { "text": "Java" \}, { "text": "JavaScript" \}, { "text": "Python" \} ] \} \} ```
     */
    textInput?: Schema$GoogleAppsCardV1TextInput;
    /**
     * Displays a text paragraph. Supports [simple HTML formatted text](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). For example, the following JSON creates a bolded text: ``` "textParagraph": { "text": " *bold text*" \} ```
     */
    textParagraph?: Schema$GoogleAppsCardV1TextParagraph;
  }
  /**
   * An image that is specified by a URL and can have an onclick action.
   */
  export interface Schema$Image {
    /**
     * The aspect ratio of this image (width/height). This field allows clients to reserve the right height for the image while waiting for it to load. It's not meant to override the native aspect ratio of the image. If unset, the server fills it by prefetching the image.
     */
    aspectRatio?: number | null;
    /**
     * The URL of the image.
     */
    imageUrl?: string | null;
    /**
     * The onclick action.
     */
    onClick?: Schema$OnClick;
  }
  /**
   * An image button with an onclick action.
   */
  export interface Schema$ImageButton {
    /**
     * The icon specified by an enum that indices to an icon provided by Chat API.
     */
    icon?: string | null;
    /**
     * The icon specified by a URL.
     */
    iconUrl?: string | null;
    /**
     * The name of this image_button which will be used for accessibility. Default value will be provided if developers don't specify.
     */
    name?: string | null;
    /**
     * The onclick action.
     */
    onClick?: Schema$OnClick;
  }
  /**
   * Types of data inputs for widgets. Users enter data with these inputs.
   */
  export interface Schema$Inputs {
    /**
     * Date input values. Not supported by Chat apps.
     */
    dateInput?: Schema$DateInput;
    /**
     * Date and time input values. Not supported by Chat apps.
     */
    dateTimeInput?: Schema$DateTimeInput;
    /**
     * Input parameter for regular widgets. For single-valued widgets, it is a single value list. For multi-valued widgets, such as checkbox, all the values are presented.
     */
    stringInputs?: Schema$StringInputs;
    /**
     * Time input values. Not supported by Chat apps.
     */
    timeInput?: Schema$TimeInput;
  }
  /**
   * A UI element contains a key (label) and a value (content). And this element may also contain some actions such as onclick button.
   */
  export interface Schema$KeyValue {
    /**
     * The text of the bottom label. Formatted text supported.
     */
    bottomLabel?: string | null;
    /**
     * A button that can be clicked to trigger an action.
     */
    button?: Schema$Button;
    /**
     * The text of the content. Formatted text supported and always required.
     */
    content?: string | null;
    /**
     * If the content should be multiline.
     */
    contentMultiline?: boolean | null;
    /**
     * An enum value that will be replaced by the Chat API with the corresponding icon image.
     */
    icon?: string | null;
    /**
     * The icon specified by a URL.
     */
    iconUrl?: string | null;
    /**
     * The onclick action. Only the top label, bottom label and content region are clickable.
     */
    onClick?: Schema$OnClick;
    /**
     * The text of the top label. Formatted text supported.
     */
    topLabel?: string | null;
  }
  export interface Schema$ListMembershipsResponse {
    /**
     * List of memberships in the requested (or first) page.
     */
    memberships?: Schema$Membership[];
    /**
     * A token that can be sent as `pageToken` to retrieve the next page of results. If empty, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$ListSpacesResponse {
    /**
     * A token that can be sent as `pageToken` to retrieve the next page of results. If empty, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * List of spaces in the requested (or first) page.
     */
    spaces?: Schema$Space[];
  }
  /**
   * A matched url in a Chat message. Chat apps can preview matched URLs. For more information, refer to [Preview links](https://developers.google.com/chat/how-tos/preview-links).
   */
  export interface Schema$MatchedUrl {
    /**
     * Output only. The url that was matched.
     */
    url?: string | null;
  }
  /**
   * Media resource.
   */
  export interface Schema$Media {
    /**
     * Name of the media resource.
     */
    resourceName?: string | null;
  }
  /**
   * Represents a membership relation in Google Chat, such as whether a user or Chat app is invited to, part of, or absent from a space.
   */
  export interface Schema$Membership {
    /**
     * Output only. The creation time of the membership, such as when a member joined or was invited to join a space.
     */
    createTime?: string | null;
    /**
     * The Google Chat user or app the membership corresponds to.
     */
    member?: Schema$User;
    /**
     * Resource name of the membership, assigned by the server. Format: spaces/{space\}/members/{member\}
     */
    name?: string | null;
    /**
     * Output only. User's role within a Chat space, which determines their permitted actions in the space.
     */
    role?: string | null;
    /**
     * Output only. State of the membership.
     */
    state?: string | null;
  }
  /**
   * A message in Google Chat.
   */
  export interface Schema$Message {
    /**
     * Input only. Parameters that a Chat app can use to configure how its response is posted.
     */
    actionResponse?: Schema$ActionResponse;
    /**
     * Output only. Annotations associated with the text in this message.
     */
    annotations?: Schema$Annotation[];
    /**
     * Output only. Plain-text body of the message with all Chat app mentions stripped out.
     */
    argumentText?: string | null;
    /**
     * User-uploaded attachment.
     */
    attachment?: Schema$Attachment[];
    /**
     * Deprecated: Use `cards_v2` instead. Rich, formatted and interactive cards that can be used to display UI elements such as: formatted texts, buttons, clickable images. Cards are normally displayed below the plain-text body of the message. `cards` and `cards_v2` can have a maximum size of 32 KB.
     */
    cards?: Schema$Card[];
    /**
     * Richly formatted and interactive cards that display UI elements and editable widgets, such as: - Formatted text - Buttons - Clickable images - Checkboxes - Radio buttons - Input widgets. Cards are usually displayed below the text body of a Chat message, but can situationally appear other places, such as [dialogs](https://developers.google.com/chat/how-tos/dialogs). Each card can have a maximum size of 32 KB. The `cardId` is a unique identifier among cards in the same message and for identifying user input values. Currently supported widgets include: - `TextParagraph` - `DecoratedText` - `Image` - `ButtonList` - `Divider` - `TextInput` - `SelectionInput` - `Grid`
     */
    cardsV2?: Schema$CardWithId[];
    /**
     * A custom name for a Chat message assigned at creation. Must start with `client-` and contain only lowercase letters, numbers, and hyphens up to 63 characters in length. Specify this field to get, update, or delete the message with the specified value. For example usage, see [Name a created message](https://developers.google.com/chat/api/guides/crudl/messages#name_a_created_message).
     */
    clientAssignedMessageId?: string | null;
    /**
     * Output only. The time at which the message was created in Google Chat server.
     */
    createTime?: string | null;
    /**
     * A plain-text description of the message's cards, used when the actual cards cannot be displayed (e.g. mobile notifications).
     */
    fallbackText?: string | null;
    /**
     * Output only. The time at which the message was last edited by a user. If the message has never been edited, this field is empty.
     */
    lastUpdateTime?: string | null;
    /**
     * Output only. A URL in `spaces.messages.text` that matches a link preview pattern. For more information, refer to [Preview links](https://developers.google.com/chat/how-tos/preview-links).
     */
    matchedUrl?: Schema$MatchedUrl;
    /**
     * Resource name in the form `spaces/x/messages/x`. Example: `spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB`
     */
    name?: string | null;
    /**
     * Output only. The user who created the message. If your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the output populates the [user](https://developers.google.com/chat/api/reference/rest/v1/User) `name` and `type`.
     */
    sender?: Schema$User;
    /**
     * Output only. Slash command information, if applicable.
     */
    slashCommand?: Schema$SlashCommand;
    /**
     * If your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the output populates the [space](https://developers.google.com/chat/api/reference/rest/v1/spaces) `name`.
     */
    space?: Schema$Space;
    /**
     * Plain-text body of the message. The first link to an image, video, web page, or other preview-able item generates a preview chip.
     */
    text?: string | null;
    /**
     * The thread the message belongs to. For example usage, see [Start or reply to a message thread](https://developers.google.com/chat/api/guides/crudl/messages#start_or_reply_to_a_message_thread).
     */
    thread?: Schema$Thread;
    /**
     * Output only. When `true`, the message is a response in a reply thread. When `false`, the message is visible in the space's top-level conversation as either the first message of a thread or a message with no threaded replies. If the space doesn't support reply in threads, this field is always `false`.
     */
    threadReply?: boolean | null;
  }
  /**
   * An onclick action (e.g. open a link).
   */
  export interface Schema$OnClick {
    /**
     * A form action will be triggered by this onclick if specified.
     */
    action?: Schema$FormAction;
    /**
     * This onclick triggers an open link action if specified.
     */
    openLink?: Schema$OpenLink;
  }
  /**
   * A link that opens a new window.
   */
  export interface Schema$OpenLink {
    /**
     * The URL to open.
     */
    url?: string | null;
  }
  /**
   * A section contains a collection of widgets that are rendered (vertically) in the order that they are specified. Across all platforms, cards have a narrow fixed width, so there is currently no need for layout properties (e.g. float).
   */
  export interface Schema$Section {
    /**
     * The header of the section, text formatted supported.
     */
    header?: string | null;
    /**
     * A section must contain at least 1 widget.
     */
    widgets?: Schema$WidgetMarkup[];
  }
  /**
   * A [slash command](https://developers.google.com/chat/how-tos/slash-commands) in Google Chat.
   */
  export interface Schema$SlashCommand {
    /**
     * The id of the slash command invoked.
     */
    commandId?: string | null;
  }
  /**
   * Annotation metadata for slash commands (/).
   */
  export interface Schema$SlashCommandMetadata {
    /**
     * The Chat app whose command was invoked.
     */
    bot?: Schema$User;
    /**
     * The command id of the invoked slash command.
     */
    commandId?: string | null;
    /**
     * The name of the invoked slash command.
     */
    commandName?: string | null;
    /**
     * Indicating whether the slash command is for a dialog.
     */
    triggersDialog?: boolean | null;
    /**
     * The type of slash command.
     */
    type?: string | null;
  }
  /**
   * A space in Google Chat. Spaces are conversations between two or more users or 1:1 messages between a user and a Chat app.
   */
  export interface Schema$Space {
    /**
     * Output only. Whether the Chat app was installed by a Google Workspace administrator. Administrators can install a Chat app for their domain, organizational unit, or a group of users. Administrators can only install Chat apps for direct messaging between users and the app. To support admin install, your app must feature direct messaging.
     */
    adminInstalled?: boolean | null;
    /**
     * The space's display name. Required when [creating a space](https://developers.google.com/chat/api/reference/rest/v1/spaces/create). For direct messages, this field may be empty. Supports up to 128 characters.
     */
    displayName?: string | null;
    /**
     * Resource name of the space. Format: spaces/{space\}
     */
    name?: string | null;
    /**
     * Optional. Whether the space is a DM between a Chat app and a single human.
     */
    singleUserBotDm?: boolean | null;
    /**
     * Details about the space including description and rules.
     */
    spaceDetails?: Schema$SpaceDetails;
    /**
     * Output only. The threading state in the Chat space.
     */
    spaceThreadingState?: string | null;
    /**
     * Output only. Deprecated: Use `spaceThreadingState` instead. Whether messages are threaded in this space.
     */
    threaded?: boolean | null;
    /**
     * Output only. Deprecated: Use `singleUserBotDm` or `spaceType` (developer preview) instead. The type of a space.
     */
    type?: string | null;
  }
  /**
   * Details about the space including description and rules.
   */
  export interface Schema$SpaceDetails {
    /**
     * Optional. A description of the space. It could describe the space's discussion topic, functional purpose, or participants. Supports up to 150 characters.
     */
    description?: string | null;
    /**
     * Optional. The space's rules, expectations, and etiquette. Supports up to 5,000 characters.
     */
    guidelines?: string | null;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details. There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string | null;
  }
  /**
   * Input parameter for regular widgets. For single-valued widgets, it is a single value list. For multi-valued widgets, such as checkbox, all the values are presented.
   */
  export interface Schema$StringInputs {
    /**
     * An array of strings entered by the user.
     */
    value?: string[] | null;
  }
  /**
   * A button with text and onclick action.
   */
  export interface Schema$TextButton {
    /**
     * The onclick action of the button.
     */
    onClick?: Schema$OnClick;
    /**
     * The text of the button.
     */
    text?: string | null;
  }
  /**
   * A paragraph of text. Formatted text supported.
   */
  export interface Schema$TextParagraph {
    text?: string | null;
  }
  /**
   * A thread in Google Chat.
   */
  export interface Schema$Thread {
    /**
     * Resource name of the thread. Example: spaces/{space\}/threads/{thread\}
     */
    name?: string | null;
    /**
     * Optional. Opaque thread identifier. To start or add to a thread, create a message and specify a `threadKey` or the thread.name. For example usage, see [Start or reply to a message thread](https://developers.google.com/chat/api/guides/crudl/messages#start_or_reply_to_a_message_thread). For other requests, this is an output only field.
     */
    threadKey?: string | null;
  }
  /**
   * Time input values. Not supported by Chat apps.
   */
  export interface Schema$TimeInput {
    /**
     * The hour on a 24-hour clock.
     */
    hours?: number | null;
    /**
     * The number of minutes past the hour. Valid values are 0 to 59.
     */
    minutes?: number | null;
  }
  /**
   * The timezone ID and offset from Coordinated Universal Time (UTC). Not supported by Chat apps.
   */
  export interface Schema$TimeZone {
    /**
     * The [IANA TZ](https://www.iana.org/time-zones) time zone database code, such as "America/Toronto".
     */
    id?: string | null;
    /**
     * The user timezone offset, in milliseconds, from Coordinated Universal Time (UTC).
     */
    offset?: number | null;
  }
  /**
   * A user in Google Chat.
   */
  export interface Schema$User {
    /**
     * Output only. The user's display name.
     */
    displayName?: string | null;
    /**
     * Unique identifier of the user's Google Workspace domain.
     */
    domainId?: string | null;
    /**
     * Output only. When `true`, the user is deleted or their profile is not visible.
     */
    isAnonymous?: boolean | null;
    /**
     * Resource name for a Google Chat user. Format: `users/{user\}`. `users/app` can be used as an alias for the calling app bot user. For human users, `{user\}` is the same user identifier as: - the `{person_id`\} for the [Person](https://developers.google.com/people/api/rest/v1/people) in the People API, where the Person `resource_name` is `people/{person_id\}`. For example, `users/123456789` in Chat API represents the same person as `people/123456789` in People API. - the `id` for a [user](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users) in the Admin SDK Directory API.
     */
    name?: string | null;
    /**
     * User type.
     */
    type?: string | null;
  }
  /**
   * Annotation metadata for user mentions (@).
   */
  export interface Schema$UserMentionMetadata {
    /**
     * The type of user mention.
     */
    type?: string | null;
    /**
     * The user mentioned.
     */
    user?: Schema$User;
  }
  /**
   * A widget is a UI element that presents texts, images, etc.
   */
  export interface Schema$WidgetMarkup {
    /**
     * A list of buttons. Buttons is also oneof data and only one of these fields should be set.
     */
    buttons?: Schema$Button[];
    /**
     * Display an image in this widget.
     */
    image?: Schema$Image;
    /**
     * Display a key value item in this widget.
     */
    keyValue?: Schema$KeyValue;
    /**
     * Display a text paragraph in this widget.
     */
    textParagraph?: Schema$TextParagraph;
  }

  export class Resource$Media {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Downloads media. Download is supported on the URI `/v1/media/{+name\}?alt=media`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chat.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const chat = google.chat('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chat.bot',
     *       'https://www.googleapis.com/auth/chat.messages',
     *       'https://www.googleapis.com/auth/chat.messages.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chat.media.download({
     *     // Name of the media that is being downloaded. See ReadRequest.resource_name.
     *     resourceName: '.*',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "resourceName": "my_resourceName"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    download(
      params: Params$Resource$Media$Download,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    download(
      params?: Params$Resource$Media$Download,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Media>;
    download(
      params: Params$Resource$Media$Download,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    download(
      params: Params$Resource$Media$Download,
      options: MethodOptions | BodyResponseCallback<Schema$Media>,
      callback: BodyResponseCallback<Schema$Media>
    ): void;
    download(
      params: Params$Resource$Media$Download,
      callback: BodyResponseCallback<Schema$Media>
    ): void;
    download(callback: BodyResponseCallback<Schema$Media>): void;
    download(
      paramsOrCallback?:
        | Params$Resource$Media$Download
        | BodyResponseCallback<Schema$Media>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Media>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Media>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Media> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Media$Download;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Media$Download;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/media/{+resourceName}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resourceName'],
        pathParams: ['resourceName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Media>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Media>(parameters);
      }
    }
  }

  export interface Params$Resource$Media$Download extends StandardParameters {
    /**
     * Name of the media that is being downloaded. See ReadRequest.resource_name.
     */
    resourceName?: string;
  }

  export class Resource$Spaces {
    context: APIRequestContext;
    members: Resource$Spaces$Members;
    messages: Resource$Spaces$Messages;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.members = new Resource$Spaces$Members(this.context);
      this.messages = new Resource$Spaces$Messages(this.context);
    }

    /**
     * Returns a space. Requires [authentication](https://developers.google.com/chat/api/guides/auth). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.spaces` or `chat.spaces.readonly` authorization scope.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chat.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const chat = google.chat('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chat.bot',
     *       'https://www.googleapis.com/auth/chat.spaces',
     *       'https://www.googleapis.com/auth/chat.spaces.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chat.spaces.get({
     *     // Required. Resource name of the space, in the form "spaces/x". Format: spaces/{space\}
     *     name: 'spaces/my-space',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adminInstalled": false,
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "singleUserBotDm": false,
     *   //   "spaceDetails": {},
     *   //   "spaceThreadingState": "my_spaceThreadingState",
     *   //   "threaded": false,
     *   //   "type": "my_type"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Spaces$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Spaces$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Space>;
    get(
      params: Params$Resource$Spaces$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Spaces$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Space>,
      callback: BodyResponseCallback<Schema$Space>
    ): void;
    get(
      params: Params$Resource$Spaces$Get,
      callback: BodyResponseCallback<Schema$Space>
    ): void;
    get(callback: BodyResponseCallback<Schema$Space>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Spaces$Get
        | BodyResponseCallback<Schema$Space>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Space>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Space>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Space> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Spaces$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spaces$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Space>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Space>(parameters);
      }
    }

    /**
     * Lists spaces the caller is a member of. Requires [authentication](https://developers.google.com/chat/api/guides/auth). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.spaces` or `chat.spaces.readonly` authorization scope. Lists spaces visible to the caller or authenticated user. Group chats and DMs aren't listed until the first message is sent.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chat.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const chat = google.chat('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chat.bot',
     *       'https://www.googleapis.com/auth/chat.spaces',
     *       'https://www.googleapis.com/auth/chat.spaces.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chat.spaces.list({
     *     // Optional. The maximum number of spaces to return. The service may return fewer than this value. If unspecified, at most 100 spaces are returned. The maximum value is 1000; values above 1000 are coerced to 1000. Negative values return an `INVALID_ARGUMENT` error.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous list spaces call. Provide this to retrieve the subsequent page. When paginating, the filter value should match the call that provided the page token. Passing a different value may lead to unexpected results.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "spaces": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Spaces$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Spaces$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSpacesResponse>;
    list(
      params: Params$Resource$Spaces$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Spaces$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListSpacesResponse>,
      callback: BodyResponseCallback<Schema$ListSpacesResponse>
    ): void;
    list(
      params: Params$Resource$Spaces$List,
      callback: BodyResponseCallback<Schema$ListSpacesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListSpacesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Spaces$List
        | BodyResponseCallback<Schema$ListSpacesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSpacesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSpacesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListSpacesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Spaces$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spaces$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/spaces').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListSpacesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSpacesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Spaces$Get extends StandardParameters {
    /**
     * Required. Resource name of the space, in the form "spaces/x". Format: spaces/{space\}
     */
    name?: string;
  }
  export interface Params$Resource$Spaces$List extends StandardParameters {
    /**
     * Optional. The maximum number of spaces to return. The service may return fewer than this value. If unspecified, at most 100 spaces are returned. The maximum value is 1000; values above 1000 are coerced to 1000. Negative values return an `INVALID_ARGUMENT` error.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous list spaces call. Provide this to retrieve the subsequent page. When paginating, the filter value should match the call that provided the page token. Passing a different value may lead to unexpected results.
     */
    pageToken?: string;
  }

  export class Resource$Spaces$Members {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns a membership. Requires [authentication](https://developers.google.com/chat/api/guides/auth/). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.memberships` or `chat.memberships.readonly` authorization scope.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chat.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const chat = google.chat('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chat.bot',
     *       'https://www.googleapis.com/auth/chat.memberships',
     *       'https://www.googleapis.com/auth/chat.memberships.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chat.spaces.members.get({
     *     // Required. Resource name of the membership to retrieve. Format: spaces/{space\}/members/{member\}
     *     name: 'spaces/my-space/members/my-member',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "member": {},
     *   //   "name": "my_name",
     *   //   "role": "my_role",
     *   //   "state": "my_state"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Spaces$Members$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Spaces$Members$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Membership>;
    get(
      params: Params$Resource$Spaces$Members$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Spaces$Members$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Membership>,
      callback: BodyResponseCallback<Schema$Membership>
    ): void;
    get(
      params: Params$Resource$Spaces$Members$Get,
      callback: BodyResponseCallback<Schema$Membership>
    ): void;
    get(callback: BodyResponseCallback<Schema$Membership>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Spaces$Members$Get
        | BodyResponseCallback<Schema$Membership>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Membership>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Membership>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Membership> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Spaces$Members$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spaces$Members$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Membership>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Membership>(parameters);
      }
    }

    /**
     * Lists memberships in a space. Requires [authentication](https://developers.google.com/chat/api/guides/auth/). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.memberships` or `chat.memberships.readonly` authorization scope.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chat.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const chat = google.chat('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chat.bot',
     *       'https://www.googleapis.com/auth/chat.memberships',
     *       'https://www.googleapis.com/auth/chat.memberships.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chat.spaces.members.list({
     *     // The maximum number of memberships to return. The service may return fewer than this value. If unspecified, at most 100 memberships are returned. The maximum value is 1000; values above 1000 are coerced to 1000. Negative values return an INVALID_ARGUMENT error.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous call to list memberships. Provide this to retrieve the subsequent page. When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters may lead to unexpected results.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the space for which to fetch a membership list. Format: spaces/{space\}
     *     parent: 'spaces/my-space',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "memberships": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Spaces$Members$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Spaces$Members$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListMembershipsResponse>;
    list(
      params: Params$Resource$Spaces$Members$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Spaces$Members$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListMembershipsResponse>,
      callback: BodyResponseCallback<Schema$ListMembershipsResponse>
    ): void;
    list(
      params: Params$Resource$Spaces$Members$List,
      callback: BodyResponseCallback<Schema$ListMembershipsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListMembershipsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Spaces$Members$List
        | BodyResponseCallback<Schema$ListMembershipsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListMembershipsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListMembershipsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListMembershipsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Spaces$Members$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spaces$Members$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/members').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListMembershipsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListMembershipsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Spaces$Members$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the membership to retrieve. Format: spaces/{space\}/members/{member\}
     */
    name?: string;
  }
  export interface Params$Resource$Spaces$Members$List
    extends StandardParameters {
    /**
     * The maximum number of memberships to return. The service may return fewer than this value. If unspecified, at most 100 memberships are returned. The maximum value is 1000; values above 1000 are coerced to 1000. Negative values return an INVALID_ARGUMENT error.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous call to list memberships. Provide this to retrieve the subsequent page. When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters may lead to unexpected results.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the space for which to fetch a membership list. Format: spaces/{space\}
     */
    parent?: string;
  }

  export class Resource$Spaces$Messages {
    context: APIRequestContext;
    attachments: Resource$Spaces$Messages$Attachments;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.attachments = new Resource$Spaces$Messages$Attachments(this.context);
    }

    /**
     * Creates a message. For example usage, see [Create a message](https://developers.google.com/chat/api/guides/crudl/messages#create_a_message). Requires [authentication](https://developers.google.com/chat/api/guides/auth). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.messages` or `chat.messages.create` authorization scope. Because Chat provides authentication for [webhooks](https://developers.google.com/chat/how-tos/webhooks) as part of the URL that's generated when a webhook is registered, webhooks can create messages without a service account or user authentication.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chat.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const chat = google.chat('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chat.bot',
     *       'https://www.googleapis.com/auth/chat.messages',
     *       'https://www.googleapis.com/auth/chat.messages.create',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chat.spaces.messages.create({
     *     // Optional. A custom name for a Chat message assigned at creation. Must start with `client-` and contain only lowercase letters, numbers, and hyphens up to 63 characters in length. Specify this field to get, update, or delete the message with the specified value. For example usage, see [Name a created message](https://developers.google.com/chat/api/guides/crudl/messages#name_a_created_message).
     *     messageId: 'placeholder-value',
     *     // Optional. Specifies whether a message starts a thread or replies to one. Only supported in named spaces.
     *     messageReplyOption: 'placeholder-value',
     *     // Required. The resource name of the space in which to create a message. Format: spaces/{space\}
     *     parent: 'spaces/my-space',
     *     // Optional. A unique request ID for this message. Specifying an existing request ID returns the message created with that ID instead of creating a new message.
     *     requestId: 'placeholder-value',
     *     // Optional. Deprecated: Use thread.thread_key instead. Opaque thread identifier. To start or add to a thread, create a message and specify a `threadKey` or the thread.name. For example usage, see [Start or reply to a message thread](https://developers.google.com/chat/api/guides/crudl/messages#start_or_reply_to_a_message_thread).
     *     threadKey: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "actionResponse": {},
     *       //   "annotations": [],
     *       //   "argumentText": "my_argumentText",
     *       //   "attachment": [],
     *       //   "cards": [],
     *       //   "cardsV2": [],
     *       //   "clientAssignedMessageId": "my_clientAssignedMessageId",
     *       //   "createTime": "my_createTime",
     *       //   "fallbackText": "my_fallbackText",
     *       //   "lastUpdateTime": "my_lastUpdateTime",
     *       //   "matchedUrl": {},
     *       //   "name": "my_name",
     *       //   "sender": {},
     *       //   "slashCommand": {},
     *       //   "space": {},
     *       //   "text": "my_text",
     *       //   "thread": {},
     *       //   "threadReply": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "actionResponse": {},
     *   //   "annotations": [],
     *   //   "argumentText": "my_argumentText",
     *   //   "attachment": [],
     *   //   "cards": [],
     *   //   "cardsV2": [],
     *   //   "clientAssignedMessageId": "my_clientAssignedMessageId",
     *   //   "createTime": "my_createTime",
     *   //   "fallbackText": "my_fallbackText",
     *   //   "lastUpdateTime": "my_lastUpdateTime",
     *   //   "matchedUrl": {},
     *   //   "name": "my_name",
     *   //   "sender": {},
     *   //   "slashCommand": {},
     *   //   "space": {},
     *   //   "text": "my_text",
     *   //   "thread": {},
     *   //   "threadReply": false
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Spaces$Messages$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Spaces$Messages$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
    create(
      params: Params$Resource$Spaces$Messages$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Spaces$Messages$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    create(
      params: Params$Resource$Spaces$Messages$Create,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    create(callback: BodyResponseCallback<Schema$Message>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Spaces$Messages$Create
        | BodyResponseCallback<Schema$Message>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Message>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Message>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Message> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Spaces$Messages$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spaces$Messages$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/messages').replace(
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
        createAPIRequest<Schema$Message>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Message>(parameters);
      }
    }

    /**
     * Deletes a message. For example usage, see [Delete a message](https://developers.google.com/chat/api/guides/crudl/messages#delete_a_message). Requires [authentication](https://developers.google.com/chat/api/guides/auth). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.messages` authorization scope.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chat.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const chat = google.chat('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chat.bot',
     *       'https://www.googleapis.com/auth/chat.messages',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chat.spaces.messages.delete({
     *     // Required. Resource name of the message to be deleted, in the form "spaces/x/messages/x" Example: spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB
     *     name: 'spaces/my-space/messages/my-message',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Spaces$Messages$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Spaces$Messages$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Spaces$Messages$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Spaces$Messages$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Spaces$Messages$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Spaces$Messages$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Spaces$Messages$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spaces$Messages$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Returns a message. For example usage, see [Read a message](https://developers.google.com/chat/api/guides/crudl/messages#read_a_message). Requires [authentication](https://developers.google.com/chat/api/guides/auth). Fully supports [Service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.messages` or `chat.messages.readonly` authorization scope. Note: Might return a message from a blocked member or space.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chat.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const chat = google.chat('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chat.bot',
     *       'https://www.googleapis.com/auth/chat.messages',
     *       'https://www.googleapis.com/auth/chat.messages.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chat.spaces.messages.get({
     *     // Required. Resource name of the message to retrieve. Format: spaces/{space\}/messages/{message\} If the message begins with `client-`, then it has a custom name assigned by a Chat app that created it with the Chat REST API. That Chat app (but not others) can pass the custom name to get, update, or delete the message. To learn more, see [create and name a message] (https://developers.google.com/chat/api/guides/crudl/messages#name_a_created_message).
     *     name: 'spaces/my-space/messages/my-message',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "actionResponse": {},
     *   //   "annotations": [],
     *   //   "argumentText": "my_argumentText",
     *   //   "attachment": [],
     *   //   "cards": [],
     *   //   "cardsV2": [],
     *   //   "clientAssignedMessageId": "my_clientAssignedMessageId",
     *   //   "createTime": "my_createTime",
     *   //   "fallbackText": "my_fallbackText",
     *   //   "lastUpdateTime": "my_lastUpdateTime",
     *   //   "matchedUrl": {},
     *   //   "name": "my_name",
     *   //   "sender": {},
     *   //   "slashCommand": {},
     *   //   "space": {},
     *   //   "text": "my_text",
     *   //   "thread": {},
     *   //   "threadReply": false
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Spaces$Messages$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Spaces$Messages$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
    get(
      params: Params$Resource$Spaces$Messages$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Spaces$Messages$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    get(
      params: Params$Resource$Spaces$Messages$Get,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    get(callback: BodyResponseCallback<Schema$Message>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Spaces$Messages$Get
        | BodyResponseCallback<Schema$Message>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Message>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Message>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Message> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Spaces$Messages$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spaces$Messages$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Message>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Message>(parameters);
      }
    }

    /**
     * Updates a message. For example usage, see [Update a message](https://developers.google.com/chat/api/guides/crudl/messages#update_a_message). Requires [authentication](https://developers.google.com/chat/api/guides/auth/). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.messages` authorization scope.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chat.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const chat = google.chat('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chat.bot',
     *       'https://www.googleapis.com/auth/chat.messages',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chat.spaces.messages.patch({
     *     // Optional. If `true` and the message is not found, a new message is created and `updateMask` is ignored. The specified message ID must be [client-assigned](https://developers.google.com/chat/api/guides/crudl/messages#name_a_created_message) or the request fails.
     *     allowMissing: 'placeholder-value',
     *     // Resource name in the form `spaces/x/messages/x`. Example: `spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB`
     *     name: 'spaces/my-space/messages/my-message',
     *     // Required. The field paths to update. Separate multiple values with commas. Currently supported field paths: - text - cards (Requires [service account authentication](/chat/api/guides/auth/service-accounts).) - cards_v2
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "actionResponse": {},
     *       //   "annotations": [],
     *       //   "argumentText": "my_argumentText",
     *       //   "attachment": [],
     *       //   "cards": [],
     *       //   "cardsV2": [],
     *       //   "clientAssignedMessageId": "my_clientAssignedMessageId",
     *       //   "createTime": "my_createTime",
     *       //   "fallbackText": "my_fallbackText",
     *       //   "lastUpdateTime": "my_lastUpdateTime",
     *       //   "matchedUrl": {},
     *       //   "name": "my_name",
     *       //   "sender": {},
     *       //   "slashCommand": {},
     *       //   "space": {},
     *       //   "text": "my_text",
     *       //   "thread": {},
     *       //   "threadReply": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "actionResponse": {},
     *   //   "annotations": [],
     *   //   "argumentText": "my_argumentText",
     *   //   "attachment": [],
     *   //   "cards": [],
     *   //   "cardsV2": [],
     *   //   "clientAssignedMessageId": "my_clientAssignedMessageId",
     *   //   "createTime": "my_createTime",
     *   //   "fallbackText": "my_fallbackText",
     *   //   "lastUpdateTime": "my_lastUpdateTime",
     *   //   "matchedUrl": {},
     *   //   "name": "my_name",
     *   //   "sender": {},
     *   //   "slashCommand": {},
     *   //   "space": {},
     *   //   "text": "my_text",
     *   //   "thread": {},
     *   //   "threadReply": false
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Spaces$Messages$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Spaces$Messages$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
    patch(
      params: Params$Resource$Spaces$Messages$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Spaces$Messages$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    patch(
      params: Params$Resource$Spaces$Messages$Patch,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Message>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Spaces$Messages$Patch
        | BodyResponseCallback<Schema$Message>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Message>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Message>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Message> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Spaces$Messages$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spaces$Messages$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Message>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Message>(parameters);
      }
    }

    /**
     * Updates a message. For example usage, see [Update a message](https://developers.google.com/chat/api/guides/crudl/messages#update_a_message). Requires [authentication](https://developers.google.com/chat/api/guides/auth/). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.messages` authorization scope.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chat.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const chat = google.chat('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chat.bot',
     *       'https://www.googleapis.com/auth/chat.messages',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chat.spaces.messages.update({
     *     // Optional. If `true` and the message is not found, a new message is created and `updateMask` is ignored. The specified message ID must be [client-assigned](https://developers.google.com/chat/api/guides/crudl/messages#name_a_created_message) or the request fails.
     *     allowMissing: 'placeholder-value',
     *     // Resource name in the form `spaces/x/messages/x`. Example: `spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB`
     *     name: 'spaces/my-space/messages/my-message',
     *     // Required. The field paths to update. Separate multiple values with commas. Currently supported field paths: - text - cards (Requires [service account authentication](/chat/api/guides/auth/service-accounts).) - cards_v2
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "actionResponse": {},
     *       //   "annotations": [],
     *       //   "argumentText": "my_argumentText",
     *       //   "attachment": [],
     *       //   "cards": [],
     *       //   "cardsV2": [],
     *       //   "clientAssignedMessageId": "my_clientAssignedMessageId",
     *       //   "createTime": "my_createTime",
     *       //   "fallbackText": "my_fallbackText",
     *       //   "lastUpdateTime": "my_lastUpdateTime",
     *       //   "matchedUrl": {},
     *       //   "name": "my_name",
     *       //   "sender": {},
     *       //   "slashCommand": {},
     *       //   "space": {},
     *       //   "text": "my_text",
     *       //   "thread": {},
     *       //   "threadReply": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "actionResponse": {},
     *   //   "annotations": [],
     *   //   "argumentText": "my_argumentText",
     *   //   "attachment": [],
     *   //   "cards": [],
     *   //   "cardsV2": [],
     *   //   "clientAssignedMessageId": "my_clientAssignedMessageId",
     *   //   "createTime": "my_createTime",
     *   //   "fallbackText": "my_fallbackText",
     *   //   "lastUpdateTime": "my_lastUpdateTime",
     *   //   "matchedUrl": {},
     *   //   "name": "my_name",
     *   //   "sender": {},
     *   //   "slashCommand": {},
     *   //   "space": {},
     *   //   "text": "my_text",
     *   //   "thread": {},
     *   //   "threadReply": false
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Spaces$Messages$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Spaces$Messages$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
    update(
      params: Params$Resource$Spaces$Messages$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Spaces$Messages$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    update(
      params: Params$Resource$Spaces$Messages$Update,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    update(callback: BodyResponseCallback<Schema$Message>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Spaces$Messages$Update
        | BodyResponseCallback<Schema$Message>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Message>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Message>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Message> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Spaces$Messages$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spaces$Messages$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Message>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Message>(parameters);
      }
    }
  }

  export interface Params$Resource$Spaces$Messages$Create
    extends StandardParameters {
    /**
     * Optional. A custom name for a Chat message assigned at creation. Must start with `client-` and contain only lowercase letters, numbers, and hyphens up to 63 characters in length. Specify this field to get, update, or delete the message with the specified value. For example usage, see [Name a created message](https://developers.google.com/chat/api/guides/crudl/messages#name_a_created_message).
     */
    messageId?: string;
    /**
     * Optional. Specifies whether a message starts a thread or replies to one. Only supported in named spaces.
     */
    messageReplyOption?: string;
    /**
     * Required. The resource name of the space in which to create a message. Format: spaces/{space\}
     */
    parent?: string;
    /**
     * Optional. A unique request ID for this message. Specifying an existing request ID returns the message created with that ID instead of creating a new message.
     */
    requestId?: string;
    /**
     * Optional. Deprecated: Use thread.thread_key instead. Opaque thread identifier. To start or add to a thread, create a message and specify a `threadKey` or the thread.name. For example usage, see [Start or reply to a message thread](https://developers.google.com/chat/api/guides/crudl/messages#start_or_reply_to_a_message_thread).
     */
    threadKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Message;
  }
  export interface Params$Resource$Spaces$Messages$Delete
    extends StandardParameters {
    /**
     * Required. Resource name of the message to be deleted, in the form "spaces/x/messages/x" Example: spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB
     */
    name?: string;
  }
  export interface Params$Resource$Spaces$Messages$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the message to retrieve. Format: spaces/{space\}/messages/{message\} If the message begins with `client-`, then it has a custom name assigned by a Chat app that created it with the Chat REST API. That Chat app (but not others) can pass the custom name to get, update, or delete the message. To learn more, see [create and name a message] (https://developers.google.com/chat/api/guides/crudl/messages#name_a_created_message).
     */
    name?: string;
  }
  export interface Params$Resource$Spaces$Messages$Patch
    extends StandardParameters {
    /**
     * Optional. If `true` and the message is not found, a new message is created and `updateMask` is ignored. The specified message ID must be [client-assigned](https://developers.google.com/chat/api/guides/crudl/messages#name_a_created_message) or the request fails.
     */
    allowMissing?: boolean;
    /**
     * Resource name in the form `spaces/x/messages/x`. Example: `spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB`
     */
    name?: string;
    /**
     * Required. The field paths to update. Separate multiple values with commas. Currently supported field paths: - text - cards (Requires [service account authentication](/chat/api/guides/auth/service-accounts).) - cards_v2
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Message;
  }
  export interface Params$Resource$Spaces$Messages$Update
    extends StandardParameters {
    /**
     * Optional. If `true` and the message is not found, a new message is created and `updateMask` is ignored. The specified message ID must be [client-assigned](https://developers.google.com/chat/api/guides/crudl/messages#name_a_created_message) or the request fails.
     */
    allowMissing?: boolean;
    /**
     * Resource name in the form `spaces/x/messages/x`. Example: `spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB`
     */
    name?: string;
    /**
     * Required. The field paths to update. Separate multiple values with commas. Currently supported field paths: - text - cards (Requires [service account authentication](/chat/api/guides/auth/service-accounts).) - cards_v2
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Message;
  }

  export class Resource$Spaces$Messages$Attachments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the metadata of a message attachment. The attachment data is fetched using the [media API](https://developers.google.com/chat/api/reference/rest/v1/media/download). Requires [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chat.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const chat = google.chat('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/chat.bot'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chat.spaces.messages.attachments.get({
     *     // Required. Resource name of the attachment, in the form "spaces/x/messages/x/attachments/x".
     *     name: 'spaces/my-space/messages/my-message/attachments/my-attachment',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attachmentDataRef": {},
     *   //   "contentName": "my_contentName",
     *   //   "contentType": "my_contentType",
     *   //   "downloadUri": "my_downloadUri",
     *   //   "driveDataRef": {},
     *   //   "name": "my_name",
     *   //   "source": "my_source",
     *   //   "thumbnailUri": "my_thumbnailUri"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Spaces$Messages$Attachments$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Spaces$Messages$Attachments$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Attachment>;
    get(
      params: Params$Resource$Spaces$Messages$Attachments$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Spaces$Messages$Attachments$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Attachment>,
      callback: BodyResponseCallback<Schema$Attachment>
    ): void;
    get(
      params: Params$Resource$Spaces$Messages$Attachments$Get,
      callback: BodyResponseCallback<Schema$Attachment>
    ): void;
    get(callback: BodyResponseCallback<Schema$Attachment>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Spaces$Messages$Attachments$Get
        | BodyResponseCallback<Schema$Attachment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Attachment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Attachment>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Attachment> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Spaces$Messages$Attachments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spaces$Messages$Attachments$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Attachment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Attachment>(parameters);
      }
    }
  }

  export interface Params$Resource$Spaces$Messages$Attachments$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the attachment, in the form "spaces/x/messages/x/attachments/x".
     */
    name?: string;
  }
}
