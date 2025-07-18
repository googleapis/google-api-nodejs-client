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
  GaxiosResponseWithHTTP2,
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

export namespace drivelabels_v2 {
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
   * Drive Labels API
   *
   * An API for managing Drive Labels
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const drivelabels = google.drivelabels('v2');
   * ```
   */
  export class Drivelabels {
    context: APIRequestContext;
    labels: Resource$Labels;
    limits: Resource$Limits;
    users: Resource$Users;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.labels = new Resource$Labels(this.context);
      this.limits = new Resource$Limits(this.context);
      this.users = new Resource$Users(this.context);
    }
  }

  /**
   * The color derived from BadgeConfig and changed to the closest recommended supported color.
   */
  export interface Schema$GoogleAppsDriveLabelsV2BadgeColors {
    /**
     * Output only. Badge background that pairs with the foreground.
     */
    backgroundColor?: Schema$GoogleTypeColor;
    /**
     * Output only. Badge foreground that pairs with the background.
     */
    foregroundColor?: Schema$GoogleTypeColor;
    /**
     * Output only. Color that can be used for text without a background.
     */
    soloColor?: Schema$GoogleTypeColor;
  }
  /**
   * Badge status of the label.
   */
  export interface Schema$GoogleAppsDriveLabelsV2BadgeConfig {
    /**
     * The color of the badge. When not specified, no badge is rendered. The background, foreground, and solo (light and dark mode) colors set here are changed in the Drive UI into the closest recommended supported color.
     */
    color?: Schema$GoogleTypeColor;
    /**
     * Override the default global priority of this badge. When set to 0, the default priority heuristic is used.
     */
    priorityOverride?: string | null;
  }
  /**
   * Deletes one of more Label Permissions.
   */
  export interface Schema$GoogleAppsDriveLabelsV2BatchDeleteLabelPermissionsRequest {
    /**
     * Required. The request message specifying the resources to update.
     */
    requests?: Schema$GoogleAppsDriveLabelsV2DeleteLabelPermissionRequest[];
    /**
     * Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. If this is set, the use_admin_access field in the DeleteLabelPermissionRequest messages must either be empty or match this field.
     */
    useAdminAccess?: boolean | null;
  }
  /**
   * Updates one or more Label Permissions.
   */
  export interface Schema$GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsRequest {
    /**
     * Required. The request message specifying the resources to update.
     */
    requests?: Schema$GoogleAppsDriveLabelsV2UpdateLabelPermissionRequest[];
    /**
     * Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. If this is set, the use_admin_access field in the UpdateLabelPermissionRequest messages must either be empty or match this field.
     */
    useAdminAccess?: boolean | null;
  }
  /**
   * Response for updating one or more Label Permissions.
   */
  export interface Schema$GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse {
    /**
     * Required. Permissions updated.
     */
    permissions?: Schema$GoogleAppsDriveLabelsV2LabelPermission[];
  }
  /**
   * Limits for date Field type.
   */
  export interface Schema$GoogleAppsDriveLabelsV2DateLimits {
    /**
     * Maximum value for the date Field type.
     */
    maxValue?: Schema$GoogleTypeDate;
    /**
     * Minimum value for the date Field type.
     */
    minValue?: Schema$GoogleTypeDate;
  }
  /**
   * Deletes a Label Permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
   */
  export interface Schema$GoogleAppsDriveLabelsV2DeleteLabelPermissionRequest {
    /**
     * Required. Label Permission resource name.
     */
    name?: string | null;
    /**
     * Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     */
    useAdminAccess?: boolean | null;
  }
  /**
   * The set of requests for updating aspects of a Label. If any request is not valid, no requests will be applied.
   */
  export interface Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelRequest {
    /**
     * The BCP-47 language code to use for evaluating localized Field labels when `include_label_in_response` is `true`.
     */
    languageCode?: string | null;
    /**
     * A list of updates to apply to the Label. Requests will be applied in the order they are specified.
     */
    requests?: Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestRequest[];
    /**
     * Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     */
    useAdminAccess?: boolean | null;
    /**
     * When specified, only certain fields belonging to the indicated view will be returned.
     */
    view?: string | null;
    /**
     * Provides control over how write requests are executed.
     */
    writeControl?: Schema$GoogleAppsDriveLabelsV2WriteControl;
  }
  /**
   * Request to create a Field within a Label.
   */
  export interface Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateFieldRequest {
    /**
     * Required. Field to create.
     */
    field?: Schema$GoogleAppsDriveLabelsV2Field;
  }
  /**
   * Request to create a Selection Choice.
   */
  export interface Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateSelectionChoiceRequest {
    /**
     * Required. The Choice to create.
     */
    choice?: Schema$GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice;
    /**
     * Required. The Selection Field in which a Choice will be created.
     */
    fieldId?: string | null;
  }
  /**
   * Request to delete the Field.
   */
  export interface Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteFieldRequest {
    /**
     * Required. ID of the Field to delete.
     */
    id?: string | null;
  }
  /**
   * Request to delete a Choice.
   */
  export interface Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteSelectionChoiceRequest {
    /**
     * Required. The Selection Field from which a Choice will be deleted.
     */
    fieldId?: string | null;
    /**
     * Required. Choice to delete.
     */
    id?: string | null;
  }
  /**
   * Request to disable the Field.
   */
  export interface Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableFieldRequest {
    /**
     * Required. Field Disabled Policy.
     */
    disabledPolicy?: Schema$GoogleAppsDriveLabelsV2LifecycleDisabledPolicy;
    /**
     * Required. Key of the Field to disable.
     */
    id?: string | null;
    /**
     * The fields that should be updated. At least one field must be specified. The root `disabled_policy` is implied and should not be specified. A single `*` can be used as short-hand for updating every field.
     */
    updateMask?: string | null;
  }
  /**
   * Request to disable a Choice.
   */
  export interface Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableSelectionChoiceRequest {
    /**
     * Required. The disabled policy to update.
     */
    disabledPolicy?: Schema$GoogleAppsDriveLabelsV2LifecycleDisabledPolicy;
    /**
     * Required. The Selection Field in which a Choice will be disabled.
     */
    fieldId?: string | null;
    /**
     * Required. Choice to disable.
     */
    id?: string | null;
    /**
     * The fields that should be updated. At least one field must be specified. The root `disabled_policy` is implied and should not be specified. A single `*` can be used as short-hand for updating every field.
     */
    updateMask?: string | null;
  }
  /**
   * Request to enable the Field.
   */
  export interface Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableFieldRequest {
    /**
     * Required. ID of the Field to enable.
     */
    id?: string | null;
  }
  /**
   * Request to enable a Choice.
   */
  export interface Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableSelectionChoiceRequest {
    /**
     * Required. The Selection Field in which a Choice will be enabled.
     */
    fieldId?: string | null;
    /**
     * Required. Choice to enable.
     */
    id?: string | null;
  }
  /**
   * A single kind of update to apply to a Label.
   */
  export interface Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestRequest {
    /**
     * Creates a new Field.
     */
    createField?: Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateFieldRequest;
    /**
     * Creates Choice within a Selection field.
     */
    createSelectionChoice?: Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateSelectionChoiceRequest;
    /**
     * Deletes a Field from the label.
     */
    deleteField?: Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteFieldRequest;
    /**
     * Delete a Choice within a Selection Field.
     */
    deleteSelectionChoice?: Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteSelectionChoiceRequest;
    /**
     * Disables the Field.
     */
    disableField?: Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableFieldRequest;
    /**
     * Disable a Choice within a Selection Field.
     */
    disableSelectionChoice?: Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableSelectionChoiceRequest;
    /**
     * Enables the Field.
     */
    enableField?: Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableFieldRequest;
    /**
     * Enable a Choice within a Selection Field.
     */
    enableSelectionChoice?: Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableSelectionChoiceRequest;
    /**
     * Updates basic properties of a Field.
     */
    updateField?: Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldPropertiesRequest;
    /**
     * Update Field type and/or type options.
     */
    updateFieldType?: Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldTypeRequest;
    /**
     * Updates the Label properties.
     */
    updateLabel?: Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateLabelPropertiesRequest;
    /**
     * Update a Choice properties within a Selection Field.
     */
    updateSelectionChoiceProperties?: Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest;
  }
  /**
   * Request to update Field properties.
   */
  export interface Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldPropertiesRequest {
    /**
     * Required. The Field to update.
     */
    id?: string | null;
    /**
     * Required. Basic Field properties.
     */
    properties?: Schema$GoogleAppsDriveLabelsV2FieldProperties;
    /**
     * The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `*` can be used as short-hand for updating every field.
     */
    updateMask?: string | null;
  }
  /**
   * Request to change the type of a Field.
   */
  export interface Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldTypeRequest {
    /**
     * Update field to Date.
     */
    dateOptions?: Schema$GoogleAppsDriveLabelsV2FieldDateOptions;
    /**
     * Required. The Field to update.
     */
    id?: string | null;
    /**
     * Update field to Integer.
     */
    integerOptions?: Schema$GoogleAppsDriveLabelsV2FieldIntegerOptions;
    /**
     * Update field to Selection.
     */
    selectionOptions?: Schema$GoogleAppsDriveLabelsV2FieldSelectionOptions;
    /**
     * Update field to Text.
     */
    textOptions?: Schema$GoogleAppsDriveLabelsV2FieldTextOptions;
    /**
     * The fields that should be updated. At least one field must be specified. The root of `type_options` is implied and should not be specified. A single `*` can be used as short-hand for updating every field.
     */
    updateMask?: string | null;
    /**
     * Update field to User.
     */
    userOptions?: Schema$GoogleAppsDriveLabelsV2FieldUserOptions;
  }
  /**
   * Updates basic properties of a Label.
   */
  export interface Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateLabelPropertiesRequest {
    /**
     * Required. Label properties to update.
     */
    properties?: Schema$GoogleAppsDriveLabelsV2LabelProperties;
    /**
     * The fields that should be updated. At least one field must be specified. The root `label_properties` is implied and should not be specified. A single `*` can be used as short-hand for updating every field.
     */
    updateMask?: string | null;
  }
  /**
   * Request to update a Choice properties.
   */
  export interface Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest {
    /**
     * Required. The Selection Field to update.
     */
    fieldId?: string | null;
    /**
     * Required. The Choice to update.
     */
    id?: string | null;
    /**
     * Required. The Choice properties to update.
     */
    properties?: Schema$GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties;
    /**
     * The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `*` can be used as short-hand for updating every field.
     */
    updateMask?: string | null;
  }
  /**
   * Response for Label update.
   */
  export interface Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponse {
    /**
     * The reply of the updates. This maps 1:1 with the updates, although responses to some requests may be empty.
     */
    responses?: Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseResponse[];
    /**
     * The label after updates were applied. This is only set if [BatchUpdateLabelResponse2.include_label_in_response] is `true` and there were no errors.
     */
    updatedLabel?: Schema$GoogleAppsDriveLabelsV2Label;
  }
  /**
   * Response following Field create.
   */
  export interface Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateFieldResponse {
    /**
     * The field of the created field. When left blank in a create request, a key will be autogenerated and can be identified here.
     */
    id?: string | null;
    /**
     * The priority of the created field. The priority may change from what was specified to assure contiguous priorities between fields (1-n).
     */
    priority?: number | null;
  }
  /**
   * Response following Selection Choice create.
   */
  export interface Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateSelectionChoiceResponse {
    /**
     * The server-generated id of the field.
     */
    fieldId?: string | null;
    /**
     * The server-generated ID of the created choice within the Field
     */
    id?: string | null;
  }
  /**
   * Response following Field delete.
   */
  export interface Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDeleteFieldResponse {}
  /**
   * Response following Choice delete.
   */
  export interface Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDeleteSelectionChoiceResponse {}
  /**
   * Response following Field disable.
   */
  export interface Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDisableFieldResponse {}
  /**
   * Response following Choice disable.
   */
  export interface Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDisableSelectionChoiceResponse {}
  /**
   * Response following Field enable.
   */
  export interface Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseEnableFieldResponse {}
  /**
   * Response following Choice enable.
   */
  export interface Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseEnableSelectionChoiceResponse {}
  /**
   * A single response from an update.
   */
  export interface Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseResponse {
    /**
     * Creates a new Field.
     */
    createField?: Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateFieldResponse;
    /**
     * Creates a new selection list option to add to a Selection Field.
     */
    createSelectionChoice?: Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateSelectionChoiceResponse;
    /**
     * Deletes a Field from the label.
     */
    deleteField?: Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDeleteFieldResponse;
    /**
     * Deletes a Choice from a Selection Field.
     */
    deleteSelectionChoice?: Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDeleteSelectionChoiceResponse;
    /**
     * Disables Field.
     */
    disableField?: Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDisableFieldResponse;
    /**
     * Disables a Choice within a Selection Field.
     */
    disableSelectionChoice?: Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDisableSelectionChoiceResponse;
    /**
     * Enables Field.
     */
    enableField?: Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseEnableFieldResponse;
    /**
     * Enables a Choice within a Selection Field.
     */
    enableSelectionChoice?: Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseEnableSelectionChoiceResponse;
    /**
     * Updates basic properties of a Field.
     */
    updateField?: Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateFieldPropertiesResponse;
    /**
     * Update Field type and/or type options.
     */
    updateFieldType?: Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateFieldTypeResponse;
    /**
     * Updated basic properties of a Label.
     */
    updateLabel?: Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateLabelPropertiesResponse;
    /**
     * Updates a Choice within a Selection Field.
     */
    updateSelectionChoiceProperties?: Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse;
  }
  /**
   * Response following update to Field properties.
   */
  export interface Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateFieldPropertiesResponse {
    /**
     * The priority of the updated field. The priority may change from what was specified to assure contiguous priorities between fields (1-n).
     */
    priority?: number | null;
  }
  /**
   * Response following update to Field type.
   */
  export interface Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateFieldTypeResponse {}
  /**
   * Response following update to Label properties.
   */
  export interface Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateLabelPropertiesResponse {}
  /**
   * Response following update to Selection Choice properties.
   */
  export interface Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse {
    /**
     * The priority of the updated choice. The priority may change from what was specified to assure contiguous priorities between choices (1-n).
     */
    priority?: number | null;
  }
  /**
   * Request to deprecate a published Label.
   */
  export interface Schema$GoogleAppsDriveLabelsV2DisableLabelRequest {
    /**
     * Disabled policy to use.
     */
    disabledPolicy?: Schema$GoogleAppsDriveLabelsV2LifecycleDisabledPolicy;
    /**
     * The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used.
     */
    languageCode?: string | null;
    /**
     * The fields that should be updated. At least one field must be specified. The root `disabled_policy` is implied and should not be specified. A single `*` can be used as short-hand for updating every field.
     */
    updateMask?: string | null;
    /**
     * Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     */
    useAdminAccess?: boolean | null;
    /**
     * Provides control over how write requests are executed. Defaults to unset, which means last write wins.
     */
    writeControl?: Schema$GoogleAppsDriveLabelsV2WriteControl;
  }
  /**
   * Request to enable a label.
   */
  export interface Schema$GoogleAppsDriveLabelsV2EnableLabelRequest {
    /**
     * The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used.
     */
    languageCode?: string | null;
    /**
     * Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     */
    useAdminAccess?: boolean | null;
    /**
     * Provides control over how write requests are executed. Defaults to unset, which means last write wins.
     */
    writeControl?: Schema$GoogleAppsDriveLabelsV2WriteControl;
  }
  /**
   * Defines a field that has a display name, data type, and other configuration options. This field defines the kind of metadata that may be set on a Drive item.
   */
  export interface Schema$GoogleAppsDriveLabelsV2Field {
    /**
     * Output only. The capabilities this user has on this field and its value when the label is applied on Drive items.
     */
    appliedCapabilities?: Schema$GoogleAppsDriveLabelsV2FieldAppliedCapabilities;
    /**
     * Output only. The time this field was created.
     */
    createTime?: string | null;
    /**
     * Output only. The user who created this field.
     */
    creator?: Schema$GoogleAppsDriveLabelsV2UserInfo;
    /**
     * Date field options.
     */
    dateOptions?: Schema$GoogleAppsDriveLabelsV2FieldDateOptions;
    /**
     * Output only. The user who disabled this field. This value has no meaning when the field is not disabled.
     */
    disabler?: Schema$GoogleAppsDriveLabelsV2UserInfo;
    /**
     * Output only. The time this field was disabled. This value has no meaning when the field is not disabled.
     */
    disableTime?: string | null;
    /**
     * Output only. UI display hints for rendering a field.
     */
    displayHints?: Schema$GoogleAppsDriveLabelsV2FieldDisplayHints;
    /**
     * Output only. The key of a field, unique within a label or library. This value is autogenerated. Matches the regex: `([a-zA-Z0-9])+`
     */
    id?: string | null;
    /**
     * Integer field options.
     */
    integerOptions?: Schema$GoogleAppsDriveLabelsV2FieldIntegerOptions;
    /**
     * Output only. The lifecycle of this field.
     */
    lifecycle?: Schema$GoogleAppsDriveLabelsV2Lifecycle;
    /**
     * Output only. The LockStatus of this field.
     */
    lockStatus?: Schema$GoogleAppsDriveLabelsV2LockStatus;
    /**
     * The basic properties of the field.
     */
    properties?: Schema$GoogleAppsDriveLabelsV2FieldProperties;
    /**
     * Output only. The user who published this field. This value has no meaning when the field is not published.
     */
    publisher?: Schema$GoogleAppsDriveLabelsV2UserInfo;
    /**
     * Output only. The key to use when constructing Drive search queries to find files based on values defined for this field on files. For example, "`{query_key\}` \> 2001-01-01".
     */
    queryKey?: string | null;
    /**
     * Output only. The capabilities this user has when editing this field.
     */
    schemaCapabilities?: Schema$GoogleAppsDriveLabelsV2FieldSchemaCapabilities;
    /**
     * Selection field options.
     */
    selectionOptions?: Schema$GoogleAppsDriveLabelsV2FieldSelectionOptions;
    /**
     * Text field options.
     */
    textOptions?: Schema$GoogleAppsDriveLabelsV2FieldTextOptions;
    /**
     * Output only. The user who modified this field.
     */
    updater?: Schema$GoogleAppsDriveLabelsV2UserInfo;
    /**
     * Output only. The time this field was updated.
     */
    updateTime?: string | null;
    /**
     * User field options.
     */
    userOptions?: Schema$GoogleAppsDriveLabelsV2FieldUserOptions;
  }
  /**
   * The capabilities related to this field on applied metadata.
   */
  export interface Schema$GoogleAppsDriveLabelsV2FieldAppliedCapabilities {
    /**
     * Whether the user can read related applied metadata on items.
     */
    canRead?: boolean | null;
    /**
     * Whether the user can search for Drive items referencing this field.
     */
    canSearch?: boolean | null;
    /**
     * Whether the user can set this field on Drive items.
     */
    canWrite?: boolean | null;
  }
  /**
   * Options for the date field type.
   */
  export interface Schema$GoogleAppsDriveLabelsV2FieldDateOptions {
    /**
     * Output only. ICU date format.
     */
    dateFormat?: string | null;
    /**
     * Localized date formatting option. Field values are rendered in this format according to their locale.
     */
    dateFormatType?: string | null;
    /**
     * Output only. Maximum valid value (year, month, day).
     */
    maxValue?: Schema$GoogleTypeDate;
    /**
     * Output only. Minimum valid value (year, month, day).
     */
    minValue?: Schema$GoogleTypeDate;
  }
  /**
   * UI display hints for rendering a field.
   */
  export interface Schema$GoogleAppsDriveLabelsV2FieldDisplayHints {
    /**
     * Whether the field should be shown in the UI as disabled.
     */
    disabled?: boolean | null;
    /**
     * This field should be hidden in the search menu when searching for Drive items.
     */
    hiddenInSearch?: boolean | null;
    /**
     * Whether the field should be shown as required in the UI.
     */
    required?: boolean | null;
    /**
     * This field should be shown in the apply menu when applying values to a Drive item.
     */
    shownInApply?: boolean | null;
  }
  /**
   * Options for the Integer field type.
   */
  export interface Schema$GoogleAppsDriveLabelsV2FieldIntegerOptions {
    /**
     * Output only. The maximum valid value for the integer field.
     */
    maxValue?: string | null;
    /**
     * Output only. The minimum valid value for the integer field.
     */
    minValue?: string | null;
  }
  /**
   * Field constants governing the structure of a Field; such as, the maximum title length, minimum and maximum field values or length, etc.
   */
  export interface Schema$GoogleAppsDriveLabelsV2FieldLimits {
    /**
     * Date Field limits.
     */
    dateLimits?: Schema$GoogleAppsDriveLabelsV2DateLimits;
    /**
     * Integer Field limits.
     */
    integerLimits?: Schema$GoogleAppsDriveLabelsV2IntegerLimits;
    /**
     * Long text Field limits.
     */
    longTextLimits?: Schema$GoogleAppsDriveLabelsV2LongTextLimits;
    /**
     * Limits for Field description, also called help text.
     */
    maxDescriptionLength?: number | null;
    /**
     * Limits for Field title.
     */
    maxDisplayNameLength?: number | null;
    /**
     * Max length for the id.
     */
    maxIdLength?: number | null;
    /**
     * Selection Field limits.
     */
    selectionLimits?: Schema$GoogleAppsDriveLabelsV2SelectionLimits;
    /**
     * The relevant limits for the specified Field.Type. Text Field limits.
     */
    textLimits?: Schema$GoogleAppsDriveLabelsV2TextLimits;
    /**
     * User Field limits.
     */
    userLimits?: Schema$GoogleAppsDriveLabelsV2UserLimits;
  }
  /**
   * Options for a multi-valued variant of an associated field type.
   */
  export interface Schema$GoogleAppsDriveLabelsV2FieldListOptions {
    /**
     * Maximum number of entries permitted.
     */
    maxEntries?: number | null;
  }
  /**
   * The basic properties of the field.
   */
  export interface Schema$GoogleAppsDriveLabelsV2FieldProperties {
    /**
     * Required. The display text to show in the UI identifying this field.
     */
    displayName?: string | null;
    /**
     * Input only. Insert or move this field before the indicated field. If empty, the field is placed at the end of the list.
     */
    insertBeforeField?: string | null;
    /**
     * Whether the field should be marked as required.
     */
    required?: boolean | null;
  }
  /**
   * The capabilities related to this field when editing the field.
   */
  export interface Schema$GoogleAppsDriveLabelsV2FieldSchemaCapabilities {
    /**
     * Whether the user can delete this field. The user must have permission and the field must be deprecated.
     */
    canDelete?: boolean | null;
    /**
     * Whether the user can disable this field. The user must have permission and this field must not already be disabled.
     */
    canDisable?: boolean | null;
    /**
     * Whether the user can enable this field. The user must have permission and this field must be disabled.
     */
    canEnable?: boolean | null;
    /**
     * Whether the user can change this field.
     */
    canUpdate?: boolean | null;
  }
  /**
   * Options for the selection field type.
   */
  export interface Schema$GoogleAppsDriveLabelsV2FieldSelectionOptions {
    /**
     * The options available for this selection field. The list order is consistent, and modified with `insert_before_choice`.
     */
    choices?: Schema$GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice[];
    /**
     * When specified, indicates this field supports a list of values. Once the field is published, this cannot be changed.
     */
    listOptions?: Schema$GoogleAppsDriveLabelsV2FieldListOptions;
  }
  /**
   * Selection field choice.
   */
  export interface Schema$GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice {
    /**
     * Output only. The capabilities related to this choice on applied metadata.
     */
    appliedCapabilities?: Schema$GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities;
    /**
     * Output only. The time this choice was created.
     */
    createTime?: string | null;
    /**
     * Output only. The user who created this choice.
     */
    creator?: Schema$GoogleAppsDriveLabelsV2UserInfo;
    /**
     * Output only. The user who disabled this choice. This value has no meaning when the option is not disabled.
     */
    disabler?: Schema$GoogleAppsDriveLabelsV2UserInfo;
    /**
     * Output only. The time this choice was disabled. This value has no meaning when the choice is not disabled.
     */
    disableTime?: string | null;
    /**
     * Output only. UI display hints for rendering a choice.
     */
    displayHints?: Schema$GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints;
    /**
     * The unique value of the choice. This ID is autogenerated. Matches the regex: `([a-zA-Z0-9_])+`.
     */
    id?: string | null;
    /**
     * Output only. Lifecycle of the choice.
     */
    lifecycle?: Schema$GoogleAppsDriveLabelsV2Lifecycle;
    /**
     * Output only. The LockStatus of this choice.
     */
    lockStatus?: Schema$GoogleAppsDriveLabelsV2LockStatus;
    /**
     * Basic properties of the choice.
     */
    properties?: Schema$GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties;
    /**
     * Output only. The user who published this choice. This value has no meaning when the choice is not published.
     */
    publisher?: Schema$GoogleAppsDriveLabelsV2UserInfo;
    /**
     * Output only. The time this choice was published. This value has no meaning when the choice is not published.
     */
    publishTime?: string | null;
    /**
     * Output only. The capabilities related to this option when editing the option.
     */
    schemaCapabilities?: Schema$GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities;
    /**
     * Output only. The user who updated this choice last.
     */
    updater?: Schema$GoogleAppsDriveLabelsV2UserInfo;
    /**
     * Output only. The time this choice was updated last.
     */
    updateTime?: string | null;
  }
  /**
   * The capabilities related to this choice on applied metadata.
   */
  export interface Schema$GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities {
    /**
     * Whether the user can read related applied metadata on items.
     */
    canRead?: boolean | null;
    /**
     * Whether the user can use this choice in search queries.
     */
    canSearch?: boolean | null;
    /**
     * Whether the user can select this choice on an item.
     */
    canSelect?: boolean | null;
  }
  /**
   * UI display hints for rendering an option.
   */
  export interface Schema$GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints {
    /**
     * The colors to use for the badge. Changed to Google Material colors based on the chosen `properties.badge_config.color`.
     */
    badgeColors?: Schema$GoogleAppsDriveLabelsV2BadgeColors;
    /**
     * The priority of this badge. Used to compare and sort between multiple badges. A lower number means the badge should be shown first. When a badging configuration is not present, this will be 0. Otherwise, this will be set to `BadgeConfig.priority_override` or the default heuristic which prefers creation date of the label, and field and option priority.
     */
    badgePriority?: string | null;
    /**
     * The dark-mode color to use for the badge. Changed to Google Material colors based on the chosen `properties.badge_config.color`.
     */
    darkBadgeColors?: Schema$GoogleAppsDriveLabelsV2BadgeColors;
    /**
     * Whether the option should be shown in the UI as disabled.
     */
    disabled?: boolean | null;
    /**
     * This option should be hidden in the search menu when searching for Drive items.
     */
    hiddenInSearch?: boolean | null;
    /**
     * This option should be shown in the apply menu when applying values to a Drive item.
     */
    shownInApply?: boolean | null;
  }
  /**
   * Basic properties of the choice.
   */
  export interface Schema$GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties {
    /**
     * The badge configuration for this choice. When set, the label that owns this choice is considered a "badged label".
     */
    badgeConfig?: Schema$GoogleAppsDriveLabelsV2BadgeConfig;
    /**
     * The description of this label.
     */
    description?: string | null;
    /**
     * Required. The display text to show in the UI identifying this field.
     */
    displayName?: string | null;
    /**
     * Input only. Insert or move this choice before the indicated choice. If empty, the choice is placed at the end of the list.
     */
    insertBeforeChoice?: string | null;
  }
  /**
   * The capabilities related to this choice when editing the choice.
   */
  export interface Schema$GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities {
    /**
     * Whether the user can delete this choice.
     */
    canDelete?: boolean | null;
    /**
     * Whether the user can disable this choice.
     */
    canDisable?: boolean | null;
    /**
     * Whether the user can enable this choice.
     */
    canEnable?: boolean | null;
    /**
     * Whether the user can update this choice.
     */
    canUpdate?: boolean | null;
  }
  /**
   * Options for the Text field type.
   */
  export interface Schema$GoogleAppsDriveLabelsV2FieldTextOptions {
    /**
     * Output only. The maximum valid length of values for the text field.
     */
    maxLength?: number | null;
    /**
     * Output only. The minimum valid length of values for the text field.
     */
    minLength?: number | null;
  }
  /**
   * Options for the user field type.
   */
  export interface Schema$GoogleAppsDriveLabelsV2FieldUserOptions {
    /**
     * When specified, indicates that this field supports a list of values. Once the field is published, this cannot be changed.
     */
    listOptions?: Schema$GoogleAppsDriveLabelsV2FieldListOptions;
  }
  /**
   * Limits for integer Field type.
   */
  export interface Schema$GoogleAppsDriveLabelsV2IntegerLimits {
    /**
     * Maximum value for an integer Field type.
     */
    maxValue?: string | null;
    /**
     * Minimum value for an integer Field type.
     */
    minValue?: string | null;
  }
  /**
   * A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items.
   */
  export interface Schema$GoogleAppsDriveLabelsV2Label {
    /**
     * Output only. The capabilities related to this label on applied metadata.
     */
    appliedCapabilities?: Schema$GoogleAppsDriveLabelsV2LabelAppliedCapabilities;
    /**
     * Output only. Behavior of this label when it's applied to Drive items.
     */
    appliedLabelPolicy?: Schema$GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy;
    /**
     * Output only. The time this label was created.
     */
    createTime?: string | null;
    /**
     * Output only. The user who created this label.
     */
    creator?: Schema$GoogleAppsDriveLabelsV2UserInfo;
    /**
     * Output only. The customer this label belongs to. For example: "customers/123abc789."
     */
    customer?: string | null;
    /**
     * Output only. The user who disabled this label. This value has no meaning when the label is not disabled.
     */
    disabler?: Schema$GoogleAppsDriveLabelsV2UserInfo;
    /**
     * Output only. The time this label was disabled. This value has no meaning when the label is not disabled.
     */
    disableTime?: string | null;
    /**
     * Output only. UI display hints for rendering the label.
     */
    displayHints?: Schema$GoogleAppsDriveLabelsV2LabelDisplayHints;
    /**
     * Optional. The EnabledAppSettings for this Label.
     */
    enabledAppSettings?: Schema$GoogleAppsDriveLabelsV2LabelEnabledAppSettings;
    /**
     * List of fields in descending priority order.
     */
    fields?: Schema$GoogleAppsDriveLabelsV2Field[];
    /**
     * Output only. Globally unique identifier of this label. ID makes up part of the label `name`, but unlike `name`, ID is consistent between revisions. Matches the regex: `([a-zA-Z0-9])+`
     */
    id?: string | null;
    /**
     * Required. The type of label.
     */
    labelType?: string | null;
    /**
     * Custom URL to present to users to allow them to learn more about this label and how it should be used.
     */
    learnMoreUri?: string | null;
    /**
     * Output only. The lifecycle state of the label including whether it's published, deprecated, and has draft changes.
     */
    lifecycle?: Schema$GoogleAppsDriveLabelsV2Lifecycle;
    /**
     * Output only. The LockStatus of this label.
     */
    lockStatus?: Schema$GoogleAppsDriveLabelsV2LockStatus;
    /**
     * Output only. Resource name of the label. Will be in the form of either: `labels/{id\}` or `labels/{id\}@{revision_id\}` depending on the request. See `id` and `revision_id` below.
     */
    name?: string | null;
    /**
     * Required. The basic properties of the label.
     */
    properties?: Schema$GoogleAppsDriveLabelsV2LabelProperties;
    /**
     * Output only. The user who published this label. This value has no meaning when the label is not published.
     */
    publisher?: Schema$GoogleAppsDriveLabelsV2UserInfo;
    /**
     * Output only. The time this label was published. This value has no meaning when the label is not published.
     */
    publishTime?: string | null;
    /**
     * Output only. The time this label revision was created.
     */
    revisionCreateTime?: string | null;
    /**
     * Output only. The user who created this label revision.
     */
    revisionCreator?: Schema$GoogleAppsDriveLabelsV2UserInfo;
    /**
     * Output only. Revision ID of the label. Revision ID might be part of the label `name` depending on the request issued. A new revision is created whenever revisioned properties of a label are changed. Matches the regex: `([a-zA-Z0-9])+`
     */
    revisionId?: string | null;
    /**
     * Output only. The capabilities the user has on this label.
     */
    schemaCapabilities?: Schema$GoogleAppsDriveLabelsV2LabelSchemaCapabilities;
  }
  /**
   * The capabilities a user has on this label's applied metadata.
   */
  export interface Schema$GoogleAppsDriveLabelsV2LabelAppliedCapabilities {
    /**
     * Whether the user can apply this label to items.
     */
    canApply?: boolean | null;
    /**
     * Whether the user can read applied metadata related to this label.
     */
    canRead?: boolean | null;
    /**
     * Whether the user can remove this label from items.
     */
    canRemove?: boolean | null;
  }
  /**
   * Behavior of this label when it's applied to Drive items.
   */
  export interface Schema$GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy {
    /**
     * Indicates how the applied label and field values should be copied when a Drive item is copied.
     */
    copyMode?: string | null;
  }
  /**
   * UI display hints for rendering the label.
   */
  export interface Schema$GoogleAppsDriveLabelsV2LabelDisplayHints {
    /**
     * Whether the label should be shown in the UI as disabled.
     */
    disabled?: boolean | null;
    /**
     * This label should be hidden in the search menu when searching for Drive items.
     */
    hiddenInSearch?: boolean | null;
    /**
     * Order to display label in a list.
     */
    priority?: string | null;
    /**
     * This label should be shown in the apply menu when applying values to a Drive item.
     */
    shownInApply?: boolean | null;
  }
  /**
   * Describes the Workspace apps in which the Label can be used.
   */
  export interface Schema$GoogleAppsDriveLabelsV2LabelEnabledAppSettings {
    /**
     * Optional. The list of Apps where the Label can be used.
     */
    enabledApps?: Schema$GoogleAppsDriveLabelsV2LabelEnabledAppSettingsEnabledApp[];
  }
  /**
   * An App where the Label can be used.
   */
  export interface Schema$GoogleAppsDriveLabelsV2LabelEnabledAppSettingsEnabledApp {
    /**
     * Optional. The name of the App.
     */
    app?: string | null;
  }
  /**
   * Label constraints governing the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.
   */
  export interface Schema$GoogleAppsDriveLabelsV2LabelLimits {
    /**
     * The limits for Fields.
     */
    fieldLimits?: Schema$GoogleAppsDriveLabelsV2FieldLimits;
    /**
     * The maximum number of published Fields that can be deleted.
     */
    maxDeletedFields?: number | null;
    /**
     * The maximum number of characters allowed for the description.
     */
    maxDescriptionLength?: number | null;
    /**
     * The maximum number of draft revisions that will be kept before deleting old drafts.
     */
    maxDraftRevisions?: number | null;
    /**
     * The maximum number of Fields allowed within the label.
     */
    maxFields?: number | null;
    /**
     * The maximum number of characters allowed for the title.
     */
    maxTitleLength?: number | null;
    /**
     * Resource name.
     */
    name?: string | null;
  }
  /**
   * A Lock that can be applied to a Label, Field, or Choice.
   */
  export interface Schema$GoogleAppsDriveLabelsV2LabelLock {
    /**
     * Output only. The user's capabilities on this LabelLock.
     */
    capabilities?: Schema$GoogleAppsDriveLabelsV2LabelLockCapabilities;
    /**
     * The ID of the Selection Field Choice that should be locked. If present, `field_id` must also be present.
     */
    choiceId?: string | null;
    /**
     * Output only. The time this LabelLock was created.
     */
    createTime?: string | null;
    /**
     * Output only. The user whose credentials were used to create the LabelLock. This will not be present if no user was responsible for creating the LabelLock.
     */
    creator?: Schema$GoogleAppsDriveLabelsV2UserInfo;
    /**
     * Output only. A timestamp indicating when this LabelLock was scheduled for deletion. This will be present only if this LabelLock is in the DELETING state.
     */
    deleteTime?: string | null;
    /**
     * The ID of the Field that should be locked. Empty if the whole Label should be locked.
     */
    fieldId?: string | null;
    /**
     * Output only. Resource name of this LabelLock.
     */
    name?: string | null;
    /**
     * Output only. This LabelLock's state.
     */
    state?: string | null;
  }
  /**
   * A description of a user's capabilities on a LabelLock.
   */
  export interface Schema$GoogleAppsDriveLabelsV2LabelLockCapabilities {
    /**
     * True if the user is authorized to view the policy.
     */
    canViewPolicy?: boolean | null;
  }
  /**
   * The permission that applies to a principal (user, group, audience) on a label.
   */
  export interface Schema$GoogleAppsDriveLabelsV2LabelPermission {
    /**
     * Audience to grant a role to. The magic value of `audiences/default` may be used to apply the role to the default audience in the context of the organization that owns the Label.
     */
    audience?: string | null;
    /**
     * Specifies the email address for a user or group pricinpal. Not populated for audience principals. User and Group permissions may only be inserted using email address. On update requests, if email address is specified, no principal should be specified.
     */
    email?: string | null;
    /**
     * Group resource name.
     */
    group?: string | null;
    /**
     * Resource name of this permission.
     */
    name?: string | null;
    /**
     * Person resource name.
     */
    person?: string | null;
    /**
     * The role the principal should have.
     */
    role?: string | null;
  }
  /**
   * Basic properties of the label.
   */
  export interface Schema$GoogleAppsDriveLabelsV2LabelProperties {
    /**
     * The description of the label.
     */
    description?: string | null;
    /**
     * Required. Title of the label.
     */
    title?: string | null;
  }
  /**
   * The capabilities related to this label when editing the label.
   */
  export interface Schema$GoogleAppsDriveLabelsV2LabelSchemaCapabilities {
    /**
     * Whether the user can delete this label. The user must have permission and the label must be disabled.
     */
    canDelete?: boolean | null;
    /**
     * Whether the user can disable this label. The user must have permission and this label must not already be disabled.
     */
    canDisable?: boolean | null;
    /**
     * Whether the user can enable this label. The user must have permission and this label must be disabled.
     */
    canEnable?: boolean | null;
    /**
     * Whether the user can change this label.
     */
    canUpdate?: boolean | null;
  }
  /**
   * The lifecycle state of an object, such as label, field, or choice. The lifecycle enforces the following transitions: * `UNPUBLISHED_DRAFT` (starting state) * `UNPUBLISHED_DRAFT` -\> `PUBLISHED` * `UNPUBLISHED_DRAFT` -\> (Deleted) * `PUBLISHED` -\> `DISABLED` * `DISABLED` -\> `PUBLISHED` * `DISABLED` -\> (Deleted) The published and disabled states have some distinct characteristics: * Published—Some kinds of changes might be made to an object in this state, in which case `has_unpublished_changes` will be true. Also, some kinds of changes are not permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label are rejected. * Disabled—When disabled, the configured `DisabledPolicy` takes effect.
   */
  export interface Schema$GoogleAppsDriveLabelsV2Lifecycle {
    /**
     * The policy that governs how to show a disabled label, field, or selection choice.
     */
    disabledPolicy?: Schema$GoogleAppsDriveLabelsV2LifecycleDisabledPolicy;
    /**
     * Output only. Whether the object associated with this lifecycle has unpublished changes.
     */
    hasUnpublishedChanges?: boolean | null;
    /**
     * Output only. The state of the object associated with this lifecycle.
     */
    state?: string | null;
  }
  /**
   * The policy that governs how to treat a disabled label, field, or selection choice in different contexts.
   */
  export interface Schema$GoogleAppsDriveLabelsV2LifecycleDisabledPolicy {
    /**
     * Whether to hide this disabled object in the search menu for Drive items. * When `false`, the object is generally shown in the UI as disabled but it appears in the search results when searching for Drive items. * When `true`, the object is generally hidden in the UI when searching for Drive items.
     */
    hideInSearch?: boolean | null;
    /**
     * Whether to show this disabled object in the apply menu on Drive items. * When `true`, the object is generally shown in the UI as disabled and is unselectable. * When `false`, the object is generally hidden in the UI.
     */
    showInApply?: boolean | null;
  }
  /**
   * The response to a ListLabelLocksRequest.
   */
  export interface Schema$GoogleAppsDriveLabelsV2ListLabelLocksResponse {
    /**
     * LabelLocks.
     */
    labelLocks?: Schema$GoogleAppsDriveLabelsV2LabelLock[];
    /**
     * The token of the next page in the response.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response for listing the permissions on a Label.
   */
  export interface Schema$GoogleAppsDriveLabelsV2ListLabelPermissionsResponse {
    /**
     * Label permissions.
     */
    labelPermissions?: Schema$GoogleAppsDriveLabelsV2LabelPermission[];
    /**
     * The token of the next page in the response.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response for listing Labels.
   */
  export interface Schema$GoogleAppsDriveLabelsV2ListLabelsResponse {
    /**
     * Labels.
     */
    labels?: Schema$GoogleAppsDriveLabelsV2Label[];
    /**
     * The token of the next page in the response.
     */
    nextPageToken?: string | null;
  }
  /**
   * Limits for list-variant of a Field type.
   */
  export interface Schema$GoogleAppsDriveLabelsV2ListLimits {
    /**
     * Maximum number of values allowed for the Field type.
     */
    maxEntries?: number | null;
  }
  /**
   * Contains information about whether a label component should be considered locked.
   */
  export interface Schema$GoogleAppsDriveLabelsV2LockStatus {
    /**
     * Output only. Indicates whether this label component is the (direct) target of a LabelLock. A label component can be implicitly locked even if it's not the direct target of a LabelLock, in which case this field is set to false.
     */
    locked?: boolean | null;
  }
  /**
   * Limits for long text Field type.
   */
  export interface Schema$GoogleAppsDriveLabelsV2LongTextLimits {
    /**
     * Maximum length allowed for a long text Field type.
     */
    maxLength?: number | null;
    /**
     * Minimum length allowed for a long text Field type.
     */
    minLength?: number | null;
  }
  /**
   * Request to publish a label.
   */
  export interface Schema$GoogleAppsDriveLabelsV2PublishLabelRequest {
    /**
     * The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used.
     */
    languageCode?: string | null;
    /**
     * Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     */
    useAdminAccess?: boolean | null;
    /**
     * Provides control over how write requests are executed. Defaults to unset, which means last write wins.
     */
    writeControl?: Schema$GoogleAppsDriveLabelsV2WriteControl;
  }
  /**
   * Limits for selection Field type.
   */
  export interface Schema$GoogleAppsDriveLabelsV2SelectionLimits {
    /**
     * Limits for list-variant of a Field type.
     */
    listLimits?: Schema$GoogleAppsDriveLabelsV2ListLimits;
    /**
     * The max number of choices.
     */
    maxChoices?: number | null;
    /**
     * Maximum number of deleted choices.
     */
    maxDeletedChoices?: number | null;
    /**
     * Maximum length for display name.
     */
    maxDisplayNameLength?: number | null;
    /**
     * Maximum ID length for a selection options.
     */
    maxIdLength?: number | null;
  }
  /**
   * Limits for text Field type.
   */
  export interface Schema$GoogleAppsDriveLabelsV2TextLimits {
    /**
     * Maximum length allowed for a text Field type.
     */
    maxLength?: number | null;
    /**
     * Minimum length allowed for a text Field type.
     */
    minLength?: number | null;
  }
  /**
   * Request to update the `CopyMode` of the given Label. Changes to this policy are not revisioned, do not require publishing, and take effect immediately. \
   */
  export interface Schema$GoogleAppsDriveLabelsV2UpdateLabelCopyModeRequest {
    /**
     * Required. Indicates how the applied Label, and Field values should be copied when a Drive item is copied.
     */
    copyMode?: string | null;
    /**
     * The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used.
     */
    languageCode?: string | null;
    /**
     * Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     */
    useAdminAccess?: boolean | null;
    /**
     * When specified, only certain fields belonging to the indicated view will be returned.
     */
    view?: string | null;
  }
  /**
   * Request to update the `EnabledAppSettings` of the given Label. This change is not revisioned, does not require publishing, and takes effect immediately. \
   */
  export interface Schema$GoogleAppsDriveLabelsV2UpdateLabelEnabledAppSettingsRequest {
    /**
     * Required. The new `EnabledAppSettings` value for the Label.
     */
    enabledAppSettings?: Schema$GoogleAppsDriveLabelsV2LabelEnabledAppSettings;
    /**
     * Optional. The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used.
     */
    languageCode?: string | null;
    /**
     * Optional. Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     */
    useAdminAccess?: boolean | null;
    /**
     * Optional. When specified, only certain fields belonging to the indicated view will be returned.
     */
    view?: string | null;
  }
  /**
   * Updates a Label Permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
   */
  export interface Schema$GoogleAppsDriveLabelsV2UpdateLabelPermissionRequest {
    /**
     * Required. The permission to create or update on the Label.
     */
    labelPermission?: Schema$GoogleAppsDriveLabelsV2LabelPermission;
    /**
     * Required. The parent Label resource name.
     */
    parent?: string | null;
    /**
     * Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     */
    useAdminAccess?: boolean | null;
  }
  /**
   * The capabilities of a user.
   */
  export interface Schema$GoogleAppsDriveLabelsV2UserCapabilities {
    /**
     * Output only. Whether the user is allowed access to the label manager.
     */
    canAccessLabelManager?: boolean | null;
    /**
     * Output only. Whether the user is an administrator for the shared labels feature.
     */
    canAdministrateLabels?: boolean | null;
    /**
     * Output only. Whether the user is allowed to create new admin labels.
     */
    canCreateAdminLabels?: boolean | null;
    /**
     * Output only. Whether the user is allowed to create new shared labels.
     */
    canCreateSharedLabels?: boolean | null;
    /**
     * Output only. Resource name for the user capabilities.
     */
    name?: string | null;
  }
  /**
   * Information about a user.
   */
  export interface Schema$GoogleAppsDriveLabelsV2UserInfo {
    /**
     * The identifier for this user that can be used with the People API to get more information. For example, people/12345678.
     */
    person?: string | null;
  }
  /**
   * Limits for Field.Type.USER.
   */
  export interface Schema$GoogleAppsDriveLabelsV2UserLimits {
    /**
     * Limits for list-variant of a Field type.
     */
    listLimits?: Schema$GoogleAppsDriveLabelsV2ListLimits;
  }
  /**
   * Provides control over how write requests are executed. When not specified, the last write wins.
   */
  export interface Schema$GoogleAppsDriveLabelsV2WriteControl {
    /**
     * The revision_id of the label that the write request will be applied to. If this is not the latest revision of the label, the request will not be processed and will return a 400 Bad Request error.
     */
    requiredRevisionId?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$GoogleProtobufEmpty {}
  /**
   * Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); \} public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); \} return resultBuilder.build(); \} // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; \} return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; \} static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; \} Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; \} [result autorelease]; return result; \} // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); \} var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); \}; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); \} resultBuilder.push(hexString); return resultBuilder.join(''); \}; // ...
   */
  export interface Schema$GoogleTypeColor {
    /**
     * The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0).
     */
    alpha?: number | null;
    /**
     * The amount of blue in the color as a value in the interval [0, 1].
     */
    blue?: number | null;
    /**
     * The amount of green in the color as a value in the interval [0, 1].
     */
    green?: number | null;
    /**
     * The amount of red in the color as a value in the interval [0, 1].
     */
    red?: number | null;
  }
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

  export class Resource$Labels {
    context: APIRequestContext;
    locks: Resource$Labels$Locks;
    permissions: Resource$Labels$Permissions;
    revisions: Resource$Labels$Revisions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locks = new Resource$Labels$Locks(this.context);
      this.permissions = new Resource$Labels$Permissions(this.context);
      this.revisions = new Resource$Labels$Revisions(this.context);
    }

    /**
     * Creates a new Label.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drivelabels.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const drivelabels = google.drivelabels('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive.admin.labels',
     *       'https://www.googleapis.com/auth/drive.labels',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drivelabels.labels.create({
     *     // The BCP-47 language code to use for evaluating localized Field labels in response. When not specified, values in the default configured language will be used.
     *     languageCode: 'placeholder-value',
     *     // Set to `true` in order to use the user's admin privileges. The server will verify the user is an admin before allowing access.
     *     useAdminAccess: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "appliedCapabilities": {},
     *       //   "appliedLabelPolicy": {},
     *       //   "createTime": "my_createTime",
     *       //   "creator": {},
     *       //   "customer": "my_customer",
     *       //   "disableTime": "my_disableTime",
     *       //   "disabler": {},
     *       //   "displayHints": {},
     *       //   "enabledAppSettings": {},
     *       //   "fields": [],
     *       //   "id": "my_id",
     *       //   "labelType": "my_labelType",
     *       //   "learnMoreUri": "my_learnMoreUri",
     *       //   "lifecycle": {},
     *       //   "lockStatus": {},
     *       //   "name": "my_name",
     *       //   "properties": {},
     *       //   "publishTime": "my_publishTime",
     *       //   "publisher": {},
     *       //   "revisionCreateTime": "my_revisionCreateTime",
     *       //   "revisionCreator": {},
     *       //   "revisionId": "my_revisionId",
     *       //   "schemaCapabilities": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appliedCapabilities": {},
     *   //   "appliedLabelPolicy": {},
     *   //   "createTime": "my_createTime",
     *   //   "creator": {},
     *   //   "customer": "my_customer",
     *   //   "disableTime": "my_disableTime",
     *   //   "disabler": {},
     *   //   "displayHints": {},
     *   //   "enabledAppSettings": {},
     *   //   "fields": [],
     *   //   "id": "my_id",
     *   //   "labelType": "my_labelType",
     *   //   "learnMoreUri": "my_learnMoreUri",
     *   //   "lifecycle": {},
     *   //   "lockStatus": {},
     *   //   "name": "my_name",
     *   //   "properties": {},
     *   //   "publishTime": "my_publishTime",
     *   //   "publisher": {},
     *   //   "revisionCreateTime": "my_revisionCreateTime",
     *   //   "revisionCreator": {},
     *   //   "revisionId": "my_revisionId",
     *   //   "schemaCapabilities": {}
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
      params: Params$Resource$Labels$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Labels$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2Label>>;
    create(
      params: Params$Resource$Labels$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Labels$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
    ): void;
    create(
      params: Params$Resource$Labels$Create,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Labels$Create
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2Label>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Labels$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Labels$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://drivelabels.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/labels').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAppsDriveLabelsV2Label>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsDriveLabelsV2Label>(
          parameters
        );
      }
    }

    /**
     * Permanently deletes a Label and related metadata on Drive Items. Once deleted, the Label and related Drive item metadata will be deleted. Only draft Labels, and disabled Labels may be deleted.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drivelabels.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const drivelabels = google.drivelabels('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive.admin.labels',
     *       'https://www.googleapis.com/auth/drive.labels',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drivelabels.labels.delete({
     *     // Required. Label resource name.
     *     name: 'labels/my-label',
     *     // Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     *     useAdminAccess: 'placeholder-value',
     *     // The revision_id of the label that the write request will be applied to. If this is not the latest revision of the label, the request will not be processed and will return a 400 Bad Request error.
     *     'writeControl.requiredRevisionId': 'placeholder-value',
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
      params: Params$Resource$Labels$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Labels$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    delete(
      params: Params$Resource$Labels$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Labels$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Labels$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Labels$Delete
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
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Labels$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Labels$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://drivelabels.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
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
     * Updates a single Label by applying a set of update requests resulting in a new draft revision. The batch update is all-or-nothing: If any of the update requests are invalid, no changes are applied. The resulting draft revision must be published before the changes may be used with Drive Items.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drivelabels.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const drivelabels = google.drivelabels('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive.admin.labels',
     *       'https://www.googleapis.com/auth/drive.labels',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drivelabels.labels.delta({
     *     // Required. The resource name of the Label to update.
     *     name: 'labels/my-label',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "languageCode": "my_languageCode",
     *       //   "requests": [],
     *       //   "useAdminAccess": false,
     *       //   "view": "my_view",
     *       //   "writeControl": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "responses": [],
     *   //   "updatedLabel": {}
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
    delta(
      params: Params$Resource$Labels$Delta,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delta(
      params?: Params$Resource$Labels$Delta,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponse>
    >;
    delta(
      params: Params$Resource$Labels$Delta,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delta(
      params: Params$Resource$Labels$Delta,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponse>,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponse>
    ): void;
    delta(
      params: Params$Resource$Labels$Delta,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponse>
    ): void;
    delta(
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponse>
    ): void;
    delta(
      paramsOrCallback?:
        | Params$Resource$Labels$Delta
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Labels$Delta;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Labels$Delta;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://drivelabels.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:delta').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelResponse>(
          parameters
        );
      }
    }

    /**
     * Disable a published Label. Disabling a Label will result in a new disabled published revision based on the current published revision. If there is a draft revision, a new disabled draft revision will be created based on the latest draft revision. Older draft revisions will be deleted. Once disabled, a label may be deleted with `DeleteLabel`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drivelabels.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const drivelabels = google.drivelabels('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive.admin.labels',
     *       'https://www.googleapis.com/auth/drive.labels',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drivelabels.labels.disable({
     *     // Required. Label resource name.
     *     name: 'labels/my-label',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "disabledPolicy": {},
     *       //   "languageCode": "my_languageCode",
     *       //   "updateMask": "my_updateMask",
     *       //   "useAdminAccess": false,
     *       //   "writeControl": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appliedCapabilities": {},
     *   //   "appliedLabelPolicy": {},
     *   //   "createTime": "my_createTime",
     *   //   "creator": {},
     *   //   "customer": "my_customer",
     *   //   "disableTime": "my_disableTime",
     *   //   "disabler": {},
     *   //   "displayHints": {},
     *   //   "enabledAppSettings": {},
     *   //   "fields": [],
     *   //   "id": "my_id",
     *   //   "labelType": "my_labelType",
     *   //   "learnMoreUri": "my_learnMoreUri",
     *   //   "lifecycle": {},
     *   //   "lockStatus": {},
     *   //   "name": "my_name",
     *   //   "properties": {},
     *   //   "publishTime": "my_publishTime",
     *   //   "publisher": {},
     *   //   "revisionCreateTime": "my_revisionCreateTime",
     *   //   "revisionCreator": {},
     *   //   "revisionId": "my_revisionId",
     *   //   "schemaCapabilities": {}
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
    disable(
      params: Params$Resource$Labels$Disable,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    disable(
      params?: Params$Resource$Labels$Disable,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2Label>>;
    disable(
      params: Params$Resource$Labels$Disable,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    disable(
      params: Params$Resource$Labels$Disable,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
    ): void;
    disable(
      params: Params$Resource$Labels$Disable,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
    ): void;
    disable(
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
    ): void;
    disable(
      paramsOrCallback?:
        | Params$Resource$Labels$Disable
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2Label>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Labels$Disable;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Labels$Disable;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://drivelabels.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:disable').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAppsDriveLabelsV2Label>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsDriveLabelsV2Label>(
          parameters
        );
      }
    }

    /**
     * Enable a disabled Label and restore it to its published state. This will result in a new published revision based on the current disabled published revision. If there is an existing disabled draft revision, a new revision will be created based on that draft and will be enabled.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drivelabels.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const drivelabels = google.drivelabels('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive.admin.labels',
     *       'https://www.googleapis.com/auth/drive.labels',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drivelabels.labels.enable({
     *     // Required. Label resource name.
     *     name: 'labels/my-label',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "languageCode": "my_languageCode",
     *       //   "useAdminAccess": false,
     *       //   "writeControl": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appliedCapabilities": {},
     *   //   "appliedLabelPolicy": {},
     *   //   "createTime": "my_createTime",
     *   //   "creator": {},
     *   //   "customer": "my_customer",
     *   //   "disableTime": "my_disableTime",
     *   //   "disabler": {},
     *   //   "displayHints": {},
     *   //   "enabledAppSettings": {},
     *   //   "fields": [],
     *   //   "id": "my_id",
     *   //   "labelType": "my_labelType",
     *   //   "learnMoreUri": "my_learnMoreUri",
     *   //   "lifecycle": {},
     *   //   "lockStatus": {},
     *   //   "name": "my_name",
     *   //   "properties": {},
     *   //   "publishTime": "my_publishTime",
     *   //   "publisher": {},
     *   //   "revisionCreateTime": "my_revisionCreateTime",
     *   //   "revisionCreator": {},
     *   //   "revisionId": "my_revisionId",
     *   //   "schemaCapabilities": {}
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
    enable(
      params: Params$Resource$Labels$Enable,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    enable(
      params?: Params$Resource$Labels$Enable,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2Label>>;
    enable(
      params: Params$Resource$Labels$Enable,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    enable(
      params: Params$Resource$Labels$Enable,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
    ): void;
    enable(
      params: Params$Resource$Labels$Enable,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
    ): void;
    enable(
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
    ): void;
    enable(
      paramsOrCallback?:
        | Params$Resource$Labels$Enable
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2Label>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Labels$Enable;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Labels$Enable;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://drivelabels.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:enable').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAppsDriveLabelsV2Label>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsDriveLabelsV2Label>(
          parameters
        );
      }
    }

    /**
     * Get a label by its resource name. Resource name may be any of: * `labels/{id\}` - See `labels/{id\}@latest` * `labels/{id\}@latest` - Gets the latest revision of the label. * `labels/{id\}@published` - Gets the current published revision of the label. * `labels/{id\}@{revision_id\}` - Gets the label at the specified revision ID.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drivelabels.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const drivelabels = google.drivelabels('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive.admin.labels',
     *       'https://www.googleapis.com/auth/drive.admin.labels.readonly',
     *       'https://www.googleapis.com/auth/drive.labels',
     *       'https://www.googleapis.com/auth/drive.labels.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drivelabels.labels.get({
     *     // The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language are used.
     *     languageCode: 'placeholder-value',
     *     // Required. Label resource name. May be any of: * `labels/{id\}` (equivalent to labels/{id\}@latest) * `labels/{id\}@latest` * `labels/{id\}@published` * `labels/{id\}@{revision_id\}`
     *     name: 'labels/my-label',
     *     // Set to `true` in order to use the user's admin credentials. The server verifies that the user is an admin for the label before allowing access.
     *     useAdminAccess: 'placeholder-value',
     *     // When specified, only certain fields belonging to the indicated view are returned.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appliedCapabilities": {},
     *   //   "appliedLabelPolicy": {},
     *   //   "createTime": "my_createTime",
     *   //   "creator": {},
     *   //   "customer": "my_customer",
     *   //   "disableTime": "my_disableTime",
     *   //   "disabler": {},
     *   //   "displayHints": {},
     *   //   "enabledAppSettings": {},
     *   //   "fields": [],
     *   //   "id": "my_id",
     *   //   "labelType": "my_labelType",
     *   //   "learnMoreUri": "my_learnMoreUri",
     *   //   "lifecycle": {},
     *   //   "lockStatus": {},
     *   //   "name": "my_name",
     *   //   "properties": {},
     *   //   "publishTime": "my_publishTime",
     *   //   "publisher": {},
     *   //   "revisionCreateTime": "my_revisionCreateTime",
     *   //   "revisionCreator": {},
     *   //   "revisionId": "my_revisionId",
     *   //   "schemaCapabilities": {}
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
      params: Params$Resource$Labels$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Labels$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2Label>>;
    get(
      params: Params$Resource$Labels$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Labels$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
    ): void;
    get(
      params: Params$Resource$Labels$Get,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Labels$Get
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2Label>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Labels$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Labels$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://drivelabels.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAppsDriveLabelsV2Label>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsDriveLabelsV2Label>(
          parameters
        );
      }
    }

    /**
     * List labels.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drivelabels.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const drivelabels = google.drivelabels('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive.admin.labels',
     *       'https://www.googleapis.com/auth/drive.admin.labels.readonly',
     *       'https://www.googleapis.com/auth/drive.labels',
     *       'https://www.googleapis.com/auth/drive.labels.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drivelabels.labels.list({
     *     // The customer to scope this list request to. For example: "customers/abcd1234". If unset, will return all labels within the current customer.
     *     customer: 'placeholder-value',
     *     // The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language are used.
     *     languageCode: 'placeholder-value',
     *     // Specifies the level of access the user must have on the returned Labels. The minimum role a user must have on a label. Defaults to `READER`.
     *     minimumRole: 'placeholder-value',
     *     // Maximum number of labels to return per page. Default: 50. Max: 200.
     *     pageSize: 'placeholder-value',
     *     // The token of the page to return.
     *     pageToken: 'placeholder-value',
     *     // Whether to include only published labels in the results. * When `true`, only the current published label revisions are returned. Disabled labels are included. Returned label resource names reference the published revision (`labels/{id\}/{revision_id\}`). * When `false`, the current label revisions are returned, which might not be published. Returned label resource names don't reference a specific revision (`labels/{id\}`).
     *     publishedOnly: 'placeholder-value',
     *     // Set to `true` in order to use the user's admin credentials. This will return all Labels within the customer.
     *     useAdminAccess: 'placeholder-value',
     *     // When specified, only certain fields belonging to the indicated view are returned.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "labels": [],
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
      params: Params$Resource$Labels$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Labels$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2ListLabelsResponse>
    >;
    list(
      params: Params$Resource$Labels$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Labels$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelsResponse>
    ): void;
    list(
      params: Params$Resource$Labels$List,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Labels$List
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2ListLabelsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Labels$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Labels$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://drivelabels.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/labels').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAppsDriveLabelsV2ListLabelsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsDriveLabelsV2ListLabelsResponse>(
          parameters
        );
      }
    }

    /**
     * Publish all draft changes to the Label. Once published, the Label may not return to its draft state. See `google.apps.drive.labels.v2.Lifecycle` for more information. Publishing a Label will result in a new published revision. All previous draft revisions will be deleted. Previous published revisions will be kept but are subject to automated deletion as needed. Once published, some changes are no longer permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the Label will be rejected. For example, the following changes to a Label will be rejected after the Label is published: * The label cannot be directly deleted. It must be disabled first, then deleted. * Field.FieldType cannot be changed. * Changes to Field validation options cannot reject something that was previously accepted. * Reducing the max entries.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drivelabels.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const drivelabels = google.drivelabels('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive.admin.labels',
     *       'https://www.googleapis.com/auth/drive.labels',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drivelabels.labels.publish({
     *     // Required. Label resource name.
     *     name: 'labels/my-label',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "languageCode": "my_languageCode",
     *       //   "useAdminAccess": false,
     *       //   "writeControl": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appliedCapabilities": {},
     *   //   "appliedLabelPolicy": {},
     *   //   "createTime": "my_createTime",
     *   //   "creator": {},
     *   //   "customer": "my_customer",
     *   //   "disableTime": "my_disableTime",
     *   //   "disabler": {},
     *   //   "displayHints": {},
     *   //   "enabledAppSettings": {},
     *   //   "fields": [],
     *   //   "id": "my_id",
     *   //   "labelType": "my_labelType",
     *   //   "learnMoreUri": "my_learnMoreUri",
     *   //   "lifecycle": {},
     *   //   "lockStatus": {},
     *   //   "name": "my_name",
     *   //   "properties": {},
     *   //   "publishTime": "my_publishTime",
     *   //   "publisher": {},
     *   //   "revisionCreateTime": "my_revisionCreateTime",
     *   //   "revisionCreator": {},
     *   //   "revisionId": "my_revisionId",
     *   //   "schemaCapabilities": {}
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
    publish(
      params: Params$Resource$Labels$Publish,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    publish(
      params?: Params$Resource$Labels$Publish,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2Label>>;
    publish(
      params: Params$Resource$Labels$Publish,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    publish(
      params: Params$Resource$Labels$Publish,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
    ): void;
    publish(
      params: Params$Resource$Labels$Publish,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
    ): void;
    publish(
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
    ): void;
    publish(
      paramsOrCallback?:
        | Params$Resource$Labels$Publish
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2Label>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Labels$Publish;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Labels$Publish;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://drivelabels.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:publish').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAppsDriveLabelsV2Label>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsDriveLabelsV2Label>(
          parameters
        );
      }
    }

    /**
     * Updates a Label's `CopyMode`. Changes to this policy are not revisioned, do not require publishing, and take effect immediately.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drivelabels.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const drivelabels = google.drivelabels('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive.admin.labels',
     *       'https://www.googleapis.com/auth/drive.labels',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drivelabels.labels.updateLabelCopyMode({
     *     // Required. The resource name of the Label to update.
     *     name: 'labels/my-label',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "copyMode": "my_copyMode",
     *       //   "languageCode": "my_languageCode",
     *       //   "useAdminAccess": false,
     *       //   "view": "my_view"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appliedCapabilities": {},
     *   //   "appliedLabelPolicy": {},
     *   //   "createTime": "my_createTime",
     *   //   "creator": {},
     *   //   "customer": "my_customer",
     *   //   "disableTime": "my_disableTime",
     *   //   "disabler": {},
     *   //   "displayHints": {},
     *   //   "enabledAppSettings": {},
     *   //   "fields": [],
     *   //   "id": "my_id",
     *   //   "labelType": "my_labelType",
     *   //   "learnMoreUri": "my_learnMoreUri",
     *   //   "lifecycle": {},
     *   //   "lockStatus": {},
     *   //   "name": "my_name",
     *   //   "properties": {},
     *   //   "publishTime": "my_publishTime",
     *   //   "publisher": {},
     *   //   "revisionCreateTime": "my_revisionCreateTime",
     *   //   "revisionCreator": {},
     *   //   "revisionId": "my_revisionId",
     *   //   "schemaCapabilities": {}
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
    updateLabelCopyMode(
      params: Params$Resource$Labels$Updatelabelcopymode,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateLabelCopyMode(
      params?: Params$Resource$Labels$Updatelabelcopymode,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2Label>>;
    updateLabelCopyMode(
      params: Params$Resource$Labels$Updatelabelcopymode,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateLabelCopyMode(
      params: Params$Resource$Labels$Updatelabelcopymode,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
    ): void;
    updateLabelCopyMode(
      params: Params$Resource$Labels$Updatelabelcopymode,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
    ): void;
    updateLabelCopyMode(
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
    ): void;
    updateLabelCopyMode(
      paramsOrCallback?:
        | Params$Resource$Labels$Updatelabelcopymode
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2Label>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Labels$Updatelabelcopymode;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Labels$Updatelabelcopymode;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://drivelabels.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:updateLabelCopyMode').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAppsDriveLabelsV2Label>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsDriveLabelsV2Label>(
          parameters
        );
      }
    }

    /**
     * Updates a Label's EabledAppSettings. Enabling a Label in a Workspace Application allows it to be used in that application. This change is not revisioned, does not require publishing, and takes effect immediately.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drivelabels.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const drivelabels = google.drivelabels('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drivelabels.labels.updateLabelEnabledAppSettings({
     *     // Required. The resource name of the Label to update. The resource name of the Label to update.
     *     name: 'labels/my-label',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "enabledAppSettings": {},
     *       //   "languageCode": "my_languageCode",
     *       //   "useAdminAccess": false,
     *       //   "view": "my_view"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appliedCapabilities": {},
     *   //   "appliedLabelPolicy": {},
     *   //   "createTime": "my_createTime",
     *   //   "creator": {},
     *   //   "customer": "my_customer",
     *   //   "disableTime": "my_disableTime",
     *   //   "disabler": {},
     *   //   "displayHints": {},
     *   //   "enabledAppSettings": {},
     *   //   "fields": [],
     *   //   "id": "my_id",
     *   //   "labelType": "my_labelType",
     *   //   "learnMoreUri": "my_learnMoreUri",
     *   //   "lifecycle": {},
     *   //   "lockStatus": {},
     *   //   "name": "my_name",
     *   //   "properties": {},
     *   //   "publishTime": "my_publishTime",
     *   //   "publisher": {},
     *   //   "revisionCreateTime": "my_revisionCreateTime",
     *   //   "revisionCreator": {},
     *   //   "revisionId": "my_revisionId",
     *   //   "schemaCapabilities": {}
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
    updateLabelEnabledAppSettings(
      params: Params$Resource$Labels$Updatelabelenabledappsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateLabelEnabledAppSettings(
      params?: Params$Resource$Labels$Updatelabelenabledappsettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2Label>>;
    updateLabelEnabledAppSettings(
      params: Params$Resource$Labels$Updatelabelenabledappsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateLabelEnabledAppSettings(
      params: Params$Resource$Labels$Updatelabelenabledappsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
    ): void;
    updateLabelEnabledAppSettings(
      params: Params$Resource$Labels$Updatelabelenabledappsettings,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
    ): void;
    updateLabelEnabledAppSettings(
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
    ): void;
    updateLabelEnabledAppSettings(
      paramsOrCallback?:
        | Params$Resource$Labels$Updatelabelenabledappsettings
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2Label>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2Label>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Labels$Updatelabelenabledappsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Labels$Updatelabelenabledappsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://drivelabels.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v2/{+name}:updateLabelEnabledAppSettings'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAppsDriveLabelsV2Label>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsDriveLabelsV2Label>(
          parameters
        );
      }
    }

    /**
     * Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drivelabels.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const drivelabels = google.drivelabels('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive.admin.labels',
     *       'https://www.googleapis.com/auth/drive.labels',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drivelabels.labels.updatePermissions({
     *     // Required. The parent Label resource name.
     *     parent: 'labels/my-label',
     *     // Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     *     useAdminAccess: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "audience": "my_audience",
     *       //   "email": "my_email",
     *       //   "group": "my_group",
     *       //   "name": "my_name",
     *       //   "person": "my_person",
     *       //   "role": "my_role"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "audience": "my_audience",
     *   //   "email": "my_email",
     *   //   "group": "my_group",
     *   //   "name": "my_name",
     *   //   "person": "my_person",
     *   //   "role": "my_role"
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
    updatePermissions(
      params: Params$Resource$Labels$Updatepermissions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updatePermissions(
      params?: Params$Resource$Labels$Updatepermissions,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2LabelPermission>
    >;
    updatePermissions(
      params: Params$Resource$Labels$Updatepermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updatePermissions(
      params: Params$Resource$Labels$Updatepermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelPermission>,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelPermission>
    ): void;
    updatePermissions(
      params: Params$Resource$Labels$Updatepermissions,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelPermission>
    ): void;
    updatePermissions(
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelPermission>
    ): void;
    updatePermissions(
      paramsOrCallback?:
        | Params$Resource$Labels$Updatepermissions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelPermission>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelPermission>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelPermission>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2LabelPermission>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Labels$Updatepermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Labels$Updatepermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://drivelabels.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/permissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAppsDriveLabelsV2LabelPermission>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsDriveLabelsV2LabelPermission>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Labels$Create extends StandardParameters {
    /**
     * The BCP-47 language code to use for evaluating localized Field labels in response. When not specified, values in the default configured language will be used.
     */
    languageCode?: string;
    /**
     * Set to `true` in order to use the user's admin privileges. The server will verify the user is an admin before allowing access.
     */
    useAdminAccess?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsDriveLabelsV2Label;
  }
  export interface Params$Resource$Labels$Delete extends StandardParameters {
    /**
     * Required. Label resource name.
     */
    name?: string;
    /**
     * Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     */
    useAdminAccess?: boolean;
    /**
     * The revision_id of the label that the write request will be applied to. If this is not the latest revision of the label, the request will not be processed and will return a 400 Bad Request error.
     */
    'writeControl.requiredRevisionId'?: string;
  }
  export interface Params$Resource$Labels$Delta extends StandardParameters {
    /**
     * Required. The resource name of the Label to update.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsDriveLabelsV2DeltaUpdateLabelRequest;
  }
  export interface Params$Resource$Labels$Disable extends StandardParameters {
    /**
     * Required. Label resource name.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsDriveLabelsV2DisableLabelRequest;
  }
  export interface Params$Resource$Labels$Enable extends StandardParameters {
    /**
     * Required. Label resource name.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsDriveLabelsV2EnableLabelRequest;
  }
  export interface Params$Resource$Labels$Get extends StandardParameters {
    /**
     * The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language are used.
     */
    languageCode?: string;
    /**
     * Required. Label resource name. May be any of: * `labels/{id\}` (equivalent to labels/{id\}@latest) * `labels/{id\}@latest` * `labels/{id\}@published` * `labels/{id\}@{revision_id\}`
     */
    name?: string;
    /**
     * Set to `true` in order to use the user's admin credentials. The server verifies that the user is an admin for the label before allowing access.
     */
    useAdminAccess?: boolean;
    /**
     * When specified, only certain fields belonging to the indicated view are returned.
     */
    view?: string;
  }
  export interface Params$Resource$Labels$List extends StandardParameters {
    /**
     * The customer to scope this list request to. For example: "customers/abcd1234". If unset, will return all labels within the current customer.
     */
    customer?: string;
    /**
     * The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language are used.
     */
    languageCode?: string;
    /**
     * Specifies the level of access the user must have on the returned Labels. The minimum role a user must have on a label. Defaults to `READER`.
     */
    minimumRole?: string;
    /**
     * Maximum number of labels to return per page. Default: 50. Max: 200.
     */
    pageSize?: number;
    /**
     * The token of the page to return.
     */
    pageToken?: string;
    /**
     * Whether to include only published labels in the results. * When `true`, only the current published label revisions are returned. Disabled labels are included. Returned label resource names reference the published revision (`labels/{id\}/{revision_id\}`). * When `false`, the current label revisions are returned, which might not be published. Returned label resource names don't reference a specific revision (`labels/{id\}`).
     */
    publishedOnly?: boolean;
    /**
     * Set to `true` in order to use the user's admin credentials. This will return all Labels within the customer.
     */
    useAdminAccess?: boolean;
    /**
     * When specified, only certain fields belonging to the indicated view are returned.
     */
    view?: string;
  }
  export interface Params$Resource$Labels$Publish extends StandardParameters {
    /**
     * Required. Label resource name.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsDriveLabelsV2PublishLabelRequest;
  }
  export interface Params$Resource$Labels$Updatelabelcopymode
    extends StandardParameters {
    /**
     * Required. The resource name of the Label to update.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsDriveLabelsV2UpdateLabelCopyModeRequest;
  }
  export interface Params$Resource$Labels$Updatelabelenabledappsettings
    extends StandardParameters {
    /**
     * Required. The resource name of the Label to update. The resource name of the Label to update.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsDriveLabelsV2UpdateLabelEnabledAppSettingsRequest;
  }
  export interface Params$Resource$Labels$Updatepermissions
    extends StandardParameters {
    /**
     * Required. The parent Label resource name.
     */
    parent?: string;
    /**
     * Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     */
    useAdminAccess?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsDriveLabelsV2LabelPermission;
  }

  export class Resource$Labels$Locks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the LabelLocks on a Label.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drivelabels.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const drivelabels = google.drivelabels('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive.admin.labels',
     *       'https://www.googleapis.com/auth/drive.admin.labels.readonly',
     *       'https://www.googleapis.com/auth/drive.labels',
     *       'https://www.googleapis.com/auth/drive.labels.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drivelabels.labels.locks.list({
     *     // Maximum number of Locks to return per page. Default: 100. Max: 200.
     *     pageSize: 'placeholder-value',
     *     // The token of the page to return.
     *     pageToken: 'placeholder-value',
     *     // Required. Label on which Locks are applied. Format: labels/{label\}
     *     parent: 'labels/my-label',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "labelLocks": [],
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
      params: Params$Resource$Labels$Locks$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Labels$Locks$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2ListLabelLocksResponse>
    >;
    list(
      params: Params$Resource$Labels$Locks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Labels$Locks$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelLocksResponse>,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelLocksResponse>
    ): void;
    list(
      params: Params$Resource$Labels$Locks$List,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelLocksResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelLocksResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Labels$Locks$List
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelLocksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelLocksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelLocksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2ListLabelLocksResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Labels$Locks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Labels$Locks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://drivelabels.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/locks').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAppsDriveLabelsV2ListLabelLocksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsDriveLabelsV2ListLabelLocksResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Labels$Locks$List
    extends StandardParameters {
    /**
     * Maximum number of Locks to return per page. Default: 100. Max: 200.
     */
    pageSize?: number;
    /**
     * The token of the page to return.
     */
    pageToken?: string;
    /**
     * Required. Label on which Locks are applied. Format: labels/{label\}
     */
    parent?: string;
  }

  export class Resource$Labels$Permissions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes Label permissions. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drivelabels.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const drivelabels = google.drivelabels('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive.admin.labels',
     *       'https://www.googleapis.com/auth/drive.labels',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drivelabels.labels.permissions.batchDelete({
     *     // Required. The parent Label resource name shared by all permissions being deleted. Format: labels/{label\} If this is set, the parent field in the UpdateLabelPermissionRequest messages must either be empty or match this field.
     *     parent: 'labels/my-label',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requests": [],
     *       //   "useAdminAccess": false
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
      params: Params$Resource$Labels$Permissions$Batchdelete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchDelete(
      params?: Params$Resource$Labels$Permissions$Batchdelete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    batchDelete(
      params: Params$Resource$Labels$Permissions$Batchdelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchDelete(
      params: Params$Resource$Labels$Permissions$Batchdelete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchDelete(
      params: Params$Resource$Labels$Permissions$Batchdelete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchDelete(
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchDelete(
      paramsOrCallback?:
        | Params$Resource$Labels$Permissions$Batchdelete
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
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Labels$Permissions$Batchdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Labels$Permissions$Batchdelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://drivelabels.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/permissions:batchDelete').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
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
     * Updates Label permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drivelabels.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const drivelabels = google.drivelabels('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive.admin.labels',
     *       'https://www.googleapis.com/auth/drive.labels',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drivelabels.labels.permissions.batchUpdate({
     *     // Required. The parent Label resource name shared by all permissions being updated. Format: labels/{label\} If this is set, the parent field in the UpdateLabelPermissionRequest messages must either be empty or match this field.
     *     parent: 'labels/my-label',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requests": [],
     *       //   "useAdminAccess": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "permissions": []
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
    batchUpdate(
      params: Params$Resource$Labels$Permissions$Batchupdate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchUpdate(
      params?: Params$Resource$Labels$Permissions$Batchupdate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse>
    >;
    batchUpdate(
      params: Params$Resource$Labels$Permissions$Batchupdate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchUpdate(
      params: Params$Resource$Labels$Permissions$Batchupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse>
    ): void;
    batchUpdate(
      params: Params$Resource$Labels$Permissions$Batchupdate,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse>
    ): void;
    batchUpdate(
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse>
    ): void;
    batchUpdate(
      paramsOrCallback?:
        | Params$Resource$Labels$Permissions$Batchupdate
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Labels$Permissions$Batchupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Labels$Permissions$Batchupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://drivelabels.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/permissions:batchUpdate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drivelabels.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const drivelabels = google.drivelabels('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive.admin.labels',
     *       'https://www.googleapis.com/auth/drive.labels',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drivelabels.labels.permissions.create({
     *     // Required. The parent Label resource name on the Label Permission is created. Format: labels/{label\}
     *     parent: 'labels/my-label',
     *     // Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     *     useAdminAccess: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "audience": "my_audience",
     *       //   "email": "my_email",
     *       //   "group": "my_group",
     *       //   "name": "my_name",
     *       //   "person": "my_person",
     *       //   "role": "my_role"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "audience": "my_audience",
     *   //   "email": "my_email",
     *   //   "group": "my_group",
     *   //   "name": "my_name",
     *   //   "person": "my_person",
     *   //   "role": "my_role"
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
      params: Params$Resource$Labels$Permissions$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Labels$Permissions$Create,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2LabelPermission>
    >;
    create(
      params: Params$Resource$Labels$Permissions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Labels$Permissions$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelPermission>,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelPermission>
    ): void;
    create(
      params: Params$Resource$Labels$Permissions$Create,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelPermission>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelPermission>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Labels$Permissions$Create
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelPermission>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelPermission>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelPermission>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2LabelPermission>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Labels$Permissions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Labels$Permissions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://drivelabels.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/permissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAppsDriveLabelsV2LabelPermission>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsDriveLabelsV2LabelPermission>(
          parameters
        );
      }
    }

    /**
     * Deletes a Label's permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drivelabels.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const drivelabels = google.drivelabels('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive.admin.labels',
     *       'https://www.googleapis.com/auth/drive.labels',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drivelabels.labels.permissions.delete({
     *     // Required. Label Permission resource name.
     *     name: 'labels/my-label/permissions/my-permission',
     *     // Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     *     useAdminAccess: 'placeholder-value',
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
      params: Params$Resource$Labels$Permissions$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Labels$Permissions$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    delete(
      params: Params$Resource$Labels$Permissions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Labels$Permissions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Labels$Permissions$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Labels$Permissions$Delete
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
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Labels$Permissions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Labels$Permissions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://drivelabels.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
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
     * Lists a Label's permissions.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drivelabels.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const drivelabels = google.drivelabels('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive.admin.labels',
     *       'https://www.googleapis.com/auth/drive.admin.labels.readonly',
     *       'https://www.googleapis.com/auth/drive.labels',
     *       'https://www.googleapis.com/auth/drive.labels.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drivelabels.labels.permissions.list({
     *     // Maximum number of permissions to return per page. Default: 50. Max: 200.
     *     pageSize: 'placeholder-value',
     *     // The token of the page to return.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent Label resource name on which Label Permission are listed. Format: labels/{label\}
     *     parent: 'labels/my-label',
     *     // Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     *     useAdminAccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "labelPermissions": [],
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
      params: Params$Resource$Labels$Permissions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Labels$Permissions$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2ListLabelPermissionsResponse>
    >;
    list(
      params: Params$Resource$Labels$Permissions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Labels$Permissions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelPermissionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelPermissionsResponse>
    ): void;
    list(
      params: Params$Resource$Labels$Permissions$List,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelPermissionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelPermissionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Labels$Permissions$List
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2ListLabelPermissionsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Labels$Permissions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Labels$Permissions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://drivelabels.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/permissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAppsDriveLabelsV2ListLabelPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsDriveLabelsV2ListLabelPermissionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Labels$Permissions$Batchdelete
    extends StandardParameters {
    /**
     * Required. The parent Label resource name shared by all permissions being deleted. Format: labels/{label\} If this is set, the parent field in the UpdateLabelPermissionRequest messages must either be empty or match this field.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsDriveLabelsV2BatchDeleteLabelPermissionsRequest;
  }
  export interface Params$Resource$Labels$Permissions$Batchupdate
    extends StandardParameters {
    /**
     * Required. The parent Label resource name shared by all permissions being updated. Format: labels/{label\} If this is set, the parent field in the UpdateLabelPermissionRequest messages must either be empty or match this field.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsRequest;
  }
  export interface Params$Resource$Labels$Permissions$Create
    extends StandardParameters {
    /**
     * Required. The parent Label resource name on the Label Permission is created. Format: labels/{label\}
     */
    parent?: string;
    /**
     * Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     */
    useAdminAccess?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsDriveLabelsV2LabelPermission;
  }
  export interface Params$Resource$Labels$Permissions$Delete
    extends StandardParameters {
    /**
     * Required. Label Permission resource name.
     */
    name?: string;
    /**
     * Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     */
    useAdminAccess?: boolean;
  }
  export interface Params$Resource$Labels$Permissions$List
    extends StandardParameters {
    /**
     * Maximum number of permissions to return per page. Default: 50. Max: 200.
     */
    pageSize?: number;
    /**
     * The token of the page to return.
     */
    pageToken?: string;
    /**
     * Required. The parent Label resource name on which Label Permission are listed. Format: labels/{label\}
     */
    parent?: string;
    /**
     * Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     */
    useAdminAccess?: boolean;
  }

  export class Resource$Labels$Revisions {
    context: APIRequestContext;
    locks: Resource$Labels$Revisions$Locks;
    permissions: Resource$Labels$Revisions$Permissions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locks = new Resource$Labels$Revisions$Locks(this.context);
      this.permissions = new Resource$Labels$Revisions$Permissions(
        this.context
      );
    }

    /**
     * Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drivelabels.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const drivelabels = google.drivelabels('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive.admin.labels',
     *       'https://www.googleapis.com/auth/drive.labels',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drivelabels.labels.revisions.updatePermissions({
     *     // Required. The parent Label resource name.
     *     parent: 'labels/my-label/revisions/my-revision',
     *     // Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     *     useAdminAccess: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "audience": "my_audience",
     *       //   "email": "my_email",
     *       //   "group": "my_group",
     *       //   "name": "my_name",
     *       //   "person": "my_person",
     *       //   "role": "my_role"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "audience": "my_audience",
     *   //   "email": "my_email",
     *   //   "group": "my_group",
     *   //   "name": "my_name",
     *   //   "person": "my_person",
     *   //   "role": "my_role"
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
    updatePermissions(
      params: Params$Resource$Labels$Revisions$Updatepermissions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updatePermissions(
      params?: Params$Resource$Labels$Revisions$Updatepermissions,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2LabelPermission>
    >;
    updatePermissions(
      params: Params$Resource$Labels$Revisions$Updatepermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updatePermissions(
      params: Params$Resource$Labels$Revisions$Updatepermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelPermission>,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelPermission>
    ): void;
    updatePermissions(
      params: Params$Resource$Labels$Revisions$Updatepermissions,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelPermission>
    ): void;
    updatePermissions(
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelPermission>
    ): void;
    updatePermissions(
      paramsOrCallback?:
        | Params$Resource$Labels$Revisions$Updatepermissions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelPermission>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelPermission>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelPermission>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2LabelPermission>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Labels$Revisions$Updatepermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Labels$Revisions$Updatepermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://drivelabels.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/permissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAppsDriveLabelsV2LabelPermission>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsDriveLabelsV2LabelPermission>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Labels$Revisions$Updatepermissions
    extends StandardParameters {
    /**
     * Required. The parent Label resource name.
     */
    parent?: string;
    /**
     * Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     */
    useAdminAccess?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsDriveLabelsV2LabelPermission;
  }

  export class Resource$Labels$Revisions$Locks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the LabelLocks on a Label.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drivelabels.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const drivelabels = google.drivelabels('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive.admin.labels',
     *       'https://www.googleapis.com/auth/drive.admin.labels.readonly',
     *       'https://www.googleapis.com/auth/drive.labels',
     *       'https://www.googleapis.com/auth/drive.labels.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drivelabels.labels.revisions.locks.list({
     *     // Maximum number of Locks to return per page. Default: 100. Max: 200.
     *     pageSize: 'placeholder-value',
     *     // The token of the page to return.
     *     pageToken: 'placeholder-value',
     *     // Required. Label on which Locks are applied. Format: labels/{label\}
     *     parent: 'labels/my-label/revisions/my-revision',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "labelLocks": [],
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
      params: Params$Resource$Labels$Revisions$Locks$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Labels$Revisions$Locks$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2ListLabelLocksResponse>
    >;
    list(
      params: Params$Resource$Labels$Revisions$Locks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Labels$Revisions$Locks$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelLocksResponse>,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelLocksResponse>
    ): void;
    list(
      params: Params$Resource$Labels$Revisions$Locks$List,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelLocksResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelLocksResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Labels$Revisions$Locks$List
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelLocksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelLocksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelLocksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2ListLabelLocksResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Labels$Revisions$Locks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Labels$Revisions$Locks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://drivelabels.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/locks').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAppsDriveLabelsV2ListLabelLocksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsDriveLabelsV2ListLabelLocksResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Labels$Revisions$Locks$List
    extends StandardParameters {
    /**
     * Maximum number of Locks to return per page. Default: 100. Max: 200.
     */
    pageSize?: number;
    /**
     * The token of the page to return.
     */
    pageToken?: string;
    /**
     * Required. Label on which Locks are applied. Format: labels/{label\}
     */
    parent?: string;
  }

  export class Resource$Labels$Revisions$Permissions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes Label permissions. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drivelabels.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const drivelabels = google.drivelabels('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive.admin.labels',
     *       'https://www.googleapis.com/auth/drive.labels',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drivelabels.labels.revisions.permissions.batchDelete({
     *     // Required. The parent Label resource name shared by all permissions being deleted. Format: labels/{label\} If this is set, the parent field in the UpdateLabelPermissionRequest messages must either be empty or match this field.
     *     parent: 'labels/my-label/revisions/my-revision',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requests": [],
     *       //   "useAdminAccess": false
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
      params: Params$Resource$Labels$Revisions$Permissions$Batchdelete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchDelete(
      params?: Params$Resource$Labels$Revisions$Permissions$Batchdelete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    batchDelete(
      params: Params$Resource$Labels$Revisions$Permissions$Batchdelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchDelete(
      params: Params$Resource$Labels$Revisions$Permissions$Batchdelete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchDelete(
      params: Params$Resource$Labels$Revisions$Permissions$Batchdelete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchDelete(
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    batchDelete(
      paramsOrCallback?:
        | Params$Resource$Labels$Revisions$Permissions$Batchdelete
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
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Labels$Revisions$Permissions$Batchdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Labels$Revisions$Permissions$Batchdelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://drivelabels.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/permissions:batchDelete').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
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
     * Updates Label permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drivelabels.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const drivelabels = google.drivelabels('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive.admin.labels',
     *       'https://www.googleapis.com/auth/drive.labels',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drivelabels.labels.revisions.permissions.batchUpdate({
     *     // Required. The parent Label resource name shared by all permissions being updated. Format: labels/{label\} If this is set, the parent field in the UpdateLabelPermissionRequest messages must either be empty or match this field.
     *     parent: 'labels/my-label/revisions/my-revision',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requests": [],
     *       //   "useAdminAccess": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "permissions": []
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
    batchUpdate(
      params: Params$Resource$Labels$Revisions$Permissions$Batchupdate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchUpdate(
      params?: Params$Resource$Labels$Revisions$Permissions$Batchupdate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse>
    >;
    batchUpdate(
      params: Params$Resource$Labels$Revisions$Permissions$Batchupdate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchUpdate(
      params: Params$Resource$Labels$Revisions$Permissions$Batchupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse>
    ): void;
    batchUpdate(
      params: Params$Resource$Labels$Revisions$Permissions$Batchupdate,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse>
    ): void;
    batchUpdate(
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse>
    ): void;
    batchUpdate(
      paramsOrCallback?:
        | Params$Resource$Labels$Revisions$Permissions$Batchupdate
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Labels$Revisions$Permissions$Batchupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Labels$Revisions$Permissions$Batchupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://drivelabels.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/permissions:batchUpdate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drivelabels.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const drivelabels = google.drivelabels('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive.admin.labels',
     *       'https://www.googleapis.com/auth/drive.labels',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drivelabels.labels.revisions.permissions.create({
     *     // Required. The parent Label resource name on the Label Permission is created. Format: labels/{label\}
     *     parent: 'labels/my-label/revisions/my-revision',
     *     // Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     *     useAdminAccess: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "audience": "my_audience",
     *       //   "email": "my_email",
     *       //   "group": "my_group",
     *       //   "name": "my_name",
     *       //   "person": "my_person",
     *       //   "role": "my_role"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "audience": "my_audience",
     *   //   "email": "my_email",
     *   //   "group": "my_group",
     *   //   "name": "my_name",
     *   //   "person": "my_person",
     *   //   "role": "my_role"
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
      params: Params$Resource$Labels$Revisions$Permissions$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Labels$Revisions$Permissions$Create,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2LabelPermission>
    >;
    create(
      params: Params$Resource$Labels$Revisions$Permissions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Labels$Revisions$Permissions$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelPermission>,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelPermission>
    ): void;
    create(
      params: Params$Resource$Labels$Revisions$Permissions$Create,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelPermission>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelPermission>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Labels$Revisions$Permissions$Create
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelPermission>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelPermission>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelPermission>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2LabelPermission>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Labels$Revisions$Permissions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Labels$Revisions$Permissions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://drivelabels.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/permissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAppsDriveLabelsV2LabelPermission>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsDriveLabelsV2LabelPermission>(
          parameters
        );
      }
    }

    /**
     * Deletes a Label's permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drivelabels.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const drivelabels = google.drivelabels('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive.admin.labels',
     *       'https://www.googleapis.com/auth/drive.labels',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drivelabels.labels.revisions.permissions.delete({
     *     // Required. Label Permission resource name.
     *     name: 'labels/my-label/revisions/my-revision/permissions/my-permission',
     *     // Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     *     useAdminAccess: 'placeholder-value',
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
      params: Params$Resource$Labels$Revisions$Permissions$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Labels$Revisions$Permissions$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    delete(
      params: Params$Resource$Labels$Revisions$Permissions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Labels$Revisions$Permissions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Labels$Revisions$Permissions$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Labels$Revisions$Permissions$Delete
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
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Labels$Revisions$Permissions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Labels$Revisions$Permissions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://drivelabels.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
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
     * Lists a Label's permissions.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drivelabels.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const drivelabels = google.drivelabels('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive.admin.labels',
     *       'https://www.googleapis.com/auth/drive.admin.labels.readonly',
     *       'https://www.googleapis.com/auth/drive.labels',
     *       'https://www.googleapis.com/auth/drive.labels.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drivelabels.labels.revisions.permissions.list({
     *     // Maximum number of permissions to return per page. Default: 50. Max: 200.
     *     pageSize: 'placeholder-value',
     *     // The token of the page to return.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent Label resource name on which Label Permission are listed. Format: labels/{label\}
     *     parent: 'labels/my-label/revisions/my-revision',
     *     // Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     *     useAdminAccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "labelPermissions": [],
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
      params: Params$Resource$Labels$Revisions$Permissions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Labels$Revisions$Permissions$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2ListLabelPermissionsResponse>
    >;
    list(
      params: Params$Resource$Labels$Revisions$Permissions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Labels$Revisions$Permissions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelPermissionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelPermissionsResponse>
    ): void;
    list(
      params: Params$Resource$Labels$Revisions$Permissions$List,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelPermissionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelPermissionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Labels$Revisions$Permissions$List
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2ListLabelPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2ListLabelPermissionsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Labels$Revisions$Permissions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Labels$Revisions$Permissions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://drivelabels.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/permissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAppsDriveLabelsV2ListLabelPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsDriveLabelsV2ListLabelPermissionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Labels$Revisions$Permissions$Batchdelete
    extends StandardParameters {
    /**
     * Required. The parent Label resource name shared by all permissions being deleted. Format: labels/{label\} If this is set, the parent field in the UpdateLabelPermissionRequest messages must either be empty or match this field.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsDriveLabelsV2BatchDeleteLabelPermissionsRequest;
  }
  export interface Params$Resource$Labels$Revisions$Permissions$Batchupdate
    extends StandardParameters {
    /**
     * Required. The parent Label resource name shared by all permissions being updated. Format: labels/{label\} If this is set, the parent field in the UpdateLabelPermissionRequest messages must either be empty or match this field.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsRequest;
  }
  export interface Params$Resource$Labels$Revisions$Permissions$Create
    extends StandardParameters {
    /**
     * Required. The parent Label resource name on the Label Permission is created. Format: labels/{label\}
     */
    parent?: string;
    /**
     * Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     */
    useAdminAccess?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleAppsDriveLabelsV2LabelPermission;
  }
  export interface Params$Resource$Labels$Revisions$Permissions$Delete
    extends StandardParameters {
    /**
     * Required. Label Permission resource name.
     */
    name?: string;
    /**
     * Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     */
    useAdminAccess?: boolean;
  }
  export interface Params$Resource$Labels$Revisions$Permissions$List
    extends StandardParameters {
    /**
     * Maximum number of permissions to return per page. Default: 50. Max: 200.
     */
    pageSize?: number;
    /**
     * The token of the page to return.
     */
    pageToken?: string;
    /**
     * Required. The parent Label resource name on which Label Permission are listed. Format: labels/{label\}
     */
    parent?: string;
    /**
     * Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     */
    useAdminAccess?: boolean;
  }

  export class Resource$Limits {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get the constraints on the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drivelabels.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const drivelabels = google.drivelabels('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive.admin.labels',
     *       'https://www.googleapis.com/auth/drive.admin.labels.readonly',
     *       'https://www.googleapis.com/auth/drive.labels',
     *       'https://www.googleapis.com/auth/drive.labels.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drivelabels.limits.getLabel({
     *     // Required. Label revision resource name Must be: "limits/label"
     *     name: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "fieldLimits": {},
     *   //   "maxDeletedFields": 0,
     *   //   "maxDescriptionLength": 0,
     *   //   "maxDraftRevisions": 0,
     *   //   "maxFields": 0,
     *   //   "maxTitleLength": 0,
     *   //   "name": "my_name"
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
    getLabel(
      params: Params$Resource$Limits$Getlabel,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getLabel(
      params?: Params$Resource$Limits$Getlabel,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2LabelLimits>
    >;
    getLabel(
      params: Params$Resource$Limits$Getlabel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getLabel(
      params: Params$Resource$Limits$Getlabel,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelLimits>,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelLimits>
    ): void;
    getLabel(
      params: Params$Resource$Limits$Getlabel,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelLimits>
    ): void;
    getLabel(
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelLimits>
    ): void;
    getLabel(
      paramsOrCallback?:
        | Params$Resource$Limits$Getlabel
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelLimits>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelLimits>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2LabelLimits>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2LabelLimits>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Limits$Getlabel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Limits$Getlabel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://drivelabels.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/limits/label').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAppsDriveLabelsV2LabelLimits>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsDriveLabelsV2LabelLimits>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Limits$Getlabel extends StandardParameters {
    /**
     * Required. Label revision resource name Must be: "limits/label"
     */
    name?: string;
  }

  export class Resource$Users {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the user capabilities.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drivelabels.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const drivelabels = google.drivelabels('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive.admin.labels',
     *       'https://www.googleapis.com/auth/drive.admin.labels.readonly',
     *       'https://www.googleapis.com/auth/drive.labels',
     *       'https://www.googleapis.com/auth/drive.labels.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await drivelabels.users.getCapabilities({
     *     // The customer to scope this request to. For example: "customers/abcd1234". If unset, will return settings within the current customer.
     *     customer: 'placeholder-value',
     *     // Required. The resource name of the user. Only "users/me/capabilities" is supported.
     *     name: 'users/my-user/capabilities',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "canAccessLabelManager": false,
     *   //   "canAdministrateLabels": false,
     *   //   "canCreateAdminLabels": false,
     *   //   "canCreateSharedLabels": false,
     *   //   "name": "my_name"
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
    getCapabilities(
      params: Params$Resource$Users$Getcapabilities,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getCapabilities(
      params?: Params$Resource$Users$Getcapabilities,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2UserCapabilities>
    >;
    getCapabilities(
      params: Params$Resource$Users$Getcapabilities,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getCapabilities(
      params: Params$Resource$Users$Getcapabilities,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2UserCapabilities>,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2UserCapabilities>
    ): void;
    getCapabilities(
      params: Params$Resource$Users$Getcapabilities,
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2UserCapabilities>
    ): void;
    getCapabilities(
      callback: BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2UserCapabilities>
    ): void;
    getCapabilities(
      paramsOrCallback?:
        | Params$Resource$Users$Getcapabilities
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2UserCapabilities>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2UserCapabilities>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleAppsDriveLabelsV2UserCapabilities>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleAppsDriveLabelsV2UserCapabilities>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Getcapabilities;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Getcapabilities;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://drivelabels.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleAppsDriveLabelsV2UserCapabilities>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleAppsDriveLabelsV2UserCapabilities>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Users$Getcapabilities
    extends StandardParameters {
    /**
     * The customer to scope this request to. For example: "customers/abcd1234". If unset, will return settings within the current customer.
     */
    customer?: string;
    /**
     * Required. The resource name of the user. Only "users/me/capabilities" is supported.
     */
    name?: string;
  }
}
