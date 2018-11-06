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
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';
import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from 'googleapis-common';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace alertcenter_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
  }

  /**
   * G Suite Alert Center API
   *
   * G Suite API for alerts managment.
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
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    alerts: Resource$Alerts;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.alerts = new Resource$Alerts(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * Alerts for user account warning events.
   */
  export interface Schema$AccountWarning {
    /**
     * Required. Email of the user that this event belongs to.
     */
    email?: string;
    /**
     * Optional. Details of the login action associated with the warning event.
     * This is only available for: Suspicious login Suspicious login (less
     * secure app) User suspended (suspicious activity)
     */
    loginDetails?: Schema$LoginDetails;
  }
  /**
   * An alert affecting a customer. All fields are read-only once created.
   */
  export interface Schema$Alert {
    /**
     * Output only. The unique identifier for the alert.
     */
    alertId?: string;
    /**
     * Output only. The time this alert was created. Assigned by the server.
     */
    createTime?: string;
    /**
     * Output only. The unique identifier of the Google account of the customer.
     */
    customerId?: string;
    /**
     * Optional. Specific data associated with this alert. e.g.
     * google.apps.alertcenter.type.DeviceCompromised.
     */
    data?: any;
    /**
     * Optional. The time this alert was no longer active. If provided, the end
     * time must not be earlier than the start time. If not provided, the end
     * time will default to the start time.
     */
    endTime?: string;
    /**
     * Output only. An optional Security Investigation Tool query for this
     * alert.
     */
    securityInvestigationToolLink?: string;
    /**
     * Required. A unique identifier for the system that is reported the alert.
     * Supported sources are any of the following:  * &quot;Google
     * Operations&quot;  * &quot;Mobile device management&quot;  * &quot;Gmail
     * phishing&quot;  * &quot;Domain wide takeout&quot;  * &quot;Government
     * attack warning&quot;  * &quot;Google identity&quot;
     */
    source?: string;
    /**
     * Required. The time this alert became active.
     */
    startTime?: string;
    /**
     * Required. The type of the alert.  Supported types are any of the
     * following:  * &quot;Google Operations&quot;  * &quot;Device
     * compromised&quot;  * &quot;Suspicious activity&quot;  * &quot;User
     * reported phishing&quot;  * &quot;Misconfigured whitelist&quot;  *
     * &quot;Customer takeout initiated&quot;  * &quot;Government attack
     * warning&quot;  * &quot;User reported spam spike&quot;  * &quot;Suspicious
     * message reported&quot;  * &quot;Phishing reclassification&quot;  *
     * &quot;Malware reclassification&quot; LINT.IfChange  * &quot;Suspicious
     * login&quot;  * &quot;Suspicious login (less secure app)&quot;  *
     * &quot;User suspended&quot;  * &quot;Leaked password&quot;  * &quot;User
     * suspended (suspicious activity)&quot;  * &quot;User suspended
     * (spam)&quot;  * &quot;User suspended (spam through relay)&quot;
     * LINT.ThenChange(//depot/google3/apps/albert/data/albert_enums.proto)
     */
    type?: string;
  }
  /**
   * A customer feedback about an alert.
   */
  export interface Schema$AlertFeedback {
    /**
     * Output only. The alert identifier.
     */
    alertId?: string;
    /**
     * Output only. The time this feedback was created. Assigned by the server.
     */
    createTime?: string;
    /**
     * Output only. The unique identifier of the Google account of the customer.
     */
    customerId?: string;
    /**
     * Output only. The email of the user that provided the feedback.
     */
    email?: string;
    /**
     * Output only. A unique identifier for the feedback. When creating a new
     * feedback the system will assign one.
     */
    feedbackId?: string;
    /**
     * Required. The type of the feedback.
     */
    type?: string;
  }
  /**
   * Attachment with application-specific information about an alert.
   */
  export interface Schema$Attachment {
    /**
     * CSV file attachment.
     */
    csv?: Schema$Csv;
  }
  /**
   * Alert for setting the domain or ip that malicious email comes from as
   * whitelisted domain or ip in Gmail advanced settings.
   */
  export interface Schema$BadWhitelist {
    /**
     * Domain id.
     */
    domainId?: Schema$DomainId;
    /**
     * Entity whose actions triggered a Gmail phishing alert.
     */
    maliciousEntity?: Schema$MaliciousEntity;
    /**
     * Every alert could contain multiple messages.
     */
    messages?: Schema$GmailMessageInfo[];
    /**
     * The source ip address of the malicious email. e.g. &quot;127.0.0.1&quot;.
     */
    sourceIp?: string;
  }
  /**
   * Representation of a CSV file attachment, as a list of column headers and a
   * list of data rows.
   */
  export interface Schema$Csv {
    /**
     * List of data rows in a CSV file, as string arrays rather than as a single
     * comma-separated string.
     */
    dataRows?: Schema$CsvRow[];
    /**
     * List of headers for data columns in a CSV file.
     */
    headers?: string[];
  }
  /**
   * Representation of a single data row in a CSV file.
   */
  export interface Schema$CsvRow {
    /**
     * Data entries in a CSV file row, as a string array rather than a single
     * comma-separated string.
     */
    entries?: string[];
  }
  /**
   * A mobile device compromised alert. Derived from audit logs.
   */
  export interface Schema$DeviceCompromised {
    /**
     * The email of the user this alert was created for.
     */
    email?: string;
    /**
     * Required. List of security events.
     */
    events?: Schema$DeviceCompromisedSecurityDetail[];
  }
  /**
   * Detailed information of a single MDM device compromised event.
   */
  export interface Schema$DeviceCompromisedSecurityDetail {
    /**
     * Device compromised state includes: &quot;Compromised&quot; and &quot;Not
     * Compromised&quot;.
     */
    deviceCompromisedState?: string;
    /**
     * Required. Device Info.
     */
    deviceId?: string;
    /**
     * The model of the device.
     */
    deviceModel?: string;
    /**
     * The type of the device.
     */
    deviceType?: string;
    /**
     * Required for IOS, empty for others.
     */
    iosVendorId?: string;
    /**
     * The device resource id.
     */
    resourceId?: string;
    /**
     * The serial number of the device.
     */
    serialNumber?: string;
  }
  /**
   * Domain id of Gmail phishing alerts.
   */
  export interface Schema$DomainId {
    /**
     * The primary domain for the customer.
     */
    customerPrimaryDomain?: string;
  }
  /**
   * A takeout operation for the entire domain was initiated by an admin.
   * Derived from audit logs.
   */
  export interface Schema$DomainWideTakeoutInitiated {
    /**
     * Email of the admin who initiated the takeout.
     */
    email?: string;
    /**
     * takeout request id.
     */
    takeoutRequestId?: string;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated
   * empty messages in your APIs. A typical example is to use it as the request
   * or the response type of an API method. For instance:      service Foo { rpc
   * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
   * representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * Details of a message in phishing spike alert.
   */
  export interface Schema$GmailMessageInfo {
    /**
     * SHA256 Hash of email&#39;s attachment and all MIME parts.
     */
    attachmentsSha256Hash?: string[];
    /**
     * The date the malicious email was sent.
     */
    date?: string;
    /**
     * Hash of message body text.
     */
    md5HashMessageBody?: string;
    /**
     * MD5 Hash of email&#39;s subject. (Only available for reported emails).
     */
    md5HashSubject?: string;
    /**
     * Snippet of the message body text. (Only available for reported emails)
     */
    messageBodySnippet?: string;
    /**
     * Message id.
     */
    messageId?: string;
    /**
     * Recipient of this email.
     */
    recipient?: string;
    /**
     * Email subject text. (Only available for reported emails).
     */
    subjectText?: string;
  }
  /**
   * An incident reported by Google Operations for a G Suite application.
   */
  export interface Schema$GoogleOperations {
    /**
     * List of emails which correspond to the users directly affected by the
     * incident.
     */
    affectedUserEmails?: string[];
    /**
     * Optional application-specific data for an incident, provided when the G
     * Suite application which reported the incident cannot be completely
     * restored to a valid state.
     */
    attachmentData?: Schema$Attachment;
    /**
     * Detailed, freeform incident description.
     */
    description?: string;
    /**
     * One-line incident description.
     */
    title?: string;
  }
  /**
   * Response message for an alert feedback listing request.
   */
  export interface Schema$ListAlertFeedbackResponse {
    /**
     * The list of alert feedback. Result is ordered descending by creation
     * time.
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
     * If not empty, indicates that there may be more alerts that match the
     * request; this value can be passed in a new ListAlertsRequest to get the
     * next page of values.
     */
    nextPageToken?: string;
  }
  /**
   * Details of the login action
   */
  export interface Schema$LoginDetails {
    /**
     * Required. Human readable IP address (e.g., 11.22.33.44) that is
     * associated with the warning event.
     */
    ipAddress?: string;
    /**
     * Required. Login time that is associated with the warning event.
     */
    loginTime?: string;
  }
  /**
   * Proto for all phishing alerts with common payload. Supported types are any
   * of the following: User reported phishing User reported spam spike
   * Suspicious message reported Phishing reclassification Malware
   * reclassification
   */
  export interface Schema$MailPhishing {
    /**
     * Domain id.
     */
    domainId?: Schema$DomainId;
    /**
     * If true, the email is originated from within the organization.
     */
    isInternal?: boolean;
    /**
     * Entity whose actions triggered a Gmail phishing alert.
     */
    maliciousEntity?: Schema$MaliciousEntity;
    /**
     * Every alert could contain multiple messages.
     */
    messages?: Schema$GmailMessageInfo[];
  }
  /**
   * Entity whose actions triggered a Gmail phishing alert.
   */
  export interface Schema$MaliciousEntity {
    /**
     * Sender email address.
     */
    fromHeader?: string;
  }
  /**
   * Alert for a spike in user reported phishing. This will be deprecated in
   * favor of MailPhishing.
   */
  export interface Schema$PhishingSpike {
    /**
     * Domain id.
     */
    domainId?: Schema$DomainId;
    /**
     * If true, the email is originated from within the organization.
     */
    isInternal?: boolean;
    /**
     * Entity whose actions triggered a Gmail phishing alert.
     */
    maliciousEntity?: Schema$MaliciousEntity;
    /**
     * Every alert could contain multiple messages.
     */
    messages?: Schema$GmailMessageInfo[];
  }
  /**
   * A state sponsored attack alert. Derived from audit logs.
   */
  export interface Schema$StateSponsoredAttack {
    /**
     * The email of the user this incident was created for.
     */
    email?: string;
  }
  /**
   * A mobile suspicious activity alert. Derived from audit logs.
   */
  export interface Schema$SuspiciousActivity {
    /**
     * The email of the user this alert was created for.
     */
    email?: string;
    /**
     * Required. List of security events.
     */
    events?: Schema$SuspiciousActivitySecurityDetail[];
  }
  /**
   * Detailed information of a single MDM suspicious activity event.
   */
  export interface Schema$SuspiciousActivitySecurityDetail {
    /**
     * Required. Device Info.
     */
    deviceId?: string;
    /**
     * The model of the device.
     */
    deviceModel?: string;
    /**
     * Device property which is changed.
     */
    deviceProperty?: string;
    /**
     * The type of the device.
     */
    deviceType?: string;
    /**
     * Required for IOS, empty for others.
     */
    iosVendorId?: string;
    /**
     * New value of the device property after change.
     */
    newValue?: string;
    /**
     * Old value of the device property before change.
     */
    oldValue?: string;
    /**
     * The device resource id.
     */
    resourceId?: string;
    /**
     * The serial number of the device.
     */
    serialNumber?: string;
  }


  export class Resource$Alerts {
    root: Alertcenter;
    feedback: Resource$Alerts$Feedback;
    constructor(root: Alertcenter) {
      this.root = root;
      this.getRoot.bind(this);
      this.feedback = new Resource$Alerts$Feedback(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * alertcenter.alerts.delete
     * @desc Marks the specified alert for deletion. An alert that has been
     * marked for deletion will be excluded from the results of a List operation
     * by default, and will be removed from the Alert Center after 30 days.
     * Marking an alert for deletion will have no effect on an alert which has
     * already been marked for deletion. Attempting to mark a nonexistent alert
     * for deletion will return NOT_FOUND.
     * @alias alertcenter.alerts.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.alertId Required. The identifier of the alert to delete.
     * @param {string=} params.customerId Optional. The unique identifier of the Google account of the customer the alert is associated with. This is obfuscated and not the plain customer ID as stored internally. Inferred from the caller identity if not provided.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(params?: Params$Resource$Alerts$Delete, options?: MethodOptions):
        AxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Alerts$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Alerts$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Alerts$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
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
              url: (rootUrl + '/v1beta1/alerts/{alertId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['alertId'],
        pathParams: ['alertId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * alertcenter.alerts.get
     * @desc Gets the specified alert.
     * @alias alertcenter.alerts.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.alertId Required. The identifier of the alert to retrieve.
     * @param {string=} params.customerId Optional. The unique identifier of the Google account of the customer the alert is associated with. This is obfuscated and not the plain customer ID as stored internally. Inferred from the caller identity if not provided.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Alerts$Get,
        options?: MethodOptions): AxiosPromise<Schema$Alert>;
    get(params: Params$Resource$Alerts$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Alert>,
        callback: BodyResponseCallback<Schema$Alert>): void;
    get(params: Params$Resource$Alerts$Get,
        callback: BodyResponseCallback<Schema$Alert>): void;
    get(callback: BodyResponseCallback<Schema$Alert>): void;
    get(paramsOrCallback?: Params$Resource$Alerts$Get|
        BodyResponseCallback<Schema$Alert>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Alert>,
        callback?: BodyResponseCallback<Schema$Alert>):
        void|AxiosPromise<Schema$Alert> {
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
              url: (rootUrl + '/v1beta1/alerts/{alertId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['alertId'],
        pathParams: ['alertId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Alert>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Alert>(parameters);
      }
    }


    /**
     * alertcenter.alerts.list
     * @desc Lists all the alerts for the current user and application.
     * @alias alertcenter.alerts.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.customerId Optional. The unique identifier of the Google account of the customer the alerts are associated with. This is obfuscated and not the plain customer ID as stored internally. Inferred from the caller identity if not provided.
     * @param {string=} params.filter Optional. Query string for filtering alert results. This string must be specified as an expression or list of expressions, using the following grammar:  ### Expressions  An expression has the general form `<field> <operator> <value>`.  A field or value which contains a space or a colon must be enclosed by double quotes.  #### Operators  Operators follow the BNF specification:  `<equalityOperator> ::= "=" | ":"`  `<relationalOperator> ::= "<" | ">" | "<=" | ">="`  Relational operators are defined only for timestamp fields. Equality operators are defined only for string fields.  #### Timestamp fields  The value supplied for a timestamp field must be an [RFC 3339](https://tools.ietf.org/html/rfc3339) date-time string.  Supported timestamp fields are `create_time`, `start_time`, and `end_time`.  #### String fields  The value supplied for a string field may be an arbitrary string.  #### Examples  To query for all alerts created on or after April 5, 2018:  `create_time >= "2018-04-05T00:00:00Z"`  To query for all alerts from the source "Gmail phishing":  `source:"Gmail phishing"`  ### Joining expressions  Expressions may be joined to form a more complex query. The BNF specification is:  `<expressionList> ::= <expression> | <expressionList> <conjunction> <expressionList> | <negation> <expressionList>` `<conjunction> ::= "AND" | "OR" | ""` `<negation> ::= "NOT"`  Using the empty string as a conjunction acts as an implicit AND.  The precedence of joining operations, from highest to lowest, is NOT, AND, OR.  #### Examples  To query for all alerts which started in 2017:  `start_time >= "2017-01-01T00:00:00Z" AND start_time < "2018-01-01T00:00:00Z"`  To query for all user reported phishing alerts from the source "Gmail phishing":  `type:"User reported phishing" source:"Gmail phishing"`
     * @param {string=} params.orderBy Optional. Sort the list results by a certain order. If not specified results may be returned in arbitrary order. You can sort the results in a descending order based on the creation timestamp using order_by="create_time desc". Currently, only sorting by create_time desc is supported.
     * @param {integer=} params.pageSize Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string=} params.pageToken Optional. A token identifying a page of results the server should return. If empty, a new iteration is started. To continue an iteration, pass in the value from the previous ListAlertsResponse's next_page_token field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Alerts$List, options?: MethodOptions):
        AxiosPromise<Schema$ListAlertsResponse>;
    list(
        params: Params$Resource$Alerts$List,
        options: MethodOptions|BodyResponseCallback<Schema$ListAlertsResponse>,
        callback: BodyResponseCallback<Schema$ListAlertsResponse>): void;
    list(
        params: Params$Resource$Alerts$List,
        callback: BodyResponseCallback<Schema$ListAlertsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListAlertsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Alerts$List|
        BodyResponseCallback<Schema$ListAlertsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListAlertsResponse>,
        callback?: BodyResponseCallback<Schema$ListAlertsResponse>):
        void|AxiosPromise<Schema$ListAlertsResponse> {
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
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListAlertsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListAlertsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Alerts$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The identifier of the alert to delete.
     */
    alertId?: string;
    /**
     * Optional. The unique identifier of the Google account of the customer the
     * alert is associated with. This is obfuscated and not the plain customer
     * ID as stored internally. Inferred from the caller identity if not
     * provided.
     */
    customerId?: string;
  }
  export interface Params$Resource$Alerts$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The identifier of the alert to retrieve.
     */
    alertId?: string;
    /**
     * Optional. The unique identifier of the Google account of the customer the
     * alert is associated with. This is obfuscated and not the plain customer
     * ID as stored internally. Inferred from the caller identity if not
     * provided.
     */
    customerId?: string;
  }
  export interface Params$Resource$Alerts$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Optional. The unique identifier of the Google account of the customer the
     * alerts are associated with. This is obfuscated and not the plain customer
     * ID as stored internally. Inferred from the caller identity if not
     * provided.
     */
    customerId?: string;
    /**
     * Optional. Query string for filtering alert results. This string must be
     * specified as an expression or list of expressions, using the following
     * grammar:  ### Expressions  An expression has the general form `<field>
     * <operator> <value>`.  A field or value which contains a space or a colon
     * must be enclosed by double quotes.  #### Operators  Operators follow the
     * BNF specification:  `<equalityOperator> ::= "=" | ":"`
     * `<relationalOperator> ::= "<" | ">" | "<=" | ">="`  Relational operators
     * are defined only for timestamp fields. Equality operators are defined
     * only for string fields.  #### Timestamp fields  The value supplied for a
     * timestamp field must be an [RFC
     * 3339](https://tools.ietf.org/html/rfc3339) date-time string.  Supported
     * timestamp fields are `create_time`, `start_time`, and `end_time`.  ####
     * String fields  The value supplied for a string field may be an arbitrary
     * string.  #### Examples  To query for all alerts created on or after April
     * 5, 2018:  `create_time >= "2018-04-05T00:00:00Z"`  To query for all
     * alerts from the source "Gmail phishing":  `source:"Gmail phishing"`  ###
     * Joining expressions  Expressions may be joined to form a more complex
     * query. The BNF specification is:  `<expressionList> ::= <expression> |
     * <expressionList> <conjunction> <expressionList> | <negation>
     * <expressionList>` `<conjunction> ::= "AND" | "OR" | ""` `<negation> ::=
     * "NOT"`  Using the empty string as a conjunction acts as an implicit AND.
     * The precedence of joining operations, from highest to lowest, is NOT,
     * AND, OR.  #### Examples  To query for all alerts which started in 2017:
     * `start_time >= "2017-01-01T00:00:00Z" AND start_time <
     * "2018-01-01T00:00:00Z"`  To query for all user reported phishing alerts
     * from the source "Gmail phishing":  `type:"User reported phishing"
     * source:"Gmail phishing"`
     */
    filter?: string;
    /**
     * Optional. Sort the list results by a certain order. If not specified
     * results may be returned in arbitrary order. You can sort the results in a
     * descending order based on the creation timestamp using
     * order_by="create_time desc". Currently, only sorting by create_time desc
     * is supported.
     */
    orderBy?: string;
    /**
     * Optional. Requested page size. Server may return fewer items than
     * requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return.
     * If empty, a new iteration is started. To continue an iteration, pass in
     * the value from the previous ListAlertsResponse's next_page_token field.
     */
    pageToken?: string;
  }

  export class Resource$Alerts$Feedback {
    root: Alertcenter;
    constructor(root: Alertcenter) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * alertcenter.alerts.feedback.create
     * @desc Creates a new alert feedback.
     * @alias alertcenter.alerts.feedback.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.alertId Required. The identifier of the alert this feedback belongs to. Returns a NOT_FOUND error if no such alert.
     * @param {string=} params.customerId Optional. The unique identifier of the Google account of the customer the alert's feedback is associated with. This is obfuscated and not the plain customer ID as stored internally. Inferred from the caller identity if not provided.
     * @param {().AlertFeedback} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Alerts$Feedback$Create,
        options?: MethodOptions): AxiosPromise<Schema$AlertFeedback>;
    create(
        params: Params$Resource$Alerts$Feedback$Create,
        options: MethodOptions|BodyResponseCallback<Schema$AlertFeedback>,
        callback: BodyResponseCallback<Schema$AlertFeedback>): void;
    create(
        params: Params$Resource$Alerts$Feedback$Create,
        callback: BodyResponseCallback<Schema$AlertFeedback>): void;
    create(callback: BodyResponseCallback<Schema$AlertFeedback>): void;
    create(
        paramsOrCallback?: Params$Resource$Alerts$Feedback$Create|
        BodyResponseCallback<Schema$AlertFeedback>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$AlertFeedback>,
        callback?: BodyResponseCallback<Schema$AlertFeedback>):
        void|AxiosPromise<Schema$AlertFeedback> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Alerts$Feedback$Create;
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
              url: (rootUrl + '/v1beta1/alerts/{alertId}/feedback')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['alertId'],
        pathParams: ['alertId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$AlertFeedback>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AlertFeedback>(parameters);
      }
    }


    /**
     * alertcenter.alerts.feedback.list
     * @desc Lists all the feedback for an alert.
     * @alias alertcenter.alerts.feedback.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.alertId Required. The alert identifier. If the alert does not exist returns a NOT_FOUND error.
     * @param {string=} params.customerId Optional. The unique identifier of the Google account of the customer the alert is associated with. This is obfuscated and not the plain customer ID as stored internally. Inferred from the caller identity if not provided.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Alerts$Feedback$List, options?: MethodOptions):
        AxiosPromise<Schema$ListAlertFeedbackResponse>;
    list(
        params: Params$Resource$Alerts$Feedback$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListAlertFeedbackResponse>,
        callback: BodyResponseCallback<Schema$ListAlertFeedbackResponse>): void;
    list(
        params: Params$Resource$Alerts$Feedback$List,
        callback: BodyResponseCallback<Schema$ListAlertFeedbackResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListAlertFeedbackResponse>):
        void;
    list(
        paramsOrCallback?: Params$Resource$Alerts$Feedback$List|
        BodyResponseCallback<Schema$ListAlertFeedbackResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListAlertFeedbackResponse>,
        callback?: BodyResponseCallback<Schema$ListAlertFeedbackResponse>):
        void|AxiosPromise<Schema$ListAlertFeedbackResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Alerts$Feedback$List;
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
              url: (rootUrl + '/v1beta1/alerts/{alertId}/feedback')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['alertId'],
        pathParams: ['alertId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListAlertFeedbackResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$ListAlertFeedbackResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Alerts$Feedback$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The identifier of the alert this feedback belongs to. Returns a
     * NOT_FOUND error if no such alert.
     */
    alertId?: string;
    /**
     * Optional. The unique identifier of the Google account of the customer the
     * alert's feedback is associated with. This is obfuscated and not the plain
     * customer ID as stored internally. Inferred from the caller identity if
     * not provided.
     */
    customerId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AlertFeedback;
  }
  export interface Params$Resource$Alerts$Feedback$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The alert identifier. If the alert does not exist returns a
     * NOT_FOUND error.
     */
    alertId?: string;
    /**
     * Optional. The unique identifier of the Google account of the customer the
     * alert is associated with. This is obfuscated and not the plain customer
     * ID as stored internally. Inferred from the caller identity if not
     * provided.
     */
    customerId?: string;
  }
}
