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

export namespace retail_v2beta {
  export interface Options extends GlobalOptions {
    version: 'v2beta';
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
   * Retail API
   *
   * Cloud Retail service enables customers to build end-to-end personalized recommendation systems without requiring a high level of expertise in machine learning, recommendation system, or Google Cloud.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const retail = google.retail('v2beta');
   * ```
   */
  export class Retail {
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
   * Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; \} service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); \} Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); \} Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.
   */
  export interface Schema$GoogleApiHttpBody {
    /**
     * The HTTP Content-Type header value specifying the content type of the body.
     */
    contentType?: string | null;
    /**
     * The HTTP request/response body as raw binary.
     */
    data?: string | null;
    /**
     * Application specific response metadata. Must be set in the first response for streaming APIs.
     */
    extensions?: Array<{[key: string]: any}> | null;
  }
  /**
   * A description of the context in which an error occurred.
   */
  export interface Schema$GoogleCloudRetailLoggingErrorContext {
    /**
     * The HTTP request which was processed when the error was triggered.
     */
    httpRequest?: Schema$GoogleCloudRetailLoggingHttpRequestContext;
    /**
     * The location in the source code where the decision was made to report the error, usually the place where it was logged.
     */
    reportLocation?: Schema$GoogleCloudRetailLoggingSourceLocation;
  }
  /**
   * An error log which is reported to the Error Reporting system. This proto a superset of google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent.
   */
  export interface Schema$GoogleCloudRetailLoggingErrorLog {
    /**
     * A description of the context in which the error occurred.
     */
    context?: Schema$GoogleCloudRetailLoggingErrorContext;
    /**
     * The error payload that is populated on LRO import APIs.
     */
    importPayload?: Schema$GoogleCloudRetailLoggingImportErrorContext;
    /**
     * A message describing the error.
     */
    message?: string | null;
    /**
     * The API request payload, represented as a protocol buffer. Most API request types are supported. For example: "type.googleapis.com/google.cloud.retail.v2.ProductService.CreateProductRequest" "type.googleapis.com/google.cloud.retail.v2.UserEventService.WriteUserEventRequest"
     */
    requestPayload?: {[key: string]: any} | null;
    /**
     * The API response payload, represented as a protocol buffer. This is used to log some "soft errors", where the response is valid but we consider there are some quality issues like unjoined events. The following API responses are supported and no PII is included: "google.cloud.retail.v2.PredictionService.Predict" "google.cloud.retail.v2.UserEventService.WriteUserEvent" "google.cloud.retail.v2.UserEventService.CollectUserEvent"
     */
    responsePayload?: {[key: string]: any} | null;
    /**
     * The service context in which this error has occurred.
     */
    serviceContext?: Schema$GoogleCloudRetailLoggingServiceContext;
    /**
     * The RPC status associated with the error log.
     */
    status?: Schema$GoogleRpcStatus;
  }
  /**
   * HTTP request data that is related to a reported error.
   */
  export interface Schema$GoogleCloudRetailLoggingHttpRequestContext {
    /**
     * The HTTP response status code for the request.
     */
    responseStatusCode?: number | null;
  }
  /**
   * The error payload that is populated on LRO import APIs. Including: "google.cloud.retail.v2.ProductService.ImportProducts" "google.cloud.retail.v2.EventService.ImportUserEvents"
   */
  export interface Schema$GoogleCloudRetailLoggingImportErrorContext {
    /**
     * The detailed content which caused the error on importing a catalog item.
     */
    catalogItem?: string | null;
    /**
     * GCS file path of the import source. Can be set for batch operation error.
     */
    gcsPath?: string | null;
    /**
     * Line number of the content in file. Should be empty for permission or batch operation error.
     */
    lineNumber?: string | null;
    /**
     * The operation resource name of the LRO.
     */
    operationName?: string | null;
    /**
     * The detailed content which caused the error on importing a product.
     */
    product?: string | null;
    /**
     * The detailed content which caused the error on importing a user event.
     */
    userEvent?: string | null;
  }
  /**
   * Describes a running service that sends errors.
   */
  export interface Schema$GoogleCloudRetailLoggingServiceContext {
    /**
     * An identifier of the service. For example, "retail.googleapis.com".
     */
    service?: string | null;
  }
  /**
   * Indicates a location in the source code of the service for which errors are reported.
   */
  export interface Schema$GoogleCloudRetailLoggingSourceLocation {
    /**
     * Human-readable name of a function or method. For example, "google.cloud.retail.v2.UserEventService.ImportUserEvents".
     */
    functionName?: string | null;
  }
  /**
   * Configuration of destination for Export related errors.
   */
  export interface Schema$GoogleCloudRetailV2alphaExportErrorsConfig {
    /**
     * Google Cloud Storage path for import errors. This must be an empty, existing Cloud Storage bucket. Export errors will be written to a file in this bucket, one per line, as a JSON-encoded `google.rpc.Status` message.
     */
    gcsPrefix?: string | null;
  }
  /**
   * Metadata related to the progress of the Export operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudRetailV2alphaExportMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Response of the ExportProductsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.
   */
  export interface Schema$GoogleCloudRetailV2alphaExportProductsResponse {
    /**
     * A sample of errors encountered while processing the request.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
    /**
     * Echoes the destination for the complete errors in the request if set.
     */
    errorsConfig?: Schema$GoogleCloudRetailV2alphaExportErrorsConfig;
  }
  /**
   * Response of the ExportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.
   */
  export interface Schema$GoogleCloudRetailV2alphaExportUserEventsResponse {
    /**
     * A sample of errors encountered while processing the request.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
    /**
     * Echoes the destination for the complete errors if this field was set in the request.
     */
    errorsConfig?: Schema$GoogleCloudRetailV2alphaExportErrorsConfig;
  }
  /**
   * Configuration of destination for Import related errors.
   */
  export interface Schema$GoogleCloudRetailV2alphaImportErrorsConfig {
    /**
     * Google Cloud Storage path for import errors. This must be an empty, existing Cloud Storage bucket. Import errors will be written to a file in this bucket, one per line, as a JSON-encoded `google.rpc.Status` message.
     */
    gcsPrefix?: string | null;
  }
  /**
   * Metadata related to the progress of the Import operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudRetailV2alphaImportMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Count of entries that encountered errors while processing.
     */
    failureCount?: string | null;
    /**
     * Count of entries that were processed successfully.
     */
    successCount?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Response of the ImportProductsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.
   */
  export interface Schema$GoogleCloudRetailV2alphaImportProductsResponse {
    /**
     * A sample of errors encountered while processing the request.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
    /**
     * Echoes the destination for the complete errors in the request if set.
     */
    errorsConfig?: Schema$GoogleCloudRetailV2alphaImportErrorsConfig;
  }
  /**
   * Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.
   */
  export interface Schema$GoogleCloudRetailV2alphaImportUserEventsResponse {
    /**
     * A sample of errors encountered while processing the request.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
    /**
     * Echoes the destination for the complete errors if this field was set in the request.
     */
    errorsConfig?: Schema$GoogleCloudRetailV2alphaImportErrorsConfig;
    /**
     * Aggregated statistics of user event import status.
     */
    importSummary?: Schema$GoogleCloudRetailV2alphaUserEventImportSummary;
  }
  /**
   * Metadata related to the progress of the Purge operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudRetailV2alphaPurgeMetadata {}
  /**
   * Response of the PurgeUserEventsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field.
   */
  export interface Schema$GoogleCloudRetailV2alphaPurgeUserEventsResponse {
    /**
     * The total count of events purged as a result of the operation.
     */
    purgedEventsCount?: string | null;
  }
  /**
   * Metadata for RejoinUserEvents method.
   */
  export interface Schema$GoogleCloudRetailV2alphaRejoinUserEventsMetadata {}
  /**
   * Response message for RejoinUserEvents method.
   */
  export interface Schema$GoogleCloudRetailV2alphaRejoinUserEventsResponse {
    /**
     * Number of user events that were joined with latest product catalog.
     */
    rejoinedUserEventsCount?: string | null;
  }
  /**
   * A summary of import result. The UserEventImportSummary summarizes the import status for user events.
   */
  export interface Schema$GoogleCloudRetailV2alphaUserEventImportSummary {
    /**
     * Count of user events imported with complete existing catalog information.
     */
    joinedEventsCount?: string | null;
    /**
     * Count of user events imported, but with catalog information not found in the imported catalog.
     */
    unjoinedEventsCount?: string | null;
  }
  /**
   * BigQuery source import data from.
   */
  export interface Schema$GoogleCloudRetailV2betaBigQuerySource {
    /**
     * The schema to use when parsing the data from the source. Supported values for product imports: * `product` (default): One JSON Product per line. Each product must have a valid Product.id. * `product_merchant_center`: See [Importing catalog data from Merchant Center](https://cloud.google.com/retail/recommendations-ai/docs/upload-catalog#mc). Supported values for user events imports: * `user_event` (default): One JSON UserEvent per line. * `user_event_ga360`: Using https://support.google.com/analytics/answer/3437719?hl=en.
     */
    dataSchema?: string | null;
    /**
     * Required. The BigQuery data set to copy the data from with a length limit of 1,024 characters.
     */
    datasetId?: string | null;
    /**
     * Intermediate Cloud Storage directory used for the import with a length limit of 2,000 characters. Can be specified if one wants to have the BigQuery export to a specific Cloud Storage directory.
     */
    gcsStagingDir?: string | null;
    /**
     * The project id (can be project # or id) that the BigQuery source is in with a length limit of 128 characters. If not specified, inherits the project id from the parent request.
     */
    projectId?: string | null;
    /**
     * Required. The BigQuery table to copy the data from with a length limit of 1,024 characters.
     */
    tableId?: string | null;
  }
  /**
   * The catalog configuration.
   */
  export interface Schema$GoogleCloudRetailV2betaCatalog {
    /**
     * Required. Immutable. The catalog display name. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    displayName?: string | null;
    /**
     * Required. Immutable. The fully qualified resource name of the catalog.
     */
    name?: string | null;
    /**
     * Required. The product level configuration.
     */
    productLevelConfig?: Schema$GoogleCloudRetailV2betaProductLevelConfig;
  }
  /**
   * A custom attribute that is not explicitly modeled in Product.
   */
  export interface Schema$GoogleCloudRetailV2betaCustomAttribute {
    /**
     * The numerical values of this custom attribute. For example, `[2.3, 15.4]` when the key is "lengths_cm". At most 400 values are allowed.Otherwise, an INVALID_ARGUMENT error is returned. Exactly one of text or numbers should be set. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    numbers?: number[] | null;
    /**
     * The textual values of this custom attribute. For example, `["yellow", "green"]` when the key is "color". At most 400 values are allowed. Empty values are not allowed. Each value must be a UTF-8 encoded string with a length limit of 256 characters. Otherwise, an INVALID_ARGUMENT error is returned. Exactly one of text or numbers should be set. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    text?: string[] | null;
  }
  /**
   * Configuration of destination for Export related errors.
   */
  export interface Schema$GoogleCloudRetailV2betaExportErrorsConfig {
    /**
     * Google Cloud Storage path for import errors. This must be an empty, existing Cloud Storage bucket. Export errors will be written to a file in this bucket, one per line, as a JSON-encoded `google.rpc.Status` message.
     */
    gcsPrefix?: string | null;
  }
  /**
   * Metadata related to the progress of the Export operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudRetailV2betaExportMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Response of the ExportProductsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.
   */
  export interface Schema$GoogleCloudRetailV2betaExportProductsResponse {
    /**
     * A sample of errors encountered while processing the request.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
    /**
     * Echoes the destination for the complete errors in the request if set.
     */
    errorsConfig?: Schema$GoogleCloudRetailV2betaExportErrorsConfig;
  }
  /**
   * Response of the ExportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.
   */
  export interface Schema$GoogleCloudRetailV2betaExportUserEventsResponse {
    /**
     * A sample of errors encountered while processing the request.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
    /**
     * Echoes the destination for the complete errors if this field was set in the request.
     */
    errorsConfig?: Schema$GoogleCloudRetailV2betaExportErrorsConfig;
  }
  /**
   * Google Cloud Storage location for input content. format.
   */
  export interface Schema$GoogleCloudRetailV2betaGcsSource {
    /**
     * The schema to use when parsing the data from the source. Supported values for product imports: * `product` (default): One JSON Product per line. Each product must have a valid Product.id. * `product_merchant_center`: See [Importing catalog data from Merchant Center](https://cloud.google.com/retail/recommendations-ai/docs/upload-catalog#mcc). Supported values for user events imports: * `user_event` (default): One JSON UserEvent per line. * `user_event_ga360`: Using https://support.google.com/analytics/answer/3437719?hl=en.
     */
    dataSchema?: string | null;
    /**
     * Required. Google Cloud Storage URIs to input files. URI can be up to 2000 characters long. URIs can match the full object path (for example, `gs://bucket/directory/object.json`) or a pattern matching one or more files, such as `gs://bucket/directory/x.json`. A request can contain at most 100 files, and each file can be up to 2 GB. See [Importing product information](https://cloud.google.com/recommendations-ai/docs/upload-catalog) for the expected file format and setup instructions.
     */
    inputUris?: string[] | null;
  }
  /**
   * Product thumbnail/detail image.
   */
  export interface Schema$GoogleCloudRetailV2betaImage {
    /**
     * Height of the image in number of pixels. This field must be nonnegative. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    height?: number | null;
    /**
     * Required. URI of the image. This field must be a valid UTF-8 encoded URI with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [image_link](https://support.google.com/merchants/answer/6324350). Schema.org property [Product.image](https://schema.org/image).
     */
    uri?: string | null;
    /**
     * Width of the image in number of pixels. This field must be nonnegative. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    width?: number | null;
  }
  /**
   * Configuration of destination for Import related errors.
   */
  export interface Schema$GoogleCloudRetailV2betaImportErrorsConfig {
    /**
     * Google Cloud Storage path for import errors. This must be an empty, existing Cloud Storage bucket. Import errors will be written to a file in this bucket, one per line, as a JSON-encoded `google.rpc.Status` message.
     */
    gcsPrefix?: string | null;
  }
  /**
   * Metadata related to the progress of the Import operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudRetailV2betaImportMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Count of entries that encountered errors while processing.
     */
    failureCount?: string | null;
    /**
     * Count of entries that were processed successfully.
     */
    successCount?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for Import methods.
   */
  export interface Schema$GoogleCloudRetailV2betaImportProductsRequest {
    /**
     * The desired location of errors incurred during the Import.
     */
    errorsConfig?: Schema$GoogleCloudRetailV2betaImportErrorsConfig;
    /**
     * Required. The desired input location of the data.
     */
    inputConfig?: Schema$GoogleCloudRetailV2betaProductInputConfig;
    /**
     * Indicates which fields in the provided imported 'products' to update. If not set, will by default update all fields.
     */
    updateMask?: string | null;
  }
  /**
   * Response of the ImportProductsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.
   */
  export interface Schema$GoogleCloudRetailV2betaImportProductsResponse {
    /**
     * A sample of errors encountered while processing the request.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
    /**
     * Echoes the destination for the complete errors in the request if set.
     */
    errorsConfig?: Schema$GoogleCloudRetailV2betaImportErrorsConfig;
  }
  /**
   * Request message for the ImportUserEvents request.
   */
  export interface Schema$GoogleCloudRetailV2betaImportUserEventsRequest {
    /**
     * The desired location of errors incurred during the Import. Cannot be set for inline user event imports.
     */
    errorsConfig?: Schema$GoogleCloudRetailV2betaImportErrorsConfig;
    /**
     * Required. The desired input location of the data.
     */
    inputConfig?: Schema$GoogleCloudRetailV2betaUserEventInputConfig;
  }
  /**
   * Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.
   */
  export interface Schema$GoogleCloudRetailV2betaImportUserEventsResponse {
    /**
     * A sample of errors encountered while processing the request.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
    /**
     * Echoes the destination for the complete errors if this field was set in the request.
     */
    errorsConfig?: Schema$GoogleCloudRetailV2betaImportErrorsConfig;
    /**
     * Aggregated statistics of user event import status.
     */
    importSummary?: Schema$GoogleCloudRetailV2betaUserEventImportSummary;
  }
  /**
   * Response for CatalogService.ListCatalogs method.
   */
  export interface Schema$GoogleCloudRetailV2betaListCatalogsResponse {
    /**
     * All the customer's Catalogs.
     */
    catalogs?: Schema$GoogleCloudRetailV2betaCatalog[];
    /**
     * A token that can be sent as ListCatalogsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Request message for Predict method.
   */
  export interface Schema$GoogleCloudRetailV2betaPredictRequest {
    /**
     * Filter for restricting prediction results with a length limit of 5,000 characters. Accepts values for tags and the `filterOutOfStockItems` flag. * Tag expressions. Restricts predictions to products that match all of the specified tags. Boolean operators `OR` and `NOT` are supported if the expression is enclosed in parentheses, and must be separated from the tag values by a space. `-"tagA"` is also supported and is equivalent to `NOT "tagA"`. Tag values must be double quoted UTF-8 encoded strings with a size limit of 1,000 characters. Note: "Recently viewed" models don't support tag filtering at the moment. * filterOutOfStockItems. Restricts predictions to products that do not have a stockState value of OUT_OF_STOCK. Examples: * tag=("Red" OR "Blue") tag="New-Arrival" tag=(NOT "promotional") * filterOutOfStockItems tag=(-"promotional") * filterOutOfStockItems If your filter blocks all prediction results, nothing will be returned. If you want generic (unfiltered) popular products to be returned instead, set `strictFiltering` to false in `PredictRequest.params`.
     */
    filter?: string | null;
    /**
     * The labels for the predict request. * Label keys can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit. * Non-zero label values can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit. * No more than 64 labels can be associated with a given request. See https://goo.gl/xmQnxf for more information on and examples of labels.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Maximum number of results to return per page. Set this property to the number of prediction results needed. If zero, the service will choose a reasonable default. The maximum allowed value is 100. Values above 100 will be coerced to 100.
     */
    pageSize?: number | null;
    /**
     * The previous PredictResponse.next_page_token.
     */
    pageToken?: string | null;
    /**
     * Additional domain specific parameters for the predictions. Allowed values: * `returnProduct`: Boolean. If set to true, the associated product object will be returned in the `results.metadata` field in the prediction response. * `returnScore`: Boolean. If set to true, the prediction 'score' corresponding to each returned product will be set in the `results.metadata` field in the prediction response. The given 'score' indicates the probability of an product being clicked/purchased given the user's context and history. * `strictFiltering`: Boolean. True by default. If set to false, the service will return generic (unfiltered) popular products instead of empty if your filter blocks all prediction results.
     */
    params?: {[key: string]: any} | null;
    /**
     * Required. Context about the user, what they are looking at and what action they took to trigger the predict request. Note that this user event detail won't be ingested to userEvent logs. Thus, a separate userEvent write request is required for event logging.
     */
    userEvent?: Schema$GoogleCloudRetailV2betaUserEvent;
    /**
     * Use validate only mode for this prediction query. If set to true, a dummy model will be used that returns arbitrary products. Note that the validate only mode should only be used for testing the API, or if the model is not ready.
     */
    validateOnly?: boolean | null;
  }
  /**
   * Response message for predict method.
   */
  export interface Schema$GoogleCloudRetailV2betaPredictResponse {
    /**
     * A unique attribution token. This should be included in the UserEvent logs resulting from this recommendation, which enables accurate attribution of recommendation model performance.
     */
    attributionToken?: string | null;
    /**
     * IDs of products in the request that were missing from the inventory.
     */
    missingIds?: string[] | null;
    /**
     * A list of recommended products. The order represents the ranking (from the most relevant product to the least).
     */
    results?: Schema$GoogleCloudRetailV2betaPredictResponsePredictionResult[];
    /**
     * True if the validateOnly property was set in the request.
     */
    validateOnly?: boolean | null;
  }
  /**
   * PredictionResult represents the recommendation prediction results.
   */
  export interface Schema$GoogleCloudRetailV2betaPredictResponsePredictionResult {
    /**
     * ID of the recommended product
     */
    id?: string | null;
    /**
     * Additional product metadata / annotations. Possible values: * `product`: JSON representation of the product. Will be set if `returnProduct` is set to true in `PredictRequest.params`. * `score`: Prediction score in double value. Will be set if `returnScore` is set to true in `PredictRequest.params`.
     */
    metadata?: {[key: string]: any} | null;
  }
  /**
   * The price information of a Product.
   */
  export interface Schema$GoogleCloudRetailV2betaPriceInfo {
    /**
     * The costs associated with the sale of a particular product. Used for gross profit reporting. * Profit = price - cost Google Merchant Center property [cost_of_goods_sold](https://support.google.com/merchants/answer/9017895).
     */
    cost?: number | null;
    /**
     * The 3-letter currency code defined in [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html). If this field is an unrecognizable currency code, an INVALID_ARGUMENT error is returned.
     */
    currencyCode?: string | null;
    /**
     * Price of the product without any discount. If zero, by default set to be the price.
     */
    originalPrice?: number | null;
    /**
     * Price of the product. Google Merchant Center property [price](https://support.google.com/merchants/answer/6324371). Schema.org property [Offer.priceSpecification](https://schema.org/priceSpecification).
     */
    price?: number | null;
  }
  /**
   * Product captures all metadata information of items to be recommended or searched.
   */
  export interface Schema$GoogleCloudRetailV2betaProduct {
    /**
     * Highly encouraged. Extra product attributes to be included. For example, for products, this could include the store name, vendor, style, color, etc. These are very strong signals for recommendation model, thus we highly recommend providing the attributes here. Features that can take on one of a limited number of possible values. Two types of features can be set are: Textual features. some examples would be the brand/maker of a product, or country of a customer. Numerical features. Some examples would be the height/weight of a product, or age of a customer. For example: `{ "vendor": {"text": ["vendor123", "vendor456"]\}, "lengths_cm": {"numbers":[2.3, 15.4]\}, "heights_cm": {"numbers":[8.1, 6.4]\} \}`. This field needs to pass all below criteria, otherwise an INVALID_ARGUMENT error is returned: * Max entries count: 150 by default; 100 for Type.VARIANT. * The key must be a UTF-8 encoded string with a length limit of 128 characters.
     */
    attributes?: {
      [key: string]: Schema$GoogleCloudRetailV2betaCustomAttribute;
    } | null;
    /**
     * The online availability of the Product. Default to Availability.IN_STOCK. Google Merchant Center Property [availability](https://support.google.com/merchants/answer/6324448). Schema.org Property [Offer.availability](https://schema.org/availability).
     */
    availability?: string | null;
    /**
     * The available quantity of the item.
     */
    availableQuantity?: number | null;
    /**
     * The timestamp when this Product becomes available for recommendation.
     */
    availableTime?: string | null;
    /**
     * Product categories. This field is repeated for supporting one product belonging to several parallel categories. Strongly recommended using the full path for better search / recommendation quality. To represent full path of category, use '\>' sign to separate different hierarchies. If '\>' is part of the category name, please replace it with other character(s). For example, if a shoes product belongs to both ["Shoes & Accessories" -\> "Shoes"] and ["Sports & Fitness" -\> "Athletic Clothing" -\> "Shoes"], it could be represented as: "categories": [ "Shoes & Accessories \> Shoes", "Sports & Fitness \> Athletic Clothing \> Shoes" ] Must be set for Type.PRIMARY Product otherwise an INVALID_ARGUMENT error is returned. At most 250 values are allowed per Product. Empty values are not allowed. Each value must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property google_product_category. Schema.org property [Product.category] (https://schema.org/category). [mc_google_product_category]: https://support.google.com/merchants/answer/6324436
     */
    categories?: string[] | null;
    /**
     * Product description. This field must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [description](https://support.google.com/merchants/answer/6324468). schema.org property [Product.description](https://schema.org/description).
     */
    description?: string | null;
    /**
     * Immutable. Product identifier, which is the final component of name. For example, this field is "id_1", if name is `projects/x/locations/global/catalogs/default_catalog/branches/default_branch/products/id_1`. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [id](https://support.google.com/merchants/answer/6324405). Schema.org Property [Product.sku](https://schema.org/sku).
     */
    id?: string | null;
    /**
     * Product images for the product.Highly recommended to put the main image to the first. A maximum of 300 images are allowed. Google Merchant Center property [image_link](https://support.google.com/merchants/answer/6324350). Schema.org property [Product.image](https://schema.org/image).
     */
    images?: Schema$GoogleCloudRetailV2betaImage[];
    /**
     * Immutable. Full resource name of the product, such as `projects/x/locations/global/catalogs/default_catalog/branches/default_branch/products/product_id`. The branch ID must be "default_branch".
     */
    name?: string | null;
    /**
     * Product price and cost information. Google Merchant Center property [price](https://support.google.com/merchants/answer/6324371).
     */
    priceInfo?: Schema$GoogleCloudRetailV2betaPriceInfo;
    /**
     * Variant group identifier. Must be an id, with the same parent branch with this product. Otherwise, an error is thrown. For Type.PRIMARY Products, this field can only be empty or set to the same value as id. For VARIANT Products, this field cannot be empty. A maximum of 2,000 products are allowed to share the same Type.PRIMARY Product. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center Property [item_group_id](https://support.google.com/merchants/answer/6324507). Schema.org Property [Product.inProductGroupWithID](https://schema.org/inProductGroupWithID). This field must be enabled before it can be used. [Learn more](/recommendations-ai/docs/catalog#item-group-id).
     */
    primaryProductId?: string | null;
    /**
     * Custom tags associated with the product. At most 250 values are allowed per Product. This value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. This tag can be used for filtering recommendation results by passing the tag as part of the PredictRequest.filter. Google Merchant Center property [custom_label_0–4](https://support.google.com/merchants/answer/6324473).
     */
    tags?: string[] | null;
    /**
     * Required. Product title. This field must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [title](https://support.google.com/merchants/answer/6324415). Schema.org property [Product.name](https://schema.org/name).
     */
    title?: string | null;
    /**
     * Immutable. The type of the product. This field is output-only.
     */
    type?: string | null;
    /**
     * Canonical URL directly linking to the product detail page. It is strongly recommended to provide a valid uri for the product, otherwise the service performance could be significantly degraded. This field must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [link](https://support.google.com/merchants/answer/6324416). Schema.org property [Offer.url](https://schema.org/url).
     */
    uri?: string | null;
  }
  /**
   * Detailed product information associated with a user event.
   */
  export interface Schema$GoogleCloudRetailV2betaProductDetail {
    /**
     * Required. Product information. Only Product.id field is used when ingesting an event, all other product fields are ignored as we will look them up from the catalog.
     */
    product?: Schema$GoogleCloudRetailV2betaProduct;
    /**
     * Quantity of the product associated with the user event. For example, this field will be 2 if two products are added to the shopping cart for `purchase-complete` event. Required for `add-to-cart` and `purchase-complete` event types.
     */
    quantity?: number | null;
  }
  /**
   * The inline source for the input config for ImportProducts method.
   */
  export interface Schema$GoogleCloudRetailV2betaProductInlineSource {
    /**
     * Required. A list of products to update/create. Each product must have a valid Product.id. Recommended max of 10k items.
     */
    products?: Schema$GoogleCloudRetailV2betaProduct[];
  }
  /**
   * The input config source for products.
   */
  export interface Schema$GoogleCloudRetailV2betaProductInputConfig {
    /**
     * BigQuery input source.
     */
    bigQuerySource?: Schema$GoogleCloudRetailV2betaBigQuerySource;
    /**
     * Google Cloud Storage location for the input content.
     */
    gcsSource?: Schema$GoogleCloudRetailV2betaGcsSource;
    /**
     * The Inline source for the input content for products.
     */
    productInlineSource?: Schema$GoogleCloudRetailV2betaProductInlineSource;
  }
  /**
   * Configures what level the product should be uploaded with regards to how users will be send events and how predictions will be made.
   */
  export interface Schema$GoogleCloudRetailV2betaProductLevelConfig {
    /**
     * The type of Products allowed to be ingested into the catalog. Acceptable values are: * `primary` (default): You can only ingest Product.Type.PRIMARY Products. This means Product.primary_product_id can only be empty or set to the same value as Product.id. * `variant`: You can only ingest Product.Type.VARIANT Products. This means Product.primary_product_id cannot be empty. If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. If this field is `variant` and merchant_center_product_id_field is `itemGroupId`, an INVALID_ARGUMENT error is returned. See [Using catalog levels](/retail/recommendations-ai/docs/catalog#catalog-levels) for more details.
     */
    ingestionProductType?: string | null;
    /**
     * Which field of [Merchant Center Product](/bigquery-transfer/docs/merchant-center-products-schema) should be imported as Product.id. Acceptable values are: * `offerId` (default): Import `offerId` as the product ID. * `itemGroupId`: Import `itemGroupId` as the product ID. Notice that Retail API will choose one item from the ones with the same `itemGroupId`, and use it to represent the item group. If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. If this field is `itemGroupId` and ingestion_product_type is `variant`, an INVALID_ARGUMENT error is returned. See [Using catalog levels](/retail/recommendations-ai/docs/catalog#catalog-levels) for more details.
     */
    merchantCenterProductIdField?: string | null;
  }
  /**
   * A transaction represents the entire purchase transaction.
   */
  export interface Schema$GoogleCloudRetailV2betaPurchaseTransaction {
    /**
     * All the costs associated with the products. These can be manufacturing costs, shipping expenses not borne by the end user, or any other costs, such that: * Profit = revenue - tax - cost
     */
    cost?: number | null;
    /**
     * Required. Currency code. Use three-character ISO-4217 code.
     */
    currencyCode?: string | null;
    /**
     * The transaction ID with a length limit of 128 characters.
     */
    id?: string | null;
    /**
     * Required. Total non-zero revenue or grand total associated with the transaction. This value include shipping, tax, or other adjustments to total revenue that you want to include as part of your revenue calculations.
     */
    revenue?: number | null;
    /**
     * All the taxes associated with the transaction.
     */
    tax?: number | null;
  }
  /**
   * Metadata related to the progress of the Purge operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudRetailV2betaPurgeMetadata {}
  /**
   * Request message for PurgeUserEvents method.
   */
  export interface Schema$GoogleCloudRetailV2betaPurgeUserEventsRequest {
    /**
     * Required. The filter string to specify the events to be deleted with a length limit of 5,000 characters. Empty string filter is not allowed. The eligible fields for filtering are: * `eventType`: Double quoted UserEvent.event_type string. * `eventTime`: in ISO 8601 "zulu" format. * `visitorId`: Double quoted string. Specifying this will delete all events associated with a visitor. * `userId`: Double quoted string. Specifying this will delete all events associated with a user. Examples: * Deleting all events in a time range: `eventTime \> "2012-04-23T18:25:43.511Z" eventTime < "2012-04-23T18:30:43.511Z"` * Deleting specific eventType in time range: `eventTime \> "2012-04-23T18:25:43.511Z" eventType = "detail-page-view"` * Deleting all events for a specific visitor: `visitorId = "visitor1024"` The filtering fields are assumed to have an implicit AND.
     */
    filter?: string | null;
    /**
     * Actually perform the purge. If `force` is set to false, the method will return the expected purge count without deleting any user events.
     */
    force?: boolean | null;
  }
  /**
   * Response of the PurgeUserEventsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field.
   */
  export interface Schema$GoogleCloudRetailV2betaPurgeUserEventsResponse {
    /**
     * The total count of events purged as a result of the operation.
     */
    purgedEventsCount?: string | null;
  }
  /**
   * Metadata for RejoinUserEvents method.
   */
  export interface Schema$GoogleCloudRetailV2betaRejoinUserEventsMetadata {}
  /**
   * Request message for RejoinUserEvents method.
   */
  export interface Schema$GoogleCloudRetailV2betaRejoinUserEventsRequest {
    /**
     * The type of the user event rejoin to define the scope and range of the user events to be rejoined with the latest product catalog. Defaults to USER_EVENT_REJOIN_SCOPE_UNSPECIFIED if this field is not set, or set to an invalid integer value.
     */
    userEventRejoinScope?: string | null;
  }
  /**
   * Response message for RejoinUserEvents method.
   */
  export interface Schema$GoogleCloudRetailV2betaRejoinUserEventsResponse {
    /**
     * Number of user events that were joined with latest product catalog.
     */
    rejoinedUserEventsCount?: string | null;
  }
  /**
   * UserEvent captures all metadata information Retail API needs to know about how end users interact with customers' website.
   */
  export interface Schema$GoogleCloudRetailV2betaUserEvent {
    /**
     * Extra user event features to include in the recommendation model. The key must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. For product recommendation, an example of extra user information is traffic_channel, i.e. how user arrives at the site. Users can arrive at the site by coming to the site directly, or coming through Google search, and etc.
     */
    attributes?: {
      [key: string]: Schema$GoogleCloudRetailV2betaCustomAttribute;
    } | null;
    /**
     * Highly recommended for user events that are the result of PredictionService.Predict. This field enables accurate attribution of recommendation model performance. The value must be a valid PredictResponse.attribution_token for user events that are the result of PredictionService.Predict. This token enables us to accurately attribute page view or purchase back to the event and the particular predict response containing this clicked/purchased product. If user clicks on product K in the recommendation results, pass PredictResponse.attribution_token as a URL parameter to product K's page. When recording events on product K's page, log the PredictResponse.attribution_token to this field.
     */
    attributionToken?: string | null;
    /**
     * The id or name of the associated shopping cart. This id is used to associate multiple items added or present in the cart before purchase. This can only be set for `add-to-cart`, `purchase-complete`, or `shopping-cart-page-view` events.
     */
    cartId?: string | null;
    /**
     * Only required for UserEventService.ImportUserEvents method. Timestamp of when the user event happened.
     */
    eventTime?: string | null;
    /**
     * Required. User event type. Allowed values are: * `add-to-cart`: Products being added to cart. * `category-page-view`: Special pages such as sale or promotion pages viewed. * `detail-page-view`: Products detail page viewed. * `home-page-view`: Homepage viewed. * `promotion-offered`: Promotion is offered to a user. * `promotion-not-offered`: Promotion is not offered to a user. * `purchase-complete`: User finishing a purchase. * `search`: Product search. * `shopping-cart-page-view`: User viewing a shopping cart.
     */
    eventType?: string | null;
    /**
     * A list of identifiers for the independent experiment groups this user event belongs to. This is used to distinguish between user events associated with different experiment setups (e.g. using Retail API, using different recommendation models).
     */
    experimentIds?: string[] | null;
    /**
     * The categories associated with a category page. To represent full path of category, use '\>' sign to separate different hierarchies. If '\>' is part of the category name, please replace it with other character(s). Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: "pageCategories" : ["Sales \> 2017 Black Friday Deals"]. Required for `category-page-view` events. At least one of search_query or page_categories is required for `search` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    pageCategories?: string[] | null;
    /**
     * A unique id of a web page view. This should be kept the same for all user events triggered from the same pageview. For example, an item detail page view could trigger multiple events as the user is browsing the page. The `pageViewId` property should be kept the same for all these events so that they can be grouped together properly. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically.
     */
    pageViewId?: string | null;
    /**
     * The main product details related to the event. This field is required for the following event types: * `add-to-cart` * `detail-page-view` * `purchase-complete` In a `search` event, this field represents the products returned to the end user on the current page (the end user may have not finished broswing the whole page yet). When a new page is returned to the end user, after pagination/filtering/ordering even for the same query, a new `search` event with different product_details is desired. The end user may have not finished broswing the whole page yet.
     */
    productDetails?: Schema$GoogleCloudRetailV2betaProductDetail[];
    /**
     * A transaction represents the entire purchase transaction. Required for `purchase-complete` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    purchaseTransaction?: Schema$GoogleCloudRetailV2betaPurchaseTransaction;
    /**
     * The referrer URL of the current page. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically.
     */
    referrerUri?: string | null;
    /**
     * The user's search query. The value must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. At least one of search_query or page_categories is required for `search` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    searchQuery?: string | null;
    /**
     * Complete URL (window.location.href) of the user's current page. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically. Maximum length 5,000 characters.
     */
    uri?: string | null;
    /**
     * User information.
     */
    userInfo?: Schema$GoogleCloudRetailV2betaUserInfo;
    /**
     * Required. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor log in/out of the website. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    visitorId?: string | null;
  }
  /**
   * A summary of import result. The UserEventImportSummary summarizes the import status for user events.
   */
  export interface Schema$GoogleCloudRetailV2betaUserEventImportSummary {
    /**
     * Count of user events imported with complete existing catalog information.
     */
    joinedEventsCount?: string | null;
    /**
     * Count of user events imported, but with catalog information not found in the imported catalog.
     */
    unjoinedEventsCount?: string | null;
  }
  /**
   * The inline source for the input config for ImportUserEvents method.
   */
  export interface Schema$GoogleCloudRetailV2betaUserEventInlineSource {
    /**
     * Required. A list of user events to import. Recommended max of 10k items.
     */
    userEvents?: Schema$GoogleCloudRetailV2betaUserEvent[];
  }
  /**
   * The input config source for user events.
   */
  export interface Schema$GoogleCloudRetailV2betaUserEventInputConfig {
    /**
     * Required. BigQuery input source.
     */
    bigQuerySource?: Schema$GoogleCloudRetailV2betaBigQuerySource;
    /**
     * Required. Google Cloud Storage location for the input content.
     */
    gcsSource?: Schema$GoogleCloudRetailV2betaGcsSource;
    /**
     * Required. The Inline source for the input content for UserEvents.
     */
    userEventInlineSource?: Schema$GoogleCloudRetailV2betaUserEventInlineSource;
  }
  /**
   * Information of an end user.
   */
  export interface Schema$GoogleCloudRetailV2betaUserInfo {
    /**
     * True if the request is made directly from the end user, in which case the ip_address and user_agent can be populated from the HTTP request. This flag should be set only if the API request is made directly from the end user such as a mobile app (and not if a gateway or a server is processing and pushing the user events). This should not be set when using the JavaScript tag in UserEventService.CollectUserEvent.
     */
    directUserRequest?: boolean | null;
    /**
     * The end user's IP address. This field is used to extract location information for personalization. This field must be either an IPv4 address (e.g. "104.133.9.80") or an IPv6 address (e.g. "2001:0db8:85a3:0000:0000:8a2e:0370:7334"). Otherwise, an INVALID_ARGUMENT error is returned. This should not be set when using the JavaScript tag in UserEventService.CollectUserEvent or if direct_user_request is set.
     */
    ipAddress?: string | null;
    /**
     * User agent as included in the HTTP header. The field must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. This should not be set when using the client side event reporting with GTM or JavaScript tag in UserEventService.CollectUserEvent or if direct_user_request is set.
     */
    userAgent?: string | null;
    /**
     * Highly recommended for logged-in users. Unique identifier for logged-in user, such as a user name. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    userId?: string | null;
  }
  /**
   * Configuration of destination for Import related errors.
   */
  export interface Schema$GoogleCloudRetailV2ImportErrorsConfig {
    /**
     * Google Cloud Storage path for import errors. This must be an empty, existing Cloud Storage bucket. Import errors will be written to a file in this bucket, one per line, as a JSON-encoded `google.rpc.Status` message.
     */
    gcsPrefix?: string | null;
  }
  /**
   * Metadata related to the progress of the Import operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudRetailV2ImportMetadata {
    /**
     * Operation create time.
     */
    createTime?: string | null;
    /**
     * Count of entries that encountered errors while processing.
     */
    failureCount?: string | null;
    /**
     * Count of entries that were processed successfully.
     */
    successCount?: string | null;
    /**
     * Operation last update time. If the operation is done, this is also the finish time.
     */
    updateTime?: string | null;
  }
  /**
   * Response of the ImportProductsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.
   */
  export interface Schema$GoogleCloudRetailV2ImportProductsResponse {
    /**
     * A sample of errors encountered while processing the request.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
    /**
     * Echoes the destination for the complete errors in the request if set.
     */
    errorsConfig?: Schema$GoogleCloudRetailV2ImportErrorsConfig;
  }
  /**
   * Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.
   */
  export interface Schema$GoogleCloudRetailV2ImportUserEventsResponse {
    /**
     * A sample of errors encountered while processing the request.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
    /**
     * Echoes the destination for the complete errors if this field was set in the request.
     */
    errorsConfig?: Schema$GoogleCloudRetailV2ImportErrorsConfig;
    /**
     * Aggregated statistics of user event import status.
     */
    importSummary?: Schema$GoogleCloudRetailV2UserEventImportSummary;
  }
  /**
   * Metadata related to the progress of the Purge operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudRetailV2PurgeMetadata {}
  /**
   * Response of the PurgeUserEventsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field.
   */
  export interface Schema$GoogleCloudRetailV2PurgeUserEventsResponse {
    /**
     * The total count of events purged as a result of the operation.
     */
    purgedEventsCount?: string | null;
  }
  /**
   * Metadata for RejoinUserEvents method.
   */
  export interface Schema$GoogleCloudRetailV2RejoinUserEventsMetadata {}
  /**
   * Response message for RejoinUserEvents method.
   */
  export interface Schema$GoogleCloudRetailV2RejoinUserEventsResponse {
    /**
     * Number of user events that were joined with latest product catalog.
     */
    rejoinedUserEventsCount?: string | null;
  }
  /**
   * A summary of import result. The UserEventImportSummary summarizes the import status for user events.
   */
  export interface Schema$GoogleCloudRetailV2UserEventImportSummary {
    /**
     * Count of user events imported with complete existing catalog information.
     */
    joinedEventsCount?: string | null;
    /**
     * Count of user events imported, but with catalog information not found in the imported catalog.
     */
    unjoinedEventsCount?: string | null;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$GoogleLongrunningListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$GoogleLongrunningOperation[];
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$GoogleLongrunningOperation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$GoogleRpcStatus;
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
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \} The JSON representation for `Empty` is empty JSON object `{\}`.
   */
  export interface Schema$GoogleProtobufEmpty {}
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$GoogleRpcStatus {
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
    catalogs: Resource$Projects$Locations$Catalogs;
    operations: Resource$Projects$Locations$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.catalogs = new Resource$Projects$Locations$Catalogs(this.context);
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations$Catalogs {
    context: APIRequestContext;
    branches: Resource$Projects$Locations$Catalogs$Branches;
    operations: Resource$Projects$Locations$Catalogs$Operations;
    placements: Resource$Projects$Locations$Catalogs$Placements;
    userEvents: Resource$Projects$Locations$Catalogs$Userevents;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.branches = new Resource$Projects$Locations$Catalogs$Branches(
        this.context
      );
      this.operations = new Resource$Projects$Locations$Catalogs$Operations(
        this.context
      );
      this.placements = new Resource$Projects$Locations$Catalogs$Placements(
        this.context
      );
      this.userEvents = new Resource$Projects$Locations$Catalogs$Userevents(
        this.context
      );
    }

    /**
     * Lists all the Catalogs associated with the project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/retail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const retail = google.retail('v2beta');
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
     *   const res = await retail.projects.locations.catalogs.list({
     *     // Maximum number of Catalogs to return. If unspecified, defaults to 50. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an INVALID_ARGUMENT is returned.
     *     pageSize: 'placeholder-value',
     *     // A page token ListCatalogsResponse.next_page_token, received from a previous CatalogService.ListCatalogs call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to CatalogService.ListCatalogs must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned.
     *     pageToken: 'placeholder-value',
     *     // Required. The account resource name with an associated location. If the caller does not have permission to list Catalogs under this location, regardless of whether or not this location exists, a PERMISSION_DENIED error is returned.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "catalogs": [],
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
      params: Params$Resource$Projects$Locations$Catalogs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Catalogs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudRetailV2betaListCatalogsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Catalogs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Catalogs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2betaListCatalogsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2betaListCatalogsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Catalogs$List,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2betaListCatalogsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2betaListCatalogsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$List
        | BodyResponseCallback<Schema$GoogleCloudRetailV2betaListCatalogsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2betaListCatalogsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRetailV2betaListCatalogsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudRetailV2betaListCatalogsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Catalogs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://retail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+parent}/catalogs').replace(
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
        createAPIRequest<Schema$GoogleCloudRetailV2betaListCatalogsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRetailV2betaListCatalogsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the Catalogs.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/retail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const retail = google.retail('v2beta');
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
     *   const res = await retail.projects.locations.catalogs.patch({
     *     // Required. Immutable. The fully qualified resource name of the catalog.
     *     name: 'projects/my-project/locations/my-location/catalogs/my-catalog',
     *     // Indicates which fields in the provided Catalog to update. If not set, will only update the Catalog.product_level_config field, which is also the only currently supported field to update. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "productLevelConfig": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "productLevelConfig": {}
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
      params: Params$Resource$Projects$Locations$Catalogs$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Catalogs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudRetailV2betaCatalog>;
    patch(
      params: Params$Resource$Projects$Locations$Catalogs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Catalogs$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2betaCatalog>,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2betaCatalog>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Catalogs$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2betaCatalog>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2betaCatalog>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Patch
        | BodyResponseCallback<Schema$GoogleCloudRetailV2betaCatalog>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2betaCatalog>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRetailV2betaCatalog>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudRetailV2betaCatalog>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Catalogs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://retail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRetailV2betaCatalog>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRetailV2betaCatalog>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Catalogs$List
    extends StandardParameters {
    /**
     * Maximum number of Catalogs to return. If unspecified, defaults to 50. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an INVALID_ARGUMENT is returned.
     */
    pageSize?: number;
    /**
     * A page token ListCatalogsResponse.next_page_token, received from a previous CatalogService.ListCatalogs call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to CatalogService.ListCatalogs must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    pageToken?: string;
    /**
     * Required. The account resource name with an associated location. If the caller does not have permission to list Catalogs under this location, regardless of whether or not this location exists, a PERMISSION_DENIED error is returned.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Catalogs$Patch
    extends StandardParameters {
    /**
     * Required. Immutable. The fully qualified resource name of the catalog.
     */
    name?: string;
    /**
     * Indicates which fields in the provided Catalog to update. If not set, will only update the Catalog.product_level_config field, which is also the only currently supported field to update. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRetailV2betaCatalog;
  }

  export class Resource$Projects$Locations$Catalogs$Branches {
    context: APIRequestContext;
    operations: Resource$Projects$Locations$Catalogs$Branches$Operations;
    products: Resource$Projects$Locations$Catalogs$Branches$Products;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations = new Resource$Projects$Locations$Catalogs$Branches$Operations(
        this.context
      );
      this.products = new Resource$Projects$Locations$Catalogs$Branches$Products(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations$Catalogs$Branches$Operations {
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
     * //   https://console.developers.google.com/apis/api/retail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const retail = google.retail('v2beta');
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
     *   const res = await retail.projects.locations.catalogs.branches.operations.get({
     *     // The name of the operation resource.
     *     name:
     *       'projects/my-project/locations/my-location/catalogs/my-catalog/branches/my-branche/operations/my-operation',
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
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Catalogs$Branches$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Branches$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Branches$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Catalogs$Branches$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://retail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Catalogs$Branches$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }

  export class Resource$Projects$Locations$Catalogs$Branches$Products {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a Product.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/retail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const retail = google.retail('v2beta');
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
     *   const res = await retail.projects.locations.catalogs.branches.products.create(
     *     {
     *       // Required. The parent catalog resource name, such as `projects/x/locations/global/catalogs/default_catalog/branches/default_branch`.
     *       parent:
     *         'projects/my-project/locations/my-location/catalogs/my-catalog/branches/my-branche',
     *       // Required. The ID to use for the Product, which will become the final component of the Product.name. If the caller does not have permission to create the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. This field must be unique among all Products with the same parent. Otherwise, an ALREADY_EXISTS error is returned. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     *       productId: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "attributes": {},
     *         //   "availability": "my_availability",
     *         //   "availableQuantity": 0,
     *         //   "availableTime": "my_availableTime",
     *         //   "categories": [],
     *         //   "description": "my_description",
     *         //   "id": "my_id",
     *         //   "images": [],
     *         //   "name": "my_name",
     *         //   "priceInfo": {},
     *         //   "primaryProductId": "my_primaryProductId",
     *         //   "tags": [],
     *         //   "title": "my_title",
     *         //   "type": "my_type",
     *         //   "uri": "my_uri"
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attributes": {},
     *   //   "availability": "my_availability",
     *   //   "availableQuantity": 0,
     *   //   "availableTime": "my_availableTime",
     *   //   "categories": [],
     *   //   "description": "my_description",
     *   //   "id": "my_id",
     *   //   "images": [],
     *   //   "name": "my_name",
     *   //   "priceInfo": {},
     *   //   "primaryProductId": "my_primaryProductId",
     *   //   "tags": [],
     *   //   "title": "my_title",
     *   //   "type": "my_type",
     *   //   "uri": "my_uri"
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
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudRetailV2betaProduct>;
    create(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2betaProduct>,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2betaProduct>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2betaProduct>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2betaProduct>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Branches$Products$Create
        | BodyResponseCallback<Schema$GoogleCloudRetailV2betaProduct>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2betaProduct>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRetailV2betaProduct>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudRetailV2betaProduct>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Branches$Products$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Catalogs$Branches$Products$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://retail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+parent}/products').replace(
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
        createAPIRequest<Schema$GoogleCloudRetailV2betaProduct>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRetailV2betaProduct>(
          parameters
        );
      }
    }

    /**
     * Deletes a Product.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/retail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const retail = google.retail('v2beta');
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
     *   const res = await retail.projects.locations.catalogs.branches.products.delete(
     *     {
     *       // Required. Full resource name of Product, such as `projects/x/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`. If the caller does not have permission to delete the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the Product to delete does not exist, a NOT_FOUND error is returned. The Product to delete can neither be a Product.Type.COLLECTION Product member nor a Product.Type.PRIMARY Product with more than one variants. Otherwise, an INVALID_ARGUMENT error is returned. All inventory information for the named Product will be deleted.
     *       name:
     *         'projects/my-project/locations/my-location/catalogs/my-catalog/branches/my-branche/products/.*',
     *     }
     *   );
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
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Branches$Products$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Branches$Products$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Catalogs$Branches$Products$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://retail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets a Product.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/retail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const retail = google.retail('v2beta');
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
     *   const res = await retail.projects.locations.catalogs.branches.products.get({
     *     // Required. Full resource name of Product, such as `projects/x/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`. If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested Product does not exist, a NOT_FOUND error is returned.
     *     name:
     *       'projects/my-project/locations/my-location/catalogs/my-catalog/branches/my-branche/products/.*',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attributes": {},
     *   //   "availability": "my_availability",
     *   //   "availableQuantity": 0,
     *   //   "availableTime": "my_availableTime",
     *   //   "categories": [],
     *   //   "description": "my_description",
     *   //   "id": "my_id",
     *   //   "images": [],
     *   //   "name": "my_name",
     *   //   "priceInfo": {},
     *   //   "primaryProductId": "my_primaryProductId",
     *   //   "tags": [],
     *   //   "title": "my_title",
     *   //   "type": "my_type",
     *   //   "uri": "my_uri"
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
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudRetailV2betaProduct>;
    get(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2betaProduct>,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2betaProduct>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2betaProduct>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2betaProduct>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Branches$Products$Get
        | BodyResponseCallback<Schema$GoogleCloudRetailV2betaProduct>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2betaProduct>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRetailV2betaProduct>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudRetailV2betaProduct>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Branches$Products$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Catalogs$Branches$Products$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://retail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRetailV2betaProduct>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRetailV2betaProduct>(
          parameters
        );
      }
    }

    /**
     * Bulk import of multiple Products. Request processing may be synchronous. No partial updating is supported. Non-existing items are created. Note that it is possible for a subset of the Products to be successfully updated.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/retail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const retail = google.retail('v2beta');
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
     *   const res = await retail.projects.locations.catalogs.branches.products.import(
     *     {
     *       // Required. `projects/1234/locations/global/catalogs/default_catalog/branches/default_branch` If no updateMask is specified, requires products.create permission. If updateMask is specified, requires products.update permission.
     *       parent:
     *         'projects/my-project/locations/my-location/catalogs/my-catalog/branches/my-branche',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "errorsConfig": {},
     *         //   "inputConfig": {},
     *         //   "updateMask": "my_updateMask"
     *         // }
     *       },
     *     }
     *   );
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
    import(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Import,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    import(
      params?: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    import(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Import,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Import,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Import,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Branches$Products$Import
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Branches$Products$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Catalogs$Branches$Products$Import;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://retail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+parent}/products:import').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Updates a Product.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/retail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const retail = google.retail('v2beta');
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
     *   const res = await retail.projects.locations.catalogs.branches.products.patch({
     *     // If set to true, and the Product is not found, a new Product will be created. In this situation, `update_mask` is ignored.
     *     allowMissing: 'placeholder-value',
     *     // Immutable. Full resource name of the product, such as `projects/x/locations/global/catalogs/default_catalog/branches/default_branch/products/product_id`. The branch ID must be "default_branch".
     *     name:
     *       'projects/my-project/locations/my-location/catalogs/my-catalog/branches/my-branche/products/.*',
     *     // Indicates which fields in the provided Product to update. The immutable and output only fields are NOT supported. If not set, all supported fields (the fields that are neither immutable nor output only) are updated. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "attributes": {},
     *       //   "availability": "my_availability",
     *       //   "availableQuantity": 0,
     *       //   "availableTime": "my_availableTime",
     *       //   "categories": [],
     *       //   "description": "my_description",
     *       //   "id": "my_id",
     *       //   "images": [],
     *       //   "name": "my_name",
     *       //   "priceInfo": {},
     *       //   "primaryProductId": "my_primaryProductId",
     *       //   "tags": [],
     *       //   "title": "my_title",
     *       //   "type": "my_type",
     *       //   "uri": "my_uri"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attributes": {},
     *   //   "availability": "my_availability",
     *   //   "availableQuantity": 0,
     *   //   "availableTime": "my_availableTime",
     *   //   "categories": [],
     *   //   "description": "my_description",
     *   //   "id": "my_id",
     *   //   "images": [],
     *   //   "name": "my_name",
     *   //   "priceInfo": {},
     *   //   "primaryProductId": "my_primaryProductId",
     *   //   "tags": [],
     *   //   "title": "my_title",
     *   //   "type": "my_type",
     *   //   "uri": "my_uri"
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
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudRetailV2betaProduct>;
    patch(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2betaProduct>,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2betaProduct>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2betaProduct>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2betaProduct>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Branches$Products$Patch
        | BodyResponseCallback<Schema$GoogleCloudRetailV2betaProduct>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2betaProduct>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRetailV2betaProduct>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudRetailV2betaProduct>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Branches$Products$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Catalogs$Branches$Products$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://retail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRetailV2betaProduct>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRetailV2betaProduct>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Catalogs$Branches$Products$Create
    extends StandardParameters {
    /**
     * Required. The parent catalog resource name, such as `projects/x/locations/global/catalogs/default_catalog/branches/default_branch`.
     */
    parent?: string;
    /**
     * Required. The ID to use for the Product, which will become the final component of the Product.name. If the caller does not have permission to create the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. This field must be unique among all Products with the same parent. Otherwise, an ALREADY_EXISTS error is returned. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    productId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRetailV2betaProduct;
  }
  export interface Params$Resource$Projects$Locations$Catalogs$Branches$Products$Delete
    extends StandardParameters {
    /**
     * Required. Full resource name of Product, such as `projects/x/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`. If the caller does not have permission to delete the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the Product to delete does not exist, a NOT_FOUND error is returned. The Product to delete can neither be a Product.Type.COLLECTION Product member nor a Product.Type.PRIMARY Product with more than one variants. Otherwise, an INVALID_ARGUMENT error is returned. All inventory information for the named Product will be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Catalogs$Branches$Products$Get
    extends StandardParameters {
    /**
     * Required. Full resource name of Product, such as `projects/x/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`. If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested Product does not exist, a NOT_FOUND error is returned.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Catalogs$Branches$Products$Import
    extends StandardParameters {
    /**
     * Required. `projects/1234/locations/global/catalogs/default_catalog/branches/default_branch` If no updateMask is specified, requires products.create permission. If updateMask is specified, requires products.update permission.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRetailV2betaImportProductsRequest;
  }
  export interface Params$Resource$Projects$Locations$Catalogs$Branches$Products$Patch
    extends StandardParameters {
    /**
     * If set to true, and the Product is not found, a new Product will be created. In this situation, `update_mask` is ignored.
     */
    allowMissing?: boolean;
    /**
     * Immutable. Full resource name of the product, such as `projects/x/locations/global/catalogs/default_catalog/branches/default_branch/products/product_id`. The branch ID must be "default_branch".
     */
    name?: string;
    /**
     * Indicates which fields in the provided Product to update. The immutable and output only fields are NOT supported. If not set, all supported fields (the fields that are neither immutable nor output only) are updated. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRetailV2betaProduct;
  }

  export class Resource$Projects$Locations$Catalogs$Operations {
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
     * //   https://console.developers.google.com/apis/api/retail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const retail = google.retail('v2beta');
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
     *   const res = await retail.projects.locations.catalogs.operations.get({
     *     // The name of the operation resource.
     *     name:
     *       'projects/my-project/locations/my-location/catalogs/my-catalog/operations/my-operation',
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
      params: Params$Resource$Projects$Locations$Catalogs$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Catalogs$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Catalogs$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Catalogs$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Catalogs$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Catalogs$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://retail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x\}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/retail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const retail = google.retail('v2beta');
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
     *   const res = await retail.projects.locations.catalogs.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'projects/my-project/locations/my-location/catalogs/my-catalog',
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
      params: Params$Resource$Projects$Locations$Catalogs$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Catalogs$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Catalogs$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Catalogs$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Catalogs$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Catalogs$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://retail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+name}/operations').replace(
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
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Catalogs$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Catalogs$Operations$List
    extends StandardParameters {
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

  export class Resource$Projects$Locations$Catalogs$Placements {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Makes a recommendation prediction.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/retail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const retail = google.retail('v2beta');
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
     *   const res = await retail.projects.locations.catalogs.placements.predict({
     *     // Required. Full resource name of the format: {name=projects/x/locations/global/catalogs/default_catalog/placements/x\} The ID of the Recommendations AI placement. Before you can request predictions from your model, you must create at least one placement for it. For more information, see [Managing placements](https://cloud.google.com/retail/recommendations-ai/docs/manage-placements). The full list of available placements can be seen at https://console.cloud.google.com/recommendation/catalogs/default_catalog/placements
     *     placement:
     *       'projects/my-project/locations/my-location/catalogs/my-catalog/placements/my-placement',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "filter": "my_filter",
     *       //   "labels": {},
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken",
     *       //   "params": {},
     *       //   "userEvent": {},
     *       //   "validateOnly": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attributionToken": "my_attributionToken",
     *   //   "missingIds": [],
     *   //   "results": [],
     *   //   "validateOnly": false
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
    predict(
      params: Params$Resource$Projects$Locations$Catalogs$Placements$Predict,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    predict(
      params?: Params$Resource$Projects$Locations$Catalogs$Placements$Predict,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudRetailV2betaPredictResponse>;
    predict(
      params: Params$Resource$Projects$Locations$Catalogs$Placements$Predict,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    predict(
      params: Params$Resource$Projects$Locations$Catalogs$Placements$Predict,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2betaPredictResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2betaPredictResponse>
    ): void;
    predict(
      params: Params$Resource$Projects$Locations$Catalogs$Placements$Predict,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2betaPredictResponse>
    ): void;
    predict(
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2betaPredictResponse>
    ): void;
    predict(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Placements$Predict
        | BodyResponseCallback<Schema$GoogleCloudRetailV2betaPredictResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2betaPredictResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRetailV2betaPredictResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudRetailV2betaPredictResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Placements$Predict;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Catalogs$Placements$Predict;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://retail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+placement}:predict').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['placement'],
        pathParams: ['placement'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudRetailV2betaPredictResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRetailV2betaPredictResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Catalogs$Placements$Predict
    extends StandardParameters {
    /**
     * Required. Full resource name of the format: {name=projects/x/locations/global/catalogs/default_catalog/placements/x\} The ID of the Recommendations AI placement. Before you can request predictions from your model, you must create at least one placement for it. For more information, see [Managing placements](https://cloud.google.com/retail/recommendations-ai/docs/manage-placements). The full list of available placements can be seen at https://console.cloud.google.com/recommendation/catalogs/default_catalog/placements
     */
    placement?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRetailV2betaPredictRequest;
  }

  export class Resource$Projects$Locations$Catalogs$Userevents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Retail API JavaScript pixel and Google Tag Manager. Users should not call this method directly.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/retail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const retail = google.retail('v2beta');
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
     *   const res = await retail.projects.locations.catalogs.userEvents.collect({
     *     // The event timestamp in milliseconds. This prevents browser caching of otherwise identical get requests. The name is abbreviated to reduce the payload bytes.
     *     ets: 'placeholder-value',
     *     // Required. The parent catalog name, such as `projects/1234/locations/global/catalogs/default_catalog`.
     *     parent: 'projects/my-project/locations/my-location/catalogs/my-catalog',
     *     // The URL including cgi-parameters but excluding the hash fragment with a length limit of 5,000 characters. This is often more useful than the referer URL, because many browsers only send the domain for 3rd party requests.
     *     uri: 'placeholder-value',
     *     // Required. URL encoded UserEvent proto with a length limit of 2,000,000 characters.
     *     userEvent: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
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
    collect(
      params: Params$Resource$Projects$Locations$Catalogs$Userevents$Collect,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    collect(
      params?: Params$Resource$Projects$Locations$Catalogs$Userevents$Collect,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleApiHttpBody>;
    collect(
      params: Params$Resource$Projects$Locations$Catalogs$Userevents$Collect,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    collect(
      params: Params$Resource$Projects$Locations$Catalogs$Userevents$Collect,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleApiHttpBody>,
      callback: BodyResponseCallback<Schema$GoogleApiHttpBody>
    ): void;
    collect(
      params: Params$Resource$Projects$Locations$Catalogs$Userevents$Collect,
      callback: BodyResponseCallback<Schema$GoogleApiHttpBody>
    ): void;
    collect(callback: BodyResponseCallback<Schema$GoogleApiHttpBody>): void;
    collect(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Userevents$Collect
        | BodyResponseCallback<Schema$GoogleApiHttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleApiHttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleApiHttpBody>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleApiHttpBody>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Userevents$Collect;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Catalogs$Userevents$Collect;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://retail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+parent}/userEvents:collect').replace(
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
        createAPIRequest<Schema$GoogleApiHttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleApiHttpBody>(parameters);
      }
    }

    /**
     * Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/retail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const retail = google.retail('v2beta');
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
     *   const res = await retail.projects.locations.catalogs.userEvents.import({
     *     // Required. `projects/1234/locations/global/catalogs/default_catalog`
     *     parent: 'projects/my-project/locations/my-location/catalogs/my-catalog',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "errorsConfig": {},
     *       //   "inputConfig": {}
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
    import(
      params: Params$Resource$Projects$Locations$Catalogs$Userevents$Import,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    import(
      params?: Params$Resource$Projects$Locations$Catalogs$Userevents$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    import(
      params: Params$Resource$Projects$Locations$Catalogs$Userevents$Import,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Catalogs$Userevents$Import,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Catalogs$Userevents$Import,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Userevents$Import
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Userevents$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Catalogs$Userevents$Import;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://retail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+parent}/userEvents:import').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/retail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const retail = google.retail('v2beta');
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
     *   const res = await retail.projects.locations.catalogs.userEvents.purge({
     *     // Required. The resource name of the catalog under which the events are created. The format is `projects/${projectId\}/locations/global/catalogs/${catalogId\}`
     *     parent: 'projects/my-project/locations/my-location/catalogs/my-catalog',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "filter": "my_filter",
     *       //   "force": false
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
    purge(
      params: Params$Resource$Projects$Locations$Catalogs$Userevents$Purge,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    purge(
      params?: Params$Resource$Projects$Locations$Catalogs$Userevents$Purge,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    purge(
      params: Params$Resource$Projects$Locations$Catalogs$Userevents$Purge,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    purge(
      params: Params$Resource$Projects$Locations$Catalogs$Userevents$Purge,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    purge(
      params: Params$Resource$Projects$Locations$Catalogs$Userevents$Purge,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    purge(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    purge(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Userevents$Purge
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Userevents$Purge;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Catalogs$Userevents$Purge;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://retail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+parent}/userEvents:purge').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Triggers a user event rejoin operation with latest product catalog. Events will not be annotated with detailed product information if product is missing from the catalog at the time the user event is ingested, and these events are stored as unjoined events with a limited usage on training and serving. This API can be used to trigger a 'join' operation on specified events with latest version of product catalog. It can also be used to correct events joined with wrong product catalog.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/retail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const retail = google.retail('v2beta');
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
     *   const res = await retail.projects.locations.catalogs.userEvents.rejoin({
     *     // Required. The parent catalog resource name, such as `projects/1234/locations/global/catalogs/default_catalog`.
     *     parent: 'projects/my-project/locations/my-location/catalogs/my-catalog',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "userEventRejoinScope": "my_userEventRejoinScope"
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
    rejoin(
      params: Params$Resource$Projects$Locations$Catalogs$Userevents$Rejoin,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    rejoin(
      params?: Params$Resource$Projects$Locations$Catalogs$Userevents$Rejoin,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    rejoin(
      params: Params$Resource$Projects$Locations$Catalogs$Userevents$Rejoin,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    rejoin(
      params: Params$Resource$Projects$Locations$Catalogs$Userevents$Rejoin,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    rejoin(
      params: Params$Resource$Projects$Locations$Catalogs$Userevents$Rejoin,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    rejoin(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    rejoin(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Userevents$Rejoin
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Userevents$Rejoin;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Catalogs$Userevents$Rejoin;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://retail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+parent}/userEvents:rejoin').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Writes a single user event.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/retail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const retail = google.retail('v2beta');
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
     *   const res = await retail.projects.locations.catalogs.userEvents.write({
     *     // Required. The parent catalog resource name, such as `projects/1234/locations/global/catalogs/default_catalog`.
     *     parent: 'projects/my-project/locations/my-location/catalogs/my-catalog',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "attributes": {},
     *       //   "attributionToken": "my_attributionToken",
     *       //   "cartId": "my_cartId",
     *       //   "eventTime": "my_eventTime",
     *       //   "eventType": "my_eventType",
     *       //   "experimentIds": [],
     *       //   "pageCategories": [],
     *       //   "pageViewId": "my_pageViewId",
     *       //   "productDetails": [],
     *       //   "purchaseTransaction": {},
     *       //   "referrerUri": "my_referrerUri",
     *       //   "searchQuery": "my_searchQuery",
     *       //   "uri": "my_uri",
     *       //   "userInfo": {},
     *       //   "visitorId": "my_visitorId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attributes": {},
     *   //   "attributionToken": "my_attributionToken",
     *   //   "cartId": "my_cartId",
     *   //   "eventTime": "my_eventTime",
     *   //   "eventType": "my_eventType",
     *   //   "experimentIds": [],
     *   //   "pageCategories": [],
     *   //   "pageViewId": "my_pageViewId",
     *   //   "productDetails": [],
     *   //   "purchaseTransaction": {},
     *   //   "referrerUri": "my_referrerUri",
     *   //   "searchQuery": "my_searchQuery",
     *   //   "uri": "my_uri",
     *   //   "userInfo": {},
     *   //   "visitorId": "my_visitorId"
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
    write(
      params: Params$Resource$Projects$Locations$Catalogs$Userevents$Write,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    write(
      params?: Params$Resource$Projects$Locations$Catalogs$Userevents$Write,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudRetailV2betaUserEvent>;
    write(
      params: Params$Resource$Projects$Locations$Catalogs$Userevents$Write,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    write(
      params: Params$Resource$Projects$Locations$Catalogs$Userevents$Write,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2betaUserEvent>,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2betaUserEvent>
    ): void;
    write(
      params: Params$Resource$Projects$Locations$Catalogs$Userevents$Write,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2betaUserEvent>
    ): void;
    write(
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2betaUserEvent>
    ): void;
    write(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Userevents$Write
        | BodyResponseCallback<Schema$GoogleCloudRetailV2betaUserEvent>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2betaUserEvent>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRetailV2betaUserEvent>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudRetailV2betaUserEvent>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Userevents$Write;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Catalogs$Userevents$Write;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://retail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+parent}/userEvents:write').replace(
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
        createAPIRequest<Schema$GoogleCloudRetailV2betaUserEvent>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRetailV2betaUserEvent>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Catalogs$Userevents$Collect
    extends StandardParameters {
    /**
     * The event timestamp in milliseconds. This prevents browser caching of otherwise identical get requests. The name is abbreviated to reduce the payload bytes.
     */
    ets?: string;
    /**
     * Required. The parent catalog name, such as `projects/1234/locations/global/catalogs/default_catalog`.
     */
    parent?: string;
    /**
     * The URL including cgi-parameters but excluding the hash fragment with a length limit of 5,000 characters. This is often more useful than the referer URL, because many browsers only send the domain for 3rd party requests.
     */
    uri?: string;
    /**
     * Required. URL encoded UserEvent proto with a length limit of 2,000,000 characters.
     */
    userEvent?: string;
  }
  export interface Params$Resource$Projects$Locations$Catalogs$Userevents$Import
    extends StandardParameters {
    /**
     * Required. `projects/1234/locations/global/catalogs/default_catalog`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRetailV2betaImportUserEventsRequest;
  }
  export interface Params$Resource$Projects$Locations$Catalogs$Userevents$Purge
    extends StandardParameters {
    /**
     * Required. The resource name of the catalog under which the events are created. The format is `projects/${projectId\}/locations/global/catalogs/${catalogId\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRetailV2betaPurgeUserEventsRequest;
  }
  export interface Params$Resource$Projects$Locations$Catalogs$Userevents$Rejoin
    extends StandardParameters {
    /**
     * Required. The parent catalog resource name, such as `projects/1234/locations/global/catalogs/default_catalog`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRetailV2betaRejoinUserEventsRequest;
  }
  export interface Params$Resource$Projects$Locations$Catalogs$Userevents$Write
    extends StandardParameters {
    /**
     * Required. The parent catalog resource name, such as `projects/1234/locations/global/catalogs/default_catalog`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRetailV2betaUserEvent;
  }

  export class Resource$Projects$Locations$Operations {
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
     * //   https://console.developers.google.com/apis/api/retail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const retail = google.retail('v2beta');
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
     *   const res = await retail.projects.locations.operations.get({
     *     // The name of the operation resource.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
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
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://retail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x\}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/retail.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const retail = google.retail('v2beta');
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
     *   const res = await retail.projects.locations.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'projects/my-project/locations/my-location',
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
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>
      | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://retail.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+name}/operations').replace(
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
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$List
    extends StandardParameters {
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
}
