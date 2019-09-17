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

export namespace vision_v1 {
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
   * Cloud Vision API
   *
   * Integrates Google Vision features, including image labeling, face, logo, and landmark detection, optical character recognition (OCR), and detection of explicit content, into applications.
   *
   * @example
   * const {google} = require('googleapis');
   * const vision = google.vision('v1');
   *
   * @namespace vision
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Vision
   */
  export class Vision {
    context: APIRequestContext;
    files: Resource$Files;
    images: Resource$Images;
    locations: Resource$Locations;
    operations: Resource$Operations;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.files = new Resource$Files(this.context);
      this.images = new Resource$Images(this.context);
      this.locations = new Resource$Locations(this.context);
      this.operations = new Resource$Operations(this.context);
      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * Request message for the `AddProductToProductSet` method.
   */
  export interface Schema$AddProductToProductSetRequest {
    /**
     * The resource name for the Product to be added to this ProductSet.  Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`
     */
    product?: string | null;
  }
  /**
   * A request to annotate one single file, e.g. a PDF, TIFF or GIF file.
   */
  export interface Schema$AnnotateFileRequest {
    /**
     * Required. Requested features.
     */
    features?: Schema$Feature[];
    /**
     * Additional context that may accompany the image(s) in the file.
     */
    imageContext?: Schema$ImageContext;
    /**
     * Required. Information about the input file.
     */
    inputConfig?: Schema$InputConfig;
    /**
     * Pages of the file to perform image annotation.  Pages starts from 1, we assume the first page of the file is page 1. At most 5 pages are supported per request. Pages can be negative.  Page 1 means the first page. Page 2 means the second page. Page -1 means the last page. Page -2 means the second to the last page.  If the file is GIF instead of PDF or TIFF, page refers to GIF frames.  If this field is empty, by default the service performs image annotation for the first 5 pages of the file.
     */
    pages?: number[] | null;
  }
  /**
   * Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.
   */
  export interface Schema$AnnotateFileResponse {
    /**
     * If set, represents the error message for the failed request. The `responses` field will not be set in this case.
     */
    error?: Schema$Status;
    /**
     * Information about the file for which this response is generated.
     */
    inputConfig?: Schema$InputConfig;
    /**
     * Individual responses to images found within the file. This field will be empty if the `error` field is set.
     */
    responses?: Schema$AnnotateImageResponse[];
    /**
     * This field gives the total number of pages in the file.
     */
    totalPages?: number | null;
  }
  /**
   * Request for performing Google Cloud Vision API tasks over a user-provided image, with user-requested features, and with context information.
   */
  export interface Schema$AnnotateImageRequest {
    /**
     * Requested features.
     */
    features?: Schema$Feature[];
    /**
     * The image to be processed.
     */
    image?: Schema$Image;
    /**
     * Additional context that may accompany the image.
     */
    imageContext?: Schema$ImageContext;
  }
  /**
   * Response to an image annotation request.
   */
  export interface Schema$AnnotateImageResponse {
    /**
     * If present, contextual information is needed to understand where this image comes from.
     */
    context?: Schema$ImageAnnotationContext;
    /**
     * If present, crop hints have completed successfully.
     */
    cropHintsAnnotation?: Schema$CropHintsAnnotation;
    /**
     * If set, represents the error message for the operation. Note that filled-in image annotations are guaranteed to be correct, even when `error` is set.
     */
    error?: Schema$Status;
    /**
     * If present, face detection has completed successfully.
     */
    faceAnnotations?: Schema$FaceAnnotation[];
    /**
     * If present, text (OCR) detection or document (OCR) text detection has completed successfully. This annotation provides the structural hierarchy for the OCR detected text.
     */
    fullTextAnnotation?: Schema$TextAnnotation;
    /**
     * If present, image properties were extracted successfully.
     */
    imagePropertiesAnnotation?: Schema$ImageProperties;
    /**
     * If present, label detection has completed successfully.
     */
    labelAnnotations?: Schema$EntityAnnotation[];
    /**
     * If present, landmark detection has completed successfully.
     */
    landmarkAnnotations?: Schema$EntityAnnotation[];
    /**
     * If present, localized object detection has completed successfully. This will be sorted descending by confidence score.
     */
    localizedObjectAnnotations?: Schema$LocalizedObjectAnnotation[];
    /**
     * If present, logo detection has completed successfully.
     */
    logoAnnotations?: Schema$EntityAnnotation[];
    /**
     * If present, product search has completed successfully.
     */
    productSearchResults?: Schema$ProductSearchResults;
    /**
     * If present, safe-search annotation has completed successfully.
     */
    safeSearchAnnotation?: Schema$SafeSearchAnnotation;
    /**
     * If present, text (OCR) detection has completed successfully.
     */
    textAnnotations?: Schema$EntityAnnotation[];
    /**
     * If present, web detection has completed successfully.
     */
    webDetection?: Schema$WebDetection;
  }
  /**
   * An offline file annotation request.
   */
  export interface Schema$AsyncAnnotateFileRequest {
    /**
     * Required. Requested features.
     */
    features?: Schema$Feature[];
    /**
     * Additional context that may accompany the image(s) in the file.
     */
    imageContext?: Schema$ImageContext;
    /**
     * Required. Information about the input file.
     */
    inputConfig?: Schema$InputConfig;
    /**
     * Required. The desired output location and metadata (e.g. format).
     */
    outputConfig?: Schema$OutputConfig;
  }
  /**
   * The response for a single offline file annotation request.
   */
  export interface Schema$AsyncAnnotateFileResponse {
    /**
     * The output location and metadata from AsyncAnnotateFileRequest.
     */
    outputConfig?: Schema$OutputConfig;
  }
  /**
   * Multiple async file annotation requests are batched into a single service call.
   */
  export interface Schema$AsyncBatchAnnotateFilesRequest {
    /**
     * Optional. Target project and location to make a call.  Format: `projects/{project-id}/locations/{location-id}`.  If no parent is specified, a region will be chosen automatically.  Supported location-ids:     `us`: USA country only,     `asia`: East asia areas, like Japan, Taiwan,     `eu`: The European Union.  Example: `projects/project-A/locations/eu`.
     */
    parent?: string | null;
    /**
     * Individual async file annotation requests for this batch.
     */
    requests?: Schema$AsyncAnnotateFileRequest[];
  }
  /**
   * Response to an async batch file annotation request.
   */
  export interface Schema$AsyncBatchAnnotateFilesResponse {
    /**
     * The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest.
     */
    responses?: Schema$AsyncAnnotateFileResponse[];
  }
  /**
   * Request for async image annotation for a list of images.
   */
  export interface Schema$AsyncBatchAnnotateImagesRequest {
    /**
     * Required. The desired output location and metadata (e.g. format).
     */
    outputConfig?: Schema$OutputConfig;
    /**
     * Optional. Target project and location to make a call.  Format: `projects/{project-id}/locations/{location-id}`.  If no parent is specified, a region will be chosen automatically.  Supported location-ids:     `us`: USA country only,     `asia`: East asia areas, like Japan, Taiwan,     `eu`: The European Union.  Example: `projects/project-A/locations/eu`.
     */
    parent?: string | null;
    /**
     * Individual image annotation requests for this batch.
     */
    requests?: Schema$AnnotateImageRequest[];
  }
  /**
   * Response to an async batch image annotation request.
   */
  export interface Schema$AsyncBatchAnnotateImagesResponse {
    /**
     * The output location and metadata from AsyncBatchAnnotateImagesRequest.
     */
    outputConfig?: Schema$OutputConfig;
  }
  /**
   * A list of requests to annotate files using the BatchAnnotateFiles API.
   */
  export interface Schema$BatchAnnotateFilesRequest {
    /**
     * Optional. Target project and location to make a call.  Format: `projects/{project-id}/locations/{location-id}`.  If no parent is specified, a region will be chosen automatically.  Supported location-ids:     `us`: USA country only,     `asia`: East asia areas, like Japan, Taiwan,     `eu`: The European Union.  Example: `projects/project-A/locations/eu`.
     */
    parent?: string | null;
    /**
     * The list of file annotation requests. Right now we support only one AnnotateFileRequest in BatchAnnotateFilesRequest.
     */
    requests?: Schema$AnnotateFileRequest[];
  }
  /**
   * A list of file annotation responses.
   */
  export interface Schema$BatchAnnotateFilesResponse {
    /**
     * The list of file annotation responses, each response corresponding to each AnnotateFileRequest in BatchAnnotateFilesRequest.
     */
    responses?: Schema$AnnotateFileResponse[];
  }
  /**
   * Multiple image annotation requests are batched into a single service call.
   */
  export interface Schema$BatchAnnotateImagesRequest {
    /**
     * Optional. Target project and location to make a call.  Format: `projects/{project-id}/locations/{location-id}`.  If no parent is specified, a region will be chosen automatically.  Supported location-ids:     `us`: USA country only,     `asia`: East asia areas, like Japan, Taiwan,     `eu`: The European Union.  Example: `projects/project-A/locations/eu`.
     */
    parent?: string | null;
    /**
     * Individual image annotation requests for this batch.
     */
    requests?: Schema$AnnotateImageRequest[];
  }
  /**
   * Response to a batch image annotation request.
   */
  export interface Schema$BatchAnnotateImagesResponse {
    /**
     * Individual responses to image annotation requests within the batch.
     */
    responses?: Schema$AnnotateImageResponse[];
  }
  /**
   * Metadata for the batch operations such as the current state.  This is included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.
   */
  export interface Schema$BatchOperationMetadata {
    /**
     * The time when the batch request is finished and google.longrunning.Operation.done is set to true.
     */
    endTime?: string | null;
    /**
     * The current state of the batch operation.
     */
    state?: string | null;
    /**
     * The time when the batch request was submitted to the server.
     */
    submitTime?: string | null;
  }
  /**
   * Logical element on the page.
   */
  export interface Schema$Block {
    /**
     * Detected block type (text, image etc) for this block.
     */
    blockType?: string | null;
    /**
     * The bounding box for the block. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the &#39;natural&#39; orientation. For example:  * when the text is horizontal it might look like:          0----1         |    |         3----2  * when it&#39;s rotated 180 degrees around the top-left corner it becomes:          2----3         |    |         1----0    and the vertex order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$BoundingPoly;
    /**
     * Confidence of the OCR results on the block. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * List of paragraphs in this block (if this blocks is of type text).
     */
    paragraphs?: Schema$Paragraph[];
    /**
     * Additional information detected for the block.
     */
    property?: Schema$TextProperty;
  }
  /**
   * A bounding polygon for the detected image annotation.
   */
  export interface Schema$BoundingPoly {
    /**
     * The bounding polygon normalized vertices.
     */
    normalizedVertices?: Schema$NormalizedVertex[];
    /**
     * The bounding polygon vertices.
     */
    vertices?: Schema$Vertex[];
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to/from color representations in various languages over compactness; for example, the fields of this representation can be trivially provided to the constructor of &quot;java.awt.Color&quot; in Java; it can also be trivially provided to UIColor&#39;s &quot;+colorWithRed:green:blue:alpha&quot; method in iOS; and, with just a little work, it can be easily formatted into a CSS &quot;rgba()&quot; string in JavaScript, as well.  Note: this proto does not carry information about the absolute color space that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB, DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color space.  Example (Java):       import com.google.type.Color;       // ...      public static java.awt.Color fromProto(Color protocolor) {        float alpha = protocolor.hasAlpha()            ? protocolor.getAlpha().getValue()            : 1.0;         return new java.awt.Color(            protocolor.getRed(),            protocolor.getGreen(),            protocolor.getBlue(),            alpha);      }       public static Color toProto(java.awt.Color color) {        float red = (float) color.getRed();        float green = (float) color.getGreen();        float blue = (float) color.getBlue();        float denominator = 255.0;        Color.Builder resultBuilder =            Color                .newBuilder()                .setRed(red / denominator)                .setGreen(green / denominator)                .setBlue(blue / denominator);        int alpha = color.getAlpha();        if (alpha != 255) {          result.setAlpha(              FloatValue                  .newBuilder()                  .setValue(((float) alpha) / denominator)                  .build());        }        return resultBuilder.build();      }      // ...  Example (iOS / Obj-C):       // ...      static UIColor* fromProto(Color* protocolor) {         float red = [protocolor red];         float green = [protocolor green];         float blue = [protocolor blue];         FloatValue* alpha_wrapper = [protocolor alpha];         float alpha = 1.0;         if (alpha_wrapper != nil) {           alpha = [alpha_wrapper value];         }         return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];      }       static Color* toProto(UIColor* color) {          CGFloat red, green, blue, alpha;          if (![color getRed:&amp;red green:&amp;green blue:&amp;blue alpha:&amp;alpha]) {            return nil;          }          Color* result = [[Color alloc] init];          [result setRed:red];          [result setGreen:green];          [result setBlue:blue];          if (alpha &lt;= 0.9999) {            [result setAlpha:floatWrapperWithValue(alpha)];          }          [result autorelease];          return result;     }     // ...   Example (JavaScript):      // ...      var protoToCssColor = function(rgb_color) {        var redFrac = rgb_color.red || 0.0;        var greenFrac = rgb_color.green || 0.0;        var blueFrac = rgb_color.blue || 0.0;        var red = Math.floor(redFrac * 255);        var green = Math.floor(greenFrac * 255);        var blue = Math.floor(blueFrac * 255);         if (!(&#39;alpha&#39; in rgb_color)) {           return rgbToCssColor_(red, green, blue);        }         var alphaFrac = rgb_color.alpha.value || 0.0;        var rgbParams = [red, green, blue].join(&#39;,&#39;);        return [&#39;rgba(&#39;, rgbParams, &#39;,&#39;, alphaFrac, &#39;)&#39;].join(&#39;&#39;);     };      var rgbToCssColor_ = function(red, green, blue) {       var rgbNumber = new Number((red &lt;&lt; 16) | (green &lt;&lt; 8) | blue);       var hexString = rgbNumber.toString(16);       var missingZeros = 6 - hexString.length;       var resultBuilder = [&#39;#&#39;];       for (var i = 0; i &lt; missingZeros; i++) {          resultBuilder.push(&#39;0&#39;);       }       resultBuilder.push(hexString);       return resultBuilder.join(&#39;&#39;);     };      // ...
   */
  export interface Schema$Color {
    /**
     * The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation:    pixel color = alpha * (this color) + (1.0 - alpha) * (background color)  This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is to be rendered as a solid color (as if the alpha value had been explicitly given with a value of 1.0).
     */
    alpha?: number | null;
    /**
     * The amount of blue in the color as a value in the interval [0, 1].
     */
    blue?: number | null;
    /**
     * The amount of green in the color as a value in the interval [0, 1].
     */
    green?: number | null;
    /**
     * The amount of red in the color as a value in the interval [0, 1].
     */
    red?: number | null;
  }
  /**
   * Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.
   */
  export interface Schema$ColorInfo {
    /**
     * RGB components of the color.
     */
    color?: Schema$Color;
    /**
     * The fraction of pixels the color occupies in the image. Value in range [0, 1].
     */
    pixelFraction?: number | null;
    /**
     * Image-specific score for this color. Value in range [0, 1].
     */
    score?: number | null;
  }
  /**
   * Single crop hint that is used to generate a new crop when serving an image.
   */
  export interface Schema$CropHint {
    /**
     * The bounding polygon for the crop region. The coordinates of the bounding box are in the original image&#39;s scale.
     */
    boundingPoly?: Schema$BoundingPoly;
    /**
     * Confidence of this being a salient region.  Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Fraction of importance of this salient region with respect to the original image.
     */
    importanceFraction?: number | null;
  }
  /**
   * Set of crop hints that are used to generate new crops when serving images.
   */
  export interface Schema$CropHintsAnnotation {
    /**
     * Crop hint results.
     */
    cropHints?: Schema$CropHint[];
  }
  /**
   * Parameters for crop hints annotation request.
   */
  export interface Schema$CropHintsParams {
    /**
     * Aspect ratios in floats, representing the ratio of the width to the height of the image. For example, if the desired aspect ratio is 4/3, the corresponding float value should be 1.33333.  If not specified, the best possible crop is returned. The number of provided aspect ratios is limited to a maximum of 16; any aspect ratios provided after the 16th are ignored.
     */
    aspectRatios?: number[] | null;
  }
  /**
   * Detected start or end of a structural component.
   */
  export interface Schema$DetectedBreak {
    /**
     * True if break prepends the element.
     */
    isPrefix?: boolean | null;
    /**
     * Detected break type.
     */
    type?: string | null;
  }
  /**
   * Detected language for a structural component.
   */
  export interface Schema$DetectedLanguage {
    /**
     * Confidence of detected language. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * The BCP-47 language code, such as &quot;en-US&quot; or &quot;sr-Latn&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string | null;
  }
  /**
   * Set of dominant colors and their corresponding scores.
   */
  export interface Schema$DominantColorsAnnotation {
    /**
     * RGB color values with their score and pixel fraction.
     */
    colors?: Schema$ColorInfo[];
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * Set of detected entity features.
   */
  export interface Schema$EntityAnnotation {
    /**
     * Image region to which this entity belongs. Not produced for `LABEL_DETECTION` features.
     */
    boundingPoly?: Schema$BoundingPoly;
    /**
     * **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the &quot;Eiffel Tower&quot; entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Entity textual description, expressed in its `locale` language.
     */
    description?: string | null;
    /**
     * The language code for the locale in which the entity textual `description` is expressed.
     */
    locale?: string | null;
    /**
     * The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks.
     */
    locations?: Schema$LocationInfo[];
    /**
     * Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).
     */
    mid?: string | null;
    /**
     * Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.
     */
    properties?: Schema$Property[];
    /**
     * Overall score of the result. Range [0, 1].
     */
    score?: number | null;
    /**
     * The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of &quot;tower&quot; is likely higher to an image containing the detected &quot;Eiffel Tower&quot; than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1].
     */
    topicality?: number | null;
  }
  /**
   * A face annotation object contains the results of face detection.
   */
  export interface Schema$FaceAnnotation {
    /**
     * Anger likelihood.
     */
    angerLikelihood?: string | null;
    /**
     * Blurred likelihood.
     */
    blurredLikelihood?: string | null;
    /**
     * The bounding polygon around the face. The coordinates of the bounding box are in the original image&#39;s scale. The bounding box is computed to &quot;frame&quot; the face in accordance with human expectations. It is based on the landmarker results. Note that one or more x and/or y coordinates may not be generated in the `BoundingPoly` (the polygon will be unbounded) if only a partial face appears in the image to be annotated.
     */
    boundingPoly?: Schema$BoundingPoly;
    /**
     * Detection confidence. Range [0, 1].
     */
    detectionConfidence?: number | null;
    /**
     * The `fd_bounding_poly` bounding polygon is tighter than the `boundingPoly`, and encloses only the skin part of the face. Typically, it is used to eliminate the face from any image analysis that detects the &quot;amount of skin&quot; visible in an image. It is not based on the landmarker results, only on the initial face detection, hence the &lt;code&gt;fd&lt;/code&gt; (face detection) prefix.
     */
    fdBoundingPoly?: Schema$BoundingPoly;
    /**
     * Headwear likelihood.
     */
    headwearLikelihood?: string | null;
    /**
     * Joy likelihood.
     */
    joyLikelihood?: string | null;
    /**
     * Face landmarking confidence. Range [0, 1].
     */
    landmarkingConfidence?: number | null;
    /**
     * Detected face landmarks.
     */
    landmarks?: Schema$Landmark[];
    /**
     * Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180].
     */
    panAngle?: number | null;
    /**
     * Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180].
     */
    rollAngle?: number | null;
    /**
     * Sorrow likelihood.
     */
    sorrowLikelihood?: string | null;
    /**
     * Surprise likelihood.
     */
    surpriseLikelihood?: string | null;
    /**
     * Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image&#39;s horizontal plane. Range [-180,180].
     */
    tiltAngle?: number | null;
    /**
     * Under-exposed likelihood.
     */
    underExposedLikelihood?: string | null;
  }
  /**
   * The type of Google Cloud Vision API detection to perform, and the maximum number of results to return for that type. Multiple `Feature` objects can be specified in the `features` list.
   */
  export interface Schema$Feature {
    /**
     * Maximum number of results of this type. Does not apply to `TEXT_DETECTION`, `DOCUMENT_TEXT_DETECTION`, or `CROP_HINTS`.
     */
    maxResults?: number | null;
    /**
     * Model to use for the feature. Supported values: &quot;builtin/stable&quot; (the default if unset) and &quot;builtin/latest&quot;.
     */
    model?: string | null;
    /**
     * The feature type.
     */
    type?: string | null;
  }
  /**
   * The Google Cloud Storage location where the output will be written to.
   */
  export interface Schema$GcsDestination {
    /**
     * Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide.  Examples:  *    File Prefix: gs://bucket-name/here/filenameprefix   The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with &quot;filenameprefix&quot;.  *    Directory Prefix: gs://bucket-name/some/location/   The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified.  If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files.
     */
    uri?: string | null;
  }
  /**
   * The Google Cloud Storage location where the input will be read from.
   */
  export interface Schema$GcsSource {
    /**
     * Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported.
     */
    uri?: string | null;
  }
  /**
   * Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1AnnotateFileResponse {
    /**
     * If set, represents the error message for the failed request. The `responses` field will not be set in this case.
     */
    error?: Schema$Status;
    /**
     * Information about the file for which this response is generated.
     */
    inputConfig?: Schema$GoogleCloudVisionV1p1beta1InputConfig;
    /**
     * Individual responses to images found within the file. This field will be empty if the `error` field is set.
     */
    responses?: Schema$GoogleCloudVisionV1p1beta1AnnotateImageResponse[];
    /**
     * This field gives the total number of pages in the file.
     */
    totalPages?: number | null;
  }
  /**
   * Response to an image annotation request.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1AnnotateImageResponse {
    /**
     * If present, contextual information is needed to understand where this image comes from.
     */
    context?: Schema$GoogleCloudVisionV1p1beta1ImageAnnotationContext;
    /**
     * If present, crop hints have completed successfully.
     */
    cropHintsAnnotation?: Schema$GoogleCloudVisionV1p1beta1CropHintsAnnotation;
    /**
     * If set, represents the error message for the operation. Note that filled-in image annotations are guaranteed to be correct, even when `error` is set.
     */
    error?: Schema$Status;
    /**
     * If present, face detection has completed successfully.
     */
    faceAnnotations?: Schema$GoogleCloudVisionV1p1beta1FaceAnnotation[];
    /**
     * If present, text (OCR) detection or document (OCR) text detection has completed successfully. This annotation provides the structural hierarchy for the OCR detected text.
     */
    fullTextAnnotation?: Schema$GoogleCloudVisionV1p1beta1TextAnnotation;
    /**
     * If present, image properties were extracted successfully.
     */
    imagePropertiesAnnotation?: Schema$GoogleCloudVisionV1p1beta1ImageProperties;
    /**
     * If present, label detection has completed successfully.
     */
    labelAnnotations?: Schema$GoogleCloudVisionV1p1beta1EntityAnnotation[];
    /**
     * If present, landmark detection has completed successfully.
     */
    landmarkAnnotations?: Schema$GoogleCloudVisionV1p1beta1EntityAnnotation[];
    /**
     * If present, localized object detection has completed successfully. This will be sorted descending by confidence score.
     */
    localizedObjectAnnotations?: Schema$GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation[];
    /**
     * If present, logo detection has completed successfully.
     */
    logoAnnotations?: Schema$GoogleCloudVisionV1p1beta1EntityAnnotation[];
    /**
     * If present, product search has completed successfully.
     */
    productSearchResults?: Schema$GoogleCloudVisionV1p1beta1ProductSearchResults;
    /**
     * If present, safe-search annotation has completed successfully.
     */
    safeSearchAnnotation?: Schema$GoogleCloudVisionV1p1beta1SafeSearchAnnotation;
    /**
     * If present, text (OCR) detection has completed successfully.
     */
    textAnnotations?: Schema$GoogleCloudVisionV1p1beta1EntityAnnotation[];
    /**
     * If present, web detection has completed successfully.
     */
    webDetection?: Schema$GoogleCloudVisionV1p1beta1WebDetection;
  }
  /**
   * The response for a single offline file annotation request.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1AsyncAnnotateFileResponse {
    /**
     * The output location and metadata from AsyncAnnotateFileRequest.
     */
    outputConfig?: Schema$GoogleCloudVisionV1p1beta1OutputConfig;
  }
  /**
   * Response to an async batch file annotation request.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesResponse {
    /**
     * The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest.
     */
    responses?: Schema$GoogleCloudVisionV1p1beta1AsyncAnnotateFileResponse[];
  }
  /**
   * Logical element on the page.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1Block {
    /**
     * Detected block type (text, image etc) for this block.
     */
    blockType?: string | null;
    /**
     * The bounding box for the block. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the &#39;natural&#39; orientation. For example:  * when the text is horizontal it might look like:          0----1         |    |         3----2  * when it&#39;s rotated 180 degrees around the top-left corner it becomes:          2----3         |    |         1----0    and the vertex order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$GoogleCloudVisionV1p1beta1BoundingPoly;
    /**
     * Confidence of the OCR results on the block. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * List of paragraphs in this block (if this blocks is of type text).
     */
    paragraphs?: Schema$GoogleCloudVisionV1p1beta1Paragraph[];
    /**
     * Additional information detected for the block.
     */
    property?: Schema$GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;
  }
  /**
   * A bounding polygon for the detected image annotation.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1BoundingPoly {
    /**
     * The bounding polygon normalized vertices.
     */
    normalizedVertices?: Schema$GoogleCloudVisionV1p1beta1NormalizedVertex[];
    /**
     * The bounding polygon vertices.
     */
    vertices?: Schema$GoogleCloudVisionV1p1beta1Vertex[];
  }
  /**
   * Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1ColorInfo {
    /**
     * RGB components of the color.
     */
    color?: Schema$Color;
    /**
     * The fraction of pixels the color occupies in the image. Value in range [0, 1].
     */
    pixelFraction?: number | null;
    /**
     * Image-specific score for this color. Value in range [0, 1].
     */
    score?: number | null;
  }
  /**
   * Single crop hint that is used to generate a new crop when serving an image.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1CropHint {
    /**
     * The bounding polygon for the crop region. The coordinates of the bounding box are in the original image&#39;s scale.
     */
    boundingPoly?: Schema$GoogleCloudVisionV1p1beta1BoundingPoly;
    /**
     * Confidence of this being a salient region.  Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Fraction of importance of this salient region with respect to the original image.
     */
    importanceFraction?: number | null;
  }
  /**
   * Set of crop hints that are used to generate new crops when serving images.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1CropHintsAnnotation {
    /**
     * Crop hint results.
     */
    cropHints?: Schema$GoogleCloudVisionV1p1beta1CropHint[];
  }
  /**
   * Set of dominant colors and their corresponding scores.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1DominantColorsAnnotation {
    /**
     * RGB color values with their score and pixel fraction.
     */
    colors?: Schema$GoogleCloudVisionV1p1beta1ColorInfo[];
  }
  /**
   * Set of detected entity features.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1EntityAnnotation {
    /**
     * Image region to which this entity belongs. Not produced for `LABEL_DETECTION` features.
     */
    boundingPoly?: Schema$GoogleCloudVisionV1p1beta1BoundingPoly;
    /**
     * **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the &quot;Eiffel Tower&quot; entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Entity textual description, expressed in its `locale` language.
     */
    description?: string | null;
    /**
     * The language code for the locale in which the entity textual `description` is expressed.
     */
    locale?: string | null;
    /**
     * The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks.
     */
    locations?: Schema$GoogleCloudVisionV1p1beta1LocationInfo[];
    /**
     * Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).
     */
    mid?: string | null;
    /**
     * Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.
     */
    properties?: Schema$GoogleCloudVisionV1p1beta1Property[];
    /**
     * Overall score of the result. Range [0, 1].
     */
    score?: number | null;
    /**
     * The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of &quot;tower&quot; is likely higher to an image containing the detected &quot;Eiffel Tower&quot; than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1].
     */
    topicality?: number | null;
  }
  /**
   * A face annotation object contains the results of face detection.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1FaceAnnotation {
    /**
     * Anger likelihood.
     */
    angerLikelihood?: string | null;
    /**
     * Blurred likelihood.
     */
    blurredLikelihood?: string | null;
    /**
     * The bounding polygon around the face. The coordinates of the bounding box are in the original image&#39;s scale. The bounding box is computed to &quot;frame&quot; the face in accordance with human expectations. It is based on the landmarker results. Note that one or more x and/or y coordinates may not be generated in the `BoundingPoly` (the polygon will be unbounded) if only a partial face appears in the image to be annotated.
     */
    boundingPoly?: Schema$GoogleCloudVisionV1p1beta1BoundingPoly;
    /**
     * Detection confidence. Range [0, 1].
     */
    detectionConfidence?: number | null;
    /**
     * The `fd_bounding_poly` bounding polygon is tighter than the `boundingPoly`, and encloses only the skin part of the face. Typically, it is used to eliminate the face from any image analysis that detects the &quot;amount of skin&quot; visible in an image. It is not based on the landmarker results, only on the initial face detection, hence the &lt;code&gt;fd&lt;/code&gt; (face detection) prefix.
     */
    fdBoundingPoly?: Schema$GoogleCloudVisionV1p1beta1BoundingPoly;
    /**
     * Headwear likelihood.
     */
    headwearLikelihood?: string | null;
    /**
     * Joy likelihood.
     */
    joyLikelihood?: string | null;
    /**
     * Face landmarking confidence. Range [0, 1].
     */
    landmarkingConfidence?: number | null;
    /**
     * Detected face landmarks.
     */
    landmarks?: Schema$GoogleCloudVisionV1p1beta1FaceAnnotationLandmark[];
    /**
     * Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180].
     */
    panAngle?: number | null;
    /**
     * Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180].
     */
    rollAngle?: number | null;
    /**
     * Sorrow likelihood.
     */
    sorrowLikelihood?: string | null;
    /**
     * Surprise likelihood.
     */
    surpriseLikelihood?: string | null;
    /**
     * Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image&#39;s horizontal plane. Range [-180,180].
     */
    tiltAngle?: number | null;
    /**
     * Under-exposed likelihood.
     */
    underExposedLikelihood?: string | null;
  }
  /**
   * A face-specific landmark (for example, a face feature).
   */
  export interface Schema$GoogleCloudVisionV1p1beta1FaceAnnotationLandmark {
    /**
     * Face landmark position.
     */
    position?: Schema$GoogleCloudVisionV1p1beta1Position;
    /**
     * Face landmark type.
     */
    type?: string | null;
  }
  /**
   * The Google Cloud Storage location where the output will be written to.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1GcsDestination {
    /**
     * Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide.  Examples:  *    File Prefix: gs://bucket-name/here/filenameprefix   The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with &quot;filenameprefix&quot;.  *    Directory Prefix: gs://bucket-name/some/location/   The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified.  If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files.
     */
    uri?: string | null;
  }
  /**
   * The Google Cloud Storage location where the input will be read from.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1GcsSource {
    /**
     * Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported.
     */
    uri?: string | null;
  }
  /**
   * If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1ImageAnnotationContext {
    /**
     * If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.
     */
    pageNumber?: number | null;
    /**
     * The URI of the file used to produce the image.
     */
    uri?: string | null;
  }
  /**
   * Stores image properties, such as dominant colors.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1ImageProperties {
    /**
     * If present, dominant colors completed successfully.
     */
    dominantColors?: Schema$GoogleCloudVisionV1p1beta1DominantColorsAnnotation;
  }
  /**
   * The desired input location and metadata.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1InputConfig {
    /**
     * File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64.  Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests.
     */
    content?: string | null;
    /**
     * The Google Cloud Storage location to read the input from.
     */
    gcsSource?: Schema$GoogleCloudVisionV1p1beta1GcsSource;
    /**
     * The type of the file. Currently only &quot;application/pdf&quot;, &quot;image/tiff&quot; and &quot;image/gif&quot; are supported. Wildcards are not supported.
     */
    mimeType?: string | null;
  }
  /**
   * Set of detected objects with bounding boxes.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation {
    /**
     * Image region to which this object belongs. This must be populated.
     */
    boundingPoly?: Schema$GoogleCloudVisionV1p1beta1BoundingPoly;
    /**
     * The BCP-47 language code, such as &quot;en-US&quot; or &quot;sr-Latn&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string | null;
    /**
     * Object ID that should align with EntityAnnotation mid.
     */
    mid?: string | null;
    /**
     * Object name, expressed in its `language_code` language.
     */
    name?: string | null;
    /**
     * Score of the result. Range [0, 1].
     */
    score?: number | null;
  }
  /**
   * Detected entity location information.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1LocationInfo {
    /**
     * lat/long location coordinates.
     */
    latLng?: Schema$LatLng;
  }
  /**
   * A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1NormalizedVertex {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate.
     */
    y?: number | null;
  }
  /**
   * Contains metadata for the BatchAnnotateImages operation.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1OperationMetadata {
    /**
     * The time when the batch request was received.
     */
    createTime?: string | null;
    /**
     * Current state of the batch operation.
     */
    state?: string | null;
    /**
     * The time when the operation result was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * The desired output location and metadata.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1OutputConfig {
    /**
     * The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20.  For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`.  Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations.
     */
    batchSize?: number | null;
    /**
     * The Google Cloud Storage location to write the output(s) to.
     */
    gcsDestination?: Schema$GoogleCloudVisionV1p1beta1GcsDestination;
  }
  /**
   * Detected page from OCR.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1Page {
    /**
     * List of blocks of text, images etc on this page.
     */
    blocks?: Schema$GoogleCloudVisionV1p1beta1Block[];
    /**
     * Confidence of the OCR results on the page. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
     */
    height?: number | null;
    /**
     * Additional information detected on the page.
     */
    property?: Schema$GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;
    /**
     * Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
     */
    width?: number | null;
  }
  /**
   * Structural unit of text representing a number of words in certain order.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1Paragraph {
    /**
     * The bounding box for the paragraph. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the &#39;natural&#39; orientation. For example:   * when the text is horizontal it might look like:      0----1      |    |      3----2   * when it&#39;s rotated 180 degrees around the top-left corner it becomes:      2----3      |    |      1----0   and the vertex order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$GoogleCloudVisionV1p1beta1BoundingPoly;
    /**
     * Confidence of the OCR results for the paragraph. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Additional information detected for the paragraph.
     */
    property?: Schema$GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;
    /**
     * List of all words in this paragraph.
     */
    words?: Schema$GoogleCloudVisionV1p1beta1Word[];
  }
  /**
   * A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1Position {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate.
     */
    y?: number | null;
    /**
     * Z coordinate (or depth).
     */
    z?: number | null;
  }
  /**
   * A Product contains ReferenceImages.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1Product {
    /**
     * User-provided metadata to be stored with this product. Must be at most 4096 characters long.
     */
    description?: string | null;
    /**
     * The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long.
     */
    displayName?: string | null;
    /**
     * The resource name of the product.  Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`.  This field is ignored when creating a product.
     */
    name?: string | null;
    /**
     * The category for the product identified by the reference image. This should be either &quot;homegoods-v2&quot;, &quot;apparel-v2&quot;, or &quot;toys-v2&quot;. The legacy categories &quot;homegoods&quot;, &quot;apparel&quot;, and &quot;toys&quot; are still supported, but these should not be used for new products.  This field is immutable.
     */
    productCategory?: string | null;
    /**
     * Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels.  Note that integer values can be provided as strings, e.g. &quot;1199&quot;. Only strings with integer values can match a range-based restriction which is to be supported soon.  Multiple values can be assigned to the same key. One product may have up to 500 product_labels.  Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet.
     */
    productLabels?: Schema$GoogleCloudVisionV1p1beta1ProductKeyValue[];
  }
  /**
   * A product label represented as a key-value pair.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1ProductKeyValue {
    /**
     * The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.
     */
    key?: string | null;
    /**
     * The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.
     */
    value?: string | null;
  }
  /**
   * Results for a product search request.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1ProductSearchResults {
    /**
     * Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results.
     */
    indexTime?: string | null;
    /**
     * List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results.
     */
    productGroupedResults?: Schema$GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult[];
    /**
     * List of results, one for each product match.
     */
    results?: Schema$GoogleCloudVisionV1p1beta1ProductSearchResultsResult[];
  }
  /**
   * Information about the products similar to a single product in a query image.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult {
    /**
     * The bounding polygon around the product detected in the query image.
     */
    boundingPoly?: Schema$GoogleCloudVisionV1p1beta1BoundingPoly;
    /**
     * List of generic predictions for the object in the bounding box.
     */
    objectAnnotations?: Schema$GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation[];
    /**
     * List of results, one for each product match.
     */
    results?: Schema$GoogleCloudVisionV1p1beta1ProductSearchResultsResult[];
  }
  /**
   * Prediction for what the object in the bounding box is.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation {
    /**
     * The BCP-47 language code, such as &quot;en-US&quot; or &quot;sr-Latn&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string | null;
    /**
     * Object ID that should align with EntityAnnotation mid.
     */
    mid?: string | null;
    /**
     * Object name, expressed in its `language_code` language.
     */
    name?: string | null;
    /**
     * Score of the result. Range [0, 1].
     */
    score?: number | null;
  }
  /**
   * Information about a product.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1ProductSearchResultsResult {
    /**
     * The resource name of the image from the product that is the closest match to the query.
     */
    image?: string | null;
    /**
     * The Product.
     */
    product?: Schema$GoogleCloudVisionV1p1beta1Product;
    /**
     * A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).
     */
    score?: number | null;
  }
  /**
   * A `Property` consists of a user-supplied name/value pair.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1Property {
    /**
     * Name of the property.
     */
    name?: string | null;
    /**
     * Value of numeric properties.
     */
    uint64Value?: string | null;
    /**
     * Value of the property.
     */
    value?: string | null;
  }
  /**
   * Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).
   */
  export interface Schema$GoogleCloudVisionV1p1beta1SafeSearchAnnotation {
    /**
     * Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities.
     */
    adult?: string | null;
    /**
     * Likelihood that this is a medical image.
     */
    medical?: string | null;
    /**
     * Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas.
     */
    racy?: string | null;
    /**
     * Spoof likelihood. The likelihood that an modification was made to the image&#39;s canonical version to make it appear funny or offensive.
     */
    spoof?: string | null;
    /**
     * Likelihood that this image contains violent content.
     */
    violence?: string | null;
  }
  /**
   * A single symbol representation.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1Symbol {
    /**
     * The bounding box for the symbol. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the &#39;natural&#39; orientation. For example:   * when the text is horizontal it might look like:      0----1      |    |      3----2   * when it&#39;s rotated 180 degrees around the top-left corner it becomes:      2----3      |    |      1----0   and the vertex order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$GoogleCloudVisionV1p1beta1BoundingPoly;
    /**
     * Confidence of the OCR results for the symbol. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Additional information detected for the symbol.
     */
    property?: Schema$GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;
    /**
     * The actual UTF-8 representation of the symbol.
     */
    text?: string | null;
  }
  /**
   * TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this:     TextAnnotation -&gt; Page -&gt; Block -&gt; Paragraph -&gt; Word -&gt; Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1TextAnnotation {
    /**
     * List of pages detected by OCR.
     */
    pages?: Schema$GoogleCloudVisionV1p1beta1Page[];
    /**
     * UTF-8 text detected on the pages.
     */
    text?: string | null;
  }
  /**
   * Detected start or end of a structural component.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak {
    /**
     * True if break prepends the element.
     */
    isPrefix?: boolean | null;
    /**
     * Detected break type.
     */
    type?: string | null;
  }
  /**
   * Detected language for a structural component.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage {
    /**
     * Confidence of detected language. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * The BCP-47 language code, such as &quot;en-US&quot; or &quot;sr-Latn&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string | null;
  }
  /**
   * Additional information detected on the structural component.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1TextAnnotationTextProperty {
    /**
     * Detected start or end of a text segment.
     */
    detectedBreak?: Schema$GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak;
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage[];
  }
  /**
   * A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1Vertex {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate.
     */
    y?: number | null;
  }
  /**
   * Relevant information for the image from the Internet.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1WebDetection {
    /**
     * The service&#39;s best guess as to the topic of the request image. Inferred from similar images on the open web.
     */
    bestGuessLabels?: Schema$GoogleCloudVisionV1p1beta1WebDetectionWebLabel[];
    /**
     * Fully matching images from the Internet. Can include resized copies of the query image.
     */
    fullMatchingImages?: Schema$GoogleCloudVisionV1p1beta1WebDetectionWebImage[];
    /**
     * Web pages containing the matching images from the Internet.
     */
    pagesWithMatchingImages?: Schema$GoogleCloudVisionV1p1beta1WebDetectionWebPage[];
    /**
     * Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.
     */
    partialMatchingImages?: Schema$GoogleCloudVisionV1p1beta1WebDetectionWebImage[];
    /**
     * The visually similar image results.
     */
    visuallySimilarImages?: Schema$GoogleCloudVisionV1p1beta1WebDetectionWebImage[];
    /**
     * Deduced entities from similar images on the Internet.
     */
    webEntities?: Schema$GoogleCloudVisionV1p1beta1WebDetectionWebEntity[];
  }
  /**
   * Entity deduced from similar images on the Internet.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1WebDetectionWebEntity {
    /**
     * Canonical description of the entity, in English.
     */
    description?: string | null;
    /**
     * Opaque entity ID.
     */
    entityId?: string | null;
    /**
     * Overall relevancy score for the entity. Not normalized and not comparable across different image queries.
     */
    score?: number | null;
  }
  /**
   * Metadata for online images.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1WebDetectionWebImage {
    /**
     * (Deprecated) Overall relevancy score for the image.
     */
    score?: number | null;
    /**
     * The result image URL.
     */
    url?: string | null;
  }
  /**
   * Label to provide extra metadata for the web detection.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1WebDetectionWebLabel {
    /**
     * Label for extra metadata.
     */
    label?: string | null;
    /**
     * The BCP-47 language code for `label`, such as &quot;en-US&quot; or &quot;sr-Latn&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string | null;
  }
  /**
   * Metadata for web pages.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1WebDetectionWebPage {
    /**
     * Fully matching images on the page. Can include resized copies of the query image.
     */
    fullMatchingImages?: Schema$GoogleCloudVisionV1p1beta1WebDetectionWebImage[];
    /**
     * Title for the web page, may contain HTML markups.
     */
    pageTitle?: string | null;
    /**
     * Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.
     */
    partialMatchingImages?: Schema$GoogleCloudVisionV1p1beta1WebDetectionWebImage[];
    /**
     * (Deprecated) Overall relevancy score for the web page.
     */
    score?: number | null;
    /**
     * The result web page URL.
     */
    url?: string | null;
  }
  /**
   * A word representation.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1Word {
    /**
     * The bounding box for the word. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the &#39;natural&#39; orientation. For example:   * when the text is horizontal it might look like:      0----1      |    |      3----2   * when it&#39;s rotated 180 degrees around the top-left corner it becomes:      2----3      |    |      1----0   and the vertex order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$GoogleCloudVisionV1p1beta1BoundingPoly;
    /**
     * Confidence of the OCR results for the word. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Additional information detected for the word.
     */
    property?: Schema$GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;
    /**
     * List of symbols in the word. The order of the symbols follows the natural reading order.
     */
    symbols?: Schema$GoogleCloudVisionV1p1beta1Symbol[];
  }
  /**
   * Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1AnnotateFileResponse {
    /**
     * If set, represents the error message for the failed request. The `responses` field will not be set in this case.
     */
    error?: Schema$Status;
    /**
     * Information about the file for which this response is generated.
     */
    inputConfig?: Schema$GoogleCloudVisionV1p2beta1InputConfig;
    /**
     * Individual responses to images found within the file. This field will be empty if the `error` field is set.
     */
    responses?: Schema$GoogleCloudVisionV1p2beta1AnnotateImageResponse[];
    /**
     * This field gives the total number of pages in the file.
     */
    totalPages?: number | null;
  }
  /**
   * Response to an image annotation request.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1AnnotateImageResponse {
    /**
     * If present, contextual information is needed to understand where this image comes from.
     */
    context?: Schema$GoogleCloudVisionV1p2beta1ImageAnnotationContext;
    /**
     * If present, crop hints have completed successfully.
     */
    cropHintsAnnotation?: Schema$GoogleCloudVisionV1p2beta1CropHintsAnnotation;
    /**
     * If set, represents the error message for the operation. Note that filled-in image annotations are guaranteed to be correct, even when `error` is set.
     */
    error?: Schema$Status;
    /**
     * If present, face detection has completed successfully.
     */
    faceAnnotations?: Schema$GoogleCloudVisionV1p2beta1FaceAnnotation[];
    /**
     * If present, text (OCR) detection or document (OCR) text detection has completed successfully. This annotation provides the structural hierarchy for the OCR detected text.
     */
    fullTextAnnotation?: Schema$GoogleCloudVisionV1p2beta1TextAnnotation;
    /**
     * If present, image properties were extracted successfully.
     */
    imagePropertiesAnnotation?: Schema$GoogleCloudVisionV1p2beta1ImageProperties;
    /**
     * If present, label detection has completed successfully.
     */
    labelAnnotations?: Schema$GoogleCloudVisionV1p2beta1EntityAnnotation[];
    /**
     * If present, landmark detection has completed successfully.
     */
    landmarkAnnotations?: Schema$GoogleCloudVisionV1p2beta1EntityAnnotation[];
    /**
     * If present, localized object detection has completed successfully. This will be sorted descending by confidence score.
     */
    localizedObjectAnnotations?: Schema$GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation[];
    /**
     * If present, logo detection has completed successfully.
     */
    logoAnnotations?: Schema$GoogleCloudVisionV1p2beta1EntityAnnotation[];
    /**
     * If present, product search has completed successfully.
     */
    productSearchResults?: Schema$GoogleCloudVisionV1p2beta1ProductSearchResults;
    /**
     * If present, safe-search annotation has completed successfully.
     */
    safeSearchAnnotation?: Schema$GoogleCloudVisionV1p2beta1SafeSearchAnnotation;
    /**
     * If present, text (OCR) detection has completed successfully.
     */
    textAnnotations?: Schema$GoogleCloudVisionV1p2beta1EntityAnnotation[];
    /**
     * If present, web detection has completed successfully.
     */
    webDetection?: Schema$GoogleCloudVisionV1p2beta1WebDetection;
  }
  /**
   * The response for a single offline file annotation request.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponse {
    /**
     * The output location and metadata from AsyncAnnotateFileRequest.
     */
    outputConfig?: Schema$GoogleCloudVisionV1p2beta1OutputConfig;
  }
  /**
   * Response to an async batch file annotation request.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesResponse {
    /**
     * The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest.
     */
    responses?: Schema$GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponse[];
  }
  /**
   * Logical element on the page.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1Block {
    /**
     * Detected block type (text, image etc) for this block.
     */
    blockType?: string | null;
    /**
     * The bounding box for the block. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the &#39;natural&#39; orientation. For example:  * when the text is horizontal it might look like:          0----1         |    |         3----2  * when it&#39;s rotated 180 degrees around the top-left corner it becomes:          2----3         |    |         1----0    and the vertex order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$GoogleCloudVisionV1p2beta1BoundingPoly;
    /**
     * Confidence of the OCR results on the block. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * List of paragraphs in this block (if this blocks is of type text).
     */
    paragraphs?: Schema$GoogleCloudVisionV1p2beta1Paragraph[];
    /**
     * Additional information detected for the block.
     */
    property?: Schema$GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;
  }
  /**
   * A bounding polygon for the detected image annotation.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1BoundingPoly {
    /**
     * The bounding polygon normalized vertices.
     */
    normalizedVertices?: Schema$GoogleCloudVisionV1p2beta1NormalizedVertex[];
    /**
     * The bounding polygon vertices.
     */
    vertices?: Schema$GoogleCloudVisionV1p2beta1Vertex[];
  }
  /**
   * Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1ColorInfo {
    /**
     * RGB components of the color.
     */
    color?: Schema$Color;
    /**
     * The fraction of pixels the color occupies in the image. Value in range [0, 1].
     */
    pixelFraction?: number | null;
    /**
     * Image-specific score for this color. Value in range [0, 1].
     */
    score?: number | null;
  }
  /**
   * Single crop hint that is used to generate a new crop when serving an image.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1CropHint {
    /**
     * The bounding polygon for the crop region. The coordinates of the bounding box are in the original image&#39;s scale.
     */
    boundingPoly?: Schema$GoogleCloudVisionV1p2beta1BoundingPoly;
    /**
     * Confidence of this being a salient region.  Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Fraction of importance of this salient region with respect to the original image.
     */
    importanceFraction?: number | null;
  }
  /**
   * Set of crop hints that are used to generate new crops when serving images.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1CropHintsAnnotation {
    /**
     * Crop hint results.
     */
    cropHints?: Schema$GoogleCloudVisionV1p2beta1CropHint[];
  }
  /**
   * Set of dominant colors and their corresponding scores.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1DominantColorsAnnotation {
    /**
     * RGB color values with their score and pixel fraction.
     */
    colors?: Schema$GoogleCloudVisionV1p2beta1ColorInfo[];
  }
  /**
   * Set of detected entity features.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1EntityAnnotation {
    /**
     * Image region to which this entity belongs. Not produced for `LABEL_DETECTION` features.
     */
    boundingPoly?: Schema$GoogleCloudVisionV1p2beta1BoundingPoly;
    /**
     * **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the &quot;Eiffel Tower&quot; entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Entity textual description, expressed in its `locale` language.
     */
    description?: string | null;
    /**
     * The language code for the locale in which the entity textual `description` is expressed.
     */
    locale?: string | null;
    /**
     * The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks.
     */
    locations?: Schema$GoogleCloudVisionV1p2beta1LocationInfo[];
    /**
     * Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).
     */
    mid?: string | null;
    /**
     * Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.
     */
    properties?: Schema$GoogleCloudVisionV1p2beta1Property[];
    /**
     * Overall score of the result. Range [0, 1].
     */
    score?: number | null;
    /**
     * The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of &quot;tower&quot; is likely higher to an image containing the detected &quot;Eiffel Tower&quot; than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1].
     */
    topicality?: number | null;
  }
  /**
   * A face annotation object contains the results of face detection.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1FaceAnnotation {
    /**
     * Anger likelihood.
     */
    angerLikelihood?: string | null;
    /**
     * Blurred likelihood.
     */
    blurredLikelihood?: string | null;
    /**
     * The bounding polygon around the face. The coordinates of the bounding box are in the original image&#39;s scale. The bounding box is computed to &quot;frame&quot; the face in accordance with human expectations. It is based on the landmarker results. Note that one or more x and/or y coordinates may not be generated in the `BoundingPoly` (the polygon will be unbounded) if only a partial face appears in the image to be annotated.
     */
    boundingPoly?: Schema$GoogleCloudVisionV1p2beta1BoundingPoly;
    /**
     * Detection confidence. Range [0, 1].
     */
    detectionConfidence?: number | null;
    /**
     * The `fd_bounding_poly` bounding polygon is tighter than the `boundingPoly`, and encloses only the skin part of the face. Typically, it is used to eliminate the face from any image analysis that detects the &quot;amount of skin&quot; visible in an image. It is not based on the landmarker results, only on the initial face detection, hence the &lt;code&gt;fd&lt;/code&gt; (face detection) prefix.
     */
    fdBoundingPoly?: Schema$GoogleCloudVisionV1p2beta1BoundingPoly;
    /**
     * Headwear likelihood.
     */
    headwearLikelihood?: string | null;
    /**
     * Joy likelihood.
     */
    joyLikelihood?: string | null;
    /**
     * Face landmarking confidence. Range [0, 1].
     */
    landmarkingConfidence?: number | null;
    /**
     * Detected face landmarks.
     */
    landmarks?: Schema$GoogleCloudVisionV1p2beta1FaceAnnotationLandmark[];
    /**
     * Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180].
     */
    panAngle?: number | null;
    /**
     * Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180].
     */
    rollAngle?: number | null;
    /**
     * Sorrow likelihood.
     */
    sorrowLikelihood?: string | null;
    /**
     * Surprise likelihood.
     */
    surpriseLikelihood?: string | null;
    /**
     * Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image&#39;s horizontal plane. Range [-180,180].
     */
    tiltAngle?: number | null;
    /**
     * Under-exposed likelihood.
     */
    underExposedLikelihood?: string | null;
  }
  /**
   * A face-specific landmark (for example, a face feature).
   */
  export interface Schema$GoogleCloudVisionV1p2beta1FaceAnnotationLandmark {
    /**
     * Face landmark position.
     */
    position?: Schema$GoogleCloudVisionV1p2beta1Position;
    /**
     * Face landmark type.
     */
    type?: string | null;
  }
  /**
   * The Google Cloud Storage location where the output will be written to.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1GcsDestination {
    /**
     * Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide.  Examples:  *    File Prefix: gs://bucket-name/here/filenameprefix   The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with &quot;filenameprefix&quot;.  *    Directory Prefix: gs://bucket-name/some/location/   The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified.  If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files.
     */
    uri?: string | null;
  }
  /**
   * The Google Cloud Storage location where the input will be read from.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1GcsSource {
    /**
     * Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported.
     */
    uri?: string | null;
  }
  /**
   * If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1ImageAnnotationContext {
    /**
     * If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.
     */
    pageNumber?: number | null;
    /**
     * The URI of the file used to produce the image.
     */
    uri?: string | null;
  }
  /**
   * Stores image properties, such as dominant colors.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1ImageProperties {
    /**
     * If present, dominant colors completed successfully.
     */
    dominantColors?: Schema$GoogleCloudVisionV1p2beta1DominantColorsAnnotation;
  }
  /**
   * The desired input location and metadata.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1InputConfig {
    /**
     * File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64.  Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests.
     */
    content?: string | null;
    /**
     * The Google Cloud Storage location to read the input from.
     */
    gcsSource?: Schema$GoogleCloudVisionV1p2beta1GcsSource;
    /**
     * The type of the file. Currently only &quot;application/pdf&quot;, &quot;image/tiff&quot; and &quot;image/gif&quot; are supported. Wildcards are not supported.
     */
    mimeType?: string | null;
  }
  /**
   * Set of detected objects with bounding boxes.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation {
    /**
     * Image region to which this object belongs. This must be populated.
     */
    boundingPoly?: Schema$GoogleCloudVisionV1p2beta1BoundingPoly;
    /**
     * The BCP-47 language code, such as &quot;en-US&quot; or &quot;sr-Latn&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string | null;
    /**
     * Object ID that should align with EntityAnnotation mid.
     */
    mid?: string | null;
    /**
     * Object name, expressed in its `language_code` language.
     */
    name?: string | null;
    /**
     * Score of the result. Range [0, 1].
     */
    score?: number | null;
  }
  /**
   * Detected entity location information.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1LocationInfo {
    /**
     * lat/long location coordinates.
     */
    latLng?: Schema$LatLng;
  }
  /**
   * A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1NormalizedVertex {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate.
     */
    y?: number | null;
  }
  /**
   * Contains metadata for the BatchAnnotateImages operation.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1OperationMetadata {
    /**
     * The time when the batch request was received.
     */
    createTime?: string | null;
    /**
     * Current state of the batch operation.
     */
    state?: string | null;
    /**
     * The time when the operation result was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * The desired output location and metadata.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1OutputConfig {
    /**
     * The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20.  For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`.  Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations.
     */
    batchSize?: number | null;
    /**
     * The Google Cloud Storage location to write the output(s) to.
     */
    gcsDestination?: Schema$GoogleCloudVisionV1p2beta1GcsDestination;
  }
  /**
   * Detected page from OCR.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1Page {
    /**
     * List of blocks of text, images etc on this page.
     */
    blocks?: Schema$GoogleCloudVisionV1p2beta1Block[];
    /**
     * Confidence of the OCR results on the page. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
     */
    height?: number | null;
    /**
     * Additional information detected on the page.
     */
    property?: Schema$GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;
    /**
     * Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
     */
    width?: number | null;
  }
  /**
   * Structural unit of text representing a number of words in certain order.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1Paragraph {
    /**
     * The bounding box for the paragraph. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the &#39;natural&#39; orientation. For example:   * when the text is horizontal it might look like:      0----1      |    |      3----2   * when it&#39;s rotated 180 degrees around the top-left corner it becomes:      2----3      |    |      1----0   and the vertex order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$GoogleCloudVisionV1p2beta1BoundingPoly;
    /**
     * Confidence of the OCR results for the paragraph. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Additional information detected for the paragraph.
     */
    property?: Schema$GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;
    /**
     * List of all words in this paragraph.
     */
    words?: Schema$GoogleCloudVisionV1p2beta1Word[];
  }
  /**
   * A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1Position {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate.
     */
    y?: number | null;
    /**
     * Z coordinate (or depth).
     */
    z?: number | null;
  }
  /**
   * A Product contains ReferenceImages.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1Product {
    /**
     * User-provided metadata to be stored with this product. Must be at most 4096 characters long.
     */
    description?: string | null;
    /**
     * The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long.
     */
    displayName?: string | null;
    /**
     * The resource name of the product.  Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`.  This field is ignored when creating a product.
     */
    name?: string | null;
    /**
     * The category for the product identified by the reference image. This should be either &quot;homegoods-v2&quot;, &quot;apparel-v2&quot;, or &quot;toys-v2&quot;. The legacy categories &quot;homegoods&quot;, &quot;apparel&quot;, and &quot;toys&quot; are still supported, but these should not be used for new products.  This field is immutable.
     */
    productCategory?: string | null;
    /**
     * Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels.  Note that integer values can be provided as strings, e.g. &quot;1199&quot;. Only strings with integer values can match a range-based restriction which is to be supported soon.  Multiple values can be assigned to the same key. One product may have up to 500 product_labels.  Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet.
     */
    productLabels?: Schema$GoogleCloudVisionV1p2beta1ProductKeyValue[];
  }
  /**
   * A product label represented as a key-value pair.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1ProductKeyValue {
    /**
     * The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.
     */
    key?: string | null;
    /**
     * The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.
     */
    value?: string | null;
  }
  /**
   * Results for a product search request.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1ProductSearchResults {
    /**
     * Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results.
     */
    indexTime?: string | null;
    /**
     * List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results.
     */
    productGroupedResults?: Schema$GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult[];
    /**
     * List of results, one for each product match.
     */
    results?: Schema$GoogleCloudVisionV1p2beta1ProductSearchResultsResult[];
  }
  /**
   * Information about the products similar to a single product in a query image.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult {
    /**
     * The bounding polygon around the product detected in the query image.
     */
    boundingPoly?: Schema$GoogleCloudVisionV1p2beta1BoundingPoly;
    /**
     * List of generic predictions for the object in the bounding box.
     */
    objectAnnotations?: Schema$GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation[];
    /**
     * List of results, one for each product match.
     */
    results?: Schema$GoogleCloudVisionV1p2beta1ProductSearchResultsResult[];
  }
  /**
   * Prediction for what the object in the bounding box is.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation {
    /**
     * The BCP-47 language code, such as &quot;en-US&quot; or &quot;sr-Latn&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string | null;
    /**
     * Object ID that should align with EntityAnnotation mid.
     */
    mid?: string | null;
    /**
     * Object name, expressed in its `language_code` language.
     */
    name?: string | null;
    /**
     * Score of the result. Range [0, 1].
     */
    score?: number | null;
  }
  /**
   * Information about a product.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1ProductSearchResultsResult {
    /**
     * The resource name of the image from the product that is the closest match to the query.
     */
    image?: string | null;
    /**
     * The Product.
     */
    product?: Schema$GoogleCloudVisionV1p2beta1Product;
    /**
     * A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).
     */
    score?: number | null;
  }
  /**
   * A `Property` consists of a user-supplied name/value pair.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1Property {
    /**
     * Name of the property.
     */
    name?: string | null;
    /**
     * Value of numeric properties.
     */
    uint64Value?: string | null;
    /**
     * Value of the property.
     */
    value?: string | null;
  }
  /**
   * Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).
   */
  export interface Schema$GoogleCloudVisionV1p2beta1SafeSearchAnnotation {
    /**
     * Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities.
     */
    adult?: string | null;
    /**
     * Likelihood that this is a medical image.
     */
    medical?: string | null;
    /**
     * Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas.
     */
    racy?: string | null;
    /**
     * Spoof likelihood. The likelihood that an modification was made to the image&#39;s canonical version to make it appear funny or offensive.
     */
    spoof?: string | null;
    /**
     * Likelihood that this image contains violent content.
     */
    violence?: string | null;
  }
  /**
   * A single symbol representation.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1Symbol {
    /**
     * The bounding box for the symbol. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the &#39;natural&#39; orientation. For example:   * when the text is horizontal it might look like:      0----1      |    |      3----2   * when it&#39;s rotated 180 degrees around the top-left corner it becomes:      2----3      |    |      1----0   and the vertex order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$GoogleCloudVisionV1p2beta1BoundingPoly;
    /**
     * Confidence of the OCR results for the symbol. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Additional information detected for the symbol.
     */
    property?: Schema$GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;
    /**
     * The actual UTF-8 representation of the symbol.
     */
    text?: string | null;
  }
  /**
   * TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this:     TextAnnotation -&gt; Page -&gt; Block -&gt; Paragraph -&gt; Word -&gt; Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1TextAnnotation {
    /**
     * List of pages detected by OCR.
     */
    pages?: Schema$GoogleCloudVisionV1p2beta1Page[];
    /**
     * UTF-8 text detected on the pages.
     */
    text?: string | null;
  }
  /**
   * Detected start or end of a structural component.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak {
    /**
     * True if break prepends the element.
     */
    isPrefix?: boolean | null;
    /**
     * Detected break type.
     */
    type?: string | null;
  }
  /**
   * Detected language for a structural component.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage {
    /**
     * Confidence of detected language. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * The BCP-47 language code, such as &quot;en-US&quot; or &quot;sr-Latn&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string | null;
  }
  /**
   * Additional information detected on the structural component.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1TextAnnotationTextProperty {
    /**
     * Detected start or end of a text segment.
     */
    detectedBreak?: Schema$GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak;
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage[];
  }
  /**
   * A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1Vertex {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate.
     */
    y?: number | null;
  }
  /**
   * Relevant information for the image from the Internet.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1WebDetection {
    /**
     * The service&#39;s best guess as to the topic of the request image. Inferred from similar images on the open web.
     */
    bestGuessLabels?: Schema$GoogleCloudVisionV1p2beta1WebDetectionWebLabel[];
    /**
     * Fully matching images from the Internet. Can include resized copies of the query image.
     */
    fullMatchingImages?: Schema$GoogleCloudVisionV1p2beta1WebDetectionWebImage[];
    /**
     * Web pages containing the matching images from the Internet.
     */
    pagesWithMatchingImages?: Schema$GoogleCloudVisionV1p2beta1WebDetectionWebPage[];
    /**
     * Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.
     */
    partialMatchingImages?: Schema$GoogleCloudVisionV1p2beta1WebDetectionWebImage[];
    /**
     * The visually similar image results.
     */
    visuallySimilarImages?: Schema$GoogleCloudVisionV1p2beta1WebDetectionWebImage[];
    /**
     * Deduced entities from similar images on the Internet.
     */
    webEntities?: Schema$GoogleCloudVisionV1p2beta1WebDetectionWebEntity[];
  }
  /**
   * Entity deduced from similar images on the Internet.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1WebDetectionWebEntity {
    /**
     * Canonical description of the entity, in English.
     */
    description?: string | null;
    /**
     * Opaque entity ID.
     */
    entityId?: string | null;
    /**
     * Overall relevancy score for the entity. Not normalized and not comparable across different image queries.
     */
    score?: number | null;
  }
  /**
   * Metadata for online images.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1WebDetectionWebImage {
    /**
     * (Deprecated) Overall relevancy score for the image.
     */
    score?: number | null;
    /**
     * The result image URL.
     */
    url?: string | null;
  }
  /**
   * Label to provide extra metadata for the web detection.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1WebDetectionWebLabel {
    /**
     * Label for extra metadata.
     */
    label?: string | null;
    /**
     * The BCP-47 language code for `label`, such as &quot;en-US&quot; or &quot;sr-Latn&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string | null;
  }
  /**
   * Metadata for web pages.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1WebDetectionWebPage {
    /**
     * Fully matching images on the page. Can include resized copies of the query image.
     */
    fullMatchingImages?: Schema$GoogleCloudVisionV1p2beta1WebDetectionWebImage[];
    /**
     * Title for the web page, may contain HTML markups.
     */
    pageTitle?: string | null;
    /**
     * Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.
     */
    partialMatchingImages?: Schema$GoogleCloudVisionV1p2beta1WebDetectionWebImage[];
    /**
     * (Deprecated) Overall relevancy score for the web page.
     */
    score?: number | null;
    /**
     * The result web page URL.
     */
    url?: string | null;
  }
  /**
   * A word representation.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1Word {
    /**
     * The bounding box for the word. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the &#39;natural&#39; orientation. For example:   * when the text is horizontal it might look like:      0----1      |    |      3----2   * when it&#39;s rotated 180 degrees around the top-left corner it becomes:      2----3      |    |      1----0   and the vertex order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$GoogleCloudVisionV1p2beta1BoundingPoly;
    /**
     * Confidence of the OCR results for the word. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Additional information detected for the word.
     */
    property?: Schema$GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;
    /**
     * List of symbols in the word. The order of the symbols follows the natural reading order.
     */
    symbols?: Schema$GoogleCloudVisionV1p2beta1Symbol[];
  }
  /**
   * Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1AnnotateFileResponse {
    /**
     * If set, represents the error message for the failed request. The `responses` field will not be set in this case.
     */
    error?: Schema$Status;
    /**
     * Information about the file for which this response is generated.
     */
    inputConfig?: Schema$GoogleCloudVisionV1p3beta1InputConfig;
    /**
     * Individual responses to images found within the file. This field will be empty if the `error` field is set.
     */
    responses?: Schema$GoogleCloudVisionV1p3beta1AnnotateImageResponse[];
    /**
     * This field gives the total number of pages in the file.
     */
    totalPages?: number | null;
  }
  /**
   * Response to an image annotation request.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1AnnotateImageResponse {
    /**
     * If present, contextual information is needed to understand where this image comes from.
     */
    context?: Schema$GoogleCloudVisionV1p3beta1ImageAnnotationContext;
    /**
     * If present, crop hints have completed successfully.
     */
    cropHintsAnnotation?: Schema$GoogleCloudVisionV1p3beta1CropHintsAnnotation;
    /**
     * If set, represents the error message for the operation. Note that filled-in image annotations are guaranteed to be correct, even when `error` is set.
     */
    error?: Schema$Status;
    /**
     * If present, face detection has completed successfully.
     */
    faceAnnotations?: Schema$GoogleCloudVisionV1p3beta1FaceAnnotation[];
    /**
     * If present, text (OCR) detection or document (OCR) text detection has completed successfully. This annotation provides the structural hierarchy for the OCR detected text.
     */
    fullTextAnnotation?: Schema$GoogleCloudVisionV1p3beta1TextAnnotation;
    /**
     * If present, image properties were extracted successfully.
     */
    imagePropertiesAnnotation?: Schema$GoogleCloudVisionV1p3beta1ImageProperties;
    /**
     * If present, label detection has completed successfully.
     */
    labelAnnotations?: Schema$GoogleCloudVisionV1p3beta1EntityAnnotation[];
    /**
     * If present, landmark detection has completed successfully.
     */
    landmarkAnnotations?: Schema$GoogleCloudVisionV1p3beta1EntityAnnotation[];
    /**
     * If present, localized object detection has completed successfully. This will be sorted descending by confidence score.
     */
    localizedObjectAnnotations?: Schema$GoogleCloudVisionV1p3beta1LocalizedObjectAnnotation[];
    /**
     * If present, logo detection has completed successfully.
     */
    logoAnnotations?: Schema$GoogleCloudVisionV1p3beta1EntityAnnotation[];
    /**
     * If present, product search has completed successfully.
     */
    productSearchResults?: Schema$GoogleCloudVisionV1p3beta1ProductSearchResults;
    /**
     * If present, safe-search annotation has completed successfully.
     */
    safeSearchAnnotation?: Schema$GoogleCloudVisionV1p3beta1SafeSearchAnnotation;
    /**
     * If present, text (OCR) detection has completed successfully.
     */
    textAnnotations?: Schema$GoogleCloudVisionV1p3beta1EntityAnnotation[];
    /**
     * If present, web detection has completed successfully.
     */
    webDetection?: Schema$GoogleCloudVisionV1p3beta1WebDetection;
  }
  /**
   * The response for a single offline file annotation request.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1AsyncAnnotateFileResponse {
    /**
     * The output location and metadata from AsyncAnnotateFileRequest.
     */
    outputConfig?: Schema$GoogleCloudVisionV1p3beta1OutputConfig;
  }
  /**
   * Response to an async batch file annotation request.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1AsyncBatchAnnotateFilesResponse {
    /**
     * The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest.
     */
    responses?: Schema$GoogleCloudVisionV1p3beta1AsyncAnnotateFileResponse[];
  }
  /**
   * Metadata for the batch operations such as the current state.  This is included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1BatchOperationMetadata {
    /**
     * The time when the batch request is finished and google.longrunning.Operation.done is set to true.
     */
    endTime?: string | null;
    /**
     * The current state of the batch operation.
     */
    state?: string | null;
    /**
     * The time when the batch request was submitted to the server.
     */
    submitTime?: string | null;
  }
  /**
   * Logical element on the page.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1Block {
    /**
     * Detected block type (text, image etc) for this block.
     */
    blockType?: string | null;
    /**
     * The bounding box for the block. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the &#39;natural&#39; orientation. For example:  * when the text is horizontal it might look like:          0----1         |    |         3----2  * when it&#39;s rotated 180 degrees around the top-left corner it becomes:          2----3         |    |         1----0    and the vertex order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$GoogleCloudVisionV1p3beta1BoundingPoly;
    /**
     * Confidence of the OCR results on the block. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * List of paragraphs in this block (if this blocks is of type text).
     */
    paragraphs?: Schema$GoogleCloudVisionV1p3beta1Paragraph[];
    /**
     * Additional information detected for the block.
     */
    property?: Schema$GoogleCloudVisionV1p3beta1TextAnnotationTextProperty;
  }
  /**
   * A bounding polygon for the detected image annotation.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1BoundingPoly {
    /**
     * The bounding polygon normalized vertices.
     */
    normalizedVertices?: Schema$GoogleCloudVisionV1p3beta1NormalizedVertex[];
    /**
     * The bounding polygon vertices.
     */
    vertices?: Schema$GoogleCloudVisionV1p3beta1Vertex[];
  }
  /**
   * Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1ColorInfo {
    /**
     * RGB components of the color.
     */
    color?: Schema$Color;
    /**
     * The fraction of pixels the color occupies in the image. Value in range [0, 1].
     */
    pixelFraction?: number | null;
    /**
     * Image-specific score for this color. Value in range [0, 1].
     */
    score?: number | null;
  }
  /**
   * Single crop hint that is used to generate a new crop when serving an image.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1CropHint {
    /**
     * The bounding polygon for the crop region. The coordinates of the bounding box are in the original image&#39;s scale.
     */
    boundingPoly?: Schema$GoogleCloudVisionV1p3beta1BoundingPoly;
    /**
     * Confidence of this being a salient region.  Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Fraction of importance of this salient region with respect to the original image.
     */
    importanceFraction?: number | null;
  }
  /**
   * Set of crop hints that are used to generate new crops when serving images.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1CropHintsAnnotation {
    /**
     * Crop hint results.
     */
    cropHints?: Schema$GoogleCloudVisionV1p3beta1CropHint[];
  }
  /**
   * Set of dominant colors and their corresponding scores.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1DominantColorsAnnotation {
    /**
     * RGB color values with their score and pixel fraction.
     */
    colors?: Schema$GoogleCloudVisionV1p3beta1ColorInfo[];
  }
  /**
   * Set of detected entity features.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1EntityAnnotation {
    /**
     * Image region to which this entity belongs. Not produced for `LABEL_DETECTION` features.
     */
    boundingPoly?: Schema$GoogleCloudVisionV1p3beta1BoundingPoly;
    /**
     * **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the &quot;Eiffel Tower&quot; entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Entity textual description, expressed in its `locale` language.
     */
    description?: string | null;
    /**
     * The language code for the locale in which the entity textual `description` is expressed.
     */
    locale?: string | null;
    /**
     * The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks.
     */
    locations?: Schema$GoogleCloudVisionV1p3beta1LocationInfo[];
    /**
     * Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).
     */
    mid?: string | null;
    /**
     * Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.
     */
    properties?: Schema$GoogleCloudVisionV1p3beta1Property[];
    /**
     * Overall score of the result. Range [0, 1].
     */
    score?: number | null;
    /**
     * The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of &quot;tower&quot; is likely higher to an image containing the detected &quot;Eiffel Tower&quot; than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1].
     */
    topicality?: number | null;
  }
  /**
   * A face annotation object contains the results of face detection.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1FaceAnnotation {
    /**
     * Anger likelihood.
     */
    angerLikelihood?: string | null;
    /**
     * Blurred likelihood.
     */
    blurredLikelihood?: string | null;
    /**
     * The bounding polygon around the face. The coordinates of the bounding box are in the original image&#39;s scale. The bounding box is computed to &quot;frame&quot; the face in accordance with human expectations. It is based on the landmarker results. Note that one or more x and/or y coordinates may not be generated in the `BoundingPoly` (the polygon will be unbounded) if only a partial face appears in the image to be annotated.
     */
    boundingPoly?: Schema$GoogleCloudVisionV1p3beta1BoundingPoly;
    /**
     * Detection confidence. Range [0, 1].
     */
    detectionConfidence?: number | null;
    /**
     * The `fd_bounding_poly` bounding polygon is tighter than the `boundingPoly`, and encloses only the skin part of the face. Typically, it is used to eliminate the face from any image analysis that detects the &quot;amount of skin&quot; visible in an image. It is not based on the landmarker results, only on the initial face detection, hence the &lt;code&gt;fd&lt;/code&gt; (face detection) prefix.
     */
    fdBoundingPoly?: Schema$GoogleCloudVisionV1p3beta1BoundingPoly;
    /**
     * Headwear likelihood.
     */
    headwearLikelihood?: string | null;
    /**
     * Joy likelihood.
     */
    joyLikelihood?: string | null;
    /**
     * Face landmarking confidence. Range [0, 1].
     */
    landmarkingConfidence?: number | null;
    /**
     * Detected face landmarks.
     */
    landmarks?: Schema$GoogleCloudVisionV1p3beta1FaceAnnotationLandmark[];
    /**
     * Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180].
     */
    panAngle?: number | null;
    /**
     * Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180].
     */
    rollAngle?: number | null;
    /**
     * Sorrow likelihood.
     */
    sorrowLikelihood?: string | null;
    /**
     * Surprise likelihood.
     */
    surpriseLikelihood?: string | null;
    /**
     * Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image&#39;s horizontal plane. Range [-180,180].
     */
    tiltAngle?: number | null;
    /**
     * Under-exposed likelihood.
     */
    underExposedLikelihood?: string | null;
  }
  /**
   * A face-specific landmark (for example, a face feature).
   */
  export interface Schema$GoogleCloudVisionV1p3beta1FaceAnnotationLandmark {
    /**
     * Face landmark position.
     */
    position?: Schema$GoogleCloudVisionV1p3beta1Position;
    /**
     * Face landmark type.
     */
    type?: string | null;
  }
  /**
   * The Google Cloud Storage location where the output will be written to.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1GcsDestination {
    /**
     * Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide.  Examples:  *    File Prefix: gs://bucket-name/here/filenameprefix   The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with &quot;filenameprefix&quot;.  *    Directory Prefix: gs://bucket-name/some/location/   The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified.  If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files.
     */
    uri?: string | null;
  }
  /**
   * The Google Cloud Storage location where the input will be read from.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1GcsSource {
    /**
     * Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported.
     */
    uri?: string | null;
  }
  /**
   * If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1ImageAnnotationContext {
    /**
     * If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.
     */
    pageNumber?: number | null;
    /**
     * The URI of the file used to produce the image.
     */
    uri?: string | null;
  }
  /**
   * Stores image properties, such as dominant colors.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1ImageProperties {
    /**
     * If present, dominant colors completed successfully.
     */
    dominantColors?: Schema$GoogleCloudVisionV1p3beta1DominantColorsAnnotation;
  }
  /**
   * Response message for the `ImportProductSets` method.  This message is returned by the google.longrunning.Operations.GetOperation method in the returned google.longrunning.Operation.response field.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1ImportProductSetsResponse {
    /**
     * The list of reference_images that are imported successfully.
     */
    referenceImages?: Schema$GoogleCloudVisionV1p3beta1ReferenceImage[];
    /**
     * The rpc status for each ImportProductSet request, including both successes and errors.  The number of statuses here matches the number of lines in the csv file, and statuses[i] stores the success or failure status of processing the i-th line of the csv, starting from line 0.
     */
    statuses?: Schema$Status[];
  }
  /**
   * The desired input location and metadata.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1InputConfig {
    /**
     * File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64.  Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests.
     */
    content?: string | null;
    /**
     * The Google Cloud Storage location to read the input from.
     */
    gcsSource?: Schema$GoogleCloudVisionV1p3beta1GcsSource;
    /**
     * The type of the file. Currently only &quot;application/pdf&quot;, &quot;image/tiff&quot; and &quot;image/gif&quot; are supported. Wildcards are not supported.
     */
    mimeType?: string | null;
  }
  /**
   * Set of detected objects with bounding boxes.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1LocalizedObjectAnnotation {
    /**
     * Image region to which this object belongs. This must be populated.
     */
    boundingPoly?: Schema$GoogleCloudVisionV1p3beta1BoundingPoly;
    /**
     * The BCP-47 language code, such as &quot;en-US&quot; or &quot;sr-Latn&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string | null;
    /**
     * Object ID that should align with EntityAnnotation mid.
     */
    mid?: string | null;
    /**
     * Object name, expressed in its `language_code` language.
     */
    name?: string | null;
    /**
     * Score of the result. Range [0, 1].
     */
    score?: number | null;
  }
  /**
   * Detected entity location information.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1LocationInfo {
    /**
     * lat/long location coordinates.
     */
    latLng?: Schema$LatLng;
  }
  /**
   * A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1NormalizedVertex {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate.
     */
    y?: number | null;
  }
  /**
   * Contains metadata for the BatchAnnotateImages operation.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1OperationMetadata {
    /**
     * The time when the batch request was received.
     */
    createTime?: string | null;
    /**
     * Current state of the batch operation.
     */
    state?: string | null;
    /**
     * The time when the operation result was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * The desired output location and metadata.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1OutputConfig {
    /**
     * The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20.  For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`.  Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations.
     */
    batchSize?: number | null;
    /**
     * The Google Cloud Storage location to write the output(s) to.
     */
    gcsDestination?: Schema$GoogleCloudVisionV1p3beta1GcsDestination;
  }
  /**
   * Detected page from OCR.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1Page {
    /**
     * List of blocks of text, images etc on this page.
     */
    blocks?: Schema$GoogleCloudVisionV1p3beta1Block[];
    /**
     * Confidence of the OCR results on the page. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
     */
    height?: number | null;
    /**
     * Additional information detected on the page.
     */
    property?: Schema$GoogleCloudVisionV1p3beta1TextAnnotationTextProperty;
    /**
     * Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
     */
    width?: number | null;
  }
  /**
   * Structural unit of text representing a number of words in certain order.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1Paragraph {
    /**
     * The bounding box for the paragraph. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the &#39;natural&#39; orientation. For example:   * when the text is horizontal it might look like:      0----1      |    |      3----2   * when it&#39;s rotated 180 degrees around the top-left corner it becomes:      2----3      |    |      1----0   and the vertex order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$GoogleCloudVisionV1p3beta1BoundingPoly;
    /**
     * Confidence of the OCR results for the paragraph. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Additional information detected for the paragraph.
     */
    property?: Schema$GoogleCloudVisionV1p3beta1TextAnnotationTextProperty;
    /**
     * List of all words in this paragraph.
     */
    words?: Schema$GoogleCloudVisionV1p3beta1Word[];
  }
  /**
   * A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1Position {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate.
     */
    y?: number | null;
    /**
     * Z coordinate (or depth).
     */
    z?: number | null;
  }
  /**
   * A Product contains ReferenceImages.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1Product {
    /**
     * User-provided metadata to be stored with this product. Must be at most 4096 characters long.
     */
    description?: string | null;
    /**
     * The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long.
     */
    displayName?: string | null;
    /**
     * The resource name of the product.  Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`.  This field is ignored when creating a product.
     */
    name?: string | null;
    /**
     * The category for the product identified by the reference image. This should be either &quot;homegoods-v2&quot;, &quot;apparel-v2&quot;, or &quot;toys-v2&quot;. The legacy categories &quot;homegoods&quot;, &quot;apparel&quot;, and &quot;toys&quot; are still supported, but these should not be used for new products.  This field is immutable.
     */
    productCategory?: string | null;
    /**
     * Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels.  Note that integer values can be provided as strings, e.g. &quot;1199&quot;. Only strings with integer values can match a range-based restriction which is to be supported soon.  Multiple values can be assigned to the same key. One product may have up to 500 product_labels.  Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet.
     */
    productLabels?: Schema$GoogleCloudVisionV1p3beta1ProductKeyValue[];
  }
  /**
   * A product label represented as a key-value pair.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1ProductKeyValue {
    /**
     * The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.
     */
    key?: string | null;
    /**
     * The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.
     */
    value?: string | null;
  }
  /**
   * Results for a product search request.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1ProductSearchResults {
    /**
     * Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results.
     */
    indexTime?: string | null;
    /**
     * List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results.
     */
    productGroupedResults?: Schema$GoogleCloudVisionV1p3beta1ProductSearchResultsGroupedResult[];
    /**
     * List of results, one for each product match.
     */
    results?: Schema$GoogleCloudVisionV1p3beta1ProductSearchResultsResult[];
  }
  /**
   * Information about the products similar to a single product in a query image.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1ProductSearchResultsGroupedResult {
    /**
     * The bounding polygon around the product detected in the query image.
     */
    boundingPoly?: Schema$GoogleCloudVisionV1p3beta1BoundingPoly;
    /**
     * List of generic predictions for the object in the bounding box.
     */
    objectAnnotations?: Schema$GoogleCloudVisionV1p3beta1ProductSearchResultsObjectAnnotation[];
    /**
     * List of results, one for each product match.
     */
    results?: Schema$GoogleCloudVisionV1p3beta1ProductSearchResultsResult[];
  }
  /**
   * Prediction for what the object in the bounding box is.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1ProductSearchResultsObjectAnnotation {
    /**
     * The BCP-47 language code, such as &quot;en-US&quot; or &quot;sr-Latn&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string | null;
    /**
     * Object ID that should align with EntityAnnotation mid.
     */
    mid?: string | null;
    /**
     * Object name, expressed in its `language_code` language.
     */
    name?: string | null;
    /**
     * Score of the result. Range [0, 1].
     */
    score?: number | null;
  }
  /**
   * Information about a product.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1ProductSearchResultsResult {
    /**
     * The resource name of the image from the product that is the closest match to the query.
     */
    image?: string | null;
    /**
     * The Product.
     */
    product?: Schema$GoogleCloudVisionV1p3beta1Product;
    /**
     * A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).
     */
    score?: number | null;
  }
  /**
   * A `Property` consists of a user-supplied name/value pair.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1Property {
    /**
     * Name of the property.
     */
    name?: string | null;
    /**
     * Value of numeric properties.
     */
    uint64Value?: string | null;
    /**
     * Value of the property.
     */
    value?: string | null;
  }
  /**
   * A `ReferenceImage` represents a product image and its associated metadata, such as bounding boxes.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1ReferenceImage {
    /**
     * Bounding polygons around the areas of interest in the reference image. Optional. If this field is empty, the system will try to detect regions of interest. At most 10 bounding polygons will be used.  The provided shape is converted into a non-rotated rectangle. Once converted, the small edge of the rectangle must be greater than or equal to 300 pixels. The aspect ratio must be 1:4 or less (i.e. 1:3 is ok; 1:5 is not).
     */
    boundingPolys?: Schema$GoogleCloudVisionV1p3beta1BoundingPoly[];
    /**
     * The resource name of the reference image.  Format is:  `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`.  This field is ignored when creating a reference image.
     */
    name?: string | null;
    /**
     * The Google Cloud Storage URI of the reference image.  The URI must start with `gs://`.  Required.
     */
    uri?: string | null;
  }
  /**
   * Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).
   */
  export interface Schema$GoogleCloudVisionV1p3beta1SafeSearchAnnotation {
    /**
     * Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities.
     */
    adult?: string | null;
    /**
     * Likelihood that this is a medical image.
     */
    medical?: string | null;
    /**
     * Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas.
     */
    racy?: string | null;
    /**
     * Spoof likelihood. The likelihood that an modification was made to the image&#39;s canonical version to make it appear funny or offensive.
     */
    spoof?: string | null;
    /**
     * Likelihood that this image contains violent content.
     */
    violence?: string | null;
  }
  /**
   * A single symbol representation.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1Symbol {
    /**
     * The bounding box for the symbol. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the &#39;natural&#39; orientation. For example:   * when the text is horizontal it might look like:      0----1      |    |      3----2   * when it&#39;s rotated 180 degrees around the top-left corner it becomes:      2----3      |    |      1----0   and the vertex order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$GoogleCloudVisionV1p3beta1BoundingPoly;
    /**
     * Confidence of the OCR results for the symbol. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Additional information detected for the symbol.
     */
    property?: Schema$GoogleCloudVisionV1p3beta1TextAnnotationTextProperty;
    /**
     * The actual UTF-8 representation of the symbol.
     */
    text?: string | null;
  }
  /**
   * TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this:     TextAnnotation -&gt; Page -&gt; Block -&gt; Paragraph -&gt; Word -&gt; Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1TextAnnotation {
    /**
     * List of pages detected by OCR.
     */
    pages?: Schema$GoogleCloudVisionV1p3beta1Page[];
    /**
     * UTF-8 text detected on the pages.
     */
    text?: string | null;
  }
  /**
   * Detected start or end of a structural component.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1TextAnnotationDetectedBreak {
    /**
     * True if break prepends the element.
     */
    isPrefix?: boolean | null;
    /**
     * Detected break type.
     */
    type?: string | null;
  }
  /**
   * Detected language for a structural component.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1TextAnnotationDetectedLanguage {
    /**
     * Confidence of detected language. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * The BCP-47 language code, such as &quot;en-US&quot; or &quot;sr-Latn&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string | null;
  }
  /**
   * Additional information detected on the structural component.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1TextAnnotationTextProperty {
    /**
     * Detected start or end of a text segment.
     */
    detectedBreak?: Schema$GoogleCloudVisionV1p3beta1TextAnnotationDetectedBreak;
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudVisionV1p3beta1TextAnnotationDetectedLanguage[];
  }
  /**
   * A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1Vertex {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate.
     */
    y?: number | null;
  }
  /**
   * Relevant information for the image from the Internet.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1WebDetection {
    /**
     * The service&#39;s best guess as to the topic of the request image. Inferred from similar images on the open web.
     */
    bestGuessLabels?: Schema$GoogleCloudVisionV1p3beta1WebDetectionWebLabel[];
    /**
     * Fully matching images from the Internet. Can include resized copies of the query image.
     */
    fullMatchingImages?: Schema$GoogleCloudVisionV1p3beta1WebDetectionWebImage[];
    /**
     * Web pages containing the matching images from the Internet.
     */
    pagesWithMatchingImages?: Schema$GoogleCloudVisionV1p3beta1WebDetectionWebPage[];
    /**
     * Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.
     */
    partialMatchingImages?: Schema$GoogleCloudVisionV1p3beta1WebDetectionWebImage[];
    /**
     * The visually similar image results.
     */
    visuallySimilarImages?: Schema$GoogleCloudVisionV1p3beta1WebDetectionWebImage[];
    /**
     * Deduced entities from similar images on the Internet.
     */
    webEntities?: Schema$GoogleCloudVisionV1p3beta1WebDetectionWebEntity[];
  }
  /**
   * Entity deduced from similar images on the Internet.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1WebDetectionWebEntity {
    /**
     * Canonical description of the entity, in English.
     */
    description?: string | null;
    /**
     * Opaque entity ID.
     */
    entityId?: string | null;
    /**
     * Overall relevancy score for the entity. Not normalized and not comparable across different image queries.
     */
    score?: number | null;
  }
  /**
   * Metadata for online images.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1WebDetectionWebImage {
    /**
     * (Deprecated) Overall relevancy score for the image.
     */
    score?: number | null;
    /**
     * The result image URL.
     */
    url?: string | null;
  }
  /**
   * Label to provide extra metadata for the web detection.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1WebDetectionWebLabel {
    /**
     * Label for extra metadata.
     */
    label?: string | null;
    /**
     * The BCP-47 language code for `label`, such as &quot;en-US&quot; or &quot;sr-Latn&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string | null;
  }
  /**
   * Metadata for web pages.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1WebDetectionWebPage {
    /**
     * Fully matching images on the page. Can include resized copies of the query image.
     */
    fullMatchingImages?: Schema$GoogleCloudVisionV1p3beta1WebDetectionWebImage[];
    /**
     * Title for the web page, may contain HTML markups.
     */
    pageTitle?: string | null;
    /**
     * Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.
     */
    partialMatchingImages?: Schema$GoogleCloudVisionV1p3beta1WebDetectionWebImage[];
    /**
     * (Deprecated) Overall relevancy score for the web page.
     */
    score?: number | null;
    /**
     * The result web page URL.
     */
    url?: string | null;
  }
  /**
   * A word representation.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1Word {
    /**
     * The bounding box for the word. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the &#39;natural&#39; orientation. For example:   * when the text is horizontal it might look like:      0----1      |    |      3----2   * when it&#39;s rotated 180 degrees around the top-left corner it becomes:      2----3      |    |      1----0   and the vertex order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$GoogleCloudVisionV1p3beta1BoundingPoly;
    /**
     * Confidence of the OCR results for the word. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Additional information detected for the word.
     */
    property?: Schema$GoogleCloudVisionV1p3beta1TextAnnotationTextProperty;
    /**
     * List of symbols in the word. The order of the symbols follows the natural reading order.
     */
    symbols?: Schema$GoogleCloudVisionV1p3beta1Symbol[];
  }
  /**
   * Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1AnnotateFileResponse {
    /**
     * If set, represents the error message for the failed request. The `responses` field will not be set in this case.
     */
    error?: Schema$Status;
    /**
     * Information about the file for which this response is generated.
     */
    inputConfig?: Schema$GoogleCloudVisionV1p4beta1InputConfig;
    /**
     * Individual responses to images found within the file. This field will be empty if the `error` field is set.
     */
    responses?: Schema$GoogleCloudVisionV1p4beta1AnnotateImageResponse[];
    /**
     * This field gives the total number of pages in the file.
     */
    totalPages?: number | null;
  }
  /**
   * Response to an image annotation request.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1AnnotateImageResponse {
    /**
     * If present, contextual information is needed to understand where this image comes from.
     */
    context?: Schema$GoogleCloudVisionV1p4beta1ImageAnnotationContext;
    /**
     * If present, crop hints have completed successfully.
     */
    cropHintsAnnotation?: Schema$GoogleCloudVisionV1p4beta1CropHintsAnnotation;
    /**
     * If set, represents the error message for the operation. Note that filled-in image annotations are guaranteed to be correct, even when `error` is set.
     */
    error?: Schema$Status;
    /**
     * If present, face detection has completed successfully.
     */
    faceAnnotations?: Schema$GoogleCloudVisionV1p4beta1FaceAnnotation[];
    /**
     * If present, text (OCR) detection or document (OCR) text detection has completed successfully. This annotation provides the structural hierarchy for the OCR detected text.
     */
    fullTextAnnotation?: Schema$GoogleCloudVisionV1p4beta1TextAnnotation;
    /**
     * If present, image properties were extracted successfully.
     */
    imagePropertiesAnnotation?: Schema$GoogleCloudVisionV1p4beta1ImageProperties;
    /**
     * If present, image quality calculation has completed successfully.
     */
    imageQualityAnnotation?: Schema$GoogleCloudVisionV1p4beta1ImageQuality;
    /**
     * If present, label detection has completed successfully.
     */
    labelAnnotations?: Schema$GoogleCloudVisionV1p4beta1EntityAnnotation[];
    /**
     * If present, landmark detection has completed successfully.
     */
    landmarkAnnotations?: Schema$GoogleCloudVisionV1p4beta1EntityAnnotation[];
    /**
     * If present, localized object detection has completed successfully. This will be sorted descending by confidence score.
     */
    localizedObjectAnnotations?: Schema$GoogleCloudVisionV1p4beta1LocalizedObjectAnnotation[];
    /**
     * If present, logo detection has completed successfully.
     */
    logoAnnotations?: Schema$GoogleCloudVisionV1p4beta1EntityAnnotation[];
    /**
     * If present, product search has completed successfully.
     */
    productSearchResults?: Schema$GoogleCloudVisionV1p4beta1ProductSearchResults;
    /**
     * If present, image quality optimization has completed successfully.
     */
    qualityOptimizationResult?: Schema$GoogleCloudVisionV1p4beta1QualityOptimizationResult;
    /**
     * If present, safe-search annotation has completed successfully.
     */
    safeSearchAnnotation?: Schema$GoogleCloudVisionV1p4beta1SafeSearchAnnotation;
    /**
     * If present, text (OCR) detection has completed successfully.
     */
    textAnnotations?: Schema$GoogleCloudVisionV1p4beta1EntityAnnotation[];
    /**
     * If present, web detection has completed successfully.
     */
    webDetection?: Schema$GoogleCloudVisionV1p4beta1WebDetection;
  }
  /**
   * The response for a single offline file annotation request.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1AsyncAnnotateFileResponse {
    /**
     * The output location and metadata from AsyncAnnotateFileRequest.
     */
    outputConfig?: Schema$GoogleCloudVisionV1p4beta1OutputConfig;
  }
  /**
   * Response to an async batch file annotation request.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1AsyncBatchAnnotateFilesResponse {
    /**
     * The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest.
     */
    responses?: Schema$GoogleCloudVisionV1p4beta1AsyncAnnotateFileResponse[];
  }
  /**
   * Response to an async batch image annotation request.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1AsyncBatchAnnotateImagesResponse {
    /**
     * The output location and metadata from AsyncBatchAnnotateImagesRequest.
     */
    outputConfig?: Schema$GoogleCloudVisionV1p4beta1OutputConfig;
  }
  /**
   * A list of file annotation responses.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1BatchAnnotateFilesResponse {
    /**
     * The list of file annotation responses, each response corresponding to each AnnotateFileRequest in BatchAnnotateFilesRequest.
     */
    responses?: Schema$GoogleCloudVisionV1p4beta1AnnotateFileResponse[];
  }
  /**
   * Metadata for the batch operations such as the current state.  This is included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1BatchOperationMetadata {
    /**
     * The time when the batch request is finished and google.longrunning.Operation.done is set to true.
     */
    endTime?: string | null;
    /**
     * The current state of the batch operation.
     */
    state?: string | null;
    /**
     * The time when the batch request was submitted to the server.
     */
    submitTime?: string | null;
  }
  /**
   * Logical element on the page.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1Block {
    /**
     * Detected block type (text, image etc) for this block.
     */
    blockType?: string | null;
    /**
     * The bounding box for the block. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the &#39;natural&#39; orientation. For example:  * when the text is horizontal it might look like:          0----1         |    |         3----2  * when it&#39;s rotated 180 degrees around the top-left corner it becomes:          2----3         |    |         1----0    and the vertex order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$GoogleCloudVisionV1p4beta1BoundingPoly;
    /**
     * Confidence of the OCR results on the block. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * List of paragraphs in this block (if this blocks is of type text).
     */
    paragraphs?: Schema$GoogleCloudVisionV1p4beta1Paragraph[];
    /**
     * Additional information detected for the block.
     */
    property?: Schema$GoogleCloudVisionV1p4beta1TextAnnotationTextProperty;
  }
  /**
   * A bounding polygon for the detected image annotation.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1BoundingPoly {
    /**
     * The bounding polygon normalized vertices.
     */
    normalizedVertices?: Schema$GoogleCloudVisionV1p4beta1NormalizedVertex[];
    /**
     * The bounding polygon vertices.
     */
    vertices?: Schema$GoogleCloudVisionV1p4beta1Vertex[];
  }
  /**
   * Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1ColorInfo {
    /**
     * RGB components of the color.
     */
    color?: Schema$Color;
    /**
     * The fraction of pixels the color occupies in the image. Value in range [0, 1].
     */
    pixelFraction?: number | null;
    /**
     * Image-specific score for this color. Value in range [0, 1].
     */
    score?: number | null;
  }
  /**
   * Single crop hint that is used to generate a new crop when serving an image.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1CropHint {
    /**
     * The bounding polygon for the crop region. The coordinates of the bounding box are in the original image&#39;s scale.
     */
    boundingPoly?: Schema$GoogleCloudVisionV1p4beta1BoundingPoly;
    /**
     * Confidence of this being a salient region.  Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Fraction of importance of this salient region with respect to the original image.
     */
    importanceFraction?: number | null;
  }
  /**
   * Set of crop hints that are used to generate new crops when serving images.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1CropHintsAnnotation {
    /**
     * Crop hint results.
     */
    cropHints?: Schema$GoogleCloudVisionV1p4beta1CropHint[];
  }
  /**
   * Set of dominant colors and their corresponding scores.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1DominantColorsAnnotation {
    /**
     * RGB color values with their score and pixel fraction.
     */
    colors?: Schema$GoogleCloudVisionV1p4beta1ColorInfo[];
  }
  /**
   * Set of detected entity features.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1EntityAnnotation {
    /**
     * Image region to which this entity belongs. Not produced for `LABEL_DETECTION` features.
     */
    boundingPoly?: Schema$GoogleCloudVisionV1p4beta1BoundingPoly;
    /**
     * **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the &quot;Eiffel Tower&quot; entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Entity textual description, expressed in its `locale` language.
     */
    description?: string | null;
    /**
     * The language code for the locale in which the entity textual `description` is expressed.
     */
    locale?: string | null;
    /**
     * The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks.
     */
    locations?: Schema$GoogleCloudVisionV1p4beta1LocationInfo[];
    /**
     * Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).
     */
    mid?: string | null;
    /**
     * Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.
     */
    properties?: Schema$GoogleCloudVisionV1p4beta1Property[];
    /**
     * Overall score of the result. Range [0, 1].
     */
    score?: number | null;
    /**
     * The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of &quot;tower&quot; is likely higher to an image containing the detected &quot;Eiffel Tower&quot; than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1].
     */
    topicality?: number | null;
  }
  /**
   * A face annotation object contains the results of face detection.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1FaceAnnotation {
    /**
     * Anger likelihood.
     */
    angerLikelihood?: string | null;
    /**
     * Blurred likelihood.
     */
    blurredLikelihood?: string | null;
    /**
     * The bounding polygon around the face. The coordinates of the bounding box are in the original image&#39;s scale. The bounding box is computed to &quot;frame&quot; the face in accordance with human expectations. It is based on the landmarker results. Note that one or more x and/or y coordinates may not be generated in the `BoundingPoly` (the polygon will be unbounded) if only a partial face appears in the image to be annotated.
     */
    boundingPoly?: Schema$GoogleCloudVisionV1p4beta1BoundingPoly;
    /**
     * Detection confidence. Range [0, 1].
     */
    detectionConfidence?: number | null;
    /**
     * The `fd_bounding_poly` bounding polygon is tighter than the `boundingPoly`, and encloses only the skin part of the face. Typically, it is used to eliminate the face from any image analysis that detects the &quot;amount of skin&quot; visible in an image. It is not based on the landmarker results, only on the initial face detection, hence the &lt;code&gt;fd&lt;/code&gt; (face detection) prefix.
     */
    fdBoundingPoly?: Schema$GoogleCloudVisionV1p4beta1BoundingPoly;
    /**
     * Headwear likelihood.
     */
    headwearLikelihood?: string | null;
    /**
     * Joy likelihood.
     */
    joyLikelihood?: string | null;
    /**
     * Face landmarking confidence. Range [0, 1].
     */
    landmarkingConfidence?: number | null;
    /**
     * Detected face landmarks.
     */
    landmarks?: Schema$GoogleCloudVisionV1p4beta1FaceAnnotationLandmark[];
    /**
     * Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180].
     */
    panAngle?: number | null;
    /**
     * Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180].
     */
    rollAngle?: number | null;
    /**
     * Sorrow likelihood.
     */
    sorrowLikelihood?: string | null;
    /**
     * Surprise likelihood.
     */
    surpriseLikelihood?: string | null;
    /**
     * Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image&#39;s horizontal plane. Range [-180,180].
     */
    tiltAngle?: number | null;
    /**
     * Under-exposed likelihood.
     */
    underExposedLikelihood?: string | null;
  }
  /**
   * A face-specific landmark (for example, a face feature).
   */
  export interface Schema$GoogleCloudVisionV1p4beta1FaceAnnotationLandmark {
    /**
     * Face landmark position.
     */
    position?: Schema$GoogleCloudVisionV1p4beta1Position;
    /**
     * Face landmark type.
     */
    type?: string | null;
  }
  /**
   * The Google Cloud Storage location where the output will be written to.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1GcsDestination {
    /**
     * Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide.  Examples:  *    File Prefix: gs://bucket-name/here/filenameprefix   The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with &quot;filenameprefix&quot;.  *    Directory Prefix: gs://bucket-name/some/location/   The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified.  If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files.
     */
    uri?: string | null;
  }
  /**
   * The Google Cloud Storage location where the input will be read from.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1GcsSource {
    /**
     * Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported.
     */
    uri?: string | null;
  }
  /**
   * If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1ImageAnnotationContext {
    /**
     * If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.
     */
    pageNumber?: number | null;
    /**
     * The URI of the file used to produce the image.
     */
    uri?: string | null;
  }
  /**
   * Stores image properties, such as dominant colors.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1ImageProperties {
    /**
     * If present, dominant colors completed successfully.
     */
    dominantColors?: Schema$GoogleCloudVisionV1p4beta1DominantColorsAnnotation;
  }
  /**
   * Stores image quality scores, could be aesthetic quality or technical quality.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1ImageQuality {
    /**
     * A score representing the aesthetic/technical quality of the image. The score is in range [0, 1]. Higher value corresponds to more professional looking photos. 0 means the image looks very bad, 1 means the image with very high quality.
     */
    qualityScore?: number | null;
  }
  /**
   * Response message for the `ImportProductSets` method.  This message is returned by the google.longrunning.Operations.GetOperation method in the returned google.longrunning.Operation.response field.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1ImportProductSetsResponse {
    /**
     * The list of reference_images that are imported successfully.
     */
    referenceImages?: Schema$GoogleCloudVisionV1p4beta1ReferenceImage[];
    /**
     * The rpc status for each ImportProductSet request, including both successes and errors.  The number of statuses here matches the number of lines in the csv file, and statuses[i] stores the success or failure status of processing the i-th line of the csv, starting from line 0.
     */
    statuses?: Schema$Status[];
  }
  /**
   * The desired input location and metadata.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1InputConfig {
    /**
     * File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64.  Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests.
     */
    content?: string | null;
    /**
     * The Google Cloud Storage location to read the input from.
     */
    gcsSource?: Schema$GoogleCloudVisionV1p4beta1GcsSource;
    /**
     * The type of the file. Currently only &quot;application/pdf&quot;, &quot;image/tiff&quot; and &quot;image/gif&quot; are supported. Wildcards are not supported.
     */
    mimeType?: string | null;
  }
  /**
   * Set of detected objects with bounding boxes.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1LocalizedObjectAnnotation {
    /**
     * Image region to which this object belongs. This must be populated.
     */
    boundingPoly?: Schema$GoogleCloudVisionV1p4beta1BoundingPoly;
    /**
     * The BCP-47 language code, such as &quot;en-US&quot; or &quot;sr-Latn&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string | null;
    /**
     * Object ID that should align with EntityAnnotation mid.
     */
    mid?: string | null;
    /**
     * Object name, expressed in its `language_code` language.
     */
    name?: string | null;
    /**
     * Score of the result. Range [0, 1].
     */
    score?: number | null;
  }
  /**
   * Detected entity location information.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1LocationInfo {
    /**
     * lat/long location coordinates.
     */
    latLng?: Schema$LatLng;
  }
  /**
   * A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1NormalizedVertex {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate.
     */
    y?: number | null;
  }
  /**
   * Contains metadata for the BatchAnnotateImages operation.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1OperationMetadata {
    /**
     * The time when the batch request was received.
     */
    createTime?: string | null;
    /**
     * Current state of the batch operation.
     */
    state?: string | null;
    /**
     * The time when the operation result was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * The desired output location and metadata.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1OutputConfig {
    /**
     * The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20.  For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`.  Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations.
     */
    batchSize?: number | null;
    /**
     * The Google Cloud Storage location to write the output(s) to.
     */
    gcsDestination?: Schema$GoogleCloudVisionV1p4beta1GcsDestination;
  }
  /**
   * Detected page from OCR.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1Page {
    /**
     * List of blocks of text, images etc on this page.
     */
    blocks?: Schema$GoogleCloudVisionV1p4beta1Block[];
    /**
     * Confidence of the OCR results on the page. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
     */
    height?: number | null;
    /**
     * Additional information detected on the page.
     */
    property?: Schema$GoogleCloudVisionV1p4beta1TextAnnotationTextProperty;
    /**
     * Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
     */
    width?: number | null;
  }
  /**
   * Structural unit of text representing a number of words in certain order.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1Paragraph {
    /**
     * The bounding box for the paragraph. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the &#39;natural&#39; orientation. For example:   * when the text is horizontal it might look like:      0----1      |    |      3----2   * when it&#39;s rotated 180 degrees around the top-left corner it becomes:      2----3      |    |      1----0   and the vertex order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$GoogleCloudVisionV1p4beta1BoundingPoly;
    /**
     * Confidence of the OCR results for the paragraph. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Additional information detected for the paragraph.
     */
    property?: Schema$GoogleCloudVisionV1p4beta1TextAnnotationTextProperty;
    /**
     * List of all words in this paragraph.
     */
    words?: Schema$GoogleCloudVisionV1p4beta1Word[];
  }
  /**
   * A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1Position {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate.
     */
    y?: number | null;
    /**
     * Z coordinate (or depth).
     */
    z?: number | null;
  }
  /**
   * A Product contains ReferenceImages.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1Product {
    /**
     * User-provided metadata to be stored with this product. Must be at most 4096 characters long.
     */
    description?: string | null;
    /**
     * The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long.
     */
    displayName?: string | null;
    /**
     * The resource name of the product.  Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`.  This field is ignored when creating a product.
     */
    name?: string | null;
    /**
     * The category for the product identified by the reference image. This should be either &quot;homegoods-v2&quot;, &quot;apparel-v2&quot;, or &quot;toys-v2&quot;. The legacy categories &quot;homegoods&quot;, &quot;apparel&quot;, and &quot;toys&quot; are still supported, but these should not be used for new products.  This field is immutable.
     */
    productCategory?: string | null;
    /**
     * Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels.  Note that integer values can be provided as strings, e.g. &quot;1199&quot;. Only strings with integer values can match a range-based restriction which is to be supported soon.  Multiple values can be assigned to the same key. One product may have up to 500 product_labels.  Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet.
     */
    productLabels?: Schema$GoogleCloudVisionV1p4beta1ProductKeyValue[];
  }
  /**
   * A product label represented as a key-value pair.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1ProductKeyValue {
    /**
     * The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.
     */
    key?: string | null;
    /**
     * The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.
     */
    value?: string | null;
  }
  /**
   * Results for a product search request.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1ProductSearchResults {
    /**
     * Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results.
     */
    indexTime?: string | null;
    /**
     * List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results.
     */
    productGroupedResults?: Schema$GoogleCloudVisionV1p4beta1ProductSearchResultsGroupedResult[];
    /**
     * List of results, one for each product match.
     */
    results?: Schema$GoogleCloudVisionV1p4beta1ProductSearchResultsResult[];
  }
  /**
   * Information about the products similar to a single product in a query image.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1ProductSearchResultsGroupedResult {
    /**
     * The bounding polygon around the product detected in the query image.
     */
    boundingPoly?: Schema$GoogleCloudVisionV1p4beta1BoundingPoly;
    /**
     * List of generic predictions for the object in the bounding box.
     */
    objectAnnotations?: Schema$GoogleCloudVisionV1p4beta1ProductSearchResultsObjectAnnotation[];
    /**
     * List of results, one for each product match.
     */
    results?: Schema$GoogleCloudVisionV1p4beta1ProductSearchResultsResult[];
  }
  /**
   * Prediction for what the object in the bounding box is.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1ProductSearchResultsObjectAnnotation {
    /**
     * The BCP-47 language code, such as &quot;en-US&quot; or &quot;sr-Latn&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string | null;
    /**
     * Object ID that should align with EntityAnnotation mid.
     */
    mid?: string | null;
    /**
     * Object name, expressed in its `language_code` language.
     */
    name?: string | null;
    /**
     * Score of the result. Range [0, 1].
     */
    score?: number | null;
  }
  /**
   * Information about a product.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1ProductSearchResultsResult {
    /**
     * The resource name of the image from the product that is the closest match to the query.
     */
    image?: string | null;
    /**
     * The Product.
     */
    product?: Schema$GoogleCloudVisionV1p4beta1Product;
    /**
     * A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).
     */
    score?: number | null;
  }
  /**
   * A `Property` consists of a user-supplied name/value pair.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1Property {
    /**
     * Name of the property.
     */
    name?: string | null;
    /**
     * Value of numeric properties.
     */
    uint64Value?: string | null;
    /**
     * Value of the property.
     */
    value?: string | null;
  }
  /**
   * Stores enhanced image bytes.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1QualityOptimizationResult {
    /**
     * Optimized image bytes.
     */
    image?: string | null;
    /**
     * Mime type of the output image.
     */
    mimeType?: string | null;
    /**
     * Required optimization type.
     */
    qualityOptimizationType?: string | null;
  }
  /**
   * A `ReferenceImage` represents a product image and its associated metadata, such as bounding boxes.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1ReferenceImage {
    /**
     * Bounding polygons around the areas of interest in the reference image. Optional. If this field is empty, the system will try to detect regions of interest. At most 10 bounding polygons will be used.  The provided shape is converted into a non-rotated rectangle. Once converted, the small edge of the rectangle must be greater than or equal to 300 pixels. The aspect ratio must be 1:4 or less (i.e. 1:3 is ok; 1:5 is not).
     */
    boundingPolys?: Schema$GoogleCloudVisionV1p4beta1BoundingPoly[];
    /**
     * The resource name of the reference image.  Format is:  `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`.  This field is ignored when creating a reference image.
     */
    name?: string | null;
    /**
     * The Google Cloud Storage URI of the reference image.  The URI must start with `gs://`.  Required.
     */
    uri?: string | null;
  }
  /**
   * Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).
   */
  export interface Schema$GoogleCloudVisionV1p4beta1SafeSearchAnnotation {
    /**
     * Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities.
     */
    adult?: string | null;
    /**
     * Confidence of adult_score. Range [0, 1]. 0 means not confident, 1 means very confident.
     */
    adultConfidence?: number | null;
    /**
     * Likelihood that this is a medical image.
     */
    medical?: string | null;
    /**
     * Confidence of medical_score. Range [0, 1]. 0 means not confident, 1 means very confident.
     */
    medicalConfidence?: number | null;
    /**
     * Confidence of nsfw_score. Range [0, 1]. 0 means not confident, 1 means very confident.
     */
    nsfwConfidence?: number | null;
    /**
     * Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas.
     */
    racy?: string | null;
    /**
     * Confidence of racy_score. Range [0, 1]. 0 means not confident, 1 means very confident.
     */
    racyConfidence?: number | null;
    /**
     * Spoof likelihood. The likelihood that an modification was made to the image&#39;s canonical version to make it appear funny or offensive.
     */
    spoof?: string | null;
    /**
     * Confidence of spoof_score. Range [0, 1]. 0 means not confident, 1 means very confident.
     */
    spoofConfidence?: number | null;
    /**
     * Likelihood that this image contains violent content.
     */
    violence?: string | null;
    /**
     * Confidence of violence_score. Range [0, 1]. 0 means not confident, 1 means very confident.
     */
    violenceConfidence?: number | null;
  }
  /**
   * A single symbol representation.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1Symbol {
    /**
     * The bounding box for the symbol. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the &#39;natural&#39; orientation. For example:   * when the text is horizontal it might look like:      0----1      |    |      3----2   * when it&#39;s rotated 180 degrees around the top-left corner it becomes:      2----3      |    |      1----0   and the vertex order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$GoogleCloudVisionV1p4beta1BoundingPoly;
    /**
     * Confidence of the OCR results for the symbol. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Additional information detected for the symbol.
     */
    property?: Schema$GoogleCloudVisionV1p4beta1TextAnnotationTextProperty;
    /**
     * The actual UTF-8 representation of the symbol.
     */
    text?: string | null;
  }
  /**
   * TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this:     TextAnnotation -&gt; Page -&gt; Block -&gt; Paragraph -&gt; Word -&gt; Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1TextAnnotation {
    /**
     * List of pages detected by OCR.
     */
    pages?: Schema$GoogleCloudVisionV1p4beta1Page[];
    /**
     * UTF-8 text detected on the pages.
     */
    text?: string | null;
  }
  /**
   * Detected start or end of a structural component.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1TextAnnotationDetectedBreak {
    /**
     * True if break prepends the element.
     */
    isPrefix?: boolean | null;
    /**
     * Detected break type.
     */
    type?: string | null;
  }
  /**
   * Detected language for a structural component.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1TextAnnotationDetectedLanguage {
    /**
     * Confidence of detected language. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * The BCP-47 language code, such as &quot;en-US&quot; or &quot;sr-Latn&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string | null;
  }
  /**
   * Additional information detected on the structural component.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1TextAnnotationTextProperty {
    /**
     * Detected start or end of a text segment.
     */
    detectedBreak?: Schema$GoogleCloudVisionV1p4beta1TextAnnotationDetectedBreak;
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudVisionV1p4beta1TextAnnotationDetectedLanguage[];
  }
  /**
   * A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1Vertex {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate.
     */
    y?: number | null;
  }
  /**
   * Relevant information for the image from the Internet.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1WebDetection {
    /**
     * The service&#39;s best guess as to the topic of the request image. Inferred from similar images on the open web.
     */
    bestGuessLabels?: Schema$GoogleCloudVisionV1p4beta1WebDetectionWebLabel[];
    /**
     * Fully matching images from the Internet. Can include resized copies of the query image.
     */
    fullMatchingImages?: Schema$GoogleCloudVisionV1p4beta1WebDetectionWebImage[];
    /**
     * Web pages containing the matching images from the Internet.
     */
    pagesWithMatchingImages?: Schema$GoogleCloudVisionV1p4beta1WebDetectionWebPage[];
    /**
     * Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.
     */
    partialMatchingImages?: Schema$GoogleCloudVisionV1p4beta1WebDetectionWebImage[];
    /**
     * The visually similar image results.
     */
    visuallySimilarImages?: Schema$GoogleCloudVisionV1p4beta1WebDetectionWebImage[];
    /**
     * Deduced entities from similar images on the Internet.
     */
    webEntities?: Schema$GoogleCloudVisionV1p4beta1WebDetectionWebEntity[];
  }
  /**
   * Entity deduced from similar images on the Internet.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1WebDetectionWebEntity {
    /**
     * Canonical description of the entity, in English.
     */
    description?: string | null;
    /**
     * Opaque entity ID.
     */
    entityId?: string | null;
    /**
     * Overall relevancy score for the entity. Not normalized and not comparable across different image queries.
     */
    score?: number | null;
  }
  /**
   * Metadata for online images.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1WebDetectionWebImage {
    /**
     * (Deprecated) Overall relevancy score for the image.
     */
    score?: number | null;
    /**
     * The result image URL.
     */
    url?: string | null;
  }
  /**
   * Label to provide extra metadata for the web detection.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1WebDetectionWebLabel {
    /**
     * Label for extra metadata.
     */
    label?: string | null;
    /**
     * The BCP-47 language code for `label`, such as &quot;en-US&quot; or &quot;sr-Latn&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string | null;
  }
  /**
   * Metadata for web pages.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1WebDetectionWebPage {
    /**
     * Fully matching images on the page. Can include resized copies of the query image.
     */
    fullMatchingImages?: Schema$GoogleCloudVisionV1p4beta1WebDetectionWebImage[];
    /**
     * Title for the web page, may contain HTML markups.
     */
    pageTitle?: string | null;
    /**
     * Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.
     */
    partialMatchingImages?: Schema$GoogleCloudVisionV1p4beta1WebDetectionWebImage[];
    /**
     * (Deprecated) Overall relevancy score for the web page.
     */
    score?: number | null;
    /**
     * The result web page URL.
     */
    url?: string | null;
  }
  /**
   * A word representation.
   */
  export interface Schema$GoogleCloudVisionV1p4beta1Word {
    /**
     * The bounding box for the word. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the &#39;natural&#39; orientation. For example:   * when the text is horizontal it might look like:      0----1      |    |      3----2   * when it&#39;s rotated 180 degrees around the top-left corner it becomes:      2----3      |    |      1----0   and the vertex order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$GoogleCloudVisionV1p4beta1BoundingPoly;
    /**
     * Confidence of the OCR results for the word. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Additional information detected for the word.
     */
    property?: Schema$GoogleCloudVisionV1p4beta1TextAnnotationTextProperty;
    /**
     * List of symbols in the word. The order of the symbols follows the natural reading order.
     */
    symbols?: Schema$GoogleCloudVisionV1p4beta1Symbol[];
  }
  /**
   * Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1AnnotateFileResponse {
    /**
     * If set, represents the error message for the failed request. The `responses` field will not be set in this case.
     */
    error?: Schema$Status;
    /**
     * Information about the file for which this response is generated.
     */
    inputConfig?: Schema$GoogleCloudVisionV1p5beta1InputConfig;
    /**
     * Individual responses to images found within the file. This field will be empty if the `error` field is set.
     */
    responses?: Schema$GoogleCloudVisionV1p5beta1AnnotateImageResponse[];
    /**
     * This field gives the total number of pages in the file.
     */
    totalPages?: number | null;
  }
  /**
   * Response to an image annotation request.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1AnnotateImageResponse {
    /**
     * If present, contextual information is needed to understand where this image comes from.
     */
    context?: Schema$GoogleCloudVisionV1p5beta1ImageAnnotationContext;
    /**
     * If present, crop hints have completed successfully.
     */
    cropHintsAnnotation?: Schema$GoogleCloudVisionV1p5beta1CropHintsAnnotation;
    /**
     * If set, represents the error message for the operation. Note that filled-in image annotations are guaranteed to be correct, even when `error` is set.
     */
    error?: Schema$Status;
    /**
     * If present, face detection has completed successfully.
     */
    faceAnnotations?: Schema$GoogleCloudVisionV1p5beta1FaceAnnotation[];
    /**
     * If present, text (OCR) detection or document (OCR) text detection has completed successfully. This annotation provides the structural hierarchy for the OCR detected text.
     */
    fullTextAnnotation?: Schema$GoogleCloudVisionV1p5beta1TextAnnotation;
    /**
     * If present, image properties were extracted successfully.
     */
    imagePropertiesAnnotation?: Schema$GoogleCloudVisionV1p5beta1ImageProperties;
    /**
     * If present, label detection has completed successfully.
     */
    labelAnnotations?: Schema$GoogleCloudVisionV1p5beta1EntityAnnotation[];
    /**
     * If present, landmark detection has completed successfully.
     */
    landmarkAnnotations?: Schema$GoogleCloudVisionV1p5beta1EntityAnnotation[];
    /**
     * If present, localized object detection has completed successfully. This will be sorted descending by confidence score.
     */
    localizedObjectAnnotations?: Schema$GoogleCloudVisionV1p5beta1LocalizedObjectAnnotation[];
    /**
     * If present, logo detection has completed successfully.
     */
    logoAnnotations?: Schema$GoogleCloudVisionV1p5beta1EntityAnnotation[];
    /**
     * If present, product search has completed successfully.
     */
    productSearchResults?: Schema$GoogleCloudVisionV1p5beta1ProductSearchResults;
    /**
     * If present, safe-search annotation has completed successfully.
     */
    safeSearchAnnotation?: Schema$GoogleCloudVisionV1p5beta1SafeSearchAnnotation;
    /**
     * If present, text (OCR) detection has completed successfully.
     */
    textAnnotations?: Schema$GoogleCloudVisionV1p5beta1EntityAnnotation[];
    /**
     * If present, web detection has completed successfully.
     */
    webDetection?: Schema$GoogleCloudVisionV1p5beta1WebDetection;
  }
  /**
   * The response for a single offline file annotation request.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1AsyncAnnotateFileResponse {
    /**
     * The output location and metadata from AsyncAnnotateFileRequest.
     */
    outputConfig?: Schema$GoogleCloudVisionV1p5beta1OutputConfig;
  }
  /**
   * Response to an async batch file annotation request.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1AsyncBatchAnnotateFilesResponse {
    /**
     * The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest.
     */
    responses?: Schema$GoogleCloudVisionV1p5beta1AsyncAnnotateFileResponse[];
  }
  /**
   * Response to an async batch image annotation request.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1AsyncBatchAnnotateImagesResponse {
    /**
     * The output location and metadata from AsyncBatchAnnotateImagesRequest.
     */
    outputConfig?: Schema$GoogleCloudVisionV1p5beta1OutputConfig;
  }
  /**
   * A list of file annotation responses.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1BatchAnnotateFilesResponse {
    /**
     * The list of file annotation responses, each response corresponding to each AnnotateFileRequest in BatchAnnotateFilesRequest.
     */
    responses?: Schema$GoogleCloudVisionV1p5beta1AnnotateFileResponse[];
  }
  /**
   * Metadata for the batch operations such as the current state.  This is included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1BatchOperationMetadata {
    /**
     * The time when the batch request is finished and google.longrunning.Operation.done is set to true.
     */
    endTime?: string | null;
    /**
     * The current state of the batch operation.
     */
    state?: string | null;
    /**
     * The time when the batch request was submitted to the server.
     */
    submitTime?: string | null;
  }
  /**
   * Logical element on the page.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1Block {
    /**
     * Detected block type (text, image etc) for this block.
     */
    blockType?: string | null;
    /**
     * The bounding box for the block. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the &#39;natural&#39; orientation. For example:  * when the text is horizontal it might look like:          0----1         |    |         3----2  * when it&#39;s rotated 180 degrees around the top-left corner it becomes:          2----3         |    |         1----0    and the vertex order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$GoogleCloudVisionV1p5beta1BoundingPoly;
    /**
     * Confidence of the OCR results on the block. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Detected pair for KEY_VALUE_PAIR block_type. This detection can be turned off by explicitly setting desired fields in DocumentParsingParams.block_filter.
     */
    keyValuePair?: Schema$GoogleCloudVisionV1p5beta1KeyValuePair;
    /**
     * All UTF-8 text detected in this block. This field is by default not returned unless specified in TextDetectionParams.block_filter or DocumentParsingParams.block_filter.
     */
    mergedText?: string | null;
    /**
     * List of paragraphs in this block (if this blocks is of type text).
     */
    paragraphs?: Schema$GoogleCloudVisionV1p5beta1Paragraph[];
    /**
     * Additional information detected for the block.
     */
    property?: Schema$GoogleCloudVisionV1p5beta1TextAnnotationTextProperty;
    /**
     * Detected table for TABLE block_type. This detection can be turned off by explicitly setting desired fields in DocumentParsingParams.block_filter.
     */
    table?: Schema$GoogleCloudVisionV1p5beta1Table;
  }
  /**
   * A bounding polygon for the detected image annotation.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1BoundingPoly {
    /**
     * The bounding polygon normalized vertices.
     */
    normalizedVertices?: Schema$GoogleCloudVisionV1p5beta1NormalizedVertex[];
    /**
     * The bounding polygon vertices.
     */
    vertices?: Schema$GoogleCloudVisionV1p5beta1Vertex[];
  }
  /**
   * Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1ColorInfo {
    /**
     * RGB components of the color.
     */
    color?: Schema$Color;
    /**
     * The fraction of pixels the color occupies in the image. Value in range [0, 1].
     */
    pixelFraction?: number | null;
    /**
     * Image-specific score for this color. Value in range [0, 1].
     */
    score?: number | null;
  }
  /**
   * Single crop hint that is used to generate a new crop when serving an image.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1CropHint {
    /**
     * The bounding polygon for the crop region. The coordinates of the bounding box are in the original image&#39;s scale.
     */
    boundingPoly?: Schema$GoogleCloudVisionV1p5beta1BoundingPoly;
    /**
     * Confidence of this being a salient region.  Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Fraction of importance of this salient region with respect to the original image.
     */
    importanceFraction?: number | null;
  }
  /**
   * Set of crop hints that are used to generate new crops when serving images.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1CropHintsAnnotation {
    /**
     * Crop hint results.
     */
    cropHints?: Schema$GoogleCloudVisionV1p5beta1CropHint[];
  }
  /**
   * Set of dominant colors and their corresponding scores.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1DominantColorsAnnotation {
    /**
     * RGB color values with their score and pixel fraction.
     */
    colors?: Schema$GoogleCloudVisionV1p5beta1ColorInfo[];
  }
  /**
   * Set of detected entity features.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1EntityAnnotation {
    /**
     * Image region to which this entity belongs. Not produced for `LABEL_DETECTION` features.
     */
    boundingPoly?: Schema$GoogleCloudVisionV1p5beta1BoundingPoly;
    /**
     * **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the &quot;Eiffel Tower&quot; entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Entity textual description, expressed in its `locale` language.
     */
    description?: string | null;
    /**
     * The language code for the locale in which the entity textual `description` is expressed.
     */
    locale?: string | null;
    /**
     * The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks.
     */
    locations?: Schema$GoogleCloudVisionV1p5beta1LocationInfo[];
    /**
     * Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).
     */
    mid?: string | null;
    /**
     * Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.
     */
    properties?: Schema$GoogleCloudVisionV1p5beta1Property[];
    /**
     * Overall score of the result. Range [0, 1].
     */
    score?: number | null;
    /**
     * The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of &quot;tower&quot; is likely higher to an image containing the detected &quot;Eiffel Tower&quot; than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1].
     */
    topicality?: number | null;
  }
  /**
   * A face annotation object contains the results of face detection.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1FaceAnnotation {
    /**
     * Anger likelihood.
     */
    angerLikelihood?: string | null;
    /**
     * Blurred likelihood.
     */
    blurredLikelihood?: string | null;
    /**
     * The bounding polygon around the face. The coordinates of the bounding box are in the original image&#39;s scale. The bounding box is computed to &quot;frame&quot; the face in accordance with human expectations. It is based on the landmarker results. Note that one or more x and/or y coordinates may not be generated in the `BoundingPoly` (the polygon will be unbounded) if only a partial face appears in the image to be annotated.
     */
    boundingPoly?: Schema$GoogleCloudVisionV1p5beta1BoundingPoly;
    /**
     * Detection confidence. Range [0, 1].
     */
    detectionConfidence?: number | null;
    /**
     * The `fd_bounding_poly` bounding polygon is tighter than the `boundingPoly`, and encloses only the skin part of the face. Typically, it is used to eliminate the face from any image analysis that detects the &quot;amount of skin&quot; visible in an image. It is not based on the landmarker results, only on the initial face detection, hence the &lt;code&gt;fd&lt;/code&gt; (face detection) prefix.
     */
    fdBoundingPoly?: Schema$GoogleCloudVisionV1p5beta1BoundingPoly;
    /**
     * Headwear likelihood.
     */
    headwearLikelihood?: string | null;
    /**
     * Joy likelihood.
     */
    joyLikelihood?: string | null;
    /**
     * Face landmarking confidence. Range [0, 1].
     */
    landmarkingConfidence?: number | null;
    /**
     * Detected face landmarks.
     */
    landmarks?: Schema$GoogleCloudVisionV1p5beta1FaceAnnotationLandmark[];
    /**
     * Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180].
     */
    panAngle?: number | null;
    /**
     * Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180].
     */
    rollAngle?: number | null;
    /**
     * Sorrow likelihood.
     */
    sorrowLikelihood?: string | null;
    /**
     * Surprise likelihood.
     */
    surpriseLikelihood?: string | null;
    /**
     * Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image&#39;s horizontal plane. Range [-180,180].
     */
    tiltAngle?: number | null;
    /**
     * Under-exposed likelihood.
     */
    underExposedLikelihood?: string | null;
  }
  /**
   * A face-specific landmark (for example, a face feature).
   */
  export interface Schema$GoogleCloudVisionV1p5beta1FaceAnnotationLandmark {
    /**
     * Face landmark position.
     */
    position?: Schema$GoogleCloudVisionV1p5beta1Position;
    /**
     * Face landmark type.
     */
    type?: string | null;
  }
  /**
   * The Google Cloud Storage location where the output will be written to.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1GcsDestination {
    /**
     * Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide.  Examples:  *    File Prefix: gs://bucket-name/here/filenameprefix   The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with &quot;filenameprefix&quot;.  *    Directory Prefix: gs://bucket-name/some/location/   The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified.  If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files.
     */
    uri?: string | null;
  }
  /**
   * The Google Cloud Storage location where the input will be read from.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1GcsSource {
    /**
     * Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported.
     */
    uri?: string | null;
  }
  /**
   * If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1ImageAnnotationContext {
    /**
     * If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.
     */
    pageNumber?: number | null;
    /**
     * The URI of the file used to produce the image.
     */
    uri?: string | null;
  }
  /**
   * Stores image properties, such as dominant colors.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1ImageProperties {
    /**
     * If present, dominant colors completed successfully.
     */
    dominantColors?: Schema$GoogleCloudVisionV1p5beta1DominantColorsAnnotation;
  }
  /**
   * Response message for the `ImportProductSets` method.  This message is returned by the google.longrunning.Operations.GetOperation method in the returned google.longrunning.Operation.response field.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1ImportProductSetsResponse {
    /**
     * The list of reference_images that are imported successfully.
     */
    referenceImages?: Schema$GoogleCloudVisionV1p5beta1ReferenceImage[];
    /**
     * The rpc status for each ImportProductSet request, including both successes and errors.  The number of statuses here matches the number of lines in the csv file, and statuses[i] stores the success or failure status of processing the i-th line of the csv, starting from line 0.
     */
    statuses?: Schema$Status[];
  }
  /**
   * The desired input location and metadata.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1InputConfig {
    /**
     * File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64.  Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests.
     */
    content?: string | null;
    /**
     * The Google Cloud Storage location to read the input from.
     */
    gcsSource?: Schema$GoogleCloudVisionV1p5beta1GcsSource;
    /**
     * The type of the file. Currently only &quot;application/pdf&quot;, &quot;image/tiff&quot; and &quot;image/gif&quot; are supported. Wildcards are not supported.
     */
    mimeType?: string | null;
  }
  /**
   * Proto for a key value pair.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1KeyValuePair {
    /**
     * The key string value.
     */
    key?: string | null;
    /**
     * Key block of the pair containing the normalized bounding box and key text.
     */
    keyBlock?: Schema$GoogleCloudVisionV1p5beta1Block;
    /**
     * Optional. The translation of key text if the text is not in English.
     */
    normalizedKey?: string | null;
    /**
     * Value block of the pair containing the normalized bounding box and value text, including potentially deeper structures within the value text.
     */
    valueBlock?: Schema$GoogleCloudVisionV1p5beta1Block;
    /**
     * Type of the value. Valid strings are the following:   &quot;generic&quot; - For generic text that is mapped to a value.  &quot;number&quot; - for numeric types  &quot;id&quot; - for generic identifiers.  &quot;currency&quot; - for currency values.  &quot;date&quot; - for dates.  &quot;time&quot; - for time and duration values.  &quot;date_range&quot; - for date ranges.  &quot;address&quot; - for address values (can be long).  &quot;person&quot; - for names of people or other personal identifiers.  &quot;phone&quot; - for phone numbers.
     */
    valueType?: string | null;
  }
  /**
   * Set of detected objects with bounding boxes.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1LocalizedObjectAnnotation {
    /**
     * Image region to which this object belongs. This must be populated.
     */
    boundingPoly?: Schema$GoogleCloudVisionV1p5beta1BoundingPoly;
    /**
     * The BCP-47 language code, such as &quot;en-US&quot; or &quot;sr-Latn&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string | null;
    /**
     * Object ID that should align with EntityAnnotation mid.
     */
    mid?: string | null;
    /**
     * Object name, expressed in its `language_code` language.
     */
    name?: string | null;
    /**
     * Score of the result. Range [0, 1].
     */
    score?: number | null;
  }
  /**
   * Detected entity location information.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1LocationInfo {
    /**
     * lat/long location coordinates.
     */
    latLng?: Schema$LatLng;
  }
  /**
   * A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1NormalizedVertex {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate.
     */
    y?: number | null;
  }
  /**
   * Contains metadata for the BatchAnnotateImages operation.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1OperationMetadata {
    /**
     * The time when the batch request was received.
     */
    createTime?: string | null;
    /**
     * Current state of the batch operation.
     */
    state?: string | null;
    /**
     * The time when the operation result was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * The desired output location and metadata.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1OutputConfig {
    /**
     * The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20.  For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`.  Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations.
     */
    batchSize?: number | null;
    /**
     * The Google Cloud Storage location to write the output(s) to.
     */
    gcsDestination?: Schema$GoogleCloudVisionV1p5beta1GcsDestination;
  }
  /**
   * Detected page from OCR.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1Page {
    /**
     * List of blocks of text, images etc on this page.
     */
    blocks?: Schema$GoogleCloudVisionV1p5beta1Block[];
    /**
     * Confidence of the OCR results on the page. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
     */
    height?: number | null;
    /**
     * All UTF-8 text detected in this page. This field is by default not returned unless specified in TextDetectionParams.page_filter.
     */
    mergedText?: string | null;
    /**
     * Additional information detected on the page.
     */
    property?: Schema$GoogleCloudVisionV1p5beta1TextAnnotationTextProperty;
    /**
     * Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
     */
    width?: number | null;
  }
  /**
   * Structural unit of text representing a number of words in certain order.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1Paragraph {
    /**
     * The bounding box for the paragraph. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the &#39;natural&#39; orientation. For example:   * when the text is horizontal it might look like:      0----1      |    |      3----2   * when it&#39;s rotated 180 degrees around the top-left corner it becomes:      2----3      |    |      1----0   and the vertex order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$GoogleCloudVisionV1p5beta1BoundingPoly;
    /**
     * Confidence of the OCR results for the paragraph. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * All UTF-8 text detected in this paragraph. This field is by default not returned unless specified in TextDetectionParams.paragraph_filter.
     */
    mergedText?: string | null;
    /**
     * Additional information detected for the paragraph.
     */
    property?: Schema$GoogleCloudVisionV1p5beta1TextAnnotationTextProperty;
    /**
     * List of all words in this paragraph.
     */
    words?: Schema$GoogleCloudVisionV1p5beta1Word[];
  }
  /**
   * A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1Position {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate.
     */
    y?: number | null;
    /**
     * Z coordinate (or depth).
     */
    z?: number | null;
  }
  /**
   * A Product contains ReferenceImages.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1Product {
    /**
     * User-provided metadata to be stored with this product. Must be at most 4096 characters long.
     */
    description?: string | null;
    /**
     * The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long.
     */
    displayName?: string | null;
    /**
     * The resource name of the product.  Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`.  This field is ignored when creating a product.
     */
    name?: string | null;
    /**
     * The category for the product identified by the reference image. This should be either &quot;homegoods-v2&quot;, &quot;apparel-v2&quot;, or &quot;toys-v2&quot;. The legacy categories &quot;homegoods&quot;, &quot;apparel&quot;, and &quot;toys&quot; are still supported, but these should not be used for new products.  This field is immutable.
     */
    productCategory?: string | null;
    /**
     * Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels.  Note that integer values can be provided as strings, e.g. &quot;1199&quot;. Only strings with integer values can match a range-based restriction which is to be supported soon.  Multiple values can be assigned to the same key. One product may have up to 500 product_labels.  Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet.
     */
    productLabels?: Schema$GoogleCloudVisionV1p5beta1ProductKeyValue[];
  }
  /**
   * A product label represented as a key-value pair.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1ProductKeyValue {
    /**
     * The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.
     */
    key?: string | null;
    /**
     * The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.
     */
    value?: string | null;
  }
  /**
   * Results for a product search request.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1ProductSearchResults {
    /**
     * Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results.
     */
    indexTime?: string | null;
    /**
     * List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results.
     */
    productGroupedResults?: Schema$GoogleCloudVisionV1p5beta1ProductSearchResultsGroupedResult[];
    /**
     * List of results, one for each product match.
     */
    results?: Schema$GoogleCloudVisionV1p5beta1ProductSearchResultsResult[];
  }
  /**
   * Information about the products similar to a single product in a query image.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1ProductSearchResultsGroupedResult {
    /**
     * The bounding polygon around the product detected in the query image.
     */
    boundingPoly?: Schema$GoogleCloudVisionV1p5beta1BoundingPoly;
    /**
     * List of generic predictions for the object in the bounding box.
     */
    objectAnnotations?: Schema$GoogleCloudVisionV1p5beta1ProductSearchResultsObjectAnnotation[];
    /**
     * List of results, one for each product match.
     */
    results?: Schema$GoogleCloudVisionV1p5beta1ProductSearchResultsResult[];
  }
  /**
   * Prediction for what the object in the bounding box is.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1ProductSearchResultsObjectAnnotation {
    /**
     * The BCP-47 language code, such as &quot;en-US&quot; or &quot;sr-Latn&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string | null;
    /**
     * Object ID that should align with EntityAnnotation mid.
     */
    mid?: string | null;
    /**
     * Object name, expressed in its `language_code` language.
     */
    name?: string | null;
    /**
     * Score of the result. Range [0, 1].
     */
    score?: number | null;
  }
  /**
   * Information about a product.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1ProductSearchResultsResult {
    /**
     * The resource name of the image from the product that is the closest match to the query.
     */
    image?: string | null;
    /**
     * The Product.
     */
    product?: Schema$GoogleCloudVisionV1p5beta1Product;
    /**
     * A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).
     */
    score?: number | null;
  }
  /**
   * A `Property` consists of a user-supplied name/value pair.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1Property {
    /**
     * Name of the property.
     */
    name?: string | null;
    /**
     * Value of numeric properties.
     */
    uint64Value?: string | null;
    /**
     * Value of the property.
     */
    value?: string | null;
  }
  /**
   * A `ReferenceImage` represents a product image and its associated metadata, such as bounding boxes.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1ReferenceImage {
    /**
     * Bounding polygons around the areas of interest in the reference image. Optional. If this field is empty, the system will try to detect regions of interest. At most 10 bounding polygons will be used.  The provided shape is converted into a non-rotated rectangle. Once converted, the small edge of the rectangle must be greater than or equal to 300 pixels. The aspect ratio must be 1:4 or less (i.e. 1:3 is ok; 1:5 is not).
     */
    boundingPolys?: Schema$GoogleCloudVisionV1p5beta1BoundingPoly[];
    /**
     * The resource name of the reference image.  Format is:  `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`.  This field is ignored when creating a reference image.
     */
    name?: string | null;
    /**
     * The Google Cloud Storage URI of the reference image.  The URI must start with `gs://`.  Required.
     */
    uri?: string | null;
  }
  /**
   * Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).
   */
  export interface Schema$GoogleCloudVisionV1p5beta1SafeSearchAnnotation {
    /**
     * Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities.
     */
    adult?: string | null;
    /**
     * Confidence of adult_score. Range [0, 1]. 0 means not confident, 1 means very confident.
     */
    adultConfidence?: number | null;
    /**
     * Likelihood that this is a medical image.
     */
    medical?: string | null;
    /**
     * Confidence of medical_score. Range [0, 1]. 0 means not confident, 1 means very confident.
     */
    medicalConfidence?: number | null;
    /**
     * Confidence of nsfw_score. Range [0, 1]. 0 means not confident, 1 means very confident.
     */
    nsfwConfidence?: number | null;
    /**
     * Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas.
     */
    racy?: string | null;
    /**
     * Confidence of racy_score. Range [0, 1]. 0 means not confident, 1 means very confident.
     */
    racyConfidence?: number | null;
    /**
     * Spoof likelihood. The likelihood that an modification was made to the image&#39;s canonical version to make it appear funny or offensive.
     */
    spoof?: string | null;
    /**
     * Confidence of spoof_score. Range [0, 1]. 0 means not confident, 1 means very confident.
     */
    spoofConfidence?: number | null;
    /**
     * Likelihood that this image contains violent content.
     */
    violence?: string | null;
    /**
     * Confidence of violence_score. Range [0, 1]. 0 means not confident, 1 means very confident.
     */
    violenceConfidence?: number | null;
  }
  /**
   * A single symbol representation.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1Symbol {
    /**
     * The bounding box for the symbol. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the &#39;natural&#39; orientation. For example:   * when the text is horizontal it might look like:      0----1      |    |      3----2   * when it&#39;s rotated 180 degrees around the top-left corner it becomes:      2----3      |    |      1----0   and the vertex order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$GoogleCloudVisionV1p5beta1BoundingPoly;
    /**
     * Confidence of the OCR results for the symbol. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Additional information detected for the symbol.
     */
    property?: Schema$GoogleCloudVisionV1p5beta1TextAnnotationTextProperty;
    /**
     * The actual UTF-8 representation of the symbol.
     */
    text?: string | null;
  }
  /**
   * A table representation similar to HTML table structure.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1Table {
    /**
     * Body rows of the table
     */
    bodyRows?: Schema$GoogleCloudVisionV1p5beta1TableTableRow[];
    /**
     * Header rows of the table
     */
    headerRows?: Schema$GoogleCloudVisionV1p5beta1TableTableRow[];
  }
  /**
   * A cell representation inside of tables.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1TableTableCell {
    /**
     * How many columns this cell spans.
     */
    colSpan?: number | null;
    /**
     * How many rows this cell spans.
     */
    rowSpan?: number | null;
    /**
     * The merged text value of this cell, omitting any deeper structural information unlike `text_block`. This is useful for simple cells.
     */
    text?: string | null;
    /**
     * Text block for this cell which also contains the normalized bounding box for the cell and deeper structures within a cell if present.
     */
    textBlock?: Schema$GoogleCloudVisionV1p5beta1Block;
  }
  /**
   * A row of table cells.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1TableTableRow {
    /**
     * Cells that make up this row.
     */
    cells?: Schema$GoogleCloudVisionV1p5beta1TableTableCell[];
  }
  /**
   * TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this:     TextAnnotation -&gt; Page -&gt; Block -&gt; Paragraph -&gt; Word -&gt; Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1TextAnnotation {
    /**
     * List of pages detected by OCR.
     */
    pages?: Schema$GoogleCloudVisionV1p5beta1Page[];
    /**
     * UTF-8 text detected on the pages.
     */
    text?: string | null;
  }
  /**
   * Detected start or end of a structural component.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1TextAnnotationDetectedBreak {
    /**
     * True if break prepends the element.
     */
    isPrefix?: boolean | null;
    /**
     * Detected break type.
     */
    type?: string | null;
  }
  /**
   * Detected language for a structural component.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1TextAnnotationDetectedLanguage {
    /**
     * Confidence of detected language. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * The BCP-47 language code, such as &quot;en-US&quot; or &quot;sr-Latn&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string | null;
  }
  /**
   * Additional information detected on the structural component.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1TextAnnotationTextProperty {
    /**
     * Detected start or end of a text segment.
     */
    detectedBreak?: Schema$GoogleCloudVisionV1p5beta1TextAnnotationDetectedBreak;
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$GoogleCloudVisionV1p5beta1TextAnnotationDetectedLanguage[];
  }
  /**
   * A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1Vertex {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate.
     */
    y?: number | null;
  }
  /**
   * Relevant information for the image from the Internet.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1WebDetection {
    /**
     * The service&#39;s best guess as to the topic of the request image. Inferred from similar images on the open web.
     */
    bestGuessLabels?: Schema$GoogleCloudVisionV1p5beta1WebDetectionWebLabel[];
    /**
     * Fully matching images from the Internet. Can include resized copies of the query image.
     */
    fullMatchingImages?: Schema$GoogleCloudVisionV1p5beta1WebDetectionWebImage[];
    /**
     * Web pages containing the matching images from the Internet.
     */
    pagesWithMatchingImages?: Schema$GoogleCloudVisionV1p5beta1WebDetectionWebPage[];
    /**
     * Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.
     */
    partialMatchingImages?: Schema$GoogleCloudVisionV1p5beta1WebDetectionWebImage[];
    /**
     * The visually similar image results.
     */
    visuallySimilarImages?: Schema$GoogleCloudVisionV1p5beta1WebDetectionWebImage[];
    /**
     * Deduced entities from similar images on the Internet.
     */
    webEntities?: Schema$GoogleCloudVisionV1p5beta1WebDetectionWebEntity[];
  }
  /**
   * Entity deduced from similar images on the Internet.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1WebDetectionWebEntity {
    /**
     * Canonical description of the entity, in English.
     */
    description?: string | null;
    /**
     * Opaque entity ID.
     */
    entityId?: string | null;
    /**
     * Overall relevancy score for the entity. Not normalized and not comparable across different image queries.
     */
    score?: number | null;
  }
  /**
   * Metadata for online images.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1WebDetectionWebImage {
    /**
     * (Deprecated) Overall relevancy score for the image.
     */
    score?: number | null;
    /**
     * The result image URL.
     */
    url?: string | null;
  }
  /**
   * Label to provide extra metadata for the web detection.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1WebDetectionWebLabel {
    /**
     * Label for extra metadata.
     */
    label?: string | null;
    /**
     * The BCP-47 language code for `label`, such as &quot;en-US&quot; or &quot;sr-Latn&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string | null;
  }
  /**
   * Metadata for web pages.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1WebDetectionWebPage {
    /**
     * Fully matching images on the page. Can include resized copies of the query image.
     */
    fullMatchingImages?: Schema$GoogleCloudVisionV1p5beta1WebDetectionWebImage[];
    /**
     * Title for the web page, may contain HTML markups.
     */
    pageTitle?: string | null;
    /**
     * Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.
     */
    partialMatchingImages?: Schema$GoogleCloudVisionV1p5beta1WebDetectionWebImage[];
    /**
     * (Deprecated) Overall relevancy score for the web page.
     */
    score?: number | null;
    /**
     * The result web page URL.
     */
    url?: string | null;
  }
  /**
   * A word representation.
   */
  export interface Schema$GoogleCloudVisionV1p5beta1Word {
    /**
     * The bounding box for the word. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the &#39;natural&#39; orientation. For example:   * when the text is horizontal it might look like:      0----1      |    |      3----2   * when it&#39;s rotated 180 degrees around the top-left corner it becomes:      2----3      |    |      1----0   and the vertex order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$GoogleCloudVisionV1p5beta1BoundingPoly;
    /**
     * Confidence of the OCR results for the word. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * All UTF-8 text detected in this word. This field is by default not returned unless specified in TextDetectionParams.word_filter.
     */
    mergedText?: string | null;
    /**
     * Additional information detected for the word.
     */
    property?: Schema$GoogleCloudVisionV1p5beta1TextAnnotationTextProperty;
    /**
     * List of symbols in the word. The order of the symbols follows the natural reading order.
     */
    symbols?: Schema$GoogleCloudVisionV1p5beta1Symbol[];
  }
  /**
   * Information about the products similar to a single product in a query image.
   */
  export interface Schema$GroupedResult {
    /**
     * The bounding polygon around the product detected in the query image.
     */
    boundingPoly?: Schema$BoundingPoly;
    /**
     * List of generic predictions for the object in the bounding box.
     */
    objectAnnotations?: Schema$ObjectAnnotation[];
    /**
     * List of results, one for each product match.
     */
    results?: Schema$Result[];
  }
  /**
   * Client image to perform Google Cloud Vision API tasks over.
   */
  export interface Schema$Image {
    /**
     * Image content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64.
     */
    content?: string | null;
    /**
     * Google Cloud Storage image location, or publicly-accessible image URL. If both `content` and `source` are provided for an image, `content` takes precedence and is used to perform the image annotation request.
     */
    source?: Schema$ImageSource;
  }
  /**
   * If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.
   */
  export interface Schema$ImageAnnotationContext {
    /**
     * If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.
     */
    pageNumber?: number | null;
    /**
     * The URI of the file used to produce the image.
     */
    uri?: string | null;
  }
  /**
   * Image context and/or feature-specific parameters.
   */
  export interface Schema$ImageContext {
    /**
     * Parameters for crop hints annotation request.
     */
    cropHintsParams?: Schema$CropHintsParams;
    /**
     * List of languages to use for TEXT_DETECTION. In most cases, an empty value yields the best results since it enables automatic language detection. For languages based on the Latin alphabet, setting `language_hints` is not needed. In rare cases, when the language of the text in the image is known, setting a hint will help get better results (although it will be a significant hindrance if the hint is wrong). Text detection returns an error if one or more of the specified languages is not one of the [supported languages](/vision/docs/languages).
     */
    languageHints?: string[] | null;
    /**
     * Not used.
     */
    latLongRect?: Schema$LatLongRect;
    /**
     * Parameters for product search.
     */
    productSearchParams?: Schema$ProductSearchParams;
    /**
     * Parameters for web detection.
     */
    webDetectionParams?: Schema$WebDetectionParams;
  }
  /**
   * Stores image properties, such as dominant colors.
   */
  export interface Schema$ImageProperties {
    /**
     * If present, dominant colors completed successfully.
     */
    dominantColors?: Schema$DominantColorsAnnotation;
  }
  /**
   * External image source (Google Cloud Storage or web URL image location).
   */
  export interface Schema$ImageSource {
    /**
     * **Use `image_uri` instead.**  The Google Cloud Storage  URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. See [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris) for more info.
     */
    gcsImageUri?: string | null;
    /**
     * The URI of the source image. Can be either:  1. A Google Cloud Storage URI of the form    `gs://bucket_name/object_name`. Object versioning is not supported. See    [Google Cloud Storage Request    URIs](https://cloud.google.com/storage/docs/reference-uris) for more    info.  2. A publicly-accessible image HTTP/HTTPS URL. When fetching images from    HTTP/HTTPS URLs, Google cannot guarantee that the request will be    completed. Your request may fail if the specified host denies the    request (e.g. due to request throttling or DOS prevention), or if Google    throttles requests to the site for abuse prevention. You should not    depend on externally-hosted images for production applications.  When both `gcs_image_uri` and `image_uri` are specified, `image_uri` takes precedence.
     */
    imageUri?: string | null;
  }
  /**
   * The Google Cloud Storage location for a csv file which preserves a list of ImportProductSetRequests in each line.
   */
  export interface Schema$ImportProductSetsGcsSource {
    /**
     * The Google Cloud Storage URI of the input csv file.  The URI must start with `gs://`.  The format of the input csv file should be one image per line. In each line, there are 8 columns.  1.  image-uri 2.  image-id 3.  product-set-id 4.  product-id 5.  product-category 6.  product-display-name 7.  labels 8.  bounding-poly  The `image-uri`, `product-set-id`, `product-id`, and `product-category` columns are required. All other columns are optional.  If the `ProductSet` or `Product` specified by the `product-set-id` and `product-id` values does not exist, then the system will create a new `ProductSet` or `Product` for the image. In this case, the `product-display-name` column refers to display_name, the `product-category` column refers to product_category, and the `labels` column refers to product_labels.  The `image-id` column is optional but must be unique if provided. If it is empty, the system will automatically assign a unique id to the image.  The `product-display-name` column is optional. If it is empty, the system sets the display_name field for the product to a space (&quot; &quot;). You can update the `display_name` later by using the API.  If a `Product` with the specified `product-id` already exists, then the system ignores the `product-display-name`, `product-category`, and `labels` columns.  The `labels` column (optional) is a line containing a list of comma-separated key-value pairs, in the following format:      &quot;key_1=value_1,key_2=value_2,...,key_n=value_n&quot;  The `bounding-poly` column (optional) identifies one region of interest from the image in the same manner as `CreateReferenceImage`. If you do not specify the `bounding-poly` column, then the system will try to detect regions of interest automatically.  At most one `bounding-poly` column is allowed per line. If the image contains multiple regions of interest, add a line to the CSV file that includes the same product information, and the `bounding-poly` values for each region of interest.  The `bounding-poly` column must contain an even number of comma-separated numbers, in the format &quot;p1_x,p1_y,p2_x,p2_y,...,pn_x,pn_y&quot;. Use non-negative integers for absolute bounding polygons, and float values in [0, 1] for normalized bounding polygons.  The system will resize the image if the image resolution is too large to process (larger than 20MP).
     */
    csvFileUri?: string | null;
  }
  /**
   * The input content for the `ImportProductSets` method.
   */
  export interface Schema$ImportProductSetsInputConfig {
    /**
     * The Google Cloud Storage location for a csv file which preserves a list of ImportProductSetRequests in each line.
     */
    gcsSource?: Schema$ImportProductSetsGcsSource;
  }
  /**
   * Request message for the `ImportProductSets` method.
   */
  export interface Schema$ImportProductSetsRequest {
    /**
     * The input content for the list of requests.
     */
    inputConfig?: Schema$ImportProductSetsInputConfig;
  }
  /**
   * Response message for the `ImportProductSets` method.  This message is returned by the google.longrunning.Operations.GetOperation method in the returned google.longrunning.Operation.response field.
   */
  export interface Schema$ImportProductSetsResponse {
    /**
     * The list of reference_images that are imported successfully.
     */
    referenceImages?: Schema$ReferenceImage[];
    /**
     * The rpc status for each ImportProductSet request, including both successes and errors.  The number of statuses here matches the number of lines in the csv file, and statuses[i] stores the success or failure status of processing the i-th line of the csv, starting from line 0.
     */
    statuses?: Schema$Status[];
  }
  /**
   * The desired input location and metadata.
   */
  export interface Schema$InputConfig {
    /**
     * File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64.  Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests.
     */
    content?: string | null;
    /**
     * The Google Cloud Storage location to read the input from.
     */
    gcsSource?: Schema$GcsSource;
    /**
     * The type of the file. Currently only &quot;application/pdf&quot;, &quot;image/tiff&quot; and &quot;image/gif&quot; are supported. Wildcards are not supported.
     */
    mimeType?: string | null;
  }
  /**
   * A product label represented as a key-value pair.
   */
  export interface Schema$KeyValue {
    /**
     * The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.
     */
    key?: string | null;
    /**
     * The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.
     */
    value?: string | null;
  }
  /**
   * A face-specific landmark (for example, a face feature).
   */
  export interface Schema$Landmark {
    /**
     * Face landmark position.
     */
    position?: Schema$Position;
    /**
     * Face landmark type.
     */
    type?: string | null;
  }
  /**
   * An object representing a latitude/longitude pair. This is expressed as a pair of doubles representing degrees latitude and degrees longitude. Unless specified otherwise, this must conform to the &lt;a href=&quot;http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf&quot;&gt;WGS84 standard&lt;/a&gt;. Values must be within normalized ranges.
   */
  export interface Schema$LatLng {
    /**
     * The latitude in degrees. It must be in the range [-90.0, +90.0].
     */
    latitude?: number | null;
    /**
     * The longitude in degrees. It must be in the range [-180.0, +180.0].
     */
    longitude?: number | null;
  }
  /**
   * Rectangle determined by min and max `LatLng` pairs.
   */
  export interface Schema$LatLongRect {
    /**
     * Max lat/long pair.
     */
    maxLatLng?: Schema$LatLng;
    /**
     * Min lat/long pair.
     */
    minLatLng?: Schema$LatLng;
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
   * Response message for the `ListProductSets` method.
   */
  export interface Schema$ListProductSetsResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * List of ProductSets.
     */
    productSets?: Schema$ProductSet[];
  }
  /**
   * Response message for the `ListProductsInProductSet` method.
   */
  export interface Schema$ListProductsInProductSetResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * The list of Products.
     */
    products?: Schema$Product[];
  }
  /**
   * Response message for the `ListProducts` method.
   */
  export interface Schema$ListProductsResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * List of products.
     */
    products?: Schema$Product[];
  }
  /**
   * Response message for the `ListReferenceImages` method.
   */
  export interface Schema$ListReferenceImagesResponse {
    /**
     * The next_page_token returned from a previous List request, if any.
     */
    nextPageToken?: string | null;
    /**
     * The maximum number of items to return. Default 10, maximum 100.
     */
    pageSize?: number | null;
    /**
     * The list of reference images.
     */
    referenceImages?: Schema$ReferenceImage[];
  }
  /**
   * Set of detected objects with bounding boxes.
   */
  export interface Schema$LocalizedObjectAnnotation {
    /**
     * Image region to which this object belongs. This must be populated.
     */
    boundingPoly?: Schema$BoundingPoly;
    /**
     * The BCP-47 language code, such as &quot;en-US&quot; or &quot;sr-Latn&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string | null;
    /**
     * Object ID that should align with EntityAnnotation mid.
     */
    mid?: string | null;
    /**
     * Object name, expressed in its `language_code` language.
     */
    name?: string | null;
    /**
     * Score of the result. Range [0, 1].
     */
    score?: number | null;
  }
  /**
   * Detected entity location information.
   */
  export interface Schema$LocationInfo {
    /**
     * lat/long location coordinates.
     */
    latLng?: Schema$LatLng;
  }
  /**
   * A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
   */
  export interface Schema$NormalizedVertex {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate.
     */
    y?: number | null;
  }
  /**
   * Prediction for what the object in the bounding box is.
   */
  export interface Schema$ObjectAnnotation {
    /**
     * The BCP-47 language code, such as &quot;en-US&quot; or &quot;sr-Latn&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string | null;
    /**
     * Object ID that should align with EntityAnnotation mid.
     */
    mid?: string | null;
    /**
     * Object name, expressed in its `language_code` language.
     */
    name?: string | null;
    /**
     * Score of the result. Range [0, 1].
     */
    score?: number | null;
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
   * Contains metadata for the BatchAnnotateImages operation.
   */
  export interface Schema$OperationMetadata {
    /**
     * The time when the batch request was received.
     */
    createTime?: string | null;
    /**
     * Current state of the batch operation.
     */
    state?: string | null;
    /**
     * The time when the operation result was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * The desired output location and metadata.
   */
  export interface Schema$OutputConfig {
    /**
     * The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20.  For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`.  Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations.
     */
    batchSize?: number | null;
    /**
     * The Google Cloud Storage location to write the output(s) to.
     */
    gcsDestination?: Schema$GcsDestination;
  }
  /**
   * Detected page from OCR.
   */
  export interface Schema$Page {
    /**
     * List of blocks of text, images etc on this page.
     */
    blocks?: Schema$Block[];
    /**
     * Confidence of the OCR results on the page. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
     */
    height?: number | null;
    /**
     * Additional information detected on the page.
     */
    property?: Schema$TextProperty;
    /**
     * Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
     */
    width?: number | null;
  }
  /**
   * Structural unit of text representing a number of words in certain order.
   */
  export interface Schema$Paragraph {
    /**
     * The bounding box for the paragraph. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the &#39;natural&#39; orientation. For example:   * when the text is horizontal it might look like:      0----1      |    |      3----2   * when it&#39;s rotated 180 degrees around the top-left corner it becomes:      2----3      |    |      1----0   and the vertex order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$BoundingPoly;
    /**
     * Confidence of the OCR results for the paragraph. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Additional information detected for the paragraph.
     */
    property?: Schema$TextProperty;
    /**
     * List of all words in this paragraph.
     */
    words?: Schema$Word[];
  }
  /**
   * A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image.
   */
  export interface Schema$Position {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate.
     */
    y?: number | null;
    /**
     * Z coordinate (or depth).
     */
    z?: number | null;
  }
  /**
   * A Product contains ReferenceImages.
   */
  export interface Schema$Product {
    /**
     * User-provided metadata to be stored with this product. Must be at most 4096 characters long.
     */
    description?: string | null;
    /**
     * The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long.
     */
    displayName?: string | null;
    /**
     * The resource name of the product.  Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`.  This field is ignored when creating a product.
     */
    name?: string | null;
    /**
     * The category for the product identified by the reference image. This should be either &quot;homegoods-v2&quot;, &quot;apparel-v2&quot;, or &quot;toys-v2&quot;. The legacy categories &quot;homegoods&quot;, &quot;apparel&quot;, and &quot;toys&quot; are still supported, but these should not be used for new products.  This field is immutable.
     */
    productCategory?: string | null;
    /**
     * Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels.  Note that integer values can be provided as strings, e.g. &quot;1199&quot;. Only strings with integer values can match a range-based restriction which is to be supported soon.  Multiple values can be assigned to the same key. One product may have up to 500 product_labels.  Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet.
     */
    productLabels?: Schema$KeyValue[];
  }
  /**
   * Parameters for a product search request.
   */
  export interface Schema$ProductSearchParams {
    /**
     * The bounding polygon around the area of interest in the image. Optional. If it is not specified, system discretion will be applied.
     */
    boundingPoly?: Schema$BoundingPoly;
    /**
     * The filtering expression. This can be used to restrict search results based on Product labels. We currently support an AND of OR of key-value expressions, where each expression within an OR must have the same key. An &#39;=&#39; should be used to connect the key and value.  For example, &quot;(color = red OR color = blue) AND brand = Google&quot; is acceptable, but &quot;(color = red OR brand = Google)&quot; is not acceptable. &quot;color: red&quot; is not acceptable because it uses a &#39;:&#39; instead of an &#39;=&#39;.
     */
    filter?: string | null;
    /**
     * The list of product categories to search in. Currently, we only consider the first category, and either &quot;homegoods-v2&quot;, &quot;apparel-v2&quot;, or &quot;toys-v2&quot; should be specified. The legacy categories &quot;homegoods&quot;, &quot;apparel&quot;, and &quot;toys&quot; are still supported but will be deprecated. For new products, please use &quot;homegoods-v2&quot;, &quot;apparel-v2&quot;, or &quot;toys-v2&quot; for better product search accuracy. It is recommended to migrate existing products to these categories as well.
     */
    productCategories?: string[] | null;
    /**
     * The resource name of a ProductSet to be searched for similar images.  Format is: `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`.
     */
    productSet?: string | null;
  }
  /**
   * Results for a product search request.
   */
  export interface Schema$ProductSearchResults {
    /**
     * Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results.
     */
    indexTime?: string | null;
    /**
     * List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results.
     */
    productGroupedResults?: Schema$GroupedResult[];
    /**
     * List of results, one for each product match.
     */
    results?: Schema$Result[];
  }
  /**
   * A ProductSet contains Products. A ProductSet can contain a maximum of 1 million reference images. If the limit is exceeded, periodic indexing will fail.
   */
  export interface Schema$ProductSet {
    /**
     * The user-provided name for this ProductSet. Must not be empty. Must be at most 4096 characters long.
     */
    displayName?: string | null;
    /**
     * Output only. If there was an error with indexing the product set, the field is populated.  This field is ignored when creating a ProductSet.
     */
    indexError?: Schema$Status;
    /**
     * Output only. The time at which this ProductSet was last indexed. Query results will reflect all updates before this time. If this ProductSet has never been indexed, this timestamp is the default value &quot;1970-01-01T00:00:00Z&quot;.  This field is ignored when creating a ProductSet.
     */
    indexTime?: string | null;
    /**
     * The resource name of the ProductSet.  Format is: `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`.  This field is ignored when creating a ProductSet.
     */
    name?: string | null;
  }
  /**
   * Config to control which ProductSet contains the Products to be deleted.
   */
  export interface Schema$ProductSetPurgeConfig {
    /**
     * The ProductSet that contains the Products to delete. If a Product is a member of product_set_id in addition to other ProductSets, the Product will still be deleted.
     */
    productSetId?: string | null;
  }
  /**
   * A `Property` consists of a user-supplied name/value pair.
   */
  export interface Schema$Property {
    /**
     * Name of the property.
     */
    name?: string | null;
    /**
     * Value of numeric properties.
     */
    uint64Value?: string | null;
    /**
     * Value of the property.
     */
    value?: string | null;
  }
  /**
   * Request message for the `PurgeProducts` method.
   */
  export interface Schema$PurgeProductsRequest {
    /**
     * If delete_orphan_products is true, all Products that are not in any ProductSet will be deleted.
     */
    deleteOrphanProducts?: boolean | null;
    /**
     * The default value is false. Override this value to true to actually perform the purge.
     */
    force?: boolean | null;
    /**
     * Specify which ProductSet contains the Products to be deleted.
     */
    productSetPurgeConfig?: Schema$ProductSetPurgeConfig;
  }
  /**
   * A `ReferenceImage` represents a product image and its associated metadata, such as bounding boxes.
   */
  export interface Schema$ReferenceImage {
    /**
     * Bounding polygons around the areas of interest in the reference image. Optional. If this field is empty, the system will try to detect regions of interest. At most 10 bounding polygons will be used.  The provided shape is converted into a non-rotated rectangle. Once converted, the small edge of the rectangle must be greater than or equal to 300 pixels. The aspect ratio must be 1:4 or less (i.e. 1:3 is ok; 1:5 is not).
     */
    boundingPolys?: Schema$BoundingPoly[];
    /**
     * The resource name of the reference image.  Format is:  `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`.  This field is ignored when creating a reference image.
     */
    name?: string | null;
    /**
     * The Google Cloud Storage URI of the reference image.  The URI must start with `gs://`.  Required.
     */
    uri?: string | null;
  }
  /**
   * Request message for the `RemoveProductFromProductSet` method.
   */
  export interface Schema$RemoveProductFromProductSetRequest {
    /**
     * The resource name for the Product to be removed from this ProductSet.  Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`
     */
    product?: string | null;
  }
  /**
   * Information about a product.
   */
  export interface Schema$Result {
    /**
     * The resource name of the image from the product that is the closest match to the query.
     */
    image?: string | null;
    /**
     * The Product.
     */
    product?: Schema$Product;
    /**
     * A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).
     */
    score?: number | null;
  }
  /**
   * Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).
   */
  export interface Schema$SafeSearchAnnotation {
    /**
     * Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities.
     */
    adult?: string | null;
    /**
     * Confidence of adult_score. Range [0, 1]. 0 means not confident, 1 means very confident.
     */
    adultConfidence?: number | null;
    /**
     * Likelihood that this is a medical image.
     */
    medical?: string | null;
    /**
     * Confidence of medical_score. Range [0, 1]. 0 means not confident, 1 means very confident.
     */
    medicalConfidence?: number | null;
    /**
     * Confidence of nsfw_score. Range [0, 1]. 0 means not confident, 1 means very confident.
     */
    nsfwConfidence?: number | null;
    /**
     * Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas.
     */
    racy?: string | null;
    /**
     * Confidence of racy_score. Range [0, 1]. 0 means not confident, 1 means very confident.
     */
    racyConfidence?: number | null;
    /**
     * Spoof likelihood. The likelihood that an modification was made to the image&#39;s canonical version to make it appear funny or offensive.
     */
    spoof?: string | null;
    /**
     * Confidence of spoof_score. Range [0, 1]. 0 means not confident, 1 means very confident.
     */
    spoofConfidence?: number | null;
    /**
     * Likelihood that this image contains violent content.
     */
    violence?: string | null;
    /**
     * Confidence of violence_score. Range [0, 1]. 0 means not confident, 1 means very confident.
     */
    violenceConfidence?: number | null;
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
   * A single symbol representation.
   */
  export interface Schema$Symbol {
    /**
     * The bounding box for the symbol. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the &#39;natural&#39; orientation. For example:   * when the text is horizontal it might look like:      0----1      |    |      3----2   * when it&#39;s rotated 180 degrees around the top-left corner it becomes:      2----3      |    |      1----0   and the vertex order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$BoundingPoly;
    /**
     * Confidence of the OCR results for the symbol. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Additional information detected for the symbol.
     */
    property?: Schema$TextProperty;
    /**
     * The actual UTF-8 representation of the symbol.
     */
    text?: string | null;
  }
  /**
   * TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this:     TextAnnotation -&gt; Page -&gt; Block -&gt; Paragraph -&gt; Word -&gt; Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.
   */
  export interface Schema$TextAnnotation {
    /**
     * List of pages detected by OCR.
     */
    pages?: Schema$Page[];
    /**
     * UTF-8 text detected on the pages.
     */
    text?: string | null;
  }
  /**
   * Additional information detected on the structural component.
   */
  export interface Schema$TextProperty {
    /**
     * Detected start or end of a text segment.
     */
    detectedBreak?: Schema$DetectedBreak;
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: Schema$DetectedLanguage[];
  }
  /**
   * A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.
   */
  export interface Schema$Vertex {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate.
     */
    y?: number | null;
  }
  /**
   * Relevant information for the image from the Internet.
   */
  export interface Schema$WebDetection {
    /**
     * The service&#39;s best guess as to the topic of the request image. Inferred from similar images on the open web.
     */
    bestGuessLabels?: Schema$WebLabel[];
    /**
     * Fully matching images from the Internet. Can include resized copies of the query image.
     */
    fullMatchingImages?: Schema$WebImage[];
    /**
     * Web pages containing the matching images from the Internet.
     */
    pagesWithMatchingImages?: Schema$WebPage[];
    /**
     * Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.
     */
    partialMatchingImages?: Schema$WebImage[];
    /**
     * The visually similar image results.
     */
    visuallySimilarImages?: Schema$WebImage[];
    /**
     * Deduced entities from similar images on the Internet.
     */
    webEntities?: Schema$WebEntity[];
  }
  /**
   * Parameters for web detection request.
   */
  export interface Schema$WebDetectionParams {
    /**
     * Whether to include results derived from the geo information in the image.
     */
    includeGeoResults?: boolean | null;
  }
  /**
   * Entity deduced from similar images on the Internet.
   */
  export interface Schema$WebEntity {
    /**
     * Canonical description of the entity, in English.
     */
    description?: string | null;
    /**
     * Opaque entity ID.
     */
    entityId?: string | null;
    /**
     * Overall relevancy score for the entity. Not normalized and not comparable across different image queries.
     */
    score?: number | null;
  }
  /**
   * Metadata for online images.
   */
  export interface Schema$WebImage {
    /**
     * (Deprecated) Overall relevancy score for the image.
     */
    score?: number | null;
    /**
     * The result image URL.
     */
    url?: string | null;
  }
  /**
   * Label to provide extra metadata for the web detection.
   */
  export interface Schema$WebLabel {
    /**
     * Label for extra metadata.
     */
    label?: string | null;
    /**
     * The BCP-47 language code for `label`, such as &quot;en-US&quot; or &quot;sr-Latn&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string | null;
  }
  /**
   * Metadata for web pages.
   */
  export interface Schema$WebPage {
    /**
     * Fully matching images on the page. Can include resized copies of the query image.
     */
    fullMatchingImages?: Schema$WebImage[];
    /**
     * Title for the web page, may contain HTML markups.
     */
    pageTitle?: string | null;
    /**
     * Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.
     */
    partialMatchingImages?: Schema$WebImage[];
    /**
     * (Deprecated) Overall relevancy score for the web page.
     */
    score?: number | null;
    /**
     * The result web page URL.
     */
    url?: string | null;
  }
  /**
   * A word representation.
   */
  export interface Schema$Word {
    /**
     * The bounding box for the word. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the &#39;natural&#39; orientation. For example:   * when the text is horizontal it might look like:      0----1      |    |      3----2   * when it&#39;s rotated 180 degrees around the top-left corner it becomes:      2----3      |    |      1----0   and the vertex order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$BoundingPoly;
    /**
     * Confidence of the OCR results for the word. Range [0, 1].
     */
    confidence?: number | null;
    /**
     * Additional information detected for the word.
     */
    property?: Schema$TextProperty;
    /**
     * List of symbols in the word. The order of the symbols follows the natural reading order.
     */
    symbols?: Schema$Symbol[];
  }

  export class Resource$Files {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * vision.files.annotate
     * @desc Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported.  This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Vision API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/vision
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var vision = google.vision('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   vision.files.annotate(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias vision.files.annotate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().BatchAnnotateFilesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    annotate(
      params?: Params$Resource$Files$Annotate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BatchAnnotateFilesResponse>;
    annotate(
      params: Params$Resource$Files$Annotate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchAnnotateFilesResponse>,
      callback: BodyResponseCallback<Schema$BatchAnnotateFilesResponse>
    ): void;
    annotate(
      params: Params$Resource$Files$Annotate,
      callback: BodyResponseCallback<Schema$BatchAnnotateFilesResponse>
    ): void;
    annotate(
      callback: BodyResponseCallback<Schema$BatchAnnotateFilesResponse>
    ): void;
    annotate(
      paramsOrCallback?:
        | Params$Resource$Files$Annotate
        | BodyResponseCallback<Schema$BatchAnnotateFilesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchAnnotateFilesResponse>,
      callback?: BodyResponseCallback<Schema$BatchAnnotateFilesResponse>
    ): void | GaxiosPromise<Schema$BatchAnnotateFilesResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Files$Annotate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Annotate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/files:annotate').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$BatchAnnotateFilesResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$BatchAnnotateFilesResponse>(parameters);
      }
    }

    /**
     * vision.files.asyncBatchAnnotate
     * @desc Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Vision API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/vision
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var vision = google.vision('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   vision.files.asyncBatchAnnotate(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias vision.files.asyncBatchAnnotate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().AsyncBatchAnnotateFilesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    asyncBatchAnnotate(
      params?: Params$Resource$Files$Asyncbatchannotate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    asyncBatchAnnotate(
      params: Params$Resource$Files$Asyncbatchannotate,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    asyncBatchAnnotate(
      params: Params$Resource$Files$Asyncbatchannotate,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    asyncBatchAnnotate(callback: BodyResponseCallback<Schema$Operation>): void;
    asyncBatchAnnotate(
      paramsOrCallback?:
        | Params$Resource$Files$Asyncbatchannotate
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Files$Asyncbatchannotate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Asyncbatchannotate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/files:asyncBatchAnnotate').replace(
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Files$Annotate extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchAnnotateFilesRequest;
  }
  export interface Params$Resource$Files$Asyncbatchannotate
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AsyncBatchAnnotateFilesRequest;
  }

  export class Resource$Images {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * vision.images.annotate
     * @desc Run image detection and annotation for a batch of images.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Vision API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/vision
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var vision = google.vision('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   vision.images.annotate(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias vision.images.annotate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().BatchAnnotateImagesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    annotate(
      params?: Params$Resource$Images$Annotate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BatchAnnotateImagesResponse>;
    annotate(
      params: Params$Resource$Images$Annotate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchAnnotateImagesResponse>,
      callback: BodyResponseCallback<Schema$BatchAnnotateImagesResponse>
    ): void;
    annotate(
      params: Params$Resource$Images$Annotate,
      callback: BodyResponseCallback<Schema$BatchAnnotateImagesResponse>
    ): void;
    annotate(
      callback: BodyResponseCallback<Schema$BatchAnnotateImagesResponse>
    ): void;
    annotate(
      paramsOrCallback?:
        | Params$Resource$Images$Annotate
        | BodyResponseCallback<Schema$BatchAnnotateImagesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchAnnotateImagesResponse>,
      callback?: BodyResponseCallback<Schema$BatchAnnotateImagesResponse>
    ): void | GaxiosPromise<Schema$BatchAnnotateImagesResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Images$Annotate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Images$Annotate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/images:annotate').replace(
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
        createAPIRequest<Schema$BatchAnnotateImagesResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$BatchAnnotateImagesResponse>(parameters);
      }
    }

    /**
     * vision.images.asyncBatchAnnotate
     * @desc Run asynchronous image detection and annotation for a list of images.  Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results).  This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Vision API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/vision
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var vision = google.vision('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   vision.images.asyncBatchAnnotate(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias vision.images.asyncBatchAnnotate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().AsyncBatchAnnotateImagesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    asyncBatchAnnotate(
      params?: Params$Resource$Images$Asyncbatchannotate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    asyncBatchAnnotate(
      params: Params$Resource$Images$Asyncbatchannotate,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    asyncBatchAnnotate(
      params: Params$Resource$Images$Asyncbatchannotate,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    asyncBatchAnnotate(callback: BodyResponseCallback<Schema$Operation>): void;
    asyncBatchAnnotate(
      paramsOrCallback?:
        | Params$Resource$Images$Asyncbatchannotate
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Images$Asyncbatchannotate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Images$Asyncbatchannotate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/images:asyncBatchAnnotate').replace(
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Images$Annotate extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchAnnotateImagesRequest;
  }
  export interface Params$Resource$Images$Asyncbatchannotate
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AsyncBatchAnnotateImagesRequest;
  }

  export class Resource$Locations {
    context: APIRequestContext;
    operations: Resource$Locations$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations = new Resource$Locations$Operations(this.context);
    }
  }

  export class Resource$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * vision.locations.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Vision API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/vision
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var vision = google.vision('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the operation resource.
     *     name: 'locations/my-location/operations/my-operation',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   vision.locations.operations.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias vision.locations.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Locations$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Locations$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Locations$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Locations$Operations$Get
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Locations$Operations$Get
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

  export class Resource$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * vision.operations.cancel
     * @desc Starts asynchronous cancellation on a long-running operation.  The server makes a best effort to cancel the operation, but success is not guaranteed.  If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Vision API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/vision
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var vision = google.vision('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the operation resource to be cancelled.
     *     name: 'operations/my-operation',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   vision.operations.cancel(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias vision.operations.cancel
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
      params?: Params$Resource$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Operations$Cancel
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
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
     * vision.operations.delete
     * @desc Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Vision API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/vision
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var vision = google.vision('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the operation resource to be deleted.
     *     name: 'operations/my-operation',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   vision.operations.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias vision.operations.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Operations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Operations$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * vision.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Vision API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/vision
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var vision = google.vision('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the operation resource.
     *     name: 'operations/my-operation',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   vision.operations.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias vision.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
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
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
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

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * vision.operations.list
     * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Vision API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/vision
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var vision = google.vision('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the operation's parent resource.
     *     name: 'operations',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var operationsPage = response['operations'];
     *     if (!operationsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < operationsPage.length; i++) {
     *       // TODO: Change code below to process each resource in `operationsPage`:
     *       console.log(JSON.stringify(operationsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       vision.operations.list(request, handlePage);
     *     }
     *   };
     *
     *   vision.operations.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias vision.operations.list
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
      params?: Params$Resource$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
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
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback?: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void | GaxiosPromise<Schema$ListOperationsResponse> {
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

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
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
        createAPIRequest<Schema$ListOperationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Operations$Cancel
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
  export interface Params$Resource$Operations$Delete
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
  export interface Params$Resource$Operations$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Operations$List extends StandardParameters {
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

  export class Resource$Projects {
    context: APIRequestContext;
    files: Resource$Projects$Files;
    images: Resource$Projects$Images;
    locations: Resource$Projects$Locations;
    operations: Resource$Projects$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.files = new Resource$Projects$Files(this.context);
      this.images = new Resource$Projects$Images(this.context);
      this.locations = new Resource$Projects$Locations(this.context);
      this.operations = new Resource$Projects$Operations(this.context);
    }
  }

  export class Resource$Projects$Files {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * vision.projects.files.annotate
     * @desc Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported.  This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
     * @alias vision.projects.files.annotate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Optional. Target project and location to make a call.  Format: `projects/{project-id}/locations/{location-id}`.  If no parent is specified, a region will be chosen automatically.  Supported location-ids:     `us`: USA country only,     `asia`: East asia areas, like Japan, Taiwan,     `eu`: The European Union.  Example: `projects/project-A/locations/eu`.
     * @param {().BatchAnnotateFilesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    annotate(
      params?: Params$Resource$Projects$Files$Annotate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BatchAnnotateFilesResponse>;
    annotate(
      params: Params$Resource$Projects$Files$Annotate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchAnnotateFilesResponse>,
      callback: BodyResponseCallback<Schema$BatchAnnotateFilesResponse>
    ): void;
    annotate(
      params: Params$Resource$Projects$Files$Annotate,
      callback: BodyResponseCallback<Schema$BatchAnnotateFilesResponse>
    ): void;
    annotate(
      callback: BodyResponseCallback<Schema$BatchAnnotateFilesResponse>
    ): void;
    annotate(
      paramsOrCallback?:
        | Params$Resource$Projects$Files$Annotate
        | BodyResponseCallback<Schema$BatchAnnotateFilesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchAnnotateFilesResponse>,
      callback?: BodyResponseCallback<Schema$BatchAnnotateFilesResponse>
    ): void | GaxiosPromise<Schema$BatchAnnotateFilesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Files$Annotate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Files$Annotate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/files:annotate').replace(
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
        createAPIRequest<Schema$BatchAnnotateFilesResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$BatchAnnotateFilesResponse>(parameters);
      }
    }

    /**
     * vision.projects.files.asyncBatchAnnotate
     * @desc Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).
     * @alias vision.projects.files.asyncBatchAnnotate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Optional. Target project and location to make a call.  Format: `projects/{project-id}/locations/{location-id}`.  If no parent is specified, a region will be chosen automatically.  Supported location-ids:     `us`: USA country only,     `asia`: East asia areas, like Japan, Taiwan,     `eu`: The European Union.  Example: `projects/project-A/locations/eu`.
     * @param {().AsyncBatchAnnotateFilesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    asyncBatchAnnotate(
      params?: Params$Resource$Projects$Files$Asyncbatchannotate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    asyncBatchAnnotate(
      params: Params$Resource$Projects$Files$Asyncbatchannotate,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    asyncBatchAnnotate(
      params: Params$Resource$Projects$Files$Asyncbatchannotate,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    asyncBatchAnnotate(callback: BodyResponseCallback<Schema$Operation>): void;
    asyncBatchAnnotate(
      paramsOrCallback?:
        | Params$Resource$Projects$Files$Asyncbatchannotate
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Files$Asyncbatchannotate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Files$Asyncbatchannotate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/files:asyncBatchAnnotate').replace(
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
  }

  export interface Params$Resource$Projects$Files$Annotate
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. Target project and location to make a call.  Format: `projects/{project-id}/locations/{location-id}`.  If no parent is specified, a region will be chosen automatically.  Supported location-ids:     `us`: USA country only,     `asia`: East asia areas, like Japan, Taiwan,     `eu`: The European Union.  Example: `projects/project-A/locations/eu`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchAnnotateFilesRequest;
  }
  export interface Params$Resource$Projects$Files$Asyncbatchannotate
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. Target project and location to make a call.  Format: `projects/{project-id}/locations/{location-id}`.  If no parent is specified, a region will be chosen automatically.  Supported location-ids:     `us`: USA country only,     `asia`: East asia areas, like Japan, Taiwan,     `eu`: The European Union.  Example: `projects/project-A/locations/eu`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AsyncBatchAnnotateFilesRequest;
  }

  export class Resource$Projects$Images {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * vision.projects.images.annotate
     * @desc Run image detection and annotation for a batch of images.
     * @alias vision.projects.images.annotate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Optional. Target project and location to make a call.  Format: `projects/{project-id}/locations/{location-id}`.  If no parent is specified, a region will be chosen automatically.  Supported location-ids:     `us`: USA country only,     `asia`: East asia areas, like Japan, Taiwan,     `eu`: The European Union.  Example: `projects/project-A/locations/eu`.
     * @param {().BatchAnnotateImagesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    annotate(
      params?: Params$Resource$Projects$Images$Annotate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BatchAnnotateImagesResponse>;
    annotate(
      params: Params$Resource$Projects$Images$Annotate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchAnnotateImagesResponse>,
      callback: BodyResponseCallback<Schema$BatchAnnotateImagesResponse>
    ): void;
    annotate(
      params: Params$Resource$Projects$Images$Annotate,
      callback: BodyResponseCallback<Schema$BatchAnnotateImagesResponse>
    ): void;
    annotate(
      callback: BodyResponseCallback<Schema$BatchAnnotateImagesResponse>
    ): void;
    annotate(
      paramsOrCallback?:
        | Params$Resource$Projects$Images$Annotate
        | BodyResponseCallback<Schema$BatchAnnotateImagesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchAnnotateImagesResponse>,
      callback?: BodyResponseCallback<Schema$BatchAnnotateImagesResponse>
    ): void | GaxiosPromise<Schema$BatchAnnotateImagesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Images$Annotate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Images$Annotate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/images:annotate').replace(
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
        createAPIRequest<Schema$BatchAnnotateImagesResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$BatchAnnotateImagesResponse>(parameters);
      }
    }

    /**
     * vision.projects.images.asyncBatchAnnotate
     * @desc Run asynchronous image detection and annotation for a list of images.  Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results).  This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.
     * @alias vision.projects.images.asyncBatchAnnotate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Optional. Target project and location to make a call.  Format: `projects/{project-id}/locations/{location-id}`.  If no parent is specified, a region will be chosen automatically.  Supported location-ids:     `us`: USA country only,     `asia`: East asia areas, like Japan, Taiwan,     `eu`: The European Union.  Example: `projects/project-A/locations/eu`.
     * @param {().AsyncBatchAnnotateImagesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    asyncBatchAnnotate(
      params?: Params$Resource$Projects$Images$Asyncbatchannotate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    asyncBatchAnnotate(
      params: Params$Resource$Projects$Images$Asyncbatchannotate,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    asyncBatchAnnotate(
      params: Params$Resource$Projects$Images$Asyncbatchannotate,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    asyncBatchAnnotate(callback: BodyResponseCallback<Schema$Operation>): void;
    asyncBatchAnnotate(
      paramsOrCallback?:
        | Params$Resource$Projects$Images$Asyncbatchannotate
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Images$Asyncbatchannotate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Images$Asyncbatchannotate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/images:asyncBatchAnnotate').replace(
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
  }

  export interface Params$Resource$Projects$Images$Annotate
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. Target project and location to make a call.  Format: `projects/{project-id}/locations/{location-id}`.  If no parent is specified, a region will be chosen automatically.  Supported location-ids:     `us`: USA country only,     `asia`: East asia areas, like Japan, Taiwan,     `eu`: The European Union.  Example: `projects/project-A/locations/eu`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchAnnotateImagesRequest;
  }
  export interface Params$Resource$Projects$Images$Asyncbatchannotate
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. Target project and location to make a call.  Format: `projects/{project-id}/locations/{location-id}`.  If no parent is specified, a region will be chosen automatically.  Supported location-ids:     `us`: USA country only,     `asia`: East asia areas, like Japan, Taiwan,     `eu`: The European Union.  Example: `projects/project-A/locations/eu`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AsyncBatchAnnotateImagesRequest;
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    files: Resource$Projects$Locations$Files;
    images: Resource$Projects$Locations$Images;
    operations: Resource$Projects$Locations$Operations;
    products: Resource$Projects$Locations$Products;
    productSets: Resource$Projects$Locations$Productsets;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.files = new Resource$Projects$Locations$Files(this.context);
      this.images = new Resource$Projects$Locations$Images(this.context);
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
      this.products = new Resource$Projects$Locations$Products(this.context);
      this.productSets = new Resource$Projects$Locations$Productsets(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations$Files {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * vision.projects.locations.files.annotate
     * @desc Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported.  This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
     * @alias vision.projects.locations.files.annotate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Optional. Target project and location to make a call.  Format: `projects/{project-id}/locations/{location-id}`.  If no parent is specified, a region will be chosen automatically.  Supported location-ids:     `us`: USA country only,     `asia`: East asia areas, like Japan, Taiwan,     `eu`: The European Union.  Example: `projects/project-A/locations/eu`.
     * @param {().BatchAnnotateFilesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    annotate(
      params?: Params$Resource$Projects$Locations$Files$Annotate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BatchAnnotateFilesResponse>;
    annotate(
      params: Params$Resource$Projects$Locations$Files$Annotate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchAnnotateFilesResponse>,
      callback: BodyResponseCallback<Schema$BatchAnnotateFilesResponse>
    ): void;
    annotate(
      params: Params$Resource$Projects$Locations$Files$Annotate,
      callback: BodyResponseCallback<Schema$BatchAnnotateFilesResponse>
    ): void;
    annotate(
      callback: BodyResponseCallback<Schema$BatchAnnotateFilesResponse>
    ): void;
    annotate(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Files$Annotate
        | BodyResponseCallback<Schema$BatchAnnotateFilesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchAnnotateFilesResponse>,
      callback?: BodyResponseCallback<Schema$BatchAnnotateFilesResponse>
    ): void | GaxiosPromise<Schema$BatchAnnotateFilesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Files$Annotate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Files$Annotate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/files:annotate').replace(
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
        createAPIRequest<Schema$BatchAnnotateFilesResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$BatchAnnotateFilesResponse>(parameters);
      }
    }

    /**
     * vision.projects.locations.files.asyncBatchAnnotate
     * @desc Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).
     * @alias vision.projects.locations.files.asyncBatchAnnotate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Optional. Target project and location to make a call.  Format: `projects/{project-id}/locations/{location-id}`.  If no parent is specified, a region will be chosen automatically.  Supported location-ids:     `us`: USA country only,     `asia`: East asia areas, like Japan, Taiwan,     `eu`: The European Union.  Example: `projects/project-A/locations/eu`.
     * @param {().AsyncBatchAnnotateFilesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    asyncBatchAnnotate(
      params?: Params$Resource$Projects$Locations$Files$Asyncbatchannotate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    asyncBatchAnnotate(
      params: Params$Resource$Projects$Locations$Files$Asyncbatchannotate,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    asyncBatchAnnotate(
      params: Params$Resource$Projects$Locations$Files$Asyncbatchannotate,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    asyncBatchAnnotate(callback: BodyResponseCallback<Schema$Operation>): void;
    asyncBatchAnnotate(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Files$Asyncbatchannotate
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Files$Asyncbatchannotate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Files$Asyncbatchannotate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/files:asyncBatchAnnotate').replace(
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
  }

  export interface Params$Resource$Projects$Locations$Files$Annotate
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. Target project and location to make a call.  Format: `projects/{project-id}/locations/{location-id}`.  If no parent is specified, a region will be chosen automatically.  Supported location-ids:     `us`: USA country only,     `asia`: East asia areas, like Japan, Taiwan,     `eu`: The European Union.  Example: `projects/project-A/locations/eu`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchAnnotateFilesRequest;
  }
  export interface Params$Resource$Projects$Locations$Files$Asyncbatchannotate
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. Target project and location to make a call.  Format: `projects/{project-id}/locations/{location-id}`.  If no parent is specified, a region will be chosen automatically.  Supported location-ids:     `us`: USA country only,     `asia`: East asia areas, like Japan, Taiwan,     `eu`: The European Union.  Example: `projects/project-A/locations/eu`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AsyncBatchAnnotateFilesRequest;
  }

  export class Resource$Projects$Locations$Images {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * vision.projects.locations.images.annotate
     * @desc Run image detection and annotation for a batch of images.
     * @alias vision.projects.locations.images.annotate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Optional. Target project and location to make a call.  Format: `projects/{project-id}/locations/{location-id}`.  If no parent is specified, a region will be chosen automatically.  Supported location-ids:     `us`: USA country only,     `asia`: East asia areas, like Japan, Taiwan,     `eu`: The European Union.  Example: `projects/project-A/locations/eu`.
     * @param {().BatchAnnotateImagesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    annotate(
      params?: Params$Resource$Projects$Locations$Images$Annotate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BatchAnnotateImagesResponse>;
    annotate(
      params: Params$Resource$Projects$Locations$Images$Annotate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchAnnotateImagesResponse>,
      callback: BodyResponseCallback<Schema$BatchAnnotateImagesResponse>
    ): void;
    annotate(
      params: Params$Resource$Projects$Locations$Images$Annotate,
      callback: BodyResponseCallback<Schema$BatchAnnotateImagesResponse>
    ): void;
    annotate(
      callback: BodyResponseCallback<Schema$BatchAnnotateImagesResponse>
    ): void;
    annotate(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Images$Annotate
        | BodyResponseCallback<Schema$BatchAnnotateImagesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchAnnotateImagesResponse>,
      callback?: BodyResponseCallback<Schema$BatchAnnotateImagesResponse>
    ): void | GaxiosPromise<Schema$BatchAnnotateImagesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Images$Annotate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Images$Annotate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/images:annotate').replace(
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
        createAPIRequest<Schema$BatchAnnotateImagesResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$BatchAnnotateImagesResponse>(parameters);
      }
    }

    /**
     * vision.projects.locations.images.asyncBatchAnnotate
     * @desc Run asynchronous image detection and annotation for a list of images.  Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results).  This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.
     * @alias vision.projects.locations.images.asyncBatchAnnotate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Optional. Target project and location to make a call.  Format: `projects/{project-id}/locations/{location-id}`.  If no parent is specified, a region will be chosen automatically.  Supported location-ids:     `us`: USA country only,     `asia`: East asia areas, like Japan, Taiwan,     `eu`: The European Union.  Example: `projects/project-A/locations/eu`.
     * @param {().AsyncBatchAnnotateImagesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    asyncBatchAnnotate(
      params?: Params$Resource$Projects$Locations$Images$Asyncbatchannotate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    asyncBatchAnnotate(
      params: Params$Resource$Projects$Locations$Images$Asyncbatchannotate,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    asyncBatchAnnotate(
      params: Params$Resource$Projects$Locations$Images$Asyncbatchannotate,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    asyncBatchAnnotate(callback: BodyResponseCallback<Schema$Operation>): void;
    asyncBatchAnnotate(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Images$Asyncbatchannotate
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Images$Asyncbatchannotate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Images$Asyncbatchannotate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/images:asyncBatchAnnotate').replace(
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
  }

  export interface Params$Resource$Projects$Locations$Images$Annotate
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. Target project and location to make a call.  Format: `projects/{project-id}/locations/{location-id}`.  If no parent is specified, a region will be chosen automatically.  Supported location-ids:     `us`: USA country only,     `asia`: East asia areas, like Japan, Taiwan,     `eu`: The European Union.  Example: `projects/project-A/locations/eu`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchAnnotateImagesRequest;
  }
  export interface Params$Resource$Projects$Locations$Images$Asyncbatchannotate
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. Target project and location to make a call.  Format: `projects/{project-id}/locations/{location-id}`.  If no parent is specified, a region will be chosen automatically.  Supported location-ids:     `us`: USA country only,     `asia`: East asia areas, like Japan, Taiwan,     `eu`: The European Union.  Example: `projects/project-A/locations/eu`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AsyncBatchAnnotateImagesRequest;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * vision.projects.locations.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Vision API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/vision
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var vision = google.vision('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the operation resource.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   vision.projects.locations.operations.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias vision.projects.locations.operations.get
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

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
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

  export class Resource$Projects$Locations$Products {
    context: APIRequestContext;
    referenceImages: Resource$Projects$Locations$Products$Referenceimages;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.referenceImages = new Resource$Projects$Locations$Products$Referenceimages(
        this.context
      );
    }

    /**
     * vision.projects.locations.products.create
     * @desc Creates and returns a new product resource.  Possible errors:  * Returns INVALID_ARGUMENT if display_name is missing or longer than 4096   characters. * Returns INVALID_ARGUMENT if description is longer than 4096 characters. * Returns INVALID_ARGUMENT if product_category is missing or invalid.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Vision API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/vision
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var vision = google.vision('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The project in which the Product should be created.
     *     // Format is
     *     // `projects/PROJECT_ID/locations/LOC_ID`.
     *     parent: 'projects/my-project/locations/my-location',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   vision.projects.locations.products.create(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias vision.projects.locations.products.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The project in which the Product should be created.  Format is `projects/PROJECT_ID/locations/LOC_ID`.
     * @param {string=} params.productId A user-supplied resource id for this Product. If set, the server will attempt to use this value as the resource id. If it is already in use, an error is returned with code ALREADY_EXISTS. Must be at most 128 characters long. It cannot contain the character `/`.
     * @param {().Product} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Products$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Product>;
    create(
      params: Params$Resource$Projects$Locations$Products$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Product>,
      callback: BodyResponseCallback<Schema$Product>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Products$Create,
      callback: BodyResponseCallback<Schema$Product>
    ): void;
    create(callback: BodyResponseCallback<Schema$Product>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Products$Create
        | BodyResponseCallback<Schema$Product>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Product>,
      callback?: BodyResponseCallback<Schema$Product>
    ): void | GaxiosPromise<Schema$Product> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Products$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Products$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/products').replace(
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
        createAPIRequest<Schema$Product>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Product>(parameters);
      }
    }

    /**
     * vision.projects.locations.products.delete
     * @desc Permanently deletes a product and its reference images.  Metadata of the product and all its images will be deleted right away, but search queries against ProductSets containing the product may still work until all related caches are refreshed.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Vision API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/vision
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var vision = google.vision('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Resource name of product to delete.
     *     // Format is:
     *     // `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`
     *     name: 'projects/my-project/locations/my-location/products/my-product',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   vision.projects.locations.products.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias vision.projects.locations.products.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of product to delete.  Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Products$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Products$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Products$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Products$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Products$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Products$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * vision.projects.locations.products.get
     * @desc Gets information associated with a Product.  Possible errors:  * Returns NOT_FOUND if the Product does not exist.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Vision API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/vision
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var vision = google.vision('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Resource name of the Product to get.
     *     // Format is:
     *     // `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`
     *     name: 'projects/my-project/locations/my-location/products/my-product',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   vision.projects.locations.products.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias vision.projects.locations.products.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of the Product to get.  Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Products$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Product>;
    get(
      params: Params$Resource$Projects$Locations$Products$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Product>,
      callback: BodyResponseCallback<Schema$Product>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Products$Get,
      callback: BodyResponseCallback<Schema$Product>
    ): void;
    get(callback: BodyResponseCallback<Schema$Product>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Products$Get
        | BodyResponseCallback<Schema$Product>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Product>,
      callback?: BodyResponseCallback<Schema$Product>
    ): void | GaxiosPromise<Schema$Product> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Products$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Products$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
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
        createAPIRequest<Schema$Product>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Product>(parameters);
      }
    }

    /**
     * vision.projects.locations.products.list
     * @desc Lists products in an unspecified order.  Possible errors:  * Returns INVALID_ARGUMENT if page_size is greater than 100 or less than 1.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Vision API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/vision
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var vision = google.vision('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The project OR ProductSet from which Products should be listed.
     *     // Format:
     *     // `projects/PROJECT_ID/locations/LOC_ID`
     *     parent: 'projects/my-project/locations/my-location',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var productsPage = response['products'];
     *     if (!productsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < productsPage.length; i++) {
     *       // TODO: Change code below to process each resource in `productsPage`:
     *       console.log(JSON.stringify(productsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       vision.projects.locations.products.list(request, handlePage);
     *     }
     *   };
     *
     *   vision.projects.locations.products.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias vision.projects.locations.products.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of items to return. Default 10, maximum 100.
     * @param {string=} params.pageToken The next_page_token returned from a previous List request, if any.
     * @param {string} params.parent The project OR ProductSet from which Products should be listed.  Format: `projects/PROJECT_ID/locations/LOC_ID`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Products$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListProductsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Products$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListProductsResponse>,
      callback: BodyResponseCallback<Schema$ListProductsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Products$List,
      callback: BodyResponseCallback<Schema$ListProductsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListProductsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Products$List
        | BodyResponseCallback<Schema$ListProductsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListProductsResponse>,
      callback?: BodyResponseCallback<Schema$ListProductsResponse>
    ): void | GaxiosPromise<Schema$ListProductsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Products$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Products$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/products').replace(
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
        createAPIRequest<Schema$ListProductsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListProductsResponse>(parameters);
      }
    }

    /**
     * vision.projects.locations.products.patch
     * @desc Makes changes to a Product resource. Only the `display_name`, `description`, and `labels` fields can be updated right now.  If labels are updated, the change will not be reflected in queries until the next index time.  Possible errors:  * Returns NOT_FOUND if the Product does not exist. * Returns INVALID_ARGUMENT if display_name is present in update_mask but is   missing from the request or longer than 4096 characters. * Returns INVALID_ARGUMENT if description is present in update_mask but is   longer than 4096 characters. * Returns INVALID_ARGUMENT if product_category is present in update_mask.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Vision API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/vision
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var vision = google.vision('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The resource name of the product.
     *     // Format is:
     *     // `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`.
     *     // This field is ignored when creating a product.
     *     name: 'projects/my-project/locations/my-location/products/my-product',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. Only these properties
     *       // will be changed.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   vision.projects.locations.products.patch(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias vision.projects.locations.products.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the product.  Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`.  This field is ignored when creating a product.
     * @param {string=} params.updateMask The FieldMask that specifies which fields to update. If update_mask isn't specified, all mutable fields are to be updated. Valid mask paths include `product_labels`, `display_name`, and `description`.
     * @param {().Product} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Locations$Products$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Product>;
    patch(
      params: Params$Resource$Projects$Locations$Products$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Product>,
      callback: BodyResponseCallback<Schema$Product>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Products$Patch,
      callback: BodyResponseCallback<Schema$Product>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Product>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Products$Patch
        | BodyResponseCallback<Schema$Product>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Product>,
      callback?: BodyResponseCallback<Schema$Product>
    ): void | GaxiosPromise<Schema$Product> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Products$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Products$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
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
        createAPIRequest<Schema$Product>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Product>(parameters);
      }
    }

    /**
     * vision.projects.locations.products.purge
     * @desc Asynchronous API to delete all Products in a ProductSet or all Products that are in no ProductSet.  If a Product is a member of the specified ProductSet in addition to other ProductSets, the Product will still be deleted.  It is recommended to not delete the specified ProductSet until after this operation has completed. It is also recommended to not add any of the Products involved in the batch delete to a new ProductSet while this operation is running because those Products may still end up deleted.  It's not possible to undo the PurgeProducts operation. Therefore, it is recommended to keep the csv files used in ImportProductSets (if that was how you originally built the Product Set) before starting PurgeProducts, in case you need to re-import the data after deletion.  If the plan is to purge all of the Products from a ProductSet and then re-use the empty ProductSet to re-import new Products into the empty ProductSet, you must wait until the PurgeProducts operation has finished for that ProductSet.  The google.longrunning.Operation API can be used to keep track of the progress and results of the request. `Operation.metadata` contains `BatchOperationMetadata`. (progress)
     * @alias vision.projects.locations.products.purge
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The project and location in which the Products should be deleted.  Format is `projects/PROJECT_ID/locations/LOC_ID`.
     * @param {().PurgeProductsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    purge(
      params?: Params$Resource$Projects$Locations$Products$Purge,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    purge(
      params: Params$Resource$Projects$Locations$Products$Purge,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    purge(
      params: Params$Resource$Projects$Locations$Products$Purge,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    purge(callback: BodyResponseCallback<Schema$Operation>): void;
    purge(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Products$Purge
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Products$Purge;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Products$Purge;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/products:purge').replace(
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
  }

  export interface Params$Resource$Projects$Locations$Products$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The project in which the Product should be created.  Format is `projects/PROJECT_ID/locations/LOC_ID`.
     */
    parent?: string;
    /**
     * A user-supplied resource id for this Product. If set, the server will attempt to use this value as the resource id. If it is already in use, an error is returned with code ALREADY_EXISTS. Must be at most 128 characters long. It cannot contain the character `/`.
     */
    productId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Product;
  }
  export interface Params$Resource$Projects$Locations$Products$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name of product to delete.  Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Products$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name of the Product to get.  Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Products$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The maximum number of items to return. Default 10, maximum 100.
     */
    pageSize?: number;
    /**
     * The next_page_token returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * The project OR ProductSet from which Products should be listed.  Format: `projects/PROJECT_ID/locations/LOC_ID`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Products$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the product.  Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`.  This field is ignored when creating a product.
     */
    name?: string;
    /**
     * The FieldMask that specifies which fields to update. If update_mask isn't specified, all mutable fields are to be updated. Valid mask paths include `product_labels`, `display_name`, and `description`.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Product;
  }
  export interface Params$Resource$Projects$Locations$Products$Purge
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The project and location in which the Products should be deleted.  Format is `projects/PROJECT_ID/locations/LOC_ID`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PurgeProductsRequest;
  }

  export class Resource$Projects$Locations$Products$Referenceimages {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * vision.projects.locations.products.referenceImages.create
     * @desc Creates and returns a new ReferenceImage resource.  The `bounding_poly` field is optional. If `bounding_poly` is not specified, the system will try to detect regions of interest in the image that are compatible with the product_category on the parent product. If it is specified, detection is ALWAYS skipped. The system converts polygons into non-rotated rectangles.  Note that the pipeline will resize the image if the image resolution is too large to process (above 50MP).  Possible errors:  * Returns INVALID_ARGUMENT if the image_uri is missing or longer than 4096   characters. * Returns INVALID_ARGUMENT if the product does not exist. * Returns INVALID_ARGUMENT if bounding_poly is not provided, and nothing   compatible with the parent product's product_category is detected. * Returns INVALID_ARGUMENT if bounding_poly contains more than 10 polygons.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Vision API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/vision
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var vision = google.vision('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Resource name of the product in which to create the reference image.
     *     // Format is
     *     // `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`.
     *     parent: 'projects/my-project/locations/my-location/products/my-product',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   vision.projects.locations.products.referenceImages.create(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias vision.projects.locations.products.referenceImages.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Resource name of the product in which to create the reference image.  Format is `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`.
     * @param {string=} params.referenceImageId A user-supplied resource id for the ReferenceImage to be added. If set, the server will attempt to use this value as the resource id. If it is already in use, an error is returned with code ALREADY_EXISTS. Must be at most 128 characters long. It cannot contain the character `/`.
     * @param {().ReferenceImage} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Products$Referenceimages$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReferenceImage>;
    create(
      params: Params$Resource$Projects$Locations$Products$Referenceimages$Create,
      options: MethodOptions | BodyResponseCallback<Schema$ReferenceImage>,
      callback: BodyResponseCallback<Schema$ReferenceImage>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Products$Referenceimages$Create,
      callback: BodyResponseCallback<Schema$ReferenceImage>
    ): void;
    create(callback: BodyResponseCallback<Schema$ReferenceImage>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Products$Referenceimages$Create
        | BodyResponseCallback<Schema$ReferenceImage>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ReferenceImage>,
      callback?: BodyResponseCallback<Schema$ReferenceImage>
    ): void | GaxiosPromise<Schema$ReferenceImage> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Products$Referenceimages$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Products$Referenceimages$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/referenceImages').replace(
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
        createAPIRequest<Schema$ReferenceImage>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ReferenceImage>(parameters);
      }
    }

    /**
     * vision.projects.locations.products.referenceImages.delete
     * @desc Permanently deletes a reference image.  The image metadata will be deleted right away, but search queries against ProductSets containing the image may still work until all related caches are refreshed.  The actual image files are not deleted from Google Cloud Storage.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Vision API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/vision
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var vision = google.vision('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The resource name of the reference image to delete.
     *     // Format is:
     *     // `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`
     *     name: 'projects/my-project/locations/my-location/products/my-product/referenceImages/my-reference-image',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   vision.projects.locations.products.referenceImages.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias vision.projects.locations.products.referenceImages.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the reference image to delete.  Format is:  `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Products$Referenceimages$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Products$Referenceimages$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Products$Referenceimages$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Products$Referenceimages$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Products$Referenceimages$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Products$Referenceimages$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * vision.projects.locations.products.referenceImages.get
     * @desc Gets information associated with a ReferenceImage.  Possible errors:  * Returns NOT_FOUND if the specified image does not exist.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Vision API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/vision
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var vision = google.vision('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The resource name of the ReferenceImage to get.
     *     // Format is:
     *     // `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`.
     *     name: 'projects/my-project/locations/my-location/products/my-product/referenceImages/my-reference-image',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   vision.projects.locations.products.referenceImages.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias vision.projects.locations.products.referenceImages.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the ReferenceImage to get.  Format is:  `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Products$Referenceimages$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReferenceImage>;
    get(
      params: Params$Resource$Projects$Locations$Products$Referenceimages$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ReferenceImage>,
      callback: BodyResponseCallback<Schema$ReferenceImage>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Products$Referenceimages$Get,
      callback: BodyResponseCallback<Schema$ReferenceImage>
    ): void;
    get(callback: BodyResponseCallback<Schema$ReferenceImage>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Products$Referenceimages$Get
        | BodyResponseCallback<Schema$ReferenceImage>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ReferenceImage>,
      callback?: BodyResponseCallback<Schema$ReferenceImage>
    ): void | GaxiosPromise<Schema$ReferenceImage> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Products$Referenceimages$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Products$Referenceimages$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
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
        createAPIRequest<Schema$ReferenceImage>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ReferenceImage>(parameters);
      }
    }

    /**
     * vision.projects.locations.products.referenceImages.list
     * @desc Lists reference images.  Possible errors:  * Returns NOT_FOUND if the parent product does not exist. * Returns INVALID_ARGUMENT if the page_size is greater than 100, or less   than 1.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Vision API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/vision
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var vision = google.vision('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Resource name of the product containing the reference images.
     *     // Format is
     *     // `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`.
     *     parent: 'projects/my-project/locations/my-location/products/my-product',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var referenceImagesPage = response['referenceImages'];
     *     if (!referenceImagesPage) {
     *       return;
     *     }
     *     for (var i = 0; i < referenceImagesPage.length; i++) {
     *       // TODO: Change code below to process each resource in `referenceImagesPage`:
     *       console.log(JSON.stringify(referenceImagesPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       vision.projects.locations.products.referenceImages.list(request, handlePage);
     *     }
     *   };
     *
     *   vision.projects.locations.products.referenceImages.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias vision.projects.locations.products.referenceImages.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of items to return. Default 10, maximum 100.
     * @param {string=} params.pageToken A token identifying a page of results to be returned. This is the value of `nextPageToken` returned in a previous reference image list request.  Defaults to the first page if not specified.
     * @param {string} params.parent Resource name of the product containing the reference images.  Format is `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Products$Referenceimages$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListReferenceImagesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Products$Referenceimages$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListReferenceImagesResponse>,
      callback: BodyResponseCallback<Schema$ListReferenceImagesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Products$Referenceimages$List,
      callback: BodyResponseCallback<Schema$ListReferenceImagesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListReferenceImagesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Products$Referenceimages$List
        | BodyResponseCallback<Schema$ListReferenceImagesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListReferenceImagesResponse>,
      callback?: BodyResponseCallback<Schema$ListReferenceImagesResponse>
    ): void | GaxiosPromise<Schema$ListReferenceImagesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Products$Referenceimages$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Products$Referenceimages$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/referenceImages').replace(
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
        createAPIRequest<Schema$ListReferenceImagesResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListReferenceImagesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Products$Referenceimages$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name of the product in which to create the reference image.  Format is `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`.
     */
    parent?: string;
    /**
     * A user-supplied resource id for the ReferenceImage to be added. If set, the server will attempt to use this value as the resource id. If it is already in use, an error is returned with code ALREADY_EXISTS. Must be at most 128 characters long. It cannot contain the character `/`.
     */
    referenceImageId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReferenceImage;
  }
  export interface Params$Resource$Projects$Locations$Products$Referenceimages$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the reference image to delete.  Format is:  `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Products$Referenceimages$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the ReferenceImage to get.  Format is:  `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Products$Referenceimages$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The maximum number of items to return. Default 10, maximum 100.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results to be returned. This is the value of `nextPageToken` returned in a previous reference image list request.  Defaults to the first page if not specified.
     */
    pageToken?: string;
    /**
     * Resource name of the product containing the reference images.  Format is `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Productsets {
    context: APIRequestContext;
    products: Resource$Projects$Locations$Productsets$Products;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.products = new Resource$Projects$Locations$Productsets$Products(
        this.context
      );
    }

    /**
     * vision.projects.locations.productSets.addProduct
     * @desc Adds a Product to the specified ProductSet. If the Product is already present, no change is made.  One Product can be added to at most 100 ProductSets.  Possible errors:  * Returns NOT_FOUND if the Product or the ProductSet doesn't exist.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Vision API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/vision
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var vision = google.vision('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The resource name for the ProductSet to modify.
     *     // Format is:
     *     // `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`
     *     name: 'projects/my-project/locations/my-location/productSets/my-product-set',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   vision.projects.locations.productSets.addProduct(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias vision.projects.locations.productSets.addProduct
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name for the ProductSet to modify.  Format is: `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`
     * @param {().AddProductToProductSetRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    addProduct(
      params?: Params$Resource$Projects$Locations$Productsets$Addproduct,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    addProduct(
      params: Params$Resource$Projects$Locations$Productsets$Addproduct,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    addProduct(
      params: Params$Resource$Projects$Locations$Productsets$Addproduct,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    addProduct(callback: BodyResponseCallback<Schema$Empty>): void;
    addProduct(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Productsets$Addproduct
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Productsets$Addproduct;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Productsets$Addproduct;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:addProduct').replace(
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
     * vision.projects.locations.productSets.create
     * @desc Creates and returns a new ProductSet resource.  Possible errors:  * Returns INVALID_ARGUMENT if display_name is missing, or is longer than   4096 characters.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Vision API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/vision
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var vision = google.vision('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The project in which the ProductSet should be created.
     *     // Format is `projects/PROJECT_ID/locations/LOC_ID`.
     *     parent: 'projects/my-project/locations/my-location',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   vision.projects.locations.productSets.create(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias vision.projects.locations.productSets.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The project in which the ProductSet should be created.  Format is `projects/PROJECT_ID/locations/LOC_ID`.
     * @param {string=} params.productSetId A user-supplied resource id for this ProductSet. If set, the server will attempt to use this value as the resource id. If it is already in use, an error is returned with code ALREADY_EXISTS. Must be at most 128 characters long. It cannot contain the character `/`.
     * @param {().ProductSet} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Productsets$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ProductSet>;
    create(
      params: Params$Resource$Projects$Locations$Productsets$Create,
      options: MethodOptions | BodyResponseCallback<Schema$ProductSet>,
      callback: BodyResponseCallback<Schema$ProductSet>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Productsets$Create,
      callback: BodyResponseCallback<Schema$ProductSet>
    ): void;
    create(callback: BodyResponseCallback<Schema$ProductSet>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Productsets$Create
        | BodyResponseCallback<Schema$ProductSet>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ProductSet>,
      callback?: BodyResponseCallback<Schema$ProductSet>
    ): void | GaxiosPromise<Schema$ProductSet> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Productsets$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Productsets$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/productSets').replace(
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
        createAPIRequest<Schema$ProductSet>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ProductSet>(parameters);
      }
    }

    /**
     * vision.projects.locations.productSets.delete
     * @desc Permanently deletes a ProductSet. Products and ReferenceImages in the ProductSet are not deleted.  The actual image files are not deleted from Google Cloud Storage.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Vision API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/vision
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var vision = google.vision('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Resource name of the ProductSet to delete.
     *     // Format is:
     *     // `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`
     *     name: 'projects/my-project/locations/my-location/productSets/my-product-set',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   vision.projects.locations.productSets.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias vision.projects.locations.productSets.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of the ProductSet to delete.  Format is: `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Productsets$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Productsets$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Productsets$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Productsets$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Productsets$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Productsets$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * vision.projects.locations.productSets.get
     * @desc Gets information associated with a ProductSet.  Possible errors:  * Returns NOT_FOUND if the ProductSet does not exist.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Vision API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/vision
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var vision = google.vision('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Resource name of the ProductSet to get.
     *     // Format is:
     *     // `projects/PROJECT_ID/locations/LOG_ID/productSets/PRODUCT_SET_ID`
     *     name: 'projects/my-project/locations/my-location/productSets/my-product-set',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   vision.projects.locations.productSets.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias vision.projects.locations.productSets.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of the ProductSet to get.  Format is: `projects/PROJECT_ID/locations/LOG_ID/productSets/PRODUCT_SET_ID`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Productsets$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ProductSet>;
    get(
      params: Params$Resource$Projects$Locations$Productsets$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ProductSet>,
      callback: BodyResponseCallback<Schema$ProductSet>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Productsets$Get,
      callback: BodyResponseCallback<Schema$ProductSet>
    ): void;
    get(callback: BodyResponseCallback<Schema$ProductSet>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Productsets$Get
        | BodyResponseCallback<Schema$ProductSet>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ProductSet>,
      callback?: BodyResponseCallback<Schema$ProductSet>
    ): void | GaxiosPromise<Schema$ProductSet> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Productsets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Productsets$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
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
        createAPIRequest<Schema$ProductSet>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ProductSet>(parameters);
      }
    }

    /**
     * vision.projects.locations.productSets.import
     * @desc Asynchronous API that imports a list of reference images to specified product sets based on a list of image information.  The google.longrunning.Operation API can be used to keep track of the progress and results of the request. `Operation.metadata` contains `BatchOperationMetadata`. (progress) `Operation.response` contains `ImportProductSetsResponse`. (results)  The input source of this method is a csv file on Google Cloud Storage. For the format of the csv file please see ImportProductSetsGcsSource.csv_file_uri.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Vision API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/vision
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var vision = google.vision('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The project in which the ProductSets should be imported.
     *     // Format is `projects/PROJECT_ID/locations/LOC_ID`.
     *     parent: 'projects/my-project/locations/my-location',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   vision.projects.locations.productSets.import(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias vision.projects.locations.productSets.import
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The project in which the ProductSets should be imported.  Format is `projects/PROJECT_ID/locations/LOC_ID`.
     * @param {().ImportProductSetsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    import(
      params?: Params$Resource$Projects$Locations$Productsets$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    import(
      params: Params$Resource$Projects$Locations$Productsets$Import,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Productsets$Import,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    import(callback: BodyResponseCallback<Schema$Operation>): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Productsets$Import
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Productsets$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Productsets$Import;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/productSets:import').replace(
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
     * vision.projects.locations.productSets.list
     * @desc Lists ProductSets in an unspecified order.  Possible errors:  * Returns INVALID_ARGUMENT if page_size is greater than 100, or less   than 1.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Vision API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/vision
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var vision = google.vision('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The project from which ProductSets should be listed.
     *     // Format is `projects/PROJECT_ID/locations/LOC_ID`.
     *     parent: 'projects/my-project/locations/my-location',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var productSetsPage = response['productSets'];
     *     if (!productSetsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < productSetsPage.length; i++) {
     *       // TODO: Change code below to process each resource in `productSetsPage`:
     *       console.log(JSON.stringify(productSetsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       vision.projects.locations.productSets.list(request, handlePage);
     *     }
     *   };
     *
     *   vision.projects.locations.productSets.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias vision.projects.locations.productSets.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of items to return. Default 10, maximum 100.
     * @param {string=} params.pageToken The next_page_token returned from a previous List request, if any.
     * @param {string} params.parent The project from which ProductSets should be listed.  Format is `projects/PROJECT_ID/locations/LOC_ID`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Productsets$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListProductSetsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Productsets$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListProductSetsResponse>,
      callback: BodyResponseCallback<Schema$ListProductSetsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Productsets$List,
      callback: BodyResponseCallback<Schema$ListProductSetsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListProductSetsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Productsets$List
        | BodyResponseCallback<Schema$ListProductSetsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListProductSetsResponse>,
      callback?: BodyResponseCallback<Schema$ListProductSetsResponse>
    ): void | GaxiosPromise<Schema$ListProductSetsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Productsets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Productsets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/productSets').replace(
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
        createAPIRequest<Schema$ListProductSetsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListProductSetsResponse>(parameters);
      }
    }

    /**
     * vision.projects.locations.productSets.patch
     * @desc Makes changes to a ProductSet resource. Only display_name can be updated currently.  Possible errors:  * Returns NOT_FOUND if the ProductSet does not exist. * Returns INVALID_ARGUMENT if display_name is present in update_mask but   missing from the request or longer than 4096 characters.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Vision API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/vision
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var vision = google.vision('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The resource name of the ProductSet.
     *     // Format is:
     *     // `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`.
     *     // This field is ignored when creating a ProductSet.
     *     name: 'projects/my-project/locations/my-location/productSets/my-product-set',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. Only these properties
     *       // will be changed.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   vision.projects.locations.productSets.patch(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias vision.projects.locations.productSets.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the ProductSet.  Format is: `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`.  This field is ignored when creating a ProductSet.
     * @param {string=} params.updateMask The FieldMask that specifies which fields to update. If update_mask isn't specified, all mutable fields are to be updated. Valid mask path is `display_name`.
     * @param {().ProductSet} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Locations$Productsets$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ProductSet>;
    patch(
      params: Params$Resource$Projects$Locations$Productsets$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$ProductSet>,
      callback: BodyResponseCallback<Schema$ProductSet>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Productsets$Patch,
      callback: BodyResponseCallback<Schema$ProductSet>
    ): void;
    patch(callback: BodyResponseCallback<Schema$ProductSet>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Productsets$Patch
        | BodyResponseCallback<Schema$ProductSet>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ProductSet>,
      callback?: BodyResponseCallback<Schema$ProductSet>
    ): void | GaxiosPromise<Schema$ProductSet> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Productsets$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Productsets$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
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
        createAPIRequest<Schema$ProductSet>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ProductSet>(parameters);
      }
    }

    /**
     * vision.projects.locations.productSets.removeProduct
     * @desc Removes a Product from the specified ProductSet.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Vision API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/vision
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var vision = google.vision('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The resource name for the ProductSet to modify.
     *     // Format is:
     *     // `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`
     *     name: 'projects/my-project/locations/my-location/productSets/my-product-set',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   vision.projects.locations.productSets.removeProduct(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias vision.projects.locations.productSets.removeProduct
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name for the ProductSet to modify.  Format is: `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`
     * @param {().RemoveProductFromProductSetRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    removeProduct(
      params?: Params$Resource$Projects$Locations$Productsets$Removeproduct,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    removeProduct(
      params: Params$Resource$Projects$Locations$Productsets$Removeproduct,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    removeProduct(
      params: Params$Resource$Projects$Locations$Productsets$Removeproduct,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    removeProduct(callback: BodyResponseCallback<Schema$Empty>): void;
    removeProduct(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Productsets$Removeproduct
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Productsets$Removeproduct;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Productsets$Removeproduct;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:removeProduct').replace(
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
  }

  export interface Params$Resource$Projects$Locations$Productsets$Addproduct
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name for the ProductSet to modify.  Format is: `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddProductToProductSetRequest;
  }
  export interface Params$Resource$Projects$Locations$Productsets$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The project in which the ProductSet should be created.  Format is `projects/PROJECT_ID/locations/LOC_ID`.
     */
    parent?: string;
    /**
     * A user-supplied resource id for this ProductSet. If set, the server will attempt to use this value as the resource id. If it is already in use, an error is returned with code ALREADY_EXISTS. Must be at most 128 characters long. It cannot contain the character `/`.
     */
    productSetId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ProductSet;
  }
  export interface Params$Resource$Projects$Locations$Productsets$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name of the ProductSet to delete.  Format is: `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Productsets$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name of the ProductSet to get.  Format is: `projects/PROJECT_ID/locations/LOG_ID/productSets/PRODUCT_SET_ID`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Productsets$Import
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The project in which the ProductSets should be imported.  Format is `projects/PROJECT_ID/locations/LOC_ID`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ImportProductSetsRequest;
  }
  export interface Params$Resource$Projects$Locations$Productsets$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The maximum number of items to return. Default 10, maximum 100.
     */
    pageSize?: number;
    /**
     * The next_page_token returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * The project from which ProductSets should be listed.  Format is `projects/PROJECT_ID/locations/LOC_ID`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Productsets$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the ProductSet.  Format is: `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`.  This field is ignored when creating a ProductSet.
     */
    name?: string;
    /**
     * The FieldMask that specifies which fields to update. If update_mask isn't specified, all mutable fields are to be updated. Valid mask path is `display_name`.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ProductSet;
  }
  export interface Params$Resource$Projects$Locations$Productsets$Removeproduct
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name for the ProductSet to modify.  Format is: `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RemoveProductFromProductSetRequest;
  }

  export class Resource$Projects$Locations$Productsets$Products {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * vision.projects.locations.productSets.products.list
     * @desc Lists the Products in a ProductSet, in an unspecified order. If the ProductSet does not exist, the products field of the response will be empty.  Possible errors:  * Returns INVALID_ARGUMENT if page_size is greater than 100 or less than 1.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Vision API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/vision
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var vision = google.vision('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ProductSet resource for which to retrieve Products.
     *     // Format is:
     *     // `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`
     *     name: 'projects/my-project/locations/my-location/productSets/my-product-set',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var productsPage = response['products'];
     *     if (!productsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < productsPage.length; i++) {
     *       // TODO: Change code below to process each resource in `productsPage`:
     *       console.log(JSON.stringify(productsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       vision.projects.locations.productSets.products.list(request, handlePage);
     *     }
     *   };
     *
     *   vision.projects.locations.productSets.products.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias vision.projects.locations.productSets.products.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The ProductSet resource for which to retrieve Products.  Format is: `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`
     * @param {integer=} params.pageSize The maximum number of items to return. Default 10, maximum 100.
     * @param {string=} params.pageToken The next_page_token returned from a previous List request, if any.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Productsets$Products$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListProductsInProductSetResponse>;
    list(
      params: Params$Resource$Projects$Locations$Productsets$Products$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListProductsInProductSetResponse>,
      callback: BodyResponseCallback<Schema$ListProductsInProductSetResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Productsets$Products$List,
      callback: BodyResponseCallback<Schema$ListProductsInProductSetResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListProductsInProductSetResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Productsets$Products$List
        | BodyResponseCallback<Schema$ListProductsInProductSetResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListProductsInProductSetResponse>,
      callback?: BodyResponseCallback<Schema$ListProductsInProductSetResponse>
    ): void | GaxiosPromise<Schema$ListProductsInProductSetResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Productsets$Products$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Productsets$Products$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/products').replace(
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
        createAPIRequest<Schema$ListProductsInProductSetResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListProductsInProductSetResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Productsets$Products$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ProductSet resource for which to retrieve Products.  Format is: `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`
     */
    name?: string;
    /**
     * The maximum number of items to return. Default 10, maximum 100.
     */
    pageSize?: number;
    /**
     * The next_page_token returned from a previous List request, if any.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * vision.projects.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Vision API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/vision
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var vision = google.vision('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the operation resource.
     *     name: 'projects/my-project/operations/my-operation',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   vision.projects.operations.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias vision.projects.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Projects$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Operations$Get
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://vision.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Operations$Get
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
}
