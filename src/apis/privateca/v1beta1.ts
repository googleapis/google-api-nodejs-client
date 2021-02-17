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

export namespace privateca_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
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
   * Certificate Authority API
   *
   * The Certificate Authority Service API is a highly-available, scalable service that enables you to simplify and automate the management of private certificate authorities (CAs) while staying in control of your private keys.&quot;
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const privateca = google.privateca('v1beta1');
   * ```
   */
  export class Privateca {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * URLs where a CertificateAuthority will publish content.
   */
  export interface Schema$AccessUrls {
    /**
     * The URL where this CertificateAuthority's CA certificate is published. This will only be set for CAs that have been activated.
     */
    caCertificateAccessUrl?: string | null;
    /**
     * The URL where this CertificateAuthority's CRLs are published. This will only be set for CAs that have been activated.
     */
    crlAccessUrl?: string | null;
  }
  /**
   * Request message for CertificateAuthorityService.ActivateCertificateAuthority.
   */
  export interface Schema$ActivateCertificateAuthorityRequest {
    /**
     * Required. The signed CA certificate issued from FetchCertificateAuthorityCsrResponse.pem_csr.
     */
    pemCaCertificate?: string | null;
    /**
     * Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string | null;
    /**
     * Required. Must include information about the issuer of 'pem_ca_certificate', and any further issuers until the self-signed CA.
     */
    subordinateConfig?: Schema$SubordinateConfig;
  }
  export interface Schema$AllowedConfigList {
    /**
     * Required. All Certificates issued by the CertificateAuthority must match at least one listed ReusableConfigWrapper. If a ReusableConfigWrapper has an empty field, any value will be allowed for that field.
     */
    allowedConfigValues?: Schema$ReusableConfigWrapper[];
  }
  /**
   * AllowedSubjectAltNames specifies the allowed values for SubjectAltNames by the CertificateAuthority when issuing Certificates.
   */
  export interface Schema$AllowedSubjectAltNames {
    /**
     * Optional. Specifies if to allow custom X509Extension values.
     */
    allowCustomSans?: boolean | null;
    /**
     * Optional. Contains valid, fully-qualified host names. Glob patterns are also supported. To allow an explicit wildcard certificate, escape with backlash (i.e. "\*"). E.g. for globbed entries: '*bar.com' will allow 'foo.bar.com', but not '*.bar.com', unless the allow_globbing_dns_wildcards field is set. E.g. for wildcard entries: '\*.bar.com' will allow '*.bar.com', but not 'foo.bar.com'.
     */
    allowedDnsNames?: string[] | null;
    /**
     * Optional. Contains valid RFC 2822 E-mail addresses. Glob patterns are also supported.
     */
    allowedEmailAddresses?: string[] | null;
    /**
     * Optional. Contains valid 32-bit IPv4 addresses and subnet ranges or RFC 4291 IPv6 addresses and subnet ranges. Subnet ranges are specified using the '/' notation (e.g. 10.0.0.0/8, 2001:700:300:1800::/64). Glob patterns are supported only for ip address entries (i.e. not for subnet ranges).
     */
    allowedIps?: string[] | null;
    /**
     * Optional. Contains valid RFC 3986 URIs. Glob patterns are also supported. To match across path seperators (i.e. '/') use the double star glob pattern (i.e. '**').
     */
    allowedUris?: string[] | null;
    /**
     * Optional. Specifies if glob patterns used for allowed_dns_names allow wildcard certificates. If this is set, certificate requests with wildcard domains will be permitted to match a glob pattern specified in allowed_dns_names. Otherwise, certificate requests with wildcard domains will be permitted only if allowed_dns_names contains a literal wildcard.
     */
    allowGlobbingDnsWildcards?: boolean | null;
  }
  /**
   * Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \}, { "log_type": "ADMIN_READ" \} ] \}, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" \}, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] \} ] \} ] \} For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging.
   */
  export interface Schema$AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     */
    auditLogConfigs?: Schema$AuditLogConfig[];
    /**
     * Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
     */
    service?: string | null;
  }
  /**
   * Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \} ] \} This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
   */
  export interface Schema$AuditLogConfig {
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
   * Message for reporting billing requests through Eventstream.
   */
  export interface Schema$BillingView {
    /**
     * Billing requests to be reported for cloud.eventstream.v2.ResourceEvent Each request contains billing operations to be reported under a service name. See go/billing-view-construction for documentation on constructing billing view report requests.
     */
    reportRequests?: Schema$GoogleApiServicecontrolV1ReportRequest[];
  }
  /**
   * Associates `members` with a `role`.
   */
  export interface Schema$Binding {
    /**
     * The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the members in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    condition?: Schema$Expr;
    /**
     * Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. * `user:{emailid\}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid\}`: An email address that represents a service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `group:{emailid\}`: An email address that represents a Google group. For example, `admins@example.com`. * `deleted:user:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid\}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid\}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid\}` and the recovered group retains the role in the binding. * `domain:{domain\}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     */
    role?: string | null;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * Describes values that are relevant in a CA certificate.
   */
  export interface Schema$CaOptions {
    /**
     * Optional. Refers to the "CA" X.509 extension, which is a boolean value. When this value is missing, the extension will be omitted from the CA certificate.
     */
    isCa?: boolean | null;
    /**
     * Optional. Refers to the path length restriction X.509 extension. For a CA certificate, this value describes the depth of subordinate CA certificates that are allowed. If this value is less than 0, the request will fail. If this value is missing, the max path length will be omitted from the CA certificate.
     */
    maxIssuerPathLength?: number | null;
  }
  /**
   * A Certificate corresponds to a signed X.509 certificate issued by a CertificateAuthority.
   */
  export interface Schema$Certificate {
    /**
     * Output only. A structured description of the issued X.509 certificate.
     */
    certificateDescription?: Schema$CertificateDescription;
    /**
     * Immutable. A description of the certificate and key that does not require X.509 or ASN.1.
     */
    config?: Schema$CertificateConfig;
    /**
     * Output only. The time at which this Certificate was created.
     */
    createTime?: string | null;
    /**
     * Optional. Labels with user-defined metadata.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Required. Immutable. The desired lifetime of a certificate. Used to create the "not_before_time" and "not_after_time" fields inside an X.509 certificate. Note that the lifetime may be truncated if it would extend past the life of any certificate authority in the issuing chain.
     */
    lifetime?: string | null;
    /**
     * Output only. The resource path for this Certificate in the format `projects/x/locations/x/certificateAuthorities/x/certificates/x`.
     */
    name?: string | null;
    /**
     * Output only. The pem-encoded, signed X.509 certificate.
     */
    pemCertificate?: string | null;
    /**
     * Output only. The chain that may be used to verify the X.509 certificate. Expected to be in issuer-to-root order according to RFC 5246.
     */
    pemCertificateChain?: string[] | null;
    /**
     * Immutable. A pem-encoded X.509 certificate signing request (CSR).
     */
    pemCsr?: string | null;
    /**
     * Output only. Details regarding the revocation of this Certificate. This Certificate is considered revoked if and only if this field is present.
     */
    revocationDetails?: Schema$RevocationDetails;
    /**
     * Output only. The time at which this Certificate was updated.
     */
    updateTime?: string | null;
  }
  /**
   * A CertificateAuthority represents an individual Certificate Authority. A CertificateAuthority can be used to create Certificates.
   */
  export interface Schema$CertificateAuthority {
    /**
     * Output only. URLs for accessing content published by this CA, such as the CA certificate and CRLs.
     */
    accessUrls?: Schema$AccessUrls;
    /**
     * Output only. A structured description of this CertificateAuthority's CA certificate and its issuers. Ordered as self-to-root.
     */
    caCertificateDescriptions?: Schema$CertificateDescription[];
    /**
     * Optional. The CertificateAuthorityPolicy to enforce when issuing Certificates from this CertificateAuthority.
     */
    certificatePolicy?: Schema$CertificateAuthorityPolicy;
    /**
     * Required. Immutable. The config used to create a self-signed X.509 certificate or CSR.
     */
    config?: Schema$CertificateConfig;
    /**
     * Output only. The time at which this CertificateAuthority was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time at which this CertificateAuthority will be deleted, if scheduled for deletion.
     */
    deleteTime?: string | null;
    /**
     * Immutable. The name of a Cloud Storage bucket where this CertificateAuthority will publish content, such as the CA certificate and CRLs. This must be a bucket name, without any prefixes (such as `gs://`) or suffixes (such as `.googleapis.com`). For example, to use a bucket named `my-bucket`, you would simply specify `my-bucket`. If not specified, a managed bucket will be created.
     */
    gcsBucket?: string | null;
    /**
     * Optional. The IssuingOptions to follow when issuing Certificates from this CertificateAuthority.
     */
    issuingOptions?: Schema$IssuingOptions;
    /**
     * Required. Immutable. Used when issuing certificates for this CertificateAuthority. If this CertificateAuthority is a self-signed CertificateAuthority, this key is also used to sign the self-signed CA certificate. Otherwise, it is used to sign a CSR.
     */
    keySpec?: Schema$KeyVersionSpec;
    /**
     * Optional. Labels with user-defined metadata.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Required. The desired lifetime of the CA certificate. Used to create the "not_before_time" and "not_after_time" fields inside an X.509 certificate.
     */
    lifetime?: string | null;
    /**
     * Output only. The resource name for this CertificateAuthority in the format `projects/x/locations/x/certificateAuthorities/x`.
     */
    name?: string | null;
    /**
     * Output only. This CertificateAuthority's certificate chain, including the current CertificateAuthority's certificate. Ordered such that the root issuer is the final element (consistent with RFC 5246). For a self-signed CA, this will only list the current CertificateAuthority's certificate.
     */
    pemCaCertificates?: string[] | null;
    /**
     * Output only. The State for this CertificateAuthority.
     */
    state?: string | null;
    /**
     * Optional. If this is a subordinate CertificateAuthority, this field will be set with the subordinate configuration, which describes its issuers. This may be updated, but this CertificateAuthority must continue to validate.
     */
    subordinateConfig?: Schema$SubordinateConfig;
    /**
     * Required. Immutable. The Tier of this CertificateAuthority.
     */
    tier?: string | null;
    /**
     * Required. Immutable. The Type of this CertificateAuthority.
     */
    type?: string | null;
    /**
     * Output only. The time at which this CertificateAuthority was updated.
     */
    updateTime?: string | null;
  }
  /**
   * The issuing policy for a CertificateAuthority. Certificates will not be successfully issued from this CertificateAuthority if they violate the policy.
   */
  export interface Schema$CertificateAuthorityPolicy {
    /**
     * Optional. If any value is specified here, then all Certificates issued by the CertificateAuthority must match at least one listed value. If no value is specified, all values will be allowed for this fied. Glob patterns are also supported.
     */
    allowedCommonNames?: string[] | null;
    /**
     * Optional. All Certificates issued by the CertificateAuthority must match at least one listed ReusableConfigWrapper in the list.
     */
    allowedConfigList?: Schema$AllowedConfigList;
    /**
     * Optional. If specified, then only methods allowed in the IssuanceModes may be used to issue Certificates.
     */
    allowedIssuanceModes?: Schema$IssuanceModes;
    /**
     * Optional. If any Subject is specified here, then all Certificates issued by the CertificateAuthority must match at least one listed Subject. If a Subject has an empty field, any value will be allowed for that field.
     */
    allowedLocationsAndOrganizations?: Schema$Subject[];
    /**
     * Optional. If a AllowedSubjectAltNames is specified here, then all Certificates issued by the CertificateAuthority must match AllowedSubjectAltNames. If no value or an empty value is specified, any value will be allowed for the SubjectAltNames field.
     */
    allowedSans?: Schema$AllowedSubjectAltNames;
    /**
     * Optional. The maximum lifetime allowed by the CertificateAuthority. Note that if the any part if the issuing chain expires before a Certificate's requested maximum_lifetime, the effective lifetime will be explicitly truncated.
     */
    maximumLifetime?: string | null;
    /**
     * Optional. All Certificates issued by the CertificateAuthority will use the provided configuration values, overwriting any requested configuration values.
     */
    overwriteConfigValues?: Schema$ReusableConfigWrapper;
  }
  /**
   * A CertificateConfig describes an X.509 certificate or CSR that is to be created, as an alternative to using ASN.1.
   */
  export interface Schema$CertificateConfig {
    /**
     * Optional. The public key that corresponds to this config. This is, for example, used when issuing Certificates, but not when creating a self-signed CertificateAuthority or CertificateAuthority CSR.
     */
    publicKey?: Schema$PublicKey;
    /**
     * Required. Describes how some of the technical fields in a certificate should be populated.
     */
    reusableConfig?: Schema$ReusableConfigWrapper;
    /**
     * Required. Specifies some of the values in a certificate that are related to the subject.
     */
    subjectConfig?: Schema$SubjectConfig;
  }
  /**
   * A CertificateDescription describes an X.509 certificate or CSR that has been issued, as an alternative to using ASN.1 / X.509.
   */
  export interface Schema$CertificateDescription {
    /**
     * Describes lists of issuer CA certificate URLs that appear in the "Authority Information Access" extension in the certificate.
     */
    aiaIssuingCertificateUrls?: string[] | null;
    /**
     * Identifies the subject_key_id of the parent certificate, per https://tools.ietf.org/html/rfc5280#section-4.2.1.1
     */
    authorityKeyId?: Schema$KeyId;
    /**
     * The hash of the x.509 certificate.
     */
    certFingerprint?: Schema$CertificateFingerprint;
    /**
     * Describes some of the technical fields in a certificate.
     */
    configValues?: Schema$ReusableConfigValues;
    /**
     * Describes a list of locations to obtain CRL information, i.e. the DistributionPoint.fullName described by https://tools.ietf.org/html/rfc5280#section-4.2.1.13
     */
    crlDistributionPoints?: string[] | null;
    /**
     * The public key that corresponds to an issued certificate.
     */
    publicKey?: Schema$PublicKey;
    /**
     * Describes some of the values in a certificate that are related to the subject and lifetime.
     */
    subjectDescription?: Schema$SubjectDescription;
    /**
     * Provides a means of identifiying certificates that contain a particular public key, per https://tools.ietf.org/html/rfc5280#section-4.2.1.2.
     */
    subjectKeyId?: Schema$KeyId;
  }
  /**
   * A group of fingerprints for the x509 certificate.
   */
  export interface Schema$CertificateFingerprint {
    /**
     * The SHA 256 hash, encoded in hexadecimal, of the DER x509 certificate.
     */
    sha256Hash?: string | null;
  }
  /**
   * A CertificateRevocationList corresponds to a signed X.509 certificate Revocation List (CRL). A CRL contains the serial numbers of certificates that should no longer be trusted.
   */
  export interface Schema$CertificateRevocationList {
    /**
     * Output only. The location where 'pem_crl' can be accessed.
     */
    accessUrl?: string | null;
    /**
     * Output only. The time at which this CertificateRevocationList was created.
     */
    createTime?: string | null;
    /**
     * Optional. Labels with user-defined metadata.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The resource path for this CertificateRevocationList in the format `projects/x/locations/x/certificateAuthorities/x/ certificateRevocationLists/x`.
     */
    name?: string | null;
    /**
     * Output only. The PEM-encoded X.509 CRL.
     */
    pemCrl?: string | null;
    /**
     * Output only. The revoked serial numbers that appear in pem_crl.
     */
    revokedCertificates?: Schema$RevokedCertificate[];
    /**
     * Output only. The CRL sequence number that appears in pem_crl.
     */
    sequenceNumber?: string | null;
    /**
     * Output only. The State for this CertificateRevocationList.
     */
    state?: string | null;
    /**
     * Output only. The time at which this CertificateRevocationList was updated.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for CertificateAuthorityService.DisableCertificateAuthority.
   */
  export interface Schema$DisableCertificateAuthorityRequest {
    /**
     * Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \} The JSON representation for `Empty` is empty JSON object `{\}`.
   */
  export interface Schema$Empty {}
  /**
   * Request message for CertificateAuthorityService.EnableCertificateAuthority.
   */
  export interface Schema$EnableCertificateAuthorityRequest {
    /**
     * Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string | null;
  }
  /**
   * Exemplars are example points that may be used to annotate aggregated distribution values. They are metadata that gives information about a particular value added to a Distribution bucket, such as a trace ID that was active when a value was added. They may contain further information, such as a example values and timestamps, origin, etc.
   */
  export interface Schema$Exemplar {
    /**
     * Contextual information about the example value. Examples are: Trace: type.googleapis.com/google.monitoring.v3.SpanContext Literal string: type.googleapis.com/google.protobuf.StringValue Labels dropped during aggregation: type.googleapis.com/google.monitoring.v3.DroppedLabels There may be only a single attachment of any given message type in a single exemplar, and this is enforced by the system.
     */
    attachments?: Array<{[key: string]: any}> | null;
    /**
     * The observation (sampling) time of the above value.
     */
    timestamp?: string | null;
    /**
     * Value of the exemplar point. This value determines to which bucket the exemplar belongs.
     */
    value?: number | null;
  }
  /**
   * Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
   */
  export interface Schema$Expr {
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
  /**
   * KeyUsage.ExtendedKeyUsageOptions has fields that correspond to certain common OIDs that could be specified as an extended key usage value.
   */
  export interface Schema$ExtendedKeyUsageOptions {
    /**
     * Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS.
     */
    clientAuth?: boolean | null;
    /**
     * Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication".
     */
    codeSigning?: boolean | null;
    /**
     * Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection".
     */
    emailProtection?: boolean | null;
    /**
     * Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses".
     */
    ocspSigning?: boolean | null;
    /**
     * Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS.
     */
    serverAuth?: boolean | null;
    /**
     * Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time".
     */
    timeStamping?: boolean | null;
  }
  /**
   * Response message for CertificateAuthorityService.FetchCertificateAuthorityCsr.
   */
  export interface Schema$FetchCertificateAuthorityCsrResponse {
    /**
     * Output only. The PEM-encoded signed certificate signing request (CSR).
     */
    pemCsr?: string | null;
  }
  /**
   * A set of attributes, each in the format `[KEY]:[VALUE]`.
   */
  export interface Schema$GoogleApiServicecontrolV1Attributes {
    /**
     * The set of attributes. Each attribute's key can be up to 128 bytes long. The value can be a string up to 256 bytes, a signed 64-bit integer, or the Boolean values `true` and `false`. For example: "/instance_id": "my-instance" "/http/user_agent": "" "/http/request_bytes": 300 "abc.com/myattribute": true
     */
    attributeMap?: {
      [key: string]: Schema$GoogleApiServicecontrolV1AttributeValue;
    } | null;
    /**
     * The number of attributes that were discarded. Attributes can be discarded because their keys are too long or because there are too many attributes. If this value is 0 then all attributes are valid.
     */
    droppedAttributesCount?: number | null;
  }
  /**
   * The allowed types for [VALUE] in a `[KEY]:[VALUE]` attribute.
   */
  export interface Schema$GoogleApiServicecontrolV1AttributeValue {
    /**
     * A Boolean value represented by `true` or `false`.
     */
    boolValue?: boolean | null;
    /**
     * A 64-bit signed integer.
     */
    intValue?: string | null;
    /**
     * A string up to 256 bytes long.
     */
    stringValue?: Schema$GoogleApiServicecontrolV1TruncatableString;
  }
  /**
   * Distribution represents a frequency distribution of double-valued sample points. It contains the size of the population of sample points plus additional optional information: - the arithmetic mean of the samples - the minimum and maximum of the samples - the sum-squared-deviation of the samples, used to compute variance - a histogram of the values of the sample points
   */
  export interface Schema$GoogleApiServicecontrolV1Distribution {
    /**
     * The number of samples in each histogram bucket. `bucket_counts` are optional. If present, they must sum to the `count` value. The buckets are defined below in `bucket_option`. There are N buckets. `bucket_counts[0]` is the number of samples in the underflow bucket. `bucket_counts[1]` to `bucket_counts[N-1]` are the numbers of samples in each of the finite buckets. And `bucket_counts[N] is the number of samples in the overflow bucket. See the comments of `bucket_option` below for more details. Any suffix of trailing zeros may be omitted.
     */
    bucketCounts?: string[] | null;
    /**
     * The total number of samples in the distribution. Must be \>= 0.
     */
    count?: string | null;
    /**
     * Example points. Must be in increasing order of `value` field.
     */
    exemplars?: Schema$Exemplar[];
    /**
     * Buckets with arbitrary user-provided width.
     */
    explicitBuckets?: Schema$GoogleApiServicecontrolV1ExplicitBuckets;
    /**
     * Buckets with exponentially growing width.
     */
    exponentialBuckets?: Schema$GoogleApiServicecontrolV1ExponentialBuckets;
    /**
     * Buckets with constant width.
     */
    linearBuckets?: Schema$GoogleApiServicecontrolV1LinearBuckets;
    /**
     * The maximum of the population of values. Ignored if `count` is zero.
     */
    maximum?: number | null;
    /**
     * The arithmetic mean of the samples in the distribution. If `count` is zero then this field must be zero.
     */
    mean?: number | null;
    /**
     * The minimum of the population of values. Ignored if `count` is zero.
     */
    minimum?: number | null;
    /**
     * The sum of squared deviations from the mean: Sum[i=1..count]((x_i - mean)^2) where each x_i is a sample values. If `count` is zero then this field must be zero, otherwise validation of the request fails.
     */
    sumOfSquaredDeviation?: number | null;
  }
  /**
   * Describing buckets with arbitrary user-provided width.
   */
  export interface Schema$GoogleApiServicecontrolV1ExplicitBuckets {
    /**
     * 'bound' is a list of strictly increasing boundaries between buckets. Note that a list of length N-1 defines N buckets because of fenceposting. See comments on `bucket_options` for details. The i'th finite bucket covers the interval [bound[i-1], bound[i]) where i ranges from 1 to bound_size() - 1. Note that there are no finite buckets at all if 'bound' only contains a single element; in that special case the single bound defines the boundary between the underflow and overflow buckets. bucket number lower bound upper bound i == 0 (underflow) -inf bound[i] 0 < i < bound_size() bound[i-1] bound[i] i == bound_size() (overflow) bound[i-1] +inf
     */
    bounds?: number[] | null;
  }
  /**
   * Describing buckets with exponentially growing width.
   */
  export interface Schema$GoogleApiServicecontrolV1ExponentialBuckets {
    /**
     * The i'th exponential bucket covers the interval [scale * growth_factor^(i-1), scale * growth_factor^i) where i ranges from 1 to num_finite_buckets inclusive. Must be larger than 1.0.
     */
    growthFactor?: number | null;
    /**
     * The number of finite buckets. With the underflow and overflow buckets, the total number of buckets is `num_finite_buckets` + 2. See comments on `bucket_options` for details.
     */
    numFiniteBuckets?: number | null;
    /**
     * The i'th exponential bucket covers the interval [scale * growth_factor^(i-1), scale * growth_factor^i) where i ranges from 1 to num_finite_buckets inclusive. Must be \> 0.
     */
    scale?: number | null;
  }
  /**
   * A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message.
   */
  export interface Schema$GoogleApiServicecontrolV1HttpRequest {
    /**
     * The number of HTTP response bytes inserted into cache. Set only when a cache fill was attempted.
     */
    cacheFillBytes?: string | null;
    /**
     * Whether or not an entity was served from cache (with or without validation).
     */
    cacheHit?: boolean | null;
    /**
     * Whether or not a cache lookup was attempted.
     */
    cacheLookup?: boolean | null;
    /**
     * Whether or not the response was validated with the origin server before being served from cache. This field is only meaningful if `cache_hit` is True.
     */
    cacheValidatedWithOriginServer?: boolean | null;
    /**
     * The request processing latency on the server, from the time the request was received until the response was sent.
     */
    latency?: string | null;
    /**
     * Protocol used for the request. Examples: "HTTP/1.1", "HTTP/2", "websocket"
     */
    protocol?: string | null;
    /**
     * The referer URL of the request, as defined in [HTTP/1.1 Header Field Definitions](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).
     */
    referer?: string | null;
    /**
     * The IP address (IPv4 or IPv6) of the client that issued the HTTP request. Examples: `"192.168.1.1"`, `"FE80::0202:B3FF:FE1E:8329"`.
     */
    remoteIp?: string | null;
    /**
     * The request method. Examples: `"GET"`, `"HEAD"`, `"PUT"`, `"POST"`.
     */
    requestMethod?: string | null;
    /**
     * The size of the HTTP request message in bytes, including the request headers and the request body.
     */
    requestSize?: string | null;
    /**
     * The scheme (http, https), the host name, the path, and the query portion of the URL that was requested. Example: `"http://example.com/some/info?color=red"`.
     */
    requestUrl?: string | null;
    /**
     * The size of the HTTP response message sent back to the client, in bytes, including the response headers and the response body.
     */
    responseSize?: string | null;
    /**
     * The IP address (IPv4 or IPv6) of the origin server that the request was sent to.
     */
    serverIp?: string | null;
    /**
     * The response code indicating the status of the response. Examples: 200, 404.
     */
    status?: number | null;
    /**
     * The user agent sent by the client. Example: `"Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET CLR 1.0.3705)"`.
     */
    userAgent?: string | null;
  }
  /**
   * Describing buckets with constant width.
   */
  export interface Schema$GoogleApiServicecontrolV1LinearBuckets {
    /**
     * The number of finite buckets. With the underflow and overflow buckets, the total number of buckets is `num_finite_buckets` + 2. See comments on `bucket_options` for details.
     */
    numFiniteBuckets?: number | null;
    /**
     * The i'th linear bucket covers the interval [offset + (i-1) * width, offset + i * width) where i ranges from 1 to num_finite_buckets, inclusive.
     */
    offset?: number | null;
    /**
     * The i'th linear bucket covers the interval [offset + (i-1) * width, offset + i * width) where i ranges from 1 to num_finite_buckets, inclusive. Must be strictly positive.
     */
    width?: number | null;
  }
  /**
   * An individual log entry.
   */
  export interface Schema$GoogleApiServicecontrolV1LogEntry {
    /**
     * Optional. Information about the HTTP request associated with this log entry, if applicable.
     */
    httpRequest?: Schema$GoogleApiServicecontrolV1HttpRequest;
    /**
     * A unique ID for the log entry used for deduplication. If omitted, the implementation will generate one based on operation_id.
     */
    insertId?: string | null;
    /**
     * A set of user-defined (key, value) data that provides additional information about the log entry.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Required. The log to which this log entry belongs. Examples: `"syslog"`, `"book_log"`.
     */
    name?: string | null;
    /**
     * Optional. Information about an operation associated with the log entry, if applicable.
     */
    operation?: Schema$GoogleApiServicecontrolV1LogEntryOperation;
    /**
     * The log entry payload, represented as a protocol buffer that is expressed as a JSON object. The only accepted type currently is AuditLog.
     */
    protoPayload?: {[key: string]: any} | null;
    /**
     * The severity of the log entry. The default value is `LogSeverity.DEFAULT`.
     */
    severity?: string | null;
    /**
     * Optional. Source code location information associated with the log entry, if any.
     */
    sourceLocation?: Schema$GoogleApiServicecontrolV1LogEntrySourceLocation;
    /**
     * The log entry payload, represented as a structure that is expressed as a JSON object.
     */
    structPayload?: {[key: string]: any} | null;
    /**
     * The log entry payload, represented as a Unicode string (UTF-8).
     */
    textPayload?: string | null;
    /**
     * The time the event described by the log entry occurred. If omitted, defaults to operation start time.
     */
    timestamp?: string | null;
    /**
     * Optional. Resource name of the trace associated with the log entry, if any. If this field contains a relative resource name, you can assume the name is relative to `//tracing.googleapis.com`. Example: `projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824`
     */
    trace?: string | null;
  }
  /**
   * Additional information about a potentially long-running operation with which a log entry is associated.
   */
  export interface Schema$GoogleApiServicecontrolV1LogEntryOperation {
    /**
     * Optional. Set this to True if this is the first log entry in the operation.
     */
    first?: boolean | null;
    /**
     * Optional. An arbitrary operation identifier. Log entries with the same identifier are assumed to be part of the same operation.
     */
    id?: string | null;
    /**
     * Optional. Set this to True if this is the last log entry in the operation.
     */
    last?: boolean | null;
    /**
     * Optional. An arbitrary producer identifier. The combination of `id` and `producer` must be globally unique. Examples for `producer`: `"MyDivision.MyBigCompany.com"`, `"github.com/MyProject/MyApplication"`.
     */
    producer?: string | null;
  }
  /**
   * Additional information about the source code location that produced the log entry.
   */
  export interface Schema$GoogleApiServicecontrolV1LogEntrySourceLocation {
    /**
     * Optional. Source file name. Depending on the runtime environment, this might be a simple name or a fully-qualified name.
     */
    file?: string | null;
    /**
     * Optional. Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information may be used in contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example: `qual.if.ied.Class.method` (Java), `dir/package.func` (Go), `function` (Python).
     */
    function?: string | null;
    /**
     * Optional. Line within the source file. 1-based; 0 indicates no line number available.
     */
    line?: string | null;
  }
  /**
   * Represents a single metric value.
   */
  export interface Schema$GoogleApiServicecontrolV1MetricValue {
    /**
     * A boolean value.
     */
    boolValue?: boolean | null;
    /**
     * A distribution value.
     */
    distributionValue?: Schema$GoogleApiServicecontrolV1Distribution;
    /**
     * A double precision floating point value.
     */
    doubleValue?: number | null;
    /**
     * The end of the time period over which this metric value's measurement applies. If not specified, google.api.servicecontrol.v1.Operation.end_time will be used.
     */
    endTime?: string | null;
    /**
     * A signed 64-bit integer value.
     */
    int64Value?: string | null;
    /**
     * The labels describing the metric value. See comments on google.api.servicecontrol.v1.Operation.labels for the overriding relationship. Note that this map must not contain monitored resource labels.
     */
    labels?: {[key: string]: string} | null;
    /**
     * A money value.
     */
    moneyValue?: Schema$Money;
    /**
     * The start of the time period over which this metric value's measurement applies. The time period has different semantics for different metric types (cumulative, delta, and gauge). See the metric definition documentation in the service configuration for details. If not specified, google.api.servicecontrol.v1.Operation.start_time will be used.
     */
    startTime?: string | null;
    /**
     * A text string value.
     */
    stringValue?: string | null;
  }
  /**
   * Represents a set of metric values in the same metric. Each metric value in the set should have a unique combination of start time, end time, and label values.
   */
  export interface Schema$GoogleApiServicecontrolV1MetricValueSet {
    /**
     * The metric name defined in the service configuration.
     */
    metricName?: string | null;
    /**
     * The values in this metric.
     */
    metricValues?: Schema$GoogleApiServicecontrolV1MetricValue[];
  }
  /**
   * Represents information regarding an operation.
   */
  export interface Schema$GoogleApiServicecontrolV1Operation {
    /**
     * Identity of the consumer who is using the service. This field should be filled in for the operations initiated by a consumer, but not for service-initiated operations that are not related to a specific consumer. - This can be in one of the following formats: - project:PROJECT_ID, - project`_`number:PROJECT_NUMBER, - projects/PROJECT_ID or PROJECT_NUMBER, - folders/FOLDER_NUMBER, - organizations/ORGANIZATION_NUMBER, - api`_`key:API_KEY.
     */
    consumerId?: string | null;
    /**
     * End time of the operation. Required when the operation is used in ServiceController.Report, but optional when the operation is used in ServiceController.Check.
     */
    endTime?: string | null;
    /**
     * Unimplemented.
     */
    extensions?: Array<{[key: string]: any}> | null;
    /**
     * DO NOT USE. This is an experimental field.
     */
    importance?: string | null;
    /**
     * Labels describing the operation. Only the following labels are allowed: - Labels describing monitored resources as defined in the service configuration. - Default labels of metric values. When specified, labels defined in the metric value override these default. - The following labels defined by Google Cloud Platform: - `cloud.googleapis.com/location` describing the location where the operation happened, - `servicecontrol.googleapis.com/user_agent` describing the user agent of the API request, - `servicecontrol.googleapis.com/service_agent` describing the service used to handle the API request (e.g. ESP), - `servicecontrol.googleapis.com/platform` describing the platform where the API is served, such as App Engine, Compute Engine, or Kubernetes Engine.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Represents information to be logged.
     */
    logEntries?: Schema$GoogleApiServicecontrolV1LogEntry[];
    /**
     * Represents information about this operation. Each MetricValueSet corresponds to a metric defined in the service configuration. The data type used in the MetricValueSet must agree with the data type specified in the metric definition. Within a single operation, it is not allowed to have more than one MetricValue instances that have the same metric names and identical label value combinations. If a request has such duplicated MetricValue instances, the entire request is rejected with an invalid argument error.
     */
    metricValueSets?: Schema$GoogleApiServicecontrolV1MetricValueSet[];
    /**
     * Identity of the operation. This must be unique within the scope of the service that generated the operation. If the service calls Check() and Report() on the same operation, the two calls should carry the same id. UUID version 4 is recommended, though not required. In scenarios where an operation is computed from existing information and an idempotent id is desirable for deduplication purpose, UUID version 5 is recommended. See RFC 4122 for details.
     */
    operationId?: string | null;
    /**
     * Fully qualified name of the operation. Reserved for future use.
     */
    operationName?: string | null;
    /**
     * Represents the properties needed for quota check. Applicable only if this operation is for a quota check request. If this is not specified, no quota check will be performed.
     */
    quotaProperties?: Schema$GoogleApiServicecontrolV1QuotaProperties;
    /**
     * The resources that are involved in the operation. The maximum supported number of entries in this field is 100.
     */
    resources?: Schema$GoogleApiServicecontrolV1ResourceInfo[];
    /**
     * Required. Start time of the operation.
     */
    startTime?: string | null;
    /**
     * Unimplemented. A list of Cloud Trace spans. The span names shall contain the id of the destination project which can be either the produce or the consumer project.
     */
    traceSpans?: Schema$GoogleApiServicecontrolV1TraceSpan[];
    /**
     * Private Preview. This feature is only available for approved services. User defined labels for the resource that this operation is associated with. Only a combination of 1000 user labels per consumer project are allowed.
     */
    userLabels?: {[key: string]: string} | null;
  }
  /**
   * Represents the properties needed for quota operations.
   */
  export interface Schema$GoogleApiServicecontrolV1QuotaProperties {
    /**
     * Quota mode for this operation.
     */
    quotaMode?: string | null;
  }
  /**
   * Request message for the Report method.
   */
  export interface Schema$GoogleApiServicecontrolV1ReportRequest {
    /**
     * Operations to be reported. Typically the service should report one operation per request. Putting multiple operations into a single request is allowed, but should be used only when multiple operations are natually available at the time of the report. There is no limit on the number of operations in the same ReportRequest, however the ReportRequest size should be no larger than 1MB. See ReportResponse.report_errors for partial failure behavior.
     */
    operations?: Schema$GoogleApiServicecontrolV1Operation[];
    /**
     * Specifies which version of service config should be used to process the request. If unspecified or no matching version can be found, the latest one will be used.
     */
    serviceConfigId?: string | null;
    /**
     * The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`. See [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name.
     */
    serviceName?: string | null;
  }
  /**
   * Describes a resource associated with this operation.
   */
  export interface Schema$GoogleApiServicecontrolV1ResourceInfo {
    /**
     * The identifier of the parent of this resource instance. Must be in one of the following formats: - `projects/` - `folders/` - `organizations/`
     */
    resourceContainer?: string | null;
    /**
     * The location of the resource. If not empty, the resource will be checked against location policy. The value must be a valid zone, region or multiregion. For example: "europe-west4" or "northamerica-northeast1-a"
     */
    resourceLocation?: string | null;
    /**
     * Name of the resource. This is used for auditing purposes.
     */
    resourceName?: string | null;
  }
  /**
   * A span represents a single operation within a trace. Spans can be nested to form a trace tree. Often, a trace contains a root span that describes the end-to-end latency, and one or more subspans for its sub-operations. A trace can also contain multiple root spans, or none at all. Spans do not need to be contiguous—there may be gaps or overlaps between spans in a trace.
   */
  export interface Schema$GoogleApiServicecontrolV1TraceSpan {
    /**
     * A set of attributes on the span. You can have up to 32 attributes per span.
     */
    attributes?: Schema$GoogleApiServicecontrolV1Attributes;
    /**
     * An optional number of child spans that were generated while this span was active. If set, allows implementation to detect missing child spans.
     */
    childSpanCount?: number | null;
    /**
     * A description of the span's operation (up to 128 bytes). Stackdriver Trace displays the description in the Google Cloud Platform Console. For example, the display name can be a qualified method name or a file name and a line number where the operation is called. A best practice is to use the same display name within an application and at the same call point. This makes it easier to correlate spans in different traces.
     */
    displayName?: Schema$GoogleApiServicecontrolV1TruncatableString;
    /**
     * The end time of the span. On the client side, this is the time kept by the local machine where the span execution ends. On the server side, this is the time when the server application handler stops running.
     */
    endTime?: string | null;
    /**
     * The resource name of the span in the following format: projects/[PROJECT_ID]/traces/[TRACE_ID]/spans/SPAN_ID is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array. [SPAN_ID] is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array.
     */
    name?: string | null;
    /**
     * The [SPAN_ID] of this span's parent span. If this is a root span, then this field must be empty.
     */
    parentSpanId?: string | null;
    /**
     * (Optional) Set this parameter to indicate whether this span is in the same process as its parent. If you do not set this parameter, Stackdriver Trace is unable to take advantage of this helpful information.
     */
    sameProcessAsParentSpan?: boolean | null;
    /**
     * The [SPAN_ID] portion of the span's resource name.
     */
    spanId?: string | null;
    /**
     * Distinguishes between spans generated in a particular context. For example, two spans with the same name may be distinguished using `CLIENT` (caller) and `SERVER` (callee) to identify an RPC call.
     */
    spanKind?: string | null;
    /**
     * The start time of the span. On the client side, this is the time kept by the local machine where the span execution starts. On the server side, this is the time when the server's application handler starts running.
     */
    startTime?: string | null;
    /**
     * An optional final status for this span.
     */
    status?: Schema$Status;
  }
  /**
   * Represents a string that might be shortened to a specified length.
   */
  export interface Schema$GoogleApiServicecontrolV1TruncatableString {
    /**
     * The number of bytes removed from the original string. If this value is 0, then the string was not shortened.
     */
    truncatedByteCount?: number | null;
    /**
     * The shortened string. For example, if the original string is 500 bytes long and the limit of the string is 128 bytes, then `value` contains the first 128 bytes of the 500-byte string. Truncation always happens on a UTF8 character boundary. If there are multi-byte characters in the string, then the length of the shortened string might be less than the size limit.
     */
    value?: string | null;
  }
  /**
   * IssuanceModes specifies the allowed ways in which Certificates may be requested from this CertificateAuthority.
   */
  export interface Schema$IssuanceModes {
    /**
     * Required. When true, allows callers to create Certificates by specifying a CertificateConfig.
     */
    allowConfigBasedIssuance?: boolean | null;
    /**
     * Required. When true, allows callers to create Certificates by specifying a CSR.
     */
    allowCsrBasedIssuance?: boolean | null;
  }
  /**
   * Options that affect all certificates issued by a CertificateAuthority.
   */
  export interface Schema$IssuingOptions {
    /**
     * Required. When true, includes a URL to the issuing CA certificate in the "authority information access" X.509 extension.
     */
    includeCaCertUrl?: boolean | null;
    /**
     * Required. When true, includes a URL to the CRL corresponding to certificates issued from a CertificateAuthority. CRLs will expire 7 days from their creation. However, we will rebuild daily. CRLs are also rebuilt shortly after a certificate is revoked.
     */
    includeCrlAccessUrl?: boolean | null;
  }
  /**
   * A KeyId identifies a specific public key, usually by hashing the public key.
   */
  export interface Schema$KeyId {
    /**
     * Optional. The value of this KeyId encoded in lowercase hexadecimal. This is most likely the 160 bit SHA-1 hash of the public key.
     */
    keyId?: string | null;
  }
  /**
   * A KeyUsage describes key usage values that may appear in an X.509 certificate.
   */
  export interface Schema$KeyUsage {
    /**
     * Describes high-level ways in which a key may be used.
     */
    baseKeyUsage?: Schema$KeyUsageOptions;
    /**
     * Detailed scenarios in which a key may be used.
     */
    extendedKeyUsage?: Schema$ExtendedKeyUsageOptions;
    /**
     * Used to describe extended key usages that are not listed in the KeyUsage.ExtendedKeyUsageOptions message.
     */
    unknownExtendedKeyUsages?: Schema$ObjectId[];
  }
  /**
   * KeyUsage.KeyUsageOptions corresponds to the key usage values described in https://tools.ietf.org/html/rfc5280#section-4.2.1.3.
   */
  export interface Schema$KeyUsageOptions {
    /**
     * The key may be used to sign certificates.
     */
    certSign?: boolean | null;
    /**
     * The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".
     */
    contentCommitment?: boolean | null;
    /**
     * The key may be used sign certificate revocation lists.
     */
    crlSign?: boolean | null;
    /**
     * The key may be used to encipher data.
     */
    dataEncipherment?: boolean | null;
    /**
     * The key may be used to decipher only.
     */
    decipherOnly?: boolean | null;
    /**
     * The key may be used for digital signatures.
     */
    digitalSignature?: boolean | null;
    /**
     * The key may be used to encipher only.
     */
    encipherOnly?: boolean | null;
    /**
     * The key may be used in a key agreement protocol.
     */
    keyAgreement?: boolean | null;
    /**
     * The key may be used to encipher other keys.
     */
    keyEncipherment?: boolean | null;
  }
  /**
   * A Cloud KMS key configuration that a CertificateAuthority will use.
   */
  export interface Schema$KeyVersionSpec {
    /**
     * Required. The algorithm to use for creating a managed Cloud KMS key for a for a simplified experience. All managed keys will be have their ProtectionLevel as `HSM`.
     */
    algorithm?: string | null;
    /**
     * Required. The resource name for an existing Cloud KMS CryptoKeyVersion in the format `projects/x/locations/x/keyRings/x/cryptoKeys/x/cryptoKeyVersions/x`. This option enables full flexibility in the key's capabilities and properties.
     */
    cloudKmsKeyVersion?: string | null;
  }
  /**
   * Response message for CertificateAuthorityService.ListCertificateAuthorities.
   */
  export interface Schema$ListCertificateAuthoritiesResponse {
    /**
     * The list of CertificateAuthorities.
     */
    certificateAuthorities?: Schema$CertificateAuthority[];
    /**
     * A token to retrieve next page of results. Pass this value in ListCertificateAuthoritiesRequest.next_page_token to retrieve the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * A list of locations (e.g. "us-west1") that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for CertificateAuthorityService.ListCertificateRevocationLists.
   */
  export interface Schema$ListCertificateRevocationListsResponse {
    /**
     * The list of CertificateRevocationLists.
     */
    certificateRevocationLists?: Schema$CertificateRevocationList[];
    /**
     * A token to retrieve next page of results. Pass this value in ListCertificateRevocationListsRequest.next_page_token to retrieve the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * A list of locations (e.g. "us-west1") that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for CertificateAuthorityService.ListCertificates.
   */
  export interface Schema$ListCertificatesResponse {
    /**
     * The list of Certificates.
     */
    certificates?: Schema$Certificate[];
    /**
     * A token to retrieve next page of results. Pass this value in ListCertificatesRequest.next_page_token to retrieve the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * A list of locations (e.g. "us-west1") that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * The response message for Locations.ListLocations.
   */
  export interface Schema$ListLocationsResponse {
    /**
     * A list of locations that matches the specified filter in the request.
     */
    locations?: Schema$Location[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$Operation[];
  }
  /**
   * Response message for CertificateAuthorityService.ListReusableConfigs.
   */
  export interface Schema$ListReusableConfigsResponse {
    /**
     * A token to retrieve next page of results. Pass this value in ListReusableConfigsRequest.next_page_token to retrieve the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The list of ReusableConfigs.
     */
    reusableConfigs?: Schema$ReusableConfig[];
    /**
     * A list of locations (e.g. "us-west1") that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * A resource that represents Google Cloud Platform location.
   */
  export interface Schema$Location {
    /**
     * The friendly name for this location, typically a nearby city name. For example, "Tokyo".
     */
    displayName?: string | null;
    /**
     * Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"\}
     */
    labels?: {[key: string]: string} | null;
    /**
     * The canonical id for this location. For example: `"us-east1"`.
     */
    locationId?: string | null;
    /**
     * Service-specific metadata. For example the available capacity at the given location.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`
     */
    name?: string | null;
  }
  /**
   * Represents an amount of money with its currency type.
   */
  export interface Schema$Money {
    /**
     * The three-letter currency code defined in ISO 4217.
     */
    currencyCode?: string | null;
    /**
     * Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
     */
    nanos?: number | null;
    /**
     * The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
     */
    units?: string | null;
  }
  /**
   * An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
   */
  export interface Schema$ObjectId {
    /**
     * Required. The parts of an OID path. The most significant parts of the path come first.
     */
    objectIdPath?: number[] | null;
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
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
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$OperationMetadata {
    /**
     * Output only. API version used to start the operation.
     */
    apiVersion?: string | null;
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    requestedCancellation?: boolean | null;
    /**
     * Output only. Human-readable status of the operation, if any.
     */
    statusMessage?: string | null;
    /**
     * Output only. Server-defined resource path for the target of the operation.
     */
    target?: string | null;
    /**
     * Output only. Name of the verb executed by the operation.
     */
    verb?: string | null;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] \}, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", \} \} ], "etag": "BwWWja0YfJA=", "version": 3 \} **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') - etag: BwWWja0YfJA= - version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
   */
  export interface Schema$Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$AuditConfig[];
    /**
     * Associates a list of `members` to a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one member.
     */
    bindings?: Schema$Binding[];
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
   * A PublicKey describes a public key.
   */
  export interface Schema$PublicKey {
    /**
     * Required. A public key. When this is specified in a request, the padding and encoding can be any of the options described by the respective 'KeyType' value. When this is generated by the service, it will always be an RFC 5280 [SubjectPublicKeyInfo](https://tools.ietf.org/html/rfc5280#section-4.1) structure containing an algorithm identifier and a key.
     */
    key?: string | null;
    /**
     * Optional. The type of public key. If specified, it must match the public key used for the`key` field.
     */
    type?: string | null;
  }
  /**
   * Request message for CertificateAuthorityService.RestoreCertificateAuthority.
   */
  export interface Schema$RestoreCertificateAuthorityRequest {
    /**
     * Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string | null;
  }
  /**
   * A ReusableConfig refers to a managed ReusableConfigValues. Those, in turn, are used to describe certain fields of an X.509 certificate, such as the key usage fields, fields specific to CA certificates, certificate policy extensions and custom extensions.
   */
  export interface Schema$ReusableConfig {
    /**
     * Output only. The time at which this ReusableConfig was created.
     */
    createTime?: string | null;
    /**
     * Optional. A human-readable description of scenarios these ReusableConfigValues may be compatible with.
     */
    description?: string | null;
    /**
     * Optional. Labels with user-defined metadata.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The resource path for this ReusableConfig in the format `projects/x/locations/x/reusableConfigs/x`.
     */
    name?: string | null;
    /**
     * Output only. The time at which this ReusableConfig was updated.
     */
    updateTime?: string | null;
    /**
     * Required. The config values.
     */
    values?: Schema$ReusableConfigValues;
  }
  /**
   * A ReusableConfigValues is used to describe certain fields of an X.509 certificate, such as the key usage fields, fields specific to CA certificates, certificate policy extensions and custom extensions.
   */
  export interface Schema$ReusableConfigValues {
    /**
     * Optional. Describes custom X.509 extensions.
     */
    additionalExtensions?: Schema$X509Extension[];
    /**
     * Optional. Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate.
     */
    aiaOcspServers?: string[] | null;
    /**
     * Optional. Describes options in this ReusableConfigValues that are relevant in a CA certificate.
     */
    caOptions?: Schema$CaOptions;
    /**
     * Optional. Indicates the intended use for keys that correspond to a certificate.
     */
    keyUsage?: Schema$KeyUsage;
    /**
     * Optional. Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4.
     */
    policyIds?: Schema$ObjectId[];
  }
  /**
   * A ReusableConfigWrapper describes values that may assist in creating an X.509 certificate, or a reference to a pre-defined set of values.
   */
  export interface Schema$ReusableConfigWrapper {
    /**
     * Required. A resource path to a ReusableConfig in the format `projects/x/locations/x/reusableConfigs/x`.
     */
    reusableConfig?: string | null;
    /**
     * Required. A user-specified inline ReusableConfigValues.
     */
    reusableConfigValues?: Schema$ReusableConfigValues;
  }
  /**
   * Describes fields that are relavent to the revocation of a Certificate.
   */
  export interface Schema$RevocationDetails {
    /**
     * Indicates why a Certificate was revoked.
     */
    revocationState?: string | null;
    /**
     * The time at which this Certificate was revoked.
     */
    revocationTime?: string | null;
  }
  /**
   * Request message for CertificateAuthorityService.RevokeCertificate.
   */
  export interface Schema$RevokeCertificateRequest {
    /**
     * Required. The RevocationReason for revoking this certificate.
     */
    reason?: string | null;
    /**
     * Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string | null;
  }
  /**
   * Describes a revoked Certificate.
   */
  export interface Schema$RevokedCertificate {
    /**
     * The resource path for the Certificate in the format `projects/x/locations/x/certificateAuthorities/x/certificates/x`.
     */
    certificate?: string | null;
    /**
     * The serial number of the Certificate.
     */
    hexSerialNumber?: string | null;
    /**
     * The reason the Certificate was revoked.
     */
    revocationReason?: string | null;
  }
  /**
   * Request message for CertificateAuthorityService.ScheduleDeleteCertificateAuthority.
   */
  export interface Schema$ScheduleDeleteCertificateAuthorityRequest {
    /**
     * Optional. This field allows the CA to be scheduled for deletion even if the CA has active certs. Active certs include both unrevoked and unexpired certs.
     */
    ignoreActiveCertificates?: boolean | null;
    /**
     * Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string | null;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
     */
    policy?: Schema$Policy;
    /**
     * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`
     */
    updateMask?: string | null;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$Status {
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
   * Subject describes parts of a distinguished name that, in turn, describes the subject of the certificate.
   */
  export interface Schema$Subject {
    /**
     * The country code of the subject.
     */
    countryCode?: string | null;
    /**
     * The locality or city of the subject.
     */
    locality?: string | null;
    /**
     * The organization of the subject.
     */
    organization?: string | null;
    /**
     * The organizational_unit of the subject.
     */
    organizationalUnit?: string | null;
    /**
     * The postal code of the subject.
     */
    postalCode?: string | null;
    /**
     * The province, territory, or regional state of the subject.
     */
    province?: string | null;
    /**
     * The street address of the subject.
     */
    streetAddress?: string | null;
  }
  /**
   * SubjectAltNames corresponds to a more modern way of listing what the asserted identity is in a certificate (i.e., compared to the "common name" in the distinguished name).
   */
  export interface Schema$SubjectAltNames {
    /**
     * Contains additional subject alternative name values.
     */
    customSans?: Schema$X509Extension[];
    /**
     * Contains only valid, fully-qualified host names.
     */
    dnsNames?: string[] | null;
    /**
     * Contains only valid RFC 2822 E-mail addresses.
     */
    emailAddresses?: string[] | null;
    /**
     * Contains only valid 32-bit IPv4 addresses or RFC 4291 IPv6 addresses.
     */
    ipAddresses?: string[] | null;
    /**
     * Contains only valid RFC 3986 URIs.
     */
    uris?: string[] | null;
  }
  /**
   * These values are used to create the distinguished name and subject alternative name fields in an X.509 certificate.
   */
  export interface Schema$SubjectConfig {
    /**
     * Optional. The "common name" of the distinguished name.
     */
    commonName?: string | null;
    /**
     * Required. Contains distinguished name fields such as the location and organization.
     */
    subject?: Schema$Subject;
    /**
     * Optional. The subject alternative name fields.
     */
    subjectAltName?: Schema$SubjectAltNames;
  }
  /**
   * These values describe fields in an issued X.509 certificate such as the distinguished name, subject alternative names, serial number, and lifetime.
   */
  export interface Schema$SubjectDescription {
    /**
     * The "common name" of the distinguished name.
     */
    commonName?: string | null;
    /**
     * The serial number encoded in lowercase hexadecimal.
     */
    hexSerialNumber?: string | null;
    /**
     * For convenience, the actual lifetime of an issued certificate. Corresponds to 'not_after_time' - 'not_before_time'.
     */
    lifetime?: string | null;
    /**
     * The time at which the certificate expires.
     */
    notAfterTime?: string | null;
    /**
     * The time at which the certificate becomes valid.
     */
    notBeforeTime?: string | null;
    /**
     * Contains distinguished name fields such as the location and organization.
     */
    subject?: Schema$Subject;
    /**
     * The subject alternative name fields.
     */
    subjectAltName?: Schema$SubjectAltNames;
  }
  /**
   * Describes a subordinate CA's issuers. This is either a resource path to a known issuing CertificateAuthority, or a PEM issuer certificate chain.
   */
  export interface Schema$SubordinateConfig {
    /**
     * Required. This can refer to a CertificateAuthority in the same project that was used to create a subordinate CertificateAuthority. This field is used for information and usability purposes only. The resource name is in the format `projects/x/locations/x/certificateAuthorities/x`.
     */
    certificateAuthority?: string | null;
    /**
     * Required. Contains the PEM certificate chain for the issuers of this CertificateAuthority, but not pem certificate for this CA itself.
     */
    pemIssuerChain?: Schema$SubordinateConfigChain;
  }
  /**
   * This message describes a subordinate CA's issuer certificate chain. This wrapper exists for compatibility reasons.
   */
  export interface Schema$SubordinateConfigChain {
    /**
     * Required. Expected to be in leaf-to-root order according to RFC 5246.
     */
    pemCertificates?: string[] | null;
  }
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with wildcards (such as '*' or 'storage.*') are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[] | null;
  }
  /**
   * Response message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
     */
    permissions?: string[] | null;
  }
  /**
   * An X509Extension specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs.
   */
  export interface Schema$X509Extension {
    /**
     * Required. Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error).
     */
    critical?: boolean | null;
    /**
     * Required. The OID for this X.509 extension.
     */
    objectId?: Schema$ObjectId;
    /**
     * Required. The value of this X.509 extension.
     */
    value?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    certificateAuthorities: Resource$Projects$Locations$Certificateauthorities;
    operations: Resource$Projects$Locations$Operations;
    reusableConfigs: Resource$Projects$Locations$Reusableconfigs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.certificateAuthorities = new Resource$Projects$Locations$Certificateauthorities(
        this.context
      );
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
      this.reusableConfigs = new Resource$Projects$Locations$Reusableconfigs(
        this.context
      );
    }

    /**
     * Gets information about a location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.get({
     *     // Resource name for the location.
     *     name: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "labels": {},
     *   //   "locationId": "my_locationId",
     *   //   "metadata": {},
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
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Location>;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(callback: BodyResponseCallback<Schema$Location>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Get
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Location> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Location>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Location>(parameters);
      }
    }

    /**
     * Lists information about the supported locations for this service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The resource that owns the locations collection, if applicable.
     *     name: 'projects/my-project',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "locations": [],
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
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLocationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$List
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListLocationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}/locations').replace(
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
        createAPIRequest<Schema$ListLocationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Get
    extends StandardParameters {
    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The resource that owns the locations collection, if applicable.
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

  export class Resource$Projects$Locations$Certificateauthorities {
    context: APIRequestContext;
    certificateRevocationLists: Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists;
    certificates: Resource$Projects$Locations$Certificateauthorities$Certificates;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.certificateRevocationLists = new Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists(
        this.context
      );
      this.certificates = new Resource$Projects$Locations$Certificateauthorities$Certificates(
        this.context
      );
    }

    /**
     * Activate a CertificateAuthority that is in state PENDING_ACTIVATION and is of type SUBORDINATE. After the parent Certificate Authority signs a certificate signing request from FetchCertificateAuthorityCsr, this method can complete the activation process.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.certificateAuthorities.activate(
     *     {
     *       // Required. The resource name for this CertificateAuthority in the format `projects/x/locations/x/certificateAuthorities/x`.
     *       name:
     *         'projects/my-project/locations/my-location/certificateAuthorities/my-certificateAuthoritie',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "pemCaCertificate": "my_pemCaCertificate",
     *         //   "requestId": "my_requestId",
     *         //   "subordinateConfig": {}
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    activate(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Activate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    activate(
      params?: Params$Resource$Projects$Locations$Certificateauthorities$Activate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    activate(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Activate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    activate(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Activate,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    activate(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Activate,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    activate(callback: BodyResponseCallback<Schema$Operation>): void;
    activate(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Certificateauthorities$Activate
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Certificateauthorities$Activate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Certificateauthorities$Activate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:activate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Create a new CertificateAuthority in a given Project and Location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.certificateAuthorities.create({
     *     // Required. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63\}`
     *     certificateAuthorityId: 'placeholder-value',
     *     // Required. The resource name of the location associated with the CertificateAuthorities, in the format `projects/x/locations/x`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accessUrls": {},
     *       //   "caCertificateDescriptions": [],
     *       //   "certificatePolicy": {},
     *       //   "config": {},
     *       //   "createTime": "my_createTime",
     *       //   "deleteTime": "my_deleteTime",
     *       //   "gcsBucket": "my_gcsBucket",
     *       //   "issuingOptions": {},
     *       //   "keySpec": {},
     *       //   "labels": {},
     *       //   "lifetime": "my_lifetime",
     *       //   "name": "my_name",
     *       //   "pemCaCertificates": [],
     *       //   "state": "my_state",
     *       //   "subordinateConfig": {},
     *       //   "tier": "my_tier",
     *       //   "type": "my_type",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
      params: Params$Resource$Projects$Locations$Certificateauthorities$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Certificateauthorities$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Certificateauthorities$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Certificateauthorities$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Certificateauthorities$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta1/{+parent}/certificateAuthorities'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Disable a CertificateAuthority.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.certificateAuthorities.disable(
     *     {
     *       // Required. The resource name for this CertificateAuthority in the format `projects/x/locations/x/certificateAuthorities/x`.
     *       name:
     *         'projects/my-project/locations/my-location/certificateAuthorities/my-certificateAuthoritie',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "requestId": "my_requestId"
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
      params: Params$Resource$Projects$Locations$Certificateauthorities$Disable,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    disable(
      params?: Params$Resource$Projects$Locations$Certificateauthorities$Disable,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    disable(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Disable,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    disable(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Disable,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    disable(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Disable,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    disable(callback: BodyResponseCallback<Schema$Operation>): void;
    disable(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Certificateauthorities$Disable
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Certificateauthorities$Disable;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Certificateauthorities$Disable;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:disable').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Enable a CertificateAuthority.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.certificateAuthorities.enable({
     *     // Required. The resource name for this CertificateAuthority in the format `projects/x/locations/x/certificateAuthorities/x`.
     *     name:
     *       'projects/my-project/locations/my-location/certificateAuthorities/my-certificateAuthoritie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requestId": "my_requestId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
      params: Params$Resource$Projects$Locations$Certificateauthorities$Enable,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    enable(
      params?: Params$Resource$Projects$Locations$Certificateauthorities$Enable,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    enable(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Enable,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    enable(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Enable,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    enable(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Enable,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    enable(callback: BodyResponseCallback<Schema$Operation>): void;
    enable(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Certificateauthorities$Enable
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Certificateauthorities$Enable;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Certificateauthorities$Enable;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:enable').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Fetch a certificate signing request (CSR) from a CertificateAuthority that is in state PENDING_ACTIVATION and is of type SUBORDINATE. The CSR must then be signed by the desired parent Certificate Authority, which could be another CertificateAuthority resource, or could be an on-prem certificate authority. See also ActivateCertificateAuthority.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.certificateAuthorities.fetch({
     *     // Required. The resource name for this CertificateAuthority in the format `projects/x/locations/x/certificateAuthorities/x`.
     *     name:
     *       'projects/my-project/locations/my-location/certificateAuthorities/my-certificateAuthoritie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "pemCsr": "my_pemCsr"
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
    fetch(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Fetch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    fetch(
      params?: Params$Resource$Projects$Locations$Certificateauthorities$Fetch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FetchCertificateAuthorityCsrResponse>;
    fetch(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Fetch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetch(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Fetch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FetchCertificateAuthorityCsrResponse>,
      callback: BodyResponseCallback<
        Schema$FetchCertificateAuthorityCsrResponse
      >
    ): void;
    fetch(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Fetch,
      callback: BodyResponseCallback<
        Schema$FetchCertificateAuthorityCsrResponse
      >
    ): void;
    fetch(
      callback: BodyResponseCallback<
        Schema$FetchCertificateAuthorityCsrResponse
      >
    ): void;
    fetch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Certificateauthorities$Fetch
        | BodyResponseCallback<Schema$FetchCertificateAuthorityCsrResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FetchCertificateAuthorityCsrResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FetchCertificateAuthorityCsrResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$FetchCertificateAuthorityCsrResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Certificateauthorities$Fetch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Certificateauthorities$Fetch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:fetch').replace(
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
        createAPIRequest<Schema$FetchCertificateAuthorityCsrResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FetchCertificateAuthorityCsrResponse>(
          parameters
        );
      }
    }

    /**
     * Returns a CertificateAuthority.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.certificateAuthorities.get({
     *     // Required. The name of the CertificateAuthority to get.
     *     name:
     *       'projects/my-project/locations/my-location/certificateAuthorities/my-certificateAuthoritie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessUrls": {},
     *   //   "caCertificateDescriptions": [],
     *   //   "certificatePolicy": {},
     *   //   "config": {},
     *   //   "createTime": "my_createTime",
     *   //   "deleteTime": "my_deleteTime",
     *   //   "gcsBucket": "my_gcsBucket",
     *   //   "issuingOptions": {},
     *   //   "keySpec": {},
     *   //   "labels": {},
     *   //   "lifetime": "my_lifetime",
     *   //   "name": "my_name",
     *   //   "pemCaCertificates": [],
     *   //   "state": "my_state",
     *   //   "subordinateConfig": {},
     *   //   "tier": "my_tier",
     *   //   "type": "my_type",
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
      params: Params$Resource$Projects$Locations$Certificateauthorities$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Certificateauthorities$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CertificateAuthority>;
    get(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CertificateAuthority>,
      callback: BodyResponseCallback<Schema$CertificateAuthority>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Get,
      callback: BodyResponseCallback<Schema$CertificateAuthority>
    ): void;
    get(callback: BodyResponseCallback<Schema$CertificateAuthority>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Certificateauthorities$Get
        | BodyResponseCallback<Schema$CertificateAuthority>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CertificateAuthority>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CertificateAuthority>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$CertificateAuthority>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Certificateauthorities$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Certificateauthorities$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$CertificateAuthority>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CertificateAuthority>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.certificateAuthorities.getIamPolicy(
     *     {
     *       // Optional. The policy format version to be returned. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *       'options.requestedPolicyVersion': 'placeholder-value',
     *       // REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/certificateAuthorities/my-certificateAuthoritie',
     *     }
     *   );
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
      params: Params$Resource$Projects$Locations$Certificateauthorities$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Certificateauthorities$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Certificateauthorities$Getiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Certificateauthorities$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Certificateauthorities$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Lists CertificateAuthorities.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.certificateAuthorities.list({
     *     // Optional. Only include resources that match the filter in the response.
     *     filter: 'placeholder-value',
     *     // Optional. Specify how the results should be sorted.
     *     orderBy: 'placeholder-value',
     *     // Optional. Limit on the number of CertificateAuthorities to include in the response. Further CertificateAuthorities can subsequently be obtained by including the ListCertificateAuthoritiesResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // Optional. Pagination token, returned earlier via ListCertificateAuthoritiesResponse.next_page_token.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the location associated with the CertificateAuthorities, in the format `projects/x/locations/x`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "certificateAuthorities": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": []
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
      params: Params$Resource$Projects$Locations$Certificateauthorities$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Certificateauthorities$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListCertificateAuthoritiesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Certificateauthorities$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Certificateauthorities$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCertificateAuthoritiesResponse>,
      callback: BodyResponseCallback<Schema$ListCertificateAuthoritiesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Certificateauthorities$List,
      callback: BodyResponseCallback<Schema$ListCertificateAuthoritiesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListCertificateAuthoritiesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Certificateauthorities$List
        | BodyResponseCallback<Schema$ListCertificateAuthoritiesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCertificateAuthoritiesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCertificateAuthoritiesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListCertificateAuthoritiesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Certificateauthorities$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Certificateauthorities$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta1/{+parent}/certificateAuthorities'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListCertificateAuthoritiesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCertificateAuthoritiesResponse>(
          parameters
        );
      }
    }

    /**
     * Update a CertificateAuthority.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.certificateAuthorities.patch({
     *     // Output only. The resource name for this CertificateAuthority in the format `projects/x/locations/x/certificateAuthorities/x`.
     *     name:
     *       'projects/my-project/locations/my-location/certificateAuthorities/my-certificateAuthoritie',
     *     // Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Required. A list of fields to be updated in this request.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accessUrls": {},
     *       //   "caCertificateDescriptions": [],
     *       //   "certificatePolicy": {},
     *       //   "config": {},
     *       //   "createTime": "my_createTime",
     *       //   "deleteTime": "my_deleteTime",
     *       //   "gcsBucket": "my_gcsBucket",
     *       //   "issuingOptions": {},
     *       //   "keySpec": {},
     *       //   "labels": {},
     *       //   "lifetime": "my_lifetime",
     *       //   "name": "my_name",
     *       //   "pemCaCertificates": [],
     *       //   "state": "my_state",
     *       //   "subordinateConfig": {},
     *       //   "tier": "my_tier",
     *       //   "type": "my_type",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
      params: Params$Resource$Projects$Locations$Certificateauthorities$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Certificateauthorities$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Certificateauthorities$Patch
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Certificateauthorities$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Certificateauthorities$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Restore a CertificateAuthority that is scheduled for deletion.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.certificateAuthorities.restore(
     *     {
     *       // Required. The resource name for this CertificateAuthority in the format `projects/x/locations/x/certificateAuthorities/x`.
     *       name:
     *         'projects/my-project/locations/my-location/certificateAuthorities/my-certificateAuthoritie',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "requestId": "my_requestId"
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    restore(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Restore,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    restore(
      params?: Params$Resource$Projects$Locations$Certificateauthorities$Restore,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    restore(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Restore,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    restore(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Restore,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    restore(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Restore,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    restore(callback: BodyResponseCallback<Schema$Operation>): void;
    restore(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Certificateauthorities$Restore
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Certificateauthorities$Restore;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Certificateauthorities$Restore;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:restore').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Schedule a CertificateAuthority for deletion.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.certificateAuthorities.scheduleDelete(
     *     {
     *       // Required. The resource name for this CertificateAuthority in the format `projects/x/locations/x/certificateAuthorities/x`.
     *       name:
     *         'projects/my-project/locations/my-location/certificateAuthorities/my-certificateAuthoritie',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "ignoreActiveCertificates": false,
     *         //   "requestId": "my_requestId"
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
    scheduleDelete(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Scheduledelete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    scheduleDelete(
      params?: Params$Resource$Projects$Locations$Certificateauthorities$Scheduledelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    scheduleDelete(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Scheduledelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    scheduleDelete(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Scheduledelete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    scheduleDelete(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Scheduledelete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    scheduleDelete(callback: BodyResponseCallback<Schema$Operation>): void;
    scheduleDelete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Certificateauthorities$Scheduledelete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Certificateauthorities$Scheduledelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Certificateauthorities$Scheduledelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:scheduleDelete').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.certificateAuthorities.setIamPolicy(
     *     {
     *       // REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/certificateAuthorities/my-certificateAuthoritie',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "policy": {},
     *         //   "updateMask": "my_updateMask"
     *         // }
     *       },
     *     }
     *   );
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
      params: Params$Resource$Projects$Locations$Certificateauthorities$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Certificateauthorities$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Certificateauthorities$Setiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Certificateauthorities$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Certificateauthorities$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:setIamPolicy').replace(
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.certificateAuthorities.testIamPermissions(
     *     {
     *       // REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/certificateAuthorities/my-certificateAuthoritie',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "permissions": []
     *         // }
     *       },
     *     }
     *   );
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
      params: Params$Resource$Projects$Locations$Certificateauthorities$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Certificateauthorities$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Certificateauthorities$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Certificateauthorities$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Certificateauthorities$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:testIamPermissions').replace(
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
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Certificateauthorities$Activate
    extends StandardParameters {
    /**
     * Required. The resource name for this CertificateAuthority in the format `projects/x/locations/x/certificateAuthorities/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ActivateCertificateAuthorityRequest;
  }
  export interface Params$Resource$Projects$Locations$Certificateauthorities$Create
    extends StandardParameters {
    /**
     * Required. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63\}`
     */
    certificateAuthorityId?: string;
    /**
     * Required. The resource name of the location associated with the CertificateAuthorities, in the format `projects/x/locations/x`.
     */
    parent?: string;
    /**
     * Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CertificateAuthority;
  }
  export interface Params$Resource$Projects$Locations$Certificateauthorities$Disable
    extends StandardParameters {
    /**
     * Required. The resource name for this CertificateAuthority in the format `projects/x/locations/x/certificateAuthorities/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DisableCertificateAuthorityRequest;
  }
  export interface Params$Resource$Projects$Locations$Certificateauthorities$Enable
    extends StandardParameters {
    /**
     * Required. The resource name for this CertificateAuthority in the format `projects/x/locations/x/certificateAuthorities/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EnableCertificateAuthorityRequest;
  }
  export interface Params$Resource$Projects$Locations$Certificateauthorities$Fetch
    extends StandardParameters {
    /**
     * Required. The resource name for this CertificateAuthority in the format `projects/x/locations/x/certificateAuthorities/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Certificateauthorities$Get
    extends StandardParameters {
    /**
     * Required. The name of the CertificateAuthority to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Certificateauthorities$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The policy format version to be returned. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Certificateauthorities$List
    extends StandardParameters {
    /**
     * Optional. Only include resources that match the filter in the response.
     */
    filter?: string;
    /**
     * Optional. Specify how the results should be sorted.
     */
    orderBy?: string;
    /**
     * Optional. Limit on the number of CertificateAuthorities to include in the response. Further CertificateAuthorities can subsequently be obtained by including the ListCertificateAuthoritiesResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. Pagination token, returned earlier via ListCertificateAuthoritiesResponse.next_page_token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the location associated with the CertificateAuthorities, in the format `projects/x/locations/x`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Certificateauthorities$Patch
    extends StandardParameters {
    /**
     * Output only. The resource name for this CertificateAuthority in the format `projects/x/locations/x/certificateAuthorities/x`.
     */
    name?: string;
    /**
     * Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. A list of fields to be updated in this request.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CertificateAuthority;
  }
  export interface Params$Resource$Projects$Locations$Certificateauthorities$Restore
    extends StandardParameters {
    /**
     * Required. The resource name for this CertificateAuthority in the format `projects/x/locations/x/certificateAuthorities/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RestoreCertificateAuthorityRequest;
  }
  export interface Params$Resource$Projects$Locations$Certificateauthorities$Scheduledelete
    extends StandardParameters {
    /**
     * Required. The resource name for this CertificateAuthority in the format `projects/x/locations/x/certificateAuthorities/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ScheduleDeleteCertificateAuthorityRequest;
  }
  export interface Params$Resource$Projects$Locations$Certificateauthorities$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Certificateauthorities$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns a CertificateRevocationList.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.certificateAuthorities.certificateRevocationLists.get(
     *     {
     *       // Required. The name of the CertificateRevocationList to get.
     *       name:
     *         'projects/my-project/locations/my-location/certificateAuthorities/my-certificateAuthoritie/certificateRevocationLists/my-certificateRevocationList',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessUrl": "my_accessUrl",
     *   //   "createTime": "my_createTime",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "pemCrl": "my_pemCrl",
     *   //   "revokedCertificates": [],
     *   //   "sequenceNumber": "my_sequenceNumber",
     *   //   "state": "my_state",
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
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CertificateRevocationList>;
    get(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CertificateRevocationList>,
      callback: BodyResponseCallback<Schema$CertificateRevocationList>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Get,
      callback: BodyResponseCallback<Schema$CertificateRevocationList>
    ): void;
    get(callback: BodyResponseCallback<Schema$CertificateRevocationList>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Get
        | BodyResponseCallback<Schema$CertificateRevocationList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CertificateRevocationList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CertificateRevocationList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$CertificateRevocationList>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$CertificateRevocationList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CertificateRevocationList>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.certificateAuthorities.certificateRevocationLists.getIamPolicy(
     *     {
     *       // Optional. The policy format version to be returned. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *       'options.requestedPolicyVersion': 'placeholder-value',
     *       // REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/certificateAuthorities/my-certificateAuthoritie/certificateRevocationLists/my-certificateRevocationList',
     *     }
     *   );
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
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Getiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Lists CertificateRevocationLists.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.certificateAuthorities.certificateRevocationLists.list(
     *     {
     *       // Optional. Only include resources that match the filter in the response.
     *       filter: 'placeholder-value',
     *       // Optional. Specify how the results should be sorted.
     *       orderBy: 'placeholder-value',
     *       // Optional. Limit on the number of CertificateRevocationLists to include in the response. Further CertificateRevocationLists can subsequently be obtained by including the ListCertificateRevocationListsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
     *       pageSize: 'placeholder-value',
     *       // Optional. Pagination token, returned earlier via ListCertificateRevocationListsResponse.next_page_token.
     *       pageToken: 'placeholder-value',
     *       // Required. The resource name of the location associated with the CertificateRevocationLists, in the format `projects/x/locations/x/certificateauthorities/x`.
     *       parent:
     *         'projects/my-project/locations/my-location/certificateAuthorities/my-certificateAuthoritie',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "certificateRevocationLists": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": []
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
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListCertificateRevocationListsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCertificateRevocationListsResponse>,
      callback: BodyResponseCallback<
        Schema$ListCertificateRevocationListsResponse
      >
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$List,
      callback: BodyResponseCallback<
        Schema$ListCertificateRevocationListsResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$ListCertificateRevocationListsResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$List
        | BodyResponseCallback<Schema$ListCertificateRevocationListsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCertificateRevocationListsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCertificateRevocationListsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListCertificateRevocationListsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta1/{+parent}/certificateRevocationLists'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListCertificateRevocationListsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCertificateRevocationListsResponse>(
          parameters
        );
      }
    }

    /**
     * Update a CertificateRevocationList.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.certificateAuthorities.certificateRevocationLists.patch(
     *     {
     *       // Output only. The resource path for this CertificateRevocationList in the format `projects/x/locations/x/certificateAuthorities/x/ certificateRevocationLists/x`.
     *       name:
     *         'projects/my-project/locations/my-location/certificateAuthorities/my-certificateAuthoritie/certificateRevocationLists/my-certificateRevocationList',
     *       // Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *       // Required. A list of fields to be updated in this request.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "accessUrl": "my_accessUrl",
     *         //   "createTime": "my_createTime",
     *         //   "labels": {},
     *         //   "name": "my_name",
     *         //   "pemCrl": "my_pemCrl",
     *         //   "revokedCertificates": [],
     *         //   "sequenceNumber": "my_sequenceNumber",
     *         //   "state": "my_state",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Patch
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.certificateAuthorities.certificateRevocationLists.setIamPolicy(
     *     {
     *       // REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/certificateAuthorities/my-certificateAuthoritie/certificateRevocationLists/my-certificateRevocationList',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "policy": {},
     *         //   "updateMask": "my_updateMask"
     *         // }
     *       },
     *     }
     *   );
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
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Setiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:setIamPolicy').replace(
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.certificateAuthorities.certificateRevocationLists.testIamPermissions(
     *     {
     *       // REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/certificateAuthorities/my-certificateAuthoritie/certificateRevocationLists/my-certificateRevocationList',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "permissions": []
     *         // }
     *       },
     *     }
     *   );
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
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:testIamPermissions').replace(
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
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Get
    extends StandardParameters {
    /**
     * Required. The name of the CertificateRevocationList to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The policy format version to be returned. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$List
    extends StandardParameters {
    /**
     * Optional. Only include resources that match the filter in the response.
     */
    filter?: string;
    /**
     * Optional. Specify how the results should be sorted.
     */
    orderBy?: string;
    /**
     * Optional. Limit on the number of CertificateRevocationLists to include in the response. Further CertificateRevocationLists can subsequently be obtained by including the ListCertificateRevocationListsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. Pagination token, returned earlier via ListCertificateRevocationListsResponse.next_page_token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the location associated with the CertificateRevocationLists, in the format `projects/x/locations/x/certificateauthorities/x`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Patch
    extends StandardParameters {
    /**
     * Output only. The resource path for this CertificateRevocationList in the format `projects/x/locations/x/certificateAuthorities/x/ certificateRevocationLists/x`.
     */
    name?: string;
    /**
     * Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. A list of fields to be updated in this request.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CertificateRevocationList;
  }
  export interface Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Certificateauthorities$Certificaterevocationlists$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Certificateauthorities$Certificates {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create a new Certificate in a given Project, Location from a particular CertificateAuthority.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.certificateAuthorities.certificates.create(
     *     {
     *       // Optional. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63\}`. This field is required when using a CertificateAuthority in the Enterprise CertificateAuthority.Tier, but is optional and its value is ignored otherwise.
     *       certificateId: 'placeholder-value',
     *       // Required. The resource name of the location and CertificateAuthority associated with the Certificate, in the format `projects/x/locations/x/certificateAuthorities/x`.
     *       parent:
     *         'projects/my-project/locations/my-location/certificateAuthorities/my-certificateAuthoritie',
     *       // Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "certificateDescription": {},
     *         //   "config": {},
     *         //   "createTime": "my_createTime",
     *         //   "labels": {},
     *         //   "lifetime": "my_lifetime",
     *         //   "name": "my_name",
     *         //   "pemCertificate": "my_pemCertificate",
     *         //   "pemCertificateChain": [],
     *         //   "pemCsr": "my_pemCsr",
     *         //   "revocationDetails": {},
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "certificateDescription": {},
     *   //   "config": {},
     *   //   "createTime": "my_createTime",
     *   //   "labels": {},
     *   //   "lifetime": "my_lifetime",
     *   //   "name": "my_name",
     *   //   "pemCertificate": "my_pemCertificate",
     *   //   "pemCertificateChain": [],
     *   //   "pemCsr": "my_pemCsr",
     *   //   "revocationDetails": {},
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
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Certificate>;
    create(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Certificate>,
      callback: BodyResponseCallback<Schema$Certificate>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Create,
      callback: BodyResponseCallback<Schema$Certificate>
    ): void;
    create(callback: BodyResponseCallback<Schema$Certificate>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Create
        | BodyResponseCallback<Schema$Certificate>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Certificate>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Certificate>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Certificate> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/certificates').replace(
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
        createAPIRequest<Schema$Certificate>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Certificate>(parameters);
      }
    }

    /**
     * Returns a Certificate.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.certificateAuthorities.certificates.get(
     *     {
     *       // Required. The name of the Certificate to get.
     *       name:
     *         'projects/my-project/locations/my-location/certificateAuthorities/my-certificateAuthoritie/certificates/my-certificate',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "certificateDescription": {},
     *   //   "config": {},
     *   //   "createTime": "my_createTime",
     *   //   "labels": {},
     *   //   "lifetime": "my_lifetime",
     *   //   "name": "my_name",
     *   //   "pemCertificate": "my_pemCertificate",
     *   //   "pemCertificateChain": [],
     *   //   "pemCsr": "my_pemCsr",
     *   //   "revocationDetails": {},
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
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Certificate>;
    get(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Certificate>,
      callback: BodyResponseCallback<Schema$Certificate>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Get,
      callback: BodyResponseCallback<Schema$Certificate>
    ): void;
    get(callback: BodyResponseCallback<Schema$Certificate>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Get
        | BodyResponseCallback<Schema$Certificate>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Certificate>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Certificate>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Certificate> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Certificate>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Certificate>(parameters);
      }
    }

    /**
     * Lists Certificates.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.certificateAuthorities.certificates.list(
     *     {
     *       // Optional. Only include resources that match the filter in the response. For details on supported filters and syntax, see [Certificates Filtering documentation](https://cloud.google.com/certificate-authority-service/docs/sorting-filtering-certificates#filtering_support).
     *       filter: 'placeholder-value',
     *       // Optional. Specify how the results should be sorted. For details on supported fields and syntax, see [Certificates Sorting documentation](https://cloud.google.com/certificate-authority-service/docs/sorting-filtering-certificates#sorting_support).
     *       orderBy: 'placeholder-value',
     *       // Optional. Limit on the number of Certificates to include in the response. Further Certificates can subsequently be obtained by including the ListCertificatesResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
     *       pageSize: 'placeholder-value',
     *       // Optional. Pagination token, returned earlier via ListCertificatesResponse.next_page_token.
     *       pageToken: 'placeholder-value',
     *       // Required. The resource name of the location associated with the Certificates, in the format `projects/x/locations/x/certificateauthorities/x`.
     *       parent:
     *         'projects/my-project/locations/my-location/certificateAuthorities/my-certificateAuthoritie',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "certificates": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": []
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
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificates$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Certificateauthorities$Certificates$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListCertificatesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificates$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificates$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCertificatesResponse>,
      callback: BodyResponseCallback<Schema$ListCertificatesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificates$List,
      callback: BodyResponseCallback<Schema$ListCertificatesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListCertificatesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Certificateauthorities$Certificates$List
        | BodyResponseCallback<Schema$ListCertificatesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCertificatesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCertificatesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListCertificatesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Certificateauthorities$Certificates$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Certificateauthorities$Certificates$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/certificates').replace(
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
        createAPIRequest<Schema$ListCertificatesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCertificatesResponse>(parameters);
      }
    }

    /**
     * Update a Certificate. Currently, the only field you can update is the labels field.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.certificateAuthorities.certificates.patch(
     *     {
     *       // Output only. The resource path for this Certificate in the format `projects/x/locations/x/certificateAuthorities/x/certificates/x`.
     *       name:
     *         'projects/my-project/locations/my-location/certificateAuthorities/my-certificateAuthoritie/certificates/my-certificate',
     *       // Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *       // Required. A list of fields to be updated in this request.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "certificateDescription": {},
     *         //   "config": {},
     *         //   "createTime": "my_createTime",
     *         //   "labels": {},
     *         //   "lifetime": "my_lifetime",
     *         //   "name": "my_name",
     *         //   "pemCertificate": "my_pemCertificate",
     *         //   "pemCertificateChain": [],
     *         //   "pemCsr": "my_pemCsr",
     *         //   "revocationDetails": {},
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "certificateDescription": {},
     *   //   "config": {},
     *   //   "createTime": "my_createTime",
     *   //   "labels": {},
     *   //   "lifetime": "my_lifetime",
     *   //   "name": "my_name",
     *   //   "pemCertificate": "my_pemCertificate",
     *   //   "pemCertificateChain": [],
     *   //   "pemCsr": "my_pemCsr",
     *   //   "revocationDetails": {},
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
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Certificate>;
    patch(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Certificate>,
      callback: BodyResponseCallback<Schema$Certificate>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Patch,
      callback: BodyResponseCallback<Schema$Certificate>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Certificate>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Patch
        | BodyResponseCallback<Schema$Certificate>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Certificate>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Certificate>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Certificate> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Certificate>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Certificate>(parameters);
      }
    }

    /**
     * Revoke a Certificate.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.certificateAuthorities.certificates.revoke(
     *     {
     *       // Required. The resource name for this Certificate in the format `projects/x/locations/x/certificateAuthorities/x/certificates/x`.
     *       name:
     *         'projects/my-project/locations/my-location/certificateAuthorities/my-certificateAuthoritie/certificates/my-certificate',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "reason": "my_reason",
     *         //   "requestId": "my_requestId"
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "certificateDescription": {},
     *   //   "config": {},
     *   //   "createTime": "my_createTime",
     *   //   "labels": {},
     *   //   "lifetime": "my_lifetime",
     *   //   "name": "my_name",
     *   //   "pemCertificate": "my_pemCertificate",
     *   //   "pemCertificateChain": [],
     *   //   "pemCsr": "my_pemCsr",
     *   //   "revocationDetails": {},
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
    revoke(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Revoke,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    revoke(
      params?: Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Revoke,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Certificate>;
    revoke(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Revoke,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    revoke(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Revoke,
      options: MethodOptions | BodyResponseCallback<Schema$Certificate>,
      callback: BodyResponseCallback<Schema$Certificate>
    ): void;
    revoke(
      params: Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Revoke,
      callback: BodyResponseCallback<Schema$Certificate>
    ): void;
    revoke(callback: BodyResponseCallback<Schema$Certificate>): void;
    revoke(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Revoke
        | BodyResponseCallback<Schema$Certificate>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Certificate>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Certificate>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Certificate> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Revoke;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Revoke;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:revoke').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Certificate>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Certificate>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Create
    extends StandardParameters {
    /**
     * Optional. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63\}`. This field is required when using a CertificateAuthority in the Enterprise CertificateAuthority.Tier, but is optional and its value is ignored otherwise.
     */
    certificateId?: string;
    /**
     * Required. The resource name of the location and CertificateAuthority associated with the Certificate, in the format `projects/x/locations/x/certificateAuthorities/x`.
     */
    parent?: string;
    /**
     * Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Certificate;
  }
  export interface Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Get
    extends StandardParameters {
    /**
     * Required. The name of the Certificate to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Certificateauthorities$Certificates$List
    extends StandardParameters {
    /**
     * Optional. Only include resources that match the filter in the response. For details on supported filters and syntax, see [Certificates Filtering documentation](https://cloud.google.com/certificate-authority-service/docs/sorting-filtering-certificates#filtering_support).
     */
    filter?: string;
    /**
     * Optional. Specify how the results should be sorted. For details on supported fields and syntax, see [Certificates Sorting documentation](https://cloud.google.com/certificate-authority-service/docs/sorting-filtering-certificates#sorting_support).
     */
    orderBy?: string;
    /**
     * Optional. Limit on the number of Certificates to include in the response. Further Certificates can subsequently be obtained by including the ListCertificatesResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. Pagination token, returned earlier via ListCertificatesResponse.next_page_token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the location associated with the Certificates, in the format `projects/x/locations/x/certificateauthorities/x`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Patch
    extends StandardParameters {
    /**
     * Output only. The resource path for this Certificate in the format `projects/x/locations/x/certificateAuthorities/x/certificates/x`.
     */
    name?: string;
    /**
     * Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. A list of fields to be updated in this request.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Certificate;
  }
  export interface Params$Resource$Projects$Locations$Certificateauthorities$Certificates$Revoke
    extends StandardParameters {
    /**
     * Required. The resource name for this Certificate in the format `projects/x/locations/x/certificateAuthorities/x/certificates/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RevokeCertificateRequest;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.operations.cancel({
     *     // The name of the operation resource to be cancelled.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
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
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Locations$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Cancel
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:cancel').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.operations.delete({
     *     // The name of the operation resource to be deleted.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
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
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Operations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.operations.get({
     *     // The name of the operation resource.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Get
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x\}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'projects/my-project/locations/my-location',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "operations": []
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
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$List
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}/operations').replace(
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
        createAPIRequest<Schema$ListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Operations$Cancel
    extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelOperationRequest;
  }
  export interface Params$Resource$Projects$Locations$Operations$Delete
    extends StandardParameters {
    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$List
    extends StandardParameters {
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

  export class Resource$Projects$Locations$Reusableconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns a ReusableConfig.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.reusableConfigs.get({
     *     // Required. The name of the ReusableConfigs to get.
     *     name:
     *       'projects/my-project/locations/my-location/reusableConfigs/my-reusableConfig',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "updateTime": "my_updateTime",
     *   //   "values": {}
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
      params: Params$Resource$Projects$Locations$Reusableconfigs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Reusableconfigs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReusableConfig>;
    get(
      params: Params$Resource$Projects$Locations$Reusableconfigs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Reusableconfigs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ReusableConfig>,
      callback: BodyResponseCallback<Schema$ReusableConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Reusableconfigs$Get,
      callback: BodyResponseCallback<Schema$ReusableConfig>
    ): void;
    get(callback: BodyResponseCallback<Schema$ReusableConfig>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reusableconfigs$Get
        | BodyResponseCallback<Schema$ReusableConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReusableConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReusableConfig>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ReusableConfig> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reusableconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Reusableconfigs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ReusableConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReusableConfig>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.reusableConfigs.getIamPolicy({
     *     // Optional. The policy format version to be returned. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *     'options.requestedPolicyVersion': 'placeholder-value',
     *     // REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     *     resource:
     *       'projects/my-project/locations/my-location/reusableConfigs/my-reusableConfig',
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
      params: Params$Resource$Projects$Locations$Reusableconfigs$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Reusableconfigs$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Reusableconfigs$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Reusableconfigs$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Reusableconfigs$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reusableconfigs$Getiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reusableconfigs$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Reusableconfigs$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Lists ReusableConfigs.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.reusableConfigs.list({
     *     // Optional. Only include resources that match the filter in the response.
     *     filter: 'placeholder-value',
     *     // Optional. Specify how the results should be sorted.
     *     orderBy: 'placeholder-value',
     *     // Optional. Limit on the number of ReusableConfigs to include in the response. Further ReusableConfigs can subsequently be obtained by including the ListReusableConfigsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // Optional. Pagination token, returned earlier via ListReusableConfigsResponse.next_page_token.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the location associated with the ReusableConfigs, in the format `projects/x/locations/x`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "reusableConfigs": [],
     *   //   "unreachable": []
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
      params: Params$Resource$Projects$Locations$Reusableconfigs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Reusableconfigs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListReusableConfigsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Reusableconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Reusableconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListReusableConfigsResponse>,
      callback: BodyResponseCallback<Schema$ListReusableConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Reusableconfigs$List,
      callback: BodyResponseCallback<Schema$ListReusableConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListReusableConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reusableconfigs$List
        | BodyResponseCallback<Schema$ListReusableConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListReusableConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListReusableConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListReusableConfigsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reusableconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Reusableconfigs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/reusableConfigs').replace(
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
        createAPIRequest<Schema$ListReusableConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListReusableConfigsResponse>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.reusableConfigs.setIamPolicy({
     *     // REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     *     resource:
     *       'projects/my-project/locations/my-location/reusableConfigs/my-reusableConfig',
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
      params: Params$Resource$Projects$Locations$Reusableconfigs$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Reusableconfigs$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Reusableconfigs$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Reusableconfigs$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Reusableconfigs$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reusableconfigs$Setiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reusableconfigs$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Reusableconfigs$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:setIamPolicy').replace(
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/privateca.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const privateca = google.privateca('v1beta1');
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
     *   const res = await privateca.projects.locations.reusableConfigs.testIamPermissions(
     *     {
     *       // REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/reusableConfigs/my-reusableConfig',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "permissions": []
     *         // }
     *       },
     *     }
     *   );
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
      params: Params$Resource$Projects$Locations$Reusableconfigs$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Reusableconfigs$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Reusableconfigs$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Reusableconfigs$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Reusableconfigs$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reusableconfigs$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reusableconfigs$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Reusableconfigs$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://privateca.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:testIamPermissions').replace(
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
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Reusableconfigs$Get
    extends StandardParameters {
    /**
     * Required. The name of the ReusableConfigs to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Reusableconfigs$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The policy format version to be returned. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Reusableconfigs$List
    extends StandardParameters {
    /**
     * Optional. Only include resources that match the filter in the response.
     */
    filter?: string;
    /**
     * Optional. Specify how the results should be sorted.
     */
    orderBy?: string;
    /**
     * Optional. Limit on the number of ReusableConfigs to include in the response. Further ReusableConfigs can subsequently be obtained by including the ListReusableConfigsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. Pagination token, returned earlier via ListReusableConfigsResponse.next_page_token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the location associated with the ReusableConfigs, in the format `projects/x/locations/x`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Reusableconfigs$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Reusableconfigs$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }
}
