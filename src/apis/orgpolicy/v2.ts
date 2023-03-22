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

export namespace orgpolicy_v2 {
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
   * Organization Policy API
   *
   * The Org Policy API allows users to configure governance rules on their GCP resources across the Cloud Resource Hierarchy.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const orgpolicy = google.orgpolicy('v2');
   * ```
   */
  export class Orgpolicy {
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
   * Similar to PolicySpec but with an extra 'launch' field for launch reference. The PolicySpec here is specific for dry-run/darklaunch.
   */
  export interface Schema$GoogleCloudOrgpolicyV2AlternatePolicySpec {
    /**
     * Reference to the launch that will be used while audit logging and to control the launch. Should be set only in the alternate policy.
     */
    launch?: string | null;
    /**
     * Specify constraint for configurations of Google Cloud resources.
     */
    spec?: Schema$GoogleCloudOrgpolicyV2PolicySpec;
  }
  /**
   * A constraint describes a way to restrict resource's configuration. For example, you could enforce a constraint that controls which Google Cloud services can be activated across an organization, or whether a Compute Engine instance can have serial port connections established. Constraints can be configured by the organization policy administrator to fit the needs of the organization by setting a policy that includes constraints at different locations in the organization's resource hierarchy. Policies are inherited down the resource hierarchy from higher levels, but can also be overridden. For details about the inheritance rules please read about `policies`. Constraints have a default behavior determined by the `constraint_default` field, which is the enforcement behavior that is used in the absence of a policy being defined or inherited for the resource in question.
   */
  export interface Schema$GoogleCloudOrgpolicyV2Constraint {
    /**
     * Defines this constraint as being a BooleanConstraint.
     */
    booleanConstraint?: Schema$GoogleCloudOrgpolicyV2ConstraintBooleanConstraint;
    /**
     * The evaluation behavior of this constraint in the absence of a policy.
     */
    constraintDefault?: string | null;
    /**
     * Detailed description of what this constraint controls as well as how and where it is enforced. Mutable.
     */
    description?: string | null;
    /**
     * The human readable name. Mutable.
     */
    displayName?: string | null;
    /**
     * Defines this constraint as being a ListConstraint.
     */
    listConstraint?: Schema$GoogleCloudOrgpolicyV2ConstraintListConstraint;
    /**
     * Immutable. The resource name of the constraint. Must be in one of the following forms: * `projects/{project_number\}/constraints/{constraint_name\}` * `folders/{folder_id\}/constraints/{constraint_name\}` * `organizations/{organization_id\}/constraints/{constraint_name\}` For example, "/projects/123/constraints/compute.disableSerialPortAccess".
     */
    name?: string | null;
    /**
     * Shows if dry run is supported for this constraint or not.
     */
    supportsDryRun?: boolean | null;
  }
  /**
   * A constraint that is either enforced or not. For example, a constraint `constraints/compute.disableSerialPortAccess`. If it is enforced on a VM instance, serial port connections will not be opened to that instance.
   */
  export interface Schema$GoogleCloudOrgpolicyV2ConstraintBooleanConstraint {}
  /**
   * A constraint that allows or disallows a list of string values, which are configured by an Organization Policy administrator with a policy.
   */
  export interface Schema$GoogleCloudOrgpolicyV2ConstraintListConstraint {
    /**
     * Indicates whether values grouped into categories can be used in `Policy.allowed_values` and `Policy.denied_values`. For example, `"in:Python"` would match any value in the 'Python' group.
     */
    supportsIn?: boolean | null;
    /**
     * Indicates whether subtrees of the Resource Manager resource hierarchy can be used in `Policy.allowed_values` and `Policy.denied_values`. For example, `"under:folders/123"` would match any resource under the 'folders/123' folder.
     */
    supportsUnder?: boolean | null;
  }
  /**
   * A custom constraint defined by customers which can *only* be applied to the given resource types and organization. By creating a custom constraint, customers can apply policies of this custom constraint. *Creating a custom constraint itself does NOT apply any policy enforcement*.
   */
  export interface Schema$GoogleCloudOrgpolicyV2CustomConstraint {
    /**
     * Allow or deny type.
     */
    actionType?: string | null;
    /**
     * Org policy condition/expression. For example: `resource.instanceName.matches("[production|test]_.*_(\d)+")'` or, `resource.management.auto_upgrade == true` The max length of the condition is 1000 characters.
     */
    condition?: string | null;
    /**
     * Detailed information about this custom policy constraint. The max length of the description is 2000 characters.
     */
    description?: string | null;
    /**
     * One line display name for the UI. The max length of the display_name is 200 characters.
     */
    displayName?: string | null;
    /**
     * All the operations being applied for this constraint.
     */
    methodTypes?: string[] | null;
    /**
     * Immutable. Name of the constraint. This is unique within the organization. Format of the name should be * `organizations/{organization_id\}/customConstraints/{custom_constraint_id\}` Example: `organizations/123/customConstraints/custom.createOnlyE2TypeVms` The max length is 70 characters and the minimum length is 1. Note that the prefix `organizations/{organization_id\}/customConstraints/` is not counted.
     */
    name?: string | null;
    /**
     * Immutable. The resource instance type on which this policy applies. Format will be of the form : "/" Example: * `compute.googleapis.com/Instance`.
     */
    resourceTypes?: string[] | null;
    /**
     * Output only. The last time this custom constraint was updated. This represents the last time that the `CreateCustomConstraint` or `UpdateCustomConstraint` RPC was called
     */
    updateTime?: string | null;
  }
  /**
   * The response returned from the ListConstraints method.
   */
  export interface Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse {
    /**
     * The collection of constraints that are available on the targeted resource.
     */
    constraints?: Schema$GoogleCloudOrgpolicyV2Constraint[];
    /**
     * Page token used to retrieve the next page. This is currently not used.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response returned from the ListCustomConstraints method. It will be empty if no custom constraints are set on the organization resource.
   */
  export interface Schema$GoogleCloudOrgpolicyV2ListCustomConstraintsResponse {
    /**
     * All custom constraints that exist on the organization resource. It will be empty if no custom constraints are set.
     */
    customConstraints?: Schema$GoogleCloudOrgpolicyV2CustomConstraint[];
    /**
     * Page token used to retrieve the next page. This is currently not used, but the server may at any point start supplying a valid token.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response returned from the ListPolicies method. It will be empty if no policies are set on the resource.
   */
  export interface Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse {
    /**
     * Page token used to retrieve the next page. This is currently not used, but the server may at any point start supplying a valid token.
     */
    nextPageToken?: string | null;
    /**
     * All policies that exist on the resource. It will be empty if no policies are set.
     */
    policies?: Schema$GoogleCloudOrgpolicyV2Policy[];
  }
  /**
   * Defines an organization policy which is used to specify constraints for configurations of Google Cloud resources.
   */
  export interface Schema$GoogleCloudOrgpolicyV2Policy {
    /**
     * Deprecated.
     */
    alternate?: Schema$GoogleCloudOrgpolicyV2AlternatePolicySpec;
    /**
     * Dry-run policy. Audit-only policy, can be used to monitor how the policy would have impacted the existing and future resources if it's enforced.
     */
    dryRunSpec?: Schema$GoogleCloudOrgpolicyV2PolicySpec;
    /**
     * Immutable. The resource name of the policy. Must be one of the following forms, where constraint_name is the name of the constraint which this policy configures: * `projects/{project_number\}/policies/{constraint_name\}` * `folders/{folder_id\}/policies/{constraint_name\}` * `organizations/{organization_id\}/policies/{constraint_name\}` For example, "projects/123/policies/compute.disableSerialPortAccess". Note: `projects/{project_id\}/policies/{constraint_name\}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.
     */
    name?: string | null;
    /**
     * Basic information about the Organization Policy.
     */
    spec?: Schema$GoogleCloudOrgpolicyV2PolicySpec;
  }
  /**
   * Defines a Google Cloud policy specification which is used to specify constraints for configurations of Google Cloud resources.
   */
  export interface Schema$GoogleCloudOrgpolicyV2PolicySpec {
    /**
     * An opaque tag indicating the current version of the policy, used for concurrency control. This field is ignored if used in a `CreatePolicy` request. When the policy` is returned from either a `GetPolicy` or a `ListPolicies` request, this `etag` indicates the version of the current policy to use when executing a read-modify-write loop. When the policy is returned from a `GetEffectivePolicy` request, the `etag` will be unset.
     */
    etag?: string | null;
    /**
     * Determines the inheritance behavior for this policy. If `inherit_from_parent` is true, policy rules set higher up in the hierarchy (up to the closest root) are inherited and present in the effective policy. If it is false, then no rules are inherited, and this policy becomes the new root for evaluation. This field can be set only for policies which configure list constraints.
     */
    inheritFromParent?: boolean | null;
    /**
     * Ignores policies set above this resource and restores the `constraint_default` enforcement behavior of the specific constraint at this resource. This field can be set in policies for either list or boolean constraints. If set, `rules` must be empty and `inherit_from_parent` must be set to false.
     */
    reset?: boolean | null;
    /**
     * Up to 10 policy rules are allowed. In policies for boolean constraints, the following requirements apply: - There must be one and only one policy rule where condition is unset. - Boolean policy rules with conditions must set `enforced` to the opposite of the policy rule without a condition. - During policy evaluation, policy rules with conditions that are true for a target resource take precedence.
     */
    rules?: Schema$GoogleCloudOrgpolicyV2PolicySpecPolicyRule[];
    /**
     * Output only. The time stamp this was previously updated. This represents the last time a call to `CreatePolicy` or `UpdatePolicy` was made for that policy.
     */
    updateTime?: string | null;
  }
  /**
   * A rule used to express this policy.
   */
  export interface Schema$GoogleCloudOrgpolicyV2PolicySpecPolicyRule {
    /**
     * Setting this to true means that all values are allowed. This field can be set only in policies for list constraints.
     */
    allowAll?: boolean | null;
    /**
     * A condition which determines whether this rule is used in the evaluation of the policy. When set, the `expression` field in the `Expr' must include from 1 to 10 subexpressions, joined by the "||" or "&&" operators. Each subexpression must be of the form "resource.matchTag('/tag_key_short_name, 'tag_value_short_name')". or "resource.matchTagId('tagKeys/key_id', 'tagValues/value_id')". where key_name and value_name are the resource names for Label Keys and Values. These names are available from the Tag Manager Service. An example expression is: "resource.matchTag('123456789/environment, 'prod')". or "resource.matchTagId('tagKeys/123', 'tagValues/456')".
     */
    condition?: Schema$GoogleTypeExpr;
    /**
     * Setting this to true means that all values are denied. This field can be set only in policies for list constraints.
     */
    denyAll?: boolean | null;
    /**
     * If `true`, then the policy is enforced. If `false`, then any configuration is acceptable. This field can be set only in policies for boolean constraints.
     */
    enforce?: boolean | null;
    /**
     * List of values to be used for this policy rule. This field can be set only in policies for list constraints.
     */
    values?: Schema$GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues;
  }
  /**
   * A message that holds specific allowed and denied values. This message can define specific values and subtrees of the Resource Manager resource hierarchy (`Organizations`, `Folders`, `Projects`) that are allowed or denied. This is achieved by using the `under:` and optional `is:` prefixes. The `under:` prefix is used to denote resource subtree values. The `is:` prefix is used to denote specific values, and is required only if the value contains a ":". Values prefixed with "is:" are treated the same as values with no prefix. Ancestry subtrees must be in one of the following formats: - "projects/", e.g. "projects/tokyo-rain-123" - "folders/", e.g. "folders/1234" - "organizations/", e.g. "organizations/1234" The `supports_under` field of the associated `Constraint` defines whether ancestry prefixes can be used.
   */
  export interface Schema$GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues {
    /**
     * List of values allowed at this resource.
     */
    allowedValues?: string[] | null;
    /**
     * List of values denied at this resource.
     */
    deniedValues?: string[] | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$GoogleProtobufEmpty {}
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

  export class Resource$Folders {
    context: APIRequestContext;
    constraints: Resource$Folders$Constraints;
    policies: Resource$Folders$Policies;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.constraints = new Resource$Folders$Constraints(this.context);
      this.policies = new Resource$Folders$Policies(this.context);
    }
  }

  export class Resource$Folders$Constraints {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists constraints that could be applied on the specified resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/orgpolicy.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const orgpolicy = google.orgpolicy('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await orgpolicy.folders.constraints.list({
     *     // Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.
     *     pageSize: 'placeholder-value',
     *     // Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field.
     *     pageToken: 'placeholder-value',
     *     // Required. The Google Cloud resource that parents the constraint. Must be in one of the following forms: * `projects/{project_number\}` * `projects/{project_id\}` * `folders/{folder_id\}` * `organizations/{organization_id\}`
     *     parent: 'folders/my-folder',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "constraints": [],
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
      params: Params$Resource$Folders$Constraints$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Folders$Constraints$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse>;
    list(
      params: Params$Resource$Folders$Constraints$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Folders$Constraints$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse>
    ): void;
    list(
      params: Params$Resource$Folders$Constraints$List,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Folders$Constraints$List
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Constraints$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Constraints$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://orgpolicy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/constraints').replace(
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
        createAPIRequest<Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Folders$Constraints$List
    extends StandardParameters {
    /**
     * Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.
     */
    pageSize?: number;
    /**
     * Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field.
     */
    pageToken?: string;
    /**
     * Required. The Google Cloud resource that parents the constraint. Must be in one of the following forms: * `projects/{project_number\}` * `projects/{project_id\}` * `folders/{folder_id\}` * `organizations/{organization_id\}`
     */
    parent?: string;
  }

  export class Resource$Folders$Policies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the policy already exists on the given Google Cloud resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/orgpolicy.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const orgpolicy = google.orgpolicy('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await orgpolicy.folders.policies.create({
     *     // Required. The Google Cloud resource that will parent the new policy. Must be in one of the following forms: * `projects/{project_number\}` * `projects/{project_id\}` * `folders/{folder_id\}` * `organizations/{organization_id\}`
     *     parent: 'folders/my-folder',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alternate": {},
     *       //   "dryRunSpec": {},
     *       //   "name": "my_name",
     *       //   "spec": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternate": {},
     *   //   "dryRunSpec": {},
     *   //   "name": "my_name",
     *   //   "spec": {}
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
      params: Params$Resource$Folders$Policies$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Folders$Policies$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudOrgpolicyV2Policy>;
    create(
      params: Params$Resource$Folders$Policies$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Folders$Policies$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    create(
      params: Params$Resource$Folders$Policies$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Folders$Policies$Create
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudOrgpolicyV2Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Policies$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Policies$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://orgpolicy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/policies').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$GoogleCloudOrgpolicyV2Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudOrgpolicyV2Policy>(
          parameters
        );
      }
    }

    /**
     * Deletes a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or organization policy does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/orgpolicy.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const orgpolicy = google.orgpolicy('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await orgpolicy.folders.policies.delete({
     *     // Required. Name of the policy to delete. See the policy entry for naming rules.
     *     name: 'folders/my-folder/policies/my-policie',
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
      params: Params$Resource$Folders$Policies$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Folders$Policies$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Folders$Policies$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Folders$Policies$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Folders$Policies$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Folders$Policies$Delete
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Policies$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Policies$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://orgpolicy.googleapis.com/';
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets a policy on a resource. If no policy is set on the resource, `NOT_FOUND` is returned. The `etag` value can be used with `UpdatePolicy()` to update a policy during read-modify-write.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/orgpolicy.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const orgpolicy = google.orgpolicy('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await orgpolicy.folders.policies.get({
     *     // Required. Resource name of the policy. See `Policy` for naming requirements.
     *     name: 'folders/my-folder/policies/my-policie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternate": {},
     *   //   "dryRunSpec": {},
     *   //   "name": "my_name",
     *   //   "spec": {}
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
      params: Params$Resource$Folders$Policies$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Folders$Policies$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudOrgpolicyV2Policy>;
    get(
      params: Params$Resource$Folders$Policies$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Folders$Policies$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    get(
      params: Params$Resource$Folders$Policies$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Folders$Policies$Get
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudOrgpolicyV2Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Policies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Policies$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://orgpolicy.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudOrgpolicyV2Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudOrgpolicyV2Policy>(
          parameters
        );
      }
    }

    /**
     * Gets the effective policy on a resource. This is the result of merging policies in the resource hierarchy and evaluating conditions. The returned policy will not have an `etag` or `condition` set because it is an evaluated policy across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/orgpolicy.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const orgpolicy = google.orgpolicy('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await orgpolicy.folders.policies.getEffectivePolicy({
     *     // Required. The effective policy to compute. See `Policy` for naming rules.
     *     name: 'folders/my-folder/policies/my-policie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternate": {},
     *   //   "dryRunSpec": {},
     *   //   "name": "my_name",
     *   //   "spec": {}
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
    getEffectivePolicy(
      params: Params$Resource$Folders$Policies$Geteffectivepolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getEffectivePolicy(
      params?: Params$Resource$Folders$Policies$Geteffectivepolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudOrgpolicyV2Policy>;
    getEffectivePolicy(
      params: Params$Resource$Folders$Policies$Geteffectivepolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getEffectivePolicy(
      params: Params$Resource$Folders$Policies$Geteffectivepolicy,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    getEffectivePolicy(
      params: Params$Resource$Folders$Policies$Geteffectivepolicy,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    getEffectivePolicy(
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    getEffectivePolicy(
      paramsOrCallback?:
        | Params$Resource$Folders$Policies$Geteffectivepolicy
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudOrgpolicyV2Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Policies$Geteffectivepolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Policies$Geteffectivepolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://orgpolicy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:getEffectivePolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$GoogleCloudOrgpolicyV2Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudOrgpolicyV2Policy>(
          parameters
        );
      }
    }

    /**
     * Retrieves all of the policies that exist on a particular resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/orgpolicy.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const orgpolicy = google.orgpolicy('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await orgpolicy.folders.policies.list({
     *     // Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.
     *     pageSize: 'placeholder-value',
     *     // Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field.
     *     pageToken: 'placeholder-value',
     *     // Required. The target Google Cloud resource that parents the set of constraints and policies that will be returned from this call. Must be in one of the following forms: * `projects/{project_number\}` * `projects/{project_id\}` * `folders/{folder_id\}` * `organizations/{organization_id\}`
     *     parent: 'folders/my-folder',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "policies": []
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
      params: Params$Resource$Folders$Policies$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Folders$Policies$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse>;
    list(
      params: Params$Resource$Folders$Policies$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Folders$Policies$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse>
    ): void;
    list(
      params: Params$Resource$Folders$Policies$List,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Folders$Policies$List
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Policies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Policies$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://orgpolicy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/policies').replace(
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
        createAPIRequest<Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or the policy do not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the policy Note: the supplied policy will perform a full overwrite of all fields.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/orgpolicy.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const orgpolicy = google.orgpolicy('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await orgpolicy.folders.policies.patch({
     *     // Immutable. The resource name of the policy. Must be one of the following forms, where constraint_name is the name of the constraint which this policy configures: * `projects/{project_number\}/policies/{constraint_name\}` * `folders/{folder_id\}/policies/{constraint_name\}` * `organizations/{organization_id\}/policies/{constraint_name\}` For example, "projects/123/policies/compute.disableSerialPortAccess". Note: `projects/{project_id\}/policies/{constraint_name\}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.
     *     name: 'folders/my-folder/policies/my-policie',
     *     // Field mask used to specify the fields to be overwritten in the policy by the set. The fields specified in the update_mask are relative to the policy, not the full request.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alternate": {},
     *       //   "dryRunSpec": {},
     *       //   "name": "my_name",
     *       //   "spec": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternate": {},
     *   //   "dryRunSpec": {},
     *   //   "name": "my_name",
     *   //   "spec": {}
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
      params: Params$Resource$Folders$Policies$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Folders$Policies$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudOrgpolicyV2Policy>;
    patch(
      params: Params$Resource$Folders$Policies$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Folders$Policies$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    patch(
      params: Params$Resource$Folders$Policies$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Folders$Policies$Patch
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudOrgpolicyV2Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Policies$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Policies$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://orgpolicy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudOrgpolicyV2Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudOrgpolicyV2Policy>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Folders$Policies$Create
    extends StandardParameters {
    /**
     * Required. The Google Cloud resource that will parent the new policy. Must be in one of the following forms: * `projects/{project_number\}` * `projects/{project_id\}` * `folders/{folder_id\}` * `organizations/{organization_id\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudOrgpolicyV2Policy;
  }
  export interface Params$Resource$Folders$Policies$Delete
    extends StandardParameters {
    /**
     * Required. Name of the policy to delete. See the policy entry for naming rules.
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Policies$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the policy. See `Policy` for naming requirements.
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Policies$Geteffectivepolicy
    extends StandardParameters {
    /**
     * Required. The effective policy to compute. See `Policy` for naming rules.
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Policies$List
    extends StandardParameters {
    /**
     * Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.
     */
    pageSize?: number;
    /**
     * Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field.
     */
    pageToken?: string;
    /**
     * Required. The target Google Cloud resource that parents the set of constraints and policies that will be returned from this call. Must be in one of the following forms: * `projects/{project_number\}` * `projects/{project_id\}` * `folders/{folder_id\}` * `organizations/{organization_id\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Folders$Policies$Patch
    extends StandardParameters {
    /**
     * Immutable. The resource name of the policy. Must be one of the following forms, where constraint_name is the name of the constraint which this policy configures: * `projects/{project_number\}/policies/{constraint_name\}` * `folders/{folder_id\}/policies/{constraint_name\}` * `organizations/{organization_id\}/policies/{constraint_name\}` For example, "projects/123/policies/compute.disableSerialPortAccess". Note: `projects/{project_id\}/policies/{constraint_name\}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.
     */
    name?: string;
    /**
     * Field mask used to specify the fields to be overwritten in the policy by the set. The fields specified in the update_mask are relative to the policy, not the full request.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudOrgpolicyV2Policy;
  }

  export class Resource$Organizations {
    context: APIRequestContext;
    constraints: Resource$Organizations$Constraints;
    customConstraints: Resource$Organizations$Customconstraints;
    policies: Resource$Organizations$Policies;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.constraints = new Resource$Organizations$Constraints(this.context);
      this.customConstraints = new Resource$Organizations$Customconstraints(
        this.context
      );
      this.policies = new Resource$Organizations$Policies(this.context);
    }
  }

  export class Resource$Organizations$Constraints {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists constraints that could be applied on the specified resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/orgpolicy.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const orgpolicy = google.orgpolicy('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await orgpolicy.organizations.constraints.list({
     *     // Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.
     *     pageSize: 'placeholder-value',
     *     // Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field.
     *     pageToken: 'placeholder-value',
     *     // Required. The Google Cloud resource that parents the constraint. Must be in one of the following forms: * `projects/{project_number\}` * `projects/{project_id\}` * `folders/{folder_id\}` * `organizations/{organization_id\}`
     *     parent: 'organizations/my-organization',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "constraints": [],
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
      params: Params$Resource$Organizations$Constraints$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Organizations$Constraints$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse>;
    list(
      params: Params$Resource$Organizations$Constraints$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Constraints$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Constraints$List,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Constraints$List
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Constraints$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Constraints$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://orgpolicy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/constraints').replace(
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
        createAPIRequest<Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Constraints$List
    extends StandardParameters {
    /**
     * Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.
     */
    pageSize?: number;
    /**
     * Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field.
     */
    pageToken?: string;
    /**
     * Required. The Google Cloud resource that parents the constraint. Must be in one of the following forms: * `projects/{project_number\}` * `projects/{project_id\}` * `folders/{folder_id\}` * `organizations/{organization_id\}`
     */
    parent?: string;
  }

  export class Resource$Organizations$Customconstraints {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the organization does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the constraint already exists on the given organization.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/orgpolicy.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const orgpolicy = google.orgpolicy('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await orgpolicy.organizations.customConstraints.create({
     *     // Required. Must be in the following form: * `organizations/{organization_id\}`
     *     parent: 'organizations/my-organization',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "actionType": "my_actionType",
     *       //   "condition": "my_condition",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "methodTypes": [],
     *       //   "name": "my_name",
     *       //   "resourceTypes": [],
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "actionType": "my_actionType",
     *   //   "condition": "my_condition",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "methodTypes": [],
     *   //   "name": "my_name",
     *   //   "resourceTypes": [],
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
    create(
      params: Params$Resource$Organizations$Customconstraints$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Organizations$Customconstraints$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudOrgpolicyV2CustomConstraint>;
    create(
      params: Params$Resource$Organizations$Customconstraints$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Organizations$Customconstraints$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2CustomConstraint>,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2CustomConstraint>
    ): void;
    create(
      params: Params$Resource$Organizations$Customconstraints$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2CustomConstraint>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2CustomConstraint>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Organizations$Customconstraints$Create
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2CustomConstraint>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2CustomConstraint>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2CustomConstraint>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudOrgpolicyV2CustomConstraint>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Customconstraints$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Customconstraints$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://orgpolicy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/customConstraints').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$GoogleCloudOrgpolicyV2CustomConstraint>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudOrgpolicyV2CustomConstraint>(
          parameters
        );
      }
    }

    /**
     * Deletes a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/orgpolicy.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const orgpolicy = google.orgpolicy('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await orgpolicy.organizations.customConstraints.delete({
     *     // Required. Name of the custom constraint to delete. See the custom constraint entry for naming rules.
     *     name: 'organizations/my-organization/customConstraints/my-customConstraint',
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
      params: Params$Resource$Organizations$Customconstraints$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Organizations$Customconstraints$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Organizations$Customconstraints$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Organizations$Customconstraints$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Organizations$Customconstraints$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Organizations$Customconstraints$Delete
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Customconstraints$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Customconstraints$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://orgpolicy.googleapis.com/';
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the custom constraint does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/orgpolicy.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const orgpolicy = google.orgpolicy('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await orgpolicy.organizations.customConstraints.get({
     *     // Required. Resource name of the custom constraint. See the custom constraint entry for naming requirements.
     *     name: 'organizations/my-organization/customConstraints/my-customConstraint',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "actionType": "my_actionType",
     *   //   "condition": "my_condition",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "methodTypes": [],
     *   //   "name": "my_name",
     *   //   "resourceTypes": [],
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
      params: Params$Resource$Organizations$Customconstraints$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Organizations$Customconstraints$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudOrgpolicyV2CustomConstraint>;
    get(
      params: Params$Resource$Organizations$Customconstraints$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Customconstraints$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2CustomConstraint>,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2CustomConstraint>
    ): void;
    get(
      params: Params$Resource$Organizations$Customconstraints$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2CustomConstraint>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2CustomConstraint>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Customconstraints$Get
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2CustomConstraint>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2CustomConstraint>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2CustomConstraint>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudOrgpolicyV2CustomConstraint>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Customconstraints$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Customconstraints$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://orgpolicy.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudOrgpolicyV2CustomConstraint>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudOrgpolicyV2CustomConstraint>(
          parameters
        );
      }
    }

    /**
     * Retrieves all of the custom constraints that exist on a particular organization resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/orgpolicy.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const orgpolicy = google.orgpolicy('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await orgpolicy.organizations.customConstraints.list({
     *     // Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.
     *     pageSize: 'placeholder-value',
     *     // Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field.
     *     pageToken: 'placeholder-value',
     *     // Required. The target Google Cloud resource that parents the set of custom constraints that will be returned from this call. Must be in one of the following forms: * `organizations/{organization_id\}`
     *     parent: 'organizations/my-organization',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customConstraints": [],
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
      params: Params$Resource$Organizations$Customconstraints$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Organizations$Customconstraints$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudOrgpolicyV2ListCustomConstraintsResponse>;
    list(
      params: Params$Resource$Organizations$Customconstraints$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Customconstraints$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListCustomConstraintsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListCustomConstraintsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Customconstraints$List,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListCustomConstraintsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListCustomConstraintsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Customconstraints$List
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListCustomConstraintsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListCustomConstraintsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListCustomConstraintsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudOrgpolicyV2ListCustomConstraintsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Customconstraints$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Customconstraints$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://orgpolicy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/customConstraints').replace(
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
        createAPIRequest<Schema$GoogleCloudOrgpolicyV2ListCustomConstraintsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudOrgpolicyV2ListCustomConstraintsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Note: the supplied policy will perform a full overwrite of all fields.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/orgpolicy.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const orgpolicy = google.orgpolicy('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await orgpolicy.organizations.customConstraints.patch({
     *     // Immutable. Name of the constraint. This is unique within the organization. Format of the name should be * `organizations/{organization_id\}/customConstraints/{custom_constraint_id\}` Example: `organizations/123/customConstraints/custom.createOnlyE2TypeVms` The max length is 70 characters and the minimum length is 1. Note that the prefix `organizations/{organization_id\}/customConstraints/` is not counted.
     *     name: 'organizations/my-organization/customConstraints/my-customConstraint',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "actionType": "my_actionType",
     *       //   "condition": "my_condition",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "methodTypes": [],
     *       //   "name": "my_name",
     *       //   "resourceTypes": [],
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "actionType": "my_actionType",
     *   //   "condition": "my_condition",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "methodTypes": [],
     *   //   "name": "my_name",
     *   //   "resourceTypes": [],
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
    patch(
      params: Params$Resource$Organizations$Customconstraints$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Organizations$Customconstraints$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudOrgpolicyV2CustomConstraint>;
    patch(
      params: Params$Resource$Organizations$Customconstraints$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Organizations$Customconstraints$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2CustomConstraint>,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2CustomConstraint>
    ): void;
    patch(
      params: Params$Resource$Organizations$Customconstraints$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2CustomConstraint>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2CustomConstraint>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Organizations$Customconstraints$Patch
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2CustomConstraint>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2CustomConstraint>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2CustomConstraint>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudOrgpolicyV2CustomConstraint>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Customconstraints$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Customconstraints$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://orgpolicy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudOrgpolicyV2CustomConstraint>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudOrgpolicyV2CustomConstraint>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Customconstraints$Create
    extends StandardParameters {
    /**
     * Required. Must be in the following form: * `organizations/{organization_id\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudOrgpolicyV2CustomConstraint;
  }
  export interface Params$Resource$Organizations$Customconstraints$Delete
    extends StandardParameters {
    /**
     * Required. Name of the custom constraint to delete. See the custom constraint entry for naming rules.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Customconstraints$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the custom constraint. See the custom constraint entry for naming requirements.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Customconstraints$List
    extends StandardParameters {
    /**
     * Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.
     */
    pageSize?: number;
    /**
     * Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field.
     */
    pageToken?: string;
    /**
     * Required. The target Google Cloud resource that parents the set of custom constraints that will be returned from this call. Must be in one of the following forms: * `organizations/{organization_id\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Organizations$Customconstraints$Patch
    extends StandardParameters {
    /**
     * Immutable. Name of the constraint. This is unique within the organization. Format of the name should be * `organizations/{organization_id\}/customConstraints/{custom_constraint_id\}` Example: `organizations/123/customConstraints/custom.createOnlyE2TypeVms` The max length is 70 characters and the minimum length is 1. Note that the prefix `organizations/{organization_id\}/customConstraints/` is not counted.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudOrgpolicyV2CustomConstraint;
  }

  export class Resource$Organizations$Policies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the policy already exists on the given Google Cloud resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/orgpolicy.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const orgpolicy = google.orgpolicy('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await orgpolicy.organizations.policies.create({
     *     // Required. The Google Cloud resource that will parent the new policy. Must be in one of the following forms: * `projects/{project_number\}` * `projects/{project_id\}` * `folders/{folder_id\}` * `organizations/{organization_id\}`
     *     parent: 'organizations/my-organization',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alternate": {},
     *       //   "dryRunSpec": {},
     *       //   "name": "my_name",
     *       //   "spec": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternate": {},
     *   //   "dryRunSpec": {},
     *   //   "name": "my_name",
     *   //   "spec": {}
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
      params: Params$Resource$Organizations$Policies$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Organizations$Policies$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudOrgpolicyV2Policy>;
    create(
      params: Params$Resource$Organizations$Policies$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Organizations$Policies$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    create(
      params: Params$Resource$Organizations$Policies$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Organizations$Policies$Create
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudOrgpolicyV2Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Policies$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Policies$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://orgpolicy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/policies').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$GoogleCloudOrgpolicyV2Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudOrgpolicyV2Policy>(
          parameters
        );
      }
    }

    /**
     * Deletes a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or organization policy does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/orgpolicy.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const orgpolicy = google.orgpolicy('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await orgpolicy.organizations.policies.delete({
     *     // Required. Name of the policy to delete. See the policy entry for naming rules.
     *     name: 'organizations/my-organization/policies/my-policie',
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
      params: Params$Resource$Organizations$Policies$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Organizations$Policies$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Organizations$Policies$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Organizations$Policies$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Organizations$Policies$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Organizations$Policies$Delete
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Policies$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Policies$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://orgpolicy.googleapis.com/';
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets a policy on a resource. If no policy is set on the resource, `NOT_FOUND` is returned. The `etag` value can be used with `UpdatePolicy()` to update a policy during read-modify-write.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/orgpolicy.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const orgpolicy = google.orgpolicy('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await orgpolicy.organizations.policies.get({
     *     // Required. Resource name of the policy. See `Policy` for naming requirements.
     *     name: 'organizations/my-organization/policies/my-policie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternate": {},
     *   //   "dryRunSpec": {},
     *   //   "name": "my_name",
     *   //   "spec": {}
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
      params: Params$Resource$Organizations$Policies$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Organizations$Policies$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudOrgpolicyV2Policy>;
    get(
      params: Params$Resource$Organizations$Policies$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Policies$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    get(
      params: Params$Resource$Organizations$Policies$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Policies$Get
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudOrgpolicyV2Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Policies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Policies$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://orgpolicy.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudOrgpolicyV2Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudOrgpolicyV2Policy>(
          parameters
        );
      }
    }

    /**
     * Gets the effective policy on a resource. This is the result of merging policies in the resource hierarchy and evaluating conditions. The returned policy will not have an `etag` or `condition` set because it is an evaluated policy across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/orgpolicy.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const orgpolicy = google.orgpolicy('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await orgpolicy.organizations.policies.getEffectivePolicy({
     *     // Required. The effective policy to compute. See `Policy` for naming rules.
     *     name: 'organizations/my-organization/policies/my-policie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternate": {},
     *   //   "dryRunSpec": {},
     *   //   "name": "my_name",
     *   //   "spec": {}
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
    getEffectivePolicy(
      params: Params$Resource$Organizations$Policies$Geteffectivepolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getEffectivePolicy(
      params?: Params$Resource$Organizations$Policies$Geteffectivepolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudOrgpolicyV2Policy>;
    getEffectivePolicy(
      params: Params$Resource$Organizations$Policies$Geteffectivepolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getEffectivePolicy(
      params: Params$Resource$Organizations$Policies$Geteffectivepolicy,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    getEffectivePolicy(
      params: Params$Resource$Organizations$Policies$Geteffectivepolicy,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    getEffectivePolicy(
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    getEffectivePolicy(
      paramsOrCallback?:
        | Params$Resource$Organizations$Policies$Geteffectivepolicy
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudOrgpolicyV2Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Policies$Geteffectivepolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Policies$Geteffectivepolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://orgpolicy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:getEffectivePolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$GoogleCloudOrgpolicyV2Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudOrgpolicyV2Policy>(
          parameters
        );
      }
    }

    /**
     * Retrieves all of the policies that exist on a particular resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/orgpolicy.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const orgpolicy = google.orgpolicy('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await orgpolicy.organizations.policies.list({
     *     // Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.
     *     pageSize: 'placeholder-value',
     *     // Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field.
     *     pageToken: 'placeholder-value',
     *     // Required. The target Google Cloud resource that parents the set of constraints and policies that will be returned from this call. Must be in one of the following forms: * `projects/{project_number\}` * `projects/{project_id\}` * `folders/{folder_id\}` * `organizations/{organization_id\}`
     *     parent: 'organizations/my-organization',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "policies": []
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
      params: Params$Resource$Organizations$Policies$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Organizations$Policies$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse>;
    list(
      params: Params$Resource$Organizations$Policies$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Policies$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Policies$List,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Policies$List
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Policies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Policies$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://orgpolicy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/policies').replace(
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
        createAPIRequest<Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or the policy do not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the policy Note: the supplied policy will perform a full overwrite of all fields.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/orgpolicy.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const orgpolicy = google.orgpolicy('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await orgpolicy.organizations.policies.patch({
     *     // Immutable. The resource name of the policy. Must be one of the following forms, where constraint_name is the name of the constraint which this policy configures: * `projects/{project_number\}/policies/{constraint_name\}` * `folders/{folder_id\}/policies/{constraint_name\}` * `organizations/{organization_id\}/policies/{constraint_name\}` For example, "projects/123/policies/compute.disableSerialPortAccess". Note: `projects/{project_id\}/policies/{constraint_name\}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.
     *     name: 'organizations/my-organization/policies/my-policie',
     *     // Field mask used to specify the fields to be overwritten in the policy by the set. The fields specified in the update_mask are relative to the policy, not the full request.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alternate": {},
     *       //   "dryRunSpec": {},
     *       //   "name": "my_name",
     *       //   "spec": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternate": {},
     *   //   "dryRunSpec": {},
     *   //   "name": "my_name",
     *   //   "spec": {}
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
      params: Params$Resource$Organizations$Policies$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Organizations$Policies$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudOrgpolicyV2Policy>;
    patch(
      params: Params$Resource$Organizations$Policies$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Organizations$Policies$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    patch(
      params: Params$Resource$Organizations$Policies$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Organizations$Policies$Patch
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudOrgpolicyV2Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Policies$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Policies$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://orgpolicy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudOrgpolicyV2Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudOrgpolicyV2Policy>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Policies$Create
    extends StandardParameters {
    /**
     * Required. The Google Cloud resource that will parent the new policy. Must be in one of the following forms: * `projects/{project_number\}` * `projects/{project_id\}` * `folders/{folder_id\}` * `organizations/{organization_id\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudOrgpolicyV2Policy;
  }
  export interface Params$Resource$Organizations$Policies$Delete
    extends StandardParameters {
    /**
     * Required. Name of the policy to delete. See the policy entry for naming rules.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Policies$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the policy. See `Policy` for naming requirements.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Policies$Geteffectivepolicy
    extends StandardParameters {
    /**
     * Required. The effective policy to compute. See `Policy` for naming rules.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Policies$List
    extends StandardParameters {
    /**
     * Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.
     */
    pageSize?: number;
    /**
     * Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field.
     */
    pageToken?: string;
    /**
     * Required. The target Google Cloud resource that parents the set of constraints and policies that will be returned from this call. Must be in one of the following forms: * `projects/{project_number\}` * `projects/{project_id\}` * `folders/{folder_id\}` * `organizations/{organization_id\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Organizations$Policies$Patch
    extends StandardParameters {
    /**
     * Immutable. The resource name of the policy. Must be one of the following forms, where constraint_name is the name of the constraint which this policy configures: * `projects/{project_number\}/policies/{constraint_name\}` * `folders/{folder_id\}/policies/{constraint_name\}` * `organizations/{organization_id\}/policies/{constraint_name\}` For example, "projects/123/policies/compute.disableSerialPortAccess". Note: `projects/{project_id\}/policies/{constraint_name\}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.
     */
    name?: string;
    /**
     * Field mask used to specify the fields to be overwritten in the policy by the set. The fields specified in the update_mask are relative to the policy, not the full request.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudOrgpolicyV2Policy;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    constraints: Resource$Projects$Constraints;
    policies: Resource$Projects$Policies;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.constraints = new Resource$Projects$Constraints(this.context);
      this.policies = new Resource$Projects$Policies(this.context);
    }
  }

  export class Resource$Projects$Constraints {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists constraints that could be applied on the specified resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/orgpolicy.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const orgpolicy = google.orgpolicy('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await orgpolicy.projects.constraints.list({
     *     // Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.
     *     pageSize: 'placeholder-value',
     *     // Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field.
     *     pageToken: 'placeholder-value',
     *     // Required. The Google Cloud resource that parents the constraint. Must be in one of the following forms: * `projects/{project_number\}` * `projects/{project_id\}` * `folders/{folder_id\}` * `organizations/{organization_id\}`
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "constraints": [],
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
      params: Params$Resource$Projects$Constraints$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Constraints$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse>;
    list(
      params: Params$Resource$Projects$Constraints$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Constraints$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Constraints$List,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Constraints$List
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Constraints$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Constraints$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://orgpolicy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/constraints').replace(
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
        createAPIRequest<Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudOrgpolicyV2ListConstraintsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Constraints$List
    extends StandardParameters {
    /**
     * Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.
     */
    pageSize?: number;
    /**
     * Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field.
     */
    pageToken?: string;
    /**
     * Required. The Google Cloud resource that parents the constraint. Must be in one of the following forms: * `projects/{project_number\}` * `projects/{project_id\}` * `folders/{folder_id\}` * `organizations/{organization_id\}`
     */
    parent?: string;
  }

  export class Resource$Projects$Policies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the policy already exists on the given Google Cloud resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/orgpolicy.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const orgpolicy = google.orgpolicy('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await orgpolicy.projects.policies.create({
     *     // Required. The Google Cloud resource that will parent the new policy. Must be in one of the following forms: * `projects/{project_number\}` * `projects/{project_id\}` * `folders/{folder_id\}` * `organizations/{organization_id\}`
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alternate": {},
     *       //   "dryRunSpec": {},
     *       //   "name": "my_name",
     *       //   "spec": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternate": {},
     *   //   "dryRunSpec": {},
     *   //   "name": "my_name",
     *   //   "spec": {}
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
      params: Params$Resource$Projects$Policies$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Policies$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudOrgpolicyV2Policy>;
    create(
      params: Params$Resource$Projects$Policies$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Policies$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    create(
      params: Params$Resource$Projects$Policies$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Policies$Create
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudOrgpolicyV2Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Policies$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Policies$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://orgpolicy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/policies').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$GoogleCloudOrgpolicyV2Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudOrgpolicyV2Policy>(
          parameters
        );
      }
    }

    /**
     * Deletes a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or organization policy does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/orgpolicy.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const orgpolicy = google.orgpolicy('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await orgpolicy.projects.policies.delete({
     *     // Required. Name of the policy to delete. See the policy entry for naming rules.
     *     name: 'projects/my-project/policies/my-policie',
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
      params: Params$Resource$Projects$Policies$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Policies$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Policies$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Policies$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Policies$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Policies$Delete
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Policies$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Policies$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://orgpolicy.googleapis.com/';
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets a policy on a resource. If no policy is set on the resource, `NOT_FOUND` is returned. The `etag` value can be used with `UpdatePolicy()` to update a policy during read-modify-write.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/orgpolicy.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const orgpolicy = google.orgpolicy('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await orgpolicy.projects.policies.get({
     *     // Required. Resource name of the policy. See `Policy` for naming requirements.
     *     name: 'projects/my-project/policies/my-policie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternate": {},
     *   //   "dryRunSpec": {},
     *   //   "name": "my_name",
     *   //   "spec": {}
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
      params: Params$Resource$Projects$Policies$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Policies$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudOrgpolicyV2Policy>;
    get(
      params: Params$Resource$Projects$Policies$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Policies$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    get(
      params: Params$Resource$Projects$Policies$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Policies$Get
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudOrgpolicyV2Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Policies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Policies$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://orgpolicy.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudOrgpolicyV2Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudOrgpolicyV2Policy>(
          parameters
        );
      }
    }

    /**
     * Gets the effective policy on a resource. This is the result of merging policies in the resource hierarchy and evaluating conditions. The returned policy will not have an `etag` or `condition` set because it is an evaluated policy across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/orgpolicy.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const orgpolicy = google.orgpolicy('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await orgpolicy.projects.policies.getEffectivePolicy({
     *     // Required. The effective policy to compute. See `Policy` for naming rules.
     *     name: 'projects/my-project/policies/my-policie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternate": {},
     *   //   "dryRunSpec": {},
     *   //   "name": "my_name",
     *   //   "spec": {}
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
    getEffectivePolicy(
      params: Params$Resource$Projects$Policies$Geteffectivepolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getEffectivePolicy(
      params?: Params$Resource$Projects$Policies$Geteffectivepolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudOrgpolicyV2Policy>;
    getEffectivePolicy(
      params: Params$Resource$Projects$Policies$Geteffectivepolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getEffectivePolicy(
      params: Params$Resource$Projects$Policies$Geteffectivepolicy,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    getEffectivePolicy(
      params: Params$Resource$Projects$Policies$Geteffectivepolicy,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    getEffectivePolicy(
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    getEffectivePolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Policies$Geteffectivepolicy
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudOrgpolicyV2Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Policies$Geteffectivepolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Policies$Geteffectivepolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://orgpolicy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:getEffectivePolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$GoogleCloudOrgpolicyV2Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudOrgpolicyV2Policy>(
          parameters
        );
      }
    }

    /**
     * Retrieves all of the policies that exist on a particular resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/orgpolicy.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const orgpolicy = google.orgpolicy('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await orgpolicy.projects.policies.list({
     *     // Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.
     *     pageSize: 'placeholder-value',
     *     // Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field.
     *     pageToken: 'placeholder-value',
     *     // Required. The target Google Cloud resource that parents the set of constraints and policies that will be returned from this call. Must be in one of the following forms: * `projects/{project_number\}` * `projects/{project_id\}` * `folders/{folder_id\}` * `organizations/{organization_id\}`
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "policies": []
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
      params: Params$Resource$Projects$Policies$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Policies$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse>;
    list(
      params: Params$Resource$Projects$Policies$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Policies$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Policies$List,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Policies$List
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Policies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Policies$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://orgpolicy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/policies').replace(
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
        createAPIRequest<Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudOrgpolicyV2ListPoliciesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or the policy do not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the policy Note: the supplied policy will perform a full overwrite of all fields.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/orgpolicy.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const orgpolicy = google.orgpolicy('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await orgpolicy.projects.policies.patch({
     *     // Immutable. The resource name of the policy. Must be one of the following forms, where constraint_name is the name of the constraint which this policy configures: * `projects/{project_number\}/policies/{constraint_name\}` * `folders/{folder_id\}/policies/{constraint_name\}` * `organizations/{organization_id\}/policies/{constraint_name\}` For example, "projects/123/policies/compute.disableSerialPortAccess". Note: `projects/{project_id\}/policies/{constraint_name\}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.
     *     name: 'projects/my-project/policies/my-policie',
     *     // Field mask used to specify the fields to be overwritten in the policy by the set. The fields specified in the update_mask are relative to the policy, not the full request.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alternate": {},
     *       //   "dryRunSpec": {},
     *       //   "name": "my_name",
     *       //   "spec": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternate": {},
     *   //   "dryRunSpec": {},
     *   //   "name": "my_name",
     *   //   "spec": {}
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
      params: Params$Resource$Projects$Policies$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Policies$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudOrgpolicyV2Policy>;
    patch(
      params: Params$Resource$Projects$Policies$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Policies$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    patch(
      params: Params$Resource$Projects$Policies$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Policies$Patch
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudOrgpolicyV2Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudOrgpolicyV2Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Policies$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Policies$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://orgpolicy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudOrgpolicyV2Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudOrgpolicyV2Policy>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Policies$Create
    extends StandardParameters {
    /**
     * Required. The Google Cloud resource that will parent the new policy. Must be in one of the following forms: * `projects/{project_number\}` * `projects/{project_id\}` * `folders/{folder_id\}` * `organizations/{organization_id\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudOrgpolicyV2Policy;
  }
  export interface Params$Resource$Projects$Policies$Delete
    extends StandardParameters {
    /**
     * Required. Name of the policy to delete. See the policy entry for naming rules.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Policies$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the policy. See `Policy` for naming requirements.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Policies$Geteffectivepolicy
    extends StandardParameters {
    /**
     * Required. The effective policy to compute. See `Policy` for naming rules.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Policies$List
    extends StandardParameters {
    /**
     * Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.
     */
    pageSize?: number;
    /**
     * Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field.
     */
    pageToken?: string;
    /**
     * Required. The target Google Cloud resource that parents the set of constraints and policies that will be returned from this call. Must be in one of the following forms: * `projects/{project_number\}` * `projects/{project_id\}` * `folders/{folder_id\}` * `organizations/{organization_id\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Policies$Patch
    extends StandardParameters {
    /**
     * Immutable. The resource name of the policy. Must be one of the following forms, where constraint_name is the name of the constraint which this policy configures: * `projects/{project_number\}/policies/{constraint_name\}` * `folders/{folder_id\}/policies/{constraint_name\}` * `organizations/{organization_id\}/policies/{constraint_name\}` For example, "projects/123/policies/compute.disableSerialPortAccess". Note: `projects/{project_id\}/policies/{constraint_name\}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.
     */
    name?: string;
    /**
     * Field mask used to specify the fields to be overwritten in the policy by the set. The fields specified in the update_mask are relative to the policy, not the full request.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudOrgpolicyV2Policy;
  }
}
