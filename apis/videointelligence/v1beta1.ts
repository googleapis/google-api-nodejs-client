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

/* jshint maxlen: false */

import createAPIRequest from '../../lib/apirequest';

/**
 * Cloud Video Intelligence API
 *
 * Cloud Video Intelligence API.
 *
 * @example
 * const google = require('googleapis');
 * const videointelligence = google.videointelligence('v1beta1');
 *
 * @namespace videointelligence
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Videointelligence
 */
function Videointelligence(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.videos = {

    /**
     * videointelligence.videos.annotate
     *
     * @desc Performs asynchronous video annotation. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `AnnotateVideoProgress` (progress). `Operation.response` contains `AnnotateVideoResponse` (results).
     *
     * @alias videointelligence.videos.annotate
     * @memberOf! videointelligence(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {videointelligence(v1beta1).GoogleCloudVideointelligenceV1beta1_AnnotateVideoRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    annotate: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://videointelligence.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1beta1/videos:annotate').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * @typedef GoogleCloudVideointelligenceV1_AnnotateVideoProgress
 * @memberOf! videointelligence(v1beta1)
 * @type object
 * @property {videointelligence(v1beta1).GoogleCloudVideointelligenceV1_VideoAnnotationProgress[]} annotationProgress Progress metadata for all videos specified in `AnnotateVideoRequest`.
 */

/**
 * @typedef GoogleCloudVideointelligenceV1_AnnotateVideoResponse
 * @memberOf! videointelligence(v1beta1)
 * @type object
 * @property {videointelligence(v1beta1).GoogleCloudVideointelligenceV1_VideoAnnotationResults[]} annotationResults Annotation results for all videos specified in `AnnotateVideoRequest`.
 */

/**
 * @typedef GoogleCloudVideointelligenceV1_LabelAnnotation
 * @memberOf! videointelligence(v1beta1)
 * @type object
 * @property {string} description Textual description, e.g. `Fixed-gear bicycle`.
 * @property {string} languageCode Language code for `description` in BCP-47 format.
 * @property {videointelligence(v1beta1).GoogleCloudVideointelligenceV1_LabelLocation[]} locations Where the label was detected and with what confidence.
 */

/**
 * @typedef GoogleCloudVideointelligenceV1_LabelLocation
 * @memberOf! videointelligence(v1beta1)
 * @type object
* @property {number} confidence Confidence that the label is accurate. Range: [0, 1].
* @property {string} level Label level.
* @property {videointelligence(v1beta1).GoogleCloudVideointelligenceV1_VideoSegment} segment Video segment. Unset for video-level labels.
Set to a frame timestamp for frame-level labels.
Otherwise, corresponds to one of `AnnotateSpec.segments`
(if specified) or to shot boundaries (if requested).
*/

/**
 * @typedef GoogleCloudVideointelligenceV1_SafeSearchAnnotation
 * @memberOf! videointelligence(v1beta1)
 * @type object
* @property {string} adult Likelihood of adult content.
* @property {string} time Time-offset, relative to the beginning of the video,
corresponding to the video frame for this annotation.
*/

/**
 * @typedef GoogleCloudVideointelligenceV1_VideoAnnotationProgress
 * @memberOf! videointelligence(v1beta1)
 * @type object
* @property {string} inputUri Video file location in
[Google Cloud Storage](https://cloud.google.com/storage/).
* @property {integer} progressPercent Approximate percentage processed thus far.
Guaranteed to be 100 when fully processed.
* @property {string} startTime Time when the request was received.
* @property {string} updateTime Time of the most recent update.
*/

/**
 * @typedef GoogleCloudVideointelligenceV1_VideoAnnotationResults
 * @memberOf! videointelligence(v1beta1)
 * @type object
* @property {videointelligence(v1beta1).GoogleRpc_Status} error If set, indicates an error. Note that for a single `AnnotateVideoRequest`
some videos may succeed and some may fail.
* @property {string} inputUri Video file location in
[Google Cloud Storage](https://cloud.google.com/storage/).
* @property {videointelligence(v1beta1).GoogleCloudVideointelligenceV1_LabelAnnotation[]} labelAnnotations Label annotations. There is exactly one element for each unique label.
* @property {videointelligence(v1beta1).GoogleCloudVideointelligenceV1_SafeSearchAnnotation[]} safeSearchAnnotations Safe search annotations.
* @property {videointelligence(v1beta1).GoogleCloudVideointelligenceV1_VideoSegment[]} shotAnnotations Shot annotations. Each shot is represented as a video segment.
*/

/**
 * @typedef GoogleCloudVideointelligenceV1_VideoSegment
 * @memberOf! videointelligence(v1beta1)
 * @type object
* @property {string} endTime Time-offset, relative to the beginning of the video,
corresponding to the end of the segment (inclusive).
* @property {string} startTime Time-offset, relative to the beginning of the video,
corresponding to the start of the segment (inclusive).
*/

/**
 * @typedef GoogleCloudVideointelligenceV1beta1_AnnotateVideoProgress
 * @memberOf! videointelligence(v1beta1)
 * @type object
 * @property {videointelligence(v1beta1).GoogleCloudVideointelligenceV1beta1_VideoAnnotationProgress[]} annotationProgress Progress metadata for all videos specified in `AnnotateVideoRequest`.
 */

/**
 * @typedef GoogleCloudVideointelligenceV1beta1_AnnotateVideoRequest
 * @memberOf! videointelligence(v1beta1)
 * @type object
* @property {string[]} features Requested video annotation features.
* @property {string} inputContent The video data bytes. Encoding: base64. If unset, the input video(s)
should be specified via `input_uri`. If set, `input_uri` should be unset.
* @property {string} inputUri Input video location. Currently, only
[Google Cloud Storage](https://cloud.google.com/storage/) URIs are
supported, which must be specified in the following format:
`gs://bucket-id/object-id` (other URI formats return
google.rpc.Code.INVALID_ARGUMENT). For more information, see
[Request URIs](/storage/docs/reference-uris).
A video URI may include wildcards in `object-id`, and thus identify
multiple videos. Supported wildcards: &#39;*&#39; to match 0 or more characters;
&#39;?&#39; to match 1 character. If unset, the input video should be embedded
in the request as `input_content`. If set, `input_content` should be unset.
* @property {string} locationId Optional cloud region where annotation should take place. Supported cloud
regions: `us-east1`, `us-west1`, `europe-west1`, `asia-east1`. If no region
is specified, a region will be determined based on video file location.
* @property {string} outputUri Optional location where the output (in JSON format) should be stored.
Currently, only [Google Cloud Storage](https://cloud.google.com/storage/)
URIs are supported, which must be specified in the following format:
`gs://bucket-id/object-id` (other URI formats return
google.rpc.Code.INVALID_ARGUMENT). For more information, see
[Request URIs](/storage/docs/reference-uris).
* @property {videointelligence(v1beta1).GoogleCloudVideointelligenceV1beta1_VideoContext} videoContext Additional video context and/or feature-specific parameters.
*/

/**
 * @typedef GoogleCloudVideointelligenceV1beta1_AnnotateVideoResponse
 * @memberOf! videointelligence(v1beta1)
 * @type object
 * @property {videointelligence(v1beta1).GoogleCloudVideointelligenceV1beta1_VideoAnnotationResults[]} annotationResults Annotation results for all videos specified in `AnnotateVideoRequest`.
 */

/**
 * @typedef GoogleCloudVideointelligenceV1beta1_LabelAnnotation
 * @memberOf! videointelligence(v1beta1)
 * @type object
 * @property {string} description Textual description, e.g. `Fixed-gear bicycle`.
 * @property {string} languageCode Language code for `description` in BCP-47 format.
 * @property {videointelligence(v1beta1).GoogleCloudVideointelligenceV1beta1_LabelLocation[]} locations Where the label was detected and with what confidence.
 */

/**
 * @typedef GoogleCloudVideointelligenceV1beta1_LabelLocation
 * @memberOf! videointelligence(v1beta1)
 * @type object
* @property {number} confidence Confidence that the label is accurate. Range: [0, 1].
* @property {string} level Label level.
* @property {videointelligence(v1beta1).GoogleCloudVideointelligenceV1beta1_VideoSegment} segment Video segment. Set to [-1, -1] for video-level labels.
Set to [timestamp, timestamp] for frame-level labels.
Otherwise, corresponds to one of `AnnotateSpec.segments`
(if specified) or to shot boundaries (if requested).
*/

/**
 * @typedef GoogleCloudVideointelligenceV1beta1_SafeSearchAnnotation
 * @memberOf! videointelligence(v1beta1)
 * @type object
* @property {string} adult Likelihood of adult content.
* @property {string} medical Likelihood of medical content.
* @property {string} racy Likelihood of racy content.
* @property {string} spoof Likelihood that an obvious modification was made to the original
version to make it appear funny or offensive.
* @property {string} timeOffset Video time offset in microseconds.
* @property {string} violent Likelihood of violent content.
*/

/**
 * @typedef GoogleCloudVideointelligenceV1beta1_VideoAnnotationProgress
 * @memberOf! videointelligence(v1beta1)
 * @type object
* @property {string} inputUri Video file location in
[Google Cloud Storage](https://cloud.google.com/storage/).
* @property {integer} progressPercent Approximate percentage processed thus far.
Guaranteed to be 100 when fully processed.
* @property {string} startTime Time when the request was received.
* @property {string} updateTime Time of the most recent update.
*/

/**
 * @typedef GoogleCloudVideointelligenceV1beta1_VideoAnnotationResults
 * @memberOf! videointelligence(v1beta1)
 * @type object
* @property {videointelligence(v1beta1).GoogleRpc_Status} error If set, indicates an error. Note that for a single `AnnotateVideoRequest`
some videos may succeed and some may fail.
* @property {string} inputUri Video file location in
[Google Cloud Storage](https://cloud.google.com/storage/).
* @property {videointelligence(v1beta1).GoogleCloudVideointelligenceV1beta1_LabelAnnotation[]} labelAnnotations Label annotations. There is exactly one element for each unique label.
* @property {videointelligence(v1beta1).GoogleCloudVideointelligenceV1beta1_SafeSearchAnnotation[]} safeSearchAnnotations Safe search annotations.
* @property {videointelligence(v1beta1).GoogleCloudVideointelligenceV1beta1_VideoSegment[]} shotAnnotations Shot annotations. Each shot is represented as a video segment.
*/

/**
 * @typedef GoogleCloudVideointelligenceV1beta1_VideoContext
 * @memberOf! videointelligence(v1beta1)
 * @type object
* @property {string} labelDetectionMode If label detection has been requested, what labels should be detected
in addition to video-level labels or segment-level labels. If unspecified,
defaults to `SHOT_MODE`.
* @property {string} labelDetectionModel Model to use for label detection.
Supported values: &quot;latest&quot; and &quot;stable&quot; (the default).
* @property {string} safeSearchDetectionModel Model to use for safe search detection.
Supported values: &quot;latest&quot; and &quot;stable&quot; (the default).
* @property {videointelligence(v1beta1).GoogleCloudVideointelligenceV1beta1_VideoSegment[]} segments Video segments to annotate. The segments may overlap and are not required
to be contiguous or span the whole video. If unspecified, each video
is treated as a single segment.
* @property {string} shotChangeDetectionModel Model to use for shot change detection.
Supported values: &quot;latest&quot; and &quot;stable&quot; (the default).
* @property {boolean} stationaryCamera Whether the video has been shot from a stationary (i.e. non-moving) camera.
When set to true, might improve detection accuracy for moving objects.
*/

/**
 * @typedef GoogleCloudVideointelligenceV1beta1_VideoSegment
 * @memberOf! videointelligence(v1beta1)
 * @type object
 * @property {string} endTimeOffset End offset in microseconds (inclusive). Unset means 0.
 * @property {string} startTimeOffset Start offset in microseconds (inclusive). Unset means 0.
 */

/**
 * @typedef GoogleCloudVideointelligenceV1beta2_AnnotateVideoProgress
 * @memberOf! videointelligence(v1beta1)
 * @type object
 * @property {videointelligence(v1beta1).GoogleCloudVideointelligenceV1beta2_VideoAnnotationProgress[]} annotationProgress Progress metadata for all videos specified in `AnnotateVideoRequest`.
 */

/**
 * @typedef GoogleCloudVideointelligenceV1beta2_AnnotateVideoResponse
 * @memberOf! videointelligence(v1beta1)
 * @type object
 * @property {videointelligence(v1beta1).GoogleCloudVideointelligenceV1beta2_VideoAnnotationResults[]} annotationResults Annotation results for all videos specified in `AnnotateVideoRequest`.
 */

/**
 * @typedef GoogleCloudVideointelligenceV1beta2_Entity
 * @memberOf! videointelligence(v1beta1)
 * @type object
* @property {string} description Textual description, e.g. `Fixed-gear bicycle`.
* @property {string} entityId Opaque entity ID. Some IDs may be available in
[Google Knowledge Graph Search
API](https://developers.google.com/knowledge-graph/).
* @property {string} languageCode Language code for `description` in BCP-47 format.
*/

/**
 * @typedef GoogleCloudVideointelligenceV1beta2_ExplicitContentAnnotation
 * @memberOf! videointelligence(v1beta1)
 * @type object
 * @property {videointelligence(v1beta1).GoogleCloudVideointelligenceV1beta2_ExplicitContentFrame[]} frames All video frames where explicit content was detected.
 */

/**
 * @typedef GoogleCloudVideointelligenceV1beta2_ExplicitContentFrame
 * @memberOf! videointelligence(v1beta1)
 * @type object
* @property {string} pornographyLikelihood Likelihood of the pornography content..
* @property {string} timeOffset Time-offset, relative to the beginning of the video, corresponding to the
video frame for this location.
*/

/**
 * @typedef GoogleCloudVideointelligenceV1beta2_LabelAnnotation
 * @memberOf! videointelligence(v1beta1)
 * @type object
* @property {videointelligence(v1beta1).GoogleCloudVideointelligenceV1beta2_Entity[]} categoryEntities Common categories for the detected entity.
E.g. when the label is `Terrier` the category is likely `dog`. And in some
cases there might be more than one categories e.g. `Terrier` could also be
a `pet`.
* @property {videointelligence(v1beta1).GoogleCloudVideointelligenceV1beta2_Entity} entity Detected entity.
* @property {videointelligence(v1beta1).GoogleCloudVideointelligenceV1beta2_LabelFrame[]} frames All video frames where a label was detected.
* @property {videointelligence(v1beta1).GoogleCloudVideointelligenceV1beta2_LabelSegment[]} segments All video segments where a label was detected.
*/

/**
 * @typedef GoogleCloudVideointelligenceV1beta2_LabelFrame
 * @memberOf! videointelligence(v1beta1)
 * @type object
* @property {number} confidence Confidence that the label is accurate. Range: [0, 1].
* @property {string} timeOffset Time-offset, relative to the beginning of the video, corresponding to the
video frame for this location.
*/

/**
 * @typedef GoogleCloudVideointelligenceV1beta2_LabelSegment
 * @memberOf! videointelligence(v1beta1)
 * @type object
 * @property {number} confidence Confidence that the label is accurate. Range: [0, 1].
 * @property {videointelligence(v1beta1).GoogleCloudVideointelligenceV1beta2_VideoSegment} segment Video segment where a label was detected.
 */

/**
 * @typedef GoogleCloudVideointelligenceV1beta2_VideoAnnotationProgress
 * @memberOf! videointelligence(v1beta1)
 * @type object
* @property {string} inputUri Video file location in
[Google Cloud Storage](https://cloud.google.com/storage/).
* @property {integer} progressPercent Approximate percentage processed thus far.
Guaranteed to be 100 when fully processed.
* @property {string} startTime Time when the request was received.
* @property {string} updateTime Time of the most recent update.
*/

/**
 * @typedef GoogleCloudVideointelligenceV1beta2_VideoAnnotationResults
 * @memberOf! videointelligence(v1beta1)
 * @type object
* @property {videointelligence(v1beta1).GoogleRpc_Status} error If set, indicates an error. Note that for a single `AnnotateVideoRequest`
some videos may succeed and some may fail.
* @property {videointelligence(v1beta1).GoogleCloudVideointelligenceV1beta2_ExplicitContentAnnotation} explicitAnnotation Explicit content annotation.
* @property {videointelligence(v1beta1).GoogleCloudVideointelligenceV1beta2_LabelAnnotation[]} frameLabelAnnotations Label annotations on frame level.
There is exactly one element for each unique label.
* @property {string} inputUri Video file location in
[Google Cloud Storage](https://cloud.google.com/storage/).
* @property {videointelligence(v1beta1).GoogleCloudVideointelligenceV1beta2_LabelAnnotation[]} segmentLabelAnnotations Label annotations on video level or user specified segment level.
There is exactly one element for each unique label.
* @property {videointelligence(v1beta1).GoogleCloudVideointelligenceV1beta2_VideoSegment[]} shotAnnotations Shot annotations. Each shot is represented as a video segment.
* @property {videointelligence(v1beta1).GoogleCloudVideointelligenceV1beta2_LabelAnnotation[]} shotLabelAnnotations Label annotations on shot level.
There is exactly one element for each unique label.
*/

/**
 * @typedef GoogleCloudVideointelligenceV1beta2_VideoSegment
 * @memberOf! videointelligence(v1beta1)
 * @type object
* @property {string} endTimeOffset Time-offset, relative to the beginning of the video,
corresponding to the end of the segment (inclusive).
* @property {string} startTimeOffset Time-offset, relative to the beginning of the video,
corresponding to the start of the segment (inclusive).
*/

/**
 * @typedef GoogleLongrunning_Operation
 * @memberOf! videointelligence(v1beta1)
 * @type object
* @property {boolean} done If the value is `false`, it means the operation is still in progress.
If `true`, the operation is completed, and either `error` or `response` is
available.
* @property {videointelligence(v1beta1).GoogleRpc_Status} error The error result of the operation in case of failure or cancellation.
* @property {object} metadata Service-specific metadata associated with the operation.  It typically
contains progress information and common metadata such as create time.
Some services might not provide such metadata.  Any method that returns a
long-running operation should document the metadata type, if any.
* @property {string} name The server-assigned name, which is only unique within the same service that
originally returns it. If you use the default HTTP mapping, the
`name` should have the format of `operations/some/unique/name`.
* @property {object} response The normal response of the operation in case of success.  If the original
method returns no data on success, such as `Delete`, the response is
`google.protobuf.Empty`.  If the original method is standard
`Get`/`Create`/`Update`, the response should be the resource.  For other
methods, the response should have the type `XxxResponse`, where `Xxx`
is the original method name.  For example, if the original method name
is `TakeSnapshot()`, the inferred response type is
`TakeSnapshotResponse`.
*/

/**
 * @typedef GoogleRpc_Status
 * @memberOf! videointelligence(v1beta1)
 * @type object
* @property {integer} code The status code, which should be an enum value of google.rpc.Code.
* @property {object[]} details A list of messages that carry the error details.  There is a common set of
message types for APIs to use.
* @property {string} message A developer-facing error message, which should be in English. Any
user-facing error message should be localized and sent in the
google.rpc.Status.details field, or localized by the client.
*/
export = Videointelligence;
