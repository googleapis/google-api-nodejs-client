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

import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from '../../shared/src';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace androidmanagement_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  /**
   * Android Management API
   *
   * The Android Management API provides remote enterprise management of Android
   * devices and apps.
   *
   * @example
   * const {google} = require('googleapis');
   * const androidmanagement = google.androidmanagement('v1');
   *
   * @namespace androidmanagement
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Androidmanagement
   */
  export class Androidmanagement {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    enterprises: Resource$Enterprises;
    signupUrls: Resource$Signupurls;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.enterprises = new Resource$Enterprises(this);
      this.signupUrls = new Resource$Signupurls(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * Configuration for an always-on VPN connection.
   */
  export interface Schema$AlwaysOnVpnPackage {
    /**
     * Disallows networking when the VPN is not connected.
     */
    lockdownEnabled?: boolean;
    /**
     * The package name of the VPN app.
     */
    packageName?: string;
  }
  /**
   * A compliance rule condition which is satisfied if the Android Framework API
   * level on the device doesn&#39;t meet a minimum requirement. There can only
   * be one rule with this type of condition per policy.
   */
  export interface Schema$ApiLevelCondition {
    /**
     * The minimum desired Android Framework API level. If the device
     * doesn&#39;t meet the minimum requirement, this condition is satisfied.
     * Must be greater than zero.
     */
    minApiLevel?: number;
  }
  /**
   * Information about an app.
   */
  export interface Schema$Application {
    /**
     * The set of managed properties available to be pre-configured for the app.
     */
    managedProperties?: Schema$ManagedProperty[];
    /**
     * The name of the app in the form
     * enterprises/{enterpriseId}/applications/{package_name}.
     */
    name?: string;
    /**
     * The permissions required by the app.
     */
    permissions?: Schema$ApplicationPermission[];
    /**
     * The title of the app. Localized.
     */
    title?: string;
  }
  /**
   * An app-related event.
   */
  export interface Schema$ApplicationEvent {
    /**
     * The creation time of the event.
     */
    createTime?: string;
    /**
     * App event type.
     */
    eventType?: string;
  }
  /**
   * A permission required by the app.
   */
  export interface Schema$ApplicationPermission {
    /**
     * A longer description of the permission, providing more detail on what it
     * affects. Localized.
     */
    description?: string;
    /**
     * The name of the permission. Localized.
     */
    name?: string;
    /**
     * An opaque string uniquely identifying the permission. Not localized.
     */
    permissionId?: string;
  }
  /**
   * Policy for an individual app.
   */
  export interface Schema$ApplicationPolicy {
    /**
     * The default policy for all permissions requested by the app. If
     * specified, this overrides the policy-level default_permission_policy
     * which applies to all apps. It does not override the permission_grants
     * which applies to all apps.
     */
    defaultPermissionPolicy?: string;
    /**
     * The scopes delegated to the app from Android Device Policy.
     */
    delegatedScopes?: string[];
    /**
     * Whether the app should be disabled, but app data is preserved.
     */
    disabled?: boolean;
    /**
     * The type of installation to perform.
     */
    installType?: string;
    /**
     * Whether the app is allowed to lock itself in full-screen mode.
     */
    lockTaskAllowed?: boolean;
    /**
     * Managed configuration applied to the app. The format for the
     * configuration is dictated by the ManagedProperty values supported by the
     * app. Each field name in the managed configuration must match the key
     * field of the ManagedProperty. The field value must be compatible with the
     * type of the ManagedProperty: &lt;table&gt;
     * &lt;tr&gt;&lt;td&gt;&lt;i&gt;type&lt;/i&gt;&lt;/td&gt;&lt;td&gt;&lt;i&gt;JSON
     * value&lt;/i&gt;&lt;/td&gt;&lt;/tr&gt;
     * &lt;tr&gt;&lt;td&gt;BOOL&lt;/td&gt;&lt;td&gt;true or
     * false&lt;/td&gt;&lt;/tr&gt;
     * &lt;tr&gt;&lt;td&gt;STRING&lt;/td&gt;&lt;td&gt;string&lt;/td&gt;&lt;/tr&gt;
     * &lt;tr&gt;&lt;td&gt;INTEGER&lt;/td&gt;&lt;td&gt;number&lt;/td&gt;&lt;/tr&gt;
     * &lt;tr&gt;&lt;td&gt;CHOICE&lt;/td&gt;&lt;td&gt;string&lt;/td&gt;&lt;/tr&gt;
     * &lt;tr&gt;&lt;td&gt;MULTISELECT&lt;/td&gt;&lt;td&gt;array of
     * strings&lt;/td&gt;&lt;/tr&gt;
     * &lt;tr&gt;&lt;td&gt;HIDDEN&lt;/td&gt;&lt;td&gt;string&lt;/td&gt;&lt;/tr&gt;
     * &lt;tr&gt;&lt;td&gt;BUNDLE_ARRAY&lt;/td&gt;&lt;td&gt;array of
     * objects&lt;/td&gt;&lt;/tr&gt; &lt;/table&gt;
     */
    managedConfiguration?: any;
    /**
     * The minimum version of the app that runs on the device. If set, the
     * device attempts to update the app to at least this version code. If the
     * app is not up-to-date, the device will contain a NonComplianceDetail with
     * non_compliance_reason set to APP_NOT_UPDATED. The app must already be
     * published to Google Play with a version code greater than or equal to
     * this value. At most 20 apps may specify a minimum version code per
     * policy.
     */
    minimumVersionCode?: number;
    /**
     * The package name of the app. For example, com.google.android.youtube for
     * the YouTube app.
     */
    packageName?: string;
    /**
     * Explicit permission grants or denials for the app. These values override
     * the default_permission_policy and permission_grants which apply to all
     * apps.
     */
    permissionGrants?: Schema$PermissionGrant[];
  }
  /**
   * Information reported about an installed app.
   */
  export interface Schema$ApplicationReport {
    /**
     * The source of the package.
     */
    applicationSource?: string;
    /**
     * The display name of the app.
     */
    displayName?: string;
    /**
     * List of app events. The most recent 20 events are stored in the list.
     */
    events?: Schema$ApplicationEvent[];
    /**
     * The package name of the app that installed this app.
     */
    installerPackageName?: string;
    /**
     * Package name of the app.
     */
    packageName?: string;
    /**
     * The SHA-256 hash of the app&#39;s APK file, which can be used to verify
     * the app hasn&#39;t been modified. Each byte of the hash value is
     * represented as a two-digit hexadecimal number.
     */
    packageSha256Hash?: string;
    /**
     * The SHA-1 hash of each android.content.pm.Signature
     * (https://developer.android.com/reference/android/content/pm/Signature.html)
     * associated with the app package. Each byte of each hash value is
     * represented as a two-digit hexadecimal number.
     */
    signingKeyCertFingerprints?: string[];
    /**
     * Application state.
     */
    state?: string;
    /**
     * The app version code, which can be used to determine whether one version
     * is more recent than another.
     */
    versionCode?: number;
    /**
     * The app version as displayed to the user.
     */
    versionName?: string;
  }
  /**
   * A rule for automatically choosing a private key and certificate to
   * authenticate the device to a server.
   */
  export interface Schema$ChoosePrivateKeyRule {
    /**
     * The package names for which outgoing requests are subject to this rule.
     * If no package names are specified, then the rule applies to all packages.
     * For each package name listed, the rule applies to that package and all
     * other packages that shared the same Android UID. The SHA256 hash of the
     * signing key signatures of each package_name will be verified against
     * those provided by Play
     */
    packageNames?: string[];
    /**
     * The alias of the private key to be used.
     */
    privateKeyAlias?: string;
    /**
     * The URL pattern to match against the URL of the outgoing request. The
     * pattern may contain asterisk (*) wildcards. Any URL is matched if
     * unspecified.
     */
    urlPattern?: string;
  }
  /**
   * A command.
   */
  export interface Schema$Command {
    /**
     * The timestamp at which the command was created. The timestamp is
     * automatically generated by the server.
     */
    createTime?: string;
    /**
     * The duration for which the command is valid. The command will expire if
     * not executed by the device during this time. The default duration if
     * unspecified is ten minutes. There is no maximum duration.
     */
    duration?: string;
    /**
     * If the command failed, an error code explaining the failure. This is not
     * set when the command is cancelled by the caller.
     */
    errorCode?: string;
    /**
     * For commands of type RESET_PASSWORD, optionally specifies the new
     * password.
     */
    newPassword?: string;
    /**
     * For commands of type RESET_PASSWORD, optionally specifies flags.
     */
    resetPasswordFlags?: string[];
    /**
     * The type of the command.
     */
    type?: string;
    /**
     * The resource name of the user that owns the device in the form
     * enterprises/{enterpriseId}/users/{userId}. This is automatically
     * generated by the server based on the device the command is sent to.
     */
    userName?: string;
  }
  /**
   * A rule declaring which mitigating actions to take when a device is not
   * compliant with its policy. For every rule, there is always an implicit
   * mitigating action to set policy_compliant to false for the Device resource,
   * and display a message on the device indicating that the device is not
   * compliant with its policy. Other mitigating actions may optionally be taken
   * as well, depending on the field values in the rule.
   */
  export interface Schema$ComplianceRule {
    /**
     * A condition which is satisfied if the Android Framework API level on the
     * device doesn&#39;t meet a minimum requirement.
     */
    apiLevelCondition?: Schema$ApiLevelCondition;
    /**
     * If set to true, the rule includes a mitigating action to disable apps so
     * that the device is effectively disabled, but app data is preserved. If
     * the device is running an app in locked task mode, the app will be closed
     * and a UI showing the reason for non-compliance will be displayed.
     */
    disableApps?: boolean;
    /**
     * A condition which is satisfied if there exists any matching
     * NonComplianceDetail for the device.
     */
    nonComplianceDetailCondition?: Schema$NonComplianceDetailCondition;
  }
  /**
   * A device owned by an enterprise. Unless otherwise noted, all fields are
   * read-only and can&#39;t be modified by enterprises.devices.patch.
   */
  export interface Schema$Device {
    /**
     * The API level of the Android platform version running on the device.
     */
    apiLevel?: number;
    /**
     * Reports for apps installed on the device. This information is only
     * available when application_reports_enabled is true in the device&#39;s
     * policy.
     */
    applicationReports?: Schema$ApplicationReport[];
    /**
     * The name of the policy currently applied to the device.
     */
    appliedPolicyName?: string;
    /**
     * The version of the policy currently applied to the device.
     */
    appliedPolicyVersion?: string;
    /**
     * The state currently applied to the device.
     */
    appliedState?: string;
    /**
     * Device settings information. This information is only available if
     * deviceSettingsEnabled is true in the device&#39;s policy.
     */
    deviceSettings?: Schema$DeviceSettings;
    /**
     * If the device state is DISABLED, an optional message that is displayed on
     * the device indicating the reason the device is disabled. This field can
     * be modified by a patch request.
     */
    disabledReason?: Schema$UserFacingMessage;
    /**
     * Detailed information about displays on the device. This information is
     * only available if displayInfoEnabled is true in the device&#39;s policy.
     */
    displays?: Schema$Display[];
    /**
     * The time of device enrollment.
     */
    enrollmentTime?: string;
    /**
     * If the device was enrolled with an enrollment token with additional data
     * provided, this field contains that data.
     */
    enrollmentTokenData?: string;
    /**
     * If the device was enrolled with an enrollment token, this field contains
     * the name of the token.
     */
    enrollmentTokenName?: string;
    /**
     * Detailed information about the device hardware.
     */
    hardwareInfo?: Schema$HardwareInfo;
    /**
     * Hardware status samples in chronological order. This information is only
     * available if hardwareStatusEnabled is true in the device&#39;s policy.
     */
    hardwareStatusSamples?: Schema$HardwareStatus[];
    /**
     * The last time the device sent a policy compliance report.
     */
    lastPolicyComplianceReportTime?: string;
    /**
     * The last time the device fetched its policy.
     */
    lastPolicySyncTime?: string;
    /**
     * The last time the device sent a status report.
     */
    lastStatusReportTime?: string;
    /**
     * Events related to memory and storage measurements in chronological order.
     * This information is only available if memoryInfoEnabled is true in the
     * device&#39;s policy.
     */
    memoryEvents?: Schema$MemoryEvent[];
    /**
     * Memory information. This information is only available if
     * memoryInfoEnabled is true in the device&#39;s policy.
     */
    memoryInfo?: Schema$MemoryInfo;
    /**
     * The name of the device in the form
     * enterprises/{enterpriseId}/devices/{deviceId}.
     */
    name?: string;
    /**
     * Device network information. This information is only available if
     * networkInfoEnabled is true in the device&#39;s policy.
     */
    networkInfo?: Schema$NetworkInfo;
    /**
     * Details about policy settings that the device is not compliant with.
     */
    nonComplianceDetails?: Schema$NonComplianceDetail[];
    /**
     * Whether the device is compliant with its policy.
     */
    policyCompliant?: boolean;
    /**
     * The name of the policy applied to the device, in the form
     * enterprises/{enterpriseId}/policies/{policyId}. If not specified, the
     * policy_name for the device&#39;s user is applied. This field can be
     * modified by a patch request. You can specify only the policyId when
     * calling enterprises.devices.patch, as long as the policyId doesn’t
     * contain any slashes. The rest of the policy name is inferred.
     */
    policyName?: string;
    /**
     * Power management events on the device in chronological order. This
     * information is only available if powerManagementEventsEnabled is true in
     * the device&#39;s policy.
     */
    powerManagementEvents?: Schema$PowerManagementEvent[];
    /**
     * If the same physical device has been enrolled multiple times, this field
     * contains its previous device names. The serial number is used as the
     * unique identifier to determine if the same physical device has enrolled
     * previously. The names are in chronological order.
     */
    previousDeviceNames?: string[];
    /**
     * Detailed information about the device software. This information is only
     * available if softwareInfoEnabled is true in the device&#39;s policy.
     */
    softwareInfo?: Schema$SoftwareInfo;
    /**
     * The state to be applied to the device. This field can be modified by a
     * patch request. Note that when calling enterprises.devices.patch, ACTIVE
     * and DISABLED are the only allowable values. To enter the device into a
     * DELETED state, call enterprises.devices.delete.
     */
    state?: string;
    /**
     * The resource name of the user that owns this device in the form
     * enterprises/{enterpriseId}/users/{userId}.
     */
    userName?: string;
  }
  /**
   * Information about security related device settings on device.
   */
  export interface Schema$DeviceSettings {
    /**
     * Whether ADB (https://developer.android.com/studio/command-line/adb.html)
     * is enabled on the device.
     */
    adbEnabled?: boolean;
    /**
     * Whether developer mode is enabled on the device.
     */
    developmentSettingsEnabled?: boolean;
    /**
     * Encryption status from DevicePolicyManager.
     */
    encryptionStatus?: string;
    /**
     * Whether the device is secured with PIN/password.
     */
    isDeviceSecure?: boolean;
    /**
     * Whether the storage encryption is enabled.
     */
    isEncrypted?: boolean;
    /**
     * Whether installing apps from unknown sources is enabled.
     */
    unknownSourcesEnabled?: boolean;
    /**
     * Whether Verify Apps (Google Play Protect
     * (https://support.google.com/googleplay/answer/2812853)) is enabled on the
     * device.
     */
    verifyAppsEnabled?: boolean;
  }
  /**
   * Device display information.
   */
  export interface Schema$Display {
    /**
     * Display density expressed as dots-per-inch.
     */
    density?: number;
    /**
     * Unique display id.
     */
    displayId?: number;
    /**
     * Display height in pixels.
     */
    height?: number;
    /**
     * Name of the display.
     */
    name?: string;
    /**
     * Refresh rate of the display in frames per second.
     */
    refreshRate?: number;
    /**
     * State of the display.
     */
    state?: string;
    /**
     * Display width in pixels.
     */
    width?: number;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated
   * empty messages in your APIs. A typical example is to use it as the request
   * or the response type of an API method. For instance: service Foo {   rpc
   * Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON
   * representation for Empty is empty JSON object {}.
   */
  export interface Schema$Empty {}
  /**
   * An enrollment token.
   */
  export interface Schema$EnrollmentToken {
    /**
     * Optional, arbitrary data associated with the enrollment token. This could
     * contain, for example, the ID of an org unit the device is assigned to
     * after enrollment. After a device enrolls with the token, this data will
     * be exposed in the enrollment_token_data field of the Device resource. The
     * data must be 1024 characters or less; otherwise, the creation request
     * will fail.
     */
    additionalData?: string;
    /**
     * The length of time the enrollment token is valid, ranging from 1 minute
     * to 30 days. If not specified, the default duration is 1 hour.
     */
    duration?: string;
    /**
     * The expiration time of the token. This is a read-only field generated by
     * the server.
     */
    expirationTimestamp?: string;
    /**
     * The name of the enrollment token, which is generated by the server during
     * creation, in the form
     * enterprises/{enterpriseId}/enrollmentTokens/{enrollmentTokenId}.
     */
    name?: string;
    /**
     * The name of the policy initially applied to the enrolled device, in the
     * form enterprises/{enterpriseId}/policies/{policyId}. If not specified,
     * the policy_name for the device’s user is applied. If user_name is also
     * not specified, enterprises/{enterpriseId}/policies/default is applied by
     * default. When updating this field, you can specify only the policyId as
     * long as the policyId doesn’t contain any slashes. The rest of the policy
     * name will be inferred.
     */
    policyName?: string;
    /**
     * A JSON string whose UTF-8 representation can be used to generate a QR
     * code to enroll a device with this enrollment token. To enroll a device
     * using NFC, the NFC record must contain a serialized java.util.Properties
     * representation of the properties in the JSON.
     */
    qrCode?: string;
    /**
     * The token value that&#39;s passed to the device and authorizes the device
     * to enroll. This is a read-only field generated by the server.
     */
    value?: string;
  }
  /**
   * The configuration applied to an enterprise.
   */
  export interface Schema$Enterprise {
    /**
     * Deprecated and unused.
     */
    appAutoApprovalEnabled?: boolean;
    /**
     * The types of Google Pub/Sub notifications enabled for the enterprise.
     */
    enabledNotificationTypes?: string[];
    /**
     * The name of the enterprise displayed to users.
     */
    enterpriseDisplayName?: string;
    /**
     * An image displayed as a logo during device provisioning. Supported types
     * are: image/bmp, image/gif, image/x-ico, image/jpeg, image/png,
     * image/webp, image/vnd.wap.wbmp, image/x-adobe-dng.
     */
    logo?: Schema$ExternalData;
    /**
     * The name of the enterprise which is generated by the server during
     * creation, in the form enterprises/{enterpriseId}.
     */
    name?: string;
    /**
     * A color in RGB format that indicates the predominant color to display in
     * the device management app UI. The color components are stored as follows:
     * (red &lt;&lt; 16) | (green &lt;&lt; 8) | blue, where the value of each
     * component is between 0 and 255, inclusive.
     */
    primaryColor?: number;
    /**
     * The topic that Cloud Pub/Sub notifications are published to, in the form
     * projects/{project}/topics/{topic}. This field is only required if Pub/Sub
     * notifications are enabled.
     */
    pubsubTopic?: string;
    /**
     * Terms and conditions that must be accepted when provisioning a device for
     * this enterprise. A page of terms is generated for each value in this
     * list.
     */
    termsAndConditions?: Schema$TermsAndConditions[];
  }
  /**
   * Data hosted at an external location. The data is to be downloaded by
   * Android Device Policy and verified against the hash.
   */
  export interface Schema$ExternalData {
    /**
     * The base-64 encoded SHA-256 hash of the content hosted at url. If the
     * content doesn&#39;t match this hash, Android Device Policy won&#39;t use
     * the data.
     */
    sha256Hash?: string;
    /**
     * The absolute URL to the data, which must use either the http or https
     * scheme. Android Device Policy doesn&#39;t provide any credentials in the
     * GET request, so the URL must be publicly accessible. Including a long,
     * random component in the URL may be used to prevent attackers from
     * discovering the URL.
     */
    url?: string;
  }
  /**
   * Information about device hardware. The fields related to temperature
   * thresholds are only available if hardwareStatusEnabled is true in the
   * device&#39;s policy.
   */
  export interface Schema$HardwareInfo {
    /**
     * Battery shutdown temperature thresholds in Celsius for each battery on
     * the device.
     */
    batteryShutdownTemperatures?: number[];
    /**
     * Battery throttling temperature thresholds in Celsius for each battery on
     * the device.
     */
    batteryThrottlingTemperatures?: number[];
    /**
     * Brand of the device. For example, Google.
     */
    brand?: string;
    /**
     * CPU shutdown temperature thresholds in Celsius for each CPU on the
     * device.
     */
    cpuShutdownTemperatures?: number[];
    /**
     * CPU throttling temperature thresholds in Celsius for each CPU on the
     * device.
     */
    cpuThrottlingTemperatures?: number[];
    /**
     * Baseband version. For example, MDM9625_104662.22.05.34p.
     */
    deviceBasebandVersion?: string;
    /**
     * GPU shutdown temperature thresholds in Celsius for each GPU on the
     * device.
     */
    gpuShutdownTemperatures?: number[];
    /**
     * GPU throttling temperature thresholds in Celsius for each GPU on the
     * device.
     */
    gpuThrottlingTemperatures?: number[];
    /**
     * Name of the hardware. For example, Angler.
     */
    hardware?: string;
    /**
     * Manufacturer. For example, Motorola.
     */
    manufacturer?: string;
    /**
     * The model of the device. For example, Asus Nexus 7.
     */
    model?: string;
    /**
     * The device serial number.
     */
    serialNumber?: string;
    /**
     * Device skin shutdown temperature thresholds in Celsius.
     */
    skinShutdownTemperatures?: number[];
    /**
     * Device skin throttling temperature thresholds in Celsius.
     */
    skinThrottlingTemperatures?: number[];
  }
  /**
   * Hardware status. Temperatures may be compared to the temperature thresholds
   * available in hardwareInfo to determine hardware health.
   */
  export interface Schema$HardwareStatus {
    /**
     * Current battery temperatures in Celsius for each battery on the device.
     */
    batteryTemperatures?: number[];
    /**
     * Current CPU temperatures in Celsius for each CPU on the device.
     */
    cpuTemperatures?: number[];
    /**
     * CPU usages in percentage for each core available on the device. Usage is
     * 0 for each unplugged core. Empty array implies that CPU usage is not
     * supported in the system.
     */
    cpuUsages?: number[];
    /**
     * The time the measurements were taken.
     */
    createTime?: string;
    /**
     * Fan speeds in RPM for each fan on the device. Empty array means that
     * there are no fans or fan speed is not supported on the system.
     */
    fanSpeeds?: number[];
    /**
     * Current GPU temperatures in Celsius for each GPU on the device.
     */
    gpuTemperatures?: number[];
    /**
     * Current device skin temperatures in Celsius.
     */
    skinTemperatures?: number[];
  }
  /**
   * Response to a request to list devices for a given enterprise.
   */
  export interface Schema$ListDevicesResponse {
    /**
     * The list of devices.
     */
    devices?: Schema$Device[];
    /**
     * If there are more results, a token to retrieve next page of results.
     */
    nextPageToken?: string;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$Operation[];
  }
  /**
   * Response to a request to list policies for a given enterprise.
   */
  export interface Schema$ListPoliciesResponse {
    /**
     * If there are more results, a token to retrieve next page of results.
     */
    nextPageToken?: string;
    /**
     * The list of policies.
     */
    policies?: Schema$Policy[];
  }
  /**
   * Managed property.
   */
  export interface Schema$ManagedProperty {
    /**
     * The default value of the property. BUNDLE_ARRAY properties don&#39;t have
     * a default value.
     */
    defaultValue?: any;
    /**
     * A longer description of the property, providing more detail of what it
     * affects. Localized.
     */
    description?: string;
    /**
     * For CHOICE or MULTISELECT properties, the list of possible entries.
     */
    entries?: Schema$ManagedPropertyEntry[];
    /**
     * The unique key that the app uses to identify the property, e.g.
     * &quot;com.google.android.gm.fieldname&quot;.
     */
    key?: string;
    /**
     * For BUNDLE_ARRAY properties, the list of nested properties. A
     * BUNDLE_ARRAY property is at most two levels deep.
     */
    nestedProperties?: Schema$ManagedProperty[];
    /**
     * The name of the property. Localized.
     */
    title?: string;
    /**
     * The type of the property.
     */
    type?: string;
  }
  /**
   * An entry of a managed property.
   */
  export interface Schema$ManagedPropertyEntry {
    /**
     * The human-readable name of the value. Localized.
     */
    name?: string;
    /**
     * The machine-readable value of the entry, which should be used in the
     * configuration. Not localized.
     */
    value?: string;
  }
  /**
   * An event related to memory and storage measurements.
   */
  export interface Schema$MemoryEvent {
    /**
     * The number of free bytes in the medium, or for EXTERNAL_STORAGE_DETECTED,
     * the total capacity in bytes of the storage medium.
     */
    byteCount?: string;
    /**
     * The creation time of the event.
     */
    createTime?: string;
    /**
     * Event type.
     */
    eventType?: string;
  }
  /**
   * Information about device memory and storage.
   */
  export interface Schema$MemoryInfo {
    /**
     * Total internal storage on device in bytes.
     */
    totalInternalStorage?: string;
    /**
     * Total RAM on device in bytes.
     */
    totalRam?: string;
  }
  /**
   * Device network info.
   */
  export interface Schema$NetworkInfo {
    /**
     * IMEI number of the GSM device. For example, A1000031212.
     */
    imei?: string;
    /**
     * MEID number of the CDMA device. For example, A00000292788E1.
     */
    meid?: string;
    /**
     * Alphabetic name of current registered operator. For example, Vodafone.
     */
    networkOperatorName?: string;
    /**
     * Wi-Fi MAC address of the device. For example, 7c:11:11:11:11:11.
     */
    wifiMacAddress?: string;
  }
  /**
   * Provides detail about non-compliance with a policy setting.
   */
  export interface Schema$NonComplianceDetail {
    /**
     * If the policy setting could not be applied, the current value of the
     * setting on the device.
     */
    currentValue?: any;
    /**
     * For settings with nested fields, if a particular nested field is out of
     * compliance, this specifies the full path to the offending field. The path
     * is formatted in the same way the policy JSON field would be referenced in
     * JavaScript, that is: 1) For object-typed fields, the field name is
     * followed by a dot then by a  subfield name. 2) For array-typed fields,
     * the field name is followed by the array index  enclosed in brackets. For
     * example, to indicate a problem with the url field in the externalData
     * field in the 3rd application, the path would be
     * applications[2].externalData.url
     */
    fieldPath?: string;
    /**
     * If package_name is set and the non-compliance reason is APP_NOT_INSTALLED
     * or APP_NOT_UPDATED, the detailed reason the app can&#39;t be installed or
     * updated.
     */
    installationFailureReason?: string;
    /**
     * The reason the device is not in compliance with the setting.
     */
    nonComplianceReason?: string;
    /**
     * The package name indicating which app is out of compliance, if
     * applicable.
     */
    packageName?: string;
    /**
     * The name of the policy setting. This is the JSON field name of a
     * top-level Policy  field.
     */
    settingName?: string;
  }
  /**
   * A compliance rule condition which is satisfied if there exists any matching
   * NonComplianceDetail for the device. A NonComplianceDetail matches a
   * NonComplianceDetailCondition if all the fields which are set within the
   * NonComplianceDetailCondition match the corresponding NonComplianceDetail
   * fields.
   */
  export interface Schema$NonComplianceDetailCondition {
    /**
     * The reason the device is not in compliance with the setting. If not set,
     * then this condition matches any reason.
     */
    nonComplianceReason?: string;
    /**
     * The package name of the app that&#39;s out of compliance. If not set,
     * then this condition matches any package name.
     */
    packageName?: string;
    /**
     * The name of the policy setting. This is the JSON field name of a
     * top-level Policy field. If not set, then this condition matches any
     * setting name.
     */
    settingName?: string;
  }
  /**
   * This resource represents a long-running operation that is the result of a
   * network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is false, it means the operation is still in progress. If
     * true, the operation is completed, and either error or response is
     * available.
     */
    done?: boolean;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
    /**
     * Service-specific metadata associated with the operation. It typically
     * contains progress information and common metadata such as create time.
     * Some services might not provide such metadata. Any method that returns a
     * long-running operation should document the metadata type, if any.
     */
    metadata?: any;
    /**
     * The server-assigned name, which is only unique within the same service
     * that originally returns it. If you use the default HTTP mapping, the name
     * should have the format of operations/some/unique/name.
     */
    name?: string;
    /**
     * The normal response of the operation in case of success. If the original
     * method returns no data on success, such as Delete, the response is
     * google.protobuf.Empty. If the original method is standard
     * Get/Create/Update, the response should be the resource. For other
     * methods, the response should have the type XxxResponse, where Xxx is the
     * original method name. For example, if the original method name is
     * TakeSnapshot(), the inferred response type is TakeSnapshotResponse.
     */
    response?: any;
  }
  /**
   * A list of package names.
   */
  export interface Schema$PackageNameList {
    /**
     * A list of package names.
     */
    packageNames?: string[];
  }
  /**
   * Requirements for the password used to unlock a device.
   */
  export interface Schema$PasswordRequirements {
    /**
     * Number of incorrect device-unlock passwords that can be entered before a
     * device is wiped. A value of 0 means there is no restriction.
     */
    maximumFailedPasswordsForWipe?: number;
    /**
     * Password expiration timeout.
     */
    passwordExpirationTimeout?: string;
    /**
     * The length of the password history. After setting this field, the user
     * won&#39;t be able to enter a new password that is the same as any
     * password in the history. A value of 0 means there is no restriction.
     */
    passwordHistoryLength?: number;
    /**
     * The minimum allowed password length. A value of 0 means there is no
     * restriction. Only enforced when password_quality is NUMERIC,
     * NUMERIC_COMPLEX, ALPHABETIC, ALPHANUMERIC, or COMPLEX.
     */
    passwordMinimumLength?: number;
    /**
     * Minimum number of letters required in the password. Only enforced when
     * password_quality is COMPLEX.
     */
    passwordMinimumLetters?: number;
    /**
     * Minimum number of lower case letters required in the password. Only
     * enforced when password_quality is COMPLEX.
     */
    passwordMinimumLowerCase?: number;
    /**
     * Minimum number of non-letter characters (numerical digits or symbols)
     * required in the password. Only enforced when password_quality is COMPLEX.
     */
    passwordMinimumNonLetter?: number;
    /**
     * Minimum number of numerical digits required in the password. Only
     * enforced when password_quality is COMPLEX.
     */
    passwordMinimumNumeric?: number;
    /**
     * Minimum number of symbols required in the password. Only enforced when
     * password_quality is COMPLEX.
     */
    passwordMinimumSymbols?: number;
    /**
     * Minimum number of upper case letters required in the password. Only
     * enforced when password_quality is COMPLEX.
     */
    passwordMinimumUpperCase?: number;
    /**
     * The required password quality.
     */
    passwordQuality?: string;
  }
  /**
   * Configuration for an Android permission and its grant state.
   */
  export interface Schema$PermissionGrant {
    /**
     * The android permission, e.g. android.permission.READ_CALENDAR.
     */
    permission?: string;
    /**
     * The policy for granting the permission.
     */
    policy?: string;
  }
  /**
   * A default activity for handling intents that match a particular intent
   * filter.
   */
  export interface Schema$PersistentPreferredActivity {
    /**
     * The intent actions to match in the filter. If any actions are included in
     * the filter, then an intent&#39;s action must be one of those values for
     * it to match. If no actions are included, the intent action is ignored.
     */
    actions?: string[];
    /**
     * The intent categories to match in the filter. An intent includes the
     * categories that it requires, all of which must be included in the filter
     * in order to match. In other words, adding a category to the filter has no
     * impact on matching unless that category is specified in the intent.
     */
    categories?: string[];
    /**
     * The activity that should be the default intent handler. This should be an
     * Android component name, e.g. com.android.enterprise.app/.MainActivity.
     * Alternatively, the value may be the package name of an app, which causes
     * Android Device Policy to choose an appropriate activity from the app to
     * handle the intent.
     */
    receiverActivity?: string;
  }
  /**
   * A policy resources represents a group settings that govern the behavior of
   * a managed device and the apps installed on it.
   */
  export interface Schema$Policy {
    /**
     * Account types that can&#39;t be managed by the user.
     */
    accountTypesWithManagementDisabled?: string[];
    /**
     * Whether adding new users and profiles is disabled.
     */
    addUserDisabled?: boolean;
    /**
     * Whether adjusting the master volume is disabled.
     */
    adjustVolumeDisabled?: boolean;
    /**
     * Configuration for an always-on VPN connection. Use with
     * vpn_config_disabled to prevent modification of this setting.
     */
    alwaysOnVpnPackage?: Schema$AlwaysOnVpnPackage;
    /**
     * The app tracks for Android Device Policy the device can access. The
     * device receives the latest version among all accessible tracks. If no
     * tracks are specified, then the device only uses the production track.
     */
    androidDevicePolicyTracks?: string[];
    /**
     * The app auto update policy, which controls when automatic app updates can
     * be applied.
     */
    appAutoUpdatePolicy?: string;
    /**
     * Policy applied to apps.
     */
    applications?: Schema$ApplicationPolicy[];
    /**
     * Whether auto time is required, which prevents the user from manually
     * setting the date and time.
     */
    autoTimeRequired?: boolean;
    /**
     * Whether applications other than the ones configured in applications are
     * blocked from being installed. When set, applications that were installed
     * under a previous policy but no longer appear in the policy are
     * automatically uninstalled.
     */
    blockApplicationsEnabled?: boolean;
    /**
     * Whether configuring bluetooth is disabled.
     */
    bluetoothConfigDisabled?: boolean;
    /**
     * Whether bluetooth contact sharing is disabled.
     */
    bluetoothContactSharingDisabled?: boolean;
    /**
     * Whether bluetooth is disabled. Prefer this setting over
     * bluetooth_config_disabled because bluetooth_config_disabled can be
     * bypassed by the user.
     */
    bluetoothDisabled?: boolean;
    /**
     * Whether all cameras on the device are disabled.
     */
    cameraDisabled?: boolean;
    /**
     * Whether configuring cell broadcast is disabled.
     */
    cellBroadcastsConfigDisabled?: boolean;
    /**
     * Rules for automatically choosing a private key and certificate to
     * authenticate the device to a server. The rules are ordered by increasing
     * precedence, so if an outgoing request matches more than one rule, the
     * last rule defines which private key to use.
     */
    choosePrivateKeyRules?: Schema$ChoosePrivateKeyRule[];
    /**
     * Rules declaring which mitigating actions to take when a device is not
     * compliant with its policy. When the conditions for multiple rules are
     * satisfied, all of the mitigating actions for the rules are taken. There
     * is a maximum limit of 100 rules.
     */
    complianceRules?: Schema$ComplianceRule[];
    /**
     * Whether creating windows besides app windows is disabled.
     */
    createWindowsDisabled?: boolean;
    /**
     * Whether configuring user credentials is disabled.
     */
    credentialsConfigDisabled?: boolean;
    /**
     * Whether roaming data services are disabled.
     */
    dataRoamingDisabled?: boolean;
    /**
     * Whether the user is allowed to enable debugging features.
     */
    debuggingFeaturesAllowed?: boolean;
    /**
     * The default permission policy for runtime permission requests.
     */
    defaultPermissionPolicy?: string;
    /**
     * The device owner information to be shown on the lock screen.
     */
    deviceOwnerLockScreenInfo?: Schema$UserFacingMessage;
    /**
     * Whether encryption is enabled
     */
    encryptionPolicy?: string;
    /**
     * Whether app verification is force-enabled.
     */
    ensureVerifyAppsEnabled?: boolean;
    /**
     * Whether factory resetting from settings is disabled.
     */
    factoryResetDisabled?: boolean;
    /**
     * Email addresses of device administrators for factory reset protection.
     * When the device is factory reset, it will require one of these admins to
     * log in with the Google account email and password to unlock the device.
     * If no admins are specified, the device won&#39;t provide factory reset
     * protection.
     */
    frpAdminEmails?: string[];
    /**
     * Whether the user is allowed to have fun. Controls whether the Easter egg
     * game in Settings is disabled.
     */
    funDisabled?: boolean;
    /**
     * Whether user installation of apps is disabled.
     */
    installAppsDisabled?: boolean;
    /**
     * Whether the user is allowed to enable the &quot;Unknown Sources&quot;
     * setting, which allows installation of apps from unknown sources.
     */
    installUnknownSourcesAllowed?: boolean;
    /**
     * Whether the keyguard is disabled.
     */
    keyguardDisabled?: boolean;
    /**
     * Disabled keyguard customizations, such as widgets.
     */
    keyguardDisabledFeatures?: string[];
    /**
     * Whether the kiosk custom launcher is enabled. This replaces the home
     * screen with a launcher that locks down the device to the apps installed
     * via the applications setting. The apps appear on a single page in
     * alphabetical order. It is recommended to also use status_bar_disabled to
     * block access to device settings.
     */
    kioskCustomLauncherEnabled?: boolean;
    /**
     * The degree of location detection enabled. The user may change the value
     * unless the user is otherwise blocked from accessing device settings.
     */
    locationMode?: string;
    /**
     * A message displayed to the user in the device administators settings
     * screen.
     */
    longSupportMessage?: Schema$UserFacingMessage;
    /**
     * Maximum time in milliseconds for user activity until the device locks. A
     * value of 0 means there is no restriction.
     */
    maximumTimeToLock?: string;
    /**
     * Whether configuring mobile networks is disabled.
     */
    mobileNetworksConfigDisabled?: boolean;
    /**
     * Whether adding or removing accounts is disabled.
     */
    modifyAccountsDisabled?: boolean;
    /**
     * Whether the user mounting physical external media is disabled.
     */
    mountPhysicalMediaDisabled?: boolean;
    /**
     * The name of the policy in the form
     * enterprises/{enterpriseId}/policies/{policyId}.
     */
    name?: string;
    /**
     * Whether the network escape hatch is enabled. If a network connection
     * can&#39;t be made at boot time, the escape hatch prompts the user to
     * temporarily connect to a network in order to refresh the device policy.
     * After applying policy, the temporary network will be forgotten and the
     * device will continue booting. This prevents being unable to connect to a
     * network if there is no suitable network in the last policy and the device
     * boots into an app in lock task mode, or the user is otherwise unable to
     * reach device settings.
     */
    networkEscapeHatchEnabled?: boolean;
    /**
     * Whether resetting network settings is disabled.
     */
    networkResetDisabled?: boolean;
    /**
     * Network configuration for the device. See configure networks for more
     * information.
     */
    openNetworkConfiguration?: any;
    /**
     * Whether using NFC to beam data from apps is disabled.
     */
    outgoingBeamDisabled?: boolean;
    /**
     * Whether outgoing calls are disabled.
     */
    outgoingCallsDisabled?: boolean;
    /**
     * Password requirements.
     */
    passwordRequirements?: Schema$PasswordRequirements;
    /**
     * If present, only the input methods provided by packages in this list are
     * permitted. If this field is present, but the list is empty, then only
     * system input methods are permitted.
     */
    permittedInputMethods?: Schema$PackageNameList;
    /**
     * Default intent handler activities.
     */
    persistentPreferredActivities?: Schema$PersistentPreferredActivity[];
    /**
     * Allows showing UI on a device for a user to choose a private key alias if
     * there are no matching rules in ChoosePrivateKeyRules. For devices below
     * Android P, setting this may leave enterprise keys vulnerable.
     */
    privateKeySelectionEnabled?: boolean;
    /**
     * The network-independent global HTTP proxy. Typically proxies should be
     * configured per-network in open_network_configuration. However for unusual
     * configurations like general internal filtering a global HTTP proxy may be
     * useful. If the proxy is not accessible, network access may break. The
     * global proxy is only a recommendation and some apps may ignore it.
     */
    recommendedGlobalProxy?: Schema$ProxyInfo;
    /**
     * Whether removing other users is disabled.
     */
    removeUserDisabled?: boolean;
    /**
     * Whether rebooting the device into safe boot is disabled.
     */
    safeBootDisabled?: boolean;
    /**
     * Whether screen capture is disabled.
     */
    screenCaptureDisabled?: boolean;
    /**
     * Whether changing the user icon is disabled.
     */
    setUserIconDisabled?: boolean;
    /**
     * Whether changing the wallpaper is disabled.
     */
    setWallpaperDisabled?: boolean;
    /**
     * Whether location sharing is disabled.
     */
    shareLocationDisabled?: boolean;
    /**
     * A message displayed to the user in the settings screen wherever
     * functionality has been disabled by the admin.
     */
    shortSupportMessage?: Schema$UserFacingMessage;
    /**
     * Flag to skip hints on the first use. Enterprise admin can enable the
     * system recommendation for apps to skip their user tutorial and other
     * introductory hints on first start-up.
     */
    skipFirstUseHintsEnabled?: boolean;
    /**
     * Whether sending and receiving SMS messages is disabled.
     */
    smsDisabled?: boolean;
    /**
     * Whether the status bar is disabled. This disables notifications, quick
     * settings, and other screen overlays that allow escape from full-screen
     * mode.
     */
    statusBarDisabled?: boolean;
    /**
     * Status reporting settings
     */
    statusReportingSettings?: Schema$StatusReportingSettings;
    /**
     * The battery plugged in modes for which the device stays on. When using
     * this setting, it is recommended to clear maximum_time_to_lock so that the
     * device doesn&#39;t lock itself while it stays on.
     */
    stayOnPluggedModes?: string[];
    /**
     * The system update policy, which controls how OS updates are applied. If
     * the update type is WINDOWED, the update window will automatically apply
     * to Play app updates as well.
     */
    systemUpdate?: Schema$SystemUpdate;
    /**
     * Whether configuring tethering and portable hotspots is disabled.
     */
    tetheringConfigDisabled?: boolean;
    /**
     * Whether user uninstallation of applications is disabled.
     */
    uninstallAppsDisabled?: boolean;
    /**
     * Whether the microphone is muted and adjusting microphone volume is
     * disabled.
     */
    unmuteMicrophoneDisabled?: boolean;
    /**
     * Whether transferring files over USB is disabled.
     */
    usbFileTransferDisabled?: boolean;
    /**
     * Allows admins to toggle whether USB storge is enabled or disabled on
     * user&#39;s devices.
     */
    usbMassStorageEnabled?: boolean;
    /**
     * The version of the policy. This is a read-only field. The version is
     * incremented each time the policy is updated.
     */
    version?: string;
    /**
     * Whether configuring VPN is disabled.
     */
    vpnConfigDisabled?: boolean;
    /**
     * Whether configuring Wi-Fi access points is disabled.
     */
    wifiConfigDisabled?: boolean;
    /**
     * Whether Wi-Fi networks defined in Open Network Configuration are locked
     * so they can&#39;t be edited by the user.
     */
    wifiConfigsLockdownEnabled?: boolean;
  }
  /**
   * A power management event.
   */
  export interface Schema$PowerManagementEvent {
    /**
     * For BATTERY_LEVEL_COLLECTED events, the battery level as a percentage.
     */
    batteryLevel?: number;
    /**
     * The creation time of the event.
     */
    createTime?: string;
    /**
     * Event type.
     */
    eventType?: string;
  }
  /**
   * Configuration info for an HTTP proxy. For a direct proxy, set the host,
   * port, and excluded_hosts fields. For a PAC script proxy, set the pac_uri
   * field.
   */
  export interface Schema$ProxyInfo {
    /**
     * For a direct proxy, the hosts for which the proxy is bypassed. The host
     * names may contain wildcards such as *.example.com.
     */
    excludedHosts?: string[];
    /**
     * The host of the direct proxy.
     */
    host?: string;
    /**
     * The URI of the PAC script used to configure the proxy.
     */
    pacUri?: string;
    /**
     * The port of the direct proxy.
     */
    port?: number;
  }
  /**
   * An enterprise signup URL.
   */
  export interface Schema$SignupUrl {
    /**
     * The name of the resource. Use this value in the signupUrl field when
     * calling enterprises.create to complete the enterprise signup flow.
     */
    name?: string;
    /**
     * A URL where an enterprise admin can register their enterprise. The page
     * can&#39;t be rendered in an iframe.
     */
    url?: string;
  }
  /**
   * Information about device software.
   */
  export interface Schema$SoftwareInfo {
    /**
     * Android build ID string meant for displaying to the user. For example,
     * shamu-userdebug 6.0.1 MOB30I 2756745 dev-keys.
     */
    androidBuildNumber?: string;
    /**
     * Build time.
     */
    androidBuildTime?: string;
    /**
     * The Android Device Policy app version code.
     */
    androidDevicePolicyVersionCode?: number;
    /**
     * The Android Device Policy app version as displayed to the user.
     */
    androidDevicePolicyVersionName?: string;
    /**
     * The user-visible Android version string. For example, 6.0.1.
     */
    androidVersion?: string;
    /**
     * The system bootloader version number, e.g. 0.6.7.
     */
    bootloaderVersion?: string;
    /**
     * SHA-256 hash of android.content.pm.Signature
     * (https://developer.android.com/reference/android/content/pm/Signature.html)
     * associated with the system package, which can be used to verify that the
     * system build hasn&#39;t been modified.
     */
    deviceBuildSignature?: string;
    /**
     * Kernel version, for example, 2.6.32.9-g103d848.
     */
    deviceKernelVersion?: string;
    /**
     * Security patch level, e.g. 2016-05-01.
     */
    securityPatchLevel?: string;
  }
  /**
   * The Status type defines a logical error model that is suitable for
   * different programming environments, including REST APIs and RPC APIs. It is
   * used by gRPC (https://github.com/grpc). The error model is designed to be:
   * Simple to use and understand for most users Flexible enough to meet
   * unexpected needsOverviewThe Status message contains three pieces of data:
   * error code, error message, and error details. The error code should be an
   * enum value of google.rpc.Code, but it may accept additional error codes if
   * needed. The error message should be a developer-facing English message that
   * helps developers understand and resolve the error. If a localized
   * user-facing error message is needed, put the localized message in the error
   * details or localize it in the client. The optional error details may
   * contain arbitrary information about the error. There is a predefined set of
   * error detail types in the package google.rpc that can be used for common
   * error conditions.Language mappingThe Status message is the logical
   * representation of the error model, but it is not necessarily the actual
   * wire format. When the Status message is exposed in different client
   * libraries and different wire protocols, it can be mapped differently. For
   * example, it will likely be mapped to some exceptions in Java, but more
   * likely mapped to some error codes in C.Other usesThe error model and the
   * Status message can be used in a variety of environments, either with or
   * without APIs, to provide a consistent developer experience across different
   * environments.Example uses of this error model include: Partial errors. If a
   * service needs to return partial errors to the client, it may embed the
   * Status in the normal response to indicate the partial errors. Workflow
   * errors. A typical workflow has multiple steps. Each step may have a Status
   * message for error reporting. Batch operations. If a client uses batch
   * request and batch response, the Status message should be used directly
   * inside batch response, one for each error sub-response. Asynchronous
   * operations. If an API call embeds asynchronous operation results in its
   * response, the status of those operations should be represented directly
   * using the Status message. Logging. If some API errors are stored in logs,
   * the message Status could be used directly after any stripping needed for
   * security/privacy reasons.
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number;
    /**
     * A list of messages that carry the error details. There is a common set of
     * message types for APIs to use.
     */
    details?: any[];
    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  }
  /**
   * Settings controlling the behavior of status reports.
   */
  export interface Schema$StatusReportingSettings {
    /**
     * Whether app reports are enabled.
     */
    applicationReportsEnabled?: boolean;
    /**
     * Whether device settings reporting is enabled.
     */
    deviceSettingsEnabled?: boolean;
    /**
     * Whether displays reporting is enabled.
     */
    displayInfoEnabled?: boolean;
    /**
     * Whether hardware status reporting is enabled.
     */
    hardwareStatusEnabled?: boolean;
    /**
     * Whether memory info reporting is enabled.
     */
    memoryInfoEnabled?: boolean;
    /**
     * Whether network info reporting is enabled.
     */
    networkInfoEnabled?: boolean;
    /**
     * Whether power management event reporting is enabled.
     */
    powerManagementEventsEnabled?: boolean;
    /**
     * Whether software info reporting is enabled.
     */
    softwareInfoEnabled?: boolean;
  }
  /**
   * Configuration for managing system updates
   */
  export interface Schema$SystemUpdate {
    /**
     * If the type is WINDOWED, the end of the maintenance window, measured as
     * the number of minutes after midnight in device&#39;s local time. This
     * value must be between 0 and 1439, inclusive. If this value is less than
     * start_minutes, then the maintenance window spans midnight. If the
     * maintenance window specified is smaller than 30 minutes, the actual
     * window is extended to 30 minutes beyond the start time.
     */
    endMinutes?: number;
    /**
     * If the type is WINDOWED, the start of the maintenance window, measured as
     * the number of minutes after midnight in the device&#39;s local time. This
     * value must be between 0 and 1439, inclusive.
     */
    startMinutes?: number;
    /**
     * The type of system update to configure.
     */
    type?: string;
  }
  /**
   * A terms and conditions page to be accepted during provisioning.
   */
  export interface Schema$TermsAndConditions {
    /**
     * A well-formatted HTML string. It will be parsed on the client with
     * android.text.Html#fromHtml.
     */
    content?: Schema$UserFacingMessage;
    /**
     * A short header which appears above the HTML content.
     */
    header?: Schema$UserFacingMessage;
  }
  /**
   * Provides a user-facing message with locale info. The maximum message length
   * is 4096 characters.
   */
  export interface Schema$UserFacingMessage {
    /**
     * The default message displayed if no localized message is specified or the
     * user&#39;s locale doesn&#39;t match with any of the localized messages. A
     * default message must be provided if any localized messages are provided.
     */
    defaultMessage?: string;
    /**
     * A map containing &lt;locale, message&gt; pairs, where locale is a
     * well-formed BCP 47 language
     * (https://www.w3.org/International/articles/language-tags/) code, such as
     * en-US, es-ES, or fr.
     */
    localizedMessages?: any;
  }
  /**
   * A web token used to access the managed Google Play iframe.
   */
  export interface Schema$WebToken {
    /**
     * The name of the web token, which is generated by the server during
     * creation in the form enterprises/{enterpriseId}/webTokens/{webTokenId}.
     */
    name?: string;
    /**
     * The URL of the parent frame hosting the iframe with the embedded UI. To
     * prevent XSS, the iframe may not be hosted at other URLs. The URL must use
     * the https scheme.
     */
    parentFrameUrl?: string;
    /**
     * Permissions available to an admin in the embedded UI. An admin must have
     * all of these permissions in order to view the UI.
     */
    permissions?: string[];
    /**
     * The token value which is used in the hosting page to generate the iframe
     * with the embedded UI. This is a read-only field generated by the server.
     */
    value?: string;
  }


  export class Resource$Enterprises {
    root: Androidmanagement;
    applications: Resource$Enterprises$Applications;
    devices: Resource$Enterprises$Devices;
    enrollmentTokens: Resource$Enterprises$Enrollmenttokens;
    policies: Resource$Enterprises$Policies;
    webTokens: Resource$Enterprises$Webtokens;
    constructor(root: Androidmanagement) {
      this.root = root;
      this.getRoot.bind(this);
      this.applications = new Resource$Enterprises$Applications(root);
      this.devices = new Resource$Enterprises$Devices(root);
      this.enrollmentTokens = new Resource$Enterprises$Enrollmenttokens(root);
      this.policies = new Resource$Enterprises$Policies(root);
      this.webTokens = new Resource$Enterprises$Webtokens(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * androidmanagement.enterprises.create
     * @desc Creates an enterprise. This is the last step in the enterprise
     * signup flow.
     * @alias androidmanagement.enterprises.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.enterpriseToken The enterprise token appended to the callback URL.
     * @param {string=} params.projectId The ID of the Google Cloud Platform project which will own the enterprise.
     * @param {string=} params.signupUrlName The name of the SignupUrl used to sign up for the enterprise.
     * @param {().Enterprise} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Enterprises$Create,
        options?: MethodOptions): AxiosPromise<Schema$Enterprise>;
    create(
        params: Params$Resource$Enterprises$Create,
        options: MethodOptions|BodyResponseCallback<Schema$Enterprise>,
        callback: BodyResponseCallback<Schema$Enterprise>): void;
    create(
        params: Params$Resource$Enterprises$Create,
        callback: BodyResponseCallback<Schema$Enterprise>): void;
    create(callback: BodyResponseCallback<Schema$Enterprise>): void;
    create(
        paramsOrCallback?: Params$Resource$Enterprises$Create|
        BodyResponseCallback<Schema$Enterprise>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Enterprise>,
        callback?: BodyResponseCallback<Schema$Enterprise>):
        void|AxiosPromise<Schema$Enterprise> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Enterprises$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/enterprises').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Enterprise>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Enterprise>(parameters);
      }
    }


    /**
     * androidmanagement.enterprises.get
     * @desc Gets an enterprise.
     * @alias androidmanagement.enterprises.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the enterprise in the form enterprises/{enterpriseId}.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Enterprises$Get,
        options?: MethodOptions): AxiosPromise<Schema$Enterprise>;
    get(params: Params$Resource$Enterprises$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Enterprise>,
        callback: BodyResponseCallback<Schema$Enterprise>): void;
    get(params: Params$Resource$Enterprises$Get,
        callback: BodyResponseCallback<Schema$Enterprise>): void;
    get(callback: BodyResponseCallback<Schema$Enterprise>): void;
    get(paramsOrCallback?: Params$Resource$Enterprises$Get|
        BodyResponseCallback<Schema$Enterprise>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Enterprise>,
        callback?: BodyResponseCallback<Schema$Enterprise>):
        void|AxiosPromise<Schema$Enterprise> {
      let params = (paramsOrCallback || {}) as Params$Resource$Enterprises$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        createAPIRequest<Schema$Enterprise>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Enterprise>(parameters);
      }
    }


    /**
     * androidmanagement.enterprises.patch
     * @desc Updates an enterprise.
     * @alias androidmanagement.enterprises.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the enterprise in the form enterprises/{enterpriseId}.
     * @param {string=} params.updateMask The field mask indicating the fields to update. If not set, all modifiable fields will be modified.
     * @param {().Enterprise} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(params?: Params$Resource$Enterprises$Patch, options?: MethodOptions):
        AxiosPromise<Schema$Enterprise>;
    patch(
        params: Params$Resource$Enterprises$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$Enterprise>,
        callback: BodyResponseCallback<Schema$Enterprise>): void;
    patch(
        params: Params$Resource$Enterprises$Patch,
        callback: BodyResponseCallback<Schema$Enterprise>): void;
    patch(callback: BodyResponseCallback<Schema$Enterprise>): void;
    patch(
        paramsOrCallback?: Params$Resource$Enterprises$Patch|
        BodyResponseCallback<Schema$Enterprise>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Enterprise>,
        callback?: BodyResponseCallback<Schema$Enterprise>):
        void|AxiosPromise<Schema$Enterprise> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Enterprises$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        createAPIRequest<Schema$Enterprise>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Enterprise>(parameters);
      }
    }
  }

  export interface Params$Resource$Enterprises$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The enterprise token appended to the callback URL.
     */
    enterpriseToken?: string;
    /**
     * The ID of the Google Cloud Platform project which will own the
     * enterprise.
     */
    projectId?: string;
    /**
     * The name of the SignupUrl used to sign up for the enterprise.
     */
    signupUrlName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Enterprise;
  }
  export interface Params$Resource$Enterprises$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the enterprise in the form enterprises/{enterpriseId}.
     */
    name?: string;
  }
  export interface Params$Resource$Enterprises$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the enterprise in the form enterprises/{enterpriseId}.
     */
    name?: string;
    /**
     * The field mask indicating the fields to update. If not set, all
     * modifiable fields will be modified.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Enterprise;
  }

  export class Resource$Enterprises$Applications {
    root: Androidmanagement;
    constructor(root: Androidmanagement) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * androidmanagement.enterprises.applications.get
     * @desc Gets info about an application.
     * @alias androidmanagement.enterprises.applications.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.languageCode The preferred language for localized application info, as a BCP47 tag (e.g. "en-US", "de"). If not specified the default language of the application will be used.
     * @param {string} params.name The name of the application in the form enterprises/{enterpriseId}/applications/{package_name}.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Enterprises$Applications$Get,
        options?: MethodOptions): AxiosPromise<Schema$Application>;
    get(params: Params$Resource$Enterprises$Applications$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Application>,
        callback: BodyResponseCallback<Schema$Application>): void;
    get(params: Params$Resource$Enterprises$Applications$Get,
        callback: BodyResponseCallback<Schema$Application>): void;
    get(callback: BodyResponseCallback<Schema$Application>): void;
    get(paramsOrCallback?: Params$Resource$Enterprises$Applications$Get|
        BodyResponseCallback<Schema$Application>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Application>,
        callback?: BodyResponseCallback<Schema$Application>):
        void|AxiosPromise<Schema$Application> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Enterprises$Applications$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Applications$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        createAPIRequest<Schema$Application>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Application>(parameters);
      }
    }
  }

  export interface Params$Resource$Enterprises$Applications$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The preferred language for localized application info, as a BCP47 tag
     * (e.g. "en-US", "de"). If not specified the default language of the
     * application will be used.
     */
    languageCode?: string;
    /**
     * The name of the application in the form
     * enterprises/{enterpriseId}/applications/{package_name}.
     */
    name?: string;
  }


  export class Resource$Enterprises$Devices {
    root: Androidmanagement;
    operations: Resource$Enterprises$Devices$Operations;
    constructor(root: Androidmanagement) {
      this.root = root;
      this.getRoot.bind(this);
      this.operations = new Resource$Enterprises$Devices$Operations(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * androidmanagement.enterprises.devices.delete
     * @desc Deletes a device. This operation wipes the device.
     * @alias androidmanagement.enterprises.devices.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Enterprises$Devices$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Enterprises$Devices$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Enterprises$Devices$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Enterprises$Devices$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Enterprises$Devices$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Devices$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
     * androidmanagement.enterprises.devices.get
     * @desc Gets a device.
     * @alias androidmanagement.enterprises.devices.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Enterprises$Devices$Get,
        options?: MethodOptions): AxiosPromise<Schema$Device>;
    get(params: Params$Resource$Enterprises$Devices$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Device>,
        callback: BodyResponseCallback<Schema$Device>): void;
    get(params: Params$Resource$Enterprises$Devices$Get,
        callback: BodyResponseCallback<Schema$Device>): void;
    get(callback: BodyResponseCallback<Schema$Device>): void;
    get(paramsOrCallback?: Params$Resource$Enterprises$Devices$Get|
        BodyResponseCallback<Schema$Device>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Device>,
        callback?: BodyResponseCallback<Schema$Device>):
        void|AxiosPromise<Schema$Device> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Enterprises$Devices$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Devices$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        createAPIRequest<Schema$Device>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Device>(parameters);
      }
    }


    /**
     * androidmanagement.enterprises.devices.issueCommand
     * @desc Issues a command to a device. The Operation resource returned
     * contains a Command in its metadata field. Use the get operation method to
     * get the status of the command.
     * @alias androidmanagement.enterprises.devices.issueCommand
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}.
     * @param {().Command} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    issueCommand(
        params?: Params$Resource$Enterprises$Devices$Issuecommand,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    issueCommand(
        params: Params$Resource$Enterprises$Devices$Issuecommand,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    issueCommand(
        params: Params$Resource$Enterprises$Devices$Issuecommand,
        callback: BodyResponseCallback<Schema$Operation>): void;
    issueCommand(callback: BodyResponseCallback<Schema$Operation>): void;
    issueCommand(
        paramsOrCallback?: Params$Resource$Enterprises$Devices$Issuecommand|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Enterprises$Devices$Issuecommand;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Devices$Issuecommand;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}:issueCommand')
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * androidmanagement.enterprises.devices.list
     * @desc Lists devices for a given enterprise.
     * @alias androidmanagement.enterprises.devices.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The requested page size. The actual page size may be fixed to a min or max value.
     * @param {string=} params.pageToken A token identifying a page of results returned by the server.
     * @param {string} params.parent The name of the enterprise in the form enterprises/{enterpriseId}.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Enterprises$Devices$List,
        options?: MethodOptions): AxiosPromise<Schema$ListDevicesResponse>;
    list(
        params: Params$Resource$Enterprises$Devices$List,
        options: MethodOptions|BodyResponseCallback<Schema$ListDevicesResponse>,
        callback: BodyResponseCallback<Schema$ListDevicesResponse>): void;
    list(
        params: Params$Resource$Enterprises$Devices$List,
        callback: BodyResponseCallback<Schema$ListDevicesResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListDevicesResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Enterprises$Devices$List|
        BodyResponseCallback<Schema$ListDevicesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListDevicesResponse>,
        callback?: BodyResponseCallback<Schema$ListDevicesResponse>):
        void|AxiosPromise<Schema$ListDevicesResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Enterprises$Devices$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Devices$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+parent}/devices')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListDevicesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListDevicesResponse>(parameters);
      }
    }


    /**
     * androidmanagement.enterprises.devices.patch
     * @desc Updates a device.
     * @alias androidmanagement.enterprises.devices.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}.
     * @param {string=} params.updateMask The field mask indicating the fields to update. If not set, all modifiable fields will be modified.
     * @param {().Device} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?: Params$Resource$Enterprises$Devices$Patch,
        options?: MethodOptions): AxiosPromise<Schema$Device>;
    patch(
        params: Params$Resource$Enterprises$Devices$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$Device>,
        callback: BodyResponseCallback<Schema$Device>): void;
    patch(
        params: Params$Resource$Enterprises$Devices$Patch,
        callback: BodyResponseCallback<Schema$Device>): void;
    patch(callback: BodyResponseCallback<Schema$Device>): void;
    patch(
        paramsOrCallback?: Params$Resource$Enterprises$Devices$Patch|
        BodyResponseCallback<Schema$Device>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Device>,
        callback?: BodyResponseCallback<Schema$Device>):
        void|AxiosPromise<Schema$Device> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Enterprises$Devices$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Devices$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        createAPIRequest<Schema$Device>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Device>(parameters);
      }
    }
  }

  export interface Params$Resource$Enterprises$Devices$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the device in the form
     * enterprises/{enterpriseId}/devices/{deviceId}.
     */
    name?: string;
  }
  export interface Params$Resource$Enterprises$Devices$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the device in the form
     * enterprises/{enterpriseId}/devices/{deviceId}.
     */
    name?: string;
  }
  export interface Params$Resource$Enterprises$Devices$Issuecommand {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the device in the form
     * enterprises/{enterpriseId}/devices/{deviceId}.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Command;
  }
  export interface Params$Resource$Enterprises$Devices$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The requested page size. The actual page size may be fixed to a min or
     * max value.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results returned by the server.
     */
    pageToken?: string;
    /**
     * The name of the enterprise in the form enterprises/{enterpriseId}.
     */
    parent?: string;
  }
  export interface Params$Resource$Enterprises$Devices$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the device in the form
     * enterprises/{enterpriseId}/devices/{deviceId}.
     */
    name?: string;
    /**
     * The field mask indicating the fields to update. If not set, all
     * modifiable fields will be modified.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Device;
  }

  export class Resource$Enterprises$Devices$Operations {
    root: Androidmanagement;
    constructor(root: Androidmanagement) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * androidmanagement.enterprises.devices.operations.cancel
     * @desc Starts asynchronous cancellation on a long-running operation. The
     * server makes a best effort to cancel the operation, but success is not
     * guaranteed. If the server doesn't support this method, it returns
     * google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or
     * other methods to check whether the cancellation succeeded or whether the
     * operation completed despite cancellation. On successful cancellation, the
     * operation is not deleted; instead, it becomes an operation with an
     * Operation.error value with a google.rpc.Status.code of 1, corresponding
     * to Code.CANCELLED.
     * @alias androidmanagement.enterprises.devices.operations.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be cancelled.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
        params?: Params$Resource$Enterprises$Devices$Operations$Cancel,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    cancel(
        params: Params$Resource$Enterprises$Devices$Operations$Cancel,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
        params: Params$Resource$Enterprises$Devices$Operations$Cancel,
        callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
        paramsOrCallback?:
            Params$Resource$Enterprises$Devices$Operations$Cancel|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Enterprises$Devices$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Devices$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}:cancel')
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * androidmanagement.enterprises.devices.operations.delete
     * @desc Deletes a long-running operation. This method indicates that the
     * client is no longer interested in the operation result. It does not
     * cancel the operation. If the server doesn't support this method, it
     * returns google.rpc.Code.UNIMPLEMENTED.
     * @alias androidmanagement.enterprises.devices.operations.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Enterprises$Devices$Operations$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Enterprises$Devices$Operations$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Enterprises$Devices$Operations$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?:
            Params$Resource$Enterprises$Devices$Operations$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Enterprises$Devices$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Devices$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
     * androidmanagement.enterprises.devices.operations.get
     * @desc Gets the latest state of a long-running operation. Clients can use
     * this method to poll the operation result at intervals as recommended by
     * the API service.
     * @alias androidmanagement.enterprises.devices.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Enterprises$Devices$Operations$Get,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    get(params: Params$Resource$Enterprises$Devices$Operations$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    get(params: Params$Resource$Enterprises$Devices$Operations$Get,
        callback: BodyResponseCallback<Schema$Operation>): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(paramsOrCallback?: Params$Resource$Enterprises$Devices$Operations$Get|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Enterprises$Devices$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Devices$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * androidmanagement.enterprises.devices.operations.list
     * @desc Lists operations that match the specified filter in the request. If
     * the server doesn't support this method, it returns UNIMPLEMENTED.NOTE:
     * the name binding allows API services to override the binding to use
     * different resource name schemes, such as users/x/operations. To override
     * the binding, API services can add a binding such as
     * "/v1/{name=users/x}/operations" to their service configuration. For
     * backwards compatibility, the default name includes the operations
     * collection id, however overriding users must ensure the name binding is
     * the parent resource, without the operations collection id.
     * @alias androidmanagement.enterprises.devices.operations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The standard list filter.
     * @param {string} params.name The name of the operation's parent resource.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Enterprises$Devices$Operations$List,
        options?: MethodOptions): AxiosPromise<Schema$ListOperationsResponse>;
    list(
        params: Params$Resource$Enterprises$Devices$Operations$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListOperationsResponse>,
        callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
        params: Params$Resource$Enterprises$Devices$Operations$List,
        callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Enterprises$Devices$Operations$List|
        BodyResponseCallback<Schema$ListOperationsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListOperationsResponse>,
        callback?: BodyResponseCallback<Schema$ListOperationsResponse>):
        void|AxiosPromise<Schema$ListOperationsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Enterprises$Devices$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Devices$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        createAPIRequest<Schema$ListOperationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Enterprises$Devices$Operations$Cancel {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;
  }
  export interface Params$Resource$Enterprises$Devices$Operations$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Enterprises$Devices$Operations$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Enterprises$Devices$Operations$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }



  export class Resource$Enterprises$Enrollmenttokens {
    root: Androidmanagement;
    constructor(root: Androidmanagement) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * androidmanagement.enterprises.enrollmentTokens.create
     * @desc Creates an enrollment token for a given enterprise.
     * @alias androidmanagement.enterprises.enrollmentTokens.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The name of the enterprise in the form enterprises/{enterpriseId}.
     * @param {().EnrollmentToken} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Enterprises$Enrollmenttokens$Create,
        options?: MethodOptions): AxiosPromise<Schema$EnrollmentToken>;
    create(
        params: Params$Resource$Enterprises$Enrollmenttokens$Create,
        options: MethodOptions|BodyResponseCallback<Schema$EnrollmentToken>,
        callback: BodyResponseCallback<Schema$EnrollmentToken>): void;
    create(
        params: Params$Resource$Enterprises$Enrollmenttokens$Create,
        callback: BodyResponseCallback<Schema$EnrollmentToken>): void;
    create(callback: BodyResponseCallback<Schema$EnrollmentToken>): void;
    create(
        paramsOrCallback?: Params$Resource$Enterprises$Enrollmenttokens$Create|
        BodyResponseCallback<Schema$EnrollmentToken>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$EnrollmentToken>,
        callback?: BodyResponseCallback<Schema$EnrollmentToken>):
        void|AxiosPromise<Schema$EnrollmentToken> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Enterprises$Enrollmenttokens$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Enrollmenttokens$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+parent}/enrollmentTokens')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$EnrollmentToken>(parameters, callback);
      } else {
        return createAPIRequest<Schema$EnrollmentToken>(parameters);
      }
    }


    /**
     * androidmanagement.enterprises.enrollmentTokens.delete
     * @desc Deletes an enrollment token. This operation invalidates the token,
     * preventing its future use.
     * @alias androidmanagement.enterprises.enrollmentTokens.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the enrollment token in the form enterprises/{enterpriseId}/enrollmentTokens/{enrollmentTokenId}.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Enterprises$Enrollmenttokens$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Enterprises$Enrollmenttokens$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Enterprises$Enrollmenttokens$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Enterprises$Enrollmenttokens$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Enterprises$Enrollmenttokens$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Enrollmenttokens$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
  }

  export interface Params$Resource$Enterprises$Enrollmenttokens$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the enterprise in the form enterprises/{enterpriseId}.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EnrollmentToken;
  }
  export interface Params$Resource$Enterprises$Enrollmenttokens$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the enrollment token in the form
     * enterprises/{enterpriseId}/enrollmentTokens/{enrollmentTokenId}.
     */
    name?: string;
  }


  export class Resource$Enterprises$Policies {
    root: Androidmanagement;
    constructor(root: Androidmanagement) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * androidmanagement.enterprises.policies.delete
     * @desc Deletes a policy. This operation is only permitted if no devices
     * are currently referencing the policy.
     * @alias androidmanagement.enterprises.policies.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Enterprises$Policies$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Enterprises$Policies$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Enterprises$Policies$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Enterprises$Policies$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Enterprises$Policies$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Policies$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
     * androidmanagement.enterprises.policies.get
     * @desc Gets a policy.
     * @alias androidmanagement.enterprises.policies.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Enterprises$Policies$Get,
        options?: MethodOptions): AxiosPromise<Schema$Policy>;
    get(params: Params$Resource$Enterprises$Policies$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback: BodyResponseCallback<Schema$Policy>): void;
    get(params: Params$Resource$Enterprises$Policies$Get,
        callback: BodyResponseCallback<Schema$Policy>): void;
    get(callback: BodyResponseCallback<Schema$Policy>): void;
    get(paramsOrCallback?: Params$Resource$Enterprises$Policies$Get|
        BodyResponseCallback<Schema$Policy>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback?: BodyResponseCallback<Schema$Policy>):
        void|AxiosPromise<Schema$Policy> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Enterprises$Policies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Policies$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }


    /**
     * androidmanagement.enterprises.policies.list
     * @desc Lists policies for a given enterprise.
     * @alias androidmanagement.enterprises.policies.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The requested page size. The actual page size may be fixed to a min or max value.
     * @param {string=} params.pageToken A token identifying a page of results returned by the server.
     * @param {string} params.parent The name of the enterprise in the form enterprises/{enterpriseId}.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Enterprises$Policies$List,
        options?: MethodOptions): AxiosPromise<Schema$ListPoliciesResponse>;
    list(
        params: Params$Resource$Enterprises$Policies$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListPoliciesResponse>,
        callback: BodyResponseCallback<Schema$ListPoliciesResponse>): void;
    list(
        params: Params$Resource$Enterprises$Policies$List,
        callback: BodyResponseCallback<Schema$ListPoliciesResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListPoliciesResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Enterprises$Policies$List|
        BodyResponseCallback<Schema$ListPoliciesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListPoliciesResponse>,
        callback?: BodyResponseCallback<Schema$ListPoliciesResponse>):
        void|AxiosPromise<Schema$ListPoliciesResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Enterprises$Policies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Policies$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+parent}/policies')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListPoliciesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListPoliciesResponse>(parameters);
      }
    }


    /**
     * androidmanagement.enterprises.policies.patch
     * @desc Updates or creates a policy.
     * @alias androidmanagement.enterprises.policies.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}.
     * @param {string=} params.updateMask The field mask indicating the fields to update. If not set, all modifiable fields will be modified.
     * @param {().Policy} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?: Params$Resource$Enterprises$Policies$Patch,
        options?: MethodOptions): AxiosPromise<Schema$Policy>;
    patch(
        params: Params$Resource$Enterprises$Policies$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback: BodyResponseCallback<Schema$Policy>): void;
    patch(
        params: Params$Resource$Enterprises$Policies$Patch,
        callback: BodyResponseCallback<Schema$Policy>): void;
    patch(callback: BodyResponseCallback<Schema$Policy>): void;
    patch(
        paramsOrCallback?: Params$Resource$Enterprises$Policies$Patch|
        BodyResponseCallback<Schema$Policy>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback?: BodyResponseCallback<Schema$Policy>):
        void|AxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Enterprises$Policies$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Policies$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://androidmanagement.googleapis.com/';
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
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }
  }

  export interface Params$Resource$Enterprises$Policies$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the policy in the form
     * enterprises/{enterpriseId}/policies/{policyId}.
     */
    name?: string;
  }
  export interface Params$Resource$Enterprises$Policies$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the policy in the form
     * enterprises/{enterpriseId}/policies/{policyId}.
     */
    name?: string;
  }
  export interface Params$Resource$Enterprises$Policies$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The requested page size. The actual page size may be fixed to a min or
     * max value.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results returned by the server.
     */
    pageToken?: string;
    /**
     * The name of the enterprise in the form enterprises/{enterpriseId}.
     */
    parent?: string;
  }
  export interface Params$Resource$Enterprises$Policies$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the policy in the form
     * enterprises/{enterpriseId}/policies/{policyId}.
     */
    name?: string;
    /**
     * The field mask indicating the fields to update. If not set, all
     * modifiable fields will be modified.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Policy;
  }


  export class Resource$Enterprises$Webtokens {
    root: Androidmanagement;
    constructor(root: Androidmanagement) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * androidmanagement.enterprises.webTokens.create
     * @desc Creates a web token to access an embeddable managed Google Play web
     * UI for a given enterprise.
     * @alias androidmanagement.enterprises.webTokens.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The name of the enterprise in the form enterprises/{enterpriseId}.
     * @param {().WebToken} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Enterprises$Webtokens$Create,
        options?: MethodOptions): AxiosPromise<Schema$WebToken>;
    create(
        params: Params$Resource$Enterprises$Webtokens$Create,
        options: MethodOptions|BodyResponseCallback<Schema$WebToken>,
        callback: BodyResponseCallback<Schema$WebToken>): void;
    create(
        params: Params$Resource$Enterprises$Webtokens$Create,
        callback: BodyResponseCallback<Schema$WebToken>): void;
    create(callback: BodyResponseCallback<Schema$WebToken>): void;
    create(
        paramsOrCallback?: Params$Resource$Enterprises$Webtokens$Create|
        BodyResponseCallback<Schema$WebToken>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$WebToken>,
        callback?: BodyResponseCallback<Schema$WebToken>):
        void|AxiosPromise<Schema$WebToken> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Enterprises$Webtokens$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Enterprises$Webtokens$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+parent}/webTokens')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$WebToken>(parameters, callback);
      } else {
        return createAPIRequest<Schema$WebToken>(parameters);
      }
    }
  }

  export interface Params$Resource$Enterprises$Webtokens$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the enterprise in the form enterprises/{enterpriseId}.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WebToken;
  }



  export class Resource$Signupurls {
    root: Androidmanagement;
    constructor(root: Androidmanagement) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * androidmanagement.signupUrls.create
     * @desc Creates an enterprise signup URL.
     * @alias androidmanagement.signupUrls.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.callbackUrl The callback URL that the admin will be redirected to after successfully creating an enterprise. Before redirecting there the system will add a query parameter to this URL named enterpriseToken which will contain an opaque token to be used for the create enterprise request. The URL will be parsed then reformatted in order to add the enterpriseToken parameter, so there may be some minor formatting changes.
     * @param {string=} params.projectId The ID of the Google Cloud Platform project which will own the enterprise.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(params?: Params$Resource$Signupurls$Create, options?: MethodOptions):
        AxiosPromise<Schema$SignupUrl>;
    create(
        params: Params$Resource$Signupurls$Create,
        options: MethodOptions|BodyResponseCallback<Schema$SignupUrl>,
        callback: BodyResponseCallback<Schema$SignupUrl>): void;
    create(
        params: Params$Resource$Signupurls$Create,
        callback: BodyResponseCallback<Schema$SignupUrl>): void;
    create(callback: BodyResponseCallback<Schema$SignupUrl>): void;
    create(
        paramsOrCallback?: Params$Resource$Signupurls$Create|
        BodyResponseCallback<Schema$SignupUrl>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$SignupUrl>,
        callback?: BodyResponseCallback<Schema$SignupUrl>):
        void|AxiosPromise<Schema$SignupUrl> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Signupurls$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Signupurls$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://androidmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/signupUrls').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$SignupUrl>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SignupUrl>(parameters);
      }
    }
  }

  export interface Params$Resource$Signupurls$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The callback URL that the admin will be redirected to after successfully
     * creating an enterprise. Before redirecting there the system will add a
     * query parameter to this URL named enterpriseToken which will contain an
     * opaque token to be used for the create enterprise request. The URL will
     * be parsed then reformatted in order to add the enterpriseToken parameter,
     * so there may be some minor formatting changes.
     */
    callbackUrl?: string;
    /**
     * The ID of the Google Cloud Platform project which will own the
     * enterprise.
     */
    projectId?: string;
  }
}
