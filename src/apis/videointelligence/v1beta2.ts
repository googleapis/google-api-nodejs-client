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

import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from '../../shared/src';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace videointelligence_v1beta2 {
  export interface Options extends GlobalOptions {
    version: 'v1beta2';
  }

  /**
   * Cloud Video Intelligence API
   *
   * Cloud Video Intelligence API.
   *
   * @example
   * const {google} = require('googleapis');
   * const videointelligence = google.videointelligence('v1beta2');
   *
   * @namespace videointelligence
   * @type {Function}
   * @version v1beta2
   * @variation v1beta2
   * @param {object=} options Options for Videointelligence
   */
  export class Videointelligence {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    videos: Resource$Videos;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.videos = new Resource$Videos(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * Video annotation progress. Included in the `metadata` field of the
   * `Operation` returned by the `GetOperation` call of the
   * `google::longrunning::Operations` service.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_AnnotateVideoProgress {
    /**
     * Progress metadata for all videos specified in `AnnotateVideoRequest`.
     */
    annotationProgress?:
        Schema$GoogleCloudVideointelligenceV1beta2_VideoAnnotationProgress[];
  }
  /**
   * Video annotation request.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_AnnotateVideoRequest {
    /**
     * Requested video annotation features.
     */
    features?: string[];
    /**
     * The video data bytes. If unset, the input video(s) should be specified
     * via `input_uri`. If set, `input_uri` should be unset.
     */
    inputContent?: string;
    /**
     * Input video location. Currently, only [Google Cloud
     * Storage](https://cloud.google.com/storage/) URIs are supported, which
     * must be specified in the following format: `gs://bucket-id/object-id`
     * (other URI formats return google.rpc.Code.INVALID_ARGUMENT). For more
     * information, see [Request URIs](/storage/docs/reference-uris). A video
     * URI may include wildcards in `object-id`, and thus identify multiple
     * videos. Supported wildcards: &#39;*&#39; to match 0 or more characters;
     * &#39;?&#39; to match 1 character. If unset, the input video should be
     * embedded in the request as `input_content`. If set, `input_content`
     * should be unset.
     */
    inputUri?: string;
    /**
     * Optional cloud region where annotation should take place. Supported cloud
     * regions: `us-east1`, `us-west1`, `europe-west1`, `asia-east1`. If no
     * region is specified, a region will be determined based on video file
     * location.
     */
    locationId?: string;
    /**
     * Optional location where the output (in JSON format) should be stored.
     * Currently, only [Google Cloud Storage](https://cloud.google.com/storage/)
     * URIs are supported, which must be specified in the following format:
     * `gs://bucket-id/object-id` (other URI formats return
     * google.rpc.Code.INVALID_ARGUMENT). For more information, see [Request
     * URIs](/storage/docs/reference-uris).
     */
    outputUri?: string;
    /**
     * Additional video context and/or feature-specific parameters.
     */
    videoContext?: Schema$GoogleCloudVideointelligenceV1beta2_VideoContext;
  }
  /**
   * Video annotation response. Included in the `response` field of the
   * `Operation` returned by the `GetOperation` call of the
   * `google::longrunning::Operations` service.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_AnnotateVideoResponse {
    /**
     * Annotation results for all videos specified in `AnnotateVideoRequest`.
     */
    annotationResults?:
        Schema$GoogleCloudVideointelligenceV1beta2_VideoAnnotationResults[];
  }
  /**
   * Detected entity from video analysis.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_Entity {
    /**
     * Textual description, e.g. `Fixed-gear bicycle`.
     */
    description?: string;
    /**
     * Opaque entity ID. Some IDs may be available in [Google Knowledge Graph
     * Search API](https://developers.google.com/knowledge-graph/).
     */
    entityId?: string;
    /**
     * Language code for `description` in BCP-47 format.
     */
    languageCode?: string;
  }
  /**
   * Explicit content annotation (based on per-frame visual signals only). If no
   * explicit content has been detected in a frame, no annotations are present
   * for that frame.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_ExplicitContentAnnotation {
    /**
     * All video frames where explicit content was detected.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1beta2_ExplicitContentFrame[];
  }
  /**
   * Config for EXPLICIT_CONTENT_DETECTION.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_ExplicitContentDetectionConfig {
    /**
     * Model to use for explicit content detection. Supported values:
     * &quot;builtin/stable&quot; (the default if unset) and
     * &quot;builtin/latest&quot;.
     */
    model?: string;
  }
  /**
   * Video frame level annotation results for explicit content.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_ExplicitContentFrame {
    /**
     * Likelihood of the pornography content..
     */
    pornographyLikelihood?: string;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the
     * video frame for this location.
     */
    timeOffset?: string;
  }
  /**
   * Label annotation.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_LabelAnnotation {
    /**
     * Common categories for the detected entity. E.g. when the label is
     * `Terrier` the category is likely `dog`. And in some cases there might be
     * more than one categories e.g. `Terrier` could also be a `pet`.
     */
    categoryEntities?: Schema$GoogleCloudVideointelligenceV1beta2_Entity[];
    /**
     * Detected entity.
     */
    entity?: Schema$GoogleCloudVideointelligenceV1beta2_Entity;
    /**
     * All video frames where a label was detected.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1beta2_LabelFrame[];
    /**
     * All video segments where a label was detected.
     */
    segments?: Schema$GoogleCloudVideointelligenceV1beta2_LabelSegment[];
  }
  /**
   * Config for LABEL_DETECTION.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_LabelDetectionConfig {
    /**
     * What labels should be detected with LABEL_DETECTION, in addition to
     * video-level labels or segment-level labels. If unspecified, defaults to
     * `SHOT_MODE`.
     */
    labelDetectionMode?: string;
    /**
     * Model to use for label detection. Supported values:
     * &quot;builtin/stable&quot; (the default if unset) and
     * &quot;builtin/latest&quot;.
     */
    model?: string;
    /**
     * Whether the video has been shot from a stationary (i.e. non-moving)
     * camera. When set to true, might improve detection accuracy for moving
     * objects. Should be used with `SHOT_AND_FRAME_MODE` enabled.
     */
    stationaryCamera?: boolean;
  }
  /**
   * Video frame level annotation results for label detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_LabelFrame {
    /**
     * Confidence that the label is accurate. Range: [0, 1].
     */
    confidence?: number;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the
     * video frame for this location.
     */
    timeOffset?: string;
  }
  /**
   * Video segment level annotation results for label detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_LabelSegment {
    /**
     * Confidence that the label is accurate. Range: [0, 1].
     */
    confidence?: number;
    /**
     * Video segment where a label was detected.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1beta2_VideoSegment;
  }
  /**
   * Config for SHOT_CHANGE_DETECTION.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_ShotChangeDetectionConfig {
    /**
     * Model to use for shot change detection. Supported values:
     * &quot;builtin/stable&quot; (the default if unset) and
     * &quot;builtin/latest&quot;.
     */
    model?: string;
  }
  /**
   * Annotation progress for a single video.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_VideoAnnotationProgress {
    /**
     * Video file location in [Google Cloud
     * Storage](https://cloud.google.com/storage/).
     */
    inputUri?: string;
    /**
     * Approximate percentage processed thus far. Guaranteed to be 100 when
     * fully processed.
     */
    progressPercent?: number;
    /**
     * Time when the request was received.
     */
    startTime?: string;
    /**
     * Time of the most recent update.
     */
    updateTime?: string;
  }
  /**
   * Annotation results for a single video.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_VideoAnnotationResults {
    /**
     * If set, indicates an error. Note that for a single `AnnotateVideoRequest`
     * some videos may succeed and some may fail.
     */
    error?: Schema$GoogleRpc_Status;
    /**
     * Explicit content annotation.
     */
    explicitAnnotation?:
        Schema$GoogleCloudVideointelligenceV1beta2_ExplicitContentAnnotation;
    /**
     * Label annotations on frame level. There is exactly one element for each
     * unique label.
     */
    frameLabelAnnotations?:
        Schema$GoogleCloudVideointelligenceV1beta2_LabelAnnotation[];
    /**
     * Video file location in [Google Cloud
     * Storage](https://cloud.google.com/storage/).
     */
    inputUri?: string;
    /**
     * Label annotations on video level or user specified segment level. There
     * is exactly one element for each unique label.
     */
    segmentLabelAnnotations?:
        Schema$GoogleCloudVideointelligenceV1beta2_LabelAnnotation[];
    /**
     * Shot annotations. Each shot is represented as a video segment.
     */
    shotAnnotations?: Schema$GoogleCloudVideointelligenceV1beta2_VideoSegment[];
    /**
     * Label annotations on shot level. There is exactly one element for each
     * unique label.
     */
    shotLabelAnnotations?:
        Schema$GoogleCloudVideointelligenceV1beta2_LabelAnnotation[];
  }
  /**
   * Video context and/or feature-specific parameters.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_VideoContext {
    /**
     * Config for EXPLICIT_CONTENT_DETECTION.
     */
    explicitContentDetectionConfig?:
        Schema$GoogleCloudVideointelligenceV1beta2_ExplicitContentDetectionConfig;
    /**
     * Config for LABEL_DETECTION.
     */
    labelDetectionConfig?:
        Schema$GoogleCloudVideointelligenceV1beta2_LabelDetectionConfig;
    /**
     * Video segments to annotate. The segments may overlap and are not required
     * to be contiguous or span the whole video. If unspecified, each video is
     * treated as a single segment.
     */
    segments?: Schema$GoogleCloudVideointelligenceV1beta2_VideoSegment[];
    /**
     * Config for SHOT_CHANGE_DETECTION.
     */
    shotChangeDetectionConfig?:
        Schema$GoogleCloudVideointelligenceV1beta2_ShotChangeDetectionConfig;
  }
  /**
   * Video segment.
   */
  export interface Schema$GoogleCloudVideointelligenceV1beta2_VideoSegment {
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the
     * end of the segment (inclusive).
     */
    endTimeOffset?: string;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the
     * start of the segment (inclusive).
     */
    startTimeOffset?: string;
  }
  /**
   * Video annotation progress. Included in the `metadata` field of the
   * `Operation` returned by the `GetOperation` call of the
   * `google::longrunning::Operations` service.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_AnnotateVideoProgress {
    /**
     * Progress metadata for all videos specified in `AnnotateVideoRequest`.
     */
    annotationProgress?:
        Schema$GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationProgress[];
  }
  /**
   * Video annotation response. Included in the `response` field of the
   * `Operation` returned by the `GetOperation` call of the
   * `google::longrunning::Operations` service.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_AnnotateVideoResponse {
    /**
     * Annotation results for all videos specified in `AnnotateVideoRequest`.
     */
    annotationResults?:
        Schema$GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationResults[];
  }
  /**
   * Detected entity from video analysis.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_Entity {
    /**
     * Textual description, e.g. `Fixed-gear bicycle`.
     */
    description?: string;
    /**
     * Opaque entity ID. Some IDs may be available in [Google Knowledge Graph
     * Search API](https://developers.google.com/knowledge-graph/).
     */
    entityId?: string;
    /**
     * Language code for `description` in BCP-47 format.
     */
    languageCode?: string;
  }
  /**
   * Explicit content annotation (based on per-frame visual signals only). If no
   * explicit content has been detected in a frame, no annotations are present
   * for that frame.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_ExplicitContentAnnotation {
    /**
     * All video frames where explicit content was detected.
     */
    frames?:
        Schema$GoogleCloudVideointelligenceV1p1beta1_ExplicitContentFrame[];
  }
  /**
   * Video frame level annotation results for explicit content.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_ExplicitContentFrame {
    /**
     * Likelihood of the pornography content..
     */
    pornographyLikelihood?: string;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the
     * video frame for this location.
     */
    timeOffset?: string;
  }
  /**
   * Label annotation.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation {
    /**
     * Common categories for the detected entity. E.g. when the label is
     * `Terrier` the category is likely `dog`. And in some cases there might be
     * more than one categories e.g. `Terrier` could also be a `pet`.
     */
    categoryEntities?: Schema$GoogleCloudVideointelligenceV1p1beta1_Entity[];
    /**
     * Detected entity.
     */
    entity?: Schema$GoogleCloudVideointelligenceV1p1beta1_Entity;
    /**
     * All video frames where a label was detected.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1p1beta1_LabelFrame[];
    /**
     * All video segments where a label was detected.
     */
    segments?: Schema$GoogleCloudVideointelligenceV1p1beta1_LabelSegment[];
  }
  /**
   * Video frame level annotation results for label detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_LabelFrame {
    /**
     * Confidence that the label is accurate. Range: [0, 1].
     */
    confidence?: number;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the
     * video frame for this location.
     */
    timeOffset?: string;
  }
  /**
   * Video segment level annotation results for label detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_LabelSegment {
    /**
     * Confidence that the label is accurate. Range: [0, 1].
     */
    confidence?: number;
    /**
     * Video segment where a label was detected.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1p1beta1_VideoSegment;
  }
  /**
   * Alternative hypotheses (a.k.a. n-best list).
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_SpeechRecognitionAlternative {
    /**
     * The confidence estimate between 0.0 and 1.0. A higher number indicates an
     * estimated greater likelihood that the recognized words are correct. This
     * field is typically provided only for the top hypothesis, and only for
     * `is_final=true` results. Clients should not rely on the `confidence`
     * field as it is not guaranteed to be accurate or consistent. The default
     * of 0.0 is a sentinel value indicating `confidence` was not set.
     */
    confidence?: number;
    /**
     * Transcript text representing the words that the user spoke.
     */
    transcript?: string;
    /**
     * A list of word-specific information for each recognized word.
     */
    words?: Schema$GoogleCloudVideointelligenceV1p1beta1_WordInfo[];
  }
  /**
   * A speech recognition result corresponding to a portion of the audio.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_SpeechTranscription {
    /**
     * May contain one or more recognition hypotheses (up to the maximum
     * specified in `max_alternatives`).  These alternatives are ordered in
     * terms of accuracy, with the top (first) alternative being the most
     * probable, as ranked by the recognizer.
     */
    alternatives?:
        Schema$GoogleCloudVideointelligenceV1p1beta1_SpeechRecognitionAlternative[];
  }
  /**
   * Annotation progress for a single video.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationProgress {
    /**
     * Video file location in [Google Cloud
     * Storage](https://cloud.google.com/storage/).
     */
    inputUri?: string;
    /**
     * Approximate percentage processed thus far. Guaranteed to be 100 when
     * fully processed.
     */
    progressPercent?: number;
    /**
     * Time when the request was received.
     */
    startTime?: string;
    /**
     * Time of the most recent update.
     */
    updateTime?: string;
  }
  /**
   * Annotation results for a single video.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationResults {
    /**
     * If set, indicates an error. Note that for a single `AnnotateVideoRequest`
     * some videos may succeed and some may fail.
     */
    error?: Schema$GoogleRpc_Status;
    /**
     * Explicit content annotation.
     */
    explicitAnnotation?:
        Schema$GoogleCloudVideointelligenceV1p1beta1_ExplicitContentAnnotation;
    /**
     * Label annotations on frame level. There is exactly one element for each
     * unique label.
     */
    frameLabelAnnotations?:
        Schema$GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation[];
    /**
     * Video file location in [Google Cloud
     * Storage](https://cloud.google.com/storage/).
     */
    inputUri?: string;
    /**
     * Label annotations on video level or user specified segment level. There
     * is exactly one element for each unique label.
     */
    segmentLabelAnnotations?:
        Schema$GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation[];
    /**
     * Shot annotations. Each shot is represented as a video segment.
     */
    shotAnnotations?:
        Schema$GoogleCloudVideointelligenceV1p1beta1_VideoSegment[];
    /**
     * Label annotations on shot level. There is exactly one element for each
     * unique label.
     */
    shotLabelAnnotations?:
        Schema$GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation[];
    /**
     * Speech transcription.
     */
    speechTranscriptions?:
        Schema$GoogleCloudVideointelligenceV1p1beta1_SpeechTranscription[];
  }
  /**
   * Video segment.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_VideoSegment {
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the
     * end of the segment (inclusive).
     */
    endTimeOffset?: string;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the
     * start of the segment (inclusive).
     */
    startTimeOffset?: string;
  }
  /**
   * Word-specific information for recognized words. Word information is only
   * included in the response when certain request parameters are set, such as
   * `enable_word_time_offsets`.
   */
  export interface Schema$GoogleCloudVideointelligenceV1p1beta1_WordInfo {
    /**
     * Time offset relative to the beginning of the audio, and corresponding to
     * the end of the spoken word. This field is only set if
     * `enable_word_time_offsets=true` and only in the top hypothesis. This is
     * an experimental feature and the accuracy of the time offset can vary.
     */
    endTime?: string;
    /**
     * Time offset relative to the beginning of the audio, and corresponding to
     * the start of the spoken word. This field is only set if
     * `enable_word_time_offsets=true` and only in the top hypothesis. This is
     * an experimental feature and the accuracy of the time offset can vary.
     */
    startTime?: string;
    /**
     * The word corresponding to this set of information.
     */
    word?: string;
  }
  /**
   * Video annotation progress. Included in the `metadata` field of the
   * `Operation` returned by the `GetOperation` call of the
   * `google::longrunning::Operations` service.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_AnnotateVideoProgress {
    /**
     * Progress metadata for all videos specified in `AnnotateVideoRequest`.
     */
    annotationProgress?:
        Schema$GoogleCloudVideointelligenceV1_VideoAnnotationProgress[];
  }
  /**
   * Video annotation response. Included in the `response` field of the
   * `Operation` returned by the `GetOperation` call of the
   * `google::longrunning::Operations` service.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_AnnotateVideoResponse {
    /**
     * Annotation results for all videos specified in `AnnotateVideoRequest`.
     */
    annotationResults?:
        Schema$GoogleCloudVideointelligenceV1_VideoAnnotationResults[];
  }
  /**
   * Detected entity from video analysis.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_Entity {
    /**
     * Textual description, e.g. `Fixed-gear bicycle`.
     */
    description?: string;
    /**
     * Opaque entity ID. Some IDs may be available in [Google Knowledge Graph
     * Search API](https://developers.google.com/knowledge-graph/).
     */
    entityId?: string;
    /**
     * Language code for `description` in BCP-47 format.
     */
    languageCode?: string;
  }
  /**
   * Explicit content annotation (based on per-frame visual signals only). If no
   * explicit content has been detected in a frame, no annotations are present
   * for that frame.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_ExplicitContentAnnotation {
    /**
     * All video frames where explicit content was detected.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1_ExplicitContentFrame[];
  }
  /**
   * Video frame level annotation results for explicit content.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_ExplicitContentFrame {
    /**
     * Likelihood of the pornography content..
     */
    pornographyLikelihood?: string;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the
     * video frame for this location.
     */
    timeOffset?: string;
  }
  /**
   * Label annotation.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_LabelAnnotation {
    /**
     * Common categories for the detected entity. E.g. when the label is
     * `Terrier` the category is likely `dog`. And in some cases there might be
     * more than one categories e.g. `Terrier` could also be a `pet`.
     */
    categoryEntities?: Schema$GoogleCloudVideointelligenceV1_Entity[];
    /**
     * Detected entity.
     */
    entity?: Schema$GoogleCloudVideointelligenceV1_Entity;
    /**
     * All video frames where a label was detected.
     */
    frames?: Schema$GoogleCloudVideointelligenceV1_LabelFrame[];
    /**
     * All video segments where a label was detected.
     */
    segments?: Schema$GoogleCloudVideointelligenceV1_LabelSegment[];
  }
  /**
   * Video frame level annotation results for label detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_LabelFrame {
    /**
     * Confidence that the label is accurate. Range: [0, 1].
     */
    confidence?: number;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the
     * video frame for this location.
     */
    timeOffset?: string;
  }
  /**
   * Video segment level annotation results for label detection.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_LabelSegment {
    /**
     * Confidence that the label is accurate. Range: [0, 1].
     */
    confidence?: number;
    /**
     * Video segment where a label was detected.
     */
    segment?: Schema$GoogleCloudVideointelligenceV1_VideoSegment;
  }
  /**
   * Annotation progress for a single video.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_VideoAnnotationProgress {
    /**
     * Video file location in [Google Cloud
     * Storage](https://cloud.google.com/storage/).
     */
    inputUri?: string;
    /**
     * Approximate percentage processed thus far. Guaranteed to be 100 when
     * fully processed.
     */
    progressPercent?: number;
    /**
     * Time when the request was received.
     */
    startTime?: string;
    /**
     * Time of the most recent update.
     */
    updateTime?: string;
  }
  /**
   * Annotation results for a single video.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_VideoAnnotationResults {
    /**
     * If set, indicates an error. Note that for a single `AnnotateVideoRequest`
     * some videos may succeed and some may fail.
     */
    error?: Schema$GoogleRpc_Status;
    /**
     * Explicit content annotation.
     */
    explicitAnnotation?:
        Schema$GoogleCloudVideointelligenceV1_ExplicitContentAnnotation;
    /**
     * Label annotations on frame level. There is exactly one element for each
     * unique label.
     */
    frameLabelAnnotations?:
        Schema$GoogleCloudVideointelligenceV1_LabelAnnotation[];
    /**
     * Video file location in [Google Cloud
     * Storage](https://cloud.google.com/storage/).
     */
    inputUri?: string;
    /**
     * Label annotations on video level or user specified segment level. There
     * is exactly one element for each unique label.
     */
    segmentLabelAnnotations?:
        Schema$GoogleCloudVideointelligenceV1_LabelAnnotation[];
    /**
     * Shot annotations. Each shot is represented as a video segment.
     */
    shotAnnotations?: Schema$GoogleCloudVideointelligenceV1_VideoSegment[];
    /**
     * Label annotations on shot level. There is exactly one element for each
     * unique label.
     */
    shotLabelAnnotations?:
        Schema$GoogleCloudVideointelligenceV1_LabelAnnotation[];
  }
  /**
   * Video segment.
   */
  export interface Schema$GoogleCloudVideointelligenceV1_VideoSegment {
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the
     * end of the segment (inclusive).
     */
    endTimeOffset?: string;
    /**
     * Time-offset, relative to the beginning of the video, corresponding to the
     * start of the segment (inclusive).
     */
    startTimeOffset?: string;
  }
  /**
   * This resource represents a long-running operation that is the result of a
   * network API call.
   */
  export interface Schema$GoogleLongrunning_Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If
     * `true`, the operation is completed, and either `error` or `response` is
     * available.
     */
    done?: boolean;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$GoogleRpc_Status;
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
  export interface Schema$GoogleRpc_Status {
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


  export class Resource$Videos {
    root: Videointelligence;
    constructor(root: Videointelligence) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * videointelligence.videos.annotate
     * @desc Performs asynchronous video annotation. Progress and results can be
     * retrieved through the `google.longrunning.Operations` interface.
     * `Operation.metadata` contains `AnnotateVideoProgress` (progress).
     * `Operation.response` contains `AnnotateVideoResponse` (results).
     * @alias videointelligence.videos.annotate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().GoogleCloudVideointelligenceV1beta2_AnnotateVideoRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    annotate(params?: Params$Resource$Videos$Annotate, options?: MethodOptions):
        AxiosPromise<Schema$GoogleLongrunning_Operation>;
    annotate(
        params: Params$Resource$Videos$Annotate,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunning_Operation>,
        callback: BodyResponseCallback<Schema$GoogleLongrunning_Operation>):
        void;
    annotate(
        params: Params$Resource$Videos$Annotate,
        callback: BodyResponseCallback<Schema$GoogleLongrunning_Operation>):
        void;
    annotate(callback:
                 BodyResponseCallback<Schema$GoogleLongrunning_Operation>):
        void;
    annotate(
        paramsOrCallback?: Params$Resource$Videos$Annotate|
        BodyResponseCallback<Schema$GoogleLongrunning_Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunning_Operation>,
        callback?: BodyResponseCallback<Schema$GoogleLongrunning_Operation>):
        void|AxiosPromise<Schema$GoogleLongrunning_Operation> {
      let params = (paramsOrCallback || {}) as Params$Resource$Videos$Annotate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Videos$Annotate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://videointelligence.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta2/videos:annotate')
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
        createAPIRequest<Schema$GoogleLongrunning_Operation>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleLongrunning_Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Videos$Annotate {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?:
        Schema$GoogleCloudVideointelligenceV1beta2_AnnotateVideoRequest;
  }
}
