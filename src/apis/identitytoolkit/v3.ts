/**
 * Copyright 2019 Google LLC
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

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
} from 'google-auth-library';
import {
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  GlobalOptions,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {GaxiosPromise} from 'gaxios';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace identitytoolkit_v3 {
  export interface Options extends GlobalOptions {
    version: 'v3';
  }

  interface StandardParameters {
    /**
     * Data format for the response.
     */
    alt?: string;
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
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
  }

  /**
   * Google Identity Toolkit API
   *
   * Help the third party sites to implement federated login.
   *
   * @example
   * const {google} = require('googleapis');
   * const identitytoolkit = google.identitytoolkit('v3');
   *
   * @namespace identitytoolkit
   * @type {Function}
   * @version v3
   * @variation v3
   * @param {object=} options Options for Identitytoolkit
   */
  export class Identitytoolkit {
    context: APIRequestContext;
    relyingparty: Resource$Relyingparty;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.relyingparty = new Resource$Relyingparty(this.context);
    }
  }

  /**
   * Response of creating the IDP authentication URL.
   */
  export interface Schema$CreateAuthUriResponse {
    /**
     * all providers the user has once used to do federated login
     */
    allProviders?: string[] | null;
    /**
     * The URI used by the IDP to authenticate the user.
     */
    authUri?: string | null;
    /**
     * True if captcha is required.
     */
    captchaRequired?: boolean | null;
    /**
     * True if the authUri is for user&#39;s existing provider.
     */
    forExistingProvider?: boolean | null;
    /**
     * The fixed string identitytoolkit#CreateAuthUriResponse&quot;.
     */
    kind?: string | null;
    /**
     * The provider ID of the auth URI.
     */
    providerId?: string | null;
    /**
     * Whether the user is registered if the identifier is an email.
     */
    registered?: boolean | null;
    /**
     * Session ID which should be passed in the following verifyAssertion request.
     */
    sessionId?: string | null;
    /**
     * All sign-in methods this user has used.
     */
    signinMethods?: string[] | null;
  }
  /**
   * Respone of deleting account.
   */
  export interface Schema$DeleteAccountResponse {
    /**
     * The fixed string &quot;identitytoolkit#DeleteAccountResponse&quot;.
     */
    kind?: string | null;
  }
  /**
   * Response of downloading accounts in batch.
   */
  export interface Schema$DownloadAccountResponse {
    /**
     * The fixed string &quot;identitytoolkit#DownloadAccountResponse&quot;.
     */
    kind?: string | null;
    /**
     * The next page token. To be used in a subsequent request to return the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The user accounts data.
     */
    users?: Schema$UserInfo[];
  }
  /**
   * Response of email signIn.
   */
  export interface Schema$EmailLinkSigninResponse {
    /**
     * The user&#39;s email.
     */
    email?: string | null;
    /**
     * Expiration time of STS id token in seconds.
     */
    expiresIn?: string | null;
    /**
     * The STS id token to login the newly signed in user.
     */
    idToken?: string | null;
    /**
     * Whether the user is new.
     */
    isNewUser?: boolean | null;
    /**
     * The fixed string &quot;identitytoolkit#EmailLinkSigninResponse&quot;.
     */
    kind?: string | null;
    /**
     * The RP local ID of the user.
     */
    localId?: string | null;
    /**
     * The refresh token for the signed in user.
     */
    refreshToken?: string | null;
  }
  /**
   * Template for an email template.
   */
  export interface Schema$EmailTemplate {
    /**
     * Email body.
     */
    body?: string | null;
    /**
     * Email body format.
     */
    format?: string | null;
    /**
     * From address of the email.
     */
    from?: string | null;
    /**
     * From display name.
     */
    fromDisplayName?: string | null;
    /**
     * Reply-to address.
     */
    replyTo?: string | null;
    /**
     * Subject of the email.
     */
    subject?: string | null;
  }
  /**
   * Response of getting account information.
   */
  export interface Schema$GetAccountInfoResponse {
    /**
     * The fixed string &quot;identitytoolkit#GetAccountInfoResponse&quot;.
     */
    kind?: string | null;
    /**
     * The info of the users.
     */
    users?: Schema$UserInfo[];
  }
  /**
   * Response of getting a code for user confirmation (reset password, change email etc.).
   */
  export interface Schema$GetOobConfirmationCodeResponse {
    /**
     * The email address that the email is sent to.
     */
    email?: string | null;
    /**
     * The fixed string &quot;identitytoolkit#GetOobConfirmationCodeResponse&quot;.
     */
    kind?: string | null;
    /**
     * The code to be send to the user.
     */
    oobCode?: string | null;
  }
  /**
   * Response of getting recaptcha param.
   */
  export interface Schema$GetRecaptchaParamResponse {
    /**
     * The fixed string &quot;identitytoolkit#GetRecaptchaParamResponse&quot;.
     */
    kind?: string | null;
    /**
     * Site key registered at recaptcha.
     */
    recaptchaSiteKey?: string | null;
    /**
     * The stoken field for the recaptcha widget, used to request captcha challenge.
     */
    recaptchaStoken?: string | null;
  }
  /**
   * Request to get the IDP authentication URL.
   */
  export interface Schema$IdentitytoolkitRelyingpartyCreateAuthUriRequest {
    /**
     * The app ID of the mobile app, base64(CERT_SHA1):PACKAGE_NAME for Android, BUNDLE_ID for iOS.
     */
    appId?: string | null;
    /**
     * Explicitly specify the auth flow type. Currently only support &quot;CODE_FLOW&quot; type. The field is only used for Google provider.
     */
    authFlowType?: string | null;
    /**
     * The relying party OAuth client ID.
     */
    clientId?: string | null;
    /**
     * The opaque value used by the client to maintain context info between the authentication request and the IDP callback.
     */
    context?: string | null;
    /**
     * The URI to which the IDP redirects the user after the federated login flow.
     */
    continueUri?: string | null;
    /**
     * The query parameter that client can customize by themselves in auth url. The following parameters are reserved for server so that they cannot be customized by clients: client_id, response_type, scope, redirect_uri, state, oauth_token.
     */
    customParameter?: {[key: string]: string} | null;
    /**
     * The hosted domain to restrict sign-in to accounts at that domain for Google Apps hosted accounts.
     */
    hostedDomain?: string | null;
    /**
     * The email or federated ID of the user.
     */
    identifier?: string | null;
    /**
     * The developer&#39;s consumer key for OpenId OAuth Extension
     */
    oauthConsumerKey?: string | null;
    /**
     * Additional oauth scopes, beyond the basid user profile, that the user would be prompted to grant
     */
    oauthScope?: string | null;
    /**
     * Optional realm for OpenID protocol. The sub string &quot;scheme://domain:port&quot; of the param &quot;continueUri&quot; is used if this is not set.
     */
    openidRealm?: string | null;
    /**
     * The native app package for OTA installation.
     */
    otaApp?: string | null;
    /**
     * The IdP ID. For white listed IdPs it&#39;s a short domain name e.g. google.com, aol.com, live.net and yahoo.com. For other OpenID IdPs it&#39;s the OP identifier.
     */
    providerId?: string | null;
    /**
     * The session_id passed by client.
     */
    sessionId?: string | null;
    /**
     * For multi-tenant use cases, in order to construct sign-in URL with the correct IDP parameters, Firebear needs to know which Tenant to retrieve IDP configs from.
     */
    tenantId?: string | null;
    /**
     * Tenant project number to be used for idp discovery.
     */
    tenantProjectNumber?: string | null;
  }
  /**
   * Request to delete account.
   */
  export interface Schema$IdentitytoolkitRelyingpartyDeleteAccountRequest {
    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string | null;
    /**
     * The GITKit token or STS id token of the authenticated user.
     */
    idToken?: string | null;
    /**
     * The local ID of the user.
     */
    localId?: string | null;
  }
  /**
   * Request to download user account in batch.
   */
  export interface Schema$IdentitytoolkitRelyingpartyDownloadAccountRequest {
    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string | null;
    /**
     * The max number of results to return in the response.
     */
    maxResults?: number | null;
    /**
     * The token for the next page. This should be taken from the previous response.
     */
    nextPageToken?: string | null;
    /**
     * Specify which project (field value is actually project id) to operate. Only used when provided credential.
     */
    targetProjectId?: string | null;
  }
  /**
   * Request to sign in with email.
   */
  export interface Schema$IdentitytoolkitRelyingpartyEmailLinkSigninRequest {
    /**
     * The email address of the user.
     */
    email?: string | null;
    /**
     * Token for linking flow.
     */
    idToken?: string | null;
    /**
     * The confirmation code.
     */
    oobCode?: string | null;
  }
  /**
   * Request to get the account information.
   */
  export interface Schema$IdentitytoolkitRelyingpartyGetAccountInfoRequest {
    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string | null;
    /**
     * The list of emails of the users to inquiry.
     */
    email?: string[] | null;
    /**
     * The GITKit token of the authenticated user.
     */
    idToken?: string | null;
    /**
     * The list of local ID&#39;s of the users to inquiry.
     */
    localId?: string[] | null;
    /**
     * Privileged caller can query users by specified phone number.
     */
    phoneNumber?: string[] | null;
  }
  /**
   * Response of getting the project configuration.
   */
  export interface Schema$IdentitytoolkitRelyingpartyGetProjectConfigResponse {
    /**
     * Whether to allow password user sign in or sign up.
     */
    allowPasswordUser?: boolean | null;
    /**
     * Browser API key, needed when making http request to Apiary.
     */
    apiKey?: string | null;
    /**
     * Authorized domains.
     */
    authorizedDomains?: string[] | null;
    /**
     * Change email template.
     */
    changeEmailTemplate?: Schema$EmailTemplate;
    dynamicLinksDomain?: string | null;
    /**
     * Whether anonymous user is enabled.
     */
    enableAnonymousUser?: boolean | null;
    /**
     * OAuth2 provider configuration.
     */
    idpConfig?: Schema$IdpConfig[];
    /**
     * Legacy reset password email template.
     */
    legacyResetPasswordTemplate?: Schema$EmailTemplate;
    /**
     * Project ID of the relying party.
     */
    projectId?: string | null;
    /**
     * Reset password email template.
     */
    resetPasswordTemplate?: Schema$EmailTemplate;
    /**
     * Whether to use email sending provided by Firebear.
     */
    useEmailSending?: boolean | null;
    /**
     * Verify email template.
     */
    verifyEmailTemplate?: Schema$EmailTemplate;
  }
  /**
   * Respone of getting public keys.
   */
  export interface Schema$IdentitytoolkitRelyingpartyGetPublicKeysResponse {}
  /**
   * Request to reset the password.
   */
  export interface Schema$IdentitytoolkitRelyingpartyResetPasswordRequest {
    /**
     * The email address of the user.
     */
    email?: string | null;
    /**
     * The new password inputted by the user.
     */
    newPassword?: string | null;
    /**
     * The old password inputted by the user.
     */
    oldPassword?: string | null;
    /**
     * The confirmation code.
     */
    oobCode?: string | null;
  }
  /**
   * Request for Identitytoolkit-SendVerificationCode
   */
  export interface Schema$IdentitytoolkitRelyingpartySendVerificationCodeRequest {
    /**
     * Receipt of successful app token validation with APNS.
     */
    iosReceipt?: string | null;
    /**
     * Secret delivered to iOS app via APNS.
     */
    iosSecret?: string | null;
    /**
     * The phone number to send the verification code to in E.164 format.
     */
    phoneNumber?: string | null;
    /**
     * Recaptcha solution.
     */
    recaptchaToken?: string | null;
  }
  /**
   * Response for Identitytoolkit-SendVerificationCode
   */
  export interface Schema$IdentitytoolkitRelyingpartySendVerificationCodeResponse {
    /**
     * Encrypted session information
     */
    sessionInfo?: string | null;
  }
  /**
   * Request to set the account information.
   */
  export interface Schema$IdentitytoolkitRelyingpartySetAccountInfoRequest {
    /**
     * The captcha challenge.
     */
    captchaChallenge?: string | null;
    /**
     * Response to the captcha.
     */
    captchaResponse?: string | null;
    /**
     * The timestamp when the account is created.
     */
    createdAt?: string | null;
    /**
     * The custom attributes to be set in the user&#39;s id token.
     */
    customAttributes?: string | null;
    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string | null;
    /**
     * The attributes users request to delete.
     */
    deleteAttribute?: string[] | null;
    /**
     * The IDPs the user request to delete.
     */
    deleteProvider?: string[] | null;
    /**
     * Whether to disable the user.
     */
    disableUser?: boolean | null;
    /**
     * The name of the user.
     */
    displayName?: string | null;
    /**
     * The email of the user.
     */
    email?: string | null;
    /**
     * Mark the email as verified or not.
     */
    emailVerified?: boolean | null;
    /**
     * The GITKit token of the authenticated user.
     */
    idToken?: string | null;
    /**
     * Instance id token of the app.
     */
    instanceId?: string | null;
    /**
     * Last login timestamp.
     */
    lastLoginAt?: string | null;
    /**
     * The local ID of the user.
     */
    localId?: string | null;
    /**
     * The out-of-band code of the change email request.
     */
    oobCode?: string | null;
    /**
     * The new password of the user.
     */
    password?: string | null;
    /**
     * Privileged caller can update user with specified phone number.
     */
    phoneNumber?: string | null;
    /**
     * The photo url of the user.
     */
    photoUrl?: string | null;
    /**
     * The associated IDPs of the user.
     */
    provider?: string[] | null;
    /**
     * Whether return sts id token and refresh token instead of gitkit token.
     */
    returnSecureToken?: boolean | null;
    /**
     * Mark the user to upgrade to federated login.
     */
    upgradeToFederatedLogin?: boolean | null;
    /**
     * Timestamp in seconds for valid login token.
     */
    validSince?: string | null;
  }
  /**
   * Request to set the project configuration.
   */
  export interface Schema$IdentitytoolkitRelyingpartySetProjectConfigRequest {
    /**
     * Whether to allow password user sign in or sign up.
     */
    allowPasswordUser?: boolean | null;
    /**
     * Browser API key, needed when making http request to Apiary.
     */
    apiKey?: string | null;
    /**
     * Authorized domains for widget redirect.
     */
    authorizedDomains?: string[] | null;
    /**
     * Change email template.
     */
    changeEmailTemplate?: Schema$EmailTemplate;
    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string | null;
    /**
     * Whether to enable anonymous user.
     */
    enableAnonymousUser?: boolean | null;
    /**
     * Oauth2 provider configuration.
     */
    idpConfig?: Schema$IdpConfig[];
    /**
     * Legacy reset password email template.
     */
    legacyResetPasswordTemplate?: Schema$EmailTemplate;
    /**
     * Reset password email template.
     */
    resetPasswordTemplate?: Schema$EmailTemplate;
    /**
     * Whether to use email sending provided by Firebear.
     */
    useEmailSending?: boolean | null;
    /**
     * Verify email template.
     */
    verifyEmailTemplate?: Schema$EmailTemplate;
  }
  /**
   * Response of setting the project configuration.
   */
  export interface Schema$IdentitytoolkitRelyingpartySetProjectConfigResponse {
    /**
     * Project ID of the relying party.
     */
    projectId?: string | null;
  }
  /**
   * Request to sign out user.
   */
  export interface Schema$IdentitytoolkitRelyingpartySignOutUserRequest {
    /**
     * Instance id token of the app.
     */
    instanceId?: string | null;
    /**
     * The local ID of the user.
     */
    localId?: string | null;
  }
  /**
   * Response of signing out user.
   */
  export interface Schema$IdentitytoolkitRelyingpartySignOutUserResponse {
    /**
     * The local ID of the user.
     */
    localId?: string | null;
  }
  /**
   * Request to signup new user, create anonymous user or anonymous user reauth.
   */
  export interface Schema$IdentitytoolkitRelyingpartySignupNewUserRequest {
    /**
     * The captcha challenge.
     */
    captchaChallenge?: string | null;
    /**
     * Response to the captcha.
     */
    captchaResponse?: string | null;
    /**
     * Whether to disable the user. Only can be used by service account.
     */
    disabled?: boolean | null;
    /**
     * The name of the user.
     */
    displayName?: string | null;
    /**
     * The email of the user.
     */
    email?: string | null;
    /**
     * Mark the email as verified or not. Only can be used by service account.
     */
    emailVerified?: boolean | null;
    /**
     * The GITKit token of the authenticated user.
     */
    idToken?: string | null;
    /**
     * Instance id token of the app.
     */
    instanceId?: string | null;
    /**
     * Privileged caller can create user with specified user id.
     */
    localId?: string | null;
    /**
     * The new password of the user.
     */
    password?: string | null;
    /**
     * Privileged caller can create user with specified phone number.
     */
    phoneNumber?: string | null;
    /**
     * The photo url of the user.
     */
    photoUrl?: string | null;
    /**
     * For multi-tenant use cases, in order to construct sign-in URL with the correct IDP parameters, Firebear needs to know which Tenant to retrieve IDP configs from.
     */
    tenantId?: string | null;
    /**
     * Tenant project number to be used for idp discovery.
     */
    tenantProjectNumber?: string | null;
  }
  /**
   * Request to upload user account in batch.
   */
  export interface Schema$IdentitytoolkitRelyingpartyUploadAccountRequest {
    /**
     * Whether allow overwrite existing account when user local_id exists.
     */
    allowOverwrite?: boolean | null;
    blockSize?: number | null;
    /**
     * The following 4 fields are for standard scrypt algorithm.
     */
    cpuMemCost?: number | null;
    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string | null;
    dkLen?: number | null;
    /**
     * The password hash algorithm.
     */
    hashAlgorithm?: string | null;
    /**
     * Memory cost for hash calculation. Used by scrypt similar algorithms.
     */
    memoryCost?: number | null;
    parallelization?: number | null;
    /**
     * Rounds for hash calculation. Used by scrypt and similar algorithms.
     */
    rounds?: number | null;
    /**
     * The salt separator.
     */
    saltSeparator?: string | null;
    /**
     * If true, backend will do sanity check(including duplicate email and federated id) when uploading account.
     */
    sanityCheck?: boolean | null;
    /**
     * The key for to hash the password.
     */
    signerKey?: string | null;
    /**
     * Specify which project (field value is actually project id) to operate. Only used when provided credential.
     */
    targetProjectId?: string | null;
    /**
     * The account info to be stored.
     */
    users?: Schema$UserInfo[];
  }
  /**
   * Request to verify the IDP assertion.
   */
  export interface Schema$IdentitytoolkitRelyingpartyVerifyAssertionRequest {
    /**
     * When it&#39;s true, automatically creates a new account if the user doesn&#39;t exist. When it&#39;s false, allows existing user to sign in normally and throws exception if the user doesn&#39;t exist.
     */
    autoCreate?: boolean | null;
    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string | null;
    /**
     * The GITKit token of the authenticated user.
     */
    idToken?: string | null;
    /**
     * Instance id token of the app.
     */
    instanceId?: string | null;
    /**
     * The GITKit token for the non-trusted IDP pending to be confirmed by the user.
     */
    pendingIdToken?: string | null;
    /**
     * The post body if the request is a HTTP POST.
     */
    postBody?: string | null;
    /**
     * The URI to which the IDP redirects the user back. It may contain federated login result params added by the IDP.
     */
    requestUri?: string | null;
    /**
     * Whether return 200 and IDP credential rather than throw exception when federated id is already linked.
     */
    returnIdpCredential?: boolean | null;
    /**
     * Whether to return refresh tokens.
     */
    returnRefreshToken?: boolean | null;
    /**
     * Whether return sts id token and refresh token instead of gitkit token.
     */
    returnSecureToken?: boolean | null;
    /**
     * Session ID, which should match the one in previous createAuthUri request.
     */
    sessionId?: string | null;
    /**
     * For multi-tenant use cases, in order to construct sign-in URL with the correct IDP parameters, Firebear needs to know which Tenant to retrieve IDP configs from.
     */
    tenantId?: string | null;
    /**
     * Tenant project number to be used for idp discovery.
     */
    tenantProjectNumber?: string | null;
  }
  /**
   * Request to verify a custom token
   */
  export interface Schema$IdentitytoolkitRelyingpartyVerifyCustomTokenRequest {
    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string | null;
    /**
     * Instance id token of the app.
     */
    instanceId?: string | null;
    /**
     * Whether return sts id token and refresh token instead of gitkit token.
     */
    returnSecureToken?: boolean | null;
    /**
     * The custom token to verify
     */
    token?: string | null;
  }
  /**
   * Request to verify the password.
   */
  export interface Schema$IdentitytoolkitRelyingpartyVerifyPasswordRequest {
    /**
     * The captcha challenge.
     */
    captchaChallenge?: string | null;
    /**
     * Response to the captcha.
     */
    captchaResponse?: string | null;
    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string | null;
    /**
     * The email of the user.
     */
    email?: string | null;
    /**
     * The GITKit token of the authenticated user.
     */
    idToken?: string | null;
    /**
     * Instance id token of the app.
     */
    instanceId?: string | null;
    /**
     * The password inputed by the user.
     */
    password?: string | null;
    /**
     * The GITKit token for the non-trusted IDP, which is to be confirmed by the user.
     */
    pendingIdToken?: string | null;
    /**
     * Whether return sts id token and refresh token instead of gitkit token.
     */
    returnSecureToken?: boolean | null;
    /**
     * For multi-tenant use cases, in order to construct sign-in URL with the correct IDP parameters, Firebear needs to know which Tenant to retrieve IDP configs from.
     */
    tenantId?: string | null;
    /**
     * Tenant project number to be used for idp discovery.
     */
    tenantProjectNumber?: string | null;
  }
  /**
   * Request for Identitytoolkit-VerifyPhoneNumber
   */
  export interface Schema$IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest {
    code?: string | null;
    idToken?: string | null;
    operation?: string | null;
    phoneNumber?: string | null;
    /**
     * The session info previously returned by IdentityToolkit-SendVerificationCode.
     */
    sessionInfo?: string | null;
    temporaryProof?: string | null;
    verificationProof?: string | null;
  }
  /**
   * Response for Identitytoolkit-VerifyPhoneNumber
   */
  export interface Schema$IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse {
    expiresIn?: string | null;
    idToken?: string | null;
    isNewUser?: boolean | null;
    localId?: string | null;
    phoneNumber?: string | null;
    refreshToken?: string | null;
    temporaryProof?: string | null;
    temporaryProofExpiresIn?: string | null;
    verificationProof?: string | null;
    verificationProofExpiresIn?: string | null;
  }
  /**
   * Template for a single idp configuration.
   */
  export interface Schema$IdpConfig {
    /**
     * OAuth2 client ID.
     */
    clientId?: string | null;
    /**
     * Whether this IDP is enabled.
     */
    enabled?: boolean | null;
    /**
     * Percent of users who will be prompted/redirected federated login for this IDP.
     */
    experimentPercent?: number | null;
    /**
     * OAuth2 provider.
     */
    provider?: string | null;
    /**
     * OAuth2 client secret.
     */
    secret?: string | null;
    /**
     * Whitelisted client IDs for audience check.
     */
    whitelistedAudiences?: string[] | null;
  }
  /**
   * Request of getting a code for user confirmation (reset password, change email etc.)
   */
  export interface Schema$Relyingparty {
    /**
     * whether or not to install the android app on the device where the link is opened
     */
    androidInstallApp?: boolean | null;
    /**
     * minimum version of the app. if the version on the device is lower than this version then the user is taken to the play store to upgrade the app
     */
    androidMinimumVersion?: string | null;
    /**
     * android package name of the android app to handle the action code
     */
    androidPackageName?: string | null;
    /**
     * whether or not the app can handle the oob code without first going to web
     */
    canHandleCodeInApp?: boolean | null;
    /**
     * The recaptcha response from the user.
     */
    captchaResp?: string | null;
    /**
     * The recaptcha challenge presented to the user.
     */
    challenge?: string | null;
    /**
     * The url to continue to the Gitkit app
     */
    continueUrl?: string | null;
    /**
     * The email of the user.
     */
    email?: string | null;
    /**
     * The user&#39;s Gitkit login token for email change.
     */
    idToken?: string | null;
    /**
     * iOS app store id to download the app if it&#39;s not already installed
     */
    iOSAppStoreId?: string | null;
    /**
     * the iOS bundle id of iOS app to handle the action code
     */
    iOSBundleId?: string | null;
    /**
     * The fixed string &quot;identitytoolkit#relyingparty&quot;.
     */
    kind?: string | null;
    /**
     * The new email if the code is for email change.
     */
    newEmail?: string | null;
    /**
     * The request type.
     */
    requestType?: string | null;
    /**
     * The IP address of the user.
     */
    userIp?: string | null;
  }
  /**
   * Response of resetting the password.
   */
  export interface Schema$ResetPasswordResponse {
    /**
     * The user&#39;s email. If the out-of-band code is for email recovery, the user&#39;s original email.
     */
    email?: string | null;
    /**
     * The fixed string &quot;identitytoolkit#ResetPasswordResponse&quot;.
     */
    kind?: string | null;
    /**
     * If the out-of-band code is for email recovery, the user&#39;s new email.
     */
    newEmail?: string | null;
    /**
     * The request type.
     */
    requestType?: string | null;
  }
  /**
   * Respone of setting the account information.
   */
  export interface Schema$SetAccountInfoResponse {
    /**
     * The name of the user.
     */
    displayName?: string | null;
    /**
     * The email of the user.
     */
    email?: string | null;
    /**
     * If email has been verified.
     */
    emailVerified?: boolean | null;
    /**
     * If idToken is STS id token, then this field will be expiration time of STS id token in seconds.
     */
    expiresIn?: string | null;
    /**
     * The Gitkit id token to login the newly sign up user.
     */
    idToken?: string | null;
    /**
     * The fixed string &quot;identitytoolkit#SetAccountInfoResponse&quot;.
     */
    kind?: string | null;
    /**
     * The local ID of the user.
     */
    localId?: string | null;
    /**
     * The new email the user attempts to change to.
     */
    newEmail?: string | null;
    /**
     * The user&#39;s hashed password.
     */
    passwordHash?: string | null;
    /**
     * The photo url of the user.
     */
    photoUrl?: string | null;
    /**
     * The user&#39;s profiles at the associated IdPs.
     */
    providerUserInfo?: Array<{
      displayName?: string;
      federatedId?: string;
      photoUrl?: string;
      providerId?: string;
    }> | null;
    /**
     * If idToken is STS id token, then this field will be refresh token.
     */
    refreshToken?: string | null;
  }
  /**
   * Response of signing up new user, creating anonymous user or anonymous user reauth.
   */
  export interface Schema$SignupNewUserResponse {
    /**
     * The name of the user.
     */
    displayName?: string | null;
    /**
     * The email of the user.
     */
    email?: string | null;
    /**
     * If idToken is STS id token, then this field will be expiration time of STS id token in seconds.
     */
    expiresIn?: string | null;
    /**
     * The Gitkit id token to login the newly sign up user.
     */
    idToken?: string | null;
    /**
     * The fixed string &quot;identitytoolkit#SignupNewUserResponse&quot;.
     */
    kind?: string | null;
    /**
     * The RP local ID of the user.
     */
    localId?: string | null;
    /**
     * If idToken is STS id token, then this field will be refresh token.
     */
    refreshToken?: string | null;
  }
  /**
   * Respone of uploading accounts in batch.
   */
  export interface Schema$UploadAccountResponse {
    /**
     * The error encountered while processing the account info.
     */
    error?: Array<{index?: number; message?: string}> | null;
    /**
     * The fixed string &quot;identitytoolkit#UploadAccountResponse&quot;.
     */
    kind?: string | null;
  }
  /**
   * Template for an individual account info.
   */
  export interface Schema$UserInfo {
    /**
     * User creation timestamp.
     */
    createdAt?: string | null;
    /**
     * The custom attributes to be set in the user&#39;s id token.
     */
    customAttributes?: string | null;
    /**
     * Whether the user is authenticated by the developer.
     */
    customAuth?: boolean | null;
    /**
     * Whether the user is disabled.
     */
    disabled?: boolean | null;
    /**
     * The name of the user.
     */
    displayName?: string | null;
    /**
     * The email of the user.
     */
    email?: string | null;
    /**
     * Whether the email has been verified.
     */
    emailVerified?: boolean | null;
    /**
     * last login timestamp.
     */
    lastLoginAt?: string | null;
    /**
     * The local ID of the user.
     */
    localId?: string | null;
    /**
     * The user&#39;s hashed password.
     */
    passwordHash?: string | null;
    /**
     * The timestamp when the password was last updated.
     */
    passwordUpdatedAt?: number | null;
    /**
     * User&#39;s phone number.
     */
    phoneNumber?: string | null;
    /**
     * The URL of the user profile photo.
     */
    photoUrl?: string | null;
    /**
     * The IDP of the user.
     */
    providerUserInfo?: Array<{
      displayName?: string;
      email?: string;
      federatedId?: string;
      phoneNumber?: string;
      photoUrl?: string;
      providerId?: string;
      rawId?: string;
      screenName?: string;
    }> | null;
    /**
     * The user&#39;s plain text password.
     */
    rawPassword?: string | null;
    /**
     * The user&#39;s password salt.
     */
    salt?: string | null;
    /**
     * User&#39;s screen name at Twitter or login name at Github.
     */
    screenName?: string | null;
    /**
     * Timestamp in seconds for valid login token.
     */
    validSince?: string | null;
    /**
     * Version of the user&#39;s password.
     */
    version?: number | null;
  }
  /**
   * Response of verifying the IDP assertion.
   */
  export interface Schema$VerifyAssertionResponse {
    /**
     * The action code.
     */
    action?: string | null;
    /**
     * URL for OTA app installation.
     */
    appInstallationUrl?: string | null;
    /**
     * The custom scheme used by mobile app.
     */
    appScheme?: string | null;
    /**
     * The opaque value used by the client to maintain context info between the authentication request and the IDP callback.
     */
    context?: string | null;
    /**
     * The birth date of the IdP account.
     */
    dateOfBirth?: string | null;
    /**
     * The display name of the user.
     */
    displayName?: string | null;
    /**
     * The email returned by the IdP. NOTE: The federated login user may not own the email.
     */
    email?: string | null;
    /**
     * It&#39;s true if the email is recycled.
     */
    emailRecycled?: boolean | null;
    /**
     * The value is true if the IDP is also the email provider. It means the user owns the email.
     */
    emailVerified?: boolean | null;
    /**
     * Client error code.
     */
    errorMessage?: string | null;
    /**
     * If idToken is STS id token, then this field will be expiration time of STS id token in seconds.
     */
    expiresIn?: string | null;
    /**
     * The unique ID identifies the IdP account.
     */
    federatedId?: string | null;
    /**
     * The first name of the user.
     */
    firstName?: string | null;
    /**
     * The full name of the user.
     */
    fullName?: string | null;
    /**
     * The ID token.
     */
    idToken?: string | null;
    /**
     * It&#39;s the identifier param in the createAuthUri request if the identifier is an email. It can be used to check whether the user input email is different from the asserted email.
     */
    inputEmail?: string | null;
    /**
     * True if it&#39;s a new user sign-in, false if it&#39;s a returning user.
     */
    isNewUser?: boolean | null;
    /**
     * The fixed string &quot;identitytoolkit#VerifyAssertionResponse&quot;.
     */
    kind?: string | null;
    /**
     * The language preference of the user.
     */
    language?: string | null;
    /**
     * The last name of the user.
     */
    lastName?: string | null;
    /**
     * The RP local ID if it&#39;s already been mapped to the IdP account identified by the federated ID.
     */
    localId?: string | null;
    /**
     * Whether the assertion is from a non-trusted IDP and need account linking confirmation.
     */
    needConfirmation?: boolean | null;
    /**
     * Whether need client to supply email to complete the federated login flow.
     */
    needEmail?: boolean | null;
    /**
     * The nick name of the user.
     */
    nickName?: string | null;
    /**
     * The OAuth2 access token.
     */
    oauthAccessToken?: string | null;
    /**
     * The OAuth2 authorization code.
     */
    oauthAuthorizationCode?: string | null;
    /**
     * The lifetime in seconds of the OAuth2 access token.
     */
    oauthExpireIn?: number | null;
    /**
     * The OIDC id token.
     */
    oauthIdToken?: string | null;
    /**
     * The user approved request token for the OpenID OAuth extension.
     */
    oauthRequestToken?: string | null;
    /**
     * The scope for the OpenID OAuth extension.
     */
    oauthScope?: string | null;
    /**
     * The OAuth1 access token secret.
     */
    oauthTokenSecret?: string | null;
    /**
     * The original email stored in the mapping storage. It&#39;s returned when the federated ID is associated to a different email.
     */
    originalEmail?: string | null;
    /**
     * The URI of the public accessible profiel picture.
     */
    photoUrl?: string | null;
    /**
     * The IdP ID. For white listed IdPs it&#39;s a short domain name e.g. google.com, aol.com, live.net and yahoo.com. If the &quot;providerId&quot; param is set to OpenID OP identifer other than the whilte listed IdPs the OP identifier is returned. If the &quot;identifier&quot; param is federated ID in the createAuthUri request. The domain part of the federated ID is returned.
     */
    providerId?: string | null;
    /**
     * Raw IDP-returned user info.
     */
    rawUserInfo?: string | null;
    /**
     * If idToken is STS id token, then this field will be refresh token.
     */
    refreshToken?: string | null;
    /**
     * The screen_name of a Twitter user or the login name at Github.
     */
    screenName?: string | null;
    /**
     * The timezone of the user.
     */
    timeZone?: string | null;
    /**
     * When action is &#39;map&#39;, contains the idps which can be used for confirmation.
     */
    verifiedProvider?: string[] | null;
  }
  /**
   * Response from verifying a custom token
   */
  export interface Schema$VerifyCustomTokenResponse {
    /**
     * If idToken is STS id token, then this field will be expiration time of STS id token in seconds.
     */
    expiresIn?: string | null;
    /**
     * The GITKit token for authenticated user.
     */
    idToken?: string | null;
    /**
     * True if it&#39;s a new user sign-in, false if it&#39;s a returning user.
     */
    isNewUser?: boolean | null;
    /**
     * The fixed string &quot;identitytoolkit#VerifyCustomTokenResponse&quot;.
     */
    kind?: string | null;
    /**
     * If idToken is STS id token, then this field will be refresh token.
     */
    refreshToken?: string | null;
  }
  /**
   * Request of verifying the password.
   */
  export interface Schema$VerifyPasswordResponse {
    /**
     * The name of the user.
     */
    displayName?: string | null;
    /**
     * The email returned by the IdP. NOTE: The federated login user may not own the email.
     */
    email?: string | null;
    /**
     * If idToken is STS id token, then this field will be expiration time of STS id token in seconds.
     */
    expiresIn?: string | null;
    /**
     * The GITKit token for authenticated user.
     */
    idToken?: string | null;
    /**
     * The fixed string &quot;identitytoolkit#VerifyPasswordResponse&quot;.
     */
    kind?: string | null;
    /**
     * The RP local ID if it&#39;s already been mapped to the IdP account identified by the federated ID.
     */
    localId?: string | null;
    /**
     * The OAuth2 access token.
     */
    oauthAccessToken?: string | null;
    /**
     * The OAuth2 authorization code.
     */
    oauthAuthorizationCode?: string | null;
    /**
     * The lifetime in seconds of the OAuth2 access token.
     */
    oauthExpireIn?: number | null;
    /**
     * The URI of the user&#39;s photo at IdP
     */
    photoUrl?: string | null;
    /**
     * If idToken is STS id token, then this field will be refresh token.
     */
    refreshToken?: string | null;
    /**
     * Whether the email is registered.
     */
    registered?: boolean | null;
  }

  export class Resource$Relyingparty {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * identitytoolkit.relyingparty.createAuthUri
     * @desc Creates the URI used by the IdP to authenticate the user.
     * @alias identitytoolkit.relyingparty.createAuthUri
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().IdentitytoolkitRelyingpartyCreateAuthUriRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    createAuthUri(
      params?: Params$Resource$Relyingparty$Createauthuri,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CreateAuthUriResponse>;
    createAuthUri(
      params: Params$Resource$Relyingparty$Createauthuri,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CreateAuthUriResponse>,
      callback: BodyResponseCallback<Schema$CreateAuthUriResponse>
    ): void;
    createAuthUri(
      params: Params$Resource$Relyingparty$Createauthuri,
      callback: BodyResponseCallback<Schema$CreateAuthUriResponse>
    ): void;
    createAuthUri(
      callback: BodyResponseCallback<Schema$CreateAuthUriResponse>
    ): void;
    createAuthUri(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Createauthuri
        | BodyResponseCallback<Schema$CreateAuthUriResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CreateAuthUriResponse>,
      callback?: BodyResponseCallback<Schema$CreateAuthUriResponse>
    ): void | GaxiosPromise<Schema$CreateAuthUriResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Createauthuri;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Createauthuri;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/createAuthUri'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$CreateAuthUriResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CreateAuthUriResponse>(parameters);
      }
    }

    /**
     * identitytoolkit.relyingparty.deleteAccount
     * @desc Delete user account.
     * @alias identitytoolkit.relyingparty.deleteAccount
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().IdentitytoolkitRelyingpartyDeleteAccountRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    deleteAccount(
      params?: Params$Resource$Relyingparty$Deleteaccount,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DeleteAccountResponse>;
    deleteAccount(
      params: Params$Resource$Relyingparty$Deleteaccount,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DeleteAccountResponse>,
      callback: BodyResponseCallback<Schema$DeleteAccountResponse>
    ): void;
    deleteAccount(
      params: Params$Resource$Relyingparty$Deleteaccount,
      callback: BodyResponseCallback<Schema$DeleteAccountResponse>
    ): void;
    deleteAccount(
      callback: BodyResponseCallback<Schema$DeleteAccountResponse>
    ): void;
    deleteAccount(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Deleteaccount
        | BodyResponseCallback<Schema$DeleteAccountResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DeleteAccountResponse>,
      callback?: BodyResponseCallback<Schema$DeleteAccountResponse>
    ): void | GaxiosPromise<Schema$DeleteAccountResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Deleteaccount;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Deleteaccount;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/deleteAccount'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$DeleteAccountResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DeleteAccountResponse>(parameters);
      }
    }

    /**
     * identitytoolkit.relyingparty.downloadAccount
     * @desc Batch download user accounts.
     * @alias identitytoolkit.relyingparty.downloadAccount
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().IdentitytoolkitRelyingpartyDownloadAccountRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    downloadAccount(
      params?: Params$Resource$Relyingparty$Downloadaccount,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DownloadAccountResponse>;
    downloadAccount(
      params: Params$Resource$Relyingparty$Downloadaccount,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DownloadAccountResponse>,
      callback: BodyResponseCallback<Schema$DownloadAccountResponse>
    ): void;
    downloadAccount(
      params: Params$Resource$Relyingparty$Downloadaccount,
      callback: BodyResponseCallback<Schema$DownloadAccountResponse>
    ): void;
    downloadAccount(
      callback: BodyResponseCallback<Schema$DownloadAccountResponse>
    ): void;
    downloadAccount(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Downloadaccount
        | BodyResponseCallback<Schema$DownloadAccountResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DownloadAccountResponse>,
      callback?: BodyResponseCallback<Schema$DownloadAccountResponse>
    ): void | GaxiosPromise<Schema$DownloadAccountResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Downloadaccount;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Downloadaccount;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/downloadAccount'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$DownloadAccountResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DownloadAccountResponse>(parameters);
      }
    }

    /**
     * identitytoolkit.relyingparty.emailLinkSignin
     * @desc Reset password for a user.
     * @alias identitytoolkit.relyingparty.emailLinkSignin
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().IdentitytoolkitRelyingpartyEmailLinkSigninRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    emailLinkSignin(
      params?: Params$Resource$Relyingparty$Emaillinksignin,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EmailLinkSigninResponse>;
    emailLinkSignin(
      params: Params$Resource$Relyingparty$Emaillinksignin,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EmailLinkSigninResponse>,
      callback: BodyResponseCallback<Schema$EmailLinkSigninResponse>
    ): void;
    emailLinkSignin(
      params: Params$Resource$Relyingparty$Emaillinksignin,
      callback: BodyResponseCallback<Schema$EmailLinkSigninResponse>
    ): void;
    emailLinkSignin(
      callback: BodyResponseCallback<Schema$EmailLinkSigninResponse>
    ): void;
    emailLinkSignin(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Emaillinksignin
        | BodyResponseCallback<Schema$EmailLinkSigninResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$EmailLinkSigninResponse>,
      callback?: BodyResponseCallback<Schema$EmailLinkSigninResponse>
    ): void | GaxiosPromise<Schema$EmailLinkSigninResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Emaillinksignin;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Emaillinksignin;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/emailLinkSignin'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$EmailLinkSigninResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$EmailLinkSigninResponse>(parameters);
      }
    }

    /**
     * identitytoolkit.relyingparty.getAccountInfo
     * @desc Returns the account info.
     * @alias identitytoolkit.relyingparty.getAccountInfo
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().IdentitytoolkitRelyingpartyGetAccountInfoRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getAccountInfo(
      params?: Params$Resource$Relyingparty$Getaccountinfo,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetAccountInfoResponse>;
    getAccountInfo(
      params: Params$Resource$Relyingparty$Getaccountinfo,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetAccountInfoResponse>,
      callback: BodyResponseCallback<Schema$GetAccountInfoResponse>
    ): void;
    getAccountInfo(
      params: Params$Resource$Relyingparty$Getaccountinfo,
      callback: BodyResponseCallback<Schema$GetAccountInfoResponse>
    ): void;
    getAccountInfo(
      callback: BodyResponseCallback<Schema$GetAccountInfoResponse>
    ): void;
    getAccountInfo(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Getaccountinfo
        | BodyResponseCallback<Schema$GetAccountInfoResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GetAccountInfoResponse>,
      callback?: BodyResponseCallback<Schema$GetAccountInfoResponse>
    ): void | GaxiosPromise<Schema$GetAccountInfoResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Getaccountinfo;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Getaccountinfo;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/getAccountInfo'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GetAccountInfoResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GetAccountInfoResponse>(parameters);
      }
    }

    /**
     * identitytoolkit.relyingparty.getOobConfirmationCode
     * @desc Get a code for user action confirmation.
     * @alias identitytoolkit.relyingparty.getOobConfirmationCode
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().Relyingparty} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getOobConfirmationCode(
      params?: Params$Resource$Relyingparty$Getoobconfirmationcode,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetOobConfirmationCodeResponse>;
    getOobConfirmationCode(
      params: Params$Resource$Relyingparty$Getoobconfirmationcode,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetOobConfirmationCodeResponse>,
      callback: BodyResponseCallback<Schema$GetOobConfirmationCodeResponse>
    ): void;
    getOobConfirmationCode(
      params: Params$Resource$Relyingparty$Getoobconfirmationcode,
      callback: BodyResponseCallback<Schema$GetOobConfirmationCodeResponse>
    ): void;
    getOobConfirmationCode(
      callback: BodyResponseCallback<Schema$GetOobConfirmationCodeResponse>
    ): void;
    getOobConfirmationCode(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Getoobconfirmationcode
        | BodyResponseCallback<Schema$GetOobConfirmationCodeResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GetOobConfirmationCodeResponse>,
      callback?: BodyResponseCallback<Schema$GetOobConfirmationCodeResponse>
    ): void | GaxiosPromise<Schema$GetOobConfirmationCodeResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Getoobconfirmationcode;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Getoobconfirmationcode;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/identitytoolkit/v3/relyingparty/getOobConfirmationCode'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GetOobConfirmationCodeResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GetOobConfirmationCodeResponse>(
          parameters
        );
      }
    }

    /**
     * identitytoolkit.relyingparty.getProjectConfig
     * @desc Get project configuration.
     * @alias identitytoolkit.relyingparty.getProjectConfig
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.delegatedProjectNumber Delegated GCP project number of the request.
     * @param {string=} params.projectNumber GCP project number of the request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getProjectConfig(
      params?: Params$Resource$Relyingparty$Getprojectconfig,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$IdentitytoolkitRelyingpartyGetProjectConfigResponse
    >;
    getProjectConfig(
      params: Params$Resource$Relyingparty$Getprojectconfig,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$IdentitytoolkitRelyingpartyGetProjectConfigResponse
          >,
      callback: BodyResponseCallback<
        Schema$IdentitytoolkitRelyingpartyGetProjectConfigResponse
      >
    ): void;
    getProjectConfig(
      params: Params$Resource$Relyingparty$Getprojectconfig,
      callback: BodyResponseCallback<
        Schema$IdentitytoolkitRelyingpartyGetProjectConfigResponse
      >
    ): void;
    getProjectConfig(
      callback: BodyResponseCallback<
        Schema$IdentitytoolkitRelyingpartyGetProjectConfigResponse
      >
    ): void;
    getProjectConfig(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Getprojectconfig
        | BodyResponseCallback<
            Schema$IdentitytoolkitRelyingpartyGetProjectConfigResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$IdentitytoolkitRelyingpartyGetProjectConfigResponse
          >,
      callback?: BodyResponseCallback<
        Schema$IdentitytoolkitRelyingpartyGetProjectConfigResponse
      >
    ): void | GaxiosPromise<
      Schema$IdentitytoolkitRelyingpartyGetProjectConfigResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Getprojectconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Getprojectconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/getProjectConfig'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<
          Schema$IdentitytoolkitRelyingpartyGetProjectConfigResponse
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$IdentitytoolkitRelyingpartyGetProjectConfigResponse
        >(parameters);
      }
    }

    /**
     * identitytoolkit.relyingparty.getPublicKeys
     * @desc Get token signing public key.
     * @alias identitytoolkit.relyingparty.getPublicKeys
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getPublicKeys(
      params?: Params$Resource$Relyingparty$Getpublickeys,
      options?: MethodOptions
    ): GaxiosPromise<Schema$IdentitytoolkitRelyingpartyGetPublicKeysResponse>;
    getPublicKeys(
      params: Params$Resource$Relyingparty$Getpublickeys,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$IdentitytoolkitRelyingpartyGetPublicKeysResponse
          >,
      callback: BodyResponseCallback<
        Schema$IdentitytoolkitRelyingpartyGetPublicKeysResponse
      >
    ): void;
    getPublicKeys(
      params: Params$Resource$Relyingparty$Getpublickeys,
      callback: BodyResponseCallback<
        Schema$IdentitytoolkitRelyingpartyGetPublicKeysResponse
      >
    ): void;
    getPublicKeys(
      callback: BodyResponseCallback<
        Schema$IdentitytoolkitRelyingpartyGetPublicKeysResponse
      >
    ): void;
    getPublicKeys(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Getpublickeys
        | BodyResponseCallback<
            Schema$IdentitytoolkitRelyingpartyGetPublicKeysResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$IdentitytoolkitRelyingpartyGetPublicKeysResponse
          >,
      callback?: BodyResponseCallback<
        Schema$IdentitytoolkitRelyingpartyGetPublicKeysResponse
      >
    ): void | GaxiosPromise<
      Schema$IdentitytoolkitRelyingpartyGetPublicKeysResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Getpublickeys;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Getpublickeys;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/publicKeys'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<
          Schema$IdentitytoolkitRelyingpartyGetPublicKeysResponse
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$IdentitytoolkitRelyingpartyGetPublicKeysResponse
        >(parameters);
      }
    }

    /**
     * identitytoolkit.relyingparty.getRecaptchaParam
     * @desc Get recaptcha secure param.
     * @alias identitytoolkit.relyingparty.getRecaptchaParam
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getRecaptchaParam(
      params?: Params$Resource$Relyingparty$Getrecaptchaparam,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetRecaptchaParamResponse>;
    getRecaptchaParam(
      params: Params$Resource$Relyingparty$Getrecaptchaparam,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetRecaptchaParamResponse>,
      callback: BodyResponseCallback<Schema$GetRecaptchaParamResponse>
    ): void;
    getRecaptchaParam(
      params: Params$Resource$Relyingparty$Getrecaptchaparam,
      callback: BodyResponseCallback<Schema$GetRecaptchaParamResponse>
    ): void;
    getRecaptchaParam(
      callback: BodyResponseCallback<Schema$GetRecaptchaParamResponse>
    ): void;
    getRecaptchaParam(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Getrecaptchaparam
        | BodyResponseCallback<Schema$GetRecaptchaParamResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GetRecaptchaParamResponse>,
      callback?: BodyResponseCallback<Schema$GetRecaptchaParamResponse>
    ): void | GaxiosPromise<Schema$GetRecaptchaParamResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Getrecaptchaparam;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Getrecaptchaparam;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/getRecaptchaParam'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GetRecaptchaParamResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GetRecaptchaParamResponse>(parameters);
      }
    }

    /**
     * identitytoolkit.relyingparty.resetPassword
     * @desc Reset password for a user.
     * @alias identitytoolkit.relyingparty.resetPassword
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().IdentitytoolkitRelyingpartyResetPasswordRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resetPassword(
      params?: Params$Resource$Relyingparty$Resetpassword,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ResetPasswordResponse>;
    resetPassword(
      params: Params$Resource$Relyingparty$Resetpassword,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ResetPasswordResponse>,
      callback: BodyResponseCallback<Schema$ResetPasswordResponse>
    ): void;
    resetPassword(
      params: Params$Resource$Relyingparty$Resetpassword,
      callback: BodyResponseCallback<Schema$ResetPasswordResponse>
    ): void;
    resetPassword(
      callback: BodyResponseCallback<Schema$ResetPasswordResponse>
    ): void;
    resetPassword(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Resetpassword
        | BodyResponseCallback<Schema$ResetPasswordResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ResetPasswordResponse>,
      callback?: BodyResponseCallback<Schema$ResetPasswordResponse>
    ): void | GaxiosPromise<Schema$ResetPasswordResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Resetpassword;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Resetpassword;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/resetPassword'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ResetPasswordResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ResetPasswordResponse>(parameters);
      }
    }

    /**
     * identitytoolkit.relyingparty.sendVerificationCode
     * @desc Send SMS verification code.
     * @alias identitytoolkit.relyingparty.sendVerificationCode
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().IdentitytoolkitRelyingpartySendVerificationCodeRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    sendVerificationCode(
      params?: Params$Resource$Relyingparty$Sendverificationcode,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$IdentitytoolkitRelyingpartySendVerificationCodeResponse
    >;
    sendVerificationCode(
      params: Params$Resource$Relyingparty$Sendverificationcode,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$IdentitytoolkitRelyingpartySendVerificationCodeResponse
          >,
      callback: BodyResponseCallback<
        Schema$IdentitytoolkitRelyingpartySendVerificationCodeResponse
      >
    ): void;
    sendVerificationCode(
      params: Params$Resource$Relyingparty$Sendverificationcode,
      callback: BodyResponseCallback<
        Schema$IdentitytoolkitRelyingpartySendVerificationCodeResponse
      >
    ): void;
    sendVerificationCode(
      callback: BodyResponseCallback<
        Schema$IdentitytoolkitRelyingpartySendVerificationCodeResponse
      >
    ): void;
    sendVerificationCode(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Sendverificationcode
        | BodyResponseCallback<
            Schema$IdentitytoolkitRelyingpartySendVerificationCodeResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$IdentitytoolkitRelyingpartySendVerificationCodeResponse
          >,
      callback?: BodyResponseCallback<
        Schema$IdentitytoolkitRelyingpartySendVerificationCodeResponse
      >
    ): void | GaxiosPromise<
      Schema$IdentitytoolkitRelyingpartySendVerificationCodeResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Sendverificationcode;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Sendverificationcode;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/sendVerificationCode'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<
          Schema$IdentitytoolkitRelyingpartySendVerificationCodeResponse
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$IdentitytoolkitRelyingpartySendVerificationCodeResponse
        >(parameters);
      }
    }

    /**
     * identitytoolkit.relyingparty.setAccountInfo
     * @desc Set account info for a user.
     * @alias identitytoolkit.relyingparty.setAccountInfo
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().IdentitytoolkitRelyingpartySetAccountInfoRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setAccountInfo(
      params?: Params$Resource$Relyingparty$Setaccountinfo,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SetAccountInfoResponse>;
    setAccountInfo(
      params: Params$Resource$Relyingparty$Setaccountinfo,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SetAccountInfoResponse>,
      callback: BodyResponseCallback<Schema$SetAccountInfoResponse>
    ): void;
    setAccountInfo(
      params: Params$Resource$Relyingparty$Setaccountinfo,
      callback: BodyResponseCallback<Schema$SetAccountInfoResponse>
    ): void;
    setAccountInfo(
      callback: BodyResponseCallback<Schema$SetAccountInfoResponse>
    ): void;
    setAccountInfo(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Setaccountinfo
        | BodyResponseCallback<Schema$SetAccountInfoResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SetAccountInfoResponse>,
      callback?: BodyResponseCallback<Schema$SetAccountInfoResponse>
    ): void | GaxiosPromise<Schema$SetAccountInfoResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Setaccountinfo;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Setaccountinfo;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/setAccountInfo'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SetAccountInfoResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SetAccountInfoResponse>(parameters);
      }
    }

    /**
     * identitytoolkit.relyingparty.setProjectConfig
     * @desc Set project configuration.
     * @alias identitytoolkit.relyingparty.setProjectConfig
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().IdentitytoolkitRelyingpartySetProjectConfigRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setProjectConfig(
      params?: Params$Resource$Relyingparty$Setprojectconfig,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$IdentitytoolkitRelyingpartySetProjectConfigResponse
    >;
    setProjectConfig(
      params: Params$Resource$Relyingparty$Setprojectconfig,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$IdentitytoolkitRelyingpartySetProjectConfigResponse
          >,
      callback: BodyResponseCallback<
        Schema$IdentitytoolkitRelyingpartySetProjectConfigResponse
      >
    ): void;
    setProjectConfig(
      params: Params$Resource$Relyingparty$Setprojectconfig,
      callback: BodyResponseCallback<
        Schema$IdentitytoolkitRelyingpartySetProjectConfigResponse
      >
    ): void;
    setProjectConfig(
      callback: BodyResponseCallback<
        Schema$IdentitytoolkitRelyingpartySetProjectConfigResponse
      >
    ): void;
    setProjectConfig(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Setprojectconfig
        | BodyResponseCallback<
            Schema$IdentitytoolkitRelyingpartySetProjectConfigResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$IdentitytoolkitRelyingpartySetProjectConfigResponse
          >,
      callback?: BodyResponseCallback<
        Schema$IdentitytoolkitRelyingpartySetProjectConfigResponse
      >
    ): void | GaxiosPromise<
      Schema$IdentitytoolkitRelyingpartySetProjectConfigResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Setprojectconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Setprojectconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/setProjectConfig'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<
          Schema$IdentitytoolkitRelyingpartySetProjectConfigResponse
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$IdentitytoolkitRelyingpartySetProjectConfigResponse
        >(parameters);
      }
    }

    /**
     * identitytoolkit.relyingparty.signOutUser
     * @desc Sign out user.
     * @alias identitytoolkit.relyingparty.signOutUser
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().IdentitytoolkitRelyingpartySignOutUserRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    signOutUser(
      params?: Params$Resource$Relyingparty$Signoutuser,
      options?: MethodOptions
    ): GaxiosPromise<Schema$IdentitytoolkitRelyingpartySignOutUserResponse>;
    signOutUser(
      params: Params$Resource$Relyingparty$Signoutuser,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$IdentitytoolkitRelyingpartySignOutUserResponse
          >,
      callback: BodyResponseCallback<
        Schema$IdentitytoolkitRelyingpartySignOutUserResponse
      >
    ): void;
    signOutUser(
      params: Params$Resource$Relyingparty$Signoutuser,
      callback: BodyResponseCallback<
        Schema$IdentitytoolkitRelyingpartySignOutUserResponse
      >
    ): void;
    signOutUser(
      callback: BodyResponseCallback<
        Schema$IdentitytoolkitRelyingpartySignOutUserResponse
      >
    ): void;
    signOutUser(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Signoutuser
        | BodyResponseCallback<
            Schema$IdentitytoolkitRelyingpartySignOutUserResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$IdentitytoolkitRelyingpartySignOutUserResponse
          >,
      callback?: BodyResponseCallback<
        Schema$IdentitytoolkitRelyingpartySignOutUserResponse
      >
    ): void | GaxiosPromise<
      Schema$IdentitytoolkitRelyingpartySignOutUserResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Signoutuser;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Signoutuser;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/signOutUser'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$IdentitytoolkitRelyingpartySignOutUserResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$IdentitytoolkitRelyingpartySignOutUserResponse
        >(parameters);
      }
    }

    /**
     * identitytoolkit.relyingparty.signupNewUser
     * @desc Signup new user.
     * @alias identitytoolkit.relyingparty.signupNewUser
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().IdentitytoolkitRelyingpartySignupNewUserRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    signupNewUser(
      params?: Params$Resource$Relyingparty$Signupnewuser,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SignupNewUserResponse>;
    signupNewUser(
      params: Params$Resource$Relyingparty$Signupnewuser,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SignupNewUserResponse>,
      callback: BodyResponseCallback<Schema$SignupNewUserResponse>
    ): void;
    signupNewUser(
      params: Params$Resource$Relyingparty$Signupnewuser,
      callback: BodyResponseCallback<Schema$SignupNewUserResponse>
    ): void;
    signupNewUser(
      callback: BodyResponseCallback<Schema$SignupNewUserResponse>
    ): void;
    signupNewUser(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Signupnewuser
        | BodyResponseCallback<Schema$SignupNewUserResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SignupNewUserResponse>,
      callback?: BodyResponseCallback<Schema$SignupNewUserResponse>
    ): void | GaxiosPromise<Schema$SignupNewUserResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Signupnewuser;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Signupnewuser;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/signupNewUser'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SignupNewUserResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SignupNewUserResponse>(parameters);
      }
    }

    /**
     * identitytoolkit.relyingparty.uploadAccount
     * @desc Batch upload existing user accounts.
     * @alias identitytoolkit.relyingparty.uploadAccount
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().IdentitytoolkitRelyingpartyUploadAccountRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    uploadAccount(
      params?: Params$Resource$Relyingparty$Uploadaccount,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UploadAccountResponse>;
    uploadAccount(
      params: Params$Resource$Relyingparty$Uploadaccount,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$UploadAccountResponse>,
      callback: BodyResponseCallback<Schema$UploadAccountResponse>
    ): void;
    uploadAccount(
      params: Params$Resource$Relyingparty$Uploadaccount,
      callback: BodyResponseCallback<Schema$UploadAccountResponse>
    ): void;
    uploadAccount(
      callback: BodyResponseCallback<Schema$UploadAccountResponse>
    ): void;
    uploadAccount(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Uploadaccount
        | BodyResponseCallback<Schema$UploadAccountResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$UploadAccountResponse>,
      callback?: BodyResponseCallback<Schema$UploadAccountResponse>
    ): void | GaxiosPromise<Schema$UploadAccountResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Uploadaccount;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Uploadaccount;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/uploadAccount'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$UploadAccountResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$UploadAccountResponse>(parameters);
      }
    }

    /**
     * identitytoolkit.relyingparty.verifyAssertion
     * @desc Verifies the assertion returned by the IdP.
     * @alias identitytoolkit.relyingparty.verifyAssertion
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().IdentitytoolkitRelyingpartyVerifyAssertionRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    verifyAssertion(
      params?: Params$Resource$Relyingparty$Verifyassertion,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VerifyAssertionResponse>;
    verifyAssertion(
      params: Params$Resource$Relyingparty$Verifyassertion,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VerifyAssertionResponse>,
      callback: BodyResponseCallback<Schema$VerifyAssertionResponse>
    ): void;
    verifyAssertion(
      params: Params$Resource$Relyingparty$Verifyassertion,
      callback: BodyResponseCallback<Schema$VerifyAssertionResponse>
    ): void;
    verifyAssertion(
      callback: BodyResponseCallback<Schema$VerifyAssertionResponse>
    ): void;
    verifyAssertion(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Verifyassertion
        | BodyResponseCallback<Schema$VerifyAssertionResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$VerifyAssertionResponse>,
      callback?: BodyResponseCallback<Schema$VerifyAssertionResponse>
    ): void | GaxiosPromise<Schema$VerifyAssertionResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Verifyassertion;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Verifyassertion;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/verifyAssertion'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$VerifyAssertionResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$VerifyAssertionResponse>(parameters);
      }
    }

    /**
     * identitytoolkit.relyingparty.verifyCustomToken
     * @desc Verifies the developer asserted ID token.
     * @alias identitytoolkit.relyingparty.verifyCustomToken
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().IdentitytoolkitRelyingpartyVerifyCustomTokenRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    verifyCustomToken(
      params?: Params$Resource$Relyingparty$Verifycustomtoken,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VerifyCustomTokenResponse>;
    verifyCustomToken(
      params: Params$Resource$Relyingparty$Verifycustomtoken,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VerifyCustomTokenResponse>,
      callback: BodyResponseCallback<Schema$VerifyCustomTokenResponse>
    ): void;
    verifyCustomToken(
      params: Params$Resource$Relyingparty$Verifycustomtoken,
      callback: BodyResponseCallback<Schema$VerifyCustomTokenResponse>
    ): void;
    verifyCustomToken(
      callback: BodyResponseCallback<Schema$VerifyCustomTokenResponse>
    ): void;
    verifyCustomToken(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Verifycustomtoken
        | BodyResponseCallback<Schema$VerifyCustomTokenResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$VerifyCustomTokenResponse>,
      callback?: BodyResponseCallback<Schema$VerifyCustomTokenResponse>
    ): void | GaxiosPromise<Schema$VerifyCustomTokenResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Verifycustomtoken;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Verifycustomtoken;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/verifyCustomToken'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$VerifyCustomTokenResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$VerifyCustomTokenResponse>(parameters);
      }
    }

    /**
     * identitytoolkit.relyingparty.verifyPassword
     * @desc Verifies the user entered password.
     * @alias identitytoolkit.relyingparty.verifyPassword
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().IdentitytoolkitRelyingpartyVerifyPasswordRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    verifyPassword(
      params?: Params$Resource$Relyingparty$Verifypassword,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VerifyPasswordResponse>;
    verifyPassword(
      params: Params$Resource$Relyingparty$Verifypassword,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VerifyPasswordResponse>,
      callback: BodyResponseCallback<Schema$VerifyPasswordResponse>
    ): void;
    verifyPassword(
      params: Params$Resource$Relyingparty$Verifypassword,
      callback: BodyResponseCallback<Schema$VerifyPasswordResponse>
    ): void;
    verifyPassword(
      callback: BodyResponseCallback<Schema$VerifyPasswordResponse>
    ): void;
    verifyPassword(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Verifypassword
        | BodyResponseCallback<Schema$VerifyPasswordResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$VerifyPasswordResponse>,
      callback?: BodyResponseCallback<Schema$VerifyPasswordResponse>
    ): void | GaxiosPromise<Schema$VerifyPasswordResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Verifypassword;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Verifypassword;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/verifyPassword'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$VerifyPasswordResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$VerifyPasswordResponse>(parameters);
      }
    }

    /**
     * identitytoolkit.relyingparty.verifyPhoneNumber
     * @desc Verifies ownership of a phone number and creates/updates the user account accordingly.
     * @alias identitytoolkit.relyingparty.verifyPhoneNumber
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    verifyPhoneNumber(
      params?: Params$Resource$Relyingparty$Verifyphonenumber,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse
    >;
    verifyPhoneNumber(
      params: Params$Resource$Relyingparty$Verifyphonenumber,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse
          >,
      callback: BodyResponseCallback<
        Schema$IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse
      >
    ): void;
    verifyPhoneNumber(
      params: Params$Resource$Relyingparty$Verifyphonenumber,
      callback: BodyResponseCallback<
        Schema$IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse
      >
    ): void;
    verifyPhoneNumber(
      callback: BodyResponseCallback<
        Schema$IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse
      >
    ): void;
    verifyPhoneNumber(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Verifyphonenumber
        | BodyResponseCallback<
            Schema$IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse
          >,
      callback?: BodyResponseCallback<
        Schema$IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse
      >
    ): void | GaxiosPromise<
      Schema$IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Verifyphonenumber;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Verifyphonenumber;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/verifyPhoneNumber'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<
          Schema$IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse
        >(parameters);
      }
    }
  }

  export interface Params$Resource$Relyingparty$Createauthuri
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentitytoolkitRelyingpartyCreateAuthUriRequest;
  }
  export interface Params$Resource$Relyingparty$Deleteaccount
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentitytoolkitRelyingpartyDeleteAccountRequest;
  }
  export interface Params$Resource$Relyingparty$Downloadaccount
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentitytoolkitRelyingpartyDownloadAccountRequest;
  }
  export interface Params$Resource$Relyingparty$Emaillinksignin
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentitytoolkitRelyingpartyEmailLinkSigninRequest;
  }
  export interface Params$Resource$Relyingparty$Getaccountinfo
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentitytoolkitRelyingpartyGetAccountInfoRequest;
  }
  export interface Params$Resource$Relyingparty$Getoobconfirmationcode
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Relyingparty;
  }
  export interface Params$Resource$Relyingparty$Getprojectconfig
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Delegated GCP project number of the request.
     */
    delegatedProjectNumber?: string;
    /**
     * GCP project number of the request.
     */
    projectNumber?: string;
  }
  export interface Params$Resource$Relyingparty$Getpublickeys
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
  }
  export interface Params$Resource$Relyingparty$Getrecaptchaparam
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
  }
  export interface Params$Resource$Relyingparty$Resetpassword
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentitytoolkitRelyingpartyResetPasswordRequest;
  }
  export interface Params$Resource$Relyingparty$Sendverificationcode
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentitytoolkitRelyingpartySendVerificationCodeRequest;
  }
  export interface Params$Resource$Relyingparty$Setaccountinfo
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentitytoolkitRelyingpartySetAccountInfoRequest;
  }
  export interface Params$Resource$Relyingparty$Setprojectconfig
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentitytoolkitRelyingpartySetProjectConfigRequest;
  }
  export interface Params$Resource$Relyingparty$Signoutuser
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentitytoolkitRelyingpartySignOutUserRequest;
  }
  export interface Params$Resource$Relyingparty$Signupnewuser
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentitytoolkitRelyingpartySignupNewUserRequest;
  }
  export interface Params$Resource$Relyingparty$Uploadaccount
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentitytoolkitRelyingpartyUploadAccountRequest;
  }
  export interface Params$Resource$Relyingparty$Verifyassertion
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentitytoolkitRelyingpartyVerifyAssertionRequest;
  }
  export interface Params$Resource$Relyingparty$Verifycustomtoken
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentitytoolkitRelyingpartyVerifyCustomTokenRequest;
  }
  export interface Params$Resource$Relyingparty$Verifypassword
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentitytoolkitRelyingpartyVerifyPasswordRequest;
  }
  export interface Params$Resource$Relyingparty$Verifyphonenumber
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest;
  }
}
