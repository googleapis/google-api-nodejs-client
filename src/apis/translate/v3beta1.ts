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

export namespace translate_v3beta1 {
  export interface Options extends GlobalOptions {
    version: 'v3beta1';
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
   * Cloud Translation API
   *
   * Integrates text translation into your website or application.
   *
   * @example
   * const {google} = require('googleapis');
   * const translate = google.translate('v3beta1');
   *
   * @namespace translate
   * @type {Function}
   * @version v3beta1
   * @variation v3beta1
   * @param {object=} options Options for Translate
   */
  export class Translate {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * The batch translation request.
   */
  export interface Schema$BatchTranslateTextRequest {
    /**
     * Optional. Glossaries to be applied for translation. It&#39;s keyed by target language code.
     */
    glossaries?: {[key: string]: Schema$TranslateTextGlossaryConfig} | null;
    /**
     * Required. Input configurations. The total number of files matched should be &lt;= 1000. The total content size should be &lt;= 100M Unicode codepoints. The files must use UTF-8 encoding.
     */
    inputConfigs?: Schema$InputConfig[];
    /**
     * Optional. The labels with user-defined metadata for the request.  Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter.  See https://goo.gl/xmQnxf for more information on and examples of labels.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Optional. The models to use for translation. Map&#39;s key is target language code. Map&#39;s value is model name. Value can be a built-in general model, or an AutoML Translation model.  The value format depends on model type:  - AutoML Translation models:   `projects/{project-id}/locations/{location-id}/models/{model-id}`  - General (built-in) models:   `projects/{project-id}/locations/{location-id}/models/general/nmt`,   `projects/{project-id}/locations/{location-id}/models/general/base`   If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used.
     */
    models?: {[key: string]: string} | null;
    /**
     * Required. Output configuration. If 2 input configs match to the same file (that is, same input path), we don&#39;t generate output for duplicate inputs.
     */
    outputConfig?: Schema$OutputConfig;
    /**
     * Required. Source language code.
     */
    sourceLanguageCode?: string | null;
    /**
     * Required. Specify up to 10 language codes here.
     */
    targetLanguageCodes?: string[] | null;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * The response message for language detection.
   */
  export interface Schema$DetectedLanguage {
    /**
     * The confidence of the detection result for this language.
     */
    confidence?: number | null;
    /**
     * The BCP-47 language code of source content in the request, detected automatically.
     */
    languageCode?: string | null;
  }
  /**
   * The request message for language detection.
   */
  export interface Schema$DetectLanguageRequest {
    /**
     * The content of the input stored as a string.
     */
    content?: string | null;
    /**
     * Optional. The labels with user-defined metadata for the request.  Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter.  See https://goo.gl/xmQnxf for more information on and examples of labels.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Optional. The format of the source text, for example, &quot;text/html&quot;, &quot;text/plain&quot;. If left blank, the MIME type defaults to &quot;text/html&quot;.
     */
    mimeType?: string | null;
    /**
     * Optional. The language detection model to be used.  Format: `projects/{project-id}/locations/{location-id}/models/language-detection/{model-id}`  Only one language detection model is currently supported: `projects/{project-id}/locations/{location-id}/models/language-detection/default`.  If not specified, the default model is used.
     */
    model?: string | null;
  }
  /**
   * The response message for language detection.
   */
  export interface Schema$DetectLanguageResponse {
    /**
     * A list of detected languages sorted by detection confidence in descending order. The most probable language first.
     */
    languages?: Schema$DetectedLanguage[];
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * The Google Cloud Storage location for the output content.
   */
  export interface Schema$GcsDestination {
    /**
     * Required. There must be no files under &#39;output_uri_prefix&#39;. &#39;output_uri_prefix&#39; must end with &quot;/&quot; and start with &quot;gs://&quot;, otherwise an INVALID_ARGUMENT (400) error is returned.
     */
    outputUriPrefix?: string | null;
  }
  /**
   * The Google Cloud Storage location for the input content.
   */
  export interface Schema$GcsSource {
    /**
     * Required. Source data URI. For example, `gs://my_bucket/my_object`.
     */
    inputUri?: string | null;
  }
  /**
   * Represents a glossary built from user provided data.
   */
  export interface Schema$Glossary {
    /**
     * Output only. When the glossary creation was finished.
     */
    endTime?: string | null;
    /**
     * Output only. The number of entries defined in the glossary.
     */
    entryCount?: number | null;
    /**
     * Required. Provides examples to build the glossary from. Total glossary must not exceed 10M Unicode codepoints.
     */
    inputConfig?: Schema$GlossaryInputConfig;
    /**
     * Used with equivalent term set glossaries.
     */
    languageCodesSet?: Schema$LanguageCodesSet;
    /**
     * Used with unidirectional glossaries.
     */
    languagePair?: Schema$LanguageCodePair;
    /**
     * Required. The resource name of the glossary. Glossary names have the form `projects/{project-id}/locations/{location-id}/glossaries/{glossary-id}`.
     */
    name?: string | null;
    /**
     * Output only. When CreateGlossary was called.
     */
    submitTime?: string | null;
  }
  /**
   * Input configuration for glossaries.
   */
  export interface Schema$GlossaryInputConfig {
    /**
     * Required. Google Cloud Storage location of glossary data. File format is determined based on the filename extension. API returns [google.rpc.Code.INVALID_ARGUMENT] for unsupported URI-s and file formats. Wildcards are not allowed. This must be a single file in one of the following formats:  For unidirectional glossaries:  - TSV/CSV (`.tsv`/`.csv`): 2 column file, tab- or comma-separated.   The first column is source text. The second column is target text.   The file must not contain headers. That is, the first row is data, not   column names.  - TMX (`.tmx`): TMX file with parallel data defining source/target term pairs.  For equivalent term sets glossaries:  - CSV (`.csv`): Multi-column CSV file defining equivalent glossary terms   in multiple languages. The format is defined for Google Translation   Toolkit and documented in [Use a   glossary](https://support.google.com/translatortoolkit/answer/6306379?hl=en).
     */
    gcsSource?: Schema$GcsSource;
  }
  /**
   * Input configuration for BatchTranslateText request.
   */
  export interface Schema$InputConfig {
    /**
     * Required. Google Cloud Storage location for the source input. This can be a single file (for example, `gs://translation-test/input.tsv`) or a wildcard (for example, `gs://translation-test/x). If a file extension is `.tsv`, it can contain either one or two columns. The first column (optional) is the id of the text request. If the first column is missing, we use the row number (0-based) from the input file as the ID in the output file. The second column is the actual text to be  translated. We recommend each row be &lt;= 10K Unicode codepoints, otherwise an error might be returned. Note that the input tsv must be RFC 4180 compliant.  You could use https://github.com/Clever/csvlint to check potential formatting errors in your tsv file. csvlint --delimiter=&#39;\t&#39; your_input_file.tsv  The other supported file extensions are `.txt` or `.html`, which is treated as a single large chunk of text.
     */
    gcsSource?: Schema$GcsSource;
    /**
     * Optional. Can be &quot;text/plain&quot; or &quot;text/html&quot;. For `.tsv`, &quot;text/html&quot; is used if mime_type is missing. For `.html`, this field must be &quot;text/html&quot; or empty. For `.txt`, this field must be &quot;text/plain&quot; or empty.
     */
    mimeType?: string | null;
  }
  /**
   * Used with unidirectional glossaries.
   */
  export interface Schema$LanguageCodePair {
    /**
     * Required. The BCP-47 language code of the input text, for example, &quot;en-US&quot;. Expected to be an exact match for GlossaryTerm.language_code.
     */
    sourceLanguageCode?: string | null;
    /**
     * Required. The BCP-47 language code for translation output, for example, &quot;zh-CN&quot;. Expected to be an exact match for GlossaryTerm.language_code.
     */
    targetLanguageCode?: string | null;
  }
  /**
   * Used with equivalent term set glossaries.
   */
  export interface Schema$LanguageCodesSet {
    /**
     * The BCP-47 language code(s) for terms defined in the glossary. All entries are unique. The list contains at least two entries. Expected to be an exact match for GlossaryTerm.language_code.
     */
    languageCodes?: string[] | null;
  }
  /**
   * Response message for ListGlossaries.
   */
  export interface Schema$ListGlossariesResponse {
    /**
     * The list of glossaries for a project.
     */
    glossaries?: Schema$Glossary[];
    /**
     * A token to retrieve a page of results. Pass this value in the [ListGlossariesRequest.page_token] field in the subsequent call to `ListGlossaries` method to retrieve the next page of results.
     */
    nextPageToken?: string | null;
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
    nextPageToken?: string | null;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$Operation[];
  }
  /**
   * A resource that represents Google Cloud Platform location.
   */
  export interface Schema$Location {
    /**
     * The friendly name for this location, typically a nearby city name. For example, &quot;Tokyo&quot;.
     */
    displayName?: string | null;
    /**
     * Cross-service attributes for the location. For example      {&quot;cloud.googleapis.com/region&quot;: &quot;us-east1&quot;}
     */
    labels?: {[key: string]: string} | null;
    /**
     * The canonical id for this location. For example: `&quot;us-east1&quot;`.
     */
    locationId?: string | null;
    /**
     * Service-specific metadata. For example the available capacity at the given location.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Resource name for the location, which may vary between implementations. For example: `&quot;projects/example-project/locations/us-east1&quot;`
     */
    name?: string | null;
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
   * Output configuration for BatchTranslateText request.
   */
  export interface Schema$OutputConfig {
    /**
     * Google Cloud Storage destination for output content. For every single input file (for example, gs://a/b/c.[extension]), we generate at most 2 * n output files. (n is the # of target_language_codes in the BatchTranslateTextRequest).  Output files (tsv) generated are compliant with RFC 4180 except that record delimiters are &#39;x/&#39; instead of &#39;\rx/&#39;. We don&#39;t provide any way to change record delimiters.  While the input files are being processed, we write/update an index file &#39;index.csv&#39;  under &#39;output_uri_prefix&#39; (for example, gs://translation-test/index.csv) The index file is generated/updated as new files are being translated. The format is:  input_file,target_language_code,translations_file,errors_file, glossary_translations_file,glossary_errors_file  input_file is one file we matched using gcs_source.input_uri. target_language_code is provided in the request. translations_file contains the translations. (details provided below) errors_file contains the errors during processing of the file. (details below). Both translations_file and errors_file could be empty strings if we have no content to output. glossary_translations_file and glossary_errors_file are always empty strings if the input_file is tsv. They could also be empty if we have no content to output.  Once a row is present in index.csv, the input/output matching never changes. Callers should also expect all the content in input_file are processed and ready to be consumed (that is, no partial output file is written).  The format of translations_file (for target language code &#39;trg&#39;) is: gs://translation_test/a_b_c_&#39;trg&#39;_translations.[extension]  If the input file extension is tsv, the output has the following columns: Column 1: ID of the request provided in the input, if it&#39;s not provided in the input, then the input row number is used (0-based). Column 2: source sentence. Column 3: translation without applying a glossary. Empty string if there is an error. Column 4 (only present if a glossary is provided in the request): translation after applying the glossary. Empty string if there is an error applying the glossary. Could be same string as column 3 if there is no glossary applied.  If input file extension is a txt or html, the translation is directly written to the output file. If glossary is requested, a separate glossary_translations_file has format of gs://translation_test/a_b_c_&#39;trg&#39;_glossary_translations.[extension]  The format of errors file (for target language code &#39;trg&#39;) is: gs://translation_test/a_b_c_&#39;trg&#39;_errors.[extension]  If the input file extension is tsv, errors_file contains the following: Column 1: ID of the request provided in the input, if it&#39;s not provided in the input, then the input row number is used (0-based). Column 2: source sentence. Column 3: Error detail for the translation. Could be empty. Column 4 (only present if a glossary is provided in the request): Error when applying the glossary.  If the input file extension is txt or html, glossary_error_file will be generated that contains error details. glossary_error_file has format of gs://translation_test/a_b_c_&#39;trg&#39;_glossary_errors.[extension]
     */
    gcsDestination?: Schema$GcsDestination;
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
   * A single supported language response corresponds to information related to one supported language.
   */
  export interface Schema$SupportedLanguage {
    /**
     * Human readable name of the language localized in the display language specified in the request.
     */
    displayName?: string | null;
    /**
     * Supported language code, generally consisting of its ISO 639-1 identifier, for example, &#39;en&#39;, &#39;ja&#39;. In certain cases, BCP-47 codes including language and region identifiers are returned (for example, &#39;zh-TW&#39; and &#39;zh-CN&#39;)
     */
    languageCode?: string | null;
    /**
     * Can be used as source language.
     */
    supportSource?: boolean | null;
    /**
     * Can be used as target language.
     */
    supportTarget?: boolean | null;
  }
  /**
   * The response message for discovering supported languages.
   */
  export interface Schema$SupportedLanguages {
    /**
     * A list of supported language responses. This list contains an entry for each language the Translation API supports.
     */
    languages?: Schema$SupportedLanguage[];
  }
  /**
   * Configures which glossary should be used for a specific target language, and defines options for applying that glossary.
   */
  export interface Schema$TranslateTextGlossaryConfig {
    /**
     * Required. Specifies the glossary used for this translation. Use this format: projects/x/locations/x/glossaries/*
     */
    glossary?: string | null;
    /**
     * Optional. Indicates match is case-insensitive. Default value is false if missing.
     */
    ignoreCase?: boolean | null;
  }
  /**
   * The request message for synchronous translation.
   */
  export interface Schema$TranslateTextRequest {
    /**
     * Required. The content of the input in string format. We recommend the total content be less than 30k codepoints. Use BatchTranslateText for larger text.
     */
    contents?: string[] | null;
    /**
     * Optional. Glossary to be applied. The glossary must be within the same region (have the same location-id) as the model, otherwise an INVALID_ARGUMENT (400) error is returned.
     */
    glossaryConfig?: Schema$TranslateTextGlossaryConfig;
    /**
     * Optional. The labels with user-defined metadata for the request.  Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter.  See https://goo.gl/xmQnxf for more information on and examples of labels.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Optional. The format of the source text, for example, &quot;text/html&quot;,  &quot;text/plain&quot;. If left blank, the MIME type defaults to &quot;text/html&quot;.
     */
    mimeType?: string | null;
    /**
     * Optional. The `model` type requested for this translation.  The format depends on model type:  - AutoML Translation models:   `projects/{project-id}/locations/{location-id}/models/{model-id}`  - General (built-in) models:   `projects/{project-id}/locations/{location-id}/models/general/nmt`,   `projects/{project-id}/locations/{location-id}/models/general/base`   For global (non-regionalized) requests, use `location-id` `global`. For example, `projects/{project-id}/locations/global/models/general/nmt`.  If missing, the system decides which google base model to use.
     */
    model?: string | null;
    /**
     * Optional. The BCP-47 language code of the input text if known, for example, &quot;en-US&quot; or &quot;sr-Latn&quot;. Supported language codes are listed in Language Support. If the source language isn&#39;t specified, the API attempts to identify the source language automatically and returns the source language within the response.
     */
    sourceLanguageCode?: string | null;
    /**
     * Required. The BCP-47 language code to use for translation of the input text, set to one of the language codes listed in Language Support.
     */
    targetLanguageCode?: string | null;
  }
  export interface Schema$TranslateTextResponse {
    /**
     * Text translation responses if a glossary is provided in the request. This can be the same as `translations` if no terms apply. This field has the same length as `contents`.
     */
    glossaryTranslations?: Schema$Translation[];
    /**
     * Text translation responses with no glossary applied. This field has the same length as `contents`.
     */
    translations?: Schema$Translation[];
  }
  /**
   * A single translation response.
   */
  export interface Schema$Translation {
    /**
     * The BCP-47 language code of source text in the initial request, detected automatically, if no source language was passed within the initial request. If the source language was passed, auto-detection of the language does not occur and this field is empty.
     */
    detectedLanguageCode?: string | null;
    /**
     * The `glossary_config` used for this translation.
     */
    glossaryConfig?: Schema$TranslateTextGlossaryConfig;
    /**
     * Only present when `model` is present in the request. This is same as `model` provided in the request.
     */
    model?: string | null;
    /**
     * Text translated into the target language.
     */
    translatedText?: string | null;
  }
  /**
   * The request message for Operations.WaitOperation.
   */
  export interface Schema$WaitOperationRequest {
    /**
     * The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
     */
    timeout?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
    }

    /**
     * translate.projects.detectLanguage
     * @desc Detects the language of text within a request.
     * @alias translate.projects.detectLanguage
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. Project or location to make a call. Must refer to a caller's project.  Format: `projects/{project-id}/locations/{location-id}` or `projects/{project-id}`.  For global calls, use `projects/{project-id}/locations/global` or `projects/{project-id}`.  Only models within the same region (has same location-id) can be used. Otherwise an INVALID_ARGUMENT (400) error is returned.
     * @param {().DetectLanguageRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    detectLanguage(
      params?: Params$Resource$Projects$Detectlanguage,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DetectLanguageResponse>;
    detectLanguage(
      params: Params$Resource$Projects$Detectlanguage,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DetectLanguageResponse>,
      callback: BodyResponseCallback<Schema$DetectLanguageResponse>
    ): void;
    detectLanguage(
      params: Params$Resource$Projects$Detectlanguage,
      callback: BodyResponseCallback<Schema$DetectLanguageResponse>
    ): void;
    detectLanguage(
      callback: BodyResponseCallback<Schema$DetectLanguageResponse>
    ): void;
    detectLanguage(
      paramsOrCallback?:
        | Params$Resource$Projects$Detectlanguage
        | BodyResponseCallback<Schema$DetectLanguageResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DetectLanguageResponse>,
      callback?: BodyResponseCallback<Schema$DetectLanguageResponse>
    ): void | GaxiosPromise<Schema$DetectLanguageResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Detectlanguage;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Detectlanguage;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://translation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v3beta1/{+parent}:detectLanguage').replace(
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
        createAPIRequest<Schema$DetectLanguageResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DetectLanguageResponse>(parameters);
      }
    }

    /**
     * translate.projects.getSupportedLanguages
     * @desc Returns a list of supported languages for translation.
     * @alias translate.projects.getSupportedLanguages
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.displayLanguageCode Optional. The language to use to return localized, human readable names of supported languages. If missing, then display names are not returned in a response.
     * @param {string=} params.model Optional. Get supported languages of this model.  The format depends on model type:  - AutoML Translation models:   `projects/{project-id}/locations/{location-id}/models/{model-id}`  - General (built-in) models:   `projects/{project-id}/locations/{location-id}/models/general/nmt`,   `projects/{project-id}/locations/{location-id}/models/general/base`   Returns languages supported by the specified model. If missing, we get supported languages of Google general base (PBMT) model.
     * @param {string} params.parent Required. Project or location to make a call. Must refer to a caller's project.  Format: `projects/{project-id}` or `projects/{project-id}/locations/{location-id}`.  For global calls, use `projects/{project-id}/locations/global` or `projects/{project-id}`.  Non-global location is required for AutoML models.  Only models within the same region (have same location-id) can be used, otherwise an INVALID_ARGUMENT (400) error is returned.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getSupportedLanguages(
      params?: Params$Resource$Projects$Getsupportedlanguages,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SupportedLanguages>;
    getSupportedLanguages(
      params: Params$Resource$Projects$Getsupportedlanguages,
      options: MethodOptions | BodyResponseCallback<Schema$SupportedLanguages>,
      callback: BodyResponseCallback<Schema$SupportedLanguages>
    ): void;
    getSupportedLanguages(
      params: Params$Resource$Projects$Getsupportedlanguages,
      callback: BodyResponseCallback<Schema$SupportedLanguages>
    ): void;
    getSupportedLanguages(
      callback: BodyResponseCallback<Schema$SupportedLanguages>
    ): void;
    getSupportedLanguages(
      paramsOrCallback?:
        | Params$Resource$Projects$Getsupportedlanguages
        | BodyResponseCallback<Schema$SupportedLanguages>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SupportedLanguages>,
      callback?: BodyResponseCallback<Schema$SupportedLanguages>
    ): void | GaxiosPromise<Schema$SupportedLanguages> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Getsupportedlanguages;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Getsupportedlanguages;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://translation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v3beta1/{+parent}/supportedLanguages').replace(
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
        createAPIRequest<Schema$SupportedLanguages>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SupportedLanguages>(parameters);
      }
    }

    /**
     * translate.projects.translateText
     * @desc Translates input text and returns translated text.
     * @alias translate.projects.translateText
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. Project or location to make a call. Must refer to a caller's project.  Format: `projects/{project-id}` or `projects/{project-id}/locations/{location-id}`.  For global calls, use `projects/{project-id}/locations/global` or `projects/{project-id}`.  Non-global location is required for requests using AutoML models or custom glossaries.  Models and glossaries must be within the same region (have same location-id), otherwise an INVALID_ARGUMENT (400) error is returned.
     * @param {().TranslateTextRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    translateText(
      params?: Params$Resource$Projects$Translatetext,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TranslateTextResponse>;
    translateText(
      params: Params$Resource$Projects$Translatetext,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TranslateTextResponse>,
      callback: BodyResponseCallback<Schema$TranslateTextResponse>
    ): void;
    translateText(
      params: Params$Resource$Projects$Translatetext,
      callback: BodyResponseCallback<Schema$TranslateTextResponse>
    ): void;
    translateText(
      callback: BodyResponseCallback<Schema$TranslateTextResponse>
    ): void;
    translateText(
      paramsOrCallback?:
        | Params$Resource$Projects$Translatetext
        | BodyResponseCallback<Schema$TranslateTextResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TranslateTextResponse>,
      callback?: BodyResponseCallback<Schema$TranslateTextResponse>
    ): void | GaxiosPromise<Schema$TranslateTextResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Translatetext;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Translatetext;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://translation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v3beta1/{+parent}:translateText').replace(
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
        createAPIRequest<Schema$TranslateTextResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TranslateTextResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Detectlanguage
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Project or location to make a call. Must refer to a caller's project.  Format: `projects/{project-id}/locations/{location-id}` or `projects/{project-id}`.  For global calls, use `projects/{project-id}/locations/global` or `projects/{project-id}`.  Only models within the same region (has same location-id) can be used. Otherwise an INVALID_ARGUMENT (400) error is returned.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DetectLanguageRequest;
  }
  export interface Params$Resource$Projects$Getsupportedlanguages
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The language to use to return localized, human readable names of supported languages. If missing, then display names are not returned in a response.
     */
    displayLanguageCode?: string;
    /**
     * Optional. Get supported languages of this model.  The format depends on model type:  - AutoML Translation models:   `projects/{project-id}/locations/{location-id}/models/{model-id}`  - General (built-in) models:   `projects/{project-id}/locations/{location-id}/models/general/nmt`,   `projects/{project-id}/locations/{location-id}/models/general/base`   Returns languages supported by the specified model. If missing, we get supported languages of Google general base (PBMT) model.
     */
    model?: string;
    /**
     * Required. Project or location to make a call. Must refer to a caller's project.  Format: `projects/{project-id}` or `projects/{project-id}/locations/{location-id}`.  For global calls, use `projects/{project-id}/locations/global` or `projects/{project-id}`.  Non-global location is required for AutoML models.  Only models within the same region (have same location-id) can be used, otherwise an INVALID_ARGUMENT (400) error is returned.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Translatetext
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Project or location to make a call. Must refer to a caller's project.  Format: `projects/{project-id}` or `projects/{project-id}/locations/{location-id}`.  For global calls, use `projects/{project-id}/locations/global` or `projects/{project-id}`.  Non-global location is required for requests using AutoML models or custom glossaries.  Models and glossaries must be within the same region (have same location-id), otherwise an INVALID_ARGUMENT (400) error is returned.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TranslateTextRequest;
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    glossaries: Resource$Projects$Locations$Glossaries;
    operations: Resource$Projects$Locations$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.glossaries = new Resource$Projects$Locations$Glossaries(
        this.context
      );
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
    }

    /**
     * translate.projects.locations.batchTranslateText
     * @desc Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location.  This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
     * @alias translate.projects.locations.batchTranslateText
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. Location to make a call. Must refer to a caller's project.  Format: `projects/{project-id}/locations/{location-id}`.  The `global` location is not supported for batch translation.  Only AutoML Translation models or glossaries within the same region (have the same location-id) can be used, otherwise an INVALID_ARGUMENT (400) error is returned.
     * @param {().BatchTranslateTextRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchTranslateText(
      params?: Params$Resource$Projects$Locations$Batchtranslatetext,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    batchTranslateText(
      params: Params$Resource$Projects$Locations$Batchtranslatetext,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    batchTranslateText(
      params: Params$Resource$Projects$Locations$Batchtranslatetext,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    batchTranslateText(callback: BodyResponseCallback<Schema$Operation>): void;
    batchTranslateText(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Batchtranslatetext
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Batchtranslatetext;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Batchtranslatetext;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://translation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v3beta1/{+parent}:batchTranslateText').replace(
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * translate.projects.locations.detectLanguage
     * @desc Detects the language of text within a request.
     * @alias translate.projects.locations.detectLanguage
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. Project or location to make a call. Must refer to a caller's project.  Format: `projects/{project-id}/locations/{location-id}` or `projects/{project-id}`.  For global calls, use `projects/{project-id}/locations/global` or `projects/{project-id}`.  Only models within the same region (has same location-id) can be used. Otherwise an INVALID_ARGUMENT (400) error is returned.
     * @param {().DetectLanguageRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    detectLanguage(
      params?: Params$Resource$Projects$Locations$Detectlanguage,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DetectLanguageResponse>;
    detectLanguage(
      params: Params$Resource$Projects$Locations$Detectlanguage,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DetectLanguageResponse>,
      callback: BodyResponseCallback<Schema$DetectLanguageResponse>
    ): void;
    detectLanguage(
      params: Params$Resource$Projects$Locations$Detectlanguage,
      callback: BodyResponseCallback<Schema$DetectLanguageResponse>
    ): void;
    detectLanguage(
      callback: BodyResponseCallback<Schema$DetectLanguageResponse>
    ): void;
    detectLanguage(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Detectlanguage
        | BodyResponseCallback<Schema$DetectLanguageResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DetectLanguageResponse>,
      callback?: BodyResponseCallback<Schema$DetectLanguageResponse>
    ): void | GaxiosPromise<Schema$DetectLanguageResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Detectlanguage;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Detectlanguage;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://translation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v3beta1/{+parent}:detectLanguage').replace(
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
        createAPIRequest<Schema$DetectLanguageResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DetectLanguageResponse>(parameters);
      }
    }

    /**
     * translate.projects.locations.get
     * @desc Gets information about a location.
     * @alias translate.projects.locations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name for the location.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Location>;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(callback: BodyResponseCallback<Schema$Location>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Get
        | BodyResponseCallback<Schema$Location>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback?: BodyResponseCallback<Schema$Location>
    ): void | GaxiosPromise<Schema$Location> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://translation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v3beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Location>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Location>(parameters);
      }
    }

    /**
     * translate.projects.locations.getSupportedLanguages
     * @desc Returns a list of supported languages for translation.
     * @alias translate.projects.locations.getSupportedLanguages
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.displayLanguageCode Optional. The language to use to return localized, human readable names of supported languages. If missing, then display names are not returned in a response.
     * @param {string=} params.model Optional. Get supported languages of this model.  The format depends on model type:  - AutoML Translation models:   `projects/{project-id}/locations/{location-id}/models/{model-id}`  - General (built-in) models:   `projects/{project-id}/locations/{location-id}/models/general/nmt`,   `projects/{project-id}/locations/{location-id}/models/general/base`   Returns languages supported by the specified model. If missing, we get supported languages of Google general base (PBMT) model.
     * @param {string} params.parent Required. Project or location to make a call. Must refer to a caller's project.  Format: `projects/{project-id}` or `projects/{project-id}/locations/{location-id}`.  For global calls, use `projects/{project-id}/locations/global` or `projects/{project-id}`.  Non-global location is required for AutoML models.  Only models within the same region (have same location-id) can be used, otherwise an INVALID_ARGUMENT (400) error is returned.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getSupportedLanguages(
      params?: Params$Resource$Projects$Locations$Getsupportedlanguages,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SupportedLanguages>;
    getSupportedLanguages(
      params: Params$Resource$Projects$Locations$Getsupportedlanguages,
      options: MethodOptions | BodyResponseCallback<Schema$SupportedLanguages>,
      callback: BodyResponseCallback<Schema$SupportedLanguages>
    ): void;
    getSupportedLanguages(
      params: Params$Resource$Projects$Locations$Getsupportedlanguages,
      callback: BodyResponseCallback<Schema$SupportedLanguages>
    ): void;
    getSupportedLanguages(
      callback: BodyResponseCallback<Schema$SupportedLanguages>
    ): void;
    getSupportedLanguages(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Getsupportedlanguages
        | BodyResponseCallback<Schema$SupportedLanguages>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SupportedLanguages>,
      callback?: BodyResponseCallback<Schema$SupportedLanguages>
    ): void | GaxiosPromise<Schema$SupportedLanguages> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Getsupportedlanguages;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Getsupportedlanguages;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://translation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v3beta1/{+parent}/supportedLanguages').replace(
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
        createAPIRequest<Schema$SupportedLanguages>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SupportedLanguages>(parameters);
      }
    }

    /**
     * translate.projects.locations.list
     * @desc Lists information about the supported locations for this service.
     * @alias translate.projects.locations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The standard list filter.
     * @param {string} params.name The resource that owns the locations collection, if applicable.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLocationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$List
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      callback?: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void | GaxiosPromise<Schema$ListLocationsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://translation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v3beta1/{+name}/locations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$ListLocationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }

    /**
     * translate.projects.locations.translateText
     * @desc Translates input text and returns translated text.
     * @alias translate.projects.locations.translateText
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. Project or location to make a call. Must refer to a caller's project.  Format: `projects/{project-id}` or `projects/{project-id}/locations/{location-id}`.  For global calls, use `projects/{project-id}/locations/global` or `projects/{project-id}`.  Non-global location is required for requests using AutoML models or custom glossaries.  Models and glossaries must be within the same region (have same location-id), otherwise an INVALID_ARGUMENT (400) error is returned.
     * @param {().TranslateTextRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    translateText(
      params?: Params$Resource$Projects$Locations$Translatetext,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TranslateTextResponse>;
    translateText(
      params: Params$Resource$Projects$Locations$Translatetext,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TranslateTextResponse>,
      callback: BodyResponseCallback<Schema$TranslateTextResponse>
    ): void;
    translateText(
      params: Params$Resource$Projects$Locations$Translatetext,
      callback: BodyResponseCallback<Schema$TranslateTextResponse>
    ): void;
    translateText(
      callback: BodyResponseCallback<Schema$TranslateTextResponse>
    ): void;
    translateText(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Translatetext
        | BodyResponseCallback<Schema$TranslateTextResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TranslateTextResponse>,
      callback?: BodyResponseCallback<Schema$TranslateTextResponse>
    ): void | GaxiosPromise<Schema$TranslateTextResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Translatetext;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Translatetext;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://translation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v3beta1/{+parent}:translateText').replace(
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
        createAPIRequest<Schema$TranslateTextResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TranslateTextResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Batchtranslatetext
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Location to make a call. Must refer to a caller's project.  Format: `projects/{project-id}/locations/{location-id}`.  The `global` location is not supported for batch translation.  Only AutoML Translation models or glossaries within the same region (have the same location-id) can be used, otherwise an INVALID_ARGUMENT (400) error is returned.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchTranslateTextRequest;
  }
  export interface Params$Resource$Projects$Locations$Detectlanguage
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Project or location to make a call. Must refer to a caller's project.  Format: `projects/{project-id}/locations/{location-id}` or `projects/{project-id}`.  For global calls, use `projects/{project-id}/locations/global` or `projects/{project-id}`.  Only models within the same region (has same location-id) can be used. Otherwise an INVALID_ARGUMENT (400) error is returned.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DetectLanguageRequest;
  }
  export interface Params$Resource$Projects$Locations$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Getsupportedlanguages
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The language to use to return localized, human readable names of supported languages. If missing, then display names are not returned in a response.
     */
    displayLanguageCode?: string;
    /**
     * Optional. Get supported languages of this model.  The format depends on model type:  - AutoML Translation models:   `projects/{project-id}/locations/{location-id}/models/{model-id}`  - General (built-in) models:   `projects/{project-id}/locations/{location-id}/models/general/nmt`,   `projects/{project-id}/locations/{location-id}/models/general/base`   Returns languages supported by the specified model. If missing, we get supported languages of Google general base (PBMT) model.
     */
    model?: string;
    /**
     * Required. Project or location to make a call. Must refer to a caller's project.  Format: `projects/{project-id}` or `projects/{project-id}/locations/{location-id}`.  For global calls, use `projects/{project-id}/locations/global` or `projects/{project-id}`.  Non-global location is required for AutoML models.  Only models within the same region (have same location-id) can be used, otherwise an INVALID_ARGUMENT (400) error is returned.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The resource that owns the locations collection, if applicable.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Projects$Locations$Translatetext
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Project or location to make a call. Must refer to a caller's project.  Format: `projects/{project-id}` or `projects/{project-id}/locations/{location-id}`.  For global calls, use `projects/{project-id}/locations/global` or `projects/{project-id}`.  Non-global location is required for requests using AutoML models or custom glossaries.  Models and glossaries must be within the same region (have same location-id), otherwise an INVALID_ARGUMENT (400) error is returned.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TranslateTextRequest;
  }

  export class Resource$Projects$Locations$Glossaries {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * translate.projects.locations.glossaries.create
     * @desc Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.
     * @alias translate.projects.locations.glossaries.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The project name.
     * @param {().Glossary} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Glossaries$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Glossaries$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Glossaries$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Glossaries$Create
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Glossaries$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Glossaries$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://translation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v3beta1/{+parent}/glossaries').replace(
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * translate.projects.locations.glossaries.delete
     * @desc Deletes a glossary, or cancels glossary construction if the glossary isn't created yet. Returns NOT_FOUND, if the glossary doesn't exist.
     * @alias translate.projects.locations.glossaries.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the glossary to delete.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Glossaries$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Glossaries$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Glossaries$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Glossaries$Delete
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Glossaries$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Glossaries$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://translation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v3beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * translate.projects.locations.glossaries.get
     * @desc Gets a glossary. Returns NOT_FOUND, if the glossary doesn't exist.
     * @alias translate.projects.locations.glossaries.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the glossary to retrieve.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Glossaries$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Glossary>;
    get(
      params: Params$Resource$Projects$Locations$Glossaries$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Glossary>,
      callback: BodyResponseCallback<Schema$Glossary>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Glossaries$Get,
      callback: BodyResponseCallback<Schema$Glossary>
    ): void;
    get(callback: BodyResponseCallback<Schema$Glossary>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Glossaries$Get
        | BodyResponseCallback<Schema$Glossary>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Glossary>,
      callback?: BodyResponseCallback<Schema$Glossary>
    ): void | GaxiosPromise<Schema$Glossary> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Glossaries$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Glossaries$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://translation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v3beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Glossary>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Glossary>(parameters);
      }
    }

    /**
     * translate.projects.locations.glossaries.list
     * @desc Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.
     * @alias translate.projects.locations.glossaries.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Optional. Filter specifying constraints of a list operation. Filtering is not supported yet, and the parameter currently has no effect. If missing, no filtering is performed.
     * @param {integer=} params.pageSize Optional. Requested page size. The server may return fewer glossaries than requested. If unspecified, the server picks an appropriate default.
     * @param {string=} params.pageToken Optional. A token identifying a page of results the server should return. Typically, this is the value of [ListGlossariesResponse.next_page_token] returned from the previous call to `ListGlossaries` method. The first page is returned if `page_token`is empty or missing.
     * @param {string} params.parent Required. The name of the project from which to list all of the glossaries.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Glossaries$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListGlossariesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Glossaries$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListGlossariesResponse>,
      callback: BodyResponseCallback<Schema$ListGlossariesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Glossaries$List,
      callback: BodyResponseCallback<Schema$ListGlossariesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListGlossariesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Glossaries$List
        | BodyResponseCallback<Schema$ListGlossariesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListGlossariesResponse>,
      callback?: BodyResponseCallback<Schema$ListGlossariesResponse>
    ): void | GaxiosPromise<Schema$ListGlossariesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Glossaries$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Glossaries$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://translation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v3beta1/{+parent}/glossaries').replace(
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
        createAPIRequest<Schema$ListGlossariesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListGlossariesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Glossaries$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The project name.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Glossary;
  }
  export interface Params$Resource$Projects$Locations$Glossaries$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the glossary to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Glossaries$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the glossary to retrieve.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Glossaries$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. Filter specifying constraints of a list operation. Filtering is not supported yet, and the parameter currently has no effect. If missing, no filtering is performed.
     */
    filter?: string;
    /**
     * Optional. Requested page size. The server may return fewer glossaries than requested. If unspecified, the server picks an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return. Typically, this is the value of [ListGlossariesResponse.next_page_token] returned from the previous call to `ListGlossaries` method. The first page is returned if `page_token`is empty or missing.
     */
    pageToken?: string;
    /**
     * Required. The name of the project from which to list all of the glossaries.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * translate.projects.locations.operations.cancel
     * @desc Starts asynchronous cancellation on a long-running operation.  The server makes a best effort to cancel the operation, but success is not guaranteed.  If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     * @alias translate.projects.locations.operations.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be cancelled.
     * @param {().CancelOperationRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
      params?: Params$Resource$Projects$Locations$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Cancel
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://translation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v3beta1/{+name}:cancel').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
     * translate.projects.locations.operations.delete
     * @desc Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @alias translate.projects.locations.operations.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Operations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://translation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v3beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * translate.projects.locations.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @alias translate.projects.locations.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Get
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://translation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v3beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * translate.projects.locations.operations.list
     * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @alias translate.projects.locations.operations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The standard list filter.
     * @param {string} params.name The name of the operation's parent resource.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$List
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback?: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void | GaxiosPromise<Schema$ListOperationsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://translation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v3beta1/{+name}/operations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$ListOperationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }

    /**
     * translate.projects.locations.operations.wait
     * @desc Waits for the specified long-running operation until it is done or reaches at most a specified timeout, returning the latest state.  If the operation is already done, the latest state is immediately returned.  If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used.  If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis.  It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @alias translate.projects.locations.operations.wait
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to wait on.
     * @param {().WaitOperationRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    wait(
      params?: Params$Resource$Projects$Locations$Operations$Wait,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    wait(
      params: Params$Resource$Projects$Locations$Operations$Wait,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    wait(
      params: Params$Resource$Projects$Locations$Operations$Wait,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    wait(callback: BodyResponseCallback<Schema$Operation>): void;
    wait(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Wait
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Wait;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Wait;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://translation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v3beta1/{+name}:wait').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Operations$Cancel
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelOperationRequest;
  }
  export interface Params$Resource$Projects$Locations$Operations$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$Wait
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource to wait on.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WaitOperationRequest;
  }
}
