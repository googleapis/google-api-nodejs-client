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

export namespace firebasehosting_v1beta1 {
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
   * Firebase Hosting API
   *
   * The Firebase Hosting REST API enables programmatic and customizable deployments to your Firebase-hosted sites. Use this REST API to deploy new or updated hosting configurations and content files.
   *
   * @example
   * const {google} = require('googleapis');
   * const firebasehosting = google.firebasehosting('v1beta1');
   *
   * @namespace firebasehosting
   * @type {Function}
   * @version v1beta1
   * @variation v1beta1
   * @param {object=} options Options for Firebasehosting
   */
  export class Firebasehosting {
    context: APIRequestContext;
    projects: Resource$Projects;
    sites: Resource$Sites;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
      this.sites = new Resource$Sites(this.context);
    }
  }

  /**
   * Contains metadata about the user who performed an action, such as creating a release or finalizing a version.
   */
  export interface Schema$ActingUser {
    /**
     * The email address of the user when the user performed the action.
     */
    email?: string | null;
    /**
     * A profile image URL for the user. May not be present if the user has changed their email address or deleted their account.
     */
    imageUrl?: string | null;
  }
  /**
   * Represents a DNS certificate challenge.
   */
  export interface Schema$CertDnsChallenge {
    /**
     * The domain name upon which the DNS challenge must be satisfied.
     */
    domainName?: string | null;
    /**
     * The value that must be present as a TXT record on the domain name to satisfy the challenge.
     */
    token?: string | null;
  }
  /**
   * Represents an HTTP certificate challenge.
   */
  export interface Schema$CertHttpChallenge {
    /**
     * The URL path on which to serve the specified token to satisfy the certificate challenge.
     */
    path?: string | null;
    /**
     * The token to serve at the specified URL path to satisfy the certificate challenge.
     */
    token?: string | null;
  }
  /**
   * A configured rewrite that directs requests to a Cloud Run service. If the Cloud Run service does not exist when setting or updating your Firebase Hosting configuration, then the request fails. Any errors from the Cloud Run service are passed to the end user (for example, if you delete a service, any requests directed to that service receive a `404` error).
   */
  export interface Schema$CloudRunRewrite {
    /**
     * Optional. User-provided region where the Cloud Run service is hosted.&lt;br&gt; Defaults to `us-central1` if not supplied.
     */
    region?: string | null;
    /**
     * Required. User-defined ID of the Cloud Run service.
     */
    serviceId?: string | null;
  }
  /**
   * The intended behavior and status information of a domain.
   */
  export interface Schema$Domain {
    /**
     * Required. The domain name of the association.
     */
    domainName?: string | null;
    /**
     * If set, the domain should redirect with the provided parameters.
     */
    domainRedirect?: Schema$DomainRedirect;
    /**
     * Output only. Information about the provisioning of certificates and the health of the DNS resolution for the domain.
     */
    provisioning?: Schema$DomainProvisioning;
    /**
     * Required. The site name of the association.
     */
    site?: string | null;
    /**
     * Output only. Additional status of the domain association.
     */
    status?: string | null;
    /**
     * Output only. The time at which the domain was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * The current certificate provisioning status information for a domain.
   */
  export interface Schema$DomainProvisioning {
    /**
     * The TXT records (for the certificate challenge) that were found at the last DNS fetch.
     */
    certChallengeDiscoveredTxt?: string[] | null;
    /**
     * The DNS challenge for generating a certificate.
     */
    certChallengeDns?: Schema$CertDnsChallenge;
    /**
     * The HTTP challenge for generating a certificate.
     */
    certChallengeHttp?: Schema$CertHttpChallenge;
    /**
     * The certificate provisioning status; updated when Firebase Hosting provisions an SSL certificate for the domain.
     */
    certStatus?: string | null;
    /**
     * The IPs found at the last DNS fetch.
     */
    discoveredIps?: string[] | null;
    /**
     * The time at which the last DNS fetch occurred.
     */
    dnsFetchTime?: string | null;
    /**
     * The DNS record match status as of the last DNS fetch.
     */
    dnsStatus?: string | null;
    /**
     * The list of IPs to which the domain is expected to resolve.
     */
    expectedIps?: string[] | null;
  }
  /**
   * Defines the behavior of a domain-level redirect. Domain redirects preserve the path of the redirect but replace the requested domain with the one specified in the redirect configuration.
   */
  export interface Schema$DomainRedirect {
    /**
     * Required. The domain name to redirect to.
     */
    domainName?: string | null;
    /**
     * Required. The redirect status code.
     */
    type?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * A [`header`](/docs/hosting/full-config#headers) is an object that specifies a URL pattern that, if matched to the request URL path, triggers Hosting to apply the specified custom response headers.
   */
  export interface Schema$Header {
    /**
     * The user-supplied [glob](/docs/hosting/full-config#glob_pattern_matching) to match against the request URL path.
     */
    glob?: string | null;
    /**
     * Required. The additional headers to add to the response.
     */
    headers?: {[key: string]: string} | null;
    /**
     * The user-supplied RE2 regular expression to match against the request URL path.
     */
    regex?: string | null;
  }
  /**
   * The response to listing Domains.
   */
  export interface Schema$ListDomainsResponse {
    /**
     * The list of domains, if any exist.
     */
    domains?: Schema$Domain[];
    /**
     * The pagination token, if more results exist.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$ListReleasesResponse {
    /**
     * If there are additional releases remaining beyond the ones in this response, then supply this token in the next [`list`](../sites.versions.files/list) call to continue with the next set of releases.
     */
    nextPageToken?: string | null;
    /**
     * The list of hashes of files that still need to be uploaded, if any exist.
     */
    releases?: Schema$Release[];
  }
  export interface Schema$ListVersionFilesResponse {
    /**
     * The list path/hashes in the specified version.
     */
    files?: Schema$VersionFile[];
    /**
     * The pagination token, if more results exist.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$ListVersionsResponse {
    /**
     * The pagination token, if more results exist
     */
    nextPageToken?: string | null;
    /**
     * The list of versions, if any exist.
     */
    versions?: Schema$Version[];
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
     * Service-specific metadata associated with the operation.  It typically contains progress information and common metadata such as create time. Some services might not provide such metadata.  Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
     */
    name?: string | null;
    /**
     * The normal response of the operation in case of success.  If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`.  If the original method is standard `Get`/`Create`/`Update`, the response should be the resource.  For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name.  For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * The request to populate a Version&#39;s Files.
   */
  export interface Schema$PopulateVersionFilesRequest {
    /**
     * A set of file paths to the hashes corresponding to assets that should be added to the version. Note that a file path to an empty hash will remove the path from the version. Calculate a hash by Gzipping the file then taking the SHA256 hash of the newly compressed file.
     */
    files?: {[key: string]: string} | null;
  }
  export interface Schema$PopulateVersionFilesResponse {
    /**
     * The content hashes of the specified files that need to be uploaded to the specified endpoint.
     */
    uploadRequiredHashes?: string[] | null;
    /**
     * The URL to which the files should be uploaded, in the format: &lt;br&gt;&quot;https://upload-firebasehosting.googleapis.com/upload/sites/&lt;var&gt;site-name&lt;/var&gt;/versions/&lt;var&gt;versionID&lt;/var&gt;/files&quot;. &lt;br&gt;Perform a multipart `POST` of the Gzipped file contents to the URL using a forward slash and the hash of the file appended to the end.
     */
    uploadUrl?: string | null;
  }
  /**
   * Version preview configuration. If active and unexpired, this version will be accessible via a custom URL even if it is not the currently released version.
   */
  export interface Schema$PreviewConfig {
    /**
     * If true, preview URLs are enabled for this version.
     */
    active?: boolean | null;
    /**
     * Indicates the expiration time for previewing this version; preview URL requests received after this time will 404.
     */
    expireTime?: string | null;
  }
  /**
   * A [`redirect`](/docs/hosting/full-config#redirects) object specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond with a redirect to the specified destination path.
   */
  export interface Schema$Redirect {
    /**
     * The user-supplied [glob](/docs/hosting/full-config#glob_pattern_matching) to match against the request URL path.
     */
    glob?: string | null;
    /**
     * Required. The value to put in the HTTP location header of the response. &lt;br&gt;The location can contain capture group values from the pattern using a `:` prefix to identify the segment and an optional `*` to capture the rest of the URL. For example: &lt;code&gt;&quot;glob&quot;: &quot;/:capture*&quot;, &lt;br&gt;&quot;statusCode&quot;: 301, &lt;br&gt;&quot;location&quot;: &quot;https://example.com/foo/:capture&quot;&lt;/code&gt;
     */
    location?: string | null;
    /**
     * The user-supplied RE2 regular expression to match against the request URL path.
     */
    regex?: string | null;
    /**
     * Required. The status HTTP code to return in the response. It must be a valid 3xx status code.
     */
    statusCode?: number | null;
  }
  /**
   * A `Release` is a particular [collection of configurations and files](sites.versions) that is set to be public at a particular time.
   */
  export interface Schema$Release {
    /**
     * The deploy description when the release was created. The value can be up to 512&amp;nbsp;characters.
     */
    message?: string | null;
    /**
     * Output only. The unique identifier for the release, in the format: &lt;code&gt;sites/&lt;var&gt;site-name&lt;/var&gt;/releases/&lt;var&gt;releaseID&lt;/var&gt;&lt;/code&gt; This name is provided in the response body when you call the [`CreateRelease`](sites.releases/create) endpoint.
     */
    name?: string | null;
    /**
     * Output only. The time at which the version is set to be public.
     */
    releaseTime?: string | null;
    /**
     * Output only. Identifies the user who created the release.
     */
    releaseUser?: Schema$ActingUser;
    /**
     * Explains the reason for the release. &lt;br&gt;Specify a value for this field only when creating a `SITE_DISABLE` type release.
     */
    type?: string | null;
    /**
     * Output only. The configuration and content that was released.
     */
    version?: Schema$Version;
  }
  /**
   * A [`rewrite`](/docs/hosting/full-config#rewrites) object specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond as if the service were given the specified destination URL.
   */
  export interface Schema$Rewrite {
    /**
     * The request will be forwarded to Firebase Dynamic Links.
     */
    dynamicLinks?: boolean | null;
    /**
     * The function to proxy requests to. Must match the exported function name exactly.
     */
    function?: string | null;
    /**
     * The user-supplied [glob](/docs/hosting/full-config#glob_pattern_matching) to match against the request URL path.
     */
    glob?: string | null;
    /**
     * The URL path to rewrite the request to.
     */
    path?: string | null;
    /**
     * The user-supplied RE2 regular expression to match against the request URL path.
     */
    regex?: string | null;
    /**
     * The request will be forwarded to Cloud Run.
     */
    run?: Schema$CloudRunRewrite;
  }
  /**
   * The configuration for how incoming requests to a site should be routed and processed before serving content. The URL request paths are matched against the specified URL patterns in the configuration, then Hosting applies the applicable configuration according to a specific [priority order](/docs/hosting/full-config#hosting_priority_order).
   */
  export interface Schema$ServingConfig {
    /**
     * How to handle well known App Association files.
     */
    appAssociation?: string | null;
    /**
     * Defines whether to drop the file extension from uploaded files.
     */
    cleanUrls?: boolean | null;
    /**
     * An array of objects, where each object specifies a URL pattern that, if matched to the request URL path, triggers Hosting to apply the specified custom response headers.
     */
    headers?: Schema$Header[];
    /**
     * An array of objects (called redirect rules), where each rule specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond with a redirect to the specified destination path.
     */
    redirects?: Schema$Redirect[];
    /**
     * An array of objects (called rewrite rules), where each rule specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond as if the service were given the specified destination URL.
     */
    rewrites?: Schema$Rewrite[];
    /**
     * Defines how to handle a trailing slash in the URL path.
     */
    trailingSlashBehavior?: string | null;
  }
  /**
   * A `SiteConfig` contains metadata associated with a specific site that controls Firebase Hosting serving behavior
   */
  export interface Schema$SiteConfig {
    /**
     * Whether or not web requests made by site visitors are logged via Cloud Logging.
     */
    cloudLoggingEnabled?: boolean | null;
    /**
     * The number of FINALIZED versions that will be held for a site before automatic deletion. When a new version is deployed, content for versions in storage in excess of this number will be deleted, and will no longer be billed for storage usage. Oldest versions will be deleted first; sites are created with an unlimited number of max_versions by default.
     */
    maxVersions?: string | null;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details.  You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details.  There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string | null;
  }
  /**
   * A `Version` is the collection of configuration and [static files](sites.versions.files) that determine how a site is displayed.
   */
  export interface Schema$Version {
    /**
     * The configuration for the behavior of the site. This configuration exists in the [`firebase.json`](/docs/cli/#the_firebasejson_file) file.
     */
    config?: Schema$ServingConfig;
    /**
     * Output only. The time at which the version was created.
     */
    createTime?: string | null;
    /**
     * Output only. Identifies the user who created the version.
     */
    createUser?: Schema$ActingUser;
    /**
     * Output only. The time at which the version was `DELETED`.
     */
    deleteTime?: string | null;
    /**
     * Output only. Identifies the user who `DELETED` the version.
     */
    deleteUser?: Schema$ActingUser;
    /**
     * Output only. The total number of files associated with the version. &lt;br&gt;This value is calculated after a version is `FINALIZED`.
     */
    fileCount?: string | null;
    /**
     * Output only. The time at which the version was `FINALIZED`.
     */
    finalizeTime?: string | null;
    /**
     * Output only. Identifies the user who `FINALIZED` the version.
     */
    finalizeUser?: Schema$ActingUser;
    /**
     * The labels used for extra metadata and/or filtering.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The unique identifier for a version, in the format: &lt;code&gt;sites/&lt;var&gt;site-name&lt;/var&gt;/versions/&lt;var&gt;versionID&lt;/var&gt;&lt;/code&gt; This name is provided in the response body when you call the [`CreateVersion`](../sites.versions/create) endpoint.
     */
    name?: string | null;
    /**
     * Version preview configuration for the site version. This configuration specfies whether previewing is enabled for this site version. Version previews allow you to preview your site at a custom URL before releasing it as the live version.
     */
    preview?: Schema$PreviewConfig;
    /**
     * The deploy status of a version. &lt;br&gt; &lt;br&gt;For a successful deploy, call the [`CreateVersion`](sites.versions/create) endpoint to make a new version (`CREATED` status), [upload all desired files](sites.versions/populateFiles) to the version, then [update](sites.versions/patch) the version to the `FINALIZED` status. &lt;br&gt; &lt;br&gt;Note that if you leave the version in the `CREATED` state for more than 12&amp;nbsp;hours, the system will automatically mark the version as `ABANDONED`. &lt;br&gt; &lt;br&gt;You can also change the status of a version to `DELETED` by calling the [`DeleteVersion`](sites.versions/delete) endpoint.
     */
    status?: string | null;
    /**
     * Output only. The total stored bytesize of the version. &lt;br&gt;This value is calculated after a version is `FINALIZED`.
     */
    versionBytes?: string | null;
  }
  /**
   * A static content file that is part of a version.
   */
  export interface Schema$VersionFile {
    /**
     * The SHA256 content hash of the file.
     */
    hash?: string | null;
    /**
     * The URI at which the file&#39;s content should display.
     */
    path?: string | null;
    /**
     * Output only. The current status of a particular file in the specified version. &lt;br&gt;The value will be either `pending upload` or `uploaded`.
     */
    status?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    operations: Resource$Projects$Operations;
    sites: Resource$Projects$Sites;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations = new Resource$Projects$Operations(this.context);
      this.sites = new Resource$Projects$Sites(this.context);
    }
  }

  export class Resource$Projects$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * firebasehosting.projects.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.operations.get({
     *     // The name of the operation resource.
     *     name: 'projects/my-project/operations/my-operation',
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
     * @alias firebasehosting.projects.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Projects$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Projects$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Operations$Get
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
        {}) as Params$Resource$Projects$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }

  export class Resource$Projects$Sites {
    context: APIRequestContext;
    channels: Resource$Projects$Sites$Channels;
    domains: Resource$Projects$Sites$Domains;
    releases: Resource$Projects$Sites$Releases;
    versions: Resource$Projects$Sites$Versions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.channels = new Resource$Projects$Sites$Channels(this.context);
      this.domains = new Resource$Projects$Sites$Domains(this.context);
      this.releases = new Resource$Projects$Sites$Releases(this.context);
      this.versions = new Resource$Projects$Sites$Versions(this.context);
    }

    /**
     * firebasehosting.projects.sites.getConfig
     * @desc Gets the Hosting metadata for a specific site.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.getConfig({
     *     // Required. The site for which to get the SiteConfig, in the format:
     *     // <code>sites/<var>site-name</var>/config</code>
     *     name: 'projects/my-project/sites/my-site/config',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cloudLoggingEnabled": false,
     *   //   "maxVersions": "my_maxVersions"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebasehosting.projects.sites.getConfig
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The site for which to get the SiteConfig, in the format: <code>sites/<var>site-name</var>/config</code>
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getConfig(
      params: Params$Resource$Projects$Sites$Getconfig,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getConfig(
      params?: Params$Resource$Projects$Sites$Getconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SiteConfig>;
    getConfig(
      params: Params$Resource$Projects$Sites$Getconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getConfig(
      params: Params$Resource$Projects$Sites$Getconfig,
      options: MethodOptions | BodyResponseCallback<Schema$SiteConfig>,
      callback: BodyResponseCallback<Schema$SiteConfig>
    ): void;
    getConfig(
      params: Params$Resource$Projects$Sites$Getconfig,
      callback: BodyResponseCallback<Schema$SiteConfig>
    ): void;
    getConfig(callback: BodyResponseCallback<Schema$SiteConfig>): void;
    getConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Getconfig
        | BodyResponseCallback<Schema$SiteConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SiteConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SiteConfig>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SiteConfig> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Getconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Getconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
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
        createAPIRequest<Schema$SiteConfig>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$SiteConfig>(parameters);
      }
    }

    /**
     * firebasehosting.projects.sites.updateConfig
     * @desc Sets the Hosting metadata for a specific site.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
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
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.updateConfig({
     *     // Required. The site for which to update the SiteConfig, in the format:
     *     // <code>sites/<var>site-name</var>/config</code>
     *     name: 'projects/my-project/sites/my-site/config',
     *     // A set of field names from your [site configuration](../sites.SiteConfig)
     *     // that you want to update.
     *     // <br>A field will be overwritten if, and only if, it's in the mask.
     *     // <br>If a mask is not provided then a default mask of only
     *     // [`max_versions`](../sites.SiteConfig.max_versions) will be used.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "cloudLoggingEnabled": false,
     *       //   "maxVersions": "my_maxVersions"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cloudLoggingEnabled": false,
     *   //   "maxVersions": "my_maxVersions"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebasehosting.projects.sites.updateConfig
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The site for which to update the SiteConfig, in the format: <code>sites/<var>site-name</var>/config</code>
     * @param {string=} params.updateMask A set of field names from your [site configuration](../sites.SiteConfig) that you want to update. <br>A field will be overwritten if, and only if, it's in the mask. <br>If a mask is not provided then a default mask of only [`max_versions`](../sites.SiteConfig.max_versions) will be used.
     * @param {().SiteConfig} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateConfig(
      params: Params$Resource$Projects$Sites$Updateconfig,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateConfig(
      params?: Params$Resource$Projects$Sites$Updateconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SiteConfig>;
    updateConfig(
      params: Params$Resource$Projects$Sites$Updateconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateConfig(
      params: Params$Resource$Projects$Sites$Updateconfig,
      options: MethodOptions | BodyResponseCallback<Schema$SiteConfig>,
      callback: BodyResponseCallback<Schema$SiteConfig>
    ): void;
    updateConfig(
      params: Params$Resource$Projects$Sites$Updateconfig,
      callback: BodyResponseCallback<Schema$SiteConfig>
    ): void;
    updateConfig(callback: BodyResponseCallback<Schema$SiteConfig>): void;
    updateConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Updateconfig
        | BodyResponseCallback<Schema$SiteConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SiteConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SiteConfig>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SiteConfig> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Updateconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Updateconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
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
        createAPIRequest<Schema$SiteConfig>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$SiteConfig>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Sites$Getconfig
    extends StandardParameters {
    /**
     * Required. The site for which to get the SiteConfig, in the format: <code>sites/<var>site-name</var>/config</code>
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Sites$Updateconfig
    extends StandardParameters {
    /**
     * Required. The site for which to update the SiteConfig, in the format: <code>sites/<var>site-name</var>/config</code>
     */
    name?: string;
    /**
     * A set of field names from your [site configuration](../sites.SiteConfig) that you want to update. <br>A field will be overwritten if, and only if, it's in the mask. <br>If a mask is not provided then a default mask of only [`max_versions`](../sites.SiteConfig.max_versions) will be used.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SiteConfig;
  }

  export class Resource$Projects$Sites$Channels {
    context: APIRequestContext;
    releases: Resource$Projects$Sites$Channels$Releases;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.releases = new Resource$Projects$Sites$Channels$Releases(
        this.context
      );
    }
  }

  export class Resource$Projects$Sites$Channels$Releases {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * firebasehosting.projects.sites.channels.releases.create
     * @desc Creates a new release which makes the content of the specified version actively display on the appropriate URL(s).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
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
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.channels.releases.create({
     *     // Required. The site that the release belongs to, in the format:
     *     // <code>sites/<var>site-name</var></code>
     *     parent: 'projects/my-project/sites/my-site/channels/my-channel',
     *     // The unique identifier for a version, in the format:
     *     // <code>/sites/<var>site-name</var>/versions/<var>versionID</var></code>
     *     // The <var>site-name</var> in this version identifier must match the
     *     // <var>site-name</var> in the `parent` parameter.
     *     // <br>
     *     // <br>This query parameter must be empty if the `type` field in the
     *     // request body is `SITE_DISABLE`.
     *     versionName: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "message": "my_message",
     *       //   "name": "my_name",
     *       //   "releaseTime": "my_releaseTime",
     *       //   "releaseUser": {},
     *       //   "type": "my_type",
     *       //   "version": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "message": "my_message",
     *   //   "name": "my_name",
     *   //   "releaseTime": "my_releaseTime",
     *   //   "releaseUser": {},
     *   //   "type": "my_type",
     *   //   "version": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebasehosting.projects.sites.channels.releases.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The site that the release belongs to, in the format: <code>sites/<var>site-name</var></code>
     * @param {string=} params.versionName The unique identifier for a version, in the format: <code>/sites/<var>site-name</var>/versions/<var>versionID</var></code> The <var>site-name</var> in this version identifier must match the <var>site-name</var> in the `parent` parameter. <br> <br>This query parameter must be empty if the `type` field in the request body is `SITE_DISABLE`.
     * @param {().Release} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params: Params$Resource$Projects$Sites$Channels$Releases$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Sites$Channels$Releases$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Release>;
    create(
      params: Params$Resource$Projects$Sites$Channels$Releases$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Sites$Channels$Releases$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Release>,
      callback: BodyResponseCallback<Schema$Release>
    ): void;
    create(
      params: Params$Resource$Projects$Sites$Channels$Releases$Create,
      callback: BodyResponseCallback<Schema$Release>
    ): void;
    create(callback: BodyResponseCallback<Schema$Release>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Channels$Releases$Create
        | BodyResponseCallback<Schema$Release>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Release>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Release>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Release> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Channels$Releases$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Channels$Releases$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/releases').replace(
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
        createAPIRequest<Schema$Release>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Release>(parameters);
      }
    }

    /**
     * firebasehosting.projects.sites.channels.releases.list
     * @desc Lists the releases that have been created on the specified site.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.channels.releases.list({
     *     // The page size to return. Defaults to 100.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token from a previous request, if provided.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent for which to list files, in the format:
     *     // <code>sites/<var>site-name</var></code>
     *     parent: 'projects/my-project/sites/my-site/channels/my-channel',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "releases": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebasehosting.projects.sites.channels.releases.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The page size to return. Defaults to 100.
     * @param {string=} params.pageToken The next_page_token from a previous request, if provided.
     * @param {string} params.parent Required. The parent for which to list files, in the format: <code>sites/<var>site-name</var></code>
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Projects$Sites$Channels$Releases$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Sites$Channels$Releases$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListReleasesResponse>;
    list(
      params: Params$Resource$Projects$Sites$Channels$Releases$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Sites$Channels$Releases$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListReleasesResponse>,
      callback: BodyResponseCallback<Schema$ListReleasesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Sites$Channels$Releases$List,
      callback: BodyResponseCallback<Schema$ListReleasesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListReleasesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Channels$Releases$List
        | BodyResponseCallback<Schema$ListReleasesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListReleasesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListReleasesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListReleasesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Channels$Releases$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Channels$Releases$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/releases').replace(
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
        createAPIRequest<Schema$ListReleasesResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListReleasesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Sites$Channels$Releases$Create
    extends StandardParameters {
    /**
     * Required. The site that the release belongs to, in the format: <code>sites/<var>site-name</var></code>
     */
    parent?: string;
    /**
     * The unique identifier for a version, in the format: <code>/sites/<var>site-name</var>/versions/<var>versionID</var></code> The <var>site-name</var> in this version identifier must match the <var>site-name</var> in the `parent` parameter. <br> <br>This query parameter must be empty if the `type` field in the request body is `SITE_DISABLE`.
     */
    versionName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Release;
  }
  export interface Params$Resource$Projects$Sites$Channels$Releases$List
    extends StandardParameters {
    /**
     * The page size to return. Defaults to 100.
     */
    pageSize?: number;
    /**
     * The next_page_token from a previous request, if provided.
     */
    pageToken?: string;
    /**
     * Required. The parent for which to list files, in the format: <code>sites/<var>site-name</var></code>
     */
    parent?: string;
  }

  export class Resource$Projects$Sites$Domains {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * firebasehosting.projects.sites.domains.create
     * @desc Creates a domain mapping on the specified site.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
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
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.domains.create({
     *     // Required. The parent to create the domain association for, in the format:
     *     // <code>sites/<var>site-name</var></code>
     *     parent: 'projects/my-project/sites/my-site',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "domainName": "my_domainName",
     *       //   "domainRedirect": {},
     *       //   "provisioning": {},
     *       //   "site": "my_site",
     *       //   "status": "my_status",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "domainName": "my_domainName",
     *   //   "domainRedirect": {},
     *   //   "provisioning": {},
     *   //   "site": "my_site",
     *   //   "status": "my_status",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebasehosting.projects.sites.domains.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The parent to create the domain association for, in the format: <code>sites/<var>site-name</var></code>
     * @param {().Domain} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params: Params$Resource$Projects$Sites$Domains$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Sites$Domains$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Domain>;
    create(
      params: Params$Resource$Projects$Sites$Domains$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Sites$Domains$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Domain>,
      callback: BodyResponseCallback<Schema$Domain>
    ): void;
    create(
      params: Params$Resource$Projects$Sites$Domains$Create,
      callback: BodyResponseCallback<Schema$Domain>
    ): void;
    create(callback: BodyResponseCallback<Schema$Domain>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Domains$Create
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Domain> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Domains$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Domains$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/domains').replace(
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
        createAPIRequest<Schema$Domain>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Domain>(parameters);
      }
    }

    /**
     * firebasehosting.projects.sites.domains.delete
     * @desc Deletes the existing domain mapping on the specified site.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
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
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.domains.delete({
     *     // Required. The name of the domain association to delete.
     *     name: 'projects/my-project/sites/my-site/domains/my-domain',
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
     * @alias firebasehosting.projects.sites.domains.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the domain association to delete.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Projects$Sites$Domains$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Sites$Domains$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Sites$Domains$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Sites$Domains$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Sites$Domains$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Domains$Delete
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
        {}) as Params$Resource$Projects$Sites$Domains$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Domains$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * firebasehosting.projects.sites.domains.get
     * @desc Gets a domain mapping on the specified site.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.domains.get({
     *     // Required. The name of the domain configuration to get.
     *     name: 'projects/my-project/sites/my-site/domains/my-domain',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "domainName": "my_domainName",
     *   //   "domainRedirect": {},
     *   //   "provisioning": {},
     *   //   "site": "my_site",
     *   //   "status": "my_status",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebasehosting.projects.sites.domains.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the domain configuration to get.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Projects$Sites$Domains$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Sites$Domains$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Domain>;
    get(
      params: Params$Resource$Projects$Sites$Domains$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Sites$Domains$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Domain>,
      callback: BodyResponseCallback<Schema$Domain>
    ): void;
    get(
      params: Params$Resource$Projects$Sites$Domains$Get,
      callback: BodyResponseCallback<Schema$Domain>
    ): void;
    get(callback: BodyResponseCallback<Schema$Domain>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Domains$Get
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Domain> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Domains$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Domains$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
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
        createAPIRequest<Schema$Domain>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Domain>(parameters);
      }
    }

    /**
     * firebasehosting.projects.sites.domains.list
     * @desc Lists the domains for the specified site.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.domains.list({
     *     // The page size to return. Defaults to 50.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token from a previous request, if provided.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent for which to list domains, in the format:
     *     // <code>sites/<var>site-name</var></code>
     *     parent: 'projects/my-project/sites/my-site',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "domains": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebasehosting.projects.sites.domains.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The page size to return. Defaults to 50.
     * @param {string=} params.pageToken The next_page_token from a previous request, if provided.
     * @param {string} params.parent Required. The parent for which to list domains, in the format: <code>sites/<var>site-name</var></code>
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Projects$Sites$Domains$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Sites$Domains$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDomainsResponse>;
    list(
      params: Params$Resource$Projects$Sites$Domains$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Sites$Domains$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListDomainsResponse>,
      callback: BodyResponseCallback<Schema$ListDomainsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Sites$Domains$List,
      callback: BodyResponseCallback<Schema$ListDomainsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDomainsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Domains$List
        | BodyResponseCallback<Schema$ListDomainsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDomainsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDomainsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListDomainsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Domains$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Domains$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/domains').replace(
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
        createAPIRequest<Schema$ListDomainsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListDomainsResponse>(parameters);
      }
    }

    /**
     * firebasehosting.projects.sites.domains.update
     * @desc Updates the specified domain mapping, creating the mapping as if it does not exist.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
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
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.domains.update({
     *     // Required. The name of the domain association to update or create, if an
     *     // association doesn't already exist.
     *     name: 'projects/my-project/sites/my-site/domains/my-domain',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "domainName": "my_domainName",
     *       //   "domainRedirect": {},
     *       //   "provisioning": {},
     *       //   "site": "my_site",
     *       //   "status": "my_status",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "domainName": "my_domainName",
     *   //   "domainRedirect": {},
     *   //   "provisioning": {},
     *   //   "site": "my_site",
     *   //   "status": "my_status",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebasehosting.projects.sites.domains.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the domain association to update or create, if an association doesn't already exist.
     * @param {().Domain} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params: Params$Resource$Projects$Sites$Domains$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Projects$Sites$Domains$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Domain>;
    update(
      params: Params$Resource$Projects$Sites$Domains$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Projects$Sites$Domains$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Domain>,
      callback: BodyResponseCallback<Schema$Domain>
    ): void;
    update(
      params: Params$Resource$Projects$Sites$Domains$Update,
      callback: BodyResponseCallback<Schema$Domain>
    ): void;
    update(callback: BodyResponseCallback<Schema$Domain>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Domains$Update
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Domain> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Domains$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Domains$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Domain>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Domain>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Sites$Domains$Create
    extends StandardParameters {
    /**
     * Required. The parent to create the domain association for, in the format: <code>sites/<var>site-name</var></code>
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Domain;
  }
  export interface Params$Resource$Projects$Sites$Domains$Delete
    extends StandardParameters {
    /**
     * Required. The name of the domain association to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Sites$Domains$Get
    extends StandardParameters {
    /**
     * Required. The name of the domain configuration to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Sites$Domains$List
    extends StandardParameters {
    /**
     * The page size to return. Defaults to 50.
     */
    pageSize?: number;
    /**
     * The next_page_token from a previous request, if provided.
     */
    pageToken?: string;
    /**
     * Required. The parent for which to list domains, in the format: <code>sites/<var>site-name</var></code>
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Sites$Domains$Update
    extends StandardParameters {
    /**
     * Required. The name of the domain association to update or create, if an association doesn't already exist.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Domain;
  }

  export class Resource$Projects$Sites$Releases {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * firebasehosting.projects.sites.releases.create
     * @desc Creates a new release which makes the content of the specified version actively display on the appropriate URL(s).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
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
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.releases.create({
     *     // Required. The site that the release belongs to, in the format:
     *     // <code>sites/<var>site-name</var></code>
     *     parent: 'projects/my-project/sites/my-site',
     *     // The unique identifier for a version, in the format:
     *     // <code>/sites/<var>site-name</var>/versions/<var>versionID</var></code>
     *     // The <var>site-name</var> in this version identifier must match the
     *     // <var>site-name</var> in the `parent` parameter.
     *     // <br>
     *     // <br>This query parameter must be empty if the `type` field in the
     *     // request body is `SITE_DISABLE`.
     *     versionName: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "message": "my_message",
     *       //   "name": "my_name",
     *       //   "releaseTime": "my_releaseTime",
     *       //   "releaseUser": {},
     *       //   "type": "my_type",
     *       //   "version": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "message": "my_message",
     *   //   "name": "my_name",
     *   //   "releaseTime": "my_releaseTime",
     *   //   "releaseUser": {},
     *   //   "type": "my_type",
     *   //   "version": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebasehosting.projects.sites.releases.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The site that the release belongs to, in the format: <code>sites/<var>site-name</var></code>
     * @param {string=} params.versionName The unique identifier for a version, in the format: <code>/sites/<var>site-name</var>/versions/<var>versionID</var></code> The <var>site-name</var> in this version identifier must match the <var>site-name</var> in the `parent` parameter. <br> <br>This query parameter must be empty if the `type` field in the request body is `SITE_DISABLE`.
     * @param {().Release} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params: Params$Resource$Projects$Sites$Releases$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Sites$Releases$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Release>;
    create(
      params: Params$Resource$Projects$Sites$Releases$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Sites$Releases$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Release>,
      callback: BodyResponseCallback<Schema$Release>
    ): void;
    create(
      params: Params$Resource$Projects$Sites$Releases$Create,
      callback: BodyResponseCallback<Schema$Release>
    ): void;
    create(callback: BodyResponseCallback<Schema$Release>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Releases$Create
        | BodyResponseCallback<Schema$Release>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Release>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Release>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Release> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Releases$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Releases$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/releases').replace(
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
        createAPIRequest<Schema$Release>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Release>(parameters);
      }
    }

    /**
     * firebasehosting.projects.sites.releases.list
     * @desc Lists the releases that have been created on the specified site.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.releases.list({
     *     // The page size to return. Defaults to 100.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token from a previous request, if provided.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent for which to list files, in the format:
     *     // <code>sites/<var>site-name</var></code>
     *     parent: 'projects/my-project/sites/my-site',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "releases": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebasehosting.projects.sites.releases.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The page size to return. Defaults to 100.
     * @param {string=} params.pageToken The next_page_token from a previous request, if provided.
     * @param {string} params.parent Required. The parent for which to list files, in the format: <code>sites/<var>site-name</var></code>
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Projects$Sites$Releases$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Sites$Releases$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListReleasesResponse>;
    list(
      params: Params$Resource$Projects$Sites$Releases$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Sites$Releases$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListReleasesResponse>,
      callback: BodyResponseCallback<Schema$ListReleasesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Sites$Releases$List,
      callback: BodyResponseCallback<Schema$ListReleasesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListReleasesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Releases$List
        | BodyResponseCallback<Schema$ListReleasesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListReleasesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListReleasesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListReleasesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Releases$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Releases$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/releases').replace(
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
        createAPIRequest<Schema$ListReleasesResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListReleasesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Sites$Releases$Create
    extends StandardParameters {
    /**
     * Required. The site that the release belongs to, in the format: <code>sites/<var>site-name</var></code>
     */
    parent?: string;
    /**
     * The unique identifier for a version, in the format: <code>/sites/<var>site-name</var>/versions/<var>versionID</var></code> The <var>site-name</var> in this version identifier must match the <var>site-name</var> in the `parent` parameter. <br> <br>This query parameter must be empty if the `type` field in the request body is `SITE_DISABLE`.
     */
    versionName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Release;
  }
  export interface Params$Resource$Projects$Sites$Releases$List
    extends StandardParameters {
    /**
     * The page size to return. Defaults to 100.
     */
    pageSize?: number;
    /**
     * The next_page_token from a previous request, if provided.
     */
    pageToken?: string;
    /**
     * Required. The parent for which to list files, in the format: <code>sites/<var>site-name</var></code>
     */
    parent?: string;
  }

  export class Resource$Projects$Sites$Versions {
    context: APIRequestContext;
    files: Resource$Projects$Sites$Versions$Files;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.files = new Resource$Projects$Sites$Versions$Files(this.context);
    }

    /**
     * firebasehosting.projects.sites.versions.create
     * @desc Creates a new version for a site.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
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
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.versions.create({
     *     // Required. The parent to create the version for, in the format:
     *     // <code>sites/<var>site-name</var></code>
     *     parent: 'projects/my-project/sites/my-site',
     *     // The self-reported size of the version. This value is used for a pre-emptive
     *     // quota check for legacy version uploads.
     *     sizeBytes: 'placeholder-value',
     *     // A unique id for the new version. This is only specified for legacy version
     *     // creations.
     *     versionId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "config": {},
     *       //   "createTime": "my_createTime",
     *       //   "createUser": {},
     *       //   "deleteTime": "my_deleteTime",
     *       //   "deleteUser": {},
     *       //   "fileCount": "my_fileCount",
     *       //   "finalizeTime": "my_finalizeTime",
     *       //   "finalizeUser": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "preview": {},
     *       //   "status": "my_status",
     *       //   "versionBytes": "my_versionBytes"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "config": {},
     *   //   "createTime": "my_createTime",
     *   //   "createUser": {},
     *   //   "deleteTime": "my_deleteTime",
     *   //   "deleteUser": {},
     *   //   "fileCount": "my_fileCount",
     *   //   "finalizeTime": "my_finalizeTime",
     *   //   "finalizeUser": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "preview": {},
     *   //   "status": "my_status",
     *   //   "versionBytes": "my_versionBytes"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebasehosting.projects.sites.versions.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The parent to create the version for, in the format: <code>sites/<var>site-name</var></code>
     * @param {string=} params.sizeBytes The self-reported size of the version. This value is used for a pre-emptive quota check for legacy version uploads.
     * @param {string=} params.versionId A unique id for the new version. This is only specified for legacy version creations.
     * @param {().Version} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params: Params$Resource$Projects$Sites$Versions$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Sites$Versions$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Version>;
    create(
      params: Params$Resource$Projects$Sites$Versions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Sites$Versions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Version>,
      callback: BodyResponseCallback<Schema$Version>
    ): void;
    create(
      params: Params$Resource$Projects$Sites$Versions$Create,
      callback: BodyResponseCallback<Schema$Version>
    ): void;
    create(callback: BodyResponseCallback<Schema$Version>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Versions$Create
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Version> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Versions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Versions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/versions').replace(
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
        createAPIRequest<Schema$Version>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Version>(parameters);
      }
    }

    /**
     * firebasehosting.projects.sites.versions.delete
     * @desc Deletes the specified version.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
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
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.versions.delete({
     *     // Required. The name of the version to be deleted, in the format:
     *     // <code>sites/<var>site-name</var>/versions/<var>versionID</var></code>
     *     name: 'projects/my-project/sites/my-site/versions/my-version',
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
     * @alias firebasehosting.projects.sites.versions.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the version to be deleted, in the format: <code>sites/<var>site-name</var>/versions/<var>versionID</var></code>
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Projects$Sites$Versions$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Sites$Versions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Sites$Versions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Sites$Versions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Sites$Versions$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Versions$Delete
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
        {}) as Params$Resource$Projects$Sites$Versions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Versions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * firebasehosting.projects.sites.versions.list
     * @desc Lists the versions that have been created on the specified site. Will include filtering in the future.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.versions.list({
     *     // The filter string used to return a subset of versions in the response.
     *     // Currently supported fields for filtering are: name, status,
     *     // and create_time. Filter processing will be implemented in accordance
     *     // with go/filtering.
     *     filter: 'placeholder-value',
     *     // The maximum number of versions to return. The service may return fewer than
     *     // this value.
     *     // If unspecified, at most 25 versions will be returned.
     *     // The maximum value is 100; values above 100 will be coerced to 100
     *     pageSize: 'placeholder-value',
     *     // The next_page_token from a previous request, if provided.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent for which to list files, in the format:
     *     // <code>sites/<var>site-name</var></code>
     *     parent: 'projects/my-project/sites/my-site',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "versions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebasehosting.projects.sites.versions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The filter string used to return a subset of versions in the response. Currently supported fields for filtering are: name, status, and create_time. Filter processing will be implemented in accordance with go/filtering.
     * @param {integer=} params.pageSize The maximum number of versions to return. The service may return fewer than this value. If unspecified, at most 25 versions will be returned. The maximum value is 100; values above 100 will be coerced to 100
     * @param {string=} params.pageToken The next_page_token from a previous request, if provided.
     * @param {string} params.parent Required. The parent for which to list files, in the format: <code>sites/<var>site-name</var></code>
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Projects$Sites$Versions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Sites$Versions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListVersionsResponse>;
    list(
      params: Params$Resource$Projects$Sites$Versions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Sites$Versions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListVersionsResponse>,
      callback: BodyResponseCallback<Schema$ListVersionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Sites$Versions$List,
      callback: BodyResponseCallback<Schema$ListVersionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListVersionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Versions$List
        | BodyResponseCallback<Schema$ListVersionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListVersionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListVersionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListVersionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Versions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Versions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/versions').replace(
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
        createAPIRequest<Schema$ListVersionsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListVersionsResponse>(parameters);
      }
    }

    /**
     * firebasehosting.projects.sites.versions.patch
     * @desc Updates the specified metadata for a version. Note that this method will fail with `FAILED_PRECONDITION` in the event of an invalid state transition. The only valid transition for a version is currently from a `CREATED` status to a `FINALIZED` status. Use [`DeleteVersion`](../sites.versions/delete) to set the status of a version to `DELETED`.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
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
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.versions.patch({
     *     // The unique identifier for a version, in the format:
     *     // <code>sites/<var>site-name</var>/versions/<var>versionID</var></code>
     *     // This name is provided in the response body when you call the
     *     // [`CreateVersion`](../sites.versions/create) endpoint.
     *     name: 'projects/my-project/sites/my-site/versions/my-version',
     *     // A set of field names from your [version](../sites.versions) that you want
     *     // to update.
     *     // <br>A field will be overwritten if, and only if, it's in the mask.
     *     // <br>If a mask is not provided then a default mask of only
     *     // [`status`](../sites.versions#Version.FIELDS.status) will be used.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "config": {},
     *       //   "createTime": "my_createTime",
     *       //   "createUser": {},
     *       //   "deleteTime": "my_deleteTime",
     *       //   "deleteUser": {},
     *       //   "fileCount": "my_fileCount",
     *       //   "finalizeTime": "my_finalizeTime",
     *       //   "finalizeUser": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "preview": {},
     *       //   "status": "my_status",
     *       //   "versionBytes": "my_versionBytes"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "config": {},
     *   //   "createTime": "my_createTime",
     *   //   "createUser": {},
     *   //   "deleteTime": "my_deleteTime",
     *   //   "deleteUser": {},
     *   //   "fileCount": "my_fileCount",
     *   //   "finalizeTime": "my_finalizeTime",
     *   //   "finalizeUser": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "preview": {},
     *   //   "status": "my_status",
     *   //   "versionBytes": "my_versionBytes"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebasehosting.projects.sites.versions.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The unique identifier for a version, in the format: <code>sites/<var>site-name</var>/versions/<var>versionID</var></code> This name is provided in the response body when you call the [`CreateVersion`](../sites.versions/create) endpoint.
     * @param {string=} params.updateMask A set of field names from your [version](../sites.versions) that you want to update. <br>A field will be overwritten if, and only if, it's in the mask. <br>If a mask is not provided then a default mask of only [`status`](../sites.versions#Version.FIELDS.status) will be used.
     * @param {().Version} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params: Params$Resource$Projects$Sites$Versions$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Sites$Versions$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Version>;
    patch(
      params: Params$Resource$Projects$Sites$Versions$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Sites$Versions$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Version>,
      callback: BodyResponseCallback<Schema$Version>
    ): void;
    patch(
      params: Params$Resource$Projects$Sites$Versions$Patch,
      callback: BodyResponseCallback<Schema$Version>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Version>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Versions$Patch
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Version> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Versions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Versions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
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
        createAPIRequest<Schema$Version>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Version>(parameters);
      }
    }

    /**
     * firebasehosting.projects.sites.versions.populateFiles
     * @desc Adds content files to a version.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
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
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.versions.populateFiles({
     *     // Required. The version to add files to, in the format:
     *     // <code>sites/<var>site-name</var>/versions/<var>versionID</var></code>
     *     parent: 'projects/my-project/sites/my-site/versions/my-version',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "files": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "uploadRequiredHashes": [],
     *   //   "uploadUrl": "my_uploadUrl"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebasehosting.projects.sites.versions.populateFiles
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The version to add files to, in the format: <code>sites/<var>site-name</var>/versions/<var>versionID</var></code>
     * @param {().PopulateVersionFilesRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    populateFiles(
      params: Params$Resource$Projects$Sites$Versions$Populatefiles,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    populateFiles(
      params?: Params$Resource$Projects$Sites$Versions$Populatefiles,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PopulateVersionFilesResponse>;
    populateFiles(
      params: Params$Resource$Projects$Sites$Versions$Populatefiles,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    populateFiles(
      params: Params$Resource$Projects$Sites$Versions$Populatefiles,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PopulateVersionFilesResponse>,
      callback: BodyResponseCallback<Schema$PopulateVersionFilesResponse>
    ): void;
    populateFiles(
      params: Params$Resource$Projects$Sites$Versions$Populatefiles,
      callback: BodyResponseCallback<Schema$PopulateVersionFilesResponse>
    ): void;
    populateFiles(
      callback: BodyResponseCallback<Schema$PopulateVersionFilesResponse>
    ): void;
    populateFiles(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Versions$Populatefiles
        | BodyResponseCallback<Schema$PopulateVersionFilesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PopulateVersionFilesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PopulateVersionFilesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$PopulateVersionFilesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Versions$Populatefiles;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Versions$Populatefiles;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}:populateFiles').replace(
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
        createAPIRequest<Schema$PopulateVersionFilesResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$PopulateVersionFilesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Sites$Versions$Create
    extends StandardParameters {
    /**
     * Required. The parent to create the version for, in the format: <code>sites/<var>site-name</var></code>
     */
    parent?: string;
    /**
     * The self-reported size of the version. This value is used for a pre-emptive quota check for legacy version uploads.
     */
    sizeBytes?: string;
    /**
     * A unique id for the new version. This is only specified for legacy version creations.
     */
    versionId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Version;
  }
  export interface Params$Resource$Projects$Sites$Versions$Delete
    extends StandardParameters {
    /**
     * Required. The name of the version to be deleted, in the format: <code>sites/<var>site-name</var>/versions/<var>versionID</var></code>
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Sites$Versions$List
    extends StandardParameters {
    /**
     * The filter string used to return a subset of versions in the response. Currently supported fields for filtering are: name, status, and create_time. Filter processing will be implemented in accordance with go/filtering.
     */
    filter?: string;
    /**
     * The maximum number of versions to return. The service may return fewer than this value. If unspecified, at most 25 versions will be returned. The maximum value is 100; values above 100 will be coerced to 100
     */
    pageSize?: number;
    /**
     * The next_page_token from a previous request, if provided.
     */
    pageToken?: string;
    /**
     * Required. The parent for which to list files, in the format: <code>sites/<var>site-name</var></code>
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Sites$Versions$Patch
    extends StandardParameters {
    /**
     * The unique identifier for a version, in the format: <code>sites/<var>site-name</var>/versions/<var>versionID</var></code> This name is provided in the response body when you call the [`CreateVersion`](../sites.versions/create) endpoint.
     */
    name?: string;
    /**
     * A set of field names from your [version](../sites.versions) that you want to update. <br>A field will be overwritten if, and only if, it's in the mask. <br>If a mask is not provided then a default mask of only [`status`](../sites.versions#Version.FIELDS.status) will be used.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Version;
  }
  export interface Params$Resource$Projects$Sites$Versions$Populatefiles
    extends StandardParameters {
    /**
     * Required. The version to add files to, in the format: <code>sites/<var>site-name</var>/versions/<var>versionID</var></code>
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PopulateVersionFilesRequest;
  }

  export class Resource$Projects$Sites$Versions$Files {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * firebasehosting.projects.sites.versions.files.list
     * @desc Lists the remaining files to be uploaded for the specified version.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.versions.files.list({
     *     // The page size to return. Defaults to 1000.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token from a previous request, if provided. This will be the
     *     // encoded version of a firebase.hosting.proto.metadata.ListFilesPageToken.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent to list files for, in the format:
     *     // <code>sites/<var>site-name</var>/versions/<var>versionID</var></code>
     *     parent: 'projects/my-project/sites/my-site/versions/my-version',
     *     // The type of files in the version that should be listed.
     *     status: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "files": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebasehosting.projects.sites.versions.files.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The page size to return. Defaults to 1000.
     * @param {string=} params.pageToken The next_page_token from a previous request, if provided. This will be the encoded version of a firebase.hosting.proto.metadata.ListFilesPageToken.
     * @param {string} params.parent Required. The parent to list files for, in the format: <code>sites/<var>site-name</var>/versions/<var>versionID</var></code>
     * @param {string=} params.status The type of files in the version that should be listed.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Projects$Sites$Versions$Files$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Sites$Versions$Files$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListVersionFilesResponse>;
    list(
      params: Params$Resource$Projects$Sites$Versions$Files$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Sites$Versions$Files$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListVersionFilesResponse>,
      callback: BodyResponseCallback<Schema$ListVersionFilesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Sites$Versions$Files$List,
      callback: BodyResponseCallback<Schema$ListVersionFilesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListVersionFilesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Versions$Files$List
        | BodyResponseCallback<Schema$ListVersionFilesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListVersionFilesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListVersionFilesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListVersionFilesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Versions$Files$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Versions$Files$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/files').replace(
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
        createAPIRequest<Schema$ListVersionFilesResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListVersionFilesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Sites$Versions$Files$List
    extends StandardParameters {
    /**
     * The page size to return. Defaults to 1000.
     */
    pageSize?: number;
    /**
     * The next_page_token from a previous request, if provided. This will be the encoded version of a firebase.hosting.proto.metadata.ListFilesPageToken.
     */
    pageToken?: string;
    /**
     * Required. The parent to list files for, in the format: <code>sites/<var>site-name</var>/versions/<var>versionID</var></code>
     */
    parent?: string;
    /**
     * The type of files in the version that should be listed.
     */
    status?: string;
  }

  export class Resource$Sites {
    context: APIRequestContext;
    channels: Resource$Sites$Channels;
    domains: Resource$Sites$Domains;
    releases: Resource$Sites$Releases;
    versions: Resource$Sites$Versions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.channels = new Resource$Sites$Channels(this.context);
      this.domains = new Resource$Sites$Domains(this.context);
      this.releases = new Resource$Sites$Releases(this.context);
      this.versions = new Resource$Sites$Versions(this.context);
    }

    /**
     * firebasehosting.sites.getConfig
     * @desc Gets the Hosting metadata for a specific site.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.getConfig({
     *     // Required. The site for which to get the SiteConfig, in the format:
     *     // <code>sites/<var>site-name</var>/config</code>
     *     name: 'sites/my-site/config',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cloudLoggingEnabled": false,
     *   //   "maxVersions": "my_maxVersions"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebasehosting.sites.getConfig
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The site for which to get the SiteConfig, in the format: <code>sites/<var>site-name</var>/config</code>
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getConfig(
      params: Params$Resource$Sites$Getconfig,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getConfig(
      params?: Params$Resource$Sites$Getconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SiteConfig>;
    getConfig(
      params: Params$Resource$Sites$Getconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getConfig(
      params: Params$Resource$Sites$Getconfig,
      options: MethodOptions | BodyResponseCallback<Schema$SiteConfig>,
      callback: BodyResponseCallback<Schema$SiteConfig>
    ): void;
    getConfig(
      params: Params$Resource$Sites$Getconfig,
      callback: BodyResponseCallback<Schema$SiteConfig>
    ): void;
    getConfig(callback: BodyResponseCallback<Schema$SiteConfig>): void;
    getConfig(
      paramsOrCallback?:
        | Params$Resource$Sites$Getconfig
        | BodyResponseCallback<Schema$SiteConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SiteConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SiteConfig>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SiteConfig> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Sites$Getconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Getconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
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
        createAPIRequest<Schema$SiteConfig>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$SiteConfig>(parameters);
      }
    }

    /**
     * firebasehosting.sites.updateConfig
     * @desc Sets the Hosting metadata for a specific site.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
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
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.updateConfig({
     *     // Required. The site for which to update the SiteConfig, in the format:
     *     // <code>sites/<var>site-name</var>/config</code>
     *     name: 'sites/my-site/config',
     *     // A set of field names from your [site configuration](../sites.SiteConfig)
     *     // that you want to update.
     *     // <br>A field will be overwritten if, and only if, it's in the mask.
     *     // <br>If a mask is not provided then a default mask of only
     *     // [`max_versions`](../sites.SiteConfig.max_versions) will be used.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "cloudLoggingEnabled": false,
     *       //   "maxVersions": "my_maxVersions"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cloudLoggingEnabled": false,
     *   //   "maxVersions": "my_maxVersions"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebasehosting.sites.updateConfig
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The site for which to update the SiteConfig, in the format: <code>sites/<var>site-name</var>/config</code>
     * @param {string=} params.updateMask A set of field names from your [site configuration](../sites.SiteConfig) that you want to update. <br>A field will be overwritten if, and only if, it's in the mask. <br>If a mask is not provided then a default mask of only [`max_versions`](../sites.SiteConfig.max_versions) will be used.
     * @param {().SiteConfig} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateConfig(
      params: Params$Resource$Sites$Updateconfig,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateConfig(
      params?: Params$Resource$Sites$Updateconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SiteConfig>;
    updateConfig(
      params: Params$Resource$Sites$Updateconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateConfig(
      params: Params$Resource$Sites$Updateconfig,
      options: MethodOptions | BodyResponseCallback<Schema$SiteConfig>,
      callback: BodyResponseCallback<Schema$SiteConfig>
    ): void;
    updateConfig(
      params: Params$Resource$Sites$Updateconfig,
      callback: BodyResponseCallback<Schema$SiteConfig>
    ): void;
    updateConfig(callback: BodyResponseCallback<Schema$SiteConfig>): void;
    updateConfig(
      paramsOrCallback?:
        | Params$Resource$Sites$Updateconfig
        | BodyResponseCallback<Schema$SiteConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SiteConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SiteConfig>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SiteConfig> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Sites$Updateconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Updateconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
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
        createAPIRequest<Schema$SiteConfig>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$SiteConfig>(parameters);
      }
    }
  }

  export interface Params$Resource$Sites$Getconfig extends StandardParameters {
    /**
     * Required. The site for which to get the SiteConfig, in the format: <code>sites/<var>site-name</var>/config</code>
     */
    name?: string;
  }
  export interface Params$Resource$Sites$Updateconfig
    extends StandardParameters {
    /**
     * Required. The site for which to update the SiteConfig, in the format: <code>sites/<var>site-name</var>/config</code>
     */
    name?: string;
    /**
     * A set of field names from your [site configuration](../sites.SiteConfig) that you want to update. <br>A field will be overwritten if, and only if, it's in the mask. <br>If a mask is not provided then a default mask of only [`max_versions`](../sites.SiteConfig.max_versions) will be used.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SiteConfig;
  }

  export class Resource$Sites$Channels {
    context: APIRequestContext;
    releases: Resource$Sites$Channels$Releases;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.releases = new Resource$Sites$Channels$Releases(this.context);
    }
  }

  export class Resource$Sites$Channels$Releases {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * firebasehosting.sites.channels.releases.create
     * @desc Creates a new release which makes the content of the specified version actively display on the appropriate URL(s).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
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
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.channels.releases.create({
     *     // Required. The site that the release belongs to, in the format:
     *     // <code>sites/<var>site-name</var></code>
     *     parent: 'sites/my-site/channels/my-channel',
     *     // The unique identifier for a version, in the format:
     *     // <code>/sites/<var>site-name</var>/versions/<var>versionID</var></code>
     *     // The <var>site-name</var> in this version identifier must match the
     *     // <var>site-name</var> in the `parent` parameter.
     *     // <br>
     *     // <br>This query parameter must be empty if the `type` field in the
     *     // request body is `SITE_DISABLE`.
     *     versionName: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "message": "my_message",
     *       //   "name": "my_name",
     *       //   "releaseTime": "my_releaseTime",
     *       //   "releaseUser": {},
     *       //   "type": "my_type",
     *       //   "version": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "message": "my_message",
     *   //   "name": "my_name",
     *   //   "releaseTime": "my_releaseTime",
     *   //   "releaseUser": {},
     *   //   "type": "my_type",
     *   //   "version": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebasehosting.sites.channels.releases.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The site that the release belongs to, in the format: <code>sites/<var>site-name</var></code>
     * @param {string=} params.versionName The unique identifier for a version, in the format: <code>/sites/<var>site-name</var>/versions/<var>versionID</var></code> The <var>site-name</var> in this version identifier must match the <var>site-name</var> in the `parent` parameter. <br> <br>This query parameter must be empty if the `type` field in the request body is `SITE_DISABLE`.
     * @param {().Release} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params: Params$Resource$Sites$Channels$Releases$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Sites$Channels$Releases$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Release>;
    create(
      params: Params$Resource$Sites$Channels$Releases$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Sites$Channels$Releases$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Release>,
      callback: BodyResponseCallback<Schema$Release>
    ): void;
    create(
      params: Params$Resource$Sites$Channels$Releases$Create,
      callback: BodyResponseCallback<Schema$Release>
    ): void;
    create(callback: BodyResponseCallback<Schema$Release>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Sites$Channels$Releases$Create
        | BodyResponseCallback<Schema$Release>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Release>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Release>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Release> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Sites$Channels$Releases$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Channels$Releases$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/releases').replace(
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
        createAPIRequest<Schema$Release>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Release>(parameters);
      }
    }

    /**
     * firebasehosting.sites.channels.releases.list
     * @desc Lists the releases that have been created on the specified site.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.channels.releases.list({
     *     // The page size to return. Defaults to 100.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token from a previous request, if provided.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent for which to list files, in the format:
     *     // <code>sites/<var>site-name</var></code>
     *     parent: 'sites/my-site/channels/my-channel',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "releases": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebasehosting.sites.channels.releases.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The page size to return. Defaults to 100.
     * @param {string=} params.pageToken The next_page_token from a previous request, if provided.
     * @param {string} params.parent Required. The parent for which to list files, in the format: <code>sites/<var>site-name</var></code>
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Sites$Channels$Releases$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Sites$Channels$Releases$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListReleasesResponse>;
    list(
      params: Params$Resource$Sites$Channels$Releases$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Sites$Channels$Releases$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListReleasesResponse>,
      callback: BodyResponseCallback<Schema$ListReleasesResponse>
    ): void;
    list(
      params: Params$Resource$Sites$Channels$Releases$List,
      callback: BodyResponseCallback<Schema$ListReleasesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListReleasesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Sites$Channels$Releases$List
        | BodyResponseCallback<Schema$ListReleasesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListReleasesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListReleasesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListReleasesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Sites$Channels$Releases$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Channels$Releases$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/releases').replace(
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
        createAPIRequest<Schema$ListReleasesResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListReleasesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Sites$Channels$Releases$Create
    extends StandardParameters {
    /**
     * Required. The site that the release belongs to, in the format: <code>sites/<var>site-name</var></code>
     */
    parent?: string;
    /**
     * The unique identifier for a version, in the format: <code>/sites/<var>site-name</var>/versions/<var>versionID</var></code> The <var>site-name</var> in this version identifier must match the <var>site-name</var> in the `parent` parameter. <br> <br>This query parameter must be empty if the `type` field in the request body is `SITE_DISABLE`.
     */
    versionName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Release;
  }
  export interface Params$Resource$Sites$Channels$Releases$List
    extends StandardParameters {
    /**
     * The page size to return. Defaults to 100.
     */
    pageSize?: number;
    /**
     * The next_page_token from a previous request, if provided.
     */
    pageToken?: string;
    /**
     * Required. The parent for which to list files, in the format: <code>sites/<var>site-name</var></code>
     */
    parent?: string;
  }

  export class Resource$Sites$Domains {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * firebasehosting.sites.domains.create
     * @desc Creates a domain mapping on the specified site.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
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
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.domains.create({
     *     // Required. The parent to create the domain association for, in the format:
     *     // <code>sites/<var>site-name</var></code>
     *     parent: 'sites/my-site',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "domainName": "my_domainName",
     *       //   "domainRedirect": {},
     *       //   "provisioning": {},
     *       //   "site": "my_site",
     *       //   "status": "my_status",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "domainName": "my_domainName",
     *   //   "domainRedirect": {},
     *   //   "provisioning": {},
     *   //   "site": "my_site",
     *   //   "status": "my_status",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebasehosting.sites.domains.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The parent to create the domain association for, in the format: <code>sites/<var>site-name</var></code>
     * @param {().Domain} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params: Params$Resource$Sites$Domains$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Sites$Domains$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Domain>;
    create(
      params: Params$Resource$Sites$Domains$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Sites$Domains$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Domain>,
      callback: BodyResponseCallback<Schema$Domain>
    ): void;
    create(
      params: Params$Resource$Sites$Domains$Create,
      callback: BodyResponseCallback<Schema$Domain>
    ): void;
    create(callback: BodyResponseCallback<Schema$Domain>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Sites$Domains$Create
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Domain> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Sites$Domains$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Domains$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/domains').replace(
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
        createAPIRequest<Schema$Domain>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Domain>(parameters);
      }
    }

    /**
     * firebasehosting.sites.domains.delete
     * @desc Deletes the existing domain mapping on the specified site.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
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
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.domains.delete({
     *     // Required. The name of the domain association to delete.
     *     name: 'sites/my-site/domains/my-domain',
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
     * @alias firebasehosting.sites.domains.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the domain association to delete.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Sites$Domains$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Sites$Domains$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Sites$Domains$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Sites$Domains$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Sites$Domains$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Sites$Domains$Delete
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
        {}) as Params$Resource$Sites$Domains$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Domains$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * firebasehosting.sites.domains.get
     * @desc Gets a domain mapping on the specified site.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.domains.get({
     *     // Required. The name of the domain configuration to get.
     *     name: 'sites/my-site/domains/my-domain',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "domainName": "my_domainName",
     *   //   "domainRedirect": {},
     *   //   "provisioning": {},
     *   //   "site": "my_site",
     *   //   "status": "my_status",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebasehosting.sites.domains.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the domain configuration to get.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Sites$Domains$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Sites$Domains$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Domain>;
    get(
      params: Params$Resource$Sites$Domains$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Sites$Domains$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Domain>,
      callback: BodyResponseCallback<Schema$Domain>
    ): void;
    get(
      params: Params$Resource$Sites$Domains$Get,
      callback: BodyResponseCallback<Schema$Domain>
    ): void;
    get(callback: BodyResponseCallback<Schema$Domain>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Sites$Domains$Get
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Domain> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Sites$Domains$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Domains$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
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
        createAPIRequest<Schema$Domain>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Domain>(parameters);
      }
    }

    /**
     * firebasehosting.sites.domains.list
     * @desc Lists the domains for the specified site.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.domains.list({
     *     // The page size to return. Defaults to 50.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token from a previous request, if provided.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent for which to list domains, in the format:
     *     // <code>sites/<var>site-name</var></code>
     *     parent: 'sites/my-site',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "domains": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebasehosting.sites.domains.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The page size to return. Defaults to 50.
     * @param {string=} params.pageToken The next_page_token from a previous request, if provided.
     * @param {string} params.parent Required. The parent for which to list domains, in the format: <code>sites/<var>site-name</var></code>
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Sites$Domains$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Sites$Domains$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDomainsResponse>;
    list(
      params: Params$Resource$Sites$Domains$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Sites$Domains$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListDomainsResponse>,
      callback: BodyResponseCallback<Schema$ListDomainsResponse>
    ): void;
    list(
      params: Params$Resource$Sites$Domains$List,
      callback: BodyResponseCallback<Schema$ListDomainsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDomainsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Sites$Domains$List
        | BodyResponseCallback<Schema$ListDomainsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDomainsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDomainsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListDomainsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Sites$Domains$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Domains$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/domains').replace(
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
        createAPIRequest<Schema$ListDomainsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListDomainsResponse>(parameters);
      }
    }

    /**
     * firebasehosting.sites.domains.update
     * @desc Updates the specified domain mapping, creating the mapping as if it does not exist.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
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
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.domains.update({
     *     // Required. The name of the domain association to update or create, if an
     *     // association doesn't already exist.
     *     name: 'sites/my-site/domains/my-domain',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "domainName": "my_domainName",
     *       //   "domainRedirect": {},
     *       //   "provisioning": {},
     *       //   "site": "my_site",
     *       //   "status": "my_status",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "domainName": "my_domainName",
     *   //   "domainRedirect": {},
     *   //   "provisioning": {},
     *   //   "site": "my_site",
     *   //   "status": "my_status",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebasehosting.sites.domains.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the domain association to update or create, if an association doesn't already exist.
     * @param {().Domain} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params: Params$Resource$Sites$Domains$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Sites$Domains$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Domain>;
    update(
      params: Params$Resource$Sites$Domains$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Sites$Domains$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Domain>,
      callback: BodyResponseCallback<Schema$Domain>
    ): void;
    update(
      params: Params$Resource$Sites$Domains$Update,
      callback: BodyResponseCallback<Schema$Domain>
    ): void;
    update(callback: BodyResponseCallback<Schema$Domain>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Sites$Domains$Update
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Domain> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Sites$Domains$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Domains$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Domain>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Domain>(parameters);
      }
    }
  }

  export interface Params$Resource$Sites$Domains$Create
    extends StandardParameters {
    /**
     * Required. The parent to create the domain association for, in the format: <code>sites/<var>site-name</var></code>
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Domain;
  }
  export interface Params$Resource$Sites$Domains$Delete
    extends StandardParameters {
    /**
     * Required. The name of the domain association to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Sites$Domains$Get
    extends StandardParameters {
    /**
     * Required. The name of the domain configuration to get.
     */
    name?: string;
  }
  export interface Params$Resource$Sites$Domains$List
    extends StandardParameters {
    /**
     * The page size to return. Defaults to 50.
     */
    pageSize?: number;
    /**
     * The next_page_token from a previous request, if provided.
     */
    pageToken?: string;
    /**
     * Required. The parent for which to list domains, in the format: <code>sites/<var>site-name</var></code>
     */
    parent?: string;
  }
  export interface Params$Resource$Sites$Domains$Update
    extends StandardParameters {
    /**
     * Required. The name of the domain association to update or create, if an association doesn't already exist.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Domain;
  }

  export class Resource$Sites$Releases {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * firebasehosting.sites.releases.create
     * @desc Creates a new release which makes the content of the specified version actively display on the appropriate URL(s).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
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
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.releases.create({
     *     // Required. The site that the release belongs to, in the format:
     *     // <code>sites/<var>site-name</var></code>
     *     parent: 'sites/my-site',
     *     // The unique identifier for a version, in the format:
     *     // <code>/sites/<var>site-name</var>/versions/<var>versionID</var></code>
     *     // The <var>site-name</var> in this version identifier must match the
     *     // <var>site-name</var> in the `parent` parameter.
     *     // <br>
     *     // <br>This query parameter must be empty if the `type` field in the
     *     // request body is `SITE_DISABLE`.
     *     versionName: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "message": "my_message",
     *       //   "name": "my_name",
     *       //   "releaseTime": "my_releaseTime",
     *       //   "releaseUser": {},
     *       //   "type": "my_type",
     *       //   "version": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "message": "my_message",
     *   //   "name": "my_name",
     *   //   "releaseTime": "my_releaseTime",
     *   //   "releaseUser": {},
     *   //   "type": "my_type",
     *   //   "version": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebasehosting.sites.releases.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The site that the release belongs to, in the format: <code>sites/<var>site-name</var></code>
     * @param {string=} params.versionName The unique identifier for a version, in the format: <code>/sites/<var>site-name</var>/versions/<var>versionID</var></code> The <var>site-name</var> in this version identifier must match the <var>site-name</var> in the `parent` parameter. <br> <br>This query parameter must be empty if the `type` field in the request body is `SITE_DISABLE`.
     * @param {().Release} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params: Params$Resource$Sites$Releases$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Sites$Releases$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Release>;
    create(
      params: Params$Resource$Sites$Releases$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Sites$Releases$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Release>,
      callback: BodyResponseCallback<Schema$Release>
    ): void;
    create(
      params: Params$Resource$Sites$Releases$Create,
      callback: BodyResponseCallback<Schema$Release>
    ): void;
    create(callback: BodyResponseCallback<Schema$Release>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Sites$Releases$Create
        | BodyResponseCallback<Schema$Release>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Release>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Release>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Release> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Sites$Releases$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Releases$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/releases').replace(
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
        createAPIRequest<Schema$Release>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Release>(parameters);
      }
    }

    /**
     * firebasehosting.sites.releases.list
     * @desc Lists the releases that have been created on the specified site.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.releases.list({
     *     // The page size to return. Defaults to 100.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token from a previous request, if provided.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent for which to list files, in the format:
     *     // <code>sites/<var>site-name</var></code>
     *     parent: 'sites/my-site',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "releases": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebasehosting.sites.releases.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The page size to return. Defaults to 100.
     * @param {string=} params.pageToken The next_page_token from a previous request, if provided.
     * @param {string} params.parent Required. The parent for which to list files, in the format: <code>sites/<var>site-name</var></code>
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Sites$Releases$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Sites$Releases$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListReleasesResponse>;
    list(
      params: Params$Resource$Sites$Releases$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Sites$Releases$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListReleasesResponse>,
      callback: BodyResponseCallback<Schema$ListReleasesResponse>
    ): void;
    list(
      params: Params$Resource$Sites$Releases$List,
      callback: BodyResponseCallback<Schema$ListReleasesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListReleasesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Sites$Releases$List
        | BodyResponseCallback<Schema$ListReleasesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListReleasesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListReleasesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListReleasesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Sites$Releases$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Releases$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/releases').replace(
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
        createAPIRequest<Schema$ListReleasesResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListReleasesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Sites$Releases$Create
    extends StandardParameters {
    /**
     * Required. The site that the release belongs to, in the format: <code>sites/<var>site-name</var></code>
     */
    parent?: string;
    /**
     * The unique identifier for a version, in the format: <code>/sites/<var>site-name</var>/versions/<var>versionID</var></code> The <var>site-name</var> in this version identifier must match the <var>site-name</var> in the `parent` parameter. <br> <br>This query parameter must be empty if the `type` field in the request body is `SITE_DISABLE`.
     */
    versionName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Release;
  }
  export interface Params$Resource$Sites$Releases$List
    extends StandardParameters {
    /**
     * The page size to return. Defaults to 100.
     */
    pageSize?: number;
    /**
     * The next_page_token from a previous request, if provided.
     */
    pageToken?: string;
    /**
     * Required. The parent for which to list files, in the format: <code>sites/<var>site-name</var></code>
     */
    parent?: string;
  }

  export class Resource$Sites$Versions {
    context: APIRequestContext;
    files: Resource$Sites$Versions$Files;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.files = new Resource$Sites$Versions$Files(this.context);
    }

    /**
     * firebasehosting.sites.versions.create
     * @desc Creates a new version for a site.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
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
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.versions.create({
     *     // Required. The parent to create the version for, in the format:
     *     // <code>sites/<var>site-name</var></code>
     *     parent: 'sites/my-site',
     *     // The self-reported size of the version. This value is used for a pre-emptive
     *     // quota check for legacy version uploads.
     *     sizeBytes: 'placeholder-value',
     *     // A unique id for the new version. This is only specified for legacy version
     *     // creations.
     *     versionId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "config": {},
     *       //   "createTime": "my_createTime",
     *       //   "createUser": {},
     *       //   "deleteTime": "my_deleteTime",
     *       //   "deleteUser": {},
     *       //   "fileCount": "my_fileCount",
     *       //   "finalizeTime": "my_finalizeTime",
     *       //   "finalizeUser": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "preview": {},
     *       //   "status": "my_status",
     *       //   "versionBytes": "my_versionBytes"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "config": {},
     *   //   "createTime": "my_createTime",
     *   //   "createUser": {},
     *   //   "deleteTime": "my_deleteTime",
     *   //   "deleteUser": {},
     *   //   "fileCount": "my_fileCount",
     *   //   "finalizeTime": "my_finalizeTime",
     *   //   "finalizeUser": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "preview": {},
     *   //   "status": "my_status",
     *   //   "versionBytes": "my_versionBytes"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebasehosting.sites.versions.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The parent to create the version for, in the format: <code>sites/<var>site-name</var></code>
     * @param {string=} params.sizeBytes The self-reported size of the version. This value is used for a pre-emptive quota check for legacy version uploads.
     * @param {string=} params.versionId A unique id for the new version. This is only specified for legacy version creations.
     * @param {().Version} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params: Params$Resource$Sites$Versions$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Sites$Versions$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Version>;
    create(
      params: Params$Resource$Sites$Versions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Sites$Versions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Version>,
      callback: BodyResponseCallback<Schema$Version>
    ): void;
    create(
      params: Params$Resource$Sites$Versions$Create,
      callback: BodyResponseCallback<Schema$Version>
    ): void;
    create(callback: BodyResponseCallback<Schema$Version>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Sites$Versions$Create
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Version> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Sites$Versions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Versions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/versions').replace(
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
        createAPIRequest<Schema$Version>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Version>(parameters);
      }
    }

    /**
     * firebasehosting.sites.versions.delete
     * @desc Deletes the specified version.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
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
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.versions.delete({
     *     // Required. The name of the version to be deleted, in the format:
     *     // <code>sites/<var>site-name</var>/versions/<var>versionID</var></code>
     *     name: 'sites/my-site/versions/my-version',
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
     * @alias firebasehosting.sites.versions.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the version to be deleted, in the format: <code>sites/<var>site-name</var>/versions/<var>versionID</var></code>
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Sites$Versions$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Sites$Versions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Sites$Versions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Sites$Versions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Sites$Versions$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Sites$Versions$Delete
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
        {}) as Params$Resource$Sites$Versions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Versions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * firebasehosting.sites.versions.list
     * @desc Lists the versions that have been created on the specified site. Will include filtering in the future.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.versions.list({
     *     // The filter string used to return a subset of versions in the response.
     *     // Currently supported fields for filtering are: name, status,
     *     // and create_time. Filter processing will be implemented in accordance
     *     // with go/filtering.
     *     filter: 'placeholder-value',
     *     // The maximum number of versions to return. The service may return fewer than
     *     // this value.
     *     // If unspecified, at most 25 versions will be returned.
     *     // The maximum value is 100; values above 100 will be coerced to 100
     *     pageSize: 'placeholder-value',
     *     // The next_page_token from a previous request, if provided.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent for which to list files, in the format:
     *     // <code>sites/<var>site-name</var></code>
     *     parent: 'sites/my-site',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "versions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebasehosting.sites.versions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The filter string used to return a subset of versions in the response. Currently supported fields for filtering are: name, status, and create_time. Filter processing will be implemented in accordance with go/filtering.
     * @param {integer=} params.pageSize The maximum number of versions to return. The service may return fewer than this value. If unspecified, at most 25 versions will be returned. The maximum value is 100; values above 100 will be coerced to 100
     * @param {string=} params.pageToken The next_page_token from a previous request, if provided.
     * @param {string} params.parent Required. The parent for which to list files, in the format: <code>sites/<var>site-name</var></code>
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Sites$Versions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Sites$Versions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListVersionsResponse>;
    list(
      params: Params$Resource$Sites$Versions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Sites$Versions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListVersionsResponse>,
      callback: BodyResponseCallback<Schema$ListVersionsResponse>
    ): void;
    list(
      params: Params$Resource$Sites$Versions$List,
      callback: BodyResponseCallback<Schema$ListVersionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListVersionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Sites$Versions$List
        | BodyResponseCallback<Schema$ListVersionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListVersionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListVersionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListVersionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Sites$Versions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Versions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/versions').replace(
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
        createAPIRequest<Schema$ListVersionsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListVersionsResponse>(parameters);
      }
    }

    /**
     * firebasehosting.sites.versions.patch
     * @desc Updates the specified metadata for a version. Note that this method will fail with `FAILED_PRECONDITION` in the event of an invalid state transition. The only valid transition for a version is currently from a `CREATED` status to a `FINALIZED` status. Use [`DeleteVersion`](../sites.versions/delete) to set the status of a version to `DELETED`.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
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
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.versions.patch({
     *     // The unique identifier for a version, in the format:
     *     // <code>sites/<var>site-name</var>/versions/<var>versionID</var></code>
     *     // This name is provided in the response body when you call the
     *     // [`CreateVersion`](../sites.versions/create) endpoint.
     *     name: 'sites/my-site/versions/my-version',
     *     // A set of field names from your [version](../sites.versions) that you want
     *     // to update.
     *     // <br>A field will be overwritten if, and only if, it's in the mask.
     *     // <br>If a mask is not provided then a default mask of only
     *     // [`status`](../sites.versions#Version.FIELDS.status) will be used.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "config": {},
     *       //   "createTime": "my_createTime",
     *       //   "createUser": {},
     *       //   "deleteTime": "my_deleteTime",
     *       //   "deleteUser": {},
     *       //   "fileCount": "my_fileCount",
     *       //   "finalizeTime": "my_finalizeTime",
     *       //   "finalizeUser": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "preview": {},
     *       //   "status": "my_status",
     *       //   "versionBytes": "my_versionBytes"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "config": {},
     *   //   "createTime": "my_createTime",
     *   //   "createUser": {},
     *   //   "deleteTime": "my_deleteTime",
     *   //   "deleteUser": {},
     *   //   "fileCount": "my_fileCount",
     *   //   "finalizeTime": "my_finalizeTime",
     *   //   "finalizeUser": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "preview": {},
     *   //   "status": "my_status",
     *   //   "versionBytes": "my_versionBytes"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebasehosting.sites.versions.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The unique identifier for a version, in the format: <code>sites/<var>site-name</var>/versions/<var>versionID</var></code> This name is provided in the response body when you call the [`CreateVersion`](../sites.versions/create) endpoint.
     * @param {string=} params.updateMask A set of field names from your [version](../sites.versions) that you want to update. <br>A field will be overwritten if, and only if, it's in the mask. <br>If a mask is not provided then a default mask of only [`status`](../sites.versions#Version.FIELDS.status) will be used.
     * @param {().Version} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params: Params$Resource$Sites$Versions$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Sites$Versions$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Version>;
    patch(
      params: Params$Resource$Sites$Versions$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Sites$Versions$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Version>,
      callback: BodyResponseCallback<Schema$Version>
    ): void;
    patch(
      params: Params$Resource$Sites$Versions$Patch,
      callback: BodyResponseCallback<Schema$Version>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Version>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Sites$Versions$Patch
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Version> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Sites$Versions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Versions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
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
        createAPIRequest<Schema$Version>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Version>(parameters);
      }
    }

    /**
     * firebasehosting.sites.versions.populateFiles
     * @desc Adds content files to a version.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
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
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.versions.populateFiles({
     *     // Required. The version to add files to, in the format:
     *     // <code>sites/<var>site-name</var>/versions/<var>versionID</var></code>
     *     parent: 'sites/my-site/versions/my-version',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "files": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "uploadRequiredHashes": [],
     *   //   "uploadUrl": "my_uploadUrl"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebasehosting.sites.versions.populateFiles
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The version to add files to, in the format: <code>sites/<var>site-name</var>/versions/<var>versionID</var></code>
     * @param {().PopulateVersionFilesRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    populateFiles(
      params: Params$Resource$Sites$Versions$Populatefiles,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    populateFiles(
      params?: Params$Resource$Sites$Versions$Populatefiles,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PopulateVersionFilesResponse>;
    populateFiles(
      params: Params$Resource$Sites$Versions$Populatefiles,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    populateFiles(
      params: Params$Resource$Sites$Versions$Populatefiles,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PopulateVersionFilesResponse>,
      callback: BodyResponseCallback<Schema$PopulateVersionFilesResponse>
    ): void;
    populateFiles(
      params: Params$Resource$Sites$Versions$Populatefiles,
      callback: BodyResponseCallback<Schema$PopulateVersionFilesResponse>
    ): void;
    populateFiles(
      callback: BodyResponseCallback<Schema$PopulateVersionFilesResponse>
    ): void;
    populateFiles(
      paramsOrCallback?:
        | Params$Resource$Sites$Versions$Populatefiles
        | BodyResponseCallback<Schema$PopulateVersionFilesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PopulateVersionFilesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PopulateVersionFilesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$PopulateVersionFilesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Sites$Versions$Populatefiles;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Versions$Populatefiles;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}:populateFiles').replace(
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
        createAPIRequest<Schema$PopulateVersionFilesResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$PopulateVersionFilesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Sites$Versions$Create
    extends StandardParameters {
    /**
     * Required. The parent to create the version for, in the format: <code>sites/<var>site-name</var></code>
     */
    parent?: string;
    /**
     * The self-reported size of the version. This value is used for a pre-emptive quota check for legacy version uploads.
     */
    sizeBytes?: string;
    /**
     * A unique id for the new version. This is only specified for legacy version creations.
     */
    versionId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Version;
  }
  export interface Params$Resource$Sites$Versions$Delete
    extends StandardParameters {
    /**
     * Required. The name of the version to be deleted, in the format: <code>sites/<var>site-name</var>/versions/<var>versionID</var></code>
     */
    name?: string;
  }
  export interface Params$Resource$Sites$Versions$List
    extends StandardParameters {
    /**
     * The filter string used to return a subset of versions in the response. Currently supported fields for filtering are: name, status, and create_time. Filter processing will be implemented in accordance with go/filtering.
     */
    filter?: string;
    /**
     * The maximum number of versions to return. The service may return fewer than this value. If unspecified, at most 25 versions will be returned. The maximum value is 100; values above 100 will be coerced to 100
     */
    pageSize?: number;
    /**
     * The next_page_token from a previous request, if provided.
     */
    pageToken?: string;
    /**
     * Required. The parent for which to list files, in the format: <code>sites/<var>site-name</var></code>
     */
    parent?: string;
  }
  export interface Params$Resource$Sites$Versions$Patch
    extends StandardParameters {
    /**
     * The unique identifier for a version, in the format: <code>sites/<var>site-name</var>/versions/<var>versionID</var></code> This name is provided in the response body when you call the [`CreateVersion`](../sites.versions/create) endpoint.
     */
    name?: string;
    /**
     * A set of field names from your [version](../sites.versions) that you want to update. <br>A field will be overwritten if, and only if, it's in the mask. <br>If a mask is not provided then a default mask of only [`status`](../sites.versions#Version.FIELDS.status) will be used.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Version;
  }
  export interface Params$Resource$Sites$Versions$Populatefiles
    extends StandardParameters {
    /**
     * Required. The version to add files to, in the format: <code>sites/<var>site-name</var>/versions/<var>versionID</var></code>
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PopulateVersionFilesRequest;
  }

  export class Resource$Sites$Versions$Files {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * firebasehosting.sites.versions.files.list
     * @desc Lists the remaining files to be uploaded for the specified version.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.versions.files.list({
     *     // The page size to return. Defaults to 1000.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token from a previous request, if provided. This will be the
     *     // encoded version of a firebase.hosting.proto.metadata.ListFilesPageToken.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent to list files for, in the format:
     *     // <code>sites/<var>site-name</var>/versions/<var>versionID</var></code>
     *     parent: 'sites/my-site/versions/my-version',
     *     // The type of files in the version that should be listed.
     *     status: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "files": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias firebasehosting.sites.versions.files.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The page size to return. Defaults to 1000.
     * @param {string=} params.pageToken The next_page_token from a previous request, if provided. This will be the encoded version of a firebase.hosting.proto.metadata.ListFilesPageToken.
     * @param {string} params.parent Required. The parent to list files for, in the format: <code>sites/<var>site-name</var>/versions/<var>versionID</var></code>
     * @param {string=} params.status The type of files in the version that should be listed.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Sites$Versions$Files$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Sites$Versions$Files$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListVersionFilesResponse>;
    list(
      params: Params$Resource$Sites$Versions$Files$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Sites$Versions$Files$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListVersionFilesResponse>,
      callback: BodyResponseCallback<Schema$ListVersionFilesResponse>
    ): void;
    list(
      params: Params$Resource$Sites$Versions$Files$List,
      callback: BodyResponseCallback<Schema$ListVersionFilesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListVersionFilesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Sites$Versions$Files$List
        | BodyResponseCallback<Schema$ListVersionFilesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListVersionFilesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListVersionFilesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListVersionFilesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Sites$Versions$Files$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Versions$Files$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/files').replace(
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
        createAPIRequest<Schema$ListVersionFilesResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListVersionFilesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Sites$Versions$Files$List
    extends StandardParameters {
    /**
     * The page size to return. Defaults to 1000.
     */
    pageSize?: number;
    /**
     * The next_page_token from a previous request, if provided. This will be the encoded version of a firebase.hosting.proto.metadata.ListFilesPageToken.
     */
    pageToken?: string;
    /**
     * Required. The parent to list files for, in the format: <code>sites/<var>site-name</var>/versions/<var>versionID</var></code>
     */
    parent?: string;
    /**
     * The type of files in the version that should be listed.
     */
    status?: string;
  }
}
