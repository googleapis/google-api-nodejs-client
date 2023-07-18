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

export namespace checks_v1alpha {
  export interface Options extends GlobalOptions {
    version: 'v1alpha';
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
   * Checks API
   *
   * The Checks API contains powerful and easy-to-use privacy and compliance APIs that interact with the Checks product and its underlying technology.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const checks = google.checks('v1alpha');
   * ```
   */
  export class Checks {
    context: APIRequestContext;
    accounts: Resource$Accounts;
    privacypolicy: Resource$Privacypolicy;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accounts = new Resource$Accounts(this.context);
      this.privacypolicy = new Resource$Privacypolicy(this.context);
      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * The request proto for AnalyzePrivacyPolicy method.
   */
  export interface Schema$AnalyzePrivacyPolicyRequest {
    /**
     * Web page raw HTML content for the privacy policy page to be analyzed. Useful when the client wants to analyze a privacy policy already fetched.
     */
    privacyPolicyPageContent?: string | null;
    /**
     * URL for the privacy policy page to be analyzed. https://linter.aip.dev/140/uri (Use `uri` instead of `url` in field name)
     */
    privacyPolicyUri?: string | null;
  }
  /**
   * The response proto for AnalyzePrivacyPolicy method.
   */
  export interface Schema$AnalyzePrivacyPolicyResponse {
    /**
     * List of all data types in the privacy policy.
     */
    dataPurposeAnnotations?: Schema$PolicyPurposeOfUseAnnotation[];
    /**
     * List of all data types in the privacy policy.
     */
    dataTypeAnnotations?: Schema$PolicyDataTypeAnnotation[];
    /**
     * HTML content for the privacy policy page.
     */
    htmlContent?: string | null;
    /**
     * Information about the date when the privacy policy was last updated.
     */
    lastUpdatedDateInfo?: Schema$LastUpdatedDate;
    /**
     * List of all sections in the privacy policy.
     */
    sectionAnnotations?: Schema$PolicySectionAnnotation[];
  }
  /**
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
   */
  export interface Schema$Date {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | null;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | null;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | null;
  }
  /**
   * Information about the date when the privacy policy was last updated.
   */
  export interface Schema$LastUpdatedDate {
    /**
     * Byte offsets for the end of the date text inside the full text.
     */
    endOffset?: string | null;
    /**
     * Date when the privacy policy was last updated.
     */
    lastUpdatedDate?: Schema$Date;
    /**
     * Byte offsets for the start of the date text inside the full text.
     */
    startOffset?: string | null;
    /**
     * The bytes of actual text content in the section. NOTE: - This will correspond to the whole sentence that includes the date. - This field might contain HTML and it is not sanitized.
     */
    textContent?: string | null;
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
  export interface Schema$PolicyDataTypeAnnotation {
    /**
     * Type of the data mentioned in the policy.
     */
    dataType?: string | null;
    /**
     * Byte offsets for the end of the data type sentence inside the full text.
     */
    endOffset?: string | null;
    /**
     * Score given by the model representing how confident it was regarding this `text_content` being of `data_type`.
     */
    score?: number | null;
    /**
     * Byte offsets for the start of the data type sentence inside the full text.
     */
    startOffset?: string | null;
    /**
     * Actual text content in the section. This makes it much easier to consume the information. NOTE: This field might contain HTML and does not guarantee a SafeHtml security contract go/safehtmltypecontracts#safehtml.
     */
    textContent?: string | null;
  }
  export interface Schema$PolicyPurposeOfUseAnnotation {
    /**
     * Byte offsets for the end of the purpose of use sentence inside the full text.
     */
    endOffset?: string | null;
    /**
     * Purpose of use mentioned in the policy.
     */
    purposeOfUse?: string | null;
    /**
     * Score given by the model representing how confident it was regarding this `text_content` being of `purpose_of_use`.
     */
    score?: number | null;
    /**
     * Byte offsets for the start of the purpose of use sentence inside the full text.
     */
    startOffset?: string | null;
    /**
     * The bytes of actual text content in the sentence that mentions the purpose of use. This makes it much easier to consume the information. NOTE: This field might contain HTML and does not guarantee a SafeHtml security contract go/safehtmltypecontracts#safehtml.
     */
    textContent?: string | null;
  }
  export interface Schema$PolicySectionAnnotation {
    /**
     * Byte offsets for the end of the section inside the full text.
     */
    endOffset?: string | null;
    /**
     * Score given by the model representing how confident it was regarding this `text_content` being of `section_type`.
     */
    score?: number | null;
    /**
     * Type of the high-level category in the policy.
     */
    sectionType?: string | null;
    /**
     * Byte offsets for the start of the section inside the full text.
     */
    startOffset?: string | null;
    /**
     * Actual text content in the section. This makes it much easier to consume the information. NOTE: This field might contain HTML and does not guarantee a SafeHtml security contract go/safehtmltypecontracts#safehtml.
     */
    textContent?: string | null;
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

  export class Resource$Accounts {
    context: APIRequestContext;
    apps: Resource$Accounts$Apps;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.apps = new Resource$Accounts$Apps(this.context);
    }
  }

  export class Resource$Accounts$Apps {
    context: APIRequestContext;
    operations: Resource$Accounts$Apps$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations = new Resource$Accounts$Apps$Operations(this.context);
    }
  }

  export class Resource$Accounts$Apps$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/checks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const checks = google.checks('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/xapi.zoo'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await checks.accounts.apps.operations.get({
     *     // The name of the operation resource.
     *     name: 'accounts/my-account/apps/my-app/operations/my-operation',
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
      params: Params$Resource$Accounts$Apps$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accounts$Apps$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Accounts$Apps$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Apps$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Accounts$Apps$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Apps$Operations$Get
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
        {}) as Params$Resource$Accounts$Apps$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Apps$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://checks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
  }

  export interface Params$Resource$Accounts$Apps$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }

  export class Resource$Privacypolicy {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Analyzes the privacy policy of the given policy URL or content.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/checks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const checks = google.checks('v1alpha');
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
     *   const res = await checks.privacypolicy.analyze({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "privacyPolicyPageContent": "my_privacyPolicyPageContent",
     *       //   "privacyPolicyUri": "my_privacyPolicyUri"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataPurposeAnnotations": [],
     *   //   "dataTypeAnnotations": [],
     *   //   "htmlContent": "my_htmlContent",
     *   //   "lastUpdatedDateInfo": {},
     *   //   "sectionAnnotations": []
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
    analyze(
      params: Params$Resource$Privacypolicy$Analyze,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    analyze(
      params?: Params$Resource$Privacypolicy$Analyze,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AnalyzePrivacyPolicyResponse>;
    analyze(
      params: Params$Resource$Privacypolicy$Analyze,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    analyze(
      params: Params$Resource$Privacypolicy$Analyze,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AnalyzePrivacyPolicyResponse>,
      callback: BodyResponseCallback<Schema$AnalyzePrivacyPolicyResponse>
    ): void;
    analyze(
      params: Params$Resource$Privacypolicy$Analyze,
      callback: BodyResponseCallback<Schema$AnalyzePrivacyPolicyResponse>
    ): void;
    analyze(
      callback: BodyResponseCallback<Schema$AnalyzePrivacyPolicyResponse>
    ): void;
    analyze(
      paramsOrCallback?:
        | Params$Resource$Privacypolicy$Analyze
        | BodyResponseCallback<Schema$AnalyzePrivacyPolicyResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AnalyzePrivacyPolicyResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AnalyzePrivacyPolicyResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AnalyzePrivacyPolicyResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Privacypolicy$Analyze;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Privacypolicy$Analyze;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://checks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/privacypolicy:analyze').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$AnalyzePrivacyPolicyResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AnalyzePrivacyPolicyResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Privacypolicy$Analyze
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$AnalyzePrivacyPolicyRequest;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    privacypolicy: Resource$Projects$Privacypolicy;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.privacypolicy = new Resource$Projects$Privacypolicy(this.context);
    }
  }

  export class Resource$Projects$Privacypolicy {
    context: APIRequestContext;
    operations: Resource$Projects$Privacypolicy$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations = new Resource$Projects$Privacypolicy$Operations(
        this.context
      );
    }
  }

  export class Resource$Projects$Privacypolicy$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/checks.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const checks = google.checks('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/xapi.zoo'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await checks.projects.privacypolicy.operations.get({
     *     // The name of the operation resource.
     *     name: 'projects/my-project/privacypolicy/operations/my-operation',
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
      params: Params$Resource$Projects$Privacypolicy$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Privacypolicy$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Projects$Privacypolicy$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Privacypolicy$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Privacypolicy$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Privacypolicy$Operations$Get
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
        {}) as Params$Resource$Projects$Privacypolicy$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Privacypolicy$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://checks.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
  }

  export interface Params$Resource$Projects$Privacypolicy$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
}
