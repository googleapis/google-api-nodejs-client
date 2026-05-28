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

export namespace developerknowledge_v1 {
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
   * Developer Knowledge API
   *
   * The Developer Knowledge API provides access to Google&#39;s developer knowledge.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const developerknowledge = google.developerknowledge('v1');
   * ```
   */
  export class Developerknowledge {
    context: APIRequestContext;
    documents: Resource$Documents;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.documents = new Resource$Documents(this.context);
    }
  }

  /**
   * Response message for DeveloperKnowledge.BatchGetDocuments.
   */
  export interface Schema$BatchGetDocumentsResponse {
    /**
     * Contains the documents requested.
     */
    documents?: Schema$Document[];
  }
  /**
   * A Document represents a piece of content from the Developer Knowledge corpus.
   */
  export interface Schema$Document {
    /**
     * Output only. Contains the full content of the document in Markdown format.
     */
    content?: string | null;
    /**
     * Output only. Specifies the data source of the document. Example data source: `firebase.google.com`
     */
    dataSource?: string | null;
    /**
     * Output only. Provides a description of the document.
     */
    description?: string | null;
    /**
     * Identifier. Contains the resource name of the document. Format: `documents/{uri_without_scheme\}` Example: `documents/docs.cloud.google.com/storage/docs/creating-buckets`
     */
    name?: string | null;
    /**
     * Output only. Provides the title of the document.
     */
    title?: string | null;
    /**
     * Output only. Represents the timestamp when the content or metadata of the document was last updated.
     */
    updateTime?: string | null;
    /**
     * Output only. Provides the URI of the content, such as `docs.cloud.google.com/storage/docs/creating-buckets`.
     */
    uri?: string | null;
    /**
     * Output only. Specifies the DocumentView of the document.
     */
    view?: string | null;
  }
  /**
   * A DocumentChunk represents a piece of content from a Document in the DeveloperKnowledge corpus. To fetch the entire document content, pass the `parent` to DeveloperKnowledge.GetDocument or DeveloperKnowledge.BatchGetDocuments.
   */
  export interface Schema$DocumentChunk {
    /**
     * Output only. Contains the content of the document chunk.
     */
    content?: string | null;
    /**
     * Output only. Represents metadata about the Document this chunk is from. The DocumentView of this Document message will be set to `DOCUMENT_VIEW_BASIC`. It is included here for convenience so that clients do not need to call DeveloperKnowledge.GetDocument or DeveloperKnowledge.BatchGetDocuments if they only need the metadata fields. Otherwise, clients should use DeveloperKnowledge.GetDocument or DeveloperKnowledge.BatchGetDocuments to fetch the full document content.
     */
    document?: Schema$Document;
    /**
     * Output only. Specifies the ID of this chunk within the document. The chunk ID is unique within a document, but not globally unique across documents. The chunk ID is not stable and may change over time.
     */
    id?: string | null;
    /**
     * Output only. Contains the resource name of the document this chunk is from. Format: `documents/{uri_without_scheme\}` Example: `documents/docs.cloud.google.com/storage/docs/creating-buckets`
     */
    parent?: string | null;
  }
  /**
   * Response message for DeveloperKnowledge.SearchDocumentChunks.
   */
  export interface Schema$SearchDocumentChunksResponse {
    /**
     * Optional. Provides a token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Contains the search results for the given query. Each DocumentChunk in this list contains a snippet of content relevant to the search query. Use the DocumentChunk.parent field of each result with DeveloperKnowledge.GetDocument or DeveloperKnowledge.BatchGetDocuments to retrieve the full document content.
     */
    results?: Schema$DocumentChunk[];
  }

  export class Resource$Documents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves multiple documents, each with its full Markdown content.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerknowledge.googleapis.com
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
     * const developerknowledge = google.developerknowledge('v1');
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
     *   const res = await developerknowledge.documents.batchGet({
     *     // Required. Specifies the names of the documents to retrieve. A maximum of 20 documents can be retrieved in a batch. The documents are returned in the same order as the `names` in the request. Format: `documents/{uri_without_scheme\}` Example: `documents/docs.cloud.google.com/storage/docs/creating-buckets` If you are changing the batch size, consider the value of `maxConcurrentGCSFetches` constant in the service implementation: http://cs///depot/google3/devrel/boq/developerknowledge/service/developerknowledge.go
     *     names: 'placeholder-value',
     *     // Optional. Specifies the DocumentView of the document. If unspecified, DeveloperKnowledge.BatchGetDocuments defaults to `DOCUMENT_VIEW_CONTENT`.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "documents": []
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
    batchGet(
      params: Params$Resource$Documents$Batchget,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchGet(
      params?: Params$Resource$Documents$Batchget,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BatchGetDocumentsResponse>>;
    batchGet(
      params: Params$Resource$Documents$Batchget,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchGet(
      params: Params$Resource$Documents$Batchget,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchGetDocumentsResponse>,
      callback: BodyResponseCallback<Schema$BatchGetDocumentsResponse>
    ): void;
    batchGet(
      params: Params$Resource$Documents$Batchget,
      callback: BodyResponseCallback<Schema$BatchGetDocumentsResponse>
    ): void;
    batchGet(
      callback: BodyResponseCallback<Schema$BatchGetDocumentsResponse>
    ): void;
    batchGet(
      paramsOrCallback?:
        | Params$Resource$Documents$Batchget
        | BodyResponseCallback<Schema$BatchGetDocumentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchGetDocumentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchGetDocumentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BatchGetDocumentsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Documents$Batchget;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Documents$Batchget;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://developerknowledge.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/documents:batchGet').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
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
        createAPIRequest<Schema$BatchGetDocumentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchGetDocumentsResponse>(parameters);
      }
    }

    /**
     * Retrieves a single document with its full Markdown content.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerknowledge.googleapis.com
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
     * const developerknowledge = google.developerknowledge('v1');
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
     *   const res = await developerknowledge.documents.get({
     *     // Required. Specifies the name of the document to retrieve. Format: `documents/{uri_without_scheme\}` Example: `documents/docs.cloud.google.com/storage/docs/creating-buckets`
     *     name: 'documents/.*',
     *     // Optional. Specifies the DocumentView of the document. If unspecified, DeveloperKnowledge.GetDocument defaults to `DOCUMENT_VIEW_CONTENT`.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "content": "my_content",
     *   //   "dataSource": "my_dataSource",
     *   //   "description": "my_description",
     *   //   "name": "my_name",
     *   //   "title": "my_title",
     *   //   "updateTime": "my_updateTime",
     *   //   "uri": "my_uri",
     *   //   "view": "my_view"
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
      params: Params$Resource$Documents$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Documents$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Document>>;
    get(
      params: Params$Resource$Documents$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Documents$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Document>,
      callback: BodyResponseCallback<Schema$Document>
    ): void;
    get(
      params: Params$Resource$Documents$Get,
      callback: BodyResponseCallback<Schema$Document>
    ): void;
    get(callback: BodyResponseCallback<Schema$Document>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Documents$Get
        | BodyResponseCallback<Schema$Document>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Document>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Document>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Document>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Documents$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Documents$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://developerknowledge.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Document>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Document>(parameters);
      }
    }

    /**
     * Searches for developer knowledge across Google's developer documentation. Returns DocumentChunks based on the user's query. There may be many chunks from the same Document. To retrieve full documents, use DeveloperKnowledge.GetDocument or DeveloperKnowledge.BatchGetDocuments with the DocumentChunk.parent returned in the SearchDocumentChunksResponse.results.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/developerknowledge.googleapis.com
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
     * const developerknowledge = google.developerknowledge('v1');
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
     *   const res = await developerknowledge.documents.searchDocumentChunks({
     *     // Optional. Applies a strict filter to the search results. The expression supports a subset of the syntax described at https://google.aip.dev/160. While `SearchDocumentChunks` returns DocumentChunks, the filter is applied to `DocumentChunk.document` fields. Supported fields for filtering: * `data_source` (STRING): The source of the document, e.g. `docs.cloud.google.com`. See https://developers.google.com/knowledge/reference/corpus-reference for the complete list of data sources in the corpus. * `update_time` (TIMESTAMP): The timestamp of when the document was last meaningfully updated. A meaningful update is one that changes document's markdown content or metadata. * `uri` (STRING): The document URI, e.g. `https://docs.cloud.google.com/bigquery/docs/tables`. STRING fields support `=` (equals) and `!=` (not equals) operators for **exact match** on the whole string. Partial match, prefix match, and regexp match are not supported. TIMESTAMP fields support `=`, `<`, `<=`, `\>`, and `\>=` operators. Timestamps must be in RFC-3339 format, e.g., `"2025-01-01T00:00:00Z"`. You can combine expressions using `AND`, `OR`, and `NOT` (or `-`) logical operators. `OR` has higher precedence than `AND`. Use parentheses for explicit precedence grouping. Examples: * `data_source = "docs.cloud.google.com" OR data_source = "firebase.google.com"` * `data_source != "firebase.google.com"` * `update_time < "2024-01-01T00:00:00Z"` * `update_time \>= "2025-01-22T00:00:00Z" AND (data_source = "developer.chrome.com" OR data_source = "web.dev")` * `uri = "https://docs.cloud.google.com/release-notes"` The `filter` string must not exceed 500 characters; values longer than 500 characters will result in an `INVALID_ARGUMENT` error.
     *     filter: 'placeholder-value',
     *     // Optional. Specifies the maximum number of results to return. The service may return fewer than this value. If unspecified, at most 5 results will be returned. The maximum value is 20; values above 20 will result in an INVALID_ARGUMENT error.
     *     pageSize: 'placeholder-value',
     *     // Optional. Contains a page token, received from a previous `SearchDocumentChunks` call. Provide this to retrieve the subsequent page.
     *     pageToken: 'placeholder-value',
     *     // Required. Provides the raw query string provided by the user, such as "How to create a Cloud Storage bucket?".
     *     query: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "results": []
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
    searchDocumentChunks(
      params: Params$Resource$Documents$Searchdocumentchunks,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    searchDocumentChunks(
      params?: Params$Resource$Documents$Searchdocumentchunks,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SearchDocumentChunksResponse>>;
    searchDocumentChunks(
      params: Params$Resource$Documents$Searchdocumentchunks,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    searchDocumentChunks(
      params: Params$Resource$Documents$Searchdocumentchunks,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SearchDocumentChunksResponse>,
      callback: BodyResponseCallback<Schema$SearchDocumentChunksResponse>
    ): void;
    searchDocumentChunks(
      params: Params$Resource$Documents$Searchdocumentchunks,
      callback: BodyResponseCallback<Schema$SearchDocumentChunksResponse>
    ): void;
    searchDocumentChunks(
      callback: BodyResponseCallback<Schema$SearchDocumentChunksResponse>
    ): void;
    searchDocumentChunks(
      paramsOrCallback?:
        | Params$Resource$Documents$Searchdocumentchunks
        | BodyResponseCallback<Schema$SearchDocumentChunksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchDocumentChunksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchDocumentChunksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SearchDocumentChunksResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Documents$Searchdocumentchunks;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Documents$Searchdocumentchunks;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://developerknowledge.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/documents:searchDocumentChunks').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
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
        createAPIRequest<Schema$SearchDocumentChunksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SearchDocumentChunksResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Documents$Batchget extends StandardParameters {
    /**
     * Required. Specifies the names of the documents to retrieve. A maximum of 20 documents can be retrieved in a batch. The documents are returned in the same order as the `names` in the request. Format: `documents/{uri_without_scheme\}` Example: `documents/docs.cloud.google.com/storage/docs/creating-buckets` If you are changing the batch size, consider the value of `maxConcurrentGCSFetches` constant in the service implementation: http://cs///depot/google3/devrel/boq/developerknowledge/service/developerknowledge.go
     */
    names?: string[];
    /**
     * Optional. Specifies the DocumentView of the document. If unspecified, DeveloperKnowledge.BatchGetDocuments defaults to `DOCUMENT_VIEW_CONTENT`.
     */
    view?: string;
  }
  export interface Params$Resource$Documents$Get extends StandardParameters {
    /**
     * Required. Specifies the name of the document to retrieve. Format: `documents/{uri_without_scheme\}` Example: `documents/docs.cloud.google.com/storage/docs/creating-buckets`
     */
    name?: string;
    /**
     * Optional. Specifies the DocumentView of the document. If unspecified, DeveloperKnowledge.GetDocument defaults to `DOCUMENT_VIEW_CONTENT`.
     */
    view?: string;
  }
  export interface Params$Resource$Documents$Searchdocumentchunks extends StandardParameters {
    /**
     * Optional. Applies a strict filter to the search results. The expression supports a subset of the syntax described at https://google.aip.dev/160. While `SearchDocumentChunks` returns DocumentChunks, the filter is applied to `DocumentChunk.document` fields. Supported fields for filtering: * `data_source` (STRING): The source of the document, e.g. `docs.cloud.google.com`. See https://developers.google.com/knowledge/reference/corpus-reference for the complete list of data sources in the corpus. * `update_time` (TIMESTAMP): The timestamp of when the document was last meaningfully updated. A meaningful update is one that changes document's markdown content or metadata. * `uri` (STRING): The document URI, e.g. `https://docs.cloud.google.com/bigquery/docs/tables`. STRING fields support `=` (equals) and `!=` (not equals) operators for **exact match** on the whole string. Partial match, prefix match, and regexp match are not supported. TIMESTAMP fields support `=`, `<`, `<=`, `\>`, and `\>=` operators. Timestamps must be in RFC-3339 format, e.g., `"2025-01-01T00:00:00Z"`. You can combine expressions using `AND`, `OR`, and `NOT` (or `-`) logical operators. `OR` has higher precedence than `AND`. Use parentheses for explicit precedence grouping. Examples: * `data_source = "docs.cloud.google.com" OR data_source = "firebase.google.com"` * `data_source != "firebase.google.com"` * `update_time < "2024-01-01T00:00:00Z"` * `update_time \>= "2025-01-22T00:00:00Z" AND (data_source = "developer.chrome.com" OR data_source = "web.dev")` * `uri = "https://docs.cloud.google.com/release-notes"` The `filter` string must not exceed 500 characters; values longer than 500 characters will result in an `INVALID_ARGUMENT` error.
     */
    filter?: string;
    /**
     * Optional. Specifies the maximum number of results to return. The service may return fewer than this value. If unspecified, at most 5 results will be returned. The maximum value is 20; values above 20 will result in an INVALID_ARGUMENT error.
     */
    pageSize?: number;
    /**
     * Optional. Contains a page token, received from a previous `SearchDocumentChunks` call. Provide this to retrieve the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. Provides the raw query string provided by the user, such as "How to create a Cloud Storage bucket?".
     */
    query?: string;
  }
}
