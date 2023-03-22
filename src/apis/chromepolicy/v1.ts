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

  export interface Schema$ChromeCrosDpanelAutosettingsProtoPolicyApiLifecycle {
    /**
     * In the event that this policy was deprecated in favor of another policy, the fully qualified namespace(s) of the new policies as they will show in PolicyAPI.
     */
    deprecatedInFavorOf?: string[] | null;
    /**
     * Description about current life cycle.
     */
    description?: string | null;
    /**
     * End supporting date for current policy.
     */
    endSupport?: Schema$GoogleTypeDate;
    /**
     * Indicate current life cycle stage of the policy API.
     */
    policyApiLifecycleStage?: string | null;
  }
  /**
   * Additional key names that will be used to identify the target of the policy value.
   */
  export interface Schema$GoogleChromePolicyVersionsV1AdditionalTargetKeyName {
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
   * Request message for specifying that multiple policy values will be deleted.
   */
  export interface Schema$GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest {
    /**
     * List of policies that will be deleted as defined by the `requests`. All requests in the list must follow these restrictions: 1. All schemas in the list must have the same root namespace. 2. All `policyTargetKey.targetResource` values must point to a group resource. 3. All `policyTargetKey` values must have the same `app_id` key name in the `additionalTargetKeys`. 4. No two modification requests can reference the same `policySchema` + ` policyTargetKey` pair.
     */
    requests?: Schema$GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest[];
  }
  /**
   * Request message for specifying that multiple policy values inherit their value from their parents.
   */
  export interface Schema$GoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequest {
    /**
     * List of policies that have to inherit their values as defined by the `requests`. All requests in the list must follow these restrictions: 1. All schemas in the list must have the same root namespace. 2. All `policyTargetKey.targetResource` values must point to an org unit resource. 3. All `policyTargetKey` values must have the same key names in the ` additionalTargetKeys`. This also means if one of the targets has an empty `additionalTargetKeys` map, all of the targets must have an empty `additionalTargetKeys` map. 4. No two modification requests can reference the same `policySchema` + ` policyTargetKey` pair.
     */
    requests?: Schema$GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest[];
  }
  /**
   * Request message for modifying multiple policy values for a specific group-based target.
   */
  export interface Schema$GoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequest {
    /**
     * List of policies to modify as defined by the `requests`. All requests in the list must follow these restrictions: 1. All schemas in the list must have the same root namespace. 2. All `policyTargetKey.targetResource` values must point to a group resource. 3. All `policyTargetKey` values must have the same `app_id` key name in the `additionalTargetKeys`. 4. No two modification requests can reference the same `policySchema` + ` policyTargetKey` pair.
     */
    requests?: Schema$GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest[];
  }
  /**
   * Request message for modifying multiple policy values for a specific target.
   */
  export interface Schema$GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest {
    /**
     * List of policies to modify as defined by the `requests`. All requests in the list must follow these restrictions: 1. All schemas in the list must have the same root namespace. 2. All `policyTargetKey.targetResource` values must point to an org unit resource. 3. All `policyTargetKey` values must have the same key names in the ` additionalTargetKeys`. This also means if one of the targets has an empty `additionalTargetKeys` map, all of the targets must have an empty `additionalTargetKeys` map. 4. No two modification requests can reference the same `policySchema` + ` policyTargetKey` pair.
     */
    requests?: Schema$GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest[];
  }
  /**
   * Error information for removing of a specific certificate on a specific target. A reference to a certificate.
   */
  export interface Schema$GoogleChromePolicyVersionsV1CertificateReference {
    /**
     * Output only. The name of the referencing network.
     */
    network?: string | null;
    /**
     * Output only. The obfuscated id of the org unit the referencing network is in.
     */
    orgUnitId?: string | null;
  }
  /**
   * Request object for creating a certificate.
   */
  export interface Schema$GoogleChromePolicyVersionsV1DefineCertificateRequest {
    /**
     * Optional. The optional name of the certificate. If not specified, the certificate issuer will be used as the name.
     */
    ceritificateName?: string | null;
    /**
     * Required. The raw contents of the .PEM, .CRT, or .CER file.
     */
    certificate?: string | null;
    /**
     * Optional. Certificate settings within the chrome.networks.certificates namespace.
     */
    settings?: Schema$GoogleChromePolicyVersionsV1NetworkSetting[];
    /**
     * Required. The target resource on which this certificate is applied. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id\}")
     */
    targetResource?: string | null;
  }
  /**
   * Response object for creating a certificate.
   */
  export interface Schema$GoogleChromePolicyVersionsV1DefineCertificateResponse {
    /**
     * The guid of the certificate created by the action.
     */
    networkId?: string | null;
    /**
     * the affiliated settings of the certificate (NOT IMPLEMENTED)
     */
    settings?: Schema$GoogleChromePolicyVersionsV1NetworkSetting[];
    /**
     * the resource at which the certificate is defined.
     */
    targetResource?: string | null;
  }
  /**
   * Request object for creating a new network.
   */
  export interface Schema$GoogleChromePolicyVersionsV1DefineNetworkRequest {
    /**
     * Required. Name of the new created network.
     */
    name?: string | null;
    /**
     * Required. Detailed network settings.
     */
    settings?: Schema$GoogleChromePolicyVersionsV1NetworkSetting[];
    /**
     * Required. The target resource on which this new network will be defined. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id\}")
     */
    targetResource?: string | null;
  }
  /**
   * Response object for creating a network.
   */
  export interface Schema$GoogleChromePolicyVersionsV1DefineNetworkResponse {
    /**
     * Network ID of the new created network.
     */
    networkId?: string | null;
    /**
     * Detailed network settings of the new created network
     */
    settings?: Schema$GoogleChromePolicyVersionsV1NetworkSetting[];
    /**
     * The target resource on which this new network will be defined. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id\}")
     */
    targetResource?: string | null;
  }
  /**
   * Request parameters for deleting the policy value of a specific group target.
   */
  export interface Schema$GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest {
    /**
     * The fully qualified name of the policy schema that is being inherited.
     */
    policySchema?: string | null;
    /**
     * Required. The key of the target for which we want to modify a policy. The target resource must point to a Group.
     */
    policyTargetKey?: Schema$GoogleChromePolicyVersionsV1PolicyTargetKey;
  }
  /**
   * Information about any range constraints.
   */
  export interface Schema$GoogleChromePolicyVersionsV1FieldConstraints {
    /**
     * The allowed range for numeric fields.
     */
    numericRangeConstraint?: Schema$GoogleChromePolicyVersionsV1NumericRangeConstraint;
  }
  /**
   * Request parameters for inheriting policy value of a specific org unit target from the policy value of its parent org unit.
   */
  export interface Schema$GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest {
    /**
     * The fully qualified name of the policy schema that is being inherited.
     */
    policySchema?: string | null;
    /**
     * Required. The key of the target for which we want to modify a policy. The target resource must point to an Org Unit.
     */
    policyTargetKey?: Schema$GoogleChromePolicyVersionsV1PolicyTargetKey;
  }
  /**
   * Request message for listing the group priority ordering of an app.
   */
  export interface Schema$GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest {
    /**
     * Required. The namespace of the policy type for the request.
     */
    policyNamespace?: string | null;
    /**
     * Required. The key of the target for which we want to retrieve the group priority ordering. The target resource must point to an app.
     */
    policyTargetKey?: Schema$GoogleChromePolicyVersionsV1PolicyTargetKey;
  }
  /**
   * Response message for listing the group priority ordering of an app.
   */
  export interface Schema$GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse {
    /**
     * Output only. The group IDs, in priority ordering.
     */
    groupIds?: string[] | null;
    /**
     * Output only. The namespace of the policy type of the group IDs.
     */
    policyNamespace?: string | null;
    /**
     * Output only. The target resource for which the group priority ordering has been retrieved.
     */
    policyTargetKey?: Schema$GoogleChromePolicyVersionsV1PolicyTargetKey;
  }
  /**
   * Response message for listing policy schemas that match a filter.
   */
  export interface Schema$GoogleChromePolicyVersionsV1ListPolicySchemasResponse {
    /**
     * The page token used to get the next page of policy schemas.
     */
    nextPageToken?: string | null;
    /**
     * The list of policy schemas that match the query.
     */
    policySchemas?: Schema$GoogleChromePolicyVersionsV1PolicySchema[];
  }
  /**
   * Request parameters for modifying a policy value for a specific group target.
   */
  export interface Schema$GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest {
    /**
     * Required. The key of the target for which we want to modify a policy. The target resource must point to a Group.
     */
    policyTargetKey?: Schema$GoogleChromePolicyVersionsV1PolicyTargetKey;
    /**
     * The new value for the policy.
     */
    policyValue?: Schema$GoogleChromePolicyVersionsV1PolicyValue;
    /**
     * Required. Policy fields to update. Only fields in this mask will be updated; other fields in `policy_value` will be ignored (even if they have values). If a field is in this list it must have a value in 'policy_value'.
     */
    updateMask?: string | null;
  }
  /**
   * Request parameters for modifying a policy value for a specific org unit target.
   */
  export interface Schema$GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest {
    /**
     * Required. The key of the target for which we want to modify a policy. The target resource must point to an Org Unit.
     */
    policyTargetKey?: Schema$GoogleChromePolicyVersionsV1PolicyTargetKey;
    /**
     * The new value for the policy.
     */
    policyValue?: Schema$GoogleChromePolicyVersionsV1PolicyValue;
    /**
     * Required. Policy fields to update. Only fields in this mask will be updated; other fields in `policy_value` will be ignored (even if they have values). If a field is in this list it must have a value in 'policy_value'.
     */
    updateMask?: string | null;
  }
  /**
   * A network setting contains network configurations.
   */
  export interface Schema$GoogleChromePolicyVersionsV1NetworkSetting {
    /**
     * The fully qualified name of the network setting.
     */
    policySchema?: string | null;
    /**
     * The value of the network setting.
     */
    value?: {[key: string]: any} | null;
  }
  /**
   * A constraint on upper and/or lower bounds, with at least one being set.
   */
  export interface Schema$GoogleChromePolicyVersionsV1NumericRangeConstraint {
    /**
     * Maximum value.
     */
    maximum?: string | null;
    /**
     * Minimum value.
     */
    minimum?: string | null;
  }
  /**
   * Error information for a modification request of a specific policy on a specific target.
   */
  export interface Schema$GoogleChromePolicyVersionsV1PolicyModificationError {
    /**
     * Output only. The non-field errors related to the modification.
     */
    errors?: string[] | null;
    /**
     * Output only. The error messages related to the modification.
     */
    fieldErrors?: Schema$GoogleChromePolicyVersionsV1PolicyModificationFieldError[];
    /**
     * Output only. The specific policy schema modification that had an error.
     */
    policySchema?: string | null;
    /**
     * Output only. The specific policy target modification that had error.
     */
    policyTargetKey?: Schema$GoogleChromePolicyVersionsV1PolicyTargetKey;
  }
  /**
   * Details of the errors encountered during a policy modification request. This message will be returned as part of the details of a google.rpc.Status returned to the user when there is an error in their request.
   */
  export interface Schema$GoogleChromePolicyVersionsV1PolicyModificationErrorDetails {
    /**
     * Output only. List of specific policy modifications errors that may have occurred during a modifying request.
     */
    modificationErrors?: Schema$GoogleChromePolicyVersionsV1PolicyModificationError[];
  }
  /**
   * Error information for a modification request of a specific field on a specific policy.
   */
  export interface Schema$GoogleChromePolicyVersionsV1PolicyModificationFieldError {
    /**
     * Output only. The error message related to the field.
     */
    error?: string | null;
    /**
     * Output only. The name of the field with the error.
     */
    field?: string | null;
  }
  /**
   * Resource representing a policy schema.
   */
  export interface Schema$GoogleChromePolicyVersionsV1PolicySchema {
    /**
     * Output only. Specific access restrictions related to this policy.
     */
    accessRestrictions?: string[] | null;
    /**
     * Output only. Additional key names that will be used to identify the target of the policy value. When specifying a `policyTargetKey`, each of the additional keys specified here will have to be included in the `additionalTargetKeys` map.
     */
    additionalTargetKeyNames?: Schema$GoogleChromePolicyVersionsV1AdditionalTargetKeyName[];
    /**
     * Title of the category in which a setting belongs.
     */
    categoryTitle?: string | null;
    /**
     * Schema definition using proto descriptor.
     */
    definition?: Schema$Proto2FileDescriptorProto;
    /**
     * Output only. Detailed description of each field that is part of the schema.
     */
    fieldDescriptions?: Schema$GoogleChromePolicyVersionsV1PolicySchemaFieldDescription[];
    /**
     * Format: name=customers/{customer\}/policySchemas/{schema_namespace\}
     */
    name?: string | null;
    /**
     * Output only. Special notice messages related to setting certain values in certain fields in the schema.
     */
    notices?: Schema$GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription[];
    /**
     * Output only. Current lifecycle information.
     */
    policyApiLifecycle?: Schema$ChromeCrosDpanelAutosettingsProtoPolicyApiLifecycle;
    /**
     * Output only. Description about the policy schema for user consumption.
     */
    policyDescription?: string | null;
    /**
     * Output only. The fully qualified name of the policy schema. This value is used to fill the field `policy_schema` in PolicyValue when calling BatchInheritOrgUnitPolicies BatchModifyOrgUnitPolicies BatchModifyGroupPolicies or BatchDeleteGroupPolicies.
     */
    schemaName?: string | null;
    /**
     * Output only. URI to related support article for this schema.
     */
    supportUri?: string | null;
    /**
     * Output only. Information about applicable target resources for the policy.
     */
    validTargetResources?: string[] | null;
  }
  /**
   * The field and the value it must have for another field to be allowed to be set.
   */
  export interface Schema$GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies {
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
  export interface Schema$GoogleChromePolicyVersionsV1PolicySchemaFieldDescription {
    /**
     * Output only. Client default if the policy is unset.
     */
    defaultValue?: any | null;
    /**
     * Deprecated. Use name and field_description instead. The description for the field.
     */
    description?: string | null;
    /**
     * Output only. The name of the field for associated with this description.
     */
    field?: string | null;
    /**
     * Output only. Information on any input constraints associated on the values for the field.
     */
    fieldConstraints?: Schema$GoogleChromePolicyVersionsV1FieldConstraints;
    /**
     * Output only. Provides a list of fields and values. At least one of the fields must have the corresponding value in order for this field to be allowed to be set.
     */
    fieldDependencies?: Schema$GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies[];
    /**
     * Output only. The description of the field.
     */
    fieldDescription?: string | null;
    /**
     * Output only. Any input constraints associated on the values for the field.
     */
    inputConstraint?: string | null;
    /**
     * Output only. If the field has a set of known values, this field will provide a description for these values.
     */
    knownValueDescriptions?: Schema$GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription[];
    /**
     * Output only. The name of the field.
     */
    name?: string | null;
    /**
     * Output only. Provides the description of the fields nested in this field, if the field is a message type that defines multiple fields.
     */
    nestedFieldDescriptions?: Schema$GoogleChromePolicyVersionsV1PolicySchemaFieldDescription[];
    /**
     * Output only. Provides a list of fields that are required to be set if this field has a certain value.
     */
    requiredItems?: Schema$GoogleChromePolicyVersionsV1PolicySchemaRequiredItems[];
  }
  /**
   * Provides detailed information about a known value that is allowed for a particular field in a PolicySchema.
   */
  export interface Schema$GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription {
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
  export interface Schema$GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription {
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
   * The fields that will become required based on the value of this field.
   */
  export interface Schema$GoogleChromePolicyVersionsV1PolicySchemaRequiredItems {
    /**
     * The value(s) of the field that provoke required field enforcement. An empty field_conditions implies that any value assigned to this field will provoke required field enforcement.
     */
    fieldConditions?: string[] | null;
    /**
     * The fields that are required as a consequence of the field conditions.
     */
    requiredFields?: string[] | null;
  }
  /**
   * The key used to identify the target on which the policy will be applied.
   */
  export interface Schema$GoogleChromePolicyVersionsV1PolicyTargetKey {
    /**
     * Map containing the additional target key name and value pairs used to further identify the target of the policy.
     */
    additionalTargetKeys?: {[key: string]: string} | null;
    /**
     * The target resource on which this policy is applied. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id\}") * Group ("groups/{group_id\}")
     */
    targetResource?: string | null;
  }
  /**
   * A particular value for a policy managed by the service.
   */
  export interface Schema$GoogleChromePolicyVersionsV1PolicyValue {
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
   * Details of the errors encountered during a remove certificate request. This message will be returned as part of the details of a google.rpc.Status returned to the user when there is an error in their request.
   */
  export interface Schema$GoogleChromePolicyVersionsV1RemoveCertificateErrorDetails {
    /**
     * Output only. If the certificate was not removed, a list of references to the certificate that prevented it from being removed. Only unreferenced certificates can be removed.
     */
    certificateReferences?: Schema$GoogleChromePolicyVersionsV1CertificateReference[];
  }
  /**
   * Request object for removing a certificate.
   */
  export interface Schema$GoogleChromePolicyVersionsV1RemoveCertificateRequest {
    /**
     * Required. The GUID of the certificate to remove.
     */
    networkId?: string | null;
    /**
     * Required. The target resource on which this certificate will be removed. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id\}")
     */
    targetResource?: string | null;
  }
  /**
   * Response object for removing a certificate.
   */
  export interface Schema$GoogleChromePolicyVersionsV1RemoveCertificateResponse {}
  /**
   * Request object for removing a network
   */
  export interface Schema$GoogleChromePolicyVersionsV1RemoveNetworkRequest {
    /**
     * Required. The GUID of the network to remove.
     */
    networkId?: string | null;
    /**
     * Required. The target resource on which this network will be removed. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id\}")
     */
    targetResource?: string | null;
  }
  /**
   * Response object for removing a network.
   */
  export interface Schema$GoogleChromePolicyVersionsV1RemoveNetworkResponse {}
  /**
   * The resolved value of a policy for a given target.
   */
  export interface Schema$GoogleChromePolicyVersionsV1ResolvedPolicy {
    /**
     * Output only. The added source key establishes at which level an entity was explicitly added for management. This is useful for certain type of policies that are only applied if they are explicitly added for management. For example: apps and networks. An entity can only be deleted from management in an Organizational Unit that it was explicitly added to. If this is not present it means that the policy is managed without the need to explicitly add an entity, for example: standard user or device policies.
     */
    addedSourceKey?: Schema$GoogleChromePolicyVersionsV1PolicyTargetKey;
    /**
     * Output only. The source resource from which this policy value is obtained. May be the same as `targetKey` if the policy is directly modified on the target, otherwise it would be another resource from which the policy gets its value (if applicable). If not present, the source is the default value for the customer.
     */
    sourceKey?: Schema$GoogleChromePolicyVersionsV1PolicyTargetKey;
    /**
     * Output only. The target resource for which the resolved policy value applies.
     */
    targetKey?: Schema$GoogleChromePolicyVersionsV1PolicyTargetKey;
    /**
     * Output only. The resolved value of the policy.
     */
    value?: Schema$GoogleChromePolicyVersionsV1PolicyValue;
  }
  /**
   * Request message for getting the resolved policy value for a specific target.
   */
  export interface Schema$GoogleChromePolicyVersionsV1ResolveRequest {
    /**
     * The maximum number of policies to return, defaults to 100 and has a maximum of 1000.
     */
    pageSize?: number | null;
    /**
     * The page token used to retrieve a specific page of the request.
     */
    pageToken?: string | null;
    /**
     * Required. The schema filter to apply to the resolve request. Specify a schema name to view a particular schema, for example: chrome.users.ShowLogoutButton Wildcards are supported, but only in the leaf portion of the schema name. Wildcards cannot be used in namespace directly. Please read https://developers.google.com/chrome/policy/guides/policy-schemas for details on schema namespaces. For example: Valid: "chrome.users.*", "chrome.users.apps.*", "chrome.printers.*" Invalid: "*", "*.users", "chrome.*", "chrome.*.apps.*"
     */
    policySchemaFilter?: string | null;
    /**
     * Required. The key of the target resource on which the policies should be resolved.
     */
    policyTargetKey?: Schema$GoogleChromePolicyVersionsV1PolicyTargetKey;
  }
  /**
   * Response message for getting the resolved policy value for a specific target.
   */
  export interface Schema$GoogleChromePolicyVersionsV1ResolveResponse {
    /**
     * The page token used to get the next set of resolved policies found by the request.
     */
    nextPageToken?: string | null;
    /**
     * The list of resolved policies found by the resolve request.
     */
    resolvedPolicies?: Schema$GoogleChromePolicyVersionsV1ResolvedPolicy[];
  }
  /**
   * Request message for updating the group priority ordering of an app.
   */
  export interface Schema$GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest {
    /**
     * Required. The group IDs, in desired priority ordering.
     */
    groupIds?: string[] | null;
    /**
     * Required. The namespace of the policy type for the request.
     */
    policyNamespace?: string | null;
    /**
     * Required. The key of the target for which we want to update the group priority ordering. The target resource must point to an app.
     */
    policyTargetKey?: Schema$GoogleChromePolicyVersionsV1PolicyTargetKey;
  }
  /**
   * Request message for uploading a file for a policy.
   */
  export interface Schema$GoogleChromePolicyVersionsV1UploadPolicyFileRequest {
    /**
     * Required. The fully qualified policy schema and field name this file is uploaded for. This information will be used to validate the content type of the file.
     */
    policyField?: string | null;
  }
  /**
   * Response message for downloading an uploaded file.
   */
  export interface Schema$GoogleChromePolicyVersionsV1UploadPolicyFileResponse {
    /**
     * The uri for end user to download the file.
     */
    downloadUri?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$GoogleProtobufEmpty {}
  /**
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
   */
  export interface Schema$GoogleTypeDate {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | null;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | null;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | null;
  }
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
     * The syntax of the proto file. The supported values are "proto2", "proto3", and "editions". If `edition` is present, this value must be "editions".
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
    groups: Resource$Customers$Policies$Groups;
    networks: Resource$Customers$Policies$Networks;
    orgunits: Resource$Customers$Policies$Orgunits;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.groups = new Resource$Customers$Policies$Groups(this.context);
      this.networks = new Resource$Customers$Policies$Networks(this.context);
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
    ): GaxiosPromise<Schema$GoogleChromePolicyVersionsV1ResolveResponse>;
    resolve(
      params: Params$Resource$Customers$Policies$Resolve,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    resolve(
      params: Params$Resource$Customers$Policies$Resolve,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1ResolveResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1ResolveResponse>
    ): void;
    resolve(
      params: Params$Resource$Customers$Policies$Resolve,
      callback: BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1ResolveResponse>
    ): void;
    resolve(
      callback: BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1ResolveResponse>
    ): void;
    resolve(
      paramsOrCallback?:
        | Params$Resource$Customers$Policies$Resolve
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1ResolveResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1ResolveResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1ResolveResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleChromePolicyVersionsV1ResolveResponse>
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
        createAPIRequest<Schema$GoogleChromePolicyVersionsV1ResolveResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromePolicyVersionsV1ResolveResponse>(
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
    requestBody?: Schema$GoogleChromePolicyVersionsV1ResolveRequest;
  }

  export class Resource$Customers$Policies$Groups {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Delete multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
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
     *   const res = await chromepolicy.customers.policies.groups.batchDelete({
     *     // ID of the Google Workspace account or literal "my_customer" for the customer associated to the request.
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
    batchDelete(
      params: Params$Resource$Customers$Policies$Groups$Batchdelete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchDelete(
      params?: Params$Resource$Customers$Policies$Groups$Batchdelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    batchDelete(
      params: Params$Resource$Customers$Policies$Groups$Batchdelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchDelete(
      params: Params$Resource$Customers$Policies$Groups$Batchdelete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchDelete(
      params: Params$Resource$Customers$Policies$Groups$Batchdelete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchDelete(
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchDelete(
      paramsOrCallback?:
        | Params$Resource$Customers$Policies$Groups$Batchdelete
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
        {}) as Params$Resource$Customers$Policies$Groups$Batchdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Policies$Groups$Batchdelete;
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
              rootUrl + '/v1/{+customer}/policies/groups:batchDelete'
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
     * Modify multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
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
     *   const res = await chromepolicy.customers.policies.groups.batchModify({
     *     // ID of the Google Workspace account or literal "my_customer" for the customer associated to the request.
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
      params: Params$Resource$Customers$Policies$Groups$Batchmodify,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchModify(
      params?: Params$Resource$Customers$Policies$Groups$Batchmodify,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    batchModify(
      params: Params$Resource$Customers$Policies$Groups$Batchmodify,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchModify(
      params: Params$Resource$Customers$Policies$Groups$Batchmodify,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchModify(
      params: Params$Resource$Customers$Policies$Groups$Batchmodify,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchModify(
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchModify(
      paramsOrCallback?:
        | Params$Resource$Customers$Policies$Groups$Batchmodify
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
        {}) as Params$Resource$Customers$Policies$Groups$Batchmodify;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Customers$Policies$Groups$Batchmodify;
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
              rootUrl + '/v1/{+customer}/policies/groups:batchModify'
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
     * Retrieve a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
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
     *   const res =
     *     await chromepolicy.customers.policies.groups.listGroupPriorityOrdering({
     *       // Required. ID of the Google Workspace account or literal "my_customer" for the customer associated to the request.
     *       customer: 'customers/my-customer',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "policyNamespace": "my_policyNamespace",
     *         //   "policyTargetKey": {}
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "groupIds": [],
     *   //   "policyNamespace": "my_policyNamespace",
     *   //   "policyTargetKey": {}
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
    listGroupPriorityOrdering(
      params: Params$Resource$Customers$Policies$Groups$Listgrouppriorityordering,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listGroupPriorityOrdering(
      params?: Params$Resource$Customers$Policies$Groups$Listgrouppriorityordering,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse>;
    listGroupPriorityOrdering(
      params: Params$Resource$Customers$Policies$Groups$Listgrouppriorityordering,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listGroupPriorityOrdering(
      params: Params$Resource$Customers$Policies$Groups$Listgrouppriorityordering,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse>
    ): void;
    listGroupPriorityOrdering(
      params: Params$Resource$Customers$Policies$Groups$Listgrouppriorityordering,
      callback: BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse>
    ): void;
    listGroupPriorityOrdering(
      callback: BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse>
    ): void;
    listGroupPriorityOrdering(
      paramsOrCallback?:
        | Params$Resource$Customers$Policies$Groups$Listgrouppriorityordering
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Policies$Groups$Listgrouppriorityordering;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Customers$Policies$Groups$Listgrouppriorityordering;
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
              rootUrl +
              '/v1/{+customer}/policies/groups:listGroupPriorityOrdering'
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
        createAPIRequest<Schema$GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse>(
          parameters
        );
      }
    }

    /**
     * Update a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
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
     *   const res =
     *     await chromepolicy.customers.policies.groups.updateGroupPriorityOrdering({
     *       // Required. ID of the Google Workspace account or literal "my_customer" for the customer associated to the request.
     *       customer: 'customers/my-customer',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "groupIds": [],
     *         //   "policyNamespace": "my_policyNamespace",
     *         //   "policyTargetKey": {}
     *         // }
     *       },
     *     });
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
    updateGroupPriorityOrdering(
      params: Params$Resource$Customers$Policies$Groups$Updategrouppriorityordering,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateGroupPriorityOrdering(
      params?: Params$Resource$Customers$Policies$Groups$Updategrouppriorityordering,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    updateGroupPriorityOrdering(
      params: Params$Resource$Customers$Policies$Groups$Updategrouppriorityordering,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateGroupPriorityOrdering(
      params: Params$Resource$Customers$Policies$Groups$Updategrouppriorityordering,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    updateGroupPriorityOrdering(
      params: Params$Resource$Customers$Policies$Groups$Updategrouppriorityordering,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    updateGroupPriorityOrdering(
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    updateGroupPriorityOrdering(
      paramsOrCallback?:
        | Params$Resource$Customers$Policies$Groups$Updategrouppriorityordering
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
        {}) as Params$Resource$Customers$Policies$Groups$Updategrouppriorityordering;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Customers$Policies$Groups$Updategrouppriorityordering;
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
              rootUrl +
              '/v1/{+customer}/policies/groups:updateGroupPriorityOrdering'
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

  export interface Params$Resource$Customers$Policies$Groups$Batchdelete
    extends StandardParameters {
    /**
     * ID of the Google Workspace account or literal "my_customer" for the customer associated to the request.
     */
    customer?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest;
  }
  export interface Params$Resource$Customers$Policies$Groups$Batchmodify
    extends StandardParameters {
    /**
     * ID of the Google Workspace account or literal "my_customer" for the customer associated to the request.
     */
    customer?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequest;
  }
  export interface Params$Resource$Customers$Policies$Groups$Listgrouppriorityordering
    extends StandardParameters {
    /**
     * Required. ID of the Google Workspace account or literal "my_customer" for the customer associated to the request.
     */
    customer?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest;
  }
  export interface Params$Resource$Customers$Policies$Groups$Updategrouppriorityordering
    extends StandardParameters {
    /**
     * Required. ID of the Google Workspace account or literal "my_customer" for the customer associated to the request.
     */
    customer?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest;
  }

  export class Resource$Customers$Policies$Networks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a certificate at a specified OU for a customer.
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
     *   const res = await chromepolicy.customers.policies.networks.defineCertificate({
     *     // Required. The customer for which the certificate will apply.
     *     customer: 'customers/my-customer',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "ceritificateName": "my_ceritificateName",
     *       //   "certificate": "my_certificate",
     *       //   "settings": [],
     *       //   "targetResource": "my_targetResource"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "networkId": "my_networkId",
     *   //   "settings": [],
     *   //   "targetResource": "my_targetResource"
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
    defineCertificate(
      params: Params$Resource$Customers$Policies$Networks$Definecertificate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    defineCertificate(
      params?: Params$Resource$Customers$Policies$Networks$Definecertificate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleChromePolicyVersionsV1DefineCertificateResponse>;
    defineCertificate(
      params: Params$Resource$Customers$Policies$Networks$Definecertificate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    defineCertificate(
      params: Params$Resource$Customers$Policies$Networks$Definecertificate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1DefineCertificateResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1DefineCertificateResponse>
    ): void;
    defineCertificate(
      params: Params$Resource$Customers$Policies$Networks$Definecertificate,
      callback: BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1DefineCertificateResponse>
    ): void;
    defineCertificate(
      callback: BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1DefineCertificateResponse>
    ): void;
    defineCertificate(
      paramsOrCallback?:
        | Params$Resource$Customers$Policies$Networks$Definecertificate
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1DefineCertificateResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1DefineCertificateResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1DefineCertificateResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleChromePolicyVersionsV1DefineCertificateResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Policies$Networks$Definecertificate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Customers$Policies$Networks$Definecertificate;
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
              rootUrl + '/v1/{+customer}/policies/networks:defineCertificate'
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
        createAPIRequest<Schema$GoogleChromePolicyVersionsV1DefineCertificateResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromePolicyVersionsV1DefineCertificateResponse>(
          parameters
        );
      }
    }

    /**
     * Define a new network.
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
     *   const res = await chromepolicy.customers.policies.networks.defineNetwork({
     *     // Required. The customer who will own this new network.
     *     customer: 'customers/my-customer',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "name": "my_name",
     *       //   "settings": [],
     *       //   "targetResource": "my_targetResource"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "networkId": "my_networkId",
     *   //   "settings": [],
     *   //   "targetResource": "my_targetResource"
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
    defineNetwork(
      params: Params$Resource$Customers$Policies$Networks$Definenetwork,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    defineNetwork(
      params?: Params$Resource$Customers$Policies$Networks$Definenetwork,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleChromePolicyVersionsV1DefineNetworkResponse>;
    defineNetwork(
      params: Params$Resource$Customers$Policies$Networks$Definenetwork,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    defineNetwork(
      params: Params$Resource$Customers$Policies$Networks$Definenetwork,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1DefineNetworkResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1DefineNetworkResponse>
    ): void;
    defineNetwork(
      params: Params$Resource$Customers$Policies$Networks$Definenetwork,
      callback: BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1DefineNetworkResponse>
    ): void;
    defineNetwork(
      callback: BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1DefineNetworkResponse>
    ): void;
    defineNetwork(
      paramsOrCallback?:
        | Params$Resource$Customers$Policies$Networks$Definenetwork
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1DefineNetworkResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1DefineNetworkResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1DefineNetworkResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleChromePolicyVersionsV1DefineNetworkResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Policies$Networks$Definenetwork;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Customers$Policies$Networks$Definenetwork;
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
              rootUrl + '/v1/{+customer}/policies/networks:defineNetwork'
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
        createAPIRequest<Schema$GoogleChromePolicyVersionsV1DefineNetworkResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromePolicyVersionsV1DefineNetworkResponse>(
          parameters
        );
      }
    }

    /**
     * Remove an existing certificate by guid.
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
     *   const res = await chromepolicy.customers.policies.networks.removeCertificate({
     *     // Required. The customer whose certificate will be removed.
     *     customer: 'customers/my-customer',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "networkId": "my_networkId",
     *       //   "targetResource": "my_targetResource"
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
    removeCertificate(
      params: Params$Resource$Customers$Policies$Networks$Removecertificate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    removeCertificate(
      params?: Params$Resource$Customers$Policies$Networks$Removecertificate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleChromePolicyVersionsV1RemoveCertificateResponse>;
    removeCertificate(
      params: Params$Resource$Customers$Policies$Networks$Removecertificate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    removeCertificate(
      params: Params$Resource$Customers$Policies$Networks$Removecertificate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1RemoveCertificateResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1RemoveCertificateResponse>
    ): void;
    removeCertificate(
      params: Params$Resource$Customers$Policies$Networks$Removecertificate,
      callback: BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1RemoveCertificateResponse>
    ): void;
    removeCertificate(
      callback: BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1RemoveCertificateResponse>
    ): void;
    removeCertificate(
      paramsOrCallback?:
        | Params$Resource$Customers$Policies$Networks$Removecertificate
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1RemoveCertificateResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1RemoveCertificateResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1RemoveCertificateResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleChromePolicyVersionsV1RemoveCertificateResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Policies$Networks$Removecertificate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Customers$Policies$Networks$Removecertificate;
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
              rootUrl + '/v1/{+customer}/policies/networks:removeCertificate'
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
        createAPIRequest<Schema$GoogleChromePolicyVersionsV1RemoveCertificateResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromePolicyVersionsV1RemoveCertificateResponse>(
          parameters
        );
      }
    }

    /**
     * Remove an existing network by guid.
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
     *   const res = await chromepolicy.customers.policies.networks.removeNetwork({
     *     // Required. The customer whose network will be removed.
     *     customer: 'customers/my-customer',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "networkId": "my_networkId",
     *       //   "targetResource": "my_targetResource"
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
    removeNetwork(
      params: Params$Resource$Customers$Policies$Networks$Removenetwork,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    removeNetwork(
      params?: Params$Resource$Customers$Policies$Networks$Removenetwork,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleChromePolicyVersionsV1RemoveNetworkResponse>;
    removeNetwork(
      params: Params$Resource$Customers$Policies$Networks$Removenetwork,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    removeNetwork(
      params: Params$Resource$Customers$Policies$Networks$Removenetwork,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1RemoveNetworkResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1RemoveNetworkResponse>
    ): void;
    removeNetwork(
      params: Params$Resource$Customers$Policies$Networks$Removenetwork,
      callback: BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1RemoveNetworkResponse>
    ): void;
    removeNetwork(
      callback: BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1RemoveNetworkResponse>
    ): void;
    removeNetwork(
      paramsOrCallback?:
        | Params$Resource$Customers$Policies$Networks$Removenetwork
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1RemoveNetworkResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1RemoveNetworkResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1RemoveNetworkResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleChromePolicyVersionsV1RemoveNetworkResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Customers$Policies$Networks$Removenetwork;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Customers$Policies$Networks$Removenetwork;
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
              rootUrl + '/v1/{+customer}/policies/networks:removeNetwork'
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
        createAPIRequest<Schema$GoogleChromePolicyVersionsV1RemoveNetworkResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromePolicyVersionsV1RemoveNetworkResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Customers$Policies$Networks$Definecertificate
    extends StandardParameters {
    /**
     * Required. The customer for which the certificate will apply.
     */
    customer?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleChromePolicyVersionsV1DefineCertificateRequest;
  }
  export interface Params$Resource$Customers$Policies$Networks$Definenetwork
    extends StandardParameters {
    /**
     * Required. The customer who will own this new network.
     */
    customer?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleChromePolicyVersionsV1DefineNetworkRequest;
  }
  export interface Params$Resource$Customers$Policies$Networks$Removecertificate
    extends StandardParameters {
    /**
     * Required. The customer whose certificate will be removed.
     */
    customer?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleChromePolicyVersionsV1RemoveCertificateRequest;
  }
  export interface Params$Resource$Customers$Policies$Networks$Removenetwork
    extends StandardParameters {
    /**
     * Required. The customer whose network will be removed.
     */
    customer?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleChromePolicyVersionsV1RemoveNetworkRequest;
  }

  export class Resource$Customers$Policies$Orgunits {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Modify multiple policy values that are applied to a specific org unit so that they now inherit the value from a parent (if applicable). All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
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
     * Modify multiple policy values that are applied to a specific org unit. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
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
    requestBody?: Schema$GoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequest;
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
    requestBody?: Schema$GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest;
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
     *   //   "categoryTitle": "my_categoryTitle",
     *   //   "definition": {},
     *   //   "fieldDescriptions": [],
     *   //   "name": "my_name",
     *   //   "notices": [],
     *   //   "policyApiLifecycle": {},
     *   //   "policyDescription": "my_policyDescription",
     *   //   "schemaName": "my_schemaName",
     *   //   "supportUri": "my_supportUri",
     *   //   "validTargetResources": []
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
    ): GaxiosPromise<Schema$GoogleChromePolicyVersionsV1PolicySchema>;
    get(
      params: Params$Resource$Customers$Policyschemas$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Customers$Policyschemas$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1PolicySchema>,
      callback: BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1PolicySchema>
    ): void;
    get(
      params: Params$Resource$Customers$Policyschemas$Get,
      callback: BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1PolicySchema>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1PolicySchema>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Customers$Policyschemas$Get
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1PolicySchema>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1PolicySchema>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1PolicySchema>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleChromePolicyVersionsV1PolicySchema>
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
        createAPIRequest<Schema$GoogleChromePolicyVersionsV1PolicySchema>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromePolicyVersionsV1PolicySchema>(
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
     *     // The maximum number of policy schemas to return, defaults to 100 and has a maximum of 1000.
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
    ): GaxiosPromise<Schema$GoogleChromePolicyVersionsV1ListPolicySchemasResponse>;
    list(
      params: Params$Resource$Customers$Policyschemas$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Customers$Policyschemas$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1ListPolicySchemasResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1ListPolicySchemasResponse>
    ): void;
    list(
      params: Params$Resource$Customers$Policyschemas$List,
      callback: BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1ListPolicySchemasResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1ListPolicySchemasResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Customers$Policyschemas$List
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1ListPolicySchemasResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1ListPolicySchemasResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1ListPolicySchemasResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleChromePolicyVersionsV1ListPolicySchemasResponse>
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
        createAPIRequest<Schema$GoogleChromePolicyVersionsV1ListPolicySchemasResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromePolicyVersionsV1ListPolicySchemasResponse>(
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
     * The maximum number of policy schemas to return, defaults to 100 and has a maximum of 1000.
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
    ): GaxiosPromise<Schema$GoogleChromePolicyVersionsV1UploadPolicyFileResponse>;
    upload(
      params: Params$Resource$Media$Upload,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    upload(
      params: Params$Resource$Media$Upload,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1UploadPolicyFileResponse>,
      callback: BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1UploadPolicyFileResponse>
    ): void;
    upload(
      params: Params$Resource$Media$Upload,
      callback: BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1UploadPolicyFileResponse>
    ): void;
    upload(
      callback: BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1UploadPolicyFileResponse>
    ): void;
    upload(
      paramsOrCallback?:
        | Params$Resource$Media$Upload
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1UploadPolicyFileResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1UploadPolicyFileResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleChromePolicyVersionsV1UploadPolicyFileResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleChromePolicyVersionsV1UploadPolicyFileResponse>
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
        createAPIRequest<Schema$GoogleChromePolicyVersionsV1UploadPolicyFileResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleChromePolicyVersionsV1UploadPolicyFileResponse>(
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
    requestBody?: Schema$GoogleChromePolicyVersionsV1UploadPolicyFileRequest;

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
