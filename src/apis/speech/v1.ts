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

export namespace speech_v1 {
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
   * Cloud Speech-to-Text API
   *
   * Converts audio to text by applying powerful neural network models.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const speech = google.speech('v1');
   * ```
   */
  export class Speech {
    context: APIRequestContext;
    operations: Resource$Operations;
    projects: Resource$Projects;
    speech: Resource$Speech;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.operations = new Resource$Operations(this.context);
      this.projects = new Resource$Projects(this.context);
      this.speech = new Resource$Speech(this.context);
    }
  }

  export interface Schema$ABNFGrammar {
    /**
     * All declarations and rules of an ABNF grammar broken up into multiple strings that will end up concatenated.
     */
    abnfStrings?: string[] | null;
  }
  /**
   * An item of the class.
   */
  export interface Schema$ClassItem {
    /**
     * The class item's value.
     */
    value?: string | null;
  }
  /**
   * Message sent by the client for the `CreateCustomClass` method.
   */
  export interface Schema$CreateCustomClassRequest {
    /**
     * Required. The custom class to create.
     */
    customClass?: Schema$CustomClass;
    /**
     * Required. The ID to use for the custom class, which will become the final component of the custom class' resource name. This value should restrict to letters, numbers, and hyphens, with the first character a letter, the last a letter or a number, and be 4-63 characters.
     */
    customClassId?: string | null;
  }
  /**
   * Message sent by the client for the `CreatePhraseSet` method.
   */
  export interface Schema$CreatePhraseSetRequest {
    /**
     * Required. The phrase set to create.
     */
    phraseSet?: Schema$PhraseSet;
    /**
     * Required. The ID to use for the phrase set, which will become the final component of the phrase set's resource name. This value should restrict to letters, numbers, and hyphens, with the first character a letter, the last a letter or a number, and be 4-63 characters.
     */
    phraseSetId?: string | null;
  }
  /**
   * A set of words or phrases that represents a common concept likely to appear in your audio, for example a list of passenger ship names. CustomClass items can be substituted into placeholders that you set in PhraseSet phrases.
   */
  export interface Schema$CustomClass {
    /**
     * If this custom class is a resource, the custom_class_id is the resource id of the CustomClass. Case sensitive.
     */
    customClassId?: string | null;
    /**
     * A collection of class items.
     */
    items?: Schema$ClassItem[];
    /**
     * The resource name of the custom class.
     */
    name?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Message returned to the client by the `ListCustomClasses` method.
   */
  export interface Schema$ListCustomClassesResponse {
    /**
     * The custom classes.
     */
    customClasses?: Schema$CustomClass[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
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
   * Message returned to the client by the `ListPhraseSet` method.
   */
  export interface Schema$ListPhraseSetResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The phrase set.
     */
    phraseSets?: Schema$PhraseSet[];
  }
  /**
   * Describes the progress of a long-running `LongRunningRecognize` call. It is included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.
   */
  export interface Schema$LongRunningRecognizeMetadata {
    /**
     * Time of the most recent processing update.
     */
    lastUpdateTime?: string | null;
    /**
     * Approximate percentage of audio processed thus far. Guaranteed to be 100 when the audio is fully processed and the results are available.
     */
    progressPercent?: number | null;
    /**
     * Time when the request was received.
     */
    startTime?: string | null;
    /**
     * Output only. The URI of the audio file being transcribed. Empty if the audio was sent as byte content.
     */
    uri?: string | null;
  }
  /**
   * The top-level message sent by the client for the `LongRunningRecognize` method.
   */
  export interface Schema$LongRunningRecognizeRequest {
    /**
     * Required. The audio data to be recognized.
     */
    audio?: Schema$RecognitionAudio;
    /**
     * Required. Provides information to the recognizer that specifies how to process the request.
     */
    config?: Schema$RecognitionConfig;
    /**
     * Optional. Specifies an optional destination for the recognition results.
     */
    outputConfig?: Schema$TranscriptOutputConfig;
  }
  /**
   * The only message returned to the client by the `LongRunningRecognize` method. It contains the result as zero or more sequential `SpeechRecognitionResult` messages. It is included in the `result.response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.
   */
  export interface Schema$LongRunningRecognizeResponse {
    /**
     * Original output config if present in the request.
     */
    outputConfig?: Schema$TranscriptOutputConfig;
    /**
     * If the transcript output fails this field contains the relevant error.
     */
    outputError?: Schema$Status;
    /**
     * The ID associated with the request. This is a unique ID specific only to the given request.
     */
    requestId?: string | null;
    /**
     * Sequential list of transcription results corresponding to sequential portions of audio.
     */
    results?: Schema$SpeechRecognitionResult[];
    /**
     * Provides information on speech adaptation behavior in response
     */
    speechAdaptationInfo?: Schema$SpeechAdaptationInfo;
    /**
     * When available, billed audio seconds for the corresponding request.
     */
    totalBilledTime?: string | null;
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
  /**
   * A phrases containing words and phrase "hints" so that the speech recognition is more likely to recognize them. This can be used to improve the accuracy for specific words and phrases, for example, if specific commands are typically spoken by the user. This can also be used to add additional words to the vocabulary of the recognizer. See [usage limits](https://cloud.google.com/speech-to-text/quotas#content). List items can also include pre-built or custom classes containing groups of words that represent common concepts that occur in natural language. For example, rather than providing a phrase hint for every month of the year (e.g. "i was born in january", "i was born in febuary", ...), use the pre-built `$MONTH` class improves the likelihood of correctly transcribing audio that includes months (e.g. "i was born in $month"). To refer to pre-built classes, use the class' symbol prepended with `$` e.g. `$MONTH`. To refer to custom classes that were defined inline in the request, set the class's `custom_class_id` to a string unique to all class resources and inline classes. Then use the class' id wrapped in $`{...\}` e.g. "${my-months\}". To refer to custom classes resources, use the class' id wrapped in `${\}` (e.g. `${my-months\}`). Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.
   */
  export interface Schema$Phrase {
    /**
     * Hint Boost. Overrides the boost set at the phrase set level. Positive value will increase the probability that a specific phrase will be recognized over other similar sounding phrases. The higher the boost, the higher the chance of false positive recognition as well. Negative boost will simply be ignored. Though `boost` can accept a wide range of positive values, most use cases are best served with values between 0 and 20. We recommend using a binary search approach to finding the optimal value for your use case. Speech recognition will skip PhraseSets with a boost value of 0.
     */
    boost?: number | null;
    /**
     * The phrase itself.
     */
    value?: string | null;
  }
  /**
   * Provides "hints" to the speech recognizer to favor specific words and phrases in the results.
   */
  export interface Schema$PhraseSet {
    /**
     * Hint Boost. Positive value will increase the probability that a specific phrase will be recognized over other similar sounding phrases. The higher the boost, the higher the chance of false positive recognition as well. Negative boost values would correspond to anti-biasing. Anti-biasing is not enabled, so negative boost will simply be ignored. Though `boost` can accept a wide range of positive values, most use cases are best served with values between 0 (exclusive) and 20. We recommend using a binary search approach to finding the optimal value for your use case. Speech recognition will skip PhraseSets with a boost value of 0.
     */
    boost?: number | null;
    /**
     * The resource name of the phrase set.
     */
    name?: string | null;
    /**
     * A list of word and phrases.
     */
    phrases?: Schema$Phrase[];
  }
  /**
   * Contains audio data in the encoding specified in the `RecognitionConfig`. Either `content` or `uri` must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT. See [content limits](https://cloud.google.com/speech-to-text/quotas#content).
   */
  export interface Schema$RecognitionAudio {
    /**
     * The audio data bytes encoded as specified in `RecognitionConfig`. Note: as with all bytes fields, proto buffers use a pure binary representation, whereas JSON representations use base64.
     */
    content?: string | null;
    /**
     * URI that points to a file that contains audio data bytes as specified in `RecognitionConfig`. The file must not be compressed (for example, gzip). Currently, only Google Cloud Storage URIs are supported, which must be specified in the following format: `gs://bucket_name/object_name` (other URI formats return google.rpc.Code.INVALID_ARGUMENT). For more information, see [Request URIs](https://cloud.google.com/storage/docs/reference-uris).
     */
    uri?: string | null;
  }
  /**
   * Provides information to the recognizer that specifies how to process the request.
   */
  export interface Schema$RecognitionConfig {
    /**
     * Speech adaptation configuration improves the accuracy of speech recognition. For more information, see the [speech adaptation](https://cloud.google.com/speech-to-text/docs/adaptation) documentation. When speech adaptation is set it supersedes the `speech_contexts` field.
     */
    adaptation?: Schema$SpeechAdaptation;
    /**
     * A list of up to 3 additional [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tags, listing possible alternative languages of the supplied audio. See [Language Support](https://cloud.google.com/speech-to-text/docs/languages) for a list of the currently supported language codes. If alternative languages are listed, recognition result will contain recognition in the most likely language detected including the main language_code. The recognition result will include the language tag of the language detected in the audio. Note: This feature is only supported for Voice Command and Voice Search use cases and performance may vary for other use cases (e.g., phone call transcription).
     */
    alternativeLanguageCodes?: string[] | null;
    /**
     * The number of channels in the input audio data. ONLY set this for MULTI-CHANNEL recognition. Valid values for LINEAR16, OGG_OPUS and FLAC are `1`-`8`. Valid value for MULAW, AMR, AMR_WB and SPEEX_WITH_HEADER_BYTE is only `1`. If `0` or omitted, defaults to one channel (mono). Note: We only recognize the first channel by default. To perform independent recognition on each channel set `enable_separate_recognition_per_channel` to 'true'.
     */
    audioChannelCount?: number | null;
    /**
     * Config to enable speaker diarization and set additional parameters to make diarization better suited for your application. Note: When this is enabled, we send all the words from the beginning of the audio for the top alternative in every consecutive STREAMING responses. This is done in order to improve our speaker tags as our models learn to identify the speakers in the conversation over time. For non-streaming requests, the diarization results will be provided only in the top alternative of the FINAL SpeechRecognitionResult.
     */
    diarizationConfig?: Schema$SpeakerDiarizationConfig;
    /**
     * If 'true', adds punctuation to recognition result hypotheses. This feature is only available in select languages. Setting this for requests in other languages has no effect at all. The default 'false' value does not add punctuation to result hypotheses.
     */
    enableAutomaticPunctuation?: boolean | null;
    /**
     * This needs to be set to `true` explicitly and `audio_channel_count` \> 1 to get each channel recognized separately. The recognition result will contain a `channel_tag` field to state which channel that result belongs to. If this is not true, we will only recognize the first channel. The request is billed cumulatively for all channels recognized: `audio_channel_count` multiplied by the length of the audio.
     */
    enableSeparateRecognitionPerChannel?: boolean | null;
    /**
     * The spoken emoji behavior for the call If not set, uses default behavior based on model of choice If 'true', adds spoken emoji formatting for the request. This will replace spoken emojis with the corresponding Unicode symbols in the final transcript. If 'false', spoken emojis are not replaced.
     */
    enableSpokenEmojis?: boolean | null;
    /**
     * The spoken punctuation behavior for the call If not set, uses default behavior based on model of choice e.g. command_and_search will enable spoken punctuation by default If 'true', replaces spoken punctuation with the corresponding symbols in the request. For example, "how are you question mark" becomes "how are you?". See https://cloud.google.com/speech-to-text/docs/spoken-punctuation for support. If 'false', spoken punctuation is not replaced.
     */
    enableSpokenPunctuation?: boolean | null;
    /**
     * If `true`, the top result includes a list of words and the confidence for those words. If `false`, no word-level confidence information is returned. The default is `false`.
     */
    enableWordConfidence?: boolean | null;
    /**
     * If `true`, the top result includes a list of words and the start and end time offsets (timestamps) for those words. If `false`, no word-level time offset information is returned. The default is `false`.
     */
    enableWordTimeOffsets?: boolean | null;
    /**
     * Encoding of audio data sent in all `RecognitionAudio` messages. This field is optional for `FLAC` and `WAV` audio files and required for all other audio formats. For details, see AudioEncoding.
     */
    encoding?: string | null;
    /**
     * Required. The language of the supplied audio as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US". See [Language Support](https://cloud.google.com/speech-to-text/docs/languages) for a list of the currently supported language codes.
     */
    languageCode?: string | null;
    /**
     * Maximum number of recognition hypotheses to be returned. Specifically, the maximum number of `SpeechRecognitionAlternative` messages within each `SpeechRecognitionResult`. The server may return fewer than `max_alternatives`. Valid values are `0`-`30`. A value of `0` or `1` will return a maximum of one. If omitted, will return a maximum of one.
     */
    maxAlternatives?: number | null;
    /**
     * Metadata regarding this request.
     */
    metadata?: Schema$RecognitionMetadata;
    /**
     * Which model to select for the given request. Select the model best suited to your domain to get best results. If a model is not explicitly specified, then we auto-select a model based on the parameters in the RecognitionConfig. *Model* *Description* latest_long Best for long form content like media or conversation. latest_short Best for short form content like commands or single shot directed speech. command_and_search Best for short queries such as voice commands or voice search. phone_call Best for audio that originated from a phone call (typically recorded at an 8khz sampling rate). video Best for audio that originated from video or includes multiple speakers. Ideally the audio is recorded at a 16khz or greater sampling rate. This is a premium model that costs more than the standard rate. default Best for audio that is not one of the specific audio models. For example, long-form audio. Ideally the audio is high-fidelity, recorded at a 16khz or greater sampling rate. medical_conversation Best for audio that originated from a conversation between a medical provider and patient. medical_dictation Best for audio that originated from dictation notes by a medical provider.
     */
    model?: string | null;
    /**
     * If set to `true`, the server will attempt to filter out profanities, replacing all but the initial character in each filtered word with asterisks, e.g. "f***". If set to `false` or omitted, profanities won't be filtered out.
     */
    profanityFilter?: boolean | null;
    /**
     * Sample rate in Hertz of the audio data sent in all `RecognitionAudio` messages. Valid values are: 8000-48000. 16000 is optimal. For best results, set the sampling rate of the audio source to 16000 Hz. If that's not possible, use the native sample rate of the audio source (instead of re-sampling). This field is optional for FLAC and WAV audio files, but is required for all other audio formats. For details, see AudioEncoding.
     */
    sampleRateHertz?: number | null;
    /**
     * Array of SpeechContext. A means to provide context to assist the speech recognition. For more information, see [speech adaptation](https://cloud.google.com/speech-to-text/docs/adaptation).
     */
    speechContexts?: Schema$SpeechContext[];
    /**
     * Set to true to use an enhanced model for speech recognition. If `use_enhanced` is set to true and the `model` field is not set, then an appropriate enhanced model is chosen if an enhanced model exists for the audio. If `use_enhanced` is true and an enhanced version of the specified model does not exist, then the speech is recognized using the standard version of the specified model.
     */
    useEnhanced?: boolean | null;
  }
  /**
   * Description of audio data to be recognized.
   */
  export interface Schema$RecognitionMetadata {
    /**
     * Description of the content. Eg. "Recordings of federal supreme court hearings from 2012".
     */
    audioTopic?: string | null;
    /**
     * The industry vertical to which this speech recognition request most closely applies. This is most indicative of the topics contained in the audio. Use the 6-digit NAICS code to identify the industry vertical - see https://www.naics.com/search/.
     */
    industryNaicsCodeOfAudio?: number | null;
    /**
     * The use case most closely describing the audio content to be recognized.
     */
    interactionType?: string | null;
    /**
     * The audio type that most closely describes the audio being recognized.
     */
    microphoneDistance?: string | null;
    /**
     * The original media the speech was recorded on.
     */
    originalMediaType?: string | null;
    /**
     * Mime type of the original audio file. For example `audio/m4a`, `audio/x-alaw-basic`, `audio/mp3`, `audio/3gpp`. A list of possible audio mime types is maintained at http://www.iana.org/assignments/media-types/media-types.xhtml#audio
     */
    originalMimeType?: string | null;
    /**
     * The device used to make the recording. Examples 'Nexus 5X' or 'Polycom SoundStation IP 6000' or 'POTS' or 'VoIP' or 'Cardioid Microphone'.
     */
    recordingDeviceName?: string | null;
    /**
     * The type of device the speech was recorded with.
     */
    recordingDeviceType?: string | null;
  }
  /**
   * The top-level message sent by the client for the `Recognize` method.
   */
  export interface Schema$RecognizeRequest {
    /**
     * Required. The audio data to be recognized.
     */
    audio?: Schema$RecognitionAudio;
    /**
     * Required. Provides information to the recognizer that specifies how to process the request.
     */
    config?: Schema$RecognitionConfig;
  }
  /**
   * The only message returned to the client by the `Recognize` method. It contains the result as zero or more sequential `SpeechRecognitionResult` messages.
   */
  export interface Schema$RecognizeResponse {
    /**
     * The ID associated with the request. This is a unique ID specific only to the given request.
     */
    requestId?: string | null;
    /**
     * Sequential list of transcription results corresponding to sequential portions of audio.
     */
    results?: Schema$SpeechRecognitionResult[];
    /**
     * Provides information on adaptation behavior in response
     */
    speechAdaptationInfo?: Schema$SpeechAdaptationInfo;
    /**
     * When available, billed audio seconds for the corresponding request.
     */
    totalBilledTime?: string | null;
  }
  /**
   * Config to enable speaker diarization.
   */
  export interface Schema$SpeakerDiarizationConfig {
    /**
     * If 'true', enables speaker detection for each recognized word in the top alternative of the recognition result using a speaker_tag provided in the WordInfo.
     */
    enableSpeakerDiarization?: boolean | null;
    /**
     * Maximum number of speakers in the conversation. This range gives you more flexibility by allowing the system to automatically determine the correct number of speakers. If not set, the default value is 6.
     */
    maxSpeakerCount?: number | null;
    /**
     * Minimum number of speakers in the conversation. This range gives you more flexibility by allowing the system to automatically determine the correct number of speakers. If not set, the default value is 2.
     */
    minSpeakerCount?: number | null;
    /**
     * Output only. Unused.
     */
    speakerTag?: number | null;
  }
  /**
   * Speech adaptation configuration.
   */
  export interface Schema$SpeechAdaptation {
    /**
     * Augmented Backus-Naur form (ABNF) is a standardized grammar notation comprised by a set of derivation rules. See specifications: https://www.w3.org/TR/speech-grammar
     */
    abnfGrammar?: Schema$ABNFGrammar;
    /**
     * A collection of custom classes. To specify the classes inline, leave the class' `name` blank and fill in the rest of its fields, giving it a unique `custom_class_id`. Refer to the inline defined class in phrase hints by its `custom_class_id`.
     */
    customClasses?: Schema$CustomClass[];
    /**
     * A collection of phrase set resource names to use.
     */
    phraseSetReferences?: string[] | null;
    /**
     * A collection of phrase sets. To specify the hints inline, leave the phrase set's `name` blank and fill in the rest of its fields. Any phrase set can use any custom class.
     */
    phraseSets?: Schema$PhraseSet[];
  }
  /**
   * Information on speech adaptation use in results
   */
  export interface Schema$SpeechAdaptationInfo {
    /**
     * Whether there was a timeout when applying speech adaptation. If true, adaptation had no effect in the response transcript.
     */
    adaptationTimeout?: boolean | null;
    /**
     * If set, returns a message specifying which part of the speech adaptation request timed out.
     */
    timeoutMessage?: string | null;
  }
  /**
   * Provides "hints" to the speech recognizer to favor specific words and phrases in the results.
   */
  export interface Schema$SpeechContext {
    /**
     * Hint Boost. Positive value will increase the probability that a specific phrase will be recognized over other similar sounding phrases. The higher the boost, the higher the chance of false positive recognition as well. Negative boost values would correspond to anti-biasing. Anti-biasing is not enabled, so negative boost will simply be ignored. Though `boost` can accept a wide range of positive values, most use cases are best served with values between 0 and 20. We recommend using a binary search approach to finding the optimal value for your use case.
     */
    boost?: number | null;
    /**
     * A list of strings containing words and phrases "hints" so that the speech recognition is more likely to recognize them. This can be used to improve the accuracy for specific words and phrases, for example, if specific commands are typically spoken by the user. This can also be used to add additional words to the vocabulary of the recognizer. See [usage limits](https://cloud.google.com/speech-to-text/quotas#content). List items can also be set to classes for groups of words that represent common concepts that occur in natural language. For example, rather than providing phrase hints for every month of the year, using the $MONTH class improves the likelihood of correctly transcribing audio that includes months.
     */
    phrases?: string[] | null;
  }
  /**
   * Alternative hypotheses (a.k.a. n-best list).
   */
  export interface Schema$SpeechRecognitionAlternative {
    /**
     * The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative of a non-streaming result or, of a streaming result where `is_final=true`. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.
     */
    confidence?: number | null;
    /**
     * Transcript text representing the words that the user spoke. In languages that use spaces to separate words, the transcript might have a leading space if it isn't the first result. You can concatenate each result to obtain the full transcript without using a separator.
     */
    transcript?: string | null;
    /**
     * A list of word-specific information for each recognized word. Note: When `enable_speaker_diarization` is true, you will see all the words from the beginning of the audio.
     */
    words?: Schema$WordInfo[];
  }
  /**
   * A speech recognition result corresponding to a portion of the audio.
   */
  export interface Schema$SpeechRecognitionResult {
    /**
     * May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer.
     */
    alternatives?: Schema$SpeechRecognitionAlternative[];
    /**
     * For multi-channel audio, this is the channel number corresponding to the recognized result for the audio from that channel. For audio_channel_count = N, its output values can range from '1' to 'N'.
     */
    channelTag?: number | null;
    /**
     * Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio.
     */
    languageCode?: string | null;
    /**
     * Time offset of the end of this result relative to the beginning of the audio.
     */
    resultEndTime?: string | null;
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
  /**
   * Specifies an optional destination for the recognition results.
   */
  export interface Schema$TranscriptOutputConfig {
    /**
     * Specifies a Cloud Storage URI for the recognition results. Must be specified in the format: `gs://bucket_name/object_name`, and the bucket must already exist.
     */
    gcsUri?: string | null;
  }
  /**
   * Word-specific information for recognized words.
   */
  export interface Schema$WordInfo {
    /**
     * The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative of a non-streaming result or, of a streaming result where `is_final=true`. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.
     */
    confidence?: number | null;
    /**
     * Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.
     */
    endTime?: string | null;
    /**
     * Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from '1' to diarization_speaker_count. speaker_tag is set if enable_speaker_diarization = 'true' and only in the top alternative.
     */
    speakerTag?: number | null;
    /**
     * Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.
     */
    startTime?: string | null;
    /**
     * The word corresponding to this set of information.
     */
    word?: string | null;
  }

  export class Resource$Operations {
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
     * //   https://console.developers.google.com/apis/api/speech.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const speech = google.speech('v1');
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
     *   const res = await speech.operations.get({
     *     // The name of the operation resource.
     *     name: '.*',
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
      params: Params$Resource$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Operations$Get
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
            url: (rootUrl + '/v1/operations/{+name}').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x\}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/speech.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const speech = google.speech('v1');
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
     *   const res = await speech.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'placeholder-value',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "operations": []
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
      params: Params$Resource$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Operations$List
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListOperationsResponse>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$ListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Operations$Get extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Operations$List extends StandardParameters {
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

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    customClasses: Resource$Projects$Locations$Customclasses;
    phraseSets: Resource$Projects$Locations$Phrasesets;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.customClasses = new Resource$Projects$Locations$Customclasses(
        this.context
      );
      this.phraseSets = new Resource$Projects$Locations$Phrasesets(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations$Customclasses {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create a custom class.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/speech.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const speech = google.speech('v1');
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
     *   const res = await speech.projects.locations.customClasses.create({
     *     // Required. The parent resource where this custom class will be created. Format: `projects/{project\}/locations/{location\}/customClasses` Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "customClass": {},
     *       //   "customClassId": "my_customClassId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customClassId": "my_customClassId",
     *   //   "items": [],
     *   //   "name": "my_name"
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
      params: Params$Resource$Projects$Locations$Customclasses$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Customclasses$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CustomClass>;
    create(
      params: Params$Resource$Projects$Locations$Customclasses$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Customclasses$Create,
      options: MethodOptions | BodyResponseCallback<Schema$CustomClass>,
      callback: BodyResponseCallback<Schema$CustomClass>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Customclasses$Create,
      callback: BodyResponseCallback<Schema$CustomClass>
    ): void;
    create(callback: BodyResponseCallback<Schema$CustomClass>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Customclasses$Create
        | BodyResponseCallback<Schema$CustomClass>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomClass>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomClass>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CustomClass> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Customclasses$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Customclasses$Create;
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
            url: (rootUrl + '/v1/{+parent}/customClasses').replace(
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
        createAPIRequest<Schema$CustomClass>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomClass>(parameters);
      }
    }

    /**
     * Delete a custom class.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/speech.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const speech = google.speech('v1');
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
     *   const res = await speech.projects.locations.customClasses.delete({
     *     // Required. The name of the custom class to delete. Format: `projects/{project\}/locations/{location\}/customClasses/{custom_class\}` Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.
     *     name: 'projects/my-project/locations/my-location/customClasses/my-customClasse',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
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
    delete(
      params: Params$Resource$Projects$Locations$Customclasses$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Customclasses$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Customclasses$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Customclasses$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Customclasses$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Customclasses$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Customclasses$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Customclasses$Delete;
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
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Get a custom class.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/speech.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const speech = google.speech('v1');
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
     *   const res = await speech.projects.locations.customClasses.get({
     *     // Required. The name of the custom class to retrieve. Format: `projects/{project\}/locations/{location\}/customClasses/{custom_class\}`
     *     name: 'projects/my-project/locations/my-location/customClasses/my-customClasse',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customClassId": "my_customClassId",
     *   //   "items": [],
     *   //   "name": "my_name"
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
      params: Params$Resource$Projects$Locations$Customclasses$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Customclasses$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CustomClass>;
    get(
      params: Params$Resource$Projects$Locations$Customclasses$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Customclasses$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CustomClass>,
      callback: BodyResponseCallback<Schema$CustomClass>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Customclasses$Get,
      callback: BodyResponseCallback<Schema$CustomClass>
    ): void;
    get(callback: BodyResponseCallback<Schema$CustomClass>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Customclasses$Get
        | BodyResponseCallback<Schema$CustomClass>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomClass>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomClass>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CustomClass> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Customclasses$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Customclasses$Get;
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
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$CustomClass>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomClass>(parameters);
      }
    }

    /**
     * List custom classes.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/speech.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const speech = google.speech('v1');
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
     *   const res = await speech.projects.locations.customClasses.list({
     *     // The maximum number of custom classes to return. The service may return fewer than this value. If unspecified, at most 50 custom classes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListCustomClass` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomClass` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent, which owns this collection of custom classes. Format: `projects/{project\}/locations/{location\}/customClasses` Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customClasses": [],
     *   //   "nextPageToken": "my_nextPageToken"
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
      params: Params$Resource$Projects$Locations$Customclasses$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Customclasses$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListCustomClassesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Customclasses$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Customclasses$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCustomClassesResponse>,
      callback: BodyResponseCallback<Schema$ListCustomClassesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Customclasses$List,
      callback: BodyResponseCallback<Schema$ListCustomClassesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListCustomClassesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Customclasses$List
        | BodyResponseCallback<Schema$ListCustomClassesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCustomClassesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCustomClassesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListCustomClassesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Customclasses$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Customclasses$List;
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
            url: (rootUrl + '/v1/{+parent}/customClasses').replace(
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
        createAPIRequest<Schema$ListCustomClassesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCustomClassesResponse>(parameters);
      }
    }

    /**
     * Update a custom class.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/speech.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const speech = google.speech('v1');
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
     *   const res = await speech.projects.locations.customClasses.patch({
     *     // The resource name of the custom class.
     *     name: 'projects/my-project/locations/my-location/customClasses/my-customClasse',
     *     // The list of fields to be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "customClassId": "my_customClassId",
     *       //   "items": [],
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customClassId": "my_customClassId",
     *   //   "items": [],
     *   //   "name": "my_name"
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
    patch(
      params: Params$Resource$Projects$Locations$Customclasses$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Customclasses$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CustomClass>;
    patch(
      params: Params$Resource$Projects$Locations$Customclasses$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Customclasses$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$CustomClass>,
      callback: BodyResponseCallback<Schema$CustomClass>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Customclasses$Patch,
      callback: BodyResponseCallback<Schema$CustomClass>
    ): void;
    patch(callback: BodyResponseCallback<Schema$CustomClass>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Customclasses$Patch
        | BodyResponseCallback<Schema$CustomClass>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomClass>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomClass>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CustomClass> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Customclasses$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Customclasses$Patch;
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
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CustomClass>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomClass>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Customclasses$Create
    extends StandardParameters {
    /**
     * Required. The parent resource where this custom class will be created. Format: `projects/{project\}/locations/{location\}/customClasses` Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateCustomClassRequest;
  }
  export interface Params$Resource$Projects$Locations$Customclasses$Delete
    extends StandardParameters {
    /**
     * Required. The name of the custom class to delete. Format: `projects/{project\}/locations/{location\}/customClasses/{custom_class\}` Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Customclasses$Get
    extends StandardParameters {
    /**
     * Required. The name of the custom class to retrieve. Format: `projects/{project\}/locations/{location\}/customClasses/{custom_class\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Customclasses$List
    extends StandardParameters {
    /**
     * The maximum number of custom classes to return. The service may return fewer than this value. If unspecified, at most 50 custom classes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListCustomClass` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomClass` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns this collection of custom classes. Format: `projects/{project\}/locations/{location\}/customClasses` Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Customclasses$Patch
    extends StandardParameters {
    /**
     * The resource name of the custom class.
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CustomClass;
  }

  export class Resource$Projects$Locations$Phrasesets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create a set of phrase hints. Each item in the set can be a single word or a multi-word phrase. The items in the PhraseSet are favored by the recognition model when you send a call that includes the PhraseSet.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/speech.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const speech = google.speech('v1');
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
     *   const res = await speech.projects.locations.phraseSets.create({
     *     // Required. The parent resource where this phrase set will be created. Format: `projects/{project\}/locations/{location\}/phraseSets` Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "phraseSet": {},
     *       //   "phraseSetId": "my_phraseSetId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "boost": {},
     *   //   "name": "my_name",
     *   //   "phrases": []
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
      params: Params$Resource$Projects$Locations$Phrasesets$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Phrasesets$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PhraseSet>;
    create(
      params: Params$Resource$Projects$Locations$Phrasesets$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Phrasesets$Create,
      options: MethodOptions | BodyResponseCallback<Schema$PhraseSet>,
      callback: BodyResponseCallback<Schema$PhraseSet>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Phrasesets$Create,
      callback: BodyResponseCallback<Schema$PhraseSet>
    ): void;
    create(callback: BodyResponseCallback<Schema$PhraseSet>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Phrasesets$Create
        | BodyResponseCallback<Schema$PhraseSet>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PhraseSet>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PhraseSet>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PhraseSet> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Phrasesets$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Phrasesets$Create;
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
            url: (rootUrl + '/v1/{+parent}/phraseSets').replace(
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
        createAPIRequest<Schema$PhraseSet>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PhraseSet>(parameters);
      }
    }

    /**
     * Delete a phrase set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/speech.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const speech = google.speech('v1');
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
     *   const res = await speech.projects.locations.phraseSets.delete({
     *     // Required. The name of the phrase set to delete. Format: `projects/{project\}/locations/{location\}/phraseSets/{phrase_set\}`
     *     name: 'projects/my-project/locations/my-location/phraseSets/my-phraseSet',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
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
    delete(
      params: Params$Resource$Projects$Locations$Phrasesets$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Phrasesets$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Phrasesets$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Phrasesets$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Phrasesets$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Phrasesets$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Phrasesets$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Phrasesets$Delete;
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
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Get a phrase set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/speech.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const speech = google.speech('v1');
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
     *   const res = await speech.projects.locations.phraseSets.get({
     *     // Required. The name of the phrase set to retrieve. Format: `projects/{project\}/locations/{location\}/phraseSets/{phrase_set\}` Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.
     *     name: 'projects/my-project/locations/my-location/phraseSets/my-phraseSet',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "boost": {},
     *   //   "name": "my_name",
     *   //   "phrases": []
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
      params: Params$Resource$Projects$Locations$Phrasesets$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Phrasesets$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PhraseSet>;
    get(
      params: Params$Resource$Projects$Locations$Phrasesets$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Phrasesets$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PhraseSet>,
      callback: BodyResponseCallback<Schema$PhraseSet>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Phrasesets$Get,
      callback: BodyResponseCallback<Schema$PhraseSet>
    ): void;
    get(callback: BodyResponseCallback<Schema$PhraseSet>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Phrasesets$Get
        | BodyResponseCallback<Schema$PhraseSet>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PhraseSet>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PhraseSet>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PhraseSet> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Phrasesets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Phrasesets$Get;
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
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$PhraseSet>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PhraseSet>(parameters);
      }
    }

    /**
     * List phrase sets.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/speech.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const speech = google.speech('v1');
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
     *   const res = await speech.projects.locations.phraseSets.list({
     *     // The maximum number of phrase sets to return. The service may return fewer than this value. If unspecified, at most 50 phrase sets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListPhraseSet` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPhraseSet` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent, which owns this collection of phrase set. Format: `projects/{project\}/locations/{location\}` Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "phraseSets": []
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
      params: Params$Resource$Projects$Locations$Phrasesets$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Phrasesets$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListPhraseSetResponse>;
    list(
      params: Params$Resource$Projects$Locations$Phrasesets$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Phrasesets$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPhraseSetResponse>,
      callback: BodyResponseCallback<Schema$ListPhraseSetResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Phrasesets$List,
      callback: BodyResponseCallback<Schema$ListPhraseSetResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListPhraseSetResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Phrasesets$List
        | BodyResponseCallback<Schema$ListPhraseSetResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPhraseSetResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPhraseSetResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListPhraseSetResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Phrasesets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Phrasesets$List;
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
            url: (rootUrl + '/v1/{+parent}/phraseSets').replace(
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
        createAPIRequest<Schema$ListPhraseSetResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPhraseSetResponse>(parameters);
      }
    }

    /**
     * Update a phrase set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/speech.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const speech = google.speech('v1');
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
     *   const res = await speech.projects.locations.phraseSets.patch({
     *     // The resource name of the phrase set.
     *     name: 'projects/my-project/locations/my-location/phraseSets/my-phraseSet',
     *     // The list of fields to be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "boost": {},
     *       //   "name": "my_name",
     *       //   "phrases": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "boost": {},
     *   //   "name": "my_name",
     *   //   "phrases": []
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
    patch(
      params: Params$Resource$Projects$Locations$Phrasesets$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Phrasesets$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PhraseSet>;
    patch(
      params: Params$Resource$Projects$Locations$Phrasesets$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Phrasesets$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$PhraseSet>,
      callback: BodyResponseCallback<Schema$PhraseSet>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Phrasesets$Patch,
      callback: BodyResponseCallback<Schema$PhraseSet>
    ): void;
    patch(callback: BodyResponseCallback<Schema$PhraseSet>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Phrasesets$Patch
        | BodyResponseCallback<Schema$PhraseSet>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PhraseSet>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PhraseSet>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PhraseSet> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Phrasesets$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Phrasesets$Patch;
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
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PhraseSet>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PhraseSet>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Phrasesets$Create
    extends StandardParameters {
    /**
     * Required. The parent resource where this phrase set will be created. Format: `projects/{project\}/locations/{location\}/phraseSets` Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreatePhraseSetRequest;
  }
  export interface Params$Resource$Projects$Locations$Phrasesets$Delete
    extends StandardParameters {
    /**
     * Required. The name of the phrase set to delete. Format: `projects/{project\}/locations/{location\}/phraseSets/{phrase_set\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Phrasesets$Get
    extends StandardParameters {
    /**
     * Required. The name of the phrase set to retrieve. Format: `projects/{project\}/locations/{location\}/phraseSets/{phrase_set\}` Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Phrasesets$List
    extends StandardParameters {
    /**
     * The maximum number of phrase sets to return. The service may return fewer than this value. If unspecified, at most 50 phrase sets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListPhraseSet` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPhraseSet` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns this collection of phrase set. Format: `projects/{project\}/locations/{location\}` Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Phrasesets$Patch
    extends StandardParameters {
    /**
     * The resource name of the phrase set.
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PhraseSet;
  }

  export class Resource$Speech {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Performs asynchronous speech recognition: receive results via the google.longrunning.Operations interface. Returns either an `Operation.error` or an `Operation.response` which contains a `LongRunningRecognizeResponse` message. For more information on asynchronous speech recognition, see the [how-to](https://cloud.google.com/speech-to-text/docs/async-recognize).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/speech.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const speech = google.speech('v1');
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
     *   const res = await speech.speech.longrunningrecognize({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "audio": {},
     *       //   "config": {},
     *       //   "outputConfig": {}
     *       // }
     *     },
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
    longrunningrecognize(
      params: Params$Resource$Speech$Longrunningrecognize,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    longrunningrecognize(
      params?: Params$Resource$Speech$Longrunningrecognize,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    longrunningrecognize(
      params: Params$Resource$Speech$Longrunningrecognize,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    longrunningrecognize(
      params: Params$Resource$Speech$Longrunningrecognize,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    longrunningrecognize(
      params: Params$Resource$Speech$Longrunningrecognize,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    longrunningrecognize(
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    longrunningrecognize(
      paramsOrCallback?:
        | Params$Resource$Speech$Longrunningrecognize
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
        {}) as Params$Resource$Speech$Longrunningrecognize;
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
            url: (rootUrl + '/v1/speech:longrunningrecognize').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Performs synchronous speech recognition: receive results after all audio has been sent and processed.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/speech.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const speech = google.speech('v1');
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
     *   const res = await speech.speech.recognize({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "audio": {},
     *       //   "config": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "requestId": "my_requestId",
     *   //   "results": [],
     *   //   "speechAdaptationInfo": {},
     *   //   "totalBilledTime": "my_totalBilledTime"
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
    recognize(
      params: Params$Resource$Speech$Recognize,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    recognize(
      params?: Params$Resource$Speech$Recognize,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RecognizeResponse>;
    recognize(
      params: Params$Resource$Speech$Recognize,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    recognize(
      params: Params$Resource$Speech$Recognize,
      options: MethodOptions | BodyResponseCallback<Schema$RecognizeResponse>,
      callback: BodyResponseCallback<Schema$RecognizeResponse>
    ): void;
    recognize(
      params: Params$Resource$Speech$Recognize,
      callback: BodyResponseCallback<Schema$RecognizeResponse>
    ): void;
    recognize(callback: BodyResponseCallback<Schema$RecognizeResponse>): void;
    recognize(
      paramsOrCallback?:
        | Params$Resource$Speech$Recognize
        | BodyResponseCallback<Schema$RecognizeResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RecognizeResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RecognizeResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$RecognizeResponse>
      | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/v1/speech:recognize').replace(
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
        createAPIRequest<Schema$RecognizeResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RecognizeResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Speech$Longrunningrecognize
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$LongRunningRecognizeRequest;
  }
  export interface Params$Resource$Speech$Recognize extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$RecognizeRequest;
  }
}
