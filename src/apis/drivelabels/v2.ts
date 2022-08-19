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

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.labels = new Resource$Labels(this.context);
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
   * Contains information about whether a label component should be considered locked.
   */
  export interface Schema$GoogleAppsDriveLabelsV2LockStatus {
    /**
     * Output only. Indicates whether this label component is the (direct) target of a LabelLock. A label component can be implicitly locked even if it's not the direct target of a LabelLock, in which case this field is set to false.
     */
    locked?: boolean | null;
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
   * Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to/from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't carry information about the absolute color space that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB, DCI-P3, BT.2020, etc.). By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most 1e-5. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); \} public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); \} return resultBuilder.build(); \} // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; \} return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; \} static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; \} Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; \} [result autorelease]; return result; \} // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); \} var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); \}; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); \} resultBuilder.push(hexString); return resultBuilder.join(''); \}; // ...
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
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get a label by its resource name. Resource name may be any of: * `labels/{id\}` - See `labels/{id\}@latest` * `labels/{id\}@latest` - Gets the latest revision of the label. * `labels/{id\}@published` - Gets the current published revision of the label. * `labels/{id\}@{revision_id\}` - Gets the label at the specified revision ID.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/drivelabels.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
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
     *   //   "disableTime": "my_disableTime",
     *   //   "disabler": {},
     *   //   "displayHints": {},
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
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Labels$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAppsDriveLabelsV2Label>;
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
      | GaxiosPromise<Schema$GoogleAppsDriveLabelsV2Label>
      | GaxiosPromise<Readable> {
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
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
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
     *   const res = await drivelabels.labels.list({
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
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Labels$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleAppsDriveLabelsV2ListLabelsResponse>;
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
      | GaxiosPromise<Schema$GoogleAppsDriveLabelsV2ListLabelsResponse>
      | GaxiosPromise<Readable> {
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
}
