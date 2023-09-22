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

export namespace accessapproval_v1 {
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
   * Access Approval API
   *
   * An API for controlling access to data by Google personnel.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const accessapproval = google.accessapproval('v1');
   * ```
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
   * Access Approval service account related to a project/folder/organization.
   */
  export interface Schema$AccessApprovalServiceAccount {
    /**
     * Email address of the service account.
     */
    accountEmail?: string | null;
    /**
     * The resource name of the Access Approval service account. Format is one of: * "projects/{project\}/serviceAccount" * "folders/{folder\}/serviceAccount" * "organizations/{organization\}/serviceAccount"
     */
    name?: string | null;
  }
  /**
   * Settings on a Project/Folder/Organization related to Access Approval.
   */
  export interface Schema$AccessApprovalSettings {
    /**
     * The asymmetric crypto key version to use for signing approval requests. Empty active_key_version indicates that a Google-managed key should be used for signing. This property will be ignored if set by an ancestor of this resource, and new non-empty values may not be set.
     */
    activeKeyVersion?: string | null;
    /**
     * Output only. This field is read only (not settable via UpdateAccessApprovalSettings method). If the field is true, that indicates that an ancestor of this Project or Folder has set active_key_version (this field will always be unset for the organization since organizations do not have ancestors).
     */
    ancestorHasActiveKeyVersion?: boolean | null;
    /**
     * Output only. This field is read only (not settable via UpdateAccessApprovalSettings method). If the field is true, that indicates that at least one service is enrolled for Access Approval in one or more ancestors of the Project or Folder (this field will always be unset for the organization since organizations do not have ancestors).
     */
    enrolledAncestor?: boolean | null;
    /**
     * A list of Google Cloud Services for which the given resource has Access Approval enrolled. Access requests for the resource given by name against any of these services contained here will be required to have explicit approval. If name refers to an organization, enrollment can be done for individual services. If name refers to a folder or project, enrollment can only be done on an all or nothing basis. If a cloud_product is repeated in this list, the first entry will be honored and all following entries will be discarded. A maximum of 10 enrolled services will be enforced, to be expanded as the set of supported services is expanded.
     */
    enrolledServices?: Schema$EnrolledService[];
    /**
     * Output only. This field is read only (not settable via UpdateAccessApprovalSettings method). If the field is true, that indicates that there is some configuration issue with the active_key_version configured at this level in the resource hierarchy (e.g. it doesn't exist or the Access Approval service account doesn't have the correct permissions on it, etc.) This key version is not necessarily the effective key version at this level, as key versions are inherited top-down.
     */
    invalidKeyVersion?: boolean | null;
    /**
     * The resource name of the settings. Format is one of: * "projects/{project\}/accessApprovalSettings" * "folders/{folder\}/accessApprovalSettings" * "organizations/{organization\}/accessApprovalSettings"
     */
    name?: string | null;
    /**
     * A list of email addresses to which notifications relating to approval requests should be sent. Notifications relating to a resource will be sent to all emails in the settings of ancestor resources of that resource. A maximum of 50 email addresses are allowed.
     */
    notificationEmails?: string[] | null;
    /**
     * Optional. A pubsub topic to which notifications relating to approval requests should be sent.
     */
    notificationPubsubTopic?: string | null;
    /**
     * This preference is communicated to Google personnel when sending an approval request but can be overridden if necessary.
     */
    preferNoBroadApprovalRequests?: boolean | null;
    /**
     * This preference is shared with Google personnel, but can be overridden if said personnel deems necessary. The approver ultimately can set the expiration at approval time.
     */
    preferredRequestExpirationDays?: number | null;
  }
  /**
   * Home office and physical location of the principal.
   */
  export interface Schema$AccessLocations {
    /**
     * The "home office" location of the principal. A two-letter country code (ISO 3166-1 alpha-2), such as "US", "DE" or "GB" or a region code. In some limited situations Google systems may refer refer to a region code instead of a country code. Possible Region Codes: * ASI: Asia * EUR: Europe * OCE: Oceania * AFR: Africa * NAM: North America * SAM: South America * ANT: Antarctica * ANY: Any location
     */
    principalOfficeCountry?: string | null;
    /**
     * Physical location of the principal at the time of the access. A two-letter country code (ISO 3166-1 alpha-2), such as "US", "DE" or "GB" or a region code. In some limited situations Google systems may refer refer to a region code instead of a country code. Possible Region Codes: * ASI: Asia * EUR: Europe * OCE: Oceania * AFR: Africa * NAM: North America * SAM: South America * ANT: Antarctica * ANY: Any location
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
     * The resource name of the request. Format is "{projects|folders|organizations\}/{id\}/approvalRequests/{approval_request\}".
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
     * The resource for which approval is being requested. The format of the resource name is defined at https://cloud.google.com/apis/design/resource_names. The resource name here may either be a "full" resource name (e.g. "//library.googleapis.com/shelves/shelf1/books/book2") or a "relative" resource name (e.g. "shelves/shelf1/books/book2") as described in the resource name specification.
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
     * True when the request has been auto-approved.
     */
    autoApproved?: boolean | null;
    /**
     * The time at which the approval expires.
     */
    expireTime?: string | null;
    /**
     * If set, denotes the timestamp at which the approval is invalidated.
     */
    invalidateTime?: string | null;
    /**
     * The signature for the ApprovalRequest and details on how it was signed.
     */
    signatureInfo?: Schema$SignatureInfo;
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
    /**
     * This field will be true if the ApprovalRequest was implicitly dismissed due to inaction by the access approval approvers (the request is not acted on by the approvers before the exiration time).
     */
    implicit?: boolean | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Represents the enrollment of a cloud resource into a specific service.
   */
  export interface Schema$EnrolledService {
    /**
     * The product for which Access Approval will be enrolled. Allowed values are listed below (case-sensitive): * all * GA * App Engine * Artifact Registry * BigQuery * Certificate Authority Service * Cloud Bigtable * Cloud Key Management Service * Compute Engine * Cloud Composer * Cloud Dataflow * Cloud Dataproc * Cloud DLP * Cloud EKM * Cloud Firestore * Cloud HSM * Cloud Identity and Access Management * Cloud Logging * Cloud NAT * Cloud Pub/Sub * Cloud Spanner * Cloud SQL * Cloud Storage * Eventarc * Google Kubernetes Engine * Organization Policy Serivice * Persistent Disk * Resource Manager * Secret Manager * Speaker ID Note: These values are supported as input for legacy purposes, but will not be returned from the API. * all * ga-only * appengine.googleapis.com * artifactregistry.googleapis.com * bigquery.googleapis.com * bigtable.googleapis.com * container.googleapis.com * cloudkms.googleapis.com * cloudresourcemanager.googleapis.com * cloudsql.googleapis.com * compute.googleapis.com * dataflow.googleapis.com * dataproc.googleapis.com * dlp.googleapis.com * iam.googleapis.com * logging.googleapis.com * orgpolicy.googleapis.com * pubsub.googleapis.com * spanner.googleapis.com * secretmanager.googleapis.com * speakerid.googleapis.com * storage.googleapis.com Calls to UpdateAccessApprovalSettings using 'all' or any of the XXX.googleapis.com will be translated to the associated product name ('all', 'App Engine', etc.). Note: 'all' will enroll the resource in all products supported at both 'GA' and 'Preview' levels. More information about levels of support is available at https://cloud.google.com/access-approval/docs/supported-services
     */
    cloudProduct?: string | null;
    /**
     * The enrollment level of the service.
     */
    enrollmentLevel?: string | null;
  }
  /**
   * Request to invalidate an existing approval.
   */
  export interface Schema$InvalidateApprovalRequestMessage {}
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
  /**
   * Information about the digital signature of the resource.
   */
  export interface Schema$SignatureInfo {
    /**
     * The resource name of the customer CryptoKeyVersion used for signing.
     */
    customerKmsKeyVersion?: string | null;
    /**
     * The public key for the Google default signing, encoded in PEM format. The signature was created using a private key which may be verified using this public key.
     */
    googlePublicKeyPem?: string | null;
    /**
     * The digital signature.
     */
    signature?: string | null;
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
     * Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the project, folder, or organization, but only if all ancestors also have Access Approval disabled. If Access Approval is enabled at a higher level of the hierarchy, then Access Approval will still be enabled at this level as the settings are inherited.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    deleteAccessApprovalSettings(
      params: Params$Resource$Folders$Deleteaccessapprovalsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    deleteAccessApprovalSettings(
      params?: Params$Resource$Folders$Deleteaccessapprovalsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    deleteAccessApprovalSettings(
      params: Params$Resource$Folders$Deleteaccessapprovalsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deleteAccessApprovalSettings(
      params: Params$Resource$Folders$Deleteaccessapprovalsettings,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    deleteAccessApprovalSettings(
      params: Params$Resource$Folders$Deleteaccessapprovalsettings,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    deleteAccessApprovalSettings(
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    deleteAccessApprovalSettings(
      paramsOrCallback?:
        | Params$Resource$Folders$Deleteaccessapprovalsettings
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
        {}) as Params$Resource$Folders$Deleteaccessapprovalsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Deleteaccessapprovalsettings;
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
     * Gets the settings associated with a project, folder, or organization.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getAccessApprovalSettings(
      params: Params$Resource$Folders$Getaccessapprovalsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getAccessApprovalSettings(
      params?: Params$Resource$Folders$Getaccessapprovalsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccessApprovalSettings>;
    getAccessApprovalSettings(
      params: Params$Resource$Folders$Getaccessapprovalsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$AccessApprovalSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccessApprovalSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccessApprovalSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AccessApprovalSettings>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$AccessApprovalSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccessApprovalSettings>(parameters);
      }
    }

    /**
     * Retrieves the service account that is used by Access Approval to access KMS keys for signing approved approval requests.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getServiceAccount(
      params: Params$Resource$Folders$Getserviceaccount,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getServiceAccount(
      params?: Params$Resource$Folders$Getserviceaccount,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccessApprovalServiceAccount>;
    getServiceAccount(
      params: Params$Resource$Folders$Getserviceaccount,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getServiceAccount(
      params: Params$Resource$Folders$Getserviceaccount,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccessApprovalServiceAccount>,
      callback: BodyResponseCallback<Schema$AccessApprovalServiceAccount>
    ): void;
    getServiceAccount(
      params: Params$Resource$Folders$Getserviceaccount,
      callback: BodyResponseCallback<Schema$AccessApprovalServiceAccount>
    ): void;
    getServiceAccount(
      callback: BodyResponseCallback<Schema$AccessApprovalServiceAccount>
    ): void;
    getServiceAccount(
      paramsOrCallback?:
        | Params$Resource$Folders$Getserviceaccount
        | BodyResponseCallback<Schema$AccessApprovalServiceAccount>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccessApprovalServiceAccount>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccessApprovalServiceAccount>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AccessApprovalServiceAccount>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Getserviceaccount;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Getserviceaccount;
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
        createAPIRequest<Schema$AccessApprovalServiceAccount>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccessApprovalServiceAccount>(
          parameters
        );
      }
    }

    /**
     * Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateAccessApprovalSettings(
      params: Params$Resource$Folders$Updateaccessapprovalsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateAccessApprovalSettings(
      params?: Params$Resource$Folders$Updateaccessapprovalsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccessApprovalSettings>;
    updateAccessApprovalSettings(
      params: Params$Resource$Folders$Updateaccessapprovalsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$AccessApprovalSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccessApprovalSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccessApprovalSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AccessApprovalSettings>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$AccessApprovalSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccessApprovalSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Folders$Deleteaccessapprovalsettings
    extends StandardParameters {
    /**
     * Name of the AccessApprovalSettings to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Getaccessapprovalsettings
    extends StandardParameters {
    /**
     * The name of the AccessApprovalSettings to retrieve. Format: "{projects|folders|organizations\}/{id\}/accessApprovalSettings"
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Getserviceaccount
    extends StandardParameters {
    /**
     * Name of the AccessApprovalServiceAccount to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Updateaccessapprovalsettings
    extends StandardParameters {
    /**
     * The resource name of the settings. Format is one of: * "projects/{project\}/accessApprovalSettings" * "folders/{folder\}/accessApprovalSettings" * "organizations/{organization\}/accessApprovalSettings"
     */
    name?: string;
    /**
     * The update mask applies to the settings. Only the top level fields of AccessApprovalSettings (notification_emails & enrolled_services) are supported. For each field, if it is included, the currently stored value will be entirely overwritten with the value of the field passed in this request. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If this field is left unset, only the notification_emails field will be updated.
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
     * Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    approve(
      params: Params$Resource$Folders$Approvalrequests$Approve,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    approve(
      params?: Params$Resource$Folders$Approvalrequests$Approve,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ApprovalRequest>;
    approve(
      params: Params$Resource$Folders$Approvalrequests$Approve,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ApprovalRequest> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/v1/{+name}:approve').replace(
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
        createAPIRequest<Schema$ApprovalRequest>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ApprovalRequest>(parameters);
      }
    }

    /**
     * Dismisses a request. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It is equivalent in effect to ignoring the request altogether. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    dismiss(
      params: Params$Resource$Folders$Approvalrequests$Dismiss,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    dismiss(
      params?: Params$Resource$Folders$Approvalrequests$Dismiss,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ApprovalRequest>;
    dismiss(
      params: Params$Resource$Folders$Approvalrequests$Dismiss,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ApprovalRequest> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/v1/{+name}:dismiss').replace(
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
        createAPIRequest<Schema$ApprovalRequest>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ApprovalRequest>(parameters);
      }
    }

    /**
     * Gets an approval request. Returns NOT_FOUND if the request does not exist.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Folders$Approvalrequests$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Folders$Approvalrequests$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ApprovalRequest>;
    get(
      params: Params$Resource$Folders$Approvalrequests$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ApprovalRequest> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$ApprovalRequest>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ApprovalRequest>(parameters);
      }
    }

    /**
     * Invalidates an existing ApprovalRequest. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It only invalidates a single approval. Returns FAILED_PRECONDITION if the request exists but is not in an approved state.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    invalidate(
      params: Params$Resource$Folders$Approvalrequests$Invalidate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    invalidate(
      params?: Params$Resource$Folders$Approvalrequests$Invalidate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ApprovalRequest>;
    invalidate(
      params: Params$Resource$Folders$Approvalrequests$Invalidate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    invalidate(
      params: Params$Resource$Folders$Approvalrequests$Invalidate,
      options: MethodOptions | BodyResponseCallback<Schema$ApprovalRequest>,
      callback: BodyResponseCallback<Schema$ApprovalRequest>
    ): void;
    invalidate(
      params: Params$Resource$Folders$Approvalrequests$Invalidate,
      callback: BodyResponseCallback<Schema$ApprovalRequest>
    ): void;
    invalidate(callback: BodyResponseCallback<Schema$ApprovalRequest>): void;
    invalidate(
      paramsOrCallback?:
        | Params$Resource$Folders$Approvalrequests$Invalidate
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ApprovalRequest> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Approvalrequests$Invalidate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Approvalrequests$Invalidate;
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
            url: (rootUrl + '/v1/{+name}:invalidate').replace(
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
        createAPIRequest<Schema$ApprovalRequest>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ApprovalRequest>(parameters);
      }
    }

    /**
     * Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Folders$Approvalrequests$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Folders$Approvalrequests$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListApprovalRequestsResponse>;
    list(
      params: Params$Resource$Folders$Approvalrequests$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ListApprovalRequestsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListApprovalRequestsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListApprovalRequestsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListApprovalRequestsResponse>
      | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/v1/{+parent}/approvalRequests').replace(
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
          callback as BodyResponseCallback<unknown>
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
     * The name of the approval request to retrieve. Format: "{projects|folders|organizations\}/{id\}/approvalRequests/{approval_request\}"
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Approvalrequests$Invalidate
    extends StandardParameters {
    /**
     * Name of the ApprovalRequest to invalidate.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$InvalidateApprovalRequestMessage;
  }
  export interface Params$Resource$Folders$Approvalrequests$List
    extends StandardParameters {
    /**
     * A filter on the type of approval requests to retrieve. Must be one of the following values: * [not set]: Requests that are pending or have active approvals. * ALL: All requests. * PENDING: Only pending requests. * ACTIVE: Only active (i.e. currently approved) requests. * DISMISSED: Only requests that have been dismissed, or requests that are not approved and past expiration. * EXPIRED: Only requests that have been approved, and the approval has expired. * HISTORY: Active, dismissed and expired requests.
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
     * The parent resource. This may be "projects/{project\}", "folders/{folder\}", or "organizations/{organization\}".
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
     * Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the project, folder, or organization, but only if all ancestors also have Access Approval disabled. If Access Approval is enabled at a higher level of the hierarchy, then Access Approval will still be enabled at this level as the settings are inherited.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    deleteAccessApprovalSettings(
      params: Params$Resource$Organizations$Deleteaccessapprovalsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    deleteAccessApprovalSettings(
      params?: Params$Resource$Organizations$Deleteaccessapprovalsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    deleteAccessApprovalSettings(
      params: Params$Resource$Organizations$Deleteaccessapprovalsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deleteAccessApprovalSettings(
      params: Params$Resource$Organizations$Deleteaccessapprovalsettings,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    deleteAccessApprovalSettings(
      params: Params$Resource$Organizations$Deleteaccessapprovalsettings,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    deleteAccessApprovalSettings(
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    deleteAccessApprovalSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Deleteaccessapprovalsettings
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
        {}) as Params$Resource$Organizations$Deleteaccessapprovalsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Deleteaccessapprovalsettings;
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
     * Gets the settings associated with a project, folder, or organization.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getAccessApprovalSettings(
      params: Params$Resource$Organizations$Getaccessapprovalsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getAccessApprovalSettings(
      params?: Params$Resource$Organizations$Getaccessapprovalsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccessApprovalSettings>;
    getAccessApprovalSettings(
      params: Params$Resource$Organizations$Getaccessapprovalsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$AccessApprovalSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccessApprovalSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccessApprovalSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AccessApprovalSettings>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$AccessApprovalSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccessApprovalSettings>(parameters);
      }
    }

    /**
     * Retrieves the service account that is used by Access Approval to access KMS keys for signing approved approval requests.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getServiceAccount(
      params: Params$Resource$Organizations$Getserviceaccount,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getServiceAccount(
      params?: Params$Resource$Organizations$Getserviceaccount,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccessApprovalServiceAccount>;
    getServiceAccount(
      params: Params$Resource$Organizations$Getserviceaccount,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getServiceAccount(
      params: Params$Resource$Organizations$Getserviceaccount,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccessApprovalServiceAccount>,
      callback: BodyResponseCallback<Schema$AccessApprovalServiceAccount>
    ): void;
    getServiceAccount(
      params: Params$Resource$Organizations$Getserviceaccount,
      callback: BodyResponseCallback<Schema$AccessApprovalServiceAccount>
    ): void;
    getServiceAccount(
      callback: BodyResponseCallback<Schema$AccessApprovalServiceAccount>
    ): void;
    getServiceAccount(
      paramsOrCallback?:
        | Params$Resource$Organizations$Getserviceaccount
        | BodyResponseCallback<Schema$AccessApprovalServiceAccount>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccessApprovalServiceAccount>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccessApprovalServiceAccount>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AccessApprovalServiceAccount>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Getserviceaccount;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Getserviceaccount;
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
        createAPIRequest<Schema$AccessApprovalServiceAccount>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccessApprovalServiceAccount>(
          parameters
        );
      }
    }

    /**
     * Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateAccessApprovalSettings(
      params: Params$Resource$Organizations$Updateaccessapprovalsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateAccessApprovalSettings(
      params?: Params$Resource$Organizations$Updateaccessapprovalsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccessApprovalSettings>;
    updateAccessApprovalSettings(
      params: Params$Resource$Organizations$Updateaccessapprovalsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$AccessApprovalSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccessApprovalSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccessApprovalSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AccessApprovalSettings>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Updateaccessapprovalsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Updateaccessapprovalsettings;
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
        createAPIRequest<Schema$AccessApprovalSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccessApprovalSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Deleteaccessapprovalsettings
    extends StandardParameters {
    /**
     * Name of the AccessApprovalSettings to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Getaccessapprovalsettings
    extends StandardParameters {
    /**
     * The name of the AccessApprovalSettings to retrieve. Format: "{projects|folders|organizations\}/{id\}/accessApprovalSettings"
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Getserviceaccount
    extends StandardParameters {
    /**
     * Name of the AccessApprovalServiceAccount to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Updateaccessapprovalsettings
    extends StandardParameters {
    /**
     * The resource name of the settings. Format is one of: * "projects/{project\}/accessApprovalSettings" * "folders/{folder\}/accessApprovalSettings" * "organizations/{organization\}/accessApprovalSettings"
     */
    name?: string;
    /**
     * The update mask applies to the settings. Only the top level fields of AccessApprovalSettings (notification_emails & enrolled_services) are supported. For each field, if it is included, the currently stored value will be entirely overwritten with the value of the field passed in this request. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If this field is left unset, only the notification_emails field will be updated.
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
     * Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    approve(
      params: Params$Resource$Organizations$Approvalrequests$Approve,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    approve(
      params?: Params$Resource$Organizations$Approvalrequests$Approve,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ApprovalRequest>;
    approve(
      params: Params$Resource$Organizations$Approvalrequests$Approve,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ApprovalRequest> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/v1/{+name}:approve').replace(
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
        createAPIRequest<Schema$ApprovalRequest>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ApprovalRequest>(parameters);
      }
    }

    /**
     * Dismisses a request. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It is equivalent in effect to ignoring the request altogether. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    dismiss(
      params: Params$Resource$Organizations$Approvalrequests$Dismiss,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    dismiss(
      params?: Params$Resource$Organizations$Approvalrequests$Dismiss,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ApprovalRequest>;
    dismiss(
      params: Params$Resource$Organizations$Approvalrequests$Dismiss,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ApprovalRequest> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/v1/{+name}:dismiss').replace(
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
        createAPIRequest<Schema$ApprovalRequest>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ApprovalRequest>(parameters);
      }
    }

    /**
     * Gets an approval request. Returns NOT_FOUND if the request does not exist.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Organizations$Approvalrequests$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Organizations$Approvalrequests$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ApprovalRequest>;
    get(
      params: Params$Resource$Organizations$Approvalrequests$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ApprovalRequest> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$ApprovalRequest>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ApprovalRequest>(parameters);
      }
    }

    /**
     * Invalidates an existing ApprovalRequest. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It only invalidates a single approval. Returns FAILED_PRECONDITION if the request exists but is not in an approved state.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    invalidate(
      params: Params$Resource$Organizations$Approvalrequests$Invalidate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    invalidate(
      params?: Params$Resource$Organizations$Approvalrequests$Invalidate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ApprovalRequest>;
    invalidate(
      params: Params$Resource$Organizations$Approvalrequests$Invalidate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    invalidate(
      params: Params$Resource$Organizations$Approvalrequests$Invalidate,
      options: MethodOptions | BodyResponseCallback<Schema$ApprovalRequest>,
      callback: BodyResponseCallback<Schema$ApprovalRequest>
    ): void;
    invalidate(
      params: Params$Resource$Organizations$Approvalrequests$Invalidate,
      callback: BodyResponseCallback<Schema$ApprovalRequest>
    ): void;
    invalidate(callback: BodyResponseCallback<Schema$ApprovalRequest>): void;
    invalidate(
      paramsOrCallback?:
        | Params$Resource$Organizations$Approvalrequests$Invalidate
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ApprovalRequest> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Approvalrequests$Invalidate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Approvalrequests$Invalidate;
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
            url: (rootUrl + '/v1/{+name}:invalidate').replace(
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
        createAPIRequest<Schema$ApprovalRequest>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ApprovalRequest>(parameters);
      }
    }

    /**
     * Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Organizations$Approvalrequests$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Organizations$Approvalrequests$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListApprovalRequestsResponse>;
    list(
      params: Params$Resource$Organizations$Approvalrequests$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ListApprovalRequestsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListApprovalRequestsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListApprovalRequestsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListApprovalRequestsResponse>
      | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/v1/{+parent}/approvalRequests').replace(
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
          callback as BodyResponseCallback<unknown>
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
     * The name of the approval request to retrieve. Format: "{projects|folders|organizations\}/{id\}/approvalRequests/{approval_request\}"
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Approvalrequests$Invalidate
    extends StandardParameters {
    /**
     * Name of the ApprovalRequest to invalidate.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$InvalidateApprovalRequestMessage;
  }
  export interface Params$Resource$Organizations$Approvalrequests$List
    extends StandardParameters {
    /**
     * A filter on the type of approval requests to retrieve. Must be one of the following values: * [not set]: Requests that are pending or have active approvals. * ALL: All requests. * PENDING: Only pending requests. * ACTIVE: Only active (i.e. currently approved) requests. * DISMISSED: Only requests that have been dismissed, or requests that are not approved and past expiration. * EXPIRED: Only requests that have been approved, and the approval has expired. * HISTORY: Active, dismissed and expired requests.
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
     * The parent resource. This may be "projects/{project\}", "folders/{folder\}", or "organizations/{organization\}".
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
     * Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the project, folder, or organization, but only if all ancestors also have Access Approval disabled. If Access Approval is enabled at a higher level of the hierarchy, then Access Approval will still be enabled at this level as the settings are inherited.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    deleteAccessApprovalSettings(
      params: Params$Resource$Projects$Deleteaccessapprovalsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    deleteAccessApprovalSettings(
      params?: Params$Resource$Projects$Deleteaccessapprovalsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    deleteAccessApprovalSettings(
      params: Params$Resource$Projects$Deleteaccessapprovalsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deleteAccessApprovalSettings(
      params: Params$Resource$Projects$Deleteaccessapprovalsettings,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    deleteAccessApprovalSettings(
      params: Params$Resource$Projects$Deleteaccessapprovalsettings,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    deleteAccessApprovalSettings(
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    deleteAccessApprovalSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Deleteaccessapprovalsettings
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
        {}) as Params$Resource$Projects$Deleteaccessapprovalsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Deleteaccessapprovalsettings;
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
     * Gets the settings associated with a project, folder, or organization.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getAccessApprovalSettings(
      params: Params$Resource$Projects$Getaccessapprovalsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getAccessApprovalSettings(
      params?: Params$Resource$Projects$Getaccessapprovalsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccessApprovalSettings>;
    getAccessApprovalSettings(
      params: Params$Resource$Projects$Getaccessapprovalsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$AccessApprovalSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccessApprovalSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccessApprovalSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AccessApprovalSettings>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$AccessApprovalSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccessApprovalSettings>(parameters);
      }
    }

    /**
     * Retrieves the service account that is used by Access Approval to access KMS keys for signing approved approval requests.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getServiceAccount(
      params: Params$Resource$Projects$Getserviceaccount,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getServiceAccount(
      params?: Params$Resource$Projects$Getserviceaccount,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccessApprovalServiceAccount>;
    getServiceAccount(
      params: Params$Resource$Projects$Getserviceaccount,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getServiceAccount(
      params: Params$Resource$Projects$Getserviceaccount,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccessApprovalServiceAccount>,
      callback: BodyResponseCallback<Schema$AccessApprovalServiceAccount>
    ): void;
    getServiceAccount(
      params: Params$Resource$Projects$Getserviceaccount,
      callback: BodyResponseCallback<Schema$AccessApprovalServiceAccount>
    ): void;
    getServiceAccount(
      callback: BodyResponseCallback<Schema$AccessApprovalServiceAccount>
    ): void;
    getServiceAccount(
      paramsOrCallback?:
        | Params$Resource$Projects$Getserviceaccount
        | BodyResponseCallback<Schema$AccessApprovalServiceAccount>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccessApprovalServiceAccount>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccessApprovalServiceAccount>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AccessApprovalServiceAccount>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Getserviceaccount;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Getserviceaccount;
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
        createAPIRequest<Schema$AccessApprovalServiceAccount>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccessApprovalServiceAccount>(
          parameters
        );
      }
    }

    /**
     * Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateAccessApprovalSettings(
      params: Params$Resource$Projects$Updateaccessapprovalsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateAccessApprovalSettings(
      params?: Params$Resource$Projects$Updateaccessapprovalsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccessApprovalSettings>;
    updateAccessApprovalSettings(
      params: Params$Resource$Projects$Updateaccessapprovalsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$AccessApprovalSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccessApprovalSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccessApprovalSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AccessApprovalSettings>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$AccessApprovalSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccessApprovalSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Deleteaccessapprovalsettings
    extends StandardParameters {
    /**
     * Name of the AccessApprovalSettings to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Getaccessapprovalsettings
    extends StandardParameters {
    /**
     * The name of the AccessApprovalSettings to retrieve. Format: "{projects|folders|organizations\}/{id\}/accessApprovalSettings"
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Getserviceaccount
    extends StandardParameters {
    /**
     * Name of the AccessApprovalServiceAccount to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Updateaccessapprovalsettings
    extends StandardParameters {
    /**
     * The resource name of the settings. Format is one of: * "projects/{project\}/accessApprovalSettings" * "folders/{folder\}/accessApprovalSettings" * "organizations/{organization\}/accessApprovalSettings"
     */
    name?: string;
    /**
     * The update mask applies to the settings. Only the top level fields of AccessApprovalSettings (notification_emails & enrolled_services) are supported. For each field, if it is included, the currently stored value will be entirely overwritten with the value of the field passed in this request. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If this field is left unset, only the notification_emails field will be updated.
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
     * Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    approve(
      params: Params$Resource$Projects$Approvalrequests$Approve,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    approve(
      params?: Params$Resource$Projects$Approvalrequests$Approve,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ApprovalRequest>;
    approve(
      params: Params$Resource$Projects$Approvalrequests$Approve,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ApprovalRequest> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/v1/{+name}:approve').replace(
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
        createAPIRequest<Schema$ApprovalRequest>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ApprovalRequest>(parameters);
      }
    }

    /**
     * Dismisses a request. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It is equivalent in effect to ignoring the request altogether. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    dismiss(
      params: Params$Resource$Projects$Approvalrequests$Dismiss,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    dismiss(
      params?: Params$Resource$Projects$Approvalrequests$Dismiss,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ApprovalRequest>;
    dismiss(
      params: Params$Resource$Projects$Approvalrequests$Dismiss,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ApprovalRequest> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/v1/{+name}:dismiss').replace(
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
        createAPIRequest<Schema$ApprovalRequest>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ApprovalRequest>(parameters);
      }
    }

    /**
     * Gets an approval request. Returns NOT_FOUND if the request does not exist.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Approvalrequests$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Approvalrequests$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ApprovalRequest>;
    get(
      params: Params$Resource$Projects$Approvalrequests$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ApprovalRequest> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$ApprovalRequest>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ApprovalRequest>(parameters);
      }
    }

    /**
     * Invalidates an existing ApprovalRequest. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It only invalidates a single approval. Returns FAILED_PRECONDITION if the request exists but is not in an approved state.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    invalidate(
      params: Params$Resource$Projects$Approvalrequests$Invalidate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    invalidate(
      params?: Params$Resource$Projects$Approvalrequests$Invalidate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ApprovalRequest>;
    invalidate(
      params: Params$Resource$Projects$Approvalrequests$Invalidate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    invalidate(
      params: Params$Resource$Projects$Approvalrequests$Invalidate,
      options: MethodOptions | BodyResponseCallback<Schema$ApprovalRequest>,
      callback: BodyResponseCallback<Schema$ApprovalRequest>
    ): void;
    invalidate(
      params: Params$Resource$Projects$Approvalrequests$Invalidate,
      callback: BodyResponseCallback<Schema$ApprovalRequest>
    ): void;
    invalidate(callback: BodyResponseCallback<Schema$ApprovalRequest>): void;
    invalidate(
      paramsOrCallback?:
        | Params$Resource$Projects$Approvalrequests$Invalidate
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ApprovalRequest>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ApprovalRequest> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Approvalrequests$Invalidate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Approvalrequests$Invalidate;
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
            url: (rootUrl + '/v1/{+name}:invalidate').replace(
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
        createAPIRequest<Schema$ApprovalRequest>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ApprovalRequest>(parameters);
      }
    }

    /**
     * Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Approvalrequests$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Approvalrequests$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListApprovalRequestsResponse>;
    list(
      params: Params$Resource$Projects$Approvalrequests$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ListApprovalRequestsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListApprovalRequestsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListApprovalRequestsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListApprovalRequestsResponse>
      | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/v1/{+parent}/approvalRequests').replace(
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
          callback as BodyResponseCallback<unknown>
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
     * The name of the approval request to retrieve. Format: "{projects|folders|organizations\}/{id\}/approvalRequests/{approval_request\}"
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Approvalrequests$Invalidate
    extends StandardParameters {
    /**
     * Name of the ApprovalRequest to invalidate.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$InvalidateApprovalRequestMessage;
  }
  export interface Params$Resource$Projects$Approvalrequests$List
    extends StandardParameters {
    /**
     * A filter on the type of approval requests to retrieve. Must be one of the following values: * [not set]: Requests that are pending or have active approvals. * ALL: All requests. * PENDING: Only pending requests. * ACTIVE: Only active (i.e. currently approved) requests. * DISMISSED: Only requests that have been dismissed, or requests that are not approved and past expiration. * EXPIRED: Only requests that have been approved, and the approval has expired. * HISTORY: Active, dismissed and expired requests.
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
     * The parent resource. This may be "projects/{project\}", "folders/{folder\}", or "organizations/{organization\}".
     */
    parent?: string;
  }
}
