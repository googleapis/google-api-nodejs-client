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
/* eslint-disable @typescript-eslint/class-name-casing */
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
   * Enables bots to fetch information and perform actions in Google Chat. Authentication using a service account is a prerequisite for using the Google Chat REST API.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const chat = google.chat('v1');
   * ```
   */
  export class Chat {
    context: APIRequestContext;
    dms: Resource$Dms;
    media: Resource$Media;
    rooms: Resource$Rooms;
    spaces: Resource$Spaces;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.dms = new Resource$Dms(this.context);
      this.media = new Resource$Media(this.context);
      this.rooms = new Resource$Rooms(this.context);
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
   * Parameters that a bot can use to configure how it's response is posted.
   */
  export interface Schema$ActionResponse {
    /**
     * This response is for Dialog related events and must be accompanied by ResponseType.Dialog
     */
    dialogAction?: Schema$DialogAction;
    /**
     * The type of bot response.
     */
    type?: string | null;
    /**
     * URL for users to auth or config. (Only for REQUEST_CONFIG response types.)
     */
    url?: string | null;
  }
  /**
   * ActionStatus represents status of a request from the bot developer's side. In specific, for each request a bot gets, the bot developer will set both fields below in relation to what the response status and message related to status should be.
   */
  export interface Schema$ActionStatus {
    /**
     * The status code.
     */
    statusCode?: string | null;
    /**
     * This message will be the corresponding string to the above status_code. If unset, an appropriate generic message based on the status_code will be shown to the user. If this field is set then the message will be surfaced to the user for both successes and errors.
     */
    userFacingMessage?: string | null;
  }
  /**
   * Annotations associated with the plain-text body of the message. Example plain-text message body: ``` Hello @FooBot how are you!" ``` The corresponding annotations metadata: ``` "annotations":[{ "type":"USER_MENTION", "startIndex":6, "length":7, "userMention": { "user": { "name":"users/107946847022116401880", "displayName":"FooBot", "avatarUrl":"https://goo.gl/aeDtrS", "type":"BOT" \}, "type":"MENTION" \} \}] ```
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
     * Output only. The download URL which should be used to allow a human user to download the attachment. Bots should not use this URL to download attachment content.
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
     * Output only. The thumbnail URL which should be used to preview the attachment to a human user. Bots should not use this URL to download attachment content.
     */
    thumbnailUri?: string | null;
  }
  /**
   * A reference to the data of an attachment.
   */
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
   * A card action is the action associated with the card. For an invoice card, a typical action would be: delete invoice, email invoice or open the invoice in browser.
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
   * Next available ID = 8
   */
  export interface Schema$CommonEventObject {
    /**
     * The keys are the string IDs associated with the widget and the values are inputs with a widget in the card.
     */
    formInputs?: {[key: string]: Schema$Inputs} | null;
    /**
     * The hostApp enum which indicates the app the add-on is invoked from
     */
    hostApp?: string | null;
    /**
     * Name of the invoked function associated with the widget. This field is currently only set for chat.
     */
    invokedFunction?: string | null;
    /**
     * Any additional parameters.
     */
    parameters?: {[key: string]: string} | null;
    /**
     * The platform enum which indicates the platform where the add-on is running.
     */
    platform?: string | null;
    timeZone?: Schema$TimeZone;
    /**
     * The full locale.displayName in the format of [ISO 639 language code]-[ISO 3166 country/region code] such as "en-US"
     */
    userLocale?: string | null;
  }
  /**
   * Input Parameter for Date Picker widget.
   */
  export interface Schema$DateInput {
    msSinceEpoch?: string | null;
  }
  /**
   * Input Parameter for Date and Time Picker widget.
   */
  export interface Schema$DateTimeInput {
    hasDate?: boolean | null;
    hasTime?: boolean | null;
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
     * This will include form information for dialogs such as form inputs, action parameters.
     */
    common?: Schema$CommonEventObject;
    /**
     * The URL the bot should redirect the user to after they have completed an authorization or configuration flow outside of Google Chat. See the [Authorizing access to 3p services guide](/chat/how-tos/auth-3p) for more information.
     */
    configCompleteRedirectUrl?: string | null;
    /**
     * The type of dialog event we have received.
     */
    dialogEventType?: string | null;
    /**
     * The timestamp indicating when the event was dispatched.
     */
    eventTime?: string | null;
    /**
     * Whether or not this event is related to dialogs request, submit or cancel. This will be set to true when we want a request/submit/cancel event.
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
     * The bot-defined key for the thread related to the event. See the thread_key field of the `spaces.message.create` request for more information.
     */
    threadKey?: string | null;
    /**
     * A secret value that bots can use to verify if a request is from Google. The token is randomly generated by Google, remains static, and can be obtained from the Google Chat API configuration page in the Cloud Console. Developers can revoke/regenerate it if needed from the same page.
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
     * Body of the dialog, which will be rendered in a modal. NOTE: The following fields within the objects are not supported: google.apps.card.v1.Widget.date_time_picker google.apps.card.v1.DecoratedText.SwitchControl.on_change_action google.apps.card.v1.TextInput.on_change_action google.apps.card.v1.SelectionInput.on_change_action google.apps.card.v1.DateTimePicker.on_change_action Setting the fields above will have no effect on the dialog.
     */
    body?: Schema$GoogleAppsCardV1Card;
  }
  /**
   * Contains dialog if present as well as the ActionStatus for the request sent from user.
   */
  export interface Schema$DialogAction {
    /**
     * Status for either invoke dialog or submit dialog requests. This will be used to display a status and message to user if needed. For example in case of an error or success.
     */
    actionStatus?: Schema$ActionStatus;
    /**
     * Dialog for the request.
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
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \} The JSON representation for `Empty` is empty JSON object `{\}`.
   */
  export interface Schema$Empty {}
  /**
   * A form action describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form.
   */
  export interface Schema$FormAction {
    /**
     * The method name is used to identify which part of the form triggered the form submission. This information is echoed back to the bot as part of the card click event. The same method name can be used for several elements that trigger a common behavior if desired.
     */
    actionMethodName?: string | null;
    /**
     * List of action parameters.
     */
    parameters?: Schema$ActionParameter[];
  }
  /**
   * An action that describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form.
   */
  export interface Schema$GoogleAppsCardV1Action {
    /**
     * Apps Script function to invoke when the containing element is clicked/activated.
     */
    function?: string | null;
    loadIndicator?: string | null;
    /**
     * List of action parameters.
     */
    parameters?: Schema$GoogleAppsCardV1ActionParameter[];
    /**
     * Indicates whether form values persist after the action. The default value is `false`. If `true`, form values remain after the action is triggered. When using [LoadIndicator.NONE](workspace/add-ons/reference/rpc/google.apps.card.v1#loadindicator) for actions, `persist_values` = `true`is recommended, as it ensures that any changes made by the user after form or on change actions are sent to the server are not overwritten by the response. If `false`, the form values are cleared when the action is triggered. When `persist_values` is set to `false`, it is strongly recommended that the card use [LoadIndicator.SPINNER](workspace/add-ons/reference/rpc/google.apps.card.v1#loadindicator) for all actions, as this locks the UI to ensure no changes are made by the user while the action is being processed.
     */
    persistValues?: boolean | null;
  }
  /**
   * List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze 1 day, snooze next week. You might use action method = snooze(), passing the snooze type and snooze time in the list of string parameters.
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
   * Represents the complete border style applied to widgets.
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
   * A button. Can be a text button or an image button.
   */
  export interface Schema$GoogleAppsCardV1Button {
    /**
     * The alternative text used for accessibility. Has no effect when an icon is set; use `icon.alt_text` instead.
     */
    altText?: string | null;
    /**
     * If set, the button is filled with a solid background.
     */
    color?: Schema$Color;
    /**
     * If true, the button is displayed in a disabled state and doesn't respond to user actions.
     */
    disabled?: boolean | null;
    /**
     * The icon image.
     */
    icon?: Schema$GoogleAppsCardV1Icon;
    /**
     * The action to perform when the button is clicked.
     */
    onClick?: Schema$GoogleAppsCardV1OnClick;
    /**
     * The text of the button.
     */
    text?: string | null;
  }
  /**
   * A list of buttons layed out horizontally.
   */
  export interface Schema$GoogleAppsCardV1ButtonList {
    buttons?: Schema$GoogleAppsCardV1Button[];
  }
  /**
   * A card is a UI element that can contain UI widgets such as text and images. For more information, see Cards . For example, the following JSON creates a card that has a header with the name, position, icons, and link for a contact, followed by a section with contact information like email and phone number. ``` { "header": { "title": "Heba Salam", "subtitle": "Software Engineer", "imageStyle": "ImageStyle.AVATAR", "imageUrl": "https://example.com/heba_salam.png", "imageAltText": "Avatar for Heba Salam" \}, "sections" : [ { "header": "Contact Info", "widgets": [ { "decorated_text": { "icon": { "knownIcon": "EMAIL" \}, "content": "heba.salam@example.com" \} \}, { "decoratedText": { "icon": { "knownIcon": "PERSON" \}, "content": "Online" \} \}, { "decoratedText": { "icon": { "knownIcon": "PHONE" \}, "content": "+1 (555) 555-1234" \} \}, { "buttons": [ { "textButton": { "text": "Share", \}, "onClick": { "openLink": { "url": "https://example.com/share" \} \} \}, { "textButton": { "text": "Edit", \}, "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT" \} ], "loadIndicator": "LoadIndicator.SPINNER" \} \} \} ] \} ], "collapsible": true, "uncollapsibleWidgetsCount": 3 \} ], "cardActions": [ { "actionLabel": "Send Feedback", "onClick": { "openLink": { "url": "https://example.com/feedback" \} \} \} ], "name": "contact-card-K3wB6arF2H9L" \} ```
   */
  export interface Schema$GoogleAppsCardV1Card {
    /**
     * The actions of this card. They are added to a card's generated toolbar menu. For example, the following JSON constructs a card action menu with Settings and Send Feedback options: ``` "card_actions": [ { "actionLabel": "Setting", "onClick": { "action": { "functionName": "goToView", "parameters": [ { "key": "viewType", "value": "SETTING" \} ], "loadIndicator": "LoadIndicator.SPINNER" \} \} \}, { "actionLabel": "Send Feedback", "onClick": { "openLink": { "url": "https://example.com/feedback" \} \} \} ] ```
     */
    cardActions?: Schema$GoogleAppsCardV1CardAction[];
    /**
     * The display style for peekCardHeader.
     */
    displayStyle?: string | null;
    /**
     * The fixed footer shown at the bottom of this card.
     */
    fixedFooter?: Schema$GoogleAppsCardV1CardFixedFooter;
    /**
     * The header of the card. A header usually contains a title and an image.
     */
    header?: Schema$GoogleAppsCardV1CardHeader;
    /**
     * Name of the card, which is used as a identifier for the card in card navigation.
     */
    name?: string | null;
    /**
     * When displaying contextual content, the peek card header acts as a placeholder so that the user can navigate forward between the homepage cards and the contextual cards.
     */
    peekCardHeader?: Schema$GoogleAppsCardV1CardHeader;
    /**
     * Sections are separated by a line divider.
     */
    sections?: Schema$GoogleAppsCardV1Section[];
  }
  /**
   * A card action is the action associated with the card. For example, an invoice card might include actions such as delete invoice, email invoice, or open the invoice in a browser.
   */
  export interface Schema$GoogleAppsCardV1CardAction {
    /**
     * The label that displays as the action menu item.
     */
    actionLabel?: string | null;
    /**
     * The onclick action for this action item.
     */
    onClick?: Schema$GoogleAppsCardV1OnClick;
  }
  /**
   * A persistent (sticky) footer that is added to the bottom of the card.
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
  export interface Schema$GoogleAppsCardV1CardHeader {
    /**
     * The alternative text of this image which is used for accessibility.
     */
    imageAltText?: string | null;
    /**
     * The image's type.
     */
    imageType?: string | null;
    /**
     * The URL of the image in the card header.
     */
    imageUrl?: string | null;
    /**
     * The subtitle of the card header.
     */
    subtitle?: string | null;
    /**
     * The title of the card header. The title must be specified. The header has a fixed height: if both a title and subtitle are specified, each takes up one line. If only the title is specified, it takes up both lines.
     */
    title?: string | null;
  }
  /**
   * The widget that lets users to specify a date and time.
   */
  export interface Schema$GoogleAppsCardV1DateTimePicker {
    /**
     * The label for the field that displays to the user.
     */
    label?: string | null;
    /**
     * The name of the text input that's used in formInput, and uniquely identifies this input.
     */
    name?: string | null;
    /**
     * Triggered when the user clicks Save or Clear from the date/time picker dialog. This is only triggered if the value changed as a result of the Save/Clear operation.
     */
    onChangeAction?: Schema$GoogleAppsCardV1Action;
    /**
     * The number representing the time zone offset from UTC, in minutes. If set, the `value_ms_epoch` is displayed in the specified time zone. If not set, it uses the user's time zone setting on the client side.
     */
    timezoneOffsetDate?: number | null;
    /**
     * The type of the date/time picker.
     */
    type?: string | null;
    /**
     * The value to display as the default value before user input or previous user input. It is represented in milliseconds (Epoch time). For `DATE_AND_TIME` type, the full epoch value is used. For `DATE_ONLY` type, only date of the epoch time is used. For `TIME_ONLY` type, only time of the epoch time is used. For example, you can set epoch time to `3 * 60 * 60 * 1000` to represent 3am.
     */
    valueMsEpoch?: string | null;
  }
  /**
   * A widget that displays text with optional decorations such as a label above or below the text, an icon in front of the text, a selection widget or a button after the text.
   */
  export interface Schema$GoogleAppsCardV1DecoratedText {
    /**
     * The formatted text label that shows below the main text.
     */
    bottomLabel?: string | null;
    /**
     * A button that can be clicked to trigger an action.
     */
    button?: Schema$GoogleAppsCardV1Button;
    /**
     * An icon displayed after the text.
     */
    endIcon?: Schema$GoogleAppsCardV1Icon;
    /**
     * Deprecated in favor of start_icon.
     */
    icon?: Schema$GoogleAppsCardV1Icon;
    /**
     * Only the top and bottom label and content region are clickable.
     */
    onClick?: Schema$GoogleAppsCardV1OnClick;
    /**
     * The icon displayed in front of the text.
     */
    startIcon?: Schema$GoogleAppsCardV1Icon;
    /**
     * A switch widget can be clicked to change its state or trigger an action.
     */
    switchControl?: Schema$GoogleAppsCardV1SwitchControl;
    /**
     * Required. The main widget formatted text. See Text formatting for details.
     */
    text?: string | null;
    /**
     * The formatted text label that shows above the main text.
     */
    topLabel?: string | null;
    /**
     * The wrap text setting. If `true`, the text is wrapped and displayed in multiline. Otherwise, the text is truncated.
     */
    wrapText?: boolean | null;
  }
  /**
   * A divider that appears in between widgets.
   */
  export interface Schema$GoogleAppsCardV1Divider {}
  /**
   * Represents a Grid widget that displays items in a configurable grid layout.
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
     * The horizontal alignment of the grid item's text.
     */
    textAlignment?: string | null;
    /**
     * The grid item's title.
     */
    title?: string | null;
  }
  export interface Schema$GoogleAppsCardV1Icon {
    /**
     * The description of the icon, used for accessibility. The default value is provided if you don't specify one.
     */
    altText?: string | null;
    /**
     * The icon specified by a URL.
     */
    iconUrl?: string | null;
    /**
     * The crop style applied to the image. In some cases, applying a `CIRCLE` crop causes the image to be drawn larger than a standard icon.
     */
    imageType?: string | null;
    /**
     * The icon specified by the string name of a list of known icons
     */
    knownIcon?: string | null;
  }
  /**
   * An image that is specified by a URL and can have an onClick action.
   */
  export interface Schema$GoogleAppsCardV1Image {
    /**
     * The alternative text of this image, used for accessibility.
     */
    altText?: string | null;
    /**
     * An image URL.
     */
    imageUrl?: string | null;
    onClick?: Schema$GoogleAppsCardV1OnClick;
  }
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
   * Represents the crop style applied to an image.
   */
  export interface Schema$GoogleAppsCardV1ImageCropStyle {
    /**
     * The aspect ratio to use if the crop type is `RECTANGLE_CUSTOM`.
     */
    aspectRatio?: number | null;
    /**
     * The crop type.
     */
    type?: string | null;
  }
  export interface Schema$GoogleAppsCardV1OnClick {
    /**
     * If specified, an action is triggered by this onClick.
     */
    action?: Schema$GoogleAppsCardV1Action;
    /**
     * A new card is pushed to the card stack after clicking if specified.
     */
    card?: Schema$GoogleAppsCardV1Card;
    /**
     * An add-on triggers this action when the action needs to open a link. This differs from the open_link above in that this needs to talk to server to get the link. Thus some preparation work is required for web client to do before the open link action response comes back.
     */
    openDynamicLinkAction?: Schema$GoogleAppsCardV1Action;
    /**
     * If specified, this onClick triggers an open link action.
     */
    openLink?: Schema$GoogleAppsCardV1OpenLink;
  }
  export interface Schema$GoogleAppsCardV1OpenLink {
    onClose?: string | null;
    openAs?: string | null;
    /**
     * The URL to open.
     */
    url?: string | null;
  }
  /**
   * A section contains a collection of widgets that are rendered vertically in the order that they are specified. Across all platforms, cards have a narrow fixed width, so there is currently no need for layout properties, for example, float.
   */
  export interface Schema$GoogleAppsCardV1Section {
    /**
     * Indicates whether this section is collapsible. If a section is collapsible, the description must be given.
     */
    collapsible?: boolean | null;
    /**
     * The header of the section. Formatted text is supported.
     */
    header?: string | null;
    /**
     * The number of uncollapsible widgets. For example, when a section contains five widgets and the `numUncollapsibleWidget` is set to `2`, the first two widgets are always shown and the last three are collapsed as default. The `numUncollapsibleWidget` is taken into account only when collapsible is set to `true`.
     */
    uncollapsibleWidgetsCount?: number | null;
    /**
     * A section must contain at least 1 widget.
     */
    widgets?: Schema$GoogleAppsCardV1Widget[];
  }
  /**
   * A widget that creates a UI item (for example, a drop-down list) with options for users to select.
   */
  export interface Schema$GoogleAppsCardV1SelectionInput {
    items?: Schema$GoogleAppsCardV1SelectionItem[];
    /**
     * The label displayed ahead of the switch control.
     */
    label?: string | null;
    /**
     * The name of the text input which is used in formInput.
     */
    name?: string | null;
    /**
     * If specified, the form is submitted when the selection changes. If not specified, you must specify a separate button.
     */
    onChangeAction?: Schema$GoogleAppsCardV1Action;
    type?: string | null;
  }
  /**
   * The item in the switch control. A radio button, at most one of the items is selected.
   */
  export interface Schema$GoogleAppsCardV1SelectionItem {
    /**
     * If more than one item is selected for `RADIO_BUTTON` and `DROPDOWN`, the first selected item is treated as selected and the ones after are ignored.
     */
    selected?: boolean | null;
    /**
     * The text to be displayed.
     */
    text?: string | null;
    /**
     * The value associated with this item. The client should use this as a form input value.
     */
    value?: string | null;
  }
  /**
   * A suggestion item. Only supports text for now.
   */
  export interface Schema$GoogleAppsCardV1SuggestionItem {
    text?: string | null;
  }
  /**
   * A container wrapping elements necessary for showing suggestion items used in text input autocomplete.
   */
  export interface Schema$GoogleAppsCardV1Suggestions {
    /**
     * A list of suggestions items which will be used in are used in autocomplete.
     */
    items?: Schema$GoogleAppsCardV1SuggestionItem[];
  }
  export interface Schema$GoogleAppsCardV1SwitchControl {
    /**
     * The control type, either switch or checkbox.
     */
    controlType?: string | null;
    /**
     * The name of the switch widget that's used in formInput.
     */
    name?: string | null;
    /**
     * The action when the switch state is changed.
     */
    onChangeAction?: Schema$GoogleAppsCardV1Action;
    /**
     * If the switch is selected.
     */
    selected?: boolean | null;
    /**
     * The value is what is passed back in the callback.
     */
    value?: string | null;
  }
  /**
   * A text input is a UI item where users can input text. A text input can also have an onChange action and suggestions.
   */
  export interface Schema$GoogleAppsCardV1TextInput {
    /**
     * The refresh function that returns suggestions based on the user's input text. If the callback is not specified, autocomplete is done in client side based on the initial suggestion items.
     */
    autoCompleteAction?: Schema$GoogleAppsCardV1Action;
    /**
     * The hint text.
     */
    hintText?: string | null;
    /**
     * The initial suggestions made before any user input.
     */
    initialSuggestions?: Schema$GoogleAppsCardV1Suggestions;
    /**
     * At least one of label and hintText must be specified.
     */
    label?: string | null;
    /**
     * The name of the text input which is used in formInput.
     */
    name?: string | null;
    /**
     * The onChange action, for example, invoke a function.
     */
    onChangeAction?: Schema$GoogleAppsCardV1Action;
    /**
     * The style of the text, for example, a single line or multiple lines.
     */
    type?: string | null;
    /**
     * The default value when there is no input from the user.
     */
    value?: string | null;
  }
  /**
   * A paragraph of text that supports formatting. See [Text formatting](workspace/add-ons/concepts/widgets#text_formatting") for details.
   */
  export interface Schema$GoogleAppsCardV1TextParagraph {
    /**
     * The text that's shown in the widget.
     */
    text?: string | null;
  }
  /**
   * A widget is a UI element that presents texts, images, etc.
   */
  export interface Schema$GoogleAppsCardV1Widget {
    /**
     * A list of buttons. For example, the following JSON creates two buttons. The first is a filled text button and the second is an image button that opens a link: ``` "buttonList": { "buttons": [ "button": { "text": "Edit", "Color": { "Red": 255 "Green": 255 "Blue": 255 \} "disabled": true \}, "button": { "icon": { "knownIcon": "INVITE" "altText": "check calendar" \}, "onClick": { "openLink": { "url": "https://example.com/calendar" \} \} \}, ] \} ```
     */
    buttonList?: Schema$GoogleAppsCardV1ButtonList;
    /**
     * Displays a selection/input widget for date/time. For example, the following JSON creates a date/time picker for an appointment time: ``` "date_time_picker": { "name": "appointment_time", "label": "Book your appointment at:", "type": "DateTimePickerType.DATE_AND_TIME", "valueMsEpoch": "796435200000" \} ```
     */
    dateTimePicker?: Schema$GoogleAppsCardV1DateTimePicker;
    /**
     * Displays a decorated text item in this widget. For example, the following JSON creates a decorated text widget showing email address: ``` "decoratedText": { "icon": { "knownIcon": "EMAIL" \}, "topLabel": "Email Address", "content": "heba.salam@example.com", "bottomLabel": "This is a new Email address!", "switchWidget": { "name": "has_send_welcome_email_to_heba_salam", "selected": false, "controlType": "ControlType.CHECKBOX" \} \} ```
     */
    decoratedText?: Schema$GoogleAppsCardV1DecoratedText;
    /**
     * Displays a divider. For example, the following JSON creates a divider: ``` "divider": { \} ```
     */
    divider?: Schema$GoogleAppsCardV1Divider;
    /**
     * Displays a grid with a collection of items. For example, the following JSON creates a 2 column grid with a single item: ``` "grid": { "title": "A fine collection of items", "numColumns": 2, "borderStyle": { "type": "STROKE", "cornerRadius": 4.0 \}, "items": [ "image": { "imageUri": "https://www.example.com/image.png", "cropStyle": { "type": "SQUARE" \}, "borderStyle": { "type": "STROKE" \} \}, "title": "An item", "textAlignment": "CENTER" ], "onClick": { "openLink": { "url":"https://www.example.com" \} \} \} ```
     */
    grid?: Schema$GoogleAppsCardV1Grid;
    /**
     * The horizontal alignment of this widget.
     */
    horizontalAlignment?: string | null;
    /**
     * Displays an image in this widget. For example, the following JSON creates an image with alternative text: ``` "image": { "imageUrl": "https://example.com/heba_salam.png" "altText": "Avatar for Heba Salam" \} ```
     */
    image?: Schema$GoogleAppsCardV1Image;
    /**
     * Displays a switch control in this widget. For example, the following JSON creates a dropdown selection for size: ``` "switchControl": { "name": "size", "label": "Size" "type": "SelectionType.DROPDOWN", "items": [ { "text": "S", "value": "small", "selected": false \}, { "text": "M", "value": "medium", "selected": true \}, { "text": "L", "value": "large", "selected": false \}, { "text": "XL", "value": "extra_large", "selected": false \} ] \} ```
     */
    selectionInput?: Schema$GoogleAppsCardV1SelectionInput;
    /**
     * Displays a text input in this widget. For example, the following JSON creates a text input for mail address: ``` "textInput": { "name": "mailing_address", "label": "Mailing Address" \} ``` As another example, the following JSON creates a text input for programming language with static suggestions: ``` "textInput": { "name": "preferred_programing_language", "label": "Preferred Language", "initialSuggestions": { "items": [ { "text": "C++" \}, { "text": "Java" \}, { "text": "JavaScript" \}, { "text": "Python" \} ] \} \} ```
     */
    textInput?: Schema$GoogleAppsCardV1TextInput;
    /**
     * Displays a text paragraph in this widget. For example, the following JSON creates a bolded text: ``` "textParagraph": { "text": " *bold text*" \} ```
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
   * The inputs with widgets.
   */
  export interface Schema$Inputs {
    dateInput?: Schema$DateInput;
    dateTimeInput?: Schema$DateTimeInput;
    stringInputs?: Schema$StringInputs;
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
     * Continuation token to retrieve the next page of results. It will be empty for the last page of results.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$ListSpacesResponse {
    /**
     * Continuation token to retrieve the next page of results. It will be empty for the last page of results. Tokens expire in an hour. An error is thrown if an expired token is passed.
     */
    nextPageToken?: string | null;
    /**
     * List of spaces in the requested (or first) page.
     */
    spaces?: Schema$Space[];
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
   * Represents a membership relation in Google Chat.
   */
  export interface Schema$Membership {
    /**
     * The creation time of the membership a.k.a the time at which the member joined the space, if applicable.
     */
    createTime?: string | null;
    /**
     * A user in Google Chat.
     */
    member?: Schema$User;
    name?: string | null;
    /**
     * State of the membership.
     */
    state?: string | null;
  }
  /**
   * A message in Google Chat.
   */
  export interface Schema$Message {
    /**
     * Input only. Parameters that a bot can use to configure how its response is posted.
     */
    actionResponse?: Schema$ActionResponse;
    /**
     * Output only. Annotations associated with the text in this message.
     */
    annotations?: Schema$Annotation[];
    /**
     * Plain-text body of the message with all bot mentions stripped out.
     */
    argumentText?: string | null;
    /**
     * User uploaded attachment.
     */
    attachment?: Schema$Attachment[];
    /**
     * Rich, formatted and interactive cards that can be used to display UI elements such as: formatted texts, buttons, clickable images. Cards are normally displayed below the plain-text body of the message.
     */
    cards?: Schema$Card[];
    /**
     * Output only. The time at which the message was created in Google Chat server.
     */
    createTime?: string | null;
    /**
     * A plain-text description of the message's cards, used when the actual cards cannot be displayed (e.g. mobile notifications).
     */
    fallbackText?: string | null;
    /**
     * Output only. The time at which the message was last updated in Google Chat server. If the message was never updated, this field will be same as create_time.
     */
    lastUpdateTime?: string | null;
    name?: string | null;
    /**
     * Text for generating preview chips. This text will not be displayed to the user, but any links to images, web pages, videos, etc. included here will generate preview chips.
     */
    previewText?: string | null;
    /**
     * The user who created the message.
     */
    sender?: Schema$User;
    /**
     * Slash command information, if applicable.
     */
    slashCommand?: Schema$SlashCommand;
    /**
     * The space the message belongs to.
     */
    space?: Schema$Space;
    /**
     * Plain-text body of the message.
     */
    text?: string | null;
    /**
     * The thread the message belongs to.
     */
    thread?: Schema$Thread;
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
   * A Slash Command in Chat.
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
     * The bot whose command was invoked.
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
   * A space in Google Chat. Spaces are conversations between two or more users or 1:1 messages between a user and a Chat bot.
   */
  export interface Schema$Space {
    /**
     * Output only. The display name (only if the space is of type `ROOM`). Please note that this field might not be populated in direct messages between humans.
     */
    displayName?: string | null;
    /**
     * Resource name of the space, in the form "spaces/x". Example: spaces/AAAAMpdlehYs
     */
    name?: string | null;
    /**
     * Whether the space is a DM between a bot and a single human.
     */
    singleUserBotDm?: boolean | null;
    /**
     * Whether the messages are threaded in this space.
     */
    threaded?: boolean | null;
    /**
     * Output only. The type of a space. This is deprecated. Use `single_user_bot_dm` instead.
     */
    type?: string | null;
  }
  /**
   * Input parameter for regular widgets. For single-valued widgets, it will be a single value list; for multi-valued widgets, such as checkbox, all the values are presented.
   */
  export interface Schema$StringInputs {
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
     * Resource name, in the form "spaces/x/threads/x". Example: spaces/AAAAMpdlehY/threads/UMxbHmzDlr4
     */
    name?: string | null;
  }
  /**
   * Input Parameter for Time Picker widget.
   */
  export interface Schema$TimeInput {
    hours?: number | null;
    minutes?: number | null;
  }
  /**
   * The timezone id and offset. The id is the tz database time zones such as "America/Toronto". The user timezone offset, in milliseconds, from Coordinated Universal Time (UTC).
   */
  export interface Schema$TimeZone {
    id?: string | null;
    offset?: number | null;
  }
  /**
   * A user in Google Chat.
   */
  export interface Schema$User {
    /**
     * The user's display name.
     */
    displayName?: string | null;
    /**
     * Obfuscated domain information.
     */
    domainId?: string | null;
    /**
     * True when the user is deleted or the user's profile is not visible.
     */
    isAnonymous?: boolean | null;
    /**
     * Resource name, in the format "users/x".
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

  export class Resource$Dms {
    context: APIRequestContext;
    conversations: Resource$Dms$Conversations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.conversations = new Resource$Dms$Conversations(this.context);
    }

    /**
     * Legacy path for creating message. Calling these will result in a BadRequest response.
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
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chat.dms.messages({
     *     // Required. Space resource name, in the form "spaces/x". Example: spaces/AAAAMpdlehY
     *     parent: 'dms/my-dm',
     *     // Optional. Opaque thread identifier string that can be specified to group messages into a single thread. If this is the first message with a given thread identifier, a new thread is created. Subsequent messages with the same thread identifier will be posted into the same thread. This relieves bots and webhooks from having to store the Google Chat thread ID of a thread (created earlier by them) to post further updates to it. Has no effect if thread field, corresponding to an existing thread, is set in message.
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
     *       //   "createTime": "my_createTime",
     *       //   "fallbackText": "my_fallbackText",
     *       //   "lastUpdateTime": "my_lastUpdateTime",
     *       //   "name": "my_name",
     *       //   "previewText": "my_previewText",
     *       //   "sender": {},
     *       //   "slashCommand": {},
     *       //   "space": {},
     *       //   "text": "my_text",
     *       //   "thread": {}
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
     *   //   "createTime": "my_createTime",
     *   //   "fallbackText": "my_fallbackText",
     *   //   "lastUpdateTime": "my_lastUpdateTime",
     *   //   "name": "my_name",
     *   //   "previewText": "my_previewText",
     *   //   "sender": {},
     *   //   "slashCommand": {},
     *   //   "space": {},
     *   //   "text": "my_text",
     *   //   "thread": {}
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
    messages(
      params: Params$Resource$Dms$Messages,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    messages(
      params?: Params$Resource$Dms$Messages,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
    messages(
      params: Params$Resource$Dms$Messages,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    messages(
      params: Params$Resource$Dms$Messages,
      options: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    messages(
      params: Params$Resource$Dms$Messages,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    messages(callback: BodyResponseCallback<Schema$Message>): void;
    messages(
      paramsOrCallback?:
        | Params$Resource$Dms$Messages
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
      let params = (paramsOrCallback || {}) as Params$Resource$Dms$Messages;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Dms$Messages;
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
     * Legacy path for creating message. Calling these will result in a BadRequest response.
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
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chat.dms.webhooks({
     *     // Required. Space resource name, in the form "spaces/x". Example: spaces/AAAAMpdlehY
     *     parent: 'dms/my-dm',
     *     // Optional. Opaque thread identifier string that can be specified to group messages into a single thread. If this is the first message with a given thread identifier, a new thread is created. Subsequent messages with the same thread identifier will be posted into the same thread. This relieves bots and webhooks from having to store the Google Chat thread ID of a thread (created earlier by them) to post further updates to it. Has no effect if thread field, corresponding to an existing thread, is set in message.
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
     *       //   "createTime": "my_createTime",
     *       //   "fallbackText": "my_fallbackText",
     *       //   "lastUpdateTime": "my_lastUpdateTime",
     *       //   "name": "my_name",
     *       //   "previewText": "my_previewText",
     *       //   "sender": {},
     *       //   "slashCommand": {},
     *       //   "space": {},
     *       //   "text": "my_text",
     *       //   "thread": {}
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
     *   //   "createTime": "my_createTime",
     *   //   "fallbackText": "my_fallbackText",
     *   //   "lastUpdateTime": "my_lastUpdateTime",
     *   //   "name": "my_name",
     *   //   "previewText": "my_previewText",
     *   //   "sender": {},
     *   //   "slashCommand": {},
     *   //   "space": {},
     *   //   "text": "my_text",
     *   //   "thread": {}
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
    webhooks(
      params: Params$Resource$Dms$Webhooks,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    webhooks(
      params?: Params$Resource$Dms$Webhooks,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
    webhooks(
      params: Params$Resource$Dms$Webhooks,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    webhooks(
      params: Params$Resource$Dms$Webhooks,
      options: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    webhooks(
      params: Params$Resource$Dms$Webhooks,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    webhooks(callback: BodyResponseCallback<Schema$Message>): void;
    webhooks(
      paramsOrCallback?:
        | Params$Resource$Dms$Webhooks
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
      let params = (paramsOrCallback || {}) as Params$Resource$Dms$Webhooks;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Dms$Webhooks;
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
            url: (rootUrl + '/v1/{+parent}/webhooks').replace(
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
  }

  export interface Params$Resource$Dms$Messages extends StandardParameters {
    /**
     * Required. Space resource name, in the form "spaces/x". Example: spaces/AAAAMpdlehY
     */
    parent?: string;
    /**
     * Optional. Opaque thread identifier string that can be specified to group messages into a single thread. If this is the first message with a given thread identifier, a new thread is created. Subsequent messages with the same thread identifier will be posted into the same thread. This relieves bots and webhooks from having to store the Google Chat thread ID of a thread (created earlier by them) to post further updates to it. Has no effect if thread field, corresponding to an existing thread, is set in message.
     */
    threadKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Message;
  }
  export interface Params$Resource$Dms$Webhooks extends StandardParameters {
    /**
     * Required. Space resource name, in the form "spaces/x". Example: spaces/AAAAMpdlehY
     */
    parent?: string;
    /**
     * Optional. Opaque thread identifier string that can be specified to group messages into a single thread. If this is the first message with a given thread identifier, a new thread is created. Subsequent messages with the same thread identifier will be posted into the same thread. This relieves bots and webhooks from having to store the Google Chat thread ID of a thread (created earlier by them) to post further updates to it. Has no effect if thread field, corresponding to an existing thread, is set in message.
     */
    threadKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Message;
  }

  export class Resource$Dms$Conversations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Legacy path for creating message. Calling these will result in a BadRequest response.
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
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chat.dms.conversations.messages({
     *     // Required. Space resource name, in the form "spaces/x". Example: spaces/AAAAMpdlehY
     *     parent: 'dms/my-dm/conversations/my-conversation',
     *     // Optional. Opaque thread identifier string that can be specified to group messages into a single thread. If this is the first message with a given thread identifier, a new thread is created. Subsequent messages with the same thread identifier will be posted into the same thread. This relieves bots and webhooks from having to store the Google Chat thread ID of a thread (created earlier by them) to post further updates to it. Has no effect if thread field, corresponding to an existing thread, is set in message.
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
     *       //   "createTime": "my_createTime",
     *       //   "fallbackText": "my_fallbackText",
     *       //   "lastUpdateTime": "my_lastUpdateTime",
     *       //   "name": "my_name",
     *       //   "previewText": "my_previewText",
     *       //   "sender": {},
     *       //   "slashCommand": {},
     *       //   "space": {},
     *       //   "text": "my_text",
     *       //   "thread": {}
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
     *   //   "createTime": "my_createTime",
     *   //   "fallbackText": "my_fallbackText",
     *   //   "lastUpdateTime": "my_lastUpdateTime",
     *   //   "name": "my_name",
     *   //   "previewText": "my_previewText",
     *   //   "sender": {},
     *   //   "slashCommand": {},
     *   //   "space": {},
     *   //   "text": "my_text",
     *   //   "thread": {}
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
    messages(
      params: Params$Resource$Dms$Conversations$Messages,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    messages(
      params?: Params$Resource$Dms$Conversations$Messages,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
    messages(
      params: Params$Resource$Dms$Conversations$Messages,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    messages(
      params: Params$Resource$Dms$Conversations$Messages,
      options: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    messages(
      params: Params$Resource$Dms$Conversations$Messages,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    messages(callback: BodyResponseCallback<Schema$Message>): void;
    messages(
      paramsOrCallback?:
        | Params$Resource$Dms$Conversations$Messages
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
        {}) as Params$Resource$Dms$Conversations$Messages;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Dms$Conversations$Messages;
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
  }

  export interface Params$Resource$Dms$Conversations$Messages
    extends StandardParameters {
    /**
     * Required. Space resource name, in the form "spaces/x". Example: spaces/AAAAMpdlehY
     */
    parent?: string;
    /**
     * Optional. Opaque thread identifier string that can be specified to group messages into a single thread. If this is the first message with a given thread identifier, a new thread is created. Subsequent messages with the same thread identifier will be posted into the same thread. This relieves bots and webhooks from having to store the Google Chat thread ID of a thread (created earlier by them) to post further updates to it. Has no effect if thread field, corresponding to an existing thread, is set in message.
     */
    threadKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Message;
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
     *     scopes: [],
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

  export class Resource$Rooms {
    context: APIRequestContext;
    conversations: Resource$Rooms$Conversations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.conversations = new Resource$Rooms$Conversations(this.context);
    }

    /**
     * Legacy path for creating message. Calling these will result in a BadRequest response.
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
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chat.rooms.messages({
     *     // Required. Space resource name, in the form "spaces/x". Example: spaces/AAAAMpdlehY
     *     parent: 'rooms/my-room',
     *     // Optional. Opaque thread identifier string that can be specified to group messages into a single thread. If this is the first message with a given thread identifier, a new thread is created. Subsequent messages with the same thread identifier will be posted into the same thread. This relieves bots and webhooks from having to store the Google Chat thread ID of a thread (created earlier by them) to post further updates to it. Has no effect if thread field, corresponding to an existing thread, is set in message.
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
     *       //   "createTime": "my_createTime",
     *       //   "fallbackText": "my_fallbackText",
     *       //   "lastUpdateTime": "my_lastUpdateTime",
     *       //   "name": "my_name",
     *       //   "previewText": "my_previewText",
     *       //   "sender": {},
     *       //   "slashCommand": {},
     *       //   "space": {},
     *       //   "text": "my_text",
     *       //   "thread": {}
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
     *   //   "createTime": "my_createTime",
     *   //   "fallbackText": "my_fallbackText",
     *   //   "lastUpdateTime": "my_lastUpdateTime",
     *   //   "name": "my_name",
     *   //   "previewText": "my_previewText",
     *   //   "sender": {},
     *   //   "slashCommand": {},
     *   //   "space": {},
     *   //   "text": "my_text",
     *   //   "thread": {}
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
    messages(
      params: Params$Resource$Rooms$Messages,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    messages(
      params?: Params$Resource$Rooms$Messages,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
    messages(
      params: Params$Resource$Rooms$Messages,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    messages(
      params: Params$Resource$Rooms$Messages,
      options: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    messages(
      params: Params$Resource$Rooms$Messages,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    messages(callback: BodyResponseCallback<Schema$Message>): void;
    messages(
      paramsOrCallback?:
        | Params$Resource$Rooms$Messages
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
      let params = (paramsOrCallback || {}) as Params$Resource$Rooms$Messages;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Rooms$Messages;
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
     * Legacy path for creating message. Calling these will result in a BadRequest response.
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
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chat.rooms.webhooks({
     *     // Required. Space resource name, in the form "spaces/x". Example: spaces/AAAAMpdlehY
     *     parent: 'rooms/my-room',
     *     // Optional. Opaque thread identifier string that can be specified to group messages into a single thread. If this is the first message with a given thread identifier, a new thread is created. Subsequent messages with the same thread identifier will be posted into the same thread. This relieves bots and webhooks from having to store the Google Chat thread ID of a thread (created earlier by them) to post further updates to it. Has no effect if thread field, corresponding to an existing thread, is set in message.
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
     *       //   "createTime": "my_createTime",
     *       //   "fallbackText": "my_fallbackText",
     *       //   "lastUpdateTime": "my_lastUpdateTime",
     *       //   "name": "my_name",
     *       //   "previewText": "my_previewText",
     *       //   "sender": {},
     *       //   "slashCommand": {},
     *       //   "space": {},
     *       //   "text": "my_text",
     *       //   "thread": {}
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
     *   //   "createTime": "my_createTime",
     *   //   "fallbackText": "my_fallbackText",
     *   //   "lastUpdateTime": "my_lastUpdateTime",
     *   //   "name": "my_name",
     *   //   "previewText": "my_previewText",
     *   //   "sender": {},
     *   //   "slashCommand": {},
     *   //   "space": {},
     *   //   "text": "my_text",
     *   //   "thread": {}
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
    webhooks(
      params: Params$Resource$Rooms$Webhooks,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    webhooks(
      params?: Params$Resource$Rooms$Webhooks,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
    webhooks(
      params: Params$Resource$Rooms$Webhooks,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    webhooks(
      params: Params$Resource$Rooms$Webhooks,
      options: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    webhooks(
      params: Params$Resource$Rooms$Webhooks,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    webhooks(callback: BodyResponseCallback<Schema$Message>): void;
    webhooks(
      paramsOrCallback?:
        | Params$Resource$Rooms$Webhooks
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
      let params = (paramsOrCallback || {}) as Params$Resource$Rooms$Webhooks;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Rooms$Webhooks;
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
            url: (rootUrl + '/v1/{+parent}/webhooks').replace(
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
  }

  export interface Params$Resource$Rooms$Messages extends StandardParameters {
    /**
     * Required. Space resource name, in the form "spaces/x". Example: spaces/AAAAMpdlehY
     */
    parent?: string;
    /**
     * Optional. Opaque thread identifier string that can be specified to group messages into a single thread. If this is the first message with a given thread identifier, a new thread is created. Subsequent messages with the same thread identifier will be posted into the same thread. This relieves bots and webhooks from having to store the Google Chat thread ID of a thread (created earlier by them) to post further updates to it. Has no effect if thread field, corresponding to an existing thread, is set in message.
     */
    threadKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Message;
  }
  export interface Params$Resource$Rooms$Webhooks extends StandardParameters {
    /**
     * Required. Space resource name, in the form "spaces/x". Example: spaces/AAAAMpdlehY
     */
    parent?: string;
    /**
     * Optional. Opaque thread identifier string that can be specified to group messages into a single thread. If this is the first message with a given thread identifier, a new thread is created. Subsequent messages with the same thread identifier will be posted into the same thread. This relieves bots and webhooks from having to store the Google Chat thread ID of a thread (created earlier by them) to post further updates to it. Has no effect if thread field, corresponding to an existing thread, is set in message.
     */
    threadKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Message;
  }

  export class Resource$Rooms$Conversations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Legacy path for creating message. Calling these will result in a BadRequest response.
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
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chat.rooms.conversations.messages({
     *     // Required. Space resource name, in the form "spaces/x". Example: spaces/AAAAMpdlehY
     *     parent: 'rooms/my-room/conversations/my-conversation',
     *     // Optional. Opaque thread identifier string that can be specified to group messages into a single thread. If this is the first message with a given thread identifier, a new thread is created. Subsequent messages with the same thread identifier will be posted into the same thread. This relieves bots and webhooks from having to store the Google Chat thread ID of a thread (created earlier by them) to post further updates to it. Has no effect if thread field, corresponding to an existing thread, is set in message.
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
     *       //   "createTime": "my_createTime",
     *       //   "fallbackText": "my_fallbackText",
     *       //   "lastUpdateTime": "my_lastUpdateTime",
     *       //   "name": "my_name",
     *       //   "previewText": "my_previewText",
     *       //   "sender": {},
     *       //   "slashCommand": {},
     *       //   "space": {},
     *       //   "text": "my_text",
     *       //   "thread": {}
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
     *   //   "createTime": "my_createTime",
     *   //   "fallbackText": "my_fallbackText",
     *   //   "lastUpdateTime": "my_lastUpdateTime",
     *   //   "name": "my_name",
     *   //   "previewText": "my_previewText",
     *   //   "sender": {},
     *   //   "slashCommand": {},
     *   //   "space": {},
     *   //   "text": "my_text",
     *   //   "thread": {}
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
    messages(
      params: Params$Resource$Rooms$Conversations$Messages,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    messages(
      params?: Params$Resource$Rooms$Conversations$Messages,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
    messages(
      params: Params$Resource$Rooms$Conversations$Messages,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    messages(
      params: Params$Resource$Rooms$Conversations$Messages,
      options: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    messages(
      params: Params$Resource$Rooms$Conversations$Messages,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    messages(callback: BodyResponseCallback<Schema$Message>): void;
    messages(
      paramsOrCallback?:
        | Params$Resource$Rooms$Conversations$Messages
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
        {}) as Params$Resource$Rooms$Conversations$Messages;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Rooms$Conversations$Messages;
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
  }

  export interface Params$Resource$Rooms$Conversations$Messages
    extends StandardParameters {
    /**
     * Required. Space resource name, in the form "spaces/x". Example: spaces/AAAAMpdlehY
     */
    parent?: string;
    /**
     * Optional. Opaque thread identifier string that can be specified to group messages into a single thread. If this is the first message with a given thread identifier, a new thread is created. Subsequent messages with the same thread identifier will be posted into the same thread. This relieves bots and webhooks from having to store the Google Chat thread ID of a thread (created earlier by them) to post further updates to it. Has no effect if thread field, corresponding to an existing thread, is set in message.
     */
    threadKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Message;
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
     * Returns a space.
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
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chat.spaces.get({
     *     // Required. Resource name of the space, in the form "spaces/x". Example: spaces/AAAAMpdlehY
     *     name: 'spaces/my-space',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "singleUserBotDm": false,
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
     * Lists spaces the caller is a member of.
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
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chat.spaces.list({
     *     // Requested page size. The value is capped at 1000. Server may return fewer results than requested. If unspecified, server will default to 100.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results the server should return.
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

    /**
     * Legacy path for creating message. Calling these will result in a BadRequest response.
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
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chat.spaces.webhooks({
     *     // Required. Space resource name, in the form "spaces/x". Example: spaces/AAAAMpdlehY
     *     parent: 'spaces/my-space',
     *     // Optional. Opaque thread identifier string that can be specified to group messages into a single thread. If this is the first message with a given thread identifier, a new thread is created. Subsequent messages with the same thread identifier will be posted into the same thread. This relieves bots and webhooks from having to store the Google Chat thread ID of a thread (created earlier by them) to post further updates to it. Has no effect if thread field, corresponding to an existing thread, is set in message.
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
     *       //   "createTime": "my_createTime",
     *       //   "fallbackText": "my_fallbackText",
     *       //   "lastUpdateTime": "my_lastUpdateTime",
     *       //   "name": "my_name",
     *       //   "previewText": "my_previewText",
     *       //   "sender": {},
     *       //   "slashCommand": {},
     *       //   "space": {},
     *       //   "text": "my_text",
     *       //   "thread": {}
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
     *   //   "createTime": "my_createTime",
     *   //   "fallbackText": "my_fallbackText",
     *   //   "lastUpdateTime": "my_lastUpdateTime",
     *   //   "name": "my_name",
     *   //   "previewText": "my_previewText",
     *   //   "sender": {},
     *   //   "slashCommand": {},
     *   //   "space": {},
     *   //   "text": "my_text",
     *   //   "thread": {}
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
    webhooks(
      params: Params$Resource$Spaces$Webhooks,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    webhooks(
      params?: Params$Resource$Spaces$Webhooks,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
    webhooks(
      params: Params$Resource$Spaces$Webhooks,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    webhooks(
      params: Params$Resource$Spaces$Webhooks,
      options: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    webhooks(
      params: Params$Resource$Spaces$Webhooks,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    webhooks(callback: BodyResponseCallback<Schema$Message>): void;
    webhooks(
      paramsOrCallback?:
        | Params$Resource$Spaces$Webhooks
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
      let params = (paramsOrCallback || {}) as Params$Resource$Spaces$Webhooks;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spaces$Webhooks;
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
            url: (rootUrl + '/v1/{+parent}/webhooks').replace(
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
  }

  export interface Params$Resource$Spaces$Get extends StandardParameters {
    /**
     * Required. Resource name of the space, in the form "spaces/x". Example: spaces/AAAAMpdlehY
     */
    name?: string;
  }
  export interface Params$Resource$Spaces$List extends StandardParameters {
    /**
     * Requested page size. The value is capped at 1000. Server may return fewer results than requested. If unspecified, server will default to 100.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Spaces$Webhooks extends StandardParameters {
    /**
     * Required. Space resource name, in the form "spaces/x". Example: spaces/AAAAMpdlehY
     */
    parent?: string;
    /**
     * Optional. Opaque thread identifier string that can be specified to group messages into a single thread. If this is the first message with a given thread identifier, a new thread is created. Subsequent messages with the same thread identifier will be posted into the same thread. This relieves bots and webhooks from having to store the Google Chat thread ID of a thread (created earlier by them) to post further updates to it. Has no effect if thread field, corresponding to an existing thread, is set in message.
     */
    threadKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Message;
  }

  export class Resource$Spaces$Members {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns a membership.
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
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chat.spaces.members.get({
     *     // Required. Resource name of the membership to be retrieved, in the form "spaces/x/members/x". Example: spaces/AAAAMpdlehY/members/105115627578887013105
     *     name: 'spaces/my-space/members/my-member',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "member": {},
     *   //   "name": "my_name",
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
     * Lists human memberships in a space.
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
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chat.spaces.members.list({
     *     // Requested page size. The value is capped at 1000. Server may return fewer results than requested. If unspecified, server will default to 100.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results the server should return.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the space for which membership list is to be fetched, in the form "spaces/x". Example: spaces/AAAAMpdlehY
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
     * Required. Resource name of the membership to be retrieved, in the form "spaces/x/members/x". Example: spaces/AAAAMpdlehY/members/105115627578887013105
     */
    name?: string;
  }
  export interface Params$Resource$Spaces$Members$List
    extends StandardParameters {
    /**
     * Requested page size. The value is capped at 1000. Server may return fewer results than requested. If unspecified, server will default to 100.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the space for which membership list is to be fetched, in the form "spaces/x". Example: spaces/AAAAMpdlehY
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
     * Creates a message.
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
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chat.spaces.messages.create({
     *     // Required. Space resource name, in the form "spaces/x". Example: spaces/AAAAMpdlehY
     *     parent: 'spaces/my-space',
     *     // Optional. Opaque thread identifier string that can be specified to group messages into a single thread. If this is the first message with a given thread identifier, a new thread is created. Subsequent messages with the same thread identifier will be posted into the same thread. This relieves bots and webhooks from having to store the Google Chat thread ID of a thread (created earlier by them) to post further updates to it. Has no effect if thread field, corresponding to an existing thread, is set in message.
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
     *       //   "createTime": "my_createTime",
     *       //   "fallbackText": "my_fallbackText",
     *       //   "lastUpdateTime": "my_lastUpdateTime",
     *       //   "name": "my_name",
     *       //   "previewText": "my_previewText",
     *       //   "sender": {},
     *       //   "slashCommand": {},
     *       //   "space": {},
     *       //   "text": "my_text",
     *       //   "thread": {}
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
     *   //   "createTime": "my_createTime",
     *   //   "fallbackText": "my_fallbackText",
     *   //   "lastUpdateTime": "my_lastUpdateTime",
     *   //   "name": "my_name",
     *   //   "previewText": "my_previewText",
     *   //   "sender": {},
     *   //   "slashCommand": {},
     *   //   "space": {},
     *   //   "text": "my_text",
     *   //   "thread": {}
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
     * Deletes a message.
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
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chat.spaces.messages.delete({
     *     // Required. Resource name of the message to be deleted, in the form "spaces/x/messages/x" Example: spaces/AAAAMpdlehY/messages/UMxbHmzDlr4.UMxbHmzDlr4
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
     * Returns a message.
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
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chat.spaces.messages.get({
     *     // Required. Resource name of the message to be retrieved, in the form "spaces/x/messages/x". Example: spaces/AAAAMpdlehY/messages/UMxbHmzDlr4.UMxbHmzDlr4
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
     *   //   "createTime": "my_createTime",
     *   //   "fallbackText": "my_fallbackText",
     *   //   "lastUpdateTime": "my_lastUpdateTime",
     *   //   "name": "my_name",
     *   //   "previewText": "my_previewText",
     *   //   "sender": {},
     *   //   "slashCommand": {},
     *   //   "space": {},
     *   //   "text": "my_text",
     *   //   "thread": {}
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
     * Updates a message.
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
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chat.spaces.messages.update({
     *     name: 'spaces/my-space/messages/my-message',
     *     // Required. The field paths to be updated, comma separated if there are multiple. Currently supported field paths: * text * cards
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
     *       //   "createTime": "my_createTime",
     *       //   "fallbackText": "my_fallbackText",
     *       //   "lastUpdateTime": "my_lastUpdateTime",
     *       //   "name": "my_name",
     *       //   "previewText": "my_previewText",
     *       //   "sender": {},
     *       //   "slashCommand": {},
     *       //   "space": {},
     *       //   "text": "my_text",
     *       //   "thread": {}
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
     *   //   "createTime": "my_createTime",
     *   //   "fallbackText": "my_fallbackText",
     *   //   "lastUpdateTime": "my_lastUpdateTime",
     *   //   "name": "my_name",
     *   //   "previewText": "my_previewText",
     *   //   "sender": {},
     *   //   "slashCommand": {},
     *   //   "space": {},
     *   //   "text": "my_text",
     *   //   "thread": {}
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
     * Required. Space resource name, in the form "spaces/x". Example: spaces/AAAAMpdlehY
     */
    parent?: string;
    /**
     * Optional. Opaque thread identifier string that can be specified to group messages into a single thread. If this is the first message with a given thread identifier, a new thread is created. Subsequent messages with the same thread identifier will be posted into the same thread. This relieves bots and webhooks from having to store the Google Chat thread ID of a thread (created earlier by them) to post further updates to it. Has no effect if thread field, corresponding to an existing thread, is set in message.
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
     * Required. Resource name of the message to be deleted, in the form "spaces/x/messages/x" Example: spaces/AAAAMpdlehY/messages/UMxbHmzDlr4.UMxbHmzDlr4
     */
    name?: string;
  }
  export interface Params$Resource$Spaces$Messages$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the message to be retrieved, in the form "spaces/x/messages/x". Example: spaces/AAAAMpdlehY/messages/UMxbHmzDlr4.UMxbHmzDlr4
     */
    name?: string;
  }
  export interface Params$Resource$Spaces$Messages$Update
    extends StandardParameters {
    /**
     *
     */
    name?: string;
    /**
     * Required. The field paths to be updated, comma separated if there are multiple. Currently supported field paths: * text * cards
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
     * Gets the metadata of a message attachment. The attachment data is fetched using the media API.
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
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chat.spaces.messages.attachments.get({
     *     // Resource name of the attachment, in the form "spaces/x/messages/x/attachments/x".
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
     * Resource name of the attachment, in the form "spaces/x/messages/x/attachments/x".
     */
    name?: string;
  }
}
