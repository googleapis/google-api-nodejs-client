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

export namespace accessapproval_v1beta1 {
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
   * Access Approval API
   *
   * An API for controlling access to data by Google personnel.
   *
   * @example
   * const {google} = require('googleapis');
   * const accessapproval = google.accessapproval('v1beta1');
   *
   * @namespace accessapproval
   * @type {Function}
   * @version v1beta1
   * @variation v1beta1
   * @param {object=} options Options for Accessapproval
   */
  export class Accessapproval {
    context: APIRequestContext;
    folders: Resource$Folders;
    organizations: Resource$Organizations;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.folders = new Resource$Folders(this.context);
      this.organizations = new Resource$Organizations(this.context);
      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * Settings on a Project/Folder/Organization related to Access Approval.
   */
  export interface Schema$AccessApprovalSettings {
    /**
     * A list of Google Cloud Services for which the given resource has Access Approval enrolled. Access requests for the resource given by name against any of these services contained here will be required to have explicit approval. If name refers to an organization, enrollment can be done for individual services. If name refers to a folder or project, enrollment can only be done on an all or nothing basis.  If a cloud_product is repeated in this list, the first entry will be honored and all following entries will be discarded.
     */
    enrolledServices?: Schema$EnrolledService[];
    /**
     * The resource name of the settings. Format is one of: &lt;ol&gt;   &lt;li&gt;&quot;projects/{project_id}/accessApprovalSettings&quot;&lt;/li&gt;   &lt;li&gt;&quot;folders/{folder_id}/accessApprovalSettings&quot;&lt;/li&gt;   &lt;li&gt;&quot;organizations/{organization_id}/accessApprovalSettings&quot;&lt;/li&gt; &lt;ol&gt;
     */
    name?: string | null;
    /**
     * A list of email addresses to which notifications relating to approval requests should be sent. Notifications relating to a resource will be sent to all emails in the settings of ancestor resources of that resource.
     */
    notificationEmails?: string[] | null;
  }
  /**
   * Home office and physical location of the principal.
   */
  export interface Schema$AccessLocations {
    /**
     * The &quot;home office&quot; location of the principal. A two-letter country code (ISO 3166-1 alpha-2), such as &quot;US&quot;, &quot;DE&quot; or &quot;GB&quot; or a region code. In some limited situations Google systems may refer refer to a region code instead of a country code. Possible Region Codes: &lt;ol&gt;   &lt;li&gt;ASI: Asia&lt;/li&gt;   &lt;li&gt;EUR: Europe&lt;/li&gt;   &lt;li&gt;OCE: Oceania&lt;/li&gt;   &lt;li&gt;AFR: Africa&lt;/li&gt;   &lt;li&gt;NAM: North America&lt;/li&gt;   &lt;li&gt;SAM: South America&lt;/li&gt;   &lt;li&gt;ANT: Antarctica&lt;/li&gt;   &lt;li&gt;ANY: Any location&lt;/li&gt; &lt;/ol&gt;
     */
    principalOfficeCountry?: string | null;
    /**
     * Physical location of the principal at the time of the access. A two-letter country code (ISO 3166-1 alpha-2), such as &quot;US&quot;, &quot;DE&quot; or &quot;GB&quot; or a region code. In some limited situations Google systems may refer refer to a region code instead of a country code. Possible Region Codes: &lt;ol&gt;   &lt;li&gt;ASI: Asia&lt;/li&gt;   &lt;li&gt;EUR: Europe&lt;/li&gt;   &lt;li&gt;OCE: Oceania&lt;/li&gt;   &lt;li&gt;AFR: Africa&lt;/li&gt;   &lt;li&gt;NAM: North America&lt;/li&gt;   &lt;li&gt;SAM: South America&lt;/li&gt;   &lt;li&gt;ANT: Antarctica&lt;/li&gt;   &lt;li&gt;ANY: Any location&lt;/li&gt; &lt;/ol&gt;
     */
    principalPhysicalLocationCountry?: string | null;
  }
  export interface Schema$AccessReason {
    /**
     * More detail about certain reason types. See comments for each type above.
     */
    detail?: string | null;
    /**
     * Type of access justification.
     */
    type?: string | null;
  }
  /**
   * A request for the customer to approve access to a resource.
   */
  export interface Schema$ApprovalRequest {
    /**
     * Access was approved.
     */
    approve?: Schema$ApproveDecision;
    /**
     * The request was dismissed.
     */
    dismiss?: Schema$DismissDecision;
    /**
     * The resource name of the request. Format is &quot;{projects|folders|organizations}/{id}/approvalRequests/{approval_request_id}&quot;.
     */
    name?: string | null;
    /**
     * The requested expiration for the approval. If the request is approved, access will be granted from the time of approval until the expiration time.
     */
    requestedExpiration?: string | null;
    /**
     * The locations for which approval is being requested.
     */
    requestedLocations?: Schema$AccessLocations;
    /**
     * The justification for which approval is being requested.
     */
    requestedReason?: Schema$AccessReason;
    /**
     * The resource for which approval is being requested. The format of the resource name is defined at https://cloud.google.com/apis/design/resource_names. The resource name here may either be a &quot;full&quot; resource name (e.g. &quot;//library.googleapis.com/shelves/shelf1/books/book2&quot;) or a &quot;relative&quot; resource name (e.g. &quot;shelves/shelf1/books/book2&quot;) as described in the resource name specification.
     */
    requestedResourceName?: string | null;
    /**
     * Properties related to the resource represented by requested_resource_name.
     */
    requestedResourceProperties?: Schema$ResourceProperties;
    /**
     * The time at which approval was requested.
     */
    requestTime?: string | null;
  }
  /**
   * Request to approve an ApprovalRequest.
   */
  export interface Schema$ApproveApprovalRequestMessage {
    /**
     * The expiration time of this approval.
     */
    expireTime?: string | null;
  }
  /**
   * A decision that has been made to approve access to a resource.
   */
  export interface Schema$ApproveDecision {
    /**
     * The time at which approval was granted.
     */
    approveTime?: string | null;
    /**
     * The time at which the approval expires.
     */
    expireTime?: string | null;
  }
  /**
   * Request to dismiss an approval request.
   */
  export interface Schema$DismissApprovalRequestMessage {}
  /**
   * A decision that has been made to dismiss an approval request.
   */
  export interface Schema$DismissDecision {
    /**
     * The time at which the approval request was dismissed.
     */
    dismissTime?: string | null;
  }
  /**
   * Represents the enrollment of a cloud resource into a specific service.
   */
  export interface Schema$EnrolledService {
    /**
     * The product for which Access Approval will be enrolled. Allowed values are listed below (case-sensitive): &lt;ol&gt;   &lt;li&gt;all&lt;/li&gt;   &lt;li&gt;appengine.googleapis.com&lt;/li&gt;   &lt;li&gt;bigquery.googleapis.com&lt;/li&gt;   &lt;li&gt;bigtable.googleapis.com&lt;/li&gt;   &lt;li&gt;cloudkms.googleapis.com&lt;/li&gt;   &lt;li&gt;compute.googleapis.com&lt;/li&gt;   &lt;li&gt;dataflow.googleapis.com&lt;/li&gt;   &lt;li&gt;iam.googleapis.com&lt;/li&gt;   &lt;li&gt;pubsub.googleapis.com&lt;/li&gt;   &lt;li&gt;storage.googleapis.com&lt;/li&gt; &lt;ol&gt;
     */
    cloudProduct?: string | null;
    /**
     * The enrollment level of the service.
     */
    enrollmentLevel?: string | null;
  }
  /**
   * Response to listing of ApprovalRequest objects.
   */
  export interface Schema$ListApprovalRequestsResponse {
    /**
     * Approval request details.
     */
    approvalRequests?: Schema$ApprovalRequest[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more.
     */
    nextPageToken?: string | null;
  }
  /**
   * The properties associated with the resource of the request.
   */
  export interface Schema$ResourceProperties {
    /**
     * Whether an approval will exclude the descendants of the resource being requested.
     */
    excludesDescendants?: boolean | null;
  }

  export class Resource$Folders {
    context: APIRequestContext;
    approvalRequests: Resource$Folders$Approvalrequests;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.approvalRequests = new Resource$Folders$Approvalrequests(
        this.context
      );
    }

    /**
     * accessapproval.folders.getAccessApprovalSettings
     * @desc Gets the settings associated with a project, folder, or organization.
     * @alias accessapproval.folders.getAccessApprovalSettings
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the AccessApprovalSettings to retrieve.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getAccessApprovalSettings(
      params?: Params$Resource$Folders$Getaccessapprovalsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccessApprovalSettings>;
    getAccessApprovalSettings(
      params: Params$Resource$Folders$Getaccessapprovalsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccessApprovalSettings>,
      callback: BodyResponseCallback<Schema$AccessApprovalSettings>
    ): void;
    getAccessApprovalSettings(
      params: Params$Resource$Folders$Getaccessapprovalsettings,
      callback: BodyResponseCallback<Schema$AccessApprovalSettings>
    ): void;
    getAccessApprovalSettings(
      callback: BodyResponseCallback<Schema$AccessApprovalSettings>
    ): void;
    getAccessApprovalSettings(
      paramsOrCallback?:
        | Params$Resource$Folders$Getaccessapprovalsettings
        | BodyResponseCallback<Schema$AccessApprovalSettings>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AccessApprovalSettings>,
      callback?: BodyResponseCallback<Schema$AccessApprovalSettings>
    ): void | GaxiosPromise<Schema$AccessApprovalSettings> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Getaccessapprovalsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Getaccessapprovalsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://accessapproval.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$AccessApprovalSettings>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AccessApprovalSettings>(parameters);
      }
    }

    /**
     * accessapproval.folders.updateAccessApprovalSettings
     * @desc Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.
     * @alias accessapproval.folders.updateAccessApprovalSettings
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the settings. Format is one of: <ol>   <li>"projects/{project_id}/accessApprovalSettings"</li>   <li>"folders/{folder_id}/accessApprovalSettings"</li>   <li>"organizations/{organization_id}/accessApprovalSettings"</li> <ol>
     * @param {string=} params.updateMask The update mask applies to the settings. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If this field is left unset, only the notification_emails field will be updated.
     * @param {().AccessApprovalSettings} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateAccessApprovalSettings(
      params?: Params$Resource$Folders$Updateaccessapprovalsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccessApprovalSettings>;
    updateAccessApprovalSettings(
      params: Params$Resource$Folders$Updateaccessapprovalsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccessApprovalSettings>,
      callback: BodyResponseCallback<Schema$AccessApprovalSettings>
    ): void;
    updateAccessApprovalSettings(
      params: Params$Resource$Folders$Updateaccessapprovalsettings,
      callback: BodyResponseCallback<Schema$AccessApprovalSettings>
    ): void;
    updateAccessApprovalSettings(
      callback: BodyResponseCallback<Schema$AccessApprovalSettings>
    ): void;
    updateAccessApprovalSettings(
      paramsOrCallback?:
        | Params$Resource$Folders$Updateaccessapprovalsettings
        | BodyResponseCallback<Schema$AccessApprovalSettings>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AccessApprovalSettings>,
      callback?: BodyResponseCallback<Schema$AccessApprovalSettings>
    ): void | GaxiosPromise<Schema$AccessApprovalSettings> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Updateaccessapprovalsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Updateaccessapprovalsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://accessapproval.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$AccessApprovalSettings>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AccessApprovalSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Folders$Getaccessapprovalsettings
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the AccessApprovalSettings to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Updateaccessapprovalsettings
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the settings. Format is one of: <ol>   <li>"projects/{project_id}/accessApprovalSettings"</li>   <li>"folders/{folder_id}/accessApprovalSettings"</li>   <li>"organizations/{organization_id}/accessApprovalSettings"</li> <ol>
     */
    name?: string;
    /**
     * The update mask applies to the settings. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If this field is left unset, only the notification_emails field will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AccessApprovalSettings;
  }

  export class Resource$Folders$Approvalrequests {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * accessapproval.folders.approvalRequests.approve
     * @desc Approves a request and returns the updated ApprovalRequest.  Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
     * @alias accessapproval.folders.approvalRequests.approve
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the approval request to approve.
     * @param {().ApproveApprovalRequestMessage} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    approve(
      params?: Params$Resource$Folders$Approvalrequests$Approve,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ApprovalRequest>;
    approve(
      params: Params$Resource$Folders$Approvalrequests$Approve,
      options: MethodOptions | BodyResponseCallback<Schema$ApprovalRequest>,
      callback: BodyResponseCallback<Schema$ApprovalRequest>
    ): void;
    approve(
      params: Params$Resource$Folders$Approvalrequests$Approve,
      callback: BodyResponseCallback<Schema$ApprovalRequest>
    ): void;
    approve(callback: BodyResponseCallback<Schema$ApprovalRequest>): void;
    approve(
      paramsOrCallback?:
        | Params$Resource$Folders$Approvalrequests$Approve
        | BodyResponseCallback<Schema$ApprovalRequest>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ApprovalRequest>,
      callback?: BodyResponseCallback<Schema$ApprovalRequest>
    ): void | GaxiosPromise<Schema$ApprovalRequest> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Approvalrequests$Approve;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Approvalrequests$Approve;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://accessapproval.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:approve').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ApprovalRequest>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ApprovalRequest>(parameters);
      }
    }

    /**
     * accessapproval.folders.approvalRequests.dismiss
     * @desc Dismisses a request. Returns the updated ApprovalRequest.  NOTE: This does not deny access to the resource if another request has been made and approved. It is equivalent in effect to ignoring the request altogether.  Returns NOT_FOUND if the request does not exist.  Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
     * @alias accessapproval.folders.approvalRequests.dismiss
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the ApprovalRequest to dismiss.
     * @param {().DismissApprovalRequestMessage} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    dismiss(
      params?: Params$Resource$Folders$Approvalrequests$Dismiss,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ApprovalRequest>;
    dismiss(
      params: Params$Resource$Folders$Approvalrequests$Dismiss,
      options: MethodOptions | BodyResponseCallback<Schema$ApprovalRequest>,
      callback: BodyResponseCallback<Schema$ApprovalRequest>
    ): void;
    dismiss(
      params: Params$Resource$Folders$Approvalrequests$Dismiss,
      callback: BodyResponseCallback<Schema$ApprovalRequest>
    ): void;
    dismiss(callback: BodyResponseCallback<Schema$ApprovalRequest>): void;
    dismiss(
      paramsOrCallback?:
        | Params$Resource$Folders$Approvalrequests$Dismiss
        | BodyResponseCallback<Schema$ApprovalRequest>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ApprovalRequest>,
      callback?: BodyResponseCallback<Schema$ApprovalRequest>
    ): void | GaxiosPromise<Schema$ApprovalRequest> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Approvalrequests$Dismiss;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Approvalrequests$Dismiss;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://accessapproval.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:dismiss').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ApprovalRequest>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ApprovalRequest>(parameters);
      }
    }

    /**
     * accessapproval.folders.approvalRequests.get
     * @desc Gets an approval request. Returns NOT_FOUND if the request does not exist.
     * @alias accessapproval.folders.approvalRequests.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the approval request to retrieve.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Folders$Approvalrequests$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ApprovalRequest>;
    get(
      params: Params$Resource$Folders$Approvalrequests$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ApprovalRequest>,
      callback: BodyResponseCallback<Schema$ApprovalRequest>
    ): void;
    get(
      params: Params$Resource$Folders$Approvalrequests$Get,
      callback: BodyResponseCallback<Schema$ApprovalRequest>
    ): void;
    get(callback: BodyResponseCallback<Schema$ApprovalRequest>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Folders$Approvalrequests$Get
        | BodyResponseCallback<Schema$ApprovalRequest>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ApprovalRequest>,
      callback?: BodyResponseCallback<Schema$ApprovalRequest>
    ): void | GaxiosPromise<Schema$ApprovalRequest> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Approvalrequests$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Approvalrequests$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://accessapproval.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ApprovalRequest>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ApprovalRequest>(parameters);
      }
    }

    /**
     * accessapproval.folders.approvalRequests.list
     * @desc Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.
     * @alias accessapproval.folders.approvalRequests.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter A filter on the type of approval requests to retrieve. Must be one of the following values: <ol>   <li>[not set]: Requests that are pending or have active approvals.</li>   <li>ALL: All requests.</li>   <li>PENDING: Only pending requests.</li>   <li>ACTIVE: Only active (i.e. currently approved) requests.</li>   <li>DISMISSED: Only dismissed (including expired) requests.</li> </ol>
     * @param {integer=} params.pageSize Requested page size.
     * @param {string=} params.pageToken A token identifying the page of results to return.
     * @param {string} params.parent The parent resource. This may be "projects/{project_id}", "folders/{folder_id}", or "organizations/{organization_id}".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Folders$Approvalrequests$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListApprovalRequestsResponse>;
    list(
      params: Params$Resource$Folders$Approvalrequests$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListApprovalRequestsResponse>,
      callback: BodyResponseCallback<Schema$ListApprovalRequestsResponse>
    ): void;
    list(
      params: Params$Resource$Folders$Approvalrequests$List,
      callback: BodyResponseCallback<Schema$ListApprovalRequestsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListApprovalRequestsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Folders$Approvalrequests$List
        | BodyResponseCallback<Schema$ListApprovalRequestsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListApprovalRequestsResponse>,
      callback?: BodyResponseCallback<Schema$ListApprovalRequestsResponse>
    ): void | GaxiosPromise<Schema$ListApprovalRequestsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Approvalrequests$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Approvalrequests$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://accessapproval.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/approvalRequests').replace(
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
        createAPIRequest<Schema$ListApprovalRequestsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListApprovalRequestsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Folders$Approvalrequests$Approve
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the approval request to approve.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ApproveApprovalRequestMessage;
  }
  export interface Params$Resource$Folders$Approvalrequests$Dismiss
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the ApprovalRequest to dismiss.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DismissApprovalRequestMessage;
  }
  export interface Params$Resource$Folders$Approvalrequests$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the approval request to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Approvalrequests$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * A filter on the type of approval requests to retrieve. Must be one of the following values: <ol>   <li>[not set]: Requests that are pending or have active approvals.</li>   <li>ALL: All requests.</li>   <li>PENDING: Only pending requests.</li>   <li>ACTIVE: Only active (i.e. currently approved) requests.</li>   <li>DISMISSED: Only dismissed (including expired) requests.</li> </ol>
     */
    filter?: string;
    /**
     * Requested page size.
     */
    pageSize?: number;
    /**
     * A token identifying the page of results to return.
     */
    pageToken?: string;
    /**
     * The parent resource. This may be "projects/{project_id}", "folders/{folder_id}", or "organizations/{organization_id}".
     */
    parent?: string;
  }

  export class Resource$Organizations {
    context: APIRequestContext;
    approvalRequests: Resource$Organizations$Approvalrequests;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.approvalRequests = new Resource$Organizations$Approvalrequests(
        this.context
      );
    }

    /**
     * accessapproval.organizations.getAccessApprovalSettings
     * @desc Gets the settings associated with a project, folder, or organization.
     * @alias accessapproval.organizations.getAccessApprovalSettings
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the AccessApprovalSettings to retrieve.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getAccessApprovalSettings(
      params?: Params$Resource$Organizations$Getaccessapprovalsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccessApprovalSettings>;
    getAccessApprovalSettings(
      params: Params$Resource$Organizations$Getaccessapprovalsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccessApprovalSettings>,
      callback: BodyResponseCallback<Schema$AccessApprovalSettings>
    ): void;
    getAccessApprovalSettings(
      params: Params$Resource$Organizations$Getaccessapprovalsettings,
      callback: BodyResponseCallback<Schema$AccessApprovalSettings>
    ): void;
    getAccessApprovalSettings(
      callback: BodyResponseCallback<Schema$AccessApprovalSettings>
    ): void;
    getAccessApprovalSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Getaccessapprovalsettings
        | BodyResponseCallback<Schema$AccessApprovalSettings>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AccessApprovalSettings>,
      callback?: BodyResponseCallback<Schema$AccessApprovalSettings>
    ): void | GaxiosPromise<Schema$AccessApprovalSettings> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Getaccessapprovalsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Getaccessapprovalsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://accessapproval.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$AccessApprovalSettings>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AccessApprovalSettings>(parameters);
      }
    }

    /**
     * accessapproval.organizations.updateAccessApprovalSettings
     * @desc Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.
     * @alias accessapproval.organizations.updateAccessApprovalSettings
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the settings. Format is one of: <ol>   <li>"projects/{project_id}/accessApprovalSettings"</li>   <li>"folders/{folder_id}/accessApprovalSettings"</li>   <li>"organizations/{organization_id}/accessApprovalSettings"</li> <ol>
     * @param {string=} params.updateMask The update mask applies to the settings. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If this field is left unset, only the notification_emails field will be updated.
     * @param {().AccessApprovalSettings} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateAccessApprovalSettings(
      params?: Params$Resource$Organizations$Updateaccessapprovalsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccessApprovalSettings>;
    updateAccessApprovalSettings(
      params: Params$Resource$Organizations$Updateaccessapprovalsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccessApprovalSettings>,
      callback: BodyResponseCallback<Schema$AccessApprovalSettings>
    ): void;
    updateAccessApprovalSettings(
      params: Params$Resource$Organizations$Updateaccessapprovalsettings,
      callback: BodyResponseCallback<Schema$AccessApprovalSettings>
    ): void;
    updateAccessApprovalSettings(
      callback: BodyResponseCallback<Schema$AccessApprovalSettings>
    ): void;
    updateAccessApprovalSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Updateaccessapprovalsettings
        | BodyResponseCallback<Schema$AccessApprovalSettings>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AccessApprovalSettings>,
      callback?: BodyResponseCallback<Schema$AccessApprovalSettings>
    ): void | GaxiosPromise<Schema$AccessApprovalSettings> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Updateaccessapprovalsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Updateaccessapprovalsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://accessapproval.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$AccessApprovalSettings>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AccessApprovalSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Getaccessapprovalsettings
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the AccessApprovalSettings to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Updateaccessapprovalsettings
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the settings. Format is one of: <ol>   <li>"projects/{project_id}/accessApprovalSettings"</li>   <li>"folders/{folder_id}/accessApprovalSettings"</li>   <li>"organizations/{organization_id}/accessApprovalSettings"</li> <ol>
     */
    name?: string;
    /**
     * The update mask applies to the settings. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If this field is left unset, only the notification_emails field will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AccessApprovalSettings;
  }

  export class Resource$Organizations$Approvalrequests {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * accessapproval.organizations.approvalRequests.approve
     * @desc Approves a request and returns the updated ApprovalRequest.  Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
     * @alias accessapproval.organizations.approvalRequests.approve
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the approval request to approve.
     * @param {().ApproveApprovalRequestMessage} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    approve(
      params?: Params$Resource$Organizations$Approvalrequests$Approve,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ApprovalRequest>;
    approve(
      params: Params$Resource$Organizations$Approvalrequests$Approve,
      options: MethodOptions | BodyResponseCallback<Schema$ApprovalRequest>,
      callback: BodyResponseCallback<Schema$ApprovalRequest>
    ): void;
    approve(
      params: Params$Resource$Organizations$Approvalrequests$Approve,
      callback: BodyResponseCallback<Schema$ApprovalRequest>
    ): void;
    approve(callback: BodyResponseCallback<Schema$ApprovalRequest>): void;
    approve(
      paramsOrCallback?:
        | Params$Resource$Organizations$Approvalrequests$Approve
        | BodyResponseCallback<Schema$ApprovalRequest>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ApprovalRequest>,
      callback?: BodyResponseCallback<Schema$ApprovalRequest>
    ): void | GaxiosPromise<Schema$ApprovalRequest> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Approvalrequests$Approve;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Approvalrequests$Approve;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://accessapproval.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:approve').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ApprovalRequest>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ApprovalRequest>(parameters);
      }
    }

    /**
     * accessapproval.organizations.approvalRequests.dismiss
     * @desc Dismisses a request. Returns the updated ApprovalRequest.  NOTE: This does not deny access to the resource if another request has been made and approved. It is equivalent in effect to ignoring the request altogether.  Returns NOT_FOUND if the request does not exist.  Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
     * @alias accessapproval.organizations.approvalRequests.dismiss
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the ApprovalRequest to dismiss.
     * @param {().DismissApprovalRequestMessage} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    dismiss(
      params?: Params$Resource$Organizations$Approvalrequests$Dismiss,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ApprovalRequest>;
    dismiss(
      params: Params$Resource$Organizations$Approvalrequests$Dismiss,
      options: MethodOptions | BodyResponseCallback<Schema$ApprovalRequest>,
      callback: BodyResponseCallback<Schema$ApprovalRequest>
    ): void;
    dismiss(
      params: Params$Resource$Organizations$Approvalrequests$Dismiss,
      callback: BodyResponseCallback<Schema$ApprovalRequest>
    ): void;
    dismiss(callback: BodyResponseCallback<Schema$ApprovalRequest>): void;
    dismiss(
      paramsOrCallback?:
        | Params$Resource$Organizations$Approvalrequests$Dismiss
        | BodyResponseCallback<Schema$ApprovalRequest>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ApprovalRequest>,
      callback?: BodyResponseCallback<Schema$ApprovalRequest>
    ): void | GaxiosPromise<Schema$ApprovalRequest> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Approvalrequests$Dismiss;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Approvalrequests$Dismiss;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://accessapproval.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:dismiss').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ApprovalRequest>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ApprovalRequest>(parameters);
      }
    }

    /**
     * accessapproval.organizations.approvalRequests.get
     * @desc Gets an approval request. Returns NOT_FOUND if the request does not exist.
     * @alias accessapproval.organizations.approvalRequests.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the approval request to retrieve.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Organizations$Approvalrequests$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ApprovalRequest>;
    get(
      params: Params$Resource$Organizations$Approvalrequests$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ApprovalRequest>,
      callback: BodyResponseCallback<Schema$ApprovalRequest>
    ): void;
    get(
      params: Params$Resource$Organizations$Approvalrequests$Get,
      callback: BodyResponseCallback<Schema$ApprovalRequest>
    ): void;
    get(callback: BodyResponseCallback<Schema$ApprovalRequest>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Approvalrequests$Get
        | BodyResponseCallback<Schema$ApprovalRequest>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ApprovalRequest>,
      callback?: BodyResponseCallback<Schema$ApprovalRequest>
    ): void | GaxiosPromise<Schema$ApprovalRequest> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Approvalrequests$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Approvalrequests$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://accessapproval.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ApprovalRequest>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ApprovalRequest>(parameters);
      }
    }

    /**
     * accessapproval.organizations.approvalRequests.list
     * @desc Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.
     * @alias accessapproval.organizations.approvalRequests.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter A filter on the type of approval requests to retrieve. Must be one of the following values: <ol>   <li>[not set]: Requests that are pending or have active approvals.</li>   <li>ALL: All requests.</li>   <li>PENDING: Only pending requests.</li>   <li>ACTIVE: Only active (i.e. currently approved) requests.</li>   <li>DISMISSED: Only dismissed (including expired) requests.</li> </ol>
     * @param {integer=} params.pageSize Requested page size.
     * @param {string=} params.pageToken A token identifying the page of results to return.
     * @param {string} params.parent The parent resource. This may be "projects/{project_id}", "folders/{folder_id}", or "organizations/{organization_id}".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Organizations$Approvalrequests$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListApprovalRequestsResponse>;
    list(
      params: Params$Resource$Organizations$Approvalrequests$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListApprovalRequestsResponse>,
      callback: BodyResponseCallback<Schema$ListApprovalRequestsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Approvalrequests$List,
      callback: BodyResponseCallback<Schema$ListApprovalRequestsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListApprovalRequestsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Approvalrequests$List
        | BodyResponseCallback<Schema$ListApprovalRequestsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListApprovalRequestsResponse>,
      callback?: BodyResponseCallback<Schema$ListApprovalRequestsResponse>
    ): void | GaxiosPromise<Schema$ListApprovalRequestsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Approvalrequests$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Approvalrequests$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://accessapproval.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/approvalRequests').replace(
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
        createAPIRequest<Schema$ListApprovalRequestsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListApprovalRequestsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Approvalrequests$Approve
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the approval request to approve.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ApproveApprovalRequestMessage;
  }
  export interface Params$Resource$Organizations$Approvalrequests$Dismiss
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the ApprovalRequest to dismiss.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DismissApprovalRequestMessage;
  }
  export interface Params$Resource$Organizations$Approvalrequests$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the approval request to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Approvalrequests$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * A filter on the type of approval requests to retrieve. Must be one of the following values: <ol>   <li>[not set]: Requests that are pending or have active approvals.</li>   <li>ALL: All requests.</li>   <li>PENDING: Only pending requests.</li>   <li>ACTIVE: Only active (i.e. currently approved) requests.</li>   <li>DISMISSED: Only dismissed (including expired) requests.</li> </ol>
     */
    filter?: string;
    /**
     * Requested page size.
     */
    pageSize?: number;
    /**
     * A token identifying the page of results to return.
     */
    pageToken?: string;
    /**
     * The parent resource. This may be "projects/{project_id}", "folders/{folder_id}", or "organizations/{organization_id}".
     */
    parent?: string;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    approvalRequests: Resource$Projects$Approvalrequests;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.approvalRequests = new Resource$Projects$Approvalrequests(
        this.context
      );
    }

    /**
     * accessapproval.projects.getAccessApprovalSettings
     * @desc Gets the settings associated with a project, folder, or organization.
     * @alias accessapproval.projects.getAccessApprovalSettings
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the AccessApprovalSettings to retrieve.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getAccessApprovalSettings(
      params?: Params$Resource$Projects$Getaccessapprovalsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccessApprovalSettings>;
    getAccessApprovalSettings(
      params: Params$Resource$Projects$Getaccessapprovalsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccessApprovalSettings>,
      callback: BodyResponseCallback<Schema$AccessApprovalSettings>
    ): void;
    getAccessApprovalSettings(
      params: Params$Resource$Projects$Getaccessapprovalsettings,
      callback: BodyResponseCallback<Schema$AccessApprovalSettings>
    ): void;
    getAccessApprovalSettings(
      callback: BodyResponseCallback<Schema$AccessApprovalSettings>
    ): void;
    getAccessApprovalSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Getaccessapprovalsettings
        | BodyResponseCallback<Schema$AccessApprovalSettings>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AccessApprovalSettings>,
      callback?: BodyResponseCallback<Schema$AccessApprovalSettings>
    ): void | GaxiosPromise<Schema$AccessApprovalSettings> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Getaccessapprovalsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Getaccessapprovalsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://accessapproval.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$AccessApprovalSettings>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AccessApprovalSettings>(parameters);
      }
    }

    /**
     * accessapproval.projects.updateAccessApprovalSettings
     * @desc Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.
     * @alias accessapproval.projects.updateAccessApprovalSettings
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the settings. Format is one of: <ol>   <li>"projects/{project_id}/accessApprovalSettings"</li>   <li>"folders/{folder_id}/accessApprovalSettings"</li>   <li>"organizations/{organization_id}/accessApprovalSettings"</li> <ol>
     * @param {string=} params.updateMask The update mask applies to the settings. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If this field is left unset, only the notification_emails field will be updated.
     * @param {().AccessApprovalSettings} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateAccessApprovalSettings(
      params?: Params$Resource$Projects$Updateaccessapprovalsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccessApprovalSettings>;
    updateAccessApprovalSettings(
      params: Params$Resource$Projects$Updateaccessapprovalsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccessApprovalSettings>,
      callback: BodyResponseCallback<Schema$AccessApprovalSettings>
    ): void;
    updateAccessApprovalSettings(
      params: Params$Resource$Projects$Updateaccessapprovalsettings,
      callback: BodyResponseCallback<Schema$AccessApprovalSettings>
    ): void;
    updateAccessApprovalSettings(
      callback: BodyResponseCallback<Schema$AccessApprovalSettings>
    ): void;
    updateAccessApprovalSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Updateaccessapprovalsettings
        | BodyResponseCallback<Schema$AccessApprovalSettings>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AccessApprovalSettings>,
      callback?: BodyResponseCallback<Schema$AccessApprovalSettings>
    ): void | GaxiosPromise<Schema$AccessApprovalSettings> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Updateaccessapprovalsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Updateaccessapprovalsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://accessapproval.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$AccessApprovalSettings>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AccessApprovalSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Getaccessapprovalsettings
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the AccessApprovalSettings to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Updateaccessapprovalsettings
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the settings. Format is one of: <ol>   <li>"projects/{project_id}/accessApprovalSettings"</li>   <li>"folders/{folder_id}/accessApprovalSettings"</li>   <li>"organizations/{organization_id}/accessApprovalSettings"</li> <ol>
     */
    name?: string;
    /**
     * The update mask applies to the settings. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If this field is left unset, only the notification_emails field will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AccessApprovalSettings;
  }

  export class Resource$Projects$Approvalrequests {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * accessapproval.projects.approvalRequests.approve
     * @desc Approves a request and returns the updated ApprovalRequest.  Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
     * @alias accessapproval.projects.approvalRequests.approve
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the approval request to approve.
     * @param {().ApproveApprovalRequestMessage} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    approve(
      params?: Params$Resource$Projects$Approvalrequests$Approve,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ApprovalRequest>;
    approve(
      params: Params$Resource$Projects$Approvalrequests$Approve,
      options: MethodOptions | BodyResponseCallback<Schema$ApprovalRequest>,
      callback: BodyResponseCallback<Schema$ApprovalRequest>
    ): void;
    approve(
      params: Params$Resource$Projects$Approvalrequests$Approve,
      callback: BodyResponseCallback<Schema$ApprovalRequest>
    ): void;
    approve(callback: BodyResponseCallback<Schema$ApprovalRequest>): void;
    approve(
      paramsOrCallback?:
        | Params$Resource$Projects$Approvalrequests$Approve
        | BodyResponseCallback<Schema$ApprovalRequest>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ApprovalRequest>,
      callback?: BodyResponseCallback<Schema$ApprovalRequest>
    ): void | GaxiosPromise<Schema$ApprovalRequest> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Approvalrequests$Approve;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Approvalrequests$Approve;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://accessapproval.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:approve').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ApprovalRequest>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ApprovalRequest>(parameters);
      }
    }

    /**
     * accessapproval.projects.approvalRequests.dismiss
     * @desc Dismisses a request. Returns the updated ApprovalRequest.  NOTE: This does not deny access to the resource if another request has been made and approved. It is equivalent in effect to ignoring the request altogether.  Returns NOT_FOUND if the request does not exist.  Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
     * @alias accessapproval.projects.approvalRequests.dismiss
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the ApprovalRequest to dismiss.
     * @param {().DismissApprovalRequestMessage} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    dismiss(
      params?: Params$Resource$Projects$Approvalrequests$Dismiss,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ApprovalRequest>;
    dismiss(
      params: Params$Resource$Projects$Approvalrequests$Dismiss,
      options: MethodOptions | BodyResponseCallback<Schema$ApprovalRequest>,
      callback: BodyResponseCallback<Schema$ApprovalRequest>
    ): void;
    dismiss(
      params: Params$Resource$Projects$Approvalrequests$Dismiss,
      callback: BodyResponseCallback<Schema$ApprovalRequest>
    ): void;
    dismiss(callback: BodyResponseCallback<Schema$ApprovalRequest>): void;
    dismiss(
      paramsOrCallback?:
        | Params$Resource$Projects$Approvalrequests$Dismiss
        | BodyResponseCallback<Schema$ApprovalRequest>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ApprovalRequest>,
      callback?: BodyResponseCallback<Schema$ApprovalRequest>
    ): void | GaxiosPromise<Schema$ApprovalRequest> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Approvalrequests$Dismiss;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Approvalrequests$Dismiss;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://accessapproval.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:dismiss').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ApprovalRequest>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ApprovalRequest>(parameters);
      }
    }

    /**
     * accessapproval.projects.approvalRequests.get
     * @desc Gets an approval request. Returns NOT_FOUND if the request does not exist.
     * @alias accessapproval.projects.approvalRequests.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the approval request to retrieve.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Approvalrequests$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ApprovalRequest>;
    get(
      params: Params$Resource$Projects$Approvalrequests$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ApprovalRequest>,
      callback: BodyResponseCallback<Schema$ApprovalRequest>
    ): void;
    get(
      params: Params$Resource$Projects$Approvalrequests$Get,
      callback: BodyResponseCallback<Schema$ApprovalRequest>
    ): void;
    get(callback: BodyResponseCallback<Schema$ApprovalRequest>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Approvalrequests$Get
        | BodyResponseCallback<Schema$ApprovalRequest>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ApprovalRequest>,
      callback?: BodyResponseCallback<Schema$ApprovalRequest>
    ): void | GaxiosPromise<Schema$ApprovalRequest> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Approvalrequests$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Approvalrequests$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://accessapproval.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ApprovalRequest>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ApprovalRequest>(parameters);
      }
    }

    /**
     * accessapproval.projects.approvalRequests.list
     * @desc Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.
     * @alias accessapproval.projects.approvalRequests.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter A filter on the type of approval requests to retrieve. Must be one of the following values: <ol>   <li>[not set]: Requests that are pending or have active approvals.</li>   <li>ALL: All requests.</li>   <li>PENDING: Only pending requests.</li>   <li>ACTIVE: Only active (i.e. currently approved) requests.</li>   <li>DISMISSED: Only dismissed (including expired) requests.</li> </ol>
     * @param {integer=} params.pageSize Requested page size.
     * @param {string=} params.pageToken A token identifying the page of results to return.
     * @param {string} params.parent The parent resource. This may be "projects/{project_id}", "folders/{folder_id}", or "organizations/{organization_id}".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Approvalrequests$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListApprovalRequestsResponse>;
    list(
      params: Params$Resource$Projects$Approvalrequests$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListApprovalRequestsResponse>,
      callback: BodyResponseCallback<Schema$ListApprovalRequestsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Approvalrequests$List,
      callback: BodyResponseCallback<Schema$ListApprovalRequestsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListApprovalRequestsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Approvalrequests$List
        | BodyResponseCallback<Schema$ListApprovalRequestsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListApprovalRequestsResponse>,
      callback?: BodyResponseCallback<Schema$ListApprovalRequestsResponse>
    ): void | GaxiosPromise<Schema$ListApprovalRequestsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Approvalrequests$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Approvalrequests$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://accessapproval.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/approvalRequests').replace(
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
        createAPIRequest<Schema$ListApprovalRequestsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListApprovalRequestsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Approvalrequests$Approve
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the approval request to approve.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ApproveApprovalRequestMessage;
  }
  export interface Params$Resource$Projects$Approvalrequests$Dismiss
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the ApprovalRequest to dismiss.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DismissApprovalRequestMessage;
  }
  export interface Params$Resource$Projects$Approvalrequests$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the approval request to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Approvalrequests$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * A filter on the type of approval requests to retrieve. Must be one of the following values: <ol>   <li>[not set]: Requests that are pending or have active approvals.</li>   <li>ALL: All requests.</li>   <li>PENDING: Only pending requests.</li>   <li>ACTIVE: Only active (i.e. currently approved) requests.</li>   <li>DISMISSED: Only dismissed (including expired) requests.</li> </ol>
     */
    filter?: string;
    /**
     * Requested page size.
     */
    pageSize?: number;
    /**
     * A token identifying the page of results to return.
     */
    pageToken?: string;
    /**
     * The parent resource. This may be "projects/{project_id}", "folders/{folder_id}", or "organizations/{organization_id}".
     */
    parent?: string;
  }
}
