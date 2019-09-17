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

export namespace firebasehosting_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
  }

  interface StandardParameters {
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
    sites: Resource$Sites;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

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
   * A [`header`](/docs/hosting/full-config#headers) defines custom headers to add to a response should the request URL path match the pattern.
   */
  export interface Schema$Header {
    /**
     * The user-supplied [glob pattern](/docs/hosting/full-config#glob_pattern_matching) to match against the request URL path.
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
   * A [`redirect`](/docs/hosting/full-config#redirects) represents the configuration for returning an HTTP redirect response given a matching request URL path.
   */
  export interface Schema$Redirect {
    /**
     * The user-supplied [glob pattern](/docs/hosting/full-config#glob_pattern_matching) to match against the request URL path.
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
   * A [`rewrite`](/docs/hosting/full-config#rewrites) represents an internal content rewrite on the version. If the pattern matches, the request will be handled as if it were to the destination path specified in the configuration.
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
     * The user-supplied [glob pattern](/docs/hosting/full-config#glob_pattern_matching) to match against the request URL path.
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
   * The configuration for how incoming requests to a site should be routed and processed before serving content. The patterns are matched and applied according to a specific [priority order](/docs/hosting/full-config#hosting_priority_order).
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
     * A list of custom response headers that are added to the content if the request URL path matches the glob.
     */
    headers?: Schema$Header[];
    /**
     * A list of globs that will cause the response to redirect to another location.
     */
    redirects?: Schema$Redirect[];
    /**
     * A list of rewrites that will act as if the service were given the destination URL.
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
     * The number of FINALIZED versions that will be held for a site before automatic deletion. When a new version is deployed, content for versions in storage in excess of this number will be deleted, and will no longer be billed for storage usage. Oldest versions will be deleted first; sites are created with an unlimited number of max_versions by default.
     */
    maxVersions?: string | null;
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

  export class Resource$Sites {
    context: APIRequestContext;
    domains: Resource$Sites$Domains;
    releases: Resource$Sites$Releases;
    versions: Resource$Sites$Versions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.domains = new Resource$Sites$Domains(this.context);
      this.releases = new Resource$Sites$Releases(this.context);
      this.versions = new Resource$Sites$Versions(this.context);
    }

    /**
     * firebasehosting.sites.getConfig
     * @desc Gets the Hosting metadata for a specific site.
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
      params?: Params$Resource$Sites$Getconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SiteConfig>;
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
        | BodyResponseCallback<Schema$SiteConfig>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SiteConfig>,
      callback?: BodyResponseCallback<Schema$SiteConfig>
    ): void | GaxiosPromise<Schema$SiteConfig> {
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
        createAPIRequest<Schema$SiteConfig>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SiteConfig>(parameters);
      }
    }

    /**
     * firebasehosting.sites.updateConfig
     * @desc Sets the Hosting metadata for a specific site.
     * @alias firebasehosting.sites.updateConfig
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The site for which to update the SiteConfig, in the format: <code>sites/<var>site-name</var>/config</code>
     * @param {string=} params.updateMask A set of field names from your [site configuration](../sites.SiteConfig) that you want to update. <br>A field will be overwritten if, and only if, it's in the mask. <br>If a mask is not provided then a default mask of only [`max_versions`](../sites.SiteConfig.max_versions) will be used.
     * @param {().SiteConfig} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateConfig(
      params?: Params$Resource$Sites$Updateconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SiteConfig>;
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
        | BodyResponseCallback<Schema$SiteConfig>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SiteConfig>,
      callback?: BodyResponseCallback<Schema$SiteConfig>
    ): void | GaxiosPromise<Schema$SiteConfig> {
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
        createAPIRequest<Schema$SiteConfig>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SiteConfig>(parameters);
      }
    }
  }

  export interface Params$Resource$Sites$Getconfig extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The site for which to get the SiteConfig, in the format: <code>sites/<var>site-name</var>/config</code>
     */
    name?: string;
  }
  export interface Params$Resource$Sites$Updateconfig
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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

  export class Resource$Sites$Domains {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * firebasehosting.sites.domains.create
     * @desc Creates a domain mapping on the specified site.
     * @alias firebasehosting.sites.domains.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The parent to create the domain association for, in the format: <code>sites/<var>site-name</var></code>
     * @param {().Domain} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Sites$Domains$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Domain>;
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
        | BodyResponseCallback<Schema$Domain>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Domain>,
      callback?: BodyResponseCallback<Schema$Domain>
    ): void | GaxiosPromise<Schema$Domain> {
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
        createAPIRequest<Schema$Domain>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Domain>(parameters);
      }
    }

    /**
     * firebasehosting.sites.domains.delete
     * @desc Deletes the existing domain mapping on the specified site.
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
      params?: Params$Resource$Sites$Domains$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
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
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * firebasehosting.sites.domains.get
     * @desc Gets a domain mapping on the specified site.
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
      params?: Params$Resource$Sites$Domains$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Domain>;
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
        | BodyResponseCallback<Schema$Domain>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Domain>,
      callback?: BodyResponseCallback<Schema$Domain>
    ): void | GaxiosPromise<Schema$Domain> {
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
        createAPIRequest<Schema$Domain>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Domain>(parameters);
      }
    }

    /**
     * firebasehosting.sites.domains.list
     * @desc Lists the domains for the specified site.
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
      params?: Params$Resource$Sites$Domains$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDomainsResponse>;
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
        | BodyResponseCallback<Schema$ListDomainsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDomainsResponse>,
      callback?: BodyResponseCallback<Schema$ListDomainsResponse>
    ): void | GaxiosPromise<Schema$ListDomainsResponse> {
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
        createAPIRequest<Schema$ListDomainsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListDomainsResponse>(parameters);
      }
    }

    /**
     * firebasehosting.sites.domains.update
     * @desc Updates the specified domain mapping, creating the mapping as if it does not exist.
     * @alias firebasehosting.sites.domains.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the domain association to update or create, if an association doesn't already exist.
     * @param {().Domain} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Sites$Domains$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Domain>;
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
        | BodyResponseCallback<Schema$Domain>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Domain>,
      callback?: BodyResponseCallback<Schema$Domain>
    ): void | GaxiosPromise<Schema$Domain> {
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
        createAPIRequest<Schema$Domain>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Domain>(parameters);
      }
    }
  }

  export interface Params$Resource$Sites$Domains$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the domain association to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Sites$Domains$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the domain configuration to get.
     */
    name?: string;
  }
  export interface Params$Resource$Sites$Domains$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * @desc Creates a new release which makes the content of the specified version actively display on the site.
     * @alias firebasehosting.sites.releases.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The site that the release belongs to, in the format: <code>sites/<var>site-name</var></code>
     * @param {string=} params.versionName The unique identifier for a version, in the format: <code>/sites/<var>site-name</var>/versions/<var>versionID</var></code> The <var>site-name</var> in this version identifier must match the <var>site-name</var> in the `parent` parameter. <br> <br>This query parameter must be empty if the `type` field in the request body is `SITE_DISABLE`.
     * @param {().Release} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Sites$Releases$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Release>;
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
        | BodyResponseCallback<Schema$Release>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Release>,
      callback?: BodyResponseCallback<Schema$Release>
    ): void | GaxiosPromise<Schema$Release> {
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
        createAPIRequest<Schema$Release>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Release>(parameters);
      }
    }

    /**
     * firebasehosting.sites.releases.list
     * @desc Lists the releases that have been created on the specified site.
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
      params?: Params$Resource$Sites$Releases$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListReleasesResponse>;
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
        | BodyResponseCallback<Schema$ListReleasesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListReleasesResponse>,
      callback?: BodyResponseCallback<Schema$ListReleasesResponse>
    ): void | GaxiosPromise<Schema$ListReleasesResponse> {
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
        createAPIRequest<Schema$ListReleasesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListReleasesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Sites$Releases$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The site that the release belongs to, in the format: <code>sites/<var>site-name</var></code>
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * @alias firebasehosting.sites.versions.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The parent to create the version for, in the format: <code>sites/<var>site-name</var></code>
     * @param {string=} params.sizeBytes The self-reported size of the version. This value is used for a pre-emptive quota check for legacy version uploads.
     * @param {string=} params.versionId A unique id for the new version. This is only specified for legacy version creations.
     * @param {().Version} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Sites$Versions$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Version>;
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
        | BodyResponseCallback<Schema$Version>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Version>,
      callback?: BodyResponseCallback<Schema$Version>
    ): void | GaxiosPromise<Schema$Version> {
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
        createAPIRequest<Schema$Version>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Version>(parameters);
      }
    }

    /**
     * firebasehosting.sites.versions.delete
     * @desc Deletes the specified version.
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
      params?: Params$Resource$Sites$Versions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
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
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * firebasehosting.sites.versions.patch
     * @desc Updates the specified metadata for a version. Note that this method will fail with `FAILED_PRECONDITION` in the event of an invalid state transition. The only valid transition for a version is currently from a `CREATED` status to a `FINALIZED` status. Use [`DeleteVersion`](../sites.versions/delete) to set the status of a version to `DELETED`.
     * @alias firebasehosting.sites.versions.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The unique identifier for a version, in the format: <code>sites/<var>site-name</var>/versions/<var>versionID</var></code> This name is provided in the response body when you call the [`CreateVersion`](../sites.versions/create) endpoint.
     * @param {string=} params.updateMask A set of field names from your [version](../sites.versions) that you want to update. <br>A field will be overwritten if, and only if, it's in the mask. <br>If a mask is not provided then a default mask of only [`status`](../sites.versions#Version.FIELDS.status) will be used.
     * @param {().Version} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Sites$Versions$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Version>;
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
        | BodyResponseCallback<Schema$Version>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Version>,
      callback?: BodyResponseCallback<Schema$Version>
    ): void | GaxiosPromise<Schema$Version> {
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
        createAPIRequest<Schema$Version>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Version>(parameters);
      }
    }

    /**
     * firebasehosting.sites.versions.populateFiles
     * @desc Adds content files to a version.
     * @alias firebasehosting.sites.versions.populateFiles
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The version to add files to, in the format: <code>sites/<var>site-name</var>/versions/<var>versionID</var></code>
     * @param {().PopulateVersionFilesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    populateFiles(
      params?: Params$Resource$Sites$Versions$Populatefiles,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PopulateVersionFilesResponse>;
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
        | BodyResponseCallback<Schema$PopulateVersionFilesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PopulateVersionFilesResponse>,
      callback?: BodyResponseCallback<Schema$PopulateVersionFilesResponse>
    ): void | GaxiosPromise<Schema$PopulateVersionFilesResponse> {
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
          callback
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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the version to be deleted, in the format: <code>sites/<var>site-name</var>/versions/<var>versionID</var></code>
     */
    name?: string;
  }
  export interface Params$Resource$Sites$Versions$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
      params?: Params$Resource$Sites$Versions$Files$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListVersionFilesResponse>;
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
        | BodyResponseCallback<Schema$ListVersionFilesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListVersionFilesResponse>,
      callback?: BodyResponseCallback<Schema$ListVersionFilesResponse>
    ): void | GaxiosPromise<Schema$ListVersionFilesResponse> {
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
        createAPIRequest<Schema$ListVersionFilesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListVersionFilesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Sites$Versions$Files$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
