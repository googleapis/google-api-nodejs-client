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

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format

/**
 * Firebase Dynamic Links API
 *
 * Programmatically creates and manages Firebase Dynamic Links.
 *
 * @example
 * const google = require('googleapis');
 * const firebasedynamiclinks = google.firebasedynamiclinks('v1');
 *
 * @namespace firebasedynamiclinks
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Firebasedynamiclinks
 */
export class Firebasedynamiclinks {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  managedShortLinks: Resource$Managedshortlinks;
  shortLinks: Resource$Shortlinks;
  v1: Resource$V1;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.managedShortLinks = new Resource$Managedshortlinks(this);
    this.shortLinks = new Resource$Shortlinks(this);
    this.v1 = new Resource$V1(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * Tracking parameters supported by Dynamic Link.
 */
export interface Schema$AnalyticsInfo {
  /**
   * Google Play Campaign Measurements.
   */
  googlePlayAnalytics: Schema$GooglePlayAnalytics;
  /**
   * iTunes Connect App Analytics.
   */
  itunesConnectAnalytics: Schema$ITunesConnectAnalytics;
}
/**
 * Android related attributes to the Dynamic Link.
 */
export interface Schema$AndroidInfo {
  /**
   * Link to open on Android if the app is not installed.
   */
  androidFallbackLink: string;
  /**
   * If specified, this overrides the ‘link’ parameter on Android.
   */
  androidLink: string;
  /**
   * Minimum version code for the Android app. If the installed app’s version
   * code is lower, then the user is taken to the Play Store.
   */
  androidMinPackageVersionCode: string;
  /**
   * Android package name of the app.
   */
  androidPackageName: string;
}
/**
 * Request to create a managed Short Dynamic Link.
 */
export interface Schema$CreateManagedShortLinkRequest {
  /**
   * Information about the Dynamic Link to be shortened. [Learn
   * more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener).
   */
  dynamicLinkInfo: Schema$DynamicLinkInfo;
  /**
   * Full long Dynamic Link URL with desired query parameters specified. For
   * example,
   * &quot;https://sample.app.goo.gl/?link=http://www.google.com&amp;apn=com.sample&quot;,
   * [Learn
   * more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener).
   */
  longDynamicLink: string;
  /**
   * Link name to associate with the link. It&#39;s used for marketer to
   * identify manually-created links in the Firebase console
   * (https://console.firebase.google.com/). Links must be named to be tracked.
   */
  name: string;
  /**
   * Short Dynamic Link suffix. Optional.
   */
  suffix: Schema$Suffix;
}
/**
 * Response to create a short Dynamic Link.
 */
export interface Schema$CreateManagedShortLinkResponse {
  /**
   * Short Dynamic Link value. e.g. https://abcd.app.goo.gl/wxyz
   */
  managedShortLink: Schema$ManagedShortLink;
  /**
   * Preview link to show the link flow chart. (debug info.)
   */
  previewLink: string;
  /**
   * Information about potential warnings on link creation.
   */
  warning: Schema$DynamicLinkWarning[];
}
/**
 * Request to create a short Dynamic Link.
 */
export interface Schema$CreateShortDynamicLinkRequest {
  /**
   * Information about the Dynamic Link to be shortened. [Learn
   * more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener).
   */
  dynamicLinkInfo: Schema$DynamicLinkInfo;
  /**
   * Full long Dynamic Link URL with desired query parameters specified. For
   * example,
   * &quot;https://sample.app.goo.gl/?link=http://www.google.com&amp;apn=com.sample&quot;,
   * [Learn
   * more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener).
   */
  longDynamicLink: string;
  /**
   * Short Dynamic Link suffix. Optional.
   */
  suffix: Schema$Suffix;
}
/**
 * Response to create a short Dynamic Link.
 */
export interface Schema$CreateShortDynamicLinkResponse {
  /**
   * Preview link to show the link flow chart. (debug info.)
   */
  previewLink: string;
  /**
   * Short Dynamic Link value. e.g. https://abcd.app.goo.gl/wxyz
   */
  shortLink: string;
  /**
   * Information about potential warnings on link creation.
   */
  warning: Schema$DynamicLinkWarning[];
}
/**
 * Desktop related attributes to the Dynamic Link.
 */
export interface Schema$DesktopInfo {
  /**
   * Link to open on desktop.
   */
  desktopFallbackLink: string;
}
/**
 * Signals associated with the device making the request.
 */
export interface Schema$DeviceInfo {
  /**
   * Device model name.
   */
  deviceModelName: string;
  /**
   * Device language code setting.
   */
  languageCode: string;
  /**
   * Device language code setting obtained by executing JavaScript code in
   * WebView.
   */
  languageCodeFromWebview: string;
  /**
   * Device language code raw setting. iOS does returns language code in
   * different format than iOS WebView. For example WebView returns en_US, but
   * iOS returns en-US. Field below will return raw value returned by iOS.
   */
  languageCodeRaw: string;
  /**
   * Device display resolution height.
   */
  screenResolutionHeight: string;
  /**
   * Device display resolution width.
   */
  screenResolutionWidth: string;
  /**
   * Device timezone setting.
   */
  timezone: string;
}
/**
 * Dynamic Link event stat.
 */
export interface Schema$DynamicLinkEventStat {
  /**
   * The number of times this event occurred.
   */
  count: string;
  /**
   * Link event.
   */
  event: string;
  /**
   * Requested platform.
   */
  platform: string;
}
/**
 * Information about a Dynamic Link.
 */
export interface Schema$DynamicLinkInfo {
  /**
   * Parameters used for tracking. See all tracking parameters in the
   * [documentation](https://firebase.google.com/docs/dynamic-links/create-manually).
   */
  analyticsInfo: Schema$AnalyticsInfo;
  /**
   * Android related information. See Android related parameters in the
   * [documentation](https://firebase.google.com/docs/dynamic-links/create-manually).
   */
  androidInfo: Schema$AndroidInfo;
  /**
   * Desktop related information. See desktop related parameters in the
   * [documentation](https://firebase.google.com/docs/dynamic-links/create-manually).
   */
  desktopInfo: Schema$DesktopInfo;
  /**
   * E.g. https://maps.app.goo.gl, https://maps.page.link, https://g.co/maps
   * More examples can be found in description of getNormalizedUriPrefix in
   * j/c/g/firebase/dynamiclinks/uri/DdlDomain.java
   */
  domainUriPrefix: string;
  /**
   * Dynamic Links domain that the project owns, e.g. abcd.app.goo.gl [Learn
   * more](https://firebase.google.com/docs/dynamic-links/android/receive) on
   * how to set up Dynamic Link domain associated with your Firebase project.
   * Required.
   */
  dynamicLinkDomain: string;
  /**
   * iOS related information. See iOS related parameters in the
   * [documentation](https://firebase.google.com/docs/dynamic-links/create-manually).
   */
  iosInfo: Schema$IosInfo;
  /**
   * The link your app will open, You can specify any URL your app can handle.
   * This link must be a well-formatted URL, be properly URL-encoded, and use
   * the HTTP or HTTPS scheme. See &#39;link&#39; parameters in the
   * [documentation](https://firebase.google.com/docs/dynamic-links/create-manually).
   * Required.
   */
  link: string;
  /**
   * Information of navigation behavior of a Firebase Dynamic Links.
   */
  navigationInfo: Schema$NavigationInfo;
  /**
   * Parameters for social meta tag params. Used to set meta tag data for link
   * previews on social sites.
   */
  socialMetaTagInfo: Schema$SocialMetaTagInfo;
}
/**
 * Analytics stats of a Dynamic Link for a given timeframe.
 */
export interface Schema$DynamicLinkStats {
  /**
   * Dynamic Link event stats.
   */
  linkEventStats: Schema$DynamicLinkEventStat[];
}
/**
 * Dynamic Links warning messages.
 */
export interface Schema$DynamicLinkWarning {
  /**
   * The warning code.
   */
  warningCode: string;
  /**
   * The document describing the warning, and helps resolve.
   */
  warningDocumentLink: string;
  /**
   * The warning message to help developers improve their requests.
   */
  warningMessage: string;
}
/**
 * Request for iSDK to execute strong match flow for post-install attribution.
 * This is meant for iOS requests only. Requests from other platforms will not
 * be honored.
 */
export interface Schema$GetIosPostInstallAttributionRequest {
  /**
   * App installation epoch time (https://en.wikipedia.org/wiki/Unix_time). This
   * is a client signal for a more accurate weak match.
   */
  appInstallationTime: string;
  /**
   * APP bundle ID.
   */
  bundleId: string;
  /**
   * Device information.
   */
  device: Schema$DeviceInfo;
  /**
   * iOS version, ie: 9.3.5. Consider adding &quot;build&quot;.
   */
  iosVersion: string;
  /**
   * App post install attribution retrieval information. Disambiguates mechanism
   * (iSDK or developer invoked) to retrieve payload from clicked link.
   */
  retrievalMethod: string;
  /**
   * Google SDK version.
   */
  sdkVersion: string;
  /**
   * Possible unique matched link that server need to check before performing
   * fingerprint match. If passed link is short server need to expand the link.
   * If link is long server need to vslidate the link.
   */
  uniqueMatchLinkToCheck: string;
  /**
   * Strong match page information. Disambiguates between default UI and custom
   * page to present when strong match succeeds/fails to find cookie.
   */
  visualStyle: string;
}
/**
 * Response for iSDK to execute strong match flow for post-install attribution.
 */
export interface Schema$GetIosPostInstallAttributionResponse {
  /**
   * The minimum version for app, specified by dev through ?imv= parameter.
   * Return to iSDK to allow app to evaluate if current version meets this.
   */
  appMinimumVersion: string;
  /**
   * The confidence of the returned attribution.
   */
  attributionConfidence: string;
  /**
   * The deep-link attributed post-install via one of several techniques
   * (fingerprint, copy unique).
   */
  deepLink: string;
  /**
   * User-agent specific custom-scheme URIs for iSDK to open. This will be set
   * according to the user-agent tha the click was originally made in. There is
   * no Safari-equivalent custom-scheme open URLs. ie:
   * googlechrome://www.example.com ie:
   * firefox://open-url?url=http://www.example.com ie: opera-http://example.com
   */
  externalBrowserDestinationLink: string;
  /**
   * The link to navigate to update the app if min version is not met. This is
   * either (in order): 1) fallback link (from ?ifl= parameter, if specified by
   * developer) or 2) AppStore URL (from ?isi= parameter, if specified), or 3)
   * the payload link (from required link= parameter).
   */
  fallbackLink: string;
  /**
   * Invitation ID attributed post-install via one of several techniques
   * (fingerprint, copy unique).
   */
  invitationId: string;
  /**
   * Instruction for iSDK to attemmpt to perform strong match. For instance, if
   * browser does not support/allow cookie or outside of support browsers, this
   * will be false.
   */
  isStrongMatchExecutable: boolean;
  /**
   * Describes why match failed, ie: &quot;discarded due to low
   * confidence&quot;. This message will be publicly visible.
   */
  matchMessage: string;
  /**
   * Entire FDL (short or long) attributed post-install via one of several
   * techniques (fingerprint, copy unique).
   */
  requestedLink: string;
  /**
   * The entire FDL, expanded from a short link. It is the same as the
   * requested_link, if it is long. Parameters from this should not be used
   * directly (ie: server can default utm_[campaign|medium|source] to a value
   * when requested_link lack them, server determine the best fallback_link when
   * requested_link specifies &gt;1 fallback links).
   */
  resolvedLink: string;
  /**
   * Scion campaign value to be propagated by iSDK to Scion at post-install.
   */
  utmCampaign: string;
  /**
   * Scion medium value to be propagated by iSDK to Scion at post-install.
   */
  utmMedium: string;
  /**
   * Scion source value to be propagated by iSDK to Scion at post-install.
   */
  utmSource: string;
}
/**
 * Parameters for Google Play Campaign Measurements. [Learn
 * more](https://developers.google.com/analytics/devguides/collection/android/v4/campaigns#campaign-params)
 */
export interface Schema$GooglePlayAnalytics {
  /**
   * [AdWords autotagging
   * parameter](https://support.google.com/analytics/answer/1033981?hl=en); used
   * to measure Google AdWords ads. This value is generated dynamically and
   * should never be modified.
   */
  gclid: string;
  /**
   * Campaign name; used for keyword analysis to identify a specific product
   * promotion or strategic campaign.
   */
  utmCampaign: string;
  /**
   * Campaign content; used for A/B testing and content-targeted ads to
   * differentiate ads or links that point to the same URL.
   */
  utmContent: string;
  /**
   * Campaign medium; used to identify a medium such as email or cost-per-click.
   */
  utmMedium: string;
  /**
   * Campaign source; used to identify a search engine, newsletter, or other
   * source.
   */
  utmSource: string;
  /**
   * Campaign term; used with paid search to supply the keywords for ads.
   */
  utmTerm: string;
}
/**
 * iOS related attributes to the Dynamic Link..
 */
export interface Schema$IosInfo {
  /**
   * iOS App Store ID.
   */
  iosAppStoreId: string;
  /**
   * iOS bundle ID of the app.
   */
  iosBundleId: string;
  /**
   * Custom (destination) scheme to use for iOS. By default, we’ll use the
   * bundle ID as the custom scheme. Developer can override this behavior using
   * this param.
   */
  iosCustomScheme: string;
  /**
   * Link to open on iOS if the app is not installed.
   */
  iosFallbackLink: string;
  /**
   * iPad bundle ID of the app.
   */
  iosIpadBundleId: string;
  /**
   * If specified, this overrides the ios_fallback_link value on iPads.
   */
  iosIpadFallbackLink: string;
}
/**
 * Parameters for iTunes Connect App Analytics.
 */
export interface Schema$ITunesConnectAnalytics {
  /**
   * Affiliate token used to create affiliate-coded links.
   */
  at: string;
  /**
   * Campaign text that developers can optionally add to any link in order to
   * track sales from a specific marketing campaign.
   */
  ct: string;
  /**
   * iTune media types, including music, podcasts, audiobooks and so on.
   */
  mt: string;
  /**
   * Provider token that enables analytics for Dynamic Links from within iTunes
   * Connect.
   */
  pt: string;
}
/**
 * Managed Short Link.
 */
export interface Schema$ManagedShortLink {
  /**
   * Creation timestamp of the short link.
   */
  creationTime: string;
  /**
   * Attributes that have been flagged about this short url.
   */
  flaggedAttribute: string[];
  /**
   * Full Dyamic Link info
   */
  info: Schema$DynamicLinkInfo;
  /**
   * Short durable link url, for example,
   * &quot;https://sample.app.goo.gl/xyz123&quot;.  Required.
   */
  link: string;
  /**
   * Link name defined by the creator.  Required.
   */
  linkName: string;
  /**
   * Visibility status of link.
   */
  visibility: string;
}
/**
 * Information of navigation behavior.
 */
export interface Schema$NavigationInfo {
  /**
   * If this option is on, FDL click will be forced to redirect rather than show
   * an interstitial page.
   */
  enableForcedRedirect: boolean;
}
/**
 * Parameters for social meta tag params. Used to set meta tag data for link
 * previews on social sites.
 */
export interface Schema$SocialMetaTagInfo {
  /**
   * A short description of the link. Optional.
   */
  socialDescription: string;
  /**
   * An image url string. Optional.
   */
  socialImageLink: string;
  /**
   * Title to be displayed. Optional.
   */
  socialTitle: string;
}
/**
 * Short Dynamic Link suffix.
 */
export interface Schema$Suffix {
  /**
   * Only applies to Option.CUSTOM.
   */
  customSuffix: string;
  /**
   * Suffix option.
   */
  option: string;
}

export class Resource$Managedshortlinks {
  root: Firebasedynamiclinks;
  constructor(root: Firebasedynamiclinks) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * firebasedynamiclinks.managedShortLinks.create
   * @desc Creates a managed short Dynamic Link given either a valid long
   * Dynamic Link or details such as Dynamic Link domain, Android and iOS app
   * information. The created short Dynamic Link will not expire.  This differs
   * from CreateShortDynamicLink in the following ways:   - The request will
   * also contain a name for the link (non unique name     for the front end).
   * - The response must be authenticated with an auth token (generated with the
   * admin service account).   - The link will appear in the FDL list of links
   * in the console front end.  The Dynamic Link domain in the request must be
   * owned by requester's Firebase project.
   * @alias firebasedynamiclinks.managedShortLinks.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().CreateManagedShortLinkRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CreateManagedShortLinkResponse>;
  create(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$CreateManagedShortLinkResponse>,
      callback?: BodyResponseCallback<Schema$CreateManagedShortLinkResponse>):
      void;
  create(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$CreateManagedShortLinkResponse>,
      callback?: BodyResponseCallback<Schema$CreateManagedShortLinkResponse>):
      void|AxiosPromise<Schema$CreateManagedShortLinkResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://firebasedynamiclinks-ipv6.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/managedShortLinks:create')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CreateManagedShortLinkResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$CreateManagedShortLinkResponse>(
          parameters);
    }
  }
}

export class Resource$Shortlinks {
  root: Firebasedynamiclinks;
  constructor(root: Firebasedynamiclinks) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * firebasedynamiclinks.shortLinks.create
   * @desc Creates a short Dynamic Link given either a valid long Dynamic Link
   * or details such as Dynamic Link domain, Android and iOS app information.
   * The created short Dynamic Link will not expire.  Repeated calls with the
   * same long Dynamic Link or Dynamic Link information will produce the same
   * short Dynamic Link.  The Dynamic Link domain in the request must be owned
   * by requester's Firebase project.
   * @alias firebasedynamiclinks.shortLinks.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().CreateShortDynamicLinkRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CreateShortDynamicLinkResponse>;
  create(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$CreateShortDynamicLinkResponse>,
      callback?: BodyResponseCallback<Schema$CreateShortDynamicLinkResponse>):
      void;
  create(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$CreateShortDynamicLinkResponse>,
      callback?: BodyResponseCallback<Schema$CreateShortDynamicLinkResponse>):
      void|AxiosPromise<Schema$CreateShortDynamicLinkResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://firebasedynamiclinks-ipv6.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/shortLinks').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CreateShortDynamicLinkResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$CreateShortDynamicLinkResponse>(
          parameters);
    }
  }
}

export class Resource$V1 {
  root: Firebasedynamiclinks;
  constructor(root: Firebasedynamiclinks) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * firebasedynamiclinks.getLinkStats
   * @desc Fetches analytics stats of a short Dynamic Link for a given duration.
   * Metrics include number of clicks, redirects, installs, app first opens, and
   * app reopens.
   * @alias firebasedynamiclinks.getLinkStats
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.durationDays The span of time requested in days.
   * @param {string} params.dynamicLink Dynamic Link URL. e.g. https://abcd.app.goo.gl/wxyz
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getLinkStats(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$DynamicLinkStats>;
  getLinkStats(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$DynamicLinkStats>,
      callback?: BodyResponseCallback<Schema$DynamicLinkStats>): void;
  getLinkStats(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$DynamicLinkStats>,
      callback?: BodyResponseCallback<Schema$DynamicLinkStats>):
      void|AxiosPromise<Schema$DynamicLinkStats> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://firebasedynamiclinks-ipv6.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{dynamicLink}/linkStats')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['dynamicLink'],
      pathParams: ['dynamicLink'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$DynamicLinkStats>(parameters, callback);
    } else {
      return createAPIRequest<Schema$DynamicLinkStats>(parameters);
    }
  }


  /**
   * firebasedynamiclinks.installAttribution
   * @desc Get iOS strong/weak-match info for post-install attribution.
   * @alias firebasedynamiclinks.installAttribution
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().GetIosPostInstallAttributionRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  installAttribution(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GetIosPostInstallAttributionResponse>;
  installAttribution(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GetIosPostInstallAttributionResponse>,
      callback?:
          BodyResponseCallback<Schema$GetIosPostInstallAttributionResponse>):
      void;
  installAttribution(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GetIosPostInstallAttributionResponse>,
      callback?:
          BodyResponseCallback<Schema$GetIosPostInstallAttributionResponse>):
      void|AxiosPromise<Schema$GetIosPostInstallAttributionResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://firebasedynamiclinks-ipv6.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/installAttribution')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GetIosPostInstallAttributionResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$GetIosPostInstallAttributionResponse>(
          parameters);
    }
  }
}
