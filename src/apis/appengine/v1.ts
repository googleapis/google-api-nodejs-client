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

export namespace appengine_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  /**
   * App Engine Admin API
   *
   * The App Engine Admin API enables developers to provision and manage their
   * App Engine applications.
   *
   * @example
   * const {google} = require('googleapis');
   * const appengine = google.appengine('v1');
   *
   * @namespace appengine
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Appengine
   */
  export class Appengine {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    apps: Resource$Apps;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.apps = new Resource$Apps(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * Google Cloud Endpoints
   * (https://cloud.google.com/appengine/docs/python/endpoints/) configuration
   * for API handlers.
   */
  export interface Schema$ApiConfigHandler {
    /**
     * Action to take when users access resources that require authentication.
     * Defaults to redirect.
     */
    authFailAction?: string;
    /**
     * Level of login required to access this resource. Defaults to optional.
     */
    login?: string;
    /**
     * Path to the script from the application root directory.
     */
    script?: string;
    /**
     * Security (HTTPS) enforcement for this URL.
     */
    securityLevel?: string;
    /**
     * URL to serve the endpoint at.
     */
    url?: string;
  }
  /**
   * Uses Google Cloud Endpoints to handle requests.
   */
  export interface Schema$ApiEndpointHandler {
    /**
     * Path to the script from the application root directory.
     */
    scriptPath?: string;
  }
  /**
   * An Application resource contains the top-level configuration of an App
   * Engine application.
   */
  export interface Schema$Application {
    /**
     * Google Apps authentication domain that controls which users can access
     * this application.Defaults to open access for any Google Account.
     */
    authDomain?: string;
    /**
     * Google Cloud Storage bucket that can be used for storing files associated
     * with this application. This bucket is associated with the application and
     * can be used by the gcloud deployment commands.@OutputOnly
     */
    codeBucket?: string;
    /**
     * Google Cloud Storage bucket that can be used by this application to store
     * content.@OutputOnly
     */
    defaultBucket?: string;
    /**
     * Cookie expiration policy for this application.
     */
    defaultCookieExpiration?: string;
    /**
     * Hostname used to reach this application, as resolved by App
     * Engine.@OutputOnly
     */
    defaultHostname?: string;
    /**
     * HTTP path dispatch rules for requests to the application that do not
     * explicitly target a service or version. Rules are order-dependent. Up to
     * 20 dispatch rules can be supported.@OutputOnly
     */
    dispatchRules?: Schema$UrlDispatchRule[];
    /**
     * The feature specific settings to be used in the application.
     */
    featureSettings?: Schema$FeatureSettings;
    /**
     * The Google Container Registry domain used for storing managed build
     * docker images for this application.
     */
    gcrDomain?: string;
    iap?: Schema$IdentityAwareProxy;
    /**
     * Identifier of the Application resource. This identifier is equivalent to
     * the project ID of the Google Cloud Platform project where you want to
     * deploy your application. Example: myapp.
     */
    id?: string;
    /**
     * Location from which this application runs. Application instances run out
     * of the data centers in the specified location, which is also where all of
     * the application&#39;s end user content is stored.Defaults to
     * us-central.View the list of supported locations
     * (https://cloud.google.com/appengine/docs/locations).
     */
    locationId?: string;
    /**
     * Full path to the Application resource in the API. Example:
     * apps/myapp.@OutputOnly
     */
    name?: string;
    /**
     * Serving status of this application.
     */
    servingStatus?: string;
  }
  /**
   * An SSL certificate that a user has been authorized to administer. A user is
   * authorized to administer any certificate that applies to one of their
   * authorized domains.
   */
  export interface Schema$AuthorizedCertificate {
    /**
     * The SSL certificate serving the AuthorizedCertificate resource. This must
     * be obtained independently from a certificate authority.
     */
    certificateRawData?: Schema$CertificateRawData;
    /**
     * The user-specified display name of the certificate. This is not
     * guaranteed to be unique. Example: My Certificate.
     */
    displayName?: string;
    /**
     * Aggregate count of the domain mappings with this certificate mapped. This
     * count includes domain mappings on applications for which the user does
     * not have VIEWER permissions.Only returned by GET or LIST requests when
     * specifically requested by the view=FULL_CERTIFICATE option.@OutputOnly
     */
    domainMappingsCount?: number;
    /**
     * Topmost applicable domains of this certificate. This certificate applies
     * to these domains and their subdomains. Example: example.com.@OutputOnly
     */
    domainNames?: string[];
    /**
     * The time when this certificate expires. To update the renewal time on
     * this certificate, upload an SSL certificate with a different expiration
     * time using AuthorizedCertificates.UpdateAuthorizedCertificate.@OutputOnly
     */
    expireTime?: string;
    /**
     * Relative name of the certificate. This is a unique value autogenerated on
     * AuthorizedCertificate resource creation. Example: 12345.@OutputOnly
     */
    id?: string;
    /**
     * Only applicable if this certificate is managed by App Engine. Managed
     * certificates are tied to the lifecycle of a DomainMapping and cannot be
     * updated or deleted via the AuthorizedCertificates API. If this
     * certificate is manually administered by the user, this field will be
     * empty.@OutputOnly
     */
    managedCertificate?: Schema$ManagedCertificate;
    /**
     * Full path to the AuthorizedCertificate resource in the API. Example:
     * apps/myapp/authorizedCertificates/12345.@OutputOnly
     */
    name?: string;
    /**
     * The full paths to user visible Domain Mapping resources that have this
     * certificate mapped. Example: apps/myapp/domainMappings/example.com.This
     * may not represent the full list of mapped domain mappings if the user
     * does not have VIEWER permissions on all of the applications that have
     * this certificate mapped. See domain_mappings_count for a complete
     * count.Only returned by GET or LIST requests when specifically requested
     * by the view=FULL_CERTIFICATE option.@OutputOnly
     */
    visibleDomainMappings?: string[];
  }
  /**
   * A domain that a user has been authorized to administer. To authorize use of
   * a domain, verify ownership via Webmaster Central
   * (https://www.google.com/webmasters/verification/home).
   */
  export interface Schema$AuthorizedDomain {
    /**
     * Fully qualified domain name of the domain authorized for use. Example:
     * example.com.
     */
    id?: string;
    /**
     * Full path to the AuthorizedDomain resource in the API. Example:
     * apps/myapp/authorizedDomains/example.com.@OutputOnly
     */
    name?: string;
  }
  /**
   * Automatic scaling is based on request rate, response latencies, and other
   * application metrics.
   */
  export interface Schema$AutomaticScaling {
    /**
     * Amount of time that the Autoscaler
     * (https://cloud.google.com/compute/docs/autoscaler/) should wait between
     * changes to the number of virtual machines. Only applicable in the App
     * Engine flexible environment.
     */
    coolDownPeriod?: string;
    /**
     * Target scaling by CPU usage.
     */
    cpuUtilization?: Schema$CpuUtilization;
    /**
     * Target scaling by disk usage.
     */
    diskUtilization?: Schema$DiskUtilization;
    /**
     * Number of concurrent requests an automatic scaling instance can accept
     * before the scheduler spawns a new instance.Defaults to a runtime-specific
     * value.
     */
    maxConcurrentRequests?: number;
    /**
     * Maximum number of idle instances that should be maintained for this
     * version.
     */
    maxIdleInstances?: number;
    /**
     * Maximum amount of time that a request should wait in the pending queue
     * before starting a new instance to handle it.
     */
    maxPendingLatency?: string;
    /**
     * Maximum number of instances that should be started to handle requests for
     * this version.
     */
    maxTotalInstances?: number;
    /**
     * Minimum number of idle instances that should be maintained for this
     * version. Only applicable for the default version of a service.
     */
    minIdleInstances?: number;
    /**
     * Minimum amount of time a request should wait in the pending queue before
     * starting a new instance to handle it.
     */
    minPendingLatency?: string;
    /**
     * Minimum number of running instances that should be maintained for this
     * version.
     */
    minTotalInstances?: number;
    /**
     * Target scaling by network usage.
     */
    networkUtilization?: Schema$NetworkUtilization;
    /**
     * Target scaling by request utilization.
     */
    requestUtilization?: Schema$RequestUtilization;
    /**
     * Scheduler settings for standard environment.
     */
    standardSchedulerSettings?: Schema$StandardSchedulerSettings;
  }
  /**
   * A service with basic scaling will create an instance when the application
   * receives a request. The instance will be turned down when the app becomes
   * idle. Basic scaling is ideal for work that is intermittent or driven by
   * user activity.
   */
  export interface Schema$BasicScaling {
    /**
     * Duration of time after the last request that an instance must wait before
     * the instance is shut down.
     */
    idleTimeout?: string;
    /**
     * Maximum number of instances to create for this version.
     */
    maxInstances?: number;
  }
  /**
   * Request message for Firewall.BatchUpdateIngressRules.
   */
  export interface Schema$BatchUpdateIngressRulesRequest {
    /**
     * A list of FirewallRules to replace the existing set.
     */
    ingressRules?: Schema$FirewallRule[];
  }
  /**
   * Response message for Firewall.UpdateAllIngressRules.
   */
  export interface Schema$BatchUpdateIngressRulesResponse {
    /**
     * The full list of ingress FirewallRules for this application.
     */
    ingressRules?: Schema$FirewallRule[];
  }
  /**
   * An SSL certificate obtained from a certificate authority.
   */
  export interface Schema$CertificateRawData {
    /**
     * Unencrypted PEM encoded RSA private key. This field is set once on
     * certificate creation and then encrypted. The key size must be 2048 bits
     * or fewer. Must include the header and footer. Example: &lt;pre&gt;
     * -----BEGIN RSA PRIVATE KEY----- &lt;unencrypted_key_value&gt; -----END
     * RSA PRIVATE KEY----- &lt;/pre&gt; @InputOnly
     */
    privateKey?: string;
    /**
     * PEM encoded x.509 public key certificate. This field is set once on
     * certificate creation. Must include the header and footer. Example:
     * &lt;pre&gt; -----BEGIN CERTIFICATE----- &lt;certificate_value&gt;
     * -----END CERTIFICATE----- &lt;/pre&gt;
     */
    publicCertificate?: string;
  }
  /**
   * Options for the build operations performed as a part of the version
   * deployment. Only applicable for App Engine flexible environment when
   * creating a version using source code directly.
   */
  export interface Schema$CloudBuildOptions {
    /**
     * Path to the yaml file used in deployment, used to determine runtime
     * configuration details.Required for flexible environment builds.See
     * https://cloud.google.com/appengine/docs/standard/python/config/appref for
     * more details.
     */
    appYamlPath?: string;
    /**
     * The Cloud Build timeout used as part of any dependent builds performed by
     * version creation. Defaults to 10 minutes.
     */
    cloudBuildTimeout?: string;
  }
  /**
   * Docker image that is used to create a container and start a VM instance for
   * the version that you deploy. Only applicable for instances running in the
   * App Engine flexible environment.
   */
  export interface Schema$ContainerInfo {
    /**
     * URI to the hosted container image in Google Container Registry. The URI
     * must be fully qualified and include a tag or digest. Examples:
     * &quot;gcr.io/my-project/image:tag&quot; or
     * &quot;gcr.io/my-project/image@digest&quot;
     */
    image?: string;
  }
  /**
   * Target scaling by CPU usage.
   */
  export interface Schema$CpuUtilization {
    /**
     * Period of time over which CPU utilization is calculated.
     */
    aggregationWindowLength?: string;
    /**
     * Target CPU utilization ratio to maintain when scaling. Must be between 0
     * and 1.
     */
    targetUtilization?: number;
  }
  /**
   * Metadata for the given google.longrunning.Operation during a
   * google.appengine.v1.CreateVersionRequest.
   */
  export interface Schema$CreateVersionMetadataV1 {
    /**
     * The Cloud Build ID if one was created as part of the version create.
     * @OutputOnly
     */
    cloudBuildId?: string;
  }
  /**
   * Metadata for the given google.longrunning.Operation during a
   * google.appengine.v1alpha.CreateVersionRequest.
   */
  export interface Schema$CreateVersionMetadataV1Alpha {
    /**
     * The Cloud Build ID if one was created as part of the version create.
     * @OutputOnly
     */
    cloudBuildId?: string;
  }
  /**
   * Metadata for the given google.longrunning.Operation during a
   * google.appengine.v1beta.CreateVersionRequest.
   */
  export interface Schema$CreateVersionMetadataV1Beta {
    /**
     * The Cloud Build ID if one was created as part of the version create.
     * @OutputOnly
     */
    cloudBuildId?: string;
  }
  /**
   * Request message for Instances.DebugInstance.
   */
  export interface Schema$DebugInstanceRequest {
    /**
     * Public SSH key to add to the instance. Examples: [USERNAME]:ssh-rsa
     * [KEY_VALUE] [USERNAME] [USERNAME]:ssh-rsa [KEY_VALUE] google-ssh
     * {&quot;userName&quot;:&quot;[USERNAME]&quot;,&quot;expireOn&quot;:&quot;[EXPIRE_TIME]&quot;}For
     * more information, see Adding and Removing SSH Keys
     * (https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys).
     */
    sshKey?: string;
  }
  /**
   * Code and application artifacts used to deploy a version to App Engine.
   */
  export interface Schema$Deployment {
    /**
     * Options for any Google Cloud Container Builder builds created as a part
     * of this deployment.Note that this is orthogonal to the build parameter,
     * where the deployment depends on an already existing cloud build. These
     * options will only be used if a new build is created, such as when
     * deploying to the App Engine flexible environment using files or zip.
     */
    cloudBuildOptions?: Schema$CloudBuildOptions;
    /**
     * The Docker image for the container that runs the version. Only applicable
     * for instances running in the App Engine flexible environment.
     */
    container?: Schema$ContainerInfo;
    /**
     * Manifest of the files stored in Google Cloud Storage that are included as
     * part of this version. All files must be readable using the credentials
     * supplied with this call.
     */
    files?: any;
    /**
     * The zip file for this deployment, if this is a zip deployment.
     */
    zip?: Schema$ZipInfo;
  }
  /**
   * Target scaling by disk usage. Only applicable in the App Engine flexible
   * environment.
   */
  export interface Schema$DiskUtilization {
    /**
     * Target bytes read per second.
     */
    targetReadBytesPerSecond?: number;
    /**
     * Target ops read per seconds.
     */
    targetReadOpsPerSecond?: number;
    /**
     * Target bytes written per second.
     */
    targetWriteBytesPerSecond?: number;
    /**
     * Target ops written per second.
     */
    targetWriteOpsPerSecond?: number;
  }
  /**
   * A domain serving an App Engine application.
   */
  export interface Schema$DomainMapping {
    /**
     * Relative name of the domain serving the application. Example:
     * example.com.
     */
    id?: string;
    /**
     * Full path to the DomainMapping resource in the API. Example:
     * apps/myapp/domainMapping/example.com.@OutputOnly
     */
    name?: string;
    /**
     * The resource records required to configure this domain mapping. These
     * records must be added to the domain&#39;s DNS configuration in order to
     * serve the application via this domain mapping.@OutputOnly
     */
    resourceRecords?: Schema$ResourceRecord[];
    /**
     * SSL configuration for this domain. If unconfigured, this domain will not
     * serve with SSL.
     */
    sslSettings?: Schema$SslSettings;
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
   * Cloud Endpoints (https://cloud.google.com/endpoints) configuration. The
   * Endpoints API Service provides tooling for serving Open API and gRPC
   * endpoints via an NGINX proxy. Only valid for App Engine Flexible
   * environment deployments.The fields here refer to the name and configuration
   * ID of a &quot;service&quot; resource in the Service Management API
   * (https://cloud.google.com/service-management/overview).
   */
  export interface Schema$EndpointsApiService {
    /**
     * Endpoints service configuration ID as specified by the Service Management
     * API. For example &quot;2016-09-19r1&quot;.By default, the rollout
     * strategy for Endpoints is RolloutStrategy.FIXED. This means that
     * Endpoints starts up with a particular configuration ID. When a new
     * configuration is rolled out, Endpoints must be given the new
     * configuration ID. The config_id field is used to give the configuration
     * ID and is required in this case.Endpoints also has a rollout strategy
     * called RolloutStrategy.MANAGED. When using this, Endpoints fetches the
     * latest configuration and does not need the configuration ID. In this
     * case, config_id must be omitted.
     */
    configId?: string;
    /**
     * Endpoints service name which is the name of the &quot;service&quot;
     * resource in the Service Management API. For example
     * &quot;myapi.endpoints.myproject.cloud.goog&quot;
     */
    name?: string;
  }
  /**
   * Custom static error page to be served when an error occurs.
   */
  export interface Schema$ErrorHandler {
    /**
     * Error condition this handler applies to.
     */
    errorCode?: string;
    /**
     * MIME type of file. Defaults to text/html.
     */
    mimeType?: string;
    /**
     * Static file content to be served for this error.
     */
    staticFile?: string;
  }
  /**
   * The feature specific settings to be used in the application. These define
   * behaviors that are user configurable.
   */
  export interface Schema$FeatureSettings {
    /**
     * Boolean value indicating if split health checks should be used instead of
     * the legacy health checks. At an app.yaml level, this means defaulting to
     * &#39;readiness_check&#39; and &#39;liveness_check&#39; values instead of
     * &#39;health_check&#39; ones. Once the legacy &#39;health_check&#39;
     * behavior is deprecated, and this value is always true, this setting can
     * be removed.
     */
    splitHealthChecks?: boolean;
  }
  /**
   * Single source file that is part of the version to be deployed. Each source
   * file that is deployed must be specified separately.
   */
  export interface Schema$FileInfo {
    /**
     * The MIME type of the file.Defaults to the value from Google Cloud
     * Storage.
     */
    mimeType?: string;
    /**
     * The SHA1 hash of the file, in hex.
     */
    sha1Sum?: string;
    /**
     * URL source to use to fetch this file. Must be a URL to a resource in
     * Google Cloud Storage in the form
     * &#39;http(s)://storage.googleapis.com/&lt;bucket&gt;/&lt;object&gt;&#39;.
     */
    sourceUrl?: string;
  }
  /**
   * A single firewall rule that is evaluated against incoming traffic and
   * provides an action to take on matched requests.
   */
  export interface Schema$FirewallRule {
    /**
     * The action to take on matched requests.
     */
    action?: string;
    /**
     * An optional string description of this rule. This field has a maximum
     * length of 100 characters.
     */
    description?: string;
    /**
     * A positive integer between 1, Int32.MaxValue-1 that defines the order of
     * rule evaluation. Rules with the lowest priority are evaluated first.A
     * default rule at priority Int32.MaxValue matches all IPv4 and IPv6 traffic
     * when no previous rule matches. Only the action of this rule can be
     * modified by the user.
     */
    priority?: number;
    /**
     * IP address or range, defined using CIDR notation, of requests that this
     * rule applies to. You can use the wildcard character &quot;*&quot; to
     * match all IPs equivalent to &quot;0/0&quot; and &quot;::/0&quot;
     * together. Examples: 192.168.1.1 or 192.168.0.0/16 or 2001:db8::/32  or
     * 2001:0db8:0000:0042:0000:8a2e:0370:7334.&lt;p&gt;Truncation will be
     * silently performed on addresses which are not properly truncated. For
     * example, 1.2.3.4/24 is accepted as the same address as 1.2.3.0/24.
     * Similarly, for IPv6, 2001:db8::1/32 is accepted as the same address as
     * 2001:db8::/32.
     */
    sourceRange?: string;
  }
  /**
   * Health checking configuration for VM instances. Unhealthy instances are
   * killed and replaced with new instances. Only applicable for instances in
   * App Engine flexible environment.
   */
  export interface Schema$HealthCheck {
    /**
     * Interval between health checks.
     */
    checkInterval?: string;
    /**
     * Whether to explicitly disable health checks for this instance.
     */
    disableHealthCheck?: boolean;
    /**
     * Number of consecutive successful health checks required before receiving
     * traffic.
     */
    healthyThreshold?: number;
    /**
     * Host header to send when performing an HTTP health check. Example:
     * &quot;myapp.appspot.com&quot;
     */
    host?: string;
    /**
     * Number of consecutive failed health checks required before an instance is
     * restarted.
     */
    restartThreshold?: number;
    /**
     * Time before the health check is considered failed.
     */
    timeout?: string;
    /**
     * Number of consecutive failed health checks required before removing
     * traffic.
     */
    unhealthyThreshold?: number;
  }
  /**
   * Identity-Aware Proxy
   */
  export interface Schema$IdentityAwareProxy {
    /**
     * Whether the serving infrastructure will authenticate and authorize all
     * incoming requests.If true, the oauth2_client_id and oauth2_client_secret
     * fields must be non-empty.
     */
    enabled?: boolean;
    /**
     * OAuth2 client ID to use for the authentication flow.
     */
    oauth2ClientId?: string;
    /**
     * OAuth2 client secret to use for the authentication flow.For security
     * reasons, this value cannot be retrieved via the API. Instead, the SHA-256
     * hash of the value is returned in the oauth2_client_secret_sha256
     * field.@InputOnly
     */
    oauth2ClientSecret?: string;
    /**
     * Hex-encoded SHA-256 hash of the client secret.@OutputOnly
     */
    oauth2ClientSecretSha256?: string;
  }
  /**
   * An Instance resource is the computing unit that App Engine uses to
   * automatically scale an application.
   */
  export interface Schema$Instance {
    /**
     * App Engine release this instance is running on.@OutputOnly
     */
    appEngineRelease?: string;
    /**
     * Availability of the instance.@OutputOnly
     */
    availability?: string;
    /**
     * Average latency (ms) over the last minute.@OutputOnly
     */
    averageLatency?: number;
    /**
     * Number of errors since this instance was started.@OutputOnly
     */
    errors?: number;
    /**
     * Relative name of the instance within the version. Example:
     * instance-1.@OutputOnly
     */
    id?: string;
    /**
     * Total memory in use (bytes).@OutputOnly
     */
    memoryUsage?: string;
    /**
     * Full path to the Instance resource in the API. Example:
     * apps/myapp/services/default/versions/v1/instances/instance-1.@OutputOnly
     */
    name?: string;
    /**
     * Average queries per second (QPS) over the last minute.@OutputOnly
     */
    qps?: number;
    /**
     * Number of requests since this instance was started.@OutputOnly
     */
    requests?: number;
    /**
     * Time that this instance was started.@OutputOnly
     */
    startTime?: string;
    /**
     * Whether this instance is in debug mode. Only applicable for instances in
     * App Engine flexible environment.@OutputOnly
     */
    vmDebugEnabled?: boolean;
    /**
     * Virtual machine ID of this instance. Only applicable for instances in App
     * Engine flexible environment.@OutputOnly
     */
    vmId?: string;
    /**
     * The IP address of this instance. Only applicable for instances in App
     * Engine flexible environment.@OutputOnly
     */
    vmIp?: string;
    /**
     * Name of the virtual machine where this instance lives. Only applicable
     * for instances in App Engine flexible environment.@OutputOnly
     */
    vmName?: string;
    /**
     * Status of the virtual machine where this instance lives. Only applicable
     * for instances in App Engine flexible environment.@OutputOnly
     */
    vmStatus?: string;
    /**
     * Zone where the virtual machine is located. Only applicable for instances
     * in App Engine flexible environment.@OutputOnly
     */
    vmZoneName?: string;
  }
  /**
   * Third-party Python runtime library that is required by the application.
   */
  export interface Schema$Library {
    /**
     * Name of the library. Example: &quot;django&quot;.
     */
    name?: string;
    /**
     * Version of the library to select, or &quot;latest&quot;.
     */
    version?: string;
  }
  /**
   * Response message for AuthorizedCertificates.ListAuthorizedCertificates.
   */
  export interface Schema$ListAuthorizedCertificatesResponse {
    /**
     * The SSL certificates the user is authorized to administer.
     */
    certificates?: Schema$AuthorizedCertificate[];
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
  }
  /**
   * Response message for AuthorizedDomains.ListAuthorizedDomains.
   */
  export interface Schema$ListAuthorizedDomainsResponse {
    /**
     * The authorized domains belonging to the user.
     */
    domains?: Schema$AuthorizedDomain[];
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
  }
  /**
   * Response message for DomainMappings.ListDomainMappings.
   */
  export interface Schema$ListDomainMappingsResponse {
    /**
     * The domain mappings for the application.
     */
    domainMappings?: Schema$DomainMapping[];
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
  }
  /**
   * Response message for Firewall.ListIngressRules.
   */
  export interface Schema$ListIngressRulesResponse {
    /**
     * The ingress FirewallRules for this application.
     */
    ingressRules?: Schema$FirewallRule[];
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
  }
  /**
   * Response message for Instances.ListInstances.
   */
  export interface Schema$ListInstancesResponse {
    /**
     * The instances belonging to the requested version.
     */
    instances?: Schema$Instance[];
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
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
   * Response message for Services.ListServices.
   */
  export interface Schema$ListServicesResponse {
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
    /**
     * The services belonging to the requested application.
     */
    services?: Schema$Service[];
  }
  /**
   * Response message for Versions.ListVersions.
   */
  export interface Schema$ListVersionsResponse {
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
    /**
     * The versions belonging to the requested service.
     */
    versions?: Schema$Version[];
  }
  /**
   * Health checking configuration for VM instances. Unhealthy instances are
   * killed and replaced with new instances.
   */
  export interface Schema$LivenessCheck {
    /**
     * Interval between health checks.
     */
    checkInterval?: string;
    /**
     * Number of consecutive failed checks required before considering the VM
     * unhealthy.
     */
    failureThreshold?: number;
    /**
     * Host header to send when performing a HTTP Liveness check. Example:
     * &quot;myapp.appspot.com&quot;
     */
    host?: string;
    /**
     * The initial delay before starting to execute the checks.
     */
    initialDelay?: string;
    /**
     * The request path.
     */
    path?: string;
    /**
     * Number of consecutive successful checks required before considering the
     * VM healthy.
     */
    successThreshold?: number;
    /**
     * Time before the check is considered failed.
     */
    timeout?: string;
  }
  /**
   * A resource that represents Google Cloud Platform location.
   */
  export interface Schema$Location {
    /**
     * The friendly name for this location, typically a nearby city name. For
     * example, &quot;Tokyo&quot;.
     */
    displayName?: string;
    /**
     * Cross-service attributes for the location. For example
     * {&quot;cloud.googleapis.com/region&quot;: &quot;us-east1&quot;}
     */
    labels?: any;
    /**
     * The canonical id for this location. For example: &quot;us-east1&quot;.
     */
    locationId?: string;
    /**
     * Service-specific metadata. For example the available capacity at the
     * given location.
     */
    metadata?: any;
    /**
     * Resource name for the location, which may vary between implementations.
     * For example: &quot;projects/example-project/locations/us-east1&quot;
     */
    name?: string;
  }
  /**
   * Metadata for the given google.cloud.location.Location.
   */
  export interface Schema$LocationMetadata {
    /**
     * App Engine flexible environment is available in the given
     * location.@OutputOnly
     */
    flexibleEnvironmentAvailable?: boolean;
    /**
     * App Engine standard environment is available in the given
     * location.@OutputOnly
     */
    standardEnvironmentAvailable?: boolean;
  }
  /**
   * A certificate managed by App Engine.
   */
  export interface Schema$ManagedCertificate {
    /**
     * Time at which the certificate was last renewed. The renewal process is
     * fully managed. Certificate renewal will automatically occur before the
     * certificate expires. Renewal errors can be tracked via
     * ManagementStatus.@OutputOnly
     */
    lastRenewalTime?: string;
    /**
     * Status of certificate management. Refers to the most recent certificate
     * acquisition or renewal attempt.@OutputOnly
     */
    status?: string;
  }
  /**
   * A service with manual scaling runs continuously, allowing you to perform
   * complex initialization and rely on the state of its memory over time.
   */
  export interface Schema$ManualScaling {
    /**
     * Number of instances to assign to the service at the start. This number
     * can later be altered by using the Modules API
     * (https://cloud.google.com/appengine/docs/python/modules/functions)
     * set_num_instances() function.
     */
    instances?: number;
  }
  /**
   * Extra network settings. Only applicable in the App Engine flexible
   * environment.
   */
  export interface Schema$Network {
    /**
     * List of ports, or port pairs, to forward from the virtual machine to the
     * application container. Only applicable in the App Engine flexible
     * environment.
     */
    forwardedPorts?: string[];
    /**
     * Tag to apply to the instance during creation. Only applicable in the App
     * Engine flexible environment.
     */
    instanceTag?: string;
    /**
     * Google Compute Engine network where the virtual machines are created.
     * Specify the short name, not the resource path.Defaults to default.
     */
    name?: string;
    /**
     * Google Cloud Platform sub-network where the virtual machines are created.
     * Specify the short name, not the resource path.If a subnetwork name is
     * specified, a network name will also be required unless it is for the
     * default network. If the network that the instance is being created in is
     * a Legacy network, then the IP address is allocated from the IPv4Range. If
     * the network that the instance is being created in is an auto Subnet Mode
     * Network, then only network name should be specified (not the
     * subnetwork_name) and the IP address is created from the IPCidrRange of
     * the subnetwork that exists in that zone for that network. If the network
     * that the instance is being created in is a custom Subnet Mode Network,
     * then the subnetwork_name must be specified and the IP address is created
     * from the IPCidrRange of the subnetwork.If specified, the subnetwork must
     * exist in the same region as the App Engine flexible environment
     * application.
     */
    subnetworkName?: string;
  }
  /**
   * Target scaling by network usage. Only applicable in the App Engine flexible
   * environment.
   */
  export interface Schema$NetworkUtilization {
    /**
     * Target bytes received per second.
     */
    targetReceivedBytesPerSecond?: number;
    /**
     * Target packets received per second.
     */
    targetReceivedPacketsPerSecond?: number;
    /**
     * Target bytes sent per second.
     */
    targetSentBytesPerSecond?: number;
    /**
     * Target packets sent per second.
     */
    targetSentPacketsPerSecond?: number;
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
   * Metadata for the given google.longrunning.Operation.
   */
  export interface Schema$OperationMetadata {
    /**
     * Timestamp that this operation completed.@OutputOnly
     */
    endTime?: string;
    /**
     * Timestamp that this operation was created.@OutputOnly
     */
    insertTime?: string;
    /**
     * API method that initiated this operation. Example:
     * google.appengine.v1beta4.Version.CreateVersion.@OutputOnly
     */
    method?: string;
    /**
     * Type of this operation. Deprecated, use method field instead. Example:
     * &quot;create_version&quot;.@OutputOnly
     */
    operationType?: string;
    /**
     * Name of the resource that this operation is acting on. Example:
     * apps/myapp/modules/default.@OutputOnly
     */
    target?: string;
    /**
     * User who requested this operation.@OutputOnly
     */
    user?: string;
  }
  /**
   * Metadata for the given google.longrunning.Operation.
   */
  export interface Schema$OperationMetadataV1 {
    createVersionMetadata?: Schema$CreateVersionMetadataV1;
    /**
     * Time that this operation completed.@OutputOnly
     */
    endTime?: string;
    /**
     * Ephemeral message that may change every time the operation is polled.
     * @OutputOnly
     */
    ephemeralMessage?: string;
    /**
     * Time that this operation was created.@OutputOnly
     */
    insertTime?: string;
    /**
     * API method that initiated this operation. Example:
     * google.appengine.v1.Versions.CreateVersion.@OutputOnly
     */
    method?: string;
    /**
     * Name of the resource that this operation is acting on. Example:
     * apps/myapp/services/default.@OutputOnly
     */
    target?: string;
    /**
     * User who requested this operation.@OutputOnly
     */
    user?: string;
    /**
     * Durable messages that persist on every operation poll. @OutputOnly
     */
    warning?: string[];
  }
  /**
   * Metadata for the given google.longrunning.Operation.
   */
  export interface Schema$OperationMetadataV1Alpha {
    createVersionMetadata?: Schema$CreateVersionMetadataV1Alpha;
    /**
     * Time that this operation completed.@OutputOnly
     */
    endTime?: string;
    /**
     * Ephemeral message that may change every time the operation is polled.
     * @OutputOnly
     */
    ephemeralMessage?: string;
    /**
     * Time that this operation was created.@OutputOnly
     */
    insertTime?: string;
    /**
     * API method that initiated this operation. Example:
     * google.appengine.v1alpha.Versions.CreateVersion.@OutputOnly
     */
    method?: string;
    /**
     * Name of the resource that this operation is acting on. Example:
     * apps/myapp/services/default.@OutputOnly
     */
    target?: string;
    /**
     * User who requested this operation.@OutputOnly
     */
    user?: string;
    /**
     * Durable messages that persist on every operation poll. @OutputOnly
     */
    warning?: string[];
  }
  /**
   * Metadata for the given google.longrunning.Operation.
   */
  export interface Schema$OperationMetadataV1Beta {
    createVersionMetadata?: Schema$CreateVersionMetadataV1Beta;
    /**
     * Time that this operation completed.@OutputOnly
     */
    endTime?: string;
    /**
     * Ephemeral message that may change every time the operation is polled.
     * @OutputOnly
     */
    ephemeralMessage?: string;
    /**
     * Time that this operation was created.@OutputOnly
     */
    insertTime?: string;
    /**
     * API method that initiated this operation. Example:
     * google.appengine.v1beta.Versions.CreateVersion.@OutputOnly
     */
    method?: string;
    /**
     * Name of the resource that this operation is acting on. Example:
     * apps/myapp/services/default.@OutputOnly
     */
    target?: string;
    /**
     * User who requested this operation.@OutputOnly
     */
    user?: string;
    /**
     * Durable messages that persist on every operation poll. @OutputOnly
     */
    warning?: string[];
  }
  /**
   * Metadata for the given google.longrunning.Operation.
   */
  export interface Schema$OperationMetadataV1Beta5 {
    /**
     * Timestamp that this operation completed.@OutputOnly
     */
    endTime?: string;
    /**
     * Timestamp that this operation was created.@OutputOnly
     */
    insertTime?: string;
    /**
     * API method name that initiated this operation. Example:
     * google.appengine.v1beta5.Version.CreateVersion.@OutputOnly
     */
    method?: string;
    /**
     * Name of the resource that this operation is acting on. Example:
     * apps/myapp/services/default.@OutputOnly
     */
    target?: string;
    /**
     * User who requested this operation.@OutputOnly
     */
    user?: string;
  }
  /**
   * Readiness checking configuration for VM instances. Unhealthy instances are
   * removed from traffic rotation.
   */
  export interface Schema$ReadinessCheck {
    /**
     * A maximum time limit on application initialization, measured from moment
     * the application successfully replies to a healthcheck until it is ready
     * to serve traffic.
     */
    appStartTimeout?: string;
    /**
     * Interval between health checks.
     */
    checkInterval?: string;
    /**
     * Number of consecutive failed checks required before removing traffic.
     */
    failureThreshold?: number;
    /**
     * Host header to send when performing a HTTP Readiness check. Example:
     * &quot;myapp.appspot.com&quot;
     */
    host?: string;
    /**
     * The request path.
     */
    path?: string;
    /**
     * Number of consecutive successful checks required before receiving
     * traffic.
     */
    successThreshold?: number;
    /**
     * Time before the check is considered failed.
     */
    timeout?: string;
  }
  /**
   * Request message for &#39;Applications.RepairApplication&#39;.
   */
  export interface Schema$RepairApplicationRequest {}
  /**
   * Target scaling by request utilization. Only applicable in the App Engine
   * flexible environment.
   */
  export interface Schema$RequestUtilization {
    /**
     * Target number of concurrent requests.
     */
    targetConcurrentRequests?: number;
    /**
     * Target requests per second.
     */
    targetRequestCountPerSecond?: number;
  }
  /**
   * A DNS resource record.
   */
  export interface Schema$ResourceRecord {
    /**
     * Relative name of the object affected by this record. Only applicable for
     * CNAME records. Example: &#39;www&#39;.
     */
    name?: string;
    /**
     * Data for this record. Values vary by record type, as defined in RFC 1035
     * (section 5) and RFC 1034 (section 3.6.1).
     */
    rrdata?: string;
    /**
     * Resource record type. Example: AAAA.
     */
    type?: string;
  }
  /**
   * Machine resources for a version.
   */
  export interface Schema$Resources {
    /**
     * Number of CPU cores needed.
     */
    cpu?: number;
    /**
     * Disk size (GB) needed.
     */
    diskGb?: number;
    /**
     * Memory (GB) needed.
     */
    memoryGb?: number;
    /**
     * User specified volumes.
     */
    volumes?: Schema$Volume[];
  }
  /**
   * Executes a script to handle the request that matches the URL pattern.
   */
  export interface Schema$ScriptHandler {
    /**
     * Path to the script from the application root directory.
     */
    scriptPath?: string;
  }
  /**
   * A Service resource is a logical component of an application that can share
   * state and communicate in a secure fashion with other services. For example,
   * an application that handles customer requests might include separate
   * services to handle tasks such as backend data analysis or API requests from
   * mobile devices. Each service has a collection of versions that define a
   * specific set of code used to implement the functionality of that service.
   */
  export interface Schema$Service {
    /**
     * Relative name of the service within the application. Example:
     * default.@OutputOnly
     */
    id?: string;
    /**
     * Full path to the Service resource in the API. Example:
     * apps/myapp/services/default.@OutputOnly
     */
    name?: string;
    /**
     * Mapping that defines fractional HTTP traffic diversion to different
     * versions within the service.
     */
    split?: Schema$TrafficSplit;
  }
  /**
   * SSL configuration for a DomainMapping resource.
   */
  export interface Schema$SslSettings {
    /**
     * ID of the AuthorizedCertificate resource configuring SSL for the
     * application. Clearing this field will remove SSL support.By default, a
     * managed certificate is automatically created for every domain mapping. To
     * omit SSL support or to configure SSL manually, specify
     * SslManagementType.MANUAL on a CREATE or UPDATE request. You must be
     * authorized to administer the AuthorizedCertificate resource to manually
     * map it to a DomainMapping resource. Example: 12345.
     */
    certificateId?: string;
    /**
     * ID of the managed AuthorizedCertificate resource currently being
     * provisioned, if applicable. Until the new managed certificate has been
     * successfully provisioned, the previous SSL state will be preserved. Once
     * the provisioning process completes, the certificate_id field will reflect
     * the new managed certificate and this field will be left empty. To remove
     * SSL support while there is still a pending managed certificate, clear the
     * certificate_id field with an UpdateDomainMappingRequest.@OutputOnly
     */
    pendingManagedCertificateId?: string;
    /**
     * SSL management type for this domain. If AUTOMATIC, a managed certificate
     * is automatically provisioned. If MANUAL, certificate_id must be manually
     * specified in order to configure SSL for this domain.
     */
    sslManagementType?: string;
  }
  /**
   * Scheduler settings for standard environment.
   */
  export interface Schema$StandardSchedulerSettings {
    /**
     * Maximum number of instances to run for this version. Set to zero to
     * disable max_instances configuration.
     */
    maxInstances?: number;
    /**
     * Minimum number of instances to run for this version. Set to zero to
     * disable min_instances configuration.
     */
    minInstances?: number;
    /**
     * Target CPU utilization ratio to maintain when scaling.
     */
    targetCpuUtilization?: number;
    /**
     * Target throughput utilization ratio to maintain when scaling
     */
    targetThroughputUtilization?: number;
  }
  /**
   * Files served directly to the user for a given URL, such as images, CSS
   * stylesheets, or JavaScript source files. Static file handlers describe
   * which files in the application directory are static files, and which URLs
   * serve them.
   */
  export interface Schema$StaticFilesHandler {
    /**
     * Whether files should also be uploaded as code data. By default, files
     * declared in static file handlers are uploaded as static data and are only
     * served to end users; they cannot be read by the application. If enabled,
     * uploads are charged against both your code and static data storage
     * resource quotas.
     */
    applicationReadable?: boolean;
    /**
     * Time a static file served by this handler should be cached by web proxies
     * and browsers.
     */
    expiration?: string;
    /**
     * HTTP headers to use for all responses from these URLs.
     */
    httpHeaders?: any;
    /**
     * MIME type used to serve all files served by this handler.Defaults to
     * file-specific MIME types, which are derived from each file&#39;s filename
     * extension.
     */
    mimeType?: string;
    /**
     * Path to the static files matched by the URL pattern, from the application
     * root directory. The path can refer to text matched in groupings in the
     * URL pattern.
     */
    path?: string;
    /**
     * Whether this handler should match the request if the file referenced by
     * the handler does not exist.
     */
    requireMatchingFile?: boolean;
    /**
     * Regular expression that matches the file paths for all files that should
     * be referenced by this handler.
     */
    uploadPathRegex?: string;
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
   * Traffic routing configuration for versions within a single service. Traffic
   * splits define how traffic directed to the service is assigned to versions.
   */
  export interface Schema$TrafficSplit {
    /**
     * Mapping from version IDs within the service to fractional (0.000, 1]
     * allocations of traffic for that version. Each version can be specified
     * only once, but some versions in the service may not have any traffic
     * allocation. Services that have traffic allocated cannot be deleted until
     * either the service is deleted or their traffic allocation is removed.
     * Allocations must sum to 1. Up to two decimal place precision is supported
     * for IP-based splits and up to three decimal places is supported for
     * cookie-based splits.
     */
    allocations?: any;
    /**
     * Mechanism used to determine which version a request is sent to. The
     * traffic selection algorithm will be stable for either type until
     * allocations are changed.
     */
    shardBy?: string;
  }
  /**
   * Rules to match an HTTP request and dispatch that request to a service.
   */
  export interface Schema$UrlDispatchRule {
    /**
     * Domain name to match against. The wildcard &quot;*&quot; is supported if
     * specified before a period: &quot;*.&quot;.Defaults to matching all
     * domains: &quot;*&quot;.
     */
    domain?: string;
    /**
     * Pathname within the host. Must start with a &quot;/&quot;. A single
     * &quot;*&quot; can be included at the end of the path.The sum of the
     * lengths of the domain and path may not exceed 100 characters.
     */
    path?: string;
    /**
     * Resource ID of a service in this application that should serve the
     * matched request. The service must already exist. Example: default.
     */
    service?: string;
  }
  /**
   * URL pattern and description of how the URL should be handled. App Engine
   * can handle URLs by executing application code or by serving static files
   * uploaded with the version, such as images, CSS, or JavaScript.
   */
  export interface Schema$UrlMap {
    /**
     * Uses API Endpoints to handle requests.
     */
    apiEndpoint?: Schema$ApiEndpointHandler;
    /**
     * Action to take when users access resources that require authentication.
     * Defaults to redirect.
     */
    authFailAction?: string;
    /**
     * Level of login required to access this resource.
     */
    login?: string;
    /**
     * 30x code to use when performing redirects for the secure field. Defaults
     * to 302.
     */
    redirectHttpResponseCode?: string;
    /**
     * Executes a script to handle the request that matches this URL pattern.
     */
    script?: Schema$ScriptHandler;
    /**
     * Security (HTTPS) enforcement for this URL.
     */
    securityLevel?: string;
    /**
     * Returns the contents of a file, such as an image, as the response.
     */
    staticFiles?: Schema$StaticFilesHandler;
    /**
     * URL prefix. Uses regular expression syntax, which means regexp special
     * characters must be escaped, but should not contain groupings. All URLs
     * that begin with this prefix are handled by this handler, using the
     * portion of the URL after the prefix as part of the file path.
     */
    urlRegex?: string;
  }
  /**
   * A Version resource is a specific set of source code and configuration files
   * that are deployed into a service.
   */
  export interface Schema$Version {
    /**
     * Serving configuration for Google Cloud Endpoints
     * (https://cloud.google.com/appengine/docs/python/endpoints/).Only returned
     * in GET requests if view=FULL is set.
     */
    apiConfig?: Schema$ApiConfigHandler;
    /**
     * Automatic scaling is based on request rate, response latencies, and other
     * application metrics.
     */
    automaticScaling?: Schema$AutomaticScaling;
    /**
     * A service with basic scaling will create an instance when the application
     * receives a request. The instance will be turned down when the app becomes
     * idle. Basic scaling is ideal for work that is intermittent or driven by
     * user activity.
     */
    basicScaling?: Schema$BasicScaling;
    /**
     * Metadata settings that are supplied to this version to enable beta
     * runtime features.
     */
    betaSettings?: any;
    /**
     * Email address of the user who created this version.@OutputOnly
     */
    createdBy?: string;
    /**
     * Time that this version was created.@OutputOnly
     */
    createTime?: string;
    /**
     * Duration that static files should be cached by web proxies and browsers.
     * Only applicable if the corresponding StaticFilesHandler
     * (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#staticfileshandler)
     * does not specify its own expiration time.Only returned in GET requests if
     * view=FULL is set.
     */
    defaultExpiration?: string;
    /**
     * Code and application artifacts that make up this version.Only returned in
     * GET requests if view=FULL is set.
     */
    deployment?: Schema$Deployment;
    /**
     * Total size in bytes of all the files that are included in this version
     * and currently hosted on the App Engine disk.@OutputOnly
     */
    diskUsageBytes?: string;
    /**
     * Cloud Endpoints configuration.If endpoints_api_service is set, the Cloud
     * Endpoints Extensible Service Proxy will be provided to serve the API
     * implemented by the app.
     */
    endpointsApiService?: Schema$EndpointsApiService;
    /**
     * App Engine execution environment for this version.Defaults to standard.
     */
    env?: string;
    /**
     * Environment variables available to the application.Only returned in GET
     * requests if view=FULL is set.
     */
    envVariables?: any;
    /**
     * Custom static error pages. Limited to 10KB per page.Only returned in GET
     * requests if view=FULL is set.
     */
    errorHandlers?: Schema$ErrorHandler[];
    /**
     * An ordered list of URL-matching patterns that should be applied to
     * incoming requests. The first matching URL handles the request and other
     * request handlers are not attempted.Only returned in GET requests if
     * view=FULL is set.
     */
    handlers?: Schema$UrlMap[];
    /**
     * Configures health checking for instances. Unhealthy instances are stopped
     * and replaced with new instances. Only applicable in the App Engine
     * flexible environment.Only returned in GET requests if view=FULL is set.
     */
    healthCheck?: Schema$HealthCheck;
    /**
     * Relative name of the version within the service. Example: v1. Version
     * names can contain only lowercase letters, numbers, or hyphens. Reserved
     * names: &quot;default&quot;, &quot;latest&quot;, and any name with the
     * prefix &quot;ah-&quot;.
     */
    id?: string;
    /**
     * Before an application can receive email or XMPP messages, the application
     * must be configured to enable the service.
     */
    inboundServices?: string[];
    /**
     * Instance class that is used to run this version. Valid values are:
     * AutomaticScaling: F1, F2, F4, F4_1G ManualScaling or BasicScaling: B1,
     * B2, B4, B8, B4_1GDefaults to F1 for AutomaticScaling and B1 for
     * ManualScaling or BasicScaling.
     */
    instanceClass?: string;
    /**
     * Configuration for third-party Python runtime libraries that are required
     * by the application.Only returned in GET requests if view=FULL is set.
     */
    libraries?: Schema$Library[];
    /**
     * Configures liveness health checking for instances. Unhealthy instances
     * are stopped and replaced with new instancesOnly returned in GET requests
     * if view=FULL is set.
     */
    livenessCheck?: Schema$LivenessCheck;
    /**
     * A service with manual scaling runs continuously, allowing you to perform
     * complex initialization and rely on the state of its memory over time.
     */
    manualScaling?: Schema$ManualScaling;
    /**
     * Full path to the Version resource in the API. Example:
     * apps/myapp/services/default/versions/v1.@OutputOnly
     */
    name?: string;
    /**
     * Extra network settings. Only applicable in the App Engine flexible
     * environment.
     */
    network?: Schema$Network;
    /**
     * Files that match this pattern will not be built into this version. Only
     * applicable for Go runtimes.Only returned in GET requests if view=FULL is
     * set.
     */
    nobuildFilesRegex?: string;
    /**
     * Configures readiness health checking for instances. Unhealthy instances
     * are not put into the backend traffic rotation.Only returned in GET
     * requests if view=FULL is set.
     */
    readinessCheck?: Schema$ReadinessCheck;
    /**
     * Machine resources for this version. Only applicable in the App Engine
     * flexible environment.
     */
    resources?: Schema$Resources;
    /**
     * Desired runtime. Example: python27.
     */
    runtime?: string;
    /**
     * The version of the API in the given runtime environment. Please see the
     * app.yaml reference for valid values at
     * https://cloud.google.com/appengine/docs/standard/&lt;language&gt;/config/appref
     */
    runtimeApiVersion?: string;
    /**
     * The channel of the runtime to use. Only available for some runtimes.
     * Defaults to the default channel.
     */
    runtimeChannel?: string;
    /**
     * Current serving status of this version. Only the versions with a SERVING
     * status create instances and can be billed.SERVING_STATUS_UNSPECIFIED is
     * an invalid value. Defaults to SERVING.
     */
    servingStatus?: string;
    /**
     * Whether multiple requests can be dispatched to this version at once.
     */
    threadsafe?: boolean;
    /**
     * Serving URL for this version. Example:
     * &quot;https://myversion-dot-myservice-dot-myapp.appspot.com&quot;@OutputOnly
     */
    versionUrl?: string;
    /**
     * Whether to deploy this version in a container on a virtual machine.
     */
    vm?: boolean;
    /**
     * The Google Compute Engine zones that are supported by this version in the
     * App Engine flexible environment.
     */
    zones?: string[];
  }
  /**
   * Volumes mounted within the app container. Only applicable in the App Engine
   * flexible environment.
   */
  export interface Schema$Volume {
    /**
     * Unique name for the volume.
     */
    name?: string;
    /**
     * Volume size in gigabytes.
     */
    sizeGb?: number;
    /**
     * Underlying volume type, e.g. &#39;tmpfs&#39;.
     */
    volumeType?: string;
  }
  /**
   * The zip file information for a zip deployment.
   */
  export interface Schema$ZipInfo {
    /**
     * An estimate of the number of files in a zip for a zip deployment. If set,
     * must be greater than or equal to the actual number of files. Used for
     * optimizing performance; if not provided, deployment may be slow.
     */
    filesCount?: number;
    /**
     * URL of the zip file to deploy from. Must be a URL to a resource in Google
     * Cloud Storage in the form
     * &#39;http(s)://storage.googleapis.com/&lt;bucket&gt;/&lt;object&gt;&#39;.
     */
    sourceUrl?: string;
  }


  export class Resource$Apps {
    root: Appengine;
    authorizedCertificates: Resource$Apps$Authorizedcertificates;
    authorizedDomains: Resource$Apps$Authorizeddomains;
    domainMappings: Resource$Apps$Domainmappings;
    firewall: Resource$Apps$Firewall;
    locations: Resource$Apps$Locations;
    operations: Resource$Apps$Operations;
    services: Resource$Apps$Services;
    constructor(root: Appengine) {
      this.root = root;
      this.getRoot.bind(this);
      this.authorizedCertificates =
          new Resource$Apps$Authorizedcertificates(root);
      this.authorizedDomains = new Resource$Apps$Authorizeddomains(root);
      this.domainMappings = new Resource$Apps$Domainmappings(root);
      this.firewall = new Resource$Apps$Firewall(root);
      this.locations = new Resource$Apps$Locations(root);
      this.operations = new Resource$Apps$Operations(root);
      this.services = new Resource$Apps$Services(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * appengine.apps.create
     * @desc Creates an App Engine application for a Google Cloud Platform
     * project. Required fields: id - The ID of the target Cloud Platform
     * project. location - The region
     * (https://cloud.google.com/appengine/docs/locations) where you want the
     * App Engine application located.For more information about App Engine
     * applications, see Managing Projects, Applications, and Billing
     * (https://cloud.google.com/appengine/docs/standard/python/console/).
     * @alias appengine.apps.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().Application} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(params?: Params$Resource$Apps$Create, options?: MethodOptions):
        AxiosPromise<Schema$Operation>;
    create(
        params: Params$Resource$Apps$Create,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    create(
        params: Params$Resource$Apps$Create,
        callback: BodyResponseCallback<Schema$Operation>): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
        paramsOrCallback?: Params$Resource$Apps$Create|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as Params$Resource$Apps$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/apps').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * appengine.apps.get
     * @desc Gets information about an application.
     * @alias appengine.apps.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `name`. Name of the Application resource to get. Example: apps/myapp.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Apps$Get,
        options?: MethodOptions): AxiosPromise<Schema$Application>;
    get(params: Params$Resource$Apps$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Application>,
        callback: BodyResponseCallback<Schema$Application>): void;
    get(params: Params$Resource$Apps$Get,
        callback: BodyResponseCallback<Schema$Application>): void;
    get(callback: BodyResponseCallback<Schema$Application>): void;
    get(paramsOrCallback?: Params$Resource$Apps$Get|
        BodyResponseCallback<Schema$Application>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Application>,
        callback?: BodyResponseCallback<Schema$Application>):
        void|AxiosPromise<Schema$Application> {
      let params = (paramsOrCallback || {}) as Params$Resource$Apps$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl + '/v1/apps/{appsId}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['appsId'],
        pathParams: ['appsId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Application>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Application>(parameters);
      }
    }


    /**
     * appengine.apps.patch
     * @desc Updates the specified Application resource. You can update the
     * following fields: auth_domain - Google authentication domain for
     * controlling user access to the application. default_cookie_expiration -
     * Cookie expiration policy for the application.
     * @alias appengine.apps.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `name`. Name of the Application resource to update. Example: apps/myapp.
     * @param {string=} params.updateMask Standard field mask for the set of fields to be updated.
     * @param {().Application} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(params?: Params$Resource$Apps$Patch, options?: MethodOptions):
        AxiosPromise<Schema$Operation>;
    patch(
        params: Params$Resource$Apps$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
        params: Params$Resource$Apps$Patch,
        callback: BodyResponseCallback<Schema$Operation>): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
        paramsOrCallback?: Params$Resource$Apps$Patch|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as Params$Resource$Apps$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl + '/v1/apps/{appsId}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['appsId'],
        pathParams: ['appsId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * appengine.apps.repair
     * @desc Recreates the required App Engine features for the specified App
     * Engine application, for example a Cloud Storage bucket or App Engine
     * service account. Use this method if you receive an error message about a
     * missing feature, for example, Error retrieving the App Engine service
     * account.
     * @alias appengine.apps.repair
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `name`. Name of the application to repair. Example: apps/myapp
     * @param {().RepairApplicationRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    repair(params?: Params$Resource$Apps$Repair, options?: MethodOptions):
        AxiosPromise<Schema$Operation>;
    repair(
        params: Params$Resource$Apps$Repair,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    repair(
        params: Params$Resource$Apps$Repair,
        callback: BodyResponseCallback<Schema$Operation>): void;
    repair(callback: BodyResponseCallback<Schema$Operation>): void;
    repair(
        paramsOrCallback?: Params$Resource$Apps$Repair|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as Params$Resource$Apps$Repair;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Repair;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/apps/{appsId}:repair')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['appsId'],
        pathParams: ['appsId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Apps$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$Application;
  }
  export interface Params$Resource$Apps$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `name`. Name of the Application resource to get. Example:
     * apps/myapp.
     */
    appsId?: string;
  }
  export interface Params$Resource$Apps$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `name`. Name of the Application resource to update. Example:
     * apps/myapp.
     */
    appsId?: string;
    /**
     * Standard field mask for the set of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Application;
  }
  export interface Params$Resource$Apps$Repair {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `name`. Name of the application to repair. Example: apps/myapp
     */
    appsId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RepairApplicationRequest;
  }

  export class Resource$Apps$Authorizedcertificates {
    root: Appengine;
    constructor(root: Appengine) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * appengine.apps.authorizedCertificates.create
     * @desc Uploads the specified SSL certificate.
     * @alias appengine.apps.authorizedCertificates.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
     * @param {().AuthorizedCertificate} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Apps$Authorizedcertificates$Create,
        options?: MethodOptions): AxiosPromise<Schema$AuthorizedCertificate>;
    create(
        params: Params$Resource$Apps$Authorizedcertificates$Create,
        options: MethodOptions|
        BodyResponseCallback<Schema$AuthorizedCertificate>,
        callback: BodyResponseCallback<Schema$AuthorizedCertificate>): void;
    create(
        params: Params$Resource$Apps$Authorizedcertificates$Create,
        callback: BodyResponseCallback<Schema$AuthorizedCertificate>): void;
    create(callback: BodyResponseCallback<Schema$AuthorizedCertificate>): void;
    create(
        paramsOrCallback?: Params$Resource$Apps$Authorizedcertificates$Create|
        BodyResponseCallback<Schema$AuthorizedCertificate>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$AuthorizedCertificate>,
        callback?: BodyResponseCallback<Schema$AuthorizedCertificate>):
        void|AxiosPromise<Schema$AuthorizedCertificate> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Apps$Authorizedcertificates$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Authorizedcertificates$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/apps/{appsId}/authorizedCertificates')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['appsId'],
        pathParams: ['appsId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$AuthorizedCertificate>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AuthorizedCertificate>(parameters);
      }
    }


    /**
     * appengine.apps.authorizedCertificates.delete
     * @desc Deletes the specified SSL certificate.
     * @alias appengine.apps.authorizedCertificates.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `name`. Name of the resource to delete. Example: apps/myapp/authorizedCertificates/12345.
     * @param {string} params.authorizedCertificatesId Part of `name`. See documentation of `appsId`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Apps$Authorizedcertificates$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Apps$Authorizedcertificates$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Apps$Authorizedcertificates$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Apps$Authorizedcertificates$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Apps$Authorizedcertificates$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Authorizedcertificates$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v1/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['appsId', 'authorizedCertificatesId'],
        pathParams: ['appsId', 'authorizedCertificatesId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * appengine.apps.authorizedCertificates.get
     * @desc Gets the specified SSL certificate.
     * @alias appengine.apps.authorizedCertificates.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/authorizedCertificates/12345.
     * @param {string} params.authorizedCertificatesId Part of `name`. See documentation of `appsId`.
     * @param {string=} params.view Controls the set of fields returned in the GET response.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Apps$Authorizedcertificates$Get,
        options?: MethodOptions): AxiosPromise<Schema$AuthorizedCertificate>;
    get(params: Params$Resource$Apps$Authorizedcertificates$Get,
        options: MethodOptions|
        BodyResponseCallback<Schema$AuthorizedCertificate>,
        callback: BodyResponseCallback<Schema$AuthorizedCertificate>): void;
    get(params: Params$Resource$Apps$Authorizedcertificates$Get,
        callback: BodyResponseCallback<Schema$AuthorizedCertificate>): void;
    get(callback: BodyResponseCallback<Schema$AuthorizedCertificate>): void;
    get(paramsOrCallback?: Params$Resource$Apps$Authorizedcertificates$Get|
        BodyResponseCallback<Schema$AuthorizedCertificate>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$AuthorizedCertificate>,
        callback?: BodyResponseCallback<Schema$AuthorizedCertificate>):
        void|AxiosPromise<Schema$AuthorizedCertificate> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Apps$Authorizedcertificates$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Authorizedcertificates$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v1/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['appsId', 'authorizedCertificatesId'],
        pathParams: ['appsId', 'authorizedCertificatesId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$AuthorizedCertificate>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AuthorizedCertificate>(parameters);
      }
    }


    /**
     * appengine.apps.authorizedCertificates.list
     * @desc Lists all SSL certificates the user is authorized to administer.
     * @alias appengine.apps.authorizedCertificates.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
     * @param {integer=} params.pageSize Maximum results to return per page.
     * @param {string=} params.pageToken Continuation token for fetching the next page of results.
     * @param {string=} params.view Controls the set of fields returned in the LIST response.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Apps$Authorizedcertificates$List,
        options?: MethodOptions):
        AxiosPromise<Schema$ListAuthorizedCertificatesResponse>;
    list(
        params: Params$Resource$Apps$Authorizedcertificates$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListAuthorizedCertificatesResponse>,
        callback:
            BodyResponseCallback<Schema$ListAuthorizedCertificatesResponse>):
        void;
    list(
        params: Params$Resource$Apps$Authorizedcertificates$List,
        callback:
            BodyResponseCallback<Schema$ListAuthorizedCertificatesResponse>):
        void;
    list(callback:
             BodyResponseCallback<Schema$ListAuthorizedCertificatesResponse>):
        void;
    list(
        paramsOrCallback?: Params$Resource$Apps$Authorizedcertificates$List|
        BodyResponseCallback<Schema$ListAuthorizedCertificatesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListAuthorizedCertificatesResponse>,
        callback?:
            BodyResponseCallback<Schema$ListAuthorizedCertificatesResponse>):
        void|AxiosPromise<Schema$ListAuthorizedCertificatesResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Apps$Authorizedcertificates$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Authorizedcertificates$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/apps/{appsId}/authorizedCertificates')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['appsId'],
        pathParams: ['appsId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListAuthorizedCertificatesResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$ListAuthorizedCertificatesResponse>(
            parameters);
      }
    }


    /**
     * appengine.apps.authorizedCertificates.patch
     * @desc Updates the specified SSL certificate. To renew a certificate and
     * maintain its existing domain mappings, update certificate_data with a new
     * certificate. The new certificate must be applicable to the same domains
     * as the original certificate. The certificate display_name may also be
     * updated.
     * @alias appengine.apps.authorizedCertificates.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `name`. Name of the resource to update. Example: apps/myapp/authorizedCertificates/12345.
     * @param {string} params.authorizedCertificatesId Part of `name`. See documentation of `appsId`.
     * @param {string=} params.updateMask Standard field mask for the set of fields to be updated. Updates are only supported on the certificate_raw_data and display_name fields.
     * @param {().AuthorizedCertificate} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?: Params$Resource$Apps$Authorizedcertificates$Patch,
        options?: MethodOptions): AxiosPromise<Schema$AuthorizedCertificate>;
    patch(
        params: Params$Resource$Apps$Authorizedcertificates$Patch,
        options: MethodOptions|
        BodyResponseCallback<Schema$AuthorizedCertificate>,
        callback: BodyResponseCallback<Schema$AuthorizedCertificate>): void;
    patch(
        params: Params$Resource$Apps$Authorizedcertificates$Patch,
        callback: BodyResponseCallback<Schema$AuthorizedCertificate>): void;
    patch(callback: BodyResponseCallback<Schema$AuthorizedCertificate>): void;
    patch(
        paramsOrCallback?: Params$Resource$Apps$Authorizedcertificates$Patch|
        BodyResponseCallback<Schema$AuthorizedCertificate>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$AuthorizedCertificate>,
        callback?: BodyResponseCallback<Schema$AuthorizedCertificate>):
        void|AxiosPromise<Schema$AuthorizedCertificate> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Apps$Authorizedcertificates$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Authorizedcertificates$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v1/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['appsId', 'authorizedCertificatesId'],
        pathParams: ['appsId', 'authorizedCertificatesId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$AuthorizedCertificate>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AuthorizedCertificate>(parameters);
      }
    }
  }

  export interface Params$Resource$Apps$Authorizedcertificates$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `parent`. Name of the parent Application resource. Example:
     * apps/myapp.
     */
    appsId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AuthorizedCertificate;
  }
  export interface Params$Resource$Apps$Authorizedcertificates$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `name`. Name of the resource to delete. Example:
     * apps/myapp/authorizedCertificates/12345.
     */
    appsId?: string;
    /**
     * Part of `name`. See documentation of `appsId`.
     */
    authorizedCertificatesId?: string;
  }
  export interface Params$Resource$Apps$Authorizedcertificates$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `name`. Name of the resource requested. Example:
     * apps/myapp/authorizedCertificates/12345.
     */
    appsId?: string;
    /**
     * Part of `name`. See documentation of `appsId`.
     */
    authorizedCertificatesId?: string;
    /**
     * Controls the set of fields returned in the GET response.
     */
    view?: string;
  }
  export interface Params$Resource$Apps$Authorizedcertificates$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `parent`. Name of the parent Application resource. Example:
     * apps/myapp.
     */
    appsId?: string;
    /**
     * Maximum results to return per page.
     */
    pageSize?: number;
    /**
     * Continuation token for fetching the next page of results.
     */
    pageToken?: string;
    /**
     * Controls the set of fields returned in the LIST response.
     */
    view?: string;
  }
  export interface Params$Resource$Apps$Authorizedcertificates$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `name`. Name of the resource to update. Example:
     * apps/myapp/authorizedCertificates/12345.
     */
    appsId?: string;
    /**
     * Part of `name`. See documentation of `appsId`.
     */
    authorizedCertificatesId?: string;
    /**
     * Standard field mask for the set of fields to be updated. Updates are only
     * supported on the certificate_raw_data and display_name fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AuthorizedCertificate;
  }


  export class Resource$Apps$Authorizeddomains {
    root: Appengine;
    constructor(root: Appengine) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * appengine.apps.authorizedDomains.list
     * @desc Lists all domains the user is authorized to administer.
     * @alias appengine.apps.authorizedDomains.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
     * @param {integer=} params.pageSize Maximum results to return per page.
     * @param {string=} params.pageToken Continuation token for fetching the next page of results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Apps$Authorizeddomains$List,
        options?: MethodOptions):
        AxiosPromise<Schema$ListAuthorizedDomainsResponse>;
    list(
        params: Params$Resource$Apps$Authorizeddomains$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>,
        callback: BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>):
        void;
    list(
        params: Params$Resource$Apps$Authorizeddomains$List,
        callback: BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>):
        void;
    list(callback: BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>):
        void;
    list(
        paramsOrCallback?: Params$Resource$Apps$Authorizeddomains$List|
        BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>,
        callback?: BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>):
        void|AxiosPromise<Schema$ListAuthorizedDomainsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Apps$Authorizeddomains$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Authorizeddomains$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/apps/{appsId}/authorizedDomains')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['appsId'],
        pathParams: ['appsId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListAuthorizedDomainsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$ListAuthorizedDomainsResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Apps$Authorizeddomains$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `parent`. Name of the parent Application resource. Example:
     * apps/myapp.
     */
    appsId?: string;
    /**
     * Maximum results to return per page.
     */
    pageSize?: number;
    /**
     * Continuation token for fetching the next page of results.
     */
    pageToken?: string;
  }


  export class Resource$Apps$Domainmappings {
    root: Appengine;
    constructor(root: Appengine) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * appengine.apps.domainMappings.create
     * @desc Maps a domain to an application. A user must be authorized to
     * administer a domain in order to map it to an application. For a list of
     * available authorized domains, see
     * AuthorizedDomains.ListAuthorizedDomains.
     * @alias appengine.apps.domainMappings.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
     * @param {string=} params.overrideStrategy Whether the domain creation should override any existing mappings for this domain. By default, overrides are rejected.
     * @param {().DomainMapping} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Apps$Domainmappings$Create,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    create(
        params: Params$Resource$Apps$Domainmappings$Create,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    create(
        params: Params$Resource$Apps$Domainmappings$Create,
        callback: BodyResponseCallback<Schema$Operation>): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
        paramsOrCallback?: Params$Resource$Apps$Domainmappings$Create|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Apps$Domainmappings$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Domainmappings$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/apps/{appsId}/domainMappings')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['appsId'],
        pathParams: ['appsId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * appengine.apps.domainMappings.delete
     * @desc Deletes the specified domain mapping. A user must be authorized to
     * administer the associated domain in order to delete a DomainMapping
     * resource.
     * @alias appengine.apps.domainMappings.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `name`. Name of the resource to delete. Example: apps/myapp/domainMappings/example.com.
     * @param {string} params.domainMappingsId Part of `name`. See documentation of `appsId`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Apps$Domainmappings$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    delete(
        params: Params$Resource$Apps$Domainmappings$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
        params: Params$Resource$Apps$Domainmappings$Delete,
        callback: BodyResponseCallback<Schema$Operation>): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
        paramsOrCallback?: Params$Resource$Apps$Domainmappings$Delete|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Apps$Domainmappings$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Domainmappings$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/v1/apps/{appsId}/domainMappings/{domainMappingsId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['appsId', 'domainMappingsId'],
        pathParams: ['appsId', 'domainMappingsId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * appengine.apps.domainMappings.get
     * @desc Gets the specified domain mapping.
     * @alias appengine.apps.domainMappings.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/domainMappings/example.com.
     * @param {string} params.domainMappingsId Part of `name`. See documentation of `appsId`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Apps$Domainmappings$Get,
        options?: MethodOptions): AxiosPromise<Schema$DomainMapping>;
    get(params: Params$Resource$Apps$Domainmappings$Get,
        options: MethodOptions|BodyResponseCallback<Schema$DomainMapping>,
        callback: BodyResponseCallback<Schema$DomainMapping>): void;
    get(params: Params$Resource$Apps$Domainmappings$Get,
        callback: BodyResponseCallback<Schema$DomainMapping>): void;
    get(callback: BodyResponseCallback<Schema$DomainMapping>): void;
    get(paramsOrCallback?: Params$Resource$Apps$Domainmappings$Get|
        BodyResponseCallback<Schema$DomainMapping>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$DomainMapping>,
        callback?: BodyResponseCallback<Schema$DomainMapping>):
        void|AxiosPromise<Schema$DomainMapping> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Apps$Domainmappings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Domainmappings$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/v1/apps/{appsId}/domainMappings/{domainMappingsId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['appsId', 'domainMappingsId'],
        pathParams: ['appsId', 'domainMappingsId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$DomainMapping>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DomainMapping>(parameters);
      }
    }


    /**
     * appengine.apps.domainMappings.list
     * @desc Lists the domain mappings on an application.
     * @alias appengine.apps.domainMappings.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
     * @param {integer=} params.pageSize Maximum results to return per page.
     * @param {string=} params.pageToken Continuation token for fetching the next page of results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Apps$Domainmappings$List,
        options?: MethodOptions):
        AxiosPromise<Schema$ListDomainMappingsResponse>;
    list(
        params: Params$Resource$Apps$Domainmappings$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListDomainMappingsResponse>,
        callback: BodyResponseCallback<Schema$ListDomainMappingsResponse>):
        void;
    list(
        params: Params$Resource$Apps$Domainmappings$List,
        callback: BodyResponseCallback<Schema$ListDomainMappingsResponse>):
        void;
    list(callback: BodyResponseCallback<Schema$ListDomainMappingsResponse>):
        void;
    list(
        paramsOrCallback?: Params$Resource$Apps$Domainmappings$List|
        BodyResponseCallback<Schema$ListDomainMappingsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListDomainMappingsResponse>,
        callback?: BodyResponseCallback<Schema$ListDomainMappingsResponse>):
        void|AxiosPromise<Schema$ListDomainMappingsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Apps$Domainmappings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Domainmappings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/apps/{appsId}/domainMappings')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['appsId'],
        pathParams: ['appsId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListDomainMappingsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$ListDomainMappingsResponse>(parameters);
      }
    }


    /**
     * appengine.apps.domainMappings.patch
     * @desc Updates the specified domain mapping. To map an SSL certificate to
     * a domain mapping, update certificate_id to point to an
     * AuthorizedCertificate resource. A user must be authorized to administer
     * the associated domain in order to update a DomainMapping resource.
     * @alias appengine.apps.domainMappings.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `name`. Name of the resource to update. Example: apps/myapp/domainMappings/example.com.
     * @param {string} params.domainMappingsId Part of `name`. See documentation of `appsId`.
     * @param {string=} params.updateMask Standard field mask for the set of fields to be updated.
     * @param {().DomainMapping} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?: Params$Resource$Apps$Domainmappings$Patch,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    patch(
        params: Params$Resource$Apps$Domainmappings$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
        params: Params$Resource$Apps$Domainmappings$Patch,
        callback: BodyResponseCallback<Schema$Operation>): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
        paramsOrCallback?: Params$Resource$Apps$Domainmappings$Patch|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Apps$Domainmappings$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Domainmappings$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/v1/apps/{appsId}/domainMappings/{domainMappingsId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['appsId', 'domainMappingsId'],
        pathParams: ['appsId', 'domainMappingsId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Apps$Domainmappings$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `parent`. Name of the parent Application resource. Example:
     * apps/myapp.
     */
    appsId?: string;
    /**
     * Whether the domain creation should override any existing mappings for
     * this domain. By default, overrides are rejected.
     */
    overrideStrategy?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DomainMapping;
  }
  export interface Params$Resource$Apps$Domainmappings$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `name`. Name of the resource to delete. Example:
     * apps/myapp/domainMappings/example.com.
     */
    appsId?: string;
    /**
     * Part of `name`. See documentation of `appsId`.
     */
    domainMappingsId?: string;
  }
  export interface Params$Resource$Apps$Domainmappings$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `name`. Name of the resource requested. Example:
     * apps/myapp/domainMappings/example.com.
     */
    appsId?: string;
    /**
     * Part of `name`. See documentation of `appsId`.
     */
    domainMappingsId?: string;
  }
  export interface Params$Resource$Apps$Domainmappings$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `parent`. Name of the parent Application resource. Example:
     * apps/myapp.
     */
    appsId?: string;
    /**
     * Maximum results to return per page.
     */
    pageSize?: number;
    /**
     * Continuation token for fetching the next page of results.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Apps$Domainmappings$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `name`. Name of the resource to update. Example:
     * apps/myapp/domainMappings/example.com.
     */
    appsId?: string;
    /**
     * Part of `name`. See documentation of `appsId`.
     */
    domainMappingsId?: string;
    /**
     * Standard field mask for the set of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DomainMapping;
  }


  export class Resource$Apps$Firewall {
    root: Appengine;
    ingressRules: Resource$Apps$Firewall$Ingressrules;
    constructor(root: Appengine) {
      this.root = root;
      this.getRoot.bind(this);
      this.ingressRules = new Resource$Apps$Firewall$Ingressrules(root);
    }

    getRoot() {
      return this.root;
    }
  }


  export class Resource$Apps$Firewall$Ingressrules {
    root: Appengine;
    constructor(root: Appengine) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * appengine.apps.firewall.ingressRules.batchUpdate
     * @desc Replaces the entire firewall ruleset in one bulk operation. This
     * overrides and replaces the rules of an existing firewall with the new
     * rules.If the final rule does not match traffic with the '*' wildcard IP
     * range, then an "allow all" rule is explicitly added to the end of the
     * list.
     * @alias appengine.apps.firewall.ingressRules.batchUpdate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `name`. Name of the Firewall collection to set. Example: apps/myapp/firewall/ingressRules.
     * @param {().BatchUpdateIngressRulesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchUpdate(
        params?: Params$Resource$Apps$Firewall$Ingressrules$Batchupdate,
        options?: MethodOptions):
        AxiosPromise<Schema$BatchUpdateIngressRulesResponse>;
    batchUpdate(
        params: Params$Resource$Apps$Firewall$Ingressrules$Batchupdate,
        options: MethodOptions|
        BodyResponseCallback<Schema$BatchUpdateIngressRulesResponse>,
        callback: BodyResponseCallback<Schema$BatchUpdateIngressRulesResponse>):
        void;
    batchUpdate(
        params: Params$Resource$Apps$Firewall$Ingressrules$Batchupdate,
        callback: BodyResponseCallback<Schema$BatchUpdateIngressRulesResponse>):
        void;
    batchUpdate(
        callback: BodyResponseCallback<Schema$BatchUpdateIngressRulesResponse>):
        void;
    batchUpdate(
        paramsOrCallback?:
            Params$Resource$Apps$Firewall$Ingressrules$Batchupdate|
        BodyResponseCallback<Schema$BatchUpdateIngressRulesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$BatchUpdateIngressRulesResponse>,
        callback?:
            BodyResponseCallback<Schema$BatchUpdateIngressRulesResponse>):
        void|AxiosPromise<Schema$BatchUpdateIngressRulesResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Apps$Firewall$Ingressrules$Batchupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Firewall$Ingressrules$Batchupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/v1/apps/{appsId}/firewall/ingressRules:batchUpdate')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['appsId'],
        pathParams: ['appsId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$BatchUpdateIngressRulesResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$BatchUpdateIngressRulesResponse>(
            parameters);
      }
    }


    /**
     * appengine.apps.firewall.ingressRules.create
     * @desc Creates a firewall rule for the application.
     * @alias appengine.apps.firewall.ingressRules.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `parent`. Name of the parent Firewall collection in which to create a new rule. Example: apps/myapp/firewall/ingressRules.
     * @param {().FirewallRule} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Apps$Firewall$Ingressrules$Create,
        options?: MethodOptions): AxiosPromise<Schema$FirewallRule>;
    create(
        params: Params$Resource$Apps$Firewall$Ingressrules$Create,
        options: MethodOptions|BodyResponseCallback<Schema$FirewallRule>,
        callback: BodyResponseCallback<Schema$FirewallRule>): void;
    create(
        params: Params$Resource$Apps$Firewall$Ingressrules$Create,
        callback: BodyResponseCallback<Schema$FirewallRule>): void;
    create(callback: BodyResponseCallback<Schema$FirewallRule>): void;
    create(
        paramsOrCallback?: Params$Resource$Apps$Firewall$Ingressrules$Create|
        BodyResponseCallback<Schema$FirewallRule>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$FirewallRule>,
        callback?: BodyResponseCallback<Schema$FirewallRule>):
        void|AxiosPromise<Schema$FirewallRule> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Apps$Firewall$Ingressrules$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Firewall$Ingressrules$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/apps/{appsId}/firewall/ingressRules')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['appsId'],
        pathParams: ['appsId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$FirewallRule>(parameters, callback);
      } else {
        return createAPIRequest<Schema$FirewallRule>(parameters);
      }
    }


    /**
     * appengine.apps.firewall.ingressRules.delete
     * @desc Deletes the specified firewall rule.
     * @alias appengine.apps.firewall.ingressRules.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `name`. Name of the Firewall resource to delete. Example: apps/myapp/firewall/ingressRules/100.
     * @param {string} params.ingressRulesId Part of `name`. See documentation of `appsId`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Apps$Firewall$Ingressrules$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Apps$Firewall$Ingressrules$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Apps$Firewall$Ingressrules$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Apps$Firewall$Ingressrules$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Apps$Firewall$Ingressrules$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Firewall$Ingressrules$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/v1/apps/{appsId}/firewall/ingressRules/{ingressRulesId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['appsId', 'ingressRulesId'],
        pathParams: ['appsId', 'ingressRulesId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * appengine.apps.firewall.ingressRules.get
     * @desc Gets the specified firewall rule.
     * @alias appengine.apps.firewall.ingressRules.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `name`. Name of the Firewall resource to retrieve. Example: apps/myapp/firewall/ingressRules/100.
     * @param {string} params.ingressRulesId Part of `name`. See documentation of `appsId`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Apps$Firewall$Ingressrules$Get,
        options?: MethodOptions): AxiosPromise<Schema$FirewallRule>;
    get(params: Params$Resource$Apps$Firewall$Ingressrules$Get,
        options: MethodOptions|BodyResponseCallback<Schema$FirewallRule>,
        callback: BodyResponseCallback<Schema$FirewallRule>): void;
    get(params: Params$Resource$Apps$Firewall$Ingressrules$Get,
        callback: BodyResponseCallback<Schema$FirewallRule>): void;
    get(callback: BodyResponseCallback<Schema$FirewallRule>): void;
    get(paramsOrCallback?: Params$Resource$Apps$Firewall$Ingressrules$Get|
        BodyResponseCallback<Schema$FirewallRule>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$FirewallRule>,
        callback?: BodyResponseCallback<Schema$FirewallRule>):
        void|AxiosPromise<Schema$FirewallRule> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Apps$Firewall$Ingressrules$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Firewall$Ingressrules$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/v1/apps/{appsId}/firewall/ingressRules/{ingressRulesId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['appsId', 'ingressRulesId'],
        pathParams: ['appsId', 'ingressRulesId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$FirewallRule>(parameters, callback);
      } else {
        return createAPIRequest<Schema$FirewallRule>(parameters);
      }
    }


    /**
     * appengine.apps.firewall.ingressRules.list
     * @desc Lists the firewall rules of an application.
     * @alias appengine.apps.firewall.ingressRules.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `parent`. Name of the Firewall collection to retrieve. Example: apps/myapp/firewall/ingressRules.
     * @param {string=} params.matchingAddress A valid IP Address. If set, only rules matching this address will be returned. The first returned rule will be the rule that fires on requests from this IP.
     * @param {integer=} params.pageSize Maximum results to return per page.
     * @param {string=} params.pageToken Continuation token for fetching the next page of results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Apps$Firewall$Ingressrules$List,
        options?: MethodOptions): AxiosPromise<Schema$ListIngressRulesResponse>;
    list(
        params: Params$Resource$Apps$Firewall$Ingressrules$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListIngressRulesResponse>,
        callback: BodyResponseCallback<Schema$ListIngressRulesResponse>): void;
    list(
        params: Params$Resource$Apps$Firewall$Ingressrules$List,
        callback: BodyResponseCallback<Schema$ListIngressRulesResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListIngressRulesResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Apps$Firewall$Ingressrules$List|
        BodyResponseCallback<Schema$ListIngressRulesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListIngressRulesResponse>,
        callback?: BodyResponseCallback<Schema$ListIngressRulesResponse>):
        void|AxiosPromise<Schema$ListIngressRulesResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Apps$Firewall$Ingressrules$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Firewall$Ingressrules$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/apps/{appsId}/firewall/ingressRules')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['appsId'],
        pathParams: ['appsId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListIngressRulesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListIngressRulesResponse>(parameters);
      }
    }


    /**
     * appengine.apps.firewall.ingressRules.patch
     * @desc Updates the specified firewall rule.
     * @alias appengine.apps.firewall.ingressRules.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `name`. Name of the Firewall resource to update. Example: apps/myapp/firewall/ingressRules/100.
     * @param {string} params.ingressRulesId Part of `name`. See documentation of `appsId`.
     * @param {string=} params.updateMask Standard field mask for the set of fields to be updated.
     * @param {().FirewallRule} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?: Params$Resource$Apps$Firewall$Ingressrules$Patch,
        options?: MethodOptions): AxiosPromise<Schema$FirewallRule>;
    patch(
        params: Params$Resource$Apps$Firewall$Ingressrules$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$FirewallRule>,
        callback: BodyResponseCallback<Schema$FirewallRule>): void;
    patch(
        params: Params$Resource$Apps$Firewall$Ingressrules$Patch,
        callback: BodyResponseCallback<Schema$FirewallRule>): void;
    patch(callback: BodyResponseCallback<Schema$FirewallRule>): void;
    patch(
        paramsOrCallback?: Params$Resource$Apps$Firewall$Ingressrules$Patch|
        BodyResponseCallback<Schema$FirewallRule>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$FirewallRule>,
        callback?: BodyResponseCallback<Schema$FirewallRule>):
        void|AxiosPromise<Schema$FirewallRule> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Apps$Firewall$Ingressrules$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Firewall$Ingressrules$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/v1/apps/{appsId}/firewall/ingressRules/{ingressRulesId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['appsId', 'ingressRulesId'],
        pathParams: ['appsId', 'ingressRulesId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$FirewallRule>(parameters, callback);
      } else {
        return createAPIRequest<Schema$FirewallRule>(parameters);
      }
    }
  }

  export interface Params$Resource$Apps$Firewall$Ingressrules$Batchupdate {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `name`. Name of the Firewall collection to set. Example:
     * apps/myapp/firewall/ingressRules.
     */
    appsId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchUpdateIngressRulesRequest;
  }
  export interface Params$Resource$Apps$Firewall$Ingressrules$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `parent`. Name of the parent Firewall collection in which to
     * create a new rule. Example: apps/myapp/firewall/ingressRules.
     */
    appsId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FirewallRule;
  }
  export interface Params$Resource$Apps$Firewall$Ingressrules$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `name`. Name of the Firewall resource to delete. Example:
     * apps/myapp/firewall/ingressRules/100.
     */
    appsId?: string;
    /**
     * Part of `name`. See documentation of `appsId`.
     */
    ingressRulesId?: string;
  }
  export interface Params$Resource$Apps$Firewall$Ingressrules$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `name`. Name of the Firewall resource to retrieve. Example:
     * apps/myapp/firewall/ingressRules/100.
     */
    appsId?: string;
    /**
     * Part of `name`. See documentation of `appsId`.
     */
    ingressRulesId?: string;
  }
  export interface Params$Resource$Apps$Firewall$Ingressrules$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `parent`. Name of the Firewall collection to retrieve. Example:
     * apps/myapp/firewall/ingressRules.
     */
    appsId?: string;
    /**
     * A valid IP Address. If set, only rules matching this address will be
     * returned. The first returned rule will be the rule that fires on requests
     * from this IP.
     */
    matchingAddress?: string;
    /**
     * Maximum results to return per page.
     */
    pageSize?: number;
    /**
     * Continuation token for fetching the next page of results.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Apps$Firewall$Ingressrules$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `name`. Name of the Firewall resource to update. Example:
     * apps/myapp/firewall/ingressRules/100.
     */
    appsId?: string;
    /**
     * Part of `name`. See documentation of `appsId`.
     */
    ingressRulesId?: string;
    /**
     * Standard field mask for the set of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FirewallRule;
  }



  export class Resource$Apps$Locations {
    root: Appengine;
    constructor(root: Appengine) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * appengine.apps.locations.get
     * @desc Gets information about a location.
     * @alias appengine.apps.locations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `name`. Resource name for the location.
     * @param {string} params.locationsId Part of `name`. See documentation of `appsId`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Apps$Locations$Get,
        options?: MethodOptions): AxiosPromise<Schema$Location>;
    get(params: Params$Resource$Apps$Locations$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Location>,
        callback: BodyResponseCallback<Schema$Location>): void;
    get(params: Params$Resource$Apps$Locations$Get,
        callback: BodyResponseCallback<Schema$Location>): void;
    get(callback: BodyResponseCallback<Schema$Location>): void;
    get(paramsOrCallback?: Params$Resource$Apps$Locations$Get|
        BodyResponseCallback<Schema$Location>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Location>,
        callback?: BodyResponseCallback<Schema$Location>):
        void|AxiosPromise<Schema$Location> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Apps$Locations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Locations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/apps/{appsId}/locations/{locationsId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['appsId', 'locationsId'],
        pathParams: ['appsId', 'locationsId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Location>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Location>(parameters);
      }
    }


    /**
     * appengine.apps.locations.list
     * @desc Lists information about the supported locations for this service.
     * @alias appengine.apps.locations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `name`. The resource that owns the locations collection, if applicable.
     * @param {string=} params.filter The standard list filter.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Apps$Locations$List, options?: MethodOptions):
        AxiosPromise<Schema$ListLocationsResponse>;
    list(
        params: Params$Resource$Apps$Locations$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListLocationsResponse>,
        callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
        params: Params$Resource$Apps$Locations$List,
        callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Apps$Locations$List|
        BodyResponseCallback<Schema$ListLocationsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListLocationsResponse>,
        callback?: BodyResponseCallback<Schema$ListLocationsResponse>):
        void|AxiosPromise<Schema$ListLocationsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Apps$Locations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Locations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/apps/{appsId}/locations')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['appsId'],
        pathParams: ['appsId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListLocationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Apps$Locations$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `name`. Resource name for the location.
     */
    appsId?: string;
    /**
     * Part of `name`. See documentation of `appsId`.
     */
    locationsId?: string;
  }
  export interface Params$Resource$Apps$Locations$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `name`. The resource that owns the locations collection, if
     * applicable.
     */
    appsId?: string;
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }


  export class Resource$Apps$Operations {
    root: Appengine;
    constructor(root: Appengine) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * appengine.apps.operations.get
     * @desc Gets the latest state of a long-running operation. Clients can use
     * this method to poll the operation result at intervals as recommended by
     * the API service.
     * @alias appengine.apps.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `name`. The name of the operation resource.
     * @param {string} params.operationsId Part of `name`. See documentation of `appsId`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Apps$Operations$Get,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    get(params: Params$Resource$Apps$Operations$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    get(params: Params$Resource$Apps$Operations$Get,
        callback: BodyResponseCallback<Schema$Operation>): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(paramsOrCallback?: Params$Resource$Apps$Operations$Get|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Apps$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/apps/{appsId}/operations/{operationsId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['appsId', 'operationsId'],
        pathParams: ['appsId', 'operationsId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * appengine.apps.operations.list
     * @desc Lists operations that match the specified filter in the request. If
     * the server doesn't support this method, it returns UNIMPLEMENTED.NOTE:
     * the name binding allows API services to override the binding to use
     * different resource name schemes, such as users/x/operations. To override
     * the binding, API services can add a binding such as
     * "/v1/{name=users/x}/operations" to their service configuration. For
     * backwards compatibility, the default name includes the operations
     * collection id, however overriding users must ensure the name binding is
     * the parent resource, without the operations collection id.
     * @alias appengine.apps.operations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `name`. The name of the operation's parent resource.
     * @param {string=} params.filter The standard list filter.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Apps$Operations$List,
        options?: MethodOptions): AxiosPromise<Schema$ListOperationsResponse>;
    list(
        params: Params$Resource$Apps$Operations$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListOperationsResponse>,
        callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
        params: Params$Resource$Apps$Operations$List,
        callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Apps$Operations$List|
        BodyResponseCallback<Schema$ListOperationsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListOperationsResponse>,
        callback?: BodyResponseCallback<Schema$ListOperationsResponse>):
        void|AxiosPromise<Schema$ListOperationsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Apps$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/apps/{appsId}/operations')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['appsId'],
        pathParams: ['appsId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListOperationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Apps$Operations$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `name`. The name of the operation resource.
     */
    appsId?: string;
    /**
     * Part of `name`. See documentation of `appsId`.
     */
    operationsId?: string;
  }
  export interface Params$Resource$Apps$Operations$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `name`. The name of the operation's parent resource.
     */
    appsId?: string;
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }


  export class Resource$Apps$Services {
    root: Appengine;
    versions: Resource$Apps$Services$Versions;
    constructor(root: Appengine) {
      this.root = root;
      this.getRoot.bind(this);
      this.versions = new Resource$Apps$Services$Versions(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * appengine.apps.services.delete
     * @desc Deletes the specified service and all enclosed versions.
     * @alias appengine.apps.services.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/services/default.
     * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Apps$Services$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    delete(
        params: Params$Resource$Apps$Services$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
        params: Params$Resource$Apps$Services$Delete,
        callback: BodyResponseCallback<Schema$Operation>): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
        paramsOrCallback?: Params$Resource$Apps$Services$Delete|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Apps$Services$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Services$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/apps/{appsId}/services/{servicesId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['appsId', 'servicesId'],
        pathParams: ['appsId', 'servicesId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * appengine.apps.services.get
     * @desc Gets the current configuration of the specified service.
     * @alias appengine.apps.services.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/services/default.
     * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Apps$Services$Get,
        options?: MethodOptions): AxiosPromise<Schema$Service>;
    get(params: Params$Resource$Apps$Services$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Service>,
        callback: BodyResponseCallback<Schema$Service>): void;
    get(params: Params$Resource$Apps$Services$Get,
        callback: BodyResponseCallback<Schema$Service>): void;
    get(callback: BodyResponseCallback<Schema$Service>): void;
    get(paramsOrCallback?: Params$Resource$Apps$Services$Get|
        BodyResponseCallback<Schema$Service>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Service>,
        callback?: BodyResponseCallback<Schema$Service>):
        void|AxiosPromise<Schema$Service> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Apps$Services$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Services$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/apps/{appsId}/services/{servicesId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['appsId', 'servicesId'],
        pathParams: ['appsId', 'servicesId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Service>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Service>(parameters);
      }
    }


    /**
     * appengine.apps.services.list
     * @desc Lists all the services in the application.
     * @alias appengine.apps.services.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
     * @param {integer=} params.pageSize Maximum results to return per page.
     * @param {string=} params.pageToken Continuation token for fetching the next page of results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Apps$Services$List, options?: MethodOptions):
        AxiosPromise<Schema$ListServicesResponse>;
    list(
        params: Params$Resource$Apps$Services$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListServicesResponse>,
        callback: BodyResponseCallback<Schema$ListServicesResponse>): void;
    list(
        params: Params$Resource$Apps$Services$List,
        callback: BodyResponseCallback<Schema$ListServicesResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListServicesResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Apps$Services$List|
        BodyResponseCallback<Schema$ListServicesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListServicesResponse>,
        callback?: BodyResponseCallback<Schema$ListServicesResponse>):
        void|AxiosPromise<Schema$ListServicesResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Apps$Services$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Services$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/apps/{appsId}/services')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['appsId'],
        pathParams: ['appsId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListServicesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListServicesResponse>(parameters);
      }
    }


    /**
     * appengine.apps.services.patch
     * @desc Updates the configuration of the specified service.
     * @alias appengine.apps.services.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `name`. Name of the resource to update. Example: apps/myapp/services/default.
     * @param {boolean=} params.migrateTraffic Set to true to gradually shift traffic to one or more versions that you specify. By default, traffic is shifted immediately. For gradual traffic migration, the target versions must be located within instances that are configured for both warmup requests (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#inboundservicetype) and automatic scaling (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#automaticscaling). You must specify the shardBy (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services#shardby) field in the Service resource. Gradual traffic migration is not supported in the App Engine flexible environment. For examples, see Migrating and Splitting Traffic (https://cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic).
     * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
     * @param {string=} params.updateMask Standard field mask for the set of fields to be updated.
     * @param {().Service} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?: Params$Resource$Apps$Services$Patch,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    patch(
        params: Params$Resource$Apps$Services$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
        params: Params$Resource$Apps$Services$Patch,
        callback: BodyResponseCallback<Schema$Operation>): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
        paramsOrCallback?: Params$Resource$Apps$Services$Patch|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Apps$Services$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Services$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/apps/{appsId}/services/{servicesId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['appsId', 'servicesId'],
        pathParams: ['appsId', 'servicesId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Apps$Services$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `name`. Name of the resource requested. Example:
     * apps/myapp/services/default.
     */
    appsId?: string;
    /**
     * Part of `name`. See documentation of `appsId`.
     */
    servicesId?: string;
  }
  export interface Params$Resource$Apps$Services$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `name`. Name of the resource requested. Example:
     * apps/myapp/services/default.
     */
    appsId?: string;
    /**
     * Part of `name`. See documentation of `appsId`.
     */
    servicesId?: string;
  }
  export interface Params$Resource$Apps$Services$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `parent`. Name of the parent Application resource. Example:
     * apps/myapp.
     */
    appsId?: string;
    /**
     * Maximum results to return per page.
     */
    pageSize?: number;
    /**
     * Continuation token for fetching the next page of results.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Apps$Services$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `name`. Name of the resource to update. Example:
     * apps/myapp/services/default.
     */
    appsId?: string;
    /**
     * Set to true to gradually shift traffic to one or more versions that you
     * specify. By default, traffic is shifted immediately. For gradual traffic
     * migration, the target versions must be located within instances that are
     * configured for both warmup requests
     * (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#inboundservicetype)
     * and automatic scaling
     * (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#automaticscaling).
     * You must specify the shardBy
     * (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services#shardby)
     * field in the Service resource. Gradual traffic migration is not supported
     * in the App Engine flexible environment. For examples, see Migrating and
     * Splitting Traffic
     * (https://cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic).
     */
    migrateTraffic?: boolean;
    /**
     * Part of `name`. See documentation of `appsId`.
     */
    servicesId?: string;
    /**
     * Standard field mask for the set of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Service;
  }

  export class Resource$Apps$Services$Versions {
    root: Appengine;
    instances: Resource$Apps$Services$Versions$Instances;
    constructor(root: Appengine) {
      this.root = root;
      this.getRoot.bind(this);
      this.instances = new Resource$Apps$Services$Versions$Instances(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * appengine.apps.services.versions.create
     * @desc Deploys code and resource files to a new version.
     * @alias appengine.apps.services.versions.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `parent`. Name of the parent resource to create this version under. Example: apps/myapp/services/default.
     * @param {string} params.servicesId Part of `parent`. See documentation of `appsId`.
     * @param {().Version} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Apps$Services$Versions$Create,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    create(
        params: Params$Resource$Apps$Services$Versions$Create,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    create(
        params: Params$Resource$Apps$Services$Versions$Create,
        callback: BodyResponseCallback<Schema$Operation>): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
        paramsOrCallback?: Params$Resource$Apps$Services$Versions$Create|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Apps$Services$Versions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Services$Versions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl + '/v1/apps/{appsId}/services/{servicesId}/versions')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['appsId', 'servicesId'],
        pathParams: ['appsId', 'servicesId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * appengine.apps.services.versions.delete
     * @desc Deletes an existing Version resource.
     * @alias appengine.apps.services.versions.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1.
     * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
     * @param {string} params.versionsId Part of `name`. See documentation of `appsId`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Apps$Services$Versions$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    delete(
        params: Params$Resource$Apps$Services$Versions$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
        params: Params$Resource$Apps$Services$Versions$Delete,
        callback: BodyResponseCallback<Schema$Operation>): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
        paramsOrCallback?: Params$Resource$Apps$Services$Versions$Delete|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Apps$Services$Versions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Services$Versions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['appsId', 'servicesId', 'versionsId'],
        pathParams: ['appsId', 'servicesId', 'versionsId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * appengine.apps.services.versions.get
     * @desc Gets the specified Version resource. By default, only a BASIC_VIEW
     * will be returned. Specify the FULL_VIEW parameter to get the full
     * resource.
     * @alias appengine.apps.services.versions.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1.
     * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
     * @param {string} params.versionsId Part of `name`. See documentation of `appsId`.
     * @param {string=} params.view Controls the set of fields returned in the Get response.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Apps$Services$Versions$Get,
        options?: MethodOptions): AxiosPromise<Schema$Version>;
    get(params: Params$Resource$Apps$Services$Versions$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Version>,
        callback: BodyResponseCallback<Schema$Version>): void;
    get(params: Params$Resource$Apps$Services$Versions$Get,
        callback: BodyResponseCallback<Schema$Version>): void;
    get(callback: BodyResponseCallback<Schema$Version>): void;
    get(paramsOrCallback?: Params$Resource$Apps$Services$Versions$Get|
        BodyResponseCallback<Schema$Version>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Version>,
        callback?: BodyResponseCallback<Schema$Version>):
        void|AxiosPromise<Schema$Version> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Apps$Services$Versions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Services$Versions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['appsId', 'servicesId', 'versionsId'],
        pathParams: ['appsId', 'servicesId', 'versionsId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Version>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Version>(parameters);
      }
    }


    /**
     * appengine.apps.services.versions.list
     * @desc Lists the versions of a service.
     * @alias appengine.apps.services.versions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `parent`. Name of the parent Service resource. Example: apps/myapp/services/default.
     * @param {integer=} params.pageSize Maximum results to return per page.
     * @param {string=} params.pageToken Continuation token for fetching the next page of results.
     * @param {string} params.servicesId Part of `parent`. See documentation of `appsId`.
     * @param {string=} params.view Controls the set of fields returned in the List response.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Apps$Services$Versions$List,
        options?: MethodOptions): AxiosPromise<Schema$ListVersionsResponse>;
    list(
        params: Params$Resource$Apps$Services$Versions$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListVersionsResponse>,
        callback: BodyResponseCallback<Schema$ListVersionsResponse>): void;
    list(
        params: Params$Resource$Apps$Services$Versions$List,
        callback: BodyResponseCallback<Schema$ListVersionsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListVersionsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Apps$Services$Versions$List|
        BodyResponseCallback<Schema$ListVersionsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListVersionsResponse>,
        callback?: BodyResponseCallback<Schema$ListVersionsResponse>):
        void|AxiosPromise<Schema$ListVersionsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Apps$Services$Versions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Services$Versions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl + '/v1/apps/{appsId}/services/{servicesId}/versions')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['appsId', 'servicesId'],
        pathParams: ['appsId', 'servicesId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListVersionsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListVersionsResponse>(parameters);
      }
    }


    /**
     * appengine.apps.services.versions.patch
     * @desc Updates the specified Version resource. You can specify the
     * following fields depending on the App Engine environment and type of
     * scaling that the version resource uses:Standard environment
     * instance_class
     * (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.instance_class)automatic
     * scaling in the standard environment: automatic_scaling.min_idle_instances
     * (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling)
     * automatic_scaling.max_idle_instances
     * (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling)
     * automaticScaling.standard_scheduler_settings.max_instances
     * (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings)
     * automaticScaling.standard_scheduler_settings.min_instances
     * (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings)
     * automaticScaling.standard_scheduler_settings.target_cpu_utilization
     * (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings)
     * automaticScaling.standard_scheduler_settings.target_throughput_utilization
     * (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings)basic
     * scaling or manual scaling in the standard environment: serving_status
     * (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.serving_status)Flexible
     * environment serving_status
     * (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.serving_status)automatic
     * scaling in the flexible environment:
     * automatic_scaling.min_total_instances
     * (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling)
     * automatic_scaling.max_total_instances
     * (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling)
     * automatic_scaling.cool_down_period_sec
     * (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling)
     * automatic_scaling.cpu_utilization.target_utilization
     * (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling)
     * @alias appengine.apps.services.versions.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `name`. Name of the resource to update. Example: apps/myapp/services/default/versions/1.
     * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
     * @param {string=} params.updateMask Standard field mask for the set of fields to be updated.
     * @param {string} params.versionsId Part of `name`. See documentation of `appsId`.
     * @param {().Version} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?: Params$Resource$Apps$Services$Versions$Patch,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    patch(
        params: Params$Resource$Apps$Services$Versions$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
        params: Params$Resource$Apps$Services$Versions$Patch,
        callback: BodyResponseCallback<Schema$Operation>): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
        paramsOrCallback?: Params$Resource$Apps$Services$Versions$Patch|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Apps$Services$Versions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Services$Versions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['appsId', 'servicesId', 'versionsId'],
        pathParams: ['appsId', 'servicesId', 'versionsId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Apps$Services$Versions$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `parent`. Name of the parent resource to create this version
     * under. Example: apps/myapp/services/default.
     */
    appsId?: string;
    /**
     * Part of `parent`. See documentation of `appsId`.
     */
    servicesId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Version;
  }
  export interface Params$Resource$Apps$Services$Versions$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `name`. Name of the resource requested. Example:
     * apps/myapp/services/default/versions/v1.
     */
    appsId?: string;
    /**
     * Part of `name`. See documentation of `appsId`.
     */
    servicesId?: string;
    /**
     * Part of `name`. See documentation of `appsId`.
     */
    versionsId?: string;
  }
  export interface Params$Resource$Apps$Services$Versions$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `name`. Name of the resource requested. Example:
     * apps/myapp/services/default/versions/v1.
     */
    appsId?: string;
    /**
     * Part of `name`. See documentation of `appsId`.
     */
    servicesId?: string;
    /**
     * Part of `name`. See documentation of `appsId`.
     */
    versionsId?: string;
    /**
     * Controls the set of fields returned in the Get response.
     */
    view?: string;
  }
  export interface Params$Resource$Apps$Services$Versions$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `parent`. Name of the parent Service resource. Example:
     * apps/myapp/services/default.
     */
    appsId?: string;
    /**
     * Maximum results to return per page.
     */
    pageSize?: number;
    /**
     * Continuation token for fetching the next page of results.
     */
    pageToken?: string;
    /**
     * Part of `parent`. See documentation of `appsId`.
     */
    servicesId?: string;
    /**
     * Controls the set of fields returned in the List response.
     */
    view?: string;
  }
  export interface Params$Resource$Apps$Services$Versions$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `name`. Name of the resource to update. Example:
     * apps/myapp/services/default/versions/1.
     */
    appsId?: string;
    /**
     * Part of `name`. See documentation of `appsId`.
     */
    servicesId?: string;
    /**
     * Standard field mask for the set of fields to be updated.
     */
    updateMask?: string;
    /**
     * Part of `name`. See documentation of `appsId`.
     */
    versionsId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Version;
  }

  export class Resource$Apps$Services$Versions$Instances {
    root: Appengine;
    constructor(root: Appengine) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * appengine.apps.services.versions.instances.debug
     * @desc Enables debugging on a VM instance. This allows you to use the SSH
     * command to connect to the virtual machine where the instance lives. While
     * in "debug mode", the instance continues to serve live traffic. You should
     * delete the instance when you are done debugging and then allow the system
     * to take over and determine if another instance should be started.Only
     * applicable for instances in App Engine flexible environment.
     * @alias appengine.apps.services.versions.instances.debug
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1.
     * @param {string} params.instancesId Part of `name`. See documentation of `appsId`.
     * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
     * @param {string} params.versionsId Part of `name`. See documentation of `appsId`.
     * @param {().DebugInstanceRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    debug(
        params?: Params$Resource$Apps$Services$Versions$Instances$Debug,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    debug(
        params: Params$Resource$Apps$Services$Versions$Instances$Debug,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    debug(
        params: Params$Resource$Apps$Services$Versions$Instances$Debug,
        callback: BodyResponseCallback<Schema$Operation>): void;
    debug(callback: BodyResponseCallback<Schema$Operation>): void;
    debug(
        paramsOrCallback?:
            Params$Resource$Apps$Services$Versions$Instances$Debug|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Apps$Services$Versions$Instances$Debug;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Services$Versions$Instances$Debug;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}:debug')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['appsId', 'servicesId', 'versionsId', 'instancesId'],
        pathParams: ['appsId', 'instancesId', 'servicesId', 'versionsId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * appengine.apps.services.versions.instances.delete
     * @desc Stops a running instance.
     * @alias appengine.apps.services.versions.instances.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1.
     * @param {string} params.instancesId Part of `name`. See documentation of `appsId`.
     * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
     * @param {string} params.versionsId Part of `name`. See documentation of `appsId`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Apps$Services$Versions$Instances$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    delete(
        params: Params$Resource$Apps$Services$Versions$Instances$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
        params: Params$Resource$Apps$Services$Versions$Instances$Delete,
        callback: BodyResponseCallback<Schema$Operation>): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
        paramsOrCallback?:
            Params$Resource$Apps$Services$Versions$Instances$Delete|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Apps$Services$Versions$Instances$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Services$Versions$Instances$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['appsId', 'servicesId', 'versionsId', 'instancesId'],
        pathParams: ['appsId', 'instancesId', 'servicesId', 'versionsId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * appengine.apps.services.versions.instances.get
     * @desc Gets instance information.
     * @alias appengine.apps.services.versions.instances.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1.
     * @param {string} params.instancesId Part of `name`. See documentation of `appsId`.
     * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
     * @param {string} params.versionsId Part of `name`. See documentation of `appsId`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Apps$Services$Versions$Instances$Get,
        options?: MethodOptions): AxiosPromise<Schema$Instance>;
    get(params: Params$Resource$Apps$Services$Versions$Instances$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Instance>,
        callback: BodyResponseCallback<Schema$Instance>): void;
    get(params: Params$Resource$Apps$Services$Versions$Instances$Get,
        callback: BodyResponseCallback<Schema$Instance>): void;
    get(callback: BodyResponseCallback<Schema$Instance>): void;
    get(paramsOrCallback?: Params$Resource$Apps$Services$Versions$Instances$Get|
        BodyResponseCallback<Schema$Instance>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Instance>,
        callback?: BodyResponseCallback<Schema$Instance>):
        void|AxiosPromise<Schema$Instance> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Apps$Services$Versions$Instances$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Services$Versions$Instances$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['appsId', 'servicesId', 'versionsId', 'instancesId'],
        pathParams: ['appsId', 'instancesId', 'servicesId', 'versionsId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Instance>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Instance>(parameters);
      }
    }


    /**
     * appengine.apps.services.versions.instances.list
     * @desc Lists the instances of a version.Tip: To aggregate details about
     * instances over time, see the Stackdriver Monitoring API
     * (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list).
     * @alias appengine.apps.services.versions.instances.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `parent`. Name of the parent Version resource. Example: apps/myapp/services/default/versions/v1.
     * @param {integer=} params.pageSize Maximum results to return per page.
     * @param {string=} params.pageToken Continuation token for fetching the next page of results.
     * @param {string} params.servicesId Part of `parent`. See documentation of `appsId`.
     * @param {string} params.versionsId Part of `parent`. See documentation of `appsId`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Apps$Services$Versions$Instances$List,
        options?: MethodOptions): AxiosPromise<Schema$ListInstancesResponse>;
    list(
        params: Params$Resource$Apps$Services$Versions$Instances$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListInstancesResponse>,
        callback: BodyResponseCallback<Schema$ListInstancesResponse>): void;
    list(
        params: Params$Resource$Apps$Services$Versions$Instances$List,
        callback: BodyResponseCallback<Schema$ListInstancesResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListInstancesResponse>): void;
    list(
        paramsOrCallback?:
            Params$Resource$Apps$Services$Versions$Instances$List|
        BodyResponseCallback<Schema$ListInstancesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListInstancesResponse>,
        callback?: BodyResponseCallback<Schema$ListInstancesResponse>):
        void|AxiosPromise<Schema$ListInstancesResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Apps$Services$Versions$Instances$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apps$Services$Versions$Instances$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://appengine.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['appsId', 'servicesId', 'versionsId'],
        pathParams: ['appsId', 'servicesId', 'versionsId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListInstancesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListInstancesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Apps$Services$Versions$Instances$Debug {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `name`. Name of the resource requested. Example:
     * apps/myapp/services/default/versions/v1/instances/instance-1.
     */
    appsId?: string;
    /**
     * Part of `name`. See documentation of `appsId`.
     */
    instancesId?: string;
    /**
     * Part of `name`. See documentation of `appsId`.
     */
    servicesId?: string;
    /**
     * Part of `name`. See documentation of `appsId`.
     */
    versionsId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DebugInstanceRequest;
  }
  export interface Params$Resource$Apps$Services$Versions$Instances$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `name`. Name of the resource requested. Example:
     * apps/myapp/services/default/versions/v1/instances/instance-1.
     */
    appsId?: string;
    /**
     * Part of `name`. See documentation of `appsId`.
     */
    instancesId?: string;
    /**
     * Part of `name`. See documentation of `appsId`.
     */
    servicesId?: string;
    /**
     * Part of `name`. See documentation of `appsId`.
     */
    versionsId?: string;
  }
  export interface Params$Resource$Apps$Services$Versions$Instances$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `name`. Name of the resource requested. Example:
     * apps/myapp/services/default/versions/v1/instances/instance-1.
     */
    appsId?: string;
    /**
     * Part of `name`. See documentation of `appsId`.
     */
    instancesId?: string;
    /**
     * Part of `name`. See documentation of `appsId`.
     */
    servicesId?: string;
    /**
     * Part of `name`. See documentation of `appsId`.
     */
    versionsId?: string;
  }
  export interface Params$Resource$Apps$Services$Versions$Instances$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Part of `parent`. Name of the parent Version resource. Example:
     * apps/myapp/services/default/versions/v1.
     */
    appsId?: string;
    /**
     * Maximum results to return per page.
     */
    pageSize?: number;
    /**
     * Continuation token for fetching the next page of results.
     */
    pageToken?: string;
    /**
     * Part of `parent`. See documentation of `appsId`.
     */
    servicesId?: string;
    /**
     * Part of `parent`. See documentation of `appsId`.
     */
    versionsId?: string;
  }
}
