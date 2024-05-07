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
   * The Google Chat API lets you build Chat apps to integrate your services with Google Chat and manage Chat resources such as spaces, members, and messages.
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
    users: Resource$Users;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.media = new Resource$Media(this.context);
      this.spaces = new Resource$Spaces(this.context);
      this.users = new Resource$Users(this.context);
    }
  }

  /**
   * One or more interactive widgets that appear at the bottom of a message. For details, see [Add interactive widgets at the bottom of a message](https://developers.google.com/workspace/chat/create-messages#add-accessory-widgets).
   */
  export interface Schema$AccessoryWidget {
    /**
     * A list of buttons.
     */
    buttonList?: Schema$GoogleAppsCardV1ButtonList;
  }
  /**
   * List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze one day, snooze next week. You might use `action method = snooze()`, passing the snooze type and snooze time in the list of string parameters.
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
     * Input only. A response to an interaction event related to a [dialog](https://developers.google.com/workspace/chat/dialogs). Must be accompanied by `ResponseType.Dialog`.
     */
    dialogAction?: Schema$DialogAction;
    /**
     * Input only. The type of Chat app response.
     */
    type?: string | null;
    /**
     * Input only. The response of the updated widget.
     */
    updatedWidget?: Schema$UpdatedWidget;
    /**
     * Input only. URL for users to authenticate or configure. (Only for `REQUEST_CONFIG` response types.)
     */
    url?: string | null;
  }
  /**
   * Represents the status for a request to either invoke or submit a [dialog](https://developers.google.com/workspace/chat/dialogs).
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
   * Output only. Annotations associated with the plain-text body of the message. To add basic formatting to a text message, see [Format text messages](https://developers.google.com/workspace/chat/format-messages). Example plain-text message body: ``` Hello @FooBot how are you!" ``` The corresponding annotations metadata: ``` "annotations":[{ "type":"USER_MENTION", "startIndex":6, "length":7, "userMention": { "user": { "name":"users/{user\}", "displayName":"FooBot", "avatarUrl":"https://goo.gl/aeDtrS", "type":"BOT" \}, "type":"MENTION" \} \}] ```
   */
  export interface Schema$Annotation {
    /**
     * Length of the substring in the plain-text message body this annotation corresponds to.
     */
    length?: number | null;
    /**
     * The metadata for a rich link.
     */
    richLinkMetadata?: Schema$RichLinkMetadata;
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
   * A GIF image that's specified by a URL.
   */
  export interface Schema$AttachedGif {
    /**
     * Output only. The URL that hosts the GIF image.
     */
    uri?: string | null;
  }
  /**
   * An attachment in Google Chat.
   */
  export interface Schema$Attachment {
    /**
     * A reference to the attachment data. This field is used with the media API to download the attachment data.
     */
    attachmentDataRef?: Schema$AttachmentDataRef;
    /**
     * Output only. The original file name for the content, not the full path.
     */
    contentName?: string | null;
    /**
     * Output only. The content type (MIME type) of the file.
     */
    contentType?: string | null;
    /**
     * Output only. The download URL which should be used to allow a human user to download the attachment. Chat apps shouldn't use this URL to download attachment content.
     */
    downloadUri?: string | null;
    /**
     * Output only. A reference to the Google Drive attachment. This field is used with the Google Drive API.
     */
    driveDataRef?: Schema$DriveDataRef;
    /**
     * Resource name of the attachment, in the form `spaces/x/messages/x/attachments/x`.
     */
    name?: string | null;
    /**
     * Output only. The source of the attachment.
     */
    source?: string | null;
    /**
     * Output only. The thumbnail URL which should be used to preview the attachment to a human user. Chat apps shouldn't use this URL to download attachment content.
     */
    thumbnailUri?: string | null;
  }
  /**
   * A reference to the attachment data.
   */
  export interface Schema$AttachmentDataRef {
    /**
     * Opaque token containing a reference to an uploaded attachment. Treated by clients as an opaque string and used to create or update Chat messages with attachments.
     */
    attachmentUploadToken?: string | null;
    /**
     * The resource name of the attachment data. This field is used with the media API to download the attachment data.
     */
    resourceName?: string | null;
  }
  /**
   * A button. Can be a text button or an image button.
   */
  export interface Schema$Button {
    /**
     * A button with image and `onclick` action.
     */
    imageButton?: Schema$ImageButton;
    /**
     * A button with text and `onclick` action.
     */
    textButton?: Schema$TextButton;
  }
  /**
   * A card is a UI element that can contain UI widgets such as text and images.
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
     * The image's type (for example, square border or circular border).
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
     * The title must be specified. The header has a fixed height: if both a title and subtitle is specified, each takes up one line. If only the title is specified, it takes up both lines.
     */
    title?: string | null;
  }
  /**
   * A [card](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards) in a Google Chat message. Only Chat apps can create cards. If your Chat app [authenticates as a user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), the message can't contain cards. [Card builder](https://addons.gsuite.google.com/uikit/builder)
   */
  export interface Schema$CardWithId {
    /**
     * A card. Maximum size is 32 KB.
     */
    card?: Schema$GoogleAppsCardV1Card;
    /**
     * Required if the message contains multiple cards. A unique identifier for a card in a message.
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
   * For a `SelectionInput` widget that uses a multiselect menu, a data source from Google Chat. The data source populates selection items for the multiselect menu. For example, a user can select Google Chat spaces that they're a member of. [Google Chat apps](https://developers.google.com/workspace/chat):
   */
  export interface Schema$ChatClientDataSourceMarkup {
    /**
     * Google Chat spaces that the user is a member of.
     */
    spaceDataSource?: Schema$SpaceDataSource;
  }
  /**
   * Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); \} public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); \} return resultBuilder.build(); \} // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; \} return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; \} static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; \} Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; \} [result autorelease]; return result; \} // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); \} var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); \}; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); \} resultBuilder.push(hexString); return resultBuilder.join(''); \}; // ...
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
     * A map containing the values that a user inputs in a widget from a card or dialog. The map keys are the string IDs assigned to each widget, and the values represent inputs to the widget. For details, see [Process information inputted by users](https://developers.google.com/chat/ui/read-form-data).
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
     * The timezone ID and offset from Coordinated Universal Time (UTC). Only supported for the event types [`CARD_CLICKED`](https://developers.google.com/chat/api/reference/rest/v1/EventType#ENUM_VALUES.CARD_CLICKED) and [`SUBMIT_DIALOG`](https://developers.google.com/chat/api/reference/rest/v1/DialogEventType#ENUM_VALUES.SUBMIT_DIALOG).
     */
    timeZone?: Schema$TimeZone;
    /**
     * The full `locale.displayName` in the format of [ISO 639 language code]-[ISO 3166 country/region code] such as "en-US".
     */
    userLocale?: string | null;
  }
  /**
   * Request message for completing the import process for a space.
   */
  export interface Schema$CompleteImportSpaceRequest {}
  /**
   * Response message for completing the import process for a space.
   */
  export interface Schema$CompleteImportSpaceResponse {
    /**
     * The import mode space.
     */
    space?: Schema$Space;
  }
  /**
   * Represents a custom emoji.
   */
  export interface Schema$CustomEmoji {
    /**
     * Output only. Unique key for the custom emoji resource.
     */
    uid?: string | null;
  }
  /**
   * Date input values.
   */
  export interface Schema$DateInput {
    /**
     * Time since epoch time, in milliseconds.
     */
    msSinceEpoch?: string | null;
  }
  /**
   * Date and time input values.
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
   * Information about a deleted message. A message is deleted when `delete_time` is set.
   */
  export interface Schema$DeletionMetadata {
    /**
     * Indicates who deleted the message.
     */
    deletionType?: string | null;
  }
  /**
   * A Google Chat app interaction event. To learn about interaction events, see [Receive and respond to interactions with your Google Chat app](https://developers.google.com/workspace/chat/api/guides/message-formats). To learn about event types and for example event payloads, see [Types of Google Chat app interaction events](https://developers.google.com/workspace/chat/events). In addition to receiving events from user interactions, Chat apps can receive events about changes to spaces, such as when a new member is added to a space. To learn about space events, see [Work with events from Google Chat](https://developers.google.com/workspace/chat/events-overview).
   */
  export interface Schema$DeprecatedEvent {
    /**
     * For `CARD_CLICKED` interaction events, the form action data associated when a user clicks a card or dialog. To learn more, see [Read form data input by users on cards](https://developers.google.com/workspace/chat/read-form-data).
     */
    action?: Schema$FormAction;
    /**
     * Represents information about the user's client, such as locale, host app, and platform. For Chat apps, `CommonEventObject` includes information submitted by users interacting with [dialogs](https://developers.google.com/workspace/chat/dialogs), like data entered on a card.
     */
    common?: Schema$CommonEventObject;
    /**
     * The URL the Chat app should redirect the user to after they have completed an authorization or configuration flow outside of Google Chat. For more information, see [Connect a Chat app with other services & tools](https://developers.google.com/workspace/chat/connect-web-services-tools).
     */
    configCompleteRedirectUrl?: string | null;
    /**
     * The type of [dialog](https://developers.google.com/workspace/chat/dialogs) interaction event received.
     */
    dialogEventType?: string | null;
    /**
     * The timestamp indicating when the interaction event occurred.
     */
    eventTime?: string | null;
    /**
     * For `CARD_CLICKED` and `MESSAGE` interaction events, whether the user is interacting with or about to interact with a [dialog](https://developers.google.com/workspace/chat/dialogs).
     */
    isDialogEvent?: boolean | null;
    /**
     * The message that triggered the interaction event, if applicable.
     */
    message?: Schema$Message;
    /**
     * The space in which the interaction event occurred.
     */
    space?: Schema$Space;
    /**
     * The Chat app-defined key for the thread related to the interaction event. See [`spaces.messages.thread.threadKey`](/chat/api/reference/rest/v1/spaces.messages#Thread.FIELDS.thread_key) for more information.
     */
    threadKey?: string | null;
    /**
     * A secret value that legacy Chat apps can use to verify if a request is from Google. Google randomly generates the token, and its value remains static. You can obtain, revoke, or regenerate the token from the [Chat API configuration page](https://console.cloud.google.com/apis/api/chat.googleapis.com/hangouts-chat) in the Google Cloud Console. Modern Chat apps don't use this field. It is absent from API responses and the [Chat API configuration page](https://console.cloud.google.com/apis/api/chat.googleapis.com/hangouts-chat).
     */
    token?: string | null;
    /**
     * The type of interaction event. For details, see [Types of Google Chat app interaction events](https://developers.google.com/workspace/chat/events).
     */
    type?: string | null;
    /**
     * The user that triggered the interaction event.
     */
    user?: Schema$User;
  }
  /**
   * Wrapper around the card body of the dialog.
   */
  export interface Schema$Dialog {
    /**
     * Input only. Body of the dialog, which is rendered in a modal. Google Chat apps don't support the following card entities: `DateTimePicker`, `OnChangeAction`.
     */
    body?: Schema$GoogleAppsCardV1Card;
  }
  /**
   * Contains a [dialog](https://developers.google.com/workspace/chat/dialogs) and request status code.
   */
  export interface Schema$DialogAction {
    /**
     * Input only. Status for a request to either invoke or submit a [dialog](https://developers.google.com/workspace/chat/dialogs). Displays a status and message to users, if necessary. For example, in case of an error or success.
     */
    actionStatus?: Schema$ActionStatus;
    /**
     * Input only. [Dialog](https://developers.google.com/workspace/chat/dialogs) for the request.
     */
    dialog?: Schema$Dialog;
  }
  /**
   * A reference to the data of a drive attachment.
   */
  export interface Schema$DriveDataRef {
    /**
     * The ID for the drive file. Use with the Drive API.
     */
    driveFileId?: string | null;
  }
  /**
   * Data for Google Drive links.
   */
  export interface Schema$DriveLinkData {
    /**
     * A [DriveDataRef](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.attachments#drivedataref) which references a Google Drive file.
     */
    driveDataRef?: Schema$DriveDataRef;
    /**
     * The mime type of the linked Google Drive resource.
     */
    mimeType?: string | null;
  }
  /**
   * An emoji that is used as a reaction to a message.
   */
  export interface Schema$Emoji {
    /**
     * Output only. A custom emoji.
     */
    customEmoji?: Schema$CustomEmoji;
    /**
     * A basic emoji represented by a unicode string.
     */
    unicode?: string | null;
  }
  /**
   * The number of people who reacted to a message with a specific emoji.
   */
  export interface Schema$EmojiReactionSummary {
    /**
     * Emoji associated with the reactions.
     */
    emoji?: Schema$Emoji;
    /**
     * The total number of reactions using the associated emoji.
     */
    reactionCount?: number | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * A form action describes the behavior when the form is submitted. For example, you can invoke Apps Script to handle the form.
   */
  export interface Schema$FormAction {
    /**
     * The method name is used to identify which part of the form triggered the form submission. This information is echoed back to the Chat app as part of the card click event. You can use the same method name for several elements that trigger a common behavior.
     */
    actionMethodName?: string | null;
    /**
     * List of action parameters.
     */
    parameters?: Schema$ActionParameter[];
  }
  /**
   * An action that describes the behavior when the form is submitted. For example, you can invoke an Apps Script script to handle the form. If the action is triggered, the form values are sent to the server. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):
   */
  export interface Schema$GoogleAppsCardV1Action {
    /**
     * A custom function to invoke when the containing element is clicked or otherwise activated. For example usage, see [Read form data](https://developers.google.com/workspace/chat/read-form-data).
     */
    function?: string | null;
    /**
     * Optional. Required when opening a [dialog](https://developers.google.com/workspace/chat/dialogs). What to do in response to an interaction with a user, such as a user clicking a button in a card message. If unspecified, the app responds by executing an `action`—like opening a link or running a function—as normal. By specifying an `interaction`, the app can respond in special interactive ways. For example, by setting `interaction` to `OPEN_DIALOG`, the app can open a [dialog](https://developers.google.com/workspace/chat/dialogs). When specified, a loading indicator isn't shown. If specified for an add-on, the entire card is stripped and nothing is shown in the client. [Google Chat apps](https://developers.google.com/workspace/chat):
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
     * Indicates whether form values persist after the action. The default value is `false`. If `true`, form values remain after the action is triggered. To let the user make changes while the action is being processed, set [`LoadIndicator`](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1#loadindicator) to `NONE`. For [card messages](https://developers.google.com/workspace/chat/api/guides/v1/messages/create#create) in Chat apps, you must also set the action's [`ResponseType`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages#responsetype) to `UPDATE_MESSAGE` and use the same [`card_id`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages#CardWithId) from the card that contained the action. If `false`, the form values are cleared when the action is triggered. To prevent the user from making changes while the action is being processed, set [`LoadIndicator`](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1#loadindicator) to `SPINNER`.
     */
    persistValues?: boolean | null;
  }
  /**
   * List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze one day, or snooze next week. You might use `action method = snooze()`, passing the snooze type and snooze time in the list of string parameters. To learn more, see [`CommonEventObject`](https://developers.google.com/workspace/chat/api/reference/rest/v1/Event#commoneventobject). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):
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
   * The style options for the border of a card or widget, including the border type and color. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):
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
   * A text, icon, or text and icon button that users can click. For an example in Google Chat apps, see [Add a button](https://developers.google.com/workspace/chat/design-interactive-card-dialog#add_a_button). To make an image a clickable button, specify an `Image` (not an `ImageComponent`) and set an `onClick` action. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):
   */
  export interface Schema$GoogleAppsCardV1Button {
    /**
     * The alternative text that's used for accessibility. Set descriptive text that lets users know what the button does. For example, if a button opens a hyperlink, you might write: "Opens a new browser tab and navigates to the Google Chat developer documentation at https://developers.google.com/workspace/chat".
     */
    altText?: string | null;
    /**
     * If set, the button is filled with a solid background color and the font color changes to maintain contrast with the background color. For example, setting a blue background likely results in white text. If unset, the image background is white and the font color is blue. For red, green, and blue, the value of each field is a `float` number that you can express in either of two ways: as a number between 0 and 255 divided by 255 (153/255), or as a value between 0 and 1 (0.6). 0 represents the absence of a color and 1 or 255/255 represent the full presence of that color on the RGB scale. Optionally set `alpha`, which sets a level of transparency using this equation: ``` pixel color = alpha * (this color) + (1.0 - alpha) * (background color) ``` For `alpha`, a value of `1` corresponds with a solid color, and a value of `0` corresponds with a completely transparent color. For example, the following color represents a half transparent red: ``` "color": { "red": 1, "green": 0, "blue": 0, "alpha": 0.5 \} ```
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
     * Required. The action to perform when a user clicks the button, such as opening a hyperlink or running a custom function.
     */
    onClick?: Schema$GoogleAppsCardV1OnClick;
    /**
     * The text displayed inside the button.
     */
    text?: string | null;
  }
  /**
   * A list of buttons layed out horizontally. For an example in Google Chat apps, see [Add a button](https://developers.google.com/workspace/chat/design-interactive-card-dialog#add_a_button). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):
   */
  export interface Schema$GoogleAppsCardV1ButtonList {
    /**
     * An array of buttons.
     */
    buttons?: Schema$GoogleAppsCardV1Button[];
  }
  /**
   * A card interface displayed in a Google Chat message or Google Workspace Add-on. Cards support a defined layout, interactive UI elements like buttons, and rich media like images. Use cards to present detailed information, gather information from users, and guide users to take a next step. [Card builder](https://addons.gsuite.google.com/uikit/builder) To learn how to build cards, see the following documentation: * For Google Chat apps, see [Design the components of a card or dialog](https://developers.google.com/workspace/chat/design-components-card-dialog). * For Google Workspace Add-ons, see [Card-based interfaces](https://developers.google.com/apps-script/add-ons/concepts/cards). **Example: Card message for a Google Chat app** ![Example contact card](https://developers.google.com/workspace/chat/images/card_api_reference.png) To create the sample card message in Google Chat, use the following JSON: ``` { "cardsV2": [ { "cardId": "unique-card-id", "card": { "header": { "title": "Sasha", "subtitle": "Software Engineer", "imageUrl": "https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png", "imageType": "CIRCLE", "imageAltText": "Avatar for Sasha" \}, "sections": [ { "header": "Contact Info", "collapsible": true, "uncollapsibleWidgetsCount": 1, "widgets": [ { "decoratedText": { "startIcon": { "knownIcon": "EMAIL" \}, "text": "sasha@example.com" \} \}, { "decoratedText": { "startIcon": { "knownIcon": "PERSON" \}, "text": "Online" \} \}, { "decoratedText": { "startIcon": { "knownIcon": "PHONE" \}, "text": "+1 (555) 555-1234" \} \}, { "buttonList": { "buttons": [ { "text": "Share", "onClick": { "openLink": { "url": "https://example.com/share" \} \} \}, { "text": "Edit", "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT" \} ] \} \} \} ] \} \} ] \} ] \} \} ] \} ```
   */
  export interface Schema$GoogleAppsCardV1Card {
    /**
     * The card's actions. Actions are added to the card's toolbar menu. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons): For example, the following JSON constructs a card action menu with `Settings` and `Send Feedback` options: ``` "card_actions": [ { "actionLabel": "Settings", "onClick": { "action": { "functionName": "goToView", "parameters": [ { "key": "viewType", "value": "SETTING" \} ], "loadIndicator": "LoadIndicator.SPINNER" \} \} \}, { "actionLabel": "Send Feedback", "onClick": { "openLink": { "url": "https://example.com/feedback" \} \} \} ] ```
     */
    cardActions?: Schema$GoogleAppsCardV1CardAction[];
    /**
     * In Google Workspace Add-ons, sets the display properties of the `peekCardHeader`. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):
     */
    displayStyle?: string | null;
    /**
     * The fixed footer shown at the bottom of this card. Setting `fixedFooter` without specifying a `primaryButton` or a `secondaryButton` causes an error. For Chat apps, you can use fixed footers in [dialogs](https://developers.google.com/workspace/chat/dialogs), but not [card messages](https://developers.google.com/workspace/chat/create-messages#create). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):
     */
    fixedFooter?: Schema$GoogleAppsCardV1CardFixedFooter;
    /**
     * The header of the card. A header usually contains a leading image and a title. Headers always appear at the top of a card.
     */
    header?: Schema$GoogleAppsCardV1CardHeader;
    /**
     * Name of the card. Used as a card identifier in card navigation. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):
     */
    name?: string | null;
    /**
     * When displaying contextual content, the peek card header acts as a placeholder so that the user can navigate forward between the homepage cards and the contextual cards. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):
     */
    peekCardHeader?: Schema$GoogleAppsCardV1CardHeader;
    /**
     * The divider style between sections.
     */
    sectionDividerStyle?: string | null;
    /**
     * Contains a collection of widgets. Each section has its own, optional header. Sections are visually separated by a line divider. For an example in Google Chat apps, see [Define a section of a card](https://developers.google.com/workspace/chat/design-components-card-dialog#define_a_section_of_a_card).
     */
    sections?: Schema$GoogleAppsCardV1Section[];
  }
  /**
   * A card action is the action associated with the card. For example, an invoice card might include actions such as delete invoice, email invoice, or open the invoice in a browser. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):
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
   * A persistent (sticky) footer that that appears at the bottom of the card. Setting `fixedFooter` without specifying a `primaryButton` or a `secondaryButton` causes an error. For Chat apps, you can use fixed footers in [dialogs](https://developers.google.com/workspace/chat/dialogs), but not [card messages](https://developers.google.com/workspace/chat/create-messages#create). For an example in Google Chat apps, see [Add a persistent footer](https://developers.google.com/workspace/chat/design-components-card-dialog#add_a_persistent_footer). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):
   */
  export interface Schema$GoogleAppsCardV1CardFixedFooter {
    /**
     * The primary button of the fixed footer. The button must be a text button with text and color set.
     */
    primaryButton?: Schema$GoogleAppsCardV1Button;
    /**
     * The secondary button of the fixed footer. The button must be a text button with text and color set. If `secondaryButton` is set, you must also set `primaryButton`.
     */
    secondaryButton?: Schema$GoogleAppsCardV1Button;
  }
  /**
   * Represents a card header. For an example in Google Chat apps, see [Add a header](https://developers.google.com/workspace/chat/design-components-card-dialog#add_a_header). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):
   */
  export interface Schema$GoogleAppsCardV1CardHeader {
    /**
     * The alternative text of this image that's used for accessibility.
     */
    imageAltText?: string | null;
    /**
     * The shape used to crop the image. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):
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
   * A column. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend): Columns for Google Workspace Add-ons are in Developer Preview.
   */
  export interface Schema$GoogleAppsCardV1Column {
    /**
     * Specifies whether widgets align to the left, right, or center of a column.
     */
    horizontalAlignment?: string | null;
    /**
     * Specifies how a column fills the width of the card.
     */
    horizontalSizeStyle?: string | null;
    /**
     * Specifies whether widgets align to the top, bottom, or center of a column.
     */
    verticalAlignment?: string | null;
    /**
     * An array of widgets included in a column. Widgets appear in the order that they are specified.
     */
    widgets?: Schema$GoogleAppsCardV1Widgets[];
  }
  /**
   * The `Columns` widget displays up to 2 columns in a card or dialog. You can add widgets to each column; the widgets appear in the order that they are specified. For an example in Google Chat apps, see [Display cards and dialogs in columns](https://developers.google.com/workspace/chat/format-structure-card-dialog#display_cards_and_dialogs_in_columns). The height of each column is determined by the taller column. For example, if the first column is taller than the second column, both columns have the height of the first column. Because each column can contain a different number of widgets, you can't define rows or align widgets between the columns. Columns are displayed side-by-side. You can customize the width of each column using the `HorizontalSizeStyle` field. If the user's screen width is too narrow, the second column wraps below the first: * On web, the second column wraps if the screen width is less than or equal to 480 pixels. * On iOS devices, the second column wraps if the screen width is less than or equal to 300 pt. * On Android devices, the second column wraps if the screen width is less than or equal to 320 dp. To include more than 2 columns, or to use rows, use the `Grid` widget. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend): Columns for Google Workspace Add-ons are in Developer Preview.
   */
  export interface Schema$GoogleAppsCardV1Columns {
    /**
     * An array of columns. You can include up to 2 columns in a card or dialog.
     */
    columnItems?: Schema$GoogleAppsCardV1Column[];
  }
  /**
   * Lets users input a date, a time, or both a date and a time. For an example in Google Chat apps, see [Let a user pick a date and time](https://developers.google.com/workspace/chat/design-interactive-card-dialog#let_a_user_pick_a_date_and_time). Users can input text or use the picker to select dates and times. If users input an invalid date or time, the picker shows an error that prompts users to input the information correctly. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):
   */
  export interface Schema$GoogleAppsCardV1DateTimePicker {
    /**
     * The text that prompts users to input a date, a time, or a date and time. For example, if users are scheduling an appointment, use a label such as `Appointment date` or `Appointment date and time`.
     */
    label?: string | null;
    /**
     * The name by which the `DateTimePicker` is identified in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/workspace/chat/read-form-data).
     */
    name?: string | null;
    /**
     * Triggered when the user clicks **Save** or **Clear** from the `DateTimePicker` interface.
     */
    onChangeAction?: Schema$GoogleAppsCardV1Action;
    /**
     * The number representing the time zone offset from UTC, in minutes. If set, the `value_ms_epoch` is displayed in the specified time zone. If unset, the value defaults to the user's time zone setting.
     */
    timezoneOffsetDate?: number | null;
    /**
     * Whether the widget supports inputting a date, a time, or the date and time.
     */
    type?: string | null;
    /**
     * The default value displayed in the widget, in milliseconds since [Unix epoch time](https://en.wikipedia.org/wiki/Unix_time). Specify the value based on the type of picker (`DateTimePickerType`): * `DATE_AND_TIME`: a calendar date and time in UTC. For example, to represent January 1, 2023 at 12:00 PM UTC, use `1672574400000`. * `DATE_ONLY`: a calendar date at 00:00:00 UTC. For example, to represent January 1, 2023, use `1672531200000`. * `TIME_ONLY`: a time in UTC. For example, to represent 12:00 PM, use `43200000` (or `12 * 60 * 60 * 1000`).
     */
    valueMsEpoch?: string | null;
  }
  /**
   * A widget that displays text with optional decorations such as a label above or below the text, an icon in front of the text, a selection widget, or a button after the text. For an example in Google Chat apps, see [Display text with decorative text](https://developers.google.com/workspace/chat/add-text-image-card-dialog#display_text_with_decorative_elements). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):
   */
  export interface Schema$GoogleAppsCardV1DecoratedText {
    /**
     * The text that appears below `text`. Always wraps.
     */
    bottomLabel?: string | null;
    /**
     * A button that a user can click to trigger an action.
     */
    button?: Schema$GoogleAppsCardV1Button;
    /**
     * An icon displayed after the text. Supports [built-in](https://developers.google.com/workspace/chat/format-messages#builtinicons) and [custom](https://developers.google.com/workspace/chat/format-messages#customicons) icons.
     */
    endIcon?: Schema$GoogleAppsCardV1Icon;
    /**
     * Deprecated in favor of `startIcon`.
     */
    icon?: Schema$GoogleAppsCardV1Icon;
    /**
     * This action is triggered when users click `topLabel` or `bottomLabel`.
     */
    onClick?: Schema$GoogleAppsCardV1OnClick;
    /**
     * The icon displayed in front of the text.
     */
    startIcon?: Schema$GoogleAppsCardV1Icon;
    /**
     * A switch widget that a user can click to change its state and trigger an action.
     */
    switchControl?: Schema$GoogleAppsCardV1SwitchControl;
    /**
     * Required. The primary text. Supports simple formatting. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/workspace/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting).
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
   * Displays a divider between widgets as a horizontal line. For an example in Google Chat apps, see [Add a horizontal divider between widgets](https://developers.google.com/workspace/chat/format-structure-card-dialog#add_a_horizontal_divider_between_widgets). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend): For example, the following JSON creates a divider: ``` "divider": {\} ```
   */
  export interface Schema$GoogleAppsCardV1Divider {}
  /**
   * Displays a grid with a collection of items. Items can only include text or images. For responsive columns, or to include more than text or images, use `Columns`. For an example in Google Chat apps, see [Display a Grid with a collection of items](https://developers.google.com/workspace/chat/format-structure-card-dialog#display_a_grid_with_a_collection_of_items). A grid supports any number of columns and items. The number of rows is determined by items divided by columns. A grid with 10 items and 2 columns has 5 rows. A grid with 11 items and 2 columns has 6 rows. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend): For example, the following JSON creates a 2 column grid with a single item: ``` "grid": { "title": "A fine collection of items", "columnCount": 2, "borderStyle": { "type": "STROKE", "cornerRadius": 4 \}, "items": [ { "image": { "imageUri": "https://www.example.com/image.png", "cropStyle": { "type": "SQUARE" \}, "borderStyle": { "type": "STROKE" \} \}, "title": "An item", "textAlignment": "CENTER" \} ], "onClick": { "openLink": { "url": "https://www.example.com" \} \} \} ```
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
   * Represents an item in a grid layout. Items can contain text, an image, or both text and an image. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):
   */
  export interface Schema$GoogleAppsCardV1GridItem {
    /**
     * A user-specified identifier for this grid item. This identifier is returned in the parent grid's `onClick` callback parameters.
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
   * An icon displayed in a widget on a card. For an example in Google Chat apps, see [Add an icon](https://developers.google.com/workspace/chat/add-text-image-card-dialog#add_an_icon). Supports [built-in](https://developers.google.com/workspace/chat/format-messages#builtinicons) and [custom](https://developers.google.com/workspace/chat/format-messages#customicons) icons. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):
   */
  export interface Schema$GoogleAppsCardV1Icon {
    /**
     * Optional. A description of the icon used for accessibility. If unspecified, the default value `Button` is provided. As a best practice, you should set a helpful description for what the icon displays, and if applicable, what it does. For example, `A user's account portrait`, or `Opens a new browser tab and navigates to the Google Chat developer documentation at https://developers.google.com/workspace/chat`. If the icon is set in a `Button`, the `altText` appears as helper text when the user hovers over the button. However, if the button also sets `text`, the icon's `altText` is ignored.
     */
    altText?: string | null;
    /**
     * Display a custom icon hosted at an HTTPS URL. For example: ``` "iconUrl": "https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png" ``` Supported file types include `.png` and `.jpg`.
     */
    iconUrl?: string | null;
    /**
     * The crop style applied to the image. In some cases, applying a `CIRCLE` crop causes the image to be drawn larger than a built-in icon.
     */
    imageType?: string | null;
    /**
     * Display one of the built-in icons provided by Google Workspace. For example, to display an airplane icon, specify `AIRPLANE`. For a bus, specify `BUS`. For a full list of supported icons, see [built-in icons](https://developers.google.com/workspace/chat/format-messages#builtinicons).
     */
    knownIcon?: string | null;
    /**
     * Display one of the [Google Material Icons](https://fonts.google.com/icons). For example, to display a [checkbox icon](https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Acheck_box%3AFILL%400%3Bwght%40400%3BGRAD%400%3Bopsz%4048), use ``` "material_icon": { "name": "check_box" \} ``` [Google Chat apps](https://developers.google.com/workspace/chat):
     */
    materialIcon?: Schema$GoogleAppsCardV1MaterialIcon;
  }
  /**
   * An image that is specified by a URL and can have an `onClick` action. For an example, see [Add an image](https://developers.google.com/workspace/chat/add-text-image-card-dialog#add_an_image). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):
   */
  export interface Schema$GoogleAppsCardV1Image {
    /**
     * The alternative text of this image that's used for accessibility.
     */
    altText?: string | null;
    /**
     * The HTTPS URL that hosts the image. For example: ``` https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png ```
     */
    imageUrl?: string | null;
    /**
     * When a user clicks the image, the click triggers this action.
     */
    onClick?: Schema$GoogleAppsCardV1OnClick;
  }
  /**
   * Represents an image. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):
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
   * Represents the crop style applied to an image. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend): For example, here's how to apply a 16:9 aspect ratio: ``` cropStyle { "type": "RECTANGLE_CUSTOM", "aspectRatio": 16/9 \} ```
   */
  export interface Schema$GoogleAppsCardV1ImageCropStyle {
    /**
     * The aspect ratio to use if the crop type is `RECTANGLE_CUSTOM`. For example, here's how to apply a 16:9 aspect ratio: ``` cropStyle { "type": "RECTANGLE_CUSTOM", "aspectRatio": 16/9 \} ```
     */
    aspectRatio?: number | null;
    /**
     * The crop type.
     */
    type?: string | null;
  }
  /**
   * A [Google Material Icon](https://fonts.google.com/icons), which includes over 2500+ options. For example, to display a [checkbox icon](https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Acheck_box%3AFILL%400%3Bwght%40400%3BGRAD%400%3Bopsz%4048) with customized weight and grade, write the following: ``` { "name": "check_box", "fill": true, "weight": 300, "grade": -25 \} ``` [Google Chat apps](https://developers.google.com/workspace/chat):
   */
  export interface Schema$GoogleAppsCardV1MaterialIcon {
    /**
     * Whether the icon renders as filled. Default value is false. To preview different icon settings, go to [Google Font Icons](https://fonts.google.com/icons) and adjust the settings under **Customize**.
     */
    fill?: boolean | null;
    /**
     * Weight and grade affect a symbol’s thickness. Adjustments to grade are more granular than adjustments to weight and have a small impact on the size of the symbol. Choose from {-25, 0, 200\}. If absent, default value is 0. If any other value is specified, the default value is used. To preview different icon settings, go to [Google Font Icons](https://fonts.google.com/icons) and adjust the settings under **Customize**.
     */
    grade?: number | null;
    /**
     * The icon name defined in the [Google Material Icon](https://fonts.google.com/icons), for example, `check_box`. Any invalid names are abandoned and replaced with empty string and results in the icon failing to render.
     */
    name?: string | null;
    /**
     * The stroke weight of the icon. Choose from {100, 200, 300, 400, 500, 600, 700\}. If absent, default value is 400. If any other value is specified, the default value is used. To preview different icon settings, go to [Google Font Icons](https://fonts.google.com/icons) and adjust the settings under **Customize**.
     */
    weight?: number | null;
  }
  /**
   * Represents how to respond when users click an interactive element on a card, such as a button. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):
   */
  export interface Schema$GoogleAppsCardV1OnClick {
    /**
     * If specified, an action is triggered by this `onClick`.
     */
    action?: Schema$GoogleAppsCardV1Action;
    /**
     * A new card is pushed to the card stack after clicking if specified. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):
     */
    card?: Schema$GoogleAppsCardV1Card;
    /**
     * An add-on triggers this action when the action needs to open a link. This differs from the `open_link` above in that this needs to talk to server to get the link. Thus some preparation work is required for web client to do before the open link action response comes back. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):
     */
    openDynamicLinkAction?: Schema$GoogleAppsCardV1Action;
    /**
     * If specified, this `onClick` triggers an open link action.
     */
    openLink?: Schema$GoogleAppsCardV1OpenLink;
  }
  /**
   * Represents an `onClick` event that opens a hyperlink. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):
   */
  export interface Schema$GoogleAppsCardV1OpenLink {
    /**
     * Whether the client forgets about a link after opening it, or observes it until the window closes. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):
     */
    onClose?: string | null;
    /**
     * How to open a link. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):
     */
    openAs?: string | null;
    /**
     * The URL to open.
     */
    url?: string | null;
  }
  /**
   * For a `SelectionInput` widget that uses a multiselect menu, a data source from Google Workspace. Used to populate items in a multiselect menu. [Google Chat apps](https://developers.google.com/workspace/chat):
   */
  export interface Schema$GoogleAppsCardV1PlatformDataSource {
    /**
     * A data source shared by all Google Workspace applications, such as users in a Google Workspace organization.
     */
    commonDataSource?: string | null;
    /**
     * A data source that's unique to a Google Workspace host application, such spaces in Google Chat.
     */
    hostAppDataSource?: Schema$HostAppDataSourceMarkup;
  }
  /**
   * A section contains a collection of widgets that are rendered vertically in the order that they're specified. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):
   */
  export interface Schema$GoogleAppsCardV1Section {
    /**
     * Indicates whether this section is collapsible. Collapsible sections hide some or all widgets, but users can expand the section to reveal the hidden widgets by clicking **Show more**. Users can hide the widgets again by clicking **Show less**. To determine which widgets are hidden, specify `uncollapsibleWidgetsCount`.
     */
    collapsible?: boolean | null;
    /**
     * Text that appears at the top of a section. Supports simple HTML formatted text. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/workspace/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting).
     */
    header?: string | null;
    /**
     * The number of uncollapsible widgets which remain visible even when a section is collapsed. For example, when a section contains five widgets and the `uncollapsibleWidgetsCount` is set to `2`, the first two widgets are always shown and the last three are collapsed by default. The `uncollapsibleWidgetsCount` is taken into account only when `collapsible` is `true`.
     */
    uncollapsibleWidgetsCount?: number | null;
    /**
     * All the widgets in the section. Must contain at least one widget.
     */
    widgets?: Schema$GoogleAppsCardV1Widget[];
  }
  /**
   * A widget that creates one or more UI items that users can select. For example, a dropdown menu or checkboxes. You can use this widget to collect data that can be predicted or enumerated. For an example in Google Chat apps, see [Add selectable UI elements](/workspace/chat/design-interactive-card-dialog#add_selectable_ui_elements). Chat apps can process the value of items that users select or input. For details about working with form inputs, see [Receive form data](https://developers.google.com/workspace/chat/read-form-data). To collect undefined or abstract data from users, use the TextInput widget. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):
   */
  export interface Schema$GoogleAppsCardV1SelectionInput {
    /**
     * An external data source, such as a relational data base.
     */
    externalDataSource?: Schema$GoogleAppsCardV1Action;
    /**
     * An array of selectable items. For example, an array of radio buttons or checkboxes. Supports up to 100 items.
     */
    items?: Schema$GoogleAppsCardV1SelectionItem[];
    /**
     * The text that appears above the selection input field in the user interface. Specify text that helps the user enter the information your app needs. For example, if users are selecting the urgency of a work ticket from a drop-down menu, the label might be "Urgency" or "Select urgency".
     */
    label?: string | null;
    /**
     * For multiselect menus, the maximum number of items that a user can select. Minimum value is 1 item. If unspecified, defaults to 3 items.
     */
    multiSelectMaxSelectedItems?: number | null;
    /**
     * For multiselect menus, the number of text characters that a user inputs before the app queries autocomplete and displays suggested items in the menu. If unspecified, defaults to 0 characters for static data sources and 3 characters for external data sources.
     */
    multiSelectMinQueryLength?: number | null;
    /**
     * The name that identifies the selection input in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/workspace/chat/read-form-data).
     */
    name?: string | null;
    /**
     * If specified, the form is submitted when the selection changes. If not specified, you must specify a separate button that submits the form. For details about working with form inputs, see [Receive form data](https://developers.google.com/workspace/chat/read-form-data).
     */
    onChangeAction?: Schema$GoogleAppsCardV1Action;
    /**
     * A data source from Google Workspace.
     */
    platformDataSource?: Schema$GoogleAppsCardV1PlatformDataSource;
    /**
     * The type of items that are displayed to users in a `SelectionInput` widget. Selection types support different types of interactions. For example, users can select one or more checkboxes, but they can only select one value from a dropdown menu.
     */
    type?: string | null;
  }
  /**
   * An item that users can select in a selection input, such as a checkbox or switch. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):
   */
  export interface Schema$GoogleAppsCardV1SelectionItem {
    /**
     * For multiselect menus, a text description or label that's displayed below the item's `text` field.
     */
    bottomText?: string | null;
    /**
     * Whether the item is selected by default. If the selection input only accepts one value (such as for radio buttons or a dropdown menu), only set this field for one item.
     */
    selected?: boolean | null;
    /**
     * For multiselect menus, the URL for the icon displayed next to the item's `text` field. Supports PNG and JPEG files. Must be an `HTTPS` URL. For example, `https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png`.
     */
    startIconUri?: string | null;
    /**
     * The text that identifies or describes the item to users.
     */
    text?: string | null;
    /**
     * The value associated with this item. The client should use this as a form input value. For details about working with form inputs, see [Receive form data](https://developers.google.com/workspace/chat/read-form-data).
     */
    value?: string | null;
  }
  /**
   * One suggested value that users can enter in a text input field. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):
   */
  export interface Schema$GoogleAppsCardV1SuggestionItem {
    /**
     * The value of a suggested input to a text input field. This is equivalent to what users enter themselves.
     */
    text?: string | null;
  }
  /**
   * Suggested values that users can enter. These values appear when users click inside the text input field. As users type, the suggested values dynamically filter to match what the users have typed. For example, a text input field for programming language might suggest Java, JavaScript, Python, and C++. When users start typing `Jav`, the list of suggestions filters to show `Java` and `JavaScript`. Suggested values help guide users to enter values that your app can make sense of. When referring to JavaScript, some users might enter `javascript` and others `java script`. Suggesting `JavaScript` can standardize how users interact with your app. When specified, `TextInput.type` is always `SINGLE_LINE`, even if it's set to `MULTIPLE_LINE`. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):
   */
  export interface Schema$GoogleAppsCardV1Suggestions {
    /**
     * A list of suggestions used for autocomplete recommendations in text input fields.
     */
    items?: Schema$GoogleAppsCardV1SuggestionItem[];
  }
  /**
   * Either a toggle-style switch or a checkbox inside a `decoratedText` widget. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend): Only supported in the `decoratedText` widget.
   */
  export interface Schema$GoogleAppsCardV1SwitchControl {
    /**
     * How the switch appears in the user interface. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):
     */
    controlType?: string | null;
    /**
     * The name by which the switch widget is identified in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/workspace/chat/read-form-data).
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
     * The value entered by a user, returned as part of a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/workspace/chat/read-form-data).
     */
    value?: string | null;
  }
  /**
   * A field in which users can enter text. Supports suggestions and on-change actions. For an example in Google Chat apps, see [Add a field in which a user can enter text](https://developers.google.com/workspace/chat/design-interactive-card-dialog#add_a_field_in_which_a_user_can_enter_text). Chat apps receive and can process the value of entered text during form input events. For details about working with form inputs, see [Receive form data](https://developers.google.com/workspace/chat/read-form-data). When you need to collect undefined or abstract data from users, use a text input. To collect defined or enumerated data from users, use the SelectionInput widget. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):
   */
  export interface Schema$GoogleAppsCardV1TextInput {
    /**
     * Optional. Specify what action to take when the text input field provides suggestions to users who interact with it. If unspecified, the suggestions are set by `initialSuggestions` and are processed by the client. If specified, the app takes the action specified here, such as running a custom function. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):
     */
    autoCompleteAction?: Schema$GoogleAppsCardV1Action;
    /**
     * Text that appears below the text input field meant to assist users by prompting them to enter a certain value. This text is always visible. Required if `label` is unspecified. Otherwise, optional.
     */
    hintText?: string | null;
    /**
     * Suggested values that users can enter. These values appear when users click inside the text input field. As users type, the suggested values dynamically filter to match what the users have typed. For example, a text input field for programming language might suggest Java, JavaScript, Python, and C++. When users start typing `Jav`, the list of suggestions filters to show just `Java` and `JavaScript`. Suggested values help guide users to enter values that your app can make sense of. When referring to JavaScript, some users might enter `javascript` and others `java script`. Suggesting `JavaScript` can standardize how users interact with your app. When specified, `TextInput.type` is always `SINGLE_LINE`, even if it's set to `MULTIPLE_LINE`. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):
     */
    initialSuggestions?: Schema$GoogleAppsCardV1Suggestions;
    /**
     * The text that appears above the text input field in the user interface. Specify text that helps the user enter the information your app needs. For example, if you are asking someone's name, but specifically need their surname, write `surname` instead of `name`. Required if `hintText` is unspecified. Otherwise, optional.
     */
    label?: string | null;
    /**
     * The name by which the text input is identified in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/workspace/chat/read-form-data).
     */
    name?: string | null;
    /**
     * What to do when a change occurs in the text input field. For example, a user adding to the field or deleting text. Examples of actions to take include running a custom function or opening a [dialog](https://developers.google.com/workspace/chat/dialogs) in Google Chat.
     */
    onChangeAction?: Schema$GoogleAppsCardV1Action;
    /**
     * Text that appears in the text input field when the field is empty. Use this text to prompt users to enter a value. For example, `Enter a number from 0 to 100`. [Google Chat apps](https://developers.google.com/workspace/chat):
     */
    placeholderText?: string | null;
    /**
     * How a text input field appears in the user interface. For example, whether the field is single or multi-line.
     */
    type?: string | null;
    /**
     * The value entered by a user, returned as part of a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/workspace/chat/read-form-data).
     */
    value?: string | null;
  }
  /**
   * A paragraph of text that supports formatting. For an example in Google Chat apps, see [Add a paragraph of formatted text](https://developers.google.com/workspace/chat/add-text-image-card-dialog#add_a_paragraph_of_formatted_text). For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/workspace/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):
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
     * Displays up to 2 columns. To include more than 2 columns, or to use rows, use the `Grid` widget. For example, the following JSON creates 2 columns that each contain text paragraphs: ``` "columns": { "columnItems": [ { "horizontalSizeStyle": "FILL_AVAILABLE_SPACE", "horizontalAlignment": "CENTER", "verticalAlignment": "CENTER", "widgets": [ { "textParagraph": { "text": "First column text paragraph" \} \} ] \}, { "horizontalSizeStyle": "FILL_AVAILABLE_SPACE", "horizontalAlignment": "CENTER", "verticalAlignment": "CENTER", "widgets": [ { "textParagraph": { "text": "Second column text paragraph" \} \} ] \} ] \} ```
     */
    columns?: Schema$GoogleAppsCardV1Columns;
    /**
     * Displays a widget that lets users input a date, time, or date and time. For example, the following JSON creates a date time picker to schedule an appointment: ``` "dateTimePicker": { "name": "appointment_time", "label": "Book your appointment at:", "type": "DATE_AND_TIME", "valueMsEpoch": "796435200000" \} ```
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
     * Displays a grid with a collection of items. A grid supports any number of columns and items. The number of rows is determined by the upper bounds of the number items divided by the number of columns. A grid with 10 items and 2 columns has 5 rows. A grid with 11 items and 2 columns has 6 rows. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend): For example, the following JSON creates a 2 column grid with a single item: ``` "grid": { "title": "A fine collection of items", "columnCount": 2, "borderStyle": { "type": "STROKE", "cornerRadius": 4 \}, "items": [ { "image": { "imageUri": "https://www.example.com/image.png", "cropStyle": { "type": "SQUARE" \}, "borderStyle": { "type": "STROKE" \} \}, "title": "An item", "textAlignment": "CENTER" \} ], "onClick": { "openLink": { "url": "https://www.example.com" \} \} \} ```
     */
    grid?: Schema$GoogleAppsCardV1Grid;
    /**
     * Specifies whether widgets align to the left, right, or center of a column.
     */
    horizontalAlignment?: string | null;
    /**
     * Displays an image. For example, the following JSON creates an image with alternative text: ``` "image": { "imageUrl": "https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png", "altText": "Chat app avatar" \} ```
     */
    image?: Schema$GoogleAppsCardV1Image;
    /**
     * Displays a selection control that lets users select items. Selection controls can be checkboxes, radio buttons, switches, or dropdown menus. For example, the following JSON creates a dropdown menu that lets users choose a size: ``` "selectionInput": { "name": "size", "label": "Size" "type": "DROPDOWN", "items": [ { "text": "S", "value": "small", "selected": false \}, { "text": "M", "value": "medium", "selected": true \}, { "text": "L", "value": "large", "selected": false \}, { "text": "XL", "value": "extra_large", "selected": false \} ] \} ```
     */
    selectionInput?: Schema$GoogleAppsCardV1SelectionInput;
    /**
     * Displays a text box that users can type into. For example, the following JSON creates a text input for an email address: ``` "textInput": { "name": "mailing_address", "label": "Mailing Address" \} ``` As another example, the following JSON creates a text input for a programming language with static suggestions: ``` "textInput": { "name": "preferred_programing_language", "label": "Preferred Language", "initialSuggestions": { "items": [ { "text": "C++" \}, { "text": "Java" \}, { "text": "JavaScript" \}, { "text": "Python" \} ] \} \} ```
     */
    textInput?: Schema$GoogleAppsCardV1TextInput;
    /**
     * Displays a text paragraph. Supports simple HTML formatted text. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/workspace/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). For example, the following JSON creates a bolded text: ``` "textParagraph": { "text": " *bold text*" \} ```
     */
    textParagraph?: Schema$GoogleAppsCardV1TextParagraph;
  }
  /**
   * The supported widgets that you can include in a column. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend): Columns for Google Workspace Add-ons are in Developer Preview.
   */
  export interface Schema$GoogleAppsCardV1Widgets {
    /**
     * ButtonList widget.
     */
    buttonList?: Schema$GoogleAppsCardV1ButtonList;
    /**
     * DateTimePicker widget.
     */
    dateTimePicker?: Schema$GoogleAppsCardV1DateTimePicker;
    /**
     * DecoratedText widget.
     */
    decoratedText?: Schema$GoogleAppsCardV1DecoratedText;
    /**
     * Image widget.
     */
    image?: Schema$GoogleAppsCardV1Image;
    /**
     * SelectionInput widget.
     */
    selectionInput?: Schema$GoogleAppsCardV1SelectionInput;
    /**
     * TextInput widget.
     */
    textInput?: Schema$GoogleAppsCardV1TextInput;
    /**
     * TextParagraph widget.
     */
    textParagraph?: Schema$GoogleAppsCardV1TextParagraph;
  }
  /**
   * A Google Group in Google Chat.
   */
  export interface Schema$Group {
    /**
     * Resource name for a Google Group. Represents a [group](https://cloud.google.com/identity/docs/reference/rest/v1/groups) in Cloud Identity Groups API. Format: groups/{group\}
     */
    name?: string | null;
  }
  /**
   * For a `SelectionInput` widget that uses a multiselect menu, a data source from a Google Workspace application. The data source populates selection items for the multiselect menu. [Google Chat apps](https://developers.google.com/workspace/chat):
   */
  export interface Schema$HostAppDataSourceMarkup {
    /**
     * A data source from Google Chat.
     */
    chatDataSource?: Schema$ChatClientDataSourceMarkup;
  }
  /**
   * An image that's specified by a URL and can have an `onclick` action.
   */
  export interface Schema$Image {
    /**
     * The aspect ratio of this image (width and height). This field lets you reserve the right height for the image while waiting for it to load. It's not meant to override the built-in aspect ratio of the image. If unset, the server fills it by prefetching the image.
     */
    aspectRatio?: number | null;
    /**
     * The URL of the image.
     */
    imageUrl?: string | null;
    /**
     * The `onclick` action.
     */
    onClick?: Schema$OnClick;
  }
  /**
   * An image button with an `onclick` action.
   */
  export interface Schema$ImageButton {
    /**
     * The icon specified by an `enum` that indices to an icon provided by Chat API.
     */
    icon?: string | null;
    /**
     * The icon specified by a URL.
     */
    iconUrl?: string | null;
    /**
     * The name of this `image_button` that's used for accessibility. Default value is provided if this name isn't specified.
     */
    name?: string | null;
    /**
     * The `onclick` action.
     */
    onClick?: Schema$OnClick;
  }
  /**
   * Types of data that users can [input on cards or dialogs](https://developers.google.com/chat/ui/read-form-data). The input type depends on the type of values that the widget accepts.
   */
  export interface Schema$Inputs {
    /**
     * Date input values from a [`DateTimePicker`](https://developers.google.com/chat/api/reference/rest/v1/cards#DateTimePicker) widget that only accepts date values.
     */
    dateInput?: Schema$DateInput;
    /**
     * Date and time input values from a [`DateTimePicker`](https://developers.google.com/chat/api/reference/rest/v1/cards#DateTimePicker) widget that accepts both a date and time.
     */
    dateTimeInput?: Schema$DateTimeInput;
    /**
     * A list of strings that represent the values that the user inputs in a widget. If the widget only accepts one value, such as a [`TextInput`](https://developers.google.com/chat/api/reference/rest/v1/cards#TextInput) widget, the list contains one string object. If the widget accepts multiple values, such as a [`SelectionInput`](https://developers.google.com/chat/api/reference/rest/v1/cards#selectioninput) widget of checkboxes, the list contains a string object for each value that the user inputs or selects.
     */
    stringInputs?: Schema$StringInputs;
    /**
     * Time input values from a [`DateTimePicker`](https://developers.google.com/chat/api/reference/rest/v1/cards#DateTimePicker) widget that only accepts time values.
     */
    timeInput?: Schema$TimeInput;
  }
  /**
   * A UI element contains a key (label) and a value (content). This element can also contain some actions such as `onclick` button.
   */
  export interface Schema$KeyValue {
    /**
     * The text of the bottom label. Formatted text supported. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/workspace/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting).
     */
    bottomLabel?: string | null;
    /**
     * A button that can be clicked to trigger an action.
     */
    button?: Schema$Button;
    /**
     * The text of the content. Formatted text supported and always required. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/workspace/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting).
     */
    content?: string | null;
    /**
     * If the content should be multiline.
     */
    contentMultiline?: boolean | null;
    /**
     * An enum value that's replaced by the Chat API with the corresponding icon image.
     */
    icon?: string | null;
    /**
     * The icon specified by a URL.
     */
    iconUrl?: string | null;
    /**
     * The `onclick` action. Only the top label, bottom label, and content region are clickable.
     */
    onClick?: Schema$OnClick;
    /**
     * The text of the top label. Formatted text supported. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/workspace/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting).
     */
    topLabel?: string | null;
  }
  /**
   * Response to list memberships of the space.
   */
  export interface Schema$ListMembershipsResponse {
    /**
     * Unordered list. List of memberships in the requested (or first) page.
     */
    memberships?: Schema$Membership[];
    /**
     * A token that you can send as `pageToken` to retrieve the next page of results. If empty, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for listing messages.
   */
  export interface Schema$ListMessagesResponse {
    /**
     * List of messages.
     */
    messages?: Schema$Message[];
    /**
     * You can send a token as `pageToken` to retrieve the next page of results. If empty, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response to a list reactions request.
   */
  export interface Schema$ListReactionsResponse {
    /**
     * Continuation token to retrieve the next page of results. It's empty for the last page of results.
     */
    nextPageToken?: string | null;
    /**
     * List of reactions in the requested (or first) page.
     */
    reactions?: Schema$Reaction[];
  }
  /**
   * Response message for listing space events.
   */
  export interface Schema$ListSpaceEventsResponse {
    /**
     * Continuation token used to fetch more events. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Results are returned in chronological order (oldest event first).
     */
    spaceEvents?: Schema$SpaceEvent[];
  }
  /**
   * The response for a list spaces request.
   */
  export interface Schema$ListSpacesResponse {
    /**
     * You can send a token as `pageToken` to retrieve the next page of results. If empty, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * List of spaces in the requested (or first) page.
     */
    spaces?: Schema$Space[];
  }
  /**
   * A matched URL in a Chat message. Chat apps can preview matched URLs. For more information, see [Preview links](https://developers.google.com/chat/how-tos/preview-links).
   */
  export interface Schema$MatchedUrl {
    /**
     * Output only. The URL that was matched.
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
     * Optional. Immutable. The creation time of the membership, such as when a member joined or was invited to join a space. This field is output only, except when used to import historical memberships in import mode spaces.
     */
    createTime?: string | null;
    /**
     * Optional. Immutable. The deletion time of the membership, such as when a member left or was removed from a space. This field is output only, except when used to import historical memberships in import mode spaces.
     */
    deleteTime?: string | null;
    /**
     * The Google Group the membership corresponds to. Only supports read operations. Other operations, like creating or updating a membership, aren't currently supported.
     */
    groupMember?: Schema$Group;
    /**
     * The Google Chat user or app the membership corresponds to. If your Chat app [authenticates as a user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), the output populates the [user](https://developers.google.com/workspace/chat/api/reference/rest/v1/User) `name` and `type`.
     */
    member?: Schema$User;
    /**
     * Resource name of the membership, assigned by the server. Format: `spaces/{space\}/members/{member\}`
     */
    name?: string | null;
    /**
     * Optional. User's role within a Chat space, which determines their permitted actions in the space. This field can only be used as input in `UpdateMembership`.
     */
    role?: string | null;
    /**
     * Output only. State of the membership.
     */
    state?: string | null;
  }
  /**
   * Event payload for multiple new memberships. Event type: `google.workspace.chat.membership.v1.batchCreated`
   */
  export interface Schema$MembershipBatchCreatedEventData {
    /**
     * A list of new memberships.
     */
    memberships?: Schema$MembershipCreatedEventData[];
  }
  /**
   * Event payload for multiple deleted memberships. Event type: `google.workspace.chat.membership.v1.batchDeleted`
   */
  export interface Schema$MembershipBatchDeletedEventData {
    /**
     * A list of deleted memberships.
     */
    memberships?: Schema$MembershipDeletedEventData[];
  }
  /**
   * Event payload for multiple updated memberships. Event type: `google.workspace.chat.membership.v1.batchUpdated`
   */
  export interface Schema$MembershipBatchUpdatedEventData {
    /**
     * A list of updated memberships.
     */
    memberships?: Schema$MembershipUpdatedEventData[];
  }
  /**
   * Event payload for a new membership. Event type: `google.workspace.chat.membership.v1.created`.
   */
  export interface Schema$MembershipCreatedEventData {
    /**
     * The new membership.
     */
    membership?: Schema$Membership;
  }
  /**
   * Event payload for a deleted membership. Event type: `google.workspace.chat.membership.v1.deleted`
   */
  export interface Schema$MembershipDeletedEventData {
    /**
     * The deleted membership. Only the `name` and `state` fields are populated.
     */
    membership?: Schema$Membership;
  }
  /**
   * Event payload for an updated membership. Event type: `google.workspace.chat.membership.v1.updated`
   */
  export interface Schema$MembershipUpdatedEventData {
    /**
     * The updated membership.
     */
    membership?: Schema$Membership;
  }
  /**
   * A message in a Google Chat space.
   */
  export interface Schema$Message {
    /**
     * One or more interactive widgets that appear at the bottom of a message. You can add accessory widgets to messages that contain text, cards, or both text and cards. Not supported for messages that contain dialogs. For details, see [Add interactive widgets at the bottom of a message](https://developers.google.com/workspace/chat/create-messages#add-accessory-widgets). Creating a message with accessory widgets requires [app authentication] (https://developers.google.com/workspace/chat/authenticate-authorize-chat-app).
     */
    accessoryWidgets?: Schema$AccessoryWidget[];
    /**
     * Input only. Parameters that a Chat app can use to configure how its response is posted.
     */
    actionResponse?: Schema$ActionResponse;
    /**
     * Output only. Annotations associated with the `text` in this message.
     */
    annotations?: Schema$Annotation[];
    /**
     * Output only. Plain-text body of the message with all Chat app mentions stripped out.
     */
    argumentText?: string | null;
    /**
     * Output only. GIF images that are attached to the message.
     */
    attachedGifs?: Schema$AttachedGif[];
    /**
     * User-uploaded attachment.
     */
    attachment?: Schema$Attachment[];
    /**
     * Deprecated: Use `cards_v2` instead. Rich, formatted, and interactive cards that you can use to display UI elements such as: formatted texts, buttons, and clickable images. Cards are normally displayed below the plain-text body of the message. `cards` and `cards_v2` can have a maximum size of 32 KB.
     */
    cards?: Schema$Card[];
    /**
     * An array of [cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards). Only Chat apps can create cards. If your Chat app [authenticates as a user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), the messages can't contain cards. To learn about cards and how to create them, see [Send card messages](https://developers.google.com/workspace/chat/create-messages#create). [Card builder](https://addons.gsuite.google.com/uikit/builder)
     */
    cardsV2?: Schema$CardWithId[];
    /**
     * Optional. A custom ID for the message. You can use field to identify a message, or to get, delete, or update a message. To set a custom ID, specify the [`messageId`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/create#body.QUERY_PARAMETERS.message_id) field when you create the message. For details, see [Name a message](https://developers.google.com/workspace/chat/create-messages#name_a_created_message).
     */
    clientAssignedMessageId?: string | null;
    /**
     * Optional. Immutable. For spaces created in Chat, the time at which the message was created. This field is output only, except when used in import mode spaces. For import mode spaces, set this field to the historical timestamp at which the message was created in the source in order to preserve the original creation time.
     */
    createTime?: string | null;
    /**
     * Output only. The time at which the message was deleted in Google Chat. If the message is never deleted, this field is empty.
     */
    deleteTime?: string | null;
    /**
     * Output only. Information about a deleted message. A message is deleted when `delete_time` is set.
     */
    deletionMetadata?: Schema$DeletionMetadata;
    /**
     * Output only. The list of emoji reaction summaries on the message.
     */
    emojiReactionSummaries?: Schema$EmojiReactionSummary[];
    /**
     * A plain-text description of the message's cards, used when the actual cards can't be displayed—for example, mobile notifications.
     */
    fallbackText?: string | null;
    /**
     * Output only. Contains the message `text` with markups added to communicate formatting. This field might not capture all formatting visible in the UI, but includes the following: * [Markup syntax](https://developers.google.com/workspace/chat/format-messages) for bold, italic, strikethrough, monospace, monospace block, and bulleted list. * [User mentions](https://developers.google.com/workspace/chat/format-messages#messages-@mention) using the format ``. * Custom hyperlinks using the format `<{url\}|{rendered_text\}\>` where the first string is the URL and the second is the rendered text—for example, ``. * Custom emoji using the format `:{emoji_name\}:`—for example, `:smile:`. This doesn't apply to Unicode emoji, such as `U+1F600` for a grinning face emoji. For more information, see [View text formatting sent in a message](https://developers.google.com/workspace/chat/format-messages#view_text_formatting_sent_in_a_message)
     */
    formattedText?: string | null;
    /**
     * Output only. The time at which the message was last edited by a user. If the message has never been edited, this field is empty.
     */
    lastUpdateTime?: string | null;
    /**
     * Output only. A URL in `spaces.messages.text` that matches a link preview pattern. For more information, see [Preview links](https://developers.google.com/workspace/chat/preview-links).
     */
    matchedUrl?: Schema$MatchedUrl;
    /**
     * Resource name of the message. Format: `spaces/{space\}/messages/{message\}` Where `{space\}` is the ID of the space where the message is posted and `{message\}` is a system-assigned ID for the message. For example, `spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB`. If you set a custom ID when you create a message, you can use this ID to specify the message in a request by replacing `{message\}` with the value from the `clientAssignedMessageId` field. For example, `spaces/AAAAAAAAAAA/messages/client-custom-name`. For details, see [Name a message](https://developers.google.com/workspace/chat/create-messages#name_a_created_message).
     */
    name?: string | null;
    /**
     * Immutable. Input for creating a message, otherwise output only. The user that can view the message. When set, the message is private and only visible to the specified user and the Chat app. Link previews and attachments aren't supported for private messages. Only Chat apps can send private messages. If your Chat app [authenticates as a user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) to send a message, the message can't be private and must omit this field. For details, see [Send private messages to Google Chat users](https://developers.google.com/workspace/chat/private-messages).
     */
    privateMessageViewer?: Schema$User;
    /**
     * Output only. Information about a message that's quoted by a Google Chat user in a space. Google Chat users can quote a message to reply to it.
     */
    quotedMessageMetadata?: Schema$QuotedMessageMetadata;
    /**
     * Output only. The user who created the message. If your Chat app [authenticates as a user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), the output populates the [user](https://developers.google.com/workspace/chat/api/reference/rest/v1/User) `name` and `type`.
     */
    sender?: Schema$User;
    /**
     * Output only. Slash command information, if applicable.
     */
    slashCommand?: Schema$SlashCommand;
    /**
     * If your Chat app [authenticates as a user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), the output populates the [space](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces) `name`.
     */
    space?: Schema$Space;
    /**
     * Plain-text body of the message. The first link to an image, video, or web page generates a [preview chip](https://developers.google.com/workspace/chat/preview-links). You can also [@mention a Google Chat user](https://developers.google.com/workspace/chat/format-messages#messages-@mention), or everyone in the space. To learn about creating text messages, see [Send a text message](https://developers.google.com/workspace/chat/create-messages#create-text-messages).
     */
    text?: string | null;
    /**
     * The thread the message belongs to. For example usage, see [Start or reply to a message thread](https://developers.google.com/workspace/chat/create-messages#create-message-thread).
     */
    thread?: Schema$Thread;
    /**
     * Output only. When `true`, the message is a response in a reply thread. When `false`, the message is visible in the space's top-level conversation as either the first message of a thread or a message with no threaded replies. If the space doesn't support reply in threads, this field is always `false`.
     */
    threadReply?: boolean | null;
  }
  /**
   * Event payload for multiple new messages. Event type: `google.workspace.chat.message.v1.batchCreated`
   */
  export interface Schema$MessageBatchCreatedEventData {
    /**
     * A list of new messages.
     */
    messages?: Schema$MessageCreatedEventData[];
  }
  /**
   * Event payload for multiple deleted messages. Event type: `google.workspace.chat.message.v1.batchDeleted`
   */
  export interface Schema$MessageBatchDeletedEventData {
    /**
     * A list of deleted messages.
     */
    messages?: Schema$MessageDeletedEventData[];
  }
  /**
   * Event payload for multiple updated messages. Event type: `google.workspace.chat.message.v1.batchUpdated`
   */
  export interface Schema$MessageBatchUpdatedEventData {
    /**
     * A list of updated messages.
     */
    messages?: Schema$MessageUpdatedEventData[];
  }
  /**
   * Event payload for a new message. Event type: `google.workspace.chat.message.v1.created`
   */
  export interface Schema$MessageCreatedEventData {
    /**
     * The new message.
     */
    message?: Schema$Message;
  }
  /**
   * Event payload for a deleted message. Event type: `google.workspace.chat.message.v1.deleted`
   */
  export interface Schema$MessageDeletedEventData {
    /**
     * The deleted message. Only the `name`, `createTime`, `deleteTime`, and `deletionMetadata` fields are populated.
     */
    message?: Schema$Message;
  }
  /**
   * Event payload for an updated message. Event type: `google.workspace.chat.message.v1.updated`
   */
  export interface Schema$MessageUpdatedEventData {
    /**
     * The updated message.
     */
    message?: Schema$Message;
  }
  /**
   * An `onclick` action (for example, open a link).
   */
  export interface Schema$OnClick {
    /**
     * A form action is triggered by this `onclick` action if specified.
     */
    action?: Schema$FormAction;
    /**
     * This `onclick` action triggers an open link action if specified.
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
   * Information about a quoted message.
   */
  export interface Schema$QuotedMessageMetadata {
    /**
     * Output only. The timestamp when the quoted message was created or when the quoted message was last updated.
     */
    lastUpdateTime?: string | null;
    /**
     * Output only. Resource name of the quoted message. Format: `spaces/{space\}/messages/{message\}`
     */
    name?: string | null;
  }
  /**
   * A reaction to a message.
   */
  export interface Schema$Reaction {
    /**
     * The emoji used in the reaction.
     */
    emoji?: Schema$Emoji;
    /**
     * The resource name of the reaction. Format: `spaces/{space\}/messages/{message\}/reactions/{reaction\}`
     */
    name?: string | null;
    /**
     * Output only. The user who created the reaction.
     */
    user?: Schema$User;
  }
  /**
   * Event payload for multiple new reactions. Event type: `google.workspace.chat.reaction.v1.batchCreated`
   */
  export interface Schema$ReactionBatchCreatedEventData {
    /**
     * A list of new reactions.
     */
    reactions?: Schema$ReactionCreatedEventData[];
  }
  /**
   * Event payload for multiple deleted reactions. Event type: `google.workspace.chat.reaction.v1.batchDeleted`
   */
  export interface Schema$ReactionBatchDeletedEventData {
    /**
     * A list of deleted reactions.
     */
    reactions?: Schema$ReactionDeletedEventData[];
  }
  /**
   * Event payload for a new reaction. Event type: `google.workspace.chat.reaction.v1.created`
   */
  export interface Schema$ReactionCreatedEventData {
    /**
     * The new reaction.
     */
    reaction?: Schema$Reaction;
  }
  /**
   * Event payload for a deleted reaction. Type: `google.workspace.chat.reaction.v1.deleted`
   */
  export interface Schema$ReactionDeletedEventData {
    /**
     * The deleted reaction.
     */
    reaction?: Schema$Reaction;
  }
  /**
   * A rich link to a resource.
   */
  export interface Schema$RichLinkMetadata {
    /**
     * Data for a drive link.
     */
    driveLinkData?: Schema$DriveLinkData;
    /**
     * The rich link type.
     */
    richLinkType?: string | null;
    /**
     * The URI of this link.
     */
    uri?: string | null;
  }
  /**
   * A section contains a collection of widgets that are rendered (vertically) in the order that they are specified. Across all platforms, cards have a narrow fixed width, so there's currently no need for layout properties (for example, float).
   */
  export interface Schema$Section {
    /**
     * The header of the section. Formatted text is supported. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/workspace/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting).
     */
    header?: string | null;
    /**
     * A section must contain at least one widget.
     */
    widgets?: Schema$WidgetMarkup[];
  }
  /**
   * List of widget autocomplete results.
   */
  export interface Schema$SelectionItems {
    /**
     * An array of the SelectionItem objects.
     */
    items?: Schema$GoogleAppsCardV1SelectionItem[];
  }
  /**
   * Request to create a space and add specified users to it.
   */
  export interface Schema$SetUpSpaceRequest {
    /**
     * Optional. The Google Chat users to invite to join the space. Omit the calling user, as they are added automatically. The set currently allows up to 20 memberships (in addition to the caller). The `Membership.member` field must contain a `user` with `name` populated (format: `users/{user\}`) and `type` set to `User.Type.HUMAN`. You can only add human users when setting up a space (adding Chat apps is only supported for direct message setup with the calling app). You can also add members using the user's email as an alias for {user\}. For example, the `user.name` can be `users/example@gmail.com`." To invite Gmail users or users from external Google Workspace domains, user's email must be used for `{user\}`. Optional when setting `Space.spaceType` to `SPACE`. Required when setting `Space.spaceType` to `GROUP_CHAT`, along with at least two memberships. Required when setting `Space.spaceType` to `DIRECT_MESSAGE` with a human user, along with exactly one membership. Must be empty when creating a 1:1 conversation between a human and the calling Chat app (when setting `Space.spaceType` to `DIRECT_MESSAGE` and `Space.singleUserBotDm` to `true`).
     */
    memberships?: Schema$Membership[];
    /**
     * Optional. A unique identifier for this request. A random UUID is recommended. Specifying an existing request ID returns the space created with that ID instead of creating a new space. Specifying an existing request ID from the same Chat app with a different authenticated user returns an error.
     */
    requestId?: string | null;
    /**
     * Required. The `Space.spaceType` field is required. To create a space, set `Space.spaceType` to `SPACE` and set `Space.displayName`. If you receive the error message `ALREADY_EXISTS` when setting up a space, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name. To create a group chat, set `Space.spaceType` to `GROUP_CHAT`. Don't set `Space.displayName`. To create a 1:1 conversation between humans, set `Space.spaceType` to `DIRECT_MESSAGE` and set `Space.singleUserBotDm` to `false`. Don't set `Space.displayName` or `Space.spaceDetails`. To create an 1:1 conversation between a human and the calling Chat app, set `Space.spaceType` to `DIRECT_MESSAGE` and `Space.singleUserBotDm` to `true`. Don't set `Space.displayName` or `Space.spaceDetails`. If a `DIRECT_MESSAGE` space already exists, that space is returned instead of creating a new space.
     */
    space?: Schema$Space;
  }
  /**
   * A [slash command](https://developers.google.com/workspace/chat/slash-commands) in Google Chat.
   */
  export interface Schema$SlashCommand {
    /**
     * The ID of the slash command invoked.
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
     * The command ID of the invoked slash command.
     */
    commandId?: string | null;
    /**
     * The name of the invoked slash command.
     */
    commandName?: string | null;
    /**
     * Indicates whether the slash command is for a dialog.
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
     * Optional. Immutable. For spaces created in Chat, the time the space was created. This field is output only, except when used in import mode spaces. For import mode spaces, set this field to the historical timestamp at which the space was created in the source in order to preserve the original creation time. Only populated in the output when `spaceType` is `GROUP_CHAT` or `SPACE`.
     */
    createTime?: string | null;
    /**
     * The space's display name. Required when [creating a space](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/create). If you receive the error message `ALREADY_EXISTS` when creating a space or updating the `displayName`, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name. For direct messages, this field might be empty. Supports up to 128 characters.
     */
    displayName?: string | null;
    /**
     * Immutable. Whether this space permits any Google Chat user as a member. Input when creating a space in a Google Workspace organization. Omit this field when creating spaces in the following conditions: * The authenticated user uses a consumer account (unmanaged user account). By default, a space created by a consumer account permits any Google Chat user. * The space is used to [import data to Google Chat] (https://developers.google.com/chat/api/guides/import-data-overview) because import mode spaces must only permit members from the same Google Workspace organization. However, as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), import mode spaces can permit any Google Chat user so this field can then be set for import mode spaces. For existing spaces, this field is output only.
     */
    externalUserAllowed?: boolean | null;
    /**
     * Optional. Whether this space is created in `Import Mode` as part of a data migration into Google Workspace. While spaces are being imported, they aren't visible to users until the import is complete.
     */
    importMode?: boolean | null;
    /**
     * Resource name of the space. Format: `spaces/{space\}`
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
     * The message history state for messages and threads in this space.
     */
    spaceHistoryState?: string | null;
    /**
     * Output only. The threading state in the Chat space.
     */
    spaceThreadingState?: string | null;
    /**
     * The type of space. Required when creating a space or updating the space type of a space. Output only for other usage.
     */
    spaceType?: string | null;
    /**
     * Output only. Deprecated: Use `spaceThreadingState` instead. Whether messages are threaded in this space.
     */
    threaded?: boolean | null;
    /**
     * Output only. Deprecated: Use `space_type` instead. The type of a space.
     */
    type?: string | null;
  }
  /**
   * Event payload for multiple updates to a space. Event type: `google.workspace.chat.space.v1.batchUpdated`
   */
  export interface Schema$SpaceBatchUpdatedEventData {
    /**
     * A list of updated spaces.
     */
    spaces?: Schema$SpaceUpdatedEventData[];
  }
  /**
   * A data source that populates Google Chat spaces as selection items for a multiselect menu. Only populates spaces that the user is a member of. [Google Chat apps](https://developers.google.com/workspace/chat):
   */
  export interface Schema$SpaceDataSource {
    /**
     * If set to `true`, the multiselect menu selects the current Google Chat space as an item by default.
     */
    defaultToCurrentSpace?: boolean | null;
  }
  /**
   * Details about the space including description and rules.
   */
  export interface Schema$SpaceDetails {
    /**
     * Optional. A description of the space. For example, describe the space's discussion topic, functional purpose, or participants. Supports up to 150 characters.
     */
    description?: string | null;
    /**
     * Optional. The space's rules, expectations, and etiquette. Supports up to 5,000 characters.
     */
    guidelines?: string | null;
  }
  /**
   * An event that represents a change or activity in a Google Chat space. To learn more, see [Work with events from Google Chat](https://developers.google.com/workspace/chat/events-overview).
   */
  export interface Schema$SpaceEvent {
    /**
     * Time when the event occurred.
     */
    eventTime?: string | null;
    /**
     * Type of space event. Each event type has a batch version, which represents multiple instances of the event type that occur in a short period of time. For `spaceEvents.list()` requests, omit batch event types in your query filter. By default, the server returns both event type and its batch version. Supported event types for [messages](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages): * New message: `google.workspace.chat.message.v1.created` * Updated message: `google.workspace.chat.message.v1.updated` * Deleted message: `google.workspace.chat.message.v1.deleted` * Multiple new messages: `google.workspace.chat.message.v1.batchCreated` * Multiple updated messages: `google.workspace.chat.message.v1.batchUpdated` * Multiple deleted messages: `google.workspace.chat.message.v1.batchDeleted` Supported event types for [memberships](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members): * New membership: `google.workspace.chat.membership.v1.created` * Updated membership: `google.workspace.chat.membership.v1.updated` * Deleted membership: `google.workspace.chat.membership.v1.deleted` * Multiple new memberships: `google.workspace.chat.membership.v1.batchCreated` * Multiple updated memberships: `google.workspace.chat.membership.v1.batchUpdated` * Multiple deleted memberships: `google.workspace.chat.membership.v1.batchDeleted` Supported event types for [reactions](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions): * New reaction: `google.workspace.chat.reaction.v1.created` * Deleted reaction: `google.workspace.chat.reaction.v1.deleted` * Multiple new reactions: `google.workspace.chat.reaction.v1.batchCreated` * Multiple deleted reactions: `google.workspace.chat.reaction.v1.batchDeleted` Supported event types about the [space](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces): * Updated space: `google.workspace.chat.space.v1.updated` * Multiple space updates: `google.workspace.chat.space.v1.batchUpdated`
     */
    eventType?: string | null;
    /**
     * Event payload for multiple new memberships. Event type: `google.workspace.chat.membership.v1.batchCreated`
     */
    membershipBatchCreatedEventData?: Schema$MembershipBatchCreatedEventData;
    /**
     * Event payload for multiple deleted memberships. Event type: `google.workspace.chat.membership.v1.batchDeleted`
     */
    membershipBatchDeletedEventData?: Schema$MembershipBatchDeletedEventData;
    /**
     * Event payload for multiple updated memberships. Event type: `google.workspace.chat.membership.v1.batchUpdated`
     */
    membershipBatchUpdatedEventData?: Schema$MembershipBatchUpdatedEventData;
    /**
     * Event payload for a new membership. Event type: `google.workspace.chat.membership.v1.created`
     */
    membershipCreatedEventData?: Schema$MembershipCreatedEventData;
    /**
     * Event payload for a deleted membership. Event type: `google.workspace.chat.membership.v1.deleted`
     */
    membershipDeletedEventData?: Schema$MembershipDeletedEventData;
    /**
     * Event payload for an updated membership. Event type: `google.workspace.chat.membership.v1.updated`
     */
    membershipUpdatedEventData?: Schema$MembershipUpdatedEventData;
    /**
     * Event payload for multiple new messages. Event type: `google.workspace.chat.message.v1.batchCreated`
     */
    messageBatchCreatedEventData?: Schema$MessageBatchCreatedEventData;
    /**
     * Event payload for multiple deleted messages. Event type: `google.workspace.chat.message.v1.batchDeleted`
     */
    messageBatchDeletedEventData?: Schema$MessageBatchDeletedEventData;
    /**
     * Event payload for multiple updated messages. Event type: `google.workspace.chat.message.v1.batchUpdated`
     */
    messageBatchUpdatedEventData?: Schema$MessageBatchUpdatedEventData;
    /**
     * Event payload for a new message. Event type: `google.workspace.chat.message.v1.created`
     */
    messageCreatedEventData?: Schema$MessageCreatedEventData;
    /**
     * Event payload for a deleted message. Event type: `google.workspace.chat.message.v1.deleted`
     */
    messageDeletedEventData?: Schema$MessageDeletedEventData;
    /**
     * Event payload for an updated message. Event type: `google.workspace.chat.message.v1.updated`
     */
    messageUpdatedEventData?: Schema$MessageUpdatedEventData;
    /**
     * Resource name of the space event. Format: `spaces/{space\}/spaceEvents/{spaceEvent\}`
     */
    name?: string | null;
    /**
     * Event payload for multiple new reactions. Event type: `google.workspace.chat.reaction.v1.batchCreated`
     */
    reactionBatchCreatedEventData?: Schema$ReactionBatchCreatedEventData;
    /**
     * Event payload for multiple deleted reactions. Event type: `google.workspace.chat.reaction.v1.batchDeleted`
     */
    reactionBatchDeletedEventData?: Schema$ReactionBatchDeletedEventData;
    /**
     * Event payload for a new reaction. Event type: `google.workspace.chat.reaction.v1.created`
     */
    reactionCreatedEventData?: Schema$ReactionCreatedEventData;
    /**
     * Event payload for a deleted reaction. Event type: `google.workspace.chat.reaction.v1.deleted`
     */
    reactionDeletedEventData?: Schema$ReactionDeletedEventData;
    /**
     * Event payload for multiple updates to a space. Event type: `google.workspace.chat.space.v1.batchUpdated`
     */
    spaceBatchUpdatedEventData?: Schema$SpaceBatchUpdatedEventData;
    /**
     * Event payload for a space update. Event type: `google.workspace.chat.space.v1.updated`
     */
    spaceUpdatedEventData?: Schema$SpaceUpdatedEventData;
  }
  /**
   * A user's read state within a space, used to identify read and unread messages.
   */
  export interface Schema$SpaceReadState {
    /**
     * Optional. The time when the user's space read state was updated. Usually this corresponds with either the timestamp of the last read message, or a timestamp specified by the user to mark the last read position in a space.
     */
    lastReadTime?: string | null;
    /**
     * Resource name of the space read state. Format: `users/{user\}/spaces/{space\}/spaceReadState`
     */
    name?: string | null;
  }
  /**
   * Event payload for an updated space. Event type: `google.workspace.chat.space.v1.updated`
   */
  export interface Schema$SpaceUpdatedEventData {
    /**
     * The updated space.
     */
    space?: Schema$Space;
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
     * An list of strings entered by the user.
     */
    value?: string[] | null;
  }
  /**
   * A button with text and `onclick` action.
   */
  export interface Schema$TextButton {
    /**
     * The `onclick` action of the button.
     */
    onClick?: Schema$OnClick;
    /**
     * The text of the button.
     */
    text?: string | null;
  }
  /**
   * A paragraph of text. Formatted text supported. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/workspace/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting).
   */
  export interface Schema$TextParagraph {
    text?: string | null;
  }
  /**
   * A thread in a Google Chat space. For example usage, see [Start or reply to a message thread](https://developers.google.com/workspace/chat/create-messages#create-message-thread). If you specify a thread when creating a message, you can set the [`messageReplyOption`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/create#messagereplyoption) field to determine what happens if no matching thread is found.
   */
  export interface Schema$Thread {
    /**
     * Output only. Resource name of the thread. Example: `spaces/{space\}/threads/{thread\}`
     */
    name?: string | null;
    /**
     * Optional. Input for creating or updating a thread. Otherwise, output only. ID for the thread. Supports up to 4000 characters. This ID is unique to the Chat app that sets it. For example, if multiple Chat apps create a message using the same thread key, the messages are posted in different threads. To reply in a thread created by a person or another Chat app, specify the thread `name` field instead.
     */
    threadKey?: string | null;
  }
  /**
   * A user's read state within a thread, used to identify read and unread messages.
   */
  export interface Schema$ThreadReadState {
    /**
     * The time when the user's thread read state was updated. Usually this corresponds with the timestamp of the last read message in a thread.
     */
    lastReadTime?: string | null;
    /**
     * Resource name of the thread read state. Format: `users/{user\}/spaces/{space\}/threads/{thread\}/threadReadState`
     */
    name?: string | null;
  }
  /**
   * Time input values.
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
   * The timezone ID and offset from Coordinated Universal Time (UTC). Only supported for the event types [`CARD_CLICKED`](https://developers.google.com/chat/api/reference/rest/v1/EventType#ENUM_VALUES.CARD_CLICKED) and [`SUBMIT_DIALOG`](https://developers.google.com/chat/api/reference/rest/v1/DialogEventType#ENUM_VALUES.SUBMIT_DIALOG).
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
   * The response of the updated widget. Used to provide autocomplete options for a widget.
   */
  export interface Schema$UpdatedWidget {
    /**
     * List of widget autocomplete results
     */
    suggestions?: Schema$SelectionItems;
    /**
     * The ID of the updated widget. The ID must match the one for the widget that triggered the update request.
     */
    widget?: string | null;
  }
  /**
   * Request to upload an attachment.
   */
  export interface Schema$UploadAttachmentRequest {
    /**
     * Required. The filename of the attachment, including the file extension.
     */
    filename?: string | null;
  }
  /**
   * Response of uploading an attachment.
   */
  export interface Schema$UploadAttachmentResponse {
    /**
     * Reference to the uploaded attachment.
     */
    attachmentDataRef?: Schema$AttachmentDataRef;
  }
  /**
   * A user in Google Chat. When returned as an output from a request, if your Chat app [authenticates as a user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), the output for a `User` resource only populates the user's `name` and `type`.
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
     * Resource name for a Google Chat user. Format: `users/{user\}`. `users/app` can be used as an alias for the calling app bot user. For human users, `{user\}` is the same user identifier as: - the `id` for the [Person](https://developers.google.com/people/api/rest/v1/people) in the People API. For example, `users/123456789` in Chat API represents the same person as the `123456789` Person profile ID in People API. - the `id` for a [user](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users) in the Admin SDK Directory API. - the user's email address can be used as an alias for `{user\}` in API requests. For example, if the People API Person profile ID for `user@example.com` is `123456789`, you can use `users/user@example.com` as an alias to reference `users/123456789`. Only the canonical resource name (for example `users/123456789`) will be returned from the API.
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
   * A widget is a UI element that presents text and images.
   */
  export interface Schema$WidgetMarkup {
    /**
     * A list of buttons. Buttons is also `oneof data` and only one of these fields should be set.
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
            apiVersion: '',
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

    /**
     * Uploads an attachment. For an example, see [Upload media as a file attachment](https://developers.google.com/workspace/chat/upload-media-attachments). Requires user [authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user). You can upload attachments up to 200 MB. Certain file types aren't supported. For details, see [File types blocked by Google Chat](https://support.google.com/chat/answer/7651457?&co=GENIE.Platform%3DDesktop#File%20types%20blocked%20in%20Google%20Chat).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    upload(
      params: Params$Resource$Media$Upload,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    upload(
      params?: Params$Resource$Media$Upload,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UploadAttachmentResponse>;
    upload(
      params: Params$Resource$Media$Upload,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    upload(
      params: Params$Resource$Media$Upload,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$UploadAttachmentResponse>,
      callback: BodyResponseCallback<Schema$UploadAttachmentResponse>
    ): void;
    upload(
      params: Params$Resource$Media$Upload,
      callback: BodyResponseCallback<Schema$UploadAttachmentResponse>
    ): void;
    upload(
      callback: BodyResponseCallback<Schema$UploadAttachmentResponse>
    ): void;
    upload(
      paramsOrCallback?:
        | Params$Resource$Media$Upload
        | BodyResponseCallback<Schema$UploadAttachmentResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UploadAttachmentResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UploadAttachmentResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$UploadAttachmentResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Media$Upload;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Media$Upload;
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
            url: (rootUrl + '/v1/{+parent}/attachments:upload').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/v1/{+parent}/attachments:upload').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UploadAttachmentResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UploadAttachmentResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Media$Download extends StandardParameters {
    /**
     * Name of the media that is being downloaded. See ReadRequest.resource_name.
     */
    resourceName?: string;
  }
  export interface Params$Resource$Media$Upload extends StandardParameters {
    /**
     * Required. Resource name of the Chat space in which the attachment is uploaded. Format "spaces/{space\}".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UploadAttachmentRequest;

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

  export class Resource$Spaces {
    context: APIRequestContext;
    members: Resource$Spaces$Members;
    messages: Resource$Spaces$Messages;
    spaceEvents: Resource$Spaces$Spaceevents;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.members = new Resource$Spaces$Members(this.context);
      this.messages = new Resource$Spaces$Messages(this.context);
      this.spaceEvents = new Resource$Spaces$Spaceevents(this.context);
    }

    /**
     * Completes the [import process](https://developers.google.com/workspace/chat/import-data) for the specified space and makes it visible to users. Requires app authentication and domain-wide delegation. For more information, see [Authorize Google Chat apps to import data](https://developers.google.com/workspace/chat/authorize-import).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    completeImport(
      params: Params$Resource$Spaces$Completeimport,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    completeImport(
      params?: Params$Resource$Spaces$Completeimport,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CompleteImportSpaceResponse>;
    completeImport(
      params: Params$Resource$Spaces$Completeimport,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    completeImport(
      params: Params$Resource$Spaces$Completeimport,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CompleteImportSpaceResponse>,
      callback: BodyResponseCallback<Schema$CompleteImportSpaceResponse>
    ): void;
    completeImport(
      params: Params$Resource$Spaces$Completeimport,
      callback: BodyResponseCallback<Schema$CompleteImportSpaceResponse>
    ): void;
    completeImport(
      callback: BodyResponseCallback<Schema$CompleteImportSpaceResponse>
    ): void;
    completeImport(
      paramsOrCallback?:
        | Params$Resource$Spaces$Completeimport
        | BodyResponseCallback<Schema$CompleteImportSpaceResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CompleteImportSpaceResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CompleteImportSpaceResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$CompleteImportSpaceResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Spaces$Completeimport;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spaces$Completeimport;
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
            url: (rootUrl + '/v1/{+name}:completeImport').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CompleteImportSpaceResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CompleteImportSpaceResponse>(parameters);
      }
    }

    /**
     * Creates a named space. Spaces grouped by topics aren't supported. For an example, see [Create a space](https://developers.google.com/workspace/chat/create-spaces). If you receive the error message `ALREADY_EXISTS` when creating a space, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name. Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Spaces$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Spaces$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Space>;
    create(
      params: Params$Resource$Spaces$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Spaces$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Space>,
      callback: BodyResponseCallback<Schema$Space>
    ): void;
    create(
      params: Params$Resource$Spaces$Create,
      callback: BodyResponseCallback<Schema$Space>
    ): void;
    create(callback: BodyResponseCallback<Schema$Space>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Spaces$Create
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
      let params = (paramsOrCallback || {}) as Params$Resource$Spaces$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spaces$Create;
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
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
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
     * Deletes a named space. Always performs a cascading delete, which means that the space's child resources—like messages posted in the space and memberships in the space—are also deleted. For an example, see [Delete a space](https://developers.google.com/workspace/chat/delete-spaces). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) from a user who has permission to delete the space.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Spaces$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Spaces$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Spaces$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Spaces$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Spaces$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Spaces$Delete
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
      let params = (paramsOrCallback || {}) as Params$Resource$Spaces$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spaces$Delete;
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
            apiVersion: '',
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
     * Returns the existing direct message with the specified user. If no direct message space is found, returns a `404 NOT_FOUND` error. For an example, see [Find a direct message](/chat/api/guides/v1/spaces/find-direct-message). With [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), returns the direct message space between the specified user and the authenticated user. With [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app), returns the direct message space between the specified user and the calling Chat app. Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) or [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    findDirectMessage(
      params: Params$Resource$Spaces$Finddirectmessage,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    findDirectMessage(
      params?: Params$Resource$Spaces$Finddirectmessage,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Space>;
    findDirectMessage(
      params: Params$Resource$Spaces$Finddirectmessage,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    findDirectMessage(
      params: Params$Resource$Spaces$Finddirectmessage,
      options: MethodOptions | BodyResponseCallback<Schema$Space>,
      callback: BodyResponseCallback<Schema$Space>
    ): void;
    findDirectMessage(
      params: Params$Resource$Spaces$Finddirectmessage,
      callback: BodyResponseCallback<Schema$Space>
    ): void;
    findDirectMessage(callback: BodyResponseCallback<Schema$Space>): void;
    findDirectMessage(
      paramsOrCallback?:
        | Params$Resource$Spaces$Finddirectmessage
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Spaces$Finddirectmessage;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spaces$Finddirectmessage;
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
            url: (rootUrl + '/v1/spaces:findDirectMessage').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
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
     * Returns details about a space. For an example, see [Get details about a space](https://developers.google.com/workspace/chat/get-spaces). Requires [authentication](https://developers.google.com/workspace/chat/authenticate-authorize). Supports [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) and [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
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
            apiVersion: '',
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
     * Lists spaces the caller is a member of. Group chats and DMs aren't listed until the first message is sent. For an example, see [List spaces](https://developers.google.com/workspace/chat/list-spaces). Requires [authentication](https://developers.google.com/workspace/chat/authenticate-authorize). Supports [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) and [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user). Lists spaces visible to the caller or authenticated user. Group chats and DMs aren't listed until the first message is sent.
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
            apiVersion: '',
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
     * Updates a space. For an example, see [Update a space](https://developers.google.com/workspace/chat/update-spaces). If you're updating the `displayName` field and receive the error message `ALREADY_EXISTS`, try a different display name.. An existing space within the Google Workspace organization might already use this display name. Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Spaces$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Spaces$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Space>;
    patch(
      params: Params$Resource$Spaces$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Spaces$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Space>,
      callback: BodyResponseCallback<Schema$Space>
    ): void;
    patch(
      params: Params$Resource$Spaces$Patch,
      callback: BodyResponseCallback<Schema$Space>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Space>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Spaces$Patch
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
      let params = (paramsOrCallback || {}) as Params$Resource$Spaces$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spaces$Patch;
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
            apiVersion: '',
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
     * Creates a space and adds specified users to it. The calling user is automatically added to the space, and shouldn't be specified as a membership in the request. For an example, see [Set up a space with initial members](https://developers.google.com/workspace/chat/set-up-spaces). To specify the human members to add, add memberships with the appropriate `member.name` in the `SetUpSpaceRequest`. To add a human user, use `users/{user\}`, where `{user\}` can be the email address for the user. For users in the same Workspace organization `{user\}` can also be the `id` for the person from the People API, or the `id` for the user in the Directory API. For example, if the People API Person profile ID for `user@example.com` is `123456789`, you can add the user to the space by setting the `membership.member.name` to `users/user@example.com` or `users/123456789`. For a space or group chat, if the caller blocks or is blocked by some members, then those members aren't added to the created space. To create a direct message (DM) between the calling user and another human user, specify exactly one membership to represent the human user. If one user blocks the other, the request fails and the DM isn't created. To create a DM between the calling user and the calling app, set `Space.singleUserBotDm` to `true` and don't specify any memberships. You can only use this method to set up a DM with the calling app. To add the calling app as a member of a space or an existing DM between two human users, see [Invite or add a user or app to a space](https://developers.google.com/workspace/chat/create-members). If a DM already exists between two users, even when one user blocks the other at the time a request is made, then the existing DM is returned. Spaces with threaded replies aren't supported. If you receive the error message `ALREADY_EXISTS` when setting up a space, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name. Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setup(
      params: Params$Resource$Spaces$Setup,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setup(
      params?: Params$Resource$Spaces$Setup,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Space>;
    setup(
      params: Params$Resource$Spaces$Setup,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setup(
      params: Params$Resource$Spaces$Setup,
      options: MethodOptions | BodyResponseCallback<Schema$Space>,
      callback: BodyResponseCallback<Schema$Space>
    ): void;
    setup(
      params: Params$Resource$Spaces$Setup,
      callback: BodyResponseCallback<Schema$Space>
    ): void;
    setup(callback: BodyResponseCallback<Schema$Space>): void;
    setup(
      paramsOrCallback?:
        | Params$Resource$Spaces$Setup
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
      let params = (paramsOrCallback || {}) as Params$Resource$Spaces$Setup;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spaces$Setup;
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
            url: (rootUrl + '/v1/spaces:setup').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
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
  }

  export interface Params$Resource$Spaces$Completeimport
    extends StandardParameters {
    /**
     * Required. Resource name of the import mode space. Format: `spaces/{space\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CompleteImportSpaceRequest;
  }
  export interface Params$Resource$Spaces$Create extends StandardParameters {
    /**
     * Optional. A unique identifier for this request. A random UUID is recommended. Specifying an existing request ID returns the space created with that ID instead of creating a new space. Specifying an existing request ID from the same Chat app with a different authenticated user returns an error.
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Space;
  }
  export interface Params$Resource$Spaces$Delete extends StandardParameters {
    /**
     * Required. Resource name of the space to delete. Format: `spaces/{space\}`
     */
    name?: string;
  }
  export interface Params$Resource$Spaces$Finddirectmessage
    extends StandardParameters {
    /**
     * Required. Resource name of the user to find direct message with. Format: `users/{user\}`, where `{user\}` is either the `id` for the [person](https://developers.google.com/people/api/rest/v1/people) from the People API, or the `id` for the [user](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users) in the Directory API. For example, if the People API profile ID is `123456789`, you can find a direct message with that person by using `users/123456789` as the `name`. When [authenticated as a user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), you can use the email as an alias for `{user\}`. For example, `users/example@gmail.com` where `example@gmail.com` is the email of the Google Chat user.
     */
    name?: string;
  }
  export interface Params$Resource$Spaces$Get extends StandardParameters {
    /**
     * Required. Resource name of the space, in the form "spaces/x". Format: `spaces/{space\}`
     */
    name?: string;
  }
  export interface Params$Resource$Spaces$List extends StandardParameters {
    /**
     * Optional. A query filter. You can filter spaces by the space type ([`space_type`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces#spacetype)). To filter by space type, you must specify valid enum value, such as `SPACE` or `GROUP_CHAT` (the `space_type` can't be `SPACE_TYPE_UNSPECIFIED`). To query for multiple space types, use the `OR` operator. For example, the following queries are valid: ``` space_type = "SPACE" spaceType = "GROUP_CHAT" OR spaceType = "DIRECT_MESSAGE" ``` Invalid queries are rejected by the server with an `INVALID_ARGUMENT` error.
     */
    filter?: string;
    /**
     * Optional. The maximum number of spaces to return. The service might return fewer than this value. If unspecified, at most 100 spaces are returned. The maximum value is 1000. If you use a value more than 1000, it's automatically changed to 1000. Negative values return an `INVALID_ARGUMENT` error.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous list spaces call. Provide this parameter to retrieve the subsequent page. When paginating, the filter value should match the call that provided the page token. Passing a different value may lead to unexpected results.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Spaces$Patch extends StandardParameters {
    /**
     * Resource name of the space. Format: `spaces/{space\}`
     */
    name?: string;
    /**
     * Required. The updated field paths, comma separated if there are multiple. Currently supported field paths: - `display_name` (Only supports changing the display name of a space with the `SPACE` type, or when also including the `space_type` mask to change a `GROUP_CHAT` space type to `SPACE`. Trying to update the display name of a `GROUP_CHAT` or a `DIRECT_MESSAGE` space results in an invalid argument error. If you receive the error message `ALREADY_EXISTS` when updating the `displayName`, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name.) - `space_type` (Only supports changing a `GROUP_CHAT` space type to `SPACE`. Include `display_name` together with `space_type` in the update mask and ensure that the specified space has a non-empty display name and the `SPACE` space type. Including the `space_type` mask and the `SPACE` type in the specified space when updating the display name is optional if the existing space already has the `SPACE` type. Trying to update the space type in other ways results in an invalid argument error). - `space_details` - `space_history_state` (Supports [turning history on or off for the space](https://support.google.com/chat/answer/7664687) if [the organization allows users to change their history setting](https://support.google.com/a/answer/7664184). Warning: mutually exclusive with all other field paths.) - Developer Preview: `access_settings.audience` (Supports changing the [access setting](https://support.google.com/chat/answer/11971020) of a space. If no audience is specified in the access setting, the space's access setting is updated to restricted. Warning: mutually exclusive with all other field paths.)
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Space;
  }
  export interface Params$Resource$Spaces$Setup extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$SetUpSpaceRequest;
  }

  export class Resource$Spaces$Members {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a human membership or app membership for the calling app. Creating memberships for other apps isn't supported. For an example, see [Invite or add a user or a Google Chat app to a space](https://developers.google.com/workspace/chat/create-members). When creating a membership, if the specified member has their auto-accept policy turned off, then they're invited, and must accept the space invitation before joining. Otherwise, creating a membership adds the member directly to the specified space. Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user). To specify the member to add, set the `membership.member.name` in the `CreateMembershipRequest`: - To add the calling app to a space or a direct message between two human users, use `users/app`. Unable to add other apps to the space. - To add a human user, use `users/{user\}`, where `{user\}` can be the email address for the user. For users in the same Workspace organization `{user\}` can also be the `id` for the person from the People API, or the `id` for the user in the Directory API. For example, if the People API Person profile ID for `user@example.com` is `123456789`, you can add the user to the space by setting the `membership.member.name` to `users/user@example.com` or `users/123456789`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Spaces$Members$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Spaces$Members$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Membership>;
    create(
      params: Params$Resource$Spaces$Members$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Spaces$Members$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Membership>,
      callback: BodyResponseCallback<Schema$Membership>
    ): void;
    create(
      params: Params$Resource$Spaces$Members$Create,
      callback: BodyResponseCallback<Schema$Membership>
    ): void;
    create(callback: BodyResponseCallback<Schema$Membership>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Spaces$Members$Create
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
        {}) as Params$Resource$Spaces$Members$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spaces$Members$Create;
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
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
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
     * Deletes a membership. For an example, see [Remove a user or a Google Chat app from a space](https://developers.google.com/workspace/chat/delete-members). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Spaces$Members$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Spaces$Members$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Membership>;
    delete(
      params: Params$Resource$Spaces$Members$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Spaces$Members$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Membership>,
      callback: BodyResponseCallback<Schema$Membership>
    ): void;
    delete(
      params: Params$Resource$Spaces$Members$Delete,
      callback: BodyResponseCallback<Schema$Membership>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Membership>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Spaces$Members$Delete
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
        {}) as Params$Resource$Spaces$Members$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spaces$Members$Delete;
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
            apiVersion: '',
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
     * Returns details about a membership. For an example, see [Get details about a user's or Google Chat app's membership](https://developers.google.com/workspace/chat/get-members). Requires [authentication](https://developers.google.com/workspace/chat/authenticate-authorize). Supports [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) and [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
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
            apiVersion: '',
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
     * Lists memberships in a space. For an example, see [List users and Google Chat apps in a space](https://developers.google.com/workspace/chat/list-members). Listing memberships with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) lists memberships in spaces that the Chat app has access to, but excludes Chat app memberships, including its own. Listing memberships with [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) lists memberships in spaces that the authenticated user has access to. Requires [authentication](https://developers.google.com/workspace/chat/authenticate-authorize). Supports [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) and [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
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
            apiVersion: '',
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

    /**
     * Updates a membership. Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Spaces$Members$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Spaces$Members$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Membership>;
    patch(
      params: Params$Resource$Spaces$Members$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Spaces$Members$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Membership>,
      callback: BodyResponseCallback<Schema$Membership>
    ): void;
    patch(
      params: Params$Resource$Spaces$Members$Patch,
      callback: BodyResponseCallback<Schema$Membership>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Membership>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Spaces$Members$Patch
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
        {}) as Params$Resource$Spaces$Members$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spaces$Members$Patch;
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
            apiVersion: '',
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
  }

  export interface Params$Resource$Spaces$Members$Create
    extends StandardParameters {
    /**
     * Required. The resource name of the space for which to create the membership. Format: spaces/{space\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Membership;
  }
  export interface Params$Resource$Spaces$Members$Delete
    extends StandardParameters {
    /**
     * Required. Resource name of the membership to delete. Chat apps can delete human users' or their own memberships. Chat apps can't delete other apps' memberships. When deleting a human membership, requires the `chat.memberships` scope and `spaces/{space\}/members/{member\}` format. You can use the email as an alias for `{member\}`. For example, `spaces/{space\}/members/example@gmail.com` where `example@gmail.com` is the email of the Google Chat user. When deleting an app membership, requires the `chat.memberships.app` scope and `spaces/{space\}/members/app` format. Format: `spaces/{space\}/members/{member\}` or `spaces/{space\}/members/app`.
     */
    name?: string;
  }
  export interface Params$Resource$Spaces$Members$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the membership to retrieve. To get the app's own membership [by using user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), you can optionally use `spaces/{space\}/members/app`. Format: `spaces/{space\}/members/{member\}` or `spaces/{space\}/members/app` When [authenticated as a user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), you can use the user's email as an alias for `{member\}`. For example, `spaces/{space\}/members/example@gmail.com` where `example@gmail.com` is the email of the Google Chat user.
     */
    name?: string;
  }
  export interface Params$Resource$Spaces$Members$List
    extends StandardParameters {
    /**
     * Optional. A query filter. You can filter memberships by a member's role ([`role`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members#membershiprole)) and type ([`member.type`](https://developers.google.com/workspace/chat/api/reference/rest/v1/User#type)). To filter by role, set `role` to `ROLE_MEMBER` or `ROLE_MANAGER`. To filter by type, set `member.type` to `HUMAN` or `BOT`. To filter by both role and type, use the `AND` operator. To filter by either role or type, use the `OR` operator. For example, the following queries are valid: ``` role = "ROLE_MANAGER" OR role = "ROLE_MEMBER" member.type = "HUMAN" AND role = "ROLE_MANAGER" ``` The following queries are invalid: ``` member.type = "HUMAN" AND member.type = "BOT" role = "ROLE_MANAGER" AND role = "ROLE_MEMBER" ``` Invalid queries are rejected by the server with an `INVALID_ARGUMENT` error.
     */
    filter?: string;
    /**
     * Optional. The maximum number of memberships to return. The service might return fewer than this value. If unspecified, at most 100 memberships are returned. The maximum value is 1000. If you use a value more than 1000, it's automatically changed to 1000. Negative values return an `INVALID_ARGUMENT` error.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous call to list memberships. Provide this parameter to retrieve the subsequent page. When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the space for which to fetch a membership list. Format: spaces/{space\}
     */
    parent?: string;
    /**
     * Optional. When `true`, also returns memberships associated with a Google Group, in addition to other types of memberships. If a filter is set, Google Group memberships that don't match the filter criteria aren't returned.
     */
    showGroups?: boolean;
    /**
     * Optional. When `true`, also returns memberships associated with invited members, in addition to other types of memberships. If a filter is set, invited memberships that don't match the filter criteria aren't returned. Currently requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
     */
    showInvited?: boolean;
  }
  export interface Params$Resource$Spaces$Members$Patch
    extends StandardParameters {
    /**
     * Resource name of the membership, assigned by the server. Format: `spaces/{space\}/members/{member\}`
     */
    name?: string;
    /**
     * Required. The field paths to update. Separate multiple values with commas or use `*` to update all field paths. Currently supported field paths: - `role`
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Membership;
  }

  export class Resource$Spaces$Messages {
    context: APIRequestContext;
    attachments: Resource$Spaces$Messages$Attachments;
    reactions: Resource$Spaces$Messages$Reactions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.attachments = new Resource$Spaces$Messages$Attachments(this.context);
      this.reactions = new Resource$Spaces$Messages$Reactions(this.context);
    }

    /**
     * Creates a message in a Google Chat space. The maximum message size, including text and cards, is 32,000 bytes. For an example, see [Send a message](https://developers.google.com/workspace/chat/create-messages). Calling this method requires [authentication](https://developers.google.com/workspace/chat/authenticate-authorize) and supports the following authentication types: - For text messages, user authentication or app authentication are supported. - For card messages, only app authentication is supported. (Only Chat apps can create card messages.)
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
            apiVersion: '',
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
     * Deletes a message. For an example, see [Delete a message](https://developers.google.com/workspace/chat/delete-messages). Requires [authentication](https://developers.google.com/workspace/chat/authenticate-authorize). Supports [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) and [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user). When using app authentication, requests can only delete messages created by the calling Chat app.
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
            apiVersion: '',
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
     * Returns details about a message. For an example, see [Get details about a message](https://developers.google.com/workspace/chat/get-messages). Requires [authentication](https://developers.google.com/workspace/chat/authenticate-authorize). Supports [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) and [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user). Note: Might return a message from a blocked member or space.
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
            apiVersion: '',
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
     * Lists messages in a space that the caller is a member of, including messages from blocked members and spaces. For an example, see [List messages](/chat/api/guides/v1/messages/list). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Spaces$Messages$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Spaces$Messages$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListMessagesResponse>;
    list(
      params: Params$Resource$Spaces$Messages$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Spaces$Messages$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListMessagesResponse>,
      callback: BodyResponseCallback<Schema$ListMessagesResponse>
    ): void;
    list(
      params: Params$Resource$Spaces$Messages$List,
      callback: BodyResponseCallback<Schema$ListMessagesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListMessagesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Spaces$Messages$List
        | BodyResponseCallback<Schema$ListMessagesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListMessagesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListMessagesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListMessagesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Spaces$Messages$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spaces$Messages$List;
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
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListMessagesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListMessagesResponse>(parameters);
      }
    }

    /**
     * Updates a message. There's a difference between the `patch` and `update` methods. The `patch` method uses a `patch` request while the `update` method uses a `put` request. We recommend using the `patch` method. For an example, see [Update a message](https://developers.google.com/workspace/chat/update-messages). Requires [authentication](https://developers.google.com/workspace/chat/authenticate-authorize). Supports [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) and [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user). When using app authentication, requests can only update messages created by the calling Chat app.
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
            apiVersion: '',
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
     * Updates a message. There's a difference between the `patch` and `update` methods. The `patch` method uses a `patch` request while the `update` method uses a `put` request. We recommend using the `patch` method. For an example, see [Update a message](https://developers.google.com/workspace/chat/update-messages). Requires [authentication](https://developers.google.com/workspace/chat/authenticate-authorize). Supports [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) and [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user). When using app authentication, requests can only update messages created by the calling Chat app.
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
            apiVersion: '',
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
     * Optional. A custom ID for a message. Lets Chat apps get, update, or delete a message without needing to store the system-assigned ID in the message's resource name (represented in the message `name` field). The value for this field must meet the following requirements: * Begins with `client-`. For example, `client-custom-name` is a valid custom ID, but `custom-name` is not. * Contains up to 63 characters and only lowercase letters, numbers, and hyphens. * Is unique within a space. A Chat app can't use the same custom ID for different messages. For details, see [Name a message](https://developers.google.com/workspace/chat/create-messages#name_a_created_message).
     */
    messageId?: string;
    /**
     * Optional. Specifies whether a message starts a thread or replies to one. Only supported in named spaces.
     */
    messageReplyOption?: string;
    /**
     * Required. The resource name of the space in which to create a message. Format: `spaces/{space\}`
     */
    parent?: string;
    /**
     * Optional. A unique request ID for this message. Specifying an existing request ID returns the message created with that ID instead of creating a new message.
     */
    requestId?: string;
    /**
     * Optional. Deprecated: Use thread.thread_key instead. ID for the thread. Supports up to 4000 characters. To start or add to a thread, create a message and specify a `threadKey` or the thread.name. For example usage, see [Start or reply to a message thread](https://developers.google.com/workspace/chat/create-messages#create-message-thread).
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
     * When `true`, deleting a message also deletes its threaded replies. When `false`, if a message has threaded replies, deletion fails. Only applies when [authenticating as a user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user). Has no effect when [authenticating as a Chat app] (https://developers.google.com/workspace/chat/authenticate-authorize-chat-app).
     */
    force?: boolean;
    /**
     * Required. Resource name of the message. Format: `spaces/{space\}/messages/{message\}` If you've set a custom ID for your message, you can use the value from the `clientAssignedMessageId` field for `{message\}`. For details, see [Name a message] (https://developers.google.com/workspace/chat/create-messages#name_a_created_message).
     */
    name?: string;
  }
  export interface Params$Resource$Spaces$Messages$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the message. Format: `spaces/{space\}/messages/{message\}` If you've set a custom ID for your message, you can use the value from the `clientAssignedMessageId` field for `{message\}`. For details, see [Name a message] (https://developers.google.com/workspace/chat/create-messages#name_a_created_message).
     */
    name?: string;
  }
  export interface Params$Resource$Spaces$Messages$List
    extends StandardParameters {
    /**
     * A query filter. You can filter messages by date (`create_time`) and thread (`thread.name`). To filter messages by the date they were created, specify the `create_time` with a timestamp in [RFC-3339](https://www.rfc-editor.org/rfc/rfc3339) format and double quotation marks. For example, `"2023-04-21T11:30:00-04:00"`. You can use the greater than operator `\>` to list messages that were created after a timestamp, or the less than operator `<` to list messages that were created before a timestamp. To filter messages within a time interval, use the `AND` operator between two timestamps. To filter by thread, specify the `thread.name`, formatted as `spaces/{space\}/threads/{thread\}`. You can only specify one `thread.name` per query. To filter by both thread and date, use the `AND` operator in your query. For example, the following queries are valid: ``` create_time \> "2012-04-21T11:30:00-04:00" create_time \> "2012-04-21T11:30:00-04:00" AND thread.name = spaces/AAAAAAAAAAA/threads/123 create_time \> "2012-04-21T11:30:00+00:00" AND create_time < "2013-01-01T00:00:00+00:00" AND thread.name = spaces/AAAAAAAAAAA/threads/123 thread.name = spaces/AAAAAAAAAAA/threads/123 ``` Invalid queries are rejected by the server with an `INVALID_ARGUMENT` error.
     */
    filter?: string;
    /**
     * Optional, if resuming from a previous query. How the list of messages is ordered. Specify a value to order by an ordering operation. Valid ordering operation values are as follows: - `ASC` for ascending. - `DESC` for descending. The default ordering is `create_time ASC`.
     */
    orderBy?: string;
    /**
     * The maximum number of messages returned. The service might return fewer messages than this value. If unspecified, at most 25 are returned. The maximum value is 1000. If you use a value more than 1000, it's automatically changed to 1000. Negative values return an `INVALID_ARGUMENT` error.
     */
    pageSize?: number;
    /**
     * Optional, if resuming from a previous query. A page token received from a previous list messages call. Provide this parameter to retrieve the subsequent page. When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the space to list messages from. Format: `spaces/{space\}`
     */
    parent?: string;
    /**
     * Whether to include deleted messages. Deleted messages include deleted time and metadata about their deletion, but message content is unavailable.
     */
    showDeleted?: boolean;
  }
  export interface Params$Resource$Spaces$Messages$Patch
    extends StandardParameters {
    /**
     * Optional. If `true` and the message isn't found, a new message is created and `updateMask` is ignored. The specified message ID must be [client-assigned](https://developers.google.com/workspace/chat/create-messages#name_a_created_message) or the request fails.
     */
    allowMissing?: boolean;
    /**
     * Resource name of the message. Format: `spaces/{space\}/messages/{message\}` Where `{space\}` is the ID of the space where the message is posted and `{message\}` is a system-assigned ID for the message. For example, `spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB`. If you set a custom ID when you create a message, you can use this ID to specify the message in a request by replacing `{message\}` with the value from the `clientAssignedMessageId` field. For example, `spaces/AAAAAAAAAAA/messages/client-custom-name`. For details, see [Name a message](https://developers.google.com/workspace/chat/create-messages#name_a_created_message).
     */
    name?: string;
    /**
     * Required. The field paths to update. Separate multiple values with commas or use `*` to update all field paths. Currently supported field paths: - `text` - `attachment` - `cards` (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - `cards_v2` (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - `accessory_widgets` (Requires [app authentication](/chat/api/guides/auth/service-accounts).)
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
     * Optional. If `true` and the message isn't found, a new message is created and `updateMask` is ignored. The specified message ID must be [client-assigned](https://developers.google.com/workspace/chat/create-messages#name_a_created_message) or the request fails.
     */
    allowMissing?: boolean;
    /**
     * Resource name of the message. Format: `spaces/{space\}/messages/{message\}` Where `{space\}` is the ID of the space where the message is posted and `{message\}` is a system-assigned ID for the message. For example, `spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB`. If you set a custom ID when you create a message, you can use this ID to specify the message in a request by replacing `{message\}` with the value from the `clientAssignedMessageId` field. For example, `spaces/AAAAAAAAAAA/messages/client-custom-name`. For details, see [Name a message](https://developers.google.com/workspace/chat/create-messages#name_a_created_message).
     */
    name?: string;
    /**
     * Required. The field paths to update. Separate multiple values with commas or use `*` to update all field paths. Currently supported field paths: - `text` - `attachment` - `cards` (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - `cards_v2` (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - `accessory_widgets` (Requires [app authentication](/chat/api/guides/auth/service-accounts).)
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
     * Gets the metadata of a message attachment. The attachment data is fetched using the [media API](https://developers.google.com/workspace/chat/api/reference/rest/v1/media/download). For an example, see [Get metadata about a message attachment](https://developers.google.com/workspace/chat/get-media-attachments). Requires [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app).
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
            apiVersion: '',
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
     * Required. Resource name of the attachment, in the form `spaces/x/messages/x/attachments/x`.
     */
    name?: string;
  }

  export class Resource$Spaces$Messages$Reactions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a reaction and adds it to a message. Only unicode emojis are supported. For an example, see [Add a reaction to a message](https://developers.google.com/workspace/chat/create-reactions). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Spaces$Messages$Reactions$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Spaces$Messages$Reactions$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Reaction>;
    create(
      params: Params$Resource$Spaces$Messages$Reactions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Spaces$Messages$Reactions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Reaction>,
      callback: BodyResponseCallback<Schema$Reaction>
    ): void;
    create(
      params: Params$Resource$Spaces$Messages$Reactions$Create,
      callback: BodyResponseCallback<Schema$Reaction>
    ): void;
    create(callback: BodyResponseCallback<Schema$Reaction>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Spaces$Messages$Reactions$Create
        | BodyResponseCallback<Schema$Reaction>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Reaction>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Reaction>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Reaction> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Spaces$Messages$Reactions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spaces$Messages$Reactions$Create;
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
            url: (rootUrl + '/v1/{+parent}/reactions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Reaction>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Reaction>(parameters);
      }
    }

    /**
     * Deletes a reaction to a message. Only unicode emojis are supported. For an example, see [Delete a reaction](https://developers.google.com/workspace/chat/delete-reactions). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Spaces$Messages$Reactions$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Spaces$Messages$Reactions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Spaces$Messages$Reactions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Spaces$Messages$Reactions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Spaces$Messages$Reactions$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Spaces$Messages$Reactions$Delete
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
        {}) as Params$Resource$Spaces$Messages$Reactions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spaces$Messages$Reactions$Delete;
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
            apiVersion: '',
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
     * Lists reactions to a message. For an example, see [List reactions for a message](https://developers.google.com/workspace/chat/list-reactions). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Spaces$Messages$Reactions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Spaces$Messages$Reactions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListReactionsResponse>;
    list(
      params: Params$Resource$Spaces$Messages$Reactions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Spaces$Messages$Reactions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListReactionsResponse>,
      callback: BodyResponseCallback<Schema$ListReactionsResponse>
    ): void;
    list(
      params: Params$Resource$Spaces$Messages$Reactions$List,
      callback: BodyResponseCallback<Schema$ListReactionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListReactionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Spaces$Messages$Reactions$List
        | BodyResponseCallback<Schema$ListReactionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListReactionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListReactionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListReactionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Spaces$Messages$Reactions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spaces$Messages$Reactions$List;
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
            url: (rootUrl + '/v1/{+parent}/reactions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListReactionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListReactionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Spaces$Messages$Reactions$Create
    extends StandardParameters {
    /**
     * Required. The message where the reaction is created. Format: `spaces/{space\}/messages/{message\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Reaction;
  }
  export interface Params$Resource$Spaces$Messages$Reactions$Delete
    extends StandardParameters {
    /**
     * Required. Name of the reaction to delete. Format: `spaces/{space\}/messages/{message\}/reactions/{reaction\}`
     */
    name?: string;
  }
  export interface Params$Resource$Spaces$Messages$Reactions$List
    extends StandardParameters {
    /**
     * Optional. A query filter. You can filter reactions by [emoji](https://developers.google.com/workspace/chat/api/reference/rest/v1/Emoji) (either `emoji.unicode` or `emoji.custom_emoji.uid`) and [user](https://developers.google.com/workspace/chat/api/reference/rest/v1/User) (`user.name`). To filter reactions for multiple emojis or users, join similar fields with the `OR` operator, such as `emoji.unicode = "🙂" OR emoji.unicode = "👍"` and `user.name = "users/AAAAAA" OR user.name = "users/BBBBBB"`. To filter reactions by emoji and user, use the `AND` operator, such as `emoji.unicode = "🙂" AND user.name = "users/AAAAAA"`. If your query uses both `AND` and `OR`, group them with parentheses. For example, the following queries are valid: ``` user.name = "users/{user\}" emoji.unicode = "🙂" emoji.custom_emoji.uid = "{uid\}" emoji.unicode = "🙂" OR emoji.unicode = "👍" emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid\}" emoji.unicode = "🙂" AND user.name = "users/{user\}" (emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid\}") AND user.name = "users/{user\}" ``` The following queries are invalid: ``` emoji.unicode = "🙂" AND emoji.unicode = "👍" emoji.unicode = "🙂" AND emoji.custom_emoji.uid = "{uid\}" emoji.unicode = "🙂" OR user.name = "users/{user\}" emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid\}" OR user.name = "users/{user\}" emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid\}" AND user.name = "users/{user\}" ``` Invalid queries are rejected by the server with an `INVALID_ARGUMENT` error.
     */
    filter?: string;
    /**
     * Optional. The maximum number of reactions returned. The service can return fewer reactions than this value. If unspecified, the default value is 25. The maximum value is 200; values above 200 are changed to 200.
     */
    pageSize?: number;
    /**
     * Optional. (If resuming from a previous query.) A page token received from a previous list reactions call. Provide this to retrieve the subsequent page. When paginating, the filter value should match the call that provided the page token. Passing a different value might lead to unexpected results.
     */
    pageToken?: string;
    /**
     * Required. The message users reacted to. Format: `spaces/{space\}/messages/{message\}`
     */
    parent?: string;
  }

  export class Resource$Spaces$Spaceevents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns an event from a Google Chat space. The [event payload](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.spaceEvents#SpaceEvent.FIELDS.oneof_payload) contains the most recent version of the resource that changed. For example, if you request an event about a new message but the message was later updated, the server returns the updated `Message` resource in the event payload. Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user). To get an event, the authenticated user must be a member of the space. For an example, see [Get details about an event from a Google Chat space](https://developers.google.com/workspace/chat/get-space-event).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Spaces$Spaceevents$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Spaces$Spaceevents$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SpaceEvent>;
    get(
      params: Params$Resource$Spaces$Spaceevents$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Spaces$Spaceevents$Get,
      options: MethodOptions | BodyResponseCallback<Schema$SpaceEvent>,
      callback: BodyResponseCallback<Schema$SpaceEvent>
    ): void;
    get(
      params: Params$Resource$Spaces$Spaceevents$Get,
      callback: BodyResponseCallback<Schema$SpaceEvent>
    ): void;
    get(callback: BodyResponseCallback<Schema$SpaceEvent>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Spaces$Spaceevents$Get
        | BodyResponseCallback<Schema$SpaceEvent>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SpaceEvent>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SpaceEvent>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SpaceEvent> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Spaces$Spaceevents$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spaces$Spaceevents$Get;
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
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SpaceEvent>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SpaceEvent>(parameters);
      }
    }

    /**
     * Lists events from a Google Chat space. For each event, the [payload](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.spaceEvents#SpaceEvent.FIELDS.oneof_payload) contains the most recent version of the Chat resource. For example, if you list events about new space members, the server returns `Membership` resources that contain the latest membership details. If new members were removed during the requested period, the event payload contains an empty `Membership` resource. Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user). To list events, the authenticated user must be a member of the space. For an example, see [List events from a Google Chat space](https://developers.google.com/workspace/chat/list-space-events).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Spaces$Spaceevents$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Spaces$Spaceevents$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSpaceEventsResponse>;
    list(
      params: Params$Resource$Spaces$Spaceevents$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Spaces$Spaceevents$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSpaceEventsResponse>,
      callback: BodyResponseCallback<Schema$ListSpaceEventsResponse>
    ): void;
    list(
      params: Params$Resource$Spaces$Spaceevents$List,
      callback: BodyResponseCallback<Schema$ListSpaceEventsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListSpaceEventsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Spaces$Spaceevents$List
        | BodyResponseCallback<Schema$ListSpaceEventsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSpaceEventsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSpaceEventsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListSpaceEventsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Spaces$Spaceevents$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spaces$Spaceevents$List;
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
            url: (rootUrl + '/v1/{+parent}/spaceEvents').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListSpaceEventsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSpaceEventsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Spaces$Spaceevents$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the space event. Format: `spaces/{space\}/spaceEvents/{spaceEvent\}`
     */
    name?: string;
  }
  export interface Params$Resource$Spaces$Spaceevents$List
    extends StandardParameters {
    /**
     * Required. A query filter. You must specify at least one event type (`event_type`) using the has `:` operator. To filter by multiple event types, use the `OR` operator. Omit batch event types in your filter. The request automatically returns any related batch events. For example, if you filter by new reactions (`google.workspace.chat.reaction.v1.created`), the server also returns batch new reactions events (`google.workspace.chat.reaction.v1.batchCreated`). For a list of supported event types, see the [`SpaceEvents` reference documentation](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.spaceEvents#SpaceEvent.FIELDS.event_type). Optionally, you can also filter by start time (`start_time`) and end time (`end_time`): * `start_time`: Exclusive timestamp from which to start listing space events. You can list events that occurred up to 28 days ago. If unspecified, lists space events from the past 28 days. * `end_time`: Inclusive timestamp until which space events are listed. If unspecified, lists events up to the time of the request. To specify a start or end time, use the equals `=` operator and format in [RFC-3339](https://www.rfc-editor.org/rfc/rfc3339). To filter by both `start_time` and `end_time`, use the `AND` operator. For example, the following queries are valid: ``` start_time="2023-08-23T19:20:33+00:00" AND end_time="2023-08-23T19:21:54+00:00" ``` ``` start_time="2023-08-23T19:20:33+00:00" AND (event_types:"google.workspace.chat.space.v1.updated" OR event_types:"google.workspace.chat.message.v1.created") ``` The following queries are invalid: ``` start_time="2023-08-23T19:20:33+00:00" OR end_time="2023-08-23T19:21:54+00:00" ``` ``` event_types:"google.workspace.chat.space.v1.updated" AND event_types:"google.workspace.chat.message.v1.created" ``` Invalid queries are rejected by the server with an `INVALID_ARGUMENT` error.
     */
    filter?: string;
    /**
     * Optional. The maximum number of space events returned. The service might return fewer than this value. Negative values return an `INVALID_ARGUMENT` error.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous list space events call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to list space events must match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.
     */
    pageToken?: string;
    /**
     * Required. Resource name of the [Google Chat space](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces) where the events occurred. Format: `spaces/{space\}`.
     */
    parent?: string;
  }

  export class Resource$Users {
    context: APIRequestContext;
    spaces: Resource$Users$Spaces;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.spaces = new Resource$Users$Spaces(this.context);
    }
  }

  export class Resource$Users$Spaces {
    context: APIRequestContext;
    threads: Resource$Users$Spaces$Threads;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.threads = new Resource$Users$Spaces$Threads(this.context);
    }

    /**
     * Returns details about a user's read state within a space, used to identify read and unread messages. Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getSpaceReadState(
      params: Params$Resource$Users$Spaces$Getspacereadstate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getSpaceReadState(
      params?: Params$Resource$Users$Spaces$Getspacereadstate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SpaceReadState>;
    getSpaceReadState(
      params: Params$Resource$Users$Spaces$Getspacereadstate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSpaceReadState(
      params: Params$Resource$Users$Spaces$Getspacereadstate,
      options: MethodOptions | BodyResponseCallback<Schema$SpaceReadState>,
      callback: BodyResponseCallback<Schema$SpaceReadState>
    ): void;
    getSpaceReadState(
      params: Params$Resource$Users$Spaces$Getspacereadstate,
      callback: BodyResponseCallback<Schema$SpaceReadState>
    ): void;
    getSpaceReadState(
      callback: BodyResponseCallback<Schema$SpaceReadState>
    ): void;
    getSpaceReadState(
      paramsOrCallback?:
        | Params$Resource$Users$Spaces$Getspacereadstate
        | BodyResponseCallback<Schema$SpaceReadState>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SpaceReadState>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SpaceReadState>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SpaceReadState> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Spaces$Getspacereadstate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Spaces$Getspacereadstate;
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
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SpaceReadState>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SpaceReadState>(parameters);
      }
    }

    /**
     * Updates a user's read state within a space, used to identify read and unread messages. Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateSpaceReadState(
      params: Params$Resource$Users$Spaces$Updatespacereadstate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateSpaceReadState(
      params?: Params$Resource$Users$Spaces$Updatespacereadstate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SpaceReadState>;
    updateSpaceReadState(
      params: Params$Resource$Users$Spaces$Updatespacereadstate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateSpaceReadState(
      params: Params$Resource$Users$Spaces$Updatespacereadstate,
      options: MethodOptions | BodyResponseCallback<Schema$SpaceReadState>,
      callback: BodyResponseCallback<Schema$SpaceReadState>
    ): void;
    updateSpaceReadState(
      params: Params$Resource$Users$Spaces$Updatespacereadstate,
      callback: BodyResponseCallback<Schema$SpaceReadState>
    ): void;
    updateSpaceReadState(
      callback: BodyResponseCallback<Schema$SpaceReadState>
    ): void;
    updateSpaceReadState(
      paramsOrCallback?:
        | Params$Resource$Users$Spaces$Updatespacereadstate
        | BodyResponseCallback<Schema$SpaceReadState>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SpaceReadState>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SpaceReadState>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SpaceReadState> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Spaces$Updatespacereadstate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Spaces$Updatespacereadstate;
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
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SpaceReadState>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SpaceReadState>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Spaces$Getspacereadstate
    extends StandardParameters {
    /**
     * Required. Resource name of the space read state to retrieve. Only supports getting read state for the calling user. To refer to the calling user, set one of the following: - The `me` alias. For example, `users/me/spaces/{space\}/spaceReadState`. - Their Workspace email address. For example, `users/user@example.com/spaces/{space\}/spaceReadState`. - Their user id. For example, `users/123456789/spaces/{space\}/spaceReadState`. Format: users/{user\}/spaces/{space\}/spaceReadState
     */
    name?: string;
  }
  export interface Params$Resource$Users$Spaces$Updatespacereadstate
    extends StandardParameters {
    /**
     * Resource name of the space read state. Format: `users/{user\}/spaces/{space\}/spaceReadState`
     */
    name?: string;
    /**
     * Required. The field paths to update. Currently supported field paths: - `last_read_time` When the `last_read_time` is before the latest message create time, the space appears as unread in the UI. To mark the space as read, set `last_read_time` to any value later (larger) than the latest message create time. The `last_read_time` is coerced to match the latest message create time. Note that the space read state only affects the read state of messages that are visible in the space's top-level conversation. Replies in threads are unaffected by this timestamp, and instead rely on the thread read state.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SpaceReadState;
  }

  export class Resource$Users$Spaces$Threads {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns details about a user's read state within a thread, used to identify read and unread messages. Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getThreadReadState(
      params: Params$Resource$Users$Spaces$Threads$Getthreadreadstate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getThreadReadState(
      params?: Params$Resource$Users$Spaces$Threads$Getthreadreadstate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ThreadReadState>;
    getThreadReadState(
      params: Params$Resource$Users$Spaces$Threads$Getthreadreadstate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getThreadReadState(
      params: Params$Resource$Users$Spaces$Threads$Getthreadreadstate,
      options: MethodOptions | BodyResponseCallback<Schema$ThreadReadState>,
      callback: BodyResponseCallback<Schema$ThreadReadState>
    ): void;
    getThreadReadState(
      params: Params$Resource$Users$Spaces$Threads$Getthreadreadstate,
      callback: BodyResponseCallback<Schema$ThreadReadState>
    ): void;
    getThreadReadState(
      callback: BodyResponseCallback<Schema$ThreadReadState>
    ): void;
    getThreadReadState(
      paramsOrCallback?:
        | Params$Resource$Users$Spaces$Threads$Getthreadreadstate
        | BodyResponseCallback<Schema$ThreadReadState>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ThreadReadState>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ThreadReadState>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ThreadReadState> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Spaces$Threads$Getthreadreadstate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Spaces$Threads$Getthreadreadstate;
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
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ThreadReadState>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ThreadReadState>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Spaces$Threads$Getthreadreadstate
    extends StandardParameters {
    /**
     * Required. Resource name of the thread read state to retrieve. Only supports getting read state for the calling user. To refer to the calling user, set one of the following: - The `me` alias. For example, `users/me/spaces/{space\}/threads/{thread\}/threadReadState`. - Their Workspace email address. For example, `users/user@example.com/spaces/{space\}/threads/{thread\}/threadReadState`. - Their user id. For example, `users/123456789/spaces/{space\}/threads/{thread\}/threadReadState`. Format: users/{user\}/spaces/{space\}/threads/{thread\}/threadReadState
     */
    name?: string;
  }
}
