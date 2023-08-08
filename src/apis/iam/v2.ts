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

export namespace iam_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
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
   * Identity and Access Management (IAM) API
   *
   * Manages identity and access control for Google Cloud Platform resources, including the creation of service accounts, which you can use to authenticate to Google and make API calls.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const iam = google.iam('v2');
   * ```
   */
  export class Iam {
    context: APIRequestContext;
    policies: Resource$Policies;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.policies = new Resource$Policies(this.context);
    }
  }

  /**
   * Audit log information specific to Cloud IAM admin APIs. This message is serialized as an `Any` type in the `ServiceData` message of an `AuditLog` message.
   */
  export interface Schema$GoogleIamAdminV1AuditData {
    /**
     * The permission_delta when when creating or updating a Role.
     */
    permissionDelta?: Schema$GoogleIamAdminV1AuditDataPermissionDelta;
  }
  /**
   * A PermissionDelta message to record the added_permissions and removed_permissions inside a role.
   */
  export interface Schema$GoogleIamAdminV1AuditDataPermissionDelta {
    /**
     * Added permissions.
     */
    addedPermissions?: string[] | null;
    /**
     * Removed permissions.
     */
    removedPermissions?: string[] | null;
  }
  /**
   * Metadata for long-running WorkloadIdentityPool operations.
   */
  export interface Schema$GoogleIamV1betaWorkloadIdentityPoolOperationMetadata {}
  /**
   * One delta entry for Binding. Each individual change (only one member in each entry) to a binding will be a separate entry.
   */
  export interface Schema$GoogleIamV1BindingDelta {
    /**
     * The action that was performed on a Binding. Required
     */
    action?: string | null;
    /**
     * The condition that is associated with this binding.
     */
    condition?: Schema$GoogleTypeExpr;
    /**
     * A single identity requesting access for a Google Cloud resource. Follows the same format of Binding.members. Required
     */
    member?: string | null;
    /**
     * Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. Required
     */
    role?: string | null;
  }
  /**
   * Audit log information specific to Cloud IAM. This message is serialized as an `Any` type in the `ServiceData` message of an `AuditLog` message.
   */
  export interface Schema$GoogleIamV1LoggingAuditData {
    /**
     * Policy delta between the original policy and the newly set policy.
     */
    policyDelta?: Schema$GoogleIamV1PolicyDelta;
  }
  /**
   * The difference delta between two policies.
   */
  export interface Schema$GoogleIamV1PolicyDelta {
    /**
     * The delta for Bindings between two policies.
     */
    bindingDeltas?: Schema$GoogleIamV1BindingDelta[];
  }
  /**
   * A deny rule in an IAM deny policy.
   */
  export interface Schema$GoogleIamV2DenyRule {
    /**
     * The condition that determines whether this deny rule applies to a request. If the condition expression evaluates to `true`, then the deny rule is applied; otherwise, the deny rule is not applied. Each deny rule is evaluated independently. If this deny rule does not apply to a request, other deny rules might still apply. The condition can use CEL functions that evaluate [resource tags](https://cloud.google.com/iam/help/conditions/resource-tags). Other functions and operators are not supported.
     */
    denialCondition?: Schema$GoogleTypeExpr;
    /**
     * The permissions that are explicitly denied by this rule. Each permission uses the format `{service_fqdn\}/{resource\}.{verb\}`, where `{service_fqdn\}` is the fully qualified domain name for the service. For example, `iam.googleapis.com/roles.list`.
     */
    deniedPermissions?: string[] | null;
    /**
     * The identities that are prevented from using one or more permissions on Google Cloud resources. This field can contain the following values: * `principalSet://goog/public:all`: A special identifier that represents any principal that is on the internet, even if they do not have a Google Account or are not logged in. * `principal://goog/subject/{email_id\}`: A specific Google Account. Includes Gmail, Cloud Identity, and Google Workspace user accounts. For example, `principal://goog/subject/alice@example.com`. * `deleted:principal://goog/subject/{email_id\}?uid={uid\}`: A specific Google Account that was deleted recently. For example, `deleted:principal://goog/subject/alice@example.com?uid=1234567890`. If the Google Account is recovered, this identifier reverts to the standard identifier for a Google Account. * `principalSet://goog/group/{group_id\}`: A Google group. For example, `principalSet://goog/group/admins@example.com`. * `deleted:principalSet://goog/group/{group_id\}?uid={uid\}`: A Google group that was deleted recently. For example, `deleted:principalSet://goog/group/admins@example.com?uid=1234567890`. If the Google group is restored, this identifier reverts to the standard identifier for a Google group. * `principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id\}`: A Google Cloud service account. For example, `principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com`. * `deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id\}?uid={uid\}`: A Google Cloud service account that was deleted recently. For example, `deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com?uid=1234567890`. If the service account is undeleted, this identifier reverts to the standard identifier for a service account. * `principalSet://goog/cloudIdentityCustomerId/{customer_id\}`: All of the principals associated with the specified Google Workspace or Cloud Identity customer ID. For example, `principalSet://goog/cloudIdentityCustomerId/C01Abc35`.
     */
    deniedPrincipals?: string[] | null;
    /**
     * Specifies the permissions that this rule excludes from the set of denied permissions given by `denied_permissions`. If a permission appears in `denied_permissions` _and_ in `exception_permissions` then it will _not_ be denied. The excluded permissions can be specified using the same syntax as `denied_permissions`.
     */
    exceptionPermissions?: string[] | null;
    /**
     * The identities that are excluded from the deny rule, even if they are listed in the `denied_principals`. For example, you could add a Google group to the `denied_principals`, then exclude specific users who belong to that group. This field can contain the same values as the `denied_principals` field, excluding `principalSet://goog/public:all`, which represents all users on the internet.
     */
    exceptionPrincipals?: string[] | null;
  }
  /**
   * Response message for `ListPolicies`.
   */
  export interface Schema$GoogleIamV2ListPoliciesResponse {
    /**
     * A page token that you can use in a ListPoliciesRequest to retrieve the next page. If this field is omitted, there are no additional pages.
     */
    nextPageToken?: string | null;
    /**
     * Metadata for the policies that are attached to the resource.
     */
    policies?: Schema$GoogleIamV2Policy[];
  }
  /**
   * Data for an IAM policy.
   */
  export interface Schema$GoogleIamV2Policy {
    /**
     * A key-value map to store arbitrary metadata for the `Policy`. Keys can be up to 63 characters. Values can be up to 255 characters.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Output only. The time when the `Policy` was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time when the `Policy` was deleted. Empty if the policy is not deleted.
     */
    deleteTime?: string | null;
    /**
     * A user-specified description of the `Policy`. This value can be up to 63 characters.
     */
    displayName?: string | null;
    /**
     * An opaque tag that identifies the current version of the `Policy`. IAM uses this value to help manage concurrent updates, so they do not cause one update to be overwritten by another. If this field is present in a CreatePolicyRequest, the value is ignored.
     */
    etag?: string | null;
    /**
     * Output only. The kind of the `Policy`. Always contains the value `DenyPolicy`.
     */
    kind?: string | null;
    /**
     * Immutable. The resource name of the `Policy`, which must be unique. Format: `policies/{attachment_point\}/denypolicies/{policy_id\}` The attachment point is identified by its URL-encoded full resource name, which means that the forward-slash character, `/`, must be written as `%2F`. For example, `policies/cloudresourcemanager.googleapis.com%2Fprojects%2Fmy-project/denypolicies/my-deny-policy`. For organizations and folders, use the numeric ID in the full resource name. For projects, requests can use the alphanumeric or the numeric ID. Responses always contain the numeric ID.
     */
    name?: string | null;
    /**
     * A list of rules that specify the behavior of the `Policy`. All of the rules should be of the `kind` specified in the `Policy`.
     */
    rules?: Schema$GoogleIamV2PolicyRule[];
    /**
     * Immutable. The globally unique ID of the `Policy`. Assigned automatically when the `Policy` is created.
     */
    uid?: string | null;
    /**
     * Output only. The time when the `Policy` was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata for long-running `Policy` operations.
   */
  export interface Schema$GoogleIamV2PolicyOperationMetadata {
    /**
     * Timestamp when the `google.longrunning.Operation` was created.
     */
    createTime?: string | null;
  }
  /**
   * A single rule in a `Policy`.
   */
  export interface Schema$GoogleIamV2PolicyRule {
    /**
     * A rule for a deny policy.
     */
    denyRule?: Schema$GoogleIamV2DenyRule;
    /**
     * A user-specified description of the rule. This value can be up to 256 characters.
     */
    description?: string | null;
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$GoogleLongrunningOperation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$GoogleRpcStatus;
    /**
     * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id\}`.
     */
    name?: string | null;
    /**
     * The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
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
  /**
   * Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
   */
  export interface Schema$GoogleTypeExpr {
    /**
     * Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string | null;
    /**
     * Textual representation of an expression in Common Expression Language syntax.
     */
    expression?: string | null;
    /**
     * Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
     */
    location?: string | null;
    /**
     * Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
     */
    title?: string | null;
  }

  export class Resource$Policies {
    context: APIRequestContext;
    operations: Resource$Policies$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations = new Resource$Policies$Operations(this.context);
    }

    /**
     * Creates a policy.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    createPolicy(
      params: Params$Resource$Policies$Createpolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    createPolicy(
      params?: Params$Resource$Policies$Createpolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    createPolicy(
      params: Params$Resource$Policies$Createpolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    createPolicy(
      params: Params$Resource$Policies$Createpolicy,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    createPolicy(
      params: Params$Resource$Policies$Createpolicy,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    createPolicy(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    createPolicy(
      paramsOrCallback?:
        | Params$Resource$Policies$Createpolicy
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Policies$Createpolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Policies$Createpolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Deletes a policy. This action is permanent.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Policies$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Policies$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    delete(
      params: Params$Resource$Policies$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Policies$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Policies$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Policies$Delete
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Policies$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Policies$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets a policy.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Policies$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Policies$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV2Policy>;
    get(
      params: Params$Resource$Policies$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Policies$Get,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV2Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV2Policy>
    ): void;
    get(
      params: Params$Resource$Policies$Get,
      callback: BodyResponseCallback<Schema$GoogleIamV2Policy>
    ): void;
    get(callback: BodyResponseCallback<Schema$GoogleIamV2Policy>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Policies$Get
        | BodyResponseCallback<Schema$GoogleIamV2Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV2Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV2Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV2Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Policies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Policies$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleIamV2Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV2Policy>(parameters);
      }
    }

    /**
     * Retrieves the policies of the specified kind that are attached to a resource. The response lists only policy metadata. In particular, policy rules are omitted.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    listPolicies(
      params: Params$Resource$Policies$Listpolicies,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listPolicies(
      params?: Params$Resource$Policies$Listpolicies,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV2ListPoliciesResponse>;
    listPolicies(
      params: Params$Resource$Policies$Listpolicies,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listPolicies(
      params: Params$Resource$Policies$Listpolicies,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV2ListPoliciesResponse>,
      callback: BodyResponseCallback<Schema$GoogleIamV2ListPoliciesResponse>
    ): void;
    listPolicies(
      params: Params$Resource$Policies$Listpolicies,
      callback: BodyResponseCallback<Schema$GoogleIamV2ListPoliciesResponse>
    ): void;
    listPolicies(
      callback: BodyResponseCallback<Schema$GoogleIamV2ListPoliciesResponse>
    ): void;
    listPolicies(
      paramsOrCallback?:
        | Params$Resource$Policies$Listpolicies
        | BodyResponseCallback<Schema$GoogleIamV2ListPoliciesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV2ListPoliciesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV2ListPoliciesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV2ListPoliciesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Policies$Listpolicies;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Policies$Listpolicies;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleIamV2ListPoliciesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV2ListPoliciesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the specified policy. You can update only the rules and the display name for the policy. To update a policy, you should use a read-modify-write loop: 1. Use GetPolicy to read the current version of the policy. 2. Modify the policy as needed. 3. Use `UpdatePolicy` to write the updated policy. This pattern helps prevent conflicts between concurrent updates.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Policies$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Policies$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    update(
      params: Params$Resource$Policies$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Policies$Update,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    update(
      params: Params$Resource$Policies$Update,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    update(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Policies$Update
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Policies$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Policies$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Policies$Createpolicy
    extends StandardParameters {
    /**
     * Required. The resource that the policy is attached to, along with the kind of policy to create. Format: `policies/{attachment_point\}/denypolicies` The attachment point is identified by its URL-encoded full resource name, which means that the forward-slash character, `/`, must be written as `%2F`. For example, `policies/cloudresourcemanager.googleapis.com%2Fprojects%2Fmy-project/denypolicies`. For organizations and folders, use the numeric ID in the full resource name. For projects, you can use the alphanumeric or the numeric ID.
     */
    parent?: string;
    /**
     * The ID to use for this policy, which will become the final component of the policy's resource name. The ID must contain 3 to 63 characters. It can contain lowercase letters and numbers, as well as dashes (`-`) and periods (`.`). The first character must be a lowercase letter.
     */
    policyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV2Policy;
  }
  export interface Params$Resource$Policies$Delete extends StandardParameters {
    /**
     * Optional. The expected `etag` of the policy to delete. If the value does not match the value that is stored in IAM, the request fails with a `409` error code and `ABORTED` status. If you omit this field, the policy is deleted regardless of its current `etag`.
     */
    etag?: string;
    /**
     * Required. The resource name of the policy to delete. Format: `policies/{attachment_point\}/denypolicies/{policy_id\}` Use the URL-encoded full resource name, which means that the forward-slash character, `/`, must be written as `%2F`. For example, `policies/cloudresourcemanager.googleapis.com%2Fprojects%2Fmy-project/denypolicies/my-policy`. For organizations and folders, use the numeric ID in the full resource name. For projects, you can use the alphanumeric or the numeric ID.
     */
    name?: string;
  }
  export interface Params$Resource$Policies$Get extends StandardParameters {
    /**
     * Required. The resource name of the policy to retrieve. Format: `policies/{attachment_point\}/denypolicies/{policy_id\}` Use the URL-encoded full resource name, which means that the forward-slash character, `/`, must be written as `%2F`. For example, `policies/cloudresourcemanager.googleapis.com%2Fprojects%2Fmy-project/denypolicies/my-policy`. For organizations and folders, use the numeric ID in the full resource name. For projects, you can use the alphanumeric or the numeric ID.
     */
    name?: string;
  }
  export interface Params$Resource$Policies$Listpolicies
    extends StandardParameters {
    /**
     * The maximum number of policies to return. IAM ignores this value and uses the value 1000.
     */
    pageSize?: number;
    /**
     * A page token received in a ListPoliciesResponse. Provide this token to retrieve the next page.
     */
    pageToken?: string;
    /**
     * Required. The resource that the policy is attached to, along with the kind of policy to list. Format: `policies/{attachment_point\}/denypolicies` The attachment point is identified by its URL-encoded full resource name, which means that the forward-slash character, `/`, must be written as `%2F`. For example, `policies/cloudresourcemanager.googleapis.com%2Fprojects%2Fmy-project/denypolicies`. For organizations and folders, use the numeric ID in the full resource name. For projects, you can use the alphanumeric or the numeric ID.
     */
    parent?: string;
  }
  export interface Params$Resource$Policies$Update extends StandardParameters {
    /**
     * Immutable. The resource name of the `Policy`, which must be unique. Format: `policies/{attachment_point\}/denypolicies/{policy_id\}` The attachment point is identified by its URL-encoded full resource name, which means that the forward-slash character, `/`, must be written as `%2F`. For example, `policies/cloudresourcemanager.googleapis.com%2Fprojects%2Fmy-project/denypolicies/my-deny-policy`. For organizations and folders, use the numeric ID in the full resource name. For projects, requests can use the alphanumeric or the numeric ID. Responses always contain the numeric ID.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV2Policy;
  }

  export class Resource$Policies$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Policies$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Policies$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Policies$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Policies$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Policies$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Policies$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Policies$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Policies$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Policies$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
}
