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

export namespace alertcenter_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
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
   * G Suite Alert Center API
   *
   * Manages alerts on issues affecting your domain.
   *
   * @example
   * const {google} = require('googleapis');
   * const alertcenter = google.alertcenter('v1beta1');
   *
   * @namespace alertcenter
   * @type {Function}
   * @version v1beta1
   * @variation v1beta1
   * @param {object=} options Options for Alertcenter
   */
  export class Alertcenter {
    context: APIRequestContext;
    alerts: Resource$Alerts;
    v1beta1: Resource$V1beta1;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.alerts = new Resource$Alerts(this.context);
      this.v1beta1 = new Resource$V1beta1(this.context);
    }
  }

  /**
   * Alerts for user account warning events.
   */
  export interface Schema$AccountWarning {
    /**
     * Required. The email of the user that this event belongs to.
     */
    email?: string | null;
    /**
     * Optional. Details of the login action associated with the warning event. This is only available for:  * Suspicious login * Suspicious login (less secure app) * Suspicious programmatic login * User suspended (suspicious activity)
     */
    loginDetails?: Schema$LoginDetails;
  }
  /**
   * Alerts from G Suite Security Center rules service configured by admin.
   */
  export interface Schema$ActivityRule {
    /**
     * List of action names associated with the rule threshold.
     */
    actionNames?: string[] | null;
    /**
     * Rule create timestamp.
     */
    createTime?: string | null;
    /**
     * Description of the rule.
     */
    description?: string | null;
    /**
     * Alert display name.
     */
    displayName?: string | null;
    /**
     * Rule name.
     */
    name?: string | null;
    /**
     * Query that is used to get the data from the associated source.
     */
    query?: string | null;
    /**
     * List of alert ids superseded by this alert. It is used to indicate that this alert is essentially extension of superseded alerts and we found the relationship after creating these alerts.
     */
    supersededAlerts?: string[] | null;
    /**
     * Alert id superseding this alert. It is used to indicate that superseding alert is essentially extension of this alert and we found the relationship after creating both alerts.
     */
    supersedingAlert?: string | null;
    /**
     * Alert threshold is for example “COUNT &gt; 5”.
     */
    threshold?: string | null;
    /**
     * The trigger sources for this rule.  * GMAIL_EVENTS * DEVICE_EVENTS * USER_EVENTS
     */
    triggerSource?: string | null;
    /**
     * The timestamp of the last update to the rule.
     */
    updateTime?: string | null;
    /**
     * Rule window size. Possible values are 1 hour or 24 hours.
     */
    windowSize?: string | null;
  }
  /**
   * An alert affecting a customer.
   */
  export interface Schema$Alert {
    /**
     * Output only. The unique identifier for the alert.
     */
    alertId?: string | null;
    /**
     * Output only. The time this alert was created.
     */
    createTime?: string | null;
    /**
     * Output only. The unique identifier of the Google account of the customer.
     */
    customerId?: string | null;
    /**
     * Optional. The data associated with this alert, for example google.apps.alertcenter.type.DeviceCompromised.
     */
    data?: {[key: string]: any} | null;
    /**
     * Output only. `True` if this alert is marked for deletion.
     */
    deleted?: boolean | null;
    /**
     * Optional. The time the event that caused this alert ceased being active. If provided, the end time must not be earlier than the start time. If not provided, it indicates an ongoing alert.
     */
    endTime?: string | null;
    /**
     * Optional. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of an alert from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform alert updates in order to avoid race conditions: An `etag` is returned in the response which contains alerts, and systems are expected to put that etag in the request to update alert to ensure that their change will be applied to the same version of the alert.  If no `etag` is provided in the call to update alert, then the existing alert is overwritten blindly.
     */
    etag?: string | null;
    /**
     * Output only. The metadata associated with this alert.
     */
    metadata?: Schema$AlertMetadata;
    /**
     * Output only. An optional [Security Investigation Tool](https://support.google.com/a/answer/7575955) query for this alert.
     */
    securityInvestigationToolLink?: string | null;
    /**
     * Required. A unique identifier for the system that reported the alert. This is output only after alert is created.  Supported sources are any of the following:  * Google Operations * Mobile device management * Gmail phishing * Domain wide takeout * State sponsored attack * Google identity
     */
    source?: string | null;
    /**
     * Required. The time the event that caused this alert was started or detected.
     */
    startTime?: string | null;
    /**
     * Required. The type of the alert. This is output only after alert is created. For a list of available alert types see [G Suite Alert types](/admin-sdk/alertcenter/reference/alert-types).
     */
    type?: string | null;
    /**
     * Output only. The time this alert was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * A customer feedback about an alert.
   */
  export interface Schema$AlertFeedback {
    /**
     * Output only. The alert identifier.
     */
    alertId?: string | null;
    /**
     * Output only. The time this feedback was created.
     */
    createTime?: string | null;
    /**
     * Output only. The unique identifier of the Google account of the customer.
     */
    customerId?: string | null;
    /**
     * Output only. The email of the user that provided the feedback.
     */
    email?: string | null;
    /**
     * Output only. The unique identifier for the feedback.
     */
    feedbackId?: string | null;
    /**
     * Required. The type of the feedback.
     */
    type?: string | null;
  }
  /**
   * An alert metadata.
   */
  export interface Schema$AlertMetadata {
    /**
     * Output only. The alert identifier.
     */
    alertId?: string | null;
    /**
     * The email address of the user assigned to the alert.
     */
    assignee?: string | null;
    /**
     * Output only. The unique identifier of the Google account of the customer.
     */
    customerId?: string | null;
    /**
     * Optional. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of an alert metadata from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform metatdata updates in order to avoid race conditions: An `etag` is returned in the response which contains alert metadata, and systems are expected to put that etag in the request to update alert metadata to ensure that their change will be applied to the same version of the alert metadata.  If no `etag` is provided in the call to update alert metadata, then the existing alert metadata is overwritten blindly.
     */
    etag?: string | null;
    /**
     * The severity value of the alert. Alert Center will set this field at alert creation time, default&#39;s to an empty string when it could not be determined. The supported values for update actions on this field are the following:  * HIGH * MEDIUM * LOW
     */
    severity?: string | null;
    /**
     * The current status of the alert. The supported values are the following:  * NOT_STARTED * IN_PROGRESS * CLOSED
     */
    status?: string | null;
    /**
     * Output only. The time this metadata was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Alerts from App Maker to notify admins to set up default SQL instance.
   */
  export interface Schema$AppMakerSqlSetupNotification {
    /**
     * List of applications with requests for default SQL set up.
     */
    requestInfo?: Schema$RequestInfo[];
  }
  /**
   * Attachment with application-specific information about an alert.
   */
  export interface Schema$Attachment {
    /**
     * A CSV file attachment.
     */
    csv?: Schema$Csv;
  }
  /**
   * Alert for setting the domain or IP that malicious email comes from as whitelisted domain or IP in Gmail advanced settings.
   */
  export interface Schema$BadWhitelist {
    /**
     * The domain ID.
     */
    domainId?: Schema$DomainId;
    /**
     * The entity whose actions triggered a Gmail phishing alert.
     */
    maliciousEntity?: Schema$MaliciousEntity;
    /**
     * The list of messages contained by this alert.
     */
    messages?: Schema$GmailMessageInfo[];
    /**
     * The source IP address of the malicious email, for example, `127.0.0.1`.
     */
    sourceIp?: string | null;
  }
  /**
   * A request to perform batch delete on alerts.
   */
  export interface Schema$BatchDeleteAlertsRequest {
    /**
     * Required. list of alert ids.
     */
    alertId?: string[] | null;
    /**
     * Optional. The unique identifier of the G Suite organization account of the customer the alerts are associated with.
     */
    customerId?: string | null;
  }
  /**
   * Response to batch delete operation on alerts.
   */
  export interface Schema$BatchDeleteAlertsResponse {
    /**
     * The status details for each failed alert_id.
     */
    failedAlertStatus?: {[key: string]: Schema$Status} | null;
    /**
     * The successful list of alert ids.
     */
    successAlertIds?: string[] | null;
  }
  /**
   * A request to perform batch undelete on alerts.
   */
  export interface Schema$BatchUndeleteAlertsRequest {
    /**
     * Required. list of alert ids.
     */
    alertId?: string[] | null;
    /**
     * Optional. The unique identifier of the G Suite organization account of the customer the alerts are associated with.
     */
    customerId?: string | null;
  }
  /**
   * Response to batch undelete operation on alerts.
   */
  export interface Schema$BatchUndeleteAlertsResponse {
    /**
     * The status details for each failed alert_id.
     */
    failedAlertStatus?: {[key: string]: Schema$Status} | null;
    /**
     * The successful list of alert ids.
     */
    successAlertIds?: string[] | null;
  }
  /**
   * A reference to a Cloud Pubsub topic.  To register for notifications, the owner of the topic must grant `alerts-api-push-notifications@system.gserviceaccount.com` the  `projects.topics.publish` permission.
   */
  export interface Schema$CloudPubsubTopic {
    /**
     * Optional. The format of the payload that would be sent. If not specified the format will be JSON.
     */
    payloadFormat?: string | null;
    /**
     * The `name` field of a Cloud Pubsub [Topic] (https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics#Topic).
     */
    topicName?: string | null;
  }
  /**
   * A representation of a CSV file attachment, as a list of column headers and a list of data rows.
   */
  export interface Schema$Csv {
    /**
     * The list of data rows in a CSV file, as string arrays rather than as a single comma-separated string.
     */
    dataRows?: Schema$CsvRow[];
    /**
     * The list of headers for data columns in a CSV file.
     */
    headers?: string[] | null;
  }
  /**
   * A representation of a single data row in a CSV file.
   */
  export interface Schema$CsvRow {
    /**
     * The data entries in a CSV file row, as a string array rather than a single comma-separated string.
     */
    entries?: string[] | null;
  }
  /**
   * A mobile device compromised alert. Derived from audit logs.
   */
  export interface Schema$DeviceCompromised {
    /**
     * The email of the user this alert was created for.
     */
    email?: string | null;
    /**
     * Required. The list of security events.
     */
    events?: Schema$DeviceCompromisedSecurityDetail[];
  }
  /**
   * Detailed information of a single MDM device compromised event.
   */
  export interface Schema$DeviceCompromisedSecurityDetail {
    /**
     * The device compromised state. Possible values are &quot;`Compromised`&quot; or &quot;`Not Compromised`&quot;.
     */
    deviceCompromisedState?: string | null;
    /**
     * Required. The device ID.
     */
    deviceId?: string | null;
    /**
     * The model of the device.
     */
    deviceModel?: string | null;
    /**
     * The type of the device.
     */
    deviceType?: string | null;
    /**
     * Required for iOS, empty for others.
     */
    iosVendorId?: string | null;
    /**
     * The device resource ID.
     */
    resourceId?: string | null;
    /**
     * The serial number of the device.
     */
    serialNumber?: string | null;
  }
  /**
   * Domain ID of Gmail phishing alerts.
   */
  export interface Schema$DomainId {
    /**
     * The primary domain for the customer.
     */
    customerPrimaryDomain?: string | null;
  }
  /**
   * A takeout operation for the entire domain was initiated by an admin. Derived from audit logs.
   */
  export interface Schema$DomainWideTakeoutInitiated {
    /**
     * The email of the admin who initiated the takeout.
     */
    email?: string | null;
    /**
     * The takeout request ID.
     */
    takeoutRequestId?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * Details of a message in phishing spike alert.
   */
  export interface Schema$GmailMessageInfo {
    /**
     * The `SHA256` hash of email&#39;s attachment and all MIME parts.
     */
    attachmentsSha256Hash?: string[] | null;
    /**
     * The date the malicious email was sent.
     */
    date?: string | null;
    /**
     * The hash of the message body text.
     */
    md5HashMessageBody?: string | null;
    /**
     * The MD5 Hash of email&#39;s subject (only available for reported emails).
     */
    md5HashSubject?: string | null;
    /**
     * The snippet of the message body text (only available for reported emails).
     */
    messageBodySnippet?: string | null;
    /**
     * The message ID.
     */
    messageId?: string | null;
    /**
     * The recipient of this email.
     */
    recipient?: string | null;
    /**
     * The email subject text (only available for reported emails).
     */
    subjectText?: string | null;
  }
  /**
   * An incident reported by Google Operations for a G Suite application.
   */
  export interface Schema$GoogleOperations {
    /**
     * The list of emails which correspond to the users directly affected by the incident.
     */
    affectedUserEmails?: string[] | null;
    /**
     * Optional. Application-specific data for an incident, provided when the G Suite application which reported the incident cannot be completely restored to a valid state.
     */
    attachmentData?: Schema$Attachment;
    /**
     * A detailed, freeform incident description.
     */
    description?: string | null;
    /**
     * A one-line incident description.
     */
    title?: string | null;
  }
  /**
   * Response message for an alert feedback listing request.
   */
  export interface Schema$ListAlertFeedbackResponse {
    /**
     * The list of alert feedback. Feedback entries for each alert are ordered by creation time descending.
     */
    feedback?: Schema$AlertFeedback[];
  }
  /**
   * Response message for an alert listing request.
   */
  export interface Schema$ListAlertsResponse {
    /**
     * The list of alerts.
     */
    alerts?: Schema$Alert[];
    /**
     * The token for the next page. If not empty, indicates that there may be more alerts that match the listing request; this value can be used in a subsequent ListAlertsRequest to get alerts continuing from last result of the current list call.
     */
    nextPageToken?: string | null;
  }
  /**
   * The details of the login action.
   */
  export interface Schema$LoginDetails {
    /**
     * Optional. The human-readable IP address (for example, `11.22.33.44`) that is associated with the warning event.
     */
    ipAddress?: string | null;
    /**
     * Optional. The successful login time that is associated with the warning event. This will not be present for blocked login attempts.
     */
    loginTime?: string | null;
  }
  /**
   * Proto for all phishing alerts with common payload. Supported types are any of the following:  * User reported phishing * User reported spam spike * Suspicious message reported * Phishing reclassification * Malware reclassification
   */
  export interface Schema$MailPhishing {
    /**
     * The domain ID.
     */
    domainId?: Schema$DomainId;
    /**
     * If `true`, the email originated from within the organization.
     */
    isInternal?: boolean | null;
    /**
     * The entity whose actions triggered a Gmail phishing alert.
     */
    maliciousEntity?: Schema$MaliciousEntity;
    /**
     * The list of messages contained by this alert.
     */
    messages?: Schema$GmailMessageInfo[];
  }
  /**
   * Entity whose actions triggered a Gmail phishing alert.
   */
  export interface Schema$MaliciousEntity {
    /**
     * The header from display name.
     */
    displayName?: string | null;
    /**
     * The sender email address.
     */
    fromHeader?: string | null;
  }
  /**
   * Settings for callback notifications. For more details see [G Suite Alert Notification](/admin-sdk/alertcenter/guides/notifications).
   */
  export interface Schema$Notification {
    /**
     * A Google Cloud Pub/sub topic destination.
     */
    cloudPubsubTopic?: Schema$CloudPubsubTopic;
  }
  /**
   * Alert for a spike in user reported phishing. &lt;aside class=&quot;warning&quot;&gt;&lt;b&gt;Warning&lt;/b&gt;: This type has been deprecated. Use [MailPhishing](/admin-sdk/alertcenter/reference/rest/v1beta1/MailPhishing) instead.&lt;/aside&gt;
   */
  export interface Schema$PhishingSpike {
    /**
     * The domain ID.
     */
    domainId?: Schema$DomainId;
    /**
     * If `true`, the email originated from within the organization.
     */
    isInternal?: boolean | null;
    /**
     * The entity whose actions triggered a Gmail phishing alert.
     */
    maliciousEntity?: Schema$MaliciousEntity;
    /**
     * The list of messages contained by this alert.
     */
    messages?: Schema$GmailMessageInfo[];
  }
  /**
   * Requests for one application that needs default SQL setup.
   */
  export interface Schema$RequestInfo {
    /**
     * List of app developers who triggered notifications for above application.
     */
    appDeveloperEmail?: string[] | null;
    /**
     * Required. The application that requires the SQL setup.
     */
    appKey?: string | null;
    /**
     * Required. Number of requests sent for this application to set up default SQL instance.
     */
    numberOfRequests?: string | null;
  }
  /**
   * Customer-level settings.
   */
  export interface Schema$Settings {
    /**
     * The list of notifications.
     */
    notifications?: Schema$Notification[];
  }
  /**
   * A state-sponsored attack alert. Derived from audit logs.
   */
  export interface Schema$StateSponsoredAttack {
    /**
     * The email of the user this incident was created for.
     */
    email?: string | null;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details.  You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details.  There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string | null;
  }
  /**
   * A mobile suspicious activity alert. Derived from audit logs.
   */
  export interface Schema$SuspiciousActivity {
    /**
     * The email of the user this alert was created for.
     */
    email?: string | null;
    /**
     * Required. The list of security events.
     */
    events?: Schema$SuspiciousActivitySecurityDetail[];
  }
  /**
   * Detailed information of a single MDM suspicious activity event.
   */
  export interface Schema$SuspiciousActivitySecurityDetail {
    /**
     * Required. The device ID.
     */
    deviceId?: string | null;
    /**
     * The model of the device.
     */
    deviceModel?: string | null;
    /**
     * The device property which was changed.
     */
    deviceProperty?: string | null;
    /**
     * The type of the device.
     */
    deviceType?: string | null;
    /**
     * Required for iOS, empty for others.
     */
    iosVendorId?: string | null;
    /**
     * The new value of the device property after the change.
     */
    newValue?: string | null;
    /**
     * The old value of the device property before the change.
     */
    oldValue?: string | null;
    /**
     * The device resource ID.
     */
    resourceId?: string | null;
    /**
     * The serial number of the device.
     */
    serialNumber?: string | null;
  }
  /**
   * A request to undelete a specific alert that was marked for deletion.
   */
  export interface Schema$UndeleteAlertRequest {
    /**
     * Optional. The unique identifier of the G Suite organization account of the customer the alert is associated with. Inferred from the caller identity if not provided.
     */
    customerId?: string | null;
  }

  export class Resource$Alerts {
    context: APIRequestContext;
    feedback: Resource$Alerts$Feedback;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.feedback = new Resource$Alerts$Feedback(this.context);
    }

    /**
     * alertcenter.alerts.batchDelete
     * @desc Performs batch delete operation on alerts.
     * @alias alertcenter.alerts.batchDelete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().BatchDeleteAlertsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchDelete(
      params?: Params$Resource$Alerts$Batchdelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BatchDeleteAlertsResponse>;
    batchDelete(
      params: Params$Resource$Alerts$Batchdelete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchDeleteAlertsResponse>,
      callback: BodyResponseCallback<Schema$BatchDeleteAlertsResponse>
    ): void;
    batchDelete(
      params: Params$Resource$Alerts$Batchdelete,
      callback: BodyResponseCallback<Schema$BatchDeleteAlertsResponse>
    ): void;
    batchDelete(
      callback: BodyResponseCallback<Schema$BatchDeleteAlertsResponse>
    ): void;
    batchDelete(
      paramsOrCallback?:
        | Params$Resource$Alerts$Batchdelete
        | BodyResponseCallback<Schema$BatchDeleteAlertsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchDeleteAlertsResponse>,
      callback?: BodyResponseCallback<Schema$BatchDeleteAlertsResponse>
    ): void | GaxiosPromise<Schema$BatchDeleteAlertsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Alerts$Batchdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Alerts$Batchdelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://alertcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/alerts:batchDelete').replace(
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
        createAPIRequest<Schema$BatchDeleteAlertsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$BatchDeleteAlertsResponse>(parameters);
      }
    }

    /**
     * alertcenter.alerts.batchUndelete
     * @desc Performs batch undelete operation on alerts.
     * @alias alertcenter.alerts.batchUndelete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().BatchUndeleteAlertsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchUndelete(
      params?: Params$Resource$Alerts$Batchundelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BatchUndeleteAlertsResponse>;
    batchUndelete(
      params: Params$Resource$Alerts$Batchundelete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchUndeleteAlertsResponse>,
      callback: BodyResponseCallback<Schema$BatchUndeleteAlertsResponse>
    ): void;
    batchUndelete(
      params: Params$Resource$Alerts$Batchundelete,
      callback: BodyResponseCallback<Schema$BatchUndeleteAlertsResponse>
    ): void;
    batchUndelete(
      callback: BodyResponseCallback<Schema$BatchUndeleteAlertsResponse>
    ): void;
    batchUndelete(
      paramsOrCallback?:
        | Params$Resource$Alerts$Batchundelete
        | BodyResponseCallback<Schema$BatchUndeleteAlertsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchUndeleteAlertsResponse>,
      callback?: BodyResponseCallback<Schema$BatchUndeleteAlertsResponse>
    ): void | GaxiosPromise<Schema$BatchUndeleteAlertsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Alerts$Batchundelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Alerts$Batchundelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://alertcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/alerts:batchUndelete').replace(
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
        createAPIRequest<Schema$BatchUndeleteAlertsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$BatchUndeleteAlertsResponse>(parameters);
      }
    }

    /**
     * alertcenter.alerts.delete
     * @desc Marks the specified alert for deletion. An alert that has been marked for deletion is removed from Alert Center after 30 days. Marking an alert for deletion has no effect on an alert which has already been marked for deletion. Attempting to mark a nonexistent alert for deletion results in a `NOT_FOUND` error.
     * @alias alertcenter.alerts.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.alertId Required. The identifier of the alert to delete.
     * @param {string=} params.customerId Optional. The unique identifier of the G Suite organization account of the customer the alert is associated with. Inferred from the caller identity if not provided.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Alerts$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Alerts$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Alerts$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Alerts$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as Params$Resource$Alerts$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Alerts$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://alertcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/alerts/{alertId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['alertId'],
        pathParams: ['alertId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * alertcenter.alerts.get
     * @desc Gets the specified alert. Attempting to get a nonexistent alert returns `NOT_FOUND` error.
     * @alias alertcenter.alerts.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.alertId Required. The identifier of the alert to retrieve.
     * @param {string=} params.customerId Optional. The unique identifier of the G Suite organization account of the customer the alert is associated with. Inferred from the caller identity if not provided.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Alerts$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Alert>;
    get(
      params: Params$Resource$Alerts$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Alert>,
      callback: BodyResponseCallback<Schema$Alert>
    ): void;
    get(
      params: Params$Resource$Alerts$Get,
      callback: BodyResponseCallback<Schema$Alert>
    ): void;
    get(callback: BodyResponseCallback<Schema$Alert>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Alerts$Get
        | BodyResponseCallback<Schema$Alert>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Alert>,
      callback?: BodyResponseCallback<Schema$Alert>
    ): void | GaxiosPromise<Schema$Alert> {
      let params = (paramsOrCallback || {}) as Params$Resource$Alerts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Alerts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://alertcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/alerts/{alertId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['alertId'],
        pathParams: ['alertId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Alert>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Alert>(parameters);
      }
    }

    /**
     * alertcenter.alerts.getMetadata
     * @desc Returns the metadata of an alert. Attempting to get metadata for a non-existent alert returns `NOT_FOUND` error.
     * @alias alertcenter.alerts.getMetadata
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.alertId Required. The identifier of the alert this metadata belongs to.
     * @param {string=} params.customerId Optional. The unique identifier of the G Suite organization account of the customer the alert metadata is associated with. Inferred from the caller identity if not provided.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getMetadata(
      params?: Params$Resource$Alerts$Getmetadata,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AlertMetadata>;
    getMetadata(
      params: Params$Resource$Alerts$Getmetadata,
      options: MethodOptions | BodyResponseCallback<Schema$AlertMetadata>,
      callback: BodyResponseCallback<Schema$AlertMetadata>
    ): void;
    getMetadata(
      params: Params$Resource$Alerts$Getmetadata,
      callback: BodyResponseCallback<Schema$AlertMetadata>
    ): void;
    getMetadata(callback: BodyResponseCallback<Schema$AlertMetadata>): void;
    getMetadata(
      paramsOrCallback?:
        | Params$Resource$Alerts$Getmetadata
        | BodyResponseCallback<Schema$AlertMetadata>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AlertMetadata>,
      callback?: BodyResponseCallback<Schema$AlertMetadata>
    ): void | GaxiosPromise<Schema$AlertMetadata> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Alerts$Getmetadata;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Alerts$Getmetadata;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://alertcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/alerts/{alertId}/metadata').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['alertId'],
        pathParams: ['alertId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AlertMetadata>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AlertMetadata>(parameters);
      }
    }

    /**
     * alertcenter.alerts.list
     * @desc Lists the alerts.
     * @alias alertcenter.alerts.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.customerId Optional. The unique identifier of the G Suite organization account of the customer the alerts are associated with. Inferred from the caller identity if not provided.
     * @param {string=} params.filter Optional. A query string for filtering alert results. For more details, see [Query filters](/admin-sdk/alertcenter/guides/query-filters) and [Supported query filter fields](/admin-sdk/alertcenter/reference/filter-fields#alerts.list).
     * @param {string=} params.orderBy Optional. The sort order of the list results. If not specified results may be returned in arbitrary order. You can sort the results in descending order based on the creation timestamp using `order_by="create_time desc"`. Currently, supported sorting are `create_time asc`, `create_time desc`, `update_time desc`
     * @param {integer=} params.pageSize Optional. The requested page size. Server may return fewer items than requested. If unspecified, server picks an appropriate default.
     * @param {string=} params.pageToken Optional. A token identifying a page of results the server should return. If empty, a new iteration is started. To continue an iteration, pass in the value from the previous ListAlertsResponse's next_page_token field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Alerts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAlertsResponse>;
    list(
      params: Params$Resource$Alerts$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListAlertsResponse>,
      callback: BodyResponseCallback<Schema$ListAlertsResponse>
    ): void;
    list(
      params: Params$Resource$Alerts$List,
      callback: BodyResponseCallback<Schema$ListAlertsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAlertsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Alerts$List
        | BodyResponseCallback<Schema$ListAlertsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAlertsResponse>,
      callback?: BodyResponseCallback<Schema$ListAlertsResponse>
    ): void | GaxiosPromise<Schema$ListAlertsResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Alerts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Alerts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://alertcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/alerts').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListAlertsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListAlertsResponse>(parameters);
      }
    }

    /**
     * alertcenter.alerts.undelete
     * @desc Restores, or "undeletes", an alert that was marked for deletion within the past 30 days. Attempting to undelete an alert which was marked for deletion over 30 days ago (which has been removed from the Alert Center database) or a nonexistent alert returns a `NOT_FOUND` error. Attempting to undelete an alert which has not been marked for deletion has no effect.
     * @alias alertcenter.alerts.undelete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.alertId Required. The identifier of the alert to undelete.
     * @param {().UndeleteAlertRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    undelete(
      params?: Params$Resource$Alerts$Undelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Alert>;
    undelete(
      params: Params$Resource$Alerts$Undelete,
      options: MethodOptions | BodyResponseCallback<Schema$Alert>,
      callback: BodyResponseCallback<Schema$Alert>
    ): void;
    undelete(
      params: Params$Resource$Alerts$Undelete,
      callback: BodyResponseCallback<Schema$Alert>
    ): void;
    undelete(callback: BodyResponseCallback<Schema$Alert>): void;
    undelete(
      paramsOrCallback?:
        | Params$Resource$Alerts$Undelete
        | BodyResponseCallback<Schema$Alert>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Alert>,
      callback?: BodyResponseCallback<Schema$Alert>
    ): void | GaxiosPromise<Schema$Alert> {
      let params = (paramsOrCallback || {}) as Params$Resource$Alerts$Undelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Alerts$Undelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://alertcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/alerts/{alertId}:undelete').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['alertId'],
        pathParams: ['alertId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Alert>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Alert>(parameters);
      }
    }
  }

  export interface Params$Resource$Alerts$Batchdelete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchDeleteAlertsRequest;
  }
  export interface Params$Resource$Alerts$Batchundelete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchUndeleteAlertsRequest;
  }
  export interface Params$Resource$Alerts$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The identifier of the alert to delete.
     */
    alertId?: string;
    /**
     * Optional. The unique identifier of the G Suite organization account of the customer the alert is associated with. Inferred from the caller identity if not provided.
     */
    customerId?: string;
  }
  export interface Params$Resource$Alerts$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The identifier of the alert to retrieve.
     */
    alertId?: string;
    /**
     * Optional. The unique identifier of the G Suite organization account of the customer the alert is associated with. Inferred from the caller identity if not provided.
     */
    customerId?: string;
  }
  export interface Params$Resource$Alerts$Getmetadata
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The identifier of the alert this metadata belongs to.
     */
    alertId?: string;
    /**
     * Optional. The unique identifier of the G Suite organization account of the customer the alert metadata is associated with. Inferred from the caller identity if not provided.
     */
    customerId?: string;
  }
  export interface Params$Resource$Alerts$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The unique identifier of the G Suite organization account of the customer the alerts are associated with. Inferred from the caller identity if not provided.
     */
    customerId?: string;
    /**
     * Optional. A query string for filtering alert results. For more details, see [Query filters](/admin-sdk/alertcenter/guides/query-filters) and [Supported query filter fields](/admin-sdk/alertcenter/reference/filter-fields#alerts.list).
     */
    filter?: string;
    /**
     * Optional. The sort order of the list results. If not specified results may be returned in arbitrary order. You can sort the results in descending order based on the creation timestamp using `order_by="create_time desc"`. Currently, supported sorting are `create_time asc`, `create_time desc`, `update_time desc`
     */
    orderBy?: string;
    /**
     * Optional. The requested page size. Server may return fewer items than requested. If unspecified, server picks an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return. If empty, a new iteration is started. To continue an iteration, pass in the value from the previous ListAlertsResponse's next_page_token field.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Alerts$Undelete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The identifier of the alert to undelete.
     */
    alertId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UndeleteAlertRequest;
  }

  export class Resource$Alerts$Feedback {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * alertcenter.alerts.feedback.create
     * @desc Creates new feedback for an alert. Attempting to create a feedback for a non-existent alert returns `NOT_FOUND` error. Attempting to create a feedback for an alert that is marked for deletion returns `FAILED_PRECONDITION' error.
     * @alias alertcenter.alerts.feedback.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.alertId Required. The identifier of the alert this feedback belongs to.
     * @param {string=} params.customerId Optional. The unique identifier of the G Suite organization account of the customer the alert is associated with. Inferred from the caller identity if not provided.
     * @param {().AlertFeedback} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Alerts$Feedback$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AlertFeedback>;
    create(
      params: Params$Resource$Alerts$Feedback$Create,
      options: MethodOptions | BodyResponseCallback<Schema$AlertFeedback>,
      callback: BodyResponseCallback<Schema$AlertFeedback>
    ): void;
    create(
      params: Params$Resource$Alerts$Feedback$Create,
      callback: BodyResponseCallback<Schema$AlertFeedback>
    ): void;
    create(callback: BodyResponseCallback<Schema$AlertFeedback>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Alerts$Feedback$Create
        | BodyResponseCallback<Schema$AlertFeedback>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AlertFeedback>,
      callback?: BodyResponseCallback<Schema$AlertFeedback>
    ): void | GaxiosPromise<Schema$AlertFeedback> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Alerts$Feedback$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Alerts$Feedback$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://alertcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/alerts/{alertId}/feedback').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['alertId'],
        pathParams: ['alertId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AlertFeedback>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AlertFeedback>(parameters);
      }
    }

    /**
     * alertcenter.alerts.feedback.list
     * @desc Lists all the feedback for an alert. Attempting to list feedbacks for a non-existent alert returns `NOT_FOUND` error.
     * @alias alertcenter.alerts.feedback.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.alertId Required. The alert identifier. The "-" wildcard could be used to represent all alerts.
     * @param {string=} params.customerId Optional. The unique identifier of the G Suite organization account of the customer the alert feedback are associated with. Inferred from the caller identity if not provided.
     * @param {string=} params.filter Optional. A query string for filtering alert feedback results. For more details, see [Query filters](/admin-sdk/alertcenter/guides/query-filters) and [Supported query filter fields](/admin-sdk/alertcenter/reference/filter-fields#alerts.feedback.list).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Alerts$Feedback$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAlertFeedbackResponse>;
    list(
      params: Params$Resource$Alerts$Feedback$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAlertFeedbackResponse>,
      callback: BodyResponseCallback<Schema$ListAlertFeedbackResponse>
    ): void;
    list(
      params: Params$Resource$Alerts$Feedback$List,
      callback: BodyResponseCallback<Schema$ListAlertFeedbackResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAlertFeedbackResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Alerts$Feedback$List
        | BodyResponseCallback<Schema$ListAlertFeedbackResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAlertFeedbackResponse>,
      callback?: BodyResponseCallback<Schema$ListAlertFeedbackResponse>
    ): void | GaxiosPromise<Schema$ListAlertFeedbackResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Alerts$Feedback$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Alerts$Feedback$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://alertcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/alerts/{alertId}/feedback').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['alertId'],
        pathParams: ['alertId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListAlertFeedbackResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListAlertFeedbackResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Alerts$Feedback$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The identifier of the alert this feedback belongs to.
     */
    alertId?: string;
    /**
     * Optional. The unique identifier of the G Suite organization account of the customer the alert is associated with. Inferred from the caller identity if not provided.
     */
    customerId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AlertFeedback;
  }
  export interface Params$Resource$Alerts$Feedback$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The alert identifier. The "-" wildcard could be used to represent all alerts.
     */
    alertId?: string;
    /**
     * Optional. The unique identifier of the G Suite organization account of the customer the alert feedback are associated with. Inferred from the caller identity if not provided.
     */
    customerId?: string;
    /**
     * Optional. A query string for filtering alert feedback results. For more details, see [Query filters](/admin-sdk/alertcenter/guides/query-filters) and [Supported query filter fields](/admin-sdk/alertcenter/reference/filter-fields#alerts.feedback.list).
     */
    filter?: string;
  }

  export class Resource$V1beta1 {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * alertcenter.getSettings
     * @desc Returns customer-level settings.
     * @alias alertcenter.getSettings
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.customerId Optional. The unique identifier of the G Suite organization account of the customer the alert settings are associated with. Inferred from the caller identity if not provided.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getSettings(
      params?: Params$Resource$V1beta1$Getsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Settings>;
    getSettings(
      params: Params$Resource$V1beta1$Getsettings,
      options: MethodOptions | BodyResponseCallback<Schema$Settings>,
      callback: BodyResponseCallback<Schema$Settings>
    ): void;
    getSettings(
      params: Params$Resource$V1beta1$Getsettings,
      callback: BodyResponseCallback<Schema$Settings>
    ): void;
    getSettings(callback: BodyResponseCallback<Schema$Settings>): void;
    getSettings(
      paramsOrCallback?:
        | Params$Resource$V1beta1$Getsettings
        | BodyResponseCallback<Schema$Settings>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Settings>,
      callback?: BodyResponseCallback<Schema$Settings>
    ): void | GaxiosPromise<Schema$Settings> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$V1beta1$Getsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1beta1$Getsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://alertcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/settings').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Settings>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Settings>(parameters);
      }
    }

    /**
     * alertcenter.updateSettings
     * @desc Updates the customer-level settings.
     * @alias alertcenter.updateSettings
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.customerId Optional. The unique identifier of the G Suite organization account of the customer the alert settings are associated with. Inferred from the caller identity if not provided.
     * @param {().Settings} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateSettings(
      params?: Params$Resource$V1beta1$Updatesettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Settings>;
    updateSettings(
      params: Params$Resource$V1beta1$Updatesettings,
      options: MethodOptions | BodyResponseCallback<Schema$Settings>,
      callback: BodyResponseCallback<Schema$Settings>
    ): void;
    updateSettings(
      params: Params$Resource$V1beta1$Updatesettings,
      callback: BodyResponseCallback<Schema$Settings>
    ): void;
    updateSettings(callback: BodyResponseCallback<Schema$Settings>): void;
    updateSettings(
      paramsOrCallback?:
        | Params$Resource$V1beta1$Updatesettings
        | BodyResponseCallback<Schema$Settings>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Settings>,
      callback?: BodyResponseCallback<Schema$Settings>
    ): void | GaxiosPromise<Schema$Settings> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$V1beta1$Updatesettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1beta1$Updatesettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://alertcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/settings').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Settings>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Settings>(parameters);
      }
    }
  }

  export interface Params$Resource$V1beta1$Getsettings
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The unique identifier of the G Suite organization account of the customer the alert settings are associated with. Inferred from the caller identity if not provided.
     */
    customerId?: string;
  }
  export interface Params$Resource$V1beta1$Updatesettings
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The unique identifier of the G Suite organization account of the customer the alert settings are associated with. Inferred from the caller identity if not provided.
     */
    customerId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Settings;
  }
}
