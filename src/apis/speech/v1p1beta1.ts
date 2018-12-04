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

export namespace speech_v1p1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1p1beta1';
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
   * const speech = google.speech('v1p1beta1');
   *
   * @namespace speech
   * @type {Function}
   * @version v1p1beta1
   * @variation v1p1beta1
   * @param {object=} options Options for Speech
   */
  export class Speech {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    operations: Resource$Operations;
    projects: Resource$Projects;
    speech: Resource$Speech;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.operations = new Resource$Operations(this);
      this.projects = new Resource$Projects(this);
      this.speech = new Resource$Speech(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * Different types of dataset errors and the stats associated with each error.
   */
  export interface Schema$DataErrors {
    /**
     * Number of records having errors associated with the enum.
     */
    count?: number;
    /**
     * Type of the error.
     */
    errorType?: string;
  }
  /**
   * Specifies the parameters needed for creating a dataset. In addition this is
   * also the message returned to the client by the `CreateDataset` method. It
   * is included in the `result.response` field of the `Operation` returned by
   * the `GetOperation` call of the `google::longrunning::Operations` service.
   */
  export interface Schema$Dataset {
    /**
     * Output only. All the blocking operations associated with this dataset.
     * Like (pre-processing, training-model, testing-model)
     */
    blockingOperationIds?: string[];
    /**
     * If set, the log data to be used in this dataset is restricted to the
     * bucket specified. This field is only applicable if use_logged_data is
     * true. If use_logged_data is true, but this field is not set, then all
     * logs will be used for training the models. See: RecognitionMetadata for
     * information on setting up data logs.
     */
    bucketName?: string;
    /**
     * Output only. The timestamp this dataset is created.
     */
    createTime?: string;
    /**
     * Location where the data should be processed. If not specified then we
     * will pick a location on behalf of the user for storing and processing the
     * data. Currently only us-central is supported.
     */
    dataProcessingRegion?: string;
    /**
     * Output only. Stats assoiated with the data.
     */
    dataStats?: Schema$DataStats;
    /**
     * Required. Name of the data set for display.
     */
    displayName?: string;
    /**
     * Output only. True if the data is sufficient to create custom models.
     */
    hasSufficientData?: boolean;
    /**
     * Required. The language of the supplied audio as a
     * [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag.
     * Example: &quot;en-US&quot;. See [Language
     * Support](/speech-to-text/docs/languages) for a list of the currently
     * supported language codes.
     */
    languageCode?: string;
    /**
     * All the models (including models pending training) built using the
     * dataset.
     */
    models?: Schema$Model[];
    /**
     * Output only. Resource name of the dataset. Form :-
     * &#39;/projects/{project_number}/locations/{location_id}/datasets/{dataset_id}&#39;
     */
    name?: string;
    /**
     * Output only. The timestamp this dataset is last updated.
     */
    updateTime?: string;
    /**
     * URI that points to a file in csv file where each row has following
     * format.
     * &lt;gs_path_to_audio&gt;,&lt;gs_path_to_transcript&gt;,&lt;label&gt;
     * label can be HUMAN_TRANSCRIBED or MACHINE_TRANSCRIBED. To be valid, rows
     * must do the following: 1. Each row must have at least a label and
     * &lt;gs_path_to_transcript&gt; 2. If a row is marked HUMAN_TRANSCRIBED,
     * then you must specify both &lt;gs_path_to_audio&gt; and
     * &lt;gs_path_to_transcript&gt;. Only WAV file formats which encode linear
     * 16-bit pulse-code modulation (PCM) audio format are supported. The
     * maximum audio file size is 50 MB. Also note that the audio has to be
     * single channel audio. 3. There has to be at least 500 rows labelled
     * HUMAN_TRANSCRIBED covering at least ~10K words in order to get reliable
     * word error rate results. 4. To create a language model, you should
     * provide at least 100,000 words in your transcriptions as training data if
     * you have conversational and captions type of data. You should provide at
     * least 10,000 words if you have short utterances like voice commands and
     * search type of use cases. Currently, only Google Cloud Storage URIs are
     * supported, which must be specified in the following format:
     * `gs://bucket_name/object_name` (other URI formats will be ignored). For
     * more information, see [Request URIs](/storage/docs/reference-uris).
     */
    uri?: string;
    /**
     * If this is true, then use the previously logged data (for the project)
     * The logs data for this project will be preprocessed and prepared for
     * downstream pipelines (like training)
     */
    useLoggedData?: boolean;
  }
  /**
   * Contains stats about the data which was uploaded and preprocessed to be use
   * by downstream pipelines like training, evals pipelines.
   */
  export interface Schema$DataStats {
    /**
     * Different types of data errors and the counts associated with them.
     */
    dataErrors?: Schema$DataErrors[];
    /**
     * The number of examples used for testing.
     */
    testExampleCount?: number;
    /**
     * The number of examples used for training.
     */
    trainingExampleCount?: number;
  }
  /**
   * Message sent by the client for the `DeployModel` method.
   */
  export interface Schema$DeployModelRequest {}
  /**
   * Message sent by the client for the `EvaluateModel` method.
   */
  export interface Schema$EvaluateModelRequest {}
  /**
   * The only message returned to the client by the `EvaluateModel` method. This
   * is also returned as part of the Dataset message returned to the client by
   * the CreateDataset method. It is included in the `result.response` field of
   * the `Operation` returned by the `GetOperation` call of the
   * `google::longrunning::Operations` service.
   */
  export interface Schema$EvaluateModelResponse {
    /**
     * If true then it means we are referring to the results of an enhanced
     * version of the model_type. Currently only PHONE_CALL model_type has an
     * enhanced version.
     */
    isEnhancedModel?: boolean;
    /**
     * Required. The type of model used in this evaluation.
     */
    modelType?: string;
    /**
     * Number of words used in the word_error_rate computation.
     */
    wordCount?: number;
    /**
     * Word error rate metric computed on the test set using the AutoML model.
     */
    wordErrorRate?: number;
  }
  export interface Schema$ListDatasetsResponse {
    /**
     * Repeated list of data sets containing details about each data set.
     */
    datasets?: Schema$Dataset[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more
     * results in the list.
     */
    nextPageToken?: string;
  }
  /**
   * Message received by the client for the `ListLogDataStats` method.
   */
  export interface Schema$ListLogDataStatsResponse {
    /**
     * Output only. True if user has opted in for log data collection.
     */
    logDataEnabled?: boolean;
    /**
     * The stats for each bucket.
     */
    logDataStats?: Schema$LogBucketStats[];
    /**
     * The overall count for log data (including all bucket data).
     */
    totalCount?: number;
  }
  export interface Schema$ListModelsResponse {
    /**
     * Repeated list of models containing details about each model.
     */
    models?: Schema$Model[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more
     * results in the list.
     */
    nextPageToken?: string;
  }
  /**
   * Stats for log data within a bucket.
   */
  export interface Schema$LogBucketStats {
    /**
     * The display name for the bucket in which logs are collected.
     */
    bucketName?: string;
    /**
     * Number of audio samples that have been collected in this bucket.
     */
    count?: number;
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
   * Specifies the model parameters needed for training a model. In addition
   * this is also the message returned to the client by the `CreateModel`
   * method. It is included in the `result.response` field of the `Operation`
   * returned by the `GetOperation` call of the
   * `google::longrunning::Operations` service.
   */
  export interface Schema$Model {
    /**
     * Output only. Timestamp when this model was created.
     */
    createTime?: string;
    /**
     * Required. Display name of the model to be trained.
     */
    displayName?: string;
    /**
     * Output only. Evaluation results associated with this model. A model can
     * contain multiple sub-models in which case the evaluation results for all
     * of those are available. If there are no sub models then there would be
     * just a single EvaluateModelResponse.
     */
    evaluateModelResponses?: Schema$EvaluateModelResponse[];
    /**
     * Output only. Resource name of the model. Format:
     * &quot;projects/{project_id}/locations/{location_id}/models/{model_id}&quot;
     */
    name?: string;
    /**
     * Required. Type of the training to perform.
     */
    trainingType?: string;
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
    metadata?: {[key: string]: any;};
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
    response?: {[key: string]: any;};
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
     * *Optional* A list of up to 3 additional
     * [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tags,
     * listing possible alternative languages of the supplied audio. See
     * [Language Support](/speech-to-text/docs/languages) for a list of the
     * currently supported language codes. If alternative languages are listed,
     * recognition result will contain recognition in the most likely language
     * detected including the main language_code. The recognition result will
     * include the language tag of the language detected in the audio. Note:
     * This feature is only supported for Voice Command and Voice Search use
     * cases and performance may vary for other use cases (e.g., phone call
     * transcription).
     */
    alternativeLanguageCodes?: string[];
    /**
     * *Optional* The number of channels in the input audio data. ONLY set this
     * for MULTI-CHANNEL recognition. Valid values for LINEAR16 and FLAC are
     * `1`-`8`. Valid values for OGG_OPUS are &#39;1&#39;-&#39;254&#39;. Valid
     * value for MULAW, AMR, AMR_WB and SPEEX_WITH_HEADER_BYTE is only `1`. If
     * `0` or omitted, defaults to one channel (mono). Note: We only recognize
     * the first channel by default. To perform independent recognition on each
     * channel set `enable_separate_recognition_per_channel` to &#39;true&#39;.
     */
    audioChannelCount?: number;
    /**
     * *Optional* If set, specifies the estimated number of speakers in the
     * conversation. If not set, defaults to &#39;2&#39;. Ignored unless
     * enable_speaker_diarization is set to true.&quot;
     */
    diarizationSpeakerCount?: number;
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
     * This needs to be set to ‘true’ explicitly and `audio_channel_count` &gt;
     * 1 to get each channel recognized separately. The recognition result will
     * contain a `channel_tag` field to state which channel that result belongs
     * to. If this is not true, we will only recognize the first channel. The
     * request is billed cumulatively for all channels recognized:
     * `audio_channel_count` multiplied by the length of the audio.
     */
    enableSeparateRecognitionPerChannel?: boolean;
    /**
     * *Optional* If &#39;true&#39;, enables speaker detection for each
     * recognized word in the top alternative of the recognition result using a
     * speaker_tag provided in the WordInfo. Note: When this is true, we send
     * all the words from the beginning of the audio for the top alternative in
     * every consecutive STREAMING responses. This is done in order to improve
     * our speaker tags as our models learn to identify the speakers in the
     * conversation over time. For non-streaming requests, the diarization
     * results will be provided only in the top alternative of the FINAL
     * SpeechRecognitionResult.
     */
    enableSpeakerDiarization?: boolean;
    /**
     * *Optional* If `true`, the top result includes a list of words and the
     * confidence for those words. If `false`, no word-level confidence
     * information is returned. The default is `false`.
     */
    enableWordConfidence?: boolean;
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
     * *Optional* Metadata regarding this request.
     */
    metadata?: Schema$RecognitionMetadata;
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
   * Description of audio data to be recognized.
   */
  export interface Schema$RecognitionMetadata {
    /**
     * Description of the content. Eg. &quot;Recordings of federal supreme court
     * hearings from 2012&quot;.
     */
    audioTopic?: string;
    /**
     * The industry vertical to which this speech recognition request most
     * closely applies. This is most indicative of the topics contained in the
     * audio.  Use the 6-digit NAICS code to identify the industry vertical -
     * see https://www.naics.com/search/.
     */
    industryNaicsCodeOfAudio?: number;
    /**
     * The use case most closely describing the audio content to be recognized.
     */
    interactionType?: string;
    /**
     * The audio type that most closely describes the audio being recognized.
     */
    microphoneDistance?: string;
    /**
     * Obfuscated (privacy-protected) ID of the user, to identify number of
     * unique users using the service.
     */
    obfuscatedId?: string;
    /**
     * The original media the speech was recorded on.
     */
    originalMediaType?: string;
    /**
     * Mime type of the original audio file.  For example `audio/m4a`,
     * `audio/x-alaw-basic`, `audio/mp3`, `audio/3gpp`. A list of possible audio
     * mime types is maintained at
     * http://www.iana.org/assignments/media-types/media-types.xhtml#audio
     */
    originalMimeType?: string;
    /**
     * The device used to make the recording.  Examples &#39;Nexus 5X&#39; or
     * &#39;Polycom SoundStation IP 6000&#39; or &#39;POTS&#39; or
     * &#39;VoIP&#39; or &#39;Cardioid Microphone&#39;.
     */
    recordingDeviceName?: string;
    /**
     * The type of device the speech was recorded with.
     */
    recordingDeviceType?: string;
    /**
     * A freeform field to tag this input sample with. This can be used for
     * grouping the logs into separate buckets. This enables selective purging
     * of data based on the tags, and also for training models in AutoML.
     */
    tags?: string[];
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
   * Message sent by the client to refresh data in a existing dataset.
   */
  export interface Schema$RefreshDataRequest {
    /**
     * URI that points to a file in csv file where each row has following
     * format.
     * &lt;gs_path_to_audio&gt;,&lt;gs_path_to_transcript&gt;,&lt;label&gt;
     * label can be HUMAN_TRANSCRIBED or MACHINE_TRANSCRIBED. Few rules for a
     * row to be considered valid are :- 1. Each row must have at least a label
     * and &lt;gs_path_to_transcript&gt; 2. If a row is marked
     * HUMAN_TRANSCRIBED, then both &lt;gs_path_to_audio&gt; and
     * &lt;gs_path_to_transcript&gt; needs to be specified. 3. There has to be
     * minimum 500 number of rows labelled HUMAN_TRANSCRIBED if evaluation stats
     * are required. 4. If use_logged_data_for_training is set to true, then we
     * ignore the rows labelled as MACHINE_TRANSCRIBED. 5. There has to be
     * minimum 100,000 words in the transcripts in order to provide sufficient
     * textual training data for the language model. Currently, only Google
     * Cloud Storage URIs are supported, which must be specified in the
     * following format: `gs://bucket_name/object_name` (other URI formats will
     * be ignored). For more information, see [Request
     * URIs](https://cloud.google.com/storage/docs/reference-uris).
     */
    uri?: string;
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
    /**
     * Hint strength to use (high, medium or low). If you use a high strength
     * then you are more likely to see those phrases in the results. If strength
     * is not specified then by default medium strength will be used. If
     * you&#39;d like different phrases to have different strengths, you can
     * specify multiple speech_contexts.
     */
    strength?: string;
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
    /**
     * For multi-channel audio, this is the channel number corresponding to the
     * recognized result for the audio from that channel. For
     * audio_channel_count = N, its output values can range from &#39;1&#39; to
     * &#39;N&#39;.
     */
    channelTag?: number;
    /**
     * Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt)
     * language tag of the language in this result. This language code was
     * detected to have the most likelihood of being spoken in the audio.
     */
    languageCode?: string;
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
    details?: Array<{[key: string]: any;}>;
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
              url: (rootUrl + '/v1p1beta1/operations/{+name}')
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


  export class Resource$Projects {
    root: Speech;
    locations: Resource$Projects$Locations;
    constructor(root: Speech) {
      this.root = root;
      this.getRoot.bind(this);
      this.locations = new Resource$Projects$Locations(root);
    }

    getRoot() {
      return this.root;
    }
  }


  export class Resource$Projects$Locations {
    root: Speech;
    datasets: Resource$Projects$Locations$Datasets;
    log_data_stats: Resource$Projects$Locations$Log_data_stats;
    models: Resource$Projects$Locations$Models;
    constructor(root: Speech) {
      this.root = root;
      this.getRoot.bind(this);
      this.datasets = new Resource$Projects$Locations$Datasets(root);
      this.log_data_stats =
          new Resource$Projects$Locations$Log_data_stats(root);
      this.models = new Resource$Projects$Locations$Models(root);
    }

    getRoot() {
      return this.root;
    }
  }


  export class Resource$Projects$Locations$Datasets {
    root: Speech;
    constructor(root: Speech) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * speech.projects.locations.datasets.create
     * @desc Performs asynchronous data upload for AutoML: receive results via
     * the google.longrunning.Operations interface. Returns either an
     * `Operation.error` or an `Operation.response` which contains a `Dataset`
     * message.
     * @alias speech.projects.locations.datasets.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. Resource name of the parent. Has the format :- "projects/{project_id}/locations/{location_id}"
     * @param {().Dataset} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Locations$Datasets$Create,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    create(
        params: Params$Resource$Projects$Locations$Datasets$Create,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    create(
        params: Params$Resource$Projects$Locations$Datasets$Create,
        callback: BodyResponseCallback<Schema$Operation>): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
        paramsOrCallback?: Params$Resource$Projects$Locations$Datasets$Create|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Datasets$Create;
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
              url: (rootUrl + '/v1p1beta1/{+parent}/datasets')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * speech.projects.locations.datasets.get
     * @desc Get the dataset associated with the dataset resource.
     * @alias speech.projects.locations.datasets.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.includeModelInfo If true then also include information about the models built using this dataset.
     * @param {string} params.name The resource name of the dataset to retrieve. Form :- '/projects/{project_number}/locations/{location_id}/datasets/{dataset_id}'
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Locations$Datasets$Get,
        options?: MethodOptions): AxiosPromise<Schema$Dataset>;
    get(params: Params$Resource$Projects$Locations$Datasets$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Dataset>,
        callback: BodyResponseCallback<Schema$Dataset>): void;
    get(params: Params$Resource$Projects$Locations$Datasets$Get,
        callback: BodyResponseCallback<Schema$Dataset>): void;
    get(callback: BodyResponseCallback<Schema$Dataset>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Locations$Datasets$Get|
        BodyResponseCallback<Schema$Dataset>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Dataset>,
        callback?: BodyResponseCallback<Schema$Dataset>):
        void|AxiosPromise<Schema$Dataset> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Datasets$Get;
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
              url: (rootUrl + '/v1p1beta1/{+name}')
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
        createAPIRequest<Schema$Dataset>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Dataset>(parameters);
      }
    }


    /**
     * speech.projects.locations.datasets.list
     * @desc Fetch the list of dataset associated with this project.
     * @alias speech.projects.locations.datasets.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Filter the response based on display_name of the dataset. For e.g display_name=Foo The filter string is case sensitive
     * @param {boolean=} params.includeModelInfo If true then also include information about the models built using the datasets.
     * @param {integer=} params.pageSize The maximum number of items to return.
     * @param {string=} params.pageToken The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent Required. Resource name of the parent. Has the format :- "projects/{project_id}/locations/{location_id}"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Locations$Datasets$List,
        options?: MethodOptions): AxiosPromise<Schema$ListDatasetsResponse>;
    list(
        params: Params$Resource$Projects$Locations$Datasets$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListDatasetsResponse>,
        callback: BodyResponseCallback<Schema$ListDatasetsResponse>): void;
    list(
        params: Params$Resource$Projects$Locations$Datasets$List,
        callback: BodyResponseCallback<Schema$ListDatasetsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListDatasetsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Locations$Datasets$List|
        BodyResponseCallback<Schema$ListDatasetsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListDatasetsResponse>,
        callback?: BodyResponseCallback<Schema$ListDatasetsResponse>):
        void|AxiosPromise<Schema$ListDatasetsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Datasets$List;
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
              url: (rootUrl + '/v1p1beta1/{+parent}/datasets')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListDatasetsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListDatasetsResponse>(parameters);
      }
    }


    /**
     * speech.projects.locations.datasets.refreshData
     * @desc Refresh data for a dataset.
     * @alias speech.projects.locations.datasets.refreshData
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the destination dataset.
     * @param {().RefreshDataRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    refreshData(
        params?: Params$Resource$Projects$Locations$Datasets$Refreshdata,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    refreshData(
        params: Params$Resource$Projects$Locations$Datasets$Refreshdata,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    refreshData(
        params: Params$Resource$Projects$Locations$Datasets$Refreshdata,
        callback: BodyResponseCallback<Schema$Operation>): void;
    refreshData(callback: BodyResponseCallback<Schema$Operation>): void;
    refreshData(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Datasets$Refreshdata|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Datasets$Refreshdata;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Datasets$Refreshdata;
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
              url: (rootUrl + '/v1p1beta1/{+name}:refreshData')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
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
  }

  export interface Params$Resource$Projects$Locations$Datasets$Create extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. Resource name of the parent. Has the format :-
     * "projects/{project_id}/locations/{location_id}"
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Dataset;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Get extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * If true then also include information about the models built using this
     * dataset.
     */
    includeModelInfo?: boolean;
    /**
     * The resource name of the dataset to retrieve. Form :-
     * '/projects/{project_number}/locations/{location_id}/datasets/{dataset_id}'
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Filter the response based on display_name of the dataset. For e.g
     * display_name=Foo The filter string is case sensitive
     */
    filter?: string;
    /**
     * If true then also include information about the models built using the
     * datasets.
     */
    includeModelInfo?: boolean;
    /**
     * The maximum number of items to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. Resource name of the parent. Has the format :-
     * "projects/{project_id}/locations/{location_id}"
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasets$Refreshdata
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The resource name of the destination dataset.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RefreshDataRequest;
  }


  export class Resource$Projects$Locations$Log_data_stats {
    root: Speech;
    constructor(root: Speech) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * speech.projects.locations.log_data_stats.list
     * @desc List all log data stats associated with this project.
     * @alias speech.projects.locations.log_data_stats.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. Resource name of the parent. Has the format :- "projects/{project_id}/locations/{location_id}"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Locations$Log_data_stats$List,
        options?: MethodOptions): AxiosPromise<Schema$ListLogDataStatsResponse>;
    list(
        params: Params$Resource$Projects$Locations$Log_data_stats$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListLogDataStatsResponse>,
        callback: BodyResponseCallback<Schema$ListLogDataStatsResponse>): void;
    list(
        params: Params$Resource$Projects$Locations$Log_data_stats$List,
        callback: BodyResponseCallback<Schema$ListLogDataStatsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListLogDataStatsResponse>): void;
    list(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Log_data_stats$List|
        BodyResponseCallback<Schema$ListLogDataStatsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListLogDataStatsResponse>,
        callback?: BodyResponseCallback<Schema$ListLogDataStatsResponse>):
        void|AxiosPromise<Schema$ListLogDataStatsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Log_data_stats$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Log_data_stats$List;
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
              url: (rootUrl + '/v1p1beta1/{+parent}/log_data_stats')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListLogDataStatsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListLogDataStatsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Log_data_stats$List
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. Resource name of the parent. Has the format :-
     * "projects/{project_id}/locations/{location_id}"
     */
    parent?: string;
  }


  export class Resource$Projects$Locations$Models {
    root: Speech;
    constructor(root: Speech) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * speech.projects.locations.models.create
     * @desc Performs asynchronous model training for AutoML: receive results
     * via the google.longrunning.Operations interface. Returns either an
     * `Operation.error` or an `Operation.response` which contains a `Model`
     * message.
     * @alias speech.projects.locations.models.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.name Required. Resource name of the dataset being used to create the model. '/projects/{project_id}/locations/{location_id}/datasets/{dataset_id}'
     * @param {string} params.parent Required. Resource name of the parent. Has the format :- "projects/{project_id}/locations/{location_id}"
     * @param {().Model} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Locations$Models$Create,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    create(
        params: Params$Resource$Projects$Locations$Models$Create,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    create(
        params: Params$Resource$Projects$Locations$Models$Create,
        callback: BodyResponseCallback<Schema$Operation>): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
        paramsOrCallback?: Params$Resource$Projects$Locations$Models$Create|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Models$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Models$Create;
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
              url: (rootUrl + '/v1p1beta1/{+parent}/models')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * speech.projects.locations.models.deploy
     * @desc Performs asynchronous model deployment of the model: receive
     * results via the google.longrunning.Operations interface. After the
     * operation is completed this returns either an `Operation.error` in case
     * of error or a `google.protobuf.Empty` if the deployment was successful.
     * @alias speech.projects.locations.models.deploy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of the model. Format: "projects/{project_id}/locations/{location_id}/models/{model_id}"
     * @param {().DeployModelRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    deploy(
        params?: Params$Resource$Projects$Locations$Models$Deploy,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    deploy(
        params: Params$Resource$Projects$Locations$Models$Deploy,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    deploy(
        params: Params$Resource$Projects$Locations$Models$Deploy,
        callback: BodyResponseCallback<Schema$Operation>): void;
    deploy(callback: BodyResponseCallback<Schema$Operation>): void;
    deploy(
        paramsOrCallback?: Params$Resource$Projects$Locations$Models$Deploy|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Models$Deploy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Models$Deploy;
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
              url: (rootUrl + '/v1p1beta1/{+name}:deploy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
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
     * speech.projects.locations.models.evaluate
     * @desc Performs asynchronous evaluation of the model: receive results via
     * the google.longrunning.Operations interface. After the operation is
     * completed this returns either an `Operation.error` in case of error or a
     * `EvaluateModelResponse` with the evaluation results.
     * @alias speech.projects.locations.models.evaluate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of the model. Format: "projects/{project_id}/locations/{location_id}/models/{model_id}"
     * @param {().EvaluateModelRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    evaluate(
        params?: Params$Resource$Projects$Locations$Models$Evaluate,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    evaluate(
        params: Params$Resource$Projects$Locations$Models$Evaluate,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    evaluate(
        params: Params$Resource$Projects$Locations$Models$Evaluate,
        callback: BodyResponseCallback<Schema$Operation>): void;
    evaluate(callback: BodyResponseCallback<Schema$Operation>): void;
    evaluate(
        paramsOrCallback?: Params$Resource$Projects$Locations$Models$Evaluate|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Models$Evaluate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Models$Evaluate;
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
              url: (rootUrl + '/v1p1beta1/{+name}:evaluate')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
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
     * speech.projects.locations.models.list
     * @desc Fetch the list of models associated with this project.
     * @alias speech.projects.locations.models.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Filter the response based on display_name of the model. For e.g display_name=Foo The filter string is case sensitive
     * @param {integer=} params.pageSize The maximum number of items to return.
     * @param {string=} params.pageToken The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent Required. Resource name of the parent. Has the format :- "projects/{project_id}/locations/{location_id}"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Locations$Models$List,
        options?: MethodOptions): AxiosPromise<Schema$ListModelsResponse>;
    list(
        params: Params$Resource$Projects$Locations$Models$List,
        options: MethodOptions|BodyResponseCallback<Schema$ListModelsResponse>,
        callback: BodyResponseCallback<Schema$ListModelsResponse>): void;
    list(
        params: Params$Resource$Projects$Locations$Models$List,
        callback: BodyResponseCallback<Schema$ListModelsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListModelsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Locations$Models$List|
        BodyResponseCallback<Schema$ListModelsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListModelsResponse>,
        callback?: BodyResponseCallback<Schema$ListModelsResponse>):
        void|AxiosPromise<Schema$ListModelsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Models$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Models$List;
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
              url: (rootUrl + '/v1p1beta1/{+parent}/models')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListModelsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListModelsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Models$Create extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. Resource name of the dataset being used to create the model.
     * '/projects/{project_id}/locations/{location_id}/datasets/{dataset_id}'
     */
    name?: string;
    /**
     * Required. Resource name of the parent. Has the format :-
     * "projects/{project_id}/locations/{location_id}"
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Model;
  }
  export interface Params$Resource$Projects$Locations$Models$Deploy extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Resource name of the model. Format:
     * "projects/{project_id}/locations/{location_id}/models/{model_id}"
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DeployModelRequest;
  }
  export interface Params$Resource$Projects$Locations$Models$Evaluate extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Resource name of the model. Format:
     * "projects/{project_id}/locations/{location_id}/models/{model_id}"
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EvaluateModelRequest;
  }
  export interface Params$Resource$Projects$Locations$Models$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Filter the response based on display_name of the model. For e.g
     * display_name=Foo The filter string is case sensitive
     */
    filter?: string;
    /**
     * The maximum number of items to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. Resource name of the parent. Has the format :-
     * "projects/{project_id}/locations/{location_id}"
     */
    parent?: string;
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
              url: (rootUrl + '/v1p1beta1/speech:longrunningrecognize')
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
              url: (rootUrl + '/v1p1beta1/speech:recognize')
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
