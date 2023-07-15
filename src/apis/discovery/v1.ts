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

export namespace discovery_v1 {
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
   * API Discovery Service
   *
   * Provides information about other Google APIs, such as what APIs are available, the resource, and method details for each API.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const discovery = google.discovery('v1');
   * ```
   */
  export class Discovery {
    context: APIRequestContext;
    apis: Resource$Apis;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.apis = new Resource$Apis(this.context);
    }
  }

  export interface Schema$DirectoryList {
    /**
     * Indicate the version of the Discovery API used to generate this doc.
     */
    discoveryVersion?: string | null;
    /**
     * The individual directory entries. One entry per api/version pair.
     */
    items?: Array<{
      description?: string;
      discoveryLink?: string;
      discoveryRestUrl?: string;
      documentationLink?: string;
      icons?: {x16?: string; x32?: string};
      id?: string;
      kind?: string;
      labels?: string[];
      name?: string;
      preferred?: boolean;
      title?: string;
      version?: string;
    }> | null;
    /**
     * The kind for this response.
     */
    kind?: string | null;
  }
  export interface Schema$JsonSchema {
    /**
     * A reference to another schema. The value of this property is the "id" of another schema.
     */
    $ref?: string | null;
    /**
     * If this is a schema for an object, this property is the schema for any additional properties with dynamic keys on this object.
     */
    additionalProperties?: Schema$JsonSchema;
    /**
     * Additional information about this property.
     */
    annotations?: {required?: string[]} | null;
    /**
     * The default value of this property (if one exists).
     */
    default?: string | null;
    /**
     * Whether the parameter is deprecated.
     */
    deprecated?: boolean | null;
    /**
     * A description of this object.
     */
    description?: string | null;
    /**
     * Values this parameter may take (if it is an enum).
     */
    enum?: string[] | null;
    /**
     * The deprecation status for the enums. Each position maps to the corresponding value in the "enum" array.
     */
    enumDeprecated?: boolean[] | null;
    /**
     * The descriptions for the enums. Each position maps to the corresponding value in the "enum" array.
     */
    enumDescriptions?: string[] | null;
    /**
     * An additional regular expression or key that helps constrain the value. For more details see: http://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.23
     */
    format?: string | null;
    /**
     * Unique identifier for this schema.
     */
    id?: string | null;
    /**
     * If this is a schema for an array, this property is the schema for each element in the array.
     */
    items?: Schema$JsonSchema;
    /**
     * Whether this parameter goes in the query or the path for REST requests.
     */
    location?: string | null;
    /**
     * The maximum value of this parameter.
     */
    maximum?: string | null;
    /**
     * The minimum value of this parameter.
     */
    minimum?: string | null;
    /**
     * The regular expression this parameter must conform to. Uses Java 6 regex format: http://docs.oracle.com/javase/6/docs/api/java/util/regex/Pattern.html
     */
    pattern?: string | null;
    /**
     * If this is a schema for an object, list the schema for each property of this object.
     */
    properties?: {[key: string]: Schema$JsonSchema} | null;
    /**
     * The value is read-only, generated by the service. The value cannot be modified by the client. If the value is included in a POST, PUT, or PATCH request, it is ignored by the service.
     */
    readOnly?: boolean | null;
    /**
     * Whether this parameter may appear multiple times.
     */
    repeated?: boolean | null;
    /**
     * Whether the parameter is required.
     */
    required?: boolean | null;
    /**
     * The value type for this schema. A list of values can be found here: http://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.1
     */
    type?: string | null;
    /**
     * In a variant data type, the value of one property is used to determine how to interpret the entire entity. Its value must exist in a map of descriminant values to schema names.
     */
    variant?: {
      discriminant?: string;
      map?: Array<{$ref?: string; type_value?: string}>;
    } | null;
  }
  export interface Schema$RestDescription {
    /**
     * Authentication information.
     */
    auth?: {oauth2?: {scopes?: {[key: string]: {description?: string}}}} | null;
    /**
     * [DEPRECATED] The base path for REST requests.
     */
    basePath?: string | null;
    /**
     * [DEPRECATED] The base URL for REST requests.
     */
    baseUrl?: string | null;
    /**
     * The path for REST batch requests.
     */
    batchPath?: string | null;
    /**
     * Indicates how the API name should be capitalized and split into various parts. Useful for generating pretty class names.
     */
    canonicalName?: string | null;
    /**
     * The description of this API.
     */
    description?: string | null;
    /**
     * Indicate the version of the Discovery API used to generate this doc.
     */
    discoveryVersion?: string | null;
    /**
     * A link to human readable documentation for the API.
     */
    documentationLink?: string | null;
    /**
     * The ETag for this response.
     */
    etag?: string | null;
    /**
     * Enable exponential backoff for suitable methods in the generated clients.
     */
    exponentialBackoffDefault?: boolean | null;
    /**
     * A list of supported features for this API.
     */
    features?: string[] | null;
    /**
     * Links to 16x16 and 32x32 icons representing the API.
     */
    icons?: {x16?: string; x32?: string} | null;
    /**
     * The ID of this API.
     */
    id?: string | null;
    /**
     * The kind for this response.
     */
    kind?: string | null;
    /**
     * Labels for the status of this API, such as labs or deprecated.
     */
    labels?: string[] | null;
    /**
     * API-level methods for this API.
     */
    methods?: {[key: string]: Schema$RestMethod} | null;
    /**
     * The name of this API.
     */
    name?: string | null;
    /**
     * The domain of the owner of this API. Together with the ownerName and a packagePath values, this can be used to generate a library for this API which would have a unique fully qualified name.
     */
    ownerDomain?: string | null;
    /**
     * The name of the owner of this API. See ownerDomain.
     */
    ownerName?: string | null;
    /**
     * The package of the owner of this API. See ownerDomain.
     */
    packagePath?: string | null;
    /**
     * Common parameters that apply across all apis.
     */
    parameters?: {[key: string]: Schema$JsonSchema} | null;
    /**
     * The protocol described by this document.
     */
    protocol?: string | null;
    /**
     * The resources in this API.
     */
    resources?: {[key: string]: Schema$RestResource} | null;
    /**
     * The version of this API.
     */
    revision?: string | null;
    /**
     * The root URL under which all API services live.
     */
    rootUrl?: string | null;
    /**
     * The schemas for this API.
     */
    schemas?: {[key: string]: Schema$JsonSchema} | null;
    /**
     * The base path for all REST requests.
     */
    servicePath?: string | null;
    /**
     * The title of this API.
     */
    title?: string | null;
    /**
     * The version of this API.
     */
    version?: string | null;
    version_module?: boolean | null;
  }
  export interface Schema$RestMethod {
    /**
     * Whether this method is deprecated.
     */
    deprecated?: boolean | null;
    /**
     * Description of this method.
     */
    description?: string | null;
    /**
     * Whether this method requires an ETag to be specified. The ETag is sent as an HTTP If-Match or If-None-Match header.
     */
    etagRequired?: boolean | null;
    /**
     * The URI path of this REST method in (RFC 6570) format without level 2 features ({+var\}). Supplementary to the path property.
     */
    flatPath?: string | null;
    /**
     * HTTP method used by this method.
     */
    httpMethod?: string | null;
    /**
     * A unique ID for this method. This property can be used to match methods between different versions of Discovery.
     */
    id?: string | null;
    /**
     * Media upload parameters.
     */
    mediaUpload?: {
      accept?: string[];
      maxSize?: string;
      protocols?: {
        resumable?: {multipart?: boolean; path?: string};
        simple?: {multipart?: boolean; path?: string};
      };
    } | null;
    /**
     * Ordered list of required parameters, serves as a hint to clients on how to structure their method signatures. The array is ordered such that the "most-significant" parameter appears first.
     */
    parameterOrder?: string[] | null;
    /**
     * Details for all parameters in this method.
     */
    parameters?: {[key: string]: Schema$JsonSchema} | null;
    /**
     * The URI path of this REST method. Should be used in conjunction with the basePath property at the api-level.
     */
    path?: string | null;
    /**
     * The schema for the request.
     */
    request?: {$ref?: string; parameterName?: string} | null;
    /**
     * The schema for the response.
     */
    response?: {$ref?: string} | null;
    /**
     * OAuth 2.0 scopes applicable to this method.
     */
    scopes?: string[] | null;
    /**
     * Whether this method supports media downloads.
     */
    supportsMediaDownload?: boolean | null;
    /**
     * Whether this method supports media uploads.
     */
    supportsMediaUpload?: boolean | null;
    /**
     * Whether this method supports subscriptions.
     */
    supportsSubscription?: boolean | null;
    /**
     * Indicates that downloads from this method should use the download service URL (i.e. "/download"). Only applies if the method supports media download.
     */
    useMediaDownloadService?: boolean | null;
  }
  export interface Schema$RestResource {
    /**
     * Whether this resource is deprecated.
     */
    deprecated?: boolean | null;
    /**
     * Methods on this resource.
     */
    methods?: {[key: string]: Schema$RestMethod} | null;
    /**
     * Sub-resources on this resource.
     */
    resources?: {[key: string]: Schema$RestResource} | null;
  }

  export class Resource$Apis {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieve the description of a particular version of an api.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/discovery.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const discovery = google.discovery('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await discovery.apis.getRest({
     *     // The name of the API.
     *     api: 'placeholder-value',
     *     // The version of the API.
     *     version: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auth": {},
     *   //   "basePath": "my_basePath",
     *   //   "baseUrl": "my_baseUrl",
     *   //   "batchPath": "my_batchPath",
     *   //   "canonicalName": "my_canonicalName",
     *   //   "description": "my_description",
     *   //   "discoveryVersion": "my_discoveryVersion",
     *   //   "documentationLink": "my_documentationLink",
     *   //   "etag": "my_etag",
     *   //   "exponentialBackoffDefault": false,
     *   //   "features": [],
     *   //   "icons": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "labels": [],
     *   //   "methods": {},
     *   //   "name": "my_name",
     *   //   "ownerDomain": "my_ownerDomain",
     *   //   "ownerName": "my_ownerName",
     *   //   "packagePath": "my_packagePath",
     *   //   "parameters": {},
     *   //   "protocol": "my_protocol",
     *   //   "resources": {},
     *   //   "revision": "my_revision",
     *   //   "rootUrl": "my_rootUrl",
     *   //   "schemas": {},
     *   //   "servicePath": "my_servicePath",
     *   //   "title": "my_title",
     *   //   "version": "my_version",
     *   //   "version_module": false
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
    getRest(
      params: Params$Resource$Apis$Getrest,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getRest(
      params?: Params$Resource$Apis$Getrest,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RestDescription>;
    getRest(
      params: Params$Resource$Apis$Getrest,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getRest(
      params: Params$Resource$Apis$Getrest,
      options: MethodOptions | BodyResponseCallback<Schema$RestDescription>,
      callback: BodyResponseCallback<Schema$RestDescription>
    ): void;
    getRest(
      params: Params$Resource$Apis$Getrest,
      callback: BodyResponseCallback<Schema$RestDescription>
    ): void;
    getRest(callback: BodyResponseCallback<Schema$RestDescription>): void;
    getRest(
      paramsOrCallback?:
        | Params$Resource$Apis$Getrest
        | BodyResponseCallback<Schema$RestDescription>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RestDescription>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RestDescription>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$RestDescription> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Apis$Getrest;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apis$Getrest;
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
            url: (rootUrl + '/discovery/v1/apis/{api}/{version}/rest').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['api', 'version'],
        pathParams: ['api', 'version'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RestDescription>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RestDescription>(parameters);
      }
    }

    /**
     * Retrieve the list of APIs supported at this endpoint.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/discovery.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const discovery = google.discovery('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await discovery.apis.list({
     *     // Only include APIs with the given name.
     *     name: 'placeholder-value',
     *     // Return only the preferred version of an API.
     *     preferred: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "discoveryVersion": "my_discoveryVersion",
     *   //   "items": [],
     *   //   "kind": "my_kind"
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
      params: Params$Resource$Apis$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Apis$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DirectoryList>;
    list(
      params: Params$Resource$Apis$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Apis$List,
      options: MethodOptions | BodyResponseCallback<Schema$DirectoryList>,
      callback: BodyResponseCallback<Schema$DirectoryList>
    ): void;
    list(
      params: Params$Resource$Apis$List,
      callback: BodyResponseCallback<Schema$DirectoryList>
    ): void;
    list(callback: BodyResponseCallback<Schema$DirectoryList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Apis$List
        | BodyResponseCallback<Schema$DirectoryList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DirectoryList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DirectoryList>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DirectoryList> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Apis$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Apis$List;
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
            url: (rootUrl + '/discovery/v1/apis').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$DirectoryList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DirectoryList>(parameters);
      }
    }
  }

  export interface Params$Resource$Apis$Getrest extends StandardParameters {
    /**
     * The name of the API.
     */
    api?: string;
    /**
     * The version of the API.
     */
    version?: string;
  }
  export interface Params$Resource$Apis$List extends StandardParameters {
    /**
     * Only include APIs with the given name.
     */
    name?: string;
    /**
     * Return only the preferred version of an API.
     */
    preferred?: boolean;
  }
}
