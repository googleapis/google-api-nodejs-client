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

export namespace vision_v1p1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1p1beta1';
  }

  /**
   * Cloud Vision API
   *
   * Integrates Google Vision features, including image labeling, face, logo,
   * and landmark detection, optical character recognition (OCR), and detection
   * of explicit content, into applications.
   *
   * @example
   * const {google} = require('googleapis');
   * const vision = google.vision('v1p1beta1');
   *
   * @namespace vision
   * @type {Function}
   * @version v1p1beta1
   * @variation v1p1beta1
   * @param {object=} options Options for Vision
   */
  export class Vision {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    files: Resource$Files;
    images: Resource$Images;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.files = new Resource$Files(this);
      this.images = new Resource$Images(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * Response to a single file annotation request. A file may contain one or
   * more images, which individually have their own responses.
   */
  export interface Schema$AnnotateFileResponse {
    /**
     * Information about the file for which this response is generated.
     */
    inputConfig?: Schema$InputConfig;
    /**
     * Individual responses to images found within the file.
     */
    responses?: Schema$AnnotateImageResponse[];
  }
  /**
   * Response to an image annotation request.
   */
  export interface Schema$AnnotateImageResponse {
    /**
     * If present, contextual information is needed to understand where this
     * image comes from.
     */
    context?: Schema$ImageAnnotationContext;
    /**
     * If present, crop hints have completed successfully.
     */
    cropHintsAnnotation?: Schema$CropHintsAnnotation;
    /**
     * If set, represents the error message for the operation. Note that
     * filled-in image annotations are guaranteed to be correct, even when
     * `error` is set.
     */
    error?: Schema$Status;
    /**
     * If present, face detection has completed successfully.
     */
    faceAnnotations?: Schema$FaceAnnotation[];
    /**
     * If present, text (OCR) detection or document (OCR) text detection has
     * completed successfully. This annotation provides the structural hierarchy
     * for the OCR detected text.
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
     * If present, logo detection has completed successfully.
     */
    logoAnnotations?: Schema$EntityAnnotation[];
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
   * The response for a single offline file annotation request.
   */
  export interface Schema$AsyncAnnotateFileResponse {
    /**
     * The output location and metadata from AsyncAnnotateFileRequest.
     */
    outputConfig?: Schema$OutputConfig;
  }
  /**
   * Response to an async batch file annotation request.
   */
  export interface Schema$AsyncBatchAnnotateFilesResponse {
    /**
     * The list of file annotation responses, one for each request in
     * AsyncBatchAnnotateFilesRequest.
     */
    responses?: Schema$AsyncAnnotateFileResponse[];
  }
  /**
   * Logical element on the page.
   */
  export interface Schema$Block {
    /**
     * Detected block type (text, image etc) for this block.
     */
    blockType?: string;
    /**
     * The bounding box for the block. The vertices are in the order of
     * top-left, top-right, bottom-right, bottom-left. When a rotation of the
     * bounding box is detected the rotation is represented as around the
     * top-left corner as defined when the text is read in the &#39;natural&#39;
     * orientation. For example:  * when the text is horizontal it might look
     * like:          0----1         |    |         3----2  * when it&#39;s
     * rotated 180 degrees around the top-left corner it becomes: 2----3 |    |
     * 1----0    and the vertice order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$BoundingPoly;
    /**
     * Confidence of the OCR results on the block. Range [0, 1].
     */
    confidence?: number;
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
   * Represents a color in the RGBA color space. This representation is designed
   * for simplicity of conversion to/from color representations in various
   * languages over compactness; for example, the fields of this representation
   * can be trivially provided to the constructor of &quot;java.awt.Color&quot;
   * in Java; it can also be trivially provided to UIColor&#39;s
   * &quot;+colorWithRed:green:blue:alpha&quot; method in iOS; and, with just a
   * little work, it can be easily formatted into a CSS &quot;rgba()&quot;
   * string in JavaScript, as well. Here are some examples:  Example (Java):
   * import com.google.type.Color;       // ...      public static
   * java.awt.Color fromProto(Color protocolor) {        float alpha =
   * protocolor.hasAlpha()            ? protocolor.getAlpha().getValue() : 1.0;
   * return new java.awt.Color(            protocolor.getRed(),
   * protocolor.getGreen(),            protocolor.getBlue(),            alpha);
   * }       public static Color toProto(java.awt.Color color) {        float
   * red = (float) color.getRed();        float green = (float)
   * color.getGreen();        float blue = (float) color.getBlue();        float
   * denominator = 255.0;        Color.Builder resultBuilder =            Color
   * .newBuilder()                .setRed(red / denominator) .setGreen(green /
   * denominator)                .setBlue(blue / denominator);        int alpha
   * = color.getAlpha();        if (alpha != 255) {          result.setAlpha(
   * FloatValue                  .newBuilder() .setValue(((float) alpha) /
   * denominator)                  .build());        }        return
   * resultBuilder.build();      }      // ...  Example (iOS / Obj-C):       //
   * ...      static UIColor* fromProto(Color* protocolor) {         float red =
   * [protocolor red];         float green = [protocolor green];         float
   * blue = [protocolor blue];         FloatValue* alpha_wrapper = [protocolor
   * alpha];         float alpha = 1.0;         if (alpha_wrapper != nil) {
   * alpha = [alpha_wrapper value];         }         return [UIColor
   * colorWithRed:red green:green blue:blue alpha:alpha];      }       static
   * Color* toProto(UIColor* color) {          CGFloat red, green, blue, alpha;
   * if (![color getRed:&amp;red green:&amp;green blue:&amp;blue
   * alpha:&amp;alpha]) {            return nil;          }          Color*
   * result = [Color alloc] init];          [result setRed:red]; [result
   * setGreen:green];          [result setBlue:blue];          if (alpha &lt;=
   * 0.9999) {            [result setAlpha:floatWrapperWithValue(alpha)]; }
   * [result autorelease];          return result;     }     // ...   Example
   * (JavaScript):      // ...      var protoToCssColor = function(rgb_color) {
   * var redFrac = rgb_color.red || 0.0;        var greenFrac = rgb_color.green
   * || 0.0;        var blueFrac = rgb_color.blue || 0.0;        var red =
   * Math.floor(redFrac * 255);        var green = Math.floor(greenFrac * 255);
   * var blue = Math.floor(blueFrac * 255);         if (!(&#39;alpha&#39; in
   * rgb_color)) {           return rgbToCssColor_(red, green, blue);        }
   * var alphaFrac = rgb_color.alpha.value || 0.0;        var rgbParams = [red,
   * green, blue].join(&#39;,&#39;);        return [&#39;rgba(&#39;, rgbParams,
   * &#39;,&#39;, alphaFrac, &#39;)&#39;].join(&#39;&#39;);     };      var
   * rgbToCssColor_ = function(red, green, blue) {       var rgbNumber = new
   * Number((red &lt;&lt; 16) | (green &lt;&lt; 8) | blue);       var hexString
   * = rgbNumber.toString(16);       var missingZeros = 6 - hexString.length;
   * var resultBuilder = [&#39;#&#39;];       for (var i = 0; i &lt;
   * missingZeros; i++) {          resultBuilder.push(&#39;0&#39;);       }
   * resultBuilder.push(hexString);       return resultBuilder.join(&#39;&#39;);
   * };      // ...
   */
  export interface Schema$Color {
    /**
     * The fraction of this color that should be applied to the pixel. That is,
     * the final pixel color is defined by the equation:    pixel color = alpha
     * * (this color) + (1.0 - alpha) * (background color)  This means that a
     * value of 1.0 corresponds to a solid color, whereas a value of 0.0
     * corresponds to a completely transparent color. This uses a wrapper
     * message rather than a simple float scalar so that it is possible to
     * distinguish between a default value and the value being unset. If
     * omitted, this color object is to be rendered as a solid color (as if the
     * alpha value had been explicitly given with a value of 1.0).
     */
    alpha?: number;
    /**
     * The amount of blue in the color as a value in the interval [0, 1].
     */
    blue?: number;
    /**
     * The amount of green in the color as a value in the interval [0, 1].
     */
    green?: number;
    /**
     * The amount of red in the color as a value in the interval [0, 1].
     */
    red?: number;
  }
  /**
   * Color information consists of RGB channels, score, and the fraction of the
   * image that the color occupies in the image.
   */
  export interface Schema$ColorInfo {
    /**
     * RGB components of the color.
     */
    color?: Schema$Color;
    /**
     * The fraction of pixels the color occupies in the image. Value in range
     * [0, 1].
     */
    pixelFraction?: number;
    /**
     * Image-specific score for this color. Value in range [0, 1].
     */
    score?: number;
  }
  /**
   * Single crop hint that is used to generate a new crop when serving an image.
   */
  export interface Schema$CropHint {
    /**
     * The bounding polygon for the crop region. The coordinates of the bounding
     * box are in the original image&#39;s scale, as returned in `ImageParams`.
     */
    boundingPoly?: Schema$BoundingPoly;
    /**
     * Confidence of this being a salient region.  Range [0, 1].
     */
    confidence?: number;
    /**
     * Fraction of importance of this salient region with respect to the
     * original image.
     */
    importanceFraction?: number;
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
   * Detected start or end of a structural component.
   */
  export interface Schema$DetectedBreak {
    /**
     * True if break prepends the element.
     */
    isPrefix?: boolean;
    /**
     * Detected break type.
     */
    type?: string;
  }
  /**
   * Detected language for a structural component.
   */
  export interface Schema$DetectedLanguage {
    /**
     * Confidence of detected language. Range [0, 1].
     */
    confidence?: number;
    /**
     * The BCP-47 language code, such as &quot;en-US&quot; or
     * &quot;sr-Latn&quot;. For more information, see
     * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string;
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
   * Set of detected entity features.
   */
  export interface Schema$EntityAnnotation {
    /**
     * Image region to which this entity belongs. Not produced for
     * `LABEL_DETECTION` features.
     */
    boundingPoly?: Schema$BoundingPoly;
    /**
     * **Deprecated. Use `score` instead.** The accuracy of the entity detection
     * in an image. For example, for an image in which the &quot;Eiffel
     * Tower&quot; entity is detected, this field represents the confidence that
     * there is a tower in the query image. Range [0, 1].
     */
    confidence?: number;
    /**
     * Entity textual description, expressed in its `locale` language.
     */
    description?: string;
    /**
     * The language code for the locale in which the entity textual
     * `description` is expressed.
     */
    locale?: string;
    /**
     * The location information for the detected entity. Multiple `LocationInfo`
     * elements can be present because one location may indicate the location of
     * the scene in the image, and another location may indicate the location of
     * the place where the image was taken. Location information is usually
     * present for landmarks.
     */
    locations?: Schema$LocationInfo[];
    /**
     * Opaque entity ID. Some IDs may be available in [Google Knowledge Graph
     * Search API](https://developers.google.com/knowledge-graph/).
     */
    mid?: string;
    /**
     * Some entities may have optional user-supplied `Property` (name/value)
     * fields, such a score or string that qualifies the entity.
     */
    properties?: Schema$Property[];
    /**
     * Overall score of the result. Range [0, 1].
     */
    score?: number;
    /**
     * The relevancy of the ICA (Image Content Annotation) label to the image.
     * For example, the relevancy of &quot;tower&quot; is likely higher to an
     * image containing the detected &quot;Eiffel Tower&quot; than to an image
     * containing a detected distant towering building, even though the
     * confidence that there is a tower in each image may be the same. Range [0,
     * 1].
     */
    topicality?: number;
  }
  /**
   * A face annotation object contains the results of face detection.
   */
  export interface Schema$FaceAnnotation {
    /**
     * Anger likelihood.
     */
    angerLikelihood?: string;
    /**
     * Blurred likelihood.
     */
    blurredLikelihood?: string;
    /**
     * The bounding polygon around the face. The coordinates of the bounding box
     * are in the original image&#39;s scale, as returned in `ImageParams`. The
     * bounding box is computed to &quot;frame&quot; the face in accordance with
     * human expectations. It is based on the landmarker results. Note that one
     * or more x and/or y coordinates may not be generated in the `BoundingPoly`
     * (the polygon will be unbounded) if only a partial face appears in the
     * image to be annotated.
     */
    boundingPoly?: Schema$BoundingPoly;
    /**
     * Detection confidence. Range [0, 1].
     */
    detectionConfidence?: number;
    /**
     * The `fd_bounding_poly` bounding polygon is tighter than the
     * `boundingPoly`, and encloses only the skin part of the face. Typically,
     * it is used to eliminate the face from any image analysis that detects the
     * &quot;amount of skin&quot; visible in an image. It is not based on the
     * landmarker results, only on the initial face detection, hence the
     * &lt;code&gt;fd&lt;/code&gt; (face detection) prefix.
     */
    fdBoundingPoly?: Schema$BoundingPoly;
    /**
     * Headwear likelihood.
     */
    headwearLikelihood?: string;
    /**
     * Joy likelihood.
     */
    joyLikelihood?: string;
    /**
     * Face landmarking confidence. Range [0, 1].
     */
    landmarkingConfidence?: number;
    /**
     * Detected face landmarks.
     */
    landmarks?: Schema$Landmark[];
    /**
     * Yaw angle, which indicates the leftward/rightward angle that the face is
     * pointing relative to the vertical plane perpendicular to the image. Range
     * [-180,180].
     */
    panAngle?: number;
    /**
     * Roll angle, which indicates the amount of clockwise/anti-clockwise
     * rotation of the face relative to the image vertical about the axis
     * perpendicular to the face. Range [-180,180].
     */
    rollAngle?: number;
    /**
     * Sorrow likelihood.
     */
    sorrowLikelihood?: string;
    /**
     * Surprise likelihood.
     */
    surpriseLikelihood?: string;
    /**
     * Pitch angle, which indicates the upwards/downwards angle that the face is
     * pointing relative to the image&#39;s horizontal plane. Range [-180,180].
     */
    tiltAngle?: number;
    /**
     * Under-exposed likelihood.
     */
    underExposedLikelihood?: string;
  }
  /**
   * The Google Cloud Storage location where the output will be written to.
   */
  export interface Schema$GcsDestination {
    /**
     * Google Cloud Storage URI where the results will be stored. Results will
     * be in JSON format and preceded by its corresponding input URI. This field
     * can either represent a single file, or a prefix for multiple outputs.
     * Prefixes must end in a `/`.  Examples:  *    File:
     * gs://bucket-name/filename.json *    Prefix: gs://bucket-name/prefix/here/
     * *    File: gs://bucket-name/prefix/here  If multiple outputs, each
     * response is still AnnotateFileResponse, each of which contains some
     * subset of the full list of AnnotateImageResponse. Multiple outputs can
     * happen if, for example, the output JSON is too large and overflows into
     * multiple sharded files.
     */
    uri?: string;
  }
  /**
   * The Google Cloud Storage location where the input will be read from.
   */
  export interface Schema$GcsSource {
    /**
     * Google Cloud Storage URI for the input file. This must only be a Google
     * Cloud Storage object. Wildcards are not currently supported.
     */
    uri?: string;
  }
  /**
   * Request for performing Google Cloud Vision API tasks over a user-provided
   * image, with user-requested features.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1AnnotateImageRequest {
    /**
     * Requested features.
     */
    features?: Schema$GoogleCloudVisionV1p1beta1Feature[];
    /**
     * The image to be processed.
     */
    image?: Schema$GoogleCloudVisionV1p1beta1Image;
    /**
     * Additional context that may accompany the image.
     */
    imageContext?: Schema$GoogleCloudVisionV1p1beta1ImageContext;
  }
  /**
   * Response to an image annotation request.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1AnnotateImageResponse {
    /**
     * If present, contextual information is needed to understand where this
     * image comes from.
     */
    context?: Schema$GoogleCloudVisionV1p1beta1ImageAnnotationContext;
    /**
     * If present, crop hints have completed successfully.
     */
    cropHintsAnnotation?: Schema$GoogleCloudVisionV1p1beta1CropHintsAnnotation;
    /**
     * If set, represents the error message for the operation. Note that
     * filled-in image annotations are guaranteed to be correct, even when
     * `error` is set.
     */
    error?: Schema$Status;
    /**
     * If present, face detection has completed successfully.
     */
    faceAnnotations?: Schema$GoogleCloudVisionV1p1beta1FaceAnnotation[];
    /**
     * If present, text (OCR) detection or document (OCR) text detection has
     * completed successfully. This annotation provides the structural hierarchy
     * for the OCR detected text.
     */
    fullTextAnnotation?: Schema$GoogleCloudVisionV1p1beta1TextAnnotation;
    /**
     * If present, image properties were extracted successfully.
     */
    imagePropertiesAnnotation?:
        Schema$GoogleCloudVisionV1p1beta1ImageProperties;
    /**
     * If present, label detection has completed successfully.
     */
    labelAnnotations?: Schema$GoogleCloudVisionV1p1beta1EntityAnnotation[];
    /**
     * If present, landmark detection has completed successfully.
     */
    landmarkAnnotations?: Schema$GoogleCloudVisionV1p1beta1EntityAnnotation[];
    /**
     * If present, logo detection has completed successfully.
     */
    logoAnnotations?: Schema$GoogleCloudVisionV1p1beta1EntityAnnotation[];
    /**
     * If present, safe-search annotation has completed successfully.
     */
    safeSearchAnnotation?:
        Schema$GoogleCloudVisionV1p1beta1SafeSearchAnnotation;
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
   * An offline file annotation request.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest {
    /**
     * Required. Requested features.
     */
    features?: Schema$GoogleCloudVisionV1p1beta1Feature[];
    /**
     * Additional context that may accompany the image(s) in the file.
     */
    imageContext?: Schema$GoogleCloudVisionV1p1beta1ImageContext;
    /**
     * Required. Information about the input file.
     */
    inputConfig?: Schema$GoogleCloudVisionV1p1beta1InputConfig;
    /**
     * Required. The desired output location and metadata (e.g. format).
     */
    outputConfig?: Schema$GoogleCloudVisionV1p1beta1OutputConfig;
  }
  /**
   * Multiple async file annotation requests are batched into a single service
   * call.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequest {
    /**
     * Individual async file annotation requests for this batch.
     */
    requests?: Schema$GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest[];
  }
  /**
   * Multiple image annotation requests are batched into a single service call.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequest {
    /**
     * Individual image annotation requests for this batch.
     */
    requests?: Schema$GoogleCloudVisionV1p1beta1AnnotateImageRequest[];
  }
  /**
   * Response to a batch image annotation request.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse {
    /**
     * Individual responses to image annotation requests within the batch.
     */
    responses?: Schema$GoogleCloudVisionV1p1beta1AnnotateImageResponse[];
  }
  /**
   * Logical element on the page.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1Block {
    /**
     * Detected block type (text, image etc) for this block.
     */
    blockType?: string;
    /**
     * The bounding box for the block. The vertices are in the order of
     * top-left, top-right, bottom-right, bottom-left. When a rotation of the
     * bounding box is detected the rotation is represented as around the
     * top-left corner as defined when the text is read in the &#39;natural&#39;
     * orientation. For example:  * when the text is horizontal it might look
     * like:          0----1         |    |         3----2  * when it&#39;s
     * rotated 180 degrees around the top-left corner it becomes: 2----3 |    |
     * 1----0    and the vertice order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$GoogleCloudVisionV1p1beta1BoundingPoly;
    /**
     * Confidence of the OCR results on the block. Range [0, 1].
     */
    confidence?: number;
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
     * The bounding polygon vertices.
     */
    vertices?: Schema$GoogleCloudVisionV1p1beta1Vertex[];
  }
  /**
   * Color information consists of RGB channels, score, and the fraction of the
   * image that the color occupies in the image.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1ColorInfo {
    /**
     * RGB components of the color.
     */
    color?: Schema$Color;
    /**
     * The fraction of pixels the color occupies in the image. Value in range
     * [0, 1].
     */
    pixelFraction?: number;
    /**
     * Image-specific score for this color. Value in range [0, 1].
     */
    score?: number;
  }
  /**
   * Single crop hint that is used to generate a new crop when serving an image.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1CropHint {
    /**
     * The bounding polygon for the crop region. The coordinates of the bounding
     * box are in the original image&#39;s scale, as returned in `ImageParams`.
     */
    boundingPoly?: Schema$GoogleCloudVisionV1p1beta1BoundingPoly;
    /**
     * Confidence of this being a salient region.  Range [0, 1].
     */
    confidence?: number;
    /**
     * Fraction of importance of this salient region with respect to the
     * original image.
     */
    importanceFraction?: number;
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
   * Parameters for crop hints annotation request.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1CropHintsParams {
    /**
     * Aspect ratios in floats, representing the ratio of the width to the
     * height of the image. For example, if the desired aspect ratio is 4/3, the
     * corresponding float value should be 1.33333.  If not specified, the best
     * possible crop is returned. The number of provided aspect ratios is
     * limited to a maximum of 16; any aspect ratios provided after the 16th are
     * ignored.
     */
    aspectRatios?: number[];
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
     * Image region to which this entity belongs. Not produced for
     * `LABEL_DETECTION` features.
     */
    boundingPoly?: Schema$GoogleCloudVisionV1p1beta1BoundingPoly;
    /**
     * **Deprecated. Use `score` instead.** The accuracy of the entity detection
     * in an image. For example, for an image in which the &quot;Eiffel
     * Tower&quot; entity is detected, this field represents the confidence that
     * there is a tower in the query image. Range [0, 1].
     */
    confidence?: number;
    /**
     * Entity textual description, expressed in its `locale` language.
     */
    description?: string;
    /**
     * The language code for the locale in which the entity textual
     * `description` is expressed.
     */
    locale?: string;
    /**
     * The location information for the detected entity. Multiple `LocationInfo`
     * elements can be present because one location may indicate the location of
     * the scene in the image, and another location may indicate the location of
     * the place where the image was taken. Location information is usually
     * present for landmarks.
     */
    locations?: Schema$GoogleCloudVisionV1p1beta1LocationInfo[];
    /**
     * Opaque entity ID. Some IDs may be available in [Google Knowledge Graph
     * Search API](https://developers.google.com/knowledge-graph/).
     */
    mid?: string;
    /**
     * Some entities may have optional user-supplied `Property` (name/value)
     * fields, such a score or string that qualifies the entity.
     */
    properties?: Schema$GoogleCloudVisionV1p1beta1Property[];
    /**
     * Overall score of the result. Range [0, 1].
     */
    score?: number;
    /**
     * The relevancy of the ICA (Image Content Annotation) label to the image.
     * For example, the relevancy of &quot;tower&quot; is likely higher to an
     * image containing the detected &quot;Eiffel Tower&quot; than to an image
     * containing a detected distant towering building, even though the
     * confidence that there is a tower in each image may be the same. Range [0,
     * 1].
     */
    topicality?: number;
  }
  /**
   * A face annotation object contains the results of face detection.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1FaceAnnotation {
    /**
     * Anger likelihood.
     */
    angerLikelihood?: string;
    /**
     * Blurred likelihood.
     */
    blurredLikelihood?: string;
    /**
     * The bounding polygon around the face. The coordinates of the bounding box
     * are in the original image&#39;s scale, as returned in `ImageParams`. The
     * bounding box is computed to &quot;frame&quot; the face in accordance with
     * human expectations. It is based on the landmarker results. Note that one
     * or more x and/or y coordinates may not be generated in the `BoundingPoly`
     * (the polygon will be unbounded) if only a partial face appears in the
     * image to be annotated.
     */
    boundingPoly?: Schema$GoogleCloudVisionV1p1beta1BoundingPoly;
    /**
     * Detection confidence. Range [0, 1].
     */
    detectionConfidence?: number;
    /**
     * The `fd_bounding_poly` bounding polygon is tighter than the
     * `boundingPoly`, and encloses only the skin part of the face. Typically,
     * it is used to eliminate the face from any image analysis that detects the
     * &quot;amount of skin&quot; visible in an image. It is not based on the
     * landmarker results, only on the initial face detection, hence the
     * &lt;code&gt;fd&lt;/code&gt; (face detection) prefix.
     */
    fdBoundingPoly?: Schema$GoogleCloudVisionV1p1beta1BoundingPoly;
    /**
     * Headwear likelihood.
     */
    headwearLikelihood?: string;
    /**
     * Joy likelihood.
     */
    joyLikelihood?: string;
    /**
     * Face landmarking confidence. Range [0, 1].
     */
    landmarkingConfidence?: number;
    /**
     * Detected face landmarks.
     */
    landmarks?: Schema$GoogleCloudVisionV1p1beta1FaceAnnotationLandmark[];
    /**
     * Yaw angle, which indicates the leftward/rightward angle that the face is
     * pointing relative to the vertical plane perpendicular to the image. Range
     * [-180,180].
     */
    panAngle?: number;
    /**
     * Roll angle, which indicates the amount of clockwise/anti-clockwise
     * rotation of the face relative to the image vertical about the axis
     * perpendicular to the face. Range [-180,180].
     */
    rollAngle?: number;
    /**
     * Sorrow likelihood.
     */
    sorrowLikelihood?: string;
    /**
     * Surprise likelihood.
     */
    surpriseLikelihood?: string;
    /**
     * Pitch angle, which indicates the upwards/downwards angle that the face is
     * pointing relative to the image&#39;s horizontal plane. Range [-180,180].
     */
    tiltAngle?: number;
    /**
     * Under-exposed likelihood.
     */
    underExposedLikelihood?: string;
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
    type?: string;
  }
  /**
   * The type of Google Cloud Vision API detection to perform, and the maximum
   * number of results to return for that type. Multiple `Feature` objects can
   * be specified in the `features` list.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1Feature {
    /**
     * Maximum number of results of this type. Does not apply to
     * `TEXT_DETECTION`, `DOCUMENT_TEXT_DETECTION`, or `CROP_HINTS`.
     */
    maxResults?: number;
    /**
     * Model to use for the feature. Supported values:
     * &quot;builtin/stable&quot; (the default if unset) and
     * &quot;builtin/latest&quot;.
     */
    model?: string;
    /**
     * The feature type.
     */
    type?: string;
  }
  /**
   * The Google Cloud Storage location where the output will be written to.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1GcsDestination {
    /**
     * Google Cloud Storage URI where the results will be stored. Results will
     * be in JSON format and preceded by its corresponding input URI. This field
     * can either represent a single file, or a prefix for multiple outputs.
     * Prefixes must end in a `/`.  Examples:  *    File:
     * gs://bucket-name/filename.json *    Prefix: gs://bucket-name/prefix/here/
     * *    File: gs://bucket-name/prefix/here  If multiple outputs, each
     * response is still AnnotateFileResponse, each of which contains some
     * subset of the full list of AnnotateImageResponse. Multiple outputs can
     * happen if, for example, the output JSON is too large and overflows into
     * multiple sharded files.
     */
    uri?: string;
  }
  /**
   * The Google Cloud Storage location where the input will be read from.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1GcsSource {
    /**
     * Google Cloud Storage URI for the input file. This must only be a Google
     * Cloud Storage object. Wildcards are not currently supported.
     */
    uri?: string;
  }
  /**
   * Client image to perform Google Cloud Vision API tasks over.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1Image {
    /**
     * Image content, represented as a stream of bytes. Note: As with all
     * `bytes` fields, protobuffers use a pure binary representation, whereas
     * JSON representations use base64.
     */
    content?: string;
    /**
     * Google Cloud Storage image location, or publicly-accessible image URL. If
     * both `content` and `source` are provided for an image, `content` takes
     * precedence and is used to perform the image annotation request.
     */
    source?: Schema$GoogleCloudVisionV1p1beta1ImageSource;
  }
  /**
   * If an image was produced from a file (e.g. a PDF), this message gives
   * information about the source of that image.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1ImageAnnotationContext {
    /**
     * If the file was a PDF or TIFF, this field gives the page number within
     * the file used to produce the image.
     */
    pageNumber?: number;
    /**
     * The URI of the file used to produce the image.
     */
    uri?: string;
  }
  /**
   * Image context and/or feature-specific parameters.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1ImageContext {
    /**
     * Parameters for crop hints annotation request.
     */
    cropHintsParams?: Schema$GoogleCloudVisionV1p1beta1CropHintsParams;
    /**
     * List of languages to use for TEXT_DETECTION. In most cases, an empty
     * value yields the best results since it enables automatic language
     * detection. For languages based on the Latin alphabet, setting
     * `language_hints` is not needed. In rare cases, when the language of the
     * text in the image is known, setting a hint will help get better results
     * (although it will be a significant hindrance if the hint is wrong). Text
     * detection returns an error if one or more of the specified languages is
     * not one of the [supported languages](/vision/docs/languages).
     */
    languageHints?: string[];
    /**
     * Not used.
     */
    latLongRect?: Schema$GoogleCloudVisionV1p1beta1LatLongRect;
    /**
     * Parameters for web detection.
     */
    webDetectionParams?: Schema$GoogleCloudVisionV1p1beta1WebDetectionParams;
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
   * External image source (Google Cloud Storage or web URL image location).
   */
  export interface Schema$GoogleCloudVisionV1p1beta1ImageSource {
    /**
     * **Use `image_uri` instead.**  The Google Cloud Storage  URI of the form
     * `gs://bucket_name/object_name`. Object versioning is not supported. See
     * [Google Cloud Storage Request
     * URIs](https://cloud.google.com/storage/docs/reference-uris) for more
     * info.
     */
    gcsImageUri?: string;
    /**
     * The URI of the source image. Can be either:  1. A Google Cloud Storage
     * URI of the form    `gs://bucket_name/object_name`. Object versioning is
     * not supported. See    [Google Cloud Storage Request
     * URIs](https://cloud.google.com/storage/docs/reference-uris) for more
     * info.  2. A publicly-accessible image HTTP/HTTPS URL. When fetching
     * images from    HTTP/HTTPS URLs, Google cannot guarantee that the request
     * will be    completed. Your request may fail if the specified host denies
     * the    request (e.g. due to request throttling or DOS prevention), or if
     * Google    throttles requests to the site for abuse prevention. You should
     * not    depend on externally-hosted images for production applications.
     * When both `gcs_image_uri` and `image_uri` are specified, `image_uri`
     * takes precedence.
     */
    imageUri?: string;
  }
  /**
   * The desired input location and metadata.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1InputConfig {
    /**
     * The Google Cloud Storage location to read the input from.
     */
    gcsSource?: Schema$GoogleCloudVisionV1p1beta1GcsSource;
    /**
     * The type of the file. Currently only &quot;application/pdf&quot; and
     * &quot;image/tiff&quot; are supported. Wildcards are not supported.
     */
    mimeType?: string;
  }
  /**
   * Rectangle determined by min and max `LatLng` pairs.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1LatLongRect {
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
   * Detected entity location information.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1LocationInfo {
    /**
     * lat/long location coordinates.
     */
    latLng?: Schema$LatLng;
  }
  /**
   * The desired output location and metadata.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1OutputConfig {
    /**
     * The max number of response protos to put into each output JSON file on
     * Google Cloud Storage. The valid range is [1, 100]. If not specified, the
     * default value is 20.  For example, for one pdf file with 100 pages, 100
     * response protos will be generated. If `batch_size` = 20, then 5 json
     * files each containing 20 response protos will be written under the prefix
     * `gcs_destination`.`uri`.  Currently, batch_size only applies to
     * GcsDestination, with potential future support for other output
     * configurations.
     */
    batchSize?: number;
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
    confidence?: number;
    /**
     * Page height. For PDFs the unit is points. For images (including TIFFs)
     * the unit is pixels.
     */
    height?: number;
    /**
     * Additional information detected on the page.
     */
    property?: Schema$GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;
    /**
     * Page width. For PDFs the unit is points. For images (including TIFFs) the
     * unit is pixels.
     */
    width?: number;
  }
  /**
   * Structural unit of text representing a number of words in certain order.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1Paragraph {
    /**
     * The bounding box for the paragraph. The vertices are in the order of
     * top-left, top-right, bottom-right, bottom-left. When a rotation of the
     * bounding box is detected the rotation is represented as around the
     * top-left corner as defined when the text is read in the &#39;natural&#39;
     * orientation. For example:   * when the text is horizontal it might look
     * like:      0----1      |    |      3----2   * when it&#39;s rotated 180
     * degrees around the top-left corner it becomes:      2----3      |    |
     * 1----0   and the vertice order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$GoogleCloudVisionV1p1beta1BoundingPoly;
    /**
     * Confidence of the OCR results for the paragraph. Range [0, 1].
     */
    confidence?: number;
    /**
     * Additional information detected for the paragraph.
     */
    property?: Schema$GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;
    /**
     * List of words in this paragraph.
     */
    words?: Schema$GoogleCloudVisionV1p1beta1Word[];
  }
  /**
   * A 3D position in the image, used primarily for Face detection landmarks. A
   * valid Position must have both x and y coordinates. The position coordinates
   * are in the same scale as the original image.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1Position {
    /**
     * X coordinate.
     */
    x?: number;
    /**
     * Y coordinate.
     */
    y?: number;
    /**
     * Z coordinate (or depth).
     */
    z?: number;
  }
  /**
   * A `Property` consists of a user-supplied name/value pair.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1Property {
    /**
     * Name of the property.
     */
    name?: string;
    /**
     * Value of numeric properties.
     */
    uint64Value?: string;
    /**
     * Value of the property.
     */
    value?: string;
  }
  /**
   * Set of features pertaining to the image, computed by computer vision
   * methods over safe-search verticals (for example, adult, spoof, medical,
   * violence).
   */
  export interface Schema$GoogleCloudVisionV1p1beta1SafeSearchAnnotation {
    /**
     * Represents the adult content likelihood for the image. Adult content may
     * contain elements such as nudity, pornographic images or cartoons, or
     * sexual activities.
     */
    adult?: string;
    /**
     * Likelihood that this is a medical image.
     */
    medical?: string;
    /**
     * Likelihood that the request image contains racy content. Racy content may
     * include (but is not limited to) skimpy or sheer clothing, strategically
     * covered nudity, lewd or provocative poses, or close-ups of sensitive body
     * areas.
     */
    racy?: string;
    /**
     * Spoof likelihood. The likelihood that an modification was made to the
     * image&#39;s canonical version to make it appear funny or offensive.
     */
    spoof?: string;
    /**
     * Likelihood that this image contains violent content.
     */
    violence?: string;
  }
  /**
   * A single symbol representation.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1Symbol {
    /**
     * The bounding box for the symbol. The vertices are in the order of
     * top-left, top-right, bottom-right, bottom-left. When a rotation of the
     * bounding box is detected the rotation is represented as around the
     * top-left corner as defined when the text is read in the &#39;natural&#39;
     * orientation. For example:   * when the text is horizontal it might look
     * like:      0----1      |    |      3----2   * when it&#39;s rotated 180
     * degrees around the top-left corner it becomes:      2----3      |    |
     * 1----0   and the vertice order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$GoogleCloudVisionV1p1beta1BoundingPoly;
    /**
     * Confidence of the OCR results for the symbol. Range [0, 1].
     */
    confidence?: number;
    /**
     * Additional information detected for the symbol.
     */
    property?: Schema$GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;
    /**
     * The actual UTF-8 representation of the symbol.
     */
    text?: string;
  }
  /**
   * TextAnnotation contains a structured representation of OCR extracted text.
   * The hierarchy of an OCR extracted text structure is like this:
   * TextAnnotation -&gt; Page -&gt; Block -&gt; Paragraph -&gt; Word -&gt;
   * Symbol Each structural component, starting from Page, may further have
   * their own properties. Properties describe detected languages, breaks etc..
   * Please refer to the TextAnnotation.TextProperty message definition below
   * for more detail.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1TextAnnotation {
    /**
     * List of pages detected by OCR.
     */
    pages?: Schema$GoogleCloudVisionV1p1beta1Page[];
    /**
     * UTF-8 text detected on the pages.
     */
    text?: string;
  }
  /**
   * Detected start or end of a structural component.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak {
    /**
     * True if break prepends the element.
     */
    isPrefix?: boolean;
    /**
     * Detected break type.
     */
    type?: string;
  }
  /**
   * Detected language for a structural component.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage {
    /**
     * Confidence of detected language. Range [0, 1].
     */
    confidence?: number;
    /**
     * The BCP-47 language code, such as &quot;en-US&quot; or
     * &quot;sr-Latn&quot;. For more information, see
     * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string;
  }
  /**
   * Additional information detected on the structural component.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1TextAnnotationTextProperty {
    /**
     * Detected start or end of a text segment.
     */
    detectedBreak?:
        Schema$GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak;
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?:
        Schema$GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage[];
  }
  /**
   * A vertex represents a 2D point in the image. NOTE: the vertex coordinates
   * are in the same scale as the original image.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1Vertex {
    /**
     * X coordinate.
     */
    x?: number;
    /**
     * Y coordinate.
     */
    y?: number;
  }
  /**
   * Relevant information for the image from the Internet.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1WebDetection {
    /**
     * Best guess text labels for the request image.
     */
    bestGuessLabels?: Schema$GoogleCloudVisionV1p1beta1WebDetectionWebLabel[];
    /**
     * Fully matching images from the Internet. Can include resized copies of
     * the query image.
     */
    fullMatchingImages?:
        Schema$GoogleCloudVisionV1p1beta1WebDetectionWebImage[];
    /**
     * Web pages containing the matching images from the Internet.
     */
    pagesWithMatchingImages?:
        Schema$GoogleCloudVisionV1p1beta1WebDetectionWebPage[];
    /**
     * Partial matching images from the Internet. Those images are similar
     * enough to share some key-point features. For example an original image
     * will likely have partial matching for its crops.
     */
    partialMatchingImages?:
        Schema$GoogleCloudVisionV1p1beta1WebDetectionWebImage[];
    /**
     * The visually similar image results.
     */
    visuallySimilarImages?:
        Schema$GoogleCloudVisionV1p1beta1WebDetectionWebImage[];
    /**
     * Deduced entities from similar images on the Internet.
     */
    webEntities?: Schema$GoogleCloudVisionV1p1beta1WebDetectionWebEntity[];
  }
  /**
   * Parameters for web detection request.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1WebDetectionParams {
    /**
     * Whether to include results derived from the geo information in the image.
     */
    includeGeoResults?: boolean;
  }
  /**
   * Entity deduced from similar images on the Internet.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1WebDetectionWebEntity {
    /**
     * Canonical description of the entity, in English.
     */
    description?: string;
    /**
     * Opaque entity ID.
     */
    entityId?: string;
    /**
     * Overall relevancy score for the entity. Not normalized and not comparable
     * across different image queries.
     */
    score?: number;
  }
  /**
   * Metadata for online images.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1WebDetectionWebImage {
    /**
     * (Deprecated) Overall relevancy score for the image.
     */
    score?: number;
    /**
     * The result image URL.
     */
    url?: string;
  }
  /**
   * Label to provide extra metadata for the web detection.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1WebDetectionWebLabel {
    /**
     * Label for extra metadata.
     */
    label?: string;
    /**
     * The BCP-47 language code for `label`, such as &quot;en-US&quot; or
     * &quot;sr-Latn&quot;. For more information, see
     * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string;
  }
  /**
   * Metadata for web pages.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1WebDetectionWebPage {
    /**
     * Fully matching images on the page. Can include resized copies of the
     * query image.
     */
    fullMatchingImages?:
        Schema$GoogleCloudVisionV1p1beta1WebDetectionWebImage[];
    /**
     * Title for the web page, may contain HTML markups.
     */
    pageTitle?: string;
    /**
     * Partial matching images on the page. Those images are similar enough to
     * share some key-point features. For example an original image will likely
     * have partial matching for its crops.
     */
    partialMatchingImages?:
        Schema$GoogleCloudVisionV1p1beta1WebDetectionWebImage[];
    /**
     * (Deprecated) Overall relevancy score for the web page.
     */
    score?: number;
    /**
     * The result web page URL.
     */
    url?: string;
  }
  /**
   * A word representation.
   */
  export interface Schema$GoogleCloudVisionV1p1beta1Word {
    /**
     * The bounding box for the word. The vertices are in the order of top-left,
     * top-right, bottom-right, bottom-left. When a rotation of the bounding box
     * is detected the rotation is represented as around the top-left corner as
     * defined when the text is read in the &#39;natural&#39; orientation. For
     * example:   * when the text is horizontal it might look like:      0----1
     * |    |      3----2   * when it&#39;s rotated 180 degrees around the
     * top-left corner it becomes:      2----3      |    |      1----0   and the
     * vertice order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$GoogleCloudVisionV1p1beta1BoundingPoly;
    /**
     * Confidence of the OCR results for the word. Range [0, 1].
     */
    confidence?: number;
    /**
     * Additional information detected for the word.
     */
    property?: Schema$GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;
    /**
     * List of symbols in the word. The order of the symbols follows the natural
     * reading order.
     */
    symbols?: Schema$GoogleCloudVisionV1p1beta1Symbol[];
  }
  /**
   * Response to a single file annotation request. A file may contain one or
   * more images, which individually have their own responses.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1AnnotateFileResponse {
    /**
     * Information about the file for which this response is generated.
     */
    inputConfig?: Schema$GoogleCloudVisionV1p2beta1InputConfig;
    /**
     * Individual responses to images found within the file.
     */
    responses?: Schema$GoogleCloudVisionV1p2beta1AnnotateImageResponse[];
  }
  /**
   * Response to an image annotation request.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1AnnotateImageResponse {
    /**
     * If present, contextual information is needed to understand where this
     * image comes from.
     */
    context?: Schema$GoogleCloudVisionV1p2beta1ImageAnnotationContext;
    /**
     * If present, crop hints have completed successfully.
     */
    cropHintsAnnotation?: Schema$GoogleCloudVisionV1p2beta1CropHintsAnnotation;
    /**
     * If set, represents the error message for the operation. Note that
     * filled-in image annotations are guaranteed to be correct, even when
     * `error` is set.
     */
    error?: Schema$Status;
    /**
     * If present, face detection has completed successfully.
     */
    faceAnnotations?: Schema$GoogleCloudVisionV1p2beta1FaceAnnotation[];
    /**
     * If present, text (OCR) detection or document (OCR) text detection has
     * completed successfully. This annotation provides the structural hierarchy
     * for the OCR detected text.
     */
    fullTextAnnotation?: Schema$GoogleCloudVisionV1p2beta1TextAnnotation;
    /**
     * If present, image properties were extracted successfully.
     */
    imagePropertiesAnnotation?:
        Schema$GoogleCloudVisionV1p2beta1ImageProperties;
    /**
     * If present, label detection has completed successfully.
     */
    labelAnnotations?: Schema$GoogleCloudVisionV1p2beta1EntityAnnotation[];
    /**
     * If present, landmark detection has completed successfully.
     */
    landmarkAnnotations?: Schema$GoogleCloudVisionV1p2beta1EntityAnnotation[];
    /**
     * If present, logo detection has completed successfully.
     */
    logoAnnotations?: Schema$GoogleCloudVisionV1p2beta1EntityAnnotation[];
    /**
     * If present, safe-search annotation has completed successfully.
     */
    safeSearchAnnotation?:
        Schema$GoogleCloudVisionV1p2beta1SafeSearchAnnotation;
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
     * The list of file annotation responses, one for each request in
     * AsyncBatchAnnotateFilesRequest.
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
    blockType?: string;
    /**
     * The bounding box for the block. The vertices are in the order of
     * top-left, top-right, bottom-right, bottom-left. When a rotation of the
     * bounding box is detected the rotation is represented as around the
     * top-left corner as defined when the text is read in the &#39;natural&#39;
     * orientation. For example:  * when the text is horizontal it might look
     * like:          0----1         |    |         3----2  * when it&#39;s
     * rotated 180 degrees around the top-left corner it becomes: 2----3 |    |
     * 1----0    and the vertice order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$GoogleCloudVisionV1p2beta1BoundingPoly;
    /**
     * Confidence of the OCR results on the block. Range [0, 1].
     */
    confidence?: number;
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
   * Color information consists of RGB channels, score, and the fraction of the
   * image that the color occupies in the image.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1ColorInfo {
    /**
     * RGB components of the color.
     */
    color?: Schema$Color;
    /**
     * The fraction of pixels the color occupies in the image. Value in range
     * [0, 1].
     */
    pixelFraction?: number;
    /**
     * Image-specific score for this color. Value in range [0, 1].
     */
    score?: number;
  }
  /**
   * Single crop hint that is used to generate a new crop when serving an image.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1CropHint {
    /**
     * The bounding polygon for the crop region. The coordinates of the bounding
     * box are in the original image&#39;s scale, as returned in `ImageParams`.
     */
    boundingPoly?: Schema$GoogleCloudVisionV1p2beta1BoundingPoly;
    /**
     * Confidence of this being a salient region.  Range [0, 1].
     */
    confidence?: number;
    /**
     * Fraction of importance of this salient region with respect to the
     * original image.
     */
    importanceFraction?: number;
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
     * Image region to which this entity belongs. Not produced for
     * `LABEL_DETECTION` features.
     */
    boundingPoly?: Schema$GoogleCloudVisionV1p2beta1BoundingPoly;
    /**
     * **Deprecated. Use `score` instead.** The accuracy of the entity detection
     * in an image. For example, for an image in which the &quot;Eiffel
     * Tower&quot; entity is detected, this field represents the confidence that
     * there is a tower in the query image. Range [0, 1].
     */
    confidence?: number;
    /**
     * Entity textual description, expressed in its `locale` language.
     */
    description?: string;
    /**
     * The language code for the locale in which the entity textual
     * `description` is expressed.
     */
    locale?: string;
    /**
     * The location information for the detected entity. Multiple `LocationInfo`
     * elements can be present because one location may indicate the location of
     * the scene in the image, and another location may indicate the location of
     * the place where the image was taken. Location information is usually
     * present for landmarks.
     */
    locations?: Schema$GoogleCloudVisionV1p2beta1LocationInfo[];
    /**
     * Opaque entity ID. Some IDs may be available in [Google Knowledge Graph
     * Search API](https://developers.google.com/knowledge-graph/).
     */
    mid?: string;
    /**
     * Some entities may have optional user-supplied `Property` (name/value)
     * fields, such a score or string that qualifies the entity.
     */
    properties?: Schema$GoogleCloudVisionV1p2beta1Property[];
    /**
     * Overall score of the result. Range [0, 1].
     */
    score?: number;
    /**
     * The relevancy of the ICA (Image Content Annotation) label to the image.
     * For example, the relevancy of &quot;tower&quot; is likely higher to an
     * image containing the detected &quot;Eiffel Tower&quot; than to an image
     * containing a detected distant towering building, even though the
     * confidence that there is a tower in each image may be the same. Range [0,
     * 1].
     */
    topicality?: number;
  }
  /**
   * A face annotation object contains the results of face detection.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1FaceAnnotation {
    /**
     * Anger likelihood.
     */
    angerLikelihood?: string;
    /**
     * Blurred likelihood.
     */
    blurredLikelihood?: string;
    /**
     * The bounding polygon around the face. The coordinates of the bounding box
     * are in the original image&#39;s scale, as returned in `ImageParams`. The
     * bounding box is computed to &quot;frame&quot; the face in accordance with
     * human expectations. It is based on the landmarker results. Note that one
     * or more x and/or y coordinates may not be generated in the `BoundingPoly`
     * (the polygon will be unbounded) if only a partial face appears in the
     * image to be annotated.
     */
    boundingPoly?: Schema$GoogleCloudVisionV1p2beta1BoundingPoly;
    /**
     * Detection confidence. Range [0, 1].
     */
    detectionConfidence?: number;
    /**
     * The `fd_bounding_poly` bounding polygon is tighter than the
     * `boundingPoly`, and encloses only the skin part of the face. Typically,
     * it is used to eliminate the face from any image analysis that detects the
     * &quot;amount of skin&quot; visible in an image. It is not based on the
     * landmarker results, only on the initial face detection, hence the
     * &lt;code&gt;fd&lt;/code&gt; (face detection) prefix.
     */
    fdBoundingPoly?: Schema$GoogleCloudVisionV1p2beta1BoundingPoly;
    /**
     * Headwear likelihood.
     */
    headwearLikelihood?: string;
    /**
     * Joy likelihood.
     */
    joyLikelihood?: string;
    /**
     * Face landmarking confidence. Range [0, 1].
     */
    landmarkingConfidence?: number;
    /**
     * Detected face landmarks.
     */
    landmarks?: Schema$GoogleCloudVisionV1p2beta1FaceAnnotationLandmark[];
    /**
     * Yaw angle, which indicates the leftward/rightward angle that the face is
     * pointing relative to the vertical plane perpendicular to the image. Range
     * [-180,180].
     */
    panAngle?: number;
    /**
     * Roll angle, which indicates the amount of clockwise/anti-clockwise
     * rotation of the face relative to the image vertical about the axis
     * perpendicular to the face. Range [-180,180].
     */
    rollAngle?: number;
    /**
     * Sorrow likelihood.
     */
    sorrowLikelihood?: string;
    /**
     * Surprise likelihood.
     */
    surpriseLikelihood?: string;
    /**
     * Pitch angle, which indicates the upwards/downwards angle that the face is
     * pointing relative to the image&#39;s horizontal plane. Range [-180,180].
     */
    tiltAngle?: number;
    /**
     * Under-exposed likelihood.
     */
    underExposedLikelihood?: string;
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
    type?: string;
  }
  /**
   * The Google Cloud Storage location where the output will be written to.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1GcsDestination {
    /**
     * Google Cloud Storage URI where the results will be stored. Results will
     * be in JSON format and preceded by its corresponding input URI. This field
     * can either represent a single file, or a prefix for multiple outputs.
     * Prefixes must end in a `/`.  Examples:  *    File:
     * gs://bucket-name/filename.json *    Prefix: gs://bucket-name/prefix/here/
     * *    File: gs://bucket-name/prefix/here  If multiple outputs, each
     * response is still AnnotateFileResponse, each of which contains some
     * subset of the full list of AnnotateImageResponse. Multiple outputs can
     * happen if, for example, the output JSON is too large and overflows into
     * multiple sharded files.
     */
    uri?: string;
  }
  /**
   * The Google Cloud Storage location where the input will be read from.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1GcsSource {
    /**
     * Google Cloud Storage URI for the input file. This must only be a Google
     * Cloud Storage object. Wildcards are not currently supported.
     */
    uri?: string;
  }
  /**
   * If an image was produced from a file (e.g. a PDF), this message gives
   * information about the source of that image.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1ImageAnnotationContext {
    /**
     * If the file was a PDF or TIFF, this field gives the page number within
     * the file used to produce the image.
     */
    pageNumber?: number;
    /**
     * The URI of the file used to produce the image.
     */
    uri?: string;
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
     * The Google Cloud Storage location to read the input from.
     */
    gcsSource?: Schema$GoogleCloudVisionV1p2beta1GcsSource;
    /**
     * The type of the file. Currently only &quot;application/pdf&quot; and
     * &quot;image/tiff&quot; are supported. Wildcards are not supported.
     */
    mimeType?: string;
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
   * A vertex represents a 2D point in the image. NOTE: the normalized vertex
   * coordinates are relative to the original image and range from 0 to 1.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1NormalizedVertex {
    /**
     * X coordinate.
     */
    x?: number;
    /**
     * Y coordinate.
     */
    y?: number;
  }
  /**
   * Contains metadata for the BatchAnnotateImages operation.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1OperationMetadata {
    /**
     * The time when the batch request was received.
     */
    createTime?: string;
    /**
     * Current state of the batch operation.
     */
    state?: string;
    /**
     * The time when the operation result was last updated.
     */
    updateTime?: string;
  }
  /**
   * The desired output location and metadata.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1OutputConfig {
    /**
     * The max number of response protos to put into each output JSON file on
     * Google Cloud Storage. The valid range is [1, 100]. If not specified, the
     * default value is 20.  For example, for one pdf file with 100 pages, 100
     * response protos will be generated. If `batch_size` = 20, then 5 json
     * files each containing 20 response protos will be written under the prefix
     * `gcs_destination`.`uri`.  Currently, batch_size only applies to
     * GcsDestination, with potential future support for other output
     * configurations.
     */
    batchSize?: number;
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
    confidence?: number;
    /**
     * Page height. For PDFs the unit is points. For images (including TIFFs)
     * the unit is pixels.
     */
    height?: number;
    /**
     * Additional information detected on the page.
     */
    property?: Schema$GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;
    /**
     * Page width. For PDFs the unit is points. For images (including TIFFs) the
     * unit is pixels.
     */
    width?: number;
  }
  /**
   * Structural unit of text representing a number of words in certain order.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1Paragraph {
    /**
     * The bounding box for the paragraph. The vertices are in the order of
     * top-left, top-right, bottom-right, bottom-left. When a rotation of the
     * bounding box is detected the rotation is represented as around the
     * top-left corner as defined when the text is read in the &#39;natural&#39;
     * orientation. For example:   * when the text is horizontal it might look
     * like:      0----1      |    |      3----2   * when it&#39;s rotated 180
     * degrees around the top-left corner it becomes:      2----3      |    |
     * 1----0   and the vertice order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$GoogleCloudVisionV1p2beta1BoundingPoly;
    /**
     * Confidence of the OCR results for the paragraph. Range [0, 1].
     */
    confidence?: number;
    /**
     * Additional information detected for the paragraph.
     */
    property?: Schema$GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;
    /**
     * List of words in this paragraph.
     */
    words?: Schema$GoogleCloudVisionV1p2beta1Word[];
  }
  /**
   * A 3D position in the image, used primarily for Face detection landmarks. A
   * valid Position must have both x and y coordinates. The position coordinates
   * are in the same scale as the original image.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1Position {
    /**
     * X coordinate.
     */
    x?: number;
    /**
     * Y coordinate.
     */
    y?: number;
    /**
     * Z coordinate (or depth).
     */
    z?: number;
  }
  /**
   * A `Property` consists of a user-supplied name/value pair.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1Property {
    /**
     * Name of the property.
     */
    name?: string;
    /**
     * Value of numeric properties.
     */
    uint64Value?: string;
    /**
     * Value of the property.
     */
    value?: string;
  }
  /**
   * Set of features pertaining to the image, computed by computer vision
   * methods over safe-search verticals (for example, adult, spoof, medical,
   * violence).
   */
  export interface Schema$GoogleCloudVisionV1p2beta1SafeSearchAnnotation {
    /**
     * Represents the adult content likelihood for the image. Adult content may
     * contain elements such as nudity, pornographic images or cartoons, or
     * sexual activities.
     */
    adult?: string;
    /**
     * Likelihood that this is a medical image.
     */
    medical?: string;
    /**
     * Likelihood that the request image contains racy content. Racy content may
     * include (but is not limited to) skimpy or sheer clothing, strategically
     * covered nudity, lewd or provocative poses, or close-ups of sensitive body
     * areas.
     */
    racy?: string;
    /**
     * Spoof likelihood. The likelihood that an modification was made to the
     * image&#39;s canonical version to make it appear funny or offensive.
     */
    spoof?: string;
    /**
     * Likelihood that this image contains violent content.
     */
    violence?: string;
  }
  /**
   * A single symbol representation.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1Symbol {
    /**
     * The bounding box for the symbol. The vertices are in the order of
     * top-left, top-right, bottom-right, bottom-left. When a rotation of the
     * bounding box is detected the rotation is represented as around the
     * top-left corner as defined when the text is read in the &#39;natural&#39;
     * orientation. For example:   * when the text is horizontal it might look
     * like:      0----1      |    |      3----2   * when it&#39;s rotated 180
     * degrees around the top-left corner it becomes:      2----3      |    |
     * 1----0   and the vertice order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$GoogleCloudVisionV1p2beta1BoundingPoly;
    /**
     * Confidence of the OCR results for the symbol. Range [0, 1].
     */
    confidence?: number;
    /**
     * Additional information detected for the symbol.
     */
    property?: Schema$GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;
    /**
     * The actual UTF-8 representation of the symbol.
     */
    text?: string;
  }
  /**
   * TextAnnotation contains a structured representation of OCR extracted text.
   * The hierarchy of an OCR extracted text structure is like this:
   * TextAnnotation -&gt; Page -&gt; Block -&gt; Paragraph -&gt; Word -&gt;
   * Symbol Each structural component, starting from Page, may further have
   * their own properties. Properties describe detected languages, breaks etc..
   * Please refer to the TextAnnotation.TextProperty message definition below
   * for more detail.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1TextAnnotation {
    /**
     * List of pages detected by OCR.
     */
    pages?: Schema$GoogleCloudVisionV1p2beta1Page[];
    /**
     * UTF-8 text detected on the pages.
     */
    text?: string;
  }
  /**
   * Detected start or end of a structural component.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak {
    /**
     * True if break prepends the element.
     */
    isPrefix?: boolean;
    /**
     * Detected break type.
     */
    type?: string;
  }
  /**
   * Detected language for a structural component.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage {
    /**
     * Confidence of detected language. Range [0, 1].
     */
    confidence?: number;
    /**
     * The BCP-47 language code, such as &quot;en-US&quot; or
     * &quot;sr-Latn&quot;. For more information, see
     * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string;
  }
  /**
   * Additional information detected on the structural component.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1TextAnnotationTextProperty {
    /**
     * Detected start or end of a text segment.
     */
    detectedBreak?:
        Schema$GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak;
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?:
        Schema$GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage[];
  }
  /**
   * A vertex represents a 2D point in the image. NOTE: the vertex coordinates
   * are in the same scale as the original image.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1Vertex {
    /**
     * X coordinate.
     */
    x?: number;
    /**
     * Y coordinate.
     */
    y?: number;
  }
  /**
   * Relevant information for the image from the Internet.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1WebDetection {
    /**
     * Best guess text labels for the request image.
     */
    bestGuessLabels?: Schema$GoogleCloudVisionV1p2beta1WebDetectionWebLabel[];
    /**
     * Fully matching images from the Internet. Can include resized copies of
     * the query image.
     */
    fullMatchingImages?:
        Schema$GoogleCloudVisionV1p2beta1WebDetectionWebImage[];
    /**
     * Web pages containing the matching images from the Internet.
     */
    pagesWithMatchingImages?:
        Schema$GoogleCloudVisionV1p2beta1WebDetectionWebPage[];
    /**
     * Partial matching images from the Internet. Those images are similar
     * enough to share some key-point features. For example an original image
     * will likely have partial matching for its crops.
     */
    partialMatchingImages?:
        Schema$GoogleCloudVisionV1p2beta1WebDetectionWebImage[];
    /**
     * The visually similar image results.
     */
    visuallySimilarImages?:
        Schema$GoogleCloudVisionV1p2beta1WebDetectionWebImage[];
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
    description?: string;
    /**
     * Opaque entity ID.
     */
    entityId?: string;
    /**
     * Overall relevancy score for the entity. Not normalized and not comparable
     * across different image queries.
     */
    score?: number;
  }
  /**
   * Metadata for online images.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1WebDetectionWebImage {
    /**
     * (Deprecated) Overall relevancy score for the image.
     */
    score?: number;
    /**
     * The result image URL.
     */
    url?: string;
  }
  /**
   * Label to provide extra metadata for the web detection.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1WebDetectionWebLabel {
    /**
     * Label for extra metadata.
     */
    label?: string;
    /**
     * The BCP-47 language code for `label`, such as &quot;en-US&quot; or
     * &quot;sr-Latn&quot;. For more information, see
     * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string;
  }
  /**
   * Metadata for web pages.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1WebDetectionWebPage {
    /**
     * Fully matching images on the page. Can include resized copies of the
     * query image.
     */
    fullMatchingImages?:
        Schema$GoogleCloudVisionV1p2beta1WebDetectionWebImage[];
    /**
     * Title for the web page, may contain HTML markups.
     */
    pageTitle?: string;
    /**
     * Partial matching images on the page. Those images are similar enough to
     * share some key-point features. For example an original image will likely
     * have partial matching for its crops.
     */
    partialMatchingImages?:
        Schema$GoogleCloudVisionV1p2beta1WebDetectionWebImage[];
    /**
     * (Deprecated) Overall relevancy score for the web page.
     */
    score?: number;
    /**
     * The result web page URL.
     */
    url?: string;
  }
  /**
   * A word representation.
   */
  export interface Schema$GoogleCloudVisionV1p2beta1Word {
    /**
     * The bounding box for the word. The vertices are in the order of top-left,
     * top-right, bottom-right, bottom-left. When a rotation of the bounding box
     * is detected the rotation is represented as around the top-left corner as
     * defined when the text is read in the &#39;natural&#39; orientation. For
     * example:   * when the text is horizontal it might look like:      0----1
     * |    |      3----2   * when it&#39;s rotated 180 degrees around the
     * top-left corner it becomes:      2----3      |    |      1----0   and the
     * vertice order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$GoogleCloudVisionV1p2beta1BoundingPoly;
    /**
     * Confidence of the OCR results for the word. Range [0, 1].
     */
    confidence?: number;
    /**
     * Additional information detected for the word.
     */
    property?: Schema$GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;
    /**
     * List of symbols in the word. The order of the symbols follows the natural
     * reading order.
     */
    symbols?: Schema$GoogleCloudVisionV1p2beta1Symbol[];
  }
  /**
   * Metadata for the batch operations such as the current state.  This is
   * included in the `metadata` field of the `Operation` returned by the
   * `GetOperation` call of the `google::longrunning::Operations` service.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1BatchOperationMetadata {
    /**
     * The time when the batch request is finished and
     * google.longrunning.Operation.done is set to true.
     */
    endTime?: string;
    /**
     * The current state of the batch operation.
     */
    state?: string;
    /**
     * The time when the batch request was submitted to the server.
     */
    submitTime?: string;
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
   * Response message for the `ImportProductSets` method.  This message is
   * returned by the google.longrunning.Operations.GetOperation method in the
   * returned google.longrunning.Operation.response field.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1ImportProductSetsResponse {
    /**
     * The list of reference_images that are imported successfully.
     */
    referenceImages?: Schema$GoogleCloudVisionV1p3beta1ReferenceImage[];
    /**
     * The rpc status for each ImportProductSet request, including both
     * successes and errors.  The number of statuses here matches the number of
     * lines in the csv file, and statuses[i] stores the success or failure
     * status of processing the i-th line of the csv, starting from line 0.
     */
    statuses?: Schema$Status[];
  }
  /**
   * A vertex represents a 2D point in the image. NOTE: the normalized vertex
   * coordinates are relative to the original image and range from 0 to 1.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1NormalizedVertex {
    /**
     * X coordinate.
     */
    x?: number;
    /**
     * Y coordinate.
     */
    y?: number;
  }
  /**
   * A `ReferenceImage` represents a product image and its associated metadata,
   * such as bounding boxes.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1ReferenceImage {
    /**
     * Bounding polygons around the areas of interest in the reference image.
     * Optional. If this field is empty, the system will try to detect regions
     * of interest. At most 10 bounding polygons will be used.  The provided
     * shape is converted into a non-rotated rectangle. Once converted, the
     * small edge of the rectangle must be greater than or equal to 300 pixels.
     * The aspect ratio must be 1:4 or less (i.e. 1:3 is ok; 1:5 is not).
     */
    boundingPolys?: Schema$GoogleCloudVisionV1p3beta1BoundingPoly[];
    /**
     * The resource name of the reference image.  Format is:
     * `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`.
     * This field is ignored when creating a reference image.
     */
    name?: string;
    /**
     * The Google Cloud Storage URI of the reference image.  The URI must start
     * with `gs://`.  Required.
     */
    uri?: string;
  }
  /**
   * A vertex represents a 2D point in the image. NOTE: the vertex coordinates
   * are in the same scale as the original image.
   */
  export interface Schema$GoogleCloudVisionV1p3beta1Vertex {
    /**
     * X coordinate.
     */
    x?: number;
    /**
     * Y coordinate.
     */
    y?: number;
  }
  /**
   * If an image was produced from a file (e.g. a PDF), this message gives
   * information about the source of that image.
   */
  export interface Schema$ImageAnnotationContext {
    /**
     * If the file was a PDF or TIFF, this field gives the page number within
     * the file used to produce the image.
     */
    pageNumber?: number;
    /**
     * The URI of the file used to produce the image.
     */
    uri?: string;
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
   * The desired input location and metadata.
   */
  export interface Schema$InputConfig {
    /**
     * The Google Cloud Storage location to read the input from.
     */
    gcsSource?: Schema$GcsSource;
    /**
     * The type of the file. Currently only &quot;application/pdf&quot; and
     * &quot;image/tiff&quot; are supported. Wildcards are not supported.
     */
    mimeType?: string;
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
    type?: string;
  }
  /**
   * An object representing a latitude/longitude pair. This is expressed as a
   * pair of doubles representing degrees latitude and degrees longitude. Unless
   * specified otherwise, this must conform to the &lt;a
   * href=&quot;http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf&quot;&gt;WGS84
   * standard&lt;/a&gt;. Values must be within normalized ranges.
   */
  export interface Schema$LatLng {
    /**
     * The latitude in degrees. It must be in the range [-90.0, +90.0].
     */
    latitude?: number;
    /**
     * The longitude in degrees. It must be in the range [-180.0, +180.0].
     */
    longitude?: number;
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
   * A vertex represents a 2D point in the image. NOTE: the normalized vertex
   * coordinates are relative to the original image and range from 0 to 1.
   */
  export interface Schema$NormalizedVertex {
    /**
     * X coordinate.
     */
    x?: number;
    /**
     * Y coordinate.
     */
    y?: number;
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
   * Contains metadata for the BatchAnnotateImages operation.
   */
  export interface Schema$OperationMetadata {
    /**
     * The time when the batch request was received.
     */
    createTime?: string;
    /**
     * Current state of the batch operation.
     */
    state?: string;
    /**
     * The time when the operation result was last updated.
     */
    updateTime?: string;
  }
  /**
   * The desired output location and metadata.
   */
  export interface Schema$OutputConfig {
    /**
     * The max number of response protos to put into each output JSON file on
     * Google Cloud Storage. The valid range is [1, 100]. If not specified, the
     * default value is 20.  For example, for one pdf file with 100 pages, 100
     * response protos will be generated. If `batch_size` = 20, then 5 json
     * files each containing 20 response protos will be written under the prefix
     * `gcs_destination`.`uri`.  Currently, batch_size only applies to
     * GcsDestination, with potential future support for other output
     * configurations.
     */
    batchSize?: number;
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
    confidence?: number;
    /**
     * Page height. For PDFs the unit is points. For images (including TIFFs)
     * the unit is pixels.
     */
    height?: number;
    /**
     * Additional information detected on the page.
     */
    property?: Schema$TextProperty;
    /**
     * Page width. For PDFs the unit is points. For images (including TIFFs) the
     * unit is pixels.
     */
    width?: number;
  }
  /**
   * Structural unit of text representing a number of words in certain order.
   */
  export interface Schema$Paragraph {
    /**
     * The bounding box for the paragraph. The vertices are in the order of
     * top-left, top-right, bottom-right, bottom-left. When a rotation of the
     * bounding box is detected the rotation is represented as around the
     * top-left corner as defined when the text is read in the &#39;natural&#39;
     * orientation. For example:   * when the text is horizontal it might look
     * like:      0----1      |    |      3----2   * when it&#39;s rotated 180
     * degrees around the top-left corner it becomes:      2----3      |    |
     * 1----0   and the vertice order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$BoundingPoly;
    /**
     * Confidence of the OCR results for the paragraph. Range [0, 1].
     */
    confidence?: number;
    /**
     * Additional information detected for the paragraph.
     */
    property?: Schema$TextProperty;
    /**
     * List of words in this paragraph.
     */
    words?: Schema$Word[];
  }
  /**
   * A 3D position in the image, used primarily for Face detection landmarks. A
   * valid Position must have both x and y coordinates. The position coordinates
   * are in the same scale as the original image.
   */
  export interface Schema$Position {
    /**
     * X coordinate.
     */
    x?: number;
    /**
     * Y coordinate.
     */
    y?: number;
    /**
     * Z coordinate (or depth).
     */
    z?: number;
  }
  /**
   * A `Property` consists of a user-supplied name/value pair.
   */
  export interface Schema$Property {
    /**
     * Name of the property.
     */
    name?: string;
    /**
     * Value of numeric properties.
     */
    uint64Value?: string;
    /**
     * Value of the property.
     */
    value?: string;
  }
  /**
   * Set of features pertaining to the image, computed by computer vision
   * methods over safe-search verticals (for example, adult, spoof, medical,
   * violence).
   */
  export interface Schema$SafeSearchAnnotation {
    /**
     * Represents the adult content likelihood for the image. Adult content may
     * contain elements such as nudity, pornographic images or cartoons, or
     * sexual activities.
     */
    adult?: string;
    /**
     * Likelihood that this is a medical image.
     */
    medical?: string;
    /**
     * Likelihood that the request image contains racy content. Racy content may
     * include (but is not limited to) skimpy or sheer clothing, strategically
     * covered nudity, lewd or provocative poses, or close-ups of sensitive body
     * areas.
     */
    racy?: string;
    /**
     * Spoof likelihood. The likelihood that an modification was made to the
     * image&#39;s canonical version to make it appear funny or offensive.
     */
    spoof?: string;
    /**
     * Likelihood that this image contains violent content.
     */
    violence?: string;
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
   * A single symbol representation.
   */
  export interface Schema$Symbol {
    /**
     * The bounding box for the symbol. The vertices are in the order of
     * top-left, top-right, bottom-right, bottom-left. When a rotation of the
     * bounding box is detected the rotation is represented as around the
     * top-left corner as defined when the text is read in the &#39;natural&#39;
     * orientation. For example:   * when the text is horizontal it might look
     * like:      0----1      |    |      3----2   * when it&#39;s rotated 180
     * degrees around the top-left corner it becomes:      2----3      |    |
     * 1----0   and the vertice order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$BoundingPoly;
    /**
     * Confidence of the OCR results for the symbol. Range [0, 1].
     */
    confidence?: number;
    /**
     * Additional information detected for the symbol.
     */
    property?: Schema$TextProperty;
    /**
     * The actual UTF-8 representation of the symbol.
     */
    text?: string;
  }
  /**
   * TextAnnotation contains a structured representation of OCR extracted text.
   * The hierarchy of an OCR extracted text structure is like this:
   * TextAnnotation -&gt; Page -&gt; Block -&gt; Paragraph -&gt; Word -&gt;
   * Symbol Each structural component, starting from Page, may further have
   * their own properties. Properties describe detected languages, breaks etc..
   * Please refer to the TextAnnotation.TextProperty message definition below
   * for more detail.
   */
  export interface Schema$TextAnnotation {
    /**
     * List of pages detected by OCR.
     */
    pages?: Schema$Page[];
    /**
     * UTF-8 text detected on the pages.
     */
    text?: string;
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
   * A vertex represents a 2D point in the image. NOTE: the vertex coordinates
   * are in the same scale as the original image.
   */
  export interface Schema$Vertex {
    /**
     * X coordinate.
     */
    x?: number;
    /**
     * Y coordinate.
     */
    y?: number;
  }
  /**
   * Relevant information for the image from the Internet.
   */
  export interface Schema$WebDetection {
    /**
     * Best guess text labels for the request image.
     */
    bestGuessLabels?: Schema$WebLabel[];
    /**
     * Fully matching images from the Internet. Can include resized copies of
     * the query image.
     */
    fullMatchingImages?: Schema$WebImage[];
    /**
     * Web pages containing the matching images from the Internet.
     */
    pagesWithMatchingImages?: Schema$WebPage[];
    /**
     * Partial matching images from the Internet. Those images are similar
     * enough to share some key-point features. For example an original image
     * will likely have partial matching for its crops.
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
   * Entity deduced from similar images on the Internet.
   */
  export interface Schema$WebEntity {
    /**
     * Canonical description of the entity, in English.
     */
    description?: string;
    /**
     * Opaque entity ID.
     */
    entityId?: string;
    /**
     * Overall relevancy score for the entity. Not normalized and not comparable
     * across different image queries.
     */
    score?: number;
  }
  /**
   * Metadata for online images.
   */
  export interface Schema$WebImage {
    /**
     * (Deprecated) Overall relevancy score for the image.
     */
    score?: number;
    /**
     * The result image URL.
     */
    url?: string;
  }
  /**
   * Label to provide extra metadata for the web detection.
   */
  export interface Schema$WebLabel {
    /**
     * Label for extra metadata.
     */
    label?: string;
    /**
     * The BCP-47 language code for `label`, such as &quot;en-US&quot; or
     * &quot;sr-Latn&quot;. For more information, see
     * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string;
  }
  /**
   * Metadata for web pages.
   */
  export interface Schema$WebPage {
    /**
     * Fully matching images on the page. Can include resized copies of the
     * query image.
     */
    fullMatchingImages?: Schema$WebImage[];
    /**
     * Title for the web page, may contain HTML markups.
     */
    pageTitle?: string;
    /**
     * Partial matching images on the page. Those images are similar enough to
     * share some key-point features. For example an original image will likely
     * have partial matching for its crops.
     */
    partialMatchingImages?: Schema$WebImage[];
    /**
     * (Deprecated) Overall relevancy score for the web page.
     */
    score?: number;
    /**
     * The result web page URL.
     */
    url?: string;
  }
  /**
   * A word representation.
   */
  export interface Schema$Word {
    /**
     * The bounding box for the word. The vertices are in the order of top-left,
     * top-right, bottom-right, bottom-left. When a rotation of the bounding box
     * is detected the rotation is represented as around the top-left corner as
     * defined when the text is read in the &#39;natural&#39; orientation. For
     * example:   * when the text is horizontal it might look like:      0----1
     * |    |      3----2   * when it&#39;s rotated 180 degrees around the
     * top-left corner it becomes:      2----3      |    |      1----0   and the
     * vertice order will still be (0, 1, 2, 3).
     */
    boundingBox?: Schema$BoundingPoly;
    /**
     * Confidence of the OCR results for the word. Range [0, 1].
     */
    confidence?: number;
    /**
     * Additional information detected for the word.
     */
    property?: Schema$TextProperty;
    /**
     * List of symbols in the word. The order of the symbols follows the natural
     * reading order.
     */
    symbols?: Schema$Symbol[];
  }


  export class Resource$Files {
    root: Vision;
    constructor(root: Vision) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * vision.files.asyncBatchAnnotate
     * @desc Run asynchronous image detection and annotation for a list of
     * generic files, such as PDF files, which may contain multiple pages and
     * multiple images per page. Progress and results can be retrieved through
     * the `google.longrunning.Operations` interface. `Operation.metadata`
     * contains `OperationMetadata` (metadata). `Operation.response` contains
     * `AsyncBatchAnnotateFilesResponse` (results).
     * @alias vision.files.asyncBatchAnnotate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    asyncBatchAnnotate(
        params?: Params$Resource$Files$Asyncbatchannotate,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    asyncBatchAnnotate(
        params: Params$Resource$Files$Asyncbatchannotate,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    asyncBatchAnnotate(
        params: Params$Resource$Files$Asyncbatchannotate,
        callback: BodyResponseCallback<Schema$Operation>): void;
    asyncBatchAnnotate(callback: BodyResponseCallback<Schema$Operation>): void;
    asyncBatchAnnotate(
        paramsOrCallback?: Params$Resource$Files$Asyncbatchannotate|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Files$Asyncbatchannotate;
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
              url: (rootUrl + '/v1p1beta1/files:asyncBatchAnnotate')
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
  }

  export interface Params$Resource$Files$Asyncbatchannotate {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?:
        Schema$GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequest;
  }


  export class Resource$Images {
    root: Vision;
    constructor(root: Vision) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * vision.images.annotate
     * @desc Run image detection and annotation for a batch of images.
     * @alias vision.images.annotate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    annotate(params?: Params$Resource$Images$Annotate, options?: MethodOptions):
        AxiosPromise<
            Schema$GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse>;
    annotate(
        params: Params$Resource$Images$Annotate,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse>):
        void;
    annotate(
        params: Params$Resource$Images$Annotate,
        callback: BodyResponseCallback<
            Schema$GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse>):
        void;
    annotate(callback: BodyResponseCallback<
             Schema$GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse>):
        void;
    annotate(
        paramsOrCallback?: Params$Resource$Images$Annotate|BodyResponseCallback<
            Schema$GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse>):
        void|AxiosPromise<
            Schema$GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse> {
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
              url: (rootUrl + '/v1p1beta1/images:annotate')
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
        createAPIRequest<
            Schema$GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Images$Annotate {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequest;
  }
}
