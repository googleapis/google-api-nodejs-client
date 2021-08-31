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

export namespace chromepolicy_v1 {
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
   * Chrome Policy API
   *
   * The Chrome Policy API is a suite of services that allows Chrome administrators to control the policies applied to their managed Chrome OS devices and Chrome browsers.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const chromepolicy = google.chromepolicy('v1');
   * ```
   */
  export class Chromepolicy {
    context: APIRequestContext;
    customers: Resource$Customers;
    media: Resource$Media;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.customers = new Resource$Customers(this.context);
      this.media = new Resource$Media(this.context);
    }
  }

  /**
   * Additional key names that will be used to identify the target of the policy value.
   */
  export interface Schema$GoogleChromePolicyV1AdditionalTargetKeyName {
    /**
     * Key name.
     */
    key?: string | null;
    /**
     * Key description.
     */
    keyDescription?: string | null;
  }
  /**
   * Request message for specifying that multiple policy values inherit their value from their parents.
   */
  export interface Schema$GoogleChromePolicyV1BatchInheritOrgUnitPoliciesRequest {
    /**
     * List of policies that have to inherit their values as defined by the `requests`. All requests in the list must follow these restrictions: 1. All schemas in the list must have the same root namespace. 2. All `policyTargetKey.targetResource` values must point to an org unit resource. 3. All `policyTargetKey` values must have the same key names in the ` additionalTargetKeys`. This also means if one of the targets has an empty `additionalTargetKeys` map, all of the targets must have an empty `additionalTargetKeys` map. 4. No two modification requests can reference the same `policySchema` + ` policyTargetKey` pair.
     */
    requests?: Schema$GoogleChromePolicyV1InheritOrgUnitPolicyRequest[];
  }
  /**
   * Request message for modifying multiple policy values for a specific target.
   */
  export interface Schema$GoogleChromePolicyV1BatchModifyOrgUnitPoliciesRequest {
    /**
     * List of policies to modify as defined by the `requests`. All requests in the list must follow these restrictions: 1. All schemas in the list must have the same root namespace. 2. All `policyTargetKey.targetResource` values must point to an org unit resource. 3. All `policyTargetKey` values must have the same key names in the ` additionalTargetKeys`. This also means if one of the targets has an empty `additionalTargetKeys` map, all of the targets must have an empty `additionalTargetKeys` map. 4. No two modification requests can reference the same `policySchema` + ` policyTargetKey` pair.
     */
    requests?: Schema$GoogleChromePolicyV1ModifyOrgUnitPolicyRequest[];
  }
  /**
   * Request parameters for inheriting policy value of a specific org unit target from the policy value of its parent org unit.
   */
  export interface Schema$GoogleChromePolicyV1InheritOrgUnitPolicyRequest {
    /**
     * The fully qualified name of the policy schema that is being inherited.
     */
    policySchema?: string | null;
    /**
     * Required. The key of the target for which we want to modify a policy. The target resource must point to an Org Unit.
     */
    policyTargetKey?: Schema$GoogleChromePolicyV1PolicyTargetKey;
  }
  /**
   * Response message for listing policy schemas that match a filter.
   */
  export interface Schema$GoogleChromePolicyV1ListPolicySchemasResponse {
    /**
     * The page token used to get the next page of policy schemas.
     */
    nextPageToken?: string | null;
    /**
     * The list of policy schemas that match the query.
     */
    policySchemas?: Schema$GoogleChromePolicyV1PolicySchema[];
  }
  /**
   * Request parameters for modifying a policy value for a specific org unit target.
   */
  export interface Schema$GoogleChromePolicyV1ModifyOrgUnitPolicyRequest {
    /**
     * Required. The key of the target for which we want to modify a policy. The target resource must point to an Org Unit.
     */
    policyTargetKey?: Schema$GoogleChromePolicyV1PolicyTargetKey;
    /**
     * The new value for the policy.
     */
    policyValue?: Schema$GoogleChromePolicyV1PolicyValue;
    /**
     * Required. Policy fields to update. Only fields in this mask will be updated; other fields in `policy_value` will be ignored (even if they have values). If a field is in this list it must have a value in 'policy_value'.
     */
    updateMask?: string | null;
  }
  /**
   * Resource representing a policy schema. Next ID: 10
   */
  export interface Schema$GoogleChromePolicyV1PolicySchema {
    /**
     * Output only. Specific access restrictions related to this policy.
     */
    accessRestrictions?: string[] | null;
    /**
     * Output only. Additional key names that will be used to identify the target of the policy value. When specifying a `policyTargetKey`, each of the additional keys specified here will have to be included in the `additionalTargetKeys` map.
     */
    additionalTargetKeyNames?: Schema$GoogleChromePolicyV1AdditionalTargetKeyName[];
    /**
     * Schema definition using proto descriptor.
     */
    definition?: Schema$Proto2FileDescriptorProto;
    /**
     * Output only. Detailed description of each field that is part of the schema.
     */
    fieldDescriptions?: Schema$GoogleChromePolicyV1PolicySchemaFieldDescription[];
    /**
     * Format: name=customers/{customer\}/policySchemas/{schema_namespace\}
     */
    name?: string | null;
    /**
     * Output only. Special notice messages related to setting certain values in certain fields in the schema.
     */
    notices?: Schema$GoogleChromePolicyV1PolicySchemaNoticeDescription[];
    /**
     * Output only. Description about the policy schema for user consumption.
     */
    policyDescription?: string | null;
    /**
     * Output only. The full qualified name of the policy schema. This value is used to fill the field `policy_schema` in PolicyValue when calling BatchInheritOrgUnitPolicies or BatchModifyOrgUnitPolicies.
     */
    schemaName?: string | null;
    /**
     * Output only. URI to related support article for this schema.
     */
    supportUri?: string | null;
  }
  /**
   * The field and the value it must have for another field to be allowed to be set.
   */
  export interface Schema$GoogleChromePolicyV1PolicySchemaFieldDependencies {
    /**
     * The source field which this field depends on.
     */
    sourceField?: string | null;
    /**
     * The value which the source field must have for this field to be allowed to be set.
     */
    sourceFieldValue?: string | null;
  }
  /**
   * Provides detailed information for a particular field that is part of a PolicySchema.
   */
  export interface Schema$GoogleChromePolicyV1PolicySchemaFieldDescription {
    /**
     * Output only. The description for the field.
     */
    description?: string | null;
    /**
     * Output only. The name of the field for associated with this description.
     */
    field?: string | null;
    /**
     * Output only. Provides a list of fields and the values they must have for this field to be allowed to be set.
     */
    fieldDependencies?: Schema$GoogleChromePolicyV1PolicySchemaFieldDependencies[];
    /**
     * Output only. Any input constraints associated on the values for the field.
     */
    inputConstraint?: string | null;
    /**
     * Output only. If the field has a set of known values, this field will provide a description for these values.
     */
    knownValueDescriptions?: Schema$GoogleChromePolicyV1PolicySchemaFieldKnownValueDescription[];
    /**
     * Output only. Provides the description of the fields nested in this field, if the field is a message type that defines multiple fields.
     */
    nestedFieldDescriptions?: Schema$GoogleChromePolicyV1PolicySchemaFieldDescription[];
  }
  /**
   * Provides detailed information about a known value that is allowed for a particular field in a PolicySchema.
   */
  export interface Schema$GoogleChromePolicyV1PolicySchemaFieldKnownValueDescription {
    /**
     * Output only. Additional description for this value.
     */
    description?: string | null;
    /**
     * Output only. The string represenstation of the value that can be set for the field.
     */
    value?: string | null;
  }
  /**
   * Provides special notice messages related to a particular value in a field that is part of a PolicySchema.
   */
  export interface Schema$GoogleChromePolicyV1PolicySchemaNoticeDescription {
    /**
     * Output only. Whether the user needs to acknowledge the notice message before the value can be set.
     */
    acknowledgementRequired?: boolean | null;
    /**
     * Output only. The field name associated with the notice.
     */
    field?: string | null;
    /**
     * Output only. The notice message associate with the value of the field.
     */
    noticeMessage?: string | null;
    /**
     * Output only. The value of the field that has a notice. When setting the field to this value, the user may be required to acknowledge the notice message in order for the value to be set.
     */
    noticeValue?: string | null;
  }
  /**
   * The key used to identify the target on which the policy will be applied.
   */
  export interface Schema$GoogleChromePolicyV1PolicyTargetKey {
    /**
     * Map containing the additional target key name and value pairs used to further identify the target of the policy.
     */
    additionalTargetKeys?: {[key: string]: string} | null;
    /**
     * The target resource on which this policy is applied. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id\}")
     */
    targetResource?: string | null;
  }
  /**
   * A particular value for a policy managed by the service.
   */
  export interface Schema$GoogleChromePolicyV1PolicyValue {
    /**
     * The fully qualified name of the policy schema associated with this policy.
     */
    policySchema?: string | null;
    /**
     * The value of the policy that is compatible with the schema that it is associated with.
     */
    value?: {[key: string]: any} | null;
  }
  /**
   * The resolved value of a policy for a given target.
   */
  export interface Schema$GoogleChromePolicyV1ResolvedPolicy {
    /**
     * Output only. The source resource from which this policy value is obtained. May be the same as `targetKey` if the policy is directly modified on the target, otherwise it would be another resource from which the policy gets its value (if applicable). If not present, the source is the default value for the customer.
     */
    sourceKey?: Schema$GoogleChromePolicyV1PolicyTargetKey;
    /**
     * Output only. The target resource for which the resolved policy value applies.
     */
    targetKey?: Schema$GoogleChromePolicyV1PolicyTargetKey;
    /**
     * Output only. The resolved value of the policy.
     */
    value?: Schema$GoogleChromePolicyV1PolicyValue;
  }
  /**
   * Request message for getting the resolved policy value for a specific target.
   */
  export interface Schema$GoogleChromePolicyV1ResolveRequest {
    /**
     * The maximum number of policies to return, defaults to 100 and has a maximum of 1000.
     */
    pageSize?: number | null;
    /**
     * The page token used to retrieve a specific page of the request.
     */
    pageToken?: string | null;
    /**
     * The schema filter to apply to the resolve request. Specify a schema name to view a particular schema, for example: chrome.users.ShowLogoutButton Wildcards are supported, but only in the leaf portion of the schema name. Wildcards cannot be used in namespace directly. Please read https://developers.google.com/chrome/chrome-management/guides/policyapi for details on schema namepsaces. For example: Valid: "chrome.users.*", "chrome.users.apps.*", "chrome.printers.*" Invalid: "*", "*.users", "chrome.*", "chrome.*.apps.*"
     */
    policySchemaFilter?: string | null;
    /**
     * Required. The key of the target resource on which the policies should be resolved. The target resource must point to an Org Unit.
     */
    policyTargetKey?: Schema$GoogleChromePolicyV1PolicyTargetKey;
  }
  /**
   * Response message for getting the resolved policy value for a specific target.
   */
  export interface Schema$GoogleChromePolicyV1ResolveResponse {
    /**
     * The page token used to get the next set of resolved policies found by the request.
     */
    nextPageToken?: string | null;
    /**
     * The list of resolved policies found by the resolve request.
     */
    resolvedPolicies?: Schema$GoogleChromePolicyV1ResolvedPolicy[];
  }
  /**
   * Request message for uploading a file for a policy. Next ID: 5
   */
  export interface Schema$GoogleChromePolicyV1UploadPolicyFileRequest {
    /**
     * Required. The fully qualified policy schema and field name this file is uploaded for. This information will be used to validate the content type of the file.
     */
    policyField?: string | null;
  }
  /**
   * Response message for downloading an uploaded file. Next ID: 2
   */
  export interface Schema$GoogleChromePolicyV1UploadPolicyFileResponse {
    /**
     * The uri for end user to download the file.
     */
    downloadUri?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \} The JSON representation for `Empty` is empty JSON object `{\}`.
   */
  export interface Schema$GoogleProtobufEmpty {}
  /**
   * Describes a message type.
   */
  export interface Schema$Proto2DescriptorProto {
    enumType?: Schema$Proto2EnumDescriptorProto[];
    field?: Schema$Proto2FieldDescriptorProto[];
    name?: string | null;
    nestedType?: Schema$Proto2DescriptorProto[];
    oneofDecl?: Schema$Proto2OneofDescriptorProto[];
  }
  /**
   * Describes an enum type.
   */
  export interface Schema$Proto2EnumDescriptorProto {
    name?: string | null;
    value?: Schema$Proto2EnumValueDescriptorProto[];
  }
  /**
   * Describes a value within an enum.
   */
  export interface Schema$Proto2EnumValueDescriptorProto {
    name?: string | null;
    number?: number | null;
  }
  /**
   * Describes a field within a message.
   */
  export interface Schema$Proto2FieldDescriptorProto {
    /**
     * For numeric types, contains the original text representation of the value. For booleans, "true" or "false". For strings, contains the default text contents (not escaped in any way). For bytes, contains the C escaped value. All bytes \>= 128 are escaped.
     */
    defaultValue?: string | null;
    /**
     * JSON name of this field. The value is set by protocol compiler. If the user has set a "json_name" option on this field, that option's value will be used. Otherwise, it's deduced from the field's name by converting it to camelCase.
     */
    jsonName?: string | null;
    label?: string | null;
    name?: string | null;
    number?: number | null;
    /**
     * If set, gives the index of a oneof in the containing type's oneof_decl list. This field is a member of that oneof.
     */
    oneofIndex?: number | null;
    /**
     * If true, this is a proto3 "optional". When a proto3 field is optional, it tracks presence regardless of field type. When proto3_optional is true, this field must be belong to a oneof to signal to old proto3 clients that presence is tracked for this field. This oneof is known as a "synthetic" oneof, and this field must be its sole member (each proto3 optional field gets its own synthetic oneof). Synthetic oneofs exist in the descriptor only, and do not generate any API. Synthetic oneofs must be ordered after all "real" oneofs. For message fields, proto3_optional doesn't create any semantic change, since non-repeated message fields always track presence. However it still indicates the semantic detail of whether the user wrote "optional" or not. This can be useful for round-tripping the .proto file. For consistency we give message fields a synthetic oneof also, even though it is not required to track presence. This is especially important because the parser can't tell if a field is a message or an enum, so it must always create a synthetic oneof. Proto2 optional fields do not set this flag, because they already indicate optional with `LABEL_OPTIONAL`.
     */
    proto3Optional?: boolean | null;
    /**
     * If type_name is set, this need not be set. If both this and type_name are set, this must be one of TYPE_ENUM, TYPE_MESSAGE or TYPE_GROUP.
     */
    type?: string | null;
    /**
     * For message and enum types, this is the name of the type. If the name starts with a '.', it is fully-qualified. Otherwise, C++-like scoping rules are used to find the type (i.e. first the nested types within this message are searched, then within the parent, on up to the root namespace).
     */
    typeName?: string | null;
  }
  /**
   * Describes a complete .proto file.
   */
  export interface Schema$Proto2FileDescriptorProto {
    enumType?: Schema$Proto2EnumDescriptorProto[];
    /**
     * All top-level definitions in this file.
     */
    messageType?: Schema$Proto2DescriptorProto[];
    /**
     * file name, relative to root of source tree
     */
    name?: string | null;
    /**
     * e.g. "foo", "foo.bar", etc.
     */
    package?: string | null;
    /**
     * The syntax of the proto file. The supported values are "proto2" and "proto3".
     */
    syntax?: string | null;
  }
  /**
   * Describes a oneof.
   */
  export interface Schema$Proto2OneofDescriptorProto {
    name?: string | null;
  }

  export class Resource$Customers {
    context: APIRequestContext;
    policies: Resource$Customers$Policies;
    policySchemas: Resource$Customers$Policyschemas;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.policies = new Resource$Customers$Policies(this.context);
      this.policySchemas = new Resource$Customers$Policyschemas(this.context);
    }
  }

  export class Resource$Customers$Policies {
    context: APIRequestContext;
    orgunits: Resource$Customers$Policies$Orgunits;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.orgunits = new Resource$Customers$Policies$Orgunits(this.context);
    }

    /**
     * Gets the resolved policy values for a list of policies that match a search query.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromepolicy.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const chromepolicy = google.chromepolicy('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chrome.management.policy',
     *       'https://www.googleapis.com/auth/chrome.management.policy.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromepolicy.customers.policies.resolve({
     *     // ID of the G Suite account or literal "my_customer" for the customer associated to the request.
     *     customer: 'customers/my-customer',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken",
     *       //   "policySchemaFilter": "my_policySchemaFilter",
     *       //   "policyTargetKey": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "resolvedPolicies": []
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
    resolve(
      params: Params$Resource$Customers$Policies$Resolve,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    resolve(
      params?: Params$Resource$Customers$Policies$Resolve,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleChromePolicyV1ResolveResponse>;
    resolve(
      params: Params$Resource$Customers$Policies$Resolve,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    resolve(
      params: Params$Resource$Customers$Policies$Resolve,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromePolicyV1ResolveResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromePolicyV1ResolveResponse>
    ): void;
    resolve(
      params: Params$Resource$Customers$Policies$Resolve,
      callback: BodyResponseCallback<Schema$GoogleChromePolicyV1ResolveResponse>
    ): void;
    resolve(
      callback: BodyResponseCallback<Schema$GoogleChromePolicyV1ResolveResponse>
    ): void;
    resolve(
      paramsOrCallback?:
        | Params$Resource$Customers$Policies$Resolve
        | BodyResponseCallback<Schema$GoogleChromePolicyV1ResolveResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromePolicyV1ResolveResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromePolicyV1ResolveResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleChromePolicyV1ResolveResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Policies$Resolve;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Policies$Resolve;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://chromepolicy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+customer}/policies:resolve').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleChromePolicyV1ResolveResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromePolicyV1ResolveResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Customers$Policies$Resolve
    extends StandardParameters {
    /**
     * ID of the G Suite account or literal "my_customer" for the customer associated to the request.
     */
    customer?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleChromePolicyV1ResolveRequest;
  }

  export class Resource$Customers$Policies$Orgunits {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Modify multiple policy values that are applied to a specific org unit so that they now inherit the value from a parent (if applicable). All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`. On failure the request will return the error details as part of the google.rpc.Status.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromepolicy.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const chromepolicy = google.chromepolicy('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/chrome.management.policy'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromepolicy.customers.policies.orgunits.batchInherit({
     *     // ID of the G Suite account or literal "my_customer" for the customer associated to the request.
     *     customer: 'customers/my-customer',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requests": []
     *       // }
     *     },
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
    batchInherit(
      params: Params$Resource$Customers$Policies$Orgunits$Batchinherit,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchInherit(
      params?: Params$Resource$Customers$Policies$Orgunits$Batchinherit,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    batchInherit(
      params: Params$Resource$Customers$Policies$Orgunits$Batchinherit,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchInherit(
      params: Params$Resource$Customers$Policies$Orgunits$Batchinherit,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchInherit(
      params: Params$Resource$Customers$Policies$Orgunits$Batchinherit,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchInherit(
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchInherit(
      paramsOrCallback?:
        | Params$Resource$Customers$Policies$Orgunits$Batchinherit
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
        {}) as Params$Resource$Customers$Policies$Orgunits$Batchinherit;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Policies$Orgunits$Batchinherit;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://chromepolicy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+customer}/policies/orgunits:batchInherit'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
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
     * Modify multiple policy values that are applied to a specific org unit. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`. On failure the request will return the error details as part of the google.rpc.Status.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromepolicy.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const chromepolicy = google.chromepolicy('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/chrome.management.policy'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromepolicy.customers.policies.orgunits.batchModify({
     *     // ID of the G Suite account or literal "my_customer" for the customer associated to the request.
     *     customer: 'customers/my-customer',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requests": []
     *       // }
     *     },
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
    batchModify(
      params: Params$Resource$Customers$Policies$Orgunits$Batchmodify,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchModify(
      params?: Params$Resource$Customers$Policies$Orgunits$Batchmodify,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    batchModify(
      params: Params$Resource$Customers$Policies$Orgunits$Batchmodify,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchModify(
      params: Params$Resource$Customers$Policies$Orgunits$Batchmodify,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchModify(
      params: Params$Resource$Customers$Policies$Orgunits$Batchmodify,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchModify(
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchModify(
      paramsOrCallback?:
        | Params$Resource$Customers$Policies$Orgunits$Batchmodify
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
        {}) as Params$Resource$Customers$Policies$Orgunits$Batchmodify;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Policies$Orgunits$Batchmodify;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://chromepolicy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+customer}/policies/orgunits:batchModify'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
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
  }

  export interface Params$Resource$Customers$Policies$Orgunits$Batchinherit
    extends StandardParameters {
    /**
     * ID of the G Suite account or literal "my_customer" for the customer associated to the request.
     */
    customer?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleChromePolicyV1BatchInheritOrgUnitPoliciesRequest;
  }
  export interface Params$Resource$Customers$Policies$Orgunits$Batchmodify
    extends StandardParameters {
    /**
     * ID of the G Suite account or literal "my_customer" for the customer associated to the request.
     */
    customer?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleChromePolicyV1BatchModifyOrgUnitPoliciesRequest;
  }

  export class Resource$Customers$Policyschemas {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get a specific policy schema for a customer by its resource name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromepolicy.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const chromepolicy = google.chromepolicy('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chrome.management.policy',
     *       'https://www.googleapis.com/auth/chrome.management.policy.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromepolicy.customers.policySchemas.get({
     *     // Required. The policy schema resource name to query.
     *     name: 'customers/my-customer/policySchemas/.*',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessRestrictions": [],
     *   //   "additionalTargetKeyNames": [],
     *   //   "definition": {},
     *   //   "fieldDescriptions": [],
     *   //   "name": "my_name",
     *   //   "notices": [],
     *   //   "policyDescription": "my_policyDescription",
     *   //   "schemaName": "my_schemaName",
     *   //   "supportUri": "my_supportUri"
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
      params: Params$Resource$Customers$Policyschemas$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Customers$Policyschemas$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleChromePolicyV1PolicySchema>;
    get(
      params: Params$Resource$Customers$Policyschemas$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Customers$Policyschemas$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromePolicyV1PolicySchema>,
      callback: BodyResponseCallback<Schema$GoogleChromePolicyV1PolicySchema>
    ): void;
    get(
      params: Params$Resource$Customers$Policyschemas$Get,
      callback: BodyResponseCallback<Schema$GoogleChromePolicyV1PolicySchema>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleChromePolicyV1PolicySchema>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Customers$Policyschemas$Get
        | BodyResponseCallback<Schema$GoogleChromePolicyV1PolicySchema>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromePolicyV1PolicySchema>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromePolicyV1PolicySchema>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleChromePolicyV1PolicySchema>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Policyschemas$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Policyschemas$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://chromepolicy.googleapis.com/';
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
        createAPIRequest<Schema$GoogleChromePolicyV1PolicySchema>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromePolicyV1PolicySchema>(
          parameters
        );
      }
    }

    /**
     * Gets a list of policy schemas that match a specified filter value for a given customer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromepolicy.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const chromepolicy = google.chromepolicy('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chrome.management.policy',
     *       'https://www.googleapis.com/auth/chrome.management.policy.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromepolicy.customers.policySchemas.list({
     *     // The schema filter used to find a particular schema based on fields like its resource name, description and `additionalTargetKeyNames`.
     *     filter: 'placeholder-value',
     *     // The maximum number of policy schemas to return.
     *     pageSize: 'placeholder-value',
     *     // The page token used to retrieve a specific page of the listing request.
     *     pageToken: 'placeholder-value',
     *     // Required. The customer for which the listing request will apply.
     *     parent: 'customers/my-customer',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "policySchemas": []
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
      params: Params$Resource$Customers$Policyschemas$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Customers$Policyschemas$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleChromePolicyV1ListPolicySchemasResponse>;
    list(
      params: Params$Resource$Customers$Policyschemas$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Customers$Policyschemas$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromePolicyV1ListPolicySchemasResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromePolicyV1ListPolicySchemasResponse>
    ): void;
    list(
      params: Params$Resource$Customers$Policyschemas$List,
      callback: BodyResponseCallback<Schema$GoogleChromePolicyV1ListPolicySchemasResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleChromePolicyV1ListPolicySchemasResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Customers$Policyschemas$List
        | BodyResponseCallback<Schema$GoogleChromePolicyV1ListPolicySchemasResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromePolicyV1ListPolicySchemasResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromePolicyV1ListPolicySchemasResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleChromePolicyV1ListPolicySchemasResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Policyschemas$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Policyschemas$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://chromepolicy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/policySchemas').replace(
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
        createAPIRequest<Schema$GoogleChromePolicyV1ListPolicySchemasResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromePolicyV1ListPolicySchemasResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Customers$Policyschemas$Get
    extends StandardParameters {
    /**
     * Required. The policy schema resource name to query.
     */
    name?: string;
  }
  export interface Params$Resource$Customers$Policyschemas$List
    extends StandardParameters {
    /**
     * The schema filter used to find a particular schema based on fields like its resource name, description and `additionalTargetKeyNames`.
     */
    filter?: string;
    /**
     * The maximum number of policy schemas to return.
     */
    pageSize?: number;
    /**
     * The page token used to retrieve a specific page of the listing request.
     */
    pageToken?: string;
    /**
     * Required. The customer for which the listing request will apply.
     */
    parent?: string;
  }

  export class Resource$Media {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates an enterprise file from the content provided by user. Returns a public download url for end user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromepolicy.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const chromepolicy = google.chromepolicy('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/chrome.management.policy'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromepolicy.media.upload({
     *     // Required. The customer for which the file upload will apply.
     *     customer: 'customers/my-customer',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "policyField": "my_policyField"
     *       // }
     *     },
     *     media: {
     *       mimeType: 'placeholder-value',
     *       body: 'placeholder-value',
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "downloadUri": "my_downloadUri"
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
    upload(
      params: Params$Resource$Media$Upload,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    upload(
      params?: Params$Resource$Media$Upload,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleChromePolicyV1UploadPolicyFileResponse>;
    upload(
      params: Params$Resource$Media$Upload,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    upload(
      params: Params$Resource$Media$Upload,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromePolicyV1UploadPolicyFileResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromePolicyV1UploadPolicyFileResponse>
    ): void;
    upload(
      params: Params$Resource$Media$Upload,
      callback: BodyResponseCallback<Schema$GoogleChromePolicyV1UploadPolicyFileResponse>
    ): void;
    upload(
      callback: BodyResponseCallback<Schema$GoogleChromePolicyV1UploadPolicyFileResponse>
    ): void;
    upload(
      paramsOrCallback?:
        | Params$Resource$Media$Upload
        | BodyResponseCallback<Schema$GoogleChromePolicyV1UploadPolicyFileResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromePolicyV1UploadPolicyFileResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromePolicyV1UploadPolicyFileResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleChromePolicyV1UploadPolicyFileResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Media$Upload;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Media$Upload;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://chromepolicy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+customer}/policies/files:uploadPolicyFile'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (
          rootUrl + '/upload/v1/{+customer}/policies/files:uploadPolicyFile'
        ).replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleChromePolicyV1UploadPolicyFileResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromePolicyV1UploadPolicyFileResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Media$Upload extends StandardParameters {
    /**
     * Required. The customer for which the file upload will apply.
     */
    customer?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleChromePolicyV1UploadPolicyFileRequest;

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
}
