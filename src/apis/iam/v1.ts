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
 * Google Identity and Access Management (IAM) API
 *
 * Manages identity and access control for Google Cloud Platform resources,
 * including the creation of service accounts, which you can use to authenticate
 * to Google and make API calls.
 *
 * @example
 * const google = require('googleapis');
 * const iam = google.iam('v1');
 *
 * @namespace iam
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Iam
 */
export class Iam {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  iamPolicies: Resource$Iampolicies;
  organizations: Resource$Organizations;
  permissions: Resource$Permissions;
  projects: Resource$Projects;
  roles: Resource$Roles;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.iamPolicies = new Resource$Iampolicies(this);
    this.organizations = new Resource$Organizations(this);
    this.permissions = new Resource$Permissions(this);
    this.projects = new Resource$Projects(this);
    this.roles = new Resource$Roles(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * Contains information about an auditable service.
 */
export interface Schema$AuditableService {
  /**
   * Public name of the service. For example, the service name for Cloud IAM is
   * &#39;iam.googleapis.com&#39;.
   */
  name: string;
}
/**
 * Specifies the audit configuration for a service. The configuration determines
 * which permission types are logged, and what identities, if any, are exempted
 * from logging. An AuditConfig must have one or more AuditLogConfigs.  If there
 * are AuditConfigs for both `allServices` and a specific service, the union of
 * the two AuditConfigs is used for that service: the log_types specified in
 * each AuditConfig are enabled, and the exempted_members in each AuditLogConfig
 * are exempted.  Example Policy with multiple AuditConfigs:      {
 * &quot;audit_configs&quot;: [         {           &quot;service&quot;:
 * &quot;allServices&quot;           &quot;audit_log_configs&quot;: [ {
 * &quot;log_type&quot;: &quot;DATA_READ&quot;, &quot;exempted_members&quot;: [
 * &quot;user:foo@gmail.com&quot;               ]             },             {
 * &quot;log_type&quot;: &quot;DATA_WRITE&quot;,             },             {
 * &quot;log_type&quot;: &quot;ADMIN_READ&quot;,             }           ] }, {
 * &quot;service&quot;: &quot;fooservice.googleapis.com&quot;
 * &quot;audit_log_configs&quot;: [             { &quot;log_type&quot;:
 * &quot;DATA_READ&quot;,             },             { &quot;log_type&quot;:
 * &quot;DATA_WRITE&quot;,               &quot;exempted_members&quot;: [
 * &quot;user:bar@gmail.com&quot;               ]             }           ] } ]
 * }  For fooservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ
 * logging. It also exempts foo@gmail.com from DATA_READ logging, and
 * bar@gmail.com from DATA_WRITE logging.
 */
export interface Schema$AuditConfig {
  /**
   * The configuration for logging of each type of permission. Next ID: 4
   */
  auditLogConfigs: Schema$AuditLogConfig[];
  /**
   * Specifies a service that will be enabled for audit logging. For example,
   * `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a
   * special value that covers all services.
   */
  service: string;
}
/**
 * Audit log information specific to Cloud IAM. This message is serialized as an
 * `Any` type in the `ServiceData` message of an `AuditLog` message.
 */
export interface Schema$AuditData {
  /**
   * Policy delta between the original policy and the newly set policy.
   */
  policyDelta: Schema$PolicyDelta;
}
/**
 * Provides the configuration for logging a type of permissions. Example:      {
 * &quot;audit_log_configs&quot;: [         {           &quot;log_type&quot;:
 * &quot;DATA_READ&quot;,           &quot;exempted_members&quot;: [
 * &quot;user:foo@gmail.com&quot;           ]         },         {
 * &quot;log_type&quot;: &quot;DATA_WRITE&quot;,         }       ]     }  This
 * enables &#39;DATA_READ&#39; and &#39;DATA_WRITE&#39; logging, while exempting
 * foo@gmail.com from DATA_READ logging.
 */
export interface Schema$AuditLogConfig {
  /**
   * Specifies the identities that do not cause logging for this type of
   * permission. Follows the same format of Binding.members.
   */
  exemptedMembers: string[];
  /**
   * The log type that this config enables.
   */
  logType: string;
}
/**
 * Associates `members` with a `role`.
 */
export interface Schema$Binding {
  /**
   * Specifies the identities requesting access for a Cloud Platform resource.
   * `members` can have the following values:  * `allUsers`: A special
   * identifier that represents anyone who is    on the internet; with or
   * without a Google account.  * `allAuthenticatedUsers`: A special identifier
   * that represents anyone    who is authenticated with a Google account or a
   * service account.  * `user:{emailid}`: An email address that represents a
   * specific Google    account. For example, `alice@gmail.com` or
   * `joe@example.com`.   * `serviceAccount:{emailid}`: An email address that
   * represents a service    account. For example,
   * `my-other-app@appspot.gserviceaccount.com`.  * `group:{emailid}`: An email
   * address that represents a Google group.    For example,
   * `admins@example.com`.   * `domain:{domain}`: A Google Apps domain name that
   * represents all the    users of that domain. For example, `google.com` or
   * `example.com`.
   */
  members: string[];
  /**
   * Role that is assigned to `members`. For example, `roles/viewer`,
   * `roles/editor`, or `roles/owner`. Required
   */
  role: string;
}
/**
 * One delta entry for Binding. Each individual change (only one member in each
 * entry) to a binding will be a separate entry.
 */
export interface Schema$BindingDelta {
  /**
   * The action that was performed on a Binding. Required
   */
  action: string;
  /**
   * A single identity requesting access for a Cloud Platform resource. Follows
   * the same format of Binding.members. Required
   */
  member: string;
  /**
   * Role that is assigned to `members`. For example, `roles/viewer`,
   * `roles/editor`, or `roles/owner`. Required
   */
  role: string;
}
/**
 * The request to create a new role.
 */
export interface Schema$CreateRoleRequest {
  /**
   * The Role resource to create.
   */
  role: Schema$Role;
  /**
   * The role id to use for this role.
   */
  roleId: string;
}
/**
 * The service account key create request.
 */
export interface Schema$CreateServiceAccountKeyRequest {
  /**
   * Which type of key and algorithm to use for the key. The default is
   * currently a 2K RSA key.  However this may change in the future.
   */
  keyAlgorithm: string;
  /**
   * The output format of the private key. The default value is
   * `TYPE_GOOGLE_CREDENTIALS_FILE`, which is the Google Credentials File
   * format.
   */
  privateKeyType: string;
}
/**
 * The service account create request.
 */
export interface Schema$CreateServiceAccountRequest {
  /**
   * Required. The account id that is used to generate the service account email
   * address and a stable unique id. It is unique within a project, must be 6-30
   * characters long, and match the regular expression
   * `[a-z]([-a-z0-9]*[a-z0-9])` to comply with RFC1035.
   */
  accountId: string;
  /**
   * The ServiceAccount resource to create. Currently, only the following values
   * are user assignable: `display_name` .
   */
  serviceAccount: Schema$ServiceAccount;
}
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request or
 * the response type of an API method. For instance:      service Foo { rpc
 * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
 * representation for `Empty` is empty JSON object `{}`.
 */
export interface Schema$Empty {}
/**
 * The response containing the roles defined under a resource.
 */
export interface Schema$ListRolesResponse {
  /**
   * To retrieve the next page of results, set `ListRolesRequest.page_token` to
   * this value.
   */
  nextPageToken: string;
  /**
   * The Roles defined on this resource.
   */
  roles: Schema$Role[];
}
/**
 * The service account keys list response.
 */
export interface Schema$ListServiceAccountKeysResponse {
  /**
   * The public keys for the service account.
   */
  keys: Schema$ServiceAccountKey[];
}
/**
 * The service account list response.
 */
export interface Schema$ListServiceAccountsResponse {
  /**
   * The list of matching service accounts.
   */
  accounts: Schema$ServiceAccount[];
  /**
   * To retrieve the next page of results, set
   * ListServiceAccountsRequest.page_token to this value.
   */
  nextPageToken: string;
}
/**
 * A permission which can be included by a role.
 */
export interface Schema$Permission {
  /**
   * The service API associated with the permission is not enabled.
   */
  apiDisabled: boolean;
  /**
   * The current custom role support level.
   */
  customRolesSupportLevel: string;
  /**
   * A brief description of what this Permission is used for.
   */
  description: string;
  /**
   * The name of this Permission.
   */
  name: string;
  /**
   * This permission can ONLY be used in predefined roles.
   */
  onlyInPredefinedRoles: boolean;
  /**
   * The current launch stage of the permission.
   */
  stage: string;
  /**
   * The title of this Permission.
   */
  title: string;
}
/**
 * Defines an Identity and Access Management (IAM) policy. It is used to specify
 * access control policies for Cloud Platform resources.   A `Policy` consists
 * of a list of `bindings`. A `Binding` binds a list of `members` to a `role`,
 * where the members can be user accounts, Google groups, Google domains, and
 * service accounts. A `role` is a named list of permissions defined by IAM.
 * **Example**      {       &quot;bindings&quot;: [         { &quot;role&quot;:
 * &quot;roles/owner&quot;,           &quot;members&quot;: [
 * &quot;user:mike@example.com&quot;, &quot;group:admins@example.com&quot;,
 * &quot;domain:google.com&quot;,
 * &quot;serviceAccount:my-other-app@appspot.gserviceaccount.com&quot;, ] }, {
 * &quot;role&quot;: &quot;roles/viewer&quot;,           &quot;members&quot;:
 * [&quot;user:sean@example.com&quot;]         }       ]     }  For a
 * description of IAM and its features, see the [IAM developer&#39;s
 * guide](https://cloud.google.com/iam/docs).
 */
export interface Schema$Policy {
  /**
   * Specifies cloud audit logging configuration for this policy.
   */
  auditConfigs: Schema$AuditConfig[];
  /**
   * Associates a list of `members` to a `role`. `bindings` with no members will
   * result in an error.
   */
  bindings: Schema$Binding[];
  /**
   * `etag` is used for optimistic concurrency control as a way to help prevent
   * simultaneous updates of a policy from overwriting each other. It is
   * strongly suggested that systems make use of the `etag` in the
   * read-modify-write cycle to perform policy updates in order to avoid race
   * conditions: An `etag` is returned in the response to `getIamPolicy`, and
   * systems are expected to put that etag in the request to `setIamPolicy` to
   * ensure that their change will be applied to the same version of the policy.
   * If no `etag` is provided in the call to `setIamPolicy`, then the existing
   * policy is overwritten blindly.
   */
  etag: string;
  /**
   * Deprecated.
   */
  version: number;
}
/**
 * The difference delta between two policies.
 */
export interface Schema$PolicyDelta {
  /**
   * The delta for Bindings between two policies.
   */
  bindingDeltas: Schema$BindingDelta[];
}
/**
 * A request to get the list of auditable services for a resource.
 */
export interface Schema$QueryAuditableServicesRequest {
  /**
   * Required. The full resource name to query from the list of auditable
   * services.  The name follows the Google Cloud Platform resource format. For
   * example, a Cloud Platform project with id `my-project` will be named
   * `//cloudresourcemanager.googleapis.com/projects/my-project`.
   */
  fullResourceName: string;
}
/**
 * A response containing a list of auditable services for a resource.
 */
export interface Schema$QueryAuditableServicesResponse {
  /**
   * The auditable services for a resource.
   */
  services: Schema$AuditableService[];
}
/**
 * The grantable role query request.
 */
export interface Schema$QueryGrantableRolesRequest {
  /**
   * Required. The full resource name to query from the list of grantable roles.
   * The name follows the Google Cloud Platform resource format. For example, a
   * Cloud Platform project with id `my-project` will be named
   * `//cloudresourcemanager.googleapis.com/projects/my-project`.
   */
  fullResourceName: string;
  /**
   * Optional limit on the number of roles to include in the response.
   */
  pageSize: number;
  /**
   * Optional pagination token returned in an earlier
   * QueryGrantableRolesResponse.
   */
  pageToken: string;
  view: string;
}
/**
 * The grantable role query response.
 */
export interface Schema$QueryGrantableRolesResponse {
  /**
   * To retrieve the next page of results, set
   * `QueryGrantableRolesRequest.page_token` to this value.
   */
  nextPageToken: string;
  /**
   * The list of matching roles.
   */
  roles: Schema$Role[];
}
/**
 * A request to get permissions which can be tested on a resource.
 */
export interface Schema$QueryTestablePermissionsRequest {
  /**
   * Required. The full resource name to query from the list of testable
   * permissions.  The name follows the Google Cloud Platform resource format.
   * For example, a Cloud Platform project with id `my-project` will be named
   * `//cloudresourcemanager.googleapis.com/projects/my-project`.
   */
  fullResourceName: string;
  /**
   * Optional limit on the number of permissions to include in the response.
   */
  pageSize: number;
  /**
   * Optional pagination token returned in an earlier
   * QueryTestablePermissionsRequest.
   */
  pageToken: string;
}
/**
 * The response containing permissions which can be tested on a resource.
 */
export interface Schema$QueryTestablePermissionsResponse {
  /**
   * To retrieve the next page of results, set
   * `QueryTestableRolesRequest.page_token` to this value.
   */
  nextPageToken: string;
  /**
   * The Permissions testable on the requested resource.
   */
  permissions: Schema$Permission[];
}
/**
 * A role in the Identity and Access Management API.
 */
export interface Schema$Role {
  /**
   * The current deleted state of the role. This field is read only. It will be
   * ignored in calls to CreateRole and UpdateRole.
   */
  deleted: boolean;
  /**
   * Optional.  A human-readable description for the role.
   */
  description: string;
  /**
   * Used to perform a consistent read-modify-write.
   */
  etag: string;
  /**
   * The names of the permissions this role grants when bound in an IAM policy.
   */
  includedPermissions: string[];
  /**
   * The name of the role.  When Role is used in CreateRole, the role name must
   * not be set.  When Role is used in output and other input such as
   * UpdateRole, the role name is the complete path, e.g., roles/logging.viewer
   * for curated roles and organizations/{ORGANIZATION_ID}/roles/logging.viewer
   * for custom roles.
   */
  name: string;
  /**
   * The current launch stage of the role.
   */
  stage: string;
  /**
   * Optional.  A human-readable title for the role.  Typically this is limited
   * to 100 UTF-8 bytes.
   */
  title: string;
}
/**
 * A service account in the Identity and Access Management API.  To create a
 * service account, specify the `project_id` and the `account_id` for the
 * account.  The `account_id` is unique within the project, and is used to
 * generate the service account email address and a stable `unique_id`.  If the
 * account already exists, the account&#39;s resource name is returned in the
 * format of projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}. The caller can use
 * the name in other methods to access the account.  All other methods can
 * identify the service account using the format
 * `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`. Using `-` as a wildcard
 * for the `PROJECT_ID` will infer the project from the account. The `ACCOUNT`
 * value can be the `email` address or the `unique_id` of the service account.
 */
export interface Schema$ServiceAccount {
  /**
   * Optional. A user-specified description of the service account.  Must be
   * fewer than 100 UTF-8 bytes.
   */
  displayName: string;
  /**
   * @OutputOnly The email address of the service account.
   */
  email: string;
  /**
   * Used to perform a consistent read-modify-write.
   */
  etag: string;
  /**
   * The resource name of the service account in the following format:
   * `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`.  Requests using `-` as a
   * wildcard for the `PROJECT_ID` will infer the project from the `account` and
   * the `ACCOUNT` value can be the `email` address or the `unique_id` of the
   * service account.  In responses the resource name will always be in the
   * format `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`.
   */
  name: string;
  /**
   * @OutputOnly The OAuth2 client id for the service account. This is used in
   * conjunction with the OAuth2 clientconfig API to make three legged OAuth2
   * (3LO) flows to access the data of Google users.
   */
  oauth2ClientId: string;
  /**
   * @OutputOnly The id of the project that owns the service account.
   */
  projectId: string;
  /**
   * @OutputOnly The unique and stable id of the service account.
   */
  uniqueId: string;
}
/**
 * Represents a service account key.  A service account has two sets of
 * key-pairs: user-managed, and system-managed.  User-managed key-pairs can be
 * created and deleted by users.  Users are responsible for rotating these keys
 * periodically to ensure security of their service accounts.  Users retain the
 * private key of these key-pairs, and Google retains ONLY the public key.
 * System-managed key-pairs are managed automatically by Google, and rotated
 * daily without user intervention.  The private key never leaves Google&#39;s
 * servers to maximize security.  Public keys for all service accounts are also
 * published at the OAuth2 Service Account API.
 */
export interface Schema$ServiceAccountKey {
  /**
   * Specifies the algorithm (and possibly key size) for the key.
   */
  keyAlgorithm: string;
  /**
   * The resource name of the service account key in the following format
   * `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}`.
   */
  name: string;
  /**
   * The private key data. Only provided in `CreateServiceAccountKey` responses.
   * Make sure to keep the private key data secure because it allows for the
   * assertion of the service account identity. When base64 decoded, the private
   * key data can be used to authenticate with Google API client libraries and
   * with &lt;a
   * href=&quot;/sdk/gcloud/reference/auth/activate-service-account&quot;&gt;gcloud
   * auth activate-service-account&lt;/a&gt;.
   */
  privateKeyData: string;
  /**
   * The output format for the private key. Only provided in
   * `CreateServiceAccountKey` responses, not in `GetServiceAccountKey` or
   * `ListServiceAccountKey` responses.  Google never exposes system-managed
   * private keys, and never retains user-managed private keys.
   */
  privateKeyType: string;
  /**
   * The public key data. Only provided in `GetServiceAccountKey` responses.
   */
  publicKeyData: string;
  /**
   * The key can be used after this timestamp.
   */
  validAfterTime: string;
  /**
   * The key can be used before this timestamp.
   */
  validBeforeTime: string;
}
/**
 * Request message for `SetIamPolicy` method.
 */
export interface Schema$SetIamPolicyRequest {
  /**
   * REQUIRED: The complete policy to be applied to the `resource`. The size of
   * the policy is limited to a few 10s of KB. An empty policy is a valid policy
   * but certain Cloud Platform services (such as Projects) might reject them.
   */
  policy: Schema$Policy;
  /**
   * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only
   * the fields in the mask will be modified. If no mask is provided, the
   * following default mask is used: paths: &quot;bindings, etag&quot; This
   * field is only used by Cloud IAM.
   */
  updateMask: string;
}
/**
 * The service account sign blob request.
 */
export interface Schema$SignBlobRequest {
  /**
   * The bytes to sign.
   */
  bytesToSign: string;
}
/**
 * The service account sign blob response.
 */
export interface Schema$SignBlobResponse {
  /**
   * The id of the key used to sign the blob.
   */
  keyId: string;
  /**
   * The signed blob.
   */
  signature: string;
}
/**
 * The service account sign JWT request.
 */
export interface Schema$SignJwtRequest {
  /**
   * The JWT payload to sign, a JSON JWT Claim set.
   */
  payload: string;
}
/**
 * The service account sign JWT response.
 */
export interface Schema$SignJwtResponse {
  /**
   * The id of the key used to sign the JWT.
   */
  keyId: string;
  /**
   * The signed JWT.
   */
  signedJwt: string;
}
/**
 * Request message for `TestIamPermissions` method.
 */
export interface Schema$TestIamPermissionsRequest {
  /**
   * The set of permissions to check for the `resource`. Permissions with
   * wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed. For
   * more information see [IAM
   * Overview](https://cloud.google.com/iam/docs/overview#permissions).
   */
  permissions: string[];
}
/**
 * Response message for `TestIamPermissions` method.
 */
export interface Schema$TestIamPermissionsResponse {
  /**
   * A subset of `TestPermissionsRequest.permissions` that the caller is
   * allowed.
   */
  permissions: string[];
}
/**
 * The request to undelete an existing role.
 */
export interface Schema$UndeleteRoleRequest {
  /**
   * Used to perform a consistent read-modify-write.
   */
  etag: string;
}

export class Resource$Iampolicies {
  root: Iam;
  constructor(root: Iam) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * iam.iamPolicies.queryAuditableServices
   * @desc Returns a list of services that support service level audit logging
   * configuration for the given resource.
   * @alias iam.iamPolicies.queryAuditableServices
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().QueryAuditableServicesRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  queryAuditableServices(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$QueryAuditableServicesResponse>;
  queryAuditableServices(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$QueryAuditableServicesResponse>,
      callback?: BodyResponseCallback<Schema$QueryAuditableServicesResponse>):
      void;
  queryAuditableServices(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$QueryAuditableServicesResponse>,
      callback?: BodyResponseCallback<Schema$QueryAuditableServicesResponse>):
      void|AxiosPromise<Schema$QueryAuditableServicesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/iamPolicies:queryAuditableServices')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$QueryAuditableServicesResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$QueryAuditableServicesResponse>(
          parameters);
    }
  }
}

export class Resource$Organizations {
  root: Iam;
  roles: Resource$Organizations$Roles;
  constructor(root: Iam) {
    this.root = root;
    this.getRoot.bind(this);
    this.roles = new Resource$Organizations$Roles(root);
  }

  getRoot() {
    return this.root;
  }
}
export class Resource$Organizations$Roles {
  root: Iam;
  constructor(root: Iam) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * iam.organizations.roles.create
   * @desc Creates a new Role.
   * @alias iam.organizations.roles.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent The resource name of the parent resource in one of the following formats: `organizations/{ORGANIZATION_ID}` `projects/{PROJECT_ID}`
   * @param {().CreateRoleRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Role>;
  create(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Role>,
      callback?: BodyResponseCallback<Schema$Role>): void;
  create(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Role>,
      callback?: BodyResponseCallback<Schema$Role>):
      void|AxiosPromise<Schema$Role> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl + '/v1/{+parent}/roles').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Role>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Role>(parameters);
    }
  }


  /**
   * iam.organizations.roles.delete
   * @desc Soft deletes a role. The role is suspended and cannot be used to
   * create new IAM Policy Bindings. The Role will not be included in
   * `ListRoles()` unless `show_deleted` is set in the `ListRolesRequest`. The
   * Role contains the deleted boolean set. Existing Bindings remains, but are
   * inactive. The Role can be undeleted within 7 days. After 7 days the Role is
   * deleted and all Bindings associated with the role are removed.
   * @alias iam.organizations.roles.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.etag Used to perform a consistent read-modify-write.
   * @param {string} params.name The resource name of the role in one of the following formats: `organizations/{ORGANIZATION_ID}/roles/{ROLE_NAME}` `projects/{PROJECT_ID}/roles/{ROLE_NAME}`
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Role>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Role>,
      callback?: BodyResponseCallback<Schema$Role>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Role>,
      callback?: BodyResponseCallback<Schema$Role>):
      void|AxiosPromise<Schema$Role> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Role>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Role>(parameters);
    }
  }


  /**
   * iam.organizations.roles.get
   * @desc Gets a Role definition.
   * @alias iam.organizations.roles.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The resource name of the role in one of the following formats: `roles/{ROLE_NAME}` `organizations/{ORGANIZATION_ID}/roles/{ROLE_NAME}` `projects/{PROJECT_ID}/roles/{ROLE_NAME}`
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Role>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Role>,
      callback?: BodyResponseCallback<Schema$Role>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Role>,
      callback?: BodyResponseCallback<Schema$Role>):
      void|AxiosPromise<Schema$Role> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Role>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Role>(parameters);
    }
  }


  /**
   * iam.organizations.roles.list
   * @desc Lists the Roles defined on a resource.
   * @alias iam.organizations.roles.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.pageSize Optional limit on the number of roles to include in the response.
   * @param {string=} params.pageToken Optional pagination token returned in an earlier ListRolesResponse.
   * @param {string} params.parent The resource name of the parent resource in one of the following formats: `` (empty string) -- this refers to curated roles. `organizations/{ORGANIZATION_ID}` `projects/{PROJECT_ID}`
   * @param {boolean=} params.showDeleted Include Roles that have been deleted.
   * @param {string=} params.view Optional view for the returned Role objects.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListRolesResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListRolesResponse>,
      callback?: BodyResponseCallback<Schema$ListRolesResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListRolesResponse>,
      callback?: BodyResponseCallback<Schema$ListRolesResponse>):
      void|AxiosPromise<Schema$ListRolesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl + '/v1/{+parent}/roles').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListRolesResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListRolesResponse>(parameters);
    }
  }


  /**
   * iam.organizations.roles.patch
   * @desc Updates a Role definition.
   * @alias iam.organizations.roles.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The resource name of the role in one of the following formats: `roles/{ROLE_NAME}` `organizations/{ORGANIZATION_ID}/roles/{ROLE_NAME}` `projects/{PROJECT_ID}/roles/{ROLE_NAME}`
   * @param {string=} params.updateMask A mask describing which fields in the Role have changed.
   * @param {().Role} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Role>;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Role>,
      callback?: BodyResponseCallback<Schema$Role>): void;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Role>,
      callback?: BodyResponseCallback<Schema$Role>):
      void|AxiosPromise<Schema$Role> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Role>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Role>(parameters);
    }
  }


  /**
   * iam.organizations.roles.undelete
   * @desc Undelete a Role, bringing it back in its previous state.
   * @alias iam.organizations.roles.undelete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The resource name of the role in one of the following formats: `organizations/{ORGANIZATION_ID}/roles/{ROLE_NAME}` `projects/{PROJECT_ID}/roles/{ROLE_NAME}`
   * @param {().UndeleteRoleRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  undelete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Role>;
  undelete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Role>,
      callback?: BodyResponseCallback<Schema$Role>): void;
  undelete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Role>,
      callback?: BodyResponseCallback<Schema$Role>):
      void|AxiosPromise<Schema$Role> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:undelete')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Role>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Role>(parameters);
    }
  }
}


export class Resource$Permissions {
  root: Iam;
  constructor(root: Iam) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * iam.permissions.queryTestablePermissions
   * @desc Lists the permissions testable on a resource. A permission is
   * testable if it can be tested for an identity on a resource.
   * @alias iam.permissions.queryTestablePermissions
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().QueryTestablePermissionsRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  queryTestablePermissions(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$QueryTestablePermissionsResponse>;
  queryTestablePermissions(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$QueryTestablePermissionsResponse>,
      callback?: BodyResponseCallback<Schema$QueryTestablePermissionsResponse>):
      void;
  queryTestablePermissions(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$QueryTestablePermissionsResponse>,
      callback?: BodyResponseCallback<Schema$QueryTestablePermissionsResponse>):
      void|AxiosPromise<Schema$QueryTestablePermissionsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/permissions:queryTestablePermissions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$QueryTestablePermissionsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$QueryTestablePermissionsResponse>(
          parameters);
    }
  }
}

export class Resource$Projects {
  root: Iam;
  roles: Resource$Projects$Roles;
  serviceAccounts: Resource$Projects$Serviceaccounts;
  constructor(root: Iam) {
    this.root = root;
    this.getRoot.bind(this);
    this.roles = new Resource$Projects$Roles(root);
    this.serviceAccounts = new Resource$Projects$Serviceaccounts(root);
  }

  getRoot() {
    return this.root;
  }
}
export class Resource$Projects$Roles {
  root: Iam;
  constructor(root: Iam) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * iam.projects.roles.create
   * @desc Creates a new Role.
   * @alias iam.projects.roles.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent The resource name of the parent resource in one of the following formats: `organizations/{ORGANIZATION_ID}` `projects/{PROJECT_ID}`
   * @param {().CreateRoleRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Role>;
  create(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Role>,
      callback?: BodyResponseCallback<Schema$Role>): void;
  create(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Role>,
      callback?: BodyResponseCallback<Schema$Role>):
      void|AxiosPromise<Schema$Role> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl + '/v1/{+parent}/roles').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Role>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Role>(parameters);
    }
  }


  /**
   * iam.projects.roles.delete
   * @desc Soft deletes a role. The role is suspended and cannot be used to
   * create new IAM Policy Bindings. The Role will not be included in
   * `ListRoles()` unless `show_deleted` is set in the `ListRolesRequest`. The
   * Role contains the deleted boolean set. Existing Bindings remains, but are
   * inactive. The Role can be undeleted within 7 days. After 7 days the Role is
   * deleted and all Bindings associated with the role are removed.
   * @alias iam.projects.roles.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.etag Used to perform a consistent read-modify-write.
   * @param {string} params.name The resource name of the role in one of the following formats: `organizations/{ORGANIZATION_ID}/roles/{ROLE_NAME}` `projects/{PROJECT_ID}/roles/{ROLE_NAME}`
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Role>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Role>,
      callback?: BodyResponseCallback<Schema$Role>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Role>,
      callback?: BodyResponseCallback<Schema$Role>):
      void|AxiosPromise<Schema$Role> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Role>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Role>(parameters);
    }
  }


  /**
   * iam.projects.roles.get
   * @desc Gets a Role definition.
   * @alias iam.projects.roles.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The resource name of the role in one of the following formats: `roles/{ROLE_NAME}` `organizations/{ORGANIZATION_ID}/roles/{ROLE_NAME}` `projects/{PROJECT_ID}/roles/{ROLE_NAME}`
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Role>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Role>,
      callback?: BodyResponseCallback<Schema$Role>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Role>,
      callback?: BodyResponseCallback<Schema$Role>):
      void|AxiosPromise<Schema$Role> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Role>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Role>(parameters);
    }
  }


  /**
   * iam.projects.roles.list
   * @desc Lists the Roles defined on a resource.
   * @alias iam.projects.roles.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.pageSize Optional limit on the number of roles to include in the response.
   * @param {string=} params.pageToken Optional pagination token returned in an earlier ListRolesResponse.
   * @param {string} params.parent The resource name of the parent resource in one of the following formats: `` (empty string) -- this refers to curated roles. `organizations/{ORGANIZATION_ID}` `projects/{PROJECT_ID}`
   * @param {boolean=} params.showDeleted Include Roles that have been deleted.
   * @param {string=} params.view Optional view for the returned Role objects.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListRolesResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListRolesResponse>,
      callback?: BodyResponseCallback<Schema$ListRolesResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListRolesResponse>,
      callback?: BodyResponseCallback<Schema$ListRolesResponse>):
      void|AxiosPromise<Schema$ListRolesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl + '/v1/{+parent}/roles').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListRolesResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListRolesResponse>(parameters);
    }
  }


  /**
   * iam.projects.roles.patch
   * @desc Updates a Role definition.
   * @alias iam.projects.roles.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The resource name of the role in one of the following formats: `roles/{ROLE_NAME}` `organizations/{ORGANIZATION_ID}/roles/{ROLE_NAME}` `projects/{PROJECT_ID}/roles/{ROLE_NAME}`
   * @param {string=} params.updateMask A mask describing which fields in the Role have changed.
   * @param {().Role} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Role>;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Role>,
      callback?: BodyResponseCallback<Schema$Role>): void;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Role>,
      callback?: BodyResponseCallback<Schema$Role>):
      void|AxiosPromise<Schema$Role> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Role>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Role>(parameters);
    }
  }


  /**
   * iam.projects.roles.undelete
   * @desc Undelete a Role, bringing it back in its previous state.
   * @alias iam.projects.roles.undelete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The resource name of the role in one of the following formats: `organizations/{ORGANIZATION_ID}/roles/{ROLE_NAME}` `projects/{PROJECT_ID}/roles/{ROLE_NAME}`
   * @param {().UndeleteRoleRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  undelete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Role>;
  undelete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Role>,
      callback?: BodyResponseCallback<Schema$Role>): void;
  undelete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Role>,
      callback?: BodyResponseCallback<Schema$Role>):
      void|AxiosPromise<Schema$Role> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:undelete')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Role>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Role>(parameters);
    }
  }
}

export class Resource$Projects$Serviceaccounts {
  root: Iam;
  keys: Resource$Projects$Serviceaccounts$Keys;
  constructor(root: Iam) {
    this.root = root;
    this.getRoot.bind(this);
    this.keys = new Resource$Projects$Serviceaccounts$Keys(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * iam.projects.serviceAccounts.create
   * @desc Creates a ServiceAccount and returns it.
   * @alias iam.projects.serviceAccounts.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The resource name of the project associated with the service accounts, such as `projects/my-project-123`.
   * @param {().CreateServiceAccountRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ServiceAccount>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ServiceAccount>,
      callback?: BodyResponseCallback<Schema$ServiceAccount>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ServiceAccount>,
      callback?: BodyResponseCallback<Schema$ServiceAccount>):
      void|AxiosPromise<Schema$ServiceAccount> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/serviceAccounts')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ServiceAccount>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ServiceAccount>(parameters);
    }
  }


  /**
   * iam.projects.serviceAccounts.delete
   * @desc Deletes a ServiceAccount.
   * @alias iam.projects.serviceAccounts.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The resource name of the service account in the following format: `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`. Using `-` as a wildcard for the `PROJECT_ID` will infer the project from the account. The `ACCOUNT` value can be the `email` address or the `unique_id` of the service account.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * iam.projects.serviceAccounts.get
   * @desc Gets a ServiceAccount.
   * @alias iam.projects.serviceAccounts.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The resource name of the service account in the following format: `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`. Using `-` as a wildcard for the `PROJECT_ID` will infer the project from the account. The `ACCOUNT` value can be the `email` address or the `unique_id` of the service account.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$ServiceAccount>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ServiceAccount>,
      callback?: BodyResponseCallback<Schema$ServiceAccount>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ServiceAccount>,
      callback?: BodyResponseCallback<Schema$ServiceAccount>):
      void|AxiosPromise<Schema$ServiceAccount> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ServiceAccount>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ServiceAccount>(parameters);
    }
  }


  /**
   * iam.projects.serviceAccounts.getIamPolicy
   * @desc Returns the IAM access control policy for a ServiceAccount.
   * @alias iam.projects.serviceAccounts.getIamPolicy
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getIamPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  getIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  getIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>):
      void|AxiosPromise<Schema$Policy> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Policy>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Policy>(parameters);
    }
  }


  /**
   * iam.projects.serviceAccounts.list
   * @desc Lists ServiceAccounts for a project.
   * @alias iam.projects.serviceAccounts.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The resource name of the project associated with the service accounts, such as `projects/my-project-123`.
   * @param {integer=} params.pageSize Optional limit on the number of service accounts to include in the response. Further accounts can subsequently be obtained by including the ListServiceAccountsResponse.next_page_token in a subsequent request.
   * @param {string=} params.pageToken Optional pagination token returned in an earlier ListServiceAccountsResponse.next_page_token.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListServiceAccountsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListServiceAccountsResponse>,
      callback?: BodyResponseCallback<Schema$ListServiceAccountsResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListServiceAccountsResponse>,
      callback?: BodyResponseCallback<Schema$ListServiceAccountsResponse>):
      void|AxiosPromise<Schema$ListServiceAccountsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/serviceAccounts')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListServiceAccountsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ListServiceAccountsResponse>(parameters);
    }
  }


  /**
   * iam.projects.serviceAccounts.setIamPolicy
   * @desc Sets the IAM access control policy for a ServiceAccount.
   * @alias iam.projects.serviceAccounts.setIamPolicy
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
   * @param {().SetIamPolicyRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  setIamPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  setIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  setIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>):
      void|AxiosPromise<Schema$Policy> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Policy>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Policy>(parameters);
    }
  }


  /**
   * iam.projects.serviceAccounts.signBlob
   * @desc Signs a blob using a service account's system-managed private key.
   * @alias iam.projects.serviceAccounts.signBlob
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The resource name of the service account in the following format: `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`. Using `-` as a wildcard for the `PROJECT_ID` will infer the project from the account. The `ACCOUNT` value can be the `email` address or the `unique_id` of the service account.
   * @param {().SignBlobRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  signBlob(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$SignBlobResponse>;
  signBlob(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$SignBlobResponse>,
      callback?: BodyResponseCallback<Schema$SignBlobResponse>): void;
  signBlob(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$SignBlobResponse>,
      callback?: BodyResponseCallback<Schema$SignBlobResponse>):
      void|AxiosPromise<Schema$SignBlobResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:signBlob')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$SignBlobResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$SignBlobResponse>(parameters);
    }
  }


  /**
   * iam.projects.serviceAccounts.signJwt
   * @desc Signs a JWT using a service account's system-managed private key.  If
   * no expiry time (`exp`) is provided in the `SignJwtRequest`, IAM sets an an
   * expiry time of one hour by default. If you request an expiry time of more
   * than one hour, the request will fail.
   * @alias iam.projects.serviceAccounts.signJwt
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The resource name of the service account in the following format: `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`. Using `-` as a wildcard for the `PROJECT_ID` will infer the project from the account. The `ACCOUNT` value can be the `email` address or the `unique_id` of the service account.
   * @param {().SignJwtRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  signJwt(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$SignJwtResponse>;
  signJwt(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$SignJwtResponse>,
      callback?: BodyResponseCallback<Schema$SignJwtResponse>): void;
  signJwt(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$SignJwtResponse>,
      callback?: BodyResponseCallback<Schema$SignJwtResponse>):
      void|AxiosPromise<Schema$SignJwtResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl + '/v1/{+name}:signJwt').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$SignJwtResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$SignJwtResponse>(parameters);
    }
  }


  /**
   * iam.projects.serviceAccounts.testIamPermissions
   * @desc Tests the specified permissions against the IAM access control policy
   * for a ServiceAccount.
   * @alias iam.projects.serviceAccounts.testIamPermissions
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
   * @param {().TestIamPermissionsRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  testIamPermissions(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$TestIamPermissionsResponse>;
  testIamPermissions(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
  testIamPermissions(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
      void|AxiosPromise<Schema$TestIamPermissionsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TestIamPermissionsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
    }
  }


  /**
   * iam.projects.serviceAccounts.update
   * @desc Updates a ServiceAccount.  Currently, only the following fields are
   * updatable: `display_name` . The `etag` is mandatory.
   * @alias iam.projects.serviceAccounts.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The resource name of the service account in the following format: `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`.  Requests using `-` as a wildcard for the `PROJECT_ID` will infer the project from the `account` and the `ACCOUNT` value can be the `email` address or the `unique_id` of the service account.  In responses the resource name will always be in the format `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`.
   * @param {().ServiceAccount} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ServiceAccount>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ServiceAccount>,
      callback?: BodyResponseCallback<Schema$ServiceAccount>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ServiceAccount>,
      callback?: BodyResponseCallback<Schema$ServiceAccount>):
      void|AxiosPromise<Schema$ServiceAccount> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ServiceAccount>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ServiceAccount>(parameters);
    }
  }
}
export class Resource$Projects$Serviceaccounts$Keys {
  root: Iam;
  constructor(root: Iam) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * iam.projects.serviceAccounts.keys.create
   * @desc Creates a ServiceAccountKey and returns it.
   * @alias iam.projects.serviceAccounts.keys.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The resource name of the service account in the following format: `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`. Using `-` as a wildcard for the `PROJECT_ID` will infer the project from the account. The `ACCOUNT` value can be the `email` address or the `unique_id` of the service account.
   * @param {().CreateServiceAccountKeyRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ServiceAccountKey>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ServiceAccountKey>,
      callback?: BodyResponseCallback<Schema$ServiceAccountKey>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ServiceAccountKey>,
      callback?: BodyResponseCallback<Schema$ServiceAccountKey>):
      void|AxiosPromise<Schema$ServiceAccountKey> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/keys').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ServiceAccountKey>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ServiceAccountKey>(parameters);
    }
  }


  /**
   * iam.projects.serviceAccounts.keys.delete
   * @desc Deletes a ServiceAccountKey.
   * @alias iam.projects.serviceAccounts.keys.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The resource name of the service account key in the following format: `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}`. Using `-` as a wildcard for the `PROJECT_ID` will infer the project from the account. The `ACCOUNT` value can be the `email` address or the `unique_id` of the service account.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * iam.projects.serviceAccounts.keys.get
   * @desc Gets the ServiceAccountKey by key id.
   * @alias iam.projects.serviceAccounts.keys.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The resource name of the service account key in the following format: `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}`.  Using `-` as a wildcard for the `PROJECT_ID` will infer the project from the account. The `ACCOUNT` value can be the `email` address or the `unique_id` of the service account.
   * @param {string=} params.publicKeyType The output format of the public key requested. X509_PEM is the default output format.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$ServiceAccountKey>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ServiceAccountKey>,
      callback?: BodyResponseCallback<Schema$ServiceAccountKey>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ServiceAccountKey>,
      callback?: BodyResponseCallback<Schema$ServiceAccountKey>):
      void|AxiosPromise<Schema$ServiceAccountKey> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ServiceAccountKey>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ServiceAccountKey>(parameters);
    }
  }


  /**
   * iam.projects.serviceAccounts.keys.list
   * @desc Lists ServiceAccountKeys.
   * @alias iam.projects.serviceAccounts.keys.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.keyTypes Filters the types of keys the user wants to include in the list response. Duplicate key types are not allowed. If no key type is provided, all keys are returned.
   * @param {string} params.name The resource name of the service account in the following format: `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`.  Using `-` as a wildcard for the `PROJECT_ID`, will infer the project from the account. The `ACCOUNT` value can be the `email` address or the `unique_id` of the service account.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListServiceAccountKeysResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListServiceAccountKeysResponse>,
      callback?: BodyResponseCallback<Schema$ListServiceAccountKeysResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListServiceAccountKeysResponse>,
      callback?: BodyResponseCallback<Schema$ListServiceAccountKeysResponse>):
      void|AxiosPromise<Schema$ListServiceAccountKeysResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/keys').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListServiceAccountKeysResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ListServiceAccountKeysResponse>(
          parameters);
    }
  }
}



export class Resource$Roles {
  root: Iam;
  constructor(root: Iam) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * iam.roles.get
   * @desc Gets a Role definition.
   * @alias iam.roles.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The resource name of the role in one of the following formats: `roles/{ROLE_NAME}` `organizations/{ORGANIZATION_ID}/roles/{ROLE_NAME}` `projects/{PROJECT_ID}/roles/{ROLE_NAME}`
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Role>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Role>,
      callback?: BodyResponseCallback<Schema$Role>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Role>,
      callback?: BodyResponseCallback<Schema$Role>):
      void|AxiosPromise<Schema$Role> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Role>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Role>(parameters);
    }
  }


  /**
   * iam.roles.list
   * @desc Lists the Roles defined on a resource.
   * @alias iam.roles.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.pageSize Optional limit on the number of roles to include in the response.
   * @param {string=} params.pageToken Optional pagination token returned in an earlier ListRolesResponse.
   * @param {string=} params.parent The resource name of the parent resource in one of the following formats: `` (empty string) -- this refers to curated roles. `organizations/{ORGANIZATION_ID}` `projects/{PROJECT_ID}`
   * @param {boolean=} params.showDeleted Include Roles that have been deleted.
   * @param {string=} params.view Optional view for the returned Role objects.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListRolesResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListRolesResponse>,
      callback?: BodyResponseCallback<Schema$ListRolesResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListRolesResponse>,
      callback?: BodyResponseCallback<Schema$ListRolesResponse>):
      void|AxiosPromise<Schema$ListRolesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/roles').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListRolesResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListRolesResponse>(parameters);
    }
  }


  /**
   * iam.roles.queryGrantableRoles
   * @desc Queries roles that can be granted on a particular resource. A role is
   * grantable if it can be used as the role in a binding for a policy for that
   * resource.
   * @alias iam.roles.queryGrantableRoles
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().QueryGrantableRolesRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  queryGrantableRoles(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$QueryGrantableRolesResponse>;
  queryGrantableRoles(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$QueryGrantableRolesResponse>,
      callback?: BodyResponseCallback<Schema$QueryGrantableRolesResponse>):
      void;
  queryGrantableRoles(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$QueryGrantableRolesResponse>,
      callback?: BodyResponseCallback<Schema$QueryGrantableRolesResponse>):
      void|AxiosPromise<Schema$QueryGrantableRolesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://iam.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/roles:queryGrantableRoles')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$QueryGrantableRolesResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$QueryGrantableRolesResponse>(parameters);
    }
  }
}
