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

/* jshint maxlen: false */

import {
  createAPIRequest
} from '../../lib/apirequest';

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
function Firebasedynamiclinks(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.shortLinks = {

    /**
     * firebasedynamiclinks.shortLinks.create
     *
     * @desc Creates a short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire.  Repeated calls with the same long Dynamic Link or Dynamic Link information will produce the same short Dynamic Link.  The Dynamic Link domain in the request must be owned by requester's Firebase project.
     *
     * @alias firebasedynamiclinks.shortLinks.create
     * @memberOf! firebasedynamiclinks(v1)
     *
     * @param {object} params Parameters for request
     * @param {firebasedynamiclinks(v1).CreateShortDynamicLinkRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://firebasedynamiclinks-ipv6.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/shortLinks').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.v1 = {

    /**
     * firebasedynamiclinks.getLinkStats
     *
     * @desc Fetches analytics stats of a short Dynamic Link for a given duration. Metrics include number of clicks, redirects, installs, app first opens, and app reopens.
     *
     * @alias firebasedynamiclinks.getLinkStats
     * @memberOf! firebasedynamiclinks(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.durationDays The span of time requested in days.
     * @param {string} params.dynamicLink Dynamic Link URL. e.g. https://abcd.app.goo.gl/wxyz
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getLinkStats: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://firebasedynamiclinks-ipv6.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{dynamicLink}/linkStats').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['dynamicLink'],
        pathParams: ['dynamicLink'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * firebasedynamiclinks.installAttribution
     *
     * @desc Get iOS strong/weak-match info for post-install attribution.
     *
     * @alias firebasedynamiclinks.installAttribution
     * @memberOf! firebasedynamiclinks(v1)
     *
     * @param {object} params Parameters for request
     * @param {firebasedynamiclinks(v1).GetIosPostInstallAttributionRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    installAttribution: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://firebasedynamiclinks-ipv6.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/installAttribution').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * @typedef AnalyticsInfo
 * @memberOf! firebasedynamiclinks(v1)
 * @type object
 * @property {firebasedynamiclinks(v1).GooglePlayAnalytics} googlePlayAnalytics Google Play Campaign Measurements.
 * @property {firebasedynamiclinks(v1).ITunesConnectAnalytics} itunesConnectAnalytics iTunes Connect App Analytics.
 */

/**
 * @typedef AndroidInfo
 * @memberOf! firebasedynamiclinks(v1)
 * @type object
* @property {string} androidFallbackLink Link to open on Android if the app is not installed.
* @property {string} androidLink If specified, this overrides the ‘link’ parameter on Android.
* @property {string} androidMinPackageVersionCode Minimum version code for the Android app. If the installed app’s version
code is lower, then the user is taken to the Play Store.
* @property {string} androidPackageName Android package name of the app.
*/

/**
 * @typedef CreateShortDynamicLinkRequest
 * @memberOf! firebasedynamiclinks(v1)
 * @type object
* @property {firebasedynamiclinks(v1).DynamicLinkInfo} dynamicLinkInfo Information about the Dynamic Link to be shortened.
[Learn more](https://firebase.google.com/docs/dynamic-links/android#create-a-dynamic-link-programmatically).
* @property {string} longDynamicLink Full long Dynamic Link URL with desired query parameters specified.
For example,
&quot;https://sample.app.goo.gl/?link=http://www.google.com&amp;apn=com.sample&quot;,
[Learn more](https://firebase.google.com/docs/dynamic-links/android#create-a-dynamic-link-programmatically).
* @property {firebasedynamiclinks(v1).Suffix} suffix Short Dynamic Link suffix. Optional.
*/

/**
 * @typedef CreateShortDynamicLinkResponse
 * @memberOf! firebasedynamiclinks(v1)
 * @type object
 * @property {string} previewLink Preivew link to show the link flow chart.
 * @property {string} shortLink Short Dynamic Link value. e.g. https://abcd.app.goo.gl/wxyz
 * @property {firebasedynamiclinks(v1).DynamicLinkWarning[]} warning Information about potential warnings on link creation.
 */

/**
 * @typedef DesktopInfo
 * @memberOf! firebasedynamiclinks(v1)
 * @type object
 * @property {string} desktopFallbackLink Link to open on desktop.
 */

/**
 * @typedef DeviceInfo
 * @memberOf! firebasedynamiclinks(v1)
 * @type object
* @property {string} deviceModelName Device model name.
* @property {string} languageCode Device language code setting.
* @property {string} languageCodeRaw Device language code raw setting.
iOS does returns language code in different format than iOS WebView.
For example WebView returns en_US, but iOS returns en-US.
Field below will return raw value returned by iOS.
* @property {string} screenResolutionHeight Device display resolution height.
* @property {string} screenResolutionWidth Device display resolution width.
* @property {string} timezone Device timezone setting.
*/

/**
 * @typedef DynamicLinkEventStat
 * @memberOf! firebasedynamiclinks(v1)
 * @type object
 * @property {string} count The number of times this event occurred.
 * @property {string} event Link event.
 * @property {string} platform Requested platform.
 */

/**
 * @typedef DynamicLinkInfo
 * @memberOf! firebasedynamiclinks(v1)
 * @type object
* @property {firebasedynamiclinks(v1).AnalyticsInfo} analyticsInfo Parameters used for tracking. See all tracking parameters in the
[documentation](https://firebase.google.com/docs/dynamic-links/create-manually).
* @property {firebasedynamiclinks(v1).AndroidInfo} androidInfo Android related information. See Android related parameters in the
[documentation](https://firebase.google.com/docs/dynamic-links/create-manually).
* @property {firebasedynamiclinks(v1).DesktopInfo} desktopInfo Desktop related information. See desktop related parameters in the
[documentation](https://firebase.google.com/docs/dynamic-links/create-manually).
* @property {string} dynamicLinkDomain Dynamic Links domain that the project owns, e.g. abcd.app.goo.gl
[Learn more](https://firebase.google.com/docs/dynamic-links/android/receive)
on how to set up Dynamic Link domain associated with your Firebase project.

Required.
* @property {firebasedynamiclinks(v1).IosInfo} iosInfo iOS related information. See iOS related parameters in the
[documentation](https://firebase.google.com/docs/dynamic-links/create-manually).
* @property {string} link The link your app will open, You can specify any URL your app can handle.
This link must be a well-formatted URL, be properly URL-encoded, and use
the HTTP or HTTPS scheme. See &#39;link&#39; parameters in the
[documentation](https://firebase.google.com/docs/dynamic-links/create-manually).

Required.
* @property {firebasedynamiclinks(v1).NavigationInfo} navigationInfo Information of navigation behavior of a Firebase Dynamic Links.
* @property {firebasedynamiclinks(v1).SocialMetaTagInfo} socialMetaTagInfo Parameters for social meta tag params.
Used to set meta tag data for link previews on social sites.
*/

/**
 * @typedef DynamicLinkStats
 * @memberOf! firebasedynamiclinks(v1)
 * @type object
 * @property {firebasedynamiclinks(v1).DynamicLinkEventStat[]} linkEventStats Dynamic Link event stats.
 */

/**
 * @typedef DynamicLinkWarning
 * @memberOf! firebasedynamiclinks(v1)
 * @type object
 * @property {string} warningCode The warning code.
 * @property {string} warningDocumentLink The document describing the warning, and helps resolve.
 * @property {string} warningMessage The warning message to help developers improve their requests.
 */

/**
 * @typedef GetIosPostInstallAttributionRequest
 * @memberOf! firebasedynamiclinks(v1)
 * @type object
* @property {string} appInstallationTime App installation epoch time (https://en.wikipedia.org/wiki/Unix_time).
This is a client signal for a more accurate weak match.
* @property {string} bundleId APP bundle ID.
* @property {firebasedynamiclinks(v1).DeviceInfo} device Device information.
* @property {string} iosVersion iOS version, ie: 9.3.5.
Consider adding &quot;build&quot;.
* @property {string} retrievalMethod App post install attribution retrieval information. Disambiguates
mechanism (iSDK or developer invoked) to retrieve payload from
clicked link.
* @property {string} sdkVersion Google SDK version.
* @property {string} uniqueMatchLinkToCheck Possible unique matched link that server need to check before performing
fingerprint match. If passed link is short server need to expand the link.
If link is long server need to vslidate the link.
* @property {string} visualStyle Strong match page information. Disambiguates between default UI and
custom page to present when strong match succeeds/fails to find cookie.
*/

/**
 * @typedef GetIosPostInstallAttributionResponse
 * @memberOf! firebasedynamiclinks(v1)
 * @type object
* @property {string} appMinimumVersion The minimum version for app, specified by dev through ?imv= parameter.
Return to iSDK to allow app to evaluate if current version meets this.
* @property {string} attributionConfidence The confidence of the returned attribution.
* @property {string} deepLink The deep-link attributed post-install via one of several techniques
(fingerprint, copy unique).
* @property {string} externalBrowserDestinationLink User-agent specific custom-scheme URIs for iSDK to open. This will be set
according to the user-agent tha the click was originally made in. There is
no Safari-equivalent custom-scheme open URLs.
ie: googlechrome://www.example.com
ie: firefox://open-url?url=http://www.example.com
ie: opera-http://example.com
* @property {string} fallbackLink The link to navigate to update the app if min version is not met.
This is either (in order): 1) fallback link (from ?ifl= parameter, if
specified by developer) or 2) AppStore URL (from ?isi= parameter, if
specified), or 3) the payload link (from required link= parameter).
* @property {string} invitationId Invitation ID attributed post-install via one of several techniques
(fingerprint, copy unique).
* @property {boolean} isStrongMatchExecutable Instruction for iSDK to attemmpt to perform strong match. For instance,
if browser does not support/allow cookie or outside of support browsers,
this will be false.
* @property {string} matchMessage Describes why match failed, ie: &quot;discarded due to low confidence&quot;.
This message will be publicly visible.
* @property {string} requestedLink Entire FDL (short or long) attributed post-install via one of several
techniques (fingerprint, copy unique).
* @property {string} resolvedLink The entire FDL, expanded from a short link. It is the same as the
requested_link, if it is long. Parameters from this should not be
used directly (ie: server can default utm_[campaign|medium|source]
to a value when requested_link lack them, server determine the best
fallback_link when requested_link specifies &gt;1 fallback links).
* @property {string} utmCampaign Scion campaign value to be propagated by iSDK to Scion at post-install.
* @property {string} utmMedium Scion medium value to be propagated by iSDK to Scion at post-install.
* @property {string} utmSource Scion source value to be propagated by iSDK to Scion at post-install.
*/

/**
 * @typedef GooglePlayAnalytics
 * @memberOf! firebasedynamiclinks(v1)
 * @type object
* @property {string} gclid [AdWords autotagging parameter](https://support.google.com/analytics/answer/1033981?hl=en);
used to measure Google AdWords ads. This value is generated dynamically
and should never be modified.
* @property {string} utmCampaign Campaign name; used for keyword analysis to identify a specific product
promotion or strategic campaign.
* @property {string} utmContent Campaign content; used for A/B testing and content-targeted ads to
differentiate ads or links that point to the same URL.
* @property {string} utmMedium Campaign medium; used to identify a medium such as email or cost-per-click.
* @property {string} utmSource Campaign source; used to identify a search engine, newsletter, or other
source.
* @property {string} utmTerm Campaign term; used with paid search to supply the keywords for ads.
*/

/**
 * @typedef ITunesConnectAnalytics
 * @memberOf! firebasedynamiclinks(v1)
 * @type object
* @property {string} at Affiliate token used to create affiliate-coded links.
* @property {string} ct Campaign text that developers can optionally add to any link in order to
track sales from a specific marketing campaign.
* @property {string} mt iTune media types, including music, podcasts, audiobooks and so on.
* @property {string} pt Provider token that enables analytics for Dynamic Links from within iTunes
Connect.
*/

/**
 * @typedef IosInfo
 * @memberOf! firebasedynamiclinks(v1)
 * @type object
* @property {string} iosAppStoreId iOS App Store ID.
* @property {string} iosBundleId iOS bundle ID of the app.
* @property {string} iosCustomScheme Custom (destination) scheme to use for iOS. By default, we’ll use the
bundle ID as the custom scheme. Developer can override this behavior using
this param.
* @property {string} iosFallbackLink Link to open on iOS if the app is not installed.
* @property {string} iosIpadBundleId iPad bundle ID of the app.
* @property {string} iosIpadFallbackLink If specified, this overrides the ios_fallback_link value on iPads.
*/

/**
 * @typedef NavigationInfo
 * @memberOf! firebasedynamiclinks(v1)
 * @type object
* @property {boolean} enableForcedRedirect If this option is on, FDL click will be forced to redirect rather than
show an interstitial page.
*/

/**
 * @typedef SocialMetaTagInfo
 * @memberOf! firebasedynamiclinks(v1)
 * @type object
 * @property {string} socialDescription A short description of the link. Optional.
 * @property {string} socialImageLink An image url string. Optional.
 * @property {string} socialTitle Title to be displayed. Optional.
 */

/**
 * @typedef Suffix
 * @memberOf! firebasedynamiclinks(v1)
 * @type object
 * @property {string} option Suffix option.
 */
export = Firebasedynamiclinks;
