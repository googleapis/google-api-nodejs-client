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

export namespace gmail_v1 {
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
   * Gmail API
   *
   * Access Gmail mailboxes including sending user email.
   *
   * @example
   * const {google} = require('googleapis');
   * const gmail = google.gmail('v1');
   *
   * @namespace gmail
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Gmail
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
   * Settings for a delegate. Delegates can read, send, and delete messages, as well as view and add contacts, for the delegator&#39;s account. See &quot;Set up mail delegation&quot; for more information about delegates.
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
   * A draft email in the user&#39;s mailbox.
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
     * The sender&#39;s display name or email address.
     */
    from?: string | null;
    /**
     * Whether the message has any attachment.
     */
    hasAttachment?: boolean | null;
    /**
     * Only return messages not matching the specified query. Supports the same query format as the Gmail search box. For example, &quot;from:someuser@example.com rfc822msgid: is:unread&quot;.
     */
    negatedQuery?: string | null;
    /**
     * Only return messages matching the specified query. Supports the same query format as the Gmail search box. For example, &quot;from:someuser@example.com rfc822msgid: is:unread&quot;.
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
     * Case-insensitive phrase found in the message&#39;s subject. Trailing and leading whitespace are be trimmed and adjacent spaces are collapsed.
     */
    subject?: string | null;
    /**
     * The recipient&#39;s display name or email address. Includes recipients in the &quot;to&quot;, &quot;cc&quot;, and &quot;bcc&quot; header fields. You can use simply the local part of the email address. For example, &quot;example&quot; and &quot;example@&quot; both match &quot;example@gmail.com&quot;. This field is case-insensitive.
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
   * A record of a change to the user&#39;s mailbox. Each history change may affect multiple messages in multiple ways.
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
     * List of messages changed in this history record. The fields for specific change types, such as messagesAdded may duplicate messages in this field. We recommend using the specific change-type fields instead of this.
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
   * Labels are used to categorize messages and threads within the user&#39;s mailbox.
   */
  export interface Schema$Label {
    /**
     * The color to assign to the label. Color is only available for labels that have their type set to user.
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
     * The visibility of the label in the message list in the Gmail web interface.
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
     * The owner type for the label. User labels are created by the user and can be modified and deleted by the user and can be applied to any message or thread. System labels are internally created and cannot be added, modified, or deleted. System labels may be able to be applied to or removed from messages and threads under some circumstances but this is not guaranteed. For example, users can apply and remove the INBOX and UNREAD labels from messages and threads, but cannot apply or remove the DRAFTS or SENT labels from messages or threads.
     */
    type?: string | null;
  }
  export interface Schema$LabelColor {
    /**
     * The background color represented as hex string #RRGGBB (ex #000000). This field is required in order to set the color of a label. Only the following predefined set of color values are allowed: #000000, #434343, #666666, #999999, #cccccc, #efefef, #f3f3f3, #ffffff, #fb4c2f, #ffad47, #fad165, #16a766, #43d692, #4a86e8, #a479e2, #f691b3, #f6c5be, #ffe6c7, #fef1d1, #b9e4d0, #c6f3de, #c9daf8, #e4d7f5, #fcdee8, #efa093, #ffd6a2, #fce8b3, #89d3b2, #a0eac9, #a4c2f4, #d0bcf1, #fbc8d9, #e66550, #ffbc6b, #fcda83, #44b984, #68dfa9, #6d9eeb, #b694e8, #f7a7c0, #cc3a21, #eaa041, #f2c960, #149e60, #3dc789, #3c78d8, #8e63ce, #e07798, #ac2b16, #cf8933, #d5ae49, #0b804b, #2a9c68, #285bac, #653e9b, #b65775, #822111, #a46a21, #aa8831, #076239, #1a764d, #1c4587, #41236d, #83334c #464646, #e7e7e7, #0d3472, #b6cff5, #0d3b44, #98d7e4, #3d188e, #e3d7ff, #711a36, #fbd3e0, #8a1c0a, #f2b2a8, #7a2e0b, #ffc8af, #7a4706, #ffdeb5, #594c05, #fbe983, #684e07, #fdedc1, #0b4f30, #b3efd3, #04502e, #a2dcc1, #c2c2c2, #4986e7, #2da2bb, #b99aff, #994a64, #f691b2, #ff7537, #ffad46, #662e37, #ebdbde, #cca6ac, #094228, #42d692, #16a765
     */
    backgroundColor?: string | null;
    /**
     * The text color of the label, represented as hex string. This field is required in order to set the color of a label. Only the following predefined set of color values are allowed: #000000, #434343, #666666, #999999, #cccccc, #efefef, #f3f3f3, #ffffff, #fb4c2f, #ffad47, #fad165, #16a766, #43d692, #4a86e8, #a479e2, #f691b3, #f6c5be, #ffe6c7, #fef1d1, #b9e4d0, #c6f3de, #c9daf8, #e4d7f5, #fcdee8, #efa093, #ffd6a2, #fce8b3, #89d3b2, #a0eac9, #a4c2f4, #d0bcf1, #fbc8d9, #e66550, #ffbc6b, #fcda83, #44b984, #68dfa9, #6d9eeb, #b694e8, #f7a7c0, #cc3a21, #eaa041, #f2c960, #149e60, #3dc789, #3c78d8, #8e63ce, #e07798, #ac2b16, #cf8933, #d5ae49, #0b804b, #2a9c68, #285bac, #653e9b, #b65775, #822111, #a46a21, #aa8831, #076239, #1a764d, #1c4587, #41236d, #83334c #464646, #e7e7e7, #0d3472, #b6cff5, #0d3b44, #98d7e4, #3d188e, #e3d7ff, #711a36, #fbd3e0, #8a1c0a, #f2b2a8, #7a2e0b, #ffc8af, #7a4706, #ffdeb5, #594c05, #fbe983, #684e07, #fdedc1, #0b4f30, #b3efd3, #04502e, #a2dcc1, #c2c2c2, #4986e7, #2da2bb, #b99aff, #994a64, #f691b2, #ff7537, #ffad46, #662e37, #ebdbde, #cca6ac, #094228, #42d692, #16a765
     */
    textColor?: string | null;
  }
  /**
   * Language settings for an account. These settings correspond to the &quot;Language settings&quot; feature in the web interface.
   */
  export interface Schema$LanguageSettings {
    /**
     * The language to display Gmail in, formatted as an RFC 3066 Language Tag (for example en-GB, fr or ja for British English, French, or Japanese respectively).  The set of languages supported by Gmail evolves over time, so please refer to the &quot;Language&quot; dropdown in the Gmail settings  for all available options, as described in the language settings help article. A table of sample values is also provided in the Managing Language Settings guide   Not all Gmail clients can display the same set of languages. In the case that a user&#39;s display language is not available for use on a particular client, said client automatically chooses to display in the closest supported variant (or a reasonable default).
     */
    displayLanguage?: string | null;
  }
  /**
   * Response for the ListDelegates method.
   */
  export interface Schema$ListDelegatesResponse {
    /**
     * List of the user&#39;s delegates (with any verification status).
     */
    delegates?: Schema$Delegate[];
  }
  export interface Schema$ListDraftsResponse {
    /**
     * List of drafts.
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
     * List of a user&#39;s filters.
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
     * List of history records. Any messages contained in the response will typically only have id and threadId fields populated.
     */
    history?: Schema$History[];
    /**
     * The ID of the mailbox&#39;s current history record.
     */
    historyId?: string | null;
    /**
     * Page token to retrieve the next page of results in the list.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$ListLabelsResponse {
    /**
     * List of labels.
     */
    labels?: Schema$Label[];
  }
  export interface Schema$ListMessagesResponse {
    /**
     * List of messages. Note that each message resource contains only an id and a threadId. Additional message details can be fetched using the messages.get method.
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
     * List of threads. Note that each thread resource does not contain a list of messages. The list of messages for a given thread can be fetched using the threads.get method.
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
     * The internal message creation timestamp (epoch ms), which determines ordering in the inbox. For normal SMTP-received email, this represents the time the message was originally accepted by Google, which is more reliable than the Date header. However, for API-migrated mail, it can be configured by client to be based on the Date header.
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
     * The entire email message in an RFC 2822 formatted and base64url encoded string. Returned in messages.get and drafts.get responses when the format=RAW parameter is supplied.
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
     * The ID of the thread the message belongs to. To add a message or draft to a thread, the following criteria must be met:  - The requested threadId must be specified on the Message or Draft.Message you supply with your request.  - The References and In-Reply-To headers must be set in compliance with the RFC 2822 standard.  - The Subject headers must match.
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
     * List of headers on this message part. For the top-level message part, representing the entire message payload, it will contain the standard RFC 2822 email headers such as To, From, and Subject.
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
     * The child MIME message parts of this part. This only applies to container MIME message parts, for example multipart/*. For non- container MIME message part types, such as text/plain, this field is empty. For more information, see RFC 1521.
     */
    parts?: Schema$MessagePart[];
  }
  /**
   * The body of a single MIME message part.
   */
  export interface Schema$MessagePartBody {
    /**
     * When present, contains the ID of an external attachment that can be retrieved in a separate messages.attachments.get request. When not present, the entire content of the message part body is contained in the data field.
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
     * The name of the header before the : separator. For example, To.
     */
    name?: string | null;
    /**
     * The value of the header after the : separator. For example, someuser@example.com.
     */
    value?: string | null;
  }
  export interface Schema$ModifyMessageRequest {
    /**
     * A list of IDs of labels to add to this message.
     */
    addLabelIds?: string[] | null;
    /**
     * A list IDs of labels to remove from this message.
     */
    removeLabelIds?: string[] | null;
  }
  export interface Schema$ModifyThreadRequest {
    /**
     * A list of IDs of labels to add to this thread.
     */
    addLabelIds?: string[] | null;
    /**
     * A list of IDs of labels to remove from this thread.
     */
    removeLabelIds?: string[] | null;
  }
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
     * The user&#39;s email address.
     */
    emailAddress?: string | null;
    /**
     * The ID of the mailbox&#39;s current history record.
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
   * Settings associated with a send-as alias, which can be either the primary login address associated with the account or a custom &quot;from&quot; address. Send-as aliases correspond to the &quot;Send Mail As&quot; feature in the web interface.
   */
  export interface Schema$SendAs {
    /**
     * A name that appears in the &quot;From:&quot; header for mail sent using this alias. For custom &quot;from&quot; addresses, when this is empty, Gmail will populate the &quot;From:&quot; header with the name that is used for the primary address associated with the account. If the admin has disabled the ability for users to update their name format, requests to update this field for the primary login will silently fail.
     */
    displayName?: string | null;
    /**
     * Whether this address is selected as the default &quot;From:&quot; address in situations such as composing a new message or sending a vacation auto-reply. Every Gmail account has exactly one default send-as address, so the only legal value that clients may write to this field is true. Changing this from false to true for an address will result in this field becoming false for the other previous default address.
     */
    isDefault?: boolean | null;
    /**
     * Whether this address is the primary address used to login to the account. Every Gmail account has exactly one primary address, and it cannot be deleted from the collection of send-as aliases. This field is read-only.
     */
    isPrimary?: boolean | null;
    /**
     * An optional email address that is included in a &quot;Reply-To:&quot; header for mail sent using this alias. If this is empty, Gmail will not generate a &quot;Reply-To:&quot; header.
     */
    replyToAddress?: string | null;
    /**
     * The email address that appears in the &quot;From:&quot; header for mail sent using this alias. This is read-only for all operations except create.
     */
    sendAsEmail?: string | null;
    /**
     * An optional HTML signature that is included in messages composed with this alias in the Gmail web UI.
     */
    signature?: string | null;
    /**
     * An optional SMTP service that will be used as an outbound relay for mail sent using this alias. If this is empty, outbound mail will be sent directly from Gmail&#39;s servers to the destination SMTP service. This setting only applies to custom &quot;from&quot; aliases.
     */
    smtpMsa?: Schema$SmtpMsa;
    /**
     * Whether Gmail should  treat this address as an alias for the user&#39;s primary email address. This setting only applies to custom &quot;from&quot; aliases.
     */
    treatAsAlias?: boolean | null;
    /**
     * Indicates whether this address has been verified for use as a send-as alias. Read-only. This setting only applies to custom &quot;from&quot; aliases.
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
     * Whether this SmimeInfo is the default one for this user&#39;s send-as address.
     */
    isDefault?: boolean | null;
    /**
     * The S/MIME certificate issuer&#39;s common name.
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
   * Vacation auto-reply settings for an account. These settings correspond to the &quot;Vacation responder&quot; feature in the web interface.
   */
  export interface Schema$VacationSettings {
    /**
     * Flag that controls whether Gmail automatically replies to messages.
     */
    enableAutoReply?: boolean | null;
    /**
     * An optional end time for sending auto-replies (epoch ms). When this is specified, Gmail will automatically reply only to messages that it receives before the end time. If both startTime and endTime are specified, startTime must precede endTime.
     */
    endTime?: string | null;
    /**
     * Response body in HTML format. Gmail will sanitize the HTML before storing it.
     */
    responseBodyHtml?: string | null;
    /**
     * Response body in plain text format.
     */
    responseBodyPlainText?: string | null;
    /**
     * Optional text to prepend to the subject line in vacation responses. In order to enable auto-replies, either the response subject or the response body must be nonempty.
     */
    responseSubject?: string | null;
    /**
     * Flag that determines whether responses are sent to recipients who are not in the user&#39;s list of contacts.
     */
    restrictToContacts?: boolean | null;
    /**
     * Flag that determines whether responses are sent to recipients who are outside of the user&#39;s domain. This feature is only available for G Suite users.
     */
    restrictToDomain?: boolean | null;
    /**
     * An optional start time for sending auto-replies (epoch ms). When this is specified, Gmail will automatically reply only to messages that it receives after the start time. If both startTime and endTime are specified, startTime must precede endTime.
     */
    startTime?: string | null;
  }
  /**
   * Set up or update a new push notification watch on this user&#39;s mailbox.
   */
  export interface Schema$WatchRequest {
    /**
     * Filtering behavior of labelIds list specified.
     */
    labelFilterAction?: string | null;
    /**
     * List of label_ids to restrict notifications about. By default, if unspecified, all changes are pushed out. If specified then dictates which labels are required for a push notification to be generated.
     */
    labelIds?: string[] | null;
    /**
     * A fully qualified Google Cloud Pub/Sub API topic name to publish the events to. This topic name **must** already exist in Cloud Pub/Sub and you **must** have already granted gmail &quot;publish&quot; permission on it. For example, &quot;projects/my-project-identifier/topics/my-topic-name&quot; (using the Cloud Pub/Sub &quot;v1&quot; topic naming format).  Note that the &quot;my-project-identifier&quot; portion must exactly match your Google developer project id (the one executing this watch request).
     */
    topicName?: string | null;
  }
  /**
   * Push notification watch response.
   */
  export interface Schema$WatchResponse {
    /**
     * When Gmail will stop sending notifications for mailbox updates (epoch millis). Call watch again before this time to renew the watch.
     */
    expiration?: string | null;
    /**
     * The ID of the mailbox&#39;s current history record.
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
     * gmail.users.getProfile
     * @desc Gets the current user's Gmail profile.
     * @alias gmail.users.getProfile
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getProfile(
      params?: Params$Resource$Users$Getprofile,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Profile>;
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
        | BodyResponseCallback<Schema$Profile>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Profile>,
      callback?: BodyResponseCallback<Schema$Profile>
    ): void | GaxiosPromise<Schema$Profile> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Profile>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Profile>(parameters);
      }
    }

    /**
     * gmail.users.stop
     * @desc Stop receiving push notifications for the given user mailbox.
     * @alias gmail.users.stop
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    stop(
      params?: Params$Resource$Users$Stop,
      options?: MethodOptions
    ): GaxiosPromise<void>;
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
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * gmail.users.watch
     * @desc Set up or update a push notification watch on the given user mailbox.
     * @alias gmail.users.watch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param {().WatchRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    watch(
      params?: Params$Resource$Users$Watch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WatchResponse>;
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
        | BodyResponseCallback<Schema$WatchResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$WatchResponse>,
      callback?: BodyResponseCallback<Schema$WatchResponse>
    ): void | GaxiosPromise<Schema$WatchResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$WatchResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$WatchResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Getprofile extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Stop extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Watch extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
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
     * gmail.users.drafts.create
     * @desc Creates a new draft with the DRAFT label.
     * @alias gmail.users.drafts.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param  {object} params.resource Media resource metadata
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Users$Drafts$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Draft>;
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
        | BodyResponseCallback<Schema$Draft>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Draft>,
      callback?: BodyResponseCallback<Schema$Draft>
    ): void | GaxiosPromise<Schema$Draft> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Draft>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Draft>(parameters);
      }
    }

    /**
     * gmail.users.drafts.delete
     * @desc Immediately and permanently deletes the specified draft. Does not simply trash it.
     * @alias gmail.users.drafts.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The ID of the draft to delete.
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Users$Drafts$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
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
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * gmail.users.drafts.get
     * @desc Gets the specified draft.
     * @alias gmail.users.drafts.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.format The format to return the draft in.
     * @param {string} params.id The ID of the draft to retrieve.
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Users$Drafts$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Draft>;
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
        | BodyResponseCallback<Schema$Draft>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Draft>,
      callback?: BodyResponseCallback<Schema$Draft>
    ): void | GaxiosPromise<Schema$Draft> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Draft>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Draft>(parameters);
      }
    }

    /**
     * gmail.users.drafts.list
     * @desc Lists the drafts in the user's mailbox.
     * @alias gmail.users.drafts.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.includeSpamTrash Include drafts from SPAM and TRASH in the results.
     * @param {integer=} params.maxResults Maximum number of drafts to return.
     * @param {string=} params.pageToken Page token to retrieve a specific page of results in the list.
     * @param {string=} params.q Only return draft messages matching the specified query. Supports the same query format as the Gmail search box. For example, "from:someuser@example.com rfc822msgid: is:unread".
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Users$Drafts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDraftsResponse>;
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
        | BodyResponseCallback<Schema$ListDraftsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDraftsResponse>,
      callback?: BodyResponseCallback<Schema$ListDraftsResponse>
    ): void | GaxiosPromise<Schema$ListDraftsResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$ListDraftsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListDraftsResponse>(parameters);
      }
    }

    /**
     * gmail.users.drafts.send
     * @desc Sends the specified, existing draft to the recipients in the To, Cc, and Bcc headers.
     * @alias gmail.users.drafts.send
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param  {object} params.resource Media resource metadata
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    send(
      params?: Params$Resource$Users$Drafts$Send,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
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
        | BodyResponseCallback<Schema$Message>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback?: BodyResponseCallback<Schema$Message>
    ): void | GaxiosPromise<Schema$Message> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Message>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Message>(parameters);
      }
    }

    /**
     * gmail.users.drafts.update
     * @desc Replaces a draft's content.
     * @alias gmail.users.drafts.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The ID of the draft to update.
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param  {object} params.resource Media resource metadata
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Users$Drafts$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Draft>;
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
        | BodyResponseCallback<Schema$Draft>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Draft>,
      callback?: BodyResponseCallback<Schema$Draft>
    ): void | GaxiosPromise<Schema$Draft> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Draft>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Draft>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Drafts$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the draft to delete.
     */
    id?: string;
    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Drafts$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The format to return the draft in.
     */
    format?: string;
    /**
     * The ID of the draft to retrieve.
     */
    id?: string;
    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Drafts$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Include drafts from SPAM and TRASH in the results.
     */
    includeSpamTrash?: boolean;
    /**
     * Maximum number of drafts to return.
     */
    maxResults?: number;
    /**
     * Page token to retrieve a specific page of results in the list.
     */
    pageToken?: string;
    /**
     * Only return draft messages matching the specified query. Supports the same query format as the Gmail search box. For example, "from:someuser@example.com rfc822msgid: is:unread".
     */
    q?: string;
    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Drafts$Send
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the draft to update.
     */
    id?: string;
    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
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
     * gmail.users.history.list
     * @desc Lists the history of all changes to the given mailbox. History results are returned in chronological order (increasing historyId).
     * @alias gmail.users.history.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.historyTypes History types to be returned by the function
     * @param {string=} params.labelId Only return messages with a label matching the ID.
     * @param {integer=} params.maxResults The maximum number of history records to return.
     * @param {string=} params.pageToken Page token to retrieve a specific page of results in the list.
     * @param {string=} params.startHistoryId Required. Returns history records after the specified startHistoryId. The supplied startHistoryId should be obtained from the historyId of a message, thread, or previous list response. History IDs increase chronologically but are not contiguous with random gaps in between valid IDs. Supplying an invalid or out of date startHistoryId typically returns an HTTP 404 error code. A historyId is typically valid for at least a week, but in some rare circumstances may be valid for only a few hours. If you receive an HTTP 404 error response, your application should perform a full sync. If you receive no nextPageToken in the response, there are no updates to retrieve and you can store the returned historyId for a future request.
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Users$History$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListHistoryResponse>;
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
        | BodyResponseCallback<Schema$ListHistoryResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListHistoryResponse>,
      callback?: BodyResponseCallback<Schema$ListHistoryResponse>
    ): void | GaxiosPromise<Schema$ListHistoryResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$ListHistoryResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListHistoryResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$History$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * History types to be returned by the function
     */
    historyTypes?: string[];
    /**
     * Only return messages with a label matching the ID.
     */
    labelId?: string;
    /**
     * The maximum number of history records to return.
     */
    maxResults?: number;
    /**
     * Page token to retrieve a specific page of results in the list.
     */
    pageToken?: string;
    /**
     * Required. Returns history records after the specified startHistoryId. The supplied startHistoryId should be obtained from the historyId of a message, thread, or previous list response. History IDs increase chronologically but are not contiguous with random gaps in between valid IDs. Supplying an invalid or out of date startHistoryId typically returns an HTTP 404 error code. A historyId is typically valid for at least a week, but in some rare circumstances may be valid for only a few hours. If you receive an HTTP 404 error response, your application should perform a full sync. If you receive no nextPageToken in the response, there are no updates to retrieve and you can store the returned historyId for a future request.
     */
    startHistoryId?: string;
    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
     */
    userId?: string;
  }

  export class Resource$Users$Labels {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * gmail.users.labels.create
     * @desc Creates a new label.
     * @alias gmail.users.labels.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param {().Label} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Users$Labels$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Label>;
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
        | BodyResponseCallback<Schema$Label>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Label>,
      callback?: BodyResponseCallback<Schema$Label>
    ): void | GaxiosPromise<Schema$Label> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Label>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Label>(parameters);
      }
    }

    /**
     * gmail.users.labels.delete
     * @desc Immediately and permanently deletes the specified label and removes it from any messages and threads that it is applied to.
     * @alias gmail.users.labels.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The ID of the label to delete.
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Users$Labels$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
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
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * gmail.users.labels.get
     * @desc Gets the specified label.
     * @alias gmail.users.labels.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The ID of the label to retrieve.
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Users$Labels$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Label>;
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
        | BodyResponseCallback<Schema$Label>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Label>,
      callback?: BodyResponseCallback<Schema$Label>
    ): void | GaxiosPromise<Schema$Label> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Label>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Label>(parameters);
      }
    }

    /**
     * gmail.users.labels.list
     * @desc Lists all labels in the user's mailbox.
     * @alias gmail.users.labels.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Users$Labels$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLabelsResponse>;
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
        | BodyResponseCallback<Schema$ListLabelsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLabelsResponse>,
      callback?: BodyResponseCallback<Schema$ListLabelsResponse>
    ): void | GaxiosPromise<Schema$ListLabelsResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$ListLabelsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListLabelsResponse>(parameters);
      }
    }

    /**
     * gmail.users.labels.patch
     * @desc Updates the specified label. This method supports patch semantics.
     * @alias gmail.users.labels.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The ID of the label to update.
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param {().Label} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Users$Labels$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Label>;
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
        | BodyResponseCallback<Schema$Label>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Label>,
      callback?: BodyResponseCallback<Schema$Label>
    ): void | GaxiosPromise<Schema$Label> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Label>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Label>(parameters);
      }
    }

    /**
     * gmail.users.labels.update
     * @desc Updates the specified label.
     * @alias gmail.users.labels.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The ID of the label to update.
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param {().Label} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Users$Labels$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Label>;
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
        | BodyResponseCallback<Schema$Label>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Label>,
      callback?: BodyResponseCallback<Schema$Label>
    ): void | GaxiosPromise<Schema$Label> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Label>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Label>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Labels$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the label to delete.
     */
    id?: string;
    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Labels$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the label to retrieve.
     */
    id?: string;
    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Labels$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Labels$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the label to update.
     */
    id?: string;
    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the label to update.
     */
    id?: string;
    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
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
     * gmail.users.messages.batchDelete
     * @desc Deletes many messages by message ID. Provides no guarantees that messages were not already deleted or even existed at all.
     * @alias gmail.users.messages.batchDelete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param {().BatchDeleteMessagesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchDelete(
      params?: Params$Resource$Users$Messages$Batchdelete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
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
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * gmail.users.messages.batchModify
     * @desc Modifies the labels on the specified messages.
     * @alias gmail.users.messages.batchModify
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param {().BatchModifyMessagesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchModify(
      params?: Params$Resource$Users$Messages$Batchmodify,
      options?: MethodOptions
    ): GaxiosPromise<void>;
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
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * gmail.users.messages.delete
     * @desc Immediately and permanently deletes the specified message. This operation cannot be undone. Prefer messages.trash instead.
     * @alias gmail.users.messages.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The ID of the message to delete.
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Users$Messages$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
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
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * gmail.users.messages.get
     * @desc Gets the specified message.
     * @alias gmail.users.messages.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.format The format to return the message in.
     * @param {string} params.id The ID of the message to retrieve.
     * @param {string=} params.metadataHeaders When given and format is METADATA, only include headers specified.
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Users$Messages$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
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
        | BodyResponseCallback<Schema$Message>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback?: BodyResponseCallback<Schema$Message>
    ): void | GaxiosPromise<Schema$Message> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Message>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Message>(parameters);
      }
    }

    /**
     * gmail.users.messages.import
     * @desc Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. Does not send a message.
     * @alias gmail.users.messages.import
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.deleted Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for G Suite accounts.
     * @param {string=} params.internalDateSource Source for Gmail's internal date of the message.
     * @param {boolean=} params.neverMarkSpam Ignore the Gmail spam classifier decision and never mark this email as SPAM in the mailbox.
     * @param {boolean=} params.processForCalendar Process calendar invites in the email and add any extracted meetings to the Google Calendar for this user.
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param  {object} params.resource Media resource metadata
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    import(
      params?: Params$Resource$Users$Messages$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
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
        | BodyResponseCallback<Schema$Message>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback?: BodyResponseCallback<Schema$Message>
    ): void | GaxiosPromise<Schema$Message> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Message>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Message>(parameters);
      }
    }

    /**
     * gmail.users.messages.insert
     * @desc Directly inserts a message into only this user's mailbox similar to IMAP APPEND, bypassing most scanning and classification. Does not send a message.
     * @alias gmail.users.messages.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.deleted Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for G Suite accounts.
     * @param {string=} params.internalDateSource Source for Gmail's internal date of the message.
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param  {object} params.resource Media resource metadata
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Users$Messages$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
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
        | BodyResponseCallback<Schema$Message>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback?: BodyResponseCallback<Schema$Message>
    ): void | GaxiosPromise<Schema$Message> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Message>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Message>(parameters);
      }
    }

    /**
     * gmail.users.messages.list
     * @desc Lists the messages in the user's mailbox.
     * @alias gmail.users.messages.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.includeSpamTrash Include messages from SPAM and TRASH in the results.
     * @param {string=} params.labelIds Only return messages with labels that match all of the specified label IDs.
     * @param {integer=} params.maxResults Maximum number of messages to return.
     * @param {string=} params.pageToken Page token to retrieve a specific page of results in the list.
     * @param {string=} params.q Only return messages matching the specified query. Supports the same query format as the Gmail search box. For example, "from:someuser@example.com rfc822msgid:<somemsgid@example.com> is:unread". Parameter cannot be used when accessing the api using the gmail.metadata scope.
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Users$Messages$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListMessagesResponse>;
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
        | BodyResponseCallback<Schema$ListMessagesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListMessagesResponse>,
      callback?: BodyResponseCallback<Schema$ListMessagesResponse>
    ): void | GaxiosPromise<Schema$ListMessagesResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$ListMessagesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListMessagesResponse>(parameters);
      }
    }

    /**
     * gmail.users.messages.modify
     * @desc Modifies the labels on the specified message.
     * @alias gmail.users.messages.modify
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The ID of the message to modify.
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param {().ModifyMessageRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    modify(
      params?: Params$Resource$Users$Messages$Modify,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
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
        | BodyResponseCallback<Schema$Message>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback?: BodyResponseCallback<Schema$Message>
    ): void | GaxiosPromise<Schema$Message> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Message>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Message>(parameters);
      }
    }

    /**
     * gmail.users.messages.send
     * @desc Sends the specified message to the recipients in the To, Cc, and Bcc headers.
     * @alias gmail.users.messages.send
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param  {object} params.resource Media resource metadata
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    send(
      params?: Params$Resource$Users$Messages$Send,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
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
        | BodyResponseCallback<Schema$Message>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback?: BodyResponseCallback<Schema$Message>
    ): void | GaxiosPromise<Schema$Message> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Message>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Message>(parameters);
      }
    }

    /**
     * gmail.users.messages.trash
     * @desc Moves the specified message to the trash.
     * @alias gmail.users.messages.trash
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The ID of the message to Trash.
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    trash(
      params?: Params$Resource$Users$Messages$Trash,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
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
        | BodyResponseCallback<Schema$Message>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback?: BodyResponseCallback<Schema$Message>
    ): void | GaxiosPromise<Schema$Message> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Message>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Message>(parameters);
      }
    }

    /**
     * gmail.users.messages.untrash
     * @desc Removes the specified message from the trash.
     * @alias gmail.users.messages.untrash
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The ID of the message to remove from Trash.
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    untrash(
      params?: Params$Resource$Users$Messages$Untrash,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Message>;
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
        | BodyResponseCallback<Schema$Message>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Message>,
      callback?: BodyResponseCallback<Schema$Message>
    ): void | GaxiosPromise<Schema$Message> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Message>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Message>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Messages$Batchdelete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the message to delete.
     */
    id?: string;
    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Messages$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The format to return the message in.
     */
    format?: string;
    /**
     * The ID of the message to retrieve.
     */
    id?: string;
    /**
     * When given and format is METADATA, only include headers specified.
     */
    metadataHeaders?: string[];
    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Messages$Import
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for G Suite accounts.
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
     * The user's email address. The special value me can be used to indicate the authenticated user.
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator. Only used for G Suite accounts.
     */
    deleted?: boolean;
    /**
     * Source for Gmail's internal date of the message.
     */
    internalDateSource?: string;
    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Include messages from SPAM and TRASH in the results.
     */
    includeSpamTrash?: boolean;
    /**
     * Only return messages with labels that match all of the specified label IDs.
     */
    labelIds?: string[];
    /**
     * Maximum number of messages to return.
     */
    maxResults?: number;
    /**
     * Page token to retrieve a specific page of results in the list.
     */
    pageToken?: string;
    /**
     * Only return messages matching the specified query. Supports the same query format as the Gmail search box. For example, "from:someuser@example.com rfc822msgid:<somemsgid@example.com> is:unread". Parameter cannot be used when accessing the api using the gmail.metadata scope.
     */
    q?: string;
    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Messages$Modify
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the message to modify.
     */
    id?: string;
    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the message to Trash.
     */
    id?: string;
    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Messages$Untrash
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the message to remove from Trash.
     */
    id?: string;
    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
     */
    userId?: string;
  }

  export class Resource$Users$Messages$Attachments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * gmail.users.messages.attachments.get
     * @desc Gets the specified message attachment.
     * @alias gmail.users.messages.attachments.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The ID of the attachment.
     * @param {string} params.messageId The ID of the message containing the attachment.
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Users$Messages$Attachments$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$MessagePartBody>;
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
        | BodyResponseCallback<Schema$MessagePartBody>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$MessagePartBody>,
      callback?: BodyResponseCallback<Schema$MessagePartBody>
    ): void | GaxiosPromise<Schema$MessagePartBody> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$MessagePartBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$MessagePartBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Messages$Attachments$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the attachment.
     */
    id?: string;
    /**
     * The ID of the message containing the attachment.
     */
    messageId?: string;
    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
     */
    userId?: string;
  }

  export class Resource$Users$Settings {
    context: APIRequestContext;
    delegates: Resource$Users$Settings$Delegates;
    filters: Resource$Users$Settings$Filters;
    forwardingAddresses: Resource$Users$Settings$Forwardingaddresses;
    sendAs: Resource$Users$Settings$Sendas;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.delegates = new Resource$Users$Settings$Delegates(this.context);
      this.filters = new Resource$Users$Settings$Filters(this.context);
      this.forwardingAddresses = new Resource$Users$Settings$Forwardingaddresses(
        this.context
      );
      this.sendAs = new Resource$Users$Settings$Sendas(this.context);
    }

    /**
     * gmail.users.settings.getAutoForwarding
     * @desc Gets the auto-forwarding setting for the specified account.
     * @alias gmail.users.settings.getAutoForwarding
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getAutoForwarding(
      params?: Params$Resource$Users$Settings$Getautoforwarding,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AutoForwarding>;
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
        | BodyResponseCallback<Schema$AutoForwarding>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AutoForwarding>,
      callback?: BodyResponseCallback<Schema$AutoForwarding>
    ): void | GaxiosPromise<Schema$AutoForwarding> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$AutoForwarding>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AutoForwarding>(parameters);
      }
    }

    /**
     * gmail.users.settings.getImap
     * @desc Gets IMAP settings.
     * @alias gmail.users.settings.getImap
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getImap(
      params?: Params$Resource$Users$Settings$Getimap,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ImapSettings>;
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
        | BodyResponseCallback<Schema$ImapSettings>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ImapSettings>,
      callback?: BodyResponseCallback<Schema$ImapSettings>
    ): void | GaxiosPromise<Schema$ImapSettings> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$ImapSettings>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ImapSettings>(parameters);
      }
    }

    /**
     * gmail.users.settings.getLanguage
     * @desc Gets language settings.
     * @alias gmail.users.settings.getLanguage
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getLanguage(
      params?: Params$Resource$Users$Settings$Getlanguage,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LanguageSettings>;
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
        | BodyResponseCallback<Schema$LanguageSettings>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LanguageSettings>,
      callback?: BodyResponseCallback<Schema$LanguageSettings>
    ): void | GaxiosPromise<Schema$LanguageSettings> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$LanguageSettings>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LanguageSettings>(parameters);
      }
    }

    /**
     * gmail.users.settings.getPop
     * @desc Gets POP settings.
     * @alias gmail.users.settings.getPop
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getPop(
      params?: Params$Resource$Users$Settings$Getpop,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PopSettings>;
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
        | BodyResponseCallback<Schema$PopSettings>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PopSettings>,
      callback?: BodyResponseCallback<Schema$PopSettings>
    ): void | GaxiosPromise<Schema$PopSettings> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$PopSettings>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PopSettings>(parameters);
      }
    }

    /**
     * gmail.users.settings.getVacation
     * @desc Gets vacation responder settings.
     * @alias gmail.users.settings.getVacation
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getVacation(
      params?: Params$Resource$Users$Settings$Getvacation,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VacationSettings>;
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
        | BodyResponseCallback<Schema$VacationSettings>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$VacationSettings>,
      callback?: BodyResponseCallback<Schema$VacationSettings>
    ): void | GaxiosPromise<Schema$VacationSettings> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$VacationSettings>(parameters, callback);
      } else {
        return createAPIRequest<Schema$VacationSettings>(parameters);
      }
    }

    /**
     * gmail.users.settings.updateAutoForwarding
     * @desc Updates the auto-forwarding setting for the specified account. A verified forwarding address must be specified when auto-forwarding is enabled.  This method is only available to service account clients that have been delegated domain-wide authority.
     * @alias gmail.users.settings.updateAutoForwarding
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {().AutoForwarding} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateAutoForwarding(
      params?: Params$Resource$Users$Settings$Updateautoforwarding,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AutoForwarding>;
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
        | BodyResponseCallback<Schema$AutoForwarding>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AutoForwarding>,
      callback?: BodyResponseCallback<Schema$AutoForwarding>
    ): void | GaxiosPromise<Schema$AutoForwarding> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$AutoForwarding>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AutoForwarding>(parameters);
      }
    }

    /**
     * gmail.users.settings.updateImap
     * @desc Updates IMAP settings.
     * @alias gmail.users.settings.updateImap
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {().ImapSettings} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateImap(
      params?: Params$Resource$Users$Settings$Updateimap,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ImapSettings>;
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
        | BodyResponseCallback<Schema$ImapSettings>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ImapSettings>,
      callback?: BodyResponseCallback<Schema$ImapSettings>
    ): void | GaxiosPromise<Schema$ImapSettings> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$ImapSettings>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ImapSettings>(parameters);
      }
    }

    /**
     * gmail.users.settings.updateLanguage
     * @desc Updates language settings.  If successful, the return object contains the displayLanguage that was saved for the user, which may differ from the value passed into the request. This is because the requested displayLanguage may not be directly supported by Gmail but have a close variant that is, and so the variant may be chosen and saved instead.
     * @alias gmail.users.settings.updateLanguage
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {().LanguageSettings} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateLanguage(
      params?: Params$Resource$Users$Settings$Updatelanguage,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LanguageSettings>;
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
        | BodyResponseCallback<Schema$LanguageSettings>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LanguageSettings>,
      callback?: BodyResponseCallback<Schema$LanguageSettings>
    ): void | GaxiosPromise<Schema$LanguageSettings> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$LanguageSettings>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LanguageSettings>(parameters);
      }
    }

    /**
     * gmail.users.settings.updatePop
     * @desc Updates POP settings.
     * @alias gmail.users.settings.updatePop
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {().PopSettings} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updatePop(
      params?: Params$Resource$Users$Settings$Updatepop,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PopSettings>;
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
        | BodyResponseCallback<Schema$PopSettings>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PopSettings>,
      callback?: BodyResponseCallback<Schema$PopSettings>
    ): void | GaxiosPromise<Schema$PopSettings> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$PopSettings>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PopSettings>(parameters);
      }
    }

    /**
     * gmail.users.settings.updateVacation
     * @desc Updates vacation responder settings.
     * @alias gmail.users.settings.updateVacation
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {().VacationSettings} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateVacation(
      params?: Params$Resource$Users$Settings$Updatevacation,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VacationSettings>;
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
        | BodyResponseCallback<Schema$VacationSettings>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$VacationSettings>,
      callback?: BodyResponseCallback<Schema$VacationSettings>
    ): void | GaxiosPromise<Schema$VacationSettings> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$VacationSettings>(parameters, callback);
      } else {
        return createAPIRequest<Schema$VacationSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Settings$Getautoforwarding
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Settings$Getimap
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Settings$Getlanguage
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Settings$Getpop
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Settings$Getvacation
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Settings$Updateautoforwarding
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$VacationSettings;
  }

  export class Resource$Users$Settings$Delegates {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * gmail.users.settings.delegates.create
     * @desc Adds a delegate with its verification status set directly to accepted, without sending any verification email. The delegate user must be a member of the same G Suite organization as the delegator user.  Gmail imposes limtations on the number of delegates and delegators each user in a G Suite organization can have. These limits depend on your organization, but in general each user can have up to 25 delegates and up to 10 delegators.  Note that a delegate user must be referred to by their primary email address, and not an email alias.  Also note that when a new delegate is created, there may be up to a one minute delay before the new delegate is available for use.  This method is only available to service account clients that have been delegated domain-wide authority.
     * @alias gmail.users.settings.delegates.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {().Delegate} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Users$Settings$Delegates$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Delegate>;
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
        | BodyResponseCallback<Schema$Delegate>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Delegate>,
      callback?: BodyResponseCallback<Schema$Delegate>
    ): void | GaxiosPromise<Schema$Delegate> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Delegate>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Delegate>(parameters);
      }
    }

    /**
     * gmail.users.settings.delegates.delete
     * @desc Removes the specified delegate (which can be of any verification status), and revokes any verification that may have been required for using it.  Note that a delegate user must be referred to by their primary email address, and not an email alias.  This method is only available to service account clients that have been delegated domain-wide authority.
     * @alias gmail.users.settings.delegates.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.delegateEmail The email address of the user to be removed as a delegate.
     * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Users$Settings$Delegates$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
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
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * gmail.users.settings.delegates.get
     * @desc Gets the specified delegate.  Note that a delegate user must be referred to by their primary email address, and not an email alias.  This method is only available to service account clients that have been delegated domain-wide authority.
     * @alias gmail.users.settings.delegates.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.delegateEmail The email address of the user whose delegate relationship is to be retrieved.
     * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Users$Settings$Delegates$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Delegate>;
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
        | BodyResponseCallback<Schema$Delegate>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Delegate>,
      callback?: BodyResponseCallback<Schema$Delegate>
    ): void | GaxiosPromise<Schema$Delegate> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Delegate>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Delegate>(parameters);
      }
    }

    /**
     * gmail.users.settings.delegates.list
     * @desc Lists the delegates for the specified account.  This method is only available to service account clients that have been delegated domain-wide authority.
     * @alias gmail.users.settings.delegates.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Users$Settings$Delegates$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDelegatesResponse>;
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
        | BodyResponseCallback<Schema$ListDelegatesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDelegatesResponse>,
      callback?: BodyResponseCallback<Schema$ListDelegatesResponse>
    ): void | GaxiosPromise<Schema$ListDelegatesResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$ListDelegatesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListDelegatesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Settings$Delegates$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * gmail.users.settings.filters.create
     * @desc Creates a filter.
     * @alias gmail.users.settings.filters.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {().Filter} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Users$Settings$Filters$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Filter>;
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
        | BodyResponseCallback<Schema$Filter>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Filter>,
      callback?: BodyResponseCallback<Schema$Filter>
    ): void | GaxiosPromise<Schema$Filter> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Filter>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Filter>(parameters);
      }
    }

    /**
     * gmail.users.settings.filters.delete
     * @desc Deletes a filter.
     * @alias gmail.users.settings.filters.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The ID of the filter to be deleted.
     * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Users$Settings$Filters$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
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
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * gmail.users.settings.filters.get
     * @desc Gets a filter.
     * @alias gmail.users.settings.filters.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The ID of the filter to be fetched.
     * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Users$Settings$Filters$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Filter>;
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
        | BodyResponseCallback<Schema$Filter>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Filter>,
      callback?: BodyResponseCallback<Schema$Filter>
    ): void | GaxiosPromise<Schema$Filter> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Filter>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Filter>(parameters);
      }
    }

    /**
     * gmail.users.settings.filters.list
     * @desc Lists the message filters of a Gmail user.
     * @alias gmail.users.settings.filters.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Users$Settings$Filters$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListFiltersResponse>;
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
        | BodyResponseCallback<Schema$ListFiltersResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListFiltersResponse>,
      callback?: BodyResponseCallback<Schema$ListFiltersResponse>
    ): void | GaxiosPromise<Schema$ListFiltersResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$ListFiltersResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListFiltersResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Settings$Filters$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * gmail.users.settings.forwardingAddresses.create
     * @desc Creates a forwarding address. If ownership verification is required, a message will be sent to the recipient and the resource's verification status will be set to pending; otherwise, the resource will be created with verification status set to accepted.  This method is only available to service account clients that have been delegated domain-wide authority.
     * @alias gmail.users.settings.forwardingAddresses.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {().ForwardingAddress} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Users$Settings$Forwardingaddresses$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ForwardingAddress>;
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
        | BodyResponseCallback<Schema$ForwardingAddress>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ForwardingAddress>,
      callback?: BodyResponseCallback<Schema$ForwardingAddress>
    ): void | GaxiosPromise<Schema$ForwardingAddress> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Forwardingaddresses$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Forwardingaddresses$Create;
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
        createAPIRequest<Schema$ForwardingAddress>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ForwardingAddress>(parameters);
      }
    }

    /**
     * gmail.users.settings.forwardingAddresses.delete
     * @desc Deletes the specified forwarding address and revokes any verification that may have been required.  This method is only available to service account clients that have been delegated domain-wide authority.
     * @alias gmail.users.settings.forwardingAddresses.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.forwardingEmail The forwarding address to be deleted.
     * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Users$Settings$Forwardingaddresses$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
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
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Forwardingaddresses$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Forwardingaddresses$Delete;
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * gmail.users.settings.forwardingAddresses.get
     * @desc Gets the specified forwarding address.
     * @alias gmail.users.settings.forwardingAddresses.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.forwardingEmail The forwarding address to be retrieved.
     * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Users$Settings$Forwardingaddresses$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ForwardingAddress>;
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
        | BodyResponseCallback<Schema$ForwardingAddress>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ForwardingAddress>,
      callback?: BodyResponseCallback<Schema$ForwardingAddress>
    ): void | GaxiosPromise<Schema$ForwardingAddress> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$ForwardingAddress>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ForwardingAddress>(parameters);
      }
    }

    /**
     * gmail.users.settings.forwardingAddresses.list
     * @desc Lists the forwarding addresses for the specified account.
     * @alias gmail.users.settings.forwardingAddresses.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Users$Settings$Forwardingaddresses$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListForwardingAddressesResponse>;
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
        | BodyResponseCallback<Schema$ListForwardingAddressesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListForwardingAddressesResponse>,
      callback?: BodyResponseCallback<Schema$ListForwardingAddressesResponse>
    ): void | GaxiosPromise<Schema$ListForwardingAddressesResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
          callback
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * gmail.users.settings.sendAs.create
     * @desc Creates a custom "from" send-as alias. If an SMTP MSA is specified, Gmail will attempt to connect to the SMTP service to validate the configuration before creating the alias. If ownership verification is required for the alias, a message will be sent to the email address and the resource's verification status will be set to pending; otherwise, the resource will be created with verification status set to accepted. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias.  This method is only available to service account clients that have been delegated domain-wide authority.
     * @alias gmail.users.settings.sendAs.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {().SendAs} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Users$Settings$Sendas$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SendAs>;
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
        | BodyResponseCallback<Schema$SendAs>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$SendAs>,
      callback?: BodyResponseCallback<Schema$SendAs>
    ): void | GaxiosPromise<Schema$SendAs> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$SendAs>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SendAs>(parameters);
      }
    }

    /**
     * gmail.users.settings.sendAs.delete
     * @desc Deletes the specified send-as alias. Revokes any verification that may have been required for using it.  This method is only available to service account clients that have been delegated domain-wide authority.
     * @alias gmail.users.settings.sendAs.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.sendAsEmail The send-as alias to be deleted.
     * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Users$Settings$Sendas$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
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
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * gmail.users.settings.sendAs.get
     * @desc Gets the specified send-as alias. Fails with an HTTP 404 error if the specified address is not a member of the collection.
     * @alias gmail.users.settings.sendAs.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.sendAsEmail The send-as alias to be retrieved.
     * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Users$Settings$Sendas$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SendAs>;
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
        | BodyResponseCallback<Schema$SendAs>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$SendAs>,
      callback?: BodyResponseCallback<Schema$SendAs>
    ): void | GaxiosPromise<Schema$SendAs> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$SendAs>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SendAs>(parameters);
      }
    }

    /**
     * gmail.users.settings.sendAs.list
     * @desc Lists the send-as aliases for the specified account. The result includes the primary send-as address associated with the account as well as any custom "from" aliases.
     * @alias gmail.users.settings.sendAs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Users$Settings$Sendas$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSendAsResponse>;
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
        | BodyResponseCallback<Schema$ListSendAsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSendAsResponse>,
      callback?: BodyResponseCallback<Schema$ListSendAsResponse>
    ): void | GaxiosPromise<Schema$ListSendAsResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$ListSendAsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListSendAsResponse>(parameters);
      }
    }

    /**
     * gmail.users.settings.sendAs.patch
     * @desc Updates a send-as alias. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias.  Addresses other than the primary address for the account can only be updated by service account clients that have been delegated domain-wide authority. This method supports patch semantics.
     * @alias gmail.users.settings.sendAs.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.sendAsEmail The send-as alias to be updated.
     * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {().SendAs} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Users$Settings$Sendas$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SendAs>;
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
        | BodyResponseCallback<Schema$SendAs>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$SendAs>,
      callback?: BodyResponseCallback<Schema$SendAs>
    ): void | GaxiosPromise<Schema$SendAs> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$SendAs>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SendAs>(parameters);
      }
    }

    /**
     * gmail.users.settings.sendAs.update
     * @desc Updates a send-as alias. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias.  Addresses other than the primary address for the account can only be updated by service account clients that have been delegated domain-wide authority.
     * @alias gmail.users.settings.sendAs.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.sendAsEmail The send-as alias to be updated.
     * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {().SendAs} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Users$Settings$Sendas$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SendAs>;
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
        | BodyResponseCallback<Schema$SendAs>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$SendAs>,
      callback?: BodyResponseCallback<Schema$SendAs>
    ): void | GaxiosPromise<Schema$SendAs> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$SendAs>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SendAs>(parameters);
      }
    }

    /**
     * gmail.users.settings.sendAs.verify
     * @desc Sends a verification email to the specified send-as alias address. The verification status must be pending.  This method is only available to service account clients that have been delegated domain-wide authority.
     * @alias gmail.users.settings.sendAs.verify
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.sendAsEmail The send-as alias to be verified.
     * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    verify(
      params?: Params$Resource$Users$Settings$Sendas$Verify,
      options?: MethodOptions
    ): GaxiosPromise<void>;
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
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Settings$Sendas$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User's email address. The special value "me" can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Settings$Sendas$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * gmail.users.settings.sendAs.smimeInfo.delete
     * @desc Deletes the specified S/MIME config for the specified send-as alias.
     * @alias gmail.users.settings.sendAs.smimeInfo.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The immutable ID for the SmimeInfo.
     * @param {string} params.sendAsEmail The email address that appears in the "From:" header for mail sent using this alias.
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Users$Settings$Sendas$Smimeinfo$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
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
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * gmail.users.settings.sendAs.smimeInfo.get
     * @desc Gets the specified S/MIME config for the specified send-as alias.
     * @alias gmail.users.settings.sendAs.smimeInfo.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The immutable ID for the SmimeInfo.
     * @param {string} params.sendAsEmail The email address that appears in the "From:" header for mail sent using this alias.
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Users$Settings$Sendas$Smimeinfo$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SmimeInfo>;
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
        | BodyResponseCallback<Schema$SmimeInfo>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SmimeInfo>,
      callback?: BodyResponseCallback<Schema$SmimeInfo>
    ): void | GaxiosPromise<Schema$SmimeInfo> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$SmimeInfo>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SmimeInfo>(parameters);
      }
    }

    /**
     * gmail.users.settings.sendAs.smimeInfo.insert
     * @desc Insert (upload) the given S/MIME config for the specified send-as alias. Note that pkcs12 format is required for the key.
     * @alias gmail.users.settings.sendAs.smimeInfo.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.sendAsEmail The email address that appears in the "From:" header for mail sent using this alias.
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param {().SmimeInfo} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Users$Settings$Sendas$Smimeinfo$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SmimeInfo>;
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
        | BodyResponseCallback<Schema$SmimeInfo>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SmimeInfo>,
      callback?: BodyResponseCallback<Schema$SmimeInfo>
    ): void | GaxiosPromise<Schema$SmimeInfo> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$SmimeInfo>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SmimeInfo>(parameters);
      }
    }

    /**
     * gmail.users.settings.sendAs.smimeInfo.list
     * @desc Lists S/MIME configs for the specified send-as alias.
     * @alias gmail.users.settings.sendAs.smimeInfo.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.sendAsEmail The email address that appears in the "From:" header for mail sent using this alias.
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Users$Settings$Sendas$Smimeinfo$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSmimeInfoResponse>;
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
        | BodyResponseCallback<Schema$ListSmimeInfoResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSmimeInfoResponse>,
      callback?: BodyResponseCallback<Schema$ListSmimeInfoResponse>
    ): void | GaxiosPromise<Schema$ListSmimeInfoResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$ListSmimeInfoResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListSmimeInfoResponse>(parameters);
      }
    }

    /**
     * gmail.users.settings.sendAs.smimeInfo.setDefault
     * @desc Sets the default S/MIME config for the specified send-as alias.
     * @alias gmail.users.settings.sendAs.smimeInfo.setDefault
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The immutable ID for the SmimeInfo.
     * @param {string} params.sendAsEmail The email address that appears in the "From:" header for mail sent using this alias.
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setDefault(
      params?: Params$Resource$Users$Settings$Sendas$Smimeinfo$Setdefault,
      options?: MethodOptions
    ): GaxiosPromise<void>;
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
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Settings$Sendas$Smimeinfo$Setdefault;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Settings$Sendas$Smimeinfo$Setdefault;
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Settings$Sendas$Smimeinfo$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The immutable ID for the SmimeInfo.
     */
    id?: string;
    /**
     * The email address that appears in the "From:" header for mail sent using this alias.
     */
    sendAsEmail?: string;
    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Settings$Sendas$Smimeinfo$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The immutable ID for the SmimeInfo.
     */
    id?: string;
    /**
     * The email address that appears in the "From:" header for mail sent using this alias.
     */
    sendAsEmail?: string;
    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Settings$Sendas$Smimeinfo$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The email address that appears in the "From:" header for mail sent using this alias.
     */
    sendAsEmail?: string;
    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The email address that appears in the "From:" header for mail sent using this alias.
     */
    sendAsEmail?: string;
    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Settings$Sendas$Smimeinfo$Setdefault
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The immutable ID for the SmimeInfo.
     */
    id?: string;
    /**
     * The email address that appears in the "From:" header for mail sent using this alias.
     */
    sendAsEmail?: string;
    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
     */
    userId?: string;
  }

  export class Resource$Users$Threads {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * gmail.users.threads.delete
     * @desc Immediately and permanently deletes the specified thread. This operation cannot be undone. Prefer threads.trash instead.
     * @alias gmail.users.threads.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id ID of the Thread to delete.
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Users$Threads$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
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
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * gmail.users.threads.get
     * @desc Gets the specified thread.
     * @alias gmail.users.threads.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.format The format to return the messages in.
     * @param {string} params.id The ID of the thread to retrieve.
     * @param {string=} params.metadataHeaders When given and format is METADATA, only include headers specified.
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Users$Threads$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Thread>;
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
        | BodyResponseCallback<Schema$Thread>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Thread>,
      callback?: BodyResponseCallback<Schema$Thread>
    ): void | GaxiosPromise<Schema$Thread> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Thread>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Thread>(parameters);
      }
    }

    /**
     * gmail.users.threads.list
     * @desc Lists the threads in the user's mailbox.
     * @alias gmail.users.threads.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.includeSpamTrash Include threads from SPAM and TRASH in the results.
     * @param {string=} params.labelIds Only return threads with labels that match all of the specified label IDs.
     * @param {integer=} params.maxResults Maximum number of threads to return.
     * @param {string=} params.pageToken Page token to retrieve a specific page of results in the list.
     * @param {string=} params.q Only return threads matching the specified query. Supports the same query format as the Gmail search box. For example, "from:someuser@example.com rfc822msgid: is:unread". Parameter cannot be used when accessing the api using the gmail.metadata scope.
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Users$Threads$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListThreadsResponse>;
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
        | BodyResponseCallback<Schema$ListThreadsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListThreadsResponse>,
      callback?: BodyResponseCallback<Schema$ListThreadsResponse>
    ): void | GaxiosPromise<Schema$ListThreadsResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$ListThreadsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListThreadsResponse>(parameters);
      }
    }

    /**
     * gmail.users.threads.modify
     * @desc Modifies the labels applied to the thread. This applies to all messages in the thread.
     * @alias gmail.users.threads.modify
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The ID of the thread to modify.
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param {().ModifyThreadRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    modify(
      params?: Params$Resource$Users$Threads$Modify,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Thread>;
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
        | BodyResponseCallback<Schema$Thread>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Thread>,
      callback?: BodyResponseCallback<Schema$Thread>
    ): void | GaxiosPromise<Schema$Thread> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Thread>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Thread>(parameters);
      }
    }

    /**
     * gmail.users.threads.trash
     * @desc Moves the specified thread to the trash.
     * @alias gmail.users.threads.trash
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The ID of the thread to Trash.
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    trash(
      params?: Params$Resource$Users$Threads$Trash,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Thread>;
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
        | BodyResponseCallback<Schema$Thread>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Thread>,
      callback?: BodyResponseCallback<Schema$Thread>
    ): void | GaxiosPromise<Schema$Thread> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Thread>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Thread>(parameters);
      }
    }

    /**
     * gmail.users.threads.untrash
     * @desc Removes the specified thread from the trash.
     * @alias gmail.users.threads.untrash
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The ID of the thread to remove from Trash.
     * @param {string} params.userId The user's email address. The special value me can be used to indicate the authenticated user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    untrash(
      params?: Params$Resource$Users$Threads$Untrash,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Thread>;
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
        | BodyResponseCallback<Schema$Thread>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Thread>,
      callback?: BodyResponseCallback<Schema$Thread>
    ): void | GaxiosPromise<Schema$Thread> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
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
        createAPIRequest<Schema$Thread>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Thread>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Threads$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * ID of the Thread to delete.
     */
    id?: string;
    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Threads$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * The user's email address. The special value me can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Threads$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Include threads from SPAM and TRASH in the results.
     */
    includeSpamTrash?: boolean;
    /**
     * Only return threads with labels that match all of the specified label IDs.
     */
    labelIds?: string[];
    /**
     * Maximum number of threads to return.
     */
    maxResults?: number;
    /**
     * Page token to retrieve a specific page of results in the list.
     */
    pageToken?: string;
    /**
     * Only return threads matching the specified query. Supports the same query format as the Gmail search box. For example, "from:someuser@example.com rfc822msgid: is:unread". Parameter cannot be used when accessing the api using the gmail.metadata scope.
     */
    q?: string;
    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Threads$Modify
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the thread to modify.
     */
    id?: string;
    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the thread to Trash.
     */
    id?: string;
    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Threads$Untrash
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the thread to remove from Trash.
     */
    id?: string;
    /**
     * The user's email address. The special value me can be used to indicate the authenticated user.
     */
    userId?: string;
  }
}
