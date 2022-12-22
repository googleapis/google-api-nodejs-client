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

export namespace identitytoolkit_v2 {
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
   * Identity Toolkit API
   *
   * The Google Identity Toolkit API lets you use open standards to verify a user&#39;s identity.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const identitytoolkit = google.identitytoolkit('v2');
   * ```
   */
  export class Identitytoolkit {
    context: APIRequestContext;
    accounts: Resource$Accounts;
    defaultSupportedIdps: Resource$Defaultsupportedidps;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accounts = new Resource$Accounts(this.context);
      this.defaultSupportedIdps = new Resource$Defaultsupportedidps(
        this.context
      );
      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * Defines a policy of allowing every region by default and adding disallowed regions to a disallow list.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2AllowByDefault {
    /**
     * Two letter unicode region codes to disallow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json
     */
    disallowedRegions?: string[] | null;
  }
  /**
   * Defines a policy of only allowing regions by explicitly adding them to an allowlist.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2AllowlistOnly {
    /**
     * Two letter unicode region codes to allow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json
     */
    allowedRegions?: string[] | null;
  }
  /**
   * Configuration options related to authenticating an anonymous user.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2Anonymous {
    /**
     * Whether anonymous user auth is enabled for the project or not.
     */
    enabled?: boolean | null;
  }
  /**
   * Additional config for SignInWithApple.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig {
    /**
     * A list of Bundle ID's usable by this project
     */
    bundleIds?: string[] | null;
    codeFlowConfig?: Schema$GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig;
  }
  /**
   * Configuration related to Blocking Functions.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2BlockingFunctionsConfig {
    /**
     * The user credentials to include in the JWT payload that is sent to the registered Blocking Functions.
     */
    forwardInboundCredentials?: Schema$GoogleCloudIdentitytoolkitAdminV2ForwardInboundCredentials;
    /**
     * Map of Trigger to event type. Key should be one of the supported event types: "beforeCreate", "beforeSignIn"
     */
    triggers?: {
      [key: string]: Schema$GoogleCloudIdentitytoolkitAdminV2Trigger;
    } | null;
  }
  /**
   * Options related to how clients making requests on behalf of a project should be configured.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2ClientConfig {
    /**
     * Output only. API key that can be used when making requests for this project.
     */
    apiKey?: string | null;
    /**
     * Output only. Firebase subdomain.
     */
    firebaseSubdomain?: string | null;
    /**
     * Configuration related to restricting a user's ability to affect their account.
     */
    permissions?: Schema$GoogleCloudIdentitytoolkitAdminV2Permissions;
  }
  /**
   * Options related to how clients making requests on behalf of a tenant should be configured.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig {
    /**
     * Configuration related to restricting a user's ability to affect their account.
     */
    permissions?: Schema$GoogleCloudIdentitytoolkitAdminV2ClientPermissions;
  }
  /**
   * Configuration related to restricting a user's ability to affect their account.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2ClientPermissions {
    /**
     * When true, end users cannot delete their account on the associated project through any of our API methods
     */
    disabledUserDeletion?: boolean | null;
    /**
     * When true, end users cannot sign up for a new account on the associated project through any of our API methods
     */
    disabledUserSignup?: boolean | null;
  }
  /**
   * Additional config for Apple for code flow.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig {
    /**
     * Key ID for the private key.
     */
    keyId?: string | null;
    /**
     * Private key used for signing the client secret JWT.
     */
    privateKey?: string | null;
    /**
     * Apple Developer Team ID.
     */
    teamId?: string | null;
  }
  /**
   * Represents an Identity Toolkit project.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2Config {
    /**
     * List of domains authorized for OAuth redirects
     */
    authorizedDomains?: string[] | null;
    /**
     * Whether anonymous users will be auto-deleted after a period of 30 days.
     */
    autodeleteAnonymousUsers?: boolean | null;
    /**
     * Configuration related to blocking functions.
     */
    blockingFunctions?: Schema$GoogleCloudIdentitytoolkitAdminV2BlockingFunctionsConfig;
    /**
     * Options related to how clients making requests on behalf of a project should be configured.
     */
    client?: Schema$GoogleCloudIdentitytoolkitAdminV2ClientConfig;
    /**
     * Configuration for settings related to email privacy and public visibility.
     */
    emailPrivacyConfig?: Schema$GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig;
    /**
     * Configuration for this project's multi-factor authentication, including whether it is active and what factors can be used for the second factor
     */
    mfa?: Schema$GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig;
    /**
     * Configuration related to monitoring project activity.
     */
    monitoring?: Schema$GoogleCloudIdentitytoolkitAdminV2MonitoringConfig;
    /**
     * Configuration related to multi-tenant functionality.
     */
    multiTenant?: Schema$GoogleCloudIdentitytoolkitAdminV2MultiTenantConfig;
    /**
     * Output only. The name of the Config resource. Example: "projects/my-awesome-project/config"
     */
    name?: string | null;
    /**
     * Configuration related to sending notifications to users.
     */
    notification?: Schema$GoogleCloudIdentitytoolkitAdminV2NotificationConfig;
    /**
     * Configuration related to quotas.
     */
    quota?: Schema$GoogleCloudIdentitytoolkitAdminV2QuotaConfig;
    /**
     * Configuration related to local sign in methods.
     */
    signIn?: Schema$GoogleCloudIdentitytoolkitAdminV2SignInConfig;
    /**
     * Configures which regions are enabled for SMS verification code sending.
     */
    smsRegionConfig?: Schema$GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig;
    /**
     * Output only. The subtype of this config.
     */
    subtype?: string | null;
  }
  /**
   * Standard Identity Toolkit-trusted IDPs.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp {
    /**
     * Description of the Idp
     */
    description?: string | null;
    /**
     * Id the of Idp
     */
    idpId?: string | null;
  }
  /**
   * Configurations options for authenticating with a the standard set of Identity Toolkit-trusted IDPs.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig {
    /**
     * Additional config for Apple-based projects.
     */
    appleSignInConfig?: Schema$GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig;
    /**
     * OAuth client ID.
     */
    clientId?: string | null;
    /**
     * OAuth client secret.
     */
    clientSecret?: string | null;
    /**
     * True if allows the user to sign in with the provider.
     */
    enabled?: boolean | null;
    /**
     * The name of the DefaultSupportedIdpConfig resource, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com"
     */
    name?: string | null;
  }
  /**
   * Information of custom domain DNS verification. By default, default_domain will be used. A custom domain can be configured using VerifyCustomDomain.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2DnsInfo {
    /**
     * Output only. The applied verified custom domain.
     */
    customDomain?: string | null;
    /**
     * Output only. The current verification state of the custom domain. The custom domain will only be used once the domain verification is successful.
     */
    customDomainState?: string | null;
    /**
     * Output only. The timestamp of initial request for the current domain verification.
     */
    domainVerificationRequestTime?: string | null;
    /**
     * Output only. The custom domain that's to be verified.
     */
    pendingCustomDomain?: string | null;
    /**
     * Whether to use custom domain.
     */
    useCustomDomain?: boolean | null;
  }
  /**
   * Configuration options related to authenticating a user by their email address.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2Email {
    /**
     * Whether email auth is enabled for the project or not.
     */
    enabled?: boolean | null;
    /**
     * Whether a password is required for email auth or not. If true, both an email and password must be provided to sign in. If false, a user may sign in via either email/password or email link.
     */
    passwordRequired?: boolean | null;
  }
  /**
   * Configuration for settings related to email privacy and public visibility. Settings in this config protect against email enumeration, but may make some trade-offs in user-friendliness.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig {
    /**
     * Migrates the project to a state of improved email privacy. For example certain error codes are more generic to avoid giving away information on whether the account exists. In addition, this disables certain features that as a side-effect allow user enumeration. Enabling this toggle disables the fetchSignInMethodsForEmail functionality and changing the user's email to an unverified email. It is recommended to remove dependence on this functionality and enable this toggle to improve user privacy.
     */
    enableImprovedEmailPrivacy?: boolean | null;
  }
  /**
   * Email template. The subject and body fields can contain the following placeholders which will be replaced with the appropriate values: %LINK% - The link to use to redeem the send OOB code. %EMAIL% - The email where the email is being sent. %NEW_EMAIL% - The new email being set for the account (when applicable). %APP_NAME% - The GCP project's display name. %DISPLAY_NAME% - The user's display name.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2EmailTemplate {
    /**
     * Email body
     */
    body?: string | null;
    /**
     * Email body format
     */
    bodyFormat?: string | null;
    /**
     * Output only. Whether the body or subject of the email is customized.
     */
    customized?: boolean | null;
    /**
     * Reply-to address
     */
    replyTo?: string | null;
    /**
     * Sender display name
     */
    senderDisplayName?: string | null;
    /**
     * Local part of From address
     */
    senderLocalPart?: string | null;
    /**
     * Subject of the email
     */
    subject?: string | null;
  }
  /**
   * Indicates which credentials to pass to the registered Blocking Functions.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2ForwardInboundCredentials {
    /**
     * Whether to pass the user's OAuth identity provider's access token.
     */
    accessToken?: boolean | null;
    /**
     * Whether to pass the user's OIDC identity provider's ID token.
     */
    idToken?: boolean | null;
    /**
     * Whether to pass the user's OAuth identity provider's refresh token.
     */
    refreshToken?: boolean | null;
  }
  /**
   * History information of the hash algorithm and key. Different accounts' passwords may be generated by different version.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2HashConfig {
    /**
     * Output only. Different password hash algorithms used in Identity Toolkit.
     */
    algorithm?: string | null;
    /**
     * Output only. Memory cost for hash calculation. Used by scrypt and other similar password derivation algorithms. See https://tools.ietf.org/html/rfc7914 for explanation of field.
     */
    memoryCost?: number | null;
    /**
     * Output only. How many rounds for hash calculation. Used by scrypt and other similar password derivation algorithms.
     */
    rounds?: number | null;
    /**
     * Output only. Non-printable character to be inserted between the salt and plain text password in base64.
     */
    saltSeparator?: string | null;
    /**
     * Output only. Signer key in base64.
     */
    signerKey?: string | null;
  }
  /**
   * The IDP's certificate data to verify the signature in the SAMLResponse issued by the IDP.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2IdpCertificate {
    /**
     * The x509 certificate
     */
    x509Certificate?: string | null;
  }
  /**
   * The SAML IdP (Identity Provider) configuration when the project acts as the relying party.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2IdpConfig {
    /**
     * IDP's public keys for verifying signature in the assertions.
     */
    idpCertificates?: Schema$GoogleCloudIdentitytoolkitAdminV2IdpCertificate[];
    /**
     * Unique identifier for all SAML entities.
     */
    idpEntityId?: string | null;
    /**
     * Indicates if outbounding SAMLRequest should be signed.
     */
    signRequest?: boolean | null;
    /**
     * URL to send Authentication request to.
     */
    ssoUrl?: string | null;
  }
  /**
   * A pair of SAML RP-IDP configurations when the project acts as the relying party.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig {
    /**
     * The config's display name set by developers.
     */
    displayName?: string | null;
    /**
     * True if allows the user to sign in with the provider.
     */
    enabled?: boolean | null;
    /**
     * The SAML IdP (Identity Provider) configuration when the project acts as the relying party.
     */
    idpConfig?: Schema$GoogleCloudIdentitytoolkitAdminV2IdpConfig;
    /**
     * The name of the InboundSamlConfig resource, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'. Ignored during create requests.
     */
    name?: string | null;
    /**
     * The SAML SP (Service Provider) configuration when the project acts as the relying party to receive and accept an authentication assertion issued by a SAML identity provider.
     */
    spConfig?: Schema$GoogleCloudIdentitytoolkitAdminV2SpConfig;
  }
  /**
   * Settings that the tenants will inherit from project level.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2Inheritance {
    /**
     * Whether to allow the tenant to inherit custom domains, email templates, and custom SMTP settings. If true, email sent from tenant will follow the project level email sending configurations. If false (by default), emails will go with the default settings with no customizations.
     */
    emailSendingConfig?: boolean | null;
  }
  /**
   * Request for InitializeIdentityPlatform.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformRequest {}
  /**
   * Response for InitializeIdentityPlatform. Empty for now.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse {}
  /**
   * Response for DefaultSupportedIdpConfigs
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse {
    /**
     * The set of configs.
     */
    defaultSupportedIdpConfigs?: Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response for ListDefaultSupportedIdps
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse {
    /**
     * The set of configs.
     */
    defaultSupportedIdps?: Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response for ListInboundSamlConfigs
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse {
    /**
     * The set of configs.
     */
    inboundSamlConfigs?: Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response for ListOAuthIdpConfigs
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * The set of configs.
     */
    oauthIdpConfigs?: Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig[];
  }
  /**
   * Response message for ListTenants.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse {
    /**
     * The token to get the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * A list of tenants under the given agent project.
     */
    tenants?: Schema$GoogleCloudIdentitytoolkitAdminV2Tenant[];
  }
  /**
   * Configuration related to monitoring project activity.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2MonitoringConfig {
    /**
     * Configuration for logging requests made to this project to Stackdriver Logging
     */
    requestLogging?: Schema$GoogleCloudIdentitytoolkitAdminV2RequestLogging;
  }
  /**
   * Options related to MultiFactor Authentication for the project.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig {
    /**
     * A list of usable second factors for this project.
     */
    enabledProviders?: string[] | null;
    /**
     * Whether MultiFactor Authentication has been enabled for this project.
     */
    state?: string | null;
  }
  /**
   * Configuration related to multi-tenant functionality.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2MultiTenantConfig {
    /**
     * Whether this project can have tenants or not.
     */
    allowTenants?: boolean | null;
    /**
     * The default cloud parent org or folder that the tenant project should be created under. The parent resource name should be in the format of "/", such as "folders/123" or "organizations/456". If the value is not set, the tenant will be created under the same organization or folder as the agent project.
     */
    defaultTenantLocation?: string | null;
  }
  /**
   * Configuration related to sending notifications to users.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2NotificationConfig {
    /**
     * Default locale used for email and SMS in IETF BCP 47 format.
     */
    defaultLocale?: string | null;
    /**
     * Options for email sending.
     */
    sendEmail?: Schema$GoogleCloudIdentitytoolkitAdminV2SendEmail;
    /**
     * Options for SMS sending.
     */
    sendSms?: Schema$GoogleCloudIdentitytoolkitAdminV2SendSms;
  }
  /**
   * Configuration options for authenticating with an OAuth IDP.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig {
    /**
     * The client id of an OAuth client.
     */
    clientId?: string | null;
    /**
     * The client secret of the OAuth client, to enable OIDC code flow.
     */
    clientSecret?: string | null;
    /**
     * The config's display name set by developers.
     */
    displayName?: string | null;
    /**
     * True if allows the user to sign in with the provider.
     */
    enabled?: boolean | null;
    /**
     * For OIDC Idps, the issuer identifier.
     */
    issuer?: string | null;
    /**
     * The name of the OAuthIdpConfig resource, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'. Ignored during create requests.
     */
    name?: string | null;
    /**
     * The response type to request for in the OAuth authorization flow. You can set either `id_token` or `code` to true, but not both. Setting both types to be simultaneously true (`{code: true, id_token: true\}`) is not yet supported.
     */
    responseType?: Schema$GoogleCloudIdentitytoolkitAdminV2OAuthResponseType;
  }
  /**
   * The response type to request for in the OAuth authorization flow. You can set either `id_token` or `code` to true, but not both. Setting both types to be simultaneously true (`{code: true, id_token: true\}`) is not yet supported. See https://openid.net/specs/openid-connect-core-1_0.html#Authentication for a mapping of response type to OAuth 2.0 flow.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2OAuthResponseType {
    /**
     * If true, authorization code is returned from IdP's authorization endpoint.
     */
    code?: boolean | null;
    /**
     * If true, ID token is returned from IdP's authorization endpoint.
     */
    idToken?: boolean | null;
    /**
     * Do not use. The `token` response type is not supported at the moment.
     */
    token?: boolean | null;
  }
  /**
   * Configuration related to restricting a user's ability to affect their account.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2Permissions {
    /**
     * When true, end users cannot delete their account on the associated project through any of our API methods
     */
    disabledUserDeletion?: boolean | null;
    /**
     * When true, end users cannot sign up for a new account on the associated project through any of our API methods
     */
    disabledUserSignup?: boolean | null;
  }
  /**
   * Configuration options related to authenticated a user by their phone number.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2PhoneNumber {
    /**
     * Whether phone number auth is enabled for the project or not.
     */
    enabled?: boolean | null;
    /**
     * A map of that can be used for phone auth testing.
     */
    testPhoneNumbers?: {[key: string]: string} | null;
  }
  /**
   * Configuration related to quotas.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2QuotaConfig {
    /**
     * Quota for the Signup endpoint, if overwritten. Signup quota is measured in sign ups per project per hour per IP.
     */
    signUpQuotaConfig?: Schema$GoogleCloudIdentitytoolkitAdminV2TemporaryQuota;
  }
  /**
   * Configuration for logging requests made to this project to Stackdriver Logging
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2RequestLogging {
    /**
     * Whether logging is enabled for this project or not.
     */
    enabled?: boolean | null;
  }
  /**
   * Options for email sending.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2SendEmail {
    /**
     * action url in email template.
     */
    callbackUri?: string | null;
    /**
     * Email template for change email
     */
    changeEmailTemplate?: Schema$GoogleCloudIdentitytoolkitAdminV2EmailTemplate;
    /**
     * Information of custom domain DNS verification.
     */
    dnsInfo?: Schema$GoogleCloudIdentitytoolkitAdminV2DnsInfo;
    /**
     * Reset password email template for legacy Firebase V1 app.
     */
    legacyResetPasswordTemplate?: Schema$GoogleCloudIdentitytoolkitAdminV2EmailTemplate;
    /**
     * The method used for sending an email.
     */
    method?: string | null;
    /**
     * Email template for reset password
     */
    resetPasswordTemplate?: Schema$GoogleCloudIdentitytoolkitAdminV2EmailTemplate;
    /**
     * Email template for reverting second factor addition emails
     */
    revertSecondFactorAdditionTemplate?: Schema$GoogleCloudIdentitytoolkitAdminV2EmailTemplate;
    /**
     * Use a custom SMTP relay
     */
    smtp?: Schema$GoogleCloudIdentitytoolkitAdminV2Smtp;
    /**
     * Email template for verify email
     */
    verifyEmailTemplate?: Schema$GoogleCloudIdentitytoolkitAdminV2EmailTemplate;
  }
  /**
   * Options for SMS sending.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2SendSms {
    /**
     * Output only. The template to use when sending an SMS.
     */
    smsTemplate?: Schema$GoogleCloudIdentitytoolkitAdminV2SmsTemplate;
    /**
     * Whether to use the accept_language header for SMS.
     */
    useDeviceLocale?: boolean | null;
  }
  /**
   * Configuration related to local sign in methods.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2SignInConfig {
    /**
     * Whether to allow more than one account to have the same email.
     */
    allowDuplicateEmails?: boolean | null;
    /**
     * Configuration options related to authenticating an anonymous user.
     */
    anonymous?: Schema$GoogleCloudIdentitytoolkitAdminV2Anonymous;
    /**
     * Configuration options related to authenticating a user by their email address.
     */
    email?: Schema$GoogleCloudIdentitytoolkitAdminV2Email;
    /**
     * Output only. Hash config information.
     */
    hashConfig?: Schema$GoogleCloudIdentitytoolkitAdminV2HashConfig;
    /**
     * Configuration options related to authenticated a user by their phone number.
     */
    phoneNumber?: Schema$GoogleCloudIdentitytoolkitAdminV2PhoneNumber;
  }
  /**
   * Configures the regions where users are allowed to send verification SMS for the project or tenant. This is based on the calling code of the destination phone number.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig {
    /**
     * A policy of allowing SMS to every region by default and adding disallowed regions to a disallow list.
     */
    allowByDefault?: Schema$GoogleCloudIdentitytoolkitAdminV2AllowByDefault;
    /**
     * A policy of only allowing regions by explicitly adding them to an allowlist.
     */
    allowlistOnly?: Schema$GoogleCloudIdentitytoolkitAdminV2AllowlistOnly;
  }
  /**
   * The template to use when sending an SMS.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2SmsTemplate {
    /**
     * Output only. The SMS's content. Can contain the following placeholders which will be replaced with the appropriate values: %APP_NAME% - For Android or iOS apps, the app's display name. For web apps, the domain hosting the application. %LOGIN_CODE% - The OOB code being sent in the SMS.
     */
    content?: string | null;
  }
  /**
   * Configuration for SMTP relay
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2Smtp {
    /**
     * SMTP relay host
     */
    host?: string | null;
    /**
     * SMTP relay password
     */
    password?: string | null;
    /**
     * SMTP relay port
     */
    port?: number | null;
    /**
     * SMTP security mode.
     */
    securityMode?: string | null;
    /**
     * Sender email for the SMTP relay
     */
    senderEmail?: string | null;
    /**
     * SMTP relay username
     */
    username?: string | null;
  }
  /**
   * The SP's certificate data for IDP to verify the SAMLRequest generated by the SP.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2SpCertificate {
    /**
     * Timestamp of the cert expiration instance.
     */
    expiresAt?: string | null;
    /**
     * Self-signed public certificate.
     */
    x509Certificate?: string | null;
  }
  /**
   * The SAML SP (Service Provider) configuration when the project acts as the relying party to receive and accept an authentication assertion issued by a SAML identity provider.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2SpConfig {
    /**
     * Callback URI where responses from IDP are handled.
     */
    callbackUri?: string | null;
    /**
     * Output only. Public certificates generated by the server to verify the signature in SAMLRequest in the SP-initiated flow.
     */
    spCertificates?: Schema$GoogleCloudIdentitytoolkitAdminV2SpCertificate[];
    /**
     * Unique identifier for all SAML entities.
     */
    spEntityId?: string | null;
  }
  /**
   * Temporary quota increase / decrease
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2TemporaryQuota {
    /**
     * Corresponds to the 'refill_token_count' field in QuotaServer config
     */
    quota?: string | null;
    /**
     * How long this quota will be active for
     */
    quotaDuration?: string | null;
    /**
     * When this quota will take affect
     */
    startTime?: string | null;
  }
  /**
   * A Tenant contains configuration for the tenant in a multi-tenant project.
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2Tenant {
    /**
     * Whether to allow email/password user authentication.
     */
    allowPasswordSignup?: boolean | null;
    /**
     * Whether anonymous users will be auto-deleted after a period of 30 days.
     */
    autodeleteAnonymousUsers?: boolean | null;
    /**
     * Options related to how clients making requests on behalf of a project should be configured.
     */
    client?: Schema$GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig;
    /**
     * Whether authentication is disabled for the tenant. If true, the users under the disabled tenant are not allowed to sign-in. Admins of the disabled tenant are not able to manage its users.
     */
    disableAuth?: boolean | null;
    /**
     * Display name of the tenant.
     */
    displayName?: string | null;
    /**
     * Configuration for settings related to email privacy and public visibility.
     */
    emailPrivacyConfig?: Schema$GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig;
    /**
     * Whether to enable anonymous user authentication.
     */
    enableAnonymousUser?: boolean | null;
    /**
     * Whether to enable email link user authentication.
     */
    enableEmailLinkSignin?: boolean | null;
    /**
     * Output only. Hash config information of a tenant for display on Pantheon. This can only be displayed on Pantheon to avoid the sensitive information to get accidentally leaked. Only returned in GetTenant response to restrict reading of this information. Requires firebaseauth.configs.getHashConfig permission on the agent project for returning this field.
     */
    hashConfig?: Schema$GoogleCloudIdentitytoolkitAdminV2HashConfig;
    /**
     * Specify the settings that the tenant could inherit.
     */
    inheritance?: Schema$GoogleCloudIdentitytoolkitAdminV2Inheritance;
    /**
     * The tenant-level configuration of MFA options.
     */
    mfaConfig?: Schema$GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig;
    /**
     * Configuration related to monitoring project activity.
     */
    monitoring?: Schema$GoogleCloudIdentitytoolkitAdminV2MonitoringConfig;
    /**
     * Output only. Resource name of a tenant. For example: "projects/{project-id\}/tenants/{tenant-id\}"
     */
    name?: string | null;
    /**
     * Configures which regions are enabled for SMS verification code sending.
     */
    smsRegionConfig?: Schema$GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig;
    /**
     * A map of pairs that can be used for MFA. The phone number should be in E.164 format (https://www.itu.int/rec/T-REC-E.164/) and a maximum of 10 pairs can be added (error will be thrown once exceeded).
     */
    testPhoneNumbers?: {[key: string]: string} | null;
  }
  /**
   * Synchronous Cloud Function with HTTP Trigger
   */
  export interface Schema$GoogleCloudIdentitytoolkitAdminV2Trigger {
    /**
     * HTTP URI trigger for the Cloud Function.
     */
    functionUri?: string | null;
    /**
     * When the trigger was changed.
     */
    updateTime?: string | null;
  }
  /**
   * The information required to auto-retrieve an SMS.
   */
  export interface Schema$GoogleCloudIdentitytoolkitV2AutoRetrievalInfo {
    /**
     * The Android app's signature hash for Google Play Service's SMS Retriever API.
     */
    appSignatureHash?: string | null;
  }
  /**
   * Finishes enrolling a second factor for the user.
   */
  export interface Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest {
    /**
     * Display name which is entered by users to distinguish between different second factors with same type or different type.
     */
    displayName?: string | null;
    /**
     * Required. ID token.
     */
    idToken?: string | null;
    /**
     * Verification info to authorize sending an SMS for phone verification.
     */
    phoneVerificationInfo?: Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo;
    /**
     * The ID of the Identity Platform tenant that the user enrolling MFA belongs to. If not set, the user belongs to the default Identity Platform project.
     */
    tenantId?: string | null;
  }
  /**
   * FinalizeMfaEnrollment response.
   */
  export interface Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse {
    /**
     * ID token updated to reflect MFA enrollment.
     */
    idToken?: string | null;
    /**
     * Auxiliary auth info specific to phone auth.
     */
    phoneAuthInfo?: Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo;
    /**
     * Refresh token updated to reflect MFA enrollment.
     */
    refreshToken?: string | null;
  }
  /**
   * Phone Verification info for a FinalizeMfa request.
   */
  export interface Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo {
    /**
     * Android only. Uses for "instant" phone number verification though GmsCore.
     */
    androidVerificationProof?: string | null;
    /**
     * User-entered verification code.
     */
    code?: string | null;
    /**
     * Required if Android verification proof is presented.
     */
    phoneNumber?: string | null;
    /**
     * An opaque string that represents the enrollment session.
     */
    sessionInfo?: string | null;
  }
  /**
   * Phone Verification info for a FinalizeMfa response.
   */
  export interface Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo {
    /**
     * Android only. Long-lived replacement for valid code tied to android device.
     */
    androidVerificationProof?: string | null;
    /**
     * Android only. Expiration time of verification proof in seconds.
     */
    androidVerificationProofExpireTime?: string | null;
    /**
     * For Android verification proof.
     */
    phoneNumber?: string | null;
  }
  /**
   * Finalizes sign-in by verifying MFA challenge.
   */
  export interface Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest {
    /**
     * Required. Pending credential from first factor sign-in.
     */
    mfaPendingCredential?: string | null;
    /**
     * Proof of completion of the SMS based MFA challenge.
     */
    phoneVerificationInfo?: Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo;
    /**
     * The ID of the Identity Platform tenant the user is signing in to. If not set, the user will sign in to the default Identity Platform project.
     */
    tenantId?: string | null;
  }
  /**
   * FinalizeMfaSignIn response.
   */
  export interface Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse {
    /**
     * ID token for the authenticated user.
     */
    idToken?: string | null;
    /**
     * Extra phone auth info, including android verification proof.
     */
    phoneAuthInfo?: Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo;
    /**
     * Refresh token for the authenticated user.
     */
    refreshToken?: string | null;
  }
  /**
   * Sends MFA enrollment verification SMS for a user.
   */
  export interface Schema$GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest {
    /**
     * Required. User's ID token.
     */
    idToken?: string | null;
    /**
     * Verification info to authorize sending an SMS for phone verification.
     */
    phoneEnrollmentInfo?: Schema$GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo;
    /**
     * The ID of the Identity Platform tenant that the user enrolling MFA belongs to. If not set, the user belongs to the default Identity Platform project.
     */
    tenantId?: string | null;
  }
  /**
   * StartMfaEnrollment response.
   */
  export interface Schema$GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse {
    /**
     * Verification info to authorize sending an SMS for phone verification.
     */
    phoneSessionInfo?: Schema$GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo;
  }
  /**
   * App Verification info for a StartMfa request.
   */
  export interface Schema$GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo {
    /**
     * Android only. Used by Google Play Services to identify the app for auto-retrieval.
     */
    autoRetrievalInfo?: Schema$GoogleCloudIdentitytoolkitV2AutoRetrievalInfo;
    /**
     * iOS only. Receipt of successful app token validation with APNS.
     */
    iosReceipt?: string | null;
    /**
     * iOS only. Secret delivered to iOS app via APNS.
     */
    iosSecret?: string | null;
    /**
     * Required for enrollment. Phone number to be enrolled as MFA.
     */
    phoneNumber?: string | null;
    /**
     * Web only. Recaptcha solution.
     */
    recaptchaToken?: string | null;
    /**
     * Android only. Used to assert application identity in place of a recaptcha token. A SafetyNet Token can be generated via the [SafetyNet Android Attestation API](https://developer.android.com/training/safetynet/attestation.html), with the Base64 encoding of the `phone_number` field as the nonce.
     */
    safetyNetToken?: string | null;
  }
  /**
   * Phone Verification info for a StartMfa response.
   */
  export interface Schema$GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo {
    /**
     * An opaque string that represents the enrollment session.
     */
    sessionInfo?: string | null;
  }
  /**
   * Starts multi-factor sign-in by sending the multi-factor auth challenge.
   */
  export interface Schema$GoogleCloudIdentitytoolkitV2StartMfaSignInRequest {
    /**
     * Required. MFA enrollment id from the user's list of current MFA enrollments.
     */
    mfaEnrollmentId?: string | null;
    /**
     * Required. Pending credential from first factor sign-in.
     */
    mfaPendingCredential?: string | null;
    /**
     * Verification info to authorize sending an SMS for phone verification.
     */
    phoneSignInInfo?: Schema$GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo;
    /**
     * The ID of the Identity Platform tenant the user is signing in to. If not set, the user will sign in to the default Identity Platform project.
     */
    tenantId?: string | null;
  }
  /**
   * StartMfaSignIn response.
   */
  export interface Schema$GoogleCloudIdentitytoolkitV2StartMfaSignInResponse {
    /**
     * MultiFactor sign-in session information specific to SMS-type second factors. Along with the one-time code retrieved from the sent SMS, the contents of this session information should be passed to FinalizeMfaSignIn to complete the sign in.
     */
    phoneResponseInfo?: Schema$GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo;
  }
  /**
   * Withdraws MFA.
   */
  export interface Schema$GoogleCloudIdentitytoolkitV2WithdrawMfaRequest {
    /**
     * Required. User's ID token.
     */
    idToken?: string | null;
    /**
     * Required. MFA enrollment id from a current MFA enrollment.
     */
    mfaEnrollmentId?: string | null;
    /**
     * The ID of the Identity Platform tenant that the user unenrolling MFA belongs to. If not set, the user belongs to the default Identity Platform project.
     */
    tenantId?: string | null;
  }
  /**
   * Withdraws MultiFactorAuth response.
   */
  export interface Schema$GoogleCloudIdentitytoolkitV2WithdrawMfaResponse {
    /**
     * ID token updated to reflect removal of the second factor.
     */
    idToken?: string | null;
    /**
     * Refresh token updated to reflect removal of the second factor.
     */
    refreshToken?: string | null;
  }
  /**
   * Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \}, { "log_type": "ADMIN_READ" \} ] \}, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" \}, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] \} ] \} ] \} For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.
   */
  export interface Schema$GoogleIamV1AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     */
    auditLogConfigs?: Schema$GoogleIamV1AuditLogConfig[];
    /**
     * Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
     */
    service?: string | null;
  }
  /**
   * Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \} ] \} This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
   */
  export interface Schema$GoogleIamV1AuditLogConfig {
    /**
     * Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
     */
    exemptedMembers?: string[] | null;
    /**
     * The log type that this config enables.
     */
    logType?: string | null;
  }
  /**
   * Associates `members`, or principals, with a `role`.
   */
  export interface Schema$GoogleIamV1Binding {
    /**
     * The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    condition?: Schema$GoogleTypeExpr;
    /**
     * Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid\}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid\}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid\}.svc.id.goog[{namespace\}/{kubernetes-sa\}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid\}`: An email address that represents a Google group. For example, `admins@example.com`. * `deleted:user:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid\}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid\}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid\}` and the recovered group retains the role in the binding. * `domain:{domain\}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     */
    role?: string | null;
  }
  /**
   * Request message for `GetIamPolicy` method.
   */
  export interface Schema$GoogleIamV1GetIamPolicyRequest {
    /**
     * OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.
     */
    options?: Schema$GoogleIamV1GetPolicyOptions;
  }
  /**
   * Encapsulates settings provided to GetIamPolicy.
   */
  export interface Schema$GoogleIamV1GetPolicyOptions {
    /**
     * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    requestedPolicyVersion?: number | null;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] \}, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", \} \} ], "etag": "BwWWja0YfJA=", "version": 3 \} **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
   */
  export interface Schema$GoogleIamV1Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$GoogleIamV1AuditConfig[];
    /**
     * Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.
     */
    bindings?: Schema$GoogleIamV1Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
     */
    etag?: string | null;
    /**
     * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    version?: number | null;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$GoogleIamV1SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.
     */
    policy?: Schema$GoogleIamV1Policy;
    /**
     * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`
     */
    updateMask?: string | null;
  }
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$GoogleIamV1TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[] | null;
  }
  /**
   * Response message for `TestIamPermissions` method.
   */
  export interface Schema$GoogleIamV1TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
     */
    permissions?: string[] | null;
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

  export class Resource$Accounts {
    context: APIRequestContext;
    mfaEnrollment: Resource$Accounts$Mfaenrollment;
    mfaSignIn: Resource$Accounts$Mfasignin;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.mfaEnrollment = new Resource$Accounts$Mfaenrollment(this.context);
      this.mfaSignIn = new Resource$Accounts$Mfasignin(this.context);
    }
  }

  export class Resource$Accounts$Mfaenrollment {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Finishes enrolling a second factor for the user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
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
     *   const res = await identitytoolkit.accounts.mfaEnrollment.finalize({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "idToken": "my_idToken",
     *       //   "phoneVerificationInfo": {},
     *       //   "tenantId": "my_tenantId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "idToken": "my_idToken",
     *   //   "phoneAuthInfo": {},
     *   //   "refreshToken": "my_refreshToken"
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
    finalize(
      params: Params$Resource$Accounts$Mfaenrollment$Finalize,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    finalize(
      params?: Params$Resource$Accounts$Mfaenrollment$Finalize,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse>;
    finalize(
      params: Params$Resource$Accounts$Mfaenrollment$Finalize,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    finalize(
      params: Params$Resource$Accounts$Mfaenrollment$Finalize,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse>
    ): void;
    finalize(
      params: Params$Resource$Accounts$Mfaenrollment$Finalize,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse>
    ): void;
    finalize(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse>
    ): void;
    finalize(
      paramsOrCallback?:
        | Params$Resource$Accounts$Mfaenrollment$Finalize
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Mfaenrollment$Finalize;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Mfaenrollment$Finalize;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/accounts/mfaEnrollment:finalize').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse>(
          parameters
        );
      }
    }

    /**
     * Step one of the MFA enrollment process. In SMS case, this sends an SMS verification code to the user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
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
     *   const res = await identitytoolkit.accounts.mfaEnrollment.start({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "idToken": "my_idToken",
     *       //   "phoneEnrollmentInfo": {},
     *       //   "tenantId": "my_tenantId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "phoneSessionInfo": {}
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
    start(
      params: Params$Resource$Accounts$Mfaenrollment$Start,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    start(
      params?: Params$Resource$Accounts$Mfaenrollment$Start,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse>;
    start(
      params: Params$Resource$Accounts$Mfaenrollment$Start,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    start(
      params: Params$Resource$Accounts$Mfaenrollment$Start,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse>
    ): void;
    start(
      params: Params$Resource$Accounts$Mfaenrollment$Start,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse>
    ): void;
    start(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse>
    ): void;
    start(
      paramsOrCallback?:
        | Params$Resource$Accounts$Mfaenrollment$Start
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Mfaenrollment$Start;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Mfaenrollment$Start;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/accounts/mfaEnrollment:start').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse>(
          parameters
        );
      }
    }

    /**
     * Revokes one second factor from the enrolled second factors for an account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
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
     *   const res = await identitytoolkit.accounts.mfaEnrollment.withdraw({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "idToken": "my_idToken",
     *       //   "mfaEnrollmentId": "my_mfaEnrollmentId",
     *       //   "tenantId": "my_tenantId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "idToken": "my_idToken",
     *   //   "refreshToken": "my_refreshToken"
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
    withdraw(
      params: Params$Resource$Accounts$Mfaenrollment$Withdraw,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    withdraw(
      params?: Params$Resource$Accounts$Mfaenrollment$Withdraw,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitV2WithdrawMfaResponse>;
    withdraw(
      params: Params$Resource$Accounts$Mfaenrollment$Withdraw,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    withdraw(
      params: Params$Resource$Accounts$Mfaenrollment$Withdraw,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2WithdrawMfaResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2WithdrawMfaResponse>
    ): void;
    withdraw(
      params: Params$Resource$Accounts$Mfaenrollment$Withdraw,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2WithdrawMfaResponse>
    ): void;
    withdraw(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2WithdrawMfaResponse>
    ): void;
    withdraw(
      paramsOrCallback?:
        | Params$Resource$Accounts$Mfaenrollment$Withdraw
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2WithdrawMfaResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2WithdrawMfaResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2WithdrawMfaResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitV2WithdrawMfaResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Mfaenrollment$Withdraw;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Mfaenrollment$Withdraw;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/accounts/mfaEnrollment:withdraw').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitV2WithdrawMfaResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitV2WithdrawMfaResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accounts$Mfaenrollment$Finalize
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest;
  }
  export interface Params$Resource$Accounts$Mfaenrollment$Start
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest;
  }
  export interface Params$Resource$Accounts$Mfaenrollment$Withdraw
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudIdentitytoolkitV2WithdrawMfaRequest;
  }

  export class Resource$Accounts$Mfasignin {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Verifies the MFA challenge and performs sign-in
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
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
     *   const res = await identitytoolkit.accounts.mfaSignIn.finalize({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "mfaPendingCredential": "my_mfaPendingCredential",
     *       //   "phoneVerificationInfo": {},
     *       //   "tenantId": "my_tenantId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "idToken": "my_idToken",
     *   //   "phoneAuthInfo": {},
     *   //   "refreshToken": "my_refreshToken"
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
    finalize(
      params: Params$Resource$Accounts$Mfasignin$Finalize,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    finalize(
      params?: Params$Resource$Accounts$Mfasignin$Finalize,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse>;
    finalize(
      params: Params$Resource$Accounts$Mfasignin$Finalize,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    finalize(
      params: Params$Resource$Accounts$Mfasignin$Finalize,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse>
    ): void;
    finalize(
      params: Params$Resource$Accounts$Mfasignin$Finalize,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse>
    ): void;
    finalize(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse>
    ): void;
    finalize(
      paramsOrCallback?:
        | Params$Resource$Accounts$Mfasignin$Finalize
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Mfasignin$Finalize;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Mfasignin$Finalize;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/accounts/mfaSignIn:finalize').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse>(
          parameters
        );
      }
    }

    /**
     * Sends the MFA challenge
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
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
     *   const res = await identitytoolkit.accounts.mfaSignIn.start({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "mfaEnrollmentId": "my_mfaEnrollmentId",
     *       //   "mfaPendingCredential": "my_mfaPendingCredential",
     *       //   "phoneSignInInfo": {},
     *       //   "tenantId": "my_tenantId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "phoneResponseInfo": {}
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
    start(
      params: Params$Resource$Accounts$Mfasignin$Start,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    start(
      params?: Params$Resource$Accounts$Mfasignin$Start,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitV2StartMfaSignInResponse>;
    start(
      params: Params$Resource$Accounts$Mfasignin$Start,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    start(
      params: Params$Resource$Accounts$Mfasignin$Start,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2StartMfaSignInResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2StartMfaSignInResponse>
    ): void;
    start(
      params: Params$Resource$Accounts$Mfasignin$Start,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2StartMfaSignInResponse>
    ): void;
    start(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2StartMfaSignInResponse>
    ): void;
    start(
      paramsOrCallback?:
        | Params$Resource$Accounts$Mfasignin$Start
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2StartMfaSignInResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2StartMfaSignInResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitV2StartMfaSignInResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitV2StartMfaSignInResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Mfasignin$Start;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Mfasignin$Start;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/accounts/mfaSignIn:start').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitV2StartMfaSignInResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitV2StartMfaSignInResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accounts$Mfasignin$Finalize
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest;
  }
  export interface Params$Resource$Accounts$Mfasignin$Start
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudIdentitytoolkitV2StartMfaSignInRequest;
  }

  export class Resource$Defaultsupportedidps {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List all default supported Idps.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.defaultSupportedIdps.list({
     *     // The maximum number of items to return.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token value returned from a previous List request, if any.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "defaultSupportedIdps": [],
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
      params: Params$Resource$Defaultsupportedidps$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Defaultsupportedidps$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse>;
    list(
      params: Params$Resource$Defaultsupportedidps$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Defaultsupportedidps$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse>
    ): void;
    list(
      params: Params$Resource$Defaultsupportedidps$List,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Defaultsupportedidps$List
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Defaultsupportedidps$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Defaultsupportedidps$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/defaultSupportedIdps').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Defaultsupportedidps$List
    extends StandardParameters {
    /**
     * The maximum number of items to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    defaultSupportedIdpConfigs: Resource$Projects$Defaultsupportedidpconfigs;
    identityPlatform: Resource$Projects$Identityplatform;
    inboundSamlConfigs: Resource$Projects$Inboundsamlconfigs;
    oauthIdpConfigs: Resource$Projects$Oauthidpconfigs;
    tenants: Resource$Projects$Tenants;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.defaultSupportedIdpConfigs =
        new Resource$Projects$Defaultsupportedidpconfigs(this.context);
      this.identityPlatform = new Resource$Projects$Identityplatform(
        this.context
      );
      this.inboundSamlConfigs = new Resource$Projects$Inboundsamlconfigs(
        this.context
      );
      this.oauthIdpConfigs = new Resource$Projects$Oauthidpconfigs(
        this.context
      );
      this.tenants = new Resource$Projects$Tenants(this.context);
    }

    /**
     * Retrieve an Identity Toolkit project configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
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
     *   const res = await identitytoolkit.projects.getConfig({
     *     // The resource name of the config, for example: "projects/my-awesome-project/config"
     *     name: 'projects/my-project/config',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "authorizedDomains": [],
     *   //   "autodeleteAnonymousUsers": false,
     *   //   "blockingFunctions": {},
     *   //   "client": {},
     *   //   "emailPrivacyConfig": {},
     *   //   "mfa": {},
     *   //   "monitoring": {},
     *   //   "multiTenant": {},
     *   //   "name": "my_name",
     *   //   "notification": {},
     *   //   "quota": {},
     *   //   "signIn": {},
     *   //   "smsRegionConfig": {},
     *   //   "subtype": "my_subtype"
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
    getConfig(
      params: Params$Resource$Projects$Getconfig,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getConfig(
      params?: Params$Resource$Projects$Getconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2Config>;
    getConfig(
      params: Params$Resource$Projects$Getconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getConfig(
      params: Params$Resource$Projects$Getconfig,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Config>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Config>
    ): void;
    getConfig(
      params: Params$Resource$Projects$Getconfig,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Config>
    ): void;
    getConfig(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Config>
    ): void;
    getConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Getconfig
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Config>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Config>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Config>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2Config>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Getconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Getconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2Config>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2Config>(
          parameters
        );
      }
    }

    /**
     * Update an Identity Toolkit project configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.updateConfig({
     *     // Output only. The name of the Config resource. Example: "projects/my-awesome-project/config"
     *     name: 'projects/my-project/config',
     *     // The update mask applies to the resource. Fields set in the config but not included in this update mask will be ignored. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "authorizedDomains": [],
     *       //   "autodeleteAnonymousUsers": false,
     *       //   "blockingFunctions": {},
     *       //   "client": {},
     *       //   "emailPrivacyConfig": {},
     *       //   "mfa": {},
     *       //   "monitoring": {},
     *       //   "multiTenant": {},
     *       //   "name": "my_name",
     *       //   "notification": {},
     *       //   "quota": {},
     *       //   "signIn": {},
     *       //   "smsRegionConfig": {},
     *       //   "subtype": "my_subtype"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "authorizedDomains": [],
     *   //   "autodeleteAnonymousUsers": false,
     *   //   "blockingFunctions": {},
     *   //   "client": {},
     *   //   "emailPrivacyConfig": {},
     *   //   "mfa": {},
     *   //   "monitoring": {},
     *   //   "multiTenant": {},
     *   //   "name": "my_name",
     *   //   "notification": {},
     *   //   "quota": {},
     *   //   "signIn": {},
     *   //   "smsRegionConfig": {},
     *   //   "subtype": "my_subtype"
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
    updateConfig(
      params: Params$Resource$Projects$Updateconfig,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateConfig(
      params?: Params$Resource$Projects$Updateconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2Config>;
    updateConfig(
      params: Params$Resource$Projects$Updateconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateConfig(
      params: Params$Resource$Projects$Updateconfig,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Config>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Config>
    ): void;
    updateConfig(
      params: Params$Resource$Projects$Updateconfig,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Config>
    ): void;
    updateConfig(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Config>
    ): void;
    updateConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Updateconfig
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Config>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Config>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Config>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2Config>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Updateconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Updateconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2Config>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2Config>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Getconfig
    extends StandardParameters {
    /**
     * The resource name of the config, for example: "projects/my-awesome-project/config"
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Updateconfig
    extends StandardParameters {
    /**
     * Output only. The name of the Config resource. Example: "projects/my-awesome-project/config"
     */
    name?: string;
    /**
     * The update mask applies to the resource. Fields set in the config but not included in this update mask will be ignored. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudIdentitytoolkitAdminV2Config;
  }

  export class Resource$Projects$Defaultsupportedidpconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create a default supported Idp configuration for an Identity Toolkit project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.defaultSupportedIdpConfigs.create({
     *     // The id of the Idp to create a config for. Call ListDefaultSupportedIdps for list of all default supported Idps.
     *     idpId: 'placeholder-value',
     *     // The parent resource name where the config to be created, for example: "projects/my-awesome-project"
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "appleSignInConfig": {},
     *       //   "clientId": "my_clientId",
     *       //   "clientSecret": "my_clientSecret",
     *       //   "enabled": false,
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appleSignInConfig": {},
     *   //   "clientId": "my_clientId",
     *   //   "clientSecret": "my_clientSecret",
     *   //   "enabled": false,
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
    create(
      params: Params$Resource$Projects$Defaultsupportedidpconfigs$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Defaultsupportedidpconfigs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>;
    create(
      params: Params$Resource$Projects$Defaultsupportedidpconfigs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Defaultsupportedidpconfigs$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
    ): void;
    create(
      params: Params$Resource$Projects$Defaultsupportedidpconfigs$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Defaultsupportedidpconfigs$Create
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Defaultsupportedidpconfigs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Defaultsupportedidpconfigs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/defaultSupportedIdpConfigs').replace(
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
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>(
          parameters
        );
      }
    }

    /**
     * Delete a default supported Idp configuration for an Identity Toolkit project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.defaultSupportedIdpConfigs.delete({
     *     // The resource name of the config, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com"
     *     name: 'projects/my-project/defaultSupportedIdpConfigs/my-defaultSupportedIdpConfig',
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
      params: Params$Resource$Projects$Defaultsupportedidpconfigs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Defaultsupportedidpconfigs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Defaultsupportedidpconfigs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Defaultsupportedidpconfigs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Defaultsupportedidpconfigs$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Defaultsupportedidpconfigs$Delete
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
        {}) as Params$Resource$Projects$Defaultsupportedidpconfigs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Defaultsupportedidpconfigs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
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
     * Retrieve a default supported Idp configuration for an Identity Toolkit project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.defaultSupportedIdpConfigs.get({
     *     // The resource name of the config, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com"
     *     name: 'projects/my-project/defaultSupportedIdpConfigs/my-defaultSupportedIdpConfig',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appleSignInConfig": {},
     *   //   "clientId": "my_clientId",
     *   //   "clientSecret": "my_clientSecret",
     *   //   "enabled": false,
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
    get(
      params: Params$Resource$Projects$Defaultsupportedidpconfigs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Defaultsupportedidpconfigs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>;
    get(
      params: Params$Resource$Projects$Defaultsupportedidpconfigs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Defaultsupportedidpconfigs$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Defaultsupportedidpconfigs$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Defaultsupportedidpconfigs$Get
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Defaultsupportedidpconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Defaultsupportedidpconfigs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>(
          parameters
        );
      }
    }

    /**
     * List all default supported Idp configurations for an Identity Toolkit project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.defaultSupportedIdpConfigs.list({
     *     // The maximum number of items to return.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token value returned from a previous List request, if any.
     *     pageToken: 'placeholder-value',
     *     // The parent resource name, for example, "projects/my-awesome-project".
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "defaultSupportedIdpConfigs": [],
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
      params: Params$Resource$Projects$Defaultsupportedidpconfigs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Defaultsupportedidpconfigs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse>;
    list(
      params: Params$Resource$Projects$Defaultsupportedidpconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Defaultsupportedidpconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Defaultsupportedidpconfigs$List,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Defaultsupportedidpconfigs$List
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Defaultsupportedidpconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Defaultsupportedidpconfigs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/defaultSupportedIdpConfigs').replace(
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
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse>(
          parameters
        );
      }
    }

    /**
     * Update a default supported Idp configuration for an Identity Toolkit project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.defaultSupportedIdpConfigs.patch({
     *     // The name of the DefaultSupportedIdpConfig resource, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com"
     *     name: 'projects/my-project/defaultSupportedIdpConfigs/my-defaultSupportedIdpConfig',
     *     // The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "appleSignInConfig": {},
     *       //   "clientId": "my_clientId",
     *       //   "clientSecret": "my_clientSecret",
     *       //   "enabled": false,
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appleSignInConfig": {},
     *   //   "clientId": "my_clientId",
     *   //   "clientSecret": "my_clientSecret",
     *   //   "enabled": false,
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
    patch(
      params: Params$Resource$Projects$Defaultsupportedidpconfigs$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Defaultsupportedidpconfigs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>;
    patch(
      params: Params$Resource$Projects$Defaultsupportedidpconfigs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Defaultsupportedidpconfigs$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
    ): void;
    patch(
      params: Params$Resource$Projects$Defaultsupportedidpconfigs$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Defaultsupportedidpconfigs$Patch
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Defaultsupportedidpconfigs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Defaultsupportedidpconfigs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Defaultsupportedidpconfigs$Create
    extends StandardParameters {
    /**
     * The id of the Idp to create a config for. Call ListDefaultSupportedIdps for list of all default supported Idps.
     */
    idpId?: string;
    /**
     * The parent resource name where the config to be created, for example: "projects/my-awesome-project"
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig;
  }
  export interface Params$Resource$Projects$Defaultsupportedidpconfigs$Delete
    extends StandardParameters {
    /**
     * The resource name of the config, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com"
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Defaultsupportedidpconfigs$Get
    extends StandardParameters {
    /**
     * The resource name of the config, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com"
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Defaultsupportedidpconfigs$List
    extends StandardParameters {
    /**
     * The maximum number of items to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * The parent resource name, for example, "projects/my-awesome-project".
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Defaultsupportedidpconfigs$Patch
    extends StandardParameters {
    /**
     * The name of the DefaultSupportedIdpConfig resource, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com"
     */
    name?: string;
    /**
     * The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig;
  }

  export class Resource$Projects$Identityplatform {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Initialize Identity Platform for a Cloud project. Identity Platform is an end-to-end authentication system for third-party users to access your apps and services. These could include mobile/web apps, games, APIs and beyond. This is the publicly available variant of EnableIdentityPlatform that is only available to billing-enabled projects.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
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
     *   const res = await identitytoolkit.projects.identityPlatform.initializeAuth({
     *     // The resource name of the target project the developer wants to enable Identity Platform for.
     *     project: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
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
    initializeAuth(
      params: Params$Resource$Projects$Identityplatform$Initializeauth,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    initializeAuth(
      params?: Params$Resource$Projects$Identityplatform$Initializeauth,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse>;
    initializeAuth(
      params: Params$Resource$Projects$Identityplatform$Initializeauth,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    initializeAuth(
      params: Params$Resource$Projects$Identityplatform$Initializeauth,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse>
    ): void;
    initializeAuth(
      params: Params$Resource$Projects$Identityplatform$Initializeauth,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse>
    ): void;
    initializeAuth(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse>
    ): void;
    initializeAuth(
      paramsOrCallback?:
        | Params$Resource$Projects$Identityplatform$Initializeauth
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Identityplatform$Initializeauth;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Identityplatform$Initializeauth;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v2/{+project}/identityPlatform:initializeAuth'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Identityplatform$Initializeauth
    extends StandardParameters {
    /**
     * The resource name of the target project the developer wants to enable Identity Platform for.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformRequest;
  }

  export class Resource$Projects$Inboundsamlconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create an inbound SAML configuration for an Identity Toolkit project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.inboundSamlConfigs.create({
     *     // The id to use for this config.
     *     inboundSamlConfigId: 'placeholder-value',
     *     // The parent resource name where the config to be created, for example: "projects/my-awesome-project"
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "enabled": false,
     *       //   "idpConfig": {},
     *       //   "name": "my_name",
     *       //   "spConfig": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "enabled": false,
     *   //   "idpConfig": {},
     *   //   "name": "my_name",
     *   //   "spConfig": {}
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
      params: Params$Resource$Projects$Inboundsamlconfigs$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Inboundsamlconfigs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>;
    create(
      params: Params$Resource$Projects$Inboundsamlconfigs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Inboundsamlconfigs$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
    ): void;
    create(
      params: Params$Resource$Projects$Inboundsamlconfigs$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Inboundsamlconfigs$Create
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Inboundsamlconfigs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Inboundsamlconfigs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/inboundSamlConfigs').replace(
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
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>(
          parameters
        );
      }
    }

    /**
     * Delete an inbound SAML configuration for an Identity Toolkit project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.inboundSamlConfigs.delete({
     *     // The resource name of the config to be deleted, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'.
     *     name: 'projects/my-project/inboundSamlConfigs/my-inboundSamlConfig',
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
      params: Params$Resource$Projects$Inboundsamlconfigs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Inboundsamlconfigs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Inboundsamlconfigs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Inboundsamlconfigs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Inboundsamlconfigs$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Inboundsamlconfigs$Delete
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
        {}) as Params$Resource$Projects$Inboundsamlconfigs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Inboundsamlconfigs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
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
     * Retrieve an inbound SAML configuration for an Identity Toolkit project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.inboundSamlConfigs.get({
     *     // The resource name of the config, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'.
     *     name: 'projects/my-project/inboundSamlConfigs/my-inboundSamlConfig',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "enabled": false,
     *   //   "idpConfig": {},
     *   //   "name": "my_name",
     *   //   "spConfig": {}
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
      params: Params$Resource$Projects$Inboundsamlconfigs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Inboundsamlconfigs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>;
    get(
      params: Params$Resource$Projects$Inboundsamlconfigs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Inboundsamlconfigs$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Inboundsamlconfigs$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Inboundsamlconfigs$Get
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Inboundsamlconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Inboundsamlconfigs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>(
          parameters
        );
      }
    }

    /**
     * List all inbound SAML configurations for an Identity Toolkit project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.inboundSamlConfigs.list({
     *     // The maximum number of items to return.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token value returned from a previous List request, if any.
     *     pageToken: 'placeholder-value',
     *     // The parent resource name, for example, "projects/my-awesome-project".
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "inboundSamlConfigs": [],
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
      params: Params$Resource$Projects$Inboundsamlconfigs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Inboundsamlconfigs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse>;
    list(
      params: Params$Resource$Projects$Inboundsamlconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Inboundsamlconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Inboundsamlconfigs$List,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Inboundsamlconfigs$List
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Inboundsamlconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Inboundsamlconfigs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/inboundSamlConfigs').replace(
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
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse>(
          parameters
        );
      }
    }

    /**
     * Update an inbound SAML configuration for an Identity Toolkit project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.inboundSamlConfigs.patch({
     *     // The name of the InboundSamlConfig resource, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'. Ignored during create requests.
     *     name: 'projects/my-project/inboundSamlConfigs/my-inboundSamlConfig',
     *     // The update mask applies to the resource. Empty update mask will result in updating nothing. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "enabled": false,
     *       //   "idpConfig": {},
     *       //   "name": "my_name",
     *       //   "spConfig": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "enabled": false,
     *   //   "idpConfig": {},
     *   //   "name": "my_name",
     *   //   "spConfig": {}
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
      params: Params$Resource$Projects$Inboundsamlconfigs$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Inboundsamlconfigs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>;
    patch(
      params: Params$Resource$Projects$Inboundsamlconfigs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Inboundsamlconfigs$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
    ): void;
    patch(
      params: Params$Resource$Projects$Inboundsamlconfigs$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Inboundsamlconfigs$Patch
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Inboundsamlconfigs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Inboundsamlconfigs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Inboundsamlconfigs$Create
    extends StandardParameters {
    /**
     * The id to use for this config.
     */
    inboundSamlConfigId?: string;
    /**
     * The parent resource name where the config to be created, for example: "projects/my-awesome-project"
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig;
  }
  export interface Params$Resource$Projects$Inboundsamlconfigs$Delete
    extends StandardParameters {
    /**
     * The resource name of the config to be deleted, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Inboundsamlconfigs$Get
    extends StandardParameters {
    /**
     * The resource name of the config, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Inboundsamlconfigs$List
    extends StandardParameters {
    /**
     * The maximum number of items to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * The parent resource name, for example, "projects/my-awesome-project".
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Inboundsamlconfigs$Patch
    extends StandardParameters {
    /**
     * The name of the InboundSamlConfig resource, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'. Ignored during create requests.
     */
    name?: string;
    /**
     * The update mask applies to the resource. Empty update mask will result in updating nothing. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig;
  }

  export class Resource$Projects$Oauthidpconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create an Oidc Idp configuration for an Identity Toolkit project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.oauthIdpConfigs.create({
     *     // The id to use for this config.
     *     oauthIdpConfigId: 'placeholder-value',
     *     // The parent resource name where the config to be created, for example: "projects/my-awesome-project"
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clientId": "my_clientId",
     *       //   "clientSecret": "my_clientSecret",
     *       //   "displayName": "my_displayName",
     *       //   "enabled": false,
     *       //   "issuer": "my_issuer",
     *       //   "name": "my_name",
     *       //   "responseType": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clientId": "my_clientId",
     *   //   "clientSecret": "my_clientSecret",
     *   //   "displayName": "my_displayName",
     *   //   "enabled": false,
     *   //   "issuer": "my_issuer",
     *   //   "name": "my_name",
     *   //   "responseType": {}
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
      params: Params$Resource$Projects$Oauthidpconfigs$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Oauthidpconfigs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>;
    create(
      params: Params$Resource$Projects$Oauthidpconfigs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Oauthidpconfigs$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
    ): void;
    create(
      params: Params$Resource$Projects$Oauthidpconfigs$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Oauthidpconfigs$Create
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Oauthidpconfigs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Oauthidpconfigs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/oauthIdpConfigs').replace(
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
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>(
          parameters
        );
      }
    }

    /**
     * Delete an Oidc Idp configuration for an Identity Toolkit project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.oauthIdpConfigs.delete({
     *     // The resource name of the config to be deleted, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'.
     *     name: 'projects/my-project/oauthIdpConfigs/my-oauthIdpConfig',
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
      params: Params$Resource$Projects$Oauthidpconfigs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Oauthidpconfigs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Oauthidpconfigs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Oauthidpconfigs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Oauthidpconfigs$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Oauthidpconfigs$Delete
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
        {}) as Params$Resource$Projects$Oauthidpconfigs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Oauthidpconfigs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
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
     * Retrieve an Oidc Idp configuration for an Identity Toolkit project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.oauthIdpConfigs.get({
     *     // The resource name of the config, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'.
     *     name: 'projects/my-project/oauthIdpConfigs/my-oauthIdpConfig',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clientId": "my_clientId",
     *   //   "clientSecret": "my_clientSecret",
     *   //   "displayName": "my_displayName",
     *   //   "enabled": false,
     *   //   "issuer": "my_issuer",
     *   //   "name": "my_name",
     *   //   "responseType": {}
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
      params: Params$Resource$Projects$Oauthidpconfigs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Oauthidpconfigs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>;
    get(
      params: Params$Resource$Projects$Oauthidpconfigs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Oauthidpconfigs$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Oauthidpconfigs$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Oauthidpconfigs$Get
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Oauthidpconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Oauthidpconfigs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>(
          parameters
        );
      }
    }

    /**
     * List all Oidc Idp configurations for an Identity Toolkit project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.oauthIdpConfigs.list({
     *     // The maximum number of items to return.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token value returned from a previous List request, if any.
     *     pageToken: 'placeholder-value',
     *     // The parent resource name, for example, "projects/my-awesome-project".
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "oauthIdpConfigs": []
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
      params: Params$Resource$Projects$Oauthidpconfigs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Oauthidpconfigs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse>;
    list(
      params: Params$Resource$Projects$Oauthidpconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Oauthidpconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Oauthidpconfigs$List,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Oauthidpconfigs$List
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Oauthidpconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Oauthidpconfigs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/oauthIdpConfigs').replace(
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
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse>(
          parameters
        );
      }
    }

    /**
     * Update an Oidc Idp configuration for an Identity Toolkit project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.oauthIdpConfigs.patch({
     *     // The name of the OAuthIdpConfig resource, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'. Ignored during create requests.
     *     name: 'projects/my-project/oauthIdpConfigs/my-oauthIdpConfig',
     *     // The update mask applies to the resource. Empty update mask will result in updating nothing. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clientId": "my_clientId",
     *       //   "clientSecret": "my_clientSecret",
     *       //   "displayName": "my_displayName",
     *       //   "enabled": false,
     *       //   "issuer": "my_issuer",
     *       //   "name": "my_name",
     *       //   "responseType": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clientId": "my_clientId",
     *   //   "clientSecret": "my_clientSecret",
     *   //   "displayName": "my_displayName",
     *   //   "enabled": false,
     *   //   "issuer": "my_issuer",
     *   //   "name": "my_name",
     *   //   "responseType": {}
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
      params: Params$Resource$Projects$Oauthidpconfigs$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Oauthidpconfigs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>;
    patch(
      params: Params$Resource$Projects$Oauthidpconfigs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Oauthidpconfigs$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
    ): void;
    patch(
      params: Params$Resource$Projects$Oauthidpconfigs$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Oauthidpconfigs$Patch
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Oauthidpconfigs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Oauthidpconfigs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Oauthidpconfigs$Create
    extends StandardParameters {
    /**
     * The id to use for this config.
     */
    oauthIdpConfigId?: string;
    /**
     * The parent resource name where the config to be created, for example: "projects/my-awesome-project"
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig;
  }
  export interface Params$Resource$Projects$Oauthidpconfigs$Delete
    extends StandardParameters {
    /**
     * The resource name of the config to be deleted, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Oauthidpconfigs$Get
    extends StandardParameters {
    /**
     * The resource name of the config, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Oauthidpconfigs$List
    extends StandardParameters {
    /**
     * The maximum number of items to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * The parent resource name, for example, "projects/my-awesome-project".
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Oauthidpconfigs$Patch
    extends StandardParameters {
    /**
     * The name of the OAuthIdpConfig resource, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'. Ignored during create requests.
     */
    name?: string;
    /**
     * The update mask applies to the resource. Empty update mask will result in updating nothing. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig;
  }

  export class Resource$Projects$Tenants {
    context: APIRequestContext;
    defaultSupportedIdpConfigs: Resource$Projects$Tenants$Defaultsupportedidpconfigs;
    inboundSamlConfigs: Resource$Projects$Tenants$Inboundsamlconfigs;
    oauthIdpConfigs: Resource$Projects$Tenants$Oauthidpconfigs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.defaultSupportedIdpConfigs =
        new Resource$Projects$Tenants$Defaultsupportedidpconfigs(this.context);
      this.inboundSamlConfigs =
        new Resource$Projects$Tenants$Inboundsamlconfigs(this.context);
      this.oauthIdpConfigs = new Resource$Projects$Tenants$Oauthidpconfigs(
        this.context
      );
    }

    /**
     * Create a tenant. Requires write permission on the Agent project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.tenants.create({
     *     // The parent resource name where the tenant will be created. For example, "projects/project1".
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "allowPasswordSignup": false,
     *       //   "autodeleteAnonymousUsers": false,
     *       //   "client": {},
     *       //   "disableAuth": false,
     *       //   "displayName": "my_displayName",
     *       //   "emailPrivacyConfig": {},
     *       //   "enableAnonymousUser": false,
     *       //   "enableEmailLinkSignin": false,
     *       //   "hashConfig": {},
     *       //   "inheritance": {},
     *       //   "mfaConfig": {},
     *       //   "monitoring": {},
     *       //   "name": "my_name",
     *       //   "smsRegionConfig": {},
     *       //   "testPhoneNumbers": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "allowPasswordSignup": false,
     *   //   "autodeleteAnonymousUsers": false,
     *   //   "client": {},
     *   //   "disableAuth": false,
     *   //   "displayName": "my_displayName",
     *   //   "emailPrivacyConfig": {},
     *   //   "enableAnonymousUser": false,
     *   //   "enableEmailLinkSignin": false,
     *   //   "hashConfig": {},
     *   //   "inheritance": {},
     *   //   "mfaConfig": {},
     *   //   "monitoring": {},
     *   //   "name": "my_name",
     *   //   "smsRegionConfig": {},
     *   //   "testPhoneNumbers": {}
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
      params: Params$Resource$Projects$Tenants$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Tenants$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2Tenant>;
    create(
      params: Params$Resource$Projects$Tenants$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Tenants$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Tenant>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Tenant>
    ): void;
    create(
      params: Params$Resource$Projects$Tenants$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Tenant>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Tenant>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Create
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Tenant>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Tenant>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Tenant>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2Tenant>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/tenants').replace(
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
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2Tenant>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2Tenant>(
          parameters
        );
      }
    }

    /**
     * Delete a tenant. Requires write permission on the Agent project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.tenants.delete({
     *     // Resource name of the tenant to delete.
     *     name: 'projects/my-project/tenants/my-tenant',
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
      params: Params$Resource$Projects$Tenants$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Tenants$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Tenants$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Tenants$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Tenants$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Delete
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
        {}) as Params$Resource$Projects$Tenants$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
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
     * Get a tenant. Requires read permission on the Tenant resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.tenants.get({
     *     // Resource name of the tenant to retrieve.
     *     name: 'projects/my-project/tenants/my-tenant',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "allowPasswordSignup": false,
     *   //   "autodeleteAnonymousUsers": false,
     *   //   "client": {},
     *   //   "disableAuth": false,
     *   //   "displayName": "my_displayName",
     *   //   "emailPrivacyConfig": {},
     *   //   "enableAnonymousUser": false,
     *   //   "enableEmailLinkSignin": false,
     *   //   "hashConfig": {},
     *   //   "inheritance": {},
     *   //   "mfaConfig": {},
     *   //   "monitoring": {},
     *   //   "name": "my_name",
     *   //   "smsRegionConfig": {},
     *   //   "testPhoneNumbers": {}
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
      params: Params$Resource$Projects$Tenants$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Tenants$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2Tenant>;
    get(
      params: Params$Resource$Projects$Tenants$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Tenants$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Tenant>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Tenant>
    ): void;
    get(
      params: Params$Resource$Projects$Tenants$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Tenant>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Tenant>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Get
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Tenant>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Tenant>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Tenant>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2Tenant>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2Tenant>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2Tenant>(
          parameters
        );
      }
    }

    /**
     * Gets the access control policy for a resource. An error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it. Caller must have the right Google IAM permission on the resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.tenants.getIamPolicy({
     *     // REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/tenants/my-tenant',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "options": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
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
    getIamPolicy(
      params: Params$Resource$Projects$Tenants$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Tenants$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Tenants$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Tenants$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Tenants$Getiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Getiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
      }
    }

    /**
     * List tenants under the given agent project. Requires read permission on the Agent project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.tenants.list({
     *     // The maximum number of results to return, capped at 1000. If not specified, the default value is 20.
     *     pageSize: 'placeholder-value',
     *     // The pagination token from the response of a previous request.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent resource name to list tenants for.
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "tenants": []
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
      params: Params$Resource$Projects$Tenants$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Tenants$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse>;
    list(
      params: Params$Resource$Projects$Tenants$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Tenants$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Tenants$List,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$List
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/tenants').replace(
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
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse>(
          parameters
        );
      }
    }

    /**
     * Update a tenant. Requires write permission on the Tenant resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.tenants.patch({
     *     // Output only. Resource name of a tenant. For example: "projects/{project-id\}/tenants/{tenant-id\}"
     *     name: 'projects/my-project/tenants/my-tenant',
     *     // If provided, only update fields set in the update mask. Otherwise, all settable fields will be updated. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "allowPasswordSignup": false,
     *       //   "autodeleteAnonymousUsers": false,
     *       //   "client": {},
     *       //   "disableAuth": false,
     *       //   "displayName": "my_displayName",
     *       //   "emailPrivacyConfig": {},
     *       //   "enableAnonymousUser": false,
     *       //   "enableEmailLinkSignin": false,
     *       //   "hashConfig": {},
     *       //   "inheritance": {},
     *       //   "mfaConfig": {},
     *       //   "monitoring": {},
     *       //   "name": "my_name",
     *       //   "smsRegionConfig": {},
     *       //   "testPhoneNumbers": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "allowPasswordSignup": false,
     *   //   "autodeleteAnonymousUsers": false,
     *   //   "client": {},
     *   //   "disableAuth": false,
     *   //   "displayName": "my_displayName",
     *   //   "emailPrivacyConfig": {},
     *   //   "enableAnonymousUser": false,
     *   //   "enableEmailLinkSignin": false,
     *   //   "hashConfig": {},
     *   //   "inheritance": {},
     *   //   "mfaConfig": {},
     *   //   "monitoring": {},
     *   //   "name": "my_name",
     *   //   "smsRegionConfig": {},
     *   //   "testPhoneNumbers": {}
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
      params: Params$Resource$Projects$Tenants$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Tenants$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2Tenant>;
    patch(
      params: Params$Resource$Projects$Tenants$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Tenants$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Tenant>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Tenant>
    ): void;
    patch(
      params: Params$Resource$Projects$Tenants$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Tenant>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Tenant>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Patch
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Tenant>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Tenant>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2Tenant>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2Tenant>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2Tenant>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2Tenant>(
          parameters
        );
      }
    }

    /**
     * Sets the access control policy for a resource. If the policy exists, it is replaced. Caller must have the right Google IAM permission on the resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.tenants.setIamPolicy({
     *     // REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/tenants/my-tenant',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "policy": {},
     *       //   "updateMask": "my_updateMask"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
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
    setIamPolicy(
      params: Params$Resource$Projects$Tenants$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Tenants$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Tenants$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Tenants$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Tenants$Setiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Setiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
      }
    }

    /**
     * Returns the caller's permissions on a resource. An error is returned if the resource does not exist. A caller is not required to have Google IAM permission to make this request.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.tenants.testIamPermissions({
     *     // REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/tenants/my-tenant',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "permissions": []
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
    testIamPermissions(
      params: Params$Resource$Projects$Tenants$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Tenants$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Tenants$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Tenants$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Tenants$Testiampermissions,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Testiampermissions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Tenants$Create
    extends StandardParameters {
    /**
     * The parent resource name where the tenant will be created. For example, "projects/project1".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudIdentitytoolkitAdminV2Tenant;
  }
  export interface Params$Resource$Projects$Tenants$Delete
    extends StandardParameters {
    /**
     * Resource name of the tenant to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Tenants$Get
    extends StandardParameters {
    /**
     * Resource name of the tenant to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Tenants$Getiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1GetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Tenants$List
    extends StandardParameters {
    /**
     * The maximum number of results to return, capped at 1000. If not specified, the default value is 20.
     */
    pageSize?: number;
    /**
     * The pagination token from the response of a previous request.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name to list tenants for.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Tenants$Patch
    extends StandardParameters {
    /**
     * Output only. Resource name of a tenant. For example: "projects/{project-id\}/tenants/{tenant-id\}"
     */
    name?: string;
    /**
     * If provided, only update fields set in the update mask. Otherwise, all settable fields will be updated. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudIdentitytoolkitAdminV2Tenant;
  }
  export interface Params$Resource$Projects$Tenants$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Tenants$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1TestIamPermissionsRequest;
  }

  export class Resource$Projects$Tenants$Defaultsupportedidpconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create a default supported Idp configuration for an Identity Toolkit project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await identitytoolkit.projects.tenants.defaultSupportedIdpConfigs.create({
     *       // The id of the Idp to create a config for. Call ListDefaultSupportedIdps for list of all default supported Idps.
     *       idpId: 'placeholder-value',
     *       // The parent resource name where the config to be created, for example: "projects/my-awesome-project"
     *       parent: 'projects/my-project/tenants/my-tenant',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "appleSignInConfig": {},
     *         //   "clientId": "my_clientId",
     *         //   "clientSecret": "my_clientSecret",
     *         //   "enabled": false,
     *         //   "name": "my_name"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appleSignInConfig": {},
     *   //   "clientId": "my_clientId",
     *   //   "clientSecret": "my_clientSecret",
     *   //   "enabled": false,
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
    create(
      params: Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>;
    create(
      params: Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
    ): void;
    create(
      params: Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Create
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/defaultSupportedIdpConfigs').replace(
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
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>(
          parameters
        );
      }
    }

    /**
     * Delete a default supported Idp configuration for an Identity Toolkit project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await identitytoolkit.projects.tenants.defaultSupportedIdpConfigs.delete({
     *       // The resource name of the config, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com"
     *       name: 'projects/my-project/tenants/my-tenant/defaultSupportedIdpConfigs/my-defaultSupportedIdpConfig',
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
    delete(
      params: Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Delete
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
        {}) as Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
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
     * Retrieve a default supported Idp configuration for an Identity Toolkit project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await identitytoolkit.projects.tenants.defaultSupportedIdpConfigs.get({
     *       // The resource name of the config, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com"
     *       name: 'projects/my-project/tenants/my-tenant/defaultSupportedIdpConfigs/my-defaultSupportedIdpConfig',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appleSignInConfig": {},
     *   //   "clientId": "my_clientId",
     *   //   "clientSecret": "my_clientSecret",
     *   //   "enabled": false,
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
    get(
      params: Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>;
    get(
      params: Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Get
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>(
          parameters
        );
      }
    }

    /**
     * List all default supported Idp configurations for an Identity Toolkit project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await identitytoolkit.projects.tenants.defaultSupportedIdpConfigs.list({
     *       // The maximum number of items to return.
     *       pageSize: 'placeholder-value',
     *       // The next_page_token value returned from a previous List request, if any.
     *       pageToken: 'placeholder-value',
     *       // The parent resource name, for example, "projects/my-awesome-project".
     *       parent: 'projects/my-project/tenants/my-tenant',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "defaultSupportedIdpConfigs": [],
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
      params: Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse>;
    list(
      params: Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$List,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$List
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/defaultSupportedIdpConfigs').replace(
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
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse>(
          parameters
        );
      }
    }

    /**
     * Update a default supported Idp configuration for an Identity Toolkit project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await identitytoolkit.projects.tenants.defaultSupportedIdpConfigs.patch({
     *       // The name of the DefaultSupportedIdpConfig resource, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com"
     *       name: 'projects/my-project/tenants/my-tenant/defaultSupportedIdpConfigs/my-defaultSupportedIdpConfig',
     *       // The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "appleSignInConfig": {},
     *         //   "clientId": "my_clientId",
     *         //   "clientSecret": "my_clientSecret",
     *         //   "enabled": false,
     *         //   "name": "my_name"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appleSignInConfig": {},
     *   //   "clientId": "my_clientId",
     *   //   "clientSecret": "my_clientSecret",
     *   //   "enabled": false,
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
    patch(
      params: Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>;
    patch(
      params: Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
    ): void;
    patch(
      params: Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Patch
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Create
    extends StandardParameters {
    /**
     * The id of the Idp to create a config for. Call ListDefaultSupportedIdps for list of all default supported Idps.
     */
    idpId?: string;
    /**
     * The parent resource name where the config to be created, for example: "projects/my-awesome-project"
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig;
  }
  export interface Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Delete
    extends StandardParameters {
    /**
     * The resource name of the config, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com"
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Get
    extends StandardParameters {
    /**
     * The resource name of the config, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com"
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$List
    extends StandardParameters {
    /**
     * The maximum number of items to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * The parent resource name, for example, "projects/my-awesome-project".
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Tenants$Defaultsupportedidpconfigs$Patch
    extends StandardParameters {
    /**
     * The name of the DefaultSupportedIdpConfig resource, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com"
     */
    name?: string;
    /**
     * The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig;
  }

  export class Resource$Projects$Tenants$Inboundsamlconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create an inbound SAML configuration for an Identity Toolkit project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.tenants.inboundSamlConfigs.create({
     *     // The id to use for this config.
     *     inboundSamlConfigId: 'placeholder-value',
     *     // The parent resource name where the config to be created, for example: "projects/my-awesome-project"
     *     parent: 'projects/my-project/tenants/my-tenant',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "enabled": false,
     *       //   "idpConfig": {},
     *       //   "name": "my_name",
     *       //   "spConfig": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "enabled": false,
     *   //   "idpConfig": {},
     *   //   "name": "my_name",
     *   //   "spConfig": {}
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
      params: Params$Resource$Projects$Tenants$Inboundsamlconfigs$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Tenants$Inboundsamlconfigs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>;
    create(
      params: Params$Resource$Projects$Tenants$Inboundsamlconfigs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Tenants$Inboundsamlconfigs$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
    ): void;
    create(
      params: Params$Resource$Projects$Tenants$Inboundsamlconfigs$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Inboundsamlconfigs$Create
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Inboundsamlconfigs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Tenants$Inboundsamlconfigs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/inboundSamlConfigs').replace(
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
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>(
          parameters
        );
      }
    }

    /**
     * Delete an inbound SAML configuration for an Identity Toolkit project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.tenants.inboundSamlConfigs.delete({
     *     // The resource name of the config to be deleted, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'.
     *     name: 'projects/my-project/tenants/my-tenant/inboundSamlConfigs/my-inboundSamlConfig',
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
      params: Params$Resource$Projects$Tenants$Inboundsamlconfigs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Tenants$Inboundsamlconfigs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Tenants$Inboundsamlconfigs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Tenants$Inboundsamlconfigs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Tenants$Inboundsamlconfigs$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Inboundsamlconfigs$Delete
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
        {}) as Params$Resource$Projects$Tenants$Inboundsamlconfigs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Tenants$Inboundsamlconfigs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
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
     * Retrieve an inbound SAML configuration for an Identity Toolkit project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.tenants.inboundSamlConfigs.get({
     *     // The resource name of the config, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'.
     *     name: 'projects/my-project/tenants/my-tenant/inboundSamlConfigs/my-inboundSamlConfig',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "enabled": false,
     *   //   "idpConfig": {},
     *   //   "name": "my_name",
     *   //   "spConfig": {}
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
      params: Params$Resource$Projects$Tenants$Inboundsamlconfigs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Tenants$Inboundsamlconfigs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>;
    get(
      params: Params$Resource$Projects$Tenants$Inboundsamlconfigs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Tenants$Inboundsamlconfigs$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Tenants$Inboundsamlconfigs$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Inboundsamlconfigs$Get
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Inboundsamlconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Inboundsamlconfigs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>(
          parameters
        );
      }
    }

    /**
     * List all inbound SAML configurations for an Identity Toolkit project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.tenants.inboundSamlConfigs.list({
     *     // The maximum number of items to return.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token value returned from a previous List request, if any.
     *     pageToken: 'placeholder-value',
     *     // The parent resource name, for example, "projects/my-awesome-project".
     *     parent: 'projects/my-project/tenants/my-tenant',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "inboundSamlConfigs": [],
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
      params: Params$Resource$Projects$Tenants$Inboundsamlconfigs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Tenants$Inboundsamlconfigs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse>;
    list(
      params: Params$Resource$Projects$Tenants$Inboundsamlconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Tenants$Inboundsamlconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Tenants$Inboundsamlconfigs$List,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Inboundsamlconfigs$List
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Inboundsamlconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Inboundsamlconfigs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/inboundSamlConfigs').replace(
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
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse>(
          parameters
        );
      }
    }

    /**
     * Update an inbound SAML configuration for an Identity Toolkit project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.tenants.inboundSamlConfigs.patch({
     *     // The name of the InboundSamlConfig resource, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'. Ignored during create requests.
     *     name: 'projects/my-project/tenants/my-tenant/inboundSamlConfigs/my-inboundSamlConfig',
     *     // The update mask applies to the resource. Empty update mask will result in updating nothing. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "enabled": false,
     *       //   "idpConfig": {},
     *       //   "name": "my_name",
     *       //   "spConfig": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "enabled": false,
     *   //   "idpConfig": {},
     *   //   "name": "my_name",
     *   //   "spConfig": {}
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
      params: Params$Resource$Projects$Tenants$Inboundsamlconfigs$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Tenants$Inboundsamlconfigs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>;
    patch(
      params: Params$Resource$Projects$Tenants$Inboundsamlconfigs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Tenants$Inboundsamlconfigs$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
    ): void;
    patch(
      params: Params$Resource$Projects$Tenants$Inboundsamlconfigs$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Inboundsamlconfigs$Patch
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Inboundsamlconfigs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Tenants$Inboundsamlconfigs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Tenants$Inboundsamlconfigs$Create
    extends StandardParameters {
    /**
     * The id to use for this config.
     */
    inboundSamlConfigId?: string;
    /**
     * The parent resource name where the config to be created, for example: "projects/my-awesome-project"
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig;
  }
  export interface Params$Resource$Projects$Tenants$Inboundsamlconfigs$Delete
    extends StandardParameters {
    /**
     * The resource name of the config to be deleted, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Tenants$Inboundsamlconfigs$Get
    extends StandardParameters {
    /**
     * The resource name of the config, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Tenants$Inboundsamlconfigs$List
    extends StandardParameters {
    /**
     * The maximum number of items to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * The parent resource name, for example, "projects/my-awesome-project".
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Tenants$Inboundsamlconfigs$Patch
    extends StandardParameters {
    /**
     * The name of the InboundSamlConfig resource, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'. Ignored during create requests.
     */
    name?: string;
    /**
     * The update mask applies to the resource. Empty update mask will result in updating nothing. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig;
  }

  export class Resource$Projects$Tenants$Oauthidpconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create an Oidc Idp configuration for an Identity Toolkit project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.tenants.oauthIdpConfigs.create({
     *     // The id to use for this config.
     *     oauthIdpConfigId: 'placeholder-value',
     *     // The parent resource name where the config to be created, for example: "projects/my-awesome-project"
     *     parent: 'projects/my-project/tenants/my-tenant',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clientId": "my_clientId",
     *       //   "clientSecret": "my_clientSecret",
     *       //   "displayName": "my_displayName",
     *       //   "enabled": false,
     *       //   "issuer": "my_issuer",
     *       //   "name": "my_name",
     *       //   "responseType": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clientId": "my_clientId",
     *   //   "clientSecret": "my_clientSecret",
     *   //   "displayName": "my_displayName",
     *   //   "enabled": false,
     *   //   "issuer": "my_issuer",
     *   //   "name": "my_name",
     *   //   "responseType": {}
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
      params: Params$Resource$Projects$Tenants$Oauthidpconfigs$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Tenants$Oauthidpconfigs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>;
    create(
      params: Params$Resource$Projects$Tenants$Oauthidpconfigs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Tenants$Oauthidpconfigs$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
    ): void;
    create(
      params: Params$Resource$Projects$Tenants$Oauthidpconfigs$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Oauthidpconfigs$Create
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Oauthidpconfigs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Oauthidpconfigs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/oauthIdpConfigs').replace(
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
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>(
          parameters
        );
      }
    }

    /**
     * Delete an Oidc Idp configuration for an Identity Toolkit project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.tenants.oauthIdpConfigs.delete({
     *     // The resource name of the config to be deleted, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'.
     *     name: 'projects/my-project/tenants/my-tenant/oauthIdpConfigs/my-oauthIdpConfig',
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
      params: Params$Resource$Projects$Tenants$Oauthidpconfigs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Tenants$Oauthidpconfigs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Tenants$Oauthidpconfigs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Tenants$Oauthidpconfigs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Tenants$Oauthidpconfigs$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Oauthidpconfigs$Delete
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
        {}) as Params$Resource$Projects$Tenants$Oauthidpconfigs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Oauthidpconfigs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
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
     * Retrieve an Oidc Idp configuration for an Identity Toolkit project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.tenants.oauthIdpConfigs.get({
     *     // The resource name of the config, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'.
     *     name: 'projects/my-project/tenants/my-tenant/oauthIdpConfigs/my-oauthIdpConfig',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clientId": "my_clientId",
     *   //   "clientSecret": "my_clientSecret",
     *   //   "displayName": "my_displayName",
     *   //   "enabled": false,
     *   //   "issuer": "my_issuer",
     *   //   "name": "my_name",
     *   //   "responseType": {}
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
      params: Params$Resource$Projects$Tenants$Oauthidpconfigs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Tenants$Oauthidpconfigs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>;
    get(
      params: Params$Resource$Projects$Tenants$Oauthidpconfigs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Tenants$Oauthidpconfigs$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Tenants$Oauthidpconfigs$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Oauthidpconfigs$Get
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Oauthidpconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Oauthidpconfigs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>(
          parameters
        );
      }
    }

    /**
     * List all Oidc Idp configurations for an Identity Toolkit project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.tenants.oauthIdpConfigs.list({
     *     // The maximum number of items to return.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token value returned from a previous List request, if any.
     *     pageToken: 'placeholder-value',
     *     // The parent resource name, for example, "projects/my-awesome-project".
     *     parent: 'projects/my-project/tenants/my-tenant',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "oauthIdpConfigs": []
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
      params: Params$Resource$Projects$Tenants$Oauthidpconfigs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Tenants$Oauthidpconfigs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse>;
    list(
      params: Params$Resource$Projects$Tenants$Oauthidpconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Tenants$Oauthidpconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Tenants$Oauthidpconfigs$List,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Oauthidpconfigs$List
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Oauthidpconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Oauthidpconfigs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/oauthIdpConfigs').replace(
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
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse>(
          parameters
        );
      }
    }

    /**
     * Update an Oidc Idp configuration for an Identity Toolkit project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.projects.tenants.oauthIdpConfigs.patch({
     *     // The name of the OAuthIdpConfig resource, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'. Ignored during create requests.
     *     name: 'projects/my-project/tenants/my-tenant/oauthIdpConfigs/my-oauthIdpConfig',
     *     // The update mask applies to the resource. Empty update mask will result in updating nothing. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clientId": "my_clientId",
     *       //   "clientSecret": "my_clientSecret",
     *       //   "displayName": "my_displayName",
     *       //   "enabled": false,
     *       //   "issuer": "my_issuer",
     *       //   "name": "my_name",
     *       //   "responseType": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clientId": "my_clientId",
     *   //   "clientSecret": "my_clientSecret",
     *   //   "displayName": "my_displayName",
     *   //   "enabled": false,
     *   //   "issuer": "my_issuer",
     *   //   "name": "my_name",
     *   //   "responseType": {}
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
      params: Params$Resource$Projects$Tenants$Oauthidpconfigs$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Tenants$Oauthidpconfigs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>;
    patch(
      params: Params$Resource$Projects$Tenants$Oauthidpconfigs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Tenants$Oauthidpconfigs$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
    ): void;
    patch(
      params: Params$Resource$Projects$Tenants$Oauthidpconfigs$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Tenants$Oauthidpconfigs$Patch
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Tenants$Oauthidpconfigs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Tenants$Oauthidpconfigs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://identitytoolkit.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Tenants$Oauthidpconfigs$Create
    extends StandardParameters {
    /**
     * The id to use for this config.
     */
    oauthIdpConfigId?: string;
    /**
     * The parent resource name where the config to be created, for example: "projects/my-awesome-project"
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig;
  }
  export interface Params$Resource$Projects$Tenants$Oauthidpconfigs$Delete
    extends StandardParameters {
    /**
     * The resource name of the config to be deleted, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Tenants$Oauthidpconfigs$Get
    extends StandardParameters {
    /**
     * The resource name of the config, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Tenants$Oauthidpconfigs$List
    extends StandardParameters {
    /**
     * The maximum number of items to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * The parent resource name, for example, "projects/my-awesome-project".
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Tenants$Oauthidpconfigs$Patch
    extends StandardParameters {
    /**
     * The name of the OAuthIdpConfig resource, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'. Ignored during create requests.
     */
    name?: string;
    /**
     * The update mask applies to the resource. Empty update mask will result in updating nothing. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig;
  }
}
