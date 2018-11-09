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
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';
import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from 'googleapis-common';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace speech_v1 {
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
     * API key. Your API key identifies your project and provides you with API
     * access, quota, and reports. Required unless you provide an OAuth 2.0
     * token.
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
     * Available to use for quota purposes for server-side applications. Can be
     * any arbitrary string assigned to a user, but should not exceed 40
     * characters.
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
   * Cloud Speech API
   *
   * Converts audio to text by applying powerful neural network models.
   *
   * @example
   * const {google} = require('googleapis');
   * const speech = google.speech('v1');
   *
   * @namespace speech
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Speech
   */
  export class Speech {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    operations: Resource$Operations;
    speech: Resource$Speech;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.operations = new Resource$Operations(this);
      this.speech = new Resource$Speech(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$Operation[];
  }
  /**
   * The top-level message sent by the client for the `LongRunningRecognize`
   * method.
   */
  export interface Schema$LongRunningRecognizeRequest {
    /**
     * *Required* The audio data to be recognized.
     */
    audio?: Schema$RecognitionAudio;
    /**
     * *Required* Provides information to the recognizer that specifies how to
     * process the request.
     */
    config?: Schema$RecognitionConfig;
  }
  /**
   * This resource represents a long-running operation that is the result of a
   * network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If
     * `true`, the operation is completed, and either `error` or `response` is
     * available.
     */
    done?: boolean;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
    /**
     * Service-specific metadata associated with the operation.  It typically
     * contains progress information and common metadata such as create time.
     * Some services might not provide such metadata.  Any method that returns a
     * long-running operation should document the metadata type, if any.
     */
    metadata?: any;
    /**
     * The server-assigned name, which is only unique within the same service
     * that originally returns it. If you use the default HTTP mapping, the
     * `name` should have the format of `operations/some/unique/name`.
     */
    name?: string;
    /**
     * The normal response of the operation in case of success.  If the original
     * method returns no data on success, such as `Delete`, the response is
     * `google.protobuf.Empty`.  If the original method is standard
     * `Get`/`Create`/`Update`, the response should be the resource.  For other
     * methods, the response should have the type `XxxResponse`, where `Xxx` is
     * the original method name.  For example, if the original method name is
     * `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: any;
  }
  /**
   * Contains audio data in the encoding specified in the `RecognitionConfig`.
   * Either `content` or `uri` must be supplied. Supplying both or neither
   * returns google.rpc.Code.INVALID_ARGUMENT. See [content
   * limits](/speech-to-text/quotas#content).
   */
  export interface Schema$RecognitionAudio {
    /**
     * The audio data bytes encoded as specified in `RecognitionConfig`. Note:
     * as with all bytes fields, protobuffers use a pure binary representation,
     * whereas JSON representations use base64.
     */
    content?: string;
    /**
     * URI that points to a file that contains audio data bytes as specified in
     * `RecognitionConfig`. The file must not be compressed (for example, gzip).
     * Currently, only Google Cloud Storage URIs are supported, which must be
     * specified in the following format: `gs://bucket_name/object_name` (other
     * URI formats return google.rpc.Code.INVALID_ARGUMENT). For more
     * information, see [Request
     * URIs](https://cloud.google.com/storage/docs/reference-uris).
     */
    uri?: string;
  }
  /**
   * Provides information to the recognizer that specifies how to process the
   * request.
   */
  export interface Schema$RecognitionConfig {
    /**
     * *Optional* If &#39;true&#39;, adds punctuation to recognition result
     * hypotheses. This feature is only available in select languages. Setting
     * this for requests in other languages has no effect at all. The default
     * &#39;false&#39; value does not add punctuation to result hypotheses.
     * Note: This is currently offered as an experimental service, complimentary
     * to all users. In the future this may be exclusively available as a
     * premium feature.
     */
    enableAutomaticPunctuation?: boolean;
    /**
     * *Optional* If `true`, the top result includes a list of words and the
     * start and end time offsets (timestamps) for those words. If `false`, no
     * word-level time offset information is returned. The default is `false`.
     */
    enableWordTimeOffsets?: boolean;
    /**
     * Encoding of audio data sent in all `RecognitionAudio` messages. This
     * field is optional for `FLAC` and `WAV` audio files and required for all
     * other audio formats. For details, see AudioEncoding.
     */
    encoding?: string;
    /**
     * *Required* The language of the supplied audio as a
     * [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag.
     * Example: &quot;en-US&quot;. See [Language
     * Support](/speech-to-text/docs/languages) for a list of the currently
     * supported language codes.
     */
    languageCode?: string;
    /**
     * *Optional* Maximum number of recognition hypotheses to be returned.
     * Specifically, the maximum number of `SpeechRecognitionAlternative`
     * messages within each `SpeechRecognitionResult`. The server may return
     * fewer than `max_alternatives`. Valid values are `0`-`30`. A value of `0`
     * or `1` will return a maximum of one. If omitted, will return a maximum of
     * one.
     */
    maxAlternatives?: number;
    /**
     * *Optional* Which model to select for the given request. Select the model
     * best suited to your domain to get best results. If a model is not
     * explicitly specified, then we auto-select a model based on the parameters
     * in the RecognitionConfig. &lt;table&gt;   &lt;tr&gt;
     * &lt;td&gt;&lt;b&gt;Model&lt;/b&gt;&lt;/td&gt;
     * &lt;td&gt;&lt;b&gt;Description&lt;/b&gt;&lt;/td&gt;   &lt;/tr&gt;
     * &lt;tr&gt;
     * &lt;td&gt;&lt;code&gt;command_and_search&lt;/code&gt;&lt;/td&gt;
     * &lt;td&gt;Best for short queries such as voice commands or voice
     * search.&lt;/td&gt;   &lt;/tr&gt;   &lt;tr&gt;
     * &lt;td&gt;&lt;code&gt;phone_call&lt;/code&gt;&lt;/td&gt; &lt;td&gt;Best
     * for audio that originated from a phone call (typically     recorded at an
     * 8khz sampling rate).&lt;/td&gt;   &lt;/tr&gt;   &lt;tr&gt;
     * &lt;td&gt;&lt;code&gt;video&lt;/code&gt;&lt;/td&gt;     &lt;td&gt;Best
     * for audio that originated from from video or includes multiple speakers.
     * Ideally the audio is recorded at a 16khz or greater         sampling
     * rate. This is a premium model that costs more than the         standard
     * rate.&lt;/td&gt;   &lt;/tr&gt;   &lt;tr&gt;
     * &lt;td&gt;&lt;code&gt;default&lt;/code&gt;&lt;/td&gt;     &lt;td&gt;Best
     * for audio that is not one of the specific audio models.         For
     * example, long-form audio. Ideally the audio is high-fidelity, recorded at
     * a 16khz or greater sampling rate.&lt;/td&gt;   &lt;/tr&gt; &lt;/table&gt;
     */
    model?: string;
    /**
     * *Optional* If set to `true`, the server will attempt to filter out
     * profanities, replacing all but the initial character in each filtered
     * word with asterisks, e.g. &quot;f***&quot;. If set to `false` or omitted,
     * profanities won&#39;t be filtered out.
     */
    profanityFilter?: boolean;
    /**
     * Sample rate in Hertz of the audio data sent in all `RecognitionAudio`
     * messages. Valid values are: 8000-48000. 16000 is optimal. For best
     * results, set the sampling rate of the audio source to 16000 Hz. If
     * that&#39;s not possible, use the native sample rate of the audio source
     * (instead of re-sampling). This field is optional for `FLAC` and `WAV`
     * audio files and required for all other audio formats. For details, see
     * AudioEncoding.
     */
    sampleRateHertz?: number;
    /**
     * *Optional* array of SpeechContext. A means to provide context to assist
     * the speech recognition. For more information, see [Phrase
     * Hints](/speech-to-text/docs/basics#phrase-hints).
     */
    speechContexts?: Schema$SpeechContext[];
    /**
     * *Optional* Set to true to use an enhanced model for speech recognition.
     * If `use_enhanced` is set to true and the `model` field is not set, then
     * an appropriate enhanced model is chosen if: 1. project is eligible for
     * requesting enhanced models 2. an enhanced model exists for the audio  If
     * `use_enhanced` is true and an enhanced version of the specified model
     * does not exist, then the speech is recognized using the standard version
     * of the specified model.  Enhanced speech models require that you opt-in
     * to data logging using instructions in the
     * [documentation](/speech-to-text/docs/enable-data-logging). If you set
     * `use_enhanced` to true and you have not enabled audio logging, then you
     * will receive an error.
     */
    useEnhanced?: boolean;
  }
  /**
   * The top-level message sent by the client for the `Recognize` method.
   */
  export interface Schema$RecognizeRequest {
    /**
     * *Required* The audio data to be recognized.
     */
    audio?: Schema$RecognitionAudio;
    /**
     * *Required* Provides information to the recognizer that specifies how to
     * process the request.
     */
    config?: Schema$RecognitionConfig;
  }
  /**
   * The only message returned to the client by the `Recognize` method. It
   * contains the result as zero or more sequential `SpeechRecognitionResult`
   * messages.
   */
  export interface Schema$RecognizeResponse {
    /**
     * Output only. Sequential list of transcription results corresponding to
     * sequential portions of audio.
     */
    results?: Schema$SpeechRecognitionResult[];
  }
  /**
   * Provides &quot;hints&quot; to the speech recognizer to favor specific words
   * and phrases in the results.
   */
  export interface Schema$SpeechContext {
    /**
     * *Optional* A list of strings containing words and phrases
     * &quot;hints&quot; so that the speech recognition is more likely to
     * recognize them. This can be used to improve the accuracy for specific
     * words and phrases, for example, if specific commands are typically spoken
     * by the user. This can also be used to add additional words to the
     * vocabulary of the recognizer. See [usage
     * limits](/speech-to-text/quotas#content).
     */
    phrases?: string[];
  }
  /**
   * Alternative hypotheses (a.k.a. n-best list).
   */
  export interface Schema$SpeechRecognitionAlternative {
    /**
     * Output only. The confidence estimate between 0.0 and 1.0. A higher number
     * indicates an estimated greater likelihood that the recognized words are
     * correct. This field is set only for the top alternative of a
     * non-streaming result or, of a streaming result where `is_final=true`.
     * This field is not guaranteed to be accurate and users should not rely on
     * it to be always provided. The default of 0.0 is a sentinel value
     * indicating `confidence` was not set.
     */
    confidence?: number;
    /**
     * Output only. Transcript text representing the words that the user spoke.
     */
    transcript?: string;
    /**
     * Output only. A list of word-specific information for each recognized
     * word. Note: When `enable_speaker_diarization` is true, you will see all
     * the words from the beginning of the audio.
     */
    words?: Schema$WordInfo[];
  }
  /**
   * A speech recognition result corresponding to a portion of the audio.
   */
  export interface Schema$SpeechRecognitionResult {
    /**
     * Output only. May contain one or more recognition hypotheses (up to the
     * maximum specified in `max_alternatives`). These alternatives are ordered
     * in terms of accuracy, with the top (first) alternative being the most
     * probable, as ranked by the recognizer.
     */
    alternatives?: Schema$SpeechRecognitionAlternative[];
  }
  /**
   * The `Status` type defines a logical error model that is suitable for
   * different programming environments, including REST APIs and RPC APIs. It is
   * used by [gRPC](https://github.com/grpc). The error model is designed to be:
   * - Simple to use and understand for most users - Flexible enough to meet
   * unexpected needs  # Overview  The `Status` message contains three pieces of
   * data: error code, error message, and error details. The error code should
   * be an enum value of google.rpc.Code, but it may accept additional error
   * codes if needed.  The error message should be a developer-facing English
   * message that helps developers *understand* and *resolve* the error. If a
   * localized user-facing error message is needed, put the localized message in
   * the error details or localize it in the client. The optional error details
   * may contain arbitrary information about the error. There is a predefined
   * set of error detail types in the package `google.rpc` that can be used for
   * common error conditions.  # Language mapping  The `Status` message is the
   * logical representation of the error model, but it is not necessarily the
   * actual wire format. When the `Status` message is exposed in different
   * client libraries and different wire protocols, it can be mapped
   * differently. For example, it will likely be mapped to some exceptions in
   * Java, but more likely mapped to some error codes in C.  # Other uses  The
   * error model and the `Status` message can be used in a variety of
   * environments, either with or without APIs, to provide a consistent
   * developer experience across different environments.  Example uses of this
   * error model include:  - Partial errors. If a service needs to return
   * partial errors to the client,     it may embed the `Status` in the normal
   * response to indicate the partial     errors.  - Workflow errors. A typical
   * workflow has multiple steps. Each step may     have a `Status` message for
   * error reporting.  - Batch operations. If a client uses batch request and
   * batch response, the     `Status` message should be used directly inside
   * batch response, one for     each error sub-response.  - Asynchronous
   * operations. If an API call embeds asynchronous operation     results in its
   * response, the status of those operations should be     represented directly
   * using the `Status` message.  - Logging. If some API errors are stored in
   * logs, the message `Status` could     be used directly after any stripping
   * needed for security/privacy reasons.
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number;
    /**
     * A list of messages that carry the error details.  There is a common set
     * of message types for APIs to use.
     */
    details?: any[];
    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  }
  /**
   * Word-specific information for recognized words.
   */
  export interface Schema$WordInfo {
    /**
     * Output only. Time offset relative to the beginning of the audio, and
     * corresponding to the end of the spoken word. This field is only set if
     * `enable_word_time_offsets=true` and only in the top hypothesis. This is
     * an experimental feature and the accuracy of the time offset can vary.
     */
    endTime?: string;
    /**
     * Output only. A distinct integer value is assigned for every speaker
     * within the audio. This field specifies which one of those speakers was
     * detected to have spoken this word. Value ranges from &#39;1&#39; to
     * diarization_speaker_count. speaker_tag is set if
     * enable_speaker_diarization = &#39;true&#39; and only in the top
     * alternative.
     */
    speakerTag?: number;
    /**
     * Output only. Time offset relative to the beginning of the audio, and
     * corresponding to the start of the spoken word. This field is only set if
     * `enable_word_time_offsets=true` and only in the top hypothesis. This is
     * an experimental feature and the accuracy of the time offset can vary.
     */
    startTime?: string;
    /**
     * Output only. The word corresponding to this set of information.
     */
    word?: string;
  }


  export class Resource$Operations {
    root: Speech;
    constructor(root: Speech) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * speech.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use
     * this method to poll the operation result at intervals as recommended by
     * the API service.
     * @alias speech.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Operations$Get,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    get(params: Params$Resource$Operations$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    get(params: Params$Resource$Operations$Get,
        callback: BodyResponseCallback<Schema$Operation>): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(paramsOrCallback?: Params$Resource$Operations$Get|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as Params$Resource$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://speech.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/operations/{+name}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * speech.operations.list
     * @desc Lists operations that match the specified filter in the request. If
     * the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE:
     * the `name` binding allows API services to override the binding to use
     * different resource name schemes, such as `users/x/operations`. To
     * override the binding, API services can add a binding such as
     * `"/v1/{name=users/x}/operations"` to their service configuration. For
     * backwards compatibility, the default name includes the operations
     * collection id, however overriding users must ensure the name binding is
     * the parent resource, without the operations collection id.
     * @alias speech.operations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The standard list filter.
     * @param {string=} params.name The name of the operation's parent resource.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Operations$List, options?: MethodOptions):
        AxiosPromise<Schema$ListOperationsResponse>;
    list(
        params: Params$Resource$Operations$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListOperationsResponse>,
        callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
        params: Params$Resource$Operations$List,
        callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Operations$List|
        BodyResponseCallback<Schema$ListOperationsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListOperationsResponse>,
        callback?: BodyResponseCallback<Schema$ListOperationsResponse>):
        void|AxiosPromise<Schema$ListOperationsResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://speech.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/operations').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListOperationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Operations$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Operations$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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


  export class Resource$Speech {
    root: Speech;
    constructor(root: Speech) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * speech.speech.longrunningrecognize
     * @desc Performs asynchronous speech recognition: receive results via the
     * google.longrunning.Operations interface. Returns either an
     * `Operation.error` or an `Operation.response` which contains a
     * `LongRunningRecognizeResponse` message.
     * @alias speech.speech.longrunningrecognize
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().LongRunningRecognizeRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    longrunningrecognize(
        params?: Params$Resource$Speech$Longrunningrecognize,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    longrunningrecognize(
        params: Params$Resource$Speech$Longrunningrecognize,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    longrunningrecognize(
        params: Params$Resource$Speech$Longrunningrecognize,
        callback: BodyResponseCallback<Schema$Operation>): void;
    longrunningrecognize(callback: BodyResponseCallback<Schema$Operation>):
        void;
    longrunningrecognize(
        paramsOrCallback?: Params$Resource$Speech$Longrunningrecognize|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Speech$Longrunningrecognize;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Speech$Longrunningrecognize;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://speech.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/speech:longrunningrecognize')
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * speech.speech.recognize
     * @desc Performs synchronous speech recognition: receive results after all
     * audio has been sent and processed.
     * @alias speech.speech.recognize
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().RecognizeRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    recognize(
        params?: Params$Resource$Speech$Recognize,
        options?: MethodOptions): AxiosPromise<Schema$RecognizeResponse>;
    recognize(
        params: Params$Resource$Speech$Recognize,
        options: MethodOptions|BodyResponseCallback<Schema$RecognizeResponse>,
        callback: BodyResponseCallback<Schema$RecognizeResponse>): void;
    recognize(
        params: Params$Resource$Speech$Recognize,
        callback: BodyResponseCallback<Schema$RecognizeResponse>): void;
    recognize(callback: BodyResponseCallback<Schema$RecognizeResponse>): void;
    recognize(
        paramsOrCallback?: Params$Resource$Speech$Recognize|
        BodyResponseCallback<Schema$RecognizeResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$RecognizeResponse>,
        callback?: BodyResponseCallback<Schema$RecognizeResponse>):
        void|AxiosPromise<Schema$RecognizeResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Speech$Recognize;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Speech$Recognize;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://speech.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/speech:recognize')
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
        createAPIRequest<Schema$RecognizeResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$RecognizeResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Speech$Longrunningrecognize extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$LongRunningRecognizeRequest;
  }
  export interface Params$Resource$Speech$Recognize extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$RecognizeRequest;
  }
}
