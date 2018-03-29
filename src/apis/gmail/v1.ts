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

import {AxiosPromise} from 'axios';

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format

/**
 * Gmail API
 *
 * Access Gmail mailboxes including sending user email.
 *
 * @example
 * const google = require('googleapis');
 * const gmail = google.gmail('v1');
 *
 * @namespace gmail
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Gmail
 */
export class Gmail {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  users: Resource$Users;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.users = new Resource$Users(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * Auto-forwarding settings for an account.
 */
export interface Schema$AutoForwarding {
  /**
   * The state that a message should be left in after it has been forwarded.
   */
  disposition: string;
  /**
   * Email address to which all incoming messages are forwarded. This email
   * address must be a verified member of the forwarding addresses.
   */
  emailAddress: string;
  /**
   * Whether all incoming mail is automatically forwarded to another address.
   */
  enabled: boolean;
}
export interface Schema$BatchDeleteMessagesRequest {
  /**
   * The IDs of the messages to delete.
   */
  ids: string[];
}
export interface Schema$BatchModifyMessagesRequest {
  /**
   * A list of label IDs to add to messages.
   */
  addLabelIds: string[];
  /**
   * The IDs of the messages to modify. There is a limit of 1000 ids per
   * request.
   */
  ids: string[];
  /**
   * A list of label IDs to remove from messages.
   */
  removeLabelIds: string[];
}
/**
 * A draft email in the user&#39;s mailbox.
 */
export interface Schema$Draft {
  /**
   * The immutable ID of the draft.
   */
  id: string;
  /**
   * The message content of the draft.
   */
  message: Schema$Message;
}
/**
 * Resource definition for Gmail filters. Filters apply to specific messages
 * instead of an entire email thread.
 */
export interface Schema$Filter {
  /**
   * Action that the filter performs.
   */
  action: Schema$FilterAction;
  /**
   * Matching criteria for the filter.
   */
  criteria: Schema$FilterCriteria;
  /**
   * The server assigned ID of the filter.
   */
  id: string;
}
/**
 * A set of actions to perform on a message.
 */
export interface Schema$FilterAction {
  /**
   * List of labels to add to the message.
   */
  addLabelIds: string[];
  /**
   * Email address that the message should be forwarded to.
   */
  forward: string;
  /**
   * List of labels to remove from the message.
   */
  removeLabelIds: string[];
}
/**
 * Message matching criteria.
 */
export interface Schema$FilterCriteria {
  /**
   * Whether the response should exclude chats.
   */
  excludeChats: boolean;
  /**
   * The sender&#39;s display name or email address.
   */
  from: string;
  /**
   * Whether the message has any attachment.
   */
  hasAttachment: boolean;
  /**
   * Only return messages not matching the specified query. Supports the same
   * query format as the Gmail search box. For example,
   * &quot;from:someuser@example.com rfc822msgid: is:unread&quot;.
   */
  negatedQuery: string;
  /**
   * Only return messages matching the specified query. Supports the same query
   * format as the Gmail search box. For example,
   * &quot;from:someuser@example.com rfc822msgid: is:unread&quot;.
   */
  query: string;
  /**
   * The size of the entire RFC822 message in bytes, including all headers and
   * attachments.
   */
  size: number;
  /**
   * How the message size in bytes should be in relation to the size field.
   */
  sizeComparison: string;
  /**
   * Case-insensitive phrase found in the message&#39;s subject. Trailing and
   * leading whitespace are be trimmed and adjacent spaces are collapsed.
   */
  subject: string;
  /**
   * The recipient&#39;s display name or email address. Includes recipients in
   * the &quot;to&quot;, &quot;cc&quot;, and &quot;bcc&quot; header fields. You
   * can use simply the local part of the email address. For example,
   * &quot;example&quot; and &quot;example@&quot; both match
   * &quot;example@gmail.com&quot;. This field is case-insensitive.
   */
  to: string;
}
/**
 * Settings for a forwarding address.
 */
export interface Schema$ForwardingAddress {
  /**
   * An email address to which messages can be forwarded.
   */
  forwardingEmail: string;
  /**
   * Indicates whether this address has been verified and is usable for
   * forwarding. Read-only.
   */
  verificationStatus: string;
}
/**
 * A record of a change to the user&#39;s mailbox. Each history change may
 * affect multiple messages in multiple ways.
 */
export interface Schema$History {
  /**
   * The mailbox sequence ID.
   */
  id: string;
  /**
   * Labels added to messages in this history record.
   */
  labelsAdded: Schema$HistoryLabelAdded[];
  /**
   * Labels removed from messages in this history record.
   */
  labelsRemoved: Schema$HistoryLabelRemoved[];
  /**
   * List of messages changed in this history record. The fields for specific
   * change types, such as messagesAdded may duplicate messages in this field.
   * We recommend using the specific change-type fields instead of this.
   */
  messages: Schema$Message[];
  /**
   * Messages added to the mailbox in this history record.
   */
  messagesAdded: Schema$HistoryMessageAdded[];
  /**
   * Messages deleted (not Trashed) from the mailbox in this history record.
   */
  messagesDeleted: Schema$HistoryMessageDeleted[];
}
export interface Schema$HistoryLabelAdded {
  /**
   * Label IDs added to the message.
   */
  labelIds: string[];
  message: Schema$Message;
}
export interface Schema$HistoryLabelRemoved {
  /**
   * Label IDs removed from the message.
   */
  labelIds: string[];
  message: Schema$Message;
}
export interface Schema$HistoryMessageAdded { message: Schema$Message; }
export interface Schema$HistoryMessageDeleted { message: Schema$Message; }
/**
 * IMAP settings for an account.
 */
export interface Schema$ImapSettings {
  /**
   * If this value is true, Gmail will immediately expunge a message when it is
   * marked as deleted in IMAP. Otherwise, Gmail will wait for an update from
   * the client before expunging messages marked as deleted.
   */
  autoExpunge: boolean;
  /**
   * Whether IMAP is enabled for the account.
   */
  enabled: boolean;
  /**
   * The action that will be executed on a message when it is marked as deleted
   * and expunged from the last visible IMAP folder.
   */
  expungeBehavior: string;
  /**
   * An optional limit on the number of messages that an IMAP folder may
   * contain. Legal values are 0, 1000, 2000, 5000 or 10000. A value of zero is
   * interpreted to mean that there is no limit.
   */
  maxFolderSize: number;
}
/**
 * Labels are used to categorize messages and threads within the user&#39;s
 * mailbox.
 */
export interface Schema$Label {
  /**
   * The color to assign to the label. Color is only available for labels that
   * have their type set to user.
   */
  color: Schema$LabelColor;
  /**
   * The immutable ID of the label.
   */
  id: string;
  /**
   * The visibility of the label in the label list in the Gmail web interface.
   */
  labelListVisibility: string;
  /**
   * The visibility of the label in the message list in the Gmail web interface.
   */
  messageListVisibility: string;
  /**
   * The total number of messages with the label.
   */
  messagesTotal: number;
  /**
   * The number of unread messages with the label.
   */
  messagesUnread: number;
  /**
   * The display name of the label.
   */
  name: string;
  /**
   * The total number of threads with the label.
   */
  threadsTotal: number;
  /**
   * The number of unread threads with the label.
   */
  threadsUnread: number;
  /**
   * The owner type for the label. User labels are created by the user and can
   * be modified and deleted by the user and can be applied to any message or
   * thread. System labels are internally created and cannot be added, modified,
   * or deleted. System labels may be able to be applied to or removed from
   * messages and threads under some circumstances but this is not guaranteed.
   * For example, users can apply and remove the INBOX and UNREAD labels from
   * messages and threads, but cannot apply or remove the DRAFTS or SENT labels
   * from messages or threads.
   */
  type: string;
}
export interface Schema$LabelColor {
  /**
   * The background color represented as hex string #RRGGBB (ex #000000). This
   * field is required in order to set the color of a label. Only the following
   * predefined set of color values are allowed: #000000, #434343, #666666,
   * #999999, #cccccc, #efefef, #f3f3f3, #ffffff, #fb4c2f, #ffad47, #fad165,
   * #16a766, #43d692, #4a86e8, #a479e2, #f691b3, #f6c5be, #ffe6c7, #fef1d1,
   * #b9e4d0, #c6f3de, #c9daf8, #e4d7f5, #fcdee8, #efa093, #ffd6a2, #fce8b3,
   * #89d3b2, #a0eac9, #a4c2f4, #d0bcf1, #fbc8d9, #e66550, #ffbc6b, #fcda83,
   * #44b984, #68dfa9, #6d9eeb, #b694e8, #f7a7c0, #cc3a21, #eaa041, #f2c960,
   * #149e60, #3dc789, #3c78d8, #8e63ce, #e07798, #ac2b16, #cf8933, #d5ae49,
   * #0b804b, #2a9c68, #285bac, #653e9b, #b65775, #822111, #a46a21, #aa8831,
   * #076239, #1a764d, #1c4587, #41236d, #83334c
   */
  backgroundColor: string;
  /**
   * The text color of the label, represented as hex string. This field is
   * required in order to set the color of a label. Only the following
   * predefined set of color values are allowed: #000000, #434343, #666666,
   * #999999, #cccccc, #efefef, #f3f3f3, #ffffff, #fb4c2f, #ffad47, #fad165,
   * #16a766, #43d692, #4a86e8, #a479e2, #f691b3, #f6c5be, #ffe6c7, #fef1d1,
   * #b9e4d0, #c6f3de, #c9daf8, #e4d7f5, #fcdee8, #efa093, #ffd6a2, #fce8b3,
   * #89d3b2, #a0eac9, #a4c2f4, #d0bcf1, #fbc8d9, #e66550, #ffbc6b, #fcda83,
   * #44b984, #68dfa9, #6d9eeb, #b694e8, #f7a7c0, #cc3a21, #eaa041, #f2c960,
   * #149e60, #3dc789, #3c78d8, #8e63ce, #e07798, #ac2b16, #cf8933, #d5ae49,
   * #0b804b, #2a9c68, #285bac, #653e9b, #b65775, #822111, #a46a21, #aa8831,
   * #076239, #1a764d, #1c4587, #41236d, #83334c
   */
  textColor: string;
}
export interface Schema$ListDraftsResponse {
  /**
   * List of drafts.
   */
  drafts: Schema$Draft[];
  /**
   * Token to retrieve the next page of results in the list.
   */
  nextPageToken: string;
  /**
   * Estimated total number of results.
   */
  resultSizeEstimate: number;
}
/**
 * Response for the ListFilters method.
 */
export interface Schema$ListFiltersResponse {
  /**
   * List of a user&#39;s filters.
   */
  filter: Schema$Filter[];
}
/**
 * Response for the ListForwardingAddresses method.
 */
export interface Schema$ListForwardingAddressesResponse {
  /**
   * List of addresses that may be used for forwarding.
   */
  forwardingAddresses: Schema$ForwardingAddress[];
}
export interface Schema$ListHistoryResponse {
  /**
   * List of history records. Any messages contained in the response will
   * typically only have id and threadId fields populated.
   */
  history: Schema$History[];
  /**
   * The ID of the mailbox&#39;s current history record.
   */
  historyId: string;
  /**
   * Page token to retrieve the next page of results in the list.
   */
  nextPageToken: string;
}
export interface Schema$ListLabelsResponse {
  /**
   * List of labels.
   */
  labels: Schema$Label[];
}
export interface Schema$ListMessagesResponse {
  /**
   * List of messages.
   */
  messages: Schema$Message[];
  /**
   * Token to retrieve the next page of results in the list.
   */
  nextPageToken: string;
  /**
   * Estimated total number of results.
   */
  resultSizeEstimate: number;
}
/**
 * Response for the ListSendAs method.
 */
export interface Schema$ListSendAsResponse {
  /**
   * List of send-as aliases.
   */
  sendAs: Schema$SendAs[];
}
export interface Schema$ListSmimeInfoResponse {
  /**
   * List of SmimeInfo.
   */
  smimeInfo: Schema$SmimeInfo[];
}
export interface Schema$ListThreadsResponse {
  /**
   * Page token to retrieve the next page of results in the list.
   */
  nextPageToken: string;
  /**
   * Estimated total number of results.
   */
  resultSizeEstimate: number;
  /**
   * List of threads.
   */
  threads: Schema$Thread[];
}
/**
 * An email message.
 */
export interface Schema$Message {
  /**
   * The ID of the last history record that modified this message.
   */
  historyId: string;
  /**
   * The immutable ID of the message.
   */
  id: string;
  /**
   * The internal message creation timestamp (epoch ms), which determines
   * ordering in the inbox. For normal SMTP-received email, this represents the
   * time the message was originally accepted by Google, which is more reliable
   * than the Date header. However, for API-migrated mail, it can be configured
   * by client to be based on the Date header.
   */
  internalDate: string;
  /**
   * List of IDs of labels applied to this message.
   */
  labelIds: string[];
  /**
   * The parsed email structure in the message parts.
   */
  payload: Schema$MessagePart;
  /**
   * The entire email message in an RFC 2822 formatted and base64url encoded
   * string. Returned in messages.get and drafts.get responses when the
   * format=RAW parameter is supplied.
   */
  raw: string;
  /**
   * Estimated size in bytes of the message.
   */
  sizeEstimate: number;
  /**
   * A short part of the message text.
   */
  snippet: string;
  /**
   * The ID of the thread the message belongs to. To add a message or draft to a
   * thread, the following criteria must be met:  - The requested threadId must
   * be specified on the Message or Draft.Message you supply with your request.
   * - The References and In-Reply-To headers must be set in compliance with the
   * RFC 2822 standard.  - The Subject headers must match.
   */
  threadId: string;
}
/**
 * A single MIME message part.
 */
export interface Schema$MessagePart {
  /**
   * The message part body for this part, which may be empty for container MIME
   * message parts.
   */
  body: Schema$MessagePartBody;
  /**
   * The filename of the attachment. Only present if this message part
   * represents an attachment.
   */
  filename: string;
  /**
   * List of headers on this message part. For the top-level message part,
   * representing the entire message payload, it will contain the standard RFC
   * 2822 email headers such as To, From, and Subject.
   */
  headers: Schema$MessagePartHeader[];
  /**
   * The MIME type of the message part.
   */
  mimeType: string;
  /**
   * The immutable ID of the message part.
   */
  partId: string;
  /**
   * The child MIME message parts of this part. This only applies to container
   * MIME message parts, for example multipart/*. For non- container MIME
   * message part types, such as text/plain, this field is empty. For more
   * information, see RFC 1521.
   */
  parts: Schema$MessagePart[];
}
/**
 * The body of a single MIME message part.
 */
export interface Schema$MessagePartBody {
  /**
   * When present, contains the ID of an external attachment that can be
   * retrieved in a separate messages.attachments.get request. When not present,
   * the entire content of the message part body is contained in the data field.
   */
  attachmentId: string;
  /**
   * The body data of a MIME message part as a base64url encoded string. May be
   * empty for MIME container types that have no message body or when the body
   * data is sent as a separate attachment. An attachment ID is present if the
   * body data is contained in a separate attachment.
   */
  data: string;
  /**
   * Number of bytes for the message part data (encoding notwithstanding).
   */
  size: number;
}
export interface Schema$MessagePartHeader {
  /**
   * The name of the header before the : separator. For example, To.
   */
  name: string;
  /**
   * The value of the header after the : separator. For example,
   * someuser@example.com.
   */
  value: string;
}
export interface Schema$ModifyMessageRequest {
  /**
   * A list of IDs of labels to add to this message.
   */
  addLabelIds: string[];
  /**
   * A list IDs of labels to remove from this message.
   */
  removeLabelIds: string[];
}
export interface Schema$ModifyThreadRequest {
  /**
   * A list of IDs of labels to add to this thread.
   */
  addLabelIds: string[];
  /**
   * A list of IDs of labels to remove from this thread.
   */
  removeLabelIds: string[];
}
/**
 * POP settings for an account.
 */
export interface Schema$PopSettings {
  /**
   * The range of messages which are accessible via POP.
   */
  accessWindow: string;
  /**
   * The action that will be executed on a message after it has been fetched via
   * POP.
   */
  disposition: string;
}
/**
 * Profile for a Gmail user.
 */
export interface Schema$Profile {
  /**
   * The user&#39;s email address.
   */
  emailAddress: string;
  /**
   * The ID of the mailbox&#39;s current history record.
   */
  historyId: string;
  /**
   * The total number of messages in the mailbox.
   */
  messagesTotal: number;
  /**
   * The total number of threads in the mailbox.
   */
  threadsTotal: number;
}
/**
 * Settings associated with a send-as alias, which can be either the primary
 * login address associated with the account or a custom &quot;from&quot;
 * address. Send-as aliases correspond to the &quot;Send Mail As&quot; feature
 * in the web interface.
 */
export interface Schema$SendAs {
  /**
   * A name that appears in the &quot;From:&quot; header for mail sent using
   * this alias. For custom &quot;from&quot; addresses, when this is empty,
   * Gmail will populate the &quot;From:&quot; header with the name that is used
   * for the primary address associated with the account. If the admin has
   * disabled the ability for users to update their name format, requests to
   * update this field for the primary login will silently fail.
   */
  displayName: string;
  /**
   * Whether this address is selected as the default &quot;From:&quot; address
   * in situations such as composing a new message or sending a vacation
   * auto-reply. Every Gmail account has exactly one default send-as address, so
   * the only legal value that clients may write to this field is true. Changing
   * this from false to true for an address will result in this field becoming
   * false for the other previous default address.
   */
  isDefault: boolean;
  /**
   * Whether this address is the primary address used to login to the account.
   * Every Gmail account has exactly one primary address, and it cannot be
   * deleted from the collection of send-as aliases. This field is read-only.
   */
  isPrimary: boolean;
  /**
   * An optional email address that is included in a &quot;Reply-To:&quot;
   * header for mail sent using this alias. If this is empty, Gmail will not
   * generate a &quot;Reply-To:&quot; header.
   */
  replyToAddress: string;
  /**
   * The email address that appears in the &quot;From:&quot; header for mail
   * sent using this alias. This is read-only for all operations except create.
   */
  sendAsEmail: string;
  /**
   * An optional HTML signature that is included in messages composed with this
   * alias in the Gmail web UI.
   */
  signature: string;
  /**
   * An optional SMTP service that will be used as an outbound relay for mail
   * sent using this alias. If this is empty, outbound mail will be sent
   * directly from Gmail&#39;s servers to the destination SMTP service. This
   * setting only applies to custom &quot;from&quot; aliases.
   */
  smtpMsa: Schema$SmtpMsa;
  /**
   * Whether Gmail should  treat this address as an alias for the user&#39;s
   * primary email address. This setting only applies to custom &quot;from&quot;
   * aliases.
   */
  treatAsAlias: boolean;
  /**
   * Indicates whether this address has been verified for use as a send-as
   * alias. Read-only. This setting only applies to custom &quot;from&quot;
   * aliases.
   */
  verificationStatus: string;
}
/**
 * An S/MIME email config.
 */
export interface Schema$SmimeInfo {
  /**
   * Encrypted key password, when key is encrypted.
   */
  encryptedKeyPassword: string;
  /**
   * When the certificate expires (in milliseconds since epoch).
   */
  expiration: string;
  /**
   * The immutable ID for the SmimeInfo.
   */
  id: string;
  /**
   * Whether this SmimeInfo is the default one for this user&#39;s send-as
   * address.
   */
  isDefault: boolean;
  /**
   * The S/MIME certificate issuer&#39;s common name.
   */
  issuerCn: string;
  /**
   * PEM formatted X509 concatenated certificate string (standard base64
   * encoding). Format used for returning key, which includes public key as well
   * as certificate chain (not private key).
   */
  pem: string;
  /**
   * PKCS#12 format containing a single private/public key pair and certificate
   * chain. This format is only accepted from client for creating a new
   * SmimeInfo and is never returned, because the private key is not intended to
   * be exported. PKCS#12 may be encrypted, in which case encryptedKeyPassword
   * should be set appropriately.
   */
  pkcs12: string;
}
/**
 * Configuration for communication with an SMTP service.
 */
export interface Schema$SmtpMsa {
  /**
   * The hostname of the SMTP service. Required.
   */
  host: string;
  /**
   * The password that will be used for authentication with the SMTP service.
   * This is a write-only field that can be specified in requests to create or
   * update SendAs settings; it is never populated in responses.
   */
  password: string;
  /**
   * The port of the SMTP service. Required.
   */
  port: number;
  /**
   * The protocol that will be used to secure communication with the SMTP
   * service. Required.
   */
  securityMode: string;
  /**
   * The username that will be used for authentication with the SMTP service.
   * This is a write-only field that can be specified in requests to create or
   * update SendAs settings; it is never populated in responses.
   */
  username: string;
}
/**
 * A collection of messages representing a conversation.
 */
export interface Schema$Thread {
  /**
   * The ID of the last history record that modified this thread.
   */
  historyId: string;
  /**
   * The unique ID of the thread.
   */
  id: string;
  /**
   * The list of messages in the thread.
   */
  messages: Schema$Message[];
  /**
   * A short part of the message text.
   */
  snippet: string;
}
/**
 * Vacation auto-reply settings for an account. These settings correspond to the
 * &quot;Vacation responder&quot; feature in the web interface.
 */
export interface Schema$VacationSettings {
  /**
   * Flag that controls whether Gmail automatically replies to messages.
   */
  enableAutoReply: boolean;
  /**
   * An optional end time for sending auto-replies (epoch ms). When this is
   * specified, Gmail will automatically reply only to messages that it receives
   * before the end time. If both startTime and endTime are specified, startTime
   * must precede endTime.
   */
  endTime: string;
  /**
   * Response body in HTML format. Gmail will sanitize the HTML before storing
   * it.
   */
  responseBodyHtml: string;
  /**
   * Response body in plain text format.
   */
  responseBodyPlainText: string;
  /**
   * Optional text to prepend to the subject line in vacation responses. In
   * order to enable auto-replies, either the response subject or the response
   * body must be nonempty.
   */
  responseSubject: string;
  /**
   * Flag that determines whether responses are sent to recipients who are not
   * in the user&#39;s list of contacts.
   */
  restrictToContacts: boolean;
  /**
   * Flag that determines whether responses are sent to recipients who are
   * outside of the user&#39;s domain. This feature is only available for G
   * Suite users.
   */
  restrictToDomain: boolean;
  /**
   * An optional start time for sending auto-replies (epoch ms). When this is
   * specified, Gmail will automatically reply only to messages that it receives
   * after the start time. If both startTime and endTime are specified,
   * startTime must precede endTime.
   */
  startTime: string;
}
/**
 * Set up or update a new push notification watch on this user&#39;s mailbox.
 */
export interface Schema$WatchRequest {
  /**
   * Filtering behavior of labelIds list specified.
   */
  labelFilterAction: string;
  /**
   * List of label_ids to restrict notifications about. By default, if
   * unspecified, all changes are pushed out. If specified then dictates which
   * labels are required for a push notification to be generated.
   */
  labelIds: string[];
  /**
   * A fully qualified Google Cloud Pub/Sub API topic name to publish the events
   * to. This topic name **must** already exist in Cloud Pub/Sub and you
   * **must** have already granted gmail &quot;publish&quot; permission on it.
   * For example,
   * &quot;projects/my-project-identifier/topics/my-topic-name&quot; (using the
   * Cloud Pub/Sub &quot;v1&quot; topic naming format).  Note that the
   * &quot;my-project-identifier&quot; portion must exactly match your Google
   * developer project id (the one executing this watch request).
   */
  topicName: string;
}
/**
 * Push notification watch response.
 */
export interface Schema$WatchResponse {
  /**
   * When Gmail will stop sending notifications for mailbox updates (epoch
   * millis). Call watch again before this time to renew the watch.
   */
  expiration: string;
  /**
   * The ID of the mailbox&#39;s current history record.
   */
  historyId: string;
}

export class Resource$Users {
  root: Gmail;
  drafts: Resource$Users$Drafts;
  history: Resource$Users$History;
  labels: Resource$Users$Labels;
  messages: Resource$Users$Messages;
  settings: Resource$Users$Settings;
  threads: Resource$Users$Threads;
  constructor(root: Gmail) {
    this.root = root;
    this.getRoot.bind(this);
    this.drafts = new Resource$Users$Drafts(root);
    this.history = new Resource$Users$History(root);
    this.labels = new Resource$Users$Labels(root);
    this.messages = new Resource$Users$Messages(root);
    this.settings = new Resource$Users$Settings(root);
    this.threads = new Resource$Users$Threads(root);
  }

  getRoot() {
    return this.root;
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
  getProfile(params: any, options?: MethodOptions):
      AxiosPromise<Schema$Profile>;
  getProfile(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Profile>,
      callback?: BodyResponseCallback<Schema$Profile>): void;
  getProfile(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Profile>,
      callback?: BodyResponseCallback<Schema$Profile>):
      void|AxiosPromise<Schema$Profile> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/profile')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userId'],
      pathParams: ['userId'],
      context: this.getRoot()
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
  stop(params: any, options?: MethodOptions): AxiosPromise<void>;
  stop(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  stop(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/stop')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['userId'],
      pathParams: ['userId'],
      context: this.getRoot()
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
  watch(params: any, options?: MethodOptions):
      AxiosPromise<Schema$WatchResponse>;
  watch(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$WatchResponse>,
      callback?: BodyResponseCallback<Schema$WatchResponse>): void;
  watch(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$WatchResponse>,
      callback?: BodyResponseCallback<Schema$WatchResponse>):
      void|AxiosPromise<Schema$WatchResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/watch')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['userId'],
      pathParams: ['userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$WatchResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$WatchResponse>(parameters);
    }
  }
}
export class Resource$Users$Drafts {
  root: Gmail;
  constructor(root: Gmail) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
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
  create(params: any, options?: MethodOptions): AxiosPromise<Schema$Draft>;
  create(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Draft>,
      callback?: BodyResponseCallback<Schema$Draft>): void;
  create(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Draft>,
      callback?: BodyResponseCallback<Schema$Draft>):
      void|AxiosPromise<Schema$Draft> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/drafts')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      mediaUrl: (rootUrl + '/upload/gmail/v1/users/{userId}/drafts')
                    .replace(/([^:]\/)\/+/g, '$1'),
      requiredParams: ['userId'],
      pathParams: ['userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Draft>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Draft>(parameters);
    }
  }


  /**
   * gmail.users.drafts.delete
   * @desc Immediately and permanently deletes the specified draft. Does not
   * simply trash it.
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
  delete(params: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/drafts/{id}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['userId', 'id'],
      pathParams: ['id', 'userId'],
      context: this.getRoot()
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
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$Draft>;
  get(params: any, options: MethodOptions|BodyResponseCallback<Schema$Draft>,
      callback?: BodyResponseCallback<Schema$Draft>): void;
  get(params: any, options?: MethodOptions|BodyResponseCallback<Schema$Draft>,
      callback?: BodyResponseCallback<Schema$Draft>):
      void|AxiosPromise<Schema$Draft> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/drafts/{id}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userId', 'id'],
      pathParams: ['id', 'userId'],
      context: this.getRoot()
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
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ListDraftsResponse>;
  list(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ListDraftsResponse>,
      callback?: BodyResponseCallback<Schema$ListDraftsResponse>): void;
  list(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListDraftsResponse>,
      callback?: BodyResponseCallback<Schema$ListDraftsResponse>):
      void|AxiosPromise<Schema$ListDraftsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/drafts')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userId'],
      pathParams: ['userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListDraftsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListDraftsResponse>(parameters);
    }
  }


  /**
   * gmail.users.drafts.send
   * @desc Sends the specified, existing draft to the recipients in the To, Cc,
   * and Bcc headers.
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
  send(params: any, options?: MethodOptions): AxiosPromise<Schema$Message>;
  send(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Message>,
      callback?: BodyResponseCallback<Schema$Message>): void;
  send(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Message>,
      callback?: BodyResponseCallback<Schema$Message>):
      void|AxiosPromise<Schema$Message> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/drafts/send')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      mediaUrl: (rootUrl + '/upload/gmail/v1/users/{userId}/drafts/send')
                    .replace(/([^:]\/)\/+/g, '$1'),
      requiredParams: ['userId'],
      pathParams: ['userId'],
      context: this.getRoot()
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
  update(params: any, options?: MethodOptions): AxiosPromise<Schema$Draft>;
  update(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Draft>,
      callback?: BodyResponseCallback<Schema$Draft>): void;
  update(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Draft>,
      callback?: BodyResponseCallback<Schema$Draft>):
      void|AxiosPromise<Schema$Draft> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/drafts/{id}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      mediaUrl: (rootUrl + '/upload/gmail/v1/users/{userId}/drafts/{id}')
                    .replace(/([^:]\/)\/+/g, '$1'),
      requiredParams: ['userId', 'id'],
      pathParams: ['id', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Draft>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Draft>(parameters);
    }
  }
}

export class Resource$Users$History {
  root: Gmail;
  constructor(root: Gmail) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * gmail.users.history.list
   * @desc Lists the history of all changes to the given mailbox. History
   * results are returned in chronological order (increasing historyId).
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
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ListHistoryResponse>;
  list(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ListHistoryResponse>,
      callback?: BodyResponseCallback<Schema$ListHistoryResponse>): void;
  list(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListHistoryResponse>,
      callback?: BodyResponseCallback<Schema$ListHistoryResponse>):
      void|AxiosPromise<Schema$ListHistoryResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/history')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userId'],
      pathParams: ['userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListHistoryResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListHistoryResponse>(parameters);
    }
  }
}

export class Resource$Users$Labels {
  root: Gmail;
  constructor(root: Gmail) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
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
  create(params: any, options?: MethodOptions): AxiosPromise<Schema$Label>;
  create(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Label>,
      callback?: BodyResponseCallback<Schema$Label>): void;
  create(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Label>,
      callback?: BodyResponseCallback<Schema$Label>):
      void|AxiosPromise<Schema$Label> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/labels')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['userId'],
      pathParams: ['userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Label>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Label>(parameters);
    }
  }


  /**
   * gmail.users.labels.delete
   * @desc Immediately and permanently deletes the specified label and removes
   * it from any messages and threads that it is applied to.
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
  delete(params: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/labels/{id}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['userId', 'id'],
      pathParams: ['id', 'userId'],
      context: this.getRoot()
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
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$Label>;
  get(params: any, options: MethodOptions|BodyResponseCallback<Schema$Label>,
      callback?: BodyResponseCallback<Schema$Label>): void;
  get(params: any, options?: MethodOptions|BodyResponseCallback<Schema$Label>,
      callback?: BodyResponseCallback<Schema$Label>):
      void|AxiosPromise<Schema$Label> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/labels/{id}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userId', 'id'],
      pathParams: ['id', 'userId'],
      context: this.getRoot()
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
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ListLabelsResponse>;
  list(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ListLabelsResponse>,
      callback?: BodyResponseCallback<Schema$ListLabelsResponse>): void;
  list(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListLabelsResponse>,
      callback?: BodyResponseCallback<Schema$ListLabelsResponse>):
      void|AxiosPromise<Schema$ListLabelsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/labels')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userId'],
      pathParams: ['userId'],
      context: this.getRoot()
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
  patch(params: any, options?: MethodOptions): AxiosPromise<Schema$Label>;
  patch(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Label>,
      callback?: BodyResponseCallback<Schema$Label>): void;
  patch(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Label>,
      callback?: BodyResponseCallback<Schema$Label>):
      void|AxiosPromise<Schema$Label> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/labels/{id}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['userId', 'id'],
      pathParams: ['id', 'userId'],
      context: this.getRoot()
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
  update(params: any, options?: MethodOptions): AxiosPromise<Schema$Label>;
  update(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Label>,
      callback?: BodyResponseCallback<Schema$Label>): void;
  update(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Label>,
      callback?: BodyResponseCallback<Schema$Label>):
      void|AxiosPromise<Schema$Label> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/labels/{id}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['userId', 'id'],
      pathParams: ['id', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Label>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Label>(parameters);
    }
  }
}

export class Resource$Users$Messages {
  root: Gmail;
  attachments: Resource$Users$Messages$Attachments;
  constructor(root: Gmail) {
    this.root = root;
    this.getRoot.bind(this);
    this.attachments = new Resource$Users$Messages$Attachments(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * gmail.users.messages.batchDelete
   * @desc Deletes many messages by message ID. Provides no guarantees that
   * messages were not already deleted or even existed at all.
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
  batchDelete(params: any, options?: MethodOptions): AxiosPromise<void>;
  batchDelete(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  batchDelete(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/messages/batchDelete')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['userId'],
      pathParams: ['userId'],
      context: this.getRoot()
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
  batchModify(params: any, options?: MethodOptions): AxiosPromise<void>;
  batchModify(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  batchModify(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/messages/batchModify')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['userId'],
      pathParams: ['userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * gmail.users.messages.delete
   * @desc Immediately and permanently deletes the specified message. This
   * operation cannot be undone. Prefer messages.trash instead.
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
  delete(params: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/messages/{id}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['userId', 'id'],
      pathParams: ['id', 'userId'],
      context: this.getRoot()
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
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$Message>;
  get(params: any, options: MethodOptions|BodyResponseCallback<Schema$Message>,
      callback?: BodyResponseCallback<Schema$Message>): void;
  get(params: any, options?: MethodOptions|BodyResponseCallback<Schema$Message>,
      callback?: BodyResponseCallback<Schema$Message>):
      void|AxiosPromise<Schema$Message> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/messages/{id}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userId', 'id'],
      pathParams: ['id', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Message>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Message>(parameters);
    }
  }


  /**
   * gmail.users.messages.import
   * @desc Imports a message into only this user's mailbox, with standard email
   * delivery scanning and classification similar to receiving via SMTP. Does
   * not send a message.
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
import(params: any, options?: MethodOptions): AxiosPromise<Schema$Message>;
import(params: any, options: MethodOptions|BodyResponseCallback<Schema$Message>, callback?: BodyResponseCallback<Schema$Message>): void;
import(params: any, options?: MethodOptions|BodyResponseCallback<Schema$Message>, callback?: BodyResponseCallback<Schema$Message>): void|AxiosPromise<Schema$Message> {if(typeof options === 'function') {
    callback = options;
    options = {};
  } if(typeof params === 'function') {
    callback = params;
    params = {};
  } options = options || {}; const rootUrl = options.rootUrl || 'https://www.googleapis.com/'; const parameters = {options: Object.assign({url: (rootUrl + '/gmail/v1/users/{userId}/messages/import').replace(/([^:]\/)\/+/g, '$1'), method: 'POST'}, options), params, mediaUrl: (rootUrl + '/upload/gmail/v1/users/{userId}/messages/import').replace(/([^:]\/)\/+/g, '$1'), requiredParams: ['userId'], pathParams: ['userId'], context: this.getRoot()}; if(callback) {
    createAPIRequest<Schema$Message>(parameters, callback);
  } else { return createAPIRequest<Schema$Message>(parameters);
  }}


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
  insert(params: any, options?: MethodOptions): AxiosPromise<Schema$Message>;
  insert(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Message>,
      callback?: BodyResponseCallback<Schema$Message>): void;
  insert(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Message>,
      callback?: BodyResponseCallback<Schema$Message>):
      void|AxiosPromise<Schema$Message> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/messages')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      mediaUrl: (rootUrl + '/upload/gmail/v1/users/{userId}/messages')
                    .replace(/([^:]\/)\/+/g, '$1'),
      requiredParams: ['userId'],
      pathParams: ['userId'],
      context: this.getRoot()
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
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ListMessagesResponse>;
  list(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ListMessagesResponse>,
      callback?: BodyResponseCallback<Schema$ListMessagesResponse>): void;
  list(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListMessagesResponse>,
      callback?: BodyResponseCallback<Schema$ListMessagesResponse>):
      void|AxiosPromise<Schema$ListMessagesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/messages')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userId'],
      pathParams: ['userId'],
      context: this.getRoot()
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
  modify(params: any, options?: MethodOptions): AxiosPromise<Schema$Message>;
  modify(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Message>,
      callback?: BodyResponseCallback<Schema$Message>): void;
  modify(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Message>,
      callback?: BodyResponseCallback<Schema$Message>):
      void|AxiosPromise<Schema$Message> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/messages/{id}/modify')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['userId', 'id'],
      pathParams: ['id', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Message>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Message>(parameters);
    }
  }


  /**
   * gmail.users.messages.send
   * @desc Sends the specified message to the recipients in the To, Cc, and Bcc
   * headers.
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
  send(params: any, options?: MethodOptions): AxiosPromise<Schema$Message>;
  send(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Message>,
      callback?: BodyResponseCallback<Schema$Message>): void;
  send(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Message>,
      callback?: BodyResponseCallback<Schema$Message>):
      void|AxiosPromise<Schema$Message> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/messages/send')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      mediaUrl: (rootUrl + '/upload/gmail/v1/users/{userId}/messages/send')
                    .replace(/([^:]\/)\/+/g, '$1'),
      requiredParams: ['userId'],
      pathParams: ['userId'],
      context: this.getRoot()
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
  trash(params: any, options?: MethodOptions): AxiosPromise<Schema$Message>;
  trash(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Message>,
      callback?: BodyResponseCallback<Schema$Message>): void;
  trash(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Message>,
      callback?: BodyResponseCallback<Schema$Message>):
      void|AxiosPromise<Schema$Message> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/messages/{id}/trash')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['userId', 'id'],
      pathParams: ['id', 'userId'],
      context: this.getRoot()
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
  untrash(params: any, options?: MethodOptions): AxiosPromise<Schema$Message>;
  untrash(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Message>,
      callback?: BodyResponseCallback<Schema$Message>): void;
  untrash(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Message>,
      callback?: BodyResponseCallback<Schema$Message>):
      void|AxiosPromise<Schema$Message> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/messages/{id}/untrash')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['userId', 'id'],
      pathParams: ['id', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Message>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Message>(parameters);
    }
  }
}
export class Resource$Users$Messages$Attachments {
  root: Gmail;
  constructor(root: Gmail) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
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
  get(params: any,
      options?: MethodOptions): AxiosPromise<Schema$MessagePartBody>;
  get(params: any,
      options: MethodOptions|BodyResponseCallback<Schema$MessagePartBody>,
      callback?: BodyResponseCallback<Schema$MessagePartBody>): void;
  get(params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$MessagePartBody>,
      callback?: BodyResponseCallback<Schema$MessagePartBody>):
      void|AxiosPromise<Schema$MessagePartBody> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/gmail/v1/users/{userId}/messages/{messageId}/attachments/{id}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userId', 'messageId', 'id'],
      pathParams: ['id', 'messageId', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$MessagePartBody>(parameters, callback);
    } else {
      return createAPIRequest<Schema$MessagePartBody>(parameters);
    }
  }
}


export class Resource$Users$Settings {
  root: Gmail;
  filters: Resource$Users$Settings$Filters;
  forwardingAddresses: Resource$Users$Settings$Forwardingaddresses;
  sendAs: Resource$Users$Settings$Sendas;
  constructor(root: Gmail) {
    this.root = root;
    this.getRoot.bind(this);
    this.filters = new Resource$Users$Settings$Filters(root);
    this.forwardingAddresses =
        new Resource$Users$Settings$Forwardingaddresses(root);
    this.sendAs = new Resource$Users$Settings$Sendas(root);
  }

  getRoot() {
    return this.root;
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
  getAutoForwarding(params: any, options?: MethodOptions):
      AxiosPromise<Schema$AutoForwarding>;
  getAutoForwarding(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$AutoForwarding>,
      callback?: BodyResponseCallback<Schema$AutoForwarding>): void;
  getAutoForwarding(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AutoForwarding>,
      callback?: BodyResponseCallback<Schema$AutoForwarding>):
      void|AxiosPromise<Schema$AutoForwarding> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/settings/autoForwarding')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userId'],
      pathParams: ['userId'],
      context: this.getRoot()
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
  getImap(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ImapSettings>;
  getImap(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ImapSettings>,
      callback?: BodyResponseCallback<Schema$ImapSettings>): void;
  getImap(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ImapSettings>,
      callback?: BodyResponseCallback<Schema$ImapSettings>):
      void|AxiosPromise<Schema$ImapSettings> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/settings/imap')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userId'],
      pathParams: ['userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ImapSettings>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ImapSettings>(parameters);
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
  getPop(params: any, options?: MethodOptions):
      AxiosPromise<Schema$PopSettings>;
  getPop(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$PopSettings>,
      callback?: BodyResponseCallback<Schema$PopSettings>): void;
  getPop(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PopSettings>,
      callback?: BodyResponseCallback<Schema$PopSettings>):
      void|AxiosPromise<Schema$PopSettings> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/settings/pop')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userId'],
      pathParams: ['userId'],
      context: this.getRoot()
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
  getVacation(params: any, options?: MethodOptions):
      AxiosPromise<Schema$VacationSettings>;
  getVacation(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$VacationSettings>,
      callback?: BodyResponseCallback<Schema$VacationSettings>): void;
  getVacation(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$VacationSettings>,
      callback?: BodyResponseCallback<Schema$VacationSettings>):
      void|AxiosPromise<Schema$VacationSettings> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/settings/vacation')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userId'],
      pathParams: ['userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$VacationSettings>(parameters, callback);
    } else {
      return createAPIRequest<Schema$VacationSettings>(parameters);
    }
  }


  /**
   * gmail.users.settings.updateAutoForwarding
   * @desc Updates the auto-forwarding setting for the specified account. A
   * verified forwarding address must be specified when auto-forwarding is
   * enabled.  This method is only available to service account clients that
   * have been delegated domain-wide authority.
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
  updateAutoForwarding(params: any, options?: MethodOptions):
      AxiosPromise<Schema$AutoForwarding>;
  updateAutoForwarding(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$AutoForwarding>,
      callback?: BodyResponseCallback<Schema$AutoForwarding>): void;
  updateAutoForwarding(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AutoForwarding>,
      callback?: BodyResponseCallback<Schema$AutoForwarding>):
      void|AxiosPromise<Schema$AutoForwarding> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/settings/autoForwarding')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['userId'],
      pathParams: ['userId'],
      context: this.getRoot()
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
  updateImap(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ImapSettings>;
  updateImap(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ImapSettings>,
      callback?: BodyResponseCallback<Schema$ImapSettings>): void;
  updateImap(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ImapSettings>,
      callback?: BodyResponseCallback<Schema$ImapSettings>):
      void|AxiosPromise<Schema$ImapSettings> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/settings/imap')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['userId'],
      pathParams: ['userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ImapSettings>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ImapSettings>(parameters);
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
  updatePop(params: any, options?: MethodOptions):
      AxiosPromise<Schema$PopSettings>;
  updatePop(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$PopSettings>,
      callback?: BodyResponseCallback<Schema$PopSettings>): void;
  updatePop(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PopSettings>,
      callback?: BodyResponseCallback<Schema$PopSettings>):
      void|AxiosPromise<Schema$PopSettings> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/settings/pop')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['userId'],
      pathParams: ['userId'],
      context: this.getRoot()
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
  updateVacation(params: any, options?: MethodOptions):
      AxiosPromise<Schema$VacationSettings>;
  updateVacation(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$VacationSettings>,
      callback?: BodyResponseCallback<Schema$VacationSettings>): void;
  updateVacation(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$VacationSettings>,
      callback?: BodyResponseCallback<Schema$VacationSettings>):
      void|AxiosPromise<Schema$VacationSettings> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/settings/vacation')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['userId'],
      pathParams: ['userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$VacationSettings>(parameters, callback);
    } else {
      return createAPIRequest<Schema$VacationSettings>(parameters);
    }
  }
}
export class Resource$Users$Settings$Filters {
  root: Gmail;
  constructor(root: Gmail) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
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
  create(params: any, options?: MethodOptions): AxiosPromise<Schema$Filter>;
  create(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Filter>,
      callback?: BodyResponseCallback<Schema$Filter>): void;
  create(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Filter>,
      callback?: BodyResponseCallback<Schema$Filter>):
      void|AxiosPromise<Schema$Filter> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/settings/filters')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['userId'],
      pathParams: ['userId'],
      context: this.getRoot()
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
  delete(params: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/settings/filters/{id}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['userId', 'id'],
      pathParams: ['id', 'userId'],
      context: this.getRoot()
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
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$Filter>;
  get(params: any, options: MethodOptions|BodyResponseCallback<Schema$Filter>,
      callback?: BodyResponseCallback<Schema$Filter>): void;
  get(params: any, options?: MethodOptions|BodyResponseCallback<Schema$Filter>,
      callback?: BodyResponseCallback<Schema$Filter>):
      void|AxiosPromise<Schema$Filter> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/settings/filters/{id}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userId', 'id'],
      pathParams: ['id', 'userId'],
      context: this.getRoot()
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
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ListFiltersResponse>;
  list(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ListFiltersResponse>,
      callback?: BodyResponseCallback<Schema$ListFiltersResponse>): void;
  list(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListFiltersResponse>,
      callback?: BodyResponseCallback<Schema$ListFiltersResponse>):
      void|AxiosPromise<Schema$ListFiltersResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/settings/filters')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userId'],
      pathParams: ['userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListFiltersResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListFiltersResponse>(parameters);
    }
  }
}

export class Resource$Users$Settings$Forwardingaddresses {
  root: Gmail;
  constructor(root: Gmail) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * gmail.users.settings.forwardingAddresses.create
   * @desc Creates a forwarding address. If ownership verification is required,
   * a message will be sent to the recipient and the resource's verification
   * status will be set to pending; otherwise, the resource will be created with
   * verification status set to accepted.  This method is only available to
   * service account clients that have been delegated domain-wide authority.
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
  create(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ForwardingAddress>;
  create(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ForwardingAddress>,
      callback?: BodyResponseCallback<Schema$ForwardingAddress>): void;
  create(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ForwardingAddress>,
      callback?: BodyResponseCallback<Schema$ForwardingAddress>):
      void|AxiosPromise<Schema$ForwardingAddress> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/gmail/v1/users/{userId}/settings/forwardingAddresses')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['userId'],
      pathParams: ['userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ForwardingAddress>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ForwardingAddress>(parameters);
    }
  }


  /**
   * gmail.users.settings.forwardingAddresses.delete
   * @desc Deletes the specified forwarding address and revokes any verification
   * that may have been required.  This method is only available to service
   * account clients that have been delegated domain-wide authority.
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
  delete(params: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/gmail/v1/users/{userId}/settings/forwardingAddresses/{forwardingEmail}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['userId', 'forwardingEmail'],
      pathParams: ['forwardingEmail', 'userId'],
      context: this.getRoot()
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
  get(params: any,
      options?: MethodOptions): AxiosPromise<Schema$ForwardingAddress>;
  get(params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ForwardingAddress>,
      callback?: BodyResponseCallback<Schema$ForwardingAddress>): void;
  get(params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ForwardingAddress>,
      callback?: BodyResponseCallback<Schema$ForwardingAddress>):
      void|AxiosPromise<Schema$ForwardingAddress> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/gmail/v1/users/{userId}/settings/forwardingAddresses/{forwardingEmail}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userId', 'forwardingEmail'],
      pathParams: ['forwardingEmail', 'userId'],
      context: this.getRoot()
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
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ListForwardingAddressesResponse>;
  list(
      params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$ListForwardingAddressesResponse>,
      callback?: BodyResponseCallback<Schema$ListForwardingAddressesResponse>):
      void;
  list(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListForwardingAddressesResponse>,
      callback?: BodyResponseCallback<Schema$ListForwardingAddressesResponse>):
      void|AxiosPromise<Schema$ListForwardingAddressesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/gmail/v1/users/{userId}/settings/forwardingAddresses')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userId'],
      pathParams: ['userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListForwardingAddressesResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ListForwardingAddressesResponse>(
          parameters);
    }
  }
}

export class Resource$Users$Settings$Sendas {
  root: Gmail;
  smimeInfo: Resource$Users$Settings$Sendas$Smimeinfo;
  constructor(root: Gmail) {
    this.root = root;
    this.getRoot.bind(this);
    this.smimeInfo = new Resource$Users$Settings$Sendas$Smimeinfo(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * gmail.users.settings.sendAs.create
   * @desc Creates a custom "from" send-as alias. If an SMTP MSA is specified,
   * Gmail will attempt to connect to the SMTP service to validate the
   * configuration before creating the alias. If ownership verification is
   * required for the alias, a message will be sent to the email address and the
   * resource's verification status will be set to pending; otherwise, the
   * resource will be created with verification status set to accepted. If a
   * signature is provided, Gmail will sanitize the HTML before saving it with
   * the alias.  This method is only available to service account clients that
   * have been delegated domain-wide authority.
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
  create(params: any, options?: MethodOptions): AxiosPromise<Schema$SendAs>;
  create(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$SendAs>,
      callback?: BodyResponseCallback<Schema$SendAs>): void;
  create(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$SendAs>,
      callback?: BodyResponseCallback<Schema$SendAs>):
      void|AxiosPromise<Schema$SendAs> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/settings/sendAs')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['userId'],
      pathParams: ['userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$SendAs>(parameters, callback);
    } else {
      return createAPIRequest<Schema$SendAs>(parameters);
    }
  }


  /**
   * gmail.users.settings.sendAs.delete
   * @desc Deletes the specified send-as alias. Revokes any verification that
   * may have been required for using it.  This method is only available to
   * service account clients that have been delegated domain-wide authority.
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
  delete(params: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['userId', 'sendAsEmail'],
      pathParams: ['sendAsEmail', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * gmail.users.settings.sendAs.get
   * @desc Gets the specified send-as alias. Fails with an HTTP 404 error if the
   * specified address is not a member of the collection.
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
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$SendAs>;
  get(params: any, options: MethodOptions|BodyResponseCallback<Schema$SendAs>,
      callback?: BodyResponseCallback<Schema$SendAs>): void;
  get(params: any, options?: MethodOptions|BodyResponseCallback<Schema$SendAs>,
      callback?: BodyResponseCallback<Schema$SendAs>):
      void|AxiosPromise<Schema$SendAs> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userId', 'sendAsEmail'],
      pathParams: ['sendAsEmail', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$SendAs>(parameters, callback);
    } else {
      return createAPIRequest<Schema$SendAs>(parameters);
    }
  }


  /**
   * gmail.users.settings.sendAs.list
   * @desc Lists the send-as aliases for the specified account. The result
   * includes the primary send-as address associated with the account as well as
   * any custom "from" aliases.
   * @alias gmail.users.settings.sendAs.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.userId User's email address. The special value "me" can be used to indicate the authenticated user.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ListSendAsResponse>;
  list(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ListSendAsResponse>,
      callback?: BodyResponseCallback<Schema$ListSendAsResponse>): void;
  list(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListSendAsResponse>,
      callback?: BodyResponseCallback<Schema$ListSendAsResponse>):
      void|AxiosPromise<Schema$ListSendAsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/settings/sendAs')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userId'],
      pathParams: ['userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListSendAsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListSendAsResponse>(parameters);
    }
  }


  /**
   * gmail.users.settings.sendAs.patch
   * @desc Updates a send-as alias. If a signature is provided, Gmail will
   * sanitize the HTML before saving it with the alias.  Addresses other than
   * the primary address for the account can only be updated by service account
   * clients that have been delegated domain-wide authority. This method
   * supports patch semantics.
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
  patch(params: any, options?: MethodOptions): AxiosPromise<Schema$SendAs>;
  patch(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$SendAs>,
      callback?: BodyResponseCallback<Schema$SendAs>): void;
  patch(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$SendAs>,
      callback?: BodyResponseCallback<Schema$SendAs>):
      void|AxiosPromise<Schema$SendAs> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['userId', 'sendAsEmail'],
      pathParams: ['sendAsEmail', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$SendAs>(parameters, callback);
    } else {
      return createAPIRequest<Schema$SendAs>(parameters);
    }
  }


  /**
   * gmail.users.settings.sendAs.update
   * @desc Updates a send-as alias. If a signature is provided, Gmail will
   * sanitize the HTML before saving it with the alias.  Addresses other than
   * the primary address for the account can only be updated by service account
   * clients that have been delegated domain-wide authority.
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
  update(params: any, options?: MethodOptions): AxiosPromise<Schema$SendAs>;
  update(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$SendAs>,
      callback?: BodyResponseCallback<Schema$SendAs>): void;
  update(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$SendAs>,
      callback?: BodyResponseCallback<Schema$SendAs>):
      void|AxiosPromise<Schema$SendAs> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['userId', 'sendAsEmail'],
      pathParams: ['sendAsEmail', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$SendAs>(parameters, callback);
    } else {
      return createAPIRequest<Schema$SendAs>(parameters);
    }
  }


  /**
   * gmail.users.settings.sendAs.verify
   * @desc Sends a verification email to the specified send-as alias address.
   * The verification status must be pending.  This method is only available to
   * service account clients that have been delegated domain-wide authority.
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
  verify(params: any, options?: MethodOptions): AxiosPromise<void>;
  verify(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  verify(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/verify')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['userId', 'sendAsEmail'],
      pathParams: ['sendAsEmail', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }
}
export class Resource$Users$Settings$Sendas$Smimeinfo {
  root: Gmail;
  constructor(root: Gmail) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
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
  delete(params: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['userId', 'sendAsEmail', 'id'],
      pathParams: ['id', 'sendAsEmail', 'userId'],
      context: this.getRoot()
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
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$SmimeInfo>;
  get(params: any,
      options: MethodOptions|BodyResponseCallback<Schema$SmimeInfo>,
      callback?: BodyResponseCallback<Schema$SmimeInfo>): void;
  get(params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$SmimeInfo>,
      callback?: BodyResponseCallback<Schema$SmimeInfo>):
      void|AxiosPromise<Schema$SmimeInfo> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userId', 'sendAsEmail', 'id'],
      pathParams: ['id', 'sendAsEmail', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$SmimeInfo>(parameters, callback);
    } else {
      return createAPIRequest<Schema$SmimeInfo>(parameters);
    }
  }


  /**
   * gmail.users.settings.sendAs.smimeInfo.insert
   * @desc Insert (upload) the given S/MIME config for the specified send-as
   * alias. Note that pkcs12 format is required for the key.
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
  insert(params: any, options?: MethodOptions): AxiosPromise<Schema$SmimeInfo>;
  insert(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$SmimeInfo>,
      callback?: BodyResponseCallback<Schema$SmimeInfo>): void;
  insert(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$SmimeInfo>,
      callback?: BodyResponseCallback<Schema$SmimeInfo>):
      void|AxiosPromise<Schema$SmimeInfo> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['userId', 'sendAsEmail'],
      pathParams: ['sendAsEmail', 'userId'],
      context: this.getRoot()
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
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ListSmimeInfoResponse>;
  list(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ListSmimeInfoResponse>,
      callback?: BodyResponseCallback<Schema$ListSmimeInfoResponse>): void;
  list(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListSmimeInfoResponse>,
      callback?: BodyResponseCallback<Schema$ListSmimeInfoResponse>):
      void|AxiosPromise<Schema$ListSmimeInfoResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userId', 'sendAsEmail'],
      pathParams: ['sendAsEmail', 'userId'],
      context: this.getRoot()
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
  setDefault(params: any, options?: MethodOptions): AxiosPromise<void>;
  setDefault(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  setDefault(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}/setDefault')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['userId', 'sendAsEmail', 'id'],
      pathParams: ['id', 'sendAsEmail', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }
}



export class Resource$Users$Threads {
  root: Gmail;
  constructor(root: Gmail) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * gmail.users.threads.delete
   * @desc Immediately and permanently deletes the specified thread. This
   * operation cannot be undone. Prefer threads.trash instead.
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
  delete(params: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/threads/{id}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['userId', 'id'],
      pathParams: ['id', 'userId'],
      context: this.getRoot()
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
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$Thread>;
  get(params: any, options: MethodOptions|BodyResponseCallback<Schema$Thread>,
      callback?: BodyResponseCallback<Schema$Thread>): void;
  get(params: any, options?: MethodOptions|BodyResponseCallback<Schema$Thread>,
      callback?: BodyResponseCallback<Schema$Thread>):
      void|AxiosPromise<Schema$Thread> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/threads/{id}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userId', 'id'],
      pathParams: ['id', 'userId'],
      context: this.getRoot()
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
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ListThreadsResponse>;
  list(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ListThreadsResponse>,
      callback?: BodyResponseCallback<Schema$ListThreadsResponse>): void;
  list(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListThreadsResponse>,
      callback?: BodyResponseCallback<Schema$ListThreadsResponse>):
      void|AxiosPromise<Schema$ListThreadsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/threads')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['userId'],
      pathParams: ['userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListThreadsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListThreadsResponse>(parameters);
    }
  }


  /**
   * gmail.users.threads.modify
   * @desc Modifies the labels applied to the thread. This applies to all
   * messages in the thread.
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
  modify(params: any, options?: MethodOptions): AxiosPromise<Schema$Thread>;
  modify(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Thread>,
      callback?: BodyResponseCallback<Schema$Thread>): void;
  modify(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Thread>,
      callback?: BodyResponseCallback<Schema$Thread>):
      void|AxiosPromise<Schema$Thread> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/threads/{id}/modify')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['userId', 'id'],
      pathParams: ['id', 'userId'],
      context: this.getRoot()
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
  trash(params: any, options?: MethodOptions): AxiosPromise<Schema$Thread>;
  trash(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Thread>,
      callback?: BodyResponseCallback<Schema$Thread>): void;
  trash(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Thread>,
      callback?: BodyResponseCallback<Schema$Thread>):
      void|AxiosPromise<Schema$Thread> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/threads/{id}/trash')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['userId', 'id'],
      pathParams: ['id', 'userId'],
      context: this.getRoot()
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
  untrash(params: any, options?: MethodOptions): AxiosPromise<Schema$Thread>;
  untrash(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Thread>,
      callback?: BodyResponseCallback<Schema$Thread>): void;
  untrash(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Thread>,
      callback?: BodyResponseCallback<Schema$Thread>):
      void|AxiosPromise<Schema$Thread> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/gmail/v1/users/{userId}/threads/{id}/untrash')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['userId', 'id'],
      pathParams: ['id', 'userId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Thread>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Thread>(parameters);
    }
  }
}
