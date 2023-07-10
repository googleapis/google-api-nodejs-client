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

export namespace gmail_v1 {
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
   * Gmail API
   *
   * The Gmail API lets you view and manage Gmail mailbox data like threads, messages, and labels.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const gmail = google.gmail('v1');
   * ```
   */
  export class Gmail {
    context: APIRequestContext;
    users: Resource$Users;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.users = new Resource$Users(this.context);
    }
  }

  /**
   * Auto-forwarding settings for an account.
   */
  export interface Schema$AutoForwarding {
    /**
     * The state that a message should be left in after it has been forwarded.
     */
    disposition?: string | null;
    /**
     * Email address to which all incoming messages are forwarded. This email address must be a verified member of the forwarding addresses.
     */
    emailAddress?: string | null;
    /**
     * Whether all incoming mail is automatically forwarded to another address.
     */
    enabled?: boolean | null;
  }
  export interface Schema$BatchDeleteMessagesRequest {
    /**
     * The IDs of the messages to delete.
     */
    ids?: string[] | null;
  }
  export interface Schema$BatchModifyMessagesRequest {
    /**
     * A list of label IDs to add to messages.
     */
    addLabelIds?: string[] | null;
    /**
     * The IDs of the messages to modify. There is a limit of 1000 ids per request.
     */
    ids?: string[] | null;
    /**
     * A list of label IDs to remove from messages.
     */
    removeLabelIds?: string[] | null;
  }
  /**
   * The client-side encryption (CSE) configuration for the email address of an authenticated user. Gmail uses CSE configurations to save drafts of client-side encrypted email messages, and to sign and send encrypted email messages.
   */
  export interface Schema$CseIdentity {
    /**
     * The email address for the sending identity. The email address must be the primary email address of the authenticated user.
     */
    emailAddress?: string | null;
    /**
     * If a key pair is associated, the ID of the key pair, CseKeyPair.
     */
    primaryKeyPairId?: string | null;
  }
  /**
   * A client-side encryption S/MIME key pair, which is comprised of a public key, its certificate chain, and metadata for its paired private key. Gmail uses the key pair to complete the following tasks: - Sign outgoing client-side encrypted messages. - Save and reopen drafts of client-side encrypted messages. - Save and reopen sent messages. - Decrypt incoming or archived S/MIME messages.
   */
  export interface Schema$CseKeyPair {
    /**
     * Output only. If a key pair is set to `DISABLED`, the time that the key pair's state changed from `ENABLED` to `DISABLED`. This field is present only when the key pair is in state `DISABLED`.
     */
    disableTime?: string | null;
    /**
     * Output only. The current state of the key pair.
     */
    enablementState?: string | null;
    /**
     * Output only. The immutable ID for the client-side encryption S/MIME key pair.
     */
    keyPairId?: string | null;
    /**
     * Output only. The public key and its certificate chain, in [PEM](https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail) format.
     */
    pem?: string | null;
    /**
     * Input only. The public key and its certificate chain. The chain must be in [PKCS#7](https://en.wikipedia.org/wiki/PKCS_7) format and use PEM encoding and ASCII armor.
     */
    pkcs7?: string | null;
    /**
     * Metadata for instances of this key pair's private key.
     */
    privateKeyMetadata?: Schema$CsePrivateKeyMetadata[];
    /**
     * Output only. The email address identities that are specified on the leaf certificate.
     */
    subjectEmailAddresses?: string[] | null;
  }
  /**
   * Metadata for a private key instance.
   */
  export interface Schema$CsePrivateKeyMetadata {
    /**
     * Metadata for a private key instance managed by an external key access control list service.
     */
    kaclsKeyMetadata?: Schema$KaclsKeyMetadata;
    /**
     * Output only. The immutable ID for the private key metadata instance.
     */
    privateKeyMetadataId?: string | null;
  }
  /**
   * Settings for a delegate. Delegates can read, send, and delete messages, as well as view and add contacts, for the delegator's account. See "Set up mail delegation" for more information about delegates.
   */
  export interface Schema$Delegate {
    /**
     * The email address of the delegate.
     */
    delegateEmail?: string | null;
    /**
     * Indicates whether this address has been verified and can act as a delegate for the account. Read-only.
     */
    verificationStatus?: string | null;
  }
  /**
   * Requests to turn off a client-side encryption key pair.
   */
  export interface Schema$DisableCseKeyPairRequest {}
  /**
   * A draft email in the user's mailbox.
   */
  export interface Schema$Draft {
    /**
     * The immutable ID of the draft.
     */
    id?: string | null;
    /**
     * The message content of the draft.
     */
    message?: Schema$Message;
  }
  /**
   * Requests to turn on a client-side encryption key pair.
   */
  export interface Schema$EnableCseKeyPairRequest {}
  /**
   * Resource definition for Gmail filters. Filters apply to specific messages instead of an entire email thread.
   */
  export interface Schema$Filter {
    /**
     * Action that the filter performs.
     */
    action?: Schema$FilterAction;
    /**
     * Matching criteria for the filter.
     */
    criteria?: Schema$FilterCriteria;
    /**
     * The server assigned ID of the filter.
     */
    id?: string | null;
  }
  /**
   * A set of actions to perform on a message.
   */
  export interface Schema$FilterAction {
    /**
     * List of labels to add to the message.
     */
    addLabelIds?: string[] | null;
    /**
     * Email address that the message should be forwarded to.
     */
    forward?: string | null;
    /**
     * List of labels to remove from the message.
     */
    removeLabelIds?: string[] | null;
  }
  /**
   * Message matching criteria.
   */
  export interface Schema$FilterCriteria {
    /**
     * Whether the response should exclude chats.
     */
    excludeChats?: boolean | null;
    /**
     * The sender's display name or email address.
     */
    from?: string | null;
    /**
     * Whether the message has any attachment.
     */
    hasAttachment?: boolean | null;
    /**
     * Only return messages not matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`.
     */
    negatedQuery?: string | null;
    /**
     * Only return messages matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`.
     */
    query?: string | null;
    /**
     * The size of the entire RFC822 message in bytes, including all headers and attachments.
     */
    size?: number | null;
    /**
     * How the message size in bytes should be in relation to the size field.
     */
    sizeComparison?: string | null;
    /**
     * Case-insensitive phrase found in the message's subject. Trailing and leading whitespace are be trimmed and adjacent spaces are collapsed.
     */
    subject?: string | null;
    /**
     * The recipient's display name or email address. Includes recipients in the "to", "cc", and "bcc" header fields. You can use simply the local part of the email address. For example, "example" and "example@" both match "example@gmail.com". This field is case-insensitive.
     */
    to?: string | null;
  }
  /**
   * Settings for a forwarding address.
   */
  export interface Schema$ForwardingAddress {
    /**
     * An email address to which messages can be forwarded.
     */
    forwardingEmail?: string | null;
    /**
     * Indicates whether this address has been verified and is usable for forwarding. Read-only.
     */
    verificationStatus?: string | null;
  }
  /**
   * A record of a change to the user's mailbox. Each history change may affect multiple messages in multiple ways.
   */
  export interface Schema$History {
    /**
     * The mailbox sequence ID.
     */
    id?: string | null;
    /**
     * Labels added to messages in this history record.
     */
    labelsAdded?: Schema$HistoryLabelAdded[];
    /**
     * Labels removed from messages in this history record.
     */
    labelsRemoved?: Schema$HistoryLabelRemoved[];
    /**
     * List of messages changed in this history record. The fields for specific change types, such as `messagesAdded` may duplicate messages in this field. We recommend using the specific change-type fields instead of this.
     */
    messages?: Schema$Message[];
    /**
     * Messages added to the mailbox in this history record.
     */
    messagesAdded?: Schema$HistoryMessageAdded[];
    /**
     * Messages deleted (not Trashed) from the mailbox in this history record.
     */
    messagesDeleted?: Schema$HistoryMessageDeleted[];
  }
  export interface Schema$HistoryLabelAdded {
    /**
     * Label IDs added to the message.
     */
    labelIds?: string[] | null;
    message?: Schema$Message;
  }
  export interface Schema$HistoryLabelRemoved {
    /**
     * Label IDs removed from the message.
     */
    labelIds?: string[] | null;
    message?: Schema$Message;
  }
  export interface Schema$HistoryMessageAdded {
    message?: Schema$Message;
  }
  export interface Schema$HistoryMessageDeleted {
    message?: Schema$Message;
  }
  /**
   * IMAP settings for an account.
   */
  export interface Schema$ImapSettings {
    /**
     * If this value is true, Gmail will immediately expunge a message when it is marked as deleted in IMAP. Otherwise, Gmail will wait for an update from the client before expunging messages marked as deleted.
     */
    autoExpunge?: boolean | null;
    /**
     * Whether IMAP is enabled for the account.
     */
    enabled?: boolean | null;
    /**
     * The action that will be executed on a message when it is marked as deleted and expunged from the last visible IMAP folder.
     */
    expungeBehavior?: string | null;
    /**
     * An optional limit on the number of messages that an IMAP folder may contain. Legal values are 0, 1000, 2000, 5000 or 10000. A value of zero is interpreted to mean that there is no limit.
     */
    maxFolderSize?: number | null;
  }
  /**
   * Metadata for private keys managed by an external key access control list service. For details about managing key access, see [Google Workspace CSE API Reference](https://developers.google.com/workspace/cse/reference).
   */
  export interface Schema$KaclsKeyMetadata {
    /**
     * Opaque data generated and used by the key access control list service. Maximum size: 8 KiB.
     */
    kaclsData?: string | null;
    /**
     * The URI of the key access control list service that manages the private key.
     */
    kaclsUri?: string | null;
  }
  /**
   * Labels are used to categorize messages and threads within the user's mailbox. The maximum number of labels supported for a user's mailbox is 10,000.
   */
  export interface Schema$Label {
    /**
     * The color to assign to the label. Color is only available for labels that have their `type` set to `user`.
     */
    color?: Schema$LabelColor;
    /**
     * The immutable ID of the label.
     */
    id?: string | null;
    /**
     * The visibility of the label in the label list in the Gmail web interface.
     */
    labelListVisibility?: string | null;
    /**
     * The visibility of messages with this label in the message list in the Gmail web interface.
     */
    messageListVisibility?: string | null;
    /**
     * The total number of messages with the label.
     */
    messagesTotal?: number | null;
    /**
     * The number of unread messages with the label.
     */
    messagesUnread?: number | null;
    /**
     * The display name of the label.
     */
    name?: string | null;
    /**
     * The total number of threads with the label.
     */
    threadsTotal?: number | null;
    /**
     * The number of unread threads with the label.
     */
    threadsUnread?: number | null;
    /**
     * The owner type for the label. User labels are created by the user and can be modified and deleted by the user and can be applied to any message or thread. System labels are internally created and cannot be added, modified, or deleted. System labels may be able to be applied to or removed from messages and threads under some circumstances but this is not guaranteed. For example, users can apply and remove the `INBOX` and `UNREAD` labels from messages and threads, but cannot apply or remove the `DRAFTS` or `SENT` labels from messages or threads.
     */
    type?: string | null;
  }
  export interface Schema$LabelColor {
    /**
     * The background color represented as hex string #RRGGBB (ex #000000). This field is required in order to set the color of a label. Only the following predefined set of color values are allowed: \#000000, #434343, #666666, #999999, #cccccc, #efefef, #f3f3f3, #ffffff, \#fb4c2f, #ffad47, #fad165, #16a766, #43d692, #4a86e8, #a479e2, #f691b3, \#f6c5be, #ffe6c7, #fef1d1, #b9e4d0, #c6f3de, #c9daf8, #e4d7f5, #fcdee8, \#efa093, #ffd6a2, #fce8b3, #89d3b2, #a0eac9, #a4c2f4, #d0bcf1, #fbc8d9, \#e66550, #ffbc6b, #fcda83, #44b984, #68dfa9, #6d9eeb, #b694e8, #f7a7c0, \#cc3a21, #eaa041, #f2c960, #149e60, #3dc789, #3c78d8, #8e63ce, #e07798, \#ac2b16, #cf8933, #d5ae49, #0b804b, #2a9c68, #285bac, #653e9b, #b65775, \#822111, #a46a21, #aa8831, #076239, #1a764d, #1c4587, #41236d, #83334c \#464646, #e7e7e7, #0d3472, #b6cff5, #0d3b44, #98d7e4, #3d188e, #e3d7ff, \#711a36, #fbd3e0, #8a1c0a, #f2b2a8, #7a2e0b, #ffc8af, #7a4706, #ffdeb5, \#594c05, #fbe983, #684e07, #fdedc1, #0b4f30, #b3efd3, #04502e, #a2dcc1, \#c2c2c2, #4986e7, #2da2bb, #b99aff, #994a64, #f691b2, #ff7537, #ffad46, \#662e37, #ebdbde, #cca6ac, #094228, #42d692, #16a765
     */
    backgroundColor?: string | null;
    /**
     * The text color of the label, represented as hex string. This field is required in order to set the color of a label. Only the following predefined set of color values are allowed: \#000000, #434343, #666666, #999999, #cccccc, #efefef, #f3f3f3, #ffffff, \#fb4c2f, #ffad47, #fad165, #16a766, #43d692, #4a86e8, #a479e2, #f691b3, \#f6c5be, #ffe6c7, #fef1d1, #b9e4d0, #c6f3de, #c9daf8, #e4d7f5, #fcdee8, \#efa093, #ffd6a2, #fce8b3, #89d3b2, #a0eac9, #a4c2f4, #d0bcf1, #fbc8d9, \#e66550, #ffbc6b, #fcda83, #44b984, #68dfa9, #6d9eeb, #b694e8, #f7a7c0, \#cc3a21, #eaa041, #f2c960, #149e60, #3dc789, #3c78d8, #8e63ce, #e07798, \#ac2b16, #cf8933, #d5ae49, #0b804b, #2a9c68, #285bac, #653e9b, #b65775, \#822111, #a46a21, #aa8831, #076239, #1a764d, #1c4587, #41236d, #83334c \#464646, #e7e7e7, #0d3472, #b6cff5, #0d3b44, #98d7e4, #3d188e, #e3d7ff, \#711a36, #fbd3e0, #8a1c0a, #f2b2a8, #7a2e0b, #ffc8af, #7a4706, #ffdeb5, \#594c05, #fbe983, #684e07, #fdedc1, #0b4f30, #b3efd3, #04502e, #a2dcc1, \#c2c2c2, #4986e7, #2da2bb, #b99aff, #994a64, #f691b2, #ff7537, #ffad46, \#662e37, #ebdbde, #cca6ac, #094228, #42d692, #16a765
     */
    textColor?: string | null;
  }
  /**
   * Language settings for an account. These settings correspond to the "Language settings" feature in the web interface.
   */
  export interface Schema$LanguageSettings {
    /**
     * The language to display Gmail in, formatted as an RFC 3066 Language Tag (for example `en-GB`, `fr` or `ja` for British English, French, or Japanese respectively). The set of languages supported by Gmail evolves over time, so please refer to the "Language" dropdown in the Gmail settings for all available options, as described in the language settings help article. A table of sample values is also provided in the Managing Language Settings guide Not all Gmail clients can display the same set of languages. In the case that a user's display language is not available for use on a particular client, said client automatically chooses to display in the closest supported variant (or a reasonable default).
     */
    displayLanguage?: string | null;
  }
  export interface Schema$ListCseIdentitiesResponse {
    /**
     * One page of the list of CSE identities configured for the user.
     */
    cseIdentities?: Schema$CseIdentity[];
    /**
     * Pagination token to be passed to a subsequent ListCseIdentities call in order to retrieve the next page of identities. If this value is not returned or is the empty string, then no further pages remain.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$ListCseKeyPairsResponse {
    /**
     * One page of the list of CSE key pairs installed for the user.
     */
    cseKeyPairs?: Schema$CseKeyPair[];
    /**
     * Pagination token to be passed to a subsequent ListCseKeyPairs call in order to retrieve the next page of key pairs. If this value is not returned, then no further pages remain.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response for the ListDelegates method.
   */
  export interface Schema$ListDelegatesResponse {
    /**
     * List of the user's delegates (with any verification status). If an account doesn't have delegates, this field doesn't appear.
     */
    delegates?: Schema$Delegate[];
  }
  export interface Schema$ListDraftsResponse {
    /**
     * List of drafts. Note that the `Message` property in each `Draft` resource only contains an `id` and a `threadId`. The messages.get method can fetch additional message details.
     */
    drafts?: Schema$Draft[];
    /**
     * Token to retrieve the next page of results in the list.
     */
    nextPageToken?: string | null;
    /**
     * Estimated total number of results.
     */
    resultSizeEstimate?: number | null;
  }
  /**
   * Response for the ListFilters method.
   */
  export interface Schema$ListFiltersResponse {
    /**
     * List of a user's filters.
     */
    filter?: Schema$Filter[];
  }
  /**
   * Response for the ListForwardingAddresses method.
   */
  export interface Schema$ListForwardingAddressesResponse {
    /**
     * List of addresses that may be used for forwarding.
     */
    forwardingAddresses?: Schema$ForwardingAddress[];
  }
  export interface Schema$ListHistoryResponse {
    /**
     * List of history records. Any `messages` contained in the response will typically only have `id` and `threadId` fields populated.
     */
    history?: Schema$History[];
    /**
     * The ID of the mailbox's current history record.
     */
    historyId?: string | null;
    /**
     * Page token to retrieve the next page of results in the list.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$ListLabelsResponse {
    /**
     * List of labels. Note that each label resource only contains an `id`, `name`, `messageListVisibility`, `labelListVisibility`, and `type`. The labels.get method can fetch additional label details.
     */
    labels?: Schema$Label[];
  }
  export interface Schema$ListMessagesResponse {
    /**
     * List of messages. Note that each message resource contains only an `id` and a `threadId`. Additional message details can be fetched using the messages.get method.
     */
    messages?: Schema$Message[];
    /**
     * Token to retrieve the next page of results in the list.
     */
    nextPageToken?: string | null;
    /**
     * Estimated total number of results.
     */
    resultSizeEstimate?: number | null;
  }
  /**
   * Response for the ListSendAs method.
   */
  export interface Schema$ListSendAsResponse {
    /**
     * List of send-as aliases.
     */
    sendAs?: Schema$SendAs[];
  }
  export interface Schema$ListSmimeInfoResponse {
    /**
     * List of SmimeInfo.
     */
    smimeInfo?: Schema$SmimeInfo[];
  }
  export interface Schema$ListThreadsResponse {
    /**
     * Page token to retrieve the next page of results in the list.
     */
    nextPageToken?: string | null;
    /**
     * Estimated total number of results.
     */
    resultSizeEstimate?: number | null;
    /**
     * List of threads. Note that each thread resource does not contain a list of `messages`. The list of `messages` for a given thread can be fetched using the threads.get method.
     */
    threads?: Schema$Thread[];
  }
  /**
   * An email message.
   */
  export interface Schema$Message {
    /**
     * The ID of the last history record that modified this message.
     */
    historyId?: string | null;
    /**
     * The immutable ID of the message.
     */
    id?: string | null;
    /**
     * The internal message creation timestamp (epoch ms), which determines ordering in the inbox. For normal SMTP-received email, this represents the time the message was originally accepted by Google, which is more reliable than the `Date` header. However, for API-migrated mail, it can be configured by client to be based on the `Date` header.
     */
    internalDate?: string | null;
    /**
     * List of IDs of labels applied to this message.
     */
    labelIds?: string[] | null;
    /**
     * The parsed email structure in the message parts.
     */
    payload?: Schema$MessagePart;
    /**
     * The entire email message in an RFC 2822 formatted and base64url encoded string. Returned in `messages.get` and `drafts.get` responses when the `format=RAW` parameter is supplied.
     */
    raw?: string | null;
    /**
     * Estimated size in bytes of the message.
     */
    sizeEstimate?: number | null;
    /**
     * A short part of the message text.
     */
    snippet?: string | null;
    /**
     * The ID of the thread the message belongs to. To add a message or draft to a thread, the following criteria must be met: 1. The requested `threadId` must be specified on the `Message` or `Draft.Message` you supply with your request. 2. The `References` and `In-Reply-To` headers must be set in compliance with the [RFC 2822](https://tools.ietf.org/html/rfc2822) standard. 3. The `Subject` headers must match.
     */
    threadId?: string | null;
  }
  /**
   * A single MIME message part.
   */
  export interface Schema$MessagePart {
    /**
     * The message part body for this part, which may be empty for container MIME message parts.
     */
    body?: Schema$MessagePartBody;
    /**
     * The filename of the attachment. Only present if this message part represents an attachment.
     */
    filename?: string | null;
    /**
     * List of headers on this message part. For the top-level message part, representing the entire message payload, it will contain the standard RFC 2822 email headers such as `To`, `From`, and `Subject`.
     */
    headers?: Schema$MessagePartHeader[];
    /**
     * The MIME type of the message part.
     */
    mimeType?: string | null;
    /**
     * The immutable ID of the message part.
     */
    partId?: string | null;
    /**
     * The child MIME message parts of this part. This only applies to container MIME message parts, for example `multipart/x`. For non- container MIME message part types, such as `text/plain`, this field is empty. For more information, see RFC 1521.
     */
    parts?: Schema$MessagePart[];
  }
  /**
   * The body of a single MIME message part.
   */
  export interface Schema$MessagePartBody {
    /**
     * When present, contains the ID of an external attachment that can be retrieved in a separate `messages.attachments.get` request. When not present, the entire content of the message part body is contained in the data field.
     */
    attachmentId?: string | null;
    /**
     * The body data of a MIME message part as a base64url encoded string. May be empty for MIME container types that have no message body or when the body data is sent as a separate attachment. An attachment ID is present if the body data is contained in a separate attachment.
     */
    data?: string | null;
    /**
     * Number of bytes for the message part data (encoding notwithstanding).
     */
    size?: number | null;
  }
  export interface Schema$MessagePartHeader {
    /**
     * The name of the header before the `:` separator. For example, `To`.
     */
    name?: string | null;
    /**
     * The value of the header after the `:` separator. For example, `someuser@example.com`.
     */
    value?: string | null;
  }
  export interface Schema$ModifyMessageRequest {
    /**
     * A list of IDs of labels to add to this message. You can add up to 100 labels with each update.
     */
    addLabelIds?: string[] | null;
    /**
     * A list IDs of labels to remove from this message. You can remove up to 100 labels with each update.
     */
    removeLabelIds?: string[] | null;
  }
  export interface Schema$ModifyThreadRequest {
    /**
     * A list of IDs of labels to add to this thread. You can add up to 100 labels with each update.
     */
    addLabelIds?: string[] | null;
    /**
     * A list of IDs of labels to remove from this thread. You can remove up to 100 labels with each update.
     */
    removeLabelIds?: string[] | null;
  }
  /**
   * Request to obliterate a CSE key pair.
   */
  export interface Schema$ObliterateCseKeyPairRequest {}
  /**
   * POP settings for an account.
   */
  export interface Schema$PopSettings {
    /**
     * The range of messages which are accessible via POP.
     */
    accessWindow?: string | null;
    /**
     * The action that will be executed on a message after it has been fetched via POP.
     */
    disposition?: string | null;
  }
  /**
   * Profile for a Gmail user.
   */
  export interface Schema$Profile {
    /**
     * The user's email address.
     */
    emailAddress?: string | null;
    /**
     * The ID of the mailbox's current history record.
     */
    historyId?: string | null;
    /**
     * The total number of messages in the mailbox.
     */
    messagesTotal?: number | null;
    /**
     * The total number of threads in the mailbox.
     */
    threadsTotal?: number | null;
  }
  /**
   * Settings associated with a send-as alias, which can be either the primary login address associated with the account or a custom "from" address. Send-as aliases correspond to the "Send Mail As" feature in the web interface.
   */
  export interface Schema$SendAs {
    /**
     * A name that appears in the "From:" header for mail sent using this alias. For custom "from" addresses, when this is empty, Gmail will populate the "From:" header with the name that is used for the primary address associated with the account. If the admin has disabled the ability for users to update their name format, requests to update this field for the primary login will silently fail.
     */
    displayName?: string | null;
    /**
     * Whether this address is selected as the default "From:" address in situations such as composing a new message or sending a vacation auto-reply. Every Gmail account has exactly one default send-as address, so the only legal value that clients may write to this field is `true`. Changing this from `false` to `true` for an address will result in this field becoming `false` for the other previous default address.
     */
    isDefault?: boolean | null;
    /**
     * Whether this address is the primary address used to login to the account. Every Gmail account has exactly one primary address, and it cannot be deleted from the collection of send-as aliases. This field is read-only.
     */
    isPrimary?: boolean | null;
    /**
     * An optional email address that is included in a "Reply-To:" header for mail sent using this alias. If this is empty, Gmail will not generate a "Reply-To:" header.
     */
    replyToAddress?: string | null;
    /**
     * The email address that appears in the "From:" header for mail sent using this alias. This is read-only for all operations except create.
     */
    sendAsEmail?: string | null;
    /**
     * An optional HTML signature that is included in messages composed with this alias in the Gmail web UI. This signature is added to new emails only.
     */
    signature?: string | null;
    /**
     * An optional SMTP service that will be used as an outbound relay for mail sent using this alias. If this is empty, outbound mail will be sent directly from Gmail's servers to the destination SMTP service. This setting only applies to custom "from" aliases.
     */
    smtpMsa?: Schema$SmtpMsa;
    /**
     * Whether Gmail should treat this address as an alias for the user's primary email address. This setting only applies to custom "from" aliases.
     */
    treatAsAlias?: boolean | null;
    /**
     * Indicates whether this address has been verified for use as a send-as alias. Read-only. This setting only applies to custom "from" aliases.
     */
    verificationStatus?: string | null;
  }
  /**
   * An S/MIME email config.
   */
  export interface Schema$SmimeInfo {
    /**
     * Encrypted key password, when key is encrypted.
     */
    encryptedKeyPassword?: string | null;
    /**
     * When the certificate expires (in milliseconds since epoch).
     */
    expiration?: string | null;
    /**
     * The immutable ID for the SmimeInfo.
     */
    id?: string | null;
    /**
     * Whether this SmimeInfo is the default one for this user's send-as address.
     */
    isDefault?: boolean | null;
    /**
     * The S/MIME certificate issuer's common name.
     */
    issuerCn?: string | null;
    /**
     * PEM formatted X509 concatenated certificate string (standard base64 encoding). Format used for returning key, which includes public key as well as certificate chain (not private key).
     */
    pem?: string | null;
    /**
     * PKCS#12 format containing a single private/public key pair and certificate chain. This format is only accepted from client for creating a new SmimeInfo and is never returned, because the private key is not intended to be exported. PKCS#12 may be encrypted, in which case encryptedKeyPassword should be set appropriately.
     */
    pkcs12?: string | null;
  }
  /**
   * Configuration for communication with an SMTP service.
   */
  export interface Schema$SmtpMsa {
    /**
     * The hostname of the SMTP service. Required.
     */
    host?: string | null;
    /**
     * The password that will be used for authentication with the SMTP service. This is a write-only field that can be specified in requests to create or update SendAs settings; it is never populated in responses.
     */
    password?: string | null;
    /**
     * The port of the SMTP service. Required.
     */
    port?: number | null;
    /**
     * The protocol that will be used to secure communication with the SMTP service. Required.
     */
    securityMode?: string | null;
    /**
     * The username that will be used for authentication with the SMTP service. This is a write-only field that can be specified in requests to create or update SendAs settings; it is never populated in responses.
     */
    username?: string | null;
  }
  /**
   * A collection of messages representing a conversation.
   */
  export interface Schema$Thread {
    /**
     * The ID of the last history record that modified this thread.
     */
    historyId?: string | null;
    /**
     * The unique ID of the thread.
     */
    id?: string | null;
    /**
     * The list of messages in the thread.
     */
    messages?: Schema$Message[];
    /**
     * A short part of the message text.
     */
    snippet?: string | null;
  }
  /**
   * Vacation auto-reply settings for an account. These settings correspond to the "Vacation responder" feature in the web interface.
   */
  export interface Schema$VacationSettings {
    /**
     * Flag that controls whether Gmail automatically replies to messages.
     */
    enableAutoReply?: boolean | null;
    /**
     * An optional end time for sending auto-replies (epoch ms). When this is specified, Gmail will automatically reply only to messages that it receives before the end time. If both `startTime` and `endTime` are specified, `startTime` must precede `endTime`.
     */
    endTime?: string | null;
    /**
     * Response body in HTML format. Gmail will sanitize the HTML before storing it. If both `response_body_plain_text` and `response_body_html` are specified, `response_body_html` will be used.
     */
    responseBodyHtml?: string | null;
    /**
     * Response body in plain text format. If both `response_body_plain_text` and `response_body_html` are specified, `response_body_html` will be used.
     */
    responseBodyPlainText?: string | null;
    /**
     * Optional text to prepend to the subject line in vacation responses. In order to enable auto-replies, either the response subject or the response body must be nonempty.
     */
    responseSubject?: string | null;
    /**
     * Flag that determines whether responses are sent to recipients who are not in the user's list of contacts.
     */
    restrictToContacts?: boolean | null;
    /**
     * Flag that determines whether responses are sent to recipients who are outside of the user's domain. This feature is only available for Google Workspace users.
     */
    restrictToDomain?: boolean | null;
    /**
     * An optional start time for sending auto-replies (epoch ms). When this is specified, Gmail will automatically reply only to messages that it receives after the start time. If both `startTime` and `endTime` are specified, `startTime` must precede `endTime`.
     */
    startTime?: string | null;
  }
  /**
   * Set up or update a new push notification watch on this user's mailbox.
   */
  export interface Schema$WatchRequest {
    /**
     * Filtering behavior of `labelIds list` specified. This field is deprecated because it caused incorrect behavior in some cases; use `label_filter_behavior` instead.
     */
    labelFilterAction?: string | null;
    /**
     * Filtering behavior of `labelIds list` specified. This field replaces `label_filter_action`; if set, `label_filter_action` is ignored.
     */
    labelFilterBehavior?: string | null;
    /**
     * List of label_ids to restrict notifications about. By default, if unspecified, all changes are pushed out. If specified then dictates which labels are required for a push notification to be generated.
     */
    labelIds?: string[] | null;
    /**
     * A fully qualified Google Cloud Pub/Sub API topic name to publish the events to. This topic name **must** already exist in Cloud Pub/Sub and you **must** have already granted gmail "publish" permission on it. For example, "projects/my-project-identifier/topics/my-topic-name" (using the Cloud Pub/Sub "v1" topic naming format). Note that the "my-project-identifier" portion must exactly match your Google developer project id (the one executing this watch request).
     */
    topicName?: string | null;
  }
  /**
   * Push notification watch response.
   */
  export interface Schema$WatchResponse {
    /**
     * When Gmail will stop sending notifications for mailbox updates (epoch millis). Call `watch` again before this time to renew the watch.
     */
    expiration?: string | null;
    /**
     * The ID of the mailbox's current history record.
     */
    historyId?: string | null;
  }

  export class Resource$Users {
    context: APIRequestContext;
    drafts: Resource$Users$Drafts;
    history: Resource$Users$History;
    labels: Resource$Users$Labels;
    messages: Resource$Users$Messages;
    settings: Resource$Users$Settings;
    threads: Resource$Users$Threads;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.drafts = new Resource$Users$Drafts(this.context);
      this.history = new Resource$Users$History(this.context);
      this.labels = new Resource$Users$Labels(this.context);
      this.messages = new Resource$Users$Messages(this.context);
      this.settings = new Resource$Users$Settings(this.context);
      this.threads = new Resource$Users$Threads(this.context);
    }

    /**
     * Gets the current user's Gmail profile.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.compose',
     *       'https://www.googleapis.com/auth/gmail.metadata',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *       'https://www.googleapis.com/auth/gmail.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.getProfile({
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "emailAddress": "my_emailAddress",
     *   //   "historyId": "my_historyId",
     *   //   "messagesTotal": 0,
     *   //   "threadsTotal": 0
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
    getProfile(
      params: Params$Resource$Users$Getprofile,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getProfile(
      params?: Params$Resource$Users$Getprofile,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Profile>;
    getProfile(
      params: Params$Resource$Users$Getprofile,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getProfile(
      params: Params$Resource$Users$Getprofile,
      options: MethodOptions | BodyResponseCallback<Schema$Profile>,
      callback: BodyResponseCallback<Schema$Profile>
    ): void;
    getProfile(
      params: Params$Resource$Users$Getprofile,
      callback: BodyResponseCallback<Schema$Profile>
    ): void;
    getProfile(callback: BodyResponseCallback<Schema$Profile>): void;
    getProfile(
      paramsOrCallback?:
        | Params$Resource$Users$Getprofile
        | BodyResponseCallback<Schema$Profile>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Profile>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Profile>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Profile> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Users$Getprofile;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Getprofile;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/profile').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Profile>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Profile>(parameters);
      }
    }

    /**
     * Stop receiving push notifications for the given user mailbox.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.metadata',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *       'https://www.googleapis.com/auth/gmail.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.stop({
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
    stop(
      params: Params$Resource$Users$Stop,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    stop(
      params?: Params$Resource$Users$Stop,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    stop(
      params: Params$Resource$Users$Stop,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    stop(
      params: Params$Resource$Users$Stop,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    stop(
      params: Params$Resource$Users$Stop,
      callback: BodyResponseCallback<void>
    ): void;
    stop(callback: BodyResponseCallback<void>): void;
    stop(
      paramsOrCallback?:
        | Params$Resource$Users$Stop
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Users$Stop;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Stop;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/stop').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Set up or update a push notification watch on the given user mailbox.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.metadata',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *       'https://www.googleapis.com/auth/gmail.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.watch({
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "labelFilterAction": "my_labelFilterAction",
     *       //   "labelFilterBehavior": "my_labelFilterBehavior",
     *       //   "labelIds": [],
     *       //   "topicName": "my_topicName"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "expiration": "my_expiration",
     *   //   "historyId": "my_historyId"
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
    watch(
      params: Params$Resource$Users$Watch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    watch(
      params?: Params$Resource$Users$Watch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WatchResponse>;
    watch(
      params: Params$Resource$Users$Watch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    watch(
      params: Params$Resource$Users$Watch,
      options: MethodOptions | BodyResponseCallback<Schema$WatchResponse>,
      callback: BodyResponseCallback<Schema$WatchResponse>
    ): void;
    watch(
      params: Params$Resource$Users$Watch,
      callback: BodyResponseCallback<Schema$WatchResponse>
    ): void;
    watch(callback: BodyResponseCallback<Schema$WatchResponse>): void;
    watch(
      paramsOrCallback?:
        | Params$Resource$Users$Watch
        | BodyResponseCallback<Schema$WatchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WatchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WatchResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$WatchResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Users$Watch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Watch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/watch').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$WatchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WatchResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Getprofile extends StandardParameters {
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Stop extends StandardParameters {
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Watch extends StandardParameters {
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WatchRequest;
  }

  export class Resource$Users$Drafts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new draft with the `DRAFT` label.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.addons.current.action.compose',
     *       'https://www.googleapis.com/auth/gmail.compose',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.drafts.create({
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "id": "my_id",
     *       //   "message": {}
     *       // }
     *     },
     *     media: {
     *       mimeType: 'placeholder-value',
     *       body: 'placeholder-value',
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "id": "my_id",
     *   //   "message": {}
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
      params: Params$Resource$Users$Drafts$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Users$Drafts$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Draft>;
    create(
      params: Params$Resource$Users$Drafts$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Users$Drafts$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Draft>,
      callback: BodyResponseCallback<Schema$Draft>
    ): void;
    create(
      params: Params$Resource$Users$Drafts$Create,
      callback: BodyResponseCallback<Schema$Draft>
    ): void;
    create(callback: BodyResponseCallback<Schema$Draft>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Users$Drafts$Create
        | BodyResponseCallback<Schema$Draft>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Draft>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Draft>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Draft> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Drafts$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Drafts$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/drafts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/gmail/v1/users/{userId}/drafts').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Draft>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Draft>(parameters);
      }
    }

    /**
     * Immediately and permanently deletes the specified draft. Does not simply trash it.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.addons.current.action.compose',
     *       'https://www.googleapis.com/auth/gmail.compose',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.drafts.delete({
     *     // The ID of the draft to delete.
     *     id: 'placeholder-value',
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Users$Drafts$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Users$Drafts$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Users$Drafts$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Users$Drafts$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Users$Drafts$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Users$Drafts$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Drafts$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Drafts$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/drafts/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'id'],
        pathParams: ['id', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Gets the specified draft.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.compose',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *       'https://www.googleapis.com/auth/gmail.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.drafts.get({
     *     // The format to return the draft in.
     *     format: 'placeholder-value',
     *     // The ID of the draft to retrieve.
     *     id: 'placeholder-value',
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "id": "my_id",
     *   //   "message": {}
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
      params: Params$Resource$Users$Drafts$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Users$Drafts$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Draft>;
    get(
      params: Params$Resource$Users$Drafts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Users$Drafts$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Draft>,
      callback: BodyResponseCallback<Schema$Draft>
    ): void;
    get(
      params: Params$Resource$Users$Drafts$Get,
      callback: BodyResponseCallback<Schema$Draft>
    ): void;
    get(callback: BodyResponseCallback<Schema$Draft>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Users$Drafts$Get
        | BodyResponseCallback<Schema$Draft>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Draft>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Draft>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Draft> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Users$Drafts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Drafts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/drafts/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'id'],
        pathParams: ['id', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Draft>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Draft>(parameters);
      }
    }

    /**
     * Lists the drafts in the user's mailbox.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.compose',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *       'https://www.googleapis.com/auth/gmail.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.drafts.list({
     *     // Include drafts from `SPAM` and `TRASH` in the results.
     *     includeSpamTrash: 'placeholder-value',
     *     // Maximum number of drafts to return. This field defaults to 100. The maximum allowed value for this field is 500.
     *     maxResults: 'placeholder-value',
     *     // Page token to retrieve a specific page of results in the list.
     *     pageToken: 'placeholder-value',
     *     // Only return draft messages matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`.
     *     q: 'placeholder-value',
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "drafts": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "resultSizeEstimate": 0
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
      params: Params$Resource$Users$Drafts$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Users$Drafts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDraftsResponse>;
    list(
      params: Params$Resource$Users$Drafts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Users$Drafts$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListDraftsResponse>,
      callback: BodyResponseCallback<Schema$ListDraftsResponse>
    ): void;
    list(
      params: Params$Resource$Users$Drafts$List,
      callback: BodyResponseCallback<Schema$ListDraftsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDraftsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Users$Drafts$List
        | BodyResponseCallback<Schema$ListDraftsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDraftsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDraftsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListDraftsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Drafts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Drafts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/drafts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListDraftsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDraftsResponse>(parameters);
      }
    }

    /**
     * Sends the specified, existing draft to the recipients in the `To`, `Cc`, and `Bcc` headers.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.addons.current.action.compose',
     *       'https://www.googleapis.com/auth/gmail.compose',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.drafts.send({
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "id": "my_id",
     *       //   "message": {}
     *       // }
     *     },
     *     media: {
     *       mimeType: 'placeholder-value',
     *       body: 'placeholder-value',
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "historyId": "my_historyId",
     *   //   "id": "my_id",
     *   //   "internalDate": "my_internalDate",
     *   //   "labelIds": [],
     *   //   "payload": {},
     *   //   "raw": "my_raw",
     *   //   "sizeEstimate": 0,
     *   //   "snippet": "my_snippet",
     *   //   "threadId": "my_threadId"
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
    send(
      params: Params$Resource$Users$Drafts$Send,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    send(
      params?: Params$Resource$Users$Drafts$Send,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
    send(
      params: Params$Resource$Users$Drafts$Send,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    send(
      params: Params$Resource$Users$Drafts$Send,
      options: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    send(
      params: Params$Resource$Users$Drafts$Send,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    send(callback: BodyResponseCallback<Schema$Message>): void;
    send(
      paramsOrCallback?:
        | Params$Resource$Users$Drafts$Send
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
        {}) as Params$Resource$Users$Drafts$Send;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Drafts$Send;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/drafts/send').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (
          rootUrl + '/upload/gmail/v1/users/{userId}/drafts/send'
        ).replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['userId'],
        pathParams: ['userId'],
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
     * Replaces a draft's content.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.addons.current.action.compose',
     *       'https://www.googleapis.com/auth/gmail.compose',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.drafts.update({
     *     // The ID of the draft to update.
     *     id: 'placeholder-value',
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "id": "my_id",
     *       //   "message": {}
     *       // }
     *     },
     *     media: {
     *       mimeType: 'placeholder-value',
     *       body: 'placeholder-value',
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "id": "my_id",
     *   //   "message": {}
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
      params: Params$Resource$Users$Drafts$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Users$Drafts$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Draft>;
    update(
      params: Params$Resource$Users$Drafts$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Users$Drafts$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Draft>,
      callback: BodyResponseCallback<Schema$Draft>
    ): void;
    update(
      params: Params$Resource$Users$Drafts$Update,
      callback: BodyResponseCallback<Schema$Draft>
    ): void;
    update(callback: BodyResponseCallback<Schema$Draft>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Users$Drafts$Update
        | BodyResponseCallback<Schema$Draft>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Draft>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Draft>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Draft> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Drafts$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Drafts$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/drafts/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        mediaUrl: (
          rootUrl + '/upload/gmail/v1/users/{userId}/drafts/{id}'
        ).replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['userId', 'id'],
        pathParams: ['id', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Draft>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Draft>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Drafts$Create
    extends StandardParameters {
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Draft;

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
  export interface Params$Resource$Users$Drafts$Delete
    extends StandardParameters {
    /**
     * The ID of the draft to delete.
     */
    id?: string;
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Drafts$Get extends StandardParameters {
    /**
     * The format to return the draft in.
     */
    format?: string;
    /**
     * The ID of the draft to retrieve.
     */
    id?: string;
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Drafts$List
    extends StandardParameters {
    /**
     * Include drafts from `SPAM` and `TRASH` in the results.
     */
    includeSpamTrash?: boolean;
    /**
     * Maximum number of drafts to return. This field defaults to 100. The maximum allowed value for this field is 500.
     */
    maxResults?: number;
    /**
     * Page token to retrieve a specific page of results in the list.
     */
    pageToken?: string;
    /**
     * Only return draft messages matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`.
     */
    q?: string;
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Drafts$Send
    extends StandardParameters {
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Draft;

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
  export interface Params$Resource$Users$Drafts$Update
    extends StandardParameters {
    /**
     * The ID of the draft to update.
     */
    id?: string;
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Draft;

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

  export class Resource$Users$History {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the history of all changes to the given mailbox. History results are returned in chronological order (increasing `historyId`).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.metadata',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *       'https://www.googleapis.com/auth/gmail.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.history.list({
     *     // History types to be returned by the function
     *     historyTypes: 'placeholder-value',
     *     // Only return messages with a label matching the ID.
     *     labelId: 'placeholder-value',
     *     // Maximum number of history records to return. This field defaults to 100. The maximum allowed value for this field is 500.
     *     maxResults: 'placeholder-value',
     *     // Page token to retrieve a specific page of results in the list.
     *     pageToken: 'placeholder-value',
     *     // Required. Returns history records after the specified `startHistoryId`. The supplied `startHistoryId` should be obtained from the `historyId` of a message, thread, or previous `list` response. History IDs increase chronologically but are not contiguous with random gaps in between valid IDs. Supplying an invalid or out of date `startHistoryId` typically returns an `HTTP 404` error code. A `historyId` is typically valid for at least a week, but in some rare circumstances may be valid for only a few hours. If you receive an `HTTP 404` error response, your application should perform a full sync. If you receive no `nextPageToken` in the response, there are no updates to retrieve and you can store the returned `historyId` for a future request.
     *     startHistoryId: 'placeholder-value',
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "history": [],
     *   //   "historyId": "my_historyId",
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
      params: Params$Resource$Users$History$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Users$History$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListHistoryResponse>;
    list(
      params: Params$Resource$Users$History$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Users$History$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListHistoryResponse>,
      callback: BodyResponseCallback<Schema$ListHistoryResponse>
    ): void;
    list(
      params: Params$Resource$Users$History$List,
      callback: BodyResponseCallback<Schema$ListHistoryResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListHistoryResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Users$History$List
        | BodyResponseCallback<Schema$ListHistoryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListHistoryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListHistoryResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListHistoryResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$History$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$History$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/history').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListHistoryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListHistoryResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$History$List
    extends StandardParameters {
    /**
     * History types to be returned by the function
     */
    historyTypes?: string[];
    /**
     * Only return messages with a label matching the ID.
     */
    labelId?: string;
    /**
     * Maximum number of history records to return. This field defaults to 100. The maximum allowed value for this field is 500.
     */
    maxResults?: number;
    /**
     * Page token to retrieve a specific page of results in the list.
     */
    pageToken?: string;
    /**
     * Required. Returns history records after the specified `startHistoryId`. The supplied `startHistoryId` should be obtained from the `historyId` of a message, thread, or previous `list` response. History IDs increase chronologically but are not contiguous with random gaps in between valid IDs. Supplying an invalid or out of date `startHistoryId` typically returns an `HTTP 404` error code. A `historyId` is typically valid for at least a week, but in some rare circumstances may be valid for only a few hours. If you receive an `HTTP 404` error response, your application should perform a full sync. If you receive no `nextPageToken` in the response, there are no updates to retrieve and you can store the returned `historyId` for a future request.
     */
    startHistoryId?: string;
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;
  }

  export class Resource$Users$Labels {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new label.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.labels',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.labels.create({
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "color": {},
     *       //   "id": "my_id",
     *       //   "labelListVisibility": "my_labelListVisibility",
     *       //   "messageListVisibility": "my_messageListVisibility",
     *       //   "messagesTotal": 0,
     *       //   "messagesUnread": 0,
     *       //   "name": "my_name",
     *       //   "threadsTotal": 0,
     *       //   "threadsUnread": 0,
     *       //   "type": "my_type"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "color": {},
     *   //   "id": "my_id",
     *   //   "labelListVisibility": "my_labelListVisibility",
     *   //   "messageListVisibility": "my_messageListVisibility",
     *   //   "messagesTotal": 0,
     *   //   "messagesUnread": 0,
     *   //   "name": "my_name",
     *   //   "threadsTotal": 0,
     *   //   "threadsUnread": 0,
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
    create(
      params: Params$Resource$Users$Labels$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Users$Labels$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Label>;
    create(
      params: Params$Resource$Users$Labels$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Users$Labels$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Label>,
      callback: BodyResponseCallback<Schema$Label>
    ): void;
    create(
      params: Params$Resource$Users$Labels$Create,
      callback: BodyResponseCallback<Schema$Label>
    ): void;
    create(callback: BodyResponseCallback<Schema$Label>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Users$Labels$Create
        | BodyResponseCallback<Schema$Label>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Label>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Label>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Label> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Labels$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Labels$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/labels').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Label>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Label>(parameters);
      }
    }

    /**
     * Immediately and permanently deletes the specified label and removes it from any messages and threads that it is applied to.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.labels',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.labels.delete({
     *     // The ID of the label to delete.
     *     id: 'placeholder-value',
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Users$Labels$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Users$Labels$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Users$Labels$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Users$Labels$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Users$Labels$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Users$Labels$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Labels$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Labels$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/labels/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'id'],
        pathParams: ['id', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Gets the specified label.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.labels',
     *       'https://www.googleapis.com/auth/gmail.metadata',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *       'https://www.googleapis.com/auth/gmail.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.labels.get({
     *     // The ID of the label to retrieve.
     *     id: 'placeholder-value',
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "color": {},
     *   //   "id": "my_id",
     *   //   "labelListVisibility": "my_labelListVisibility",
     *   //   "messageListVisibility": "my_messageListVisibility",
     *   //   "messagesTotal": 0,
     *   //   "messagesUnread": 0,
     *   //   "name": "my_name",
     *   //   "threadsTotal": 0,
     *   //   "threadsUnread": 0,
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
      params: Params$Resource$Users$Labels$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Users$Labels$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Label>;
    get(
      params: Params$Resource$Users$Labels$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Users$Labels$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Label>,
      callback: BodyResponseCallback<Schema$Label>
    ): void;
    get(
      params: Params$Resource$Users$Labels$Get,
      callback: BodyResponseCallback<Schema$Label>
    ): void;
    get(callback: BodyResponseCallback<Schema$Label>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Users$Labels$Get
        | BodyResponseCallback<Schema$Label>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Label>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Label>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Label> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Users$Labels$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Labels$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/labels/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'id'],
        pathParams: ['id', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Label>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Label>(parameters);
      }
    }

    /**
     * Lists all labels in the user's mailbox.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.labels',
     *       'https://www.googleapis.com/auth/gmail.metadata',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *       'https://www.googleapis.com/auth/gmail.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.labels.list({
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "labels": []
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
      params: Params$Resource$Users$Labels$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Users$Labels$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLabelsResponse>;
    list(
      params: Params$Resource$Users$Labels$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Users$Labels$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListLabelsResponse>,
      callback: BodyResponseCallback<Schema$ListLabelsResponse>
    ): void;
    list(
      params: Params$Resource$Users$Labels$List,
      callback: BodyResponseCallback<Schema$ListLabelsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListLabelsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Users$Labels$List
        | BodyResponseCallback<Schema$ListLabelsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListLabelsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListLabelsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListLabelsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Labels$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Labels$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/labels').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListLabelsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListLabelsResponse>(parameters);
      }
    }

    /**
     * Patch the specified label.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.labels',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.labels.patch({
     *     // The ID of the label to update.
     *     id: 'placeholder-value',
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "color": {},
     *       //   "id": "my_id",
     *       //   "labelListVisibility": "my_labelListVisibility",
     *       //   "messageListVisibility": "my_messageListVisibility",
     *       //   "messagesTotal": 0,
     *       //   "messagesUnread": 0,
     *       //   "name": "my_name",
     *       //   "threadsTotal": 0,
     *       //   "threadsUnread": 0,
     *       //   "type": "my_type"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "color": {},
     *   //   "id": "my_id",
     *   //   "labelListVisibility": "my_labelListVisibility",
     *   //   "messageListVisibility": "my_messageListVisibility",
     *   //   "messagesTotal": 0,
     *   //   "messagesUnread": 0,
     *   //   "name": "my_name",
     *   //   "threadsTotal": 0,
     *   //   "threadsUnread": 0,
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
    patch(
      params: Params$Resource$Users$Labels$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Users$Labels$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Label>;
    patch(
      params: Params$Resource$Users$Labels$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Users$Labels$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Label>,
      callback: BodyResponseCallback<Schema$Label>
    ): void;
    patch(
      params: Params$Resource$Users$Labels$Patch,
      callback: BodyResponseCallback<Schema$Label>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Label>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Users$Labels$Patch
        | BodyResponseCallback<Schema$Label>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Label>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Label>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Label> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Labels$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Labels$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/labels/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'id'],
        pathParams: ['id', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Label>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Label>(parameters);
      }
    }

    /**
     * Updates the specified label.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.labels',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.labels.update({
     *     // The ID of the label to update.
     *     id: 'placeholder-value',
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "color": {},
     *       //   "id": "my_id",
     *       //   "labelListVisibility": "my_labelListVisibility",
     *       //   "messageListVisibility": "my_messageListVisibility",
     *       //   "messagesTotal": 0,
     *       //   "messagesUnread": 0,
     *       //   "name": "my_name",
     *       //   "threadsTotal": 0,
     *       //   "threadsUnread": 0,
     *       //   "type": "my_type"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "color": {},
     *   //   "id": "my_id",
     *   //   "labelListVisibility": "my_labelListVisibility",
     *   //   "messageListVisibility": "my_messageListVisibility",
     *   //   "messagesTotal": 0,
     *   //   "messagesUnread": 0,
     *   //   "name": "my_name",
     *   //   "threadsTotal": 0,
     *   //   "threadsUnread": 0,
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
    update(
      params: Params$Resource$Users$Labels$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Users$Labels$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Label>;
    update(
      params: Params$Resource$Users$Labels$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Users$Labels$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Label>,
      callback: BodyResponseCallback<Schema$Label>
    ): void;
    update(
      params: Params$Resource$Users$Labels$Update,
      callback: BodyResponseCallback<Schema$Label>
    ): void;
    update(callback: BodyResponseCallback<Schema$Label>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Users$Labels$Update
        | BodyResponseCallback<Schema$Label>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Label>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Label>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Label> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Labels$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Labels$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/labels/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'id'],
        pathParams: ['id', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Label>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Label>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Labels$Create
    extends StandardParameters {
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Label;
  }
  export interface Params$Resource$Users$Labels$Delete
    extends StandardParameters {
    /**
     * The ID of the label to delete.
     */
    id?: string;
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Labels$Get extends StandardParameters {
    /**
     * The ID of the label to retrieve.
     */
    id?: string;
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Labels$List
    extends StandardParameters {
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Labels$Patch
    extends StandardParameters {
    /**
     * The ID of the label to update.
     */
    id?: string;
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Label;
  }
  export interface Params$Resource$Users$Labels$Update
    extends StandardParameters {
    /**
     * The ID of the label to update.
     */
    id?: string;
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Label;
  }

  export class Resource$Users$Messages {
    context: APIRequestContext;
    attachments: Resource$Users$Messages$Attachments;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.attachments = new Resource$Users$Messages$Attachments(this.context);
    }

    /**
     * Deletes many messages by message ID. Provides no guarantees that messages were not already deleted or even existed at all.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://mail.google.com/'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.messages.batchDelete({
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "ids": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
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
    batchDelete(
      params: Params$Resource$Users$Messages$Batchdelete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchDelete(
      params?: Params$Resource$Users$Messages$Batchdelete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    batchDelete(
      params: Params$Resource$Users$Messages$Batchdelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchDelete(
      params: Params$Resource$Users$Messages$Batchdelete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    batchDelete(
      params: Params$Resource$Users$Messages$Batchdelete,
      callback: BodyResponseCallback<void>
    ): void;
    batchDelete(callback: BodyResponseCallback<void>): void;
    batchDelete(
      paramsOrCallback?:
        | Params$Resource$Users$Messages$Batchdelete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Messages$Batchdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Messages$Batchdelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/gmail/v1/users/{userId}/messages/batchDelete'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Modifies the labels on the specified messages.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.messages.batchModify({
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "addLabelIds": [],
     *       //   "ids": [],
     *       //   "removeLabelIds": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
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
    batchModify(
      params: Params$Resource$Users$Messages$Batchmodify,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchModify(
      params?: Params$Resource$Users$Messages$Batchmodify,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    batchModify(
      params: Params$Resource$Users$Messages$Batchmodify,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchModify(
      params: Params$Resource$Users$Messages$Batchmodify,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    batchModify(
      params: Params$Resource$Users$Messages$Batchmodify,
      callback: BodyResponseCallback<void>
    ): void;
    batchModify(callback: BodyResponseCallback<void>): void;
    batchModify(
      paramsOrCallback?:
        | Params$Resource$Users$Messages$Batchmodify
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Messages$Batchmodify;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Messages$Batchmodify;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/gmail/v1/users/{userId}/messages/batchModify'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Immediately and permanently deletes the specified message. This operation cannot be undone. Prefer `messages.trash` instead.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://mail.google.com/'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.messages.delete({
     *     // The ID of the message to delete.
     *     id: 'placeholder-value',
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Users$Messages$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Users$Messages$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Users$Messages$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Users$Messages$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Users$Messages$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Users$Messages$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Messages$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Messages$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/messages/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'id'],
        pathParams: ['id', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Gets the specified message.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.addons.current.message.action',
     *       'https://www.googleapis.com/auth/gmail.addons.current.message.metadata',
     *       'https://www.googleapis.com/auth/gmail.addons.current.message.readonly',
     *       'https://www.googleapis.com/auth/gmail.metadata',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *       'https://www.googleapis.com/auth/gmail.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.messages.get({
     *     // The format to return the message in.
     *     format: 'placeholder-value',
     *     // The ID of the message to retrieve. This ID is usually retrieved using `messages.list`. The ID is also contained in the result when a message is inserted (`messages.insert`) or imported (`messages.import`).
     *     id: 'placeholder-value',
     *     // When given and format is `METADATA`, only include headers specified.
     *     metadataHeaders: 'placeholder-value',
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "historyId": "my_historyId",
     *   //   "id": "my_id",
     *   //   "internalDate": "my_internalDate",
     *   //   "labelIds": [],
     *   //   "payload": {},
     *   //   "raw": "my_raw",
     *   //   "sizeEstimate": 0,
     *   //   "snippet": "my_snippet",
     *   //   "threadId": "my_threadId"
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
      params: Params$Resource$Users$Messages$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Users$Messages$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
    get(
      params: Params$Resource$Users$Messages$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Users$Messages$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    get(
      params: Params$Resource$Users$Messages$Get,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    get(callback: BodyResponseCallback<Schema$Message>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Users$Messages$Get
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
        {}) as Params$Resource$Users$Messages$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Messages$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/messages/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'id'],
        pathParams: ['id', 'userId'],
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
     * Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. This method doesn't perform SPF checks, so it might not work for some spam messages, such as those attempting to perform domain spoofing. This method does not send a message.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.insert',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.messages.import({
     *     // Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for Google Workspace accounts.
     *     deleted: 'placeholder-value',
     *     // Source for Gmail's internal date of the message.
     *     internalDateSource: 'placeholder-value',
     *     // Ignore the Gmail spam classifier decision and never mark this email as SPAM in the mailbox.
     *     neverMarkSpam: 'placeholder-value',
     *     // Process calendar invites in the email and add any extracted meetings to the Google Calendar for this user.
     *     processForCalendar: 'placeholder-value',
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "historyId": "my_historyId",
     *       //   "id": "my_id",
     *       //   "internalDate": "my_internalDate",
     *       //   "labelIds": [],
     *       //   "payload": {},
     *       //   "raw": "my_raw",
     *       //   "sizeEstimate": 0,
     *       //   "snippet": "my_snippet",
     *       //   "threadId": "my_threadId"
     *       // }
     *     },
     *     media: {
     *       mimeType: 'placeholder-value',
     *       body: 'placeholder-value',
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "historyId": "my_historyId",
     *   //   "id": "my_id",
     *   //   "internalDate": "my_internalDate",
     *   //   "labelIds": [],
     *   //   "payload": {},
     *   //   "raw": "my_raw",
     *   //   "sizeEstimate": 0,
     *   //   "snippet": "my_snippet",
     *   //   "threadId": "my_threadId"
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
    import(
      params: Params$Resource$Users$Messages$Import,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    import(
      params?: Params$Resource$Users$Messages$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
    import(
      params: Params$Resource$Users$Messages$Import,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    import(
      params: Params$Resource$Users$Messages$Import,
      options: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    import(
      params: Params$Resource$Users$Messages$Import,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    import(callback: BodyResponseCallback<Schema$Message>): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Users$Messages$Import
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
        {}) as Params$Resource$Users$Messages$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Messages$Import;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/messages/import').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (
          rootUrl + '/upload/gmail/v1/users/{userId}/messages/import'
        ).replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['userId'],
        pathParams: ['userId'],
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
     * Directly inserts a message into only this user's mailbox similar to `IMAP APPEND`, bypassing most scanning and classification. Does not send a message.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.insert',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.messages.insert({
     *     // Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for Google Workspace accounts.
     *     deleted: 'placeholder-value',
     *     // Source for Gmail's internal date of the message.
     *     internalDateSource: 'placeholder-value',
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "historyId": "my_historyId",
     *       //   "id": "my_id",
     *       //   "internalDate": "my_internalDate",
     *       //   "labelIds": [],
     *       //   "payload": {},
     *       //   "raw": "my_raw",
     *       //   "sizeEstimate": 0,
     *       //   "snippet": "my_snippet",
     *       //   "threadId": "my_threadId"
     *       // }
     *     },
     *     media: {
     *       mimeType: 'placeholder-value',
     *       body: 'placeholder-value',
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "historyId": "my_historyId",
     *   //   "id": "my_id",
     *   //   "internalDate": "my_internalDate",
     *   //   "labelIds": [],
     *   //   "payload": {},
     *   //   "raw": "my_raw",
     *   //   "sizeEstimate": 0,
     *   //   "snippet": "my_snippet",
     *   //   "threadId": "my_threadId"
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
    insert(
      params: Params$Resource$Users$Messages$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Users$Messages$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
    insert(
      params: Params$Resource$Users$Messages$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Users$Messages$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    insert(
      params: Params$Resource$Users$Messages$Insert,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Message>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Users$Messages$Insert
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
        {}) as Params$Resource$Users$Messages$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Messages$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/messages').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (
          rootUrl + '/upload/gmail/v1/users/{userId}/messages'
        ).replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['userId'],
        pathParams: ['userId'],
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
     * Lists the messages in the user's mailbox.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.metadata',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *       'https://www.googleapis.com/auth/gmail.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.messages.list({
     *     // Include messages from `SPAM` and `TRASH` in the results.
     *     includeSpamTrash: 'placeholder-value',
     *     // Only return messages with labels that match all of the specified label IDs. Messages in a thread might have labels that other messages in the same thread don't have. To learn more, see [Manage labels on messages and threads](https://developers.google.com/gmail/api/guides/labels#manage_labels_on_messages_threads).
     *     labelIds: 'placeholder-value',
     *     // Maximum number of messages to return. This field defaults to 100. The maximum allowed value for this field is 500.
     *     maxResults: 'placeholder-value',
     *     // Page token to retrieve a specific page of results in the list.
     *     pageToken: 'placeholder-value',
     *     // Only return messages matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`. Parameter cannot be used when accessing the api using the gmail.metadata scope.
     *     q: 'placeholder-value',
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "messages": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "resultSizeEstimate": 0
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
      params: Params$Resource$Users$Messages$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Users$Messages$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListMessagesResponse>;
    list(
      params: Params$Resource$Users$Messages$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Users$Messages$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListMessagesResponse>,
      callback: BodyResponseCallback<Schema$ListMessagesResponse>
    ): void;
    list(
      params: Params$Resource$Users$Messages$List,
      callback: BodyResponseCallback<Schema$ListMessagesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListMessagesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Users$Messages$List
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
        {}) as Params$Resource$Users$Messages$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Messages$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/messages').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
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
     * Modifies the labels on the specified message.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.messages.modify({
     *     // The ID of the message to modify.
     *     id: 'placeholder-value',
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "addLabelIds": [],
     *       //   "removeLabelIds": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "historyId": "my_historyId",
     *   //   "id": "my_id",
     *   //   "internalDate": "my_internalDate",
     *   //   "labelIds": [],
     *   //   "payload": {},
     *   //   "raw": "my_raw",
     *   //   "sizeEstimate": 0,
     *   //   "snippet": "my_snippet",
     *   //   "threadId": "my_threadId"
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
    modify(
      params: Params$Resource$Users$Messages$Modify,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    modify(
      params?: Params$Resource$Users$Messages$Modify,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
    modify(
      params: Params$Resource$Users$Messages$Modify,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    modify(
      params: Params$Resource$Users$Messages$Modify,
      options: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    modify(
      params: Params$Resource$Users$Messages$Modify,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    modify(callback: BodyResponseCallback<Schema$Message>): void;
    modify(
      paramsOrCallback?:
        | Params$Resource$Users$Messages$Modify
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
        {}) as Params$Resource$Users$Messages$Modify;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Messages$Modify;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/gmail/v1/users/{userId}/messages/{id}/modify'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'id'],
        pathParams: ['id', 'userId'],
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
     * Sends the specified message to the recipients in the `To`, `Cc`, and `Bcc` headers. For example usage, see [Sending email](https://developers.google.com/gmail/api/guides/sending).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.addons.current.action.compose',
     *       'https://www.googleapis.com/auth/gmail.compose',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *       'https://www.googleapis.com/auth/gmail.send',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.messages.send({
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "historyId": "my_historyId",
     *       //   "id": "my_id",
     *       //   "internalDate": "my_internalDate",
     *       //   "labelIds": [],
     *       //   "payload": {},
     *       //   "raw": "my_raw",
     *       //   "sizeEstimate": 0,
     *       //   "snippet": "my_snippet",
     *       //   "threadId": "my_threadId"
     *       // }
     *     },
     *     media: {
     *       mimeType: 'placeholder-value',
     *       body: 'placeholder-value',
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "historyId": "my_historyId",
     *   //   "id": "my_id",
     *   //   "internalDate": "my_internalDate",
     *   //   "labelIds": [],
     *   //   "payload": {},
     *   //   "raw": "my_raw",
     *   //   "sizeEstimate": 0,
     *   //   "snippet": "my_snippet",
     *   //   "threadId": "my_threadId"
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
    send(
      params: Params$Resource$Users$Messages$Send,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    send(
      params?: Params$Resource$Users$Messages$Send,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
    send(
      params: Params$Resource$Users$Messages$Send,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    send(
      params: Params$Resource$Users$Messages$Send,
      options: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    send(
      params: Params$Resource$Users$Messages$Send,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    send(callback: BodyResponseCallback<Schema$Message>): void;
    send(
      paramsOrCallback?:
        | Params$Resource$Users$Messages$Send
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
        {}) as Params$Resource$Users$Messages$Send;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Messages$Send;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/messages/send').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (
          rootUrl + '/upload/gmail/v1/users/{userId}/messages/send'
        ).replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['userId'],
        pathParams: ['userId'],
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
     * Moves the specified message to the trash.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.messages.trash({
     *     // The ID of the message to Trash.
     *     id: 'placeholder-value',
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "historyId": "my_historyId",
     *   //   "id": "my_id",
     *   //   "internalDate": "my_internalDate",
     *   //   "labelIds": [],
     *   //   "payload": {},
     *   //   "raw": "my_raw",
     *   //   "sizeEstimate": 0,
     *   //   "snippet": "my_snippet",
     *   //   "threadId": "my_threadId"
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
    trash(
      params: Params$Resource$Users$Messages$Trash,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    trash(
      params?: Params$Resource$Users$Messages$Trash,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
    trash(
      params: Params$Resource$Users$Messages$Trash,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    trash(
      params: Params$Resource$Users$Messages$Trash,
      options: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    trash(
      params: Params$Resource$Users$Messages$Trash,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    trash(callback: BodyResponseCallback<Schema$Message>): void;
    trash(
      paramsOrCallback?:
        | Params$Resource$Users$Messages$Trash
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
        {}) as Params$Resource$Users$Messages$Trash;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Messages$Trash;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/gmail/v1/users/{userId}/messages/{id}/trash'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'id'],
        pathParams: ['id', 'userId'],
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
     * Removes the specified message from the trash.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.messages.untrash({
     *     // The ID of the message to remove from Trash.
     *     id: 'placeholder-value',
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "historyId": "my_historyId",
     *   //   "id": "my_id",
     *   //   "internalDate": "my_internalDate",
     *   //   "labelIds": [],
     *   //   "payload": {},
     *   //   "raw": "my_raw",
     *   //   "sizeEstimate": 0,
     *   //   "snippet": "my_snippet",
     *   //   "threadId": "my_threadId"
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
    untrash(
      params: Params$Resource$Users$Messages$Untrash,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    untrash(
      params?: Params$Resource$Users$Messages$Untrash,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
    untrash(
      params: Params$Resource$Users$Messages$Untrash,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    untrash(
      params: Params$Resource$Users$Messages$Untrash,
      options: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    untrash(
      params: Params$Resource$Users$Messages$Untrash,
      callback: BodyResponseCallback<Schema$Message>
    ): void;
    untrash(callback: BodyResponseCallback<Schema$Message>): void;
    untrash(
      paramsOrCallback?:
        | Params$Resource$Users$Messages$Untrash
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
        {}) as Params$Resource$Users$Messages$Untrash;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Messages$Untrash;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/gmail/v1/users/{userId}/messages/{id}/untrash'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'id'],
        pathParams: ['id', 'userId'],
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

  export interface Params$Resource$Users$Messages$Batchdelete
    extends StandardParameters {
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchDeleteMessagesRequest;
  }
  export interface Params$Resource$Users$Messages$Batchmodify
    extends StandardParameters {
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchModifyMessagesRequest;
  }
  export interface Params$Resource$Users$Messages$Delete
    extends StandardParameters {
    /**
     * The ID of the message to delete.
     */
    id?: string;
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Messages$Get
    extends StandardParameters {
    /**
     * The format to return the message in.
     */
    format?: string;
    /**
     * The ID of the message to retrieve. This ID is usually retrieved using `messages.list`. The ID is also contained in the result when a message is inserted (`messages.insert`) or imported (`messages.import`).
     */
    id?: string;
    /**
     * When given and format is `METADATA`, only include headers specified.
     */
    metadataHeaders?: string[];
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Messages$Import
    extends StandardParameters {
    /**
     * Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for Google Workspace accounts.
     */
    deleted?: boolean;
    /**
     * Source for Gmail's internal date of the message.
     */
    internalDateSource?: string;
    /**
     * Ignore the Gmail spam classifier decision and never mark this email as SPAM in the mailbox.
     */
    neverMarkSpam?: boolean;
    /**
     * Process calendar invites in the email and add any extracted meetings to the Google Calendar for this user.
     */
    processForCalendar?: boolean;
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Message;

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
  export interface Params$Resource$Users$Messages$Insert
    extends StandardParameters {
    /**
     * Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for Google Workspace accounts.
     */
    deleted?: boolean;
    /**
     * Source for Gmail's internal date of the message.
     */
    internalDateSource?: string;
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Message;

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
  export interface Params$Resource$Users$Messages$List
    extends StandardParameters {
    /**
     * Include messages from `SPAM` and `TRASH` in the results.
     */
    includeSpamTrash?: boolean;
    /**
     * Only return messages with labels that match all of the specified label IDs. Messages in a thread might have labels that other messages in the same thread don't have. To learn more, see [Manage labels on messages and threads](https://developers.google.com/gmail/api/guides/labels#manage_labels_on_messages_threads).
     */
    labelIds?: string[];
    /**
     * Maximum number of messages to return. This field defaults to 100. The maximum allowed value for this field is 500.
     */
    maxResults?: number;
    /**
     * Page token to retrieve a specific page of results in the list.
     */
    pageToken?: string;
    /**
     * Only return messages matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`. Parameter cannot be used when accessing the api using the gmail.metadata scope.
     */
    q?: string;
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Messages$Modify
    extends StandardParameters {
    /**
     * The ID of the message to modify.
     */
    id?: string;
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ModifyMessageRequest;
  }
  export interface Params$Resource$Users$Messages$Send
    extends StandardParameters {
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Message;

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
  export interface Params$Resource$Users$Messages$Trash
    extends StandardParameters {
    /**
     * The ID of the message to Trash.
     */
    id?: string;
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Messages$Untrash
    extends StandardParameters {
    /**
     * The ID of the message to remove from Trash.
     */
    id?: string;
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;
  }

  export class Resource$Users$Messages$Attachments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the specified message attachment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.addons.current.message.action',
     *       'https://www.googleapis.com/auth/gmail.addons.current.message.readonly',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *       'https://www.googleapis.com/auth/gmail.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.messages.attachments.get({
     *     // The ID of the attachment.
     *     id: 'placeholder-value',
     *     // The ID of the message containing the attachment.
     *     messageId: 'placeholder-value',
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attachmentId": "my_attachmentId",
     *   //   "data": "my_data",
     *   //   "size": 0
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
      params: Params$Resource$Users$Messages$Attachments$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Users$Messages$Attachments$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$MessagePartBody>;
    get(
      params: Params$Resource$Users$Messages$Attachments$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Users$Messages$Attachments$Get,
      options: MethodOptions | BodyResponseCallback<Schema$MessagePartBody>,
      callback: BodyResponseCallback<Schema$MessagePartBody>
    ): void;
    get(
      params: Params$Resource$Users$Messages$Attachments$Get,
      callback: BodyResponseCallback<Schema$MessagePartBody>
    ): void;
    get(callback: BodyResponseCallback<Schema$MessagePartBody>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Users$Messages$Attachments$Get
        | BodyResponseCallback<Schema$MessagePartBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$MessagePartBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$MessagePartBody>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$MessagePartBody> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Messages$Attachments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Messages$Attachments$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/gmail/v1/users/{userId}/messages/{messageId}/attachments/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'messageId', 'id'],
        pathParams: ['id', 'messageId', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$MessagePartBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$MessagePartBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Messages$Attachments$Get
    extends StandardParameters {
    /**
     * The ID of the attachment.
     */
    id?: string;
    /**
     * The ID of the message containing the attachment.
     */
    messageId?: string;
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;
  }

  export class Resource$Users$Settings {
    context: APIRequestContext;
    cse: Resource$Users$Settings$Cse;
    delegates: Resource$Users$Settings$Delegates;
    filters: Resource$Users$Settings$Filters;
    forwardingAddresses: Resource$Users$Settings$Forwardingaddresses;
    sendAs: Resource$Users$Settings$Sendas;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.cse = new Resource$Users$Settings$Cse(this.context);
      this.delegates = new Resource$Users$Settings$Delegates(this.context);
      this.filters = new Resource$Users$Settings$Filters(this.context);
      this.forwardingAddresses =
        new Resource$Users$Settings$Forwardingaddresses(this.context);
      this.sendAs = new Resource$Users$Settings$Sendas(this.context);
    }

    /**
     * Gets the auto-forwarding setting for the specified account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *       'https://www.googleapis.com/auth/gmail.readonly',
     *       'https://www.googleapis.com/auth/gmail.settings.basic',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.getAutoForwarding({
     *     // User's email address. The special value "me" can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "disposition": "my_disposition",
     *   //   "emailAddress": "my_emailAddress",
     *   //   "enabled": false
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
    getAutoForwarding(
      params: Params$Resource$Users$Settings$Getautoforwarding,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getAutoForwarding(
      params?: Params$Resource$Users$Settings$Getautoforwarding,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AutoForwarding>;
    getAutoForwarding(
      params: Params$Resource$Users$Settings$Getautoforwarding,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getAutoForwarding(
      params: Params$Resource$Users$Settings$Getautoforwarding,
      options: MethodOptions | BodyResponseCallback<Schema$AutoForwarding>,
      callback: BodyResponseCallback<Schema$AutoForwarding>
    ): void;
    getAutoForwarding(
      params: Params$Resource$Users$Settings$Getautoforwarding,
      callback: BodyResponseCallback<Schema$AutoForwarding>
    ): void;
    getAutoForwarding(
      callback: BodyResponseCallback<Schema$AutoForwarding>
    ): void;
    getAutoForwarding(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Getautoforwarding
        | BodyResponseCallback<Schema$AutoForwarding>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AutoForwarding>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AutoForwarding>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AutoForwarding> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Getautoforwarding;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Getautoforwarding;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/gmail/v1/users/{userId}/settings/autoForwarding'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AutoForwarding>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AutoForwarding>(parameters);
      }
    }

    /**
     * Gets IMAP settings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *       'https://www.googleapis.com/auth/gmail.readonly',
     *       'https://www.googleapis.com/auth/gmail.settings.basic',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.getImap({
     *     // User's email address. The special value "me" can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "autoExpunge": false,
     *   //   "enabled": false,
     *   //   "expungeBehavior": "my_expungeBehavior",
     *   //   "maxFolderSize": 0
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
    getImap(
      params: Params$Resource$Users$Settings$Getimap,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getImap(
      params?: Params$Resource$Users$Settings$Getimap,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ImapSettings>;
    getImap(
      params: Params$Resource$Users$Settings$Getimap,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getImap(
      params: Params$Resource$Users$Settings$Getimap,
      options: MethodOptions | BodyResponseCallback<Schema$ImapSettings>,
      callback: BodyResponseCallback<Schema$ImapSettings>
    ): void;
    getImap(
      params: Params$Resource$Users$Settings$Getimap,
      callback: BodyResponseCallback<Schema$ImapSettings>
    ): void;
    getImap(callback: BodyResponseCallback<Schema$ImapSettings>): void;
    getImap(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Getimap
        | BodyResponseCallback<Schema$ImapSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ImapSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ImapSettings>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ImapSettings> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Getimap;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Getimap;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/settings/imap').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ImapSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ImapSettings>(parameters);
      }
    }

    /**
     * Gets language settings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *       'https://www.googleapis.com/auth/gmail.readonly',
     *       'https://www.googleapis.com/auth/gmail.settings.basic',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.getLanguage({
     *     // User's email address. The special value "me" can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayLanguage": "my_displayLanguage"
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
    getLanguage(
      params: Params$Resource$Users$Settings$Getlanguage,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getLanguage(
      params?: Params$Resource$Users$Settings$Getlanguage,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LanguageSettings>;
    getLanguage(
      params: Params$Resource$Users$Settings$Getlanguage,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getLanguage(
      params: Params$Resource$Users$Settings$Getlanguage,
      options: MethodOptions | BodyResponseCallback<Schema$LanguageSettings>,
      callback: BodyResponseCallback<Schema$LanguageSettings>
    ): void;
    getLanguage(
      params: Params$Resource$Users$Settings$Getlanguage,
      callback: BodyResponseCallback<Schema$LanguageSettings>
    ): void;
    getLanguage(callback: BodyResponseCallback<Schema$LanguageSettings>): void;
    getLanguage(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Getlanguage
        | BodyResponseCallback<Schema$LanguageSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LanguageSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LanguageSettings>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$LanguageSettings> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Getlanguage;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Getlanguage;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/gmail/v1/users/{userId}/settings/language'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LanguageSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LanguageSettings>(parameters);
      }
    }

    /**
     * Gets POP settings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *       'https://www.googleapis.com/auth/gmail.readonly',
     *       'https://www.googleapis.com/auth/gmail.settings.basic',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.getPop({
     *     // User's email address. The special value "me" can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessWindow": "my_accessWindow",
     *   //   "disposition": "my_disposition"
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
    getPop(
      params: Params$Resource$Users$Settings$Getpop,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getPop(
      params?: Params$Resource$Users$Settings$Getpop,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PopSettings>;
    getPop(
      params: Params$Resource$Users$Settings$Getpop,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getPop(
      params: Params$Resource$Users$Settings$Getpop,
      options: MethodOptions | BodyResponseCallback<Schema$PopSettings>,
      callback: BodyResponseCallback<Schema$PopSettings>
    ): void;
    getPop(
      params: Params$Resource$Users$Settings$Getpop,
      callback: BodyResponseCallback<Schema$PopSettings>
    ): void;
    getPop(callback: BodyResponseCallback<Schema$PopSettings>): void;
    getPop(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Getpop
        | BodyResponseCallback<Schema$PopSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PopSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PopSettings>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PopSettings> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Getpop;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Getpop;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/settings/pop').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PopSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PopSettings>(parameters);
      }
    }

    /**
     * Gets vacation responder settings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *       'https://www.googleapis.com/auth/gmail.readonly',
     *       'https://www.googleapis.com/auth/gmail.settings.basic',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.getVacation({
     *     // User's email address. The special value "me" can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "enableAutoReply": false,
     *   //   "endTime": "my_endTime",
     *   //   "responseBodyHtml": "my_responseBodyHtml",
     *   //   "responseBodyPlainText": "my_responseBodyPlainText",
     *   //   "responseSubject": "my_responseSubject",
     *   //   "restrictToContacts": false,
     *   //   "restrictToDomain": false,
     *   //   "startTime": "my_startTime"
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
    getVacation(
      params: Params$Resource$Users$Settings$Getvacation,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getVacation(
      params?: Params$Resource$Users$Settings$Getvacation,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VacationSettings>;
    getVacation(
      params: Params$Resource$Users$Settings$Getvacation,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getVacation(
      params: Params$Resource$Users$Settings$Getvacation,
      options: MethodOptions | BodyResponseCallback<Schema$VacationSettings>,
      callback: BodyResponseCallback<Schema$VacationSettings>
    ): void;
    getVacation(
      params: Params$Resource$Users$Settings$Getvacation,
      callback: BodyResponseCallback<Schema$VacationSettings>
    ): void;
    getVacation(callback: BodyResponseCallback<Schema$VacationSettings>): void;
    getVacation(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Getvacation
        | BodyResponseCallback<Schema$VacationSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VacationSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VacationSettings>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$VacationSettings> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Getvacation;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Getvacation;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/gmail/v1/users/{userId}/settings/vacation'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$VacationSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VacationSettings>(parameters);
      }
    }

    /**
     * Updates the auto-forwarding setting for the specified account. A verified forwarding address must be specified when auto-forwarding is enabled. This method is only available to service account clients that have been delegated domain-wide authority.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.updateAutoForwarding({
     *     // User's email address. The special value "me" can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "disposition": "my_disposition",
     *       //   "emailAddress": "my_emailAddress",
     *       //   "enabled": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "disposition": "my_disposition",
     *   //   "emailAddress": "my_emailAddress",
     *   //   "enabled": false
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
    updateAutoForwarding(
      params: Params$Resource$Users$Settings$Updateautoforwarding,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateAutoForwarding(
      params?: Params$Resource$Users$Settings$Updateautoforwarding,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AutoForwarding>;
    updateAutoForwarding(
      params: Params$Resource$Users$Settings$Updateautoforwarding,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateAutoForwarding(
      params: Params$Resource$Users$Settings$Updateautoforwarding,
      options: MethodOptions | BodyResponseCallback<Schema$AutoForwarding>,
      callback: BodyResponseCallback<Schema$AutoForwarding>
    ): void;
    updateAutoForwarding(
      params: Params$Resource$Users$Settings$Updateautoforwarding,
      callback: BodyResponseCallback<Schema$AutoForwarding>
    ): void;
    updateAutoForwarding(
      callback: BodyResponseCallback<Schema$AutoForwarding>
    ): void;
    updateAutoForwarding(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Updateautoforwarding
        | BodyResponseCallback<Schema$AutoForwarding>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AutoForwarding>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AutoForwarding>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AutoForwarding> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Updateautoforwarding;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Updateautoforwarding;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/gmail/v1/users/{userId}/settings/autoForwarding'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AutoForwarding>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AutoForwarding>(parameters);
      }
    }

    /**
     * Updates IMAP settings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/gmail.settings.basic'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.updateImap({
     *     // User's email address. The special value "me" can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "autoExpunge": false,
     *       //   "enabled": false,
     *       //   "expungeBehavior": "my_expungeBehavior",
     *       //   "maxFolderSize": 0
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "autoExpunge": false,
     *   //   "enabled": false,
     *   //   "expungeBehavior": "my_expungeBehavior",
     *   //   "maxFolderSize": 0
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
    updateImap(
      params: Params$Resource$Users$Settings$Updateimap,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateImap(
      params?: Params$Resource$Users$Settings$Updateimap,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ImapSettings>;
    updateImap(
      params: Params$Resource$Users$Settings$Updateimap,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateImap(
      params: Params$Resource$Users$Settings$Updateimap,
      options: MethodOptions | BodyResponseCallback<Schema$ImapSettings>,
      callback: BodyResponseCallback<Schema$ImapSettings>
    ): void;
    updateImap(
      params: Params$Resource$Users$Settings$Updateimap,
      callback: BodyResponseCallback<Schema$ImapSettings>
    ): void;
    updateImap(callback: BodyResponseCallback<Schema$ImapSettings>): void;
    updateImap(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Updateimap
        | BodyResponseCallback<Schema$ImapSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ImapSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ImapSettings>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ImapSettings> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Updateimap;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Updateimap;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/settings/imap').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ImapSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ImapSettings>(parameters);
      }
    }

    /**
     * Updates language settings. If successful, the return object contains the `displayLanguage` that was saved for the user, which may differ from the value passed into the request. This is because the requested `displayLanguage` may not be directly supported by Gmail but have a close variant that is, and so the variant may be chosen and saved instead.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/gmail.settings.basic'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.updateLanguage({
     *     // User's email address. The special value "me" can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayLanguage": "my_displayLanguage"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayLanguage": "my_displayLanguage"
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
    updateLanguage(
      params: Params$Resource$Users$Settings$Updatelanguage,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateLanguage(
      params?: Params$Resource$Users$Settings$Updatelanguage,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LanguageSettings>;
    updateLanguage(
      params: Params$Resource$Users$Settings$Updatelanguage,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateLanguage(
      params: Params$Resource$Users$Settings$Updatelanguage,
      options: MethodOptions | BodyResponseCallback<Schema$LanguageSettings>,
      callback: BodyResponseCallback<Schema$LanguageSettings>
    ): void;
    updateLanguage(
      params: Params$Resource$Users$Settings$Updatelanguage,
      callback: BodyResponseCallback<Schema$LanguageSettings>
    ): void;
    updateLanguage(
      callback: BodyResponseCallback<Schema$LanguageSettings>
    ): void;
    updateLanguage(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Updatelanguage
        | BodyResponseCallback<Schema$LanguageSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LanguageSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LanguageSettings>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$LanguageSettings> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Updatelanguage;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Updatelanguage;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/gmail/v1/users/{userId}/settings/language'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LanguageSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LanguageSettings>(parameters);
      }
    }

    /**
     * Updates POP settings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/gmail.settings.basic'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.updatePop({
     *     // User's email address. The special value "me" can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accessWindow": "my_accessWindow",
     *       //   "disposition": "my_disposition"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessWindow": "my_accessWindow",
     *   //   "disposition": "my_disposition"
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
    updatePop(
      params: Params$Resource$Users$Settings$Updatepop,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updatePop(
      params?: Params$Resource$Users$Settings$Updatepop,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PopSettings>;
    updatePop(
      params: Params$Resource$Users$Settings$Updatepop,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updatePop(
      params: Params$Resource$Users$Settings$Updatepop,
      options: MethodOptions | BodyResponseCallback<Schema$PopSettings>,
      callback: BodyResponseCallback<Schema$PopSettings>
    ): void;
    updatePop(
      params: Params$Resource$Users$Settings$Updatepop,
      callback: BodyResponseCallback<Schema$PopSettings>
    ): void;
    updatePop(callback: BodyResponseCallback<Schema$PopSettings>): void;
    updatePop(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Updatepop
        | BodyResponseCallback<Schema$PopSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PopSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PopSettings>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PopSettings> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Updatepop;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Updatepop;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/settings/pop').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PopSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PopSettings>(parameters);
      }
    }

    /**
     * Updates vacation responder settings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/gmail.settings.basic'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.updateVacation({
     *     // User's email address. The special value "me" can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "enableAutoReply": false,
     *       //   "endTime": "my_endTime",
     *       //   "responseBodyHtml": "my_responseBodyHtml",
     *       //   "responseBodyPlainText": "my_responseBodyPlainText",
     *       //   "responseSubject": "my_responseSubject",
     *       //   "restrictToContacts": false,
     *       //   "restrictToDomain": false,
     *       //   "startTime": "my_startTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "enableAutoReply": false,
     *   //   "endTime": "my_endTime",
     *   //   "responseBodyHtml": "my_responseBodyHtml",
     *   //   "responseBodyPlainText": "my_responseBodyPlainText",
     *   //   "responseSubject": "my_responseSubject",
     *   //   "restrictToContacts": false,
     *   //   "restrictToDomain": false,
     *   //   "startTime": "my_startTime"
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
    updateVacation(
      params: Params$Resource$Users$Settings$Updatevacation,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateVacation(
      params?: Params$Resource$Users$Settings$Updatevacation,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VacationSettings>;
    updateVacation(
      params: Params$Resource$Users$Settings$Updatevacation,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateVacation(
      params: Params$Resource$Users$Settings$Updatevacation,
      options: MethodOptions | BodyResponseCallback<Schema$VacationSettings>,
      callback: BodyResponseCallback<Schema$VacationSettings>
    ): void;
    updateVacation(
      params: Params$Resource$Users$Settings$Updatevacation,
      callback: BodyResponseCallback<Schema$VacationSettings>
    ): void;
    updateVacation(
      callback: BodyResponseCallback<Schema$VacationSettings>
    ): void;
    updateVacation(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Updatevacation
        | BodyResponseCallback<Schema$VacationSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VacationSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VacationSettings>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$VacationSettings> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Updatevacation;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Updatevacation;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/gmail/v1/users/{userId}/settings/vacation'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$VacationSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VacationSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Settings$Getautoforwarding
    extends StandardParameters {
    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Settings$Getimap
    extends StandardParameters {
    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Settings$Getlanguage
    extends StandardParameters {
    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Settings$Getpop
    extends StandardParameters {
    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Settings$Getvacation
    extends StandardParameters {
    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Settings$Updateautoforwarding
    extends StandardParameters {
    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AutoForwarding;
  }
  export interface Params$Resource$Users$Settings$Updateimap
    extends StandardParameters {
    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ImapSettings;
  }
  export interface Params$Resource$Users$Settings$Updatelanguage
    extends StandardParameters {
    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LanguageSettings;
  }
  export interface Params$Resource$Users$Settings$Updatepop
    extends StandardParameters {
    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PopSettings;
  }
  export interface Params$Resource$Users$Settings$Updatevacation
    extends StandardParameters {
    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$VacationSettings;
  }

  export class Resource$Users$Settings$Cse {
    context: APIRequestContext;
    identities: Resource$Users$Settings$Cse$Identities;
    keypairs: Resource$Users$Settings$Cse$Keypairs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.identities = new Resource$Users$Settings$Cse$Identities(
        this.context
      );
      this.keypairs = new Resource$Users$Settings$Cse$Keypairs(this.context);
    }
  }

  export class Resource$Users$Settings$Cse$Identities {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates and configures a client-side encryption identity that's authorized to send mail from the user account. Google publishes the S/MIME certificate to a shared domain-wide directory so that people within a Google Workspace organization can encrypt and send mail to the identity.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/gmail.settings.basic',
     *       'https://www.googleapis.com/auth/gmail.settings.sharing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.cse.identities.create({
     *     // The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "emailAddress": "my_emailAddress",
     *       //   "primaryKeyPairId": "my_primaryKeyPairId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "emailAddress": "my_emailAddress",
     *   //   "primaryKeyPairId": "my_primaryKeyPairId"
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
      params: Params$Resource$Users$Settings$Cse$Identities$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Users$Settings$Cse$Identities$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CseIdentity>;
    create(
      params: Params$Resource$Users$Settings$Cse$Identities$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Users$Settings$Cse$Identities$Create,
      options: MethodOptions | BodyResponseCallback<Schema$CseIdentity>,
      callback: BodyResponseCallback<Schema$CseIdentity>
    ): void;
    create(
      params: Params$Resource$Users$Settings$Cse$Identities$Create,
      callback: BodyResponseCallback<Schema$CseIdentity>
    ): void;
    create(callback: BodyResponseCallback<Schema$CseIdentity>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Cse$Identities$Create
        | BodyResponseCallback<Schema$CseIdentity>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CseIdentity>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CseIdentity>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CseIdentity> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Cse$Identities$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Cse$Identities$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/gmail/v1/users/{userId}/settings/cse/identities'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CseIdentity>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CseIdentity>(parameters);
      }
    }

    /**
     * Deletes a client-side encryption identity. The authenticated user can no longer use the identity to send encrypted messages. You cannot restore the identity after you delete it. Instead, use the CreateCseIdentity method to create another identity with the same configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/gmail.settings.basic',
     *       'https://www.googleapis.com/auth/gmail.settings.sharing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.cse.identities.delete({
     *     // The primary email address associated with the client-side encryption identity configuration that's removed.
     *     cseEmailAddress: 'placeholder-value',
     *     // The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Users$Settings$Cse$Identities$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Users$Settings$Cse$Identities$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Users$Settings$Cse$Identities$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Users$Settings$Cse$Identities$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Users$Settings$Cse$Identities$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Cse$Identities$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Cse$Identities$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Cse$Identities$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/gmail/v1/users/{userId}/settings/cse/identities/{cseEmailAddress}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'cseEmailAddress'],
        pathParams: ['cseEmailAddress', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Retrieves a client-side encryption identity configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *       'https://www.googleapis.com/auth/gmail.readonly',
     *       'https://www.googleapis.com/auth/gmail.settings.basic',
     *       'https://www.googleapis.com/auth/gmail.settings.sharing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.cse.identities.get({
     *     // The primary email address associated with the client-side encryption identity configuration that's retrieved.
     *     cseEmailAddress: 'placeholder-value',
     *     // The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "emailAddress": "my_emailAddress",
     *   //   "primaryKeyPairId": "my_primaryKeyPairId"
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
      params: Params$Resource$Users$Settings$Cse$Identities$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Users$Settings$Cse$Identities$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CseIdentity>;
    get(
      params: Params$Resource$Users$Settings$Cse$Identities$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Users$Settings$Cse$Identities$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CseIdentity>,
      callback: BodyResponseCallback<Schema$CseIdentity>
    ): void;
    get(
      params: Params$Resource$Users$Settings$Cse$Identities$Get,
      callback: BodyResponseCallback<Schema$CseIdentity>
    ): void;
    get(callback: BodyResponseCallback<Schema$CseIdentity>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Cse$Identities$Get
        | BodyResponseCallback<Schema$CseIdentity>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CseIdentity>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CseIdentity>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CseIdentity> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Cse$Identities$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Cse$Identities$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/gmail/v1/users/{userId}/settings/cse/identities/{cseEmailAddress}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'cseEmailAddress'],
        pathParams: ['cseEmailAddress', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CseIdentity>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CseIdentity>(parameters);
      }
    }

    /**
     * Lists the client-side encrypted identities for an authenticated user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *       'https://www.googleapis.com/auth/gmail.readonly',
     *       'https://www.googleapis.com/auth/gmail.settings.basic',
     *       'https://www.googleapis.com/auth/gmail.settings.sharing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.cse.identities.list({
     *     // The number of identities to return. If not provided, the page size will default to 20 entries.
     *     pageSize: 'placeholder-value',
     *     // Pagination token indicating which page of identities to return. If the token is not supplied, then the API will return the first page of results.
     *     pageToken: 'placeholder-value',
     *     // The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cseIdentities": [],
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
      params: Params$Resource$Users$Settings$Cse$Identities$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Users$Settings$Cse$Identities$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListCseIdentitiesResponse>;
    list(
      params: Params$Resource$Users$Settings$Cse$Identities$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Users$Settings$Cse$Identities$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCseIdentitiesResponse>,
      callback: BodyResponseCallback<Schema$ListCseIdentitiesResponse>
    ): void;
    list(
      params: Params$Resource$Users$Settings$Cse$Identities$List,
      callback: BodyResponseCallback<Schema$ListCseIdentitiesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListCseIdentitiesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Cse$Identities$List
        | BodyResponseCallback<Schema$ListCseIdentitiesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCseIdentitiesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCseIdentitiesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListCseIdentitiesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Cse$Identities$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Cse$Identities$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/gmail/v1/users/{userId}/settings/cse/identities'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListCseIdentitiesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCseIdentitiesResponse>(parameters);
      }
    }

    /**
     * Associates a different key pair with an existing client-side encryption identity. The updated key pair must validate against Google's [S/MIME certificate profiles](https://support.google.com/a/answer/7300887).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/gmail.settings.basic',
     *       'https://www.googleapis.com/auth/gmail.settings.sharing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.cse.identities.patch({
     *     // The email address of the client-side encryption identity to update.
     *     emailAddress: 'placeholder-value',
     *     // The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "emailAddress": "my_emailAddress",
     *       //   "primaryKeyPairId": "my_primaryKeyPairId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "emailAddress": "my_emailAddress",
     *   //   "primaryKeyPairId": "my_primaryKeyPairId"
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
      params: Params$Resource$Users$Settings$Cse$Identities$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Users$Settings$Cse$Identities$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CseIdentity>;
    patch(
      params: Params$Resource$Users$Settings$Cse$Identities$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Users$Settings$Cse$Identities$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$CseIdentity>,
      callback: BodyResponseCallback<Schema$CseIdentity>
    ): void;
    patch(
      params: Params$Resource$Users$Settings$Cse$Identities$Patch,
      callback: BodyResponseCallback<Schema$CseIdentity>
    ): void;
    patch(callback: BodyResponseCallback<Schema$CseIdentity>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Cse$Identities$Patch
        | BodyResponseCallback<Schema$CseIdentity>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CseIdentity>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CseIdentity>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CseIdentity> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Cse$Identities$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Cse$Identities$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/gmail/v1/users/{userId}/settings/cse/identities/{emailAddress}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'emailAddress'],
        pathParams: ['emailAddress', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CseIdentity>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CseIdentity>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Settings$Cse$Identities$Create
    extends StandardParameters {
    /**
     * The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CseIdentity;
  }
  export interface Params$Resource$Users$Settings$Cse$Identities$Delete
    extends StandardParameters {
    /**
     * The primary email address associated with the client-side encryption identity configuration that's removed.
     */
    cseEmailAddress?: string;
    /**
     * The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Settings$Cse$Identities$Get
    extends StandardParameters {
    /**
     * The primary email address associated with the client-side encryption identity configuration that's retrieved.
     */
    cseEmailAddress?: string;
    /**
     * The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Settings$Cse$Identities$List
    extends StandardParameters {
    /**
     * The number of identities to return. If not provided, the page size will default to 20 entries.
     */
    pageSize?: number;
    /**
     * Pagination token indicating which page of identities to return. If the token is not supplied, then the API will return the first page of results.
     */
    pageToken?: string;
    /**
     * The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Settings$Cse$Identities$Patch
    extends StandardParameters {
    /**
     * The email address of the client-side encryption identity to update.
     */
    emailAddress?: string;
    /**
     * The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CseIdentity;
  }

  export class Resource$Users$Settings$Cse$Keypairs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates and uploads a client-side encryption S/MIME public key certificate chain and private key metadata for the authenticated user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/gmail.settings.basic',
     *       'https://www.googleapis.com/auth/gmail.settings.sharing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.cse.keypairs.create({
     *     // The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "disableTime": "my_disableTime",
     *       //   "enablementState": "my_enablementState",
     *       //   "keyPairId": "my_keyPairId",
     *       //   "pem": "my_pem",
     *       //   "pkcs7": "my_pkcs7",
     *       //   "privateKeyMetadata": [],
     *       //   "subjectEmailAddresses": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "disableTime": "my_disableTime",
     *   //   "enablementState": "my_enablementState",
     *   //   "keyPairId": "my_keyPairId",
     *   //   "pem": "my_pem",
     *   //   "pkcs7": "my_pkcs7",
     *   //   "privateKeyMetadata": [],
     *   //   "subjectEmailAddresses": []
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
      params: Params$Resource$Users$Settings$Cse$Keypairs$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Users$Settings$Cse$Keypairs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CseKeyPair>;
    create(
      params: Params$Resource$Users$Settings$Cse$Keypairs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Users$Settings$Cse$Keypairs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$CseKeyPair>,
      callback: BodyResponseCallback<Schema$CseKeyPair>
    ): void;
    create(
      params: Params$Resource$Users$Settings$Cse$Keypairs$Create,
      callback: BodyResponseCallback<Schema$CseKeyPair>
    ): void;
    create(callback: BodyResponseCallback<Schema$CseKeyPair>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Cse$Keypairs$Create
        | BodyResponseCallback<Schema$CseKeyPair>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CseKeyPair>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CseKeyPair>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CseKeyPair> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Cse$Keypairs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Cse$Keypairs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/gmail/v1/users/{userId}/settings/cse/keypairs'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CseKeyPair>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CseKeyPair>(parameters);
      }
    }

    /**
     * Turns off a client-side encryption key pair. The authenticated user can no longer use the key pair to decrypt incoming CSE message texts or sign outgoing CSE mail. To regain access, use the EnableCseKeyPair to turn on the key pair. After 30 days, you can permanently delete the key pair by using the ObliterateCseKeyPair method.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/gmail.settings.basic',
     *       'https://www.googleapis.com/auth/gmail.settings.sharing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.cse.keypairs.disable({
     *     // The identifier of the key pair to turn off.
     *     keyPairId: 'placeholder-value',
     *     // The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "disableTime": "my_disableTime",
     *   //   "enablementState": "my_enablementState",
     *   //   "keyPairId": "my_keyPairId",
     *   //   "pem": "my_pem",
     *   //   "pkcs7": "my_pkcs7",
     *   //   "privateKeyMetadata": [],
     *   //   "subjectEmailAddresses": []
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
    disable(
      params: Params$Resource$Users$Settings$Cse$Keypairs$Disable,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    disable(
      params?: Params$Resource$Users$Settings$Cse$Keypairs$Disable,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CseKeyPair>;
    disable(
      params: Params$Resource$Users$Settings$Cse$Keypairs$Disable,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    disable(
      params: Params$Resource$Users$Settings$Cse$Keypairs$Disable,
      options: MethodOptions | BodyResponseCallback<Schema$CseKeyPair>,
      callback: BodyResponseCallback<Schema$CseKeyPair>
    ): void;
    disable(
      params: Params$Resource$Users$Settings$Cse$Keypairs$Disable,
      callback: BodyResponseCallback<Schema$CseKeyPair>
    ): void;
    disable(callback: BodyResponseCallback<Schema$CseKeyPair>): void;
    disable(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Cse$Keypairs$Disable
        | BodyResponseCallback<Schema$CseKeyPair>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CseKeyPair>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CseKeyPair>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CseKeyPair> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Cse$Keypairs$Disable;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Cse$Keypairs$Disable;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:disable'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'keyPairId'],
        pathParams: ['keyPairId', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CseKeyPair>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CseKeyPair>(parameters);
      }
    }

    /**
     * Turns on a client-side encryption key pair that was turned off. The key pair becomes active again for any associated client-side encryption identities.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/gmail.settings.basic',
     *       'https://www.googleapis.com/auth/gmail.settings.sharing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.cse.keypairs.enable({
     *     // The identifier of the key pair to turn on.
     *     keyPairId: 'placeholder-value',
     *     // The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "disableTime": "my_disableTime",
     *   //   "enablementState": "my_enablementState",
     *   //   "keyPairId": "my_keyPairId",
     *   //   "pem": "my_pem",
     *   //   "pkcs7": "my_pkcs7",
     *   //   "privateKeyMetadata": [],
     *   //   "subjectEmailAddresses": []
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
    enable(
      params: Params$Resource$Users$Settings$Cse$Keypairs$Enable,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    enable(
      params?: Params$Resource$Users$Settings$Cse$Keypairs$Enable,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CseKeyPair>;
    enable(
      params: Params$Resource$Users$Settings$Cse$Keypairs$Enable,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    enable(
      params: Params$Resource$Users$Settings$Cse$Keypairs$Enable,
      options: MethodOptions | BodyResponseCallback<Schema$CseKeyPair>,
      callback: BodyResponseCallback<Schema$CseKeyPair>
    ): void;
    enable(
      params: Params$Resource$Users$Settings$Cse$Keypairs$Enable,
      callback: BodyResponseCallback<Schema$CseKeyPair>
    ): void;
    enable(callback: BodyResponseCallback<Schema$CseKeyPair>): void;
    enable(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Cse$Keypairs$Enable
        | BodyResponseCallback<Schema$CseKeyPair>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CseKeyPair>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CseKeyPair>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CseKeyPair> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Cse$Keypairs$Enable;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Cse$Keypairs$Enable;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:enable'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'keyPairId'],
        pathParams: ['keyPairId', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CseKeyPair>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CseKeyPair>(parameters);
      }
    }

    /**
     * Retrieves an existing client-side encryption key pair.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *       'https://www.googleapis.com/auth/gmail.readonly',
     *       'https://www.googleapis.com/auth/gmail.settings.basic',
     *       'https://www.googleapis.com/auth/gmail.settings.sharing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.cse.keypairs.get({
     *     // The identifier of the key pair to retrieve.
     *     keyPairId: 'placeholder-value',
     *     // The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "disableTime": "my_disableTime",
     *   //   "enablementState": "my_enablementState",
     *   //   "keyPairId": "my_keyPairId",
     *   //   "pem": "my_pem",
     *   //   "pkcs7": "my_pkcs7",
     *   //   "privateKeyMetadata": [],
     *   //   "subjectEmailAddresses": []
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
      params: Params$Resource$Users$Settings$Cse$Keypairs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Users$Settings$Cse$Keypairs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CseKeyPair>;
    get(
      params: Params$Resource$Users$Settings$Cse$Keypairs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Users$Settings$Cse$Keypairs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CseKeyPair>,
      callback: BodyResponseCallback<Schema$CseKeyPair>
    ): void;
    get(
      params: Params$Resource$Users$Settings$Cse$Keypairs$Get,
      callback: BodyResponseCallback<Schema$CseKeyPair>
    ): void;
    get(callback: BodyResponseCallback<Schema$CseKeyPair>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Cse$Keypairs$Get
        | BodyResponseCallback<Schema$CseKeyPair>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CseKeyPair>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CseKeyPair>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CseKeyPair> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Cse$Keypairs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Cse$Keypairs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'keyPairId'],
        pathParams: ['keyPairId', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CseKeyPair>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CseKeyPair>(parameters);
      }
    }

    /**
     * Lists client-side encryption key pairs for an authenticated user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *       'https://www.googleapis.com/auth/gmail.readonly',
     *       'https://www.googleapis.com/auth/gmail.settings.basic',
     *       'https://www.googleapis.com/auth/gmail.settings.sharing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.cse.keypairs.list({
     *     // The number of key pairs to return. If not provided, the page size will default to 20 entries.
     *     pageSize: 'placeholder-value',
     *     // Pagination token indicating which page of key pairs to return. If the token is not supplied, then the API will return the first page of results.
     *     pageToken: 'placeholder-value',
     *     // The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cseKeyPairs": [],
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
      params: Params$Resource$Users$Settings$Cse$Keypairs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Users$Settings$Cse$Keypairs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListCseKeyPairsResponse>;
    list(
      params: Params$Resource$Users$Settings$Cse$Keypairs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Users$Settings$Cse$Keypairs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCseKeyPairsResponse>,
      callback: BodyResponseCallback<Schema$ListCseKeyPairsResponse>
    ): void;
    list(
      params: Params$Resource$Users$Settings$Cse$Keypairs$List,
      callback: BodyResponseCallback<Schema$ListCseKeyPairsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListCseKeyPairsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Cse$Keypairs$List
        | BodyResponseCallback<Schema$ListCseKeyPairsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCseKeyPairsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCseKeyPairsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListCseKeyPairsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Cse$Keypairs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Cse$Keypairs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/gmail/v1/users/{userId}/settings/cse/keypairs'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListCseKeyPairsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCseKeyPairsResponse>(parameters);
      }
    }

    /**
     * Deletes a client-side encryption key pair permanently and immediately. You can only permanently delete key pairs that have been turned off for more than 30 days. To turn off a key pair, use the DisableCseKeyPair method. Gmail can't restore or decrypt any messages that were encrypted by an obliterated key. Authenticated users and Google Workspace administrators lose access to reading the encrypted messages.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/gmail.settings.basic',
     *       'https://www.googleapis.com/auth/gmail.settings.sharing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.cse.keypairs.obliterate({
     *     // The identifier of the key pair to obliterate.
     *     keyPairId: 'placeholder-value',
     *     // The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
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
    obliterate(
      params: Params$Resource$Users$Settings$Cse$Keypairs$Obliterate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    obliterate(
      params?: Params$Resource$Users$Settings$Cse$Keypairs$Obliterate,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    obliterate(
      params: Params$Resource$Users$Settings$Cse$Keypairs$Obliterate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    obliterate(
      params: Params$Resource$Users$Settings$Cse$Keypairs$Obliterate,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    obliterate(
      params: Params$Resource$Users$Settings$Cse$Keypairs$Obliterate,
      callback: BodyResponseCallback<void>
    ): void;
    obliterate(callback: BodyResponseCallback<void>): void;
    obliterate(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Cse$Keypairs$Obliterate
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Cse$Keypairs$Obliterate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Cse$Keypairs$Obliterate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:obliterate'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'keyPairId'],
        pathParams: ['keyPairId', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Settings$Cse$Keypairs$Create
    extends StandardParameters {
    /**
     * The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CseKeyPair;
  }
  export interface Params$Resource$Users$Settings$Cse$Keypairs$Disable
    extends StandardParameters {
    /**
     * The identifier of the key pair to turn off.
     */
    keyPairId?: string;
    /**
     * The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DisableCseKeyPairRequest;
  }
  export interface Params$Resource$Users$Settings$Cse$Keypairs$Enable
    extends StandardParameters {
    /**
     * The identifier of the key pair to turn on.
     */
    keyPairId?: string;
    /**
     * The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EnableCseKeyPairRequest;
  }
  export interface Params$Resource$Users$Settings$Cse$Keypairs$Get
    extends StandardParameters {
    /**
     * The identifier of the key pair to retrieve.
     */
    keyPairId?: string;
    /**
     * The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Settings$Cse$Keypairs$List
    extends StandardParameters {
    /**
     * The number of key pairs to return. If not provided, the page size will default to 20 entries.
     */
    pageSize?: number;
    /**
     * Pagination token indicating which page of key pairs to return. If the token is not supplied, then the API will return the first page of results.
     */
    pageToken?: string;
    /**
     * The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Settings$Cse$Keypairs$Obliterate
    extends StandardParameters {
    /**
     * The identifier of the key pair to obliterate.
     */
    keyPairId?: string;
    /**
     * The requester's primary email address. To indicate the authenticated user, you can use the special value `me`.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ObliterateCseKeyPairRequest;
  }

  export class Resource$Users$Settings$Delegates {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Adds a delegate with its verification status set directly to `accepted`, without sending any verification email. The delegate user must be a member of the same Google Workspace organization as the delegator user. Gmail imposes limitations on the number of delegates and delegators each user in a Google Workspace organization can have. These limits depend on your organization, but in general each user can have up to 25 delegates and up to 10 delegators. Note that a delegate user must be referred to by their primary email address, and not an email alias. Also note that when a new delegate is created, there may be up to a one minute delay before the new delegate is available for use. This method is only available to service account clients that have been delegated domain-wide authority.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.delegates.create({
     *     // User's email address. The special value "me" can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "delegateEmail": "my_delegateEmail",
     *       //   "verificationStatus": "my_verificationStatus"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "delegateEmail": "my_delegateEmail",
     *   //   "verificationStatus": "my_verificationStatus"
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
      params: Params$Resource$Users$Settings$Delegates$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Users$Settings$Delegates$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Delegate>;
    create(
      params: Params$Resource$Users$Settings$Delegates$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Users$Settings$Delegates$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Delegate>,
      callback: BodyResponseCallback<Schema$Delegate>
    ): void;
    create(
      params: Params$Resource$Users$Settings$Delegates$Create,
      callback: BodyResponseCallback<Schema$Delegate>
    ): void;
    create(callback: BodyResponseCallback<Schema$Delegate>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Delegates$Create
        | BodyResponseCallback<Schema$Delegate>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Delegate>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Delegate>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Delegate> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Delegates$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Delegates$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/gmail/v1/users/{userId}/settings/delegates'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Delegate>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Delegate>(parameters);
      }
    }

    /**
     * Removes the specified delegate (which can be of any verification status), and revokes any verification that may have been required for using it. Note that a delegate user must be referred to by their primary email address, and not an email alias. This method is only available to service account clients that have been delegated domain-wide authority.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.delegates.delete({
     *     // The email address of the user to be removed as a delegate.
     *     delegateEmail: 'placeholder-value',
     *     // User's email address. The special value "me" can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Users$Settings$Delegates$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Users$Settings$Delegates$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Users$Settings$Delegates$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Users$Settings$Delegates$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Users$Settings$Delegates$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Delegates$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Delegates$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Delegates$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/gmail/v1/users/{userId}/settings/delegates/{delegateEmail}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'delegateEmail'],
        pathParams: ['delegateEmail', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Gets the specified delegate. Note that a delegate user must be referred to by their primary email address, and not an email alias. This method is only available to service account clients that have been delegated domain-wide authority.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *       'https://www.googleapis.com/auth/gmail.readonly',
     *       'https://www.googleapis.com/auth/gmail.settings.basic',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.delegates.get({
     *     // The email address of the user whose delegate relationship is to be retrieved.
     *     delegateEmail: 'placeholder-value',
     *     // User's email address. The special value "me" can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "delegateEmail": "my_delegateEmail",
     *   //   "verificationStatus": "my_verificationStatus"
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
      params: Params$Resource$Users$Settings$Delegates$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Users$Settings$Delegates$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Delegate>;
    get(
      params: Params$Resource$Users$Settings$Delegates$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Users$Settings$Delegates$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Delegate>,
      callback: BodyResponseCallback<Schema$Delegate>
    ): void;
    get(
      params: Params$Resource$Users$Settings$Delegates$Get,
      callback: BodyResponseCallback<Schema$Delegate>
    ): void;
    get(callback: BodyResponseCallback<Schema$Delegate>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Delegates$Get
        | BodyResponseCallback<Schema$Delegate>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Delegate>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Delegate>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Delegate> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Delegates$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Delegates$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/gmail/v1/users/{userId}/settings/delegates/{delegateEmail}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'delegateEmail'],
        pathParams: ['delegateEmail', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Delegate>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Delegate>(parameters);
      }
    }

    /**
     * Lists the delegates for the specified account. This method is only available to service account clients that have been delegated domain-wide authority.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *       'https://www.googleapis.com/auth/gmail.readonly',
     *       'https://www.googleapis.com/auth/gmail.settings.basic',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.delegates.list({
     *     // User's email address. The special value "me" can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "delegates": []
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
      params: Params$Resource$Users$Settings$Delegates$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Users$Settings$Delegates$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDelegatesResponse>;
    list(
      params: Params$Resource$Users$Settings$Delegates$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Users$Settings$Delegates$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDelegatesResponse>,
      callback: BodyResponseCallback<Schema$ListDelegatesResponse>
    ): void;
    list(
      params: Params$Resource$Users$Settings$Delegates$List,
      callback: BodyResponseCallback<Schema$ListDelegatesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDelegatesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Delegates$List
        | BodyResponseCallback<Schema$ListDelegatesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDelegatesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDelegatesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListDelegatesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Delegates$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Delegates$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/gmail/v1/users/{userId}/settings/delegates'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListDelegatesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDelegatesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Settings$Delegates$Create
    extends StandardParameters {
    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Delegate;
  }
  export interface Params$Resource$Users$Settings$Delegates$Delete
    extends StandardParameters {
    /**
     * The email address of the user to be removed as a delegate.
     */
    delegateEmail?: string;
    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Settings$Delegates$Get
    extends StandardParameters {
    /**
     * The email address of the user whose delegate relationship is to be retrieved.
     */
    delegateEmail?: string;
    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Settings$Delegates$List
    extends StandardParameters {
    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;
  }

  export class Resource$Users$Settings$Filters {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a filter. Note: you can only create a maximum of 1,000 filters.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/gmail.settings.basic'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.filters.create({
     *     // User's email address. The special value "me" can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "action": {},
     *       //   "criteria": {},
     *       //   "id": "my_id"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "action": {},
     *   //   "criteria": {},
     *   //   "id": "my_id"
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
      params: Params$Resource$Users$Settings$Filters$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Users$Settings$Filters$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Filter>;
    create(
      params: Params$Resource$Users$Settings$Filters$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Users$Settings$Filters$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Filter>,
      callback: BodyResponseCallback<Schema$Filter>
    ): void;
    create(
      params: Params$Resource$Users$Settings$Filters$Create,
      callback: BodyResponseCallback<Schema$Filter>
    ): void;
    create(callback: BodyResponseCallback<Schema$Filter>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Filters$Create
        | BodyResponseCallback<Schema$Filter>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Filter>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Filter>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Filter> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Filters$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Filters$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/gmail/v1/users/{userId}/settings/filters'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Filter>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Filter>(parameters);
      }
    }

    /**
     * Immediately and permanently deletes the specified filter.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/gmail.settings.basic'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.filters.delete({
     *     // The ID of the filter to be deleted.
     *     id: 'placeholder-value',
     *     // User's email address. The special value "me" can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Users$Settings$Filters$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Users$Settings$Filters$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Users$Settings$Filters$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Users$Settings$Filters$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Users$Settings$Filters$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Filters$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Filters$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Filters$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/gmail/v1/users/{userId}/settings/filters/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'id'],
        pathParams: ['id', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Gets a filter.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *       'https://www.googleapis.com/auth/gmail.readonly',
     *       'https://www.googleapis.com/auth/gmail.settings.basic',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.filters.get({
     *     // The ID of the filter to be fetched.
     *     id: 'placeholder-value',
     *     // User's email address. The special value "me" can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "action": {},
     *   //   "criteria": {},
     *   //   "id": "my_id"
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
      params: Params$Resource$Users$Settings$Filters$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Users$Settings$Filters$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Filter>;
    get(
      params: Params$Resource$Users$Settings$Filters$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Users$Settings$Filters$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Filter>,
      callback: BodyResponseCallback<Schema$Filter>
    ): void;
    get(
      params: Params$Resource$Users$Settings$Filters$Get,
      callback: BodyResponseCallback<Schema$Filter>
    ): void;
    get(callback: BodyResponseCallback<Schema$Filter>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Filters$Get
        | BodyResponseCallback<Schema$Filter>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Filter>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Filter>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Filter> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Filters$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Filters$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/gmail/v1/users/{userId}/settings/filters/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'id'],
        pathParams: ['id', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Filter>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Filter>(parameters);
      }
    }

    /**
     * Lists the message filters of a Gmail user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *       'https://www.googleapis.com/auth/gmail.readonly',
     *       'https://www.googleapis.com/auth/gmail.settings.basic',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.filters.list({
     *     // User's email address. The special value "me" can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "filter": []
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
      params: Params$Resource$Users$Settings$Filters$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Users$Settings$Filters$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListFiltersResponse>;
    list(
      params: Params$Resource$Users$Settings$Filters$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Users$Settings$Filters$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListFiltersResponse>,
      callback: BodyResponseCallback<Schema$ListFiltersResponse>
    ): void;
    list(
      params: Params$Resource$Users$Settings$Filters$List,
      callback: BodyResponseCallback<Schema$ListFiltersResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListFiltersResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Filters$List
        | BodyResponseCallback<Schema$ListFiltersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListFiltersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListFiltersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListFiltersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Filters$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Filters$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/gmail/v1/users/{userId}/settings/filters'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListFiltersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListFiltersResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Settings$Filters$Create
    extends StandardParameters {
    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Filter;
  }
  export interface Params$Resource$Users$Settings$Filters$Delete
    extends StandardParameters {
    /**
     * The ID of the filter to be deleted.
     */
    id?: string;
    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Settings$Filters$Get
    extends StandardParameters {
    /**
     * The ID of the filter to be fetched.
     */
    id?: string;
    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Settings$Filters$List
    extends StandardParameters {
    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;
  }

  export class Resource$Users$Settings$Forwardingaddresses {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a forwarding address. If ownership verification is required, a message will be sent to the recipient and the resource's verification status will be set to `pending`; otherwise, the resource will be created with verification status set to `accepted`. This method is only available to service account clients that have been delegated domain-wide authority.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.forwardingAddresses.create({
     *     // User's email address. The special value "me" can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "forwardingEmail": "my_forwardingEmail",
     *       //   "verificationStatus": "my_verificationStatus"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "forwardingEmail": "my_forwardingEmail",
     *   //   "verificationStatus": "my_verificationStatus"
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
      params: Params$Resource$Users$Settings$Forwardingaddresses$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Users$Settings$Forwardingaddresses$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ForwardingAddress>;
    create(
      params: Params$Resource$Users$Settings$Forwardingaddresses$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Users$Settings$Forwardingaddresses$Create,
      options: MethodOptions | BodyResponseCallback<Schema$ForwardingAddress>,
      callback: BodyResponseCallback<Schema$ForwardingAddress>
    ): void;
    create(
      params: Params$Resource$Users$Settings$Forwardingaddresses$Create,
      callback: BodyResponseCallback<Schema$ForwardingAddress>
    ): void;
    create(callback: BodyResponseCallback<Schema$ForwardingAddress>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Forwardingaddresses$Create
        | BodyResponseCallback<Schema$ForwardingAddress>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ForwardingAddress>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ForwardingAddress>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ForwardingAddress>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Forwardingaddresses$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Users$Settings$Forwardingaddresses$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/gmail/v1/users/{userId}/settings/forwardingAddresses'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ForwardingAddress>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ForwardingAddress>(parameters);
      }
    }

    /**
     * Deletes the specified forwarding address and revokes any verification that may have been required. This method is only available to service account clients that have been delegated domain-wide authority.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.forwardingAddresses.delete({
     *     // The forwarding address to be deleted.
     *     forwardingEmail: 'placeholder-value',
     *     // User's email address. The special value "me" can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Users$Settings$Forwardingaddresses$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Users$Settings$Forwardingaddresses$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Users$Settings$Forwardingaddresses$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Users$Settings$Forwardingaddresses$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Users$Settings$Forwardingaddresses$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Forwardingaddresses$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Forwardingaddresses$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Users$Settings$Forwardingaddresses$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/gmail/v1/users/{userId}/settings/forwardingAddresses/{forwardingEmail}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'forwardingEmail'],
        pathParams: ['forwardingEmail', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Gets the specified forwarding address.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *       'https://www.googleapis.com/auth/gmail.readonly',
     *       'https://www.googleapis.com/auth/gmail.settings.basic',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.forwardingAddresses.get({
     *     // The forwarding address to be retrieved.
     *     forwardingEmail: 'placeholder-value',
     *     // User's email address. The special value "me" can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "forwardingEmail": "my_forwardingEmail",
     *   //   "verificationStatus": "my_verificationStatus"
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
      params: Params$Resource$Users$Settings$Forwardingaddresses$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Users$Settings$Forwardingaddresses$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ForwardingAddress>;
    get(
      params: Params$Resource$Users$Settings$Forwardingaddresses$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Users$Settings$Forwardingaddresses$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ForwardingAddress>,
      callback: BodyResponseCallback<Schema$ForwardingAddress>
    ): void;
    get(
      params: Params$Resource$Users$Settings$Forwardingaddresses$Get,
      callback: BodyResponseCallback<Schema$ForwardingAddress>
    ): void;
    get(callback: BodyResponseCallback<Schema$ForwardingAddress>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Forwardingaddresses$Get
        | BodyResponseCallback<Schema$ForwardingAddress>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ForwardingAddress>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ForwardingAddress>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ForwardingAddress>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Forwardingaddresses$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Forwardingaddresses$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/gmail/v1/users/{userId}/settings/forwardingAddresses/{forwardingEmail}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'forwardingEmail'],
        pathParams: ['forwardingEmail', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ForwardingAddress>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ForwardingAddress>(parameters);
      }
    }

    /**
     * Lists the forwarding addresses for the specified account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *       'https://www.googleapis.com/auth/gmail.readonly',
     *       'https://www.googleapis.com/auth/gmail.settings.basic',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.forwardingAddresses.list({
     *     // User's email address. The special value "me" can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "forwardingAddresses": []
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
      params: Params$Resource$Users$Settings$Forwardingaddresses$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Users$Settings$Forwardingaddresses$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListForwardingAddressesResponse>;
    list(
      params: Params$Resource$Users$Settings$Forwardingaddresses$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Users$Settings$Forwardingaddresses$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListForwardingAddressesResponse>,
      callback: BodyResponseCallback<Schema$ListForwardingAddressesResponse>
    ): void;
    list(
      params: Params$Resource$Users$Settings$Forwardingaddresses$List,
      callback: BodyResponseCallback<Schema$ListForwardingAddressesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListForwardingAddressesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Forwardingaddresses$List
        | BodyResponseCallback<Schema$ListForwardingAddressesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListForwardingAddressesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListForwardingAddressesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListForwardingAddressesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Forwardingaddresses$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Forwardingaddresses$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/gmail/v1/users/{userId}/settings/forwardingAddresses'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListForwardingAddressesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListForwardingAddressesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Users$Settings$Forwardingaddresses$Create
    extends StandardParameters {
    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ForwardingAddress;
  }
  export interface Params$Resource$Users$Settings$Forwardingaddresses$Delete
    extends StandardParameters {
    /**
     * The forwarding address to be deleted.
     */
    forwardingEmail?: string;
    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Settings$Forwardingaddresses$Get
    extends StandardParameters {
    /**
     * The forwarding address to be retrieved.
     */
    forwardingEmail?: string;
    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Settings$Forwardingaddresses$List
    extends StandardParameters {
    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;
  }

  export class Resource$Users$Settings$Sendas {
    context: APIRequestContext;
    smimeInfo: Resource$Users$Settings$Sendas$Smimeinfo;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.smimeInfo = new Resource$Users$Settings$Sendas$Smimeinfo(
        this.context
      );
    }

    /**
     * Creates a custom "from" send-as alias. If an SMTP MSA is specified, Gmail will attempt to connect to the SMTP service to validate the configuration before creating the alias. If ownership verification is required for the alias, a message will be sent to the email address and the resource's verification status will be set to `pending`; otherwise, the resource will be created with verification status set to `accepted`. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias. This method is only available to service account clients that have been delegated domain-wide authority.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.sendAs.create({
     *     // User's email address. The special value "me" can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "isDefault": false,
     *       //   "isPrimary": false,
     *       //   "replyToAddress": "my_replyToAddress",
     *       //   "sendAsEmail": "my_sendAsEmail",
     *       //   "signature": "my_signature",
     *       //   "smtpMsa": {},
     *       //   "treatAsAlias": false,
     *       //   "verificationStatus": "my_verificationStatus"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "isDefault": false,
     *   //   "isPrimary": false,
     *   //   "replyToAddress": "my_replyToAddress",
     *   //   "sendAsEmail": "my_sendAsEmail",
     *   //   "signature": "my_signature",
     *   //   "smtpMsa": {},
     *   //   "treatAsAlias": false,
     *   //   "verificationStatus": "my_verificationStatus"
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
      params: Params$Resource$Users$Settings$Sendas$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Users$Settings$Sendas$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SendAs>;
    create(
      params: Params$Resource$Users$Settings$Sendas$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Users$Settings$Sendas$Create,
      options: MethodOptions | BodyResponseCallback<Schema$SendAs>,
      callback: BodyResponseCallback<Schema$SendAs>
    ): void;
    create(
      params: Params$Resource$Users$Settings$Sendas$Create,
      callback: BodyResponseCallback<Schema$SendAs>
    ): void;
    create(callback: BodyResponseCallback<Schema$SendAs>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Sendas$Create
        | BodyResponseCallback<Schema$SendAs>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SendAs>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SendAs>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SendAs> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Sendas$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Sendas$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/settings/sendAs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SendAs>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SendAs>(parameters);
      }
    }

    /**
     * Deletes the specified send-as alias. Revokes any verification that may have been required for using it. This method is only available to service account clients that have been delegated domain-wide authority.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.sendAs.delete({
     *     // The send-as alias to be deleted.
     *     sendAsEmail: 'placeholder-value',
     *     // User's email address. The special value "me" can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Users$Settings$Sendas$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Users$Settings$Sendas$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Users$Settings$Sendas$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Users$Settings$Sendas$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Users$Settings$Sendas$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Sendas$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Sendas$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Sendas$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'sendAsEmail'],
        pathParams: ['sendAsEmail', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Gets the specified send-as alias. Fails with an HTTP 404 error if the specified address is not a member of the collection.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *       'https://www.googleapis.com/auth/gmail.readonly',
     *       'https://www.googleapis.com/auth/gmail.settings.basic',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.sendAs.get({
     *     // The send-as alias to be retrieved.
     *     sendAsEmail: 'placeholder-value',
     *     // User's email address. The special value "me" can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "isDefault": false,
     *   //   "isPrimary": false,
     *   //   "replyToAddress": "my_replyToAddress",
     *   //   "sendAsEmail": "my_sendAsEmail",
     *   //   "signature": "my_signature",
     *   //   "smtpMsa": {},
     *   //   "treatAsAlias": false,
     *   //   "verificationStatus": "my_verificationStatus"
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
      params: Params$Resource$Users$Settings$Sendas$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Users$Settings$Sendas$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SendAs>;
    get(
      params: Params$Resource$Users$Settings$Sendas$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Users$Settings$Sendas$Get,
      options: MethodOptions | BodyResponseCallback<Schema$SendAs>,
      callback: BodyResponseCallback<Schema$SendAs>
    ): void;
    get(
      params: Params$Resource$Users$Settings$Sendas$Get,
      callback: BodyResponseCallback<Schema$SendAs>
    ): void;
    get(callback: BodyResponseCallback<Schema$SendAs>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Sendas$Get
        | BodyResponseCallback<Schema$SendAs>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SendAs>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SendAs>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SendAs> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Sendas$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Sendas$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'sendAsEmail'],
        pathParams: ['sendAsEmail', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SendAs>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SendAs>(parameters);
      }
    }

    /**
     * Lists the send-as aliases for the specified account. The result includes the primary send-as address associated with the account as well as any custom "from" aliases.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *       'https://www.googleapis.com/auth/gmail.readonly',
     *       'https://www.googleapis.com/auth/gmail.settings.basic',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.sendAs.list({
     *     // User's email address. The special value "me" can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "sendAs": []
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
      params: Params$Resource$Users$Settings$Sendas$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Users$Settings$Sendas$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSendAsResponse>;
    list(
      params: Params$Resource$Users$Settings$Sendas$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Users$Settings$Sendas$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListSendAsResponse>,
      callback: BodyResponseCallback<Schema$ListSendAsResponse>
    ): void;
    list(
      params: Params$Resource$Users$Settings$Sendas$List,
      callback: BodyResponseCallback<Schema$ListSendAsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListSendAsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Sendas$List
        | BodyResponseCallback<Schema$ListSendAsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSendAsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSendAsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListSendAsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Sendas$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Sendas$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/settings/sendAs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListSendAsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSendAsResponse>(parameters);
      }
    }

    /**
     * Patch the specified send-as alias.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/gmail.settings.basic',
     *       'https://www.googleapis.com/auth/gmail.settings.sharing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.sendAs.patch({
     *     // The send-as alias to be updated.
     *     sendAsEmail: 'placeholder-value',
     *     // User's email address. The special value "me" can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "isDefault": false,
     *       //   "isPrimary": false,
     *       //   "replyToAddress": "my_replyToAddress",
     *       //   "sendAsEmail": "my_sendAsEmail",
     *       //   "signature": "my_signature",
     *       //   "smtpMsa": {},
     *       //   "treatAsAlias": false,
     *       //   "verificationStatus": "my_verificationStatus"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "isDefault": false,
     *   //   "isPrimary": false,
     *   //   "replyToAddress": "my_replyToAddress",
     *   //   "sendAsEmail": "my_sendAsEmail",
     *   //   "signature": "my_signature",
     *   //   "smtpMsa": {},
     *   //   "treatAsAlias": false,
     *   //   "verificationStatus": "my_verificationStatus"
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
      params: Params$Resource$Users$Settings$Sendas$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Users$Settings$Sendas$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SendAs>;
    patch(
      params: Params$Resource$Users$Settings$Sendas$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Users$Settings$Sendas$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$SendAs>,
      callback: BodyResponseCallback<Schema$SendAs>
    ): void;
    patch(
      params: Params$Resource$Users$Settings$Sendas$Patch,
      callback: BodyResponseCallback<Schema$SendAs>
    ): void;
    patch(callback: BodyResponseCallback<Schema$SendAs>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Sendas$Patch
        | BodyResponseCallback<Schema$SendAs>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SendAs>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SendAs>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SendAs> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Sendas$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Sendas$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'sendAsEmail'],
        pathParams: ['sendAsEmail', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SendAs>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SendAs>(parameters);
      }
    }

    /**
     * Updates a send-as alias. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias. Addresses other than the primary address for the account can only be updated by service account clients that have been delegated domain-wide authority.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/gmail.settings.basic',
     *       'https://www.googleapis.com/auth/gmail.settings.sharing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.sendAs.update({
     *     // The send-as alias to be updated.
     *     sendAsEmail: 'placeholder-value',
     *     // User's email address. The special value "me" can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "isDefault": false,
     *       //   "isPrimary": false,
     *       //   "replyToAddress": "my_replyToAddress",
     *       //   "sendAsEmail": "my_sendAsEmail",
     *       //   "signature": "my_signature",
     *       //   "smtpMsa": {},
     *       //   "treatAsAlias": false,
     *       //   "verificationStatus": "my_verificationStatus"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "isDefault": false,
     *   //   "isPrimary": false,
     *   //   "replyToAddress": "my_replyToAddress",
     *   //   "sendAsEmail": "my_sendAsEmail",
     *   //   "signature": "my_signature",
     *   //   "smtpMsa": {},
     *   //   "treatAsAlias": false,
     *   //   "verificationStatus": "my_verificationStatus"
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
      params: Params$Resource$Users$Settings$Sendas$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Users$Settings$Sendas$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SendAs>;
    update(
      params: Params$Resource$Users$Settings$Sendas$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Users$Settings$Sendas$Update,
      options: MethodOptions | BodyResponseCallback<Schema$SendAs>,
      callback: BodyResponseCallback<Schema$SendAs>
    ): void;
    update(
      params: Params$Resource$Users$Settings$Sendas$Update,
      callback: BodyResponseCallback<Schema$SendAs>
    ): void;
    update(callback: BodyResponseCallback<Schema$SendAs>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Sendas$Update
        | BodyResponseCallback<Schema$SendAs>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SendAs>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SendAs>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SendAs> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Sendas$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Sendas$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'sendAsEmail'],
        pathParams: ['sendAsEmail', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SendAs>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SendAs>(parameters);
      }
    }

    /**
     * Sends a verification email to the specified send-as alias address. The verification status must be `pending`. This method is only available to service account clients that have been delegated domain-wide authority.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.sendAs.verify({
     *     // The send-as alias to be verified.
     *     sendAsEmail: 'placeholder-value',
     *     // User's email address. The special value "me" can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
    verify(
      params: Params$Resource$Users$Settings$Sendas$Verify,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    verify(
      params?: Params$Resource$Users$Settings$Sendas$Verify,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    verify(
      params: Params$Resource$Users$Settings$Sendas$Verify,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    verify(
      params: Params$Resource$Users$Settings$Sendas$Verify,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    verify(
      params: Params$Resource$Users$Settings$Sendas$Verify,
      callback: BodyResponseCallback<void>
    ): void;
    verify(callback: BodyResponseCallback<void>): void;
    verify(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Sendas$Verify
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Sendas$Verify;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Sendas$Verify;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/verify'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'sendAsEmail'],
        pathParams: ['sendAsEmail', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Settings$Sendas$Create
    extends StandardParameters {
    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SendAs;
  }
  export interface Params$Resource$Users$Settings$Sendas$Delete
    extends StandardParameters {
    /**
     * The send-as alias to be deleted.
     */
    sendAsEmail?: string;
    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Settings$Sendas$Get
    extends StandardParameters {
    /**
     * The send-as alias to be retrieved.
     */
    sendAsEmail?: string;
    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Settings$Sendas$List
    extends StandardParameters {
    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Settings$Sendas$Patch
    extends StandardParameters {
    /**
     * The send-as alias to be updated.
     */
    sendAsEmail?: string;
    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SendAs;
  }
  export interface Params$Resource$Users$Settings$Sendas$Update
    extends StandardParameters {
    /**
     * The send-as alias to be updated.
     */
    sendAsEmail?: string;
    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SendAs;
  }
  export interface Params$Resource$Users$Settings$Sendas$Verify
    extends StandardParameters {
    /**
     * The send-as alias to be verified.
     */
    sendAsEmail?: string;
    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;
  }

  export class Resource$Users$Settings$Sendas$Smimeinfo {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes the specified S/MIME config for the specified send-as alias.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/gmail.settings.basic',
     *       'https://www.googleapis.com/auth/gmail.settings.sharing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.sendAs.smimeInfo.delete({
     *     // The immutable ID for the SmimeInfo.
     *     id: 'placeholder-value',
     *     // The email address that appears in the "From:" header for mail sent using this alias.
     *     sendAsEmail: 'placeholder-value',
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Users$Settings$Sendas$Smimeinfo$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Users$Settings$Sendas$Smimeinfo$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Users$Settings$Sendas$Smimeinfo$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Users$Settings$Sendas$Smimeinfo$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Users$Settings$Sendas$Smimeinfo$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Sendas$Smimeinfo$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Sendas$Smimeinfo$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Sendas$Smimeinfo$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'sendAsEmail', 'id'],
        pathParams: ['id', 'sendAsEmail', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Gets the specified S/MIME config for the specified send-as alias.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *       'https://www.googleapis.com/auth/gmail.readonly',
     *       'https://www.googleapis.com/auth/gmail.settings.basic',
     *       'https://www.googleapis.com/auth/gmail.settings.sharing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.sendAs.smimeInfo.get({
     *     // The immutable ID for the SmimeInfo.
     *     id: 'placeholder-value',
     *     // The email address that appears in the "From:" header for mail sent using this alias.
     *     sendAsEmail: 'placeholder-value',
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "encryptedKeyPassword": "my_encryptedKeyPassword",
     *   //   "expiration": "my_expiration",
     *   //   "id": "my_id",
     *   //   "isDefault": false,
     *   //   "issuerCn": "my_issuerCn",
     *   //   "pem": "my_pem",
     *   //   "pkcs12": "my_pkcs12"
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
      params: Params$Resource$Users$Settings$Sendas$Smimeinfo$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Users$Settings$Sendas$Smimeinfo$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SmimeInfo>;
    get(
      params: Params$Resource$Users$Settings$Sendas$Smimeinfo$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Users$Settings$Sendas$Smimeinfo$Get,
      options: MethodOptions | BodyResponseCallback<Schema$SmimeInfo>,
      callback: BodyResponseCallback<Schema$SmimeInfo>
    ): void;
    get(
      params: Params$Resource$Users$Settings$Sendas$Smimeinfo$Get,
      callback: BodyResponseCallback<Schema$SmimeInfo>
    ): void;
    get(callback: BodyResponseCallback<Schema$SmimeInfo>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Sendas$Smimeinfo$Get
        | BodyResponseCallback<Schema$SmimeInfo>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SmimeInfo>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SmimeInfo>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SmimeInfo> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Sendas$Smimeinfo$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Sendas$Smimeinfo$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'sendAsEmail', 'id'],
        pathParams: ['id', 'sendAsEmail', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SmimeInfo>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SmimeInfo>(parameters);
      }
    }

    /**
     * Insert (upload) the given S/MIME config for the specified send-as alias. Note that pkcs12 format is required for the key.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/gmail.settings.basic',
     *       'https://www.googleapis.com/auth/gmail.settings.sharing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.sendAs.smimeInfo.insert({
     *     // The email address that appears in the "From:" header for mail sent using this alias.
     *     sendAsEmail: 'placeholder-value',
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "encryptedKeyPassword": "my_encryptedKeyPassword",
     *       //   "expiration": "my_expiration",
     *       //   "id": "my_id",
     *       //   "isDefault": false,
     *       //   "issuerCn": "my_issuerCn",
     *       //   "pem": "my_pem",
     *       //   "pkcs12": "my_pkcs12"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "encryptedKeyPassword": "my_encryptedKeyPassword",
     *   //   "expiration": "my_expiration",
     *   //   "id": "my_id",
     *   //   "isDefault": false,
     *   //   "issuerCn": "my_issuerCn",
     *   //   "pem": "my_pem",
     *   //   "pkcs12": "my_pkcs12"
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
    insert(
      params: Params$Resource$Users$Settings$Sendas$Smimeinfo$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Users$Settings$Sendas$Smimeinfo$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SmimeInfo>;
    insert(
      params: Params$Resource$Users$Settings$Sendas$Smimeinfo$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Users$Settings$Sendas$Smimeinfo$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$SmimeInfo>,
      callback: BodyResponseCallback<Schema$SmimeInfo>
    ): void;
    insert(
      params: Params$Resource$Users$Settings$Sendas$Smimeinfo$Insert,
      callback: BodyResponseCallback<Schema$SmimeInfo>
    ): void;
    insert(callback: BodyResponseCallback<Schema$SmimeInfo>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Sendas$Smimeinfo$Insert
        | BodyResponseCallback<Schema$SmimeInfo>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SmimeInfo>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SmimeInfo>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SmimeInfo> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Sendas$Smimeinfo$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Sendas$Smimeinfo$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'sendAsEmail'],
        pathParams: ['sendAsEmail', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SmimeInfo>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SmimeInfo>(parameters);
      }
    }

    /**
     * Lists S/MIME configs for the specified send-as alias.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *       'https://www.googleapis.com/auth/gmail.readonly',
     *       'https://www.googleapis.com/auth/gmail.settings.basic',
     *       'https://www.googleapis.com/auth/gmail.settings.sharing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.sendAs.smimeInfo.list({
     *     // The email address that appears in the "From:" header for mail sent using this alias.
     *     sendAsEmail: 'placeholder-value',
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "smimeInfo": []
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
      params: Params$Resource$Users$Settings$Sendas$Smimeinfo$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Users$Settings$Sendas$Smimeinfo$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSmimeInfoResponse>;
    list(
      params: Params$Resource$Users$Settings$Sendas$Smimeinfo$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Users$Settings$Sendas$Smimeinfo$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSmimeInfoResponse>,
      callback: BodyResponseCallback<Schema$ListSmimeInfoResponse>
    ): void;
    list(
      params: Params$Resource$Users$Settings$Sendas$Smimeinfo$List,
      callback: BodyResponseCallback<Schema$ListSmimeInfoResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListSmimeInfoResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Sendas$Smimeinfo$List
        | BodyResponseCallback<Schema$ListSmimeInfoResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSmimeInfoResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSmimeInfoResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListSmimeInfoResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Sendas$Smimeinfo$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Sendas$Smimeinfo$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'sendAsEmail'],
        pathParams: ['sendAsEmail', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListSmimeInfoResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSmimeInfoResponse>(parameters);
      }
    }

    /**
     * Sets the default S/MIME config for the specified send-as alias.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/gmail.settings.basic',
     *       'https://www.googleapis.com/auth/gmail.settings.sharing',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.settings.sendAs.smimeInfo.setDefault({
     *     // The immutable ID for the SmimeInfo.
     *     id: 'placeholder-value',
     *     // The email address that appears in the "From:" header for mail sent using this alias.
     *     sendAsEmail: 'placeholder-value',
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
    setDefault(
      params: Params$Resource$Users$Settings$Sendas$Smimeinfo$Setdefault,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setDefault(
      params?: Params$Resource$Users$Settings$Sendas$Smimeinfo$Setdefault,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    setDefault(
      params: Params$Resource$Users$Settings$Sendas$Smimeinfo$Setdefault,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setDefault(
      params: Params$Resource$Users$Settings$Sendas$Smimeinfo$Setdefault,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    setDefault(
      params: Params$Resource$Users$Settings$Sendas$Smimeinfo$Setdefault,
      callback: BodyResponseCallback<void>
    ): void;
    setDefault(callback: BodyResponseCallback<void>): void;
    setDefault(
      paramsOrCallback?:
        | Params$Resource$Users$Settings$Sendas$Smimeinfo$Setdefault
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Sendas$Smimeinfo$Setdefault;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Users$Settings$Sendas$Smimeinfo$Setdefault;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}/setDefault'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'sendAsEmail', 'id'],
        pathParams: ['id', 'sendAsEmail', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Settings$Sendas$Smimeinfo$Delete
    extends StandardParameters {
    /**
     * The immutable ID for the SmimeInfo.
     */
    id?: string;
    /**
     * The email address that appears in the "From:" header for mail sent using this alias.
     */
    sendAsEmail?: string;
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Settings$Sendas$Smimeinfo$Get
    extends StandardParameters {
    /**
     * The immutable ID for the SmimeInfo.
     */
    id?: string;
    /**
     * The email address that appears in the "From:" header for mail sent using this alias.
     */
    sendAsEmail?: string;
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Settings$Sendas$Smimeinfo$Insert
    extends StandardParameters {
    /**
     * The email address that appears in the "From:" header for mail sent using this alias.
     */
    sendAsEmail?: string;
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SmimeInfo;
  }
  export interface Params$Resource$Users$Settings$Sendas$Smimeinfo$List
    extends StandardParameters {
    /**
     * The email address that appears in the "From:" header for mail sent using this alias.
     */
    sendAsEmail?: string;
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Settings$Sendas$Smimeinfo$Setdefault
    extends StandardParameters {
    /**
     * The immutable ID for the SmimeInfo.
     */
    id?: string;
    /**
     * The email address that appears in the "From:" header for mail sent using this alias.
     */
    sendAsEmail?: string;
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;
  }

  export class Resource$Users$Threads {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Immediately and permanently deletes the specified thread. Any messages that belong to the thread are also deleted. This operation cannot be undone. Prefer `threads.trash` instead.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://mail.google.com/'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.threads.delete({
     *     // ID of the Thread to delete.
     *     id: 'placeholder-value',
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Users$Threads$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Users$Threads$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Users$Threads$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Users$Threads$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Users$Threads$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Users$Threads$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Threads$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Threads$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/threads/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'id'],
        pathParams: ['id', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Gets the specified thread.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.addons.current.message.action',
     *       'https://www.googleapis.com/auth/gmail.addons.current.message.metadata',
     *       'https://www.googleapis.com/auth/gmail.addons.current.message.readonly',
     *       'https://www.googleapis.com/auth/gmail.metadata',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *       'https://www.googleapis.com/auth/gmail.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.threads.get({
     *     // The format to return the messages in.
     *     format: 'placeholder-value',
     *     // The ID of the thread to retrieve.
     *     id: 'placeholder-value',
     *     // When given and format is METADATA, only include headers specified.
     *     metadataHeaders: 'placeholder-value',
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "historyId": "my_historyId",
     *   //   "id": "my_id",
     *   //   "messages": [],
     *   //   "snippet": "my_snippet"
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
      params: Params$Resource$Users$Threads$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Users$Threads$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Thread>;
    get(
      params: Params$Resource$Users$Threads$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Users$Threads$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Thread>,
      callback: BodyResponseCallback<Schema$Thread>
    ): void;
    get(
      params: Params$Resource$Users$Threads$Get,
      callback: BodyResponseCallback<Schema$Thread>
    ): void;
    get(callback: BodyResponseCallback<Schema$Thread>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Users$Threads$Get
        | BodyResponseCallback<Schema$Thread>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Thread>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Thread>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Thread> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Threads$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Threads$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/threads/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'id'],
        pathParams: ['id', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Thread>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Thread>(parameters);
      }
    }

    /**
     * Lists the threads in the user's mailbox.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.metadata',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *       'https://www.googleapis.com/auth/gmail.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.threads.list({
     *     // Include threads from `SPAM` and `TRASH` in the results.
     *     includeSpamTrash: 'placeholder-value',
     *     // Only return threads with labels that match all of the specified label IDs.
     *     labelIds: 'placeholder-value',
     *     // Maximum number of threads to return. This field defaults to 100. The maximum allowed value for this field is 500.
     *     maxResults: 'placeholder-value',
     *     // Page token to retrieve a specific page of results in the list.
     *     pageToken: 'placeholder-value',
     *     // Only return threads matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`. Parameter cannot be used when accessing the api using the gmail.metadata scope.
     *     q: 'placeholder-value',
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "resultSizeEstimate": 0,
     *   //   "threads": []
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
      params: Params$Resource$Users$Threads$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Users$Threads$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListThreadsResponse>;
    list(
      params: Params$Resource$Users$Threads$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Users$Threads$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListThreadsResponse>,
      callback: BodyResponseCallback<Schema$ListThreadsResponse>
    ): void;
    list(
      params: Params$Resource$Users$Threads$List,
      callback: BodyResponseCallback<Schema$ListThreadsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListThreadsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Users$Threads$List
        | BodyResponseCallback<Schema$ListThreadsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListThreadsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListThreadsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListThreadsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Threads$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Threads$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/threads').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListThreadsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListThreadsResponse>(parameters);
      }
    }

    /**
     * Modifies the labels applied to the thread. This applies to all messages in the thread.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.threads.modify({
     *     // The ID of the thread to modify.
     *     id: 'placeholder-value',
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "addLabelIds": [],
     *       //   "removeLabelIds": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "historyId": "my_historyId",
     *   //   "id": "my_id",
     *   //   "messages": [],
     *   //   "snippet": "my_snippet"
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
    modify(
      params: Params$Resource$Users$Threads$Modify,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    modify(
      params?: Params$Resource$Users$Threads$Modify,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Thread>;
    modify(
      params: Params$Resource$Users$Threads$Modify,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    modify(
      params: Params$Resource$Users$Threads$Modify,
      options: MethodOptions | BodyResponseCallback<Schema$Thread>,
      callback: BodyResponseCallback<Schema$Thread>
    ): void;
    modify(
      params: Params$Resource$Users$Threads$Modify,
      callback: BodyResponseCallback<Schema$Thread>
    ): void;
    modify(callback: BodyResponseCallback<Schema$Thread>): void;
    modify(
      paramsOrCallback?:
        | Params$Resource$Users$Threads$Modify
        | BodyResponseCallback<Schema$Thread>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Thread>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Thread>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Thread> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Threads$Modify;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Threads$Modify;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/gmail/v1/users/{userId}/threads/{id}/modify'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'id'],
        pathParams: ['id', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Thread>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Thread>(parameters);
      }
    }

    /**
     * Moves the specified thread to the trash. Any messages that belong to the thread are also moved to the trash.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.threads.trash({
     *     // The ID of the thread to Trash.
     *     id: 'placeholder-value',
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "historyId": "my_historyId",
     *   //   "id": "my_id",
     *   //   "messages": [],
     *   //   "snippet": "my_snippet"
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
    trash(
      params: Params$Resource$Users$Threads$Trash,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    trash(
      params?: Params$Resource$Users$Threads$Trash,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Thread>;
    trash(
      params: Params$Resource$Users$Threads$Trash,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    trash(
      params: Params$Resource$Users$Threads$Trash,
      options: MethodOptions | BodyResponseCallback<Schema$Thread>,
      callback: BodyResponseCallback<Schema$Thread>
    ): void;
    trash(
      params: Params$Resource$Users$Threads$Trash,
      callback: BodyResponseCallback<Schema$Thread>
    ): void;
    trash(callback: BodyResponseCallback<Schema$Thread>): void;
    trash(
      paramsOrCallback?:
        | Params$Resource$Users$Threads$Trash
        | BodyResponseCallback<Schema$Thread>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Thread>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Thread>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Thread> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Threads$Trash;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Threads$Trash;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/gmail/v1/users/{userId}/threads/{id}/trash'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'id'],
        pathParams: ['id', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Thread>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Thread>(parameters);
      }
    }

    /**
     * Removes the specified thread from the trash. Any messages that belong to the thread are also removed from the trash.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/gmail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const gmail = google.gmail('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://mail.google.com/',
     *       'https://www.googleapis.com/auth/gmail.modify',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await gmail.users.threads.untrash({
     *     // The ID of the thread to remove from Trash.
     *     id: 'placeholder-value',
     *     // The user's email address. The special value `me` can be used to indicate the authenticated user.
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "historyId": "my_historyId",
     *   //   "id": "my_id",
     *   //   "messages": [],
     *   //   "snippet": "my_snippet"
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
    untrash(
      params: Params$Resource$Users$Threads$Untrash,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    untrash(
      params?: Params$Resource$Users$Threads$Untrash,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Thread>;
    untrash(
      params: Params$Resource$Users$Threads$Untrash,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    untrash(
      params: Params$Resource$Users$Threads$Untrash,
      options: MethodOptions | BodyResponseCallback<Schema$Thread>,
      callback: BodyResponseCallback<Schema$Thread>
    ): void;
    untrash(
      params: Params$Resource$Users$Threads$Untrash,
      callback: BodyResponseCallback<Schema$Thread>
    ): void;
    untrash(callback: BodyResponseCallback<Schema$Thread>): void;
    untrash(
      paramsOrCallback?:
        | Params$Resource$Users$Threads$Untrash
        | BodyResponseCallback<Schema$Thread>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Thread>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Thread>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Thread> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Threads$Untrash;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Threads$Untrash;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gmail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/gmail/v1/users/{userId}/threads/{id}/untrash'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'id'],
        pathParams: ['id', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Thread>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Thread>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Threads$Delete
    extends StandardParameters {
    /**
     * ID of the Thread to delete.
     */
    id?: string;
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Threads$Get
    extends StandardParameters {
    /**
     * The format to return the messages in.
     */
    format?: string;
    /**
     * The ID of the thread to retrieve.
     */
    id?: string;
    /**
     * When given and format is METADATA, only include headers specified.
     */
    metadataHeaders?: string[];
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Threads$List
    extends StandardParameters {
    /**
     * Include threads from `SPAM` and `TRASH` in the results.
     */
    includeSpamTrash?: boolean;
    /**
     * Only return threads with labels that match all of the specified label IDs.
     */
    labelIds?: string[];
    /**
     * Maximum number of threads to return. This field defaults to 100. The maximum allowed value for this field is 500.
     */
    maxResults?: number;
    /**
     * Page token to retrieve a specific page of results in the list.
     */
    pageToken?: string;
    /**
     * Only return threads matching the specified query. Supports the same query format as the Gmail search box. For example, `"from:someuser@example.com rfc822msgid: is:unread"`. Parameter cannot be used when accessing the api using the gmail.metadata scope.
     */
    q?: string;
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Threads$Modify
    extends StandardParameters {
    /**
     * The ID of the thread to modify.
     */
    id?: string;
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ModifyThreadRequest;
  }
  export interface Params$Resource$Users$Threads$Trash
    extends StandardParameters {
    /**
     * The ID of the thread to Trash.
     */
    id?: string;
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Threads$Untrash
    extends StandardParameters {
    /**
     * The ID of the thread to remove from Trash.
     */
    id?: string;
    /**
     * The user's email address. The special value `me` can be used to indicate the authenticated user.
     */
    userId?: string;
  }
}
