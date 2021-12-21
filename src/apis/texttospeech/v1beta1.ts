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
/* eslint-disable @typescript-eslint/class-name-casing */
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

export namespace texttospeech_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
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
   * Cloud Text-to-Speech API
   *
   * Synthesizes natural-sounding speech by applying powerful neural network models.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const texttospeech = google.texttospeech('v1beta1');
   * ```
   */
  export class Texttospeech {
    context: APIRequestContext;
    text: Resource$Text;
    voices: Resource$Voices;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.text = new Resource$Text(this.context);
      this.voices = new Resource$Voices(this.context);
    }
  }

  /**
   * Description of audio data to be synthesized.
   */
  export interface Schema$AudioConfig {
    /**
     * Required. The format of the audio byte stream.
     */
    audioEncoding?: string | null;
    /**
     * Optional. Input only. An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech. Effects are applied on top of each other in the order they are given. See [audio profiles](https://cloud.google.com/text-to-speech/docs/audio-profiles) for current supported profile ids.
     */
    effectsProfileId?: string[] | null;
    /**
     * Optional. Input only. Speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20 semitones from the original pitch. -20 means decrease 20 semitones from the original pitch.
     */
    pitch?: number | null;
    /**
     * Optional. The synthesis sample rate (in hertz) for this audio. When this is specified in SynthesizeSpeechRequest, if this is different from the voice's natural sample rate, then the synthesizer will honor this request by converting to the desired sample rate (which might result in worse audio quality), unless the specified sample rate is not supported for the encoding chosen, in which case it will fail the request and return google.rpc.Code.INVALID_ARGUMENT.
     */
    sampleRateHertz?: number | null;
    /**
     * Optional. Input only. Speaking rate/speed, in the range [0.25, 4.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. If unset(0.0), defaults to the native 1.0 speed. Any other values < 0.25 or \> 4.0 will return an error.
     */
    speakingRate?: number | null;
    /**
     * Optional. Input only. Volume gain (in dB) of the normal native volume supported by the specific voice, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. Strongly recommend not to exceed +10 (dB) as there's usually no effective increase in loudness for any value greater than that.
     */
    volumeGainDb?: number | null;
  }
  /**
   * Description of the custom voice to be synthesized.
   */
  export interface Schema$CustomVoiceParams {
    /**
     * Required. The name of the AutoML model that synthesizes the custom voice.
     */
    model?: string | null;
    /**
     * Optional. The usage of the synthesized audio to be reported.
     */
    reportedUsage?: string | null;
  }
  /**
   * The message returned to the client by the `ListVoices` method.
   */
  export interface Schema$ListVoicesResponse {
    /**
     * The list of voices.
     */
    voices?: Schema$Voice[];
  }
  /**
   * Contains text input to be synthesized. Either `text` or `ssml` must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT. The input size is limited to 5000 characters.
   */
  export interface Schema$SynthesisInput {
    /**
     * The SSML document to be synthesized. The SSML document must be valid and well-formed. Otherwise the RPC will fail and return google.rpc.Code.INVALID_ARGUMENT. For more information, see [SSML](https://cloud.google.com/text-to-speech/docs/ssml).
     */
    ssml?: string | null;
    /**
     * The raw text to be synthesized.
     */
    text?: string | null;
  }
  /**
   * The top-level message sent by the client for the `SynthesizeSpeech` method.
   */
  export interface Schema$SynthesizeSpeechRequest {
    /**
     * Required. The configuration of the synthesized audio.
     */
    audioConfig?: Schema$AudioConfig;
    /**
     * Whether and what timepoints are returned in the response.
     */
    enableTimePointing?: string[] | null;
    /**
     * Required. The Synthesizer requires either plain text or SSML as input.
     */
    input?: Schema$SynthesisInput;
    /**
     * Required. The desired voice of the synthesized audio.
     */
    voice?: Schema$VoiceSelectionParams;
  }
  /**
   * The message returned to the client by the `SynthesizeSpeech` method.
   */
  export interface Schema$SynthesizeSpeechResponse {
    /**
     * The audio metadata of `audio_content`.
     */
    audioConfig?: Schema$AudioConfig;
    /**
     * The audio data bytes encoded as specified in the request, including the header for encodings that are wrapped in containers (e.g. MP3, OGG_OPUS). For LINEAR16 audio, we include the WAV header. Note: as with all bytes fields, protobuffers use a pure binary representation, whereas JSON representations use base64.
     */
    audioContent?: string | null;
    /**
     * A link between a position in the original request input and a corresponding time in the output audio. It's only supported via `` of SSML input.
     */
    timepoints?: Schema$Timepoint[];
  }
  /**
   * This contains a mapping between a certain point in the input text and a corresponding time in the output audio.
   */
  export interface Schema$Timepoint {
    /**
     * Timepoint name as received from the client within `` tag.
     */
    markName?: string | null;
    /**
     * Time offset in seconds from the start of the synthesized audio.
     */
    timeSeconds?: number | null;
  }
  /**
   * Description of a voice supported by the TTS service.
   */
  export interface Schema$Voice {
    /**
     * The languages that this voice supports, expressed as [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tags (e.g. "en-US", "es-419", "cmn-tw").
     */
    languageCodes?: string[] | null;
    /**
     * The name of this voice. Each distinct voice has a unique name.
     */
    name?: string | null;
    /**
     * The natural sample rate (in hertz) for this voice.
     */
    naturalSampleRateHertz?: number | null;
    /**
     * The gender of this voice.
     */
    ssmlGender?: string | null;
  }
  /**
   * Description of which voice to use for a synthesis request.
   */
  export interface Schema$VoiceSelectionParams {
    /**
     * The configuration for a custom voice. If [CustomVoiceParams.model] is set, the service will choose the custom voice matching the specified configuration.
     */
    customVoice?: Schema$CustomVoiceParams;
    /**
     * Required. The language (and potentially also the region) of the voice expressed as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag, e.g. "en-US". This should not include a script tag (e.g. use "cmn-cn" rather than "cmn-Hant-cn"), because the script will be inferred from the input provided in the SynthesisInput. The TTS service will use this parameter to help choose an appropriate voice. Note that the TTS service may choose a voice with a slightly different language code than the one selected; it may substitute a different region (e.g. using en-US rather than en-CA if there isn't a Canadian voice available), or even a different language, e.g. using "nb" (Norwegian Bokmal) instead of "no" (Norwegian)".
     */
    languageCode?: string | null;
    /**
     * The name of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and gender.
     */
    name?: string | null;
    /**
     * The preferred gender of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and name. Note that this is only a preference, not requirement; if a voice of the appropriate gender is not available, the synthesizer should substitute a voice with a different gender rather than failing the request.
     */
    ssmlGender?: string | null;
  }

  export class Resource$Text {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Synthesizes speech synchronously: receive results after all text input has been processed.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/texttospeech.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const texttospeech = google.texttospeech('v1beta1');
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
     *   const res = await texttospeech.text.synthesize({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "audioConfig": {},
     *       //   "enableTimePointing": [],
     *       //   "input": {},
     *       //   "voice": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "audioConfig": {},
     *   //   "audioContent": "my_audioContent",
     *   //   "timepoints": []
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
    synthesize(
      params: Params$Resource$Text$Synthesize,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    synthesize(
      params?: Params$Resource$Text$Synthesize,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SynthesizeSpeechResponse>;
    synthesize(
      params: Params$Resource$Text$Synthesize,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    synthesize(
      params: Params$Resource$Text$Synthesize,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SynthesizeSpeechResponse>,
      callback: BodyResponseCallback<Schema$SynthesizeSpeechResponse>
    ): void;
    synthesize(
      params: Params$Resource$Text$Synthesize,
      callback: BodyResponseCallback<Schema$SynthesizeSpeechResponse>
    ): void;
    synthesize(
      callback: BodyResponseCallback<Schema$SynthesizeSpeechResponse>
    ): void;
    synthesize(
      paramsOrCallback?:
        | Params$Resource$Text$Synthesize
        | BodyResponseCallback<Schema$SynthesizeSpeechResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SynthesizeSpeechResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SynthesizeSpeechResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SynthesizeSpeechResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Text$Synthesize;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Text$Synthesize;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://texttospeech.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/text:synthesize').replace(
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
        createAPIRequest<Schema$SynthesizeSpeechResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SynthesizeSpeechResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Text$Synthesize extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$SynthesizeSpeechRequest;
  }

  export class Resource$Voices {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns a list of Voice supported for synthesis.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/texttospeech.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const texttospeech = google.texttospeech('v1beta1');
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
     *   const res = await texttospeech.voices.list({
     *     // Optional. Recommended. [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. If not specified, the API will return all supported voices. If specified, the ListVoices call will only return voices that can be used to synthesize this language_code. For example, if you specify `"en-NZ"`, all `"en-NZ"` voices will be returned. If you specify `"no"`, both `"no-\*"` (Norwegian) and `"nb-\*"` (Norwegian Bokmal) voices will be returned.
     *     languageCode: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "voices": []
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
      params: Params$Resource$Voices$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Voices$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListVoicesResponse>;
    list(
      params: Params$Resource$Voices$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Voices$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListVoicesResponse>,
      callback: BodyResponseCallback<Schema$ListVoicesResponse>
    ): void;
    list(
      params: Params$Resource$Voices$List,
      callback: BodyResponseCallback<Schema$ListVoicesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListVoicesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Voices$List
        | BodyResponseCallback<Schema$ListVoicesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListVoicesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListVoicesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListVoicesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Voices$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Voices$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://texttospeech.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/voices').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListVoicesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListVoicesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Voices$List extends StandardParameters {
    /**
     * Optional. Recommended. [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. If not specified, the API will return all supported voices. If specified, the ListVoices call will only return voices that can be used to synthesize this language_code. For example, if you specify `"en-NZ"`, all `"en-NZ"` voices will be returned. If you specify `"no"`, both `"no-\*"` (Norwegian) and `"nb-\*"` (Norwegian Bokmal) voices will be returned.
     */
    languageCode?: string;
  }
}
