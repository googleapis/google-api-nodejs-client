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

export namespace alertcenter_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
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
   * Google Workspace Alert Center API
   *
   * Manages alerts on issues affecting your domain.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const alertcenter = google.alertcenter('v1beta1');
   * ```
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
  export interface Schema$GoogleAppsAlertcenterTypeAccountWarning {
    /**
     * Required. The email of the user that this event belongs to.
     */
    email?: string | null;
    /**
     * Optional. Details of the login action associated with the warning event. This is only available for: * Suspicious login * Suspicious login (less secure app) * Suspicious programmatic login * User suspended (suspicious activity)
     */
    loginDetails?: Schema$GoogleAppsAlertcenterTypeAccountWarningLoginDetails;
  }
  /**
   * The details of the login action.
   */
  export interface Schema$GoogleAppsAlertcenterTypeAccountWarningLoginDetails {
    /**
     * Optional. The human-readable IP address (for example, `11.22.33.44`) that is associated with the warning event.
     */
    ipAddress?: string | null;
    /**
     * Optional. The successful login time that is associated with the warning event. This isn't present for blocked login attempts.
     */
    loginTime?: string | null;
  }
  /**
   * Alerts from Google Workspace Security Center rules service configured by an admin.
   */
  export interface Schema$GoogleAppsAlertcenterTypeActivityRule {
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
     * List of alert IDs superseded by this alert. It is used to indicate that this alert is essentially extension of superseded alerts and we found the relationship after creating these alerts.
     */
    supersededAlerts?: string[] | null;
    /**
     * Alert ID superseding this alert. It is used to indicate that superseding alert is essentially extension of this alert and we found the relationship after creating both alerts.
     */
    supersedingAlert?: string | null;
    /**
     * Alert threshold is for example “COUNT \> 5”.
     */
    threshold?: string | null;
    /**
     * The trigger sources for this rule. * GMAIL_EVENTS * DEVICE_EVENTS * USER_EVENTS
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
   * Alerts from App Maker to notify admins to set up default SQL instance.
   */
  export interface Schema$GoogleAppsAlertcenterTypeAppMakerSqlSetupNotification {
    /**
     * List of applications with requests for default SQL set up.
     */
    requestInfo?: Schema$GoogleAppsAlertcenterTypeAppMakerSqlSetupNotificationRequestInfo[];
  }
  /**
   * Requests for one application that needs default SQL setup.
   */
  export interface Schema$GoogleAppsAlertcenterTypeAppMakerSqlSetupNotificationRequestInfo {
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
   * Attachment with application-specific information about an alert.
   */
  export interface Schema$GoogleAppsAlertcenterTypeAttachment {
    /**
     * A CSV file attachment.
     */
    csv?: Schema$GoogleAppsAlertcenterTypeAttachmentCsv;
  }
  /**
   * A representation of a CSV file attachment, as a list of column headers and a list of data rows.
   */
  export interface Schema$GoogleAppsAlertcenterTypeAttachmentCsv {
    /**
     * The list of data rows in a CSV file, as string arrays rather than as a single comma-separated string.
     */
    dataRows?: Schema$GoogleAppsAlertcenterTypeAttachmentCsvCsvRow[];
    /**
     * The list of headers for data columns in a CSV file.
     */
    headers?: string[] | null;
  }
  /**
   * A representation of a single data row in a CSV file.
   */
  export interface Schema$GoogleAppsAlertcenterTypeAttachmentCsvCsvRow {
    /**
     * The data entries in a CSV file row, as a string array rather than a single comma-separated string.
     */
    entries?: string[] | null;
  }
  /**
   * Alert for setting the domain or IP that malicious email comes from as whitelisted domain or IP in Gmail advanced settings.
   */
  export interface Schema$GoogleAppsAlertcenterTypeBadWhitelist {
    /**
     * The domain ID.
     */
    domainId?: Schema$GoogleAppsAlertcenterTypeDomainId;
    /**
     * The entity whose actions triggered a Gmail phishing alert.
     */
    maliciousEntity?: Schema$GoogleAppsAlertcenterTypeMaliciousEntity;
    /**
     * The list of messages contained by this alert.
     */
    messages?: Schema$GoogleAppsAlertcenterTypeGmailMessageInfo[];
    /**
     * The source IP address of the malicious email, for example, `127.0.0.1`.
     */
    sourceIp?: string | null;
  }
  /**
   * A mobile device compromised alert. Derived from audit logs.
   */
  export interface Schema$GoogleAppsAlertcenterTypeDeviceCompromised {
    /**
     * The email of the user this alert was created for.
     */
    email?: string | null;
    /**
     * Required. The list of security events.
     */
    events?: Schema$GoogleAppsAlertcenterTypeDeviceCompromisedDeviceCompromisedSecurityDetail[];
  }
  /**
   * Detailed information of a single MDM device compromised event.
   */
  export interface Schema$GoogleAppsAlertcenterTypeDeviceCompromisedDeviceCompromisedSecurityDetail {
    /**
     * The device compromised state. Possible values are "`Compromised`" or "`Not Compromised`".
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
   * Alerts that get triggered on violations of Data Loss Prevention (DLP) rules.
   */
  export interface Schema$GoogleAppsAlertcenterTypeDlpRuleViolation {
    /**
     * Details about the violated DLP rule. Admins can use the predefined detectors provided by Google Cloud DLP https://cloud.google.com/dlp/ when setting up a DLP rule. Matched Cloud DLP detectors in this violation if any will be captured in the MatchInfo.predefined_detector.
     */
    ruleViolationInfo?: Schema$GoogleAppsAlertcenterTypeRuleViolationInfo;
  }
  /**
   * Domain ID of Gmail phishing alerts.
   */
  export interface Schema$GoogleAppsAlertcenterTypeDomainId {
    /**
     * The primary domain for the customer.
     */
    customerPrimaryDomain?: string | null;
  }
  /**
   * A takeout operation for the entire domain was initiated by an admin. Derived from audit logs.
   */
  export interface Schema$GoogleAppsAlertcenterTypeDomainWideTakeoutInitiated {
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
   * Details of a message in phishing spike alert.
   */
  export interface Schema$GoogleAppsAlertcenterTypeGmailMessageInfo {
    /**
     * The `SHA256` hash of email's attachment and all MIME parts.
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
     * The MD5 Hash of email's subject (only available for reported emails).
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
   * An incident reported by Google Operations for a Google Workspace application.
   */
  export interface Schema$GoogleAppsAlertcenterTypeGoogleOperations {
    /**
     * The list of emails which correspond to the users directly affected by the incident.
     */
    affectedUserEmails?: string[] | null;
    /**
     * Optional. Application-specific data for an incident, provided when the Google Workspace application which reported the incident cannot be completely restored to a valid state.
     */
    attachmentData?: Schema$GoogleAppsAlertcenterTypeAttachment;
    /**
     * A detailed, freeform incident description.
     */
    description?: string | null;
    /**
     * A header to display above the incident message. Typically used to attach a localized notice on the timeline for followup comms translations.
     */
    header?: string | null;
    /**
     * A one-line incident description.
     */
    title?: string | null;
  }
  /**
   * Proto for all phishing alerts with common payload. Supported types are any of the following: * User reported phishing * User reported spam spike * Suspicious message reported * Phishing reclassification * Malware reclassification * Gmail potential employee spoofing
   */
  export interface Schema$GoogleAppsAlertcenterTypeMailPhishing {
    /**
     * The domain ID.
     */
    domainId?: Schema$GoogleAppsAlertcenterTypeDomainId;
    /**
     * If `true`, the email originated from within the organization.
     */
    isInternal?: boolean | null;
    /**
     * The entity whose actions triggered a Gmail phishing alert.
     */
    maliciousEntity?: Schema$GoogleAppsAlertcenterTypeMaliciousEntity;
    /**
     * The list of messages contained by this alert.
     */
    messages?: Schema$GoogleAppsAlertcenterTypeGmailMessageInfo[];
    /**
     * System actions on the messages.
     */
    systemActionType?: string | null;
  }
  /**
   * Entity whose actions triggered a Gmail phishing alert.
   */
  export interface Schema$GoogleAppsAlertcenterTypeMaliciousEntity {
    /**
     * The header from display name.
     */
    displayName?: string | null;
    /**
     * The actor who triggered a gmail phishing alert.
     */
    entity?: Schema$GoogleAppsAlertcenterTypeUser;
    /**
     * The sender email address.
     */
    fromHeader?: string | null;
  }
  /**
   * Alert for a spike in user reported phishing. *Warning*: This type has been deprecated. Use [MailPhishing](/admin-sdk/alertcenter/reference/rest/v1beta1/MailPhishing) instead.
   */
  export interface Schema$GoogleAppsAlertcenterTypePhishingSpike {
    /**
     * The domain ID.
     */
    domainId?: Schema$GoogleAppsAlertcenterTypeDomainId;
    /**
     * If `true`, the email originated from within the organization.
     */
    isInternal?: boolean | null;
    /**
     * The entity whose actions triggered a Gmail phishing alert.
     */
    maliciousEntity?: Schema$GoogleAppsAlertcenterTypeMaliciousEntity;
    /**
     * The list of messages contained by this alert.
     */
    messages?: Schema$GoogleAppsAlertcenterTypeGmailMessageInfo[];
  }
  /**
   * Common alert information about violated rules that are configured by Google Workspace administrators.
   */
  export interface Schema$GoogleAppsAlertcenterTypeRuleViolationInfo {
    /**
     * Source of the data.
     */
    dataSource?: string | null;
    /**
     * List of matches that were found in the resource content.
     */
    matchInfo?: Schema$GoogleAppsAlertcenterTypeRuleViolationInfoMatchInfo[];
    /**
     * Resource recipients. For Drive, they are grantees that the Drive file was shared with at the time of rule triggering. Valid values include user emails, group emails, domains, or 'anyone' if the file was publicly accessible. If the file was private the recipients list will be empty. For Gmail, they are emails of the users or groups that the Gmail message was sent to.
     */
    recipients?: string[] | null;
    /**
     * Details of the resource which violated the rule.
     */
    resourceInfo?: Schema$GoogleAppsAlertcenterTypeRuleViolationInfoResourceInfo;
    /**
     * Details of the violated rule.
     */
    ruleInfo?: Schema$GoogleAppsAlertcenterTypeRuleViolationInfoRuleInfo;
    /**
     * Actions suppressed due to other actions with higher priority.
     */
    suppressedActionTypes?: string[] | null;
    /**
     * Trigger of the rule.
     */
    trigger?: string | null;
    /**
     * Metadata related to the triggered actions.
     */
    triggeredActionInfo?: Schema$GoogleAppsAlertcenterTypeRuleViolationInfoActionInfo[];
    /**
     * Actions applied as a consequence of the rule being triggered.
     */
    triggeredActionTypes?: string[] | null;
    /**
     * Email of the user who caused the violation. Value could be empty if not applicable, for example, a violation found by drive continuous scan.
     */
    triggeringUserEmail?: string | null;
  }
  /**
   * Metadata related to the action.
   */
  export interface Schema$GoogleAppsAlertcenterTypeRuleViolationInfoActionInfo {}
  /**
   * Proto that contains match information from the condition part of the rule.
   */
  export interface Schema$GoogleAppsAlertcenterTypeRuleViolationInfoMatchInfo {
    /**
     * For matched detector predefined by Google.
     */
    predefinedDetector?: Schema$GoogleAppsAlertcenterTypeRuleViolationInfoMatchInfoPredefinedDetectorInfo;
    /**
     * For matched detector defined by administrators.
     */
    userDefinedDetector?: Schema$GoogleAppsAlertcenterTypeRuleViolationInfoMatchInfoUserDefinedDetectorInfo;
  }
  /**
   * Detector provided by Google.
   */
  export interface Schema$GoogleAppsAlertcenterTypeRuleViolationInfoMatchInfoPredefinedDetectorInfo {
    /**
     * Name that uniquely identifies the detector.
     */
    detectorName?: string | null;
  }
  /**
   * Detector defined by administrators.
   */
  export interface Schema$GoogleAppsAlertcenterTypeRuleViolationInfoMatchInfoUserDefinedDetectorInfo {
    /**
     * Display name of the detector.
     */
    displayName?: string | null;
    /**
     * Resource name that uniquely identifies the detector.
     */
    resourceName?: string | null;
  }
  /**
   * Proto that contains resource information.
   */
  export interface Schema$GoogleAppsAlertcenterTypeRuleViolationInfoResourceInfo {
    /**
     * Drive file ID.
     */
    documentId?: string | null;
    /**
     * Title of the resource, for example email subject, or document title.
     */
    resourceTitle?: string | null;
  }
  /**
   * Proto that contains rule information.
   */
  export interface Schema$GoogleAppsAlertcenterTypeRuleViolationInfoRuleInfo {
    /**
     * User provided name of the rule.
     */
    displayName?: string | null;
    /**
     * Resource name that uniquely identifies the rule.
     */
    resourceName?: string | null;
  }
  /**
   * A state-sponsored attack alert. Derived from audit logs.
   */
  export interface Schema$GoogleAppsAlertcenterTypeStateSponsoredAttack {
    /**
     * The email of the user this incident was created for.
     */
    email?: string | null;
  }
  /**
   * A mobile suspicious activity alert. Derived from audit logs.
   */
  export interface Schema$GoogleAppsAlertcenterTypeSuspiciousActivity {
    /**
     * The email of the user this alert was created for.
     */
    email?: string | null;
    /**
     * Required. The list of security events.
     */
    events?: Schema$GoogleAppsAlertcenterTypeSuspiciousActivitySuspiciousActivitySecurityDetail[];
  }
  /**
   * Detailed information of a single MDM suspicious activity event.
   */
  export interface Schema$GoogleAppsAlertcenterTypeSuspiciousActivitySuspiciousActivitySecurityDetail {
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
   * A user.
   */
  export interface Schema$GoogleAppsAlertcenterTypeUser {
    /**
     * Display name of the user.
     */
    displayName?: string | null;
    /**
     * Email address of the user.
     */
    emailAddress?: string | null;
  }
  /**
   * An alert affecting a customer.
   */
  export interface Schema$GoogleAppsAlertcenterV1beta1Alert {
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
     * Optional. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of an alert from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform alert updates in order to avoid race conditions: An `etag` is returned in the response which contains alerts, and systems are expected to put that etag in the request to update alert to ensure that their change will be applied to the same version of the alert. If no `etag` is provided in the call to update alert, then the existing alert is overwritten blindly.
     */
    etag?: string | null;
    /**
     * Output only. The metadata associated with this alert.
     */
    metadata?: Schema$GoogleAppsAlertcenterV1beta1AlertMetadata;
    /**
     * Output only. An optional [Security Investigation Tool](https://support.google.com/a/answer/7575955) query for this alert.
     */
    securityInvestigationToolLink?: string | null;
    /**
     * Required. A unique identifier for the system that reported the alert. This is output only after alert is created. Supported sources are any of the following: * Google Operations * Mobile device management * Gmail phishing * Domain wide takeout * State sponsored attack * Google identity
     */
    source?: string | null;
    /**
     * Required. The time the event that caused this alert was started or detected.
     */
    startTime?: string | null;
    /**
     * Required. The type of the alert. This is output only after alert is created. For a list of available alert types see [Google Workspace Alert types](/admin-sdk/alertcenter/reference/alert-types).
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
  export interface Schema$GoogleAppsAlertcenterV1beta1AlertFeedback {
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
  export interface Schema$GoogleAppsAlertcenterV1beta1AlertMetadata {
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
     * Optional. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of an alert metadata from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform metatdata updates in order to avoid race conditions: An `etag` is returned in the response which contains alert metadata, and systems are expected to put that etag in the request to update alert metadata to ensure that their change will be applied to the same version of the alert metadata. If no `etag` is provided in the call to update alert metadata, then the existing alert metadata is overwritten blindly.
     */
    etag?: string | null;
    /**
     * The severity value of the alert. Alert Center will set this field at alert creation time, default's to an empty string when it could not be determined. The supported values for update actions on this field are the following: * HIGH * MEDIUM * LOW
     */
    severity?: string | null;
    /**
     * The current status of the alert. The supported values are the following: * NOT_STARTED * IN_PROGRESS * CLOSED
     */
    status?: string | null;
    /**
     * Output only. The time this metadata was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * A request to perform batch delete on alerts.
   */
  export interface Schema$GoogleAppsAlertcenterV1beta1BatchDeleteAlertsRequest {
    /**
     * Required. list of alert IDs.
     */
    alertId?: string[] | null;
    /**
     * Optional. The unique identifier of the Google Workspace organization account of the customer the alerts are associated with.
     */
    customerId?: string | null;
  }
  /**
   * Response to batch delete operation on alerts.
   */
  export interface Schema$GoogleAppsAlertcenterV1beta1BatchDeleteAlertsResponse {
    /**
     * The status details for each failed alert_id.
     */
    failedAlertStatus?: {[key: string]: Schema$GoogleRpcStatus} | null;
    /**
     * The successful list of alert IDs.
     */
    successAlertIds?: string[] | null;
  }
  /**
   * A request to perform batch undelete on alerts.
   */
  export interface Schema$GoogleAppsAlertcenterV1beta1BatchUndeleteAlertsRequest {
    /**
     * Required. list of alert IDs.
     */
    alertId?: string[] | null;
    /**
     * Optional. The unique identifier of the Google Workspace organization account of the customer the alerts are associated with.
     */
    customerId?: string | null;
  }
  /**
   * Response to batch undelete operation on alerts.
   */
  export interface Schema$GoogleAppsAlertcenterV1beta1BatchUndeleteAlertsResponse {
    /**
     * The status details for each failed alert_id.
     */
    failedAlertStatus?: {[key: string]: Schema$GoogleRpcStatus} | null;
    /**
     * The successful list of alert IDs.
     */
    successAlertIds?: string[] | null;
  }
  /**
   * Response message for an alert feedback listing request.
   */
  export interface Schema$GoogleAppsAlertcenterV1beta1ListAlertFeedbackResponse {
    /**
     * The list of alert feedback. Feedback entries for each alert are ordered by creation time descending.
     */
    feedback?: Schema$GoogleAppsAlertcenterV1beta1AlertFeedback[];
  }
  /**
   * Response message for an alert listing request.
   */
  export interface Schema$GoogleAppsAlertcenterV1beta1ListAlertsResponse {
    /**
     * The list of alerts.
     */
    alerts?: Schema$GoogleAppsAlertcenterV1beta1Alert[];
    /**
     * The token for the next page. If not empty, indicates that there may be more alerts that match the listing request; this value can be used in a subsequent ListAlertsRequest to get alerts continuing from last result of the current list call.
     */
    nextPageToken?: string | null;
  }
  /**
   * Customer-level settings.
   */
  export interface Schema$GoogleAppsAlertcenterV1beta1Settings {
    /**
     * The list of notifications.
     */
    notifications?: Schema$GoogleAppsAlertcenterV1beta1SettingsNotification[];
  }
  /**
   * Settings for callback notifications. For more details see [Google Workspace Alert Notification](/admin-sdk/alertcenter/guides/notifications).
   */
  export interface Schema$GoogleAppsAlertcenterV1beta1SettingsNotification {
    /**
     * A Google Cloud Pub/sub topic destination.
     */
    cloudPubsubTopic?: Schema$GoogleAppsAlertcenterV1beta1SettingsNotificationCloudPubsubTopic;
  }
  /**
   * A reference to a Cloud Pubsub topic. To register for notifications, the owner of the topic must grant `alerts-api-push-notifications@system.gserviceaccount.com` the `projects.topics.publish` permission.
   */
  export interface Schema$GoogleAppsAlertcenterV1beta1SettingsNotificationCloudPubsubTopic {
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
   * A request to undelete a specific alert that was marked for deletion.
   */
  export interface Schema$GoogleAppsAlertcenterV1beta1UndeleteAlertRequest {
    /**
     * Optional. The unique identifier of the Google Workspace organization account of the customer the alert is associated with. Inferred from the caller identity if not provided.
     */
    customerId?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \} The JSON representation for `Empty` is empty JSON object `{\}`.
   */
  export interface Schema$GoogleProtobufEmpty {}
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$GoogleRpcStatus {
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

  export class Resource$Alerts {
    context: APIRequestContext;
    feedback: Resource$Alerts$Feedback;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.feedback = new Resource$Alerts$Feedback(this.context);
    }

    /**
     * Performs batch delete operation on alerts.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/alertcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const alertcenter = google.alertcenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.alerts'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await alertcenter.alerts.batchDelete({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alertId": [],
     *       //   "customerId": "my_customerId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "failedAlertStatus": {},
     *   //   "successAlertIds": []
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
    batchDelete(
      params: Params$Resource$Alerts$Batchdelete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchDelete(
      params?: Params$Resource$Alerts$Batchdelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAppsAlertcenterV1beta1BatchDeleteAlertsResponse>;
    batchDelete(
      params: Params$Resource$Alerts$Batchdelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchDelete(
      params: Params$Resource$Alerts$Batchdelete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1BatchDeleteAlertsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1BatchDeleteAlertsResponse>
    ): void;
    batchDelete(
      params: Params$Resource$Alerts$Batchdelete,
      callback: BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1BatchDeleteAlertsResponse>
    ): void;
    batchDelete(
      callback: BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1BatchDeleteAlertsResponse>
    ): void;
    batchDelete(
      paramsOrCallback?:
        | Params$Resource$Alerts$Batchdelete
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1BatchDeleteAlertsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1BatchDeleteAlertsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1BatchDeleteAlertsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAppsAlertcenterV1beta1BatchDeleteAlertsResponse>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$GoogleAppsAlertcenterV1beta1BatchDeleteAlertsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsAlertcenterV1beta1BatchDeleteAlertsResponse>(
          parameters
        );
      }
    }

    /**
     * Performs batch undelete operation on alerts.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/alertcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const alertcenter = google.alertcenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.alerts'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await alertcenter.alerts.batchUndelete({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alertId": [],
     *       //   "customerId": "my_customerId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "failedAlertStatus": {},
     *   //   "successAlertIds": []
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
    batchUndelete(
      params: Params$Resource$Alerts$Batchundelete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchUndelete(
      params?: Params$Resource$Alerts$Batchundelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAppsAlertcenterV1beta1BatchUndeleteAlertsResponse>;
    batchUndelete(
      params: Params$Resource$Alerts$Batchundelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchUndelete(
      params: Params$Resource$Alerts$Batchundelete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1BatchUndeleteAlertsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1BatchUndeleteAlertsResponse>
    ): void;
    batchUndelete(
      params: Params$Resource$Alerts$Batchundelete,
      callback: BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1BatchUndeleteAlertsResponse>
    ): void;
    batchUndelete(
      callback: BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1BatchUndeleteAlertsResponse>
    ): void;
    batchUndelete(
      paramsOrCallback?:
        | Params$Resource$Alerts$Batchundelete
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1BatchUndeleteAlertsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1BatchUndeleteAlertsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1BatchUndeleteAlertsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAppsAlertcenterV1beta1BatchUndeleteAlertsResponse>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$GoogleAppsAlertcenterV1beta1BatchUndeleteAlertsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsAlertcenterV1beta1BatchUndeleteAlertsResponse>(
          parameters
        );
      }
    }

    /**
     * Marks the specified alert for deletion. An alert that has been marked for deletion is removed from Alert Center after 30 days. Marking an alert for deletion has no effect on an alert which has already been marked for deletion. Attempting to mark a nonexistent alert for deletion results in a `NOT_FOUND` error.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/alertcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const alertcenter = google.alertcenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.alerts'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await alertcenter.alerts.delete({
     *     // Required. The identifier of the alert to delete.
     *     alertId: 'placeholder-value',
     *     // Optional. The unique identifier of the Google Workspace organization account of the customer the alert is associated with. Inferred from the caller identity if not provided.
     *     customerId: 'placeholder-value',
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
      params: Params$Resource$Alerts$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Alerts$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Alerts$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Alerts$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Alerts$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Alerts$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets the specified alert. Attempting to get a nonexistent alert returns `NOT_FOUND` error.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/alertcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const alertcenter = google.alertcenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.alerts'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await alertcenter.alerts.get({
     *     // Required. The identifier of the alert to retrieve.
     *     alertId: 'placeholder-value',
     *     // Optional. The unique identifier of the Google Workspace organization account of the customer the alert is associated with. Inferred from the caller identity if not provided.
     *     customerId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alertId": "my_alertId",
     *   //   "createTime": "my_createTime",
     *   //   "customerId": "my_customerId",
     *   //   "data": {},
     *   //   "deleted": false,
     *   //   "endTime": "my_endTime",
     *   //   "etag": "my_etag",
     *   //   "metadata": {},
     *   //   "securityInvestigationToolLink": "my_securityInvestigationToolLink",
     *   //   "source": "my_source",
     *   //   "startTime": "my_startTime",
     *   //   "type": "my_type",
     *   //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Alerts$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Alerts$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAppsAlertcenterV1beta1Alert>;
    get(
      params: Params$Resource$Alerts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Alerts$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1Alert>,
      callback: BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1Alert>
    ): void;
    get(
      params: Params$Resource$Alerts$Get,
      callback: BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1Alert>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1Alert>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Alerts$Get
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1Alert>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1Alert>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1Alert>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAppsAlertcenterV1beta1Alert>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$GoogleAppsAlertcenterV1beta1Alert>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsAlertcenterV1beta1Alert>(
          parameters
        );
      }
    }

    /**
     * Returns the metadata of an alert. Attempting to get metadata for a non-existent alert returns `NOT_FOUND` error.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/alertcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const alertcenter = google.alertcenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.alerts'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await alertcenter.alerts.getMetadata({
     *     // Required. The identifier of the alert this metadata belongs to.
     *     alertId: 'placeholder-value',
     *     // Optional. The unique identifier of the Google Workspace organization account of the customer the alert metadata is associated with. Inferred from the caller identity if not provided.
     *     customerId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alertId": "my_alertId",
     *   //   "assignee": "my_assignee",
     *   //   "customerId": "my_customerId",
     *   //   "etag": "my_etag",
     *   //   "severity": "my_severity",
     *   //   "status": "my_status",
     *   //   "updateTime": "my_updateTime"
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
    getMetadata(
      params: Params$Resource$Alerts$Getmetadata,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getMetadata(
      params?: Params$Resource$Alerts$Getmetadata,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAppsAlertcenterV1beta1AlertMetadata>;
    getMetadata(
      params: Params$Resource$Alerts$Getmetadata,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getMetadata(
      params: Params$Resource$Alerts$Getmetadata,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1AlertMetadata>,
      callback: BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1AlertMetadata>
    ): void;
    getMetadata(
      params: Params$Resource$Alerts$Getmetadata,
      callback: BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1AlertMetadata>
    ): void;
    getMetadata(
      callback: BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1AlertMetadata>
    ): void;
    getMetadata(
      paramsOrCallback?:
        | Params$Resource$Alerts$Getmetadata
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1AlertMetadata>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1AlertMetadata>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1AlertMetadata>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAppsAlertcenterV1beta1AlertMetadata>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$GoogleAppsAlertcenterV1beta1AlertMetadata>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsAlertcenterV1beta1AlertMetadata>(
          parameters
        );
      }
    }

    /**
     * Lists the alerts.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/alertcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const alertcenter = google.alertcenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.alerts'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await alertcenter.alerts.list({
     *     // Optional. The unique identifier of the Google Workspace organization account of the customer the alerts are associated with. Inferred from the caller identity if not provided.
     *     customerId: 'placeholder-value',
     *     // Optional. A query string for filtering alert results. For more details, see [Query filters](/admin-sdk/alertcenter/guides/query-filters) and [Supported query filter fields](/admin-sdk/alertcenter/reference/filter-fields#alerts.list).
     *     filter: 'placeholder-value',
     *     // Optional. The sort order of the list results. If not specified results may be returned in arbitrary order. You can sort the results in descending order based on the creation timestamp using `order_by="create_time desc"`. Currently, supported sorting are `create_time asc`, `create_time desc`, `update_time desc`
     *     orderBy: 'placeholder-value',
     *     // Optional. The requested page size. Server may return fewer items than requested. If unspecified, server picks an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token identifying a page of results the server should return. If empty, a new iteration is started. To continue an iteration, pass in the value from the previous ListAlertsResponse's next_page_token field.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alerts": [],
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
      params: Params$Resource$Alerts$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Alerts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAppsAlertcenterV1beta1ListAlertsResponse>;
    list(
      params: Params$Resource$Alerts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Alerts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1ListAlertsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1ListAlertsResponse>
    ): void;
    list(
      params: Params$Resource$Alerts$List,
      callback: BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1ListAlertsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1ListAlertsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Alerts$List
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1ListAlertsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1ListAlertsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1ListAlertsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAppsAlertcenterV1beta1ListAlertsResponse>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$GoogleAppsAlertcenterV1beta1ListAlertsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsAlertcenterV1beta1ListAlertsResponse>(
          parameters
        );
      }
    }

    /**
     * Restores, or "undeletes", an alert that was marked for deletion within the past 30 days. Attempting to undelete an alert which was marked for deletion over 30 days ago (which has been removed from the Alert Center database) or a nonexistent alert returns a `NOT_FOUND` error. Attempting to undelete an alert which has not been marked for deletion has no effect.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/alertcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const alertcenter = google.alertcenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.alerts'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await alertcenter.alerts.undelete({
     *     // Required. The identifier of the alert to undelete.
     *     alertId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "customerId": "my_customerId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alertId": "my_alertId",
     *   //   "createTime": "my_createTime",
     *   //   "customerId": "my_customerId",
     *   //   "data": {},
     *   //   "deleted": false,
     *   //   "endTime": "my_endTime",
     *   //   "etag": "my_etag",
     *   //   "metadata": {},
     *   //   "securityInvestigationToolLink": "my_securityInvestigationToolLink",
     *   //   "source": "my_source",
     *   //   "startTime": "my_startTime",
     *   //   "type": "my_type",
     *   //   "updateTime": "my_updateTime"
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
    undelete(
      params: Params$Resource$Alerts$Undelete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    undelete(
      params?: Params$Resource$Alerts$Undelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAppsAlertcenterV1beta1Alert>;
    undelete(
      params: Params$Resource$Alerts$Undelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    undelete(
      params: Params$Resource$Alerts$Undelete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1Alert>,
      callback: BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1Alert>
    ): void;
    undelete(
      params: Params$Resource$Alerts$Undelete,
      callback: BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1Alert>
    ): void;
    undelete(
      callback: BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1Alert>
    ): void;
    undelete(
      paramsOrCallback?:
        | Params$Resource$Alerts$Undelete
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1Alert>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1Alert>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1Alert>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAppsAlertcenterV1beta1Alert>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$GoogleAppsAlertcenterV1beta1Alert>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsAlertcenterV1beta1Alert>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Alerts$Batchdelete
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsAlertcenterV1beta1BatchDeleteAlertsRequest;
  }
  export interface Params$Resource$Alerts$Batchundelete
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsAlertcenterV1beta1BatchUndeleteAlertsRequest;
  }
  export interface Params$Resource$Alerts$Delete extends StandardParameters {
    /**
     * Required. The identifier of the alert to delete.
     */
    alertId?: string;
    /**
     * Optional. The unique identifier of the Google Workspace organization account of the customer the alert is associated with. Inferred from the caller identity if not provided.
     */
    customerId?: string;
  }
  export interface Params$Resource$Alerts$Get extends StandardParameters {
    /**
     * Required. The identifier of the alert to retrieve.
     */
    alertId?: string;
    /**
     * Optional. The unique identifier of the Google Workspace organization account of the customer the alert is associated with. Inferred from the caller identity if not provided.
     */
    customerId?: string;
  }
  export interface Params$Resource$Alerts$Getmetadata
    extends StandardParameters {
    /**
     * Required. The identifier of the alert this metadata belongs to.
     */
    alertId?: string;
    /**
     * Optional. The unique identifier of the Google Workspace organization account of the customer the alert metadata is associated with. Inferred from the caller identity if not provided.
     */
    customerId?: string;
  }
  export interface Params$Resource$Alerts$List extends StandardParameters {
    /**
     * Optional. The unique identifier of the Google Workspace organization account of the customer the alerts are associated with. Inferred from the caller identity if not provided.
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
     * Required. The identifier of the alert to undelete.
     */
    alertId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsAlertcenterV1beta1UndeleteAlertRequest;
  }

  export class Resource$Alerts$Feedback {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates new feedback for an alert. Attempting to create a feedback for a non-existent alert returns `NOT_FOUND` error. Attempting to create a feedback for an alert that is marked for deletion returns `FAILED_PRECONDITION' error.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/alertcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const alertcenter = google.alertcenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.alerts'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await alertcenter.alerts.feedback.create({
     *     // Required. The identifier of the alert this feedback belongs to.
     *     alertId: 'placeholder-value',
     *     // Optional. The unique identifier of the Google Workspace organization account of the customer the alert is associated with. Inferred from the caller identity if not provided.
     *     customerId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alertId": "my_alertId",
     *       //   "createTime": "my_createTime",
     *       //   "customerId": "my_customerId",
     *       //   "email": "my_email",
     *       //   "feedbackId": "my_feedbackId",
     *       //   "type": "my_type"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alertId": "my_alertId",
     *   //   "createTime": "my_createTime",
     *   //   "customerId": "my_customerId",
     *   //   "email": "my_email",
     *   //   "feedbackId": "my_feedbackId",
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
      params: Params$Resource$Alerts$Feedback$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Alerts$Feedback$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAppsAlertcenterV1beta1AlertFeedback>;
    create(
      params: Params$Resource$Alerts$Feedback$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Alerts$Feedback$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1AlertFeedback>,
      callback: BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1AlertFeedback>
    ): void;
    create(
      params: Params$Resource$Alerts$Feedback$Create,
      callback: BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1AlertFeedback>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1AlertFeedback>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Alerts$Feedback$Create
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1AlertFeedback>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1AlertFeedback>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1AlertFeedback>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAppsAlertcenterV1beta1AlertFeedback>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$GoogleAppsAlertcenterV1beta1AlertFeedback>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsAlertcenterV1beta1AlertFeedback>(
          parameters
        );
      }
    }

    /**
     * Lists all the feedback for an alert. Attempting to list feedbacks for a non-existent alert returns `NOT_FOUND` error.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/alertcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const alertcenter = google.alertcenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.alerts'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await alertcenter.alerts.feedback.list({
     *     // Required. The alert identifier. The "-" wildcard could be used to represent all alerts.
     *     alertId: 'placeholder-value',
     *     // Optional. The unique identifier of the Google Workspace organization account of the customer the alert feedback are associated with. Inferred from the caller identity if not provided.
     *     customerId: 'placeholder-value',
     *     // Optional. A query string for filtering alert feedback results. For more details, see [Query filters](/admin-sdk/alertcenter/guides/query-filters) and [Supported query filter fields](/admin-sdk/alertcenter/reference/filter-fields#alerts.feedback.list).
     *     filter: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "feedback": []
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
      params: Params$Resource$Alerts$Feedback$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Alerts$Feedback$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAppsAlertcenterV1beta1ListAlertFeedbackResponse>;
    list(
      params: Params$Resource$Alerts$Feedback$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Alerts$Feedback$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1ListAlertFeedbackResponse>,
      callback: BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1ListAlertFeedbackResponse>
    ): void;
    list(
      params: Params$Resource$Alerts$Feedback$List,
      callback: BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1ListAlertFeedbackResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1ListAlertFeedbackResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Alerts$Feedback$List
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1ListAlertFeedbackResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1ListAlertFeedbackResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1ListAlertFeedbackResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAppsAlertcenterV1beta1ListAlertFeedbackResponse>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$GoogleAppsAlertcenterV1beta1ListAlertFeedbackResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsAlertcenterV1beta1ListAlertFeedbackResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Alerts$Feedback$Create
    extends StandardParameters {
    /**
     * Required. The identifier of the alert this feedback belongs to.
     */
    alertId?: string;
    /**
     * Optional. The unique identifier of the Google Workspace organization account of the customer the alert is associated with. Inferred from the caller identity if not provided.
     */
    customerId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsAlertcenterV1beta1AlertFeedback;
  }
  export interface Params$Resource$Alerts$Feedback$List
    extends StandardParameters {
    /**
     * Required. The alert identifier. The "-" wildcard could be used to represent all alerts.
     */
    alertId?: string;
    /**
     * Optional. The unique identifier of the Google Workspace organization account of the customer the alert feedback are associated with. Inferred from the caller identity if not provided.
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
     * Returns customer-level settings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/alertcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const alertcenter = google.alertcenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.alerts'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await alertcenter.getSettings({
     *     // Optional. The unique identifier of the Google Workspace organization account of the customer the alert settings are associated with. Inferred from the caller identity if not provided.
     *     customerId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "notifications": []
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
    getSettings(
      params: Params$Resource$V1beta1$Getsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getSettings(
      params?: Params$Resource$V1beta1$Getsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAppsAlertcenterV1beta1Settings>;
    getSettings(
      params: Params$Resource$V1beta1$Getsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSettings(
      params: Params$Resource$V1beta1$Getsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1Settings>,
      callback: BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1Settings>
    ): void;
    getSettings(
      params: Params$Resource$V1beta1$Getsettings,
      callback: BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1Settings>
    ): void;
    getSettings(
      callback: BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1Settings>
    ): void;
    getSettings(
      paramsOrCallback?:
        | Params$Resource$V1beta1$Getsettings
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1Settings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1Settings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1Settings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAppsAlertcenterV1beta1Settings>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$GoogleAppsAlertcenterV1beta1Settings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsAlertcenterV1beta1Settings>(
          parameters
        );
      }
    }

    /**
     * Updates the customer-level settings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/alertcenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const alertcenter = google.alertcenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.alerts'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await alertcenter.updateSettings({
     *     // Optional. The unique identifier of the Google Workspace organization account of the customer the alert settings are associated with. Inferred from the caller identity if not provided.
     *     customerId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "notifications": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "notifications": []
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
    updateSettings(
      params: Params$Resource$V1beta1$Updatesettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateSettings(
      params?: Params$Resource$V1beta1$Updatesettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAppsAlertcenterV1beta1Settings>;
    updateSettings(
      params: Params$Resource$V1beta1$Updatesettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateSettings(
      params: Params$Resource$V1beta1$Updatesettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1Settings>,
      callback: BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1Settings>
    ): void;
    updateSettings(
      params: Params$Resource$V1beta1$Updatesettings,
      callback: BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1Settings>
    ): void;
    updateSettings(
      callback: BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1Settings>
    ): void;
    updateSettings(
      paramsOrCallback?:
        | Params$Resource$V1beta1$Updatesettings
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1Settings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1Settings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsAlertcenterV1beta1Settings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleAppsAlertcenterV1beta1Settings>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$GoogleAppsAlertcenterV1beta1Settings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsAlertcenterV1beta1Settings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$V1beta1$Getsettings
    extends StandardParameters {
    /**
     * Optional. The unique identifier of the Google Workspace organization account of the customer the alert settings are associated with. Inferred from the caller identity if not provided.
     */
    customerId?: string;
  }
  export interface Params$Resource$V1beta1$Updatesettings
    extends StandardParameters {
    /**
     * Optional. The unique identifier of the Google Workspace organization account of the customer the alert settings are associated with. Inferred from the caller identity if not provided.
     */
    customerId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsAlertcenterV1beta1Settings;
  }
}
