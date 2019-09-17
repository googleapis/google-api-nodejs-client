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

export namespace digitalassetlinks_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
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
   * Digital Asset Links API
   *
   * Discovers relationships between online assets such as websites or mobile apps.
   *
   * @example
   * const {google} = require('googleapis');
   * const digitalassetlinks = google.digitalassetlinks('v1');
   *
   * @namespace digitalassetlinks
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Digitalassetlinks
   */
  export class Digitalassetlinks {
    context: APIRequestContext;
    assetlinks: Resource$Assetlinks;
    statements: Resource$Statements;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.assetlinks = new Resource$Assetlinks(this.context);
      this.statements = new Resource$Statements(this.context);
    }
  }

  /**
   * Describes an android app asset.
   */
  export interface Schema$AndroidAppAsset {
    /**
     * Because there is no global enforcement of package name uniqueness, we also require a signing certificate, which in combination with the package name uniquely identifies an app.  Some apps&#39; signing keys are rotated, so they may be signed by different keys over time.  We treat these as distinct assets, since we use (package name, cert) as the unique ID.  This should not normally pose any problems as both versions of the app will make the same or similar statements. Other assets making statements about the app will have to be updated when a key is rotated, however.  (Note that the syntaxes for publishing and querying for statements contain syntactic sugar to easily let you specify apps that are known by multiple certificates.) REQUIRED
     */
    certificate?: Schema$CertificateInfo;
    /**
     * Android App assets are naturally identified by their Java package name. For example, the Google Maps app uses the package name `com.google.android.apps.maps`. REQUIRED
     */
    packageName?: string | null;
  }
  /**
   * Uniquely identifies an asset.  A digital asset is an identifiable and addressable online entity that typically provides some service or content.  Examples of assets are websites, Android apps, Twitter feeds, and Plus Pages.
   */
  export interface Schema$Asset {
    /**
     * Set if this is an Android App asset.
     */
    androidApp?: Schema$AndroidAppAsset;
    /**
     * Set if this is a web asset.
     */
    web?: Schema$WebAsset;
  }
  /**
   * Describes an X509 certificate.
   */
  export interface Schema$CertificateInfo {
    /**
     * The uppercase SHA-265 fingerprint of the certificate.  From the PEM  certificate, it can be acquired like this:      $ keytool -printcert -file $CERTFILE | grep SHA256:     SHA256: 14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83: \         42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5  or like this:      $ openssl x509 -in $CERTFILE -noout -fingerprint -sha256     SHA256 Fingerprint=14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64: \         16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5  In this example, the contents of this field would be `14:6D:E9:83:C5:73: 06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF: 44:E5`.  If these tools are not available to you, you can convert the PEM certificate into the DER format, compute the SHA-256 hash of that string and represent the result as a hexstring (that is, uppercase hexadecimal representations of each octet, separated by colons).
     */
    sha256Fingerprint?: string | null;
  }
  /**
   * Response message for the CheckAssetLinks call.
   */
  export interface Schema$CheckResponse {
    /**
     * Human-readable message containing information intended to help end users understand, reproduce and debug the result.   The message will be in English and we are currently not planning to offer any translations.  Please note that no guarantees are made about the contents or format of this string.  Any aspect of it may be subject to change without notice. You should not attempt to programmatically parse this data.  For programmatic access, use the error_code field below.
     */
    debugString?: string | null;
    /**
     * Error codes that describe the result of the Check operation.
     */
    errorCode?: string[] | null;
    /**
     * Set to true if the assets specified in the request are linked by the relation specified in the request.
     */
    linked?: boolean | null;
    /**
     * From serving time, how much longer the response should be considered valid barring further updates. REQUIRED
     */
    maxAge?: string | null;
  }
  /**
   * Response message for the List call.
   */
  export interface Schema$ListResponse {
    /**
     * Human-readable message containing information intended to help end users understand, reproduce and debug the result.   The message will be in English and we are currently not planning to offer any translations.  Please note that no guarantees are made about the contents or format of this string.  Any aspect of it may be subject to change without notice. You should not attempt to programmatically parse this data.  For programmatic access, use the error_code field below.
     */
    debugString?: string | null;
    /**
     * Error codes that describe the result of the List operation.
     */
    errorCode?: string[] | null;
    /**
     * From serving time, how much longer the response should be considered valid barring further updates. REQUIRED
     */
    maxAge?: string | null;
    /**
     * A list of all the matching statements that have been found.
     */
    statements?: Schema$Statement[];
  }
  /**
   * Describes a reliable statement that has been made about the relationship between a source asset and a target asset.  Statements are always made by the source asset, either directly or by delegating to a statement list that is stored elsewhere.  For more detailed definitions of statements and assets, please refer to our [API documentation landing page](/digital-asset-links/v1/getting-started).
   */
  export interface Schema$Statement {
    /**
     * The relation identifies the use of the statement as intended by the source asset&#39;s owner (that is, the person or entity who issued the statement). Every complete statement has a relation.  We identify relations with strings of the format `&lt;kind&gt;/&lt;detail&gt;`, where `&lt;kind&gt;` must be one of a set of pre-defined purpose categories, and `&lt;detail&gt;` is a free-form lowercase alphanumeric string that describes the specific use case of the statement.  Refer to [our API documentation](/digital-asset-links/v1/relation-strings) for the current list of supported relations.  Example: `delegate_permission/common.handle_all_urls` REQUIRED
     */
    relation?: string | null;
    /**
     * Every statement has a source asset. REQUIRED
     */
    source?: Schema$Asset;
    /**
     * Every statement has a target asset. REQUIRED
     */
    target?: Schema$Asset;
  }
  /**
   * Describes a web asset.
   */
  export interface Schema$WebAsset {
    /**
     * Web assets are identified by a URL that contains only the scheme, hostname and port parts.  The format is      http[s]://&lt;hostname&gt;[:&lt;port&gt;]  Hostnames must be fully qualified: they must end in a single period (&quot;`.`&quot;).  Only the schemes &quot;http&quot; and &quot;https&quot; are currently allowed.  Port numbers are given as a decimal number, and they must be omitted if the standard port numbers are used: 80 for http and 443 for https.  We call this limited URL the &quot;site&quot;.  All URLs that share the same scheme, hostname and port are considered to be a part of the site and thus belong to the web asset.  Example: the asset with the site `https://www.google.com` contains all these URLs:    *   `https://www.google.com/`   *   `https://www.google.com:443/`   *   `https://www.google.com/foo`   *   `https://www.google.com/foo?bar`   *   `https://www.google.com/foo#bar`   *   `https://user@password:www.google.com/`  But it does not contain these URLs:    *   `http://www.google.com/`       (wrong scheme)   *   `https://google.com/`          (hostname does not match)   *   `https://www.google.com:444/`  (port does not match) REQUIRED
     */
    site?: string | null;
  }

  export class Resource$Assetlinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * digitalassetlinks.assetlinks.check
     * @desc Determines whether the specified (directional) relationship exists between the specified source and target assets.  The relation describes the intent of the link between the two assets as claimed by the source asset.  An example for such relationships is the delegation of privileges or permissions.  This command is most often used by infrastructure systems to check preconditions for an action.  For example, a client may want to know if it is OK to send a web URL to a particular mobile app instead. The client can check for the relevant asset link from the website to the mobile app to decide if the operation should be allowed.  A note about security: if you specify a secure asset as the source, such as an HTTPS website or an Android app, the API will ensure that any statements used to generate the response have been made in a secure way by the owner of that asset.  Conversely, if the source asset is an insecure HTTP website (that is, the URL starts with `http://` instead of `https://`), the API cannot verify its statements securely, and it is not possible to ensure that the website's statements have not been altered by a third party.  For more information, see the [Digital Asset Links technical design specification](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md).
     * @alias digitalassetlinks.assetlinks.check
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.relation Query string for the relation.  We identify relations with strings of the format `<kind>/<detail>`, where `<kind>` must be one of a set of pre-defined purpose categories, and `<detail>` is a free-form lowercase alphanumeric string that describes the specific use case of the statement.  Refer to [our API documentation](/digital-asset-links/v1/relation-strings) for the current list of supported relations.  For a query to match an asset link, both the query's and the asset link's relation strings must match exactly.  Example: A query with relation `delegate_permission/common.handle_all_urls` matches an asset link with relation `delegate_permission/common.handle_all_urls`.
     * @param {string=} params.source.androidApp.certificate.sha256Fingerprint The uppercase SHA-265 fingerprint of the certificate.  From the PEM  certificate, it can be acquired like this:      $ keytool -printcert -file $CERTFILE | grep SHA256:     SHA256: 14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83: \         42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5  or like this:      $ openssl x509 -in $CERTFILE -noout -fingerprint -sha256     SHA256 Fingerprint=14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64: \         16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5  In this example, the contents of this field would be `14:6D:E9:83:C5:73: 06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF: 44:E5`.  If these tools are not available to you, you can convert the PEM certificate into the DER format, compute the SHA-256 hash of that string and represent the result as a hexstring (that is, uppercase hexadecimal representations of each octet, separated by colons).
     * @param {string=} params.source.androidApp.packageName Android App assets are naturally identified by their Java package name. For example, the Google Maps app uses the package name `com.google.android.apps.maps`. REQUIRED
     * @param {string=} params.source.web.site Web assets are identified by a URL that contains only the scheme, hostname and port parts.  The format is      http[s]://<hostname>[:<port>]  Hostnames must be fully qualified: they must end in a single period ("`.`").  Only the schemes "http" and "https" are currently allowed.  Port numbers are given as a decimal number, and they must be omitted if the standard port numbers are used: 80 for http and 443 for https.  We call this limited URL the "site".  All URLs that share the same scheme, hostname and port are considered to be a part of the site and thus belong to the web asset.  Example: the asset with the site `https://www.google.com` contains all these URLs:    *   `https://www.google.com/`   *   `https://www.google.com:443/`   *   `https://www.google.com/foo`   *   `https://www.google.com/foo?bar`   *   `https://www.google.com/foo#bar`   *   `https://user@password:www.google.com/`  But it does not contain these URLs:    *   `http://www.google.com/`       (wrong scheme)   *   `https://google.com/`          (hostname does not match)   *   `https://www.google.com:444/`  (port does not match) REQUIRED
     * @param {string=} params.target.androidApp.certificate.sha256Fingerprint The uppercase SHA-265 fingerprint of the certificate.  From the PEM  certificate, it can be acquired like this:      $ keytool -printcert -file $CERTFILE | grep SHA256:     SHA256: 14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83: \         42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5  or like this:      $ openssl x509 -in $CERTFILE -noout -fingerprint -sha256     SHA256 Fingerprint=14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64: \         16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5  In this example, the contents of this field would be `14:6D:E9:83:C5:73: 06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF: 44:E5`.  If these tools are not available to you, you can convert the PEM certificate into the DER format, compute the SHA-256 hash of that string and represent the result as a hexstring (that is, uppercase hexadecimal representations of each octet, separated by colons).
     * @param {string=} params.target.androidApp.packageName Android App assets are naturally identified by their Java package name. For example, the Google Maps app uses the package name `com.google.android.apps.maps`. REQUIRED
     * @param {string=} params.target.web.site Web assets are identified by a URL that contains only the scheme, hostname and port parts.  The format is      http[s]://<hostname>[:<port>]  Hostnames must be fully qualified: they must end in a single period ("`.`").  Only the schemes "http" and "https" are currently allowed.  Port numbers are given as a decimal number, and they must be omitted if the standard port numbers are used: 80 for http and 443 for https.  We call this limited URL the "site".  All URLs that share the same scheme, hostname and port are considered to be a part of the site and thus belong to the web asset.  Example: the asset with the site `https://www.google.com` contains all these URLs:    *   `https://www.google.com/`   *   `https://www.google.com:443/`   *   `https://www.google.com/foo`   *   `https://www.google.com/foo?bar`   *   `https://www.google.com/foo#bar`   *   `https://user@password:www.google.com/`  But it does not contain these URLs:    *   `http://www.google.com/`       (wrong scheme)   *   `https://google.com/`          (hostname does not match)   *   `https://www.google.com:444/`  (port does not match) REQUIRED
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    check(
      params?: Params$Resource$Assetlinks$Check,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CheckResponse>;
    check(
      params: Params$Resource$Assetlinks$Check,
      options: MethodOptions | BodyResponseCallback<Schema$CheckResponse>,
      callback: BodyResponseCallback<Schema$CheckResponse>
    ): void;
    check(
      params: Params$Resource$Assetlinks$Check,
      callback: BodyResponseCallback<Schema$CheckResponse>
    ): void;
    check(callback: BodyResponseCallback<Schema$CheckResponse>): void;
    check(
      paramsOrCallback?:
        | Params$Resource$Assetlinks$Check
        | BodyResponseCallback<Schema$CheckResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CheckResponse>,
      callback?: BodyResponseCallback<Schema$CheckResponse>
    ): void | GaxiosPromise<Schema$CheckResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Assetlinks$Check;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Assetlinks$Check;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://digitalassetlinks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/assetlinks:check').replace(
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
        createAPIRequest<Schema$CheckResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CheckResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Assetlinks$Check extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Query string for the relation.  We identify relations with strings of the format `<kind>/<detail>`, where `<kind>` must be one of a set of pre-defined purpose categories, and `<detail>` is a free-form lowercase alphanumeric string that describes the specific use case of the statement.  Refer to [our API documentation](/digital-asset-links/v1/relation-strings) for the current list of supported relations.  For a query to match an asset link, both the query's and the asset link's relation strings must match exactly.  Example: A query with relation `delegate_permission/common.handle_all_urls` matches an asset link with relation `delegate_permission/common.handle_all_urls`.
     */
    relation?: string;
    /**
     * The uppercase SHA-265 fingerprint of the certificate.  From the PEM  certificate, it can be acquired like this:      $ keytool -printcert -file $CERTFILE | grep SHA256:     SHA256: 14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83: \         42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5  or like this:      $ openssl x509 -in $CERTFILE -noout -fingerprint -sha256     SHA256 Fingerprint=14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64: \         16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5  In this example, the contents of this field would be `14:6D:E9:83:C5:73: 06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF: 44:E5`.  If these tools are not available to you, you can convert the PEM certificate into the DER format, compute the SHA-256 hash of that string and represent the result as a hexstring (that is, uppercase hexadecimal representations of each octet, separated by colons).
     */
    'source.androidApp.certificate.sha256Fingerprint'?: string;
    /**
     * Android App assets are naturally identified by their Java package name. For example, the Google Maps app uses the package name `com.google.android.apps.maps`. REQUIRED
     */
    'source.androidApp.packageName'?: string;
    /**
     * Web assets are identified by a URL that contains only the scheme, hostname and port parts.  The format is      http[s]://<hostname>[:<port>]  Hostnames must be fully qualified: they must end in a single period ("`.`").  Only the schemes "http" and "https" are currently allowed.  Port numbers are given as a decimal number, and they must be omitted if the standard port numbers are used: 80 for http and 443 for https.  We call this limited URL the "site".  All URLs that share the same scheme, hostname and port are considered to be a part of the site and thus belong to the web asset.  Example: the asset with the site `https://www.google.com` contains all these URLs:    *   `https://www.google.com/`   *   `https://www.google.com:443/`   *   `https://www.google.com/foo`   *   `https://www.google.com/foo?bar`   *   `https://www.google.com/foo#bar`   *   `https://user@password:www.google.com/`  But it does not contain these URLs:    *   `http://www.google.com/`       (wrong scheme)   *   `https://google.com/`          (hostname does not match)   *   `https://www.google.com:444/`  (port does not match) REQUIRED
     */
    'source.web.site'?: string;
    /**
     * The uppercase SHA-265 fingerprint of the certificate.  From the PEM  certificate, it can be acquired like this:      $ keytool -printcert -file $CERTFILE | grep SHA256:     SHA256: 14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83: \         42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5  or like this:      $ openssl x509 -in $CERTFILE -noout -fingerprint -sha256     SHA256 Fingerprint=14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64: \         16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5  In this example, the contents of this field would be `14:6D:E9:83:C5:73: 06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF: 44:E5`.  If these tools are not available to you, you can convert the PEM certificate into the DER format, compute the SHA-256 hash of that string and represent the result as a hexstring (that is, uppercase hexadecimal representations of each octet, separated by colons).
     */
    'target.androidApp.certificate.sha256Fingerprint'?: string;
    /**
     * Android App assets are naturally identified by their Java package name. For example, the Google Maps app uses the package name `com.google.android.apps.maps`. REQUIRED
     */
    'target.androidApp.packageName'?: string;
    /**
     * Web assets are identified by a URL that contains only the scheme, hostname and port parts.  The format is      http[s]://<hostname>[:<port>]  Hostnames must be fully qualified: they must end in a single period ("`.`").  Only the schemes "http" and "https" are currently allowed.  Port numbers are given as a decimal number, and they must be omitted if the standard port numbers are used: 80 for http and 443 for https.  We call this limited URL the "site".  All URLs that share the same scheme, hostname and port are considered to be a part of the site and thus belong to the web asset.  Example: the asset with the site `https://www.google.com` contains all these URLs:    *   `https://www.google.com/`   *   `https://www.google.com:443/`   *   `https://www.google.com/foo`   *   `https://www.google.com/foo?bar`   *   `https://www.google.com/foo#bar`   *   `https://user@password:www.google.com/`  But it does not contain these URLs:    *   `http://www.google.com/`       (wrong scheme)   *   `https://google.com/`          (hostname does not match)   *   `https://www.google.com:444/`  (port does not match) REQUIRED
     */
    'target.web.site'?: string;
  }

  export class Resource$Statements {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * digitalassetlinks.statements.list
     * @desc Retrieves a list of all statements from a given source that match the specified target and statement string.  The API guarantees that all statements with secure source assets, such as HTTPS websites or Android apps, have been made in a secure way by the owner of those assets, as described in the [Digital Asset Links technical design specification](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md). Specifically, you should consider that for insecure websites (that is, where the URL starts with `http://` instead of `https://`), this guarantee cannot be made.  The `List` command is most useful in cases where the API client wants to know all the ways in which two assets are related, or enumerate all the relationships from a particular source asset.  Example: a feature that helps users navigate to related items.  When a mobile app is running on a device, the feature would make it easy to navigate to the corresponding web site or Google+ profile.
     * @alias digitalassetlinks.statements.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.relation Use only associations that match the specified relation.  See the [`Statement`](#Statement) message for a detailed definition of relation strings.  For a query to match a statement, one of the following must be true:  *    both the query's and the statement's relation strings match exactly,      or *    the query's relation string is empty or missing.  Example: A query with relation `delegate_permission/common.handle_all_urls` matches an asset link with relation `delegate_permission/common.handle_all_urls`.
     * @param {string=} params.source.androidApp.certificate.sha256Fingerprint The uppercase SHA-265 fingerprint of the certificate.  From the PEM  certificate, it can be acquired like this:      $ keytool -printcert -file $CERTFILE | grep SHA256:     SHA256: 14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83: \         42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5  or like this:      $ openssl x509 -in $CERTFILE -noout -fingerprint -sha256     SHA256 Fingerprint=14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64: \         16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5  In this example, the contents of this field would be `14:6D:E9:83:C5:73: 06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF: 44:E5`.  If these tools are not available to you, you can convert the PEM certificate into the DER format, compute the SHA-256 hash of that string and represent the result as a hexstring (that is, uppercase hexadecimal representations of each octet, separated by colons).
     * @param {string=} params.source.androidApp.packageName Android App assets are naturally identified by their Java package name. For example, the Google Maps app uses the package name `com.google.android.apps.maps`. REQUIRED
     * @param {string=} params.source.web.site Web assets are identified by a URL that contains only the scheme, hostname and port parts.  The format is      http[s]://<hostname>[:<port>]  Hostnames must be fully qualified: they must end in a single period ("`.`").  Only the schemes "http" and "https" are currently allowed.  Port numbers are given as a decimal number, and they must be omitted if the standard port numbers are used: 80 for http and 443 for https.  We call this limited URL the "site".  All URLs that share the same scheme, hostname and port are considered to be a part of the site and thus belong to the web asset.  Example: the asset with the site `https://www.google.com` contains all these URLs:    *   `https://www.google.com/`   *   `https://www.google.com:443/`   *   `https://www.google.com/foo`   *   `https://www.google.com/foo?bar`   *   `https://www.google.com/foo#bar`   *   `https://user@password:www.google.com/`  But it does not contain these URLs:    *   `http://www.google.com/`       (wrong scheme)   *   `https://google.com/`          (hostname does not match)   *   `https://www.google.com:444/`  (port does not match) REQUIRED
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Statements$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListResponse>;
    list(
      params: Params$Resource$Statements$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListResponse>,
      callback: BodyResponseCallback<Schema$ListResponse>
    ): void;
    list(
      params: Params$Resource$Statements$List,
      callback: BodyResponseCallback<Schema$ListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Statements$List
        | BodyResponseCallback<Schema$ListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListResponse>,
      callback?: BodyResponseCallback<Schema$ListResponse>
    ): void | GaxiosPromise<Schema$ListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Statements$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Statements$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://digitalassetlinks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/statements:list').replace(
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
        createAPIRequest<Schema$ListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Statements$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Use only associations that match the specified relation.  See the [`Statement`](#Statement) message for a detailed definition of relation strings.  For a query to match a statement, one of the following must be true:  *    both the query's and the statement's relation strings match exactly,      or *    the query's relation string is empty or missing.  Example: A query with relation `delegate_permission/common.handle_all_urls` matches an asset link with relation `delegate_permission/common.handle_all_urls`.
     */
    relation?: string;
    /**
     * The uppercase SHA-265 fingerprint of the certificate.  From the PEM  certificate, it can be acquired like this:      $ keytool -printcert -file $CERTFILE | grep SHA256:     SHA256: 14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83: \         42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5  or like this:      $ openssl x509 -in $CERTFILE -noout -fingerprint -sha256     SHA256 Fingerprint=14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64: \         16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5  In this example, the contents of this field would be `14:6D:E9:83:C5:73: 06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF: 44:E5`.  If these tools are not available to you, you can convert the PEM certificate into the DER format, compute the SHA-256 hash of that string and represent the result as a hexstring (that is, uppercase hexadecimal representations of each octet, separated by colons).
     */
    'source.androidApp.certificate.sha256Fingerprint'?: string;
    /**
     * Android App assets are naturally identified by their Java package name. For example, the Google Maps app uses the package name `com.google.android.apps.maps`. REQUIRED
     */
    'source.androidApp.packageName'?: string;
    /**
     * Web assets are identified by a URL that contains only the scheme, hostname and port parts.  The format is      http[s]://<hostname>[:<port>]  Hostnames must be fully qualified: they must end in a single period ("`.`").  Only the schemes "http" and "https" are currently allowed.  Port numbers are given as a decimal number, and they must be omitted if the standard port numbers are used: 80 for http and 443 for https.  We call this limited URL the "site".  All URLs that share the same scheme, hostname and port are considered to be a part of the site and thus belong to the web asset.  Example: the asset with the site `https://www.google.com` contains all these URLs:    *   `https://www.google.com/`   *   `https://www.google.com:443/`   *   `https://www.google.com/foo`   *   `https://www.google.com/foo?bar`   *   `https://www.google.com/foo#bar`   *   `https://user@password:www.google.com/`  But it does not contain these URLs:    *   `http://www.google.com/`       (wrong scheme)   *   `https://google.com/`          (hostname does not match)   *   `https://www.google.com:444/`  (port does not match) REQUIRED
     */
    'source.web.site'?: string;
  }
}
