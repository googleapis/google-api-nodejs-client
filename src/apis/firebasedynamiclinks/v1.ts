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

export namespace firebasedynamiclinks_v1 {
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
   * Firebase Dynamic Links API
   *
   * Programmatically creates and manages Firebase Dynamic Links.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const firebasedynamiclinks = google.firebasedynamiclinks('v1');
   * ```
   */
  export class Firebasedynamiclinks {
    context: APIRequestContext;
    managedShortLinks: Resource$Managedshortlinks;
    shortLinks: Resource$Shortlinks;
    v1: Resource$V1;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.managedShortLinks = new Resource$Managedshortlinks(this.context);
      this.shortLinks = new Resource$Shortlinks(this.context);
      this.v1 = new Resource$V1(this.context);
    }
  }

  /**
   * Tracking parameters supported by Dynamic Link.
   */
  export interface Schema$AnalyticsInfo {
    /**
     * Google Play Campaign Measurements.
     */
    googlePlayAnalytics?: Schema$GooglePlayAnalytics;
    /**
     * iTunes Connect App Analytics.
     */
    itunesConnectAnalytics?: Schema$ITunesConnectAnalytics;
  }
  /**
   * Android related attributes to the Dynamic Link.
   */
  export interface Schema$AndroidInfo {
    /**
     * Link to open on Android if the app is not installed.
     */
    androidFallbackLink?: string | null;
    /**
     * If specified, this overrides the ‘link’ parameter on Android.
     */
    androidLink?: string | null;
    /**
     * Minimum version code for the Android app. If the installed app’s version code is lower, then the user is taken to the Play Store.
     */
    androidMinPackageVersionCode?: string | null;
    /**
     * Android package name of the app.
     */
    androidPackageName?: string | null;
  }
  /**
   * Request to create a managed Short Dynamic Link.
   */
  export interface Schema$CreateManagedShortLinkRequest {
    /**
     * Information about the Dynamic Link to be shortened. [Learn more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener).
     */
    dynamicLinkInfo?: Schema$DynamicLinkInfo;
    /**
     * Full long Dynamic Link URL with desired query parameters specified. For example, "https://sample.app.goo.gl/?link=http://www.google.com&apn=com.sample", [Learn more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener).
     */
    longDynamicLink?: string | null;
    /**
     * Link name to associate with the link. It's used for marketer to identify manually-created links in the Firebase console (https://console.firebase.google.com/). Links must be named to be tracked.
     */
    name?: string | null;
    /**
     * Google SDK version. Version takes the form "$major.$minor.$patch"
     */
    sdkVersion?: string | null;
    /**
     * Short Dynamic Link suffix. Optional.
     */
    suffix?: Schema$Suffix;
  }
  /**
   * Response to create a short Dynamic Link.
   */
  export interface Schema$CreateManagedShortLinkResponse {
    /**
     * Short Dynamic Link value. e.g. https://abcd.app.goo.gl/wxyz
     */
    managedShortLink?: Schema$ManagedShortLink;
    /**
     * Preview link to show the link flow chart. (debug info.)
     */
    previewLink?: string | null;
    /**
     * Information about potential warnings on link creation.
     */
    warning?: Schema$DynamicLinkWarning[];
  }
  /**
   * Request to create a short Dynamic Link.
   */
  export interface Schema$CreateShortDynamicLinkRequest {
    /**
     * Information about the Dynamic Link to be shortened. [Learn more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener).
     */
    dynamicLinkInfo?: Schema$DynamicLinkInfo;
    /**
     * Full long Dynamic Link URL with desired query parameters specified. For example, "https://sample.app.goo.gl/?link=http://www.google.com&apn=com.sample", [Learn more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener).
     */
    longDynamicLink?: string | null;
    /**
     * Google SDK version. Version takes the form "$major.$minor.$patch"
     */
    sdkVersion?: string | null;
    /**
     * Short Dynamic Link suffix. Optional.
     */
    suffix?: Schema$Suffix;
  }
  /**
   * Response to create a short Dynamic Link.
   */
  export interface Schema$CreateShortDynamicLinkResponse {
    /**
     * Preview link to show the link flow chart. (debug info.)
     */
    previewLink?: string | null;
    /**
     * Short Dynamic Link value. e.g. https://abcd.app.goo.gl/wxyz
     */
    shortLink?: string | null;
    /**
     * Information about potential warnings on link creation.
     */
    warning?: Schema$DynamicLinkWarning[];
  }
  /**
   * Desktop related attributes to the Dynamic Link.
   */
  export interface Schema$DesktopInfo {
    /**
     * Link to open on desktop.
     */
    desktopFallbackLink?: string | null;
  }
  /**
   * Signals associated with the device making the request.
   */
  export interface Schema$DeviceInfo {
    /**
     * Device model name.
     */
    deviceModelName?: string | null;
    /**
     * Device language code setting.
     */
    languageCode?: string | null;
    /**
     * Device language code setting obtained by executing JavaScript code in WebView.
     */
    languageCodeFromWebview?: string | null;
    /**
     * Device language code raw setting. iOS does returns language code in different format than iOS WebView. For example WebView returns en_US, but iOS returns en-US. Field below will return raw value returned by iOS.
     */
    languageCodeRaw?: string | null;
    /**
     * Device display resolution height.
     */
    screenResolutionHeight?: string | null;
    /**
     * Device display resolution width.
     */
    screenResolutionWidth?: string | null;
    /**
     * Device timezone setting.
     */
    timezone?: string | null;
  }
  /**
   * Dynamic Link event stat.
   */
  export interface Schema$DynamicLinkEventStat {
    /**
     * The number of times this event occurred.
     */
    count?: string | null;
    /**
     * Link event.
     */
    event?: string | null;
    /**
     * Requested platform.
     */
    platform?: string | null;
  }
  /**
   * Information about a Dynamic Link.
   */
  export interface Schema$DynamicLinkInfo {
    /**
     * Parameters used for tracking. See all tracking parameters in the [documentation](https://firebase.google.com/docs/dynamic-links/create-manually).
     */
    analyticsInfo?: Schema$AnalyticsInfo;
    /**
     * Android related information. See Android related parameters in the [documentation](https://firebase.google.com/docs/dynamic-links/create-manually).
     */
    androidInfo?: Schema$AndroidInfo;
    /**
     * Desktop related information. See desktop related parameters in the [documentation](https://firebase.google.com/docs/dynamic-links/create-manually).
     */
    desktopInfo?: Schema$DesktopInfo;
    /**
     * E.g. https://maps.app.goo.gl, https://maps.page.link, https://g.co/maps More examples can be found in description of getNormalizedUriPrefix in j/c/g/firebase/dynamiclinks/uri/DdlDomain.java Will fallback to dynamic_link_domain is this field is missing
     */
    domainUriPrefix?: string | null;
    /**
     * Dynamic Links domain that the project owns, e.g. abcd.app.goo.gl [Learn more](https://firebase.google.com/docs/dynamic-links/android/receive) on how to set up Dynamic Link domain associated with your Firebase project. Required if missing domain_uri_prefix.
     */
    dynamicLinkDomain?: string | null;
    /**
     * iOS related information. See iOS related parameters in the [documentation](https://firebase.google.com/docs/dynamic-links/create-manually).
     */
    iosInfo?: Schema$IosInfo;
    /**
     * The link your app will open, You can specify any URL your app can handle. This link must be a well-formatted URL, be properly URL-encoded, and use the HTTP or HTTPS scheme. See 'link' parameters in the [documentation](https://firebase.google.com/docs/dynamic-links/create-manually). Required.
     */
    link?: string | null;
    /**
     * Information of navigation behavior of a Firebase Dynamic Links.
     */
    navigationInfo?: Schema$NavigationInfo;
    /**
     * Parameters for social meta tag params. Used to set meta tag data for link previews on social sites.
     */
    socialMetaTagInfo?: Schema$SocialMetaTagInfo;
  }
  /**
   * Analytics stats of a Dynamic Link for a given timeframe.
   */
  export interface Schema$DynamicLinkStats {
    /**
     * Dynamic Link event stats.
     */
    linkEventStats?: Schema$DynamicLinkEventStat[];
    /**
     * Optional warnings associated this API request.
     */
    warnings?: Schema$DynamicLinkWarning[];
  }
  /**
   * Dynamic Links warning messages.
   */
  export interface Schema$DynamicLinkWarning {
    /**
     * The warning code.
     */
    warningCode?: string | null;
    /**
     * The document describing the warning, and helps resolve.
     */
    warningDocumentLink?: string | null;
    /**
     * The warning message to help developers improve their requests.
     */
    warningMessage?: string | null;
  }
  /**
   * Request for iSDK to execute strong match flow for post-install attribution. This is meant for iOS requests only. Requests from other platforms will not be honored.
   */
  export interface Schema$GetIosPostInstallAttributionRequest {
    /**
     * App installation epoch time (https://en.wikipedia.org/wiki/Unix_time). This is a client signal for a more accurate weak match.
     */
    appInstallationTime?: string | null;
    /**
     * APP bundle ID.
     */
    bundleId?: string | null;
    /**
     * Device information.
     */
    device?: Schema$DeviceInfo;
    /**
     * iOS version, ie: 9.3.5. Consider adding "build".
     */
    iosVersion?: string | null;
    /**
     * App post install attribution retrieval information. Disambiguates mechanism (iSDK or developer invoked) to retrieve payload from clicked link.
     */
    retrievalMethod?: string | null;
    /**
     * Google SDK version. Version takes the form "$major.$minor.$patch"
     */
    sdkVersion?: string | null;
    /**
     * Possible unique matched link that server need to check before performing device heuristics match. If passed link is short server need to expand the link. If link is long server need to vslidate the link.
     */
    uniqueMatchLinkToCheck?: string | null;
    /**
     * Strong match page information. Disambiguates between default UI and custom page to present when strong match succeeds/fails to find cookie.
     */
    visualStyle?: string | null;
  }
  /**
   * Response for iSDK to execute strong match flow for post-install attribution. Information of the resolved FDL link.
   */
  export interface Schema$GetIosPostInstallAttributionResponse {
    /**
     * The minimum version for app, specified by dev through ?imv= parameter. Return to iSDK to allow app to evaluate if current version meets this.
     */
    appMinimumVersion?: string | null;
    /**
     * The confidence of the returned attribution.
     */
    attributionConfidence?: string | null;
    /**
     * The deep-link attributed post-install via one of several techniques (device heuristics, copy unique).
     */
    deepLink?: string | null;
    /**
     * User-agent specific custom-scheme URIs for iSDK to open. This will be set according to the user-agent tha the click was originally made in. There is no Safari-equivalent custom-scheme open URLs. ie: googlechrome://www.example.com ie: firefox://open-url?url=http://www.example.com ie: opera-http://example.com
     */
    externalBrowserDestinationLink?: string | null;
    /**
     * The link to navigate to update the app if min version is not met. This is either (in order): 1) fallback link (from ?ifl= parameter, if specified by developer) or 2) AppStore URL (from ?isi= parameter, if specified), or 3) the payload link (from required link= parameter).
     */
    fallbackLink?: string | null;
    /**
     * Invitation ID attributed post-install via one of several techniques (device heuristics, copy unique).
     */
    invitationId?: string | null;
    /**
     * Instruction for iSDK to attemmpt to perform strong match. For instance, if browser does not support/allow cookie or outside of support browsers, this will be false.
     */
    isStrongMatchExecutable?: boolean | null;
    /**
     * Describes why match failed, ie: "discarded due to low confidence". This message will be publicly visible.
     */
    matchMessage?: string | null;
    /**
     * Entire FDL (short or long) attributed post-install via one of several techniques (device heuristics, copy unique).
     */
    requestedLink?: string | null;
    /**
     * Which IP version the request was made from.
     */
    requestIpVersion?: string | null;
    /**
     * The entire FDL, expanded from a short link. It is the same as the requested_link, if it is long. Parameters from this should not be used directly (ie: server can default utm_[campaign|medium|source] to a value when requested_link lack them, server determine the best fallback_link when requested_link specifies \>1 fallback links).
     */
    resolvedLink?: string | null;
    /**
     * Scion campaign value to be propagated by iSDK to Scion at post-install.
     */
    utmCampaign?: string | null;
    /**
     * Scion content value to be propagated by iSDK to Scion at app-reopen.
     */
    utmContent?: string | null;
    /**
     * Scion medium value to be propagated by iSDK to Scion at post-install.
     */
    utmMedium?: string | null;
    /**
     * Scion source value to be propagated by iSDK to Scion at post-install.
     */
    utmSource?: string | null;
    /**
     * Scion term value to be propagated by iSDK to Scion at app-reopen.
     */
    utmTerm?: string | null;
  }
  /**
   * Request for iSDK to get reopen attribution for app universal link open deeplinking. This endpoint is meant for only iOS requests.
   */
  export interface Schema$GetIosReopenAttributionRequest {
    /**
     * APP bundle ID.
     */
    bundleId?: string | null;
    /**
     * FDL link to be verified from an app universal link open. The FDL link can be one of: 1) short FDL. e.g. .page.link/, or 2) long FDL. e.g. .page.link/?{query params\}, or 3) Invite FDL. e.g. .page.link/i/
     */
    requestedLink?: string | null;
    /**
     * Google SDK version. Version takes the form "$major.$minor.$patch"
     */
    sdkVersion?: string | null;
  }
  /**
   * Response for iSDK to get reopen attribution for app universal link open deeplinking. This endpoint is meant for only iOS requests.
   */
  export interface Schema$GetIosReopenAttributionResponse {
    /**
     * The deep-link attributed the app universal link open. For both regular FDL links and invite FDL links.
     */
    deepLink?: string | null;
    /**
     * Optional invitation ID, for only invite typed requested FDL links.
     */
    invitationId?: string | null;
    /**
     * FDL input value of the "&imv=" parameter, minimum app version to be returned to Google Firebase SDK running on iOS-9.
     */
    iosMinAppVersion?: string | null;
    /**
     * The entire FDL, expanded from a short link. It is the same as the requested_link, if it is long.
     */
    resolvedLink?: string | null;
    /**
     * Scion campaign value to be propagated by iSDK to Scion at app-reopen.
     */
    utmCampaign?: string | null;
    /**
     * Scion content value to be propagated by iSDK to Scion at app-reopen.
     */
    utmContent?: string | null;
    /**
     * Scion medium value to be propagated by iSDK to Scion at app-reopen.
     */
    utmMedium?: string | null;
    /**
     * Scion source value to be propagated by iSDK to Scion at app-reopen.
     */
    utmSource?: string | null;
    /**
     * Scion term value to be propagated by iSDK to Scion at app-reopen.
     */
    utmTerm?: string | null;
    /**
     * Optional warnings associated this API request.
     */
    warning?: Schema$DynamicLinkWarning[];
  }
  /**
   * Parameters for Google Play Campaign Measurements. [Learn more](https://developers.google.com/analytics/devguides/collection/android/v4/campaigns#campaign-params)
   */
  export interface Schema$GooglePlayAnalytics {
    /**
     * Deprecated; FDL SDK does not process nor log it.
     */
    gclid?: string | null;
    /**
     * Campaign name; used for keyword analysis to identify a specific product promotion or strategic campaign.
     */
    utmCampaign?: string | null;
    /**
     * Campaign content; used for A/B testing and content-targeted ads to differentiate ads or links that point to the same URL.
     */
    utmContent?: string | null;
    /**
     * Campaign medium; used to identify a medium such as email or cost-per-click.
     */
    utmMedium?: string | null;
    /**
     * Campaign source; used to identify a search engine, newsletter, or other source.
     */
    utmSource?: string | null;
    /**
     * Campaign term; used with paid search to supply the keywords for ads.
     */
    utmTerm?: string | null;
  }
  /**
   * iOS related attributes to the Dynamic Link..
   */
  export interface Schema$IosInfo {
    /**
     * iOS App Store ID.
     */
    iosAppStoreId?: string | null;
    /**
     * iOS bundle ID of the app.
     */
    iosBundleId?: string | null;
    /**
     * Custom (destination) scheme to use for iOS. By default, we’ll use the bundle ID as the custom scheme. Developer can override this behavior using this param.
     */
    iosCustomScheme?: string | null;
    /**
     * Link to open on iOS if the app is not installed.
     */
    iosFallbackLink?: string | null;
    /**
     * iPad bundle ID of the app.
     */
    iosIpadBundleId?: string | null;
    /**
     * If specified, this overrides the ios_fallback_link value on iPads.
     */
    iosIpadFallbackLink?: string | null;
    /**
     * iOS minimum version.
     */
    iosMinimumVersion?: string | null;
  }
  /**
   * Parameters for iTunes Connect App Analytics.
   */
  export interface Schema$ITunesConnectAnalytics {
    /**
     * Affiliate token used to create affiliate-coded links.
     */
    at?: string | null;
    /**
     * Campaign text that developers can optionally add to any link in order to track sales from a specific marketing campaign.
     */
    ct?: string | null;
    /**
     * iTune media types, including music, podcasts, audiobooks and so on.
     */
    mt?: string | null;
    /**
     * Provider token that enables analytics for Dynamic Links from within iTunes Connect.
     */
    pt?: string | null;
  }
  /**
   * Managed Short Link.
   */
  export interface Schema$ManagedShortLink {
    /**
     * Creation timestamp of the short link.
     */
    creationTime?: string | null;
    /**
     * Attributes that have been flagged about this short url.
     */
    flaggedAttribute?: string[] | null;
    /**
     * Full Dyamic Link info
     */
    info?: Schema$DynamicLinkInfo;
    /**
     * Short durable link url, for example, "https://sample.app.goo.gl/xyz123". Required.
     */
    link?: string | null;
    /**
     * Link name defined by the creator. Required.
     */
    linkName?: string | null;
    /**
     * Visibility status of link.
     */
    visibility?: string | null;
  }
  /**
   * Information of navigation behavior.
   */
  export interface Schema$NavigationInfo {
    /**
     * If this option is on, FDL click will be forced to redirect rather than show an interstitial page.
     */
    enableForcedRedirect?: boolean | null;
  }
  /**
   * Parameters for social meta tag params. Used to set meta tag data for link previews on social sites.
   */
  export interface Schema$SocialMetaTagInfo {
    /**
     * A short description of the link. Optional.
     */
    socialDescription?: string | null;
    /**
     * An image url string. Optional.
     */
    socialImageLink?: string | null;
    /**
     * Title to be displayed. Optional.
     */
    socialTitle?: string | null;
  }
  /**
   * Short Dynamic Link suffix.
   */
  export interface Schema$Suffix {
    /**
     * Only applies to Option.CUSTOM.
     */
    customSuffix?: string | null;
    /**
     * Suffix option.
     */
    option?: string | null;
  }

  export class Resource$Managedshortlinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a managed short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. This differs from CreateShortDynamicLink in the following ways: - The request will also contain a name for the link (non unique name for the front end). - The response must be authenticated with an auth token (generated with the admin service account). - The link will appear in the FDL list of links in the console front end. The Dynamic Link domain in the request must be owned by requester's Firebase project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasedynamiclinks.googleapis.com
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
     * const firebasedynamiclinks = google.firebasedynamiclinks('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/firebase'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasedynamiclinks.managedShortLinks.create({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dynamicLinkInfo": {},
     *       //   "longDynamicLink": "my_longDynamicLink",
     *       //   "name": "my_name",
     *       //   "sdkVersion": "my_sdkVersion",
     *       //   "suffix": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "managedShortLink": {},
     *   //   "previewLink": "my_previewLink",
     *   //   "warning": []
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
      params: Params$Resource$Managedshortlinks$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Managedshortlinks$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CreateManagedShortLinkResponse>>;
    create(
      params: Params$Resource$Managedshortlinks$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Managedshortlinks$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CreateManagedShortLinkResponse>,
      callback: BodyResponseCallback<Schema$CreateManagedShortLinkResponse>
    ): void;
    create(
      params: Params$Resource$Managedshortlinks$Create,
      callback: BodyResponseCallback<Schema$CreateManagedShortLinkResponse>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$CreateManagedShortLinkResponse>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Managedshortlinks$Create
        | BodyResponseCallback<Schema$CreateManagedShortLinkResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CreateManagedShortLinkResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CreateManagedShortLinkResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CreateManagedShortLinkResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Managedshortlinks$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Managedshortlinks$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasedynamiclinks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/managedShortLinks:create').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$CreateManagedShortLinkResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CreateManagedShortLinkResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Managedshortlinks$Create
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateManagedShortLinkRequest;
  }

  export class Resource$Shortlinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. Repeated calls with the same long Dynamic Link or Dynamic Link information will produce the same short Dynamic Link. The Dynamic Link domain in the request must be owned by requester's Firebase project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasedynamiclinks.googleapis.com
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
     * const firebasedynamiclinks = google.firebasedynamiclinks('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/firebase'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasedynamiclinks.shortLinks.create({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dynamicLinkInfo": {},
     *       //   "longDynamicLink": "my_longDynamicLink",
     *       //   "sdkVersion": "my_sdkVersion",
     *       //   "suffix": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "previewLink": "my_previewLink",
     *   //   "shortLink": "my_shortLink",
     *   //   "warning": []
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
      params: Params$Resource$Shortlinks$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Shortlinks$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CreateShortDynamicLinkResponse>>;
    create(
      params: Params$Resource$Shortlinks$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Shortlinks$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CreateShortDynamicLinkResponse>,
      callback: BodyResponseCallback<Schema$CreateShortDynamicLinkResponse>
    ): void;
    create(
      params: Params$Resource$Shortlinks$Create,
      callback: BodyResponseCallback<Schema$CreateShortDynamicLinkResponse>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$CreateShortDynamicLinkResponse>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Shortlinks$Create
        | BodyResponseCallback<Schema$CreateShortDynamicLinkResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CreateShortDynamicLinkResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CreateShortDynamicLinkResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CreateShortDynamicLinkResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Shortlinks$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Shortlinks$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasedynamiclinks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/shortLinks').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$CreateShortDynamicLinkResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CreateShortDynamicLinkResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Shortlinks$Create
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateShortDynamicLinkRequest;
  }

  export class Resource$V1 {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Fetches analytics stats of a short Dynamic Link for a given duration. Metrics include number of clicks, redirects, installs, app first opens, and app reopens.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasedynamiclinks.googleapis.com
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
     * const firebasedynamiclinks = google.firebasedynamiclinks('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/firebase'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasedynamiclinks.getLinkStats({
     *     // The span of time requested in days.
     *     durationDays: 'placeholder-value',
     *     // Dynamic Link URL. e.g. https://abcd.app.goo.gl/wxyz
     *     dynamicLink: 'placeholder-value',
     *     // Google SDK version. Version takes the form "$major.$minor.$patch"
     *     sdkVersion: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "linkEventStats": [],
     *   //   "warnings": []
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
    getLinkStats(
      params: Params$Resource$V1$Getlinkstats,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getLinkStats(
      params?: Params$Resource$V1$Getlinkstats,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DynamicLinkStats>>;
    getLinkStats(
      params: Params$Resource$V1$Getlinkstats,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getLinkStats(
      params: Params$Resource$V1$Getlinkstats,
      options: MethodOptions | BodyResponseCallback<Schema$DynamicLinkStats>,
      callback: BodyResponseCallback<Schema$DynamicLinkStats>
    ): void;
    getLinkStats(
      params: Params$Resource$V1$Getlinkstats,
      callback: BodyResponseCallback<Schema$DynamicLinkStats>
    ): void;
    getLinkStats(callback: BodyResponseCallback<Schema$DynamicLinkStats>): void;
    getLinkStats(
      paramsOrCallback?:
        | Params$Resource$V1$Getlinkstats
        | BodyResponseCallback<Schema$DynamicLinkStats>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DynamicLinkStats>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DynamicLinkStats>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DynamicLinkStats>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$V1$Getlinkstats;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1$Getlinkstats;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasedynamiclinks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{dynamicLink}/linkStats').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['dynamicLink'],
        pathParams: ['dynamicLink'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DynamicLinkStats>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DynamicLinkStats>(parameters);
      }
    }

    /**
     * Get iOS strong/weak-match info for post-install attribution.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasedynamiclinks.googleapis.com
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
     * const firebasedynamiclinks = google.firebasedynamiclinks('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/firebase'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasedynamiclinks.installAttribution({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "appInstallationTime": "my_appInstallationTime",
     *       //   "bundleId": "my_bundleId",
     *       //   "device": {},
     *       //   "iosVersion": "my_iosVersion",
     *       //   "retrievalMethod": "my_retrievalMethod",
     *       //   "sdkVersion": "my_sdkVersion",
     *       //   "uniqueMatchLinkToCheck": "my_uniqueMatchLinkToCheck",
     *       //   "visualStyle": "my_visualStyle"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appMinimumVersion": "my_appMinimumVersion",
     *   //   "attributionConfidence": "my_attributionConfidence",
     *   //   "deepLink": "my_deepLink",
     *   //   "externalBrowserDestinationLink": "my_externalBrowserDestinationLink",
     *   //   "fallbackLink": "my_fallbackLink",
     *   //   "invitationId": "my_invitationId",
     *   //   "isStrongMatchExecutable": false,
     *   //   "matchMessage": "my_matchMessage",
     *   //   "requestIpVersion": "my_requestIpVersion",
     *   //   "requestedLink": "my_requestedLink",
     *   //   "resolvedLink": "my_resolvedLink",
     *   //   "utmCampaign": "my_utmCampaign",
     *   //   "utmContent": "my_utmContent",
     *   //   "utmMedium": "my_utmMedium",
     *   //   "utmSource": "my_utmSource",
     *   //   "utmTerm": "my_utmTerm"
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
    installAttribution(
      params: Params$Resource$V1$Installattribution,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    installAttribution(
      params?: Params$Resource$V1$Installattribution,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GetIosPostInstallAttributionResponse>
    >;
    installAttribution(
      params: Params$Resource$V1$Installattribution,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    installAttribution(
      params: Params$Resource$V1$Installattribution,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetIosPostInstallAttributionResponse>,
      callback: BodyResponseCallback<Schema$GetIosPostInstallAttributionResponse>
    ): void;
    installAttribution(
      params: Params$Resource$V1$Installattribution,
      callback: BodyResponseCallback<Schema$GetIosPostInstallAttributionResponse>
    ): void;
    installAttribution(
      callback: BodyResponseCallback<Schema$GetIosPostInstallAttributionResponse>
    ): void;
    installAttribution(
      paramsOrCallback?:
        | Params$Resource$V1$Installattribution
        | BodyResponseCallback<Schema$GetIosPostInstallAttributionResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetIosPostInstallAttributionResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetIosPostInstallAttributionResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GetIosPostInstallAttributionResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$V1$Installattribution;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1$Installattribution;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasedynamiclinks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/installAttribution').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$GetIosPostInstallAttributionResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetIosPostInstallAttributionResponse>(
          parameters
        );
      }
    }

    /**
     * Get iOS reopen attribution for app universal link open deeplinking.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasedynamiclinks.googleapis.com
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
     * const firebasedynamiclinks = google.firebasedynamiclinks('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/firebase'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasedynamiclinks.reopenAttribution({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "bundleId": "my_bundleId",
     *       //   "requestedLink": "my_requestedLink",
     *       //   "sdkVersion": "my_sdkVersion"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deepLink": "my_deepLink",
     *   //   "invitationId": "my_invitationId",
     *   //   "iosMinAppVersion": "my_iosMinAppVersion",
     *   //   "resolvedLink": "my_resolvedLink",
     *   //   "utmCampaign": "my_utmCampaign",
     *   //   "utmContent": "my_utmContent",
     *   //   "utmMedium": "my_utmMedium",
     *   //   "utmSource": "my_utmSource",
     *   //   "utmTerm": "my_utmTerm",
     *   //   "warning": []
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
    reopenAttribution(
      params: Params$Resource$V1$Reopenattribution,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    reopenAttribution(
      params?: Params$Resource$V1$Reopenattribution,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GetIosReopenAttributionResponse>>;
    reopenAttribution(
      params: Params$Resource$V1$Reopenattribution,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    reopenAttribution(
      params: Params$Resource$V1$Reopenattribution,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetIosReopenAttributionResponse>,
      callback: BodyResponseCallback<Schema$GetIosReopenAttributionResponse>
    ): void;
    reopenAttribution(
      params: Params$Resource$V1$Reopenattribution,
      callback: BodyResponseCallback<Schema$GetIosReopenAttributionResponse>
    ): void;
    reopenAttribution(
      callback: BodyResponseCallback<Schema$GetIosReopenAttributionResponse>
    ): void;
    reopenAttribution(
      paramsOrCallback?:
        | Params$Resource$V1$Reopenattribution
        | BodyResponseCallback<Schema$GetIosReopenAttributionResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetIosReopenAttributionResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetIosReopenAttributionResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GetIosReopenAttributionResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$V1$Reopenattribution;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1$Reopenattribution;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasedynamiclinks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/reopenAttribution').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$GetIosReopenAttributionResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetIosReopenAttributionResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$V1$Getlinkstats extends StandardParameters {
    /**
     * The span of time requested in days.
     */
    durationDays?: string;
    /**
     * Dynamic Link URL. e.g. https://abcd.app.goo.gl/wxyz
     */
    dynamicLink?: string;
    /**
     * Google SDK version. Version takes the form "$major.$minor.$patch"
     */
    sdkVersion?: string;
  }
  export interface Params$Resource$V1$Installattribution
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIosPostInstallAttributionRequest;
  }
  export interface Params$Resource$V1$Reopenattribution
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIosReopenAttributionRequest;
  }
}
